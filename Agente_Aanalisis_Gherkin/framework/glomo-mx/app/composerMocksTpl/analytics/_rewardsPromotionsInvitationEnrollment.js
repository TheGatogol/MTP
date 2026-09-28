const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getPageVisitWithLevel3,
  getAppStarted,
  getAppStepWithLevel3,
  getAppCompletedRaw,
  getAdvancedFootprintWithLevel3,
  addFeatureFlag,
  getError
} = require('./common/_utils');

const commons = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.applyPromotion,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.reward
};

const commonsFunnel = {
  ...commons,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.applyPromotion,
  [constants.APPLICATION_APPLICATION_NAME]: literals.reward.applyPromotion,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online
};

module.exports = () => {

  const _getAppStepWithLevel3 = (step, action, data = {}) =>
    getAppStepWithLevel3(step, action, {
      ...commonsFunnel,
      ...data
    });

  const _getError = (errorType, data = {}) =>
    getError(errorType, {
      ...commons,
      ...data
    });

  const analyticsRewardsPromotionsInvitationEnrollmentFeatureFlag = {
    key: 'glomo.analytics.rewardsPromotionsInvitationEnrollment',
    defaultValue: true
  };

  const analyticsRewardsPromotionsInvitationEnrollmentFeatureFlagErrors = {
    key: 'glomo.analytics.rewardsPromotionsInvitationEnrollment.errors',
    defaultValue: true
  };

  const rewardsPromotionsInvitationEnrollmentAppPageVisit =
    getPageVisitWithLevel3('1 seleccionar tarjeta', {
      ...commonsFunnel,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards
    });

  const rewardsPromotionsInvitationEnrollmentAppStarted =
    getAppStarted('1 seleccionar tarjeta', {
      ...commonsFunnel,
      [constants.APPLICATION_STEP]: { bind: 'action' },
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards
    });

  const rewardsPromotionsInvitationEnrollmentAppStep2 =
    _getAppStepWithLevel3(2, '2 compras participantes', {
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
    });

  const rewardsPromotionsInvitationEnrollmentAppStep3 =
    _getAppStepWithLevel3(3, '3 seleccionar compras', {
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
    });

  const rewardsPromotionsInvitationEnrollmentAppStep4 =
    _getAppStepWithLevel3(4, '4 resumen', {
      [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: { bind: 'currency' }
    });

  const rewardsPromotionsInvitationEnrollmentAppCompleted =
    getAppCompletedRaw({
      ...commonsFunnel,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: { bind: 'currency' }
    });

  const rewardsPromotionsInvitationEnrollmentReceiptModalView =
    getAdvancedFootprintWithLevel3(literals.commons.successfulPage, {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.activatePromotion
    });

  [
    rewardsPromotionsInvitationEnrollmentAppPageVisit,
    rewardsPromotionsInvitationEnrollmentAppStarted,
    rewardsPromotionsInvitationEnrollmentAppStep2,
    rewardsPromotionsInvitationEnrollmentAppStep3,
    rewardsPromotionsInvitationEnrollmentAppStep4,
    rewardsPromotionsInvitationEnrollmentAppCompleted,
    rewardsPromotionsInvitationEnrollmentReceiptModalView
  ].forEach((item) =>
    addFeatureFlag(
      item,
      analyticsRewardsPromotionsInvitationEnrollmentFeatureFlag
    )
  );

  const rewardsPromotionsInvitationEnrollmentAlreadyRequestedView =
    _getError('error ya activaste esta promocion', {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.activatePromotion
    });

  const rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsWithoutParticipantPurchasesView =
    _getError('error sin compras participantes');

  const rewardsPromotionsInvitationEnrollmentCampaignWithoutParticipatingCardsView =
    _getError('error sin tarjetas participantes');

  const rewardsPromotionsInvitationEnrollmentRevolvingBalanceAmountExceededView =
    _getError('error monto excedido');

  const rewardsPromotionsInvitationEnrollmentMaxSelectablePurchasesExceededView =
    _getError('error cantidad excedida');

  const rewardsPromotionsInvitationEnrollmentCustomerEnrollmentsCommonErrorView =
    _getError('error informacion no disponible');

  const rewardsPromotionsInvitationEnrollmentCampaignCommonErrorView =
    _getError('error informacion no disponible');

  const rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsCommonErrorView =
    _getError('error informacion no disponible');

  const rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsApplyPromotionCommonErrorView =
    _getError('error operacion no disponible');

  [
    rewardsPromotionsInvitationEnrollmentAlreadyRequestedView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsWithoutParticipantPurchasesView,
    rewardsPromotionsInvitationEnrollmentCampaignWithoutParticipatingCardsView,
    rewardsPromotionsInvitationEnrollmentRevolvingBalanceAmountExceededView,
    rewardsPromotionsInvitationEnrollmentMaxSelectablePurchasesExceededView,
    rewardsPromotionsInvitationEnrollmentCustomerEnrollmentsCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsApplyPromotionCommonErrorView
  ].forEach((item) =>
    addFeatureFlag(
      item,
      analyticsRewardsPromotionsInvitationEnrollmentFeatureFlagErrors
    )
  );

  return {
    rewardsPromotionsInvitationEnrollmentAppPageVisit,
    rewardsPromotionsInvitationEnrollmentAppStarted,
    rewardsPromotionsInvitationEnrollmentAppStep2,
    rewardsPromotionsInvitationEnrollmentAppStep3,
    rewardsPromotionsInvitationEnrollmentAppStep4,
    rewardsPromotionsInvitationEnrollmentAppCompleted,
    rewardsPromotionsInvitationEnrollmentReceiptModalView,
    rewardsPromotionsInvitationEnrollmentAlreadyRequestedView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsWithoutParticipantPurchasesView,
    rewardsPromotionsInvitationEnrollmentCampaignWithoutParticipatingCardsView,
    rewardsPromotionsInvitationEnrollmentRevolvingBalanceAmountExceededView,
    rewardsPromotionsInvitationEnrollmentMaxSelectablePurchasesExceededView,
    rewardsPromotionsInvitationEnrollmentCustomerEnrollmentsCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsCommonErrorView,
    rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsApplyPromotionCommonErrorView
  };
};
