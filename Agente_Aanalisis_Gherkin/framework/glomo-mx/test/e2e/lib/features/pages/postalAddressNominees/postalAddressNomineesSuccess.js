import AbstractGlomoPage from '../abstract-glomo-page';
import {ElementNotFoundError, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class PostalAddressNomineesSuccess extends AbstractGlomoPage {
    
    constructor(){
        const content = 'li[data-selector="cells-successful-response-top-info-"]';
        super({
            root: '#cells-template-postalAddressNomineesReceipt[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    }
                },
                successIcon: '.cells-contact-avatar__image',
                successTitle: 'div[data-selector="cells-successful-response-main-title"] span:first-child',
                date: '.main-title-date #date',
                successSubtitle: `${content}:nth-child(1)`,
                addressTitle: `${content}:nth-child(2)`,
                address: `${content}:nth-child(3)`,
                folioTitle: `${content}:nth-child(4)`,
                folio: `${content}:nth-child(5)`,
                mailTitle: `${content}:nth-child(6) .key`,
                mail: `${content}:nth-child(6) .value`,
                acceptBtn: '#primaryBtn'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item} = {}){ 
        switch(item.toLowerCase()) {
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success subtitle':
                await this.successSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address title':
                await this.addressTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address':
                await this.address.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mail title':
                await this.mailTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mail':
                await this.mail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});    
        }
    }

    async exitPostalAddressSuccess({button}){
        switch(button.toLowerCase()){
            case 'x':
                await (await this.header.secondaryBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept button':
                await (await this.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new ElementNotFoundError(`Exit option not found ${button}`);
        }
    }
}
export default new PostalAddressNomineesSuccess();
