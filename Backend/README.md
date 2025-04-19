# User API Documentation

This API provides user authentication functionality, including user **registration** and **login**. Below are the details for both endpoints.

---

## 📌 Endpoint: `/users/register`

### Method: `POST`

Registers a new user by accepting personal details and creating a record in the database. A JWT token is returned upon successful registration.

---

### ✅ Request Body

The request must contain the following fields:

| Field      | Type   | Required | Description                             |
|------------|--------|----------|-----------------------------------------|
| email      | String | Yes      | Must be a valid email address.          |
| firstname  | String | Yes      | Minimum 3 characters.                   |
| lastname   | String | Yes      | Minimum 3 characters.                   |
| password   | String | Yes      | User's password.                        |
| socketId   | String | Yes      | Socket ID for the user.                 |

---

### 🛡️ Validation Rules

- **email**:
  - Must be a valid email format.
  - Error: `"Invalid Email"`
- **firstname**:
  - Minimum 3 characters.
  - Error: `"First name must be at least 3 characters long"`
- **lastname**:
  - Minimum 3 characters.
  - Error: `"Last name must be at least 3 characters long"`

---

### 📤 Sample Request

```json
{
  "email": "user@example.com",
  "firstname": "John",
  "lastname": "Doe",
  "password": "password123",
  "socketId": "socket_id_12345"
}
```
## 📌 Endpoint: `/users/login`

### Method: `POST`

Authenticates a user using their email and password. If the credentials match a registered user, a token and user data are returned.

---

### ✅ Request Body

The request must be in JSON format and contain the following fields:

| Field    | Type   | Required | Description                             |
|----------|--------|----------|-----------------------------------------|
| email    | String | Yes      | Must be a valid email address.          |
| password | String | Yes      | Must be at least 6 characters long.     |

---

### 🛡️ Validation Rules

- **email**:
  - Must be a valid email format.
  - Error: `"Invalid Email"`

- **password**:
  - Minimum 6 characters.
  - Error: `"Password must be at least 6 characters long"`

---

### 📤 Sample Request

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

## 📌 Endpoint: `/users/profile`

### Method: `GET`

Fetches the profile information of the currently authenticated user. This route is **protected** and requires a valid token stored in cookies.

---

### 🔒 Authentication

This endpoint uses the `authMiddleware` to validate JWT from cookies. The token must be present in an **HTTP-only cookie** named `token`.

---

### ✅ Sample Response

```json
{
  "_id": "65fbb56e6a6f3b0012ab12cd",
  "firstname": "John",
  "lastname": "Doe",
  "email": "user@example.com",
  "socketId": "socket_id_12345"
}
```

## 📌 Endpoint: `/users/logout`

### Method: `GET`

Logs out the currently authenticated user by clearing the authentication token from cookies.

---

### 🔒 Authentication

This endpoint is **protected** and requires a valid `token` stored in cookies.

---

### ✅ Sample Response

```json
{
  "message": "Logout successfully"
}
