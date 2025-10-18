// Kelas induk (superclass)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  suara() {
    return `${this.nama} bersuara...`;
  }
}

// Kelas turunan Kucing
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing");
    this.warna = warna;
  }
}

// Kelas turunan Anjing
class Anjing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Anjing");
    this.warna = warna;
  }

  // Overriding method
  suara() {
    return `${this.nama} menggonggong: Woof woof!`;
  }
}

// Kelas turunan Serigala
class Serigala extends Hewan {
  constructor(nama, warna) {
    super(nama, "Serigala");
    this.warna = warna;
  }

  suara() {
    return super.suara() + " Auuuuu~";
  }
}

// Kelas turunan Burung
class Burung extends Hewan {
  constructor(nama) {
    super(nama, "Burung");
  }

  suara() {
    return `${this.nama} berkicau: Cip cip!`;
  }
}

// Contoh penggunaan
const milo = new Kucing("Milo", "Putih");
console.log(milo.nama); // Milo
console.log(milo.jenis); // Kucing
console.log(milo.suara()); // Milo bersuara...

const doge = new Anjing("Doge", "Coklat");
console.log(doge.suara()); // Doge menggonggong: Woof woof!

const alpha = new Serigala("Alpha", "Abu-abu");
console.log(alpha.suara()); // Alpha bersuara... Auuuuu~

// Polimorfisme dalam array
const hewanList = [
  new Kucing("Milo", "Putih"),
  new Anjing("Buddy", "Hitam"),
  new Burung("Tweety")
];

hewanList.forEach(hewan => console.log(hewan.suara()));
