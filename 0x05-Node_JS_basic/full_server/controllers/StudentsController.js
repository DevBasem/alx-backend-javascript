// controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);
      let responseText = 'This is the list of our students\n';

      Object.keys(students).sort().forEach((field) => {
        const list = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);
      const major = req.params.major;

      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const list = students[major].join(', ');
      res.status(200).send(`List: ${list}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
