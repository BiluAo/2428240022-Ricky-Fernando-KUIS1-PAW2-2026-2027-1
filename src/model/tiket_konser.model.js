import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        nama_konser: {
            type: String,
            required: true,
        },
        harga_tiket: {
            type: Number,
            required: true,
        },
        kuota_tiket: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const TiketKonserModel = mongoose.model("tiket_konser", schema);

export default TiketKonserModel;