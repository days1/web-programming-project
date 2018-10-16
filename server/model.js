

class Users{
    constructor(){
        this.users = [];
    }
    
    addUser(User){
        this.users.push(User);
    }

    displayUsers(){
        return this.users;
    }
}

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

module.exports = {Users, User};