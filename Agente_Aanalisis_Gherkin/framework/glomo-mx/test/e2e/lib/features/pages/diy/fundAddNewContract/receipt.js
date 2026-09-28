import * as DictionarySelector from './../../../utils/dictionarySelector';
import {page} from '@csqe/radish';
import AbstractGlomoPage from './../../abstract-glomo-page';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';

@page()
class FundsContributionReceipt extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'fundAddNewContractReview',
            root: '#cells-template-addFundToContractReview',
            elements: {
                moleculeHeader: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                        args: {
                            root: 'cells-molecule-header[slot="app__header"]'
                        }
                    }
                },
                header: {
                    properties: {root: '#header-section'},
                    status: 'h2.title',
                    date: 'cells-atom-date',
                    subscriptedAmount: 'cells-atom-amount.amount-huge-decimals'
                },
                main: {
                    properties: {root: '#body-section .additional-info'},
                    disclaimer: {
                        properties: {root: 'cells-icon-message'},
                        icon: 'iron-icon',
                        message: '.message'
                    },
                    destinationEmail: 'cells-molecule-mask'
                },
                exitButton: '.actions #primaryBtn'
            },
            requiredElements: [
                'header.__root'
            ]
        });

        this.properties = {
            elementsDictionary: {
                'receipt title': 'moleculeHeader.operativeTitle',
                'status of the operation': 'header.status',
                'date and hour of the operation': 'header.date',
                'exit button': 'exitButton',
                'subscripted amount': 'header.subscriptedAmount',
                'disclaimer info': 'main.disclaimer.message',
                'destination email': 'main.destinationEmail'
            }
        };
    }

    closeOperative() {
        this.moleculeHeader.doClose();
    }

    async _screenValidation({element, _args} = {}) {
        switch (element.toLowerCase()) {
            default:
                assert(await DictionarySelector.checkElementFromDict(element, this, _args),
                    `Element "${element}" not found in receipt step.`);
        }
    }
}

export default new FundsContributionReceipt();
