{
  "params": [

    /* Environment: Dev
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume DEVELOPMENT environment services
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Dev",
      "targetName": "GloMo-MX",
      "buildType": "Dev",
      "manualSigning": "manual",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "appTitle": "BBVA MX Dev",
      "appVersion": "99.99.99",
      "configCells": "iosDev",
      "path2www": "MX/Resource/Configurations/Dev",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Dev
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume DEVELOPMENT environment services
        - Run e2e tests
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Dev",
      "targetName": "GloMo-MX",
      "buildType": "Dev",
      "manualSigning": "manual",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "appTitle": "BBVA MX Dev",
      "appVersion": "99.99.99",
      "configCells": "iosDev",
      "path2www": "MX/Resource/Configurations/Dev",
      "e2ePlatform": "saucelabs",
      "galateaConnection": true,
      "e2eCredentialId": "saucelabs-glomo-trial",
      "configE2E": ["_jenkins/ios/backend-dev-sauce.js"],
      "testRunner": "pepino2+radish",
      "e2eRerun": 1,
      "e2eFilters": ["smoke","acceptance","impact"],
      "sauceStorageServer": "https://api.eu-central-1.saucelabs.com/v1/storage",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Dev without SSL Pinning and without Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Disabled
        - Root checking: Disabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Dev-NoPinning-NoRoot",
      "targetName": "GloMo-MX",
      "buildType": "EH-Dev-NoPinning-NoRoot",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Dev-NoPinning-NoRoot",
      "appVersion": "99.99.99",
      "configCells": "iosDev",
      "path2www": "MX/Resource/Configurations/Dev",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Dev with SSL Pinning and Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
        - Root checking: Enabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Dev-Pinning-Root",
      "targetName": "GloMo-MX",
      "buildType": "EH-Dev-Pinning-Root",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Dev-Pinning-Root",
      "appVersion": "99.99.99",
      "configCells": "iosDev",
      "path2www": "MX/Resource/Configurations/Dev",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Dev with SSL Pinning and without Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume DEVELOPMENT environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
        - Root checking: Disabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Dev-Pinning-NoRoot",
      "targetName": "GloMo-MX",
      "buildType": "EH-Dev-Pinning-NoRoot",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Dev-Pinning-NoRoot",
      "appVersion": "99.99.99",
      "configCells": "iosDev",
      "path2www": "MX/Resource/Configurations/Dev",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Prod without SSL Pinning and without Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Disabled
        - Root checking: Disabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Prod-NoPinning-NoRoot",
      "targetName": "GloMo-MX",
      "buildType": "EH-Prod-NoPinning-NoRoot",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Prod-NoPinning-NoRoot",
      "appVersion": "99.99.99",
      "configCells": "iosProd",
      "path2www": "MX/Resource/Configurations/Prod",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Prod with SSL Pinning and with Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
        - Root checking: Enabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Prod-Pinning-Root",
      "targetName": "GloMo-MX",
      "buildType": "EH-Prod-Pinning-Root",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Prod-Pinning-Root",
      "appVersion": "99.99.99",
      "configCells": "iosProd",
      "path2www": "MX/Resource/Configurations/Prod",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Ethical Hacking Prod with SSL Pinning and without Root
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume PRODUCTION environment services
        - Purpose: Ethical Hacking
        - SSL Pinning: Enabled
        - Root checking: Disabled
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-EH-Prod-Pinning-NoRoot",
      "targetName": "GloMo-MX",
      "buildType": "EH-Prod-Pinning-NoRoot",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX EH-Prod-Pinning-NoRoot",
      "appVersion": "99.99.99",
      "configCells": "iosProd",
      "path2www": "MX/Resource/Configurations/Prod",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Prod
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume PRODUCTION environment services
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Prod",
      "targetName": "GloMo-MX",
      "buildType": "Prod",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX Prod",
      "appVersion": "99.99.99",
      "configCells": "iosProd",
      "path2www": "MX/Resource/Configurations/Prod",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Release
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: STORE
        - Set to consume PRODUCTION environment services
        - Jenkinsfile 'deployAppStore' key must be true
        - Purpose: Be deployed to Store
    */
    {
      "teamId" : "9428R6K32M",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Release",
      "targetName": "GloMo-MX",
      "buildType": "Release",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bancomermovil",
      "provisioningProfile": "Bancomer Móvil",
      "configCells": "iosProd",
      "path2www": "MX/Resource/Configurations/Release",
      "deploy": {
        "credentialsFile": "appstore_deploy_credentials",
        "method": "app-store",
        "platformId": "ios"
      },
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bancomermovil.NotificationExtension",
                  "provisioningProfile": "store_NotificationExtension_2022"
          }
      ]
    },

    /* Environment: vBank
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume vBank environment services
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Vbank",
      "targetName": "GloMo-MX",
      "buildType": "Vbank",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX Vbank",
      "appVersion": "99.99.99",
      "configCells": "iosVbank",
      "e2ePlatform": "saucelabs",
      "galateaConnection": true,
      "e2eCredentialId": "saucelabs-glomo-trial",
      "configE2E": ["_jenkins/ios/vbank-sauce.js"],
      "testRunner": "pepino2+radish",
      "e2eRerun": 1,
      "checkExecutedTest": true,
      "e2eFilters": ["smoke","acceptance","impact"],
      "sauceStorageServer": "https://api.eu-central-1.saucelabs.com/v1/storage",
      "path2www": "MX/Resource/Configurations/Vbank",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    },

    /* Environment: Virtual
       This configuration builds an application with:
        - Country: Mexico
        - Distribution: ENTERPRISE
        - Set to consume VIRTUAL environment services
    */
    {
      "teamId": "4Z3VVY4MU6",
      "projectType": "workspace",
      "projectName": "GloMo",
      "scheme": "GloMo-MX-Virtual",
      "targetName": "GloMo-MX",
      "buildType": "Virtual",
      "manualSigning": "manual",
      "bundleId": "com.bancomer.bbva.bmovilInt",
      "provisioningProfile": "inHouse Glomo MX 2023_2",
      "appTitle": "BBVA MX Virtual",
      "appVersion": "99.99.99",
      "configCells": "iosVirtual",
      "path2www": "MX/Resource/Configurations/Virtual",
      "extensions": [
          {
                  "bundleId": "com.bancomer.bbva.bmovilInt.NotificationExtension",
                  "provisioningProfile": "NotificationExtensionBBVA 2023_2"
          }
      ]
    }

  ],
  "extraRepos": [
    {
      "name": "cs-devops-cocoapods-local",
      "url": "https://artifactory.globaldevtools.bbva.com/artifactory/api/pods/cs-devops-cocoapods-local"
    }
  ]
}
