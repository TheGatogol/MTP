'use strict';
/**
 * DEVICE ACCESSES FLOW: SOFT TOKEN ENROLLMENT
 * EXTENDS: _stEnrollment.js
 * FLOW INITIAL PAGE: FALSE
 * COMES FROM: stEnrollment.js
 * GOES TO: If enroll succeeds, a navigation backStep is fired.
 * Page initialazing soft token enrollment.
 */
module.exports = CONFIG => {
  const pageConfig = {
    pageName: 'stEnrollmentError',
    pageUrl: 'soft-token/enrollment-error',
    chPrefix: 'soft_token_enrollment_error_'
  };

  const { setProperty, connectionsOut } = require('./common/helpers/_utils');

  const base = require('./common/deviceAccesses/_stEnrollment')(CONFIG)(pageConfig);

  const setPropertyComponent = setProperty(base);
  const connectionsOutComponent = connectionsOut(base);
  const confirmButtons = 'cells-confirm-buttons';
  const header = 'cells-molecule-header';
  const notification = 'glomo-notification-message';

  /****************************************************************
   *                 PAGE CONFIGURATION                           *
   ****************************************************************/
  setPropertyComponent(header).rightIcon = 'coronita:close';
  setPropertyComponent(notification).imageSrc = './images/deviceAccesses/soft-token-enroll-errror.svg';
  setPropertyComponent(notification).infoTextClass = 'info-title';
  setPropertyComponent(notification).infoText = 'device-accesses-soft-token-enrollment-error-info-text';
  setPropertyComponent(notification).moreInfoText = 'device-accesses-soft-token-enrollment-error-more-info-text';

  /****************************************************************
   *                 USER INTERACTIONS CONNECTIONS                *
   ****************************************************************/
  if (CONFIG.environment === 'pro') {
    connectionsOutComponent(header).global_logout_sesion_expiration = {
      bind: 'click-right-button'
    };
    connectionsOutComponent(confirmButtons).global_logout_sesion_expiration = {
      bind: 'cells-confirm-buttons-click-primary'
    };
  } else {
    connectionsOutComponent(header).global_landing_page_manager_next_flow = {
      bind: 'click-right-button'
    };
    connectionsOutComponent(confirmButtons).global_landing_page_manager_next_flow = {
      bind: 'cells-confirm-buttons-click-primary'
    };
  }

  return base;
};