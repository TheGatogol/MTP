import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import profilePage from '../../pages/profile/profile';
import uploadFilePage from '../../pages/profile/pUploadFile';
import optionsPhotoPage from '../../pages/profile/pOptionsPhoto';
import payrollPortabilityN2Page from '../../pages/payrollPortabilityN2/payrollPortabilityN2';

//Navigation
import * as navigation from '../../navigation';

// Page Objects IDs
const PROFILE = profilePage.getId();
const UPLOAD_FILE = uploadFilePage.getId();
const OPTIONS_PHOTO = optionsPhotoPage.getId();
const PAYROLL_PORTABILITY_N2 = payrollPortabilityN2Page.getId();

class ProfilePostalAddress extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/pProfilePostalAddress', parentNavigation: 'profile'});
    }

    async go_impl({add} = {}) {
        switch (currentPage.getId()) {
            case PROFILE:
                await profilePage.access({functionality: add ? 'Edit Address' : 'Add address'});
                break;
            // Go Back
            case UPLOAD_FILE:
                if(add){
                    await uploadFilePage.goBack();
                    break;
                } else {
                    await uploadFilePage.access({functionality: 'summary page'});
                    break;
                }
                //Go resume (previus to Last Page)
            case OPTIONS_PHOTO:
                await navigation.profilePostalAddress.uploadFile.go();
                await this.go_impl({ add: false });
                break;
            case PAYROLL_PORTABILITY_N2:
                await payrollPortabilityN2Page.selectContinueButton();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ProfilePostalAddress();
