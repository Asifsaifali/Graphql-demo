const mongoose = require('mongoose')
// const isEmail = require('valoda')
const UserSchema = new mongoose.Schema({
    user: {
        id: Number,
        name: String,
        email: String,
        // match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please fill a valid e-mail address"],
        password: String,

    }
},
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema)

module.exports = User