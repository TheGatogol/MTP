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
    pageName: 'stEnrollmentSuccess',
    pageUrl: 'soft-token/enrollment-success',
    chPrefix: 'soft_token_enrollment_success_'
  };

  const { setProperty, connectionsOut, connectionsIn } = require('./common/helpers/_utils');

  const base = require('./common/deviceAccesses/_stEnrollment')(CONFIG)(pageConfig);

  const setPropertyComponent = setProperty(base);
  const connectionsOutComponent = connectionsOut(base);
  const connectionsInComponent = connectionsIn(base);
  const confirmButtons = 'cells-confirm-buttons';
  const header = 'cells-molecule-header';
  const notification = 'glomo-notification-message';

  /****************************************************************
   *                 PAGE CONFIGURATION                           *
   ****************************************************************/
  setPropertyComponent(header).rightIcon = 'coronita:close';
  setPropertyComponent(notification).imageSrc = './images/deviceAccesses/soft-token-enroll-success.svg';
  setPropertyComponent(notification).infoTextClass = 'info-title';
  setPropertyComponent(notification).infoText = 'device-accesses-soft-token-enrollment-success-info-text';
  setPropertyComponent(notification).moreInfoText = 'device-accesses-soft-token-enrollment-success-more-info-text';

  /****************************************************************
   *                 USER INTERACTIONS CONNECTIONS                *
   ****************************************************************/
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_share_transition_flags = {
    bind: 'getTransitionFlags'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_redirect_to_st_enrollment = {
    bind: 'isTokenTransitionActive'
  };
  connectionsOutComponent(header).st_enrollment_success_evalute_log_out = {
    bind: 'click-right-button'
  };
  connectionsOutComponent(confirmButtons).st_enrollment_success_evalute_log_out = {
    bind: 'cells-confirm-buttons-click-primary'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_success_evalute_log_out = {
    bind: 'evaluateFlagsToLogout'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_landing_page_manager_next_flow = {
    bind: 'continue-to-next-landing'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_logout_sesion_expiration = {
    bind: 'st-logout-error'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').__bridge_cancelled_back_navigation = {
    bind: 'evaluateFlagsToLogout'
  };

  return base;
};
