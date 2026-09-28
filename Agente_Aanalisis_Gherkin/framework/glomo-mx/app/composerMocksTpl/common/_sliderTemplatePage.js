'use strict';

/**
 * @param CONFIG
 * @param {String} pageName
 * @param {Object} configSlidervower
 *
 * @description You can also use the dynamic channels
 * [`${pageName}_slides`]: Add slides
 * [`${pageName}_start_slider`]: Start slider
 * [`${pageName}_stop_slider`]: Stop Slider
 *
 */
module.exports = (CONFIG) => (pageName, configSlider = {}) => {
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./_pages')(CONFIG)(pageName);

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_stop_slider']: {
            bind: 'reset'
          },
          [pageName + '_start_slider']: {
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

  const slider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-full-screen-slider',
    properties: {
      autoplay: true,
      ...configSlider,
      cellsConnections: {
        in: {
          [pageName + '_slides']: {
            bind: 'slides'
          },
          [pageName + '_start_slider']: {
            bind: 'start'
          },
          [pageName + '_stop_slider']: {
            bind: 'stop'
          },
          [pageName + '_disable_swipe']: {
            bind: 'disableSwipe'
          },
          [pageName + '_bullets_style']: {
            bind: 'bulletsStyle'
          }
        },
        out: {
          [pageName + '_slider_clicked']: {
            bind: 'press-button-slider'
          },
          [pageName + '_current_slide']: {
            bind: 'selected-changed'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: `/${pageName}`
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bg-light' : 'bg-light',
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      handleLifeCycle,
      slider
    ]
  };
  return base;
};
