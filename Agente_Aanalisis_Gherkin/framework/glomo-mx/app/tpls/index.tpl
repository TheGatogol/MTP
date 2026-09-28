<!DOCTYPE html>
<!-- htmllint lang-style="false" -->
<html lang="##lang##">
<!-- htmllint lang-style="$previous" -->
  <head>
    <title>BBVA México</title>
    <meta charset="utf-8"/>
    <meta name="description" content=""/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="msapplication-tap-highlight" content="no"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
    <!-- Chrome for Android theme color -->
    <meta name="theme-color" content="#072146"/>
    <!-- Tile color for Win8 -->
    <meta name="msapplication-TileColor" content="#072146"/>
    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="application-name" content=""/>
    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content="BBVA"/>
    <!-- Tile icon for Win8 (144x144) -->
    <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png"/>

    <!-- Web Application Manifest -->
    <link rel="manifest" href="manifest.json"/>

    <!-- Place favicon.ico in the `app/` directory -->
    <link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png"/>
    <link rel="apple-touch-icon" href="images/touch/apple-touch-icon.png"/>

    <!-- build:css styles/main.css -->
    <link rel="stylesheet" href="styles/main.css"/>
    <!-- endbuild-->

  </head>

  <body class="fullbleed layout vertical loading splash-loading">
    <div id="splash" class="splash">
      <img id="logo" class="logo logo--start ##splashLogoClass##" src="##splashLogo##" alt="BBVA" height="##splashLogoHeight##">
    </div>

    <div id="app__content"></div>

    <!-- build:js scripts/app-dist.js -->
    <script type=module src="scripts/app-module.js"></script>
    <script src="scripts/vendor/fontfaceobserver.standalone.js"></script>
    <!--<script src="scripts/app-environment.js"></script>-->
    <script
      type="text/javascript"
      src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"
    ></script>

    <!-- endbuild-->

    ##dtmLibrary##
    <div id="targetMbox" class="mboxDefault"></div>
  </body>

</html>
