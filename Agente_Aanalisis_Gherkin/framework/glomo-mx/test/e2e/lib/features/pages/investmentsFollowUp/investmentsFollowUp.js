import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class InvestmentsFollowUp extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-investmentsFollowUp[state="active"]',
            elements: {
                // LitElement feature
                followUpInvestmentsDashboard: 'follow-up-investments-dashboard-mx',
                backButtonIcon:
                    'follow-up-investments-dashboard-mx bbva-header-main#id-dashboard-header #btn-back',
                selectorByValue:
                    'follow-up-investments-dashboard-mx bbva-tab-default #tabs button:nth-of-type(1)',
                selectorByProfitability:
                    'follow-up-investments-dashboard-mx bbva-tab-default #tabs button:nth-of-type(2)',
                totalInvestment:
                    'follow-up-investments-dashboard-mx bbva-tab-default [slot="content-0"] [data-tag-name="follow-up-investments-dashboard-list-definition-amount"]',
                investmentChart:
                    'follow-up-investments-dashboard-mx bbva-tab-default [slot="content-0"] bbva-data-visualization-linear [data-tag-name="bbva-data-visualization-lines"]',
                moreInfoAccess:
                    'follow-up-investments-dashboard-mx [data-tag-name="follow-up-investments-dashboard-list-link"][heading-icon="spherica:pie-chart"]',
                moreInfoAccessIcon:
                    'follow-up-investments-dashboard-mx [data-tag-name="follow-up-investments-dashboard-list-link"] [data-tag-name="bbva-type-icon"] svg',
                periodSelectedTitle:
                    'follow-up-investments-dashboard-mx #periodSelectedTitle',
                productsCarousel:
                    'follow-up-investments-dashboard-mx [ambient="light100"]:nth-of-type(2) [data-tag-name="bbva-carousel-swipe"] .swiper-slide-active',
                productDefaultCarouselLink:
                    'follow-up-investments-dashboard-mx [ambient="light100"]:nth-of-type(2) [data-tag-name="bbva-carousel-swipe"] .swiper-slide-active [data-tag-name="follow-up-investments-dashboard-card-carousel"] [data-tag-name="bbva-list-link"]',
                productCard:
                    'follow-up-investments-dashboard-mx [role="list"] [role="listitem"]',
                productCardLink:
                    'follow-up-investments-dashboard-mx [role="listitem"] [data-tag-name="follow-up-investments-dashboard-list-default"]',
                feedback:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-form-rating"]',
                feedbackStars:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-form-rating"] #star-container .label-star:nth-of-type(__STARS__)',
                onboarding:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-help-onboarding"][visible]',
                onboardingClose:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-help-onboarding"][visible] [data-tag-name="bbva-help-modal"] .container .controls .close',
                holidaysNotification:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-notification-toast"][show] .container-content',
                infoByProfitability: 'follow-up-investments-dashboard-mx bbva-tab-default[selected="1"]',
                infoByValue: 'follow-up-investments-dashboard-mx bbva-tab-default[selected="0"]',
                faqsAccess:
                    'follow-up-investments-dashboard-mx bbva-header-main #btn-help',
                faqsAccessIcon:
                    'follow-up-investments-dashboard-mx bbva-header-main #btn-help [data-tag-name="bbva-type-icon"] svg',
                faqListOpen:
                    'follow-up-investments-dashboard-mx help-faqs-aem [data-tag-name="bbva-help-modal"][visible]',
                faq1:
                    'follow-up-investments-dashboard-mx help-faqs-aem [data-tag-name="bbva-help-modal"] .link-list-container:nth-of-type(1) [data-tag-name="bbva-type-link"]',
                faq2:
                    'follow-up-investments-dashboard-mx help-faqs-aem [data-tag-name="bbva-help-modal"] .link-list-container:nth-of-type(2) [data-tag-name="bbva-type-link"]',
                faq3:
                    'follow-up-investments-dashboard-mx help-faqs-aem [data-tag-name="bbva-help-modal"] .link-list-container:nth-of-type(3) [data-tag-name="bbva-type-link"]',
                faq4:
                    'follow-up-investments-dashboard-mx help-faqs-aem [data-tag-name="bbva-help-modal"] .link-list-container:nth-of-type(4) [data-tag-name="bbva-type-link"]',
                detailFaq:
                    'follow-up-investments-dashboard-mx help-faqs-aem bbva-help-modal:nth-of-type(2) .detail-content [data-tag-name="bbva-type-text"]',
                customDate:{
                    web: '.__modals-container [data-tag-name="bbva-help-modal"] .content [data-tag-name="follow-up-investments-dashboard-content-modal-edit-period-partial"] bbva-form-date-range',
                    isWithoutRoot: true
                },
                customSave: {
                    web: '.__modals-container [data-id="edit-period-modal"] .content bbva-button-default',
                    isWithoutRoot: true
                },
                chart:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-data-visualization-linear"] [data-tag-name="bbva-data-visualization-lines"]',
                chartMarker:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-data-visualization-lines"] .marker-container .marker',
                periodSelectorYearToDate:
                    'follow-up-investments-dashboard-mx bbva-button-group [data-tag-name="bbva-button-group-item"][value="year-to-date"]',
                periodSelectorThreeMonths:
                    'follow-up-investments-dashboard-mx bbva-button-group [data-tag-name="bbva-button-group-item"][value="three-months"]',
                periodSelectorOneMonth:
                    'follow-up-investments-dashboard-mx bbva-button-group [data-tag-name="bbva-button-group-item"][value="one-month"]',
                periodSelectorOneYear:
                    'follow-up-investments-dashboard-mx bbva-button-group [data-tag-name="bbva-button-group-item"][value="one-year"]',
                periodSelectorTwoYears:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-button-group-item"][value="two-years"]',
                periodSelectorStartInvestment:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-button-group-item"][value="start-investment"]',
                selectorCustomDates:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-button-group"] [class="group scroll"] [data-tag-name="bbva-type-link"]',
                monthlyInformativeMessage:
                    'follow-up-investments-dashboard-mx bbva-notification-toast[alert-text]',
                modalSystemError: {
                    web: '[data-tag-name="bbva-help-modal"][data-id="error-modal"]',
                    isWithoutRoot: true
                },
                systemErrorHeader:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-help-modal"][button-text="Reintentar"] [data-tag-name="bbva-header-main"] #heading',
                errorHeader: {
                    web: '.__modals-container [data-tag-name="bbva-help-modal"][visible] #helpModalHeader #text',
                    isWithoutRoot: true,
                },
                systemErrorCloseButton: {
                    web: '.__modals-container [data-tag-name="bbva-help-modal"][visible] #helpModalHeader #btn-close',
                    isWithoutRoot: true,
                },
                systemErrorTagError: {
                    web: '.__modals-container [data-tag-name="bbva-help-modal"][visible] #helpModalContent',
                    isWithoutRoot: true,
                },
                systemErrorRetryButton: {
                    web: '.__modals-container [data-tag-name="bbva-help-modal"][visible] .modal-footer [data-tag-name="bbva-button-default"]',
                    isWithoutRoot: true,
                },
                termsDescription:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-help-modal"][visible] #title-text',
                termsLink:
                    'follow-up-investments-dashboard-mx #message-terms [data-tag-name="bbva-notification-message"] .link [data-tag-name="bbva-type-link"]',
                recentPublications:
                    'follow-up-investments-dashboard-mx .financialHealthContainer [data-tag-name="bbva-header-category"]',
                financialHealthCarousel:
                    'follow-up-investments-dashboard-mx .financialHealthContainer #swipeFullScreen .steps',
                financialHealthCarouselCount:
                    'follow-up-investments-dashboard-mx .financialHealthContainer #swipeFullScreen #swipeFullScreen',
                articleBackButton:
                    '.financialHealthContainer [data-tag-name="bbva-help-modal"][visible] [data-tag-name="bbva-header-main"] #btn-back',
                totalInvestmentProfitability:
                    'follow-up-investments-dashboard-mx bbva-tab-default [slot="content-1"] [data-tag-name="follow-up-investments-dashboard-list-definition-amount"] .heading-wrapper bbva-type-amount',
                totalInvestmentProfitabilityEarnings:
                    'follow-up-investments-dashboard-mx bbva-tab-default [slot="content-1"] [data-tag-name="follow-up-investments-dashboard-list-definition-amount"] .description-wrapper bbva-type-amount',
                linkSeeTerms:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                seeMoreArticle:
                    '.financialHealthContainer [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                selectorIconTotalInvestment:
                    'follow-up-investments-dashboard-mx [slot="content-0"] [data-tag-name="follow-up-investments-dashboard-list-definition-amount"] [data-tag-name="bbva-type-link"]',
                selectorArticleData:
                    'follow-up-investments-dashboard-mx [data-tag-name="bbva-help-modal"] #article-0',
                contractsExpandablePanel:
                    'follow-up-investments-dashboard-mx #showCardsProducts',
                contractsExpandablePanelExpanded:
                    'follow-up-investments-dashboard-mx #showCardsProducts[aria-expanded="true"]',
                contractsDetail:
                    'follow-up-investments-dashboard-mx [data-tag-name="follow-up-investments-dashboard-list-default"]',
            },
            requiredElements: ['followUpInvestmentsDashboard'],
        });
    }

    async _screenValidation({item, _args}) {
        switch (item.toLowerCase()) {
            case 'follow up investments dashboard':
                await this.followUpInvestmentsDashboard.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: _args.notVisible
                });
                break;
            case 'selector by value':
                await this.selectorByValue.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'selector by profitability':
                await this.selectorByProfitability.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: _args.notVisible
                });
                break;
            case 'total investment':
                await this.totalInvestment.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'investment chart':
                await this.investmentChart.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period one month':
                await this.periodSelectorOneMonth.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period three months':
                await this.periodSelectorThreeMonths.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period year to date':
                await this.periodSelectorYearToDate.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period one year':
                await this.periodSelectorOneYear.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period two years':
                await this.periodSelectorTwoYears.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'period start investment':
                await this.periodSelectortartInvestment.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'custom dates':
                await this.selectorCustomDates.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'monthly informative message':
                await this.monthlyInformativeMessage.waitForDisplayed({timeout: config.wait.XS, reverse: _args.notVisible});
                break;
            case 'header':
                await this.systemErrorHeader.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'error header':
                await this.errorHeader.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'closebutton':
                await this.systemErrorCloseButton.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'tag error':
                await this.systemErrorTagError.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'exitbutton':
                await this.systemErrorRetryButton.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'more info access':
                await this.moreInfoAccess.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'selected period title':
                await this.periodSelectedTitle.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'products carousel':
                await this.productsCarousel.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'product card':
                await this.productCard.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'feedback':
                await this.feedback.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq list open':
                await this.faqListOpen.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq1':
                await this.faq1.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq2':
                await this.faq2.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq3':
                await this.faq3.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq4':
                await this.faq4.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'faq detail':
                await this.detailFaq.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'onboarding':
                await this.onboarding.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'back button':
                await this.backButtonIcon.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'icons':
                await this.backButtonIcon.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                await this.faqsAccessIcon.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                await this.moreInfoAccessIcon.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'terms description':
                await this.termsDescription.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'terms link':
                await this.termsLink.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'recent publications':
                await this.recentPublications.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'carousel':
                await this.financialHealthCarousel.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'number of carousel':
                await this.financialHealthCarouselCount.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'contracts expandable panel expanded':
                await this.contractsExpandablePanelExpanded.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            case 'show first contract': {
                await this.waitForElementsExist(this.contractsDetail);
                const contract = (await this.contractsDetail.elements()).value[0];
                await contract.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            }
            case 'show second contract': {
                await this.waitForElementsExist(this.contractsDetail);
                const contractSecond = (await this.contractsDetail.elements()).value[1];
                await contractSecond.waitForDisplayed({timeout: config.wait.M, reverse: _args.notVisible});
                break;
            }
            default:
                throw new ScreenValidationKeyNotFound({
                    key: item,
                    args: arguments[0],
                });
        }
    }

    async accessMyInvestmentsDistributionOfInvestments() {
        await (await this.moreInfoAccess.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async checkTotalInvestmentData(attributes = []) {
        if (this.isSpherica()) {
            await this.totalInvestmentProfitability.waitForDisplayed({timeout: config.wait.M});
            await this.totalInvestmentProfitabilityEarnings.waitForDisplayed({timeout: config.wait.M});

            for (const {attrName, value} of attributes) {
                if (attrName === 'description') {
                    await this.totalInvestmentProfitabilityEarnings.waitForAttribute({
                        attribute: 'amount',
                        value,
                        timeout: config.wait.M
                    });
                } else {
                    await this.totalInvestmentProfitability.waitForAttribute({
                        attribute: attrName,
                        value,
                        timeout: config.wait.M
                    });
                }
            }
        } else {
            await this.totalInvestment.waitForDisplayed({timeout: config.wait.M});

            for (const {attrName, value} of attributes) {
                let attrValue = await this.totalInvestment.getAttribute({name: attrName});

                attrValue = attrValue.replace('Ganancias', '').trim();

                if (attrValue !== value) {
                    throw new Error(`The total investment ${attrName} '${attrValue}' isn't correct: Correct value is '${value}'`);
                }
            }
        }
    }

    async checkUploadedInformation(amount) {
        const totalInvestment = this.isSpherica() ? this.totalInvestmentProfitability : this.totalInvestment;

        await totalInvestment.waitForDisplayed({timeout: config.wait.M});
        await totalInvestment.waitForAttribute({
            attribute: 'amount',
            value: amount,
            timeout: config.wait.L,
            reverse: false,
        });
    }

    async closeOnboarding() {
        await (await this.onboardingClose.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async closeHolidaysNotification() {
        try {
            await (await this.holidaysNotification.waitForDisplayed({timeout: config.wait.M})).click();
        } catch {
            // Do nothing
        }
    }

    async openFaq(faq) {
        await (await this[faq].waitForDisplayed({timeout: config.wait.M})).click();
    }

    async openCustomDate(startDate, endDate) {
        await (await this.selectorCustomDates.waitForDisplayed({timeout: config.wait.M})).click();
        await this.customDate.waitForDisplayed({timeout: config.wait.M});
        await this.changeDate('start', startDate);
        await this.changeDate('end', endDate);
    }

    async changeDate(typeDate, date) {
        await this.customDate.execute({
            script: (value, type) => type === 'start' ? this.setStartDate(value) : this.setEndDate(value),
            args: [date, typeDate],
        });
    }

    async openFaqs() {
        await (await this.faqsAccess.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectChartBy(type) {
        switch (type) {
            case 'value':
                await this.selectorByValue.click();
                if (this.isSpherica()) {
                    await this.infoByValue.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'profitability':
                await this.selectorByProfitability.click();
                if (this.isSpherica()) {
                    await this.infoByProfitability.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new Error('Specify a valid type of chart [ value | profitability ]');
        }
    }

    async selectChartPosition(position) {
        await this.chartMarker.waitForDisplayed({ timeout: config.wait.M });
        await this.chartMarker.waitForClickable({ timeout: config.wait.M });
        await this.chartMarker.dragAndDrop({
            target: {
                x: {
                    value: position,
                    type: 'relative',
                },
            },
            duration: config.wait.S,
        });
    }

    async selectPeriod(period) {
        switch (period) {
            case 'three months':
                await (await this.periodSelectorThreeMonths.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            case 'one month':
                await (await this.periodSelectorOneMonth.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            case 'one year':
                await (await this.periodSelectorOneYear.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            case 'two years':
                await (await this.periodSelectorTwoYears.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            case 'start investment':
                await (await this.periodSelectorStartInvestment.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            case 'custom dates':
                await (await this.periodSelectorCustomDates.waitForDisplayed({
                    timeout: config.wait.M,
                })).click();
                break;
            default:
                throw new Error('Specify a valid period');
        }
    }

    async selectFeedback(stars) {
        await this.feedbackStars
            .specifySelector({
                placeholder: '__STARS__',
                value: stars,
            })
            .click();
    }

    async selectProduct() {
        if (this.isSpherica()) {
            await (await this.productCard
                .scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M});

            await (await this.productCardLink
                .waitForClickable({timeout: config.wait.M}))
                .click();
        } else {
            await (await this.productsCarousel
                .scrollIntoView())
                .waitForDisplayed({timeout: config.wait.M});

            await (await this.productDefaultCarouselLink
                .waitForClickable({timeout: config.wait.M}))
                .click();
        }
    }

    async _throwSystemErrorModal() {
        await Commands.pause({time: config.wait.XS});
        await this.modalSystemError.execute({
            script: () => this.setAttribute('visible', true),
            args: [],
        });
    }

    async systemError() {
        await this._throwSystemErrorModal();
        await this.modalSystemError.waitForDisplayed({timeout: config.wait.M});
    }

    async retrySystemError() {
        await (await this.systemErrorRetryButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async saveCustomDates() {
        await(await this.customSave.waitForClickable({timeout: config.wait.M})).click();
    }

    async showTermDescriptionModal() {
        await (await this.linkSeeTerms.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showMoreArticles() {
        await (await this.seeMoreArticle.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showDescriptionGraph() {
        await(await this.selectorIconTotalInvestment.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showArticleData() {
        await(await this.selectorArticleData.waitForDisplayed({timeout: config.wait.M})).click();
    }
    async closeSectionRecentPosts() {
        await (await this.articleBackButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showMoreProducts() {
        await (await this.contractsExpandablePanel.waitForDisplayed({timeout: config.wait.M})).click();
    }
}

export default new InvestmentsFollowUp();
