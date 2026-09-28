'use strict';

module.exports = CONFIG => {
  const { footerHeight, headerHeight } = require('./common/helpers/_utils');
  const { nativeIos = false } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'userTransactionAmountPendingConfirmation');
  const isSpherica = sphericaPageUtils.isSpherica();

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      text: 'user-transaction-amount-pending-confirmation-notification-header',
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        out: {
          go_to_operational_limits: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              cleanUntil: 'operationalLimits',
              page: 'operationalLimits'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      rightButtons: [
        {
          id: 'btn-close',
          name: 'Close',
          icon: 'spherica:close',
          label: 'bbva-header-main-close-aria-label',
          accessibilityText: 'bbva-help-modal-close-button',
          defaultEventIconName: 'header-main-icon-right-primary-click'
        }
      ]
    }
  };

  const titleWithIcon = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': 'true'
    },
    properties: {
      disabledTabindex: '',
      headingLevelTitle: 'h3',
      microillustration: 'clock',
      heading: 'user-transaction-amount-pending-confirmation-notification-title'
    },
    propertiesSpherica: {
      microillustration: 'pending',
      defaultImageSize: '2XL',
      className: 'u-margin-top--1'
    }
  };

  const textContainer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      className: 'u-margin--grid u-margin-top--0-5',
      id: 'div_page'
    }
  };

  const firstText = {
    zone: 'div_page.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      text: 'user-transaction-amount-pending-confirmation-notification-first-text',
      inherit: true,
      size: 'M',
      alignment: 'center'
    }
  };

  const secondText = {
    zone: 'div_page.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      text: 'user-transaction-amount-pending-confirmation-notification-second-text',
      inherit: true,
      size: 'M',
      alignment: 'center',
      className: 'u-margin-top--1-5'
    }
  };

  const confirmButton = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      className: 'u-display--table u-margin--center',
      id: 'confirm_button',
      text: 'user-transaction-amount-pending-confirmation-notification-confirm-button-text',
      cellsConnections: {
        out: {
          go_to_operational_limits: {
            bind: 'click',
            link: {
              cleanUntil: 'operationalLimits',
              page: 'operationalLimits'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--1 u-max-width--2',
      size: 'M'
    }
  };

  const goToNotificationsButton = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      id: 'go_to_notifications_button',
      className: 'link u-display--table u-margin--center u-margin-top--1',
      text: 'user-transaction-amount-pending-confirmation-notification-go-to-notifications-button-text',
      variant: 'secondary',
      cellsConnections: {
        out: {
          go_to_notification_center: {
            bind: 'click',
            link: {
              cleanUntil: 'notificationsCenter',
              page: 'notificationsCenter'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--1 u-margin-top--0-5 u-max-width--2',
      size: 'M'
    }
  };

  const divButtonContainer = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'div_buttons',
      className: 'u-display--table u-margin--center u-margin-bottom--2'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };

  const confirmButtonSpherica = {
    zone: 'div_buttons.slot-content',
    type: 'UI',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    propertiesSpherica: {
      className: '',
      fullwidth: true,
      size: 'M',
      id: 'confirm_button',
      text: 'user-transaction-amount-pending-confirmation-notification-confirm-button-text',
      cellsConnections: {
        out: {
          go_to_operational_limits: {
            bind: 'click',
            link: {
              cleanUntil: 'operationalLimits',
              page: 'operationalLimits'
            }
          }
        }
      }
    }
  };

  const goToNotificationsButtonSpherica = {
    zone: 'div_buttons.slot-content',
    type: 'UI',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    propertiesSpherica: {
      id: 'go_to_notifications_button',
      fullwidth: true,
      size: 'M',
      className: 'link u-margin-top--1',
      text: 'user-transaction-amount-pending-confirmation-notification-go-to-notifications-button-text',
      variant: 'secondary',
      cellsConnections: {
        out: {
          go_to_notification_center: {
            bind: 'click',
            link: {
              cleanUntil: 'notificationsCenter',
              page: 'notificationsCenter'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'userTransactionAmountPendingConfirmation',
    currentPage: {
      url: '/user-transaction-amount-pending-confirmation'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: nativeIos ? 'padding-top' : '',
        headerHeight,
        iOSFixedHeader: nativeIos,
        disableEdgeSwipe: true,
        hasFooter: true,
        footerHeight
      },
      propertiesSpherica: {
        footerHeight: 'fit-content'
      }
    },
    components: [
      header,
      titleWithIcon,
      textContainer,
      firstText,
      secondText,
      ...(isSpherica ? [divButtonContainer, confirmButtonSpherica, goToNotificationsButtonSpherica] : [confirmButton, goToNotificationsButton])
    ]
  };

  return sphericaPageUtils.spherize(base);
};
