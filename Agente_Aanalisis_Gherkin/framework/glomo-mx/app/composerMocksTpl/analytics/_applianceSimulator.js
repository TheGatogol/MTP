module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getInternalLink,
    getOnClickStart,
    getAdvancedFootprint,
    getAdvancedFootprintError
  } = require('./common/_utils');
  const sustainableApplianceSimulator = 'sostenibilidad simulador electrodomesticos';
  const generalCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.applianceSimulator,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: literals.empty
  };
  const createAdvancedFootprint = (customFields, level3) => {
    return getAdvancedFootprint({
      ...generalCommon,
      ...customFields,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    });
  };
  const createOnClickStart = (applicationDetails, level3) => {
    return getOnClickStart(sustainableApplianceSimulator, literals.empty, {
      ...generalCommon,
      ...applicationDetails,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    });
  };
  const createInternalLink = (action, level3) => {
    return getInternalLink(action, {
      ...generalCommon,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    });
  };
  const simulatorPageView = createAdvancedFootprint({
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  },
  literals.empty
  );
  const editModal = createAdvancedFootprint({
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    }
  },
  literals.sections.editExpense
  );
  const customizeModal = createAdvancedFootprint({
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    }
  },
  literals.sections.customizeExpense
  );
  const calculateModal = createAdvancedFootprint({
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    }
  },
  literals.sections.howToDoCalculations
  );
  const errorModal = getAdvancedFootprintError('pageInfoErrorPage', {
    ...generalCommon,
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    },
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.sections.noInformation
  });
  const editExpenseClick = createInternalLink(literals.actions.update, literals.sections.editExpense);
  const customizeExpenseClick = createInternalLink(literals.actions.update, literals.sections.customizeExpense);
  const promotionsLandingViewMore = createAdvancedFootprint({},
    literals.reward.promotions + ' ' + literals.sections.appliancePromotions
  );
  const promotionDetail = createAdvancedFootprint({},
    literals.commons.detail + ' ' + literals.sections.detailAppliancePromotions
  );
  const payReceiptsClick = createOnClickStart({
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.billPayments,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.payService,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  },
  literals.sections.customizeExpense
  );
  const loanClick = createOnClickStart({
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.ocLoan,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_APPLICATION_NAME]: literals.preApprovedLoan.personalLoanClick,
    [constants.APPLICATION_TYPOLOGY]: literals.preApprovedLoan.preApproved,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.preApprovedLoan.immediatePersonalLoan,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan
  },
  literals.empty
  );
  const creditCardClick = createOnClickStart({
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.creditCardHolder,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.oneClickCreditCard,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.empty
  },
  literals.empty
  );
  const limitCreditCardClick = createOnClickStart({
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.cardBalanceLimitsUpdate,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.limitAditionalCard,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.increaseCreditLine,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards
  },
  literals.empty
  );
  [
    simulatorPageView,
    editModal,
    customizeModal,
    calculateModal,
    editExpenseClick,
    customizeExpenseClick,
    promotionsLandingViewMore,
    promotionDetail,
    payReceiptsClick,
    loanClick,
    creditCardClick,
    limitCreditCardClick
  ].forEach((analytic) => addFeatureFlag(analytic, {
    'key': 'glomo.analytics.applianceSimulator',
    'defaultValue': true
  }));
  addFeatureFlag(errorModal, { 'key': 'glomo.analytics.applianceSimulator.errors', 'defaultValue': true });

  return {
    simulatorPageView,
    editModal,
    customizeModal,
    calculateModal,
    errorModal,
    editExpenseClick,
    customizeExpenseClick,
    promotionsLandingViewMore,
    promotionDetail,
    payReceiptsClick,
    loanClick,
    creditCardClick,
    limitCreditCardClick
  };
};
