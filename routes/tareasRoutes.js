const express = require('express');
const router = express.Router();
const tareasController= require('../controllers/tareasController');

/* crear las rutas , divisiones , ruta, funcionalidad  */
router.get('/tarea',tareasController.obtenerTareas);

router.post('/tarea',tareasController.crearTarea);

 router.put('/tarea/:id', tareasController.actualizarTarea);

router.delete('/tarea/:id',tareasController.eliminarTarea); 



/* exportamos las rutas */
module.exports = router;