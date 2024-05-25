const mongoose = require('mongoose')

const DBURL = process.env.DBURL;

exports.dbConnect = (dbName) => {
    const url = DBURL + dbName;
    mongoose.connect(url).then(() => {
        console.log(`db ${dbName} is created and connected`);
    }).catch((error) => {
        console.log(`error while connecting to ${dbName} database: ${error}`);
    })
}