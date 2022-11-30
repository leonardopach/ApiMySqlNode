import { db } from "../bd.js";

export const getT = (_, res) => {
    const sql = "SELECT * FROM cadastro";

    db.query(sql, (err, data) => {
        if (err) return console.log(err);

        return res.status(200).json(data);
    });
};