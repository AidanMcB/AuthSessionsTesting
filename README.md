# Auth Session Testing (Rails & React)
Production: Not applicable to this repo

## Developers
- [Matthew Palmer](https://github.com/matthewpalmer9)


## About
`Auth Session Testing` is a sandbox for authentication testing between a Ruby on Rails API and React front-end. This is educational material/reference and personal record for future projects.

## Key Features
- User sessions between the back-end and front-end

## Tech Stack
- React.js
- Ruby on Rails
- JavaScript

## Front-end Dependencies 
| Dependency | URL       |
|------------|-----------|
| react-router-dom       | [Link](https://www.jsdelivr.com/package/npm/react-router-dom) |
| axios                  | [Link](https://www.jsdelivr.com/package/npm/axios)            |

## Back-end Dependencies 
| Dependency | URL       |
|------------|-----------|
| bcrypt                 | [Link](https://www.rubydoc.info/github/codahale/bcrypt-ruby/BCrypt/Password) |


## Back-end Documentation
The back-end is included in this reposity, [but here is a link to it if you're feeling lazy. :D](https://github.com/MatthewPalmer9/AuthSessionsTesting/tree/master/backend/auth-backend)

## Getting started
- **Clone this repo**
- **Open up two separate terminals**

To get the front-end running locally:
- Navigate to the front-end by typing `cd frontend/auth-frontend` into your terminal
- Run `npm install` to ensure the dependencies are installed
- Run `npm start` to run the application in a development environment 

To get the back-end running locally:
- Navigate to the back-end by typing `cd backend/auth-backend` into your terminal
- Run `bundle install` to ensure the dependencies are installed
- Run `rails db:migrate` to establish your `users` table.
- Run `rails s` to run the application in a development environment 

**NOTE: It is recommended that you first start your back-end. This application was developed with the back-end in mind on localhost:3000 while the front-end runs on localhost:3001. React will ask you if you want to run it on another port which will default to 3001.**

## Front-end Scripts 
- `npm run dev` - Runs the development environment on your system
- `npm start` - Runs the production environment on your system

## Testing Documentation
There is currently no testing on this application.

## Making Contributions
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request
If you are having an issue with the existing project code, please submit a bug report under the following guidelines:
-Check first to see if your issue has already been reported.
-Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
-Create a live example of the problem.
-Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of this project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

**Pull Request Guidelines**

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of the developers.