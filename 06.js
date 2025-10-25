class Kendaraan {
  constructor(merk) {
    this.merk = merk;
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }
 
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan oleh subclass!");
  }
}

class Mobil extends Kendaraan {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// ===========================
// 5️⃣ KELAS ABSTRAK: PEMBAYARAN
// ===========================
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;

    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak
  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan oleh subclass!");
  }
}

// ===========================
// 6️⃣ SUBCLASS: KARTU KREDIT
// ===========================
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran sebesar Rp${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

// ===========================
// 7️⃣ SUBCLASS: PAYPAL
// ===========================
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran sebesar Rp${this.jumlah} melalui PayPal berhasil!`;
  }
}

// ===========================
// 8️⃣ IMPLEMENTASI DAN PENGUJIAN
// ===========================
console.log("=== UJI KELAS KENDARAAN ===");
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); 
// ✅ Output: Toyota Avanza melaju dengan kecepatan tinggi!

console.log("\n=== UJI KELAS SEPEDA (INTERFACE) ===");
const polygon = new Sepeda("Polygon");
console.log(polygon.maju());
// ✅ Output: Polygon melaju dengan tenaga manusia!

// Validasi interface
if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan method 'maju()'!");
}

console.log("\n=== UJI PEMBAYARAN ===");
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran());
// ✅ Output: Pembayaran sebesar Rp500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran());
// ✅ Output: Pembayaran sebesar Rp250000 melalui PayPal berhasil!

// const kendaraanBaru = new Kendaraan("Generic"); // ❌ Akan error: kelas abstrak tidak bisa diinstansiasi
