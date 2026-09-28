import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class ChecklistActions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checklistActions[state="active"]',
            elements: {
                properties: {
                    root: '[data-tag-name="onboarding-checklist-actions-mx"]'
                },
                challengesPage: {
                    headerButtonClose: '[data-tag-name="bbva-header-main"]#challengesHeader #btn-close',
                    progressSection: {
                        properties: { root: '[data-tag-name="onboarding-checklist-actions-progress"]' },
                        title: '#title',
                        description: '#description',
                        clipBox: '[data-tag-name="bbva-clip-box"]',
                        text: '.content-info [data-tag-name="bbva-type-text"]',
                        progressBar: '[data-tag-name="bbva-data-visualization-bar"]',
                    },
                    insignSection: {
                        properties: { root: '[data-tag-name="onboarding-checklist-actions-insign-card"]' },
                        title: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-text"]',
                        link: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        badgeSection: '.steps-container',
                    },
                    challengePanelSection: {
                        properties: { root: '[data-tag-name="onboarding-checklist-actions-challenges-panel"]' },
                        title: '#challenges-section-title',
                        pendingChallenges: '#tab-0',
                        badgeExpandable: '#__BADGE__-badge-expandable',
                        completedChallenges: '#tab-1',
                        sectionCompletedProtection: {
                            properties: { root: '#security-badge' },
                            badgeIcon: '.badge-header [data-tag-name="bbva-badge-icon"]',
                            containerCompletedChallenge: '.challenge-completed-container',
                        },
                    },
                    digitalBadgeModal: {
                        properties: { root: '[data-tag-name="onboarding-checklist-actions-generic-modals"]' },
                        informationDigitalBadge: {
                            properties: { root: '#digital-badge-modal' },
                            buttonClose: '#helpModalHeader #btn-close.icon',
                            microillustrationHelpModal: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                            helpModalContentDescription: '#helpModalContent.modal-content',
                        }
                    },
                },
                onboardingPage: {
                    properties: {
                        root: '[data-tag-name="onboarding-checklist-actions-onboarding-modal"] [data-tag-name="onboarding-checklist-actions-onboarding"] [data-tag-name="bbva-help-modal"]'
                    },
                    buttonPlay: '.controls button.play',
                    buttonNext: '.controls button.next',
                    buttonClose: '.controls button.close',
                    buttonStart: '[data-tag-name="bbva-button-default"].action-button',
                },
            },
            requiredElements: [
                'onboardingPage',
                'challengesPage',
            ]
        });
    }

    async _screenValidation({item, value, visibility, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'progress section title':
                await this.challengesPage.progressSection.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress section description':
                await this.challengesPage.progressSection.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress section clip box':
                await this.challengesPage.progressSection.clipBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress section text':
                await this.challengesPage.progressSection.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'progress section progress bar':
                await this.challengesPage.progressSection.progressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insigns section title':
                await this.challengesPage.insignSection.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insigns section link':
                await this.challengesPage.insignSection.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'insigns section badge section':
                await this.challengesPage.insignSection.badgeSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'challenges section title':
                await this.challengesPage.challengePanelSection.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'challenges section pending button':
                await this.challengesPage.challengePanelSection.pendingChallenges.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'challenges section completed button':
                await this.challengesPage.challengePanelSection.completedChallenges.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'challenges section badge expandable':
                await this.challengesPage.challengePanelSection.badgeExpandable
                    .specifySelector({placeholder: '__BADGE__', value})
                    .waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'visible'});
                break;
            case 'challenges section completed badge icon':
                await this.challengesPage.challengePanelSection.sectionCompletedProtection.badgeIcon
                    .waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'challenges section completed challenge container':
                await this.challengesPage.challengePanelSection.sectionCompletedProtection.containerCompletedChallenge
                    .waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                break;
            case 'information badge modal button close':
                await this.challengesPage.digitalBadgeModal.informationDigitalBadge.buttonClose.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information badge modal microillustration':
                await this.challengesPage.digitalBadgeModal.informationDigitalBadge.microillustrationHelpModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'information badge modal description':
                await this.challengesPage.digitalBadgeModal.informationDigitalBadge.helpModalContentDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async closeOnboardingModal() {
        await this.onboardingPage.buttonNext.waitForDisplayed({timeout: config.wait.S});
        await this.onboardingPage.buttonNext.click();
        await this.onboardingPage.buttonPlay.waitForDisplayed({timeout: config.wait.S});
        await this.onboardingPage.buttonPlay.click();
        await this.onboardingPage.buttonClose.waitForDisplayed({timeout: config.wait.S});
        await this.onboardingPage.buttonClose.click();
    }

    async continueOnboardingModal() {
        await this.onboardingPage.buttonNext.waitForDisplayed({timeout: config.wait.S});
        await this.onboardingPage.buttonNext.click();
        await this.onboardingPage.buttonNext.click();
        await this.onboardingPage.buttonStart.waitForDisplayed({timeout: config.wait.S});
        await this.onboardingPage.buttonStart.click();
    }

    async exitPageChecklistActions() {
        await this.challengesPage.challengePanelSection.pendingChallenges.waitForDisplayed({timeout: config.wait.M});
        await this.challengesPage.challengePanelSection.pendingChallenges.scrollIntoView({block: 'center'});

        await this.challengesPage.headerButtonClose.waitForDisplayed({timeout: config.wait.M});
        await this.challengesPage.headerButtonClose.click();
    }

    async openDigitalBadgeModal() {
        await this.challengesPage.insignSection.link.waitForDisplayed({timeout: config.wait.M});
        await this.challengesPage.insignSection.link.click();
    }

    async selectStatusChallenges(status) {
        await this.challengesPage.challengePanelSection.completedChallenges.waitForDisplayed({timeout: config.wait.M});
        await this.challengesPage.challengePanelSection.completedChallenges.scrollIntoView({block: 'center'});

        switch (status.toLowerCase()) {
            case 'completed':
                await this.challengesPage.challengePanelSection.completedChallenges.waitForDisplayed({timeout: config.wait.M});
                await this.challengesPage.challengePanelSection.completedChallenges.click();
                break;
            case 'pending':
                await this.challengesPage.challengePanelSection.pendingChallenges.waitForDisplayed({timeout: config.wait.M});
                await this.challengesPage.challengePanelSection.pendingChallenges.click();
                break;
            default:
                throw new Error(`${status} is not a valid option`);
        }
    }
}

export default new ChecklistActions();
