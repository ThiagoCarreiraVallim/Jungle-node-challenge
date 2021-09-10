# Jungle Devs - Node Challenge #001

## Sumary

- [Description](#Description)
- [Prerequisites](#Prerequisites)
  - [Install](#Install)
  - [Run in develop mode](#Instructions-to-run-in-develop-mode)
  - [Run in production mode](#Instructions-to-run-in-production-mode)
- [Documentation](#Documentation)
  - [Sign-up - POST](#Sign-up---POST)
  - [Login - POST](#Login---POST)
  - [(ADMIN) Authors - POST](#(ADMIN)-Authors---POST)
  - [(ADMIN) Authors - GET all](#(ADMIN)-Authors---GET)
  - [(ADMIN) Authors - GET](#(ADMIN)-Authors---GET)
  - [(ADMIN) Authors - PUT](#(ADMIN)-Authors---PUT)
  - [(ADMIN) Authors - DELETE](#(ADMIN)-Authors---DELETE)
  - [(ADMIN) Articles - POST](#(ADMIN)-Articles---POST)
  - [(ADMIN) Articles - GET all](#(ADMIN)-Articles---GET)
  - [(ADMIN) Articles - GET](#(ADMIN)-Articles---GET)
  - [(ADMIN) Articles - PUT](#(ADMIN)-Articles---PUT)
  - [(ADMIN) Articles - DELETE](#(ADMIN)-Articles---DELETE)
  - [Articles - GET](#Articles---GET)
  - [Articles - GET](#Articles---GET)



## Description

**Challenge goal**: The purpose of this challenge is to give an overall understanding of a backend application. You’ll be implementing a simplified version of news provider API. The concepts that you’re going to apply are:

- REST architecture;
- Authentication and permissions;
- Data modeling and migrations;
- SQL database;
- Query optimization;
- Serialization;
- Production builds.

## Prerequisites

- `yarn`
  ```sh
    npm install --global yarn  
- `docker`
  ```sh
    sudo apt-get install docker-ce docker-ce-cli containerd.io
- `docker-compose`
  ```sh
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
- `npm` (v12.20.0)
  ```sh
    nvm install 12.20.0
    nvm use 12.20.0
- verify if the ports 5432 and 8080 are free
  ```sh
    lsof -i :5432
    lsof -i :8080
  ```

## Install

- Clone the repository
  ```sh
    git clone git@github.com:ThiagoCarreiraVallim/Jungle-node-challenge.git
- Go to the aplication folder
  ```sh
    cd Jungle-node-challenge
- Install the dependences
  ```sh
    yarn install
  ```

## Instructions to run in develop mode

- Setup de `PostgreSQL` Database
  ```sh
    sudo docker-compose up
- Run the `migrations` and the `seeders`
  ```sh
    yarn db:build
- Start the aplication in develop mode using `nodemon`
  ```sh
    yarn dev
  ```  

## Instructions to run in production mode

- Setup de `PostgreSQL` Database
  ```sh
    sudo docker-compose up
- Start the aplication in production mode using `pm2`
  ```sh
    yarn dev
  ``` 

## Documentation

Obs. All the routes with admin tag needed to login with admin permissions

### Sign-up - POST ``/api/sign-up``:
  This endpoint register a new user and return a auth token.
  - Exemple `request body` 
    ``` json
      {
        "name": "Thiago Carreira Vallim",
        "email": "thiagocvallim@gmail.com",
        "password": "password123",
        //"role": "user" or "admin" (optional) (default: "user")
      }
    ```

  - Exemple `response body`
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENhcnJlaXJhIFZhbGxpbSIsImVtYWlsIjoidGhpYWdvY3ZhbGxpbUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2MzEyNjA4ODksImV4cCI6MTYzMTg2NTY4OX0.yZIXSANkKo-RDAt5MICEo17iqZPOHTqr6vHJ4FSbfKw"
      }
    ```

### Login - POST ``/api/login``:
  This endpoint validate the login and return a token.

  - exemple `request body` 
    ``` json
      {
        "email": "thiagocvallim@gmail.com",
        "password": "password123"
      }
    ```

  - exemple `response body`
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENhcnJlaXJhIFZhbGxpbSIsImVtYWlsIjoidGhpYWdvY3ZhbGxpbUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2MzEyNjA4ODksImV4cCI6MTYzMTg2NTY4OX0.yZIXSANkKo-RDAt5MICEo17iqZPOHTqr6vHJ4FSbfKw"
      }
    ```

### (ADMIN) Authors - POST ``/api/admin/authors``:
  This endpoint register a new author in aplication database.

  - exemple `request`
    - `headers`
      ```json
        {
          "Content-Type": "multipart/form-data",
          "Authorization": "(Sign or Login Token)"
        }
      ```
    - `body`
      ![MultPart-FormData](./src/uploads/1631285702853.jpeg)

  - exemple `response body`
    ```json
      {
        "name": "Thiago Vallim",
        "picture": "/api/image/1631285702853.jpeg",
        "id": 1
      }
    ```

### (ADMIN) Authors - GET ``/api/admin/authors``:
  This endpoint get all the authors.

  - exemple `request`
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```

  - exemple `response body`
    ```json
      [
        {
          "id": 1,
          "name": "Thiago Vallim",
          "picture": "/api/image/1631261962887.jpeg"
        },
        {
          "id": 2,
          "name": "Thiago Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        },
        {
          "id": 3,
          "name": "Thiago Vallim",
          "picture": "/api/image/1631285702853.jpeg"
        }
      ]
    ```

### (ADMIN) Authors - GET ``/api/admin/authors/:id``:
  This endpoint get a specific author by passing the id through the url.

  - exemple `request`
    - `url`
      ```
        /api/admin/authors/2
      ```
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```

  - exemple `response body`
    ```json
      {
        "id": 2,
        "name": "Thiago Vallim",
        "picture": "/api/image/1631285650187.jpeg"
      }
    ```

### (ADMIN) Authors - PUT ``/api/admin/authors/:id``:
  This endpoint update a specific author by passing the id through the url.

  - Exemple `request`
    - `url`
      ```
        /api/admin/authors/2
      ```
    - `headers`
      ```json
        {
          "Content-Type": "multipart/form-data",
          "Authorization": "(Sign or Login Token)"
        }
      ```
    - `body`
      ```json
        {
          "name": "Thiago Carreira Vallim"
        }
      ```

  - Exemple `response body`
    ```json
      {
        "name": "Thiago Carreira Vallim",
        "picture": "/api/image/1631285650187.jpeg",
        "id": 2
      }
    ```

### (ADMIN) Authors - DELETE ``/api/admin/authors/:id``:
  This endpoint delete a specific author by passing the id through the url.

  - Exemple `request`
    - `url`
      ```
        /api/admin/authors/2
      ```
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```

  - Exemple `response body`
    ```json
      No content
    ```

### (ADMIN) Articles - POST ``/api/admin/articles``:
  This endpoint insert a new article in the aplication database.

  - Exemple `request`
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```
    - `body`
      ```json
        {
          "authorId": 1,
          "category": "Category",
          "title": "Article title",
          "summary": "This is a summary of the article",
          "firstParagraph": "<p>This is the first paragraph of this article</p>",
          "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
        }
      ```

  - Exemple `response body`
    ```json
      {
        "category": "Category",
        "title": "Article title",
        "summary": "This is a summary of the article",
        "firstParagraph": "<p>This is the first paragraph of this article</p>",
        "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
        "id": 1,
        "author": {
          "id": 1,
          "name": "Thiago Carreira Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        }
      }
    ```

### (ADMIN) Articles - GET ``/api/admin/articles``:
  This endpoint get all the articles in the aplication database.

  - Exemple `request`
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```
  - Exemple `response body`
    ```json
      [
        {
          "id": 1,
          "category": "Category",
          "title": "Article title",
          "summary": "This is a summary of the article",
          "firstParagraph": "<p>This is the first paragraph of this article</p>",
          "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
          "created_at": "2021-09-10T21:45:54.936Z",
          "updated_at": "2021-09-10T21:45:54.936Z",
          "author": {
            "id": 1,
            "name": "Thiago Carreira Vallim",
            "picture": "/api/image/1631285650187.jpeg"
          }
        }
        ...
      ]
    ```

 ### (ADMIN) Articles - GET ``/api/admin/articles/:id``:
  This endpoint get a specific article by passing the id through the url.

  - Exemple `request`
    - `url`
      ```
        /api/admin/articles/1
      ```
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```
  - Exemple `response body`
    ```json
      {
        "id": 1,
        "category": "Category",
        "title": "Article title",
        "summary": "This is a summary of the article",
        "firstParagraph": "<p>This is the first paragraph of this article</p>",
        "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
        "created_at": "2021-09-10T21:45:54.936Z",
        "updated_at": "2021-09-10T21:45:54.936Z",
        "author": {
          "id": 1,
          "name": "Thiago Carreira Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        }
      }
    ``` 


### (ADMIN) Articles - PUT ``/api/admin/articles/:id``:
  This endpoint update a specific author by passing the id through the url.

  - Exemple `request`
    - `url`
      ```
        /api/admin/articles/1
      ```
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```
    - `body`
      ```json
        {
          "authorId": 2,
          "category": "New Category",
          "title": "The Article title",
          "summary": "This is another summary of the article",
          "firstParagraph": "<p>This is the first paragraph of this article</p>",
          "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
        }
      ```
  - Exemple `response body`
    ```json
      {
        "category": "New Category",
        "title": "The Article title",
        "summary": "This is another summary of the article",
        "firstParagraph": "<p>This is the first paragraph of this article</p>",
        "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
        "id": 1,
        "created_at": "2021-09-10T21:45:54.936Z",
        "updated_at": "2021-09-10T21:45:54.936Z",
        "author": {
          "id": 2,
          "name": "Thiago Carreira Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        }
      }
    ``` 

 ### (ADMIN) Articles - DELETE ``/api/admin/articles/:id``:
  This endpoint delete a specific article by passing the id through the url.

  - Exemple `request`
    - `url`
      ```
        /api/admin/articles/1
      ```
    - `headers`
      ```json
        {
          "Authorization": "(Sign or Login Token)"
        }
      ```
  - Exemple `response body`
    ```json
      No content
    ``` 

### Articles - GET ``/api/articles?category=:slug``:
  This endpoint list articles filtered by a category.
  - Exemple `request`
    - `url`
      ```
        /api/articles?category=Category
      ```
    - `headers`
      ```json
        {
          "Authorization": "(optional)"
        }
      ```
  - Exemple `response body` (logged user)
    ```json
      [
        {
          "category": "Category",
          "title": "The Article title",
          "summary": "This is another summary of the article",
          "firstParagraph": "<p>This is the first paragraph of this article</p>",
          "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
          "author": {
            "name": "Thiago Carreira Vallim",
            "picture": "/api/image/1631285650187.jpeg"
          }
        }
        ...
      ]
    ```
  - Exemple `response body` (anonymous)
    ```json
      [
        {
          "category": "Category",
          "title": "The Article title",
          "summary": "This is another summary of the article",
          "firstParagraph": "<p>This is the first paragraph of this article</p>",
          "author": {
            "name": "Thiago Carreira Vallim",
            "picture": "/api/image/1631285650187.jpeg"
          }
        }
        ...
      ]
    ```

### Articles - GET ``/api/articles/:id``:
   This endpoint get a specific article by passing the id through the url.
  - Exemple `request`
    - `url`
      ```
        /api/articles/1
      ```
    - `headers`
      ```json
        {
          "Authorization": "(optional)"
        }
      ```
  - Exemple `response body` (logged user)
    ```json
      {
        "category": "New Category",
        "title": "The Article title",
        "summary": "This is another summary of the article",
        "firstParagraph": "<p>This is the first paragraph of this article</p>",
        "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>",
        "author": {
          "name": "Thiago Carreira Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        }
      }
    ```
  - Exemple `response body` (anonymous)
    ```json
      {
        "category": "New Category",
        "title": "The Article title",
        "summary": "This is another summary of the article",
        "firstParagraph": "<p>This is the first paragraph of this article</p>",
        "author": {
          "name": "Thiago Carreira Vallim",
          "picture": "/api/image/1631285650187.jpeg"
        }
      }
    ```
