import { When } from '@cucumber/cucumber';
import EmergencyReports from '../../pages/emergencyReports/emergencyReports';
import * as navigation from '../../navigation';

When(/^the user access to "([^"]*)" screen$/, async function (typeProduct) {
    if (typeProduct === 'faqs') {
        await EmergencyReports.accessToFaqs();
    } else {
        const emergency = {
            'card': 'emergency-reports-mx-heading-card',
            'vehicle': 'emergency-reports-mx-heading-insurance'
        }[typeProduct];
        await EmergencyReports.accessToEmergency(emergency);
    }
});

When(/^the user access to report "([^"]*)" screen$/, async function(report) {
    switch(report) {
        case 'lost or stolen':
            await navigation.emergencyZone.stolenCard.go();
            break;
        case 'rejected':
            await EmergencyReports.accessToRejected();
            break;
        case 'change':
            await EmergencyReports.changeVehicle();
            break;
        case 'motorcycle change':
            await EmergencyReports.changeMotorcycle();
            break;
        case 'opportunities':
            await EmergencyReports.accessToOpportunities();
            break;
        default:
            throw new Error(`Unknown deeplinking navigation: ${screen}`);
    }
});

When(/^the user access to "([^"]*)" menu from "([^"]*)" screen$/, async function(subProduct, product) {

    const subEmergency = {
        'vehicle theft': 'Reportar robo de vehículo',
        'vehicle crash': 'Reportar choque',
        'vehicle crane': 'Solicitar grúa',
        'vehicle assistances': global.user?.emergencies?.vehicle?.assistances?.menuOption ?? 'Solicitar asistencias',
        'vehicle glass': 'Reportar daño de cristales'
    }[subProduct];

    if (product && subEmergency) {
        await EmergencyReports.accessToEmergency(product);
        await EmergencyReports.accessToEmergencyMenu(subEmergency);
    } else {
        throw new Error(`Unknown emergency screen: ${screen}`);
    }
});

When(/^the user accepts "([^"]*)" action$/, async function(confirmation) {
    await EmergencyReports.confirmAction(confirmation);
});

When(/^the user access to report "([^"]*)" for select "([^"]*)"$/, async function (subProduct, action) {
    const titleAccessEmergency = (global.user?.emergencies?.vehicle?.menuOption ?? 'emergency-reports-mx-heading-insurance');

    await EmergencyReports.accessToEmergency(titleAccessEmergency);
    const subEmergency = {
        'vehicle crane': 'Solicitar grúa',
        'vehicle assistances': global.user?.emergencies?.vehicle?.assistances?.menuOption ?? 'Solicitar asistencias',
        'vehicle theft': 'Reportar robo de vehículo',
        'vehicle crash': 'Reportar choque',
        'vehicle glass': 'Reportar daño de cristales'
    }[subProduct];

    await EmergencyReports.accessToEmergencyMenu(subEmergency);

    switch(subProduct) {
        case 'vehicle crane':
            await EmergencyReports.confirmOptionCrane(action);
            break;
        case 'vehicle assistances':
            await EmergencyReports.confirmOptionAssistance(action);
            break;
        case 'vehicle theft':
            await EmergencyReports.confirmOptionTheft(action);
            break;
        case 'vehicle crash':
            await EmergencyReports.confirmOptionCrash(action);
            break;
        case 'vehicle glass':
            await EmergencyReports.confirmOptionGlass(action);
            break;
        default:
            throw new Error(`Unknown emergency screen: ${screen}`);
    }
});

When(/^the user select "([^"]*)"$/, async function(questions) {
    await EmergencyReports.onPressQuestion({questions});
});

When(/^the user closes emergency "([^"]*)"$/, async function(option) {
    await EmergencyReports.closeFlow(option);
});

When(/^the user access emergency report sidebar (private|cached)$/, async function(session) {
    await EmergencyReports.analitycsSidebar({id: 'emergencyReports', page: `sidebar_${session}`});
});
