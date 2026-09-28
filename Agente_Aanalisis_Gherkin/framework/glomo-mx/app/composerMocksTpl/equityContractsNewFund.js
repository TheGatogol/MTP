'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1: customersApiVersion } },
    native = false,
    phoneNumberContact
  } = CONFIG;
  const {
    getCountry,
    getLanguage
  } = require('./common/helpers/_utils');
  const pageName = 'equityContractsNewFund';
  const pageNameChannel = 'equity_contracts_new_fund';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const channelName = (suffix) => `${pageNameChannel}_${suffix}_channel`;
  const pages = require('./common/helpers').getPages(CONFIG)(pageName);
  const {
    _analyticsData,
    _getPageVisitWithLevel3,
    _getStaticAppStarted,
    _getAppStepWithLevel3,
    _getAppCompleted,
    _getFootprintWithLevel3,
    _getFootprintWithLevel4
  } = require('./analytics/_equityContractsNewFund')();

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      preventScrollWithOverlay: true,
      cellsConnections: {
        in: {
          [channelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [channelName('exit_page')]: {
            bind: 'resetLayerScroll'
          }
        },
        out: {
          [channelName('_product_detail_content_scroll')]: {
            bind: 'template-content-scroll'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [channelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const ocFundEquityContract = {
    zone: 'app__main',
    tag: 'bbva-feature-oc-fund-equity-contract-mx',
    tagSpherica: 'bbva-feature-oc-fund-equity-contract-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-oc-fund-equity-contract-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-oc-fund-equity-contract-mx-spherica',
    type: 'UI',
    render: 'litElement',
    properties: {
      pageName,
      customersVersion: customersApiVersion,
      host,
      native,
      requiredToken,
      otpId: pageName,
      assistancePhone: phoneNumberContact,
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          navigation_product_detail_to_equity_contracts_new_fund: {
            bind: 'contract'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'initPage'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          }
        },
        out: {
          global_action_launcher_dialer: {
            bind: 'open-call-action',
            backStep: true
          },
          [channelName('pdf_download')]: {
            bind: 'open-pdf'
          },
          [channelName('share_receipt')]: {
            bind: 'share-contract-receipt'
          },
          [channelName('config_contract_receipt')]: {
            bind: 'config-contract-receipt'
          },
          [channelName('exit_page')]: {
            bind: 'exit-new-fund-page',
            backStep: true
          },
          [channelName('analytics_persist_data')]: {
            bind: 'analytics-persist-data'
          },
          [channelName('analytics_step')]: {
            bind: 'fire-analytics-step'
          }
        }
      }
    }
  };

  const openDocument = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-open-document-mx',
    familyPath: 'cells-nativeconnector-open-document',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [channelName('pdf_download')]: {
            bind: 'openByUrl'
          }
        },
        out: {
          [channelName('pdf_download_success')]: {
            bind: 'open-document-open-by-url-success'
          },
          [channelName('pdf_download_error')]: {
            bind: 'open-document-open'
          }
        }
      }
    }
  };

  const shareDm = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLanguage(),
      country: getCountry(),
      headerReceipt: true,
      cellsConnections: {
        in: {
          [channelName('share_receipt')]: {
            bind: 'captureReceipt'
          },
          [channelName('config_contract_receipt')]: {
            bind: 'setProperties'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const analyticsDm = {
    zone: 'app__main',
    tag: 'bbva-feature-oc-fund-equity-contract-mx-analytics-dm',
    familyPath: '@glomo-web-components/bbva-feature-oc-fund-equity-contract-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      config: {
        steps: {
          appStarted: 'app-started',
          pageVisit: 'app-page-visit',
          invest: 'app-step-2',
          simulation: 'app-step-3',
          documents: 'app-step-4',
          confirm: 'app-step-5',
          otp: 'app-step-6',
          appCompleted: 'app-completed',
          footprintnoFunds: 'footprint-nofunds',
          footprintFundDetail: 'footprint-fund-detail',
          footprintFundKeyModal: 'footprint-fund-key-modal',
          footprintIvenstmentAmount: 'footprint-ivenstment-amount',
          footprintOpenDocument: 'foot-open-document',
          footprintPrivacyModal: 'foot-privacy-modal',
          footprintModalFundlist: 'foot-modal-fundlist',
          footFundNotAvailable: 'foot-fundnot-available',
          footprintServiceNotAvailable: 'foot-service-notavailable'
        }
      },
      cellsConnections: {
        in: {
          [channelName('analytics_persist_data')]: {
            bind: 'persistDataString'
          },
          [channelName('analytics_step')]: {
            bind: 'onStep'
          }
        },
        out: {
          [channelName('analytics_fire_app_started')]: {
            bind: 'analytics-app-started',
            analytics: _getStaticAppStarted()
          },
          [channelName('analytics_fire_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: _getPageVisitWithLevel3({ bind: 'pageVisitLevel3' }, _analyticsData.appPageVisitVariables)
          },
          [channelName('analytics_fire_app_step_2')]: {
            bind: 'analytics-app-step-2',
            analytics: _getAppStepWithLevel3('2', '2 importe de inversion', _analyticsData.commonStepWithProductName)
          },
          [channelName('analytics_fire_app_step_3')]: {
            bind: 'analytics-app-step-3',
            analytics: _getAppStepWithLevel3('3', '3 simulacion', _analyticsData.commonStepAfterSimulation)
          },
          [channelName('analytics_fire_app_step_4')]: {
            bind: 'analytics-app-step-4',
            analytics: _getAppStepWithLevel3('4', '4 terminos y condiciones', _analyticsData.commonStepAfterSimulation)
          },
          [channelName('analytics_fire_app_step_5')]: {
            bind: 'analytics-app-step-5',
            analytics: _getAppStepWithLevel3('5', '5 resumen', _analyticsData.commonStepAfterSimulation)
          },
          [channelName('analytics_fire_app_step_6')]: {
            bind: 'analytics-app-step-6',
            analytics: _getAppStepWithLevel3('6', '6 otp', _analyticsData.commonOtp)
          },
          [channelName('analytics_fire_app_step_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: _getAppCompleted()
          },
          [channelName('analytics_fire_footprint_nofunds')]: {
            bind: 'analytics-footprint-nofunds',
            analytics: _getFootprintWithLevel3('ya invertiste en todos los fondos', _analyticsData.commonFootprintNoFunds)
          },
          [channelName('analytics_fire_footprint_ivenstment_amount')]: {
            bind: 'analytics-footprint-ivenstment-amount',
            analytics: _getFootprintWithLevel4('2 importe de inversion', 'ayuda monto de inversion', _analyticsData.commonFootprint)
          },
          [channelName('analytics_fire_foot_open_document')]: {
            bind: 'analytics-foot-open-document',
            analytics: _getFootprintWithLevel4('4 terminos y condiciones', 'documento dici', _analyticsData.commonFootprint)
          },
          [channelName('analytics_fire_foot_privacy_modal')]: {
            bind: 'analytics-foot-privacy-modal',
            analytics: _getFootprintWithLevel4('4 terminos y condiciones', 'aviso de privacidad', _analyticsData.commonFootprint)
          },
          [channelName('analytics_fire_foot_fundnot_available')]: {
            bind: 'analytics-foot-fundnot-available',
            analytics: _getFootprintWithLevel3('error fondo no disponible', _analyticsData.footingFundNotAvailable, 'error')
          },
          [channelName('analytics_fire_foot_service_notavailable')]: {
            bind: 'analytics-foot-service-notavailable',
            analytics: _getFootprintWithLevel3('error servicio no disponible', _analyticsData.footingServiceNotAvailable, 'error')
          },
          [channelName('analytics_fire_foot-modal_fundlist')]: {
            bind: 'analytics-foot-modal-fundlist',
            analytics: _getFootprintWithLevel4({ bind: 'pageVisitLevel3' }, 'todos los fondos', _analyticsData.commonFootprint)
          },
          [channelName('analytics_fire_footprint_fund_key_modal')]: {
            bind: 'analytics-footprint-fund-key-modal',
            analytics: _getFootprintWithLevel4({ bind: 'pageVisitLevel3' }, 'todos los fondos', _analyticsData.footprintFundKeyModal)
          },
          [channelName('analytics_fire_footprint_fund_detail')]: {
            bind: 'analytics-footprint-fund-detail',
            analytics: _getFootprintWithLevel4({ bind: 'pageVisitLevel3' }, { bind: 'pageVisitLevel4' }, _analyticsData.footprintFundDetail)
          }
        }
      }
    }
  };

  const base = {
    hash: 'equity-contracts-new-fund',
    currentPage: {
      url: '/equity-contracts-new-fund'
    },
    pages,
    template,
    components: [
      lifeCycle,
      ocFundEquityContract,
      analyticsDm,
      shareDm
    ]
  };

  if (native) {
    base.components.push(openDocument);
  }

  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('bbva-feature-oc-fund-equity-contract-mx');
  return sphericaPageUtils.spherize(base);
};
