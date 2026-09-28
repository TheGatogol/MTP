'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'contactsAgenda';
  const ANALYTICS = require('./analytics/_contactsAgenda')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('contacts-agenda');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNERMAIN(CONFIG);
  const extraHeaderClass = isSpherica ? '' : 'bbva-core-blue';

  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
    SPINNER.propertiesSpherica = {
      className: isNativeIos ? 'solid-spinner no-header' : 'solid-spinner'
    };
  }

  const ACTIONS = [
    {
      text: 'cells-operation-swipe-list-action-delete',
      icon: 'coronita:trash',
      method: 'DELETE',
      className: 'bg-delete'
    }
  ];

  const ACTIONS_PRODUCT = [
    {
      text: 'cells-operation-swipe-list-action-delete-products',
      icon: 'coronita:trash',
      method: 'DELETE-PRODUCTS',
      className: 'bg-delete'
    }
  ];

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          global_contacts_agenda_open_delete_confirm_modal_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/contacts-agenda',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        hasFooter: false,
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        iOSFixedHeader: true,
        className: `bg-white${isNativeIos ? ' ios-top-padding' : ''}`,
        extraHeaderClass,
        cellsConnections: {
          in: {
            contacts_agenda_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'contactsAgenda',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_contactsAgenda: {
                bind: 'init'
              },
              contacts_agenda_delete_successful: {
                bind: 'reset'
              },
              contacts_agenda_delete_error: {
                bind: 'reset'
              }
            },
            out: {
              contacts_agenda_reset_page: {
                bind: 'reset'
              },
              contacts_agenda_init_page: {
                bind: 'init-page'
              },
              contacts_agenda_analytics_init_page: {
                bind: 'init-page'
              },
              open_control_veil: {
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
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'header-left-button',
          cellsConnections: {
            in: {
              contacts_agenda_selected_item: {
                bind: 'navigateToPage'
              }
            },
            out: {
              NAVIGATION_REQUEST_SELECTED_ITEM: {
                bind: 'navigation-to-transfers'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--white',
          rightIcon: 'coronita:close',
          titleName: 'cells-contacts-agenda-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_contacts_agenda_back_step: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          className: 'header',
          rightIcon: 'coronita:close',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-predictive',
        tagSpherica: 'bbva-form-predictive-spherica',
        familyPath: '@bbva-web-components/bbva-form-predictive',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
        render: 'litElement',
        properties: {
          required: true,
          search: true,
          label: 'Nombre, Alias, Cuenta, CLABE',
          form: 'cells-operation-swipe-list',
          className: 'u-margin--grid',
          cellsConnections: {
            in: {
              contacts_agenda_search_input_reset: {
                bind: 'value'
              },
              contacts_agenda_search_input_from_blue: {
                bind: 'value'
              }
            },
            out: {
              bbva_form_predictive_search_contact_string: {
                bind: 'form-search-button-submit'
              },
              bbva_form_predictive_search_clean_data: {
                bind: 'form-field-input-clear'
              },
              bbva_form_predictive_auto_search_contact: {
                bind: 'form-predictive-value-change'
              }
            }
          }
        },
        propertiesSpherica: {
          useCustomEmptySection: true,
          className: 'u-margin--1'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-operation-swipe-list',
        tagSpherica: 'cells-operation-swipe-list-spherica',
        type: 'UI',
        properties: {
          actions: ACTIONS,
          actionsProduct: ACTIONS_PRODUCT,
          disableDoubleSwipe: true,
          showIcon: false,
          activeList: 'avatarItems',
          noDivider: true,
          cellsConnections: {
            in: {
              contacts_agenda_parsed_contacts_changed: {
                bind: 'avatarItems'
              },
              contacts_agenda_filtered_data: {
                bind: 'avatarItems'
              },
              contacts_agenda_reset_page: {
                bind: 'reset'
              },
              contacts_agenda_no_contacts_saved: {
                bind: 'info'
              },
              contacts_agenda_no_contacts_found: {
                bind: 'info'
              },
              contacts_agenda_reset_not_found_info: {
                bind: 'info'
              }
            },
            out: {
              contacts_agenda_selected_product: {
                bind: 'tap-view-operation-detail'
              },
              contacts_agenda_delete_swipe: {
                bind: 'view-operation-swipe-delete'
              },
              contacts_agenda_delete_swipe_products: {
                bind: 'view-operation-swipe-delete-products'
              }
            }
          }
        },
        propertiesSpherica: {
          activeList: 'groupProduct',
          disableDoubleSwipe: false,
          imgSize: 'xl'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-contacts-book-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          version: CONFIG.globalServices.versions.contactsBook,
          dontRequireTotalPagesInPagination: true,
          zeroBasedPagesInPagination: true,
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              contacts_agenda_delete_contact: {
                bind: 'deleteContact'
              },
              contacts_agenda_delete_product: {
                bind: 'deleteProduct'
              },
              contacts_agenda_delete_contact_get_contacts_list: {
                bind: 'getContacts'
              },
              contacts_agenda_reset_page: {
                bind: 'reset'
              },
              contacts_agenda_set_request_headers: {
                bind: 'headers'
              }
            },
            out: {
              contacts_agenda_get_contacts_error: {
                bind: 'error-on-get-contacts-book-contacts'
              },
              contacts_agenda_get_contacts_success: {
                bind: 'get-contacts-book-contacts-success'
              },
              contacts_agenda_delete_contact_successful: {
                bind: 'delete-contact-from-contacts-success'
              },
              contacts_agenda_delete_product_successful: {
                bind: 'delete-product-from-contacts-success'
              },
              contacts_agenda_delete_contact_error: {
                bind: 'error-on-delete-contact-from-contacts'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-contacts-agenda-dm-mx',
        familyPath: 'glomo-contacts-agenda-dm',
        properties: {
          noContactsImg: './images/empty_micro.svg',
          extendContacts: true,
          contactsPageSize: 999,
          authenticationType: CONFIG.globalServices.security.headers.authenticationType,
          projectNameGlomo: ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO,
          projectNameGlomoAlwaysOn: ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO_ALWAYSON,
          setStandInHeaders: !CONFIG.native,
          cellsConnections: {
            in: {
              device_accesses_device_id: {
                bind: 'deviceId'
              },
              register_device: {
                bind: 'setDeviceId'
              },
              global_feature_stand_in_status: {
                bind: 'standIn'
              },
              contacts_agenda_init_page: {
                bind: 'getContacts'
              },
              contacts_agenda_reset_page: {
                bind: 'reset'
              },
              contacts_agenda_get_contacts_success: {
                bind: 'parseContacts'
              },
              bbva_form_predictive_search_clean_data: {
                bind: 'parseContacts'
              },
              contacts_agenda_selected_product: {
                bind: 'onSelectedProduct'
              },
              contacts_agenda_get_contacts_error: {
                bind: 'manageServiceError'
              },
              contacts_agenda_delete_swipe: {
                bind: 'deleteModalConfig'
              },
              contacts_agenda_delete_swipe_products: {
                bind: 'deleteProductModalConfig'
              },
              contacts_agenda_delete_contact_successful: {
                bind: 'deleteContactProductSuccessfully'
              },
              contacts_agenda_delete_product_successful: {
                bind: 'deleteContactProductSuccessfully'
              },
              contacts_agenda_delete_contact_error: {
                bind: 'deleteContactProductError'
              },
              contacts_agenda_template_scroll_complete: {
                bind: 'manageScrollEnd'
              },
              bbva_form_predictive_search_contact_string: {
                bind: 'filterContacts'
              },
              bbva_form_predictive_auto_search_contact: {
                bind: 'filterContacts'
              },
              contacts_agenda_analytics_init_page: {
                bind: 'setProjectNameStandin'
              },
              navigation_contacts_agenda_back_step: {
                bind: 'resetValue'
              },
              NAVIGATION_REQUEST_SELECTED_ITEM: {
                bind: 'resetContacts'
              },
              contacts_agenda_search_input_from_blue: {
                bind: 'preSearchText'
              }
            },
            out: {
              back_to_transfers: {
                bind: 'back-to-transfers',
                backStep: true
              },
              contacts_agenda_search_input_reset: {
                bind: 'search-input-reset-value'
              },
              contacts_agenda_selected_item: {
                bind: 'item-selected'
              },
              contacts_agenda_reset_not_found_info: {
                bind: 'reset-not-found-info'
              },
              contacts_agenda_no_contacts_found: {
                bind: 'no-contacts-found'
              },
              contacts_agenda_filtered_data: {
                bind: 'filtered-contacts-list'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              contacts_agenda_parsed_contacts_changed: {
                bind: 'parsed-contacts-changed'
              },
              global_contacts_agenda_open_delete_confirm_modal: {
                bind: 'open-confirm-delete-modal'
              },
              contacts_agenda_delete_contact: {
                bind: 'delete-contact'
              },
              contacts_agenda_delete_product: {
                bind: 'delete-product'
              },
              contacts_agenda_delete_successful: {
                bind: 'success-message-snackbar'
              },
              contacts_agenda_delete_error: {
                bind: 'error-message-snackbar'
              },
              contacts_agenda_delete_contact_get_contacts_list: {
                bind: 'get-contacts-list'
              },
              contacts_agenda_no_contacts_saved: {
                bind: 'no-contacts-saved'
              },
              contacts_agenda_set_request_headers: {
                bind: 'contacts-list-request-headers'
              },
              RESET_LIST_CONTACTS_FLAG: {
                bind: 'reset-list-contacts-flag'
              },
              contacts_agenda_analytics_saved_contacts: {
                bind: 'contacts-agenda-setting-project-name',
                analytics: ANALYTICS.PAGE_VIEW_1
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: sphericaPageUtils.isSpherica(),
          noContactsImg: './images/spherica/empty_state_day.svg',
          newCellsConnections: {
            add: {
              out: {
                global_contacts_agenda_open_delete_confirm_modal_spherica: {
                  bind: 'open-confirm-delete-modal'
                }
              }
            },
            remove: {
              out: [
                'global_contacts_agenda_open_delete_confirm_modal'
              ]
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        tagSpherica: 'cells-bottom-modal-message-spherica',
        properties: {
          type: 'success',
          icon: 'coronita:correct',
          iconSize: '24',
          autoHide: true,
          time: 3000,
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              contacts_agenda_delete_successful: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        tagSpherica: 'cells-bottom-modal-message-spherica',
        properties: {
          type: 'error',
          autoHide: true,
          time: 3000,
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              contacts_agenda_delete_error: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
