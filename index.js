import express from "express";
import { verificarCargo } from "./auth.js";

const api = express();





api.use(express.json());

api.use((req, res, next) => {
    console.log("Chamando API!");
    next();
});

api.get("/usuarios", (req, res) => {
    const usuarios = [
        { id: 1, nome: "teste123" },
        { id: 2, nome: "MJonas" },
        { id: 3, nome: "Piolakkj" }
    ];
    res.json(usuarios);
});

api.post("/usuarios", verificarCargo, (req, res) => {
    res.status(201).json({ mensagem: "Rota permitida" });
});

api.listen(3000, () => {
    console.log(`servidor rodando na porta 3000`);
});

