import { pool } from "../db.js";

export const getIndexhtml = async (req, res) => {
    res.sendFile(process.cwd() + "/client/src/public/index.html");
};

export const getCss = async (req, res) => {
    res.sendFile(process.cwd() + "/client/src/public/styles/style.css");
};

export const getData = async (req, res) => {
    try {
        const [allData] = await pool.query(
            "SELECT * FROM propietario"
            );
        res.json(allData);
    } catch (err) {
        console.status(500).error(err.message);
        res.status(500).send("Server error!: " + err.message);
    };
};

export const postInsertData = async (req, res) => {
    try{
        const { nombre, apellidos, colonia, calle, num, cod_postal } = req.body;
        const [result] = await pool.query(
            "INSERT INTO propietario(nombre, apellidos, colonia, calle, num, cod_postal) VALUES (?, ?, ?, ?, ?, ?)",
            [nombre, apellidos, colonia, calle, num, cod_postal]
        );
        console.log(result);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!: " + err.message);
    };
};

export const deleteData = async (req, res) => {
    try {
        const [result] = await pool.query(
            "DELETE FROM propietario WHERE id_propietario = ?", [
            req.params.id,
        ]);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error!: " + err.message);
    };
};