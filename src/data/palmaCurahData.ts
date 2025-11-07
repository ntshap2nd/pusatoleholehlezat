
import astonDonatWarna from "@/assets/image/PALMA CURAH/ASTON DONAT WARNA.jpg";
import astonDonatKopi from "@/assets/image/PALMA CURAH/ASTON DONAT KOPI.jpg";
import astonDonatCherry from "@/assets/image/PALMA CURAH/ASTON DONAT CHERRY.jpg";
import astonNastarDaun from "@/assets/image/PALMA CURAH/ASTON NASTAR DAUN.jpg";
import palmaNastarApelKeju from "@/assets/image/PALMA CURAH/PALMA NASTAR APEL KEJU.jpg";
import palmaBolaNavatar from "@/assets/image/PALMA CURAH/PALMA BOLA NASTAR SPECIAL.jpg";
import palmaSakuraCheese from "@/assets/image/PALMA CURAH/PALMA SAKURA CHEESE.jpg";
import astonKastengel from "@/assets/image/PALMA CURAH/ASTON KASTENGEL.jpg";
import astonPutriSalju from "@/assets/image/PALMA CURAH/ASTON PUTRI SALJU.jpg";
import astonPutriSaljuPandan from "@/assets/image/PALMA CURAH/ASTON PUTRI SALJU PANDAN.jpg";
import palmaSaguKejuSpecial from "@/assets/image/PALMA CURAH/PALMA SAGU KEJU SPECIAL.jpg";
import astonSaguKeju from "@/assets/image/PALMA CURAH/ASTON SAGU KEJU.jpg";
import astonSaguPandan from "@/assets/image/PALMA CURAH/ASTON SAGU PANDAN.jpg";
import palmaWaferGulungKeju from "@/assets/image/PALMA CURAH/PALMA WAFER GULUNG KEJU.jpg";
import palmaWaferGulungCoklatSpecial from "@/assets/image/PALMA CURAH/PALMA WAFER GULUNG COKLAT SPECIAL.jpg";
import astonWaferGulungStrawberry from "@/assets/image/PALMA CURAH/ASTON WAFER GULUNG STRAWBERRY.jpg";
import astonWaferGulungCoklat from "@/assets/image/PALMA CURAH/ASTON WAFER GULUNG COKLAT.jpg";
import palmaBoluPanggangMarmer from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG MARMER.jpg";
import palmaBoluPanggangPandan from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG PANDAN.jpg";
import palmaBoluPanggangSusu from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG SUSU.jpg";
import palmaBoluPanggangMiniSusu from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG MINI SUSU.jpg";
import palmaBoluPanggangMiniPandan from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG MINI PANDAN.jpg";
import palmaBoluPanggangMiniMarmer from "@/assets/image/PALMA CURAH/PALMA BOLU PANGGANG MINI MARMER.jpg";
import boluPanggangMarmerMiniMiki from "@/assets/image/PALMA CURAH/BOLU PANGGANG MARMER MINI MIKI.jpg";

export interface PalmaCurahProduct {
  id: number;
  name: string;
  basePrice: number; // harga per kg untuk referensi
  image: string;
  description: string;
  category: "PALMA CURAH";
  weightOptions: {
    weight: number; // dalam kg
    price: number;  // harga dalam rupiah (integer)
    label: string;  // label untuk ditampilkan
  }[];
}

export const palmaCurahProducts: PalmaCurahProduct[] = [
  {
    id: 6001,
    name: "ASTON DONAT WARNA",
    basePrice: 66500,
    image: astonDonatWarna,
    description: "Donat warna-warni Aston dengan topping gula warna yang menarik",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 16625, label: "1/4 kg" },
      { weight: 0.5, price: 33250, label: "1/2 kg" },
      { weight: 1, price: 66500, label: "1 kg" }
    ]
  },
  {
    id: 6002,
    name: "ASTON DONAT KOPI",
    basePrice: 66500,
    image: astonDonatKopi,
    description: "Donat kopi Aston dengan rasa kopi yang khas dan nikmat",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 16625, label: "1/4 kg" },
      { weight: 0.5, price: 33250, label: "1/2 kg" },
      { weight: 1, price: 66500, label: "1 kg" }
    ]
  },
  {
    id: 6003,
    name: "ASTON DONAT CHERRY",
    basePrice: 66500,
    image: astonDonatCherry,
    description: "Donat cherry Aston dengan topping cherry yang manis dan segar",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 16625, label: "1/4 kg" },
      { weight: 0.5, price: 33250, label: "1/2 kg" },
      { weight: 1, price: 66500, label: "1 kg" }
    ]
  },
  {
    id: 6004,
    name: "ASTON NASTAR DAUN",
    basePrice: 76500,
    image: astonNastarDaun,
    description: "Nastar daun Aston dengan isian nanas dan bentuk daun yang cantik",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 19125, label: "1/4 kg" },
      { weight: 0.5, price: 38250, label: "1/2 kg" },
      { weight: 1, price: 76500, label: "1 kg" }
    ]
  },
  {
    id: 6005,
    name: "PALMA NASTAR APEL KEJU",
    basePrice: 79500,
    image: palmaNastarApelKeju,
    description: "Nastar apel keju Palma dengan isian nanas dan taburan keju",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 19875, label: "1/4 kg" },
      { weight: 0.5, price: 39750, label: "1/2 kg" },
      { weight: 1, price: 79500, label: "1 kg" }
    ]
  },
  {
    id: 6006,
    name: "PALMA BOLA NASTAR SPECIAL",
    basePrice: 90000,
    image: palmaBolaNavatar,
    description: "Bola nastar special Palma dengan isian nanas yang manis",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 22500, label: "1/4 kg" },
      { weight: 0.5, price: 45000, label: "1/2 kg" },
      { weight: 1, price: 90000, label: "1 kg" }
    ]
  },
  {
    id: 6007,
    name: "PALMA SAKURA CHEESE",
    basePrice: 74500,
    image: palmaSakuraCheese,
    description: "Sakura cheese Palma dengan rasa keju yang lembut dan creamy",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18625, label: "1/4 kg" },
      { weight: 0.5, price: 37250, label: "1/2 kg" },
      { weight: 1, price: 74500, label: "1 kg" }
    ]
  },
  {
    id: 6008,
    name: "ASTON KASTENGEL",
    basePrice: 78000,
    image: astonKastengel,
    description: "Kastengel Aston dengan rasa keju yang kuat dan tekstur renyah",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 19500, label: "1/4 kg" },
      { weight: 0.5, price: 39000, label: "1/2 kg" },
      { weight: 1, price: 78000, label: "1 kg" }
    ]
  },
  {
    id: 6009,
    name: "ASTON PUTRI SALJU",
    basePrice: 71500,
    image: astonPutriSalju,
    description: "Putri salju Aston dengan tekstur lembut dan taburan gula halus",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 17875, label: "1/4 kg" },
      { weight: 0.5, price: 35750, label: "1/2 kg" },
      { weight: 1, price: 71500, label: "1 kg" }
    ]
  },
  {
    id: 6010,
    name: "ASTON PUTRI SALJU PANDAN",
    basePrice: 74000,
    image: astonPutriSaljuPandan,
    description: "Putri salju pandan Aston dengan aroma pandan yang harum",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18500, label: "1/4 kg" },
      { weight: 0.5, price: 37000, label: "1/2 kg" },
      { weight: 1, price: 74000, label: "1 kg" }
    ]
  },
  {
    id: 6011,
    name: "PALMA SAGU KEJU SPECIAL",
    basePrice: 83500,
    image: palmaSaguKejuSpecial,
    description: "Sagu keju special Palma dengan rasa keju yang gurih dan lembut",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 20875, label: "1/4 kg" },
      { weight: 0.5, price: 41750, label: "1/2 kg" },
      { weight: 1, price: 83500, label: "1 kg" }
    ]
  },
  {
    id: 6012,
    name: "ASTON SAGU KEJU",
    basePrice: 75500,
    image: astonSaguKeju,
    description: "Sagu keju Aston dengan tekstur lembut dan rasa keju yang enak",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18875, label: "1/4 kg" },
      { weight: 0.5, price: 37750, label: "1/2 kg" },
      { weight: 1, price: 75500, label: "1 kg" }
    ]
  },
  {
    id: 6013,
    name: "ASTON SAGU PANDAN",
    basePrice: 75500,
    image: astonSaguPandan,
    description: "Sagu pandan Aston dengan aroma pandan yang harum dan lembut",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18875, label: "1/4 kg" },
      { weight: 0.5, price: 37750, label: "1/2 kg" },
      { weight: 1, price: 75500, label: "1 kg" }
    ]
  },
  {
    id: 6014,
    name: "PALMA WAFER GULUNG KEJU",
    basePrice: 77500,
    image: palmaWaferGulungKeju,
    description: "Wafer gulung keju Palma dengan krim keju yang lezat",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 19375, label: "1/4 kg" },
      { weight: 0.5, price: 38750, label: "1/2 kg" },
      { weight: 1, price: 77500, label: "1 kg" }
    ]
  },
  {
    id: 6015,
    name: "PALMA WAFER GULUNG COKLAT SPECIAL",
    basePrice: 77500,
    image: palmaWaferGulungCoklatSpecial,
    description: "Wafer gulung coklat special Palma dengan krim coklat yang manis",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 19375, label: "1/4 kg" },
      { weight: 0.5, price: 38750, label: "1/2 kg" },
      { weight: 1, price: 77500, label: "1 kg" }
    ]
  },
  {
    id: 6016,
    name: "ASTON WAFER GULUNG STRAWBERRY",
    basePrice: 68500,
    image: astonWaferGulungStrawberry,
    description: "Wafer gulung strawberry Aston dengan rasa strawberry yang segar",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 17125, label: "1/4 kg" },
      { weight: 0.5, price: 34250, label: "1/2 kg" },
      { weight: 1, price: 68500, label: "1 kg" }
    ]
  },
  {
    id: 6017,
    name: "ASTON WAFER GULUNG COKLAT",
    basePrice: 68500,
    image: astonWaferGulungCoklat,
    description: "Wafer gulung coklat Aston dengan krim coklat yang nikmat",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 17125, label: "1/4 kg" },
      { weight: 0.5, price: 34250, label: "1/2 kg" },
      { weight: 1, price: 68500, label: "1 kg" }
    ]
  },
  {
    id: 6018,
    name: "PALMA BOLU PANGGANG MARMER",
    basePrice: 74000,
    image: palmaBoluPanggangMarmer,
    description: "Bolu panggang marmer Palma dengan perpaduan rasa coklat dan vanilla",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18500, label: "1/4 kg" },
      { weight: 0.5, price: 37000, label: "1/2 kg" },
      { weight: 1, price: 74000, label: "1 kg" }
    ]
  },
  {
    id: 6019,
    name: "PALMA BOLU PANGGANG PANDAN",
    basePrice: 74000,
    image: palmaBoluPanggangPandan,
    description: "Bolu panggang pandan Palma dengan aroma pandan yang harum",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18500, label: "1/4 kg" },
      { weight: 0.5, price: 37000, label: "1/2 kg" },
      { weight: 1, price: 74000, label: "1 kg" }
    ]
  },
  {
    id: 6020,
    name: "PALMA BOLU PANGGANG SUSU",
    basePrice: 71500,
    image: palmaBoluPanggangSusu,
    description: "Bolu panggang susu Palma dengan rasa susu yang lembut",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 17875, label: "1/4 kg" },
      { weight: 0.5, price: 35750, label: "1/2 kg" },
      { weight: 1, price: 71500, label: "1 kg" }
    ]
  },
  {
    id: 6021,
    name: "PALMA BOLU PANGGANG MINI SUSU",
    basePrice: 71000,
    image: palmaBoluPanggangMiniSusu,
    description: "Bolu panggang mini susu Palma dengan ukuran mini yang praktis",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 17750, label: "1/4 kg" },
      { weight: 0.5, price: 35500, label: "1/2 kg" },
      { weight: 1, price: 71000, label: "1 kg" }
    ]
  },
  {
    id: 6022,
    name: "PALMA BOLU PANGGANG MINI PANDAN",
    basePrice: 75000,
    image: palmaBoluPanggangMiniPandan,
    description: "Bolu panggang mini pandan Palma dengan rasa pandan yang segar",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18750, label: "1/4 kg" },
      { weight: 0.5, price: 37500, label: "1/2 kg" },
      { weight: 1, price: 75000, label: "1 kg" }
    ]
  },
  {
    id: 6023,
    name: "PALMA BOLU PANGGANG MINI MARMER",
    basePrice: 75000,
    image: palmaBoluPanggangMiniMarmer,
    description: "Bolu panggang mini marmer Palma dengan motif marmer yang cantik",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 18750, label: "1/4 kg" },
      { weight: 0.5, price: 37500, label: "1/2 kg" },
      { weight: 1, price: 75000, label: "1 kg" }
    ]
  },
  {
    id: 6024,
    name: "BOLU PANGGANG MARMER MINI MIKI",
    basePrice: 58500,
    image: boluPanggangMarmerMiniMiki,
    description: "Bolu panggang marmer mini Miki dengan ukuran kecil yang imut",
    category: "PALMA CURAH",
    weightOptions: [
      { weight: 0.25, price: 14625, label: "1/4 kg" },
      { weight: 0.5, price: 29250, label: "1/2 kg" },
      { weight: 1, price: 58500, label: "1 kg" }
    ]
  }
];

export function validatePalmaCurahProduct(product: PalmaCurahProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.basePrice > 0 &&
    product.image.length > 0 &&
    product.category === "PALMA CURAH" &&
    product.weightOptions.length > 0
  );
}

export function getPalmaCurahProductById(id: number): PalmaCurahProduct | undefined {
  return palmaCurahProducts.find(product => product.id === id);
}

export function getPalmaCurahProductsByPriceRange(minPrice: number, maxPrice: number): PalmaCurahProduct[] {
  return palmaCurahProducts.filter(product => 
    product.weightOptions.some(option => option.price >= minPrice && option.price <= maxPrice)
  );
}
