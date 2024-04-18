import cachorro from '../models/Cachorro.js';

// listarCachorros -> Ação - verbo no infinitivo
// listaCachorro -> Guarda valores - Substantivo
// "find com colchetes vazias {} é ALL"

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
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
}

export default CachorroController;
