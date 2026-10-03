@echo off
title KJ Enterprises - Shopify Theme Push
color 0A
echo.
echo  ================================================
echo    KJ Enterprises ^| Shopify Theme Deployer
echo  ================================================
echo.
echo  Store: jruvgv-2v.myshopify.com
echo  Theme: KJ Enterprises - Luxury Home Textiles
echo.
echo  IMPORTANT: When a LINK appears below...
echo  1. CLICK the link (or copy to browser)
echo  2. Log in to Shopify
echo  3. Click ALLOW button
echo  4. Come back here - upload starts automatically!
echo.
echo  ================================================
echo.
cd /d "C:\Users\kmjyo\OneDrive\Documents\shopify"

echo  [1/2] Pushing theme files...
shopify theme push --store jruvgv-2v.myshopify.com --theme 189086499123 --only "templates/index.json" --only "config/settings_data.json"

echo.
if %ERRORLEVEL% EQU 0 (
    echo  ================================================
    echo    Upload SUCCESS! No errors found!
    echo  ================================================
    echo.
    echo  Your theme preview:
    echo  https://jruvgv-2v.myshopify.com?preview_theme_id=189086499123
    echo.
    echo  Press any key to PUBLISH theme as LIVE...
    pause
    echo.
    echo  [2/2] Publishing theme LIVE...
    shopify theme publish --store jruvgv-2v.myshopify.com --theme 189086499123
    echo.
    echo  ================================================
    echo    DONE! Visit https://jruvgv-2v.myshopify.com
    echo  ================================================
) else (
    echo  There were warnings. Check above for details.
    echo  Preview: https://jruvgv-2v.myshopify.com?preview_theme_id=189086499123
)
echo.
pause
