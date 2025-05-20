const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

const schemaDir = path.join(__dirname, 'schema');
const schemaFiles = ['users.sql', 'jobs.sql', 'quotes.sql', 'messages.sql', 'reviews.sql'];

schemaFiles.forEach(file => {
  const filePath = path.join(schemaDir, file);
  const schema = fs.readFileSync(filePath, 'utf8');
  db.exec(schema);
});

module.exports = db;
