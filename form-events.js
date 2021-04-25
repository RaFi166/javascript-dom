//form submit event
const formData = document.querySelector('.form');
let feedbacks = document.querySelector('.feedback');
// const userName = document.querySelector('#text');
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(userName.value);
    //    console.log(formData.text.value);

    //validation....
    const userData = formData.textContent.value;
    const userDataPattern = /^[a-z]{6,}$/;

    if (userDataPattern.test(userData)) {
        //good experience
        feedbacks.textContent = "validate is good";

    } else{
        //bad experience
        feedbacks.textContent = "validate is not well organized";

    }
});

//test reg Exp
const username = 'rafi';
const expressions = /[a-z]{6,}/;

let result = expressions.test(username);
// console.log(result);

if (result){
    console.log("reg ex successfull :) ");
} else {
    console.log("reg ex unsuccessfull :( ");
}