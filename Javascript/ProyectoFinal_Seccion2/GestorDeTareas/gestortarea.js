class Tarea{
  constructor(nombre, descripcion, fecha, completada = false){
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.fecha=fecha;
    this.completada=completada;
  }
}

class ListarTareas{
  constructor(tareas = []){
    this.tareas=tareas;
  }
   
  completartarea(tarea){
    let tareas_completadas = this.tareas.filter(
      (tarea) => tarea.completada === true
    );
    if (tarea){
      tarea.completada = true;
      console.log(`La tarea "${tarea.nombre}" ha sido marcada como completada.`);
      } else {
        console.log(`La tarea "${nombre}" no fue encontrada.`);
        }
      }
   
  agregarTarea(tarea){
    this.tareas.push(tarea);
    console.log(`La tarea "${tarea.nombre}" ha sido agregada.`);
    }

  eliminartarea(tarea){
    let posicion = this.tareas.indexOf(tarea);
    if (posicion > -1) {
      this.tareas.splice(posicion, 1);
      console.log(`La tarea "${tarea.nombre}" ha sido eliminada.`);
    } else {
      console.log(`La tarea "${tarea.nombre}" no fue encontrada.`);
    }
  }

  vertareas(){
    for (let tarea of this.tareas) {
      console.log (
      `
        Tarea:
        Nombre: ${tarea.nombre}
        Descripcion: ${tarea.descripcion}
        Fecha: ${tarea.fecha}
        Completada: ${tarea.completada ? "Completada" : "SinCompletar"}
      `);
      }
    }
  }

  

let tarea1 = new Tarea("Aprendiendo a Sumar", "Resolver ejercicios", "12/11/24", true);
let tarea2 = new Tarea("Caligrafia", "Practicar la letra Palmer", "12/11/24", true);
let tarea3 = new Tarea("Dibujo", "Tecnicas de dibujo", "12/11/24", false);


let tareas = [tarea1, tarea2];

let actividades = new ListarTareas(tareas)

actividades.vertareas()
actividades.agregarTarea(tarea3)
actividades.vertareas()
actividades.completartarea(tarea3)
actividades.vertareas()
actividades.eliminartarea(tarea1)
actividades.vertareas()

