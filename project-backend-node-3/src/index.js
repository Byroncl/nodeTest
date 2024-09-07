import express from 'express';

const app = express();
const port = 3000;


// app.listen(port, () => {
//   console.log(`puerto corriendo en: http://localhost:${port}`);
// });
app.get('/', (req, res) => {
    res.send('inicio');
});
app.get('/about', (req, res) => {
    res.send('about');
});

app.listen(port);

console.log(`puerto corriendo en: http://localhost:${port}`);