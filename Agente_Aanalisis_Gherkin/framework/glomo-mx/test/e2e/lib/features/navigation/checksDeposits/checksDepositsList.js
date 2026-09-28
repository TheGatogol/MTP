import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
const checksSection = require('../../pages/checksSection/checksSection').default;
const checksDepositsListSearcher = require('../../pages/checksDeposits/checksDepositsListSearcher').default;

// Page Objects IDs
const CHECKS_SECTION = checksSection.getId();
const CHECKS_DEPOSITS_LIST_SEARCHER = checksDepositsListSearcher.getId();

class ChecksDepositsList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDepositsList', parentNavigation: 'checksSection/checksSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_SECTION:
                await checksSection.goToSection('deposit');
                await checksSection.acceptServiceTerms();
                break;
            case CHECKS_DEPOSITS_LIST_SEARCHER:
                await checksDepositsListSearcher.doFilter();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsList();
