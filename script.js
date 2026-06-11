const btnMales = document.getElementById('btn-males');
const btnMau = document.getElementById('btn-mau');
const btnContainer = document.querySelector('.btn-container');
const h1Judul = document.querySelector('h1');
const pDeskripsi = document.querySelector('.sub-judul');
const pSapaan = document.querySelector('.sapaan');
const pesanSukses = document.getElementById('pesan-sukses');

// 1. Logika tombol GAK biar otomatis kabur pas didekati kursor
btnMales.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btnMales.clientWidth - 40;
    const maxY = window.innerHeight - btnMales.clientHeight - 40;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnMales.style.position = 'fixed'; 
    btnMales.style.left = randomX + 'px';
    btnMales.style.top = randomY + 'px';
});

// 2. Logika pas klik MAUU (Bagian Pertama Hilang -> Muncul Pilihan Jam)
function tampilkanPesan() {
    h1Judul.classList.add('hidden');
    pDeskripsi.classList.add('hidden');
    pSapaan.classList.add('hidden');
    btnContainer.classList.add('hidden');
    btnMales.style.display = 'none';

    // Sembunyikan tulisan I KNOW RIGHT WKWKWK secara otomatis
    const h2Sukses = document.querySelector('#pesan-sukses h2');
    if (h2Sukses) {
        h2Sukses.classList.add('hidden');
    }

    pesanSukses.classList.remove('hidden');
}

// 3. Logika pas klik Pilihan Jam (Kirim jawaban ke Telegram kamu)
function pilihJam(waktu) {
    const tanyaJam = document.querySelector('.tanya-jam');
    const jamContainer = document.querySelector('.jam-container');
    const jawabanAkhir = document.getElementById('jawaban-akhir');

    // Sembunyikan pertanyaan jam dan tombol-tombolnya
    tanyaJam.classList.add('hidden');
    jamContainer.classList.add('hidden');

    // Tampilkan kalimat sakti di layarnya Carine
    jawabanAkhir.innerHTML = waktu;
    jawabanAkhir.classList.remove('hidden');

    // --- FITUR OTOMATIS TELEGRAM ---
    // GANTI dengan username Telegram kamu (TANPA tanda @)
    const usernameTele = "dackdickduck"; 
    
    // Pesan yang otomatis terketik di kolom chat Telegram Carine
    const teksChat = encodeURIComponent(`Aku mau mabar Roblox! Opsi yang aku pilih: "${waktu}"`);
    
    // Kasih jeda 1.2 detik biar dia sempet liat teksnya berubah di web, baru oper ke Tele
    setTimeout(() => {
        window.open(`https://t.me/${usernameTele}?text=${teksChat}`, '_blank');
    }, 1200); 
}