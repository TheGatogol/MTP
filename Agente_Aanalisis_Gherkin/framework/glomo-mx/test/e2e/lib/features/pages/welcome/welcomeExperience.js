import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class WelcomeExperience extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-welcomeExperience[state="active"]',
            elements: {
                animation: 'cells-full-screen-slider #slider div:nth-child(2) div',
                userName: 'cells-full-screen-slider #slider div:nth-child(2) div h1',
                bullets: 'cells-full-screen-slider cells-pagination-bullets.pager button',
                acceptButton: 'cells-full-screen-slider div.bottom cells-st-button button',
                sliderTitle: 'cells-full-screen-slider #slider div:nth-child(2) div h2'
            },
            requiredElements: [
                'userName'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'animation':
                await this.animation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name':
                await this.userName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'welcome experience carousel':
                await this.bullets.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessDashboard() {
        await this.acceptButton.waitForClickable({timeout: config.wait.L});
        await this.acceptButton.click();
    }

    async nextSlider() {
        await this.bullets.waitForDisplayed({timeout: config.wait.L});
        const secondBullet = (await this.bullets.elements()).value[1];
        await secondBullet.click();
    }

    async isNextSlider() {
        const sliderTitles = await this.sliderTitle.getText();
        const secondSliderTitle = sliderTitles[1];
        expect(/ú/ig.test(secondSliderTitle)).to.be.true;
    }

}

export default new WelcomeExperience();
