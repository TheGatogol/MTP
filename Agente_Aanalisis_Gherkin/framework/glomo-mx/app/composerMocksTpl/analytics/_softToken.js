/* eslint-disable no-shadow */
const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAdvancedFootprint, addFeatureFlag } = require('./common/_utils');

const generalCommons = {
  [constants.USER_USERSTATE]: literals.commons.noLogado,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
};

const getLevels = (context = '') => {
  const value = {
    ACTIVATION: literals.commons.activation,
    ACTIVATION_ERROR: `error ${literals.errors.tokenActivationNotPerformed}`,
    ACTIVATION_FAILURE: literals.errors.tokenActivationNotPerformed,
    ACTIVATION_SUCCESS: literals.ocCashZone.activationRealized,
    SUBSTITUTION_ERROR: literals.errors.tokenSubstitutionNotPerformed
  };

  return {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.tokenMovil,
    [constants.PAGE_PAGEINFO_LEVEL2]: value[context] || ''
  };
};

const getErrorPage = (context = '') => {
  const value = {
    ACTIVATION_ERROR: `error ${literals.errors.tokenActivationNotPerformed}`,
    SUBSTITUTION_ERROR: literals.errors.tokenSubstitutionNotPerformed
  };

  return {
    [constants.PAGE_PAGEINFO_ERRORPAGE]: value[context] || ''
  };
};

const analyticsTokenEnrollment = {
  key: 'glomo.analytics.token.enrollment',
  defaultValue: true
};

const softToken = (action = '') => {
  const footPrint = getAdvancedFootprint({
    ...getErrorPage(action),
    ...getLevels(action),
    ...generalCommons
  });

  addFeatureFlag(footPrint, analyticsTokenEnrollment);

  return footPrint;
};

module.exports = () => {
  return {
    softToken
  };
};