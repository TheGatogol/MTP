/* global Set, Map */
import { BGADP_REGISTRY, BGADP_GROUPS, ROUTE_GROUP_MAP } from './bgadp-route-map.js';

const _loadedKeys = new Set();
const _pendingLoads = new Map();
const _preloadedCriticalKeys = [
  'NPMBGADPGrantingTicketsV0',
  'NPMBGADPRisksV1',
  'NPMBGADPCatalogsGetV0',
  'NPMBGADPCustomersV0',
  'NPMBGADPCustomersV1',
  'NPMBGADPCustomerLoginsIndicatorsGetV0',
  'NPMBGADPCustomerLoginsLoginsGetV1',
  'NPMBGADPSecurityV1',
  'NPMBGADPMxSecurityV0',
  'NPMBGADPSessionV1',
  'NPMBGADPOperationRegistriesV0',
  'NPMBGADPLoyaltyV0',
  'NPMBGADPLoyaltyV1',
  'NPMBGADPPromotionsV1',
  'NPMBGADPCampaignsV1',
];

const _isDebug = () =>
  typeof window !== 'undefined' &&
  window.AppConfig &&
  window.AppConfig.debug === true;

function _loadOne(key) {
  if (_loadedKeys.has(key)) {
    return Promise.resolve();
  }

  if (_pendingLoads.has(key)) {
    return _pendingLoads.get(key);
  }

  const entry = BGADP_REGISTRY[key];

  if (!entry) {
    return Promise.resolve();
  }

  const promise = entry
    .importFn()
    .then((mod) => {
      if (entry.assign) {
        entry.assign(mod);
      }
      _loadedKeys.add(key);
      _pendingLoads.delete(key);
    })
    .catch((err) => {
      _pendingLoads.delete(key);
      throw err;
    });

  _pendingLoads.set(key, promise);
  return promise;
}

function _resolveKeys(routePath) {
  const keys = new Set();

  for (const entry of ROUTE_GROUP_MAP) {
    if (entry.patterns.some((pattern) => pattern.test(routePath))) {
      for (const groupName of entry.groups) {
        const groupKeys = BGADP_GROUPS[groupName];

        if (!groupKeys) {
          continue;
        }

        for (const k of groupKeys) {
          keys.add(k);
        }
      }
    }
  }

  return [ ...keys ];
}

function _normalizeRoutePath(routePath) {
  if (!routePath) {
    return routePath;
  }

  let path = String(routePath).trim();

  const hashBangIndex = path.indexOf('#!/');
  if (hashBangIndex >= 0) {
    path = path.slice(hashBangIndex + 2);
  } else if (path.startsWith('#!')) {
    path = path.slice(2);
  } else if (path.startsWith('#')) {
    path = path.slice(1);
  }

  path = path.split('?')[0].trim();

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  return path;
}

export async function loadBgadpsForRoute(routePath) {
  const normalizedRoutePath = _normalizeRoutePath(routePath);

  if (!normalizedRoutePath) {
    return;
  }

  const pending = _resolveKeys(normalizedRoutePath).filter((k) => !_loadedKeys.has(k));

  if (pending.length === 0) {
    return;
  }

  await Promise.all(pending.map(_loadOne));
}

function _getRouteFromHash() {
  const hash = window.location.hash || '';
  const raw = hash.startsWith('#!') ? hash.slice(2) : hash.slice(1);
  return raw.startsWith('/') ? raw : `/${raw}`;
}

export function initBgadpLoader() {
  for (const key of _preloadedCriticalKeys) {
    if (typeof window !== 'undefined' && window[key]) {
      _loadedKeys.add(key);
    }
  }

  const _load = (path) => loadBgadpsForRoute(path).catch(console.error);

  const initialLoad = _load(_getRouteFromHash());

  window.__loadBgadpsForRoute = loadBgadpsForRoute;

  window.addEventListener('hashchange', () => _load(_getRouteFromHash()));

  // cells-navigate-request: { detail: { to: { page, path } } } — se dispara ANTES del render
  document.addEventListener('cells-navigate-request', (evt) => {
    const to = evt && evt.detail && evt.detail.to;
    const route = to && (to.path || to.page);
    if (route) {
      _load(route);
    }
  });

  // cells-navigate-success como red de seguridad (idempotente gracias a la caché)
  document.addEventListener('cells-navigate-success', (evt) => {
    const to = evt && evt.detail && evt.detail.to;
    const route = to && (to.path || to.page);
    if (route) {
      _load(route);
    }
  });

  return initialLoad;
}

export function isBgadpLoaded(key) {
  return _loadedKeys.has(key);
}

export function getLoadedBgadpKeys() {
  return new Set(_loadedKeys);
}