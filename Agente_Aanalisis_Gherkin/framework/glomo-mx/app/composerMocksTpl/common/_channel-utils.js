/* eslint-disable no-shadow */
'use strict';

const __addChannel = way => (component, channelName, bind, forwardToNative = false) => {
  const connection = typeof bind === 'object' ? bind : forwardToNative ? { bind, 'forward-to-native': true} : { bind };
  (component.properties.cellsConnections[way] || {})[channelName] = connection;
};
const _addChannelIn = __addChannel('in');
const _addChannelOut = __addChannel('out');

const _getComponentId = component => {
  return component.connId || component.tag;
};

const _getComponentsInObject = BASE => {
  let components = { [BASE.template.tag]: BASE.template };

  BASE.components.forEach(component => {
    let tag = _getComponentId(component);
    components[tag] = component;
  });
  return components;
};

const _writeError = (tag, page) => {
  console.error(`Add channel error: [${tag}] not found in [${page}] page`);
};

module.exports = BASE => {
  let components = _getComponentsInObject(BASE);

  const findComponent = tag => components[tag];

  const addChannel = (channelName, connectionsOut, connectionsIn, forwardToNative = false) => {
    Object.keys(connectionsOut).forEach(componentTag => {
      let component = findComponent(componentTag);
      if (component) {
        _addChannelOut(component, channelName, connectionsOut[componentTag], forwardToNative);
      } else {
        _writeError(componentTag, BASE.currentPage.url);
      }
    });
    Object.keys(connectionsIn).forEach(componentTag => {
      let component = findComponent(componentTag);
      if (component) {
        _addChannelIn(component, channelName, connectionsIn[componentTag]);
      } else {
        _writeError(componentTag, BASE.currentPage.url);
      }
    });
  };

  const addNavigation = (channelName, componentTag, event, backStep, link = null) => {
    let component = findComponent(componentTag);

    if (component) {
      let connection = backStep ? {bind: event, backStep} : {bind: event, link};
      component.properties.cellsConnections.out[channelName] = connection;
    } else {
      _writeError(componentTag, BASE.currentPage.url);
    }
  };

  const addAnalytics = (channelName, componentTag, analyticsData) => {
    const component = findComponent(componentTag);

    if (component) {
      component.properties.cellsConnections.out[channelName].analytics = analyticsData;
    } else {
      _writeError(componentTag, BASE.currentPage.url);
    }
  };

  const removeConnIds = () => {
    Object.keys(components).forEach(component => {
      delete component.connId;
    });
  };

  return {
    findComponent,
    addChannel,
    addNavigation,
    removeConnIds,
    addAnalytics
  };
};
