this is backend project.

use of "type":"module" in package.json:-

js provide common js and module js.. in common js we use require to import file but we will import using module thats why we wrote type=module.

---------------------------------------------------------------------
mongoose-aggregate-paginate-v2:= 

If you are looking for basic query pagination library without aggregate, use this one mongoose-paginate-v2

A cursor based custom aggregate pagination library for Mongoose with customizable labels.
Adding the plugin to a schema,

var mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

var mySchema = new mongoose.Schema({
  /* your schema definition */
});

mySchema.plugin(aggregatePaginate);

var myModel = mongoose.model("SampleModel", mySchema);
and then use model aggregatePaginate method,

// as Promise

var myModel = require("/models/samplemodel");

const options = {
  page: 1,
  limit: 10,
};
Link:-https://www.npmjs.com/package/mongoose-aggregate-paginate-v2
======================================================================
Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

Types of Middleware
Pre
Errors in Pre Hooks
Post
Asynchronous Post Hooks
Define Middleware Before Compiling Models
Save/Validate Hooks
Accessing Parameters in Middleware
Naming Conflicts
Notes on findAndUpdate() and Query Middleware
Error Handling Middleware
Aggregation Hooks
Synchronous Hooks

==================================================================
npm i bcrypt:-A library to help you hash passwords.
================================================================
npm i jsonwebtoken
jwt(json web token):-This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws

jwt is token which is used to identify data or user and after decoding it will be accessible for user .

for encyption it has need secret key,expire token time,payload
https://jwt.io/
======================================================
npm i cloudinary:-
to store multimedia like image,video
===================================================
npm i multer:-Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
