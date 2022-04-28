/*const claudio ={
    age:21,
    nombre:"claudio",
    altura:175
};
const {age,nombre} =claudio;
console.log(age);

let createPerson=(e,n)=>({e,n});
//console.log(createPerson(edad,name));
*/
function fibo(num){
const fib = [0,1];
console.log(fib[2]);

for(let i=2;i<=num;i++){
    fib[i]= fib[i-1]+fib[i-2];
}
return fib[num];

}
console.log(fibo(3));