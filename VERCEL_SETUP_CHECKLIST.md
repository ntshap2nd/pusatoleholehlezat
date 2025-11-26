# Vercel Environment Variables - Quick Setup Checklist

## 📋 Before You Start

- [ ] Have Vercel account with access to `toko-lezat` project
- [ ] Gather all credentials (API keys, IDs, etc.)
- [ ] Have the values below ready to copy-paste

---

## 🔑 Credentials Checklist

Sebelum setup di Vercel, pastikan Anda punya:

### ✅ Wajib Dimiliki

- [ ] **Google Analytics ID**: `G-LG80GBQEFP` (sudah punya)
- [ ] **WhatsApp Number**: `6285122614122` (sudah punya)
- [ ] **Instagram Handle**: `tokolezatmagelang` (sudah punya)
- [ ] **Production Domain**: `pusatoleholehlezat.com` (atau domain baru)
- [ ] **Email**: `admin@pusatoleholehlezat.com` (atau email bisnis Anda)
- [ ] **Facebook Handle**: `pusatoleholehlezat` (sudah punya)

### ⚠️ Opsional tapi Recommended

- [ ] **Google Maps API Key** (dapatkan dari Google Cloud Console)
- [ ] **Google Places ID** (dapatkan dari Google Maps)
- [ ] **Facebook Pixel ID** (dari Facebook Business Manager)

---

## 🚀 Step 1: Buka Vercel Dashboard

**URL**: https://vercel.com/dashboard

1. [ ] Login ke Vercel account Anda
2. [ ] Cari dan pilih project: **toko-lezat**
3. [ ] Klik tab: **Settings**
4. [ ] Di sidebar, pilih: **Environment Variables**

---

## 📝 Step 2: Add Environment Variables

**Ikuti proses ini untuk SETIAP variable:**

1. Klik tombol: **"Add New"** atau **"Add Environment Variable"**
2. Isi field **Name** dengan variable name
3. Isi field **Value** dengan value
4. Pilih **Environment** (Production/Preview/Development)
5. Klik **"Save"**

### Variable #1: VITE_SITE_DOMAIN

```
Name:        VITE_SITE_DOMAIN
Value:       https://pusatoleholehlezat.com
Environment: Production
```

- [ ] Added

### Variable #2: VITE_GA_ID

```
Name:        VITE_GA_ID
Value:       G-LG80GBQEFP
Environment: Production + Preview
```

**Cara add ke 2 environment:**
1. Add ke Production
2. Click "Add New" lagi
3. Isi sama, tapi pilih "Preview"

- [ ] Added to Production
- [ ] Added to Preview

### Variable #3: VITE_ADMIN_WHATSAPP

```
Name:        VITE_ADMIN_WHATSAPP
Value:       6285122614122
Environment: Production + Preview
```

- [ ] Added to Production
- [ ] Added to Preview

### Variable #4: VITE_ADMIN_EMAIL

```
Name:        VITE_ADMIN_EMAIL
Value:       admin@pusatoleholehlezat.com
Environment: Production + Preview
```

- [ ] Added to Production
- [ ] Added to Preview

### Variable #5: VITE_INSTAGRAM_HANDLE

```
Name:        VITE_INSTAGRAM_HANDLE
Value:       tokolezatmagelang
Environment: Production + Preview
```

- [ ] Added to Production
- [ ] Added to Preview

### Variable #6: VITE_FACEBOOK_HANDLE

```
Name:        VITE_FACEBOOK_HANDLE
Value:       pusatoleholehlezat
Environment: Production + Preview
```

- [ ] Added to Production
- [ ] Added to Preview

### Variable #7: VITE_GOOGLE_MAPS_API_KEY (Optional)

```
Name:        VITE_GOOGLE_MAPS_API_KEY
Value:       [YOUR_ACTUAL_API_KEY]
Environment: Production + Preview
```

**Cara dapatkan:**
1. Buka https://console.cloud.google.com
2. Create/select project
3. Enable APIs: "Maps Embed API" & "Places API"
4. Create API Key (Credentials)
5. Restrict to domain `pusatoleholehlezat.com`

- [ ] Added to Production (jika ada API key)
- [ ] Added to Preview (jika ada API key)

### Variable #8: VITE_GOOGLE_PLACES_ID (Optional)

```
Name:        VITE_GOOGLE_PLACES_ID
Value:       [YOUR_PLACE_ID]
Environment: Production + Preview
```

**Cara dapatkan:**
1. Buka Google Maps: https://maps.google.com
2. Cari: "Pusat Oleh-Oleh Lezat" atau nama toko Anda
3. Copy Place ID dari URL
4. Atau gunakan: https://developers.google.com/maps/documentation/places/web-service/details

- [ ] Added to Production (jika ada Place ID)
- [ ] Added to Preview (jika ada Place ID)

### Variable #9: VITE_FB_PIXEL_ID (Optional)

```
Name:        VITE_FB_PIXEL_ID
Value:       [YOUR_PIXEL_ID]
Environment: Production
```

**Cara dapatkan:**
1. Buka Facebook Business Manager
2. Go to: Data Sources → Pixels
3. Copy Pixel ID

- [ ] Added to Production (jika ada Pixel)

### Variable #10: VITE_TIKTOK_HANDLE (Optional)

```
Name:        VITE_TIKTOK_HANDLE
Value:       [YOUR_TIKTOK_USERNAME]
Environment: Production + Preview
```

- [ ] Added (jika ada TikTok)

### Variable #11: VITE_FACEBOOK_PAGE_ID (Optional)

```
Name:        VITE_FACEBOOK_PAGE_ID
Value:       [YOUR_PAGE_ID]
Environment: Production
```

- [ ] Added (jika ada Facebook Page ID)

---

## ✅ Step 3: Verify Setup

1. [ ] Buka Vercel Dashboard → Settings → Environment Variables
2. [ ] Verify semua variable sudah ada (minimal 6 wajib)
3. [ ] Check production/preview assignment correct

---

## 🚀 Step 4: Redeploy Project

1. [ ] Buka Vercel Dashboard → **Deployments** tab
2. [ ] Cari deployment terbaru
3. [ ] Klik menu "..." (tiga titik)
4. [ ] Pilih: **"Redeploy"**
5. [ ] Tunggu deployment selesai (~3-5 menit)

**Status akan berubah menjadi:**
- ⏳ Building
- ✅ Ready (deployment berhasil)

---

## 🧪 Step 5: Test Production

1. [ ] Buka https://pusatoleholehlezat.com
2. [ ] Check page load correctly

### Test Instagram Link
1. [ ] Scroll ke footer
2. [ ] Click Instagram icon
3. [ ] Should open: https://instagram.com/tokolezatmagelang

### Test WhatsApp Link
1. [ ] Add product ke cart
2. [ ] Click "Pesan via WhatsApp"
3. [ ] Should open wa.me dengan nomor yang benar

### Test Google Analytics
1. [ ] Open browser Developer Tools (F12)
2. [ ] Go to Console tab
3. [ ] Paste:
   ```javascript
   console.log('GA ID:', import.meta.env.VITE_GA_ID);
   ```
4. [ ] Should print: `GA ID: G-LG80GBQEFP`

### Test Maps (jika ada API key)
1. [ ] Go to Contact page
2. [ ] Check maps embed loaded
3. [ ] No error messages

---

## 🔍 Troubleshooting

### Maps tidak tampil?
- [ ] Check VITE_GOOGLE_MAPS_API_KEY valid
- [ ] Check API key restriction in Google Cloud Console
- [ ] Wait 5-10 minutes untuk API key propagation
- [ ] Clear browser cache

### WhatsApp link tidak works?
- [ ] Check VITE_ADMIN_WHATSAPP format: `62XXXXXXXXXX` (must start with 62)
- [ ] Check number is 11-13 digits total
- [ ] Manual test: https://wa.me/6285122614122

### Variables tidak load?
- [ ] Check variable names are EXACT (case-sensitive)
- [ ] Check all names punya prefix `VITE_`
- [ ] Redeploy project
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Deployment failed?
- [ ] Check deployment logs: Vercel → Deployments → Click failed deployment
- [ ] Look for error messages
- [ ] Verify variable values tidak ada special characters

---

## 📞 Need Help?

1. Check `VERCEL_SETUP.md` untuk dokumentasi lengkap
2. Check Vercel deployment logs untuk error details
3. Check browser console (F12) untuk client-side errors
4. Verify credentials di source platform (Google Cloud, Facebook, etc)

---

## ✨ Success Checklist

- [ ] All 6+ required variables added
- [ ] Redeploy completed successfully
- [ ] Production site loads correctly
- [ ] Instagram link works
- [ ] WhatsApp link works
- [ ] Google Analytics tracking (if set up)
- [ ] Maps embed works (if API key provided)

**Selamat! Setup sudah selesai! 🎉**

---

**Last Updated**: November 26, 2025
**Version**: 1.0
