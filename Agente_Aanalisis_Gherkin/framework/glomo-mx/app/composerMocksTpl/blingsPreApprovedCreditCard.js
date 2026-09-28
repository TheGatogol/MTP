module.exports = CONFIG => {
  const {setProperty, connectionsOut} = require('./common/helpers/_utils');
  const blingsBase = require('./product/_blings-base')('preApprovedCreditCard')(CONFIG);
  const analytics = require('./analytics/_blingsTdc.js')(CONFIG);

  setProperty(blingsBase)('bbva-header-main').variant = 'modal-three-level';

  setProperty(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').backgroundColoriFrame = '#FFFFFF';
  setProperty(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').sdkPathSettings = 'blingsPreApprovedCreditCard';
  setProperty(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').nameSceneFinal = 'scene-feedback-gift';
  setProperty(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').scenesMapping = {
    'escena_01': 'scene-welcome',
    'escena_02': 'scene-category',
    'escena_03': 'scene-feedback-category',
    'escena_04': 'scene-feedback-gift',
    'escena_04_feedback_regalo': 'scene-chance'
  };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_welcome = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-change-scene-welcome'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_welcome = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-welcome-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_welcome_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-welcome-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_category = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-change-scene-category'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_category_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-category-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_feedback_category = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-feedback-category-progress'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_feedback_category_interaction = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-feedback-category-interaction'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_feedback_gift = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-change-scene-feedback-gift'
    };

  connectionsOut(blingsBase)('bbva-feature-sdk-videos-mortgage-blings').
    blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_chance = {
      bind: 'bbva-feature-sdk-videos-mortgage-blings-preapprovedcreditcard-scene-chance-progress'
    };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-structure',
    tag: 'bbva-analyticmanager-sdk-videos-tdc-blings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          glomo_send_selected_original_shortcut_data: {
            bind: 'saveTdcData'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_welcome: {
            bind: 'changeSceneWelcome'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_welcome: {
            bind: 'partsSceneWelcome'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_welcome_interaction: {
            bind: 'interactionSceneWelcome'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_category: {
            bind: 'changeSceneCategory'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_category_interaction: {
            bind: 'interactionSceneCategory'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_feedback_category: {
            bind: 'partsSceneFeedbackCategory'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_feedback_category_interaction: {
            bind: 'blingsTdcSteps'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_change_scene_feedback_gift: {
            bind: 'blingsTdcSteps'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_scene_chance: {
            bind: 'partsSceneChance'
          },
          blings_preapprovedcreditcard_bbva_feature_sdk_videos_mortgage_blings_mortgage_generic_error_information: {
            bind: 'errorInformation'
          }
        },
        out: {
          blings_preapprovedcreditcard_fire_page_visit: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageView
          },
          blings_preapprovedcreditcard_fire_page_view_scene_welcome: {
            bind: 'analytics-page-view-scene-welcome-started',
            analytics: analytics.appStarted
          },
          blings_preapprovedcreditcard_fire_page_view_earn_rewards: {
            bind: 'analytics-page-view-earn-rewards',
            analytics: analytics.pageViewDynamicL5('ganar recompensas')
          },
          blings_preapprovedcreditcard_fire_page_view_give_benefits: {
            bind: 'analytics-page-view-give-benefits',
            analytics: analytics.pageViewDynamicL5('darte beneficios')
          },
          blings_preapprovedcreditcard_fire_page_view_know_how: {
            bind: 'analytics-page-view-know-how',
            analytics: analytics.pageViewDynamicL5('saber como')
          },
          blings_preapprovedcreditcard_fire_page_view_how_much_per_munth: {
            bind: 'analytics-page-view-how-much-per-munth',
            analytics: analytics.pageViewDynamicL4('sabes cuanto gastas al mes')
          },
          blings_preapprovedcreditcard_fire_app_how_much_per_munth_step: {
            bind: 'analytics-page-view-how-much-per-munth-step',
            analytics: analytics.getDynamicSteps(2)
          },
          blings_preapprovedcreditcard_fire_app_step_spend_most: {
            bind: 'analyiticas-app-step-spend-most',
            analytics: analytics.getDynamicSteps(3)
          },
          blings_preapprovedcreditcard_fire_app_step_first_points: {
            bind: 'analyiticas-app-step-first-points',
            analytics: analytics.getDynamicSteps(4)
          },
          blings_preapprovedcreditcard_fire_app_step_calculate_points: {
            bind: 'analyiticas-app-step-calculate-points',
            analytics: analytics.getDynamicSteps(5)
          },
          blings_preapprovedcreditcard_fire_app_step_gift: {
            bind: 'analyiticas-app-step-gift',
            analytics: analytics.getDynamicSteps(6)
          },
          blings_preapprovedcreditcard_fire_app_step_open_gift: {
            bind: 'analyiticas-app-step-open-gift',
            analytics: analytics.getDynamicSteps(7)
          },
          blings_preapprovedcreditcard_fire_app_step_benefits_card: {
            bind: 'analyiticas-app-step-benefits-card',
            analytics: analytics.getDynamicSteps(8)
          },
          blings_preapprovedcreditcard_fire_app_step_chance: {
            bind: 'analyiticas-app-step-chance',
            analytics: analytics.getDynamicSteps(9)
          },
          blings_preapprovedcreditcard_fire_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          },
          blings_preapprovedcreditcard_fire_app_error: {
            bind: 'analyiticas-app-error-information',
            analytics: analytics.pageError
          }
        }
      }
    }
  };

  blingsBase.components.push(analyticsManager);

  return blingsBase;
};
