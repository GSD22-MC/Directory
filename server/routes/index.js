const express = require('express');
const jobsRouter = require('./jobs');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API working' });
});

router.use('/jobs', jobsRouter);

module.exports = router;
