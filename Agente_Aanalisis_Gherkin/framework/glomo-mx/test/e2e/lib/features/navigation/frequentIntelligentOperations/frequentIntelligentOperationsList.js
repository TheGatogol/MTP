import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import frequentIntelligentOperationsList from '../../pages/frequentIntelligentOperations/frequentIntelligentOperationsList';
import dashboard from '../../pages/dashboard/dashboard';
import operationals from '../../pages/operationals/operationals';

const FREQUENT_INTELIGENT_OPERATIONS = frequentIntelligentOperationsList.getId();
const DASHBOARD = dashboard.getId();
const OPERATIONALS = operationals.getId();

class FrequentIntelligentOperationsList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'frequentIntelligentOperations/frequentIntelligentOperationsList', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FREQUENT_INTELIGENT_OPERATIONS:
                await frequentIntelligentOperationsList.selectFrequentOperationItem();
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'frequent intelligent operations', section: 'favorite'});
                break;
            case DASHBOARD:
                await dashboard.buttonNotificationCard.waitForDisplayed({timeout: config.wait.L});
                await dashboard.buttonNotificationCard.click();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FrequentIntelligentOperationsList();
