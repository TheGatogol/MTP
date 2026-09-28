import {NotPathNavigationError, Commands} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import facialRecognitionStartRegistry from '../../pages/facialRecognition/facialRecognitionStartRegistry';

// Page Objects IDs
const FACIAL_RECOGNITION_START_REGISTRY = facialRecognitionStartRegistry.getId();

class FacialRecognitionFacePicture extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/facialRecognitionFacePicture', parentNavigation: 'facialRecognition/facialRecognitionStartRegistry'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case FACIAL_RECOGNITION_START_REGISTRY:
                await Commands.url({uri: '/#!/facial-recognition-face-picture'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FacialRecognitionFacePicture();

