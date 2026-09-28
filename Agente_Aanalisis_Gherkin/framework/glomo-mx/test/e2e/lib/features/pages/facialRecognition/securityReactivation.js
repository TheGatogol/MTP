import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page('SecurityReactivation')
class SecurityReactivation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-securityReactivation[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone span',
                updateButton: 'cells-text-description #linkButton button'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async updateFacial() {
        await this.updateButton.waitForClickable({timeout: config.wait.M});
        await this.updateButton.click();
    }
}

export default new SecurityReactivation();
