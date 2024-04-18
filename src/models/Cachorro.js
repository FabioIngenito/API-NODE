import mongoose, { version } from 'mongoose';

const cachorroSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },
    id: { type: mongoose.Schema.Types.String },
    nome: { type: mongoose.Schema.Types.String, required: true },
    raca: { type: String },
    idade: { type: mongoose.Schema.Types.Number },
    vacinado: { type: Boolean },
  },
  { versionKey: false },
);

const cachorro = mongoose.model('cachorros');

export default cachorro;
