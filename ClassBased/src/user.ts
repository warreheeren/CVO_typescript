class User {
    private _firstName: string;
    private _lastName: string;
    protected _email: string;
    private _password: string;

    constructor(firstName: string, lastName: string, email: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = this.generatePassword();
    }
    get getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
    public resetPassword(): void {
        this._password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }
    get showUserInfo(): string {
        return `Name: ${this.getFullName}, Email: ${this._email}`;
    }
    set setPassword(newPassword: string) {
        if (this.isValidPassword(newPassword)) {
            this._password = newPassword;
            console.log("Wachtwoord succesvol ingesteld.");
        } else {
            console.log("Wachtwoord voldoet niet aan de vereisten.");
        }
    }
    private isValidPassword(password: string): boolean {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
        return passwordRegex.test(password);
    }
    private generatePassword() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const nummers = "0123456789";
        const spChar = "@#$%";

        let password = "";
        password += letters[Math.floor(Math.random() * letters.length)];
        password += nummers[Math.floor(Math.random() * nummers.length)];
        password += spChar[Math.floor(Math.random() * spChar.length)];

        for (let i = 3; i < 8; i++) {
            const allChars = letters + nummers + spChar;
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