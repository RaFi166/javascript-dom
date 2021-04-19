console.log('rafi');

for(let i = 0; i < 5; i++){
    console.log('in loop:' , i );
}

let array = ['mezbah', 'uddin', 'rafi'];

for(let i=0; i< array.length; i++ ){
console.log(array[i]);
}

if(array.length = 3){
    console.log('this is true');
} else{
    console.log('this is not true');
}

let scores = [10,20,30,40,50,60,70,80,90,100];
console.log(scores);
for(let i = 0; i<scores.length; i++){
    console.log(scores[i]);

    if(scores[i]==70){
        console.log("congrats");
        break;
    }
}

let number = 'D';

switch (number) {
    case 'A':
        console.log("no man not right");
        break;
    case 'B':
        console.log("no man not right"); break;
    case 'C':
        console.log("no man not right"); break;
    case 'D':
        console.log("no man not right");
        break;
    case 'E':
        console.log("no man not right");
        break;
    default:
        console.log("not found");
        break;
}