'use strict';
module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = CONFIG;
  const { useNames, createPrefixFromPageName, headerHeightMinimum } = require('./common/helpers/_utils');
  const pageName = 'loanSustainableProductList';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      disableScrollLock: true,
      headerFixed: true,
      className: nativeIos ? 'ios-top-padding' : '',
      headerHeight: headerHeightMinimum,
      fixOffsetScroll: 0,
      iOSFixedHeader: nativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
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
          [getChannelName('init_page_widget_catalog')]: {
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
  const widgetCatalog = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-loan-sustainable-product-list',
    familyPath: '@glomo-web-components/bbva-widget-loan-sustainable-product-list',
    familyPathSpherica: '@glomo-web-components/bbva-widget-loan-sustainable-product-list-spherica',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      isIOS: nativeIos,
      cellsConnections: {
        in: {
          [getChannelName('init_page_widget_catalog')]: {
            bind: 'setUpBbvaLocalCatalogsDM'
          }
        },
        out: {
          [getChannelName('exit_flow')]: {
            bind: 'bbva-widget-loan-sustainable-product-list-exit-flow',
            backStep: true
          },
          global_alert_manager_catalog_error_open_with_settings: {
            bind: 'bbva-widget-loan-sustainable-product-list-open-modal'
          }
        }
      }
    }
  };
  const base = {
    hash: 'loan-sustainable-product-list',
    currentPage: {
      url: '/loan-sustainable-product-list'
    },
    pages,
    template,
    components: [
      lifeCycle,
      widgetCatalog
    ]
  };
  return sphericaPageUtils.spherize(base);
};
