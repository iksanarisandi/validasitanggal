// Validasi jika tanggal adalah 15, 16, atau 17 → stop eksekusi
const today = new Date().getDate();
if (today >= 15 && today <= 17) {
    throw new Error(`Eksekusi dihentikan karena hari ini adalah tanggal ${today}`);
}
