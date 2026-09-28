/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
module.exports = () => {
  const FEATURE_FLAG_MOBILE = 'mobileTopUp';
  const FEATURE_FLAG_CONTACTS = 'mobileTopUp.contactsAgenda';

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.loggedIn
  };

  const COMMONS_TOP_UP = {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.mobileTopUp,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.mobileTopUp,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account
  };

  const DATA_ON_CLICK_START = {
    ...COMMONS_TOP_UP,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' }
  };

  const COMMONS_STEPS = {
    ...COMMONS_TOP_UP,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.applicationName.mobileTopUp,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const AMOUNT_DATA = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'typology'},
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.tag.badge,
    [CONSTANTS.APPLICATION_AMOUNT]: { bind: 'amount' }
  };

  const SIGN_DATA = {
    ...AMOUNT_DATA,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: { bind: 'otp' }
  };

  const APP_COMPLETED_DATA = {
    ...SIGN_DATA,
    ...COMMONS_STEPS,
    [CONSTANTS.PRODUCT_STATE]: { bind: 'state' }
  };

  const CONTACTS_AGENDA_DATA = {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'contactos guardados',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const CARD_STEP_DATA_ATTRIBUTES = {
    ...COMMONS,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: LITERALS.commons.intCmpFormat,
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: 'tarjetas credito',
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: { bind: 'campingText' },
    [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: { bind: 'quantity' }
  };

  const CARD_STEP_DATA_EVENTS = {
    ...CARD_STEP_DATA_ATTRIBUTES,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: { bind: 'action' }
  };

  const COMMONS_FOOTPRINT = {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account
  };

  const setLevel3Data = (data) => ({
    ...data,
    ...COMMONS_STEPS
  });

  const setFootprintLevel3Data = (data) => ({
    ...data,
    ...COMMONS_FOOTPRINT,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.applicationName.mobileTopUp
  });

  const _set_feature_flags = (analytic, featureFlag = FEATURE_FLAG_MOBILE) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
  const _get_app_step_level3 = (numberStep, appStep, data) => _set_feature_flags((UTILS.getAppStepWithLevel3(numberStep, appStep, setLevel3Data(data))));
  const _get_footprint = (data, featureFlag) => _set_feature_flags(UTILS.getAdvancedFootprint(data), featureFlag);
  const _get_footprint_lvl2 = (level2) => _set_feature_flags(UTILS.getAdvancedFootprintWithLevel2(level2, COMMONS_FOOTPRINT));
  const _get_footprint_lvl3 = (level3) => _set_feature_flags(UTILS.getAdvancedFootprintWithLevel3(level3, setFootprintLevel3Data()));

  const _getAppSteps = (param) => {
    const typeStep = {
      appStep1Started: _set_feature_flags(UTILS.getDynamicAppStarted('1 seleccion cuenta', setLevel3Data())),
      appStep2Destination: _get_app_step_level3(2, '2 destinatario'),
      appStep3Amount: _get_app_step_level3(3, '3 monto', { [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'typology'} }),
      appStep4Summary: _get_app_step_level3(4, LITERALS.commons.fourthConfirmation, AMOUNT_DATA),
      appStep5Sign: _get_app_step_level3(5, LITERALS.commons.fifthOtp, SIGN_DATA)
    };
    return typeStep[param];
  };

  const _getAdvancedFootprints = (param) => {
    const typeFootPrint = {
      contactsAgenda: _get_footprint(CONTACTS_AGENDA_DATA, FEATURE_FLAG_CONTACTS),
      myNumber: _get_footprint_lvl3('ingresar compania'),
      newNumber: _get_footprint_lvl3('nuevo celular'),
      cardStepView: _get_footprint(CARD_STEP_DATA_ATTRIBUTES),
      cardStepClick: _get_footprint(CARD_STEP_DATA_EVENTS),
      topUps: _get_footprint_lvl2(LITERALS.commons.topUps)
    };
    return typeFootPrint[param];
  };

  const APP_ON_CLICK_START = _set_feature_flags(UTILS.getOnClickStart(LITERALS.commons.topUps, LITERALS.commons.information, DATA_ON_CLICK_START));
  const APP_PAGE_VISIT_ACOUNT_SELECTION = _set_feature_flags(UTILS.getPageVisitWithLevel3('1 seleccion cuenta', setLevel3Data()));
  const APP_COMPLETED = _set_feature_flags(UTILS.getAppCompleted(LITERALS.commons.successfulPage, { bind: 'state' }, APP_COMPLETED_DATA));
  const SITE_ERROR_INSUFFICIENT_BALANCE = _set_feature_flags(UTILS.getSiteError('error saldo insuficiente', setFootprintLevel3Data({[CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 seleccion cuenta'})));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT_ACOUNT_SELECTION,
    _getAppSteps,
    APP_COMPLETED,
    SITE_ERROR_INSUFFICIENT_BALANCE,
    _getAdvancedFootprints
  };
};