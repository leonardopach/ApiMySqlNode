import { db } from "../bd.js";

export const getT = (_, res) => {
    const sql = "SELECT * FROM cadastro";

    db.query(sql, (err, data) => {
        if (err) return console.log(err);

        return res.status(200).json(data);
    });
};

export const addInfo = (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const apelido = req.body.apelido;

    const sql = `INSERT INTO cadastro(nome, idade, apelido) VALUES ('${nome}', '${idade}', '${apelido}')`;

    db.query(sql, (err) => {
        if (err) return res.json(err);

        return res.status(200).json('Enviado com sucesso');
    });
};

export const updateInfo = (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    const apelido = req.body.apelido;

    const sql = `UPDATE cadastro SET nome ='${nome}' , idade ='${idade}' , apelido = '${apelido}' WHERE id = ${id}`;

    db.query(sql, (err) => {
        if (err) return res.json(err);

        return res.status(200).json('Atualizado com sucesso');
    });
};

export const deteleInfo = (_, res) => {
    const id = _.params.id;

    const sql = `DELETE FROM cadastro WHERE id = '${id}'`;

    db.query(sql, (err) => {
        if (err) return console.log(err);

        return res.status(200).json('Foi deletado com Sucesso');
    });
};
