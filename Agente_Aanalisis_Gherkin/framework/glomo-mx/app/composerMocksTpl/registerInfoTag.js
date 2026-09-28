'use strict';
module.exports = (CONFIG) => {
  const pageName = 'registerInfoTag';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const {
    nativeIos = false
  } = CONFIG;

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      extraHeaderClass: 'bbva-core-blue',
      drawerWidth: '100%',
      disableScrollLock: true,
      footerFixed: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: headerHeightMinimum,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          ABOUT_INIT_PAGE: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const featureTollEnrollmentMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-toll-enrollment-mx',
    familyPath: '@glomo-web-components/bbva-feature-toll-enrollment-mx',
    render: 'litElement',
    properties: {
      status: 'registerInfoTag',
      selectedPluginConfig: nativeIos ? 'ios' : 'android',
      cellsConnections: {
        in: {
          __bridge_page_registerInfoTag: {
            bind: 'init'
          },
          __bridge_app: {
            bind: 'navigation'
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_MANUALLY: {
            bind: 'codeReaderResult'
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_BARCODE: {
            bind: 'codeReaderResult'
          }
        },
        out: {
          NAVIGATION_TO_REGISTER_INFO_TAG_COMPLETE_PAGE: {
            bind: 'step-select-tag-registration-complete-expandable',
            link: {
              page: 'registerTag',
              cleanUntil: pageName
            }
          },
          NAVIGATION_TO_REGISTER_INFO_TAG_EXIT_PAGE: {
            bind: 'registration-info-tag-reset',
            link: {
              page: 'registerTag',
              cleanUntil: pageName
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'register-info-tag',
    currentPage: {
      url: '/register-info-tag'
    },
    pages,
    template,
    components: [
      featureTollEnrollmentMx
    ]
  };

  return base;
};