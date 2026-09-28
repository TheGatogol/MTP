'use strict';

module.exports = CONFIG => {
  const { footerHeight, headerHeight } = require('./common/helpers/_utils');
  const { nativeIos = false } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'userTransactionAmountError');

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
      text: 'user-transaction-amount-error-notification-header',
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        out: {
          go_to_notification_center: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              cleanUntil: 'notificationsCenter',
              page: 'notificationsCenter'
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
      microillustration: 'failure',
      heading: 'user-transaction-amount-confirmation-notification-error-title'
    },
    propertiesSpherica: {
      isIcon: true,
      variant: 'error'
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
      text: 'user-transaction-amount-confirmation-notification-error-description',
      inherit: true,
      size: 'M',
      alignment: 'center'
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
      className: 'u-display--table u-margin--center u-margin-bottom--1'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };

  const buttonConfirm = {
    zone: 'div_buttons.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      id: 'buttonConfirm',
      className: 'u-margin--1',
      text: 'user-transaction-amount-pending-confirmation-notification-confirm-button-text',
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
      className: '',
      size: 'M'
    }
  };

  const base = {
    hash: 'userTransactionAmountError',
    currentPage: {
      url: '/user-transaction-amount-error'
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
      divButtonContainer,
      buttonConfirm
    ]
  };

  return sphericaPageUtils.spherize(base);
};
