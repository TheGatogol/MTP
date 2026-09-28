import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('OcAccount')
class OcAccount extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocAccount[state="active"]',
            elements: {
                headerCloseButton: '[data-tag-name=bbva-feature-oc-account-mx-spherica] [data-tag-name=__PAGE__] #helpModalHeader #btn-close',
                editButton: '#account-registration #__STEP__ #editButton[data-tag-name="bbva-type-link"]',
                inductionPage: {
                    properties: {
                        root: '[data-tag-name=bbva-feature-oc-account-mx-spherica] [data-tag-name=digital-account-induction-page-n2] #digital-account-induction',
                    },
                    header: '#helpModalHeader',
                    headerCloseButton: '#helpModalHeader #btn-close',
                    image: '[data-tag-name=bbva-panel-container] [data-tag-name=digital-account-offer-value] [data-tag-name=bbva-clip-microillustration]',
                    offerDescription: '[data-tag-name=bbva-type-text].onboarding-description',
                    benefitsTitle: '[data-tag-name=bbva-type-text] h2',
                    benefitsSubtitle: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-text"]',
                    firstBenefit: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-text"]',
                    secondBenefit: '#less-tasks .benefits-title',
                    considerationTitle: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-text"]',
                    considerationDescription: '.induction-page-offer-considerations-area .onboarding-description',
                    knowMoreButton: '.induction-page-offer-considerations-area [data-tag-name=bbva-type-link]#know-more',
                    continueButton: '.modal-footer [data-tag-name="bbva-button-default"]'
                },
                contractAccount: {
                    properties: {
                        root: '[data-tag-name="bbva-feature-oc-account-mx-spherica"] #regDigAccN2',

                    },
                    header: '#helpModalHeader [data-tag-name="bbva-type-text"]',
                    headerCloseButton: '#account-registration [data-tag-name=bbva-header-main] #btn-close',
                    titleStepOne: '#step-1 #heading',
                    showDataButton: 'digital-account-personal-information .address-title .options-right [data-tag-name="bbva-type-link"]',
                    privacyNoticeButton: 'digital-account-personal-information .content-legals [data-tag-name="bbva-type-link"]',
                    personalDataContinueButton: '#step-1 [data-tag-name="digital-account-personal-information"] .personal-information-footer-button [data-tag-name="bbva-button-default"]',
                    titleStepTwo: '#step-2 #heading',
                    termsAndConditionsCheck: 'digital-account-contract [data-tag-name="bbva-form-checkbox"]',
                    termsAndConditionsContinueButton: 'digital-account-contract [data-tag-name="bbva-button-default"]',
                    contractAccountButton: '#account-registration [data-tag-name="bbva-expandable-multistep"] .confirm-step [data-tag-name="bbva-button-default"]',
                },
                successfulPage: {
                    properties: {
                        root: '[data-tag-name=bbva-feature-oc-account-mx-spherica] [data-tag-name=digital-account-successful-page-n2]',
                    },
                    closeButton: '#helpModalHeader #btn-close',
                    upgradeAccountButton: '.modal-footer [data-tag-name="bbva-button-default"]',
                    enterAccountButton: '.modal-footer [data-tag-name="bbva-button-default"].footer-button.link',
                },
                upgradeAccountPage: {
                    properties: {
                        root: '[data-tag-name=bbva-feature-oc-account-mx-spherica] [data-tag-name=digital-account-upgrade-page-n2]',
                    },
                    header: '[data-tag-name=bbva-help-modal] #helpModalHeader header .header',
                    image: '[data-tag-name="bbva-panel-container"] [data-tag-name="digital-account-offer-value"] [data-tag-name="bbva-clip-microillustration"]',
                    content: '[data-tag-name=bbva-help-modal] [slot=slot-content]',
                    continueButton: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                    anotherMomentButton: '.modal-footer [data-tag-name="bbva-button-default"].footer-button.link',
                },
                modal: {
                    properties: {
                        root: '[data-tag-name=bbva-feature-oc-account-mx-spherica] [data-tag-name=digital-account-n2-modals]',
                    },
                    header: '[data-tag-name=bbva-help-modal] #helpModalHeader header .header',
                    title: '[data-tag-name=bbva-help-modal] [slot=slot-title] [data-tag-name=bbva-type-text]',
                    icon: '[data-tag-name=bbva-help-modal] [slot=slot-title] [data-tag-name=bbva-type-icon]',
                    content: '[data-tag-name=bbva-help-modal] [slot=slot-content]',
                    understandButton: '.modal-footer [data-tag-name="bbva-button-default"]',
                    closeButton: '[id="helpModalHeader"] [id="btn-close"]',
                },
                error: {
                    properties: {
                        root: '[data-tag-name=bbva-feature-oc-account-mx-spherica] #modalsN2 [data-tag-name=bbva-help-modal]',
                    },
                    retryButton: '.modal-footer [data-tag-name="bbva-button-default"]',
                }
            },
            requiredElements: ['inductionPage'],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'induction header':
                await this.inductionPage.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction image':
                await this.inductionPage.image.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction offer description':
                await this.inductionPage.offerDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction benefits title':
                await this.inductionPage.benefitsTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction benefits subtitle':
                await this.inductionPage.benefitsSubtitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction first benefit':
                await this.inductionPage.firstBenefit.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'induction second benefit':
                await this.inductionPage.secondBenefit.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction consideration title':
                await this.inductionPage.considerationTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction consideration description':
                await this.inductionPage.considerationDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction know more button':
                await this.inductionPage.knowMoreButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'induction continue button':
                await this.inductionPage.continueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration header':
                await this.contractAccount.header.scrollIntoView({block: 'start'});
                await this.contractAccount.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'registration personal data title':
                await this.contractAccount.titleStepOne.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration show personal data button':
                await this.contractAccount.showDataButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration personal data continue button':
                await this.contractAccount.personalDataContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration terms and conditions title':
                await this.contractAccount.titleStepTwo.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration terms and conditions pdf button':
                await this.contractAccount.personalDataContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'registration terms and conditions continue button':
                await this.contractAccount.personalDataContinueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'know more header':
            case 'privacy notice header':
            case 'exit warning header':
                await (await this.modal.header.scrollIntoView({block: 'end'}));
                await (await this.modal.header.waitForDisplayed({timeout: config.wait.S}));
                break;
            case 'know more close button':
            case 'privacy notice close button':
            case 'exit warning close button':
                await (await this.modal.closeButton.waitForDisplayed({timeout: config.wait.S}));
                break;
            case 'know more title':
                await this.modal.title.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'exit warning icon':
                await this.modal.icon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'know more content':
            case 'privacy notice content':
            case 'exit warning content':
                await this.modal.content.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'understand button':
            case 'exit button':
                await this.modal.understandButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'upgrade account header':
                await this.upgradeAccountPage.header.scrollIntoView({ block: 'end' });
                await this.upgradeAccountPage.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'upgrade account image':
                await this.upgradeAccountPage.image.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'upgrade account content':
                await this.upgradeAccountPage.content.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'upgrade account continue button':
                await this.upgradeAccountPage.continueButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'upgrade account another moment button':
                await this.upgradeAccountPage.anotherMomentButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToKnowMore() {
        await (await this.inductionPage.knowMoreButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessToPersonalData() {
        await (await this.inductionPage.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async continueToTermsAndConditions() {
        await this.accessToPersonalData();
        await (await this.contractAccount.personalDataContinueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async acceptTermsAndConditions() {
        await this.continueToTermsAndConditions();
        await (await this.contractAccount.termsAndConditionsCheck.waitForClickable({timeout: config.wait.M})).click();
    }

    async confirmTermsAndConditions() {
        await this.acceptTermsAndConditions();
        await (await this.contractAccount.termsAndConditionsContinueButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async confirmContractingAccount() {
        await this.confirmTermsAndConditions();
        await (await this.contractAccount.contractAccountButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async contractAccountWithOtp() {
        await this.confirmContractingAccount();
        await this.fillOtp('11111111');
    }

    async accessToUpgradeAccount() {
        await this.contractAccountWithOtp();
        await (await this.successfulPage.upgradeAccountButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessToContractProductSection({option}) {
        switch (option) {
            case 'basic account libreton':
                await this.clickOnHeader('digital-account-induction-page-n2');
                break;
            case 'upgrade account':
                await this.clickOnHeader('digital-account-upgrade-page-n2');
                break;
            case 'contract account':
                await (await this.contractAccount.headerCloseButton.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            case 'exit modal':
                await (await this.modal.understandButton.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            case 'successful hiring':
                await (await this.successfulPage.closeButton.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            case 'enter account':
                await (await this.successfulPage.enterAccountButton.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            case 'another moment':
                await (await this.upgradeAccountPage.anotherMomentButton.waitForDisplayed({timeout: config.wait.S})).click();
                break;
            default:
                throw new Error(`Not recognized option "${option}"`);
        }
    }

    async clickOnHeader(page) {
        await (await (await this.headerCloseButton.specifySelector({placeholder: '__PAGE__', value: page}).waitForClickable({timeout: config.wait.S}))).click();
    }

    async closePersonalDataPage() {
        await (await this.contractAccount.headerCloseButton.waitForClickable({timeout: config.wait.S})).click();
    }

    async displaysAddress() {
        await (await this.contractAccount.showDataButton.waitForClickable({timeout: config.wait.S})).click();
    }

    async verifyPersonalData() {
        const stepOneEditButton = await this.editButton.specifySelector({ placeholder: '__STEP__', value: 'step-1' });
        await this.waitForElementsExist(stepOneEditButton, config.wait.M);
        await (await stepOneEditButton.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
        await (await stepOneEditButton.elements()).value[0].click();
    }

    async consultTermsAndConditions() {
        const stepTwoEditButton = await this.editButton.specifySelector({ placeholder: '__STEP__', value: 'step-2' });
        await this.waitForElementsExist(stepTwoEditButton, config.wait.M);
        await (await stepTwoEditButton.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
        await (await stepTwoEditButton.elements()).value[0].click();
    }

    async consultPrivacyNotice() {
        await (await this.contractAccount.privacyNoticeButton.waitForClickable({timeout: config.wait.S})).click();
    }

    async exitFromInduction() {
        await (await this.inductionPage.headerCloseButton.waitForClickable({timeout: config.wait.S})).click();
    }

    async accessToN2ToN4UpgradeAccount() {
        await (await this.upgradeAccountPage.continueButton.waitForClickable({timeout: config.wait.S})).click();
    }

    async retryService() {
        let attempts = 3;
        while(attempts > 0) {
            await (await this.error.retryButton.waitForClickable({timeout: config.wait.L})).click();
            await this.fillOtp('11111111');
            attempts--;
        }
    }
}

export default new OcAccount();
