'use strict';
module.exports = CONFIG => {
  const pageName = 'domiciliationNoticeDecline,';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      hasFooter: true,
      footerHeight: 100,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      variant: 'modal-three-level',
      className: isNativeIos ? 'u-padding-top--0' : '',
      text: 'domiciliation-notice-tdd-decline-subscription-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          go_to_dashboard: {
            bind: 'header-main-icon-right-primary-click',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const panelIcon = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      id: 'div_info',
      alignment: 'left',
      microillustration: 'creditcardnegativedark'
    }
  };
  const panelTitle = {
    zone: 'div_info.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      alignment: 'center',
      fontWeight: '500',
      size: 'M',
      text: 'domiciliation-notice-tdd-decline-subscription-decline-title'
    }
  };
  const panelText = {
    zone: 'div_info.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      alignment: 'center',
      fontWeight: '300',
      size: 'S',
      text: 'domiciliation-notice-tdd-decline-subscription-decline-text'
    }
  };
  const panelSecondText = {
    zone: 'div_info.',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      alignment: 'center',
      fontWeight: '300',
      size: 'S',
      text: 'domiciliation-notice-tdd-decline-subscription-decline-text-I'
    }
  };
  const divFooterContainer = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'div_footer',
      className: 'u-display--center'
    }
  };
  const exitButton = {
    zone: 'div_footer.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    properties: {
      className: `${isNativeIos ? 'u-padding-top--0 u-padding-bottom--0 ' : ''} u-margin--1`,
      text: 'domiciliation-notice-tdd-finish-subscription-button-exit',
      cellsConnections: {
        out: {
          go_to_dashboard: {
            bind: 'click',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-domiciliation-notice-decline',
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template: template,
    components: [
      header,
      panelIcon,
      panelTitle,
      panelText,
      panelSecondText,
      divFooterContainer,
      exitButton
    ]
  };
  return base;
};