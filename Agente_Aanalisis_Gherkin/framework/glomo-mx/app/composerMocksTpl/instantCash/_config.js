const {
  ALERT_MANAGER_TEMPLATE_IDS: {
    OPERATION_NOT_PERFORMED_RETRY_MODAL_ID,
    OPERATION_NOT_PERFORMED_ERROR_MODAL_ID,
    INFORMATION_NOT_AVAILABLE_RETRY_MODAL_ID,
    INFORMATION_NOT_AVAILABLE_ERROR_MODAL_ID,
    CARD_ISSUES_ERROR_MODAL_ID, EXPIRED_CARD_ERROR_MODAL_ID,
    AMOUNT_EXCEEDS_DEPOSIT_LIMIT_ERROR_MODAL_ID,
    OFFER_TAKEN_ERROR_MODAL_ID,
    UNAVAILABLE_OFFER_ERROR_MODAL_ID,
    CONFIRM_MODAL_ID
  },
  COMPONENT_NAMES: {
    MAIN_DM_NAME
  },
  RESPONSE_HANDLER_IDS: {
    OFFER_DETAIL_ERROR_ID,
    OFFER_SIMULATION_ERROR_ID,
    OFFER_HIRING_ERROR_ID
  },
  RESPONSE_OPERATOR_IDS: {
    OFFER_DETAIL_OPERATOR_ID,
    OFFER_SIMULATION_OPERATOR_ID,
    OFFER_HIRING_OPERATOR_ID
  },
  REQUEST_RETRY_HANDLER_SET_IDS: {
    OFFER_DETAIL_REQUEST_RETRY_HANDLER_ID,
    OFFER_SIMULATION_REQUEST_RETRY_HANDLER_ID,
    OFFER_HIRING_REQUEST_RETRY_HANDLER_ID
  }
} = require('./_literals');
const {
  getLocalCurrency,
  getLanguage,
  getSimpleHandlingConfig,
  getRateHandlingConfig,
  getNestedKeyExtractor,
  getFindPropertyExtractor,
  percentageFormatConfig,
  truncatedFormatConfig,
  amountFormatConfig
} = require('../common/helpers/_utils');

module.exports = (config) => {
  const language = getLanguage(config);
  const localCurrency = getLocalCurrency(config);
  const amountFormat = amountFormatConfig(localCurrency, language);
  const truncatedFormat = truncatedFormatConfig();
  const catRateFormats = [
    percentageFormatConfig([ {localeAfterSymbol: 'instant-cash-text-after-cat-rate-percentage'} ]),
    truncatedFormat
  ];

  const alertManagerConnectionsSettings = [
    {
      id: OPERATION_NOT_PERFORMED_RETRY_MODAL_ID,
      onCancelConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      },
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'performNextAttempt'
      }
    },
    {
      id: OPERATION_NOT_PERFORMED_ERROR_MODAL_ID,
      onCancelConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      },
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'callBankLine'
      }
    },
    {
      id: INFORMATION_NOT_AVAILABLE_RETRY_MODAL_ID,
      onCancelConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      },
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'performNextAttempt'
      }
    },
    {
      id: INFORMATION_NOT_AVAILABLE_ERROR_MODAL_ID,
      onCancelConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      },
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'callBankLine'
      }
    },
    {
      id: CARD_ISSUES_ERROR_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    },
    {
      id: EXPIRED_CARD_ERROR_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    },
    {
      id: AMOUNT_EXCEEDS_DEPOSIT_LIMIT_ERROR_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    },
    {
      id: OFFER_TAKEN_ERROR_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    },
    {
      id: UNAVAILABLE_OFFER_ERROR_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    },
    {
      id: CONFIRM_MODAL_ID,
      onAcceptConnectionsIn: {
        [MAIN_DM_NAME]: 'exitOperative'
      }
    }
  ];

  const responseHandlerSettings = {
    [OFFER_DETAIL_ERROR_ID]: {
      config: {
        id: OFFER_DETAIL_ERROR_ID,
        cases: [
          {
            id: 'cardIssues',
            onFulfillmentFunctionName: 'openCardIssuesErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 403,
              'error-code': '533'
            }
          },
          {
            id: 'unavailableOffer',
            onFulfillmentFunctionName: 'openUnavailableOfferErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 409,
              'error-code': '01211000',
              'error-message': 'ERROR TECNICO QWPO01211035 EN LA TRANSACCION MDMGT05501ES'
            }
          },
          {
            id: 'offerTaken',
            onFulfillmentFunctionName: 'openOfferTakenErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 404,
              'error-code': 'notFound',
              'system-error-cause': '00901039(MDMG): EL CLIENTE NO CUENTA CON LA OFERTA'
            }
          }
        ],
        onNoCaseFulfilledFunctionName: 'askForRetry'
      }
    },
    [OFFER_SIMULATION_ERROR_ID]: {
      config: {
        id: OFFER_SIMULATION_ERROR_ID,
        cases: [],
        onNoCaseFulfilledFunctionName: 'askForRetry'
      }
    },
    [OFFER_HIRING_ERROR_ID]: {
      config: {
        id: OFFER_HIRING_ERROR_ID,
        cases: [
          {
            id: 'expiredCard',
            onFulfillmentFunctionName: 'openExpiredCardErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 409,
              'error-code': 'WIE0077',
              'error-message': 'SU TARJETA NO ESTA ACTIVA'
            }
          },
          {
            id: 'amountExceedsDepositLimit',
            onFulfillmentFunctionName: 'openAmountExceedsDepositLimitErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 409,
              'error-code': 'WIE0077',
              'error-message': 'SU DISPOSICION NO PUEDE SER CONCLUIDA'
            }
          },
          {
            id: 'offerTaken',
            onFulfillmentFunctionName: 'openOfferTakenErrorModal',
            validatorFunctionName: 'hasErrorProps',
            customProps: {
              'http-status': 404,
              'error-code': 'notFound',
              'system-error-cause': '00901039(MDMG): EL CLIENTE NO CUENTA CON LA OFERTA'
            }
          }
        ],
        onNoCaseFulfilledFunctionName: 'askForRetry'
      }
    }
  };

  const responseOperatorSettings = {
    [OFFER_DETAIL_OPERATOR_ID]: {
      config: {
        dataHandling: {
          offerType: {
            extraction: getNestedKeyExtractor('offerType')
          },
          annualRate: getRateHandlingConfig('TASA ANUAL SALDO'),
          mensualRate: getRateHandlingConfig('TASA MENSUAL'),
          catRate: {
            extraction: getFindPropertyExtractor({
              outerPath: 'rates',
              pathToPropertyToCompare: 'rateType.id',
              valueToCompare: 'CAT'
            }),
            processing: {
              value: {
                pathToValue: 'unit.percentage',
                formats: catRateFormats
              }
            }
          },
          installmentAmount: {
            extraction: getNestedKeyExtractor('details.installmentAmount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          suggestedTerm: getSimpleHandlingConfig('details', 'suggestedTerm'),
          allowedTerms: {
            extraction: getNestedKeyExtractor('details.allowedTerms'),
            processing: {
              items: {
                customHandling: {
                  targetFunctionName: 'handleAllowedTerms'
                }
              }
            }
          },
          suggestedAmount: {
            extraction: getNestedKeyExtractor('details.suggestedAmount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          minimumAmount: getSimpleHandlingConfig('details.minimumAmount', 'amount'),
          maximumAmount: {
            extraction: getNestedKeyExtractor('details.maximumAmount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          dispositionCommission: {
            extraction: getFindPropertyExtractor({
              outerPath: 'details.fees.itemizeFees',
              pathToPropertyToCompare: 'mode.id',
              valueToCompare: 'AMOUNT'
            }),
            processing: {
              value: {
                pathToValue: 'itemizeFeeUnit.import.amount',
                formats: [ amountFormat ]
              }
            }
          },
          percentageToLoad: {
            extraction: getFindPropertyExtractor({
              outerPath: 'details.fees.itemizeFees',
              pathToPropertyToCompare: 'mode.id',
              valueToCompare: 'PERCENTAGE'
            })
          }
        }
      }
    },
    [OFFER_SIMULATION_OPERATOR_ID]: {
      config: {
        dataHandling: {
          annualRate: getRateHandlingConfig('TASA ANUAL SALDO'),
          mensualRate: getRateHandlingConfig('TASA MENSUAL'),
          catRate: {
            extraction: getFindPropertyExtractor({
              outerPath: 'rates',
              pathToPropertyToCompare: 'rateType.id',
              valueToCompare: 'CAT'
            }),
            processing: {
              value: {
                pathToValue: 'unit.percentage',
                formats: catRateFormats
              }
            }
          },
          installmentAmount: {
            extraction: getNestedKeyExtractor('installmentAmount', 'amount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          requestedTerm: getSimpleHandlingConfig('terms', 'number'),
          requestedAmount: getSimpleHandlingConfig('requestedAmount', 'amount'),
          dispositionCommission: {
            extraction: getFindPropertyExtractor({
              outerPath: 'fees.itemizeFees',
              pathToPropertyToCompare: 'mode.id',
              valueToCompare: 'AMOUNT'
            }),
            processing: {
              value: {
                pathToValue: 'itemizeFeeUnit.import.amount',
                formats: [ amountFormat ]
              }
            }
          }
        }
      }
    },
    [OFFER_HIRING_OPERATOR_ID]: {
      config: {
        dataHandling: {
          applyDate: {
            extraction: getNestedKeyExtractor('applyDate')
          },
          operationNumber: {
            extraction: getNestedKeyExtractor('operationNumber')
          },
          receivingAccount: {
            extraction: getNestedKeyExtractor('receivingAccount')
          },
          terms: {
            extraction: getNestedKeyExtractor('terms'),
            value: {
              pathToValue: 'number'
            }
          },
          annualRate: getRateHandlingConfig('TASA MENSUAL'),
          catRate: {
            extraction: getFindPropertyExtractor({
              outerPath: 'rates',
              pathToPropertyToCompare: 'rateType.id',
              valueToCompare: 'CAT'
            }),
            processing: {
              value: {
                pathToValue: 'unit.percentage',
                formats: catRateFormats
              }
            }
          },
          requestedAmount: {
            extraction: getNestedKeyExtractor('requestedAmount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          installmentAmount: {
            extraction: getNestedKeyExtractor('installmentAmount'),
            processing: {
              value: {
                pathToValue: 'amount',
                formats: [ amountFormat ]
              }
            }
          },
          dispositionCommission: {
            extraction: getFindPropertyExtractor({
              outerPath: 'fees.itemizeFees',
              pathToPropertyToCompare: 'feeType',
              valueToCompare: 'SPECIFIC_TRANSACTION'
            }),
            processing: {
              value: {
                pathToValue: 'itemizeFeeUnit.import.amount',
                formats: [ amountFormat ]
              }
            }
          }
        }
      }
    }
  };

  const requestRetryHandlerSettings = {
    [OFFER_DETAIL_REQUEST_RETRY_HANDLER_ID]: {
      config: {
        defaultMaximumAttemptsPerRequest: 3,
        noneRemainingFunctionName: 'openInformationNotAvailableErrorModal',
        retryFunctionName: 'openInformationNotAvailableRetryModal'
      },
      functionNameToHandle: 'getOfferDetail'
    },
    [OFFER_SIMULATION_REQUEST_RETRY_HANDLER_ID]: {
      config: {
        defaultMaximumAttemptsPerRequest: 3,
        noneRemainingFunctionName: 'openInformationNotAvailableErrorModal',
        retryFunctionName: 'openInformationNotAvailableRetryModal'
      },
      functionNameToHandle: 'getOfferSimulation'
    },
    [OFFER_HIRING_REQUEST_RETRY_HANDLER_ID]: {
      config: {
        defaultMaximumAttemptsPerRequest: 3,
        noneRemainingFunctionName: 'openOperationNotPerformedErrorModal',
        retryFunctionName: 'openOperationNotPerformedRetryModal'
      },
      functionNameToHandle: 'hireInstantCash'
    }
  };

  return {
    alertManagerConnectionsSettings,
    responseHandlerSettings,
    responseOperatorSettings,
    requestRetryHandlerSettings
  };
};
