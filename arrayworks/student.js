var students=[
    //id,name,course,completed,skills,placed
    [100,"akhil","mearnstack",false,["js","css","html"],false],
    [101,"arun","mearnstack",true,["js","css","html","angular","react"],true],
    [102,"anu","django",true,["js","css","html","bootstrap","python","django"],true],
    [103,"ajay","django",false,["js","css","html","python"],true],
    [104,"vinu","django",true,["js","css","html","python","django","angular"],false],
    [105,"tinu","testing",true,["java","manuel","selinum"],false],
    [106,"jay","testing",true,["java","ant","jira"],true],
    [107,"ann","bigdata",false,["python","hadoop","pyspark","hive"],false],
]

//make quest and do

// placed students
// var placedstudents=students.filter(st=>st[5]==true)
// console.log(placedstudents);

// course completed students name
// var coursecompletedstudents=students.filter(st=>st[3]==true).map(st=>st[1])
// console.log(coursecompletedstudents);

// placed students in django
// var djangoplacedstudents=students.filter(st=>st[2]=='django' && st[5]==true)
// console.log(djangoplacedstudents);

//atleast 5 skills students
// var topskill=students.filter(st=>st[4].length>=5)
// console.log(topskill);

//django along with angular

//names starting with a
// var anames=students.filter(st=>st[1][0]=='a')
// console.log(anames);


//to find pythonstudents
// var pythonstudents=students.filter(s=>s[4].includes('python'))
// console.log(pythonstudents);

//students with django python
// var djangostudents=students.filter(s=>s[4].includes('python') && s[2]=='django')
// console.log(djangostudents);


//names of students which includs python
students.filter(s=>s[4].includes('python')).forEach(s=>console.log(s[1]))