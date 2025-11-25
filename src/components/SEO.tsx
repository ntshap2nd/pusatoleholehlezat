import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
    canonical?: string;
}

export function SEO({
    title = "Pusat Oleh-Oleh Lezat Magelang - Camilan Tradisional & Kue Kering Jogja",
    description = "🛍️ Toko oleh-oleh khas Magelang & Jogja: Bakpia, Kue Kering, Keripik, Permen & Manisan, Kacang-kacangan, Snack Kiloan. Produk berkualitas, harga terjangkau. Order via WhatsApp!",
    keywords = [
        "oleh-oleh magelang",
        "bakpia jogja",
        "kue kering",
        "keripik",
        "permen manisan",
        "kacang-kacangan",
        "snack kiloan",
        "camilan tradisional",
        "oleh-oleh jogja",
    ],
    ogImage = "https://pusatoleholehlezat.com/og-image.jpg",
    canonical = "https://pusatoleholehlezat.com",
}: SEOProps) {
    const keywordsString = keywords.join(", ");

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywordsString} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />
        </Helmet>
    );
}
