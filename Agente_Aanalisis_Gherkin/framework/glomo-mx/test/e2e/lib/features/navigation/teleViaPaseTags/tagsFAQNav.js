import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import tagsPage from '../../pages/teleViaPaseTags/tagsPage';

const TAGSPAGE = tagsPage.getId();

class TagsFAQNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagsFAQPage', parentNavigation: 'teleViaPaseTags/tagsNavigation'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TAGSPAGE:
                await currentPage.goInfoTags();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TagsFAQNav();
