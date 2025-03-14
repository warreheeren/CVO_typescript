class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposit of funds: ${amount}`);
    }
    public withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw of funds: ${amount}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
    public getBalance() {
        return this.balance;
    }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // Toegang tot de 'getBalance'-methode
account1.deposit(500); // Toegang tot de 'deposit'-methode
account1.withdraw(200); // Toegang tot de 'withdraw'-methode
console.log(account1.getBalance()); // Toegang tot de 'getBalance'-methode, deze heeft toegang tot de private balance property.
