import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

//Components
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class FaqDetailPoints extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsRedeemFaq[state="active"]',
            elements: {

                //Header
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                title: 'cells-atom-subheader-spherica div.left-field',
                faqInformation1: 'cells-product-item-spherica[data-selector="faqs-points-redeem-text-one - "]',
                faqInformation2: 'cells-product-item-spherica[data-selector="faqs-points-redeem-text-two - "]',
                faqInformation3: 'cells-product-item-spherica[data-selector="faqs-points-redeem-text-three - "]',
                list: 'cells-product-selector-spherica .product-wrapper.separators cells-product-item-spherica'
            },
            requiredElements: [
                'header',
                'faqInformation1'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header faq title':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay with points title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faq information':
                await this.faqInformation1.waitForDisplayed({timeout: config.wait.M});
                await this.faqInformation2.waitForDisplayed({timeout: config.wait.M});
                await this.faqInformation3.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async accessToSomeFaq() {
        const faqsList = await this.list.elements();
        await faqsList.value[0].waitForDisplayed({timeout: config.wait.L});
        await faqsList.value[0].click();
    }

    async closeFaqs() {
        await (await (await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }
}

export default new FaqDetailPoints();

