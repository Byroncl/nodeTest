//dependencias
const express = require('express');
const morgan = require('morgan'); 
const path = require('path');
require('ejs')

//rutas
const routes = require('./routes/routes')
const crud = require('./routes/crud')
const { connectDb } = require('./db')

//configuracion
connectDb()
const app = express();
app.set('case sensitive routing', true)
app.set('port', 3000)
//ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//console.log(__dirname)
app.use("/public", express.static(path.join(__dirname, 'public')))


//middlewares
app.use(morgan('dev'))
app.use(express.json())


//ejecución de rutas
app.use(crud)
app.use(routes)


//servidor
app.listen(app.get('port'))
console.log(`servidor corriendo en http://localhost:${app.get('port')}`)