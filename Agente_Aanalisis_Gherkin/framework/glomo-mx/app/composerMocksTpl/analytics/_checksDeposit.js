/* eslint-disable camelcase, no-use-before-define */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utilsAnalytics = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.checksDeposits,
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.operative.checksDepositsOperative,
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
  [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'account' }
};

const COMMONS_ONLINE_OFFLINE = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.fulfillmentOn + '/' + LITERALS.commons.fulfillmentOff
};

module.exports = (product) => {
  const ANALYTICS_FEATURE_FLAG = {
    'key': `glomo.analytics.${product}`,
    'defaultValue': true
  };
  const advanced_footprint = (error, level2, level3) => {
    let obj = {
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
      [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_FULLFILMENT]: ''
    };
    if (level3) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL3] = level3;
    }

    if (error) {
      obj[CONSTANTS.PAGE_PAGEINFO_ERRORPAGE] = level2;
    }

    let analytics =  utilsAnalytics.getAdvancedFootprint(obj);
    utilsAnalytics.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const appOnclickStart = (appStep) => {
    const obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.checks,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: appStep,
      ...COMMONS,
      ...COMMONS_ONLINE_OFFLINE
    };
    const analytic = utilsAnalytics.getOnClickStart(appStep, LITERALS.commons.information, obj);
    utilsAnalytics.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG);
    return analytic;
  };

  const internalLink = (linkName, level2) => {
    const levels = {
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
      [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
    };
    const analytic = utilsAnalytics.getInternalLinkWithLevel2(linkName, level2, levels);
    utilsAnalytics.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG);
    return analytic;
  };

  const app_page_visit = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 ' + LITERALS.commons.addCheck,
      [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.commons.addCheck,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      ...COMMONS,
      ...COMMONS_ONLINE_OFFLINE
    }
  };

  const appStarted = (appStep) => {
    const obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 ' + LITERALS.commons.addCheck,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      ...COMMONS,
      ...COMMONS_ONLINE_OFFLINE
    };
    const analytic = utilsAnalytics.getStaticAppStarted(appStep, '', obj);
    utilsAnalytics.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG);
    return analytic;
  };

  const checks_management_common_steps = (step) => {
    let stepName = `appStep${step}`;

    let obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.stepsSection[stepName],
      [CONSTANTS.APPLICATION_STEP]: LITERALS.stepsSection[stepName],
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      ...COMMONS,
      ...COMMONS_ONLINE_OFFLINE
    };

    let commonAttributes = {
      [CONSTANTS.APPLICATION_TYPOLOGY]: '1',
      [CONSTANTS.PRODUCT_AMOUNT]: { bind: 'amount' },
      [CONSTANTS.PRODUCT_CURRENCY]: { bind: 'currency' }
    };

    if (step === '11') {
      obj = Object.assign({}, obj, commonAttributes);
    }

    if (step === '12') {
      obj = Object.assign({}, obj, {
        [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token',
        ...commonAttributes
      });
    }

    let analytics =  utilsAnalytics.getAppStep(step, obj);
    utilsAnalytics.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const app_complete = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_TYPOLOGY]: '1',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token',
      [CONSTANTS.APPLICATION_STATE]: 'en revision',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      ...COMMONS,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      [CONSTANTS.PRODUCT_AMOUNT]: { bind: 'amount' },
      [CONSTANTS.PRODUCT_CURRENCY]: { bind: 'currency' },
      [CONSTANTS.PRODUCT_STATE]: 'en revision',
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.offline
    }
  };

  const checks_management_error = (level2, errorPage) => {
    let obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      ...COMMON_HUELLA_ERRORS
    };

    if (errorPage) {
      obj = Object.assign({}, obj, { [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: errorPage });
    }

    let analytics =  utilsAnalytics.getAdvancedFootprint(obj);
    utilsAnalytics.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const COMMON_HUELLA_ERRORS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.checksDepositsOperative,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const featureFlags = [
    app_page_visit,
    appOnclickStart,
    internalLink,
    appStarted,
    checks_management_common_steps,
    app_complete,
    checks_management_error
  ];

  featureFlags.forEach(item => utilsAnalytics.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  return {
    advanced_footprint,
    app_page_visit,
    appOnclickStart,
    internalLink,
    appStarted,
    checks_management_common_steps,
    app_complete,
    checks_management_error
  };
};