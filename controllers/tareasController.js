const Tarea = require("../models/tareasModel");
const mongoose = require('mongoose');

// Obtener todas las tareas
const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al obtener las tareas" });
    }
};


// Crear una nueva tarea
const crearTarea = async (req, res) => {
    try {
        const { descripcion, estado } = req.body;
        const nuevaTarea = new Tarea({ descripcion, estado });
        await nuevaTarea.save();
        res.json({ mensaje: "Tarea creada", tarea: nuevaTarea });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al crear la tarea" });
    }
};


// Actualizar una tarea existente
const actualizarTarea = async (req, res) => {
    try {
        let { id } = req.params;
        let { descripcion, estado } = req.body;

        if (!descripcion || !estado) {
            return res.json({ mensaje: "Los campos de descripción y estado son obligatorios" });
        }

        let tareaActualizada = await Tarea.findByIdAndUpdate(
            id,
            { descripcion, estado },
            { new: true }
        );

        if (!tareaActualizada) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }

        return res.json({ mensaje: "Tarea actualizada", tarea: tareaActualizada });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al actualizar la tarea" });
    }
};



// Eliminar una tarea
const eliminarTarea = async (req, res) => {
    try {
        let { id } = req.params;
        let tareaEliminada = await Tarea.findByIdAndDelete(id);

        if (!tareaEliminada) {
            return res.status(404).json({ mensaje: "Tarea no encontrada" });
        }

        return res.json({ mensaje: "Tarea eliminada", tarea: tareaEliminada });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al eliminar la tarea" });
    }
};

module.exports = { obtenerTareas, crearTarea, actualizarTarea, eliminarTarea };