import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsModalSelector from '../../components/cells-modal-selector';
import CellsStepProductSelector from '../../components/cells-step-product-selector';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsSummaryView from '../../components/cells-summary-view';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('ocPayrollPortability')
class OcPayrollPortability extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocPayrollPortability[state="active"]',
            elements: {
                offerPageStep: 'glomo-step-offer-page',
                header: CellsMoleculeHeader,
                dialogOperations: GlomoAlertManager,
                modalList: CellsModalSelector,
                accountSelector: CellsStepProductSelector,
                summaryView: CellsSummaryView,
                startButton: '#glomo-step-offer-page #footer div cells-st-button button',
                panelinfo: '#glomo-step-offer-page #header div.key-value.core-blue cells-image-text-amount-cover',
                considerationsTitle: 'bbva-feature-payroll-portability #first-modal #offer-modal #helpModalHeader #text',
                considerationsList: 'bbva-feature-payroll-portability #first-modal #offer-modal .transition-container .modal-main',
                benefitsTitle: 'bbva-feature-payroll-portability #first-modal #offer-modal bbva-type-text[text="payroll-portability-account-benefits-section-title"]',
                benefitsList: 'bbva-feature-payroll-portability #first-modal #offer-modal .content',
                considerationsTitleLegacy: '.characteristics-title',
                considerationsListLegacy: '.characteristics-list',
                benefitsTitleLegacy: '.microillustration-title',
                benefitsListLegacy: '.benefits-list',
                textInput: 'cells-step-form-text-select #text input',
                selectBank: 'cells-step-form-text-select #select-modal cells-st-button',
                stepTextSelectContinueBtn: 'cells-step-form-text-select div.buttons cells-st-button',
                productSelectorContinueBtn: 'cells-step-product-selector div.recipient-wrapper-full cells-st-button',
                checkBoxButton: 'cells-step-card-checklist-contract main section cells-checkbox-button',
                checkListContractContinueBtn: 'cells-step-card-checklist-contract main cells-st-button',
            },
            elementsSpherica: {
                header: '#offer-modal bbva-header-main',
                offerPageStep: '#offer-modal',
                startButton: '#offer-modal bbva-button-default:not(.link)',
                panelinfo: '#offer-modal bbva-clip-microillustration img',
                birthDateCorfirmButton: 'bbva-feature-payroll-portability-birthday-modal bbva-button-default:not(.link)',
                birthDateWrongButton: 'bbva-feature-payroll-portability-birthday-modal bbva-button-default.link',
                textInput: '#multistep-modal #cardNumberInput input',
                selectBank: '#multistep-modal #current-payroll-step bbva-form-select',
                modalBankItem: '[data-tag-name="bbva-form-select"] bbva-form-option[id="_BANKID_"]',
                stepTextSelectContinueBtn: '#multistep-modal #current-payroll-step .button-container bbva-button-default[variant="primary"]',
                productSelectorContinueBtn: '#multistep-modal #new-payroll-step .button-container bbva-button-default[variant="primary"]',
                checkBoxButton: '#terms-and-conditions-step #input',
                checkListContractContinueBtn: '#terms-and-conditions-step .button-container bbva-button-default[variant="primary"]',
                summaryView: '#multistep-modal #bbva-feature-payroll-portability-multistep .button-container-complete [data-tag-name="bbva-button-default"]',
                operationDate: '.key-value-list-item:nth-of-type(1) bbva-type-text.key-value-list-item-value',
                newPayrollTitle: '.key-value-list-item:nth-of-type(2) bbva-type-text:not(.key-value-list-item-value)',
                newPayrollNumber: '.key-value-list-item:nth-of-type(2) bbva-type-text.key-value-list-item-value',
                oldPayrollTitle: '.key-value-list-item:nth-of-type(3) bbva-type-text:not(.key-value-list-item-value)',
                oldPayrollNumber: '.key-value-list-item:nth-of-type(3) bbva-type-text.key-value-list-item-value',
                operationNumberTitle: '[text="payroll-portability-success-folio-label"]',
                folio: '.key-value-list-item:nth-of-type(4) bbva-type-text.key-value-list-item-value',
                iconMessage: 'bbva-notification-message',
                accountItem: '#new-payroll-step .content payroll-portability-account-item[number="_NUMBER_"]',
                wrongDate: {
                    properties: {
                        root: 'bbva-feature-payroll-portability-birthday-incorrect-modal'
                    },
                    image: ' bbva-type-icon.title-icon',
                    title: 'h2.text',
                    text: 'div.content[slot="slot-content"] bbva-type-text[tag="p"]',
                },
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async startProcess() {
        await (await (await this.startButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectBirthDate(confirms) {
        if (confirms) {
            if (this.isSpherica()) {
                await this.birthDateCorfirmButton.waitForClickable();
                await this.birthDateCorfirmButton.click();
            } else {
                await (await (await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
            }
        } else {
            if (this.isSpherica()) {
                await this.birthDateWrongButton.waitForClickable();
                await this.birthDateWrongButton.click();
            } else {
                await (await (await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
            }
        }
    }

    async fillCurrentPayroll(accountType) {
        if (accountType === 'card number') {
            await this.textInput.waitForDisplayed();
            await this.textInput.waitForClickable();
            await this.textInput.setValue({value: '5849304958574323'});
        } else {
            await this.textInput.waitForDisplayed();
            await this.textInput.setValue({value: '584930495857432397'});
        }
        await (await (await this.selectBank.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if (this.isSpherica()) {
            const bankItem = this.modalBankItem.specifySelector({placeholder: '_BANKID_', value: global.user.bankId});
            await bankItem.scrollIntoView();
            await bankItem.waitForDisplayed();
            await bankItem.click();
        } else {
            await this.modalList.selectItem(global.user.bankId);
        }
        await (await (await this.stepTextSelectContinueBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectAccount(account) {
        if (account === 'unique') {
            await (await (await this.productSelectorContinueBtn.waitForDisplayed({timeout: config.wait.M}))
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            if (this.isSpherica()) {
                const account = this.accountItem.specifySelector({placeholder: '_NUMBER_', value: global.user.products.accounts[1].number});
                await account.waitForDisplayed();
                await account.click();
            } else {
                await this.accountSelector.selectAccount(global.user.products.accounts[1].number);
            }
        }
    }

    async acceptTerms() {
        await (await (await this.checkBoxButton.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await (await this.checkListContractContinueBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async confirmSummary() {
        if (this.isSpherica()) {
            await this.summaryView.waitForDisplayed();
            await this.summaryView.click();
        } else {
            await this.summaryView.goNext();
        }
    }

    async signOperation() {
        const { otp } = global.user;
        await this.fillOtp(otp);
    }

    async requestOffer(account) {
        await this.startProcess();
        await this.selectBirthDate(true);
        await this.selectAccount(account);
        await this.fillCurrentPayroll('card number');
        await this.acceptTerms();
        await this.confirmSummary();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'offer page':
                await this.offerPageStep.waitForDisplayed();
                break;
            case 'panel info image':
                await this.panelinfo.waitForDisplayed();
                break;
            case 'considerations title':
                await this.considerationsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'considerations list':
                await this.considerationsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits title':
                await this.benefitsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits list':
                await this.benefitsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'start process button':
                await this.startButton.waitForDisplayed();
                break;
            case 'payroll portability in progress alert':
                await this.dialogOperations.container.waitForDisplayed();
                break;
            case 'operation date':
                await this.operationDate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll title':
                await this.newPayrollTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'new payroll number':
                await this.newPayrollNumber.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'old payroll title':
                await this.oldPayrollTitle.waitForDisplayed({timeout: config.wait.L});
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
            case 'info icon message':
                await this.iconMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong image':
                await this.wrongDate.image.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date title':
                await this.wrongDate.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'wrong birth date text':
                await this.wrongDate.text.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }
}

export default new OcPayrollPortability();
