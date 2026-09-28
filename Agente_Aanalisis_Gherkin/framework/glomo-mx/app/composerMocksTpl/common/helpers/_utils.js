/* eslint-disable no-shadow, no-unused-vars */
/* global Symbol */
'use strict';

const getCountry = () => ('mx');

const headerHeight = 59;
const headerHeightMinimum = 0;
const footerHeight = 100;
const footerHeightInApp = 176;
const digitalNumberInFive = 5;

const doubleFooterHeight = 200;

const _publicPages = [
  'aboutInfo',
  'aboutPage',
  'cardlessWithdrawalHistoric',
  'cardWithoutData',
  'deviceAccess',
  'deviceAccessPage',
  'deviceAccessVerification',
  'deviceAccessCall',
  'deviceAccessSuccess',
  'digitalActivation',
  'digitalActivationCall',
  'digitalActivationMobileServices',
  'insuranceRemoteBanker',
  'emergencyReports',
  'help',
  'keyRecovery',
  'keyRecoveryCreate',
  'loading',
  'login',
  'securityTipsDetailPage',
  'stOutBand',
  'stSecurityCode',
  'sustainability',
  'welcome'
];

const isPublicPage = pagename => _publicPages.includes(pagename);

/* Inner configuration among menu items */
const _getContactNumber = config => ({
  mx: '+525552262663',
  uy: '+525552262685',
  pe: '+51015950000',
  global: '+34902224466'
}[getCountry(config)] || '0');

const call2BBVA = config => ({
  label: 'glomo-menu-contact',
  icon: 'coronita:telephone',
  link: 'tel:' + _getContactNumber(config),
  action: 'show-version'
});

const _get = key => prop => base => value =>
  base[key].find(c => c[prop] === value);

const _del = key => prop => base => value =>
  base[key].splice(base[key].findIndex(c => c[prop] === value), 1);

const get = _get('components')('tag');
const del = _del('components')('tag');

const connectionsIn = base => tag => get(base)(tag).properties.cellsConnections.in;
const connectionsOut = base => tag => get(base)(tag).properties.cellsConnections.out;
const connectionsInSpherica = base => tag => get(base)(tag).propertiesSpherica.cellsConnections.in;
const connectionsOutSpherica = base => tag => get(base)(tag).propertiesSpherica.cellsConnections.out;
const connectionsParams = base => tag => get(base)(tag).properties.cellsConnections.params;
const setProperty = base => tag => get(base)(tag).properties;
const setTemplateProperty = (base) => base.template.properties;
const setPropertiesSpherica = base => tag => get(base)(tag).propertiesSpherica;
const addProperty = base => tag => get(base)(tag);

/* commons values among jsons */
const getLocalCurrency = () => ('MXN');

/* commons values among jsons */
const getLanguage = () => ('es-MX');

/* commons values among jsons */
const getCurrencyCode = () => ('$');

/* Visible chars on masked strings*/
const getVisibleChars = config => ({
  mx: product => ({
    account: '4',
    card: '4',
    codi: '4',
    reward: '4',
    filteredPoints: '5',
    founds: '5'
  }[product] || '4')
}[getCountry()]);

/* Format Dates */
const getAlternativeFormatDate = () => ('DD MMMM YYYY, HH:mm [h]');
const getAlternativeFormatDateWithShortMonth = () => ('DD MMM YYYY, h:mm[h]');
const getAlternativeFormatDateWithoutTime = () => ('DD MMM YYYY');
const getAlternativeFormatDateWithoutSpaceBetweenHourSymbol = () => ('DD MMMM YYYY, hh:mm[h]');
const getLongFormatDate = () => ('DD MMMM YYYY, HH:mm:ss [h]');
const getMediumFormatDate = () => ('DD MMMM YYYY, HH:MM [h]');
const getFormatDate = () => ('DD MMMM, YYYY HH:mm[h]');
const getFormatDateCCPR = () => ('DD MMMM YYYY, HH:mm');
const getShortFormatDate = () => ('DD MMMM YYYY');
const getUltraShortFormatDate = () => ('DD MMMM');
const getShortInvestedDate = () => ('YYYY-MM-DD');
const getShortDate = () => ('DD/MM/YYYY');
const getDate = () => ('D MMMM YYYY, HH:mm a');
/* Transaction list format dates*/
const getTransactionCurrentYearDateFormat = () => ('DD [de] MMMM');
const getRewardsFormatDay = () => ('D MMM YYYY');

/* Greetings Hours Configuration */
const getGreetingConfiguration = () => ({
  'hourGreetingMorning': 5,
  'hourGreetingNoon': 12,
  'hourGreetingNight': 19
});

const help = {
  label: 'glomo-menu-help',
  icon: 'coronita:telephone',
  link: '#!/help/',
  action: 'navigation-to-help',
  status: {
    showLogged: false,
    showNoLogged: true
  }
};

const securitySettings = {
  label: 'glomo-menu-securitySettings',
  icon: 'coronita:lock',
  link: '#!/security-menu-page/',
  action: 'navigation-to-security-settings',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const cashZonePaymentsMpos = {
  label: 'glomo-menu-cash-zone',
  icon: 'coronita:receive-money-dollar',
  link: '#!/cash-zone-payments-mpos/',
  action: 'navigation-to-cash-zone',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};
const tokenMovil = {
  label: 'glomo-token-movil-sidebar',
  icon: 'coronita:security-token',
  link: '#!/soft-token/out-band',
  action: 'navigation-to-token-movil',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const about = {
  label: 'glomo-about-sidebar',
  icon: 'coronita:info',
  link: '#!/aboutPage/',
  action: 'navigation-to-about',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const dynamicsAndRewards = {
  label: 'glomo-about-member-get-member',
  icon: 'coronita:rewards',
  link: '#!/dynamics-and-rewards/',
  action: 'navigation-to-dynamics-and-rewards',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const demoFeedback = {
  label: 'Demo Feedback',
  icon: 'coronita:feedback',
  link: '#!/demoFeedback/',
  action: 'navigation-to-demoFeedback',
  status: {
    showLogged: true,
    showNoLogged: false
  }
};

const atms = {
  label: 'glomo-atention-points-title',
  icon: 'coronita:place',
  link: '#!/atm-locator/',
  action: 'global-navigation-to-atms',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const clarificationsCare = {
  label: 'Aclaraciones',
  icon: 'coronita:balance',
  link: '#!/clarifications-list-care/',
  action: 'navigation-to-clarifications',
  status: {
    showLogged: true,
    showNoLogged: false
  }
};

const settings = {
  label: 'glomo-menu-settings',
  icon: 'coronita:settings',
  link: '#!/codiSettings/',
  action: 'navigation-to-settings',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const sustainability = {
  label: 'glomo-menu-sustainability',
  icon: 'coronita:bulb',
  link: '#!/sustainability-section/',
  action: 'navigation-to-sustainability',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const cardlessWithdrawalHistoric = {
  label: 'glomo-cardless-withdrawal-historic',
  icon: 'coronita:historic',
  link: '#!/cardless-withdrawal/historic',
  action: 'navigation-to-cardless-withdrawal-historic',
  status: {
    showLogged: true,
    showNoLogged: false
  }
};

const reward = {
  label: 'glomo-rewards-landing-header-title',
  icon: 'coronita:promotion',
  link: '#!/reward/',
  action: 'navigation-to-reward',
  status: {
    showLogged: true,
    showNoLogged: false
  }
};

const emergencyReports = {
  label: 'glomo-menu-emergency-reports',
  icon: 'coronita:emergency',
  link: '#!/emergencyReports/',
  action: 'navigation-to-emergency-reports',
  status: {
    showLogged: true,
    showNoLogged: true
  }
};

const qrOperations = {
  label: 'glomo-menu-qr-operations',
  icon: 'coronita:qr',
  link: '#!/codi-qr-scanner/',
  action: 'navigation-to-codi',
  status: {
    showLogged: true,
    showNoLogged: true
  },
  linkParams: {
    source: 'sidebar'
  }
};

const capitalize = (product) => {
  return product.substr(0, 1).toUpperCase() + product.substring(1).toLowerCase();
};

const getLogo = () => ({
  src: 'images/logo-bbva.svg',
  width: 50
});

const getImageLogin = () => ('images/login/bg-login.jpg');

const getImageLoginCachedUser = country => ('');

const getLoginShowUserLoginName = country => ({
  ar: true
}[country] || false);

const getLoginAllowRegistration = country => ({
  ar: true,
  pe: true,
  mx: true
}[country] || false);

const getLoginShortUserName = country => ({
  ar: true
}[country] || false);

const getLoginViewClassName = country => ({
  ar: 'large-header'
}[country] || '');

/* Business units used on analytics */
const getBusinessUnit = config => ({
  mx: 'BBVA Mexico'
}[getCountry(config)]);

const getMenuSidebarSections = config => ({
  mx: [
    help,
    securitySettings,
    tokenMovil,
    demoFeedback,
    dynamicsAndRewards,
    atms,
    cashZonePaymentsMpos,
    clarificationsCare,
    about,
    settings,
    sustainability,
    cardlessWithdrawalHistoric,
    reward,
    qrOperations,
    emergencyReports
  ]
}[getCountry()] || [ { label: 'no country found', icon: 'coronita:close', show: true } ]);
const getMenuSidebarSectionsMinior = config => ({
  mx: [
    settings,
    securitySettings,
    tokenMovil,
    sustainability,
    cardlessWithdrawalHistoric,
    atms,
    about
  ]
}[getCountry()] || [ { label: 'no country found', icon: 'coronita:close', show: true } ]);

/**
  * Create a snake case name from camel case name
  * ex: newOperativePage -> new_operative_page
  */
const createPrefixFromPageName = pageName => pageName.replace(/([A-Z])/g, '_$1').toLowerCase();

const APP_SIDEBAR = config => ({
  zone: 'app__complementary',
  type: 'UI',
  tag: 'cells-organism-menu-sidebar',
  properties: {
    defaultAvatarUrl: 'images/login/user-avatar-default.svg',
    availableSections: getMenuSidebarSections(config),
    preventLogout: true,
    hideAvatar: true,
    iconLogoutId: 'coronita:getout',
    displayLogoutIcon: 'reverse',
    cellsConnections: {
      in: {
        global_login_success: {
          bind: 'user'
        },
        user_cached: {
          bind: 'userCached'
        },
        user_is_logged: {
          bind: 'userLogged'
        },
        modal_change_user_accept: {
          bind: 'reset'
        },
        global_data_error_max_retries_accept: {
          bind: 'reset'
        },
        tdde_sidebar_configuration: {
          bind: 'availableSections'
        },
        glomo_minior_account_sidebar_configuration: {
          bind: 'availableSections'
        }
      },
      out: {
        global_launch_logout_clicked: {
          bind: 'do-logout'
        },
        global_launch_link_clicked: {
          bind: 'do-link'
        },
        navigation_login_to_dashboard: {
          bind: 'nav-to-dashboard',
          link: {
            page: 'dashboard'
          }
        },
        navigation_to_profile: {
          bind: 'link-profile',
          link: {
            page: 'profile'
          }
        },
        navigation_to_clarifications: {
          bind: 'navigation-to-clarifications',
          link: {
            page: 'clarificationsListCare'
          }
        },
        navigation_to_cardless_withdrawal_historic: {
          bind: 'navigation-to-cardless-withdrawal-historic',
          link: {
            page: 'cardlessWithdrawalHistoric'
          }
        },
        navigation_no_client_business_debit_card_info: {
          bind: 'navigation-no-client-business-debit-card-info',
          link: {
            page: 'noClientBusinessDebitCardInfo'
          }
        },
        navigation_to_help: {
          bind: 'navigation-to-help',
          link: {
            page: 'help'
          }
        },
        navigation_to_security_settings: {
          bind: 'navigation-to-security-settings',
          link: {
            page: 'securityMenu'
          }
        },
        navigation_to_token_movil: {
          bind: 'navigation-to-token-movil',
          link: {
            page: 'stOutBand'
          }
        },
        global_navigation_to_atms_locator: {
          bind: 'global-navigation-to-atms',
          link: {
            page: 'atmLocator'
          }
        },
        navigation_to_about: {
          bind: 'navigation-to-about',
          link: {
            page: 'aboutPage',
            params: {
              continue: 'continue'
            }
          }
        },
        navigation_to_cash_zone: {
          bind: 'navigation-to-cash-zone',
          link: {
            page: 'cashZonePaymentsMposDash'
          }
        },
        navigation_to_demoFeedback: {
          bind: 'navigation-to-demoFeedback',
          link: {
            page: 'demoFeedback'
          }
        },
        navigation_to_settings: {
          bind: 'navigation-to-settings',
          link: {
            page: 'settings'
          }
        },
        navigation_to_dynamics_and_rewards: {
          bind: 'navigation-to-dynamics-and-rewards',
          link: {
            page: 'dynamicsAndRewards'
          }
        },
        navigation_to_sustainability: {
          bind: 'navigation-to-sustainability',
          link: {
            page: 'sustainabilitySection'
          }
        },
        navigation_to_reward: {
          bind: 'navigation-to-reward',
          link: {
            page: 'reward'
          }
        },
        navigation_to_emergency_reports: {
          bind: 'navigation-to-emergency-reports',
          link: {
            page: 'emergencyReports'
          }
        },
        navigation_to_codi: {
          bind: 'navigation-to-codi',
          link: {
            page: 'codiQrScanner'
          }
        }
      },
      params: {
        userLogged: 'global_user_logged'
      }
    }
  }
});

const getFooterMenuOptions = () => ({
  items: [
    {
      id: 'dashboard',
      ariaLabel: 'glomo-footer-aria-label-dashboard',
      icon: 'coronita:home',
      link: '#/dashboard',
      label: 'glomo-footer-label-dashboard'
    },
    {
      id: 'checkupOrPfmDashboard',
      ariaLabel: 'glomo-footer-aria-label-pfm',
      icon: 'coronita:financial-health',
      link: '#/pfm/dashboard',
      label: 'glomo-footer-label-pfm'
    },
    {
      id: 'contractProductSection',
      ariaLabel: 'glomo-footer-aria-label-contract-product-section',
      icon: 'coronita:add',
      link: '#/contract-product-section',
      label: 'glomo-footer-label-contract-product-section'
    },
    {
      id: 'notificationsCenter',
      icon: 'coronita:email',
      label: 'pfm-notifications-title',
      notificationIndex: 1,
      link: '#/notifications-center',
      redDotClass: ''
    },
    {
      id: 'assistanceSection',
      icon: 'coronita:bbva-contigo',
      link: '#/assistance-section',
      label: 'glomo-menu-help'
    }
  ].map((item, index, array) => ({
    ...item,
    description: `Botón ${index + 1} de ${array.length}`
  })),
  className: 'with-icon-labels'
});

const getFooterMenuOptionsMinior = {
  items: [
    {
      id: 'dashboard',
      ariaLabel: 'glomo-footer-aria-label-dashboard',
      icon: 'coronita:home',
      link: '#/dashboard',
      label: 'glomo-footer-label-dashboard'
    },
    {
      id: 'checkupOrPfmDashboard',
      ariaLabel: 'glomo-footer-aria-label-pfm',
      icon: 'coronita:financial-health',
      link: '#/pfm/dashboard',
      label: 'glomo-footer-label-pfm'
    },
    {
      id: 'notificationsCenter',
      icon: 'coronita:email',
      label: 'pfm-notifications-title',
      notificationIndex: 1,
      link: '#/notifications-center',
      redDotClass: ''
    }
  ],
  className: 'with-icon-labels'
};

const footerManager = (ANALYTICS) => {
  const menuOptions = getFooterMenuOptions();
  const cellsConnections = {
    in: {
      __bridge_app: {
        bind: 'setCurrentPage'
      },
      cells_navigation_bar_selected_item_dashboard: {
        bind: 'setFooterConfigOnNavigation'
      },
      set_pending_events_dashboard: {
        bind: 'setPendingEvents'
      },
      dashboard_init_page: {
        bind: 'dispatchPendingEvents'
      },
      contract_product_section_init_page: {
        bind: 'dispatchPendingEvents'
      }
    },
    out: {
      set_contract_product_section_header_left_icon: {
        bind: 'set-contractProductSection-header-left-icon'
      },
      set_contract_product_section_right_left_icon: {
        bind: 'set-contractProductSection-header-right-icon'
      },
      set_pending_events_contract_product_section: {
        bind: 'pending-events-to-dispatch-on-contractProductSection'
      },
      set_pending_events_dashboard: {
        bind: 'pending-events-to-dispatch-on-dashboard'
      }
    }
  };

  menuOptions.items.forEach((item) => {
    cellsConnections.out[`cells_navigation_bar_show_tooltip_${createPrefixFromPageName(item.id)}`] = {
      bind: `cells-navigation-bar-show-tooltip-${item.id}`
    };
  });

  return {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-footer-manager',
    properties: {
      pages: menuOptions.items,
      cellsConnections: cellsConnections
    }
  };
};

const appFooter = (CONFIG, page) => {
  const menuOptions = getFooterMenuOptions();
  const pageName = (page === 'checkupPage' || page === 'pfmDashboard') ? 'checkupOrPfmDashboard' : page;
  const index = (menuOptions.items || []).findIndex(item => item.id === pageName);
  const tag = `cells-navigation-bar${(CONFIG.isSphericaMode ? '-spherica' : '')}`;
  const iconSize = CONFIG.isSphericaMode ? '24' : '22';

  if (index >= 0) {
    const className = [menuOptions.className, menuOptions.items[index].className].filter(a => a).join(' ');
    let footerConfig = {
      zone: 'app__footer',
      tag,
      properties: {
        selected: index,
        enableTooltipAnimation: false,
        disableSelected: true,
        className,
        showPoint: true,
        iconSize,
        showTooltip: false,
        items: menuOptions.items,
        showUnreadNotificationsNumber: true,
        cellsConnections: {
          in: {
            dashboard_footer_items_changed: {
              bind: 'items'
            },
            dashboard_set_footer: {
              bind: 'setProperties'
            },
            notificationscenter_totals_number_unread_informative_warning: {
              bind: 'unreadNotificationsTotals'
            },
            notificationscenter_open_detail: {
              bind: 'isModalActive'
            }
          },
          out: {
            navigation_bar_to_contract_dashboard: {
              bind: 'selected-item-dashboard',
              link: {
                page: 'dashboard'
              }
            },
            navigation_bar_to_contract_product_section: {
              bind: 'selected-item-contract-product-section',
              link: {
                page: 'contractProductSection'
              }
            },
            navigation_no_client_business_debit_card_info: {
              bind: 'selected-item-no-client-business-debit-card-info',
              link: {
                page: 'noClientBusinessDebitCardInfo'
              }
            },
            navigation_bar_to_pfm_notifications: {
              bind: 'selected-item-pfm-notifications'
            },
            navigation_bar_to_pfm_help: {
              bind: 'selected-item-pfm-help',
              link: {
                page: 'pfmHelp'
              }
            },
            navigation_bar_to_checkup_or_pfm_dashboard: {
              bind: 'selected-item-checkup-or-pfm-dashboard'
            },
            navigation_bar_to_checkup: {
              bind: 'selected-item-pfm-dashboard-check-up',
              link: {
                page: 'pfmDashboardCheckUp'
              }
            },
            navigation_bar_to_notifications_list: {
              bind: 'selected-item-notifications-center',
              link: {
                page: 'notificationsCenter'
              }
            },
            navigation_bar_to_assistance_section: {
              bind: 'selected-item-assistance-section',
              link: {
                page: 'assistanceSection'
              }
            },
            navigation_bar_to_stand_in_mode: {
              bind: 'selected-item'
            },
            navigate_stand_in_bar_to_checkup_or_pfm_dashboard: {
              bind: 'selected-item-checkup-or-pfm-dashboard-footer-modal'
            },
            navigate_stand_in_bar_to_contract_product_section: {
              bind: 'selected-item-contract-product-section-footer-modal'
            },
            navigate_stand_in_bar_to_assistance_section: {
              bind: 'selected-item-assistance-section-footer-modal'
            },
            navigate_stand_in_bar_to_pfm_notifiations: {
              bind: 'selected-item-notifications-list-footer-modal'
            }
          }
        }
      },
      propertiesSpherica: {
        heightByContainer: true
      }
    };

    return footerConfig;
  }
};

const SPINNER = config => ({
  zone: 'app__overlay',
  tag: 'cells-spinner-veil',
  type: 'UI',
  properties: {
    withMask: true,
    iOSFixedHeader: true,
    cellsConnections: {
      in: {
        open_control_veil: {
          bind: 'show'
        },
        close_control_veil: {
          bind: 'hide'
        },
        close_control_veil_otp: {
          bind: 'hide'
        },
        global_open_control_veil: {
          bind: 'openVeil'
        },
        global_close_control_veil: {
          bind: 'closeVeil'
        }
      },
      out: {}
    }
  }
});

const CONFIRMATION_EXIT_MODAL = config => ({
  zone: 'app__overlay',
  tag: 'cells-modal-alert',
  properties: {
    className: 'modal',
    type: 'error',
    icon: 'coronita:alert',
    secondButtonClasses: 'link',
    content: 'oc-utils-modal-content',
    firstButtonLabel: 'oc-utils-modal-btn1',
    secondButtonLabel: 'oc-utils-modal-btn2',
    cellsConnections: {
      in: {
        OC_OPEN_MODAL: {
          bind: 'open'
        },
        BACKSTEP_CHANNEL: {
          bind: 'close'
        },
        OC_CANCEL_ACTION_MODAL: {
          bind: 'close'
        },
        NPB_CANCEL_OUTSIDE_CLICK: {
          bind: 'noCancelOnOutsideClick'
        },
        NPB_SECOND_BUTTON_LABEL: {
          bind: 'secondButtonLabel'
        },
        NPB_FIRST_BUTTON_LABEL: {
          bind: 'firstButtonLabel'
        }
      },
      out: {
        BACKSTEP_CHANNEL: {
          bind: 'first-button-click',
          'backStep': true
        },
        OC_CANCEL_ACTION_MODAL: {
          bind: 'second-button-click'
        }
      }
    }
  }
});

const getLoginAdditionalUserAttributes = ['documentType', 'loginName', 'gender'];

const detailDownloadParams = {
  mimeType: 'application/pdf',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  headerColor: 'FF084484',
  tintColor: 'FFFFFFFF',
  canShare: true,
  titleColor: 'FFFFFFFF',
  blackStatusBar: false
};

/* Country names in lowercase used on analytics */
const getCountryLowercase = config => ({
  mx: 'mexico'
}[getCountry(config)]);


const addOutStorageChannels = (components, keys) => {
  const storageMethods = ['set', 'get', 'remove'];
  const storageComponent = components.find(component => component.tag === 'cells-mobile-local-storage');

  if (storageComponent) {
    storageMethods.forEach((method) => {
      keys.forEach((key) => {
        ['success', 'error'].forEach(result => {
          storageComponent.properties.cellsConnections.out[`global_storage_${method}_${key}_${result}`] = {
            bind: `local-storage-${method}-${key}-${result}`
          };
        });
      });
    });
  }
};

const appFooterDeviceController = (CONFIG, ANALYTICS) => {
  let footerConfig = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-device-version-controller',
    properties: {
      native: !!CONFIG.native,
      activePfmBrowser: true,
      forceActivePfmToogle: false,
      cellsConnections: {
        in: {
          dashboard_init_page_first_time: {
            bind: 'getPfmActive'
          },
          global_set_app_settings: {
            bind: 'dataAppSettings'
          },
          navigation_bar_to_checkup_or_pfm_dashboard: {
            bind: 'fireNavigationOptions'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          global_dashboard_cards: {
            bind: 'cards'
          }
        },
        out: {
          dashboard_navigate_to_checkup_page: {
            bind: 'navigation-to-secondary-option',
            link: {
              featureFlag: {
                key: 'glomo.dashboard.footer.checkup.link',
                defaultValue: false
              },
              page: 'pfmDashboardCheckUp'
            }
          },
          dashboard_navigate_to_pfm_dashboard: {
            bind: 'navigation-to-pfm-dashboard',
            analytics: ANALYTICS.DASHBOARD_FOOTER_INTERNAL_EVENT,
            link: {
              featureFlag: {
                key: 'glomo.dashboard.pfm.initialize',
                defaultValue: true
              },
              page: 'pfmDashboardDetail'
            }
          },
          global_version_pfm_value: {
            bind: 'glomo-device-version-pfm-value'
          },
          global_version_pfm_active: {
            bind: 'glomo-device-version-active-pfm'
          },
          global_version_app: {
            bind: 'get-app-version-success'
          }
        }
      }
    }
  };

  return footerConfig;
};

const glomoOpenDocument = (CONFIG, _global = false) => {
  if (CONFIG.nativeShell) {
    const cellsConnections = { in: {}, out: {} };

    ['name', 'identifier', 'url', 'path', 'base64'].forEach((type) => {
      const channel = `global_open_document_${type}`;
      const eventName = `open-document-open-by-${type}`;
      const methodName = `openBy${capitalize(type)}`;

      cellsConnections.in[`${channel}`] = {
        bind: methodName
      };
      cellsConnections.out[`${channel}_success`] = {
        bind: `${eventName}-success`
      };
      cellsConnections.out[`${channel}_error`] = {
        bind: `${eventName}-error`
      };
      cellsConnections.out.global_open_document_no_authentication_error = {
        bind: 'document-signature-no-authentication-error'
      };
    });

    return {
      zone: 'app__main',
      tag: _global ? 'cells-nativeconnector-open-document' : 'cells-nativeconnector-open-document-mx',
      familyPath: 'cells-nativeconnector-open-document',
      type: 'CC',
      properties: {
        cellsConnections
      }
    };
  }
};

const SPINNERMAIN = config => ({
  zone: 'app__main',
  tag: 'cells-spinner-veil',
  type: 'UI',
  properties: {
    withMask: true,
    iOSFixedHeader: true,
    className: 'cells-spinner-veil-fixed',
    cellsConnections: {
      in: {
        open_control_veil: {
          bind: 'show'
        },
        close_control_veil: {
          bind: 'hide'
        },
        close_control_veil_otp: {
          bind: 'hide'
        }
      },
      out: {}
    }
  }
});

const SPINNERSPHERICA = config => ({
  zone: 'app__main',
  tag: 'cells-spinner-veil-spherica',
  type: 'UI',
  propertiesSpherica: {
    withMask: true,
    iOSFixedHeader: true,
    className: 'cells-spinner-veil-fixed',
    cellsConnections: {
      in: {
        open_control_veil: {
          bind: 'show'
        },
        close_control_veil: {
          bind: 'hide'
        },
        close_control_veil_otp: {
          bind: 'hide'
        }
      }
    }
  }
});

const getCampaigns = () => {
  const { CAMPAIGNS } = require('./_constants');
  return Object.keys(CAMPAIGNS)
    .reduce((acc, offer) => Object.assign(acc, CAMPAIGNS[offer]), {});
};

const getCampaignAnalytics = () => {
  const { CAMPAIGNS_ANALYTICS } = require('../../analytics/_ocAccess')();
  return Object.keys(CAMPAIGNS_ANALYTICS)
    .reduce((acc, offer) => Object.assign(acc, CAMPAIGNS_ANALYTICS[offer]), {});
};

const getCampaignsCode = () => {
  const campaignAnalytics = getCampaignAnalytics();
  return Object.keys(campaignAnalytics).reduce(
    (acc, code) => Object.assign(acc, campaignAnalytics[code].productName), {});
};
const snakeCase = (operative) => operative.split(/(?=[A-Z])/).join('_').toLowerCase();
const getCampaignsChannels = (PAGENAME) => {
  const campaigns = getCampaigns();
  const channelName = (code) => `${snakeCase(PAGENAME)}_oc_banner_${code}_clicked`.replace(/-/g, '_').toLowerCase();
  const eventName = (code) => `cells-oc-banner-click-${code}`.replace(/_/g, '-').toLowerCase();
  let channelOut = {};

  Object.keys(campaigns).forEach((campaign) => {
    channelOut[channelName(campaigns[campaign].code)] = {
      bind: eventName(campaigns[campaign].code),
      link: campaigns[campaign].link
    };
  });

  return channelOut;
};
const toUnderscoreCase = (string) => string.replace(/(?:^|\.?)([A-Z])/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
const toDashCase = (string) => string.replace(/(?:^|\.?)([A-Z])/g, (x, y) => '-' + y.toLowerCase()).replace(/^_/, '');

/**
 * Manage Channel names and locale names from operative prefix
 * function returns an array with 2 functions [getChannelName, getLocaleName]
 */
const useNames = function(OPERATIVE_PREFIX) {
  const getChannelName = function(suffixName = '') {
    return `${OPERATIVE_PREFIX}_${suffixName}`;
  };
  const getLocaleName = function(suffixName = '') {
    return getChannelName(suffixName).replace(/_/g, '-');
  };

  return [getChannelName, getLocaleName];
};

const getOperations = COUNTRY => ({
  pe: [
    {
      label: 'cells-successful-response-share-operation',
      id: 'shareOperation',
      icon: 'coronita:share',
      disabled: true
    }
  ]
}[COUNTRY]);


const getFeedbackOperation = (CONFIG) => ({

  // mobile_top_up
  mobile_top_up_abandon: {
    id: 'MOBILE_TOP_UP_ABANDON',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  mobile_top_up_success: {
    id: 'MOBILE_TOP_UP_SUCCESS_NPS',
    exitUrl: 'topUp',
    autoNavigate: true,
    iframeUrl: 'https://www.opinator.com/opi/GM_TEST_MX_MOBILE_TOP_UP_SUCCESS_NPS/'
  },

  // service_payment
  service_payment_abandon: {
    id: 'SERVICE_PAYMENT_ABANDON',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  service_payment_success: {
    id: 'SERVICE_PAYMENT_SUCCESS_NPS',
    exitUrl: 'back',
    autoNavigate: true
  },

  // transfer
  transfer_abandon: {
    id: 'TRANSFER_ABANDON',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  'transfers-success-exit-to-entry-point-event': {
    id: 'TRANSFER_SUCCESS',
    exitUrl: 'transfersToDashboard',
    autoNavigate: true
  },

  // cardless_withdrawal
  cardless_withdrawal_success: {
    id: 'CARDLESS_WITHDRAWAL_SUCCESS_NPS',
    exitUrl: 'to-previous-page',
    autoNavigate: true
  },

  // transaction_list
  transaction_list_success: {
    id: 'TRANSACTION_LIST_SUCCESS_NPS',
    exitUrl: 'dashboard',
    autoNavigate: true
  },

  // physical_card
  turn_on_off_physical_card: {
    exitUrl: 'cardDetail',
    autoNavigate: true
  },

  // digital_card
  turn_on_off_digital_card: {
    exitUrl: 'cardDynamicCvv',
    autoNavigate: true
  },

  // international_transfer
  international_transfer_success: {
    id: 'INT_TRANSFER_SUCCESS',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  international_transfer_abandon_quotation: {
    id: 'INT_TRANSFER_ABANDON1',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  international_transfer_abandon_summary: {
    id: 'INT_TRANSFER_ABANDON2',
    exitUrl: 'dashboard',
    autoNavigate: true
  },

  // own_foreign_transfer
  own_foreign_transfer_success: {
    id: 'OWN_FOREIGN_TRANSFER_SUCCESS',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  own_foreign_transfer_abandon_quotation: {
    id: 'OWN_FOREIGN_TRANSFER_ABANDON1',
    exitUrl: 'dashboard',
    autoNavigate: true
  },
  own_foreign_transfer_abandon_summary: {
    id: 'OWN_FOREIGN_TRANSFER_ABANDON2',
    exitUrl: 'dashboard',
    autoNavigate: true
  },

  // opinator logout
  logout: {
    id: 'LOGOUT_MX_SUCCESS',
    exitUrl: 'logout'
  },

  // opinator support center chat
  support_center_chat_success: {
    id: 'BBVA_CHAT_ASESOR_SUCCESS',
    exitUrl: 'dashboard',
    autoNavigate: true
  },

  // billpayments abandon
  bill_payments_abandon: {
    id: 'GM_MX_PAGOSERVICIOS_ABANDON',
    exitUrl: 'to-previous-page',
    autoNavigate: true
  }
});

// give feature specific prefix
const PDF_MODAL = (config, prefix) => ({
  zone: 'app__transactional',
  tag: 'cells-modal-pdf-viewer',
  type: 'UI',
  properties: {
    className: (config.nativeIos || false) ? 'ios-top-padding__header' : '',
    viewerPath: config.pdfViewerPath,
    cellsConnections: {
      in: {
        [prefix + '_DOC_TITLE']: {
          bind: 'docTitle'
        },
        [prefix + '_DOC_CONTENT']: {
          bind: 'baseSrc'
        },
        [prefix + '_OPEN_PDF_MODAL']: {
          bind: 'open'
        }
      },
      out: {
        [prefix + '_PDF_MODAL_OPENED']: {
          bind: 'opened-changed'
        }
      }
    }
  }
});

const checksPhotosCompression = 'png';

const CHECK_UPGRADABLE_ACCOUNTS = false;
const PRODUCTS_CONFIG = {
  accounts: {
    productTypes: [
      {
        id: 'ACCOUNT',
        groupByCurrency: true
      }
    ],
    cached: true,
    upgradeable: CHECK_UPGRADABLE_ACCOUNTS
  },
  cards: {
    productType: {
      id: 'CARD',
      groupByCurrency: true
    },
    cached: true
  },
  insurances: {
    productType: {
      id: 'INSURANCE',
      groupByCurrency: true
    },
    cached: true
  }
};

function setAlertManagerConnections(alertManagerConnectionsConfigs, alertManagerComponentName, pageBase, pageName) {
  const { addChannel } = require('../../common/_channel-utils')(pageBase);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  alertManagerConnectionsConfigs.forEach(alertManagerConnectionsConfig => {
    if (alertManagerConnectionsConfig && alertManagerConnectionsConfig.id) {
      const { onAcceptConnectionsIn = null, onCancelConnectionsIn = null, id } = alertManagerConnectionsConfig;
      const alertManageChannelName = createPrefixFromPageName(id);
      const alertManagerCode = getLocaleName(alertManageChannelName).toUpperCase();
      if (onAcceptConnectionsIn) {
        addChannel(getChannelName(`${alertManageChannelName}_accept`),
          { [alertManagerComponentName]: `alert-${alertManagerCode}-accept` },
          onAcceptConnectionsIn);
      }
      if (onCancelConnectionsIn) {
        addChannel(getChannelName(`${alertManageChannelName}_cancel`),
          { [alertManagerComponentName]: `alert-${alertManagerCode}-cancel` },
          onCancelConnectionsIn);
      }
    }
  });
}

const truncatedFormatConfig = (additionalArgs = []) => ({
  formatName: 'truncated',
  targetFunctionName: 'truncateNumber',
  additionalArgs
});

const percentageFormatConfig = (additionalArgs = []) => ({
  formatName: 'percentage',
  targetFunctionName: 'formatToPercentage',
  bindContext: true,
  additionalArgs
});

const getFindPropertyExtractor = function({ outerPath, pathToPropertyToCompare, valueToCompare }) {
  return {
    targetFunctionName: 'findPropertyByPath',
    additionalArgs: [ { outerPath, pathToPropertyToCompare, valueToCompare } ],
    bindContext: true
  };
};

const getNestedKeyExtractor = function(path) {
  return {
    targetFunctionName: 'c',
    additionalArgs: [ path ]
  };
};

const getSimpleHandlingConfig = function(path, pathToValue, suffixName = 'value') {
  return {
    extraction: getNestedKeyExtractor(path),
    processing: {
      [suffixName]: {
        pathToValue: pathToValue
      }
    }
  };
};

const getRateHandlingConfig = function(rateTypeId, suffixName = 'value') {
  return {
    extraction: getFindPropertyExtractor({
      outerPath: 'rates',
      pathToPropertyToCompare: 'rateType.id',
      valueToCompare: rateTypeId
    }),
    processing: {
      [suffixName]: {
        pathToValue: 'unit.percentage',
        formats: [
          percentageFormatConfig(),
          truncatedFormatConfig()
        ]
      }
    }
  };
};

const amountFormatConfig = (localCurrency, language, additionalArgProps = {}) => ({
  formatName: 'amount',
  targetFunctionName: 'formatToAmount',
  additionalArgs: [ {
    currency: localCurrency,
    localCurrency,
    language,
    decimal: true,
    separator: true,
    symbol: true,
    ...additionalArgProps
  } ],
  bindContext: true
});

function createPrefixForLocaleName(targetString) {
  return targetString.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function getLocaleNameForward(pageName) {
  const operativePrefix = createPrefixForLocaleName(pageName);
  return function(suffixName) {
    return `${operativePrefix}-${suffixName}`;
  };
}

function getAlertManagerTemplates(alertManagerTemplatesConfig, pageConfig, pageName) {
  const getLocaleName = getLocaleNameForward(pageName);
  return alertManagerTemplatesConfig
    .reduce((alertManagerTemplates, alertManagerTemplateConfig) => {
      if (alertManagerTemplateConfig && alertManagerTemplateConfig.id) {
        const { id, template = {} } = alertManagerTemplateConfig;
        const alertManageChannelName = createPrefixForLocaleName(id);
        const alertManagerCode = getLocaleName(alertManageChannelName).toUpperCase();
        alertManagerTemplates[id] = { code: alertManagerCode, ...template };
      }
      return alertManagerTemplates;
    }, {});
}

const discreetModePages = () => {
  return ['dashboard', 'account', 'card', 'cardDetail', 'deposit', 'equity', 'fund', 'insurance', 'loan', 'reward'];
};

const addFeatureFlag = (flagName = '', linkObj, flagStatus = true) => ({
  ...linkObj,
  featureFlag: {
    key: `glomo.${flagName}`,
    defaultValue: flagStatus
  }
});

const addOutChannelToGlomoAlertManager = (BASE, CONFIG, errorCode) => {
  const glomoAlertManager = require('../_cross-components').glomoAlertManager(CONFIG, 'es-MX', 'MXN');
  const existsGlomoAlertManager = BASE.components.find(item => item.tag === glomoAlertManager.tag);
  if (!existsGlomoAlertManager) {
    BASE.components.push(glomoAlertManager);
  }
  const channelPrefix = 'global_alert_' + errorCode.replace(/-/g, '_');
  connectionsOut(BASE)(glomoAlertManager.tag)[`${channelPrefix}_accept`] = {
    bind: `alert-${errorCode}-accept`
  };
  connectionsOut(BASE)(glomoAlertManager.tag)[`${channelPrefix}_cancel`] = {
    bind: `alert-${errorCode}-cancel`
  };
};

/**
 * Converts camel-case to kebab-case
 */
const kebabCase = (str) => str.split(/(?=[A-Z])/).join('-').toLowerCase();

/**
 * Converts kebab-case to camelCase
 */
const kebabToCamel = str =>
  str.toLowerCase().replace(/(-[a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
  );

const pluginEtherToken = (CONFIG, pageName = '') => {
  if (CONFIG.nativeShell) {
    const cellsConnections = { in: {}, out: {} };
    const operations = [
      'customPluginCall',
      'createClient',
      'getTokensIds',
      'genOtp',
      'generateotp',
      'genNextOtp',
      'genOtpChallenge',
      'genOtpNextChallenge',
      'generateActivationForm',
      'deletetoken',
      'deleteAllTokens',
      'activateToken'
    ];
    operations.forEach((type) => {
      const channel = `global_ether_token_${pageName ? `${toUnderscoreCase(pageName)}_` : ''}${toUnderscoreCase(type)}`;
      const eventName = {
        'getTokensIds': 'gettokenids',
        'deleteAllTokens': 'delete-tokens'
      } [type] || type.toLowerCase();
      cellsConnections.in[`${channel}`] = {
        bind: type
      };
      cellsConnections.out[`${channel}_success`] = {
        bind: `ether-token-${eventName}-success`
      };
      cellsConnections.out[`${channel}_error`] = {
        bind: `ether-token-${eventName}-error`
      };
      cellsConnections.out.notify_delete_token_enrolled = {
        bind: 'ether-token-delete-tokens-success',
        'forward-to-native': true
      };
    });
    return {
      zone: 'app__main',
      type: 'CC',
      tag: 'bbva-nativeconnector-ether-token',
      familyPath: '@glomo-web-components/bbva-nativeconnector-ether-token',
      render: 'litElement',
      properties: {
        cellsConnections
      }
    };
  }
};

const pluginDatePicker = (CONFIG) => {
  if (CONFIG.nativeShell) {
    const cellsConnections = {
      in: {
        global_nativeconnector_datepicker_launch: {
          bind: 'launchDatePicker'
        }
      }, out: {
        global_nativeconnector_date_picker_launch_success: {
          bind: 'launch-date-picker-success'
        },
        global_nativeconnector_date_picker_launch_error: {
          bind: 'launch-date-picker-error'
        }
      }
    };
    return {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-nativeconnector-datepicker',
      familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
      render: 'litElement',
      properties: {
        cellsConnections
      }
    };
  }
};
const pluginSoftoken = (CONFIG) => {
  if (CONFIG.nativeShell) {
    const cellsConnections = { in: {}, out: {} };
    const operations = ['getToken', 'getTokenList', 'deleteToken', 'setDescription', 'genOtp', 'genNextOtp', 'registerToken'];
    operations.forEach((type) => {
      const changeType = type === 'genOtp' || type === 'genNextOtp' ? `generate${type.slice(3)}` : type;
      const channel = `global_softoken_${toUnderscoreCase(changeType)}`;
      const eventName = `${toDashCase(changeType)}`;
      cellsConnections.in[`${channel}`] = {
        bind: type
      };
      cellsConnections.out[`${channel}_success`] = {
        bind: `${eventName}-success`
      };
      cellsConnections.out[`${channel}_error`] = {
        bind: `${eventName}-error`
      };
    });
    return {
      zone: 'app__main',
      type: 'CC',
      tag: 'bbva-nativeconnector-softoken',
      familyPath: '@glomo-web-components/bbva-nativeconnector-softoken',
      render: 'litElement',
      properties: {
        cellsConnections
      }
    };
  }
};

const pluginSecureSharing = (CONFIG) => {
  if (CONFIG.nativeShell) {
    const cellsConnections = { in: {}, out: {} };
    const operations = ['getValue', 'contains'];
    operations.forEach((type) => {
      const changeType = type === 'generateNextOtp' ? `generate${type.slice(-3)}` : type;
      const channel = `global_secure_sharing_${toUnderscoreCase(type)}`;
      const eventName = `${toDashCase(changeType)}`;
      cellsConnections.in[`${channel}`] = {
        bind: changeType
      };
      cellsConnections.out[`${channel}_success`] = {
        bind: `${eventName}-success`
      };
      cellsConnections.out[`${channel}_error`] = {
        bind: `${eventName}-error`
      };
    });

    cellsConnections.in.global_secure_sharing_remove_key = {
      bind: 'removeKey'
    };
    cellsConnections.out.global_secure_sharing_remove_key_success = {
      bind: 'secure-sharing-removekey-success'
    };
    cellsConnections.out.global_secure_sharing_remove_key_error = {
      bind: 'secure-sharing-removekey-error'
    };
    return {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-nativeconnector-secure-sharing',
      familyPath: '@glomo-web-components/bbva-nativeconnector-secure-sharing',
      render: 'litElement',
      properties: {
        cellsConnections
      }
    };
  }
};

const pluginTokenCronto = (CONFIG) => {
  if (CONFIG.nativeShell) {
    const cellsConnections = { in: {}, out: {} };
    const operations = ['activateToken', 'deleteToken', 'generateOtp', 'generateNextOtp', 'openQrScanner'];
    operations.forEach((type) => {
      const changeType = type === 'generateNextOtp' ? `generate${type.slice(-3)}` : type;
      const channel = `global_cronto_${toUnderscoreCase(type)}`;
      const eventName = `${toDashCase(changeType)}`;
      cellsConnections.in[`${channel}`] = {
        bind: changeType
      };
      cellsConnections.out[`${channel}_success`] = {
        bind: `success-${eventName}`
      };
      cellsConnections.out[`${channel}_error`] = {
        bind: `error-${eventName}`
      };
    });
    return {
      zone: 'app__main',
      type: 'CC',
      tag: 'bbva-nativeconnector-token-cronto',
      familyPath: '@glomo-web-components/bbva-nativeconnector-token-cronto',
      render: 'litElement',
      properties: {
        cellsConnections
      }
    };
  }
};

function isPlainObject(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);

  if (
    prototype !== null &&
    prototype !== Object.prototype &&
    Object.getPrototypeOf(prototype) !== null
  ) {
    return false;
  }

  if (Symbol && Symbol.iterator in value) {
    return false;
  }

  if (Symbol && Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === '[object Module]';
  }

  return true;
}

function merge(source, overrides) {
  const object = Object.assign({}, source);
  for (const key in overrides) {
    if (key === '__proto__' || key === 'constructor') {
      continue;
    }

    const value = overrides[key];
    if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] =  merge(object[key], value);
    } else {
      object[key] = value;
    }
  }
  return object;
}

module.exports = {
  addFeatureFlag,
  addOutChannelToGlomoAlertManager,
  addOutStorageChannels: addOutStorageChannels,
  APP_SIDEBAR: APP_SIDEBAR,
  appFooter: appFooter,
  appFooterDeviceController: appFooterDeviceController,
  call2BBVA: call2BBVA,
  capitalize: capitalize,
  checksPhotosCompression,
  CONFIRMATION_EXIT_MODAL,
  connectionsIn: connectionsIn,
  connectionsInSpherica: connectionsInSpherica,
  connectionsOutSpherica: connectionsOutSpherica,
  connectionsOut: connectionsOut,
  connectionsParams: connectionsParams,
  discreetModePages,
  digitalNumberInFive,
  setProperty: setProperty,
  setTemplateProperty: setTemplateProperty,
  setPropertiesSpherica: setPropertiesSpherica,
  addProperty: addProperty,
  createPrefixFromPageName,
  del: del,
  detailDownloadParams,
  doubleFooterHeight,
  footerHeight,
  footerHeightInApp,
  footerManager: footerManager,
  get: get,
  getAlternativeFormatDate: getAlternativeFormatDate,
  getAlternativeFormatDateWithShortMonth: getAlternativeFormatDateWithShortMonth,
  getAlternativeFormatDateWithoutTime: getAlternativeFormatDateWithoutTime,
  getAlternativeFormatDateWithoutSpaceBetweenHourSymbol: getAlternativeFormatDateWithoutSpaceBetweenHourSymbol,
  getBusinessUnit: getBusinessUnit,
  getCampaignAnalytics: getCampaignAnalytics,
  getCampaigns: getCampaigns,
  getCampaignsCode: getCampaignsCode,
  getCampaignsChannels: getCampaignsChannels,
  getCountry: getCountry,
  getCurrencyCode: getCurrencyCode,
  getCountryLowercase: getCountryLowercase,
  getDate: getDate,
  getFeedbackOperation: getFeedbackOperation,
  getFooterMenuOptions: getFooterMenuOptions,
  getFooterMenuOptionsMinior,
  getFormatDate: getFormatDate,
  getFormatDateCCPR: getFormatDateCCPR,
  getGreetingConfiguration: getGreetingConfiguration,
  getImageLogin: getImageLogin,
  getImageLoginCachedUser: getImageLoginCachedUser,
  getLanguage: getLanguage,
  getLocalCurrency: getLocalCurrency,
  getLoginAdditionalUserAttributes: getLoginAdditionalUserAttributes,
  getLoginAllowRegistration: getLoginAllowRegistration,
  getLoginShortUserName: getLoginShortUserName,
  getLoginShowUserLoginName: getLoginShowUserLoginName,
  getLoginViewClassName: getLoginViewClassName,
  getLogo: getLogo,
  getMenuSidebarSections: getMenuSidebarSections,
  getMenuSidebarSectionsMinior: getMenuSidebarSectionsMinior,
  getLongFormatDate: getLongFormatDate,
  getMediumFormatDate: getMediumFormatDate,
  getOperations: getOperations,
  getShortFormatDate: getShortFormatDate,
  getUltraShortFormatDate: getUltraShortFormatDate,
  getShortInvestedDate,
  getShortDate,
  getTransactionCurrentYearDateFormat: getTransactionCurrentYearDateFormat,
  getRewardsFormatDay: getRewardsFormatDay,
  getVisibleChars: getVisibleChars,
  glomoOpenDocument: glomoOpenDocument,
  headerHeight,
  headerHeightMinimum,
  kebabToCamel,
  isPublicPage: isPublicPage,
  kebabCase,
  merge,
  PDF_MODAL,
  PRODUCTS_CONFIG,
  pluginDatePicker,
  pluginEtherToken,
  pluginSoftoken,
  pluginSecureSharing,
  pluginTokenCronto,
  setAlertManagerConnections,
  truncatedFormatConfig,
  percentageFormatConfig,
  getFindPropertyExtractor,
  getNestedKeyExtractor,
  getSimpleHandlingConfig,
  getRateHandlingConfig,
  amountFormatConfig,
  createPrefixForLocaleName,
  getLocaleNameForward,
  getAlertManagerTemplates,
  snakeCase: snakeCase,
  /**
   * @deprecated use `createSpinner' instead
   * @link https://eslint.org/docs/latest/rules/new-cap
  */
  SPINNER: SPINNER,
  SPINNERSPHERICA: SPINNERSPHERICA,
  createSpinner: SPINNER,
  /**
   * @deprecated use `createSpinnerMain' instead
   * @link https://eslint.org/docs/latest/rules/new-cap
  */
  SPINNERMAIN: SPINNERMAIN,
  createSpinnerMain: SPINNERMAIN,
  toUnderscoreCase,
  toDashCase,
  useNames
};
