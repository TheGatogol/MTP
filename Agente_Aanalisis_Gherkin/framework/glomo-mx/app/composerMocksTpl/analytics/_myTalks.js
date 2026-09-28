module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const {
    getInternalLink,
    getAdvancedFootprint,
    getAdvancedFootprintWithLevels2And3,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintWithLevel3,
    getAnalyticFeatureFlag, getError
  } = require('./common/_utils');
  const featureFlagMyTalks = 'myTalks';
  const featureFlagCreateConversationError = 'myTalks.errors.createConversation';
  const featureFlagCreateMessageError = 'myTalks.errors.createMessage';
  const featureFlagMyTalksInterruptCommunicationError = 'myTalks.errors.interruptCommunication';
  const featureFlagErrorBankerOutOffice = 'myTalks.errors.bankerOutOffice';
  const pageCommon = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.levels.level1.help,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'segmentGlobal' },
    [CONSTANTS.USER_SEGMENT_GLOBAL]: { bind: 'segmentCode' }
  };
  const dynamicDataPage = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'segmentType' }
  };
  const _setFeatureFlag = (analytic, featureFlag = featureFlagMyTalks) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _getAdvancedFootprint = (data, featureFlag) => _setFeatureFlag(getAdvancedFootprint(data), featureFlag);
  const _getAdvancedFootprintWithLevels2And3 = (level2 = '', level3 = '', data, featureFlag) => _setFeatureFlag(getAdvancedFootprintWithLevels2And3(level2, level3, data), featureFlag);
  const _getAdvancedFootprintWithLevel2 = (level2, data, featureFlag) => _setFeatureFlag(getAdvancedFootprintWithLevel2(level2, data), featureFlag);
  const _getAdvancedFootprintWithLevel3 = (level3, data, featureFlag) => _setFeatureFlag(getAdvancedFootprintWithLevel3(level3, data), featureFlag);
  const _getErrors = (errorType, data, featureFlag) =>  _setFeatureFlag(getError(errorType, data), featureFlag);

  const _getAdvancedInternalLinks = (param) => {
    const typeLink = {
      openMyTalks: getInternalLink(LITERALS.applicationName.myTalks, {
        ...pageCommon
      })
    };
    return typeLink[param];
  };

  const _getAdvancedFootprints = (param) => {
    const typeFootPrint = {
      assistanceSection: _getAdvancedFootprint(
        {
          ...pageCommon
        }
      ),
      listConversation: _getAdvancedFootprintWithLevels2And3(
        LITERALS.commons.contactBanker,
        { bind: 'segmentInfo' },
        {
          ...dynamicDataPage,
          ...pageCommon
        }
      ),
      contactBanker: _getAdvancedFootprintWithLevel2(
        LITERALS.commons.contactBanker,
        {
          ...pageCommon
        }
      ),
      createNewConversation: _getAdvancedFootprintWithLevel3(
        LITERALS.commons.newTalk,
        {
          ...dynamicDataPage,
          ...pageCommon
        }
      ),
      openConversation: _getAdvancedFootprintWithLevel3(
        LITERALS.commons.openTalk,
        {
          ...dynamicDataPage,
          ...pageCommon
        }
      )
    };
    return typeFootPrint[param];

  };
  const _myTalksGetErrors = (param) => {
    const typeStep = {
      errorListConversation: _getErrors(LITERALS.errors.communicationInterrupted,
        {
          ...dynamicDataPage,
          ...pageCommon
        },
        featureFlagMyTalksInterruptCommunicationError
      ),
      errorCreateConversation: _getErrors(LITERALS.errors.uncreatedTalk,
        {
          ...dynamicDataPage,
          ...pageCommon
        },
        featureFlagCreateConversationError
      ),
      errorCreateMessage: _getErrors(LITERALS.errors.unsentMessage,
        {
          ...dynamicDataPage,
          ...pageCommon
        },
        featureFlagCreateMessageError
      ),
      errorBankerOutOffice: _getErrors(LITERALS.errors.afterhoursBanker,
        {
          [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.contactBanker,
          ...pageCommon
        },
        featureFlagErrorBankerOutOffice
      )
    };
    return typeStep[param];
  };
  return {
    _getAdvancedInternalLinks,
    _getAdvancedFootprints,
    _myTalksGetErrors
  };
};
