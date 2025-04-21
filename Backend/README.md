# 🚀 Authentication API Documentation

This API provides authentication functionality for two user types: **Users** and **Captains**. It includes endpoints for **registration**, **login**, **profile retrieval**, and **logout**. JWT tokens are used for session management and are stored in **HTTP-only cookies** for added security.

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

This endpoint uses the `userAuth` to validate JWT from cookies. The token must be present in an **HTTP-only cookie** named `token`.

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
```

# Captain API Documentation

This API provides captain authentication functionality, including user **registration** and **login**. Below are the details for both endpoints.

## 📌 Endpoint: `/captains/register`

### Method: `POST`

Registers a new **Captain** by collecting personal and vehicle-related information. A JWT token is returned upon successful registration and is stored in an **HTTP-only cookie**.

---

### ✅ Request Body

The request must be in JSON format and contain the following fields:

| Field       | Type     | Required | Description                                      |
|-------------|----------|----------|--------------------------------------------------|
| firstname   | String   | Yes      | Minimum 3 characters.                            |
| lastname    | String   | Yes      | Minimum 3 characters.                            |
| email       | String   | Yes      | Must be a valid, unique email address.           |
| password    | String   | Yes      | Password for the captain.                        |
| socketId    | String   | Yes      | Socket ID for real-time communication.           |
| vehicle     | Object   | Yes      | Contains details about the captain's vehicle.    |
| └─ color    | String   | Yes      | Minimum 3 characters.                            |
| └─ capacity | Number   | Yes      | Minimum 3 (e.g. 3 passengers).                   |
| └─ plate    | String   | Yes      | Minimum 3 characters.                            |
| └─ vehicleType | String | Yes   | One of `"car"`, `"motorcycle"`, `"auto"`.        |
| location    | Object   | No       | Optional current location of the captain.        |
| └─ lat      | Number   | No       | Latitude coordinate.                             |
| └─ lng      | Number   | No       | Longitude coordinate.                            |

---

### 🛡️ Validation Rules

- **Email** must be unique and at least 5 characters.
- **Firstname, lastname, vehicle color, plate** must be at least 3 characters.
- **Vehicle capacity** must be at least 3.
- **Vehicle type** must be one of the accepted values: `"car"`, `"motorcycle"`, `"auto"`.

---

### 📤 Sample Request

```json
{
  "firstname": "Ali",
  "lastname": "Khan",
  "email": "ali.khan@example.com",
  "password": "strongpassword",
  "socketId": "socket_id_98765",
  "vehicle": {
    "color": "Black",
    "capacity": 4,
    "plate": "XYZ123",
    "vehicleType": "car"
  },
  "location": {
    "lat": 24.8607,
    "lng": 67.0011
  }
}
```
## 📌 Endpoint: `/captains/login`

### Method: `POST`

Authenticates a captain using email and password. On successful login, returns a JWT token stored in an **HTTP-only cookie**.

---

### 🔒 Authentication

- This route validates the credentials against stored captain records.
- Password comparison is done using bcrypt.
- JWT token is generated on success and stored in a secure cookie named `token`.

---

### ✅ Request Body

The request must be in JSON format and include:

| Field     | Type   | Required | Description                          |
|-----------|--------|----------|--------------------------------------|
| email     | String | Yes      | Must be a valid registered email.    |
| password  | String | Yes      | Minimum 6 characters.                |

---

### 📤 Sample Request

```json
{
  "email": "ali.khan@example.com",
  "password": "strongpassword"
}
```
## 📌 Endpoint: `/captains/logout`

### Method: `GET`

Logs out the currently authenticated **Captain** by clearing the authentication token from the client's cookies.

---

### 🔒 Authentication

This route is **protected** and requires a valid JWT token in an **HTTP-only cookie** named `token`.  
The `authCaptain` middleware is used to verify authentication before proceeding.

---

### ✅ Sample Response

```json
{
  "message": "Logout successfully"
}
```