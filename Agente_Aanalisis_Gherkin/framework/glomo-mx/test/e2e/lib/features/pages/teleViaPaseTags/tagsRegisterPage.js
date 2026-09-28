import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import * as navigation from '../../navigation';

@page()
class RegisterTag extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-register-tag[state="active"]',
            elements: {
                title: '#headerMainTollEnrollment',
                closeBtn: '#headerMainTollEnrollment #btn-close',
                multiStep: {
                    generalInformation: {
                        properties: { root: '#_stepGeneralInformationTag' },
                        queryDetail: '#editButton'
                    },
                    operatorStep: {
                        properties: { root: '#_stepSelectTagCompany' },
                        title: '#headingLabel',
                        radioButtons: '#radioButtonSelectTagCompany [data-tag-name="bbva-form-radio-button-input"]',
                        continueBtn: '#selectTagCompanyContinue'
                    },
                    manualStep: {
                        properties: { root: '#_stepSelectTagRegistration' },
                        title: '#headingLabel',
                        linkBtn: '#recordSelectionManually #customerServiceCenter'
                    },
                    termsStep: {
                        properties: { root: '#_stepTermsAndConditions' },
                        title: '#headingLabel',
                        chkBox: '#bbvaFormCheckboxTermsAndConditions',
                        continueBtn: '#btnTermsAndConditions',
                        queryBtn: '#editButton'
                    },
                },
                detailTxt: '#serviceDetailTitle',
                benefitTxt: '#benefitsTitle',
                requirementsTxt: '#requirementsTitle',
                costTxt: '#costTitle',
                costInfoBtn: '#nextPaymentHelp',
                coverageTxt: '#aboutTagNotificationMessage [data-tag-name="bbva-type-text"]',
                moreInfoCoverageLink: '#aboutTagNotificationMessage [data-tag-name="bbva-type-link"]',
                phoneNumberLink: '#tagAgreementInfo #customerServiceCenter',
                registerTagBtn: '#registerTagContinueButton',
                registerBtn: '#confirmationMultistepButton',
                informationModal: {
                    properties: { root: '#rechargeFee' },
                    title: '#title-text',
                    btnClose: '#btn-close',
                    txtRecharge: '#helpModalContent'
                },
                moreInformationModal: {
                    properties: { root: '#aboutTag' },
                    title: '#title-text',
                    btnClose: '#btn-close',
                    txtRecharge: '#helpModalContent'
                },
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async backToTagList() {
        await (await this.closeBtn.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.dialogOperations.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goToTagInfo() {
        await (await this.multiStep.manualStep.linkBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async operatorSection() {
        await (await  this.multiStep.operatorStep.title.waitForDisplayed({ timeout: config.wait.M })).waitForAnimation({timeout: config.wait.M});
        await this.waitForElementsExist(this.multiStep.operatorStep.radioButtons);
        const televiaButton = (await this.multiStep.operatorStep.radioButtons.elements()).value[1];
        await (await televiaButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.multiStep.operatorStep.continueBtn.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async manualInfoTagSection() {
        await this.multiStep.manualStep.title.waitForDisplayed({timeout: config.wait.M});
        await this.multiStep.manualStep.linkBtn.waitForClickable({timeout: config.wait.M});
        await navigation.teleViaPaseTags.tagRegisterInfoNav.go();
    }

    async goToSection(section) {
        switch (section) {
            case 'operator':
                await (await (await this.registerTagBtn.scrollIntoView()).waitForDisplayed({timeout: config.wait.M})).click();
                await this.operatorSection();
                break;
            case 'information tag manual':
                await (await (await this.registerTagBtn.scrollIntoView()).waitForDisplayed({timeout: config.wait.M})).click();
                await this.operatorSection();
                await this.manualInfoTagSection();
                break;
            case 'term and condition':
                await (await (await this.registerTagBtn.scrollIntoView()).waitForDisplayed({timeout: config.wait.M})).click();
                await this.operatorSection();
                await this.manualInfoTagSection();
                await currentPage.fillFormTag();
                await navigation.teleViaPaseTags.tagsRegisterNav.go();
                await this.multiStep.termsStep.title.waitForDisplayed({timeout: config.wait.M});
                await (await this.multiStep.termsStep.chkBox.waitForDisplayed({timeout: config.wait.M})).click();
                await (await this.multiStep.termsStep.continueBtn.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'information':
                await (await this.costInfoBtn.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'more information':
                await (await this.moreInfoCoverageLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'term and conditions': {
                await this.registerBtn.waitForDisplayed({timeout: config.wait.M});
                await this.waitForElementsExist(this.multiStep.termsStep.queryBtn);
                const editButton = (await this.multiStep.termsStep.queryBtn.elements()).value[0];
                await (await editButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            }
            case 'detail': {
                await this.registerBtn.waitForDisplayed({timeout: config.wait.M});
                await this.waitForElementsExist(this.multiStep.generalInformation.queryDetail);
                const editLink = (await this.multiStep.generalInformation.queryDetail.elements()).value[0];
                await (await editLink.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            }
            default:
                throw new Error(`Section '${section}' not found in section list.`);
        }
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'detail':
                await this.detailTxt.waitForDisplayed({timeout: config.wait.M});
                await this.benefitTxt.waitForDisplayed({timeout: config.wait.M});
                await this.requirementsTxt.waitForDisplayed({timeout: config.wait.M});
                await this.costTxt.waitForDisplayed({timeout: config.wait.M});
                await this.costInfoBtn.waitForDisplayed({timeout: config.wait.M});
                await this.coverageTxt.waitForDisplayed({timeout: config.wait.M});
                await this.moreInfoCoverageLink.waitForDisplayed({timeout: config.wait.M});
                await this.phoneNumberLink.waitForDisplayed({timeout: config.wait.M});
                await this.registerTagBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag information':
                await this.multiStep.manualStep.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term and conditions':
                await this.multiStep.termsStep.title.waitForDisplayed({timeout: config.wait.M});
                await this.multiStep.termsStep.chkBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary':
                await this.registerBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information':
                await this.informationModal.title.waitForDisplayed({timeout: config.wait.M});
                await this.informationModal.btnClose.waitForDisplayed({timeout: config.wait.M});
                await this.informationModal.txtRecharge.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more information':
                await this.moreInformationModal.title.waitForDisplayed({timeout: config.wait.M});
                await this.moreInformationModal.btnClose.waitForDisplayed({timeout: config.wait.M});
                await this.moreInformationModal.txtRecharge.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async finishTagRegistration() {
        await (await this.registerBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }
}

export default new RegisterTag();
