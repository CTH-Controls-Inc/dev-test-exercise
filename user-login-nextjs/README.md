This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Using [Zod](https://zod.dev/) for email validation
## Getting Started

First, run the development server:

```
yarn && yarn next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, using the `login` button go to the login page. 
All validation takes place on the back end, the errors are communicated via `key` and `error` values. On the front end if there are any errors the input with the error becomes focused and an error message is displayed. 
If the user sends in a valid email and any password its 'valid', to test what an 'invalid' error would look like you can use email `fail@test.co` and any password. 

I created this so it would be easy to scale. Expanding the forms would be trivial as would be adding more validation. 



## API
To use the API use `POST ://localhost:3000/api/log-in` in PostMan with the body `{"email": string, "password": string}` to test the endpoint. 


## Deploy on Vercel


