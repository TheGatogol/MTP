module.exports = (CONFIG) => {

  const COMMON = {
    'page.pageInfo.level1': 'fondos',
    'page.pageInfo.level2': 'detalle inversion',

    'user.userState': 'logado',
    'page.pageinfo.language': 'ES',
    'page.pageInfo.area': 'privada',
    'page.pageInfo.pageIntent': 'transaccion',

    'pageInstanceID': CONFIG.pageInstanceID,
    'page.pageInfo.version': '',
    'page.pageInfo.pageSegment': 'personas',
    'page.pageInfo.sysEnv': 'app',
    'user.segment.global': '003001',

    'page.pageInfo.bussinessUnit': 'BBVA Mexico',
    'siteAppName': 'App BBVA Mexico',
    'previousPage': 'privada:personas:posicion global',
    'previousPageType': 'informacion',
    'previousSiteSection L1': 'posicion global',
    'sessionInterval': '',

    'mcid': '73545698998924014482164865422025109024'
  };

  const viewFundDetail = {
    action: 'page-view',
    digitalData: {
      ...COMMON
    }
  };

  return {
    viewFundDetail
  };
};