import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

async function setLocalStorage(key, value) {
    await Commands.execute({
        script: (arg1, arg2) => {
            localStorage[arg1] = arg2;
        },
        args: [key, value],
    });
}

class InvestmentsFollowUp extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'investmentsFollowUp/investmentsFollowUp',
            parentNavigation: 'dashboard'
        });
    }

    async go_impl({onboardingState} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                if (onboardingState === 'without onboarding') {
                    await setLocalStorage('follow_up_show_onboarding', 'false');
                }
                if (onboardingState === 'from futura') {
                    await dashboard.accessInvestmentSection();
                } else {
                    await dashboard.accessMyInvestments();   
                }  
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InvestmentsFollowUp();
