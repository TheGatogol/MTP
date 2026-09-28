import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class OcDebitCardInmediateDelivery extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-cardOriginationOcDebitCardInmediateDelivery',
            elements: {
                helpModal: '#landing[data-tag-name="bbva-help-modal"]',
                title: '#landing[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                exitButton: '#landing[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',

                cardOffer: {
                    properties: { root: '[data-tag-name="card-offer"]' },
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                    text: '[data-tag-name="bbva-type-text"]',
                    subtitle: '[data-tag-name="bbva-header-category"]',
                    bulletList: {
                        properties: { root: '.receipt-main' },
                        offerFirstListBullet: '[data-tag-name="bbva-list-bullet"]:first-child',
                        offerSecondListBullet: '[data-tag-name="bbva-list-bullet"]:nth-child(2)',
                        offerThirdListBullet: '[data-tag-name="bbva-list-bullet"]:last-child',
                    },
                    buttonSuccess: '.footer [data-tag-name="bbva-button-default"]',
                },

                multistepsTitle: '#multistep[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                multistepsExitButton: '#multistep[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                multistepsFlow: {
                    properties: { root: '[data-tag-name="multisteps-flow"]' },
                    stepAddress: {
                        properties: { root: '#step-1 .content [data-tag-name="address-selection"]' },
                        privacyModal: '#typeLinkShowPrivacy',
                        buttonSuccess: '.button-container [data-tag-name="bbva-button-default"]',
                        myDirection: '[data-tag-name="bbva-form-control-input"][value="myDirection"] .side-radio',
                        privacyLink: {
                            properties: { root: '[data-tag-name="bbva-form-control-input"][value="myDirection"] .privacy-link' },
                            showHideDirectionText: '[data-tag-name="bbva-type-text"]:first-child',
                            showHideDirection: '[data-tag-name="bbva-type-text"]:last-child',
                        },
                        otherDirection: '[data-tag-name="bbva-form-control-input"][value="otherDirection"]',
                        otherDirectionForm: {
                            properties: { root: '[data-tag-name="new-address-form"]' },
                            street: '#bbvaFormInputStreet[data-tag-name="bbva-form-input"] input',
                            exteriorNumber: '#bbvaFormInputexteriorNumber[data-tag-name="bbva-form-input"] input',
                            interiorNumber: '#bbvaFormInputinteriorNumber[data-tag-name="bbva-form-input"] input',
                            postalCode: '#bbvaFormInputpostalCode[data-tag-name="bbva-form-input"] input',
                            colonySelector: '[data-tag-name="colony-selector"]',
                            firstOptionSelector: '[data-tag-name="colony-selector"] [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]:first-child',
                            reference: '#bbvaFormInputReference[data-tag-name="bbva-form-input"] textarea',
                        }
                    },

                    stepCardCovers: {
                        properties: { root: '#step-2 .content [data-tag-name="card-personalization"]' },
                        list: {
                            properties: {
                                root: '[data-tag-name="bbva-form-container"]'
                            },
                            firtsOption: '[data-tag-name="bbva-form-control-input"]:nth-child(1)',
                            secondOption: '[data-tag-name="bbva-form-control-input"]:nth-child(2)',
                            thirdOption: '[data-tag-name="bbva-form-control-input"]:nth-child(3)',
                            fourOption: '[data-tag-name="bbva-form-control-input"]:nth-child(4)',
                        },
                        nicknameInput: '[data-tag-name="bbva-form-input"] input',
                        buttonSuccess: '.button-container [data-tag-name="bbva-button-default"]',
                    },
                    accountAssociated: '#step-0[completed]',
                    addressCollapsed: '#step-1 .summary [data-tag-name="address-selection"] ',
                    addressCollapsedModifyButton: '#step-1 .header #editButton[data-tag-name="bbva-type-link"] ',
                    cardCoversCollapsed: '#step-2 .summary [data-tag-name="card-personalization"]',
                    cardCoversCollapsedModifyButton: '#step-2 .header #editButton[data-tag-name="bbva-type-link"]',
                    buttonSuccess: '#btn-step-3'
                },

                successPageHeaderTitle: '#success[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                successPageHeaderExitButton: '#success[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                successPage: {
                    properties: { root: '[data-tag-name="successful-request"]' },
                    microillustration: '[data-tag-name="bbva-clip-microillustration"]',
                    title: '.panel-info [data-tag-name="data-tag-name="bbva-type-text"]:nth-child(1)',
                    mainContainer: {
                        properties: { root: '.main-container' },
                        dateTimeRequest: '.date',
                        associatedAccount: '.associated-account',
                        shippingAddress: '.shipping-address',
                        reference: '.shipping-address-reference',
                        dateDelivery: '.date-delivery',
                        colorCard: '.color-card',
                        aliasCard: '.alias-card',
                        comission: '.values-list.horizontal.cost-shipping [data-tag-name="bbva-type-text"]:nth-child(2)',
                        applicationFolio: '.application-folio',
                    },
                    notificationMessageDefault: '.footer [data-tag-name="bbva-notification-message"][variant="default"]',
                    notificationMessageCaution: '.footer [data-tag-name="bbva-notification-message"][variant="caution"]',
                },

                modals: {
                    properties: { root: '[data-tag-name="card-modals"]' },
                    privacyModal: {
                        properties: { root: '#notice-privacy' },
                        header: {
                            properties: { root: '[data-tag-name="bbva-header-main"]' },
                            title: '[data-tag-name="bbva-type-text"]',
                            exit: '[data-tag-name="bbva-type-icon"]',
                        },
                        privacyFirstText: '[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(1)',
                        privacySecondText: '[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-child(2)',
                    },
                    exitContinueModal: {
                        properties: { root: '#prevent-exit' },
                        header: {
                            properties: { root: '[data-tag-name="bbva-header-main"]' },
                            title: '[data-tag-name="bbva-type-text"]',
                            exit: '[data-tag-name="bbva-type-icon"]',
                        },
                        icon: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                        subtitle: '#helpModalContent',
                        button: '.slot-footer [data-tag-name="bbva-button-default"]',
                        link: '.slot-footer [data-tag-name="bbva-type-link"]',
                    },
                    retryError: {
                        properties: { root: '#error-retry-modal' },
                        buttonRetry: '.content .modal-main .modal-footer .slot-footer [data-tag-name="bbva-button-default"]'
                    }
                },
                tokenModal: CellsSignOperationModal,
            },
            elementsSpherica:{
                tokenModal: CellsSignOperationModalSpherica,
                cardOffer: {
                    text: 'div.panel-info [data-tag-name="bbva-type-text"]',
                    expandableAccordion: '[data-tag-name="bbva-expandable-accordion"]',
                    bulletList: {
                        properties: { root: '[data-tag-name="bbva-expandable-accordion"]' },
                        subtitle: '[slot="header"] [data-tag-name="bbva-type-text"]',
                        offerFirstListBullet: '[slot="content"] [data-tag-name="bbva-list-bullet"]:nth-child(1)',
                        offerSecondListBullet: '[slot="content"] [data-tag-name="bbva-list-bullet"]:nth-child(2)',
                        offerThirdListBullet: '[slot="content"] [data-tag-name="bbva-list-bullet"]:nth-child(3)',
                    },
                },
                multistepsFlow: { 
                    stepAddress: {
                        myDirection: '#myDirectionContainer',
                        privacyLink: {
                            properties: {root: '#myDirectionContainer .privacy-link'},
                            showHideDirectionText: '[data-tag-name="bbva-type-text"]:first-child',
                            showHideDirection: '[data-tag-name="bbva-type-text"]:last-child',
                        },
                        otherDirection: '#otherDirectionContainer',
                    },
                },
                modals: {
                    exitContinueModal:{
                        link: '.slot-footer [data-tag-name="bbva-button-default"].footer-button.link',
                    }
                }
            },
            requiredElements: [
                'helpModal',
            ],
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed();
                break;
            case 'microillustration':
                await this.cardOffer.microillustration.waitForDisplayed();
                break;
            case 'text':
                await this.cardOffer.text.waitForDisplayed();
                break;
            case 'subtitle':
                this.isSpherica() ? await this.cardOffer.bulletList.subtitle.waitForDisplayed() : await this.cardOffer.subtitle.waitForDisplayed();
                break;
            case 'first list bullet':
                await this.cardOffer.bulletList.offerFirstListBullet.waitForDisplayed();
                break;
            case 'second list bullet':
                await this.cardOffer.bulletList.offerSecondListBullet.waitForDisplayed();
                break;
            case 'third list bullet':
                await this.cardOffer.bulletList.offerThirdListBullet.waitForDisplayed();
                break;
            case 'offer button':
                await this.cardOffer.buttonSuccess.waitForDisplayed();
                break;
            case 'first card cover':
                await this.multistepsFlow.stepCardCovers.list.firtsOption.waitForDisplayed();
                break;
            case 'second card cover':
                await this.multistepsFlow.stepCardCovers.list.firtsOption.waitForDisplayed();
                break;
            case 'third card cover':
                await this.multistepsFlow.stepCardCovers.list.firtsOption.waitForDisplayed();
                break;
            case 'four card cover':
                await this.multistepsFlow.stepCardCovers.list.firtsOption.waitForDisplayed();
                break;
            case 'my direction button':
                await this.multistepsFlow.stepAddress.myDirection.waitForDisplayed();
                break;
            case 'show address text':
                await this.multistepsFlow.stepAddress.privacyLink.showHideDirectionText.waitForDisplayed();
                break;
            case 'show address button':
                await this.multistepsFlow.stepAddress.privacyLink.showHideDirection.waitForDisplayed();
                break;
            case 'other address button':
                await this.multistepsFlow.stepAddress.otherDirection.waitForDisplayed();
                break;
            case 'privacy modal button':
                await this.multistepsFlow.stepAddress.privacyModal.waitForDisplayed();
                break;
            case 'nickname':
                await this.multistepsFlow.stepCardCovers.nicknameInput.waitForDisplayed();
                break;
            case 'card covers button':
                await this.multistepsFlow.stepCardCovers.buttonSuccess.waitForDisplayed();
                break;
            case 'privacy header title':
                await this.modals.privacyModal.header.title.waitForDisplayed();
                break;
            case 'privacy header exit button':
                await this.modals.privacyModal.header.exit.waitForDisplayed();
                break;
            case 'first paragraph':
                await this.modals.privacyModal.privacyFirstText.waitForDisplayed();
                break;
            case 'second paragraph':
                await this.modals.privacyModal.privacySecondText.waitForDisplayed();
                break;
            case 'success header':
                await this.successPageHeaderTitle.waitForDisplayed();
                break;
            case 'success exit':
                await this.successPageHeaderExitButton.waitForDisplayed();
                break;
            case 'success time':
                await this.successPage.mainContainer.dateTimeRequest.waitForDisplayed();
                break;
            case 'success account':
                await this.successPage.mainContainer.associatedAccount.waitForDisplayed();
                break;
            case 'success address':
                await this.successPage.mainContainer.shippingAddress.waitForDisplayed();
                break;
            case 'success reference':
                await this.successPage.mainContainer.reference.waitForDisplayed();
                break;
            case 'success date':
                await this.successPage.mainContainer.dateDelivery.waitForDisplayed();
                break;
            case 'success color':
                await this.successPage.mainContainer.colorCard.waitForDisplayed();
                break;
            case 'success alias':
                await this.successPage.mainContainer.aliasCard.waitForDisplayed();
                break;
            case 'success comission':
                await this.successPage.mainContainer.comission.waitForDisplayed();
                break;
            case 'success folio':
                await this.successPage.mainContainer.applicationFolio.waitForDisplayed();
                break;
            case 'success message':
                await this.successPage.notificationMessageDefault.waitForDisplayed();
                break;
            case 'success caution':
                await this.successPage.notificationMessageCaution.waitForDisplayed();
                break;
            case 'summary header':
                await this.multistepsTitle.waitForDisplayed();
                break;
            case 'summary close button':
                await this.multistepsExitButton.waitForDisplayed();
                break;
            case 'associated account section':
                await this.multistepsFlow.accountAssociated.waitForDisplayed();
                break;
            case 'shipping address section':
                await this.multistepsFlow.addressCollapsed.waitForDisplayed();
                break;
            case 'card personalization section':
                await this.multistepsFlow.cardCoversCollapsed.waitForDisplayed();
                break;
            case 'summary success button':
                await this.multistepsFlow.buttonSuccess.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async continueMultistepPage() {
        await this.cardOffer.buttonSuccess.waitForDisplayed({ timeout: config.wait.M });
        await this.cardOffer.buttonSuccess.click();
    }

    async seesHideAddress() {
        await this.multistepsFlow.stepAddress.privacyLink.showHideDirection.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.privacyLink.showHideDirection.click();
        await this.fillOtp('11111111');
    }

    async fillForm(withInternalNumber) {
        const address = {
            street: 'Reforma',
            exteriorNumber: '123',
            interiorNumber: '34',
            postalCode: '09570',
            reference: 'Zaguan color verde'
        };
        await this.multistepsFlow.stepAddress.otherDirectionForm.street.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.otherDirectionForm.street.click();
        await this.multistepsFlow.stepAddress.otherDirectionForm.street.setValue({ value: address.street });
        await this.multistepsFlow.stepAddress.otherDirectionForm.exteriorNumber.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.otherDirectionForm.exteriorNumber.click();
        await this.multistepsFlow.stepAddress.otherDirectionForm.exteriorNumber.setValue({ value: address.exteriorNumber });
        await this.multistepsFlow.stepAddress.otherDirectionForm.postalCode.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.otherDirectionForm.postalCode.click();
        await this.multistepsFlow.stepAddress.otherDirectionForm.postalCode.setValue({ value: address.postalCode });
        await this.multistepsFlow.stepAddress.otherDirectionForm.reference.waitForDisplayed({ timeout: config.wait.L });
        await this.multistepsFlow.stepAddress.otherDirectionForm.reference.click();
        await this.multistepsFlow.stepAddress.otherDirectionForm.reference.setValue({ value: address.reference });
        await this.multistepsFlow.stepAddress.otherDirectionForm.colonySelector.waitForDisplayed({ timeout: config.wait.L });
        await this.multistepsFlow.stepAddress.otherDirectionForm.colonySelector.click();
        await this.multistepsFlow.stepAddress.otherDirectionForm.firstOptionSelector.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.otherDirectionForm.firstOptionSelector.click();
        if (!withInternalNumber) {
            await this.multistepsFlow.stepAddress.otherDirectionForm.interiorNumber.waitForDisplayed({ timeout: config.wait.M });
            await this.multistepsFlow.stepAddress.otherDirectionForm.interiorNumber.click();
            await this.multistepsFlow.stepAddress.otherDirectionForm.interiorNumber.setValue({ value: address.interiorNumber });
        }
    }

    async continueCardCoversStep(addresOption = 'myAddress', withoutInternalNumber = false) {
        if (addresOption === 'myAddress') {
            await this.selectMyAddressStep();
        }
        if (addresOption === 'otherAddress') {
            await this.multistepsFlow.stepAddress.otherDirection.waitForDisplayed({ timeout: config.wait.M });
            await this.multistepsFlow.stepAddress.otherDirection.click();
            await this.fillForm(withoutInternalNumber);
        }
        await this.selectContinueAddressStep();
    }

    async selectMyAddressStep() {
        await this.multistepsFlow.stepAddress.myDirection.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.myDirection.click();
    }

    async selectContinueAddressStep() {
        await this.multistepsFlow.stepAddress.buttonSuccess.waitForEnabled({ timeout: config.wait.L });
        await this.multistepsFlow.stepAddress.buttonSuccess.click();
    }

    async continueSummary() {
        await this.selectCardColorAndNickname();
        await this.finishCardCoverStep();
    }

    async selectCardColorAndNickname() {
        const message = 'Hectorin';
        await this.multistepsFlow.stepCardCovers.list.thirdOption.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepCardCovers.list.thirdOption.click();
        await this.multistepsFlow.stepCardCovers.nicknameInput.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepCardCovers.nicknameInput.click();
        await this.multistepsFlow.stepCardCovers.nicknameInput.setValue({ value: message });
    }

    async finishCardCoverStep() {
        await this.multistepsFlow.stepCardCovers.buttonSuccess.waitForEnabled({ timeout: config.wait.M });
        await this.multistepsFlow.stepCardCovers.buttonSuccess.click();
    }

    async modifiedStep(step) {
        const value = step === 'address'
            ? 'addressCollapsedModifyButton'
            : 'cardCoversCollapsedModifyButton';
        await this.multistepsFlow[value].click();
    }

    async openPrivacyModal() {
        await this.multistepsFlow.stepAddress.privacyModal.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepAddress.privacyModal.click();
    }

    async modalExitContinueFlow(action) {
        await this.continueMultistepPage();
        await this.multistepsExitButton.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsExitButton.click();
        const actions = {
            'exit': 'button',
            'continue': 'link'
        };
        await this.modals.exitContinueModal[actions[action]].waitForDisplayed({ timeout: config.wait.M });
        await this.modals.exitContinueModal[actions[action]].click();
    }

    async closeFlow(step) {
        if (step === 'offer') {
            await this.exitButton.waitForDisplayed({ timeout: config.wait.M });
            await this.exitButton.click();
        }
        if (step === 'multistep') {
            await this.modalExitContinueFlow('exit');
        }
    }

    async selectContinueFlow() {
        await this.modalExitContinueFlow('continue');
    }

    async finishProcess() {
        await this.multistepsFlow.buttonSuccess.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.buttonSuccess.click();
    }

    async retryProcess() {
        let i = 0;
        while (i < 3) {
            await this.modals.retryError.buttonRetry.waitForDisplayed({ timeout: config.wait.M });
            await this.modals.retryError.buttonRetry.click();
            i++;
        }
    }

    async updateCardNickname() {
        const value  = global.user.nickname;
        await this.multistepsFlow.stepCardCovers.nicknameInput.waitForDisplayed({ timeout: config.wait.M });
        await this.multistepsFlow.stepCardCovers.nicknameInput.click();
        await this.multistepsFlow.stepCardCovers.nicknameInput.setValue({ value: value });
        await this.finishCardCoverStep();
    }

    async openAccordeon() {
        if (this.isSpherica()) {
            await this.cardOffer.expandableAccordion.click();
        }
    }

    async sectionToSee(option) {
        switch (option) {
            case 'list of covers card step':
                await this.continueCardCoversStep();
                break;
            case 'finish resume':
                await this.continueCardCoversStep();
                await this.continueSummary();
                break;
            case 'hide address':
                await this.seesHideAddress();
                break;
            case 'privacy modal':
                await this.openPrivacyModal();
                break;
            case 'address':
                await this.selectMyAddressStep();
                break;
            case 'card color and nickname':
                await this.continueCardCoversStep();
                await this.selectCardColorAndNickname();
                break;
            default:
                throw new Error(`Error: The resume "${option}" is unknown.`);
        }
    }
}
export default new OcDebitCardInmediateDelivery();
