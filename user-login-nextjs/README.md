This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Using [Zod](https://zod.dev/) for email validation
## Getting Started

First, run the development server:

`yarn && yarn next dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, using the `login` button go to the login page. 

On the front end, all validation takes place on the server side, and errors are communicated via key-value pairs. If there are any errors, the corresponding input field is focused, and an error message is displayed. For testing purposes, entering a valid email with any password will result in a "valid" response. To see an "invalid" error, use the email fail@test.co with any password.

The project is designed to be easily scalable. Expanding the forms and adding more validation can be done with ease.

## API
Next.js provides server-side rendering and endpoint functionality. Most of the logic is implemented in an endpoint. To use the API, send a POST request to https://localhost:3000/api/log-in with the request body as {"email": string, "password": string}. You can test the endpoint using tools like Postman.


## Deployment
The project is deployed on Vercel. You can access it at the following URL:

    Application: https://user-auth-nextjs.vercel.app/
    Login: https://user-auth-nextjs.vercel.app/log-in

Feel free to explore and test the application!
