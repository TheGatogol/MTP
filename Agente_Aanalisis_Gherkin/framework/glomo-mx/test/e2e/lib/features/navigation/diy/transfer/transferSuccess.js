import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import transfer from '../../../pages/diy/transfer/transfer';
import reuseOperation from '../../../pages/reuseOperation/reuseOperation';
import frequentIntelligentOperations from '../../../pages/frequentIntelligentOperations/frequentIntelligentOperations';
import dashboard from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const TRANSFER_PAGE = transfer.getId();
const REUSE_OPERATION = reuseOperation.getId();
const FREQUENT_INTELIGENT_OPERATIONS = frequentIntelligentOperations.getId();
const FREQUENT_INTELIGENT_OPERATIONS_LIST = frequentIntelligentOperations.getId();
const DASHBOARD = dashboard.getId();

class TransferSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/transfer/transferSuccess'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case TRANSFER_PAGE:
            case DASHBOARD:
                if(otp){
                    await transfer.confirmToken(otp);
                }else {
                    await transfer.continueProcess();
                }
                break;  
            case REUSE_OPERATION:
                await reuseOperation.continueActionByType(otp);
                break;
            case FREQUENT_INTELIGENT_OPERATIONS:
                if(otp){
                    await frequentIntelligentOperations.continueActionByType(otp);
                }else {
                    await frequentIntelligentOperations.continueProcess();
                }
                break;
            case FREQUENT_INTELIGENT_OPERATIONS_LIST:
                if(otp){
                    await frequentIntelligentOperations.continueActionByType(otp);
                }else {
                    await frequentIntelligentOperations.continueProcess();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TransferSuccess();
