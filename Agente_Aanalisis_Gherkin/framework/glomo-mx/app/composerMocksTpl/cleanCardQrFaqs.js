'use strict';

module.exports = (config) => {
  const isNativeIos = !!config.nativeIos;
  const PAGE_NAME = 'cleanCardQrFaqs';
  const PAGE_NAME_CHANNEL = 'clean_card_qr_faqs';
  const cleanCardQrFaqs = require('./common/helpers').getPages(config)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);

  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-qr-faq-button-close',
        class: 'primary',
        action: ''
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      headerHeight: 60,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    iOSFixedHeader: isNativeIos,
    properties: {
      hideLeftActions: true,
      rightIcon: 'coronita:close',
      titleName: 'glomo-qr-faq-header',
      className: 'header-title-font-w-400',
      cellsConnections: {
        in: {},
        out: {
          [PAGE_NAME_CHANNEL + '_close_qr_faq']: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: ''
    }
  };

  const stepList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-accordion-step-list',
    tagSpherica: 'cells-accordion-step-list-spherica',
    properties: {
      iconRight: 'coronita:expand',
      iconRightCollapse: 'coronita:collapse',
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_close_qr_faq']: {
            bind: 'closeAccordions'
          },
          send_faqs_to_clean_card_QR_Faqs: {
            bind: 'setProperties'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'secondary'
    }
  };

  const footer = {
    zone: 'app__footer',
    tag: 'cells-confirm-buttons',
    type: 'UI',
    properties: {
      className: 'no-shadow',
      config: configButtons,
      cellsConnections: {
        in: {},
        out: {
          [PAGE_NAME_CHANNEL + '_close_qr_faq']: {
            bind: 'cells-confirm-buttons-click-primary',
            backStep: true
          }
        }
      }
    }
  };

  return sphericaPageUtils.spherize({
    pages: cleanCardQrFaqs,
    template,
    components: sphericaPageUtils.isSpherica() ? [
      header,
      stepList
    ] : [
      header,
      stepList,
      footer
    ]
  });

};
