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

---

### 3. **GET** `/users/profile`

#### Description

This endpoint allows authenticated users to retrieve their profile information. The request must include a valid JSON Web Token (JWT) in the `Authorization` header.

#### Headers

- **Authorization**: A string containing the Bearer token (e.g., `Bearer your_jwt_token`).

#### Example Request

```http
GET /users/profile HTTP/1.1
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**: Returned when the user is successfully authenticated. The response includes the user's profile information.
- **401 Unauthorized**: Returned when the token is missing, invalid, or expired.

#### Example Response

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Status Codes

- **200**: User profile retrieved successfully.
- **401**: Unauthorized access.

---

### 4. **GET** `/users/logout`

#### Description

This endpoint allows authenticated users to log out by invalidating their token. The request must include a valid JSON Web Token (JWT) in the `Authorization` header or as a cookie.

#### Headers

- **Authorization**: A string containing the Bearer token (e.g., `Bearer your_jwt_token`).

#### Example Request

```http
GET /users/logout HTTP/1.1
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**: Returned when the user is successfully logged out.
- **401 Unauthorized**: Returned when the token is missing, invalid, or expired.

#### Example Response

```json
{
  "message": "Logged out successfully"
}
```

#### Status Codes

- **200**: User logged out successfully.
- **401**: Unauthorized access.

---

# Captain API Documentation

## Endpoints

---

### 1. **POST** `/captains/register`

#### Description

This endpoint allows captains to register by providing their personal details and vehicle information. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the captain's details.

#### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "fullName": {
    "firstName": "Jane", // Required, minimum length: 3 characters
    "lastName": "Doe" // Optional, minimum length: 3 characters
  },
  "email": "jane.doe@example.com", // Required, must be a valid email format
  "password": "securepassword", // Required, minimum length: 6 characters
  "vehicle": {
    "color": "Red", // Required, minimum length: 3 characters
    "number": "AB123CD", // Required, minimum length: 3 characters, must be unique
    "capacity": 4, // Required, minimum value: 1
    "vehicleType": "car" // Required, must be one of ["bike", "auto", "car"]
  }
}
```

#### Responses

- **201 Created**: Returned when the captain is successfully registered.
- **400 Bad Request**: Returned when the captain already exists.
- **422 Unprocessable Entity**: Returned when the request body is missing required fields or contains invalid data.
- **500 Internal Server Error**: Returned when there is an issue creating the captain.

#### Example Response

```json
{
  "message": "Captain registered successfully",
  "token": "your_jwt_token",
  "captain": {
    "id": "643b1f2e8f1b2c0012345678",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "number": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 2. **POST** `/captains/login`

#### Description

This endpoint allows captains to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned along with the captain's details.

#### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "email": "jane.doe@example.com", // Required, must be a valid email format
  "password": "securepassword" // Required, minimum length: 6 characters
}
```

#### Responses

- **200 OK**: Returned when the captain is successfully authenticated.
- **400 Bad Request**: Returned when the request body is missing required fields or contains invalid data.
- **401 Unauthorized**: Returned when the email or password is incorrect.

#### Example Response

```json
{
  "token": "your_jwt_token",
  "captain": {
    "id": "643b1f2e8f1b2c0012345678",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "number": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 3. **GET** `/captains/profile`

#### Description

This endpoint allows authenticated captains to retrieve their profile information. The request must include a valid JSON Web Token (JWT) in the `Authorization` header.

#### Headers

- **Authorization**: A string containing the Bearer token (e.g., `Bearer your_jwt_token`).

#### Example Request

```http
GET /captains/profile HTTP/1.1
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**: Returned when the captain is successfully authenticated.
- **401 Unauthorized**: Returned when the token is missing, invalid, or expired.

#### Example Response

```json
{
  "captain": {
    "id": "643b1f2e8f1b2c0012345678",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "number": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active",
    "location": {
      "latitude": null,
      "longitude": null
    }
  }
}
```

---

### 4. **GET** `/captains/logout`

#### Description

This endpoint allows authenticated captains to log out by invalidating their token. The request must include a valid JSON Web Token (JWT) in the `Authorization` header or as a cookie.

#### Headers

- **Authorization**: A string containing the Bearer token (e.g., `Bearer your_jwt_token`).

#### Example Request

```http
GET /captains/logout HTTP/1.1
Authorization: Bearer your_jwt_token
```

#### Responses

- **200 OK**: Returned when the captain is successfully logged out.
- **401 Unauthorized**: Returned when the token is missing, invalid, or expired.

#### Example Response

```json
{
  "message": "Logout Successfully"
}
```

---
