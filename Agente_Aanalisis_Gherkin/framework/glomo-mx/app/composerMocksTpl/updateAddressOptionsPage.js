/* eslint-disable no-shadow */
'use strict';

module.exports = (config) => {

  const page = require('./common/_pages');
  const { getLocalCurrency, useNames, getLanguage, createPrefixFromPageName } = require('./common/helpers/_utils');
  const PAGE_NAME = 'updateAddressOptionsPage';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);

  const updateAddressOptionsPage = page(config)(PAGE_NAME);
  const isNativeIos = config.nativeIos || false;

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      hasFooter: false,
      className: isNativeIos ? 'ios-top-padding' : '',
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
      pageName: 'updateAddressOptionsPage',
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'medium-blue',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'glomo-update-address-to-attach-imagen',
      cellsConnections: {
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-right-button',
            backStep: true
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
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getChannelName('back-button')]: {
            bind: 'goBack'
          }
        }
      }
    }
  };

  const selectOption = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-link-list',
    properties: {
      className: 'icon-centered dt-no-padding font-default-subtitles content-padding content-spaced-m',
      stepId: 'step-select-option',
      stepTitle: 'glomo-update-address-select-option-page-title',
      stepSubTitle: 'glomo-update-address-select-option-page-subtitle',
      linksList: [
        {
          id: 'galery',
          titleText: 'glomo-update-address-select-option-page-text1',
          activateContainerClick: true,
          buttonConfig: {
            icon: 'coronita:forward'
          }
        },
        {
          id: 'camera',
          titleText: 'glomo-update-address-select-option-page-text2',
          activateContainerClick: true,
          buttonConfig: {
            icon: 'coronita:forward'
          }
        }
      ],
      linksListItemClass: 'link-list-item-border',
      hiddenContinueButton: true,
      editEnabled: true,
      preventParse: true,
      active: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          }
        },
        out: {
          NAVEGATION_TO_ON_TAP_OPTIONS_MEDIACAPTURE: {
            bind: 'link-list-clicked',
            backStep: true
          }
        }
      }
    }
  };

  const base = {
    hash: '/update-address-options',
    currentPage: {
      url: '/update-address-options',
      params: []
    },
    pages: updateAddressOptionsPage,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      selectOption
    ]
  };

  return base;
};
