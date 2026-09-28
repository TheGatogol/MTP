'use strict';
const literals = require('./analytics/common/_literals');

module.exports = CONFIG => {
  const {
    createPrefixFromPageName,
    getCountry,
    getLanguage,
    SPINNER: getSpinner,
    useNames
  } = require('./common/helpers/_utils');
  const { mobileActionLauncher, glomoAlertManager } = require('./common/_cross-components');
  const pageName = 'openDigitalAccount';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const host = CONFIG.globalServices.host;
  const hostGrantingTicket = CONFIG.globalServices.hostGrantingTicket;
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const pageAnalytics = require('./analytics/_openDigitalAccount')();
  const externalLink = 'https://www.bbva.mx/personas/productos/cuentas/cuenta-bancaria.html';
  const spinner = getSpinner(CONFIG);

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'sold-spinner'
  };

  const modalCoronitaContent = [
    {
      zone: 'privacyNoticeModal.slot-content',
      type: 'UI',
      tag: 'bbva-banner-image',
      familyPath: '@bbva-web-components/bbva-banner-image',
      render: 'litElement',
      properties: {
        imageSrc: './images/bbva-logo-no-divider.svg',
        fullWidth: true,
        className: 'image-size-auto u-padding-left--0 image-margin-0'
      }
    },
    {
      zone: 'privacyNoticeModal.slot-content',
      type: 'UI',
      tag: 'bbva-divider',
      familyPath: '@bbva-web-components/bbva-divider',
      render: 'litElement',
      properties: {
        size: 'full'
      }
    },
    {
      zone: 'privacyNoticeModal.slot-content',
      type: 'UI',
      tag: 'bbva-header-category',
      familyPath: '@bbva-spherica-components/bbva-header-category',
      render: 'litElement',
      properties: {
        className: 'u-padding-left--0',
        text: 'open-digital-account-modal-notice-privacy-title'
      }
    }
  ];
  const base = {
    currentPage: {
      url: '/open-digital-account'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        anymationType: 'verticalUp',
        className: 'bbva-core-blue',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        headerFixed: true
      }
    },
    components: [
      spinner,
      {
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
              ['__bridge_page_' + pageName]: {
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
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        render: 'litElement',
        tagSpherica: 'bbva-header-main-spherica',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          id: 'headerDigitalAccount',
          variant: 'modal',
          text: 'open-digital-account-landing-header-title',
          iconLeftPrimary: 'coronita:return-12',
          cellsConnections: {
            out: {
              [getChannelName('go_to_welcome')]: {
                bind: 'header-main-icon-left-primary-click'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          text: 'open-digital-account-landing-cta-spherica',
          class: 'priamry-alt',
          id: 'close-label',
          ambient: 'primary-alt',
          rightButtons: [
            {
              id: 'btn-close',
              name: 'Close',
              icon: 'coronita:close',
              accessibilityText: 'bbva-header-main-a11y-icon-close-label',
              label: 'bbva-header-main-spherica-close',
              defaultEventIconName: 'header-main-close-icon-click'
            }
          ],
          cellsConnections: {
            out: {
              open_digital_account_go_to_welcome: {
                bind: 'header-main-close-icon-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          continue: 'open-digital-account-multistep',
          cellsConnections: {
            in: {
              [getChannelName('go_to_multistep')]: {
                bind: 'navigate'
              }
            },
            out: {
              [getChannelName('navigation_to_multistep')]: {
                bind: 'navigation-to-open-digital-account-multistep',
                link: {
                  cleanUntil: 'openDigitalAccountMultistep',
                  page: 'openDigitalAccountMultistep'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-panel-info',
        tagSpherica: 'bbva-panel-info-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
        properties: {
          image: './images/openDigitalAccountN2/header_digital_account.png',
          heading: 'open-digital-account-landing-title',
          text: 'open-digital-account-landing-description'
        },
        propertiesSpherica: {
          image: '',
          variant: 'secondary',
          className: 'u-margin--1',
          microillustration: 'account',
          heading: 'open-digital-account-landing-title',
          typeTextSize: '3XL',
          defaultImageSize: 'XL'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-clip-list',
        tagSpherica: 'bbva-clip-list-spherica',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-clip-list',
        familyPathSpherica: '@glomo-web-components/bbva-clip-list-spherica',
        properties: {
          className: 'hide-border-list u-margin-bottom--0-5',
          allClickable: true,
          cellsConnections: {
            in: {
              [getChannelName('set_account_benefits_list')]: {
                bind: 'list'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-category',
        tagSpherica: 'bbva-header-category-spherica',
        render: 'litElement',
        familyPath: '@bbva-spherica-components/bbva-header-category',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('set_considerations_header')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'u-margin--1',
          text: 'open-digital-account-landing-consideration-header-spherica'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-aggregation-bullet-list',
        tagSpherica: 'bbva-aggregation-bullet-list-spherica',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
        familyPathSpherica: '@glomo-web-components/bbva-aggregation-bullet-list-spherica',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('set_considerations_list')]: {
                bind: 'items'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'secondary',
          className: 'u-margin--1'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-file',
        tagSpherica: 'bbva-list-file-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-list-file',
        familyPathSpherica: '@glomo-web-components/bbva-list-file-spherica',
        properties: {
          icon: 'bbva:info',
          cellsConnections: {
            in: {
              [getChannelName('list_action_icon')]: {
                bind: 'icon'
              },
              [getChannelName('list_action_text')]: {
                bind: 'fileName'
              }
            },
            out: {
              [getChannelName('external_link')]: {
                bind: 'list-file-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          icon: 'spherica:info',
          variant: 'primary-alt',
          withBackground: true,
          className: 'u-margin--grid u-margin-bottom--0-5 u-margin-top--1',
          mediumSize: true,
          newCellsConnections: {
            add: {
              in: {
                open_digital_account_list_action_text: {
                  bind: 'fileName'
                }
              },
              out: {
                open_digital_account_external_link: {
                  bind: 'list-file-link-click'
                }
              }
            },
            remove: {
              in: [
                'open_digital_account_list_action_icon'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message',
        tagSpherica: 'bbva-notification-message-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-notification-message',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          icon: 'spherica:info',
          className: 'u-margin--grid',
          cellsConnections: {
            in: {
              [getChannelName('set_notification_title')]: {
                bind: 'messageTitle'
              },
              [getChannelName('set_notification_message')]: {
                bind: 'message'
              },
              [getChannelName('set_notification_link_title')]: {
                bind: 'linkTitle'
              }
            },
            out: {
              [getChannelName('account_limits_help_modal')]: {
                bind: 'notification-message-link-click'
              }
            }
          }
        },
        propertiesSpherica: {
          icon: ''
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-link',
        tagSpherica: 'bbva-type-link',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-link',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-link',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2',
          cellsConnections: {
            in: {
              [getChannelName('set_privacy_notice_text')]: {
                bind: 'text'
              }
            },
            out: {
              [getChannelName('privacy_notice_modal')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-digital-account',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-digital-account',
        properties: {
          host,
          url: externalLink,
          isNative,
          language: getLanguage(),
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'setBenefitsPageTranslations'
              },
              [getChannelName('get_product_limits_success')]: {
                bind: 'initProductLimits'
              },
              [getChannelName('external_link')]: {
                bind: 'globalOpenExternalLink'
              },
              [getChannelName('login_anonymous_request_success')]: {
                bind: 'requestProductLimits'
              },
              [getChannelName('login_anonymous_request_error')]: {
                bind: 'openRetryOrErrorGrantingTicketServiceModal'
              },
              [getChannelName('retry_modal_accept')]: {
                bind: 'retryGrantingTicket'
              },
              [getChannelName('retry_modal_cancel')]: {
                bind: 'reset'
              },
              [getChannelName('retry_modal_cancel')]: {
                bind: 'goBack'
              },
              [getChannelName('retry_error_modal_exit')]: {
                bind: 'reset'
              },
              [getChannelName('retry_error_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('go_to_welcome')]: {
                bind: 'goToWelcome'
              }
            },
            out: {
              [getChannelName('set_account_benefits_list')]: {
                bind: 'set-account-benefits-list'
              },
              [getChannelName('set_considerations_header')]: {
                bind: 'set-considerations-header'
              },
              [getChannelName('set_considerations_list')]: {
                bind: 'set-considerations-list'
              },
              [getChannelName('list_action_icon')]: {
                bind: 'set-list-link-icon'
              },
              [getChannelName('list_action_text')]: {
                bind: 'set-list-link-text'
              },
              [getChannelName('set_notification_title')]: {
                bind: 'set-notification-title'
              },
              [getChannelName('set_notification_message')]: {
                bind: 'set-notification-message'
              },
              [getChannelName('set_notification_link_title')]: {
                bind: 'set-notification-link'
              },
              [getChannelName('set_privacy_notice_text')]: {
                bind: 'set-privacy-notice-link'
              },
              [getChannelName('request_granting_tickets')]: {
                bind: 'request-granting-ticket'
              },
              [getChannelName('get_product_limits')]: {
                bind: 'get-product-limits'
              },
              [getChannelName('account_limits_help_modal_cta')]: {
                bind: 'set-account-limits-modal-cta'
              },
              [getChannelName('privacy_notice_modal_cta')]: {
                bind: 'set-privacy-notice-modal-cta'
              },
              [getChannelName('account_limits_help_modal_dynamic_data')]: {
                bind: 'set-help-modal-limits-dynamic-data'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal'
              },
              [getChannelName('service_not_available_modal')]: {
                bind: 'service-not-available-modal'
              },
              [getChannelName('go_to_web_welcome')]: {
                bind: 'go-to-web-welcome',
                link: {
                  page: 'welcome'
                }
              },
              close_native_web_view_to_welcome: {
                bind: 'go-to-native-welcome',
                'forward-to-native': true
              },
              global_action_launcher_uri: {
                bind: 'open-external-url'
              },
              global_open_uri: {
                bind: 'open-external-url'
              },
              open_digital_account_multistep_send_deeplink_indicator: {
                bind: 'send-deeplink-indicator'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                close_native_web_view_to_welcome: {
                  bind: 'go-to-native-welcome',
                  'forward-to-native': true,
                  nativeLink: {
                    page: 'nativeLogin'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-digital-account',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-digital-account',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'analyticPageView'
              },
              [getChannelName('navigation_to_multistep')]: {
                bind: 'analyticOnClickStart'
              },
              [getChannelName('service_not_available_modal')]: {
                bind: 'firesServiceNotAvailableFootprint'
              }
            },
            out: {
              [getChannelName('analytic_on_page_view')]: {
                bind: 'analytics-page-view',
                analytics: pageAnalytics.getAdvancedFootprintAnalytics({ level2: 'detalle de cuenta', pageInfoIntent: literals.commons.information  })
              },
              [getChannelName('analytic_on_click_start')]: {
                bind: 'analytics-app-on-click-start',
                analytics: pageAnalytics.appOnClickStart
              },
              [getChannelName('service_not_available_footprint')]: {
                bind: 'service-not-available-footprint',
                analytics: pageAnalytics._getAdvancedFootprintError('refactorN2.service.unavailable', 'error servicio no disponible')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-panel-button',
        familyPath: '@bbva-web-components/bbva-panel-button',
        tagSpherica: 'bbva-button-default-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          show: true,
          variant: 'sticky',
          buttonText: 'open-digital-account-landing-cta',
          cellsConnections: {
            out: {
              [getChannelName('navigation_to_multistep')]: {
                bind: 'panel-button-item-click',
                link: {
                  cleanUntil: 'openDigitalAccountMultistep',
                  page: 'openDigitalAccountMultistep'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          ambient: 'primary-alt',
          text: 'open-digital-account-landing-cta-spherica',
          buttonText: 'open-digital-account-landing-cta-spherica',
          iconLeftPrimary: 'coronita:arrow-right-12',
          accessibilityTextIconLeftPrimary: 'bbva-panel-button-icon-left-primary',
          fullwidth: true,
          className: `u-max-width--2 u-margin--grid u-margin-top--1 u-margin-bottom--${isNativeIos ? '2' : '0-5'}`,
          cellsConnections: {
            out: {
              open_digital_account_navigation_to_multistep: {
                bind: 'click',
                link: {
                  cleanUntil: 'openDigitalAccountMultistep',
                  page: 'openDigitalAccountMultistep'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-dataprovider-granting-tickets',
        familyPath: '@glomo-web-components/bbva-dataprovider-granting-tickets',
        render: 'litElement',
        properties: {
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          host: hostGrantingTicket,
          country: getCountry(),
          userId: CONFIG.globalServices.consumerIdAnonymous,
          consumerId: CONFIG.globalServices.consumerIdAnonymous,
          native: isNative,
          cellsConnections: {
            in: {
              [getChannelName('request_granting_tickets')]: {
                bind: 'postGrantingTickets'
              }
            },
            out: {
              [getChannelName('login_anonymous_request_success')]: {
                bind: 'login-anonymous-request-success'
              },
              [getChannelName('login_anonymous_request_error')]: {
                bind: 'login-anonymous-request-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-dataprovider-products',
        familyPath: '@glomo-web-components/bbva-dataprovider-products',
        render: 'litElement',
        properties: {
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          host,
          native: isNative,
          cellsConnections: {
            in: {
              [getChannelName('get_product_limits')]: {
                bind: 'getProductLimits'
              }
            },
            out: {
              [getChannelName('get_product_limits_success')]: {
                bind: 'get-product-limits-success'
              },
              [getChannelName('get_product_limits_error')]: {
                bind: 'get-product-limits-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'levelTwoAccountLimits',
          className: 'padding-container-wrapper',
          hideContentPaddingTop: true,
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          headerText: 'open-digital-account-modal-account-limits-header-title',
          buttonText: 'open-digital-account-modal-account-limits-cta',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              [getChannelName('account_limits_help_modal')]: {
                bind: 'open'
              },
              [getChannelName('account_limits_help_modal_cta')]: {
                bind: 'buttonText'
              }
            }
          }
        },
        propertiesSpherica: {
          headerType: '',
          illustration: '',
          closeLabel: 'open-digital-account-multistep-header-close',
          fixedFooter: false
        }
      },
      {
        id: 'accountModalPanelInfo',
        zone: 'levelTwoAccountLimits.slot-content',
        type: 'UI',
        tag: 'bbva-panel-info',
        tagSpherica: 'bbva-panel-info-spherica',
        familyPath: '@bbva-web-components/bbva-panel-info',
        familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
        render: 'litElement',
        properties: {
          className: 'below-paragraph',
          heading: 'open-digital-account-modal-account-limits-title',
          microillustration: 'accountlimitexceeded'
        },
        propertiesSpherica: {
          microillustration: 'accountError',
          alignImageLeft: false,
          alignText: 'left',
          typeTextSize: '2XL'
        }
      },
      {
        zone: 'levelTwoAccountLimits.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          className: 'paragraph',
          alignment: 'center',
          text: 'open-digital-account-modal-account-limits-paragraph-one'
        },
        propertiesSpherica: {
          tag: 'p',
          size: 'M',
          fontType: 'body',
          alignment: 'left',
          text: 'open-digital-account-modal-account-limits-paragraph-one'
        }
      },
      {
        zone: 'levelTwoAccountLimits.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          className: 'paragraph',
          alignment: 'center',
          cellsConnections: {
            in: {
              [getChannelName('account_limits_help_modal_dynamic_data')]: {
                bind: 'text'
              }
            }
          }
        },
        propertiesSpherica: {
          tag: 'p',
          size: 'M',
          fontType: 'body',
          alignment: 'left'
        }
      },
      {
        zone: 'levelTwoAccountLimits.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          className: 'paragraph',
          alignment: 'center',
          text: 'open-digital-account-modal-account-limits-paragraph-three'
        },
        propertiesSpherica: {
          tag: 'p',
          size: 'M',
          fontType: 'body',
          alignment: 'left',
          text: 'open-digital-account-modal-account-limits-paragraph-three'
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        container: true,
        properties: {
          id: 'privacyNoticeModal',
          iOSFixedHeader: isNativeIos,
          className: 'padding-container-wrapper',
          hideContentPaddingTop: true,
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          headerText: 'open-digital-account-modal-notice-privacy-header-title',
          cellsConnections: {
            in: {
              open_digital_account_privacy_notice_modal: {
                bind: 'open'
              },
              open_digital_account_privacy_notice_modal_cta: {
                bind: 'buttonText'
              }
            }
          }
        },
        propertiesSpherica: {
          headerType: '',
          closeLabel: 'Cerrar',
          fixedFooter: false,
          fullHeight: false,
          titleIcon: 'spherica:info'
        }
      },
      ...(isSpherica ? [] : modalCoronitaContent),
      {
        zone: 'privacyNoticeModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          text: 'open-digital-account-modal-notice-privacy-paragraph-one'
        },
        propertiesSpherica: {
          tag: 'p',
          size: 'M',
          fontType: 'body',
          alignment: 'center',
          text: 'open-digital-account-modal-notice-privacy-paragraph-one'
        }
      },
      {
        zone: 'privacyNoticeModal.slot-content',
        type: 'UI',
        tag: 'bbva-text',
        tagSpherica: 'bbva-type-text',
        familyPath: '@bbva-web-components/bbva-text',
        familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          text: 'open-digital-account-modal-notice-privacy-paragraph-two'
        },
        propertiesSpherica: {
          tag: 'p',
          size: 'M',
          fontType: 'body',
          alignment: 'center',
          text: 'open-digital-account-modal-notice-privacy-paragraph-two'
        }
      },
      glomoAlertManager(CONFIG)
    ]
  };
  if (isNative) {
    base.components.push(mobileActionLauncher());
  }
  return sphericaPageUtils.spherize(base);
};
