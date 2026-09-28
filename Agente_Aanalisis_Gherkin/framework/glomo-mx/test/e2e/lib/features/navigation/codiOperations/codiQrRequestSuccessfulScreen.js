import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiQrRequestSteps from '../../pages/codiOperations/codiQrRequestSteps';

const CODI_QR_REQUEST_STEPS = codiQrRequestSteps.getId();

class CodiQrRequestSuccessfulScreen extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiQrRequestSuccessfulScreen', parentNavigation: 'codiOperations/codiQrRequestSteps'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_QR_REQUEST_STEPS:
                await codiQrRequestSteps.createQr();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiQrRequestSuccessfulScreen();
