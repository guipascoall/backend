const UsuarioModel = require ('../Models/UsuarioModel');

class AuthController{
    async login (req,res){
        try {
            const {email, senha} = req.body;

            const usuarioEncontrado = await UsuarioModel.findOne({email}).select("+senha");
            if (!usuarioEncontrado)
                res.status(403).json({message: "E-mail ou senha inválidos"});
            console.log({usuarioEncontrado});
            res.sendStatus(200);
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }

    }
}

module.exports = new AuthController();