module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const literals = require('./common/_literals');

  const HUELLA_PAGEVIEW = {
    action: literals.actions.mark,
    type: literals.types.view,
    digitalData: {
      [CONSTANTS.PAGE_PAGEINFO_AREA]: literals.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'fondos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle'
    }
  };

  return {
    HUELLA_PAGEVIEW
  };
};