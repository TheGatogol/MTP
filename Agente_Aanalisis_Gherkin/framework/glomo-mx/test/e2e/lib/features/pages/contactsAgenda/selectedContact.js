import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class SelectedContact extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-transfers[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                recipientSelector: 'cells-step-recipient-selector-spherica#transfer-destination',
                currencyOperation: 'glomo-step-foreign-currency-operation-spherica'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'recipient selector':
                await this.recipientSelector.waitForDisplayed();
                break;
            case 'currency selector':
                await this.currencyOperation.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new SelectedContact();
