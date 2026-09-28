import AbstractGlomoPage from '../abstract-glomo-page';

import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class Landing extends AbstractGlomoPage {
    constructor() {
        super({
            root: '',
            elements: {
                headerLogo: {
                    android: '//*[@resource-id="__PACKAGE__:id/company_logo"]',
                    ios: '~GloMo_MX.LandingView'
                },
                sidebarButton: {
                    android: '//*[@resource-id="__PACKAGE__:id/menu_button"]',
                    ios: '~menu_button_accessibility_identifier'
                },
                avatar: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_avatar"]',
                    ios: '~landing_access_avatar'
                },
                greeting: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_greeting"]',
                    ios: '~landing_greeting_label'
                },
                accessButton: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_button"]',
                    ios: '~landing_access_button'
                },
                accessLink: {
                    android: '//*[@resource-id="__PACKAGE__:id/landing_access_link"]',
                    ios: '~landing_access_link'
                },
                shortcutQr: {
                    android: '//android.widget.TextView[@text="Operación QR + CoDi®"]',
                    ios: '~landing_operacion_qr_+_codi®'
                },
                shortcutEmergency: {
                    android: '//android.widget.TextView[@text="Emergencias"]',
                    ios: '~landing_emergencias'
                },
                shortcutAbout: {
                    android: '//android.widget.TextView[@text="Acerca de"]',
                    ios: '~landing_acerca_de'
                },
                shortcutATMLocator: {
                    android: '//android.widget.TextView[@text="Sucursales y cajeros"]',
                    ios: '~landing_sucursales_y_cajeros'
                },
                confirmChangeUserBtn: {
                    android: '//*[@resource-id="__PACKAGE__:id/positiveButton"]',
                    ios: '~modal_bottom_changeuser_change_button',
                },
                cancelChangeUserBtn: {
                    android: '//*[@resource-id="__PACKAGE__:id/negativeButton"]',
                    ios: '~modal_bottom_changeuser_cancel_button',
                },
                blockerMessage: {
                    android: '//*[@resource-id="__PACKAGE__:id/blocker_message"]',
                    ios: '~landing_version_checker_message'
                },
                blockerUpdateMessageButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/blocker_message"]/*)//*[@content-desc="Actualizar"]',
                    ios: '~landing_version_checker_button'
                },
                wAppContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)//*[@resource-id="__PACKAGE__:id/wapp_cards"]',
                    ios: '~landing_wapp_header'
                },
                wAppMessageTitle: {
                    android: '//*[@resource-id="carousel_abstract_header_title"]',
                    ios: '~landing_wapp_header'
                },
                wAppFirstCardItemLink: {
                    android: '//*[@resource-id="carousel_abstract_item_link"]//android.widget.TextView[0]',
                    ios: '~landing_wapp_card_item_0'
                },
                wAppQRItemLink: {
                    android: '//*[@resource-id="carousel_abstract_item_link"]//*[@content-desc="Escanear QR"]',
                    ios: '~landing_wapp_qr_item'
                },
                // Sections accesibility are create dynamically from server response.
                // Android: Container -> primatyText | Buttons -> buttonText
                // IOS: landing_primmaryText_secondaryText_type (primaryText and secondaryText first word; type: container, title, message) | buttons -> buttonText
                newCardsMessageContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Nuevas tarjetas BBVA"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_nuevas_contrata_title'
                },
                newCardsMessageTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Nuevas tarjetas BBVA"]//*[@resource-id="com.bbva.nxt_peru.dev:id/message_card_primary_text_view"]',
                    ios: '~landing_nuevas_contrata_title'
                },
                newCardsMessageDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Nuevas tarjetas BBVA"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_nuevas_contrata_message'
                },
                newCardsMessageContractButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Nuevas tarjetas BBVA"]//*[@content-desc="Me interesa"]',
                    ios: '~landing_nuevas_contrata_me_interesa'
                },
                newCardsMessageCloseButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Nuevas tarjetas BBVA"]//*[@content-desc="No me interesa"]',
                    ios: '~landing_nuevas_contrata_no_me_interesa'
                },
                aquaCardsMessageContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Tarjetas Aqua"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_tarjetas_inteligentes_title'
                },
                aquaCardsMessageTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Tarjetas Aqua"]//*[@resource-id="__PACKAGE__:id/message_card_primary_text_view"]',
                    ios: '~landing_tarjetas_inteligentes_title'
                },
                aquaCardsMessageDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Tarjetas Aqua"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_tarjetas_inteligentes_message'
                },
                aquaCardsMessageContractButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Tarjetas Aqua"]//*[@content-desc="Me interesa"]',
                    ios: '~landing_tarjetas_inteligentes_me_interesa'
                },
                aquaCardsMessageCloseButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Tarjetas Aqua"]//*[@content-desc="No me interesa"]',
                    ios: '~landing_tarjetas_inteligentes_no_me_interesa'
                },
                biometricsCardContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Activa tus biometricos"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_activa_accederas_close'
                },
                biometricsCardTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Activa tus biometricos"]//*[@resource-id="__PACKAGE__:id/message_card_primary_text_view"]',
                    ios: '~landing_activa_accederas_title'
                },
                biometricsCardDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Activa tus biometricos"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_activa_accederas_message'
                },
                biometricsDismissButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Activa tus biometricos"]//*[@resource-id="__PACKAGE__:id/message_card_close_view"]',
                    ios: '~landing_activa_accederas_close'
                },
                emergencyZoneMessageContainer: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Accede a las operaciones de emergencia"]//*[@resource-id="__PACKAGE__:id/message_card"]',
                    ios: '~landing_accede_conoce_title'
                },
                emergencyZoneMessageTitle: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Accede a las operaciones de emergencia"]//*[@resource-id="__PACKAGE__:id/message_card_primary_text_view"]',
                    ios: '~landing_accede_conoce_title'
                },
                emergencyZoneMessageDescription: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Accede a las operaciones de emergencia"]//*[@resource-id="__PACKAGE__:id/message_card_secondary_text_view"]',
                    ios: '~landing_accede_conoce_message'
                },
                emergencyZoneMessageButton: {
                    android: '(//*[@resource-id="__PACKAGE__:id/landing"]//*)[@content-desc="Accede a las operaciones de emergencia"]//*[@content-desc="Más información"]',
                    ios: '~landing_accede_conoce_mas_informacion'
                },
                // Sections accesibility are create dynamically from server response.
                // Android: Container -> primaryText | Buttons -> buttonText
                // IOS: landing_primmaryText_secondaryText_type (primaryText and secondaryText first word; type: container, title, message) | buttons -> buttonText
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
                await this.sidebarButton.click();
                break;
            case 'public landing':
                await this._accessRememberedLogin();
                await this._confirmChangeUser();
                break;
            case 'login':
                await this.accessButton.click();
                break;
            case 'contract products':
                await this.newCardsMessageContainer.waitForDisplayed({timeout: config.wait.M});
                await this.newCardsMessageContractButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
                await this.newCardsMessageContractButton.click();
                break;
            case 'emergency zone':
                await (await this.emergencyZoneMessageContainer
                    .scrollIntoView({block: 'center'}))
                    .waitForDisplayed({timeout: config.wait.L});
                await this.emergencyZoneMessageButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
                await this.emergencyZoneMessageButton.click();
                break;
            case 'atm locator':
                await this.shortcutATMLocator.waitForDisplayed({timeout: config.wait.L});
                await this.shortcutATMLocator.click();
                break;
            case 'qr codi operative':
                await this.wAppContainer.waitForDisplayed({timeout: config.wait.L});
                await this.wAppQRItemLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
                await this.wAppQRItemLink.click();
                break;
            case 'cvv detail':
                await this.wAppContainer.waitForDisplayed({timeout: config.wait.L});
                await this.wAppFirstCardItemLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
                await this.wAppFirstCardItemLink.click();
                break;
            default:
                throw new Error(`[ERR] [LANDING] The functionality ${functionality} is unknown. Cannot be accessed.`);
        }
    }

    async close({section}) {
        switch (section.toLowerCase()) {
            case 'contract new card':
                await (await this.newCardsMessageContainer
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                await (await this.newCardsMessageCloseButton
                    .scrollIntoView())
                    .click();
                await this.newCardsMessageContainer.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'biometrics':
                await (await this.biometricsCardContainer
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                await (await this.biometricsDismissButton
                    .scrollIntoView())
                    .click();
                await this.biometricsCardContainer.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            default:
                throw new Error(`${section} section is not available`);
        }
    }

    async checkSectionVisibility({section, reverse}) {
        switch (section.toLowerCase()) {
            case 'wapp':
                await this.wAppContainer.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                break;
            case 'contract new card':
                await this.newCardsMessageContainer.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.newCardsMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.newCardsMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.newCardsMessageContractButton.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.newCardsMessageCloseButton.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                break;
            case 'aqua cards':
                if (reverse) {
                    await this._checkAquaCardsIsNotVisible();
                } else {
                    await this._checkAquaCardsIsVisble();
                }
                break;
            case 'biometrics':
                await this.biometricsCardContainer.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.biometricsCardTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.biometricsCardDescription.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
                await this.biometricsDismissButton.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
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

    async _checkAquaCardsIsVisble() {
        await (await this.aquaCardsMessageContainer.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.M});
        await (await this.aquaCardsMessageTitle.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.M});
        await (await this.aquaCardsMessageDescription.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.M});
        await (await this.aquaCardsMessageContractButton.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.M});
        await (await this.aquaCardsMessageCloseButton.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.M});
    }

    async _checkAquaCardsIsNotVisible() {
        await this.aquaCardsMessageContainer.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.aquaCardsMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.aquaCardsMessageCloseButton.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.aquaCardsMessageContractButton.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.aquaCardsMessageDescription.waitForDisplayed({timeout: config.wait.M, reverse: true});
    }

    async _screenValidation({item, visibility}) {
        switch (item.toLowerCase()) {
            case 'avatar':
                await this.avatar.waitForDisplayed({timeout: config.wait.XXL});
                break;
            case 'greeting':
                await this.greeting.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change user link':
                await this.accessLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'access button':
                await this.accessButton.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.M});
                break;
            case 'qr shortcut':
                await this.shortcutQr.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'emercency shortcut':
                await this.shortcutEmergency.waitForDisplayed({timeout: config.wait.M});
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
                await this.checkSectionVisibility({section: item, reverse: visibility === 'hidden'});
                break;
            case 'sidebar button':
                await this.sidebarButton.waitForDisplayed({reverse: visibility === 'hidden', timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _accessRememberedLogin() {
        await this.accessLink.waitForDisplayed({timeout: config.wait.M});
        await this.accessLink.click();
    }

    async _confirmChangeUser() {
        await this.confirmChangeUserBtn.waitForDisplayed({timeout: config.wait.M});
        await this.confirmChangeUserBtn.click();
    }

    async _checkOptionalUpdateMessageIsVisible() {
        await (await this.optionalUpdateMessageContainer
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageTitle
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageDescription
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
        await (await this.optionalUpdateMessageLink
            .scrollIntoView({block: 'center'}))
            .waitForDisplayed({timeout: config.wait.M});
    }

    async _checkOptionalUpdateMessageIsNotVisible() {
        await this.optionalUpdateMessageContainer.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageTitle.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageDescription.waitForDisplayed({timeout: config.wait.M, reverse: true});
        await this.optionalUpdateMessageLink.waitForDisplayed({timeout: config.wait.M, reverse: true});
    }
}

export default new Landing();
