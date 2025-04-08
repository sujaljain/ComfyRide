# User API Documentation

## Endpoints

### 1. **POST** `/users/register`

#### Description
This endpoint allows users to register by providing their first name, last name, email, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

#### Request Body
The request body must be in JSON format and include the following fields:

- **fullName**: An object containing:
  - **firstName**: A string representing the user's first name (required, minimum length: 3 characters).
  - **lastName**: A string representing the user's last name (optional, minimum length: 3 characters).
- **email**: A string representing the user's email address (required, must be a valid email format).
- **password**: A string representing the user's password (required, minimum length: 6 characters).

#### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Responses
- **201 Created**: Returned when the user is successfully registered. The response includes the generated token and user details.
- **400 Bad Request**: Returned when the request body is missing required fields or contains invalid data.

#### Example Response
```json
{
  "token": "your_jwt_token",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Status Codes
- **201**: User successfully registered.
- **400**: Validation errors in the request body.

---

### 2. **POST** `/users/login`

#### Description
This endpoint allows users to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned along with the user details.

#### Request Body
The request body must be in JSON format and include the following fields:

- **email**: A string representing the user's email address (required, must be a valid email format).
- **password**: A string representing the user's password (required, minimum length: 6 characters).

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Responses
- **200 OK**: Returned when the user is successfully authenticated. The response includes the generated token and user details.
- **400 Bad Request**: Returned when the request body is missing required fields or contains invalid data.
- **401 Unauthorized**: Returned when the email or password is incorrect.

#### Example Response
```json
{
  "token": "your_jwt_token",
  "user": {
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Status Codes
- **200**: User successfully authenticated.
- **400**: Validation errors in the request body.
- **401**: Invalid email or password.