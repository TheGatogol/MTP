/* eslint-disable no-shadow */
'use strict';

module.exports = (config) => {
  const page = require('./common/_pages');
  const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName } = require('./common/helpers/_utils');
  const PAGE_NAME = 'updateAddressPage';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const updateAddressPage = page(config)(PAGE_NAME);
  const IS_NATIVE_IOS = config.nativeIos || false;
  const ANALYTICS = require('./analytics/_updateAddressPage')(config);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      hasFooter: false,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'bbva-core-white',
      delayScroll: 0,
      fixOffsetScroll: 0,
      headerFixed: true,
      iOSFixedHeader: true,
      handleStoppedScroll: true,
      preventScrollWithOverlay: true,
      cellsConnections: {
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'updateAddressPage',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const glomoUpdateAddressDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-update-address-dm',
    properties: {
      cellsConnections: {
        in: {
          navigation_profile_to_address_validation: {
            bind: 'setOpenModal'
          },
          global_blue_update_address: {
            bind: 'setOpenModal'
          }
        },
        out: {
          UPDATE_ADDRESS_PAGE_SHOW_ALERT_MANAGER_UPDATE_ADVICE: {
            bind: 'open-alert-manager-advice-address'
          },
          UPDATE_ADDRESS_PAGE_SEND_INPUT_ZIP_CODE: {
            bind: 'set-input-zip-code-and-reset'
          },
          send_data_update_address_input: {
            bind: 'set-data-profile-address',
            analytics: ANALYTICS.APP_ON_CLICK_START_CHANGE_INSTRUCTION
          }
        }
      }
    }
  };

  const base = {
    hash: 'update-address',
    currentPage: {
      url: '/update-address',
      params: []
    },
    pages: updateAddressPage,
    template,
    components: [
      lifeCycle,
      glomoUpdateAddressDM
    ]
  };

  return base;
};
