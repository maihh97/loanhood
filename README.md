# LOADHOOD Favourites Page 🤓

## Table of contents

1. [Introduction](#introduction)
2. [Data model](#data-model)
3. [Steps to run](#steps-to-run)

## Introduction

This Favourite page was created using `MERN` stack (MongoDB, Express.js, React.js and Node.js) to assist Loanhood member to view user's favourite items.

![architecture](https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?ixlib=js-3.7.1&auto=format%2Ccompress&w=3038)

Some dummy data was generated (using `faker` library) and inserted to MongoDB Database (MongoDB Atlas). Node.js was used as a driver to connect to the database and perform CRUD operations. 

`Material UI`, an open-source React component library that implements Google's Material Design, was utilised for some front-end component design.

## Data model

## Project structure

## Steps to run

### Pre-requisites

Install dependencies packages by running the command below in both `server` and `src` folders.

```
npm install
```

In the project directory, you can run:
### Steps 

1. Start the server

- Open your terminal, use cd command to move to `server` directory 
    ```
    cd server
    ```
- Add a .env file with the following details about the MongoDB server:
    ```
    ATLAS_URI=<uri_provided_via_email>
    ```
- Start the server
    ```
    node index.mjs
    ```
    If successful, you should receive the following message in the terminal
    ```
    Successfully connected to the database!
    Server is running on port: 8080
    ```

    Please contact me if you have any issues connecting to MongoDB and I may need to add your IP address due to security setting of the cluster.


2. Start the client (React) 

- Open your terminal, use cd command to move to `src` directory 
    ```
    cd ../src
    ```
- Run the following command
    ```
    npm run start
    ```
    If successful, the browser will automatically launch and you can access it via http://localhost:3000.

## References


- [MongoDB Documentation](https://github.com/mongodb-developer/mongodb-express-rest-api-example/tree/main/server)
- [MaterialUI](https://mui.com/material-ui/getting-started/)