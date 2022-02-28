// module 35-9 (summary)

const a = 'Alim uddin';
const b = 23;
const c = true;
// null
// undefined

// primitive 
// object

const nums = [23, 12, 56, 34];  //it is object although looks array
// console.log(typeof nums);
// Array.isArray(nums)

function triple(x, y, z) {
    x.age = 88888;
    // y = 2222;
    // z = 333;
}
// console.log(typeof triple);
// console.log(triple.length);
const num1 = 3;
const num2 = 5;
const num3 = 7;
// triple(num1, num2, num3);


const myObj = { name: 'kuddus', age: 17 };
triple(myObj);
console.log(myObj);
// console.log(num1, num2, num3); // value  3 5 7 will exist
// console.log(typeof null);