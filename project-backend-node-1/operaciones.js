import ope from './module/operaciones';

const fs = require('fs');
// console.log(ope.suma(5, 5));
// console.log(ope.resta(5, 5));
// console.log(ope.multiplicacion(5, 5));

const imprimir = console.table({
    suma: ope.suma(5, 5),
    resta: ope.resta(5, 5),
    multiplicacion: ope.multiplicacion(5, 5),
    division: ope.division(5, 5)
})

fs.writeFileSync('operaciones.txt', imprimir);