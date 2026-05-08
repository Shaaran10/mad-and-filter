let multi=(x,y)=>x*y;
console.log(multi(10,20));

let even=(x)=>x%2==0;
console.log(even(29));

let sqr=(x)=>x*x;
console.log(sqr(29));

const person={
    name:"sharan",
    age:"20",
};
const{name,age}=person;
console.log(person);

const color=["red","blue","green"];
const[first,second,third]=color;
console.log(first,third);

const place={
    city:"kannur",
    state:"kerala",
};
const{city,state}=place;
console.log(place);
