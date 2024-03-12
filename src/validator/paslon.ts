import Joi from "joi";

export const paslonVald = Joi.object({
    nama_paslon: Joi.string().required(),
    image_paslon: Joi.string().required(),
    koalisi: Joi.string().required(),
    visi_misi: Joi.string().required(),
    nomor_urut_paslon: Joi.number().required(),
})
