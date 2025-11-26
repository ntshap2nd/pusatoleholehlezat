# 🚀 Vercel Environment Setup - Summary

Panduan singkat untuk setup environment variables Toko Lezat di Vercel Production.

---

## 📌 Quick Links

1. **Setup Checklist** (step-by-step guide): [`VERCEL_SETUP_CHECKLIST.md`](./VERCEL_SETUP_CHECKLIST.md)
2. **Detailed Documentation**: [`VERCEL_SETUP.md`](./VERCEL_SETUP.md)
3. **Setup Script** (automated): `scripts/setup-vercel-env.sh`

---

## ⚡ Quick Start (5 Minutes)

### 1️⃣ Open Vercel Dashboard

Go to: https://vercel.com/dashboard
- Select project: **toko-lezat**
- Go to: **Settings** → **Environment Variables**

### 2️⃣ Add These 6 Variables

Copy-paste these values directly:

| Variable | Value | Environment |
|----------|-------|-------------|
| `VITE_SITE_DOMAIN` | `https://pusatoleholehlezat.com` | Production |
| `VITE_GA_ID` | `G-LG80GBQEFP` | Production + Preview |
| `VITE_ADMIN_WHATSAPP` | `6285122614122` | Production + Preview |
| `VITE_ADMIN_EMAIL` | `admin@pusatoleholehlezat.com` | Production + Preview |
| `VITE_INSTAGRAM_HANDLE` | `tokolezatmagelang` | Production + Preview |
| `VITE_FACEBOOK_HANDLE` | `pusatoleholehlezat` | Production + Preview |

### 3️⃣ (Optional) Add API Keys

Jika Anda punya:

| Variable | Your Value | Environment |
|----------|-----------|-------------|
| `VITE_GOOGLE_MAPS_API_KEY` | [Get from Google Cloud] | Production + Preview |
| `VITE_GOOGLE_PLACES_ID` | [Get from Google Maps] | Production + Preview |
| `VITE_FB_PIXEL_ID` | [Get from Facebook] | Production |

### 4️⃣ Redeploy

- Go to: **Deployments**
- Click "..." on latest deployment
- Select: **Redeploy**
- Wait ~3-5 minutes

### 5️⃣ Test

- Visit: https://pusatoleholehlezat.com
- Test Instagram link in footer
- Test WhatsApp checkout
- Check browser console for GA

**Done! ✅**

---

## 🎯 What This Does

### Before (Hardcoded)
```typescript
// 40+ files with hardcoded values
const BUSINESS_CONTACT = {
  whatsapp: "6285122614122",
  address: "Jl. Ikhlas Blok D1 No.1, Magelang",
  // ... more hardcoded values
}
```

### After (Environment Variables)
```typescript
// 1 centralized config
const BUSINESS_CONTACT = {
  whatsapp: import.meta.env.VITE_ADMIN_WHATSAPP,  // From Vercel env
  address: import.meta.env.VITE_ADDRESS,           // From Vercel env
  // ... all dynamic from env
}
```

**Benefits:**
- ✅ No hardcoded values
- ✅ Easy to change domain/contact info
- ✅ Different values per environment (dev/staging/prod)
- ✅ Secure (API keys not in code)
- ✅ Production-ready

---

## 📚 Documentation Structure

### For Quick Setup
→ See: **`VERCEL_SETUP_CHECKLIST.md`**
- Step-by-step checklist
- Copy-paste values
- ~10 minutes

### For Detailed Information
→ See: **`VERCEL_SETUP.md`**
- Full documentation
- Security best practices
- Troubleshooting guide
- API key generation steps
- ~20-30 minutes read

### For Automated Setup (Advanced)
→ Run: `bash scripts/setup-vercel-env.sh`
- Automated Vercel CLI script
- Requires `vercel` CLI installed
- Requires manual credential input

---

## 🔐 Credentials You Need

### Already Have ✅
- [ ] WhatsApp: `6285122614122`
- [ ] Instagram: `tokolezatmagelang`
- [ ] Facebook: `pusatoleholehlezat`
- [ ] Email: `admin@pusatoleholehlezat.com`
- [ ] GA ID: `G-LG80GBQEFP`
- [ ] Domain: `pusatoleholehlezat.com`

### Need to Get 🔑

#### Google Maps API Key
1. Go to: https://console.cloud.google.com
2. Create/select project
3. Enable: "Maps Embed API" & "Places API"
4. Create API Key (Credentials)
5. Restrict to domain: `pusatoleholehlezat.com`

#### Google Places ID (for reviews)
1. Go to: https://maps.google.com
2. Search: "Pusat Oleh-Oleh Lezat"
3. Copy Place ID from URL

#### Facebook Pixel ID (optional)
1. Go to: https://business.facebook.com
2. Data Sources → Pixels
3. Copy Pixel ID

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Vercel Dashboard shows all 6+ variables
- [ ] Redeploy completed successfully
- [ ] Production site loads at https://pusatoleholehlezat.com
- [ ] Instagram link in footer works
- [ ] WhatsApp checkout link works
- [ ] No console errors in browser DevTools

---

## 🆘 Need Help?

### Issue: Variables not loading
- **Check**: Variable names are EXACT (case-sensitive) with `VITE_` prefix
- **Fix**: Redeploy project in Vercel

### Issue: Maps not showing
- **Check**: `VITE_GOOGLE_MAPS_API_KEY` is set
- **Fix**: Enable APIs in Google Cloud Console, wait 5-10 min

### Issue: WhatsApp link broken
- **Check**: Number format is `62XXXXXXXXXX` (11-13 digits, starts with 62)
- **Fix**: Update `VITE_ADMIN_WHATSAPP` value

### More Help
- See: `VERCEL_SETUP.md` → "Common Issues & Troubleshooting"
- Check: Vercel deployment logs for errors
- Check: Browser console (F12) for client errors

---

## 🚀 Next Steps

1. **Open Vercel Dashboard** → https://vercel.com/dashboard
2. **Select project** → toko-lezat
3. **Go to Settings** → Environment Variables
4. **Add 6 required variables** (see table above)
5. **Add optional variables** (API keys if you have them)
6. **Redeploy** → Click deployment → Redeploy
7. **Test** → Visit https://pusatoleholehlezat.com

**Total time: ~15-20 minutes**

---

## 📖 File References

- **Config layer**: `src/config/` (5 files)
  - `site-config.ts` - Domain & site settings
  - `business-contact.ts` - Contact info
  - `analytics-config.ts` - GA & Pixel config
  - `social-media.ts` - Social links
  - `maps-config.ts` - Maps API config

- **Environment setup**: Root directory
  - `.env.example` - Template with all variables
  - `.env.local` - Local dev (git-ignored)
  - `vercel.json` - Vercel configuration

- **Documentation**: Root directory
  - `VERCEL_SETUP.md` - Full documentation
  - `VERCEL_SETUP_CHECKLIST.md` - Step-by-step checklist
  - `VERCEL_SETUP_SUMMARY.md` - This file

---

## ✨ Benefits After Setup

| Before | After |
|--------|-------|
| 40+ hardcoded values | 1 env configuration |
| Difficult to change domain | Just update 1 variable |
| Secrets in code repo | All secrets in Vercel (secure) |
| Different for dev/prod | Easy environment management |
| Preview deployments broken | Works with any domain |

---

**Created**: November 26, 2025  
**Status**: Ready for Production  
**Estimated setup time**: 15-20 minutes

Next: Follow the checklist in `VERCEL_SETUP_CHECKLIST.md` 👉
