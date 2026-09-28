import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import frequentIntelligentOperationsList from '../../pages/frequentIntelligentOperations/frequentIntelligentOperationsList';
import dashboard from '../../pages/dashboard/dashboard';

const FREQUENT_INTELIGENT_OPERATIONS_LIST = frequentIntelligentOperationsList.getId();
const DASHBOARD = dashboard.getId();

class FrequentIntelligentOperations extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'frequentIntelligentOperations/frequentIntelligentOperations', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FREQUENT_INTELIGENT_OPERATIONS_LIST:
                await frequentIntelligentOperationsList.selectFrequentOperationItem();
                break;
            case DASHBOARD:
                await dashboard.openNotificationCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FrequentIntelligentOperations();
