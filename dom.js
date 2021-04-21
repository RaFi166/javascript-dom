console.log('my name is rafi');
const firstqu = document.querySelector('p');
console.log(firstqu);
const secondquery = document.querySelector('body > h1');
console.log(secondquery);

const secondquery = document.querySelectorAll('p');
console.log(secondquery[2]);

secondquery.forEach((allp)=>{
    console.log(allp);
})

let classes = document.getElementsByClassName('firstclass');
console.log(classes);

const ids = document.getElementById('firstid');
console.log(ids);

const textChange = document.querySelector('.firstclass');

textChange.innerText = 'hello bappy';
console.log(textChange.innerText);

let catchClass = document.querySelector('.firstclass');
let people = ['mezbah', 'uddin', 'rafi'];

console.log(catchClass);
catchClass.innerHTML = '<h1> hello bappy</h1>';

people.forEach((person)=>{
    console.log(person[0]);
    catchClass.innerHTML += `${person}`;
})

