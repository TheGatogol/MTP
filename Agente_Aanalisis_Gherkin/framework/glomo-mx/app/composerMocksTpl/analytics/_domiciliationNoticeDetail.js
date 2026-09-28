module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprint
  } = require('./common/_utils');
  const _getAnalyticFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const domiciliationNoticeFlag = 'notification.directDebitNotice';
  const pageCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.confirmOrRejected,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const dynamicApplicationCustomFields = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'productType'
    }
  };
  const dynamicPageLevel2 = {
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'automaticPaymentType'
    }
  };
  const _advancedFootprint = (footPrint = '', isDynamicApplication = false) => {
    return _getAnalyticFeatureFlag(domiciliationNoticeFlag, getAdvancedFootprint({
      ...pageCommon,
      ...dynamicPageLevel2,
      ...(isDynamicApplication ? dynamicApplicationCustomFields : ''),
      [constants.PAGE_PAGEINFO_LEVEL3]: footPrint ? footPrint : ''
    }));
  };
  return {
    _advancedFootprint
  };
};