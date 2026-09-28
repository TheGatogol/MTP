module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)('distributor');
  const { nativeIos = false } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerHeight: 50,
      className: nativeIos ? 'bg-light-grey' : 'bg-light-grey',
      cellsConnections: {
        in: {
          __bridge_page_distributor: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const bbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      iconLeftPrimary: 'coronita:return-12',
      cellsConnections: {
        in: {
          global_distributor_header_text: {
            bind: 'text'
          }
        },
        out: {
          global_distributor_go_back: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaWidgetBnpl = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-flexible-financing-distributor',
    familyPath: '@glomo-web-components/bbva-widget-flexible-financing-distributor',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          __bridge_page_distributor: {
            bind: 'initBnpl'
          },
          card_Detail_set_header_title: {
            bind: 'cardHeader'
          },
          global_card_transaction_flexible_financing_distributor: {
            bind: 'data'
          }
        },
        out: {
          global_distributor_header_text: {
            bind: 'bbva-widget-flexible-financing-distributor-set-header'
          },
          global_card_transaction_servicing_dashboard: {
            bind: 'bbva-widget-flexible-financing-distributor-list-card-redirect-event-pyp',
            link: {
              page: 'paymentDashboard'
            }
          },
          global_card_transaction_servicing_dashboardBnpl: {
            bind: 'bbva-widget-flexible-financing-distributor-list-card-redirect-event-bnpl',
            link: {
              page: 'paymentDashboardBnpl'
            }
          }
        }
      }
    }
  };
  const base = {
    hash: 'distributor',
    currentPage: {
      url: '/distributor'
    },
    pages,
    template,
    components: [
      bbvaHeaderMain,
      bbvaWidgetBnpl
    ]
  };
  return base;
};