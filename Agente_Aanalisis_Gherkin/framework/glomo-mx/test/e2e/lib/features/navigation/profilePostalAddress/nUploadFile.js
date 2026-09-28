import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import profilePostalAddressPage from '../../pages/profile/pProfilePostalAddress';
import optionsPhotoPage from '../../pages/profile/pOptionsPhoto';

const POSTAL_ADDRESS = profilePostalAddressPage.getId();
const OPTIONS_PHOTO = optionsPhotoPage.getId();
class UploadFile extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/pUploadFile', parentNavigation: 'profilePostalAddress/nProfilePostalAddress'});
    }

    async go_impl({pdf} = {}) {
        switch (currentPage.getId()) {
            case POSTAL_ADDRESS:
                await profilePostalAddressPage.access( {functionality: pdf ? 'attach pdf' : 'choose or take photo'} ); 
                break;
            case OPTIONS_PHOTO:
                await optionsPhotoPage.selectOption({ option: 'choose photo' });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new UploadFile();
