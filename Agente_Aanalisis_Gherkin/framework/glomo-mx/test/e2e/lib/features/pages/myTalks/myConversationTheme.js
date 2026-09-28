import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class MyConversationThemePage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-myConversationThemePage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                titleInput: 'glomo-conversation-option cells-molecule-input #input',
                createButton: 'glomo-conversation-option div div.button-footer cells-st-button button'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessChat() {
        await this.createButton.waitForEnabled();
        await this.createButton.click();
    }

    async enterConversationTitle(title) {
        await this.titleInput.waitForDisplayed();
        await this.titleInput.setValue({value: title});
    }
}

export default new MyConversationThemePage();
