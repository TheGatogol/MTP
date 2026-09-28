/* eslint-disable no-shadow */
'use strict';
const { useNames, toUnderscoreCase } = require('./helpers/_utils');
const analyticsCallMeBack = (CONFIG) => {
  const ANALYTICS = require('../analytics/_redirectCallMeBack')();
  const { getInternalLinkCallMeBack, getInternalLinkClickToCall } = ANALYTICS;
  const analyticComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-call-me-back',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      configAnalytics: CONFIG,
      cellsConnections: {
        in: {
          global_call_me_back_set_current_step: {
            bind: 'currentStep'
          },
          global_call_me_back_is_remote_manager: {
            bind: 'isRemoteManager'
          },
          global_call_me_back_init_header_configuration: {
            bind: 'fireHeaderAnalytic'
          },
          global_call_me_back_init_sticky_configuration: {
            bind: 'fireStickyAnalytic'
          },
          global_call_me_back_init_summary_configuration: {
            bind: 'fireSummaryAnalytic'
          }
        },
        out: {}
      }
    }
  };
  if (CONFIG) {
    const { steps, levels, buttons, operativeName } = CONFIG;
    const types = {
      header: 'icono telefono',
      sticky: 'sticky',
      summary: 'sticky'
    };
    if (steps) {
      const analyticsSteps = [];
      Object.keys(steps).forEach(step => {
        const parseLevels = {};
        Object.values(levels).forEach((level, index) => {
          Object.assign(parseLevels, { ['level' + (index + 1)]: level });
        });
        const extraLevel = (Object.values(levels).length + 1);
        analyticsSteps.push(Object.assign(parseLevels, { ['level' + extraLevel]: steps[step] }));
      });
      analyticsSteps.forEach((channel, index) => {
        const links = ['header', 'sticky'];
        links.forEach(link => {
          const channelName = name => 'analytic_' + operativeName + '_' + name + '_internal_link_' + link + '_' + (index + 1);
          const channelNameCmb = channelName('call_me_back');
          const channelNameCtc = channelName('click_to_call');
          const eventName = name => 'analytic-' + name + '-internal-link-' + link + '-' + (index + 1);
          const eventNameCmb = eventName('call-me-back');
          const eventNameCtc = eventName('click-to-call');
          analyticComponent.properties.cellsConnections.out[channelNameCmb] = {
            bind: eventNameCmb,
            analytics: getInternalLinkCallMeBack(types[link], channel)
          };
          analyticComponent.properties.cellsConnections.out[channelNameCtc] = {
            bind: eventNameCtc,
            analytics: getInternalLinkClickToCall(types[link], channel)
          };
        });
      });
    }
    if (buttons) {
      const analyticsButtons = [];
      Object.keys(buttons).forEach(button => {
        const parseLevels = {};
        Object.values(levels).forEach((level, index) => {
          Object.assign(parseLevels, { ['level' + (index + 1)]: level });
        });
        const extraLevel = (Object.values(levels).length + 1);
        analyticsButtons.push(Object.assign(parseLevels, { ['level' + extraLevel]: buttons[button], type: button }));
      });
      analyticsButtons.forEach((channel, index) => {
        const channelName = name => 'analytic_' + operativeName + '_' + name + '_internal_link_' + channel.type + '_' + (index + 1);
        const channelNameCmb = channelName('call_me_back');
        const channelNameCtc = channelName('click_to_call');
        const eventName = name => 'analytic-' + name + '-internal-link-' + channel.type;
        const eventNameCmb = eventName('call-me-back');
        const eventNameCtc = eventName('click-to-call');
        analyticComponent.properties.cellsConnections.out[channelNameCmb] = {
          bind: eventNameCmb,
          analytics: getInternalLinkCallMeBack(types[channel.type], channel)
        };
        analyticComponent.properties.cellsConnections.out[channelNameCtc] = {
          bind: eventNameCtc,
          analytics: getInternalLinkClickToCall(types[channel.type], channel)
        };
      });
    }
    const operativePrefix = toUnderscoreCase(operativeName).toLowerCase();
    const [ getChannelName ] = useNames(operativePrefix);
    Object.assign(analyticComponent.properties.cellsConnections.in, {
      [getChannelName('_call_me_back_set_current_step')]: {
        bind: 'currentStep'
      },
      [getChannelName('_call_me_back_is_remote_manager')]: {
        bind: 'isRemoteManager'
      },
      [getChannelName('_call_me_back_init_header_configuration')]: {
        bind: 'fireHeaderAnalytic'
      },
      [getChannelName('_call_me_back_init_sticky_configuration')]: {
        bind: 'fireStickyAnalytic'
      },
      [getChannelName('_call_me_back_init_summary_configuration')]: {
        bind: 'fireSummaryAnalytic'
      }
    });
  }
  return analyticComponent;
};
const controllerCallMeBack = (CONFIG) => {
  const {
    operativeName,
    productName,
    configEntryPoints,
    lastStep,
    onlyCallMeBack = false,
    recoverySettings = false,
    onlyClickToCall = false,
    offerIdStatic = 'vYf2r9W-0DHsBAoMnpO8cNGv16h4J2hv',
    onlyCallMeBackRemoteManager = false,
    provider,
    timeZone,
    useFeatureFlag,
    scheduleNotAllowed,
    isCallCenter,
    twoCallMeBacks,
    migrationGenesys,
    notGlobalInitConfigurationChannel
  } = CONFIG;
  const operativePrefix = toUnderscoreCase(operativeName).toLowerCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const controllerComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-call-me-back',
    familyPath: '@glomo-web-components/bbva-controller-call-me-back',
    render: 'litElement',
    properties: {
      operativeName,
      productName,
      configEntryPoints,
      onlyCallMeBack,
      recoverySettings,
      lastStep,
      onlyClickToCall,
      offerIdStatic,
      onlyCallMeBackRemoteManager,
      provider,
      timeZone,
      useFeatureFlag,
      scheduleNotAllowed,
      isCallCenter,
      twoCallMeBacks,
      migrationGenesys,
      cellsConnections: {
        in: {
          global_login_success_indicators: {
            bind: 'indicators'
          },
          bbva_controller_oc_loan_mx_init_call_me_back_settings: {
            bind: 'productName'
          },
          global_set_app_settings: {
            bind: 'setPublicKeys'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success: {
            bind: 'user'
          },
          global_storage_get_loginData_success: {
            bind: 'loginData'
          },
          native_user_id: {
            bind: 'phoneNumber'
          },
          global_storage_get_call_me_back_success: {
            bind: 'validateTooltipOperatives'
          },
          global_storage_get_call_me_back_error: {
            bind: 'validateTooltipOperatives'
          },
          global_call_me_back_initialize: {
            bind: 'init'
          },
          global_call_me_back_change_step_state: {
            bind: 'collapseStickyZone'
          },
          global_call_me_back_go_next_step: {
            bind: 'showStickyZone'
          },
          global_call_me_back_reset_step: {
            bind: 'reset'
          },
          global_entry_points_call_me_back: {
            bind: 'configEntryPoints'
          },
          [getChannelName('_call_me_back_initialize')]: {
            bind: 'init'
          },
          [getChannelName('_call_me_back_init_header_configuration')]: {
            bind: 'setInitConfiguration'
          },
          [getChannelName('_call_me_back_init_sticky_configuration')]: {
            bind: 'setInitConfiguration'
          },
          [getChannelName('_call_me_back_init_summary_configuration')]: {
            bind: 'setInitConfiguration'
          },
          [getChannelName('_call_me_back_init_modal_configuration')]: {
            bind: 'setInitConfigurationProactiveAssistance'
          },
          [getChannelName('_call_me_back_change_step_state')]: {
            bind: 'collapseStickyZone'
          },
          [getChannelName('_call_me_back_go_next_step')]: {
            bind: 'showStickyZone'
          },
          [getChannelName('_call_me_back_reset_step')]: {
            bind: 'reset'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-call-me-back-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-call-me-back-in-local-storage'
          },
          global_call_me_back_change_header_tooltip_status: {
            bind: 'change-tooltip-status'
          },
          global_call_me_back_set_header_timeout_tooltip: {
            bind: 'set-header-timeout-tooltip'
          },
          global_call_me_back_set_header_configuration: {
            bind: 'set-header-configuration'
          },
          global_call_me_back_show_sticky_button: {
            bind: 'show-sticky-button'
          },
          global_call_me_back_show_summary_button: {
            bind: 'show-summary-button'
          },
          global_call_me_back_is_remote_manager: {
            bind: 'is-remote-manager'
          },
          global_call_me_back_navigation: {
            bind: 'set-init-configuration',
            link: {
              page: 'redirectCallMeBack'
            }
          },
          global_call_me_back_show_confirm_channel: {
            bind: 'show-confirm-zone'
          },
          global_call_me_back_show_primary_button: {
            bind: 'hide-confirm-button'
          },
          global_call_me_back_show_call_me_back_in_sticky: {
            bind: 'show-call-me-back-in-sticky'
          },
          global_call_me_back_show_summary_view_button: {
            bind: 'show-text-sticky-button'
          },
          global_call_me_back_set_current_step: {
            bind: 'send-call-me-back-step'
          },
          global_call_me_back_show_secondary_button: {
            bind: 'show-secondary-button'
          },
          global_call_me_back_show_secondary_button_header: {
            bind: 'set-header-icon-right-secondary'
          },
          global_call_me_back_hidden_secondary_button: {
            bind: 'hidden-secondary-button'
          },
          [getChannelName('_call_me_back_change_header_tooltip_status')]: {
            bind: 'change-tooltip-status'
          },
          [getChannelName('_call_me_back_set_header_timeout_tooltip')]: {
            bind: 'set-header-timeout-tooltip'
          },
          [getChannelName('_call_me_back_set_header_configuration')]: {
            bind: 'set-header-configuration'
          },
          [getChannelName('_call_me_back_show_sticky_button')]: {
            bind: 'show-sticky-button'
          },
          [getChannelName('_call_me_back_show_summary_button')]: {
            bind: 'show-summary-button'
          },
          [getChannelName('_call_me_back_is_remote_manager')]: {
            bind: 'is-remote-manager'
          },
          [getChannelName('_call_me_back_show_confirm_channel')]: {
            bind: 'show-confirm-zone'
          },
          [getChannelName('_call_me_back_show_summary_sticky_button')]: {
            bind: 'hide-confirm-button'
          },
          [getChannelName('_call_me_back_show_call_me_back_in_sticky')]: {
            bind: 'show-call-me-back-in-sticky'
          },
          [getChannelName('_call_me_back_show_summary_view_button')]: {
            bind: 'show-text-sticky-button'
          },
          [getChannelName('_call_me_back_set_current_step')]: {
            bind: 'send-call-me-back-step'
          },
          [getChannelName('_call_me_back_sticky_button')]: {
            bind: 'show-secondary-button'
          },
          [getChannelName('_call_me_back_show_icon_button_header')]: {
            bind: 'set-header-icon-right-secondary'
          },
          [getChannelName('_call_me_back_hidden_sticky_button')]: {
            bind: 'hidden-secondary-button'
          }
        },
        params: {
          offerId: 'offerId',
          customerId: 'global_user_id',
          clientId: 'global_client_id'
        }
      }
    }
  };

  if (!notGlobalInitConfigurationChannel) {
    Object.assign(controllerComponent.properties.cellsConnections.in, {
      global_call_me_back_init_header_configuration: {
        bind: 'setInitConfiguration'
      },
      global_call_me_back_init_sticky_configuration: {
        bind: 'setInitConfiguration'
      },
      global_call_me_back_init_summary_configuration: {
        bind: 'setInitConfiguration'
      }
    });
  }

  return controllerComponent;
};

module.exports = {
  analyticsCallMeBack,
  controllerCallMeBack
};
