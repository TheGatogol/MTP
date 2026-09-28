module.exports = (product) => {
  const constants = require('./common/_constants');
  const {
    getAnalyticFeatureFlag,
    getAppStepWithLevel3,
    getAppOnClickStartLevel2,
    getPageVisitWithLevel3,
    getDynamicAppStarted,
    getAppCompleted,
    getAnalyticFeatureFlagError,
    getError} = require('./common/_utils');
  const literals = require('./common/_literals');
  const typologys = {
    car: literals.operative.carLoan,
    loan: literals.operative.consumerLoan,
    mortgage: literals.operative.mortgage
  };
  const common = {
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.loanPayment,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonApp = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.loanPayment,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.loanPayment,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans
  };
  const commonErrors = {
    ...common,
    ...commonLevels
  };
  const commonFunnel = {
    ...common,
    ...commonLevels,
    ...commonApp,
    [constants.APPLICATION_TYPOLOGY]: typologys[product]
  };
  const commonDynamic = {
    [constants.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [constants.APPLICATION_CURRENCY]: {
      bind: 'currency'
    }
  };
  const commonProcess = {
    ...commonDynamic,
    [constants.APPLICATION_PROCESS]: {
      bind: 'process'
    }
  };
  const commonSignType = {
    ...commonProcess,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };
  const _getStepAnalytic = (stepNumber) => {
    const stepCollection = {
      2: {
        data: commonDynamic,
        text: stepNumber + ' ' + literals.tag.secondPaymentDetail
      },
      3: {
        data: commonProcess,
        text: stepNumber + ' ' + literals.tag.thirdAccountPayment
      },
      4: {
        data: commonProcess,
        text: literals.commons.fourthConfirmation
      },
      5: {
        data: commonSignType,
        text: literals.commons.fifthOtp
      }
    };
    return getAnalyticFeatureFlag(product.toLowerCase() + 'Payment',
      getAppStepWithLevel3(stepNumber, stepCollection[stepNumber].text, commonFunnel, stepCollection[stepNumber].data)
    );
  };
  const loanPaymentClickStart = getAppOnClickStartLevel2(literals.commons.loans, literals.commons.detail, {
    ...common,
    ...commonApp,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: literals.operative.loanPaymentDetail
  });
  const loanPaymentVisit = getPageVisitWithLevel3('1 ' + literals.commons.paymentType, commonFunnel);
  const loanPaymentStarted = getDynamicAppStarted('1 ' + literals.commons.paymentType, commonFunnel);
  const loanPaymentCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.finalized, commonFunnel, commonDynamic, commonSignType, {
    [constants.PRODUCT_STATE]: literals.commons.finalized
  });
  const _getAnalyticError = (errorType) => {
    const errors = {
      paymentAccounts: {
        flag: product.toLowerCase() + 'PaymentAccounts',
        text: literals.errors.accountsInfoError
      },
      paymentAmount: {
        flag: product.toLowerCase() + 'PaymentAmount',
        text: literals.errors.advancePaymentNotAllowed
      }
    };
    return getAnalyticFeatureFlagError(errors[errorType].flag, getError(errors[errorType].text, commonErrors));
  };
  [loanPaymentClickStart,
    loanPaymentVisit,
    loanPaymentStarted,
    loanPaymentCompleted].forEach(analytic => getAnalyticFeatureFlag(product.toLowerCase() + 'Payment', analytic));
  return {
    loanPaymentClickStart,
    loanPaymentVisit,
    loanPaymentStarted,
    _getStepAnalytic,
    _getAnalyticError,
    loanPaymentCompleted
  };
};
