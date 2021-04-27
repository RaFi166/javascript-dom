// console.log('hello rafi');

//filter.....
// const numbers = [10,20,30,40,50,60,70,80];
// const filteredNum = numbers.filter((number)=>{
//     return number >=50;
// });
// console.log(filteredNum);

//reduce method..........
// const numbers = [10,20,30,-40,50,-60,70,80];
// //  let result = numbers.reduce((first, value)=>{
// //     if(value >=50){
// //         first++;
// //     }
// //     return first;
// // }, 0);
// // console.log(result);

// let result = numbers.reduce((acc, crr)=> {
//     return acc + crr;
// }, 0);
// console.log(result);

//find............
const numbers = [10,20,30,-40,50,-60,70,80];
let result = numbers.find((theNumber)=>{
    return theNumber > 50;
});
console.log(result);




