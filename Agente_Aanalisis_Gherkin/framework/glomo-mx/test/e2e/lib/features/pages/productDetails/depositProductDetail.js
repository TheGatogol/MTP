import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import ProductDetail from '../productDetails/productDetail';

@page()
class DepositProductDetail extends ProductDetail {
    constructor() {
        super({
            root: '#cells-template-deposit[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                productSummary: 'cells-product-summary-deposit-spherica',
                depositAlias: 'cells-product-summary-deposit-spherica cells-product-summary-spherica .summary-content #headerText',
                balanceLabel: 'cells-product-summary-deposit-spherica .main-items cells-key-values-spherica .key',
                moreInfoButton: 'cells-product-summary-deposit-spherica #moreInfoButton',
                maskedAmount: 'cells-product-summary-deposit-spherica',
            },
            requiredElements: [
                'productSummary'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'deposit alias':
                await this.depositAlias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'balance label':
                await this.balanceLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info button':
                await this.moreInfoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'masked amount':
                await this.maskedAmount.waitForDisplayed({timeout: config.wait.M});
                await this.maskedAmount.waitForProperty({property: 'maskedAmount', value: true, timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new DepositProductDetail();
