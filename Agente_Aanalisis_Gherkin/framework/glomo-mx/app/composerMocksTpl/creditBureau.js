/* eslint-disable no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');
const {  SPINNER: getSpinner, useNames, toUnderscoreCase } = utils;

const PAGE_NAME = 'creditBureau';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
const localName = name => getLocaleName(name).toLowerCase();
const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();

const localStorage = require('./common/_local-storage');

module.exports = CONFIG => {
  const pages = page(CONFIG)(PAGE_NAME);
  const TOKEN = CONFIG.globalServices.requiredToken;
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const ANALYTICS = require('./analytics/_creditBureau')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          'global_credit_bureau_show_tooltip_spherica': {
            bind: 'openWithSettings'
          },
          'global_credit_bureau_show_document_spherica': {
            bind: 'openWithSettings'
          },
          'global_credit_bureau_error_request_contract_spherica': {
            bind: 'openWithSettings'
          },
          'global_credit_bureau_exit_alert_spherica': {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  /* Spinner */
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [getChannelName('init_config')]: {
      bind: 'hide'
    },
    global_web_request_channel: {
      bind: 'show'
    },
    global_web_response_failure_channel: {
      bind: 'hide'
    },
    global_web_response_success_channel: {
      bind: 'show'
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight: utils.headerHeight,
      cellsConnections: {
        in: {},
        out: {}
      }
    },
    propertiesSpherica: {
      extraHeaderClass: ''
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: TOKEN || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          },
          [getChannelName('exit_page')]: {
            bind: 'reset'
          },
          navigate_to_credit_bureau_receipt: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_retargeting_send_information_update: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'creditBureauReceipt',
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          [getChannelName('exit_error')]: {
            bind: 'goBack'
          },
          [getChannelName('exit_flow')]: {
            bind: 'goBack'
          },
          [getChannelName('show_receipt')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('exit_page')]: {
            bind: 'entrypoint',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'click-right-button'
          },
          navigate_to_credit_bureau_receipt: {
            bind: 'navigation-to-creditBureauReceipt',
            analytics: ANALYTICS.APP_COMPLETED,
            link: {
              page: 'creditBureauReceipt',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: `header-${localName('offer-page')}`,
      className: `header--core credit-bureau-header ${ isNativeIos ? 'ios-top-padding' : ''}`,
      rightIcon: 'coronita:close',
      titleName: localName('offer-page-header'),
      cellsConnections: {
        in: {},
        out: {
          [getChannelName('go_back_navigation')]: {
            bind: 'click-right-button'
          },
          global_retargeting_send_information_update: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  /* Analytics manager for credit bureau flow */
  const creditBureauAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-credit-bureau-manager',
    familyPath: '@glomo-web-components/glomo-analytics-credit-bureau-manager',
    render: 'litElement',
    properties: {
      config: ANALYTICS.PAGE_CONFIG,
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'firePageVisit'
          },
          [getChannelName('error_post')]: {
            bind: 'firePageVisit'
          },
          [getChannelName('show_tooltip')]: {
            bind: 'analyticTooltip'
          },
          [getChannelName('show_document')]: {
            bind: 'analyticAuthorization'
          },
          [getChannelName('check_selected')]: {
            bind: 'analyticCheckbox'
          },
          [getChannelName('accept_contract')]: {
            bind: 'analyticAccept'
          },
          [getGlobalName('tooltip_info')]: {
            bind: 'analyticModal'
          },
          [getGlobalName('document_authorization')]: {
            bind: 'analyticModal'
          },
          [getGlobalName('error_request_contract')]: {
            bind: 'analyticModal'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'analyticOTP'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('analytics_page_view_credit_bureau')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_started_tooltip')]: {
            bind: 'analytics-app-started-tooltip',
            analytics: ANALYTICS.APP_STARTED_TOOLTIP
          },
          [getChannelName('analytics_app_started_authorization')]: {
            bind: 'analytics-app-started-authorization',
            analytics: ANALYTICS.APP_STARTED_AUTHORIZATION
          },
          [getChannelName('analytics_app_started_check')]: {
            bind: 'analytics-app-started-check',
            analytics: ANALYTICS.APP_STARTED_CHECK
          },
          [getChannelName('analytics_app_started_accept')]: {
            bind: 'analytics-app-started-accept',
            analytics: ANALYTICS.APP_STARTED_ACCEPT
          },
          [getChannelName('analytics_huella_credit_bureau_modal_tooltip')]: {
            bind: 'analytics-app-page-view-modal-tooltip',
            analytics: ANALYTICS.HUELLA_AVANZADA_TOOLTIP
          },
          [getChannelName('analytics_huella_credit_bureau_modal_authorization')]: {
            bind: 'analytics-app-page-view-modal-authorization',
            analytics: ANALYTICS.HUELLA_AVANZADA_AUTHORIZATION
          },
          [getChannelName('analytics_huella_credit_bureau_modal_error')]: {
            bind: 'analytics-app-page-view-modal-error',
            analytics: ANALYTICS.HUELLA_AVANZADA_ERROR
          },
          [getChannelName('analytics_otp_credit_bureau')]: {
            bind: 'analytics-post-terms',
            analytics: ANALYTICS.APP_STEP_2
          }
        }
      }
    }
  };

  const creditBureauManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-credit-bureau-manager',
    familyPath: 'glomo-credit-bureau-manager',
    properties: {
      isGlobalFlag: true,
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'requestHiredIndicator'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          global_server_config_channel: {
            bind: 'globalServerConfig'
          },
          global_offers_retrieved: {
            bind: 'requestOfferId'
          },
          contract_product_section_oc_banner_credit_bureau_clicked: {
            bind: 'setOfferData'
          },
          [getChannelName('init_page')]: {
            bind: 'initConfiguration'
          },
          CREDIT_BUREAU_init_page: {
            bind: 'configureOfferCheckbox'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'showOfferPageExit'
          },
          global_storage_get_credit_bureau_hired_indicator_success: {
            bind: 'initConfiguration'
          },
          global_storage_get_credit_bureau_hired_indicator_error: {
            bind: 'initConfiguration'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'showOfferPageExit'
          },
          [getChannelName('valid_offer_page')]: {
            bind: 'validateOfferPage'
          },
          [getChannelName('show_tooltip')]: {
            bind: 'showTooltip'
          },
          [getChannelName('show_document')]: {
            bind: 'showAuthorization'
          },
          [getChannelName('accept_contract')]: {
            bind: 'contractCreditBureau'
          },
          [getGlobalName('exit_close_modal')]: {
            bind: 'closeModalErrorRequestContract'
          },
          [getChannelName('get_success_customer_data')]: {
            bind: 'contactData'
          },
          send_open_web_flag: {
            bind: 'setDenominationFlag'
          },
          [getChannelName('post_success_customer_terms')]: {
            bind: 'successPostTerms'
          },
          [getChannelName('success_customer_detail')]: {
            bind: 'setCustomerDetail'
          },
          [getChannelName('error_customer_detail')]: {
            bind: 'errorCustomerDetail'
          },
          [getChannelName('success_post_credit_bureau_terms')]: {
            bind: 'successPostRiskFiltersTerms'
          },
          [getChannelName('error_post_credit_bureau_terms')]: {
            bind: 'errorPostRiskFiltersTerms'
          },
          global_deep_link_unparsed_offers_retrieved: {
            bind: 'requestOfferId'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'credit-bureau-get-local-storage'
          },
          CREDIT_BUREAU_CHECKBOX_CONFIG: {
            bind: 'credit-bureau-checkbox-config'
          },
          [getChannelName('set-customer-id')]: {
            bind: 'credit-bureau-set-customer-id'
          },
          [getGlobalName('exit_alert')]: {
            bind: 'credit-bureau-show-exit'
          },
          [getGlobalName('tooltip_info')]: {
            bind: 'credit-bureau-show-tooltip'
          },
          [getGlobalName('document_authorization')]: {
            bind: 'credit-bureau-show-authorization'
          },
          [getGlobalName('error_request_contract')]: {
            bind: 'credit-bureau-show-error-request-contract'
          },
          [getChannelName('exit_error')]: {
            bind: 'credit-bureau-exit-error'
          },
          [getChannelName('exit_flow')]: {
            bind: 'credit-bureau-exit-flow'
          },
          [getChannelName('show_receipt')]: {
            bind: 'credit-bureau-send-receipt-data'
          },
          global_retargeting_contracted_product: {
            bind: 'credit-bureau-send-receipt-data'
          },
          [getChannelName('init_config')]: {
            bind: 'credit-bureau-init-configuration'
          },
          global_web_request_channel: {
            bind: 'request-payload-changed',
            'forward-to-native': true
          },
          request_open_web_flag_channel: {
            bind: 'credit-bureau-request-change-denomination-flag',
            'forward-to-native': true
          },
          [getChannelName('error_post')]: {
            bind: 'credit-bureau-send-error-post'
          },
          [getChannelName('post_credit_bureau')]: {
            bind: 'credit-bureau-post-credit-bureau'
          },
          [getChannelName('get_customer_detail')]: {
            bind: 'credit-bureau-get-customer-detail'
          },
          global_set_in_storage: {
            bind: 'credit-bureau-set-hired-indicator-on-storage'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            'global_credit_bureau_show_tooltip_spherica': {
              bind: 'credit-bureau-show-tooltip'
            },
            'global_credit_bureau_show_document_spherica': {
              bind: 'credit-bureau-show-authorization'
            },
            'global_credit_bureau_error_request_contract_spherica': {
              bind: 'credit-bureau-show-error-request-contract'
            },
            'global_credit_bureau_exit_alert_spherica': {
              bind: 'credit-bureau-show-exit'
            }
          }
        },
        remove: {
          out: [
            'global_credit_bureau_tooltip_info',
            'global_credit_bureau_document_authorization',
            'global_credit_bureau_error_request_contract',
            'global_credit_bureau_exit_alert'
          ]
        }
      }
    }
  };


  const apisCustomerDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '1',
      cellsConnections: {
        in: {
          [getChannelName('get_customer_detail')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('success_customer_detail')]: {
            bind: 'set-customer-detail'
          },
          global_retargeting_form_submission: {
            bind: 'set-customer-detail'
          },
          [getChannelName('error_customer_detail')]: {
            bind: 'error-on-get-customer-detail'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };


  const apisRisksDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-risks',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('post_credit_bureau')]: {
            bind: 'postRiskFiltersTerms'
          }
        },
        out: {
          [getChannelName('success_post_credit_bureau_terms')]: {
            bind: 'success-on-post-risks-filters-terms'
          },
          [getChannelName('error_post_credit_bureau_terms')]: {
            bind: 'error-on-post-risks-filters-terms'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'signature-required-first-step-dm'
          }
        }
      }
    }
  };
  /* Offer page - Document Data*/
  const documentsData = [
    { text: localName('modal-document-title'), type: 'document' }
  ];

  const offerPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    properties: {
      id: `step-${localName('offer-page')}`,
      className: 'offer-page padding-text position-zero-icon secondary-button-center',
      subheaderHeadingClass: 'cells-step-card-checklist-contract-header-section',
      active: true,
      headerImg: 'images/request_ok.svg',
      headerImgTitle: localName('offer-page-subtitle'),
      headerImgDescription: localName('offer-page-description'),
      offerPageTitle: localName('modal-tooltip-title'),
      consultText: localName('offer-page-consult-text'),
      pdfData: documentsData,
      isButtonPrimary: true,
      continueButtonText: localName('btn-accept'),
      showSecondaryButton: true,
      secondaryButtonText: localName('btn-exit'),
      hiddenHeader: true,
      typeIconMessageChangeData: 'info-dark',
      disableChange: true,
      offerPage: true,
      cellsConnections: {
        in: {
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          CREDIT_BUREAU_CHECKBOX_CONFIG: {
            bind: 'checkboxList'
          }
        },
        out: {
          [getChannelName('valid_offer_page')]: {
            bind: 'valid-changed'
          },
          [getChannelName('show_tooltip')]: {
            bind: 'show-tooltip'
          },
          [getChannelName('show_document')]: {
            bind: 'request-document'
          },
          [getChannelName('check_selected')]: {
            bind: 'cells-checkbox-button-checked'
          },
          [getChannelName('accept_contract')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'secondary-button-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      id: `step-${localName('offer-page')}`,
      className: 'offer-page without-padding credit-bureau-offer-page',
      stepTitle: '',
      headerImg: 'images/spherica/creditBureau/rocket-glass.svg',
      headerImgTitle: localName('offer-page-subtitle'),
      headerImgDescription: localName('offer-page-description'),
      variantImage: 'primary-alt',
      offerPageTitle: localName('modal-tooltip-title-text'),
      consultText: 'credit-bureau-offer-page-consult-text-spherica',
      variantListFile: 'primary',
      variant: 'primary-alt',
      isButtonPrimary: false,
      showSecondaryButton: false,
      cellsListFileClass: 'list-active padding-offer',
      listFileTextSize: 'M',
      variantOffer: 'transparent'
    }
  };

  const base = {
    hash: +'credit-bureau',
    currentPage: {
      url: '/credit-bureau',
      params: []
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      navigationHandler,
      header,
      creditBureauAnalytics,
      creditBureauManager,
      apisCustomerDM,
      apisRisksDm,
      offerPage
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-risks', PAGE_NAME, ['success-on-post-risks-filters-terms', 'error-on-post-risks-filters-terms']);

  localStorage.addOutStorageChannels(base.components, [ 'credit_bureau_hired_indicator' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
