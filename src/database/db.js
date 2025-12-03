const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("Wait connecting to the database...");

    mongoose.connect("mongodb+srv://root:root@cluster0.30wrq6p.mongodb.net/?appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

module.exports = connectDatabase;