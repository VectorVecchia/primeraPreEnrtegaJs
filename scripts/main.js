let cartas = [1,1,2,2,3,3,4,4,5,5,6,6];
let carta1=null;
let carta2=null;
let tarjetasGiradas=0;
let primerResultado =null;
let segundoResultado =null;
let movimientos =0;
let tablero = null;
let tableroInicial = null;

// Numeros Aleatorios

cartas=cartas.sort(()=>{return Math.random()-0.5})


 function girar(id) {
   tarjetasGiradas ++;
   

    if (tarjetasGiradas==1) {
    carta1 = document.getElementById(id);
    primerResultado = cartas[id];
    carta1.innerHTML= primerResultado; 
    carta1.disabled = true;
 } else if (tarjetasGiradas==2){
   carta2=document.getElementById(id);
   segundoResultado=cartas[id];
   carta2.innerHTML=segundoResultado;
   carta2.disabled = true;
   movimientos ++ ;
   if (primerResultado == segundoResultado){
     tarjetasGiradas =0;
   } else {
     setTimeout(()=>{
      carta1.innerHTML=" ";
      carta2.innerHTML=" ";
      carta1.disabled= false;
      carta2.disabled= false;
      tarjetasGiradas=0;
     },1500);
   }
 }
 }

