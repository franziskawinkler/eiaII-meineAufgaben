"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
//https://mongodbnetbrowser.herokuapp.com/
let databaseURL = "mongodb://localhost:27017";
let databaseName = "eisdealer";
let db;
let cone;
let dip;
let icecreamType;
let toppings;
let eintrag;
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
    }
}
function insert(_doc) {
    eintrag = db.collection("icecreamType"),
        eintrag.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = eintrag.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, auswahlArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(auswahlArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=database.js.map