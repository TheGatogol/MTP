'use strict';

module.exports = CONFIG => {
  const { createPrefixFromPageName, useNames, amountFormatConfig } = require('./common/helpers/_utils');
  const PAGENAME = 'mortgageReview';
  const pages = require('./common/_pages')(CONFIG)('mortgageReview');
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGENAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getChannelNameCallMeBack = channelName => getChannelName(channelName).toLowerCase();
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');

  const cmbConfig = {
    operativeName: 'mortgage',
    configEntryPoints: {
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 1,
    onlyCallMeBack: true,
    recoverySettings: true,
    onlyCallMeBackRemoteManager: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true
  };
  const cmbConfigAnalytics = {
    operativeName: 'mortgageReview',
    levels: {
      1: 'prestamos',
      2: 'credito hipotecario one click'
    },
    buttons: {
      summary: 'plazo'
    }
  };
  const base = {
    hash: 'mortgage-review',
    currentPage: {
      url: '/mortgage-review'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: 'bbva-core-blue',
        cellsConnections: {
          in: {
            mortgage_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      controllerCallMeBack(cmbConfig),
      analyticsCallMeBack(cmbConfigAnalytics),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_mortgageReview: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              mortgage_review_init_page: {
                bind: 'init-page'
              },
              [getChannelNameCallMeBack('_call_me_back_initialize')]: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          backAction: 'navigate-to-previous-page',
          cellsConnections: {
            in: {
              mortgage_review_back_navigate_request: {
                bind: 'goBack'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              }
            },
            out: {
              mortgage_review_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              },
              [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
                bind: 'navigate-to-previous-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main-spherica',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          id: 'successHeader',
          text: 'glomo-mortgage-header-title',
          variant: 'modal-initial',
          ambient: 'primary-alt',
          rightButtons: [ {
            id: 'btn-close',
            name: 'Close',
            icon: 'spherica:close',
            label: 'bbva-header-main-close-aria-label',
            accessibilityText: 'bbva-help-modal-close-button',
            defaultEventIconName: 'header-main-icon-right-primary-click'
          } ],
          cellsConnections: {
            out: {
              mortgage_set_icon_right_primary: {
                bind: 'iconRightPrimary'
              },
              mortgage_review_back_navigate_request: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info-spherica',
        familyPath: '@glomo-web-components/bbva-panel-info-spherica',
        render: 'litElement',
        properties: {
          id: 'successPanelInfo',
          disabledTabindex: true,
          headingLevelTitle: 'h3',
          heading: 'offer-mortgage-certificated-amount-label',
          hidePaddingBottom: true,
          isIcon: true,
          variant: 'success',
          className: 'u-margin--1'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'div',
        render: 'litElement',
        properties: {
          id: 'successMortgageContainer',
          className: 'u-margin-bottom--1 u-margin--grid bg-secondary100 u-border-radius--1'
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successAmount',
          label: 'offer-mortgage-certificated-list-simple-requested-amount',
          description: 'bbva-list-1-description',
          cellsConnections: {
            in: {
              mortgage_review_set_requested_amount: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successMonthlyPayment',
          variant: '',
          label: 'offer-mortgage-certificated-list-simple-monthly-payment',
          cellsConnections: {
            in: {
              mortgage_review_set_installment_amount: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successTerm',
          label: 'offer-mortgage-certificated-list-simple-term',
          cellsConnections: {
            in: {
              mortgage_review_set_term: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successDestination',
          label: 'offer-mortgage-certificated-list-simple-credit-destination',
          cellsConnections: {
            in: {
              mortgage_review_set_credit_destination: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successOpeningCommission',
          label: 'offer-mortgage-certificated-list-simple-opening-commission',
          cellsConnections: {
            in: {
              mortgage_review_set_opening_commission: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successDeferredCommission',
          label: 'offer-mortgage-certificated-list-simple-deferred-commission',
          cellsConnections: {
            in: {
              mortgage_review_set_deferred_commission: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successMonthlyRate',
          label: 'offer-mortgage-certificated-list-simple-monthly-rate',
          descriptionMedium: true,
          cellsConnections: {
            in: {
              mortgage_review_set_monthly_rate: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successCat',
          label: 'offer-mortgage-certificated-list-simple-cat',
          descriptionMedium: true,
          cellsConnections: {
            in: {
              mortgage_review_set_cat: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successDueDate',
          label: 'offer-mortgage-certificated-list-simple-due-date',
          cellsConnections: {
            in: {
              mortgage_review_set_expiration_date: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successFolio',
          label: 'offer-mortgage-certificated-list-simple-folio',
          cellsConnections: {
            in: {
              mortgage_review_set_folio: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-list-simple-spherica',
        familyPath: '@glomo-web-components/bbva-list-simple-spherica',
        render: 'litElement',
        properties: {
          id: 'successFolio',
          label: 'offer-mortgage-certificated-list-simple-date-operation',
          cellsConnections: {
            in: {
              mortgage_review_set_date: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-type-text-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          tag: 'p',
          text: 'offer-mortgage-certificated-list-definition-data-email-description-spherica',
          className: 'u-padding-left--1'
        }
      },
      {
        zone: 'successMortgageContainer',
        type: 'UI',
        tag: 'bbva-type-text-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'successEmail',
          tag: 'p',
          className: 'u-padding-left--1 u-padding-bottom--1',
          fontType: 'title-default',
          cellsConnections: {
            in: {
              mortgage_review_set_list_definition_data_email: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'successNotificationMessage',
          className: 'u-margin-top--2 u-margin-bottom--1-5 u-margin--grid',
          boldDescription: true,
          bookTitle: true,
          cellsConnections: {
            in: {
              mortgage_review_set_notification_message: {
                bind: 'messageTitle'
              },
              mortgage_review_set_notification_message_description: {
                bind: 'description'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-message-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          id: 'successNotificationMessage',
          className: 'u-margin-top--2 u-margin-bottom--1-5 u-margin--grid',
          messageTitle: 'offer-mortgage-certificated-list-definition-data-web',
          bookTitle: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-row-spherica',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          ambient: 'primary-alt',
          className: 'u-padding-bottom--1',
          options: [ {
            icon: 'spherica:telephone',
            label: 'offer-mortgage-certificated-button-row-call',
            id: 'call'
          } ],
          cellsConnections: {
            out: {
              mortgage_review_call_service_phone: {
                bind: 'button-row-item-call-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-mortgage-lead',
        familyPath: '@glomo-web-components/bbva-manager-mortgage-lead',
        render: 'litElement',
        properties: {
          phone: CONFIG.phoneNumberBbvaLineMortgage,
          cellsConnections: {
            in: {
              mortgage_review_call_service_phone: {
                bind: 'callMortgageServicePhone'
              },
              [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
                bind: 'callMeBack'
              }
            },
            out: {
              global_action_launcher_dialer: {
                bind: 'call-mortgage-service-phone'
              },
              [getChannelNameCallMeBack('_call_me_back_init_summary_configuration')]: {
                bind: 'init-call-me-back'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
