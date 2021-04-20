# Decision Log

For the backend I have decide to use Nodejs, and use an Event-Driven architecture.

## Chosen Framework
I choose Nestjs as it is a really robust framework to build backend applications. By using it I can focus on coding my application and leverage all the configuration to the framework.

## Architecture
There will be 2 services:
 - Jobs Service (Producer)
 - Searches Service (Consumer)

 By splitting it into micro services, multiple teams can work together and also we decouple the logic making both services maintainable and easy to test

# Project Details
## Requirements:
 - docker && docker-compose
 - Nodejs >= 12.x
## Starting all microservices (Jobs, Searches, Mysql and Redis)
```
docker-compose up
```
## Swagger docs
Once you start running the server (locally) you shall be able to see the swagger docs at:
http://localhost:3000


# Todo List:
- [x] Get IP from jobs search request
- [x] Store searches into DB
- [x] Add unit tests
- [x] Add Swagger docs
- [x] Dockerize Application
