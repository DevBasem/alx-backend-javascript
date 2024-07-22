const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length === 4);
    const numberOfStudents = students.length;

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    let responseText = `Number of students: ${numberOfStudents}\n`;

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    return responseText.trim();
  } catch (error) {
    return 'Cannot load the database';
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', 'Hello Holberton School!'.length);
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];
    const studentsData = await countStudents(filePath);

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', studentsData.length + 'This is the list of our students\n'.length);
    res.statusCode = 200;
    res.end(`This is the list of our students\n${studentsData}\n`);
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
