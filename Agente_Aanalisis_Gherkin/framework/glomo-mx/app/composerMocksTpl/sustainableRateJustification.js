module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', publicSettingsHost, publicSettingsId,
      versions: { documentsFileV0, documentsProcessV1, loansV2 }},
    nativeIos = false,
    consumerId
  } = CONFIG;
  const { useNames, toUnderscoreCase, headerHeightMinimum } = require('./common/helpers/_utils');
  const pageName = 'sustainableRateJustification';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { getAdvancedFootprintSustainableRateJustification } = require('./analytics/_sustainableRateJustification')(CONFIG);
  const channelName = 'sustainableRateJustification';
  const operativePrefix = toUnderscoreCase(channelName).toLowerCase();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const base = {
    hash: 'susustainable-rate-justification',
    currentPage: {
      url: '/susustainable-rate-justification'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        className: nativeIos ? 'ios-top-padding' : '',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        headerHeightMinimum
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        disableEdgeSwipe: true,
        className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: []
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init')]: {
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
  const bbvaDefaultUnitLinked = {
    zone: 'app__main',
    type: 'UI',
    tag: 'loan-and-mortgage-information-sustainable-rate-justification',
    familyPath: '@bbva-web-components-widgets/loan-and-mortgage-information-sustainable-rate-justification',
    render: 'litElement',
    properties: {
      host,
      publicSettingsHost,
      requiredToken,
      applicationId: consumerId,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsId,
      versionFileApiDm: documentsFileV0,
      versionDocumentProcessApiDm: documentsProcessV1,
      versionLoanApiDm: loansV2,
      iOSFixedHeader: nativeIos,
      maxFileSize: '8388608',
      maxUploadFile: '10',
      stopExecutePublicSettings: true,
      native: !!CONFIG.native,
      multipartData: {
        type: 'multipart/form-data',
        mediaType: 'application/pdf',
        name: 'file'
      },
      cellsConnections: {
        in: {
          [getChannelName('succes_check_permission')]: {
            bind: 'infoPluginPermission'
          },
          [getChannelName('request_permission_storage')]: {
            bind: 'openReadStorage'
          },
          [getChannelName('set_hide_modal')]: {
            bind: 'hidden'
          },
          [getChannelName('request_permission_storage_error')]: {
            bind: 'errorPlugin'
          },
          sustainable_rate_justification_send_data_loan: {
            bind: 'setLoanId'
          },
          sustainable_rate_justification_set_dataCustomer: {
            bind: 'setCustomerId'
          },
          [getChannelName('device_info_platform_success')]: {
            bind: 'permissionsCheckSuccess'
          },
          sustainable_rate_justification_file_formated: {
            bind: 'uploadFile'
          },
          [getChannelName('parce_data')]: {
            bind: 'publicSettings'
          }
        },
        out: {
          [getChannelName('open_find_explorer_file')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-file-fetch-open'
          },
          sustainable_rate_justification_secure_sharing_get_data: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-file-upload-click',
            analytics: getAdvancedFootprintSustainableRateJustification('getInternalLink', 'subir y enviar facturas', 'subir otra factura', 'elegir archivo')
          },
          [getChannelName('set_activate_permission_storage')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-permission-storage-activate'
          },
          [getChannelName('set_open_document')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-document-open'
          },
          [getChannelName('backStep_cancel_upload_files')]: {
            bind: 'navigation-go-back',
            backStep: true
          },
          [getChannelName('succes_upload_files_close_header')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-header-success-close',
            backStep: true
          },
          [getChannelName('analytics_open_modal_onboarding')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-modal-onboarding-open',
            analytics: getAdvancedFootprintSustainableRateJustification('withLevel2', 'subir y enviar facturas')
          },
          sustainable_rate_justification_analytics_add_frist_file: {
            bind: 'help-modal-footer-button-click',
            analytics: getAdvancedFootprintSustainableRateJustification('withLevel3', 'subir y enviar facturas', '', 'elegir archivo')
          },
          [getChannelName('analytics_send_files')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-button-confirm-click',
            analytics: getAdvancedFootprintSustainableRateJustification('withLevel3', 'subir y enviar facturas', '', 'verificando informacion')
          },
          [getChannelName('analytics_warning_max_size_file')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-file-size-exceed',
            analytics: getAdvancedFootprintSustainableRateJustification('getAdvancedFootprintError', 'subir y enviar facturas', '', 'error tamano archivo superado')
          },
          [getChannelName('get_check_permission_storage')]: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-plugin-permission-response'
          },
          active_local_storage_succes: {
            bind: 'loan-and-mortgage-information-sustainable-rate-justification-files-upload-success'
          }
        }
      }
    }
  };
  const bbvaPluginFileFlecher = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-file-fetcher-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-file-fetcher-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_find_explorer_file')]: {
            bind: 'fileFetch'
          }
        },
        out: {
          [getChannelName('succes_open_file')]: {
            bind: 'file-fetch-success'
          }
        }
      }
    }
  };
  const bbvaPermissionPlugin = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-permissions-plugin',
    familyPath: '@glomo-web-components/bbva-nativeconnector-permissions-plugin',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('get_check_permission_storage')]: {
            bind: 'checkState'
          },
          [getChannelName('set_activate_permission_storage')]: {
            bind: 'request'
          }
        },
        out: {
          [getChannelName('succes_check_permission')]: {
            bind: 'permissions-check-state-success'
          },
          [getChannelName('request_permission_storage')]: {
            bind: 'permissions-request-success'
          },
          [getChannelName('request_permission_storage_error')]: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };
  const bbvaOpenDocument = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-open-document',
    familyPath: '@glomo-web-components/bbva-nativeconnector-open-document',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('set_open_document')]: {
            bind: 'openByBase64'
          }
        }
      }
    }
  };
  const mobileDeviceinfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-deviceinfo',
    properties: {
      pluginName: 'DeviceInfo',
      cellsConnections: {
        in: {
          sustainable_rate_justification_secure_sharing_get_data: {
            bind: 'getPlatform'
          },
          [getChannelName('device_info_send_model')]: {
            bind: 'getModel'
          },
          [getChannelName('device_info_send_manufactured')]: {
            bind: 'getManufacturer'
          }
        },
        out: {
          [getChannelName('device_info_platform_success')]: {
            bind: 'get-platform-success'
          },
          [getChannelName('device_info_model_success')]: {
            bind: 'get-model-success'
          },
          [getChannelName('device_info_manufacturer_success')]: {
            bind: 'get-manufacturer-success'
          }
        }
      }
    }
  };
  const controllerSustainable = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-controller-sustainable-rate-justification',
    familyPath: '@glomo-web-components/bbva-controller-sustainable-rate-justification',
    render: 'litElement',
    properties: {
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('init')]: {
            bind: 'initSettings'
          },
          sustainable_rate_justification_init: {
            bind: 'changeModalInfo'
          },
          navigation_product_to_sustainable_rate_justification: {
            bind: 'setLoanId'
          },
          global_login_success: {
            bind: 'setCustomerId'
          },
          [getChannelName('succes_open_file')]: {
            bind: 'fileFetcherSuccess'
          }
        },
        out: {
          sustainable_rate_justification_file_formated: {
            bind: 'send-file-formatted'
          },
          [getChannelName('parce_data')]: {
            bind: 'send-data-docuemntation'
          },
          sustainable_rate_justification_set_dataCustomer: {
            bind: 'set-customer-id'
          },
          sustainable_rate_justification_send_data_loan: {
            bind: 'set-loan-id'
          },
          sustainable_rate_justification_analytics_add_frist_file: {
            bind: 'update-modal-info',
            analytics: getAdvancedFootprintSustainableRateJustification('withLevel3', 'subir y enviar facturas', '', 'elegir archivo')
          }
        }
      }
    }
  };
  base.components.push(
    cellsHandleLifeCycle,
    bbvaPluginFileFlecher,
    bbvaDefaultUnitLinked,
    bbvaPermissionPlugin,
    bbvaOpenDocument,
    controllerSustainable,
    mobileDeviceinfo
  );
  return sphericaPageUtils.spherize(base);
};
