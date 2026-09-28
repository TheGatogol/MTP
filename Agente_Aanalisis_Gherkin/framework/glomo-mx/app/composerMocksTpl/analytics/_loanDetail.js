const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

// eslint-disable-next-line no-unused-vars
module.exports = (CONFIG) => {

  const COMMON_PAGES = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamos',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const APP_PAGE_VIEW_LOAN_DETAIL = UTILS.getAdvancedFootprint(COMMON_PAGES);
  const APP_PAGE_VIEW_LOAN_DETAIL_MORE_INFO = UTILS.getAdvancedFootprintWithLevel3('mas informacion', COMMON_PAGES);
  const APP_PAGE_VIEW_LOAN_DETAIL_EDIT_ALIAS = UTILS.getAdvancedFootprintWithLevel3('editar alias', COMMON_PAGES);

  [
    APP_PAGE_VIEW_LOAN_DETAIL,
    APP_PAGE_VIEW_LOAN_DETAIL_MORE_INFO,
    APP_PAGE_VIEW_LOAN_DETAIL_EDIT_ALIAS
  ].forEach(item => UTILS.getAnalyticFeatureFlag('loanDetail', item));

  return {
    APP_PAGE_VIEW_LOAN_DETAIL,
    APP_PAGE_VIEW_LOAN_DETAIL_MORE_INFO,
    APP_PAGE_VIEW_LOAN_DETAIL_EDIT_ALIAS
  };
};
