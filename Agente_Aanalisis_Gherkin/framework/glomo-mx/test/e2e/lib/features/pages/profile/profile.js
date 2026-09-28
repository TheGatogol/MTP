import {page, ElementValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page('profile')
class Profile extends AbstractGlomoPage {
    constructor() {
        const customerProfile = 'glomo-customer-profile';
        const infoBox = `${customerProfile} #top-info-message-not-full-profile`;
        const profileSection = (id) => (`${customerProfile} .customer-section[data-section="${id}"]`);
        const curpItem = `${profileSection('personal-information')} .personal-information-curp`;
        const identificationItem = `${profileSection('personal-information')} .personal-information-identification`;
        super({
            root: '#cells-template-profile[state="active"]',
            elements: {
                back: 'cells-molecule-header #btnLeft',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                profileManager: 'glomo-profile-manager-mx',
                changeAvatar: `${customerProfile} section.customer-avatar cells-st-button.edit-button`,
                // Top info message
                topInfoMessage: `${infoBox}[type="__TYPE__"]`,
                topInfoMessageTitle: `${infoBox} span.header`,
                topInfoMessageText: `${infoBox} #notInline`,
                topInfoMessageList: `${infoBox} .messages`,
                // Personal information section
                labelClientNumber: `${profileSection('personal-information')} cells-key-values .key`,
                personalInfoTitle: `${profileSection('personal-information')} cells-heading`,
                personalInfoShowBtn: `${profileSection('personal-information')} .customer-section-title cells-st-link a`,
                completeName: `${customerProfile} #personal-information-complete-name`,
                clientId: `${customerProfile} #personal-information-identity-document-client-number`,
                birthData: `${customerProfile} #personal-information-birth-date`,
                curp: `${curpItem} __MASKED__`,
                curpEditBtn: `${customerProfile} #additional-docs-pending-curp-edit-button__DISABLED__`,
                curpConfirmBtn: `${customerProfile} #additional-docs-pending-curp-edit-button`,
                curpWarning: `${customerProfile} __WARNING-SELECTOR__`,
                curpAddBtn: `${customerProfile} #personal-information-add-curp`,
                identification: `${identificationItem} __MASKED__`,
                identificationExpDate: `${customerProfile} #additional-docs-INE-expiration-date`,
                identificationEditBtnDisabled: `${customerProfile} #additional-docs-INE-edit-button__DISABLED__`,
                identificationEditBtn: `${customerProfile} #additional-docs-INE-edit-button`,
                secondaryIdentificationEditBtn: `${customerProfile} #additional-docs-PASSPORT-edit-button`,
                identificationWarning: `${customerProfile} __WARNING-SELECTOR__`,
                identificationAddBtn: `${customerProfile} #personal-information-add-identification`,
                // Contacts mobile
                mobileShowButton: `${customerProfile} #mobile-toggle-mask-button a`,
                mobileTitle: `${customerProfile} div.title-icon-container ~ #mobile-toggle-mask-button`,
                mobile: `${customerProfile} section:nth-child(10) .key-container > cells-key-values`,
                mobileInfoButton: `${customerProfile} #mobile-info-icon`,
                // Contacts email
                emailShowButton: `${customerProfile} #email-toggle-mask-button a`,
                emailTitle: `${customerProfile} div.title-icon-container ~ #email-toggle-mask-button`,
                email: `${customerProfile} section:nth-child(14) .key-container > cells-key-values`,
                emailAddLink: `${customerProfile} section:nth-child(14) > div.customer-section-add-data > cells-st-link`,
                emailEditButton: `${customerProfile} #email-edit-button button__DISABLED__`,
                tagPendingValidation: 'glomo-customer-profile-spherica #email-customer-contact',
                tagPendingValidationDark: '.customer-non-validated-dark-item',
                //Tax residence seccion
                taxResidenceShowBtn: `${profileSection('tax-residence')} .customer-section-title cells-st-link`,
                taxResidenceHeader: `${profileSection('tax-residence')} .customer-section-title cells-heading`,
                taxResidence: `${profileSection('tax-residence')} .key-container cells-key-values`,
                taxResidenceTooltip: `${profileSection('tax-residence')} .customer-section-title cells-atom-icon`,
                taxResidenceStatusLabel: `${profileSection('tax-residence')} .key-container cells-key-values > p`,
                taxResidencePencil: `${profileSection('tax-residence')} .key-container > cells-st-button button`,
                taxResidenceWarning: `${profileSection('tax-residence')} __WARNING-SELECTOR__`,
                mainTaxResidenceTitle: `${profileSection('tax-residence')} p.unmasked-data-title`,
                mainTaxResidenceCountry: `${profileSection('tax-residence')} cells-key-values[key="glomo-customer-profile-country"]`,
                mainTaxResidenceNif: `${profileSection('tax-residence')} cells-key-values[key="glomo-customer-profile-mx-identifier-fiscal-number"]`,
                taxResidenceLink: `${profileSection('tax-residence')} .customer-section-add-data cells-st-link`,
                //Fiscal data
                fiscalDataTitle: `${profileSection('fiscal-data')} .title-icon-container cells-heading`,
                fiscalDataHelpBtn: `${profileSection('fiscal-data')} .customer-section-title .title-icon-container cells-atom-icon`,
                fiscalDataShowBtn: `${profileSection('fiscal-data')} .customer-section-title #customer-fiscal-data-show-data-button`,
                fiscalDataModifyBtn: `${profileSection('fiscal-data')} .key-container .edit-btn button[data-type="fiscal-data"]`,
                fiscalDataContents: `${profileSection('fiscal-data')} .key-container`,
                //Address section
                addressTitle: 'section:nth-child(19) > div.customer-section-title > cells-heading',
                addressShowbutton: 'section:nth-child(19) > div.customer-section-title > cells-st-link',
                addressInfo: 'section:nth-child(19) > div.key-container.flex.supr-margin-top > cells-key-values',
                addressInfoButton: 'glomo-customer-profile section:nth-child(19) > div.key-container.flex.reduce-key-container.reduce-top-margin > cells-key-values > span > cells-atom-icon iron-icon',
                addressUnmaskedValue: 'section:nth-child(19) > div.customer-section-title > cells-st-link',
                addAddress: 'section:nth-child(19) > div.customer-section-add-data > cells-st-link',
                addressMaskedValue: 'glomo-customer-profile section:nth-child(19) div.key-container.flex.supr-margin-top cells-key-values div.value div span',
                editAddress: 'section:nth-child(19) > div.key-container.flex.supr-margin-top > cells-st-button > button > cells-atom-icon',
                communicationErrorAddress: 'glomo-customer-profile section:nth-child(19) > cells-icon-message',
                //Unsubscribe section
                unsubscribeTitle: '.customer-section[data-section="unsubscribe"] cells-heading',
                unsubscribeLink: '.customer-section[data-section="unsubscribe"] cells-st-button',
                //KYC validation
                titleKyc: 'glomo-customer-profile section[data-section="know-your-client"] > div.customer-section-title > div > cells-heading',
                kycTooltip: 'glomo-customer-profile section[data-section="know-your-client"] > div.customer-section-title > div > cells-atom-icon',
                addDataKycLink: 'glomo-customer-profile section[data-section="know-your-client"] > div.customer-section-add-data > cells-st-link',
                secondaryKycTitle: 'glomo-customer-profile section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values div.key > span',
                secondaryKycSecondLine: 'glomo-customer-profile section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values div.value > div > span',
                editIconKyc: 'glomo-customer-profile section[data-section="know-your-client"] .key-container cells-st-button button',
                tinyMessageInfo: 'glomo-customer-profile section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > div',
                kycStatusLabel: 'glomo-customer-profile section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values > p',
                //ProfileRecipients section
                helpRecipients: '[data-type="recipients"]',
                showMoreRecipients: '#mobile-toggle-mask-button-show-more > button',
                editRecipients: '[aria-label="Añadir beneficiarios"] cells-atom-icon',
                addRecipients: 'section[data-section="customer-address"] cells-st-button.add',

                //customer contracts section
                contractsShowButton: '.customer-section[data-section="contracts"] cells-st-link',

                //message info fiscal Data update rfc
                containerMessageUpdateRfc:`${profileSection('fiscal-data')} cells-icon-message.bold-header`,
                iconMessageUpdateRfc: 'glomo-customer-profile-spherica [data-section="fiscal-data"] cells-icon-message-spherica #principalIcon',
                descriptionMessageUpdateRfc: 'glomo-customer-profile-spherica [data-section="fiscal-data"] cells-icon-message-spherica #notInline',
                titleMessageUpdateRfc: 'glomo-customer-profile-spherica [data-section="fiscal-data"] cells-icon-message-spherica .header',
                labelIncompleteFiscalData: `${profileSection('fiscal-data')} div.margin-space cells-st-link`,
                
                btnMessageUpdateRfc:  'glomo-customer-profile-spherica #btn-on-to-update-rfc'
            },
            elementsSpherica: {
                back: 'cells-molecule-header-spherica #btnLeft',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                changeAvatar: 'glomo-customer-profile-spherica section.customer-avatar cells-st-button-spherica.edit-button',
                // Top info message
                topInfoMessage: 'glomo-customer-profile-spherica #top-info-message-not-full-profile[type="__TYPE__"]',
                topInfoMessageTitle: 'glomo-customer-profile-spherica #top-info-message-not-full-profile span.header',
                topInfoMessageText: 'glomo-customer-profile-spherica #top-info-message-not-full-profile #notInline',
                topInfoMessageList: 'glomo-customer-profile-spherica #top-info-message-not-full-profile .messages',
                // Personal information section
                labelClientNumber: 'glomo-customer-profile-spherica .customer-section[data-section="personal-information"] cells-key-values-spherica .key',
                personalInfoTitle: 'glomo-customer-profile-spherica [data-section="personal-information-title"] .title-icon-container',
                personalInfoShowBtn: 'glomo-customer-profile-spherica [data-section="personal-information-title"] .link',
                completeName: 'glomo-customer-profile-spherica #personal-information-complete-name',
                clientId: 'glomo-customer-profile-spherica #personal-information-identity-document-client-number',
                birthData: 'glomo-customer-profile-spherica #personal-information-birth-date',
                curp: 'glomo-customer-profile-spherica .customer-section[data-section="personal-information"] .personal-information-curp __MASKED__',
                curpSpherica: 'glomo-customer-profile-spherica .customer-section[data-section="personal-information"] .personal-information-curp __MASKED__',
                curpEditBtn: 'glomo-customer-profile-spherica #additional-docs-pending-curp-edit-button__DISABLED__',
                curpConfirmBtn: 'glomo-customer-profile-spherica #additional-docs-pending-curp-edit-button',
                curpWarning: 'glomo-customer-profile-spherica __WARNING-SELECTOR__',
                curpAddBtn: 'glomo-customer-profile-spherica #personal-information-add-curp',
                identification: 'glomo-customer-profile-spherica .customer-section[data-section="personal-information"] .personal-information-identification __MASKED__',
                identificationExpDate: 'glomo-customer-profile-spherica #additional-docs-INE-expiration-date',
                identificationEditBtnDisabled: 'glomo-customer-profile-spherica #additional-docs-INE-edit-button__DISABLED__',
                identificationEditBtn: 'glomo-customer-profile-spherica #additional-docs-INE-edit-button',
                secondaryIdentificationEditBtn: 'glomo-customer-profile-spherica #additional-docs-PASSPORT-edit-button',
                identificationWarning: 'glomo-customer-profile-spherica __WARNING-SELECTOR__',
                identificationAddBtn: 'glomo-customer-profile-spherica #personal-information-add-identification',
                // Contacts mobile
                mobileShowButton: 'glomo-customer-profile-spherica #mobile-toggle-mask-button a',
                mobileTitle: 'glomo-customer-profile-spherica div.customer-section-title #mobile-toggle-mask-button',
                mobile: 'glomo-customer-profile-spherica .customer-section .key-container #mobile-phone-numer',
                mobileInfoButton: 'glomo-customer-profile-spherica #mobile-info-icon',
                // Contacts email
                emailShowButton: 'glomo-customer-profile-spherica #email-toggle-mask-button a',
                emailTitle: 'glomo-customer-profile-spherica div.title-icon-container ~ #email-toggle-mask-button',
                email: 'glomo-customer-profile-spherica .contact-section .key-container #email-customer-contact',
                emailAddLink: 'glomo-customer-profile-spherica .contact-section #email-add-link',
                emailEditButton: 'glomo-customer-profile-spherica #email-edit-button button__DISABLED__',
                //Tax residence seccion
                taxResidenceShowBtn: 'glomo-customer-profile-spherica .customer-section-title[data-section="tax-residence-title"] cells-st-link-spherica',
                taxResidenceHeader: 'glomo-customer-profile-spherica .customer-section-title[data-section="tax-residence-title"] .title-icon-container cells-heading',
                taxResidence: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] .key-container cells-key-values-spherica',
                taxResidenceTooltip: 'glomo-customer-profile-spherica .customer-section-title[data-section="tax-residence-title"] .title-icon-container cells-atom-icon-spherica',
                taxResidenceStatusLabel: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] .key-container cells-key-values-spherica > p',
                taxResidencePencil: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] .key-container > cells-st-button-spherica button',
                taxResidenceWarning: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] __WARNING-SELECTOR__',
                mainTaxResidenceTitle: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] p.unmasked-data-title',
                mainTaxResidenceCountry: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] cells-key-values-spherica[key="glomo-customer-profile-country"]',
                mainTaxResidenceNif: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] cells-key-values-spherica[key="glomo-customer-profile-mx-identifier-fiscal-number"]',
                taxResidenceLink: 'glomo-customer-profile-spherica .customer-section[data-section="tax-residence"] cells-st-link-spherica',
                //Fiscal data
                fiscalDataTitle: 'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data"] .title-icon-container cells-heading',
                fiscalDataHelpBtn: 'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data"] .customer-section-title .title-icon-container cells-atom-icon-spherica',
                fiscalDataShowBtn: 'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data-title"]  #customer-fiscal-data-show-data-button',
                fiscalDataModifyBtn: 'glomo-customer-profile-spherica .customer-section[data-section="fiscal-data"] cells-st-button-spherica',
                fiscalDataContents: 'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data"] .key-container',
                //Address section
                addressTitle: 'section:nth-child(19) > div.customer-section-title > cells-heading',
                addressShowbutton: 'section:nth-child(19) > div.customer-section-title > cells-st-link-spherica',
                addressInfo: 'section:nth-child(19) > div.key-container.flex.supr-margin-top > cells-key-values-spherica',
                addressInfoButton: 'glomo-customer-profile-spherica section:nth-child(19) > div.key-container.flex.reduce-key-container.reduce-top-margin > cells-key-values-spherica > span > cells-atom-icon-spherica iron-icon',
                addressUnmaskedValue: 'section:nth-child(19) > div.customer-section-title > cells-st-link-spherica',
                addAddress: 'section[data-section="customer-address"] .customer-section-add-data cells-st-link-spherica',
                addressMaskedValue: 'glomo-customer-profile-spherica section:nth-child(19) div.key-container.flex.supr-margin-top cells-key-values-spherica div.value div span',
                editAddress: 'section:nth-child(19) > div.key-container.flex.supr-margin-top > cells-st-button-spherica > button > cells-atom-icon-spherica',
                communicationErrorAddress: 'glomo-customer-profile-spherica section:nth-child(19) > cells-icon-message-spherica',
                //Unsubscribe section
                unsubscribeTitle: '.customer-section[data-section="unsubscribe"] cells-heading',
                unsubscribeLink: '.customer-section[data-section="unsubscribe"] cells-st-button-spherica',
                //KYC validation
                titleKyc: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.customer-section-title > div > cells-heading',
                kycTooltip: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.customer-section-title > div > cells-atom-icon-spherica',
                addDataKycLink: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.customer-section-add-data > cells-st-link-spherica',
                secondaryKycTitle: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values-spherica div.key > span',
                secondaryKycSecondLine: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values-spherica div.value > div > span',
                editIconKyc: 'glomo-customer-profile-spherica section[data-section="know-your-client"] .key-container cells-st-button-spherica button',
                tinyMessageInfo: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > div',
                kycStatusLabel: 'glomo-customer-profile-spherica section[data-section="know-your-client"] > div.key-container.flex.supr-margin-top > cells-key-values-spherica > p',

                //Relationship financials
                containerRelationshipFinancials: 'glomo-customer-profile-spherica [id="kyc-high-risk-relations-section-container"]',
                addDataKycHighRiskLink: 'glomo-customer-profile-spherica [id="kyc-status-label-relations-relations"]',
                headerRelationshipFinancials: 'glomo-customer-profile-spherica [id="kyc-high-risk-section-title"]',
                titleHeaderRelationshipFinancials: 'glomo-customer-profile-spherica [id="kyc-high-risk-relations-section-container"] [id="link-financial-relations"]',
                subTitleRelationshipFinancials: 'glomo-customer-profile-spherica [id="kyc-high-risk-relations-section-container"] [id="kyc-status-label-relations-relations"]',
                messageIngoRelationshipFinancials: 'glomo-customer-profile-spherica [id="kyc-high-risk-relations-section-container"] #container-relation-financial-sub-texts cells-icon-message-spherica',

                //ProfileRecipients section
                helpRecipients: '[data-type="recipients"]',
                showMoreRecipients: '#mobile-toggle-mask-button-show-more > button',
                editRecipients: 'section[data-section="know-your-client"] ~ section[data-section="customer-address"] .key-container.flex.reduce-key-container.reduce-top-margin cells-st-button-spherica',
                addRecipients: 'section[data-section="customer-address"] cells-st-button-spherica.add',

                //customer contracts section
                contractsShowButton: '.customer-section-title[data-section="contracts-title"] cells-st-button-spherica',

                //message info fiscal Data update rfc
                containerMessageUpdateRfc:'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data"] cells-icon-message-spherica.bold-header',
                labelIncompleteFiscalData: 'glomo-customer-profile-spherica .customer-section-title[data-section="fiscal-data"] div.margin-space cells-st-link-spherica',
            },
            defaultSphericaElements: [
                'GlomoAlertManager',
            ],
            requiredElements: [
                'header', 'changeAvatar',
            ],
        });
    }

    async _screenValidation({item, value} = {}) {
        const maskedAttr = value === 'masked'
            ? (this.isSpherica() ? 'cells-molecule-mask-spherica[masked]' : 'cells-molecule-mask[masked]')
            : '.value-simple';
        const disabledAttr = value === 'disabled' ? '[disabled]' : '';
        const hidden = value === 'hidden';
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'top info box':
                await this.topInfoMessage
                    .specifySelector({placeholder: '__TYPE__', value: value})
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'top info title':
                await this.topInfoMessageTitle.waitForDisplayed({reverse: hidden});
                break;
            case 'top info message':
                await this.topInfoMessageText.waitForDisplayed();
                break;
            case 'top info list':
                await this.topInfoMessageList.waitForDisplayed({reverse: hidden});
                break;
            case 'personal info title':
                await this.personalInfoTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'complete name':
                await this.completeName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'client id':
                await this.clientId.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'birth data':
                await this.birthData.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'change avatar':
                await this.changeAvatar.waitForDisplayed({timeout: config.wait.L});
                break;
            // CURP
            case 'curp':
                if(this.isSpherica()) {
                    await this.curpSpherica
                        .specifySelector({placeholder: '__MASKED__', value: maskedAttr})
                        .waitForDisplayed({reverse: hidden});
                }
                else {
                    await this.curp
                        .specifySelector({placeholder: '__MASKED__', value: maskedAttr})
                        .waitForDisplayed({reverse: hidden});
                }
                break;
            case 'curp edit btn':
                await this.curpEditBtn
                    .specifySelector({placeholder: '__DISABLED__', value: disabledAttr})
                    .waitForDisplayed({reverse: hidden || value === 'odd'});
                break;
            case 'curp warning':
                if(this.isSpherica()) {
                    await this.curpWarning
                        .specifySelector({
                            placeholder: '__WARNING-SELECTOR__', value: value === 'static'
                                ? '#personal-information-add-curp + cells-icon-message-spherica'
                                : '#additional-docs-pending-curp-incomplete-warning'
                        })
                        .waitForDisplayed({reverse: hidden});
                }
                else {
                    await this.curpWarning
                        .specifySelector({
                            placeholder: '__WARNING-SELECTOR__', value: value === 'static'
                                ? '#personal-information-add-curp + cells-icon-message'
                                : '#additional-docs-pending-curp-incomplete-warning'
                        })
                        .waitForDisplayed({reverse: hidden});
                }
                break;
            case 'curp add btn':
                await this.curpAddBtn.waitForDisplayed({reverse: hidden});
                break;
            // IDENTIFICATION
            case 'identification':
                await this.identification
                    .specifySelector({placeholder: '__MASKED__', value: maskedAttr})
                    .waitForDisplayed({reverse: hidden});
                break;
            case 'identification exp date':
                await this.identificationExpDate.waitForDisplayed({reverse: hidden});
                break;
            case 'identification edit btn':
                await this.identificationEditBtnDisabled
                    .specifySelector({placeholder: '__DISABLED__', value: disabledAttr})
                    .waitForDisplayed({reverse: hidden});
                break;
            case 'identification warning':
                await this.identificationWarning
                    .specifySelector({
                        placeholder: '__WARNING-SELECTOR__',
                        value: value === 'static'
                            ? (this.isSpherica()
                                ? '#personal-information-add-identification + cells-icon-message-spherica'
                                : '#personal-information-add-identification + cells-icon-message')
                            : '#additional-docs-INE-incomplete-warning'
                    })
                    .waitForDisplayed({ reverse: hidden });
                break;
            case 'identification add btn':
                await this.identificationAddBtn.waitForDisplayed({reverse: hidden});
                break;
            // CONTACTS
            case 'mobile title':
                await this.mobileTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mobile':
                await this.mobile
                    .specifySelector({placeholder: '__MASKED__', value: maskedAttr})
                    .waitForDisplayed();
                break;
            case 'mobile info button':
                await this.mobileInfoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email title':
                await this.emailTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email':
                await this.email
                    .specifySelector({placeholder: '__MASKED__', value: maskedAttr})
                    .waitForDisplayed();
                break;
            case 'email edit button':
                await this.emailEditButton
                    .specifySelector({placeholder: '__DISABLED__', value: disabledAttr})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag pending':
                await this.tagPendingValidation.waitForDisplayed({timeout: config.wait.M});
                break;
            //ADDRESS
            case 'edit adress':
                await this.editAddress.waitForDisplayed({timeout: config.wait.M, reverse: hidden});
                break;
            case 'address title':
                await this.addressTitle.waitForDisplayed({timeout: config.wait.M, reverse: hidden});
                break;
            case 'address show button':
                await this.addressShowbutton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address info':
                await this.addressInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address info button':
                await this.addressInfoButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address unmasked value':
                await this.addressUnmaskedValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address masked value':
                await this.addressMaskedValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add address link':
                await this.addAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unsubscribe title':
                await this.unsubscribeTitle.scrollIntoView();
                await this.unsubscribeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unsubscribe link':
                await this.unsubscribeLink.scrollIntoView();
                await this.unsubscribeLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'communication error':
                await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
                await this.communicationErrorAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            // TAX RESIDENCE
            case 'tax residence header':
                await this.taxResidenceHeader.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'tax residence':
                await this.taxResidence.waitForDisplayed({reverse: hidden});
                break;
            case 'tax residence tooltip':
                await this.taxResidenceTooltip.waitForDisplayed();
                break;
            case 'tax residence status label':
                await this.taxResidenceStatusLabel.waitForDisplayed({reverse: hidden});
                break;
            case 'tax residence warning':
                await this.taxResidenceWarning
                    .specifySelector({
                        placeholder: '__WARNING-SELECTOR__',
                        value: value === 'static'
                            ? (this.isSpherica()
                                ? '.customer-section-add-data cells-icon-message-spherica'
                                : '.customer-section-add-data cells-icon-message')
                            : '#tax-residence-incomplete-warning'
                    })
                    .waitForDisplayed({ reverse: hidden });
                break;
            case 'tax residence edit button':
                await this.taxResidencePencil.waitForDisplayed({reverse: hidden});
                break;
            case 'main tax residence title':
                await this.mainTaxResidenceTitle.waitForDisplayed({reverse: hidden});
                break;
            case 'main tax residence country':
                await this.mainTaxResidenceCountry.waitForDisplayed({reverse: hidden});
                break;
            case 'main tax residence nif':
                await this.mainTaxResidenceNif.waitForDisplayed({reverse: hidden});
                break;
            case 'tax residence add button':
                await this.taxResidenceLink.waitForDisplayed({reverse: value !== 'hidden'});
                break;
            //CURP section
            case 'personal info show data':
                await this.personalInfoShowBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label client number':
                await this.labelClientNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm curp':
                await this.curpConfirmBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add curp':
                await this.curpAddBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title kyc':
                await this.titleKyc.waitForDisplayed({reverse: hidden});
                break;
            case 'kyc tooltip':
                await this.kycTooltip.waitForDisplayed();
                break;
            case 'add data kyc':
                await this.addDataKycLink.waitForDisplayed();
                break;
            case 'secondary kyc title':
                await this.secondaryKycTitle.waitForDisplayed();
                break;
            case 'secondary kyc second line':
                await this.secondaryKycSecondLine.waitForDisplayed();
                break;
            case 'edit icon kyc':
                await this.editIconKyc.waitForDisplayed();
                break;
            case 'tiny message info':
                await this.tinyMessageInfo.waitForDisplayed();
                break;
            case 'kyc status label':
                await this.kycStatusLabel.waitForDisplayed();
                break;
            //FISCAL DATA
            case 'fiscal data help btn':
                await this.fiscalDataHelpBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data modify btn':
                await this.fiscalDataModifyBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data show btn':
                await this.fiscalDataShowBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fiscal data title':
                await this.fiscalDataTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon update rfc message':
                await this.iconMessageUpdateRfc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title update rfc message':
                await this.titleMessageUpdateRfc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description update rfc message':
                await this.descriptionMessageUpdateRfc.waitForDisplayed({time: config.wait.M});
                break;
            case 'button update rfc message':
                await this.btnMessageUpdateRfc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label fiscal data empty':
                await this.labelIncompleteFiscalData.waitForDisplayed({timeout: config.wait.M});
                break;
            //Relashionship financials
            case 'header title relationship financials':
                await this.headerRelationshipFinancials.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container relationship financials':
                await this.containerRelationshipFinancials.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle relationship financials':
                await this.titleHeaderRelationshipFinancials.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description relationship financials':
                await this.subTitleRelationshipFinancials.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message info relationship financials':
                await this.messageIngoRelationshipFinancials.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goChangeAvatar() {
        await this.changeAvatar.waitForDisplayed({timeout: config.wait.L});
        await this.changeAvatar.click();
    }

    async access({functionality}) {
        switch (functionality.toLowerCase()) {
            case 'change avatar':
                await this.changeAvatar.waitForDisplayed({timeout: config.wait.L});
                await this.changeAvatar.waitForAnimation({timeout: config.wait.L});
                await this.changeAvatar.waitForEnabled({timeout: config.wait.L});
                await this.changeAvatar.click();
                break;
            case 'add fatca':
                await this.taxResidenceLink.waitForAnimation({timeout: config.wait.XL});
                await this.taxResidenceLink.click();
                break;
            case 'edit fatca':
                await this.taxResidencePencil.waitForAnimation({timeout: config.wait.XL});
                await this.taxResidencePencil.click();
                break;
            case 'add curp':
                await this.curpAddBtn.scrollIntoView();
                await this.curpAddBtn.waitForClickable({timeout: config.wait.L});
                await this.curpAddBtn.click();
                break;
            case 'edit curp':
                await this.curpConfirmBtn.scrollIntoView();
                await this.curpConfirmBtn.waitForAnimation({timeout: config.wait.XL});
                await this.curpConfirmBtn.click();
                await this.dialogOperations.confirmDialog({timeout: config.wait.M});
                break;
            case 'add mail':
                await this.emailAddLink.waitForAnimation({timeout: config.wait.XL});
                await this.emailAddLink.click();
                break;
            case 'edit mail':
                await this.emailEditButton.specifySelector({
                    placeholder: '__DISABLED__',
                    value: ' '
                }).waitForAnimation({timeout: config.wait.XL});
                await this.emailEditButton.specifySelector({placeholder: '__DISABLED__', value: ' '}).click();
                break;
            case 'edit address':
                await this.unmaskAddressData();
                await this.editAddress.click();
                await this.dialogOperations.confirmDialog();
                break;
            case 'edit recipients':
                await (await (await this.helpRecipients.scrollIntoView()).waitForAnimation({timeout: config.wait.M}))
                    .waitForDisplayed({timeout: config.wait.L});
                if (await this.showMoreRecipients.isDisplayed()) {
                    await (await this.showMoreRecipients.waitForClickable({timeout: config.wait.L})).click();
                    await (await this.editRecipients.waitForClickable({timeout: config.wait.L})).click();
                } else {
                    await (await this.addRecipients.waitForClickable({timeout: config.wait.L})).click();
                }
                break;
            case 'add address':
                await this.addAddress.waitForClickable({timeout: config.wait.L});
                await this.addAddress.click({timeout: config.wait.L});
                await this.dialogOperations.confirmDialog({timeout: config.wait.L});
                break;
            case 'add postal address':
                await this.addAddress.waitForDisplayed({timeout: config.wait.M});
                await this.addAddress.scrollIntoView({block: 'center'});
                await this.addAddress.click({timeout: config.wait.M});
                break;
            case 'add identification':
                await this.identificationAddBtn.waitForAnimation({timeout: config.wait.XL});
                await this.identificationAddBtn.click();
                break;
            case 'edit identification':
                await this.identificationEditBtn.waitForAnimation({timeout: config.wait.XL});
                await this.identificationEditBtn.click();
                break;
            case 'edit secondary id':
                await this.secondaryIdentificationEditBtn.waitForDisplayed();
                await this.secondaryIdentificationEditBtn.click();
                break;
            case 'add kyc':
                await this.addDataKycLink.waitForClickable({timeout: config.wait.XL});
                await this.addDataKycLink.click();
                break;
            case 'add kyc high risk':
                await this.addDataKycHighRiskLink.waitForClickable({timeout: config.wait.XL});
                await this.addDataKycHighRiskLink.click();
                break;
            case 'confirm kyc':
                await this.editIconKyc.waitForClickable({timeout: config.wait.XL});
                await this.editIconKyc.click();
                break;
            default:
                throw new ElementValidationKeyNotFound({message: 'The key entered is not valid', key: functionality});
        }
    }

    async goBack() {
        await this.back.click();
    }

    async accessToUnsubscribe() {
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
        await this.unsubscribeLink.waitForClickable({timeout: config.wait.XXL});
        await this.unsubscribeLink.click();
    }

    async unmaskPersonalInfo() {
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.L});
        await this.personalInfoShowBtn.click();
    }

    /**
     * Unmask contacts section on profile
     */
    async unmaskContacts() {
        const {otp} = global.user;
        await this.mobileShowButton
            .waitForClickable({timeout: config.wait.L});
        await (await this.mobileShowButton
            .waitForClickable({timeout: config.wait.L}))
            .click();
        await this.fillOtp(otp);
    }

    /**
     * Unmask email section on profile
     */
    async unmaskEmailData() {
        const {otp} = global.user;
        await (await this.emailShowButton
            .waitForClickable({timeout: config.wait.L}))
            .click();
        await this.fillOtp(otp);
    }

    async unmaskTaxResidenceData() {
        await this.taxResidenceShowBtn.waitForClickable({timeout: config.wait.L});
        await this.taxResidenceShowBtn.click();
    }

    async confirmCurp() {
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.L});
        await this.curpConfirmBtn.waitForDisplayed({timeout: config.wait.XL});
        await this.curpConfirmBtn.click();
    }

    async unmaskAddressData() {
        const {otp} = global.user;
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.XXL});
        await this.addressShowbutton.waitForClickable({timeout: config.wait.XL});
        await this.addressShowbutton.click({timeout: config.wait.M});
        await this.fillOtp(otp);
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.XXL});
    }

    async openInfoModalAddress() {
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
        await this.addressInfoButton.waitForClickable({timeout: config.wait.L});
        await this.addressInfoButton.click();
    }

    async seesEditAddressInfoModal() {
        await this.editAddress.waitForClickable({timeout: config.wait.M});
        await this.editAddress.click();
    }

    async seesAddAddressInfoModal() {
        await this.addAddress.waitForClickable({timeout: config.wait.M});
        await this.addAddress.click();
    }

    async fiscalDataSectionShow(){
        await this.fiscalDataShowBtn.scrollIntoView({block: 'center'});
        await this.fiscalDataShowBtn.waitForClickable({timeout: config.wait.M});
        await this.fiscalDataShowBtn.click();
    }

    async enterFiscalData() {
        await this._fillFlags();
        await this.fiscalDataSectionShow();
        await this.fillOtp('88081023');
        await this.fiscalDataModifyBtn.waitForClickable({timeout: config.wait.XXL});
        await this.fiscalDataModifyBtn.click();
    }

    async showSectionUpdateRfc() {
        await this.fiscalDataSectionShow();
        await this.fillOtp('11111111');
    }

    async goToUpdateRfc() {
        await this.showSectionUpdateRfc();
        await this.btnMessageUpdateRfc.scrollIntoView({block: 'center'});
        await this.btnMessageUpdateRfc.waitForClickable({timeout: config.wait.L});
        await this.btnMessageUpdateRfc.click();
    }

    async _fillFlags(flag = true) {
        await this.profileManager.execute({
            script: flag => this._flagCustomerTaxData = flag, args: [flag]
        });
        await this.executeMethod('mapMaskedTaxData', '');
    }

    async executeMethod(method, data) {
        await this.profileManager.execute({
            script: (method, data) => this[method](data), args: [method, data]
        });
    }
    async seesCustomersContractsList(){
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.M});
        await this.contractsShowButton.waitForExist({timeout: config.wait.M});
        await this.contractsShowButton.scrollIntoView();
        await this.contractsShowButton.waitForClickable({timeout: config.wait.M});
        await this.contractsShowButton.click();
        await this.waitUntilSpinnerVeil({timeoutToDisappear: config.wait.XL});
    }
}

export default new Profile();
