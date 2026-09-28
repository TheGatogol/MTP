import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import tagsPage from '../../pages/teleViaPaseTags/tagsPage';
import topUpPage from '../../pages/teleViaPaseTags/topUpPage';
import tagRegisterInfoPage from '../../pages/teleViaPaseTags/tagRegisterInfoPage';

const TAGSP = tagsPage.getId();
const TOPUP = topUpPage.getId();
const TAGREGINFO = tagRegisterInfoPage.getId();

class TagsRegisterNav extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagsRegisterPage', parentNavigation: 'teleViaPaseTags/topUpNav'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TAGSP:
                await currentPage.goToRegister();
                break;
            case TOPUP:
                await currentPage.goToTags();
                break;
            case TAGREGINFO:
                await currentPage.backToRegTag();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TagsRegisterNav();
