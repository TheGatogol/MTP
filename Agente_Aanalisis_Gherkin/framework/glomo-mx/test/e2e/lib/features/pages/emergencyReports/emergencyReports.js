import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page, Commands} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHeaderMain from '../../components/bbva-header-main';
import moment from 'moment';

@page('EmergencyReports')
class EmergencyReports extends AbstractGlomoPage {
    constructor() {
        const elementsPageSection = rootElement => `div [data-tag-name="emergency-reports-section"] ${rootElement}`;
        const elementsPageMenu = rootElement => `[data-tag-name="emergency-reports-menu"] [data-tag-name="bbva-transition-container"] ${rootElement}`;
        const elementsPageMenuFaqs = rootElement => `[data-tag-name="emergency-reports-menu-faqs"] ${rootElement}`;
        const elementsPageFaqsDetail = rootElement => `[data-tag-name="emergency-reports-menu-faqs"] [data-tag-name="bbva-transition-container"] div [data-tag-name="help-faqs-aem"] div [data-tag-name="bbva-help-modal"] ${rootElement}`;

        super({
            root: '#cells-template-emergencyReports[state="active"]',
            elements: {
                managerAnalitycs: 'bbva-manager-emergency-sos-analytics',
                vehicleCrashWidget: 'emergency-vehicle-crash-reports-mx',
                vehicleTheftWidget: 'emergency-vehicle-theft-reports-mx',
                vehicleGlassFeature: 'emergency-car-emergency-vehicle-glass-reports-mx',
                bbvaHeaderMainSection: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `[data-tag-name="emergency-reports-mx"] ${BbvaHeaderMain._baseRoot}`,
                        },
                    },
                },
                titlePageSection: elementsPageSection('[data-tag-name="emergency-panel-detail"] div [data-tag-name="bbva-type-text"]'),
                subtitlePageSection: elementsPageSection('[data-tag-name="emergency-panel-detail"] div [data-tag-name="bbva-type-text"]'),
                cardsPageSection: elementsPageSection('div [header-text="__DATA_HEADING__"]'),
                cardsPageMenu: elementsPageMenu('div [header-text="__DATA_HEADING__"]'),
                bbvaHeaderMainMenu: [
                    BbvaHeaderMain,
                    {
                        prefix: '[data-tag-name="emergency-reports-menu"] [data-tag-name="bbva-transition-container"]',
                        additionalElements:{
                            text: '#text',
                            btnBack: '#btn-back',
                            btnHelp: '#btn-help'
                        }
                    }
                ],
                titlePageMenu: elementsPageMenu('div [data-tag-name="emergency-panel-detail"] div.content [data-tag-name="bbva-type-text"]'),
                optionStoleCard: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:phishing"]:nth-child(1)'),
                optionRejectedCard: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:block-card"]'),
                detailPolicy: elementsPageMenu('div div.list-action'),
                changePolicy: elementsPageMenu('div div.list-action div.header-link-actions [data-tag-name="bbva-type-link"]#emergency-reports-change-policy-link'),
                optionShock: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:car-accident"]'),
                optionCrane: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:tow-truck"]'),
                optionStole: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:phishing"]:nth-child(n + 3)'),
                optionAssistance: elementsPageMenu('[data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:car-plus"]'),
                optionGlassDamage: elementsPageMenu('div div [data-tag-name="emergency-reports-list-link"][link-icon-left="spherica:car-moons"]'),
                modalChangeVehicle: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="emergency-reports-modal"]#full-height-modal',
                        additionalElements: {
                            titleslot: '.policies-container [data-tag-name="bbva-type-text"]',
                            btnClose: 'div div div.help-modal div.modal-header slot [data-tag-name="bbva-header-main"]#helpModalHeader header div.header-icons button#btn-close',
                            descriptionslot: 'div [data-tag-name="bbva-form-container"] div [data-tag-name="bbva-type-text"]',
                            radiogroup: '[data-tag-name="bbva-form-container"]',
                            policies: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-text"][text="__SELECTED__"]',
                        }
                    }
                ],
                bbvaHeaderMainFaqs: [
                    BbvaHeaderMain,
                    {
                        prefix: '[data-tag-name="emergency-reports-menu-faqs"]',
                        additionalElements:{
                            text: '#text',
                            btnBack: '#btn-back',
                            btnHelp: '#btn-help'
                        }
                    }
                ],
                titlePageFaqs: '[data-tag-name="emergency-reports-menu-faqs"] [data-tag-name="bbva-transition-container"] div [data-tag-name="help-faqs-aem"] div [data-tag-name="bbva-header-category"]',
                faqsModal:{
                    properties:{root:'div [data-tag-name="emergency-reports-menu-faqs"] [data-tag-name="help-faqs-aem"]'},
                    titlePageFaqs: '[data-tag-name="bbva-header-category"]',
                    firstQuestion: 'div.link-list-container:nth-of-type(1) [data-tag-name="bbva-type-link"]',
                    secondQuestion: 'div.link-list-container:nth-of-type(2) [data-tag-name="bbva-type-link"]',
                    thirdQuestion: 'div.link-list-container:nth-of-type(3) [data-tag-name="bbva-type-link"]',
                    fourthQuestion: 'div.link-list-container:nth-of-type(4) [data-tag-name="bbva-type-link"]',
                    fifthQuestion: 'div.link-list-container:nth-of-type(5) [data-tag-name="bbva-type-link"]',
                },
                bbvaHeaderMainFaqsDetail: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: elementsPageMenuFaqs(`div div.content div.modal-header slot ${BbvaHeaderMain._baseRoot}`),
                        },
                    },
                },
                headerPageFaqsDetail: elementsPageFaqsDetail('div div.content div.modal-header slot [data-tag-name="bbva-header-main"] #text'),
                titlePageFaqsDetail: 'div [data-tag-name="emergency-reports-menu-faqs"] [data-tag-name="help-faqs-aem"] div [data-tag-name="bbva-help-modal"]#content-modal [data-tag-name="help-faqs-aem-panel-info"] div.content [data-tag-name="bbva-type-text"]',
                descriptionFaqsDetail: 'div [data-tag-name="emergency-reports-menu-faqs"] [data-tag-name="help-faqs-aem"] div [data-tag-name="bbva-help-modal"]#content-modal div.detail-content [data-tag-name="bbva-type-text"]',
                modalErrorReports: {
                    properties: { root: elementsPageSection('[data-tag-name="emergency-reports-panel-info"] div.panel-info div')},
                    titleSlotted: '[data-tag-name="bbva-type-text"]',
                    icontype: '[data-tag-name="bbva-type-icon"]',
                    descriptionSlotted: 'div.description [data-tag-name="bbva-type-text"]',
                    cancelBtn: 'div.link [data-tag-name="bbva-type-link"]',
                },
                emergencyCraneVehicleReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crane-generate-reports-multistep-modal"]',
                        modifiers: '#emergency-crane-multistep-modal',
                        additionalElements: {
                            iconFaqs: '[variant="modal-initial"]#helpModalHeader #btn-help',
                            closeCrane: '[variant="modal-initial"]#helpModalHeader #btn-close',
                            titleGeolocationCollapsed: '#step-1 #headingLabel',
                            titleGeolocation: '.location-step #step-1 .header',
                            summaryGeoComplete: '[all-completed] #step-1 .completed-content',
                            mapGeolocation: '#reportLocationStep .order-template [data-tag-name="bbva-map-static"]',
                            changeGeolocation: '[total-steps="1"] #reportLocationStep .order-template [data-tag-name="bbva-type-link"]',
                            acceptGeoLocation: '#reportLocationStep [data-tag-name="bbva-button-default"]',
                            acceptSummary: 'div.summary-description [data-tag-name="bbva-button-default"]',
                            descriptionSummary: '[data-tag-name="bbva-expandable-multistep"] .summary-description [data-tag-name="bbva-type-text"]',
                            linkSummary: '[data-tag-name="bbva-expandable-multistep"] .summary-description [data-tag-name="bbva-type-link"]',
                            modifyStepOne: '#step-1 #editButton',
                        }
                    }
                ],
                emergencyCraneChangeGeolocation: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="change-report-location-modal"]',
                        modifiers: '#change-report-location-modal',
                        additionalElements: {
                            inputChangeLocation: '[data-tag-name="bbva-map-dynamic"] .pac-target-input',
                            suggestionsInput: '[data-tag-name="bbva-map-dynamic"] .predictive [data-tag-name="bbva-form-text"]',
                            acceptChangeLocation: 'div.modal-footer [data-tag-name="bbva-button-default"]'
                        }
                    }
                ],
                successOrAlreadyCraneReport: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crane-info-modal"]',
                        modifiers: '#success-report-modal',
                        additionalElements: {
                            header: '#helpModalHeader',
                            titleSuccess: '[data-tag-name="bbva-notification-message"] .wrapper-icon-title',
                            subtitleSuccess: '[data-tag-name="bbva-notification-message"] .message',
                            detailReport: '.order-online-components',
                            timer: '[data-tag-name="bbva-progress-timer"]',
                            callBbvaLineSuccess: '.space-top [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]',
                            actionsPolicy: '[data-tag-name="bbva-button-row"] span:nth-child(__INDEX__) [data-tag-name="bbva-button-action"]',
                            exit: 'div.modal-footer [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                craneReportsModalToCallLine: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crane-info-modal"]',
                        modifiers: '#we-continue-working',
                        additionalElements: {
                            btnCallBBVA: '.footer-button [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                alreadyCraneReport: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crane-info-modal"]',
                        modifiers: '#already-reported-modal',
                        additionalElements: {
                            titleAlready: '.panel.panel-error [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                            subtitleAlready: '.panel.panel-error [data-tag-name="bbva-type-text"][font-type="body"]',
                            callBbvaLineAlready: '.slot-footer [data-tag-name="bbva-button-default"]',
                            cancel: '.slot-footer [data-tag-name="bbva-button-default"][variant="link"]'
                        }
                    }
                ],
                backFirstStep: '[data-tag-name="emergency-crane-vehicle-reports-mx"] [data-tag-name="emergency-crane-vehicle-reports-mx-faqs-menu"] [data-tag-name="help-faqs-aem"] #helpModalHeader #btn-close',
                questionHelp: '[data-tag-name="emergency-crane-vehicle-reports-mx-faqs-menu"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-type-link"]',
                closeDetailFaqs: '[data-tag-name="emergency-crane-vehicle-reports-mx"] [data-tag-name="emergency-crane-vehicle-reports-mx-faqs-menu"] [data-tag-name="help-faqs-aem"] #content-modal #helpModalHeader #btn-close',
                exitMiddleModal: '[data-tag-name="crane-info-modal"] #prevent-leave-modal [data-tag-name="bbva-button-default"]',
                locationVehicleTheftReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="location-detail-vehicle-theft-modal"]',
                        additionalElements: {
                            headerVt: '.header-slot [data-tag-name="bbva-header-main"][variant="modal-initial"]',
                            faqsVt: '.header-slot [data-tag-name="bbva-header-main"][variant="modal-initial"] #btn-help',
                            exitButtonVt: '.header-slot [data-tag-name="bbva-header-main"][variant="modal-initial"] #btn-close',
                            changeLocationBtnVt: '[data-tag-name="bbva-expandable-multistep"] #step-1 [data-tag-name="vehicle-theft-location-detail"] #change-location',
                            continueBtnVt: '[data-tag-name="bbva-expandable-multistep"] #step-1 .step-footer #continue-step',
                            titleStepOneVt: '[data-tag-name="bbva-expandable-multistep"] #step-1 .header',
                            mapStaticVt: '[data-tag-name="bbva-expandable-multistep"] #step-1 [data-tag-name="vehicle-theft-location-detail"] [data-tag-name="bbva-map-static"]',
                            addressDetailVt: '[data-tag-name="bbva-expandable-multistep"] #step-1 [data-tag-name="vehicle-theft-location-detail"] [data-tag-name="bbva-map-static"] [data-tag-name="bbva-type-text"]',
                            completeStepOneVt: '[data-tag-name="bbva-expandable-multistep"] #step-1[completed]',
                            headerStepOneBtnVt: '#step-1[completed] #heading',
                            editStepOneBtnVt: '[data-tag-name="bbva-expandable-multistep"] #step-1[completed] #editButton',
                            reportBtnVt: '[data-tag-name="bbva-expandable-multistep"] .confirm-step #footer-button',
                            summaryVt: '[data-tag-name="bbva-expandable-multistep"] .confirm-step',
                            noticePrivacylink: '[data-tag-name="bbva-expandable-multistep"] .confirm-step [data-tag-name="bbva-type-link"].footer-link',
                            noticePrivacyHeader: '[data-tag-name="notice-privacy-vehicle-theft-modal"] [data-tag-name="bbva-help-modal"] .header-slot [data-tag-name="bbva-header-main"]',
                            closeNoticePrivacy: '[data-tag-name="notice-privacy-vehicle-theft-modal"] [data-tag-name="bbva-help-modal"] .header-slot [data-tag-name="bbva-header-main"] #btn-close',
                            noticePrivacyContent: '[data-tag-name="notice-privacy-vehicle-theft-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-type-text"][text="emergency-vehicle-theft-reports-mx-notice-privacy-paragraph-text"]'

                        }
                    }
                ],
                changeLocationVehicleTheftReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="change-location-vehicle-theft-modal"]',
                        additionalElements: {
                            predictiveInputVt: '[data-tag-name="bbva-map-dynamic"] [data-tag-name="bbva-form-text"] .pac-target-input',
                            suggestionsInput: '[data-tag-name="bbva-map-dynamic"] .predictive [data-tag-name="bbva-form-text"]',
                            acceptChangeLocation: '.slot-footer [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                detectedVehicleTheftReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="vehicle-theft-error-modal"][modal-content="detected-errors"]',
                        additionalElements: {
                            header: '.header-slot [data-tag-name="bbva-header-main"]',
                            microillustrationDetectedVt: '[data-tag-name="vehicle-theft-message-modal"]',
                            closeBtn: '[data-tag-name="bbva-header-main"] #btn-close',
                            acceptBtn: '[data-tag-name="bbva-button-default"]',
                            cancelBtn: '[data-tag-name="bbva-button-default"].footer-button'
                        }
                    }
                ],
                middleModalTheft: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="error-vehicle-theft-report-modal"]',
                    }
                ],
                successVehicleTheftReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="success-vehicle-theft-report-modal"][visible-modal]',
                        additionalElements: {
                            header: '.header-slot [data-tag-name="bbva-header-main"]',
                            microillustrationVt: '.slot-content-success [data-tag-name="vehicle-theft-message-modal"]',
                            listItem: '.slot-content-success [data-tag-name="vehicle-theft-list-item"]:nth-child(__INDEX__)',
                            progressTimerVt: '.slot-content-success [data-tag-name="bbva-progress-timer"]',
                            insuranceAdvisorTextVt: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-text"]',
                            callHelplineVt: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                            notificationMessageVt: '.slot-content-success [data-tag-name="bbva-notification-message"]',
                            operativeVt: '.slot-content-success [data-tag-name="bbva-button-row"] #buttons span:nth-child(__INDEX__) [data-tag-name="bbva-button-action"]',
                            leaveBtnVt: '.slot-footer-success [data-tag-name="bbva-button-default"]',
                            closeBtn: '[data-tag-name="bbva-header-main"] #btn-close'
                        }
                    }
                ],
                faqAlreadyReport: '[data-tag-name="help-faqs-vehicle-theft-modal"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-type-link"]',
                faqClose: '[data-tag-name="help-faqs-vehicle-theft-modal"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-help-modal"][data-selector="faqs-list-modal"] #btn-close',
                closeFaqsDetail: '[data-tag-name="help-faqs-vehicle-theft-modal"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-help-modal"][data-selector="faqs-content-modal"] #btn-close',
                backHelpFaqs: '[data-tag-name="emergency-assistance-vehicle-report-mx-faqs-menu"] [data-tag-name="bbva-help-modal"]:not(#content-modal) #btn-close',
                closeFaqs: '[data-tag-name="emergency-assistance-vehicle-report-mx-faqs-menu"] #content-modal #btn-close',
                exitAssistances: '[data-tag-name="assistances-info-modal"] #prevent-leave-modal [data-tag-name="bbva-button-default"]',
                listLink: '[data-tag-name="emergency-assistance-vehicle-report-mx-faqs-menu"] [data-tag-name="help-faqs-aem"] .link-list-container [data-tag-name="bbva-type-link"]',
                assistancesEmergency: [
                    BbvaHelpModal,
                    {
                        modifiers: '#emergency-assistances-multistep-modal',
                        additionalElements: {
                            secondaryBtn: '#helpModalHeader #btn-help',
                            descriptionGeolocation: '#step-2 #heading',
                            mapStatic: '#reportLocationStep [data-tag-name="bbva-map-static"]',
                            headingCollapsedStepAssist: '#step-1 #heading',
                            linkCollapsedStepAssist: '#step-1 #editButton',
                            contentCollapsedStepAssist: '#step-1 div.completed-content',
                            headingCollapsedStepLocation: '#step-2 #heading',
                            contentCollapsedStepLocation: '#step-2 div.completed-content',
                            header: '#helpModalHeader[variant="modal-initial"]',
                            primaryBtn: '#helpModalHeader[variant="modal-initial"] #btn-close',
                            iconTire: '#otherAssistsStep [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-icon"]',
                            descriptionTire: '#otherAssistsStep [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                            continueBtn: '#step-1 [data-tag-name="bbva-button-default"]',
                            checksAssistances: '#otherAssistsStep [data-tag-name="bbva-form-checkbox"]',
                            changeLocation: '#reportLocationStep [data-tag-name="bbva-type-link"]',
                            acceptLocation: '#step-2 [data-tag-name="bbva-button-default"]',
                            acceptReport: '.summary-description [data-tag-name="bbva-button-default"]',
                            descriptionSummary: '.summary-disclaimer [data-tag-name="bbva-type-text"]',
                            linkSummary: '.summary-disclaimer [data-tag-name="bbva-type-link"]',
                            linkCollapsedStepLocation: '#step-2 [data-tag-name="bbva-type-link"]',
                        }
                    }
                ],
                assistancesEmergencyChange: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="assistance-generate-report-multistep-modal"]',
                        modifiers: '#change-report-location-modal',
                        additionalElements: {
                            headerLocation: '#helpModalHeader',
                            inputLocation: '[data-tag-name="bbva-map-dynamic"] [data-tag-name="bbva-form-predictive"] input',
                            mapFirstSuggestion: '[data-tag-name="bbva-map-dynamic"] section.suggestions li:first-child [data-tag-name="bbva-type-text"]',
                            acceptNewLocation: '[data-tag-name="bbva-button-default"][fullwidth]:not([hidden])'
                        },
                    }
                ],
                successModalAssistances: [
                    BbvaHelpModal,
                    {
                        prefix: '#general-modal',
                        modifiers: '#success-report-modal',
                        additionalElements: {
                            icontypeSuccess: '[data-tag-name="bbva-clip-box-item"][icon-status="success"]',
                            titleSuccessModal: '[data-tag-name="bbva-clip-box"] + [data-tag-name="bbva-type-text"]',
                            subtitleSuccessModal: '[data-tag-name="bbva-clip-box"] ~ [data-tag-name="bbva-type-text"][tag="p"]',
                            progressTimer: '.main-timer [data-tag-name="bbva-progress-timer"]',
                            callBbvaLine: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                            timerCount: '.main-timer [data-tag-name="bbva-progress-timer"] .time [data-tag-name="bbva-type-text"]',
                            dateSuccessModal: '[data-tag-name="bbva-date"] [data-tag-name="bbva-text"]',
                            buttonsRowAction: '[data-tag-name="bbva-button-action"]',
                        }
                    }
                ],
                progressModalAssistances: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="assistances-info-modal"]',
                        modifiers: '#already-reported-modal',
                        additionalElements: {
                            iconModal: '[data-tag-name="bbva-type-icon"][icon="spherica:warning"]',
                            titleAndDescriptionModal: '[data-tag-name="bbva-type-text"]',
                            buttonModal: '[data-tag-name="bbva-button-default"]:has(+ [data-tag-name="bbva-button-default"][variant="link"])'
                        }
                    }
                ],
                modalErrorAssistances: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="assistance-generic-error-modal"]',
                        additionalElements: {
                            icontypeErrorComunicationModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-clip-microillustration"]',
                            titleErrorComunicationModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-text"].title',
                            descriptionErrorComunicationModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-text"].description',
                            callButtonErrorComunicationModal: 'div.modal-footer [data-tag-name="bbva-button-default"]',
                            exitLinkErrorComunicationModal: 'div.modal-footer [data-tag-name="bbva-link"]',
                            icontypeErrorModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-clip-microillustration"]',
                            titleErrorModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-text"].title',
                            descriptionErrorModal: '[data-tag-name="assistance-message-modal"] [data-tag-name="bbva-text"].description',
                            exitButtonErrorModal: 'div.modal-footer [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                exitMiddleModalAssists: '#prevent-leave-modal [data-tag-name="bbva-button-default"]',
                emergencyVehicleCrashReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crash-report-multistep"]',
                        modifiers: '#crash-report-multistep',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"][variant="modal-initial"] header',
                            iconFaqs: '[data-tag-name="bbva-header-main"][variant="modal-initial"] header #btn-help',
                            closeCrash: '[data-tag-name="bbva-header-main"][variant="modal-initial"] header #btn-close',
                            titleStepOneVc: '#reportLocationStep #heading',
                            mapStatic: '#reportLocationStep #step-1 .bbva-map-static-section',
                            mapStaticText: '#reportLocationStep #step-1 .bbva-map-static-text',
                            changeLocation: '#step-1 [data-tag-name="bbva-type-link"]',
                            acceptLocation: '#reportLocationStep [data-tag-name="bbva-button-default"]',
                            titleStepTwoVc: '#emergencyServicesStep .header #heading',
                            questionsForm: '#emergencyServicesStep [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-type-text"]',
                            radioForm: '#emergencyServicesStep [data-tag-name="bbva-form-radio-button-input"]',
                            acceptServices: '#emergencyServicesStep div.button-container [data-tag-name="bbva-button-default"]',
                            containerEmergencyServices: '#emergencyServicesStep div.content.container emergency-services-step',
                            acceptReport: 'div.confirm-step [data-tag-name="bbva-button-default"]',
                            descriptionSummary: 'div.summary-disclaimer [data-tag-name="bbva-type-text"]',
                            linkSummary: 'div.summary-disclaimer [data-tag-name="bbva-type-link"]',
                            headingCollapsedStepOne: '#reportLocationStep .header #heading [data-tag-name="bbva-type-text"]#headingLabel',
                            linkCollapsedStepOne: '#reportLocationStep .header [data-tag-name="bbva-type-link"]#editButton',
                            contentCollapsedStepOne: '#reportLocationStep[completed] div.completed-content',
                            headingCollapsedStepTwo: '#emergencyServicesStep .header #heading [data-tag-name="bbva-type-text"]#headingLabel',
                            linkCollapsedStepTwo: '#emergencyServicesStep [data-tag-name="bbva-type-link"]#editButton',
                            contentCollapsedStepTwo: '#emergencyServicesStep[completed] div.completed-content'
                        }
                    }
                ],
                crashReportsModalSuccess: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crash-reports-success-page"]',
                        modifiers: '#successPage',
                        additionalElements: {
                            header: '.header-slot [data-tag-name="bbva-header-main"]',
                            closeHeaderIcon: '#helpModalHeader #btn-close',
                            iconTypeSuccess: '.summary-container [data-tag-name="bbva-clip-box"]',
                            titleSubtitleSuccessModal: '[data-tag-name="bbva-type-text"]',
                            dateSuccessModal: '[data-tag-name="bbva-type-date"] [data-tag-name="bbva-type-text"]',
                            progressTimer: '.progress-timer-container [data-tag-name="bbva-progress-timer"] .figure',
                            callBbvaLine: '[data-tag-name="bbva-type-link"]',
                            buttonsRowAction: '[data-tag-name="bbva-button-action"]',
                            exitBtnCrash: '.slot-footer [data-tag-name="bbva-button-default"]'
                        }
                    }
                ],
                crashReportsModalToCallLine: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crash-reports-success-page"]',
                        modifiers: '#supportStatusModal',
                        additionalElements: {
                            btnClose:'#helpModalHeader #btn-close',
                            iconInformation: '#helpModalTitle bbva-type-icon',
                            titleModalCallBbva: '#title-text',
                            subtitleModal: '.content-timer-modal  bbva-type-text',
                            timerModalCallBbva: '.expired-footer-modal bbva-progress-timer',
                            btnCallBBVA: 'div.expired-footer-modal [data-tag-name="bbva-button-default"]',
                        }
                    }
                ],
                crashReportsModalInProgress: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crash-reports-modal-controller"]',
                        modifiers: '#already-requested-modal',
                        additionalElements: {
                            container: '.transition-container',
                            header: '.header-slot [data-tag-name="bbva-header-main"]',
                            closeHeaderIcon: '#helpModalHeader #btn-close',
                            iconTypeError: '[data-tag-name="bbva-type-icon"]',
                            titleSubtitleInProgressModal: '[data-tag-name="bbva-type-text"]',
                            callBtnLine: '.slot-footer [data-tag-name="bbva-button-default"]',
                            cancelBtnCrash: '.slot-footer [data-tag-name="bbva-button-default"][variant="link"]'
                        }
                    }
                ],
                crashModalChangeLocation: [
                    BbvaHelpModal,
                    {
                        prefix: 'emergency-vehicle-crash-reports-mx [data-tag-name="change-report-location-modal"]',
                        modifiers: '#change-report-location-modal',
                        additionalElements: {
                            inputLocation: 'bbva-map-dynamic bbva-form-predictive bbva-form-input input',
                            inputSelectLocation: '[data-tag-name="bbva-map-dynamic"] section.suggestions [data-tag-name="bbva-link"]',
                            acceptNewLocation: 'div.content div.modal-footer [data-tag-name="bbva-button-default"]'
                        },
                    }
                ],
                crashModalErrorOperation: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="crash-reports-modal-controller"]',
                        modifiers: '#not-performed-modal',
                        additionalElements: {
                            iconError: '#helpModalTitle bbva-type-icon',
                            titleError: '#helpModalTitle #title-text',
                            buttonCall: '.content .modal-main .modal-footer bbva-button-default',
                            buttonExit: '.content .modal-main .modal-footer bbva-button-default.footer-button.link'
                        },
                    }
                ],
                exitBtnNoticePrivacy: '[data-tag-name="crash-reports-modal-controller"] #notice-of-privacy #helpModalHeader #btn-close',
                faqAlreadyReportCrash: '[data-tag-name="emergency-vehicle-crash-reports-mx-faqs"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-type-link"]',
                faqReturnReportCrash: '[data-tag-name="emergency-vehicle-crash-reports-mx-faqs"] [data-tag-name="bbva-transition-container"] #btn-back',
                faqCloseCrash: '[data-tag-name="emergency-vehicle-crash-reports-mx-faqs"] [data-tag-name="help-faqs-aem"] #content-modal [data-tag-name="bbva-header-main"][variant="modal-initial"] header #btn-close',
                faqsCloseMenu: '[data-tag-name="emergency-vehicle-crash-reports-mx-faqs"] [data-tag-name="help-faqs-aem"] [data-tag-name="bbva-help-modal"]:not(#content-modal) [data-tag-name="bbva-header-main"][variant="modal-initial"] header #btn-close',
                exitMiddleModalCrash: '[data-tag-name="crash-reports-modal-controller"] #prevent-leave-modal [data-tag-name="bbva-button-default"]',
                continueMiddleModalCrash: '[data-tag-name="crash-reports-modal-controller"] #prevent-leave-modal [data-tag-name="bbva-button-default"][variant="link"]',
                glassMultistepReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="glass-reports-multistep-modal"]',
                        additionalElements: {
                            exit: '[variant="modal-initial"] #btn-close',
                            accidentDateTitle: '#accidentDateStep #heading',
                            accidentDateInput: '#accidentDateStep [data-tag-name="accident-date-step"] #accidentDateInput',
                            accidentDateContinue: '#accidentDateContinue',
                            accidentDateEdit: '#accidentDateStep [data-tag-name="bbva-type-link"]#editButton',
                            accidentDescription: '#accidentDateStep [data-tag-name="accident-date-step"] [data-tag-name="bbva-type-text"]',
                            accidentInputDescription: '#accidentDateStep [data-tag-name="accident-date-step"] #accidentDateInput .notification',
                            accidentNotification: '#accidentDateStep [data-tag-name="accident-date-step"] [data-tag-name="bbva-notification-message"]',
                            glassesTitle: '#glassesStep',
                            glassesEdit: '#glassesStep #editButton',
                            views: '#glassesStep [data-tag-name="car-glasses-step"] [data-tag-name="bbva-button-group"] [data-tag-name="bbva-button-group-item"][value="__SELECTED__"]',
                            glasses: '#glassesStep [data-tag-name="car-glasses-step"] [data-tag-name="bbva-form-checkbox"][value="__INDEX__"]',
                            glassesRadioGroup: '#glassesStep [data-tag-name="car-glasses-step"] .container-supplier',
                            searchCrystals: '#glassesStep [data-tag-name="car-glasses-step"] .container-supplier [data-tag-name="bbva-form-control-input"][value="__SELECTED__"]',
                            carGlassesContinue: '#glassesStep [data-tag-name="car-glasses-step"] #carGlassesContinue',
                            locationTitle: '#locationStep #heading',
                            locationEdit: '#locationStep #editButton',
                            mapStatic: '#locationStep [data-tag-name="location-step"] [data-tag-name="bbva-map-static"]',
                            mapStaticDescription: '#locationStep [data-tag-name="location-step"] .bbva-map-static-text',
                            changeLocationLink: '#locationStep [data-tag-name="location-step"] #change-location',
                            notificationLocation: '#locationStep [data-tag-name="location-step"] [data-tag-name="bbva-notification-message"]',
                            radioGroupLocation: '#locationStep [data-tag-name="location-step"] [data-tag-name="bbva-form-radio-group"]',
                            selectedCrystal: '#locationStep [data-tag-name="location-step"] .container-auto-parts [data-tag-name="bbva-form-control-input',
                            locationContinue: '#locationStep [data-tag-name="location-step"] #locationContinue',
                            confirmation: '.confirmation-area [data-tag-name="bbva-button-default"]',
                            confirmationText: '.confirmation-area [data-tag-name="bbva-type-text"]',
                            noticePrivacy: '.confirmation-area [data-tag-name="bbva-type-link"]'
                        }
                    }
                ],
                glassPrivacyNoticeModal: {
                    properties: { root: '[data-tag-name="glass-reports-multistep-modal"] [data-tag-name="glass-reports-generic-modal"] [data-tag-name="bbva-help-modal"]'},
                    header: '[data-tag-name="bbva-header-main"][variant="modal-short"]',
                    description: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                },
                glassSuccessReports: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="glass-reports-success-modal"]',
                        additionalElements: {
                            headerCategory: '[slot="slot-content"] [data-tag-name="bbva-header-category"]',
                            listItem: '[slot="slot-content"] [data-tag-name="glass-reports-list-item"]',
                            notificationMessage: '[slot="slot-content"] [data-tag-name="bbva-notification-message"]',
                            share: '[slot="slot-content"] [data-tag-name="bbva-button-row"]'
                        }
                    }
                ],
                glassGenericModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[visible-modal][data-tag-name="glass-reports-generic-modal"]',
                        additionalElements: {
                            description: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                            callBtnLine: '.slot-footer [data-tag-name="bbva-button-default"]',
                            confirmationArea: '.confirmation-area',
                        }
                    }
                ]
            },
            requiredElements: [
                '__root'
            ],
        });
    }

    async _screenValidation({item, value = 'visible'}) {
        switch (item.toLowerCase()) {
            case 'title section':
                await this.titlePageSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle section':
                await this.subtitlePageSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'emergency cards': {
                const cardValue = 'emergency-reports-mx-heading-card';
                await this.cardsPageSection.specifySelector({placeholder: '__DATA_HEADING__', value: cardValue})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            }
            case 'emergency vehicle': {
                const vehicleValue = 'emergency-reports-mx-heading-insurance';
                await this.cardsPageSection.specifySelector({placeholder:'__DATA_HEADING__', value: vehicleValue})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            }
            case 'header modal':
                await (await this.bbvaHeaderMainSection.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button modal':
                if (value.toLowerCase() === 'left') {
                    await (await this.bbvaHeaderMainSection.btnBack.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'title modal':
                await this.modalErrorReports.titleSlotted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon type modal':
                await this.modalErrorReports.icontype.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal':
                await this.modalErrorReports.descriptionSlotted.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link exit modal':
                await this.modalErrorReports.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header menu':
                await this.bbvaHeaderMainMenu.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail policy':
                await this.detailPolicy.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'button left menu':
                await this.bbvaHeaderMainMenu.btnBack.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right menu':
                await this.bbvaHeaderMainMenu.btnHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title menu':
                await (await this.titlePageMenu.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button stole':
                await this.optionStoleCard.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'button rejected card':
                await this.optionRejectedCard.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option shock':
                await this.optionShock.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option glass damage':
                await this.optionGlassDamage.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option crane':
                await this.optionCrane.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option stole':
                await this.optionStole.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'option assistance':
                if (global.user?.emergencies?.vehicle?.assistances?.menuOption)
                    await (await this.cardsPageMenu.specifySelector({placeholder:'__DATA_HEADING__', value: global.user?.emergencies?.vehicle?.assistances?.menuOption})
                        .waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'}));
                else await this.optionAssistance.waitForDisplayed({timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'});
                break;
            case 'header help':
                await this.modalChangeVehicle.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right help':
                await this.modalChangeVehicle.additionalElements.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description help':
                await this.modalChangeVehicle.additionalElements.descriptionslot.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio group':
                await this.modalChangeVehicle.additionalElements.radiogroup.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept help':
                await (await this.modalChangeVehicle.acceptBtn.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header faqs':
                await (await this.bbvaHeaderMainFaqs.additionalElements.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title faqs':
                await this.faqsModal.titlePageFaqs.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first question':
                await this.faqsModal.firstQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second question':
                await this.faqsModal.secondQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'third question':
                await this.faqsModal.thirdQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fourth question':
                await this.faqsModal.fourthQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fifth question':
                await this.faqsModal.fifthQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header detail faqs':
                await this.bbvaHeaderMainFaqsDetail.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title detail faqs':
                await this.titlePageFaqsDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description detail faqs':
                await this.descriptionFaqsDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs button crane':
                await this.emergencyCraneVehicleReports.additionalElements.iconFaqs.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button crane':
                await this.emergencyCraneVehicleReports.additionalElements.closeCrane.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title geo crane collapsed':
                await this.emergencyCraneVehicleReports.additionalElements.titleGeolocationCollapsed.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title geo crane':
                await this.emergencyCraneVehicleReports.additionalElements.titleGeolocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary geo':
                await this.emergencyCraneVehicleReports.additionalElements.summaryGeoComplete.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map crane':
                await this.emergencyCraneVehicleReports.additionalElements.mapGeolocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change geo crane':
                await this.emergencyCraneVehicleReports.additionalElements.changeGeolocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept geo crane':
                await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description summary crane':
                await this.emergencyCraneVehicleReports.additionalElements.descriptionSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept summary crane':
                await this.emergencyCraneVehicleReports.additionalElements.acceptSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacity summary crane':
                await this.emergencyCraneVehicleReports.additionalElements.linkSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success crane':
                await this.successOrAlreadyCraneReport.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title crane success':
                await this.successOrAlreadyCraneReport.additionalElements.titleSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle crane success':
                await this.successOrAlreadyCraneReport.additionalElements.subtitleSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail success crane':
                await this.successOrAlreadyCraneReport.additionalElements.detailReport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'timer success crane':
                await this.successOrAlreadyCraneReport.additionalElements.timer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call success crane':
                await this.successOrAlreadyCraneReport.additionalElements.callBbvaLineSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pdf success crane':
                await (await this.successOrAlreadyCraneReport.additionalElements.actionsPolicy.specifySelector({placeholder: '__INDEX__', value: 1}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share success crane':
                await (await this.successOrAlreadyCraneReport.additionalElements.actionsPolicy.specifySelector({placeholder: '__INDEX__', value: 2}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title already crane':
                await this.alreadyCraneReport.additionalElements.titleAlready.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description already crane':
                await this.alreadyCraneReport.additionalElements.subtitleAlready.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call already crane':
                await this.alreadyCraneReport.additionalElements.callBbvaLineAlready.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel already crane':
                await this.alreadyCraneReport.additionalElements.cancel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'location header vt':
                await this.locationVehicleTheftReports.additionalElements.headerVt.waitForEnabled({timeout: config.wait.M});
                break;
            case 'location faqs vt':
                await this.locationVehicleTheftReports.additionalElements.faqsVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'location exit button vt':
                await this.locationVehicleTheftReports.additionalElements.exitButtonVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step one vt':
                await this.locationVehicleTheftReports.additionalElements.titleStepOneVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static vt':
                await this.locationVehicleTheftReports.additionalElements.mapStaticVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address detail vt':
                await this.locationVehicleTheftReports.additionalElements.addressDetailVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location btn vt':
                await this.locationVehicleTheftReports.additionalElements.changeLocationBtnVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button vt':
                await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'complete step one vt':
                await this.locationVehicleTheftReports.additionalElements.completeStepOneVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header step one button vt':
                await this.locationVehicleTheftReports.additionalElements.headerStepOneBtnVt.waitForEnabled({timeout: config.wait.M});
                break;
            case 'edit step one button vt':
                await this.locationVehicleTheftReports.additionalElements.editStepOneBtnVt.waitForEnabled({timeout: config.wait.M});
                break;
            case 'summary vt':
                await this.locationVehicleTheftReports.additionalElements.summaryVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice privacy modal header':
                await this.locationVehicleTheftReports.additionalElements.noticePrivacyHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice privacy modal icon close':
                await this.locationVehicleTheftReports.additionalElements.closeNoticePrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice privacy modal content':
                await this.locationVehicleTheftReports.additionalElements.noticePrivacyContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location header vt':
                await this.changeLocationVehicleTheftReports.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location exit button vt':
                await this.changeLocationVehicleTheftReports.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'predictive input vt':
                await this.changeLocationVehicleTheftReports.additionalElements.predictiveInputVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location button vt':
                await this.changeLocationVehicleTheftReports.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detected header vt':
                await (await this.detectedVehicleTheftReports.additionalElements.header.scrollIntoView({block: 'start', behavior: 'smooth'})).waitForEnabled({timeout: config.wait.M});
                break;
            case 'detected exit button vt':
                await this.detectedVehicleTheftReports.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microilustration detected vt':
                await this.detectedVehicleTheftReports.additionalElements.microillustrationDetectedVt.scrollIntoView({block: 'start', behavior: 'smooth'});
                await this.detectedVehicleTheftReports.additionalElements.microillustrationDetectedVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detected call button vt':
                await this.detectedVehicleTheftReports.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detected cancel button vt':
                await this.detectedVehicleTheftReports.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success header vt':
                await this.successVehicleTheftReports.additionalElements.header.waitForEnabled({timeout: config.wait.M});
                await this.successVehicleTheftReports.additionalElements.header.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
            case 'success exit button vt':
                await this.successVehicleTheftReports.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success microilustration vt':
                await this.successVehicleTheftReports.additionalElements.microillustrationVt.scrollIntoView({block: 'start', behavior: 'smooth'});
                await this.successVehicleTheftReports.additionalElements.microillustrationVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success policy vt':
                await this.successVehicleTheftReports.additionalElements.listItem.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success number report vt':
                await this.successVehicleTheftReports.additionalElements.listItem.specifySelector({placeholder: '__INDEX__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success type report vt':
                await this.successVehicleTheftReports.additionalElements.listItem.specifySelector({placeholder: '__INDEX__', value: 4}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success progress timer vt':
                await this.successVehicleTheftReports.additionalElements.progressTimerVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success advisor text vt':
                await this.successVehicleTheftReports.additionalElements.insuranceAdvisorTextVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success call helpline vt':
                await this.successVehicleTheftReports.additionalElements.callHelplineVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success notification message vt':
                await this.successVehicleTheftReports.additionalElements.notificationMessageVt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative share vt':
                await this.successVehicleTheftReports.additionalElements.operativeVt.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative policy vt':
                await this.successVehicleTheftReports.additionalElements.operativeVt.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success leave button vt':
                await this.successVehicleTheftReports.additionalElements.leaveBtnVt.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'heading other assist':
                await (await this.assistancesEmergency.additionalElements.headingCollapsedStepAssist.elements())
                    .value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link other assist':
                await (await this.assistancesEmergency.additionalElements.linkCollapsedStepAssist.elements())
                    .value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content other assist':
                await this.assistancesEmergency.additionalElements.contentCollapsedStepAssist.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'heading completed step location':
                await this.waitForElementsExist(this.assistancesEmergency.additionalElements.headingCollapsedStepLocation);
                await (await this.assistancesEmergency.additionalElements.headingCollapsedStepLocation.elements())
                    .value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link completed step location':
                await (await this.assistancesEmergency.additionalElements.linkCollapsedStepLocation.elements())
                    .value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content complet step location':
                await this.waitForElementsExist(this.assistancesEmergency.additionalElements.contentCollapsedStepLocation);
                await this.assistancesEmergency.additionalElements.contentCollapsedStepLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon faqs assist':
                await this.assistancesEmergency.additionalElements.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header assistances':
                await this.assistancesEmergency.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right assistances':
                await this.assistancesEmergency.additionalElements.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox current':
                await this.waitForElementsExist(this.assistancesEmergency.additionalElements.checksAssistances);
                await (await this.assistancesEmergency.additionalElements.checksAssistances.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox gasoline':
                await this.waitForElementsExist(this.assistancesEmergency.additionalElements.checksAssistances);
                await (await this.assistancesEmergency.additionalElements.checksAssistances.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox tire':
                await this.waitForElementsExist(this.assistancesEmergency.additionalElements.checksAssistances);
                await (await this.assistancesEmergency.additionalElements.checksAssistances.elements())
                    .value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tire icon':
                await this.assistancesEmergency.additionalElements.iconTire.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tire description':
                await this.assistancesEmergency.additionalElements.descriptionTire.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description geolocation':
                await this.assistancesEmergency.additionalElements.descriptionGeolocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static':
                await this.assistancesEmergency.additionalElements.mapStatic.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location':
                await this.assistancesEmergency.additionalElements.changeLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept location':
                await this.assistancesEmergency.additionalElements.acceptLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept report':
                await this.assistancesEmergency.additionalElements.acceptReport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description summary':
                await this.assistancesEmergency.additionalElements.descriptionSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link summary':
                await this.assistancesEmergency.additionalElements.linkSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header location':
                await this.assistancesEmergencyChange.additionalElements.headerLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input location':
                await this.assistancesEmergencyChange.additionalElements.inputLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept new location':
                await this.waitForElementsExist(this.assistancesEmergencyChange.additionalElements.acceptNewLocation);
                await (await this.assistancesEmergencyChange.additionalElements.acceptNewLocation
                    .elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ilustration success':
                await this.successModalAssistances.additionalElements.icontypeSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title success':
                await this.successModalAssistances.additionalElements.titleSuccessModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description success':
                await this.successModalAssistances.additionalElements.subtitleSuccessModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress timer':
                await this.successModalAssistances.additionalElements.progressTimer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call bbva line assistances':
                await this.successModalAssistances.additionalElements.callBbvaLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view policy assistances':
                await (await this.successModalAssistances.additionalElements.buttonsRowAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share policy assistances':
                await (await this.successModalAssistances.additionalElements.buttonsRowAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress modal icon':
                await this.progressModalAssistances.additionalElements.iconModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress modal title':
                await this.waitForElementsExist(this.progressModalAssistances.additionalElements.titleAndDescriptionModal);
                await (await this.progressModalAssistances.additionalElements.titleAndDescriptionModal.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress modal description':
                await this.waitForElementsExist(this.progressModalAssistances.additionalElements.titleAndDescriptionModal);
                await (await this.progressModalAssistances.additionalElements.titleAndDescriptionModal.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress modal button':
                await this.progressModalAssistances.additionalElements.buttonModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header rcv':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.header);
                await (await this.emergencyVehicleCrashReports.additionalElements.header.scrollIntoView({block: 'start', behavior: 'smooth'})).waitForEnabled({timeout: config.wait.M});
                break;
            case 'icon faqs rcv':
                await this.emergencyVehicleCrashReports.additionalElements.iconFaqs.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon close rcv':
                await this.emergencyVehicleCrashReports.additionalElements.closeCrash.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step rcv':
                await this.emergencyVehicleCrashReports.additionalElements.titleStepOneVc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static rcv':
                await this.emergencyVehicleCrashReports.additionalElements.mapStatic.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static text':
                await this.emergencyVehicleCrashReports.additionalElements.mapStaticText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location rcv':
                await this.emergencyVehicleCrashReports.additionalElements.changeLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept location rcv':
                await this.emergencyVehicleCrashReports.additionalElements.acceptLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step two':
                await this.emergencyVehicleCrashReports.additionalElements.titleStepTwoVc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'question one ambulance needed':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.questionsForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.questionsForm.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option question one no':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.radioForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.radioForm.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option question one yes':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.radioForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.radioForm.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'question two vehicle can run':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.questionsForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.questionsForm.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option question two no':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.radioForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.radioForm.elements())
                    .value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option question two yes':
                await this.waitForElementsExist(this.emergencyVehicleCrashReports.additionalElements.radioForm);
                await (await this.emergencyVehicleCrashReports.additionalElements.radioForm.elements())
                    .value[3].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept services rcv':
                await this.emergencyVehicleCrashReports.additionalElements.acceptServices.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept report rcv':
                await this.emergencyVehicleCrashReports.additionalElements.acceptReport.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description summary rcv':
                await this.emergencyVehicleCrashReports.additionalElements.descriptionSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link summary rcv':
                await this.emergencyVehicleCrashReports.additionalElements.linkSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'heading collapsed step one':
                await this.emergencyVehicleCrashReports.additionalElements.headingCollapsedStepOne.waitForExist({timeout: config.wait.M});
                break;
            case 'link collapsed step one':
                await this.emergencyVehicleCrashReports.additionalElements.linkCollapsedStepOne.waitForExist({timeout: config.wait.M});
                break;
            case 'content collapsed step one':
                await this.emergencyVehicleCrashReports.additionalElements.contentCollapsedStepOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'heading collapsed step two':
                await this.emergencyVehicleCrashReports.additionalElements.headingCollapsedStepTwo.waitForExist({timeout: config.wait.M});
                break;
            case 'link collapsed step two':
                await this.emergencyVehicleCrashReports.additionalElements.linkCollapsedStepTwo.waitForExist({timeout: config.wait.M});
                break;
            case 'content collapsed step two':
                await this.emergencyVehicleCrashReports.additionalElements.contentCollapsedStepTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header in progress':
                await this.crashReportsModalInProgress.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon close in progress':
                await this.crashReportsModalInProgress.additionalElements.closeHeaderIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error type in progress':
                await this.crashReportsModalInProgress.additionalElements.iconTypeError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title in progress':
                await this.waitForElementsExist(this.crashReportsModalInProgress.additionalElements.titleSubtitleInProgressModal);
                await (await this.crashReportsModalInProgress.additionalElements.titleSubtitleInProgressModal.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description in progress':
                await this.waitForElementsExist(this.crashReportsModalInProgress.additionalElements.titleSubtitleInProgressModal);
                await (await this.crashReportsModalInProgress.additionalElements.titleSubtitleInProgressModal.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call line in progress':
                await this.crashReportsModalInProgress.additionalElements.callBtnLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel in progress':
                await this.crashReportsModalInProgress.additionalElements.cancelBtnCrash.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header success rcv':
                await (await this.crashReportsModalSuccess.additionalElements.header.scrollIntoView({block: 'nearest'})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close header icon':
                await this.crashReportsModalSuccess.additionalElements.closeHeaderIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon type success rcv':
                await this.crashReportsModalSuccess.additionalElements.iconTypeSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title success rcv':
                await this.waitForElementsExist(this.crashReportsModalSuccess.additionalElements.titleSubtitleSuccessModal);
                await (await this.crashReportsModalSuccess.additionalElements.titleSubtitleSuccessModal.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description success rcv':
                await this.waitForElementsExist(this.crashReportsModalSuccess.additionalElements.titleSubtitleSuccessModal);
                await (await this.crashReportsModalSuccess.additionalElements.titleSubtitleSuccessModal.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date success rcv':
                await this.crashReportsModalSuccess.additionalElements.dateSuccessModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress timer rcv':
                await this.crashReportsModalSuccess.additionalElements.progressTimer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call bbva line':
                await this.crashReportsModalSuccess.additionalElements.callBbvaLine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view policy crash':
                await (await this.crashReportsModalSuccess.additionalElements.buttonsRowAction.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share policy crash':
                await (await this.crashReportsModalSuccess.additionalElements.buttonsRowAction.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subheader glass':
                await this.glassSuccessReports.additionalElements.headerCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'report identifier glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'brand glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'policy glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[3].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date of incident glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[4].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deductible glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[5].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'location detail glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.listItem);
                await (await this.glassSuccessReports.additionalElements.listItem.elements())
                    .value[6].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification glass':
                await this.waitForElementsExist(this.glassSuccessReports.additionalElements.notificationMessage);
                await (await this.glassSuccessReports.additionalElements.notificationMessage.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share glass':
                await this.glassSuccessReports.additionalElements.share.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn confirmation glass':
                await (await this.glassMultistepReports.additionalElements.confirmation.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'resume confirmation glass':
                await (await this.glassMultistepReports.additionalElements.confirmationText.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'notice of privacy glass':
                await (await this.glassMultistepReports.additionalElements.noticePrivacy.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'damage title glass':
                await this.glassMultistepReports.additionalElements.glassesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'location title glass':
                await this.glassMultistepReports.additionalElements.locationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static glass':
                await this.glassMultistepReports.additionalElements.mapStatic.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'map static description glass':
                await this.glassMultistepReports.additionalElements.mapStaticDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change location glass':
                await this.glassMultistepReports.additionalElements.changeLocationLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification location glass':
                await this.glassMultistepReports.additionalElements.notificationLocation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'windshield glass': case 'front fin': case 'rear fin':
                await this.glassMultistepReports.additionalElements.glasses.specifySelector({placeholder: '__INDEX__', value: 0 }).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date title glass':
                await this.glassMultistepReports.additionalElements.accidentDateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date input description glass':
                await this.glassMultistepReports.additionalElements.accidentInputDescription.waitForClickable({timeout: config.wait.L});
                break;
            case 'date notification glass':
                await this.glassMultistepReports.additionalElements.accidentNotification.waitForClickable({timeout: config.wait.L});
                break;
            case 'date continue glass':
                await this.glassMultistepReports.additionalElements.accidentDateContinue.waitForClickable({timeout: config.wait.L});
                break;
            case 'radio group glass':
                await this.glassMultistepReports.additionalElements.glassesRadioGroup.waitForClickable({timeout: config.wait.L});
                break;
            case 'radio group location glass':
                await this.glassMultistepReports.additionalElements.radioGroupLocation.waitForClickable({timeout: config.wait.L});
                break;
            case 'description public limited company':
                await this.waitForElementsExist(this.glassGenericModal.additionalElements.description);
                await (await this.glassGenericModal.additionalElements.description.elements())
                    .value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description privacy notice':
                await this.waitForElementsExist(this.glassPrivacyNoticeModal.description);
                await (await this.glassPrivacyNoticeModal.description.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header generic glass':
                await this.glassPrivacyNoticeModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon error modal':
                await this.crashModalErrorOperation.additionalElements.iconError.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title error modal':
                await this.crashModalErrorOperation.additionalElements.titleError.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button call modal':
                await this.crashModalErrorOperation.additionalElements.buttonCall.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button exit modal':
                await this.crashModalErrorOperation.additionalElements.buttonExit.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button exit half modal':
                await this.crashReportsModalToCallLine.additionalElements.btnClose.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon information modal':
                await this.crashReportsModalToCallLine.additionalElements.iconInformation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal call bbva':
                await this.crashReportsModalToCallLine.additionalElements.titleModalCallBbva.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'timer modal call bbva':
                await this.crashReportsModalToCallLine.additionalElements.timerModalCallBbva.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'subtitle modal call bbva':
                await this.crashReportsModalToCallLine.additionalElements.subtitleModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: `${item}`, args: arguments[0]});
        }
    }

    async _onInteraction(element, index) {
        switch (element) {
            case 'check':
                await (await (await this.assistancesEmergency.additionalElements.checksAssistances.elements())
                    .value[index].waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'button first step':
                await (await (await this.assistancesEmergency.additionalElements.continueBtn
                    .waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'link change location':
                await (await this.assistancesEmergency.additionalElements.changeLocation
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                await (await (await this.assistancesEmergencyChange.additionalElements.inputLocation
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .setValue({value: global.user?.emergencies?.vehicle?.assistances?.data?.address ?? ''});
                await (await this.assistancesEmergencyChange.additionalElements.mapFirstSuggestion.waitForClickable()).click();
                await (await this.assistancesEmergencyChange.additionalElements.acceptNewLocation
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'button accept location':
                await (await this.assistancesEmergency.additionalElements.acceptLocation
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'button create report':
                await (await (await (await this.assistancesEmergency.additionalElements.acceptReport)
                    .waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'button icon rigth':
                await (await (await this.assistancesEmergency.additionalElements.secondaryBtn.waitForClickable({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .click();
                break;
            case 'button link':
                await (await (await this.listLink.elements())
                    .value[index].waitForClickable({timeout: config.wait.M}))
                    .click();
                await (await this.closeFaqs.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close assists':
                await (await this.assistancesEmergency.additionalElements.primaryBtn.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.exitAssistances.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${element} is not a valid element`);
        }
    }

    async accessToStole() {
        await (await this.optionStoleCard.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async accessToRejected() {
        await (await this.optionRejectedCard.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async accessToEmergency(typeProduct) {
        if (typeProduct === 'vehicle') {
            typeProduct= (global.user?.emergencies?.vehicle?.menuOption ?? 'emergency-reports-mx-heading-insurance' );
        }
        await (await this.cardsPageSection.specifySelector({placeholder: '__DATA_HEADING__', value: typeProduct})
            .waitForClickable({timeout: config.wait.XL}))
            .click({useActions: true});
    }

    async accessToEmergencyMenu(subProduct) {
        await this.cardsPageMenu.specifySelector({placeholder:'__DATA_HEADING__', value: subProduct}).waitForClickable({timeout: config.wait.M});
        await this.cardsPageMenu.specifySelector({placeholder:'__DATA_HEADING__', value: subProduct}).click({useActions: true});

        if (subProduct === 'Reportar robo de vehículo') {
            await this._setGeolocationData(this.vehicleTheftWidget);
        }

        if (subProduct === 'Reportar daño de cristales') {
            await this._setGeolocationData(this.vehicleGlassFeature);
        }
    }

    async accessToFaqs() {
        await (await this.bbvaHeaderMainMenu.btnHelp.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async changeVehicle() {
        await (await this.changePolicy.waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async changeMotorcycle() {
        await (await this.changePolicy.waitForClickable({timeout: config.wait.M}))
            .click();

        const selectedMotorcycle = await this.modalChangeVehicle.additionalElements.radiogroup.elementByText({ text: 'Bajaj Avenger', timeout: config.wait.S });
        await selectedMotorcycle.scrollIntoView({block: 'center', behavior: 'smooth'});
        await selectedMotorcycle.click();
        await this.modalChangeVehicle.acceptBtn.waitForEnabled({timeout: config.wait.L});
        await this.modalChangeVehicle.acceptBtn.scrollIntoView({block: 'center', behavior: 'smooth'});
        await this.modalChangeVehicle.acceptBtn.click();

    }

    async accessToOpportunities() {
        await (await this.modalErrorReports.cancelBtn
            .waitForClickable({timeout: config.wait.M})).click();
    }

    async onPressQuestion({ questions }) {
        switch (questions) {
            case 'first question':
                await this.faqsModal.firstQuestion.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.firstQuestion.waitForAnimation({ timeout: config.wait.M });
                await this.faqsModal.firstQuestion.waitForClickable({ timeout: config.wait.M });
                await this.faqsModal.firstQuestion.click();
                break;
            case 'second question':
                await this.faqsModal.secondQuestion.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.secondQuestion.waitForAnimation({ timeout: config.wait.M });
                await this.faqsModal.secondQuestion.waitForClickable({ timeout: config.wait.M });
                await this.faqsModal.secondQuestion.click();
                break;
            case 'third question':
                await this.faqsModal.thirdQuestion.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.thirdQuestion.waitForAnimation({ timeout: config.wait.M });
                await this.faqsModal.thirdQuestion.waitForClickable({ timeout: config.wait.M });
                await this.faqsModal.thirdQuestion.click();
                break;
            case 'fourth question':
                await this.faqsModal.fourthQuestion.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.fourthQuestion.waitForAnimation({ timeout: config.wait.M });
                await this.faqsModal.fourthQuestion.waitForClickable({ timeout: config.wait.M });
                await this.faqsModal.fourthQuestion.click();
                break;
            case 'fifth question':
                await this.faqsModal.fifthQuestion.waitForDisplayed({ timeout: config.wait.M });
                await this.faqsModal.fifthQuestion.waitForAnimation({ timeout: config.wait.M });
                await this.faqsModal.fifthQuestion.waitForClickable({ timeout: config.wait.M });
                await this.faqsModal.fifthQuestion.click();
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: `${questions}`, args: arguments[0] });
        }
    }

    async confirmAction(confirmation) {
        switch (confirmation) {
            case 'view policy assists':
                await (await (await this.successModalAssistances.additionalElements.buttonsRowAction.waitForEnabled({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'call assistance in success screen':
                await this.successModalAssistances.additionalElements.timerCount.waitForText({ text: '0:00' });
                await (await (await this.successModalAssistances.additionalElements.callBbvaLine.waitForEnabled({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'call assistance in progress screen':
                await (await (await this.progressModalAssistances.additionalElements.buttonModal.waitForEnabled({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept location':
                await this._onInteractionCrash('click on element', 'acceptLocation');
                break;
            case 'change address':
                await this._onInteractionCrash('click on element', 'changeLocation');
                break;
            case 'accept services':
                await this._onInteractionCrash('select option service', 0);
                await this._onInteractionCrash('select option service', 2);
                await this._onInteractionCrash('click on element', 'acceptServices');
                break;
            case 'report crash':
                await this._onInteractionCrash('click on element', 'acceptReport');
                break;
            case 'call crash in success screen':
                await (await (await this.crashReportsModalSuccess.additionalElements.callBbvaLine.waitForEnabled({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.L})).click();
                await (await this.crashReportsModalToCallLine.additionalElements.btnCallBBVA.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'accesses to emergency line':
                await (await (await this.crashReportsModalSuccess.additionalElements.callBbvaLine.waitForEnabled({ timeout: config.wait.L }))
                    .waitForClickable({ timeout: config.wait.L })).click();
                break;
            case 'view policy crash':
                await (await (await this.crashReportsModalSuccess.additionalElements.buttonsRowAction.waitForEnabled({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'select date of incident':
                await this.onInteractionGlasses('date step');
                break;
            default:
                throw new Error(`${confirmation} is not a valid option`);
        }
    }

    async confirmOptionTheft(option) {
        switch (option) {
            case 'create report':
                await (await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForClickable({timeout: config.wait.M})).click();
                await (await this.locationVehicleTheftReports.additionalElements.reportBtnVt.waitForEnabled({timeout: config.wait.M})).click();
                break;
            case 'accept change geolocation':
                await this.confirmOptionTheft('change geolocation');
                await (await this.changeLocationVehicleTheftReports.additionalElements.predictiveInputVt.waitForDisplayed({timeout: config.wait.M})).setValue({value: 'Palacio de los deportes'});
                await (await this.changeLocationVehicleTheftReports.additionalElements.suggestionsInput.waitForClickable({timeout: config.wait.M})).click();
                await this.changeLocationVehicleTheftReports.additionalElements.acceptChangeLocation.scrollIntoView({block: 'start', behavior: 'smooth'});
                await (await this.changeLocationVehicleTheftReports.additionalElements.acceptChangeLocation.waitForEnabled({timeout: config.wait.M})).click();
                await (await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForEnabled({timeout: config.wait.M})).click();
                break;
            case 'open privacy notice':
                await (await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForClickable({timeout: config.wait.M})).click();
                await (await this.locationVehicleTheftReports.additionalElements.noticePrivacylink.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'modify report in summary':
                await (await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForClickable({timeout: config.wait.M})).click();
                await (await this.locationVehicleTheftReports.additionalElements.editStepOneBtnVt.waitForEnabled({timeout: config.wait.M})).click();
                break;
            case 'close faqs':
                await (await this.locationVehicleTheftReports.additionalElements.faqsVt.waitForClickable({timeout: config.wait.M})).click();
                await (await (await this.faqAlreadyReport.elements()).value[2]
                    .waitForClickable({timeout: config.wait.M})).click();
                await (await (await this.closeFaqsDetail
                    .waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                await (await (await this.faqClose
                    .waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeput: config.wait.M})).click();
                break;
            case 'close middle modal':
                await (await this.locationVehicleTheftReports.additionalElements.continueBtnVt.waitForClickable({timeout: config.wait.M})).click();
                await this.confirmOptionTheft('close flow theft');
                await (await this.middleModalTheft.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close flow theft':
                await (await (await this.locationVehicleTheftReports.additionalElements.exitButtonVt.elements()).value[0]
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'call detected theft':
                await this.confirmOptionTheft('create report');
                await (await this.detectedVehicleTheftReports.additionalElements.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'policy success theft':
                await this.confirmOptionTheft('create report');
                await (await this.successVehicleTheftReports.additionalElements.operativeVt.specifySelector({
                    placeholder: '__INDEX__',
                    value: 1
                }).waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'change geolocation':
                await (await this.locationVehicleTheftReports.additionalElements.changeLocationBtnVt.waitForEnabled({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async confirmOptionAssistance(option, checkMoreThanOneAssistance = false) {
        switch (option) {
            case 'all assists':
                await this._onInteraction('check', 0);
                await this._onInteraction('check', 1);
                await this._onInteraction('check', 2);
                await this._onInteraction('button first step');
                break;
            case 'change location':
                if (checkMoreThanOneAssistance) {
                    await this._onInteraction('check', 1);
                    await this._onInteraction('check', 2);
                } else {
                    await this._onInteraction('check', 0);
                }
                await this._onInteraction('button first step');
                await this._onInteraction('link change location');
                break;
            case 'accept change location':
                await this.confirmOptionAssistance('change location', true);
                await this._onInteraction('button accept location');
                break;
            case 'accept location':
                await this._onInteraction('check', 0);
                await this._onInteraction('button first step');
                await this._onInteraction('button accept location');
                break;
            case 'create report':
                await this._onInteraction('check', 1);
                await this._onInteraction('check', 2);
                await this._onInteraction('button first step');
                await this._onInteraction('button accept location');
                await this._onInteraction('button create report');
                break;
            case 'help faqs':
                await this._onInteraction('button icon rigth', 1);
                await (await this.backHelpFaqs
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close flow assistances':
                await (await this.assistancesEmergency.additionalElements.primaryBtn.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'close flow middle assistances':
                await this._onInteraction('check', 1);
                await this._onInteraction('check', 2);
                await (await this.assistancesEmergency.additionalElements.primaryBtn.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.exitMiddleModalAssists.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async confirmOptionCrane(option) {
        switch (option) {
            case 'create report':
                await this._createReport();
                break;
            case 'accept change geolocation':
                await (await this.emergencyCraneVehicleReports.additionalElements.changeGeolocation.waitForClickable({timeout: config.wait.XL})).click();
                await (await (await this.emergencyCraneChangeGeolocation.additionalElements.inputChangeLocation
                    .elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .setValue({value: 'Palacio de los deportes'});
                await (await (await this.emergencyCraneChangeGeolocation.additionalElements.acceptChangeLocation.elements()).value[1]
                    .waitForClickable({timeout: config.wait.M})).click();
                await (await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'change geolocation':
                await (await this.emergencyCraneVehicleReports.additionalElements.changeGeolocation.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close faqs':
                await (await this.emergencyCraneVehicleReports.additionalElements.iconFaqs.waitForDisplayed({timeout: config.wait.M})).click();
                await (await (await this.questionHelp.elements()).value[4]
                    .waitForClickable({timeout: config.wait.M})).click();
                await (await (await this.closeDetailFaqs).waitForDisplayed({timeout: config.wait.M})).click();
                await (await (await this.backFirstStep).waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'close middle modal':
                await (await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.waitForDisplayed({timeout: config.wait.L})).click();
                await (await this.emergencyCraneVehicleReports.additionalElements.closeCrane.waitForDisplayed({ timeout: config.wait.M })).click();
                await (await this.exitMiddleModal.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close crane':
                await (await this.emergencyCraneVehicleReports.additionalElements.closeCrane.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'call success crane':
                await this._createReport();
                await (await this.successOrAlreadyCraneReport.additionalElements.callBbvaLineSuccess.waitForDisplayed({ timeout: config.wait.M })).click();
                await (await this.craneReportsModalToCallLine.additionalElements.btnCallBBVA.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'view policy crane':
                await this._createReport();
                await (await (await this.successOrAlreadyCraneReport.additionalElements.actionsPolicy
                    .specifySelector({placeholder: '__INDEX__', value: 1}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'call progress crane':
                await this._createReport();
                await (await (await this.alreadyCraneReport.additionalElements.callBbvaLineAlready
                    .scrollIntoView({block: 'end'}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'modify location from summary':
                await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.waitForDisplayed({timeout: config.wait.L});
                await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.click();
                await this.emergencyCraneVehicleReports.additionalElements.modifyStepOne.waitForEnabled({timeout: config.wait.M});
                await this.emergencyCraneVehicleReports.additionalElements.modifyStepOne.click();
                break;
            default:
                throw new Error(`${option} is not a valid crane option`);
        }
    }

    async confirmOptionCrash(option) {
        switch (option) {
            case 'create report':
                await this._onInteractionCrash('fill steps flow');
                await this.emergencyVehicleCrashReports.additionalElements.titleStepOneVc
                    .waitForAnimation({interval: config.wait.XS});
                await this._onInteractionCrash('click on element', 'acceptReport');
                await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.S});
                if (await this.crashReportsModalInProgress.additionalElements.container.waitForExist({failOnError: false})) {
                    await (await (await this.crashReportsModalInProgress.additionalElements.cancelBtnCrash
                        .waitForDisplayed({timeout: config.wait.M}))
                        .waitForAnimation({timeout: config.wait.XS}))
                        .scrollIntoView({block: 'end'});
                }
                break;
            case 'accept change geolocation':
                await this._onInteractionCrash('change location modal');
                await this._onInteractionCrash('click on element', 'acceptLocation');
                break;
            case 'change geolocation':
                await this._onInteractionCrash('click on element', 'acceptLocation');
                await this._onInteractionCrash('click on element edit', 'linkCollapsedStepOne');
                await this._onInteractionCrash('change location modal');
                await this._onInteractionCrash('click on element', 'acceptLocation');
                break;
            case 'change selection services':
                await this._onInteractionCrash('fill steps flow');
                await this._onInteractionCrash('click on element', 'linkCollapsedStepTwo');
                await this._onInteractionCrash('select option service', 1);
                await this._onInteractionCrash('click on element', 'acceptServices');
                break;
            case 'privacy notice':
                await this._onInteractionCrash('fill steps flow');
                await this._onInteractionCrash('click on element', 'linkSummary');
                await (await this.exitBtnNoticePrivacy.waitForClickable({timeout: config.wait.M})).click({forceScroll: false});
                break;
            case 'view policy':
                await this._onInteractionCrash('fill steps flow');
                await this._onInteractionCrash('click on element', 'acceptReport');
                await this.crashReportsModalSuccess.additionalElements.buttonsRowAction.waitForDisplayed({timeout: config.wait.M});
                await (await (await this.crashReportsModalSuccess.additionalElements.buttonsRowAction.waitForAnimation({timeout: config.wait.L}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close faqs':
                await this._onInteractionCrash('click on element', 'iconFaqs');
                await (await (await this.faqAlreadyReportCrash.elements()).value[2]
                    .waitForClickable({timeout: config.wait.M})).click();
                await (await this.faqCloseCrash.waitForClickable({timeout: config.wait.M})).click();
                await (await this.faqsCloseMenu.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close middle modal':
                await this._onInteractionCrash('click on element', 'acceptLocation');
                await this._onInteractionCrash('click on element', 'closeCrash');
                await (await this.continueMiddleModalCrash.waitForClickable({timeout: config.wait.M})).click();
                await this._onInteractionCrash('click on element', 'closeCrash');
                await (await this.exitMiddleModalCrash.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close flow crash':
                await this._onInteractionCrash('click on element', 'closeCrash');
                break;
            default:
                throw new Error(`${option} is not a valid crash option`);
        }
    }

    async fillDate(input) {
        const startDate = moment().format('YYYY-MM-DD');
        await input.execute({
            script: (value) => {
                this.selectedDate = value;
            },
            args: [startDate],
        });
    }

    async confirmOptionGlass(option) {
        switch (option) {
            case 'date':
                await this.onInteractionGlasses('date step');
                break;
            case 'damaged glass':
                await this.onInteractionGlasses('date step');
                await this.onInteractionGlasses('damage glasses step', 'INSURANCE_SUPPLIERS');
                break;
            case 'location':
                await this.confirmOptionGlass('damaged glass');
                await this.onInteractionGlasses('continue car glasses');
                break;
            case 'change location':
                await this.confirmOptionGlass('location');
                await this.onInteractionGlasses('location modal');
                break;
            case 'create report':
                await this.confirmOptionGlass('resume');
                await this.onInteractionGlasses('confirmation');
                break;
            case 'call in progress':
                await this.confirmOptionGlass('create report');
                await (await this.glassGenericModal.additionalElements.callBtnLine.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'call in communication':
                await this.confirmOptionGlass('location');
                for (let x = 0; x < 4; x++) {
                    await this.retryModal();
                }
                await (await this.glassGenericModal.additionalElements.callBtnLine.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'exit':
                await this.onInteractionGlasses('click exit');
                break;
            case 'exit modal':
                await this.confirmOptionGlass('selected insurance');
                await this.confirmOptionGlass('exit');
                await this.onInteractionGlasses('click exit modal');
                break;
            case 'exit summary':
                await this.confirmOptionGlass('resume');
                await this.confirmOptionGlass('exit');
                await this.onInteractionGlasses('click exit modal');
                break;
            case 'selected insurance':
                await this.onInteractionGlasses('date step');
                await this.onInteractionGlasses('damage glasses step', 'INSURANCE_SUPPLIERS');
                await this.onInteractionGlasses('continue car glasses');
                await this.onInteractionGlasses('continue location');
                break;
            case 'privacy notice':
                await this.confirmOptionGlass('selected insurance');
                await this.onInteractionGlasses('click notice of privacy');
                break;
            case 'resume':
                await this.onInteractionGlasses('date step');
                await this.onInteractionGlasses('damage glasses step', 'PERSONAL_SUPPLIERS');
                await this.onInteractionGlasses('location step');
                break;
            case 'two crystals':
                await this.onInteractionGlasses('date step');
                await this.onInteractionGlasses('selected top');
                await this.onInteractionGlasses('selected view', 'left');
                await this.onInteractionGlasses('selected crystal');
                break;
            case 'top': case 'left': case 'right':
                await this.onInteractionGlasses('date step');
                await this.onInteractionGlasses('selected top');
                if (['left', 'right'].includes(option)) {
                    await this.onInteractionGlasses('selected view', option);
                }
                break;
            case 'edit accident date step':
                await this.confirmOptionGlass('selected insurance');
                await this.onInteractionGlasses('click accident date edit');
                break;
            case 'edit damaged glass step':
                await this.confirmOptionGlass('selected insurance');
                await this.onInteractionGlasses('click damaged glass edit');
                break;
            case 'edit location and glassware step':
                await this.confirmOptionGlass('resume');
                await this.onInteractionGlasses('click location edit');
                break;
            case 'edit location step':
                await this.confirmOptionGlass('selected insurance');
                await this.onInteractionGlasses('click location edit');
                break;
            default:
                throw new Error(`${option} is not a valid glass option`);
        }
    }

    async onInteractionGlasses(element, value = '') {
        switch(element) {
            case 'date step':
                await this.glassMultistepReports.additionalElements.accidentDateTitle.waitForDisplayed({timeout: config.wait.M});
                await this.fillDate(this.vehicleGlassFeature);
                break;
            case 'click exit':
                await (await this.glassMultistepReports.additionalElements.exit.waitForDisplayed({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'start'}});
                break;
            case 'click exit modal':
                await (await this.glassGenericModal.acceptBtn.waitForDisplayed({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'damage glasses step':
                await (await this.glassMultistepReports.additionalElements.accidentDateContinue.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                await this.glassMultistepReports.additionalElements.glassesTitle.waitForDisplayed({timeout: config.wait.M});
                await this.glassMultistepReports.additionalElements.glasses.specifySelector({placeholder: '__INDEX__', value: 0 }).click();
                await this.glassMultistepReports.additionalElements.searchCrystals.specifySelector({placeholder: '__SELECTED__', value: value}).scrollIntoView();
                await this.glassMultistepReports.additionalElements.searchCrystals.specifySelector({placeholder: '__SELECTED__', value: value}).click();
                break;
            case 'location step':
                await this.onInteractionGlasses('continue car glasses');
                await this.glassMultistepReports.additionalElements.locationTitle.waitForDisplayed({timeout: config.wait.M});
                await (await this.glassMultistepReports.additionalElements.selectedCrystal.waitForDisplayed({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                await this.onInteractionGlasses('continue location');
                break;
            case 'confirmation':
                await (await this.glassMultistepReports.additionalElements.confirmation.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'selected top':
                await (await this.glassMultistepReports.additionalElements.accidentDateContinue.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                await this.glassMultistepReports.additionalElements.glassesTitle.waitForDisplayed({timeout: config.wait.M});
                await this.glassMultistepReports.additionalElements.glasses.specifySelector({placeholder: '__INDEX__', value: 0 }).click();
                break;
            case 'selected view':
                await this.glassMultistepReports.additionalElements.views.specifySelector({placeholder: '__SELECTED__', value: value }).click();
                break;
            case 'selected crystal':
                await this.glassMultistepReports.additionalElements.glasses.specifySelector({placeholder: '__INDEX__', value: 0 }).click();
                await this.onInteractionGlasses('continue car glasses');
                break;
            case 'continue location':
                await (await this.glassMultistepReports.additionalElements.locationContinue.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'continue car glasses':
                await (await this.glassMultistepReports.additionalElements.carGlassesContinue.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'click accident date edit':
                await (await this.glassMultistepReports.additionalElements.accidentDateEdit.waitForEnabled({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'click damaged glass edit':
                await (await this.glassMultistepReports.additionalElements.glassesEdit.waitForEnabled({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'start'}});
                break;
            case 'location modal':
                await (await this.glassMultistepReports.additionalElements.changeLocationLink.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'click location edit':
                await (await this.glassMultistepReports.additionalElements.locationEdit.waitForEnabled({timeout: config.wait.L}))
                    .click({useActions: false, scrollOptions: {block: 'start'}});
                break;
            case 'click notice of privacy':
                await (await this.glassMultistepReports.additionalElements.noticePrivacy.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${element} is not a valid element`);
        }
    }

    async _onInteractionCrash(element, index) {
        switch (element) {
            case 'click on element':
                await (await this.emergencyVehicleCrashReports.additionalElements[index].waitForClickable({timeout: config.wait.M}))
                    .click({forceScroll: false});
                break;
            case 'click on element edit':
                await this.emergencyVehicleCrashReports.additionalElements.containerEmergencyServices.waitForDisplayed({timeout: config.wait.M});
                await this.emergencyVehicleCrashReports.additionalElements.containerEmergencyServices.waitForAnimation({timeout: config.wait.L});
                await this.reopenStep(this.emergencyVehicleCrashReports.additionalElements[index]);
                break;
            case 'change location modal':
                await this._onInteractionCrash('click on element', 'changeLocation');
                await this.crashModalChangeLocation.additionalElements.inputLocation.scrollIntoView({timeout: config.wait.M});
                await this.crashModalChangeLocation.additionalElements.inputLocation.waitForDisplayed({timeout: config.wait.M});
                await this.crashModalChangeLocation.additionalElements.inputLocation.setValue('Palacio de los deportes');
                await this.crashModalChangeLocation.additionalElements.acceptNewLocation.waitForClickable({timeout: config.wait.M});
                await this.crashModalChangeLocation.additionalElements.acceptNewLocation.click();
                break;
            case 'select option service':
                await (await (await this.emergencyVehicleCrashReports.additionalElements.radioForm.elements()).value[index]
                    .waitForClickable({timeout: config.wait.M})).click({forceScroll: false});
                break;
            case 'fill steps flow':
                await this.emergencyVehicleCrashReports.additionalElements.titleStepOneVc
                    .waitForAnimation({interval: config.wait.XS});
                await this._onInteractionCrash('click on element', 'acceptLocation');
                await (await this.emergencyVehicleCrashReports.additionalElements.titleStepTwoVc
                    .scrollIntoView({block: 'start'})).waitForAnimation({interval: config.wait.XS});
                await this._onInteractionCrash('select option service', 0);
                await this._onInteractionCrash('select option service', 3);
                await this._onInteractionCrash('click on element', 'acceptServices');
                break;
            default:
                throw new Error(`${element} is not a valid element`);
        }
    }

    async closeFlow(option) {
        switch (option) {
            case 'reports':
                await this.titlePageSection.waitForDisplayed({timeout: config.wait.M});
                await (await (await this.bbvaHeaderMainSection.btnBack.elements()).value[0]
                    .waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async _setGeolocationData(widget) {
        await widget.execute({
            script: () => this.geoLocation = {lat: 19.422793, lng: -99.174800}
        });
    }

    async setCrashReport() {
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['losses_report_request_id', 'B00650973']
        });
    }

    async _createReport() {
        await (await this.emergencyCraneVehicleReports.additionalElements.acceptGeoLocation.waitForClickable({timeout: config.wait.L})).click();
        await (await this.emergencyCraneVehicleReports.additionalElements.acceptSummary.waitForClickable({timeout: config.wait.L})).click();
    }

    async analitycsSidebar(data) {
        await this._setAnalitycsSidebar('sidebarEmergency', data);
    }

    async retryModal() {
        await (await this.glassGenericModal.acceptBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async _setAnalitycsSidebar(method, data) {
        await this.managerAnalitycs.execute({
            script: (method, data) =>
                this[method](data),
            args: [method, data]
        });
    }

    async reopenStep(element) {
        await element.waitForExist({timeout: config.wait.L});
        await element.scrollIntoView({block: 'nearest'});
        await element.waitForEnabled({timeout: config.wait.L});
        await element.click();
    }
}

export default new EmergencyReports();
