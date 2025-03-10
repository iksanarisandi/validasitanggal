const today = new Date();
const tanggal = today.getDate();

if (tanggal >= 9 && tanggal <= 17) {
    console.log("Dihentikan karena masuk tanggal 15-17");
    throw new Error("Workflow dihentikan karena tanggal termasuk 15-17");
} else {
    console.log("Lanjutkan workflow");
}
