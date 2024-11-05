/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 04/11/2024
*/

class Personaje{
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre=nombre;
    this.vida=vida;
    this.ataque=ataque;
    this.defensa=defensa;
    this.velocidad=velocidad;
  }
  //Metodos.
  atacar(){
    return `${this.nombre} está atacando`;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }

}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
      super(nombre, vida, ataque, defensa, velocidad);//propiedades de la clase Personaje.
      this.hechizos = hechizos;//Propiedad propia de la clase mago.
  }
  //Metodo.
  lanzarHechizo() {
      const randomHechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
      console.log(`${this.nombre} lanza hechizo ${randomHechizo.nombre} con daño ${randomHechizo.daño}.`);
      return randomHechizo.daño;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas) {
      super(nombre, vida, ataque, defensa, velocidad);//propiedades de la clase Personaje.
      this.armas = armas;//Propiedad propia de la clase guerrero.
  }
  //Metodo.
  atacarConArma() {
      const randomArma = this.armas[Math.floor(Math.random() * this.armas.length)];
      console.log(`${this.nombre} ataca con ${randomArma.nombre} con daño ${randomArma.daño}.`);
      return randomArma.daño;
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
      super(nombre, vida, ataque, defensa, velocidad);//propiedades de la clase Personaje.
      this.flechas = flechas;//Propiedad propia de la clase arquero.
  }
  //Metodo.
  dispararFlecha() {
      console.log(`${this.nombre} dispara una flecha.`);
      return this.ataque;
  }
}

// Crear 5 personajes
const mago1 = new Mago('Mago1', 100, 70, 50, 3, [{ nombre: 'Fuego', daño: 50 }, { nombre: 'Rayo', daño: 40 }]);
const mago2 = new Mago('Mago2', 120, 60, 60, 2, [{ nombre: 'Hielo', daño: 45 }, { nombre: 'Explosión', daño: 55 }]);
const guerrero1 = new Guerrero('Guerrero1', 150, 80, 40, 5, [{ nombre: 'Espada', daño: 30 }, { nombre: 'Hacha', daño: 35 }]);
const guerrero2 = new Guerrero('Guerrero2', 130, 90, 45, 4, [{ nombre: 'Martillo', daño: 35 }, { nombre: 'Lanza', daño: 40 }]);
const arquero1 = new Arquero('Arquero1', 110, 75, 55, 6, [{ nombre: 'Flecha de Fuego', daño: 35 }, { nombre: 'Flecha de Hielo', daño: 30 }]);

const personajes = [mago1, mago2, guerrero1, guerrero2, arquero1];

console.log(arquero1.atacar());

//Loop
while (personajes.length > 1) {
  const atacante = personajes[Math.floor(Math.random() * personajes.length)];
  const defensor = personajes[Math.floor(Math.random() * personajes.length)];

  if (atacante.vida > 0 && defensor.vida > 0) {
      const esAtaqueHechizo = atacante instanceof Mago;
      const esAtaqueArma = atacante instanceof Guerrero;

      if (esAtaqueHechizo) {
          const danio = atacante.lanzarHechizo();
          const danoRecibido = Math.max(0, Math.round((atacante.ataque - defensor.defensa) * (Math.random() + 0.5)));
          defensor.vida -= danoRecibido;
          console.log(`Daño recibido por ${defensor.nombre}: ${danoRecibido}`);
      } else if (esAtaqueArma) {
          const danio = atacante.atacarConArma();
          const danoRecibido = Math.max(0, Math.round((atacante.ataque - defensor.defensa) * (Math.random() + 0.5)));
          defensor.vida -= danoRecibido;
          console.log(`Daño recibido por ${defensor.nombre}: ${danoRecibido}`);
      } else {
          const danio = atacante.dispararFlecha();
          const danoRecibido = Math.max(0, Math.round((atacante.ataque - defensor.defensa) * (Math.random() + 0.5)));
          defensor.vida -= danoRecibido;
          console.log(`Daño recibido por ${defensor.nombre}: ${danoRecibido}`);
      }

      if (defensor.vida <= 0) {
          console.log(`${defensor.nombre} ha muerto.`);
          personajes.splice(personajes.indexOf(defensor), 1);
      }
  }
}
console.log(`El personaje ganador es ${personajes[0].nombre}.`);
