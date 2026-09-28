import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class LandingPublic extends AbstractGlomoPage {
    constructor() {
        super({
            root: '',
            elements: {
                headerLogo: {
                    android: '//*[@resource-id="__PACKAGE__:id/company_logo"]',
                    ios: '~GloMo_MX.LandingView'
                },
                greeting: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_greeting"]',
                    ios: '~landing_greeting_label'
                },
                accessButton: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_button"]',
                    ios: '~landing_access_button'
                },
                sidebarButton: {
                    android: '//*[@resource-id="__PACKAGE__:id/menu_button"]',
                    ios: '~menu_button_accessibility_identifier'
                },
                digitalActivationLink: {
                    android: '//*[@resource-id="__PACKAGE__:id/message_link_button"]',
                    ios: '~landing_message_link_button'
                },
                blockerMessage: {
                    android: '//*[@resource-id="__PACKAGE__:id/blocker_message"]',
                    ios: '~landing_version_checker_message'
                },
                blockerUpdateMessageButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/blocker_message"]/*)//*[@content-desc="Actualizar"]',
                    ios: '~landing_version_checker_button'
                },
                shortcutBBVALine: {
                    android: '//android.widget.TextView[@text="Línea BBVA"]',
                    ios: '~landing_linea_bbva'
                },
                shortcutBecomeInUser: {
                    android: '//android.widget.TextView[@text="Hazte cliente"]',
                    ios: '~landing_hazte_cliente'
                },
                shortcutAbout: {
                    android: '//android.widget.TextView[@text="Acerca de"]',
                    ios: '~landing_acerca_de'
                },
                newClientMessageContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Abrir cuenta digital BBVA"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_abrir_abre_title'
                },
                newClientMessageHeader: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Abrir cuenta digital BBVA"]//*[@resource-id="__PACKAGE__:id/message_card_title_view"]',
                    ios: '~landing_abrir_abre_header'
                },
                newClientMessageTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Abrir cuenta digital BBVA"]//*[@resource-id="__PACKAGE__:id/message_card_primary_text_view"]',
                    ios: '~landing_abrir_abre_title'
                },
                newClientMessageDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Abrir cuenta digital BBVA"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_abrir_abre_message'
                },
                newClientMessageButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Abrir cuenta digital BBVA"]//*[@content-desc="Contratar en línea"]',
                    ios: '~landing_abrir_abre_quiero_mas_informacion'
                },
                optionalUpdateMessageContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Actualización disponible"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_actualizacion_actualiza_title'
                },
                optionalUpdateMessageTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Actualización disponible"]//*[@resource-id="__PACKAGE__:id/message_card_primary_text_view"]',
                    ios: '~landing_actualizacion_actualiza_title'
                },
                optionalUpdateMessageDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Actualización disponible"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_actualizacion_actualiza_message'
                },
                optionalUpdateMessageLink: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Actualización disponible"]//*[@content-desc="Actualiza ahora"]',
                    ios: '~landing_actualizacion_actualiza_actualiza_ahora'
                }
            },
            requiredElements: [
                'headerLogo'
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async access({functionality}) {
        switch (functionality.toLowerCase()) {
            case 'sidebar':
                await this.sidebarButton.waitForDisplayed({timeout: config.wait.M});
                await this.sidebarButton.click();
                break;
            case 'login':
                await this.accessButton.waitForDisplayed({timeout: config.wait.M});
                await this.accessButton.click();
                break;
            case 'digital activation':
                await this.digitalActivationLink.waitForDisplayed({timeout: config.wait.M});
                await this.digitalActivationLink.click();
                break;
            case 'become a client':
                await this.shortcutBecomeInUser.waitForDisplayed({timeout: config.wait.M});
                await this.shortcutBecomeInUser.click();
                break;
            default:
                throw new Error(`[ERR] [LANDING] The funcionality ${functionality} is unknown. Cannot be accessed.`);
        }
    }

    async _screenValidation({item, visibility}) {
        switch (item.toLowerCase()) {
            case 'greeting':
                await this.greeting.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.L});
                break;
            case 'sidebar button':
                await this.sidebarButton.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.M});
                break;
            case 'access button':
                await this.accessButton.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.M});
                break;
            case 'digital activation link':
                await this.digitalActivationLink.waitForDisplayed({
                    reverse: visibility === 'hidden',
                    timeout: config.wait.L
                });
                break;
            case 'linea bbva shortcut':
                await this.shortcutBBVALine.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access blocker message':
                await this.blockerMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'update blocker message':
                await this.blockerMessage.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.M});
                await this.blockerUpdateMessageButton.waitForDisplayed({
                    reverse: visibility === 'hidden',
                    timeout: config.wait.M
                });
                break;
            case 'optional update section':
            case 'new client section':
                await this.checkSectionVisibility({section: item, reverse: visibility === 'hidden'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async checkSectionVisibility({section, reverse}) {
        switch (section.toLowerCase()) {
            case 'new client':
            case 'new client section':
                if (!reverse) {
                    await this._checkMessageIsVisible();
                } else {
                    await this._checkMessageIsNotVisible();
                }
                break;
            case 'optional update section':
                if (!reverse) {
                    await this._checkOptionalUpdateMessageIsVisible();
                } else {
                    await this._checkOptionalUpdateMessageIsNotVisible();
                }
                break;
            default:
                throw new Error(`${section} section is not available`);
        }
    }

    async _checkMessageIsVisible() {
        await (await this.newClientMessageContainer
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.newClientMessageHeader
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.newClientMessageTitle
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.newClientMessageDescription
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.newClientMessageButton
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
    }

    async _checkMessageIsNotVisible() {
        await this.newClientMessageContainer.waitForDisplayed({timeout: config.wait.L, reverse: true});
        await this.newClientMessageHeader.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.newClientMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.newClientMessageDescription.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.newClientMessageButton.waitForDisplayed({timeout: config.wait.M, reverse: true});
    }

    async _checkOptionalUpdateMessageIsVisible() {
        await (await this.optionalUpdateMessageContainer
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageTitle
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageDescription
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageLink
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M});
    }

    async _checkOptionalUpdateMessageIsNotVisible() {
        await this.optionalUpdateMessageContainer.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageDescription.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageLink.waitForDisplayed({timeout: config.wait.M, reverse: true});
    }
}

export default new LandingPublic();
