import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page('FacialRecognitionStartRegistry')
class FacialRecognitionStartRegistry extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-facialRecognitionStartRegistry[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone span',
                continueButton: 'bbva-panel-button-fixed #button',
                dmValidation: 'bbva-manager-device-activation-facial-biometrics-validation'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone span',
                continueButton: 'bbva-button-default-spherica',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async setImageFacial() {
        await this.dmValidation.execute(
            {
                script: async (data) => {
                    this.getImageFacial(data);
                },
                args: [{base64: global.user.authentication.imgFacialLink, url: global.user.authentication.imgFacialLink}]
            }
        );
    }

    async startPlugin(){
        await this.continueButton.waitForClickable({ timeout: config.wait.M });
        await this.continueButton.click();
    }
    async refuseCameraAccess() {
        await this.dmValidation.execute({
            script: async (res) => {
                this.openErrorModalDeniedAccess(res);
            },
            args: [{code:5}]
        });
    }
}

export default new FacialRecognitionStartRegistry();
