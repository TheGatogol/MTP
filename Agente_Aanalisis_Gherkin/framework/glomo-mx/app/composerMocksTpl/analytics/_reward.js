/* eslint-disable max-statements */
const constants = require('./common/_constants');
const literals = require('./common/_literals');
const utils = require('./common/_utils');
const featureFlagStoresMap = (analytic, featureFlag) => utils.addFeatureFlag(analytic, featureFlag);

const commons = {
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.reward
};

const commonPages = {
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
};

const fullData = { ...commons, ...commonPages };


module.exports = () => {
  const analyticsRewardsFeatureFlag = {
    key: 'glomo.analytics.reward',
    defaultValue: true
  };

  const analyticsRewardsFeatureFlagErrors = {
    key: 'glomo.analytics.reward.errors',
    defaultValue: true
  };

  const analyticsFeatureFlagPointsTransfer = {
    key: 'glomo.analytics.reward.pointsTransfer',
    defaultValue: true
  };

  const analyticsFeatureFlagPointsTransferErrors = {
    key: 'glomo.analytics.reward.pointsTransfer.errors',
    defaultValue: true
  };

  const analyticsPointsRaffleFeatureFlag = {
    key: 'glomo.analytics.reward.pointsRaffle',
    defaultValue: true
  };

  const analyticsPointsRaffleFeatureFlagErrors = {
    key: 'glomo.analytics.reward.pointsRaffle.errors',
    defaultValue: true
  };

  const analyticsFeatureFlagWidgetDashboard = {
    key: 'glomo.analytics.dashboard.reward',
    defaultValue: true
  };

  const analyticsFeatureFlagWidgetLoyaltyPoints = {
    key: 'glomo.analytics.loyalty.points',
    defaultValue: true
  };

  const analyticsFeatureFlagWidgetLoyaltyPointsErrors = {
    key: 'glomo.analytics.loyalty.points.errors',
    defaultValue: true
  };

  const rpPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'productType'
    }
  };

  const rewardsPointsPageView = utils.getAdvancedFootprint(rpPageView);

  const analyticsFeatureFlagPointsDetail = {
    key: 'glomo.analytics.points.detail',
    defaultValue: true
  };

  const promotionsFeatureFlags = {
    promotions: {
      key: 'glomo.analytics.reward.promotions',
      defaultValue: true
    },
    promotionsErrorsDetail: {
      key: 'glomo.analytics.reward.promotions.errors.detail',
      defaultValue: true
    },
    promotionsErrorsLanding: {
      key: 'glomo.analytics.reward.promotions.errors.landing',
      defaultValue: true
    },
    promotionsErrorsFavorites: {
      key: 'glomo.analytics.reward.promotions.errors.favorites',
      defaultValue: true
    },
    promotionsErrorsSearch: {
      key: 'glomo.analytics.reward.promotions.errors.search',
      defaultValue: true
    }
  };

  const rpPageViewPointsFiltered = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.pointsDetail
  };

  const analyticsPageViewPointsFiltered = utils.getAdvancedFootprint(
    rpPageViewPointsFiltered
  );

  const rpExpandableClickReward = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.APPLICATION_INTERACTION_LEVEL]: literals.reward.pointsToBeat
  };

  const analyticsExpandableClickReward = utils.getInteractionLink(
    '',
    rpExpandableClickReward
  );

  const rpExpandableClickFilteredPoints = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.pointsDetail,
    [constants.APPLICATION_INTERACTION_LEVEL]: literals.reward.pointsToBeat
  };

  const analyticsExpandableClickFilteredPoints = utils.getInteractionLink(
    '',
    rpExpandableClickFilteredPoints
  );

  const rpRewardsTabPromotions = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.promotions
  };

  const rewardsTabPromotions = utils.getAdvancedFootprint(
    rpRewardsTabPromotions
  );

  const rpRewardsMaxCallsErrorLoadPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.errorInfoPointsCall,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.reward.errorInfoPointsCall
  };

  const rewardsMaxCallsErrorLoadPageView = utils.getAdvancedFootprint(
    rpRewardsMaxCallsErrorLoadPageView
  );

  const rpRewardsMaxCallsErrorListCardPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.errorInfoPointsDetailCall,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errorInfoPointsDetailCall
  };

  const rewardsMaxCallsErrorListCardPageView = utils.getAdvancedFootprint(
    rpRewardsMaxCallsErrorListCardPageView
  );

  const rpRewardsPurchaseOptionsPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.useMyPoints
  };

  const rewardsPurchaseOptionsPageView = utils.getAdvancedFootprint(
    rpRewardsPurchaseOptionsPageView
  );

  const rpTermAndConditionsCreaCardPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.creaCard
  };

  const termAndConditionsCreaCardPageView = utils.getAdvancedFootprint(
    rpTermAndConditionsCreaCardPageView
  );

  const rpRewardsMenuClick = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position
  };

  const rewardsMenuClick = utils.getInternalLink(
    literals.reward.pointsAndPromotions,
    rpRewardsMenuClick
  );

  const rpRewardsAccumulatedPointsLoadPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.howGetPoints
  };

  const rewardsAccumulatedPointsLoadPageView = utils.getAdvancedFootprint(
    rpRewardsAccumulatedPointsLoadPageView
  );

  const openInfoDetailPointsInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'info cabecera'
    }
  };

  const openInfoBannerPointsInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'info banner'
    }
  };

  const openInfoCreaPointsInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'info tarjeta crea'
    }
  };

  const openHowToGetPointsInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'info tarjeta crea'
    }
  };

  const accessToPointsFromCardDetailInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'puntos bbva'
    }
  };

  const pointsDetailErrorState = {
    type: literals.types.link,
    action: literals.actions.siteError,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.APPLICATION_ERROR_TYPE]: 'error info punto'
    }
  };

  const pointsCollapsableTapExpiringPoints = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'puntos proximos a vencer'
    }
  };

  const pointsCollapsableTapCutPoints = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'puntos de tu periodo anterior'
    }
  };

  const openTransferPointsInternalLink = {
    type: literals.types.link,
    action: literals.actions.appOnClickStart,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PRODUCT_PRODUCT_NAME]: {
        bind: 'productName'
      },
      [constants.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
      [constants.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito',
      [constants.APPLICATION_APPLICATION_TYPE]: 'operativa',
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.APPLICATION_STEP]: 'detalle de puntos',
      [constants.APPLICATION_APPLICATION_NAME]: 'traspasar puntos',
      [constants.APPLICATION_GLOBAL_APPLICATION]: 'transfer points'
    }
  };

  const bannerMoreInfoInternalLink = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: 'info banner'
    }
  };

  const transferPointsOriginCardOffError = {
    type: literals.types.view,
    action: literals.actions.mark,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'tarjeta de origen apagada',
      [constants.PAGE_PAGEINFO_ERRORPAGE]: 'tarjeta de origen apagada',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  const transferPointsOriginCardInactiveError = {
    type: literals.types.view,
    action: literals.actions.mark,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'tarjeta de origen inactiva',
      [constants.PAGE_PAGEINFO_ERRORPAGE]: 'tarjeta de origen inactiva',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  const openRaffleInternalLink = {
    type: literals.types.link,
    action: literals.actions.appOnClickStart,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL4]: 'detalle',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [constants.APPLICATION_STEP]: 'sorteos bbva',
      [constants.APPLICATION_FULLFILMENT]: 'online',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [constants.APPLICATION_GLOBAL_APPLICATION]: 'points raffle',
      [constants.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
      [constants.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito',
      [constants.APPLICATION_APPLICATION_NAME]: 'sorteo puntos',
      [constants.APPLICATION_APPLICATION_TYPE]: 'operativa',
      [constants.PRODUCT_PRODUCT_NAME]: {
        bind: 'productName'
      }
    }
  };

  const openRaffleInternalLinkNotEnoughPoints = {
    type: literals.types.view,
    action: literals.actions.mark,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL4]: 'detalle',
      [constants.PAGE_PAGEINFO_LEVEL5]: 'error puntos insuficientes',
      [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error puntos insuficientes',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  const openRaffleInternalLinkNotYetPoints = {
    type: literals.types.view,
    action: literals.actions.mark,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL4]: 'detalle',
      [constants.PAGE_PAGEINFO_LEVEL5]: 'error no tienes puntos',
      [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error no tienes puntos',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  const openRaffleInternalLinkErrorSimulate = {
    type: literals.types.view,
    action: literals.actions.mark,
    [constants.DATALAYER_NAME]: {
      ...fullData,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [constants.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [constants.PAGE_PAGEINFO_LEVEL3]: 'puntos',
      [constants.PAGE_PAGEINFO_LEVEL4]: 'detalle',
      [constants.PAGE_PAGEINFO_LEVEL5]: 'error carga de servicio',
      [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error carga de servicio',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [constants.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  const rpRewardsChooseCategoriesLinkClickInternalLink = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions
  };

  const rewardsChooseCategoriesLinkClickInternalLink = utils.getInternalLink(
    literals.reward.chooseCategories,
    rpRewardsChooseCategoriesLinkClickInternalLink
  );

  const rewardsOpenFavoriteCategoriesModalPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.chooseFavorites
  };

  const rewardsPromotionsFavoriteCategoriesResultsPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.chooseFavorites,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.reward.results,
    [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHTERM]: {
      bind: 'categoriesSelected'
    }
  };

  const rewardsFavoritesCategoriesErrorModalPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.chooseFavorites,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.reward.errorFavoriteCategories,
    [constants.PAGE_PAGEINFO_ERRORPAGE]:
      literals.reward.errorFavoriteCategories
  };

  const rewardsPromotionsModalSearchOpenedPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.search
  };

  const rewardsPromotionsSearchResultsPageView = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.search,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.reward.results,
    [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHRESULTS]: {
      bind: 'resultsNumber'
    },
    [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHTERM]: {
      bind: 'categoriesSelected'
    },
    [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHENTERTERM]: {
      bind: 'inputText'
    }
  };

  const rewardsPromotionsSearchResultsError = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.search,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.reward.errorSearch,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.reward.errorSearch
  };

  const rpUseMyPointsReward = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.promotions
  };

  const useMyPointsReward = utils.getAdvancedFootprint(rpUseMyPointsReward);

  const rpRewardsPromotionsDetailActivatePromotionClick = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.promotionDetail,
    [constants.APPLICATION_GLOBAL_APPLICATION]:
      literals.globalApplication.applyPromotion,
    [constants.APPLICATION_APPLICATION_NAME]: literals.reward.applyPromotion,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const rewardsPromotionsDetailActivatePromotionClick = utils.getOnClickStart(
    'activar promocion desde detalle de promocion',
    'informacion',
    rpRewardsPromotionsDetailActivatePromotionClick
  );

  const rpProductListRewardsTransfer = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'operativeName'
    },
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.reward.origin
  };

  const productListRewardsTransfer = utils.getAdvancedFootprint(
    rpProductListRewardsTransfer
  );

  const promotionsLandingView = {
    ...fullData,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
      bind: 'internalCampaignCollectiveCode0'
    },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE_1]: {
      bind: 'internalCampaignCollectiveCode1'
    },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE_2]: {
      bind: 'internalCampaignCollectiveCode2'
    },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE_3]: {
      bind: 'internalCampaignCollectiveCode3'
    },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE_4]: {
      bind: 'internalCampaignCollectiveCode4'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: {
      bind: 'internalCampaignCampaignFormat0'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT_1]: {
      bind: 'internalCampaignCampaignFormat1'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT_2]: {
      bind: 'internalCampaignCampaignFormat2'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT_3]: {
      bind: 'internalCampaignCampaignFormat3'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT_4]: {
      bind: 'internalCampaignCampaignFormat4'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'internalCampaignLocation0'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION_1]: {
      bind: 'internalCampaignLocation1'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION_2]: {
      bind: 'internalCampaignLocation2'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION_3]: {
      bind: 'internalCampaignLocation3'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION_4]: {
      bind: 'internalCampaignLocation4'
    },
    [constants.INTERNAL_CAMPAIGN_NAME]: {
      bind: 'internalCampaignCampaignName0'
    },
    [constants.INTERNAL_CAMPAIGN_NAME_1]: {
      bind: 'internalCampaignCampaignName1'
    },
    [constants.INTERNAL_CAMPAIGN_NAME_2]: {
      bind: 'internalCampaignCampaignName2'
    },
    [constants.INTERNAL_CAMPAIGN_NAME_3]: {
      bind: 'internalCampaignCampaignName3'
    },
    [constants.INTERNAL_CAMPAIGN_NAME_4]: {
      bind: 'internalCampaignCampaignName4'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: {
      bind: 'internalCampaignCampaignProduct0'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_1]: {
      bind: 'internalCampaignCampaignProduct1'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_2]: {
      bind: 'internalCampaignCampaignProduct2'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_3]: {
      bind: 'internalCampaignCampaignProduct3'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_4]: {
      bind: 'internalCampaignCampaignProduct4'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
      bind: 'internalCampaignCampaignProductCode0'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE_1]: {
      bind: 'internalCampaignCampaignProductCode1'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE_2]: {
      bind: 'internalCampaignCampaignProductCode2'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE_3]: {
      bind: 'internalCampaignCampaignProductCode3'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE_4]: {
      bind: 'internalCampaignCampaignProductCode4'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: {
      bind: 'internalCampaignCampaignQuantity0'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY_1]: {
      bind: 'internalCampaignCampaignQuantity1'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY_2]: {
      bind: 'internalCampaignCampaignQuantity2'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY_3]: {
      bind: 'internalCampaignCampaignQuantity3'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY_4]: {
      bind: 'internalCampaignCampaignQuantity4'
    },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions
  };

  const rpPromotionsLandingPromotionClick = {
    ...fullData,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: 'IntCmpClick',
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
      bind: 'internalCampaignCollectiveCode0'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: {
      bind: 'internalCampaignCampaignFormat0'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'internalCampaignLocation0'
    },
    [constants.INTERNAL_CAMPAIGN_NAME]: {
      bind: 'internalCampaignCampaignName0'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: {
      bind: 'internalCampaignCampaignProduct0'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
      bind: 'internalCampaignCampaignProductCode0'
    },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions
  };

  const promotionsLandingPromotionClick = utils.getClickThrough(
    rpPromotionsLandingPromotionClick
  );

  const rpPromotionsLandingViewMore = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions
  };

  const promotionsLandingViewMore = utils.getInternalLink(
    { bind: 'categoryKey' },
    rpPromotionsLandingViewMore
  );

  const promotionsPromotionDetail = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle de promocion'
  };

  const promotionsPromotionDetailSpherica = {
    ...promotionsPromotionDetail,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'usageType'
    }
  };

  const rewardsPromotionsLandingViewError = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.loadPromotionsError,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.reward.loadPromotionsError
  };

  const promotionsPromotionDetailError = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle de promocion',
    [constants.PAGE_PAGEINFO_LEVEL3]: 'error no se puede cargar la seccion',
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error no se puede cargar la seccion'
  };

  const promotionsWithoutPromotions = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.promotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.withoutPromotions
  };

  [
    promotionsLandingPromotionClick,
    promotionsLandingViewMore,
    rewardsChooseCategoriesLinkClickInternalLink
  ].forEach((item) =>
    featureFlagStoresMap(item, promotionsFeatureFlags.promotions)
  );

  [
    productListRewardsTransfer,
    analyticsPageViewPointsFiltered,
    analyticsExpandableClickReward,
    analyticsExpandableClickFilteredPoints
  ].forEach((item) =>
    featureFlagStoresMap(item, analyticsFeatureFlagPointsDetail)
  );

  [
    rewardsPointsPageView,
    rewardsTabPromotions,
    rewardsPurchaseOptionsPageView,
    termAndConditionsCreaCardPageView,
    rewardsAccumulatedPointsLoadPageView,
    rewardsMaxCallsErrorLoadPageView,
    rewardsMaxCallsErrorListCardPageView,
    openInfoDetailPointsInternalLink,
    openInfoBannerPointsInternalLink,
    openInfoCreaPointsInternalLink,
    openHowToGetPointsInternalLink,
    accessToPointsFromCardDetailInternalLink,
    pointsCollapsableTapExpiringPoints,
    pointsCollapsableTapCutPoints,
    bannerMoreInfoInternalLink,
    rewardsMenuClick,
    useMyPointsReward,
    rewardsPromotionsDetailActivatePromotionClick
  ].forEach((item) => featureFlagStoresMap(item, analyticsRewardsFeatureFlag));

  [ openTransferPointsInternalLink ].forEach((item) =>
    featureFlagStoresMap(item, analyticsFeatureFlagPointsTransfer)
  );

  [
    transferPointsOriginCardOffError,
    transferPointsOriginCardInactiveError
  ].forEach((item) =>
    featureFlagStoresMap(item, analyticsFeatureFlagPointsTransferErrors)
  );

  [ pointsDetailErrorState ].forEach((item) =>
    featureFlagStoresMap(item, analyticsRewardsFeatureFlagErrors)
  );

  [ openRaffleInternalLink ].forEach((item) =>
    featureFlagStoresMap(item, analyticsPointsRaffleFeatureFlag)
  );

  [
    openRaffleInternalLinkNotEnoughPoints,
    openRaffleInternalLinkNotYetPoints,
    openRaffleInternalLinkErrorSimulate
  ].forEach((item) =>
    featureFlagStoresMap(item, analyticsPointsRaffleFeatureFlagErrors)
  );

  const clickDashboardBanner = {
    type: literals.types.link,
    action: literals.actions.internalLink,
    [constants.DATALAYER_NAME]: {
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
      [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
      [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
      [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.reward,
      [constants.USER_USERSTATE]: literals.reward.logged,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]:
        literals.reward.pointsAndPromotions,
      [constants.APPLICATION_FULLFILMENT]: '',
      [constants.APPLICATION_APPLICATION_TYPE]: '',
      [constants.APPLICATION_APPLICATION_NAME]: '',
      [constants.APPLICATION_GLOBAL_APPLICATION]: ''
    },
    featureFlag: analyticsFeatureFlagWidgetDashboard
  };

  const internalLinkRewardsLoyaltyPointsTab = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.APPLICATION_INTERACTION_LEVEL]:
      literals.reward.movementsPerPeriod
  };

  const analyticsInternalLinkRewardsLoyaltyPointsTab = utils.getInteractionLink(
    '',
    internalLinkRewardsLoyaltyPointsTab
  );
  const internalLinkRewardsLoyaltyPointsTabDetail = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.pointsDetail,
    [constants.APPLICATION_INTERACTION_LEVEL]:
      literals.reward.movementsPerPeriod
  };
  const analyticsInternalLinkRewardsLoyaltyPointsTabDetail =
    utils.getInteractionLink('', internalLinkRewardsLoyaltyPointsTabDetail);
  [
    analyticsInternalLinkRewardsLoyaltyPointsTab,
    analyticsInternalLinkRewardsLoyaltyPointsTabDetail
  ].forEach((item) =>
    featureFlagStoresMap(item, analyticsFeatureFlagWidgetLoyaltyPoints)
  );
  const rpRewardsLoyaltyPointsErrorLoad = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points
  };
  const rewardsLoyaltyPointsErrorLoad = utils.getSiteError(
    literals.reward.errorTypePoints,
    rpRewardsLoyaltyPointsErrorLoad
  );
  const rpRewardsLoyaltyPointsErrorLoadDetail = {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.points,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.reward.pointsDetail
  };
  const rewardsLoyaltyPointsErrorLoadDetail = utils.getSiteError(
    literals.reward.errorTypePoints,
    rpRewardsLoyaltyPointsErrorLoadDetail
  );
  [rewardsLoyaltyPointsErrorLoad, rewardsLoyaltyPointsErrorLoadDetail].forEach(
    (item) =>
      featureFlagStoresMap(item, analyticsFeatureFlagWidgetLoyaltyPointsErrors)
  );

  const _getAdvancedFootprint = (typeFootprint, featureFlag) => {
    const typesFootprint = {
      promotionsLandingView: promotionsLandingView,
      promotionsPromotionDetail: promotionsPromotionDetail,
      promotionsPromotionDetailError: promotionsPromotionDetailError,
      promotionsPromotionDetailSpherica: promotionsPromotionDetailSpherica,
      promotionsWithoutPromotions: promotionsWithoutPromotions,
      rewardsOpenFavoriteCategoriesModalPageView:
        rewardsOpenFavoriteCategoriesModalPageView,
      rewardsPromotionsFavoriteCategoriesResultsPageView:
        rewardsPromotionsFavoriteCategoriesResultsPageView,
      rewardsFavoritesCategoriesErrorModalPageView:
        rewardsFavoritesCategoriesErrorModalPageView,
      rewardsPromotionsModalSearchOpenedPageView:
        rewardsPromotionsModalSearchOpenedPageView,
      rewardsPromotionsSearchResultsPageView:
        rewardsPromotionsSearchResultsPageView,
      rewardsPromotionsSearchResultsError: rewardsPromotionsSearchResultsError,
      rewardsPromotionsLandingViewError: rewardsPromotionsLandingViewError
    };
    const analytics = utils.getAdvancedFootprint(typesFootprint[typeFootprint]);
    featureFlagStoresMap(analytics, promotionsFeatureFlags[featureFlag]);
    return analytics;
  };

  return {
    accessToPointsFromCardDetailInternalLink,
    analyticsExpandableClickFilteredPoints,
    analyticsExpandableClickReward,
    analyticsFeatureFlagPointsDetail,
    analyticsInternalLinkRewardsLoyaltyPointsTab,
    analyticsInternalLinkRewardsLoyaltyPointsTabDetail,
    analyticsPageViewPointsFiltered,
    bannerMoreInfoInternalLink,
    clickDashboardBanner,
    openHowToGetPointsInternalLink,
    openInfoBannerPointsInternalLink,
    openInfoCreaPointsInternalLink,
    openInfoDetailPointsInternalLink,
    openRaffleInternalLink,
    openRaffleInternalLinkErrorSimulate,
    openRaffleInternalLinkNotEnoughPoints,
    openRaffleInternalLinkNotYetPoints,
    openTransferPointsInternalLink,
    pointsCollapsableTapCutPoints,
    pointsCollapsableTapExpiringPoints,
    pointsDetailErrorState,
    productListRewardsTransfer,
    promotionsLandingPromotionClick,
    promotionsLandingViewMore,
    rewardsAccumulatedPointsLoadPageView,
    rewardsChooseCategoriesLinkClickInternalLink,
    rewardsLoyaltyPointsErrorLoad,
    rewardsLoyaltyPointsErrorLoadDetail,
    rewardsMaxCallsErrorListCardPageView,
    rewardsMaxCallsErrorLoadPageView,
    rewardsMenuClick,
    rewardsPointsPageView,
    rewardsPurchaseOptionsPageView,
    rewardsTabPromotions,
    termAndConditionsCreaCardPageView,
    transferPointsOriginCardInactiveError,
    transferPointsOriginCardOffError,
    useMyPointsReward,
    rewardsPromotionsDetailActivatePromotionClick,
    _getAdvancedFootprint
  };
};
