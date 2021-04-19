console.log('hello');

function name(){
    console.log("rafi");
}
name();

expression function

const name = function(){
    console.log('rafi');
}
name()

const name = function(fname){ 
    console.log(`my first name is ${fname}`);
}
name('rafi')

const name = function(fname = 'rafi', lname){ 
    console.log(`my first name is ${fname} and my last name is ${lname}`);
}
name('opi')

const number = function(nums,num){
    console.log(`the two numbers are ${nums} and ${num}`);
}
number ([1,2,3], 4);

const name = (funcone) =>{

    let nametwo = 'rafi';
    funcone(nametwo);
 
}
name(function(nametwo){
    console.log(nametwo);
});

let person = ['rafi', 'mezbah', 'rafi'];

person.forEach(function(per){
    console.log(per);
})
