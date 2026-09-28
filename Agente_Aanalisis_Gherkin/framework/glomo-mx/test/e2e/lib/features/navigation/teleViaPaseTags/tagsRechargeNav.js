import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import tagsPage from '../../pages/teleViaPaseTags/tagsPage';
import tagsRegisterSuccess from '../../pages/teleViaPaseTags/tagsRegisterSuccess';

const TAGSPAGE = tagsPage.getId();
const TAG_REG_SUCCESS = tagsRegisterSuccess.getId();

class TagsRechargeNav extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'teleViaPaseTags/tagsRechargePage', parentNavigation: 'teleViaPaseTags/tagsNavigation' });
    }

    async go_impl({ number, flag } = {}) {
        switch (currentPage.getId()) {
            case TAGSPAGE:
                await currentPage.goRecharge(number, flag);
                break;
            case TAG_REG_SUCCESS:
                await currentPage.rechargeTag();
                break;
            default:
                throw new NotPathNavigationError();
        }

    }

}

export default new TagsRechargeNav();
