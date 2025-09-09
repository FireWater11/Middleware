export function verificarCargo(req, res, next) {
    const { tipoUsuario } = req.body;

    if (tipoUsuario === "ADM") {
        return next();
    } else {
        return res.status(401).json({ mensagem: "Funcao nao permitida para esse usuario" });
    }
}
