function ubahCellpadding() {
    var table = document.getElementById("tabel");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 720) {
    // Jika lebar layar <= 720px, ubah nilai cellpadding menjadi 10
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.padding = "1px";
        }
    }
    } else {
    // Jika lebar layar > 720px, kembalikan nilai cellpadding menjadi 20
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.padding = "20px";
        }
    }
    }
}

// Panggil fungsi saat halaman pertama kali dimuat dan saat ukuran layar berubah
window.onload = ubahCellpadding;
window.onresize = ubahCellpadding;


const toggleBtn = document.getElementById('klikjadwal');
const daftarDiv = document.getElementById('jadwal');
toggleBtn.addEventListener('click', function() {
    // Toggle class "slide-down" untuk animasi slide down
    // Toggle display none/block untuk munculkan/div
    if (daftarDiv.style.display === 'none') {
        daftarDiv.style.display = 'block';
    } else {
        daftarDiv.style.display = 'none';
      
    }

})