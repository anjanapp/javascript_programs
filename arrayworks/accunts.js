var accounts=[
    [1000,"ram",25000,"savings",[
        [1002,"g-pay",400],

        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1001,"jhon",35000,"current",[
        [1000,"g-pay",500],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1002,"hari",55000,"savings",[
        [1000,"g-pay",1000],
        [1003,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]],
    [1003,"anu",15000,"current",[
        [1002,"g-pay",400],
        [1001,"phone-pay",500],
        [1004,"amazon-pay",600],

    ]]
]

// do with array medthods also

// print total number of savings account

// print all g-pay transactions

// pritn all transactions where transaction amount > 400

// sort accounts based on balance

// print debit transactions of account number 1002

// print all debit transactions of account number 1002 where transaction amount > 400


// print total number of savings account
// console.log(accounts.filter(a=>a[3]=='savings').length);

// print all g-pay transactions
// var gptransactions=accounts.map(data=>data[4]).flat().filter(t=>t[1]=='g-pay')
// console.log(gptransactions);

// print details of id 1000
// console.log(accounts.find(data=>data[0]==1000));

// sort accounts based on balance
// accounts.sort((d1,d2)=>d1[2]-d2[2])
// console.log(accounts);

// pritn all transactions where transaction amount > 400
accounts.map(d=>d[4]).flat().filter(t=>t[2]>400).forEach(t=>console.log(t))
