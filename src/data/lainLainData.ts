// Import gambar produk Lain-lain
import tasBelanjaMedium from "@/assets/image/Lain-lain/tas belanja medium.jpg";
import tasBelanjaNLarge from "@/assets/image/Lain-lain/tas belanja large.jpg";

export interface LainLainProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: "Lain-lain";
  weight: string;
}

export const lainLainProducts: LainLainProduct[] = [
  {
    id: 7001,
    name: "TAS BELANJA MEDIUM",
    price: 10000,
    image: tasBelanjaMedium,
    description: "Tas belanja ramah lingkungan ukuran medium - Ukuran 30x40x15cm (velcro)",
    category: "Lain-lain",
    weight: "Ukuran 30x40x15cm"
  },
  {
    id: 7002,
    name: "TAS BELANJA LARGE",
    price: 30000,
    image: tasBelanjaNLarge,
    description: "Tas belanja ramah lingkungan ukuran large - Ukuran 40x40x25cm (resleting)",
    category: "Lain-lain",
    weight: "Ukuran 40x40x25cm"
  }
];

export function validateLainLainProduct(product: LainLainProduct): boolean {
  return (
    product.id > 0 &&
    product.name.trim().length > 0 &&
    product.price > 0 &&
    product.image.length > 0 &&
    product.category === "Lain-lain"
  );
}

export function getLainLainProductById(id: number): LainLainProduct | undefined {
  return lainLainProducts.find(product => product.id === id);
}

export function getLainLainProductsByPriceRange(minPrice: number, maxPrice: number): LainLainProduct[] {
  return lainLainProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

