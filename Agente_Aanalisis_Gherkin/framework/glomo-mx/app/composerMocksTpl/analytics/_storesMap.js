module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');
  const featureFlagStoresMap = (analytic, featureFlag) => utils.addFeatureFlag(analytic, featureFlag);
  const STORES_MAP_FEATURE_FLAGS = {
    storesMap: {
      key: 'glomo.analytics.storesMap',
      defaultValue: true
    },
    allowLocationError: {
      key: 'glomo.analytics.storesMap.allowLocationError',
      defaultValue: true
    },
    informationNotAvailableError: {
      key: 'glomo.analytics.storesMap.informationNotAvailableError',
      defaultValue: true
    }
  };
  const COMMON = {
    [CONSTANTS.APPLICATION_FULLFILMENT]: '',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.reward.points,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.reward.useMyPoints,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward
  };
  const INTERNAL_LINK = utils.getInternalLink(LITERALS.reward.storeMap.payWithYourPoints, {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  });
  featureFlagStoresMap(INTERNAL_LINK, STORES_MAP_FEATURE_FLAGS.storesMap);
  const fingerPrintWhereToPay = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.map,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintWhereToPayList = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.list,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintStoreDetail = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.storeDetail,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintFindStore = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.searchStore,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintSearchResult = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.searchResult,
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHENTERTERM]: { bind: 'searchEnterTerm' },
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHRESULTS]: { bind: 'searchResults' },
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHTERM]: { bind: 'searchTerm' },
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintNoSearchResultMap = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.mapSearchNoResult,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const fingerPrintNoSearchResultList = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.listSearchNoResult,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const allowLocationError = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.errorLocationPermission,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.reward.storeMap.errorLocationPermission,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const informationNotAvailableError = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.reward.storeMap.payInStores,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.reward.storeMap.errorLoadCommerceInfo,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.reward.storeMap.errorLoadCommerceInfo,
    [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
  };
  const _getAdvancedFootprint = (typeFootprint, featureFlag) => {
    const typesFootprint = {
      fingerPrintWhereToPay: fingerPrintWhereToPay,
      fingerPrintWhereToPayList: fingerPrintWhereToPayList,
      fingerPrintStoreDetail: fingerPrintStoreDetail,
      fingerPrintFindStore: fingerPrintFindStore,
      fingerPrintSearchResult: fingerPrintSearchResult,
      fingerPrintNoSearchResultMap: fingerPrintNoSearchResultMap,
      fingerPrintNoSearchResultList: fingerPrintNoSearchResultList,
      allowLocationError: allowLocationError,
      informationNotAvailableError: informationNotAvailableError
    };
    const analytics = utils.getAdvancedFootprint(typesFootprint[typeFootprint]);
    featureFlagStoresMap(analytics, STORES_MAP_FEATURE_FLAGS[featureFlag]);
    return analytics;
  };
  return {
    _getAdvancedFootprint,
    INTERNAL_LINK
  };
};
