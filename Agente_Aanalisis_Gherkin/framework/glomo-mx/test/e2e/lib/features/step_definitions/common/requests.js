import {Given, Then} from '@cucumber/cucumber';
import {Commands, utils} from '@csqe/radish';
import InterceptedRequest from '../../requests/interceptedRequest';

Given('the interceptor service is initiated', async function() {
    await Commands.startInterceptor();
});

Then('the {string} request is intercepted', async function(requestData) {
    global.interceptedRequest = new InterceptedRequest({requestData});
});

Then('the intercepted request body schema is validated', async function() {
    await interceptedRequest.validateRequestBody();
});

Then('the intercepted request contains the following headers:', async function(table) {
    await utils.validateTable(table, interceptedRequest,
        `Checking the headers for the request "${await interceptedRequest.url}"`, true,
        {}, 'headerValidation');
});
