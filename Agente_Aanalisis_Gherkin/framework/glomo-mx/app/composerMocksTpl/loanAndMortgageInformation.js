'use strict';

module.exports = CONFIG => {
  const {
    nativeIos = false,
    native = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { campaigns: campaignsApiVersion }
    }
  } = CONFIG;
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const pageName = 'loanAndMortgageInformation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_loanAndMortgageInformation')(CONFIG);

  const base = {
    hash: 'loan-and-mortgage-information',
    currentPage: {
      url: '/loan-and-mortgage-information'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        className: nativeIos ? 'ios-top-padding' : '',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        headerHeightMinimum
      },
      propertiesSpherica: {
        disableEdgeSwipe: true
      }
    },
    components: []
  };

  const loanAndMortgageInformation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'loan-and-mortgage-information-mortgage-tracking-mx',
    familyPath: '@glomo-web-components/loan-and-mortgage-information-mortgage-tracking-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      campaignsApiVersion,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          connection_status_loanAndMortgageInformation_offline: {
            bind: 'showConnectionError'
          },
          connection_status_loanAndMortgageInformation_online: {
            bind: 'hideConnectionError'
          },
          global_unparsed_offers_retrieved: {
            bind: 'listOffersResponse'
          },
          app_info_structure_home_customized_offers_item_click: {
            bind: 'nboClick'
          },
          global_deep_link: {
            bind: 'selectedFolio'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'selectedFolio'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'selectedFolio'
          },
          [`${native ? 'native_user_id' : 'global_login_success'}`]: {
            bind: 'loginSuccess'
          }
        },
        out: {
          loan_and_mortgage_information_mortgage_tracking_go_back: {
            bind: 'navigation-go-back',
            backStep: true
          },
          loan_and_mortgage_information_open_settings: {
            bind: 'open-app-settings'
          },
          loan_and_mortgage_information_mortgage_tracking: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-mortgage-tracking',
            analytics: analytics.appPageViewLoanAndMortgageInformation()
          },
          loan_and_mortgage_information_detail: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-detail',
            analytics: analytics.appPageViewLevel4('detalle')
          },
          loan_and_mortgage_information_application_review: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-modal-type-revision-de-la-solicitud-open',
            analytics: analytics.appPageViewLevel4('revision de la solicitud')
          },
          loan_and_mortgage_information_mortgage_underwriting: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-modal-type-evaluacion-de-credito-hipotecario-open',
            analytics: analytics.appPageViewLevel4('evaluacion de credito')
          },
          loan_and_mortgage_information_property_appraisal: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-modal-type-evaluacion-de-inmueble-open',
            analytics: analytics.appPageViewLevel4('evaluacion del inmueble')
          },
          loan_and_mortgage_information_signing_and_disbursement: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-modal-type-firma-y-desembolso-open',
            analytics: analytics.appPageViewLevel4('firma y desembolso')
          },
          loan_and_mortgage_information_multi_folio_list: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-multi-folio-list',
            analytics: analytics.appPageViewLoanAndMortgageInformation('solicitudes en curso')
          },
          loan_and_mortgage_information_detail_information_not_available_error: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-informationnotavailablefull',
            analytics: analytics.appErrorPage('error informacion no disponible', 'error informacion no disponible')
          },
          loan_and_mortgage_information_detail_requested_amount_modal: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-loan-detail-requested-amount-modal-open',
            analytics: analytics.appPageViewLevel5('detalle', 'monto solicitado')
          },
          loan_and_mortgage_information_detail_monthly_payment_modal_open: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-loan-detail-monthly-payment-modal-open',
            analytics: analytics.appPageViewLevel5('detalle', 'pago mensual')
          },
          loan_and_mortgage_information_connection_error: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-connection-error',
            analytics: analytics.appErrorPage('error comunicacion interrumpida', 'error comunicacion interrumpida')
          },
          loan_and_mortgage_information_nbo_click: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-nbo-click',
            analytics: analytics.appNboClick
          },
          loan_and_mortgage_information_see_more: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-see-more',
            analytics: analytics.appInteractionLink('revision de la solicitud ver mas')
          },
          loan_and_mortgage_information_modal_review_faq_1: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-review-faq-1-question-opened',
            analytics: analytics.appInteractionLinkLevel4('rs', 'mi solicitud de credito tiene vencimiento')
          },
          loan_and_mortgage_information_modal_review_faq_2: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-review-faq-2-question-opened',
            analytics: analytics.appInteractionLinkLevel4('rs', 'que otros gastos debo considerar')
          },
          loan_and_mortgage_information_modal_review_faq_3: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-review-faq-3-question-opened',
            analytics: analytics.appInteractionLinkLevel4('rs', 'por que son tan importantes los seguros')
          },
          loan_and_mortgage_information_modal_review_faq_4: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-review-faq-4-question-opened',
            analytics: analytics.appInteractionLinkLevel4('rs', 'cuando se solicita una valoracion medica')
          },
          loan_and_mortgage_information_modal_review_faq_5: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-review-faq-5-question-opened',
            analytics: analytics.appInteractionLinkLevel4('rs', 'como fortalezco mi historial crediticio')
          },
          loan_and_mortgage_information_modal_credit_evaluation_faq_1: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-credit-evaluation-faq-1-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ec', 'en que debo fijarme para elegir mi credito hipotecario')
          },
          loan_and_mortgage_information_modal_credit_evaluation_faq_2: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-credit-evaluation-faq-2-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ec', 'puedo cambiar la oferta que me dio el ejecutivo')
          },
          loan_and_mortgage_information_modal_credit_evaluation_faq_3: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-credit-evaluation-faq-3-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ec', 'que otros documentos personales pueden pedirme')
          },
          loan_and_mortgage_information_modal_credit_evaluation_faq_4: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-credit-evaluation-faq-4-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ec', 'donde puedo ver la opcion que elegi')
          },
          loan_and_mortgage_information_modal_credit_evaluation_faq_5: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-credit-evaluation-faq-5-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ec', 'que beneficios tengo al contratar un credito con bbva')
          },
          loan_and_mortgage_information_modal_property_evaluation_faq_1: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-property-evaluation-faq-1-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ei', 'en que consiste el avaluo y cuanto cuesta')
          },
          loan_and_mortgage_information_modal_property_evaluation_faq_2: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-property-evaluation-faq-2-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ei', 'puedo elegir otro notario')
          },
          loan_and_mortgage_information_modal_property_evaluation_faq_3: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-property-evaluation-faq-3-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ei', 'en que debo fijarme para elegir un inmueble')
          },
          loan_and_mortgage_information_modal_property_evaluation_faq_4: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-property-evaluation-faq-4-question-opened',
            analytics: analytics.appInteractionLinkLevel4('ei', 'que puedo hacer si el resultado del avaluo es no recomendable')
          },
          loan_and_mortgage_information_modal_signature_disbursement_faq_1: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-signature-disbursement-faq-1-question-opened',
            analytics: analytics.appInteractionLinkLevel4('fd', 'debo hacer algo antes de la firma')
          },
          loan_and_mortgage_information_modal_signature_disbursement_faq_2: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-signature-disbursement-faq-2-question-opened',
            analytics: analytics.appInteractionLinkLevel4('fd', 'cuanto tiempo durara la firma')
          },
          loan_and_mortgage_information_modal_signature_disbursement_faq_3: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-signature-disbursement-faq-3-question-opened',
            analytics: analytics.appInteractionLinkLevel4('fd', 'que documentos debo llevar')
          },
          loan_and_mortgage_information_modal_signature_disbursement_faq_4: {
            bind: 'loan-and-mortgage-information-mortgage-tracking-mx-step-modal-signature-disbursement-faq-4-question-opened',
            analytics: analytics.appInteractionLinkLevel4('fd', 'a que debo prestar atencion durante la firma')
          }
        }
      }
    }
  };

  const nativeconnectorSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          loan_and_mortgage_information_open_settings: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  base.components.push(
    cellsConnectionStatus(pageName),
    loanAndMortgageInformation,
    nativeconnectorSettings
  );

  return base;
};