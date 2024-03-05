const mongoose = require('mongoose')
const { MONGO_URI } = require('./serverConfig')

const DatabasesServer = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default DatabasesServer
