// module 35-6 (Block scope, global scope, Hoisting)
const favNum= 5 //এটাকে গ্নোবাল স্কোপ বলে।এগুলোকে যেকোন জায়গা থেকে এক্সেস করা যায় তাই। 
// যখন একটি  ফাংশন  এর ভিতরে একটি ভেরিয়েবল তৈরী  হয় তখন সেটাকে local scope বলে । এটি করারা মাধ্যমে, ভেরিয়েবল গুলোকে শুধু সেই ফাংশনের মধ্যে access করা যাই।
function add(first, second){
    const result = first + second
// console.log(second)
// console.log(favNum)
    return result
}

const sum = add(23,45)

function add(n1, n2){
    const total = n1 *n2;
    // console.log('var', mood)
    if(total >10){
        // var mood = 'happay'  //var দিলে  এই ফাংশনের মধ্যে উপরে undefined নিচে ভ্যালু দিবে । but const/let দেলে errorদিবে।  
        mood = 'happay' //without variable declaration it becomes global
    }
    console.log(mood)
    return total;
}
console.log('without variable declaration:=',mood)


for(var i=0; i>10; i++){

}
console.log(i)