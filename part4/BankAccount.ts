class BankAccount {
    public ownerName: string;
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, ownerName: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }
}