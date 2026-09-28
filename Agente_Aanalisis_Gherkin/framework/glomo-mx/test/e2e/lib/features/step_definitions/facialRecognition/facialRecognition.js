import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import facialRecognition from '../../pages/facialRecognition/facialRecognition';
import facialRecognitionFacePicture from '../../pages/facialRecognition/facialRecognitionFacePicture';
import facialRecognitionStartRegistry from '../../pages/facialRecognition/facialRecognitionStartRegistry';

// STEP DEFINITIONS
When(/^the user accesses the security reactivation flow$/, async function () {
    await navigation.facialRecognition.facialRecognition.go({forceLogin: true});
});

When(/^the user authorizes the use of data biometrics and start registration$/, async function () {
    await facialRecognition.markCheckbox();
    await navigation.facialRecognition.facialRecognitionStartRegistry.go();
});

When(/^the user continues to the start registry screen$/, async function () {
    await facialRecognitionStartRegistry.setImageFacial();
    await navigation.facialRecognition.facialRecognitionFacePicture.go();
});

When(/^the user navigates to the face picture screen$/, async function () {
    await facialRecognitionFacePicture.validateCapture();
});

When(/^the user navigates to the success screen$/,  async function () {
    await navigation.facialRecognition.facialRecognitionSuccessRegistration.go();
});

When(/^the user navigates to the more information screen modal$/, async  function () {
    await navigation.facialRecognition.facialRecognitionMoreInfo.go();
});

When(/^the user authorizes the use of data biometrics$/, async function () {
    await facialRecognition.markCheckbox();
});

When(/^the user accesses to the camera$/, async function () {
    await facialRecognitionStartRegistry.startPlugin();
});

When(/^the user refuses camera access$/, async function () {
    await facialRecognitionStartRegistry.refuseCameraAccess();
});

When(/^the user tries to use zoom and authentication method fails$/, async function () {
    await facialRecognitionFacePicture.zoomAuthenticationError();
});
