import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('goalsMinor')
class GoalsMinor extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-goalsMinorHiring[state="active"]',
            elements: {
                home: {
                    properties: {
                        root: '[data-tag-name="account-saving-goals-youngsters-mx-home"]'
                    },
                    mainTitle: '.goals-minors-hiring-home-title-margin',
                    knowMoreLink: '.link-know-more',
                    bulletsTitle: '[data-tag-name="bbva-type-text"]',
                    bullet: '[data-tag-name="bbva-list-bullet"]',
                    termsLink: '.home-content-footer [data-tag-name="bbva-type-link"]',
                    homeButton: '.home-content-footer-button [data-tag-name="bbva-button-default"]',
                    knowMoreModal: {
                        properties: {
                            root: '#know-more-modal'
                        },
                        firstCard: '#achievements',
                        secondCard: '#linkCard',
                        thirdCard: '#fiveGoals'
                    },
                },
                termsAndConditions: {
                    properties: {
                        root: '[data-tag-name="account-saving-goals-youngsters-mx-termns-and-conditions"]'
                    },
                    checkbox: '[data-tag-name="bbva-form-checkbox"] [data-tag-name="bbva-form-checkbox-input"]',
                    termsLink: '.container-button',
                    buttonContinue: '.content-hiring-button-footer [data-tag-name="bbva-button-default"]'
                },
                multiStep: {
                    properties:{
                        root: '[data-tag-name="account-saving-goals-youngsters-mx-multistep"]'
                    },
                    accounts: {
                        header: '[data-tag-name="bbva-header-main"] #btn-close',
                        mainText: '#step-1 [data-tag-name="bbva-type-text"][font-type="body"]',
                        account: '[data-tag-name="bbva-badge-reference"][number="00743607001506651270"]',
                        cardAccount: '[id="__ID__"]'
                    },
                    termsAndConditions: {
                        properties: {
                            root: '[id="step-2"]'
                        },
                        checkbox: '[data-tag-name="bbva-form-checkbox"]',
                        buttonContinue: '[data-tag-name="bbva-button-default"]'
                    },
                    confirmHiring: '.confirm-step [data-tag-name="bbva-button-default"]',
                    edit: '#editButton',
                    collapsedSteps: {
                        properties: {
                            root: '.summary'
                        },
                        stepNewAccount: '.contract-reference [data-tag-name="bbva-type-text"]',
                        termsAccepted: '[data-tag-name="bbva-badge-icon"]',
                    }
                },
                successPage: {
                    properties: {
                        root: '[data-tag-name="account-saving-goals-youngsters-mx-success"]'
                    },
                    header: '[data-tag-name="bbva-header-main"][variant="modal-initial"]',
                    mainPanel: '[data-tag-name="bbva-type-text"][size="3XL"]',
                    mainPanelText: '.description-goals-minors-success',
                    descriptionFolio: '.data-content-items .data-content-folio-alignment'
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    unavailableOperation: [BbvaHelpModal, {
                        modifiers: '#error-termns-and-conditions[visible]'
                    }],
                    accountError: [BbvaHelpModal, {
                        modifiers: '#error-account-half-modal[visible]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"]',
                            text: '#helpModalContent [data-tag-name="bbva-type-text"]',
                        }
                    }],
                    duplicateAccount: [BbvaHelpModal, {
                        modifiers: '#get-error-modal-duplicated-contract[visible]',
                        additionalElements: {
                            text: '#helpModalContent [data-tag-name="bbva-type-text"]',
                        }
                    }],
                    exitModal: [BbvaHelpModal, {
                        modifiers: '#exit-confirm-modal[visible]',
                        additionalElements: {
                            icon: '#helpModalTitle .title-icon',
                            text: '#helpModalContent [data-tag-name="bbva-type-text"]',
                            confirm: '[data-tag-name="bbva-button-default"]:not([variant="link"])',
                            continue: '.footer-button.link'
                        }
                    }]
                }
            },
            requiredElements: ['__root']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'home main title':
                await this.home.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home bullets title':
                await this.waitForElementsExist(this.home.bulletsTitle);
                await (await this.home.bulletsTitle.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home first bullet':
                await this.waitForElementsExist(this.home.bullet);
                await (await this.home.bullet.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home second bullet':
                await this.waitForElementsExist(this.home.bullet);
                await (await this.home.bullet.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home third bullet':
                await this.waitForElementsExist(this.home.bullet);
                await (await this.home.bullet.elements()).value[2]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home terms link':
                await this.home.termsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home button continue':
                await this.home.homeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms link':
                await this.termsAndConditions.termsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms checkbox':
                await this.termsAndConditions.checkbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms button continue':
                await this.termsAndConditions.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'know modal first card':
                await this.home.knowMoreModal.firstCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'know modal second card':
                await this.home.knowMoreModal.secondCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'know modal third card':
                await (await this.home.knowMoreModal.thirdCard.scrollIntoView({block: 'nearest'}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal icon':
                await this.modalsContainer.exitModal.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal title':
                await this.modalsContainer.exitModal.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal main text':
                await this.modalsContainer.exitModal.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal confirm':
                await this.modalsContainer.exitModal.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal continue':
                await this.modalsContainer.exitModal.additionalElements.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep exit button':
                await this.waitForElementsExist(this.multiStep.accounts.header);
                await (await this.multiStep.accounts.header.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep main text':
                await this.waitForElementsExist(this.multiStep.accounts.mainText);
                await (await this.multiStep.accounts.mainText.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep account':
                await this.multiStep.accounts.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep collapsed step one account':
                await this.multiStep.collapsedSteps.stepNewAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep collapsed step two terms accepted':
                await this.multiStep.collapsedSteps.termsAccepted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep terms and conditions checkbox':
                await this.multiStep.termsAndConditions.checkbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep terms and conditions continue button':
                await this.multiStep.termsAndConditions.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no hiring header title modal':
                await this.modalsContainer.accountError.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no hiring main title modal':
                await this.modalsContainer.accountError.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no hiring description modal':
                await this.modalsContainer.accountError.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no hiring button modal':
                await this.modalsContainer.accountError.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title duplicate modal':
                await this.modalsContainer.duplicateAccount.titleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description duplicate modal':
                await this.modalsContainer.duplicateAccount.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success main title':
                await this.waitForElementsExist(this.successPage.header);
                await (await this.successPage.header.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success main panel':
                await this.successPage.mainPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success main panel text':
                await this.successPage.mainPanelText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success folio description':
                await this.successPage.descriptionFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmHomePage() {
        await (await this.home.homeButton.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async openKnoweMoreModal() {
        await (await this.home.knowMoreLink.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async openExitModal() {
        await this.waitForElementsExist(this.multiStep.accounts.header);
        const element = await (await this.multiStep.accounts.header.elements()).value[1];
        await (await (await element.scrollIntoView({block: 'start'}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async openTermsAndConditionsHome(option = '') {
        if (option === 'modal error') {
            await this.confirmHomePage();
            await (await this.termsAndConditions.termsLink.waitForDisplayed({timeout: config.wait.M}))
                .click();
            for (let i = 0; i < 3; i++) {
                await (await this.modalsContainer.unavailableOperation.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
            }
        } else {
            await (await this.home.termsLink.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async openTermsAndConditionsMainPage() {
        await (await (await this.termsAndConditions.termsLink.scrollIntoView({block: 'end'}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async clickCheckboxInHome() {
        await (await (await this.termsAndConditions.checkbox.scrollIntoView({block: 'end'}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async termsAndConditionsContinue() {
        await this.termsAndConditions.buttonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.termsAndConditions.buttonContinue.click();
        await this.fillOtp('11111111');
    }

    async fillSavingGoalDetails(cardId) {
        await this.selectLinkCard(cardId);
        await this.multiStep.termsAndConditions.buttonContinue.scrollIntoView({block: 'end'});
        await (await this.multiStep.termsAndConditions.checkbox.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.multiStep.termsAndConditions.buttonContinue.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async selectLinkCard(cardId) {
        const selector = this.multiStep.accounts.cardAccount.specifySelector({placeholder: '__ID__', value: cardId});
        await selector.waitForDisplayed({timeout: config.wait.M});
        await selector.click();
    }

    async confirmGoalsMinorHiring() {
        await this.multiStep.confirmHiring.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.confirmHiring.click({timeout: config.wait.M});
        await this.fillOtp('11111111');
    }

    async retryConfirmation(full) {
        const retries = full ? 4 : 3;
        for (let i = 1; i < retries; i ++) {
            await (await this.modalsContainer.accountError.acceptBtn
                .waitForDisplayed({timeout: config.wait.M}))
                .click();
            await this.fillOtp('11111111');
        }
    }

    async selectModifyInAccountsStep() {
        await this.waitForElementsExist(this.multiStep.edit);
        const editLink = (await this.multiStep.edit.elements()).value[0];
        await (await (await editLink.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async selectModifyInTermsAndConditions() {
        await this.multiStep.confirmHiring.waitForDisplayed({timeout: config.wait.M});
        await this.waitForElementsExist(this.multiStep.edit);
        const editLink = (await this.multiStep.edit.elements()).value[1];
        await (await (await editLink.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await (await (await this.multiStep.termsAndConditions.buttonContinue.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async goToMinorOption(option) {
        switch (option.toLowerCase()) {
            case 'modal for exit multistep':
                await this.openExitModal();
                break;
            case 'know more modal':
                await this.openKnoweMoreModal();
                break;
            case 'terms and conditions in home':
                await this.openTermsAndConditionsHome();
                break;
            case 'terms and conditions in home with error':
                await this.openTermsAndConditionsHome('modal error');
                break;
            case 'terms and conditions main page':
                await this.confirmHomePage();
                await this.openTermsAndConditionsMainPage();
                break;
            case 'link cards accounts':
                await this.confirmHomePage();
                break;
            case 'checkbox checked':
                await this.confirmHomePage();
                await this.clickCheckboxInHome();
                break;
            case 'no hiring goal minor modal':
                await this.confirmGoalsMinorHiring();
                break;
            case 'success page':
                await this.confirmHomePage();
                await this.clickCheckboxInHome();
                await this.termsAndConditionsContinue();
                break;
            default:
                throw new Error(`"${option}" is not a valid minor option`);
        }
    }

    async editStep(element) {
        switch (element) {
            case 'selects new account':
                await this.selectModifyInAccountsStep();
                await this.selectLinkCard(global.user.linkCard);
                break;
            case 'reviews terms and conditions':
                await this.selectModifyInTermsAndConditions();
                break;
            default:
                throw new Error(`"${element}" is not a valid option to edit step`);
        }
    }
}

export default new GoalsMinor();
