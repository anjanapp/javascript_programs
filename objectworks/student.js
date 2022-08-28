

var student={
    rollno:100,
    sname:"ram",
    course:"mearn"
    

}

//check gender property is present or not
console.log('gender' in student);

// add property male
student.gender="male"
// console.log(student);
// console.table(student);
student.skills=["css","html","bootstrap"]
// console.log(student);
//add new skill angular
student.skills.push("angular")
// console.log(student);
//check for vaccinated pro is present if noset vaccinated false
if(!("vaccinated" in student)){
    student.vaccinated=false

}
console.log(student);


