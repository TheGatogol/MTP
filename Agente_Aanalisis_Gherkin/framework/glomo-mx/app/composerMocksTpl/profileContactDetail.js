/* eslint-disable max-len */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const COUNTRY = utils.getCountry();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  // eslint-disable-next-line new-cap
  const SPINNERMAIN = utils.SPINNERMAIN(CONFIG);
  const EXIT_MODAL_ICON = 'coronita-alert';
  const EXIT_MODAL_CLASS = 'error exit';
  // eslint-disable-next-line no-useless-escape
  const DEFAULT_MAIL_REGEX = '^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$';
  const EMAIL_REGEX = DEFAULT_MAIL_REGEX;
  const isNativeIos = CONFIG.nativeIos || false;

  const API_AGGREGATOR_REQUESTS = {
    pe: [
      {
        key: 'contactDetails',
        endPoint: 'contact-details',
        method: 'GET'
      }
    ]
  };

  const base = {
    hash: 'profile-contact-detail',
    currentPage: {
      url: '/profile/contact-detail/:contactType/:contactId',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        footerHeight: 100,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      SPINNERMAIN,
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector',
        type: 'UI',
        properties: {
          autoClose: true,
          cellsConnections: {
            in: {
              profile_contact_detail_mobile_providers: {
                bind: 'items'
              },
              profile_contact_detail_mobile_providers_open_selector: {
                bind: 'open'
              },
              profile_contact_detail_area_codes: {
                bind: 'items'
              },
              profile_contact_detail_area_codes_open_selector: {
                bind: 'open'
              },
              profile_contact_detail_reset_detail_modal: {
                bind: 'reset'
              },
              profile_contact_detail_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              profile_contact_detail_phone_detail_selected: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'profileContactDetail',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_profileContactDetail: {
                bind: 'init'
              }
            },
            out: {
              profile_contact_detail_reset_page: {
                bind: 'reset'
              },
              profile_contact_detail_init_page: {
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
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {
              profile_contact_detail_set_header_title: {
                bind: 'titleName'
              }
            },
            out: {
              profile_contact_detail_show_exit_confirm: {
                bind: 'click-right-button'
              },
              close_control_veil: {
                bind: 'click-right-button'
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
          backAction: 'header-right-button',
          continue: 'profile',
          cellsConnections: {
            in: {
              global_profile_contact_detail_exit_accept: {
                bind: 'goBack'
              },
              profile_modal_contact_detail_user_cancel: {
                bind: 'goBack'
              },
              profile_contact_detail_get_providers_error: {
                bind: 'goBack'
              }

            },
            out: {
              profile_contact_detail_request_go_back: {
                bind: 'header-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-add-user-profile-detail',
        properties: {
          country: COUNTRY,
          phonesRegExps: {
            'MOBILE_NUMBER': '^9\\d{8}$',
            'PHONE_NUMBER': '^[2345678]\\d{5}$',
            'PHONE_NUMBER_LIMA': '^[2345678]\\d{6}$',
            'OFFICE_NUMBER': '^[2345678]\\d{5}$'
          },
          contactTypes: {
            mobile: 'MOBILE_NUMBER',
            phone: 'PHONE_NUMBER',
            officePhone: 'OFFICE_NUMBER',
            email: 'EMAIL',
            workEmail: 'WORK_EMAIL',
            facebookEmail: 'FACEBOOK_EMAIL'
          },
          prefixLimaNumb: '001',
          prefixSeparator: ' - ',
          maxLengthWorkExtension: 4,
          mobileStarterNumber: 9,
          mobileNumberLength: 9,
          phoneNumberLength: 6,
          phoneNumberLimaLength: 7,
          defaultErrorMessageEmail: 'profile-contact-detail-email-error',
          emailRegExp: EMAIL_REGEX,
          // eslint-disable-next-line no-useless-escape
          emailRegFacebook: '.*(@facebook\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$',
          isChecked: false,
          isCheckedDefaultValue: false,
          alwaysDisplayEmailLiteral: false,
          hideInfo: false,
          exitModalIcon: EXIT_MODAL_ICON,
          exitModalClass: EXIT_MODAL_CLASS,
          cellsConnections: {
            in: {
              profile_contact_detail_additional_information_work: {
                bind: 'infoPhoneDetailWork'
              },
              profile_contact_detail_additional_information_phone: {
                bind: 'infoPhoneDetailPhoneHome'
              },
              profile_contact_detail_phone_detail_selected: {
                bind: 'phoneDetailSelected'
              },
              profile_contact_detail_reset_page: {
                bind: 'reset'
              },
              profile_contact_detail_set_customer_contacts: {
                bind: 'contactDetailsList'
              },
              global_profile_phone_detail_area_codes: {
                bind: 'regionalCodes'
              },
              profile_contact_detail_phone_detail_providers: {
                bind: 'phoneProviders'
              },
              profile_contact_detail_duplicated_email_error: {
                bind: 'showDuplicatedError'
              },
              profile_contact_detail_duplicated_phone_error: {
                bind: 'showDuplicatedError'
              },
              profile_contact_detail_show_exit_confirm: {
                bind: 'openExitConfirmModal'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'openExitConfirmModal'
              }
            },
            out: {
              profile_contact_detail_get_area_codes: {
                bind: 'profile-contact-detail-get-area-codes'
              },
              navigation_contact_detail_to_profile: {
                bind: 'profile-cancel-event',
                link: {
                  page: 'profile'
                }
              },
              profile_contact_detail_area_codes: {
                bind: 'profile-contact-detail-get-area-codes'
              },
              profile_contact_detail_area_codes_open_selector: {
                bind: 'profile-contact-detail-get-area-codes'
              },
              profile_contact_detail_set_header_title: {
                bind: 'set-header-title'
              },
              profile_contact_detail_mobile_providers: {
                bind: 'profile-contact-detail-get-phone-providers'
              },
              profile_contact_detail_mobile_providers_open_selector: {
                bind: 'profile-contact-detail-get-phone-providers'
              },
              profile_contact_detail_get_user_contacts: {
                bind: 'get-customer-contacts-unmasked'
              },
              profile_contact_detail_open_success_modal: {
                bind: 'open-success-toast-modal'
              },
              profile_contact_detail_open_error_modal: {
                bind: 'open-error-toast-modal'
              },
              profile_contact_detail_add: {
                bind: 'profile-add-contact-detail'
              },
              profile_contact_detail_modify: {
                bind: 'profile-modify-contact-detail'
              },
              profile_contact_detail_reset_detail_modal: {
                bind: 'reset-selected-phone-detail'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_profile_contact_detail_show_close_confirm: {
                bind: 'show-close-confirm'
              }
            },
            params: {
              contactType: 'contactType',
              contactId: 'contactId',
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-customers-' + COUNTRY + '-dm',
        familyPath: 'glomo-customers-dm',
        properties: {
          host: CONFIG.globalServices.host,
          contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CONFIG.globalServices.versions.customers,
          apiAggregatorRequests: API_AGGREGATOR_REQUESTS[COUNTRY],
          native: !!CONFIG.native,
          phoneNumber: CONFIG.phoneNumberContact,
          disableContactDetailsOnLoad: true,
          cellsConnections: {
            in: {
              profile_contact_detail_add: {
                bind: 'addContactDetail'
              },
              profile_contact_detail_modify: {
                bind: 'modifyContactDetail'
              },
              profile_contact_detail_get_user_contacts: {
                bind: 'getCustomerContactsUnmasked'
              }
            },
            out: {
              profile_contact_detail_patch_error: {
                bind: 'profile-contact-detail-patch-error'
              },
              profile_contact_detail_delete_error: {
                bind: 'profile-contact-detail-delete-error'
              },
              profile_contact_detail_close_otp_modal: {
                bind: 'profile-contact-detail-close-otp-modal'
              },
              profile_contact_detail_wrong_otp_modal: {
                bind: 'profile-contact-detail-wrong-otp-error'
              },
              profile_contact_detail_set_customer_contacts: {
                bind: 'customer-contacts-details-changed'
              },
              navigation_contact_detail_to_profile: {
                bind: 'glomo-customers-contact-detail-reload-profile',
                link: {
                  page: 'profile',
                  cleanUntil: 'profile',
                  params: {
                    reloadContacDetails: 'reloadContacDetails'
                  }
                }
              },
              profile_contact_detail_add_contact_detail_success: {
                bind: 'contact-details-post-response-success'
              },
              global_contact_detail_modify_contact_detail_success: {
                bind: 'contact-details-patch-response-success'
              },
              profile_contact_detail_delete_contact_detail_success: {
                bind: 'contact-details-delete-response-success'
              },
              global_generic_error: {
                bind: 'customers-generic-error'
              },
              profile_contact_detail_duplicated_email_error: {
                bind: 'duplicated-email-try-again'
              },
              profile_contact_detail_duplicated_phone_error: {
                bind: 'duplicated-phone-try-again'
              },
              profile_contact_detail_modify_contact_detail_error: {
                bind: 'contact-details-patch-response-error'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              }
            },
            params: {
              user: 'global_user',
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          autoHide: true,
          time: 2000,
          type: 'success',
          cellsConnections: {
            in: {
              profile_contact_detail_open_success_modal: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  return base;
};
