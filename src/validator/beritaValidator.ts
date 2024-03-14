import joi from "joi";

export const beritaVald = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    date: joi.date().required(),
    detail: joi.string().required(),
    image: joi.string().required(),
})