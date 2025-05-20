const express = require('express');
const routes = require('./routes');
require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
