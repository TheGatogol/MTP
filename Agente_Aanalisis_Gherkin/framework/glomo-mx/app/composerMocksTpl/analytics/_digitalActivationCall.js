module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const { getAdvancedFootprintWithLevel2, getInternalLinkWithLevel2, addFeatureFlag } = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG_CALL_FLOW = {
    'key': 'glomo.analytics.digitalActivation.flow',
    'defaultValue': true
  };
  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.noLogado,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'activacion servicios moviles',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'general',
    [CONSTANTS.USER_SEGMENT_PROFILE]: { bind: 'profile' }
  };
  const _getAdvancedFootprint = (type, level) => {
    const common = getAdvancedFootprintWithLevel2(level, {
      ...PAGE_COMMON
    });
    const types = {
      requestCall: common,
      callVerification: common,
      activationSuccess: common
    };
    return types[type];
  };
  const ACTIVATION_SUCCESS_LINK = getInternalLinkWithLevel2('iniciar activacion', 'completar activacion', {
    ...PAGE_COMMON
  });
  [
    _getAdvancedFootprint,
    ACTIVATION_SUCCESS_LINK
  ].forEach(item => addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_CALL_FLOW));
  return {
    _getAdvancedFootprint,
    ACTIVATION_SUCCESS_LINK
  };
};
