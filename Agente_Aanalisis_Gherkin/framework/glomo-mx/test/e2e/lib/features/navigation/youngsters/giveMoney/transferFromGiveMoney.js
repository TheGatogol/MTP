import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import giveMoney from '../../../pages/youngsters/giveMoney/giveMoney';

const GIVE_MONEY_PAGE = giveMoney.getId();

class TransferFromGiveMoney extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/transfer/transfer', parentNavigation: 'youngsters/giveMoney/giveMoney'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case GIVE_MONEY_PAGE:
                await giveMoney.goToTransferFromGiveMoney();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TransferFromGiveMoney();
