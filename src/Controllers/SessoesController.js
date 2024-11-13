const SessoesModel = require('../Models/SessoesModels')

class SessoesController{

    async create(req, res){
        try {
            const sessoes = await SessoesModel.create(req.body);
            res.status(200).json(sessoes);
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }
    }

    async read(req, res){
        try {
            const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
            res.status(200).json(sessoes);
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }

    }

    async delete(req, res){
        try {
            const { id } = req.params
            const sessaoEncontrada = await SessoesModel.findByIdAndDelete(id);

            if (!sessaoEncontrada)
                return res.status(404).json({message:"Sessão não encontrado"});

            await sessaoEncontrada.deleteOne();
            res.status(200).json({"mensagem:": "Sessão deletada com sucesso!"});
        } catch (error) {
            res.status(500).json({message: "Algo deu errado :(", error: error.message});
        }
    }

}
module.exports = new SessoesController();