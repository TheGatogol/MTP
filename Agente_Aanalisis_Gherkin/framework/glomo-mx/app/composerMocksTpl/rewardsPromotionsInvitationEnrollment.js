'use strict';
module.exports = config => {
  const pageName = 'rewardsPromotionsInvitationEnrollment';
  const analytics = require('./analytics/_rewardsPromotionsInvitationEnrollment.js')(config);
  const {
    getLocalCurrency,
    getLanguage
  } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false
  } = config;
  const base = {
    hash: 'mx-rewards-promotions-invitation-enrollment',
    currentPage: {
      url: '/rewards-promotions-invitation-enrollment'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        animationType: 'verticalUp'
      }
    },

    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-promotions-invitation-enrollment',
        familyPath: '@bbva-web-components-widgets/rewards-promotions-invitation-enrollment',
        render: 'litElement',
        featureFlag: {
          key: 'glomo.rewards.promotions.invitationEnrollment',
          defaultValue: true
        },
        properties: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          currency: getLocalCurrency(),
          country: 'mx',
          maxSelectablePurchases: 25,
          maxRequestAttempts: 3,
          pageSize: 5,
          cellsConnections: {
            params: {
              offerId: 'offerId',
              campaignId: 'campaignId',
              categoryId: 'categoryId',
              period: 'period'
            },
            in: {
              global_set_app_settings: {
                bind: 'getAppSettings'
              },
              rewards_promotions_invitation_enrollment_navigation_go_back: {
                bind: 'reset'
              },
              rewards_promotions_invitation_enrollment_navigation_go_back_from_receipt: {
                bind: 'reset'
              },
              __bridge_page_rewardsPromotionsInvitationEnrollment: {
                bind: 'handlePageAttachment'
              }
            },
            out: {
              rewards_promotions_invitation_enrollment_navigation_go_back: {
                bind: 'navigation-go-back',
                backStep: true
              },
              global_action_launcher_dialer: {
                bind: 'rewards-promotions-invitation-enrollment-assistance-phone-number-call'
              },
              rewards_promotions_invitation_enrollment_navigation_go_back_from_receipt: {
                bind: 'rewards-promotions-invitation-enrollment-receipt-modal-close-icon-click',
                backStep: true
              },
              rewards_promotions_invitation_enrollment_receipt_to_share: {
                bind: 'rewards-promotions-invitation-enrollment-receipt-modal-receipt-to-share'
              },
              rewards_promotions_invitation_enrollment_receipt_result: {
                bind: 'rewards-promotions-invitation-enrollment-receipt-modal-result'
              },
              rewards_promotions_invitation_enrollment_enrollment_modal_view: {
                bind: 'rewards-promotions-invitation-enrollment-enrollment-modal-view',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppPageVisit
              },
              rewards_promotions_invitation_enrollment_enrollment_modal_multistep_step_one_action: {
                bind: 'rewards-promotions-invitation-enrollment-enrollment-modal-multistep-step-one-action',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppStarted
              },
              rewards_promotions_invitation_enrollment_enrollment_modal_multistep_step_two_view: {
                bind: 'rewards-promotions-invitation-enrollment-enrollment-modal-multistep-step-two-view',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppStep2
              },
              rewards_promotions_invitation_enrollment_purchases_modal_view: {
                bind: 'rewards-promotions-invitation-enrollment-purchases-modal-view',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppStep3
              },
              rewards_promotions_invitation_enrollment_enrollment_modal_multistep_step_two_complete: {
                bind: 'rewards-promotions-invitation-enrollment-enrollment-modal-multistep-confirm-step-view',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppStep4
              },
              rewards_promotions_invitation_enrollment_receipt_modal_view_app_complete: {
                bind: 'rewards-promotions-invitation-enrollment-receipt-modal-view-app-complete',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAppCompleted
              },
              rewards_promotions_invitation_enrollment_receipt_modal_view: {
                bind: 'rewards-promotions-invitation-enrollment-receipt-modal-view',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentReceiptModalView
              },
              rewards_promotions_invitation_enrollmentcustomer_enrollments_already_requested_view: {
                bind: 'rewards-promotions-invitation-enrollment-customer-enrollments-already-requested-error-modal-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentAlreadyRequestedView
              },
              rewards_promotions_invitation_enrollmentcampaign_card_transactions_without_participant_purchases_view: {
                bind: 'rewards-promotions-invitation-enrollment-campaign-card-transactions-without-participant-purchases-error-modal-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsWithoutParticipantPurchasesView
              },
              rewards_promotions_invitation_enrollmentcampaign_without_participating_cards_view: {
                bind: 'rewards-promotions-invitation-enrollment-campaign-without-participating-cards-error-modal-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCampaignWithoutParticipatingCardsView
              },
              rewards_promotions_invitation_enrollmentrevolving_balance_amount_exceeded_view: {
                bind: 'rewards-promotions-invitation-enrollment-revolving-balance-amount-exceeded-error-modal-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentRevolvingBalanceAmountExceededView
              },
              rewards_promotions_invitation_enrollmentmax_selectable_purchases_exceeded_view: {
                bind: 'rewards-promotions-invitation-enrollment-max-selectable-purchases-exceeded-error-modal-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentMaxSelectablePurchasesExceededView
              },
              rewards_promotions_invitation_enrollment_customer_enrollments_common_error_view: {
                bind: 'rewards-promotions-invitation-enrollment-customer-enrollments-common-error-modal-last-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCustomerEnrollmentsCommonErrorView
              },
              rewards_promotions_invitation_enrollmentcampaign_common_error_view: {
                bind: 'rewards-promotions-invitation-enrollment-campaign-common-error-modal-last-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCampaignCommonErrorView
              },
              rewards_promotions_invitation_enrollmentcampaign_card_transactions_common_error_view: {
                bind: 'rewards-promotions-invitation-enrollment-campaign-card-transactions-common-error-modal-last-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsCommonErrorView
              },
              rewards_promotions_invitation_enrollmentcampaign_card_transactions_apply_promotion_common_error_view: {
                bind: 'rewards-promotions-invitation-enrollment-campaign-card-transactions-apply-promotion-common-error-modal-last-open',
                analytics: analytics.rewardsPromotionsInvitationEnrollmentCampaignCardTransactionsApplyPromotionCommonErrorView
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
          cellsConnections: {
            in: {
              rewards_promotions_invitation_enrollment_receipt_to_share: {
                bind: 'captureReceipt'
              },
              rewards_promotions_invitation_enrollment_receipt_result: {
                bind: 'result'
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
              global_share_receipt_error_modal: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};
