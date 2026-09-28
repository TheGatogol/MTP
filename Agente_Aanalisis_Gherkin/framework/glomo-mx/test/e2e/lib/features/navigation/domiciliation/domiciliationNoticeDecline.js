import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import domiciliationNoticeDetail from '../../pages/domiciliation/domiciliationNoticeDetail.js';

const DOMICILIATION_NOTICE_DETAIL = domiciliationNoticeDetail.getId();

class DomiciliationNoticeDecline extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'domiciliation/domiciliationNoticeDecline', parentNavigation: 'domiciliation/domiciliationNoticeDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DOMICILIATION_NOTICE_DETAIL:
                await domiciliationNoticeDetail.rejectedDirectDebit();
                await domiciliationNoticeDetail.waitUntilSpinnerVeil();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new DomiciliationNoticeDecline();
