import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import validatedEmailSuccess from '../../pages/emailManagement/validatedEmailSuccess';

When(/^the user is in the validated email success screen$/, async function() {
    await navigation.emailManagement.validatedEmailSuccess.assert();
});

When(/^the user ([^"]*) the successful validation screen$/, async function(clic) {
    if(clic === 'exit'){
        await validatedEmailSuccess.confirmExit();
    }
    else{
        await validatedEmailSuccess.confirmClose();
    }

});
