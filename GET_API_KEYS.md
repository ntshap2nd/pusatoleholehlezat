# 🔑 Getting API Keys & Credentials

Panduan langkah demi langkah untuk mendapatkan semua API keys dan credentials yang dibutuhkan.

---

## 📋 Checklist Credentials

### ✅ Already Available (No Action Needed)

- [x] WhatsApp Number: `6285122614122`
- [x] Instagram Handle: `tokolezatmagelang`
- [x] Facebook Handle: `pusatoleholehlezat`
- [x] Email: `admin@pusatoleholehlezat.com`
- [x] Google Analytics ID: `G-LG80GBQEFP`
- [x] Production Domain: `pusatoleholehlezat.com`

### ⚠️ Need to Get (Follow Steps Below)

- [ ] Google Maps API Key (15-20 min)
- [ ] Google Places ID (5 min)
- [ ] Facebook Pixel ID (optional, 5 min)

---

## 🗺️ Google Maps API Key

### Why Needed?
- Untuk embed Google Maps di halaman Contact/Location
- Untuk Places API (reviews widget)

### Time Required: 15-20 minutes

### Step-by-Step Guide

#### 1. Go to Google Cloud Console
- URL: https://console.cloud.google.com
- Login dengan Google account yang manage business Anda

#### 2. Create or Select Project
- If new: Click "Create Project"
  - Name: `Toko Lezat`
  - Organization: Leave blank (or select yours)
  - Click "Create"
- If existing: Select existing project

#### 3. Enable Required APIs
- On the left menu, click: **APIs & Services** → **Library**
- Search & enable these APIs:
  
  **#1: Maps Embed API**
  1. Search: `Maps Embed API`
  2. Click result
  3. Click **"Enable"** button
  4. Wait for confirmation
  
  **#2: Places API**
  1. Search: `Places API`
  2. Click result
  3. Click **"Enable"** button
  4. Wait for confirmation

#### 4. Create API Key
- Go to: **APIs & Services** → **Credentials**
- Click blue button: **"Create Credentials"** → **"API Key"**
- Pop-up appears dengan API Key
- **COPY this key immediately!** (You'll need it)
- Example: `AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### 5. Restrict API Key (IMPORTANT for Security)
- Click the API Key you just created
- Go to section: **"API restrictions"**
- Change from "All APIs" → Select specific APIs:
  - [x] Maps Embed API
  - [x] Places API
  
- Go to section: **"Application restrictions"**
- Select: **"HTTP referrers (web sites)"**
- Add restrictions:
  ```
  https://pusatoleholehlezat.com/*
  https://*.pusatoleholehlezat.com/*
  https://vercel.app/*
  ```
  (Allow Vercel preview deployments)

- Click **"Save"**

#### 6. Verify It Works
```javascript
// Test in browser console at pusatoleholehlezat.com:
console.log('Maps API Key loaded:', typeof google.maps);
```

### Result
✅ You now have: **Google Maps API Key**
Example format: `AIzaSy...` (starts with "AIzaSy")

### Next
→ Go to: **Vercel Setup Step 7 (Google Maps API Key)**
→ Value: Your API Key
→ Environment: Production + Preview

---

## 📍 Google Places ID

### Why Needed?
- Untuk Google Reviews widget (menampilkan review pelanggan)
- Untuk Place Details di Google Maps

### Time Required: 5 minutes

### Step-by-Step Guide

#### 1. Go to Google Maps
- URL: https://maps.google.com

#### 2. Search for Your Business
- Search: `Pusat Oleh-Oleh Lezat Magelang`
- Or: Jl. Ikhlas Blok D1 No.1, Magelang
- Click correct location in results

#### 3. Extract Place ID from URL
When you click on location, URL changes to:
```
https://www.google.com/maps/place/.../@-7.xxx,110.xxx,17z/data=!...&place_id=ChIJ...
```

**Place ID format:** `ChIJ` followed by alphanumeric
Example: `ChIJXXXXXXXXXXXXXXXXXXXX`

**COPY the place_id value!**

#### 4. Alternative: Use Places API
If you can't find it in URL:

1. Go to: https://developers.google.com/maps/documentation/places/web-service/details
2. Scroll to "Place IDs" section
3. Use "Find Place" request:
   ```
   https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Pusat%20Oleh-Oleh%20Lezat&inputtype=textquery&fields=place_id&key=YOUR_API_KEY
   ```
   (Replace YOUR_API_KEY with the one from previous step)
4. Result will show `place_id`

#### 5. Verify It Works
- Copy Place ID
- Paste in URL: `https://www.google.com/maps/place/?place_id=ChIJ...`
- Should open correct location

### Result
✅ You now have: **Google Places ID**
Example format: `ChIJXXXXXXXXXXXXXXXXXXXX`

### Next
→ Go to: **Vercel Setup Step 8 (Google Places ID)**
→ Value: Your Place ID
→ Environment: Production + Preview

---

## 📱 Facebook Pixel ID (Optional)

### Why Needed?
- Track conversions untuk Facebook Ads
- Remarketing campaigns
- **OPTIONAL** - Only if you do Facebook advertising

### Time Required: 5 minutes

### Prerequisites
- [ ] Have Facebook Business Account
- [ ] Have ad account setup
- [ ] Have business catalog/shop created

### Step-by-Step Guide

#### 1. Go to Meta Business Manager
- URL: https://business.facebook.com

#### 2. Navigate to Data Sources
- Left menu → **Data Sources**
- Or: Events Manager → Data Sources

#### 3. Create or Find Pixel
- If new: Click **"Create"** → **"Pixels"**
  - Name: `Toko Lezat Website`
  - Website: `pusatoleholehlezat.com`
  - Continue & setup
  
- If existing: Click existing pixel

#### 4. Get Pixel ID
- Go to: **Pixels** → Select your pixel
- Click **"Settings"** tab
- Look for: **"Pixel ID"** field
- Example: `123456789012345`

**COPY this ID!**

#### 5. Setup Pixel Events (Optional)
For better tracking, setup events:
- [ ] PageView (automatic)
- [ ] ViewContent (products viewed)
- [ ] AddToCart (cart added)
- [ ] Purchase (order completed)

Can be configured later in code.

#### 6. Verify It Works
- Install: [Facebook Pixel Helper Chrome Extension](https://chrome.google.com/webstore)
- Visit: https://pusatoleholehlezat.com
- Pixel Helper should show pixel loaded

### Result
✅ You now have: **Facebook Pixel ID** (Optional)
Example format: `123456789012345` (15 digits)

### Next
→ Go to: **Vercel Setup Step 9 (Facebook Pixel ID)**
→ Value: Your Pixel ID
→ Environment: Production (only if using ads)

---

## ✅ Credentials Summary Table

| Credential | Status | Format | Where to Get |
|------------|--------|--------|--------------|
| WhatsApp | ✅ Have | `62XXXXXXXXX` | Already have |
| Instagram | ✅ Have | `username` | Already have |
| Facebook | ✅ Have | `pagename` | Already have |
| Email | ✅ Have | `user@domain.com` | Already have |
| GA ID | ✅ Have | `G-XXXXXXXXX` | Already have |
| Domain | ✅ Have | `domain.com` | Already have |
| Maps API Key | ⚠️ TODO | `AIzaSy...` | Google Cloud Console |
| Places ID | ⚠️ TODO | `ChIJ...` | Google Maps |
| Pixel ID | ⚠️ OPTIONAL | `123...` | Meta Business Manager |

---

## 🔄 Summary of What To Do

### Step 1: Get Google Maps API Key ⏱️ 15-20 min
1. Go to Google Cloud Console
2. Create project or select existing
3. Enable: Maps Embed API & Places API
4. Create API Key
5. Restrict to your domain
6. **COPY the API Key**

### Step 2: Get Google Places ID ⏱️ 5 min
1. Go to Google Maps
2. Search your business location
3. Extract `place_id` from URL
4. **COPY the Place ID**

### Step 3 (Optional): Get Facebook Pixel ID ⏱️ 5 min
1. Go to Meta Business Manager
2. Create or select Pixel
3. Get Pixel ID
4. **COPY the Pixel ID**

### Step 4: Setup in Vercel ⏱️ 10 min
- Follow: `VERCEL_SETUP_CHECKLIST.md`
- Paste API keys into Vercel Environment Variables
- Redeploy

**Total time: ~30-40 minutes**

---

## 📞 Common Issues

### "API Key Invalid" Error
**Problem**: Maps not loading, error in console
**Solution**:
1. Verify API Key is correct (should start with `AIzaSy`)
2. Verify APIs are enabled in Google Cloud Console
3. Verify domain restriction includes your domain
4. Wait 5-10 minutes for changes to propagate
5. Clear browser cache (Ctrl+Shift+Delete)

### "Place ID Not Found"
**Problem**: Reviews widget not showing
**Solution**:
1. Verify Place ID format (should start with `ChIJ`)
2. Try searching location again in Google Maps
3. Verify it's the correct location
4. Copy full Place ID (usually 20+ characters)

### "Pixel Not Tracking"
**Problem**: Facebook Pixel Helper shows red
**Solution**:
1. Verify Pixel ID is correct (15 digits)
2. Verify Pixel is active in Business Manager
3. Install pixel code correctly (already in code)
4. Wait 24 hours for first events to show

---

## 🔐 Security Notes

### API Keys
- ✅ Safe to use in client-side code (Maps API)
- ✅ Safe to put in Vercel env (not exposed to users)
- ✅ Restrict via API key restrictions (set IP/domain)
- ❌ Never commit to git repository

### Place ID
- ✅ Public information (from public Google Maps)
- ✅ Safe in env variables
- ✅ No security risk

### Pixel ID
- ✅ Public information (advertisers need this)
- ✅ Safe in env variables
- ✅ No security risk

### WhatsApp/Instagram/Email
- ✅ Public business information
- ✅ Safe in env variables
- ✅ Already on your social profiles

---

## 📚 Reference Links

- [Google Cloud Console](https://console.cloud.google.com)
- [Google Maps API Docs](https://developers.google.com/maps/documentation)
- [Google Places API Docs](https://developers.google.com/maps/documentation/places)
- [Meta Business Manager](https://business.facebook.com)
- [Facebook Pixel Helper](https://chrome.google.com/webstore)

---

## ✨ What's Next?

After getting these credentials:

1. Go to: `VERCEL_SETUP_CHECKLIST.md`
2. Follow step-by-step to add to Vercel
3. Redeploy project
4. Test on production site

Estimated setup time: ~30-40 minutes total

Good luck! 🚀
