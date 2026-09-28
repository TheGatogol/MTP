import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page()
class AppPermissions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-appPermissions[state="active"]',
            elements: {
                // upper side
                permissionsDM: 'bbva-aggregation-app-permissions#permissionsDM',
                header: 'bbva-header-main#appPerssionsPage h1#heading bbva-text',
                buttonBack: 'bbva-header-main#appPerssionsPage div.header-icons button#btn-left-primary',
                informationIcon: 'bbva-header-main#appPerssionsPage div.header-icons button#btn-right-secondary',
                notificatiosLabel: 'bbva-aggregation-app-permissions#permissionsDM bbva-list-action[description ="Recibe notificaciones push por parte de BBVA sobre movimientos."]',
                statusCamaraLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Accede a la aplicación con tu cámara o úsala para personalizar tu perfil"]',
                phoneLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Recibe llamadas por parte de BBVA para confirmar tu identidad."]',
                contacAgendaLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Busca contactos guardados en tu celular y realiza operaciones más rápidas con los números de teléfono."',
                locationLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Encuentra sucursales y cajeros BBVA cerca de ti en el mapa dentro de la aplicación."]',
                calendarLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Agrega recordatorios a tu calendario, como las fechas de pago de tus tarjetas."]',
                microphoneLabel: 'bbva-aggregation-app-permissions bbva-list-action[description ="Haz tus operaciones a través de mensajes, de voz con el asistente virtual Blue."]',
                //Modal help
                headerModal: '[data-tag-name="bbva-help-modal"] #helpModalHeader #heading [data-tag-name="bbva-text"]',
                helpIconModal: '[data-tag-name="bbva-help-modal"] div#helpModalTitle [data-tag-name="bbva-icon"]',
                descriptionModal: '[data-tag-name="bbva-help-modal"] div#helpModalContent',
                buttonModal: '[data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]'
            },
            elementsSpherica: {
                // upper side
                permissionsDM: 'bbva-aggregation-app-permissions-spherica#permissionsDM',
                header: 'bbva-header-main-spherica#appPerssionsPage bbva-type-text h1',
                buttonBack: 'bbva-header-main-spherica#appPerssionsPage div.header-icons button#btn-left-primary',
                informationIcon: 'bbva-header-main-spherica#appPerssionsPage div.header-icons button#btn-right-primary',
                notificatiosLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-5"]',
                statusCamaraLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-1"]',
                phoneLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-5"]',
                contacAgendaLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-2"]',
                locationLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-3"]',
                calendarLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-0"]',
                microphoneLabel: 'bbva-aggregation-app-permissions-spherica#permissionsDM .permission-item[data-index="item-4"]',
                //Modal help
                headerModal: '[data-tag-name="bbva-help-modal-spherica"] #helpModalHeader #heading [data-tag-name="bbva-type-text"]',
                helpIconModal: '[data-tag-name="bbva-help-modal-spherica"] div#helpModalTitle [data-tag-name="bbva-type-icon"]',
                descriptionModal: '[data-tag-name="bbva-help-modal-spherica"] div#helpModalContent',
                buttonModal: '[data-tag-name="bbva-help-modal-spherica"] [data-tag-name="bbva-button-default-spherica"]'
            },
            requiredElements: [
                'header',
                'buttonBack',
                'informationIcon',
            ]
        });
    }

    async showPermissions() {
        await this.permissionsDM.execute({
            script: () => this.permissions = [
                {
                    icon: 'spherica:calendar',
                    title: 'bbva-aggregation-app-permissions-spherica-calendar-title',
                    description: 'bbva-aggregation-app-permissions-spherica-calendar-description',
                },
                {
                    icon: 'spherica:camera',
                    title: 'bbva-aggregation-app-permissions-spherica-camera-title',
                    description: 'bbva-aggregation-app-permissions-spherica-camera-description',
                    granted: true,
                },
                {
                    icon: 'spherica:addressBook',
                    title: 'bbva-aggregation-app-permissions-spherica-contact-title',
                    description: 'bbva-aggregation-app-permissions-spherica-contact-description',
                    granted: true,
                },
                {
                    icon: 'spherica:place',
                    title: 'bbva-aggregation-app-permissions-spherica-location-title',
                    description: 'bbva-aggregation-app-permissions-spherica-location-description',
                    granted: true,
                },
                {
                    icon: 'spherica:microphone',
                    title: 'bbva-aggregation-app-permissions-spherica-microphone-title',
                    description: 'bbva-aggregation-app-permissions-spherica-microphone-description',
                    granted: true,
                },
                {
                    icon: 'spherica:chat',
                    title: 'bbva-aggregation-app-permissions-spherica-notifications-title',
                    description: 'bbva-aggregation-app-permissions-spherica-notifications-description',
                    granted: true,
                },
                {
                    icon: 'spherica:clock',
                    title: 'bbva-aggregation-app-permissions-spherica-date-title',
                    description: 'bbva-aggregation-app-permissions-spherica-date-description',
                },
            ]
        });
    }

    async goBack() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information icon':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification description label':
                await this.notificatiosLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'camera description label':
                await this.calendarLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'status label':
                await this.statusCamaraLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone description label':
                await this.phoneLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contact agenda label':
                await this.contacAgendaLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'location description label':
                await this.locationLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'calendar description label':
                await this.calendarLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'microphone description label':
                await this.microphoneLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header title modal':
                await this.headerModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help icon':
                await this.helpIconModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description label':
                await this.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'understand button':
                if(!this.isSpherica()) {
                    await this.buttonModal.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async showModalHelp() {
        await this.informationIcon.click();
    }
}
export default new AppPermissions();
