import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class TagsPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-tagCardList[state="active"]',
            elements: {
                title: 'h1',
                infoBtn: '#btnRight',
                backBtn: '#btnLeft',
                addTagBtn: 'cells-icon-button-spherica .wrapper',
                cardlist: {
                    properties: {root: 'cells-avatar-list-groups-spherica'},
                    cardOne: {
                        infoCard: 'cells-avatar-item-spherica:nth-of-type(1)',
                        rechargeBtn: '.button-list:nth-of-type(1) #primary',
                        deleteBtn: '.button-list:nth-of-type(1) #secondary'
                    },
                    cardTwo: {
                        infoCard: 'cells-avatar-item-spherica:nth-of-type(2)',
                        rechargeBtn: '.button-list:nth-of-type(2) #primary',
                        deleteBtn: '.button-list:nth-of-type(2) #secondary',
                    },
                    cards: {
                        cards: 'cells-avatar-item-spherica',
                        infoCard: 'cells-avatar-item-spherica:nth-of-type(__INDEX__) .cells-avatar-item-list__secondary',
                        balanceCard: 'cells-avatar-item-spherica:nth-of-type(__INDEX__) .integer',
                        rechargeBtn: 'cells-avatar-item-spherica:nth-of-type(__INDEX__) .button-list #primary',
                        deleteBtn: 'cells-avatar-item-spherica:nth-of-type(__INDEX__) .button-list #secondary',
                    }
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            txt: '.paragraph-template',
                            okBtn: '#acceptButton',
                            btnClose: '#cancelButton',
                        }
                    }
                ],
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async goToRegister() {
        await (await this.addTagBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async getTagInfo(val) {
        let i = 1;
        const cs = (await (await this.cardlist.cards.cards.waitForDisplayed({timeout: config.wait.XL})).elements()).length;
        for (i; i <= cs; i++) {
            const a = await this.cardlist.cards.balanceCard.specifySelector({placeholder: '__INDEX__', value: i}).getText();
            if (a === val || i === cs) {
                break;
            }
        }
        return i;
    }

    async selectTagInfo(ind) {
        await (await this.cardlist.cards.rechargeBtn.specifySelector({
            placeholder: '__INDEX__',
            value: ind
        }).waitForClickable({timeout: config.wait.L})).click();
    }

    async goRecharge(number, flag) {
        flag ?
            await (await this.cardlist.cardOne.rechargeBtn.waitForClickable({timeout: config.wait.L})).click() :
            await this.selectTagInfo(await this.getTagInfo(number));
    }

    async goInfoTags() {
        await (await this.infoBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'tag list':
                await this.title.waitForDisplayed({timeout: config.wait.L});
                await this.addTagBtn.waitForDisplayed({timeout: config.wait.L});
                await this.cardlist.cardOne.infoCard.waitForDisplayed({timeout: config.wait.L});
                await this.cardlist.cardTwo.infoCard.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new TagsPage();
