'use strict';
module.exports = CONFIG => {
  const {
    createPrefixFromPageName,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');
  const pageName = 'openDigitalAccountSignaturePadModal';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);

  const base = {
    hash: '-open-digital-account-signature-pad',
    currentPage: {
      url: '/open-digital-account-signature-pad'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight,
        fixOffsetScroll: 0,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          private: false,
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
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPath: '@bbva-web-components/bbva-help-modal',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'signaturePadModal',
          className: 'hide-padding-container padding-container-wrapper',
          fullHeight: true,
          headerText: 'bbva-widget-signature-pad-modal-title',
          headerType: 'modal-three-level',
          hideContentPaddingTop: true,
          cellsConnections: {
            in: {
              open_digital_account_multistep_launch_signature_pad: {
                bind: 'open'
              },
              open_digital_account_multistep_save_sign: {
                bind: 'close'
              }
            },
            out: {
              [getChannelName('HEADER_RIGHT_PRIMARY_CLICK')]: {
                bind: 'help-modal-header-right-primary-click',
                backStep: true
              },
              open_digital_account_signature_pad_modal_MODAL_CLOSE: {
                bind: 'help-modal-close',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          headerType: '',
          closeLabel: 'open-digital-account-multistep-header-close'
        }
      },
      {
        zone: 'signaturePadModal.slot-content',
        type: 'UI',
        tag: 'bbva-widget-signature-pad',
        tagSpherica: 'bbva-widget-signature-pad-spherica',
        familyPath: '@glomo-web-components/bbva-widget-signature-pad',
        familyPathSpherica: '@glomo-web-components/bbva-widget-signature-pad-spherica',
        render: 'litElement',
        properties: {
          variant: 'default',
          isNativeIos,
          className: 'fixed-position',
          cellsConnections: {
            out: {
              open_digital_account_multistep_save_sign: {
                bind: 'save-sign',
                backStep: true
              },
              open_digital_account_multistep_after_sign_spinner: {
                bind: 'show-spinner-to-next-step'
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
