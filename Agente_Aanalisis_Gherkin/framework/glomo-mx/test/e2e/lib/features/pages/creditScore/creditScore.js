import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class CreditScore extends AbstractGlomoPage {
    constructor(){
        super({
            root: '#cells-template-creditScore[state="active"]',
            elements: {
                continueTermsyConditionsModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="advice-credit-score-mx-modal-terms"]',
                        additionalElements: {
                            btnContinueTyC: '.footer-button',
                            btnCloseTyC: '#btn-close',
                        }
                    }
                ],
                headerMainMenu: [
                    BbvaHeaderMain,
                    {
                        prefix: '[data-tag-name="advice-credit-score-mx"]',
                        additionalElements: {
                            btnBack: '#btn-back',
                            headerCreditStatus: '#heading',
                        }
                    }
                ],
                learnMorePage: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="advice-credit-score-mx-detail-modal-history"]',
                        additionalElements: {
                            titleHistoryCredit: '#heading [class="text lines"]',
                            textHistoryCredit: '[data-tag-name="bbva-type-text"] [class="text "]',
                            containerHistoryCredit: '[class=" button-1 "]',
                        }
                    }
                ],
                challengesPage: [
                    BbvaHeaderMain,
                    {
                        prefix: '[data-tag-name="advice-credit-score-mx-score-list-challenges"]',
                        additionalElements: {
                            headerRecordCredit: '#heading',
                        }
                    }
                ],
                headerScoreInfo: '.header-slot #helpModalHeader [class=" button-1 "]',
                textScoreInfo: '#containerAcordions bbva-type-text [class="text "]',
                titlePointsInfo: '.bullet-list .container-card bbva-type-text',
                textLevel: '.bullet-list .pair-label-text',
                textLevelInfo: '.text-card-description bbva-type-text',
                titleCreditStatus: '[aria-label="advice-credit-score-mx-card-scoring-accessibility"] [font-type="title-secondary"][data-tag-name="bbva-type-text"]',
                textCreditStatus: '.card-bc-score bbva-type-date bbva-type-text .text',
                linkModalScoring: '.card-bc-score .container-how-it-works',
                btnHowToInterpret: '#accordion0 .header .header-accordion .right-icon[data-tag-name="bbva-type-icon"]',
                btnAssignIt: '#accordion1 .header .header-accordion .right-icon[data-tag-name="bbva-type-icon"]',
                btnCheckScore: '#accordion2 .header .header-accordion .right-icon[data-tag-name="bbva-type-icon"]',
                titleNoInformationCredit: '.container-without-service bbva-type-text [class="text "]',
                linkLearnMore: '.card-bc-score .button-link',
                linkChallengesSection: '.header-carousel-challenges .options-right [data-tag-name="bbva-type-link"]',
                bannerChallengesSection: '.score-advice-background #challenge0',
                linkViewChallenge: '#challenge0 .score-current-container .card-bc-score .link-insight',
                btnRetryInsightsModal: 'bbva-help-modal .footer-button'
            },
            requiredElements: [
                'headerMainMenu',
            ],
        });
    }

    async retryModal(times) {
        const retries = Number.parseInt(times, 10);

        for (let index = 0; index < retries; index++) {
            await this.btnRetryInsightsModal.waitForDisplayed();
            await this.btnRetryInsightsModal.click();
        }
    }

    async creditTyC() {
        await this.continueTermsyConditionsModal.additionalElements.btnContinueTyC.waitForDisplayed({timeout: config.wait.M});
        await this.continueTermsyConditionsModal.additionalElements.btnContinueTyC.click();
    }

    async creditGoBackTyC() {
        await this.waitForElementsExist(this.continueTermsyConditionsModal.additionalElements.btnCloseTyC);
        await (await (await this.continueTermsyConditionsModal.additionalElements.btnCloseTyC.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async goBack() {
        await this.waitForElementsExist(this.headerMainMenu.additionalElements.btnBack);
        await (await (await this.headerMainMenu.additionalElements.btnBack.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async modalScoring() {
        await this.linkModalScoring.waitForDisplayed({timeout: config.wait.M});
        await this.linkModalScoring.click();
    }

    async expandContainerInterprets() {
        await this.btnHowToInterpret.waitForDisplayed({timeout: config.wait.M});
        await this.btnHowToInterpret.click();
    }

    async expandCreditContainer() {
        await this.expandContainerInterprets();
        await this.btnHowToInterpret.click();
    }

    async creditAssignItContainer() {
        await this.expandContainerInterprets();
        await this.btnAssignIt.waitForDisplayed({timeout: config.wait.M});
        await this.btnAssignIt.click();
    }

    async creditCheckScore() {
        await this.expandContainerInterprets();
        await this.btnCheckScore.waitForDisplayed({timeout: config.wait.M});
        await this.btnCheckScore.click();
    }

    async expandOption(option) {
        switch (option) {
            case 'How it works':
                await this.expandContainerInterprets();
                break;
            case 'What is taken into account when assigning it':
                await this.creditAssignItContainer();
                break;
            case 'Who can check your score':
                await this.creditCheckScore();
                break;
            default:
                throw new Error(`${option} option is not available to navigate to...`);
        }
    }

    async accessLinkLearnMore() {
        await this.linkLearnMore.waitForDisplayed({timeout: config.wait.M});
        await this.linkLearnMore.click();
    }

    async challengesSection() {
        await this.linkChallengesSection.waitForDisplayed({timeout: config.wait.M});
        await this.linkChallengesSection.click();
    }

    async openChallengeDetail() {
        await this.linkViewChallenge.waitForDisplayed({timeout: config.wait.M});
        await this.linkViewChallenge.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header credit status':
                await this.waitForElementsExist(this.headerMainMenu.additionalElements.headerCreditStatus);
                await(await this.headerMainMenu.additionalElements.headerCreditStatus.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title credit status':
                await this.titleCreditStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text credit status':
                await this.textCreditStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close credit':
                await this.waitForElementsExist(this.headerMainMenu.additionalElements.btnBack);
                await(await this.headerMainMenu.additionalElements.btnBack.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title no information credit':
                await this.waitForElementsExist(this.titleNoInformationCredit);
                await(await this.titleNoInformationCredit.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header history credit':
                await this.learnMorePage.additionalElements.titleHistoryCredit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text history credit':
                await this.waitForElementsExist(this.learnMorePage.additionalElements.textHistoryCredit);
                await(await this.learnMorePage.additionalElements.textHistoryCredit.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container history credit':
                await this.waitForElementsExist(this.learnMorePage.additionalElements.containerHistoryCredit);
                await(await this.learnMorePage.additionalElements.containerHistoryCredit.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header challenges section':
                await this.challengesPage.additionalElements.headerRecordCredit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banner challenges section':
                await this.bannerChallengesSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header score information':
                await this.headerScoreInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text score information':
                await this.waitForElementsExist(this.textScoreInfo);
                await(await this.textScoreInfo.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title points information':
                await this.waitForElementsExist(this.titlePointsInfo);
                await(await this.titlePointsInfo.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text level':
                await this.textLevel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text level information':
                await this.waitForElementsExist(this.textLevelInfo);
                await(await this.textLevelInfo.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }
}

export default new CreditScore();
