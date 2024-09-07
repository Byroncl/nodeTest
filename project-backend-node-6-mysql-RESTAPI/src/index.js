//importaciones de modulos
import express from 'express';
import router from './routes/crud.routes.js';
//creacion de la aplicacion
const app = express();

//configuracion de la aplicacion
app.set('port', process.env.PORT || 3000);

//rutas
app.use(router)

//iniciar el servidor
app.listen(app.get('port'))
console.log(`Servidor en el puerto http://localhost:${app.get('port')}`);