'use strict';

const crossComponents = require('./_cross-components');

const addOutStorageChannels = (components, keys, CONFIG, operativeId) => {
  const operative = operativeId ? `_${operativeId}_` : '_';
  let pushStorageComponent = false;
  const componentName = CONFIG.nativeShell ? 'cells-mobile-local-storage' : 'cells-local-storage';
  const storageMethods = ['set', 'get', 'remove'];
  let storageComponent = components.find(component => component.tag === componentName);

  if (!storageComponent) {
    pushStorageComponent = true;
    storageComponent = crossComponents.glomoStorageManager(CONFIG);
  }

  storageMethods.forEach((method) => {
    keys.forEach((key) => {
      ['success', 'error'].forEach(result => {
        storageComponent.properties.cellsConnections.out[`global_storage${operative}${method}_${key}_${result}`] = {
          bind: `local-storage-${method}-${key}-${result}`
        };
      });
    });
  });

  if (pushStorageComponent) {
    components.push(storageComponent);
  }

};

module.exports = {
  addOutStorageChannels
};