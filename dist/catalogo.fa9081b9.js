// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6Z4k7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 8123;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "84c9d45a3a67a2f0c2722b9dfa9081b9";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5S0nk":[function(require,module,exports) {
"use strict";
var _search = require("./search");
var _langSelect = require("./langSelect");
var _responsiveMenu = require("./responsiveMenu");
var _stickyHeader = require("./stickyHeader");
var _scrollUp = require("./scrollUp");
var _wacagCorrections = require("./wacagCorrections");
var _tabs = require("./tabs");
var _slimSelect = _interopRequireDefault(require("slim-select"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
$(document).ready(function () {
  var r01gLang = 'es';
  (0, _search.search)();
  (0, _langSelect.langSelect)();
  (0, _responsiveMenu.responsiveMenu)();
  (0, _stickyHeader.stickyHeader)();
  (0, _scrollUp.scrollUp)();
  (0, _wacagCorrections.wacagCorrections)();
  (0, _tabs.tabs)();
});
new _slimSelect.default({
  select: '#multiple-topics',
  placeholder: 'Selecciona tema',
  deselectLabel: '<i class="fas fa-times"></i>',
  searchPlaceholder: 'Buscar tema'
});
new _slimSelect.default({
  select: '#multiple-formats',
  placeholder: 'Selecciona formato',
  deselectLabel: '<i class="fas fa-times"></i>',
  searchPlaceholder: 'Buscar formato'
});
$(".col-3 input").val("");
$(".input-effect input").focusout(function () {
  if ($(this).val() != "") {
    $(this).addClass("has-content");
  } else {
    $(this).removeClass("has-content");
  }
});

},{"./search":"2LLkB","./langSelect":"5iHAz","./responsiveMenu":"5klZN","./stickyHeader":"4SboY","./scrollUp":"5pCZK","./wacagCorrections":"3vegQ","./tabs":"2vYjY","slim-select":"4gIx0"}],"2LLkB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitBilaketa_mugik = exports.submitBilaketa = exports.bottonUp = exports.search = void 0;
// *********** GENERAL SEARCH *************//
var search = function search() {
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function () {
    if (isOpen == false) {
      searchBox.addClass('searchbox-open');
      inputBox.focus();
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function () {
    return false;
  });
  searchBox.mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $('.searchbox-icon').css('display', 'block');
      submitIcon.click();
    }
  });
};
exports.search = search;
var bottonUp = function bottonUp() {
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
    $('.searchbox-icon').css('display', 'none');
  } else {
    $('.searchbox-input').val('');
    $('.searchbox-icon').css('display', 'block');
  }
};
exports.bottonUp = bottonUp;
var submitBilaketa = function submitBilaketa(idiom, egitura, orriaBilaketa) {
  var valBilaketa = $('input[name=fullTextBilaketa]').val();
  var urlBilaketa = orriaBilaketa + idiom + '?r01kQry=cA:' + egitura + ';mA:documentLanguage.EQ.' + idiom + ',fullText.LIKE.' + valBilaketa + ';pp:r01PageSize.10;p:Inter,Inter_portal&fullText=' + valBilaketa;
  location.href = urlBilaketa;
};
exports.submitBilaketa = submitBilaketa;
var submitBilaketa_mugik = function submitBilaketa_mugik(idiom2, egitura2, orriaBilaketa2) {
  var valBilaketa_mugik = $('input[name=fullTextBilaketa_mugik]').val();
  var urlBilaketa_mugik = orriaBilaketa2 + idiom2 + '?r01kQry=cA:' + egitura2 + ';mA:documentLanguage.EQ.' + idiom2 + ',fullText.LIKE.' + valBilaketa_mugik + ';pp:r01PageSize.10;p:Inter,Inter_portal&fullText=' + valBilaketa_mugik;
  location.href = urlBilaketa_mugik;
};
exports.submitBilaketa_mugik = submitBilaketa_mugik;

},{}],"5iHAz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.langSelect = void 0;
// ***************************LANGUAGE SELECTION**********************************************//
var langSelect = function langSelect() {
  // Disable down language selection area with styles
  $('.r01gLangSelector').removeAttr('id');
  $(".r01gLangSelector").css("display", "none");
  var hizkuntza_ul = $(".r01gLangSelector");
  hizkuntza_ul.clone().css("display", "block").appendTo(".goib_hizkuntza");
  hizkuntza_ul.clone().css("display", "inline-block").appendTo(".language");
  // If it is a search
  if (window.location.href.indexOf("r01kQry") > -1) {
    $('.goib_hizkuntza a.r01gLangUnSelected').click(function (event) {
      var langtarget = $(this).attr('lang');
      var hizkuntzaURL = $(this).attr("href");
      var bilaketaurl = location.search.replace('documentLanguage.EQ.' + r01gLang, 'documentLanguage.EQ.' + langtarget).replace('r01kLang=' + r01gLang, 'r01kLang=' + langtarget);
      $(this).attr("href", hizkuntzaURL + bilaketaurl);
    });
  }
};
exports.langSelect = langSelect;

},{}],"5klZN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiveMenu = void 0;
// ***************************RESPONSIVE MENU**********************************************//
var responsiveMenu = function responsiveMenu() {
  // Remove no-js class
  $('html').removeClass('no-js');
  $('#toggleMenu').on('click', function () {
    if ($(this).hasClass('js-open')) {
      $('#nav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
      $(this).removeClass('js-open');
      $(this).attr('aria-expanded', false);
      $('#geoeuskadiNav').removeClass('js-expandElement');
      $('#nav').removeClass('js-position');
    } else {
      $('#nav > ul > li:not(#toggleMenu)').addClass('js-showElement');
      $(this).addClass('js-open');
      $(this).attr('aria-expanded', true);
      $('#geoeuskadiNav').addClass('js-expandElement');
      $('#nav').addClass('js-position');
    }
    return false;
  });
  // sub menu
  // ------------------------
  // When interacting with a li that has a sub menu
  $('li:has("ul")').on('mouseover keyup click mouseleave', function (e) {
    console.log("test");
    // If either -
    // tabbing into the li that has a sub menu
    // hovering over the li that has a sub menu
    if (e.keyCode === 9 | e.type === 'mouseover') {
      // Show sub menu
      $(this).children('ul').removeClass('js-hideElement');
      $(this).children('ul').addClass('js-showElement');
    }
    // If mouse leaves li that has sub menu
    if (e.type === 'mouseleave') {
      // hide sub menu
      $(this).children('ul').removeClass('js-showElement');
      $(this).children('ul').addClass('js-hideElement');
    }
    // If clicking on li that has a sub menu
    if (e.type === 'click') {
      // If sub menu is already open
      if ($(this).children('a').hasClass('js-openSubMenu')) {
        // remove Open class
        $(this).children('a').removeClass('js-openSubMenu');
        // Hide sub menu
        $(this).children('ul').removeClass('js-showElement');
        $(this).children('ul').addClass('js-hideElement');
      } else {
        // add Open class
        $(this).children('a').addClass('js-openSubMenu');
        // Show sub menu
        $(this).children('ul').removeClass('js-hideElement');
        $(this).children('ul').addClass('js-showElement');
      }
    }
  });
  // Tabbing through Levels of sub menu
  // ------------------------
  // If key is pressed while on the last link in a sub menu
  $('li > ul > li:last-child > a').on('keydown', function (e) {
    // If tabbing out of the last link in a sub menu AND not tabbing into another sub menu
    if (e.keyCode == 9 && $(this).parent('li').children('ul').length == 0) {
      // Close this sub menu
      $(this).parent('li').parent('ul').removeClass('js-showElement');
      $(this).parent('li').parent('ul').addClass('js-hideElement');
      // If tabbing out of a third level sub menu and there are no other links in the parent (level 2) sub menu
      if ($(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0 && $(this).parent('li').parent('ul').parent('li').is(':last-child')) {
        // Close the parent sub menu (level 2) as well
        $(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-showElement');
        $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hideElement');
      }
    }
  });
};
exports.responsiveMenu = responsiveMenu;

},{}],"4SboY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stickyHeader = void 0;
var _core = require("@popperjs/core");
// ***************************STICKY HEADER WHEN SCROLL**********************************************//
var stickyHeader = function stickyHeader() {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };
  // Get the header
  var header = document.getElementById("geoeuskadiNav");
  var main = document.getElementById("main-container");
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      main.classList.add("container-fluid-img-position");
    } else {
      header.classList.remove("sticky");
      main.classList.remove("container-fluid-img-position");
    }
  }
};
exports.stickyHeader = stickyHeader;

},{"@popperjs/core":"3b7Fs"}],"3b7Fs":[function(require,module,exports) {
/**
* @popperjs/core v2.9.2 - MIT License
*/
"use strict";
Object.defineProperty(exports, '__esModule', {
  value: true
});
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return (/auto|scroll|overlay|hidden/).test(overflow + overflowY + overflowX);
}
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (// DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
}
// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;
  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
// modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead';
// pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain';
// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  });
  // On visiting object, check for its dependencies and visit them recursively
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers);
  // order based on phase
  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }
          break;
        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }
        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }
          break;
        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }
          break;
        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }
          break;
        case 'options':
        case 'data':
          break;
        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }
      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {});
  // IE11 does not support Object.values
  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent
    if (!(/^((?!chrome|android).)*safari/i).test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
      // then fallback to custom implementation with Shadow DOM support
} else // then fallback to custom implementation with Shadow DOM support
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      // $FlowFixMe[prop-missing]: need a better way to handle this...
      next = next.parentNode || next.host;
    } while (next);
  }
  // Give up, the result is false
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
}
// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getVariation(placement) {
  return placement.split('-')[1];
}
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
function computeOffsets(_ref) {
  var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  // Offsets can be applied only to the popper element
  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        // Orders the modifiers based on their dependencies and `phase`
        // properties
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        // Strip out disabled modifiers
        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason
        if ("development" !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }
          var _getComputedStyle = getComputedStyle(popper), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
        // Don't proceed if `reference` or `popper` are not valid elements
        // anymore
        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        // Store the reference and popper rects to be read by modifiers
        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        };
        // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect
        state.reset = false;
        state.placement = state.options.placement;
        // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`
        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    });
    // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.
    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}
// eslint-disable-next-line import/no-unused-modules
var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
};
// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    }
    // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
    offsetParent = offsetParent;
    if (placement === top) {
      sideY = bottom;
      // $FlowFixMe[prop-missing]
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left) {
      sideX = right;
      // $FlowFixMe[prop-missing]
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if ("development" !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}
// eslint-disable-next-line import/no-unused-modules
var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || ({});
    var attributes = state.attributes[name] || ({});
    var element = state.elements[name];
    // arrow is optional + virtual elements
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || ({});
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      // Set all values to an empty string to unset them
      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {});
      // arrow is optional + virtual elements
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
// eslint-disable-next-line import/no-unused-modules
var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};
function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  }
  // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
// eslint-disable-next-line import/no-unused-modules
var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds
  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max);
  // Prevents breaking syntax highlighting...
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  }
  // CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if ("development" !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
// eslint-disable-next-line import/no-unused-modules
var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}
// eslint-disable-next-line import/no-unused-modules
var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
});
// eslint-disable-next-line import/no-unused-modules
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
});
// eslint-disable-next-line import/no-unused-modules
exports.applyStyles = applyStyles$1;
exports.arrow = arrow$1;
exports.computeStyles = computeStyles$1;
exports.createPopper = createPopper;
exports.createPopperLite = createPopper$1;
exports.defaultModifiers = defaultModifiers;
exports.detectOverflow = detectOverflow;
exports.eventListeners = eventListeners;
exports.flip = flip$1;
exports.hide = hide$1;
exports.offset = offset$1;
exports.popperGenerator = popperGenerator;
exports.popperOffsets = popperOffsets$1;
exports.preventOverflow = preventOverflow$1;

},{}],"5pCZK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollUp = void 0;
// ***************************SCROLL UP FOR MOBILES**********************************************//
var scrollUp = function scrollUp() {
  $('.scrollup').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
};
exports.scrollUp = scrollUp;

},{}],"3vegQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wacagCorrections = void 0;
// ***************************WACAG CORRECTIONS**********************************************//
var wacagCorrections = function wacagCorrections() {
  // WCAG-Contentlisten estekak mozten
  $('.r01gClsContentList .r01gCLItemDocLink a').each(function () {
    var maxchars = 150;
    var puntuak = '...';
    if ($(this).text().length > maxchars - puntuak.length) {
      $(this).text($(this).text().substr(0, maxchars - puntuak.length) + puntuak);
    }
  });
  // WCAG-Bilaketan estekak mozten
  $('.r01SourceSearchResults .r01srItemDocLink a').each(function () {
    var maxchars = 150;
    var puntuak = '...';
    if ($(this).text().length > maxchars - puntuak.length) {
      $(this).text($(this).text().substr(0, maxchars - puntuak.length) + puntuak);
    }
  });
};
exports.wacagCorrections = wacagCorrections;

},{}],"2vYjY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabs = void 0;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// ***************************TABS FOR CONTENTS**********************************************//
var tabs = function tabs() {
  var TabController = /*#__PURE__*/(function () {
    function TabController(container) {
      _classCallCheck(this, TabController);
      this.container = document.querySelector(container);
      this.tablist = this.container.querySelector('[role=tablist]');
      this.tabs = this.container.querySelectorAll('[role=tab]');
      this.tabpanels = this.container.querySelectorAll('[role=tabpanel]');
      this.activeTab = this.container.querySelector('[role=tab][aria-selected=true]');
      this._addEventListeners();
    }
    _createClass(TabController, [{
      key: "_addEventListeners",
      value: // Private function to set event listeners
      function _addEventListeners() {
        var _this = this;
        var _iterator = _createForOfIteratorHelper(this.tabs), _step;
        try {
          var _loop = function _loop() {
            var tab = _step.value;
            tab.addEventListener('click', function (e) {
              e.preventDefault();
              _this.setActiveTab(tab.getAttribute('aria-controls'));
            });
            tab.addEventListener('keyup', function (e) {
              if (e.keyCode == 13 || e.keyCode == 32) {
                // return or space
                e.preventDefault();
                _this.setActiveTab(tab.getAttribute('aria-controls'));
              }
            });
          };
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.tablist.addEventListener('keyup', function (e) {
          switch (e.keyCode) {
            case 35:
              // end key
              e.preventDefault();
              _this.setActiveTab(_this.tabs[_this.tabs.length - 1].getAttribute('aria-controls'));
              break;
            case 36:
              // home key
              e.preventDefault();
              _this.setActiveTab(_this.tabs[0].getAttribute('aria-controls'));
              break;
            case 37:
              // left arrow
              e.preventDefault();
              var previous = _toConsumableArray(_this.tabs).indexOf(_this.activeTab) - 1;
              previous = previous >= 0 ? previous : _this.tabs.length - 1;
              _this.setActiveTab(_this.tabs[previous].getAttribute('aria-controls'));
              break;
            case 39:
              // right arrow
              e.preventDefault();
              var next = _toConsumableArray(_this.tabs).indexOf(_this.activeTab) + 1;
              next = next < _this.tabs.length ? next : 0;
              _this.setActiveTab(_this.tabs[next].getAttribute('aria-controls'));
              break;
          }
        });
      }
    }, {
      key: "setActiveTab",
      value: // Public function to set the tab by id
      // This can be called by the developer too.
      function setActiveTab(id) {
        var _iterator2 = _createForOfIteratorHelper(this.tabs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var tab = _step2.value;
            if (tab.getAttribute('aria-controls') == id) {
              tab.setAttribute('aria-selected', "true");
              tab.focus();
              this.activeTab = tab;
            } else {
              tab.setAttribute('aria-selected', "false");
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(this.tabpanels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var tabpanel = _step3.value;
            if (tabpanel.getAttribute('id') == id) {
              tabpanel.setAttribute('aria-expanded', "true");
            } else {
              tabpanel.setAttribute('aria-expanded', "false");
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }]);
    return TabController;
  })();
  var tabController = new TabController('#tab-example');
};
exports.tabs = tabs;

},{}],"4gIx0":[function(require,module,exports) {
var define;
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SlimSelect = t() : e.SlimSelect = t();
})(window, function () {
  return (s = {}, n.m = i = [function (e, t, i) {
    "use strict";
    function s(e, t) {
      t = t || ({
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      });
      var i = document.createEvent("CustomEvent");
      return (i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i);
    }
    var n;
    (t.__esModule = !0, t.hasClassInTree = function (e, t) {
      function s(e, t) {
        return t && e && e.classList && e.classList.contains(t) ? e : null;
      }
      return s(e, t) || (function e(t, i) {
        return t && t !== document ? s(t, i) ? t : e(t.parentNode, i) : null;
      })(e, t);
    }, t.ensureElementInView = function (e, t) {
      var i = e.scrollTop + e.offsetTop, s = i + e.clientHeight, n = t.offsetTop, a = n + t.clientHeight;
      n < i ? e.scrollTop -= i - n : s < a && (e.scrollTop += a - s);
    }, t.putContent = function (e, t, i) {
      var s = e.offsetHeight, n = e.getBoundingClientRect(), a = i ? n.top : n.top - s, o = i ? n.bottom : n.bottom + s;
      return a <= 0 ? "below" : o >= window.innerHeight ? "above" : i ? t : "below";
    }, t.debounce = function (n, a, o) {
      var l;
      return (void 0 === a && (a = 100), void 0 === o && (o = !1), function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = self, s = o && !l;
        (clearTimeout(l), l = setTimeout(function () {
          (l = null, o || n.apply(i, e));
        }, a), s && n.apply(i, e));
      });
    }, t.isValueInArrayOfObjects = function (e, t, i) {
      if (!Array.isArray(e)) return e[t] === i;
      for (var s = 0, n = e; s < n.length; s++) {
        var a = n[s];
        if (a && a[t] && a[t] === i) return !0;
      }
      return !1;
    }, t.highlight = function (e, t, i) {
      var s = e, n = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
      if (!e.match(n)) return e;
      var a = e.match(n).index, o = a + e.match(n)[0].toString().length, l = e.substring(a, o);
      return s = s.replace(n, '<mark class="' + i + '">' + l + "</mark>");
    }, t.kebabCase = function (e) {
      var t = e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (e) {
        return "-" + e.toLowerCase();
      });
      return e[0] === e[0].toUpperCase() ? t.substring(1) : t;
    }, "function" != typeof (n = window).CustomEvent && (s.prototype = n.Event.prototype, n.CustomEvent = s));
  }, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = (n.prototype.newOption = function (e) {
      return {
        id: e.id ? e.id : String(Math.floor(1e8 * Math.random())),
        value: e.value ? e.value : "",
        text: e.text ? e.text : "",
        innerHTML: e.innerHTML ? e.innerHTML : "",
        selected: !!e.selected && e.selected,
        display: void 0 === e.display || e.display,
        disabled: !!e.disabled && e.disabled,
        placeholder: !!e.placeholder && e.placeholder,
        class: e.class ? e.class : void 0,
        data: e.data ? e.data : {},
        mandatory: !!e.mandatory && e.mandatory
      };
    }, n.prototype.add = function (e) {
      this.data.push({
        id: String(Math.floor(1e8 * Math.random())),
        value: e.value,
        text: e.text,
        innerHTML: "",
        selected: !1,
        display: !0,
        disabled: !1,
        placeholder: !1,
        class: void 0,
        mandatory: e.mandatory,
        data: {}
      });
    }, n.prototype.parseSelectData = function () {
      this.data = [];
      for (var e = 0, t = this.main.select.element.childNodes; e < t.length; e++) {
        var i = t[e];
        if ("OPTGROUP" === i.nodeName) {
          for (var s = {
            label: i.label,
            options: []
          }, n = 0, a = i.childNodes; n < a.length; n++) {
            var o = a[n];
            if ("OPTION" === o.nodeName) {
              var l = this.pullOptionData(o);
              (s.options.push(l), l.placeholder && "" !== l.text.trim() && (this.main.config.placeholderText = l.text));
            }
          }
          this.data.push(s);
        } else "OPTION" === i.nodeName && (l = this.pullOptionData(i), this.data.push(l), l.placeholder && "" !== l.text.trim() && (this.main.config.placeholderText = l.text));
      }
    }, n.prototype.pullOptionData = function (e) {
      return {
        id: !!e.dataset && e.dataset.id || String(Math.floor(1e8 * Math.random())),
        value: e.value,
        text: e.text,
        innerHTML: e.innerHTML,
        selected: e.selected,
        disabled: e.disabled,
        placeholder: "true" === e.dataset.placeholder,
        class: e.className,
        style: e.style.cssText,
        data: e.dataset,
        mandatory: !!e.dataset && "true" === e.dataset.mandatory
      };
    }, n.prototype.setSelectedFromSelect = function () {
      if (this.main.config.isMultiple) {
        for (var e = [], t = 0, i = this.main.select.element.options; t < i.length; t++) {
          var s = i[t];
          if (s.selected) {
            var n = this.getObjectFromData(s.value, "value");
            n && n.id && e.push(n.id);
          }
        }
        this.setSelected(e, "id");
      } else {
        var a = this.main.select.element;
        if (-1 !== a.selectedIndex) {
          var o = a.options[a.selectedIndex].value;
          this.setSelected(o, "value");
        }
      }
    }, n.prototype.setSelected = function (e, t) {
      void 0 === t && (t = "id");
      for (var i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];
        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              var r = l[o];
              r.placeholder || (r.selected = this.shouldBeSelected(r, e, t));
            }
          }
        } else n.selected = this.shouldBeSelected(n, e, t);
      }
    }, n.prototype.shouldBeSelected = function (e, t, i) {
      if ((void 0 === i && (i = "id"), Array.isArray(t))) for (var s = 0, n = t; s < n.length; s++) {
        var a = n[s];
        if ((i in e) && String(e[i]) === String(a)) return !0;
      } else if ((i in e) && String(e[i]) === String(t)) return !0;
      return !1;
    }, n.prototype.getSelected = function () {
      for (var e = {
        text: "",
        placeholder: this.main.config.placeholderText
      }, t = [], i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];
        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              var r = l[o];
              r.selected && (this.main.config.isMultiple ? t.push(r) : e = r);
            }
          }
        } else n.selected && (this.main.config.isMultiple ? t.push(n) : e = n);
      }
      return this.main.config.isMultiple ? t : e;
    }, n.prototype.addToSelected = function (e, t) {
      if ((void 0 === t && (t = "id"), this.main.config.isMultiple)) {
        var i = [], s = this.getSelected();
        if (Array.isArray(s)) for (var n = 0, a = s; n < a.length; n++) {
          var o = a[n];
          i.push(o[t]);
        }
        (i.push(e), this.setSelected(i, t));
      }
    }, n.prototype.removeFromSelected = function (e, t) {
      if ((void 0 === t && (t = "id"), this.main.config.isMultiple)) {
        for (var i = [], s = 0, n = this.getSelected(); s < n.length; s++) {
          var a = n[s];
          String(a[t]) !== String(e) && i.push(a[t]);
        }
        this.setSelected(i, t);
      }
    }, n.prototype.onDataChange = function () {
      this.main.onChange && this.isOnChangeEnabled && this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())));
    }, n.prototype.getObjectFromData = function (e, t) {
      void 0 === t && (t = "id");
      for (var i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];
        if ((t in n) && String(n[t]) === String(e)) return n;
        if (n.hasOwnProperty("options") && n.options) for (var a = 0, o = n.options; a < o.length; a++) {
          var l = o[a];
          if (String(l[t]) === String(e)) return l;
        }
      }
      return null;
    }, n.prototype.search = function (n) {
      if ("" !== (this.searchValue = n).trim()) {
        var a = this.main.config.searchFilter, e = this.data.slice(0);
        n = n.trim();
        var t = e.map(function (e) {
          if (e.hasOwnProperty("options")) {
            var t = e, i = [];
            if ((t.options && (i = t.options.filter(function (e) {
              return a(e, n);
            })), 0 !== i.length)) {
              var s = Object.assign({}, t);
              return (s.options = i, s);
            }
          }
          return e.hasOwnProperty("text") && a(e, n) ? e : null;
        });
        this.filtered = t.filter(function (e) {
          return e;
        });
      } else this.filtered = null;
    }, n);
    function n(e) {
      (this.contentOpen = !1, this.contentPosition = "below", this.isOnChangeEnabled = !0, this.main = e.main, this.searchValue = "", this.data = [], this.filtered = null, this.parseSelectData(), this.setSelectedFromSelect());
    }
    function r(e) {
      return void 0 !== e.text || (console.error("Data object option must have at least have a text value. Check object: " + JSON.stringify(e)), !1);
    }
    (t.Data = s, t.validateData = function (e) {
      if (!e) return (console.error("Data must be an array of objects"), !1);
      for (var t = 0, i = 0, s = e; i < s.length; i++) {
        var n = s[i];
        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              r(l[o]) || t++;
            }
          }
        } else r(n) || t++;
      }
      return 0 === t;
    }, t.validateOption = r);
  }, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(3), n = i(4), a = i(5), r = i(1), o = i(0), l = (c.prototype.validate = function (e) {
      var t = "string" == typeof e.select ? document.querySelector(e.select) : e.select;
      if (!t) throw new Error("Could not find select element");
      if ("SELECT" !== t.tagName) throw new Error("Element isnt of type select");
      return t;
    }, c.prototype.selected = function () {
      if (this.config.isMultiple) {
        for (var e = [], t = 0, i = n = this.data.getSelected(); t < i.length; t++) {
          var s = i[t];
          e.push(s.value);
        }
        return e;
      }
      var n;
      return (n = this.data.getSelected()) ? n.value : "";
    }, c.prototype.set = function (e, t, i, s) {
      (void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.config.isMultiple && !Array.isArray(e) ? this.data.addToSelected(e, t) : this.data.setSelected(e, t), this.select.setValue(), this.data.onDataChange(), this.render(), i && this.close());
    }, c.prototype.setSelected = function (e, t, i, s) {
      (void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.set(e, t, i, s));
    }, c.prototype.setData = function (e) {
      if (r.validateData(e)) {
        for (var t = JSON.parse(JSON.stringify(e)), i = this.data.getSelected(), s = 0; s < t.length; s++) t[s].value || t[s].placeholder || (t[s].value = t[s].text);
        if (this.config.isAjax && i) if (this.config.isMultiple) for (var n = 0, a = i.reverse(); n < a.length; n++) {
          var o = a[n];
          t.unshift(o);
        } else {
          for ((t.unshift(i), s = 0); s < t.length; s++) t[s].placeholder || t[s].value !== i.value || t[s].text !== i.text || delete t[s];
          var l = !1;
          for (s = 0; s < t.length; s++) t[s].placeholder && (l = !0);
          l || t.unshift({
            text: "",
            placeholder: !0
          });
        }
        (this.select.create(t), this.data.parseSelectData(), this.data.setSelectedFromSelect());
      } else console.error("Validation problem on: #" + this.select.element.id);
    }, c.prototype.addData = function (e) {
      r.validateData([e]) ? (this.data.add(this.data.newOption(e)), this.select.create(this.data.data), this.data.parseSelectData(), this.data.setSelectedFromSelect(), this.render()) : console.error("Validation problem on: #" + this.select.element.id);
    }, c.prototype.open = function () {
      var e = this;
      if (this.config.isEnabled && !this.data.contentOpen) {
        if ((this.beforeOpen && this.beforeOpen(), this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.plus.classList.add("ss-cross") : this.slim.singleSelected && (this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")), this.slim[this.config.isMultiple ? "multiSelected" : "singleSelected"].container.classList.add("above" === this.data.contentPosition ? this.config.openAbove : this.config.openBelow), this.config.addToBody)) {
          var t = this.slim.container.getBoundingClientRect();
          (this.slim.content.style.top = t.top + t.height + window.scrollY + "px", this.slim.content.style.left = t.left + window.scrollX + "px", this.slim.content.style.width = t.width + "px");
        }
        if ((this.slim.content.classList.add(this.config.open), "up" === this.config.showContent.toLowerCase() || "down" !== this.config.showContent.toLowerCase() && "above" === o.putContent(this.slim.content, this.data.contentPosition, this.data.contentOpen) ? this.moveContentAbove() : this.moveContentBelow(), !this.config.isMultiple)) {
          var i = this.data.getSelected();
          if (i) {
            var s = i.id, n = this.slim.list.querySelector('[data-id="' + s + '"]');
            n && o.ensureElementInView(this.slim.list, n);
          }
        }
        setTimeout(function () {
          (e.data.contentOpen = !0, e.config.searchFocus && e.slim.search.input.focus(), e.afterOpen && e.afterOpen());
        }, this.config.timeoutDelay);
      }
    }, c.prototype.close = function () {
      var e = this;
      this.data.contentOpen && (this.beforeClose && this.beforeClose(), this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.plus.classList.remove("ss-cross")) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")), this.slim.content.classList.remove(this.config.open), this.data.contentOpen = !1, this.search(""), setTimeout(function () {
        (e.slim.content.removeAttribute("style"), e.data.contentPosition = "below", e.config.isMultiple && e.slim.multiSelected ? (e.slim.multiSelected.container.classList.remove(e.config.openAbove), e.slim.multiSelected.container.classList.remove(e.config.openBelow)) : e.slim.singleSelected && (e.slim.singleSelected.container.classList.remove(e.config.openAbove), e.slim.singleSelected.container.classList.remove(e.config.openBelow)), e.slim.search.input.blur(), e.afterClose && e.afterClose());
      }, this.config.timeoutDelay));
    }, c.prototype.moveContentAbove = function () {
      var e = 0;
      this.config.isMultiple && this.slim.multiSelected ? e = this.slim.multiSelected.container.offsetHeight : this.slim.singleSelected && (e = this.slim.singleSelected.container.offsetHeight);
      var t = e + this.slim.content.offsetHeight - 1;
      (this.slim.content.style.margin = "-" + t + "px 0 0 0", this.slim.content.style.height = t - e + 1 + "px", this.slim.content.style.transformOrigin = "center bottom", this.data.contentPosition = "above", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.container.classList.add(this.config.openAbove)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.container.classList.add(this.config.openAbove)));
    }, c.prototype.moveContentBelow = function () {
      (this.data.contentPosition = "below", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.add(this.config.openBelow)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.add(this.config.openBelow)));
    }, c.prototype.enable = function () {
      (this.config.isEnabled = !0, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.remove(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.remove(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !1, this.slim.search.input.disabled = !1, this.select.triggerMutationObserver = !0);
    }, c.prototype.disable = function () {
      (this.config.isEnabled = !1, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.add(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.add(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !0, this.slim.search.input.disabled = !0, this.select.triggerMutationObserver = !0);
    }, c.prototype.search = function (t) {
      if (this.data.searchValue !== t) if ((this.slim.search.input.value = t, this.config.isAjax)) {
        var i = this;
        (this.config.isSearching = !0, this.render(), this.ajax && this.ajax(t, function (e) {
          (i.config.isSearching = !1, Array.isArray(e) ? (e.unshift({
            text: "",
            placeholder: !0
          }), i.setData(e), i.data.search(t), i.render()) : "string" == typeof e ? i.slim.options(e) : i.render());
        }));
      } else (this.data.search(t), this.render());
    }, c.prototype.setSearchText = function (e) {
      this.config.searchText = e;
    }, c.prototype.render = function () {
      (this.config.isMultiple ? this.slim.values() : (this.slim.placeholder(), this.slim.deselect()), this.slim.options());
    }, c.prototype.destroy = function (e) {
      void 0 === e && (e = null);
      var t = e ? document.querySelector("." + e + ".ss-main") : this.slim.container, i = e ? document.querySelector("[data-ssid=" + e + "]") : this.select.element;
      if (t && i && (document.removeEventListener("click", this.documentClick), "auto" === this.config.showContent && window.removeEventListener("scroll", this.windowScroll, !1), i.style.display = "", delete i.dataset.ssid, i.slim = null, t.parentElement && t.parentElement.removeChild(t), this.config.addToBody)) {
        var s = e ? document.querySelector("." + e + ".ss-content") : this.slim.content;
        if (!s) return;
        document.body.removeChild(s);
      }
    }, c);
    function c(e) {
      var t = this;
      (this.ajax = null, this.addable = null, this.beforeOnChange = null, this.onChange = null, this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null, this.windowScroll = o.debounce(function (e) {
        t.data.contentOpen && ("above" === o.putContent(t.slim.content, t.data.contentPosition, t.data.contentOpen) ? t.moveContentAbove() : t.moveContentBelow());
      }), this.documentClick = function (e) {
        e.target && !o.hasClassInTree(e.target, t.config.id) && t.close();
      });
      var i = this.validate(e);
      (i.dataset.ssid && this.destroy(i.dataset.ssid), e.ajax && (this.ajax = e.ajax), e.addable && (this.addable = e.addable), this.config = new s.Config({
        select: i,
        isAjax: !!e.ajax,
        showSearch: e.showSearch,
        searchPlaceholder: e.searchPlaceholder,
        searchText: e.searchText,
        searchingText: e.searchingText,
        searchFocus: e.searchFocus,
        searchHighlight: e.searchHighlight,
        searchFilter: e.searchFilter,
        closeOnSelect: e.closeOnSelect,
        showContent: e.showContent,
        placeholderText: e.placeholder,
        allowDeselect: e.allowDeselect,
        allowDeselectOption: e.allowDeselectOption,
        hideSelectedOption: e.hideSelectedOption,
        deselectLabel: e.deselectLabel,
        isEnabled: e.isEnabled,
        valuesUseText: e.valuesUseText,
        showOptionTooltips: e.showOptionTooltips,
        selectByGroup: e.selectByGroup,
        limit: e.limit,
        timeoutDelay: e.timeoutDelay,
        addToBody: e.addToBody
      }), this.select = new n.Select({
        select: i,
        main: this
      }), this.data = new r.Data({
        main: this
      }), this.slim = new a.Slim({
        main: this
      }), this.select.element.parentNode && this.select.element.parentNode.insertBefore(this.slim.container, this.select.element.nextSibling), e.data ? this.setData(e.data) : this.render(), document.addEventListener("click", this.documentClick), "auto" === this.config.showContent && window.addEventListener("scroll", this.windowScroll, !1), e.beforeOnChange && (this.beforeOnChange = e.beforeOnChange), e.onChange && (this.onChange = e.onChange), e.beforeOpen && (this.beforeOpen = e.beforeOpen), e.afterOpen && (this.afterOpen = e.afterOpen), e.beforeClose && (this.beforeClose = e.beforeClose), e.afterClose && (this.afterClose = e.afterClose), this.config.isEnabled || this.disable());
    }
    t.default = l;
  }, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = (n.prototype.searchFilter = function (e, t) {
      return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase());
    }, n);
    function n(e) {
      (this.id = "", this.isMultiple = !1, this.isAjax = !1, this.isSearching = !1, this.showSearch = !0, this.searchFocus = !0, this.searchHighlight = !1, this.closeOnSelect = !0, this.showContent = "auto", this.searchPlaceholder = "Search", this.searchText = "No Results", this.searchingText = "Searching...", this.placeholderText = "Select Value", this.allowDeselect = !1, this.allowDeselectOption = !1, this.hideSelectedOption = !1, this.deselectLabel = "x", this.isEnabled = !0, this.valuesUseText = !1, this.showOptionTooltips = !1, this.selectByGroup = !1, this.limit = 0, this.timeoutDelay = 200, this.addToBody = !1, this.main = "ss-main", this.singleSelected = "ss-single-selected", this.arrow = "ss-arrow", this.multiSelected = "ss-multi-selected", this.add = "ss-add", this.plus = "ss-plus", this.values = "ss-values", this.value = "ss-value", this.valueText = "ss-value-text", this.valueDelete = "ss-value-delete", this.content = "ss-content", this.open = "ss-open", this.openAbove = "ss-open-above", this.openBelow = "ss-open-below", this.search = "ss-search", this.searchHighlighter = "ss-search-highlight", this.addable = "ss-addable", this.list = "ss-list", this.optgroup = "ss-optgroup", this.optgroupLabel = "ss-optgroup-label", this.optgroupLabelSelectable = "ss-optgroup-label-selectable", this.option = "ss-option", this.optionSelected = "ss-option-selected", this.highlighted = "ss-highlighted", this.disabled = "ss-disabled", this.hide = "ss-hide", this.id = "ss-" + Math.floor(1e5 * Math.random()), this.style = e.select.style.cssText, this.class = e.select.className.split(" "), this.isMultiple = e.select.multiple, this.isAjax = e.isAjax, this.showSearch = !1 !== e.showSearch, this.searchFocus = !1 !== e.searchFocus, this.searchHighlight = !0 === e.searchHighlight, this.closeOnSelect = !1 !== e.closeOnSelect, e.showContent && (this.showContent = e.showContent), this.isEnabled = !1 !== e.isEnabled, e.searchPlaceholder && (this.searchPlaceholder = e.searchPlaceholder), e.searchText && (this.searchText = e.searchText), e.searchingText && (this.searchingText = e.searchingText), e.placeholderText && (this.placeholderText = e.placeholderText), this.allowDeselect = !0 === e.allowDeselect, this.allowDeselectOption = !0 === e.allowDeselectOption, this.hideSelectedOption = !0 === e.hideSelectedOption, e.deselectLabel && (this.deselectLabel = e.deselectLabel), e.valuesUseText && (this.valuesUseText = e.valuesUseText), e.showOptionTooltips && (this.showOptionTooltips = e.showOptionTooltips), e.selectByGroup && (this.selectByGroup = e.selectByGroup), e.limit && (this.limit = e.limit), e.searchFilter && (this.searchFilter = e.searchFilter), null != e.timeoutDelay && (this.timeoutDelay = e.timeoutDelay), this.addToBody = !0 === e.addToBody);
    }
    t.Config = s;
  }, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var s = i(0), n = (a.prototype.setValue = function () {
      if (this.main.data.getSelected()) {
        if (this.main.config.isMultiple) for (var e = this.main.data.getSelected(), t = 0, i = this.element.options; t < i.length; t++) {
          var s = i[t];
          s.selected = !1;
          for (var n = 0, a = e; n < a.length; n++) a[n].value === s.value && (s.selected = !0);
        } else (e = this.main.data.getSelected(), this.element.value = e ? e.value : "");
        (this.main.data.isOnChangeEnabled = !1, this.element.dispatchEvent(new CustomEvent("change", {
          bubbles: !0
        })), this.main.data.isOnChangeEnabled = !0);
      }
    }, a.prototype.addAttributes = function () {
      (this.element.tabIndex = -1, this.element.style.display = "none", this.element.dataset.ssid = this.main.config.id);
    }, a.prototype.addEventListeners = function () {
      var t = this;
      this.element.addEventListener("change", function (e) {
        (t.main.data.setSelectedFromSelect(), t.main.render());
      });
    }, a.prototype.addMutationObserver = function () {
      var t = this;
      this.main.config.isAjax || (this.mutationObserver = new MutationObserver(function (e) {
        t.triggerMutationObserver && (t.main.data.parseSelectData(), t.main.data.setSelectedFromSelect(), t.main.render(), e.forEach(function (e) {
          "class" === e.attributeName && t.main.slim.updateContainerDivClass(t.main.slim.container);
        }));
      }), this.observeMutationObserver());
    }, a.prototype.observeMutationObserver = function () {
      this.mutationObserver && this.mutationObserver.observe(this.element, {
        attributes: !0,
        childList: !0,
        characterData: !0
      });
    }, a.prototype.disconnectMutationObserver = function () {
      this.mutationObserver && this.mutationObserver.disconnect();
    }, a.prototype.create = function (e) {
      this.element.innerHTML = "";
      for (var t = 0, i = e; t < i.length; t++) {
        var s = i[t];
        if (s.hasOwnProperty("options")) {
          var n = s, a = document.createElement("optgroup");
          if ((a.label = n.label, n.options)) for (var o = 0, l = n.options; o < l.length; o++) {
            var r = l[o];
            a.appendChild(this.createOption(r));
          }
          this.element.appendChild(a);
        } else this.element.appendChild(this.createOption(s));
      }
    }, a.prototype.createOption = function (t) {
      var i = document.createElement("option");
      return (i.value = "" !== t.value ? t.value : t.text, i.innerHTML = t.innerHTML || t.text, t.selected && (i.selected = t.selected), !1 === t.display && (i.style.display = "none"), t.disabled && (i.disabled = !0), t.placeholder && i.setAttribute("data-placeholder", "true"), t.mandatory && i.setAttribute("data-mandatory", "true"), t.class && t.class.split(" ").forEach(function (e) {
        i.classList.add(e);
      }), t.data && "object" == typeof t.data && Object.keys(t.data).forEach(function (e) {
        i.setAttribute("data-" + s.kebabCase(e), t.data[e]);
      }), i);
    }, a);
    function a(e) {
      (this.triggerMutationObserver = !0, this.element = e.select, this.main = e.main, this.element.disabled && (this.main.config.isEnabled = !1), this.addAttributes(), this.addEventListeners(), this.mutationObserver = null, this.addMutationObserver(), this.element.slim = e.main);
    }
    t.Select = n;
  }, function (e, t, i) {
    "use strict";
    t.__esModule = !0;
    var a = i(0), o = i(1), s = (n.prototype.containerDiv = function () {
      var e = document.createElement("div");
      return (e.style.cssText = this.main.config.style, this.updateContainerDivClass(e), e);
    }, n.prototype.updateContainerDivClass = function (e) {
      (this.main.config.class = this.main.select.element.className.split(" "), e.className = "", e.classList.add(this.main.config.id), e.classList.add(this.main.config.main));
      for (var t = 0, i = this.main.config.class; t < i.length; t++) {
        var s = i[t];
        "" !== s.trim() && e.classList.add(s);
      }
    }, n.prototype.singleSelectedDiv = function () {
      var t = this, e = document.createElement("div");
      e.classList.add(this.main.config.singleSelected);
      var i = document.createElement("span");
      (i.classList.add("placeholder"), e.appendChild(i));
      var s = document.createElement("span");
      (s.innerHTML = this.main.config.deselectLabel, s.classList.add("ss-deselect"), s.onclick = function (e) {
        (e.stopPropagation(), t.main.config.isEnabled && t.main.set(""));
      }, e.appendChild(s));
      var n = document.createElement("span");
      n.classList.add(this.main.config.arrow);
      var a = document.createElement("span");
      return (a.classList.add("arrow-down"), n.appendChild(a), e.appendChild(n), e.onclick = function () {
        t.main.config.isEnabled && (t.main.data.contentOpen ? t.main.close() : t.main.open());
      }, {
        container: e,
        placeholder: i,
        deselect: s,
        arrowIcon: {
          container: n,
          arrow: a
        }
      });
    }, n.prototype.placeholder = function () {
      var e = this.main.data.getSelected();
      if (null === e || e && e.placeholder) {
        var t = document.createElement("span");
        (t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.placeholderText, this.singleSelected && (this.singleSelected.placeholder.innerHTML = t.outerHTML));
      } else {
        var i = "";
        (e && (i = e.innerHTML && !0 !== this.main.config.valuesUseText ? e.innerHTML : e.text), this.singleSelected && (this.singleSelected.placeholder.innerHTML = e ? i : ""));
      }
    }, n.prototype.deselect = function () {
      if (this.singleSelected) {
        if (!this.main.config.allowDeselect) return void this.singleSelected.deselect.classList.add("ss-hide");
        "" === this.main.selected() ? this.singleSelected.deselect.classList.add("ss-hide") : this.singleSelected.deselect.classList.remove("ss-hide");
      }
    }, n.prototype.multiSelectedDiv = function () {
      var t = this, e = document.createElement("div");
      e.classList.add(this.main.config.multiSelected);
      var i = document.createElement("div");
      (i.classList.add(this.main.config.values), e.appendChild(i));
      var s = document.createElement("div");
      s.classList.add(this.main.config.add);
      var n = document.createElement("span");
      return (n.classList.add(this.main.config.plus), n.onclick = function (e) {
        t.main.data.contentOpen && (t.main.close(), e.stopPropagation());
      }, s.appendChild(n), e.appendChild(s), e.onclick = function (e) {
        t.main.config.isEnabled && (e.target.classList.contains(t.main.config.valueDelete) || (t.main.data.contentOpen ? t.main.close() : t.main.open()));
      }, {
        container: e,
        values: i,
        add: s,
        plus: n
      });
    }, n.prototype.values = function () {
      if (this.multiSelected) {
        for (var e, t = this.multiSelected.values.childNodes, i = this.main.data.getSelected(), s = [], n = 0, a = t; n < a.length; n++) {
          var o = a[n];
          e = !0;
          for (var l = 0, r = i; l < r.length; l++) {
            var c = r[l];
            String(c.id) === String(o.dataset.id) && (e = !1);
          }
          e && s.push(o);
        }
        for (var d = 0, h = s; d < h.length; d++) {
          var u = h[d];
          (u.classList.add("ss-out"), this.multiSelected.values.removeChild(u));
        }
        for ((t = this.multiSelected.values.childNodes, c = 0); c < i.length; c++) {
          e = !1;
          for (var p = 0, m = t; p < m.length; p++) (o = m[p], String(i[c].id) === String(o.dataset.id) && (e = !0));
          e || (0 !== t.length && HTMLElement.prototype.insertAdjacentElement ? 0 === c ? this.multiSelected.values.insertBefore(this.valueDiv(i[c]), t[c]) : t[c - 1].insertAdjacentElement("afterend", this.valueDiv(i[c])) : this.multiSelected.values.appendChild(this.valueDiv(i[c])));
        }
        if (0 === i.length) {
          var f = document.createElement("span");
          (f.classList.add(this.main.config.disabled), f.innerHTML = this.main.config.placeholderText, this.multiSelected.values.innerHTML = f.outerHTML);
        }
      }
    }, n.prototype.valueDiv = function (a) {
      var o = this, e = document.createElement("div");
      (e.classList.add(this.main.config.value), e.dataset.id = a.id);
      var t = document.createElement("span");
      if ((t.classList.add(this.main.config.valueText), t.innerHTML = a.innerHTML && !0 !== this.main.config.valuesUseText ? a.innerHTML : a.text, e.appendChild(t), !a.mandatory)) {
        var i = document.createElement("span");
        (i.classList.add(this.main.config.valueDelete), i.innerHTML = this.main.config.deselectLabel, i.onclick = function (e) {
          (e.preventDefault(), e.stopPropagation());
          var t = !1;
          if ((o.main.beforeOnChange || (t = !0), o.main.beforeOnChange)) {
            for (var i = o.main.data.getSelected(), s = JSON.parse(JSON.stringify(i)), n = 0; n < s.length; n++) s[n].id === a.id && s.splice(n, 1);
            !1 !== o.main.beforeOnChange(s) && (t = !0);
          }
          t && (o.main.data.removeFromSelected(a.id, "id"), o.main.render(), o.main.select.setValue(), o.main.data.onDataChange());
        }, e.appendChild(i));
      }
      return e;
    }, n.prototype.contentDiv = function () {
      var e = document.createElement("div");
      return (e.classList.add(this.main.config.content), e);
    }, n.prototype.searchDiv = function () {
      var n = this, e = document.createElement("div"), s = document.createElement("input"), a = document.createElement("div");
      e.classList.add(this.main.config.search);
      var t = {
        container: e,
        input: s
      };
      return (this.main.config.showSearch || (e.classList.add(this.main.config.hide), s.readOnly = !0), s.type = "search", s.placeholder = this.main.config.searchPlaceholder, s.tabIndex = 0, s.setAttribute("aria-label", this.main.config.searchPlaceholder), s.setAttribute("autocapitalize", "off"), s.setAttribute("autocomplete", "off"), s.setAttribute("autocorrect", "off"), s.onclick = function (e) {
        setTimeout(function () {
          "" === e.target.value && n.main.search("");
        }, 10);
      }, s.onkeydown = function (e) {
        "ArrowUp" === e.key ? (n.main.open(), n.highlightUp(), e.preventDefault()) : "ArrowDown" === e.key ? (n.main.open(), n.highlightDown(), e.preventDefault()) : "Tab" === e.key ? n.main.data.contentOpen ? n.main.close() : setTimeout(function () {
          n.main.close();
        }, n.main.config.timeoutDelay) : "Enter" === e.key && e.preventDefault();
      }, s.onkeyup = function (e) {
        var t = e.target;
        if ("Enter" === e.key) {
          if (n.main.addable && e.ctrlKey) return (a.click(), e.preventDefault(), void e.stopPropagation());
          var i = n.list.querySelector("." + n.main.config.highlighted);
          i && i.click();
        } else "ArrowUp" === e.key || "ArrowDown" === e.key || ("Escape" === e.key ? n.main.close() : n.main.config.showSearch && n.main.data.contentOpen ? n.main.search(t.value) : s.value = "");
        (e.preventDefault(), e.stopPropagation());
      }, s.onfocus = function () {
        n.main.open();
      }, e.appendChild(s), this.main.addable && (a.classList.add(this.main.config.addable), a.innerHTML = "+", a.onclick = function (e) {
        if (n.main.addable) {
          (e.preventDefault(), e.stopPropagation());
          var t = n.search.input.value;
          if ("" === t.trim()) return void n.search.input.focus();
          var i = n.main.addable(t), s = "";
          if (!i) return;
          ("object" == typeof i ? o.validateOption(i) && (n.main.addData(i), s = i.value ? i.value : i.text) : (n.main.addData(n.main.data.newOption({
            text: i,
            value: i
          })), s = i), n.main.search(""), setTimeout(function () {
            n.main.set(s, "value", !1, !1);
          }, 100), n.main.config.closeOnSelect && setTimeout(function () {
            n.main.close();
          }, 100));
        }
      }, e.appendChild(a), t.addable = a), t);
    }, n.prototype.highlightUp = function () {
      var e = this.list.querySelector("." + this.main.config.highlighted), t = null;
      if (e) for (t = e.previousSibling; null !== t && t.classList.contains(this.main.config.disabled); ) t = t.previousSibling; else {
        var i = this.list.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
        t = i[i.length - 1];
      }
      if ((t && t.classList.contains(this.main.config.optgroupLabel) && (t = null), null === t)) {
        var s = e.parentNode;
        if (s.classList.contains(this.main.config.optgroup) && s.previousSibling) {
          var n = s.previousSibling.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
          n.length && (t = n[n.length - 1]);
        }
      }
      t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
    }, n.prototype.highlightDown = function () {
      var e = this.list.querySelector("." + this.main.config.highlighted), t = null;
      if (e) for (t = e.nextSibling; null !== t && t.classList.contains(this.main.config.disabled); ) t = t.nextSibling; else t = this.list.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
      if (null === t && null !== e) {
        var i = e.parentNode;
        i.classList.contains(this.main.config.optgroup) && i.nextSibling && (t = i.nextSibling.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")"));
      }
      t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
    }, n.prototype.listDiv = function () {
      var e = document.createElement("div");
      return (e.classList.add(this.main.config.list), e);
    }, n.prototype.options = function (e) {
      void 0 === e && (e = "");
      var t, i = this.main.data.filtered || this.main.data.data;
      if ((this.list.innerHTML = "") !== e) return ((t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = e, void this.list.appendChild(t));
      if (this.main.config.isAjax && this.main.config.isSearching) return ((t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.searchingText, void this.list.appendChild(t));
      if (0 === i.length) {
        var s = document.createElement("div");
        return (s.classList.add(this.main.config.option), s.classList.add(this.main.config.disabled), s.innerHTML = this.main.config.searchText, void this.list.appendChild(s));
      }
      for (var n = function (e) {
        if (e.hasOwnProperty("label")) {
          var t = e, n = document.createElement("div");
          n.classList.add(c.main.config.optgroup);
          var i = document.createElement("div");
          (i.classList.add(c.main.config.optgroupLabel), c.main.config.selectByGroup && c.main.config.isMultiple && i.classList.add(c.main.config.optgroupLabelSelectable), i.innerHTML = t.label, n.appendChild(i));
          var s = t.options;
          if (s) {
            for (var a = 0, o = s; a < o.length; a++) {
              var l = o[a];
              n.appendChild(c.option(l));
            }
            if (c.main.config.selectByGroup && c.main.config.isMultiple) {
              var r = c;
              i.addEventListener("click", function (e) {
                (e.preventDefault(), e.stopPropagation());
                for (var t = 0, i = n.children; t < i.length; t++) {
                  var s = i[t];
                  -1 !== s.className.indexOf(r.main.config.option) && s.click();
                }
              });
            }
          }
          c.list.appendChild(n);
        } else c.list.appendChild(c.option(e));
      }, c = this, a = 0, o = i; a < o.length; a++) n(o[a]);
    }, n.prototype.option = function (r) {
      if (r.placeholder) {
        var e = document.createElement("div");
        return (e.classList.add(this.main.config.option), e.classList.add(this.main.config.hide), e);
      }
      var t = document.createElement("div");
      (t.classList.add(this.main.config.option), r.class && r.class.split(" ").forEach(function (e) {
        t.classList.add(e);
      }), r.style && (t.style.cssText = r.style));
      var c = this.main.data.getSelected();
      (t.dataset.id = r.id, this.main.config.searchHighlight && this.main.slim && r.innerHTML && "" !== this.main.slim.search.input.value.trim() ? t.innerHTML = a.highlight(r.innerHTML, this.main.slim.search.input.value, this.main.config.searchHighlighter) : r.innerHTML && (t.innerHTML = r.innerHTML), this.main.config.showOptionTooltips && t.textContent && t.setAttribute("title", t.textContent));
      var d = this;
      t.addEventListener("click", function (e) {
        (e.preventDefault(), e.stopPropagation());
        var t = this.dataset.id;
        if (!0 === r.selected && d.main.config.allowDeselectOption) {
          var i = !1;
          if ((d.main.beforeOnChange && d.main.config.isMultiple || (i = !0), d.main.beforeOnChange && d.main.config.isMultiple)) {
            for (var s = d.main.data.getSelected(), n = JSON.parse(JSON.stringify(s)), a = 0; a < n.length; a++) n[a].id === t && n.splice(a, 1);
            !1 !== d.main.beforeOnChange(n) && (i = !0);
          }
          i && (d.main.config.isMultiple ? (d.main.data.removeFromSelected(t, "id"), d.main.render(), d.main.select.setValue(), d.main.data.onDataChange()) : d.main.set(""));
        } else {
          if (r.disabled || r.selected) return;
          if (d.main.config.limit && Array.isArray(c) && d.main.config.limit <= c.length) return;
          if (d.main.beforeOnChange) {
            var o = void 0, l = JSON.parse(JSON.stringify(d.main.data.getObjectFromData(t)));
            (l.selected = !0, d.main.config.isMultiple ? (o = JSON.parse(JSON.stringify(c))).push(l) : o = JSON.parse(JSON.stringify(l)), !1 !== d.main.beforeOnChange(o) && d.main.set(t, "id", d.main.config.closeOnSelect));
          } else d.main.set(t, "id", d.main.config.closeOnSelect);
        }
      });
      var i = c && a.isValueInArrayOfObjects(c, "id", r.id);
      return ((r.disabled || i) && (t.onclick = null, d.main.config.allowDeselectOption || t.classList.add(this.main.config.disabled), d.main.config.hideSelectedOption && t.classList.add(this.main.config.hide)), i ? t.classList.add(this.main.config.optionSelected) : t.classList.remove(this.main.config.optionSelected), t);
    }, n);
    function n(e) {
      (this.main = e.main, this.container = this.containerDiv(), this.content = this.contentDiv(), this.search = this.searchDiv(), this.list = this.listDiv(), this.options(), this.singleSelected = null, this.multiSelected = null, this.main.config.isMultiple ? (this.multiSelected = this.multiSelectedDiv(), this.multiSelected && this.container.appendChild(this.multiSelected.container)) : (this.singleSelected = this.singleSelectedDiv(), this.container.appendChild(this.singleSelected.container)), this.main.config.addToBody ? (this.content.classList.add(this.main.config.id), document.body.appendChild(this.content)) : this.container.appendChild(this.content), this.content.appendChild(this.search.container), this.content.appendChild(this.list));
    }
    t.Slim = s;
  }], n.c = s, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    ("undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    }));
  }, n.t = function (t, e) {
    if ((1 & e && (t = n(t)), 8 & e)) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if ((n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t)) for (var s in t) n.d(i, s, (function (e) {
      return t[e];
    }).bind(null, s));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return (n.d(t, "a", t), t);
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2).default);
  function n(e) {
    if (s[e]) return s[e].exports;
    var t = s[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return (i[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports);
  }
  var i, s;
});

},{}]},["6Z4k7","5S0nk"], "5S0nk", "parcelRequireebec")

//# sourceMappingURL=catalogo.fa9081b9.js.map
