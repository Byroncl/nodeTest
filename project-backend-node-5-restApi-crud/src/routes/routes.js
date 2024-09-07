const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.get('/perfil', (req, res) => {
   // const titulo = 'Perfil de usuario'
   const usuario = [
        {
            id: 1,
            nombre: 'Juan', 
            apellido: 'Perez', 
            edad: 25
        },
        {
            id: 2,
            nombre: 'Maria', 
            apellido: 'Gomez', 
            edad: 30
        },
        {
            id: 3,
            nombre: 'Pedro',
            apellido: 'Jimenez', 
            edad: 35
        }
   ]

    res.render('perfil', {usuario})
})

router.get('/dashboard', (req, res) => {
    const titulo = 'Dashboard'
    res.render('dashboard', {titulo})
})

router.all('/', (req, res) => {
    const titulo = 'Inicio con ejs y express owo'

    res.render('index', {titulo})
})

router.get("/post", async (req, res) => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('post', {posts: response.data})
})

module.exports = router