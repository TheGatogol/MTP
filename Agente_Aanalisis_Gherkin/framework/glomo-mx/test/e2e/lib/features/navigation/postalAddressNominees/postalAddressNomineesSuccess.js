import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError} from '@csqe/radish';

//Page
import postalAddressNominees from '../../pages/postalAddressNominees/postalAddressNominees';

//Page Object ID
const POSTAL_ADDRESS_NOMINEES = postalAddressNominees.getId();

class PostalAddressNomineesSuccessNavigation extends AbstractGlomoNavigation {
    constructor(){
        super({page: 'postalAddressNominees/postalAddressNomineesSuccess', parentNavigation: 'postalAddressNominees/postalAddressNominees'});
    }

    async go_impl() {
        switch (currentPage.getId()){
            case POSTAL_ADDRESS_NOMINEES:
                await currentPage.acceptForm();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new PostalAddressNomineesSuccessNavigation();
