import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import assistanceSectionPage from '../../pages/assistanceSection/assistanceSection';
import investAdvisoryPortfolio from '../../pages/investAdvisory/investAdvisoryPortfolio';
const ASSISTANCE = assistanceSectionPage.getId();
const INVEST_PROFILING = investAdvisoryPortfolio.getId();

class DigitalButler extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'digitalButler/digitalButler', parentNavigation: 'assistanceSection'});
    }

    async go_impl({hasEntryFirstTime, option}) {
        switch (currentPage.getId()) {
            case ASSISTANCE:
                if(hasEntryFirstTime) {
                    await assistanceSectionPage.setLocalStorage('digitalButler-terms-and-conditions', JSON.stringify({persistOpened: false, isBussinessAcepted: true}));
                }
                await assistanceSectionPage.accessScreen('blue BBVA');
                break;
            case INVEST_PROFILING:
                await investAdvisoryPortfolio.blueValidation(option);
                break;     
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DigitalButler();
