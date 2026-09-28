'use strict';

const utils = require('./_utils.js');

const getAnalyticsOcBanner = (PAGENAME, CONFIG) => {
  const ANALYTICS = require('../../analytics/_ocAccess')();
  const ANALYTICS_OFFERS =  {
    ['oc-account']: require('../../analytics/_ocAccount')(),
    ['oc-metasegura']: require('../../analytics/_ocMetaseguraOffer')(),
    ['travel-insurance']: require('../../analytics/_travelInsurance')(),
    ['car-loan']: require('../../analytics/_carLoan')(),
    ['oc-car-loan-origination']: require('../../analytics/_ocCarLoanOrigination')(),
    ['mortgage-loan']: require('../../analytics/_mortgage')(),
    ['non-preapproved-consumer-loan']: require('../../analytics/_nonPreApprovedConsumerLoanBureau')(),
    ['mpos-openpay']: require('../../analytics/_ocCashZone')(),
    ['top-credit-card']: require('../../analytics/_ocTopCreditCard')(),
    ['flexible-financing-debit']: require('../../analytics/_financeTransactionMultipurchaseDebit')(),
    ['credit-bureau']: require('../../analytics/_creditBureau.js')(CONFIG),
    ['limit-increase']: require('../../analytics/_increment')(),
    ['loan-and-mortgage-information']: require('../../analytics/_loanAndMortgageInformation.js')(CONFIG),
    ['n-limit-increase']: require('../../analytics/_nCreditLineIncrease')(),
    ['invest-advisory-onboarding']: require('../../analytics/_investAdvisoryPortfolioProfiling.js')(),
    ['payroll-advance']: require('../../analytics/_ocPayrollAdvance.js')(),
    ['deposit-hiring-static']: require('../../analytics/_depositHiring.js')(),
    ['deposit-hiring']: require('../../analytics/_depositHiring.js')(),
    ['oc-account-young']: require('../../analytics/_ocAccountYoung.js')(),
    ['credit-card-holder']: require('../../analytics/_creditCardHolder.js')(),
    ['credit-card-holder-spherica']: require('../../analytics/_creditCardHolderSpherica.js')(),
    ['recolocation']: require('../../analytics/_ocLoanRelocation.js')(),
    ['relocation-financial-health']: require('../../analytics/_ocLoanRelocationFinancialHealth.js')(),
    ['oc-mortgage-non-preapproved']: require('../../analytics/_ocMortgageNonPreapproved.js')(),
    ['oc-fund']: require('../../analytics/_fundsHiring.js')(),
    ['fund-origination-oc-fund']: require('../../analytics/_fundOriginationOcFund.js')(),
    ['payroll-portability']: require('../../analytics/_ocPayrollPortability.js')(),
    ['non-preapproved-credit-card']: require('../../analytics/_nonPreApprovedCreditCardBureau.js')(),
    ['contract-products-section-authorization']: require('../../analytics/_contractProductsSectionDataAuthorization')(),
    ['contracting-goals-minor']: require('../../analytics/_goalsMinorHiring.js')(),
    ['onboarding-bbva-trader']: require('../../analytics/_onboardingBbvaTrader.js')(),
    ['oc-secure-loan']: require('../../analytics/_ocSecureLoan.js')(),
    ['payroll-portability-oc']: require('../../analytics/_payrollPortabilityN2.js')(),
    ['contract-products-section-authorization-multiproduct']: require('../../analytics/_contractProductsSectionDataAuthorizationMultiproduct')(),
    ['funds-hiring-origination']: require('../../analytics/_fundsHiringOrigination.js')()
  };
  const OPERATIVE_PREFIX = utils.createPrefixFromPageName(PAGENAME);
  const campaigns = utils.getCampaigns();
  const campaignsAnalytics = utils.getCampaignAnalytics();
  const campaignsCode = utils.getCampaignsCode();

  const channelNameIn = (code) => `${OPERATIVE_PREFIX}_oc_banner_${code}_clicked`.replace(/-/g, '_').toLowerCase();
  const channelNameOut = (code, type) => `${OPERATIVE_PREFIX}_analytics_oc_banner_${code}_${type}`.replace(/-/g, '_').toLowerCase();
  const eventName = (code, type) => `analytics-oc-banner-${type}-${code}`.replace(/_/g, '-').toLowerCase();

  const channelIn = {
    dashboard_list_products: {
      bind: 'listProducts'
    }
  };

  Object.keys(campaigns).forEach((campaign) => {
    channelIn[channelNameIn(campaigns[campaign].code, 'clicked')] = {
      bind: 'bannerClicked'
    };
  });

  let channelOut = {
    [`${OPERATIVE_PREFIX}_page_view_channel`]: {
      bind: 'analytics-huella-avanzada-with-offers',
      analytics: ANALYTICS.CONTRACT_PRODUCT_SECTION_PAGE_VIEW
    }
  };

  Object.values(campaigns).forEach((campaign) => {
    if (Object.keys(campaignsAnalytics).includes(campaign.code) && campaignsAnalytics[campaign.code].hasOnClickStartAnalytic) {
      channelOut[channelNameOut(campaign.code, 'app-on-click-start')] = {
        bind: eventName(campaign.code, 'clicked'),
        analytics: ANALYTICS_OFFERS[campaign.code].APP_ON_CLICK_START
      };
    }
    if (Object.keys(campaignsAnalytics).includes(campaign.code) && campaignsAnalytics[campaign.code].clickThrough) {
      channelOut[channelNameOut(campaign.code, 'click-through')] = {
        bind: eventName(campaign.code, 'clicked'),
        analytics: ANALYTICS_OFFERS[campaign.code].clickThrough
      };
    }
  });

  return {
    ocBannerAnalytics: {
      channelIn: channelIn,
      channelOut: channelOut,
      productNames: campaignsCode,
      offers: campaignsAnalytics
    }
  };
};


module.exports = {
  getAnalyticsOcBanner
};
