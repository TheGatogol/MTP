module.exports = PRODUCT => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');

  const PRODUCT_ACCESS = {
    account: 'detalle de cuenta'
  };

  const COMMON_FUNNEL = {
    [constants.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: 'logado',
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'cardless withdrawal',
    [constants.APPLICATION_APPLICATION_NAME]: 'retiro sin tarjeta',
    [constants.APPLICATION_APPLICATION_TYPE]: 'operativa'
  };

  const COMMON = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
    [constants.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: 'logado'
  };

  const ON_CLICK_START = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.APPLICATION_STEP]: PRODUCT_ACCESS[PRODUCT],
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    ...COMMON_FUNNEL
  };

  const INFO_SHEET = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'hoja informativa',
    ...COMMON
  };

  const ACCOUNT_SELECTION = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'seleccion cuenta',
    ...COMMON
  };

  const CHANGE_ORIGIN = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'cambiar origen',
    ...COMMON
  };

  const WITH_AMOUNT = {
    [constants.APPLICATION_AMOUNT]: {
      bind: 'amount'
    }
  };

  const STEP_AMOUNT = {
    [constants.APPLICATION_STEP]: {
      bind: 'amount'
    }
  };

  const COMPLETED = {
    [constants.PRODUCT_STATE]: 'finalizado',
    ...WITH_AMOUNT,
    ...COMMON,
    ...COMMON_FUNNEL
  };

  const READ_QR = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'leer codigo qr',
    ...COMMON
  };

  const READ_QR_SUCCESSFULL = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'codigo qr leido con exito',
    ...COMMON
  };

  const READ_QR_ERROR = {
    [constants.PAGE_PAGEINFO_LEVEL3]: 'error por tiempo vencido',
    ...COMMON
  };

  const digitalCardActivation = {
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.digitalCardActivation,
    ...COMMON
  };

  const APP_ON_CLICK_START = utils.getOnClickStart(
    PRODUCT_ACCESS[PRODUCT],
    literals.commons.information,
    'App On Click Start',
    ON_CLICK_START
  );
  const INFO_SHEET_PAGE_VIEW = utils.getAdvancedFootprint(
    INFO_SHEET
  );
  const ACCOUNT_SELECTION_PAGE_VIEW = utils.getAdvancedFootprint(
    ACCOUNT_SELECTION
  );
  const CHANGE_ORIGIN_PAGE_VIEW = utils.getAdvancedFootprint(
    CHANGE_ORIGIN
  );
  const APP_STARTED_AN_AMOUNT = utils.getDynamicAppStarted(
    '1 monto',
    COMMON,
    COMMON_FUNNEL,
    STEP_AMOUNT
  );
  const APP_STARTED_PAGE_VISIT_AN_AMOUNT = utils.getPageVisitWithLevel3(
    '1 monto',
    COMMON,
    COMMON_FUNNEL
  );
  const APP_STEP_2 = utils.getAppStepWithLevel3(
    2,
    '2 concepto',
    COMMON,
    COMMON_FUNNEL,
    WITH_AMOUNT
  );
  const APP_STEP_3 = utils.getAppStepWithLevel3(
    3,
    '3 confirmacion',
    COMMON,
    COMMON_FUNNEL,
    WITH_AMOUNT
  );
  const APP_COMPLETED = utils.getAppCompleted(
    'pagina exitosa',
    'finalizado',
    COMPLETED
  );
  const appCompletedRejectAricFraud = utils.getAppCompletedRaw({
    ...COMMON,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.cardlessWithdrawal,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.operative.cardlessWithdrawal,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.APPLICATION_AMOUNT]: { bind: 'amount' },
    [constants.APPLICATION_CURRENCY]: { bind: 'currency' },
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.underReview,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_STATE]: literals.commons.underReview,
    [constants.USER_SEGMENT_PROFILE]: literals.commons.rejectedDuePossibleFraud
  });
  const INTERNAL_LINK_ATMS = utils.getInternalLink(
    'cajeros cercanos',
    COMMON
  );
  const INTERNAL_LINK_SHARE = utils.getInternalLink(
    'compartir clave',
    COMMON
  );
  const PAGE_VIEW_READ_QR = utils.getAdvancedFootprint(
    READ_QR
  );
  const PAGE_VIEW_READ_QR_SUCCESSFULL = utils.getAdvancedFootprint(
    READ_QR_SUCCESSFULL
  );
  const PAGE_VIEW_READ_QR_ERROR = utils.getAdvancedFootprint(
    READ_QR_ERROR
  );
  const pageViewDigitalCardActivation = utils.getAdvancedFootprint(
    digitalCardActivation
  );
  [
    APP_ON_CLICK_START,
    INFO_SHEET_PAGE_VIEW,
    ACCOUNT_SELECTION_PAGE_VIEW,
    CHANGE_ORIGIN_PAGE_VIEW,
    APP_STARTED_AN_AMOUNT,
    APP_STARTED_PAGE_VISIT_AN_AMOUNT,
    APP_STEP_2,
    APP_STEP_3,
    APP_COMPLETED,
    appCompletedRejectAricFraud,
    INTERNAL_LINK_ATMS,
    INTERNAL_LINK_SHARE,
    PAGE_VIEW_READ_QR,
    PAGE_VIEW_READ_QR_SUCCESSFULL,
    PAGE_VIEW_READ_QR_ERROR
  ].forEach(analytic => utils.addFeatureFlag(analytic, {
    'key': 'glomo.analytics.cardlessWithdrawal',
    'defaultValue': true
  }
  ));
  [
    pageViewDigitalCardActivation
  ].forEach(analytic => utils.addFeatureFlag(analytic, {
    'key': 'glomo.analytics.cardlessWithdrawalActivateDigitalCard',
    'defaultValue': true
  }
  ));
  return {
    APP_ON_CLICK_START,
    INFO_SHEET_PAGE_VIEW,
    ACCOUNT_SELECTION_PAGE_VIEW,
    CHANGE_ORIGIN_PAGE_VIEW,
    APP_STARTED_AN_AMOUNT,
    APP_STARTED_PAGE_VISIT_AN_AMOUNT,
    APP_STEP_2,
    APP_STEP_3,
    APP_COMPLETED,
    appCompletedRejectAricFraud,
    INTERNAL_LINK_ATMS,
    INTERNAL_LINK_SHARE,
    PAGE_VIEW_READ_QR,
    PAGE_VIEW_READ_QR_SUCCESSFULL,
    PAGE_VIEW_READ_QR_ERROR,
    pageViewDigitalCardActivation
  };
};
