import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import facialRecognition from '../../pages/facialRecognition/facialRecognition';

// Page Objects IDs
const FACIAL_RECOGNITION = facialRecognition.getId();

class FacialRecognitionStartRegistry extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/facialRecognitionStartRegistry', parentNavigation: 'facialRecognition/facialRecognition'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case FACIAL_RECOGNITION:
                await facialRecognition.startRegistration();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FacialRecognitionStartRegistry();

