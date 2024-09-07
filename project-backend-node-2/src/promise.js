const { readFile } = require('fs/promises')
// const { promisify } = require('util')

// const readFilePromise = promisify(readFile)

async function read2() {
    try {
        const result = await readFilePromise('./data/archivo1.txt', 'utf-8');
        console.log(result);
    } catch (error) {
        console.log( error);
    }
}

async function read() {
    try {
        const result = await readFile('./data/archivo1.txt', 'utf-8');
        console.log(result);
    } catch (error) {
        console.log( error);
    }
}
read();