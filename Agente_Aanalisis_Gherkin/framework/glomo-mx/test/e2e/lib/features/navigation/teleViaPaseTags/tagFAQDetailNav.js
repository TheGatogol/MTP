import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import tagsFAQPage from '../../pages/teleViaPaseTags/tagsFAQPage';

const TAGSFAQPAGE = tagsFAQPage.getId();

class TagFAQDetailNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagFAQDetailPage', parentNavigation: 'teleViaPaseTags/tagsFAQNav'});
    }

    async go_impl({question, section} = {}) {
        switch (currentPage.getId()) {
            case TAGSFAQPAGE:
                await currentPage.getFAQ(question, section);
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TagFAQDetailNav();
