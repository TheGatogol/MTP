const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

module.exports = () => {

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.vehicle
  };

  const CONFIG = {
    'SuccessVehicle': {
      level4: 'reporte exitoso',
      actions: {
        call: 'llama a la linea de asistencia',
        policy: 'ver poliza'
      }
    },
    'DetectedErrors': {
      level4: 'reporte en curso',
      actions: {
        call: LITERALS.tag.call
      }
    },
    'GlasscallForHelp': {
      level4: 'error de comunicacion',
      actions: {
        call: 'llamar'
      }
    },
    'GlassalreadyRequested': {
      level4: 'error al continuar con el reporte',
      actions: {
        call: 'llamar'
      }
    },
    'SHOCK': {
      actions: {
        call: 'llama a la linea de asistencia',
        policy: 'ver poliza'
      }
    }
  };

  const FEATURE_FLAG_VEHICLE_CRASH = {
    'key': 'glomo.analytics.emergencyReports.vehicle.crash',
    'defaultValue': true
  };

  const ONCLICK_DYNAMIC_LINK = {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: {
      bind: 'dynamicLink'
    }
  };

  const USER_SELECTION = {
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'userSelection'
    }
  };

  const HUELLA_LOCATION = UTILS.getAdvancedFootprintWithLevel4('choque', 'ubicacion', {
    ...PAGE_COMMON
  });

  const HUELLA_CHANGE_LOCATION = UTILS.getAdvancedFootprintWithLevel4('choque', 'cambiar ubicacion', {
    ...PAGE_COMMON
  });

  const HUELLA_SERVICES = UTILS.getAdvancedFootprintWithLevel4('choque', 'servicios', {
    ...PAGE_COMMON
  });

  const HUELLA_RESUME = UTILS.getAdvancedFootprintWithLevel4('choque', 'resumen', {
    ...PAGE_COMMON,
    ...USER_SELECTION
  });

  const HUELLA_SUCCESSFUL_REPORT = UTILS.getAdvancedFootprintWithLevel4('choque', 'reporte exitoso', {
    ...PAGE_COMMON,
    ...USER_SELECTION
  });

  const LINK_SUCCESSFUL_REPORT = UTILS.getAdvancedExternalLinkWithLevel4('choque', 'reporte exitoso', {
    ...PAGE_COMMON,
    ...ONCLICK_DYNAMIC_LINK
  });

  [
    HUELLA_LOCATION,
    HUELLA_CHANGE_LOCATION,
    HUELLA_SERVICES,
    HUELLA_RESUME,
    HUELLA_SUCCESSFUL_REPORT,
    LINK_SUCCESSFUL_REPORT
  ].forEach(item => UTILS.addFeatureFlag(item, FEATURE_FLAG_VEHICLE_CRASH));


  return {
    CONFIG,
    HUELLA_LOCATION,
    HUELLA_CHANGE_LOCATION,
    HUELLA_SERVICES,
    HUELLA_RESUME,
    HUELLA_SUCCESSFUL_REPORT,
    LINK_SUCCESSFUL_REPORT
  };
};
