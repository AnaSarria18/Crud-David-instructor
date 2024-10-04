
import React from 'react';

function Tarea({ tarea, onEliminar, onAlternar }) {
  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <span>{tarea.texto}</span>
      <button onClick={() => onAlternar(tarea.id)}>
        {tarea.completada ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
    </div>
  );
}

export default Tarea;
