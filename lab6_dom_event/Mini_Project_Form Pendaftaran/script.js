const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const sisaKarakter = document.getElementById("sisaKarakter");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const resetWorkshop = document.getElementById("resetWorkshop");

namaWorkshop.addEventListener("input", function () {
  const batasMaksimal = 50;
  const panjangTeks = namaWorkshop.value.length;
  sisaKarakter.textContent = batasMaksimal - panjangTeks;
});

resetWorkshop.addEventListener("click", function () {
  pesanWorkshop.textContent = "";
  pesanWorkshop.style.color = "black";
  sisaKarakter.textContent = "50";
});

formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaWorkshop.value.trim();
  const email = document.getElementById("emailWorkshop").value.trim();
  const sesi = document.getElementById("sesiWorkshop").value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    pesanWorkshop.textContent = "Error: Nama lengkap wajib diisi!";
    pesanWorkshop.style.color = "red";
  } else if (!polaEmail.test(email)) {
    pesanWorkshop.textContent = "Error: Format email tidak valid!";
    pesanWorkshop.style.color = "red";
  } else if (sesi === "") {
    pesanWorkshop.textContent = "Error: Silakan pilih sesi workshop!";
    pesanWorkshop.style.color = "red";
  } else {
    pesanWorkshop.textContent =
      "Pendaftaran Berhasil! Sampai jumpa di workshop sesi " + sesi + ".";
    pesanWorkshop.style.color = "green";
    formWorkshop.reset();
    sisaKarakter.textContent = "50";
  }
});
