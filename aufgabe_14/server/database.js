"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "eisdealer";
let db;
let cone;
let dip;
let icecreamType;
let toppings;
let order;
let array = [];
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //databaseURL = "mongodb+srv://username:password@hostname:port/database"
    databaseURL = "mongodb+srv://franzi:franzi123@cluster0-ap38w.mongodb.net/test?retryWrites=true";
    databaseName = "eisdealer";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        cone = db.collection("cone");
        dip = db.collection("dip");
        icecreamType = db.collection("icecreamType");
        toppings = db.collection("toppings");
        order = db.collection("order");
    }
}
function insert(_doc) {
    switch (_doc.name) {
        case "cone":
            cone.insertOne(_doc, handleInsert);
        case "dip":
            dip.insertOne(_doc, handleInsert);
        case "icecreamType":
            icecreamType.insertOne(_doc, handleInsert);
        case "toppings":
            toppings.insertOne(_doc, handleInsert);
    }
}
exports.insert = insert;
function insertOrder(_doc) {
    order.insertOne(_doc, handleInsert);
}
exports.insertOrder = insertOrder;
function remove(_doc) {
    var deleteQuery = { _id: _doc.id };
    switch (_doc.type) {
        case "cone":
            cone.deleteOne(deleteQuery, handleRemove);
        case "dip":
            dip.deleteOne(deleteQuery, handleRemove);
        case "icecreamType":
            icecreamType.deleteOne(deleteQuery, handleRemove);
        case "toppings":
            toppings.deleteOne(deleteQuery, handleRemove);
    }
}
exports.remove = remove;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function handleRemove(_e) {
    console.log("Database dletion returned -> " + _e);
}
function findAll(_callback) {
    array = [];
    icecreamType.find().toArray(prepareAnswer);
    cone.find().toArray(prepareAnswer);
    dip.find().toArray(prepareAnswer);
    toppings.find().toArray(sendAnswer);
    function prepareAnswer(_e, auswahlArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            array = array.concat(auswahlArray);
        }
    }
    function sendAnswer(_e, auswahlArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            array = array.concat(auswahlArray);
            _callback(JSON.stringify(array));
        }
    }
}
exports.findAll = findAll;
function loadOrder(_callback) {
    order.find().toArray(sendAnswer);
    function sendAnswer(_e, orderArray) {
        if (_e)
            _callback("Error" + _e);
        else {
            _callback(JSON.stringify(orderArray));
        }
    }
}
exports.loadOrder = loadOrder;
//# sourceMappingURL=database.js.map