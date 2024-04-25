import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cidade: { type: String },
  },
  { versionKey: false },
);

const tutor = mongoose.model('tutores', tutorSchema);

export { tutor, tutorSchema };
