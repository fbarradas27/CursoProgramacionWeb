function piedrapapeltijera() {
  // Definición de variables
  let partidasJugadas = 0;
  let partidasganadasUsuario = 0;
  let partidasganadasComputadora = 0;

  // Computadora selecciona aleatoriamente
  function eleccionComputadora() {
      const opciones = ['piedra', 'papel', 'tijera'];
      const indiceAleatorio = Math.floor(Math.random() * opciones.length);
      return opciones[indiceAleatorio];
  }

  // Muestra el resultado del juego
  function determinarGanador(usuario, computadora) {
      if (usuario === computadora) {
          return 'Empate';
      } else if (
          (usuario === 'piedra' && computadora === 'tijera') ||
          (usuario === 'tijera' && computadora === 'papel') ||
          (usuario === 'papel' && computadora === 'piedra')
      ) {
          partidasganadasUsuario++;
          return '¡Ganaste!';
      } else {
          partidasganadasComputadora++;
          return 'Computadora gana!';
      }
  }

  // Ciclo
  while (true) {
      // Incrementa el Numero de Partidas
      partidasJugadas++;

      // Obtener la elección del usuario
      let usuario = prompt('Elige: piedra, papel o tijera (o escribe "salir" para terminar):').toLowerCase();

      // Opción para salir del juego
      if (usuario === 'salir') {
          break;
      }

      // Validar la entrada del usuario
      if (!['piedra', 'papel', 'tijera'].includes(usuario)) {
          alert('Opción no válida. Intenta nuevamente.');
          partidasJugadas--; // No contar esta partida inválida
          continue;
      }

      // Elección de la computadora
      let computadora = eleccionComputadora();
      alert(`La computadora ha elegido: ${computadora}`);

      // Determinar y mostrar el resultado
      let resultado = determinarGanador(usuario, computadora);
      alert(resultado);
  }

  // Mostrar estadísticas finales
  alert(`Partidas jugadas: ${partidasJugadas}\nVictorias del usuario: ${partidasganadasUsuario}\nVictorias de la computadora: ${partidasganadasComputadora}`);
}

// Iniciar el juego
piedrapapeltijera();