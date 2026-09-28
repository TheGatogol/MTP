/* eslint-disable max-statements */
'use strict';
const { getLocalCurrency, useNames, createPrefixFromPageName, getLanguage, SPINNERSPHERICA: spinner, headerHeight } = require('./common/helpers/_utils');
const ANALYTICS = require('./analytics/_ocLoanOfferPage')();
const loanAmortizationScheduleSampleDocuments = require('./common/_loan-amortization-schedule-sample-documents');

module.exports = CONFIG => {
  const {
    pageName = 'ocLoanOfferPage',
    ocLoanOfferPage = require('./common/_pages')(CONFIG)(pageName),
    nativeIos = false,
    native = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        businessDocumentsV0,
        contactsBook,
        campaigns
      }
    }
  } = CONFIG;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const bbvaPhoneNumberAssistant = CONFIG.directory.Consumo;
  const maxSteps = 2;
  const businessDocumentsTemplateId = {
    TERMS_AND_CONDITIONS: [
      'oc-loan-offer-page-document-mag-contract',
      'oc-loan-offer-page-document-nom-insurance',
      'oc-loan-offer-page-document-nom-insurance-unemployment',
      'oc-loan-offer-page-document-nom-without-insurance',
      'oc-loan-offer-page-document-persona-loan-contract',
      'oc-loan-offer-page-document-persona-loan-insurance',
      'oc-loan-offer-page-document-persona-loan-without-insurance'
    ],
    INSURANCE: [
      'oc-loan-offer-page-document-life-insurance-policy',
      'oc-loan-offer-page-document-life-insurance-unemployment-policy'
    ]
  };
  const modalEventNamesLiterals = {
    INSURANCE: 'insurance-cost',
    INSURANCE_AND_UNEMPLOYMENT: 'insurance-and-unemployment-cost',
    COMMISSION: 'commission-cost',
    INTEREST_RATES: 'interest-rates',
    ANNUAL_RATE: 'annual-rate',
    CAT: 'cat-rate'
  };
  const productNameKeys = {
    PPI01: 'PPI01',
    PPI02: 'PPI02',
    PPI03: 'PPI03',
    PPI04: 'PPI04',
    NOM01: 'NOM01',
    NOM02: 'NOM02',
    MAG01: 'MAG01'
  };
  const loanOfferConstants = {
    ANNUAL_RATE_ID: 'TASA_ANUAL',
    REVIRE_RATE_ID: 'TASA_REVIRE',
    MONTHLY_RATE_ID: 'TASA_MENSUAL',
    SUSTAINABLE_RATE_ID: 'TASA_SOSTENIBLE',
    ANNUAL_RATE_ID_HIRING: 'TASA ANUAL',
    MONTHLY_RATE_ID_HIRING: 'TASA MENSUAL',
    CAT_RATE_ID: 'CAT',
    LOAN_BREAKDOWN_INSTALLMENT_ID: 'INSTALLMENT',
    COMMISSION_REVIRE_FEE_ID: 'COMISION REVIRE',
    COMMISSION_FEE_ID: 'COMISION',
    OPENING_COMMISSION_RATE_ID: 'COMISION APERTURA',
    MONTHLY_FRECUENCY_ID: 'MONTHLY',
    BI_WEEKLY_FRECUENCY_ID: 'BI-WEEKLY'
  };
  const [getChannelName, getLocaleName] = useNames(createPrefixFromPageName(pageName));
  const {
    ANNUAL_RATE_ID, REVIRE_RATE_ID,
    MONTHLY_RATE_ID, CAT_RATE_ID,
    LOAN_BREAKDOWN_INSTALLMENT_ID,
    SUSTAINABLE_RATE_ID,
    OPENING_COMMISSION_RATE_ID,
    ANNUAL_RATE_ID_HIRING, MONTHLY_RATE_ID_HIRING,
    COMMISSION_REVIRE_FEE_ID, COMMISSION_FEE_ID,
    MONTHLY_FRECUENCY_ID, BI_WEEKLY_FRECUENCY_ID
  } = loanOfferConstants;

  const {PPI01, PPI02, PPI03, PPI04, NOM01, NOM02, MAG01} = productNameKeys;
  const productNameLiterals = {
    [PPI01]: 'PBCCMPPI01',
    [PPI02]: 'PBCCMPPI02',
    [PPI03]: 'PBCCMPPI03',
    [PPI04]: 'PBCCMPPI04',
    [NOM01]: 'PBCCMNOM01',
    [NOM02]: 'PBCCMNOM02',
    [MAG01]: 'PBCCMMAG01'
  };

  const amountFormatConfig = {
    formatName: 'amount',
    targetFunctionName: 'formatToAmount',
    bindContext: true
  };

  const truncatedFormatConfig = {
    formatName: 'truncated',
    targetFunctionName: 'truncateNumber'
  };

  const percentageFormatConfig = {
    formatName: 'percentage',
    targetFunctionName: 'formatToPercentage',
    bindContext: true
  };

  const rateFormatsConfig = [
    percentageFormatConfig,
    truncatedFormatConfig
  ];

  const configToFormatCommission = {
    localeAfterSymbol: 'oc-loan-offer-page-commission-text-after-percentage-symbol'
  };

  const commissionsRateFormatsConfig = [
    {...percentageFormatConfig, additionalArgs: [ configToFormatCommission ]},
    truncatedFormatConfig
  ];

  const getFindPropertyExtractor = function({outerPath, pathToPropertyToCompare, valueToCompare}) {
    return {
      targetFunctionName: 'findPropertyByPath',
      additionalArgs: [ {outerPath, pathToPropertyToCompare, valueToCompare} ],
      bindContext: true
    };
  };

  const getNestedKeyExtractor = function(path) {
    return {
      targetFunctionName: 'c',
      additionalArgs: [ path ]
    };
  };

  const getSimpleHandlingConfig = function(path, pathToValue, sufixName = 'value') {
    return {
      extraction: getNestedKeyExtractor(path),
      processing: {
        [sufixName]: {
          pathToValue: pathToValue
        }
      }
    };
  };

  const getRateHandlingConfig = function(rateTypeId, sufixName = 'value') {
    return {
      extraction: getFindPropertyExtractor({
        outerPath: 'rates',
        pathToPropertyToCompare: 'rateType.id',
        valueToCompare: rateTypeId
      }),
      processing: {
        [sufixName]: {
          pathToValue: 'unit.percentage',
          formats: rateFormatsConfig
        }
      }
    };
  };

  const getFeeHandlingConfig = function(feeTypeId) {
    return {
      extraction: getFindPropertyExtractor({
        outerPath: 'fees.itemizeFees',
        pathToPropertyToCompare: 'feeType.id',
        valueToCompare: feeTypeId
      }),
      processing: {
        value: {
          pathToValue: 'percentage',
          formats: commissionsRateFormatsConfig
        }
      }
    };
  };

  const _localStorage = require('./common/_local-storage');

  const CMB_CONFIG = {
    operativeName: pageName,
    productName: 'Consumo',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    migrationGenesys: true,
    notGlobalInitConfigurationChannel: true
  };
  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      delayScrollTop: 300,
      className: `bg-core-blue ${ nativeIos ? 'ios-top-padding' : '' }`,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'bbva-core-blue',
      headerHeight,
      headerFixed: true,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName('show_confirm_channel')]: {
            bind: 'showConfirm'
          },
          [getChannelName('init_page')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
          [getChannelName('scroll_channel')]: {
            bind: 'opx-template-content-scroll'
          }
        },
        propertiesSpherica: {
          className: 'bg-light-grey header-fixed',
          extraHeaderClass: 'bbva-light-grey'
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      tokenName: requiredToken,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
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
          },
          oc_loan_offer_page__call_me_back_reset_step: {
            bind: 'reset'
          },
          oc_loan_offer_page__call_me_back_initialize: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      secondaryClass: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      rightSecondaryIconSize: '22',
      setTimeoutShowTooltip: '1000',
      tooltipBackgroundColor: 'white',
      tooltipTextColor: 'black',
      tooltipCloseColor: '#1973b8',
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'setColorsTooltip'
          },
          [getChannelName('header_title_name')]: {
            bind: 'titleName'
          },
          oc_loan_offer_page__call_me_back_change_header_tooltip_status: {
            bind: 'hasDisplayedTooltip'
          },
          oc_loan_offer_page__call_me_back_set_header_timeout_tooltip: {
            bind: 'setTimeoutShowTooltip'
          },
          oc_loan_offer_page__call_me_back_set_header_configuration: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('back_button')]: {
            bind: 'click-right-button'
          },
          navigation_about_info_to_page: {
            bind: 'click-left-button',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'click-left-button'
          },
          oc_loan_offer_page__call_me_back_init_header_configuration: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      secondaryClass: '',
      className: 'header--white header',
      rightIcon: 'coronita:close',
      rightIconText: 'bbva-header-main-close-aria-label',
      rightIconSize: '24',
      rightSecondaryIcon: 'coronita:telephone',
      rightIconSecondaryText: 'bbva-header-main-help-aria-label',
      rightSecondaryIconSize: '24',
      setTimeoutHideTooltip: '1000',
      titleName: 'instant-cash-header-title'
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'close-oc-loan-offer-operative',
      cellsConnections: {
        in: {
          [getChannelName('exit_operative')]: {
            bind: 'goBack'
          }
        },
        out: {
          global_exit_oc_loan_offer: {
            bind: 'close-oc-loan-offer-operative',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'close-oc-loan-offer-operative'
          }
        }
      }
    }
  };

  const opxDm = {
    zone: 'app__main',
    tag: 'glomo-opx-loan-offer-manager',
    type: 'DM',
    properties: {
      lang: CONFIG.lang,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      operativeName: 'OCLOANOFFER',
      cellsConnections: {
        in: {
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep'
          },
          [getChannelName('next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('init_page')]: {
            bind: 'setHeaderOriginColor'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('INVALID_AMOUNT_IN_OFFER')]: {
            bind: 'resetFollowingSteps'
          },
          [getChannelName('back_button')]: {
            bind: 'manageBackButton'
          },
          global_exit_oc_loan_offer: {
            bind: 'reset'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('show_confirm_channel')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('current_step')]: {
            bind: 'current-step-changed'
          }
        }
      }
    }
  };

  const globalApisCampaigns = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-campaigns',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: campaigns,
      cellsConnections: {
        in: {
          'received_get_offer_list': {
            bind: 'getOffers'
          }
        },
        out: {
          'received_set_offer_list': {
            bind: 'set-offers'
          },
          'received_set_offer_list_error': {
            bind: 'error-on-retrieve-campaigns'
          }
        }
      }
    }
  };

  const ocLoanOfferDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-loan-offer-dm',
    properties: {
      host,
      native,
      localCurrency: getLocalCurrency(),
      lang: getLanguage(),
      isLFOcLoanEnabled: true,
      isPercentOcLoanRevire: true,
      requiredToken,
      businessDocumentsApiVersion: businessDocumentsV0,
      comingPagesToNotifyOnOperativeExit: [ 'flexibleLineCredit' ],
      termsAndConditionsDocumentConfig: {
        modalTitleLocale: 'oc-loan-offer-page-terms-and-conditions-modal-header-title',
        possibleDocumentsTemplateId: businessDocumentsTemplateId.TERMS_AND_CONDITIONS
      },
      insuranceDocumentConfig: {
        modalTitleLocale: 'oc-loan-offer-page-insurance-header-title',
        possibleDocumentsTemplateId: businessDocumentsTemplateId.INSURANCE
      },
      sampleAmortizationScheduleDocument: loanAmortizationScheduleSampleDocuments,
      customerType: 'CSP',
      businessDocumentsProductId: 'CONSUMO',
      maximumAttemptsPerRequest: 3,
      modalEventNames: modalEventNamesLiterals,
      pathsToImages: {
        headerContent: './images/offers/loan/loan.svg',
        promotion: './images/offers/loan/bbva-tag-light.svg',
        successCase: './images/mortgage-success.svg',
        pendingCase: './images/mortgage-success.svg',
        incompleteCase: './images/Rejection.svg',
        rejectedCase: './images/Rejection.svg'
      },
      customPropsForPostHiringConfig: {
        successCaseValues: [ 'ACCEPTED' ],
        pendingCaseValues: [ 'PENDING' ],
        incompleteCaseValues: [ 'DECLINED' ],
        valueToValidatePath: 'status.reason.id'
      },
      defaultValuesByComponent: {
        stepLoanOfferObject: {
          amountData: {},
          customMessage: {},
          headerContent: {},
          keyInfo: [],
          keyInfoPayment: [],
          principalList: [],
          sliderProperty: {},
          sliderSelected: 0,
          stickyPayload: {},
          summaryTexts: {},
          hideHeader: false,
          sustainableConfig: {}
        },
        stepCardChecklistObject: {
          checkboxList: [],
          pdfData: []
        }
      },
      loanOfferProcessorConfig: {
        productConfig: {
          productPropertyName: 'product',
          pathToProductName: 'name',
          handling: {
            extraction: getNestedKeyExtractor('details.additionalProducts.0'),
            processing: {
              value: {
                pathToValue: 'amount.amount',
                formats: [ amountFormatConfig ]
              }
            }
          },
          productNameLiterals
        },
        dataHandling: {
          origin: getSimpleHandlingConfig('origin', 'id', 'id'),
          purposeGroup: getSimpleHandlingConfig('purposeGroup', 'id', 'id'),
          contractingType: getSimpleHandlingConfig('contractingType', 'id', 'id'),
          annualRate: getRateHandlingConfig(ANNUAL_RATE_ID),
          revireRate: getRateHandlingConfig(REVIRE_RATE_ID),
          mensualRate: getRateHandlingConfig(MONTHLY_RATE_ID),
          sustainableRate: getRateHandlingConfig(SUSTAINABLE_RATE_ID),
          catRate: getRateHandlingConfig(CAT_RATE_ID),
          loanBreakdownInstallment: {
            extraction: getFindPropertyExtractor({
              outerPath: 'details.loanBreakDown',
              pathToPropertyToCompare: 'id',
              valueToCompare: LOAN_BREAKDOWN_INSTALLMENT_ID
            }),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormatConfig ]
              }
            }
          },
          suggestedTerm: getSimpleHandlingConfig('details.suggestedTerm', 'number'),
          minimumTerms: getSimpleHandlingConfig('details.minimumTerms', 'number'),
          maximumTerms: getSimpleHandlingConfig('details.maximumTerms', 'number'),
          subproduct: getSimpleHandlingConfig('details.subproduct', 'id'),
          allowedTerms: {
            extraction: getNestedKeyExtractor('details.allowedTerms'),
            processing: {
              range: {
                customHandling: {
                  targetFunctionName: 'mapObjectArray',
                  additionalArgs: [ {mapPath: 'number', reverse: true} ],
                  bindContext: true
                }
              }
            }
          },
          suggestedAmount: getSimpleHandlingConfig('details.suggestedAmount', 'amount'),
          minimumAmount: getSimpleHandlingConfig('details.minimumAmount', 'amount'),
          maximumAmount: getSimpleHandlingConfig('details.maximumAmount', 'amount'),
          commissionRevire: {
            conditionalByProduct: [ PPI04 ],
            ...getFeeHandlingConfig(COMMISSION_REVIRE_FEE_ID)
          },
          commission: {
            conditionalByProduct: [ PPI04 ],
            ...getFeeHandlingConfig(COMMISSION_FEE_ID)
          }
        },
        afterDataHandling: {
          mapped: {
            frecuencyLocale: {
              map: {
                [MONTHLY_FRECUENCY_ID]: 'oc-loan-offer-page-monthly-terms-unit',
                [BI_WEEKLY_FRECUENCY_ID]: 'oc-loan-offer-page-bi-weekly-terms-unit'
              },
              pathToMapper: 'suggestedTerm.frequency'
            },
            productTypeLocale: {
              map: {
                [PPI01]: 'oc-loan-offer-page-product-type-name-loan-insurance',
                [PPI02]: 'oc-loan-offer-page-product-type-name-loan',
                [PPI03]: 'oc-loan-offer-page-product-type-name-payroll-credit',
                [PPI04]: 'oc-loan-offer-page-product-type-name-loan',
                [NOM01]: 'oc-loan-offer-page-product-type-name-payroll-credit',
                [NOM02]: 'oc-loan-offer-page-product-type-name-payroll-credit-insurance',
                [MAG01]: 'oc-loan-offer-page-product-type-name-payroll-credit'
              },
              pathToMapper: 'productNameKey'
            },
            headerTitleLocale: {
              map: {
                [PPI01]: 'oc-loan-offer-page-title-loan',
                [PPI02]: 'oc-loan-offer-page-title-loan',
                [PPI03]: 'oc-loan-offer-page-title-payroll',
                [PPI04]: 'oc-loan-offer-page-title-loan',
                [NOM01]: 'oc-loan-offer-page-title-payroll',
                [NOM02]: 'oc-loan-offer-page-title-payroll',
                [MAG01]: 'oc-loan-offer-page-title-payroll'
              },
              pathToMapper: 'productNameKey'
            },
            headerDescriptionLocale: {
              map: {
                [PPI01]: 'oc-loan-offer-page-title-description-loan',
                [PPI02]: 'oc-loan-offer-page-title-description-loan',
                [PPI03]: 'oc-loan-offer-page-title-description-payroll',
                [PPI04]: 'oc-loan-offer-page-title-description-loan',
                [NOM01]: 'oc-loan-offer-page-title-description-payroll',
                [NOM02]: 'oc-loan-offer-page-title-description-payroll',
                [MAG01]: 'oc-loan-offer-page-title-description-payroll'
              },
              pathToMapper: 'productNameKey'
            }
          }
        }
      },
      loanOfferSimulationProcessorConfig: {
        dataHandling: {
          catRate: {
            extraction: getNestedKeyExtractor('rates.0'),
            processing: {
              value: {
                pathToValue: 'unit.percentage',
                formats: [ amountFormatConfig ]
              }
            }
          },
          product: {
            extraction: getNestedKeyExtractor('additionalProducts.0'),
            processing: {
              value: {
                pathToValue: 'amount.amount',
                formats: [ amountFormatConfig ]
              }
            }
          },
          loanBreakdownInstallment: {
            extraction: getFindPropertyExtractor({
              outerPath: 'loanBreakDown',
              pathToPropertyToCompare: 'id',
              valueToCompare: LOAN_BREAKDOWN_INSTALLMENT_ID
            }),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormatConfig ]
              }
            }
          },
          terms: getSimpleHandlingConfig('terms', 'number'),
          initialAmount: getSimpleHandlingConfig('initialAmount', 'amount')
        }
      },
      loanOfferHiringProcessorConfig: {
        dataHandling: {
          contractingDate: {
            extraction: {
              targetFunctionName: 'extractDateWithTime',
              additionalArgs: [ 'contractingDate' ],
              bindContext: true
            }
          },
          loanAmount: {extraction: getNestedKeyExtractor('initialAmounts.0.amount')},
          termAmount: {extraction: getNestedKeyExtractor('terms.number')},
          operationNumber: {extraction: getNestedKeyExtractor('operationNumber')},
          isContractedBySustainable: {extraction: getNestedKeyExtractor('isContractedBySustainable')},
          annualRate: getRateHandlingConfig(ANNUAL_RATE_ID_HIRING),
          mensualRate: getRateHandlingConfig(MONTHLY_RATE_ID_HIRING),
          openingCommission: {
            extraction: getFindPropertyExtractor({
              outerPath: 'rates',
              pathToPropertyToCompare: 'rateType.id',
              valueToCompare: OPENING_COMMISSION_RATE_ID
            }),
            processing: {
              value: {
                pathToValue: 'unit.amount',
                formats: [ amountFormatConfig ]
              }
            }
          },
          insuranceCost: {
            extraction: getNestedKeyExtractor('additionalProducts.0'),
            processing: {
              value: {
                pathToValue: 'amount.amount',
                formats: [ amountFormatConfig ]
              }
            }
          }
        }
      },
      phoneNumberAdvisor: bbvaPhoneNumberAssistant,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigationDetailFromBridge'
          },
          'received_set_offer_list': {
            bind: 'offersReceived'
          },
          'received_set_offer_list_error': {
            bind: 'offersReceivedError'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'notificationCenterData'
          },
          global_financial_overview_details: {
            bind: 'globalCacheStorage'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFlagCollection'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          [getChannelName('to_go_summary')]: {
            bind: 'setSummary'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          dashboard_customer_email: {
            bind: 'emailCache'
          },
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          oc_offer_channel: {
            bind: 'handleOfferPayload'
          },
          flexibleCreditLine_navigate_to_loan_offer: {
            bind: 'handleOfferPayload'
          },
          global_exit_oc_loan_offer: {
            bind: 'reset'
          },
          global_opened_modal: {
            bind: 'hasAnyOpenModal'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          [getChannelName('modals_event')]: {
            bind: 'onHelpIconClicked'
          },
          [getChannelName('back_button')]: {
            bind: 'openConfirmModal'
          },
          [getChannelName('amount_input_blur_with_valid_amount')]: {
            bind: 'onAmountInputBlurWithValidAmount'
          },
          [getChannelName('amount_input_blur')]: {
            bind: 'onAmountInputBlurWithValidAmount'
          },
          [getChannelName('amount_selected_changed')]: {
            bind: 'onAmountValueChanged'
          },
          [getChannelName('slider_value_change_after_drag')]: {
            bind: 'performTermSimulation'
          },
          [getChannelName('slider_input_current_value')]: {
            bind: 'onSliderInputCurrentValueChange'
          },
          [getChannelName('slider_input_drag_status')]: {
            bind: 'sliderInputDragStatus'
          },
          [getChannelName('get_loan_offer_detail_success')]: {
            bind: 'onGetLoanOfferDetailSuccess'
          },
          [getChannelName('get_loan_offer_detail_error')]: {
            bind: 'askForRetryWrapper'
          },
          [getChannelName('post_quotations_simulate_success')]: {
            bind: 'onPostQuotationsSimulateSuccess'
          },
          [getChannelName('post_quotations_simulate_error')]: {
            bind: 'askForRetryWrapper'
          },
          [getChannelName('post_loans_success')]: {
            bind: 'onPostLoansSuccess'
          },
          [getChannelName('post_loans_error')]: {
            bind: 'askForRetryWrapper'
          },
          global_oc_loan_offer_page_exit_modal_accept: {
            bind: 'exitPage'
          },
          global_oc_loan_offer_page_error_modal_accept: {
            bind: 'exitPage'
          },
          global_oc_loan_offer_page_retry_modal_accept: {
            bind: 'onRetryModalAccept'
          },
          global_oc_loan_offer_page_retry_modal_cancel: {
            bind: 'exitPage'
          },
          global_oc_loan_offer_page_incomplete_modal_accept: {
            bind: 'successfulPageExit'
          },
          global_oc_loan_offer_page_incomplete_modal_cancel: {
            bind: 'successfulPageExit'
          },
          global_oc_loan_offer_page_atm_locator_clicked: {
            bind: 'onAtmLocatorLinkClicked'
          },
          [getChannelName('close_summary')]: {
            bind: 'hireLoan'
          },
          [getChannelName('hide_header')]: {
            bind: 'hideHeader'
          },
          [getChannelName('show_header')]: {
            bind: 'showHeader'
          },
          [getChannelName('open_insurance_coverage_modal')]: {
            bind: 'openInsuranceModal'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'openTermsAndConditionModal'
          },
          [getChannelName('open_credit_bureau_modal')]: {
            bind: 'openCreditBureauModal'
          },
          oc_loan_offer_page_open_amortization_schedule_modal: {
            bind: 'openAmortizationScheduleModal'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'onAmountInputFocus'
          },
          [getChannelName('set_customer_data')]: {
            bind: 'onCustomerContactsSuccess'
          },
          [getChannelName('customer_error_service')]: {
            bind: 'onCustomerContactsError'
          },
          [getChannelName('revire_modal_clicked')]: {
            bind: 'sendModalRevire'
          },
          [getChannelName('comission_revire_modal_clicked')]: {
            bind: 'sendModalRevire'
          },
          [getChannelName('validate_modal_revire')]: {
            bind: 'validateModalRevire'
          },
          [getChannelName('simulator_data')]: {
            bind: 'sendDataToSimulator'
          },
          [getChannelName('request_amortization_schedule_sample_url')]: {
            bind: 'getAmortizationSchedulePdf'
          }
        },
        out: {
          'received_get_offer_list': {
            bind: 'get-offer-list'
          },
          [getChannelName('get_customer_contact')]: {
            bind: 'request-customer-contacts'
          },
          navigation_to_dashboard: {
            bind: 'send-to-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          global_oc_loan_offer_page_open_modal: {
            bind: 'open-modal'
          },
          open_modal_header_text: {
            bind: 'open-modal-header-text'
          },
          open_modal_title_text: {
            bind: 'open-modal-title-text'
          },
          open_modal_description_text: {
            bind: 'open-modal-description-text'
          },
          open_modal_full_height: {
            bind: 'open-modal-full-height'
          },
          open_modal_title_icon: {
            bind: 'open-modal-title-icon'
          },
          open_modal_spherica: {
            bind: 'open-modal-spherica'
          },
          open_modal_type: {
            bind: 'open-modal-modal-type'
          },
          open_modal_button_primary: {
            bind: 'open-modal-button-primary'
          },
          open_modal_button_secondary: {
            bind: 'open-modal-button-secondary'
          },
          open_modal_fixed_footer: {
            bind: 'open-modal-fixed-footer'
          },
          [getChannelName('get_loan_offer_detail')]: {
            bind: 'get-loan-offer-detail'
          },
          [getChannelName('simulate_offer')]: {
            bind: 'simulate-offer'
          },
          [getChannelName('create_loan')]: {
            bind: 'create-loan'
          },
          [getChannelName('set_step_loan_offer_properties')]: {
            bind: 'set-step-loan-offer-properties'
          },
          [getChannelName('notify_step_loan_offer_path')]: {
            bind: 'notify-step-loan-offer-path'
          },
          [getChannelName('set_step_card_checklist_properties')]: {
            bind: 'set-step-card-checklist-properties'
          },
          [getChannelName('notify_step_card_checklist_path')]: {
            bind: 'notify-step-card-checklist-path'
          },
          [getChannelName('header_title_name')]: {
            bind: 'set-header-title-name'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_open_document_url: {
            bind: 'request-open-pdf-from-url'
          },
          global_navigation_to_atms: {
            bind: 'open-atm-locator'
          },
          [getChannelName('DOC_TITLE')]: {
            bind: 'set-pdf-modal-title'
          },
          [getChannelName('DOC_CONTENT')]: {
            bind: 'set-pdf-modal-base-src'
          },
          [getChannelName('OPEN_PDF_MODAL')]: {
            bind: 'open-pdf-modal'
          },
          [getChannelName('set_principal_account')]: {
            bind: 'set-principal-account'
          },
          set_oc_loan_offer_success_page_back_navigation: {
            bind: 'coming-page-event-name-transmitted'
          },
          set_oc_loan_offer_success_page_header_title_name: {
            bind: 'set-success-page-title-name'
          },
          set_oc_loan_offer_success_page_class_name: {
            bind: 'set-success-page-class-name'
          },
          set_oc_loan_offer_success_page_type: {
            bind: 'set-success-page-type'
          },
          set_oc_loan_offer_success_page_header_class_name: {
            bind: 'set-success-page-header-class-name'
          },
          set_oc_loan_offer_success_page_result: {
            bind: 'init-and-open-success-page',
            link: {
              page: 'ocLoanOfferSuccess'
            }
          },
          [getChannelName('exit_operative')]: {
            bind: 'exit-operative'
          },
          flexibleCreditLine_exit_oc_loan_offer_to_flexible_line: {
            bind: 'exit-notification-for-flexibleLineCredit'
          },
          flexibleCreditLine_navigation_from_oc_loan_offer: {
            bind: 'successful-exit-notification-for-flexibleLineCredit'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset-operative'
          },
          global_hanlder_native_back_button: {
            bind: 'close-current-open-modal'
          },
          [getChannelName('set_summary_detail')]: {
            bind: 'set-summary-data'
          },
          show_label_step_sumary: {
            bind: 'set-visible-imaginari-step'
          },
          [getChannelName('loan_offer_processor_changed')]: {
            bind: 'loan-offer-processor-changed'
          },
          [getChannelName('last_simulated_amount_changed')]: {
            bind: 'last-simulated-amount-changed'
          },
          [getChannelName('last_simulated_term_changed')]: {
            bind: 'last-simulated-term-changed'
          },
          [getChannelName('current_monthly_payment_changed')]: {
            bind: 'current-monthly-payment-changed'
          },
          [getChannelName('loan_hiring_case_notification')]: {
            bind: 'notify-loan-hiring-case'
          },
          [getChannelName('INVALID_AMOUNT_IN_OFFER')]: {
            bind: 'invalid-amount-in-offer'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'contine-have-been-pressed'
          },
          [getChannelName('set_properties_modal_revire')]: {
            bind: 'send-properties-modal-help'
          },
          'oc-loan-offer-page-set_properties_modal_revire_spherica': {
            bind: 'send-properties-modal-help-spherica'
          },
          [getChannelName('send_promotion_applied')]: {
            bind: 'send-promotion-applied'
          },
          [getChannelName('analytics_revire')]: {
            bind: 'offer-revire'
          },
          [getChannelName('improved_offer')]: {
            bind: 'send-improved-offer-type'
          },
          [getChannelName('close_modal_help')]: {
            bind: 'set-modal-opened'
          },
          [getChannelName('loan_use')]: {
            bind: 'send-sustainable-loan'
          },
          oc_loan_offer_page_go_to_simulator: {
            bind: 'send-data-to-simulator',
            link: {
              page: 'loanSustainableRateSimulator'
            },
            analytics: ANALYTICS.SUSTAINABLE_LOAN_SIMULATOR
          },
          global_open_document_base64: {
            bind: 'show-document-event'
          },
          global_retargeting_set_step_offer_properties: {
            bind: 'set-step-loan-offer-properties'
          },
          global_retargeting_contracted_product: {
            bind: 'init-and-open-success-page'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    },
    propertiesSpherica: {
      isSpherica: sphericaPageUtils.isSpherica(),
      pathsToImages: {
        headerContent: './images/spherica/ocLoan/loan-glass.svg',
        promotion: './images/spherica/ocLoan/bbva-tag-light-spherica.svg',
        successCase: './images/mortgage-success.svg',
        pendingCase: './images/mortgage-success.svg',
        incompleteCase: './images/Rejection.svg',
        rejectedCase: './images/Rejection.svg'
      }
    }
  };

  const stepLoan = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-loan-offer',
    tagSpherica: 'glomo-step-loan-offer-spherica',
    properties: {
      className: 'header-core-blue standard-message sticky-margin unpadded loan-offer-icon',
      stepTitleSpherica: getLocaleName('step-title'),
      isSpherica: sphericaPageUtils.isSpherica(),
      changeLabel: getLocaleName('change-label'),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      numberSteps: 'bbva-feature-investment-withdrawal-and-contribution-multistep-withdrawal-type-step-number',
      hideCurrentStepLabel: true,
      hasStickyAmount: true,
      enableSticky: true,
      showButtonSticky: false,
      notInitializeWithAttached: true,
      stepId: 'oc-loan-offer',
      withOutMarginMessage: 'with-out-x-margin',
      currentStep: 1,
      maxSteps: maxSteps,
      active: true,
      bottomSeparator: true,
      middleSeparator: false,
      topSeparator: false,
      secondaryButtonEnable: true,
      messageInfo: false,
      messageAmounts: {
        message: 'oc-loan-offer-page-message-amounts',
        specialClass: 'margin-icon-message-spherica'
      },
      messageBox: {
        class: 'margin-message-box info-message-title-weight',
        icon: 'coronita:alarm',
        title: 'oc-loan-offer-page-box-title',
        message: 'oc-loan-offer-page-box-message'
      },
      mainText: {
        title: sphericaPageUtils.isSpherica() ? getLocaleName('title-2-spherica') : getLocaleName('title-2-spherica'),
        description: getLocaleName('title-description-2')
      },
      iconsDark: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_step_loan_offer_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('notify_step_loan_offer_path')]: {
            bind: 'notifyPath'
          },
          [getChannelName('scroll_channel')]: {
            bind: 'templateContentScroll'
          },
          global_call_me_back_show_secondary_button: {
            bind: 'showCallMeBack'
          },
          oc_loan_offer_page__call_me_back_show_sticky_button: {
            bind: 'stickyMessage'
          },
          [getChannelName('send_promotion_applied')]: {
            bind: 'setProperties'
          },
          global_oc_loan_offer_page_exit_modal_accept: {
            bind: 'resaizeModalInit'
          },
          show_label_step_sumary: {
            bind: 'showTitleStepThird'
          },
          'oc-loan-offer-page-dont_show_resumen_title_channel': {
            bind: 'showTitleStepThird'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'go-next-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('show_header')]: {
            bind: 'go-next-step'
          },
          [getChannelName('hide_header')]: {
            bind: 'change-pressed'
          },
          oc_loan_offer_page__call_me_back_init_sticky_configuration: {
            bind: 'sticky-button-clicked'
          },
          [getChannelName('amount_input_blur_with_valid_amount')]: {
            bind: 'valid-amount-input-focus-out'
          },
          [getChannelName('amount_input_blur')]: {
            bind: 'dispatched-blur'
          },
          [getChannelName('amount_selected_changed')]: {
            bind: 'amount-selected-changed'
          },
          [getChannelName('slider_value_change_after_drag')]: {
            bind: 'knob-end-slider-value-change'
          },
          [getChannelName('modals_event')]: {
            bind: 'modals-event'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'input-focus'
          },
          [getChannelName('slider_input_current_value')]: {
            bind: 'current-slider-value'
          },
          [getChannelName('slider_input_drag_status')]: {
            bind: 'slider-input-drag-status-change'
          },
          [getChannelName('continue_hiring_button_tapped')]: {
            bind: 'btn-continue-hiring-apply'
          },
          [getChannelName('step_change_pressed')]: {
            bind: 'change-pressed'
          },
          [getChannelName('revire_modal_clicked')]: {
            bind: 'revire-help-modal-info'
          },
          [getChannelName('comission_revire_modal_clicked')]: {
            bind: 'comission-revire-help-modal-info'
          },
          [getChannelName('go_to_catalog')]: {
            bind: 'naviagate-to-catalog',
            link: {
              page: 'loanSustainableProductList'
            },
            analytics: ANALYTICS.SUSTAINABLE_LOAN_CATALOG
          },
          [getChannelName('request_amortization_schedule_sample_url')]: {
            bind: 'amortization-schedule-sample-pressed'
          },
          [getChannelName('simulator_data')]: {
            bind: 'navigate-to-simulator'
          },
          [getChannelName('custom_fields_loan_use')]: {
            bind: 'loan-use'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          },
          visible_next_step_loan_offer: {
            bind: 'visible-next-step'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: '',
      class: 'cells-step-container immediate-personal-loan-and-payroll-credit',
      className: 'header-core-blue standard-message sticky-margin unpadded loan-offer-icon loan-offer-step',
      changeLabel: getLocaleName('change-label-spherica'),
      summaryTexts: {
        summaryAmount: ''
      },
      sustaiableHeaderClass: 'align-text-button-left',
      imageHeight: 168,
      imageWidth: 168,
      resumenText: 'oc-loan-offer-page-title-resument-text',
      resumenTextStep: 'oc-loan-offer-page-title-resument-text-step',
      mainText: {
        classTextDescription: 'cells-text-description-spherica-loan-title',
        title: sphericaPageUtils.isSpherica() ? getLocaleName('title-2-spherica') : getLocaleName('title-2'),
        description: getLocaleName('title-description-2')
      }
    }
  };

  const stepChecklist = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    properties: {
      className: 'custom-checkbox-buttons focus-checkbox-shadow-color step-header-title-top-spacing',
      consultText: getLocaleName('terms-consult-text'),
      changeLabel: getLocaleName('terms-change-label'),
      stepId: 'oc-loan-offer-terms-and-conditions',
      currentStep: 2,
      maxSteps: 3,
      hideChangeDataBox: true,
      collapsed: false,
      showButton: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_step_card_checklist_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('notify_step_card_checklist_path')]: {
            bind: 'notifyPath'
          },
          global_exit_oc_loan_offer: {
            bind: 'reset'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          },
          visible_next_step_loan_offer: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('to_go_summary')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('show_header')]: {
            bind: 'change-pressed'
          },
          [getChannelName('open_insurance_coverage_modal')]: {
            bind: 'request-insurance-coverage'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'request-terms-and-conditions'
          },
          [getChannelName('open_credit_bureau_modal')]: {
            bind: 'request-credit-bureau'
          },
          oc_loan_offer_page_open_amortization_schedule_modal: {
            bind: 'request-amortization-schedule'
          },
          [getChannelName('focus_in')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('step_change_pressed')]: {
            bind: 'onStepChangeLabelPressed'
          },
          'oc-loan-offer-page-dont_show_resumen_title_channel': {
            bind: 'dont-show-resumen-title'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      hiddenStep: true,
      isButtonPrimary: true,
      showCurrentStepLabel: true,
      variant: 'primary-alt',
      variantListFile: 'primary-alt',
      stepTitle: 'oc-loan-offer-page-terms-title',
      additionalIconClass: 'cells-atom-icon-spherica-custom-size',
      collapsedTitle: 'cells-step-card-checklist-contract-step-title',
      buttonContinueAditionalClass: 'button-top default full'
    }
  };

  const summary = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      className: 'aqua-dark-button',
      cellsConnections: {
        in: {
          [getChannelName('set_summary_detail')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('close_summary')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive'
    }
  };

  const cellsDmGlobalApiLoans = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-loans',
    properties: {
      host,
      loansApiVersion: 1,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_loan_offer_detail')]: {
            bind: 'getOfferDetail'
          },
          [getChannelName('simulate_offer')]: {
            bind: 'postOfferDetailQuotationsSimulate'
          },
          [getChannelName('create_loan')]: {
            bind: 'postLoan'
          }
        },
        out: {
          [getChannelName('get_loan_offer_detail_success')]: {
            bind: 'set-offer-detail'
          },
          [getChannelName('get_loan_offer_detail_error')]: {
            bind: 'error-on-get-loan-offer-detail'
          },
          [getChannelName('post_quotations_simulate_success')]: {
            bind: 'get-offer-detail-quotations-simulate'
          },
          [getChannelName('post_quotations_simulate_error')]: {
            bind: 'error-on-post-loan-offer-detail-quotations-simulate'
          },
          [getChannelName('post_loans_success')]: {
            bind: 'post-loans'
          },
          [getChannelName('post_loans_error')]: {
            bind: 'error-on-post-loan'
          },
          global_retargeting_get_offer_detail: {
            bind: 'set-offer-detail'
          },
          global_retargeting_get_quotations_simulate: {
            bind: 'get-offer-detail-quotations-simulate'
          }
        }
      }
    }
  };

  const glomoCustomersMxDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host,
      contactsBookApiVersion: contactsBook,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_customer_contact')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [getChannelName('set_customer_data')]: {
            bind: 'set-customer-contacts'
          },
          [getChannelName('customer_error_service')]: {
            bind: 'error-on-get-customer-contacts'
          }
        },
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };

  const {
    BINDED_LITERALS, ADVANCED_MARK_OTP_ERROR, ADVANCED_MARK_TERMS_AND_CONDITIONS,
    APP_PAGE_VISIT, APP_STARTED, APP_STEP_2, APP_STEP_3, APP_STEP_4,
    APP_COMPLETED_HIRED, APP_COMPLETED_REJECTED, APP_COMPLETED_IN_REVIEW,
    MARK_ANNUAL_RATE, MARK_CAT, MARK_COMMISSION, MARK_REVIRE_PROMOTION, INTERNAL_LINK_ASSISTANCE_MANAGER, INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER
  } = ANALYTICS;
  const stepsAnalyticsEventNameConfig = {
    2: 'app-step-2-terms-and-conditions',
    last: 'app-step-3-confirmation',
    sign: 'app-step-4-otp'
  };
  const glomoAnalyticsLoanOfferManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-loan-offer-manager',
    familyPath: 'glomo-loan-offer-dm',
    properties: {
      appStartedText: '',
      localCurrency: getLocalCurrency(),
      config: {
        steps: stepsAnalyticsEventNameConfig
      },
      termFrecuencyToAnalyticLiteral: {
        [MONTHLY_FRECUENCY_ID]: BINDED_LITERALS.PRODUCT_PAYMENT_TYPE_MONTHLY,
        [BI_WEEKLY_FRECUENCY_ID]: BINDED_LITERALS.PRODUCT_PAYMENT_TYPE_BI_WEEKLY
      },
      termFrecuencyToDaysFactor: {
        [MONTHLY_FRECUENCY_ID]: 30,
        [BI_WEEKLY_FRECUENCY_ID]: 15
      },
      productNameKeyToAnalyticLiteral: {
        [PPI01]: BINDED_LITERALS.PRODUCT_NAME_PPI,
        [PPI02]: BINDED_LITERALS.PRODUCT_NAME_PPI,
        [PPI03]: BINDED_LITERALS.PRODUCT_NAME_PPI,
        [PPI04]: BINDED_LITERALS.PRODUCT_NAME_PPI,
        [NOM01]: BINDED_LITERALS.PRODUCT_NAME_NOM,
        [NOM02]: BINDED_LITERALS.PRODUCT_NAME_NOM,
        [MAG01]: BINDED_LITERALS.PRODUCT_NAME_NOM
      },
      modalEventNamesToAnalyticLiteral: {
        [modalEventNamesLiterals.commission]: BINDED_LITERALS.APPLICATION_STEP_COMMISSION,
        [modalEventNamesLiterals.insurance]: BINDED_LITERALS.APPLICATION_STEP_INSURANCE,
        [modalEventNamesLiterals.insuranceAndUnemployment]: BINDED_LITERALS.APPLICATION_STEP_INSURANCE_AND_UNEMPLOYMENT,
        [modalEventNamesLiterals.annualRate]: BINDED_LITERALS.APPLICATION_STEP_ANNUAL_RATE
      },
      bindedLiterals: BINDED_LITERALS,
      modalEventNames: modalEventNamesLiterals,
      cellsConnections: {
        in: {
          [getChannelName('close_summary')]: {
            bind: 'setSignatureType'
          },
          global_exit_oc_loan_offer: {
            bind: 'reset'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          },
          [getChannelName('set_step_loan_offer_properties')]: {
            bind: 'handleUiUpdates'
          },
          [getChannelName('all_steps_collapsed')]: {
            bind: 'onAllStepsCollapsed'
          },
          [getChannelName('current_step')]: {
            bind: 'onCurrentStepChanged'
          },
          [getChannelName('step_change_pressed')]: {
            bind: 'onStepChangeLabelPressed'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'onLastStepWrapper'
          },
          [getChannelName('loan_offer_processor_changed')]: {
            bind: 'persistLoanOfferProcessorProps'
          },
          [getChannelName('last_simulated_amount_changed')]: {
            bind: 'requestedAmount'
          },
          [getChannelName('last_simulated_term_changed')]: {
            bind: 'requestedTerm'
          },
          [getChannelName('current_monthly_payment_changed')]: {
            bind: 'monthlyPayment'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'onAmountInputFocus'
          },
          [getChannelName('slider_input_drag_status')]: {
            bind: 'onSliderDragStatusChanged'
          },
          [getChannelName('modals_event')]: {
            bind: 'onHelpIconClicked'
          },
          CALL_ME_BACK_START: {
            bind: 'onCallmeBackLinkTapped'
          },
          CMB_ASSISTANCE_MANAGER: {
            bind: 'callMeBackAssistanceManagerLink'
          },
          [getChannelName('continue_hiring_button_tapped')]: {
            bind: 'onContinueHiringButtonTapped'
          },
          [getChannelName('post_loans_error')]: {
            bind: 'fireAdvancedMarkOtpError'
          },
          [getChannelName('open_terms_and_conditions_modal')]: {
            bind: 'onPdfModalOpenedPropChanged'
          },
          [getChannelName('loan_hiring_case_notification')]: {
            bind: 'onLoanHiringNotification'
          },
          [getChannelName('revire_modal_clicked')]: {
            bind: 'fireMarkRevirePromotion'
          },
          [getChannelName('analytics_revire')]: {
            bind: 'promotionalCode'
          },
          [getChannelName('improved_offer')]: {
            bind: 'improvedOffer'
          },
          [getChannelName('custom_fields_loan_use')]: {
            bind: 'persistLoanUse'
          },
          [getChannelName('loan_use')]: {
            bind: 'loanUse'
          },
          [getChannelName('go_to_catalog')]: {
            bind: 'sustainableCatalog'
          },
          [getChannelName('go_to_simulator')]: {
            bind: 'sustainableSimulator'
          }
        },
        out: {
          [getChannelName('analytics_advanced_mark_terms_and_conditions')]: {
            bind: 'analytics-advanced-mark-terms-and-conditions',
            analytics: ADVANCED_MARK_TERMS_AND_CONDITIONS
          },
          [getChannelName('analytics_advanced_mark_otp_error')]: {
            bind: 'analytics-advanced-mark-otp-error',
            analytics: ADVANCED_MARK_OTP_ERROR
          },
          [getChannelName('analytics_mark_annual_rate')]: {
            bind: 'analytics-mark-annual-rate',
            analytics: MARK_ANNUAL_RATE
          },
          [getChannelName('analytics_mark_cat')]: {
            bind: 'analytics-mark-cat',
            analytics: MARK_CAT
          },
          [getChannelName('analytics_mark_commission')]: {
            bind: 'analytics-mark-commission',
            analytics: MARK_COMMISSION
          },
          [getChannelName('analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: APP_STARTED
          },
          [getChannelName('analytics_app_step_2')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig[2]}`,
            analytics: APP_STEP_2
          },
          [getChannelName('analytics_app_step_3')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig.last}`,
            analytics: APP_STEP_3
          },
          [getChannelName('analytics_app_step_4')]: {
            bind: `analytics-${stepsAnalyticsEventNameConfig.sign}`,
            analytics: APP_STEP_4
          },
          [getChannelName('analytics_app_completed_hired')]: {
            bind: 'analytics-app-completed-hired',
            analytics: APP_COMPLETED_HIRED
          },
          [getChannelName('analytics_app_completed_rejected')]: {
            bind: 'analytics-app-completed-rejected',
            analytics: APP_COMPLETED_REJECTED
          },
          [getChannelName('analytics_app_completed_in_review')]: {
            bind: 'analytics-app-completed-in-review',
            analytics: APP_COMPLETED_IN_REVIEW
          },
          [getChannelName('analytics_internal_link')]: {
            bind: 'analytics-internal-link-secondary-button',
            analytics: INTERNAL_LINK_ASSISTANCE_MANAGER
          },
          [getChannelName('analytics_internal_link_call_header')]: {
            bind: 'analytics-internal-link-call-header',
            analytics: INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER
          },
          [getChannelName('analytics_mark_revire_promotion')]: {
            bind: 'analytics-mark-revire-promotion',
            analytics: MARK_REVIRE_PROMOTION
          }
        }
      }
    }
  };

  const modalRevire = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-help',
    tagSpherica: 'cells-modal-help-spherica',
    properties: {
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          [getChannelName('set_properties_modal_revire')]: {
            bind: 'setProperties'
          },
          'oc-loan-offer-page-set_properties_modal_revire_spherica': {
            bind: 'setProperties'
          },
          [getChannelName('close_modal_help')]: {
            bind: 'isOpened'
          }
        },
        out: {
          [getChannelName('validate_modal_revire')]: {
            bind: 'close-event'
          }
        }
      }
    }
  };

  const bbvaHelpModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-help-modal-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      fixedFooter: false,
      iOSFixedHeader: nativeIos,
      headerRightButtons: [ {
        id: 'btn-close',
        name: 'Close',
        icon: 'spherica:close',
        accessibilityText: 'bbva-list-swipe-close',
        label: 'bbva-list-swipe-close',
        defaultEventIconName: 'header-main-close-icon-click'
      } ],
      cellsConnections: {
        in: {
          open_modal_header_text: {
            bind: 'headerText'
          },
          open_modal_title_text: {
            bind: 'titleText'
          },
          open_modal_title_icon: {
            bind: 'titleIcon'
          },
          open_modal_description_text: {
            bind: 'bodyText'
          },
          open_modal_full_height: {
            bind: 'fullHeight'
          },
          open_modal_button_primary: {
            bind: 'buttonText'
          },
          open_modal_type: {
            bind: 'modalType'
          },
          open_modal_button_secondary: {
            bind: 'linkText'
          },
          open_modal_fixed_footer: {
            bind: 'fixedFooter'
          },
          open_modal_spherica: {
            bind: 'open'
          }
        },
        out: {
          global_oc_loan_offer_page_exit_modal_accept: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/oc-loan-offer',
      params: []
    },
    pages: ocLoanOfferPage,
    template,
    components: [
      modalRevire,
      spinner(CONFIG),
      bbvaHelpModal,
      lifeCycle,
      navigationHandler,
      opxDm,
      header,
      globalApisCampaigns,
      ocLoanOfferDM,
      stepLoan,
      stepChecklist,
      summary,
      cellsDmGlobalApiLoans,
      glomoAnalyticsLoanOfferManager,
      glomoCustomersMxDm,
      controllerCmb
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-loans', pageName, ['post-loans', 'error-on-post-loan']);
  _localStorage.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
