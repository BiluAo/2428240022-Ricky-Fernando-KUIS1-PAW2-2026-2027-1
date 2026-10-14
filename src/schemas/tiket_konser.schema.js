// tiketKonser.schema.js
import z from "zod";

export const storeTiketKonserSchema = z.object({
    nama_konser: z.string().trim().min(5, "Nama Konser Minimal 5 Karakter"),
    harga_tiket: z.number().min(0, "Harga Tiket Tidak Boleh 0"),
    kuota_tiket: z.number().min(1, "Kuota Tiket Minimal 1")
});

export const updateTiketKonserSchema = z.object({
    nama_konser: z.string().trim().min(5, "Nama Konser Minimal 5 Karakter"),
    harga_tiket: z.number().min(0, "Harga Tiket Tidak Boleh 0"),
    kuota_tiket: z.number().min(1, "Kuota Tiket Minimal 1"),
});