export const BGADP_REGISTRY = {

  NPMBGADPAccountsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-accounts-v0" */ '@cells-components/bgadp-accounts-v0'),
    assign: (mod) => {
      const { BGADPAccountsAccountGetV0, BGADPAccountsAccountFinancialStatementsGetV0, BGADPAccountsDocumentationDossiersGetV0, BGADPAccountsAccountParticipantsGetV0, BGADPAccountsDocumentationDossiersPostV0, BGADPAccountsAccountIndicatorsIndicatorGetV0, BGADPAccountsAccountCheckbooksChecksGetV0, BGADPAccountsAccountTransactionsGetV0, BGADPAccountsAccountCheckbooksChecksCheckGetV0, BGADPAccountsAccountTermsPostV0, BGADPAccountsAccountCheckbooksManageNonConsecutiveChecksPostV0, BGADPAccountsChecksDocumentsPostV0, BGADPAccountsDocumentsFilesPostV0, BGADPAccountsChecksDocumentsDocumentGetV0, BGADPAccountsAccountIndicatorsIndicatorPatchV0 } = mod;
      window.NPMBGADPAccountsV0 = { BGADPAccountsAccountGetV0, BGADPAccountsAccountFinancialStatementsGetV0, BGADPAccountsDocumentationDossiersGetV0, BGADPAccountsAccountParticipantsGetV0, BGADPAccountsDocumentationDossiersPostV0, BGADPAccountsAccountIndicatorsIndicatorGetV0, BGADPAccountsAccountCheckbooksChecksGetV0, BGADPAccountsAccountTransactionsGetV0, BGADPAccountsAccountCheckbooksChecksCheckGetV0, BGADPAccountsAccountTermsPostV0, BGADPAccountsAccountCheckbooksManageNonConsecutiveChecksPostV0, BGADPAccountsChecksDocumentsPostV0, BGADPAccountsDocumentsFilesPostV0, BGADPAccountsChecksDocumentsDocumentGetV0, BGADPAccountsAccountIndicatorsIndicatorPatchV0 };
    },
  },

  NPMBGADPAccountsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-accounts-v1" */ '@cells-components/bgadp-accounts-v1'),
    assign: (mod) => {
      const { BGADPAccountsAccountChecksGetV1, BGADPAccountsAccountParticipantsGetV1, BGADPAccountsAccountParticipantsPostV1, BGADPAccountsAccountChecksAttemptsValidationGetV1, BGADPAccountsAccountChecksCheckGetV1, BGADPAccountsAccountChequesbooksManageNonConsecutiveChecksPostV1, BGADPAccountsAccountChecksIncomesPostV1 } = mod;
      window.NPMBGADPAccountsV1 = { BGADPAccountsAccountChecksGetV1, BGADPAccountsAccountParticipantsGetV1, BGADPAccountsAccountParticipantsPostV1, BGADPAccountsAccountChecksAttemptsValidationGetV1, BGADPAccountsAccountChecksCheckGetV1, BGADPAccountsAccountChequesbooksManageNonConsecutiveChecksPostV1, BGADPAccountsAccountChecksIncomesPostV1 };
    },
  },

  NPMBGADPAccountsV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-accounts-v2" */ '@cells-components/bgadp-accounts-v2'),
    assign: (mod) => {
      const { BGADPAccountsAccountGetV2, BGADPAccountsAccountTransactionsGetV2, BGADPAccountsAccountTransactionsTransactionGetV2, BGADPAccountsAccountRelatedContractsPostV2 } = mod;
      window.NPMBGADPAccountsV2 = { BGADPAccountsAccountGetV2, BGADPAccountsAccountTransactionsGetV2, BGADPAccountsAccountTransactionsTransactionGetV2, BGADPAccountsAccountRelatedContractsPostV2 };
    },
  },

  NPMBGADPMxAccountsv2: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-accounts-v2" */ '@cells-components/bgadp-mx-accounts-v2'),
    assign: (mod) => {
      const { BGADPMxAccountsAccountsAccountLevelUpgradePostV2 } = mod;
      window.NPMBGADPMxAccountsv2 = { BGADPMxAccountsAccountsAccountLevelUpgradePostV2 };
    },
  },

  NPMBGADPBanksGetV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-banks-v0" */ '@cells-components/bgadp-banks-v0'),
    assign: (mod) => {
      const { BGADPBanksBankGetV0 } = mod;
      window.NPMBGADPBanksGetV0 = { BGADPBanksBankGetV0 };
    },
  },

  NPMBGADPBanxicoV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-banxico-v0" */ '@cells-components/bgadp-mx-banxico-v0'),
    assign: (mod) => {
      const { BGADPMxBanxicoEnrollmentsPostV0, BGADPMxBanxicoLoginPostV0, BGADPMxBanxicoTermsPostV0, BGADPMxBanxicoAuthorizationRequestsPostV0, BGADPMxBanxicoDefaultAppEnrollmentPostV0, BGADPMxBanxicoSpeiAvailabilityGetV0, BGADPMxBanxicoInternalTransfersPostV0, BGADPMxBanxicoInterbankTransfersPostV0, BGADPMxBanxicoPaymentMessagesPostV0, BGADPMxBanxicoAuthenticationKeyPostV0, BGADPMxBanxicoRegisteredClabePostV0, BGADPMxBanxicoRegisteredClabeDeleteAccountRegistrationPostV0, BGADPMxBanxicoRegisteredClabeSearchPostV0, BGADPMxBanxicoAccountsAccountTransactionsTransactionGetV0 } = mod;
      window.NPMBGADPBanxicoV0 = { BGADPMxBanxicoEnrollmentsPostV0, BGADPMxBanxicoLoginPostV0, BGADPMxBanxicoTermsPostV0, BGADPMxBanxicoAuthorizationRequestsPostV0, BGADPMxBanxicoDefaultAppEnrollmentPostV0, BGADPMxBanxicoSpeiAvailabilityGetV0, BGADPMxBanxicoInternalTransfersPostV0, BGADPMxBanxicoInterbankTransfersPostV0, BGADPMxBanxicoPaymentMessagesPostV0, BGADPMxBanxicoAuthenticationKeyPostV0, BGADPMxBanxicoRegisteredClabePostV0, BGADPMxBanxicoRegisteredClabeDeleteAccountRegistrationPostV0, BGADPMxBanxicoRegisteredClabeSearchPostV0, BGADPMxBanxicoAccountsAccountTransactionsTransactionGetV0 };
    },
  },

  NPMBGADPBlackhawkV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-blackhawk-v0" */ '@cells-components/bgadp-blackhawk-v0'),
    assign: (mod) => {
      const { BGADPBlackhawkGiftBrandsGetV0 } = mod;
      window.NPMBGADPBlackhawkV0 = { BGADPBlackhawkGiftBrandsGetV0 };
    },
  },

  NPMBGADPBranchesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-branches-v0" */ '@cells-components/bgadp-branches-v0'),
    assign: (mod) => {
      const { BGADPEstimatedTimeBranchesGetV0 } = mod;
      window.NPMBGADPBranchesV0 = { BGADPEstimatedTimeBranchesGetV0 };
    },
  },

  NPMBGADPBranchOperationsCatalogsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-branch-operations-v0" */ '@cells-components/bgadp-branch-operations-v0'),
    assign: (mod) => {
      const { BGADPBranchOperationsCatalogsCatalogRecordsGetV0 } = mod;
      window.NPMBGADPBranchOperationsCatalogsV0 = { BGADPBranchOperationsCatalogsCatalogRecordsGetV0 };
    },
  },

  NPMBGADPDigitalAppointmentsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-digital-appointments-v1" */ '@cells-components/bgadp-digital-appointments-v1'),
    assign: (mod) => {
      const { BGADPDigitalAppointmentsBranchesBranchAvailableDatesAvailableDateAvailableTimeSlotsGetV1 } = mod;
      window.NPMBGADPDigitalAppointmentsV1 = { BGADPDigitalAppointmentsBranchesBranchAvailableDatesAvailableDateAvailableTimeSlotsGetV1 };
    },
  },

  NPMBGADPCampaignsOffersOfferGetV3: {
    importFn: () => import(/* webpackChunkName: "bgadp-campaigns-v3" */ '@cells-components/bgadp-campaigns-v3'),
    assign: (mod) => {
      const { BGADPCampaignsOffersOfferGetV3 } = mod;
      window.NPMBGADPCampaignsOffersOfferGetV3 = { BGADPCampaignsOffersOfferGetV3 };
    },
  },

  NPMBGADPCampaignsV4: {
    importFn: () => import(/* webpackChunkName: "bgadp-campaigns-v4" */ '@cells-components/bgadp-campaigns-v4'),
    assign: (mod) => {
      const { BGADPCampaignsCrmMarketingOnlineDigitalFormsPostV4, BGADPCampaignsCrmMarketingOnlineDigitalFormsOnlineDigitalFormPatchV4 } = mod;
      window.NPMBGADPCampaignsV4 = { BGADPCampaignsCrmMarketingOnlineDigitalFormsPostV4, BGADPCampaignsCrmMarketingOnlineDigitalFormsOnlineDigitalFormPatchV4 };
    },
  },

  NPMBGADPCrmInformativeCampaignsGetV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-campaigns-v2" */ '@cells-components/bgadp-campaigns-v2'),
    assign: (mod) => { window.NPMBGADPCrmInformativeCampaignsGetV2 = mod; },
  },

  NPMBGADPCardsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-cards-v0" */ '@cells-components/bgadp-cards-v0'),
    assign: (mod) => {
      const { BGADPCardsCardGetV0, BGADPCardsCardActivationsActivationPatchV0, BGADPCardsCardBlocksBlockPutV0, BGADPCardsCardFinancialStatementsGetV0, BGADPCardsCardLimitsLimitPutV0, BGADPCardsCardLimitsGetV0, BGADPCardsCardInstallmentsPlansPostV0, BGADPCardsCardConditionsGetV0, BGADPCardsCardOffersOfferGetV0, BGADPCardsGetV0, BGADPCardsCardPatchV0, BGADPCardsCardTransactionsTransactionGetV0, BGADPCardsPostV0, BGADPCardsCardOffersOfferSimulatePostV0, BGADPCardsCardCashAdvancesPostV0 } = mod;
      window.NPMBGADPCardsV0 = { BGADPCardsCardGetV0, BGADPCardsCardActivationsActivationPatchV0, BGADPCardsCardBlocksBlockPutV0, BGADPCardsCardFinancialStatementsGetV0, BGADPCardsCardLimitsLimitPutV0, BGADPCardsCardLimitsGetV0, BGADPCardsCardInstallmentsPlansPostV0, BGADPCardsCardConditionsGetV0, BGADPCardsCardOffersOfferGetV0, BGADPCardsGetV0, BGADPCardsCardPatchV0, BGADPCardsCardTransactionsTransactionGetV0, BGADPCardsPostV0, BGADPCardsCardOffersOfferSimulatePostV0, BGADPCardsCardCashAdvancesPostV0 };
    },
  },

  NPMBGADPCardsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-cards-v1" */ '@cells-components/bgadp-cards-v1'),
    assign: (mod) => {
      const { BGADPCardsCardPaymentsSimulatePostV1, BGADPCardsGetV1, BGADPCardsCardGetV1, BGADPCardsPostV1, BGADPCardsCardReplacementsPostV1, BGADPCardsCardConditionsGetV1, BGADPCardsCardIndicatorsGetV1, BGADPCardsCardActivatePostV1, BGADPCardsCardPinGetV1, BGADPCardsCardRelatedContractsGetV1, BGADPCardsCardDeliveriesGetV1, BGADPCardsDecipherQrcardPostV1, BGADPCardsCardLimitsLimitPutV1, BGADPCardsCardLimitsGetV1, BGADPCardsCardTransactionsDeferMovementsSimulatePostV1, BGADPCardsCardTransactionsDeferMovementsPostV1, BGADPCardsOffersOfferGetV1, BGADPCardsProposalsPostV1, BGADPCardsCardOffersOfferEnrollmentsPostV1, BGADPCardsCardDeliveriesPostV1, BGADPCardsCardInstallmentsPlansSimulationsPostV1, BGADPCardsCardPatchV1, BGADPCardsCardTransactionsGetV1, BGADPCardsCardBalancesGetV1, BGADPCardsCardOffersOfferGetV1, BGADPCardsCardInstallmentsPlansPostV1, BGADPCardsOffersAvailableCutOffDatesGetV1, BGADPCardsOffersOfferSimulationsPostV1 } = mod;
      window.NPMBGADPCardsV1 = { BGADPCardsCardPaymentsSimulatePostV1, BGADPCardsGetV1, BGADPCardsCardGetV1, BGADPCardsPostV1, BGADPCardsCardReplacementsPostV1, BGADPCardsCardConditionsGetV1, BGADPCardsCardIndicatorsGetV1, BGADPCardsCardActivatePostV1, BGADPCardsCardPinGetV1, BGADPCardsCardRelatedContractsGetV1, BGADPCardsCardDeliveriesGetV1, BGADPCardsDecipherQrcardPostV1, BGADPCardsCardLimitsLimitPutV1, BGADPCardsCardLimitsGetV1, BGADPCardsCardTransactionsDeferMovementsSimulatePostV1, BGADPCardsCardTransactionsDeferMovementsPostV1, BGADPCardsOffersOfferGetV1, BGADPCardsProposalsPostV1, BGADPCardsCardOffersOfferEnrollmentsPostV1, BGADPCardsCardDeliveriesPostV1, BGADPCardsCardInstallmentsPlansSimulationsPostV1, BGADPCardsCardPatchV1, BGADPCardsCardTransactionsGetV1, BGADPCardsCardBalancesGetV1, BGADPCardsCardOffersOfferGetV1, BGADPCardsCardInstallmentsPlansPostV1, BGADPCardsOffersAvailableCutOffDatesGetV1, BGADPCardsOffersOfferSimulationsPostV1 };
    },
  },

  NPMBGADPCardsV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-cards-v2" */ '@cells-components/bgadp-cards-v2'),
    assign: (mod) => {
      const { BGADPCardsCardGetV2, BGADPCardsCardTransactionsGetV2, BGADPCardsCardTransactionsTransactionGetV2 } = mod;
      window.NPMBGADPCardsV2 = { BGADPCardsCardGetV2, BGADPCardsCardTransactionsGetV2, BGADPCardsCardTransactionsTransactionGetV2 };
    },
  },

  NPMBGADPCardsV3: {
    importFn: () => import(/* webpackChunkName: "bgadp-cards-v3" */ '@cells-components/bgadp-cards-v3'),
    assign: (mod) => {
      const { BGADPCardsCardCommissionChargePostV3 } = mod;
      window.NPMBGADPCardsV3 = { BGADPCardsCardCommissionChargePostV3 };
    },
  },

  NPMBGADPClaimsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-claims-v0" */ '@cells-components/bgadp-claims-v0'),
    assign: (mod) => {
      const { BGADPRequestClaimsGetV0, BGADPRequestClaimsRequestClaimOperationsStatusSummaryGetV0, BGADPClaimsAutomaticRefundTransactionsValidateAutomaticRefundTransactionPostV0, BGADPClaimsAutomaticRefundTransactionsAutomaticRefundTransactionPatchV0 } = mod;
      window.NPMBGADPClaimsV0 = { BGADPRequestClaimsGetV0, BGADPRequestClaimsRequestClaimOperationsStatusSummaryGetV0, BGADPClaimsAutomaticRefundTransactionsValidateAutomaticRefundTransactionPostV0, BGADPClaimsAutomaticRefundTransactionsAutomaticRefundTransactionPatchV0 };
    },
  },

  NPMBGADPContactsBookV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-contacts-book-v0" */ '@cells-components/bgadp-contacts-book-v0'),
    assign: (mod) => {
      const { BGADPContactsBookContactsContactDeleteV0, BGADPContactsBookContactsContactProductsProductDeleteV0, BGADPContactsBookContactsGetV0, BGADPContactsBookContactsPostV0, BGADPContactsBookContactsContactContactsInformationContactInformationDeleteV0, BGADPContactsBookContactsProductsGetV0, BGADPContactsBookContactsContactProductsPostV0, BGADPContactsBookContactsContactContactsInformationPostV0 } = mod;
      window.NPMBGADPContactsBookV0 = { BGADPContactsBookContactsContactDeleteV0, BGADPContactsBookContactsContactProductsProductDeleteV0, BGADPContactsBookContactsGetV0, BGADPContactsBookContactsPostV0, BGADPContactsBookContactsContactContactsInformationContactInformationDeleteV0, BGADPContactsBookContactsProductsGetV0, BGADPContactsBookContactsContactProductsPostV0, BGADPContactsBookContactsContactContactsInformationPostV0 };
    },
  },

  NPMBGADPContractDocumentsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-contract-documents-v0" */ '@cells-components/bgadp-mx-contract-documents-v0'),
    assign: (mod) => {
      const { BGADPMxContractDocumentsContractingDossiersGetV0 } = mod;
      window.NPMBGADPContractDocumentsV0 = { BGADPMxContractDocumentsContractingDossiersGetV0 };
    },
  },

  NPMBGADPContractsOverviewGetV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-contracts-v0" */ '@cells-components/bgadp-contracts-v0'),
    assign: (mod) => {
      const { BGADPContractsDossiersDossierGetV0 } = mod;
      window.NPMBGADPContractsOverviewGetV0 = { BGADPContractsDossiersDossierGetV0 };
    },
  },

  NPMBGADPMxContractsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-contracts-v0" */ '@cells-components/bgadp-mx-contracts-v0'),
    assign: (mod) => {
      const { BGADPMxContractsContractingPackagesPostV0 } = mod;
      window.NPMBGADPMxContractsV0 = { BGADPMxContractsContractingPackagesPostV0 };
    },
  },

  NPMBGADPConversationsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-conversations-v0" */ '@cells-components/bgadp-conversations-v0'),
    assign: (mod) => {
      const { BGADPConversationsConversationMessagesPostV0, BGADPConversationsConversationMessagesGetV0, BGADPConversationsConversationMessagesMessagePatchV0, BGADPConversationsConversationMessagesMessageDeleteMessagePostV0, BGADPConversationsGetV0, BGADPConversationsPostV0 } = mod;
      window.NPMBGADPConversationsV0 = { BGADPConversationsConversationMessagesPostV0, BGADPConversationsConversationMessagesGetV0, BGADPConversationsConversationMessagesMessagePatchV0, BGADPConversationsConversationMessagesMessageDeleteMessagePostV0, BGADPConversationsGetV0, BGADPConversationsPostV0 };
    },
  },

  NPMBGADPMxConversationsSessionsValidatePostV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-conversations-v0" */ '@cells-components/bgadp-mx-conversations-v0'),
    assign: (mod) => { window.NPMBGADPMxConversationsSessionsValidatePostV0 = mod; },
  },

  NPMBGADPCredentialsLifecycleV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-credentials-lifecycle-v0" */ '@cells-components/bgadp-credentials-lifecycle-v0'),
    assign: (mod) => { window.NPMBGADPCredentialsLifecycleV0 = mod; },
  },

  NPMBGADPCustomerDocumentsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-customer-documents-v0" */ '@cells-components/bgadp-customer-documents-v0'),
    assign: (mod) => {
      const { BGADPCustomerDocumentsCatalogDocumentTypesGetV0, BGADPCustomerDocumentsDocumentsVerificationsPostV0 } = mod;
      window.NPMBGADPCustomerDocumentsV0 = { BGADPCustomerDocumentsCatalogDocumentTypesGetV0, BGADPCustomerDocumentsDocumentsVerificationsPostV0 };
    },
  },

  NPMBGADPCustomerServicesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-customer-services-v0" */ '@cells-components/bgadp-customer-services-v0'),
    assign: (mod) => {
      const { BGADPCustomerServicesPayrollPortabilitiesGetV0, BGADPCustomerServicesPayrollPortabilitiesPostV0 } = mod;
      window.NPMBGADPCustomerServicesV0 = { BGADPCustomerServicesPayrollPortabilitiesGetV0, BGADPCustomerServicesPayrollPortabilitiesPostV0 };
    },
  },

  NPMBGADPCustomersMxV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-customers-v1" */ '@cells-components/bgadp-mx-customers-v1'),
    assign: (mod) => {
      const { BGADPMxCustomersCustomersValidateDigitalFilePostV1, BGADPMxCustomersCustomersCustomerAdditionalInformationPostV1, BGADPMxCustomersCustomersCustomerValidateContactPostV1, BGADPMxCustomersNationalElectoralInstituteValidateCredentialsDataPostV1 } = mod;
      window.NPMBGADPCustomersMxV1 = { BGADPMxCustomersCustomersValidateDigitalFilePostV1, BGADPMxCustomersCustomersCustomerAdditionalInformationPostV1, BGADPMxCustomersCustomersCustomerValidateContactPostV1, BGADPMxCustomersNationalElectoralInstituteValidateCredentialsDataPostV1 };
    },
  },

  NPMBGADPCustomersV4: {
    importFn: () => import(/* webpackChunkName: "bgadp-customers-v4" */ '@cells-components/bgadp-customers-v4'),
    assign: (mod) => {
      const { BGADPCustomersCustomerBusinessAgentsGetV4 } = mod;
      window.NPMBGADPCustomersV4 = { BGADPCustomersCustomerBusinessAgentsGetV4 };
    },
  },

  NPMBGADPDepositsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-deposits-v0" */ '@cells-components/bgadp-deposits-v0'),
    assign: (mod) => {
      const { BGADPDepositsDepositImpositionsImpositionPatchV0, BGADPDepositsDepositWithdrawalsPostV0, BGADPDepositsDepositGetV0, BGADPDepositsDepositTransactionsGetV0, BGADPDepositsDepositTransactionsTransactionGetV0 } = mod;
      window.NPMBGADPDepositsV0 = { BGADPDepositsDepositImpositionsImpositionPatchV0, BGADPDepositsDepositWithdrawalsPostV0, BGADPDepositsDepositGetV0, BGADPDepositsDepositTransactionsGetV0, BGADPDepositsDepositTransactionsTransactionGetV0 };
    },
  },

  NPMBGADPDepositsV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-deposits-v2" */ '@cells-components/bgadp-deposits-v2'),
    assign: (mod) => {
      const { BGADPDepositsPostV2, BGADPDepositsDepositImpositionsPostV2, BGADPDepositsSimulatePostV2 } = mod;
      window.NPMBGADPDepositsV2 = { BGADPDepositsPostV2, BGADPDepositsDepositImpositionsPostV2, BGADPDepositsSimulatePostV2 };
    },
  },

  NPMBGADPDocumentsVerificationsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-documents-verifications-v1" */ '@cells-components/bgadp-documents-verifications-v1'),
    assign: (mod) => {
      const { BGADPDocumentsVerificationsVerificationsPostV1, BGADPDocumentsVerificationsVerificationsVerificationAttachmentsAttachmentPutV1, BGADPDocumentsVerificationsVerificationsVerificationExecutePostV1, BGADPDocumentsVerificationsVerificationsVerificationStatusVerificationGetV1, BGADPDocumentsVerificationsVerificationsVerificationGetV1 } = mod;
      window.NPMBGADPDocumentsVerificationsV1 = { BGADPDocumentsVerificationsVerificationsPostV1, BGADPDocumentsVerificationsVerificationsVerificationAttachmentsAttachmentPutV1, BGADPDocumentsVerificationsVerificationsVerificationExecutePostV1, BGADPDocumentsVerificationsVerificationsVerificationStatusVerificationGetV1, BGADPDocumentsVerificationsVerificationsVerificationGetV1 };
    },
  },

  NPMBGADPEvidencesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-evidences-v0" */ '@cells-components/bgadp-evidences-v0'),
    assign: (mod) => {
      const { BGADPEvidencesGetV0 } = mod;
      window.NPMBGADPEvidencesV0 = { BGADPEvidencesGetV0 };
    },
  },

  NPMBGADPMxBusinessDocumentsBusinessDocumentsPostV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-business-documents-v1" */ '@cells-components/bgadp-mx-business-documents-v1'),
    assign: (mod) => {
      const { BGADPMxBusinessDocumentsBusinessDocumentsPostV1 } = mod;
      window.NPMBGADPMxBusinessDocumentsBusinessDocumentsPostV1 = BGADPMxBusinessDocumentsBusinessDocumentsPostV1;
    },
  },

  NPMBGADPMxBusinessDocumentsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-business-documents-v1" */ '@cells-components/bgadp-mx-business-documents-v1'),
    assign: (mod) => {
      const { BGADPMxBusinessDocumentsStoreFilePostV1, BGADPMxBusinessDocumentsStoreFileStoreFileGetV1 } = mod;
      window.NPMBGADPMxBusinessDocumentsV1 = { BGADPMxBusinessDocumentsStoreFilePostV1, BGADPMxBusinessDocumentsStoreFileStoreFileGetV1 };
    },
  },

  NPMBGADPBusinessDocumentsDocumentTemplatesGetV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-business-documents-v0" */ '@cells-components/bgadp-business-documents-v0'),
    assign: (mod) => {
      const { BGADPBusinessDocumentsDocumentTemplatesGetV0 } = mod;
      window.NPMBGADPBusinessDocumentsDocumentTemplatesGetV0 = BGADPBusinessDocumentsDocumentTemplatesGetV0;
    },
  },

  NPMBGADPBusinessDocumentsDocumentTemplatesGeneratePostV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-business-documents-v0" */ '@cells-components/bgadp-business-documents-v0'),
    assign: (mod) => {
      const { BGADPBusinessDocumentsDocumentTemplatesGeneratePostV0 } = mod;
      window.NPMBGADPBusinessDocumentsDocumentTemplatesGeneratePostV0 = BGADPBusinessDocumentsDocumentTemplatesGeneratePostV0;
    },
  },

  NPMBGADPExchangeRatesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-exchange-rates-v0" */ '@cells-components/bgadp-exchange-rates-v0'),
    assign: (mod) => { window.NPMBGADPExchangeRatesV0 = mod; },
  },

  NPMBGADPExchangeRatesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-exchange-rates-v1" */ '@cells-components/bgadp-exchange-rates-v1'),
    assign: (mod) => {
      const { BGADPExchangeRatesSettlementPostV1, BGADPExchangeRatesCalculatePostV1 } = mod;
      window.NPMBGADPExchangeRatesV1 = { BGADPExchangeRatesSettlementPostV1, BGADPExchangeRatesCalculatePostV1 };
    },
  },

  NPMBGADPFinancialOverviewV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-financial-overview-v0" */ '@cells-components/bgadp-financial-overview-v0'),
    assign: (mod) => {
      const { BGADPFinancialOverviewContractsConfigurationsGetV0, BGADPFinancialOverviewContractsConfigurationsPatchV0, BGADPFinancialOverviewGetV0 } = mod;
      window.NPMBGADPFinancialOverviewV0 = { BGADPFinancialOverviewContractsConfigurationsGetV0, BGADPFinancialOverviewContractsConfigurationsPatchV0, BGADPFinancialOverviewGetV0 };
    },
  },

  NPMBGADPPersonalFinancesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-personal-finances-v1" */ '@cells-components/bgadp-personal-finances-v1'),
    assign: (mod) => {
      const { BGADPPersonalFinancesContractsContractBalancesGetV1, BGADPPersonalFinancesPfmsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupTopAmountCategoriesGetV1, BGADPPersonalFinancesPfmsPfmTransactionsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategoryGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategorySubcategoriesGetV1, BGADPPersonalFinancesGroupsGroupCategoriesGetV1, BGADPPersonalFinancesGroupsGroupCategoriesCategorySubcategoriesGetV1, BGADPPersonalFinancesPfmsPfmTransactionsTransactionPatchV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategorySubcategoriesSubcategoryGetV1, BGADPPersonalFinancesPfmsPfmPatchV1, BGADPPersonalFinancesPfmsInitializePostV1 } = mod;
      window.NPMBGADPPersonalFinancesV1 = { BGADPPersonalFinancesContractsContractBalancesGetV1, BGADPPersonalFinancesPfmsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupTopAmountCategoriesGetV1, BGADPPersonalFinancesPfmsPfmTransactionsGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategoryGetV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategorySubcategoriesGetV1, BGADPPersonalFinancesGroupsGroupCategoriesGetV1, BGADPPersonalFinancesGroupsGroupCategoriesCategorySubcategoriesGetV1, BGADPPersonalFinancesPfmsPfmTransactionsTransactionPatchV1, BGADPPersonalFinancesPfmsPfmGroupsGroupCategoriesCategorySubcategoriesSubcategoryGetV1, BGADPPersonalFinancesPfmsPfmPatchV1, BGADPPersonalFinancesPfmsInitializePostV1 };
    },
  },

  NPMBGADPPersonalFinancesV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-personal-finances-v2" */ '@cells-components/bgadp-personal-finances-v2'),
    assign: (mod) => {
      const { BGADPPersonalFinancesBalancesSearchPostV2, BGADPPersonalFinancesGroupsGroupCategoriesGetV2, BGADPPersonalFinancesGroupsGroupCategoriesCategorySubcategoriesGetV2, BGADPPersonalFinancesGroupsTaxonomiesGetV2, BGADPPersonalFinancesPfmsGetV2, BGADPPersonalFinancesPfmsPostV2, BGADPPersonalFinancesPfmsPfmGetV2, BGADPPersonalFinancesPfmsPfmPatchV2, BGADPPersonalFinancesPfmsPfmDeleteV2, BGADPPersonalFinancesPfmsPfmGroupsGetV2, BGADPPersonalFinancesTransactionsPatchV2, BGADPPersonalFinancesTransactionsTransactionGetV2, BGADPPersonalFinancesTransactionsSearchPostV2 } = mod;
      window.NPMBGADPPersonalFinancesV2 = { BGADPPersonalFinancesBalancesSearchPostV2, BGADPPersonalFinancesGroupsGroupCategoriesGetV2, BGADPPersonalFinancesGroupsGroupCategoriesCategorySubcategoriesGetV2, BGADPPersonalFinancesGroupsTaxonomiesGetV2, BGADPPersonalFinancesPfmsGetV2, BGADPPersonalFinancesPfmsPostV2, BGADPPersonalFinancesPfmsPfmGetV2, BGADPPersonalFinancesPfmsPfmPatchV2, BGADPPersonalFinancesPfmsPfmDeleteV2, BGADPPersonalFinancesPfmsPfmGroupsGetV2, BGADPPersonalFinancesTransactionsPatchV2, BGADPPersonalFinancesTransactionsTransactionGetV2, BGADPPersonalFinancesTransactionsSearchPostV2 };
    },
  },

  NPMBGADPGeographicPlacesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-geographicplaces-v0" */ '@cells-components/bgadp-geographicplaces-v0'),
    assign: (mod) => { window.NPMBGADPGeographicPlacesV0 = mod; },
  },

  NPMBGADPGeographicPlacesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-geographicplaces-v1" */ '@cells-components/bgadp-geographicplaces-v1'),
    assign: (mod) => { window.NPMBGADPGeographicPlacesV1 = mod; },
  },

  NPMBGADPDamageInsurancesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-damage-insurances-v0" */ '@cells-components/bgadp-damage-insurances-v0'),
    assign: (mod) => {
      const { BGADPDamageInsurancesQuotationsQuotationPatchV0, BGADPDamageInsurancesQuotationsPostV0 } = mod;
      window.NPMBGADPDamageInsurancesV0 = { BGADPDamageInsurancesQuotationsQuotationPatchV0, BGADPDamageInsurancesQuotationsPostV0 };
    },
  },

  NPMBGADPInsuranceContractsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurance-contracts-v0" */ '@cells-components/bgadp-insurance-contracts-v0'),
    assign: (mod) => {
      const { BGADPInsuranceContractsInsurancesContractsInsuranceContractRequestCancelPostV0 } = mod;
      window.NPMBGADPInsuranceContractsV0 = { BGADPInsuranceContractsInsurancesContractsInsuranceContractRequestCancelPostV0 };
    },
  },

  NPMBGADPInsuranceContractsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurance-contracts-v1" */ '@cells-components/bgadp-insurance-contracts-v1'),
    assign: (mod) => {
      const { BGADPInsuranceContractsInsurancesContractsInsuranceContractRequestCancelPostV1 } = mod;
      window.NPMBGADPInsuranceContractsV1 = { BGADPInsuranceContractsInsurancesContractsInsuranceContractRequestCancelPostV1 };
    },
  },

  NPMBGADPInsurancesCatalogsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-catalogs-v0" */ '@cells-components/bgadp-insurances-catalogs-v0'),
    assign: (mod) => {
      const { BGADPInsurancesCatalogsCatalogsCatalogRecordsGetV0 } = mod;
      window.NPMBGADPInsurancesCatalogsV0 = { BGADPInsurancesCatalogsCatalogsCatalogRecordsGetV0 };
    },
  },

  NPMBGADPInsurancesContractsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-contracts-v1" */ '@cells-components/bgadp-insurances-contracts-v1'),
    assign: (mod) => {
      const { BGADPInsurancesContractsInsuranceContractIndicatorsGetV1 } = mod;
      window.NPMBGADPInsurancesContractsV1 = { BGADPInsurancesContractsInsuranceContractIndicatorsGetV1 };
    },
  },

  NPMBGADPInsurancesOffersV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-offers-v0" */ '@cells-components/bgadp-insurances-offers-v0'),
    assign: (mod) => {
      const { BGADPInsurancesOffersOffersOfferGetV0, BGADPInsurancesOffersOffersSimulatePostV0 } = mod;
      window.NPMBGADPInsurancesOffersV0 = { BGADPInsurancesOffersOffersOfferGetV0, BGADPInsurancesOffersOffersSimulatePostV0 };
    },
  },

  NPMBGADPInsurancesProductsDamageV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-products-v0" */ '@cells-components/bgadp-insurances-products-v0'),
    assign: (mod) => {
      const { BGADPInsurancesProductsDamageInsuranceProductsDamageInsuranceProductGetV0 } = mod;
      window.NPMBGADPInsurancesProductsDamageV0 = { BGADPInsurancesProductsDamageInsuranceProductsDamageInsuranceProductGetV0 };
    },
  },

  NPMBGADPInsurancesProductsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-products-v0" */ '@cells-components/bgadp-insurances-products-v0'),
    assign: (mod) => {
      const { BGADPInsurancesProductsInsuranceProductCancellationReasonsGetV0 } = mod;
      window.NPMBGADPInsurancesProductsV0 = { BGADPInsurancesProductsInsuranceProductCancellationReasonsGetV0 };
    },
  },

  NPMBGADPInsurancesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-insurances-v1" */ '@cells-components/bgadp-insurances-v1'),
    assign: (mod) => {
      const { BGADPInsurancesPostV1 } = mod;
      window.NPMBGADPInsurancesV1 = { BGADPInsurancesPostV1 };
    },
  },

  NPMBGADPLifehealthInsurancesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-lifehealth-insurances-v1" */ '@cells-components/bgadp-lifehealth-insurances-v1'),
    assign: (mod) => {
      const { BGADPLifehealthInsurancesQuotationsPostV1, BGADPLifehealthInsurancesQuotationsQuotationPatchV1 } = mod;
      window.NPMBGADPLifehealthInsurancesV1 = { BGADPLifehealthInsurancesQuotationsPostV1, BGADPLifehealthInsurancesQuotationsQuotationPatchV1 };
    },
  },

  NPMBGADPMxInsurancesProductsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-insurances-products-v0" */ '@cells-components/bgadp-mx-insurances-products-v0'),
    assign: (mod) => {
      const { BGADPMxInsurancesProductsInsurancesProductsSettingsInsurancesProductsSettingGetV0 } = mod;
      window.NPMBGADPMxInsurancesProductsV0 = { BGADPMxInsurancesProductsInsurancesProductsSettingsInsurancesProductsSettingGetV0 };
    },
  },

  NPMBGADPMxInsurancesValidateV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-insurances-v0" */ '@cells-components/bgadp-mx-insurances-v0'),
    assign: (mod) => {
      const { BGADPMxInsurancesValidateMoneyLaunderingPostV0 } = mod;
      window.NPMBGADPMxInsurancesValidateV0 = { BGADPMxInsurancesValidateMoneyLaunderingPostV0 };
    },
  },

  NPMBGADPInvestmentFundsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-investment-funds-v0" */ '@cells-components/bgadp-investment-funds-v0'),
    assign: (mod) => {
      const { BGADPInvestmentFundsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundSubscriptionsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundRedeemsPostV0, BGADPInvestmentFundsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundSubscriptionsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsFundRedeemsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsGetV0, BGADPInvestmentFundsInvestmentFundFundsFundGetV0, BGADPInvestmentFundsInvestmentFundPatchV0 } = mod;
      window.NPMBGADPInvestmentFundsV0 = { BGADPInvestmentFundsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundSubscriptionsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundRedeemsPostV0, BGADPInvestmentFundsPostV0, BGADPInvestmentFundsInvestmentFundFundsFundSubscriptionsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsFundRedeemsSimulatePostV0, BGADPInvestmentFundsInvestmentFundFundsGetV0, BGADPInvestmentFundsInvestmentFundFundsFundGetV0, BGADPInvestmentFundsInvestmentFundPatchV0 };
    },
  },

  NPMBGADPInvestmentFundsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-investment-funds-v1" */ '@cells-components/bgadp-investment-funds-v1'),
    assign: (mod) => {
      const { BGADPInvestmentFundsInvestmentFundGetV1 } = mod;
      window.NPMBGADPInvestmentFundsV1 = { BGADPInvestmentFundsInvestmentFundGetV1 };
    },
  },

  NPMBGADPPrivateBankingPortfoliosV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-private-banking-portfolios-v0" */ '@cells-components/bgadp-private-banking-portfolios-v0'),
    assign: (mod) => {
      const { BGADPPrivateBankingPortfoliosGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioBalancesGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioOrdersPostV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioBusinessAgentsGetV0 } = mod;
      window.NPMBGADPPrivateBankingPortfoliosV0 = { BGADPPrivateBankingPortfoliosGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioBalancesGetV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioOrdersPostV0, BGADPPrivateBankingPortfoliosPrivateBankingPortfolioBusinessAgentsGetV0 };
    },
  },

  NPMBGADPMxStructuredProductsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-structured-products-v0" */ '@cells-components/bgadp-mx-structured-products-v0'),
    assign: (mod) => {
      const { BGADPMxStructuredProductsStructuredProductsGetV0, BGADPMxStructuredProductsInstructionsCardsInstructionsCardGetV0 } = mod;
      window.NPMBGADPMxStructuredProductsV0 = { BGADPMxStructuredProductsStructuredProductsGetV0, BGADPMxStructuredProductsInstructionsCardsInstructionsCardGetV0 };
    },
  },

  NPMBGADPLimitsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-limits-v1" */ '@cells-components/bgadp-limits-v1'),
    assign: (mod) => {
      const { BGADPOperativeLimitsOperativeLimitPeriodsGetV1, BGADPOperativeLimitsOperativeLimitPeriodsPatchV1, BGADPLimitsGetV1, BGADPLimitsLimitPatchV1, BGADPLimitsApproveLimitPostV1 } = mod;
      window.NPMBGADPLimitsV1 = { BGADPOperativeLimitsOperativeLimitPeriodsGetV1, BGADPOperativeLimitsOperativeLimitPeriodsPatchV1, BGADPLimitsGetV1, BGADPLimitsLimitPatchV1, BGADPLimitsApproveLimitPostV1 };
    },
  },

  NPMBGADPLoansV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-loans-v0" */ '@cells-components/bgadp-loans-v0'),
    assign: (mod) => {
      const { BGADPLoansOffersOfferQuotationsSimulatePostV0, BGADPLoansOffersOfferGetV0, BGADPLoansProposalsPostV0, BGADPLoansProposalsProposalGetV0, BGADPLoansProposalsProposalMerchantsGetV0, BGADPLoansLoanPatchV0, BGADPLoansLoanCommissionsGetV0 } = mod;
      window.NPMBGADPLoansV0 = { BGADPLoansOffersOfferQuotationsSimulatePostV0, BGADPLoansOffersOfferGetV0, BGADPLoansProposalsPostV0, BGADPLoansProposalsProposalGetV0, BGADPLoansProposalsProposalMerchantsGetV0, BGADPLoansLoanPatchV0, BGADPLoansLoanCommissionsGetV0 };
    },
  },

  NPMBGADPLoansV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-loans-v1" */ '@cells-components/bgadp-loans-v1'),
    assign: (mod) => {
      const { BGADPLoansProposalsGetV1, BGADPLoansOffersOfferGetV1, BGADPLoansOffersOfferQuotationsSimulatePostV1, BGADPLoansPostV1, BGADPLoansLoanGetV1, BGADPLoansLoanRelatedContractsGetV1, BGADPLoansProposalsPostV1 } = mod;
      window.NPMBGADPLoansV1 = { BGADPLoansProposalsGetV1, BGADPLoansOffersOfferGetV1, BGADPLoansOffersOfferQuotationsSimulatePostV1, BGADPLoansPostV1, BGADPLoansLoanGetV1, BGADPLoansLoanRelatedContractsGetV1, BGADPLoansProposalsPostV1 };
    },
  },

  NPMBGADPLoansV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-loans-v2" */ '@cells-components/bgadp-loans-v2'),
    assign: (mod) => {
      const { BGADPLoansMerchantOptionsInstallmentsPostV2, BGADPLoansProposalsPostV2, BGADPLoansProposalsProposalGoodsGetV2, BGADPLoansProposalsProposalGetV2 } = mod;
      window.NPMBGADPLoansV2 = { BGADPLoansMerchantOptionsInstallmentsPostV2, BGADPLoansProposalsPostV2, BGADPLoansProposalsProposalGoodsGetV2, BGADPLoansProposalsProposalGetV2 };
    },
  },

  NPMBGADPLoansLoanOffersOfferInstallmentPlansPostV2: {
    importFn: () => import(/* webpackChunkName: "bgadp-loans-v2" */ '@cells-components/bgadp-loans-v2'),
    assign: (mod) => {
      const { BGADPLoansLoanOffersOfferInstallmentPlansPostV2 } = mod;
      window.NPMBGADPLoansLoanOffersOfferInstallmentPlansPostV2 = { BGADPLoansLoanOffersOfferInstallmentPlansPostV2 };
    },
  },

  NPMBGADPMxConsumerFinanceDossiersV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-consumer-finance-dossiers-v0" */ '@cells-components/bgadp-mx-consumer-finance-dossiers-v0'),
    assign: (mod) => {
      const { BGADPMxConsumerFinanceDossiersVehicleFinancialSimulationPostV0, BGADPMxConsumerFinanceDossiersProposalsProposalTrackingInformationGetV0 } = mod;
      window.NPMBGADPMxConsumerFinanceDossiersV0 = { BGADPMxConsumerFinanceDossiersVehicleFinancialSimulationPostV0, BGADPMxConsumerFinanceDossiersProposalsProposalTrackingInformationGetV0 };
    },
  },

  NPMBGADPMortgagesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mortgages-v0" */ '@cells-components/bgadp-mortgages-v0'),
    assign: (mod) => { window.NPMBGADPMortgagesV0 = mod; },
  },

  NPMBGADPPatrimonialContractsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-patrimonial-contracts-v0" */ '@cells-components/bgadp-patrimonial-contracts-v0'),
    assign: (mod) => {
      const { BGADPPatrimonialContractsContractsContractDeferredSignaturePostV0, BGADPPatrimonialContractsContractsContractDeferredSignatureDeferredSignatureSafeguardPostV0 } = mod;
      window.NPMBGADPPatrimonialContractsV0 = { BGADPPatrimonialContractsContractsContractDeferredSignaturePostV0, BGADPPatrimonialContractsContractsContractDeferredSignatureDeferredSignatureSafeguardPostV0 };
    },
  },

  NPMBGADPMobilesV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mobiles-v0" */ '@cells-components/bgadp-mobiles-v0'),
    assign: (mod) => {
      const { BGADPMobilesServiceProvidersServiceProviderGetV0, BGADPMobilesServiceProvidersGetV0, BGADPMobilesTopUpsPostV0, BGADPMobilesTopUpsTopUpGetV0, BGADPMobilesServiceProvidersServiceProviderMigratedGetV0 } = mod;
      window.NPMBGADPMobilesV0 = { BGADPMobilesServiceProvidersServiceProviderGetV0, BGADPMobilesServiceProvidersGetV0, BGADPMobilesTopUpsPostV0, BGADPMobilesTopUpsTopUpGetV0, BGADPMobilesServiceProvidersServiceProviderMigratedGetV0 };
    },
  },

  NPMBGADPMobilesV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-mobiles-v1" */ '@cells-components/bgadp-mobiles-v1'),
    assign: (mod) => {
      const { BGADPMobilesServiceProvidersServiceProviderGetV1, BGADPMobilesServiceProvidersGetV1 } = mod;
      window.NPMBGADPMobilesV1 = { BGADPMobilesServiceProvidersServiceProviderGetV1, BGADPMobilesServiceProvidersGetV1 };
    },
  },

  NPMBGADPNotificationsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-notifications-v0" */ '@cells-components/bgadp-mx-notifications-v0'),
    assign: (mod) => {
      const { BGADPMxNotificationsNotificationsPatchV0, BGADPMxNotificationsNotificationsSendPostV0, BGADPMxNotificationsNotificationsValidateSubscriptionPostV0, BGADPMxNotificationsSubscriptionsGetV0, BGADPMxNotificationsSubscriptionsSubscriptionGetV0, BGADPMxNotificationsSubscriptionsSubscriptionPatchV0 } = mod;
      window.NPMBGADPNotificationsV0 = { BGADPMxNotificationsNotificationsPatchV0, BGADPMxNotificationsNotificationsSendPostV0, BGADPMxNotificationsNotificationsValidateSubscriptionPostV0, BGADPMxNotificationsSubscriptionsGetV0, BGADPMxNotificationsSubscriptionsSubscriptionGetV0, BGADPMxNotificationsSubscriptionsSubscriptionPatchV0 };
    },
  },

  NPMBGADPPaymentsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-payments-v0" */ '@cells-components/bgadp-payments-v0'),
    assign: (mod) => {
      const { BGADPPaymentsServicesGetV0, BGADPPaymentsStoredServicesGetV0, BGADPPaymentsServicesServiceGetV0, BGADPPaymentsServicesServiceAdditionalPaymentFieldsGetV0, BGADPPaymentsStoredServicesStoredServiceDeleteV0, BGADPServicePaymentsPostV0, BGADPPaymentsServicesServiceBillsSearchPostV0, BGADPPaymentsServicesServiceBillsGetV0, BGADPServicePaymentsBlocksPostV0, BGADPPaymentsStoredServicesPostV0 } = mod;
      window.NPMBGADPPaymentsV0 = { BGADPPaymentsServicesGetV0, BGADPPaymentsStoredServicesGetV0, BGADPPaymentsServicesServiceGetV0, BGADPPaymentsServicesServiceAdditionalPaymentFieldsGetV0, BGADPPaymentsStoredServicesStoredServiceDeleteV0, BGADPServicePaymentsPostV0, BGADPPaymentsServicesServiceBillsSearchPostV0, BGADPPaymentsServicesServiceBillsGetV0, BGADPServicePaymentsBlocksPostV0, BGADPPaymentsStoredServicesPostV0 };
    },
  },

  NPMBGADPPaymentsBlocksV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-payments-v0" */ '@cells-components/bgadp-payments-v0'),
    assign: (mod) => {
      const { BGADPServicePaymentsBlocksPostV0 } = mod;
      window.NPMBGADPPaymentsBlocksV0 = BGADPServicePaymentsBlocksPostV0;
    },
  },

  NPMBGADPPaymentsV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-payments-v1" */ '@cells-components/bgadp-payments-v1'),
    assign: (mod) => {
      const { BGADPServicePaymentsPostV1 } = mod;
      window.NPMBGADPPaymentsV1 = { BGADPServicePaymentsPostV1 };
    },
  },

  NPMBGADPMxPayrollsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-payrolls-v0" */ '@cells-components/bgadp-mx-payrolls-v0'),
    assign: (mod) => {
      const { BGADPMxPayrollsBusinessVinculationsBusinessVinculationGetV0, BGADPMxPayrollsBusinessVinculationsBusinessVinculationPayrollRequestsPostV0 } = mod;
      window.NPMBGADPMxPayrollsV0 = { BGADPMxPayrollsBusinessVinculationsBusinessVinculationGetV0, BGADPMxPayrollsBusinessVinculationsBusinessVinculationPayrollRequestsPostV0 };
    },
  },

  NPMBGADPProductsV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-products-v0" */ '@cells-components/bgadp-products-v0'),
    assign: (mod) => {
      const { BGADPProductsProductLimitsGetV0, BGADPInvestmentFundProductsInvestmentFundProductFundsGetV0 } = mod;
      window.NPMBGADPProductsV0 = { BGADPProductsProductLimitsGetV0, BGADPInvestmentFundProductsInvestmentFundProductFundsGetV0 };
    },
  },

  NPMBGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-mx-applicationcatalogs-v0" */ '@cells-components/bgadp-mx-applicationcatalogs-v0'),
    assign: (mod) => {
      const { BGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0 } = mod;
      window.NPMBGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0 = mod;
      window.NPMBGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0 = { BGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0 };
    },
  },

  NPMBGADPQasV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-qas-v0" */ '@cells-components/bgadp-qas-v0'),
    assign: (mod) => {
      const { BGADPQadomainsQadomainQasGetV0 } = mod;
      window.NPMBGADPQasV0 = { BGADPQadomainsQadomainQasGetV0 };
    },
  },

  NPMBGADPTransfersV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-transfers-v0" */ '@cells-components/bgadp-transfers-v0'),
    assign: (mod) => {
      const { BGADPOwnTransfersPostV0, BGADPInternalTransfersPostV0, BGADPInterbankTransfersPostV0, BGADPMobileTransfersGetV0, BGADPMobileTransfersPostV0, BGADPMobileTransfersMobileTransferGetV0, BGADPMobileTransfersMobileTransferDeleteV0, BGADPMobileTransfersMobileTransferConfirmCodePostV0 } = mod;
      window.NPMBGADPTransfersV0 = { BGADPOwnTransfersPostV0, BGADPInternalTransfersPostV0, BGADPInterbankTransfersPostV0, BGADPMobileTransfersGetV0, BGADPMobileTransfersPostV0, BGADPMobileTransfersMobileTransferGetV0, BGADPMobileTransfersMobileTransferDeleteV0, BGADPMobileTransfersMobileTransferConfirmCodePostV0 };
    },
  },

  NPMBGADPTransfersV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-transfers-v1" */ '@cells-components/bgadp-transfers-v1'),
    assign: (mod) => {
      const { BGADPInternationalTransfersPostV1, BGADPOwnTransfersPostV1, BGADPMobileTransfersCardlessWithdrawalLimitsGetV1 } = mod;
      window.NPMBGADPTransfersV1 = { BGADPInternationalTransfersPostV1, BGADPOwnTransfersPostV1, BGADPMobileTransfersCardlessWithdrawalLimitsGetV1 };
    },
  },

  NPMBGADPUsersManagementUsersUserProfilesProfilePatchV0: {
    importFn: () => import(/* webpackChunkName: "bgadp-users-management-v0" */ '@cells-components/bgadp-users-management-v0'),
    assign: (mod) => {
      const { BGADPUsersManagementUsersUserProfilesProfilePatchV0 } = mod;
      window.NPMBGADPUsersManagementUsersUserProfilesProfilePatchV0 = BGADPUsersManagementUsersUserProfilesProfilePatchV0;
    },
  },

  NPMBGADPUsersManagementV1: {
    importFn: () => import(/* webpackChunkName: "bgadp-users-management-v1" */ '@cells-components/bgadp-users-management-v1'),
    assign: (mod) => {
      const { BGADPUsersManagementProfilesPreActivatePostV1, BGADPUsersManagementProfilesActivatePostV1 } = mod;
      window.NPMBGADPUsersManagementV1 = { BGADPUsersManagementProfilesPreActivatePostV1, BGADPUsersManagementProfilesActivatePostV1 };
    },
  },

};

export const BGADP_GROUPS = {

  accounts: [
    'NPMBGADPAccountsV0',
    'NPMBGADPAccountsV1',
    'NPMBGADPAccountsV2',
    'NPMBGADPMxAccountsv2',
    'NPMBGADPDepositsV0',
    'NPMBGADPDepositsV2',
    'NPMBGADPFinancialOverviewV0',
    'NPMBGADPContractsOverviewGetV0',
    'NPMBGADPContractDocumentsV0',
    'NPMBGADPMxBusinessDocumentsV1',
    'NPMBGADPMxContractsV0',
    'NPMBGADPBanksGetV0',
    'NPMBGADPBanxicoV0',
    'NPMBGADPEvidencesV0',
    'NPMBGADPPrivateBankingPortfoliosV0',
  ],

  cards: [
    'NPMBGADPCardsV0',
    'NPMBGADPCardsV1',
    'NPMBGADPCardsV2',
    'NPMBGADPCardsV3',
    'NPMBGADPLimitsV1',
    'NPMBGADPInsuranceContractsV0',
    'NPMBGADPInsuranceContractsV1',
    'NPMBGADPInsurancesContractsV1',
  ],

  loans: [
    'NPMBGADPLoansV0',
    'NPMBGADPLoansV1',
    'NPMBGADPLoansV2',
    'NPMBGADPLoansLoanOffersOfferInstallmentPlansPostV2',
    'NPMBGADPMxConsumerFinanceDossiersV0',
    'NPMBGADPMortgagesV0',
    'NPMBGADPPatrimonialContractsV0',
    'NPMBGADPProductsV0',
    'NPMBGADPMxContractsV0',
    'NPMBGADPMxBusinessDocumentsBusinessDocumentsPostV1',
    'NPMBGADPMxBusinessDocumentsV1',
    'NPMBGADPBusinessDocumentsDocumentTemplatesGetV0',
    'NPMBGADPBusinessDocumentsDocumentTemplatesGeneratePostV0',
    'NPMBGADPCustomersMxV1',
  ],

  deposits: [
    'NPMBGADPDepositsV0',
    'NPMBGADPDepositsV2',
  ],

  investments: [
    'NPMBGADPInvestmentFundsV0',
    'NPMBGADPInvestmentFundsV1',
    'NPMBGADPPrivateBankingPortfoliosV0',
    'NPMBGADPMxStructuredProductsV0',
    'NPMBGADPProductsV0',
    'NPMBGADPExchangeRatesV0',
    'NPMBGADPExchangeRatesV1',
  ],

  pfm: [
    'NPMBGADPPersonalFinancesV1',
    'NPMBGADPPersonalFinancesV2',
    'NPMBGADPFinancialOverviewV0',
    'NPMBGADPProductsV0',
  ],

  insurances: [
    'NPMBGADPInsurancesV1',
    'NPMBGADPInsurancesOffersV0',
    'NPMBGADPInsurancesCatalogsV0',
    'NPMBGADPInsurancesProductsV0',
    'NPMBGADPInsurancesProductsDamageV0',
    'NPMBGADPDamageInsurancesV0',
    'NPMBGADPLifehealthInsurancesV1',
    'NPMBGADPMxInsurancesProductsV0',
    'NPMBGADPMxInsurancesValidateV0',
  ],

  payments: [
    'NPMBGADPPaymentsV0',
    'NPMBGADPPaymentsBlocksV0',
    'NPMBGADPPaymentsV1',
    'NPMBGADPTransfersV0',
    'NPMBGADPTransfersV1',
    'NPMBGADPBanxicoV0',
    'NPMBGADPBanksGetV0',
    'NPMBGADPContactsBookV0',
    'NPMBGADPLimitsV1',
    'NPMBGADPExchangeRatesV0',
    'NPMBGADPExchangeRatesV1',
    'NPMBGADPPrivateBankingPortfoliosV0',
  ],

  mobilePayments: [
    'NPMBGADPMobilesV0',
    'NPMBGADPMobilesV1',
    'NPMBGADPPaymentsV0',
    'NPMBGADPPaymentsV1',
  ],

  codi: [
    'NPMBGADPBanxicoV0',
    'NPMBGADPBanksGetV0',
    'NPMBGADPEvidencesV0',
  ],

  profile: [
    'NPMBGADPCustomersMxV1',
    'NPMBGADPCustomersV4',
    'NPMBGADPDocumentsVerificationsV1',
    'NPMBGADPCustomerDocumentsV0',
    'NPMBGADPGeographicPlacesV0',
    'NPMBGADPGeographicPlacesV1',
    'NPMBGADPEvidencesV0',
    'NPMBGADPQasV0',
  ],

  security: [
    'NPMBGADPCredentialsLifecycleV0',
    'NPMBGADPUsersManagementUsersUserProfilesProfilePatchV0',
    'NPMBGADPUsersManagementV1',
    'NPMBGADPCardsV1',
  ],

  notifications: [
    'NPMBGADPNotificationsV0',
    'NPMBGADPCrmInformativeCampaignsGetV2',
  ],

  claims: [
    'NPMBGADPClaimsV0',
  ],

  conversations: [
    'NPMBGADPConversationsV0',
    'NPMBGADPMxConversationsSessionsValidatePostV0',
    'NPMBGADPPrivateBankingPortfoliosV0',
    'NPMBGADPCustomersV4',
  ],

  loyalty: [
    'NPMBGADPCampaignsOffersOfferGetV3',
    'NPMBGADPCampaignsV4',
  ],

  payroll: [
    'NPMBGADPMxPayrollsV0',
    'NPMBGADPCustomerServicesV0',
  ],

  branches: [
    'NPMBGADPBranchesV0',
    'NPMBGADPBranchOperationsCatalogsV0',
    'NPMBGADPDigitalAppointmentsV1',
    'NPMBGADPGeographicPlacesV0',
  ],

  blackhawk: [
    'NPMBGADPBlackhawkV0',
  ],

  misc: [
    'NPMBGADPMxApplicationcatalogsApplicationCatalogsApplicationCatalogRecordsGetV0',
  ],

};

export const ROUTE_GROUP_MAP = [
  {
    patterns: [
      /^\/$/,
      /^\/login/,
      /^\/landing/,
      /^\/splash/,
      /^\/welcome/,
    ],
    groups: [ 'profile', 'security', 'notifications' ],
  },
  {
    patterns: [ /^\/dashboard/ ],
    groups: [ 'accounts', 'cards', 'notifications', 'loyalty', 'pfm' ],
  },
  {
    patterns: [
      /^\/account/,
      /^\/account-monthly-statement/,
      /^\/account-credit-card-payment/,
      /^\/upgrade-account/,
      /^\/open-digital-account/,
      /^\/oc-account/,
      /^\/business-account-info/,
      /^\/no-client-business-debit-card-info/,
      /^\/checks-deposits/,
      /^\/checks-management/,
      /^\/checks-section/,
      /^\/parental-control-account/,
      /^\/update-contract-confirmation/,
      /^\/upgrade-N2-page/,
      /^\/upgrade-confirm-N2-page/,
    ],
    groups: [ 'accounts' ],
  },
  {
    patterns: [
      /^\/deposit/,
      /^\/contract-payment-existing/,
    ],
    groups: [ 'deposits', 'accounts' ],
  },
  {
    patterns: [
      /^\/card/,
      /^\/additional-card/,
      /^\/card-activation/,
      /^\/card-block-management/,
      /^\/card-credit-card-payment/,
      /^\/card-cut-off-date/,
      /^\/card-detail/,
      /^\/card-less-withdrawal/,
      /^\/cardless-withdrawal/,
      /^\/card-link-and-activation/,
      /^\/card-monthly-statement/,
      /^\/card-origination/,
      /^\/card-without-data/,
      /^\/credit-card/,
      /^\/credit-card-payment/,
      /^\/clean-card/,
      /^\/block-and-replacement/,
      /^\/lock-cards/,
      /^\/toggle-cards/,
      /^\/finance-transaction/,
      /^\/financing-purchase/,
      /^\/instant-cash/,
      /^\/increment/,
      /^\/interest-simulator/,
      /^\/list-credit-card-limits/,
      /^\/edit-credit-card-limits/,
      /^\/monthly-statement/,
      /^\/pin-request/,
      /^\/advance-payments/,
      /^\/oc-payment-plan/,
      /^\/oc-top-credit-card/,
      /^\/bbva-trader/,
      /^\/btr?ader/,
      /^\/buy-now-pay-later/,
      /^\/bnpl/,
      /^\/card-transaction-servicing/,
      /^\/flexible-financing/,
      /^\/finance-debit-line-cancel/,
      /^\/debit-card-tracking/,
      /^\/parental-control-card/,
      /^\/additional-credit-card/,
      /^\/request-debit-card/,
      /^\/offer-tdc-modal/,
    ],
    groups: [ 'cards' ],
  },
  {
    patterns: [
      /^\/loan/,
      /^\/car-loan/,
      /^\/car-simulator/,
      /^\/appliance-simulator/,
      /^\/loan-sustainable/,
      /^\/loans-payment-pledge/,
      /^\/mortgage/,
      /^\/blings-mortgage/,
      /^\/blings-pre-approved/,
      /^\/non-pre-approved-consumer-loan/,
      /^\/non-pre-approved-consumer-loan-bureau/,
      /^\/oc-car-loan/,
      /^\/oc-loan/,
      /^\/oc-mortgage/,
      /^\/oc-secure-loan-lead/,
      /^\/oc-payroll-advance/,
      /^\/oc-payment-plan-loan/,
      /^\/credit-bureau/,
      /^\/npaCreditCard/,
      /^\/npa-credit-card/,
      /^\/non-pre-approved-credit-card/,
      /^\/income-limits/,
      /^\/payroll-advance/,
      /^\/score-credit/,
      /^\/history-credit/,
      /^\/non-pre-approved-car-certificate/,
    ],
    groups: [ 'loans', 'cards' ],
  },
  {
    patterns: [
      /^\/fund/,
      /^\/invest/,
      /^\/equity/,
      /^\/unit-linked/,
      /^\/add-fund-to-contract/,
      /^\/funds-/,
      /^\/goals/,
      /^\/deferredSignature/,
      /^\/deferred-signature/,
      /^\/deferred-equity/,
      /^\/deferred-structured/,
      /^\/fund-origination/,
      /^\/patrimonial-equit/,
    ],
    groups: [ 'investments' ],
  },
  {
    patterns: [
      /^\/pfm/,
      /^\/sustainability/,
      /^\/advice/,
      /^\/financial-health/,
      /^\/financial-education/,
      /^\/expensesGroup/,
      /^\/self-driven-round-up/,
      /^\/expenses-group-experiences/,
      /^\/tips-finance-profiling/,
    ],
    groups: [ 'pfm' ],
  },
  {
    patterns: [
      /^\/insurance/,
      /^\/life-insurance/,
      /^\/car-insurance/,
      /^\/travel-insurance/,
      /^\/dynamic-life/,
      /^\/solar-panels/,
      /^\/oc-metasegura-offer/,
    ],
    groups: [ 'insurances' ],
  },
  {
    patterns: [
      /^\/transfers/,
      /^\/transfer/,
      /^\/reuse-transfer/,
      /^\/international-transfers/,
      /^\/bill-payment/,
      /^\/bill-payments/,
      /^\/service-payment/,
      /^\/mobile-payment/,
      /^\/scheduled-bill-payments/,
      /^\/operational-limits/,
      /^\/recharge-tag/,
      /^\/register-tag/,
      /^\/tag-card-list/,
      /^\/parking/,
      /^\/televia/,
      /^\/contacts-agenda/,
      /^\/recipients/,
      /^\/frequent-operations/,
      /^\/account-credit-card-payment/,
      /^\/card-credit-card-payment/,
      /^\/credit-card-payment/,
      /^\/cardless-withdrawal/,
      /^\/give-money/,
      /^\/request-money/,
      /^\/mpos-purchase/,
      /^\/cash-zone-payments-mpos/,
      /^\/pay-by-bank/,
      /^\/payment-dashboard/,
      /^\/refunds/,
      /^\/international-refunds/,
      /^\/domiciliation/,
      /^\/bi-payments-transaction-list/,
      /^\/top-up/,
      /^\/user-transaction-amount/,
      /^\/operation-justification/,
      /^\/oc-cash-zone/,
      /^\/oc-support-fixed-payments-page/,
      /^\/register-info-tag/,
      /^\/payments-third-party-wallet/,
    ],
    groups: [ 'payments' ],
  },
  {
    patterns: [
      /^\/mobile-top-up/,
      /^\/mobile-payment/,
    ],
    groups: [ 'mobilePayments', 'payments' ],
  },
  {
    patterns: [
      /^\/codi/,
      /^\/codicel/,
      /^\/qr/,
    ],
    groups: [ 'codi', 'payments' ],
  },
  {
    patterns: [
      /^\/profile/,
      /^\/curp/,
      /^\/fatca/,
      /^\/kyc/,
      /^\/update-address/,
      /^\/update-national-id/,
      /^\/update-email/,
      /^\/validate-email/,
      /^\/facial-recognition/,
      /^\/national-id/,
      /^\/add-video-selfie/,
      /^\/postal-address-nominees/,
      /^\/request-fiscal-data/,
      /^\/upgrade-customer/,
      /^\/contact-details/,
      /^\/onboarding/,
      /^\/register-user/,
      /^\/open-digital-account/,
      /^\/digital-activation/,
      /^\/proceedings/,
    ],
    groups: [ 'profile' ],
  },
  {
    patterns: [
      /^\/security/,
      /^\/device-access/,
      /^\/fido/,
      /^\/biometric/,
      /^\/soft-token/,
      /^\/st-background/,
      /^\/discreet-mode/,
      /^\/key-recovery/,
      /^\/emergency-/,
      /^\/suspected-transaction/,
      /^\/access-key-recovery/,
    ],
    groups: [ 'security' ],
  },
  {
    patterns: [
      /^\/notification/,
      /^\/notification-manager/,
      /^\/in-app-crm/,
    ],
    groups: [ 'notifications' ],
  },
  {
    patterns: [
      /^\/claim/,
      /^\/clarification/,
      /^\/minimum-payment-clarification/,
    ],
    groups: [ 'claims', 'payments', 'cards' ],
  },
  {
    patterns: [
      /^\/my-conversation/,
      /^\/chat/,
      /^\/support-center-chat/,
      /^\/assistance/,
      /^\/call-me-back/,
      /^\/redirect-call-me-back/,
      /^\/disability-videocall/,
    ],
    groups: [ 'conversations' ],
  },
  {
    patterns: [
      /^\/reward/,
      /^\/rewardsLanding/,
      /^\/dynamics-and-rewards/,
      /^\/dynamicsAndRewards/,
      /^\/points/,
      /^\/loyalty/,
      /^\/filtered-points/,
      /^\/dynamics/,
      /^\/promotions/,
      /^\/promotion-detail/,
      /^\/rewards-promotions/,
      /^\/rewards-promotions-invitation-enrollment/,
      /^\/rewards-landing/,
      /^\/rewards-promotions-(favorite|favourite)/,
      /^\/favorite-categories/,
      /^\/favourite-categories/,
      /^\/personal-advisor-benefits/,
      /^\/special-sales/,
      /^\/stores-map/,
      /^\/member-get-member-credit-card/,
    ],
    groups: [ 'loyalty', 'accounts', 'pfm' ],
  },
  {
    patterns: [
      /^\/payroll/,
      /^\/member-get-member-payroll/,
      /^\/oc-payroll-portability/,
    ],
    groups: [ 'payroll' ],
  },
  {
    patterns: [
      /^\/branch-locator/,
      /^\/atm-locator/,
      /^\/request-branch-appointment/,
      /^\/search-place/,
      /^\/pois\//,
    ],
    groups: [ 'branches' ],
  },
  {
    patterns: [
      /^\/blackhawk/,
    ],
    groups: [ 'blackhawk', 'payments' ],
  },
  {
    patterns: [
      /^\/settings/,
      /^\/landing-settings/,
      /^\/app-permissions/,
    ],
    groups: [ 'profile', 'security', 'notifications' ],
  },
  {
    patterns: [
      /^\/operations/,
      /^\/operationals/,
    ],
    groups: [ 'accounts', 'cards', 'payments' ],
  },
  {
    patterns: [
      /^\/pockets/,
      /^\/piggy-banks/,
    ],
    groups: [ 'accounts', 'payments' ],
  },
  {
    patterns: [
      /^\/customer-contracts/,
      /^\/configure-products/,
      /^\/contract-product/,
    ],
    groups: [ 'accounts', 'cards', 'loans', 'investments', 'insurances' ],
  },
  {
    patterns: [
      /^\/digital-butler/,
      /^\/mtu-exception/,
      /^\/about/,
      /^\/magic-log/,
      /^\/demo/,
      /^\/spherica-setup/,
    ],
    groups: [ 'misc' ],
  },
];
