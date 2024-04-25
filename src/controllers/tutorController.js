import { tutor } from '../models/Tutor.js';

// listarTutores -> Ação - verbo no infinitivo
// listaTutor -> Guarda valores - Substantivo
// "find com colchetes vazias {} é ALL"

class TutorController {
  static async listarTutores(req, res) {
    const listaTutores = await tutor.find({});
    res.status(200).json(listaTutores);
  }

  static async listarTutorPorId(req, res) {
    try {
      const id = req.params.id;
      const tutorEncontrado = await tutor.findById(id);
      res.status(200).json(tutorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - tutor NÃO encontrado!`,
      });
    }
  }

  static async cadastrarTutor(req, res) {
    try {
      const novotutor = await tutor.create(req.body);

      res.status(201).json({
        message: 'tutor inserido com sucesso! - EXPRESS CONTROLLER',
        tutor: novotutor,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar tutor`,
      });
    }
  }

  static async atualizarTutor(req, res) {
    try {
      const id = req.params.id;
      await tutor.findByIdAndUpdate(id, req.body);

      res.status(200).json({
        message: 'tutor atualizado com sucesso!',
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao atualizar tutor`,
      });
    }
  }

  static async deletarTutor(req, res) {
    try {
      const id = req.params.id;
      await tutor.findByIdAndDelete(id);

      res.status(200).json({
        message: 'tutor deletado com sucesso!',
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao deletar tutor`,
      });
    }
  }
}

export default TutorController;
