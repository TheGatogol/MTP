'use strict';

module.exports = CONFIG => {
  const { footerHeight, headerHeight } = require('./common/helpers/_utils');
  const { nativeIos = false } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'userTransactionAmountRejection');

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
      text: 'user-transaction-amount-confirmation-notification-header',
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
      text: 'user-transaction-amount-rejection-notification-header-title',
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
      heading: 'user-transaction-amount-confirmation-notification-rejection-title'
    },
    propertiesSpherica: {
      defaultImageSize: '2XL',
      size: '2XL',
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
      text: 'user-transaction-amount-confirmation-notification-rejection-description',
      inherit: true,
      size: 'M',
      alignment: 'center'
    }
  };

  const opertionalLimitsButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operations-list-indicators',
    tagSpherica: 'cells-operations-list-indicators-spherica',
    properties: {
      layoutIndicators: 'review',
      limit: 1,
      className: 'u-margin-top--2',
      continue: 'operationalLimits',
      operations: [
        {
          label: 'user-transaction-amount-confirmation-notification-operations-list-label',
          id: 'operation-limit',
          icon: 'coronita:limits',
          type: 'operation',
          eventName: 'navigate-to-operational-limits'
        }
      ],
      cellsConnections: {
        out: {
          navigate_to_operational_limits: {
            bind: 'navigate-to-operational-limits',
            link: {
              page: 'operationalLimits',
              cleanUntil: 'userTransactionAmountRejection'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: 'list-center u-margin-top--2',
      operations: [
        {
          label: 'user-transaction-amount-confirmation-notification-operations-list-label',
          id: 'operation-limit',
          icon: 'coronita:limits',
          type: 'operation',
          eventName: 'navigate-to-operational-limits'
        },
        {}
      ]
    }
  };

  const base = {
    hash: 'userTransactionAmountRejection',
    currentPage: {
      url: '/user-transaction-amount-rejection'
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
        footerHeight: 50
      }
    },
    components: [
      header,
      titleWithIcon,
      textContainer,
      firstText,
      opertionalLimitsButton
    ]
  };

  return sphericaPageUtils.spherize(base);
};
