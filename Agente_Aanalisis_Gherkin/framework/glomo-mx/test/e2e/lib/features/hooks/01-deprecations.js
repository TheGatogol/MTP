import {Before} from '@cucumber/cucumber';

Before({
    tags: [
        '@ocLoanOfferAnalytics',
        '(@checksDeposit and @serverErrors)',
        '@contactsAgenda',
        '@interbankTransfer',
        '@internalTransfer',
        '@ownTransfer',
        '@ANA_FW005', '@ANA_FW006',
        '@ANA_OPA005', '@ANA_OPA006',
        '@ANA_TI008', '@ANA_TI009',
        '@ANA_UAC003', '@ANA_UAC004',
        '@FW002',
        '@IT002',
        '@LD001',
        '@MCI001', '@MCI003',
        '@OPA002',
        '@OCL002',
        '@PDI001',
        '@TR006', '@TR007',
    ].join(' or ')
}, async function() {
    config.deprecations.waitForAllowSingleMatch = true;
});
