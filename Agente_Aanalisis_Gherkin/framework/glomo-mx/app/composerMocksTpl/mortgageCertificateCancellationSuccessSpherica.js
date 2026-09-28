/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = config => {
  const page = 'mortgageCertificateCancellationSuccess';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const spinner = utils.SPINNER(config);
  const ANALYTICS = require('./analytics/_mortgageCertificateReview')(config);

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: page,
      private: false,
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
    tag: 'bbva-header-main-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      text: 'mortgage-certificate-cancellation-success-header-title',
      rightButtons: [ {
        id: 'btn-close',
        name: 'Close',
        icon: 'spherica:close',
        label: 'bbva-header-main-close-aria-label',
        accessibilityText: 'bbva-help-modal-close-button',
        defaultEventIconName: 'header-main-icon-right-primary-click'
      } ],
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
    tag: 'bbva-panel-info-spherica',
    familyPath: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      hidePaddingBottom: true,
      microillustration: 'success',
      heading: 'mortgage-certificate-cancellation-panel-info-heading',
      microillustrationType: 'light',
      variant: 'success',
      className: 'u-margin--1'
    }
  };

  const textDateContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'dateContainer',
      className: 'u-display--space-between u-margin--grid u-margin-bottom--1 bg-secondary100 u-border-radius--1 u-padding--1'
    }
  };

  const textDateTitle = {
    zone: 'dateContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      tag: 'span',
      text: 'mortgage-certificate-review-cancellation-operation-date'
    }
  };

  const textDate = {
    zone: 'dateContainer.slot-content',
    type: 'UI',
    tag: 'bbva-type-text-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      tag: 'span',
      fontType: 'body',
      fontWeight: '500',
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
    tag: 'bbva-notification-message-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      message: '',
      bookTitle: true,
      cellsConnections: {
        in: {
          mortgage_certificate_cancellation_set_icon_message: {
            bind: 'messageTitle'
          }
        },
        out: {}
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
      textDateContainer,
      textDateTitle,
      textDate,
      notificationMessage
    ]
  };

  return base;
};
