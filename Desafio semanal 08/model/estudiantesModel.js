import Joi from "joi"; 
import mongoose, { Schema } from "mongoose";
import { type } from "os";

const cursosSchema = new mongoose.Schema({
    name: String
})

const estudianteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    cursos: [cursosSchema]
});

export default mongoose.model('estudiantes', estudianteSchema)