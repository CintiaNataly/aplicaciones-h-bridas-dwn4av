import mongoose from "mongoose";
import { type } from "os";

const cursosSchema = new mongoose.Schema({
    nombre: {type: String, required: true}
});

export default mongoose.model('cursos', cursosSchema)