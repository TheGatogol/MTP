import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import videoSelfie from '../../pages/videoSelfie/videoSelfie';

When(/^the user accesses to add video selfie screen$/, async function() {
    await navigation.videoSelfie.videoSelfie.go();
});

When(/^the user accepts the validation consent with dvs xpress$/, async function() {
    await videoSelfie.acceptConsent();
});

When(/^the user accesses to the privacy notice modal in video selfie$/, async function() {
    await videoSelfie.showPrivacyModal();
});

When(/^the user uploads documents in video selfie$/, async function() {
    await videoSelfie.uploadDocuments();
});
