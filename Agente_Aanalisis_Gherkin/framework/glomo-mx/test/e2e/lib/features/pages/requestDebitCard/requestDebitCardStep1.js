import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('RequestDebitCardStep1')
class RequestDebitCardStep1 extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'debit card request detail',
            root: '#cells-template-requestDebitCard[state="active"]',
            elements: {
                header: '#multistep-header',
                image: '#banner-image',
                bannerTitle: '#banner-title',
                benefitHeader: '#benefits-header',
                benefit1: '#benefits-bullet-0',
                benefit2: '#benefits-bullet-1',
                feature1: '#features-bullet-0',
                feature2: '#features-bullet-1',
                considerationsHeader: '#considerations-header',
                consideration1: '#considerations-bullet-0',
                consideration2: '#considerations-bullet-1',
                message: '#message-step-0',
                iwantItBtn: '#btn-step-0',
            },
            requiredElements: [
                'image',
                'iwantItBtn'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.bannerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'benefits':
                await this.benefitHeader.waitForDisplayed({timeout: config.wait.M});
                await this.benefit1.waitForDisplayed({timeout: config.wait.M});
                await this.benefit2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'features':
                await this.feature1.waitForDisplayed({timeout: config.wait.M});
                await this.feature2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'considerations':
                await this.considerationsHeader.waitForDisplayed({timeout: config.wait.M});
                await this.consideration1.waitForDisplayed({timeout: config.wait.M});
                await this.consideration2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.iwantItBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async iwantButtonPress() {
        await this.iwantItBtn.waitForDisplayed({timeout: config.wait.M});
        await this.iwantItBtn.waitForClickable({timeout: config.wait.M});
        await this.iwantItBtn.click();
    }

}

export default new RequestDebitCardStep1();
