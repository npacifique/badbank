# badbank
banking application sample for tutorial

badbank is a banking application that will allow users to create accounts and keep track of the accounts' status.
Installation Guidelines:
   - To run this project locally, please download a zip-folder or clone the repository to your local machine.
   - Initialize the node app npm init -y for default settings
   - open the project in the editor and, install dependencies. All dependencies are listed inside the package.JSON file (express, mongodb and cors)
   - to install dependencies run the following comands in your terminal at the root directory:- npm i express
                                                                                              - npm i mongodb
                                                                                              - npm i cors
   - Inside the terminal run: docker run -p 27017:27017 --name badbank -d mongo, create a Docker image and run it inside a container. check if the mongo instance is up and running using docker ps command. this will run the badbank image at the mentioned port(27017)
   - run node index.js command to serve the public folder containing the front-end at port: 3000
   - navigate to http://localhost:3000/#/ and explore the app using the navigation bar.

This project Back-End requires express framework; Cross-Origin Resource Sharing (CORS), an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port); and mongoDB for a document database to save the data. On top of these are node.js and docker image and container.
The Front-end is build with Javascript, ReactJs for responsive components, html for layout and Bootstrap for styling.

Features and Roadmap: This application allow the user to create an account and keep track of it. We shall refactor the code and add missing fonctionalities. such as login deposit, balance, authantication, authorization, etc.
