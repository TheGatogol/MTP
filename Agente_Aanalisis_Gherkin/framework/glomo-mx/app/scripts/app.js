(function(document) {
  'use strict';

  sessionStorage.setItem( 'x-api-key', window.AppConfig.globalServices.apiKeyAp );

  window.codiMovementsGlobalArray = [];

  function updateHTTPPlugin() {
    if (window.AppConfig.native) {
      window.cordovaCells = window.cordovaCells || {};
      window.cordovaCells.Http = {
        get: function(url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'get', { 'url': url, 'params': params, 'headers': headers });
        },
        post: function(url, params, headers, success, failure, multipart) {
          const requestModel = { 'url': url, 'params': params, 'headers': headers };
          if (multipart) {
            requestModel.multipart = multipart;
          }
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'post', requestModel);
        },
        put: function(url, params, headers, success, failure, multipart = {}) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'put', {
            'url': url, 'params': params, 'headers': headers, 'multipart': multipart
          });
        },
        head: function(url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'head', { 'url': url, 'params': params, 'headers': headers });
        },
        patch: function(url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'patch', { 'url': url, 'params': params, 'headers': headers });
        },
        delete: function(url, params, headers, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'delete', { 'url': url, 'params': params, 'headers': headers });
        },
        cleanAllCookies: function(success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'cleanAllCookies', {});
        },
        sslPinning: function(certificates, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'sslPinning', { 'certificates': certificates });
        },
        acceptAllCerts: function(allow, success, failure) {
          window.CellsNativePlugins.pluginManager.execute(success, failure, 'Http', 'acceptAllCerts', { 'allow': allow });
        }
      };
      window.CellsNativePlugins = window.CellsNativePlugins || {};
      window.CellsNativePlugins.Nativesettings = {
        getSetting: function(options, successCallback, errorCallback) {
          window.CellsNativePlugins.pluginManager.execute(successCallback, errorCallback, 'NativeSettings', 'opensetting', options);
        }
      };
    }
  }

  var routes = window.AppConfig.routes;

  var userInfo = (function() {
    var params = localStorage.getItem('cells-params');
    try {
      return JSON.parse(params) && JSON.parse(params).userInfo;
    } catch (e) {
      return null;
    }
  }());

  // Checked remind user
  if (!window.AppConfig.nativeBuild && userInfo && userInfo.userId) {
    routes.login = '/';
    routes.welcome = '/welcome';

    // Manage /login url
    if (window.location.href.split('#!/')[ 1 ] === 'login') {
      window.location.href = window.location.origin;
    }
  }

  var featureFlag = {
    defaultChangedCallback: function(featureFlagValue) {
      this.hidden = !featureFlagValue;
      return !!featureFlagValue;
    }
  };

  window.Polymer = {
    dom: 'shadow',
    lazyRegister: 'max',
    useNativeCSSProperties: true,
    cancelSyntheticClickEvents: false
  };

  window.CellsPolymer.start({
    avoidPolymerEventCache: true,
    mainNode: window.AppConfig.mainNode,
    featureFlag: featureFlag,
    binding: 'ui',
    initialTemplate: window.AppConfig.native ? 'loading' : 'login',
    cache: window.AppConfig.cache,
    debug: window.AppConfig.debug,
    fullProgressiveTransition: window.AppConfig.fullProgressiveTransition,
    prplLevel: window.AppConfig.prplLevel,
    preCache: window.AppConfig.preCache,
    preRender: window.AppConfig.preRender,
    componentsPath: window.AppConfig.componentsPath,
    nativeNamespace: 'NativeBridge',
    onNativeBackStepRequest: function beforeBackStep(backNavigation) {
      const srcPage = backNavigation.currentPage;
      const canContinue = !window.AppConfig.preventBackNavigationPages.includes(srcPage);
      return { continue: canContinue };
    },
    generateRequestUrl: function generateRequestUrl(page) {
      return window.AppConfig.composerEndpoint + page + '.json';
    },
    routes: routes,
    interceptor: function(navigation) {
      const { to: { page }} = navigation;
      let redirect;
      let intercept = false;
      if ((/^cashZonePaymentsMpos(Calc|Dash)$/).test(page)) {
        intercept = true;
        redirect = { page: 'cashZonePaymentsMpos', params: { viewMode: page === 'cashZonePaymentsMposCalc' ? 'calculator' : 'dashboard'}};
      }
      return { intercept, redirect };
    },
    skipNavigations: window.AppConfig.skipNavigations,
    onRender: function onrender(template) {
      updateHTTPPlugin();
      if (!template.parentNode) {
        document.getElementById('app__content').appendChild(template);
        var eventComponentsLoaded = document.createEvent('Event');
        eventComponentsLoaded.initEvent('componentsInTemplateLoaded', true, true);
        document.body.dispatchEvent(eventComponentsLoaded);
      }
    }
  });
  var proxyCustomElements = function proxyCustomElements() {
    var _customElementsDefine = window.customElements.define;

    window.customElements.define = (name, cl, conf) => {
      if (!customElements.get(name)) {
        _customElementsDefine.call(window.customElements, name, cl, conf);
      } else {
        console.warn(`${name} has been defined twice`);
      }
    };
  };

  proxyCustomElements();

  // Solved bug with zoom/scale of index.html
  document.documentElement.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if (event.scale > 1) {
      event.preventDefault();
    }
  }, false);

  /**
   * Disable zoom on IOS devices over 10 IOS So version
   */
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
  });
}(document));
