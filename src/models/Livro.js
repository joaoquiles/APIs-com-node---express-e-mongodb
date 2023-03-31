import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String,
      required: [true, "Titulo obrigatório"]},
    autor: {type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "Id do autor obrigatório"]},
    editora: {type: String, 
      required: [true, "Editora obrigatória"]},
    numeroDePaginas: {type: Number}
  }
);

const livros = mongoose.model("livros", livroSchema);
export default livros;