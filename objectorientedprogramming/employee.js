//class- plan,design pattern,blueprint
//object- what we build using cls
//this- contains instance variables
//constructor-initializing instance variables
//constructor name is always same as class name in c++,java
//in javascript constructor name is constructor
//constructor need not be called separately it will be called when object is created

class Employee{
    constructor(eid,ename,design,salary){  //initializing instance variables    SetEmp(eid,ename,design,salary)
        this.eid=eid;
        this.ename=ename;
        this.design=design;
        this.salary=salary;


    }
    printEmp(){
        console.log(this.eid,this.ename,this.design,this.salary);
    }
}
var emp1=new Employee() //object creation  or var emp1=new Employee(1000,"ram","hr",25000)
emp1.SetEmp(1000,"ram","hr",25000)
emp1.printEmp()