import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Page
import fiscalData from '../../pages/fiscalData/fiscalData';

//Page object ID
const FISCAL_DATA = fiscalData.getId();

class FiscalDataSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'fiscalData/fiscalDataSuccess', parentNavigation: 'fiscalData'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case FISCAL_DATA:
                await fiscalData.confirmChanges();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FiscalDataSuccess();
