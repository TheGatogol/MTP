import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import rewardsLanding from '../../pages/reward/rewardsLanding';

// Page Objects IDs
const REWARDS_LANDING = rewardsLanding.getId();

class StoresMap extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'storesMap/storesMap', parentNavigation: 'reward/rewardsLanding'});
    }
    async go_impl({permissions = true} = {}) {
        switch (currentPage.getId()) {
            case REWARDS_LANDING:
                await rewardsLanding.useMyPoints();
                await rewardsLanding.accessToMapOfCommerce();
                if (permissions) {
                    await this.page.changeContext({context: 'NATIVE_APP', timeout: config.wait.M});
                    await this.page.dialogPermissions.allowOncePermission();
                    await this.page.changeContext({context: 'WEBVIEW', timeout: config.wait.M});
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
        await this.page.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XXXL
        });
        const isExistingAllowLocationModal = await this.page.isAllowLocationModalPresent();
        if (isExistingAllowLocationModal) {
            await this.page.closeAllowLocationModal();
        }
    }
}

export default new StoresMap();
