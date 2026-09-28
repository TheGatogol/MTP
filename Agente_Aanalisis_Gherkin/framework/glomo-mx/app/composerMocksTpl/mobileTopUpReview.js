/* eslint-disable new-cap */
'use strict';

module.exports = (CONFIG) => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName} = UTILS;
  const PAGE_NAME = 'mobileTopUpReview';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const SPINNER = UTILS.SPINNER(CONFIG);
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_mobileTopUp')();
  const LANGUAGE = UTILS.getLanguage(CONFIG);
  const DATE_TIME_FORMAT = UTILS.getFormatDate();
  const LOCAL_CURRENCY = UTILS.getLocalCurrency();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const LIFE_CYCLE = {
    zone: 'app_main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('not_collapse_any_steps')]: {
            bind: 'not-collapse-any-steps'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }

    }
  };

  const NAVIGATION_HANDLER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'exit-review',
      currentPage: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('exit_and_reset')]: {
            bind: 'goBack'
          }
        },
        out: {
          dashboard_refresh_financial_overview: {
            bind: 'exit-review',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          }
        }
      }
    }
  };

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      delayScrollTop: 500,
      animationType: 'verticalUp',
      headerHight: UTILS.headerHight,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: IS_NATIVE_IOS,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          mobile_top_up_set_template_class_properties: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('SCROLL_BOTTOM_COMPLETE')]: {
            bind: 'set-scroll-bottom-event'
          }
        }
      }
    }
  };

  const HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      back: true,
      rightIcon: 'coronita:close',
      titleName: 'mobile-top-up-header-title',
      cellsConnections: {
        in: {
          mobile_top_up_set_review_header: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('exit_review')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      rightIconText: 'cells-molecule-header-spherica-close',
      titleName: 'mobile-top-up-header-title-spherica',
      variant: 'primary'
    }
  };

  const MOBILE_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-mobile-top-up-manager-mx',
    familyPath: 'glomo-mobile-top-up-manager',
    properties: {
      consumerId: CONFIG.globalServices.costumerId,
      feedbackOperation: 'mobile_top_up_success',
      operativeName: 'mobile-top-up-review',
      cellsConnections: {
        in: {
          [getChannelName('set_card_advice_modal')]: {
            bind: 'setCardAdviceModal'
          },
          mobile_top_up_show_offer_modal: {
            bind: 'showOffer'
          },
          mobile_top_up_pass_list_offer_response: {
            bind: 'listOffer'
          },
          [getChannelName('SCROLL_BOTTOM_COMPLETE')]: {
            bind: 'scrollBottomComplete'
          }
        },
        out: {
          [getChannelName('set_card_advice_properties_for_modal')]: {
            bind: 'set-properties-card-advice-modal'
          },
          global_prepare_feedback: {
            bind: 'should-open-opinator-feedback'
          }
        }
      }
    }
  };

  const MOBILE_OPX_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-mobile-top-up-dm-mx',
    familyPath: 'glomo-opx-mobile-top-up-dm',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('exit_review')]: {
            bind: 'manageExitReview'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageExitReview'
          },
          [getChannelName('init_page')]: {
            bind: 'manageViewRatingApp'
          }
        },
        out: {
          [getChannelName('set_card_advice_modal')]: {
            bind: 'set-card-advice-modal'
          },
          [getChannelName('exit_and_reset')]: {
            bind: 'exit-mobile-top-up-review'
          },
          global_feedback_show_rate_the_app_plugin: {
            bind: 'rating-mobile-top-up-review'
          }
        }
      }
    }
  };

  const SUCCESSFUL_RESPONSE = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      showBanner: true,
      cellsConnections: {
        in: {
          mobile_top_up_navegation_to_review: {
            bind: 'result'
          },
          mobile_top_up_send_information_offer_card: {
            bind: 'setProperties'
          },
          mobile_top_up_set_format_date_successful_response: {
            bind: 'formatDate'
          }
        },
        out: {
          [getChannelName('share_receipt_capture')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('exit_review')]: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'no-wrap-action big-header-title',
      operationListClass: 'centered-items',
      disableButtons: true
    }
  };

  const SHARE_RECEIPT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('share_receipt_capture')]: {
            bind: 'captureReceipt'
          },
          mobile_top_up_share_receipt_result: {
            bind: 'result'
          },
          [getChannelName('init_page')]: {
            bind: 'reset'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const CROSS_SALES_MODAL = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-card-advice',
    tagSpherica: 'cells-modal-card-advice-spherica',
    properties: {
      iOSFixedHeader: IS_NATIVE_IOS,
      iconSize: 16,
      className: 'normal-font-heading black-heading-button image-size-l header--white card-mask',
      cellsConnections: {
        in: {
          [getChannelName('set_card_advice_properties_for_modal')]: {
            bind: 'openWithConfig'
          }
        }
      }
    }
  };

  const ANALYTICS_MANAGER_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/glomo-analytics-mobile-top-up-manager',
    tag: 'glomo-analytics-mobile-top-up-manager-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('set_card_advice_properties_for_modal')]: {
            bind: 'stepCard'
          }
        },
        out: {
          analytics_app_card_view: {
            bind: 'analytics-card_view',
            analytics: ANALYTICS._getAdvancedFootprints('cardStepView')
          },
          analytics_app_card_event: {
            bind: 'analytics-card-event',
            analytics: ANALYTICS._getAdvancedFootprints('cardStepClick')
          }
        }
      }
    }
  };

  const BASE = {
    hash: 'mobile-top-up-review',
    currentPage: {
      url: '/mobile-top-up-review'
    },
    pages: PAGES,
    template: TEMPLATE,
    components: [
      HEADER,
      SPINNER,
      NAVIGATION_HANDLER,
      MOBILE_DM,
      MOBILE_OPX_DM_COMPONENT,
      SUCCESSFUL_RESPONSE,
      SHARE_RECEIPT,
      CROSS_SALES_MODAL,
      LIFE_CYCLE,
      ANALYTICS_MANAGER_COMPONENT
    ]
  };
  return sphericaPageUtils.spherize(BASE);
};
