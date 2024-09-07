const os = require('os')


console.table({
    homedir: os.homedir(),
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    tmpdir: os.tmpdir()
})

let nombre = 'byron';
let apellido = 'cl';
let edad = 21;

console.table({
    nombre,
    apellido,
    edad
})