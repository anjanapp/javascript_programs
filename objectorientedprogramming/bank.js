class Bank{
    bank_name="sbk"
    createAccount(accno,cst_name,phone,email){
        this.accno=accno;
        this.custname=cst_name;
        this.phone=phone;
        this.email=email;
        this.bal=2000;
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`your ${this.bank_name} has been credited with amount ${amount} aval bal is ${this.bal}`);
    }
    withdraw(amount){
        if(this.bal>amount){
            this.bal-=amount;
            console.log(`your ${this.bank_name} has been debited with amount ${amount} aval bal is ${this.bal}`);
        
        }
        else{
            console.log(`insufficient balance transaction cancelled`);
        }
    }
    balEnq(){
        console.log(`your aval bal ${this.bal}`);
    }
}
var b1=new Bank()
b1.createAccount(1000,"anuj",12345,"abc@gmail.com")
b1.deposit(5000);
b1.withdraw(500);
b1.balEnq()