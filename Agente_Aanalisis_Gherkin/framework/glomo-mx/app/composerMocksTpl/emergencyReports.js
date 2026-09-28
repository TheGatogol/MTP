/* eslint-disable max-statements */
'use strict';
module.exports = config => {
  const {
    nativeIos = false,
    native = false,
    isSphericaMode = false,
    aemHost,
    phoneNumberBbvaLine,
    phoneNumberBbvaLineVehicle,
    phoneNumberAtmReport,
    phoneNumberRejectedCard,
    defaultLocation,
    googleMapsApiKey,
    globalServices: {
      aemHostSos,
      host, publicSettingsHost, requiredToken = 'tsec',
      versions: {
        financialOverviewApiVersion,
        appSettings,
        vehicleInsurances,
        lossesReport,
        autoPartsV1,
        customersV1,
        businessDocuments
      },
      publicSettingsId
    }
  } = config;
  const {
    useNames,
    getLanguage,
    getShortFormatDate,
    getAlternativeFormatDate,
    detailDownloadParams,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const _localStorage = require('./common/_local-storage');
  const PAGE_NAME = 'emergencyReports';
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const getANALYTICS = {
    ANALYTICS: require('./analytics/_emergencyReports')(config),
    ANALYTICS_VEHICLE: require('./analytics/_emergencyVehicleReports')(config),
    ANALYTICS_THEFT_VEHICLE: require('./analytics/_emergencyTheftVehicleReports')(config),
    ANALYTICS_ASSISTANCES_VEHICLE: require('./analytics/_emergencyAssistancesVehicleReports')(config),
    ANALYTICS_CRANE_VEHICLE: require('./analytics/_emergencyCraneVehicleReports')(config),
    analyticsGlassVehicle: require('./analytics/_emergencyGlassVehicleReports')(config)
  };
  const ANALYTICS_SIDEBAR_EMERGENCY = require('./analytics/_sidebarEmergency')(config);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const alternativeDateFormat = getAlternativeFormatDate();

  const downloadConfig = {
    ...detailDownloadParams,
    body: {},
    headers: nativeIos ? { 'Content-Type': 'application/json' } : {}
  };

  let base = {};
  const vehicleGlass = {
    topBg: 'topImagenBackground',
    leftBg: 'leftImagenBackground',
    rightBg: 'rightImagenBackground',
    glasses: {
      top: [
        {
          id: 'Parabrisas',
          src: 'topImagenParabrisas'
        },
        {
          id: 'Quemacocos',
          src: 'topImagenQuemacocos'
        },
        {
          id: 'Medallon',
          src: 'topImagenMedallon'
        }
      ],
      left: [
        {
          id: 'Aleta delantera izquierda',
          src: 'leftImagenAletaDelantera'
        },
        {
          id: 'Puerta delantera izquierda',
          src: 'leftImagenVidrioDelantero'
        },
        {
          id: 'Puerta trasera izquierda',
          src: 'leftImagenVidrioTrasero'
        },
        {
          id: 'Aleta trasera izquierda',
          src: 'leftImagenAletaTrasera'
        }
      ],
      right: [
        {
          id: 'Aleta trasera derecha',
          src: 'rightImagenAletaTrasera'
        },
        {
          id: 'Puerta trasera derecha',
          src: 'rightImagenVidrioTrasero'
        },
        {
          id: 'Puerta delantera derecha',
          src: 'rightImagenVidrioDelantero'
        },
        {
          id: 'Aleta delantera derecha',
          src: 'rightImagenAletaDelantera'
        }
      ]
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      className: 'dark-blue-bg'
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica',
      override: {
        iOSFixedHeader: nativeIos
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
          [ '__bridge_page_' + PAGE_NAME ]: {
            bind: 'navigation'
          },
          [ '__bridge_page_' + PAGE_NAME ]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('init-manage-adjuster-tracking')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'zone-emergency-page',
      cellsConnections: {
        in: {
          [getChannelName('BACK_PAGE')]: {
            bind: 'goBack'
          },
          [getChannelName('STOLE_CARD_CLICK')]: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('RETURN_TO_DASHBOARD_CHANNEL')]: {
            bind: 'header-left-button',
            backStep: true
          },
          [getChannelName('NAVIGATE_TO_MAP_CHANNEL')]: {
            bind: 'navigation-to-zone-emergency-page',
            link: {
              page: 'emergencyLostCard'
            }
          }
        }
      }
    }
  };

  const bbvaEmergencyReports = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-reports-mx',
    tag: 'emergency-reports-mx',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      host,
      publicSettingsHost,
      native,
      requiredToken,
      financialOverviewApiVersion: financialOverviewApiVersion,
      appSettingsApiVersion: appSettings,
      vehicleInsurancesApiVersion: vehicleInsurances,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsId,
      productTypeEmergencies: ['CARDS', 'INSURANCE'],
      aemHost: aemHostSos,
      fieldsProperty: 'vehicle,policyNumber',
      vehicleInsuranceProductTypes: [ 'INSURANCE' ],
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      phoneNumberRejectedCard,
      motorcycleId: 'M',
      viewCallVisible: true,
      stopInitServices: true,
      iOSFixedHeader: nativeIos,
      hideIconText: true,
      ambient: 'primary',
      showHelpFaqs: true,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          [getChannelName('NEWTWORK_STATUS')]: {
            bind: 'openModalConnectionError'
          },
          emergencyreports_set_feature_flags_emergency: {
            bind: 'emergencyReportsConfig'
          },
          [getChannelName('SET_FINANCIAL')]: {
            bind: 'financialOverview'
          },
          emergency_tracking_reports_set_view_active_report: {
            bind: 'viewActiveReport'
          },
          emergency_tracking_reports_set_adjuster_tracking: {
            bind: 'adjusterTracking'
          },
          [getChannelName('SET_PNONE_NUMBER_ATM')]: {
            bind: 'phoneNumberAtmReport'
          },
          emergency_vehicle_reports_theft_exit_flow: {
            bind: 'activateEmergencyReports'
          },
          emergency_vehicle_reports_theft_open_modal_flow: {
            bind: 'inertEmergencyReports'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRASH_REPORT: {
            bind: 'inertEmergencyReports'
          },
          emergencyreports_close_crash_flow_toggle_visibility: {
            bind: 'activateEmergencyReports'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRANE_REPORT: {
            bind: 'inertEmergencyReports'
          },
          emergencyreports_close_crane_flow_toggle_visibility: {
            bind: 'activateEmergencyReports'
          },
          set_phone_number_bbva_line: {
            bind: 'autoInsurancePhoneNumbers'
          },
          emergencyreports_assistances_vehicle_open: {
            bind: 'inertEmergencyReports'
          },
          emergencyreports_assistances_vehicle_open_but_error: {
            bind: 'activateEmergencyReports'
          },
          emergencyreports_assistances_vehicle_close: {
            bind: 'activateEmergencyReports'
          }
        },
        out: {
          [getChannelName('SET_EMERGENCY_PUBLIC_SETTINGS')]: {
            bind: 'public-settings-api-dm-fetch'
          },
          [getChannelName('PAGE_MENU_EMERGENCY')]: {
            bind: 'emergency-reports-mx-menu-state'
          },
          [getChannelName('PAGE_MENU_FAQS_EMERGENCY')]: {
            bind: 'emergency-reports-mx-menu-faqs-state'
          },
          [getChannelName('CLICK_EMERGENCY_CARD')]: {
            bind: 'emergency-reports-mx-card-click'
          },
          [getChannelName('CLICK_EMERGENCY_VEHICLE')]: {
            bind: 'emergency-reports-mx-insurance-click'
          },
          [getChannelName('STOLE_CARD_CLICK')]: {
            bind: 'emergency-reports-mx-card-stole-click'
          },
          [getChannelName('REJECTED_CARD_CLICK')]: {
            bind: 'emergency-reports-mx-card-rejected-click'
          },
          [getChannelName('ATM_CARD_CLICK')]: {
            bind: 'emergency-reports-card-atm-click'
          },
          [getChannelName('STATUS_MODALS')]: {
            bind: 'modal-state-change'
          },
          [getChannelName('MODAL_ATM_ACCEPT')]: {
            bind: 'emergency-reports-atm-call-button-click'
          },
          [getChannelName('CARD_FAQS_TELEPHONE_CLICK')]: {
            bind: 'emergency-reports-card-faqs-telephone'
          },
          [getChannelName('INSURANCE_FAQS_TELEPHONE_CLICK')]: {
            bind: 'emergency-reports-insurance-faqs-telephone'
          },
          [getChannelName('FAQS_DETAIL_TELEPHONE_CLICK')]: {
            bind: 'emergency-reports-mx-detail-faqs-click'
          },
          [getChannelName('CHANGE_POLICY')]: {
            bind: 'emergency-reports-mx-vehicle-changed'
          },
          [getChannelName('HELP_FAQS_AEM')]: {
            bind: 'emergency-reports-mx-menu-insurance-click'
          },
          [getChannelName('MODAL_ERROR_ACCEPT')]: {
            bind: 'emergency-reports-error-services-button-click'
          },
          [getChannelName('OPEN_SETTINGS')]: {
            bind: 'emergency-reports-mx-connection-error-button-click'
          },
          [getChannelName('MODAL_ERROR_SERVICES_VISIBLE')]: {
            bind: 'emergency-reports-mx-active-modal-communication-error'
          },
          [getChannelName('MODAL_ERROR_SERVICES_VEHICLE_VISIBLE')]: {
            bind: 'emergency-reports-mx-error-get-more-vehicle-insurance'
          },
          [getChannelName('CALL_LINK_CLICK')]: {
            bind: 'emergency-reports-mx-panel-info-link-click'
          },
          [getChannelName('BACK_PAGE')]: {
            bind: 'emergency-reports-mx-close'
          },
          [getChannelName('EMERGENCY_REPORTS_FETCH_DATA_PUBLIC_SETTINGS')]: {
            bind: 'public-settings-api-dm-fetch'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_THEFT_REPORT')]: {
            bind: 'emergency-reports-mx-insurance-stole-click'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_ASSISTANCES_VEHICLE')]: {
            bind: 'emergency-reports-mx-insurance-vehicle-click'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRANE_REPORT: {
            bind: 'emergency-reports-mx-insurance-crane-click'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRASH_REPORT: {
            bind: 'emergency-reports-mx-insurance-shock-click'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_GLASS_REPORT')]: {
            bind: 'emergency-reports-mx-insurance-glass-click'
          },
          [getChannelName('EMERGENCY_REPORTS_REPORT_ACTIVE')]: {
            bind: 'emergency-reports-mx-insurance-report-active-click'
          },
          emergency_reports_open_opportunities: {
            bind: 'emergency-reports-mx-to-contracts-products-section',
            link: {
              page: 'contractProductSection'
            }
          },
          global_open_native_menu: {
            bind: 'emergency-reports-mx-header-menu-click',
            'forward-to-native': true
          },
          emergencyreports_assistances_set_emergency_name: {
            bind: 'emergency-reports-mx-menu-emergency-name-send'
          }
        }
      }
    }
  };

  const bbvaEmergencyVehicleTheftReports = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-vehicle-theft-reports-mx',
    tag: 'emergency-vehicle-theft-reports-mx',
    render: 'litElement',
    attributes: {
      'data-sos-geolocation': 'theft'
    },
    properties: {
      apiKey: googleMapsApiKey,
      language: getLanguage(),
      host,
      native,
      requiredToken,
      lossesReportRequestVersion: lossesReport,
      evadeServiceLaunch: true,
      viewCallVisible: true,
      productTypeVehicleInsurance: 'INSURANCE',
      subProductType: 'AUTOMOVIL',
      iOSFixedHeader: nativeIos,
      hideIconText: true,
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      cellsConnections: {
        in: {
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_GEOLOCATION')]: {
            bind: 'geoLocation'
          },
          emergency_vehicle_theft_reports_geolocation_update: {
            bind: 'tempGeoLocation'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_GEOLOCATION_DEFAULT')]: {
            bind: 'geoLocation'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_SHOW_HELP_FAQS')]: {
            bind: 'showHelpFaqs'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_TEMP_GEOLOCATION')]: {
            bind: 'tempGeoLocation'
          },
          [getChannelName('SEND_DATA_PERSIST_PUBLIC_SETTINGS_VEHICLE_THEFT')]: {
            bind: 'publicSettings'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_DATA_MANAGEMENT')]: {
            bind: 'vehicleInsurance'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_VIEW_POLICY')]: {
            bind: 'viewPolicyVisible'
          }
        },
        out: {
          emergency_vehicle_reports_losses_report_create_theft: {
            bind: 'losses-report-requests-api-dm-create'
          },
          emergency_vehicle_reports_view_policy_operative: {
            bind: 'emergency-vehicle-theft-reports-mx-success-modal-see-policy-click'
          },
          emergency_vehicle_theft_reports_native_geolocation: {
            bind: 'emergency-vehicle-theft-reports-mx-native-geolocation'
          },
          analytics_expandable_edit_step: {
            bind: 'expandable-step-edit-step'
          },
          analytics_multistep_all_complete: {
            bind: 'expandable-multistep-all-complete'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'emergency-vehicle-theft-reports-mx-action-generate-call'
          },
          emergency_vehicle_reports_share_operative: {
            bind: 'emergency-vehicle-theft-reports-mx-success-modal-share-receipt-click'
          },
          emergency_vehicle_reports_theft_exit_flow: {
            bind: 'emergency-vehicle-theft-reports-mx-exit-flow'
          },
          emergency_vehicle_reports_theft_open_modal_flow: {
            bind: 'emergency-vehicle-theft-reports-mx-open-flow'
          },
          [getChannelName('ANALYTICS_MODE_MODAL')]: {
            bind: 'emergency-vehicle-theft-reports-mx-modal-state-change'
          }
        }
      }
    },
    propertiesSpherica: {
      showHelpFaqs: true
    }
  };

  const bbvaEmergencyVehicleAssistances = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-assistance-vehicle-report-mx',
    tag: 'emergency-assistance-vehicle-report-mx',
    render: 'litElement',
    attributes: {
      'data-sos-geolocation': 'assistances'
    },
    properties: {
      id: 'Assists',
      host,
      native,
      apiKey: googleMapsApiKey,
      requestServices: true,
      viewCallVisible: true,
      hideIconText: true,
      geoLocation: defaultLocation,
      requiredToken,
      lossesReportRequestApiVersion: lossesReport,
      publicSettingsHost,
      publicSettingsKey: 'app_settings_glomo',
      productTypeVehicleInsurance: 'INSURANCE',
      subProductType: 'AUTOMOVIL',
      iOSFixedHeader: nativeIos,
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      hasLocationPermissions: true,
      showHelpFaqs: true,
      locale: getLanguage(),
      disableiOSTopPadding: nativeIos,
      cellsConnections: {
        in: {
          emergencyreports_assistances_update_geolocation: {
            bind: 'geoLocation'
          },
          emergencyreports_assistances_set_emergency_name: {
            bind: 'emergencyName'
          },
          [getChannelName('emergency_reports_set_geolocation_assistances')]: {
            bind: 'geoLocation'
          },
          [getChannelName('SET_ASSISTANCES_VEHICLE_INSURANCE')]: {
            bind: 'vehicleInsurance'
          },
          [getChannelName('SET_ASSISTANCES_VEHICLE_SETTINGS')]: {
            bind: 'publicSettings'
          },
          [getChannelName('EMERGENCY_VEHICLE_ASSISTANCES_REPORTS_VIEW_POLICY')]: {
            bind: 'viewPolicyVisible'
          },
          [getChannelName('PAGE_MENU_FAQS_EMERGENCY_HEADER')]: {
            bind: 'position'
          }
        },
        out: {
          emergencyreports_get_geolocation_assistances: {
            bind: 'emergency-assistance-vehicle-report-mx-multistep-modal-native-geolocation-request'
          },
          emergencyreports_assistances_vehicle_close: {
            bind: 'emergency-assistance-vehicle-report-mx-close'
          },
          emergencyreports_assistances_vehicle_open: {
            bind: 'emergency-assistance-vehicle-report-mx-success-open'
          },
          emergencyreports_assistances_vehicle_open_but_error: {
            bind: 'emergency-assistance-vehicle-report-mx-dm-initial-api-fail'
          },
          emergencyreports_assistances_vehicle_modal_operation_not_performed_error_call: {
            bind: 'emergency-assistance-vehicle-report-mx-operation-not-performed-error-modal-button-click'
          },
          [getChannelName('ASSISTANCES_MANAGE_STATE_MULTISTEP')]: {
            bind: 'emergency-assistance-vehicle-report-mx-multistep-modal-multistep-update-state'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_LOSSES_REPORT_CREATE')]: {
            bind: 'losses-report-requests-api-dm-create'
          },
          [getChannelName('ASSISTANCES_GENERATE_REPORT_STATE_MODAL')]: {
            bind: 'modal-state-change'
          },
          [getChannelName('REPORT_ASSISTANCES_SELECTIONS_CLICK')]: {
            bind: 'emergency-assistance-vehicle-report-mx-assistance-select'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_VIEW_POLICY')]: {
            bind: 'emergency-assistance-vehicle-report-mx-ticket-policy-file-click'
          },
          [getChannelName('REPORT_CALL_ASSISTANCES_SUCCESS')]: {
            bind: 'emergency-assistance-vehicle-report-mx-receipt-assistance-line-call'
          },
          [getChannelName('REPORT_IN_PROGRESS_MODAL')]: {
            bind: 'emergency-assistance-vehicle-report-mx-already-report-error-modal-button-click'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_SHARE_OPERATIVE')]: {
            bind: 'emergency-assistance-vehicle-report-mx-ticket-share-receipt-click'
          },
          [getChannelName('ASSISTANCE_CALL_BBVA_LINE_FAQS')]: {
            bind: 'emergency-assistance-vehicle-report-mx-faqs-menu-button-list-call-bbva-line'
          },
          [getChannelName('EMERGENCY_ASSISTANCES_VEHICLE_MODAL_COMMUNICATION_ERROR_CALL')]: {
            bind: 'emergency-assistance-vehicle-report-mx-communication-failed-modal-button-click'
          }
        }
      }
    }
  };

  const bbvaEmergencyCraneVehicle = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-crane-vehicle-reports-mx',
    tag: 'emergency-crane-vehicle-reports-mx',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      host,
      native,
      requiredToken,
      lossesReportRequestApiVersion: lossesReport,
      publicSettingsHost,
      publicSettingsKey: 'app_settings_glomo',
      productTypeVehicleInsurance: 'INSURANCE',
      subProductType: 'AUTOMOVIL',
      iOSFixedHeader: nativeIos,
      hideIconText: true,
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      apiKey: googleMapsApiKey,
      viewCallVisible: true,
      hasLocationPermissions: true,
      requestServices: true,
      geoLocation: defaultLocation,
      cellsConnections: {
        in: {
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRANE_REPORT: {
            bind: 'multistepModalVisible'
          },
          [getChannelName('SET_VEHICLE_CRANE_INSURANCE')]: {
            bind: 'vehicleInsurance'
          },
          [getChannelName('SET_VEHICLE_CRANE_SETTINGS')]: {
            bind: 'publicSettings'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_VIEW_POLICY')]: {
            bind: 'viewPolicyVisible'
          },
          [getChannelName('OPEN_FAQS_CLICK')]: {
            bind: 'showHelpFaqs'
          },
          [getChannelName('GEOLOCATION_REPORTS_CRANE')]: {
            bind: 'geoLocation'
          },
          [getChannelName('GEOLOCATION_REPORTS_DEFAULT')]: {
            bind: 'geoLocation'
          }
        },
        out: {
          emergency_vehicle_reports_losses_report_create_crane: {
            bind: 'losses-report-requests-api-dm-create'
          },
          emergency_crane_vehicle_reports_view_policy_operative: {
            bind: 'emergency-crane-vehicle-reports-mx-button-row-item-policy-file-click'
          },
          emergency_crane_vehicle_reports_share_operative: {
            bind: 'emergency-crane-vehicle-reports-mx-button-row-item-share-receipt-click'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_GENERATE_REPORT_STATE_MODAL: {
            bind: 'emergency-crane-vehicle-reports-mx-modal-state-change'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESSFUL_REPORT_CALL: {
            bind: 'emergency-crane-vehicle-reports-mx-receipt-assistance-line-call'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_IN_PROGRESS_CALL_BUTTON_CLICK: {
            bind: 'emergency-crane-vehicle-reports-mx-already-report-error-modal-button-click'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_TECHNICAL_ERROR_REPORT_CALL: {
            bind: 'emergency-crane-vehicle-reports-mx-communication-failed-modal-button-click'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_CALL_FAQS: {
            bind: 'emergency-crane-vehicle-reports-mx-faqs-menu-button-list-call-bbva-line'
          },
          emergency_vehicle_crane_reports_native_geolocation: {
            bind: 'emergency-crane-vehicle-reports-mx-multistep-modal-native-geolocation-request-load'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_ALL_COMPLETE: {
            bind: 'emergency-crane-vehicle-reports-mx-multistep-modal-all-complete'
          },
          emergencyreports_ANALYTICS_MODE_MODAL: {
            bind: 'emergency-crane-vehicle-reports-mx-modal-state-change'
          },
          emergencyreports_OPEN_FAQS: {
            bind: 'emergency-crane-vehicle-reports-mx-help-click'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_MODAL_COMMUNICATION_ERROR_CALL: {
            bind: 'emergency-crane-vehicle-reports-mx-communication-failed-modal-button-click'
          },
          emergencyreports_close_crane_flow_toggle_visibility: {
            bind: 'emergency-crane-vehicle-reports-mx-exit-flow'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESS_PAGE: {
            bind: 'emergency-crane-vehicle-reports-mx-info-modal-success-report-modal-open'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_ALREADY_PAGE: {
            bind: 'emergency-crane-vehicle-reports-mx-info-modal-already-reported-modal-open'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_NOT_PERFORMED: {
            bind: 'emergency-crane-vehicle-reports-mx-operation-not-performed-error-modal-button-click'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESS_RECEIPT_ASSISTANCE_LINE_CALL: {
            bind: 'emergency-crane-vehicle-reports-mx-receipt-assistance-line-call'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_WE_CONTINUE_WORKING_ASSISTANCE_LINE_CALL: {
            bind: 'emergency-crane-vehicle-reports-mx-we-continue-working-assistance-line-call'
          }
        }
      }
    }
  };

  const bbvaEmergencyVehicleCrashReports = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-vehicle-crash-reports-mx',
    tag: 'emergency-vehicle-crash-reports-mx',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      apiKey: googleMapsApiKey,
      host,
      native,
      requiredToken,
      lossesReportRequestApiVersion: lossesReport,
      appSettingsApiVersion: appSettings,
      fieldsProperty: 'vehicle,policyNumber',
      publicSettingsKey: 'app_settings_glomo',
      vehicleInsuranceApiVersion: vehicleInsurances,
      publicSettingsId,
      requestServices: true,
      viewCallVisible: true,
      hideIconText: true,
      showHelpFaqs: true,
      contactDataIsUsed: true,
      iOSFixedHeader: nativeIos,
      hasLocationPermissions: true,
      productTypeVehicleInsurance: 'INSURANCE',
      subProductType: 'AUTOMOVIL',
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      extraHeaderClass: '',
      className: `${nativeIos ? 'ios-top-padding' : ''}`,
      headerFixed: false,
      cellsConnections: {
        in: {
          emergencyreports_EMERGENCY_REPORTS_SET_GEOLOCATION: {
            bind: 'geoLocation'
          },
          emergencyreports_EMERGENCY_REPORTS_SET_GEOLOCATION_CRASH: {
            bind: 'geoLocation'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRASH_REPORT: {
            bind: 'multistepModalVisible'
          },
          emergencyreports_EMERGENCY_VEHICLE_ASSISTANCES_REPORTS_VIEW_POLICY: {
            bind: 'viewPolicyVisible'
          },
          emergencyreports_SEND_DATA_PERSIST_PUBLIC_SETTINGS_VEHICLE_CRASH: {
            bind: 'publicSettings'
          },
          emergencyreports_EMERGENCY_VEHICLE_CRASH_REPORTS_DATA_MANAGEMENT: {
            bind: 'vehicleInsurance'
          }
        },
        out: {
          emergency_vehicle_crash_reports_losses_report_create: {
            bind: 'losses-report-requests-api-dm-create'
          },
          emergency_vehicle_crash_reports_view_policy_operative: {
            bind: 'crash-reports-success-page-mx-policy-file-click'
          },
          emergency_vehicle_reports_share_operative: {
            bind: 'crash-reports-success-page-mx-share-receipt-click'
          },
          emergency_vehicle_tracking_storage: {
            bind: 'emergency-vehicle-crash-reports-mx-dm-set-id-report'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'crash-reports-success-page-mx-assistance-line-click'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_OPERATION_NOT_PERFORMED_CALL')]: {
            bind: 'crash-reports-modal-controller-already-requested-modal-footer-button-click'
          },
          emergencyreports_EMERGENCY_VEHICLE_CRASH_REPORTS_OPERATION_NOT_PERFORMED_ERROR_CALL: {
            bind: 'crash-reports-modal-controller-not-performed-modal-footer-button-click'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_FAILED_MODAL_CALL')]: {
            bind: 'crash-reports-modal-controller-service-communication-error-modal-footer-button-click'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_CHANGE_LOCATION')]: {
            bind: 'report-location-step-map-dynamic-show'
          },
          [getChannelName('REPORT_STEP_COMPLETED')]: {
            bind: 'crash-report-multistep-report-location-complete'
          },
          [getChannelName('EMERGENCY_SERVICES_QUESTIONNAIRE')]: {
            bind: 'emergency-services-step-emergencies-select'
          },
          [getChannelName('EMERGENCY_STEP_COMPLETED')]: {
            bind: 'emergency-vehicle-crash-reports-emergency-services-step-complete'
          },
          [getChannelName('EMERGENCY_GEOLOCATION_REQUEST')]: {
            bind: 'crash-report-multistep-native-geolocation-request'
          },
          [getChannelName('EMERGENCY_GEOLOCATION_REQUEST_BUTTON')]: {
            bind: 'emergency-vehicle-crash-reports-report-geolocation-failed-button-click'
          },
          analytics_expandable_edit_step: {
            bind: 'expandable-step-edit-step'
          },
          analytics_multistep_all_complete: {
            bind: 'expandable-multistep-all-complete'
          },
          emergency_vehicle_reset_properties_analytics_with_modal: {
            bind: 'emergency-vehicle-crash-reports-leave-crash-reports-button-click'
          },
          emergency_vehicle_reset_properties_analytics: {
            bind: 'emergency-vehicle-crash-reports-multistep-modal-close'
          },
          emergencyreports_close_crash_flow_toggle_visibility: {
            bind: 'emergency-vehicle-crash-reports-mx-flow-exit'
          }
        }
      }
    }
  };

  const bbvaEmergencyVehicleGlass = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/emergency-car-emergency-vehicle-glass-reports-mx',
    tag: 'emergency-car-emergency-vehicle-glass-reports-mx',
    render: 'litElement',
    properties: {
      apiKey: googleMapsApiKey,
      host,
      requiredToken,
      native,
      aemHost,
      autoPartsApiVersion: autoPartsV1,
      appSettingsApiVersion: appSettings,
      customersApiVersion: customersV1,
      lossesReportApiVersion: lossesReport,
      vehicleInsurancesApiVersion: vehicleInsurances,
      iOSFixedHeader: nativeIos,
      dateFormat: getShortFormatDate(),
      deductiblePercentage: '20%',
      fieldsProperty: 'vehicle,policyNumber',
      insuranceCompany: { id: '02' },
      operationDateFormat: alternativeDateFormat,
      percentageCovered: '80%',
      personalSupplier: 'PERSONAL_SUPPLIERS',
      privacyTermsPdf: true,
      productTypeVehicleInsurance: 'INSURANCE',
      publicSettingsId,
      publicSettingsKey: 'app_settings_glomo',
      phoneNumberBbvaLine,
      phoneNumberBbvaLineVehicle,
      subProductType: 'AUTOMOVIL',
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          [getChannelName('SET_EMERGENCY_PUBLIC_SETTINGS')]: {
            bind: 'publicSettings'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_VEHICLE_INSURANCE')]: {
            bind: 'vehicleInsurance'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_INIT')]: {
            bind: 'initGlass'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_VEHICLE_INSURANCE_GLASSES')]: {
            bind: 'vehicle'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_GEOLOCATION')]: {
            bind: 'geoLocation'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_TEMP_GEOLOCATION')]: {
            bind: 'tempGeoLocation'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_DATE')]: {
            bind: 'selectedDate'
          }
        },
        out: {
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_CALL_BUTTON_CLICK')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-generic-callForHelp-footer-button-click'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_GLASS_REPORTS_GEOLOCATION_REQUEST')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-native-geolocation'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_ALREADY_REQUESTED_BUTTON_CLICK')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-generic-alreadyRequested-footer-button-click'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_OPEN_DATE_NATIVE')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-open-date-native'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_LOSSES_REPORT_CREATE')]: {
            bind: 'losses-report-requests-api-dm-create'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_TICKET_SHARE')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-ticket-share'
          },
          [getChannelName('ANALYTICS_MODE_MODAL')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-modal-state-change'
          },
          emergency_reports_ANALYTICS_GLASS_LOCATION_CHANGE: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-modal-change-location-state-change'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SUPPLIER_SELECT')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-car-glasses-supplier-select'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_AUTO_PARTS_SELECT')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-location-auto-parts-select'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_RETRY_RESET')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-generic-retry-footer-link-click'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_CALLFORHELP_RESET')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-generic-callForHelp-footer-link-click'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_ALREADYREQUESTED_RESET')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-generic-alreadyRequested-footer-link-click'
          },
          [getChannelName('EMERGENCY_VEHICLE_GLASS_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-action-generate-call'
          },
          emergency_vehicle_reset_properties_analytics: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-header-right-primary-click'
          },
          emergency_vehicle_reset_properties_analytics_with_modal: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-success-close-click'
          },
          analytics_step_complete_change: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-step-complete-change'
          },
          analytics_expandable_on_step_glass: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-next-step'
          },
          analytics_expandable_edit_step: {
            bind: 'expandable-step-edit-step'
          },
          analytics_multistep_all_complete: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-mx-multistep-all-complete'
          }
        }
      }
    }
  };

  const bbvaManagerEmergencyAuthentication = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-emergency-authentication',
    familyPath: '@glomo-web-components/bbva-manager-emergency-sos',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagsCollection'
          },
          [getChannelName('REJECTED_CARD_CLICK')]: {
            bind: 'callInheritanceAuthentication'
          }
        },
        out: {
          [getChannelName('AUTHENTICATION_INHERITANCE_OPEN_DIALER')]: {
            bind: 'open-call-card-rejected'
          },
          [getChannelName('REJECTED_CARD_CLICK_INHERITANCE_AUTHENTICATION')]: {
            bind: 'phone-number-card-rejected'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
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
      aemHost,
      hostServices: host,
      headerTitleModalPdf: 'emergency-vehicle-reports-pdf-modal-title',
      apiVersion: businessDocuments,
      detailDownloadConfig: downloadConfig,
      native,
      hasRetryGeolocation: true,
      hasLoadingMultiSteps: true,
      requiredToken,
      vehicleInsurancesApiVersion: vehicleInsurances,
      page: PAGE_NAME,
      adjuster: {
        types: [ 'PRESENCIAL' ],
        status: [ 'PRE_ASSIGNED' ]
      },
      vehicle: vehicleGlass,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'getGlobalCurrentPosition'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagsCollection'
          },
          __bridge_app: {
            bind: 'handleNavigation'
          },
          global_financial_overview_details: {
            bind: 'recoverFinancialOverview'
          },
          global_dashboard_cards_to_landing: {
            bind: 'getCardsToLanding'
          },
          [getChannelName('STOLE_CARD_CLICK')]: {
            bind: 'onSelectStoleCard'
          },
          emergency_vehicle_tracking_storage: {
            bind: 'setLossesReportRequestsIdFromLocalStorage'
          },
          [getChannelName('init-manage-adjuster-tracking')]: {
            bind: 'manageAdjusterTracking'
          },
          [getChannelName('EMERGENCY_REPORTS_REPORT_ACTIVE')]: {
            bind: 'handleEmergencyReportActive'
          },
          [getChannelName('BACK_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_GLASS_REPORTS_GEOLOCATION_REQUEST')]: {
            bind: 'glassGeolocation'
          },
          [getChannelName('EMERGENCY_GEOLOCATION_REQUEST')]: {
            bind: 'getGlobalCurrentPosition'
          },
          [getChannelName('EMERGENCY_GEOLOCATION_REQUEST_BUTTON')]: {
            bind: 'getNativeCurrentPosition'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_MODAL_COMMUNICATION_ERROR_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('REJECTED_CARD_CLICK_INHERITANCE_AUTHENTICATION')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('MODAL_ATM_ACCEPT')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('CARD_FAQS_TELEPHONE_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('INSURANCE_FAQS_TELEPHONE_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('FAQS_DETAIL_TELEPHONE_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('MODAL_ERROR_ACCEPT')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('CALL_LINK_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_CALL_BUTTON_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_ALREADY_REQUESTED_BUTTON_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_LOSSES_REPORT_CREATE')]: {
            bind: 'emergencyVehicleLossesReportCreate'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_TICKET_SHARE')]: {
            bind: 'sharedTicket'
          },
          connection_status_emergencyReports_offline: {
            bind: 'networkStatus'
          },
          [getChannelName('EMERGENCY_REPORTS_FETCH_DATA_PUBLIC_SETTINGS')]: {
            bind: 'emergencyFetchDataPublicSettings'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_THEFT_REPORT')]: {
            bind: 'productConfigurationVehicleReport'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_LOSSES_REPORT_CREATE')]: {
            bind: 'emergencyVehicleLossesReportCreate'
          },
          emergency_vehicle_reports_losses_report_create_theft: {
            bind: 'emergencyVehicleLossesReportCreate'
          },
          emergency_vehicle_reports_losses_report_create_crane: {
            bind: 'emergencyVehicleLossesReportCreate'
          },
          emergency_vehicle_reports_view_policy_operative: {
            bind: 'generatePdfDocument'
          },
          [getChannelName('EMERGENCY_VEHICLE_OPEN_DOCUMENT_URL_SUCCESS')]: {
            bind: 'documentOpenHandler'
          },
          [getChannelName('EMERGENCY_VEHICLE_REPORTS_OPEN_DOCUMENT_URL_ERROR')]: {
            bind: 'documentOpenErrorHandler'
          },
          emergency_vehicle_reports_share_operative: {
            bind: 'sharedTicket'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_OPERATION_NOT_PERFORMED_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_COMUNICATION_ERROR')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_ASSISTANCES_VEHICLE')]: {
            bind: 'productConfigurationVehicleReport'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_VIEW_POLICY')]: {
            bind: 'generatePdfDocument'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_SHARE_OPERATIVE')]: {
            bind: 'sharedTicket'
          },
          [getChannelName('REPORT_CALL_ASSISTANCES_SUCCESS')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('REPORT_IN_PROGRESS_MODAL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('ASSISTANCE_CALL_BBVA_LINE_FAQS')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_ASSISTANCES_VEHICLE_MODAL_COMMUNICATION_ERROR_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRANE_REPORT: {
            bind: 'productConfigurationVehicleReport'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_GLASS_REPORT')]: {
            bind: 'productConfigurationVehicleReport'
          },
          emergency_crane_vehicle_reports_view_policy_operative: {
            bind: 'generatePdfDocument'
          },
          emergency_crane_vehicle_reports_share_operative: {
            bind: 'sharedTicket'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_IN_PROGRESS_CALL_BUTTON_CLICK')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_TECHNICAL_ERROR_REPORT_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_CALL_FAQS')]: {
            bind: 'callPhoneNumberPluggin'
          },
          emergency_vehicle_crash_reports_losses_report_create: {
            bind: 'emergencyVehicleLossesReportCreate'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRASH_REPORT: {
            bind: 'productConfigurationVehicleReport'
          },
          emergency_vehicle_crash_reports_view_policy_operative: {
            bind: 'generatePdfDocument'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_FAQS_CALL_BBVA_LINE')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_OPERATION_NOT_PERFORMED_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_FAILED_MODAL_CALL')]: {
            bind: 'callPhoneNumberPluggin'
          },
          emergencyreports_EMERGENCY_VEHICLE_CRASH_REPORTS_OPERATION_NOT_PERFORMED_ERROR_CALL: {
            bind: 'callPhoneNumberPluggin'
          },
          global_storage_get_losses_report_request_id_success: {
            bind: 'getFromLocalStorageSuccess'
          },
          global_storage_remove_losses_report_request_id_success: {
            bind: 'removeFromLocalStorageSuccess'
          },
          global_storage_get_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          },
          global_storage_set_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          },
          global_storage_remove_losses_report_request_id_error: {
            bind: 'handleLocalStorageErrors'
          },
          [getChannelName('OPEN_FAQS')]: {
            bind: 'openFaqs'
          },
          [getChannelName('ASSISTANCES_GENERATE_REPORT_STATE_MODAL')]: {
            bind: 'stateModal'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_LAUNCH_DATE_PICKER_SUCCESS')]: {
            bind: 'setDate'
          },
          [getChannelName('PAGE_MENU_FAQS_EMERGENCY')]: {
            bind: 'changePosition'
          },
          global_set_app_settings: {
            bind: 'getPhoneNumber'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_NOT_PERFORMED: {
            bind: 'callPhoneNumberPluggin'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESS_RECEIPT_ASSISTANCE_LINE_CALL: {
            bind: 'callPhoneNumberPluggin'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_WE_CONTINUE_WORKING_ASSISTANCE_LINE_CALL: {
            bind: 'callPhoneNumberPluggin'
          },
          emergency_vehicle_crane_reports_native_geolocation: {
            bind: 'getGlobalCurrentPosition'
          }
        },
        out: {
          emergencyreports_GEOLOCATION_REPORTS_DEFAULT: {
            bind: 'emergency-reports-set-geolocation-default'
          },
          emergencyreports_GEOLOCATION_REPORTS_CRANE: {
            bind: 'emergency-reports-set-geolocation-crane'
          },
          emergencyreports_OPEN_FAQS_CLICK: {
            bind: 'open-faqs-crane'
          },
          emergencyreports_emergency_reports_set_geolocation_assistances: {
            bind: 'emergency-reports-set-geolocation-assistances'
          },
          emergencyreports_EMERGENCY_REPORTS_SET_GEOLOCATION: {
            bind: 'emergency-reports-set-geolocation-shock'
          },
          emergencyreports_EMERGENCY_REPORTS_SET_GEOLOCATION_CRASH: {
            bind: 'emergency-reports-set-geolocation-crash'
          },
          emergencyreports_OPEN_DIALER: {
            bind: 'emergency-reports-call-phone-number-pluggin'
          },
          emergencyreports_NEWTWORK_STATUS: {
            bind: 'emergency-reports-network-status'
          },
          emergencyreports_SET_FINANCIAL: {
            bind: 'emergency-reports-parse-financial'
          },
          emergencyreports_SEND_DATA_PERSIST_PUBLIC_SETTINGS_VEHICLE_THEFT: {
            bind: 'emergency-reports-persist-fetch-data-public-settings-vehicle-theft'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_DATA_MANAGEMENT: {
            bind: 'emergency-vehicle-theft-reports-data-management'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_GEOLOCATION: {
            bind: 'emergency-reports-set-geolocation-theft'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_GEOLOCATION_DEFAULT: {
            bind: 'emergency-reports-set-geolocation-default'
          },
          emergencyreports_EMERGENCY_VEHICLE_ASSISTANCES_REPORTS_VIEW_POLICY: {
            bind: 'emergency-vehicle-reports-exist-operative-policy'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_VIEW_POLICY: {
            bind: 'emergency-vehicle-reports-exist-operative-policy'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_SHOW_HELP_FAQS: {
            bind: 'emergency-vehicle-theft-reports-show-help-faqs'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_TEMP_GEOLOCATION: {
            bind: 'emergency-vehicle-theft-reports-temp-geolocation'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_GEOLOCATION: {
            bind: 'emergency-reports-set-geolocation-glass'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_TEMP_GEOLOCATION: {
            bind: 'emergency-reports-set-geolocation-temp-glass'
          },
          emergencyreports_EMERGENCY_VEHICLE_THEFT_REPORTS_BODY_TICKET: {
            bind: 'emergency-vehicle-theft-reports-body-ticket-share'
          },
          emergencyreports_EMERGENCY_VEHICLE_REPORTS_OPEN_DOCUMENT: {
            bind: 'emergency-vehicle-reports-request-business-document'
          },
          emergencyreports_SET_ASSISTANCES_VEHICLE_INSURANCE: {
            bind: 'emergency-vehicle-assistances-reports-data-management'
          },
          emergencyreports_SET_ASSISTANCES_VEHICLE_SETTINGS: {
            bind: 'emergency-reports-persist-fetch-data-public-settings-vehicle-assistances'
          },
          emergencyreports_SET_VEHICLE_CRANE_INSURANCE: {
            bind: 'emergency-crane-vehicle-reports-data-management'
          },
          emergencyreports_SET_VEHICLE_CRANE_SETTINGS: {
            bind: 'emergency-reports-persist-fetch-data-public-settings-vehicle-crane'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_VIEW_POLICY: {
            bind: 'emergency-vehicle-reports-exist-operative-policy'
          },
          emergencyreports_SEND_DATA_PERSIST_PUBLIC_SETTINGS_VEHICLE_CRASH: {
            bind: 'emergency-reports-persist-fetch-data-public-settings-vehicle-crash'
          },
          emergencyreports_EMERGENCY_VEHICLE_CRASH_REPORTS_DATA_MANAGEMENT: {
            bind: 'emergency-vehicle-crash-reports-data-management'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_INIT: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-init'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_VEHICLE_INSURANCE: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-set-vehicle-insurance'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_VEHICLE_INSURANCE_GLASSES: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-set-vehicle-glasses'
          },
          emergencyreports_EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SET_DATE: {
            bind: 'emergency-car-emergency-vehicle-glass-reports-set-date'
          },
          share_reset_receipt: {
            bind: 'reset-share-template'
          },
          share_capture_receipt: {
            bind: 'emergency-reports-receipt-selected'
          },
          global_retry_error: {
            bind: 'emergency-vehicle-reports-show-error-modal-view-policy-pdf'
          },
          emergency_tracking_reports_set_losses_report_request_id: {
            bind: 'emergency-tracking-reports-set-losses-report-request-id',
            link: {
              page: 'emergencyTrackingReports'
            }
          },
          emergency_tracking_reports_set_view_active_report: {
            bind: 'emergency-tracking-reports-set-view-active-report'
          },
          emergency_tracking_reports_set_adjuster_tracking: {
            bind: 'emergency-tracking-reports-set-adjuster-tracking'
          },
          emergency_tracking_reports_set_sos_entry_point: {
            bind: 'emergency-tracking-reports-set-sos-entry-point'
          },
          emergency_tracking_reports_set_emergencies_entry_point: {
            bind: 'emergency-tracking-reports-set-emergencies-entry-point'
          },
          emergency_tracking_reports_set_policy_id: {
            bind: 'emergency-tracking-reports-set-policy-id'
          },
          emergency_tracking_reports_set_claim_task: {
            bind: 'emergency-tracking-reports-set-claim-task'
          },
          global_get_from_storage: {
            bind: 'emergency-reports-get-native-local-storage'
          },
          global_set_in_storage: {
            bind: 'emergency-reports-set-native-local-storage'
          },
          global_remove_from_storage: {
            bind: 'emergency-reports-remove-native-local-storage'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          emergency_dashboard_cards: {
            bind: 'emergency-cards-fetched'
          },
          emergencyreports_set_feature_flags_emergency: {
            bind: 'emergency-reports-open-web-flags'
          },
          emergencyreports_PAGE_MENU_FAQS_EMERGENCY_HEADER: {
            bind: 'emergency-reports-header-faqs'
          },
          emergencyreports_SET_PNONE_NUMBER_ATM: {
            bind: 'emergency-reports-set-number-atm'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            emergency_vehicle_theft_reports_native_geolocation: {
              bind: 'getGeolocationForTheft'
            },
            emergencyreports_get_geolocation_assistances: {
              bind: 'getGeolocationForAssistances'
            },
            emergencyreports_assistances_vehicle_modal_operation_not_performed_error_call: {
              bind: 'callPhoneNumberPluggin'
            }
          },
          out: {
            emergency_vehicle_theft_reports_geolocation_update: {
              bind: 'emergency-reports-set-geolocation-theft'
            },
            set_phone_number_bbva_line: {
              bind: 'emergency-reports-set-number-bbva-line'
            },
            emergencyreports_assistances_update_geolocation: {
              bind: 'emergency-reports-set-geolocation-assistances'
            }
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
      config: getANALYTICS.ANALYTICS_VEHICLE.CONFIG,
      steps: {
        SHOCK: {
          pageVisit: 'location',
          0: 'location',
          1: 'emergency-services',
          last: 'confirmation',
          completed: 'completed'
        },
        STOLE: {
          pageVisit: 'page-visit',
          0: 'LocationDetail',
          last: 'confirmation'
        },
        CRANE: {
          pageVisit: 'page-visit',
          last: 'confirmation'
        },
        GLASS: {
          0: 'date-incident',
          1: 'damaged-glass',
          2: 'location',
          last: 'confirmation',
          completed: 'completed'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('CLICK_EMERGENCY_CARD')]: {
            bind: 'selectCards'
          },
          [getChannelName('CLICK_EMERGENCY_VEHICLE')]: {
            bind: 'selectVehicle'
          },
          [getChannelName('PAGE_MENU_EMERGENCY')]: {
            bind: 'pageViewMenu'
          },
          [getChannelName('PAGE_MENU_FAQS_EMERGENCY')]: {
            bind: 'pageViewMenuFaqs'
          },
          [getChannelName('STOLE_CARD_CLICK')]: {
            bind: 'selectStoleCard'
          },
          [getChannelName('REJECTED_CARD_CLICK')]: {
            bind: 'selectRejectCard'
          },
          [getChannelName('ATM_CARD_CLICK')]: {
            bind: 'selectAtm'
          },
          [getChannelName('STATUS_MODALS')]: {
            bind: 'openModalAtm'
          },
          [getChannelName('CHANGE_POLICY')]: {
            bind: 'changePolicy'
          },
          [getChannelName('HELP_FAQS_AEM')]: {
            bind: 'selectHelpFaqs'
          },
          [getChannelName('MODAL_ATM_ACCEPT')]: {
            bind: 'acceptModalAtm'
          },
          [getChannelName('init_page')]: {
            bind: 'pageViewSection'
          },
          [getChannelName('MODAL_ERROR_SERVICES_VISIBLE')]: {
            bind: 'modalErrorServices'
          },
          [getChannelName('MODAL_ERROR_SERVICES_VEHICLE_VISIBLE')]: {
            bind: 'modalErrorServices'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRANE_REPORT: {
            bind: 'selectSubEmergency'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_GLASS_REPORT')]: {
            bind: 'selectSubEmergency'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_THEFT_REPORT')]: {
            bind: 'selectSubEmergency'
          },
          [getChannelName('EMERGENCY_SELECTED_PRODUCT_DETAIL_ASSISTANCES_VEHICLE')]: {
            bind: 'selectSubEmergency'
          },
          emergency_reports_ANALYTICS_GLASS_LOCATION_CHANGE: {
            bind: 'fireModal'
          },
          [getChannelName('ANALYTICS_MODE_MODAL')]: {
            bind: 'fireModal'
          },
          emergency_vehicle_reports_view_policy_operative: {
            bind: 'fireAction'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'fireAction'
          },
          [getChannelName('EMERGENCY_VEHICLE_GLASS_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'fireAction'
          },
          [getChannelName('ASSISTANCES_GENERATE_REPORT_STATE_MODAL')]: {
            bind: 'stateModal'
          },
          [getChannelName('REPORT_ASSISTANCES_SELECTIONS_CLICK')]: {
            bind: 'assistancesSelections'
          },
          [getChannelName('ASSISTANCES_VEHICLE_REPORTS_VIEW_POLICY')]: {
            bind: 'viewPolicyAssistances'
          },
          [getChannelName('REPORT_CALL_ASSISTANCES_SUCCESS')]: {
            bind: 'callPhoneAssistances'
          },
          [getChannelName('REPORT_IN_PROGRESS_MODAL')]: {
            bind: 'callPhoneErrorAssists'
          },
          emergency_crane_vehicle_reports_view_policy_operative: {
            bind: 'clickGetPolicyCrane'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_GENERATE_REPORT_STATE_MODAL')]: {
            bind: 'stateModal'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'clickCallCrane'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_IN_PROGRESS_CALL_BUTTON_CLICK')]: {
            bind: 'clickCallProgressCrane'
          },
          emergencyreports_EMERGENCY_SELECTED_PRODUCT_DETAIL_CRASH_REPORT: {
            bind: 'selectSubEmergency'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_CHANGE_LOCATION')]: {
            bind: 'changeLocation'
          },
          [getChannelName('REPORT_STEP_COMPLETED')]: {
            bind: 'stepEmergencyService'
          },
          [getChannelName('EMERGENCY_SERVICES_QUESTIONNAIRE')]: {
            bind: 'emergencyServicesQuestionnaire'
          },
          [getChannelName('EMERGENCY_STEP_COMPLETED')]: {
            bind: 'emergencyStepCompleted'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_SUPPLIER_SELECT')]: {
            bind: 'stepGlassDamage'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_AUTO_PARTS_SELECT')]: {
            bind: 'stepAutoPartsSelect'
          },
          analytics_expandable_on_step_glass: {
            bind: 'onStepGlass'
          },
          analytics_expandable_edit_step: {
            bind: 'fireOnEdit'
          },
          analytics_step_complete_change: {
            bind: 'stepCompleteChange'
          },
          analytics_multistep_all_complete: {
            bind: 'fireOnLast'
          },
          [getChannelName('EMERGENCY_CRANE_VEHICLE_REPORTS_ALL_COMPLETE')]: {
            bind: 'fireOnLast'
          },
          emergency_vehicle_crash_reports_losses_report_create: {
            bind: 'fireOnCompleted'
          },
          emergency_vehicle_crash_reports_view_policy_operative: {
            bind: 'fireActionShock'
          },
          [getChannelName('EMERGENCY_VEHICLE_CRASH_REPORTS_SUCCESSFUL_REPORT_CALL')]: {
            bind: 'fireActionShock'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_RETRY_RESET')]: {
            bind: 'resetProperties'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_CALLFORHELP_RESET')]: {
            bind: 'resetProperties'
          },
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_ALREADYREQUESTED_RESET')]: {
            bind: 'resetProperties'
          },
          emergency_vehicle_reset_properties_analytics: {
            bind: 'resetProperties'
          },
          emergency_vehicle_reset_properties_analytics_with_modal: {
            bind: 'resetProperties'
          },
          [getChannelName('ASSISTANCES_MANAGE_STATE_MULTISTEP')]: {
            bind: 'manageStepsAssistances'
          },
          native_click_event: {
            bind: 'sidebarEmergency'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESS_PAGE: {
            bind: 'fireModal'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_ALREADY_PAGE: {
            bind: 'fireModal'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_SUCCESS_RECEIPT_ASSISTANCE_LINE_CALL: {
            bind: 'clickCallCrane'
          },
          emergencyreports_EMERGENCY_CRANE_VEHICLE_REPORTS_WE_CONTINUE_WORKING_ASSISTANCE_LINE_CALL: {
            bind: 'clickCallCrane'
          }
        },
        out: {
          [getChannelName('INIT_PAGE_ANALYTICS')]: {
            bind: 'emergency-reports-page-view',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('singeFootprintWithLevel2')
          },
          [getChannelName('PAGE_VIEW_MENU_ANALYTICS')]: {
            bind: 'emergency-reports-page-view-menu',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('dynamicFootprintWithLevel2')
          },
          [getChannelName('STOLE_OPTION_ANALYTICS')]: {
            bind: 'emergency-reports-internal-link-stole-card',
            analytics: getANALYTICS.ANALYTICS.APP_ONCLICK_OPTIONS_CARD
          },
          [getChannelName('REJECTED_OPTION_ANALYTICS')]: {
            bind: 'emergency-reports-internal-link-reject-card',
            analytics: getANALYTICS.ANALYTICS.APP_ONCLICK_OPTIONS_CARD
          },
          [getChannelName('MONEY_OPTION_ANALYTICS')]: {
            bind: 'emergency-reports-internal-link-atm-card',
            analytics: getANALYTICS.ANALYTICS.APP_ONCLICK_OPTIONS_CARD
          },
          [getChannelName('CHANGED_VEHICLE_ANALYTICS')]: {
            bind: 'emergency-reports-page-view-changed-policy',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('dynamicFootprintWithLevel3')
          },
          [getChannelName('FAQS_VEHICLE_ANALYRICS')]: {
            bind: 'emergency-reports-help-vehicle-analytics',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('dynamicFootprintWithLevel3')
          },
          [getChannelName('STATUS_MODAL_ATM_ANALYTICS')]: {
            bind: 'emergency-reports-modal-atm-active',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('singleFootprint')
          },
          [getChannelName('CLOSE_MODAL_ANALYTICS')]: {
            bind: 'emergency-reports-accept-modal',
            analytics: getANALYTICS.ANALYTICS.APP_ONCLICK_CLOSE_MODAL_ATM
          },
          [getChannelName('PAGE_VIEW_ERROR_SERVICES')]: {
            bind: 'emergency-reports-page-view-error-services',
            analytics: getANALYTICS.ANALYTICS._getAdvancedFootprint('dynamicFootprintWithErrorLevel3')
          },
          [getChannelName('ANALYTICS_ASSISTANCES_REPORT_MODAL')]: {
            bind: 'analitycs-emergency-assistances-multistep-modal-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE._getAdvancedFootprint('getAdvancedFootprintAssistsLevel3')
          },
          [getChannelName('ANALYTICS_ASSISTANCES_SUCCESS_MODAL')]: {
            bind: 'analitycs-success-report-modal-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE._getAdvancedFootprint('getAdvancedFootprintAssistsLevel4')
          },
          [getChannelName('ANALYTICS_ASSISTANCES_ALREADY_MODAL')]: {
            bind: 'analitycs-already-reported-modal-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE._getAdvancedFootprint('getAdvancedFootprintAssistsLevel4')
          },
          [getChannelName('ANALYTICS_CHANGE_STEP_ASSISTANCES')]: {
            bind: 'analitycs-pageview-step-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE._getAdvancedFootprint('getAdvancedFootprintAssistsLevel4')
          },
          [getChannelName('CHANGE_LOCATION_ASSISTANCES')]: {
            bind: 'analitycs-change-report-location-modal-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE._getAdvancedFootprint('getAdvancedFootprintAssistsLevel4')
          },
          [getChannelName('ANALYTICS_VIEW_POLICY_ASSISTANCES')]: {
            bind: 'analitycs-view-policy-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE.GET_EXTERNAL_LINK_FOOTPRINT
          },
          [getChannelName('ANALYTICS_CALL_SUCCESS_MODAL')]: {
            bind: 'analitycs-call-phone-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE.GET_EXTERNAL_LINK_FOOTPRINT
          },
          [getChannelName('ANALYTICS_CALL_ERROR_MODAL_ASSISTANCES')]: {
            bind: 'analitycs-call-phone-error-assistances',
            analytics: getANALYTICS.ANALYTICS_ASSISTANCES_VEHICLE.GET_EXTERNAL_LINK_FOOTPRINT
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_LAST_STEP_MODAL')]: {
            bind: 'analytics-vehicle-crane-confirmation',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('CRANE_RESUME')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_MODAL')]: {
            bind: 'analytics-vehicle-crane-reportLocationStep',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('CRANE_LOCATION')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_CHANGE_LOCATION_MODAL')]: {
            bind: 'analytics-vehicle-crane-reportChangeLocation',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('CHANGE_LOCATION')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_ERROR_COMMUNICATION_MODAL')]: {
            bind: 'analytics-vehicle-crane-error-communication-modal',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('ERROR_COMUNICATION')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_SUCCESS')]: {
            bind: 'analytics-vehicle-crane-success-report-modal',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('CRANE_SUCCESS')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_SUCCESS_CLICK_POLICY')]: {
            bind: 'emergency-crance-reports-click-policy-analytics',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getDynamicAnalytics('CLICK_OPERATIVE')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_SUCCESS_CLICK_LINE_ASSISTANCE')]: {
            bind: 'emergency-crane-reports-click-assistance-analytics',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getDynamicAnalytics('CLICK_OPERATIVE')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_IN_PROGRESS')]: {
            bind: 'analytics-vehicle-crane-already-reported-modal',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getAdvancedFootprint('CRANE_IN_PROGRESS')
          },
          [getChannelName('ANALYTICS_VEHICLE_CRANE_REPORT_CRANE_IN_PROGRESS_CALL')]: {
            bind: 'emergency-crane-reports-click-progress-analytics',
            analytics: getANALYTICS.ANALYTICS_CRANE_VEHICLE._getDynamicAnalytics('IN_PROGRESS_CALL')
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_LOCATION')]: {
            bind: 'analytics-vehicle-shock-location',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.HUELLA_LOCATION
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_CHANGE_LOCATION')]: {
            bind: 'analytics-vehicle-shock-change-location',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.HUELLA_CHANGE_LOCATION
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_EMERGENCY_SERVICES')]: {
            bind: 'analytics-vehicle-shock-emergency-services',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.HUELLA_SERVICES
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_CONFIRMATION')]: {
            bind: 'analytics-vehicle-shock-confirmation',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.HUELLA_RESUME
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_COMPLETED')]: {
            bind: 'analytics-vehicle-shock-completed',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.HUELLA_SUCCESSFUL_REPORT
          },
          [getChannelName('ANALYTICS_VEHICLE_SHOCK_ACTION')]: {
            bind: 'analytics-vehicle-shock-action',
            analytics: getANALYTICS.ANALYTICS_VEHICLE.LINK_SUCCESSFUL_REPORT
          },
          [getChannelName('ANALYTICS_VEHICLE_STOLE_LAST_STEP_MODAL')]: {
            bind: 'analytics-vehicle-stole-confirmation',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_STOLE_MODAL')]: {
            bind: 'analytics-vehicle-stole-LocationDetail',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_CHANGE_LOCATION_MODAL')]: {
            bind: 'analytics-vehicle-stole-ChangeLocation',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_STOLE_SUCCESS')]: {
            bind: 'analytics-vehicle-stole-SuccessVehicle',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_STOLE_REPORT_DETECTED')]: {
            bind: 'analytics-vehicle-stole-DetectedErrors',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_STOLE_ACTION')]: {
            bind: 'analytics-vehicle-stole-action',
            analytics: getANALYTICS.ANALYTICS_THEFT_VEHICLE.LINK_REPORT_THEFT
          },
          [getChannelName('ANALYTICS_SIDEBAR_EMERGENCY_CACHE')]: {
            bind: 'analytics-sidebar-emergency-cached',
            analytics: ANALYTICS_SIDEBAR_EMERGENCY.emergencyReports('login')
          },
          [getChannelName('ANALYTICS_SIDEBAR_EMERGENCY_PRIVATE')]: {
            bind: 'analytics-sidebar-emergency-private',
            analytics: ANALYTICS_SIDEBAR_EMERGENCY.emergencyReports('posicion global')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_GLASSMULTISTEP_MODAL')]: {
            bind: 'analytics-vehicle-glass-GlassMultistep',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_DATE_INCIDENT_STEP')]: {
            bind: 'analytics-vehicle-glass-date-incident',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_DAMAGED_STEP')]: {
            bind: 'analytics-vehicle-glass-damaged-glass',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('getAdvancedFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_LOCATION_STEP')]: {
            bind: 'analytics-vehicle-glass-location',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('customFieldsFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_CONFIRMATION_STEP')]: {
            bind: 'analytics-vehicle-glass-confirmation',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('customFieldsFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_CHANGELOCATION_MODAL')]: {
            bind: 'analytics-vehicle-glass-GlassChangeLocation',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('customFieldsFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_SUCCESS_MODAL')]: {
            bind: 'analytics-vehicle-glass-GlassSuccess',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('customFieldsFootprintWithLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_CALLFORHELP_MODAL')]: {
            bind: 'analytics-vehicle-glass-GlasscallForHelp',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('callForHelpErrorLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_ALREADYREQUESTED_MODAL')]: {
            bind: 'analytics-vehicle-glass-GlassalreadyRequested',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('alReadyRequestedErrorLevel4')
          },
          [getChannelName('ANALYTICS_VEHICLE_GLASS_ACTION')]: {
            bind: 'analytics-vehicle-glass-action',
            analytics: getANALYTICS.analyticsGlassVehicle._getAdvancedFootprint('linkReportsGlass')
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
          [getChannelName('OPEN_DIALER')]: {
            bind: 'openDialer'
          },
          [getChannelName('AUTHENTICATION_INHERITANCE_OPEN_DIALER')]: {
            bind: 'openDialer'
          }
        }
      }
    }
  };

  const settingsMobile = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('OPEN_SETTINGS')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          share_reset_receipt: {
            bind: 'reset'
          },
          share_capture_receipt: {
            bind: 'captureReceipt'
          },
          [getChannelName('EMERGENCY_VEHICLE_THEFT_REPORTS_BODY_TICKET')]: {
            bind: 'setProperties'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  base = {
    hash: 'emergency-reports',
    currentPage: {
      url: '/emergency-reports',
      params: []
    },
    pages: pages,
    template,
    components: [
      {
        ...createSpinner(config),
        tagSpherica: 'cells-spinner-veil-spherica',
        propertiesSpherica: {
          className: 'solid-spinner'
        }
      },
      cellsConnectionStatus(PAGE_NAME),
      navigation,
      lifeCycle,
      dialerMobile,
      settingsMobile,
      bbvaEmergencyReports,
      bbvaEmergencyVehicleTheftReports,
      bbvaEmergencyVehicleAssistances,
      bbvaEmergencyCraneVehicle,
      bbvaEmergencyVehicleCrashReports,
      bbvaEmergencyVehicleGlass,
      bbvaManagerEmergency,
      bbvaManagerEmergencyAnalytics,
      cellsShareGenericReceipt,
      bbvaManagerEmergencyAuthentication
    ]
  };

  const datePicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_REPORTS_OPEN_DATE_NATIVE')]: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          [getChannelName('EMERGENCY_CAR_EMERGENCY_VEHICLE_GLASS_LAUNCH_DATE_PICKER_SUCCESS')]: {
            bind: 'launch-date-picker-success'
          }
        }
      }
    }
  };

  if (isSphericaMode || !nativeIos) {
    base.components.push(datePicker);
  }

  if (native) {
    base.components.push({
      zone: 'app__main',
      tag: 'cells-nativeconnector-open-document',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            [getChannelName('EMERGENCY_VEHICLE_REPORTS_OPEN_DOCUMENT')]: {
              bind: 'openByUrl'
            }
          },
          out: {
            [getChannelName('EMERGENCY_VEHICLE_OPEN_DOCUMENT_URL_SUCCESS')]: {
              bind: 'open-document-open-by-url-success'
            },
            [getChannelName('EMERGENCY_VEHICLE_REPORTS_OPEN_DOCUMENT_URL_ERROR')]: {
              bind: 'open-document-open-by-url-error'
            }
          }
        }
      }
    });
  }

  addRetryErrors(base)([
    {
      id: 'EMERGENCY-VEHICLE-POLICY-ERROR-REQUEST',
      acceptRetry: { bind: 'generatePdfDocument', component: 'bbva-manager-emergency-sos' },
      finishRetry: { bind: 'exhaustedAttempts', component: 'bbva-manager-emergency-sos' }
    }
  ]);

  _localStorage.addOutStorageChannels(base.components, [ 'losses_report_request_id' ], config);
  return sphericaPageUtils.spherize(base);
};
