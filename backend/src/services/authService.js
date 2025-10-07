const bcrypt = require('bcrypt');
const User = require('../models/User');

const SALT_ROUNDS = 10;

class AuthService {
  static async hashPassword(password) {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  static async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  static async register({ firstName, lastName, email, password }) {
    // Check if user already exists
    const existingUser = User.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(password);

    // Create user
    const userId = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return { id: userId, firstName, lastName, email };
  }

  static async login({ email, password }) {
    // Find user
    const user = User.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValid = await this.comparePassword(password, user.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }
}

module.exports = AuthService;
