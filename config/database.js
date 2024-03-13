const mongoose = require('mongoose');


require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log("Connected to Database"))
        .catch((err) => {
            console.log("Getting error in database connection");
            process.exit(1);
        })
}