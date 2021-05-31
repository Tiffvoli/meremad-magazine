// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
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
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/konghans.png":[["konghans.3cca1157.png","img/konghans.png"],"img/konghans.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/madklubben.png":[["madklubben.7c54fd62.png","img/madklubben.png"],"img/madklubben.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/dragsholm.png":[["dragsholm.b514e669.png","img/dragsholm.png"],"img/dragsholm.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/highlight-1.png":[["highlight-1.c412da9e.png","img/highlight-1.png"],"img/highlight-1.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/highlight-2.png":[["highlight-2.5a442546.png","img/highlight-2.png"],"img/highlight-2.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/havnebykro.png":[["havnebykro.9589a104.png","img/havnebykro.png"],"img/havnebykro.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/kiinkiin.png":[["kiinkiin.52153589.png","img/kiinkiin.png"],"img/kiinkiin.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/alouette.png":[["alouette.5a675707.png","img/alouette.png"],"img/alouette.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-icon-1.svg":[["recipe-icon-1.f78f179e.svg","img/recipe-icon-1.svg"],"img/recipe-icon-1.svg"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-icon-2.svg":[["recipe-icon-2.f876ff27.svg","img/recipe-icon-2.svg"],"img/recipe-icon-2.svg"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-icon-3.svg":[["recipe-icon-3.c8721d2c.svg","img/recipe-icon-3.svg"],"img/recipe-icon-3.svg"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/dinner-1.png":[["dinner-1.ecd58efc.png","img/dinner-1.png"],"img/dinner-1.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/dinner-2.png":[["dinner-2.22c95fd4.png","img/dinner-2.png"],"img/dinner-2.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/dinner-3.png":[["dinner-3.cccc6204.png","img/dinner-3.png"],"img/dinner-3.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/arrow.svg":[["arrow.28e30bbc.svg","img/arrow.svg"],"img/arrow.svg"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/arrow-right.svg":[["arrow-right.77e558a1.svg","img/arrow-right.svg"],"img/arrow-right.svg"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-3.png":[["recipe-3.0ab9f525.png","img/recipe-3.png"],"img/recipe-3.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-4.png":[["recipe-4.de12d4be.png","img/recipe-4.png"],"img/recipe-4.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-6.png":[["recipe-6.297c07b4.png","img/recipe-6.png"],"img/recipe-6.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-7.png":[["recipe-7.ac2acf04.png","img/recipe-7.png"],"img/recipe-7.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-8.png":[["recipe-8.b2f486db.png","img/recipe-8.png"],"img/recipe-8.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/recipe-9.png":[["recipe-9.802d9ba7.png","img/recipe-9.png"],"img/recipe-9.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/restaurant-sevel.png":[["restaurant-sevel.b1ed0197.png","img/restaurant-sevel.png"],"img/restaurant-sevel.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/Fishnchips.png":[["Fishnchips.71803aa8.png","img/Fishnchips.png"],"img/Fishnchips.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/restaurant-spontan.png":[["restaurant-spontan.754a03e7.png","img/restaurant-spontan.png"],"img/restaurant-spontan.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/trees.png":[["trees.0f6017d0.png","img/trees.png"],"img/trees.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/masterchef.png":[["masterchef.b572faf3.png","img/masterchef.png"],"img/masterchef.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/redzepi.png":[["redzepi.b0f8071d.png","img/redzepi.png"],"img/redzepi.png"],"/Users/Tiffany/Documents/KEA/Web Development/Interface Design/meremad-magazine/img/hermann-video.png":[["hermann-video.37287c5c.png","img/hermann-video.png"],"img/hermann-video.png"],"_css_loader":"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55671" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.ff1c4cab.js.map