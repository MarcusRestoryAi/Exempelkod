class User {
    //Konstruktor
    constructor(userName, pass, data) {
        this.userName = userName;
        this.pass = pass;
        this.data = data;
    }

    getUserData() {
        return `UserName: ${this.userName}
Pass: ${this.pass}
Data: ${this.data}`;
    }
}

module.exports = User;