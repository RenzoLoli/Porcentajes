var boton = document.getElementById("boton");
var caja = document.getElementById("numero");
var paridad = document.getElementById("paridad");
var frase = document.getElementById("lea");
var precio = 0;
var cont = 0;
var i =0;

var f = ["puto ", "el ", "que ", "lo ", "lea ", "jaaaaaaaaaaaaa ", "<br>pasa ", "el pack :V ", "okno xd"];

function generarAleatorio() {
  
  var probabilidad = Math.floor(Math.random() * 100);

  if(probabilidad >=0 && probabilidad <= 30){

    precio = generarPar();

    paridad.innerHTML = "estas dentro del 30% con " + probabilidad + " :)";
    caja.innerHTML = "precio: " + precio;

  }
  else {

    precio = generarImpar();

    paridad.innerHTML = "No estas dentro del 30% con " + probabilidad + " :C";
    caja.innerHTML = "precio: " + precio;

  }

  if(cont % 5 == 0 && cont > 0 && i < 9){

      frase.style.color = getRandomColor();
      frase.innerHTML += f[i];
      i++;

  }

  colorBoton(precio);

  cont++;

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorBoton(precio){

  if(precio%5 == 0 && precio%10 != 0){

    boton.style.backgroundColor = 'skyblue';
    boton.style.color = 'white';
    return;

  }

  if(precio >= 0 && precio <= 100){

    boton.style.backgroundColor = 'blue';
    boton.style.color = 'white';

  }
  else if(precio >= 101 && precio <= 299){

    boton.style.backgroundColor = 'green';
    boton.style.color = 'white';

  }
  else if(precio >= 300 && precio <= 500){

    boton.style.backgroundColor = 'red';
    boton.style.color = 'white';   

  }
  else if(precio >= 501 && precio <= 1000){

    boton.style.backgroundColor = 'purple';
    boton.style.color = 'white';

  }

}

function generarPar(){

  var x = 0;

  do{

   x = Math.floor(Math.random() * 1000);

  }while(x % 2 != 0);

  return x;

}

function generarImpar(){

  var x = 0;

  do{

   x = Math.floor(Math.random() * 1000);

  }while(x % 2 == 0);

  return x;

}

function digitos(x){

  var dig = 0;

  do{

    dig++;
    x/=10;

  }while(x>=1);

  return dig;

}