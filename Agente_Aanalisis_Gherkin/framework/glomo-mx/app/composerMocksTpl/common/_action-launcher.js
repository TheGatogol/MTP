'use strict';

const crossComponents = require('./_cross-components');

const addActionLauncherChannels = (components, actions = [], CONFIG, operativeId) => {
  let pushActionLauncherComponent = false;
  const componentName = 'cells-mobile-action-launcher';
  let actionLauncherComponent = components.find(component => component.tag === componentName);

  if (!actionLauncherComponent) {
    pushActionLauncherComponent = true;
    actionLauncherComponent = crossComponents.mobileActionLauncher();
  }

  actions.forEach((action) => {
    const actionChannel = action.replace('-', '_');
    ['success', 'error'].forEach(result => {
      actionLauncherComponent.properties.cellsConnections.out[`${operativeId}_action_launcher_${actionChannel}_${result}`] = {
        bind: `${result}-${action}`
      };
    });
  });

  if (pushActionLauncherComponent) {
    components.push(actionLauncherComponent);
  }

};

module.exports = {
  addActionLauncherChannels
};
