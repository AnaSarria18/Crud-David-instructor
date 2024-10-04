let mongoose = require('mongoose');
const { type } = require('os');

const TareaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: false
    },

    descripcion: {
        type: String,
        required: true
    },

    estado: {
        type: Boolean,
        default: false
    }
});


// Crear el modelo a partir del esquema
const Tarea = mongoose.model('Tarea', TareaSchema);
  
module.exports = Tarea;
