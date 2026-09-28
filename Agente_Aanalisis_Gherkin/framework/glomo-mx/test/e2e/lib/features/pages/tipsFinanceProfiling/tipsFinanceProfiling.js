import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('tipsFinanceProfiling')
class TipsFinanceProfiling extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-tipsFinanceProfiling[state="active"]',
            elements: {
                onboarding: {
                    properties: {
                        root: '[data-tag-name="bbva-help-onboarding"]'
                    },
                    slide: '.carousel-item[aria-hidden="false"] [data-tag-name="bbva-help-onboarding-slide"]',
                    slideHidden: '.carousel-item[aria-hidden="true"] [data-tag-name="bbva-help-onboarding-slide"]',
                    close: '.container .controls .close'
                },
                generalDashboard: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-profiling-mx"] [data-tag-name="general-badges-dashboard"] [data-tag-name="bbva-transition-container"] .mission-badges [data-tag-name="bbva-tab-default"]'
                    },
                    collectionButton: '.group #tabs [aria-selected="false"]',
                    season: {
                        properties: {
                            root: '[slot="content-0"]'
                        },
                        microillustration: '.mission-badges-status-module .mission-badges-icon',
                        title: '.mission-badges-status-module [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                        description: '.mission-badges-status-module [data-tag-name="bbva-type-text"][font-type="body"]',
                        seasonInfoSection: '.mission-badges-season-module',
                        modalButtonSeasonInfo: '.mission-badges-season-module [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"]',
                        showDetailSeasonInfo: '.mission-badges-season-module .season-detail-show [data-tag-name="bbva-type-link"]',
                        buttonProfile: '.mission-badges-profiler-card .profiler-card-text .profiler-card-link [data-tag-name="bbva-type-link"]',
                        badgesSection: '.mission-badges-tab-module [data-tag-name="bbva-tab-default"]',
                        badges: {
                            properties: {
                                root: '.mission-badges-tab-module [data-tag-name="bbva-tab-default"]#badges-tab'
                            },
                            commonButton: '.group #tabs button#tab-0',
                            uniqueButton: '.group #tabs button[aria-selected="false"]',
                            showCollectionEmptyBoxCommon: '[slot="content-0"] .empty-state [data-tag-name="bbva-type-link"]',
                            linkBadgesCommon:
                                '#carouselSlides [aria-labelledby="slide-0"] [data-tag-name="bbva-type-link"]',
                            linkBadgesBlockedCommon:
                                '#carouselSlides [aria-labelledby="slide-1"] [data-tag-name="bbva-type-link"]',
                            progressSecondBadgeCommon:
                                '#second-carousel #carouselSlides [aria-labelledby="slide-0"] [data-tag-name="bbva-type-link"]',
                            showCollectionEmptyBoxUnique: '[slot="content-1"] .empty-state [data-tag-name="bbva-type-link"]'
                        }
                    },
                    collection: {
                        properties: {
                            root: '[slot="content-1"]'
                        },
                        badges: {
                            properties: {
                                root: '[data-tag-name="bbva-tab-default"]#badges-complete-tab'
                            },
                            uniqueButtons: '.group #tabs #tab-1',
                            seasonInfo: '.mission-badges-season-module',
                            imageEmptyBoxCommon: '[slot="content-0"] .empty-state [data-tag-name="bbva-clip-microillustration"]',
                            titleEmptyBoxCommon: '[slot="content-0"] .empty-state [data-tag-name="bbva-type-text"][font-type="title-default"]',
                            descriptionEmptyBoxCommon: '[slot="content-0"] .empty-state [data-tag-name="bbva-type-text"][font-type="body"]',
                            linkEmptyBoxCommon: '[slot="content-0"] .empty-state [data-tag-name="bbva-type-link"]',
                            commonCollection: '[slot="content-0"] [data-tag-name="badges-composition"] .badge-collection',
                            uniqueCollection: '[slot="content-1"] [data-tag-name="badges-composition"] .unique-collection',
                            imageBadgeUnique: '.unique-item:nth-child(1) [data-tag-name="bbva-banner-image"]',
                            titleBadgeUnique: '.unique-item:nth-child(1) .badges-composition-container',
                            buttonBadgeUnique: '.unique-item:nth-child(1) [data-tag-name="bbva-type-link"]'
                        }
                    }
                },
                seasonDetail: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-profiling-mx"] [data-tag-name="season-detail"] [data-tag-name="bbva-transition-container"] [slot="slot-content"] .season-detail'
                    },
                    profileName: '.season-detail-profile-info',
                    progress: '.season-detail-current',
                    historic: '.season-detail-current-content',
                    share: '.season-detail-button'
                },
                missionDetail: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-profiling-mx"] [data-tag-name="mission-detail"] [data-tag-name="bbva-transition-container"] [slot="slot-content"]'
                    },
                    imageMissionDetail: '.mission-details-container .mission-details [data-tag-name="bbva-banner-image"]',
                    titleMissionDetail: '.mission-details-container .mission-details [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                    descriptionMissionDetail: '.mission-details-container .mission-details [data-tag-name="bbva-type-text"][font-type="body"]',
                    shareButton: '.mission-details-container .mission-details-share-button',
                    firstMissionMissionsList: '.mission-list-container div.mission-list:nth-child(1) [data-tag-name="bbva-type-link"]',
                    missionMissionsList: '.mission-details-container div.mission-list-container div.mission-list:nth-child(2) [data-tag-name="bbva-type-link"]'
                },
                profiling: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-profiling-mx"] [data-tag-name="profiler-form"] #profile-form'
                    },
                    buttonHeader: '#btn-close',
                    optAquestionA: '.profiler-card-question-card:nth-of-type(1) li:nth-of-type(1) [data-tag-name="bbva-form-radio-button-input"]',
                    optBquestionA: '.profiler-card-question-card:nth-of-type(1) li:nth-of-type(2) [data-tag-name="bbva-form-radio-button-input"]',
                    optCquestionA: '.profiler-card-question-card:nth-of-type(1) li:nth-of-type(3) [data-tag-name="bbva-form-radio-button-input"]',
                    optAquestionB: '.profiler-card-question-card:nth-of-type(2) li:nth-of-type(1) [data-tag-name="bbva-form-radio-button-input"]',
                    optBquestionB: '.profiler-card-question-card:nth-of-type(2) li:nth-of-type(2) [data-tag-name="bbva-form-radio-button-input"]',
                    optCquestionB: '.profiler-card-question-card:nth-of-type(2) li:nth-of-type(3) [data-tag-name="bbva-form-radio-button-input"]',
                    optAquestionC: '.profiler-card-question-card:nth-of-type(3) li:nth-of-type(1) [data-tag-name="bbva-form-radio-button-input"]',
                    optBquestionC: '.profiler-card-question-card:nth-of-type(3) li:nth-of-type(2) [data-tag-name="bbva-form-radio-button-input"]',
                    optCquestionC: '.profiler-card-question-card:nth-of-type(3) li:nth-of-type(3) [data-tag-name="bbva-form-radio-button-input"]',
                    optAquestionD: '.profiler-card-question-card:nth-of-type(4) li:nth-of-type(1) [data-tag-name="bbva-form-radio-button-input"]',
                    optBquestionD: '.profiler-card-question-card:nth-of-type(4) li:nth-of-type(2) [data-tag-name="bbva-form-radio-button-input"]',
                    optCquestionD: '.profiler-card-question-card:nth-of-type(4) li:nth-of-type(3) [data-tag-name="bbva-form-radio-button-input"]',
                    optCquestionE: '.profiler-card-question-card:nth-of-type(5) [data-tag-name="bbva-form-checkbox-input"]',

                    acceptedButton: '[slot="slot-content"] [data-tag-name="bbva-button-default"]'
                },
                profilingSuccess: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="profiler-form"]',
                        additionalElements: {
                            microillustration: '.profiler-card [data-tag-name="bbva-clip-microillustration"]',
                            title: '.profiler-card-title [data-tag-name="bbva-type-text"]',
                            description: '.profiler-card-description [data-tag-name="bbva-type-text"]',
                        }
                    }
                ],
                errorModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="user-info-tips-finance-profiling-mx"]',
                        modifiers: '#error-retry-modal',
                    }
                ],
                modals: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="user-info-tips-finance-profiling-mx"]',
                        additionalElements: {
                            headerSection: '[data-tag-name="bbva-header-main"]',
                            titleContainerBody: '#helpModalTitle',
                            contentContainerBody: '#helpModalContent',
                        }
                    }
                ]
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'onboarding slide':
                await this.onboarding.slide.waitForDisplayed();
                break;
            case 'onboarding slide hidden':
                await this.onboarding.slideHidden.waitForDisplayed();
                break;
            case 'onboarding close':
                await this.onboarding.close.waitForDisplayed();
                break;
            case 'general season status microillustration':
                await this.generalDashboard.season.microillustration.waitForDisplayed();
                break;
            case 'general season status title':
                await this.generalDashboard.season.title.waitForDisplayed();
                break;
            case 'general season status description':
                await this.generalDashboard.season.description.waitForDisplayed();
                break;
            case 'general season info module':
                await this.generalDashboard.season.seasonInfoSection.waitForDisplayed();
                break;
            case 'general badges module':
                await this.generalDashboard.season.badgesSection.waitForDisplayed();
                break;
            case 'general badges module unique':
                await this.generalDashboard.season.badges.showCollectionEmptyBoxUnique.waitForDisplayed();
                break;
            case 'general badges module common':
                await this.generalDashboard.season.badges.showCollectionEmptyBoxCommon.waitForDisplayed();
                break;
            case 'collection unique collection':
                await this.generalDashboard.collection.badges.uniqueCollection.waitForDisplayed();
                break;
            case 'collection unique collection badge image':
                await this.generalDashboard.collection.badges.imageBadgeUnique.waitForDisplayed();
                break;
            case 'collection unique collection badge title':
                await this.generalDashboard.collection.badges.titleBadgeUnique.waitForDisplayed();
                break;
            case 'collection unique collection badge button':
                await this.generalDashboard.collection.badges.buttonBadgeUnique.waitForDisplayed();
                break;
            case 'collection common collection badges':
                await this.generalDashboard.collection.badges.commonCollection.waitForDisplayed();
                break;
            case 'collection common empty image':
                await this.generalDashboard.collection.badges.imageEmptyBoxCommon.waitForDisplayed();
                break;
            case 'collection common empty title':
                await this.generalDashboard.collection.badges.titleEmptyBoxCommon.waitForDisplayed();
                break;
            case 'collection common empty description':
                await this.generalDashboard.collection.badges.descriptionEmptyBoxCommon.waitForDisplayed();
                break;
            case 'collection common empty link':
                await this.generalDashboard.collection.badges.linkEmptyBoxCommon.waitForDisplayed();
                break;
            case 'mission detail image':
                await this.missionDetail.imageMissionDetail.waitForDisplayed();
                break;
            case 'mission detail title':
                await this.missionDetail.titleMissionDetail.waitForDisplayed();
                break;
            case 'mission detail description':
                await this.missionDetail.descriptionMissionDetail.waitForDisplayed();
                break;
            case 'mission detail share button':
                await this.missionDetail.shareButton.waitForDisplayed();
                break;
            case 'season detail profile name':
                await this.seasonDetail.profileName.waitForDisplayed();
                break;
            case 'season detail progress':
                await this.seasonDetail.progress.waitForDisplayed();
                break;
            case 'season detail historic':
                await this.seasonDetail.historic.waitForDisplayed();
                break;
            case 'season detail share':
                await this.seasonDetail.share.waitForDisplayed();
                break;
            case 'modal header':
                await this.modals.additionalElements.headerSection.waitForDisplayed();
                break;
            case 'modal title':
                await this.modals.additionalElements.titleContainerBody.waitForDisplayed();
                break;
            case 'modal content':
                await this.modals.additionalElements.contentContainerBody.waitForDisplayed();
                break;
            case 'modal footer':
                await this.modals.acceptBtn.waitForDisplayed();
                break;
            case 'success header':
                await this.profilingSuccess.header.waitForDisplayed();
                break;
            case 'success footer':
                await this.profilingSuccess.acceptBtn.waitForDisplayed();
                break;
            case 'success microillustration':
                await this.profilingSuccess.additionalElements.microillustration.waitForDisplayed();
                break;
            case 'success title':
                await this.profilingSuccess.additionalElements.title.waitForDisplayed();
                break;
            case 'success description':
                await this.profilingSuccess.additionalElements.description.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async closeOnboarding() {
        await this.onboarding.close.waitForDisplayed({timeout: config.wait.M});
        await this.onboarding.close.click();
        await this.generalDashboard.collectionButton.waitForDisplayed({timeout: config.wait.M});
    }

    async enterUniqueBadges() {
        await this.generalDashboard.season.badgesSection.waitForDisplayed({timeout: config.wait.L});
        await this.generalDashboard.season.badges.commonButton.waitForDisplayed({timeout: config.wait.L});
        await this.generalDashboard.season.badges.uniqueButton.waitForDisplayed({timeout: config.wait.L});
        await this.generalDashboard.season.badges.uniqueButton.click();
    }

    async returnCommonBadges() {
        await this.enterUniqueBadges();
        await this.generalDashboard.season.badges.commonButton.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.badges.commonButton.click();
    }

    async showCollection(badgesType) {
        await this.generalDashboard.season.badgesSection.waitForDisplayed({timeout: config.wait.S});
        if (badgesType === 'common') {
            await this.generalDashboard.season.badges.showCollectionEmptyBoxCommon.waitForDisplayed({timeout: config.wait.S});
            await this.generalDashboard.season.badges.showCollectionEmptyBoxCommon.click();
        }
        if (badgesType === 'unique') {
            await this.enterUniqueBadges();
            await this.generalDashboard.season.badges.showCollectionEmptyBoxUnique.waitForDisplayed({timeout: config.wait.S});
            await this.generalDashboard.season.badges.showCollectionEmptyBoxUnique.click();
        }
    }

    async selectBadge() {
        await this.generalDashboard.collection.badges.buttonBadgeUnique.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.collection.badges.buttonBadgeUnique.click();
    }

    async showHistoricalSeasonSection() {
        await this.generalDashboard.season.showDetailSeasonInfo.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.showDetailSeasonInfo.click();
        await this.seasonDetail.profileName.waitForDisplayed({timeout: config.wait.S});
    }

    async badgeSelection() {
        await this.generalDashboard.season.badges.linkBadgesCommon.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.badges.linkBadgesCommon.click();
    }

    async badgeSelectionTwo() {
        await this.generalDashboard.season.badges.progressSecondBadgeCommon.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.badges.progressSecondBadgeCommon.click();
    }

    async goBadgesCollection(badgeType) {
        await this.generalDashboard.collectionButton.waitForDisplayed({timeout: config.wait.M});
        await this.generalDashboard.collectionButton.click();
        if (badgeType === 'unique') {
            await this.generalDashboard.collection.badges.uniqueButtons.waitForDisplayed({timeout: config.wait.M});
            await this.generalDashboard.collection.badges.uniqueButtons.click();
        }
    }

    async missionSelection() {
        await this.missionDetail.missionMissionsList.waitForDisplayed({timeout: config.wait.S});
        await this.missionDetail.missionMissionsList.click();
    }

    async firstMissionSelection() {
        await this.missionDetail.firstMissionMissionsList.waitForDisplayed({timeout: config.wait.S});
        await this.missionDetail.firstMissionMissionsList.click();
    }

    async badgePendingSelection() {
        await this.generalDashboard.season.badges.linkBadgesBlockedCommon.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.badges.linkBadgesBlockedCommon.click();
    }

    async discoverProfiler() {
        await this.generalDashboard.season.buttonProfile.waitForDisplayed({timeout: config.wait.M});
        await this.generalDashboard.season.buttonProfile.click();
    }

    async selectAnswerProfile(option) {
        switch (option.toLowerCase()) {
            case 'money apprentice':
                await this.answerProfiling([3, 3, 3, 3]);
                break;
            case 'potential pro':
                await this.answerProfiling([2, 1, 2, 2]);
                break;
            case 'mastermind':
                await this.answerProfiling([1, 1, 1, 1]);
                break;
            default:
                throw new Error(`${option} is not available`);
        }
    }

    async _getAnswer(index, value) {
        const answersSections = [
            [
                await this.profiling.optAquestionA,
                await this.profiling.optBquestionA,
                await this.profiling.optCquestionA
            ],
            [
                await this.profiling.optAquestionB,
                await this.profiling.optBquestionB,
                await this.profiling.optCquestionB
            ],
            [
                await this.profiling.optAquestionC,
                await this.profiling.optBquestionC,
                await this.profiling.optCquestionC
            ],
            [
                await this.profiling.optAquestionD,
                await this.profiling.optBquestionD,
                await this.profiling.optCquestionD
            ],
        ];
        return await answersSections[index][Number(value - 1)];

    }

    async _sendRequest() {
        await this.profiling.optCquestionE.waitForDisplayed({timeout: config.wait.L});
        await this.profiling.optCquestionE.click();
        await this.profiling.acceptedButton.waitForDisplayed({ timeout: config.wait.L });
        await this.profiling.acceptedButton.click();
    }

    async answerProfiling(answers) {
        for( const [index, answer] of answers.entries() ) {
            const abc = await this._getAnswer(index, answer);
            await abc.waitForDisplayed({timeout: config.wait.M});
            await abc.click();
        }

        await this._sendRequest();
    }

    async closeProfilling() {
        await this.profiling.buttonHeader.waitForDisplayed({timeout: config.wait.S});
        await this.profiling.buttonHeader.click();
    }

    async closeProfillingSuccess() {
        await this.profilingSuccess.iconCloseBtn.waitForDisplayed({timeout: config.wait.L});
        await this.profilingSuccess.iconCloseBtn.click();
    }

    async closeErrorModal() {
        await this.errorModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.S});
        await this.errorModal.iconCloseBtn.click();
    }

    async closeModals(button = 'exit') {
        if (button === 'exit') {
            await this.modals.iconCloseBtn.waitForDisplayed({timeout: config.wait.S});
            await this.modals.iconCloseBtn.click();
        } else if (button === 'confirm') {
            await this.modals.acceptBtn.waitForDisplayed({timeout: config.wait.S});
            await this.modals.acceptBtn.click();
        }
    }

    async retryErrorModal() {
        for (let i = 0; i < 2; i++) {
            await this.errorModal.acceptBtn.waitForDisplayed({timeout: config.wait.S});
            await this.errorModal.acceptBtn.click();
        }
    }

    async selectFAQ() {
        await this.generalDashboard.season.modalButtonSeasonInfo.waitForDisplayed({timeout: config.wait.S});
        await this.generalDashboard.season.modalButtonSeasonInfo.click();
    }
}

export default new TipsFinanceProfiling();
