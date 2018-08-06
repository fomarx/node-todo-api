const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongodb server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat launch'}).then(results => {
    //     console.log(results);
    // });
    
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat launch'}).then(results => {
    //     console.log(results);
    // })

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat launch'}).then(results => {
        console.log(results);
    })

    // client.close();
})