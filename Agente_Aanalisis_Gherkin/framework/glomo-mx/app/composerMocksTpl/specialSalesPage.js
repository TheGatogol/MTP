/* eslint-disable no-dupe-keys */
'use strict';
module.exports = config => {
  const { createSpinner } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        campaigns: campaignsApiVersion,
        cardsV1: cardsApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const pages = require('./common/_pages')(config)('specialSalesPage');
  const pageName = 'specialSales';
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      mode: 'seamed',
      disableEdgeSwipe: true,
      animationType: 'verticalUp'
    }
  };
  const dm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-special-sales-dm',
    properties: {
      iosFlag: nativeIos,
      cellsConnections: {
        in: {
          specialSalesSuccess_EXIT: {
            bind: 'userHasCancel'
          },
          SPECIALSALES_ACTIVATE_SALE: {
            bind: 'setPostRequest'
          },
          SPECIALSALES_SUCCESS_RESPONSE: {
            bind: 'onSuccessResponsePostRequest'
          },
          SPECIALSALES_ERROR_RESPONSE: {
            bind: 'errorResponsePostRequest'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'getListOffers'
          },
          global_offers_retrieved: {
            bind: 'offersRetrived'
          },
          global_dashboard_cards: {
            bind: 'globalDashboardCards'
          },
          response_list_offers: {
            bind: 'listOffersResponse'
          },
          error_response_list_offers: {
            bind: 'responseSetOfferList'
          },
          specialSales_EXIT_TO_NATIVE_CHANNEL_NEW: {
            bind: 'backToDashboard'
          },
          SPECIALSALESMODALERROR_BACKSTEP: {
            bind: 'backToDashboard'
          },
          specialSalesModalError_EXIT_TO_NATIVE_CHANNEL_NEW: {
            bind: 'backToDashboard'
          },
          SPECIALSALESMODAL_CONTINUOUS: {
            bind: 'backToDashboard'
          }
        },
        out: {
          cancelled_user_action: {
            bind: 'close-special-modal'
          },
          cancelled_user_action_main_channel: {
            bind: 'back-step-action',
            backStep: true
          },
          open_control_veil: {
            bind: 'show-spinner-event'
          },
          close_control_veil: {
            bind: 'hide-spinner-event'
          },
          global_alert_manager_open_with_settings: {
            bind: 'special-sales'
          },
          SET_PARAMS_REQUEST: {
            bind: 'set-params-request'
          },
          SET_BODY_REQUEST: {
            bind: 'set-body-request'
          },
          GET_CARD_INFORMATION: {
            bind: 'get-request-card-data'
          },
          SPECIALSALES_ON_ERROR_RESPONSE: {
            bind: 'show-modal-error-post-response',
            link: {
              page: 'specialSalesModalErrorPage'
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'special-sales-modal-error'
          },
          SET_CARD_INFO: {
            bind: 'set-card-info'
          },
          SET_DATA_PROMOTION: {
            bind: 'set-data-promotion'
          },
          SPECIALSALES_ON_SUCCESS_RESPONSE: {
            bind: 'show-modal-success-post-response',
            link: {
              page: 'specialSalesSuccessPage'
            }
          },
          GET_LIST_OFFERS_CAPMPAINGS: {
            bind: 'get-list-offers'
          },
          exit_special_sales: {
            bind: 'back-to-dashboard',
            backStep: true
          }
        }
      }
    }
  };
  const apiCardsBgadpmock = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host,
      cardsApiVersion,
      native,
      otpId: pageName,
      requiredToken,
      cellsConnections: {
        in: {
          SET_PARAMS_REQUEST: {
            bind: 'setProperties'
          },
          SET_BODY_REQUEST: {
            bind: 'postOfferEnrollment'
          }
        },
        out: {
          SPECIALSALES_SUCCESS_RESPONSE: {
            bind: 'set-card-offer-enrollment'
          },
          SPECIALSALES_ERROR_RESPONSE: {
            bind: 'error-on-get-card-offer-enrollment'
          }
        }
      }
    }
  };
  const apiCampaigns = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-campaigns',
    properties: {
      host,
      apiVersion: campaignsApiVersion,
      native,
      requiredToken,
      offerProductIdReward: '0725',
      cellsConnections: {
        in: {
          GET_LIST_OFFERS_CAPMPAINGS: {
            bind: 'getOffers'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          }
        },
        out: {
          response_list_offers: {
            bind: 'orange-rewards-offer-enrollment'
          },
          error_response_list_offers: {
            bind: 'set-offers'
          }
        }
      }
    }
  };
  const base = {
    hash: 'special-sales',
    currentPage: {
      url: '/special-sales'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      dm,
      apiCardsBgadpmock,
      apiCampaigns
    ]
  };
  return base;
};
