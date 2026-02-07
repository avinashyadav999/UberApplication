# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).   
  - `email` (string): User's email address (must be a valid email).



## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:

## `/captains/register` Endpoint

### Description

Registers a new captain by creating a captain account with the provided information.

### HTTP Method

`POST`

### Request Body

```json
{
  "fullname": {
    "firstname": "John",  // Required: minimum 3 characters
    "lastname": "Doe"     // Optional: minimum 3 characters if provided
  },
  "email": "john@example.com",  // Required: must be valid email format
  "password": "password123",     // Required: minimum 6 characters
  "vehicle": {
    "color": "black",            // Required: minimum 3 characters
    "plate": "ABC1234",          // Required: minimum 3 characters
    "capacity": 4,               // Required: minimum 1, must be integer
    "vehicleType": "car"         // Required: must be 'car', 'motorcycle', or 'auto'
  }
}
```

### Success Response (201)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT Token for authentication
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response (400 - Validation/Duplicate)

```json
{
  "message": "Captain already exist"  // Returned if email is already registered
}
// OR
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

---

## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

```json
{
  "email": "john@example.com",  // Required: must be valid email format
  "password": "password123"      // Required: minimum 6 characters
}
```

### Success Response (200)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  // JWT Token for authentication
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response (401 - Invalid Credentials)

```json
{
  "message": "Invalid email or password"  // Returned for non-existent email or wrong password
}
```

### Error Response (400 - Validation)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

---

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Authentication

Required: Valid JWT token in Authorization header or cookie:
```
Authorization: Bearer <token>
```

### Success Response (200)

```json
{
  "captain": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response (401 - Unauthorized)

```json
{
  "message": "Unauthorized"  // Returned if token is missing, invalid, or blacklisted
}
```

---
## `/captains/logout` Endpoint

### Description

Logs out the current captain and blacklists their authentication token.

### HTTP Method

`GET`

### Authentication

Required: Valid JWT token in Authorization header or cookie:
```
Authorization: Bearer <token>
```

### Success Response (200)

```json
{
  "message": "Logout successfully"  // Token is blacklisted and cleared from cookies
}
```

### Error Response (401 - Unauthorized)

```json
{
  "message": "Unauthorized"  // Returned if token is missing, invalid, or already blacklisted
}
```












