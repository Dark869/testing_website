import {createPool} from 'mysql2/promise';
import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} from './config.js';

export const pool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nevulosa12.",
    database: "alquileres_xalapa"
});