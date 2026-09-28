
import AbstractGlomoPage from '../abstract-glomo-page';
import { Commands, ScreenValidationKeyNotFound } from '@csqe/radish';

//Components
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';

class AssistanceSection extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-assistanceSection[state="active"]',
            elements: {
                managerAssistance: '[data-tag-name="bbva-panel-button"] [data-tag-name="bbva-button-default"][text="Assistance Manager"]',
                header: BbvaHeaderMain,
                assistCard: {
                    bbvaLine: {
                        properties: { root: '[data-select="app__main"] [data-tag-name="bbva-list-clip"][heading="glomo-assistance-section-default-advisor-title"]' },
                        img: 'svg',
                        txtInfo: '.main-content',
                        btn: 'div.container-buttons bbva-button-action',
                    },
                    blueBbva: {
                        properties: { root: '[data-select="app__main"] [data-tag-name="bbva-list-clip"][heading="Blue"]' },
                        img: 'svg',
                        txtInfo: '.main-content',
                        btn: '.container-buttons bbva-button-action',
                    },
                    advisor: {
                        properties: { root: '[data-select="app__main"] [data-tag-name="bbva-list-clip"][heading="glomo-assistance-section-assistance-manager-title"]' },
                        img: 'svg',
                        txtInfo: '.main-content',
                        btn: 'div.container-buttons [data-tag-name="bbva-button-action"][label="Llamar asesor"]',
                        sendMail: 'div.container-buttons [data-tag-name="bbva-button-action"][label="Enviar correo"]',
                    },
                    remoteBanker: {
                        properties: { root: 'div.full-card-container' },
                        txtInfo: 'div.info-container',
                        btnConversations: 'div.full-card-container-buttons [data-tag-name="bbva-button-action"][label="Mis conversaciones"]',
                        btnContact: 'div.full-card-container-buttons [data-tag-name="bbva-button-action"][label="Llamar"]'
                    },
                    banker: {
                        properties: { root: '[heading="glomo-assistance-section-equity-assistant-title"]' },
                        img: 'svg',
                        txtInfo: '.main-content',
                        btnContact: 'div.full-card-container-buttons [data-tag-name="bbva-button-action"][label="Llamar"]',
                        btnConversations: 'div.container-buttons [data-tag-name="bbva-button-action"][label="Mis conversaciones"]',
                    },
                    bankerBtnConversations: 'bbva-button-action[label="Mis conversaciones"]',
                    outToTimeLineBBVA: {
                        properties: { root: '#assistanceSectionModal[data-select="app__overlay"]' },
                        txtInfo: 'bbva-type-text-spherica.u-margin-top--0.u-margin-bottom--0',
                        btnAccept: '.content .transition-container .modal-main .modal-footer slot bbva-button-default',
                    },
                    outToTimeAdvisor: {
                        properties: { root: '#assistanceSectionModal[data-select="app__overlay"]' },
                        img: 'bbva-banner-image figure',
                        txtInfo: '.transition-container .modal-content-wrapper #helpModalContent .slot-content',
                        linkCancel: 'div div.content  section div div.modal-footer slot div bbva-link',
                        btnUnderstood: 'div div.content section div div.modal-footer slot div bbva-button-default',
                    },
                    disabilityVideocall: {
                        properties: { root: '[data-select="app__main"] [data-tag-name="bbva-list-clip"][heading="glomo-assistance-section-disability-videocall-title"]' },
                        btn: 'div.container-buttons bbva-button-action',
                    },
                }
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                assistCard: {
                    bbvaLine: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Línea BBVA"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text'
                    },
                    bbvaLinePat: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Línea BBVA Patrimonial"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text',
                        btn: '.container-buttons [data-tag-name="bbva-button-action"][label="Llamar a Línea BBVA"]'
                    },
                    blueBbva: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Blue BBVA"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text'
                    },
                    advisor: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Asesor personal"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text',
                        btn: 'div.container-buttons [data-tag-name="bbva-button-action"][label="Llamar"]'
                    },
                    remoteBanker: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Banquero"]' },
                        txtInfo: '.clip-info-text',
                        btnConversations: 'div.container-buttons [data-tag-name="bbva-button-action"][label="Mis conversaciones"]',
                        btnContact: '.container-buttons [data-tag-name="bbva-button-action"][label="Contactar"], .container-buttons [data-tag-name="bbva-button-action"][label="Llamar"]',
                    },
                    banker: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Banquero"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text'
                    },
                    outToTimeAdvisor: {
                        linkCancel: 'div div.content  section div div.modal-footer slot div bbva-button-default [variant="link"]'
                    },
                    menuVisual: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Menú de ayuda"]' },
                        img: 'bbva-clip-microillustration',
                        txtInfo: '.clip-info-text'
                    },
                    disabilityVideocall: {
                        properties: { root: '[data-tag-name="bbva-clip-list-spherica"] [aria-label="Videollamada en lengua de señas mexicana"]' }
                    }
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({ item, value }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'lines button':
                await this.header.buttonRightPrimary.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'bbva line img':
                await this.assistCard.bbvaLine.img.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'bbva line info':
                await this.assistCard.bbvaLine.txtInfo.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'bbva line button':
                await this.assistCard.bbvaLine.btn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'bbva line pat img':
                await this.assistCard.bbvaLinePat.img.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'bbva line pat info':
                await this.assistCard.bbvaLinePat.txtInfo.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'bbva line pat button':
                await this.assistCard.bbvaLinePat.btn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'button contact':
                await this.assistCard.remoteBanker.btnContact.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'blue bbva img':
                await this.assistCard.blueBbva.img.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'blue bbva info':
                await this.assistCard.blueBbva.txtInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'blue bbva button':
                await this.assistCard.blueBbva.btn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'banker img':
                await this.assistCard.banker.img.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'banker info':
                await this.assistCard.banker.txtInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'banker button contactar':
                await this.assistCard.banker.btnContact.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'banker button conversations':
                await this.assistCard.banker.btnConversations.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out button':
                await this.assistCard.outToTimeLineBBVA.btnAccept.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out image':
                await this.assistCard.outToTimeAdvisor.img.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out info':
                await this.assistCard.outToTimeAdvisor.txtInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out to advisor understood':
                await this.assistCard.outToTimeAdvisor.btnUnderstood.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out cancel':
                await this.assistCard.outToTimeAdvisor.linkCancel.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'hidden' });
                break;
            case 'advisor img':
                await this.assistCard.remoteBanker.txtInfo.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'button conversation':
                await this.assistCard.remoteBanker.btnConversations.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disable'});
                break;
            case 'time out line button':
                await this.assistCard.outToTimeLineBBVA.btnAccept.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'time out line text':
                await this.assistCard.outToTimeLineBBVA.txtInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async intoContact(segment) {
        if (segment === 'remote') {
            await this.assistCard.remoteBanker.btnConversations.waitForClickable({ timeout: config.wait.M });
            await this.assistCard.remoteBanker.btnConversations.click();
        } else {
            await this.assistCard.bankerBtnConversations.waitForClickable({ timeout: config.wait.M });
            await this.assistCard.bankerBtnConversations.click();
        }
    }

    async accessAssistanceEmail() {
        await (await this.managerAssistance.waitForClickable({ timeout: config.wait.M })).click();
    }

    async setLocalStorage(key, value) {
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: [key, value]
        });
    }

    async accessScreen(button) {
        switch (button) {
            case 'line BBVA':
                await this.assistCard.bbvaLine.btn.waitForDisplayed({ timeout: config.wait.M });
                await this.assistCard.bbvaLine.btn.click();
                break;
            case 'line pat':
                await this.assistCard.bbvaLinePat.btn.scrollIntoView();
                await this.assistCard.bbvaLinePat.btn.waitForDisplayed({ timeout: config.wait.M });
                await this.assistCard.bbvaLinePat.btn.click();
                break;
            case 'blue BBVA':
                await this.assistCard.blueBbva.btn.scrollIntoView();
                await this.assistCard.blueBbva.btn.waitForDisplayed({ timeout: config.wait.XL });
                await this.assistCard.blueBbva.btn.click();
                break;
            case 'advisor BBVA':
                await this.assistCard.advisor.btn.waitForDisplayed({ timeout: config.wait.XL });
                await this.assistCard.advisor.btn.click();
                break;
            case 'call line BBVA':
                await this.assistCard.outToTimeAdvisor.btnUnderstood.waitForClickable({ timeout: config.wait.XL });
                await this.assistCard.outToTimeAdvisor.btnUnderstood.click();
                break;
            case 'disability videocall':
                await this.assistCard.disabilityVideocall.btn.waitForDisplayed({ timeout: config.wait.L });
                await this.assistCard.disabilityVideocall.btn.scrollIntoView();
                await this.assistCard.disabilityVideocall.btn.click();
                break;
            default:
                throw new Error(`The ${button} its not defined`);
        }
    }

    async conversationBankers() {
        await this.assistCard.banker.btnConversations.waitForClickable({ timeout: config.wait.M });
        await this.assistCard.banker.btnConversations.click();
    }

}

export default new AssistanceSection();
