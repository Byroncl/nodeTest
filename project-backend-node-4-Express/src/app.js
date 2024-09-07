const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'))

// app.get('/', (req, res) => res.sendFile( 'static/index.html', { root: __dirname }))

// app.use((req, res) => res.status(404).send('404 No se encontró la página'))

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//ver el flujo de la aplicacion
// app.use((req, res, next)=>{
//     console.log(`Ruta: ${req.url}, Metodo: ${req.method}`)
//     next()
// })


//inicio de la aplicacion
app.get('/productos', (req, res) => {
    res.send('lista de productos')
})




app.post('/productos', (req, res) => {
    console.log(req.body)
    res.send('creando producto')
})

app.put('/productos', (req, res) => {
    res.send('actualizando producto')
})

app.delete('/productos', (req, res) => {
    res.send('borrando producto')
})

app.get('/productos/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`producto con id ${req.params.id}`)
})

app.get('/suma/:a/:b', (req, res) => {

    const resultado = parseInt(req.params.a) + parseInt(req.params.b)

    console.log(req.params.a)
    console.log(req.params.b)
    console.log(resultado)

    res.send(`La suma de ${req.params.a} y ${req.params.b} es ${resultado}`)
})


app.get('/buscar', (req, res) => {
    if(req.query.q === 'laptop'){
        res.send('Buscando laptop')
    }else{
        res.send('no existe ese producto')
    }
})




app.get('/perfil', (req, res) => {
    res.send('perfil de usuario')
})

//autenticacion
// app.use((req, res, next)=>{
//     console.log('Autenticando...')

//     if(req.query.admin === 'true'){
//         next()
//     }else{
//         res.send('No tienes permisos')
//     }
// })
// app.use((req, res, next)=>{
//     console.log('Autorizando...')
//     if(req.query.admin === 'true'){
//         console.log('Eres admin')
//         next()
//     }else{
//         console.log('no autorizado')
//     }
    
// })


app.get('/dashboard', (req, res) => {
    res.send('dashboard de usuario')
})


app.listen(port)
console.log(`Servidor corriendo en http://localhost:${port}`)