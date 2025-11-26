# 🎯 Quick Reference - Vercel Environment Variables

**Print this page or keep it open while setting up!**

---

## 📋 6 Required Variables (Must Have)

Copy-paste these exactly:

```
┌─────────────────────────────────────────────────────────┐
│ VITE_SITE_DOMAIN                                        │
│ Value: https://pusatoleholehlezat.com                  │
│ Env: Production                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_GA_ID                                              │
│ Value: G-LG80GBQEFP                                     │
│ Env: Production + Preview                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_ADMIN_WHATSAPP                                     │
│ Value: 6285122614122                                    │
│ Env: Production + Preview                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_ADMIN_EMAIL                                        │
│ Value: admin@pusatoleholehlezat.com                    │
│ Env: Production + Preview                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_INSTAGRAM_HANDLE                                   │
│ Value: tokolezatmagelang                               │
│ Env: Production + Preview                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_FACEBOOK_HANDLE                                    │
│ Value: pusatoleholehlezat                              │
│ Env: Production + Preview                              │
└─────────────────────────────────────────────────────────┘
```

---

## 🔑 3 Optional Variables (Get If You Have)

```
┌─────────────────────────────────────────────────────────┐
│ VITE_GOOGLE_MAPS_API_KEY                                │
│ Value: [Get from Google Cloud Console]                 │
│ Env: Production + Preview                              │
│ See: GET_API_KEYS.md → Google Maps API Key            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_GOOGLE_PLACES_ID                                   │
│ Value: [Get from Google Maps]                          │
│ Env: Production + Preview                              │
│ See: GET_API_KEYS.md → Google Places ID               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ VITE_FB_PIXEL_ID                                        │
│ Value: [Get from Meta Business Manager]                │
│ Env: Production (only if using)                        │
│ See: GET_API_KEYS.md → Facebook Pixel ID              │
└─────────────────────────────────────────────────────────┘
```

---

## 📍 Where to Add These

1. Go to: **https://vercel.com/dashboard**
2. Select: **toko-lezat** project
3. Click: **Settings** tab
4. Click: **Environment Variables**
5. For each variable:
   - Click **"Add New"** button
   - Enter **Name**
   - Enter **Value**
   - Select **Environment** (Production/Preview)
   - Click **"Save"**

---

## 🚀 After Adding All Variables

1. Go to: **Deployments** tab
2. Find latest deployment
3. Click: **"..."** (three dots menu)
4. Click: **"Redeploy"**
5. Wait for: ✅ **Ready** status (~3-5 min)
6. Visit: **https://pusatoleholehlezat.com**

---

## ✅ Quick Test Checklist

After redeploy, check these:

- [ ] Site loads without errors
- [ ] Instagram link in footer works
- [ ] WhatsApp link opens wa.me
- [ ] No console errors (F12 → Console)
- [ ] Maps loads (if API key added)
- [ ] GA working (if you can verify)

---

## 🎨 Copy-Paste Blocks

### Variable Block Template
```
Name:        VITE_XXXXXXX
Value:       [YOUR_VALUE]
Environment: Production
```

### For Production + Preview
```
Step 1:
Name:        VITE_XXXXXXX
Value:       [YOUR_VALUE]
Environment: Production
→ Click Save

Step 2:
Name:        VITE_XXXXXXX
Value:       [YOUR_VALUE]
Environment: Preview
→ Click Save
```

---

## 📞 Issues Quick Fix

| Issue | Check | Fix |
|-------|-------|-----|
| Variables not loading | Variable names exact? | Redeploy |
| Maps not showing | API key set? | Enable APIs in Google Cloud |
| WhatsApp broken | Number format `62...`? | Check VITE_ADMIN_WHATSAPP |
| Instagram link wrong | Handle updated? | Check VITE_INSTAGRAM_HANDLE |
| Site not updating | Redeploy done? | Go to Deployments → Redeploy |

---

## 💡 Pro Tips

1. **Add to Production first**, then Preview (easier to track)
2. **Redeploy immediately** after adding all variables
3. **Test on mobile** - WA link better on mobile
4. **Clear browser cache** if changes don't show
5. **Check deployment logs** if deployment fails

---

## ⏱️ Timeline

| Step | Time |
|------|------|
| Get required values | 0 min (already have) |
| Add 6 required variables | 5 min |
| Add 3 optional variables | 5 min (if you have keys) |
| Redeploy | 3-5 min |
| Test | 2 min |
| **TOTAL** | **~15-20 min** |

---

## 📖 Full Documentation

For more details, see:
- `VERCEL_SETUP_CHECKLIST.md` - Step-by-step guide
- `VERCEL_SETUP.md` - Complete documentation
- `GET_API_KEYS.md` - How to get API keys
- `VERCEL_SETUP_SUMMARY.md` - Overview

---

**Created**: November 26, 2025
**Keep this tab open while setting up!** 👆
