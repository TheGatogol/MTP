'use strict';

module.exports = (CONFIG) => {
  const pageName = 'registerTagSuccess';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { getAlternativeFormatDate, getLanguage } = require('./common/helpers/_utils');
  const {
    nativeIos = false
  } = CONFIG;
  const analyticsTagSuccess = require('./analytics/_glomo-analytics-manager')(CONFIG);
  const literalsAnalytics = require('./analytics/common/_literals');

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'bbva-core-blue',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          ABOUT_INIT_PAGE: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      formatDate: getAlternativeFormatDate(),
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0px',
          'margin-top': '2px',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0px',
          'font-size': 'var(--cells-text-size-12, 12px)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          register_tag_success_SHARE_RECEIPT_CAPTURE: {
            bind: 'captureReceipt'
          },
          register_tag_success_REFUND_RECEIPT_INFO: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const featureTollEnrollmentMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-toll-enrollment-mx',
    familyPath: '@glomo-web-components/bbva-feature-toll-enrollment-mx',
    render: 'litElement',
    properties: {
      status: 'registerTagSuccess',
      cellsConnections: {
        in: {
          __bridge_page_registerTagSuccess: {
            bind: 'init'
          },
          NAVIGATION_TO_SUCCESS_PAGE: {
            bind: 'registerTagInformation'
          }
        },
        out: {
          register_tag_success_SHARE_RECEIPT_CAPTURE: {
            bind: 'bbva-feature-toll-enrollment-mx-share-capture'
          },
          register_tag_success_REFUND_RECEIPT_INFO: {
            bind: 'bbva-feature-toll-enrollment-mx-share-receipt'
          },
          register_tag_success_NAVIGATE_TO_RECHARGE_PAGE: {
            bind: 'navigate-to-tag-recharge',
            link: {
              page: 'rechargeTag',
              skipHistory: true
            }
          },
          register_tag_success_NAVIGATION_SUCCESS_REGISTER_TAG_TO_RECHARGE_TAG: {
            bind: 'navigation-to-up-tag-pase'
          },
          registerTagRegister_RESET: {
            bind: 'navigation-to-up-tag-pase',
            skipHistory: true
          },
          REGISTER_TAG_NAVIGATE_TO_RECHARGE_PAGE: {
            bind: 'navigation-to-up-tag-pase'
          },
          navigation_home_dashboard: {
            bind: 'navigation-home-event',
            link: {
              page: 'tagCardList',
              skipHistory: true
            }
          },
          TAG_SUCCESS_ANALYTICS_APP_ON_CLICK_START_RECHARGE: {
            bind: 'analytics-on-click-start-recharge',
            analytics: analyticsTagSuccess.onClickStart(literalsAnalytics.tag.register, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.information, literalsAnalytics.tag.recharge)
          },
          register_tag_success_ANALYTICS_APP_COMPLETED_MANUALLY: {
            bind: 'analytics-app-completed-manually',
            analytics: analyticsTagSuccess.appCompleted(literalsAnalytics.tag.register, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.ended, literalsAnalytics.register.manual, literalsAnalytics.commons.finalized, literalsAnalytics.tag.register)
          },
          register_tag_success_ANALYTICS_APP_COMPLETED_SCAN: {
            bind: 'analytics-app-completed-scan',
            analytics: analyticsTagSuccess.appCompleted(literalsAnalytics.tag.register, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.successfulPage, literalsAnalytics.commons.ended, literalsAnalytics.register.barcodeRegistration, literalsAnalytics.commons.finalized, literalsAnalytics.tag.register)
          }
        }
      }
    }
  };

  const base = {
    hash: 'register-tag-success',
    currentPage: {
      url: '/register-tag-success'
    },
    pages,
    template,
    components: [
      featureTollEnrollmentMx,
      shareReceipt
    ]
  };

  return base;
};