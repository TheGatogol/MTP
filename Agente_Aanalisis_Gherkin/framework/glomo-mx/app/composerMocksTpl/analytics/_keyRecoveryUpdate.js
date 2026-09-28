module.exports = () => {
  const commonConstants = require('./common/_constants');
  const commonLiterals = require('./common/_literals');
  const {
    getAdvancedFootprint,
    getAdvancedFootprintError,
    getInternalLink,
    getAdvancedFootprintWithLevel4,
    addFeatureFlag
  } = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG_KEY_RECOVERY_UPDATE = {
    key: 'glomo.analytics.keyRecoveryUpdate',
    defaultValue: true
  };
  const ANALYTICS_FEATURE_FLAG_KEY_RECOVERY_UPDATE_PASSWORD_BLOCKED_ERROR = {
    key: 'glomo.analytics.keyRecoveryUpdate.passwordBlockedError',
    defaultValue: true
  };
  const commonKeys = {
    [commonConstants.PAGE_PAGEINFO_AREA]: commonLiterals.commons.private,
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.information,
    [commonConstants.PAGE_PAGEINFO_PROJECTNAME]: commonLiterals.sections.glomo,
    [commonConstants.PAGE_PAGEINFO_PAGESEGMENT]: commonLiterals.commons.persons
  };
  const levelOneAndTwoCommon = {
    ...commonKeys,
    [commonConstants.PAGE_PAGEINFO_LEVEL1]: commonLiterals.commons.securityAndPrivacy,
    [commonConstants.PAGE_PAGEINFO_LEVEL2]: commonLiterals.commons.access
  };
  const _getAdvancedFootprint = (level3 = '', level4 = '') => getAdvancedFootprint({
    ...levelOneAndTwoCommon,
    [commonConstants.PAGE_PAGEINFO_LEVEL3]: level3,
    [commonConstants.PAGE_PAGEINFO_LEVEL4]: level4
  });
  const PAGE_ERROR_PASSWORD_BLOCKED =  getAdvancedFootprintError(
    commonLiterals.commons.errorKeyBlocked,
    {
      ...levelOneAndTwoCommon,
      [commonConstants.PAGE_PAGEINFO_LEVEL3]: commonLiterals.commons.errorKeyBlocked
    }
  );
  const PAGE_ERROR_SAME_PASSWORD = getAdvancedFootprintError(
    commonLiterals.commons.errorKeySame,
    {
      ...levelOneAndTwoCommon,
      [commonConstants.PAGE_PAGEINFO_LEVEL3]: commonLiterals.commons.errorKeySame
    }
  );
  const INTERNAL_LINK_ACCESSES = getInternalLink(
    commonLiterals.commons.accessAndSignatures,
    {
      ...commonKeys,
      [commonConstants.PAGE_PAGEINFO_LEVEL1]: commonLiterals.commons.securityAndPrivacy
    }
  );
  const INTERNAL_LINK_MODIFY = getInternalLink(
    commonLiterals.commons.modify,
    {
      ...levelOneAndTwoCommon,
      [commonConstants.PAGE_PAGEINFO_LEVEL3]: commonLiterals.commons.modifyPassword
    }
  );
  const INTERNAL_LINK_EXIT_PROCESS_KEYRECOVERY = getInternalLink(
    commonLiterals.commons.outProcess,
    {
      ...levelOneAndTwoCommon,
      [commonConstants.PAGE_PAGEINFO_LEVEL3]: commonLiterals.commons.modifyPassword,
      [commonConstants.PAGE_PAGEINFO_LEVEL4]: commonLiterals.commons.cancelProcess
    }
  );
  const PAGE_VIEWEXIT_PROCESS_MODAL = getAdvancedFootprintWithLevel4(
    commonLiterals.commons.modifyPassword,
    commonLiterals.commons.cancelProcess,
    {
      ...levelOneAndTwoCommon
    }
  );
  [
    INTERNAL_LINK_ACCESSES,
    INTERNAL_LINK_MODIFY,
    INTERNAL_LINK_EXIT_PROCESS_KEYRECOVERY,
    PAGE_VIEWEXIT_PROCESS_MODAL,
    PAGE_ERROR_SAME_PASSWORD,
    _getAdvancedFootprint
  ].forEach(item => addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_KEY_RECOVERY_UPDATE));
  addFeatureFlag(PAGE_ERROR_PASSWORD_BLOCKED, ANALYTICS_FEATURE_FLAG_KEY_RECOVERY_UPDATE_PASSWORD_BLOCKED_ERROR);
  return {
    INTERNAL_LINK_ACCESSES,
    INTERNAL_LINK_MODIFY,
    INTERNAL_LINK_EXIT_PROCESS_KEYRECOVERY,
    PAGE_VIEWEXIT_PROCESS_MODAL,
    _getAdvancedFootprint,
    PAGE_ERROR_PASSWORD_BLOCKED,
    PAGE_ERROR_SAME_PASSWORD
  };
};