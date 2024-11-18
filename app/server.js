const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'sysadmin',
  host: 'db',
  database: 'sysadmindb',
  password: 'adminpass',
  port: 5432,
});

app.use(bodyParser.json());
app.use(express.static('views'));

app.post('/add', async (req, res) => {
  const { task } = req.body;
  try {
    await pool.query('INSERT INTO tasks (description) VALUES ($1)', [task]);
    res.status(200).send('Task added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding task');
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving tasks');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
