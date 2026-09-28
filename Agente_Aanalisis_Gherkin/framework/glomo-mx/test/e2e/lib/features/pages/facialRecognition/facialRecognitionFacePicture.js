import AbstractGlomoPage from '../abstract-glomo-page';
import { page } from '@csqe/radish';

@page('FacialRecognitionFacePicture')
class FacialRecognitionFacePicture extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-facialRecognitionFacePicture[state="active"]',
            elements: {
                header: 'cells-molecule-header #titleZone  span',
                continueButton:  '[data-tag-name="bbva-button-default"]',
                dmValidation: 'bbva-manager-device-activation-facial-biometrics-validation'
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica #titleZone  span',
                continueButton:  '[data-tag-name="bbva-button-default-spherica"]'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async updatePhone() {
        await this.dmValidation.execute(
            {
                script: async (phone) => {
                    this.phoneCustomerNumber = phone;
                },
                args: [global.user.authentication.user]
            }
        );
    }

    async updateMorphoMethod(method){
        await this.dmValidation.execute(
            {
                script: async (morphoMethod) => {
                    this.morphoMethod = morphoMethod;
                },
                args: [method]
            }
        );
    }
    async zoomAuthenticationError(){
        await this.dmValidation.execute(
            {
                script: async (e) => {
                    this.zoomAuthenticationError(e);
                },
                args: [{code:1}]
            }
        );
    }

    async validateCapture() {
        await this.updatePhone();
        await this.updateMorphoMethod('update');
        await this.continueButton.waitForClickable({timeout: config.wait.S});
        await this.continueButton.click();
        await this.fillOtp('11111111');
    }
}

export default new FacialRecognitionFacePicture();
