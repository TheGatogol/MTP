import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';
@page('ReceiptPayments')
class ReceiptPayments extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-servicePayment[state="active"]',
            elements: {
                back: 'cells-molecule-header #btnLeft',
                header: 'cells-molecule-header',
            },
            requiredElements: [
                'header', 'back'
            ],
        });
    }

}

export default new ReceiptPayments();
