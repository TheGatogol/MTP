'use strict';
const bbvaNativeConnectorDeviceInfo = {
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-nativeconnector-device-info',
  familyPath: '@glomo-web-components/bbva-nativeconnector-device-info',
  render: 'litElement',
  properties: {
    cellsConnections: {
      in: {
        global_nativeconnector_device_info_get_nfc_status: {
          bind: 'getNFCStatus'
        },
        global_nativeconnector_device_info_is_google_play_services_available: {
          bind: 'isGooglePlayServicesAvailable'
        },
        global_nativeconnector_device_info_get_patform: {
          bind: 'getPlatform'
        },
        global_nativeconnector_device_info_get_model: {
          bind: 'getModel'
        },
        global_nativeconnector_device_info_get_app_version: {
          bind: 'getApplicationVersion'
        },
        global_device_info_get_true_time: {
          bind: 'getTrueTime'
        }
      },
      out: {
        global_nativeconnector_device_info_get_nfc_status_success: {
          bind: 'get-nfc-status-success'
        },
        global_nativeconnector_device_info_is_google_play_services_available_success: {
          bind: 'is-google-play-services-available-success'
        },
        global_nativeconnector_device_info_get_patform_success: {
          bind: 'get-platform-success'
        },
        global_nativeconnector_device_info_get_model_success: {
          bind: 'get-model-success'
        },
        global_nativeconnector_device_info_error: {
          bind: 'error'
        },
        global_nativeconnector_device_info_get_app_version_success: {
          bind: 'get-app-version-success'
        },
        global_device_info_get_true_time_success: {
          bind: 'get-true-time-success'
        }
      }
    }
  }
};
module.exports = {
  bbvaNativeConnectorDeviceInfo
};
