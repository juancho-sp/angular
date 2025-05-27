const mongoose = require('mongoose');// se importa mongoose, que es el ORM que se usara para conectarse a la base de datos
const {Schema} = mongoose;// se le asigna a la variable Schema el valor de mongoose.Schema(), que es el que se usara para crear el esquema de la base de datos

const EmpleadoSchema = new Schema({
    name: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema); // se le asigna a la variable Empleado el valor de mongoose.model('Empleado', EmpleadoSchema), que es el que se usara para crear el modelo de la base de datos
// el primer parametro es el nombre del modelo, el segundo es el esquema que se le asignara al modelo
// el modelo es el que se usara para interactuar con la base de datos, en este caso se usara el modelo Empleado