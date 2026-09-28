/* eslint-disable new-cap, no-shadow */
const SphericaUtils = require('@glomo-web-components/glomo-spherica-utils');

module.exports = (config, page) => {
  const sphericaUtils = SphericaUtils(config, page, `${__dirname}/../..`);
  return sphericaUtils;
};
