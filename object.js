console.log("rafi")

let myObject = {
    name:'rafi',
    age:24,
    occup:'engineer',
    address: ['noakhali','tangail','uttara','Gazipur'],
    funcone : function(){
        console.log('this is function u know');
    },
    functwo: function(){
        console.log(this.age);
    }
}
console.log(myObject.occup);
myObject.funcone();
myObject.functwo();

const arryaobj = [
    { name:'rafi',
      age:25,
      address:'uttara'},

]
console.log(arryaobj);



console.log(Math.PI);
console.log(Math.random());
