import {ScreenValidationKeyNotFound, page, Commands, utils} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager-spherica';

@page()
class SideBar extends AbstractGlomoPage {
    constructor() {
        super({
            root: '*[state="active"]',
            elements: {
                container: {
                    web: '',
                    android: '//*[@resource-id="__PACKAGE__:id/recyclerView"]',
                    ios: '//XCUIElementTypeOther[@name="mainStack"]',
                },
                perfilLabel: {
                    web: 'button.user__info-button span.user__info-name.text-ellipsis',
                },
                profileSelector: {
                    android: '//*[@resource-id="__PACKAGE__:id/headerThirdLine"]',
                    ios: '//XCUIElementTypeButton[@name="menu_header_subtitle_accessibility_identifier"]',
                },
                exitprofileSelector: {
                    android: '//android.widget.ImageButton[@resource-id="com.bancomer.mbanking.dev:id/closeButton"]',
                    ios: '//XCUIElementTypeButton[@name="closeButton"]',
                },
                userInfo: {
                    web: 'div.user.user--not-avatar',
                    android: '//*[@resource-id="__PACKAGE__:id/headerTitleTextView"]',
                    ios: '~header',
                },
                profile: {
                    web: 'button.user__info-button span.user__info-profile',
                    android: '//*[@resource-id="__PACKAGE__:id/headerSubtitleTextView"]',
                    ios: '//XCUIElementTypeButton[@name="menu_header_subtitle_accessibility_identifier"]',
                },
                sidebarLinkList: {
                    web: 'li.nav-list-li a',
                },
                nameLabel: {
                    web: 'button.user__info-button span.user__info-name.text-ellipsis',
                    android: '//*[@resource-id="__PACKAGE__:id/headerTitleTextView"]',
                    ios: '~header', // the name of the user can not be used, this needs an accessibility id
                },
                clarifications: {
                    web: '',
                    ios: '//XCUIElementTypeOther[@name="clarifications"]',
                    android: '//android.widget.TextView[@content-desc="Aclaraciones"]',
                },
                configuration: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-settings]',
                    ios: '//XCUIElementTypeOther[@name="config"]',
                    android: '~Configuración',
                },
                codiOperative: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector="glomo-menu-qr-operations"]'
                },
                about: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-about-sidebar]',
                    ios: '~menu_about_item_accessibility_identifier',
                    android: '//android.widget.TextView[@content-desc="Acerca de BBVA"]',
                },
                profileButton: {
                    web: 'button.user__info-button'
                },
                demoFeedback: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector="Demo Feedback"]'
                },
                help: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-help]',
                    android: '~Acerca de BBVA',
                    ios: '~menu_about_item_accessibility_identifier',
                },
                securitySettings: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-securitySettings]',
                    android: '~Seguridad y privacidad',
                    ios:'//XCUIElementTypeButton[@name="menu_security_settings_item_accessibility_identifier"]',
                },
                memberGetMember: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-about-member-get-member]'
                },
                clarificationsList: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=Aclaraciones]'
                },
                logoutButton: {
                    web: '#btnLogout',
                    android: '//*[@resource-id="__PACKAGE__:id/footerMenuItemView"]/*[@resource-id="__PACKAGE__:id/textLabel"]',
                    ios: '//XCUIElementTypeButton[@name="menu_footer_accessibility_identifier"]',
                },
                logout: {
                    web: '#btnLogout',
                    android: '//*[@resource-id="__PACKAGE__:id/footerMenuItemView"]/*[@resource-id="__PACKAGE__:id/textLabel"]',
                    ios: '//XCUIElementTypeButton[@name="menu_footer_accessibility_identifier"]',
                },
                sustainability: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-sustainability]',
                    android: '~Sostenibilidad',
                    ios: '//XCUIElementTypeOther[@name="sustainability"]'
                },
                sustainabilityPublic: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-sustainability]',
                    android: '~Sostenibilidad',
                    ios: '//XCUIElementTypeOther[@name="sustainabilityPublic"]'
                },
                atm: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-atention-points-title]'
                },
                cardlessWithdrawalHistoric: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-cardless-withdrawal-historic]'
                },
                discreetMode: {
                    android: '~Modo Discreto Botón',
                },
                rewardsLanding: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-rewards-landing-header-title]',
                    android: '~Puntos y promociones',
                    ios: '//XCUIElementTypeOther[@name="promotion"]'
                },
                cashZone: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-cash-zone]'
                },
                emergencyReports: {
                    web: 'ul.nav-list li.nav-list-li button[data-selector=glomo-menu-emergency-reports]',
                    android: '~Emergencias',
                    ios: '//XCUIElementTypeOther[@name="emergencyReports"]'
                },
                profileSelectorTitle: {
                    android: '//android.widget.TextView[@resource-id="com.bancomer.mbanking.dev:id/listOptionTitle"]',
                    ios: '//XCUIElementTypeStaticText[@name="PERFILES"]',
                },
                dialogOperations: [
                    GlomoAlertManager
                ],
            },
            requiredElements: [
                'container',
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async confirmLogOut(boolConfirm) {
        await utils.runInContext({
            context: 'WEBVIEW',
            action: async () => {
                await this.confirmDialog({isConfirmed: boolConfirm});
            }
        });
    }

    async _optionIsEnabled({optionElement, reverse = false, timeout = config.wait.M} = {}) {
        await (await (await optionElement
            .scrollIntoView({scrollElement: this.container}))
            .waitForAnimation({timeout}))
            .waitForEnabled({timeout, reverse});

        return optionElement;
    }

    async profileIsEnabled(reverse = false) {
        if (Commands.flags.isWeb) {
            await this.userInfo.waitForDisplayed({timeout: config.wait.M});

            // All this block should be migrated to `waitForClass` when implemented: https://globaldevtools.bbva.com/jira/browse/GLOMOGL-14753
            const profileClassValue = await this.userInfo.getAttribute({name: 'class'});
            const errorMessage = 'ERROR --> Profile is ';
            const result = profileClassValue.split(' ').includes('disabled');
            reverse ? expect(result, `${errorMessage}enabled`).to.be.true :
                expect(result, `${errorMessage}disabled`).to.be.false;
        }

        await this.profile.waitForEnabled({timeout: config.wait.M, reverse});
    }

    async access({functionality, params = {}}) {
        switch (functionality.toLowerCase()) {
            case 'settings':
                await this.configuration.waitForEnabled();
                await this.configuration.click();
                break;
            case 'about':
                await (await this._optionIsEnabled({optionElement: this.about}))
                    .click();
                break;
            case 'assistance':
                await (await this._optionIsEnabled({optionElement: this.help}))
                    .click();
                break;
            case 'security settings access':
                await (await this._optionIsEnabled({optionElement: this.securitySettings}))
                    .click();
                break;
            case 'sustainability':
                await browser.execute(`localStorage.setItem('sustainabilityFeature-onboardingCompleted','{"completed": ${params.onboarding}}')`);
                await (await this._optionIsEnabled({optionElement: this.sustainability}))
                    .click();
                break;
            case 'sustainability Public':
                await (await this._optionIsEnabled({optionElement: this.sustainabilityPublic}))
                    .click();
                break;
            case 'profile':
                await (await this._optionIsEnabled({optionElement: this.profile}))
                    .click();
                break;
            case 'atm':
                await (await this._optionIsEnabled({optionElement: this.atm}))
                    .click();
                break;
            case 'demo feedback':
                await (await this._optionIsEnabled({optionElement: this.demoFeedback}))
                    .click();
                break;
            case 'clarifications':
                await this.clarificationsList.waitForAnimation({timeout: config.wait.M});
                await this.clarificationsList.click();
                break;
            case 'cardless withdrawal historic':
                await (await this._optionIsEnabled({optionElement: this.cardlessWithdrawalHistoric}))
                    .click();
                break;
            case 'member get member':
                await this.memberGetMember.waitForAnimation({timeout: config.wait.M});
                await this.memberGetMember.click();
                break;
            case 'rewards landing':
                await (await this._optionIsEnabled({optionElement: this.rewardsLanding}))
                    .click();
                break;
            case 'cash zone payments mpos':
                await (await this._optionIsEnabled({optionElement: this.cashZone}))
                    .click();
                break;
            case 'emergency reports':
                await (await this._optionIsEnabled({optionElement: this.emergencyReports}))
                    .click({useActions: false, scrollOptions: {block: 'end'}});
                break;
            case 'qr codi operative':
                await (await this._optionIsEnabled({optionElement: this.codiOperative})).click();
                break;
            default:
                throw new Error(`[ERR] [SIDEBAR] The function ${functionality} is unknown. Cannot be accessed.`);
        }
    }

    async doLogOut(confirmLogout = false) {
        await (await this.logoutButton
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        if (!confirmLogout){
            await this.confirmLogOut(true);
        }
    }

    async _screenValidation({item, _args}) {
        switch (item.toLowerCase()) {
            case 'username':
                await this._optionIsEnabled({optionElement: this.nameLabel, reverse: _args.isDisabled});
                break;
            case 'profile':
                await this.profileIsEnabled(_args.isDisabled);
                break;
            case 'about':
                await this._optionIsEnabled({optionElement: this.about, reverse: _args.isDisabled});
                break;
            case 'sidebar menu':
                await this.userInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'configuration button':
            case 'configuration':
                await this._optionIsEnabled({optionElement: this.configuration, reverse: _args.isDisabled});
                break;
            case 'ayuda':
            case 'help':
                await this._optionIsEnabled({optionElement: this.help, reverse: _args.isDisabled});
                break;
            case 'salir option':
                await this._optionIsEnabled({optionElement: this.logoutButton, reverse: _args.isDisabled});
                break;
            case 'clarifications':
                await this._optionIsEnabled({optionElement: this.clarifications, reverse: _args.isDisabled});
                break;
            case 'sustainability':
                await this._optionIsEnabled({optionElement: this.sustainability, reverse: _args.isDisabled});
                break;
            case 'sustainability public':
                await this._optionIsEnabled({optionElement: this.sustainabilityPublic, reverse: _args.isDisabled});
                break;
            case 'profiles title':
                _args.notVisible ? await this.profileSelectorTitle.waitForNotDisplayed() :
                    await this.profileSelectorTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async profileSelectorEnter() {
        await this.profileSelector.waitForDisplayed();
        await this.profileSelector.click();
    }

    async profileSelectorQuit() {
        await this.exitprofileSelector.waitForDisplayed();
        await this.exitprofileSelector.click();
    }
}

export default new SideBar();
