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

const attr = document.querySelector('a');
console.log(attr.getAttribute('href'));
attr.setAttribute('href','https://www.facebook.com/');
attr.innerText = 'Facebook';

const cngClass = document.querySelector('.lorem-5');
console.log(cngClass);

cngClass.setAttribute('class', 'thirdclass');
cngClass.innerHTML = 'text has been changed';
cngClass.setAttribute('style', 'color:teal');

const para = document.querySelector('.firstclass');

para.style.color = 'red'; para.style.backgroundColor = 'teal';

//challenge ........

const allpara = document.querySelectorAll('p');
console.log(allpara);

allpara.forEach((p)=>{
    console.log(p.innerText);
    if(p.innerText.includes('error')){
        p.classList.add ('error');
    } else if(p.innerText.includes('success')){
        p.classList.add('success');
    }
    console.log('good job my dear rafi!');
})
const para = document.querySelectorAll('p');
console.log(para[0].innerText);
console.log(para[0].classList);