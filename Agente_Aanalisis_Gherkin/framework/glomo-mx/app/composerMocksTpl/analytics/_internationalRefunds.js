/* eslint-disable camelcase */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const get_custom_with_feature_flag = data => utils.getAnalyticFeatureFlag(LITERALS.featureFlag.internationalRefunds, data);

  const BASE = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'international transfers',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'transferencias internacionales recibidas',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const APP_ON_CLICK_START = get_custom_with_feature_flag(
    utils.getAppOnClickStartLevel3('transferencias internacionales', 'historial', 'recibidas', {
      ...BASE,
      [CONSTANTS.APPLICATION_STEP]: 'completar informacion',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
    }
    )
  );

  const COMMON = {
    ...BASE,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'transferencias internacionales recibidas',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: 'cuentas',
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [CONSTANTS.PRODUCT_CURRENCY]: { bind: 'currency' }
  };

  const APP_PAGE_VISIT = get_custom_with_feature_flag(
    utils.getAppPageVisitLevel2('1 agregar informacion', {
      ...COMMON,
      [CONSTANTS.QUALIFIED_VISITS]: 'true'
    }
    )
  );

  const APP_STARTED = get_custom_with_feature_flag(utils.getDynamicAppStarted('', APP_PAGE_VISIT[CONSTANTS.DATALAYER_NAME]));

  const COMMON_SETP_2_COMPLETED = {
    ...COMMON,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [CONSTANTS.APPLICATION_OFFER]: { bind: 'offer' }
  };

  const APP_STEP_2 = get_custom_with_feature_flag(utils.getAppStepLevel2AppOffer('2', '2 confirmar', '', COMMON_SETP_2_COMPLETED));

  const APP_COMPLETED = get_custom_with_feature_flag(utils.getAppCompletedLevel2('pagina exitosa', 'finalizado', COMMON_SETP_2_COMPLETED));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED
  };
};