let score=33 //variable declare
console.log(typeof score);
console.log(typeof (score));

let scor="33abc"
console.log(typeof scor);
console.log(typeof (scor));

let valueInNumber=Number (scor)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let str="riya"; //for string 
let str_to_number=Number(str);
console.log(str_to_number);

let s=null //for null
let ss=Number(s);
console.log(ss);

let b=true // boolean 
let bb=Number(b);
console.log(bb);

let u=undefined  // like this for undefined
let uu=Number(u);
console.log(uu);

//"33" =>33
// "33abc" => Nan (not a number)

let isLoggedIn=1
let booleanIaLoggedIn=Boolean(isLoggedIn);
console.log(booleanIaLoggedIn);
//1 => true
// 0 =>false
// "" => false
// "riya" =>true

let somenum=55
let strnum=String(somenum);
console.log(strnum);
console.log(typeof (strnum));