import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
@page()
class NCreditLineIncrease extends AbstractGlomoPage {
    constructor() {
        super({
            root:'#cells-template-nCreditLineIncrease[state="active"]',
            elements: {
                featureComponent: 'bbva-feature-credit-card-line-increase-mx',
                modalIncrement: [
                    BbvaHelpModal, {
                        prefix: '[data-tag-name="bbva-feature-credit-card-line-increase-mx"]',
                        modifiers: '#creditCardLineIncrease',
                        additionalElements: {
                            expandableBenefits: '[data-tag-name="bbva-expandable-accordion"]#accordionBenefits',
                            expandableUpdate: '[data-tag-name="bbva-expandable-accordion"]#accordionInformation',
                            contentIncrement: '[data-tag-name="bbva-type-text"]#descriptionInformation',
                        },
                    }
                ],
            },
            requiredElements: ['__root'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header main':
                await this.modalIncrement.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accordion benefits':
                await this.modalIncrement.additionalElements.expandableBenefits.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content increment':
                await this.modalIncrement.additionalElements.contentIncrement.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async sendPushNotification() {
        const {pushNILC} = global.user;
        await this.featureComponent.execute({
            script: (data) => this.handleOfferFromDeepLink(data),
            args: [pushNILC]
        });
    }

    async openAccordion(option) {
        this.sendPushNotification();
        if (!option.toLowerCase().includes('analytics credit')) {
            switch (option.toLowerCase()) {
                case 'credit line increase nilc':
                    await this.modalIncrement.additionalElements.expandableBenefits.waitForDisplayed({timeout: config.wait.M});
                    await this.modalIncrement.additionalElements.expandableBenefits.click();
                    break;
                case 'remember credit line increase nilc':
                    await this.openAccordion('credit line increase nilc');
                    await this.modalIncrement.additionalElements.expandableUpdate.waitForDisplayed({timeout: config.wait.M});
                    await this.modalIncrement.additionalElements.expandableUpdate.click();
                    break;
                default:
                    throw new Error(`Error, invalid option ${option.toLowerCase()}.`);
            }
        }
    }
}

export default new NCreditLineIncrease();
