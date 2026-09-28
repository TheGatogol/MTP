import AbstractGlomoPage from '../abstract-glomo-page';
import CellsCardAdvice from '../../components/cells-card-advice';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('OcPayrollPortabilityWrongBirthDate')
class OcPayrollPortabilityWrongBirthDate extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocPayrollPortabilityWrongBirthDate[state="active"]',
            elements: {
                cardAdvice: CellsCardAdvice
            },
            requiredElements: [
                'cardAdvice',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'wrong image':
                await this.cardAdvice.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wrong birth date title':
                await this.cardAdvice.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'wrong birth date text':
                await this.cardAdvice.text.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OcPayrollPortabilityWrongBirthDate();
