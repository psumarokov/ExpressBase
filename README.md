ExpressBase
=========
Basic Express.js + MongoDB server for fast kick off

Requirements
---------
- Node.js v0.12.2
- MongoDB v3.0.2

Running from CLI
---------
    cd "project_directory"
    npm install
    mongod --dbpath "project_directory/database"
    node bin/www

Features
--------
- Express routers automatically loaded from ./routes/*
- REST API with CRUD operations
- File upload
- Integration with MongoDB via Mongoose
- Promises

Backlog
--------
- Introduce form and model validation
- Write automated tests using Mocha
- Support pagination
- Add proper logging
- Find and follow code style guidelines
- Handle errors and respond with codes respectively
- Validate requests

Links
--------
- Express: http://expressjs.com/
- MongoDB: http://docs.mongodb.org/
- Promises: https://github.com/kriskowal/q
