'use strict';

module.exports = config => {
  const pageName = 'onboardingBbvaTrader';
  const localStorageApp = require('./common/_local-storage');
  const {
    getLanguage,
    getLocalCurrency,
    detailDownloadParams,
    pluginDatePicker,
    getMediumFormatDate,
    SPINNERSPHERICA: getSpinnerSpherica,
    headerHeightMinimum
  } = require('./common/helpers/_utils');

  const pages = require('./common/_pages')(config)(pageName);
  const datePicker = pluginDatePicker(config);
  const spinner = getSpinnerSpherica(config);
  const {
    onPageInit, invitationAccept, getAppStepBeneficiaries, getAppStepTermsAndCondi,
    getAppStepConfirmation, getAppStepOtp, getAppStepAppComplete, getAppStepAddBeneficiaries,
    getAppStepEditBeneficiaries, getAppStepDeleteBeneficiaries, getAppLinkAccount, getAppDownloadPdf, getServiceErrorOtp
  } = require('./analytics/_onboardingBbvaTrader')();

  const CMB_CONFIG = {
    operativeName: pageName,
    productName: 'Onboarding BBVA Trader',
    onlyClickToCall: true,
    useFeatureFlag: true,
    lastStep: 4
  };
  const CMB_CONFIG_ANALYTICS = {
    operativeName: pageName,
    steps: {
      2: '2 beneficiarios',
      3: '3 terminos y condiciones',
      4: '4 confirmacion',
      vincularCuenta: 'vincular cuenta'
    },
    levels: {
      1: 'contratar inversiones'
    }
  };
  const { analyticsCallMeBack, controllerCallMeBack } = require('./common/_redirectCallMeBack');

  const {
    native,
    nativeIos,
    globalServices: {
      host,
      requiredToken,
      versions: {
        accounts,
        customersV1,
        customerContactDetailsV1,
        businessDocument,
        mobileProducts,
        accountsV1,
        securityAccounts
      }
    }
  } = config;

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      drawerWidth: '100%',
      disableScrollLock: true,
      preventScrollWithOverlay: true,
      headerHeight: headerHeightMinimum,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      showConfirmInManualScroll: true
    }
  };

  const onboardingBbvaTraderFeature = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/stock-configuration-digital-onboarding-bbva-trader-mx',
    tag: 'stock-configuration-digital-onboarding-bbva-trader-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      locale: 'mx',
      nativeCalendar: native,
      iOSFixedHeader: nativeIos,
      requiredToken,
      requiredOTP: true,
      requiredListParticipants: true,
      accountsApiVersion: accounts,
      customersApiVersion: customersV1,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      documentTemplatesApiVersion: businessDocument,
      documentGenerateApiVersion: businessDocument,
      mobileProductsParticipantsParticipantStatusesApiVersion: mobileProducts,
      mobileProductsParticipantsParticipantRelatedParticipantsApiVersion: mobileProducts,
      securityAccountsApiVersion: securityAccounts,
      accountParticipantsApiVersion: accountsV1,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      detailDownloadConfig: detailDownloadParams,
      cellsConnections: {
        in: {
          __bridge_page_onboardingBbvaTrader: {
            bind: 'validateOfferContracting'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'validateOfferContracting'
          },
          global_storage_get_loginData_success: {
            bind: 'setClientId'
          },
          global_open_document_url_success: {
            bind: 'clearLoader'
          },
          global_open_document_url_error: {
            bind: 'clearLoader'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'setBirthDate'
          },
          global_client_id: {
            bind: 'setClientId'
          },
          global_financial_overview_success: {
            bind: 'financialOverview'
          },
          global_set_app_settings: {
            bind: 'setConfiguration'
          },
          sign_modal_cancelled_widgetErrorHandler: {
            bind: 'clearMessageInterval'
          },
          global_storage_set_btrader_onboarding_beneficiaries_folios_success: {
            bind: 'onFoliosSaved'
          },
          global_storage_get_btrader_onboarding_beneficiaries_folios_success: {
            bind: 'setBtraderOnboardingFolios'
          },
          onboarding_bbva_trader_personal_plus: {
            bind: 'isPersonalPlus'
          }
        },
        out: {
          onboarding_bbva_trader_get_app_next_step: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-step-complete'
          },
          global_open_document_url: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-request-post-document'
          },
          global_retargeting_initialize: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-page-init'
          },
          global_retargeting_onboarding_bbva_trader_set_init_custom_fields: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-page-init'
          },
          global_retargeting_form_submission: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-page-init'
          },
          onboarding_bbva_trader_receipt_template: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-set-receipt-template'
          },
          onboarding_bbva_trader_receipt_data: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-set-receipt-data'
          },
          onboarding_bbva_trader_share_receipt: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-share-receipt'
          },
          contract_product_section_oc_banner_onboarding_bbva_trader_clicked: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-offer-close',
            backStep: true
          },
          onboarding_bbva_trader_btrader_offer_accepted: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-success-modal-close',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          onboarding_bbva_trader_btrader_navigate: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-btrader-navigate',
            link: {
              page: 'bbvaTraderProductDetail',
              cleanUntil: 'bbvaTraderProductDetail',
              skipHistory: true,
              params: {
                productId: 'productId'
              }
            }
          },
          onboarding_bbva_trader_btrader_simple_code: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-btrader-simple-code'
          },
          global_action_launcher_dialer: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-error-modal-call-line'
          },
          global_nativeconnector_datepicker_launch: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-datepicker-show'
          },
          onboarding_bbva_trader_app_page_visit: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-page-init',
            analytics: onPageInit
          },
          onboarding_bbva_trader_get_app_started: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-invitation-accept',
            analytics: invitationAccept
          },
          onboarding_bbva_trader_get_app_step_beneficiaries: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-app-step-beneficiaries',
            analytics: getAppStepBeneficiaries
          },
          onboarding_bbva_trader_get_app_step_terms_and_conditions: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-app-step-terms-and-conditions',
            analytics: getAppStepTermsAndCondi
          },
          onboarding_bbva_trader_get_app_step_otp: {
            bind: 'signature-required-first-step-dm',
            analytics: getAppStepOtp
          },
          onboarding_bbva_trader_get_app_step_confirmation: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-app-step-confirmation',
            analytics: getAppStepConfirmation
          },
          onboarding_bbva_trader_get_app_step_app_complete: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-app-step-complete',
            analytics: getAppStepAppComplete
          },
          onboarding_bbva_trader_get_app_step_add_beneficiaries: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-beneficiaries-step-add-beneficiary-click',
            analytics: getAppStepAddBeneficiaries
          },
          onboarding_bbva_trader_get_app_step_edit_beneficiaries: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-beneficiaries-step-edit-beneficiary-click',
            analytics: getAppStepEditBeneficiaries
          },
          onboarding_bbva_trader_get_app_step_delete_beneficiaries: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-beneficiaries-step-delete-beneficiary-click',
            analytics: getAppStepDeleteBeneficiaries
          },
          onboarding_bbva_trader_get_app_link_account: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-link-account',
            analytics: getAppLinkAccount
          },
          onboarding_bbva_trader_get_app_download_pdf: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-download-pdf',
            analytics: getAppDownloadPdf
          },
          onboarding_bbva_trader_get_service_error_signing_in: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-error-signing-in',
            analytics: getServiceErrorOtp
          },
          financial_overview_refresh: {
            bind: 'stock-configuration-digital-onboarding-finished'
          },
          dashboard_offers_refresh: {
            bind: 'stock-configuration-digital-onboarding-refresh-offers'
          },
          global_set_in_storage: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-save-folios'
          },
          global_get_from_storage: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-get-folios'
          },
          global_retargeting_send_information_update: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-offer-close'
          },
          onboarding_bbva_trader_dm_contract_details: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-contract-details-set'
          },
          global_retargeting_onboarding_bbva_trader_contract_date: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-dm-contract-date-create'
          },
          global_call_me_back_initialize: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-page-init'
          },
          onboarding_bbva_trader__call_me_back_init_header_configuration: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-header-call-advisor'
          },
          onboarding_bbva_trader__call_me_back_init_sticky_configuration: {
            bind: 'stock-configuration-digital-onboarding-bbva-trader-mx-sticky-call-advisor'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const btraderController = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-controller-digital-onboarding-bbva-trader-mx',
    tag: 'bbva-controller-digital-onboarding-bbva-trader-mx',
    render: 'litElement',
    properties: {
      pageName,
      cellsConnections: {
        in: {
          onboarding_bbva_trader_get_app_started: {
            bind: 'incrementRtgStep'
          },
          onboarding_bbva_trader_get_app_next_step: {
            bind: 'incrementRtgStepAndCmbStep'
          },
          onboarding_bbva_trader_get_app_step_app_complete: {
            bind: 'incrementRtgStep'
          },
          onboarding_bbva_trader_dm_contract_details: {
            bind: 'setContractFolio'
          },
          global_financial_overview_success: {
            bind: 'setFinancialOverview'
          },
          global_feature_flag_collection_updated: {
            bind: 'setCollectionFlags'
          },
          global_login_success: {
            bind: 'setCustomerSegment'
          },
          global_login_success_indicators: {
            bind: 'setCustomerIndicators'
          },
          global_call_me_back_initialize: {
            bind: 'resetCmbStep'
          },
          onboarding_bbva_trader_get_app_link_account: {
            bind: 'setCmbLinkAccountStep'
          },
          global_storage_set_call_me_back_success: {
            bind: 'refreshCallMeBackData'
          }
        },
        out: {
          global_retargeting_go_next_step: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-go-next-step'
          },
          global_retargeting_set_folio: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-contract-folio'
          },
          global_retargeting_onboarding_bbva_trader_contrated_product: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-offer-finalize'
          },
          onboarding_bbva_trader_personal_plus: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-set-personal-plus'
          },
          onboarding_bbva_trader__call_me_back_set_current_step: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-update-cmb-step'
          },
          global_get_from_storage: {
            bind: 'bbva-controller-digital-onboarding-bbva-trader-mx-get-call-me-back-storage'
          }
        }
      }
    }
  };

  const shareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      infoImage: './images/spherica/darkInfoSpherica.svg',
      dataHourFormat: getMediumFormatDate(),
      sharedReceiptStyles: {
        sectionHeaderAmount: {
          'font-size': 'var(--cells-text-size-40, 2.5rem)',
          'font-weight': 'var(--cells-text-spherica-w, 350)'
        },
        receiptTitle: {
          'line-height': '2rem',
          'font-size': 'var(--cells-text-size-24, 1.5rem)',
          'font-weight': 'var(--cells-text-spherica-weight-medium, 500)',
          'word-spacing': '0.125rem',
          'letter-spacing': '0.03125rem'
        },
        receipt: {
          'width': '23.4375rem',
          'position': 'absolute',
          'padding': '1rem',
          'background-color': 'var(--bbva-spherica-grey-200, #F7F8F8)',
          'color': 'var(--bbva-spherica-midnight-blue, #070E46)'
        },
        info: {
          'padding': '1rem',
          'margin': '0.5rem 1rem 0 0',
          'background-color': 'var(--bbva-spherica-blue-light, #D6E9F8)',
          'font-weight': 'var(--cells-text-spherica-weight-book, 350)',
          'border-radius': '1rem',
          'display': 'flex',
          'align-items': 'flex-start'
        }
      },
      cellsConnections: {
        in: {
          onboarding_bbva_trader_receipt_template: {
            bind: 'addDynamicTemplate'
          },
          onboarding_bbva_trader_receipt_data: {
            bind: 'result'
          },
          onboarding_bbva_trader_share_receipt: {
            bind: 'captureReceipt'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const cmbController = controllerCallMeBack(CMB_CONFIG);
  const analyticsCmb = analyticsCallMeBack(CMB_CONFIG_ANALYTICS);

  const base = {
    hash: 'onboarding-bbva-trader',
    currentPage: {
      url: '/onboarding-bbva-trader'
    },
    pages,
    template,
    components: [
      spinner,
      onboardingBbvaTraderFeature,
      btraderController,
      shareGenericReceipt,
      cmbController,
      analyticsCmb
    ]
  };

  if (config.nativeShell) {
    base.components.push(datePicker);
  }

  localStorageApp.addOutStorageChannels(base.components, ['btrader_onboarding_beneficiaries_folios', 'call_me_back'], config);

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('stock-configuration-digital-onboarding-bbva-trader-mx');

  return base;
};


