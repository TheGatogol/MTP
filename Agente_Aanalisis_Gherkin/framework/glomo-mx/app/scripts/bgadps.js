// Critical BGADPs loaded synchronously

import { BGADPGrantingTicketsPostV0, BGADPGrantingTicketsDeleteV0 } from '@cells-components/bgadp-granting-tickets-v0';
import { BGADPRisksRiskFiltersTermsPostV1, BGADPRisksAssessmentsDevicesAssesmentPostV1 } from '@cells-components/bgadp-risks-v1';
import { BGADPCatalogsCatalogRecordsGetV0 } from '@cells-components/bgadp-catalogs-v0';
import { BGADPCustomersCustomerContactDetailsGetV0 } from '@cells-components/bgadp-customers-v0';
import { BGADPCustomersCustomerEconomicDataPatchV1, BGADPCustomersCustomerTermsPostV1, BGADPCustomersCustomerContactDetailsGetV1, BGADPCustomersCustomerPatchV1, BGADPCustomersCustomerIdentificationProcessDocumentsPostV1, BGADPCustomersIdentityDocumentsValidateFormatPostV1, BGADPCustomersCustomerQuestionnairesQuestionnairePutV1, BGADPCustomersCustomerBusinessAgentsGetV1, BGADPCustomersCustomerTermsGetV1, BGADPCustomersCustomerGetV1, BGADPCustomersCustomerAddressesAddressPutV1, BGADPCustomersCustomerAddressesGetV1, BGADPCustomersGetV1, BGADPCustomersCustomerAvatarsPostV1, BGADPCustomersCustomerContactDetailsPostV1, BGADPCustomersCustomerSignaturesPostV1, BGADPCustomersCivilRegistriesSearchPostV1, BGADPCustomersCustomerQuestionnairesQuestionnaireGetV1 } from '@cells-components/bgadp-customers-v1';
import { BGADPCustomerLoginsIndicatorsGetV0 } from '@cells-components/bgadp-customer-logins-v0';
import { BGADPCustomerLoginsLoginsGetV1 } from '@cells-components/bgadp-customer-logins-v1';
import { BGADPSecuritySoftwareTokensPostV1 } from '@cells-components/bgadp-security-v1';
import { BGADPMxSecuritySoftwareTokensRegisterPostV0 } from '@cells-components/bgadp-mx-security-v0';
import { BGADPMxSessionSessionsSessionTrackingDataPostV1 } from '@cells-components/bgadp-mx-session-v1';
import { BGADPMxOperationRegistriesRecoverRegistryPostV0 } from '@cells-components/bgadp-mx-operation-registries-v0';
import { BGADPLoyaltyConvertSimulatePostV0, BGADPLoyaltyPointsRedemptionPostV0, BGADPLoyaltyConvertPostV0, BGADPLoyaltyPointsTransferRewardsPostV0, BGADPLoyaltyPointsRedemptionSimulatePostV0 } from '@cells-components/bgadp-loyalty-v0';
import { BGADPLoyaltyConvertSimulatePostV1, BGADPLoyaltyConvertPostV1 } from '@cells-components/bgadp-loyalty-v1';
import { BGADPPromotionsGetV1, BGADPPromotionsSuggestionsGetV1, BGADPPromotionsStoresGetV1, BGADPPromotionsCategoriesGetV1, BGADPPromotionsCategoriesPatchV1 } from '@cells-components/bgadp-promotions-v1';
import { BGADPCampaignsOffersOfferRedeemPostV1, BGADPCampaignsOffersGetV1 } from '@cells-components/bgadp-campaigns-v1';

import { initBgadpLoader } from './bgadp-lazy-loader.js';

window.NPMBGADPGrantingTicketsV0 = { BGADPGrantingTicketsPostV0, BGADPGrantingTicketsDeleteV0 };
window.NPMBGADPRisksV1 = { BGADPRisksRiskFiltersTermsPostV1, BGADPRisksAssessmentsDevicesAssesmentPostV1 };
window.NPMBGADPCatalogsGetV0 = { BGADPCatalogsCatalogRecordsGetV0 };
window.NPMBGADPCustomersV0 = { BGADPCustomersCustomerContactDetailsGetV0 };
window.NPMBGADPCustomersV1 = { BGADPCustomersCustomerEconomicDataPatchV1, BGADPCustomersCustomerTermsPostV1, BGADPCustomersCustomerContactDetailsGetV1, BGADPCustomersCustomerPatchV1, BGADPCustomersCustomerIdentificationProcessDocumentsPostV1, BGADPCustomersIdentityDocumentsValidateFormatPostV1, BGADPCustomersCustomerQuestionnairesQuestionnairePutV1, BGADPCustomersCustomerBusinessAgentsGetV1, BGADPCustomersCustomerTermsGetV1, BGADPCustomersCustomerGetV1, BGADPCustomersCustomerAddressesAddressPutV1, BGADPCustomersCustomerAddressesGetV1, BGADPCustomersGetV1, BGADPCustomersCustomerAvatarsPostV1, BGADPCustomersCustomerContactDetailsPostV1, BGADPCustomersCustomerSignaturesPostV1, BGADPCustomersCivilRegistriesSearchPostV1, BGADPCustomersCustomerQuestionnairesQuestionnaireGetV1 };
window.NPMBGADPCustomerLoginsIndicatorsGetV0 = BGADPCustomerLoginsIndicatorsGetV0;
window.NPMBGADPCustomerLoginsLoginsGetV1 = BGADPCustomerLoginsLoginsGetV1;
window.NPMBGADPSecurityV1 = { BGADPSecuritySoftwareTokensPostV1 };
window.NPMBGADPMxSecurityV0 = { BGADPMxSecuritySoftwareTokensRegisterPostV0 };
window.NPMBGADPSessionV1 = { BGADPMxSessionSessionsSessionTrackingDataPostV1 };
window.NPMBGADPOperationRegistriesV0 = { BGADPMxOperationRegistriesRecoverRegistryPostV0 };
window.NPMBGADPLoyaltyV0 = { BGADPLoyaltyConvertSimulatePostV0, BGADPLoyaltyPointsRedemptionPostV0, BGADPLoyaltyConvertPostV0, BGADPLoyaltyPointsTransferRewardsPostV0, BGADPLoyaltyPointsRedemptionSimulatePostV0 };
window.NPMBGADPLoyaltyV1 = { BGADPLoyaltyConvertSimulatePostV1, BGADPLoyaltyConvertPostV1 };
window.NPMBGADPPromotionsV1 = { BGADPPromotionsGetV1, BGADPPromotionsSuggestionsGetV1, BGADPPromotionsStoresGetV1, BGADPPromotionsCategoriesGetV1, BGADPPromotionsCategoriesPatchV1 };
window.NPMBGADPCampaignsV1 = { BGADPCampaignsOffersOfferRedeemPostV1, BGADPCampaignsOffersGetV1 };

window._bgadpLoaderReady = initBgadpLoader();