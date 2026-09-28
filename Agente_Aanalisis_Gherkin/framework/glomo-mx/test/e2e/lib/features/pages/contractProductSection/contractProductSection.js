import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsNavigationBar from '../../components/cells-navigation-bar';
import CellsNavigationBarSpherica from '../../components/cells-navigation-bar-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

const FOOTER_TABS = {
    HOME: 'home',
    CHECK_UP: 'pfmCheckup',
    ADD: 'add',
    MAIL: 'mail',
    CONTACT: 'contact',
};

@page()
class ContractProductSection extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ContractProductSection',
            root: '#cells-template-contractProductSection[state="active"]',
            elements: {
                bannerIcon: '.banner__hero:has(~ div > [data-selector="__PRODUCT_ID__"])',
                bannerStatus: 'h1:has(~ [data-selector="__PRODUCT_ID__"])',
                bannerText: '.banner__text:has(~ [data-selector="__PRODUCT_ID__"])',
                bannerBtn: 'cells-st-button[data-selector="__PRODUCT_ID__"]',
                tooltipContent: 'cells-molecule-header #tooltipContent',
                header: CellsMoleculeHeader,
                mainBanner: 'cells-oc-banner-list .oc-banner-list cells-oc-banner.banner--special',
                mainBannerButton: 'cells-oc-banner-list .oc-banner-list cells-oc-banner.banner--special .banner cells-st-button',
                smallBanner: 'cells-oc-banner-list .oc-banner-list cells-oc-banner.banner--image-center',
                mainBannerProduct: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special.banner--image-center.banner--status #banner[data-product-id="__PRODUCT_ID__"]',
                smallBannerLink: 'cells-oc-banner-list .oc-banner-list cells-oc-banner.banner--image-center .banner cells-st-button',
                smallBannerProduct: 'cells-oc-banner-list .oc-banner-list cells-oc-banner.banner--image-center #banner[data-product-id="__PRODUCT_ID__"]',
                offerProduct: 'cells-oc-banner-list .oc-banner-list cells-oc-banner #banner[data-product-id="__PRODUCT_ID__"] cells-st-button',
                productItem: 'cells-oc-banner-list cells-st-button[data-selector="__PRODUCT_ID__"]',
                imageCar: '#banner cells-oc-banner #banner section div.banner__hero img',
                productBanner: 'cells-oc-banner-list .oc-banner-list li[id="__OFFER_ID__"] cells-oc-banner cells-st-button',
                couponErrorModal: GlomoAlertManager,
                footer: [
                    CellsNavigationBar,
                    {
                        itemList:{
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 'checkupOrPfmDashboard',
                            [FOOTER_TABS.ADD]: 'contractProductSection',
                            [FOOTER_TABS.MAIL]: 4,
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],
            },
            elementsSpherica: {
                bannerIcon: '.banner__hero:has(~ div > [data-selector="__PRODUCT_ID__"])',
                bannerStatus: 'h1:has(~ [data-selector="__PRODUCT_ID__"])',
                bannerText: '.banner__text:has(~ [data-selector="__PRODUCT_ID__"])',
                bannerDescription: '.banner__description:has(~ [data-selector="__PRODUCT_ID__"])',
                bannerBtn: 'cells-st-button-spherica[data-selector="__PRODUCT_ID__"]',
                tooltipContent: 'cells-molecule-header-spherica #tooltipContent',
                header: CellsMoleculeHeaderSpherica,
                mainBanner: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special',
                mainBannerTitle: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special banner[data-product-id="__PRODUCT_ID__"] .banner__description',
                mainBannerDescription: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special banner[data-product-id="__PRODUCT_ID__"] .banner__text',
                mainBannerButton: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special .banner cells-st-button-spherica',
                smallBanner: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--special.banner--image-center.banner--status',
                smallBannerLink: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--image-center .banner cells-st-button-spherica',
                smallBannerProduct: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--image-center #banner[data-product-id="__PRODUCT_ID__"]',
                smallBannerProductTitle: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--image-center #banner[data-product-id="__PRODUCT_ID__"] .banner__text',
                smallBannerProductDescription: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica.banner--image-center #banner[data-product-id="__PRODUCT_ID__"] .banner__description',
                offerProduct: 'cells-oc-banner-list-spherica .oc-banner-list cells-oc-banner-spherica #banner[data-product-id="__PRODUCT_ID__"] cells-st-button-spherica',
                productItem: 'cells-oc-banner-list-spherica cells-st-button-spherica[data-selector="__PRODUCT_ID__"]',
                imageCar: '#banner cells-oc-banner-spherica #banner section div.banner__hero img',
                productBanner: 'cells-oc-banner-list-spherica .oc-banner-list li[id="__OFFER_ID__"] cells-oc-banner-spherica cells-st-button-spherica',
                couponErrorModal: GlomoAlertManagerSpherica,
                footer: [
                    CellsNavigationBarSpherica,
                    {
                        itemList:{
                            [FOOTER_TABS.HOME]: 'dashboard',
                            [FOOTER_TABS.CHECK_UP]: 'checkupOrPfmDashboard',
                            [FOOTER_TABS.ADD]: 'contractProductSection',
                            [FOOTER_TABS.MAIL]: 4,
                            [FOOTER_TABS.CONTACT]: 5,
                        },
                    }
                ],
            },
            requiredElements: [
                'header'
            ]
        });
        this.FOOTER_TABS = FOOTER_TABS;
    }

    async _screenValidation({item, offer, text, value, visibility}) {
        const wordKeys= {
            'request rejected': 'solicitud rechazada',
            'request canceled': 'solicitud cancelada'
        };
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'main banner':
                await this.mainBanner.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'main banner button':
                await this.mainBannerButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'small banner':
                await this.smallBanner.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'small banner link':
                await this.smallBannerLink.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'main offer':
                await this.detectMainOfferById(value);
                break;
            case 'static offers':
                await this.staticOffersBanners();
                break;
            case 'npa main offer':
                await this.detectMainOfferById(value);
                break;
            case 'npa offer':
                await this.detectOfferById(value);
                break;
            case 'summary':
                await this.summary.verifySummary();
                break;
            case 'icon home':
                await this.footer.isTabPresent({tab: FOOTER_TABS.HOME});
                break;
            case 'icon heart':
                await this.footer.isTabPresent({tab: FOOTER_TABS.CHECK_UP});
                break;
            case 'icon add':
                await this.footer.isTabPresent({tab: FOOTER_TABS.ADD});
                break;
            case 'icon mail':
                await this.footer.isTabPresent({tab: FOOTER_TABS.MAIL});
                break;
            case 'icon contact':
                await this.footer.isTabPresent({tab: FOOTER_TABS.CONTACT});
                break;
            case 'banner icon':
                await this.bannerIcon.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'banner status':
                if(text){
                    await this.bannerStatus.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                        .waitForText({text: wordKeys[value], exactMatch: false});
                } else {
                    await this.bannerStatus.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                        .waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'banner text':
                await this.bannerText.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banner description':
                await this.bannerDescription.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'banner button':
                await this.bannerBtn.specifySelector({placeholder: '__PRODUCT_ID__', value: offer})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer':
                await this.detectOfferByDataSelector(value, visibility);
                break;
            case 'goals offer':
                await this.detectOfferById('ME');
                break;
            case 'image car':
                await this.imageCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'preapproved priority':
                await this.detectMainOfferById('AUTO');
                break;
            case 'preapproved non priority':
                await this.mainBannerProduct.specifySelector({placeholder: '__PRODUCT_ID__', value: '0793'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding bbva trader main offer title':
                await this.mainBannerTitle.specifySelector({placeholder: '__PRODUCT_ID__', value: '0839'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'onboarding bbva trader main offer description':
                await this.mainBannerDescription.specifySelector({placeholder: '__PRODUCT_ID__', value: '0839'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectOfferByType(offerId) {
        switch (offerId) {
            case 'limit increase':
                await this.selectProduct('limit-increase');
                break;
            case 'consumer loan':
                await this.selectProduct('consumer-loan');
                break;
            case 'comision revire':
                await this.selectProduct('consumer-loan');
                break;
            case 'oc secure loan lead':
                await this.selectProduct('oc-secure-loan-lead');
                break;
            case 'oc mortgage':
                await this.selectProduct('oc-mortgage-non-preapproved');
                break;
            default:
                throw new Error(`The offer is not correct, received: ${offerId}`);
        }
    }

    async staticOffersBanners() {
        await this.detectOfferById('0PGR');
        await this.detectOfferById('0FIN');
    }

    async detectOfferById(productId) {
        const offer = this.smallBannerProduct.specifySelector({placeholder: '__PRODUCT_ID__', value: productId});
        await offer.waitForDisplayed({timeout: config.wait.L});
    }

    async detectMainOfferById(productId) {
        const offer = this.mainBannerProduct.specifySelector({placeholder: '__PRODUCT_ID__', value: productId});
        await offer.waitForDisplayed({timeout: config.wait.L});
    }

    async selectProduct(productId) {
        const product = this.productItem.specifySelector({placeholder: '__PRODUCT_ID__', value: productId});
        await product.scrollIntoView({block: 'end'});
        await product.waitForDisplayed({timeout: config.wait.L});
        await product.waitForAnimation({timeout: config.wait.L});
        await product.click({useActions: false, scrollOptions: {block: 'center'}});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async selectOfferProduct(productId) {
        const product = this.offerProduct.specifySelector({placeholder: '__PRODUCT_ID__', value: productId});
        await product.scrollIntoView({block: 'end'});
        await product.waitForDisplayed({timeout: config.wait.L});
        await product.waitForAnimation({timeout: config.wait.L});
        await product.click({useActions: false, scrollOptions: {block: 'center'}});
    }

    async selectProductOfferId(offerId) {
        const idBanner =  `banner${offerId}`;
        const productId = this.productBanner.specifySelector({placeholder: '__OFFER_ID__', value: idBanner});
        await productId.waitForDisplayed({timeout: config.wait.M});
        await productId.scrollIntoView({block: 'center'});
        await productId.click({useActions: true});
    }

    async auxEntry(productId){
        await (await this.bannerBtn.specifySelector({placeholder: '__PRODUCT_ID__', value: productId})
            .waitForDisplayed({timeout: config.wait.L})).click();
    }
    async detectOfferByDataSelector(productId, visibility) {
        const offer = this.productItem.specifySelector({placeholder: '__PRODUCT_ID__', value: productId});
        await offer.waitForDisplayed({timeout: config.wait.L, reverse: visibility === 'not visible'});
    }

    async modalError() {
        await this.couponErrorModal.waitForDisplayed({timeout: config.wait.L});
        await this.couponErrorModal.confirmDialog({isConfirmed: false});
    }

    async selectMainBanner() {
        await this.mainBannerButton.waitForDisplayed({timeout: config.wait.M});
        await this.mainBannerButton.click();
    }
}

export default new ContractProductSection();
