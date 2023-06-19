# Dev Test

## Author

- Name: Xiaobing Feng
- Email: charliefeng2020@gmail.com

# Dockerfile

- In terminal, build the docker
- docker build -t dev-test-cth .

---

- docker run -dp 3001:3000 dev-test-cth
- docker run -dp 3000:3000 dev-test-cth
- docker ps (to see if dev-test-cth is running)
- localhost:yourPort
