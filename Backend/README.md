# User Registration API Documentation

This API allows users to register by providing their personal details such as email, first name, last name, password, and socketId. The endpoint validates the inputs and stores the user in the database if they are valid.

## Endpoint: `/users/register`

### Method: `POST`

This endpoint allows a user to register by providing their information. It performs validation checks and returns a token upon successful registration.

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. **Required**. Must be a valid email format.
- `firstname` (string): The first name of the user. **Required**. Minimum length of 3 characters.
- `lastname` (string): The last name of the user. **Required**. Minimum length of 3 characters.
- `password` (string): The password for the user's account. **Required**.
- `socketId` (string): The socket ID for the user. **Required**.

### Validation Rules

1. **email**: 
   - Must be a valid email format.
   - Error message: `"Invalid Email"`
2. **firstname**:
   - Must have at least 3 characters.
   - Error message: `"First name must be at least 3 characters long"`
3. **lastname**:
   - Must have at least 3 characters.
   - Error message: `"Last name must be at least 3 characters long"`
4. **password**: 
   - Must be provided (this field is required but not explicitly validated in this part).
5. **socketId**:
   - Must be provided.

### Sample Request

```json
{
  "email": "user@example.com",
  "firstname": "John",
  "lastname": "Doe",
  "password": "password123",
  "socketId": "socket_id_12345"
}
