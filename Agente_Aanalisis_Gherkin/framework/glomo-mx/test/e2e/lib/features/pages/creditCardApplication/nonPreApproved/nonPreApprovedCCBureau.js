import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';

@page()
class NonPreApprovedCCBureau extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'NonPreApprovedCCBureau',
            root: '#cells-template-nonPreApprovedCreditCardBureau[state="active"]',
            defaultSphericaElements: ['GlomoAlertManager'],
            elements: {
                title: '.header__title',
                exitBtn: '#btnRight',
                lensIcon: '.icon-container #imageAsTitle',
                topDesc: 'p.title',
                bottomDesc: 'p.description.mainDescription',
                chkBureauCont: 'cells-checkbox-button-spherica[data-id="001"] .checkbox-container',
                chkBureauText: 'cells-checkbox-button-spherica[data-id="001"] .body-label',
                chkConfCont: 'cells-checkbox-button-spherica[data-id="002"] .checkbox-container',
                chkConfText: 'cells-checkbox-button-spherica[data-id="002"] .body-label',
                noticeTxt: '.message',
                confirmBtn: '#primaryBtn',
                bureauNotifIcon: '.list-file-container iron-icon',
                bureauNotifBtn: '.list-file-container p',
                modalHelpIcon: 'cells-modal-help cells-atom-icon[icon="coronita:help"] iron-icon',
                modalContainer: 'cells-modal-help-spherica cells-alert-box-spherica',
                closeModalBtn: 'cells-modal-help-spherica #closeButton',
                modalInfo: 'cells-modal-help-spherica p',
                acceptModalBtn: 'cells-modal-help .btn',
                rejectionModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            shareBtn: 'cells-molecule-link-icon-spherica[data-event-name="show-share"]',
                            findBranchBtn: 'cells-molecule-link-icon-spherica[data-event-name="show-map"]'
                        }
                    }
                ],
            },
            requiredElements: [
                'lensIcon',
                'topDesc',
                'confirmBtn',
            ]
        });
    }

    async _screenValidation({item, value = '', _args} = {}) {
        switch (item.toLowerCase()) {
            case 'page title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'lens icon':
                await this.lensIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'top description':
                await this.topDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bottom description':
                await this.bottomDesc.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal button icon':
                if(value.toLowerCase() === 'hidden') {
                    await this.bureauNotifIcon.waitForDisplayed({reverse: true});
                } else {
                    await this.bureauNotifIcon.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'modal button text':
                if(value.toLowerCase() === 'hidden') {
                    await this.bureauNotifBtn.waitForDisplayed({reverse: true});
                } else {
                    await this.bureauNotifBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'checkbox bureau container':
                if(value.toLowerCase() === 'hidden') {
                    await this.chkBureauCont.waitForDisplayed({reverse: true});
                } else {
                    await this.chkBureauCont.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'checkbox bureau text':
                if(value.toLowerCase() === 'hidden') {
                    await this.chkBureauText.waitForDisplayed({reverse: true});
                } else {
                    await this.chkBureauText.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'checkbox confirmation container':
                await this.chkConfCont.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checkbox confirmation text':
                await this.chkConfText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notice text':
                await this.noticeTxt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                if(value.toLowerCase() === 'enabled') {
                    await this.confirmBtn.waitForEnabled();
                } else {
                    await this.confirmBtn.waitForDisabled();
                }
                break;
            case 'modal notification icon':
                await this.modalHelpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal notification button':
                await this.closeModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help modal container':
                if(value==='not visible'){
                    await this.modalContainer.waitForAttribute({attribute:'opened', reverse:true});
                } else {
                    await this.modalContainer.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'modal notification text':
                await this.modalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept modal notification button':
                await this.acceptModalBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async _modalElementValidation({item, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'icon message':
                await this.rejectionModal.iconMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.rejectionModal.additionalElements.shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'find branch button':
                await this.rejectionModal.additionalElements.findBranchBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }

    async acceptConditions() {
        if(!global.user.tags.includes('npa_previous_authorization')){
            await this.chkBureauText.waitForDisplayed();
            await this.chkBureauCont.waitForDisplayed();
            await this.chkBureauCont.click();
        }
        await this.chkConfText.waitForDisplayed();
        await this.chkConfCont.waitForDisplayed();
        await this.chkConfCont.click();
    }

    async confirmBureauCheck() {
        await this.confirmBtn.scrollIntoView();
        await this.confirmBtn.waitForDisplayed();
        await this.confirmBtn.click();
    }

    async openBureauInfoModal() {
        await (await this.bureauNotifBtn.waitForClickable({timeout: config.wait.XL})).click();
    }

    async closeModal() {
        await this.modalContainer.waitForAnimation({timeout: config.wait.M});
        await (await this.closeModalBtn.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new NonPreApprovedCCBureau();
