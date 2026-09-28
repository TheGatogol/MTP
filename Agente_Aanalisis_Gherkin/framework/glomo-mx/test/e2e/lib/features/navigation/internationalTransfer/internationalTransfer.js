import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import otherOperativesPage from '../../pages/operatives/accountsOtherOperativesPage';
import internationalTransfersReviewRecipientPage from '../../pages/internationalTransfer/internationalTransfersReviewRecipient';
import internationalTransfersPanelPage from '../../pages/internationalTransfer/internationalTransfersPanel';
import operationals from '../../pages/operationals/operationals';

// Page Objects IDs
const OTHEROPERATIVES = otherOperativesPage.getId();
const INTERNATIONALTRANSFERSREVIEWRECIPIENT = internationalTransfersReviewRecipientPage.getId();
const INTERNATIONAL_TRANSFERS_PANEL_PAPGE_ID = internationalTransfersPanelPage.getId();
const OPERATIONALS = operationals.getId();

class InternationalTransfer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransfer', parentNavigation: 'internationalTransfer/internationalTransfersPanel'});
    }

    async go_impl({data, previousScreen} = {}) {
        switch (currentPage.getId()) { // NOSONAR
            case OTHEROPERATIVES:
                await otherOperativesPage.doInternationalTransfer();
                break;
            case INTERNATIONALTRANSFERSREVIEWRECIPIENT:
                if (data === 'valid'){
                    await internationalTransfersReviewRecipientPage.addBeneficiaryInformationValid();
                }
                else if(data === 'invalid'){
                    await internationalTransfersReviewRecipientPage.addBeneficiaryInformationInvalid();
                }
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({operative: 'internationalTransfer'});
                break;
            case INTERNATIONAL_TRANSFERS_PANEL_PAPGE_ID:
                await internationalTransfersPanelPage.navigateToInternationalTransfers(previousScreen);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfer();
