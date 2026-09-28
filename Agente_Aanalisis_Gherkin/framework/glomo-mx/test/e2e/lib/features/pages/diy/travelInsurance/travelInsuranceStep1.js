import AbstractGlomoPage from '../../abstract-glomo-page.js';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';
import glomoMyTripsDateSelector from '../../../components/glomo-my-trips-date-selector.js';
import moment from 'moment';

@page('TravelInsuranceStep1')
class TravelInsuranceStep1 extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                telephoneIcon: 'cells-molecule-header #btnRightSecondary',
                toolTipButtonClose: 'cells-molecule-header #tooltipContent',
                destinationRadioButton1: '#travel-insurance-offer #traveler-destination-national',
                destinationRadioButton2: '#travel-insurance-offer #traveler-destination-international',
                dateStartSelector: '#travel-insurance-offer #main > div.key-value.spacing-zero-top > glomo-my-trips-date-selector #picker #start-input',
                dateEndSelector: '#travel-insurance-offer #main > div.key-value.spacing-zero-top > glomo-my-trips-date-selector #picker #end-input',
                coverageLink: '#travel-insurance-offer #main > div:nth-child(13) > cells-icon-message-change-data cells-icon-message > div.actions > cells-st-link > a',
                glomoMyTripsDate: {
                    component: {
                        ComponentClass:glomoMyTripsDateSelector
                    }
                },
                travelerNumberInput: '#travel-insurance-offer #main > div.key-value.spacing-xsm-bottom > cells-molecule-input',
                travelerNumberModalButton:'#cells-template-travelInsurance > cells-modal-selector #\\31',
                travelerNumberModalButtonAnalytics:'#cells-template-travelInsurance > cells-modal-selector #\\32',
                contractOfferButton: '#sticky #collapser .tertiary button',
                stickyCallMeBack:'#footer div.key-value.sticky-offer-page-button cells-st-button button'
            },
            requiredElements: [
                'header',
                'destinationRadioButton1',
                'destinationRadioButton2',
                'dateStartSelector',
                'dateEndSelector',
                'travelerNumberInput'
            ]
        });

    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'telephone icon':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination radio button 1':
                await this.destinationRadioButton1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination radio button 2':
                await this.destinationRadioButton2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date start selector':
                await this.dateStartSelector.scrollIntoView({block: 'start'});
                await this.dateStartSelector.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date end selector':
                await this.dateEndSelector.scrollIntoView({block: 'start'});
                await this.dateEndSelector.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'traveler number input':
                await this.travelerNumberInput.scrollIntoView({block: 'start'});
                await this.travelerNumberInput.waitForClickable({timeout: config.wait.M});
                await this.travelerNumberInput.click();
                await this.travelerNumberModalButton.waitForClickable({timeout: config.wait.M});
                await this.travelerNumberModalButton.click();
                break;
            case 'sticky button':
                if(value === 'call me') {
                    await this.stickyCallMeBack.waitForText({text:'Quiero que me llame un asesor', exactMatch:false});
                } else {
                    await this.stickyCallMeBack.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToCallMeBack(access) {
        switch (access) {
            case 'link':
                await this.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.XL
                });
                await this.stickyCallMeBack.waitForClickable({timeout: config.wait.M});
                await this.stickyCallMeBack.click();
                break;
            case 'header':
                await this.telephoneIcon.waitForDisplayed({timeout: config.wait.M});
                await this.telephoneIcon.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async closeToolTipCallMeBack() {
        await this.toolTipButtonClose.waitForClickable({timeout: config.wait.S});
        await this.toolTipButtonClose.click();
    }

    async enableInsuranceQuotation() {
        await this.destinationRadioButton1.waitForClickable({timeout:config.wait.XXL});
        await this.destinationRadioButton1.click();
        await this.dateStartSelector.scrollIntoView();
        await this.dateStartSelector.waitForClickable({timeout: config.wait.M});
        await this.glomoMyTripsDate.selectFromDate(moment().add(1, 'days').format('MM-DD-YYYY'));
        await this.dateEndSelector.waitForClickable({timeout: config.wait.M});
        await this.glomoMyTripsDate.selectToDate(moment().add(7, 'days').format('MM-DD-YYYY'));
        await this.travelerNumberInput.waitForClickable({timeout: config.wait.M});
        await this.travelerNumberInput.scrollIntoView({block: 'start'});
        await this.travelerNumberInput.click();
        await this.travelerNumberModalButton.waitForClickable({timeout: config.wait.M});
        await this.travelerNumberModalButton.click();
        await this.contractOfferButton.scrollIntoView({block: 'center'});
        await this.contractOfferButton.waitForDisplayed({timeout: config.wait.M});
        await this.contractOfferButton.waitForAnimation({timeout: config.wait.M});
        await this.contractOfferButton.waitForClickable({timeout: config.wait.M});
        await this.contractOfferButton.click();
    }

    async firstInteraction() {
        await this.destinationRadioButton1.waitForClickable({timeout: config.wait.M});
        await this.destinationRadioButton1.click();
    }

    async showCoverageReport() {
        await this.coverageLink.scrollIntoView({block: 'start'});
        await this.coverageLink.waitForClickable({timeout: config.wait.M});
        await this.coverageLink.click();
    }

    async enableInsuranceQuotationsAnalytics() {
        await this.destinationRadioButton1.waitForClickable({timeout: config.wait.L});
        await this.destinationRadioButton1.click();
        await this.dateEndSelector.scrollIntoView({block: 'end'});
        await this.dateEndSelector.waitForDisplayed({timeout: config.wait.M});
        await this.dateEndSelector.waitForClickable({timeout: config.wait.M});
        await this.glomoMyTripsDate.selectToDate(moment().add(7, 'days').format('MM-DD-YYYY'));
        await this.dateStartSelector.waitForClickable({timeout: config.wait.M});
        await this.glomoMyTripsDate.selectFromDate(moment().add(1, 'days').format('MM-DD-YYYY'));
        await this.travelerNumberInput.waitForClickable({timeout:config.wait.M});
        await this.travelerNumberInput.scrollIntoView({block: 'end'});
        await this.travelerNumberInput.waitForDisplayed({timeout: config.wait.M});
        await this.travelerNumberInput.waitForClickable({timeout: config.wait.M});
        await this.travelerNumberInput.click();
        await this.travelerNumberModalButtonAnalytics.waitForClickable({timeout:config.wait.M});
        await this.travelerNumberModalButtonAnalytics.click();
        await this.contractOfferButton.scrollIntoView({block: 'end'});
        await this.contractOfferButton.waitForDisplayed({timeout: config.wait.XL});
        await this.contractOfferButton.waitForAnimation({timeout: config.wait.XL});
        await this.contractOfferButton.waitForEnabled({timeout: config.wait.XL});
        await this.contractOfferButton.click();
    }
}

export default new TravelInsuranceStep1();
