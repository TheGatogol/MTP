import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import accountProductDetailPage from '../../pages/productDetails/accountProductDetail';
import accountTransactionsPage from '../../pages/productDetails/accountTransactions';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';

// Page Objects IDs
const ACCOUNTS_PRODUCT_DETAIL = accountProductDetailPage.getId();
const ACCOUNTS_TRANSACTIONS = accountTransactionsPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetail.getId();

class AccountTransactionDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/accountTransactionDetail'});
    }
    async go_impl({selectedNum = 0, movement, movementSelector, standIn = false, origin}={}) {
        switch (currentPage.getId()) {
            case ACCOUNTS_PRODUCT_DETAIL:
                if (origin === 'detail product' && selectedNum) {
                    await accountProductDetailPage.seeMovementDetail({selectedNum});
                } else if (origin === 'detail product' && !selectedNum) {
                    await accountProductDetailPage.seeLastMovementDetail();
                } else if (origin === 'transaction' && selectedNum) {
                    await accountProductDetailPage.seeMovementDetailFromAllTransactions({selectedNum});
                } else if (origin === 'transaction' && !selectedNum) {
                    await accountProductDetailPage.seeMovementDetailFromAllTransactions();
                }
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                if (origin === 'detail product' && selectedNum) {
                    await orangeCardProductDetail.seeMovementDetail({selectedNum});
                } else if (origin === 'detail product' && !selectedNum) {
                    await orangeCardProductDetail.seeLastMovementDetail();
                } else if (origin === 'transaction' && selectedNum) {
                    await orangeCardProductDetail.seeMovementDetailFromAllTransactions({selectedNum});
                } else if (origin === 'transaction' && !selectedNum) {
                    await orangeCardProductDetail.seeMovementDetailFromAllTransactions();
                }
                break;
            case ACCOUNTS_TRANSACTIONS:
                if (standIn === true) {
                    await accountTransactionsPage.seeMovementDetailLast();
                } else if(movement) {
                    await accountTransactionsPage.seeOneMovement({item: movement, movementSelector});
                } else {
                    await accountTransactionsPage.seeMovementDetail();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new AccountTransactionDetail();
