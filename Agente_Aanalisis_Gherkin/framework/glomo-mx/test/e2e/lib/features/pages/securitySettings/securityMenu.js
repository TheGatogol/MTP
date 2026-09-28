import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoButtonList from '../../components/glomo-button-list';
import GlomoButtonListSpherica from '../../components/glomo-button-list-spherica';

@page()
class SecurityMenu extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-securityMenu[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                buttonList: {
                    component: {
                        ComponentClass: GlomoButtonList
                    }
                }
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                buttonList: GlomoButtonListSpherica
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, _args} = {}) {
        const {notVisible} = _args;
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'back button':
                await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M, reverse: notVisible});
                break;
            case 'access and signatures':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-privacity-access', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security profile':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-security-profile', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'app permissions':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-privacity-permissions', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security tips':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-privacity-advices', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'facial recognition settings':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-privacity-reactivation', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'emergency zone':
                await this.buttonList.waitForButtonDisplayed({selector: 'security-settings-emergency-zone', reverse: notVisible});
                break;
            case 'access and signatures icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-privacity-access', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security profile icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-security-profile', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'app permissions icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-privacity-permissions', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security tips icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-privacity-advices', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'facial recognition settings icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-privacity-reactivation', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'emergency zone icon':
                await this.buttonList.waitForIconDisplayed({selector: 'security-settings-emergency-zone', reverse: notVisible});
                break;
            case 'access and signatures label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-privacity-access', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security profile label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-security-profile', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'app permissions label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-privacity-permissions', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'security tips label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-privacity-advices', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'facial recognition settings label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-privacity-reactivation', timeout: config.wait.M, reverse: notVisible});
                break;
            case 'emergency zone label':
                await this.buttonList.waitForLabelDisplayed({selector: 'security-settings-emergency-zone', reverse: notVisible});
                break;
            case 'security menu title':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M, reverse: notVisible});
                await this.header.operationTitle.waitForText({timeout: config.wait.M, text: /-/, reverse: !notVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
        await this.header.actionLeft();
    }

    async accessSecuritySettingsPrivacyAccess() {
        await this.buttonList.clickButton('security-settings-privacity-access');
    }

    async accessSecurityProfile() {
        await this.buttonList.clickButton('security-settings-security-profile');
    }

    async accessSecuritySettingsDiscreetMode() {
        await this.buttonList.clickButton('glomo-discreet-mode-header');
    }

    async accessSecuritySettingsPrivacyPermissions() {
        await this.buttonList.clickButton('security-settings-privacity-permissions');
    }

    async accessSecuritySettingsPrivacyAdvices() {
        await this.buttonList.clickButton('security-settings-privacity-advices');
    }

    async accessSecuritySettingsPrivacyReactivation() {
        await this.buttonList.clickButton('security-settings-privacity-reactivation');
    }

    async accessSecuritySettingsPrivacyEmergency() {
        await this.buttonList.clickButton('security-settings-emergency-zone');
    }
}

export default new SecurityMenu();
