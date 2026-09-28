const literals = require('./common/_literals');
const constants = require('./common/_constants');
const { getProduct,
  getAppStep,
  getAppOnClickStartLevel3,
  getPageVisitWithLevel3,
  getDynamicAppStarted,
  getAppCompleted,
  getError,
  getAdvancedFootprintWithLevel3,
  getAnalyticFeatureFlag,
  addFeatureFlag,
  getAnalyticFeatureFlagError } = require('./common/_utils');
module.exports = (CONFIG) => {
  const productConfig = getProduct('tarjetas', 'tarjetas credito');
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };
  const commonFunnel = {
    ...common,
    ...productConfig
  };
  const commonFunnelType = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_STEP]: literals.commons.activateCard
  };
  const commonFunnelTypeCvv = {
    ...commonFunnelType,
    [constants.APPLICATION_APPLICATION_NAME]: 'activar tdc cvv',
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'card activation cvv'
  };
  const commonFunnelTypeQr = {
    ...commonFunnelType,
    [constants.APPLICATION_APPLICATION_NAME]: 'activar tdc qr',
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'card activation qr'
  };
  const commonFunnelCardCvv = {
    ...commonFunnel,
    ...commonFunnelTypeCvv
  };
  const commonFunnelCardQr = {
    ...commonFunnel,
    ...commonFunnelTypeQr
  };
  const dynamicStepData = {
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    }
  };
  const dynamicDataOrigin = {
    [constants.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const _sendAnalyticsStartLevel = (type) => {
    const dataTypes = {
      cvv: {
        data: commonFunnelTypeCvv,
        flag: 'cardActivationCvv'
      },
      qr: {
        data: commonFunnelTypeQr,
        flag: 'cardActivationQr'
      }
    };
    return getAnalyticFeatureFlag(dataTypes[type].flag, getAppOnClickStartLevel3(
      literals.commons.cards, literals.credit, literals.commons.detail, {
        ...commonFunnel, ...dataTypes[type].data,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
        [constants.APPLICATION_STEP]: literals.commons.activateCard
      }
    ));
  };
  const _getStepAnalytic = (numberStep, ...data) => getAppStep(
    numberStep, commonFunnel, ...data
  );
  const cardActivationVisitQr = getPageVisitWithLevel3(
    '1 ' + literals.commons.activateCard, commonFunnelCardQr, {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    });
  const cardActivationVisitCvv = getPageVisitWithLevel3(
    '1 ' + literals.commons.activateCard, commonFunnelCardCvv, {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    });
  const cardActivationStartedQr = getDynamicAppStarted(
    '1 ' + literals.commons.activateCard, commonFunnelCardQr, {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    });
  const cardActivationStartedCvv = getDynamicAppStarted(
    '1 ' + literals.commons.activateCard, commonFunnelCardCvv, {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    });
  const cardActivationStep = _getStepAnalytic('2', '2 escaneo',
    commonFunnel,
    commonFunnelTypeQr, {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const cardStepOtpQr = _getStepAnalytic('3', '3 ' + literals.commons.otp,
    dynamicStepData, {
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.firmaToken,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'activar tdc qr',
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const cardStepOtpCvv = _getStepAnalytic('2', '2 ' + literals.commons.otp,
    dynamicStepData, {
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.firmaToken,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'activar tdc cvv',
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const cardActivationCompletedQr = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.finalized,
    commonFunnelCardQr,
    dynamicDataOrigin, {
      [constants.PRODUCT_STATE]: literals.commons.finalized,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.firmaToken,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const cardActivationCompletedCvv = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.finalized,
    commonFunnelCardCvv,
    dynamicDataOrigin, {
      [constants.PRODUCT_STATE]: literals.commons.finalized,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.firmaToken,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const errorCard = (type) => {
    const dataTypes = {
      qr: {
        data: commonFunnelCardQr,
        flag: 'cardActivationQrError'
      },
      cvv: {
        data: commonFunnelCardCvv,
        flag: 'cardActivationCvvError'
      }
    };
    return getAnalyticFeatureFlagError(dataTypes[type].flag, getError(
      literals.errors.activation, {
        ...dataTypes[type].data,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
      }
    ));
  };
  const fingerprintPageViewFaqs = getAdvancedFootprintWithLevel3(
    'tarjetas con qr', literals.commons.faqs,
    common, {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL2]: 'activar tdc qr',
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const errorQrReadung = getError('error lectura qr',
    commonFunnelCardQr, {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards
    }
  );
  const analyticsFeatureFlagErrorRead = {
    'key': 'glomo.analytics.cardActivationQrErrorRead',
    'defaultValue': true
  };
  const analyticsFeatureFlagActivationCvv = {
    'key': 'glomo.analytics.cardActivationCvv',
    'defaultValue': true
  };
  const analyticsFeatureFlagActivationQr = {
    'key': 'glomo.analytics.cardActivationQr',
    'defaultValue': true
  };
  [cardActivationVisitCvv,
    cardActivationStartedCvv,
    cardStepOtpCvv,
    cardActivationCompletedCvv].forEach(
    analytic => addFeatureFlag(analytic, analyticsFeatureFlagActivationCvv));
  [cardActivationVisitQr,
    cardActivationStartedQr,
    cardActivationStep,
    cardStepOtpQr,
    cardActivationCompletedQr,
    fingerprintPageViewFaqs].forEach(
    analytic => addFeatureFlag(analytic, analyticsFeatureFlagActivationQr));
  getAnalyticFeatureFlagError(analyticsFeatureFlagErrorRead, errorQrReadung);
  return {
    _sendAnalyticsStartLevel,
    cardActivationVisitCvv,
    cardActivationVisitQr,
    cardActivationStartedCvv,
    cardActivationStartedQr,
    cardActivationStep,
    cardStepOtpCvv,
    cardStepOtpQr,
    cardActivationCompletedCvv,
    cardActivationCompletedQr,
    errorCard,
    fingerprintPageViewFaqs,
    errorQrReadung
  };
};
