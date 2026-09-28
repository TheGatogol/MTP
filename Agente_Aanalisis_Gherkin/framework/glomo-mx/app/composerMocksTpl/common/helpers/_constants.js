const CAMPAIGNS = {
  AUTHORIZATION: {
    '0821': {
      code: 'contract-products-section-authorization',
      link: {
        page: 'contractProductsSectionDataAuthorization'
      }
    },
    '0822': {
      code: 'contract-products-section-authorization-multiproduct',
      link: {
        page: 'contractProductsSectionDataAuthorizationMultiproduct'
      }
    }
  },
  ACCOUNTS: {
    DCR: {
      code: 'debit-card-request',
      link: {
        page: 'requestDebitCard',
        params: {
          offerId: 'offerId'
        }
      }
    },
    OCPP: {
      code: 'payroll-portability',
      link: {
        page: 'ocPayrollPortability',
        params: {
          offerId: 'offerId'
        }
      }
    },
    ME: {
      code: 'metas-saving-goals',
      link: {
        page: 'goals'
      }
    },
    GMH: {
      code: 'contracting-goals-minor',
      link: {
        page: 'goalsMinorHiring'
      }
    },
    OCACCOUNTYOUNG: {
      code: 'oc-account-young',
      link: {
        page: 'ocAccountYoung',
        params: {
          offerId: 'offerId'
        }
      }
    },
    '0788': {
      code: 'oc-account',
      link: {
        page: 'ocAccount'
      }
    }
  },
  CARDS: {
    PAYROLLPORTABILITYOC: {
      code: 'payroll-portability-oc',
      link: {
        page: 'proceedings'
      }
    },
    '0813': {
      code: 'fund-origination-oc-fund',
      link: {
        page: 'fundOriginationOcFund'
      }
    },
    '0839': {
      code: 'onboarding-bbva-trader',
      link: {
        page: 'onboardingBbvaTrader',
        params: {
          offerId: 'offerId'
        }
      }
    },
    CREDITBUREAU: {
      code: 'credit-bureau',
      link: {
        page: 'creditBureau',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    NONPREAPPROVEDCREDITCARDBUREAU: {
      code: 'non-preapproved-credit-card',
      link: {
        page: {
          bind: 'redirectOffer'
        },
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_RESTRUCTURE: {
      code: 'product-solutions-payment-tdc-restructure',
      link: {
        page: 'ocPaymentPlanRestructurePage',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_APF: {
      code: 'product-solutions-payment-tdc-apf',
      link: {
        page: 'ocSupportFixedPaymentsPage',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_PPF: {
      code: 'product-solutions-payment-tdc-ppf',
      link: {
        page: 'ocPaymentPlanFixedPage',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN_AUTO: {
      code: 'product-solutions-payment-car-loan-ppf',
      link: {
        page: 'ocPaymentPlanDecreaseAuto',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN_RESTRUCTURE: {
      code: 'product-solutions-payment-loan-restructure',
      link: {
        page: 'ocLoanPaymentPlanRestructurePage',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN: {
      code: 'product-solutions-payment-consumer-loan-ppf',
      link: {
        page: 'ocPaymentPlanDecreaseLoan',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_CONSOLIDATION_LOAN: {
      code: 'payments-consolidations-loans',
      link: {
        page: 'ocLoanPaymentPlanLoanConsolidation',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    CREDIT_CARD_HOLDER: {
      code: 'credit-card-holder',
      link: {
        page: {bind: 'redirectToPage'},
        params: {
          offerId: 'offerId'
        }
      }
    },
    EFI: {
      code: 'instant-cash',
      link: {
        page: 'instantCash',
        params: {
          offerId: 'offerId'
        }
      }
    },
    TOPCREDITCARD: {
      code: 'top-credit-card',
      link: {
        page: 'ocTopCreditCard',
        params: {
          offerId: 'offerId'
        }
      }
    },
    ZERO_PARTY_DATA: {
      code: 'zero-party-data'
    },
    INVESTADVISORY: {
      code: 'invest-advisory-onboarding',
      link: {
        page: 'investAdvisoryPortfolio',
        params: {
          offerId: 'offerId'
        }
      }
    }
  },
  DEPOSITS: {
    DEPOSITSHIRING: {
      code: 'deposit-hiring',
      link: {
        page: 'depositHiring'
      }
    }
  },
  FUNDS: {
    FUNDSHIRING: {
      code: 'oc-fund',
      link: {
        page: 'fundsHiring'
      }
    },
    FUNDSHIRINGORIGINATION: {
      code: 'funds-hiring-origination',
      link: {
        page: 'fundsHiringOrigination'
      }
    }
  },
  INSURANCES: {
    TRAVEL_INSURANCE: {
      code: 'travel-insurance',
      link: {
        page: 'travelInsurance'
      }
    },
    DLI: {
      code: 'dynamic-life-insurance',
      link: {
        page: 'dynamicLifeInsuranceMainPage',
        params: {
          offerId: 'offerId'
        }
      }
    },
    OCMETASEGURA: {
      code: 'oc-metasegura',
      link: {
        page: 'ocMetaseguraOffer',
        params: {
          offerId: 'offerId'
        }
      }
    }
  },
  LOANS: {
    '0814': {
      code: 'mortgage-main-tracking',
      link: {
        page: 'mortgageMainTracking'
      }
    },
    '00CB': {
      code: 'non-preapproved-consumer-loan',
      link: {
        page: {
          bind: 'redirectOffer'
        },
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    PCL: {
      code: 'consumer-loan',
      link: {
        page: { bind: 'redirectToPage' },
        params: {
          offerId: 'offerId'
        }
      }
    },
    HIPO: {
      code: 'mortgage-loan',
      link: {
        page: 'mortgage',
        params: {
          offerId: 'offerId'
        }
      }
    },
    PA: {
      code: 'payroll-advance',
      link: {
        page: 'ocPayrollAdvancePage',
        params: {
          offerId: 'offerId'
        }
      }
    },
    AUTO: {
      code: 'car-loan',
      link: {
        page: 'carLoan',
        params: {
          offerId: 'offerId'
        }
      }
    },
    AUTO_UNIVERSAL: {
      code: 'oc-car-loan-origination',
      link: {
        page: 'ocCarLoanOrigination',
        params: {
          offerId: 'offerId'
        }
      }
    },
    FLEXIBLE_FINANCING_DEBIT: {
      code: 'flexible-financing-debit',
      link: {
        page: 'financeTransactionMultipurchaseDebit',
        params: {
          offerId: 'offerId'
        }
      }
    },
    RECOLOCATE: {
      code: 'recolocation',
      link: {
        page: 'ocLoanRelocation',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    RELOCATIONFINANCIALHEALTH: {
      code: 'relocation-financial-health',
      link: {
        page: 'ocLoanRelocationFinancialHealth',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    OCSECURELOANLEAD: {
      code: 'oc-secure-loan',
      link: {
        page: 'ocSecureLoan'
      }
    }
  },
  LOANANDMORTGAGE: {
    '0856': {
      code: 'loan-and-mortgage-information',
      link: {
        page: 'loanAndMortgageInformation'
      }
    }
  },
  PAYMENTS: {
    CASHZONE: {
      code: 'mpos-openpay',
      link: {
        page: 'ocCashZone',
        params: {
          offerId: 'offerId'
        }
      }
    }
  },
  OTHERS: {
    LIMIT_INCREASE: {
      code: 'limit-increase',
      link: {
        page: 'increment',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    N_LIMIT_INCREASE: {
      code: 'n-limit-increase',
      link: {
        page: 'nCreditLineIncrease',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    CARD_TRANSACTION_SERVICING_SCHEDULED_DONATIONS: {
      code: 'card-transaction-servicing-scheduled-donations',
      link: {
        page: 'cardTransactionServicingScheduledDonations',
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    },
    MORTGAGE_NON_PREAPPROVED: {
      code: 'oc-mortgage-non-preapproved',
      link: {
        page: 'ocMortgageNonPreapproved'
      }
    }
  }
};
const QR_READER_SCREEN_CONFIG = {
  cleanCardOperations: {
    tabbarButton: '',
    closeButtonHeader: 'cleanCardOperations',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-gp2-qr-reader-header-title',
      navBarInfoButton: false,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-gp2-qr-reader-header-title',
      headerContinue: 'cleanCardOperations',
      qrReader: {
        hideGalleryButton: true,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: null
      }
    }
  },
  cardlessWithdrawalReview: {
    tabbarButton: '',
    closeButtonHeader: 'cardlessWithdrawalReview',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-cardless-withdrawal-header-title',
      navBarInfoButton: false,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-cardless-withdrawal-header-title',
      headerContinue: 'cardlessWithdrawalReview',
      qrReader: {
        hideGalleryButton: false,
        targetPath: 'images/qr/scanner.svg',
        targetMessage: 'glomo-cardless-withdrawal-qr-target-message',
        primaryButton: null
      }
    }
  },
  cardlessWithdrawalDetail: {
    tabbarButton: '',
    closeButtonHeader: 'cardlessWithdrawalDetail',
    rightIconAction: '',
    iosNativeScreen: {
      componentTagName: 'qrprocessor_component_scan_qr',
      navBarTitle: 'glomo-gp2-qr-reader-header-title',
      navBarInfoButton: false,
      modalNavigation: false
    },
    androidNativeScreen: {
      headerClassName: 'header--core',
      headerLeftIcon: 'coronita:return-12',
      headerRightSecondaryIcon: '',
      headerRightSecondaryIconAction: '',
      headerTitleName: 'glomo-gp2-qr-reader-header-title',
      headerContinue: 'cardlessWithdrawalDetail',
      qrReader: {
        hideGalleryButton: true,
        targetPath: 'images/qr/scanner.svg',
        primaryButton: null
      }
    }
  },
  qrVinculationPlugin: (isIos) => {
    return {
      default: {
        codeType: 'QR',
        cameraConfig: {
          flash: false,
          autoFocus: true
        },
        customViewConfig: {
          name: 'qr_custom_toolbar_overlay',
          options: {
            title: '',
            backgroundColor: '#D9043263',
            navBarBackgroundColor: '#00FF0000',
            navBarTintColor: '#FFFFFFFF',
            descriptionLabelNameLinking: 'Escanea o elige el QR de tu galería',
            galleryTitle: 'Ir a galería',
            mainButtonActionTitleColor: '#5BBEFF',
            closeImageName: 'ic_close_cross'
          }
        },
        overlayConfig: {
          backgroundColor: '#D9043263',
          captureFrameColor: '#5BBEFF',
          borderWidth: isIos ? '5' : '90',
          isFrameVisible: true,
          isImageVisible: false,
          onlyCorners: true
        }
      }
    };
  }
};
const bbvaQrPluginConfigs = {
  commons: {
    android: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        name: 'qr_enrollment_view_overlay',
        options: {
          title: 'Registro',
          backgroundColor: '#072146',
          navBarBackgroundColor: '#194078',
          navBarTintColor: '#FFFFFF',
          firstFooterLabel: 'Escanea el QR.',
          closeImageName: 'ic_back'
        }
      },
      overlayConfig: {
        backgroundColor: '#73072146',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isFrameVisible: false,
        isImageVisible: false,
        onlyCorners: true
      }
    },
    ios: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        customViewName: 'qr_enrollment_view_overlay',
        id: 'qrEnrollmentView',
        options: {
          title: 'Registro',
          backgroundColor: '#072146',
          navBarBackgroundColor: '#194078',
          navBarTintColor: '#FFFFFF',
          firstFooterLabel: 'Escanea el QR.',
          closeImageName: 'ic_back'
        }
      },
      overlayConfig: {
        backgroundColor: '#101010',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isImageVisible: false
      },
      showStatusBar: true
    }
  },
  codi: {
    default: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        name: 'qr_custom_navigation_overlay',
        options: {
          title: 'Pagos y Cobros CoDi®',
          descriptionLabelName: 'Escanea con tu celular un QR CoDi® o elige uno desde tu galería.',
          buttonImage: 'ic_return',
          mainButtonActionTitle: 'Ir a galería',
          leftBottomButtonTitle: 'Movimientos CoDi®',
          leftBottomButtonImage: 'ic_qr_list_view',
          middleBottomButtonTitle: 'Solicitar Dinero con Celular CoDi®',
          middleBottomButtonImage: 'ic_receive_money_dollar',
          rightBottomButtonTitle: 'Solicitar Dinero con QR CoDi®',
          rightBottomButtonImage: 'ic_qr'
        }
      },
      overlayConfig: {
        borderWidth: 80,
        backgroundColor: '#D9072146',
        captureFrameColor: '#5BBEFF',
        isFrameVisible: true,
        isImageVisible: false,
        onlyCorners: true
      }
    }
  }
};
const maskedAmountNumberChars = 4;

const qrPluginConfigs = {
  android: {
    codeType: 'QR',
    cameraConfig: {
      flash: false,
      autoFocus: true
    },
    customViewConfig: {
      name: 'qr_enrollment_view_overlay',
      options: {
        title: 'bbva-feature-card-activation-qr-title-enrollment',
        firstFooterLabel: 'bbva-feature-card-activation-qr-firstFooterLabel-enrollment'
      }
    },
    overlayConfig: {
      backgroundColor: '#73072146',
      captureFrameColor: '#5BBEFF',
      borderWidth: '0',
      isFrameVisible: true,
      isImageVisible: false,
      onlyCorners: true
    }
  },
  ios: {
    codeType: 'QR',
    cameraConfig: {
      flash: false,
      autoFocus: true
    },
    customViewConfig: {
      customViewName: 'qr_enrollment_view_overlay',
      id: 'qrEnrollmentView',
      options: {
        title: 'bbva-feature-card-activation-qr-title',
        backgroundColor: '#072146',
        navBarBackgroundColor: '#194078',
        navBarTintColor: '#FFFFFF',
        firstButton: 'bbva-feature-card-activation-qr-firstButton',
        secondButton: 'bbva-feature-card-activation-qr-secondButton',
        firstFooterLabel: 'bbva-feature-card-activation-qr-firstFooterLabel',
        secondFooterLabel: 'bbva-feature-card-activation-qr-secondFooterLabel'
      }
    },
    overlayConfig: {
      backgroundColor: '#101010',
      captureFrameColor: '#5BBEFF',
      borderWidth: '0',
      isImageVisible: false
    }
  }
};

const toastSnackBarGeneralParamsSuccess = {
  duration: 5000,
  backgroundColor: '#FF277A3E',
  textColor: '#FFFFFFFF',
  textSize: 15,
  maxLines: 5,
  position: 'bottom',
  delay: 1,
  id: 1,
  textAlignment: 1,
  textMargins: {
    top: 24,
    bottom: 24,
    right: 16,
    left: 16
  }
};

module.exports = {
  CAMPAIGNS,
  QR_READER_SCREEN_CONFIG,
  qrPluginConfigs,
  bbvaQrPluginConfigs,
  toastSnackBarGeneralParamsSuccess,
  maskedAmountNumberChars
};
