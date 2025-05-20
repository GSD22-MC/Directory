CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  job_id INTEGER NOT NULL,
  provider_id INTEGER NOT NULL,
  price REAL,
  timeline TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(job_id) REFERENCES jobs(id),
  FOREIGN KEY(provider_id) REFERENCES users(id)
);
