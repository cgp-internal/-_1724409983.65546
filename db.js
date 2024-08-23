const sqlite3 = require('sqlite3');

let db = null;

const initDB = () => {
  if (!db) {
    db = new sqlite3.Database('database.db', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
    });
  }
};

const getDB = () => {
  if (!db) {
    initDB();
  }
  return db;
};

module.exports = { db: getDB };