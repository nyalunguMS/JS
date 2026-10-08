let account = {
    accountNumber: "123456",
    owner: "Moe",
    balance: 5000,
    transactions: [1000, -500, 2000],

    deposit: function (amount) {
        this.balance = this.balance + amount;
    },

    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient funds");
        }
    },

    showBalance: function () {
        console.log("Balance:", this.balance);
    }
};
account.showBalance();

account.deposit(1000);
account.showBalance();

account.withdraw(2000);
account.showBalance();


