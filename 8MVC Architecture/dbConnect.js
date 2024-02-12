const mongoose = require("mongoose");

module.exports = () => {
    const mongoUri =
        "getfrommongodbkey";

    try {
        mongoose.connect(
            mongoUri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            () => {
                console.log("mongodb connected");
            }
        );
    } catch (e) {
        console.log(e);
    }
};