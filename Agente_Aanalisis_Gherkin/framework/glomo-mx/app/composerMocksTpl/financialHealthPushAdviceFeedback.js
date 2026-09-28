/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const FEEDBACK = 'financialHealthPushAdviceFeedback';
  const base = require('./feedback')(CONFIG, FEEDBACK, 'financial-health-push-advice-feedback');
  const get = utils.get(base);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsIn(base);
  const connectionsParams = utils.connectionsParams(base);
  const setTemplateProperty = utils.setTemplateProperty(base);
  const iframeManager = get('glomo-opinator-iframe-manager-mx');
  const setProperty = utils.setProperty(base);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'financialHealthPushAdviceFeedback');
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner =  isSpherica ? get('cells-spinner-veil-spherica') : get('cells-spinner-veil');
  const moleculeHeader = isSpherica ? get('cells-molecule-header-spherica') : get('cells-molecule-header');

  if (spinner?.properties) {
    spinner.properties.open = true;
  }

  let appFeedbackIframeManagerConnectionsIn = connectionsIn('glomo-opinator-iframe-manager-mx');
  let appFeedbackIframeManagerConnectionsOut = connectionsOut('glomo-opinator-iframe-manager-mx');
  let appFeedbackIframeManagerconnectionsParams = connectionsParams('glomo-opinator-iframe-manager-mx');
  let appFeedbackNavigationHandlerSetProperty = setProperty('glomo-navigation-handler');

  appFeedbackNavigationHandlerSetProperty.backAction = 'navigate-to-previous-page';
  if (isSpherica) {
    if (moleculeHeader?.properties) {
      moleculeHeader.properties.variant = 'primary-alt';
      moleculeHeader.properties.leftIconText = 'cells-molecule-header-spherica-back';
    }
    setTemplateProperty.extraHeaderClass = 'bg-light-grey';
    setTemplateProperty.className = isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey';
  } else {
    setTemplateProperty.animationType = 'horizontal';
    setTemplateProperty.extraHeaderClass = 'dark-blue-bg';
    if (moleculeHeader?.properties) {
      moleculeHeader.properties.className = 'header--dark about-text';
    }
  }

  if (moleculeHeader?.properties?.cellsConnections) {
    delete moleculeHeader.properties.cellsConnections.in;
  }
  iframeManager.properties.maxTryFeedbackError = 0;
  iframeManager.properties.src = 'https://www.opinator.com/opi/BBVA_GM_ApartadosNomina';
  iframeManager.properties.defaultSrc = 'https://www.opinator.com/opi/BBVA_GM_ApartadosNomina';

  appFeedbackIframeManagerConnectionsIn[FEEDBACK + '_init_page'] = {
    bind: 'init'
  };

  delete appFeedbackIframeManagerConnectionsOut[FEEDBACK + '_header_left_icon'];
  delete appFeedbackIframeManagerConnectionsOut[FEEDBACK + '_header_right_icon'];
  delete appFeedbackIframeManagerconnectionsParams.src;
  delete appFeedbackIframeManagerconnectionsParams.continue;
  delete appFeedbackIframeManagerconnectionsParams.feedbackOperation;

  return base;
};
