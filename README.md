# RS node 2021Q4 Docker Basics

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/gonzjv/nodejs2021Q4-service.git
```

## Checkout to branch

```
git checkout feature/docker-basics
```

## Installing NPM modules

```
npm install
```

## Run node and postgreSQL containers with docker-compose

```
docker-compose up
```

After docker-compose build images and run it in containers you can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```
