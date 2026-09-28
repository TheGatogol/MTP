module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const emergencyReports = (zone) => {
    const ANALYTICS = UTILS.getInternalLink('sidebar emergencias', {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: zone,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.empty,
      [CONSTANTS.PAGE_PAGEINFO_AREA]: zone === 'login' ? LITERALS.commons.public : LITERALS.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: zone === 'login' ? LITERALS.commons.general : LITERALS.commons.persons
    });
    return UTILS.getAnalyticFeatureFlag('emergencyReports.links', ANALYTICS);
  };
  return {
    emergencyReports
  };
};