const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("password", salt, function(err, hash) {
        console.log(hash);
    });
});

let hash = '$2a$10$yGnu.dgw.QX4f50Ff.g5UeQtcLcfNwqnrYyH9750O/JVK.1GFXTGy';

bcrypt.compare("password", hash, (err, res) => {
    console.log(res);
});


// let data = {
//     id: 10
// }

// let token = jwt.sign(data, 'qwe123');
// console.log(token);

// let decoded = jwt.verify(token, 'qwe123');
// console.log('Decoded data : ', decoded);
// console.log(`Decoded data : ${decoded}`);

// let message = "I'm the 3rd player";
// let hashed  = SHA256(message).toString();

// console.log(message);
// console.log(hashed);


// let data = {
//     id: 4
// }

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// }

// console.log(`1ST: ${token.data.id}`);
// console.log(token.hash);

// token.data.id = 7;
// token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(data)).toString();
// if(resultHash === token.hash) {
//     console.log('Data wasn\'t changed');
// }
// console.log(`2ND: ${token.data.id}`);
// console.log(token.hash);