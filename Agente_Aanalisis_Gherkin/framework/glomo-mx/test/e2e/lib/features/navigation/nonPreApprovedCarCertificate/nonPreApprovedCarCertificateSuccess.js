import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import nonPreApprovedCarCertificateMainPage from '../../pages/nonPreApprovedCarCertificate/nonPreApprovedCarCertificateMain';

// Page Objects IDs
const NON_PRE_APPROVED_CAR_CERTIFICATE = nonPreApprovedCarCertificateMainPage.getId();

class NonPreApprovedCarCertificateSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'nonPreApprovedCarCertificate/nonPreApprovedCarCertificateSuccess', parentNavigation: 'nonPreApprovedCarCertificate/nonPreApprovedCarCertificateMain'});
    }

    async go_impl({carType = {}}) {
        switch (currentPage.getId()) {
            case NON_PRE_APPROVED_CAR_CERTIFICATE:
                await nonPreApprovedCarCertificateMainPage.completeQuotation({carType: carType, variableIncomes: false});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NonPreApprovedCarCertificateSuccess();
