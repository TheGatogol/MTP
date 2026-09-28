import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsNavigationBarSpherica from '../../components/cells-navigation-bar-spherica';
import BbvaHelpModal from '../../components/bbva-help-modal';

const FOOTER_TABS = {
    HOME: 'home',
    CHECK_UP: 'pfmCheckup',
    ADD: 'add',
    MAIL: 'mail',
    CONTACT: 'contact',
};

const NOTIFICATIONS_CENTER_FLAG = {
    'glomo.notifications.notificationsCenter':
    {
        value: true,
        key: 'glomo.notifications.notificationsCenter'
    }
};

@page()
class NotificationsCenter extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-notificationsCenter[state="active"]',
            elements: {
                notificationsListMx: 'bbva-feature-notifications-list-mx',
                notificationDetailMX : 'bbva-feature-notifications-detail-mx',
                // upper side
                notificationsDM: '[data-tag-name="bbva-feature-notifications-list-mx"]',
                header: '[data-tag-name="bbva-feature-notifications-list-mx"] [data-tag-name="bbva-header-main"] header.header-main h1[aria-label="Notificaciones"]',
                notificationList: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"]#principalListPage',
                notificationDetail: '#principalListPage [id="__ID__"]',
                notificationFilterList: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"][image="button-consult"]',
                filterItem:'bbva-feature-notifications-list-mx-spherica #searchPage #movements',
                //more actions
                moreNotificationsAlert: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-header-category"] div [data-tag-name="bbva-link"]',
                moreActions:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"]#principalListPage div [data-tag-name="bbva-help-modal"][id="modalMoreActions"]',
                buttonActions:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"]#principalListPage div [data-tag-name="bbva-help-modal"][id="modalMoreActions"] [data-tag-name="bbva-button-row"]',
                settingNotification: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"]#principalListPage [data-tag-name="bbva-button-row"] span:nth-child(2) [data-tag-name="bbva-button-action"][image="button-configuration"]',
                detailShowPromotion: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-detail"] [data-tag-name="bbva-help-modal"] header [data-tag-name="bbva-text"][text="Promoción BBVA"]',
                //carousel alert notification
                carouselNotificationAlert: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-carousel-default"]',
                deatailCarousel: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-carousel-default"] div[class="swiper-slide swiper-slide-active"] [data-tag-name="bbva-link"]:nth-child(3)',
                detailAlert: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL div header [data-tag-name="bbva-text"][text="__TEXT__"]',
                securityCall: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL div header div.text-establishment [data-tag-name="bbva-badge-default"][text="Llamada oficial BBVA"]',
                //search modal
                filters:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"]',
                buttonFilters:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"] div div  div.modal-footer [data-tag-name="bbva-button-default"].footer-button',
                categoryFilters:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-header-category"][text="CATEGORÍA"]',
                searchModal:'[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"]',
                buttonRowList: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-button-row"][ambient="dark400"]',
                //result page
                dateResult: '[data-tag-name="notifications-center-result"] [data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-button-default"][text="Fecha"]',
                //swipe actions
                deleteButton: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] div ul.actions-list li.actions-item[warning]',
                favoriteButton: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] div ul.actions-list li:nth-child(2) [data-tag-name="bbva-button-action"]',
                payInsurance: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"]  div.button-row span:nth-child(5)',
                signatureAndReview: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] #buttons',
                modalDeleted: '[data-tag-name="notifications-center-modal"][visible] div [class="help-modal"]',
                cancelModalDelet: '[data-tag-name="notifications-center-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"].footer-button.link',
                acceptModalDelete: '[data-tag-name="notifications-center-modal"][visible] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"].footer-button:not(.link)',
                succesModal: '[data-tag-name="notifications-center-modal"] [data-tag-name="bbva-notification-toast"]',
                moreEventButton: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] .actions-wrapper.opened .actions.actions-operative.show-padding div:nth-child(3) [data-tag-name="bbva-button-action"]',
                moreEventButtons: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] .actions-wrapper.opened .actions.actions-operative [data-tag-name="bbva-button-action"]',
                headerModalMoreAction: '[data-tag-name="bbva-help-modal"][visible] div[slot="slot-content"] [data-tag-name="bbva-header-category"][text="Acciones"]',
                modalMoreAction: '[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-row"]',

                notificationUnRead: '[data-tag-name="bbva-feature-notifications-list-mx"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"][class="container read"]',
                //detail
                category: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL header div[class="text-center icon-category"]',
                buttonDetial: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] div.button-row',
                buttonExtraAction: '[data-tag-name="bbva-feature-notifications-detail-mx"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"]  div.button-row span:nth-child(5)',
                buttonPayWithPoints: '[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-row"] #buttons span:nth-child(5)',
                helpModal: {
                    properties:{
                        root: '#notificationsDetailGL',
                    },
                    date: 'bbva-type-date',
                    hour: '[data-tag-name="bbva-text"].text-hour',
                    actions: '[data-tag-name="bbva-button-row"]',
                    closeNotificationButton: '#btn-right-primary',
                    type: 'div.wrapper [text="Tipo de notificación"]',
                    header: 'bbva-header-main #heading',
                    description: 'div.wrapper [text="Descripción"]',
                    title: 'bbva-header-main #text',
                },
                // --- Legacy Elements ---
                notificationButtonResult: '[data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"][text="Buscar"]',
                headeResult: '[data-tag-name="notifications-center-result"] [data-tag-name="bbva-transition-container"] div.modal-header [data-tag-name="bbva-header-main"][text="Resultados de búsqueda "]',
                listResult: '[data-tag-name="notifications-center-result"] [data-tag-name="bbva-transition-container"] [data-tag-name="notifications-center-list"]',
                tagsFilter: '[data-tag-name="notifications-center-result"] [data-tag-name="bbva-transition-container"] [data-tag-name="bbva-form-filter"]',
                buttonMarkRead:'[data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-button-row"] #buttons span:nth-child(3)',
                notificationExitBtn: '#notificationsDetailGL #btn-right-primary',
                notificationsSearch: '#buttons [image="button-consult"]',
                notificationsConfiguration: '#buttons [image="button-configuration"]',
                bottomDashboardBar: [
                    CellsNavigationBarSpherica,
                    {
                        itemList: {
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 2,
                            [FOOTER_TABS.ADD]: 3,
                            [FOOTER_TABS.MAIL]: 'notificationsList',
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],
            },
            elementsSpherica: {
                bottomDashboardBar: [
                    CellsNavigationBarSpherica,
                    {
                        itemList: {
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 2,
                            [FOOTER_TABS.ADD]: 3,
                            [FOOTER_TABS.MAIL]: 'notificationsList',
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],
                notificationsListMx: 'bbva-feature-notifications-list-mx-spherica',
                notificationDetailMX : 'bbva-feature-notifications-detail-mx-spherica',
                // upper side
                notificationsDM: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"]',
                header: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] [data-tag-name="bbva-header-main"] #text[aria-label="Notificaciones"]',
                notificationList: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"]#principalListPage',
                notificationFilterList: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"][image="button-consult"]',
                notificationOfferIcon: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] [data-tag-name="notifications-center-list"]#principalListPage [data-tag-name="bbva-list-swipe"][id="__ID__"] [data-tag-name="bbva-badge-icon"] [data-tag-name="bbva-type-icon"]',
                notificationOfferText: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] [data-tag-name="notifications-center-list"]#principalListPage [data-tag-name="bbva-list-swipe"][id="__ID__"] [data-tag-name="bbva-badge-icon"] [data-tag-name="bbva-type-text"]',
                //more actions
                moreNotificationsAlert: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-header-category"] div [data-tag-name="bbva-type-link"]',
                moreActions: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"]#principalListPage div [data-tag-name="bbva-help-modal"][id="modalMoreActions"]',
                buttonActions: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"]#principalListPage div [data-tag-name="bbva-help-modal"][id="modalMoreActions"] [data-tag-name="bbva-button-row"]',
                settingNotification: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"]#principalListPage [data-tag-name="bbva-button-row"] span:nth-child(2) [data-tag-name="bbva-button-action"][image="button-configuration"]',
                detailShowPromotion: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-detail"] [data-tag-name="bbva-help-modal"] header [data-tag-name="bbva-text"][text="Promoción BBVA"]',
                //carousel alert notification
                carouselNotificationAlert: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-carousel-default"]',
                deatailCarousel: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-carousel-default"] div[class="swiper-slide swiper-slide-active"] [data-tag-name="bbva-link"]:nth-child(3)',
                detailAlert: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL div header [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                securityCall: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL div header div.text-establishment [data-tag-name="bbva-badge-default"][text="Llamada oficial BBVA"]',
                //search modal
                filters:'[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"]',
                buttonFilters:'[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"] div div  div.modal-footer [data-tag-name="bbva-button-default"].footer-button',
                categoryFilters:'[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"] div [data-tag-name="bbva-header-category"][text="Categoría"]',
                searchModal:'[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-search"] [data-tag-name="bbva-help-modal"]',
                buttonRowList: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] #swipe-actions',
                //result page
                dateResult: '[data-tag-name="notifications-center-result"] [data-tag-name="bbva-transition-container"] div button[aria-label="Ordenar notificaciones por fecha descendente"]',
                //swipe actions
                deleteButton: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] div .actions-list .actions-item[warning]',
                favoriteButton: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"] div.actions-wrapper.opened div.actions.actions-operative.show-padding div div:nth-child(2) [data-tag-name="bbva-button-action"]',
                payInsurance: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"]  div.button-row span:nth-child(5)',
                shareActionButton: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] #buttons [data-tag-name="bbva-button-action"]',
                signatureAndReview: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] #buttons span:nth-child(5) [data-tag-name="bbva-button-action"]',
                notificationUnRead: '[data-tag-name="bbva-feature-notifications-list-mx-spherica"] div [data-tag-name="notifications-center-list"] [data-tag-name="bbva-list-swipe"][id="__ID__"]',
                headerModalMoreAction: '[data-tag-name="bbva-help-modal"][visible] #helpModalHeader',
                operationInformationButton: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] div#buttons span:nth-child(5)',
                //detail
                category: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL header div[class="text-center icon-category"]',
                buttonDetial: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"] div.button-row',
                buttonReviewAndSign: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"]  div.button-row span:nth-child(5)',
                buttonExtraAction: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-button-row"]  div.button-row span:nth-child(5)',
                descriptionContent: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                categoryContent: '[data-tag-name="bbva-feature-notifications-detail-mx-spherica"] [data-tag-name="bbva-help-modal"]#notificationsDetailGL [data-tag-name="bbva-type-text"][text="__TEXT__"]',
                deleteHelpModal: [
                    BbvaHelpModal,
                    {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        },
                        additionalElements: {
                            acceptBtn: '[data-tag-name="bbva-button-default"]:not([variant])',
                            cancelBtn: '[variant="link"]',
                        }
                    }
                ],
                helpModal: {
                    properties:{
                        root: '#notificationsDetailGL',
                    },
                    closeNotificationButton: '#bbva-feature-notifications-detail-header-btn-close'
                },
            },
            requiredElements: [
                'header',
                'buttonRowList'
            ]
        });
        this.FOOTER_TABS = FOOTER_TABS;
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list notification':
                await this.notificationList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button row list':
                await this.buttonRowList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail alert':
                await this.detailAlert.specifySelector({placeholder: '__TEXT__', value: global.user.text.title}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'security call':
                await this.securityCall.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel notification alert':
                await this.carouselNotificationAlert.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'tags filter':
                await this.tagsFilter.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filters':
                await this.filters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list result':
                await this.listResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'favorite icon':
                await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.firstNotification}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal more action':
                await this.headerModalMoreAction.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal more actions':
                await this.moreActions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification select read':
                await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.firstNotification}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification select unread':
                await this.notificationUnRead.specifySelector({placeholder: '__ID__', value: global.user.notifications.firstNotification}).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button filters':
                await this.buttonFilters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category filters':
                await this.categoryFilters.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date result':
                await this.dateResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header result':
                await this.headeResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'action':
                await this.moreActions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button more actions':
                await this.buttonActions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success modal':
                await this.modalsContainer.modalDelete.succesModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category notification':
                await this.category.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button detail':
                await this.buttonDetial.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice notification':
                await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.domiciliationNotice})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deferred signature notification':
                await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.deferredSignature})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification title':
                await this.helpModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification header':
                await this.helpModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification type':
                await this.helpModal.type.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification category':
                await this.category.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification date':
                await this.helpModal.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification actions':
                await this.helpModal.actions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification description':
                await this.helpModal.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close notification':
                await this.helpModal.closeNotificationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm or rejected':
                await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent credit card':
                await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payroll credit notification':
                await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.payrollCredit}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card loan notification':
                await this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.creditCard}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search button':
                await this.notificationsSearch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'configuration button':
                await this.notificationsConfiguration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation justification notification':
                await this.operationInformationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification offer icon':
                await this.notificationOfferIcon.specifySelector({placeholder: '__ID__', value: global.user.notifications.buttonTextNotification}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification offer text':
                await this.notificationOfferText.specifySelector({placeholder: '__ID__', value: global.user.notifications.textNotificationOffer}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share action button':
                await this.shareActionButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon button action':
                await this.operationInformationButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail description content':
                await this.descriptionContent.specifySelector({placeholder: '__TEXT__', value: global.user.text.description}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail category content':
                await this.categoryContent.specifySelector({placeholder: '__TEXT__', value: global.user.text.category}).waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async showDetailAlertPhaseTwo() {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: '65d26b897631aa6c5ddc83fa'}).waitForDisplayed({timeout: config.wait.XXL})).click();
    }

    async showDetailExpense() {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: '6552651e4d83a76058046994'}).waitForDisplayed({timeout: config.wait.XXL})).click();
    }

    async showDetailPromotion() {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: '655e334701bc1067e238cfe4'}).waitForDisplayed({timeout: config.wait.XXL})).click();
    }

    async showDetailInformativeWarning() {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: 'HOST2024-01-29-22.34.19.619184AS'}).waitForDisplayed({timeout: config.wait.XXL})).click();
    }

    async showDetailDefault(defaultId) {
        const {defaultValues} = global.user;
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: defaultValues[defaultId]}).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showFilterList() {
        await (await this.notificationFilterList.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showResultNotificationsAlert() {
        await (await this.moreNotificationsAlert.waitForDisplayed({timeout: config.wait.L})).click();
    }

    async swipeSelectNotification() {
        const element = this.notificationDetail.specifySelector({placeholder: '__ID__', value: global.user.notifications.firstNotification});
        await element.scrollIntoView();
        await this.swipeElement(element, 'left');
        await (await this.deleteButton.specifySelector({placeholder: '__ID__', value: global.user.notifications.firstNotification}).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async cancelModalDeletNotification() {
        await (await this.deleteHelpModal.additionalElements.cancelBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async aceptedModalDeletNotification() {
        await (await this.deleteHelpModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async swipeSelectNotificationFavorite() {
        const notificationId = global.user.notifications.firstNotification;
        const element = this.notificationDetail.specifySelector({placeholder: '__ID__', value: notificationId});
        await element.waitForDisplayed({timeout: config.wait.XL});
        await element.scrollIntoView({block: 'center'});
        await this.swipeElement(element, 'left');
        await (await this.favoriteButton.specifySelector({placeholder: '__ID__', value: notificationId}).waitForDisplayed({timeout: config.wait.XL})).click();
    }

    async settingConfiguration() {
        await (await this.settingNotification.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async swipeSelectNotificationEventMore() {
        const notificationId = global.user.notifications.firstNotification;
        const notificationElement = this.notificationDetail.specifySelector({placeholder: '__ID__', value: notificationId});
        await notificationElement.waitForDisplayed({timeout: config.wait.L});
        await notificationElement.scrollIntoView({block: 'start'});
        await this.swipeElement(notificationElement, 'left');
        await (await this.moreEventButton.specifySelector({placeholder: '__ID__', value: notificationId}).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async swipeSelectNotificationEventMoreMarkRead() {
        const notificationId = global.user.notifications.firstNotification;
        const element = this.notificationDetail.specifySelector({placeholder: '__ID__', value: notificationId});

        await element.waitForDisplayed({timeout: config.wait.L});
        await element.scrollIntoView({block: 'center'});
        await this.swipeElement(element, 'left');
        await (await this.moreEventButton.specifySelector({placeholder: '__ID__', value: notificationId}).waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.buttonMarkRead.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async detailPromotion(notificationId) {
        await (await this.notificationDetail.specifySelector({ placeholder: '__ID__', value: notificationId })
            .waitForClickable({ timeout: config.wait.L }))
            .click({ userActions: true });
    }

    async detailJustification(notificationId) {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: notificationId}).waitForDisplayed({timeout: config.wait.L})).click();
    }

    async accessCC() {
        await this.buttonPayWithPoints.waitForClickable({ timeout: config.wait.L });
        await this.buttonPayWithPoints.click();
    }

    async showFilterPage() {
        await (await this.searchModal.waitForDisplayed({timeout: config.wait.M}));
        await (await this.searchModal.scrollIntoView());
        await (await this.filterItem.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.buttonFilters.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessFooter(page) {
        switch(page.toLowerCase()){
            case 'check up notifications':
                await this.bottomDashboardBar.accessKnownTab({tab: FOOTER_TABS.CHECK_UP});
                break;
            case 'oportunities notifications':
                await this.bottomDashboardBar.accessKnownTab({tab: FOOTER_TABS.ADD});
                break;
            case 'dashboard':
                await this.bottomDashboardBar.accessKnownTab({tab: FOOTER_TABS.HOME});
                break;
            default:
                throw new Error(`${page} IS NOT DEFINED`);
        }
    }

    async fillFlags(flag = NOTIFICATIONS_CENTER_FLAG) {
        await this.notificationsListMx.execute({
            script: flag => this.featureFlags = flag, args: [flag]
        });
        await this.executeListMethod('executeServices', '');
    }

    async executeListMethod(method, data) {
        await this.notificationsListMx.execute({
            script: (method, data) => this[method](data), args: [method, data]
        });
    }

    async useDeepLink (operative = {}, publicSettingsDM = {}) {
        await this.notificationDetailMX.execute({
            script: publicSettingsDM => this.publicSettings = publicSettingsDM, args: [publicSettingsDM]
        });
        await this.executeDetailMethod('_navigateToDeepLink', operative);
    }

    async executeDetailMethod(method, data) {
        await this.notificationDetailMX.execute({
            script: (method, data) => this[method](data), args: [method, data]
        });
    }

    async selectNotification(notification) {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: notification}).waitForDisplayed({timeout: config.wait.L})).click();
    }

    async enterPaymentInsurance() {
        await (await this.payInsurance.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectPaymentInsurance(notification) {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: notification}).waitForDisplayed({timeout: config.wait.L})).click();
        await (await this.payInsurance.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectNotificationCoowners(notification) {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: notification}).waitForDisplayed({timeout: config.wait.L})).click();
        await (await this.signatureAndReview.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async confirmOrRejected(operative = {}, publicSettingsDM = {}) {
        try {
            await (await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M})).click();
        } catch (error) {
            logger.error('There is no button "confirm or reject" in the buttons row.');
            await this.useDeepLink(operative, publicSettingsDM);
        }
    }

    async closeNotificationDetail() {
        await (await this.helpModal.closeNotificationButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectExtraAction(notification) {
        await this.selectNotification(notification);
        await (await this.buttonExtraAction.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async goBack() {
        await (await this.helpModal.closeNotificationButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessPointsRedeemPurchasesByCampaigns() {
        await (await (await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M, interval: 500}))
            .click({ useActions: true });
    }

    async selectNotificationType(type) {
        switch(type.toLowerCase()){
            case 'domiciliation notice':
                await this.selectNotification(global.user.notifications.domiciliationNotice);
                break;
            case 'deferred signature':
                await this.selectNotification(global.user.notifications.deferredSignature);
                break;
            case 'ccv payments error':
                await this.selectNotification(global.user.notifications.ccvError);
                break;
            case 'date payment error':
                await this.selectNotification(global.user.notifications.dateError);
                break;
            case 'report payment error':
                await this.selectNotification(global.user.notifications.reportError);
                break;
            case 'cancel payment error':
                await this.selectNotification(global.user.notifications.cancelError);
                break;
            case 'credit card offer':
                await this.selectNotification(global.user.notifications.creditCard);
                break;
            case 'personal loan':
                await this.selectNotification(global.user.notifications.personalLoan);
                break;
            case 'payroll credit':
                await this.selectNotification(global.user.notifications.payrollCredit);
                break;
            case 'modification mtu':
                await this.selectNotification(global.user.notifications.confirm);
                break;
            case 'reject mtu':
                await this.selectNotification(global.user.notifications.reject);
                break;
            case 'error modification mtu':
                await this.selectNotification(global.user.notifications.error);
                break;
            case 'confirm':
                await this.selectNotification(global.user.notifications.confirmMtu);
                break;
            case 'rejected due to temporary block':
                await this.selectNotification(global.user.notifications.rejectedDueToTemporaryBlock);
                break;
            default:
                throw new Error(`The option: ${type} is not implemented`);
        }
    }

    async mtuConfirmOrReject() {
        await (await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async continueProcess() {
        await (await this.buttonPayWithPoints.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async accessOperationJustification() {
        await this.operationInformationButton.waitForClickable({ timeout: config.wait.L });
        await this.operationInformationButton.click();
    }

    async detailNotification() {
        await this.operationInformationButton.waitForDisplayed({ timeout: config.wait.M });
        await this.operationInformationButton.click();
    }

    async notificationSelect(notificationId) {
        await (await this.notificationDetail.specifySelector({placeholder: '__ID__', value: notificationId}).waitForDisplayed({timeout: config.wait.M})).click();
    }
}
export default new NotificationsCenter();
