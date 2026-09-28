module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');

  const { getAdvancedFootprint, getInternalLink, addFeatureFlag } = require('./common/_utils');

  const analyticsFeatureFlag = {
    key: 'glomo.analytics.languageSettings',
    defaultValue: true
  };

  const {
    PAGE_PAGEINFO_LEVEL1,
    PAGE_PAGEINFO_LEVEL2,
    PAGE_PAGEINFO_AREA,
    PAGE_PAGEINFO_PAGEINTENT,
    PAGE_PAGEINFO_PAGESEGMENT,
    PAGE_PAGEINFO_PROJECTNAME,
    APPLICATION_CUSTOM_FIELDS
  } = constants;

  const { englishApp, commons, sections } = literals;
  const { settings, selectLanguage, saveChanges } = englishApp;
  const { private: privateCommons, information, persons } = commons;

  const commonData = {
    [PAGE_PAGEINFO_LEVEL1]: settings,
    [PAGE_PAGEINFO_LEVEL2]: selectLanguage,
    [PAGE_PAGEINFO_AREA]: privateCommons,
    [PAGE_PAGEINFO_PAGEINTENT]: information,
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_PROJECTNAME]: sections.glomo
  };

  const getAdvancedFootPrint = getAdvancedFootprint({
    [APPLICATION_CUSTOM_FIELDS]: { bind: 'languageSelect' },
    ...commonData
  });

  const getAdvancedInternalLink = getInternalLink(saveChanges, {
    [APPLICATION_CUSTOM_FIELDS]: { bind: 'languageSelect' },
    ...commonData
  });

  [getAdvancedFootPrint, getAdvancedInternalLink].forEach((item) =>
    addFeatureFlag(item, analyticsFeatureFlag)
  );
  return {
    getAdvancedFootPrint,
    getAdvancedInternalLink
  };
};
