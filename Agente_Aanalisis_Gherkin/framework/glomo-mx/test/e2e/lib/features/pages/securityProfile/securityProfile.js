import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class SecurityProfile extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-securityProfile[state="active"]',
            elements: {
                bbvaFeatureSecurityProfile: {
                    properties: {root: 'bbva-feature-security-settings-access-mx-spherica bbva-transition-container bbva-feature-security-profile-page-mx-spherica'},
                    header: 'bbva-header-main #btn-back',
                    seeAllButton: '#medium-pending-actions bbva-item-cards-list-widget-spherica .item-cards-section-link-title .item-cards-section-link-link bbva-type-link',
                    commpletedNotifications: 'bbva-list-link#completed-actions-link bbva-text',
                    commpletedNotificationsLink: 'bbva-list-link#completed-actions-link',
                    modalButtonContinue: 'bbva-help-modal .footer-button',
                    modalButtonClose: 'bbva-help-modal #helpModalHeader #btn-close',
                    mainPendingActionsCardsListRoute: {
                        properties: {root: '#main-pending-actions bbva-item-cards-list-widget-spherica .item-cards-list-container bbva-panel-container'},
                        notificationsCard: '#push_notifications',
                        notificationsCardLink: '#push_notifications bbva-type-link',
                        keyRecoveryCard: '#password_strength',
                        keyRecoveryCardLink: '#password_strength bbva-type-link',
                        softwareTokenCard: '#biometry',
                        softwareTokenCardLink: '#biometry bbva-type-link',
                        identityDocumentCard: '#identity_document',
                        identityDocumentCardLink: '#identity_document bbva-type-link',
                        biometryCard: '#biometry',
                        biometryCardLink: '#biometry bbva-type-link',
                        registerPhoneCard: '#register_phone',
                        registerPhoneCardLink: '#register_phone bbva-type-link',
                    }
                },
                securityProfilePendingActions: {
                    properties: {root: 'bbva-feature-security-settings-access-mx-spherica bbva-transition-container bbva-feature-security-profile-pending-actions-mx-spherica'},
                    header: 'bbva-header-main',
                    buttonLeft : 'bbva-header-main #btn-back',
                    pendingActionsButtonsRoute: {
                        properties: {root: 'bbva-panel-container bbva-item-cards-list-widget-spherica .item-cards-list-container bbva-panel-container'},
                        verifyMail: '#registered_mail',
                        verifyMailLink: '#registered_mail bbva-type-link',
                        securityTips: '#security_tips',
                        securityTipsLink: '#security_tips bbva-type-link',
                        onlineShopping: '#online_shopping',
                        onlineShoppingLink: '#online_shopping bbva-type-link',
                        discreetMode: '#discreet_mode',
                        discreetModeLink: '#discreet_mode bbva-type-link',
                        screenLock: '#screen_lock',
                        screenLockLink: '#screen_lock bbva-type-link',
                        appUpdate: '#app_update',
                        appUpdateLink: '#app_update bbva-type-link',
                    }
                }
            },
            requiredElements: [
                'bbvaFeatureSecurityProfile',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.bbvaFeatureSecurityProfile.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button left':
                await this.bbvaFeatureSecurityProfile.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pending actions header':
                await this.securityProfilePendingActions.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pending actions button left':
                await this.securityProfilePendingActions.buttonLeft.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notifications zone':
                await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.notificationsCard.waitForDisplayed();
                break;
            case 'software token zone':
                await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.softwareTokenCard.waitForDisplayed();
                break;
            case 'identity document zone':
                await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.identityDocumentCard.waitForDisplayed();
                break;
            case 'security tips zone':
                await this.securityProfilePendingActions.pendingActionsButtonsRoute.securityTips.waitForDisplayed();
                break;
            case 'screen lock zone':
                await this.securityProfilePendingActions.pendingActionsButtonsRoute.screenLock.waitForDisplayed();
                break;
            case 'verify email zone':
                await this.securityProfilePendingActions.pendingActionsButtonsRoute.verifyMail.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeOperative() {
        await this.bbvaFeatureSecurityProfile.header.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.header.click();
    }

    async leaveTheProcess() {
        await this.bbvaFeatureSecurityProfile.modalButtonClose.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.modalButtonClose.click();
    }

    async accessNotifications() {
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.notificationsCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.notificationsCardLink.click();
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.click();
    }

    async accessSoftwareToken() {
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.softwareTokenCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.softwareTokenCardLink.click();
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.click();
    }

    async accessVerifyMail() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.verifyMailLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.verifyMailLink.click();
    }

    async accessSecurityTips() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.securityTipsLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.securityTipsLink.click();
    }

    async accessOnlineShopping() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.onlineShoppingLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.onlineShoppingLink.click();
    }

    async accessDiscreetMode() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.discreetModeLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.discreetModeLink.click();
    }

    async accessScreenLock() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.screenLockLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.screenLockLink.click();
    }

    async accessAppUpdate() {
        await this.securityProfilePendingActions.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.seeAllButton.click();
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.appUpdateLink.waitForDisplayed({timeout: config.wait.M});
        await this.securityProfilePendingActions.pendingActionsButtonsRoute.appUpdateLink.click();
    }

    async accessAllPendingActions() {
        await this.bbvaFeatureSecurityProfile.seeAllButton.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.seeAllButton.click();
    }

    async accessIdentityDocumentCard() {
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.identityDocumentCard.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.mainPendingActionsCardsListRoute.identityDocumentCardLink.click();
    }

    async accessIdentityDocumentPage() {
        await this.accessIdentityDocumentCard();
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.modalButtonContinue.click();
    }

    async accessCompletedActionsPage() {
        await this.bbvaFeatureSecurityProfile.commpletedNotifications.waitForDisplayed({timeout: config.wait.M});
        await this.bbvaFeatureSecurityProfile.commpletedNotificationsLink.click();
    }
}

export default new SecurityProfile();
