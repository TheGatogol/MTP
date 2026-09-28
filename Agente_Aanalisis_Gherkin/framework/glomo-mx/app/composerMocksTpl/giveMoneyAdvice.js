'use strict';
module.exports = CONFIG => {
  const pageName = 'giveMoneyAdvice';
  const { nativeIos = false } = CONFIG;
  const base = {
    hash: 'give-money-advice',
    currentPage: {
      url: '/give-money-advice'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            [pageName + '_PAGE_VISITED']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          text: 'global-give-money-advice--title-header',
          variant: 'modal-three-level',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          iconRightPrimary: 'coronita:close',
          cellsConnections: {
            out: {
              give_money_advice_header_back_action: {
                bind: 'header-main-icon-right-primary-click',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-core-icon',
        tag: 'bbva-core-icon',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2',
          size: 24,
          icon: 'coronita:exploration'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          className: 'u-margin--center',
          fontWeight: '500',
          text: 'global-give-money-advice--sub-title-1',
          alignment: 'center'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          id: 'firstAdviceText',
          className: 'u-margin-left--1 u-margin-right--1',
          text: 'global-give-money-advice--paragraph-1',
          size: 'S',
          alignment: 'center'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-core-icon',
        tag: 'bbva-core-icon',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2',
          size: 24,
          icon: 'bbva:dollartaxes'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          className: 'u-margin--center',
          alignment: 'center',
          fontWeight: '500',
          text: 'global-give-money-advice--sub-title-2'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          id: 'secondAdviceText',
          className: 'u-margin-left--1 u-margin-right--1',
          text: 'global-give-money-advice--paragraph-2',
          size: 'S',
          alignment: 'center'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-core-icon',
        tag: 'bbva-core-icon',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2',
          size: 24,
          icon: 'coronita:savings'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          alignment: 'center',
          fontWeight: '500',
          text: 'global-give-money-advice--sub-title-3'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-text',
        tag: 'bbva-text',
        render: 'litElement',
        properties: {
          id: 'thirdAdviceText',
          className: 'u-margin-left--1 u-margin-right--1',
          text: 'global-give-money-advice--paragraph-3',
          size: 'S',
          alignment: 'center'
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-button-default',
        tag: 'bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center',
          text: 'global-give-money-advice--page-close',
          cellsConnections: {
            out: {
              give_money_advice_button_back_action: {
                bind: 'click',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };
  return base;
};