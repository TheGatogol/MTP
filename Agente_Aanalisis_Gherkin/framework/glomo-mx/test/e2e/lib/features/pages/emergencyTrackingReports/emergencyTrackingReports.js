import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('EmergencyTrackingReports')
class EmergencyTrackingReports extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-emergencyTrackingReports[state="active"]',
            elements: {
                detectedReport: [
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-active-report-page"]',
                        additionalElements: {
                            headerDetected: '[data-tag-name="bbva-header-main"][variant="first-level-sequential"]',
                            backButton: '[data-tag-name="bbva-header-main"] #btn-back',
                            illustrationDetected: '[data-tag-name="bbva-clip-microillustration"]',
                            titleDetected: '.content-description [data-tag-name="bbva-type-text"]',
                            descriptionDetected: '.content-description [data-tag-name="bbva-type-text"]',
                            linkReport: '.link-to-report [data-tag-name="bbva-type-link"]',
                        },
                    },
                ],
                lookingAdjuster: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-modal-tracking"]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"][variant="first-level-sequential"]',
                            iconCloseBtn: '[data-tag-name="bbva-header-main"] #btn-back',
                            descriptionLooking: '.map-tracking-content [data-tag-name="bbva-progress-content"] [data-tag-name="bbva-type-text"]',
                            spinnerLooking: '.map-tracking-content [data-tag-name="bbva-progress-content"]',
                            mapLooking: '.map-tracking-content [data-tag-name="bbva-map-dynamic"]',
                        },
                    },
                ],
                assignedAdjuster: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-modal-tracking"]',
                        additionalElements: {
                            iconCloseBtn: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] .map-tooltip-adjuster-data [data-tag-name="bbva-button-default"]',
                            exitTooltipAdjuster: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] .map-tooltip #buttons [data-tag-name="bbva-button-action"]',
                            mapAdjuster: 'div.map-tracking-content [data-tag-name="bbva-map-dynamic"]',
                            tooltipMapAdjuster: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"]',
                            titleAdjuster: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] .map-tooltip [data-tag-name="bbva-type-text"]',
                            photoAdjuster: 'div.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] div.map-tooltip [data-tag-name="bbva-clip-box"]',
                            policyAdjuster: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] .map-tooltip [data-tag-name="bbva-type-text"]',
                            timeAdjuster: '.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] .map-tooltip [data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"]',
                            cancelOperationAdjuster: 'div.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] div.map-tooltip [data-tag-name="bbva-button-row"] div.button-row span:nth-of-type(1) [data-tag-name="bbva-button-action"]',
                            callOperationAdjuster: 'div.map-tracking-content [data-tag-name="emergency-tracking-reports-mx-map-tooltip"] div.map-tooltip [data-tag-name="bbva-button-row"] div.button-row span:nth-of-type(2) [data-tag-name="bbva-button-action"]',
                        },
                    },
                ],
                cancellOperationModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-cancel-alert-modal"]',
                        additionalElements: {
                            contentCancel: '[data-tag-name="bbva-type-text"]',
                            acceptCancelBtn: '[data-tag-name="bbva-button-default"].footer-button',
                            backLink: '[data-tag-name="bbva-button-default"].footer-button.link',
                        },
                    },
                ],
                cancellationRequestModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-cancel-process-modal"]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"][variant="modal-initial"]',
                            iconCloseBtn: '[data-tag-name="bbva-header-main"] #btn-close',
                            illustrationCancellation: '.content .panel-success [data-tag-name="bbva-type-icon"]',
                            titleCancellation: '.content .panel-success [data-tag-name="bbva-type-text"]',
                            messageCancellation: '.content .panel-success [data-tag-name="bbva-type-text"]',
                            iconCancellation: 'div > div.wrapper-icon-title > bbva-type-icon',
                            descriptionCancellation: '.content .list-success',
                            linkCancellation: '.content [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]',
                        },
                    },
                ],
                keepCalmModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-tracking-reports-mx-keep-calm-modal"]',
                        additionalElements: {
                            illustrationCalm: '[data-tag-name="bbva-type-icon"]',
                            titleCalm: '.modal-main #helpModalTitle [data-tag-name="bbva-type-icon"]',
                            descriptionCalm: '.modal-main #helpModalContent .slot-content',
                            backLink: '[data-tag-name="bbva-button-default"].footer-button.link',
                            cancelBtnCalm: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"]',
                        },
                    },
                ],
            },
            requiredElements: ['detectedReport'],
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            // Detected report
            case 'header tr':
                await this.detectedReport[0].additionalElements.headerDetected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button tr':
                await this.detectedReport[0].additionalElements.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration tr':
                await this.detectedReport[0].additionalElements.illustrationDetected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detected title tr':
                await this.detectedReport[0].additionalElements.titleDetected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detected description tr':
                await this.detectedReport[0].additionalElements.descriptionDetected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button link to report tr':
                await this.detectedReport[0].additionalElements.linkReport.waitForDisplayed({timeout: config.wait.M});
                await this.detectedReport[0].additionalElements.linkReport.click();
                break;

            // Looking adjuster
            case 'header tc':
                await this.lookingAdjuster.scrollIntoModal();
                await this.lookingAdjuster.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit button tc':
                await this.lookingAdjuster.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description tc':
                await this.lookingAdjuster.additionalElements.descriptionLooking.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'spinner tc':
                await this.lookingAdjuster.additionalElements.spinnerLooking.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map tc':
                await this.lookingAdjuster.additionalElements.mapLooking.waitForDisplayed({timeout: config.wait.M});
                break;

            // Adjuster Assigned
            case 'header tca':
                await this.lookingAdjuster.scrollIntoModal();
                await this.assignedAdjuster.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button tca':
                await this.assignedAdjuster.additionalElements.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map tca':
                await this.assignedAdjuster.additionalElements.mapAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tooltip map tca':
                await this.assignedAdjuster.additionalElements.tooltipMapAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit tooltip tca':
                await this.assignedAdjuster.additionalElements.exitTooltipAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'photo tca':
                await this.assignedAdjuster.additionalElements.photoAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title tca':
                await this.assignedAdjuster.additionalElements.titleAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy text tca':
                await this.assignedAdjuster.additionalElements.policyAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'time text tca':
                await this.assignedAdjuster.additionalElements.timeAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel operation tca':
                await this.assignedAdjuster.additionalElements.cancelOperationAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call operation tca':
                await this.assignedAdjuster.additionalElements.callOperationAdjuster.waitForDisplayed({timeout: config.wait.M});
                break;

            // Cancell operation
            case 'content cancel trc':
                await this.cancellOperationModal.additionalElements.contentCancel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button trc':
                await this.cancellOperationModal.additionalElements.acceptCancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back link trc':
                await this.cancellOperationModal.additionalElements.backLink.waitForDisplayed({timeout: config.wait.M});
                break;

            //Cancellation request
            case 'header tcancel':
                await this.cancellationRequestModal.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button tcancel':
                await this.cancellationRequestModal.additionalElements.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microilustración tcancel':
                await this.cancellationRequestModal.additionalElements.illustrationCancellation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title tcancel':
                await this.cancellationRequestModal.additionalElements.titleCancellation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message tcancel':
                await this.cancellationRequestModal.additionalElements.messageCancellation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon tcancel':
                await this.cancellationRequestModal.additionalElements.iconCancellation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description tcancel':
                await this.cancellationRequestModal.additionalElements.descriptionCancellation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number link':
                await this.cancellationRequestModal.additionalElements.linkCancellation.waitForDisplayed({timeout: config.wait.M});
                break;

            //Keep calm
            case 'header kc':
                await this.keepCalmModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button kc':
                await this.keepCalmModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microillustration kc':
                await this.keepCalmModal.additionalElements.illustrationCalm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title kc':
                await this.keepCalmModal.additionalElements.titleCalm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description kc':
                await this.keepCalmModal.additionalElements.descriptionCalm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button kc':
                await this.keepCalmModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button kc':
                await this.keepCalmModal.additionalElements.cancelBtnCalm.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: `${item}`,
                    args: arguments[0],
                });
        }
    }

    async goReport() {
        await this.detectedReport[0].additionalElements.linkReport.waitForDisplayed({timeout: config.wait.M});
        await (await this.detectedReport[0].additionalElements.linkReport.waitForAnimation({timeout: config.wait.M})).click();
    }

    async cancelOperation() {
        await this.lookingAdjuster.scrollIntoModal();
        await (await this.assignedAdjuster.additionalElements.cancelOperationAdjuster.waitForClickable({timeout: config.wait.M})).click();
    }

    async cancellationRequest() {
        await (await this.cancellOperationModal.additionalElements.acceptCancelBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async callExecutive() {
        await (await this.assignedAdjuster.additionalElements.callOperationAdjuster.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new EmergencyTrackingReports();
