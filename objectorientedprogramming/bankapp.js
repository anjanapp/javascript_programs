var accounts = [
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
  ];
  var session={}

  
  function validateaccno(acno){
    //return value true false--find includes some
    return accounts.some(ac=>ac.acno==acno);
  }
  // validateaccno(1002)

  function getdatabyacno(acno){
    return accounts.find(data=>data.acno==acno);
  }
  // getdatabyacno(1000)

  function getbalance(acno){
    return accounts.find(data=>data.acno==acno).balance;
  }
  // getbalance(1002)

  function getlastTransaction(acno){
    let alldebitTransactions=accounts.find(data=>data.acno==acno).transactions.debitTransactions
    // console.log(alldebitTransactions);
    console.log(alldebitTransactions[alldebitTransactions.length-1]);

  }
  // getlastTransaction(1002)

  function authenticate(acno,password){
    if(validateaccno(acno)){
      let data=getdatabyacno(acno)
      if(data.password==password){
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
  // console.log(authenticate(1002,"user123"));
   
  function login(acno,password){
    if(authenticate(acno,password)){
      session.user=acno
    }
    else{
      console.log("invalid user credentials");
    }
  }
  // console.log(session);
  // login(1000,'abc123');
  console.log(session);

  function loginrequired(){
    return "user" in session?true:false

  }
  function balanceenquiry(){
    if(loginrequired()){
      let loggeduser=session.user;
      return getbalance(loggeduser)                                     //console.log(getbalance(loggeduser));
    }
    else{
      return "invalid user"                                             //console.log("you must login");
    }
  }
  // login(1000,"abc123")
  // balanceenquiry();

  function fundTransfer(toAcno,amount){
    if(loginrequired()){
      // chk toacno exists
      if(validateaccno(toAcno)){
          let curBalance=balanceenquiry()
          if(amount>curBalance){
            console.log("insufficient balance");
          }
          else{
            let loggeduser=session.user;
            let payeedeatail=getdatabyacno(loggeduser)
            let recepientDetails=getdatabyacno(toAcno)
            payeedeatail.balance-=amount;
            recepientDetails.balance+=amount
            let debitTran={to:toAcno,amount:amount}
            payeedeatail.transactions.debitTransactions.push(debitTran)
            let creditTran={from:loggeduser,amount:amount}
            recepientDetails.transactions.creditTransactions.push(creditTran)
  
              // payeedeatail
              // recepient
  
          }
      }
      else{
        console.log("invalid to acno");
      }
      // chk sufficient balance in logged user 
    }
    else{
      console.log("u must login");
    }
  }
  function paymentHistory(){
    if(loginrequired()){
        let loggedUser=session.user
        let data=getdatabyacno(loggedUser)
        console.log("debit transaction");
        console.log(data.transactions.debitTransactions);
        console.log("credit transactions");
        console.log(data.transactions.creditTransactions);
  
    }
    else{
      console.log("u must login");
    }
  }
  
  
  function logOut(){
    if(loginrequired()){
      delete session.user
  
    }
    else{
      console.log("u must login");
    }
    
  }
  
  login(1000,"abc123")
  console.log(balanceenquiry());
  //logOut()
  fundTransfer(1002,4000)
  paymentHistory()
  console.log(balanceenquiry());
  


    
