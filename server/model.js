let users = [];

class User{
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.password = password;
        this.exercises = [
            {

            }
        ];
    }
}

module.exports = {User};