'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'internationalTransfersHistorical';
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const PAGE_NAME_UNDERSCORED = utils.toUnderscoreCase(PAGE_NAME);
  const ANALYTICS = require('./analytics/_internationalTransfersHistorical')();
  const [ getChannelName ] = utils.useNames(PAGE_NAME_UNDERSCORED);
  const HOST = CONFIG.globalServices.host;
  const isNativeIos = CONFIG.nativeIos;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  // eslint-disable-next-line new-cap
  const Spinner = utils.SPINNER(CONFIG);
  Spinner.properties.className = 'solid-spinner';
  Spinner.properties.cellsConnections.in = {};

  const base = {
    hash: 'mx-international-transfers-historical',
    currentPage: {
      url: '/international-transfers-historical'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [getChannelName('custom_init_page')]: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            [getChannelName('scroll_bottom')]: {
              bind: 'set-scroll-bottom-event'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica',
        override: {
          className: 'bg-light-grey'
        }
      })
    },
    components: []
  };

  const CellsHandleLifieCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'custom-init-page': true,
        'init-header-text': '',
        'init-header-left-primary-button': '',
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_HISTORICAL: {
            bind: 'fireCustomInitEvents'
          }
        },
        out: {
          [getChannelName('custom_init_page')]: {
            bind: 'custom-init-page'
          },
          [getChannelName('header_text')]: {
            bind: 'init-header-text'
          },
          [getChannelName('icon_left_primary_button')]: {
            bind: 'init-header-left-primary-button'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const BbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('icon_left_primary_button')]: {
            bind: 'iconLeftPrimary'
          },
          [getChannelName('header_text')]: {
            bind: 'text'
          }
        },
        out: {
          [getChannelName('header_go_back')]: {
            bind: 'header-main-icon-left-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-sequential',
      leftIconLabel: 'bbva-header-main-back-left-icon-label',
      cellsConnections: {
        in: {
          international_transfers_historical_header_text: {
            bind: 'text'
          }
        },
        out: {
          international_transfers_historical_header_go_back: {
            bind: 'header-main-back-icon-click'
          }
        }
      }
    }
  };

  const BbvaAggregationMovementList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-movement-list',
    tagSpherica: 'bbva-aggregation-movement-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-movement-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-movement-list-spherica',
    render: 'litElement',
    properties: {
      hideSpinner: false,
      groupHeaderVariant: 'date',
      language: 'es-MX',
      localCurrency: 'MXN',
      emptyMovementText: 'international-transfers-historical-empty-movments-text',
      emptyImageMovement: './images/empty_state_day.svg',
      cellsConnections: {
        in: {
          [getChannelName('custom_init_page')]: {
            bind: 'init'
          },
          [getChannelName('movement_list_spinner')]: {
            bind: 'hideSpinner'
          },
          [getChannelName('movement_list_grouped')]: {
            bind: 'movementGroups'
          },
          [getChannelName('no_more_movements')]: {
            bind: 'noMoreMovements'
          }
        },
        out: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_DETAIL: {
            bind: 'aggregation-movement-list-item-click',
            link: {
              page: 'internationalTransfersDetail'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            international_transfers_historical_empty_movement_text: {
              bind: 'emptyMovementText'
            },
            international_transfers_historical_set_empty_image: {
              bind: 'emptyImageMovement'
            }
          }
        }
      }
    }
  };

  const BbvaManagerInternationalTransfer = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-transfer',
    tag: 'bbva-manager-international-transfer-historical',
    render: 'litElement',
    properties: {
      statuses: {
        PENDING_INFORMATION: { name: 'bbva-manager-international-transfer-movement-pending-information-status', type: 'warning' },
        IN_REVIEW: { name: 'bbva-manager-international-transfer-movement-in-review-status', type: 'default' },
        SUCCESSFUL: { name: 'bbva-manager-international-transfer-movement-successful-status', type: 'success' },
        REJECTED: { name: 'bbva-manager-international-transfer-movement-rejected-status', type: 'error' },
        DEFAULT: { name: 'bbva-manager-international-transfer-movement-default-status', type: 'default' }
      },
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_HISTORICAL: {
            bind: 'initHistorical'
          },
          [getChannelName('money_laundering_international_transfers_search_post_successful_response')]: {
            bind: 'handleMoneyLaunderingInternationalTransfersSearchPostSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_search_post_pagination')]: {
            bind: 'handleMoneyLaunderingInternationalTransfersSearchPostPagination'
          },
          [getChannelName('money_laundering_international_transfers_search_post_error_response')]: {
            bind: 'handleMoneyLaunderingInternationalTransfersSearchPostErrorResponse'
          },
          [getChannelName('scroll_bottom')]: {
            bind: 'getInternationaTransfersHistorical'
          },
          [getChannelName('header_go_back')]: {
            bind: 'exitHistorical'
          },
          global_alert_manager_generic_error_accept: {
            bind: 'exitHistorical'
          }
        },
        out: {
          [getChannelName('header_text')]: {
            bind: 'dispatch-header-page'
          },
          [getChannelName('request_money_laundering_international_transfers_search_post')]: {
            bind: 'request-movements-historical'
          },
          [getChannelName('movement_list_grouped')]: {
            bind: 'dispatch-movement-list-grouped'
          },
          [getChannelName('icon_left_primary_button')]: {
            bind: 'dispatch-icon-left-primary'
          },
          [getChannelName('movement_list_spinner')]: {
            bind: 'movement-list-spinner'
          },
          [getChannelName('no_more_movements')]: {
            bind: 'dispatch-no-more-movements'
          },
          [getChannelName('go_back')]: {
            bind: 'go-back',
            backStep: true
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: true,
      newCellsConnections: {
        add: {
          out: {
            international_transfers_historical_empty_movement_text: {
              bind: 'dispatch-text-empty-historical-movements'
            },
            international_transfers_historical_set_empty_image: {
              bind: 'set-empty-image'
            }
          }
        }
      }
    }
  };

  const bbvaDataproviderMoneyLaunderingInternationalTransfers = {
    tag: 'bbva-dataprovider-money-laundering-international-transfers',
    familyPath: '@glomo-web-components/bbva-dataprovider-money-laundering',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '0',
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_HISTORICAL: {
            bind: 'initProperties'
          },
          [getChannelName('request_money_laundering_international_transfers_search_post')]: {
            bind: 'postInternationalTransfersSearch'
          }
        },
        out: {
          [getChannelName('money_laundering_international_transfers_search_post_successful_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-search-post-successful-response'
          },
          [getChannelName('money_laundering_international_transfers_search_post_error_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-search-post-error-response'
          },
          [getChannelName('money_laundering_international_transfers_search_post_pagination')]: {
            bind: 'data-provider-money-laundering-international-transfers-search-post-pagination'
          },
          [getChannelName('money_laundering_international_transfers_search_post_more_pages')]: {
            bind: 'data-provider-money-laundering-international-transfers-search-post-more-pages'
          },
          global_generic_error: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const BbvaAnalyticsManagerInternationalTransfer = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-international-transfer',
    tag: 'bbva-analytics-manager-international-transfer-historical',
    render: 'litElement',
    properties: {
      operationsType: {
        SENT: 'enviadas',
        RECEIVED: 'recibidas'
      },
      cellsConnections: {
        in: {
          INTERNATIONAL_TRANSFERS_INITIALIZE_HISTORICAL: {
            bind: 'init'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'setIsInitialized'
          }
        },
        out: {
          [getChannelName('operations_sent')]: {
            bind: 'analytics-page-view-international-transfers-historical',
            analytics: ANALYTICS.get_custom_page_view_with_feature_flag({ bind: 'level3' })
          }
        }
      }
    }
  };

  base.components.push(
    CellsHandleLifieCycle,
    BbvaHeaderMain,
    BbvaAggregationMovementList,
    BbvaManagerInternationalTransfer,
    bbvaDataproviderMoneyLaunderingInternationalTransfers,
    BbvaAnalyticsManagerInternationalTransfer,
    Spinner
  );

  addRetryErrors(base)([
    {
      id: 'international-transfers-historical-information-not-loaded',
      acceptRetry: {
        bind: 'getInternationaTransfersHistorical',
        component: 'bbva-manager-international-transfer-historical'
      },
      cancelRetry: {
        bind: 'exitHistorical',
        component: 'bbva-manager-international-transfer-historical'
      },
      successEvent: {
        bind: 'data-provider-money-laundering-international-transfers-search-post-successful-response',
        component: 'bbva-dataprovider-money-laundering-international-transfers'
      },
      finishRetry: {
        bind: 'exitHistorical',
        component: 'bbva-manager-international-transfer-historical'
      },
      acceptCallForHelp: {
        bind: 'exitHistorical',
        component: 'bbva-manager-international-transfer-historical'
      }
    }
  ]);

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};