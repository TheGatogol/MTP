import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('OcAccountYoungDigitalizationMx')
class OcAccountYoungDigitalizationMx extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocAccountYoungDigitalizationMx[state="active"]',
            elements: {
                ocAccountYoungDigitalizationDm: '[data-tag-name="account-origination-oc-account-young-mx"]',
                updateDocuments: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-multistep"] #modalMultistep'
                    },
                    continueButton: '[data-tag-name="bbva-button-default"]'
                },
                birthCertificateStep: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-multistep"] #birthCertificateStep [data-tag-name="birth-certificate-step"]'
                    },
                    uploadFileLink: '[data-tag-name="bbva-type-link"]#linkUploadImage, #linkUploadImage'
                },
                halfHelpModal: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] #ocAccountYoungHelpModal'
                    },
                    takePhotoLink: '#linkCamera',
                    choosePhotoLink: '#linkFile',
                    choosePdfLink: '#linkPdf'
                },
                suggestionsModal: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] #ocAccountYoungHelpModalSuggest #PHOTO_SUGGESTIONS'
                    },
                    cameraIllustration: '.content [data-tag-name="bbva-clip-microillustration"]',
                    suggestionsTitle: '.content .suggestions-title-modal',
                    suggestionBulletList: '.content .suggestions-bullets-list',
                    acceptButton: '.slot-footer [data-tag-name="bbva-button-default"]'
                },
                blockScreen: {
                    properties: {
                        root: '[data-tag-name="account-origination-oc-account-young-mx"] #ocAccountYoungHelpModal [data-tag-name="bbva-help-modal"]'
                    },
                    exitButton: '[data-tag-name="bbva-button-default"]'
                },
                buttonContinueSummary: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-multistep"] #modalMultistep #buttonBirth',
                buttonContinueToSummary: '[data-tag-name="account-origination-oc-account-young-mx"] [data-tag-name="oc-account-young-multistep"] #modalMultistep [data-tag-name="bbva-button-default"] .summary-button',
            },
            requiredElements: ['__root'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'microillustration camera':
                await this.suggestionsModal.cameraIllustration.waitForDisplayed();
                break;
            case 'suggestions title':
                await this.suggestionsModal.suggestionsTitle.waitForDisplayed();
                break;
            case 'suggestion bullet list':
                await this.suggestionsModal.suggestionBulletList.waitForDisplayed();
                break;
            case 'accept button suggestions':
                await this.suggestionsModal.acceptButton.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueOcAccountYoungDigitalization() {
        await this.updateDocuments.continueButton.waitForDisplayed();
        await this.updateDocuments.continueButton.click();
    }

    async continueUploadFileLink() {
        await this.birthCertificateStep.uploadFileLink.waitForDisplayed({timeout: config.wait.M});
        await this.birthCertificateStep.uploadFileLink.click();
    }

    async continueToSummary() {
        await this.buttonContinueSummary.waitForDisplayed();
        await this.buttonContinueSummary.click();
    }

    async continueSummary() {
        await this.buttonContinueToSummary.waitForDisplayed();
        await this.buttonContinueToSummary.click();
    }

    async selectModalToUpBirthCertificateOption(option) {
        switch (option.toLowerCase()) {
            case 'take photo':
                await this.halfHelpModal.takePhotoLink.waitForDisplayed();
                await this.halfHelpModal.takePhotoLink.click();
                break;
            case 'gallery':
                await this.halfHelpModal.choosePhotoLink.waitForDisplayed();
                await this.halfHelpModal.choosePhotoLink.click();
                break;
            case 'pdf':
                await this.halfHelpModal.choosePdfLink.waitForDisplayed();
                await this.halfHelpModal.choosePdfLink.click();
                break;
            default:
                throw new Error(`${option} is not a valid upload option`);
        }
    }

    async selectUploadBirthCertificateOption(option) {
        await this.continueUploadFileLink();
        await this.selectModalToUpBirthCertificateOption(option.toLowerCase());
        if (option.toLowerCase() === 'gallery' || option.toLowerCase() === 'pdf') {
            await this.uploadDocument(false);
        }
    }

    async uploadDocument(exceeded) {
        const file = exceeded ? global.user.maxFile : global.user.file;

        await this.ocAccountYoungDigitalizationDm.execute({
            script: async (data) => { this.filefetcherSuccess(data); },
            args: [file]
        });
    }
}

export default new OcAccountYoungDigitalizationMx();
