// module 35-2  (Primitive data type and non-primitive)
 /* 
 7 types of data types
   i) primitive
 1. Number
 2. String
 3.Boolean
 4.Undefined
 5.null

 7.symbol
    ii) non-primitive
6. object
  */


//-----------This is primitive data that's why didn't change the data 
let a = 'hello'
let b =a
console.log(a,b)

a = 'gello'
console.log(a,b)


// -------------This is non-primitive and data will change if i change one side data 

let x = {name:'tanvir', class:"anr"}
let y = x
console.log(x,y)

x.name = 'shawon'
y.class='ok'

console.log(x,y)
