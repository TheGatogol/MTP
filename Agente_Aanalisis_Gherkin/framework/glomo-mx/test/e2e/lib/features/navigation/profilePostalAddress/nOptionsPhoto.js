import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import uploadFile from '../../pages/profile/pUploadFile';

const UPLOAD_FILE = uploadFile.getId();

class OptionsPhoto extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/pOptionsPhoto', parentNavigation: 'profilePostalAddress/nUploadFile'});
    }

    async go_impl({reverse} = {}) {
        switch (currentPage.getId()) {
            case UPLOAD_FILE:
                await uploadFile.access({functionality : reverse ? 'options photo reverse' : 'options photo'} );      
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OptionsPhoto();
