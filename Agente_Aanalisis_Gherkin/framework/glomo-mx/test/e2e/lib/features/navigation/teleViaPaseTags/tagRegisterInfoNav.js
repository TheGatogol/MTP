import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import tagsRegisterPage from '../../pages/teleViaPaseTags/tagsRegisterPage';

const TAGREG = tagsRegisterPage.getId();

class TagRegisterInfoNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagRegisterInfoPage', parentNavigation: 'teleViaPaseTags/tagsRegisterNav'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TAGREG:
                await currentPage.goToTagInfo();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }
}

export default new TagRegisterInfoNav();
