import {When} from '@cucumber/cucumber';

When(/^user sees the modal error on operation final$/, async function() {
    await currentPage.checkModal({size: 'big size', paragraph: false});
});

When(/^a "([^"]*)" size backend error is shown$/, async function(size) {
    await currentPage.checkModal({size: size});
});

When(/^a "([^"]*)" size backend error without title is shown$/, async function(size) {
    await currentPage.checkModal({size: size, title: false});
});

When(/^a "([^"]*)" size backend error with XL title is shown$/, async function(size) {
    await currentPage.checkModal({size: size, title: false, xlTitle: true});
});

When(/^the user retries "([^"]*)" more times$/, async function(times) {
    await currentPage.retryModal(times);
});

When(/^the user retries "([^"]*)" more times in "([^"]*)" error message$/, async function(times, type) {
    await currentPage.retryMessageError(times, type);
});
