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
let array: Array<EISDEALER> = [];


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

export function insertOrder(_doc: Object): void {
    order.insertOne(_doc, handleInsert);
}

export function remove(_doc: RemoveObject): void {
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

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

function handleRemove(_e: Mongo.MongoError): void {
    console.log("Database dletion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    icecreamType.find().toArray(prepareAnswer);
    cone.find().toArray(prepareAnswer);
    dip.find().toArray(prepareAnswer);
    toppings.find().toArray(sendAnswer);

    function prepareAnswer(_e: Mongo.MongoError, auswahlArray: EISDEALER[]): void {
        if (_e)
            _callback("Error" + _e);
        else {
            array = array.concat(auswahlArray);
        }
    }
    function sendAnswer(_e: Mongo.MongoError, auswahlArray: EISDEALER[]): void {
        if (_e)
            _callback("Error" + _e);
        else {
            array = array.concat(auswahlArray);
            _callback(JSON.stringify(array));
        }
    }
}

export function loadOrder(_callback: Function): void {
    order.find().toArray(sendAnswer);

    function sendAnswer(_e: Mongo.MongoError, orderArray: []): void {
        if (_e)
            _callback("Error" + _e);
        else {
            _callback(JSON.stringify(orderArray));
        }
    }
}
