(function() {
  'use strict';

  module.exports = (config) => {
    const utils = require('./common/helpers/_utils');
    const COUNTRY = utils.getCountry(config);
    const {disconnectedBanner, cellsConnectionStatus} = require('./common/_cross-components');
    const PAGE_NAME = 'securityTipsDetailPage';
    const isNativeIos = config.nativeIos || false;
    const BBVA_PHONE_NUMBER = utils.call2BBVA(config).link.replace('tel:', '');
    const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
    const isSpherica = sphericaPageUtils.isSpherica();
    const ALERTCLASSNAME = 'security-tips-page button__alert-box--no-min-width';
    let securityTipsDetailPageJSON = {};
    securityTipsDetailPageJSON = {
      template: {
        tag: 'cells-template-coronita',
        tagSpherica: 'cells-template-coronita-spherica',
        properties: {
          mode: 'seamed',
          disableEdgeSwipe: true,
          animationType: 'verticalUp',
          className: isNativeIos ? 'ios-top-padding' : ''
        },
        propertiesSpherica: {
          extraHeaderClass: 'bg-light-grey',
          className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
        }
      },
      components: [
        {
          zone: 'app__main',
          type: 'DM',
          tag: 'bbva-manager-security-tips-list',
          familyPath: '@glomo-web-components/bbva-manager-security-tips-list',
          render: 'litElement',
          properties: {
            country: COUNTRY,
            phone: {
              value: BBVA_PHONE_NUMBER
            },
            cellsConnections: {
              in: {
                security_tips_phone_call: {
                  bind: 'requestCall'
                }
              },
              out: {
                global_action_launcher_dialer: {
                  bind: 'call-bbva-line',
                  'forward-to-native': true
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
          type: 'CC',
          tag: 'glomo-alert-manager',
          tagSpherica: 'glomo-alert-manager-spherica',
          properties: {
            className: config.nativeIos ? 'ios-top-padding ' + ALERTCLASSNAME : ALERTCLASSNAME,
            opened: true,
            cellsConnections: {
              in: {
                global_security_tips_set_tip_detail_modal: {
                  bind: 'openWithSettings'
                },
                __bridge_cancelled_back_navigation: {
                  bind: 'handleNativeBackButton'
                }
              },
              out: {
                global_security_tips_set_tip_detail_modal_cancel: {
                  bind: 'cells-to-native-modal-closed',
                  backStep: true,
                  'forward-to-native': true
                },
                security_tips_phone_call: {
                  bind: 'call-center'
                }
              }
            }
          }
        }
      ]
    };

    securityTipsDetailPageJSON.components.push(
      disconnectedBanner(PAGE_NAME),
      cellsConnectionStatus(PAGE_NAME)
    );
    return sphericaPageUtils.spherize(securityTipsDetailPageJSON);
  };
}());
