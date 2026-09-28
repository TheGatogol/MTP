import {When} from '@cucumber/cucumber';
import nationalIdPage from '../../pages/nationalId/nationalId';

const completeConsentStep = async (onboarding) => {
    if (onboarding) {
        await nationalIdPage.acceptOnboading();
    }
    await nationalIdPage.acceptConsentStep();
};

When(/^the user accepts recommendations to scan ine( in video selfie)?$/, async function(videoSelfie) {
    await completeConsentStep(!videoSelfie);
    await nationalIdPage.completeModule('documents');
});

When(/^the user completes consent step( in video selfie)?$/, async function(videoSelfie) {
    await completeConsentStep(!videoSelfie);
    await nationalIdPage.retryOperationError();
});

When(/^the user leaves process in "([^"]*)"( video selfie)? screen$/, async function(section, videoSelfie) {
    if (!videoSelfie && section.toLowerCase() === 'consent') {
        await nationalIdPage.acceptOnboading();
    }
    await nationalIdPage.leaveOperative(section);
});

When(/^the user cancels leave operative$/, async function() {
    await completeConsentStep(true);
    await nationalIdPage.cancelLeaveOperative();
});

When(/^the user accepts privacy notice( in video selfie)?$/, async function(videoSelfie) {
    if (!videoSelfie) {
        await nationalIdPage.acceptOnboading();
    }
    await nationalIdPage.showPrivacyModal();
});

When(/^the user accepts the validation consent( and continues)?$/, async function(continues) {
    if (continues) {
        await nationalIdPage.acceptConsentStep();
    }
    else {
        await nationalIdPage.acceptTheValidationConsent();
    }
});
