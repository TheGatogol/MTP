'use strict';
module.exports = CONFIG => {
  const { footerHeight, headerHeight } = require('./common/helpers/_utils');
  const { globalServices: { host, requiredToken = 'tsec', versions: { limitsV1 } }, native = false, nativeIos = false } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'userTransactionAmountDetailNotification');
  const isSpherica = sphericaPageUtils.isSpherica();
  const singleTransactionAmount = {
    zone: 'app__main',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      className: 'u-margin--grid u-margin-top--0-5',
      id: 'div_page'
    }
  };

  const title = {
    zone: 'div_page.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      className: 'u-margin-bottom--2 u-margin-top--2',
      fontWeight: '500',
      text: 'user-transaction-amount-detail-notification-title',
      tag: 'p',
      size: 'L'
    },
    propertiesSpherica: {
      className: 'u-margin-bottom--1 u-margin-top--2',
      size: 'M'
    }
  };

  const mainContainer = {
    zone: 'div_page.slot-content',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'panel_amount',
      className: 'u-display--table'
    }
  };

  const description = {
    zone: 'panel_amount.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      text: 'user-transaction-amount-detail-notification-description',
      inherit: true,
      textColor: '#070E46',
      size: 'M'
    }
  };

  const descriptionSection = {
    zone: 'div_page.slot-content',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'panel_origin',
      className: 'u-display--table u-margin-bottom--1'
    }
  };

  const firstText = {
    zone: 'panel_origin.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      text: 'user-transaction-amount-detail-notification-first-text',
      inherit: true,
      size: 'L',
      cellsConnections: {
        in: {
          set_operation_time_text: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      size: 'M'
    }
  };

  const secondText = {
    zone: 'panel_origin.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-text',
    properties: {
      text: 'user-transaction-amount-detail-notification-second-text',
      inherit: true,
      size: 'L',
      className: 'u-margin-top--1-5'
    },
    propertiesSpherica: {
      size: 'M'
    }
  };

  const divButtonContainer = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'div',
    render: 'litElement',
    container: true,
    properties: {
      id: 'div_buttons',
      className: 'u-display--table u-margin--center u-margin-bottom--2'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };

  const buttonReject = {
    zone: 'div_buttons.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      id: 'buttonReject',
      className: 'u-margin--1 u-padding-right--0 u-padding-left--0',
      text: 'user-transaction-amount-detail-notification-reject-button-text',
      variant: 'secondary',
      cellsConnections: {
        out: {
          handle_operation_limit_change_rejection_click: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin-top--2',
      size: 'M',
      variant: 'link',
      ambient: 'primary-alt'
    }
  };

  const buttonConfirm = {
    zone: 'div_buttons.slot-content',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      id: 'buttonConfirm',
      className: 'u-margin--1 u-padding-right--0 u-padding-left--0',
      text: 'user-transaction-amount-detail-notification-confirm-button-text',
      cellsConnections: {
        out: {
          handle_operation_limit_change_confirmation_click: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: '',
      size: 'M'
    }
  };

  const dataProviderOperationalLimits = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-local-limits-api-dm',
    familyPath: '@glomo-web-components/bbva-local-limits-api-dm',
    render: 'litElement',
    properties: {
      native,
      host,
      requiredToken,
      version: limitsV1,
      requiredOTP: true,
      cellsConnections: {
        in: {
          execute_operation_limit_change_indicator_post: {
            bind: 'postLimitsApprove'
          }
        },
        out: {
          operation_limit_change_success_response: {
            bind: 'post-limits-approve-api-dm-fetch'
          },
          operation_limit_change_error_response: {
            bind: 'post-limits-approve-api-dm-fetch-error'
          }
        }
      }
    }
  };

  const dataManagerOperationalLimits = {
    zone: 'app__main',
    tag: 'glomo-operational-limits-dm-mx',
    familyPath: 'glomo-operational-limits-dm',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          handle_operation_limit_change_confirmation_click: {
            bind: 'operationLimitChangeConfirmationPost'
          },
          handle_operation_limit_change_rejection_click: {
            bind: 'operationLimitChangeRejectionPost'
          },
          operation_limit_change_success_response: {
            bind: 'onOperationLimitChangeConfirmationSuccess'
          },
          operation_limit_change_error_response: {
            bind: 'onOperationLimitChangeConfirmationError'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'changeOperationTimeTextFromDeepLinkNotificationDetail'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'changeOperationTimeTextFromDeepLinkToOperation'
          }
        },
        out: {
          execute_operation_limit_change_indicator_post: {
            bind: 'operation-limit-change-indicator-post'
          },
          set_operation_time_text: {
            bind: 'set-operation-time-text'
          },
          confirmed_operation_limit_change_page: {
            bind: 'navigation-to-transaction-amount-confirmation',
            link: {
              page: 'userTransactionAmountConfirmation',
              cleanUntil: 'userTransactionAmountDetailNotification'
            }
          },
          rejected_operation_limit_change_page: {
            bind: 'navigation-to-transaction-amount-rejection',
            link: {
              page: 'userTransactionAmountRejection',
              cleanUntil: 'userTransactionAmountDetailNotification'
            }
          },
          error_operation_limit_change_page: {
            bind: 'navigation-to-transaction-amount-error',
            link: {
              page: 'userTransactionAmountError'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'userTransactionAmountDetailNotification',
    currentPage: {
      url: '/user-transaction-amount-detail-notification'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: nativeIos ? 'padding-top' : '',
        headerHeight,
        iOSFixedHeader: nativeIos,
        disableEdgeSwipe: true,
        hasFooter: true,
        footerHeight
      },
      propertiesSpherica: {
        footerHeight: 'fit-content'
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        tagSpherica: 'bbva-header-main-spherica',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-header-main',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        properties: {
          variant: 'modal',
          iconRightPrimary: 'coronita:close',
          text: 'user-transaction-amount-detail-notification-header',
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            out: {
              go_to_notification_center: {
                bind: 'header-main-icon-right-primary-click',
                link: {
                  cleanUntil: 'notificationsCenter',
                  page: 'notificationsCenter'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'modal-initial',
          ambient: 'primary-alt',
          rightButtons: [
            {
              id: 'btn-close',
              name: 'Close',
              icon: 'spherica:close',
              label: 'bbva-header-main-close-aria-label',
              accessibilityText: 'bbva-help-modal-close-button',
              defaultEventIconName: 'header-main-icon-right-primary-click'
            }
          ]
        }
      },
      singleTransactionAmount,
      title,
      mainContainer,
      descriptionSection,
      description,
      firstText,
      secondText,
      divButtonContainer,
      ...(isSpherica ? [buttonConfirm, buttonReject] : [buttonReject, buttonConfirm]),
      dataProviderOperationalLimits,
      dataManagerOperationalLimits
    ]
  };

  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  const addSignConnector = (component, events) => signConnector(component, 'userTransactionAmountDetailNotification', events);
  addSignConnector('bbva-local-limits-api-dm', ['post-limits-approve-api-dm-fetch', 'post-limits-approve-api-dm-fetch-error']);

  return sphericaPageUtils.spherize(base);
};
