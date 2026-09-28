import CellsOcBanner from './cells-oc-banner.js';

export default class CellsOcBannerSpherica extends CellsOcBanner {
    constructor(args) {
        const defaultArgs = {
            name: 'cells-oc-banner-spherica',
            elements: {
                //Banner
                banner: '.banner',
                image: '.banner div.banner__hero .banner__image',
                title: '.banner .banner__title',
                header: '.banner .banner__header',
                text: '.banner .banner__main .banner__text',
                date: '.banner div.banner__main p.banner__date',
                description: '.banner .banner__main .banner__description',
                amount: '.banner .banner__main .banner__amount',
                link: '.banner .banner__main cells-st-button-spherica .banner__link',
                closeBtn: '.banner cells-st-button-spherica.banner__exit',
                offer: '.banner .banner__main cells-st-button-spherica[data-selector="__OFFER__"] .banner__link',
            }
        };
        super(Object.assign(defaultArgs, args));
    }
    static get _baseRoot() {
        return 'cells-oc-banner-spherica';
    }
}
