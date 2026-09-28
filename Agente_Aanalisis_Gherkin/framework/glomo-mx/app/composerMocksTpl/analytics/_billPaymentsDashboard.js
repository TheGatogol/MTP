/* eslint-disable max-statements */
module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getError,
    getAppOnClickStartLevel2,
    getAppCompleted,
    getAppStepWithLevel3,
    getAnalyticFeatureFlag,
    getPageVisitWithLevel3,
    getAppStartedWithLevel2,
    getAnalyticFeatureFlagError,
    getAdvancedFootprintWithLevel3,
    getInternalLinkWithPageActivityLevel3,
    getAdvancedFootprint } = require('./common/_utils');
  const defaultTextLinkName = { bind: 'textLinkName' };
  const flagBillPaymentsDashboard = {
    funnelAndAdvanceFootprint: 'billPaymentsHome.FunnelAndAdvanceFootprint',
    internalExitProcess: 'billPaymentsHome.CustomTagExitProcess',
    internalSaveService: 'billPaymentsHome.CustomTagSaveService',
    internalTagQuestion: 'billPaymentsHome.CustomTagQuestion',
    internalCamera: 'billPaymentsHome.CustomTagCamera',
    internalTagQr: 'billPaymentsHome.CustomTagQr',
    internalEditService: 'billPaymentsHome.CustomTagEditService',
    internalEditServiceOrigin: 'billPaymentsHome.CustomTagEditServiceOrigin',
    internalEditAmountOrigin: 'billPaymentsHome.CustomTagEditAmountOrigin',
    internalEditServiceConcept: 'billPaymentsHome.CustomTagEditServiceConcept',
    internalEditAmountConcept: 'billPaymentsHome.CustomTagEditAmountConcept',
    internalEditOriginConcept: 'billPaymentsHome.CustomTagEditOriginConcept',
    internalEditServiceSummary: 'billPaymentsHome.CustomTagEditServiceSummary',
    internalEditAmountSummary: 'billPaymentsHome.CustomTagEditAmountSummary',
    internalEditOriginSummary: 'billPaymentsHome.CustomTagEditOriginSummary',
    internalEditConceptSummary: 'billPaymentsHome.CustomTagEditConceptSummary',
    internalReuseOperation: 'billPaymentsHome.CustomTagReuseOperation',
    internalShare: 'billPaymentsHome.CustomTagShare'
  };
  const flagErrorBillPaymentsDashboard = {
    amount: 'billPaymentsHome.ErrorAmount',
    amountCaptureLine: 'billPaymentsHome.ErrorAmountCaptureLine',
    barcode: 'billPaymentsHome.ErrorBarcode',
    duplicateAlias: 'billPaymentsHome.ErrorDuplicateAlias',
    infoNotAviable: 'billPaymentsHome.ErrorInfoNotAviable',
    noEmail: 'billPaymentsHome.ErrorNoEmail',
    otpCaptureLine: 'billPaymentsHome.ErrorOtpCaptureLine',
    pay: 'billPaymentsHome.ErrorPay',
    qr: 'billPaymentsHome.ErrorQr',
    referenceCaptureLine: 'billPaymentsHome.ErrorReferenceCaptureLine',
    saveService: 'billPaymentsHome.ErrorSaveService'
  };
  const commonAnalyticsBase = {
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: literals.empty,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };
  const commonsFunnelBase = {
    ...commonAnalyticsBase,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.payService,
    [constants.APPLICATION_STEP]: literals.commons.empty,
    [constants.USER_DEVICE_MOBILE]: literals.commons.yes,
    [constants.APPLICATION_APPLICATION_NAME]: literals.empty,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.empty,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.empty,
    [constants.APPLICATION_FULLFILMENT]: literals.empty
  };
  const pageCommonHappyPath = {
    ...commonAnalyticsBase,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.payService,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.billPayments
  };
  const commonHelperError = (level3, level4, errorPage = level4) => ({
    ...commonsFunnelBase,
    [constants.PAGE_PAGEINFO_LEVEL3]: level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: level4,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
  });
  const appOnclickStartServiceDetail = (level1, level2) => {
    const analytics = {
      ...pageCommonHappyPath,
      [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
      [constants.PRODUCT_PRODUCT_0_GROUP]: { bind: 'serviceName' },
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: `${literals.commons.service}s`,
      [constants.APPLICATION_STEP]: literals.commons.payNew,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    };
    return getAnalyticFeatureFlag(flagBillPaymentsDashboard.funnelAndAdvanceFootprint, getAppOnClickStartLevel2(level1, level2, analytics));
  };
  const appPageVisitPayments = level3 => {
    const analytics = {
      ...pageCommonHappyPath,
      [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
      [constants.PRODUCTS_ATTRIBUTES]: literals.empty,
      ['products.attributes.length']: 0,
      ['products']: literals.empty,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.payService
    };
    return getAnalyticFeatureFlag(flagBillPaymentsDashboard.funnelAndAdvanceFootprint, getPageVisitWithLevel3(level3, analytics));
  };
  const appStartedPayments = (level2, level3) => {
    const analytics = {
      ...pageCommonHappyPath,
      [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      [constants.APPLICATION_STEP]: { bind: 'appStartedStep' }
    };
    return getAnalyticFeatureFlag(flagBillPaymentsDashboard.funnelAndAdvanceFootprint, getAppStartedWithLevel2(level2, analytics));
  };
  const stepProcessData = {
    [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' }
  };
  const stepPayOptionsData = {
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'payOptions' }
  };
  const stepAmountAndPaymentsData = {
    [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'amount' }
  };
  const stepProduct1AmountAndPaymentsData = {
    [constants.PRODUCT_PRODUCT_1_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_PRODUCT_1_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_PRODUCT_1_RATE_PAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_PRODUCT_1_RATE_PAYMENTSAMOUNT]: { bind: 'amount' }
  };
  const stepProduct2AmountAndPaymentsData = {
    [constants.PRODUCT_PRODUCT_2_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_PRODUCT_2_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_PRODUCT_2_RATE_PAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_PRODUCT_2_RATE_PAYMENTSAMOUNT]: { bind: 'amount' }
  };
  const stepSingleServiceData = {
    [constants.PRODUCT_PRODUCT_0_GROUP]: { bind: 'serviceName' },
    ['products.attributes.length']: 1,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: `${literals.commons.service}s`
  };
  const stepServiceAsProduct2Data = {
    [constants.PRODUCT_PRODUCT_2_GROUP]: { bind: 'serviceName' },
    [constants.PRODUCT_PRODUCT_2_RATE_PAYMENTSTYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_PRODUCT_2_PRIMARY_CATEGORY]: `${literals.commons.service}s`
  };
  const stepAccountAsOriginData = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'accountProductName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'accountProductSubtype' }
  };
  const stepCardAsOriginData = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'cardProductName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'cardProductSubtype' }
  };
  const destinationCardProduct2Data = {
    [constants.PRODUCT_ATTRIBUTES_2_PRODUCT_NAME_DESTINATION]: { bind: 'cardProductName' },
    [constants.PRODUCT_ATTRIBUTES_2_PRODUCT_SUBTYPE_DESTINATION]: { bind: 'cardProductSubtype' }
  };
  const stepOriginAccountToCardData = {
    ...stepAccountAsOriginData,
    [constants.PRODUCT_PRODUCT_1_GROUP]: { bind: 'serviceName' },
    [constants.PRODUCT_PRODUCT_1_RATE_PAYMENTSTYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: `${literals.commons.service}s`,
    ...stepProduct2AmountAndPaymentsData,
    [constants.PRODUCT_PRODUCT_2_PRIMARY_CATEGORY]: literals.commons.cards,
    ...destinationCardProduct2Data
  };
  const destinationCardData = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: { bind: 'cardProductName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION]: { bind: 'cardProductSubtype' }
  };
  const destinationAccountData = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: { bind: 'accountProductName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION]: { bind: 'accountProductSubtype' }
  };
  const destinationAccountProduct2Data = {
    [constants.PRODUCT_ATTRIBUTES_2_PRODUCT_NAME_DESTINATION]: { bind: 'accountProductName' },
    [constants.PRODUCT_ATTRIBUTES_2_PRODUCT_SUBTYPE_DESTINATION]: { bind: 'accountProductSubtype' }
  };
  const stepConceptAndOtpSharedData = {
    ...stepProduct1AmountAndPaymentsData,
    ...stepServiceAsProduct2Data
  };
  const appStepPaymentsByNumber = {
    2: {
      ...stepSingleServiceData,
      ...stepProcessData
    },
    3: {
      ...stepSingleServiceData,
      ...stepProcessData,
      [constants.APPLICATION_PAYMENT_TYPE]: { bind: 'paymentType' }
    },
    4: {
      ...stepProcessData,
      ...stepAmountAndPaymentsData,
      ...stepOriginAccountToCardData
    },
    5: {
      ...stepPayOptionsData,
      ...stepProcessData,
      ...stepAmountAndPaymentsData,
      ...stepAccountAsOriginData,
      ...stepProduct1AmountAndPaymentsData,
      ...destinationCardData,
      ...stepServiceAsProduct2Data,
      [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.cards
    },
    6: {
      ...stepPayOptionsData,
      ...stepProcessData,
      ...stepAmountAndPaymentsData,
      ...stepOriginAccountToCardData
    },
    7: {
      ...stepPayOptionsData,
      ...stepProcessData,
      ...stepAmountAndPaymentsData,
      ...stepCardAsOriginData,
      ...stepConceptAndOtpSharedData,
      ...destinationAccountData,
      [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.account
    }
  };
  const appStepPayments = (numberStep, level2, level3) => {
    const analytics = {
      ...pageCommonHappyPath,
      ...appStepPaymentsByNumber[numberStep],
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };

    return getAnalyticFeatureFlag(
      flagBillPaymentsDashboard.funnelAndAdvanceFootprint,
      getAppStepWithLevel3(numberStep, level3, analytics)
    );
  };
  const getCompletedPaymentsBaseData = level2 => ({
    ...pageCommonHappyPath,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    ...stepPayOptionsData,
    ...stepProcessData
  });
  const completedPaymentsServiceSelectionData = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
    [constants.PRODUCT_PRODUCT_0_GROUP]: { bind: 'serviceName' },
    [constants.APPLICATION_PAYMENT_TYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: `${literals.commons.service}s`
  };
  const completedPaymentsProduct1ServiceData = {
    [constants.PRODUCT_PRODUCT_1_GROUP]: { bind: 'serviceName' },
    [constants.PRODUCT_PRODUCT_1_RATE_PAYMENTSTYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: `${literals.commons.service}s`
  };
  const completedPaymentsServiceSelectionAndAmountsData = {
    ...completedPaymentsServiceSelectionData,
    ...stepProduct1AmountAndPaymentsData,
    ...stepProduct2AmountAndPaymentsData
  };
  const submitCompletedPaymentsAnalytics = (level3, state, analytics) => {
    return getAnalyticFeatureFlag(
      flagBillPaymentsDashboard.funnelAndAdvanceFootprint,
      getAppCompleted(level3, state, analytics)
    );
  };
  const appCompletedPaymentsReferenceExpiring = (level2, level3, state) => {
    const analytics = {
      ...getCompletedPaymentsBaseData(level2),
      ...completedPaymentsServiceSelectionAndAmountsData,
      ...destinationAccountData,
      [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.account,
      [constants.PRODUCT_PRODUCT_2_PRIMARY_CATEGORY]: literals.commons.cards,
      ...destinationCardProduct2Data
    };
    return submitCompletedPaymentsAnalytics(level3, state, analytics);
  };
  const appCompletedPaymentsSuccess = (level2, level3, state) => {
    const analytics = {
      ...getCompletedPaymentsBaseData(level2),
      ...stepAmountAndPaymentsData,
      ...stepAccountAsOriginData,
      ...stepProduct1AmountAndPaymentsData,
      ...destinationCardData,
      ...stepServiceAsProduct2Data,
      [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.cards
    };
    return submitCompletedPaymentsAnalytics(level3, state, analytics);
  };
  const appCompletedPaymentsProcess = (level2, level3, state) => {
    const analytics = {
      ...getCompletedPaymentsBaseData(level2),
      ...completedPaymentsServiceSelectionAndAmountsData,
      ...destinationCardData,
      [constants.PRODUCT_PRODUCT_1_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_PRODUCT_2_PRIMARY_CATEGORY]: literals.commons.account,
      ...destinationAccountProduct2Data
    };
    return submitCompletedPaymentsAnalytics(level3, state, analytics);
  };

  const appCompletedPaymentsReject = (level2, level3, state) => {
    const analytics = {
      ...getCompletedPaymentsBaseData(level2),
      [constants.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
      ...stepAmountAndPaymentsData,
      ...stepCardAsOriginData,
      ...completedPaymentsProduct1ServiceData,
      ...stepProduct2AmountAndPaymentsData,
      [constants.PRODUCT_PRODUCT_2_PRIMARY_CATEGORY]: literals.commons.account,
      ...destinationAccountProduct2Data
    };
    return submitCompletedPaymentsAnalytics(level3, state, analytics);
  };
  const appPageVisitWithLevel3 = (level3, extraAnalytics = {}) => {
    const analytics = {
      ...commonsFunnelBase,
      ...extraAnalytics
    };
    return getAnalyticFeatureFlag(
      flagBillPaymentsDashboard.funnelAndAdvanceFootprint,
      getAdvancedFootprintWithLevel3(level3, analytics)
    );
  };
  const appPageErrorWithLevel3 = (flag, level3, errorName, extraErrorName) => {
    const analytics = commonHelperError(level3, errorName, extraErrorName);
    return getAnalyticFeatureFlagError(
      flag,
      getAdvancedFootprint(analytics)
    );
  };
  const appPageVisitNoResults = () => appPageVisitWithLevel3(literals.commons.searchWithoutResults);
  const appPageVisitPaymentOption = () => appPageVisitWithLevel3('opcion de pago', { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'payOptions' } });
  const appPageVisitExitProcess = () => appPageVisitWithLevel3(literals.commons.exit);
  const appPageVisitSaveService = () => appPageVisitWithLevel3(literals.commons.saveServiceOrTax);
  const appPageViewErrorNoEmail = () => {
    const analytics = {
      ...commonsFunnelBase
    };
    return getAnalyticFeatureFlagError(flagErrorBillPaymentsDashboard.noEmail, getError(literals.errors.emailNotRegistered, analytics));
  };
  const appPageViewErrorGeneric = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.saveService,
      literals.commons.saveServiceOrTax,
      literals.errors.weHadAProblem
    );
  const appPageViewErrorDuplicateAlias = () => {
    const analytics = {
      ...commonsFunnelBase
    };
    return getAnalyticFeatureFlagError(flagErrorBillPaymentsDashboard.duplicateAlias, getError(literals.errors.duplicateAlias, analytics));
  };
  const appPageVisitReUseOperation = () => appPageVisitWithLevel3(literals.commons.successfulPage);
  const appPageViewInfoNotAvailable = () => {
    const analytics = commonHelperError(
      `1 ${literals.commons.service}`,
      literals.commons.infoNotAvailable
    );
    return getAnalyticFeatureFlagError(flagErrorBillPaymentsDashboard.infoNotAviable, getAdvancedFootprint(analytics));
  };
  const appPageViewSearchService = () => appPageVisitWithLevel3(`1 ${literals.commons.service}`, {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.choseNew
  });
  const appPageViewBarCodeError = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.barcode,
      `2 ${literals.commons.reference}`,
      literals.errors.invalidBarcode
    );
  const appPageViewQrCodeError = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.qr,
      `2 ${literals.commons.reference}`,
      literals.errors.invalidQrCode
    );
  const appPageViewErrorCaptureLine = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.referenceCaptureLine,
      `2 ${literals.commons.reference}`,
      `error ${literals.errors.invalidCaptureLine}`
    );
  const appPageViewErrorCaptureLineAmount = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.amountCaptureLine,
      `3 ${literals.commons.quantityAmount}`,
      `error ${literals.errors.invalidCaptureLine}`,
      literals.errors.invalidCaptureLine
    );
  const appPageViewErrorInvalidAmount = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.amount,
      `3 ${literals.commons.quantityAmount}`,
      literals.errors.incorrectAmount
    );
  const appPageVisitPaymentNotMade = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.pay,
      `6 ${literals.commons.summary}`,
      literals.errors.paymentFailed
    );
  const appPageVisitInvalidCaptureLineOtp = () =>
    appPageErrorWithLevel3(
      flagErrorBillPaymentsDashboard.otpCaptureLine,
      `7 ${literals.commons.otp}`,
      literals.errors.captureLineNotValid
    );
  const createInternalLinkHandler = flag => {
    return (level3, linkName = defaultTextLinkName) => {
      const analytics = {
        ...commonsFunnelBase
      };
      return getAnalyticFeatureFlag(flag, getInternalLinkWithPageActivityLevel3(linkName, level3, analytics));
    };
  };
  const appInternalLinkReuseOperation = (level3) => {
    const analytics = {
      ...commonsFunnelBase,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.payService,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage
    };
    return getAnalyticFeatureFlag(flagBillPaymentsDashboard.internalReuseOperation, getInternalLinkWithPageActivityLevel3('reutilizar operacion', level3, analytics));
  };
  const appInternalLinkExitProcess = createInternalLinkHandler(flagBillPaymentsDashboard.internalExitProcess);
  const appInternalLinkSaveService = createInternalLinkHandler(flagBillPaymentsDashboard.internalSaveService);
  const appInternalLinkQuestion = createInternalLinkHandler(flagBillPaymentsDashboard.internalTagQuestion);
  const appInternalLinkScannerCode = createInternalLinkHandler(flagBillPaymentsDashboard.internalCamera);
  const appInternalLinkScannerCodeQr = createInternalLinkHandler(flagBillPaymentsDashboard.internalTagQr);
  const appInternalLinkEditServiceAmount = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditService);
  const appInternalLinkEditServiceOrigin = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditServiceOrigin);
  const appInternalLinkEditAmountOrigin = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditAmountOrigin);
  const appInternalLinkEditServiceConcept = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditServiceConcept);
  const appInternalLinkEditAmountConcept = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditAmountConcept);
  const appInternalLinkEditOriginConcept = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditOriginConcept);
  const appInternalLinkEditServiceSummary = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditServiceSummary);
  const appInternalLinkEditAmountSummary = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditAmountSummary);
  const appInternalLinkEditOriginSummary = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditOriginSummary);
  const appInternalLinkEditConceptSummary = createInternalLinkHandler(flagBillPaymentsDashboard.internalEditConceptSummary);
  const appInternalLinkShare = createInternalLinkHandler(flagBillPaymentsDashboard.internalShare);
  return {
    appStepPayments,
    appOnclickStartServiceDetail,
    appPageVisitPayments,
    appCompletedPaymentsReferenceExpiring,
    appCompletedPaymentsSuccess,
    appCompletedPaymentsProcess,
    appCompletedPaymentsReject,
    appStartedPayments,
    appPageViewBarCodeError,
    appPageViewErrorNoEmail,
    appPageViewQrCodeError,
    appPageVisitNoResults,
    appPageVisitPaymentOption,
    appPageVisitExitProcess,
    appPageVisitSaveService,
    appPageViewErrorGeneric,
    appPageViewErrorDuplicateAlias,
    appPageVisitReUseOperation,
    appPageViewInfoNotAvailable,
    appPageViewErrorCaptureLine,
    appPageViewErrorCaptureLineAmount,
    appPageViewErrorInvalidAmount,
    appPageVisitPaymentNotMade,
    appPageVisitInvalidCaptureLineOtp,
    appPageViewSearchService,
    appInternalLinkReuseOperation,
    appInternalLinkExitProcess,
    appInternalLinkSaveService,
    appInternalLinkQuestion,
    appInternalLinkScannerCode,
    appInternalLinkScannerCodeQr,
    appInternalLinkEditServiceAmount,
    appInternalLinkEditServiceOrigin,
    appInternalLinkEditAmountOrigin,
    appInternalLinkEditServiceConcept,
    appInternalLinkEditAmountConcept,
    appInternalLinkEditOriginConcept,
    appInternalLinkEditServiceSummary,
    appInternalLinkEditAmountSummary,
    appInternalLinkEditOriginSummary,
    appInternalLinkEditConceptSummary,
    appInternalLinkShare
  };
};
