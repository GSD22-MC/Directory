const express = require('express');
const db = require('../db');

const router = express.Router();

// Create a new job
router.post('/', (req, res) => {
  const { user_id, title, description, location, timeline } = req.body;

  if (!user_id || !title) {
    return res.status(400).json({ error: 'user_id and title are required' });
  }

  const sql = `INSERT INTO jobs (user_id, title, description, location, timeline) VALUES (?, ?, ?, ?, ?)`;
  const params = [user_id, title, description, location, timeline];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create job' });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// List jobs
router.get('/', (req, res) => {
  db.all('SELECT * FROM jobs', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch jobs' });
    }
    res.json(rows);
  });
});

module.exports = router;
