import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page('KycValidationHighRiskPage')
class KycValidationHighRisk extends AbstractGlomoPage{
    constructor(){
        super({
            root: '#cells-template-kycHighRisk[state="active"]',
            elements:{
                header: '[data-tag-name="bbva-header-main"] [class=" button-1 "] .header',
                closeButton: '[data-tag-name="bbva-header-main"] [class=" button-1 "] [id="btn-close"]',
                businessAbroadModalClose: '[id-modal="tooltip-modal-business-abroad"] [id="btn-close"]',
                legalRepresentativeTooltipClose: '[id-modal="tooltip-modal-legal-representative"] [id="btn-close"]',
                accountLoanTooltipClose: '[id-modal="tooltip-modal-account-loan"] [id="btn-close"]',
                onboardingModal: {
                    properties: {
                        root: '[id="kyc-high-risk-null"]'
                    },
                    header: '#helpModalHeader header',
                    title: ' .header',
                    icon: '[id="modal-micro-illustration-request"]',
                    contentModal: '[id="modal-content"]',
                    linkPrivacyNotice: '[data-tag-name="bbva-type-link"]',
                    closeButton: '[id="btn-close"]',
                    continueButton: '[class="modal-main"] [class="modal-footer "] [class="footer-button"]',
                },

                privacyModalScreen: {
                    properties: {
                        root: '[id="kyc-high-risk-simple"]'
                    },
                    privacyHeader: '#helpModalHeader header',
                    privacyModalContent: '[id="helpModalContent"]',
                    closeButton: '[id="btn-close"]',
                },

                accountUseStep: {
                    properties: {
                        root: '[data-tag-name="bbva-kyc-high-risk-account-use"]'
                    },
                    header: '.header [id="heading"]',
                    title: ' [class="use-account-header"] [data-tag-name="bbva-type-text"]',
                    legalRepresentative: '[id="bbva-kyc-high-risk-account-use-question-132"] [value="__N__"]',
                    legalRepresentativeTooltip: '[id="bbva-kyc-high-risk-account-use-question-132"] [class="label-out"] [data-tag-name="bbva-type-link"]',
                    accountLoan: '[id="bbva-kyc-high-risk-account-use-question-133"] [value="__N__"]',
                    accountLoanTooltip: '[id="bbva-kyc-high-risk-account-use-question-133"] [class="label-out"] [data-tag-name="bbva-type-link"]',
                    listBox: '[id="bbva-kyc-high-risk-account-use-question-136"] [id="button"]',
                    listBoxOption: '[id="bbva-kyc-high-risk-account-use-question-136"] [data-tag-name="bbva-form-select"] bbva-form-option:nth-child(__N__)',
                    continueButton: '[class="use-account-button-container"] [data-tag-name="bbva-button-default"]',
                },

                personalInformationStep: {
                    properties: {
                        root: '[id="step-personal-information"]',
                    },
                    title: '[id="heading"] [class="heading-label"]',
                    stepContainer: '[id="personal-information-step-container"]',
                    currentStep: '[id="heading"] [id="currentStep"]',
                    questionOne: '[id="bbva-information-personal-step-question-1"] [id="button"]',
                    questionOneOption: '[id="bbva-information-personal-step-question-1"] [data-tag-name="bbva-form-select"] bbva-form-option:nth-child(__N__)',
                    nameCouple: '[id="bbva-information-personal-step-question-137"]:nth-child(1) input',
                    lastNameCouple: '[id="bbva-information-personal-step-question-139"]:nth-child(2) input',
                    secondLastNameCouple: '[id="bbva-information-personal-step-question-138"]:nth-child(3) input',
                    dependentName: '[id="bbva-information-personal-step-question-137"]:nth-child(2) input',
                    dependentLastName:'[id="bbva-information-personal-step-question-139"]:nth-child(3) input',
                    dependentSecondLastName: '[id="bbva-information-personal-step-question-138"]:nth-child(4) input',
                    questionTwo: '[id="bbva-information-personal-step-question-140"] [id="button"]',
                    relationship: '[id="bbva-information-personal-step-question-141"]',
                    relationshipOption: '[id="bbva-information-personal-step-question-141"] [data-tag-name="bbva-form-option"]',
                    questionTwoOption: '[id="bbva-information-personal-step-question-140"] [data-tag-name="bbva-form-select"] bbva-form-option:nth-child(__N__)',
                    continueButton: '[id="btn-step-information-personal"]',
                    editLink: '[id="editButton"]',
                },

                workIncomeStep: {
                    properties: {
                        root: '[id="step-work-income"]',
                    },
                    title: '[id="heading"] [class="heading-label"]',
                    currentStep: '[id="heading"] [id="currentStep"]',
                    companyName: '[id="bbva-work-income-step-question-170"] input',
                    rfc: '[id="bbva-work-income-step-question-171"] input',
                    companyActivity: '[id="bbva-work-income-step-question-175"] input',
                    position: '[id="bbva-work-income-step-question-144"] input',
                    businessName: '[id="bbva-work-income-step-question-148"] input',
                    companyStreet: '[id="bbva-work-income-step-question-151"] input',
                    companyNumber: '[id="bbva-work-income-step-question-153"] input',
                    companyCp: '[id="bbva-work-income-step-question-155"] input',
                    companyPhone: '[id="bbva-work-income-step-question-159"] input',
                    governmentEntity: '[id="bbva-work-income-step-question-184"] input',
                    employmentMonths: '[id="bbva-work-income-step-question-142"] [value="__N__"]',
                    employmentPay: '[id="bbva-work-income-step-question-145"] [id="button"]',
                    employmentPayOption: '[id="bbva-work-income-step-question-145"] bbva-form-option:nth-child(__N__)',
                    employmentMoney: '[id="bbva-work-income-step-question-146"] [value="__N__"]',
                    jobActivity: '[id="bbva-work-income-step-question-149"] [id="button"]',
                    jobActivityOption: '[id="bbva-work-income-step-question-149"] bbva-form-option:nth-child(__N__)',
                    jobType: '[id="bbva-work-income-step-question-150"] [id="button"]',
                    jobTypeOption: '[id="bbva-work-income-step-question-150"] bbva-form-option:nth-child(__N__)',
                    jobAddress: '[id="add-optional-address-link"]',
                    jobCountry: '[id="bbva-work-income-step-question-154"] [id="button"]',
                    jobContryOption: '[id="bbva-work-income-step-question-154"] bbva-form-option:nth-child(__N__)',
                    jobState: '[id="bbva-work-income-step-question-157"] [id="button"]',
                    jobStateOption: '[id="bbva-work-income-step-question-157"] bbva-form-option:nth-child(__N__)',
                    monthlyIncome: '[id="bbva-work-income-step-question-160"] [id="button"]',
                    monthlyIncomeOption: '[id="bbva-work-income-step-question-160"] bbva-form-option:nth-child(__N__)',
                    originIncome: '[id="bbva-work-income-step-question-180"] [id="button"]',
                    originIncomeOption: '[id="bbva-work-income-step-question-180"] bbva-form-option:nth-child(__N__)',
                    relationshipType: '[id="bbva-work-income-step-question-183"] [id="button"]',
                    relationshipTypeOption: '[id="bbva-work-income-step-question-183"] bbva-form-option:nth-child(__N__)',
                    frequency: '[id="bbva-work-income-step-question-185"] [id="button"]',
                    frequencyOption: '[id="bbva-work-income-step-question-185"] bbva-form-option:nth-child(__N__)',
                    relationshipWithGovernment: '[id="bbva-work-income-step-question-181"] [value="__N__"]',
                    companyActivityListBox: '[id="bbva-work-income-step-question-172"] [id="button"]',
                    companyActivityOption: '[id="bbva-work-income-step-question-172"] bbva-form-option:nth-child(__N__)',
                    companyAge: '[id="bbva-work-income-step-question-173"] [id="button"]',
                    companyAgeOption: '[id="bbva-work-income-step-question-173"] bbva-form-option:nth-child(__N__)',
                    companyMembers: '[id="bbva-work-income-step-question-174"]',
                    companyMembersOption: '[id="bbva-work-income-step-question-174"] bbva-form-option:nth-child(__N__)',
                    companyLocated: '[id="bbva-work-income-step-question-176"] [id="button"]',
                    companyLocatedOption: '[id="bbva-work-income-step-question-176"] bbva-form-option:nth-child(__N__)',
                    companyState: '[id="bbva-work-income-step-question-157"] [id="button"]',
                    companyStateOption: '[id="bbva-work-income-step-question-157"] bbva-form-option:nth-child(__N__)',
                    companyStateOutside: '[id="bbva-work-income-step-question-177"] [id="button"]',
                    companyStateOutsideOption: '[id="bbva-work-income-step-question-177"] bbva-form-option:nth-child(__N__)',
                    resourceDestination: '[id="bbva-work-income-step-question-161"] [id="button"]',
                    resourceDestinationOption: '[id="bbva-work-income-step-question-161"] bbva-form-option:nth-child(__N__)',
                    businessAbroadTooltip: '[id="bbva-work-income-step-question-162"] [class="label-out"] [data-tag-name="bbva-type-link"]',
                    businessAbroad: '[id="bbva-work-income-step-question-162"] [value="__N__"]',
                    purposeOfAccount: '[id="bbva-work-income-step-question-163"] [id="button"]',
                    purposeOfAccountOption: '[id="bbva-work-income-step-question-163"] bbva-form-option:nth-child(__N__)',
                    purposeOfAccountMotive: '[data-tag-name="bbva-form-input"] textarea',
                    documentType: '[id="bbva-work-income-step-question-166"] [id="button"]',
                    documentTypeOption: '[id="bbva-work-income-step-question-166"] [data-tag-name="bbva-form-select"] bbva-form-option:nth-child(__N__)',
                    date: '[id="bbva-work-income-step-question-167"]',
                    uploadDocumentLink: '[id="document-upload-link"]',
                    continueButton: 'id="btn-step-work-income"',
                    editLink: '[id="editButton"]',
                },

                publicActivityStep: {
                    properties: {
                        root: '[id="step-public-activity"]',
                    },
                    title: '[id="heading"] [class="heading-label"]',
                    stepContainer: '[id="public-activity-step-container"]',
                    continuetButton: '[id="btn-step-public-activity"]',
                    politicalPosition: '[id="bbva-public-activity-step-question-187"] [value="__N__"]',
                    politicalPositionTooltip: '[id="bbva-public-activity-step-question-187"] [class="label-out"] [data-tag-name="bbva-type-link"]',
                    appointmentType: '[id="bbva-public-activity-step-question-188"] [id="button"]',
                    appointmentTypeTooltip: '[id="bbva-public-activity-step-question-188"] [aria-describedby="help-text"]',
                    appointmentTypeOption: '[data-tag-name="bbva-form-option"]',
                    positionType: '[id="bbva-public-activity-step-question-190"] [id="button"]',
                    positionTypeOption: '[id="bbva-public-activity-step-question-190"] bbva-form-option:nth-child(__N__)',
                    positionName: '[id="bbva-public-activity-step-question-191"] [id="button"]',
                    positionNameOption: '[id="bbva-public-activity-step-question-191"] bbva-form-option:nth-child(__N__)',
                    countryListBox: 'bbva-panel-container:nth-child(3) [id="bbva-public-activity-step-question-188"] [id="button"]',
                    countryToolTip: 'bbva-panel-container:nth-child(3) [id="bbva-public-activity-step-question-188"] [class="label-out"] [data-tag-name="bbva-button-default"]',
                    appointmentTypeModal: {
                        properties: {
                            root: '[id="kyc-high-risk-info"]',
                        },
                        closeButton: '[icon="spherica:close"]',
                    },
                },

                requirementsDocsModal: {
                    properties: {
                        root: '[id-modal="modal-help-requirements-docs"]',
                    },
                    icon: '[class="title-icon"]',
                    title: '[id="title-text"]',
                    content: '[class="modal-content"] [id="list-bullet"]',
                    closeButton: '[id="btn-close"]',
                    defaultButton: '[class="modal-footer "] [class="footer-button"]',
                },

                goToABranchModal: {
                    properties: {
                        root: '[data-tag-name="bbva-custom-full-modal-kyc"]',
                    },
                    helpModal: {
                        properties: {
                            root: '[id="kyc-high-risk-error"]'
                        },
                        header: '[id="heading"]',
                        closeButton: '[data-id="iconsRight"]',
                        title: '[id="helpModalTitle"]',
                        content: '[id="helpModalContent"]',
                        retryButton: '[data-tag-name="bbva-button-default"]'
                    }
                },
                tooltipModal: {
                    properties: {
                        root: '[data-tag-name="tooltip-modal"]',
                    },
                    helpModal: {
                        properties: {
                            root: '[id="kyc-high-risk-error"]',
                        },
                        button: '[data-tag-name="bbva-button-default"]',
                        header: '[data-tag-name="bbva-header-main"]'
                    }
                },
                errorModal: {
                    properties: {
                        root: '[data-tag-name="bbva-custom-full-modal-kyc"]',
                    },
                    helpModal: {
                        properties: {
                            root: '[id="kyc-high-risk-error"]',
                        },
                        button: '[data-tag-name="bbva-button-default"]',
                        title: '[data-tag-name="bbva-header-main"]'
                    }
                }
            },
            requiredElements: [
                'root',
            ],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()){
            case 'financial relationships header':
                await this.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'financial relationships close button':
                await this.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'header modal':
                await this.onboardingModal.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'title modal':
                await this.onboardingModal.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'icon modal':
                await this.onboardingModal.icon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'content modal':
                await this.onboardingModal.contentModal.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'link privacy modal':
                await this.onboardingModal.linkPrivacyNotice.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'close button modal':
                await this.onboardingModal.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'continue button modal':
                await this.onboardingModal.continueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy header':
                await this.privacyModalScreen.privacyHeader.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy content':
                await this.privacyModalScreen.privacyModalContent.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'privacy close button':
                await this.privacyModalScreen.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'personal information title':
                await this.personalInformationStep.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'personal information step container':
                await this.personalInformationStep.stepContainer.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'personal information question one':
                await this.personalInformationStep.questionOne.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'personal information question two':
                await this.personalInformationStep.questionTwo.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'personal information continue button':
                await this.personalInformationStep.continueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'work income title':
                await this.workIncomeStep.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'work income current step':
                await this.workIncomeStep.currentStep.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'monthly income listbox':
                await this.workIncomeStep.monthlyIncome.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'resource destination listbox':
                await this.workIncomeStep.resourceDestination.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document type listbox':
                await this.workIncomeStep.documentType.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document date calendar':
                await this.workIncomeStep.date.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'purpose of account':
                await this.workIncomeStep.purposeOfAccount.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'upload document link':
                await this.workIncomeStep.uploadDocumentLink.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'work income continue button':
                await this.workIncomeStep.continueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document upload icon':
                await this.requirementsDocsModal.icon.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document upload title':
                await this.requirementsDocsModal.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document upload content':
                await this.requirementsDocsModal.content.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document upload close button':
                await this.requirementsDocsModal.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'document upload footer button':
                await this.requirementsDocsModal.defaultButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'account use title':
                await this.accountUseStep.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'legal representative question':
                await this.accountUseStep.legalRepresentativeTooltip.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'account loan question':
                await this.accountUseStep.accountLoanTooltip.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'main source of income listbox':
                await this.accountUseStep.listBox.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'account use continue button':
                await this.accountUseStep.continueButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'public activity title':
                await this.publicActivityStep.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'public activity step container':
                await this.publicActivityStep.stepContainer.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch modal header':
                await this.goToABranchModal.helpModal.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch modal close button':
                await this.goToABranchModal.helpModal.closeButton.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch modal title':
                await this.goToABranchModal.helpModal.title.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'branch modal content':
                await this.goToABranchModal.helpModal.content.waitForDisplayed({timeout:config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async showModalPrivacyNotice() {
        await(await this.onboardingModal.linkPrivacyNotice.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async closeModalPrivacyNotice() {
        await(await this.privacyModalScreen.closeButton.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async useOfAccountAnswer( option ) {
        switch (option.toLowerCase()) {
            case 'no':
                await(await this.accountUseStep.listBox.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.accountUseStep.listBoxOption.specifySelector({placeholder: '__N__', value: 3}).waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case 'yes':
                await(await this.accountUseStep.legalRepresentative.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.accountUseStep.accountLoan.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
                await this.useOfAccountAnswer('no');
                break;
            default:
                throw new Error(`The step '${option}' is unknown. Cannot be processed.`);
        }
    }

    async toolTip( option ) {
        switch (option.toLowerCase()) {
            case 'live or have a business abroad':
                await(await this.workIncomeStep.businessAbroadTooltip.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.businessAbroadModalClose.waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case 'use of account':
                await(await this.accountUseStep.legalRepresentativeTooltip.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.legalRepresentativeTooltipClose.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.accountUseStep.accountLoanTooltip.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.accountLoanTooltipClose.waitForDisplayed({timeout:config.wait.M})).click();
                break;
            default:
                throw new Error(`The step '${option}' is unknown. Cannot be processed.`);
        }
    }

    async accountUse() {
        await this.goToStep('use of account');
        await this.useOfAccountAnswer('no');
    }

    async useOfAccountContinue() {
        await (await this.accountUseStep.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectDocumentType( option ) {
        await(await this.workIncomeStep.documentType.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.documentTypeOption.specifySelector({placeholder: '__N__', value: option}).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async exitGoBranchScreen() {
        await(await this.goToABranchModal.helpModal.closeButton.waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectYesToPublicPosition(){
        await(await this.publicActivityStep.politicalPosition.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async selectWorkIncome( option ){
        await(await this.personalInformationStep.questionOne.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.personalInformationStep.questionOneOption.specifySelector({placeholder: '__N__', value: option}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.personalInformationStep.questionTwo.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.personalInformationStep.questionTwoOption.specifySelector({placeholder: '__N__', value: option}).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async fillPersonaInformationForm(){
        await this.selectWorkIncome(1);
        await(await this.personalInformationStep.nameCouple.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.couple.name);
        await(await this.personalInformationStep.lastNameCouple.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.couple.lastName);
        await(await this.personalInformationStep.secondLastNameCouple.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.couple.secondLastName);
        await(await this.personalInformationStep.dependentName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.dependent.name);
        await(await this.personalInformationStep.dependentLastName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.dependent.lastName);
        await(await this.personalInformationStep.dependentSecondLastName.waitForDisplayed({timeout: config.wait.M}))
            .setValue(global.user.dependent.secondLastName);
        await(await this.personalInformationStep.relationship.waitForDisplayed({timeout:config.wait.M})).click();
        await this.waitForElementsExist(this.personalInformationStep.relationshipOption);
        const relationshipOptions = await (await this.personalInformationStep.relationshipOption.elements()).value[0];
        await relationshipOptions.waitForDisplayed({timeout:config.wait.M});
        await relationshipOptions.click();
    }

    async monthlyIncomeOption() {
        await(await this.workIncomeStep.monthlyIncome.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.monthlyIncomeOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async resourceDestinationOption() {
        await(await this.workIncomeStep.resourceDestination.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.resourceDestinationOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
    }
    async purposeOfAccount() {
        await(await this.workIncomeStep.businessAbroad.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.purposeOfAccount.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.purposeOfAccountOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await this.workIncomeStep.purposeOfAccountMotive.setValue(global.user.purposeOfAccount);
    }

    async fillWorkIncomeOwnBusinessForm( option ) {
        await this.monthlyIncomeOption();
        await(await this.workIncomeStep.companyName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.companyName);
        await(await this.workIncomeStep.rfc.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.rfc);
        await(await this.workIncomeStep.companyActivityListBox.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyActivityOption.specifySelector({placeholder: '__N__', value: 7}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyAge.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyAgeOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyMembers.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyMembersOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyActivity.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.companyActivity);
        await(await this.workIncomeStep.companyLocated.waitForDisplayed({timeout:config.wait.M})).click();
        switch(option.toLowerCase()){
            case 'inside mexico':
                await(await this.workIncomeStep.companyLocatedOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.workIncomeStep.companyState.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.workIncomeStep.companyStateOption.specifySelector({placeholder: '__N__', value: 8}).waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case 'outside of mexico':
                await(await this.workIncomeStep.companyLocatedOption.specifySelector({placeholder: '__N__', value: 2}).waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.workIncomeStep.companyStateOutside.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.workIncomeStep.companyStateOutsideOption.specifySelector({placeholder: '__N__', value: 8}).waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case 'inside and outside of mexico':
                await(await this.workIncomeStep.companyLocatedOption.specifySelector({placeholder: '__N__', value: 3}).waitForDisplayed({timeout:config.wait.M})).click();
                break;
            default:
                throw new Error(`The step '${option}' is unknown. Cannot be processed.`);
        }
        await this.resourceDestinationOption();
        await this.purposeOfAccount();
        await this.selectDocumentType(2);
    }

    async fillWorkIncomeEmploymentForm () {
        await(await this.workIncomeStep.employmentMonths.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.position.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.position);
        await(await this.workIncomeStep.employmentPay.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.employmentPayOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.employmentMoney.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.businessName.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.businessName);
        await(await this.workIncomeStep.jobActivity.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobActivityOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobType.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobTypeOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobAddress.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobCountry.waitForDisplayed({timeout:config.wait.M})).click();
        const firstScroll = this.workIncomeStep.jobContryOption.specifySelector({placeholder: '__N__', value: 99});
        await firstScroll.scrollIntoView();
        const SecondScroll = this.workIncomeStep.jobContryOption.specifySelector({placeholder: '__N__', value: 161});
        await SecondScroll.scrollIntoView();
        await SecondScroll.waitForDisplayed();
        await SecondScroll.click();
        await(await this.workIncomeStep.jobState.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.jobStateOption.specifySelector({placeholder: '__N__', value: 9}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.companyStreet.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.company.street);
        await(await this.workIncomeStep.companyNumber.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.company.number);
        await(await this.workIncomeStep.companyCp.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.company.cp);
        await(await this.workIncomeStep.companyPhone.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.company.phone);
        await this.monthlyIncomeOption();
        await this.resourceDestinationOption();
        await this.toolTip('live or have a business abroad');
        await this.purposeOfAccount();
        await this.selectDocumentType(2);
    }

    async documentUploadModal() {
        await this.selectDocumentType(1);
        await(await this.workIncomeStep.uploadDocumentLink.waitForDisplayed({timeout:config.wait.L})).click();
    }

    async selectSourceIncome(option) {
        await(await this.accountUseStep.listBox.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.accountUseStep.listBoxOption.specifySelector({placeholder: '__N__', value: option}).waitForDisplayed({timeout:config.wait.M})).click();
    }

    async fillOtherSourceIncome() {
        await this.goToStep('work and income');
        await this.monthlyIncomeOption();
        await(await this.workIncomeStep.originIncome.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.originIncomeOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.relationshipWithGovernment.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.relationshipType.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.relationshipTypeOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.governmentEntity.waitForDisplayed({timeout: config.wait.M})).setValue(global.user.governmentEntity);
        await(await this.workIncomeStep.frequency.waitForDisplayed({timeout:config.wait.M})).click();
        await(await this.workIncomeStep.frequencyOption.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
        await this.resourceDestinationOption();
        await this.purposeOfAccount();
        await this.selectDocumentType(2);
    }

    async goToStep( step ) {
        switch (step.toLowerCase()) {
            case 'use of account':
                await(await this.onboardingModal.continueButton.waitForDisplayed({timeout:config.wait.M})).click();
                break;
            case 'personal information':
                await this.personalInformationStep.currentStep.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'work and income':
                await this.goToStep('personal information');
                await this.selectWorkIncome(4);
                await(await this.personalInformationStep.continueButton.waitForDisplayed({timeout:config.wait.M})).click();
                await this.workIncomeStep.currentStep.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'public activity':
                await this.goToStep('personal information');
                await this.selectYesToPublicPosition();
                await(await this.publicActivityStep.appointmentTypeTooltip.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.appointmentTypeModal.closeButton.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.appointmentType.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.appointmentTypeOption.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.positionType.specifySelector({placeholder: '__N__', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.positionTypeOption.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.positionName.waitForDisplayed({timeout:config.wait.M})).click();
                await(await this.publicActivityStep.positionNameOption.specifySelector({placeholder: '5', value: 1}).waitForDisplayed({timeout:config.wait.M})).click();
                break;
            default:
                throw new Error(`The step '${step}' is unknown. Cannot be processed.`);
        }
    }

    async retrySectionCannotBeSavedErrorModal() {
        for(let i = 0; i < 3; i++) {
            const retryButton = await this.tooltipModal.helpModal.button.waitForClickable({timeout: config.wait.M});
            if( retryButton ) {
                await retryButton.click();
            } else {
                await this.errorModal.helpModal.title.waitForDisplayed({timeout: config.wait.M});
            }
        }
    }
    async handleErrorModalRetries() {
        for (let i = 0; i < 3; i++) {
            await this.errorModal.helpModal.button.waitForClickable({timeout: config.wait.L});
            await this.errorModal.helpModal.button.click();
        }
    }
}
export default new KycValidationHighRisk();
