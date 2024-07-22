const express = require('express');
const fs = require('fs').promises;

const PORT = 1245;
const app = express();

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      return 'Cannot load the database';
    }

    const students = lines.slice(1).map(line => line.split(',')).filter(fields => fields.length === 4);
    const numberOfStudents = students.length;

    const fields = {};
    students.forEach(student => {
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

    // Trim the final response to remove any trailing newlines
    return responseText.trim();
  } catch (error) {
    return 'Cannot load the database';
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];
  const studentsData = await countStudents(filePath);
  res.send(`This is the list of our students\n${studentsData}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
