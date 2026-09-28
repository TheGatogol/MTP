module.exports = () => {
  const {
    PAGE_PAGEINFO_AREA,
    PAGE_PAGEINFO_PAGESEGMENT,
    PAGE_PAGEINFO_PAGEINTENT,
    PAGE_PAGEINFO_PROJECTNAME,
    PAGE_PAGEINFO_LEVEL1,
    PAGE_PAGEINFO_LEVEL2,
    PAGE_PAGEINFO_LEVEL3,
    PAGE_PAGEINFO_LEVEL4
  } = require('./common/_constants');
  const {
    commons: { private: nonPublic, information, persons, investments, funds, detail },
    sections: { glomo }
  } = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAdvancedFootprint } = require('./common/_utils');
  const featureFlag = 'dashboard.traditionalInvestmentFund';

  const commonData = {
    [PAGE_PAGEINFO_AREA]: nonPublic,
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_PAGEINTENT]: information,
    [PAGE_PAGEINFO_PROJECTNAME]: glomo
  };

  const commonConstants = {
    [PAGE_PAGEINFO_LEVEL1]: investments,
    [PAGE_PAGEINFO_LEVEL2]: funds,
    [PAGE_PAGEINFO_LEVEL3]: detail
  };

  const getFootprint = (level4) => {
    const footprint = {
      ...commonData,
      ...commonConstants
    };
    if (level4) {
      footprint[PAGE_PAGEINFO_LEVEL4] = level4;
    }
    return getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint(footprint));
  };

  return {
    getFootprint
  };
};
