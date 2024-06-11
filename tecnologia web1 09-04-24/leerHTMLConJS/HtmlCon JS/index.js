const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrfito=document.getElementsByClassName('.parrafito');
const pid=document.getElementById('#pid');

const input=document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrfito,
    pid,
    input
});

h1.innerHTML="hola mundo javaScript <hr><br> 2024"
// // h1.innerText="hola mundo javaScript <hr><br> 2024"
// console.log("muestra la clase: "+h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

// h1.classList.add('blue')
// h1.classList.add('verde')
//  h1.classList.remove('gris')

input.value="123456789";

const img =document.createElement('img');
img.setAttribute('src','https://www.infocalcbba.edu.bo/wp-content/uploads/2019/04/logo.png');
console.log(img);

pid.innerHTML=""
pid.append(img);
