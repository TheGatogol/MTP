/* eslint-disable no-shadow */
'use strict';
module.exports = config => {
  const localStorage = require('./common/_local-storage');
  const PAGE_NAME = 'emergencyTrackingReports';
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  // eslint-disable-next-line max-len
  const insuranceLossFields = 'phoneNumber,address.location.geolocation.latitude,address.location.geolocation.longitude,insuranceContract.number,insuranceContract.certificateNumber';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const ANALYTICS = require('./analytics/_emergencyTrackingReports')(config);
  let base = {};

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      disableEdgeSwipe: true,
      topOnConfirm: true,
      animationType: 'verticalUp',
      showConfirmInManualScroll: true,
      iOSFixedHeader: config.nativeIos,
      extraHeaderClass: 'dark-blue-bg'
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica',
      override: {
        iOSFixedHeader: config.nativeIos
      }
    })
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaEmergencyTrackingReports = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-tracking-reports-mx',
    tag: 'emergency-tracking-reports-mx',
    render: 'litElement',
    properties: {
      language: 'es-MX',
      host: config.globalServices.host,
      native: !!config.native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      viewCallVisible: true,
      insuranceLossFields: insuranceLossFields,
      phoneNumberBbvaLineVehicle: config.phoneNumberBbvaLine,
      apiKey: config.googleMapsApiKey,
      geolocationRequestsFrequency: 10000,
      cellsConnections: {
        in: {
          emergency_tracking_reports_set_losses_report_request_id: {
            bind: 'lossesReportRequestsId'
          },
          emergency_tracking_reports_set_sos_entry_point: {
            bind: 'sosEntryPoint'
          },
          emergency_tracking_reports_set_emergencies_entry_point: {
            bind: 'emergenciesEntryPoint'
          },
          emergency_tracking_reports_set_policy_id: {
            bind: 'policyId'
          },
          emergency_tracking_reports_set_claim_task: {
            bind: 'claimTask'
          }
        },
        out: {
          emergency_tracking_reports_back_step: {
            bind: 'emergency-tracking-reports-mx-back-step-go',
            backStep: true
          },
          emergency_tracking_reports_back_step_return: {
            bind: 'emergency-tracking-mx-reports-step-return',
            backStep: true
          },
          emergency_tracking_reports_phone_call: {
            bind: 'emergency-tracking-reports-mx-phone-call'
          },
          emergency_tracking_reports_raise_a_new_report: {
            bind: 'emergency-tracking-reports-raise-a-new-report'
          },
          emergency_tracking_reports_remove_losses_report_request_id: {
            bind: 'emergency-tracking-reports-mx-losses-report-requests-id-remove'
          },
          emergency_tracking_modal_state: {
            bind: 'modal-state-change'
          }
        }
      }
    }
  };

  const bbvaManagerEmergency = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    tag: 'bbva-manager-emergency-sos',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          emergency_tracking_reports_remove_losses_report_request_id: {
            bind: 'removeLossesReportRequestsIdFromLocalStorage'
          },
          global_storage_remove_losses_report_request_id_success: {
            bind: 'removeFromLocalStorageSuccess'
          },
          global_storage_remove_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          },
          emergency_tracking_reports_phone_call: {
            bind: 'callPhoneNumberPluggin'
          },
          emergency_tracking_reports_raise_a_new_report: {
            bind: 'callPhoneNumberPluggin'
          },
          emergency_tracking_modal_state: {
            bind: 'manageModalState'
          }
        },
        out: {
          global_remove_from_storage: {
            bind: 'emergency-reports-remove-native-local-storage'
          },
          emergency_tracking_report_open_dialer: {
            bind: 'emergency-reports-call-phone-number-pluggin'
          },
          manage_modal_state_change_mode: {
            bind: 'manage-modal-state-change-mode'
          }
        }
      }
    }
  };

  const bbvaManagerEmergencyAnalytics = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    tag: 'bbva-manager-emergency-sos-analytics',
    render: 'litElement',
    properties: {
      config: ANALYTICS.CONFIG,
      emergencyType: 'reports',
      subEmergency: 'tracking',
      cellsConnections: {
        in: {
          manage_modal_state_change_mode: {
            bind: 'fireModal'
          },
          emergency_tracking_reports_raise_a_new_report: {
            bind: 'fireAction'
          },
          emergency_tracking_reports_phone_call: {
            bind: 'fireAction'
          },
          emergency_tracking_reports_remove_losses_report_request_id: {
            bind: 'openModalCancellationProcess'
          }
        },
        out: {
          analytics_reports_tracking_report_detected_sos: {
            bind: 'analytics-reports-tracking-sos-entry-point-reportDetected',
            analytics: ANALYTICS.getAdvancedFootprint('tiene un reporte en curso')
          },
          analytics_reports_tracking_reports_detected_emergencies: {
            bind: 'analytics-reports-tracking-emergencies-entry-point-reportDetected',
            analytics: ANALYTICS.getAdvancedFootprint('tu reporte esta en curso')
          },
          analytics_reports_tracking_reports_detected_login: {
            bind: 'analytics-reports-tracking-login-entry-point-reportDetected',
            analytics: ANALYTICS.getAdvancedFootprint('tu reporte esta en curso')
          },
          analytics_reports_tracking_cancellation_warning_sos: {
            bind: 'analytics-reports-tracking-sos-entry-point-cancellationWarning',
            analytics: ANALYTICS.getAdvancedFootprint('cancelar reporte')
          },
          analytics_reports_tracking_cancellation_warning_emergencies: {
            bind: 'analytics-reports-tracking-emergencies-entry-point-cancellationWarning',
            analytics: ANALYTICS.getAdvancedFootprint('cancelar reporte')
          },
          analytics_reports_tracking_cancellation_warning_login: {
            bind: 'analytics-reports-tracking-login-entry-point-cancellationWarning',
            analytics: ANALYTICS.getAdvancedFootprint('cancelar reporte')
          },
          analytics_reports_tracking_cancellation_process: {
            bind: 'analytics-reports-tracking-cancellation-process',
            analytics: ANALYTICS.getAdvancedFootprint('cancelacion reporte en proceso')
          },
          analytics_reports_tracking_reports_adjust_detail: {
            bind: 'analytics-reports-tracking-emergency-tracking-reports-mx-modal-tracking',
            analytics: ANALYTICS.getAdvancedFootprint('detalle')
          },
          analytics_reports_tracking_action: {
            bind: 'analytics-reports-tracking-action',
            analytics: ANALYTICS.LINK_TRACKING_EXTERNAL
          }
        }
      }
    }
  };

  const dialerMobile = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          emergency_tracking_report_open_dialer: {
            bind: 'openDialer'
          }
        }
      }
    }
  };

  base = {
    hash: 'emergency-tracking-reports',
    currentPage: {
      url: '/emergency-tracking-reports'
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      bbvaEmergencyTrackingReports,
      bbvaManagerEmergency,
      bbvaManagerEmergencyAnalytics,
      dialerMobile
    ]
  };

  localStorage.addOutStorageChannels(base.components, [ 'losses_report_request_id' ], config);
  return sphericaPageUtils.spherize(base);
};
