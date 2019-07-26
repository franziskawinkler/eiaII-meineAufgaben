import * as Mongo from "mongodb";
console.log("Database starting");
//https://mongodbnetbrowser.herokuapp.com/
let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "eisdealer";
let db: Mongo.Db;
let cone: Mongo.Collection;
let dip: Mongo.Collection;
let icecreamType: Mongo.Collection;
let toppings: Mongo.Collection;
let eintrag: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
//databaseURL = "mongodb+srv://username:password@hostname:port/database"
    databaseURL = "mongodb+srv://franzi:franzi123@cluster0-ap38w.mongodb.net/test/eisdealer";
    databaseName = "eisdealer";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
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

export function insert(_doc: EISDEALER): void {
    // try insertion then activate callback "handleInsert"
    eintrag.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = eintrag.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, auswahlArray: EISDEALER[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(auswahlArray));
    }
}
