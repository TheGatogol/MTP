import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page('deferredSignatureStructuredReview')
class DeferredSignaturePurchaseInstructionReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deferredSignaturePurchaseInstructionReview[state="active"]',
            elements: {
                bbvaHeaderMainSection: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            root: `${BbvaHeaderMain._baseRoot}`,
                        },
                    },
                },
                //Success screen
                message:'[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"]',
                footerBtnSuccess: '[data-tag-name="bbva-panel-button-fixed"]',
            },
            requiredElements: [
                'bbvaHeaderMainSection',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'success header':
                await (await this.bbvaHeaderMainSection.text.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success header button':
                await (await this.bbvaHeaderMainSection.buttonRightPrimary.elements()).value[0].waitForDisplayed({timeout: config.wait.L});
                break;
            case 'success message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success footer button':
                await this.footerBtnSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new DeferredSignaturePurchaseInstructionReview();
