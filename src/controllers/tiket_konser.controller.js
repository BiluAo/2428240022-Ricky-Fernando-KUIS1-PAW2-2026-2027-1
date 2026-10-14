import TiketKonserModel from "../model/tiket_konser.model.js"
import { storeTiketKonserSchema, updateTiketKonserSchema } from "../schemas/tiket_konser.schema.js"
import { apiResponse, apiResponseValidation } from "../utils/response.js"

class TiketKonserController {


    static async index(req, res) {
        try {
            const listTiket = await TiketKonserModel.find()

            return apiResponse({
                res,
                status: 200,
                message: 'List Tiket Konser',
                data: listTiket
            })
        } catch (error) {
            return apiResponse({
                res,
                status: 500,
                message: error.message
            })
        }
    }


    static async show(req, res) {
        try {
            const { id } = req.params
            const tiket = await TiketKonserModel.findById(id)

            if (!tiket) {
                return apiResponse({
                    res,
                    status: 404,
                    message: "Tiket Konser tidak ditemukan"
                })
            }

            return apiResponse({
                res,
                status: 200,
                message: 'Detail Tiket Konser',
                data: tiket
            })
        } catch (error) {
            return apiResponse({
                res,
                status: 500,
                message: error.message
            })
        }
    }


    static async store(req, res) {
        const result = storeTiketKonserSchema.safeParse(req.body)
        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        try {
            const { nama_konser, harga_tiket, kuota_tiket } = result.data

            const newTiket = await TiketKonserModel.create({
                nama_konser,
                harga_tiket,
                kuota_tiket
            })

            return apiResponse({
                res,
                status: 201,
                message: "Tiket Konser berhasil di buat",
                data: newTiket
            })
        } catch (error) {
            return apiResponse({
                res,
                status: 500,
                message: error.message
            })
        }
    }


    static async update(req, res) {
        const result = updateTiketKonserSchema.safeParse(req.body)

        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        try {
            const { id } = req.params

            const updatedTiket = await TiketKonserModel.findByIdAndUpdate(
                id,
                result.data,
                { new: true, runValidators: true }
            )

            if (!updatedTiket) {
                return apiResponse({
                    res,
                    status: 404,
                    message: "Tiket Konser tidak ditemukan"
                })
            }

            return apiResponse({
                res,
                status: 200,
                message: "Tiket Konser berhasil di update",
                data: updatedTiket
            })
        } catch (error) {
            return apiResponse({
                res,
                status: 500,
                message: error.message
            })
        }
    }

    static async destroy(req, res) {
        try {
            const { id } = req.params

            const deletedTiket = await TiketKonserModel.findByIdAndDelete(id)

            if (!deletedTiket) {
                return apiResponse({
                    res,
                    status: 404,
                    message: "Tiket Konser tidak ditemukan"
                })
            }

            return apiResponse({
                res,
                status: 200,
                message: "Tiket Konser berhasil dihapus"
            })
        } catch (error) {
            return apiResponse({
                res,
                status: 500,
                message: error.message
            })
        }
    }
}

export default TiketKonserController