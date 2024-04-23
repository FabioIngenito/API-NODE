import mongoose from 'mongoose';

const cachorroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    raca: { type: String },
    idade: { type: mongoose.Schema.Types.Number },
    vacinado: { type: Boolean },
  },
  { versionKey: false },
);

const cachorro = mongoose.model('cachorros', cachorroSchema);

export default cachorro;
