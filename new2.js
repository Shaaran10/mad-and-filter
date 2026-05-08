let num=[1,2,3,4];
let number = num.map(num=>num*2);
console.log(number)
let sqr= num.map(num=>num*num);
console.log(sqr); 

let name=["sharan","leo","anu","adhi"];
let upper=name.map(name=>name.toUpperCase());
console.log(upper);

const salary=[1000,2500,13000,4000];
const result = salary.map(salary=>salary+1000);
console.log(result);

let nu=[1,2,3,4,5,6,7,8,9];
let odd=nu.filter(nu=>nu%2==0);
let even=nu.filter(nu=>nu%2!=0);
console.log(odd);
console.log(even);

let n =[10,9,20,30,5,45];
let no=n.filter(no=>no >10);
console.log(no)
