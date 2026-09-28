import AbstractGlomoPage from '../abstract-glomo-page';
import CellsCardAdvice from '../../components/cells-card-advice';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class PayrollPortabilityWrongBirthDate extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'PayrollPortabilityWrongBirthDate',
            root: '#cells-template-payrollPortabilityWrongBirthDate[state="active"]',
            elements: {
                cardAdvice: {
                    component: {
                        ComponentClass: CellsCardAdvice,
                    },
                },
            },
            requiredElements: ['cardAdvice'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'wrong image':
                await this.cardAdvice.image.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date title':
                await this.cardAdvice.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date text':
                await this.cardAdvice.text.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PayrollPortabilityWrongBirthDate();
