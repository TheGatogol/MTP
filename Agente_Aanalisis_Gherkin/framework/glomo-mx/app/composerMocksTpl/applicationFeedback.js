'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const base = require('./feedback')(CONFIG, 'applicationFeedback', 'app-feedback');
  const get = utils.get(base);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'applicationFeedback');
  const isNativeIos = CONFIG.nativeIos || false;
  const connectionsParams = utils.connectionsParams(base);
  const setProperty = utils.setProperty(base);
  const iframeManager = get('glomo-opinator-iframe-manager-mx');
  const isSpherica = sphericaPageUtils.isSpherica();
  const moleculeHeader = isSpherica ? get('cells-molecule-header-spherica') : get('cells-molecule-header');
  const setTemplateProperty = utils.setTemplateProperty(base);

  let appFeedbackIframeManagerconnectionsParams = connectionsParams('glomo-opinator-iframe-manager-mx');
  let appFeedbackNavigationHandlerSetProperty = setProperty('glomo-navigation-handler');

  if (isSpherica && moleculeHeader?.properties) {
    moleculeHeader.properties.variant = 'primary-alt';
    moleculeHeader.properties.leftIconText = 'cells-molecule-header-spherica-back';
    setTemplateProperty.extraHeaderClass = 'bg-light-grey';
    setTemplateProperty.className = isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey';
  } else {
    setTemplateProperty.extraHeaderClass = 'dark-blue-bg';
    if (moleculeHeader?.properties) {
      moleculeHeader.properties.className = 'header--dark';
    }
  }
  setTemplateProperty.animationType = 'horizontal';
  iframeManager.properties.src = CONFIG.feedback.urls.global;
  iframeManager.properties.defaultSrc = CONFIG.feedback.urls.global;
  appFeedbackNavigationHandlerSetProperty.backAction = 'navigate-to-previous-page';

  delete appFeedbackIframeManagerconnectionsParams.src;
  delete appFeedbackIframeManagerconnectionsParams.continue;
  delete appFeedbackIframeManagerconnectionsParams.feedbackOperation;
  return base;
};
