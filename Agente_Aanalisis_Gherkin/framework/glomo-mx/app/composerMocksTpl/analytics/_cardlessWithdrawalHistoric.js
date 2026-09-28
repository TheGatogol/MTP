const constants = require('./common/_constants');
const literals = require('./common/_literals');
const utils = require('./common/_utils');

const COMMON = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_CHANNEL]: literals.actions.online,
  [constants.PAGE_INSTANCE_ID]: 'de',
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.USER_USERSTATE]: 'logado'
};

const ANALYTICS_FEATURE_FLAG = {
  key: 'glomo.analytics.cardlessWithdrawalHistoric',
  defaultValue: true
};

const CARDLESS_WIDTHDRAWAL_HISTORIC = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'historial',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  ...COMMON
};


const CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_VIEW = utils.getAdvancedFootprint(CARDLESS_WIDTHDRAWAL_HISTORIC);

const CARDLESS_WIDTHDRAWAL_DETAIL_PAGE = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail,
  ...COMMON
};

const CARDLESS_WIDTHDRAWAL_DETAIL_PAGE_VIEW = utils.getAdvancedFootprint(CARDLESS_WIDTHDRAWAL_DETAIL_PAGE);

const CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'historial',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'cancelar retiro',
  ...COMMON
};

const CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK = utils.getInternalLink('cancelar retiro', CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL);

const CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'historial',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  [constants.PAGE_PAGEINFO_LEVEL3]: 'sin movimientos',
  ...COMMON
};

const CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS_VIEW = utils.getAdvancedFootprint(CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS);

const CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'historial',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  [constants.PAGE_PAGEINFO_LEVEL3]: 'filtrar retiros',
  ...COMMON
};

const CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER_VIEW = utils.getAdvancedFootprint(CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER);

const CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR = {
  [constants.PAGE_PAGEINFO_LEVEL1]: 'historial',
  [constants.PAGE_PAGEINFO_LEVEL2]: 'retiro sin tarjeta',
  [constants.PAGE_PAGEINFO_LEVEL3]: 'error retiro no disponible',
  [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error retiro no disponible',
  ...COMMON
};
const CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR_VIEW = utils.getAdvancedFootprint(CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR);
[
  CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER_VIEW,
  CARDLESS_WIDTHDRAWAL_DETAIL_PAGE_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK,
  CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR_VIEW
].forEach(analytic => utils.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));
module.exports = {
  CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER_VIEW,
  CARDLESS_WIDTHDRAWAL_DETAIL_PAGE_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK,
  CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS_VIEW,
  CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR_VIEW
};