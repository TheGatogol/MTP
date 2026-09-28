const utils = require('../helpers/_utils');
/**
 * Generate common initial name of channel
 *
 * @param {string} pluginName
 * @returns {string}
 */
const createPreChannelName = (pluginName) => {
  return 'global_nativeconnector_' + utils.snakeCase(pluginName);
};
/**
 * Creates binding for methods and events for plugin automatically
 *
 * @param {string} pluginName
 * @param {Array<string>} methods
 * @param {boolean} isEventNameContainsPluginName
 * @returns {object}
 */
const createPluginConnections = (pluginName, methods, isEventNameContainsPluginName) => {
  const preChannelName = createPreChannelName(pluginName);
  return methods.reduce((prev, item) => {
    const channelMethod = utils.snakeCase(item);
    const bindEvent = utils.kebabCase(item) + (isEventNameContainsPluginName ? '-' + utils.kebabCase(pluginName) : '');
    return {
      in: {
        ...prev.in,
        [preChannelName + '_' + channelMethod]: {
          bind: item
        }
      },
      out: {
        ...prev.out,
        [preChannelName + '_' + channelMethod + '_success']: {
          bind: bindEvent + '-success'
        },
        [preChannelName + '_' + channelMethod + '_error']: {
          bind: bindEvent + '-error'
        }
      }
    };
  }, { in: {}, out: {} });
};
/**
 * Receives component an adds connection binding for plugin
 *
 * @param {string} pluginName
 * @param {object} component
 * @param {object} methods
 * @param {object} connectionExceptions
 * @param {boolean} isSpherica
 */
const addPluginConnections = (pluginName, component, methods = {}, connectionExceptions = {}, isSpherica = false) => {
  const preChannelName = createPreChannelName(pluginName);
  let connIn = component.properties.cellsConnections.in;
  let connOut = component.properties.cellsConnections.out;
  if (!connOut) {
    component.properties.cellsConnections.out = {};
    connOut = component.properties.cellsConnections.out;
  }
  if (!connIn) {
    component.properties.cellsConnections.in = {};
    connIn = component.properties.cellsConnections.in;
  }
  methods.forEach(item => {
    const pluginMethod = item;
    const componentMethod = (connectionExceptions[item] || {}).method || item;
    const channelMethod = utils.snakeCase(pluginMethod);
    const eventName = (connectionExceptions[item] || {}).event || component.tag + `-${isSpherica ? utils.kebabCase(pluginMethod) + '-call' : 'call-' + utils.kebabCase(pluginMethod)}`;
    connIn[preChannelName + '_' + channelMethod + '_success'] = {
      bind: componentMethod + 'Resolver'
    };
    connIn[preChannelName + '_' + channelMethod + '_error'] = {
      bind: componentMethod + 'ResolverError'
    };
    connOut[preChannelName + '_' + channelMethod] = {
      bind: eventName
    };
  });
};
module.exports = {
  createPluginConnections,
  addPluginConnections
};
