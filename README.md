## My Next.js Login App
This is a basic web application built with Next.js and React.

The project was bootstrapped with Create Next App.

## Local Development
To run the application locally, follow these steps:

- Make sure you have Node.js installed on your machine.

- Clone this repository to your local machine.

```bash
git clone https://github.com/annkornienko/dev-test-exercise.git
```

- Navigate to the project directory.

- Install the dependencies using npm or yarn.

```bash
npm install
```

- Start the development server.

```bash
npm run dev
```

- Open your browser and visit http://localhost:3000 to access the application.

## Docker
To run the application using Docker, follow these steps:

- Make sure you have Docker installed on your machine.

- Clone this repository to your local machine (if you haven't already).

- Navigate to the project directory.

- Build the Docker image:

```bash
docker build -t next-app .
```

- Run the Docker container:

```bash
docker run -p 8080:3000 next-app
```
- Open your browser and visit http://localhost:8080 to access the application.
