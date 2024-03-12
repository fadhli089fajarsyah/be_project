import Joi from "joi";

export const partaiVald =Joi.object({
    nama_partai: Joi.string().required(),
    ketua_umum_partai: Joi.string().required(),
    visi_misi: Joi.string().required(),
    alamat_partai: Joi.string().required(),
    image_partai: Joi.string().required(),
})
