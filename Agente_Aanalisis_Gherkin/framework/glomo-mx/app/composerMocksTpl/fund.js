/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const {
    native,
    nativeIos,
    phoneNumberContact,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accounts: accountsApiVersion,
        investmentFundsApiVersion: investmentFundApiVersionSecondary
      }
    }
  } = CONFIG;
  const pageName = 'fund';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const base = require('./product/_product-detail')(pageName)(CONFIG);
  const utils = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const analytics = require('./analytics/_fundDetail')();
  const analyticsNfce = require('./analytics/_fundAddNewContract')();
  const analyticsMonthlyFund = require('./analytics/_monthlyStatementEnquiryFund')();
  const setProperty = utils.setProperty(base);
  const addProperty = utils.addProperty(base);
  const localCurrency = utils.getLocalCurrency(CONFIG);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsParams = utils.connectionsParams(base);
  const language = utils.getLanguage(CONFIG);
  const visibleChars = utils.getVisibleChars(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();
  const sphericaSuffix = isSpherica ? '-spherica' : '';
  const extraHeaderClass = isSpherica ? '' : 'dark-blue-bg';
  const isNativeIos = !!CONFIG.nativeIos;

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass,
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
    }
  };

  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back',
    maskConfig: {
      separator: '&bull;&nbsp;',
      chars: visibleChars,
      status: true
    }
  };

  addProperty('cells-product-summary-fund').tagSpherica = 'cells-product-summary-fund-spherica';
  addProperty('cells-product-summary-fund').propertiesSpherica = {
    className: 'full-width',
    maskCharsHeading: '&bull;&nbsp;'
  };

  addProperty('cells-operations-list-indicators').tagSpherica = 'cells-operations-list-indicators-spherica';
  addProperty('cells-operations-list-indicators').propertiesSpherica = {
    className: 'product-detail',
    loaded: true
  };

  const summaryView = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-fund-summary-dm-mx',
    familyPath: 'glomo-fund-summary-dm',
    properties: {
      locale: localCurrency,
      localCurrency,
      language: utils.getLanguage(CONFIG),
      isSpherica,
      cellsConnections: {
        in: {
          __bridge_page_fund: {
            bind: 'resetProductId'
          },
          dashboard_funds: {
            bind: 'parseGlobalFunds'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          close_control_veil: {
            bind: 'fund-response-success'
          },
          fund_detail_response: {
            bind: 'fund-response-success',
            analytics: analytics.HUELLA_PAGEVIEW
          },
          fund_more_info_changed: {
            bind: 'more-info-changed'
          },
          fund_parsed_list: {
            bind: 'parsed-fund-list'
          }
        },
        params: {
          'productId': 'productId'
        }
      }
    }
  };

  const fundsContractedListDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-funds-list-detail-manager-mx',
    familyPath: 'glomo-funds-list-detail-manager',
    properties: {
      host,
      native,
      isSpherica,
      investmentFundApiVersionSecondary,
      requiredToken,
      language,
      localCurrency,
      useValidetaReqForFundsList: true,
      forceOperatives: true,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'updatedFlagFund'
          },
          FUND_CONTRACTED_SHOW_DETAIL: {
            bind: 'requestFundConstractedDetail'
          },
          FUND_FUNDS_CONTRACTED_ERROR_RETRY: {
            bind: 'retryReqFundsContractedList'
          },
          fund_parsed_list: {
            bind: 'products'
          },
          product_detail_fund_flags: {
            bind: 'validateOperatives'
          },
          fund_detail_response: {
            bind: 'getContractAmount'
          },
          navigation_product_detail_to_edit_alias: {
            bind: 'mapEditAliasData'
          },
          navigation_product_detail_to_new_fund: {
            bind: 'mapNewFundData'
          },
          __bridge_page_fund: {
            bind: 'reset'
          }
        },
        out: {
          FUND_MAPED_FUNDS_CONTRACTED: {
            bind: 'funds-list-detail-funds-maped'
          },
          FUND_FUNDS_CONTRACTED_EMPTY: {
            bind: 'funds-list-detail-list-empty'
          },
          FUND_ADD_FUND_TO_CONTRACT_EMPTY: {
            bind: 'funds-list-detail-new-fund-empty'
          },
          FUND_FUNDS_CONTRACTED_RESET_LIST: {
            bind: 'funds-list-detail-reset-list'
          },
          FUND_FUNDS_OPERATION_DATA: {
            bind: 'funds-list-detail-operation-data-object'
          },
          FUND_FUNDS_SUMMARY_DETAIL_MORE_INFO: {
            bind: 'funds-list-detail-summary-data'
          },
          FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO_DATA: {
            bind: 'funds-list-detail-product-more-info'
          },
          FUND_FUNDS_CONTRACTED_ERROR_RETRY_MESSAGE: {
            bind: 'funds-list-detail-error-list-funds-retry'
          },
          FUND_FUNDS_ERROR_ON_GET_FUND_DETAIL: {
            bind: 'funds-list-detail-error-on-get-fund-detail'
          },
          FUND_FUNDS_LIST_HIDDEN: {
            bind: 'funds-list-detail-hidde-funds-list'
          },
          FUND_FUNDS_ACTIVE_CONTRIBUTION_WITHDRAWAL: {
            bind: 'funds-list-detail-active-funds-contribution-withdrawal'
          },
          fund_get_operations_product: {
            bind: 'successon-on-get-funds-contracted-list'
          },
          fund_set_operations_product_error: {
            bind: 'error-on-get-funds-contracted-list'
          },
          FUND_EDIT_ALIAS_PRODUCT: {
            bind: 'funds-list-detail-edit-alias-fund-product',
            link: {
              page: 'fundEditAlias',
              params: {
                productId: 'productId'
              }
            }
          },
          FUND_ADD_FUND_TO_CONTRACT: {
            bind: 'funds-list-detail-add-new-fund',
            analytics: analyticsNfce.APP_ONCLICK_START,
            link: {
              page: 'addFundToContract'
            }
          },
          FUND_FUNDS_EDIT_ALIAS_HIDDEN: {
            bind: 'funds-list-detail-hidde-edit-alias'
          }
        },
        params: {
          'productId': 'productId'
        }
      }
    }
  };

  const fundsContractedList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-funds-contracted-list',
    tagSpherica: 'cells-funds-contracted-list-spherica',
    properties: {
      localCurrency,
      showFundsContractedError: true,
      loadingContracts: true,
      imageContentSrc: isSpherica ? 'images/spherica/empty_state_day.svg' : 'images/funds/palm.png',
      maskedAmountNumberChars: visibleChars,
      cellsConnections: {
        in: {
          FUND_MAPED_FUNDS_CONTRACTED: {
            bind: 'setProperties'
          },
          FUND_FUNDS_CONTRACTED_EMPTY: {
            bind: 'setProperties'
          },
          FUND_FUNDS_CONTRACTED_RESET_LIST: {
            bind: 'setProperties'
          },
          FUND_FUNDS_CONTRACTED_ERROR_RETRY_MESSAGE: {
            bind: 'setProperties'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'maskedAmount'
          }
        },
        out: {
          FUND_CONTRACTED_SHOW_DETAIL: {
            bind: 'select-product'
          },
          FUND_FUNDS_CONTRACTED_ERROR_RETRY: {
            bind: 'cells-product-summary-retry-load'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'product-list',
      productsListTitle: 'cells-funds-contracted-list-product-title-spherica',
      hideItemAdditional: true
    }
  };

  const toastAlert = {
    zone: 'app__footer',
    tag: 'cells-modal-alert',
    type: 'UI',
    properties: {
      toast: true,
      className: 'dark-success',
      type: 'success',
      content: 'fund-edit-alias-success',
      cellsConnections: {
        in: {
          FUND_EDIT_ALIAS_PRODUCT_SUCCESS: {
            bind: 'open'
          }
        }
      }
    }
  };

  const toastSperica = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message-spherica',
    properties: {
      type: 'success',
      icon: 'coronita:correct',
      iconSize: '24',
      autoHide: true,
      time: 3000,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          global_edit_alias_success_toast: {
            bind: 'open'
          }
        },
        out: {}
      }
    }
  };

  const monthlyStatementEnquiryFund = {
    zone: 'app__main',
    tag: 'fund-information-monthly-statement-enquiry-fund',
    familyPath: '@bbva-web-components-widgets/fund-information-monthly-statement-enquiry-fund',
    type: 'UI',
    render: 'litElement',
    properties: {
      assistancePhone: phoneNumberContact,
      financialStatementsApiVersion: accountsApiVersion,
      country: 'mx',
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          FUND_STATEMENT_ENQUIRY_CHANNEL: {
            bind: 'openModal'
          },
          global_open_document_url_success: {
            bind: 'onSuccessDocument'
          },
          global_open_document_url_error: {
            bind: 'onErrorDocument'
          }
        },
        out: {
          global_open_document_url: {
            bind: 'fund-information-monthly-statement-enquiry-fund-document-open',
            analytics: analyticsMonthlyFund.appStepOtp
          },
          global_action_launcher_dialer: {
            bind: 'fund-information-monthly-statement-enquiry-fund-open-call-action'
          },
          FUND_STATEMENT_ENQUIRY_ANALYTICS_PAGE_VISIT: {
            bind: 'fund-information-monthly-statement-enquiry-fund-page-load-complete',
            analytics: analyticsMonthlyFund.pageVisit
          },
          FUND_STATEMENT_ENQUIRY_ANALYTICS_APP_STARTED: {
            bind: 'fund-information-monthly-statement-enquiry-fund-last-statement-radio-press',
            analytics: analyticsMonthlyFund.appStarted
          },
          FUND_STATEMENT_ENQUIRY_ANALYTICS_COMPLETE: {
            bind: 'fund-information-monthly-statement-enquiry-fund-document-success-click',
            analytics: analyticsMonthlyFund.appCompleted
          },
          FUND_STATEMENT_ENQUIRY_ANALYTICS_OPERATION_ERROR: {
            bind: 'fund-information-monthly-statement-enquiry-fund-document-error-click',
            analytics: analyticsMonthlyFund.operationError
          }
        }
      }
    }
  };

  const flagController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'fund-information-funds-investment-detail-mx-controller',
    familyPath: '@glomo-web-components/fund-information-funds-investment-detail-mx',
    render: 'litElement',
    properties: {
      fundDetailFlagName: 'glomo.investmentfunds.fundInformationFundsInvestmentDetail',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO_DATA: {
            bind: 'flagController'
          },
          FUND_FUNDS_OPERATION_DATA: {
            bind: 'operationData'
          }
        },
        out: {
          FUND_FUNDS_INFORMATION_DETAIL: {
            bind: 'fund-information-funds-investment-detail-mx-controller-go-to-fund-information-detail-flow',
            link: {
              page: 'fundInformationFundsDetail'
            }
          },
          FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO: {
            bind: 'fund-information-funds-investment-detail-mx-controller-go-to-fund-detail-flow',
            link: {
              page: 'fundContractedDetail'
            }
          }
        }
      }
    }
  };

  delete base.template.properties.cellsConnections.out.fund_product_detail_content_scroll;

  base.components.push(fundsContractedListDM);
  base.components.push(fundsContractedList);
  base.components.push(summaryView);
  base.components.push(toastAlert);
  base.components.push(toastSperica);
  base.components.push(monthlyStatementEnquiryFund);
  base.components.push(flagController);

  setProperty('cells-product-summary-fund').hideMoreInfoButton = false;
  setProperty('cells-product-summary-fund').netAssetItemsErrorText = '';
  setProperty('cells-product-summary-fund').netAssetItemsErrorActionText = '';
  setProperty('cells-product-summary-fund').moreInfoLabel = `cells-fund-more-info-header-title${sphericaSuffix}`;
  setProperty('cells-product-summary-fund').maskedAmountNumberChars = visibleChars;
  setProperty('cells-spinner-veil').open = false;
  setProperty('cells-operations-list-indicators').gridColumns = 4;
  setProperty('cells-operations-list-indicators').viewMore = false;
  setProperty('cells-operations-list-indicators').className = 'fund-list-operations';
  setProperty('cells-operations-list-indicators').viewMore = false;

  connectionsIn('cells-operations-list-indicators').FUND_ADD_FUND_TO_CONTRACT_EMPTY = {
    bind: 'operations'
  };

  connectionsIn('cells-product-summary-fund').fund_detail_response = {
    bind: 'fund'
  };

  connectionsIn('glomo-fund-summary-dm-mx').FUND_MORE_INFO_DETAIL_CHANNEL = {
    bind: 'getLoadedFunds'
  };

  connectionsIn('cells-product-summary-fund').global_discreet_mode_mask_amount_values = {
    bind: 'maskedAmount'
  };

  connectionsIn('glomo-operations-dm-mx').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };

  connectionsOut('glomo-fund-summary-dm-mx').global_product_fund_set_more_info = {
    bind: 'get-loaded-funds'
  };

  connectionsOut('cells-product-summary-fund').FUND_MORE_INFO_DETAIL_CHANNEL = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'fundMoreInfo',
      params: {
        productId: 'productId'
      }
    }
  };

  connectionsOut('cells-operations-list-indicators').FUND_STATEMENT_ENQUIRY_CHANNEL = {
    bind: 'navigation-to-statement-account',
    analytics: analyticsMonthlyFund.clickOperators
  };

  connectionsIn('cells-product-summary-fund').FUND_EDIT_ALIAS_PRODUCT_SUCCESS = {
    bind: 'heading'
  };

  delete connectionsOut('cells-operations-list-indicators').navigation_product_detail_to_edit_alias.link;
  delete connectionsOut('cells-operations-list-indicators').navigation_product_detail_to_new_fund.link;
  delete connectionsIn('cells-operations-list-indicators').navigation_fund_product_detail_back_request;
  delete connectionsIn('cells-product-summary-fund').navigation_product_edit_alias_to_fund;

  connectionsParams('cells-operations-list-indicators').productId = 'productId';
  connectionsParams('cells-product-detail-manager').productId = 'productId';
  connectionsParams('cells-product-summary-fund').productId = 'productId';
  connectionsParams('glomo-operations-dm-mx').productId = 'productId';

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);

  if (native) {
    base.components.push(utils.glomoOpenDocument(CONFIG));
  }

  return sphericaPageUtils.spherize(base);
};
