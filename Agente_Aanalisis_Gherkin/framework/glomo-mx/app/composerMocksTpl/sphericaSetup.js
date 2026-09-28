module.exports = config => {
  const PAGE_NAME = 'sphericaSetup';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  return sphericaPageUtils.setupSpherica();
};
