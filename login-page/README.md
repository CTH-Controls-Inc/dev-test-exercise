This is a [Next.js](https://nextjs.org/) project with Material UI

## Getting Started

First, building Docker image

```bash
docker build -t {name of image} .

```

Second, deploy docker container

```bash
docker run -d -p 3000:3000 {name of image}

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or

You can run it on you local computer

Just git clone this repository and 
```bash
1. npm install
2. npm run dev

```