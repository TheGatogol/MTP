import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import sendMoney from '../../pages/codicel/sendmoney';

//Page Objects IDs
const SEND_MONEY = sendMoney.getId();

class SendMoneyCodicelSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codicel/sendMoneySuccess', parentNavigation: 'codicel/sendmoney'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SEND_MONEY:
                await sendMoney.acceptSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SendMoneyCodicelSuccess();
