const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert Todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'John',
    //     age: 24,
    //     location: "NY" 
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to Insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close();
})