# Vercel Environment Setup Guide

> Panduan lengkap untuk setup environment variables di Vercel untuk production deployment

## 📋 Daftar Environment Variables

Berikut 11 environment variables yang perlu dikonfigurasi di Vercel Dashboard:

### 1. Site Configuration
- **Variable**: `VITE_SITE_DOMAIN`
- **Value**: `https://pusatoleholehlezat.com`
- **Deskripsi**: Domain website yang akan digunakan di production
- **Jenis**: Production only
- **Catatan**: Ganti dengan domain baru jika berbeda

### 2. Google Analytics 4
- **Variable**: `VITE_GA_ID`
- **Value**: `G-LG80GBQEFP`
- **Deskripsi**: Google Analytics Measurement ID
- **Jenis**: Production + Preview (sama untuk semua environment)
- **Cara dapat**: Google Analytics → Admin → Property → Data Streams → Measurement ID

### 3. Facebook Pixel (Optional)
- **Variable**: `VITE_FB_PIXEL_ID`
- **Value**: `` (kosong jika tidak ada)
- **Deskripsi**: Facebook Pixel ID untuk conversion tracking
- **Jenis**: Production only
- **Cara dapat**: Meta Business Manager → Data Sources → Pixels

### 4. Google Maps API Key
- **Variable**: `VITE_GOOGLE_MAPS_API_KEY`
- **Value**: `YOUR_ACTUAL_API_KEY`
- **Deskripsi**: API key untuk Google Maps Embed & Places API
- **Jenis**: Production + Preview
- **Cara dapat**: 
  1. Google Cloud Console → APIs & Services
  2. Enable: Maps Embed API & Places API
  3. Create API Key
  4. Restrict to website domain untuk security

### 5. Google Places ID
- **Variable**: `VITE_GOOGLE_PLACES_ID`
- **Value**: `YOUR_ACTUAL_PLACE_ID`
- **Deskripsi**: Google Places ID untuk business reviews
- **Jenis**: Production only
- **Cara dapat**:
  1. Google Maps → Cari "Pusat Oleh-Oleh Lezat"
  2. Copy Place ID dari URL: `https://www.google.com/maps/place/...?...&place_id=ChIJ...`
  3. Atau gunakan: https://developers.google.com/maps/documentation/places/web-service/details

### 6. WhatsApp Number
- **Variable**: `VITE_ADMIN_WHATSAPP`
- **Value**: `6285122614122`
- **Deskripsi**: WhatsApp number untuk checkout/customer service
- **Jenis**: Production + Preview (sama untuk semua)
- **Format**: Harus format `62xxxxxxxxxx` atau `8xxxxxxxxxx`

### 7. Admin Email
- **Variable**: `VITE_ADMIN_EMAIL`
- **Value**: `admin@pusatoleholehlezat.com`
- **Deskripsi**: Email untuk customer contact
- **Jenis**: Production + Preview
- **Catatan**: Bisa berbeda antara dev/prod

### 8. Instagram Handle
- **Variable**: `VITE_INSTAGRAM_HANDLE`
- **Value**: `tokolezatmagelang`
- **Deskripsi**: Instagram username (tanpa @)
- **Jenis**: Production + Preview
- **Format**: username saja, tanpa @

### 9. Facebook Handle
- **Variable**: `VITE_FACEBOOK_HANDLE`
- **Value**: `pusatoleholehlezat`
- **Deskripsi**: Facebook page name atau handle
- **Jenis**: Production + Preview
- **Format**: handle saja, tanpa `/`

### 10. TikTok Handle (Optional)
- **Variable**: `VITE_TIKTOK_HANDLE`
- **Value**: `` (kosong jika tidak ada)
- **Deskripsi**: TikTok username
- **Jenis**: Optional
- **Format**: username saja, tanpa @

### 11. Facebook Page ID (Optional)
- **Variable**: `VITE_FACEBOOK_PAGE_ID`
- **Value**: `` (kosong jika tidak ada)
- **Deskripsi**: Facebook page ID untuk pixel targeting
- **Jenis**: Optional
- **Cara dapat**: Facebook Business Manager → Pages → Settings → Page ID

---

## 🚀 Step-by-Step Setup di Vercel Dashboard

### Prerequisites
- Vercel account dengan akses ke project
- Semua API keys & credentials sudah disiapkan (lihat di atas)

### Langkah 1: Buka Vercel Dashboard

1. Buka https://vercel.com/dashboard
2. Pilih project: **toko-lezat** (atau nama project Anda)
3. Klik tab: **Settings**

### Langkah 2: Navigasi ke Environment Variables

1. Di sidebar Settings, pilih: **Environment Variables**
2. Atau akses langsung: `https://vercel.com/[username]/[project]/settings/environment-variables`

### Langkah 3: Add Environment Variables

Untuk setiap variable, ikuti langkah ini:

1. **Klik tombol "Add New"** atau **"Add Environment Variable"**
2. **Nama**: Masukkan variable name (contoh: `VITE_SITE_DOMAIN`)
3. **Value**: Masukkan value yang sesuai
4. **Environment**: Pilih yang sesuai:
   - **Production** - Untuk production domain saja
   - **Preview** - Untuk preview/staging deployments
   - **Development** - Untuk local development (rare, biasanya pakai .env.local)
   - **Atau semua** - Jika sama untuk semua environment

5. **Klik "Save"**

### Langkah 4: Konfigurasi Per Environment

**Recommended setup:**

| Variable | Production | Preview | Development |
|----------|-----------|---------|-------------|
| `VITE_SITE_DOMAIN` | ✅ `https://pusatoleholehlezat.com` | ❌ (tidak diperlukan) | ❌ (gunakan .env.local) |
| `VITE_GA_ID` | ✅ `G-LG80GBQEFP` | ✅ `G-LG80GBQEFP` | ✅ `G-LG80GBQEFP` |
| `VITE_FB_PIXEL_ID` | ✅ (jika ada) | ❌ | ❌ |
| `VITE_GOOGLE_MAPS_API_KEY` | ✅ API Key | ✅ API Key | ✅ API Key |
| `VITE_GOOGLE_PLACES_ID` | ✅ Place ID | ❌ | ❌ |
| `VITE_ADMIN_WHATSAPP` | ✅ | ✅ | ✅ |
| `VITE_ADMIN_EMAIL` | ✅ `admin@pusatoleholehlezat.com` | ✅ | ✅ |
| `VITE_INSTAGRAM_HANDLE` | ✅ | ✅ | ✅ |
| `VITE_FACEBOOK_HANDLE` | ✅ | ✅ | ✅ |
| `VITE_TIKTOK_HANDLE` | ✅ (jika ada) | ✅ (jika ada) | ✅ (jika ada) |
| `VITE_FACEBOOK_PAGE_ID` | ✅ (jika ada) | ❌ | ❌ |

---

## 🔐 Security Best Practices

### API Keys Protection

1. **Google Maps API Key**: 
   - Restrict ke domain `pusatoleholehlezat.com` di Google Cloud Console
   - Batasi ke API methods: Maps Embed, Places API
   - Monitor usage di Cloud Console

2. **Facebook Pixel ID**:
   - Bersifat public (tidak perlu dirahasiakan)
   - Tapi tetap simpan di env untuk kemudahan maintenance

3. **WhatsApp Number**:
   - Tidak perlu dirahasiakan (public business info)
   - Tapi simpan di env untuk centralized management

### Environment Isolation

- **Production**: Gunakan real credentials
- **Preview**: Bisa gunakan same credentials atau separate (test account)
- **Development**: Gunakan `.env.local` (git-ignored)

---

## ✅ Verification Checklist

Setelah setup, lakukan verifikasi:

### 1. Check Environment Variables di Dashboard
- [ ] Buka Vercel Dashboard → Settings → Environment Variables
- [ ] Verify semua 11 variables sudah ada
- [ ] Check staging/production designation correct

### 2. Trigger Redeploy
- [ ] Buka Vercel Dashboard → Deployments
- [ ] Klik tombol "..." pada latest deployment
- [ ] Pilih "Redeploy" untuk force rebuild dengan env variables baru
- [ ] Tunggu deployment selesai (biasanya 2-5 menit)

### 3. Test Production Site
- [ ] Buka https://pusatoleholehlezat.com
- [ ] Check browser console untuk GA tracking (console message)
- [ ] Verify Instagram links point ke correct handle
- [ ] Test WhatsApp link di Cart (harus open wa.me dengan correct number)
- [ ] Check Maps embed loaded (jika API key valid)

### 4. Check Build Logs
- [ ] Vercel Dashboard → Deployments → Click latest
- [ ] Scroll ke "Build Logs"
- [ ] Verify tidak ada error tentang missing env variables
- [ ] Verify tidak ada error tentang configuration

### 5. Validate in Browser DevTools
```javascript
// Di browser console, paste ini:
console.log('Config values:');
console.log('VITE_SITE_DOMAIN:', import.meta.env.VITE_SITE_DOMAIN);
console.log('VITE_GA_ID:', import.meta.env.VITE_GA_ID);
console.log('VITE_ADMIN_WHATSAPP:', import.meta.env.VITE_ADMIN_WHATSAPP);
```

---

## 🚨 Common Issues & Troubleshooting

### Issue 1: "Environment variables not loading"

**Symptoms**: 
- Env variables kosong di site
- Fallback values dipakai (hardcoded defaults)

**Solution**:
1. Verify variable names exact (case-sensitive, dengan `VITE_` prefix)
2. Redeploy: Dashboard → Deployments → Latest → Redeploy
3. Clear browser cache (Ctrl+Shift+Del)
4. Check "Advanced" section untuk hidden variables

### Issue 2: "Domain masih hardcoded"

**Symptoms**:
- Site masih pakai `pusatoleholehlezat.com` padahal atur domain baru

**Solution**:
1. Pastikan `VITE_SITE_DOMAIN` ada dan correct di Production env
2. Redeploy project
3. Verify di deployment logs tidak ada error

### Issue 3: "Maps tidak tampil"

**Symptoms**:
- Google Maps embed tidak load
- Console error: "API key invalid"

**Solution**:
1. Verify `VITE_GOOGLE_MAPS_API_KEY` correct di Vercel
2. Check API key di Google Cloud Console:
   - Pastikan Maps Embed API & Places API enabled
   - Pastikan API key restriction correct (domain whitelist)
3. Wait 5-10 menit untuk API key propagation
4. Redeploy

### Issue 4: "WhatsApp link tidak works"

**Symptoms**:
- WhatsApp link not opening
- Number format error

**Solution**:
1. Check `VITE_ADMIN_WHATSAPP` format: `62XXXXXXXXXX`
2. Verify number is correct (11-13 digits total)
3. Config has auto-formatter (`getFormattedNumber()`)
4. Manual test: https://wa.me/6285122614122

---

## 📚 Reference Links

### Documentation
- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Google Maps API Documentation](https://developers.google.com/maps/documentation)
- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)

### Tools
- [Google Cloud Console](https://console.cloud.google.com)
- [Facebook Business Manager](https://business.facebook.com)
- [Google Analytics](https://analytics.google.com)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

## 🔄 Maintenance

### Updating Variables

1. Buka Vercel Dashboard → Settings → Environment Variables
2. Click variable yang mau diubah
3. Update value
4. Click "Save"
5. Redeploy project untuk apply changes

### Retiring Variables

1. Backup old value (copy ke notes)
2. Delete variable dari Vercel
3. Update `.env.example` jika variable deprecated
4. Remove dari config files jika tidak dipakai lagi

### Adding New Variables

Jika nanti perlu add variable baru:

1. Add ke `.env.example` (documentation)
2. Update config file yang relevant (`src/config/*.ts`)
3. Use variable di component
4. Add ke Vercel Environment Variables
5. Redeploy

---

## ✨ Next Steps

1. ✅ Kumpulkan semua credentials & API keys
2. ✅ Buka Vercel Dashboard
3. ✅ Add 11 environment variables (ikuti tabel di atas)
4. ✅ Redeploy project
5. ✅ Verify production site working correctly
6. ✅ Test all critical features (Maps, GA, WhatsApp, Instagram)

**Total waktu**: ~15-20 menit untuk setup + 5-10 menit untuk deployment

---

## 📞 Support

Jika ada issue:
1. Check bagian "Common Issues & Troubleshooting" di atas
2. Check Vercel deployment logs
3. Check browser console untuk error messages
4. Verify credentials di source platform (Google Cloud, Facebook, etc)

**Good luck! 🚀**
