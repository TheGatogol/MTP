/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const productId = 'accountMonthlyStatement';
  const base = require('./product/_monthly-statement')('account')('0')(CONFIG);
  const PAGE_NAME = 'accountMonthlyStatement';
  const connectionsOut = utils.connectionsOut(base);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const addProperty = utils.addProperty(base);
  const isNativeiOS = CONFIG.nativeIos;
  const prefixPage = utils.createPrefixFromPageName(productId);
  const managerMonthlyConnectionsOut = connectionsOut('bbva-manager-monthly-statement-enquiry-accounts-mx');

  const [getChannelName, getLocaleName] = utils.useNames(prefixPage);

  if (sphericaPageUtils.isSpherica()) {
    managerMonthlyConnectionsOut.account_monthly_statement_hidde_radio_group_and_confirm_button_spherica = {
      bind: 'bbva-manager-monthly-statement-enquiry-accounts-mx-hidde-radio-group-and-confirm-button-spherica'
    };
  }

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: `bg-light-grey ${isNativeiOS ? 'ios-top-padding' : ''}`
    }
  };

  addProperty('bbva-header-main').tagSpherica = 'bbva-header-main-spherica';
  addProperty('bbva-header-main').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-header-main').propertiesSpherica = {
    variant: 'first-level-initial',
    iOSFixedHeader: isNativeiOS,
    className: isNativeiOS && 'u-padding-top--0',
    leftButtons: [
      {
        icon: 'spherica:back-mini',
        label: 'cells-molecule-header-spherica-back',
        defaultEventIconName: 'header-main-icon-left-primary-click'
      }
    ]
  };

  addProperty('bbva-list-card').tagSpherica = 'bbva-list-card-spherica';
  addProperty('bbva-list-card').familyPathSpherica = '@glomo-web-components/bbva-list-card-spherica';
  addProperty('bbva-list-card').propertiesSpherica = {
    cardVariantClass: true,
    amountHeaderHidden: false,
    noLink: true,
    className: 'no-link',
    variant: 'primary-alt'
  };

  addProperty('bbva-header-category').tagSpherica = 'bbva-header-category-spherica';
  addProperty('bbva-header-category').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-header-category').propertiesSpherica = {
    className: 'u-margin--1',
    variant: 'default',
    text: 'account-monthly-statement-header-category-spherica'
  };

  addProperty('bbva-form-radio-group').tagSpherica = 'bbva-form-radio-button-spherica';
  addProperty('bbva-form-radio-group').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-form-radio-group').propertiesSpherica = {
    className: 'u-margin--1',
    newCellsConnections: {
      add: {
        in: {
          account_monthly_statement_hidde_radio_group_and_confirm_button: {
            bind: 'hidden'
          },
          account_monthly_statement_set_radio_group_options: {
            bind: 'items'
          },
          account_monthly_statement_set_selected_radio_group_options: {
            bind: 'selected'
          }
        },
        out: {
          account_monthly_statement_radio_option_changed: {
            bind: 'bbva-form-radio-button-input-change'
          },
          account_monthly_statement_get_statement_option: {
            bind: 'bbva-form-radio-button-input-change'
          }
        }
      }
    }
  };

  addProperty('bbva-form-select').tagSpherica = 'bbva-form-select-spherica';
  addProperty('bbva-form-select').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-form-select').propertiesSpherica = {
    label: 'Fecha de corte',
    className: 'u-margin--1',
    openIcon: 'spherica:unfold',
    closeIcon: 'coronita:close',
    hidden: true
  };

  addProperty('bbva-panel-info').tagSpherica = 'bbva-panel-info-spherica';
  addProperty('bbva-panel-info').familyPathSpherica = '@glomo-web-components/bbva-panel-info-spherica';
  addProperty('bbva-panel-info').propertiesSpherica = {
    microillustration: 'emptyState',
    microillustrationType: 'glass',
    className: 'outer-margin'
  };

  addProperty('bbva-button-default').tagSpherica = 'bbva-button-default-spherica';
  addProperty('bbva-button-default').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-button-default').propertiesSpherica = {
    size: 'M',
    text: getLocaleName('button-default'),
    fullwidth: true,
    className: isNativeiOS ? 'u-margin--grid u-margin-bottom--1-5 u-margin-top--0-5 u-max-width--2 u-padding-top--0 u-padding-bottom--0' : 'u-padding-left--1-5 u-padding-right--1-5 u-max-width--2 u-margin--grid',
    variant: 'primary'
  };
  addProperty('bbva-button-default').tag = 'bbva-button-default-first';

  addProperty('bbva-panel-info').tagSpherica = 'bbva-panel-info-spherica';
  addProperty('bbva-panel-info').familyPathSpherica = '@glomo-web-components/bbva-panel-info-spherica';
  addProperty('bbva-panel-info').propertiesSpherica = {
    microillustration: 'emptyState',
    microillustrationType: 'glass',
    className: 'outer-margin'
  };

  addProperty('bbva-button-default').tagSpherica = 'bbva-button-default-spherica';
  addProperty('bbva-button-default').familyPathSpherica = '@glomo-web-components/bbva-spherica-wrapper';
  addProperty('bbva-button-default').propertiesSpherica = {
    size: 'M',
    text: getLocaleName('button-default'),
    fullwidth: true,
    className: isNativeiOS ? 'u-margin--grid u-margin-bottom--1-5 u-margin-top--0-5 u-max-width--2 u-padding-top--0 u-padding-bottom--0' : 'u-padding-left--1-5 u-padding-right--1-5 u-max-width--2 u-margin--grid',
    variant: 'primary',
    newCellsConnections: {
      add: {
        in: {
          account_monthly_statement_hidde_radio_group_and_confirm_button_spherica: {
            bind: 'hidden'
          },
          account_monthly_statement_disabled_request_btn: {
            bind: 'disabled'
          }
        },
        out: {
          account_monthly_statement_request_button_clicked: {
            bind: 'click'
          }
        }
      }
    }
  };
  addProperty('bbva-button-default-first').tag = 'bbva-button-default';

  const accountsApiDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('get_product')]: {
            bind: 'getAccount'
          },
          [getChannelName('get_financial_statements_dates')]: {
            bind: 'getAccountFinancialStatements'
          }
        },
        out: {
          [getChannelName('get_product_success')]: {
            bind: 'get-on-get-account'
          },
          [getChannelName('get_product_error')]: {
            bind: 'error-on-get-account'
          },
          [getChannelName('get_financial_statement_dates_success')]: {
            bind: 'set-account-financial-statements'
          },
          [getChannelName('get_financial_statement_dates_error')]: {
            bind: 'error-on-get-account-financial-statements'
          }
        },
        params: {
          accountId: 'productId'
        }
      }
    }
  };

  base.components.push(accountsApiDm);

  return sphericaPageUtils.spherize(base);
};