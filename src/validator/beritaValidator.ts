import joi from "joi";

export const beritaVald = joi.object({
    judul_berita: joi.string().required(),
    author_berita: joi.string().required(),
    tanggal: joi.date().required(),
    detail_berita: joi.string().required(),
    iamage_berita: joi.string().required(),
})