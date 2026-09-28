import {Commands} from '@csqe/radish';
import AbstractGlomoComponent from './abstract-glomo-component';

export default class TransitionContainerListSmartServicing extends AbstractGlomoComponent {
    constructor(args = {}) {
        const defaultArgs = {
            name: '.__modals-container',
            elements: {
                headerTransaction: '.modal-header .header-slot [data-tag-name="bbva-header-main"]',
                backButtonList: '.modal-header .header-slot [data-tag-name="bbva-header-main"] #btn-back',
                firstItemListTitle: 'app-info-structure-smart-servicing-gl-list #titleOperative-13565',
                firstItemListDiscardBtn: 'app-info-structure-smart-servicing-gl-list [data-tag-name="bbva-list-swipe"][id="13565"] bbva-button-action',
            },
            requiredElements: [
                'headerTransaction',
            ],
        };

        super(Object.assign(defaultArgs, args));
    }

    static get _baseRoot() {
        return {
            web: '#smartServicingListView',
            isWithoutRoot: true,
        };
    }

    async selectOperation() {
        await this.headerTransaction.waitForDisplayed({timeout: config.wait.M});
        await this.firstItemListTitle.waitForDisplayed({timeout: config.wait.M});
        await this.firstItemListTitle.click();
    }
    
    async discardItem() {
        await this.firstItemListTitle.waitForDisplayed({timeout: config.wait.M});
        await this.swipeElement(this.firstItemListTitle, 'left');
        await this.firstItemListDiscardBtn.waitForDisplayed({timeout: config.wait.M});
        await this.firstItemListDiscardBtn.click();
    }

    async exitList() {
        await this.backButtonList.waitForDisplayed({timeout: config.wait.M});
        await this.backButtonList.click();
    }

    /**
    * Performs a swipe gesture on a given element in the specified direction.
    *
    * @param element - The custom element to swipe on.
    * @param {'up' | 'down' | 'left' | 'right'} direction - Direction of the swipe.
    */
    async swipeElement(element, direction) {
        await element.scrollIntoView();
        await element.waitForDisplayed({ timeout: config.wait.M });

        const location = await element.getLocation();
        const size = await element.getSize();

        const centerX = Math.floor(location.x + size.width / 2);
        const centerY = Math.floor(location.y + size.height / 2);

        let startX = centerX;
        let startY = centerY;
        let endX = centerX;
        let endY = centerY;

        switch (direction) {
            case 'up':
                startY = location.y + size.height - 10;
                endY = location.y + 10;
                break;
            case 'down':
                startY = location.y + 10;
                endY = location.y + size.height - 10;
                break;
            case 'left':
                startX = location.x + size.width - 10;
                endX = location.x + 10;
                break;
            case 'right':
                startX = location.x + 10;
                endX = location.x + size.width - 10;
                break;
            default:
                throw new Error(`Invalid swipe direction:: ${direction}`);
        }

        await Commands.performActions({
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                {type: 'pointerMove', duration: 0, x: parseInt(startX), y: startY},
                {type: 'pointerDown', button: 0},
                {type: 'pause', duration: 100},
                {type: 'pointerMove', duration: 500, x: parseInt(endX), y: endY},
                {type: 'pointerUp', button: 0}
            ]
        });
        await Commands.releaseActions();
    }

}
