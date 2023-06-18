## Instructions:

This is a NextJS Project and to run the project please follow the instructions below.

### Preferred method
- `npm istall` to install `node_modules`
- Once the Node Modules are installed run `npm run dev` command
- Once the server has started, open `http://localhost:3000` to access the application

### In order to run the project with `Docker` follow the steps below
- Build the docker by `docker build -t cth-test-app .`
- Run the docker container by `docker run -d -p 3000:3000 cth-test-app`

## Reasoning behind Design Decision took in this project

- For a project of this size there isn't a need for component library. To demonstrate that I have worked with Component Libraries I have included `Bootstrap`. For more professional/complex projects I would've preffered `AntD` or `Material UI` since they provide complex component such as date-pickers/tables out of the box.
- If the application had more forms I would prefer to use dedicated forms library such as `Formik` or `React Hook Form`
