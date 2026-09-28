import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';

@page()
class ParkingEnrollmentSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parkingEnrollmentSuccess[state="active"]',
            elements: {
                header: BbvaHeaderMain,
                successImg: '[data-tag-name="bbva-panel-info"] div.image',
                successTitle: '[data-tag-name="bbva-panel-info"] div.content [data-tag-name="bbva-text"]',
                dateOperation: '[data-tag-name="bbva-text"]#successDate',
                operator: '[data-tag-name="bbva-list-simple"]#successProvider',
                agreement: '[data-tag-name="bbva-list-simple"]#successAgreement',
                reference: '[data-tag-name="bbva-list-simple"]#successPhoneNumber',
                alias: '[data-tag-name="bbva-list-simple"]#successAlias',
                typeOperation: '[data-tag-name="bbva-list-simple"]#successOperation',
                rechargeBtn: '[data-tag-name="bbva-button-row"]#callButton',
                exitBtn: '[data-tag-name="bbva-button-default"]'
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                successImg: '[data-tag-name="bbva-panel-info-spherica"] div.image bbva-type-icon',
                successTitle: '[data-tag-name="bbva-panel-info-spherica"] div.content [data-tag-name="bbva-type-text"]',
                dateOperation: '[data-tag-name="bbva-list-simple-spherica"]#successDateOperation',
                operator: '[data-tag-name="bbva-list-simple-spherica"]#successProvider',
                agreement: '[data-tag-name="bbva-list-simple-spherica"]#successAgreement',
                reference: '[data-tag-name="bbva-list-simple-spherica"]#successPhoneNumber',
                alias: '[data-tag-name="bbva-list-simple-spherica"]#successAlias',
                typeOperation: '[data-tag-name="bbva-list-simple-spherica"]#successOperation',
                rechargeBtn: '[data-tag-name="bbva-button-row-spherica"]#callButton'
            },
            requiredElements: [
                'header'
            ],
            defaultSphericaElements: ['GlomoAlertManager']
        });
    }

    async accessToRecharge() {
        await this.rechargeBtn.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'success image':
                await this.successImg.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.successTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date operation':
                await this.dateOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'supplier':
                await this.operator.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'agreement':
                await this.agreement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number reference':
                await this.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account alias':
                await this.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'type operation':
                await this.typeOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recharge button':
                await (await this.rechargeBtn.scrollIntoView({block: 'nearest'})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button': {
                const value= this.isSpherica();
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M, reverse: value});
                break;
            }
            case 'icon image':
                await this.errorDialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error title':
                await this.errorDialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error text':
                await this.errorDialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry button':
                await this.errorDialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.errorDialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal duplicate account warning':
                await this.dialogOperations.containerMinimized.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change number button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ParkingEnrollmentSuccess();
