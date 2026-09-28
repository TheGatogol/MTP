import * as DictionarySelector from '../../../utils/dictionarySelector';

import {Commands, page} from '@csqe/radish';

import CellsCheckboxButton from '../../../components/cells-checkbox-button';
import ContinueButton from '../components/diy-multistep-continue-actions';
import DiyMultiStepComponentObject from '../diyMultiStepComponentObject';

const flowData = {
    name: 'fundAddNewContract',
    root: '#cells-template-addFundToContract[state="active"]',
    elements: {
        multiStep: {
            properties: {
                OTPsign: true,
                stepList: ['stepOffer', 'stepAccount', 'stepFundList', 'stepAmount', 'stepTermsAndConditions', 'stepSummary']
            },
            stepOffer: {
                properties: {
                    root: 'cells-safe-card-offer-page',
                    elementsDictionary: {
                        'benefits': 'benefits.list',
                        'benefits title': 'benefits.title'
                    }
                },
                benefits: {
                    properties: {root: '.offer-description'},
                    title: 'cells-atom-subheader',
                    list: 'cells-lists',
                },
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    }
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '.next-button'}
                    }
                }
            },
            stepAccount:{
                properties: {
                    root: '#step-add-fund-to-contract-account-selector',
                    elementsDictionary: {
                        'title': 'title',
                        'description': 'description',
                        'account': 'account'
                    }
                },
                title: '.cells-step__header-title',
                description: '.cells-step-product-selector__header',
                account: 'cells-product-item#oneProductItem',
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    }
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton
                    }
                }
            },
            stepFundList: {
                properties: {
                    root: '#step-add-fund-to-contract-fund-selection',
                    elementsDictionary: {
                        'title': 'title',
                        'description': 'description',
                        'fund list': 'fundList',
                        'fund item': 'fundItem'
                    }
                },
                title: '.cells-step__header-title',
                description: '.description',
                fundList: 'cells-product-selector',
                fundItem: 'cells-product-item[data-index="0"] div.item',
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    }
                }
            },
            stepAmount: {
                properties: {
                    root: 'cells-step-simulation-operation',
                    elementsDictionary: {
                        'title': 'stepTitle',
                        'description': 'description',
                        'subscription amount': 'amount'
                    }
                },
                stepTitle: '.cells-step__header-title',
                description: '.cells_step_enter_limited_amount__description',
                amount: '.content-input #input',
                enterAmount: 'cells-st-button #enterAmountBtn',
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    },
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '.secondary', elementSuffix: '#primaryBtn'},
                    }
                }
            },
            stepTermsAndConditions: {
                properties: {
                    root: '#step-add-fund-to-contract-checklist-contract',
                    elementsDictionary: {
                        'title': 'stepTitle',
                        'description': 'description',
                        'contract icon': 'contractIcon',
                        'contract link': 'contractLink',
                        'check list': 'checkList',
                    }
                },
                stepTitle: '.cells-step__header-title',
                description: '.cells-step-card-checklist-contract-header-section',
                contractIcon: '.file-list-section iron-icon',
                contractLink: '.file-list-section .body__text',
                checkList: '.checkbox-list-section',
                consentCheck: {
                    component: {
                        ComponentClass: CellsCheckboxButton,
                        args: {
                            root: {
                                web: 'cells-checkbox-button:nth-of-type(1)',
                                isWithoutRoot: false,
                            }
                        }
                    }
                },
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    }
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '.secondary'}
                    }
                }
            },
            stepSummary: {
                properties: {
                    root: '#add-fund-to-contract-summary-section',
                    elementsDictionary: {
                        'title': 'stepTitle',
                        'contribution amount': 'contributionAmount'
                    }
                },
                stepTitle: '#operationTotal',
                contributionAmount: 'cells-atom-amount',
                collapsed: {
                    properties: {
                        root: 'cells-step[collapsed]'
                    },
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '.primary'}
                    }
                },
            }
        }
    },
    elementsSpherica: {
        multiStep: {
            stepOffer: {
                properties: {
                    root: 'cells-safe-card-offer-page-spherica',
                },
                benefits: {
                    list: 'cells-lists-spherica',
                },
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '-spherica.next-button'}
                    }
                }
            },
            stepAccount: {
                account: 'cells-product-item-spherica#oneProductItem',
                continueButton: {
                    component: {
                        ComponentClass: ContinueButton,
                        args: {attributes: '-spherica.primary'}
                    }
                }
            },
            stepFundList: {
                fundList: 'cells-product-selector-spherica'
            }
        }
    }
};

@page()
class FundAddNewContractMultiStep extends DiyMultiStepComponentObject {

    constructor() {
        super('fundAddNewContract', flowData);
    }

    async HappyPathActions(Step) {
        switch (Step) {
            case 'stepFundList':
                await this.multiStep.stepFundList.fundItem.waitForDisplayed();
                await this.multiStep.stepFundList.fundItem.click();
                break;
            case 'stepAmount':
                await this.simulateAmountContribution();

                // Wait for simulation process
                await Commands.pause({time: config.wait.S});
                if (await this.multiStep.stepAmount.continueButton.isDisplayed()) {
                    await this.HappyPathActions('stepTermsAndConditions');
                }
                break;
            case 'stepTermsAndConditions':
                await this.acceptTermsConditions();
                break;
            default:
                break;
        }
    }

    async _stepsValidation({element, _args} = {}) {
        const actualStepName = _args.targetStep ? this.camelCased(`step ${  _args.targetStep}`) : this.currentStep;
        const actualStep = this.multiStep[actualStepName];

        switch (element) {
            case 'disabled continue button':
                await actualStep.continueButton.waitForDisabled();
                break;
            case 'lo quiero button':
                await actualStep.continueButton.waitForDisplayed();
                break;
            default:
                assert(await DictionarySelector.checkElementFromDict(element, actualStep, _args),
                    `Element "${element}" not found in "${actualStepName}" step.`);
        }
    }

    async simulateAmountContribution() {
        await this.multiStep.stepAmount.amount.setValue({value: 500});
        await this.multiStep.stepAmount.enterAmount.waitForClickable();
        await this.multiStep.stepAmount.enterAmount.click();
    }

    async acceptTermsConditions() {
        try {
            const consentCheck = await this.multiStep.stepTermsAndConditions.consentCheck.checkbox.waitForNotChecked();
            if (!consentCheck) {
                await this.multiStep.stepTermsAndConditions.consentCheck.checkbox.click();
            }
            await this.multiStep.stepTermsAndConditions.continueButton.button.click();
        } catch (error) {
            console.error('Error accepting terms and conditions:', error);
        }
    }

    async confirmContribution() {
        await this.multiStep.stepSummary.continueButton.waitForDisplayed();
        await this.multiStep.stepSummary.continueButton.click();
    }

    async completeOTP() {
        await this.fillOtp('12345678');
    }
}

export default new FundAddNewContractMultiStep();
