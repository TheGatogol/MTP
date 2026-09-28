/* eslint-disable no-unused-vars */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utilsAnalytics = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.checks,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
};

const commonRelease = (level2, level3, step, typology = false, customFields = false) => {
  const _commonRelease = {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.APPLICATION_STEP]: step,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'liberar cheques',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.checksDeposits,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  if (level3) {
    Object.assign(_commonRelease, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3
    });
  }
  if (typology) {
    Object.assign(_commonRelease, {
      [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'checksQuantity' }
    });
  }
  if (customFields) {
    Object.assign(_commonRelease, {
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    });
  }
  return _commonRelease;
};

module.exports = (product) => {

  const checksManagementFootprint = (level2, level3) => {
    const obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      ...COMMONS
    };
    if (level3) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL3] = level3;
    }
    const analytic = utilsAnalytics.getAdvancedFootprint(obj);
    return analytic;
  };

  const checksManagementModalDelete = (level2, level3) => {
    const obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
      ...COMMONS
    };
    const analytic = utilsAnalytics.getInternalLink('eliminar cheque', obj);
    return analytic;
  };

  const checksManagementAppPageVisit = (level2, level3, step) => {
    const obj = {
      ...commonRelease(level2, level3, step)
    };
    const analytic = utilsAnalytics.getPageVisitRaw(obj);
    return analytic;
  };

  const checksManagementAppStep = (_appStep = '', _level2 = '', _level3 = '', numberStep, _typology, _customFields) => {
    const analytic = utilsAnalytics.getAppStep(numberStep, {
      ...commonRelease(_level2, _level3, _appStep, _typology, _customFields)
    });
    return analytic;
  };

  const checksManagementAppCompleted = (level2, level3, _typology, _customFields) => {
    const obj = {
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token',
      ...commonRelease(level2, level3, '', _typology, _customFields)
    };
    const analytic = utilsAnalytics.getAppCompleted(level3, LITERALS.commons.ended, obj);
    return analytic;
  };

  const checksManagementAddCheck = (level2, level3, step) => {
    const obj = {
      ...commonRelease(level2, level3, step)
    };
    const analytic = utilsAnalytics.getOnClickStart(step, 'informacion', obj);
    return analytic;
  };

  const checksManagementFillCheck = (level2, level3, step) => {
    const obj = {
      ...commonRelease(level2, level3, step)
    };
    const analytic = utilsAnalytics.getStaticAppStarted(step, level3, obj);
    return analytic;
  };

  [
    checksManagementFootprint,
    checksManagementModalDelete,
    checksManagementAppPageVisit,
    checksManagementAppStep,
    checksManagementAppCompleted,
    checksManagementAddCheck,
    checksManagementFillCheck
  ].forEach(key => utilsAnalytics.getAnalyticFeatureFlag('ckecksManagement', key));

  return {
    checksManagementFootprint,
    checksManagementModalDelete,
    checksManagementAppPageVisit,
    checksManagementAppStep,
    checksManagementAppCompleted,
    checksManagementAddCheck,
    checksManagementFillCheck
  };
};
