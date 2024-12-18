const UsuarioModel = require ('../Models/UsuarioModel');

class UsuarioController {

    

    async create(req, res){
        
        try{
            console.log("oi");
            const usuario = await UsuarioModel.create(req.body);
            console.log(usuario);
            const{senha, ...novoUsuario} = usuario.toObject()
            res.status(200).json(usuario);
        } catch (error){
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }

    } 

    async read(req, res){
        try {
            const usuarios = await UsuarioModel.find();
            return res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);

            if (!usuarioEncontrado)
                return res.status(404).json({message:"Usuário não encontrado"});

            const usuario = await usuarioEncontrado.set(req.body).save();
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }
        
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findByIdAndDelete(id);

            if (!usuarioEncontrado)
                return res.status(404).json({message:"Usuário não encontrado"});

            await usuarioEncontrado.deleteOne();
            res.status(200).json({"mensagem:": "Usuario deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }
    }

}

module.exports = new UsuarioController();