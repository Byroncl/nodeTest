import { pool } from '../db/conexionDB.js';
import { Router } from 'express';
const router = Router();

// mostrar todos los productos
router.get('/producto', (req, res) => {
    pool.query('SELECT * FROM products', (err, rows) => {
        if (err) {
        console.log(err);
        } else {
        res.json(rows);
        }
    });
});

// mostrar un producto por su slug
router.get('/producto/:slug', (req, res) => {
    const { slug } = req.params;
    pool.query('SELECT * FROM products WHERE slug = ?', [slug], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;