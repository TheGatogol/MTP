/* eslint-disable camelcase */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const _get_custom_analytic_feature_flag = (analytic) => UTILS.getAnalyticFeatureFlag(LITERALS.featureFlag.internationalTransfers, analytic);
  const _get_custom_app_page_visit_level_2 = (text, data) => _get_custom_analytic_feature_flag(UTILS.getAppPageVisitLevel2(text, data));
  const _get_custom_app_started = (textLevel, data) => _get_custom_analytic_feature_flag(UTILS.getDynamicAppStarted(textLevel, data));
  const _get_custom_app_step = (stepNumber, stepText, appOffer, data) => _get_custom_analytic_feature_flag(UTILS.getAppStepLevel2AppOffer(stepNumber, stepText, appOffer, data));
  const _get_custom_app_page_view = (level2, data) => _get_custom_analytic_feature_flag(UTILS.getAdvancedFootprintWithLevel2(level2, data));
  const _get_custom_app_completed_level2 = (text, state, data) => _get_custom_analytic_feature_flag(UTILS.getAppCompletedLevel2(text, state, data));
  const _get_custom_advance_foot_print_error = (error, data) => _get_custom_analytic_feature_flag(UTILS.getAdvancedFootprintError(LITERALS.commons.personalLoanOneClick, error, data));

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
  };

  const BASE_COMMON = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const COMMON_TRANSFERS = {
    ...BASE_COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.internationalTransfers,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.internationalTransfers,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.account
  };

  const COMMON_STEPS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.transferInternational,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative
  };

  const COMMON_TRANSFERS_STEP = {
    ...COMMON_TRANSFERS,
    ...COMMON_STEPS
  };

  const COMMON_TRANSFERS_STEP_TYPOLOGY = {
    ...COMMON_TRANSFERS_STEP,
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };

  const COMMON_TRANSFERS_STEP_TYPOLOGY_AMOUNT = {
    ...COMMON_TRANSFERS_STEP_TYPOLOGY,
    [CONSTANTS.APPLICATION_PROCESS]: { bind: 'currencyDestiny' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amountOrigin' },
    [CONSTANTS.PRODUCT_QUANTITY]: { bind: 'amountDestiny' },
    [CONSTANTS.PRODUCT_CURRENCY]: { bind: 'currencyOrigin' }
  };

  const get_custom_app_on_click_start_with_feature_flag = (applicationStep, level1, level2) => {
    const newCommonTransfer = JSON.parse(JSON.stringify(COMMON_TRANSFERS));
    newCommonTransfer[CONSTANTS.PAGE_PAGEINFO_PAGEINTENT] = LITERALS.commons.information;
    const appOnClickStart              = UTILS.getOnClickStart(applicationStep, LITERALS.commons.information, newCommonTransfer)[CONSTANTS.DATALAYER_NAME];
    const appOnClickStartLevel2        = UTILS.getAppOnClickStartLevel2(level1, level2, appOnClickStart)[CONSTANTS.DATALAYER_NAME];
    const appOnClickStartLevel2AppType = UTILS.getAppOnClickStartLevel2AppType(LITERALS.commons.operative, appOnClickStartLevel2);
    return _get_custom_analytic_feature_flag(appOnClickStartLevel2AppType);
  };

  const get_custom_app_completed_with_feature_flag = state => _get_custom_app_completed_level2(
    LITERALS.commons.successfulPage,
    state,
    {
      ...COMMON_TRANSFERS_STEP_TYPOLOGY_AMOUNT,
      [CONSTANTS.APPLICATION_OFFER]: { bind: 'secondQuestionAnswer' }
    }
  );

  const get_advanced_footprint_error_with_feature_flag = errorPage => _get_custom_advance_foot_print_error(
    errorPage,
    {
      [CONSTANTS.USER_COUNTRY]: 'México',
      [CONSTANTS.USER_STATE]: 'cuzco'
    }
  );

  const APP_PAGE_VISIT = _get_custom_app_page_visit_level_2('1 historial', { ...COMMON_TRANSFERS_STEP, [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.qualifiedVisitsTrue });
  const APP_STARTED    = _get_custom_app_started('', { ...COMMON_TRANSFERS_STEP, [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 historial' });
  const APP_STEP_2     = _get_custom_app_step('2', '2 destinatario', '', COMMON_TRANSFERS_STEP);
  const APP_PAGE_VIEW  = _get_custom_app_page_view('nuevo destinatario', { ...BASE_COMMON, ...COMMON_STEPS, [CONSTANTS.APPLICATION_APPLICATION_TYPE]: '' });
  const APP_STEP_3     = _get_custom_app_step('3', '3 datos banco destino', '', COMMON_TRANSFERS_STEP);
  const APP_STEP_4     = _get_custom_app_step('4', '4 actividad economica', '', COMMON_TRANSFERS_STEP_TYPOLOGY);
  const APP_STEP_5     = _get_custom_app_step('5', '5 importe', '', COMMON_TRANSFERS_STEP_TYPOLOGY);
  const APP_STEP_6     = _get_custom_app_step('6', '6 concepto', '', COMMON_TRANSFERS_STEP_TYPOLOGY_AMOUNT);
  const APP_STEP_7     = _get_custom_app_step('7', '7 confirmacion', { bind: 'secondQuestionAnswer' }, COMMON_TRANSFERS_STEP_TYPOLOGY_AMOUNT);
  const APP_STEP_8     = _get_custom_app_step('8', '8 otp', { bind: 'secondQuestionAnswer' }, COMMON_TRANSFERS_STEP_TYPOLOGY_AMOUNT);

  return {
    get_custom_app_on_click_start_with_feature_flag,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_PAGE_VIEW,
    APP_STEP_3,
    APP_STEP_4,
    APP_STEP_5,
    APP_STEP_6,
    APP_STEP_7,
    APP_STEP_8,
    get_custom_app_completed_with_feature_flag,
    get_advanced_footprint_error_with_feature_flag
  };
};