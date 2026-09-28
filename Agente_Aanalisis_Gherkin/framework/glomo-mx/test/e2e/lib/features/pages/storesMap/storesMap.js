import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import DialogPermissions from '../../components/native/dialog-permissions';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('StoresMap')
class StoresMap extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-storesMap[state="active"]',
            elements: {
                //header
                header: CellsMoleculeHeader,

                //Permissions
                dialogPermissions: DialogPermissions,

                //Allow location modal (go to settings)
                modalLocation: '[data-tag-name="bbva-help-modal"][data-selector="modal-location"]',
                modalLocationNoCommerceButton: '[data-tag-name="bbva-help-modal"][data-selector="modal-error"][visible] div.modal-footer [data-tag-name="bbva-button-default"]',
                modalLocationCloseBtn: '#helpModalHeader #btn-right-primary',

                //Error Internal Server
                retryButton: '[data-tag-name="bbva-help-modal"][aria-label="Pagar en comercios"] .modal-footer [data-tag-name="bbva-button-default"]',

                //map
                storesFilter: '#stores-filter #buttons .listitem-button [data-tag-name="bbva-button-action"]',
                viewListOrMapButton: '.view-list-panel [data-tag-name="bbva-link"]',
                mapCommerce: '[data-tag-name="bbva-map-dynamic"]',
                mapCommerceLocation: '[data-tag-name="bbva-map-dynamic"] [data-tag-name="bbva-button-action"]',
                pinOnePromotionCommerce: 'div[title="__TITLE__"]',

                //tooltip Commerce
                tooltipCommerceInformation: 'div.tooltip [data-tag-name="bbva-map-tooltip"]',
                closeTooltipCommerceInformation: 'div.tooltip .bbva-map-tooltip-icon [data-tag-name="bbva-button-default"]',
                tooltipCommerceName: '.bbva-map-tooltip-location span',
                tooltipCommerceAddress: '[data-tag-name="bbva-text"].bbva-map-tooltip-description',
                tooltipCommerceDistance: 'div[class="bbva-map-tooltip-extra-description"]',
                tooltipCategory: 'div.bbva-map-tooltip-badge-store .bbva-map-tooltip-bagde-icon',
                tooltipCommerceDirections: '.bbva-map-tooltip-section span.listitem-button:nth-of-type(1) [data-tag-name="bbva-button-action"]',
                tooltipCommerceCall: '.bbva-map-tooltip-section span.listitem-button:nth-of-type(2) [data-tag-name="bbva-button-action"]',

                storeListElements: '.main-stores-list-container [data-tag-name="bbva-list-movement"]',

                //store Detail
                storeDetailName: '.store-detail-container__top-info bbva-text.top-text',
                storeDetailAddress: '.store-detail-container__top-info [data-tag-name="bbva-list-simple"] .wrapper-description [data-tag-name="bbva-text"]',
                storeDetailCarrousel: '.store-detail-container__top-info [data-tag-name="bbva-card-control"]',
                storeDetailCategoryTitle: '.store-detail-container__categories [data-tag-name="bbva-header-category"] #heading',
                storeDetailCategoryValue: '.store-detail-container__categories [data-tag-name="bbva-list-category"] .label',
                storeDetailOtherTitle: '.store-detail-container__other-info [data-tag-name="bbva-header-category"] #heading',
                storeDetailSchedule: '.store-detail-container__top-info [data-tag-name="bbva-carousel-swipe"] .categories-container',
                storeDetailWeb: '.store-detail-container__other-info__web [label="promotions-stores-map-store-detail-other-info-web"]',
                storeDetailRating: '.store-detail-container__other-info__rating',
                storeDetailButtons: '[data-tag-name="bbva-button-row"] .listitem-button [data-tag-name="bbva-button-action"]',

                // Search Engine
                searchEngineHeader: '.content-wrapper [data-tag-name="bbva-header-category"]:nth-of-type(1) [data-tag-name="bbva-core-heading"]',
                input: {
                    web: '.content-wrapper [data-tag-name="bbva-form-input"] input',
                    ios: '//XCUIElementTypeTextField[@name="Buscar "]'
                },
                acceptKeyboard: {
                    ios: '//XCUIElementTypeButton[@name="Listo"]'
                },
                inlineSpecialSymbols: '.content-wrapper [data-tag-name="bbva-form-input"] [data-tag-name="bbva-notification-help"]',
                categoriesTitle: '.content-wrapper [data-tag-name="bbva-header-category"]:nth-of-type(2) [data-tag-name="bbva-core-heading"]',
                categoriesList: '.content-wrapper ul.categories-list',
                showMoreCategoriesBtn: '[see-more] [data-tag-name="bbva-link"]',
                searchBtn: {
                    web: '.filter-categories .modal-footer .slot-footer [data-tag-name="bbva-button-default"]',
                    ios: '//XCUIElementTypeButton[@name="Buscar"]'
                },
                deleteFilterBtn: '.filter-categories .modal-footer .slot-footer [data-tag-name="bbva-link"]'

            },
            requiredElements: [
                'header',
                'viewListOrMapButton'
            ],
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            //items - permissions
            case 'allow using app':
                await this.changeContext({context: 'NATIVE_APP'});
                await this.dialogPermissions.allowUseApp.waitForDisplayed({timeout: config.wait.XXXL});
                await this.changeContext({context: 'WEBVIEW'});
                break;
            case 'allows once':
                await this.changeContext({context: 'NATIVE_APP'});
                await this.dialogPermissions.allowOnce.waitForDisplayed({timeout: config.wait.XXXL});
                await this.changeContext({context: 'WEBVIEW'});
                break;
            case 'deny':
                await this.changeContext({context: 'NATIVE_APP'});
                await this.dialogPermissions.notAllow.waitForDisplayed({timeout: config.wait.XXXL});
                await this.changeContext({context: 'WEBVIEW'});
                break;
            //item - header
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            //items - main
            case 'search commerce':
                await this.storesFilter.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'map of commerce':
                await this.mapCommerce.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'list of commerce':
                await this.storeListElements.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'show map':
            case 'show list of commerces':
                await (await this.viewListOrMapButton.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.S});
                break;
            //items - tooltip
            case 'tooltip - shop':
                await this.tooltipCommerceInformation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close tooltip':
                await this.closeTooltipCommerceInformation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'name of commerce':
                await this.tooltipCommerceName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'address of commerce':
                await this.tooltipCommerceAddress.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'distance to the commerce':
                await this.tooltipCommerceDistance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'category':
                await this.tooltipCategory.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'call':
                await this.tooltipCommerceCall.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'directions':
                await this.tooltipCommerceDirections.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            //items - commerce detail
            case 'commerce name - detail':
                await this.storeDetailName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'commerce address - detail':
                await this.storeDetailAddress.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'category title - detail':
                await this.storeDetailCategoryTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'category value - detail':
                await this.storeDetailCategoryValue.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'other info title - detail':
                await this.storeDetailOtherTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'schedule':
                await this.storeDetailSchedule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'url web':
                await this.storeDetailWeb.waitForDisplayed({timeout: config.wait.L, reverse: value === 'not visible'});
                break;
            case 'shop rating':
                await this.storeDetailRating.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'directions - detail':
            case 'call - detail':
            case 'email - detail':
                await this.storeDetailButtons.waitForDisplayed({timeout: config.wait.L});
                break;
            //items search engine
            case 'search engine header':
                await this.searchEngineHeader.waitForText({timeout: config.wait.S});
                break;
            case 'search engine input':
                if (Commands.flags.isIOS) {
                    await this.changeContext({context: 'NATIVE_APP'});
                }
                await this.input.waitForDisplayed({timeout: config.wait.L});
                if (Commands.flags.isIOS) {
                    await this.changeContext({context: 'WEBVIEW'});
                }
                break;
            case 'warning special symbols':
                await this.inlineSpecialSymbols.waitForText({timeout: config.wait.S});
                break;
            case 'categories - title':
                await this.categoriesTitle.waitForText({timeout: config.wait.S});
                break;
            case 'categories - list':
                await this.categoriesList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'categories - view more':
                await (await this.showMoreCategoriesBtn.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.S, reverse: value === 'disabled'});
                break;
            case 'search':
                if (Commands.flags.isIOS) {
                    await this.changeContext({context: 'NATIVE_APP'});
                }
                await (await this.searchBtn.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                if (Commands.flags.isIOS) {
                    await this.changeContext({context: 'WEBVIEW'});
                }
                break;
            case 'delete filters':
                await (await this.deleteFilterBtn.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async showCommerceList() {
        await Commands.pause({time: config.wait.S});
        await (await this.viewListOrMapButton.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async retryModal() {
        await (await this.retryButton.waitForDisplayed({timeout: config.wait.XL}))
            .click();
    }

    async searchCommerce() {
        await (await this.storesFilter.waitForDisplayed({timeout: config.wait.XXXL}))
            .click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.L
        });
    }

    async selectCommerce(commerce) {
        const element = this.pinOnePromotionCommerce.specifySelector({placeholder: '__TITLE__', value: commerce});
        await (await element.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async accessCommerceDetail() {
        await (await this.tooltipCommerceName.waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async isAllowLocationModalPresent() {
        return this.modalLocation.isExisting();
    }

    async closeAllowLocationModal() {
        await (await (await this.modalLocationCloseBtn.waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XL
        });
    }

    async closeNoCommerceModal() {
        await (await (await this.modalLocationNoCommerceButton.waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XL
        });
    }

    async findCommerce(commerce) {
        if (Commands.flags.isIOS) {
            await this.changeContext({context: 'NATIVE_APP'});
        }
        await this.input.waitForDisplayed({timeout: config.wait.XXL});
        await this.input.click();
        await this.input.setValue({value: commerce});
        if (Commands.flags.isIOS) {
            await this.acceptKeyboard.waitForDisplayed({timeout: config.wait.L});
            await this.acceptKeyboard.click();
        }
        await (await (await (await this.searchBtn.scrollIntoView({block: 'end'}))
            .waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XL
        });
    }

    async goBack() {
        await (await (await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click();
    }
}

export default new StoresMap();
