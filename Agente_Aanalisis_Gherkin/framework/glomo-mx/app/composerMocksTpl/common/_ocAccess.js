'use strict';
module.exports = (CONFIG, PAGE_ORIGIN) => {
  const utils = require('./helpers/_utils');
  const campaigns =  utils.getCampaigns();
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);

  return () => {
    const channelName = (code) => `${PAGE_ORIGIN}_oc_banner_${code}_clicked`.replace(/-/g, '_').toLowerCase();
    const eventName = (code) => `cells-oc-banner-click-${code}`.replace(/_/g, '-').toLowerCase();

    const outChannel = {
      global_oc_banner_displayed: {
        bind: 'cells-oc-banner-displayed'
      },
      global_oc_banner_closed: {
        bind: 'cells-oc-banner-close'
      }
    };

    Object.keys(campaigns).forEach((campaign) => {
      outChannel[channelName(campaigns[campaign].code)] = {
        bind: eventName(campaigns[campaign].code),
        link: campaigns[campaign].link
      };
    });

    return {
      zone: 'oldDashboard',
      type: 'UI',
      tag: 'cells-oc-banner',
      tagSpherica: 'cells-oc-banner-spherica',
      properties: {
        id: `${PAGE_ORIGIN}-banner`,
        className: 'banner banner--image-center',
        localCurrency: LOCAL_CURRENCY,
        animated: true,
        showHeader: false,
        closeAutomatically: true,
        continue: PAGE_ORIGIN,
        bannerLink: 'cells-oc-banner-iwant',
        defaultImage: 'images/oneClicks/default.svg',
        formatDate: 'DD MMM YYYY',
        amountClass: '',
        validUntilMsg: 'cells-oc-banner-valid-until',
        animatedClass: 'slide-animated',
        cellsConnections: {
          in: {
            [`${PAGE_ORIGIN}_first_filtered_offer`]: {
              bind: 'config'
            },
            [`${PAGE_ORIGIN}_open_banner`]: {
              bind: 'openBanner'
            },
            [`${PAGE_ORIGIN}_close_banner`]: {
              bind: 'closeBannerIfEmpty'
            }
          },
          out: outChannel
        }
      },
      propertiesSpherica: {
        variant: 'secondary'
      }
    };
  };
};
