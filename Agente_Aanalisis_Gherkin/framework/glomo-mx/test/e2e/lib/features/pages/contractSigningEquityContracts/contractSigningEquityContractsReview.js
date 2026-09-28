import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ContractSigningEquityContractsReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deferredSignatureEquityContractReview[state="active"]',
            elements: {
                successfulContractReview: {
                    properties: {
                        root: '[data-tag-name="bbva-multistep-deferred-signature-spherica"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader',
                    closeButton: '#btn-close',
                    iconSuccess: '.panel-success [data-tag-name="bbva-type-icon"]',
                    textSuccess: '.panel-success [data-tag-name="bbva-type-text"]',
                    list: '.list-description-bg div:nth-child(__INDEX__)',
                }
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'header successful':
                await this.successfulContractReview.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button successful':
                await this.successfulContractReview.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon successful':
                await this.successfulContractReview.iconSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text successful':
                await this.successfulContractReview.textSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product name successful':
                await this.successfulContractReview.list.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account associated successful':
                await this.successfulContractReview.list.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number successful':
                await this.successfulContractReview.list.specifySelector({placeholder: '__INDEX__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number successful':
                await this.successfulContractReview.list.specifySelector({placeholder: '__INDEX__', value: 4}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date and time successful':
                await this.successfulContractReview.list.specifySelector({placeholder: '__INDEX__', value: 5}).waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async closeSuccessModal() {
        await this.successfulContractReview.closeButton.waitForDisplayed({timeout: config.wait.M});
        await this.successfulContractReview.closeButton.click();
    }
}

export default new ContractSigningEquityContractsReview();
