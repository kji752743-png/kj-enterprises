@echo off
title KJ Enterprises - New Store Theme Push
color 0A
echo.
echo  ================================================
echo    KJ Enterprises ^| NEW STORE Theme Deployer
echo  ================================================
echo.
echo  New Store: kj-enterprises-store.myshopify.com
echo  Theme: KJ Enterprises - Luxury Home Textiles
echo  Mode: DRAFT (Unpublished)
echo.
echo  IMPORTANT: Jab link aaye TURANT click karo!
echo  1. Link click karo
echo  2. Shopify login karo
echo  3. Allow click karo
echo  4. Wapas aao - upload auto start!
echo.
echo  ================================================
echo.
cd /d "C:\Users\kmjyo\OneDrive\Documents\shopify"

echo  [1/1] Pushing theme as DRAFT to new store...
echo.
shopify theme push --store kj-enterprises-store.myshopify.com --unpublished --theme "KJ Enterprises - Luxury Home Textiles"

echo.
echo  ================================================
echo    Upload complete! Theme is in DRAFT mode.
echo    Check Shopify Admin to preview.
echo  ================================================
echo.
pause
