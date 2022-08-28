//set is used so that duplicate values not exist
var arr=[10,10,20,20,30,30]
var st=new Set()
arr.map(n=>st.add(n))
console.log(st);
console.log(st[1]);