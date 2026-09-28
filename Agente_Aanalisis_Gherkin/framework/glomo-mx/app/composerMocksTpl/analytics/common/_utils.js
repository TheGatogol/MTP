'use strict';

const CONSTANTS = require('./_constants');
const LITERALS = require('./_literals');

const _getSingleObject = (data) => {
  return data.reduce((acc, obj) => {
    return {
      ...acc,
      ...obj
    };
  });
};

const getAppStarted = (textLevel, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appStarted,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: textLevel,
    ..._getSingleObject(data)
  }
});

const getAppStartedWithoutLevel = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appStarted,
  [CONSTANTS.DATALAYER_NAME]: _getSingleObject(data)
});

const getAppStartedWithLevel2 = (textLevel, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appStarted,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: textLevel,
    ..._getSingleObject(data)
  }
});

const getActionData = (action, ...data) => ({
  action,
  [CONSTANTS.DATALAYER_NAME]: _getSingleObject(data)
});

const getClickClose = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.clickClose,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getClickThrough = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.clickThrough,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getDynamicAppStarted = (textLevel, ...data) => {
  const appStartedObj = getAppStarted(textLevel, ...data);
  appStartedObj[CONSTANTS.DATALAYER_NAME][CONSTANTS.APPLICATION_STEP] = {
    bind: 'detail'
  };
  return appStartedObj;
};

const getStaticAppStarted = (text, textLevel, ...data) => {
  const appStartedObj = getAppStarted(textLevel, ...data);
  appStartedObj[CONSTANTS.DATALAYER_NAME][CONSTANTS.APPLICATION_STEP] = text;
  return appStartedObj;
};

const getOCAccess = (textStep, textFullfilment, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.APPLICATION_STEP]: textStep,
    [CONSTANTS.APPLICATION_FULLFILMENT]: textFullfilment,
    ..._getSingleObject(data)
  }
});

const getOnClickStart = (textStep, pageIntent, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [CONSTANTS.APPLICATION_STEP]: textStep,
    ..._getSingleObject(data)
  }
});

const getAppOnClickStartLevel = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getAppOnClickStartLevel2 = (level1, level2, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
  }
});

const getAppOnClickStartLevel3 = (level1, level2, level3, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3
  }
});

const getAppOnClickStartLevel2AppType = (appType, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appOnClickStart,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: appType
  }
});

const getOnClickStartLink = (textStep, pageIntent, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [CONSTANTS.APPLICATION_STEP]: textStep,
    ..._getSingleObject(data)
  }
});

const getAppSignedContracts = (level2 = '', pageIntent, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.appSignedContracts,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    ..._getSingleObject(data)
  }
});

const getInternalLink = (textLinkName = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: textLinkName,
    ..._getSingleObject(data)
  }
});

const getInternalLinkWithLevel2 = (textLinkName = '', level2 = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: textLinkName,
    ..._getSingleObject(data)
  }
});

const getInternalLinkWithPageActivityLevel3 = (textLinkName = '', level3 = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: textLinkName,
    ..._getSingleObject(data)
  }
});

const getExternalLink = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.externalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getExternalLinkWithLink = (link = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.externalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: link,
    ..._getSingleObject(data)
  }
});

const getAdvancedExternalLinkWithLevel4 = (level3 = '', level4 = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.externalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: level4,
    ..._getSingleObject(data)
  }
});

const getInternalLinkWithLevel3 = (level3 = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: level3,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    ..._getSingleObject(data)
  }
});

const getInteractionLink = (textInteractionName = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.interactionLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: textInteractionName,
    ..._getSingleObject(data)
  }
});

const getInteractionLinkWithLevel3 = (level3 = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.interactionLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: level3,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    ..._getSingleObject(data)
  }
});

const getPageVisit = (text, ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appPageVisit,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: text,
    [CONSTANTS.APPLICATION_STEP]: text,
    ..._getSingleObject(data)
  }
});

const getPageVisitWithLevel3 = (text, ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appPageVisit,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: text,
    [CONSTANTS.APPLICATION_STEP]: text,
    ..._getSingleObject(data)
  }
});

const getAppPageVisitLevel2 = (text, ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appPageVisit,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.APPLICATION_STEP]: text,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: text
  }
});

const getPageVisitRaw = (...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appPageVisit,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprint = (...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintData = (type, action, ...data) => ({
  type: LITERALS.types[type],
  action: LITERALS.actions[action],
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintWithLevel1 = (level1 = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintWithLevel2 = (level2 = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintWithLevel3 = (level3 = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintWithLevel4 = (level3 = '', level4 = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: level4,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintWithLevels2And3 = (level2 = '', level3 = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintError = (error = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: error,
    ..._getSingleObject(data)
  }
});

const getAdvancedFootprintErrorLevel2 = (level1, error = '', ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: error,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: error
  }
});

const getAppStep = (numberStep, ...data) => ({
  type: LITERALS.types.view,
  action: `${LITERALS.actions.genericStep} ${numberStep}`,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});


const getAppStepLevel2AppOffer = (numberStep, appStep, appOffer, ...data) => getAppStep(
  numberStep,
  {
    [CONSTANTS.APPLICATION_STEP]: appStep,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: appStep,
    [CONSTANTS.APPLICATION_OFFER]: appOffer || ''
  },
  ...data
);

const getAppStepWithLevel3 = (numberStep, appStep, ...data) => getAppStep(
  numberStep,
  {
    [CONSTANTS.APPLICATION_STEP]: appStep,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: appStep
  },
  ...data
);

const getAppCompleted = (text, state, ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appCompleted,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.APPLICATION_STATE]: state,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: text,
    [CONSTANTS.APPLICATION_STEP]: text,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    },
    ..._getSingleObject(data)
  }
});

const getAppCompletedRaw = (...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appCompleted,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

const getAppCompletedLevel2 = (text, state, ...data) => ({
  type: LITERALS.types.view,
  action: LITERALS.actions.appCompleted,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data),
    [CONSTANTS.APPLICATION_STATE]: state,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: text,
    [CONSTANTS.APPLICATION_STEP]: text,
    [CONSTANTS.PRODUCT_STATE]: state,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  }
});

const getProduct = (primaryCategory, productSubtype, productName) => (Object.assign({},
  primaryCategory ? { [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: primaryCategory } : {},
  productSubtype ? { [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: productSubtype } : {},
  productName ? { [CONSTANTS.PRODUCT_PRODUCT_NAME]: productName } : {}
));

const getError = (errorType, ...data) => {
  return {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: errorType,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: errorType,
      ..._getSingleObject(data)
    }
  };
};

const getLinkError = (errorType, ...data) => {
  return {
    type: LITERALS.types.link,
    action: LITERALS.actions.siteError,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: errorType,
      [CONSTANTS.APPLICATION_ERROR_TYPE]: errorType,
      ..._getSingleObject(data)
    }
  };
};

const getSiteError = (textErrorType = '', ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.siteError,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.APPLICATION_ERROR_TYPE]: textErrorType,
    ..._getSingleObject(data)
  }
});

const addFeatureFlag = (obj, flag) => {
  Object.assign(obj, {featureFlag: flag});
};

const getAnalyticFeatureFlag = (flagName, analytic, value = true) => {
  return Object.assign(analytic, {
    featureFlag: {
      'key': `glomo.analytics.${flagName}`,
      'defaultValue': value
    }
  });
};

const getAnalyticFeatureFlagError = (flagName, analytic) => {
  return Object.assign(analytic, {
    featureFlag: {
      'key': `glomo.analytics.${flagName}.errors`,
      'defaultValue': true
    }
  });
};

const OC_ACCESS_DASHBOARD_DYNAMIC_DATA = {
  [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
    bind: 'offers'
  }
};

const getDownloadLinkWithLevel2 = (text, level2, ...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.downloadLink,
  [CONSTANTS.DATALAYER_NAME]: {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: text,
    ..._getSingleObject(data)
  }
});

const getDownloadLink = (...data) => ({
  type: LITERALS.types.link,
  action: LITERALS.actions.downloadLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ..._getSingleObject(data)
  }
});

module.exports = {
  getAppStartedWithLevel2,
  addFeatureFlag: addFeatureFlag,
  getActionData: getActionData,
  getAdvancedExternalLinkWithLevel4,
  getAdvancedFootprint,
  getAdvancedFootprintData,
  getAdvancedFootprintError: getAdvancedFootprintError,
  getAdvancedFootprintWithLevel2: getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevel3: getAdvancedFootprintWithLevel3,
  getAdvancedFootprintWithLevel4: getAdvancedFootprintWithLevel4,
  getAdvancedFootprintWithLevels2And3: getAdvancedFootprintWithLevels2And3,
  getAnalyticFeatureFlag: getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError: getAnalyticFeatureFlagError,
  getAppCompleted: getAppCompleted,
  getAppCompletedRaw: getAppCompletedRaw,
  getAppStartedWithoutLevel: getAppStartedWithoutLevel,
  getAppStep: getAppStep,
  getAppStepWithLevel3: getAppStepWithLevel3,
  getClickClose: getClickClose,
  getClickThrough: getClickThrough,
  getDynamicAppStarted: getDynamicAppStarted,
  getStaticAppStarted: getStaticAppStarted,
  getAppStarted: getAppStarted,
  getError: getError,
  getOCAccess: getOCAccess,
  getOnClickStart: getOnClickStart,
  getOnClickStartLink: getOnClickStartLink,
  getAppOnClickStartLevel,
  getAppOnClickStartLevel2,
  getAppOnClickStartLevel3,
  getAppOnClickStartLevel2AppType,
  getAppSignedContracts,
  getInternalLink: getInternalLink,
  getExternalLink: getExternalLink,
  getExternalLinkWithLink: getExternalLinkWithLink,
  getAdvancedFootprintWithLevel1: getAdvancedFootprintWithLevel1,
  getInternalLinkWithLevel2: getInternalLinkWithLevel2,
  getInternalLinkWithLevel3: getInternalLinkWithLevel3,
  getInternalLinkWithPageActivityLevel3: getInternalLinkWithPageActivityLevel3,
  getInteractionLink: getInteractionLink,
  getInteractionLinkWithLevel3: getInteractionLinkWithLevel3,
  getLinkError: getLinkError,
  getPageVisit: getPageVisit,
  getPageVisitWithLevel3: getPageVisitWithLevel3,
  getPageVisitRaw: getPageVisitRaw,
  getAppPageVisitLevel2,
  getAdvancedFootprintErrorLevel2: getAdvancedFootprintErrorLevel2,
  getAppStepLevel2AppOffer,
  getAppCompletedLevel2,
  getProduct: getProduct,
  getSiteError: getSiteError,
  OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
  getDownloadLinkWithLevel2,
  getDownloadLink
};
