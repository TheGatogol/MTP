import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';
import faqDetailPoints from '../../pages/reward/faqDetailPoints';
import pointsPurchase from '../../pages/reward/pointsPurchase';
import pointsPurchaseReceipt from '../../pages/reward/pointsPurchaseReceipt';
import minimumPaymentClarifications from '../../pages/productDetails/minimumPaymentClarifications';
import additionalCardDetailPage from '../../pages/productDetails/additionalCardDetail';
import movementsPage from '../../pages/productDetails/movements';

// Page Objects IDs
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const FAQ_DETAIL_POINTS = faqDetailPoints.getId();
const POINTS_PURCHASE = pointsPurchase.getId();
const POINTS_PURCHASE_RECEIPT = pointsPurchaseReceipt.getId();
const MINIMUM_PAYMENT_CLARIFICATIONS = minimumPaymentClarifications.getId();
const ADDITIONAL_CARD_DETAIL = additionalCardDetailPage.getId();
const MOVEMENTS_PAGE = movementsPage.getId();

class MovementsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'productDetails/movementsDetail', parentNavigation: 'card/orangeCardProductDetail'});
    }

    async go_impl({movementSelector, movementType, forTransit, option, pageName} = {}) {
        switch (currentPage.getId()) {
            case MOVEMENTS_PAGE:
                if(forTransit){
                    await movementsPage.selectMovementProductDetailForTransit(movementSelector);
                } else {
                    movementType
                        ? await movementsPage.selectMovementByDataSelector(movementType)
                        : await movementsPage.selectMovementProductDetail(movementSelector);
                }
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                if(movementSelector === 'debit') {
                    await orangeCardProductDetailPage.seeLastMovementDetail();
                } else {
                    if(forTransit) {
                        await orangeCardProductDetailPage.selectMovementProductDetailForTransit(movementSelector);
                    } else {
                        if(pageName==='movements'){
                            await orangeCardProductDetailPage.accessToAllMovements();
                        }
                        else{
                            movementType
                                ? await orangeCardProductDetailPage.selectMovementByDataSelector(movementType)
                                : await orangeCardProductDetailPage.selectMovementProductDetail(movementSelector);
                        }
                    }
                }
                break;
            case FAQ_DETAIL_POINTS:
                await faqDetailPoints.closeFaqs();
                break;
            case POINTS_PURCHASE:
                await pointsPurchase.clousePay();
                break;
            case POINTS_PURCHASE_RECEIPT:
                await pointsPurchaseReceipt.exitReceipt(option);
                break;
            case MINIMUM_PAYMENT_CLARIFICATIONS:
                await minimumPaymentClarifications.accessToMovement(option);
                break;
            case ADDITIONAL_CARD_DETAIL:
                await additionalCardDetailPage.accessToDetailMovement();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MovementsDetail();
