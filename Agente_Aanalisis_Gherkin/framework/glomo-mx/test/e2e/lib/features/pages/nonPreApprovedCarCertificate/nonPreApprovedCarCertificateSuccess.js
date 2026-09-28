import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

@page('carLoanSuccess')
class CarLoanSuccess extends AbstractGlomoPage {

    constructor() {
        const rootExtension = 'bbva-multistep-no-pre-approved-car-certificate-success';

        super({
            root: '#cells-template-nonPreApprovedCarCertificateSuccess[state="active"]', 
            
            elements: {
                back: 'bbva-header-main #btn-right-primary',
                header: 'bbva-header-main #heading',
                exitButton: `${rootExtension} #exitButton`,
                infoBanner: `${rootExtension} div bbva-notification-message`,

            },
            requiredElements: [
                'header', 'infoBanner'
            ],
        });
    }
}   
export default new CarLoanSuccess();
