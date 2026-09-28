module.exports = () => {

  const COMMON = {
    'application.globalApplication': 'funds withdrawal',
    'application.application.name': 'venta fondo',
    'application.application.type': 'operativa'
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
    'application.fulfillmentModel': 'online'
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
    'page.pageInfo.level2': 'venta fondo'
  };

  const DYNAMIC_COMMON = {
    'products.attributes.0.amount': {
      bind: 'amount'
    },
    'products.attributes.0.currency': 'MXN'
  };

  const OPERATION_COMMON = {
    'application.programTypeHired': {
      bind: 'profile'
    }
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
      'application.step': 'retirar',
      ...PRODUCT_COMMON
    }
  };

  const APP_PAGE_VISIT = {
    action: 'App Page Visit',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:1 cuenta asociada',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '1 cuenta asociada',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': '1 cuenta asociada',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON,
      'application.isQualifiedVisits': 'false'
    }
  };

  const APP_STARTED = {
    action: 'App Started',
    type: 'link',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:1 cuenta asociada',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '1 cuenta asociada',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'continuar',
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
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:2 tipo de venta',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '2 tipo de venta',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': '2 tipo de venta',
      'application.typology': {
        bind: 'offer'
      },
      ...PRODUCT_COMMON
    }
  };

  const AMOUNT_TO_SELL = {
    action: 'Page View',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'application.fulfillmentModel': '',
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:importe',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'importe',
      'page.pageInfo.pageIntent': 'informacion'
    }
  };

  const SIMULATION = {
    action: 'Page View',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'application.fulfillmentModel': '',
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:simulacion',
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
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:3 confirmar',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '3 confirmar',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'continuar',
      'application.typology': {
        bind: 'offer'
      },
      ...OPERATION_COMMON,
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON
    }
  };

  const MODAL_OTP = {
    action: 'App Step 4',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:4 otp',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': '4 otp',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': '4 otp',
      'application.typology': {
        bind: 'offer'
      },
      ...OPERATION_COMMON,
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
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:pagina exitosa',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'pagina exitosa',
      'page.pageInfo.pageIntent': 'transaccion',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'pagina exitosa',
      'application.typology': {
        bind: 'offer'
      },
      ...OPERATION_COMMON,
      'application.process': {
        bind: 'process'
      },
      'application.state': 'finalizado',
      'application.operationNumber': {
        bind: 'operationNumber'
      },
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      'products.attributes.0.state': 'finalizado'
    }
  };

  const RECEIPT_ERROR  = {
    action: 'App Completed',
    type: 'view',
    digitalData: {
      ...GENERAL_COMMON,
      'page.pageInfo.projectName': 'DIY E2E Sales',
      'page.pageInfo.pageName': 'app:privada:personas:inversiones:venta fondo:pagina exitosa',
      ...LEVEL_COMMON,
      'page.pageInfo.level3': 'pagina exitosa',
      'page.pageInfo.pageIntent': 'transaccion',
      'user.segment.profile': 'informacion incompleta',
      ...COMMON,
      ...USER_COMMON,
      'application.step': 'pagina exitosa',
      'application.typology': {
        bind: 'offer'
      },
      ...OPERATION_COMMON,
      'application.state': 'rechazado',
      'application.operationNumber': '',
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      'products.attributes.0.state': 'rechazado'
    }
  };

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    STEP_2,
    AMOUNT_TO_SELL,
    STEP_3,
    SIMULATION,
    MODAL_OTP,
    RECEIPT,
    RECEIPT_ERROR
  };
};