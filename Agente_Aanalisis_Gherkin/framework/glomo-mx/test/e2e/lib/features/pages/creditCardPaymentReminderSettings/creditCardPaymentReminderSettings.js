import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHeaderMain from '../../components/bbva-header-main';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page('creditCardPaymentReminderSettings')
class CreditCardPaymentReminderSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-creditCardPaymentReminderSettings[state="active"]',
            elements: {
                header: [BbvaHeaderMain, {
                    additionalElements: {
                        title: '.text',
                        backButton: '.left-group button.icon',
                        helpButton: '.right-group button.icon'
                    }
                }],
                settingsComponent: {
                    properties: {
                        root: '[data-tag-name="user-notifications-notifications-settings-mx"]'
                    },
                    contentWrapper: '.content-wrapper',
                    cardList: '[data-tag-name="user-notifications-notifications-settings-mx-card-list"]',
                    descriptionContainer: '.description-container',
                    cardsContainer: '.cards-container',
                    listCard: '[data-tag-name="user-notifications-notifications-settings-mx-list-card"]',
                    modifyLink: '[data-tag-name="bbva-type-link"]',
                    toggleSwitch: '[data-tag-name="bbva-form-toggle"], [data-tag-name="bbva-form-toggle-spherica"]',
                    notificationMessage: '[data-tag-name="bbva-notification-toast"]',
                    saveButton: '[data-tag-name="bbva-button-default"][fullwidth]',
                },
                errorModal: GlomoAlertManagerSpherica,
                toast: {
                    properties: {root: '[data-tag-name="cells-alert-manager-spherica"]'},
                    description: 'paper-toast div span'
                },
                modifyComponent: {
                    properties: {
                        root: '[data-tag-name="user-notifications-notifications-settings-mx-reminder-config"]'
                    },
                    remindersToggle: '[data-tag-name="bbva-form-toggle"], [data-tag-name="bbva-form-toggle-spherica"]',
                    remindersToggleOn: '[data-tag-name="bbva-form-toggle"][checked], [data-tag-name="bbva-form-toggle-spherica"][checked]',
                    remindersToggleOff: '[data-tag-name="bbva-form-toggle"]:not([checked]), [data-tag-name="bbva-form-toggle-spherica"]:not([checked])',
                    toggleSwitchOn: '[data-tag-name="bbva-form-toggle-switch"][checked], [data-tag-name="bbva-form-toggle-switch-spherica"][checked]',
                    toggleSwitchOff: '[data-tag-name="bbva-form-toggle-switch"]:not([checked]), [data-tag-name="bbva-form-toggle-switch-spherica"]:not([checked])',
                    businessDayCheckbox: '[data-tag-name="bbva-form-checkbox"][value="businessDay"]',
                    customDayCheckbox: '[data-tag-name="bbva-form-checkbox"][value="customDay"]',
                    businessDayChecked: '[data-tag-name="bbva-form-checkbox"][value="businessDay"][checked], bbva-form-checkbox[value="businessDay"][checked]',
                    customDayChecked: '[data-tag-name="bbva-form-checkbox"][value="customDay"][checked], bbva-form-checkbox[value="customDay"][checked]',
                    daysDropdown: '[data-tag-name="bbva-form-select"]',
                    daysDropdownOption: '[data-tag-name="bbva-form-option"]',
                    chooseReminderDaysButton: '[data-tag-name="bbva-form-option"][value="__OPTION__"]',
                    appRadioButton: '[data-tag-name="bbva-form-radio-button-input"][value="app-notification"]',
                    emailRadioButton: '[data-tag-name="bbva-form-radio-button-input"][value="email"]',
                    warningMessage: '[data-tag-name="bbva-notification-message"], .warning-message',
                    nextPaymentInfo: '.payment-date-info, .next-payment-info',
                },
                helpComponent: [BbvaHelpModal, {
                    modifiers: '[visible]',
                    additionalElements: {
                        faqAccordion: '[data-tag-name="bbva-expandable-accordion"]',
                        answerText: '.faq-content',
                        illustration: '[data-tag-name="bbva-media-image-spherica"], [class*="illustration"]',
                    }
                }]
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'root',
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.additionalElements.title.waitForText({timeout: config.wait.S});
                break;
            case 'header close button':
                await this.header.additionalElements.backButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'settings content':
                await this.settingsComponent.contentWrapper.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'card list':
                await this.settingsComponent.cardList.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'toggle switch':
            case 'toggle label':
            case 'reminders toggle label':
                await this.settingsComponent.toggleSwitch.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'success notification':
                await this.toast.description.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'error title':
                await this.errorModal.titles.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'error message':
                await this.errorModal.descriptions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'retry button':
                await this.errorModal.acceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'back button':
                await this.header.additionalElements.backButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'cards list':
                await this.settingsComponent.cardList.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modify link':
                await this.settingsComponent.modifyLink.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'reminders toggle':
                await this.modifyComponent.remindersToggle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'reminders toggle on':
                await this.modifyComponent.remindersToggleOn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'reminders toggle off':
                await this.modifyComponent.remindersToggleOff.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'business day before checkbox':
                await this.modifyComponent.businessDayCheckbox.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'custom day checkbox':
            case 'custom day checkbox unchecked':
                await this.modifyComponent.customDayCheckbox.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'days dropdown':
                await this.modifyComponent.daysDropdown.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'app notification radio button':
                await this.modifyComponent.appRadioButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'email radio button selected':
                await this.modifyComponent.emailRadioButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'save button':
                await this.settingsComponent.saveButton.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'warning message':
                await this.modifyComponent.warningMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'next payment date info':
                await this.modifyComponent.nextPaymentInfo.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'reminders modified':
            case 'reminders deactivated':
                await this.settingsComponent.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help title':
                await this.helpComponent.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'close button':
            case 'modal close button':
                await this.helpComponent.iconCloseBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'question what are payment reminders':
                await this._waitForFaqQuestionByText(['¿Qué son los recordatorios de pago?']);
                break;
            case 'question what is the payment deadline':
                await this._waitForFaqQuestionByText(['¿Qué es la fecha límite de pago?']);
                break;
            case 'question what are business days':
                await this._waitForFaqQuestionByText(['¿Qué son los días hábiles?']);
                break;
            case 'question how to deactivate reminders':
                await this._waitForFaqQuestionByText(['¿Cómo puedo desactivar los recordatorios?']);
                break;
            case 'question why keep receiving reminders':
                await this._waitForFaqQuestionByText(['¿Por qué sigo recibiendo recordatorios si ya los desactivé?']);
                break;
            case 'expand button for each question':
                await this.helpComponent.additionalElements.faqAccordion.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'last answer collapse button':
            case 'last answer text': {
                const answers = await this.helpComponent.additionalElements.answerText.elements();
                await answers[answers.length - 1].waitForDisplayed({timeout: config.wait.S});
                break;
            }
            case 'modal title':
                await this.helpComponent.titleText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'help illustration':
                await this.helpComponent.additionalElements.illustration.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'help description':
                await this.helpComponent.description.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async returnToPreviousScreen() {
        await this.header.additionalElements.backButton.waitForDisplayed({timeout: config.wait.S});
        await this.header.additionalElements.backButton.click();
    }

    async openHelpModal() {
        await this.header.additionalElements.helpButton.waitForDisplayed({timeout: config.wait.S});
        await this.header.additionalElements.helpButton.click();
    }

    async closePaymentReminderHelp() {
        await this.helpComponent.iconCloseBtn.waitForDisplayed({timeout: config.wait.S});
        await this.helpComponent.iconCloseBtn.click();
    }

    async accessReminderSettingsEdition() {
        await this.settingsComponent.modifyLink.waitForDisplayed({timeout: config.wait.S});
        await this.settingsComponent.modifyLink.click();
    }

    async confirmReminderSettingsChanges() {
        await this.settingsComponent.saveButton.waitForDisplayed({timeout: config.wait.S});
        await this.settingsComponent.saveButton.waitForEnabled({timeout: config.wait.M});
        await this.settingsComponent.saveButton.click();
    }

    async chooseEmailNotificationChannel() {
        await this.modifyComponent.emailRadioButton.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.emailRadioButton.click();
    }

    async chooseAppNotificationChannel() {
        await this.modifyComponent.appRadioButton.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.appRadioButton.click();
    }

    async disableCustomDayOption() {
        await this.modifyComponent.customDayCheckbox.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.customDayCheckbox.click();
    }

    async disableBusinessDayOption() {
        await this.modifyComponent.businessDayCheckbox.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.businessDayCheckbox.click();
    }

    async chooseReminderDays(optionValue) {
        await this.modifyComponent.daysDropdown.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.daysDropdown.click();
        const element = this.modifyComponent.chooseReminderDaysButton.specifySelector({placeholder: '__OPTION__', value: optionValue});
        await element.waitForDisplayed({timeout: config.wait.S});
        await element.click();
    }

    async activateReminders() {
        await this.modifyComponent.remindersToggle.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.remindersToggle.click();
        await this.modifyComponent.remindersToggleOn.waitForDisplayed({timeout: config.wait.M});
    }

    async deactivateReminders() {
        await this.modifyComponent.remindersToggle.waitForDisplayed({timeout: config.wait.S});
        await this.modifyComponent.remindersToggle.click();
        await this.modifyComponent.remindersToggleOff.waitForDisplayed({timeout: config.wait.M});
    }

    async retryReminderSettingsRequest() {
        await this.errorModal.acceptBtn.waitForDisplayed({timeout: config.wait.S});
        await this.errorModal.acceptBtn.click();
    }

    async _waitForFaqQuestionByText(questionTexts) {
        await this.helpComponent.additionalElements.faqAccordion.elementByText({ text: questionTexts[0], timeout: config.wait.S });
    }

    async disableAllReminderOptions() {
        await this.disableBusinessDayOption();
        await this.disableCustomDayOption();
    }
}

export default new CreditCardPaymentReminderSettings();
