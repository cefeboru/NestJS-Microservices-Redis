# Done Street Take home project

We are building a jobs board website. We will be displaying developer jobs for several cities around the world

- The user should be able to select a city from this list (Chicago, San Francisco, Phoenix, London, Beijing, Paris)
- The user should be able to select a job description from this list (Javascript, Java, Python, React, Ruby, Go)

When the user selects a city or selects a job description the list of jobs should update to match the user's selections
There should be a frontend and a backend. The frontend should communicate to the backend via a REST API
The backend should fetch the jobs from Github's public jobs API (eg. https://jobs.github.com/positions?description=javascript&location=san+francisco)

The backend should have a database. The database should have one table called `searches` which stores a record of each job search. The `searches` table columns should include time, description, location and ip address of the user.

You may use any languages and frameworks that you like

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm ru
```


# Chosen Framework: https://nestjs.com/

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.


