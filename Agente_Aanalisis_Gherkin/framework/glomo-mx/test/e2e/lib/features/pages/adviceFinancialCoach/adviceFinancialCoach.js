import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class AdviceFinancialCoach extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-adviceFinancialCoach[state="active"]',
            elements: {
                financialCoach: '[data-tag-name="advice-financial-coach"]',
                scoringLink: '#scoringLink',
                scoringPage: '#scoringPage',
                evolutionPage: '#evolutionPage',
                evolutionPageImproveExpensesText: '#evolutionPage [data-tag-name="bbva-panel-container"] [data-tag-name="advice-financial-coach-scoring-welcome-partial"] [text="Tienes buen colchón financiero. El siguiente paso es reducir tus gastos para terminar mejor el mes."]',
                evolutionPageImproveFinancialCushionText: '#evolutionPage [data-tag-name="bbva-panel-container"] [data-tag-name="advice-financial-coach-scoring-welcome-partial"] [text="Manejas bien tus gastos del mes. El siguiente paso es que refuerces tu colchón financiero."]',
                evolutionPageImproveFinancialCushionAndExpensesText: '#evolutionPage [data-tag-name="bbva-panel-container"] [data-tag-name="advice-financial-coach-scoring-welcome-partial"] [text="Te vendría bien aumentar tu colchón financiero y reducir tus gastos para terminar mejor el mes."]',
                goToExpensesLink: '#evolutionPage [data-tag-name="bbva-panel-container"] [option-link="Ir a ingresos y gastos"] [data-tag-name="bbva-type-link"]',
                monthlyBalanceHeaderLink: '#evolutionPage [data-tag-name="bbva-panel-container"] [text="Ingresos y gastos"] [data-tag-name="bbva-type-link"]',
                financialCushionHeaderLink: '#evolutionPage [data-tag-name="bbva-panel-container"]:nth-of-type(3) [text="Colchón financiero"] [data-tag-name="bbva-type-link"]',
                targetsHeaderCategory: '#headerCategoryTarget',
                targetsHeaderCategoryLink: '#headerCategoryTarget .options-right [data-tag-name="bbva-type-link"]',
                proposalsHeaderCategory: '#headerCategoryProposal',
                proposalsHeaderCategoryLink: '#headerCategoryProposal .options-right [data-tag-name="bbva-type-link"]',
                carouselProposals: '#carouselProposal',
                planProposalDashboard: '#proposalDashboardPage [data-tag-name="advice-financial-coach-proposal-dashboard"] [data-tag-name="bbva-panel-container"]:nth-of-type(1) [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-button-default"]',
                pocketProposalDashboard: '#proposalDashboardPage [data-tag-name="advice-financial-coach-proposal-dashboard"] [data-tag-name="bbva-panel-container"]:nth-of-type(2) [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-button-default"]',
                proposalInactiveButton: '#carouselProposal [data-tag-name="advice-financial-coach-panel-offer"]:nth-of-type(1) [data-tag-name="bbva-button-default"]',
                proposalActiveButton: '#carouselProposal div[role="region"] div.swiper-slide-next [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-button-default"]',
                badgesHeaderCategory: '#badgeDashboardHeader',
                badgesHeaderCategoryLink: '#badgeDashboardHeader .options-right [data-tag-name="bbva-type-link"]',
                carouselBadges: '#carouselBadges',
                availableBadgeLink: '#carouselBadges div[role="list"] div.swiper-slide-next [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-type-link"]',
                obtainedBadgeLink: '#carouselBadges div[role="list"] div.swiper-slide-active [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-type-link"]',
                availableBadgeTab: '[data-tag-name="bbva-tab-default"] [selected="0"]',
                obtainedBadgeTab: '[data-tag-name="bbva-tab-default"] #tab-1',
                planBadgeDashboard: '#badgeDashboardPage [data-tag-name="advice-financial-coach-badge-dashboard"] [data-tag-name="bbva-tab-default"] div.panel [data-tag-name="bbva-panel-container"]:nth-of-type(2) [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-type-link"]',
                pocketBadgeDashboard: '#badgeDashboardPage [data-tag-name="advice-financial-coach-badge-dashboard"] [data-tag-name="bbva-tab-default"] div.panel [data-tag-name="bbva-panel-container"]:nth-of-type(3) [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-type-link"]',
                obtainedBadgeDashboard: '#badgeDashboardPage [data-tag-name="advice-financial-coach-badge-dashboard"] [data-tag-name="bbva-tab-default"] div.panel:nth-of-type(2) [data-tag-name="bbva-panel-container"]:nth-of-type(1) [data-tag-name="advice-financial-coach-panel-offer"] [data-tag-name="bbva-type-link"]',
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    proposalModal: '#proposalModal',
                    buttonProposalModalDetail: '#proposalModal div.modal-footer [data-tag-name="bbva-button-default"]',
                    badgeModal: '#badgeAvailableModal',
                    buttonBadgeModalDetail: '#badgeAvailableModal div.modal-footer [data-tag-name="bbva-button-default"]',
                    badgeObtainedModal: '#badgeCompletedModalPanelOffer',
                    onboardingButtonPause: 'bbva-help-modal[button-text="bbva-help-onboarding-carousel-next"] .play',
                    onboardingButtonNext: 'bbva-help-modal[button-text="bbva-help-onboarding-carousel-next"] .next',
                    onboardingButtonClose: '.close',
                    expencesModal: '[title-text="Ingresos y gastos de los últimos 12 meses"]',
                    cushionModal: '[title-text="Colchón Financiero"]',
                    targetDeleteModalButton: '#targetDeleteModal div.content div.modal-footer [text="Eliminar objetivo"]',
                    targetEditModalButton: '#targetEditModal div.modal-footer [text="Modificar objetivo"]',
                    continueWithoutTargetButton: '#targetCloseConfirmationModal div.modal-footer [text="Continuar sin objetivo"]',
                    closeTargetModalIcon: '#targetsModal [data-tag-name="bbva-header-main"] #btn-close',
                    multistep: {
                        editStep1: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"] #editButton',
                        editStep2: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"]:nth-of-type(2)',
                        step2ButtonContinue: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [slot="content"] #step-2 [data-tag-name="bbva-button-default"]',
                        step2ButtonConfirm: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [slot="confirmation"] [data-tag-name="bbva-button-default"]',
                        modalDelete: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [slot="confirmation"] [data-tag-name="bbva-button-default"]:nth-of-type(2)',
                        modalListLink: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="advice-financial-coach-list-link"]',
                        modalCushionListLink: '#targetsModal [data-tag-name="advice-financial-coach-target-modal-partial"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="advice-financial-coach-list-link"]',
                    },
                },
            },
            requiredElements: ['financialCoach'],
        });
    }

    async confirmContinueWithoutTarget() {
        await this.modalsContainer.continueWithoutTargetButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.continueWithoutTargetButton.click();
    }

    async clickToChangeSlides(times) {
        for(let i=0; i < times; i++) {
            await this.modalsContainer.onboardingButtonNext.waitForClickable({timeout: config.wait.M});
            await this.modalsContainer.onboardingButtonNext.click();
        }
    }

    async closeOnboarding() {
        await this.modalsContainer.onboardingButtonClose.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.onboardingButtonClose.click();
    }

    async pauseOnboarding() {
        await this.modalsContainer.onboardingButtonPause.waitForClickable();
        await this.modalsContainer.onboardingButtonPause.click();
    }

    async goToYourFinancialSituation() {
        await this.scoringLink.waitForDisplayed({timeout: config.wait.M});
        await this.scoringLink.waitForClickable({timeout: config.wait.M});
        await this.scoringLink.click();
    }

    async goToPfm() {
        await this.goToExpensesLink.waitForDisplayed({timeout: config.wait.M});
        await this.goToExpensesLink.waitForClickable({timeout: config.wait.M});
        await this.goToExpensesLink.click();
    }

    async openInfoModal(modalName) {
        switch (modalName) {
            case 'Ingresos y gastos':
                await this.monthlyBalanceHeaderLink.waitForDisplayed({timeout: config.wait.M});
                await this.monthlyBalanceHeaderLink.waitForClickable({timeout: config.wait.M});
                await this.monthlyBalanceHeaderLink.click();
                break;
            case 'Colchón financiero':
                await this.financialCushionHeaderLink.waitForDisplayed({timeout: config.wait.M});
                await this.financialCushionHeaderLink.waitForClickable({timeout: config.wait.M});
                await this.financialCushionHeaderLink.click();
                break;
            default:
                throw new Error('Option is not available');
        }
    }

    async goToTargetsModal() {
        await this.targetsHeaderCategory.waitForDisplayed({timeout: config.wait.M});
        await this.targetsHeaderCategoryLink.waitForClickable({timeout: config.wait.M});
        await this.targetsHeaderCategoryLink.click();
    }

    async openStep2TargetsModal() {
        await this.modalsContainer.multistep.editStep2.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.editStep2.execute({
            script:()=>{ this.shadowRoot.querySelector('div.header:first-of-type #editButton').click(); }
        });
    }

    async openStep1TargetsModal() {
        await this.waitForElementsExist(this.modalsContainer.multistep.editStep1);
        const element = await this.modalsContainer.multistep.editStep1.elements();
        await element.value[0].waitForDisplayed({timeout: config.wait.M});
        await element.value[0].click();
    }

    async selectTarget() {
        await this.modalsContainer.multistep.modalListLink.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.modalListLink.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.multistep.modalListLink.click();

        await this._continueAndConfirmStep2();
    }

    async selectCushionTarget() {
        await this.modalsContainer.multistep.modalCushionListLink.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.modalCushionListLink.click();

        await this._continueAndConfirmStep2();
    }

    async _continueAndConfirmStep2() {
        await this.modalsContainer.multistep.step2ButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonContinue.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonContinue.click();

        await this.modalsContainer.multistep.step2ButtonConfirm.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonConfirm.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonConfirm.click();
    }

    async closeTargetModal() {
        await this.modalsContainer.closeTargetModalIcon.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.closeTargetModalIcon.click();
    }

    async modifyTarget() {
        await this.openStep2TargetsModal();
        await this.modalsContainer.multistep.step2ButtonContinue.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonContinue.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.multistep.step2ButtonContinue.click();
    }

    async deleteTarget() {
        await this.modalsContainer.multistep.modalDelete.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.multistep.modalDelete.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.multistep.modalDelete.click();
    }

    async confirmDeleteTarget() {
        await this.deleteTarget();
        await this.modalsContainer.targetDeleteModalButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.targetDeleteModalButton.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.targetDeleteModalButton.click();
    }

    async goToProposalsDashboard() {
        await this.proposalsHeaderCategory.waitForDisplayed({timeout: config.wait.M});
        await this.proposalsHeaderCategoryLink.waitForClickable({timeout: config.wait.M});
        await this.proposalsHeaderCategoryLink.click();
    }

    async confirmChangeTarget() {
        await this.modalsContainer.targetEditModalButton.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.targetEditModalButton.click();
    }

    async clickBadgeButton() {
        await this.modalsContainer.badgeModal.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonBadgeModalDetail.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.buttonBadgeModalDetail.click();
    }

    async clickProposalButton() {
        await this.modalsContainer.proposalModal.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.buttonProposalModalDetail.waitForClickable({timeout: config.wait.M});
        await this.modalsContainer.buttonProposalModalDetail.click();
    }

    async openProposalModalFromDashboard() {
        await this.proposalDashboard.waitForClickable({timeout: config.wait.M});
        await this.proposalDashboard.click();
    }

    async openProposalModal(proposalType) {
        switch (proposalType) {
            case 'inactive':
                await this.carouselProposals.waitForDisplayed({timeout: config.wait.M});
                await this.proposalInactiveButton.waitForClickable({timeout: config.wait.M});
                await this.proposalInactiveButton.click();
                break;
            case 'active':
                await this.carouselProposals.waitForDisplayed({timeout: config.wait.M});
                await this.proposalActiveButton.waitForClickable({timeout: config.wait.M});
                await this.proposalActiveButton.click();
                break;
            case 'plan':
                await this.planProposalDashboard.waitForClickable({timeout: config.wait.M});
                await this.planProposalDashboard.click();
                break;
            case 'pockets':
                await this.pocketProposalDashboard.waitForClickable({timeout: config.wait.M});
                await this.pocketProposalDashboard.click();
                break;
            default:
                throw new Error('Option is not available');

        }
    }

    async goToBadgesDashboard() {
        await this.badgesHeaderCategory.waitForDisplayed({timeout: config.wait.M});
        await this.badgesHeaderCategoryLink.waitForClickable({timeout: config.wait.M});
        await this.badgesHeaderCategoryLink.click();
    }

    async openBadgeModal(badgeType) {
        switch (badgeType) {
            case 'available':
                await this.carouselBadges.waitForDisplayed({timeout: config.wait.M});
                await this.availableBadgeLink.waitForClickable({timeout: config.wait.M});
                await this.availableBadgeLink.click();
                break;
            case 'obtained':
                await this.carouselBadges.waitForDisplayed({timeout: config.wait.M});
                await this.obtainedBadgeLink.waitForClickable({timeout: config.wait.M});
                await this.obtainedBadgeLink.click();
                break;
            default:
                throw new Error('Option is not available');

        }
    }

    async switchToObtainedBadgesTab() {
        await this.obtainedBadgeTab.waitForDisplayed({timeout: config.wait.M});
        await this.obtainedBadgeTab.waitForClickable({timeout: config.wait.M});
        await this.obtainedBadgeTab.click();
    }

    async openBadgetModalFromDashboard(type) {
        switch (type) {
            case 'plan':
                await this.planBadgeDashboard.waitForClickable({timeout: config.wait.M});
                await this.planBadgeDashboard.click();
                break;
            case 'pockets':
                await this.pocketBadgeDashboard.waitForClickable({timeout: config.wait.M});
                await this.pocketBadgeDashboard.click();
                break;
            default:
                throw new Error('Option is not available');

        }
    }

    async openObtainedBadgetModalFromDashboard() {
        await this.obtainedBadgeDashboard.waitForClickable({timeout: config.wait.M});
        await this.obtainedBadgeDashboard.click();
    }

    async _screenValidation({item}) {
        let element;
        switch (item.toLowerCase()) {
            case 'advice financial coach':
                await this.financialCoach.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scoring link':
                await this.scoringLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'targets header category':
                await this.targetsHeaderCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'proposals header category':
                await this.proposalsHeaderCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'badges header category':
                await this.badgesHeaderCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income and expenses modal':
                await this.modalsContainer.expencesModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financial cushion modal':
                await this.modalsContainer.cushionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scoring page':
                await this.scoringPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'badge obtained modal':
                await this.modalsContainer.badgeObtainedModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'improve income and expenses text':
                await this.waitForElementsExist(this.evolutionPageImproveExpensesText);
                element = await this.evolutionPageImproveExpensesText.elements();
                await element.value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'improve financial cushion text':
                await this.waitForElementsExist(this.evolutionPageImproveFinancialCushionText);
                element = await this.evolutionPageImproveFinancialCushionText.elements();
                await element.value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'improve financial cushion and expenses text':
                await this.waitForElementsExist(this.evolutionPageImproveFinancialCushionAndExpensesText);
                element = await this.evolutionPageImproveFinancialCushionAndExpensesText.elements();
                await element.value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new AdviceFinancialCoach();
