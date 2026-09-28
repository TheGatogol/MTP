import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound } from '@csqe/radish';

import RewardsMemberGetMember from '../../components/rewards-member-get-member';

class MemberGetMember extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicsAndRewards[state="active"]',
            elements: {
                widget: 'rewards-member-get-member',
                dynamicsAndRewards: {
                    component: {
                        ComponentClass: RewardsMemberGetMember
                    }
                },
            },
            requiredElements: [
                'widget',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'mgm header title':
                await this.dynamicsAndRewards.dynamicsAndRewardsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm back button':
                await this.dynamicsAndRewards.dynamicsAndRewardsBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer title text':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer description text':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDescriptionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer button link':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferButtonLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail header':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail back button':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail title text':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail subtitle text':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailSubtitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail subtitle text panel':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailSubtitleTextPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm offer detail register button':
                await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailRegisterButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm rewards option':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardsOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm dynamics option':
                await this.dynamicsAndRewards.dynamicsAndRewardsDynamicsOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward item':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward detail header':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward detail back button':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward detail title text':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailTitleText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward detail history link':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailHistoryLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward detail go dynamics button':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailGoDynamicsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward history header':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardHistoryHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward history back button':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardHistoryBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm reward history message':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardHistoryNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification header':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification back button':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationBackButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification message':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification message link':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationMessageLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification go dynamics button':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationGoDynamicsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm rewards retries button error':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardLoadError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm dynamics retries button error':
                await this.dynamicsAndRewards.dynamicsAndRewardsDynamicLoadError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm empty rewards text':
                await this.dynamicsAndRewards.dynamicsAndRewardsEmptyRewards.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm empty dynamics text':
                await this.dynamicsAndRewards.dynamicsAndRewardsEmptyDynamics.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm rewards detail total':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailTotal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm rewards detail paragraph':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm rewards detail link rewards history':
                await this.dynamicsAndRewards.dynamicsAndRewardsRewardDetailLinkRewardsHistory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification rewards text':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationRewardsText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mgm bonification info box':
                await this.dynamicsAndRewards.dynamicsAndRewardsBonificationDetailInfoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    message: `Element ${item} IS NOT DEFINED for [MEMBER GET MEMBER]`,
                    key: item,
                    args: arguments[0]
                });
        }
    }

    async selectActionBtn(action) {
        await this.dynamicsAndRewards.pressDynamicAndRewardBtn(action);
    }

    async accessToRegistrationForm(){
        await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailRegisterButton.waitForDisplayed({timeout: config.wait.M});
        await this.dynamicsAndRewards.dynamicsAndRewardsOfferDetailRegisterButton.click();
    }

}

export default new MemberGetMember();
