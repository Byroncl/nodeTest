const mysql2 = require('mysql2/promise')

const connectDb = async () => {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'tienda'
    })

    const [rows] = await connection.query('SELECT * FROM producto')

    console.log(rows)
}

module.exports = {
    connectDb
}
