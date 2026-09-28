import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import tagsRegister from '../../pages/teleViaPaseTags/tagsRegisterPage';

const TAGS_REG = tagsRegister.getId();

class TagsRegisterSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'teleViaPaseTags/tagsRegisterSuccess', parentNavigation: 'teleViaPaseTags/tagsRegisterNav'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TAGS_REG:
                await currentPage.finishTagRegistration();
                await currentPage.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TagsRegisterSuccess();
