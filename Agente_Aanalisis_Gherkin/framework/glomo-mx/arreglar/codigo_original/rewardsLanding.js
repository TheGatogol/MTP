import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page, Commands} from '@csqe/radish';

import BbvaAggregationCardList from '../../components/bbva-aggregation-card-list';
import BbvaAggregationCardListSpherica from '../../components/bbva-aggregation-card-list-spherica';
import BbvaAggregationSimpleList from '../../components/bbva-aggregation-simple-list';
import BbvaHeaderCategory from '../../components/bbva-header-category';
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';
import BbvaPanelInfo from '../../components/bbva-panel-info';
import BbvaTabDefault from '../../components/bbva-tab-default';
import RewardsLoyaltyPointsTransactions from '../../components/rewards-loyalty-points-transactions';
import BbvaNotificationMessage from '../../components/bbva-notification-message';
import BbvaNotificationMessageSpherica from '../../components/bbva-notification-message-spherica';

@page('rewardsLanding')
class RewardsLanding extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-reward[state="active"]',
            elements: {
                onboardingModal: [BbvaHelpModal, {
                    prefix: '[data-tag-name="onboarding-full-screen-carousel"]',
                    modifiers: '[data-id="modalOnboardingFullScreenCarousel"][visible]',
                    additionalElements: {
                        acceptButton: '.footer [data-tag-name="bbva-button-default"]'
                    }
                }],
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain, args: {
                            modifiers: '[text="rewards-landing-header-title"]',
                        }
                    }
                },

                tab: {
                    component: {
                        ComponentClass: BbvaTabDefault, args: {
                            scoped: true,
                        }
                    }
                },

                pointsToExpire: {
                    component: {
                        ComponentClass: BbvaAggregationSimpleList, args: {
                            scoped: true, modifiers: ':not([hidden])',
                        }
                    }
                },

                messagePointsToExpire: {
                    component: {
                        ComponentClass: BbvaAggregationSimpleList, args: {
                            scoped: true,
                        }
                    }
                },

                lastTransactionsTooltip: {
                    component: {
                        ComponentClass: BbvaHeaderCategory, args: {
                            scoped: true, modifiers: '[text="Últimos movimientos"]',
                        }
                    }
                },

                continueButtonPromos: 'div[class="promotion"] [data-tag-name="bbva-panel-button"]',

                noTransaction: {
                    properties: {
                        root: '[data-tag-name="rewards-loyalty-points-transactions"]'
                    },
                    noTransactionsDateImage: '.points [data-tag-name="bbva-panel-info"] .image',
                    noTransactionsPeriodImage: '[data-tag-name="bbva-expandable-accordion"] [icon-clip="bbva:point"]',
                    helpTransactionsAccess: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-icon"]',
                },

                //Use my points modal
                useMyPointsModal: {
                    properties: {
                        root: '[data-selector="rewards-landing-purchase-options-page"]'
                    },
                    usePointsDescription: '[data-tag-name="bbva-text"]',
                    pointsTransfer: '[data-tag-name="bbva-list-clip"][heading="Transferencia de puntos"]',
                    pointsRaffle: '[data-tag-name="bbva-list-clip"][heading="Sorteos BBVA"]',
                    payWithPointsIOS: '[data-tag-name="bbva-list-clip"][heading="Paga con tus puntos"] .content-clip',
                    payWithPointsAndroid: '[data-tag-name="bbva-list-clip"][heading="Paga con tus puntos"]',
                },

                //useMyPointsTooltip
                infoTooltip: {
                    component: {
                        ComponentClass: BbvaPanelInfo, args: {
                            scoped: true, prefix: '[data-tag-name="bbva-transition-container"]',
                        }
                    }
                },

                modalTerms: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"]'
                    },
                    termsAndConditions: '[data-tag-name="bbva-list-link"]',
                    understoodButton: '[data-tag-name="bbva-button-default"]',
                },

                //Faqs Using my points
                usingMyPointsFaqsButton: {
                    component: {
                        ComponentClass: BbvaHeaderMain, args: {
                            prefix: '[data-tag-name="rewards-landing-page"][mode="purchaseOptions"] [data-tag-name="bbva-transition-container"]',
                        }
                    }
                },

                rewardsFaqModal: [BbvaHelpModal, {
                    root: {
                        web: `${BbvaHelpModal._baseRoot}[data-selector="rewards-landing-modal-detail-faqs"].faqs[visible]`,
                        isWithoutRoot: true
                    }, additionalElements: {
                        headerFaqs: '[data-tag-name="bbva-header-main"][variant="modal"]',
                        faqsTips: '[data-tag-name="help-faqs-aem"] [data-tag-name="bbva-list-link"]',
                    }
                }],

                //errors
                errorAvailablePoints: {
                    component: {
                        ComponentClass: BbvaTabDefault, args: {
                            scoped: true, prefix: 'div.wrapper-rewards-landing',
                        }
                    }
                },

                //help modal
                modal: {
                    properties: {
                        root: '[data-selector="rewards-landing-how-to-get-points-modal"]'
                    },
                    infoIconTooltipModal: '[data-tag-name="bbva-panel-info"] .image',
                    howToCollectPointsModal: '[data-tag-name="bbva-text"].text-wrapper',
                    termsAndConditionsModal: '[data-tag-name="bbva-list-bullet"]',
                    understoodButtonModal: '.help-modal [data-tag-name="bbva-button-default"]',
                },
                helpModalRewards: [BbvaHelpModal, {
                    modifiers: '[visible]'
                }],
                helpModalExit: [BbvaHelpModal, {
                    modifiers: '[button-text="Salir"]'
                }],
                aggregationCardList: {
                    component: {
                        ComponentClass: BbvaAggregationCardList, args: {
                            scoped: true, modifiers: ':not([hidden])',
                        }
                    }
                },

                listTransactionsByPeriod: {
                    component: {
                        ComponentClass: RewardsLoyaltyPointsTransactions, args: {
                            scoped: true,
                        }
                    }
                },

                access: {
                    properties: {
                        root: '[data-tag-name="rewards-loyalty-points-transactions"] [data-tag-name="bbva-tab-default"] div#tabs'
                    }, datesAccessButton: ' button#tab-0', periodAccessButton: 'button#tab-1',
                },

                detailTdc: 'bbva-aggregation-card-list bbva-list-card[num-product="__PRODUCT_ID__"]',
                //PROMOTIONS
                tabPoints: '[data-tag-name="bbva-tab-default"] #tabs button#tab-0.tab[aria-selected="false"]',
                messageErrorPromotionList: [BbvaNotificationMessage, {
                    prefix: '.promotions-list-scroll',
                }],
                messageErrorCarousel: [BbvaNotificationMessage, {
                    prefix: '.notification-error-message',
                }],

                tabPromotionsSelected: '[data-tag-name="bbva-tab-default"] #tabs button#tab-1.tab[aria-selected="true"]',
                inputSearch: '.promotions-search [data-tag-name="bbva-form-search"][label="Buscar promociones"]',

                //CAROUSEL
                //Especial promotion
                especialPromotionsTitle: '[data-tag-name="bbva-header-category"][text="PROMOCIONES ESPECIALES"]',
                especialPromotionsViewMore: '[text="PROMOCIONES ESPECIALES"] [data-tag-name="bbva-link"]',
                especialPromotionsSlide: '.swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-article"]',
                especialPromotionsImage: '.swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-article"] img.header-img',
                especialImageMissing: '.swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-article"] .image-container .missing-image',
                especialSlideTitle: '.swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-article"] .content .title ',
                especialCarouselCardControl: 'div.carousel-container:nth-of-type(2) [data-tag-name="bbva-card-control"]',

                //Favourite promotion
                favouritePromotionsCarousel: '[text="rewards-promotions-mx-favorite-carousel-title"]',
                favouritePromotionsViewMore: '[text="rewards-promotions-mx-favorite-carousel-title"] [data-tag-name="bbva-link"]',
                favouriteImageCarousel: '.favorite-carousel.carousel-container .swiper-slide.swiper-slide-active .image-container .image',
                favouriteCardControl: '.favorite-carousel.carousel-container [data-tag-name="bbva-carousel-default"]',
                favouriteImageMissing: '.favorite-carousel.carousel-container .swiper-slide.swiper-slide-active .image-container .missing-image',
                favouriteTitle: '.favorite-carousel.carousel-container .swiper-slide.swiper-slide-active .main-text .title',
                favouriteModifyLink: '.favorite-carousel-change-link',
                favouriteRemoveLink: '.favorite-carousel-remove-link',

                panelFavouriteCategories: '.basic-info-panel',
                //panel favourite without selected
                panelFavourite: {
                    properties: {
                        root: '.basic-info-panel'
                    },
                    panelFavouriteCategoriesTitle: '[data-tag-name="bbva-header-category"][text="Favoritas"]',
                    panelFavouriteCategoriesText: '.content-text [data-tag-name="bbva-text"] .text.lines',
                    panelFavouriteCategoriesImage: '.content-image',
                    panelFavouriteCategoriesLink: '.content-text [data-tag-name="bbva-link"]',
                    panelFavouriteCategoriesNoPromoImage: 'div.microillustration',
                },

                //Generic
                promotionsCarousel: 'div.carousel-container [data-tag-name="bbva-carousel-default"]',
                promotionsCarouselCardControl: 'div.carousel-container [data-tag-name="bbva-card-control"]',
                promotionsCarouselSlideImage: '.swiper-slide.swiper-slide-active .image-container .missing-image',
                promotionsCarouselTitle: '.swiper-slide.swiper-slide-active .main-text .title',
                promotionsViewMore: '[text="__TYPE__"] [data-tag-name="bbva-link"]',

                //PROMOTION LIST
                promotionsList: '[data-tag-name="bbva-transition-container"][visible].promotions-list',
                listPromotion: '.promotions-list .promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"]',

                //categories favourite
                headerFavourites: '[aria-label="Elegir favoritas"]',
                imageFavourites: '.col-content [data-tag-name="rewards-promotions-mx-panel-info"] .image',
                titleFavourites: '.col-content [data-tag-name="rewards-promotions-mx-panel-info"] .content .title',
                descriptionFavourites: '.col-content [data-tag-name="rewards-promotions-mx-panel-info"] .content .description',
                checkListFavourites: '.categories-checkboxes',
                checkRowCategories: '[data-tag-name="bbva-form-checkbox"]',

                //small help modal
                smallHelpModal: {
                    properties: {
                        root: '.help-modal .modal-main'
                    },
                    iconHelpModal: '#helpModalTitle.modal-title [data-tag-name="bbva-icon"]',
                    titleHelpModal: '#helpModalTitle #title-text',
                    textHelpModal: '.modal-container #helpModalContent.modal-content .slot-content',
                    buttonHelpModal: '.slot-footer [data-tag-name="bbva-button-default"]',
                    linkHelpModal: '.modal-footer .slot-footer [data-tag-name="bbva-link"].footer-button',
                },

                panelInfoImage: 'rewards-promotions-mx-panel-info .image',
                panelInfoContentTitle: 'rewards-promotions-mx-panel-info .content [data-tag-name="bbva-text"].title',
                panelInfoContentText: 'rewards-promotions-mx-panel-info .content [data-tag-name="bbva-text"].description',

                //big help modal
                bigHelpModal: {
                    header: '[data-tag-name="bbva-header-main"][text="Elegir favoritas"][accessibility-text-icon-right-primary="rewards-promotions-mx-accesibility-icon-right-text"]',
                    closeBtn: '[data-tag-name="rewards-promotions-mx-modal"][mode="error"] [data-tag-name="bbva-header-main"][text="Elegir favoritas"] #btn-right-primary',
                    exitButton: '[data-tag-name="rewards-promotions-mx-modal"][mode="error"] [data-tag-name="bbva-link"][class="footer-button"]',
                    iconModal: '[data-tag-name="rewards-promotions-mx-panel-info"] .image',
                    titleModal: '[data-tag-name="rewards-promotions-mx-panel-info"] .content .title',
                    descriptionModal: '[data-tag-name="rewards-promotions-mx-panel-info"] .content .description',
                },
                buttonCloseFavourite: '[aria-label="rewards-promotions-mx-accesibility-icon-right-text"]',

                //Promotions Searcher
                promotionSearcher: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-mx-modal"][mode="search"]'
                    },
                    headerSearcher: '[data-tag-name="bbva-help-modal"][header-text="Buscar promociones"]',
                    backButtonHeader: '[data-tag-name="bbva-help-modal"][header-text="Buscar promociones"] button#btn-left-primary',
                    exitButton: '[data-tag-name="bbva-help-modal"][header-text="Buscar promociones"] button#btn-right-primary',
                    inputTextLastSearches: '[data-tag-name="bbva-help-modal"] div.predictive-search [data-tag-name="rewards-promotions-mx-form-predictive"] .list .list-item .item',
                    removeTextLastSearches: '[data-tag-name="bbva-help-modal"] div.predictive-search [data-tag-name="rewards-promotions-mx-form-predictive"] .list .list-item .delete-item',
                    inputTextSearcher: '[data-tag-name="bbva-help-modal"][visible] div.predictive-search [data-tag-name="rewards-promotions-mx-form-predictive"] div.search [data-tag-name="bbva-form-text"] input',
                    inputTextWarning: '[data-tag-name="bbva-help-modal"] div.predictive-search [data-tag-name="rewards-promotions-mx-form-predictive"] [data-tag-name="bbva-notification-help"]',
                    retryWarningModal: '[data-tag-name="bbva-help-modal"][modal-type="warning"][visible] .help-modal .modal-footer [data-tag-name="bbva-button-default"]',

                    categoriesTitle: 'div.search-checkboxes div.filter-block [data-tag-name="bbva-header-category"][text="CATEGORÍAS"]',
                    elementsList: '[data-tag-name="bbva-help-modal"][button-text="Buscar"] div.search-checkboxes div',
                    elementsListFilter: 'div.search-checkboxes div.filter-block div.filter-list div.categories-list__item [id="__ID__"]',
                    elementsListFilterSelected: 'div.search-checkboxes div.filter-block div.filter-list div.categories-list__item [checked]',
                    showAllCategories: 'div.search-checkboxes div.filter-block [data-tag-name="bbva-expandable-panel"][aria-label*="Mostrar todas"]',
                    showLessCategories: 'div.search-checkboxes div.filter-block [data-tag-name="bbva-expandable-panel"][aria-label="Dejar de mostrar"]',

                    usageTypeTitle: 'div.search-checkboxes div.filter-block [data-tag-name="bbva-header-category"][text="MODALIDAD"]',
                    locationTitle: 'div.search-checkboxes div.filter-block [data-tag-name="bbva-header-category"][text="UBICACIÓN"]',
                    locationOption: 'div.search-checkboxes div.filter-block [message="Cerca de ti (20km)"]',
                    locationWarning: 'div.search-checkboxes div.filter-block div.filter-list [data-tag-name="bbva-notification-help"]',

                    typePromotionTitle: '[data-tag-name="bbva-header-category"][text="TIPO DE PROMOCIÓN"]',
                    typePromotionFilter: 'div.search-checkboxes div.filter-list [id="__ID__"]',
                    searchPromoButton: '[data-tag-name="bbva-help-modal"][button-text="Buscar"] .modal-main .modal-footer [data-tag-name="bbva-button-default"]',
                    removePromoButton: '[data-tag-name="bbva-help-modal"][button-text="Buscar"] .modal-main .modal-footer [data-tag-name="bbva-link"]',
                },
                backButtonHeaderResults: '[header-text="Resultados"] button#btn-left-primary',

                //Results screen
                headerResults: '[data-tag-name="bbva-header-main"][text="Resultados"]',
                backButtonResultsHeader: '[data-tag-name="bbva-header-main"][text="Resultados"] #btn-left-primary',
                results: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"]',
                    },
                    filters: 'div.filter-stores .filters',
                    filterTags: 'div.filter-stores .filters .tag [data-tag-name="bbva-text"]',
                    removeFilterTags: 'div.filter-stores .filters .tag [data-tag-name="bbva-link"]',
                    editFilterTags: 'div.filter-stores .filters .tag-edit [data-tag-name="bbva-link"]',
                    promotionsFilteredList: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"]',
                    promotionsFilteredName: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"] div.main-text [data-tag-name="bbva-text"].title',
                    noResultsMessage: '[data-tag-name="rewards-promotions-mx-panel-info"].empty-state',

                    promotionsFilteredBenefits: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"] div.main-text div.categories-container--full-width',
                    promotionsFilteredBenefitsDescription: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"] div.main-text [data-tag-name="bbva-text"].description',
                    promotionsFilteredBenefitsDate: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"] div.bot-part span',
                    promotionsFilteredBenefitsModality: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card-sale"] div.bot-part div.categories-container [data-tag-name="bbva-badge-icon"]',

                    errorPromotionListRetryButton: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"][text="Reintentar"]',
                    errorPromotionResultsCallBbvaButton: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"]',
                    errorPromotionResultsRetryButton: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-link"]',
                    errorPromotionListGoBackButton: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"][text="Volver"]',
                    errorPromotionListImage: '[data-tag-name="rewards-promotions-mx-panel-info"] .image',
                    errorPromotionListDescription: '[data-tag-name="rewards-promotions-mx-panel-info"] .content',
                    errorPromotionListTitle: '[data-tag-name="rewards-promotions-mx-panel-info"] .content .title'
                },

                errorHalfModal: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-mx-modal"][mode="halfError"] [data-tag-name="bbva-help-modal"]'
                    },
                    imageError: '[data-tag-name="bbva-icon"]',
                    textError: '#helpModalContent',
                    title: 'h2.text.lines',
                    buttonTryAgain: '[data-tag-name="bbva-button-default"]',
                    buttonExit: '[data-tag-name="bbva-link"]',
                },

                error: {
                    properties: {
                        root: '.promotions-list [data-tag-name="bbva-notification-message"]'
                    },
                    errorTooltipResultsExitButton: '[data-tag-name="bbva-button-default"]',
                    errorTooltipResultsRetryButton: '[data-tag-name="bbva-link"]',
                    errorTooltipResultsDescription: '.paragraph',
                    errorTooltipResultsIcon: '[data-tag-name="bbva-icon"]',
                },

                modalBigError: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-mx-page"][mode="detail"]'
                    },
                    imageError: '.image',
                    textError: 'p.text.lines',
                    headerError: 'h2.text.lines',
                    buttonTryAgain: '[data-tag-name="bbva-button-default"]',
                    buttonReturn: '[data-tag-name="bbva-link"]',
                    linkReturn: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-link"]',
                },

                promotionDetail: {
                    content: {
                        infoPromotionDetail: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-card-article"]',
                        imagePromotionDetail: '.image-container',
                        imageHeaderPromotionDetail: '.image-container .header-img',
                        imageMissingPromotionDetail: '.image-container .missing-image',
                        promotionTitle: '[data-selector="promotion-detail-extended-description-title"]',
                        promotionDescription: '[data-selector="promotion-detail-extended-description"]',
                        linkTermsPromotion: '[data-tag-name="bbva-transition-container"][visible] .promotion-detail-scroll bbva-link[data-tag-name="bbva-link"]',
                        cardTitle: '[data-tag-name="bbva-header-category"][text="TARJETAS PARTICIPANTES"]',
                        cardInfo: '.participant-card-content',
                        cardImage: '.participant-card-content [data-tag-name="bbva-clip-card"]',
                        cardName: '.participant-card-name',
                        cardViewMore: '[data-tag-name="bbva-expandable-panel"] [data-tag-name="bbva-link"]',
                        storeTitle: '[data-tag-name="bbva-header-category"][text="ESTABLECIMIENTOS"]',
                        linkStoreName: '.promotions-list .store bbva-link[data-tag-name="bbva-link"]',
                        detailStore: '.promotions-list [data-selector="promotion-detail-store-description-list"]',
                        storeViewMore: '[data-tag-name="bbva-header-category"][option-link="Ver todos"] [data-tag-name="bbva-link"]',
                    },

                    aboutStore: '[data-selector="promotion-detail-about-stores-title"]',
                    aboutStoreDescription: '[data-selector="promotion-detail-store-description"]',
                    aboutStoreLink: '[data-tag-name="bbva-link"].about-stores-link',

                    modalTerms: [BbvaHelpModal, {
                        modifiers: '[header-text="Términos y condiciones"]', additionalElements: {
                            icon: '.image',
                            title: '[data-tag-name="bbva-text"].title',
                            description: '[data-tag-name="bbva-text"].description',
                            closeButton: '[data-tag-name="bbva-button-default"]'
                        }
                    }],
                }
            },
            elementsSpherica: {
                noTransaction: {
                    properties: {
                        root: '[data-tag-name="rewards-loyalty-points-transactions"]'
                    },
                    noTransactionsDateImage: '.points [data-tag-name="bbva-clip-microillustration"]',
                    noTransactionsPeriodImage: 'div.panel-content-rewards:nth-of-type(1)',
                },
                tab: {
                    component: {
                        ComponentClass: BbvaTabDefault, args: {
                            scoped: true,
                        }
                    }
                },
                //Faqs Using my points
                usingMyPointsFaqsButton: {
                    component: {
                        ComponentClass: BbvaHeaderMain, args: {
                            prefix: '[data-tag-name="bbva-transition-container"]',
                        }
                    }
                },
                useMyPointsModal: {
                    properties: {
                        root: '[data-tag-name="rewards-landing-purchase-options-section"]'
                    },
                    usePointsDescription: '[data-tag-name="bbva-type-text"]',
                    pointsTransfer: '[data-tag-name="rewards-landing-list-card"][title-text="Transferencia de puntos"]',
                    pointsRaffle: '[data-tag-name="rewards-landing-list-card"][title-text="Sorteos BBVA"]',
                    payWithPointsIOS: '[data-tag-name="bbva-list-clip"][title-text="Paga con tus puntos"] .content-clip',
                    payWithPointsAndroid: '[data-tag-name="bbva-list-clip"][title-text="Paga con tus puntos"]',
                    image: '[data-tag-name="bbva-type-icon"]',
                    description: '[data-tag-name="bbva-type-text"].description',
                    termsAndConditions: '[data-tag-name="rewards-landing-list-card"]',
                },
                onboardingModal: [BbvaHelpModal, {
                    modifiers: '[visible]',
                    additionalElements: {
                        acceptButton: '[data-tag-name="bbva-button-default"].action-button',
                        closeBtn: 'button.close',
                    }
                }],
                aggregationCardList: {
                    component: {
                        ComponentClass: BbvaAggregationCardListSpherica, args: {
                            scoped: true, modifiers: ':not([hidden])',
                        }
                    }
                },
                detailTdc: '[data-tag-name="bbva-aggregation-card-list-spherica"] [data-tag-name="bbva-custom-list-card"][num-product="__PRODUCT_ID__"]',
                rewardsFaqModal: [BbvaHelpModal, {
                    root: {
                        web: `${BbvaHelpModal._baseRoot}[visible]`,
                        isWithoutRoot: true
                    }, additionalElements: {
                        headerFaqs: '[data-tag-name="bbva-header-main"][variant*="modal"]',
                        faqsTipsSpherica: 'div [data-tag-name="bbva-type-link"]'
                    }
                }],

                //PROMOTIONS
                messageErrorPromotionList: [BbvaNotificationMessageSpherica, {
                    prefix: '.promotions-list-scroll .promotions-container', scoped: true
                }],
                messageErrorCarousel: [BbvaNotificationMessageSpherica, {
                    prefix: '[data-tag-name="rewards-promotions-mx-page"][mode="list"]', scoped: true
                }],

                inputSearch: '[data-tag-name="rewards-promotions-mx-page"] .promotions-search-section [data-tag-name="rewards-promotions-mx-fake-search-input"][label="Buscar promociones"]',
                linkPromotionDetail: '#tab-default > div:nth-child(1) > rewards-promotions-card button',

                //CAROUSEL
                //Especial promotion
                especialPromotionsSlideActive: '[header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active [promotion-title="__NAME__"]',
                especialPromotionsTitle: '[data-tag-name="bbva-header-category"][text*="Promociones"]',
                especialPromotionsViewMore: '[text*="Promociones"] [data-tag-name="bbva-type-link"]',
                especialPromotionsSlide: '[header-text*="Promociones"] [data-tag-name="bbva-carousel-default"] .swiper-slide.swiper-slide-active',
                especialPromotionsImage: '[header-text*="Promociones"] .swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-image"]',
                especialImageMissing: '[header-text*="Promociones"] .swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card-image"] .missing-image',
                especialSlideTitle: '[header-text*="Promociones"] .swiper-slide.swiper-slide-active [data-tag-name="rewards-promotions-mx-card"] .promotion-title',
                especialCarouselCardControl: '[header-text*="Promociones"] .chevrons',
                nextbutton: '[header-text="Promociones especiales"] [class="chevron-button chevron-next"]',

                //Favourite promotion
                favouritePromotionsCarousel: '[data-tag-name="rewards-promotions-mx-section"][header-text="Favoritas"] [data-tag-name="bbva-carousel-default"]',
                favouritePromotionsViewMore: '[data-tag-name="rewards-promotions-mx-section"][header-text="Favoritas"] [data-tag-name="bbva-type-link"]',
                favouriteImageCarousel: '[header-text="Favoritas"] [data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active [data-tag-name="rewards-promotions-mx-card-image"]',
                favouriteCardControl: '[header-text="Favoritas"] [data-tag-name="bbva-carousel-default"] .steps .chevrons',
                favouriteImageMissing: '[header-text="Favoritas"] [data-tag-name="bbva-carousel-default"] [data-tag-name="rewards-promotions-mx-card-image"] .missing-image',
                favouriteNoPromoImage: '[header-text="Favoritas"] [data-tag-name="rewards-promotions-mx-panel-info"] [data-tag-name="bbva-clip-microillustration"]',
                favouriteTitle: '[header-text="Favoritas"] .title-container',
                favouriteModifyLink: '[header-text="Favoritas"] [data-tag-name="bbva-type-link"][aria-label="Ver todas"]',
                favouritePromotionText: '[header-text="Favoritas"] [data-tag-name="bbva-type-text"].description',

                favouriteCategoriesArea: '[data-tag-name="rewards-promotions-mx-section"][header-text="Favoritas"]',
                panelFavouriteCategories: '[data-tag-name="rewards-promotions-mx-section"][header-text="Favoritas"] [data-tag-name="rewards-promotions-mx-link-card"]',
                panelFavouriteCategoriesSeeAll: '[data-tag-name="rewards-promotions-mx-section"][header-text="Favoritas"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"][aria-label="Ver todas"]',
                panelFavouriteCategoriesRemoveButton: '.favorite-categories-toolbar [data-tag-name="bbva-type-text"][text="Eliminar favoritas"]',
                panelFavouriteCategoriesEditButton: '.favorite-categories-toolbar [data-tag-name="bbva-type-text"][text="Editar favoritas"]',
                tabs: '#tab-default #tabs button',

                confirmDeleteCategoriesButton: {
                    web: '[id-modal="removeFavoriteCategories"] [data-tag-name="bbva-button-default"][text*="Eliminar"]',
                    isWithoutRoot: true
                },
                keepCategoriesButton: {
                    web: '[id-modal="removeFavoriteCategories"] [data-tag-name="bbva-button-default"].footer-button.link',
                    isWithoutRoot: true
                },

                //panel favourite without selected
                panelFavourite: {
                    properties: {
                        root: '[data-selector="rewards-promotions-mx-favorite-categories-link-card"][data-tag-name="rewards-promotions-mx-link-card"]'
                    },
                    panelFavouriteCategoriesTitle: '[data-tag-name="bbva-type-text"][text="Elige las categorías favoritas"] span.text',
                    panelFavouriteCategoriesText: '.description',
                    panelFavouriteCategoriesImage: '[data-tag-name="bbva-type-icon"]',
                    panelFavouriteCategoriesNoPromoImage: '[data-tag-name="bbva-clip-microillustration"]',
                    panelFavouriteCategoriesLink: 'button [data-tag-name="bbva-type-text"]'
                },

                //Generic
                promotionsCarousel: '[data-tag-name="rewards-promotions-mx-section"][variant="carrousel-section"]',
                promotionsCarouselCardControl: '[data-tag-name="rewards-promotions-mx-section"][variant="carrousel-section"] [data-tag-name="bbva-button-default"]',
                promotionsCarouselSlideImage: '[data-tag-name="rewards-promotions-mx-section"][variant="carrousel-section"] [data-tag-name="rewards-promotions-mx-card-image"]',
                promotionsCarouselTitle: '[data-tag-name="rewards-promotions-mx-section"][variant="carrousel-section"] ',
                promotionsViewMore: '[text="__TYPE__"] [data-tag-name="bbva-type-link"]',

                //PROMOTION LIST
                promotionsList: '[data-tag-name="bbva-transition-container"][visible].promotions-list',
                listPromotion: '.promotions-list[visible] .promotions-list-scroll [data-tag-name="rewards-promotions-mx-card"]',
                listPromotionSkeleton: '.promotions-list-scroll [data-tag-name="rewards-promotions-mx-card"][loading].item-skeleton',

                //categories favourite
                headerFavourites: {
                    web: '[data-tag-name="bbva-header-main"][text="Elegir favoritas"]', isWithoutRoot: true
                },
                imageFavourites: {
                    web: '[class="rewards-promotions-mx-favorite-categories-modal"]:not([aria-hidden]) [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-icon"]:not([class="check"])',
                    isWithoutRoot: true
                },
                titleFavourites: {
                    web: '[class="rewards-promotions-mx-favorite-categories-modal"]:not([aria-hidden]) [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"] [data-tag-name="bbva-type-text"]',
                    isWithoutRoot: true
                },
                descriptionFavourites: {
                    web: '[class="rewards-promotions-mx-favorite-categories-modal"]:not([aria-hidden]) [data-tag-name="bbva-type-text"][text="Elige tus tres categorías y conoce antes que nadie las promociones."]',
                    isWithoutRoot: true
                },
                checkListFavourites: {
                    web: '[data-tag-name="bbva-form-control-input"][aria-checked="true"][type="checkbox"]',
                    isWithoutRoot: true
                },
                checkRowCategories: {
                    web: '[id-modal="favoriteCategories"] [data-tag-name="rewards-promotions-mx-checkbox"]',
                    isWithoutRoot: true
                },
                chooseFavorites: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                confirmFavouritesButton: {
                    web: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"][text="rewards-promotions-mx-favorite-categories-modal-panel-button-button-text"]',
                    isWithoutRoot: true
                },
                confirmFavouritesHiddenButton: {
                    web: '[aria-hidden="true"] [data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"][text="rewards-promotions-mx-favorite-categories-modal-panel-button-button-text"]',
                    isWithoutRoot: true
                },
                smallHelpModal: {
                    properties: {
                        root: {
                            web: '[data-tag-name="bbva-help-modal"][id-modal="halfExit"][visible]', isWithoutRoot: true
                        },
                    },
                    iconHelpModal: '#helpModalTitle.modal-title [data-tag-name="bbva-type-icon"]',
                    titleHelpModal: '#helpModalHeader [data-tag-name="bbva-type-text"]',
                    textHelpModal: '.modal-container #helpModalContent.modal-content .slot-content',
                    buttonHelpModal: '[data-tag-name="bbva-button-default"]',
                    linkHelpModal: '.modal-footer .slot-footer [data-tag-name="bbva-link"].footer-button',
                    keepHelpModal: 'bbva-button-default.footer-button[text="Mantener categorías"]',
                },
                deleteFavorites: 'div.label-container [text="Eliminar favoritas"]',
                editfavorites: 'div.label-container [text="Editar favoritas"]',

                panelInfoImage: '[data-tag-name="rewards-promotions-mx-panel-info"] [data-tag-name="bbva-clip-microillustration"]',
                panelInfoContentTitle: '[data-tag-name="rewards-promotions-mx-panel-info"] .content [data-tag-name="bbva-type-text"] .text',
                panelInfoContentText: '[data-tag-name="rewards-promotions-mx-panel-info"] .content [data-tag-name="bbva-type-text"].description',

                //big error modal
                bigError: {
                    properties: {
                        root: {
                            web: '[class="rewards-promotions-mx-full-error-modal"]', isWithoutRoot: true
                        },
                    },
                    header: '[id="helpModalHeader"]',
                    closeBtn: '[data-tag-name="bbva-header-main"][text="Elegir favoritas"] #btn-close',
                    button: '.modal-container [data-tag-name="bbva-type-icon"]',
                    iconModal: '.modal-container [data-tag-name="bbva-type-icon"]',
                    titleModal: '.modal-container [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                    descriptionModal: '.modal-container [data-tag-name="bbva-type-text"] p.text',
                },
                buttonCloseFavourite: {
                    web: '[id-modal="favoriteCategories"] #helpModalHeader #btn-close',
                    isWithoutRoot: true
                },

                //Promotions Searcher
                promotionSearcher: {
                    properties: {
                        root: {
                            web: '[data-tag-name="bbva-help-modal"][visible].rewards-promotions-mx-promotions-search-modal',
                            isWithoutRoot: true
                        }
                    },
                    headerSearcher: '[data-tag-name="bbva-header-main"][text="Buscar promociones"]',
                    backButtonHeader: '[data-tag-name="bbva-header-main"][text="Buscar promociones"] button#btn-left-primary',
                    exitButton: '[data-tag-name="bbva-header-main"][text="Buscar promociones"] button#btn-close',
                    inputTextLastSearches: '[data-tag-name="rewards-promotions-mx-form-predictive"] .list .list-item .option-text ',
                    removeTextLastSearches: '[data-tag-name="rewards-promotions-mx-form-predictive"] .list .list-item [data-tag-name="bbva-button-default"]',
                    inputTextSearcher: 'div.input-container [data-tag-name="bbva-form-text"] input[inputmode="text"]',
                    inputTextWarning: 'div.input-container [data-tag-name="bbva-form-text"] [data-tag-name="bbva-notification-help"',
                    retryWarningModal: '[modal-type="warning"] .help-modal .modal-footer [data-tag-name="bbva-button-default"]',

                    categoriesTitle: '[data-tag-name="bbva-form-container"].categories [data-tag-name="bbva-type-text"] .text',
                    elementsList: '[data-tag-name="bbva-form-container"].categories [data-tag-name="rewards-promotions-mx-checkbox"]',
                    elementsListFilter: '[data-tag-name="bbva-form-container"] [data-tag-name="rewards-promotions-mx-checkbox"][id="__ID__"]',
                    elementsListFilterSelected: '[data-tag-name="bbva-form-container"] [data-tag-name="rewards-promotions-mx-checkbox"][checked]',
                    showAllCategories: '[data-tag-name="bbva-expandable-panel"][aria-expanded="false"]',
                    showLessCategories: '[data-tag-name="bbva-expandable-panel"][aria-expanded="true"]',

                    usageTypeTitle: '[data-tag-name="bbva-form-container"].usage-types [data-tag-name="bbva-type-text"]',
                    locationTitle: '[data-tag-name="bbva-form-container"].location [data-tag-name="bbva-type-text"]',
                    locationOption: '[data-tag-name="bbva-form-container"].location [data-tag-name="rewards-promotions-mx-checkbox"]#LOCATION',
                    locationWarning: '[data-tag-name="bbva-notification-help"]',

                    typePromotionTitle: '[data-tag-name="bbva-form-container"].promotion-type',
                    typePromotionFilter: '[data-tag-name="bbva-form-container"] [id="__ID__"]',
                    searchPromoButton: '[data-tag-name="rewards-promotions-mx-panel-button"] [data-tag-name="bbva-button-default"][text="Buscar"]',
                },

                backButtonHeaderResults: '[data-tag-name="rewards-promotions-mx-page"][visible-page] [data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-header-main"] [id="btn-back"]',

                //Results screen
                headerResults: '[data-tag-name="bbva-transition-container"][visible].promotions-list [data-tag-name="bbva-header-main"]',
                backButtonResultsHeader: '[data-tag-name="bbva-transition-container"][visible].promotions-list [data-tag-name="bbva-header-main"] [id="btn-back"]',
                results: {
                    properties: {
                        root: '[data-tag-name="bbva-transition-container"][visible]',
                    },
                    filters: '[data-tag-name="bbva-form-filter"] .filters',
                    filterTags: '[data-tag-name="bbva-form-filter"] .filters .tag [data-tag-name="bbva-type-text"]',
                    removeFilterTags: '[data-tag-name="bbva-form-filter"] [id="clear-all-link"]',
                    editFilterTags: '[data-tag-name="bbva-form-filter"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    promotionsFilteredList: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"]',
                    promotionsFilteredName: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"] .promotion-title',
                    noResultsMessage: '[data-selector="rewards-promotions-mx-panel-info-empty-promotions"]',

                    promotionsFilteredBenefits: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"] [data-tag-name="bbva-badge-icon"] [data-tag-name="bbva-type-text"]',
                    promotionsFilteredBenefitsDescription: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"] [data-tag-name="bbva-type-text"] p.text',
                    promotionsFilteredBenefitsDate: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"] .promotion-card-footer [data-tag-name="bbva-type-date"]',
                    promotionsFilteredBenefitsModality: '.promotions-container.with-filters [data-tag-name="rewards-promotions-mx-card"] .categories [data-tag-name="bbva-badge-icon"]',

                    errorPromotionListRetryButton: '.promotions-list-scroll.error-container [data-tag-name="bbva-button-default"][text="Reintentar"]',
                    errorPromotionResultsRetryButton: '.promotions-list-scroll.error-container [data-tag-name="bbva-button-default"]',
                    errorPromotionListGoBackButton: '[data-tag-name="rewards-promotions-mx-panel-info"][variant="error"] button#btn-back',
                    errorPromotionListImage: '[data-tag-name="rewards-promotions-mx-panel-info"][variant="error"] [data-tag-name="bbva-type-icon"]',
                    errorPromotionListDescription: '[data-tag-name="rewards-promotions-mx-panel-info"] .description',
                    errorPromotionListTitle: '[data-tag-name="rewards-promotions-mx-panel-info"] [font-type="title-secondary"]'
                },

                error: {
                    properties: {
                        root: {
                            web: '[id-modal="halfError"][visible]', isWithoutRoot: true
                        }
                    },
                    errorExitHeader: '[id="helpModalHeader"] #btn-close',
                    errorHeader: '[id="helpModalHeader"]',
                    errorTooltipResultsExitButton: '[data-tag-name="bbva-button-default"][text="Salir"]',
                    errorTooltipResultsRetryButton: '[data-tag-name="bbva-button-default"][text="Reintentar"]',
                    errorTooltipResultsDescription: '[data-tag-name="bbva-type-text"]',
                    errorTooltipResultsIcon: '[data-tag-name="bbva-type-icon"]',
                },

                errorResults: {
                    properties: {
                        root: '.promotions-list [data-tag-name="bbva-notification-message"]'
                    },
                    errorResultsRetryButton: '[data-tag-name="bbva-type-link"]',
                    errorResultsDescription: '[data-tag-name="bbva-type-text"]',
                    errorResultsIcon: '[data-tag-name="bbva-type-icon"]',
                },

                errorAvailablePoints: '[data-tag-name="bbva-aggregation-card-list-spherica"] [data-tag-name="bbva-notification-message"]',

                modalBigError: {
                    properties: {
                        root: '[data-tag-name="rewards-promotions-mx-page"] [data-tag-name="bbva-transition-container"][visible]'
                    },
                    imageError: '[data-tag-name="bbva-type-icon"]',
                    textError: '[data-tag-name="bbva-type-text"]',
                    headerError: '[data-tag-name="bbva-header-main"]',
                    buttonTryAgain: '[data-tag-name="bbva-button-default"][text="Reintentar"]',
                    buttonReturn: '[data-tag-name="bbva-button-default"][text="Llamar a BBVA"]',
                    linkReturn: '[data-tag-name="bbva-header-main"] button#btn-back',
                },

                promotionDetail: {
                    content: {
                        infoPromotionDetail: '[data-tag-name="bbva-transition-container"][visible][header-text="Detalle de promoción"]',
                        imagePromotionDetail: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-banner-image"]',
                        imageHeaderPromotionDetail: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-card-image"] .header-img',
                        imageMissingPromotionDetail: 'rewards-promotions-mx-card rewards-promotions-mx-card-image .missing-image',
                        promotionTitle: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-type-text"].promotion-title',
                        promotionDescription: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="bbva-type-text"]:not([class="promotion-title"])',
                        linkTermsPromotion: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-section"] [data-selector="promotion-detail-terms-and-conditions"]',
                        cardTitle: '[data-tag-name="rewards-promotions-mx-section"][header-text="Tarjetas participantes"] [data-tag-name="bbva-core-heading"]',
                        cardInfo: '.participant-card-content',
                        cardImage: '[data-tag-name="rewards-promotions-mx-section"][header-text="Tarjetas participantes"] [data-tag-name="rewards-promotions-mx-list-cards"] .card [data-tag-name="bbva-clip-card"]',
                        cardName: '[data-tag-name="rewards-promotions-mx-section"][header-text="Tarjetas participantes"] [data-tag-name="rewards-promotions-mx-list-cards"] .card [data-tag-name="bbva-type-text"]',
                        cardViewMore: '[data-tag-name="rewards-promotions-mx-section"][header-text="Tarjetas participantes"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                        storeTitle: '[data-tag-name="bbva-header-category"][text="Establecimientos"]',
                        linkStoreName: '.promotions-list .store [data-tag-name="bbva-link"]',
                        detailStore: '.promotions-list [data-selector="promotion-detail-store-description-list"]',
                        storeViewMore: '[data-tag-name="bbva-header-category"][option-link="Ver todos"] [data-tag-name="bbva-type-link"]',
                    },
                    continueToInvitationEnrollmentButton: '[data-tag-name="bbva-transition-container"][visible] [data-tag-name="rewards-promotions-mx-panel-button"][data-selector="promotion-detail-activate-promotion-button"] [data-tag-name="bbva-button-default"]',

                    aboutStore: '#about-stores-section',
                    aboutStoreDescription: '#about-stores-section [data-tag-name="bbva-type-text"]',
                    aboutStoreLink: '[id="about-stores-section"] [data-tag-name="rewards-promotions-mx-link-card"]',

                    modalTerms: [BbvaHelpModal, {
                        root: {
                            web: `${BbvaHelpModal._baseRoot}[header-text="Términos y condiciones"][visible]`,
                            isWithoutRoot: true
                        }, additionalElements: {
                            title: '.col-content.terms-and-conditions [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                            description: '.col-content.terms-and-conditions .description',
                            closeButton: '#btn-close',
                        }
                    }],
                },
                helpModalRewards: [BbvaHelpModalSpherica, {
                    modifiers: '[visible]'
                }],
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({ item, value } = {}) {
        let stores;
        let n = 0;
        let clase = '';
        let items;
        let itemsList;
        if (item === 'categories check list') {
            items = (await this.checkRowCategories.elements()).value.length;
            itemsList = (await this.checkRowCategories.elements()).value.length;
        }
        let disabledCheck = 0;
        let itemChecked = 0;
        switch (item.toLowerCase()) {
            case 'block options header':
                await Commands.waitUntil({
                    condition: async () => {
                        clase = (await this.__root.getAttribute({ name: 'class' })).split(' ');
                        if (value) {
                            return clase.includes('template-is-visible') && clase.includes('invisibleHeader');
                        }
                        return clase.includes('template-is-visible') && clase.includes('visibleHeader');
                    },
                });
                break;
            case 'title header':
                await this.header.text.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'back header':
                await this.header.btnBack.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'text header':
                await this.header.text.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'favourite header':
                await this.headerFavourites.waitForDisplayed({ timout: config.wait.M });
                break;
            case 'button close favourite header':
                await this.buttonCloseFavourite.waitForDisplayed({ timout: config.wait.M });
                break;
            case 'tab promotions':
                await this.tabPromotionsSelected.waitForDisplayed({
                    timout: config.wait.M, reverse: value !== 'selected'
                });
                break;
            case 'tab points':
                await this.tabPoints.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'input search':
                await this.inputSearch.waitForDisplayed({ timeout: config.wait.XXL, reverse: value === 'not visible' });
                break;
            case 'special carousel promotions card control':
                await this.especialCarouselCardControl.waitForDisplayed({
                    reverse: value === 'not visible', timeout: config.wait.XXXL
                });
                break;
            case 'special carousel promotions':
                await this.especialPromotionsTitle.waitForDisplayed({
                    reverse: value === 'not visible', timeout: config.wait.XXXL
                });
                break;

            case 'special carousel promotions view more':
                await this.especialPromotionsViewMore.waitForDisplayed({
                    reverse: value === 'not view more', timeout: config.wait.L
                });
                break;
            case 'special carousel promotions title':
                await this.especialSlideTitle.waitForDisplayed({
                    reverse: value === 'not visible', timeout: config.wait.L
                });
                break;
            case 'special carousel promotions slide':
                await this.especialPromotionsSlide.waitForDisplayed({
                    reverse: value === 'not visible', timeout: config.wait.L
                });
                break;
            case 'special carousel promotions image':
                if (value === 'img missing') await this.especialImageMissing.waitForDisplayed({ timeout: config.wait.L }); else {
                    await this.especialPromotionsImage.waitForExist({
                        timeout: config.wait.L, reverse: value === 'not visible'
                    }); //@JIRA.GLOMOGL-29203 is not possible waitForDisplayed
                }
                break;
            case 'standards carousel promotions first':
                value === 'not visible' ? await this.promotionsCarousel.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                }) : await (await this.promotionsCarousel.elements()).value[2].waitForDisplayed();
                break;
            case 'standards carousel promotions second':
                value === 'not visible' ? await this.promotionsCarousel.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                }) : await (await this.promotionsCarousel.elements()).value[3].waitForDisplayed();
                break;
            case 'standards carousel promotions third':
                value === 'not visible' ? await this.promotionsCarousel.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                }) : await (await this.promotionsCarousel.elements()).value[4].waitForDisplayed();
                break;
            case 'standards carousel promotions image first':
                await (await this.promotionsCarouselSlideImage.elements()).value[1].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions image second':
                await (await this.promotionsCarouselSlideImage.elements()).value[2].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions image third':
                await (await this.promotionsCarouselSlideImage.elements()).value[3].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions title first':
                await (await this.promotionsCarouselTitle.elements()).value[1].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions title second':
                await (await this.promotionsCarouselTitle.elements()).value[2].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions title third':
                await (await this.promotionsCarouselTitle.elements()).value[3].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions slide first':
                await (await this.promotionsCarouselCardControl.elements()).value[2].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions slide second':
                await (await this.promotionsCarouselCardControl.elements()).value[3].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions slide third':
                await (await this.promotionsCarouselCardControl.elements()).value[4].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'standards carousel promotions view more first':
                await (await this.promotionsViewMore.specifySelector({
                    placeholder: '__TYPE__', value: 'MESES SIN INTERESES'
                })).waitForDisplayed({ reverse: value === 'not view more' || value === 'not visible' });
                break;
            case 'standards carousel promotions view more second':
                await (await this.promotionsViewMore.specifySelector({ placeholder: '__TYPE__', value: 'PUNTOS' }))
                    .waitForDisplayed({ reverse: value === 'not view more' || value === 'not visible' });
                break;
            case 'standards carousel promotions view more third':
                await (await this.promotionsViewMore.specifySelector({ placeholder: '__TYPE__', value: 'DESCUENTOS' }))
                    .waitForDisplayed({ reverse: value === 'not view more' || value === 'not visible' });
                break;
            case 'favorites carousel promotions':
                await this.favouritePromotionsCarousel.waitForDisplayed({
                    timeout: config.wait.XXXL, reverse: value === 'not visible'
                });
                break;
            case 'favorites carousel promotions title':
                await this.favouriteTitle.waitForDisplayed({ timeout: config.wait.L, reverse: value === 'not visible' });
                break;
            case 'favorites carousel promotions slide':
                await this.favouriteCardControl.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'favorites carousel promotions view more':
                await this.favouritePromotionsViewMore.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not view more' || value === 'not visible'
                });
                break;
            case 'favorites carousel promotions image':
                if (value === 'img missing') {
                    await this.favouriteImageMissing.waitForDisplayed({ timeout: config.wait.L });
                } else if (value === 'no promotions') {
                    await this.favouriteNoPromoImage.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.favouriteImageCarousel.waitForExist({
                        timeout: config.wait.XL, reverse: value === 'not visible'
                    }); //@JIRA.GLOMOGL-29203 is not possible waitForDisplayed
                }
                break;
            case 'favorites carousel promotions modify':
                await this.favouriteModifyLink.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'favorites carousel promotions remove':
                await this.favouriteRemoveLink.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'promotions list':
                await this.promotionsList.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'message carousel error icon':
                await this.messageErrorCarousel.icon.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'message carousel error text':
                await this.messageErrorCarousel.text.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'message carousel error retry':
            case 'message carousel error call bbva':
                await this.messageErrorCarousel.errorRetry.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'message promotions list error icon':
                await this.messageErrorPromotionList.icon.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'message promotions list error text':
                await this.messageErrorPromotionList.text.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'message promotions list error retry':
                await this.messageErrorPromotionList.errorRetry.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'message promotions list call bbva':
                await this.messageErrorPromotionList.errorRetry.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'panel info image':
                await (await this.panelInfoImage.elements()).value[0].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'panel info title':
                await (await this.panelInfoContentTitle.elements()).value[0].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'panel info text':
                await (await this.panelInfoContentText.elements()).value[0].waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'banner favourites categories configuration':
                await this.panelFavouriteCategories.waitForDisplayed({
                    reverse: value === 'not visible',
                    timeout: config.wait.XXL
                });
                break;
            case 'banner favourites categories configuration title':
                await this.panelFavourite.panelFavouriteCategoriesTitle.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'banner favourites categories configuration text':
                await this.panelFavourite.panelFavouriteCategoriesText.waitForDisplayed({ reverse: value === 'not visible' });
                if (value === 'without promotions available')
                    await this.panelFavourite.panelFavouriteCategoriesText.waitForText({
                        text: 'Actualmente no hay ninguna promoción de esta categoría.',
                        exactMatch: false
                    });
                else if (value !== 'without promotions available' && value !== 'not visible')
                    await this.panelFavourite.panelFavouriteCategoriesText.waitForText({
                        text: 'Aprovecha las promociones.',
                        exactMatch: false
                    });
                break;
            case 'favourites carousel promotions text':
                await this.favouritePromotionText.waitForDisplayed({ reverse: value === 'not visible' });
                if (value === 'without promotions available') await this.favouritePromotionText.waitForText({
                    text: 'Actualmente no hay ninguna promoción de esta categoría.', exactMatch: false
                }); else if (value !== 'without promotions available' && value !== 'not visible') await this.favouritePromotionText.waitForText({
                    text: 'Te mostraremos únicamente las promociones que sean relevantes para ti.', exactMatch: false
                });
                break;
            case 'banner favourites categories configuration no promotion image':
                await this.panelFavourite.panelFavouriteCategoriesNoPromoImage.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'banner favourites categories configuration image':
                await this.panelFavourite.panelFavouriteCategoriesImage.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'banner favourites categories configuration link':
                await this.panelFavourite.panelFavouriteCategoriesLink.waitForDisplayed({
                    reverse: value === 'not visible',
                    timeout: config.wait.XXXL
                });
                break;
            case 'banner favourites categories configuration see all':
                await this.panelFavouriteCategoriesSeeAll.waitForDisplayed({
                    reverse: value === 'not visible',
                    timeout: config.wait.XXXL
                });
                break;
            case 'image favourite':
                await this.imageFavourites.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'info favourite title':
                await this.titleFavourites.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'info favourite description':
                await this.descriptionFavourites.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'check list categories':
                await this.checkListFavourites.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'check rows list categories':
                while (items > 0) {
                    if (value === 'all enabled') await (await this.checkRowCategories.elements()).value[items - 1].waitForEnabled();
                    if (value === 'others disabled') {
                        if (await (await this.checkRowCategories.elements()).value[items - 1]
                            .waitForAttribute({
                                attribute: 'disabled',
                                failOnError: false
                            })) disabledCheck = disabledCheck + 1;
                        if (await (await this.checkRowCategories.elements()).value[items - 1]
                            .waitForAttribute({
                                attribute: 'checked',
                                failOnError: false
                            })) itemChecked = itemChecked + 1;
                    }
                    items = items - 1;
                }
                if (value === '3') {
                    if (disabledCheck !== itemsList - value || itemChecked !== value) {
                        throw new Error('The status of items of check list is not as expected');
                    }
                }
                if (items === '4') {
                    await this.checkRowCategories.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'not visible' });
                }
                break;
            case 'max favourites categories selected icon':
                await this.smallHelpModal.iconHelpModal.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'max favourites categories selected message description':
                await this.smallHelpModal.textHelpModal.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'max favourites categories selected message button':
                await this.smallHelpModal.buttonHelpModal.waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'confirm button categories':
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[5].waitForDisplayed({ reverse: value === 'not visible' });
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[5].waitForEnabled({
                    timeout: config.wait.L,
                    reverse: value === 'disabled'
                });
                break;
            case 'confirm favourites button':
                if (value === 'disabled' || value === 'enabled') {
                    await this.confirmFavouritesButton.waitForEnabled({ timeout: config.wait.M, reverse: value === 'disabled' });
                } else if (value === 'not visible') {
                    await this.confirmFavouritesHiddenButton.waitForExist({ timeout: config.wait.M });
                } else {
                    await this.confirmFavouritesButton.waitForDisplayed({ timeout: config.wait.M });
                }
                break;
            case 'delete button categories':
                await (await this.smallHelpModal.linkHelpModal.elements()).value[2].waitForDisplayed({ reverse: value === 'not visible' });
                await (await this.smallHelpModal.linkHelpModal.elements()).value[2].waitForEnabled({
                    timeout: config.wait.L,
                    reverse: value === 'disabled'
                });
                break;
            case 'header error icon':
                await (await this.smallHelpModal.iconHelpModal.elements()).value[7].waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'header error title':
                await (await this.smallHelpModal.titleHelpModal.elements()).value[1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'message error':
                await (await this.smallHelpModal.textHelpModal.elements()).value[7].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'try again error':
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[7].waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'exit error':
                await (await this.smallHelpModal.linkHelpModal.elements()).value[2].waitForDisplayed({ reverse: value === 'not visible' });
                break;
            case 'big error header':
                await this.bigError.header.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'big error header close':
                await this.bigError.closeBtn.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'big error icon':
                await this.bigError.iconModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big error button':
                await this.bigError.button.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big error text':
                await this.bigError.descriptionModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big help modal header':
                await this.bigHelpModal.header.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'big help modal header close':
                await this.bigHelpModal.closeBtn.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'big help modal icon':
                await (await this.bigHelpModal.iconModal.elements()).value[1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big help modal button':
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[8].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big help modal header title':
                await (await this.bigHelpModal.titleModal.elements()).value[1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big help modal text':
                await (await this.bigHelpModal.descriptionModal.elements()).value[1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'old searches list':
                await this.promotionSearcher.inputTextLastSearches.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'remove old searches button':
                await this.promotionSearcher.removeTextLastSearches.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotions searcher header':
                await this.promotionSearcher.headerSearcher.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'back button header':
                await this.promotionSearcher.backButtonHeader.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'exit button':
                await this.promotionSearcher.exitButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'input text searcher':
                await this.promotionSearcher.inputTextSearcher.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'input text warning':
                await this.promotionSearcher.inputTextWarning.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'categories title':
                await this.promotionSearcher.categoriesTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'categories list':
                await (await this.promotionSearcher.elementsList.elements()).value[0].scrollIntoView({ block: 'start' });
                await (await this.promotionSearcher.elementsList.elements()).value[0].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'show all categories':
                await this.promotionSearcher.showAllCategories.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'show less button':
                await this.promotionSearcher.showLessCategories.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'usage type title':
                await this.promotionSearcher.usageTypeTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'usage type list':
                await (await this.promotionSearcher.elementsList.elements()).value[1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'location title':
                await this.promotionSearcher.locationTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'location option':
                await this.promotionSearcher.locationOption.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'location disabled message':
                await this.promotionSearcher.locationWarning.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion type title':
                await this.promotionSearcher.typePromotionTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion type list':
                await (await this.promotionSearcher.elementsList.elements()).value[2].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'search button':
                await this.promotionSearcher.searchPromoButton.waitForDisplayed({ timeout: config.wait.L });
                if (value === 'disabled') {
                    await this.promotionSearcher.searchPromoButton.waitForEnabled({
                        timeout: config.wait.L, reverse: true
                    });
                }
                break;
            case 'remove filter button':
                await this.promotionSearcher.removePromoButton.waitForDisplayed({ timeout: config.wait.L });
                if (value === 'disabled') {
                    await this.promotionSearcher.removePromoButton.waitForEnabled({
                        timeout: config.wait.L, reverse: true
                    });
                }
                break;
            case 'filter tags':
                await this.results.filterTags.waitForDisplayed({ timeout: config.wait.L });
                if (value) {
                    const numberOfTags = (await this.results.removeFilterTags.elements()).length;
                    if (String(numberOfTags) !== value) {
                        throw new Error(`Expected ${value}, but got ${numberOfTags}`);
                    }
                }
                break;
            case 'promotions filtered list':
                n = await (await this.results.promotionsFilteredList.elements()).length;
                await (await this.results.promotionsFilteredList.elements()).value[n - 1].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion name':
                await this.results.promotionsFilteredName.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'benefit':
                await this.results.promotionsFilteredBenefits.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'benefit description':
                await this.results.promotionsFilteredBenefitsDescription.waitForExist({ timeout: config.wait.L });
                await this.results.promotionsFilteredBenefitsDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'benefit date':
                await this.results.promotionsFilteredBenefitsDate.waitForExist({ timeout: config.wait.L });
                await this.results.promotionsFilteredBenefitsDate.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'modality benefit':
                await this.results.promotionsFilteredBenefitsModality.waitForExist({ timeout: config.wait.L });
                await this.results.promotionsFilteredBenefitsModality.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'results header':
                await this.headerResults.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'back button results header':
                await this.backButtonResultsHeader.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'edit favourite categories button':
                await this.panelFavouriteCategoriesEditButton.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'remove favourite categories button':
                await this.panelFavouriteCategoriesRemoveButton.waitForDisplayed({ timeout: config.wait.XL });
                break;
            case 'no results message':
                await this.results.noResultsMessage.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotions type tabs':
                await this.tabs.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'icon error modal':
                await this.results.errorPromotionListImage.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'description error modal':
                await this.results.errorPromotionListDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'retry button error modal':
                await this.results.errorPromotionListRetryButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'go back button error modal':
                await this.results.errorPromotionListGoBackButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'call bbva button error modal':
                await this.results.errorPromotionResultsCallBbvaButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'go back button results error modal':
                await this.results.errorPromotionResultsRetryButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'title error modal':
                await this.results.errorPromotionListTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error icon tooltip results':
                if (this.isSpherica()) {
                    await this.errorResults.errorResultsIcon.waitForExist({ timeout: config.wait.M });
                    await this.errorResults.errorResultsIcon.scrollIntoView({ block: 'center' });
                    await this.errorResults.errorResultsIcon.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.error.errorTooltipResultsIcon.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'error description tooltip results':
                if (this.isSpherica()) {
                    await this.errorResults.errorResultsDescription.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.error.errorTooltipResultsDescription.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'error retry button tooltip results':
            case 'error exit button tooltip results':
                if (this.isSpherica()) {
                    await this.errorResults.errorResultsRetryButton.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.error.errorTooltipResultsRetryButton.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'error header tooltip':
                await this.error.errorHeader.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error exit tooltip':
                await this.error.errorExitHeader.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error icon tooltip':
                await this.error.errorTooltipResultsIcon.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error description tooltip':
                await this.error.errorTooltipResultsDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error retry button tooltip':
                await this.error.errorTooltipResultsRetryButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'expire points':
                await this.pointsToExpire.openExpandableAccordion.waitForDisplayed({
                    timeout: config.wait.M, reverse: value.toLowerCase() === 'not visible'
                });
                break;
            case 'rewards landing points':
                await this.tab.amount.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'card module':
                await this.aggregationCardList.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'last transactions tooltip':
                await this.lastTransactionsTooltip.icon.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'loyalty points transactions':
                await this.listTransactionsByPeriod.transactionsList.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'info icon':
                if (this.isSpherica()) {
                    await this.useMyPointsModal.image.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.infoTooltip.image.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'info icon help modal':
                await this.modal.infoIconTooltipModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'understood':
                if (!this.isSpherica()) {
                    await this.modalTerms.understoodButton.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'understood modal':
                await this.modal.understoodButtonModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'how to collect my points help modal':
                await this.modal.howToCollectPointsModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'points to be expired list':
                await this.messagePointsToExpire.expandableAccordion.listSimple.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header faqs':
            case 'header faqs using my points':
                await this.rewardsFaqModal.additionalElements.headerFaqs.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'faqs':
            case 'faqs using my points':
                if (this.isSpherica()) {
                    await this.rewardsFaqModal.additionalElements.faqsTipsSpherica.waitForDisplayed({ timeout: config.wait.M });
                } else {
                    await this.rewardsFaqModal.additionalElements.faqsTips.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'continue button':
                await this.continueButtonPromos.waitForDisplayed({ timeout: config.wait.L });
                await this.continueButtonPromos.waitForEnabled({ timeout: config.wait.L, reverse: value === 'disabled' });
                break;
            case 'error available points':
                await this.errorAvailablePoints.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error card module':
                await this.aggregationCardList.errorModule.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error loading points to expire':
                await this.messagePointsToExpire.notification.icon.waitForDisplayed({ timeout: config.wait.L });
                await this.messagePointsToExpire.notification.text.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'help modal description':
                await this.helpModalRewards.content.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'understood help modal button':
                await this.helpModalRewards.acceptBtn.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'description':
                await this.useMyPointsModal.usePointsDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'points transfer':
                await this.useMyPointsModal.pointsTransfer.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'points raffle':
                await this.useMyPointsModal.pointsRaffle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'how to use my points':
                if (this.isSpherica()) {
                    await this.useMyPointsModal.description.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.infoTooltip.description.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'terms and conditions':
                if (this.isSpherica()) {
                    await this.useMyPointsModal.termsAndConditions.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.modalTerms.termsAndConditions.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'terms and conditions modal':
                await this.modal.termsAndConditionsModal.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'list transactions error':
                if (this.isSpherica()) {
                    await this.listTransactionsByPeriod.notification.textSpherica.waitForDisplayed({ timeout: config.wait.L });
                } else {
                    await this.listTransactionsByPeriod.notification.text.waitForDisplayed({ timeout: config.wait.L });
                }
                break;
            case 'list transactions retry button':
                await this.listTransactionsByPeriod.notification.errorRetry.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error title':
                await this.helpModalRewards.title.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'error text description':
                await this.helpModalRewards.description.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail information':
                await this.promotionDetail.content.infoPromotionDetail.waitForDisplayed({ timeout: config.wait.XXL });
                break;
            case 'promotion detail image':
                if (value.toLowerCase() === 'img header') {
                    await this.promotionDetail.content.imageHeaderPromotionDetail.waitForExist({ timeout: config.wait.L });
                } else if (value.toLowerCase() === 'img missing') {
                    await this.promotionDetail.content.imageMissingPromotionDetail.waitForExist({ timeout: config.wait.L });
                } else {
                    await this.promotionDetail.content.imagePromotionDetail.waitForExist({ timeout: config.wait.L }); //@JIRA.GLOMOGL-29203 is not possible waitForDisplayed
                }
                break;
            case 'promotion detail title':
                await this.promotionDetail.content.promotionTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail description':
                await this.promotionDetail.content.promotionDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail about promotion link':
                await (await this.promotionDetail.content.linkTermsPromotion.elements()).value[0].waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail card title':
                await this.promotionDetail.content.cardTitle.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'promotion detail card info':
                await this.promotionDetail.content.cardInfo.waitForDisplayed({ timeout: config.wait.L, reverse: value === 'not visible' });
                break;
            case 'promotion detail card image':
                await this.promotionDetail.content.cardImage.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'promotion detail card name':
                await this.promotionDetail.content.cardName.waitForDisplayed({
                    timeout: config.wait.L,
                    reverse: value === 'not visible'
                });
                break;
            case 'promotion detail about store':
                await this.promotionDetail.aboutStore.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail about store description':
                await this.promotionDetail.aboutStoreDescription.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail about store link':
                await this.promotionDetail.aboutStoreLink.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail store list title':
                await this.promotionDetail.content.storeTitle.waitForDisplayed({ timeout: config.wait.L, reverse: value === 'not visible' });
                break;
            case 'promotion detail store list':
                stores = await (await this.promotionDetail.content.linkStoreName.elements()).length;
                while (n < stores) {
                    await (await this.promotionDetail.content.linkStoreName.elements()).value[n].waitForDisplayed({ reverse: value === 'not visible' });
                    await (await this.promotionDetail.content.detailStore.elements()).value[n].waitForDisplayed({ reverse: value === 'not visible' });
                    n++;
                }
                break;
            case 'promotion detail header terms':
                await this.promotionDetail.modalTerms.header.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail icon terms':
                await this.promotionDetail.modalTerms.additionalElements.icon.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail title terms':
                await this.promotionDetail.modalTerms.additionalElements.title.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail description terms':
                await this.promotionDetail.modalTerms.additionalElements.description.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail button terms':
                await this.promotionDetail.modalTerms.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'promotion detail view all stores':
                await this.promotionDetail.content.storeViewMore.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'big modal error image':
                await this.modalBigError.imageError.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big modal error message':
                await this.modalBigError.textError.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big modal error header':
                await this.modalBigError.headerError.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big modal error try again button':
            case 'big modal error call bbva button':
                await this.modalBigError.buttonTryAgain.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'big modal error return button':
                await this.modalBigError.buttonReturn.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'big modal error return link':
                await this.modalBigError.linkReturn.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'promotion detail view more cards':
                await this.promotionDetail.content.cardViewMore.waitForDisplayed({
                    timeout: config.wait.L, reverse: value === 'not visible'
                });
                break;
            case 'without transactions by date image':
                await this.noTransaction.noTransactionsDateImage.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'without transactions by period image':
                await this.waitUntilSpinnerVeil();
                await (await this.noTransaction.noTransactionsPeriodImage.elements()).value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'promotion detail enrollment button':
                await this.promotionDetail.continueToInvitationEnrollmentButton.waitForDisplayed({ timeout: config.wait.L, reverse: value === 'not visible' });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async useMyPoints() {
        await (await (await (await (await this.tab.button.waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .waitForEnabled({ timeout: config.wait.L }))
            .waitForClickable({ timeout: config.wait.L }))
            .click({ useActions: false, scrollOptions: { block: 'nearest' } });
    }

    async accessRewardsLandingDetail() {
        await this.aggregationCardList.listCard.waitForDisplayed({ timeout: config.wait.XXXL });
        await (await (await (await (await this.aggregationCardList.listCard.elements()).value[0].scrollIntoView({ block: 'center' }))
            .waitForDisplayed({ timeout: config.wait.L }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async seeHelp() {
        let elements;
        if (this.isSpherica()) {
            elements = await this.header.faqsButton;
        } else {
            elements = await this.header.buttonRightPrimary;

        }
        await (await elements.waitForDisplayed({ timeout: config.wait.L }))
            .click();
    }

    async deployPointsToBeExpired() {
        await this.pointsToExpire.openExpandableAccordion.click();
    }

    async accessHowToCollectPoints() {
        await (await (await this.tab.link.waitForDisplayed({ timeout: config.wait.L }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async seeFaqsUsingMypoints() {
        let elements;
        if (this.isSpherica()) {
            elements = await this.usingMyPointsFaqsButton.faqsButton;
        } else {
            elements = await this.usingMyPointsFaqsButton.buttonRightSecondary;
        }
        await (await elements.waitForDisplayed({ timeout: config.wait.L }))
            .click();
    }

    async accessPromotions() {
        await this.waitForElementsExist(this.tab.tabSecondary);
        await (await (await this.tab.tabSecondary.elements()).value[0].waitForDisplayed({ timeout: config.wait.L }))
            .click({ useActions: false, scrollOptions: { block: 'nearest' } });
    }

    async displayTransactionsByDates() {
        await (await (await (await (await this.access.datesAccessButton
            .scrollIntoView({ block: 'center' }))
            .waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .waitForEnabled({ timeout: config.wait.L }))
            .click();
    }

    async displayTransactionsByPeriod() {
        await (await (await (await (await this.access.periodAccessButton
            .scrollIntoView({ block: 'center' }))
            .waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .waitForEnabled({ timeout: config.wait.L }))
            .click();
    }

    async showHelpTransactions() {
        await (await this.lastTransactionsTooltip.icon.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async helpTransactions() {
        await (await this.noTransaction.helpTransactionsAccess.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async retryModal() {
        await (await this.tab.link.waitForDisplayed({ timeout: config.wait.L }))
            .click();
    }

    async retryWarningSmallModal() {
        await (await this.errorHalfModal.buttonTryAgain.waitForDisplayed({ timeout: config.wait.L }))
            .click({ useActions: false, scrollOptions: { block: 'end' } });
    }

    async retryWarningBigModal() {
        await (await this.helpModalRewards.acceptBtn.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async retryErrorModal() {
        await (await this.error.errorTooltipResultsRetryButton.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async waitForLoaded(timeOut = config.wait.XXL, noDialog = true) {
        await super.waitForLoaded(timeOut, noDialog);
    }

    async accessToPointsTrasfers() {
        await (await this.useMyPointsModal.pointsTransfer.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async accessToMapOfCommerce() {
        if (Commands.flags.isIOS) await this.useMyPointsModal.payWithPointsIOS.click({ timeout: config.wait.M }); else {
            await (await this.useMyPointsModal.payWithPointsAndroid.waitForClickable({ timeout: config.wait.M }))
                .click();
        }
    }

    async goBack() {
        await this.backButtonHeaderResults.waitForDisplayed({ timeout: config.wait.M });
        await this.backButtonHeaderResults.click();
    }

    async goBackDashboard() {
        await (await this.header.buttonLeftPrimary.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async accessToPointsRaffle() {
        await (await this.useMyPointsModal.pointsRaffle.waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async accessOnboarding(option) {
        const element = (option === 'enter') ? this.onboardingModal.additionalElements.acceptButton : this.onboardingModal.additionalElements.closeBtn;
        await (await element.waitForDisplayed({ timeout: config.wait.L })).click({ useActions: false, scrollOptions: { block: 'nearest' } });
        await this.onboardingModal.waitForDisplayed({ timeout: config.wait.L, reverse: true });
    }

    async scrollLastCarousel() {
        await Commands.pause({ time: config.wait.S });
        const items = (await this.promotionsCarousel.elements()).value.length;
        await (await this.promotionsCarousel.elements()).value[items - 1].waitForExist({ timeout: config.wait.L });
        await (await this.promotionsCarousel.elements()).value[items - 1].scrollIntoView({ block: 'end' });
    }

    async scrollLastPromotion(repeat = 1) {
        let n = 0;
        while (n < repeat) {
            n++;
            await Commands.pause({ time: config.wait.S });
            await this.listPromotion.waitForExist({ timeout: config.wait.L });
            const items = (await this.listPromotion.elements()).value.length;
            const itemsPromotions = (await this.listPromotion.elements());
            await itemsPromotions.value[items - 1].scrollIntoView({ block: 'end' });
        }
    }

    async viewMorePromotions(typePromotion, name = 'MESES SIN INTERESES') {
        switch (typePromotion.toLowerCase()) {
            case 'standard':
                await (await (await this.promotionsViewMore.specifySelector({
                    placeholder: '__TYPE__', value: name.toUpperCase()
                })).waitForDisplayed({ timeout: config.wait.XXL }))
                    .click();
                break;
            case 'special':
                await (await this.especialPromotionsViewMore.waitForDisplayed({ timeout: config.wait.XXL }))
                    .click();
                break;
            case 'favourite':
                await (await this.favouritePromotionsViewMore.waitForDisplayed({ timeout: config.wait.XXL }))
                    .click();
                break;
            case 'standard pdf':
                await (await (await this.promotionsViewMore.specifySelector({
                    placeholder: '__TYPE__', value: 'DESCUENTOS'
                }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .click();
                break;
            default:
                throw new Error('Selected option is not available...');
        }
    }

    async nextCard() {
        await this.nextbutton.waitForExist({ timeout: config.wait.M });
        await this.nextbutton.waitForDisplayed({ timeout: config.wait.M });
        await this.nextbutton.waitForAnimation({ timeout: config.wait.M });
        await this.nextbutton.click({ useActions: false, scrollOptions: { block: 'nearest' } });
    }
    async enterCardPromotions() {
        const targetElement = await this.especialPromotionsSlideActive.specifySelector({
            placeholder: '__NAME__',
            value: global.user.pushDataApproved.campaignId
        });
        await targetElement.waitForExist({ timeout: config.wait.M });
        await targetElement.waitForDisplayed({ timeout: config.wait.M });
        await targetElement.click();
    }

    async accessPromotionDetail() {
        await this.especialPromotionsSlide.waitForDisplayed({ timeout: config.wait.XXL });
        await this.especialPromotionsSlide.scrollIntoView({ block: 'center' });
        switch (global.user.pushDataApproved.campaignId) {
            case 'Aeroméxico':
                await this.enterCardPromotions();
                break;
            case 'Bodega Aurrera':
            case 'Decathlon':
                await this.nextCard();
                await this.enterCardPromotions();
                break;
            case 'Sumesa':
                await this.nextCard();
                await this.nextbutton.waitForExist({ timeout: config.wait.M });
                await this.nextbutton.waitForDisplayed({ timeout: config.wait.M });
                await this.nextbutton.waitForAnimation({ timeout: config.wait.M });
                await this.nextbutton.click({ useActions: false, scrollOptions: { block: 'nearest' } });
                await this.enterCardPromotions();
                break;
            default:
                throw new Error(`${global.user.pushDataApproved.campaignId} is not available`);
        }
    }

    async accessPromotion() {
        await (await this.especialPromotionsSlide.waitForDisplayed({ timeout: config.wait.XXL })).click();
    }

    async validateAllPromotions() {
        const items = (await this.listPromotion.elements()).value.length;
        const itemsPromotions = (await this.listPromotion.elements());
        let n = 0;
        while (n < items - 1) {
            await Commands.pause({ time: config.wait.S });
            await itemsPromotions.value[n].waitForExist({ timeout: config.wait.L });
            n++;
        }

    }

    async retryMessageError(times, type) {
        let element;
        if (this.isSpherica()) {
            element = this.errorResults.errorResultsRetryButton;
        } else {
            element = this.error.errorTooltipResultsRetryButton;
        }
        let n = 1;
        if (type === 'promotion pagination') {
            await element.waitForExist({ timeout: config.wait.XL });
            while (n <= times) {
                n++;
                await (await (await (await element
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .waitForEnabled({ timeout: config.wait.L }))
                    .click();
            }
        } else {
            while (n <= times) {
                n++;
                element = (type === 'promotions list') ? this.messageErrorPromotionList.errorRetry : this.messageErrorCarousel.errorRetry;
                await (await element.waitForDisplayed({ timeout: config.wait.L })).click({ useActions: false, scrollOptions: { block: 'nearest' } });
            }
        }
    }

    async accessToCategoriesConfigure(access = 'spherica') {
        if (access.toLowerCase() === 'coronita') {
            await (await (await (await this.panelFavourite.panelFavouriteCategoriesLink.waitForDisplayed({ timeout: config.wait.M }))
                .scrollIntoView({ block: 'end' }))
                .waitForAnimation({ timeout: config.wait.M }))
                .click();
        }
        if (access.toLowerCase() === 'spherica') {
            await this.favouriteCategoriesArea.waitForExist({ timeout: config.wait.L });
            if (await this.panelFavouriteCategoriesSeeAll.isExisting()) {
                await (await (await (await this.panelFavouriteCategoriesSeeAll.scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
            } else {
                await (await (await (await this.panelFavourite.panelFavouriteCategoriesLink.scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
            }
            if (await this.chooseFavorites.isExisting()) {
                await (await (await this.chooseFavorites.waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
            }
        }

        await this.waitUntilSpinnerVeil({ timeToAppear: config.wait.XS, timeoutToDisappear: config.wait.L });
    }

    async modifyToCategoriesConfigure() {
        await (await this.favouriteModifyLink.waitForDisplayed({ timeout: config.wait.M }))
            .click({ useActions: false, scrollOptions: { block: 'center' } });
    }

    async confirmCategories() {
        await (await this.smallHelpModal.buttonHelpModal.elements()).value[5].waitForClickable();
        await (await this.smallHelpModal.buttonHelpModal.elements()).value[5].click({
            useActions: false, scrollOptions: { block: 'end' }
        });
    }

    async selectCategories(number) {
        await this.imageFavourites.scrollIntoView({ block: 'end' });
        let i = 0;
        while (i < number) {
            await Commands.pause({ time: config.wait.S });
            await (await (await (await this.checkRowCategories.elements()).value[i].waitForDisplayed({ timeout: config.wait.L }))
                .waitForAnimation({ timeout: config.wait.L }))
                .click();
            i++;
        }
    }

    async changeCategories() {
        await (await this.editfavorites.waitForClickable({ timeout: config.wait.L }))
            .click({ useActions: false, scrollOptions: { block: 'center' } });
        await this.imageFavourites.scrollIntoView();
        await (await (await (await (await this.checkRowCategories.elements()).value[0].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
        await (await (await (await (await this.checkRowCategories.elements()).value[1].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
        await (await (await (await (await this.checkRowCategories.elements()).value[2].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
        await (await (await (await (await this.checkRowCategories.elements()).value[7].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
        await (await (await (await (await this.checkRowCategories.elements()).value[8].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
        await (await (await (await (await this.checkRowCategories.elements()).value[9].scrollIntoView({ block: 'center' })).waitForDisplayed({ timeout: config.wait.L })).waitForAnimation({ timeout: config.wait.L })).click({ useActions: false });
    }

    async deleteCategories(screen) {
        switch (screen.toLowerCase()) {
            case 'spherica categories':
                await (await (await (await (await this.panelFavouriteCategoriesSeeAll.waitForDisplayed({ timeout: config.wait.L }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                await (await (await (await (await this.panelFavouriteCategoriesRemoveButton.waitForDisplayed({ timeout: config.wait.L }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                break;
            case 'selection categories':
                await (await this.smallHelpModal.linkHelpModal.elements()).value[2].click({
                    useActions: false, scrollOptions: { block: 'end' }
                });
                break;
            case 'carousel categories':
                await (await (await this.favouriteRemoveLink.waitForDisplayed({ timeout: config.wait.XXXL }))
                    .waitForAnimation({ timeout: config.wait.XXXL }))
                    .click();
                await (await this.smallHelpModal.iconHelpModal.elements()).value[4].waitForDisplayed();
                await (await this.smallHelpModal.textHelpModal.elements()).value[4].waitForDisplayed();
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[4].click();
                break;
            default:
                throw new Error('Selected option is not available...');
        }
    }

    async confirmCategoriesSpherica() {
        await (await (await this.confirmDeleteCategoriesButton.waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .click();
    }

    async acceptFavourites() {
        await (await (await this.confirmFavouritesButton.waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .click();
    }

    async keepCategories(screen) {
        switch (screen.toLowerCase()) {
            case 'carousel categories':
                await (await (await this.favouriteRemoveLink.waitForDisplayed({ timeout: config.wait.XXXL }))
                    .waitForAnimation({ timeout: config.wait.XXXL }))
                    .click();
                await (await this.smallHelpModal.iconHelpModal.elements()).value[5].waitForDisplayed();
                await (await this.smallHelpModal.textHelpModal.elements()).value[5].waitForDisplayed();
                await (await this.smallHelpModal.buttonHelpModal.elements()).value[5].click();
                break;
            case 'spherica categories':
                await (await (await (await (await this.panelFavouriteCategoriesSeeAll.waitForDisplayed({ timeout: config.wait.L }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                await (await (await (await (await this.panelFavouriteCategoriesRemoveButton.waitForDisplayed({ timeout: config.wait.L }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                await (await (await this.keepCategoriesButton.waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                break;
            default:
                throw new Error('Selected option is not available...');
        }
    }

    async keepUpCategories() {
        await this.deleteFavorites.waitForDisplayed({ timeout: config.wait.L });
        await this.deleteFavorites.click();
    }

    async closeSelection(type) {
        await this.buttonCloseFavourite.waitForDisplayed({ timeout: config.wait.L });
        await this.buttonCloseFavourite.click();
        if (type === 'with changes') await (await (await this.smallHelpModal.buttonHelpModal.elements()).value[6].waitForAnimation())
            .click({ useActions: false, scrollOptions: { block: 'end' } });
        if (type === 'with selected favourites') await (await this.smallHelpModal.buttonHelpModal.waitForAnimation())
            .click({ useActions: false });
    }

    async closeBigModal(action) {
        if (action === 'exit') {
            await (await this.bigHelpModal.exitButton.waitForClickable())
                .click();
        } else if (action === 'close') {
            await (await this.bigHelpModal.closeBtn.waitForClickable())
                .click();
        }
    }

    async closeBigError(action) {
        if (action === 'exit') {
            await (await await this.bigError.closeBtn.waitForClickable())
                .click();
        } else if (action === 'close') {
            await (await await this.bigError.button.waitForClickable())
                .click();
        }
    }

    async accessToDetail(typePromotion, type) {
        switch (type.toLowerCase()) {
            case 'online':
                if (typePromotion === 'special') {
                    await this.accessToDetail(null, 'descuentos');
                } else if (typePromotion === 'favourite') {
                    await this.accessToDetail(null, 'less 5 stores');
                } else {
                    await this.accessToDetail(null, 'more 5 cards');
                }
                break;
            case 'face to face':
                if (typePromotion === 'favourite') {
                    await this.accessToDetail(null, 'less 5 stores');
                } else if (typePromotion === 'standard') {
                    await this.accessToDetail(null, 'descuentos');
                } else {
                    await this.accessToDetail(null, 'more 5 cards');
                }
                break;
            case 'descuentos':
                await this.listPromotion.waitForExist({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[4]).waitForDisplayed({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[4]).click();
                break;
            case 'more 5 stores':
                await this.scrollLastPromotion(1);
                if (this.isSpherica()) {
                    await this.listPromotionSkeleton.waitForExist({ timeout: config.wait.M });
                    await this.listPromotionSkeleton.waitForDisplayed({ timeout: config.wait.XL });
                }
                await (await (await this.listPromotion.elements()).value[6]).waitForExist({ timeout: config.wait.M });
                await (await (await this.listPromotion.elements()).value[6]).scrollIntoView({ block: 'end' });
                await (await (await this.listPromotion.elements()).value[6]).waitForDisplayed({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[6]).waitForAnimation({ timeout: config.wait.M });
                await (await (await this.listPromotion.elements()).value[7]).click({ useActions: false, scrollOptions: { block: 'end' } });
                break;
            case 'less 5 stores':
                await this.listPromotion.waitForExist({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[1]).waitForDisplayed({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[1]).click();
                break;
            case 'less 6 cards':
            case 'more 5 cards':
                await this.listPromotion.waitForExist({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[0]).waitForDisplayed({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[0]).click();
                break;
            case 'with pdf link':
                await this.scrollLastPromotion(3);
                await this.listPromotion.waitForExist({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[14]).waitForDisplayed({ timeout: config.wait.L });
                await (await (await this.listPromotion.elements()).value[14]).click();
                break;
            default:
                throw new Error('Selected option is not available...');
        }
    }

    async openSearcher() {
        await this.inputSearch.waitForClickable({ timeout: config.wait.XXL });
        await this.inputSearch.click();
    }

    async filterPromotions(typePromotion) {
        switch (typePromotion) {
            case 'categories':
                await (await (await this.promotionSearcher.elementsListFilter.specifySelector({
                    placeholder: '__ID__', value: 'FOOD_AND_GOURMET'
                }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .click();
                break;
            case 'modalities':
                await (await (await (await (await (await this.promotionSearcher.elementsListFilter.specifySelector({
                    placeholder: '__ID__',
                    value: 'ONLINE'
                }))
                    .scrollIntoView({ block: 'end', alignToTop: true }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .waitForEnabled({ timeout: config.wait.L }))
                    .click();
                break;
            case 'location':
                await this.promotionSearcher.locationOption.scrollIntoView({ block: 'center' });
                await (await (await (await (await this.promotionSearcher.locationOption.waitForDisplayed({ timeout: config.wait.L }))
                    .scrollIntoView({ block: 'center' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                break;
            case 'promotion type':
                await (await (await (await (await (await this.promotionSearcher.typePromotionFilter.specifySelector({
                    placeholder: '__ID__', value: 'LOYALTY_POINTS'
                }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .waitForEnabled({ timeout: config.wait.L }))
                    .click();
                break;
            case 'mixed filters':
                await (await (await (await this.promotionSearcher.elementsListFilter.specifySelector({
                    placeholder: '__ID__', value: 'FOOD_AND_GOURMET'
                }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                await (await (await (await (await this.promotionSearcher.elementsListFilter.specifySelector({
                    placeholder: '__ID__', value: 'PHYSICAL'
                }))
                    .scrollIntoView({ block: 'end' }))
                    .waitForDisplayed({ timeout: config.wait.L }))
                    .waitForAnimation({ timeout: config.wait.L }))
                    .click();
                break;
            default:
                throw new Error(`Filter ${typePromotion} is unknown. Cannot find atm type.`);

        }
    }

    async insertPromos(input) {
        await this.promotionSearcher.inputTextSearcher.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionSearcher.inputTextSearcher.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.inputTextSearcher.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.inputTextSearcher.setValue({ value: input, slow: true });
    }

    async searchPromos() {
        await this.promotionSearcher.searchPromoButton.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionSearcher.searchPromoButton.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.searchPromoButton.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.searchPromoButton.click();
    }

    async removeTags() {
        await this.results.removeFilterTags.waitForDisplayed({ timeout: config.wait.XL });
        await this.results.removeFilterTags.waitForAnimation({ timeout: config.wait.L });
        await this.results.removeFilterTags.waitForEnabled({ timeout: config.wait.L });
        await this.results.removeFilterTags.click();
    }

    async removeFilters() {
        await this.promotionSearcher.removePromoButton.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionSearcher.removePromoButton.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.removePromoButton.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.removePromoButton.click();
    }

    async removeHistory() {
        await this.promotionSearcher.removeTextLastSearches.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionSearcher.removeTextLastSearches.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.removeTextLastSearches.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.removeTextLastSearches.click();
    }

    async editTagsFilter() {
        await this.results.editFilterTags.waitForDisplayed({ timeout: config.wait.XL });
        await this.results.editFilterTags.waitForAnimation({ timeout: config.wait.L });
        await this.results.editFilterTags.waitForEnabled({ timeout: config.wait.L });
        await this.results.editFilterTags.click();
        const element = '[data-tag-name="bbva-form-container"] [data-tag-name="rewards-promotions-checkbox"][checked]';
        const value = '[data-tag-name="bbva-form-container"] [data-tag-name="rewards-promotions-checkbox"][checked] [value="FOOD_AND_GOURMET"]';
        await (await (await (await this.promotionSearcher.elementsListFilterSelected.specifySelector({ placeholder: element, value: value })
            .waitForDisplayed({ timeout: config.wait.L }))
            .waitForAnimation({ timeout: config.wait.L }))
            .waitForEnabled({ timeout: config.wait.L }))
            .click();
    }

    async tapInputPromotions() {
        await this.promotionSearcher.inputTextSearcher.waitForDisplayed({ timeout: config.wait.XL });
        await this.promotionSearcher.inputTextSearcher.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.inputTextSearcher.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.inputTextSearcher.click();
    }

    async displayAllCategories() {
        await this.promotionSearcher.showAllCategories.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionSearcher.showAllCategories.waitForAnimation({ timeout: config.wait.L });
        await this.promotionSearcher.showAllCategories.waitForEnabled({ timeout: config.wait.L });
        await this.promotionSearcher.showAllCategories.click();
    }

    async removesFilters(resultTag) {
        await this.results.filters.waitForDisplayed({ timeout: config.wait.L });
        let numberOfTags = (await this.results.removeFilterTags.elements()).length;
        while (numberOfTags > resultTag) {
            await (await (await (await (await this.results.removeFilterTags.elements()).value[numberOfTags - 1].waitForDisplayed({ timeout: config.wait.L }))
                .waitForAnimation({ timeout: config.wait.L }))
                .waitForEnabled({ timeout: config.wait.L }))
                .click();
            await this.waitUntilSpinnerVeil({ timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.L });
            numberOfTags--;
        }
    }

    async scrollsDownLatestResult() {
        await this.results.promotionsFilteredName.waitForDisplayed({ timeout: config.wait.XXL });
        const promotions = await (await this.results.promotionsFilteredName.elements()).length;
        await (await this.results.promotionsFilteredName.elements()).value[promotions - 1].waitForExist({ timeout: config.wait.L });
        await (await this.results.promotionsFilteredName.elements()).value[promotions - 1].waitForEnabled({ timeout: config.wait.L });
        await (await this.results.promotionsFilteredName.elements()).value[promotions - 1].scrollIntoView({ block: 'start' });
    }

    async retryModalError(times) {
        let i = 0;
        while (i < times) {
            await this.results.errorPromotionListRetryButton.waitForDisplayed({ timeout: config.wait.L });
            await this.results.errorPromotionListRetryButton.waitForAnimation({ timeout: config.wait.L });
            await this.results.errorPromotionListRetryButton.waitForEnabled({ timeout: config.wait.L });
            await this.results.errorPromotionListRetryButton.click({ useActions: false, scrollOptions: { block: 'end' } });
            i++;
        }
    }

    async accessToTerms() {
        await this.promotionDetail.content.linkTermsPromotion.waitForExist({ timeout: config.wait.XXXL });
        await (await (await this.promotionDetail.content.linkTermsPromotion.elements()).value[0].waitForDisplayed({ timeout: config.wait.XXXL }))
            .click();
    }

    async retryErrorBigModal() {
        await this.modalBigError.buttonTryAgain.waitForClickable({ timeout: config.wait.L });
        await this.modalBigError.buttonTryAgain.click({ useActions: false, scrollOptions: { block: 'end' } });
    }

    async accessDetailPointsTDC(idProduct) {
        await (await (await (await this.detailTdc.specifySelector({ placeholder: '__PRODUCT_ID__', value: idProduct }))
            .waitForDisplayed({ timeout: config.wait.L }))
            .waitForClickable({ timeout: config.wait.L }))
            .click();
    }

    async accessToInviteEnrollmentPromotion() {
        await this.promotionDetail.continueToInvitationEnrollmentButton.waitForDisplayed({ timeout: config.wait.L });
        await this.promotionDetail.continueToInvitationEnrollmentButton.waitForAnimation({ timeout: config.wait.L });
        await this.promotionDetail.continueToInvitationEnrollmentButton.click({ useActions: false, scrollOptions: { block: 'end' } });
    }
}

export default new RewardsLanding();
