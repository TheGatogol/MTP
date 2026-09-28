/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { createPrefixFromPageName, useNames, SPINNERSPHERICA: getSpinnerSpherica, setPropertiesSpherica } = utils;
  const pageName = 'ocMetaseguraOfferSuccess';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const OPERATIVE_PREFIX = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const spinner = utils.SPINNER(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const customerServicePhone = '55 1102 0000';
  const claimsPhone = '800 8743 683';

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'static',
      drawerWidth: '100%',
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      disableScrollLock: true,
      headerFixed: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      extraHeaderClass: 'light-green-bg',
      iOSFixedHeader: true
    }
  };

  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--dark-success',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'oc-metasegura-page-name',
      cellsConnections: {
        out: {
          [getChannelName('close_offer_header')]: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const ocMetaseguraSuccessHiring = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-metasegura-successful-hiring',
    tagSpherica: 'bbva-metasegura-successful-hiring-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-oc-metasegura',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-oc-metasegura-spherica',
    render: 'litElement',
    properties: {
      phoneNumberSac: customerServicePhone,
      phoneNumberClaims: claimsPhone,
      clipImage: './images/offers/metasegura/official-document.svg',
      cellsConnections: {
        in: {
          oc_metasegura_offer_successful_insurance_hiring: {
            bind: 'insuranceResponse'
          }
        },
        out: {
          [getChannelName('generate_receipt')]: {
            bind: 'metasegura-generate-receipt'
          },
          [getChannelName('successful_page_exit')]: {
            bind: 'metasegura-successful-page-exit',
            backStep: true
          }
        }
      }
    }
  };

  const ocMetaseguraManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-metasegura',
    familyPath: '@glomo-web-components/bbva-manager-oc-metasegura',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          }
        },
        out: {
          [getChannelName('open_share_image')]: {
            bind: 'metasegura-share-receipt'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: LANGUAGE,
      operative: 'metaSeguraInsurance',
      cellsConnections: {
        in: {
          oc_metasegura_offer_successful_insurance_hiring_receipt: {
            bind: 'result'
          },
          [getChannelName('generate_receipt')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('successful_page_exit')]: {
            bind: 'reset'
          },
          [getChannelName('close_offer_header')]: {
            bind: 'reset'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('receipt_captured')]: {
            bind: 'receipt-captured'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const cellMobileActionLauncher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_share_image')]: {
            bind: 'shareImage'
          }
        }
      }
    }
  };

  const base = {
    hash: 'oc-metasegura-offer-success',
    currentPage: {
      url: '/oc-metasegura-offer-success'
    },
    pages: pages,
    template,
    components: [
      cellsHandleLifeCycle,
      ocMetaseguraSuccessHiring,
      ocMetaseguraManager,
      cellsShareGenericReceipt
    ]
  };

  if (isSpherica) {
    base.components.push(getSpinnerSpherica(CONFIG));
    const setPropertyComponent = setPropertiesSpherica(base);
    setPropertyComponent('cells-spinner-veil-spherica').className = 'cells-spinner-veil-full-height solid-spinner';
  } else {
    base.components.push(spinner);
    base.components.push(cellsMoleculeHeader);
  }

  if (CONFIG.nativeShell) {
    base.components.push(cellMobileActionLauncher);
  }

  return sphericaPageUtils.spherize(base);
};


