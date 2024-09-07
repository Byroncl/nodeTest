const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
const calificaciones = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const mostrar = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
}

module.exports = { 
    usuario,
    calificaciones, 
    mostrar 
};

