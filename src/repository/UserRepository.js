const User = require('../models/UserModels')

class UserRepository {
    constructor() {

    }

    async createUser({ ...data }) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getAllUsers() {
        try {
            if (!data) {
                return User.find()
            } else {
                return User.find().pretty()
            }
        } catch (error) {
            throw error
            console.log(error)
        }
    }
}

module.exports = UserRepository