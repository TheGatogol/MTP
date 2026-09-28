import path from 'path';
import moment from 'moment';
import requireindex from 'requireindex';
import {cucumberRequires} from '@csqe/radish';

global.DM_DICTIONARIES = requireindex(path.join(__dirname, '../support/data-manager/dictionaries'));

cucumberRequires.loadRequires();
moment.locale('es');

process.on('unhandledRejection', ({message, stack}) => {
    if (message === '404 - undefined')
        console.error('[unhandledRejection] This could be caused by a missing vbank recording. Please, try recording the scenario.');
    else {
        console.error('[unhandledRejection] Unknown reason:', message);
        if (stack) {
            console.error(stack);
        }
    }
});
