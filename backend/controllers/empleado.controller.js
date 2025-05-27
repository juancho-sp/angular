const Empleado = require('../models/empleado'); // importo el modelo de empleado
const empleadoCtrl = {}; // creo un objeto vacio para almacenar las funciones que se usaran en el controlador
// el controlador es el que se encargara de manejar las peticiones que se hagan a la API REST

//Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => { // la función getEmpleados se encargara de obtener todos los empleados de la base de datos
    // la función getEmpleados es asincrona, por lo que se le asigna la palabra async
    const empleados = await Empleado.find(); // se le asigna a la variable empleados el valor de todos los empleados que se encuentran en la base de datos
    res.json(empleados);
}

// Crear empleados
empleadoCtrl.createEmpleados = async (req, res) => { 
    const empleado = new Empleado(req.body);// se le asigna a la variable empleado el valor de un nuevo empleado que se creara en la base de datos
    await empleado.save();
    res.json({
        'status': 'Empleado guardado'
    });
}

//Conseguir un único empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
}

//Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params; // obtengo el id del empleado que se va a editar
    const emepleadoEdit = { // creo un objeto con los datos que se van a editar
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new: true}); // busco el empleado por su id y lo actualizo con los nuevos datos
    res.json({status: 'Empleado Actualizado'});
}

// Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado Eliminado'});
}

//exporto el módulo
module.exports = empleadoCtrl;