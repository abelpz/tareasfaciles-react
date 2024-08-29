export default function Tarea({ children, indice, completada }) {
  return (
    <li id={`tarea-${indice}`} className={`tarea ${completada ? "completada" : ""}`} data-tarea-id={indice}>
      <span className="descripcion">{children}</span>
      <div className="acciones">
        <button className="completar" data-tarea-id={indice}>check</button>
        <button className="borrar" data-tarea-id={indice}>delete</button>
      </div>
    </li>
  )
}