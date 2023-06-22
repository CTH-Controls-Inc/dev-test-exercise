# CTH Assignment

## Description
- Login form with front-end email input validation using Regex.

## Build and Run Docker Image Instructions
- `docker build -t myapp .`
- `docker run -p 3000:3000 -p 3001:3001 myapp`
- The application can be accessed by opening your browser and navigating to [http://localhost:3000](http://localhost:3000).

## Application Details
- The app was created using create-react-app.
- React Bootstrap was used to design the Login page and handle the styling.
- Improper email format triggers the email input field to be surrounded by a red border (Bootstrap class "is-invalid") and a custom error message is displayed.
- Upon entering a proper email format, a custom success message is displayed.
- The email validation process has been moved to the server-side as a bonus feature. Success and error messages are sent back to the frontend when an API request is made.

## Alternative Solution
- Alternative validation method added, using server side validators. Success and error messages are sent back to the frontend when the API request is made.

## Bonus
- Added testing using Jest and React Testing Library. The three testing files test for proper rendering, proper client-side validation functionality, and proper server-side validation functionality.

Thank you for considering my application.
For any questions or suggestions, please conctact me at gleb.tchani@gmail.com.
