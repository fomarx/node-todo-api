// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b684890cb6c5355ce7776b6')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    //     $inc: {
    //         age: 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(results => {
    //     console.log(results);
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6839582d683e38a00a37f4')
    }, {
        $set: {
            name: 'Omar'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(results => {
        console.log(results);
    })
    // client.close();
})