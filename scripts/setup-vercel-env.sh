#!/bin/bash

# Vercel Environment Variables Setup Script
# Script ini membantu setup environment variables di Vercel secara programmatic
# Requires: vercel CLI installed dan logged in

set -e  # Exit on error

echo "=================================================="
echo "Vercel Environment Variables Setup Script"
echo "=================================================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not installed"
    echo "Install with: npm install -g vercel"
    exit 1
fi

echo "✅ Vercel CLI found"
echo ""

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "⚠️  Not logged into Vercel. Please run:"
    echo "   vercel login"
    exit 1
fi

echo "✅ Logged into Vercel"
echo ""

# Define environment variables
declare -A PRODUCTION_VARS=(
    ["VITE_SITE_DOMAIN"]="https://pusatoleholehlezat.com"
    ["VITE_GA_ID"]="G-LG80GBQEFP"
    ["VITE_ADMIN_WHATSAPP"]="6285122614122"
    ["VITE_ADMIN_EMAIL"]="admin@pusatoleholehlezat.com"
    ["VITE_INSTAGRAM_HANDLE"]="tokolezatmagelang"
    ["VITE_FACEBOOK_HANDLE"]="pusatoleholehlezat"
)

declare -A ALL_ENV_VARS=(
    ["VITE_GA_ID"]="G-LG80GBQEFP"
    ["VITE_ADMIN_WHATSAPP"]="6285122614122"
    ["VITE_ADMIN_EMAIL"]="admin@pusatoleholehlezat.com"
    ["VITE_INSTAGRAM_HANDLE"]="tokolezatmagelang"
    ["VITE_FACEBOOK_HANDLE"]="pusatoleholehlezat"
)

declare -A OPTIONAL_VARS=(
    ["VITE_FB_PIXEL_ID"]=""
    ["VITE_GOOGLE_MAPS_API_KEY"]=""
    ["VITE_GOOGLE_PLACES_ID"]=""
    ["VITE_TIKTOK_HANDLE"]=""
    ["VITE_FACEBOOK_PAGE_ID"]=""
)

echo "This script will set up the following variables:"
echo ""
echo "📌 PRODUCTION ONLY:"
for key in "${!PRODUCTION_VARS[@]}"; do
    echo "   - $key"
done

echo ""
echo "📌 ALL ENVIRONMENTS (Production + Preview):"
for key in "${!ALL_ENV_VARS[@]}"; do
    echo "   - $key"
done

echo ""
echo "📌 OPTIONAL VARIABLES:"
for key in "${!OPTIONAL_VARS[@]}"; do
    echo "   - $key"
done

echo ""
echo "⚠️  BEFORE PROCEEDING:"
echo "1. Make sure you have prepared all API keys and credentials"
echo "2. Edit this script to add your actual API key values"
echo "3. Variables will be added to 'toko-lezat' project on Vercel"
echo ""

read -p "Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "=================================================="
echo "Starting setup..."
echo "=================================================="
echo ""

# Function to add environment variable
add_env_var() {
    local name=$1
    local value=$2
    local environment=$3
    
    if [ -z "$value" ]; then
        echo "⏭️  Skipping $name (value is empty)"
        return
    fi
    
    echo "➕ Adding: $name (env: $environment)"
    vercel env add "$name" "$environment" <<< "$value" 2>/dev/null || echo "⚠️  Could not set $name automatically"
}

# Add production-only variables
echo "Setting PRODUCTION variables..."
for key in "${!PRODUCTION_VARS[@]}"; do
    add_env_var "$key" "${PRODUCTION_VARS[$key]}" "production"
done

echo ""
echo "Setting ALL ENVIRONMENT variables..."
for key in "${!ALL_ENV_VARS[@]}"; do
    # Add to production
    add_env_var "$key" "${ALL_ENV_VARS[$key]}" "production"
    # Add to preview
    add_env_var "$key" "${ALL_ENV_VARS[$key]}" "preview"
done

echo ""
echo "=================================================="
echo "✅ Setup Complete!"
echo "=================================================="
echo ""
echo "Next steps:"
echo "1. Verify variables in Vercel Dashboard:"
echo "   https://vercel.com/dashboard/[project]/settings/environment-variables"
echo ""
echo "2. Add OPTIONAL variables manually if needed:"
for key in "${!OPTIONAL_VARS[@]}"; do
    echo "   - $key"
done
echo ""
echo "3. Redeploy project:"
echo "   vercel --prod"
echo ""
echo "4. Verify production site:"
echo "   https://pusatoleholehlezat.com"
echo ""

echo "Script completed!"
