# Dev Test

## Installation

To run this project locally, follow these steps:
1. Navigate to the project directory:
cd login-page

2. Install dependencies using npm:
npm install

## Usage
To start the application, run the following command:
npm start
This command will start the application and make it accessible at http://localhost:3000.

## Docker
Additionally, you can choose to run the application using Docker. Make sure you have Docker installed and running on your system.

1. Build the Docker image:
docker build -t login-page .

2. Run the Docker container:
docker run -d -p 3000:3000 login-page
The application will be accessible at http://localhost:3000 when running inside the Docker container.

## Exercise

Create a basic web application using next.js + React to display a login page. The login page should include fields for email and password. The page doesn't need to have actual functionality, but it should have the following feature:

- When the user enters a value that is not a valid email address in the email field, the box should have a red border and display a notification informing the user that the entered value is not a valid email.

You have the freedom to choose any component library you prefer.

Additionally, please include a Dockerfile that enables us to run the next application easily by running the Docker container.
