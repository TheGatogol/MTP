'use strict';

module.exports = CONFIG => {
  const analytics = require('./analytics/_cardsTransactions')({});
  const analyticsPoints = require('./analytics/_pointsRedeemPurchases')(CONFIG);
  const analyticsTransactionsRedeem = require('./analytics/_transactionsRedeem')(CONFIG);
  const _localStorage = require('./common/_local-storage');
  const { getLocalCurrency, getLanguage, getCurrencyCode, getShortFormatDate } = require('./common/helpers/_utils');
  const localCurrency = getLocalCurrency(CONFIG);
  const language = getLanguage(CONFIG);
  const currencyCode = getCurrencyCode(CONFIG);
  const {
    cardTransactionMapsApiKey,
    globalServices: {
      host,
      hostAkamai,
      requiredToken = 'tsec'
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const base = {
    currentPage: {
      url: '/card/:productId/transaction/:transactionId/'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        preventScrollWithOverlay: true,
        headerHeight: 0
      }
    },
    components: [
      {
        type: 'DM',
        zone: 'app__main',
        render: 'litElement',
        familyPath: '@glomo-web-components/card-information-transaction-detail-enrichment-cards-mx',
        tag: 'card-information-transaction-detail-enrichment-cards-mx',
        properties: {
          host,
          requiredToken,
          transactionId: 'transactionId',
          continue: 'continue',
          native,
          showIconsPoints: true,
          localStorageSecure: true,
          isNativeIos: nativeIos,
          googleMapsApiKey: cardTransactionMapsApiKey,
          placesHost: hostAkamai,
          params: {
            financingType: 'financingType',
            rewardBenefits: 'rewardBenefits',
            pobPromotionFlag: 'pobPromotionFlag',
            productId: 'productId'
          },
          cellsConnections: {
            params: {
              cardId: 'productId',
              transactionId: 'transactionId',
              simpleCode: 'simpleCode',
              contractId: 'contractId',
              transactionAmount: 'operationMixedPurchase',
              localId: 'localId'
            },
            in: {
              global_financial_overview_details: {
                bind: 'financialOverviewData'
              },
              channel_transactions_detail_cards_mx_navigation_go_back: {
                bind: 'reset'
              },
              channel_transactions_list_cards_mx_set_transaction_detail: {
                bind: 'setTransactionDetail'
              },
              __bridge_page_cardTransactionDetail: {
                bind: 'init'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              card_Detail_set_product_summary_data: {
                bind: 'cardDetail'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'getDataToTransactionDetail'
              },
              orange_reward_benefits_valid_card: {
                bind: 'validRewardsBenefits'
              },
              orange_finance_valid_card: {
                bind: 'validFinanceMovements'
              },
              global_card_transaction_detail_to_transactions_redeem: {
                bind: 'parseTransactionsRedeemData'
              },
              global_finance_transactions_reset_product_transaction_detail: {
                bind: 'reset'
              },
              global_card_transaction_detail_pob_promotion_flag: {
                bind: 'showBanner'
              },
              card_is_claim_available: {
                bind: 'isClaimAvailable'
              },
              minimum_payment_clarifications_movements_details: {
                bind: 'cardsApiVersion'
              },
              blue_pay_with_points_flag: {
                bind: 'isBlueTransactionsByPoints'
              },
              channel_transactions_list_cards_mx_is_additional_card: {
                bind: 'isAdditionalCard'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'isMaskedAmount'
              },
              global_feature_stand_in_status: {
                bind: 'standIn'
              },
              global_storage_get_detail_enrichment_message_shown_success: {
                bind: 'setOnboardingMessageConsumed'
              },
              global_storage_get_detail_enrichment_info_detail_message_shown_success: {
                bind: 'setInfoDetailMessageConsumed'
              },
              global_set_app_settings: {
                bind: 'setAppSettings'
              }
            },
            out: {
              call_to_merchant_modal_open: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-call-to-merchant-modal-open',
                analytics: analytics.callToMerchantModalOpen
              },
              navigate_to_external_link_modal_open: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-navigate-to-external-link-modal-open',
                analytics: analytics.navigateToExternalLinkModalOpen
              },
              map_address_copied: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-map-address-copied',
                analytics: analytics.mapAddressCopied
              },
              static_map_clicked: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-static-map-clicked',
                analytics: analytics.staticMapClicked
              },
              show_more_information: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-show-more-information',
                analytics: analytics.showMoreInformation
              },
              post_places_error_request: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-post-places-error-request',
                analytics: analytics.postPlacesErrorRequest
              },
              get_place_detail_error_request: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-get-place-detail-error-request',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintGetPlaceDetailErrorRequest')
              },
              no_merchant_information_modal_open: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-no-merchant-information-modal-open',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintNoMerchantInformationModalOpen')
              },
              merchant_information_modal_open: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-merchant-information-modal-open',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintModalOpen')
              },
              card_transaction_detail_share_receipt: {
                bind: 'transaction-detail-credit-card-create-receipt'
              },
              card_transaction_detail_info_receipt: {
                bind: 'transaction-detail-credit-card-send-data-receipt'
              },
              card_transaction_detail_credit_card_receipt_template: {
                bind: 'transaction-detail-credit-card-receipt-template'
              },
              channel_transactions_detail_cards_mx_navigation_go_back: {
                bind: 'navigation-go-back',
                backStep: true
              },
              show_clarifications_management_care_channel: {
                bind: 'claim-data-care-transaction',
                link: {
                  page: 'clarificationsManagementCarePage'
                }
              },
              send_claim_data_care_transaction: {
                bind: 'set-claim-transaction-type',
                analytics: analytics.accessInternalLinkReportMovement
              },
              navigate_to_card_installments_detail: {
                bind: 'navigate-card-installments-detail',
                link: {
                  page: 'clarificationsManagementCarePage',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId'
                  }
                }
              },
              global_action_launcher_dialer: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-bbva-line-call'
              },
              global_action_launcher_uri: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-navigate-to-external-link'
              },
              global_logout_sesion_expiration: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-session-expiration'
              },
              global_points_redeem_purchases_modal_pending: {
                bind: 'modal-pending-balance'
              },
              navigation_to_financing_purchase: {
                bind: 'navigation-to-financing-purchase',
                link: {
                  page: 'financingPurchase',
                  params: {
                    transactionId: 'transactionId',
                    productId: 'productId'
                  }
                }
              },
              target_audience_set_pob_amounts_simulated: {
                bind: 'set-pob-amounts-simulated'
              },
              target_audience_points_to_use_label: {
                bind: 'points-to-use-label'
              },
              target_audience_set_first_amount_comparative_information: {
                bind: 'set-first-amount-comparative-information'
              },
              target_audience_set_second_amount_comparative_information: {
                bind: 'set-second-amount-comparative-information'
              },
              target_audience_set_effective_date_to_promotion: {
                bind: 'set-effective-date-to-promotion'
              },
              card_transaction_detail_request_convert_simulate: {
                bind: 'on-click-pay-with-points-icon'
              },
              card_transaction_detail_transaction_type: {
                bind: 'on-click-pay-with-points-icon-with-transaction-type',
                analytics: analytics.accessInternalLinkwithPoints
              },
              card_transaction_detail_promotion_purchase: {
                bind: 'page-view-transaction-promotion-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintPromotionPurchase')
              },
              transactions_redeem_request_convert_simulate: {
                bind: 'offer-tapped'
              },
              card_set_transaction_detail: {
                bind: 'set-transaction-detail'
              },
              defer_months_button_clicked_channel: {
                bind: 'on-click-defer-months-icon'
              },
              card_transaction_detail_set_loyalty_version: {
                bind: 'set-loyalty-api-version'
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_purchase: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintPurchase')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_purchase_points: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-purchase-points',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintPurchaseWithPoints')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_mixed_purchase: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-mixed-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintMixedPurchase')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_refund_purchase: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-refund-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintRefundPurchase')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_refund_purchase_points: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-refund-purchase-points',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintRefundPurchaseWithPoints')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_refund_mixed_purchase: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-refund-mixed-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintRefundMixedPurchase')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_requested: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-requested',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationRequested')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_transit: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-transit',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationInTransit')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_inprogress: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-inprogress',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationInProgress')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_approved: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-approved',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationApproved')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_cancelled: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-cancelled',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationCancelled')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_clarification_rejected: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-clarification-rejected',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintClarificationRejected')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_refund: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-refund',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintRefund')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_installments: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-installments',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintInstallments')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_movement_intransit: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-intransit',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintMovementInTransit')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_intransit_information: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-start-intransit-information',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintMovementInTransitInformation')
              },
              channel_bbva_feature_transaction_detai_cards_mx_on_page_foreign_purchase: {
                bind: 'card-information-transaction-detail-enrichment-cards-mx-on-page-foreign-purchase',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionDetailFootprintForeingPurchase')
              },
              global_set_in_storage: {
                bind: 'set-enrichment-onboarding-in-storage'
              },
              global_get_from_storage: {
                bind: 'get-enrichment-onboarding-from-storage'
              },
              global_remove_from_storage: {
                bind: 'remove-enrichment-onboarding-from-storage'
              }
            }
          }
        }
      }
    ]
  };

  const targetAudienceModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'targetAudienceModal',
      headerType: 'modal',
      fullHeight: true,
      headerText: 'loyalty-points-transactions-pob-pay-with-points',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      iconRightSecondary: 'coronita:help',
      hideContentPaddingTop: true,
      style: '--bbva-help-modal-padding: 0',
      cellsConnections: {
        in: {
          global_card_transaction_detail_to_transactions_redeem: {
            bind: 'open'
          },
          global_navigation_card_transaction_detail_to_points_redeem_purchases_page: {
            bind: 'close'
          }
        },
        out: {
          target_audience_modal_status_open: {
            bind: 'help-modal-open',
            analytics: analyticsTransactionsRedeem.TRANSACTIONS_REDEEM_PAGE_VIEW
          },
          target_audience_faqs_list: {
            bind: 'help-modal-header-right-secondary-click',
            link: {
              page: 'pointsRedeemFaq'
            }
          }
        }
      }
    }
  };

  const targetAudienceModalComponents = [
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-panel-offer',
      familyPath: '@bbva-web-components/bbva-panel-offer',
      render: 'litElement',
      properties: {
        headingLevel: '2',
        contentTitle: 'loyalty-points-transactions-pob-modal-title',
        microillustration: 'love',
        description: 'loyalty-points-transactions-pob-modal-description'
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-aggregation-simple-list',
      familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            target_audience_set_pob_amounts_simulated: {
              bind: 'config'
            }
          }
        }
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-text',
      familyPath: '@bbva-web-components/bbva-text',
      render: 'litElement',
      properties: {
        className: 'u-margin--grid u-margin-top--1-5',
        text: 'loyalty-points-transactions-pob-points-to-use-label',
        tag: 'span',
        fontWeight: 500
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-text',
      familyPath: '@bbva-web-components/bbva-text',
      render: 'litElement',
      properties: {
        className: 'u-margin--grid u-margin-bottom--1',
        tag: 'span',
        cellsConnections: {
          in: {
            target_audience_points_to_use_label: {
              bind: 'text'
            }
          }
        }
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-panel-comparative',
      familyPath: '@bbva-web-components/bbva-panel-comparative',
      render: 'litElement',
      properties: {
        className: 'u-margin--grid',
        firstTitle: 'loyalty-points-transactions-pob-amount-with-promotion',
        secondTitle: 'loyalty-points-transactions-pob-amount-without-promotion',
        localCurrency,
        language,
        currencyCode,
        showDecimals: true,
        cellsConnections: {
          in: {
            target_audience_set_first_amount_comparative_information: {
              bind: 'firstAmount'
            },
            target_audience_set_second_amount_comparative_information: {
              bind: 'secondAmount'
            }
          }
        }
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-list-simple',
      familyPath: '@bbva-web-components/bbva-list-simple',
      render: 'litElement',
      properties: {
        className: 'u-margin-top--1',
        variant: 'stacked-center',
        label: 'loyalty-points-transactions-pob-effective-date-title',
        descriptionMedium: true,
        cellsConnections: {
          in: {
            target_audience_set_effective_date_to_promotion: {
              bind: 'description'
            }
          }
        }
      }
    },
    {
      zone: 'targetAudienceModal.slot-content',
      type: 'UI',
      tag: 'bbva-button-default',
      familyPath: '@bbva-web-components/bbva-button-default',
      render: 'litElement',
      properties: {
        className: 'u-margin-top--2',
        text: 'loyalty-points-transactions-pob-use-my-points',
        cellsConnections: {
          out: {
            global_navigation_card_transaction_detail_to_points_redeem_purchases_page: {
              bind: 'click',
              link: {
                page: 'pointsRedeemPurchases'
              }
            }
          }
        }
      }
    }
  ];

  base.components.push(
    {
      zone: 'app__main',
      tag: 'glomo-opx-points-redeem-purchases-dm',
      type: 'DM',
      properties: {
        language,
        currency: localCurrency,
        isSpherica: true,
        cellsConnections: {
          in: {
            card_transaction_detail_set_loyalty_version: {
              bind: 'loyaltyApiVersions'
            },
            card_Detail_set_product_summary_data: {
              bind: 'productSummaryConfigData'
            },
            global_set_card_api_version: {
              bind: 'cardsApiVersion'
            },
            global_card_detail_data_success_channel: {
              bind: 'dataCard'
            },
            card_set_transaction_detail: {
              bind: 'transactionsCard'
            },
            global_feature_card_transactions_status: {
              bind: 'transactionsFeatureFlag'
            },
            card_transaction_detail_request_convert_simulate: {
              bind: 'requestConvertSimulate'
            },
            card_transaction_detail_points_redeem_simulate_response_channel: {
              bind: 'responseConvertSimulate'
            },
            card_transaction_detail_points_redeem_simulate_response_error_channel: {
              bind: 'errorResponseConvertSimulate'
            },
            global_points_redeem_retry: {
              bind: 'requestConvertSimulate'
            },
            global_points_redeem_exit: {
              bind: 'closePointsRedeem'
            },
            global_points_redeem_exit_from_modal: {
              bind: 'closePointsRedeem'
            },
            global_points_redeem_modal_cancel_from_header: {
              bind: 'closePointsRedeem'
            },
            global_points_redeem_final_cancel_from_header: {
              bind: 'closePointsRedeem'
            },
            navigation_transactions_to_transaction_detail: {
              bind: 'getDataToTransactionDetail'
            },
            global_financial_overview_details: {
              bind: 'financialCardData'
            },
            transactions_redeem_request_convert_simulate: {
              bind: 'requestConvertSimulate'
            },
            global_feature_flag_collection_updated: {
              bind: 'updatedRedeemPurchasesFlags'
            },
            blue_navigate_send_product_id: {
              bind: 'productId'
            },
            blue_navigate_send_transaction_id: {
              bind: 'transactionsCard'
            },
            blue_navigate_pay_with_points: {
              bind: 'fromTypeService'
            },
            blue_navigate_send_card_detail: {
              bind: 'dataCard'
            },
            blue_navigate_send_card_image: {
              bind: 'productSummaryConfigData'
            }
          },
          out: {
            dispatch_loyalty_api_version: {
              bind: 'set-loyalty-api-version'
            },
            card_transaction_detail_points_redeem_simulate_request_channel: {
              bind: 'request-loyalty-simulate'
            },
            global_card_transaction_detail_to_points_redeem_source_selected: {
              bind: 'parse-card-selected-changed'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            global_finance_transactions_reset_product_transaction_detail: {
              bind: 'reset-page'
            },
            card_reset_after_operation: {
              bind: 'reset-page'
            },
            card_show_loading: {
              bind: 'loaded'
            },
            card_Detail_manager_product_id: {
              bind: 'reload-detail'
            },
            global_card_transaction_detail_to_points_redeem_purchases_page: {
              bind: 'navigation-to-points-redeem-purchases',
              link: {
                page: 'pointsRedeemPurchases'
              }
            },
            global_card_transaction_detail_to_transactions_redeem: {
              bind: 'navigation-to-transaction-redeem'
            },
            global_card_transaction_detail_to_points_redeem_purchases_configuration_step_two: {
              bind: 'configuration-step-two-points-redeem-purchases'
            },
            global_card_transaction_detail_to_points_redeem_purchases_list_step_three: {
              bind: 'glomo-opx-points-redeem-purchases-list'
            },
            global_card_transaction_detail_to_points_redeem_purchases_operation_confirm: {
              bind: 'glomo-opx-points-redeem-purchases-operation'
            },
            global_card_transaction_detail_to_points_redeem_purchases_convert_simulate_error: {
              bind: 'convert-simulate-error'
            },
            global_card_transaction_detail_set_info_for_analytics: {
              bind: 'glomo-opx-points-redeem-purchases-all-info-for-analytics'
            },
            card_transaction_detail_set_info_for_app_on_click_start: {
              bind: 'glomo-opx-points-redeem-purchases-set-info-click-start'
            },
            global_points_redeem_purchases_convert_error: {
              bind: 'convert-error'
            },
            card_transaction_detail_convert_simulate_service_not_available: {
              bind: 'convert-simulate-service-not-available'
            },
            card_transaction_detail_convert_error_inactive_card: {
              bind: 'convert-error-inactive-card'
            },
            global_card_transaction_detail_pob_promotion_flag: {
              bind: 'set-pob-promotion-flag'
            },
            points_redeem_purchases_step_title: {
              bind: 'change-title-step'
            },
            points_redeem_faqs_product_list: {
              bind: 'set-questions'
            }
          },
          params: {
            productId: 'productId'
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-analytics-points-redeem-manager',
      familyPath: '@glomo-web-components/glomo-analytics-points-redeem-manager',
      render: 'litElement',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            card_transaction_detail_set_info_for_app_on_click_start: {
              bind: 'setCardName'
            },
            card_transaction_detail_request_convert_simulate: {
              bind: 'fireAppOnClickStart'
            },
            card_transaction_detail_convert_simulate_service_not_available: {
              bind: 'fireErrorSimulateServiceNotAvailable'
            },
            card_transaction_detail_convert_error_inactive_card: {
              bind: 'fireErrorInactiveCard'
            }
          },
          out: {
            card_transaction_detail_app_on_click_start: {
              bind: 'app-on-click-start',
              analytics: analyticsPoints.APP_ON_CLICK_START
            },
            card_transaction_detail_analytics_simulate_error_service_not_available: {
              bind: 'analytics-simulate-error-service-not-available',
              analytics: analyticsPoints.ERROR_SIMULATE_SERVICE_NOT_AVAILABLE
            },
            card_transaction_detail_analytics_error_inactive_card: {
              bind: 'analytics-error-inactive-card',
              analytics: analyticsPoints.ERROR_INACTIVE_CARD
            },
            card_transaction_detail_analytics_error_minimun_payment_not_covered: {
              bind: 'analytics-error-minimun-payment-not-covered',
              analytics: analyticsPoints.ERROR_MINIMUN_PAYMENT_NOT_COVERED
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-dm-global-apis-loyalty',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        cellsConnections: {
          in: {
            card_transaction_detail_set_loyalty_version: {
              bind: 'loyaltyApiVersion'
            },
            dispatch_loyalty_api_version: {
              bind: 'loyaltyApiVersion'
            },
            card_transaction_detail_points_redeem_simulate_request_channel: {
              bind: 'postConvertSimulate'
            }
          },
          out: {
            card_transaction_detail_points_redeem_simulate_response_channel: {
              bind: 'success-on-post-convert-simulate'
            },
            card_transaction_detail_points_redeem_simulate_response_error_channel: {
              bind: 'error-on-post-convert-simulate'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-share-generic-receipt-spherica',
      familyPath: 'cells-share-operative-receipt-spherica',
      type: 'UI',
      properties: {
        country: 'mxGlobal',
        language: getLanguage(),
        localCurrency: getLocalCurrency(),
        dateFormat: getShortFormatDate(),
        dataHourFormat: 'D MMM YYYY, h:mm [h]',
        cellsConnections: {
          in: {
            card_transaction_detail_share_receipt: {
              bind: 'captureReceipt'
            },
            card_transaction_detail_info_receipt: {
              bind: 'result'
            },
            card_transaction_detail_credit_card_receipt_template: {
              bind: 'addDynamicTemplate'
            }
          },
          out: {
            mobile_manage_operation: {
              bind: 'receipt-captured',
              'forward-to-native': true
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            global_alert_manager_open_with_settings: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        }
      }
    },
    targetAudienceModal
  );

  _localStorage.addOutStorageChannels(base.components, ['detail_enrichment_message_shown', 'detail_enrichment_info_detail_message_shown'], CONFIG);
  targetAudienceModalComponents.map(component => base.components.push(component));

  return base;
};
