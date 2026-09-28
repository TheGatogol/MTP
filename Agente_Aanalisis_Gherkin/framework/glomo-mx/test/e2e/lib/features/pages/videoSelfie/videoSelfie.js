import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('videoSelfie')
class VideoSelfie extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-signingVideoselfieMx[state="active"]',
            elements: {
                multistepModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="signing-videoselfie-mx-multistep"]',
                        modifiers: '[visible][role="dialog"]',
                        additionalElements: {
                            privacyLink: '#privacyContinue',
                            checkbox: '#consentCheckbox',
                            consentBtn: '#consent',
                            expandableStepTitle: '#captureStep #headingLabel',
                            consentAccepted: '#consentStep',
                            descriptionCaptureStep: '#instructions',
                            captureIdentityModule: '#captureIdentityModule',
                            expandableStepBtn: '#capture'
                        }
                    }
                ],
                modalManager: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="signing-videoselfie-mx-modal-manager"]',
                        modifiers: '[visible][role="dialog"]'
                    }
                ],
            },
            requiredElements: ['multistepModal'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.multistepModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title capture step':
                await this.multistepModal.additionalElements.expandableStepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consent accepted':
                await this.multistepModal.additionalElements.consentAccepted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description capture step':
                await this.multistepModal.additionalElements.descriptionCaptureStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'capture identity module':
                await this.multistepModal.additionalElements.captureIdentityModule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expandable step button disabled':
                await this.multistepModal.additionalElements.expandableStepBtn.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptConsent() {
        await (await this.multistepModal.additionalElements.checkbox
            .waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
        await (await this.multistepModal.additionalElements.consentBtn
            .waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async showPrivacyModal() {
        await (await this.multistepModal.additionalElements.privacyLink
            .waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async uploadDocuments() {
        await this.acceptConsent();
        await (await this.multistepModal.additionalElements.captureIdentityModule
            .waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async retryWarningSmallModal() {
        await (await this.modalManager.acceptBtn
            .waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

}

export default new VideoSelfie();
