# Survey Platform

## Overview

Survey Platform is a web application designed to create, manage, and analyze surveys. It includes features for user authentication, survey creation, response collection, analytics, and respondent management.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd survey-platform
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the backend:

   - Navigate to the `backend` folder:

     ```bash
     cd backend
     ```

   - Install backend dependencies:

     ```bash
     pnpm install
     ```

4. Configure environment variables:

   - Create a `.env` file in the `backend` folder and add the required environment variables (e.g., database connection string, JWT secret).

### Starting the Application

#### Frontend

1. Navigate to the root directory:

   ```bash
   cd survey-platform
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

#### Backend

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   pnpm start
   ```

## API Endpoints

ALL my survey are saved on
email-saurav@1234
password-1234

### Authentication

- **Register User**

  ```http
  POST /api/v1/auth/register
  Body:
  {
    "email": "user@example.com",
    "password": "securepassword123",
    "name": "John Doe"
  }
  ```

- **Login User**

  ```http
  POST /api/v1/auth/login
  Body:
  {
    "email": "user@example.com",
    "password": "securepassword123"
  }
  ```

- **Verify User**

  ```http
  GET /api/v1/auth/me
  Header:
  Authorization: Bearer <token>
  ```

### Surveys

- **Create Survey**

  ```http
  POST /api/v1/surveys
  Header:
  Authorization: Bearer <token>
  Body:
  {
    "title": "Survey Title",
    "description": "Survey Description"
  }
  ```

- **Get All Surveys**

  ```http
  GET /api/v1/surveys
  Header:
  Authorization: Bearer <token>
  ```

- **Get Survey by ID**

  ```http
  GET /api/v1/surveys/:id
  Header:
  Authorization: Bearer <token>
  ```

- **Update Survey**

  ```http
  PUT /api/v1/surveys/:id
  Header:
  Authorization: Bearer <token>
  Body:
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```

- **Delete Survey**

  ```http
  DELETE /api/v1/surveys/:id
  Header:
  Authorization: Bearer <token>
  ```

- **Publish Survey**

  ```http
  POST /api/v1/surveys/:id/publish
  Header:
  Authorization: Bearer <token>
  ```

### Respondents

- **List Respondents**

  ```http
  GET /api/v1/respondents
  Header:
  Authorization: Bearer <token>
  ```

- **Get Respondent Details**

  ```http
  GET /api/v1/respondents/:id
  Header:
  Authorization: Bearer <token>
  ```

### Responses

- **Get Public Surveys**

  ```http
  GET /api/v1/:id/public
  ```

- **Submit Survey Response**

  ```http
  POST /api/v1/:id/responses
  Body:
  {
    "answers": [
      {
        "questionId": "1",
        "answer": "Yes"
      }
    ]
  }
  ```

- **Get Survey Responses**

  ```http
  GET /api/v1/:id/responses
  Header:
  Authorization: Bearer <token>
  ```

## License

This project is licensed under the MIT License.
