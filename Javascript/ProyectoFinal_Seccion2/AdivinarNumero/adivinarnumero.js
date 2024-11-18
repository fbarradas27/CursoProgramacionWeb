class JuegoDeNumero{
  constructor(numero){
    this.numero=numero;
  }

  adivinarnumero(numero){
    let num_random=Math.floor(Math.random()*100)+1;//Numero aleatorio entre 1 y 100.
    let intentos=0;
    let maximodeintentos=6;
    //let numerousuario = prompt('introduzca un numero entre 1 y 100');
    let numerousuario = parseInt(prompt(`Indicar un número entre 1 y 100 (Intento ${intentos + 1}): `), 10);

    while (intentos < maximodeintentos){
      console.log(`Intento ${intentos + 1}: El número del usuario es ¨${numerousuario}¨`);
      
      if (numerousuario === num_random){
          console.log('Felicidades, el numero del usuario ' + numerousuario + ' es igual al numero de la computadora ' + num_random);
          break;
      }
      else if (numerousuario > num_random){
      alert('Lo siento, el numero del usuario ' + numerousuario + ' es mayor al numero de la computadora ' + num_random);
      console.log(`Lo siento, el número del usuario ¨${numerousuario}¨ es mayor al número de la computadora ¨${num_random}¨`);
      //break;
      }
      else if (numerousuario < num_random){
      alert('Lo siento, el numero del usuario ' + numerousuario + ' es menor al numero de la computadora ' + num_random);
      console.log(`Lo siento, el número del usuario ¨${numerousuario}¨ es menor al número de la computadora ¨${num_random}¨`);
      //break;
      }
      intentos ++; 
      if (intentos < maximodeintentos){
        //alert('Intenta nuevamente.');
        parseInt(alert(`Intento ${intentos + 1}): `), 10);

        console.log('Intenta nuevamente.');
      } else {
        alert('Llegaste al número máximo de ' + maximodeintentos + ' intentos');
        console.log(`Llegaste al número máximo de ${maximodeintentos} intentos.¨`);
      }
     }
    }
  } 
  
  let numero1= new JuegoDeNumero(100);
  numero1.adivinarnumero();


