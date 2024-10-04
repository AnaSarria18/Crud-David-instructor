
import React, { useState } from 'react';

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) return; 
    onAgregar({ id: Date.now(), texto, completada: false });
    setTexto(''); // Limpiar el campo de texto después de agregar la tarea
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Añadir nueva tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)} // Manejo del evento onChange
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}

export default FormularioTarea;
