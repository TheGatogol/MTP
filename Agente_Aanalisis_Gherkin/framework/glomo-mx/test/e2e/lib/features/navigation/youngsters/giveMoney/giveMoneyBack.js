import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import giveMoneyAdvice from '../../../pages/youngsters/giveMoney/giveMoneyAdvice';

const GIVE_MONEY_ADVICE_PAGE = giveMoneyAdvice.getId();

class GiveMoneyBack extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'youngsters/giveMoney/giveMoney', parentNavigation: 'youngsters/giveMoney/giveMoneyAdvice'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case GIVE_MONEY_ADVICE_PAGE:
                await giveMoneyAdvice.closeGiveMoneyAdvice();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GiveMoneyBack();
