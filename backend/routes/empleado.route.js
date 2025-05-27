const express = require('express'); // importo express, que es el framework que se usara para crear la API REST
const router = express.Router();// creo una nueva instancia de express.Router(), que es el que se usara para crear las rutas de la API REST
const empleadoCtrl = require('../controllers/empleado.controller'); // importo el controlador de empleado
// el controlador es el que se encargara de manejar las peticiones que se hagan a la API REST

router.get('/', empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)
router.post('/', empleadoCtrl.createEmpleados);//guardar
router.get('/:id', empleadoCtrl.getUnicoEmpleado);// obtiene un único empleado
router.put('/:id',empleadoCtrl.editarEmpleado); //Actualizar datos (uno a la vez)
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;