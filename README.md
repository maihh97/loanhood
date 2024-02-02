# LOADHOOD Favourites Page 🤓

## Table of contents

1. [Introduction](#introduction)
2. [Data model](#data-model)
3. [Project structure](#project-structure)
4. [Steps to run](#steps-to-run)
5. [Technical debts](#technical-debts)
6. [References](#references)

## Introduction

This Favourite page was created using `MERN` stack (MongoDB, Express.js, React.js and Node.js) to assist Loanhood member to view user's favourite items.

![architecture](https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?ixlib=js-3.7.1&auto=format%2Ccompress&w=3038)

Some dummy data was generated (using `faker` library) and inserted to MongoDB Database (MongoDB Atlas). Node.js was used as a driver to connect to the database and perform CRUD operations. 

`Material UI`, an open-source React component library that implements Google's Material Design, was utilised for some front-end component design.

## Data model

Since MongoDB is a No-SQL database with the [flexible schema model](https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/), I did not define a schema for the database.

If required, MongoDB offers schema validation or instead of using MongoDB client we can use `mongoose` library, that is a Node.js-based Object Data Modeling (ODM) library for MongoDB to define the data models. 

For this use case, I created a database called `loanhood` with 2 collections `users` and `items`.

- For the `user` collection the following fields and data types are added:

    - first_name: String
    - last_name: String
    - user_name: String
    - gender: String
    - email: String
    - phone_number: String
    - address: String
    - avatar_url: String
    - favourites: Array of items ids

- For the `items` collection, the following fields and data types are added:
    - product_name: String
    - size: Integer
    - description: String
    - brand: String
    - rental_price: Integer
    - retail_price: Integer
    - image: Base64 String 
    - owner_id: String

## Project structure

    .
    ├── public
    ├── server          #Express server 
    │   ├── data        # Code to generate dummy data and insert the data to MongoDB database, some json examples
    │   ├── db          # MongoDB connection
    │   └── routes      # Function to handle url path
    │   └── index.mjs   # Entry point
    │   └── ...
    └── src             # React front-end
    │   ├── assets      # Images to load to the database
    │   ├── components  # Components used in the page such as navigation bar, item card and drop down filter
    │   └── pages       # Favourite page
    │   └── App.js      # Entry point and where Router is defined
    │   └── styles.css  # CSS file
    │   └── ...


## Steps to run

### Pre-requisites

Install dependencies packages by running the command below in both `server` and `src` folders.

```
npm install
```

In the project directory, you can run:
### Steps 

#### 1. Start the server

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


#### 2.Start the client (React) 

- Open your terminal, use cd command to move to `src` directory 
    ```
    cd ../src
    ```
- Run the following command
    ```
    npm run start
    ```
    If successful, the browser will automatically launch and you can access it via http://localhost:3000.

## Technical debts
- API testing
- DB design according to best practices 

## References

- [MongoDB Documentation](https://github.com/mongodb-developer/mongodb-express-rest-api-example/tree/main/server)
- [MaterialUI](https://mui.com/material-ui/getting-started/)