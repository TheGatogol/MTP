import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import qrReaderPage from '../../pages/qrReader/qrReader';
import trackingDebitCard from '../../pages/trackingDebitCard/trackingDebitCard';
import digitalButler from '../../pages/digitalButler/digitalButler';

const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const QR_READER = qrReaderPage.getId();
const TRACKING_DEBIT_CARD = trackingDebitCard.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class CleanCardOperations extends AbstractGlomoNavigation {

    constructor() {
        super({page: 'operatives/cleanCardOperations'});
    }

    async go_impl({qrUrl, pageName, blueConfig} = {}) {
        
        switch (currentPage.getId()) {
            
            case ORANGE_CARD_PRODUCT_DETAIL:
                if(pageName === 'operatives'){
                    await orangeCardProductDetailPage.accessViewNip();
                } else {
                    await orangeCardProductDetailPage.cardActivationOperatives();
                }
                
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(blueConfig);
                break;
            case QR_READER:
                if (pageName === 'exit') {
                    await qrReaderPage.retryButton();
                } else {
                    await qrReaderPage.setQrCodeData(qrUrl, pageName);
                }
                break;
            case TRACKING_DEBIT_CARD:
                await trackingDebitCard.accessConfirmReceiptLink();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CleanCardOperations();
