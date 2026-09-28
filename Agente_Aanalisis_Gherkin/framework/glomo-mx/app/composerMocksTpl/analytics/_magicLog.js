module.exports = () => {
  const constants = require('./common/_constants');
  const literals =  require('./common/_literals');
  const { getAdvancedFootprintWithLevel2 } = require('./common/_utils');
  const { addFeatureFlag } = require('./common/_utils');
  const analyticsFeatureFlag = {
    key: 'glomo.analytics.magicLog',
    defaultValue: true
  };

  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.magicLog,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const footPrintCustomize  = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.USER_USERSTATE]: literals.commons.noLogado,
    [constants.USER_PROSPECT_ID]: { bind: 'prospectId' }
  };

  const footPrintSetUp = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };

  const pageViewModal = getAdvancedFootprintWithLevel2(literals.commons.customizeAccount,
    common,
    footPrintCustomize
  );

  const pageViewMagic = getAdvancedFootprintWithLevel2(literals.commons.setUpAccount,
    common,
    footPrintSetUp
  );

  [
    pageViewModal,
    pageViewMagic
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag));

  return {
    pageViewModal,
    pageViewMagic
  };
};
