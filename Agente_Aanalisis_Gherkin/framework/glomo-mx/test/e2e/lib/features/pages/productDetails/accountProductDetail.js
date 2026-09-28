import { ScreenValidationKeyNotFound, page, ElementNotFoundError } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

import ProductDetail from './productDetail';
@page()
class AccountProductDetail extends ProductDetail {
    constructor() {
        super({
            root: '#cells-template-account[state="active"]',
            elements: {
                accountTransactionList: {
                    properties: { root: '[data-tag-name="bbva-feature-transactions-list-accounts-mx"]' },
                    allMovementsModal: '[data-tag-name="all-movements-modal"] [data-tag-name="bbva-help-modal"]',
                    movements: {
                        properties: { root: '[data-tag-name="modal-info"] [data-tag-name="bbva-help-modal"]' },
                        movementsInfoText: '#helpModalContent [data-tag-name="bbva-type-text"]',
                        movementsInfoAcceptButton: 'div.modal-footer [data-tag-name="bbva-button-default"]',
                        movementsInfoIcon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                    },
                    standIn: {
                        properties: { root: '#standin-modal' },
                        headerStandinModal: '[data-tag-name="bbva-header-main"]',
                        buttonRightStandinModal: '[data-tag-name="bbva-header-main"] #btn-close',
                        acceptButtonStandinModal: '.modal-footer [data-tag-name="bbva-button-default"]',
                        descriptionStandinModal: '#helpModalContent [data-tag-name="bbva-type-text"]',
                        titleStandinModal: '#helpModalTitle [data-tag-name="bbva-type-text"]',
                        iconStandinModal: '#helpModalTitle div.microillustration-container'
                    },
                    noMovements: {
                        properties: { root: '#no-transactions-preview' },
                        text: '.no-transactions-text-container [data-tag-name="bbva-type-text"]',
                        icon: '[data-tag-name="bbva-clip-microillustration"]',
                    },
                    transactionList: {
                        properties: { root: 'div.transactions-li' },
                        seeAllMovementsButton: '.all-movements-btn [data-tag-name="bbva-button-default"]',
                        lastMovementItem: '[data-tag-name="transaction-list"] [data-tag-name="transaction-item"]',
                        itemListMovements: '[data-tag-name="transaction-list"] [data-tag-name="transaction-item"] div.transaction-container[id=__TRANSACTION_ID__]',
                        movementsDatePreview: '[data-tag-name="bbva-header-category"]',
                        movementAmountPreview: '[data-tag-name="transaction-item"] #amount',
                        movementCategoryPreview: '[data-tag-name="transaction-item"] #description'
                    },
                    allTransactionsModal: {
                        properties: { root: '[data-tag-name="all-movements-modal"] div.all-transactions-modal' },
                        headerAllMovements: 'div[slot="slot-header"] [data-tag-name="bbva-header-main"]',
                        transactionsListAllMovements: '[data-tag-name="transaction-list"]',
                        movementsDate: '[data-tag-name="transaction-list"] [data-tag-name="bbva-header-category"]',
                        helpButton: 'div[slot="slot-header"] [data-tag-name="bbva-header-main"] #btn-info',
                        transactionItem: {
                            properties: { root: '[data-tag-name="transaction-list"] [data-tag-name="transaction-item"]' },
                            itemListAllMovements: 'div.transaction-container[id=__TRANSACTION_ID__]',
                            movementAmount: '#amount',
                            movementCategory: '#description',
                        }
                    }
                },
                featureAccountDetail: {
                    properties: { root: '[data-tag-name="bbva-feature-product-detail-accounts-mx"]' },
                    iconMessageDark: '#standInModeNotification',
                    standInBanner: '#productDetailAccountInfoMessage #standInMode',
                    accountMoreInfo: '#productDetailAccountInfoMessage #standInMode [data-tag-name="bbva-type-link"]',
                    boostInterbankTransfersMessage: '#productDetailAccountInfoMessage [data-tag-name="bbva-notification-message"]',
                    foreignCurrencyMessage: '#foreignCurrency',
                    interbankTransferLink: '#productDetailAccountInfoMessage [data-tag-name="bbva-notification-message"] div div.link [data-tag-name="bbva-type-link"]',
                    restrictedAccountMessage: '#productDetailAccountInfoMessage #restrictedAccount',
                    restrictedAccountLink: '#productDetailAccountInfoMessage #restrictedAccount div div.link [data-tag-name="bbva-type-link"]',
                    restrictedAccountButton: '#productDetailAccountInfoMessage [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-button-default"]',
                },
                moreInfoSection: {
                    properties: { root: '#productDetailAccountMx #productDetailAccountMoreInfo .list-content-account-more-info' },
                    productName: '#accountName #value',
                    productLabel: '#accountName #key',
                    payrollChange: '#changePayroll #key',
                    accountContent: '#account #container #key-value #value',
                    accountLabel: '#account #container #key-value #key',
                    accountCopyIcon: '#account #account',
                    qrDepositLabel: '#qrDeposit #key',
                    qrDepositContent: '#qrDeposit #text-wrapper',
                    qrDepositIcon: '#qrDeposit #text-wrapper #icon',
                    qrDepositButton: '#qrDeposit #qrDeposit',
                    clabeLabel: '#clabe #key',
                    clabeCopyIcon: '#clabe #clabe',
                    generalTitle: '#bbva-feature-product-detail-accounts-mx-detail-general',
                    swiftLabel: '#swiftCode #key',
                    swiftContent: '#swiftCode #value',
                    swiftCopyIcon: '#swiftCode #swiftCode',
                    phoneLabel: '#linkedPhone #key',
                    phoneContent: '#linkedPhone #value',
                    phoneCopyIcon: '#linkedPhone #linkedPhone',
                    titularLabel: '#holder #key',
                    titularContent: '#holder #value',
                    debitCardLabel: '#debitCard #key',
                    debitCardContent: '#debitCard #value',
                    debitCopyIcon: '#debitCard #debitCard',
                    clabeContent: '#clabe #value',
                },
                qrDepositScreen: {
                    properties: { root: '#productDetailAccountQrDeposit #productDetailAccountQrDepositComponent' },
                    shareBtn: '#shareInfoBtnQR',
                },
                productDetail: {
                    properties: { root: '#productDetailAccountMx' },
                    title: 'section #productDetailAccountHeader #heading',
                    backButton: 'section #productDetailAccountHeader #btn-back .text.lines',
                    transfersPendingMovementsLink: '.movementsStandInLink #movementsStandInLink',
                    carrouselSlides: {
                        properties: { root: '#carouselSlides div.swiper-slide.swiper-slide-active div'},
                        accountName: '.account-card-info [data-tag-name="bbva-type-text"] span',
                        account: '.account-card-info [data-tag-name="bbva-badge-reference"]',
                        amount: '.amount-info div span.amount-block',
                        maskedAmount: '.amount-info bbva-type-amount[mask]',
                        currency: '.amount-info div span.currency',
                        balanceLabel: '.amount-info bbva-type-text',
                        viewAcountLink: '[data-tag-name="bbva-type-link"]',
                        accountinfoCard: '.account-card-info',
                    },
                    accountErrorCard: '#carouselSlides div #productDetailAccountCard [data-tag-name="product-detail-account-info-message"] #infoMessage #retryError',
                    accountRetryButton: '#carouselSlides div #productDetailAccountCard [data-tag-name="product-detail-account-info-message"] #infoMessage #retryError [data-tag-name="bbva-type-link"]',
                    accountSlider: '.steps .chevron-next',
                    seeAccount: '#carouselSlides [aria-labelledby="slide-1"] #productDetailAccountCard #moreInfo',
                    minorsHiringCardCloseButton: '.card-container [data-tag-name="bbva-type-icon"]',
                    minorHiringCardTitle: '.card-container [size="L"]',
                    minorHiringCardText: '.card-middle-text',
                    minorsHiringCardLink: '.card-container [data-tag-name="bbva-type-link"]',
                    goodBalanceHelp: '#productDetailAccountBalanceToolTip .balance-text .text-and-icon #infoIcon',
                    goodBalanceMessage: '#productDetailAccountBalanceToolTip .balance-text .text-and-icon #infoText',
                    goodBalanceAmount: '#productDetailAccountBalanceToolTip .balance-text #balanceAmount',
                    pocketsCard: '.pockets-account',
                    pocketMessage: '.pockets-account .title-pockets',
                    createPocketLink: '.pockets-account .link-pockets',
                    limitedEnterpriseAccount: '#productDetailAccountCard #limitedEnterpriseAccount',
                    pocketsLimitedEnterprise: '#productDetailAccountInfoMessage #companyContact',
                    operationsModule: '.operatives ',
                    operatives: {
                        properties: { root: '#productDetailAccountOperatives .operatives #productDetailAccountButtonsSection .button-row-section'},
                        payCardBtn: '#credit-card-payment',
                        transferOperative: '#transfers',
                        billPaymentsBtn: '#bill-payments',
                        giveMoneyEntrypoint: '#give-money',
                        parentalControlBtn: '#parental-control',
                        requestMoney: '#request-money',
                        buyAirExpress: '#refills-and-packages',
                    },
                    viewMoreIcon: 'div #view-more',
                    moreInfo: {
                        properties: { root: '#productDetailAccountMoreInfo' },
                        shareIcon: '.shareInfo',
                        participantsTitle: '#bbva-feature-product-detail-accounts-mx-detail-participants',
                        paymentTitle: '#bbva-feature-product-detail-accounts-mx-detail-payment-method',
                        closeBtnHeader: '[data-tag-name="bbva-header-main"]',
                        headerDetail: '[data-tag-name="bbva-header-main"] #heading',
                    },
                    modalTpl: {
                        properties: { root: '[data-tag-name="modal-template"] [data-tag-name="bbva-help-modal"]' },
                        modalContent: '#helpModalContent .slot-content',
                        headerHelpModal: '#helpModalHeader',
                        headerHelpModalCloseButton: '#helpModalHeader #btn-close',
                        acceptModal: '.content .transition-container .help-modal .modal-main .modal-footer .footer-button',
                    },
                    moreData: '#moreInfo'
                },
                featureAccount: '[data-tag-name="bbva-feature-product-detail-accounts-mx"]',
                qrDepositComponent: '#productDetailAccountQrDeposit #productDetailAccountQrDepositComponent',
                accountErrorMessage: '#infoMessage #finalError',
                pocketsErrorMessage: '#retryError',
                pocketRetryButton: '#retryError [data-tag-name="bbva-type-link"]',
                infoMessageAllMovements: '.all-transactions-modal #all-transactions-modal div #ninety-day-notice',
                proactivityMessage: 'proactivity-message',
                proactivityMessageClose: 'proactivity-message [type="relevantFact"] [data-tag-name="bbva-button-default"]',
                proactivityMessageKnowMore: 'proactivity-message [type="relevantFact"] [data-tag-name="bbva-link"]',
                headerAccount: '#productDetailAccountMoreInfo .transition-container .modal-header .first-level-sequential .header',
                giveMoneyButton: '#give-money',
                modalInfo: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            title: '.content .modal-title-content',
                            imageStandIn: '.content #helpModalTitle div.microillustration-container',
                            titleStandIn: '.content #helpModalTitle [data-tag-name="bbva-type-text"]',
                            descriptionStandIn: '.content #helpModalContent [data-tag-name="bbva-type-text"]',
                            image: '.content .microillustration-modal',
                            description: '.content .description',
                            checksOperative: '#checks-sections',
                            buyAirOperative: '#refills-and-packages',
                            codicelSendButton: '#codicel-peer-to-peer-send',
                            transfersButton: '#transfers',
                            billPaymentsButton: '#bill-payments',
                            creditCardPaymentButton: '#credit-card-payment',
                            receivePayrollButton: '#receive-payroll',
                            codiButton: '#codi',
                            internationalTransfersButton: '#interbank-transfers',
                            changePayrollButton: '#change-payroll',
                            statementsButton: '#account-statements',
                            cardlessWithdrawalButton: '#cardless-withdrawal',
                            vinculationDesvinculationCodicel: '#codicel-agree-and-remove-consent',
                            editAliasButton: '#edit-account-alias',
                            mobileTopUpPackagesButton: '#mobile-top-up-packages',
                            videoSelfieButton: '#configOperatives #add-video-selfie',
                            upgradeAccountButton: '#configOperatives #upgrade-N2-N4-page-hybrid',
                            indicator: '#updateAccountContent',
                            questions: '#title',
                        }
                    }
                ],
                rcpProactiveMessage: {
                    medium: {
                        message: '#upgradeCustomerProactiveMessage',
                        label: '#productDetailAccountCard [data-tag-name="bbva-badge-default"][type="warning"]',
                        link: '#upgradeCustomerProactiveMessage [data-tag-name="bbva-type-link"]',
                        button: '#upgradeCustomerProactiveMessage [data-tag-name="bbva-button-default"]',
                        close: '#upgradeCustomerProactiveMessage .icon-close'
                    },
                    high: {
                        message: '#upgradeCustomerProactiveMessageLimit',
                        label: '#productDetailAccountCard [data-tag-name="bbva-badge-default"][type="error"]',
                        link: '#upgradeCustomerProactiveMessageLimit [data-tag-name="bbva-type-link"]',
                        button: '#upgradeCustomerProactiveMessageLimit [data-tag-name="bbva-button-default"]',
                        close: '#upgradeCustomerProactiveMessageLimit .icon-close'
                    },
                    moreInfoModal: {
                        modal: '[id-modal="expandAccountRcp"]',
                        mainTitle: '#mainTitle',
                        description: '#updateAccountContent'
                    },
                    accountDetail: '#accountNameRcp #container [data-tag-name="bbva-type-link"]'
                }
            },
            requiredElements: [
                'featureAccount'
            ],
        });
    }

    async _screenValidation({ item, value }) {
        const reverseWaitForVisible = value === 'not visible';
        switch (item.toLowerCase()) {
            case 'header':
                await this.productDetail.title.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'back button':
                await this.productDetail.backButton.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'account':
                await this.productDetail.carrouselSlides.account.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'amount':
                await this.productDetail.carrouselSlides.amount.waitForDisplayed({
                    timeout: config.wait.XXL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'masked amounts of accounts':
                await this.productDetail.carrouselSlides.maskedAmount.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'currency':
                await this.productDetail.carrouselSlides.currency.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'balance label':
                await this.productDetail.carrouselSlides.balanceLabel.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'checks operative':
                await this.modalInfo.additionalElements.checksOperative.waitForClickable({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'view account data link':
                await this.productDetail.carrouselSlides.viewAcountLink.waitForClickable({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'account info card':
                await this.productDetail.carrouselSlides.accountinfoCard.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'account error message':
                await this.accountErrorMessage.waitForDisplayed({
                    timeout: config.wait.M,
                });
                break;
            case 'carrousel':
                await this.productDetail.accountSlider.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'message':
                if (reverseWaitForVisible) {
                    await this.proactivityMessage.waitForDisplayed({
                        timeout: config.wait.XXXL,
                        reverse: reverseWaitForVisible
                    });
                } else {
                    await this.proactivityMessage.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'message transfers':
                if (reverseWaitForVisible) {
                    await this.featureAccountDetail.boostInterbankTransfersMessage.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: reverseWaitForVisible
                    });
                } else {
                    await this.featureAccountDetail.boostInterbankTransfersMessage.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'message foreign currency':
                await this.featureAccountDetail.foreignCurrencyMessage.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'close message':
                await this.proactivityMessageClose.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'go to detail':
                await this.proactivityMessageKnowMore.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'link transfers':
                if (reverseWaitForVisible) {
                    await this.featureAccountDetail.interbankTransferLink.waitForDisplayed({
                        timeout: config.wait.L,
                        reverse: reverseWaitForVisible
                    });
                } else {
                    await this.featureAccountDetail.interbankTransferLink.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'link restricted account':
                await this.featureAccountDetail.restrictedAccountButton.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'pockets card':
                await this.productDetail.pocketsCard.waitForExist({ timeout: config.wait.M });
                break;
            case 'operations module':
                await this.productDetail.operationsModule.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'last movements':
                await this.accountTransactionList.transactionList.__root.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                await this.accountTransactionList.transactionList.__root.scrollIntoView();
                break;
            case 'account info limited enterprise':
                await this.productDetail.limitedEnterpriseAccount.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'account info error card':
                await this.productDetail.accountErrorCard.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'account retry button':
                await this.productDetail.accountRetryButton.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'pockets limited enterprise':
                await this.productDetail.pocketsLimitedEnterprise.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'pockets error card':
                await this.pocketsErrorMessage.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'pocket retry button':
                await this.pocketRetryButton.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'see all movements button':
                await this.accountTransactionList.transactionList.seeAllMovementsButton.waitForDisplayed({
                    timeout: config.wait.XL,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'mobile payments':
                await this.billPaymentsButton.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForVisible });
                break;
            case 'icon no movements':
                await this.accountTransactionList.noMovements.icon.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'text no movements':
                await this.accountTransactionList.noMovements.text.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'see account':
                await this.productDetail.goodBalanceAmount.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'card minor close button':
                await this.productDetail.minorsHiringCardCloseButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'card minor title':
                await this.productDetail.minorHiringCardTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'card minor text':
                await this.productDetail.minorHiringCardText.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'card minor link':
                await this.productDetail.minorsHiringCardLink.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'good balance':
                await this.productDetail.goodBalanceHelp.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'message good balance':
                await this.productDetail.goodBalanceMessage.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'transfer operative':
                await this.productDetail.operatives.transferOperative.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'bill payment operative':
                await this.productDetail.operatives.billPaymentsBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'buy air operative':
                await this.buyAirOperative.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'buy air operative express':
                await this.productDetail.operatives.buyAirExpress.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'view more icon':
                await this.productDetail.viewMoreIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'pay card operative':
                await this.productDetail.operatives.payCardBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'essential mode banner':
                await this.featureAccountDetail.standInBanner.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'stand in notification text':
                await this.featureAccountDetail.iconMessageDark.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'pending movements link':
                await this.productDetail.transfersPendingMovementsLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header standin spei':
                await this.accountTransactionList.standIn.headerStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button right standin modal':
                await this.accountTransactionList.standIn.buttonRightStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button standin modal':
                await this.accountTransactionList.standIn.acceptButtonStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description standin modal':
                await this.accountTransactionList.standIn.descriptionStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title standin modal':
                await this.accountTransactionList.standIn.titleStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon standin modal':
                await this.accountTransactionList.standIn.iconStandinModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header modal':
                await this.productDetail.modalTpl.headerHelpModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content modal':
                await this.productDetail.modalTpl.modalContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button modal':
                await this.productDetail.modalTpl.acceptModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal':
                await this.modalInfo.additionalElements.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'image modal standin':
                await this.modalInfo.additionalElements.imageStandIn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal standin':
                await this.modalInfo.additionalElements.titleStandIn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description modal standin':
                await this.modalInfo.additionalElements.descriptionStandIn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'image':
                await this.modalInfo.additionalElements.image.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description':
                await this.modalInfo.additionalElements.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header detail':
                await this.productDetail.moreInfo.headerDetail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'product name':
                await this.moreInfoSection.productName.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account content':
                await this.moreInfoSection.accountContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'clabe content':
                await this.moreInfoSection.clabeContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'payroll change':
                await this.moreInfoSection.payrollChange.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header account':
                await this.headerAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'share icon':
                await this.productDetail.moreInfo.shareIcon.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'general title':
                await this.moreInfoSection.generalTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'product label':
                await this.moreInfoSection.productLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account label':
                await this.moreInfoSection.accountLabel.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'account copy icon':
                await this.moreInfoSection.accountCopyIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'qr deposit label':
                await this.moreInfoSection.qrDepositLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'qr deposit content':
                await this.moreInfoSection.qrDepositContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'qr deposit icon':
                await this.moreInfoSection.qrDepositIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'clabe label':
                await this.moreInfoSection.clabeLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'clabe copy icon':
                await this.moreInfoSection.clabeCopyIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'swift label':
                await this.moreInfoSection.swiftLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'swift content':
                await this.moreInfoSection.swiftContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'swift copy icon':
                await this.moreInfoSection.swiftCopyIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'phone label':
                await this.moreInfoSection.phoneLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'phone content':
                await this.moreInfoSection.phoneContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'phone copy icon':
                await this.moreInfoSection.phoneCopyIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'participants title':
                await this.productDetail.moreInfo.participantsTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'review account clabe':
                await this.productDetail.moreData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'titular label':
                await this.moreInfoSection.titularLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'titular content':
                await this.moreInfoSection.titularContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'payment title':
                await this.productDetail.moreInfo.paymentTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'debit card label':
                await this.moreInfoSection.debitCardLabel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'debit card content':
                await this.moreInfoSection.debitCardContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'debit copy icon':
                await this.moreInfoSection.debitCopyIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'check management':
                await this.modalInfo.additionalElements.checksOperative.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForVisible });
                break;
            case 'credit card payment':
                await this.modalInfo.additionalElements.creditCardPaymentButton.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForVisible });
                break;
            case 'transfer':
                await this.modalInfo.additionalElements.transfersButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'bill Payment':
                await this.modalInfo.additionalElements.billPaymentButton.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'refills and packages':
                await this.modalInfo.additionalElements.buyAirOperative.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'statements':
                await this.modalInfo.additionalElements.statementsButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'change payroll':
                await this.modalInfo.additionalElements.changePayrollButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'receive payroll':
                await this.modalInfo.additionalElements.receivePayrollButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'codi':
                await this.modalInfo.additionalElements.codiButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'codicel send':
                await this.modalInfo.additionalElements.codicelSendButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'international transfers':
                await this.modalInfo.additionalElements.internationalTransfersButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'edit alias':
                await this.modalInfo.additionalElements.editAliasButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            /** All movements */
            case 'header all movements':
                await this.accountTransactionList.allTransactionsModal.headerAllMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info message all movements':
                await this.infoMessageAllMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'transactions list all movements':
                await this.accountTransactionList.allTransactionsModal.transactionsListAllMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'all movements modal':
                await this.accountTransactionList.allMovementsModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'item list movements':
                await this.accountTransactionList.transactionList.itemListMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'list movements':
                await this.accountTransactionList.allTransactionsModal.transactionsListAllMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount movements':
                await this.accountTransactionList.allTransactionsModal.transactionItem.movementAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'category movements':
                await this.accountTransactionList.allTransactionsModal.transactionItem.movementCategory.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'date movements preview':
                await this.accountTransactionList.transactionList.movementsDatePreview.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount movements preview':
                await this.accountTransactionList.transactionList.movementAmountPreview.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'category movements preview':
                await this.accountTransactionList.transactionList.movementCategoryPreview.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info text':
                await this.accountTransactionList.movements.movementsInfoText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info accept button':
                await this.accountTransactionList.movements.movementsInfoAcceptButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info message icon':
                await this.accountTransactionList.movements.movementsInfoIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'date movements':
                await this.accountTransactionList.allTransactionsModal.movementsDate.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card alert amount':
                await this.cardAlertAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            /**Upgrade Modal */
            case 'indicator':
                await this.modalInfo.additionalElements.indicator.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'questions':
                await this.modalInfo.additionalElements.questions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'rcp proactive message medium':
                await this.rcpProactiveMessage.medium.message.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForVisible });
                break;
            case 'rcp proactive message high':
                await this.rcpProactiveMessage.high.message.waitForDisplayed({ timeout: config.wait.M, reverse: reverseWaitForVisible });
                break;
            case 'rcp more info modal':
                await this.rcpProactiveMessage.moreInfoModal.modal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'rcp more info modal title':
                await this.rcpProactiveMessage.moreInfoModal.mainTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'rcp more info modal content':
                await this.rcpProactiveMessage.moreInfoModal.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async accountMoreInfoMessage() {
        await this.featureAccountDetail.accountMoreInfo.waitForDisplayed({ timeout: config.wait.M });
        await this.featureAccountDetail.accountMoreInfo.click();
    }

    async goToPayCard() {
        await this.productDetail.operatives.payCardBtn.waitForEnabled({ timeout: config.wait.M });
        await this.productDetail.operatives.payCardBtn.click();
    }

    async goBack() {
        await this.productDetail.backButton.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.backButton.click();
    }

    async viewMoreOperatives() {
        await this.productDetail.viewMoreIcon.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.viewMoreIcon.click();
    }

    async verifyAliasAccountName(newAlias) {
        await this.productDetail.carrouselSlides.accountName.waitForText({ timeout: config.wait.M, text: newAlias });
    }

    async verifyTransfer() {
        await this.productDetail.operationsModule.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.operatives.transferOperative.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.operatives.transferOperative.click();
    }

    async verifyTransferStandIn() {
        await this.productDetail.operationsModule.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.operatives.transferOperative.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.operatives.transferOperative.click();
        await this.productDetail.modalTpl.__root.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.modalTpl.__root.scrollIntoView({ block: 'end' });
    }

    async upgradeAccount() {
        await this.featureAccountDetail.restrictedAccountMessage.waitForDisplayed({ timeout: config.wait.M });
        await this.featureAccountDetail.restrictedAccountMessage.scrollIntoView({ block: 'end' });
        await this.featureAccountDetail.restrictedAccountButton.waitForDisplayed({ timeout: config.wait.M });
        await this.featureAccountDetail.restrictedAccountButton.click();
    }

    async upgradeAccountLinkModal() {
        await this.iconMessageLinkButton.scrollIntoView({ block: 'end' });
        await this.iconMessageLinkButton.click();
    }

    async viewAccountData() {
        await this.productDetail.carrouselSlides.viewAcountLink.waitForClickable({ timeout: config.wait.XL });
        await this.productDetail.carrouselSlides.viewAcountLink.click();
    }

    async viewTransfersPendingMovements() {
        await this.productDetail.transfersPendingMovementsLink.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.transfersPendingMovementsLink.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.transfersPendingMovementsLink.click();
    }

    async selectAccount() {
        await this.productDetail.accountSlider.waitForClickable({ timeout: config.wait.XL });
        await this.productDetail.accountSlider.click();
    }

    async goToPockets() {
        await this.productDetail.moreData.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.createPocketLink.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.createPocketLink.click();
    }

    async isPocket() {
        await this.productDetail.moreData.waitForDisplayed({ timeout: config.wait.M });
        await (await this.productDetail.pocketMessage.waitForDisplayed({ timeout: config.wait.XXL }))
            .waitForAnimation({ timeout: config.wait.L });
        return this.productDetail.pocketMessage.verifyText({ text: 'Total de apartados', exactMatch: false });
    }

    async accountInfoCardRetry(retries) {
        let i = 0;
        while (i < retries) {
            await this.productDetail.accountErrorCard.waitForDisplayed({ timeout: config.wait.XXL });
            await this.productDetail.accountRetryButton.click();
            i++;
        }
    }

    async pocketsCardRetry(retries) {
        let i = 0;
        while (i < retries) {
            await this.pocketsErrorMessage.waitForDisplayed({ timeout: config.wait.XL });
            await this.pocketsErrorMessage.waitForAnimation({ timeout: config.wait.XL });
            await this.pocketsErrorMessage.waitForEnabled({ timeout: config.wait.XL });
            await this.pocketRetryButton.click();
            i++;
        }
    }

    async seeAllMovements() {
        await this.accountTransactionList.transactionList.seeAllMovementsButton.scrollIntoView({ block: 'end' });
        await this.accountTransactionList.transactionList.seeAllMovementsButton.click({scrollOptions: { block: 'nearest'} });
    }

    async seeMovementDetail({ selectedNum }) {
        const movement = this.accountTransactionList.transactionList.itemListMovements.specifySelector({ placeholder: '__TRANSACTION_ID__', value: `M_${selectedNum}` });
        await movement.scrollIntoView();
        await movement.click();
    }

    async seeMovementDetailFromAllTransactions({ selectedNum } = {}) {
        await this.accountTransactionList.transactionList.seeAllMovementsButton.scrollIntoView({ block: 'end' });
        await this.accountTransactionList.transactionList.seeAllMovementsButton.click({useActions: true});
        const movement = selectedNum
            ? this.accountTransactionList.allTransactionsModal.transactionItem.itemListAllMovements.specifySelector({ placeholder: '__TRANSACTION_ID__', value: `M_${selectedNum}` })
            : this.accountTransactionList.allTransactionsModal.transactionItem.__root;
        await movement.waitForDisplayed({ timeout: config.wait.M });
        await movement.waitForAnimation({ timeout: config.wait.S });
        await movement.click();
    }

    async seeLastMovementDetail() {
        await this.accountTransactionList.transactionList.lastMovementItem.scrollIntoView();
        await this.accountTransactionList.transactionList.lastMovementItem.click();
    }

    async openHelpModal() {
        await this.accountTransactionList.allTransactionsModal.helpButton.waitForDisplayed({ timeout: config.wait.M });
        await this.accountTransactionList.allTransactionsModal.helpButton.click();
    }

    async selectMovement(numberId = '') {
        const movement = this.selectDetailMovement.specifySelector({ placeholder: '__OPERATION_ID__', value: numberId });
        await movement.scrollIntoView();
        await movement.waitForClickable({ timeout: config.wait.L });
        await movement.click();
    }

    async goToBillPayments() {
        await this.productDetail.operatives.billPaymentsBtn.waitForEnabled({ timeout: config.wait.XL });
        await this.productDetail.operatives.billPaymentsBtn.click();
    }

    async accessProactivityMessageDetailAccountDetail() {
        await this.proactivityMessage.waitForDisplayed({ timeout: config.wait.L });
        await this.proactivityMessage.waitForAnimation({ timeout: config.wait.L });
        await this.proactivityMessageKnowMore.waitForClickable({ timeout: config.wait.L });
        await this.proactivityMessageKnowMore.click();
    }

    async accessBoostInterbankTransfersMessageAccountDetail() {
        await this.featureAccountDetail.boostInterbankTransfersMessage.waitForDisplayed({ timeout: config.wait.L });
        await this.featureAccountDetail.boostInterbankTransfersMessage.waitForAnimation({ timeout: config.wait.L });
        await this.featureAccountDetail.interbankTransferLink.waitForDisplayed({ timeout: config.wait.L });
        await this.featureAccountDetail.interbankTransferLink.click();
    }

    async accessBoostInterbankRestringedAccountDetail() {
        await this.featureAccountDetail.boostInterbankTransfersMessage.waitForDisplayed({ timeout: config.wait.L });
        await this.featureAccountDetail.boostInterbankTransfersMessage.waitForAnimation({ timeout: config.wait.L });
        await this.featureAccountDetail.restrictedAccountButton.waitForDisplayed({ timeout: config.wait.L });
        await this.featureAccountDetail.restrictedAccountButton.click();
    }

    async goToGiveMoney() {
        await this.productDetail.operatives.giveMoneyEntrypoint.waitForEnabled({ timeout: config.wait.XL });
        await this.productDetail.operatives.giveMoneyEntrypoint.click();
    }

    async goToParentalControl() {
        await this.productDetail.operatives.parentalControlBtn.waitForEnabled({ timeout: config.wait.XL });
        await this.productDetail.operatives.parentalControlBtn.click();
    }

    async helpGoodBalanceCollection() {
        await this.productDetail.goodBalanceHelp.waitForDisplayed({ timeout: config.wait.XXL });
        await this.productDetail.goodBalanceHelp.click();
    }

    async seeMoreForAccount() {
        await this.productDetail.seeAccount.waitForClickable({ timeout: config.wait.XXL });
        await this.productDetail.seeAccount.click();
    }

    async goToRequestMoney() {
        await this.productDetail.operatives.requestMoney.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.operatives.requestMoney.click();
    }

    async acceptHelpModal() {
        await this.productDetail.modalTpl.headerHelpModalCloseButton.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.modalTpl.headerHelpModalCloseButton.click();
    }

    async closeHelpModal() {
        await this.productDetail.moreInfo.closeBtnHeader.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.moreInfo.closeBtnHeader.click();
    }

    async shareCustomerInfo() {
        await this.productDetail.moreInfo.shareIcon.waitForDisplayed({ timeout: config.wait.M });
        await this.productDetail.moreInfo.shareIcon.click();
    }

    async accessTheCheckSection() {
        await this.viewMoreOperatives();
        await this.modalInfo.additionalElements.checksOperative.waitForClickable({ timeout: config.wait.M });
        await this.modalInfo.additionalElements.checksOperative.click();
    }

    async accessInternationalRefunds() {
        await this.viewMoreOperatives();
        await this.accessInternationalTransfers();
    }

    async accessEditAlias() {
        await this.viewMoreOperatives();
        await this.selectEditAlias();
    }

    async accessMobileTopUpPackages() {
        await this.viewMoreOperatives();
        await this.mobileTopUpPackagesOperative();
    }

    async mobileTopUpPackagesOperative() {
        await this.modalInfo.additionalElements.mobileTopUpPackagesButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalInfo.additionalElements.mobileTopUpPackagesButton.click();
    }

    async selectEditAlias() {
        await this.modalInfo.additionalElements.editAliasButton.waitForClickable({ timeout: config.wait.M });
        await this.modalInfo.additionalElements.editAliasButton.click();
    }

    async goToDesvinculationVinculationCodicel() {
        await (await (await this.modalInfo.additionalElements.vinculationDesvinculationCodicel.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async accessUpgradeAccount() {
        await this.viewMoreOperatives();
        await this.modalInfo.additionalElements.upgradeAccountButton.waitForClickable({ timeout: config.wait.M });
        await this.modalInfo.additionalElements.upgradeAccountButton.click();
    }

    async accessGiveMoney() {
        await this.giveMoneyButton.waitForClickable({ timeout: config.wait.M });
        await this.giveMoneyButton.click();
    }

    async accessRestrictedAccountLink() {
        await this.featureAccountDetail.restrictedAccountButton.waitForClickable({ timeout: config.wait.M });
        await this.featureAccountDetail.restrictedAccountButton.click();
    }

    async operations(operative) {
        switch (operative.toLowerCase()) {
            case 'edit alias':
                await this.selectEditAlias();
                break;
            case 'cardless withdrawal':
                await this.modalInfo.additionalElements.cardlessWithdrawalButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.cardlessWithdrawalButton.click();
                break;
            case 'codi':
                await this.modalInfo.additionalElements.codiButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.codiButton.click();
                break;
            case 'codicel send':
                await this.modalInfo.additionalElements.codicelSendButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.codicelSendButton.click();
                await this.modalInfo.header.waitForDisplayed({ timeout: config.wait.L, reverse: true });
                break;
            case 'statement account':
                await this.modalInfo.additionalElements.statementsButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.statementsButton.click();
                break;
            case 'pay credit card':
                await this.modalInfo.additionalElements.creditCardPaymentButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.creditCardPaymentButton.click();
                break;
            case 'payroll portability':
                await this.modalInfo.additionalElements.receivePayrollButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.receivePayrollButton.click();
                break;
            case 'bill payment':
                await this.modalInfo.additionalElements.billPaymentsButton.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.billPaymentsButton.click();
                break;
            case 'mobile top up':
                await this.modalInfo.additionalElements.buyAirOperative.waitForClickable({ timeout: config.wait.M });
                await this.modalInfo.additionalElements.buyAirOperative.click();
                break;
            default:
                throw new ElementNotFoundError({ key: operative, args: arguments[0] });
        }
    }

    async goToAddVideoSelfie() {
        await this.viewMoreOperatives();
        await (await this.modalInfo.additionalElements.videoSelfieButton.waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async accessInternationalTransfers() {
        await this.modalInfo.additionalElements.internationalTransfersButton.waitForClickable({ timeout: config.wait.M });
        await this.modalInfo.additionalElements.internationalTransfersButton.click();
    }

    async accessToRestrictedModal() {
        await this.featureAccountDetail.restrictedAccountLink.waitForClickable({ timeout: config.wait.M });
        await this.featureAccountDetail.restrictedAccountLink.click();
    }

    async handleQRConnectorBbva() {
        const data = global.user.qrLink;
        await this.featureAccount.execute({
            script: data => this.handleQrCreateSuccess(data),
            args: [data]
        });
    }

    async handleQRConnectorBbvaWithError() {
        await this.featureAccount.execute({
            script: () => {
                this.qrDepositErrorCounter = 3;
                this._openQrDepositErrorModal();
            },
        });
    }

    async handleShareReceipt() {
        await this.qrDepositComponent.execute({
            script: () => this._handleShareReceipt(),
        });
    }

    async generateQrDeposit() {
        await this.moreInfoSection.qrDepositButton.waitForClickable({ timeout: config.wait.M });
        await this.moreInfoSection.qrDepositButton.click();
        await this.handleQRConnectorBbva();
    }

    async generateQrDepositWithError() {
        await this.moreInfoSection.qrDepositButton.waitForClickable({ timeout: config.wait.M });
        await this.moreInfoSection.qrDepositButton.click();
        await this.handleQRConnectorBbvaWithError();
    }

    async viewRcpUpgradeAccount(level) {
        await this.rcpProactiveMessage[level].button.waitForClickable({ timeout: config.wait.M });
        await this.rcpProactiveMessage[level].button.click();
    }

    async viewRcpAccountDetailUpgradeAccount() {
        await this.productDetail.moreData.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.moreData.click();
        await this.rcpProactiveMessage.accountDetail.waitForClickable({ timeout: config.wait.M });
        await this.rcpProactiveMessage.accountDetail.click();
    }

    async openRcpMoreInfo(level) {
        await this.rcpProactiveMessage[level].link.waitForClickable({ timeout: config.wait.M });
        await this.rcpProactiveMessage[level].link.click();
    }

    async closeRcpMessage(level) {
        await this.rcpProactiveMessage[level].close.waitForClickable({ timeout: config.wait.M });
        await this.rcpProactiveMessage[level].close.click();
    }

    async goToMinorGoalsHiring() {
        await this.productDetail.minorsHiringCardLink.waitForClickable({ timeout: config.wait.M });
        await this.productDetail.minorsHiringCardLink.click();
    }

    async accessBillPayments() {
        await this.viewMoreOperatives();
        await this.modalInfo.additionalElements.billPaymentsButton.waitForClickable({ timeout: config.wait.M });
        await this.modalInfo.additionalElements.billPaymentsButton.click();
    }
}

export default new AccountProductDetail();
