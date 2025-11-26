import { SITE_CONFIG } from '@/config/site-config';

export interface PageSEO {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
}

export const SEO_CONFIG = {
    default: {
        title: "Pusat Oleh-Oleh Lezat Magelang - Camilan Tradisional & Kue Kering Jogja",
        description:
            "🛍️ Toko oleh-oleh khas Magelang & Jogja: Bakpia, Kue Kering, Keripik, Permen & Manisan, Kacang-kacangan, Snack Kiloan. Produk berkualitas, harga terjangkau. Order via WhatsApp!",
        keywords: [
            "oleh-oleh magelang",
            "bakpia jogja",
            "kue kering",
            "keripik",
            "permen manisan",
            "kacang-kacangan",
            "snack kiloan",
            "camilan tradisional",
            "oleh-oleh jogja",
            "toko oleh-oleh",
            "pusat oleh-oleh lezat",
        ],
    },

    pages: {
        home: {
            title: "Pusat Oleh-Oleh Lezat Magelang - Camilan Tradisional & Kue Kering Jogja",
            description:
                "🛍️ Toko oleh-oleh khas Magelang & Jogja: Bakpia, Kue Kering, Keripik, Permen & Manisan, Kacang-kacangan, Snack Kiloan. Produk berkualitas, harga terjangkau. Order via WhatsApp!",
            keywords: [
                "oleh-oleh magelang",
                "bakpia jogja",
                "kue kering",
                "keripik",
                "permen manisan",
                "toko oleh-oleh",
            ],
            canonical: SITE_CONFIG.getCanonicalUrl('/'),
        },

        products: {
            title: "Katalog Produk - Pusat Oleh-Oleh Lezat Magelang",
            description:
                "Lihat katalog lengkap produk oleh-oleh kami: Bakpia Pathok, Kue Kering Sus Coklat, Keripik Pisang, Permen Jelly, Kacang Telur, dan masih banyak lagi. Harga terjangkau, kualitas terjamin.",
            keywords: [
                "katalog oleh-oleh",
                "produk oleh-oleh magelang",
                "daftar produk",
                "harga oleh-oleh",
                "bakpia pathok",
                "sus coklat",
            ],
            canonical: SITE_CONFIG.getCanonicalUrl('/products'),
        },

        location: {
            title: "Lokasi Toko - Pusat Oleh-Oleh Lezat Magelang",
            description:
                "Kunjungi toko kami di Jl. Ikhlas Blok D1 No.1, Magelang, Jawa Tengah. Buka setiap hari pukul 08:00-20:00. Lihat peta lokasi dan petunjuk arah ke toko kami.",
            keywords: [
                "lokasi toko oleh-oleh magelang",
                "alamat pusat oleh-oleh lezat",
                "jl ikhlas magelang",
                "toko oleh-oleh terdekat",
                "jam buka toko",
            ],
            canonical: SITE_CONFIG.getCanonicalUrl('/location'),
        },
    },

    categories: {
        "Bakpia dan Kue Basah": {
            title: "Bakpia & Kue Basah - Pusat Oleh-Oleh Lezat",
            description:
                "Koleksi lengkap Bakpia Pathok, Bakpia King, Yangko, dan kue basah khas Jogja. Original, Coklat, Keju, Ubi Ungu, dan berbagai varian rasa lainnya.",
            keywords: [
                "bakpia pathok",
                "bakpia jogja",
                "kue basah",
                "yangko",
                "bakpia coklat",
                "bakpia keju",
            ],
        },

        "Kue Kering": {
            title: "Kue Kering - Pusat Oleh-Oleh Lezat",
            description:
                "Aneka kue kering premium: Sus Coklat, Sus Melati, Bagelen, Nopia, Kastengel, Nastar, Putri Salju. Cocok untuk oleh-oleh atau hampers.",
            keywords: [
                "kue kering",
                "sus coklat",
                "kastengel",
                "nastar",
                "kue kering magelang",
                "kue kering jogja",
            ],
        },

        Keripik: {
            title: "Keripik Khas Jogja - Pusat Oleh-Oleh Lezat",
            description:
                "Keripik renyah dengan berbagai varian: Keripik Pisang Original, Coklat, Keju, Green Tea, Balado, dan masih banyak lagi. Renyah dan gurih!",
            keywords: [
                "keripik pisang",
                "keripik jogja",
                "keripik magelang",
                "keripik balado",
                "keripik coklat",
                "keripik keju",
            ],
        },

        "Permen & Manisan": {
            title: "Permen & Manisan - Pusat Oleh-Oleh Lezat",
            description:
                "Koleksi permen dan manisan: Jelly Inaco, Permen Kopi, Manisan Buah, dan berbagai snack manis lainnya. Cocok untuk segala usia.",
            keywords: [
                "permen",
                "manisan",
                "jelly inaco",
                "permen kopi",
                "manisan buah",
                "snack manis",
            ],
        },

        "Kacang-kacangan": {
            title: "Kacang-kacangan - Pusat Oleh-Oleh Lezat",
            description:
                "Aneka kacang berkualitas: Kacang Telur, Kacang Mete, Kacang Disco, Kacang Atom. Renyah, gurih, dan bergizi.",
            keywords: [
                "kacang telur",
                "kacang mete",
                "kacang disco",
                "kacang atom",
                "camilan kacang",
                "kacang jogja",
            ],
        },

        "Snack Kiloan": {
            title: "Snack Kiloan - Pusat Oleh-Oleh Lezat",
            description:
                "Beli snack kiloan dengan harga terjangkau! Berbagai pilihan snack favorit dijual per kilo. Hemat dan praktis untuk acara atau usaha.",
            keywords: [
                "snack kiloan",
                "jajanan kiloan",
                "snack murah",
                "camilan kiloan magelang",
                "grosir snack",
            ],
        },

        Minuman: {
            title: "Minuman Tradisional & Instan - Pusat Oleh-Oleh Lezat",
            description:
                "Minuman tradisional dan instan khas Jawa: Wedang Uwuh, Jahe Merah, Susu Etawa, Kopi Temanggung. Hangat dan menyehatkan!",
            keywords: [
                "wedang uwuh",
                "jahe merah",
                "susu etawa",
                "minuman tradisional",
                "kopi temanggung",
                "minuman herbal",
            ],
        },

        "Lain-lain": {
            title: "Produk Lainnya - Pusat Oleh-Oleh Lezat",
            description:
                "Berbagai produk oleh-oleh unik lainnya. Temukan lebih banyak pilihan camilan dan makanan khas Magelang & Jogja di toko kami.",
            keywords: [
                "oleh-oleh unik",
                "produk khas magelang",
                "makanan khas jogja",
                "camilan tradisional",
            ],
        },
    },
} as const;
