import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class PayrollPortabilityReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'PayrollPortabilityReview',
            root: '#cells-template-payrollPortabilityReview[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    },
                },

                //Successful screen
                operationDate:
                    'cells-successful-response div.main-text-head.bold > cells-atom-date #date',
                newPayrollTitle:
                    'cells-successful-response #body-section ul li.new-payroll-title div.key-value-container span.key',
                newPayrollName:
                    'cells-successful-response #body-section ul li.new-payroll-name div.key-value-container span.value',
                newPayrollNumber:
                    'cells-successful-response #body-section ul li.new-payroll-number div cells-molecule-mask div.wrapper',
                oldPayrollTitle:
                    'cells-successful-response #body-section ul li.old-payroll-title div.key-value-container span.key',
                oldPayrollName:
                    'cells-successful-response #body-section ul li.old-payroll-name div.key-value-container span.value',
                oldPayrollNumber:
                    'cells-successful-response #body-section ul li.old-payroll-number div cells-molecule-mask div.wrapper',
                operationNumberTitle:
                    'cells-successful-response #body-section ul li.folio div.key-value-container span.key',
                folio: 'cells-successful-response #body-section ul li.folio div.key-value-container span.value',
                bbvaLabel:
                    'cells-successful-response #body-section ul li.bbva div.key-value-container span.value',
                iconMessage:
                    'cells-successful-response #body-section div.message cells-icon-message',
                exitBtn: 'cells-successful-response #primaryBtn',
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item}) {
        const value= !this.isSpherica();
        switch (item.toLowerCase()) {
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll title':
                await this.newPayrollTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll name':
                await this.newPayrollName.waitForDisplayed({timeout: config.wait.L, reverse: value});
                break;
            case 'new payroll number':
                await this.newPayrollNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'old payroll title':
                await this.oldPayrollTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'old payroll name':
                await this.oldPayrollName.waitForDisplayed({timeout: config.wait.L, reverse: value});
                break;
            case 'old payroll number':
                await this.oldPayrollNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation number title':
                await this.operationNumberTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'folio':
                await this.folio.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'bbva label':
                await this.bbvaLabel.waitForDisplayed({timeout: config.wait.L, reverse: value});
                break;
            case 'info icon message':
                await this.iconMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.L, reverse: value});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PayrollPortabilityReview();
