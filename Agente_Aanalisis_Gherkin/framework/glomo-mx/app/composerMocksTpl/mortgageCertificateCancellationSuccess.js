/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = config => {
  const page = 'mortgageCertificateCancellationSuccess';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const spinner = utils.SPINNER(config);
  const ANALYTICS = require('./analytics/_mortgageCertificateReview')(config);
  const newSphericaPage = require('./common/helpers/_spherica')(config, page).getNewSphericaPage();
  if (newSphericaPage) {
    return newSphericaPage;
  }

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: page,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${page}`]: {
            bind: 'init'
          }
        },
        out: {
          close_control_veil: {
            bind: 'init-page',
            analytics: ANALYTICS.PAGE_VIEW_3
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
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
      continue: 'contract',
      cellsConnections: {
        in: {
          mortgage_certificate_cancellation_success_back_action: {
            bind: 'navigate'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigate'
          }
        },
        out: {
          mortgage_certificate_cancellation_navigation_to_contract: {
            bind: 'navigation-to-contract',
            link: {
              cleanUntil: 'contractProductSection',
              page: 'contractProductSection'
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'mortgage-certificate-cancellation-success-header-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {},
        out: {
          mortgage_certificate_cancellation_success_back_action: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      hidePaddingBottom: true,
      microillustration: 'success',
      heading: 'mortgage-certificate-cancellation-panel-info-heading',
      cellsConnections: {}
    }
  };

  const textDate = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin-bottom--2',
      alignment: 'center',
      fontStyle: 'italic',
      fontWeight: '700',
      tag: 'div',
      cellsConnections: {
        in: {
          mortgage_certificate_cancellation_set_date: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      message: '',
      cellsConnections: {
        in: {
          mortgage_certificate_cancellation_set_icon_message: {
            bind: 'message'
          }
        },
        out: {}
      }
    }
  };

  const panelButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    render: 'litElement',
    properties: {
      show: true,
      cellsConnections: {
        in: {
          mortgage_certificate_cancellation_set_panel_button_title: {
            bind: 'buttonText'
          }
        },
        out: {
          mortgage_certificate_cancellation_success_back_action: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mortgage-certificate-cancellation-success',
    currentPage: {
      url: '/mortgage-certificate-cancellation-success',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      spinner,
      navigationHandler,
      header,
      panelInfo,
      textDate,
      notificationMessage,
      panelButton
    ]
  };

  return base;

};
