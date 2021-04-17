# Searches Microservices
This is a consumer microservice, it will handle events of type `jobs_searches` and save the search into the DB;

## Installation

```bash
$ yarn
```

## Running migrations
```bash
$ yarn migrations:run
```

## Generating migrations
After making changes to any entity, typeorm can automatically generate migrations for you.
```bash
$ yarn migrations:generate -n MigrationName
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
```