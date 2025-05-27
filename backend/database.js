const mongoose = require("mongoose"); // se importa mongoose, que es el ORM que se usara para conectarse a la base de datos
const URI = "mongodb://localhost/empleados"; // se le asigna la URI de la base de datos, en este caso localhost/empleados

mongoose.connect(URI, { // se le asigna la URI de la base de datos, en este caso localhost/empleados
    useNewUrlParser: true, // se le asigna el formato de la URI, en este caso newUrlParser
    useUnifiedTopology: true,// se le asigna el formato de la URI, en este caso unifiedTopology
})
.then(() => console.log("DB esta conectado"))
.catch((err) => console.error(err));

module.exports = mongoose;
