import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import * as utilsLocation from '../../utils/utilsLocation';

const UNKNOWN_ACCESS_ERROR = (option) => `[ERR] [ATMLOCATOR] The function ${option} is unknown. Cannot be accessed.`;

@page()
class AtmLocator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-atmLocator[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                inputPlace: 'cells-molecule-input #input',
                optionsBtnToggle: 'cells-options-list',
                optionsBtnBranches: 'cells-options-list cells-checkbox-button.primary',
                optionsBtnATMs: 'cells-options-list div cells-checkbox-button.secondary',
                map: '#atmMap',
                mapMarker: '#atmMap #gmap',
                markers: '#atmMap #geoMarkers',
                filterContainer: 'cells-options-list',
                collapsibleList: '#list',
                checkApptDetail: '#item-first-link .link',
                accesBranchDetail: '.cells-collapsible-list-item div[role="button"]',
                btnShowList: '#list #btnShowList',
                btnHideList: '#list #btnHideList',
                btnSearchArea: 'glomo-atm-locator .search-area',
                branchWaitingTime: 'cells-atm-branch-detail span:nth-of-type(2)',
                scrollContainer: '#list #scrollContainer',
                cardBranch: '#detail.active',
                cardBranchCloseBtn: '#detail .close',
                cardBranchName: 'paper-card .main',
                cardBranchDistance: 'paper-card .secondary',
                cardBranchShareBtn: 'cells-operations-list .list__item[data-selector="share"]',
                cardBranchAppntBtn: 'cells-operations-list .list__item[data-selector="turn"]',
                cardBranchRouteBtn: 'cells-operations-list .list__item[data-selector="route"]',
                branchPois: '#atmMap #gmap #map div[role="button"]',
                branchPoi: '#atmMap #gmap #map div[role="button"]:nth-of-type(__N__)',
                firstCollapsedListItem: 'cells-collapsible-list #scrollContainer div:nth-of-type(1)',
                branchesPoints: 'glomo-atm-locator img[src$="branch.svg"]',
                atmsPoints: 'glomo-atm-locator img[src$="atm.svg"]',
                noResultsImg: '.emptyListImage img',
                noResultText: '.emptyListImage span',
                successToastIcon: 'bbva-notification-toast svg',
                successToastText: 'bbva-notification-toast bbva-type-text'
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                inputPlace: 'cells-molecule-input-spherica#inputMap.input-lateral-padding',
                optionsBtnToggle: 'cells-options-list-spherica',
                cardBranchShareBtn: 'cells-operations-list-spherica .list__item[data-selector="share"]',
                cardBranchAppntBtn: 'cells-operations-list-spherica .list__item[data-selector="turn"]',
                cardBranchRouteBtn: 'cells-operations-list-spherica .list__item[data-selector="route"]',
                optionsBtnBranches: 'cells-options-list-spherica cells-checkbox-button-spherica.primary',
                optionsBtnATMs: 'cells-options-list-spherica div cells-checkbox-button-spherica.secondary',
                filterContainer: 'cells-options-list-spherica',
                btnSearchArea: 'glomo-atm-locator-spherica .search-area',
                branchWaitingTime: 'cells-atm-branch-detail-spherica span:nth-of-type(2)',
                branchesPoints: 'glomo-atm-locator-spherica img[src$="branch.svg"]',
                atmsPoints: 'glomo-atm-locator-spherica img[src$="atm.svg"]',
                firstCollapsedListItem: 'cells-collapsible-list-spherica #scrollContainer div:nth-of-type(1).cells-collapsible-list-item__info',
            },

            defaultSphericaElements: [
                'GlomoAlertManager',
            ],

            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: false, isBtnLeft: true});
                break;
            case 'input place':
                await this.inputPlace.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'options btn branches':
                await this.optionsBtnBranches.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'options btn atms':
                await this.optionsBtnATMs.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'map':
                await this.map.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'collapsible list':
                await this.collapsibleList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'back to previous button':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header title':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'search address input':
                await this.inputPlace.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'atms branches display toggle':
                await this.optionsBtnToggle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'google interactive map':
                await this.map.waitForDisplayed({timeout: config.wait.L, reverse: value === 'no visible'});
                break;
            case 'atms&branches swipeable list':
                await this.collapsibleList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'show list button':
                await this.btnShowList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'show map button':
                await this.btnHideList.waitForAnimation({timeout: config.wait.L});
                await this.btnHideList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'atms&branches list':
                await this.scrollContainer.waitForAnimation({timeout: config.wait.L});
                await this.scrollContainer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button to search on this new area is shown':
                await this.btnSearchArea.waitForAnimation({timeout: config.wait.L});
                break;
            case 'the map changes its centered location to the new selected address':
                await this.mapMarker.waitForDisplayed({timeout: config.wait.L});
                await this.mapMarker.waitForAttribute({
                    attribute: 'latitude',
                    value: utilsLocation.defaultLocation.latitude
                });
                await this.mapMarker.waitForAttribute({
                    attribute: 'longitude',
                    value: utilsLocation.defaultLocation.longitude
                });
                break;
            case 'branch card':
                await this.cardBranch.waitForAnimation({timeout: config.wait.L});
                await this.cardBranch.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch name card':
                await this.cardBranchName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch distance card':
                await this.cardBranchDistance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'share button card':
                await this.cardBranchShareBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'request appointment button card':
                await this.cardBranchAppntBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'route button card':
                await this.cardBranchRouteBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'atms points':
                if (this.isSpherica()) {
                    await this.zoomIn(13);
                }
                await this.atmsPoints.waitForDisplayed({timeout: config.wait.XL});
                await this.branchesPoints.waitForNotDisplayed({timeout: config.wait.L});
                break;
            case 'branches points':
                await this.branchesPoints.waitForDisplayed({timeout: config.wait.L});
                await this.atmsPoints.waitForNotDisplayed({timeout: config.wait.L});
                break;
            case 'card with branch or atm detail':
                await this.cardBranch.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'no results found image':
                await this.noResultsImg.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'no results found description text':
                await this.noResultText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'green toast icon':
                await this.successToastIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'green toast text':
                await this.successToastText.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header title modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'micro illustration':
                await this.dialogOperations.elementValidation({
                    item: this.dialogOperations.CONTAINER_IMAGE
                });
                break;
            case 'title content':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            case 'description content':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'ok button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async access({functionality, atmType, navigateFrom} = {}) {
        switch (functionality.toLowerCase()) {
            case 'searchplace':
                await this.inputPlace.waitForDisplayed({timeout: config.wait.L});
                await this.inputPlace.click();
                break;
            case 'poisdetail':
                await this.validateAtmType(atmType);
                await this.validateNavigationOrigin(navigateFrom);
                break;
            default:
                throw new Error(UNKNOWN_ACCESS_ERROR(functionality));
        }
    }

    async validateAtmType(type) {
        switch (type) {
            case 'branch':
                await this.optionsBtnATMs.waitForDisplayed({timeout: config.wait.L});
                await this.optionsBtnATMs.waitForClickable({timeout: config.wait.L});
                await this.optionsBtnATMs.click();
                break;
            case 'atm':
                await this.optionsBtnBranches.waitForDisplayed({timeout: config.wait.L});
                await this.optionsBtnBranches.waitForClickable({timeout: config.wait.L});
                await this.optionsBtnBranches.click();
                break;
            default:
                throw new Error(`[ERR] [ATMLOCATOR] The atm type ${type} is unknown. Cannot find atm type.`);
        }
    }

    async accessPoiDetail(withZoom = false) {
        await (await this.collapsibleList.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L, interval: config.wait.S});
        if(withZoom && this.isSpherica()) {
            await this.collapsibleList.execute({script: () => this.setAttribute('collapsed', 'true')});
            await this.zoomIn(13);
        }
        storage.points = await this.getPointList();
        await this.showPoiCard();
    }

    async validateNavigationOrigin(origin) {
        switch (origin) {
            case 'map':
                await this.accessPoiDetail();
                await (await this.cardBranch.waitForDisplayed({timeout: config.wait.XL}))
                    .waitForAnimation({timeout: config.wait.XL});
                await this.cardBranchName.click();
                break;
            case 'list':
                await (await this.collapsibleList.waitForDisplayed({timeout: config.wait.L}))
                    .waitForAnimation({timeout: config.wait.L});
                await this.firstCollapsedListItem.waitForDisplayed({timeout: config.wait.L});
                await this.firstCollapsedListItem.click({x: 5, y: 5});
                break;
            default:
                throw new Error(`[ERR] [ATMLOCATOR] The origin ${origin} is unknown. Cannot find from where you are accessing.`);
        }
    }

    async interactsMap() {
        await this.map.waitForDisplayed({timeout: config.wait.L});
        await (await this.collapsibleList.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L});

        await this.collapsibleList.execute({script: () => this.setAttribute('full', 'true')});
        await this.collapsibleList.execute({script: () => this.setAttribute('collapsed', 'true')});

        await Commands.pause({time: config.wait.S});
    }

    async showList() {
        await (await this.collapsibleList.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L});
        await (await (await this.btnShowList.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L}))
            .click({x: 100, y: 20});
    }

    async searchPoisInArea() {
        await (await this.btnSearchArea.waitForDisplayed({timeout: config.wait.L})).click({x: 100, y: 20});
    }

    async swipeList() {
        await this.firstCollapsedListItem.waitForAnimation({timeout: config.wait.M});
        await this.swipeElement(this.collapsibleList, 'up');
    }

    async getPointList() {
        return (await this.branchPois
            .waitForDisplayed({timeout: config.wait.M}))
            .elementsInElement(this.mapMarker, [this.collapsibleList, this.filterContainer]);
    }

    async zoomIn(zoomLvl = 15.6) {
        await this.mapMarker.execute({
            script: zoom => this.zoom = zoom, args: [zoomLvl]
        });
    }

    async showPoiCard() {
        if (await this.cardBranch.isDisplayed()) {
            await (await this.cardBranchCloseBtn.waitForDisplayed({timeout: config.wait.M})).click();
            if (!this.cardClosedPreviously) {
                await this.zoomIn();
                this.cardClosedPreviously = true;
            }
        }
        storage.points = await this.getPointList();
        const point = await storage.points.pop();
        if (this.isSpherica()) {
            await this.collapsibleList.execute({script: () => this.setAttribute('collapsed', 'true')});
        }

        await point.waitForAnimation({timeout: config.wait.L});
        await point.waitForClickable({timeout: config.wait.L});

        await point.click();
        await this.cardBranch.waitForAnimation({timeout: config.wait.L});
    }

    async searchBranchCard(branchName) {
        await this.validateAtmType('branch');
        await this.zoomIn();
        storage.points = await this.getPointList();
        while (storage.points.length) {
            await this.showPoiCard();
            if (await this.cardBranchName.waitForText({
                text: branchName,
                exactMatch: false,
                failOnError: false,
                timeout: config.wait.S
            }))
                break;
            if ((storage.points.length) < 1)
                throw new Error(`'${branchName}' branch not found on the current location.`);
        }
    }

    async accessApptDetail() {
        await (await this.checkApptDetail.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessBranchAppointment(branchName = 'cinco de mayo') {
        await this.searchBranchCard(branchName);
        await this.collapsibleList.waitForAttribute({attribute: 'is-hidden'});
        await (await this.cardBranchAppntBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async fullList() {
        await (await this.collapsibleList.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.L});
        await (await this.btnShowList.waitForDisplayed({timeout: config.wait.L}))
            .click();
    }

    async accessBranchAppointmentFromCard() {
        await (await this.cardBranchAppntBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async backToPage() {
        await (await this.dialogOperations.confirmDialog());
        await (await this.header.actionLeft());
    }

}

export default new AtmLocator();
