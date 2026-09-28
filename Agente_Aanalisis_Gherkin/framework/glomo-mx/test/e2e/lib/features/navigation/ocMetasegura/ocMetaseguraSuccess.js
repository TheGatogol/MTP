import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocMetaSegura from '../../pages/ocMetasegura/ocMetasegura';

// Page Objects IDs
const OC_META_SEGURA = ocMetaSegura.getId();

class OcMetaSeguraSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocMetasegura/ocMetaseguraSuccess', parentNavigation: 'ocMetasegura/ocMetasegura'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case OC_META_SEGURA:
                await currentPage.goToStep({step: 'summary'});
                await currentPage.finishContracting();
                await currentPage.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcMetaSeguraSuccess();
