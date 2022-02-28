// module 35-3 (Different truthy and falsy values in javascript)

/* 
truthy: according to variable
number =23,3,4  / -6 both are true
string
' '  string with gap 
[] / [ ] / [0] all are same
{}
true
boolean  =this word is true
'0'
anything else that is not falsy will be truty

---------------------------------
falsy:- according to varible
false 
'' = string without gap 
null
undefined
0 /-0 both are same
*/

var x = parseInt(6)
console.log('value of x;=', x)
if(x){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}
