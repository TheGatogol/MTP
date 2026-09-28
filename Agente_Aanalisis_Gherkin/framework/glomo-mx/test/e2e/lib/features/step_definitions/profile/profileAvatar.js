import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user goes the Change Avatar screen$/, async function() {
    await navigation.profileAvatar.go({forceLogin: true});
});

When(/^the user choose photo from the Gallery$/, async function() {
    await currentPage.goToGallery();
});

When(/^the user choose photo from the Camera$/, async function() {
    await currentPage.goToCamera();
});
