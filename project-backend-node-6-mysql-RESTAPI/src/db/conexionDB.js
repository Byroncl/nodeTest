import { createPool } from 'mysql2'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'tienda',
  port: 3306
})

