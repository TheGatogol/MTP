'use strict';

module.exports = config => {
  const { SPINNER: spinner, headerHeight } = require('./common/helpers/_utils');
  const isNativeIos = config.nativeIos || false;
  const base = {
    template: {
      tag: 'cells-template-coronita',
      properties: {
        mode: 'seamed',
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        headerHeight,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      spinner(config),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          titleName: 'dynamic-life-insurance-main-page-header-title',
          className: 'alert ' + isNativeIos ? 'ios-top-padding' : '',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {},
            out: {
              LIEP_BACKSTEP: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-life-insurance-edit-percentage',
        properties: {
          bbvaBankId: config.bbvaBankListId,
          cellsConnections: {
            in: {
              __bridge_page_lifeInsuranceEditPercentagePage: {
                bind: '_boot'
              },
              DYNAMIC_LIFE_INSURANCE_OFFER_PAGE_EDIT_PERCENTAGE: {
                bind: 'setBeneficyaris'
              }
            },
            out: {
              DYNAMIC_LIFE_INSURANCE_SEND_EDITED_PERCENTAGES: {
                bind: 'send-edited-percentages',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };
  return base;
};