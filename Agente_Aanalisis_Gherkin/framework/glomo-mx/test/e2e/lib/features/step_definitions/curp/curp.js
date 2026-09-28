import { When} from '@cucumber/cucumber';
import curpPage from '../../pages/curp/curp';

When(/^the user accesses to link notice privacy curp screen$/, async function() {
    await curpPage.goNoticePrivacy();
});

When (/^the user continues after typing curp$/, async function() {
    await curpPage.continueInsertCurp();
});

