import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import giveMoney from '../../../pages/youngsters/giveMoney/giveMoney';

const GIVE_MONEY_PAGE = giveMoney.getId();

class GiveMoneyAdvice extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'youngsters/giveMoney/giveMoneyAdvice', parentNavigation: 'youngsters/giveMoney/giveMoney'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case GIVE_MONEY_PAGE:
                await giveMoney.openGiveMoneyAdvice();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GiveMoneyAdvice();
