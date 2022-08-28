//  var nums=[1,2,3,4,5,6]

//sort
//filter
//reduce
//some
//find
//foreach
//includes
//map
//flat
//push
//pop

// var num=[1,2,3]
// num.pop()
// console.log(num);


//filter()
// var evens=nums.filter(n=>n%2==0)
// console.log(evens);


//for taking each elements
//map()
//  var arr=[10,9,2,3,11,12,5]

// var op=arr.map(n=>n**2)
// console.log(op);

// var mout=arr.map(n=>n<5?n-1:n+1)
// console.log(mout);


//reduce()
//   arraysum
//   max
//   min
// var max=nums.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);
// var min=nums.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);


// var sum=nums.reduce((n1,n2)=>n1+n2)
// console.log(sum);

//sort()

// arr.sort((n1,n2)=>n1<n2?-1:1) //ascending
// console.log(arr);

// includes()
//to check if 50 is in array returns true oor false
// console.log(nums.includes(50));




// some()
//to check if 50 is in array using some returns true or false
// console.log(nums.some(n=>n==50));


// var nums=[
//     [10,11],
//     [12,13],
//     [1,2,3,4],
//     [50,5,6],
//     [34,5,67]
// ]

// flat()
//to make nested arrats to single array
// console.log(nums.flat());

//print nums greater than 15 in nested arrays
// console.log(nums.flat().filter(n=>n>15));

// print all elements separately
// nums.flat().forEach(num=>console.log(num))


var nums=[
    10,20,
    [10,
    [10,20]
    ],
    [[10,20],
    [10,20,
    [1,2,3]]
    ]
    
]
console.log(nums.flat(3));





