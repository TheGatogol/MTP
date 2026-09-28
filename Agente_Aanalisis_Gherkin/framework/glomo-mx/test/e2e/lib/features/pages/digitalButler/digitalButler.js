import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

const _PRODUCT = {
    'Accounts': 'Cuentas',
    'Credit Card': 'Tarjetas de crédito',
    'Cuentas': 'account',
    'Tarjetas de crédito': 'card',
    'card': 'Tarjetas de crédito',
    'account': 'Cuentas',
};
const _STATUS = {
    'account': {
        'Pending update': 'Pendiente de actualizar',
        'Restricted': 'Restringida',
        'Blocked': 'Bloqueada',
    },
    'card': {
        'Pending activation': 'Pendiente de activar',
        'Overdue': 'Vencida',
        'Blocked': 'Bloqueada',
        'Off': 'Apagada',
    }
};

@page('digitalButler')
class DigitalButler extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-digitalButler[state="active"]',
            elements: {
                mobileGeolocation: 'cells-mobile-geolocation',
                digitalButlerChatbot: {
                    properties: { root: '[data-tag-name="digital-butler-chatbot"]' },
                    header: '[data-tag-name="bbva-header-main"]#digital-butler-chatbot-main-header',
                    infoHeaderButton: '[data-tag-name="bbva-header-main"]#digital-butler-chatbot-main-header button#btn-secondary [data-tag-name="bbva-type-icon"]',
                    closeHeaderButton: '[data-tag-name="bbva-header-main"]#digital-butler-chatbot-main-header button#btn-close [data-tag-name="bbva-type-icon"]',
                    chatBotMessage: '[data-tag-name="bbva-chat-bot"] [data-tag-name="bbva-type-text"]',
                    conversationWrapper: '.content-wrapper',
                    userMessage: '[data-tag-name="bot-user-message"] [data-tag-name="bbva-chat-container"] [data-tag-name="bbva-type-text"]',
                    chatButton: '.chat-form-wrapper .chat-form-container [data-tag-name="bbva-chat-form"] [data-tag-name="bbva-button-default"].send',
                    chatForm: '.chat-form-wrapper .chat-form-container [data-tag-name="bbva-chat-form"] textarea.text-area',
                    formRating: {
                        properties: {root: '[data-tag-name="bot-binary-feedback"] [data-tag-name="bbva-form-rating"] div.form-rating'},
                        binaryFeedback: 'button[data-id="__VALUE__"]',
                        shareButton: 'button[data-id="share"]',
                        ratingContainer: '.inline-controls'
                    },
                    link: '[data-tag-name="bot-link"] .link-wrapper [data-tag-name="bbva-type-link"]',
                    linkLabel: '[data-tag-name="bot-link"] .link-wrapper [data-tag-name="bbva-type-link"] .link-text',
                    linkButton: '[data-tag-name="bot-link"] .link-wrapper [data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-icon"][icon="__ICON__"]',
                    linkStatement: {
                        properties: { root: '[data-tag-name="bot-link"] .link-wrapper [data-tag-name="bbva-type-link"]' },
                        title: '.link-text',
                        date: 'span',
                    },
                    chipLink: '[data-tag-name="bot-link"].message-container .link-wrapper [data-tag-name="bbva-type-link"]',
                    stickyDetector: '.sticky-detector',
                    messagesRetryButton: '.section-error-wrapper [data-tag-name="bbva-notification-message"] .container-text [data-tag-name="bbva-type-link"]',
                    modalErrorRetryButton: '[ambient="primary-alt"] [data-tag-name="bbva-help-modal"][id-modal="digital-butler-chatbot-full-error-modal"] * .content .transition-container [data-tag-name="bbva-button-default"]',
                    suggestionWrapper: '.suggestions-wrapper',
                    suggestionButtonDefault: '.suggestions-wrapper [data-tag-name="bbva-button-default"]',
                    suggestionButtonPositive: '.suggestions-wrapper [data-tag-name="bbva-button-default"][variant="alert-positive"]',
                    suggestionButtonNegative: '.suggestions-wrapper [data-tag-name="bbva-button-default"][variant="alert-secondary"]',
                    transactionsTitle: '.content-wrapper .messages-group [data-tag-name="bot-movements-list"] [data-tag-name="bbva-type-link"]',
                    cardDetail: {
                        properties: { root: '.content-wrapper' },
                        productBalance: {
                            properties: { root: '[data-tag-name="bot-family-products-balance"] [data-tag-name="bot-product-balance"]' },
                            image: '[data-tag-name="bbva-clip-card"] div.image-wrapper',
                            alias: '[data-tag-name="bbva-type-text"]',
                            lastDigits: '[data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"]',
                            status: '[data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"]',
                        },
                        infoList: {
                            properties: { root: '[data-tag-name="bot-info-list"] .main-container' },
                            items: '.info-container',
                            title: '.info-container [data-tag-name="bbva-type-text"]:first-child',
                            amount: '.info-container [data-tag-name="bbva-type-amount"]',
                            text: '[data-tag-name="bbva-type-text"]',
                            link: '[data-tag-name="bbva-type-link"]',
                            cardExpirationDate: 'div.info-container:nth-child(2) div [data-tag-name="bbva-type-text"]:last-child span',
                            cardNumber: 'div.info-container:nth-child(1) div [data-tag-name="bbva-type-text"]:last-child span',
                            titleCardNumber: 'div.info-container:nth-child(1) div [data-tag-name="bbva-type-text"]:first-child span',
                            copyText: 'div.info-container:nth-child(1) [data-tag-name="bbva-type-link"]',
                        },
                    },
                    botProductBalance: '[data-tag-name="bot-family-products-balance"]',
                    chips: ' [data-tag-name="bot-link"] [data-tag-name="bbva-type-link"]',
                    botMovementList: {
                        properties: { root: '[data-tag-name="bot-movements-list"] .movement-wrapper' },
                        concept: '.row .title-wrapper [data-tag-name="bbva-type-text"]',
                        amount: '[data-tag-name="bbva-type-amount"]',
                        status: '[data-tag-name="bbva-type-text"]',
                        icon: '[data-tag-name="bbva-clip-box-item"]'
                    },
                    botBalanceExpandable: {
                        properties: { root: '[data-tag-name="bot-family-products-balance"]' },
                        balanceExpandableAccordionAccount: {
                            properties: { root: '[data-tag-name="bbva-expandable-accordion"]:first-child' },
                            expandableAccountBalanceTitle: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            expandableAccountTotalBalance: '[slot="header"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-amount"]',
                            expandableAccountTitleIcon: '.header-accordion [data-tag-name="bbva-type-icon"]',
                            balanceExpandableAccordionAccountOpened: {
                                properties: { root: '[slot="content"] > [role="list"] > [data-tag-name="bot-product-balance"]:first-child' },
                                expandableAccountProductAlias: '[data-tag-name="bbva-type-text"]',
                                expandableAccountProductBalance: '.column-secondary [data-tag-name="bbva-type-amount"] .amount-wrapper',
                                expandableAccountProductLastDigits: '.image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"]',
                                expandableAccountProductSpanAvailableBalance: '[data-tag-name="bbva-type-text"]',
                                expandableAccountProductStatus: '[data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            }
                        },
                        balanceExpandableAccordionCard: {
                            properties: { root: '[data-tag-name="bbva-expandable-accordion"]:last-child' },
                            expandableCardBalanceTitle: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            expandableCardTotalBalance: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-amount"]',
                            expandableCardTitleIcon: '.header-accordion [data-tag-name="bbva-type-icon"]',
                            balanceExpandableAccordionCardOpened: {
                                properties: { root: '[slot="content"] > [role="list"] > [data-tag-name="bot-product-balance"]' },
                                expandableCardProductAlias: '[data-tag-name="bbva-type-text"]',
                                expandableCardProductBalance: '.column-secondary [data-tag-name="bbva-type-amount"] .amount-wrapper',
                                expandableCardProductLastDigits: '.image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"]',
                                expandableCardProductSpanAvailableBalance: '[data-tag-name="bbva-type-text"]',
                                expandableCardProductStatus: '[data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            }
                        },
                        botProductBalance: {
                            properties: { root: '[data-tag-name="bot-product-balance"] .content-wrapper' },
                            lastDigits: '.image-reference-wrapper [data-tag-name="bbva-badge-reference"]'
                        }
                    },
                },
                termsAndConditionsBlueModal: {
                    properties: { root: '[data-tag-name="blue-modal-terms-and-conditions"] [data-tag-name="bbva-help-modal"]' },
                    headerTitle: '.content .transition-container .modal-header [data-tag-name="bbva-header-main"]#helpModalHeader .header #heading [data-tag-name="bbva-type-text"]',
                    closeHeaderButton: '.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader header .header-icons button#btn-close',
                    contentMicroillustration: '[data-tag-name="bbva-micro-illustration"]',
                    bullets: '[data-tag-name="bbva-list-bullet"]',
                    subTitle: '[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                    buttonUnderstood: '.modal-footer [data-tag-name="bbva-button-default"]',
                    documentLink: '[data-tag-name="chatbot-file"]'
                },
                successfullResponseBlueModal: {
                    properties: { root: '[data-tag-name="blue-modal-successfull-response"] [data-tag-name="bbva-help-modal"]' },
                    headerTitle: '.content .transition-container .modal-header [data-tag-name="bbva-header-main"]#helpModalHeader .header #heading [data-tag-name="bbva-type-text"]',
                    panelContainer: {
                        properties: { root: '[data-tag-name="panel-container"] .card-container' },
                        amount: '[data-tag-name="bbva-type-amount"].type-amount-success',
                        subtitle: '[data-tag-name="bbva-type-text"].type-text-success-subtitle'
                    },
                    footerButton: '.modal-footer [data-tag-name="bbva-button-default"]',
                },
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                digitalButlerChatbot: {
                    properties: { root: '[data-tag-name="digital-butler-chatbot"]' },
                    linkLabel: '[data-tag-name="bot-link"] div.link-wrapper [data-tag-name="bbva-type-link"] .link-text',
                    linkButton: '[data-tag-name="bot-link"] div.link-wrapper [data-tag-name="bbva-type-link"] [data-tag-name="bbva-type-icon"][icon="__ICON__"]',
                    linkStatement: {
                        properties: { root: '[data-tag-name="bot-link"] div.link-wrapper [data-tag-name="bbva-type-link"]' },
                        title: 'span.link-text',
                        date: 'span',
                    },
                    chipLink: '[data-tag-name="bot-link"].message-container div.link-wrapper [data-tag-name="bbva-type-link"]',
                    stickyDetector: 'div.sticky-detector',
                    messagesRetryButton: 'div.section-error-wrapper [data-tag-name="bbva-notification-message"] div.container-text [data-tag-name="bbva-type-link"]',
                    closeHeaderButton: '[data-tag-name="bbva-header-main"]#digital-butler-chatbot-main-header button#btn-close [data-tag-name="bbva-type-icon"]',
                    modalErrorRetryButton: 'div[ambient="primary-alt"] [data-tag-name="bbva-help-modal"][id-modal="digital-butler-chatbot-full-error-modal"] div div.content .transition-container [data-tag-name="bbva-button-default"]',
                    suggestionWrapper: '.suggestions-wrapper',
                    suggestionButtonPositive: '.suggestions-wrapper [data-tag-name="bbva-button-default"][variant="alert-positive"]',
                    suggestionButtonNegative: '.suggestions-wrapper [data-tag-name="bbva-button-default"][variant="alert-secondary"]',
                    cardDetail: {
                        properties: { root: 'div.content-wrapper div' },
                        productBalance: {
                            status: 'div [data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"] span',
                        },
                        infoList: {
                            properties: { root: '[data-tag-name="bot-info-list"] div.main-container' },
                            titleCardExpirationDate: 'div.info-container:nth-child(2) div [data-tag-name="bbva-type-text"]:first-child span',
                            cardExpirationDate: 'div.info-container:nth-child(2) div [data-tag-name="bbva-type-text"]:last-child span',
                            cardNumber: 'div.info-container:nth-child(1) div [data-tag-name="bbva-type-text"]:last-child span',
                            titleCardNumber: 'div.info-container:nth-child(1) div [data-tag-name="bbva-type-text"]:first-child span',
                            copyText: 'div.info-container:nth-child(1) [data-tag-name="bbva-type-link"]',
                        },
                    },
                    botBalanceExpandable: {
                        properties: { root: '[data-tag-name="bot-family-products-balance"]' },
                        balanceExpandableAccordionAccount: {
                            properties: { root: '[data-tag-name="bbva-expandable-accordion"]:first-child' },
                            expandableAccountBalanceTitle: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            expandableAccountTotalBalance: 'div[slot="header"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-amount"]',
                            expandableAccountTitleIcon: '.header-accordion [data-tag-name="bbva-type-icon"]',
                            balanceExpandableAccordionAccountOpened: {
                                properties: { root: 'div[slot="content"] > div[role="list"] > [data-tag-name="bot-product-balance"]:first-child' },
                                expandableAccountProductAlias: 'div [data-tag-name="bbva-type-text"] span',
                                expandableAccountProductBalance: 'div.column-secondary [data-tag-name="bbva-type-amount"] .amount-wrapper',
                                expandableAccountProductLastDigits: '.image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"]',
                                expandableAccountProductSpanAvailableBalance: '[data-tag-name="bbva-type-text"][tag="span"]',
                                expandableAccountProductStatus: '[data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            }
                        },
                        balanceExpandableAccordionCard: {
                            properties: { root: '[data-tag-name="bbva-expandable-accordion"]:last-child' },
                            expandableCardBalanceTitle: '[data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            expandableCardTotalBalance: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-amount"]',
                            expandableCardTitleIcon: '.header-accordion [data-tag-name="bbva-type-icon"]',
                            balanceExpandableAccordionCardOpened: {
                                properties: { root: 'div[slot="content"] > div[role="list"] > [data-tag-name="bot-product-balance"]' },
                                expandableCardProductAlias: 'div [data-tag-name="bbva-type-text"] span',
                                expandableCardProductBalance: 'div.column-secondary [data-tag-name="bbva-type-amount"] .amount-wrapper',
                                expandableCardProductLastDigits: '.image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"]',
                                expandableCardProductSpanAvailableBalance: '[data-tag-name="bbva-type-text"][tag="span"]',
                                expandableCardProductStatus: '[data-tag-name="bbva-badge-default"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            }
                        },
                        botFamilyProductsBalanceSingleProductAccount: {
                            properties: { root: '[data-tag-name="bbva-expandable-accordion"]:first-child' },
                            Title: 'div[slot="header"] [data-tag-name="bbva-header-category"] .title-container [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                            Opened: {
                                properties: { root: 'div[slot="content"] > div > [data-tag-name="bot-product-balance"]' },
                                Alias: '.content-wrapper.has-link > div [data-tag-name="bbva-type-text"][tag="span"] span.text',
                                Icon: '.content-wrapper.has-link > div .image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-clip-box"] [data-tag-name="bbva-clip-box-item"]',
                                Termination: '.content-wrapper.has-link > div .image-reference-wrapper [data-tag-name="bbva-badge-reference"] [data-tag-name="bbva-type-text"][text="__TEXT__"]'
                            }
                        }
                    },
                    botMovementList: {
                        properties: { root: '[data-tag-name="bot-movements-list"] div.movement-wrapper' },
                        concept: 'div.row div.title-wrapper [data-tag-name="bbva-type-text"]',
                        status: '[data-tag-name="bbva-type-text"]',
                    },
                },
                termsAndConditionsBlueModal: {
                    properties: { root: '[data-tag-name="blue-modal-terms-and-conditions"] [data-tag-name="bbva-help-modal"]' },
                    headerTitle: 'div.content .transition-container div.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader div.header div#heading [data-tag-name="bbva-type-text"]',
                    closeHeaderButton: '.modal-header [data-tag-name="bbva-header-main"]#helpModalHeader header div.header-icons button#btn-close',
                    contentMicroillustration: '[data-tag-name="bbva-micro-illustration"]',
                    bullets: '[data-tag-name="bbva-list-bullet"]',
                    subTitle: 'div[slot="slot-content"] [data-tag-name="bbva-type-text"]',
                    buttonUnderstood: '.modal-footer [data-tag-name="bbva-button-default"]',
                },
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'digitalButlerChatbot'
            ]
        });
    }

    async _capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async _fillChatForm(text) {
        await (await (await (await this.digitalButlerChatbot.chatForm.waitForDisplayed({ timeout: config.wait.M }))
            .waitForEnabled({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .setValue({ value: text });
    }

    async _screenValidation({ item, value, status } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.digitalButlerChatbot.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close header button':
                await this.digitalButlerChatbot.closeHeaderButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'info header button':
                await this.digitalButlerChatbot.infoHeaderButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'chat bot message':
                await this.digitalButlerChatbot.chatBotMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'chat bot custom message':
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: value })).waitForDisplayed({ timeout: config.wait.XS });
                break;
            case 'user message':
                await this.digitalButlerChatbot.userMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'messages retry button':
                await this.digitalButlerChatbot.messagesRetryButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal error retry button':
                await this.digitalButlerChatbot.modalErrorRetryButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'chat button':
                await this.digitalButlerChatbot.chatButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'chat form':
                await this.digitalButlerChatbot.chatForm.waitForEnabled({ timeout: config.wait.M, reverse: value !== 'enable' });
                break;
            case 'form rating':
                await this.digitalButlerChatbot.formRating.ratingContainer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link':
                await this.digitalButlerChatbot.linkButton
                    .specifySelector({ placeholder: '__ICON__', value: 'spherica:next' })
                    .waitForDisplayed({
                        timeout: config.wait.M,
                        reverse: status && (status !== 'Blocked' || value !== 'account')
                    });
                break;
            case 'chips':
                await this.digitalButlerChatbot.chips.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'suggestion button default':
                await this.digitalButlerChatbot.suggestionButtonDefault.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'suggestion button positive':
                await this.digitalButlerChatbot.suggestionButtonPositive.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'suggestion button cancel':
                await this.digitalButlerChatbot.suggestionButtonNegative.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card detail image':
                await this.digitalButlerChatbot.cardDetail.productBalance.image.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card detail alias':
                await this.digitalButlerChatbot.cardDetail.productBalance.alias.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card detail last digits':
                await this.digitalButlerChatbot.botBalanceExpandable.botProductBalance.lastDigits.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card detail status':
                await this.digitalButlerChatbot.cardDetail.productBalance.status.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'card detail title info list': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.title, config.wait.M);
                const titleElements = (await this.digitalButlerChatbot.cardDetail.infoList.title.elements()).value[0];
                await titleElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'card detail amount info list': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.amount, config.wait.M);
                const amountElements = (await this.digitalButlerChatbot.cardDetail.infoList.amount.elements()).value[0];
                await amountElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'card detail card expiration date': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.cardExpirationDate, config.wait.M);
                const cardExpirationDateElements = (await this.digitalButlerChatbot.cardDetail.infoList.cardExpirationDate.elements()).value[0];
                await cardExpirationDateElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'card detail card number': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.cardNumber, config.wait.M);
                const cardNumberElements = (await this.digitalButlerChatbot.cardDetail.infoList.cardNumber.elements()).value[0];
                await cardNumberElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'card detail title card number': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.titleCardNumber, config.wait.M);
                const titleCardNumberElements = (await this.digitalButlerChatbot.cardDetail.infoList.titleCardNumber.elements()).value[0];
                await titleCardNumberElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'card detail copy text action': {
                await this.waitForElementsExist(this.digitalButlerChatbot.cardDetail.infoList.copyText, config.wait.M);
                const copyTextElements = (await this.digitalButlerChatbot.cardDetail.infoList.copyText.elements()).value[0];
                await copyTextElements.waitForDisplayed({ timeout: config.wait.M });
                break;
            }
            case 'movement concept':
                await this.digitalButlerChatbot.botMovementList.concept.waitForDisplayed({ timeout: config.wait.M, reverse: (value === 'not visible') });
                break;
            case 'movement amount':
                await this.digitalButlerChatbot.botMovementList.amount.waitForDisplayed({ timeout: config.wait.M, reverse: (value === 'not visible') });
                break;
            case 'movement status':
                await this.digitalButlerChatbot.botMovementList.status.waitForDisplayed({ timeout: config.wait.M, reverse: (value === 'not visible') });
                break;
            case 'movement icon':
                await this.digitalButlerChatbot.botMovementList.icon.waitForDisplayed({ timeout: config.wait.M, reverse: (value === 'not visible') });
                break;
            case 'expandables balances':
                await this.digitalButlerChatbot.botProductBalance.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable balance title':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`expandable${await this._capitalizeFirstLetter(value)}BalanceTitle`]
                    .specifySelector({ placeholder: '__TEXT__', value: _PRODUCT[value] })
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable total balance':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`expandable${await this._capitalizeFirstLetter(value)}TotalBalance`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable title icon':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`expandable${await this._capitalizeFirstLetter(value)}TitleIcon`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable product alias':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}Opened`][`expandable${await this._capitalizeFirstLetter(value)}ProductAlias`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable product balance':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}Opened`][`expandable${await this._capitalizeFirstLetter(value)}ProductBalance`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable product last digits':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}Opened`][`expandable${await this._capitalizeFirstLetter(value)}ProductLastDigits`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable product span available balance':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}Opened`][`expandable${await this._capitalizeFirstLetter(value)}ProductSpanAvailableBalance`]
                    .waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expandable product status':
                await this.digitalButlerChatbot
                    .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}`][`balanceExpandableAccordion${await this._capitalizeFirstLetter(value)}Opened`][`expandable${await this._capitalizeFirstLetter(value)}ProductStatus`]
                    .specifySelector({ placeholder: '__TEXT__', value: _STATUS[value][status] }).waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal terms header':
                await this.termsAndConditionsBlueModal.headerTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal terms subtitle':
                await this.termsAndConditionsBlueModal.subTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal terms bullets':
                await this.termsAndConditionsBlueModal.bullets.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal terms continue':
                await this.termsAndConditionsBlueModal.buttonUnderstood.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'statement title':
                await this.digitalButlerChatbot.linkStatement.title.waitForText({ timeout: config.wait.M, text: 'Ver estado de cuenta' });
                break;
            case 'statement date':
                await this.digitalButlerChatbot.linkStatement.date.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal receipt header':
                await this.successfullResponseBlueModal.headerTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal receipt footer button':
                await this.successfullResponseBlueModal.footerButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal receipt amount':
                await this.successfullResponseBlueModal.panelContainer.amount.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not visible' });
                break;
            case 'modal receipt subtitle':
                await this.successfullResponseBlueModal.panelContainer.subtitle.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not visible'  });
                break;
            case 'modal terms document link':
                await this.termsAndConditionsBlueModal.documentLink.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async acceptTermsAndConditions() {
        await (await (await this.termsAndConditionsBlueModal.buttonUnderstood.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async downloadTermsAndConditions() {
        await this.termsAndConditionsBlueModal.documentLink.scrollIntoView();
        await this.termsAndConditionsBlueModal.documentLink.waitForDisplayed({ timeout: config.wait.M });
        await this.termsAndConditionsBlueModal.documentLink.waitForClickable({ timeout: config.wait.M });
        await this.termsAndConditionsBlueModal.documentLink.click();
    }

    async leaveOperative({ blueScreen }) {
        const screenSelector = {
            'conversation': this.digitalButlerChatbot,
            'terms and conditions': this.termsAndConditionsBlueModal,
        };
        await (await (await screenSelector[blueScreen].closeHeaderButton.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async openTermsAndConditions() {
        await (await (await this.digitalButlerChatbot.infoHeaderButton.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async _toggleExpandableComponent(value) {
        const selector = this.digitalButlerChatbot
            .botBalanceExpandable[`balanceExpandableAccordion${await this._capitalizeFirstLetter(_PRODUCT[value])}`][`expandable${await this._capitalizeFirstLetter(_PRODUCT[value])}BalanceTitle`].specifySelector({ placeholder: '__TEXT__', value });
        await (await (await selector.waitForDisplayed({ timeout: config.wait.XXL })).waitForClickable({ timeout: config.wait.XXL })).click();
    }

    _convertToCamelCase(value) {
        return value.replace(/\s(\w)/g, (_match, p1) => p1.toUpperCase());
    }

    _extractMessagesFromGroupRequest(message) {
        return global.user.messagesGroupRequest[this._convertToCamelCase(message)];
    }

    async showBalanceProducts() {
        await this._toggleExpandableComponent(_PRODUCT['Accounts']);
        await this.digitalButlerChatbot.conversationWrapper.scrollIntoView();
        await this._toggleExpandableComponent(_PRODUCT['Credit Card']);
    }

    async hideBalanceProducts() {
        await this.showBalanceProducts();
        await this.digitalButlerChatbot.conversationWrapper.click();
        await this._toggleExpandableComponent(_PRODUCT['Credit Card']);
        await this._toggleExpandableComponent(_PRODUCT['Accounts']);
    }

    async showBalanceProduct(value) {
        await this._toggleExpandableComponent(_PRODUCT[value]);
        await this.digitalButlerChatbot.conversationWrapper.scrollIntoView();
    }

    async hideBalanceProduct(value) {
        await this.showBalanceProduct(value);
        await this.digitalButlerChatbot.conversationWrapper.click();
        await this._toggleExpandableComponent(_PRODUCT[value]);
    }

    async showAndHideBalanceProducts(value) {
        switch (value.toLowerCase()) {
            case 'more':
                await this.showBalanceProducts();
                break;
            case 'minus':
                await this.hideBalanceProducts();
                break;
            default:
                throw new Error(`The ${value} its not defined`);
        }
    }

    async sendRating(value) {
        const sphericaRating = {
            up: 'positive-thumb',
            down: 'negative-thumb',
        };
        const selector = this.digitalButlerChatbot.formRating.binaryFeedback.specifySelector({ placeholder: '__VALUE__', value: sphericaRating[value] });
        await (await (await selector.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async retryMessage(type) {
        let n = 1;
        const button = type === 'messages' ? this.digitalButlerChatbot.messagesRetryButton : this.digitalButlerChatbot.modalErrorRetryButton;
        while (n <= 3) {
            n++;
            await (await (await button.waitForDisplayed({ timeout: config.wait.XS }))
                .waitForClickable({ timeout: config.wait.XS }))
                .click();
        }
    }

    async selectSuggestion(type, getStoredValue) {
        switch (type.toLowerCase()) {
            case 'confirm':
                await (await (await this.digitalButlerChatbot.suggestionButtonPositive.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForClickable({ timeout: config.wait.M })).click();
                if (getStoredValue) {
                    await this.digitalButlerChatbot.chatBotMessage.waitForText({
                        text: 'ubicación actual',
                        timeout: config.wait.M,
                        exactMatch: false,
                        forceCase: false
                    });
                    const type = {
                        'geolocation': () => this.setGeolocation(),
                    };
                    await type[getStoredValue]();
                }
                break;
            case 'cancel':
                await (await (await this.digitalButlerChatbot.suggestionButtonNegative.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForClickable({ timeout: config.wait.XXL })).click();
                break;
            case 'default':
                await (await (await this.digitalButlerChatbot.suggestionButtonDefault.waitForDisplayed({ timeout: config.wait.M }))
                    .waitForClickable({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`The button "${type}" does not exist`);
        }
    }

    async requestContractProducts(message) {
        const messages = this._extractMessagesFromGroupRequest('contractProducts')[this._convertToCamelCase(message)];
        for (let i = 0; i < messages.length; i++) {
            await this.sendMessage(messages[i]);
        }
    }

    async requestPersonalInformation(message) {
        const messages = this._extractMessagesFromGroupRequest(message);
        for (let i = 0; i < messages.length; i++) {
            await this.sendMessage(messages[i]);
        }
    }

    async requestMessageOfProducts(message, typeOfProduct) {
        const dataMessages = {
            'full card detail': this._extractMessagesFromGroupRequest('requestFullCardDetail')[this._convertToCamelCase(message)],
            'details termination cards': this._extractMessagesFromGroupRequest('detailsTerminationCards')[this._convertToCamelCase(message)],
            'details termination blocked cards': this._extractMessagesFromGroupRequest('detailsTerminationBlockedCards')[this._convertToCamelCase(message)],
            'select termination cards': this._extractMessagesFromGroupRequest('selectTerminationCards')[this._convertToCamelCase(message)],
            'termination cards': this._extractMessagesFromGroupRequest('terminationCards')[this._convertToCamelCase(message)]
        };
        const messages = dataMessages[typeOfProduct] || '';
        for (let i = 0; i < messages.length; i++) {
            await this.sendMessage(messages[i]);
        }
    }

    async chooseChipLink(typeMessage) {
        const { chipText } = this._extractMessagesFromGroupRequest(typeMessage).find(item => item.chipText) || {};
        await this.digitalButlerChatbot.stickyDetector.scrollIntoView({block: 'center'});
        await this.digitalButlerChatbot.chipLink.waitForText({ text: chipText, timeout: config.wait.M });
        const chipElement = await this.digitalButlerChatbot.chipLink.elementByText({ text: chipText, timeout: config.wait.XXL });
        await( await chipElement.waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async requestAnyMessageFromProduct(typeMessage) {
        const messageList = this._extractMessagesFromGroupRequest(typeMessage);
        for (let i = 0; i < messageList.length; i++) {
            const { message, validateComponent, validateProduct, actionComponent } = messageList[i];
            actionComponent && await this.interactionComponent(actionComponent);
            message && await this.sendMessage(message, { validateProduct, validateComponent });
        }
    }

    async interactionComponent({ type, value, getStoredValue, productType, productTermination }) {
        const actionTypes = {
            'select movement': 'selectMovement',
            'select product': 'selectProduct',
            'send rating': 'sendRating',
            'suggestion': 'selectSuggestion',
            'otp': 'fillOtp'
        };
        const functionName = actionTypes[type];
        this[functionName] && await this[functionName](value, getStoredValue, productType, productTermination);
    }

    async selectMovement(movementConcept) {
        const movement = await this.digitalButlerChatbot.botMovementList.concept.elementByText({ text: movementConcept, timeout: config.wait.M });
        await (await movement.waitForClickable({ timeout: config.wait.M })).click();
        await this.digitalButlerChatbot.suggestionWrapper.scrollIntoView({ block: 'end' });
    }

    async selectProduct(_value, _getStoredValue, productType, productTermination) {
        switch (productType) {
            case 'Cuentas': {
                const singleProduct = this.digitalButlerChatbot.botBalanceExpandable.botFamilyProductsBalanceSingleProductAccount;
                await (await singleProduct.Title.specifySelector({ placeholder: '__TEXT__', value: productType }).waitForClickable({ timeout: config.wait.M })).click();
                await (await singleProduct.Opened.Termination.specifySelector({ placeholder: '__TEXT__', value: productTermination }).waitForClickable({ timeout: config.wait.M })).click();
                break;
            }
            default:
                throw new Error(`The product "${productType}" does not exist`);
        }
    }

    async sendMessage(text, {validateComponent = '', validateProduct} = {}) {
        const actions = {
            'expandable balances': async () => {
                await this.digitalButlerChatbot.botProductBalance.waitForDisplayed({ timeout: config.wait.M });
            },
            'expandable accounts': async () => {
                await (await this.digitalButlerChatbot
                    .botBalanceExpandable.balanceExpandableAccordionAccount.expandableAccountBalanceTitle
                    .specifySelector({ placeholder: '__TEXT__', value: 'Cuentas' })).waitForDisplayed({ timeout: config.wait.M });
            },
            'expandable cards': async () => {
                await (await this.digitalButlerChatbot
                    .botBalanceExpandable.balanceExpandableAccordionCard.expandableCardBalanceTitle
                    .specifySelector({ placeholder: '__TEXT__', value: 'Tarjetas de crédito' })).waitForDisplayed({ timeout: config.wait.M });
            },
            'desambiguation cards': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: '- Tarjeta ' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'desambiguation send money': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'transferencia' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'DIMO' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'desambiguation accounts': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: '- Cuenta ' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'desambiguation product with termination': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: validateProduct, timeout: config.wait.M }))
                    .waitForDisplayed({ timeout: config.wait.M });
            },
            'desambiguation account': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: '- Cuenta ' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'desambiguation account with alias': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'Para obtener el estado de cuenta' }))
                    .waitForDisplayed({ timeout: config.wait.L });
            },
            'desambiguation account with termination': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: validateProduct, timeout: config.wait.M }))
                    .waitForDisplayed({ timeout: config.wait.M });
            },
            'desambiguation account detail': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'Puedes elegir entre: numero de cuenta, alias' }));
            },
            'desambiguation statement': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'estado de cuenta' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'desambiguation card': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'tarjeta' }))
                    .waitForDisplayed({ timeout: config.wait.M });
            },
            'desambiguation movements': async () => {
                await (await this.digitalButlerChatbot.chatBotMessage.elementByText({ text: 'movimientos' }))
                    .waitForDisplayed({ timeout: config.wait.XS });
            },
            'error': () => {
                throw new Error(`The component "${validateComponent}" is not defined`);
            }
        };
        await this._fillChatForm(text);
        await (await (await (await this.digitalButlerChatbot.chatButton.waitForDisplayed({ timeout: config.wait.L }))
            .waitForEnabled({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M }))
            .click({useActions:false, scrollOptions: { block: 'nearest' }});
        await (await this.digitalButlerChatbot.chatForm.waitForClickable({ timeout: config.wait.XXL }))
            .click();
        await (await this.digitalButlerChatbot.userMessage.waitForText({ text, timeout: config.wait.M }))
            .waitForDisplayed({ timeout: config.wait.XXL });
        if (validateComponent) {
            const action = actions[validateComponent.toLowerCase()] || actions.error;
            await action();
        }
    }

    async fillOtp() {
        await this.signConnector.isLoaded();
        await this.signConnector.setPassword(12345678);
        await this.signConnector.confirmPassword();
    }

    async openInternalModal(modalText) {
        await this.digitalButlerChatbot.link.waitForText({ text: modalText, timeout: config.wait.M, exactMatch: false, forceCase: false });
        const linkButton = await this.digitalButlerChatbot.link.elementByText({ text: modalText, timeout: config.wait.M });
        await (await linkButton.waitForClickable({ timeout: config.wait.M }))
            .click();
    }

    async shareData() {
        await (await this.digitalButlerChatbot.formRating.shareButton.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setGeolocation() {
        const geoPosition = global.user.position;
        await this.mobileGeolocation.execute({
            script: (position) => {
                window.CellsNativePlugins = {};
                window.CellsNativePlugins.Geolocation = {};
                window.CellsNativePlugins.Geolocation.getCurrentPosition = (successCb) => successCb(position);
                this.getCurrentPosition();
            },
            args: [geoPosition]
        });
    }

    async selectNavigation({ text, icon }) {
        const linkButton = await this.digitalButlerChatbot.linkButton.specifySelector({ placeholder: '__ICON__', value: this.isSpherica() ? 'spherica:next' : `bbva:${icon}` });
        const linkLabel = await this.digitalButlerChatbot.linkLabel.specifySelector({ placeholder: '__ICON__', value: this.isSpherica() ? 'spherica:next' : `bbva:${icon}` });

        await (await linkLabel.waitForText({ text, timeout: config.wait.M }))
            .waitForDisplayed({ timeout: config.wait.M });
        await (await linkButton.waitForDisplayed({ timeout: config.wait.M }))
            .waitForClickable({ timeout: config.wait.M });
        await linkButton.click();
    }
}

export default new DigitalButler();
