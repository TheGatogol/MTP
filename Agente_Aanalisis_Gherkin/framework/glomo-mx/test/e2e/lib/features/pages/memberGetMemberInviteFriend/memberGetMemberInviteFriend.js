import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';

@page('memberGetMemberInviteFriend')
class MemberGetMemberInviteFriend extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicsAndRewards[state="active"]',
            name: 'bbva-member-get-member',
            elements: {
                controllerComponent: 'bbva-controller-member-get-member',
                main: {
                    properties: {
                        root: '[data-tag-name="rewards-member-get-member"]'
                    },

                    dynamicsAndRewards: {
                        properties: {
                            root: '[data-tag-name="rewards-member-get-member-dynamics-and-rewards"]'
                        },

                        tabs: {
                            properties: {
                                root: '[data-tag-name="bbva-tab-default"]'
                            },
                            dynamics: '#tab-0',
                            rewards: '#tab-1'
                        },

                        dynamics: {
                            properties: {
                                root: '[data-tag-name="rewards-member-get-member-dynamics"]'
                            },
                            panelHeader: '[data-tag-name="rewards-member-get-member-panel-offer"]',
                            rewardsMember: '[data-tag-name="rewards-member-get-member-panel-offer"] .card-detail [data-tag-name="bbva-type-link"]',
                            panelInfo: '[data-tag-name="rewards-member-get-member-panel-info"]',
                            mgmOfferTitleText: '[data-tag-name="bbva-type-text"].card-detail__title p',
                            mgmOfferDescriptionText: '[data-tag-name="bbva-type-text"].card-detail__description p',
                            mgmOfferButtonLink: '[data-tag-name="bbva-type-link"]',
                            errorPanelTextDynamics: 'bbva-notification-message',
                            errorRetryLinkDynamics: 'bbva-notification-message bbva-type-link'
                        },

                        rewards: {
                            properties: {
                                root: 'rewards-member-get-member-rewards'
                            },
                            debitRewardsOption: 'div.align-list-default-header > bbva-type-text',
                            errorPanelTextRewards: 'bbva-notification-message',
                            errorRetryLinkRewards: 'bbva-notification-message bbva-type-link'
                        }
                    }
                },

                detail: {
                    properties: {
                        root: '[data-tag-name="rewards-member-get-member-dynamic-detail"]'
                    },
                    buttonDigitalAccount: '[data-tag-name="bbva-expandable-accordion"]',
                    buttonOpenAccordion: '[data-tag-name="bbva-expandable-accordion"] bbva-core-heading button > bbva-type-icon',
                    buttonCloseAccordion: '[data-tag-name="bbva-expandable-accordion"][opened]',
                    offerDetailShareButtonInvite: 'div.helper--margin-block-2 > bbva-button-default',
                    offerTermsAndConditionsLink: '[data-tag-name="rewards-member-get-member-list-file"]'
                },

                modalHeader: {
                    properties: {
                        root: 'bbva-transition-container:nth-child(5) div > div.content > section > div.modal-header > slot.header-slot > bbva-header-main'
                    },
                    headerTitle: '#text',
                    mgmBackButton: '#btn-back',
                    mgmOfferDetailBackButton: '#btn-back'
                },

                noOffersHeader: {
                    properties: {
                        root: 'section > bbva-header-main'
                    },
                    headerNoOffersTitle: '#text h1',
                    mgmNoOffersBackButton: '#btn-back > div > bbva-type-icon'
                },

                rewardDetail: {
                    properties: {
                        root: 'rewards-member-get-member-reward-detail'
                    },
                    historyRewardsDebit: 'div.rewards-member-get-member-object-box bbva-type-link'
                },

                rewardHistory: {
                    properties: {
                        root: 'rewards-member-get-member-reward-history'
                    },
                    rewardDebit: 'rewards-member-get-member-list-default:first-of-type bbva-type-text'
                },

                rewardBonus: {
                    properties: {
                        root: '[header-text="Detalle de bonificación"]'
                    },
                    rewardHeader: 'bbva-header-main header bbva-type-text',
                    rewardHeaderBackButton: 'bbva-header-main #btn-back',
                    rewardTermsAndConditions: 'rewards-member-get-member-bonus-detail rewards-member-get-member-list-file bbva-button-default',
                    rewardsButtonDynamics: 'rewards-member-get-member-bonus-detail div > bbva-button-default'
                },

                errors: {
                    properties: {
                        root: 'section > bbva-header-main'
                    },
                    errorRewardsHeader: '#text h1',
                    errorButtonBack: '#btn-back > div > bbva-type-icon'
                }
            },
            requiredElements: ['main.dynamicsAndRewards']
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'panel header':
                await this.main.dynamicsAndRewards.dynamics.panelHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm back button':
                await this.modalHeader.mgmBackButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button open accordion':
                await this.detail.buttonOpenAccordion.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account digital text':
                await this.detail.buttonDigitalAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button close accordion':
                await this.detail.buttonCloseAccordion.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header title':
                await this.modalHeader.headerTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm dynamics option':
                await this.main.dynamicsAndRewards.tabs.dynamics.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm rewards option':
                await this.main.dynamicsAndRewards.tabs.rewards.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm offer button link':
                await this.main.dynamicsAndRewards.dynamics.mgmOfferButtonLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm offer description text':
                await this.main.dynamicsAndRewards.dynamics.mgmOfferDescriptionText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm offer detail back button':
                await this.modalHeader.mgmOfferDetailBackButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'mgm offer title text':
                await this.main.dynamicsAndRewards.dynamics.mgmOfferTitleText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'offer detail share button invite':
                await this.detail.offerDetailShareButtonInvite.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'offer terms and conditions link':
                await this.detail.offerTermsAndConditionsLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel info':
                await this.main.dynamicsAndRewards.dynamics.panelInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tap dynamics':
                await this.main.dynamicsAndRewards.tabs.dynamics.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'tap rewards':
                await this.main.dynamicsAndRewards.tabs.rewards.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header no offers':
                await this.noOffersHeader.headerNoOffersTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'back no offers':
                await this.noOffersHeader.mgmNoOffersBackButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header mgm reward':
                await this.noOffersHeader.headerNoOffersTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header mgm back button':
                await this.noOffersHeader.mgmNoOffersBackButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'reward terms and conditions':
                await this.rewardBonus.rewardTermsAndConditions.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'rewards button dynamics':
                await this.rewardBonus.rewardsButtonDynamics.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error rewards header':
                await this.errors.errorRewardsHeader.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error button back':
                await this.errors.errorButtonBack.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error tab dynamics':
                await this.main.dynamicsAndRewards.tabs.dynamics.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error panel text dynamics':
                await this.main.dynamicsAndRewards.dynamics.errorPanelTextDynamics.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'error panel text rewards':
                await this.main.dynamicsAndRewards.rewards.errorPanelTextRewards.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async getInviteFriend() {
        await this.main.dynamicsAndRewards.dynamics.rewardsMember.waitForDisplayed({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.dynamics.rewardsMember.waitForClickable({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.dynamics.rewardsMember.click();
    }

    async getMoreInfo() {
        await this.getInviteFriend();
        await this.detail.buttonOpenAccordion.waitForDisplayed({ timeout: config.wait.M });
        await this.detail.buttonOpenAccordion.waitForClickable({ timeout: config.wait.M });
        await this.detail.buttonOpenAccordion.click();
    }

    async shareButtonQR() {
        await this.detail.offerDetailShareButtonInvite.waitForDisplayed({ timeout: config.wait.M });
        await this.detail.offerDetailShareButtonInvite.waitForClickable({ timeout: config.wait.M });
        await this.detail.offerDetailShareButtonInvite.click();
    }

    async termsAndConditions() {
        await this.detail.offerTermsAndConditionsLink.waitForDisplayed({ timeout: config.wait.M });
        await this.detail.offerTermsAndConditionsLink.waitForClickable({ timeout: config.wait.M });
        await this.detail.offerTermsAndConditionsLink.click();
    }

    async goToRewards() {
        await this.main.dynamicsAndRewards.tabs.rewards.waitForDisplayed({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.tabs.rewards.waitForClickable({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.tabs.rewards.click();
    }

    async rewardsDebit() {
        await this.main.dynamicsAndRewards.rewards.debitRewardsOption.waitForDisplayed({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.rewards.debitRewardsOption.waitForClickable({ timeout: config.wait.M });
        await this.main.dynamicsAndRewards.rewards.debitRewardsOption.click();
    }

    async viewHistoryRewardsDebit() {
        await this.rewardDetail.historyRewardsDebit.waitForDisplayed({ timeout: config.wait.M });
        await this.rewardDetail.historyRewardsDebit.waitForClickable({ timeout: config.wait.M });
        await this.rewardDetail.historyRewardsDebit.click();
    }

    async rewardDebitInformation() {
        await this.rewardHistory.rewardDebit.waitForDisplayed({ timeout: config.wait.M });
        await this.rewardHistory.rewardDebit.waitForClickable({ timeout: config.wait.M });
        await this.rewardHistory.rewardDebit.click();
    }

    async rewardsTapInformation() {
        await this.goToRewards();
        await this.rewardsDebit();
    }

    async rewardsHistoryList() {
        await this.rewardsTapInformation();
        await this.viewHistoryRewardsDebit();
    }

    async rewardGetInformation() {
        await this.goToRewards();
        await this.rewardsDebit();
        await this.viewHistoryRewardsDebit();
        await this.rewardDebitInformation();
        await this.rewardBonus.rewardsButtonDynamics.waitForDisplayed({ timeout: config.wait.M });
        await this.rewardBonus.rewardsButtonDynamics.waitForClickable({ timeout: config.wait.M });
        await this.rewardBonus.rewardsButtonDynamics.click({useActions: true});
    }

    async retryDynamics() {
        for (let i = 0; i < 3; i++) {
            await this.main.dynamicsAndRewards.dynamics.errorRetryLinkDynamics.waitForDisplayed({ timeout: config.wait.M });
            await this.main.dynamicsAndRewards.dynamics.errorRetryLinkDynamics.waitForClickable({ timeout: config.wait.M });
            await this.main.dynamicsAndRewards.dynamics.errorRetryLinkDynamics.click();
        }
    }

    async retryRewards() {
        for (let i = 0; i < 3; i++) {
            await this.main.dynamicsAndRewards.rewards.errorRetryLinkRewards.waitForDisplayed({ timeout: config.wait.M });
            await this.main.dynamicsAndRewards.rewards.errorRetryLinkRewards.waitForClickable({ timeout: config.wait.M });
            await this.main.dynamicsAndRewards.rewards.errorRetryLinkRewards.click();
        }
    }

    async pushNotificationRewards() {
        await this.controllerComponent.waitForExist({ timeout: config.wait.M });
        const { pushRewardMgm } = global.user;

        await this.controllerComponent.execute({
            script: (data) => this.navigateFromNotification(data),
            args: [pushRewardMgm]
        });
    }

    async selectDynamicsRewards() {
        await this.main.dynamicsAndRewards.waitForDisplayed({ timeout: config.wait.M });
    }
}

export default new MemberGetMemberInviteFriend();
