import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ElementValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('profilePostalAddressManagement')
class ProfileAddressManagement extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-profileAddressManagement[state="active"]',
            elements: {
                fullModal: [
                    BbvaHelpModal,
                    {
                        prefix: '#addressFullModal[is-visible]',
                        modifiers: '[visible][role="dialog"]',
                        additionalElements: {
                            header: '#helpModalHeader #heading #text span',
                            closeButton: '#helpModalHeader #btn-close',
                            continueButton: '#fullModalButton',
                            exitLink: '#linkText',
                            onboardingTitle: '#fullModalTitle.onboarding-info',
                            recommendationTitle: '#fullModalTitle.photo-recommendations',
                            statusRecommendation: '#bulletList.photo-recommendations #bullet1Item [data-tag-name="bbva-list-bullet"]',
                            validityRecommendation: '#bulletList.photo-recommendations #bullet2Item [data-tag-name="bbva-list-bullet"]',
                            privacyLink: '#privacyLink',
                        }
                    }
                ],
                multistepModal: [
                    BbvaHelpModal,
                    {
                        prefix: '#addressMultistepModal[is-visible]',
                        modifiers: '[visible][role="dialog"]',
                        additionalElements: {
                            header: '#multistepHeaderMain #heading #text span',
                            closeButton: '#multistepHeaderMain #btn-close',
                            continueButton: '#proofStep[disabled]',
                            title: '#proofAddressSelector #heading',
                            instructions: '#instructions p',
                            unfoldButton: '#proofSelect #button',
                            electricityBilloption: '#proofSelect [data-tag-name="bbva-form-option"][value="006"]',
                            telephoneBillOption: '#proofSelect [data-tag-name="bbva-form-option"][value="007"]',
                            ineOption: '#proofSelect [data-tag-name="bbva-form-option"][value="026"]',
                            uploadDocumentButton: '#fileUploaded',
                        }
                    }
                ],
                halfModal: [
                    BbvaHelpModal,
                    {
                        prefix: '#addressHalfModal[visible]',
                        modifiers: '[visible][role="dialog"]',
                        additionalElements: {
                            title: '#helpModalHeader #text',
                            closeButton: '#helpModalHeader #btn-close',
                            takePhoto: '#linkCamera',
                            chooseFromGallery: '#linkFile',
                            choosePDF: '#linkPdf',
                            headerText: '#helpModalHeader #text span',
                            messageText: '#messageText',
                            instructions: '#mediaSourceInstructions',
                            privacyInstructions: '#privacyInstructions',
                        }
                    }
                ],
            },
            elementsSpherica: {
                fullModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            header: '#helpModalHeader #heading #text h1',
                            onboardingTitle: '#fullModalTitle',
                            recommendationTitle: '#fullModalTitle'
                        }
                    }
                ],
                multistepModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            header: '#multistepHeaderMain #heading #text h1',
                            instructions: '#instructions span'
                        }
                    }
                ],
                halfModal: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            headerText: '#helpModalHeader #text h1'
                        }
                    }
                ]
            },
            requiredElements: ['fullModal.additionalElements.header']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'privacy header':
                await this.halfModal.additionalElements.headerText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy message':
                await this.halfModal.additionalElements.messageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy instructions':
                await this.halfModal.additionalElements.privacyInstructions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy close button':
                await this.halfModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding header':
                await this.fullModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'full modal close button':
                await this.fullModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding title':
                await this.fullModal.additionalElements.onboardingTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link':
                await this.fullModal.additionalElements.privacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.fullModal.additionalElements.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit link':
                await this.fullModal.additionalElements.exitLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'electricity bill':
                await this.multistepModal.additionalElements.electricityBilloption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'telephone bill':
                await this.multistepModal.additionalElements.telephoneBillOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ine':
                await this.multistepModal.additionalElements.ineOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'half modal title':
                await this.halfModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'half modal close button':
                await this.halfModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'half modal instructions':
                await this.halfModal.additionalElements.instructions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'take photo':
                await this.halfModal.additionalElements.takePhoto.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose from gallery':
                await this.halfModal.additionalElements.chooseFromGallery.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose a pdf':
                await this.halfModal.additionalElements.choosePDF.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recommendation title':
                await this.fullModal.additionalElements.recommendationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'status recommendation':
                await this.fullModal.additionalElements.statusRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'validity recommendation':
                await this.fullModal.additionalElements.validityRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep header':
                await this.multistepModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep close button':
                await this.multistepModal.additionalElements.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep title':
                await this.multistepModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'multistep instructions':
                await this.multistepModal.additionalElements.instructions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'document type list box':
                await this.multistepModal.additionalElements.unfoldButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button disabled':
                await this.multistepModal.additionalElements.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async openModal(modal) {
        switch (modal.toLowerCase()) {
            case 'privacy':
                await this.openThePrivacyNoticeModal();
                break;
            case 'multistep':
                await this.openTheMultistepModal();
                break;
            case 'media source':
                await this.openTheUploadReceiptModal();
                break;
            default:
                throw new Error(`${modal} modal is not available`);
        }
    }

    async selectsTheReceiptType(receipt) {
        switch (receipt.toLowerCase()) {
            case 'electricity bill':
                await this.selectsElectricityBill();
                break;
            case 'ine':
                await this.selectsINEOption();
                break;
            default:
                throw new Error(`${receipt} receipt is not available`);
        }
    }

    async selectsMediaSource(mediaSource) {
        switch (mediaSource.toLowerCase()) {
            case 'take photo':
                await this.selectsTakePhotoOption();
                break;
            case 'choose from gallery':
                await this.selectsGalleryOption();
                break;
            case 'choose a pdf':
                await this.selectsPDFOption();
                break;
            default:
                throw new Error(`${mediaSource} is not available`);
        }
    }

    async openThePrivacyNoticeModal() {
        await (await this.fullModal.additionalElements.privacyLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async closePrivacyNoticeModal() {
        await (await this.halfModal.additionalElements.closeButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async openTheMultistepModal() {
        await (await this.fullModal.additionalElements.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async openTheDocumentTypeList() {
        await (await this.multistepModal.additionalElements.unfoldButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectsElectricityBill() {
        await (await this.multistepModal.additionalElements.electricityBilloption.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectsINEOption() {
        await (await this.multistepModal.additionalElements.ineOption.waitForClickable({timeout: config.wait.M})).click();
    }

    async openTheUploadReceiptModal() {
        await (await this.multistepModal.additionalElements.uploadDocumentButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectsTakePhotoOption() {
        await (await this.halfModal.additionalElements.takePhoto.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectsGalleryOption() {
        await (await this.halfModal.additionalElements.chooseFromGallery.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectsPDFOption() {
        await (await this.halfModal.additionalElements.choosePDF.waitForClickable({timeout: config.wait.M})).click();
    }

    async goBack() {
        await (await this.fullModal.additionalElements.closeButton.waitForClickable({timeout: config.wait.M})).click();
    }

}

export default new ProfileAddressManagement();
