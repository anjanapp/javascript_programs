var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//print number of employees
// console.log(employees.length);

// print employee names
// for(let emp of employees){
//     [1000,"ram",15000,"hr",1990,2000],
//     console.log(emp[1]);


// }

// print experience of all employees
// for(let emp of employees){
//     console.log(emp[5]-emp[4]);
// }

// print employee name whose id=1000
// for(let emp of employees){
//     if(emp[0]==1000){
//         console.log(emp[1]);
//     }
// }

// print developers name
// for(let emp of employees){
//     if(emp[3]=="developer"){
//         console.log(emp[1]);

//     }
    
// }

// sort employees based on salaRY
// employees.sort((e1,e2)=>e2[2]-e1[2])
//     console.log(employees);



// push detail to employees
// var detail=[1007,"kiran",12000,"developer",2021,2022]
// employees.push(detail)
// console.log(employees);


// update salARY of ravi
// employees[2][2]=30000
// console.log(employees);


// sort employees based on experience
// employees.sort((e1,e2)=>(e1[5]-e1[4])-(e2[5]-e2[4]))
//     console.log(employees);

// print all employee names
// var enames=employees.map(emp=>emp[1])
// console.log(enames);

//print salaries of all employees
// var esalary=employees.map(emp=>emp[2])
// console.log(esalary);
//          OR
// console.log(employees.map(e=>e[2]));

//print developers details
// var edetails=employees.filter(e=>e[3]=='developer')
// console.log(edetails);

// print employee details whose exp>5
// var edetails=employees.filter(e=>(e[5]-e[4])>5)
// console.log(edetails);

//print name of employees who are working as ba
// var ename=employees.filter(e=>e[3]=='ba').map(e=>e[1])
// console.log(ename);

//print employee names whose exp==10
// var ename=employees.filter(e=>(e[5]-e[4])==10).map(e=>e[1])
// console.log(ename);

//print employee names whose salary>3000 and exp>3
// var empdetails=employees.filter(e=>(e[2]>30000) && (e[5]-e[4]>5))
// console.log(empdetails);

//highpaidemp
// var highpaid=employees.reduce((e1,e2)=>e1[2]>e2[2]?e1:e2)
// console.log(highpaid);

//highexpemp
// var experiencedemp=employees.reduce((e1,e2)=>(e1[5]-e1[4]>e2[5]-e2[4]?e1:e2))
// console.log(experiencedemp);

//
// var mostexp=employees.map(e1=>e1[5]-e1[4]).reduce((e1,e2)=>e1>e2?e1:e2)
// console.log(mostexp);
// var emps=employees.filter(e=>e[5]-e[4]==mostexp)
// console.log(emps);

//is there any department qa
// var ispresent=employees.some(e=>e[3]=='qa')
// console.log(ispresent);

//is there any department ba
// console.log(employees.some(e=>e[3]=='ba'));

//is there any employee working with salARY OF 50000
// console.log(employees.some(e=>e[2]==50000));

//diff of 
// find() -only return first match key
//  filter()-return all match key

//print details of employee with id of 1000
// console.log(employees.find(e=>e[0]==1000));

employees.forEach(e=>console.log(e));
employees.forEach(e=>console.log(e[1]));






// var accounts=[
//     [1000,"ram",25000,"savings",[
//         [1002,"g-pay",400],

//         [1003,"phone-pay",500],
//         [1004,"amazon-pay",600],

//     ]],
//     [1001,"jhon",35000,"current",[
//         [1000,"g-pay",500],
//         [1003,"phone-pay",500],
//         [1004,"amazon-pay",600],

//     ]],
//     [1002,"hari",55000,"savings",[
//         [1000,"g-pay",1000],
//         [1003,"phone-pay",500],
//         [1004,"amazon-pay",600],

//     ]],
//     [1003,"anu",15000,"current",[
//         [1002,"g-pay",400],
//         [1001,"phone-pay",500],
//         [1004,"amazon-pay",600],

//     ]]
// ]






// print total number of savings account

// print all g-pay transactions

// pritn all transactions where transaction amount > 400

// sort accounts based on balance

// print debit transactions of account number 1002

// print all debit transactions of account number 1002 where transaction amount > 400