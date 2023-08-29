const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('employees.db');

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS employees');
  db.run(`
    CREATE TABLE employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      code TEXT,
      profession TEXT,
      color TEXT,
      city TEXT,
      branch TEXT,
      assigned BOOLEAN
    )
  `);

  const initialData = require('./data/employees.json');
  const stmt = db.prepare('INSERT INTO employees (name, code, profession, color, city, branch, assigned) VALUES (?, ?, ?, ?, ?, ?, ?)');
  initialData.forEach(employee => {
    stmt.run(
      employee.name,
      employee.code,
      employee.profession,
      employee.color,
      employee.city,
      employee.branch,
      employee.assigned
    );
  });
  stmt.finalize();
});

app.get('/api/employees', (req, res) => {
  db.all('SELECT * FROM employees', (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(200).json(rows);
    }
  });
});

app.delete('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  db.run('DELETE FROM employees WHERE id = ?', id, err => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(204).send();
    }
  });
});

app.put('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEmployee = req.body;

  db.run(
    'UPDATE employees SET name = ?, code = ?, profession = ?, color = ?, city = ?, branch = ?, assigned = ? WHERE id = ?',
    updatedEmployee.name,
    updatedEmployee.code,
    updatedEmployee.profession,
    updatedEmployee.color,
    updatedEmployee.city,
    updatedEmployee.branch,
    updatedEmployee.assigned,
    id,
    err => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
      } else {
        res.status(200).json(updatedEmployee);
      }
    }
  );
});

app.post('/api/employees', (req, res) => {
  const newEmployee = req.body;
  db.run(
    'INSERT INTO employees (name, code, profession, color, city, branch, assigned) VALUES (?, ?, ?, ?, ?, ?, ?)',
    newEmployee.name,
    newEmployee.code,
    newEmployee.profession,
    newEmployee.color,
    newEmployee.city,
    newEmployee.branch,
    newEmployee.assigned,
    err => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
      } else {
        res.status(201).json(newEmployee);
      }
    }
  );
});

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'));
