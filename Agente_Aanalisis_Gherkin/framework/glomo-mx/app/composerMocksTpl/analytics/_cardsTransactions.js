module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic, value) => (utils.getAnalyticFeatureFlag(featureFlag, analytic, value));
  const transactionsListCard = {
    key: 'glomo.analytics.transactionListCardsLit',
    defaultValue: true
  };
  const transactionsListCardError = {
    key: 'glomo.analytics.transactionListCardsErrorLit',
    defaultValue: true
  };
  const transactionDetailCard = {
    key: 'glomo.analytics.transactionDetailCardsLit',
    defaultValue: true
  };
  const transactionDetailPlacesCard = {
    key: 'glomo.analytics.transactionsDetailPlaces',
    defaultValue: true
  };
  const transactionDetailPlacesCardError = {
    key: 'glomo.analytics.transactionsPlacesError',
    defaultValue: true
  };

  const baseConfigs = {
    transactionDetail: {
      levels: { [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail },
      flag: transactionDetailCard
    },
    transactionList: {
      flag: transactionsListCard
    },
    transactionListError: {
      flag: transactionsListCardError
    },
    level5Only: {
      flag: transactionDetailCard
    }
  };

  const COMMON = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: literals.commons.logado
  };

  const createUserFootprint = (userProfile, baseConfig) => ({
    user: { [constants.USER_SEGMENT_PROFILE]: userProfile },
    ...baseConfig
  });

  const createLevelFootprint = (level, value, baseConfig) => ({
    levels: { [level]: value },
    ...baseConfig
  });

  const createTransactionDetailFootprint = (userProfile) => ({
    ...baseConfigs.transactionDetail,
    user: { [constants.USER_SEGMENT_PROFILE]: userProfile },
    application: { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'name' } }
  });

  const createLevel5Footprint = (level5Value) => ({
    levels: { [constants.PAGE_PAGEINFO_LEVEL5]: level5Value },
    ...baseConfigs.level5Only
  });

  const createApplicationFootprint = (benefit, baseConfig) => ({
    application: { [constants.APPLICATION_CUSTOM_FIELDS]: benefit },
    user: { [constants.USER_SEGMENT_PROFILE]: literals.commons.purchase },
    ...baseConfig
  });

  const footprintsCollection = {
    transactionListFootprint: createUserFootprint(literals.commons.withMovements, baseConfigs.transactionList),
    transactionListFootprintWithoutMovements: createUserFootprint(literals.commons.withoutMovements, baseConfigs.transactionList),
    transactionListFootprintnoErrorLoadingMovements: createUserFootprint(literals.commons.errorLoadingMovements, baseConfigs.transactionListError),
    transactionDetailCardFootprintAllMovements: createLevelFootprint(constants.PAGE_PAGEINFO_LEVEL4, literals.commons.transactions, baseConfigs.transactionList),
    transactionDetailFootprintPromotionPurchase: createApplicationFootprint({ bind: 'name' }, baseConfigs.transactionDetail),
    transactionDetailFootprintPurchase: createTransactionDetailFootprint(literals.commons.purchase),
    transactionDetailFootprintPurchaseWithPoints: createTransactionDetailFootprint(literals.commons.purchaseWithPoints),
    transactionDetailFootprintMixedPurchase: createTransactionDetailFootprint(literals.commons.mixedPurchase),
    transactionDetailFootprintForeignPurchase: createTransactionDetailFootprint(literals.commons.foreignPurchase),
    transactionDetailFootprintRefund: createTransactionDetailFootprint(literals.commons.refund),
    transactionDetailFootprintInstallments: createTransactionDetailFootprint(literals.commons.installments),
    transactionDetailFootprintMovementInTransit: createTransactionDetailFootprint(literals.commons.movementInTransit),
    transactionDetailFootprintForeingPurchase: createTransactionDetailFootprint(literals.commons.foreignPurchase),
    transactionDetailFootprintMovementInTransitInformation: {
      levels: {
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail,
        [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.information
      },
      flag: transactionDetailCard
    },
    transactionDetailFootprintRefundPurchaseWithPoints: createLevel5Footprint(literals.commons.refundPurchaseWithPoints),
    transactionDetailFootprintRefundMixedPurchase: createLevel5Footprint(literals.commons.refundMixedPurchase),
    transactionDetailFootprintRefundForignPurchase: createLevel5Footprint(literals.commons.refundForignPurchase),
    transactionDetailFootprintCallToMerchantModalOpen: {
      levels: { [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.merchantInformation },
      application: { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'name' } },
      flag: transactionDetailPlacesCard
    },
    transactionDetailFootprintNoMerchantInformationModalOpen: {
      levels: {
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail,
        [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.merchantInformation
      },
      user: { [constants.USER_SEGMENT_PROFILE]: { bind: 'transactionType' } },
      application: { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'name' } },
      flag: transactionDetailPlacesCard
    },
    transactionDetailFootprintModalOpen: {
      levels: {
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail,
        [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.merchantInformation
      },
      user: { [constants.USER_SEGMENT_PROFILE]: { bind: 'transactionType' } },
      application: { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'name' } },
      flag: transactionDetailPlacesCard
    },
    transactionDetailFootprintGetPlaceDetailErrorRequest: {
      levels: {
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.merchantInformation,
        [constants.PAGE_PAGEINFO_LEVEL4]: literals.errors.informationNotAvailable,
        [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.informationNotAvailable
      },
      flag: transactionDetailPlacesCardError
    },
    transactionDetailFootprintClarificationRequested: createLevel5Footprint(literals.commons.movementWithClarificationRequested),
    transactionDetailFootprintClarificationInTransit: createLevel5Footprint(literals.commons.movementWithClarificationInTransit),
    transactionDetailFootprintClarificationInProgress: createLevel5Footprint(literals.commons.movementWithClarificationInProgress),
    transactionDetailFootprintClarificationApproved: createLevel5Footprint(literals.commons.movementWithClarificationApproved),
    transactionDetailFootprintClarificationCancelled: createLevel5Footprint(literals.commons.movementWithClarificationCancelled),
    transactionDetailFootprintClarificationRejected: createLevel5Footprint(literals.commons.movementWithClarificationRejected)
  };

  const footprints = {};
  Object.entries(footprintsCollection).forEach(([key, { levels, user, application, flag }]) => {
    footprints[key] = utils.getAdvancedFootprint(COMMON, {
      ...levels,
      ...user,
      ...application
    });
    utils.addFeatureFlag(footprints[key], flag);
  });

  const categoryInteractionLinkDate = setFeatureFlags(
    'transactionDetailCardsLit',
    utils.getInteractionLink(
      literals.commons.dateCategory,
      {
        ...COMMON,
        [constants.USER_SEGMENT_PROFILE]: literals.commons.withMovements
      }
    )
  );

  const categoryInteractionLink = setFeatureFlags(
    'transactionDetailCardsLit',
    utils.getInteractionLink(
      literals.commons.categoryDetail,
      {
        ...COMMON,
        [constants.USER_SEGMENT_PROFILE]: literals.commons.withMovements
      }
    )
  );

  const commonInternalData = {
    ...COMMON,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'transactionType' }
  };

  const commonInternalDataWithCustomFields = {
    ...commonInternalData,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'name' }
  };

  const commonInternalDataPlaces = {
    ...commonInternalDataWithCustomFields,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.merchantInformation
  };

  const accessInternalLinkReportMovement = setFeatureFlags(
    'transactionDetailCardsLit',
    utils.getInternalLink(
      literals.commons.reportMovement,
      {
        ...commonInternalDataWithCustomFields
      }
    )
  );

  const callToMerchantModalOpen = setFeatureFlags(
    transactionDetailPlacesCard.key,
    utils.getInternalLink(
      literals.commons.callMerchant,
      {
        ...commonInternalDataPlaces
      }
    ),
    transactionDetailPlacesCard.defaultValue
  );

  const navigateToExternalLinkModalOpen = setFeatureFlags(
    transactionDetailPlacesCard.key,
    utils.getInternalLink(
      literals.commons.goToWebsite,
      {
        ...commonInternalDataPlaces
      }
    ),
    transactionDetailPlacesCard.defaultValue
  );

  const accessInternalLinkwithPoints = setFeatureFlags(
    'transactionDetailCardsLit',
    utils.getInternalLink(
      literals.commons.payWithPoints,
      {
        ...commonInternalDataWithCustomFields
      }
    )
  );


  const mapAddressCopied = setFeatureFlags(
    transactionDetailPlacesCard.key,
    utils.getInteractionLink(
      literals.commons.copyCommerceAddress,
      {
        ...commonInternalDataWithCustomFields
      }
    ),
    transactionDetailPlacesCard.defaultValue
  );

  const staticMapClicked = setFeatureFlags(
    transactionDetailPlacesCard.key,
    utils.getInteractionLink(
      literals.commons.viewMap,
      {
        ...commonInternalDataWithCustomFields
      }
    ),
    transactionDetailPlacesCard.defaultValue
  );

  const showMoreInformation = setFeatureFlags(
    transactionDetailPlacesCard.key,
    utils.getInteractionLink(
      literals.commons.viewMore,
      {
        ...commonInternalDataWithCustomFields
      }
    ),
    transactionDetailPlacesCard.defaultValue
  );

  const postPlacesErrorRequest = setFeatureFlags(
    transactionDetailPlacesCardError.key,
    utils.getSiteError(
      literals.commons.couldNotLoadInformation,
      {
        ...commonInternalDataWithCustomFields
      }
    ),
    transactionDetailPlacesCardError.defaultValue
  );

  function getFootprintCardTransactionsByKey(key) {
    return footprints[key];
  }

  return {
    ...footprints,
    getFootprintCardTransactionsByKey,
    categoryInteractionLink,
    categoryInteractionLinkDate,
    accessInternalLinkReportMovement,
    accessInternalLinkwithPoints,
    callToMerchantModalOpen,
    navigateToExternalLinkModalOpen,
    mapAddressCopied,
    staticMapClicked,
    showMoreInformation,
    postPlacesErrorRequest
  };
};
