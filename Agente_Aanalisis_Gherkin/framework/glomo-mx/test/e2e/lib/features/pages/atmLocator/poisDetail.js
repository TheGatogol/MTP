import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

const UNKNOWN_ACTION_ERROR = (option) => `[ERR] [POISDETAIL] The action ${option} is unknown. Cannot be executed.`;

@page()
class PoisDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-poisDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                inputPlace: 'cells-molecule-input #input',
                optionsBtnToggle: 'cells-options-list',
                optionsBtnBranches: 'cells-options-list cells-checkbox-button.primary',
                optionsBtnATMs: 'cells-options-list cells-checkbox-button.secondary',
                map: '#atmMap',
                mapMarker: '#atmMap #gmap',
                markers: '#atmMap #geoMarkers',
                collapsibleList: '#list',
                btnShowList: '#list #btnShowList',
                btnHideList: '#list #btnHideList',
                btnSearchArea: 'glomo-atm-locator .search-area',
                scrollContainer: '#list #scrollContainer',
                branchDetail: 'cells-atm-branch-detail',
                branchDetailClosestPois: 'cells-atm-branch-detail .closest-pois',
                branchDetailClosestPoisItem: 'cells-atm-branch-detail .closest-pois__item',
                branchName: 'cells-atm-branch-detail .header__title',
                branchDistance: 'cells-atm-branch-detail .header__subtitle:nth-of-type(1)',
                branchWaitingTime: 'cells-atm-branch-detail span:nth-of-type(2)',
                branchAddress: 'cells-atm-branch-detail div:nth-of-type(3)',
                branchSchedule: 'cells-atm-branch-detail div:nth-of-type(4)',
                branchAtmsInfo: 'cells-atm-branch-detail div:nth-of-type(5)',
                cardBranchShareBtn: 'cells-operations-list .list__item[data-selector="share"]',
                cardBranchRouteBtn: 'cells-operations-list .list__item[data-selector="route"]',
                branchDetailShareBtn: 'cells-atm-branch-detail cells-operations-list .list__item[data-selector="share"]',
                branchDetailAppointmentBtn: 'cells-atm-branch-detail cells-operations-list .list__item[data-selector="turn"]',
                branchDetailRouteBtn: 'cells-atm-branch-detail cells-operations-list .list__item[data-selector="route"]',
                nearbyBranchesList: 'cells-atm-branch-detail .closest-pois'
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                inputPlace: 'cells-molecule-input-spherica #input',
                optionsBtnToggle: 'cells-options-list-spherica',
                optionsBtnBranches: 'cells-options-list-spherica cells-checkbox-button.primary',
                optionsBtnATMs: 'cells-options-list-spherica cells-checkbox-button.secondary',
                btnSearchArea: 'glomo-atm-locator-spherica .search-area',
                branchDetail: 'cells-atm-branch-detail-spherica',
                branchDetailClosestPois: 'cells-atm-branch-detail-spherica .closest-pois',
                branchDetailClosestPoisItem: 'cells-atm-branch-detail-spherica .closest-pois__item',
                branchName: 'cells-atm-branch-detail-spherica .header__title',
                branchDistance: 'cells-atm-branch-detail-spherica .header__subtitle:nth-of-type(1)',
                branchWaitingTime: 'cells-atm-branch-detail-spherica span:nth-of-type(2)',
                branchAddress: 'cells-atm-branch-detail-spherica div:nth-of-type(3)',
                branchSchedule: 'cells-atm-branch-detail-spherica div:nth-of-type(4)',
                branchAtmsInfo: 'cells-atm-branch-detail-spherica div.closest-pois',
                branchDetailShareBtn: 'cells-atm-branch-detail-spherica cells-operations-list-spherica .list__item[data-selector="share"]',
                branchDetailAppointmentBtn: 'cells-atm-branch-detail-spherica cells-operations-list-spherica .list__item[data-selector="turn"]',
                branchDetailRouteBtn: 'cells-atm-branch-detail-spherica cells-operations-list-spherica .list__item[data-selector="route"]',
                nearbyBranchesList: 'cells-atm-branch-detail-spherica .closest-pois',
                cardBranchShareBtn: 'cells-operations-list-spherica .list__item[data-selector="share"]',
                cardBranchRouteBtn: 'cells-operations-list-spherica .list__item[data-selector="route"]',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: false, isBtnLeft: true});
                break;
            case 'header title':
                await this.header.waitForDisplayed();
                break;
            case 'close modal button':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            case 'branch name':
                await this.branchName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch distance':
                await this.branchDistance.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch estimated waiting time':
                await this.branchWaitingTime.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch address':
                await this.branchAddress.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch schedule':
                await this.branchSchedule.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'branch atms info':
                await this.branchAtmsInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'share button':
                await this.cardBranchShareBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'route button':
                await this.cardBranchRouteBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'nearby branches list':
                await this.nearbyBranchesList.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'warning modal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async showDetail() {
        await this.branchDetail.waitForDisplayed({timeout: config.wait.L});
        await this.branchDetailClosestPois.scrollIntoView();
        await this.branchDetailClosestPoisItem.click();
    }

    async operationActions(action) {
        switch (action.toLowerCase()) {
            case 'share':
                await (await this.branchDetailShareBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'turn':
                await (await this.branchDetailAppointmentBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'route':
                await (await this.branchDetailRouteBtn.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(UNKNOWN_ACTION_ERROR(action));
        }
    }
}

export default new PoisDetail();
