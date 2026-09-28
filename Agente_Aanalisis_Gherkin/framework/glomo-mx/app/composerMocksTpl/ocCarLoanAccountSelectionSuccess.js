'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner,
    footerHeight
  } = require('./common/helpers/_utils');
  const {
    globalServices: {requiredToken = 'tsec'},
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanAccountSelectionSuccess';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));
  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      footerFixed: true,
      footerHeight,
      iOSFixedHeader: nativeIos
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-account-selection-header-title',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          ch_oc_car_loan_account_selection_exit_page: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const lifecycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
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
          close_control_veil: {
            bind: 'init-page'
          },
          [getChannelName('account_selection_success_reset_page')]: {
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

  const successIllustration = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    tag: 'bbva-panel-info',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': 'true'
    },
    properties: {
      className: 'u-margin-bottom--0-5',
      disabledTabindex: '',
      headingLevelTitle: 'h3',
      microillustration: 'success',
      heading: 'bbva-process-success-oc-car-loan-banner-successful-account-selection-title'
    }
  };

  const textDateTime = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'font-style': 'italic',
      'font-weight': '500'
    },
    properties: {
      className: 'u-margin-top--1',
      alignment: 'center',
      size: 'S',
      cellsConnections: {
        in: {
          oc_car_loan_account_selection_date_time_account: {
            bind: 'text'
          }
        }
      }
    }
  };

  const divider = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-divider',
    tag: 'bbva-divider',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--1',
      size: 'small center'
    }
  };

  const typeAccount = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    attributes: {
      'text-color': '#666666',
      'font-weight': '300'
    },
    properties: {
      className: 'u-margin-top--1-5',
      alignment: 'center',
      tag: 'span',
      text: 'bbva-oc-car-loan-charge-account',
      size: 'S'
    }
  };

  const productDescription = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    properties: {
      alignment: 'center',
      tag: 'span',
      size: 'S',
      cellsConnections: {
        in: {
          oc_car_loan_account_selection_success_payload: {
            bind: 'text'
          }
        }
      }
    }
  };

  const button = {
    zone: 'app__footer',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-button-default',
    tag: 'bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center',
      text: 'bbva-oc-car-loan-button-continue-text',
      cellsConnections: {
        out: {
          ch_oc_car_loan_account_selection_success: {
            bind: 'click',
            backStep: true
          }
        }
      }
    }
  };

  const base = {
    hash: 'oc-car-loan-process-success-account-selection',
    currentPage: {
      url: '/ocCarLoanAccountSelectionSuccess'
    },
    pages,
    template,
    components: [
      lifecycle,
      header,
      successIllustration,
      textDateTime,
      divider,
      typeAccount,
      productDescription,
      button
    ]
  };

  return base;
};
