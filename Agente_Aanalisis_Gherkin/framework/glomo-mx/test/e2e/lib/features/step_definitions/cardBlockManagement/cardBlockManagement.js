import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import * as utilsCardsPage from '../../utils/utilsCards';
import cardBlockManagement from '../../pages/cardBlockManagement/cardBlockManagement';
import branchLocatorPage from '../../pages/branchLocator/branchLocator';
import searchBranchPage from '../../pages/branchLocator/searchBranch';
import {Commands} from '@csqe/radish';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

function getCamelCaseTableData(table) {
    return _.mapKeys(table.rowsHash(), (v, k) => _.camelCase(k));
}

function getOtpIsRequired(management, newCard) {
    return (
        (management === 'block and reposition' || management === 'reposition') &&
        newCard !== 'instant' && newCard !== 'single instant');
}

async function applyCardBlockCriteria(tableData) {
    if (tableData.reason) {
        await cardBlockManagement.selectBlockReason(tableData.reason.toLowerCase());
    }
    if (tableData.newCard) {
        await cardBlockManagement.selectNewCardOption(tableData.newCard.toLowerCase());
    }
    if (tableData.address) {
        await cardBlockManagement.selectAddress(tableData.address.toLowerCase());
    }
    if (tableData.date) {
        await cardBlockManagement.completeDate(tableData.date.toLowerCase());
    }
    if (tableData.terms) {
        await cardBlockManagement.confirmTermsAndConditions();
    }
}

When(/^the user (completes|confirms|completes without otp) the (block|block and reposition|reposition|renewal) card process with the following criteria$/, async function (action, management, table) {
    const tableData = getCamelCaseTableData(table);
    storage['otp'] = action === 'confirms' ? false : getOtpIsRequired(management, tableData.newCard);
    await applyCardBlockCriteria(tableData);
    if (action === 'completes') {
        await cardBlockManagement.confirmCardBlockManagementProcess({isOtpRequired: storage['otp']});
    } else if (action === 'completes without otp') {
        await cardBlockManagement.confirmCardBlockManagementProcess();
    }
});

When(/^the user attempts to the (block|block and reposition|reposition|renewal) card process with the following criteria$/, async function (management, table) {
    const tableData = getCamelCaseTableData(table);
    await applyCardBlockCriteria(tableData);
    await cardBlockManagement.confirmCardBlockManagementProcess();
});

When(/^the user accesses the (block|block and reposition|reposition|renewal) process with the following criteria$/,
    async function (management, table) {
        const tableData = getCamelCaseTableData(table);
        const isAdditional = tableData.additional === 'yes';
        const isReasonExpired = (tableData.reason || '').trim().toLowerCase() === 'expired';
        const cardId = utilsCardsPage.findCardByCriteria(tableData);
        if (isAdditional) {
            await navigation.dashboard.go();
            await navigation.card.additionalCardDetail.go({ card: cardId });
        } else if (!isReasonExpired)  {
            await navigation.card.orangeCardProductDetail.go({ card: cardId });
            await orangeCardProductDetail.viewMoreOperatives();
        } else {
            await navigation.card.orangeCardProductDetail.go({ card: cardId });
        }
        await navigation.card.cardBlockManagement.go();
    }
);

When('the user accepts the terms and confirms the process', async function () {
    await cardBlockManagement.confirmTermsAndConditions();
    await cardBlockManagement.confirmCardBlockManagementProcess({isOtpRequired: true});
});

When('the user completes the card replacement', async function () {
    await cardBlockManagement.confirmCardBlockManagementProcess({isOtpRequired: storage['otp']});
});

When('the user modifies the block reason in resume screen with the following criteria', async function (table) {
    const tableData = getCamelCaseTableData(table);
    await cardBlockManagement.modifyBlockReason(tableData.reason.toLowerCase());
});

When('the user modifies terms and conditions in resume screen', async function () {
    await cardBlockManagement.modifyTermsAndConditions();
});

When('the user modifies address selection in resume screen', async function () {
    await cardBlockManagement.modifyAddressSelection();
});

When('the user closes completely the operative', async function () {
    await cardBlockManagement.exitProcess();
});

When('the user {string} the branch process', async function (action) {
    await cardBlockManagement.exitProcessBranch({action});
});

When('the user closes the operative', async function () {
    await cardBlockManagement.closeOperative();
});

When('the user modifies programmed delivery', async function () {
    await cardBlockManagement.modifiesProgrammedDelivery();
});

When('the user selects process at the branch in address selection screen', async function () {
    await cardBlockManagement.processAtTheOffice();
});

When('the user continue address process', async function () {
    await cardBlockManagement.continueAddressProcess();
});

When('the user consults privacy policy in replacement card process', async function () {
    await cardBlockManagement.consultsPrivacyPolicy();
});

When(/^the user (shows|hides) my address in replacement card process$/, async function (action) {
    await cardBlockManagement.showsMyAddress(action);
});

When('the user modifies address selection in resume screen and continues with process', async function () {
    await cardBlockManagement.modifyAddressSelection();
    await cardBlockManagement.selectAddress('custom address');
    await cardBlockManagement.completeDate('date selection');
});

When('the user introduces data in other address section with the following criteria', async function (table) {
    const tableData = getCamelCaseTableData(table);
    await cardBlockManagement.selectAddress('custom address', false,  false);
    await cardBlockManagement.modifyAddress(tableData.address.toLowerCase());
});

When(/^the user (searches|attempts to search) for and selects a branch$/, async function(option) {
    const search = global.user.branchAddress;
    await navigation.branchLocator.searchBranch.go();
    await searchBranchPage.searchBranch(search);
    await searchBranchPage.selectFirstSearchOption();
    await navigation.branchLocator.branchLocator.assert();
    await branchLocatorPage.chooseBranch();
    await navigation.card.cardBlockManagement.assert();
    if (option === 'searches') {
        await cardBlockManagement.confirmAddressSelection();
    }
});

When ('the user accesses to modify address in branch map selector', async function () {
    await cardBlockManagement.selectAddress('edited address', false, true);
    await navigation.branchLocator.branchLocator.assert();
});

When(/^the user attempts to (hide|show|replacement|block card process) (\d+) times$/, async function(action, retries) {
    const requiresOtp = action === 'show' || action === 'replacement';
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryModal({isRequiredOtp: requiresOtp});
    }
});
