import express from 'express';
import CachorroController from '../controllers/cachorroController.js';

const routes = express.Router();

routes.get('/cachorros', CachorroController.listarCachorros);
routes.get('/cachorros/busca', CachorroController.listarCachorroPorRaca);
routes.get('/cachorros/buscaIdade', CachorroController.listarCachorroPorIdade);
routes.get('/cachorros/:id', CachorroController.listarCachorroPorId);
routes.post('/cachorros', CachorroController.cadastrarCachorro);
routes.put('/cachorros/:id', CachorroController.atualizarCachorro);
routes.delete('/cachorros/:id', CachorroController.deletarCachorro);

export default routes;
