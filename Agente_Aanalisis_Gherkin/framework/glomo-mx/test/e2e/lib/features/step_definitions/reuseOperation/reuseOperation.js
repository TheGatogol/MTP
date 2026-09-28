import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import reuseOperation from '../../pages/reuseOperation/reuseOperation';
import reuseOperationsBillPayments from '../../pages/reuseOperation/reuseOperationsBillPayments';
import reuseOperationDetail from '../../pages/productDetails/accountTransactionDetail';

When(/^the user wants to reuse an "([^"]*)" operation$/, async function(typeOperation) {
    switch(typeOperation){
        case 'pagar servicios':
        case 'service payments':
            await navigation.reuseOperation.reuseOperationsBillPayments.go();
            break;
        case 'transferencia otros bancos':
        case 'transferencia a terceros':
        case 'transferencia cuentas propias':
        case 'own transfer':
        case 'internal transfer':
        case 'interbank transfer':
            await navigation.reuseOperation.reuseOperation.go();
            break;
        default:
            throw new Error(`[ERR] The action "${typeOperation}" is unknown. Cannot be processed.`);
    }
});

When(/^the user select transaction with id "([^"]*)"$/, async function(idOp) {
    await navigation.account.accountTransactionDetail.go({selectedNum : idOp});
});

When(/^the user try to reuse an operation$/, async function() {
    await reuseOperationDetail.goToReuseOperation();
});

When (/^the user (accesses|attempts to access) to the reuse operation success page "([^"]*)"$/, async function(attemptOrAccess, transferType) {
    if(transferType.trim() === 'transferencia otros bancos') {
        await reuseOperation.fillInterbankConcept();
    }
    switch(attemptOrAccess){
        case 'accesses':
            if(transferType.trim() === 'pagar servicios'  || transferType.trim() === 'service payments') {
                await navigation.billPayments.productDetail.review.go();
            } else {
                await navigation.diy.transfer.transferSuccess.go({otp: transferType});
            }
            break;
        case 'attempts to access':
            switch(transferType){
                case 'pagar servicios':
                case 'service payments':
                    await reuseOperationsBillPayments.finishProcess();
                    break;
                case 'transferencia otros bancos':
                case 'transferencia a terceros':
                case 'transferencia cuentas propias':
                case 'own transfer':
                case 'internal transfer':
                case 'interbank transfer':
                    await reuseOperation.continueProcess();
                    break;
                default:
                    throw new Error(`[ERR] The action "${transferType}" is unknown. Cannot be processed.`);
            }
            break;
        default:
            throw new Error(`[ERR] The action "${attemptOrAccess}" is unknown. Cannot be processed.`);
    }
});
