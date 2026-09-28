import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import proceedings from '../../pages/proceedings/proceedings';

const PROCEEDINGS = proceedings.getId();

class VideoSelfie extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'videoSelfie/videoSelfie', parentNavigation: 'proceedings/proceedings'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case PROCEEDINGS:
                await proceedings.identityValidation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new VideoSelfie();
