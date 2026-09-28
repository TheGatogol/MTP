module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAdvancedFootprint,
    addFeatureFlag
  } = require('./common/_utils');
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_SERVER]: CONFIG.globalServices.host,
    [constants.USER_USERSTATE]: literals.commons.logado
  };
  const commonPage = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'mis contratos'
  };
  const fullData = {
    ...commons,
    ...commonPage
  };
  const analyticsFfCustomerContract = {
    key: 'glomo.analytics.customerContracts',
    defaultValue: true
  };
  const analyticsFfCustomerContractError = {
    key: 'glomo.analytics.customerContracts.error',
    defaultValue: true
  };
  const customerContractsHuellaAvanzadaFullData = {
    ...fullData
  };
  const customerContractsErrorHuellaAvanzadaFullData = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'error carga de contratos',
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error carga de contratos'
  };
  const customerContractsHuellaAvanzada = getAdvancedFootprint(customerContractsHuellaAvanzadaFullData);
  const customerContractsErrorHuellaAvanzada = getAdvancedFootprint(customerContractsErrorHuellaAvanzadaFullData);
  addFeatureFlag(customerContractsHuellaAvanzada, analyticsFfCustomerContract);
  addFeatureFlag(customerContractsErrorHuellaAvanzada, analyticsFfCustomerContractError);
  return {
    customerContractsHuellaAvanzada,
    customerContractsErrorHuellaAvanzada
  };
};
