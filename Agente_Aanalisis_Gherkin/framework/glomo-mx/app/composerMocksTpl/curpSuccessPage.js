'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'curpSuccessPage';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  let curpSuccessPageJSON = {};
  curpSuccessPageJSON = {
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        hasFooter: false
      },
      propertiesSpherica: {
        className: 'ios-top-padding',
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: ''
      }
    },
    components: [
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: isNativeIos ? 'notch-padding header--core' : 'header--core',
          rightIcon: 'coronita:close',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_HEADER_TITLE_TEXT']: {
                bind: 'titleName'
              }
            },
            out: {
              [PAGE_NAME + '_GO_BACK']: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          secondaryBtn: '#btnRight',
          leftIcon: '',
          titleName: 'glomo-curp-management-title-add',
          rightIcon: 'coronita:close',
          className: 'header--white header',
          rightIconText: 'cells-molecule-header-spherica-close',
          cellsConnections: {
            in: {
              curpSuccessPage_HEADER_TITLE_TEXT: {
                bind: 'titleName'
              }
            },
            out: {
              curpSuccessPage_GO_BACK: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-curp-management-dm',
        properties: {
          cellsConnections: {
            in: {
              curpPage_PROCESS_SUCCESS: {
                bind: 'setSuccessResult'
              }
            },
            out: {
              curpSuccessPage_HEADER_TITLE_TEXT: {
                bind: 'set-title-success-text'
              },
              curpSuccessPage_CURP_SUCCESS: {
                bind: 'set-result'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        properties: {
          withoutHead: true,
          disableButtons: isSpherica,
          formatDate: 'DD MMMM YYYY, hh:mm [h]',
          cellsConnections: {
            in: {
              curpSuccessPage_CURP_SUCCESS: {
                bind: 'result'
              }
            },
            out: {
              curpSuccessPage_GO_BACK: {
                bind: 'cells-successful-response-click-primary',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          withSuccessHead: true,
          withoutHead: false
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(curpSuccessPageJSON);
};
