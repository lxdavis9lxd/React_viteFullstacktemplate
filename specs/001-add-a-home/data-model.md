# Data Model: Home Page, Navigation, and Auth UI

## Entities

### User
- firstName: string (required)
- lastName: string (required)
- email: string (required, unique)
- password: string (hashed, required)

#### Validation Rules
- All fields required for registration
- Email must be unique
- Password must be hashed with bcrypt

### Session
- userId: string (references User)
- token: string (JWT)
- createdAt: datetime

## Relationships
- One User can have multiple Sessions

## State Transitions
- Registration: creates User
- Login: creates Session
- Logout: deletes Session
