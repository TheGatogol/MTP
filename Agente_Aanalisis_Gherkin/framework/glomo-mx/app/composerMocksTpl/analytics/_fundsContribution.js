module.exports = () => {

  const COMMON = {
    'application.globalApplication': 'funds contribution',
    'application.application.name': 'incrementar fondo',
    'application.application.type': 'contratacion'
  };

  const GENERAL_COMMON = {
    'page.pageInfo.language': 'ES',
    'page.pageInfo.area': 'privada',
    'page.pageInfo.channel': 'online',
    'page.pageInfo.version': '1.0',
    'page.pageInfo.pageSegment': 'personas',
    'page.pageInfo.sysEnv': 'app'
  };

  const USER_COMMON = {
    'application.fulfillmentModel': 'online/offline'
  };

  const PRODUCT_COMMON = {
    'products.attributes.0.primaryCategory': 'inversiones',
    'products.attributes.0.productSubtype': 'fondos inversion',
    'products.attributes.0.productName': {
      bind: 'productName'
    }
  };

  const LEVEL_COMMON = {
    'page.pageInfo.level1': 'inversiones',
    'page.pageInfo.level2': 'incrementar fondo'
  };

  const DYNAMIC_COMMON = {
    'products.attributes.0.amount': {
      bind: 'amount'
    },
    'products.attributes.0.currency': 'MXN'
  };

  const APP_ON_CLICK_START =  {
    action: 'App On Click Start',
    type: 'link',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'Glomo',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:fondos:detalle',
      'page.pageInfo.level1': 'fondos',
      'page.pageInfo.level2': 'detalle',
      'page.pageInfo.pageIntent': 'informacion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'incrementar',
      ...PRODUCT_COMMON
    }
  };

  const APP_PAGE_VISIT = {
    action: 'App Page Visit',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:1 caracteristicas',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '1 caracteristicas',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': '1 caracteristicas',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON,
      'application.isQualifiedVisits': 'true'
    }
  };

  const APP_STARTED = {
    action: 'App Started',
    type: 'link',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:1 caracteristicas',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '1 caracteristicas',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'lo quiero',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON
    }
  };

  const STEP_2 = {
    action: 'App Step 2',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:2 importe',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '2 importe',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': '2 importe',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON
    }
  };

  const SIMULATION = {
    action: 'Page View',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'application.fulfillmentModel': '',
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:simulacion',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'simulacion',
      'page.pageInfo.pageIntent': 'informacion'
    }
  };

  const STEP_3 = {
    action: 'App Step 3',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:3 cuenta asociada',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '3 cuenta asociada',
      'page.pageInfo.pageIntent': 'transaccion',
      ...USER_COMMON,
      ...COMMON,
      'application.step': '3 cuenta asociada',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON
    }
  };

  const STEP_4 = {
    action: 'App Step 4',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:4 confirmar',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '4 confirmar',
      'page.pageInfo.pageIntent': 'transaccion',
      ...USER_COMMON,
      ...COMMON,
      'application.step': '4 confirmar',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON
    }
  };

  const MODAL_OTP = {
    action: 'App Step 5',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:incrementar fondo:5 otp',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '5 otp',
      'page.pageInfo.pageIntent': 'transaccion',
      ...USER_COMMON,
      ...COMMON,
      'application.step': '5 otp',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON
    }
  };

  const RECEIPT = {
    action: 'App Completed',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:fondos:incrementar fondos:pagina exitosa',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'pagina exitosa',
      'page.pageInfo.pageIntent': 'transaccion',
      ...USER_COMMON,
      ...COMMON,
      'application.step': 'pagina exitosa',
      'application.typology': {
        bind: 'offer'
      },
      'application.process': {
        bind: 'process'
      },
      'application.state': {
        bind: 'contributionState'
      },
      'application.operationNumber': {
        bind: 'operationNumber'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      'products.attributes.0.state': {
        bind: 'contributionState'
      }
    }
  };

  const RECEIPT_ERROR = {
    action: 'App Completed',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'privada:personas:fondos:compra fondos:pagina exitosa',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'pagina exitosa',
      ...USER_COMMON,
      'user.segment.profile': 'fondo no disponible',
      ...COMMON,
      'application.step': 'pagina exitosa',
      'application.typology': {
        bind: 'offer'
      },
      'application.process': {
        bind: 'process'
      },
      'application.state': {
        bind: 'contributionState'
      },
      'application.operationNumber': {
        bind: 'operationNumber'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      'products.attributes.0.state': {
        bind: 'state'
      }
    }
  };

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    STEP_2,
    SIMULATION,
    STEP_3,
    STEP_4,
    MODAL_OTP,
    RECEIPT,
    RECEIPT_ERROR
  };
};