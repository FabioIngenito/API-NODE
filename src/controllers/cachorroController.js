import cachorro from '../models/Cachorro.js';

// listarCachorros -> Ação - verbo no infinitivo
// listaCachorro -> Guarda valores - Substantivo
// "find com colchetes vazias {} é ALL"

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    res.status(200).json(listaCachorros);
  }
}

export default CachorroController;
