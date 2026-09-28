import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import mortgageCertificatePage from '../../pages/mortgageCertificateReview/mortgageCertificateReview';

When(/^the user accesses to mortgage certificate card$/, async function() {
    await navigation.mortgageCertificate.mortgageReview.go();
});

When(/^the user views its certificate$/, async function() {
    await mortgageCertificatePage.visualizeCertificate();
});

When(/^the certificate is cancel by the user$/, async function() {
    await mortgageCertificatePage.cancelCertificate();
});

When(/^the certificate is definitively canceled by the user "([^"]*)"$/, async function(result) {
    if(result === 'successfully')
        await navigation.mortgageCertificate.mortageCancellation.go();
    else
        await mortgageCertificatePage.cancelCertificate(true);
});

When(/^the user needs more information about its certificate$/, async function() {
    await mortgageCertificatePage.revealHelp();
});
