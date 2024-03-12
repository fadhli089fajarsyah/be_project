import Joi from "joi";

export const userVald = Joi.object({
    nama_user: Joi.string().required(),
    alamat_user: Joi.string().required(),
    jenis_kelamin_user: Joi.string().required(),
    username_user: Joi.string().required(),
    password_user: Joi.string().required(),
    image_user: Joi.string().required(),
})
