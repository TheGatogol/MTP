module.exports = CONFIG => {
  const {setProperty, connectionsOut} = require('./common/helpers/_utils');
  const blingsBase = require('./product/_blings-base')('mortgage')(CONFIG);
  const analytics = require('./analytics/_blingsMortgage.js')(CONFIG);

  setProperty(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').scenesMapping = {
    'escena 01': 'scene-welcome',
    'escena 02': 'scene-location',
    'escena 03': 'scene-ask-credit',
    'escena 05': 'scene-good-decision',
    'fecha': 'scene-date',
    'horario': 'scene-time',
    'final': 'scene-final'
  };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_welcome = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-welcome-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_welcome_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-welcome-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_change_scene_location = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-change-scene-location'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_location = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-location-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_ask_credit = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-ask-credit-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_ask_credit_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-ask-credit-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_good_decision = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-good-decision-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_date = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-change-scene-date'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_date_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-date-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_time = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-change-scene-time'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_time_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-time-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_change_scene_final = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-mortgage-scene-change-scene-final'
    };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-structure',
    tag: 'bbva-analyticmanager-sdk-videos-mortgage-blings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          blings_mortgage_bbva_feature_sdk_blings_mortgage_success_video: {
            bind: 'successVideo'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_welcome: {
            bind: 'partsSceneWelcome'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_welcome_interaction: {
            bind: 'interactionSceneWelcome'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_change_scene_location: {
            bind: 'changeSceneLocation'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_location: {
            bind: 'partsSceneLocation'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_state_saved: {
            bind: 'stateSaved'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_ask_credit: {
            bind: 'partsSceneAskCredit'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_ask_credit_interaction: {
            bind: 'interactionSceneAskCredit'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_good_decision: {
            bind: 'partsSceneGoodDecision'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_date: {
            bind: 'changeScenaDate'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_date_interaction: {
            bind: 'interactionSceneDate'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_time: {
            bind: 'changeSceneTime'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_time_interaction: {
            bind: 'interactionSceneTime'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_scene_change_scene_final: {
            bind: 'changeSceneEnd'
          },
          blings_mortgage_bbva_feature_sdk_videos_mortgage_blings_mortgage_generic_error_information: {
            bind: 'errorInformation'
          }
        },
        out: {
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_page_visit: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-welcome-event',
            analytics: analytics.appPageViewFootprint('welcome')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_welcome_ready_to_make_money: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-welcome-ready-to-make-money-event',
            analytics: analytics.appPageViewFootprint('welcome')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_welcome_mortgage_loan_amount: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-welcome-mortgage-loan-amount-event',
            analytics: analytics.appPageViewFootprint('welcome')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_welcome_real_estate_investment: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-welcome-real-estate-investment-event',
            analytics: analytics.appPageViewFootprint('welcome')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_welcome_type_property: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-welcome-type-property-event',
            analytics: analytics.appPageViewFootprint('typeProperty')
          },
          blings_mortgage_bbva_analyticmanager_sdk_videos_mortgage_blings_app_on_click_start: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-app-on-click-start-event',
            analytics: analytics.appOnClickStart
          },
          blings_mortgage_bbva_analyticmanager_sdk_videos_mortgage_blings_app_page_visit: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-app-page-visit-event',
            analytics: analytics.appPageVisit
          },
          blings_mortgage_bbva_analyticmanager_sdk_videos_mortgage_blings_app_started: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-app-started-event',
            analytics: analytics.appStarted
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_location_typology: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-location-typology-event',
            analytics: analytics.appStarted
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_location_state: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-location-state-event',
            analytics: analytics.getAppStepVideo('stepLocation')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_ask_credit_capital_gains: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-ask-credit-capital-gains-event',
            analytics: analytics.getAppStepVideo('stepCapitalGains')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_ask_credit_options: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-ask-credit-options-event',
            analytics: analytics.getAppStepVideo('stepAskCredit')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_good_decision_description: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-good-decision-description-event',
            analytics: analytics.getAppStepVideo('stepGoodDecision')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_good_decision_contact_me: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-good-decision-contact-me-event',
            analytics: analytics.getAppStepVideo('stepContactMe')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_date: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-date-event',
            analytics: analytics.getAppStepVideo('stepDate')
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_scene_time: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-scene-time-event',
            analytics: analytics.getAppStepVideo('stepTime')
          },
          blings_mortgage_bbva_analyticmanager_sdk_videos_mortgage_blings_app_completed: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-app-completed-event',
            analytics: analytics.appCompleted
          },
          blings_mortgage_bbva_analyticmanager_sdk_mortgage_blings_error_information: {
            bind: 'bbva-analyticmanager-sdk-videos-mortgage-blings-error-information-event',
            analytics: analytics.appErrorInformation()
          }
        }
      }
    }
  };

  blingsBase.components.push(analyticsManager);

  return blingsBase;
};
