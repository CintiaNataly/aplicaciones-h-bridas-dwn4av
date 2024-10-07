import mongoose, { Schema } from "mongoose";


const usersSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: { type: Number, required: true },
    email: {type: String, required: true},
    dirección: [{type:String}]
});

export default mongoose.model('users', usersSchema)