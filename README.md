# Retropolis-FE [![codurance](https://circleci.com/gh/codurance/Retropolis-FE.svg?style=shield)](https://github.com/codurance/Retropolis-FE) [![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)

The front end of the Retropolis application. This is the final project for the apprentices Mar-May-2020.
The project is a remote tool to facilitate remote retrospectives.

## Teck Stack

The project is build with [React](https://reactjs.org/). It uses [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing. 
The project follows the [airbnb](https://github.com/airbnb/javascript) style guide.

For continuous integration it uses [CircleCI](https://circleci.com/) and for the deployment [S3](https://aws.amazon.com/s3/)

### Run it locally
 1) Clone the project on your local machine.  <br/>
                 `$ git clone https://github.com/codurance/Retropolis-FE.git`

 2) Navigate to the project folder and install the dependencies with the following command.  <br/>
                 `$ yarn install`
                 
 3) Run the application locally (the application can be accessed from [localhost:3000](http://localhost:3000/)) <br/>
                  `$ yarn start`


### Available scripts

#### Run tests
You can run the tests by using `yarn test`. An alternative script is `yarn test:watch` where jest is run in watch mode.

#### Run app locally
You can run the application locally by using `yarn start`. This command will spin up the webpack-dev-server.

#### Lint code
You can lint your code with `yarn lint`. This command will try to fix any error/warning.

#### Build
You can build the application in production mode with `yarn build:prod`

#### Clean build
You can remove the bundled build folder by using the `yarn build:clean`

#### Pre-push
You can run the pre-push script to make sure you are ready to open a PR  `yarn prepush`. This script will try to lint, test, and build on production mode.

> **Note:** You can use `npm` instead of `yarn`

### Documentation
Retropolis-FE documentation is available [here](https://github.com/codurance/Retropolis-FE/wiki).
