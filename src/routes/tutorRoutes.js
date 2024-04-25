import express from 'express';
import TutorController from '../controllers/tutorController.js';

const routes = express.Router();

routes.get('/tutores', TutorController.listarTutores);
routes.get('/tutores/:id', TutorController.listarTutorPorId);
routes.post('/tutores', TutorController.cadastrarTutor);
routes.put('/tutores/:id', TutorController.atualizarTutor);
routes.delete('/tutores/:id', TutorController.deletarTutor);

export default routes;
