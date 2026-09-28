import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import topUpPage from '../../pages/teleViaPaseTags/topUpPage';

const TOPUP = topUpPage.getId();

class TagsNavigation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagsPage', parentNavigation: 'teleViaPaseTags/topUpNav'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TOPUP:
                await currentPage.goToTags();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TagsNavigation();
