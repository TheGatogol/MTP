import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import facialRecognition from '../../pages/facialRecognition/facialRecognition';

// Page Objects IDs
const FACIAL_RECOGNITION = facialRecognition.getId();

class FacialRecognitionMoreInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/facialRecognitionMoreInfo', parentNavigation: 'facialRecognition/facialRecognition'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case FACIAL_RECOGNITION:
                await facialRecognition.selectMoreInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FacialRecognitionMoreInfo();
