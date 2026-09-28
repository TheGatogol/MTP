/* eslint-disable new-cap */
'use strict';

module.exports = (PRODUCT) => (APIPDF) => (CONFIG) => {
  const utils = require('../common/helpers/_utils');
  const pages = require('../common/_pages')(CONFIG)('monthlyStatementPage');
  const addRetryErrors = require('../common/commonErrors/_dm-retry-errors')(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeiOS = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage();
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const prefixPage = utils.createPrefixFromPageName(
    `${PRODUCT.toLowerCase()}MonthlyStatement`
  );
  const [getChannelName, getLocaleName] = utils.useNames(prefixPage);

  const base = {
    hash: 'monthlyStatementPage' + PRODUCT,
    currentPage: {
      url: `/monthly-statement-page-${PRODUCT.toLowerCase()}`
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        className: 'bbva-core-blue',
        headerFixed: true,
        iOSFixedHeader: isNativeiOS,
        footerHeight: 85,
        hasFooter: true,
        footerFixed: true,
        cellsConnections: {
          in: {
            [getChannelName('hidde_footer')]: {
              bind: 'hasFooter'
            },
            [getChannelName('fixed_footer')]: {
              bind: 'footerFixed'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        familyPath: '@bbva-web-components/bbva-header-main',
        render: 'litElement',
        properties: {
          iconLeftPrimary: 'coronita:return-12',
          text: getLocaleName('header'),
          cellsConnections: {
            out: {
              [getChannelName('back_step')]: {
                bind: 'header-main-icon-left-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-list-card',
        familyPath: '@bbva-web-components/bbva-list-card',
        render: 'litElement',
        properties: {
          visibleChars: 4,
          currencyCode: LOCAL_CURRENCY,
          localCurrency: LOCAL_CURRENCY,
          language: LANGUAGE,
          noLink: true,
          cellsConnections: {
            in: {
              [getChannelName('product_amount')]: {
                bind: 'amount'
              },
              [getChannelName('product_text')]: {
                bind: 'contentText'
              },
              [getChannelName('accessibility_text')]: {
                bind: 'accessibilityText'
              },
              [getChannelName('product_name')]: {
                bind: 'cardTitle'
              },
              [getChannelName('product_number')]: {
                bind: 'numProduct'
              },
              [getChannelName('product_img')]: {
                bind: 'cardImage'
              },
              [getChannelName('product_show_img')]: {
                bind: 'showCard'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-category',
        familyPath: '@bbva-spherica-components/bbva-header-category',
        render: 'litElement',
        properties: {
          text: getLocaleName('header-category')
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-radio-group',
        familyPath: '@bbva-web-components/bbva-form-radio-group',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          name: 'radioForm',
          cellsConnections: {
            in: {
              [getChannelName('hidde_radio_group_and_confirm_button')]: {
                bind: 'hidden'
              },
              [getChannelName('set_radio_group_options')]: {
                bind: 'items'
              }
            },
            out: {
              [getChannelName('radio_option_changed')]: {
                bind: 'form-radio-group-item-change'
              },
              [getChannelName('get_statement_option')]: {
                bind: 'form-radio-group-item-change'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-select',
        familyPath: '@bbva-web-components/bbva-form-select',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          label: '',
          optionalLabel: getLocaleName('form-select-label'),
          openIcon: 'coronita:unfold',
          closeIcon: 'coronita:fold',
          hidden: true,
          cellsConnections: {
            in: {
              [getChannelName('hidde_dropdown')]: {
                bind: 'hidden'
              },
              [getChannelName('set_form_select_items')]: {
                bind: 'items'
              },
              [getChannelName('reset_options_layer')]: {
                bind: 'opened'
              }
            },
            out: {
              [getChannelName('change_statement_id')]: {
                bind: 'bbva-form-select-selected-item'
              },
              [getChannelName('status_footer')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-bottom--2',
          text: getLocaleName('button-default'),
          disabled: true,
          hidden: true,
          cellsConnections: {
            in: {
              [getChannelName('hidde_radio_group_and_confirm_button')]: {
                bind: 'hidden'
              },
              [getChannelName('disabled_request_btn')]: {
                bind: 'disabled'
              }
            },
            out: {
              [getChannelName('request_button_clicked')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          text: getLocaleName('panel-info'),
          cellsConnections: {
            in: {
              [getChannelName('hidde_panel_info_and_exit_button')]: {
                bind: 'hidden'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-bottom--2',
          text: getLocaleName('default'),
          cellsConnections: {
            in: {
              [getChannelName('hidde_panel_info_and_exit_button')]: {
                bind: 'hidden'
              }
            },
            out: {
              [getChannelName('exit_button_clicked')]: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`,
        familyPath: '@glomo-web-components/bbva-manager-monthly-statement-enquiry',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          language: LANGUAGE,
          apiPdfVersion: APIPDF,
          dateOptions: {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          },
          cellsConnections: {
            in: {
              [`__bridge_page_${PRODUCT}MonthlyStatement`]: {
                bind: 'initFlow'
              },
              [getChannelName('change_statement_id')]: {
                bind: 'setMonthlyStatementId'
              },
              [getChannelName('get_statement_option')]: {
                bind: 'getStatementOption'
              },
              [getChannelName('radio_option_changed')]: {
                bind: 'showDropDown'
              },
              [getChannelName('get_product_success')]: {
                bind: 'formatProduct'
              },
              [getChannelName('get_product_error')]: {
                bind: 'formatProductError'
              },
              [getChannelName('get_financial_statement_dates_success')]: {
                bind: 'formatMonthlyStatementDates'
              },
              [getChannelName('get_financial_statement_dates_error')]: {
                bind: 'formatMonthlyStatementDatesError'
              },
              [getChannelName('request_button_clicked')]: {
                bind: 'showPdfDocument'
              },
              [getChannelName('request_pdf_document_success')]: {
                bind: 'showPdfDocument'
              },
              [getChannelName('request_pdf_document_error')]: {
                bind: 'showPdfDocument'
              },
              [getChannelName('back_step')]: {
                bind: 'reset'
              },
              [getChannelName('exit_button_clicked')]: {
                bind: 'reset'
              },
              [getChannelName('back_button_pressed')]: {
                bind: 'reset'
              },
              global_open_document_url_error: {
                bind: 'retryOpenDocument'
              },
              [getChannelName('status_footer')]: {
                bind: 'statusFooter'
              }
            },
            out: {
              [getChannelName('product_amount')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-amount`
              },
              [getChannelName('product_text')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-text`
              },
              [getChannelName('accessibility_text')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-text`
              },
              [getChannelName('product_name')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-name`
              },
              [getChannelName('product_number')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-number`
              },
              [getChannelName('product_img')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-img`
              },
              [getChannelName('product_show_img')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-product-show-img`
              },
              [getChannelName('get_product')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-get-product`
              },
              [getChannelName('get_financial_statements_dates')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-get-financial-statements-dates`
              },
              [getChannelName('hidde_panel_info_and_exit_button')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-panel-info-and-exit-button`
              },
              [getChannelName('hidde_radio_group_and_confirm_button')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-radio-group-and-confirm-button`
              },
              [getChannelName('set_radio_group_options')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-set-radio-group-options`
              },
              [getChannelName('set_selected_radio_group_options')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-set-selected-radio-group-options`
              },
              [getChannelName('set_form_select_items')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-set-form-select-items`
              },
              [getChannelName('request_pdf_document')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-request-pdf-document`
              },
              [getChannelName('hidde_dropdown')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-dropdown`
              },
              [getChannelName('disabled_request_btn')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-disabled-request-btn`
              },
              [getChannelName('reset_flow_success')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-reset-flow-success`,
                backStep: true
              },
              global_open_document_url: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-open-document`
              },
              global_retry_error: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-retry-error`
              },
              open_control_veil: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-show-spinner`
              },
              close_control_veil: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-spinner`
              },
              [getChannelName('hidde_footer')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-footer`
              },
              [getChannelName('fixed_footer')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-hidde-footer`
              },
              [getChannelName('reset_options_layer')]: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-reset-options-layer`
              },
              card_Detail_analytics_initial_event: {
                bind: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx-set-cards-analitics`
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([{
    id: `retry-get-statement-pdf-${PRODUCT}s`,
    acceptRetry: { bind: 'showPdfDocument', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx` },
    cancelRetry: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`},
    acceptCallForHelp: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`}
  }, {
    id: `retry-get-product-${PRODUCT}s`,
    acceptRetry: { bind: 'retryFlow', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx` },
    cancelRetry: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`},
    acceptCallForHelp: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`}
  }, {
    id: `retry-monthly-statemen-dates-${PRODUCT}s`,
    acceptRetry: { bind: 'retryFlow', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx` },
    cancelRetry: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`},
    acceptCallForHelp: { bind: 'reset', component: `bbva-manager-monthly-statement-enquiry-${PRODUCT}s-mx`}
  }]);

  return base;
};
