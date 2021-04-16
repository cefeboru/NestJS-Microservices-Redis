# Decision Log

For the backend I have decide to use Nodejs, and use a Event-Driven architecture.

## Chosen Framework
I choose Nestjs as it is a really robust framework to build backend applications. By using it I can focus on coding my application and leverage all the configuration to the framework.

## Architecture
There will be 2 services:
 - Jobs Service (Producer)
 - Searches Service (Consumer)

 By splitting it into micro services, multiple teams can work together and also we decouple the logic making both services maintainable and easy to test

# Running all microservices
```
yarn start:dev
```
