import cachorro from '../models/Cachorro.js';

// listarCachorros -> Ação - verbo no infinitivo
// listaCachorro -> Guarda valores - Substantivo
// "find com colchetes vazias {} é ALL"

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
  }

  static async listarCachorroPorId(req, res) {
    try {
      const id = req.params.id;
      const cachorroEncontrado = await cachorro.findById(id);
      res.status(200).json(cachorroEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Cachorro NÃO encontrado!`,
      });
    }
  }

  static async cadastrarCachorro(req, res) {
    try {
      const novoCachorro = await cachorro.create(req.body);

      res.status(201).json({
        message: 'Cachorro inserido com sucesso! - EXPRESS CONTROLLER',
        cachorro: novoCachorro,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar cachorro`,
      });
    }
  }

  static async atualizarCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndUpdate(id, req.body);

      res.status(200).json({
        message: 'Cachorro atualizado com sucesso!',
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao atualizar cachorro`,
      });
    }
  }

  static async deletarCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndDelete(id);

      // await cachorro.deleteOne({ id: id }).then((result) => {
      //   console.log(result);
      // });

      res.status(200).json({
        message: 'Cachorro deletado com sucesso!',
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao deletar cachorro`,
      });
    }
  }
}

export default CachorroController;
