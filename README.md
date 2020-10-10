# Social-Network-API

 ## Table of Contents:  
[1. Description](#Description)  
[2. Acceptance Criteria](#Acceptance-Criteria)  
[3. Walkthrough Videos](#Walkthrough-Videos)  
[4. Installation](#Installation)  
[5. Tests](#Tests)  
[6. License Details](#License-Details)  
[7. Submission](#Submission)   
[8. Questions](#Questions)  
## Description:
This is a set of API for a social network. It uses a MongoDB database, Express.js for routing, Mongoose ODM, and the npm moment package.

## Acceptance Criteria:

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Walkthrough Videos
[User Routes] 
[Friend Routes] 
[Thought Routes] 
[Reaction Routes]


## Installation:
In order to deploy this repository:  
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
```
4. Start the server
```
    $ npm start
```
5. Open Insomnia Core to test API routes

## Tests:  

Testing restful API calls with Insomnia Core  

---
**`/api/users`**
* `GET` all users
* `POST` a new user:
    ```json
    // example data
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }
    ```
---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
    ```json
    // example data
    {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
    }
    ```
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
    ```json
    // example data
    {
    "reactionBody":"Good Job!",
    "username":"lernantino"
    }
    ```
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId`  

## Submission:
 [Github repository](https://github.com/tmcelyea93/social-network-API)


## Author:
 GitHub:  
https://github.com/tmcelyea93  
 