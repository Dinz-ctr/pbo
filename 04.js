class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;  // Atribut publik
    this.nim = nim;    // Atribut publik

    let _nilai = nilai;  // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }
}
// Contoh penggunaan
const mhs1 = new Mahasiswa('Satura', '2301001', 85);
console.log(Nilai awal: ${mhs1.getNilai()}); // Output: 85

mhs1.setNilai(95);
console.log(Nilai setelah diubah: ${mhs1.getNilai()}); // Output: 95

mhs1.setNilai(150); // Output: Nilai harus antara 0 dan 100

const mhs2 = new Mahasiswa('Fahri' , '202401110034' , 70);
console.log(Nilai setelah diubah: ${mhs2.getNilai()});

mhs2.setNilai(70);
console.log(Nilai setelah diubah: ${mhs2.getNilai()}); // Output: 70

mhs2.setNilai(200); // Output: Nilai harus antara 0 dan 100

const mhs3 = new Mahasiswa('Aceng' , '202401110032' , 80);
console.log(Nilai setelah diubah: ${mhs2.getNilai()});

mhs3.setNilai(50);
console.log(Nilai setelah diubah: ${mhs2.getNilai()}); // Output: 50

mhs3.setNilai(105); // Output: Nilai harus antara 0 dan 100
