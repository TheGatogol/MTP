'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const PAGE_NAME = 'prevQuestions';
  const ANALYTICS = require('./analytics/_upgradeAccountCustomer')();
  const isNativeIos = CONFIG.nativeIos || false;

  SPINNER.properties.cellsConnections.in.upgrade_account_prev_questions_show_spinner = {
    bind: 'show'
  };
  SPINNER.properties.cellsConnections.in.upgrade_account_prev_questions_hide_spinner = {
    bind: 'hide'
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'upgrade-account-multistep-step-continue-button',
        disabled: false,
        action: 'prevQuest-button-continue-clicked'
      }
    }
  };


  const base = {
    currentPage: {
      url: '/upgrade-account-prev-questions',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        footerHeight: 112
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'upgradeAccountPrevQuestionsPage',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app_upgradeAccountPrevQuestionsPage: {
                bind: 'navigation'
              },
              __bridge_page_upgradeAccountPrevQuestionsPage: {
                bind: 'init'
              }
            },
            out: {
              upgrade_account_prev_questions_page: {
                bind: 'init-page',
                analytics: ANALYTICS.APP_STEP_2
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
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          config: configButtons,
          cellsConnections: {
            in: {
            },
            out: {
              upgrade_account_prevQuest_click_continue: {
                bind: 'prevQuest-button-continue-clicked'
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
          backAction: 'navigation-to-dashboard',
          currentPage: 'upgradeAccountPrevQuestionsPage',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              global_opened_modal: {
                bind: 'openedModal'
              },
              upgrade_account_prev_questions_modal_opened: {
                bind: 'openedModal'
              },
              upgrade_account_prev_questions_header_main_icon_right_primary_click: {
                bind: 'goBack'
              },
              upgrade_account_prev_questions_navigation_to_previous_page: {
                bind: 'goBack'
              }
            },
            out: {
              upgrade_account_prev_questions_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page'
              },
              upgrade_account_prev_questions_navigation_native_back_button: {
                bind: 'navigate-native-back-button'
              },
              global_alert_modal_close: {
                bind: 'navigate-native-back-button'
              },
              upgrade_account_prev_questions_navigation_to_dashboard: {
                bind: 'navigation-to-dashboard',
                backStep: true,
                skipHistory: true,
                link: {
                  page: 'dashboard'
                }
              },
              global_upgrade_account_exit: {
                bind: 'navigation-to-dashboard'
              }
            }
          }
        }
      }
    ]
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'upgrade-account-init-header',
      iconRightPrimary: 'bbva:close',
      cellsConnections: {
        in: {
        },
        out: {
          prev_upgrade_account_customer_exit_modal: {
            bind: 'header-main-icon-right-primary-click',
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          },
          global_upgrade_account_exit: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const TitlePrevQuest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    text: '',
    properties: {
      className: 'u-margin-top--1-5 u-text-color--600',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_title: {
            bind: 'text'
          }
        },
        out: {
        }
      }
    }
  };

  const prevQuestInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      fontWeight: '400',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_info: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const firstQuest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      unset: true,
      className: 'u-margin--grid u-margin-bottom--0-5',
      fontWeight: '500',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_first_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const pepLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-link',
    familyPath: '@bbva-web-components/bbva-link',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-bottom--1',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_pep_link: {
            bind: 'text'
          }
        },
        out: {
          upgrade_account_pep_click: {
            bind: 'click'
          }
        }
      }
    }
  };

  const firstRadioGroup = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-radio-group',
    familyPath: '@bbva-web-components/bbva-form-radio-group',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--1 u-margin-bottom--1-5',
      name: 'firstAcceptedForm',
      selected: 1,
      items: [],
      cellsConnections: {
        in: {
          upgrade_account_first_question_options: {
            bind: 'items'
          }
        },
        out: {
          upgrade_account_first_question_response: {
            bind: 'form-radio-group-item-change'
          }
        }
      }
    }
  };

  const secondQuest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      fontWeight: '500',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_second_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const secondRadioGroup = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-radio-group',
    familyPath: '@bbva-web-components/bbva-form-radio-group',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-bottom--1-5',
      name: 'secondAcceptedForm',
      selected: 0,
      items: [],
      cellsConnections: {
        in: {
          upgrade_account_second_question_options: {
            bind: 'items'
          }
        },
        out: {
          upgrade_account_second_question_response: {
            bind: 'form-radio-group-item-change'
          }
        }
      }
    }
  };

  const thirdQuest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      fontWeight: '500',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_third_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const thirdRadioGroup = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-radio-group',
    familyPath: '@bbva-web-components/bbva-form-radio-group',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-bottom--1-5',
      name: 'thirdAcceptedForm',
      selected: 1,
      items: [],
      cellsConnections: {
        in: {
          upgrade_account_third_question_options: {
            bind: 'items'
          }
        },
        out: {
          upgrade_account_third_question_response: {
            bind: 'form-radio-group-item-change'
          }
        }
      }
    }
  };

  const fourthQuest = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      fontWeight: '500',
      text: '',
      cellsConnections: {
        in: {
          upgrade_account_prev_questions_fourth_text: {
            bind: 'text'
          }
        },
        out: {}
      }
    }
  };

  const fourthRadioGroup = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-radio-group',
    familyPath: '@bbva-web-components/bbva-form-radio-group',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid',
      name: 'fourthAcceptedForm',
      selected: 1,
      items: [],
      cellsConnections: {
        in: {
          upgrade_account_fourth_question_options: {
            bind: 'items'
          }
        },
        out: {
          upgrade_account_fourth_question_response: {
            bind: 'form-radio-group-item-change'
          }
        }
      }
    }
  };

  const pageDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-prev-questions-dm-upgrade-account',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      pepModalConfig: {
        titleText: 'upgrade-account-prev-questions-pep-modal-title',
        headerText: 'upgrade-account-prev-questions-pep-modal-header',
        bodyTextParagraphOne: 'upgrade-account-prev-questions-pep-modal-paragraph-one',
        bodyTextParagraphTwo: 'upgrade-account-prev-questions-pep-modal-paragraph-two',
        buttonText: 'upgrade-account-prev-questions-pep-modal-button'
      },
      pageName: PAGE_NAME,
      branchInfoImage: './images/errors/error.svg',
      cellsConnections: {
        in: {
          upgrade_account_init_page_update_route: {
            bind: 'initPrevQuestions'
          },
          upgrade_account_prev_questions_page: {
            bind: 'ready'
          },
          upgrade_account_due_date_recalculated: {
            bind: 'branchInfoDate'
          },
          upgrade_account_prevQuest_click_continue: {
            bind: 'onContinueClicked'
          },
          upgrade_account_pep_click: {
            bind: 'openPepModal'
          },
          upgrade_account_first_question_response: {
            bind: 'validateQuestionnaireStatus'
          },
          upgrade_account_second_question_response: {
            bind: 'validateQuestionnaireStatus'
          },
          upgrade_account_third_question_response: {
            bind: 'validateQuestionnaireStatus'
          },
          upgrade_account_fourth_question_response: {
            bind: 'validateQuestionnaireStatus'
          },
          upgrade_account_prev_questions_aggregation_help_modal_open: {
            bind: 'openAggregationHelpModal'
          },
          upgrade_account_prev_questions_aggregation_help_modal_close: {
            bind: 'closeAggregationHelpModal'
          }
        },
        out: {
          upgrade_account_prev_questions_show_spinner: {
            bind: 'show-spinner'
          },
          upgrade_account_prev_questions_hide_spinner: {
            bind: 'hide-spinner'
          },
          upgrade_account_prev_questions_update_route: {
            bind: 'update-route',
            link: {
              page: 'upgradeAccountCustomerDataPage'
            }
          },
          set_aggregation_modal_titleText_property: {
            bind: 'set-aggregation-modal-titleText-property'
          },
          set_aggregation_modal_headerText_property: {
            bind: 'set-aggregation-modal-headerText-property'
          },
          set_aggregation_modal_bodyText_property: {
            bind: 'set-aggregation-modal-bodyText-property'
          },
          set_aggregation_modal_buttonText_property: {
            bind: 'set-aggregation-modal-buttonText-property'
          },
          open_upgrade_account_pep_modal: {
            bind: 'open-upgrade-account-pep-modal',
            analytics: ANALYTICS.PERSON_POLITICALLY_EXPOSED_PRINT
          },
          set_title_icon: {
            bind: 'set-title-icon'
          },
          upgrade_account_visit_branch_modal_pep: {
            bind: 'open-branch-info-pep',
            analytics: ANALYTICS.APP_COMPLETED_RECHAZO_PPE
          },
          upgrade_account_visit_branch_modal_money_not_own: {
            bind: 'open-branch-info-money-not-own',
            analytics: ANALYTICS.APP_COMPLETED_RECHAZO_MONEY_NOT_OWN
          },
          upgrade_account_visit_branch_modal_international_transfers: {
            bind: 'open-branch-info-international-transfers',
            analytics: ANALYTICS.APP_COMPLETED_RECHAZO_FREQUENT_INTERNATIONAL_TRANSFERS
          },
          upgrade_account_visit_branch_modal_only_mx: {
            bind: 'open-branch-info-only-mx',
            analytics: ANALYTICS.APP_COMPLETED_RECHAZO_OBLIGATIONS_FISCAL_OUTSIDE_OF_MEXICO
          },
          upgrade_account_prev_questions_modal_opened: {
            bind: 'modal-opened'
          },
          upgrade_account_prev_questions_fourth_text: {
            bind: 'fourth-question-text'
          },
          upgrade_account_prev_questions_third_text: {
            bind: 'third-question-text'
          },
          upgrade_account_prev_questions_second_text: {
            bind: 'second-question-text'
          },
          upgrade_account_prev_questions_first_text: {
            bind: 'first-question-text'
          },
          upgrade_account_prev_questions_pep_link: {
            bind: 'pep-link'
          },
          upgrade_account_prev_questions_info: {
            bind: 'prev-questions-info'
          },
          upgrade_account_prev_questions_title: {
            bind: 'prev-questions-title'
          },
          upgrade_account_fourth_question_options: {
            bind: 'set-options-fourth-question'
          },
          upgrade_account_third_question_options: {
            bind: 'set-options-third-question'
          },
          upgrade_account_second_question_options: {
            bind: 'set-options-second-question'
          },
          upgrade_account_first_question_options: {
            bind: 'set-options-first-question'
          }
        }
      }
    }
  };

  base.components.push(header);
  base.components.push(TitlePrevQuest);
  base.components.push(prevQuestInfo);
  base.components.push(firstQuest);
  base.components.push(pepLink);
  base.components.push(firstRadioGroup);
  base.components.push(secondQuest);
  base.components.push(secondRadioGroup);
  base.components.push(thirdQuest);
  base.components.push(thirdRadioGroup);
  base.components.push(fourthQuest);
  base.components.push(fourthRadioGroup);
  base.components.push(pageDm);

  return base;

};
