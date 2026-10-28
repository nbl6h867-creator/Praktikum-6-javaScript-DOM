# Praktikum-6-javaScript-D

NAMA : Muhammad Nabil Hanzaldi
NIM : 312510135
KELAS : I25.1A

# A. Tujuan Praktikum

Berdasarkan modul pertemuan 7, tujuan dari praktikum ini adalah:

- Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
- Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
- Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
- Menangani event pengguna menggunakan addEventListener().
- Membuat validasi form dan menampilkan pesan sesuai kondisi input.
- Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

# B. Struktur File

Proyek ini dikerjakan dengan memisahkan antara bagian Latihan dasar dan bagian Mini Project agar lebih terstruktur.

Praktikum-6-javaScript-DOM/
|-- lab6_dom_event/
| |-- index.html
| |-- script.js
| |-- style.css
|-- Mini_Project_Form_Pendaftaran/
| |-- index.html
| |-- script.js
| |-- style.css
|-- README.md

# C. Cara Menjalankan

- Pastikan Anda sudah mengunduh atau melakukan clone repositori ini.
- Buka folder repositori menggunakan teks editor seperti Visual Studio Code.

- Untuk melihat hasil Latihan 1-6, buka file lab6_dom_event/index.html menggunakan browser web modern (Chrome, Firefox, Edge) atau menggunakan ekstensi Live Server di VS Code.

- ntuk melihat hasil Mini Project, buka file Mini_Project_Form_Pendaftaran/index.html menggunakan browser web.

- Aktifkan Developer Tools (tekan F12 atau klik kanan > Inspect) dan buka tab Console untuk memantau aktivitas JavaScript dan memvalidasi jika ada error.

# D. Langkah Kerja

Berikut adalah tahapan pengerjaan praktikum yang telah dilakukan:

1. Latihan Dasar (Latihan 1 - 6)

Latihan 1 (Mengubah teks dengan DOM): Melakukan seleksi elemen berdasarkan id (getElementById) dan menggunakan properti textContent untuk mengubah isi teks pada elemen judul dan paragraf.

Latihan 2 (Event click): Menambahkan addEventListener dengan event click pada tombol aksi agar memunculkan informasi waktu (timestamp) terkini saat tombol ditekan.

Latihan 3 (Mengubah kelas dan gaya CSS): Menggunakan classList.toggle() untuk menambahkan atau menghapus kelas CSS (.highlight dan .teks-besar) secara dinamis saat tombol diklik.

Latihan 4 (Event input): Membuat form input teks dan menggunakan event input untuk menghitung dan menampilkan jumlah karakter secara real-time (seketika).

Latihan 5 (Validasi form pendaftaran): Menambahkan form pendaftaran dengan input nama, email, dan usia. Menerapkan event.preventDefault() pada event submit form, lalu memvalidasi kondisi input (kosong, format email menggunakan regex, dan batasan rentang nilai usia) sebelum menampilkan pesan sukses atau pesan peringatan.

Latihan 6 (To-do List): Membuat elemen HTML secara dinamis menggunakan document.createElement() dan menambahkannya ke DOM tree dengan appendChild().
