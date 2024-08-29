import Tarea from "./Tarea"

const tareas = [
  { descripcion: 'Hacer ejercicio', completada: false },
  { descripcion: 'Hacer las compras', completada: false },
  { descripcion: 'Programar', completada: false }
]

export default function App() {
  return (
    <main>
    <section id="tareas">
      <h1>Mis tareas</h1>
      <div id="formulario-tareas">
        <input type="text" id="texto-tarea" placeholder="Escribe una tarea"/> 
        <button id="boton-agregar-tarea">
          Agregar
        </button>
      </div>
        <ul id="lista-tareas">
          {
            tareas.map((tarea, index) => {
              return <Tarea key={index} indice={index} completada={tarea.completada}>{tarea.descripcion}</Tarea>
            })
          }
        </ul>
    </section>
  </main>
  )
}