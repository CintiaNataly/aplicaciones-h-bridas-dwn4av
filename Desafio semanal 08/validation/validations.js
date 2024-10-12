import Joi from "joi";

export const cursosValidacion = (data) => {
    const schema = Joi.object({
        titulo: Joi.string().min(3).max(30).required(),
        descripcion: Joi.string().min(10).max(250).required(),
        tags: Joi.array().items(Joi.string().min(3)).required()
    })
    return schema.validate(data);
}


export const estudiantesValidacion = (data) => {
    const schema = Joi.object({
        nombre: Joi.string().min(3).max(30).required(),
        apellido: Joi.string().min(3).max(30).required(),

    })
    return schema.validate(data);
}