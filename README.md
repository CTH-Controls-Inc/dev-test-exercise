# Overview

This is a web application that simulates a <b>Login page</b>, allowing users to enter their credentials & interact with the form.<br/>The user input is validated on the client side in real time, providing dynamic feedback about input field error states to the user.

# Tech Stack

- [Next.js 13](https://nextjs.org/docs): A React framework for building server-side rendered (SSR) fullstack web applications.
- [React Hook Form](https://react-hook-form.com/get-started): A lightweight library in React that simplifies form validation and management using hooks, reducing re-renders and providing a customizable and efficient approach to handling form state.
- [Tailwind CSS](https://tailwindcss.com): Tailwind CSS is a utility-first CSS framework that allows for rapid development by providing a customizable set of pre-defined classes for building responsive and flexible user interfaces.

# Getting Started 
  
## - To run the project locally, follow these steps:

  1. Download the project source code by clicking the following link: [Download Project](https://github.com/bcmendis/CTH-dev-test/archive/refs/heads/main.zip)
  2. Extract the downloaded zip file to a directory of your choice.
  3. Open a terminal or command prompt and navigate to the extracted directory.
  4. Install the dependencies by running the following command:

  ``` bash
  npm install
  ```

  5. Start the development server using the following command:

  ``` bash
  npm start
  ```

  6. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.
<br/>

## - Alternatively, you can use Docker to quickly run the app.
<br/>
Build the Docker image and run the container with the following commands:

```bash
docker build -t login-app .
docker run -d -p 3000:3000 login-app
```

After running these commands, you can access the application by opening http://localhost:3000 in your web browser.

Make sure you have Docker installed and running on your machine before using the Docker commands.