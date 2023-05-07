const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
    console.log("DB connected...!");
});

mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected ...x...x...x...!");
});

module.exports = async function connectMongoDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
    } catch (err) {
        console.log(err);
    }
};
