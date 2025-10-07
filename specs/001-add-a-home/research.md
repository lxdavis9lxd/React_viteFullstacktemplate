# Research: Home Page, Navigation, and Auth UI

## Decision: Embedded Database for User Registration
- Chosen: SQLite
- Rationale: SQLite is a widely used, file-based embedded database with strong support in Node.js/Express. It is lightweight, reliable, and easy to set up for MVP and small-scale applications. It supports ACID transactions and is well-documented.
- Alternatives considered: NeDB (pure JS, lightweight but less robust), lowdb (simple JSON, minimal features)

## Decision: Password Encryption
- Chosen: bcrypt
- Rationale: bcrypt is an industry standard for password hashing, providing strong security and resistance to brute-force attacks.
- Alternatives considered: argon2, scrypt

## Decision: Authentication Method
- Chosen: JWT (JSON Web Token) for stateless sessions
- Rationale: JWT is widely used for web authentication, scalable, and integrates well with React/Express. Session-based auth may be used for simple cases.
- Alternatives considered: session cookies

## Decision: UI Libraries
- Chosen: Tailwind CSS, Heroicons
- Rationale: Tailwind provides rapid, consistent styling; Heroicons offers high-quality icons.
- Alternatives considered: Bootstrap, Material UI

## Decision: API Client
- Chosen: Axios
- Rationale: Axios is a popular, promise-based HTTP client for JavaScript, easy to use with React.
- Alternatives considered: fetch API
