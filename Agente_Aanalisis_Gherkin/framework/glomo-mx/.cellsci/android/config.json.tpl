{
  "basedir": ".",
  "appModule": "app",
  "sonarModule": [
    "app"
  ],
  "params": [

    /* Environment: Dev
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: QA
        - Set to consume DEVELOPMENT environment services
    */
    {
      "configCells": "androidDev",
      "flavorName": "MexicoDesaGoogle", // MexicoDesaHuawei
      "dimensionName": "",
      "buildType": "Qa",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Dev
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: QA
        - Set to consume DEVELOPMENT environment services
        - Run e2e tests
    */
    {
      "configCells": "androidDev",
      "flavorName": "MexicoDesa",
      "dimensionName": "",
      "buildType": "Qa",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key",
      "e2eCredentialId": "saucelabs-glomo-trial",
      "configE2E": ["_jenkins/android/backend-dev-sauce.js"],
      "e2ePlatform": "saucelabs",
      "galateaConnection": true,
      "sauceStorageServer": "https://api.eu-central-1.saucelabs.com/v1/storage",
      "e2eRerun": 1,
      "e2eFilters": ["smoke","acceptance","impact"],
      "testRunner": "pepino2+radish"
    },

    /* Environment: Ethical Hacking Dev without SSL Pinning
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Ehnossl
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Disabled
    */
    {
      "configCells": "androidDev",
      "flavorName": "MexicoDesaGoogle", // MexicoDesaHuawei
      "dimensionName": "",
      "buildType": "Ehnossl",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Ethical Hacking Dev with SSL Pinning
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Ehssl
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
    */
    {
      "configCells": "androidDev",
      "flavorName": "MexicoDesaGoogle", // MexicoDesaHuawei
      "dimensionName": "",
      "buildType": "Ehssl",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Ethical Hacking Dev with SSL Pinning and without root
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Noroot
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
    */
    {
      "configCells": "androidDev",
      "flavorName": "MexicoDesaGoogle", // MexicoDesaHuawei
      "dimensionName": "",
      "buildType": "Noroot",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Ethical Hacking Prod without SSL Pinning
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Ehnossl
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Disabled
    */
    {
      "configCells": "androidProd",
      "flavorName": "MexicoProdGoogle", // MexicoProdHuawei
      "dimensionName": "",
      "buildType": "Ehnossl",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Ethical Hacking Prod with SSL Pinning
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Ehssl
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
    */
    {
      "configCells": "androidProd",
      "flavorName": "MexicoProdGoogle", // MexicoProdHuawei
      "dimensionName": "",
      "buildType": "Ehssl",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Ethical Hacking Prod with SSL Pinning and without root
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Noroot
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
    */
    {
      "configCells": "androidProd",
      "flavorName": "MexicoProdGoogle", // MexicoProdHuawei
      "dimensionName": "",
      "buildType": "Noroot",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Prod
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: QA
        - Set to consume PRODUCTION environment services
    */
    {
      "configCells": "androidProd",
      "flavorName": "MexicoProdGoogle", // MexicoProdHuawei
      "dimensionName": "",
      "buildType": "Qa",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    },

    /* Environment: Release
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Release
        - Set to consume PRODUCTION environment services
        - Purpose: Be deployed to Store
    */
    {
      "configCells": "androidProd",
      "flavorName": "MexicoProdGoogle", // MexicoProdHuawei
      "dimensionName": "",
      "buildType": "Release",
      "keystoreFileId": "global_keystore_production_id",
      "keystorePasswordId": "global_keystore_production_password",
      "keystoreAliasId": "global_keystore_production_alias",
      "appBundle": true,
      "deploy": {
        "credentialsFile": "global_playstore_production",
        "packageName": "com.bbva.nxt_Mexico",
        "track": "internal"
      }
    },

    /* Environment: vBank
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Debug
        - Set to consume VBANK environment services
        - Runs e2e tests
    */
    {
      "configCells": "androidVbank",
      "flavorName": "MexicoVbankGoogle", // MexicoVbankHuawei
      "dimensionName": "",
      "buildType": "Debug",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key",
      "e2eCredentialId": "saucelabs-glomo-trial",
      "configE2E": ["_jenkins/android/vbank-sauce.js"],
      "e2ePlatform": "saucelabs",
      "galateaConnection": true,
      "sauceStorageServer": "https://api.eu-central-1.saucelabs.com/v1/storage",
      "e2eRerun": 1,
      "checkExecutedTest": true,
      "e2eFilters": ["smoke","acceptance","impact"],
      "testRunner": "pepino2+radish"
    },

    /* Environment: Virtual
       This configuration builds an application with:
        - Country: Mexico
        - Build Type: Debug
        - Set to consume VIRTUAL environment services
    */
    {
      "configCells": "androidVirtual",
      "flavorName": "MexicoVirtualGoogle", // MexicoVirtualHuawei
      "dimensionName": "",
      "buildType": "Debug",
      "keystoreFileId": "glomo_keystore_debug",
      "keystorePasswordId": "glomo_keystore_password_debug",
      "keystoreAliasId": "android_uy_key"
    }

    /*
    HUAWEI CONFIGURATIONS
    */
    {
      "configCells":"androidDev",
      "flavorName":"MexicoDesaHuawei",
      "dimensionName":"",
      "buildType":"Qa",
      "keystoreFileId":"glomo_keystore_debug",
      "keystorePasswordId":"glomo_keystore_password_debug",
      "keystoreAliasId":"android_uy_key"
    },
    {
      "configCells":"androidPreProd",
      "flavorName":"MexicoPreprodHuawei",
      "dimensionName":"",
      "buildType":"Debug",
      "keystoreFileId":"glomo_keystore_debug",
      "keystorePasswordId":"glomo_keystore_password_debug",
      "keystoreAliasId":"android_uy_key"
    },
    {
      "configCells":"androidProd",
      "flavorName":"MexicoProdHuawei",
      "dimensionName":"",
      "buildType":"Qa",
      "keystoreFileId":"glomo_keystore_debug",
      "keystorePasswordId":"glomo_keystore_password_debug",
      "keystoreAliasId":"android_uy_key"
    }

  ]
}
