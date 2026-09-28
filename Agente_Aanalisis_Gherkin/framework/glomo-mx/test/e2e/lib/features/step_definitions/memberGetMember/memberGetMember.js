import {When} from '@cucumber/cucumber';
import memberGetMember from '../../pages/memberGetMember/memberGetMember';
import * as navigation from '../../navigation';

When(/^the user accesses to member get member "([^"]*)"$/, async function(option) {
    switch (option) {
        case 'offer button link':
            await memberGetMember.selectActionBtn('offer button link');
            break;
        case 'tdc registration form':
            await memberGetMember.selectActionBtn('offer button link');
            await navigation.memberGetMemberCreditCard.memberGetMemberCreditCard.go();
            break;
        case 'payroll portability registration form':
            await memberGetMember.selectActionBtn('offer button link');
            await navigation.memberGetMemberPayrollPortability.go();
            break;
        default:
            throw new Error('Unknown navigation');
    }
});

When(/^the user taps on the "([^"]*)"$/, async function(option) {
    switch (option) {
        case 'rewards option':
            await memberGetMember.selectActionBtn('tab rewards');
            break;
        case 'reward item':
            await memberGetMember.selectActionBtn('tab reward item');
            break;
        case 'reward detail history link':
            await memberGetMember.selectActionBtn('tab reward detail history link');
            break;
        case 'reward detail history link with error':
            await memberGetMember.selectActionBtn('tab reward detail history link with error');
            break;
        case 'bonification item':
            await memberGetMember.selectActionBtn('bonification item');
            break;
        default:
            throw new Error('Unknown navigation');
    }
});

