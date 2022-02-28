// module 35-5 (double wqual (==) vs triple equal (===) conversion

// double equal change the value and don't matter about "typeof"
// triple equal chack with "typeof"

const first ='0';
const second = false;
if (first ==second){
    console.log('condition is true')
}
else{
    console.log('condition is false')
}


//more comparision
const a= {name:'tanvir'}
const b = {name:'tanvir'}

if(a==b){
    console.log('true')
}
else{
    console.log('false')
}