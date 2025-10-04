class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
   console.log(`${this.nama} sedang belajar.`);
  }
}

// Membuat objek dari class Mahasiswa
const mhs1 = new Mahasiswa("Fahri", "202401110034", "Teknik Informatika");
mhs1.belajar();
const mhs2 = new Mahasiswa("Satura" , "202401110002" , "Teknik Informatika");
mhs2.belajar();
