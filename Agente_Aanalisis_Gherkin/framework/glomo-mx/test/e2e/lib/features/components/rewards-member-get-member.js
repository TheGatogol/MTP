import AbstractGlomoComponent from './abstract-glomo-component';

const dynamicsAndRewardsRoute = '[data-tag-name="rewards-member-get-member-dynamics-and-rewards"] [data-tag-name="bbva-tab-default"]';
const bonificationRoute = '[data-tag-name="bbva-transition-container"]:nth-child(6) div > div.content > section > div.modal-header > slot.header-slot > [data-tag-name="bbva-header-main"]';

export default class RewardsMemberGetMember extends AbstractGlomoComponent {
    constructor(args) {
        const defaultArgs = {
            name: 'rewards-member-get-member',
            elements: {
                dynamicsAndRewardsHeader: 'section > [data-tag-name="bbva-header-main"]',
                dynamicsAndRewardsBackButton: 'section > [data-tag-name="bbva-header-main"] #btn-back',
                dynamicsAndRewardsOfferTitleText: `${dynamicsAndRewardsRoute} > div:nth-child(1) > [data-tag-name="rewards-member-get-member-dynamics"] div > [data-tag-name="bbva-type-text"].card-detail__title p`,
                dynamicsAndRewardsOfferDescriptionText: `${dynamicsAndRewardsRoute} > div:nth-child(1) > [data-tag-name="rewards-member-get-member-dynamics"] div > [data-tag-name="bbva-type-text"].card-detail__description p`,
                dynamicsAndRewardsOfferButtonLink: `${dynamicsAndRewardsRoute} > div:nth-child(1) > [data-tag-name="rewards-member-get-member-dynamics"] div > [data-tag-name="bbva-type-link"]`,
                dynamicsAndRewardsOfferDetailHeader: '[data-tag-name="bbva-transition-container"]:first-of-type div div.content section div.modal-header slot.header-slot [data-tag-name="bbva-header-main"]',
                dynamicsAndRewardsOfferDetailBackButton: '[data-tag-name="bbva-transition-container"]:first-of-type div div.content section div.modal-header slot.header-slot [data-tag-name="bbva-header-main"] #btn-back',
                dynamicsAndRewardsOfferDetailTitleText: '[data-tag-name="rewards-member-get-member-panel-offer"] div > bbva-type-text.card-detail__title',
                dynamicsAndRewardsOfferDetailSubtitleText: '[data-tag-name="rewards-member-get-member-dynamic-detail"] [data-tag-name="bbva-header-category"]:nth-child(3) div.title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                dynamicsAndRewardsOfferDetailSubtitleTextPanel: '[data-tag-name="rewards-member-get-member-dynamic-detail"] rewards-member-get-member-panel-offer bbva-type-text',
                dynamicsAndRewardsOfferDetailRegisterButton: '[data-tag-name="rewards-member-get-member-dynamic-detail"] div.helper--margin-block-2 [data-tag-name="bbva-button-default"]',
                dynamicsAndRewardsDynamicsOption: `${dynamicsAndRewardsRoute} #tab-0`,
                dynamicsAndRewardsRewardsOption: `${dynamicsAndRewardsRoute} #tab-1`,
                dynamicsAndRewardsRewardItem: '[data-tag-name="rewards-member-get-member-dynamics-and-rewards"] [data-tag-name="bbva-tab-default"] [data-tag-name="rewards-member-get-member-rewards"] [data-tag-name="rewards-member-get-member-list-default"] div.align-list-default-header [data-tag-name="bbva-type-text"]',
                dynamicsAndRewardsRewardDetailHeader: '[data-tag-name="bbva-transition-container"]:nth-child(6) [data-tag-name="bbva-header-main"] div.header #text',
                dynamicsAndRewardsRewardDetailBackButton: '[data-tag-name="bbva-transition-container"]:nth-child(6) [data-tag-name="bbva-header-main"] #btn-back',
                dynamicsAndRewardsRewardDetailTitleText: '[data-tag-name="rewards-member-get-member-panel-info"] div bbva-type-text.title p',
                dynamicsAndRewardsRewardDetailTotal: 'div.list-default-container [data-tag-name="bbva-type-text"]',
                dynamicsAndRewardsRewardDetailParagraph: 'div.accumulated-info  [data-tag-name="bbva-type-text"].accumulated-info__text p',
                dynamicsAndRewardsRewardDetailLinkRewardsHistory: 'div.rewards-member-get-member-object-box.helper--margin-block-end-2 [data-tag-name="bbva-type-link"]',
                dynamicsAndRewardsRewardDetailHistoryLink: 'div.rewards-member-get-member-object-box.helper--margin-block-end-2 [data-tag-name="bbva-type-link"]',
                dynamicsAndRewardsRewardDetailGoDynamicsButton: '[data-tag-name="rewards-member-get-member-reward-detail"] div.helper--margin-block-2 [data-tag-name="bbva-button-default"]',
                dynamicsAndRewardsRewardHistoryHeader: '[data-tag-name="bbva-transition-container"]:nth-child(7) [data-tag-name="bbva-header-main"] div.header #text',
                dynamicsAndRewardsRewardHistoryBackButton: '[data-tag-name="bbva-transition-container"]:nth-child(7) [data-tag-name="bbva-header-main"] #btn-back',
                dynamicsAndRewardsRewardHistoryNotificationMessage: '[data-tag-name="rewards-member-get-member-reward-history"] [data-tag-name="bbva-notification-message"]',
                dynamicsAndRewardsBonificationItem: '[data-tag-name="rewards-member-get-member-reward-history"] [data-tag-name="rewards-member-get-member-list-default"] [data-tag-name="bbva-type-text"][tag="p"]',
                dynamicsAndRewardsBonificationHeader: `${bonificationRoute} #text`,
                dynamicsAndRewardsBonificationTitle:'[data-tag-name="rewards-member-get-member-panel-info"] div [data-tag-name="bbva-type-text"].type-text-container p',
                dynamicsAndRewardsBonificationRewardsText:'[data-tag-name="bbva-notification-contextual"] div.header div.info [data-tag-name="bbva-type-text"]',
                dynamicsAndRewardsBonificationDetailInfoBox:'[data-tag-name="bbva-notification-message"].helper--margin-block-end-3',
                dynamicsAndRewardsBonificationBackButton: `${bonificationRoute} #btn-back`,
                dynamicsAndRewardsBonificationMessage: '[data-tag-name="bbva-notification-contextual"] div > div > div > div > [data-tag-name="bbva-type-text"]',
                dynamicsAndRewardsBonificationMessageLink: '[data-tag-name="bbva-notification-message"] div.link [data-tag-name="bbva-type-link"]',
                dynamicsAndRewardsBonificationGoDynamicsButton: '[data-tag-name="rewards-member-get-member-bonus-detail"] div.helper--margin-block-2 [data-tag-name="bbva-button-default"]',
                dynamicsAndRewardsRewardLoadError: '[data-tag-name="rewards-member-get-member-dynamics-and-rewards"] [data-tag-name="bbva-tab-default"] [data-tag-name="rewards-member-get-member-rewards"] [data-tag-name="bbva-notification-message"] div.link [data-tag-name="bbva-type-link"]',
                dynamicsAndRewardsDynamicLoadError: '[data-tag-name="rewards-member-get-member-dynamics-and-rewards"] [data-tag-name="bbva-tab-default"] [data-tag-name="rewards-member-get-member-dynamics"] [data-tag-name="bbva-notification-message"] div.link [data-tag-name="bbva-type-link"]',
                dynamicsAndRewardsEmptyRewards: `${dynamicsAndRewardsRoute} > div:nth-child(2) > [data-tag-name="rewards-member-get-member-rewards"] [data-tag-name="rewards-member-get-member-panel-info"] div > bbva-type-text:nth-child(3) p`,
                dynamicsAndRewardsEmptyDynamics: `${dynamicsAndRewardsRoute} > div:nth-child(1) > [data-tag-name="rewards-member-get-member-dynamics"] [data-tag-name="rewards-member-get-member-panel-info"] div > [data-tag-name="bbva-type-text"]:nth-child(3) p`,
                rewardHistoryHalfModalButtonError: '[data-tag-name="rewards-member-get-member-modal-retry-error"] [data-tag-name="bbva-help-modal"] div.content div.help-modal div.modal-main div.modal-footer div.slot-footer [data-tag-name="bbva-button-default"]'
            },
            requiredElements: [
                'dynamicsAndRewardsHeader',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return 'rewards-member-get-member';
    }

    async ctaRewardHistoryLink() {
        await this.dynamicsAndRewardsRewardDetailHistoryLink.waitForClickable({timeout: config.wait.M});
        await this.dynamicsAndRewardsRewardDetailHistoryLink.click();
    }

    async ctaHalfModalButtonError() {
        await this.rewardHistoryHalfModalButtonError.waitForClickable({timeout: config.wait.M});
        await this.rewardHistoryHalfModalButtonError.click();
    }

    async ctaRetryError() {
        await this.ctaRewardHistoryLink();
        await this.ctaHalfModalButtonError();
        await this.ctaRewardHistoryLink();
        await this.ctaHalfModalButtonError();
        await this.ctaRewardHistoryLink();
        await this.ctaHalfModalButtonError();
        await this.ctaRewardHistoryLink();
    }

    async ctaRewardItem() {
        await this.dynamicsAndRewardsRewardItem.waitForClickable({timeout: config.wait.M});
        await this.dynamicsAndRewardsRewardItem.click();
    }
    
    async pressDynamicAndRewardBtn(action) {
        switch (action) {
            case 'offer button link':
                await this.dynamicsAndRewardsOfferButtonLink.waitForClickable({timeout: config.wait.M});
                await this.dynamicsAndRewardsOfferButtonLink.click();
                break;
            case 'tab rewards':
                await this.dynamicsAndRewardsRewardsOption.waitForClickable({timeout: config.wait.M});
                await this.dynamicsAndRewardsRewardsOption.click();
                break;
            case 'tab reward item':
                await this.ctaRewardItem();
                break;
            case 'tab reward detail history link':
                await this.ctaRewardItem();
                await this.ctaRewardHistoryLink();
                break;
            case 'tab reward detail history link with error':
                await this.ctaRewardItem();
                await this.ctaRetryError();
                break;
            case 'bonification item':
                await this.ctaRewardItem();
                await this.ctaRewardHistoryLink();
                await this.dynamicsAndRewardsBonificationItem.waitForClickable({timeout: config.wait.M});
                await this.dynamicsAndRewardsBonificationItem.click();
                break;
            case 'register button':
                await this.dynamicsAndRewardsOfferDetailRegisterButton.waitForClickable({timeout: config.wait.M});
                await this.dynamicsAndRewardsOfferDetailRegisterButton.click();
                break;
            default:
        }
    }
}
