import {Element, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

//Components
import CellsAtomSubheader from '../../components/cells-atom-subheader';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class PointsRaffleFaq extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsRaffleFaq[state="active"]',
            elements: {

                header: CellsMoleculeHeader,
                subHeader: CellsAtomSubheader,
                list: 'cells-product-selector .product-wrapper.separators cells-product-item',
                faq: 'cells-product-item[data-selector="faqs-points-raffle-text-__FAQ__ - "]',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}) {

        switch (item.toLowerCase()) {
            case 'faqs title':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'points redemption title':
                await this.subHeader.titleSpan.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'questions list':
                await this.list.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async accessToSomeFaq() {
        const faqsList = await this.list.elements();
        await new Element({
            selector: faqsList.value[0],
            _container: this,
        }).waitForDisplayed({timeout: config.wait.L});
        await new Element({
            selector: faqsList.value[0],
            _container: this,
        }).click();
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal cam be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'points redemption title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'question title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'answer':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async accessQuestion(question) {
        if (question.toLowerCase() === 'two' || question.toLowerCase() === 'three' || question.toLowerCase() === 'four') {
            await (await (await this.faq.specifySelector({placeholder: '__FAQ__', value: question.toLowerCase()}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else
            throw new Error(`${question} option is not available.`);
    }
}

export default new PointsRaffleFaq();

