const UserRepository = require('../repository/UserRepository')
const userRepo = new UserRepository()

class UserServices {
    constructor() { }

    async getAllUsers() {
        try {
            const user = await userRepo.getAllUsers();
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserServices;