/* eslint-disable no-shadow */
'use strict';

module.exports = config => {
  const page = 'validatedEmailSuccess';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(page);
  const country = utils.getCountry(config);
  const ANALYTICS =  require('./analytics/_emailManagement')(config);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: page,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${page}`]: {
            bind: 'init'
          }
        },
        out: {
          validated_email_success_init_page: {
            bind: 'init-page',
            analytics: ANALYTICS.PAGE_VIEW_5
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
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          validated_email_success_set_header_title: {
            bind: 'text'
          }
        },
        out: {
          validated_email_success_go_to_profile: {
            bind: 'header-main-icon-right-primary-click'
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
      cellsConnections: {
        in: {
          validated_email_success_go_to_profile: {
            bind: 'navigate'
          },
          validated_email_success_set_continue: {
            bind: 'continue'
          }
        },
        out: {
          validated_email_success_navigation_to_profile: {
            bind: 'navigation-to-profile',
            link: {
              cleanUntil: 'profile',
              page: 'profile'
            }
          },
          validated_email_success_navigation_to_dashboard: {
            bind: 'navigation-to-securityProfile',
            link: {
              cleanUntil: 'securityProfile',
              page: 'securityProfile'
            }
          }
        }
      }
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      withoutHead: true,
      hideDivider: true,
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      cellsConnections: {
        in: {
          validated_email_success_set_successful_response: {
            bind: 'result'
          }
        },
        out: {
          validated_email_success_go_to_profile: {
            bind: 'validated-email-address-primary-button'
          }
        }
      }
    }
  };

  const validatedEmailDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-validated-email-success',
    familyPath: '@glomo-web-components/bbva-manager-email-management',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          validated_email_success_init_page: {
            bind: 'setPageTranslations'
          },
          update_email_address_set_comes_from_security_profile: {
            bind: 'setComesFromSecurityProfile'
          },
          sign_email_modal_close: {
            bind: 'emailValidatedSuccessfully'
          }
        },
        out: {
          validated_email_success_set_successful_response: {
            bind: 'set-validated-email-address-email-success-response'
          },
          validated_email_success_set_continue: {
            bind: 'set-validated-email-continue'
          },
          validated_email_success_set_header_title: {
            bind: 'set-validated-email-address-header-title'
          }
        }
      }
    }
  };

  const base = {
    hash: country + 'validated-email-success',
    currentPage: {
      url: '/validated-email-success',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      successfulResponse,
      validatedEmailDm
    ]
  };

  return base;
};
