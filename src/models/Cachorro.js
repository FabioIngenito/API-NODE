import mongoose from 'mongoose';
import { tutorSchema } from './Tutor.js';

const cachorroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    raca: { type: String },
    idade: { type: mongoose.Schema.Types.Number },
    vacinado: { type: Boolean },
    tutor: tutorSchema,
  },
  { versionKey: false },
);

const cachorro = mongoose.model('cachorros', cachorroSchema);

export default cachorro;
