const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userlist = new Schema({
    username: String,
    email: String,
    fullname: String,
    age: {
        type: Number,
        required: true,
        max: [100,"You are too old!!"],
        min: [10, "You are way to young!!"]
    },
    location: String,   
    gender: String
});

userlist.method.getName = () => {
    return this.username;
}

var users = mongoose.model("users", userlist);
module.exports = users;