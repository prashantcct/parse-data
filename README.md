# Building RESTful Web APIs with Node.js, Express and TypeScript

This is a simple API that saves contact information of people. 

There are two versions of this project. 

## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone git@github.com:dalenguyen/rest-api-node-typescript.git .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

The default URL is: *http://localhost:3000*

+ GET all contacts

```
Send GET request to http://localhost:3000/parse/
```

The default URL is: *https://localhost:3000*