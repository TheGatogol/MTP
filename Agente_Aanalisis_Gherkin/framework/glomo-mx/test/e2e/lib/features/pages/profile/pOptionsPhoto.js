import {page, ElementValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('optionsPhoto')
class OptionsPhoto extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-updateAddressOptionsPage[state="active"]',
            elements: {
                closeX: 'cells-molecule-header #btnRight',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },

                // Choose or take photo page, after to Voucher Info page
                optionsPhotoTitle: 'cells-step-link-list #stepContainer div',
                optionsPhotoDescription: 'cells-step-link-list #stepContainer > div.full > p',
                choosePhotoOption: 'cells-step-link-list #stepContainer > div.full > div:nth-child(4)',
                takePhotoOption: 'cells-step-link-list #stepContainer > div.full > div:nth-child(5)',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'options photo title':
                await this.optionsPhotoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'options photo description':
                await this.optionsPhotoDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'choose photo option':
                await this.choosePhotoOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'take photo option':
                await this.takePhotoOption.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectOption({option}) {
        switch (option.toLowerCase()) {
            case 'take photo':
                await this.takePhotoOption.waitForDisplayed({timeout: config.wait.M});
                await this.takePhotoOption.click({timeout: config.wait.M});
                break;
            case 'choose photo':
                await this.choosePhotoOption.waitForDisplayed({timeout: config.wait.M});
                await this.choosePhotoOption.click({timeout: config.wait.L});
                break;
            default:
                throw new Error(`${option} option is not available.`);
        }
    }

    async goBack() {
        await this.closeX.waitForClickable({timeout: config.wait.M});
        await this.closeX.click();
    }
}

export default new OptionsPhoto();
