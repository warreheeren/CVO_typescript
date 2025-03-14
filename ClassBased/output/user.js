"use strict";
class User {
    constructor(firstName, lastName, email) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = this.generatePassword();
    }
    get getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    resetPassword() {
        this._password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }
    get showUserInfo() {
        return `Name: ${this.getFullName}, Email: ${this._email}`;
    }
    set setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this._password = newPassword;
            console.log("Wachtwoord succesvol ingesteld.");
        }
        else {
            console.log("Wachtwoord voldoet niet aan de vereisten.");
        }
    }
    isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
    generatePassword() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "@#$%";
        let password = "";
        password += letters[Math.floor(Math.random() * letters.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
        const allChars = letters + numbers + specialChars;
        const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        for (let i = 0; i < length; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        return password;
    }
}
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Doe", "jane.doe@example.example");
console.log(user1.showUserInfo);
console.log("--------");
console.log(user2.showUserInfo);
console.log("--------");
console.log(user1.getFullName);
user1.resetPassword();
user1.setPassword = "Test123@";
