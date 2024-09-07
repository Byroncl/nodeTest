const {Router} = require('express')
const router = Router()
const productos = require('../data/productos.js');


//rutas
router.get('/productos', (req, res) => {
    res.json(productos)
})

router.post('/productos', (req, res) => {

    const newProducto = {...req.body, id: productos.length + 1}

    productos.push(newProducto)

    res.send(newProducto)
})

router.put('/productos/:id', (req, res) => {
    const newProducto = req.body
    // funcion find de javascript para encontrar un producto por id en el arreglo de productos 
    const encontrarProducto = productos.find(producto =>  producto.id === parseInt(req.params.id))

    if(!encontrarProducto) 
        return res.status(404).json({ 
            mensaje: 'producto no encontrado'
    })

   productos = productos.map(producto => producto.id === parseInt(req.params.id) ? {...producto, ...newProducto} : producto)

    res.json({
        mensaje: 'producto actualizado',
        producto: newProducto
    })
})

router.delete('/productos/:id', (req, res) => {
    // funcion find de javascript para encontrar un producto por id en el arreglo de productos 
    const encontrarProducto = productos.find(producto =>  producto.id === parseInt(req.params.id))

    if(!encontrarProducto) 
        return res.status(404).json({ 
            mensaje: 'producto no encontrado'
    }) 

    productos  = productos.filter(producto => producto.id !== parseInt(req.params.id))
    res.status(500).json({mensaje: 'producto eliminado'})

})

router.get('/productos/:id', (req, res) => {
    // funcion find de javascript para encontrar un producto por id en el arreglo de productos 
    const encontrarProducto = productos.find(producto =>  producto.id === parseInt(req.params.id))

    if(!encontrarProducto) 
        return res.status(404).json({ 
            mensaje: 'producto no encontrado'
    })
    //mostrar en consola el producto
    console.log(encontrarProducto)
    //mostrar en el navegador el producto
    res.json(encontrarProducto)
})

module.exports = router