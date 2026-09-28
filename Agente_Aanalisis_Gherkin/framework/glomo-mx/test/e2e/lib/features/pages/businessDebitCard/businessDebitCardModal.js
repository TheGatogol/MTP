import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class BusinessDebitCardModal extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-noClientBusinessDebitCardInfo[state="active"]',
            elements: {
                title: '.header__title',
                headerRighButton: '#btnRight cells-atom-icon',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                subtitle: 'cells-key-values.center.key-bold.dl-reversed',
                button: '#primaryBtn'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'title':
                await this.title.waitForDisplayed();
                break;
            case 'header right button':
                await this.headerRighButton.waitForDisplayed();
                break;
            case 'subtitle':
                await this.subtitle.waitForDisplayed();
                break;
            case 'button':
                await this.button.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new BusinessDebitCardModal();
