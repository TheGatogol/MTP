import {NotPathNavigationError, Commands} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import facialRecognitionFacePicture from '../../pages/facialRecognition/facialRecognitionFacePicture';

// Page Objects IDs
const FACIAL_RECOGNITION_FACE_PICTURE = facialRecognitionFacePicture.getId();

class FacialRecognitionSuccessRegistration extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'facialRecognition/facialRecognitionSuccessRegistration', parentNavigation: 'facialRecognition/facialRecognitionFacePicture'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case FACIAL_RECOGNITION_FACE_PICTURE:
                await Commands.url({uri: '/#!/facial-recognition-success-registration'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new FacialRecognitionSuccessRegistration();

