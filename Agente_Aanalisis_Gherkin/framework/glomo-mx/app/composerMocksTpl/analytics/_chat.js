const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'chat en linea',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.USER_USERSTATE]: LITERALS.commons.noLogado
};

module.exports = () => {
  const CONVERSATION_ADVISER_ANA = UTILS.getAnalyticFeatureFlag('chat', UTILS.getAdvancedFootprint(COMMONS, {[CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'conversacion asesor'}));
  const CONVERSATION_ADVISER_SUCCESS_ANA = UTILS.getAnalyticFeatureFlag('chat', UTILS.getAdvancedFootprint(COMMONS, {[CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'conversacion asesor resuelta'}));
  const ERROR_CHAT_ANA = UTILS.getAnalyticFeatureFlag('chat.error', UTILS.getAdvancedFootprint(COMMONS, {[CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'error chat', [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error chat'}));
  return {
    CONVERSATION_ADVISER_ANA,
    CONVERSATION_ADVISER_SUCCESS_ANA,
    ERROR_CHAT_ANA
  };
};