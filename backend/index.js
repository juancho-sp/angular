const express = require('express');
const morgan = require('morgan'); // para ver las peticiones que se hacen al servidor
// morgan es un middleware que se encarga de registrar las peticiones que se hacen al servidor
const cors = require('cors'); // para permitir el acceso a la API desde otros dominios
// cors es un middleware que se encarga de permitir el acceso a la API desde otros dominios
const app = express(); // esta constante tendra todo el funcionamiento de express
const mongoose = require('./database.js'); // solo se requiere la conexion a la base de datos

/*Se crea una REST API, es la manera de decirle al servidor que reciba y envíe datos */ 

// configuracion
app.set('port', process.env.PORT || 3000); // se le asigna un puerto a la aplicacion, si no existe el puerto 3000 se usara el 3000
app.use(morgan('dev')); // se le asigna un formato a la aplicacion, en este caso dev
app.use(express.json()); // se le asigna un formato a la aplicacion, en este caso json
app.use(cors({origin: 'http://localhost:4200'})); // se le asigna un formato a la aplicacion, en este caso cors, se le asigna el origen de la aplicacion, en este caso localhost:4200

//rutas del servidor
app.use('/api/empleados', require('./routes/empleado.route.js')); // se le asigna una ruta a la aplicacion, en este caso /api/empleados, y se le asigna el archivo de rutas

//iniciando el servidor
app.listen(app.get('port'), () => { // se le asigna un puerto a la aplicacion, en este caso el puerto que se le asigno anteriormente
    console.log(`Servidor activo en el puerto ${app.get('port')}`);
});