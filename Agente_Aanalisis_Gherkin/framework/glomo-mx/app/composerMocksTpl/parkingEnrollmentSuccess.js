module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const pageName = 'parkingEnrollmentSuccess';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)('parkingEnrollment');
  const analytics = require('./analytics/_parkingRecharge')(CONFIG);
  const lifeCycle = {
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
          __bridge_page_parkingEnrollment: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
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
  const header =  {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      text: 'bbva-header-parking-enrollment-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      variant: 'modal',
      cellsConnections: {
        out: {
          parking_enrollment_success_back_navigate_request: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          },
          parking_enrollment_reset: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      className: 'primary',
      ambient: 'primary-alt',
      text: 'bbva-header-parking-enrollment-title-spherica',
      rightButtons: [ {
        id: 'btn-close',
        name: 'Close',
        icon: 'coronita:close',
        accessibilityText: 'bbva-header-main-a11y-icon-close-label',
        label: 'bbva-help-modal-close-button',
        defaultEventIconName: 'header-main-icon-right-primary-click'
      } ]
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': 'true'
    },
    properties: {
      disabledTabindex: '',
      headingLevelTitle: 'h3',
      microillustration: 'success',
      heading: 'bbva-parking-enrollment-success-operation',
      text: ''
    },
    propertiesSpherica: {
      className: 'u-margin--1',
      disabledTabindex: '',
      variant: 'success',
      headingLevelTitle: 'h3',
      isIcon: true,
      heading: 'bbva-parking-enrollment-success-operation-spherica',
      text: ''
    }
  };
  const date = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    render: 'litElement',
    attributes: {
      'font-style': 'italic',
      'font-weight': '500'
    },
    properties: {
      id: 'successDate',
      className: '',
      alignment: 'center',
      size: 'S',
      cellsConnections: {
        in: {
          parking_enrollment_send_date: {
            bind: 'text'
          }
        }
      }
    }
  };
  const provider =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successProvider',
      descriptionMedium: true,
      label: 'bbva-list-parking-enrollment-operador',
      cellsConnections: {
        in: {
          parking_enrollment_send_provider: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100 u-border-radius--top--1 u-margin-top--1'
    }
  };
  const agreement =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successAgreement',
      label: 'bbva-list-parking-enrollment-agreement-number',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          parking_enrollment_send_agreement: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100'
    }
  };
  const phoneNumber =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successPhoneNumber',
      label: 'bbva-list-parking-enrollment-cell-phone',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          parking_enrollment_send_phone_covered: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100'
    }
  };
  const alias =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successAlias',
      label: 'bbva-list-parking-enrollment-alias',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          parking_enrollment_send_alias: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100'
    }
  };
  const operationType =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPath: '@bbva-web-components/bbva-list-simple',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successOperation',
      label: 'bbva-list-parking-enrollment-type-operation',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          parking_enrollment_send_operation: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100'
    }
  };
  const dateList =  {
    zone: 'app__main',
    type: 'UI',
    tagSpherica: 'bbva-list-simple-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-list-simple-spherica',
    render: 'litElement',
    properties: {
      id: 'successDateOperation',
      label: 'bbva-list-parking-enrollment-title-date',
      descriptionMedium: true,
      cellsConnections: {
        in: {
          parking_enrollment_send_date: {
            bind: 'description'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid bg-secondary100 u-border-radius--bottom--1'
    }
  };

  const buttonRow = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-row',
    tagSpherica: 'bbva-button-row-spherica',
    familyPath: '@bbva-spherica-components/bbva-button-row',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'callButton',
      cellsConnections: {
        in: {
          global_parking_enrollment_button_options: {
            bind: 'options'
          }
        },
        out: {
          parking_enrollment_success_send_account_data: {
            bind: (isSpherica) ? 'button-row-item-buttonRow-click' : 'button-row-item-click'
          },
          parking_enrollment_success_go_to_parking_recharge: {
            bind: (isSpherica) ? 'button-row-item-buttonRow-click' : 'button-row-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      ambient: 'primary-alt',
      className: 'u-margin-top--2'
    }
  };
  const buttonDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--1-5 u-margin-bottom--1-5',
      text: 'bbva-parking-enrollment-success-exit',
      cellsConnections: {
        out: {
          parking_enrollment_success_back_navigate_request: {
            bind: 'click',
            backStep: true
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          parking_enrollment_send_phone: {
            bind: 'phoneNumber'
          },
          parking_enrollment_send_alias: {
            bind: 'alias'
          },
          parking_enrollment_success_send_account_data: {
            bind: 'sendDataFromSuccessToRecharge'
          },
          parking_enrollment_success_go_to_parking_recharge: {
            bind: 'goToRecharge'
          }
        },
        out: {
          parking_enrollment_success_send_account: {
            bind: 'send-data-to-parking-recharge'
          },
          parking_enrollment_success_navigate_to_recharge: {
            bind: 'navigate-to-parking-recharge',
            link: {
              page: 'parkingRecharge',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const managerAnalyticsParkingEnrollment = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-parking-enrollment',
    familyPath: '@glomo-web-components/bbva-manager-parking-enrollment',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          parking_enrollment_success_navigate_to_recharge: {
            bind: 'fireAppOnClickRecharge'
          }
        },
        out: {
          [getGlobalName('analytics_app_click_start_recharge_success')]: {
            bind: 'analytics-app-on-click-start-recharge',
            analytics: analytics.appOnClickStartEnroll
          }
        }
      }
    }
  };
  const base = {
    hash: 'parking-enrollment-success',
    currentPage: {
      url: '/parking-enrollment-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'horizontal',
        disableEdgeSwipe: true,
        headerFixed: true,
        disableScrollLock: true,
        extraHeaderClass: isSpherica ? '' : 'bbva-core-blue'
      }
    },
    components: [
      lifeCycle,
      header,
      panelInfo,
      date,
      provider,
      agreement,
      phoneNumber,
      alias,
      operationType,
      buttonRow,
      manager,
      managerAnalyticsParkingEnrollment
    ]
  };
  if (!isSpherica) {
    base.components.push(buttonDefault);
  } else {
    const index = base.components.indexOf(operationType);
    base.components.splice(index + 1, 0, dateList);
  }
  return sphericaPageUtils.spherize(base);
};
