import * as Mongo from "mongodb";
console.log("Database starting");
let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "eisdealer";
let db: Mongo.Db;
let cone: Mongo.Collection;
let dip: Mongo.Collection;
let icecreamType: Mongo.Collection;
let toppings: Mongo.Collection;
let order: Mongo.Collection;


// running on heroku?
if (process.env.NODE_ENV == "production") {
//databaseURL = "mongodb+srv://username:password@hostname:port/database"
    databaseURL = "mongodb+srv://franzi:franzi123@cluster0-ap38w.mongodb.net/test?retryWrites=true";
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
        order = db.collection("order");
    }
}

export function insert(_doc: EISDEALER): void {
    cone = db.collection("cone"),
    cone.insertOne(_doc, handleInsert);
    dip = db.collection("dip"),
    dip.insertOne(_doc, handleInsert);
    icecreamType = db.collection("icecreamType"),
    icecreamType.insertOne(_doc, handleInsert);
    toppings = db.collection("toppings"),
    toppings.insertOne(_doc, handleInsert);
    order = db.collection("order"),
    order.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = icecreamType.find();
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, auswahlArray: EISDEALER[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(auswahlArray));
    }
}
