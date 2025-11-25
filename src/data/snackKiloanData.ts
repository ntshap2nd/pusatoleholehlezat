

// Import gambar produk snack kiloan dari folder /new
import abonSapiLancar from "@/assets/image/SNACK KILOAN/new/ABON SAPI LANCAR.jpg";
import abonIbuPolos from "@/assets/image/SNACK KILOAN/new/ABON IBU POLOS.jpg";
import abonIbuBawang from "@/assets/image/SNACK KILOAN/new/ABON IBU BAWANG.jpg";
import ususAsin5758 from "@/assets/image/SNACK KILOAN/new/USUS ASIN 5758.jpg";
import ususPedasLezaz from "@/assets/image/SNACK KILOAN/new/USUS PEDAS LEZAZ.jpg";
import dollarWijen from "@/assets/image/SNACK KILOAN/new/DOLLAR WIJEN.jpg";
import dollarBrownies from "@/assets/image/SNACK KILOAN/new/DOLLAR BROWNIES.jpg";
import jamurTiramPolos from "@/assets/image/SNACK KILOAN/new/JAMUR TIRAM POLOS.jpg";
import kulitAyamLos from "@/assets/image/SNACK KILOAN/new/KULIT AYAM LOS.jpg";
import jamurKupingPolos from "@/assets/image/SNACK KILOAN/new/JAMUR KUPING POLOS.jpg";
import springRollChiliSarikaya from "@/assets/image/SNACK KILOAN/new/SPRING ROLL CHILI SARIKAYA.jpg";
import springRollBiasaSarikaya from "@/assets/image/SNACK KILOAN/new/SPRING ROLL BIASA SARIKAYA.jpg";

export interface SnackKiloanProduct {
  id: number;
  name: string;
  basePrice: number; // harga per kg untuk referensi
  image: string;
  description: string;
  category: "Snack Kiloan";
  weightOptions: {
    weight: number; // dalam kg
    price: number;  // harga dalam rupiah (integer)
    label: string;  // label untuk ditampilkan
  }[];
}


export const snackKiloanProducts: SnackKiloanProduct[] = [
  {
    id: 1001,
    name: "ABON SAPI LANCAR",
    basePrice: 210000,
    image: abonSapiLancar,
    description: "Abon sapi lancar dengan kualitas premium, gurih dan lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 52500, label: "1/4 kg" },
      { weight: 0.5, price: 105000, label: "1/2 kg" },
      { weight: 1, price: 210000, label: "1 kg" }
    ]
  },
  {
    id: 1002,
    name: "ABON IBU POLOS",
    basePrice: 295000,
    image: abonIbuPolos,
    description: "Abon ibu polos dengan rasa original yang gurih dan renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 73750, label: "1/4 kg" },
      { weight: 0.5, price: 147500, label: "1/2 kg" },
      { weight: 1, price: 295000, label: "1 kg" }
    ]
  },
  {
    id: 1003,
    name: "ABON IBU BAWANG",
    basePrice: 295000,
    image: abonIbuBawang,
    description: "Abon ibu dengan tambahan bawang yang menambah kelezatan",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 73750, label: "1/4 kg" },
      { weight: 0.5, price: 147500, label: "1/2 kg" },
      { weight: 1, price: 295000, label: "1 kg" }
    ]
  },
  {
    id: 1004,
    name: "USUS ASIN 5758",
    basePrice: 65000,
    image: ususAsin5758,
    description: "Usus asin 5758 dengan rasa gurih asin yang khas",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 16250, label: "1/4 kg" },
      { weight: 0.5, price: 32500, label: "1/2 kg" },
      { weight: 1, price: 65000, label: "1 kg" }
    ]
  },
  {
    id: 1005,
    name: "USUS PEDAS LEZAZ",
    basePrice: 73000,
    image: ususPedasLezaz,
    description: "Usus pedas lezaz dengan tingkat kepedasan yang pas dan rasa yang lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 18250, label: "1/4 kg" },
      { weight: 0.5, price: 36500, label: "1/2 kg" },
      { weight: 1, price: 73000, label: "1 kg" }
    ]
  },
  {
    id: 1006,
    name: "DOLLAR WIJEN",
    basePrice: 65000,
    image: dollarWijen,
    description: "Dollar wijen dengan taburan wijen yang renyah dan gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 16250, label: "1/4 kg" },
      { weight: 0.5, price: 32500, label: "1/2 kg" },
      { weight: 1, price: 65000, label: "1 kg" }
    ]
  },
  {
    id: 1007,
    name: "DOLLAR BROWNIES",
    basePrice: 71000,
    image: dollarBrownies,
    description: "Dollar brownies dengan rasa coklat yang manis dan tekstur lembut",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 17750, label: "1/4 kg" },
      { weight: 0.5, price: 35500, label: "1/2 kg" },
      { weight: 1, price: 71000, label: "1 kg" }
    ]
  },
  {
    id: 1008,
    name: "JAMUR TIRAM POLOS",
    basePrice: 75000,
    image: jamurTiramPolos,
    description: "Jamur tiram polos crispy dengan tekstur renyah dan gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 18750, label: "1/4 kg" },
      { weight: 0.5, price: 37500, label: "1/2 kg" },
      { weight: 1, price: 75000, label: "1 kg" }
    ]
  },
  {
    id: 1009,
    name: "KULIT AYAM LOS",
    basePrice: 115000,
    image: kulitAyamLos,
    description: "Kulit ayam los dengan bumbu rempah yang gurih dan renyah",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 28750, label: "1/4 kg" },
      { weight: 0.5, price: 57500, label: "1/2 kg" },
      { weight: 1, price: 115000, label: "1 kg" }
    ]
  },
  {
    id: 1010,
    name: "JAMUR KUPING POLOS",
    basePrice: 75000,
    image: jamurKupingPolos,
    description: "Jamur kuping polos dengan tekstur kenyal dan rasa gurih",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 18750, label: "1/4 kg" },
      { weight: 0.5, price: 37500, label: "1/2 kg" },
      { weight: 1, price: 75000, label: "1 kg" }
    ]
  },
  {
    id: 1011,
    name: "SPRING ROLL CHILI SARIKAYA",
    basePrice: 82500,
    image: springRollChiliSarikaya,
    description: "Spring roll chili sarikaya dengan rasa pedas dan manis yang pas",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 20625, label: "1/4 kg" },
      { weight: 0.5, price: 41250, label: "1/2 kg" },
      { weight: 1, price: 82500, label: "1 kg" }
    ]
  },
  {
    id: 1012,
    name: "SPRING ROLL BIASA SARIKAYA",
    basePrice: 82500,
    image: springRollBiasaSarikaya,
    description: "Spring roll biasa sarikaya dengan rasa original yang lezat",
    category: "Snack Kiloan",
    weightOptions: [
      { weight: 0.25, price: 20625, label: "1/4 kg" },
      { weight: 0.5, price: 41250, label: "1/2 kg" },
      { weight: 1, price: 82500, label: "1 kg" }
    ]
  }
];

// Debug: Log jumlah produk saat module di-load
console.log('📦 snackKiloanData loaded:', snackKiloanProducts.length, 'products');
console.log('📦 First product:', snackKiloanProducts[0]?.name);
console.log('📦 Last product:', snackKiloanProducts[snackKiloanProducts.length - 1]?.name);

/**
 * Helper function untuk format harga ke Rupiah
 */
export const formatRupiah = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

/**
 * Helper function untuk mencari produk berdasarkan ID
 */
export const getProductById = (id: number): SnackKiloanProduct | undefined => {
  return snackKiloanProducts.find(product => product.id === id);
};

/**
 * Helper function untuk mencari produk berdasarkan nama (search)
 */
export const searchProducts = (query: string): SnackKiloanProduct[] => {
  const lowerQuery = query.toLowerCase();
  return snackKiloanProducts.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
};
