class UserModel {
    constructor(user){
        this.email = user.email || undefined;
        this.password = user.password || undefined;
    }
}
module.exports = UserModel;