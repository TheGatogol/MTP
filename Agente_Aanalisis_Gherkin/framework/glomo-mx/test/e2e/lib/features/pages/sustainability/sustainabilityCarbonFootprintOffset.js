import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('SustainabilityCarbonFootprintOffsetPage')
class SustainabilityCarbonFootprintOffset extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainabilityCarbonFootprintOffset[state="active"]',
            elements: {
                forestryProjectsScreen: {
                    properties: {
                        root: '[data-tag-name="sustainability-carbon-footprint-offset"]',
                    },
                    homeTitle: '[id="header-main-page"] .header [data-tag-name="bbva-type-text"]',
                    homeLinkContribute: '[aria-label="sustainability-carbon-footprint-offset-how-to-contribute"]',
                    homeLinkCarousel: '[text="sustainability-carbon-footprint-offset-get-to-know-the-projects"] [data-tag-name="bbva-type-link"]',
                    homeProjectsSection: '[data-tag-name="bbva-header-category"] [text="sustainability-carbon-footprint-offset-get-to-know-the-projects"]',
                    homeCarouselSlides: '[data-tag-name="sustainability-carbon-footprint-offset-carousel"] #carouselSlides',
                    homeButtonContribute: '.panel-button [data-tag-name="bbva-button-default"]',
                    linkHowToAportModal: '[aria-label="sustainability-carbon-footprint-offset-how-to-contribute"]',
                    openTransitionDetail: '[data-tag-name="sustainability-carbon-footprint-offset-carousel"] #carouselSlides [data-tag-name="sustainability-carbon-footprint-offset-project-card"] .card-content #MXCO2-00000001',
                    helpButton: '[data-tag-name="bbva-header-main"] [data-id="iconsRight"] [id="btn-faqs"]',
                    contributionsBtn: '[data-tag-name="bbva-header-category"] [aria-label="bbva-header-category-accessibility-text-help"]',
                    contributionsLink: '[data-tag-name="bbva-header-category"] [class="options-right"] [data-tag-name="bbva-type-link"]',
                    emissionsButton: 'div:nth-child(6) div:nth-child(__N__) bbva-type-link',
                    emissionsLink: '[aria-label="sustainability-carbon-footprint-offset-see-more"]',
                    actionsBtn: '.content-card:nth-of-type(4) [data-tag-name="bbva-type-link"][class="text-with-help-link"] ',
                    actionsLink: '[text="sustainability-carbon-footprint-offset-actions"] [class="link"]',
                    maximumEmitionsLink: '[message-title="sustainability-carbon-footprint-offset-reached-maximum-issues"] [data-tag-name="bbva-type-link"]',
                    estimateEmissionsLink: '[message-title="sustainability-carbon-footprint-offset-contribute-estimate-co-emissions"] [data-tag-name="bbva-type-link"]',
                    sustainabilityLandingLink: '[text="sustainability-carbon-footprint-offset-actions"] [data-tag-name="bbva-type-link"]',
                },
                digitalCardAlert: {
                    properties: {
                        root: 'sustainability-carbon-footprint-offset-digital-card-alert',
                    },
                    header: '.header',
                    closeBtn: '[class="modal-header"] [data-id="iconsRight"]',
                    title: '[class="modal-main"] [class="modal-container"] [class="modal-title"] [id="title-text"]',
                    content: '[class="modal-main"] [class="modal-container"] [id="helpModalContent"]',
                },
                errorModal: {
                    properties: {
                        root: 'sustainability-carbon-footprint-offset-modal-service-error',
                    },
                    header: '.header',
                    closeBtn: '[class="button-1"] [data-id="iconsRight"]',
                    title: '[class="modal-main"] [class="modal-container"] [class="modal-title"]',
                    content: '[class="modal-main"] [class="modal-container"] [id="helpModalContent"]',
                    icon: '[class="modal-main"] [class="modal-container"]',
                    defaultButton: '[class="slot-footer"] [class="footer-button"]',
                    exitLink: '[class="slot-footer"] [class="footer-button link"]',
                },
                errorMessage: {
                    properties: {
                        root: '[variant="error"]',
                    },
                    icon: '[class="title-icon"]',
                    content: '[data-tag-name="bbva-type-text"][class="title"]',
                    retryLink: '[data-tag-name="bbva-type-link"]',
                },
                contributionsList: {
                    properties: {
                        root: '[id="contributions-list"]',
                    },
                    header: '.header [id="heading"]',
                    backButton: '[id="btn-back"]',
                    contributionCardTitle: '[class="contribution-card"] [font-type="title-default"]',
                    contributionCardAmount: '[class="contribution-card"] [class="contribution-heading"] [data-tag-name="bbva-type-amount"]',
                    contributionCardDescription: '[class="contribution-description"] [data-tag-name="bbva-type-text"]',
                    date: '[data-tag-name="bbva-header-category"] [class="title-container"] [data-tag-name="bbva-core-heading"]',
                },
                contributionsDetail: {
                    properties: {
                        root: '[id="contribution-detail"]',
                    },
                    header: '.header [id="heading"]',
                    backButton: '[id="btn-back"]',
                    title: '[font-type="title-secondary"]',
                    amount: '[class="panel-process"] [data-tag-name="bbva-type-amount"]',
                    description: '[class="list-info-container"]',
                    date: '[data-tag-name="bbva-type-date"]',
                },
                tooltipModal: {
                    properties: {
                        root: '[close-label="sustainability-carbon-footprint-offset-faqs-header-close-text"]',
                    },
                    header: '[class="modal-header"] [class="button-1"] [id="heading"]',
                    closeBtn: '[class="modal-header"] [class="button-1"] [data-id="iconsRight"]',
                    title: '[class="modal-main"] [class="modal-container"] [class="modal-title"]',
                    content: '[class="modal-main"] [class="modal-container"] [id="helpModalContent"]',
                },
                steps: {
                    properties: {
                        root: '#multistep-modal [slot="slot-content"] [data-tag-name="bbva-expandable-multistep"]',
                    },
                    stepOneTitleProject: '[header="Proyecto"]',
                    stepOneTitle: '#step-1 .header #heading #currentStep',
                    stepOneTextSelectProject: '#step-1 [tag="p"] .text',
                    stepOneRadioButton: '#step-1 [class="card-list"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="project1"]',
                    stepOneContinueButton: '#step-1 [data-tag-name="bbva-button-default"]',
                    stepOneEditButton: '#step-1 [data-tag-name="bbva-type-link"]#editButton',
                    stepOneSeeMore: '#step-1 [class="card-list"] [data-tag-name="bbva-form-container"] [data-tag-name="bbva-type-link"]',
                    stepTwoTitleContribution: '[header="Aportación"]',
                    stepTwoTitle: '#step-2 .header #heading #currentStep',
                    stepTwoList: '#step-2 #forestry-aportation [data-tag-name="bbva-form-select"] #button',
                    stepTwoListSelected: '#step-2 #forestry-aportation [data-tag-name="bbva-form-select"] #button .content-text',
                    stepTwoContinueButton: '#step-2 #forestry-aportation [data-tag-name="bbva-button-default"].action',
                    stepTwoEditButton: '#step-2 [data-tag-name="bbva-type-link"]#editButton',
                    stepThreeEditButton: '#step-3 [data-tag-name="bbva-type-link"]#editButton',
                    stepThreeTitlePaymentMethod: '#step-3 .header #heading #headingLabel',
                    stepThreeTitle: '#step-3 .header #heading #currentStep',
                    stepThreeLinkSeeMore:'#step-3 .options-right [data-tag-name="bbva-type-link"]',
                    stepThreeDebitCard: '#step-3 [data-tag-name="sustainability-carbon-footprint-offset-modal-all-cards"] [data-tag-name="bbva-type-link"]:nth-of-type(1)',
                    stepThreeCreditCardWithPoints: '#step-3 [data-tag-name="sustainability-carbon-footprint-offset-modal-all-cards"] [data-tag-name="bbva-type-link"]:nth-of-type(4)',
                    stepFourEditButton: '#step-4 [data-tag-name="bbva-type-link"]#editButton',
                    stepFourTitleBbvaPoints: '[header="Puntos BBVA"]',
                    stepFourTitle: '#step-4 .header #heading #currentStep',
                    stepFourPaymentWithPoints: '#step-4 [data-tag-name="bbva-form-container"] [value="with-points"]',
                    stepFourPaymentWithCard: '#step-4 [data-tag-name="bbva-form-container"] [value="with-card"]',
                    stepFourContinueButton: '#step-4 [data-tag-name="bbva-button-default"]',
                    confirmStepAmountText: '[slot="confirmation"] .panel-summary > [data-tag-name="bbva-type-text"]:nth-of-type(1)',
                    stepFourPointsDetail: '#step-4 [id="section-payment"]',
                    confirmStepAmount: '[slot="confirmation"] .panel-summary [data-tag-name="bbva-type-amount"][amount="0"] span.sr-only',
                    confirmStepConfirmButton: '[slot="confirmation"] .panel-summary [data-tag-name="bbva-button-default"]',
                },
                allProjects: {
                    properties: {
                        root: '[text="sustainability-carbon-footprint-offset-all-projects"]',
                    },
                    header: '[class="modal-header"] [class="button-1"] [id="heading"]',
                    backBtn: '[id="btn-back"]',
                    title: '[class="modal-main"] [class="modal-container"] [class="modal-title"]',
                    content: '[class="modal-main"] [class="modal-container"] [id="helpModalContent"]',
                },
                transitionDetailCarouselProject: {
                    properties: {
                        root: '[data-tag-name="sustainability-carbon-footprint-offset-project-detail-page"].transition-project-detail [data-tag-name="bbva-transition-container"]',
                    },
                    transitionCarouselProjectDetailTitle: '[data-tag-name="bbva-header-main"] .header h1',
                    transitionHeaderBack: '[data-tag-name="bbva-header-main"] [data-id="iconsLeft"] #btn-back',
                    projectInformationCarouselDetail: '[data-tag-name="sustainability-carbon-footprint-offset-project-detail"] .project-detail-container [data-tag-name="bbva-badge-icon"]+[data-tag-name="bbva-type-text"]',
                    projectLocationCarouselDetail: '[data-tag-name="sustainability-carbon-footprint-offset-project-detail"] .project-detail-container [data-tag-name="bbva-badge-icon"] [data-tag-name="bbva-type-text"]',
                },
                contributeProject: {
                    properties: {
                        root: '#multistep-modal',
                    },
                    close: '[text="sustainability-carbon-footprint-offset-contribute-to-forestry-projects"] [id="btn-close"]',
                    firstOption: '#forestry-aportation [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]:nth-of-type(1)',
                    secondOption: '#forestry-aportation [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]:nth-of-type(2)',
                    thirdOption: '#forestry-aportation [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]:nth-of-type(3)',
                },
                projectDetail: {
                    properties: {
                        root: '[data-tag-name="sustainability-carbon-footprint-offset-project-detail-modal"] [data-tag-name="sustainability-carbon-footprint-offset-project-detail"] .project-detail-container',
                    },
                    name: '[data-tag-name="bbva-type-text"].project-name',
                    location: '[data-tag-name="bbva-badge-icon"] [data-tag-name="bbva-type-text"]',
                    information: '[data-tag-name="bbva-badge-icon"]+[data-tag-name="bbva-type-text"]',
                    informationBox: '[data-tag-name="bbva-notification-message"]',
                },
                faqs: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="sustainability-carbon-footprint-offset-faqs"]',
                        additionalElements: {
                            headerTitle: '#helpModalHeader #text h1',
                            closeHeaderList: '#helpModalHeader button#btn-close.icon',
                            contentTitle: '.content bbva-type-text h2',
                            contentText: '.detail-content [data-tag-name="bbva-type-text"]',
                        },
                    },
                ],
                listFaqs: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="sustainability-carbon-footprint-offset-faqs"]',
                        additionalElements: {
                            headerTitle: '#helpModalHeader #heading [data-tag-name="bbva-type-text"]',
                            headerClose: '#helpModalHeader #btn-close',
                            title: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                            linkProjectManagement: 'div:nth-child(2) [data-tag-name="bbva-type-link"]',
                            linkWhatIsMexico: 'div:nth-child(3) [data-tag-name="bbva-type-link"]',
                            linkHowToUsePoints: 'div:nth-child(4) [data-tag-name="bbva-type-link"]',
                            linkPaymentSecurity: 'div:nth-child(5) [data-tag-name="bbva-type-link"]',
                            linkNotContribute: 'div:nth-child(6) [data-tag-name="bbva-type-link"]',
                        },
                    },
                ],
                exitOperationModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="sustainability-carbon-footprint-offset-multistep"]',
                        modifiers: '[modal-type="caution"]',
                        additionalElements: {
                            headerTitle: '.modal-header #heading [data-tag-name="bbva-type-text"]',
                            headerExitButton: '.modal-header .right-group #btn-close',
                            contentOperation: '.modal-main .modal-container #helpModalContent .slot-content slot div',
                            buttonExit: '.modal-footer [class="footer-button"]',
                            linkContinue: '.modal-footer [class="footer-button link"]',
                        },
                    },
                ],
                informativeModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="sustainability-carbon-footprint-offset-modal-informative"]',
                        additionalElements: {
                            howToAportTitle: '.content .modal-header [data-tag-name="bbva-header-main"] .header h1',
                            buttonToClose: '#helpModalHeader #btn-close',
                            howToAportInformation: '[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-of-type(1)',
                            howToAportSecondInformation: '[slot="slot-content"] [data-tag-name="bbva-type-text"]:nth-of-type(2)',
                        },
                    },
                ],
                projectInformationModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="sustainability-carbon-footprint-offset-project-detail-modal"]',
                        additionalElements: {
                            title: '#helpModalHeader #heading',
                            exit: '#helpModalHeader #btn-close',
                        },
                    },
                ],
            },
            defaultSphericaElements: [
                'GlomoAlertManager',
            ],
            requiredElements: ['forestryProjectsScreen.helpButton', 'forestryProjectsScreen.homeTitle'],
        });
    }

    async accessToContributionProjects() {
        await this.forestryProjectsScreen.homeButtonContribute.waitForDisplayed();
        await this.forestryProjectsScreen.homeButtonContribute.click();
    }

    async paymentMethod() {
        await this.selectStepTwoList();
        await this.contributeProject.firstOption.waitForDisplayed({timeout: config.wait.M});
        await this.contributeProject.firstOption.click();
        await this.steps.stepTwoContinueButton.waitForDisplayed();
        await this.steps.stepTwoContinueButton.click();
    }

    async stepOneSelectProject(type) {
        switch (type) {
            case 'button disabled to continue':
                await this.steps.stepOneContinueButton.waitForDisabled();
                break;
            case 'button enabled to continue':
                await this.stepOneUserCanContinue();
                break;
            default:
                throw new Error(`The type "${type}" is not defined`);
        }
    }

    async stepOneUserCanContinue() {
        await this.steps.stepOneRadioButton.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepOneRadioButton.click();
        await this.steps.stepOneContinueButton.waitForEnabled();
    }

    async seeProjectDetail() {
        await this.forestryProjectsScreen.openTransitionDetail.waitForDisplayed();
        await this.forestryProjectsScreen.openTransitionDetail.click();
    }

    async seeProjectDetailStepOne() {
        await this.accessToContributionProjects();
        await this.steps.stepOneSeeMore.waitForDisplayed();
        await this.steps.stepOneSeeMore.click();
    }

    async selectStepTwoList() {
        await this.steps.stepTwoList.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepTwoList.click();
    }

    async updateContribution(contributionType) {
        switch (contributionType) {
            case 'choose the contribution':
                await this.selectStepTwoList();
                await this.contributeProject.firstOption.waitForDisplayed();
                await this.contributeProject.secondOption.waitForDisplayed();
                await this.contributeProject.thirdOption.waitForDisplayed();
                break;
            case 'selected contribution':
                await this.selectStepTwoList();
                await this.contributeProject.firstOption.waitForDisplayed();
                await this.contributeProject.firstOption.click();
                await this.steps.stepTwoList.waitForDisplayed();
                await this.steps.stepTwoListSelected.waitForDisplayed();
                await this.steps.stepTwoContinueButton.waitForEnabled();
                break;
            case 'does not select a contribution':
                await this.steps.stepTwoList.waitForDisplayed();
                await this.steps.stepTwoContinueButton.waitForDisabled();
                break;
            default:
                throw new Error(`The ${contributionType} is not defined`);
        }
    }

    async accessToContribution() {
        await this.accessToContributionProjects();
        await this.steps.stepOneRadioButton.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepOneRadioButton.click();
        await this.steps.stepOneContinueButton.waitForDisplayed();
        await this.steps.stepOneContinueButton.click();
        await this.steps.stepTwoTitle.waitForDisplayed({timeout: config.wait.M});
    }

    async accessToPaymentMethod() {
        await this.accessToContribution();
        await this.selectStepTwoList();
        await this.contributeProject.firstOption.waitForDisplayed({timeout: config.wait.M});
        await this.contributeProject.firstOption.click();
        await this.steps.stepTwoContinueButton.waitForDisplayed();
        await this.steps.stepTwoContinueButton.click();
    }

    async selectCreditCard() {
        await this.steps.stepThreeLinkSeeMore.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepThreeLinkSeeMore.click();
    }

    async selectPaymentMethod(step) {
        switch (step) {
            case 'step three':
                await this.steps.stepThreeTitle.waitForDisplayed();
                await this.selectCreditCard();
                break;
            case 'step four':
                await this.selectCreditCard();
                await this.steps.stepThreeCreditCardWithPoints.waitForDisplayed({timeout: config.wait.M});
                await this.steps.stepThreeCreditCardWithPoints.click();
                await this.steps.stepFourTitleBbvaPoints.waitForDisplayed();
                await this.steps.stepFourTitle.waitForDisplayed();
                await this.steps.stepFourPaymentWithCard.waitForDisplayed();
                await this.steps.stepFourPaymentWithPoints.waitForDisplayed();
                await this.steps.stepFourContinueButton.waitForDisabled();
                break;
            default:
                throw new Error(`The ${step} is not defined`);
        }
    }

    async selectsToPayWithPoints() {
        await this.accessToPaymentMethod();
        await this.selectCreditCard();
        await this.steps.stepThreeCreditCardWithPoints.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepThreeCreditCardWithPoints.click();
        await this.steps.stepFourPaymentWithPoints.waitForDisplayed();
        await this.steps.stepFourPaymentWithPoints.click();
    }

    async exitHowToContribute() {
        await this.informativeModal.additionalElements.buttonToClose.waitForDisplayed({timeout: config.wait.M});
        await this.informativeModal.additionalElements.buttonToClose.click();
    }

    async transferDetails() {
        await this.steps.stepFourContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepFourContinueButton.click();
    }

    async goBackFromCarouselDetail() {
        await this.transitionDetailCarouselProject.transitionHeaderBack.waitForDisplayed({timeout: config.wait.M});
        await this.transitionDetailCarouselProject.transitionHeaderBack.click();
    }

    async goBackProjectDetail() {
        await this.projectInformationModal.additionalElements.exit.waitForDisplayed({timeout: config.wait.M});
        await this.projectInformationModal.additionalElements.exit.click();
    }

    async howToContributeModal() {
        await this.forestryProjectsScreen.linkHowToAportModal.waitForDisplayed();
        await this.forestryProjectsScreen.linkHowToAportModal.click();
    }

    async accessToHelp() {
        await this.forestryProjectsScreen.helpButton.waitForDisplayed({timeout: config.wait.M});
        await this.forestryProjectsScreen.helpButton.click();
    }

    async accessToFaqProjectManagement() {
        await this.listFaqs.additionalElements.linkProjectManagement.waitForDisplayed();
        await this.listFaqs.additionalElements.linkProjectManagement.click();
    }

    async exitFaqHeader() {
        await this.waitForElementsExist(this.faqs.additionalElements.closeHeaderList, config.wait.M);
        await (await (await this.faqs.additionalElements.closeHeaderList.elements()).value[1].waitForClickable({timeout: config.wait.M})).click();
    }

    async accessToFaqWhatIsMexico() {
        await this.listFaqs.additionalElements.linkWhatIsMexico.waitForDisplayed();
        await this.listFaqs.additionalElements.linkWhatIsMexico.click();
    }

    async accessToFaqHowToUsePoints() {
        await this.listFaqs.additionalElements.linkHowToUsePoints.waitForDisplayed();
        await this.listFaqs.additionalElements.linkHowToUsePoints.click();
    }

    async accessToFaqPaymentSecurity() {
        await this.listFaqs.additionalElements.linkPaymentSecurity.waitForDisplayed();
        await this.listFaqs.additionalElements.linkPaymentSecurity.click();
    }

    async accessToFaqNotContribute() {
        await this.listFaqs.additionalElements.linkNotContribute.waitForDisplayed();
        await this.listFaqs.additionalElements.linkNotContribute.click();
    }

    async exitsWithoutData() {
        await this.contributeProject.close.waitForDisplayed();
        await this.contributeProject.close.click();
    }

    async exitsWarningModal() {
        await this.exitOperationModal.additionalElements.buttonExit.waitForDisplayed();
        await this.exitOperationModal.additionalElements.buttonExit.click();
    }

    async updateTheProjectSelected() {
        await this.waitForElementsExist(this.steps.stepOneEditButton, config.wait.M);
        await (await (await this.steps.stepOneEditButton.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
    }

    async selectProjectInStepOne() {
        await this.steps.stepOneRadioButton.waitForDisplayed();
        await this.steps.stepOneRadioButton.click();
    }

    async seeMoreInProjectCarousel() {
        await this.forestryProjectsScreen.homeLinkCarousel.waitForDisplayed();
        await this.forestryProjectsScreen.homeLinkCarousel.click();
    }

    async stepOneTitles() {
        await this.steps.stepOneTitleProject.waitForDisplayed();
        await this.steps.stepOneTitle.waitForDisplayed();
    }

    async contributionDetail() {
        await this.contributionsList.contributionCardTitle.waitForDisplayed({timeout: config.wait.M});
        await this.contributionsList.contributionCardTitle.click();
    }

    async returnFootprintOffsetSection() {
        await this.allProjects.backBtn.waitForDisplayed();
        await this.allProjects.backBtn.click();
    }

    async modifyAmount() {
        await this.waitForElementsExist(this.steps.stepTwoEditButton, config.wait.M);
        await (await (await this.steps.stepTwoEditButton.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        await this.selectStepTwoList();
        await this.contributeProject.secondOption.waitForDisplayed();
        await this.contributeProject.secondOption.click();
    }

    async modifyPaymentMethod() {
        await this.steps.stepThreeCreditCardWithPoints.waitForDisplayed();
        await this.steps.stepThreeCreditCardWithPoints.click();
        await this.waitForElementsExist(this.steps.stepThreeEditButton, config.wait.M);
        await (await (await this.steps.stepThreeEditButton.elements()).value[0].waitForClickable({timeout: config.wait.M})).click();
        await this.steps.stepThreeLinkSeeMore.waitForDisplayed({timeout: config.wait.L});
        await this.steps.stepThreeLinkSeeMore.click();
        await this.steps.stepThreeDebitCard.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepThreeDebitCard.click();
    }

    async modifyPaymentWithPoints() {
        await this.steps.stepFourPaymentWithPoints.scrollIntoView();
        await this.steps.stepFourPaymentWithPoints.waitForDisplayed({timeout: config.wait.M});
        await this.waitForElementsExist(this.steps.stepFourEditButton, config.wait.M);
        const editButton = (await this.steps.stepFourEditButton.elements()).value[0];
        await editButton.scrollIntoView();
        await editButton.waitForDisplayed({timeout: config.wait.M});
        await editButton.click({forceScroll: false});
        await this.steps.stepFourPaymentWithCard.waitForDisplayed();
        await this.steps.stepFourPaymentWithCard.click();
        await this.steps.stepFourContinueButton.waitForDisplayed({timeout: config.wait.M});
        await this.steps.stepFourContinueButton.click();
    }

    async actionsSeeMore() {
        await this.forestryProjectsScreen.actionsLink.waitForDisplayed({timeout: config.wait.M});
        await this.forestryProjectsScreen.actionsLink.click();
    }

    async emissionsSeeMore() {
        await this.forestryProjectsScreen.emissionsLink.waitForDisplayed({timeout: config.wait.M});
        await this.forestryProjectsScreen.emissionsLink.click();
    }

    async errorRetry(type) {
        switch (type) {
            case 'link':
                for (let i = 0; i < 3; i++) {
                    await (await (await this.errorMessage.retryLink).waitForDisplayed()).click();
                }
                break;
            case 'button':
                for (let i = 0; i < 3; i++) {
                    await (await (await this.errorModal.defaultButton).waitForDisplayed()).click();
                }
                break;
            default:
                throw new Error(`The ${type} is not defined`);
        }
    }

    async sustainabilityLanding() {
        await this.forestryProjectsScreen.sustainabilityLandingLink.waitForDisplayed({timeout: config.wait.M});
        await this.forestryProjectsScreen.sustainabilityLandingLink.click();
    }

    async projectModificationScenarios(scenario) {
        switch (scenario) {
            case 'radio button displayed':
                await this.stepOneTitles();
                await this.steps.stepOneRadioButton.waitForDisplayed();
                await this.steps.stepOneContinueButton.waitForEnabled();
                break;
            case 'radio button selected':
                await this.stepOneTitles();
                await this.steps.stepOneRadioButton.specifySelector({placeholder: 'aria-checked', value: 'true'});
                await this.steps.stepOneContinueButton.waitForEnabled();
                break;
            case 'step two displayed':
                await this.steps.stepOneContinueButton.click();
                await this.steps.stepTwoTitleContribution.waitForDisplayed();
                await this.steps.stepTwoTitle.waitForDisplayed();
                await this.steps.stepTwoContinueButton.waitForDisabled();
                break;
            default:
                throw new Error(`The ${scenario} is not defined`);
        }
    }

    async tooltipConsult(option) {
        switch (option) {
            case 'your contributions this year':
                await this.forestryProjectsScreen.contributionsBtn.waitForDisplayed();
                await this.forestryProjectsScreen.contributionsBtn.click();
                break;
            case 'emissions addressed':
                await (await (await this.forestryProjectsScreen.emissionsButton.specifySelector({placeholder: '__N__', value: 1})).waitForDisplayed()).click();
                break;
            case 'emissions this year':
                await (await (await this.forestryProjectsScreen.emissionsButton.specifySelector({placeholder: '__N__', value: 4})).waitForDisplayed()).click();
                break;
            case 'actions':
                await this.forestryProjectsScreen.actionsBtn.waitForDisplayed();
                await this.forestryProjectsScreen.actionsBtn.click();
                break;
            case 'estimate emissions':
                await this.forestryProjectsScreen.estimateEmissionsLink.waitForDisplayed();
                await this.forestryProjectsScreen.estimateEmissionsLink.click();
                break;
            case 'maximum emissions':
                await this.forestryProjectsScreen.maximumEmitionsLink.waitForDisplayed();
                await this.forestryProjectsScreen.maximumEmitionsLink.click();
                break;
            case 'contributions learn more':
                await this.forestryProjectsScreen.contributionsLink.waitForDisplayed();
                await this.forestryProjectsScreen.contributionsLink.click();
                break;
            case 'know the proyects':
                await this.forestryProjectsScreen.homeLinkCarousel.waitForDisplayed();
                await this.forestryProjectsScreen.homeLinkCarousel.click();
                break;
            default:
                throw new Error(`The type "${option}" is not defined`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title contribute to forestry projects':
                await this.forestryProjectsScreen.homeTitle.waitForDisplayed();
                break;
            case 'link how to contribute':
                await this.forestryProjectsScreen.homeLinkContribute.waitForDisplayed();
                break;
            case 'projects section':
                await this.forestryProjectsScreen.homeProjectsSection.waitForDisplayed();
                break;
            case 'projects carousel slides':
                await this.forestryProjectsScreen.homeCarouselSlides.waitForDisplayed();
                break;
            case 'button contribute to forestry projects':
                await this.forestryProjectsScreen.homeButtonContribute.waitForDisplayed();
                break;
            case 'index of step one':
                await this.steps.stepOneTitle.waitForDisplayed();
                break;
            case 'step one title project':
                await this.steps.stepOneTitleProject.waitForDisplayed();
                break;
            case 'step one text select project':
                await this.steps.stepOneTextSelectProject.waitForDisplayed();
                break;
            case 'step one radio button':
                await this.steps.stepOneRadioButton.waitForDisplayed();
                break;
            case 'step one continue button':
                await this.steps.stepOneContinueButton.waitForDisplayed();
                break;
            case 'step one edit button':
                await this.waitForElementsExist(this.steps.stepOneEditButton, config.wait.M);
                await (await this.steps.stepOneEditButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step two title contribution':
                await this.steps.stepTwoTitleContribution.waitForDisplayed();
                break;
            case 'index of step two':
                await this.steps.stepTwoTitle.waitForDisplayed();
                break;
            case 'step two continue button':
                await this.steps.stepTwoContinueButton.waitForDisplayed();
                break;
            case 'step two edit button':
                await this.waitForElementsExist(this.steps.stepTwoEditButton, config.wait.M);
                await (await this.steps.stepTwoEditButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step three payment title':
                await this.waitForElementsExist(this.steps.stepThreeTitlePaymentMethod, config.wait.M);
                await (await this.steps.stepThreeTitlePaymentMethod.elements()).value[0].scrollIntoView({block: 'center'});
                await (await this.steps.stepThreeTitlePaymentMethod.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step three edit button':
                await this.waitForElementsExist(this.steps.stepThreeEditButton, config.wait.M);
                await (await this.steps.stepThreeEditButton.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'step four bbva points title':
                await this.steps.stepFourTitleBbvaPoints.waitForDisplayed();
                break;
            case 'index of step four':
                await this.steps.stepFourTitle.waitForDisplayed();
                break;
            case 'step four continue button':
                await this.steps.stepFourContinueButton.waitForDisplayed();
                break;
            case 'confirm step amount text':
                await this.steps.confirmStepAmountText.waitForDisplayed();
                break;
            case 'confirm step amount':
                await this.steps.confirmStepAmount.waitForDisplayed();
                break;
            case 'confirm step button':
                await this.steps.confirmStepConfirmButton.waitForDisplayed();
                break;
            case 'project carousel detail header title':
                await this.transitionDetailCarouselProject.transitionCarouselProjectDetailTitle.waitForDisplayed();
                break;
            case 'project carousel detail header back':
                await this.transitionDetailCarouselProject.transitionHeaderBack.waitForDisplayed();
                break;
            case 'project carousel detail information':
                await this.transitionDetailCarouselProject.projectInformationCarouselDetail.waitForDisplayed();
                break;
            case 'project carousel detail location':
                await this.transitionDetailCarouselProject.projectLocationCarouselDetail.waitForDisplayed();
                break;
            case 'project modal step one title':
                await this.projectInformationModal.additionalElements.title.waitForDisplayed();
                break;
            case 'project modal step one exit':
                await this.projectInformationModal.additionalElements.exit.waitForDisplayed();
                break;
            case 'project modal step one name':
                await this.projectDetail.name.waitForDisplayed();
                break;
            case 'project modal step one location':
                await this.projectDetail.location.waitForDisplayed();
                break;
            case 'project modal step one information':
                await this.projectDetail.information.waitForDisplayed();
                break;
            case 'project modal step one information box':
                await this.projectDetail.informationBox.waitForDisplayed();
                break;
            case 'how to contribute modal title':
                await this.informativeModal.additionalElements.howToAportTitle.waitForDisplayed();
                break;
            case 'modal button to close':
                await this.informativeModal.additionalElements.buttonToClose.waitForDisplayed();
                break;
            case 'how to contribute modal information':
                await this.informativeModal.additionalElements.howToAportInformation.waitForDisplayed();
                break;
            case 'how to contribute modal second information':
                await this.informativeModal.additionalElements.howToAportSecondInformation.waitForDisplayed();
                break;
            case 'faq header title':
                await this.faqs.additionalElements.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq header close':
                await this.faqs.additionalElements.closeHeaderList.waitForDisplayed();
                break;
            case 'faq detail title':
                await this.faqs.additionalElements.contentTitle.waitForDisplayed();
                break;
            case 'faq detail content':
                await this.faqs.additionalElements.contentText.waitForDisplayed();
                break;
            case 'link project management':
                await this.listFaqs.additionalElements.linkProjectManagement.waitForDisplayed();
                break;
            case 'list faqs header title':
                await this.listFaqs.additionalElements.headerTitle.waitForDisplayed();
                break;
            case 'list faqs header close':
                await this.listFaqs.additionalElements.headerClose.waitForDisplayed();
                break;
            case 'list faqs title':
                await this.listFaqs.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link whats is mexico':
                await this.listFaqs.additionalElements.linkWhatIsMexico.waitForDisplayed();
                break;
            case 'link how use points':
                await this.listFaqs.additionalElements.linkHowToUsePoints.waitForDisplayed();
                break;
            case 'link payment security':
                await this.listFaqs.additionalElements.linkPaymentSecurity.waitForDisplayed();
                break;
            case 'link why cant you contribute':
                await this.listFaqs.additionalElements.linkNotContribute.waitForDisplayed();
                break;
            case 'exit operation modal header title':
                await this.exitOperationModal.additionalElements.headerTitle.waitForDisplayed();
                break;
            case 'exit operation modal header button':
                await this.exitOperationModal.additionalElements.headerExitButton.waitForDisplayed();
                break;
            case 'exit operation modal content':
                await this.exitOperationModal.additionalElements.contentOperation.waitForDisplayed();
                break;
            case 'exit operation modal footer button':
                await this.exitOperationModal.additionalElements.buttonExit.waitForDisplayed();
                break;
            case 'exit operation modal footer link':
                await this.exitOperationModal.additionalElements.linkContinue.waitForDisplayed();
                break;
            case 'tooltip modal header':
                await this.tooltipModal.header.waitForDisplayed();
                break;
            case 'tooltip modal button close':
                await this.tooltipModal.closeBtn.waitForDisplayed();
                break;
            case 'tooltip modal title':
                await this.tooltipModal.title.waitForDisplayed();
                break;
            case 'tooltip modal content':
                await this.tooltipModal.content.waitForDisplayed();
                break;
            case 'contributions header':
                await this.contributionsList.header.waitForDisplayed();
                break;
            case 'contributions back button':
                await this.contributionsList.backButton.waitForDisplayed();
                break;
            case 'contributions card date':
                await this.contributionsList.date.waitForDisplayed();
                break;
            case 'contributions card title':
                await this.contributionsList.contributionCardTitle.waitForDisplayed();
                break;
            case 'contributions card amount':
                await this.contributionsList.contributionCardAmount.waitForDisplayed();
                break;
            case 'contributions card description':
                await this.contributionsList.contributionCardDescription.waitForDisplayed();
                break;
            case 'contribution detail header':
                await this.contributionsDetail.header.waitForDisplayed();
                break;
            case 'contribution detail date':
                await this.contributionsDetail.date.waitForDisplayed();
                break;
            case 'contribution detail back button':
                await this.contributionsDetail.backButton.waitForDisplayed();
                break;
            case 'contribution detail title':
                await this.contributionsDetail.title.waitForDisplayed();
                break;
            case 'contribution detail amount':
                await this.contributionsDetail.amount.waitForDisplayed();
                break;
            case 'contribution detail description':
                await this.contributionsDetail.description.waitForDisplayed();
                break;
            case 'message error icon':
                await this.errorMessage.icon.waitForDisplayed();
                break;
            case 'message error content':
                await this.errorMessage.content.waitForDisplayed();
                break;
            case 'modal error header':
                await this.errorModal.header.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'modal error close button':
                await this.errorModal.closeBtn.waitForDisplayed();
                break;
            case 'modal error icon':
                await this.errorModal.icon.waitForDisplayed();
                break;
            case 'modal error content':
                await this.errorModal.content.waitForDisplayed();
                break;
            case 'modal error retry button':
                await this.errorModal.defaultButton.waitForDisplayed();
                break;
            case 'modal error exit link':
                await this.errorModal.defaultButton.waitForDisplayed();
                break;
            case 'digital card alert header':
                await this.digitalCardAlert.header.waitForDisplayed();
                break;
            case 'digital card alert close button':
                await this.digitalCardAlert.closeBtn.waitForDisplayed();
                break;
            case 'digital card alert content':
                await this.digitalCardAlert.content.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new SustainabilityCarbonFootprintOffset();
