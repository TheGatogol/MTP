import { NotPathNavigationError } from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import otherOperativesPage from '../../pages/operatives/accountsOtherOperativesPage';
import selectOperationPage from '../../pages/operationals/operationals';
import transferPage from '../../pages/diy/transfer/transfer';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const OTHER_OPERATIVES_PAGE_ID = otherOperativesPage.getId();
const SELECT_OPERATION_PAGE_ID = selectOperationPage.getId();
const TRANSFER_PAGE_ID = transferPage.getId();
const ACCOUNT_DETAIL_PAGE_ID = accountProductDetail.getId();
class InternationalTransfersPanel extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'internationalTransfer/internationalTransfersPanel' });
    }

    async go_impl({ useBoost = false } = {}) {
        switch (currentPage.getId()) {
            case TRANSFER_PAGE_ID:
                await transferPage.accessBoostInterbankTransfersMessageOpTransfers();
                break;
            case ACCOUNT_DETAIL_PAGE_ID:
                if (useBoost) {
                    await accountProductDetail.accessBoostInterbankTransfersMessageAccountDetail();
                } else {
                    await accountProductDetail.accessInternationalTransfers();
                }
                break;
            case OTHER_OPERATIVES_PAGE_ID:
                await otherOperativesPage.doInternationalTransfer();
                break;
            case SELECT_OPERATION_PAGE_ID:
                await selectOperationPage.accessToOperative({ operative: 'internationalTransfer' });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfersPanel();
