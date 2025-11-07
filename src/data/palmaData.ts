// Import gambar produk PALMA
import palmaBoluPanggang1 from "@/assets/image/PALMA/PALMA BOLU PANGGANG TABUNG SUSU.jpg";
import palmaBoluPanggang2 from "@/assets/image/PALMA/PALMA BOLU PANGGANG TABUNG MARMER.jpg";
import palmaBoluPanggang3 from "@/assets/image/PALMA/PALMA BOLU PANGGANG TABUNG PANDAN.jpg";
import palmaSaguKejuSpc from "@/assets/image/PALMA/PALMA SAGU KEJU SPC TPL.jpg";
import palmaSakuraCheese from "@/assets/image/PALMA/PALMA SAKURA CHEESE TPL.jpg";
import palmaPutriSalju from "@/assets/image/PALMA/PALMA PUTRI SALJU TPL.jpg";
import palmaKastengel from "@/assets/image/PALMA/PALMA KASTENGEL TPL.jpg";
import palmaNastarKeju from "@/assets/image/PALMA/PALMA NASTAR KEJU SPC TPL.jpg";
import palmaWaferGulungKeju from "@/assets/image/PALMA/PALMA WAFER GULUNG KEJU SPC TPL.jpg";
import palmaWaferGulungCoklat from "@/assets/image/PALMA/PALMA WAFER GULUNG COKLAT SPC TPL.jpg";
import palmaDonatWarna from "@/assets/image/PALMA/PALMA DONAT WARNA TPL.jpg";
import palmaBoluPanggangOriginal from "@/assets/image/PALMA/01_PALMA BOLU PANGGANG - Original.jpg";
import palmaBoluPanggangPandan from "@/assets/image/PALMA/02_PALMA BOLU PANGGANG - Pandan.jpg";
import palmaBoluPanggangMocca from "@/assets/image/PALMA/03_PALMA BOLU PANGGANG - Mocca.jpg";

export interface PalmaProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "PALMA";
  weight: string;
}

export const palmaProducts: PalmaProduct[] = [
  {
    id: 5001,
    name: "PALMA BOLU PANGGANG - Original",
    price: 28000,
    image: palmaBoluPanggangOriginal,
    description: "Bolu panggang Palma original dengan rasa klasik yang lembut",
    category: "PALMA",
    weight: "180gr"
  },
  {
    id: 5002,
    name: "PALMA BOLU PANGGANG - Pandan",
    price: 28000,
    image: palmaBoluPanggangPandan,
    description: "Bolu panggang Palma rasa pandan dengan warna hijau natural",
    category: "PALMA",
    weight: "180gr"
  },
  {
    id: 5003,
    name: "PALMA BOLU PANGGANG - Mocca",
    price: 28000,
    image: palmaBoluPanggangMocca,
    description: "Bolu panggang Palma rasa mocca dengan perpaduan rasa kopi dan coklat",
    category: "PALMA",
    weight: "180gr"
  },
  {
    id: 5004,
    name: "PALMA BOLU PANGGANG TABUNG SUSU",
    price: 31500,
    image: palmaBoluPanggang1,
    description: "Bolu panggang Palma rasa susu dengan tekstur lembut dan kemasan tabung",
    category: "PALMA",
    weight: "300 gr"
  },
  {
    id: 5005,
    name: "PALMA BOLU PANGGANG TABUNG MARMER",
    price: 31500,
    image: palmaBoluPanggang2,
    description: "Bolu panggang Palma marmer dengan perpaduan rasa coklat dan vanilla",
    category: "PALMA",
    weight: "300 gr"
  },
  {
    id: 5006,
    name: "PALMA BOLU PANGGANG TABUNG PANDAN",
    price: 31500,
    image: palmaBoluPanggang3,
    description: "Bolu panggang Palma rasa pandan dengan aroma pandan yang harum",
    category: "PALMA",
    weight: "300 gr"
  },
  {
    id: 5007,
    name: "PALMA SAGU KEJU SPC TPL",
    price: 39500,
    image: palmaSaguKejuSpc,
    description: "Kue sagu keju Palma special dengan rasa keju yang gurih dan lembut",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5008,
    name: "PALMA SAKURA CHEESE TPL",
    price: 31000,
    image: palmaSakuraCheese,
    description: "Kue sakura cheese Palma dengan rasa keju yang creamy dan tekstur lembut",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5009,
    name: "PALMA PUTRI SALJU TPL",
    price: 42000,
    image: palmaPutriSalju,
    description: "Kue putri salju Palma dengan tekstur lembut dan taburan gula halus",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5010,
    name: "PALMA KASTENGEL TPL",
    price: 41000,
    image: palmaKastengel,
    description: "Kastengel Palma dengan rasa keju yang kuat dan tekstur renyah",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5011,
    name: "PALMA NASTAR KEJU SPC RPL",
    price: 39500,
    image: palmaNastarKeju,
    description: "Nastar keju special Palma dengan isian nanas dan taburan keju",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5012,
    name: "PALMA WAFER GULUNG KEJU SPC TPL",
    price: 43000,
    image: palmaWaferGulungKeju,
    description: "Wafer gulung keju Palma special dengan krim keju yang lezat",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5013,
    name: "PALMA WAFER GULUNG COKLAT SPC TPL",
    price: 43000,
    image: palmaWaferGulungCoklat,
    description: "Wafer gulung coklat Palma special dengan krim coklat yang manis",
    category: "PALMA",
    weight: ""
  },
  {
    id: 5014,
    name: "PALMA DONAT WARNA TPL",
    price: 32500,
    image: palmaDonatWarna,
    description: "Donat warna warni Palma dengan topping gula warna yang menarik",
    category: "PALMA",
    weight: ""
  }
];

export function validatePalmaProduct(product: PalmaProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.price > 0 &&
    product.image.length > 0 &&
    product.category === "PALMA"
  );
}

export function getPalmaProductById(id: number): PalmaProduct | undefined {
  return palmaProducts.find(product => product.id === id);
}

export function getPalmaProductsByPriceRange(minPrice: number, maxPrice: number): PalmaProduct[] {
  return palmaProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
