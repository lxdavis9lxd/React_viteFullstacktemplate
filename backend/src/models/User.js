const db = require('./database');

class User {
  static create({ firstName, lastName, email, password }) {
    const stmt = db.prepare(`
      INSERT INTO users (firstName, lastName, email, password)
      VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(firstName, lastName, email, password);
    return result.lastInsertRowid;
  }

  static findByEmail(email) {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  }

  static findById(id) {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id);
  }
}

module.exports = User;
