class MyBank{
    accounts = [
        {
          acno: 1000,
          type: "saving",
          balance: 5000,
          password: "abc123",
          transactions: {
            creditTransactions: [
              { from: 1002, amount: 1000 },
              { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
              { to: 1002, amount: 1000 },
              { to: 1003, amount: 2000 },
            ],
          },
        },
        {
          acno: 1001,
          type: "current",
          balance: 6000,
          password: "Password@123",
          transactions: {
            creditTransactions: [
              { from: 1002, amount: 1000 },
              { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
              { to: 1002, amount: 1000 },
              { to: 1003, amount: 2000 },
            ],
          },
        },
        {
          acno: 1002,
          type: "saving",
          balance: 15000,
          password: "user123",
          transactions: {
            creditTransactions: [
              { from: 1001, amount: 1000 },
              { from: 1003, amount: 2000 },
            ],
            debitTransactions: [
              { to: 1000, amount: 1000 },
              { to: 1003, amount: 2000 },
            ],
          },
        },
      ]
    
       validateaccno(acno){
           return this.accounts.some(ac=>ac.acno==acno)
       }
           
}
var obj=new MyBank()
console.log(obj.validateaccno(1000));

