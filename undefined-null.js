// module 35-4 (A null ns undefined , diffrent ways you will get undefined)

/* 
== undefined causes
1.if variable value not assigned
2.if function use but didn't  return anything
3. readed return but don't give anything in return 
4. parameter that isn't pass 
 5.property doesn't in the object
 6.if i try to find that is not exist in the array
7. accessing the deleted


array 
8. explicitly set value to undefined ()
 */

let first;
console.log(first)


/* function second(x,y){
    const sum = x+y
}
const result = second(12,14)
console.log(result) */



// 3. if we return but don't find to return then it will also show undefined 
/* function add(a,b){
    const sum = a +b
    if(sum <10){
        return;
    }
    const fun = a*b;
    return 
}
const fourth = add(5,37)
console.log(fourth) */


//4. 
/* function number(a,b){
    const multiply = b*3
    console.log(b)
    return multiply
}
const num4 = number(4)
 */
// 5.property doesn't in the object
/* const fifth = {name:'alu', class:'iv', id:48}
console.log(fifth.number) */


// 6.if i try to find that is not exist in the array
const sixth =[4,6,6,7,3]
// console.log(sixth[8])

//7. accessing the deleted array 
delete sixth[2]
// console.log(sixth) // <empty item> will show if use delete  // its is shouldn't, do it by splice
console.log(sixth[2]) // will show undefined 


// 8. explicitly set value to undefined
const eight = undefined;
console.log(eight)