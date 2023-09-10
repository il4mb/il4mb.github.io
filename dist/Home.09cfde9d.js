// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bcbhH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4a66b46009cfde9d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fxTj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("35abf7d2eacc3f18");
    if (script.__esModule) script = script.default;
    script.render = require("9fd112c536cc04de").render;
    require("d3c2dd08a19470d2").default(script);
    script.__scopeId = "data-v-e5ec61";
    script.__file = "G:\\node-project\\il4mb.github.io\\src\\views\\Home.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "e5ec61-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("e5ec61-hmr", script)) __VUE_HMR_RUNTIME__.reload("e5ec61-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"35abf7d2eacc3f18":"f6E3w","9fd112c536cc04de":"jDJG2","d3c2dd08a19470d2":"8UkwH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f6E3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _components = require("@vueuse/components");
exports.default = /*#__PURE__*/ (0, _vue.defineComponent)({
    __name: "Home",
    setup (__props, { expose: __expose }) {
        __expose();
        const target = (0, _vue.ref)(null);
        const isVisible = (0, _vue.ref)(false);
        function onElementVisibility(state) {
            isVisible.value = state;
            if (state) target.value.scrollIntoView();
        }
        const __returned__ = {
            target,
            isVisible,
            onElementVisibility,
            get vElementVisibility () {
                return 0, _components.vElementVisibility;
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"vue":"gzxs9","@vueuse/components":"bFvtc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFvtc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OnClickOutside", ()=>OnClickOutside);
parcelHelpers.export(exports, "OnLongPress", ()=>OnLongPress);
parcelHelpers.export(exports, "UseActiveElement", ()=>UseActiveElement);
parcelHelpers.export(exports, "UseBattery", ()=>UseBattery);
parcelHelpers.export(exports, "UseBrowserLocation", ()=>UseBrowserLocation);
parcelHelpers.export(exports, "UseColorMode", ()=>UseColorMode);
parcelHelpers.export(exports, "UseDark", ()=>UseDark);
parcelHelpers.export(exports, "UseDeviceMotion", ()=>UseDeviceMotion);
parcelHelpers.export(exports, "UseDeviceOrientation", ()=>UseDeviceOrientation);
parcelHelpers.export(exports, "UseDevicePixelRatio", ()=>UseDevicePixelRatio);
parcelHelpers.export(exports, "UseDevicesList", ()=>UseDevicesList);
parcelHelpers.export(exports, "UseDocumentVisibility", ()=>UseDocumentVisibility);
parcelHelpers.export(exports, "UseDraggable", ()=>UseDraggable);
parcelHelpers.export(exports, "UseElementBounding", ()=>UseElementBounding);
parcelHelpers.export(exports, "UseElementSize", ()=>UseElementSize);
parcelHelpers.export(exports, "UseElementVisibility", ()=>UseElementVisibility);
parcelHelpers.export(exports, "UseEyeDropper", ()=>UseEyeDropper);
parcelHelpers.export(exports, "UseFullscreen", ()=>UseFullscreen);
parcelHelpers.export(exports, "UseGeolocation", ()=>UseGeolocation);
parcelHelpers.export(exports, "UseIdle", ()=>UseIdle);
parcelHelpers.export(exports, "UseImage", ()=>UseImage);
parcelHelpers.export(exports, "UseMouse", ()=>UseMouse);
parcelHelpers.export(exports, "UseMouseInElement", ()=>UseMouseInElement);
parcelHelpers.export(exports, "UseMousePressed", ()=>UseMousePressed);
parcelHelpers.export(exports, "UseNetwork", ()=>UseNetwork);
parcelHelpers.export(exports, "UseNow", ()=>UseNow);
parcelHelpers.export(exports, "UseObjectUrl", ()=>UseObjectUrl);
parcelHelpers.export(exports, "UseOffsetPagination", ()=>UseOffsetPagination);
parcelHelpers.export(exports, "UseOnline", ()=>UseOnline);
parcelHelpers.export(exports, "UsePageLeave", ()=>UsePageLeave);
parcelHelpers.export(exports, "UsePointer", ()=>UsePointer);
parcelHelpers.export(exports, "UsePointerLock", ()=>UsePointerLock);
parcelHelpers.export(exports, "UsePreferredColorScheme", ()=>UsePreferredColorScheme);
parcelHelpers.export(exports, "UsePreferredContrast", ()=>UsePreferredContrast);
parcelHelpers.export(exports, "UsePreferredDark", ()=>UsePreferredDark);
parcelHelpers.export(exports, "UsePreferredLanguages", ()=>UsePreferredLanguages);
parcelHelpers.export(exports, "UsePreferredReducedMotion", ()=>UsePreferredReducedMotion);
parcelHelpers.export(exports, "UseScreenSafeArea", ()=>UseScreenSafeArea);
parcelHelpers.export(exports, "UseTimeAgo", ()=>UseTimeAgo);
parcelHelpers.export(exports, "UseTimestamp", ()=>UseTimestamp);
parcelHelpers.export(exports, "UseVirtualList", ()=>UseVirtualList);
parcelHelpers.export(exports, "UseWindowFocus", ()=>UseWindowFocus);
parcelHelpers.export(exports, "UseWindowSize", ()=>UseWindowSize);
parcelHelpers.export(exports, "VOnClickOutside", ()=>vOnClickOutside);
parcelHelpers.export(exports, "VOnLongPress", ()=>vOnLongPress);
parcelHelpers.export(exports, "vElementHover", ()=>vElementHover);
parcelHelpers.export(exports, "vElementSize", ()=>vElementSize);
parcelHelpers.export(exports, "vElementVisibility", ()=>vElementVisibility);
parcelHelpers.export(exports, "vInfiniteScroll", ()=>vInfiniteScroll);
parcelHelpers.export(exports, "vIntersectionObserver", ()=>vIntersectionObserver);
parcelHelpers.export(exports, "vOnClickOutside", ()=>vOnClickOutside);
parcelHelpers.export(exports, "vOnKeyStroke", ()=>vOnKeyStroke);
parcelHelpers.export(exports, "vOnLongPress", ()=>vOnLongPress);
parcelHelpers.export(exports, "vScroll", ()=>vScroll);
parcelHelpers.export(exports, "vScrollLock", ()=>vScrollLock);
var _vueDemi = require("vue-demi");
var _core = require("@vueuse/core");
var _shared = require("@vueuse/shared");
var global = arguments[3];
const OnClickOutside = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "OnClickOutside",
    props: [
        "as",
        "options"
    ],
    emits: [
        "trigger"
    ],
    setup (props, { slots, emit }) {
        const target = (0, _vueDemi.ref)();
        (0, _core.onClickOutside)(target, (e)=>{
            emit("trigger", e);
        }, props.options);
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default());
        };
    }
});
function unrefElement(elRef) {
    var _a;
    const plain = (0, _shared.toValue)(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = (0, _shared.isClient) ? window : void 0;
function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
    } else [target, events, listeners, options] = args;
    if (!target) return 0, _shared.noop;
    if (!Array.isArray(events)) events = [
        events
    ];
    if (!Array.isArray(listeners)) listeners = [
        listeners
    ];
    const cleanups = [];
    const cleanup = ()=>{
        cleanups.forEach((fn)=>fn());
        cleanups.length = 0;
    };
    const register = (el, event, listener, options2)=>{
        el.addEventListener(event, listener, options2);
        return ()=>el.removeEventListener(event, listener, options2);
    };
    const stopWatch = (0, _vueDemi.watch)(()=>[
            unrefElement(target),
            (0, _shared.toValue)(options)
        ], ([el, options2])=>{
        cleanup();
        if (!el) return;
        const optionsClone = (0, _shared.isObject)(options2) ? {
            ...options2
        } : options2;
        cleanups.push(...events.flatMap((event)=>{
            return listeners.map((listener)=>register(el, event, listener, optionsClone));
        }));
    }, {
        immediate: true,
        flush: "post"
    });
    const stop = ()=>{
        stopWatch();
        cleanup();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
    const { window: window1 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window1) return;
    if ((0, _shared.isIOS) && !_iOSWorkaround) {
        _iOSWorkaround = true;
        Array.from(window1.document.body.children).forEach((el)=>el.addEventListener("click", (0, _shared.noop)));
        window1.document.documentElement.addEventListener("click", (0, _shared.noop));
    }
    let shouldListen = true;
    const shouldIgnore = (event)=>{
        return ignore.some((target2)=>{
            if (typeof target2 === "string") return Array.from(window1.document.querySelectorAll(target2)).some((el)=>el === event.target || event.composedPath().includes(el));
            else {
                const el = unrefElement(target2);
                return el && (event.target === el || event.composedPath().includes(el));
            }
        });
    };
    const listener = (event)=>{
        const el = unrefElement(target);
        if (!el || el === event.target || event.composedPath().includes(el)) return;
        if (event.detail === 0) shouldListen = !shouldIgnore(event);
        if (!shouldListen) {
            shouldListen = true;
            return;
        }
        handler(event);
    };
    const cleanup = [
        useEventListener(window1, "click", listener, {
            passive: true,
            capture
        }),
        useEventListener(window1, "pointerdown", (e)=>{
            const el = unrefElement(target);
            if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
        }, {
            passive: true
        }),
        detectIframe && useEventListener(window1, "blur", (event)=>{
            setTimeout(()=>{
                var _a;
                const el = unrefElement(target);
                if (((_a = window1.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window1.document.activeElement))) handler(event);
            }, 0);
        })
    ].filter(Boolean);
    const stop = ()=>cleanup.forEach((fn)=>fn());
    return stop;
}
const vOnClickOutside = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        const capture = !binding.modifiers.bubble;
        if (typeof binding.value === "function") el.__onClickOutside_stop = onClickOutside(el, binding.value, {
            capture
        });
        else {
            const [handler, options] = binding.value;
            el.__onClickOutside_stop = onClickOutside(el, handler, Object.assign({
                capture
            }, options));
        }
    },
    [(0, _shared.directiveHooks).unmounted] (el) {
        el.__onClickOutside_stop();
    }
};
function createKeyPredicate(keyFilter) {
    if (typeof keyFilter === "function") return keyFilter;
    else if (typeof keyFilter === "string") return (event)=>event.key === keyFilter;
    else if (Array.isArray(keyFilter)) return (event)=>keyFilter.includes(event.key);
    return ()=>true;
}
function onKeyStroke(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
        key = args[0];
        handler = args[1];
        options = args[2];
    } else if (args.length === 2) {
        if (typeof args[1] === "object") {
            key = true;
            handler = args[0];
            options = args[1];
        } else {
            key = args[0];
            handler = args[1];
        }
    } else {
        key = true;
        handler = args[0];
    }
    const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e)=>{
        if (e.repeat && (0, _shared.toValue)(dedupe)) return;
        if (predicate(e)) handler(e);
    };
    return useEventListener(target, eventName, listener, passive);
}
const vOnKeyStroke = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        var _a, _b;
        const keys = (_b = (_a = binding.arg) == null ? void 0 : _a.split(",")) != null ? _b : true;
        if (typeof binding.value === "function") onKeyStroke(keys, binding.value, {
            target: el
        });
        else {
            const [handler, options] = binding.value;
            onKeyStroke(keys, handler, {
                target: el,
                ...options
            });
        }
    }
};
const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
    var _a, _b;
    const elementRef = (0, _vueDemi.computed)(()=>unrefElement(target));
    let timeout;
    function clear() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
        }
    }
    function onDown(ev) {
        var _a2, _b2, _c, _d;
        if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value) return;
        clear();
        if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent) ev.preventDefault();
        if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop) ev.stopPropagation();
        timeout = setTimeout(()=>handler(ev), (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY);
    }
    const listenerOptions = {
        capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
        once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
    };
    useEventListener(elementRef, "pointerdown", onDown, listenerOptions);
    useEventListener(elementRef, [
        "pointerup",
        "pointerleave"
    ], clear, listenerOptions);
}
const OnLongPress = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "OnLongPress",
    props: [
        "as",
        "options"
    ],
    emits: [
        "trigger"
    ],
    setup (props, { slots, emit }) {
        const target = (0, _vueDemi.ref)();
        onLongPress(target, (e)=>{
            emit("trigger", e);
        }, props.options);
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default());
        };
    }
});
const vOnLongPress = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") onLongPress(el, binding.value, {
            modifiers: binding.modifiers
        });
        else onLongPress(el, ...binding.value);
    }
};
const UseActiveElement = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseActiveElement",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            element: (0, _core.useActiveElement)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseBattery = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseBattery",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useBattery)(props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseBrowserLocation = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseBrowserLocation",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useBrowserLocation)());
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
    if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
}
function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
    boolean: {
        read: (v)=>v === "true",
        write: (v)=>String(v)
    },
    object: {
        read: (v)=>JSON.parse(v),
        write: (v)=>JSON.stringify(v)
    },
    number: {
        read: (v)=>Number.parseFloat(v),
        write: (v)=>String(v)
    },
    any: {
        read: (v)=>v,
        write: (v)=>String(v)
    },
    string: {
        read: (v)=>v,
        write: (v)=>String(v)
    },
    map: {
        read: (v)=>new Map(JSON.parse(v)),
        write: (v)=>JSON.stringify(Array.from(v.entries()))
    },
    set: {
        read: (v)=>new Set(JSON.parse(v)),
        write: (v)=>JSON.stringify(Array.from(v))
    },
    date: {
        read: (v)=>new Date(v),
        write: (v)=>v.toISOString()
    }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
    var _a;
    const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window1 = defaultWindow, eventFilter, onError = (e)=>{
        console.error(e);
    } } = options;
    const data = (shallow ? (0, _vueDemi.shallowRef) : (0, _vueDemi.ref))(defaults);
    if (!storage) try {
        storage = getSSRHandler("getDefaultStorage", ()=>{
            var _a2;
            return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
    } catch (e) {
        onError(e);
    }
    if (!storage) return data;
    const rawInit = (0, _shared.toValue)(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = (0, _shared.pausableWatch)(data, ()=>write(data.value), {
        flush,
        deep,
        eventFilter
    });
    if (window1 && listenToStorageChanges) {
        useEventListener(window1, "storage", update);
        useEventListener(window1, customStorageEventName, updateFromCustomEvent);
    }
    update();
    return data;
    function write(v) {
        try {
            if (v == null) storage.removeItem(key);
            else {
                const serialized = serializer.write(v);
                const oldValue = storage.getItem(key);
                if (oldValue !== serialized) {
                    storage.setItem(key, serialized);
                    if (window1) window1.dispatchEvent(new CustomEvent(customStorageEventName, {
                        detail: {
                            key,
                            oldValue,
                            newValue: serialized,
                            storageArea: storage
                        }
                    }));
                }
            }
        } catch (e) {
            onError(e);
        }
    }
    function read(event) {
        const rawValue = event ? event.newValue : storage.getItem(key);
        if (rawValue == null) {
            if (writeDefaults && rawInit !== null) storage.setItem(key, serializer.write(rawInit));
            return rawInit;
        } else if (!event && mergeDefaults) {
            const value = serializer.read(rawValue);
            if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
            else if (type === "object" && !Array.isArray(value)) return {
                ...rawInit,
                ...value
            };
            return value;
        } else if (typeof rawValue !== "string") return rawValue;
        else return serializer.read(rawValue);
    }
    function updateFromCustomEvent(event) {
        update(event.detail);
    }
    function update(event) {
        if (event && event.storageArea !== storage) return;
        if (event && event.key == null) {
            data.value = rawInit;
            return;
        }
        if (event && event.key !== key) return;
        pauseWatch();
        try {
            if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
        } catch (e) {
            onError(e);
        } finally{
            if (event) (0, _vueDemi.nextTick)(resumeWatch);
            else resumeWatch();
        }
    }
}
function useMounted() {
    const isMounted = (0, _vueDemi.ref)(false);
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onMounted)(()=>{
        isMounted.value = true;
    });
    return isMounted;
}
function useSupported(callback) {
    const isMounted = useMounted();
    return (0, _vueDemi.computed)(()=>{
        isMounted.value;
        return Boolean(callback());
    });
}
function useMediaQuery(query, options = {}) {
    const { window: window1 = defaultWindow } = options;
    const isSupported = useSupported(()=>window1 && "matchMedia" in window1 && typeof window1.matchMedia === "function");
    let mediaQuery;
    const matches = (0, _vueDemi.ref)(false);
    const handler = (event)=>{
        matches.value = event.matches;
    };
    const cleanup = ()=>{
        if (!mediaQuery) return;
        if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);
        else mediaQuery.removeListener(handler);
    };
    const stopWatch = (0, _vueDemi.watchEffect)(()=>{
        if (!isSupported.value) return;
        cleanup();
        mediaQuery = window1.matchMedia((0, _shared.toValue)(query));
        if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);
        else mediaQuery.addListener(handler);
        matches.value = mediaQuery.matches;
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        stopWatch();
        cleanup();
        mediaQuery = void 0;
    });
    return matches;
}
function usePreferredDark(options) {
    return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
    const { selector = "html", attribute = "class", initialValue = "auto", window: window1 = defaultWindow, storage, storageKey = "vueuse-color-scheme", listenToStorageChanges = true, storageRef, emitAuto, disableTransition = true } = options;
    const modes = {
        auto: "",
        light: "light",
        dark: "dark",
        ...options.modes || {}
    };
    const preferredDark = usePreferredDark({
        window: window1
    });
    const system = (0, _vueDemi.computed)(()=>preferredDark.value ? "dark" : "light");
    const store = storageRef || (storageKey == null ? (0, _shared.toRef)(initialValue) : useStorage(storageKey, initialValue, storage, {
        window: window1,
        listenToStorageChanges
    }));
    const state = (0, _vueDemi.computed)(()=>store.value === "auto" ? system.value : store.value);
    const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value)=>{
        const el = typeof selector2 === "string" ? window1 == null ? void 0 : window1.document.querySelector(selector2) : unrefElement(selector2);
        if (!el) return;
        let style;
        if (disableTransition) {
            style = window1.document.createElement("style");
            const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
            style.appendChild(document.createTextNode(styleString));
            window1.document.head.appendChild(style);
        }
        if (attribute2 === "class") {
            const current = value.split(/\s/g);
            Object.values(modes).flatMap((i)=>(i || "").split(/\s/g)).filter(Boolean).forEach((v)=>{
                if (current.includes(v)) el.classList.add(v);
                else el.classList.remove(v);
            });
        } else el.setAttribute(attribute2, value);
        if (disableTransition) {
            window1.getComputedStyle(style).opacity;
            document.head.removeChild(style);
        }
    });
    function defaultOnChanged(mode) {
        var _a;
        updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
    }
    function onChanged(mode) {
        if (options.onChanged) options.onChanged(mode, defaultOnChanged);
        else defaultOnChanged(mode);
    }
    (0, _vueDemi.watch)(state, onChanged, {
        flush: "post",
        immediate: true
    });
    (0, _shared.tryOnMounted)(()=>onChanged(state.value));
    const auto = (0, _vueDemi.computed)({
        get () {
            return emitAuto ? store.value : state.value;
        },
        set (v) {
            store.value = v;
        }
    });
    try {
        return Object.assign(auto, {
            store,
            system,
            state
        });
    } catch (e) {
        return auto;
    }
}
const UseColorMode = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseColorMode",
    props: [
        "selector",
        "attribute",
        "modes",
        "onChanged",
        "storageKey",
        "storage",
        "emitAuto"
    ],
    setup (props, { slots }) {
        const mode = useColorMode(props);
        const data = (0, _vueDemi.reactive)({
            mode,
            system: mode.system,
            store: mode.store
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDark = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDark",
    props: [
        "selector",
        "attribute",
        "valueDark",
        "valueLight",
        "onChanged",
        "storageKey",
        "storage"
    ],
    setup (props, { slots }) {
        const isDark = (0, _core.useDark)(props);
        const data = (0, _vueDemi.reactive)({
            isDark,
            toggleDark: (0, _shared.useToggle)(isDark)
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDeviceMotion = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDeviceMotion",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useDeviceMotion)());
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDeviceOrientation = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDeviceOrientation",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useDeviceOrientation)());
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDevicePixelRatio = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDevicePixelRatio",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            pixelRatio: (0, _core.useDevicePixelRatio)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDevicesList = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDevicesList",
    props: [
        "onUpdated",
        "requestPermissions",
        "constraints"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useDevicesList)(props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDocumentVisibility = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDocumentVisibility",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            visibility: (0, _core.useDocumentVisibility)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseDraggable = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseDraggable",
    props: [
        "storageKey",
        "storageType",
        "initialValue",
        "exact",
        "preventDefault",
        "stopPropagation",
        "pointerTypes",
        "as",
        "handle",
        "axis",
        "onStart",
        "onMove",
        "onEnd"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const handle = (0, _vueDemi.computed)(()=>{
            var _a;
            return (_a = props.handle) != null ? _a : target.value;
        });
        const storageValue = props.storageKey && (0, _core.useStorage)(props.storageKey, (0, _shared.toValue)(props.initialValue) || {
            x: 0,
            y: 0
        }, (0, _core.isClient) ? props.storageType === "session" ? sessionStorage : localStorage : void 0);
        const initialValue = storageValue || props.initialValue || {
            x: 0,
            y: 0
        };
        const onEnd = (position, event)=>{
            var _a;
            (_a = props.onEnd) == null || _a.call(props, position, event);
            if (!storageValue) return;
            storageValue.value.x = position.x;
            storageValue.value.y = position.y;
        };
        const data = (0, _vueDemi.reactive)((0, _core.useDraggable)(target, {
            ...props,
            handle,
            initialValue,
            onEnd
        }));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target,
                style: `touch-action:none;${data.style}`
            }, slots.default(data));
        };
    }
});
const UseElementBounding = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseElementBounding",
    props: [
        "box",
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.useElementBounding)(target));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
function useElementHover(el, options = {}) {
    const { delayEnter = 0, delayLeave = 0, window: window1 = defaultWindow } = options;
    const isHovered = (0, _vueDemi.ref)(false);
    let timer;
    const toggle = (entering)=>{
        const delay = entering ? delayEnter : delayLeave;
        if (timer) {
            clearTimeout(timer);
            timer = void 0;
        }
        if (delay) timer = setTimeout(()=>isHovered.value = entering, delay);
        else isHovered.value = entering;
    };
    if (!window1) return isHovered;
    useEventListener(el, "mouseenter", ()=>toggle(true), {
        passive: true
    });
    useEventListener(el, "mouseleave", ()=>toggle(false), {
        passive: true
    });
    return isHovered;
}
const vElementHover = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") {
            const isHovered = useElementHover(el);
            (0, _vueDemi.watch)(isHovered, (v)=>binding.value(v));
        }
    }
};
const UseElementSize = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseElementSize",
    props: [
        "width",
        "height",
        "box",
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.useElementSize)(target, {
            width: props.width,
            height: props.height
        }, {
            box: props.box
        }));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
function useResizeObserver(target, callback, options = {}) {
    const { window: window1 = defaultWindow, ...observerOptions } = options;
    let observer;
    const isSupported = useSupported(()=>window1 && "ResizeObserver" in window1);
    const cleanup = ()=>{
        if (observer) {
            observer.disconnect();
            observer = void 0;
        }
    };
    const targets = (0, _vueDemi.computed)(()=>Array.isArray(target) ? target.map((el)=>unrefElement(el)) : [
            unrefElement(target)
        ]);
    const stopWatch = (0, _vueDemi.watch)(targets, (els)=>{
        cleanup();
        if (isSupported.value && window1) {
            observer = new ResizeObserver(callback);
            for (const _el of els)_el && observer.observe(_el, observerOptions);
        }
    }, {
        immediate: true,
        flush: "post",
        deep: true
    });
    const stop = ()=>{
        cleanup();
        stopWatch();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        stop
    };
}
function useElementSize(target, initialSize = {
    width: 0,
    height: 0
}, options = {}) {
    const { window: window1 = defaultWindow, box = "content-box" } = options;
    const isSVG = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
    });
    const width = (0, _vueDemi.ref)(initialSize.width);
    const height = (0, _vueDemi.ref)(initialSize.height);
    useResizeObserver(target, ([entry])=>{
        const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
        if (window1 && isSVG.value) {
            const $elem = unrefElement(target);
            if ($elem) {
                const styles = window1.getComputedStyle($elem);
                width.value = Number.parseFloat(styles.width);
                height.value = Number.parseFloat(styles.height);
            }
        } else if (boxSize) {
            const formatBoxSize = Array.isArray(boxSize) ? boxSize : [
                boxSize
            ];
            width.value = formatBoxSize.reduce((acc, { inlineSize })=>acc + inlineSize, 0);
            height.value = formatBoxSize.reduce((acc, { blockSize })=>acc + blockSize, 0);
        } else {
            width.value = entry.contentRect.width;
            height.value = entry.contentRect.height;
        }
    }, options);
    (0, _vueDemi.watch)(()=>unrefElement(target), (ele)=>{
        width.value = ele ? initialSize.width : 0;
        height.value = ele ? initialSize.height : 0;
    });
    return {
        width,
        height
    };
}
const vElementSize = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        var _a;
        const handler = typeof binding.value === "function" ? binding.value : (_a = binding.value) == null ? void 0 : _a[0];
        const options = typeof binding.value === "function" ? [] : binding.value.slice(1);
        const { width, height } = useElementSize(el, ...options);
        (0, _vueDemi.watch)([
            width,
            height
        ], ([width2, height2])=>handler({
                width: width2,
                height: height2
            }));
    }
};
const UseElementVisibility = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseElementVisibility",
    props: [
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)({
            isVisible: (0, _core.useElementVisibility)(target)
        });
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
function useIntersectionObserver(target, callback, options = {}) {
    const { root, rootMargin = "0px", threshold = 0.1, window: window1 = defaultWindow, immediate = true } = options;
    const isSupported = useSupported(()=>window1 && "IntersectionObserver" in window1);
    const targets = (0, _vueDemi.computed)(()=>{
        const _target = (0, _shared.toValue)(target);
        return (Array.isArray(_target) ? _target : [
            _target
        ]).map(unrefElement).filter((0, _shared.notNullish));
    });
    let cleanup = (0, _shared.noop);
    const isActive = (0, _vueDemi.ref)(immediate);
    const stopWatch = isSupported.value ? (0, _vueDemi.watch)(()=>[
            targets.value,
            unrefElement(root),
            isActive.value
        ], ([targets2, root2])=>{
        cleanup();
        if (!isActive.value) return;
        if (!targets2.length) return;
        const observer = new IntersectionObserver(callback, {
            root: unrefElement(root2),
            rootMargin,
            threshold
        });
        targets2.forEach((el)=>el && observer.observe(el));
        cleanup = ()=>{
            observer.disconnect();
            cleanup = (0, _shared.noop);
        };
    }, {
        immediate,
        flush: "post"
    }) : (0, _shared.noop);
    const stop = ()=>{
        cleanup();
        stopWatch();
        isActive.value = false;
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        isActive,
        pause () {
            cleanup();
            isActive.value = false;
        },
        resume () {
            isActive.value = true;
        },
        stop
    };
}
function useElementVisibility(element, { window: window1 = defaultWindow, scrollTarget } = {}) {
    const elementIsVisible = (0, _vueDemi.ref)(false);
    useIntersectionObserver(element, ([{ isIntersecting }])=>{
        elementIsVisible.value = isIntersecting;
    }, {
        root: scrollTarget,
        window: window1,
        threshold: 0
    });
    return elementIsVisible;
}
const vElementVisibility = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") {
            const handler = binding.value;
            const isVisible = useElementVisibility(el);
            (0, _vueDemi.watch)(isVisible, (v)=>handler(v), {
                immediate: true
            });
        } else {
            const [handler, options] = binding.value;
            const isVisible = useElementVisibility(el, options);
            (0, _vueDemi.watch)(isVisible, (v)=>handler(v), {
                immediate: true
            });
        }
    }
};
const UseEyeDropper = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseEyeDropper",
    props: {
        sRGBHex: String
    },
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useEyeDropper)());
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseFullscreen = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseFullscreen",
    props: [
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.useFullscreen)(target));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
const UseGeolocation = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseGeolocation",
    props: [
        "enableHighAccuracy",
        "maximumAge",
        "timeout",
        "navigator"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useGeolocation)(props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseIdle = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseIdle",
    props: [
        "timeout",
        "events",
        "listenForVisibilityChange",
        "initialState"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useIdle)(props.timeout, props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
function useAsyncState(promise, initialState, options) {
    const { immediate = true, delay = 0, onError = (0, _shared.noop), onSuccess = (0, _shared.noop), resetOnExecute = true, shallow = true, throwError } = options != null ? options : {};
    const state = shallow ? (0, _vueDemi.shallowRef)(initialState) : (0, _vueDemi.ref)(initialState);
    const isReady = (0, _vueDemi.ref)(false);
    const isLoading = (0, _vueDemi.ref)(false);
    const error = (0, _vueDemi.shallowRef)(void 0);
    async function execute(delay2 = 0, ...args) {
        if (resetOnExecute) state.value = initialState;
        error.value = void 0;
        isReady.value = false;
        isLoading.value = true;
        if (delay2 > 0) await (0, _shared.promiseTimeout)(delay2);
        const _promise = typeof promise === "function" ? promise(...args) : promise;
        try {
            const data = await _promise;
            state.value = data;
            isReady.value = true;
            onSuccess(data);
        } catch (e) {
            error.value = e;
            onError(e);
            if (throwError) throw e;
        } finally{
            isLoading.value = false;
        }
        return state.value;
    }
    if (immediate) execute(delay);
    const shell = {
        state,
        isReady,
        isLoading,
        error,
        execute
    };
    function waitUntilIsLoaded() {
        return new Promise((resolve, reject)=>{
            (0, _shared.until)(isLoading).toBe(false).then(()=>resolve(shell)).catch(reject);
        });
    }
    return {
        ...shell,
        then (onFulfilled, onRejected) {
            return waitUntilIsLoaded().then(onFulfilled, onRejected);
        }
    };
}
async function loadImage(options) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy } = options;
        img.src = src;
        if (srcset) img.srcset = srcset;
        if (sizes) img.sizes = sizes;
        if (clazz) img.className = clazz;
        if (loading) img.loading = loading;
        if (crossorigin) img.crossOrigin = crossorigin;
        if (referrerPolicy) img.referrerPolicy = referrerPolicy;
        img.onload = ()=>resolve(img);
        img.onerror = reject;
    });
}
function useImage(options, asyncStateOptions = {}) {
    const state = useAsyncState(()=>loadImage((0, _shared.toValue)(options)), void 0, {
        resetOnExecute: true,
        ...asyncStateOptions
    });
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(options), ()=>state.execute(asyncStateOptions.delay), {
        deep: true
    });
    return state;
}
const UseImage = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseImage",
    props: [
        "src",
        "srcset",
        "sizes",
        "as",
        "alt",
        "class",
        "loading",
        "crossorigin",
        "referrerPolicy"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)(useImage(props));
        return ()=>{
            if (data.isLoading && slots.loading) return slots.loading(data);
            else if (data.error && slots.error) return slots.error(data.error);
            if (slots.default) return slots.default(data);
            return (0, _vueDemi.h)(props.as || "img", props);
        };
    }
});
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
    const { throttle = 0, idle = 200, onStop = (0, _shared.noop), onScroll = (0, _shared.noop), offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, eventListenerOptions = {
        capture: false,
        passive: true
    }, behavior = "auto", window: window1 = defaultWindow } = options;
    const internalX = (0, _vueDemi.ref)(0);
    const internalY = (0, _vueDemi.ref)(0);
    const x = (0, _vueDemi.computed)({
        get () {
            return internalX.value;
        },
        set (x2) {
            scrollTo(x2, void 0);
        }
    });
    const y = (0, _vueDemi.computed)({
        get () {
            return internalY.value;
        },
        set (y2) {
            scrollTo(void 0, y2);
        }
    });
    function scrollTo(_x, _y) {
        var _a, _b, _c;
        if (!window1) return;
        const _element = (0, _shared.toValue)(element);
        if (!_element) return;
        (_c = _element instanceof Document ? window1.document.body : _element) == null || _c.scrollTo({
            top: (_a = (0, _shared.toValue)(_y)) != null ? _a : y.value,
            left: (_b = (0, _shared.toValue)(_x)) != null ? _b : x.value,
            behavior: (0, _shared.toValue)(behavior)
        });
    }
    const isScrolling = (0, _vueDemi.ref)(false);
    const arrivedState = (0, _vueDemi.reactive)({
        left: true,
        right: false,
        top: true,
        bottom: false
    });
    const directions = (0, _vueDemi.reactive)({
        left: false,
        right: false,
        top: false,
        bottom: false
    });
    const onScrollEnd = (e)=>{
        if (!isScrolling.value) return;
        isScrolling.value = false;
        directions.left = false;
        directions.right = false;
        directions.top = false;
        directions.bottom = false;
        onStop(e);
    };
    const onScrollEndDebounced = (0, _shared.useDebounceFn)(onScrollEnd, throttle + idle);
    const setArrivedState = (target)=>{
        var _a;
        if (!window1) return;
        const el = target.document ? target.document.documentElement : (_a = target.documentElement) != null ? _a : target;
        const { display, flexDirection } = getComputedStyle(el);
        const scrollLeft = el.scrollLeft;
        directions.left = scrollLeft < internalX.value;
        directions.right = scrollLeft > internalX.value;
        const left = Math.abs(scrollLeft) <= 0 + (offset.left || 0);
        const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "row-reverse") {
            arrivedState.left = right;
            arrivedState.right = left;
        } else {
            arrivedState.left = left;
            arrivedState.right = right;
        }
        internalX.value = scrollLeft;
        let scrollTop = el.scrollTop;
        if (target === window1.document && !scrollTop) scrollTop = window1.document.body.scrollTop;
        directions.top = scrollTop < internalY.value;
        directions.bottom = scrollTop > internalY.value;
        const top = Math.abs(scrollTop) <= 0 + (offset.top || 0);
        const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "column-reverse") {
            arrivedState.top = bottom;
            arrivedState.bottom = top;
        } else {
            arrivedState.top = top;
            arrivedState.bottom = bottom;
        }
        internalY.value = scrollTop;
    };
    const onScrollHandler = (e)=>{
        var _a;
        if (!window1) return;
        const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
        setArrivedState(eventTarget);
        isScrolling.value = true;
        onScrollEndDebounced(e);
        onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? (0, _shared.useThrottleFn)(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
    useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
    return {
        x,
        y,
        isScrolling,
        arrivedState,
        directions,
        measure () {
            const _element = (0, _shared.toValue)(element);
            if (window1 && _element) setArrivedState(_element);
        }
    };
}
function resolveElement(el) {
    if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
    if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
    return el;
}
function useInfiniteScroll(element, onLoadMore, options = {}) {
    var _a;
    const { direction = "bottom", interval = 100 } = options;
    const state = (0, _vueDemi.reactive)(useScroll(element, {
        ...options,
        offset: {
            [direction]: (_a = options.distance) != null ? _a : 0,
            ...options.offset
        }
    }));
    const promise = (0, _vueDemi.ref)();
    const isLoading = (0, _vueDemi.computed)(()=>!!promise.value);
    const observedElement = (0, _vueDemi.computed)(()=>{
        return resolveElement((0, _shared.toValue)(element));
    });
    const isElementVisible = useElementVisibility(observedElement);
    function checkAndLoad() {
        state.measure();
        if (!observedElement.value || !isElementVisible.value) return;
        const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
        const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
        if (state.arrivedState[direction] || isNarrower) {
            if (!promise.value) promise.value = Promise.all([
                onLoadMore(state),
                new Promise((resolve)=>setTimeout(resolve, interval))
            ]).finally(()=>{
                promise.value = null;
                (0, _vueDemi.nextTick)(()=>checkAndLoad());
            });
        }
    }
    (0, _vueDemi.watch)(()=>[
            state.arrivedState[direction],
            isElementVisible.value
        ], checkAndLoad, {
        immediate: true
    });
    return {
        isLoading
    };
}
const vInfiniteScroll = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") useInfiniteScroll(el, binding.value);
        else useInfiniteScroll(el, ...binding.value);
    }
};
const vIntersectionObserver = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") useIntersectionObserver(el, binding.value);
        else useIntersectionObserver(el, ...binding.value);
    }
};
const UseMouse = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseMouse",
    props: [
        "touch",
        "resetOnTouchEnds",
        "initialValue"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useMouse)(props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseMouseInElement = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseMouseElement",
    props: [
        "handleOutside",
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.useMouseInElement)(target, props));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
const UseMousePressed = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseMousePressed",
    props: [
        "touch",
        "initialValue",
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.useMousePressed)({
            ...props,
            target
        }));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
const UseNetwork = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseNetwork",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useNetwork)());
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseNow = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseNow",
    props: [
        "interval"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useNow)({
            ...props,
            controls: true
        }));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseObjectUrl = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseObjectUrl",
    props: [
        "object"
    ],
    setup (props, { slots }) {
        const object = (0, _shared.toRef)(props, "object");
        const url = (0, _core.useObjectUrl)(object);
        return ()=>{
            if (slots.default && url.value) return slots.default(url);
        };
    }
});
const UseOffsetPagination = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseOffsetPagination",
    props: [
        "total",
        "page",
        "pageSize",
        "onPageChange",
        "onPageSizeChange",
        "onPageCountChange"
    ],
    emits: [
        "page-change",
        "page-size-change",
        "page-count-change"
    ],
    setup (props, { slots, emit }) {
        const data = (0, _vueDemi.reactive)((0, _core.useOffsetPagination)({
            ...props,
            onPageChange (...args) {
                var _a;
                (_a = props.onPageChange) == null || _a.call(props, ...args);
                emit("page-change", ...args);
            },
            onPageSizeChange (...args) {
                var _a;
                (_a = props.onPageSizeChange) == null || _a.call(props, ...args);
                emit("page-size-change", ...args);
            },
            onPageCountChange (...args) {
                var _a;
                (_a = props.onPageCountChange) == null || _a.call(props, ...args);
                emit("page-count-change", ...args);
            }
        }));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseOnline = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseOnline",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            isOnline: (0, _core.useOnline)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePageLeave = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePageLeave",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            isLeft: (0, _core.usePageLeave)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePointer = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePointer",
    props: [
        "pointerTypes",
        "initialValue",
        "target"
    ],
    setup (props, { slots }) {
        const el = (0, _vueDemi.ref)(null);
        const data = (0, _vueDemi.reactive)((0, _core.usePointer)({
            ...props,
            target: props.target === "self" ? el : defaultWindow
        }));
        return ()=>{
            if (slots.default) return slots.default(data, {
                ref: el
            });
        };
    }
});
const UsePointerLock = /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePointerLock",
    props: [
        "as"
    ],
    setup (props, { slots }) {
        const target = (0, _vueDemi.ref)();
        const data = (0, _vueDemi.reactive)((0, _core.usePointerLock)(target));
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)(props.as || "div", {
                ref: target
            }, slots.default(data));
        };
    }
});
const UsePreferredColorScheme = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePreferredColorScheme",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            colorScheme: (0, _core.usePreferredColorScheme)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePreferredContrast = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePreferredContrast",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            contrast: (0, _core.usePreferredContrast)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePreferredDark = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePreferredDark",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            prefersDark: (0, _core.usePreferredDark)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePreferredLanguages = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePreferredLanguages",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            languages: (0, _core.usePreferredLanguages)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UsePreferredReducedMotion = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UsePreferredReducedMotion",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            motion: (0, _core.usePreferredReducedMotion)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
function useMutationObserver(target, callback, options = {}) {
    const { window: window1 = defaultWindow, ...mutationOptions } = options;
    let observer;
    const isSupported = useSupported(()=>window1 && "MutationObserver" in window1);
    const cleanup = ()=>{
        if (observer) {
            observer.disconnect();
            observer = void 0;
        }
    };
    const stopWatch = (0, _vueDemi.watch)(()=>unrefElement(target), (el)=>{
        cleanup();
        if (isSupported.value && window1 && el) {
            observer = new MutationObserver(callback);
            observer.observe(el, mutationOptions);
        }
    }, {
        immediate: true
    });
    const stop = ()=>{
        cleanup();
        stopWatch();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        stop
    };
}
function useCssVar(prop, target, options = {}) {
    const { window: window1 = defaultWindow, initialValue = "", observe = false } = options;
    const variable = (0, _vueDemi.ref)(initialValue);
    const elRef = (0, _vueDemi.computed)(()=>{
        var _a;
        return unrefElement(target) || ((_a = window1 == null ? void 0 : window1.document) == null ? void 0 : _a.documentElement);
    });
    function updateCssVar() {
        var _a;
        const key = (0, _shared.toValue)(prop);
        const el = (0, _shared.toValue)(elRef);
        if (el && window1) {
            const value = (_a = window1.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
            variable.value = value || initialValue;
        }
    }
    if (observe) useMutationObserver(elRef, updateCssVar, {
        attributeFilter: [
            "style",
            "class"
        ],
        window: window1
    });
    (0, _vueDemi.watch)([
        elRef,
        ()=>(0, _shared.toValue)(prop)
    ], updateCssVar, {
        immediate: true
    });
    (0, _vueDemi.watch)(variable, (val)=>{
        var _a;
        if ((_a = elRef.value) == null ? void 0 : _a.style) elRef.value.style.setProperty((0, _shared.toValue)(prop), val);
    });
    return variable;
}
const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
    const top = (0, _vueDemi.ref)("");
    const right = (0, _vueDemi.ref)("");
    const bottom = (0, _vueDemi.ref)("");
    const left = (0, _vueDemi.ref)("");
    if (0, _shared.isClient) {
        const topCssVar = useCssVar(topVarName);
        const rightCssVar = useCssVar(rightVarName);
        const bottomCssVar = useCssVar(bottomVarName);
        const leftCssVar = useCssVar(leftVarName);
        topCssVar.value = "env(safe-area-inset-top, 0px)";
        rightCssVar.value = "env(safe-area-inset-right, 0px)";
        bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
        leftCssVar.value = "env(safe-area-inset-left, 0px)";
        update();
        useEventListener("resize", (0, _shared.useDebounceFn)(update));
    }
    function update() {
        top.value = getValue(topVarName);
        right.value = getValue(rightVarName);
        bottom.value = getValue(bottomVarName);
        left.value = getValue(leftVarName);
    }
    return {
        top,
        right,
        bottom,
        left,
        update
    };
}
function getValue(position) {
    return getComputedStyle(document.documentElement).getPropertyValue(position);
}
const UseScreenSafeArea = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseScreenSafeArea",
    props: {
        top: Boolean,
        right: Boolean,
        bottom: Boolean,
        left: Boolean
    },
    setup (props, { slots }) {
        const { top, right, bottom, left } = useScreenSafeArea();
        return ()=>{
            if (slots.default) return (0, _vueDemi.h)("div", {
                style: {
                    paddingTop: props.top ? top.value : "",
                    paddingRight: props.right ? right.value : "",
                    paddingBottom: props.bottom ? bottom.value : "",
                    paddingLeft: props.left ? left.value : "",
                    boxSizing: "border-box",
                    maxHeight: "100vh",
                    maxWidth: "100vw",
                    overflow: "auto"
                }
            }, slots.default());
        };
    }
});
const vScroll = {
    [(0, _shared.directiveHooks).mounted] (el, binding) {
        if (typeof binding.value === "function") {
            const handler = binding.value;
            const state = useScroll(el, {
                onScroll () {
                    handler(state);
                },
                onStop () {
                    handler(state);
                }
            });
        } else {
            const [handler, options] = binding.value;
            const state = useScroll(el, {
                ...options,
                onScroll (e) {
                    var _a;
                    (_a = options.onScroll) == null || _a.call(options, e);
                    handler(state);
                },
                onStop (e) {
                    var _a;
                    (_a = options.onStop) == null || _a.call(options, e);
                    handler(state);
                }
            });
        }
    }
};
function checkOverflowScroll(ele) {
    const style = window.getComputedStyle(ele);
    if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
    else {
        const parent = ele.parentNode;
        if (!parent || parent.tagName === "BODY") return false;
        return checkOverflowScroll(parent);
    }
}
function preventDefault(rawEvent) {
    const e = rawEvent || window.event;
    const _target = e.target;
    if (checkOverflowScroll(_target)) return false;
    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
}
function useScrollLock(element, initialState = false) {
    const isLocked = (0, _vueDemi.ref)(initialState);
    let stopTouchMoveListener = null;
    let initialOverflow;
    (0, _vueDemi.watch)((0, _shared.toRef)(element), (el)=>{
        const target = resolveElement((0, _shared.toValue)(el));
        if (target) {
            const ele = target;
            initialOverflow = ele.style.overflow;
            if (isLocked.value) ele.style.overflow = "hidden";
        }
    }, {
        immediate: true
    });
    const lock = ()=>{
        const el = resolveElement((0, _shared.toValue)(element));
        if (!el || isLocked.value) return;
        if (0, _shared.isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e)=>{
            preventDefault(e);
        }, {
            passive: false
        });
        el.style.overflow = "hidden";
        isLocked.value = true;
    };
    const unlock = ()=>{
        const el = resolveElement((0, _shared.toValue)(element));
        if (!el || !isLocked.value) return;
        (0, _shared.isIOS) && (stopTouchMoveListener == null || stopTouchMoveListener());
        el.style.overflow = initialOverflow;
        isLocked.value = false;
    };
    (0, _shared.tryOnScopeDispose)(unlock);
    return (0, _vueDemi.computed)({
        get () {
            return isLocked.value;
        },
        set (v) {
            if (v) lock();
            else unlock();
        }
    });
}
function onScrollLock() {
    let isMounted = false;
    const state = (0, _vueDemi.ref)(false);
    return (el, binding)=>{
        state.value = binding.value;
        if (isMounted) return;
        isMounted = true;
        const isLocked = useScrollLock(el, binding.value);
        (0, _vueDemi.watch)(state, (v)=>isLocked.value = v);
    };
}
const vScrollLock = onScrollLock();
const UseTimeAgo = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseTimeAgo",
    props: [
        "time",
        "updateInterval",
        "max",
        "fullDateFormatter",
        "messages",
        "showSecond"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useTimeAgo)(()=>props.time, {
            ...props,
            controls: true
        }));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseTimestamp = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseTimestamp",
    props: [
        "immediate",
        "interval",
        "offset"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useTimestamp)({
            ...props,
            controls: true
        }));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseVirtualList = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseVirtualList",
    props: [
        "list",
        "options",
        "height"
    ],
    setup (props, { slots, expose }) {
        const { list: listRef } = (0, _vueDemi.toRefs)(props);
        const { list, containerProps, wrapperProps, scrollTo } = (0, _core.useVirtualList)(listRef, props.options);
        expose({
            scrollTo
        });
        typeof containerProps.style === "object" && !Array.isArray(containerProps.style) && (containerProps.style.height = props.height || "300px");
        return ()=>(0, _vueDemi.h)("div", {
                ...containerProps
            }, [
                (0, _vueDemi.h)("div", {
                    ...wrapperProps.value
                }, list.value.map((item)=>(0, _vueDemi.h)("div", {
                        style: {
                            overFlow: "hidden",
                            height: item.height
                        }
                    }, slots.default ? slots.default(item) : "Please set content!")))
            ]);
    }
});
const UseWindowFocus = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseWindowFocus",
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)({
            focused: (0, _core.useWindowFocus)()
        });
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});
const UseWindowSize = /* @__PURE__ */ /* #__PURE__ */ (0, _vueDemi.defineComponent)({
    name: "UseWindowSize",
    props: [
        "initialWidth",
        "initialHeight"
    ],
    setup (props, { slots }) {
        const data = (0, _vueDemi.reactive)((0, _core.useWindowSize)(props));
        return ()=>{
            if (slots.default) return slots.default(data);
        };
    }
});

},{"vue-demi":"fRyDa","@vueuse/core":"eEHP9","@vueuse/shared":"7Qlyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRyDa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "Vue", ()=>_vue);
parcelHelpers.export(exports, "Vue2", ()=>Vue2);
parcelHelpers.export(exports, "isVue2", ()=>isVue2);
parcelHelpers.export(exports, "isVue3", ()=>isVue3);
parcelHelpers.export(exports, "install", ()=>install);
var _vue = require("vue");
parcelHelpers.exportAll(_vue, exports);
var isVue2 = false;
var isVue3 = true;
var Vue2 = undefined;
function install() {}
function set(target, key, val) {
    if (Array.isArray(target)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    target[key] = val;
    return val;
}
function del(target, key) {
    if (Array.isArray(target)) {
        target.splice(key, 1);
        return;
    }
    delete target[key];
}

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEHP9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultMagicKeysAliasMap", ()=>DefaultMagicKeysAliasMap);
parcelHelpers.export(exports, "StorageSerializers", ()=>StorageSerializers);
parcelHelpers.export(exports, "TransitionPresets", ()=>TransitionPresets);
parcelHelpers.export(exports, "asyncComputed", ()=>computedAsync);
parcelHelpers.export(exports, "breakpointsAntDesign", ()=>breakpointsAntDesign);
parcelHelpers.export(exports, "breakpointsBootstrapV5", ()=>breakpointsBootstrapV5);
parcelHelpers.export(exports, "breakpointsMasterCss", ()=>breakpointsMasterCss);
parcelHelpers.export(exports, "breakpointsPrimeFlex", ()=>breakpointsPrimeFlex);
parcelHelpers.export(exports, "breakpointsQuasar", ()=>breakpointsQuasar);
parcelHelpers.export(exports, "breakpointsSematic", ()=>breakpointsSematic);
parcelHelpers.export(exports, "breakpointsTailwind", ()=>breakpointsTailwind);
parcelHelpers.export(exports, "breakpointsVuetify", ()=>breakpointsVuetify);
parcelHelpers.export(exports, "cloneFnJSON", ()=>cloneFnJSON);
parcelHelpers.export(exports, "computedAsync", ()=>computedAsync);
parcelHelpers.export(exports, "computedInject", ()=>computedInject);
parcelHelpers.export(exports, "createFetch", ()=>createFetch);
parcelHelpers.export(exports, "createReusableTemplate", ()=>createReusableTemplate);
parcelHelpers.export(exports, "createTemplatePromise", ()=>createTemplatePromise);
parcelHelpers.export(exports, "createUnrefFn", ()=>createUnrefFn);
parcelHelpers.export(exports, "customStorageEventName", ()=>customStorageEventName);
parcelHelpers.export(exports, "defaultDocument", ()=>defaultDocument);
parcelHelpers.export(exports, "defaultLocation", ()=>defaultLocation);
parcelHelpers.export(exports, "defaultNavigator", ()=>defaultNavigator);
parcelHelpers.export(exports, "defaultWindow", ()=>defaultWindow);
parcelHelpers.export(exports, "executeTransition", ()=>executeTransition);
parcelHelpers.export(exports, "formatTimeAgo", ()=>formatTimeAgo);
parcelHelpers.export(exports, "getSSRHandler", ()=>getSSRHandler);
parcelHelpers.export(exports, "mapGamepadToXbox360Controller", ()=>mapGamepadToXbox360Controller);
parcelHelpers.export(exports, "onClickOutside", ()=>onClickOutside);
parcelHelpers.export(exports, "onKeyDown", ()=>onKeyDown);
parcelHelpers.export(exports, "onKeyPressed", ()=>onKeyPressed);
parcelHelpers.export(exports, "onKeyStroke", ()=>onKeyStroke);
parcelHelpers.export(exports, "onKeyUp", ()=>onKeyUp);
parcelHelpers.export(exports, "onLongPress", ()=>onLongPress);
parcelHelpers.export(exports, "onStartTyping", ()=>onStartTyping);
parcelHelpers.export(exports, "setSSRHandler", ()=>setSSRHandler);
parcelHelpers.export(exports, "templateRef", ()=>templateRef);
parcelHelpers.export(exports, "unrefElement", ()=>unrefElement);
parcelHelpers.export(exports, "useActiveElement", ()=>useActiveElement);
parcelHelpers.export(exports, "useAnimate", ()=>useAnimate);
parcelHelpers.export(exports, "useAsyncQueue", ()=>useAsyncQueue);
parcelHelpers.export(exports, "useAsyncState", ()=>useAsyncState);
parcelHelpers.export(exports, "useBase64", ()=>useBase64);
parcelHelpers.export(exports, "useBattery", ()=>useBattery);
parcelHelpers.export(exports, "useBluetooth", ()=>useBluetooth);
parcelHelpers.export(exports, "useBreakpoints", ()=>useBreakpoints);
parcelHelpers.export(exports, "useBroadcastChannel", ()=>useBroadcastChannel);
parcelHelpers.export(exports, "useBrowserLocation", ()=>useBrowserLocation);
parcelHelpers.export(exports, "useCached", ()=>useCached);
parcelHelpers.export(exports, "useClipboard", ()=>useClipboard);
parcelHelpers.export(exports, "useCloned", ()=>useCloned);
parcelHelpers.export(exports, "useColorMode", ()=>useColorMode);
parcelHelpers.export(exports, "useConfirmDialog", ()=>useConfirmDialog);
parcelHelpers.export(exports, "useCssVar", ()=>useCssVar);
parcelHelpers.export(exports, "useCurrentElement", ()=>useCurrentElement);
parcelHelpers.export(exports, "useCycleList", ()=>useCycleList);
parcelHelpers.export(exports, "useDark", ()=>useDark);
parcelHelpers.export(exports, "useDebouncedRefHistory", ()=>useDebouncedRefHistory);
parcelHelpers.export(exports, "useDeviceMotion", ()=>useDeviceMotion);
parcelHelpers.export(exports, "useDeviceOrientation", ()=>useDeviceOrientation);
parcelHelpers.export(exports, "useDevicePixelRatio", ()=>useDevicePixelRatio);
parcelHelpers.export(exports, "useDevicesList", ()=>useDevicesList);
parcelHelpers.export(exports, "useDisplayMedia", ()=>useDisplayMedia);
parcelHelpers.export(exports, "useDocumentVisibility", ()=>useDocumentVisibility);
parcelHelpers.export(exports, "useDraggable", ()=>useDraggable);
parcelHelpers.export(exports, "useDropZone", ()=>useDropZone);
parcelHelpers.export(exports, "useElementBounding", ()=>useElementBounding);
parcelHelpers.export(exports, "useElementByPoint", ()=>useElementByPoint);
parcelHelpers.export(exports, "useElementHover", ()=>useElementHover);
parcelHelpers.export(exports, "useElementSize", ()=>useElementSize);
parcelHelpers.export(exports, "useElementVisibility", ()=>useElementVisibility);
parcelHelpers.export(exports, "useEventBus", ()=>useEventBus);
parcelHelpers.export(exports, "useEventListener", ()=>useEventListener);
parcelHelpers.export(exports, "useEventSource", ()=>useEventSource);
parcelHelpers.export(exports, "useEyeDropper", ()=>useEyeDropper);
parcelHelpers.export(exports, "useFavicon", ()=>useFavicon);
parcelHelpers.export(exports, "useFetch", ()=>useFetch);
parcelHelpers.export(exports, "useFileDialog", ()=>useFileDialog);
parcelHelpers.export(exports, "useFileSystemAccess", ()=>useFileSystemAccess);
parcelHelpers.export(exports, "useFocus", ()=>useFocus);
parcelHelpers.export(exports, "useFocusWithin", ()=>useFocusWithin);
parcelHelpers.export(exports, "useFps", ()=>useFps);
parcelHelpers.export(exports, "useFullscreen", ()=>useFullscreen);
parcelHelpers.export(exports, "useGamepad", ()=>useGamepad);
parcelHelpers.export(exports, "useGeolocation", ()=>useGeolocation);
parcelHelpers.export(exports, "useIdle", ()=>useIdle);
parcelHelpers.export(exports, "useImage", ()=>useImage);
parcelHelpers.export(exports, "useInfiniteScroll", ()=>useInfiniteScroll);
parcelHelpers.export(exports, "useIntersectionObserver", ()=>useIntersectionObserver);
parcelHelpers.export(exports, "useKeyModifier", ()=>useKeyModifier);
parcelHelpers.export(exports, "useLocalStorage", ()=>useLocalStorage);
parcelHelpers.export(exports, "useMagicKeys", ()=>useMagicKeys);
parcelHelpers.export(exports, "useManualRefHistory", ()=>useManualRefHistory);
parcelHelpers.export(exports, "useMediaControls", ()=>useMediaControls);
parcelHelpers.export(exports, "useMediaQuery", ()=>useMediaQuery);
parcelHelpers.export(exports, "useMemoize", ()=>useMemoize);
parcelHelpers.export(exports, "useMemory", ()=>useMemory);
parcelHelpers.export(exports, "useMounted", ()=>useMounted);
parcelHelpers.export(exports, "useMouse", ()=>useMouse);
parcelHelpers.export(exports, "useMouseInElement", ()=>useMouseInElement);
parcelHelpers.export(exports, "useMousePressed", ()=>useMousePressed);
parcelHelpers.export(exports, "useMutationObserver", ()=>useMutationObserver);
parcelHelpers.export(exports, "useNavigatorLanguage", ()=>useNavigatorLanguage);
parcelHelpers.export(exports, "useNetwork", ()=>useNetwork);
parcelHelpers.export(exports, "useNow", ()=>useNow);
parcelHelpers.export(exports, "useObjectUrl", ()=>useObjectUrl);
parcelHelpers.export(exports, "useOffsetPagination", ()=>useOffsetPagination);
parcelHelpers.export(exports, "useOnline", ()=>useOnline);
parcelHelpers.export(exports, "usePageLeave", ()=>usePageLeave);
parcelHelpers.export(exports, "useParallax", ()=>useParallax);
parcelHelpers.export(exports, "useParentElement", ()=>useParentElement);
parcelHelpers.export(exports, "usePerformanceObserver", ()=>usePerformanceObserver);
parcelHelpers.export(exports, "usePermission", ()=>usePermission);
parcelHelpers.export(exports, "usePointer", ()=>usePointer);
parcelHelpers.export(exports, "usePointerLock", ()=>usePointerLock);
parcelHelpers.export(exports, "usePointerSwipe", ()=>usePointerSwipe);
parcelHelpers.export(exports, "usePreferredColorScheme", ()=>usePreferredColorScheme);
parcelHelpers.export(exports, "usePreferredContrast", ()=>usePreferredContrast);
parcelHelpers.export(exports, "usePreferredDark", ()=>usePreferredDark);
parcelHelpers.export(exports, "usePreferredLanguages", ()=>usePreferredLanguages);
parcelHelpers.export(exports, "usePreferredReducedMotion", ()=>usePreferredReducedMotion);
parcelHelpers.export(exports, "usePrevious", ()=>usePrevious);
parcelHelpers.export(exports, "useRafFn", ()=>useRafFn);
parcelHelpers.export(exports, "useRefHistory", ()=>useRefHistory);
parcelHelpers.export(exports, "useResizeObserver", ()=>useResizeObserver);
parcelHelpers.export(exports, "useScreenOrientation", ()=>useScreenOrientation);
parcelHelpers.export(exports, "useScreenSafeArea", ()=>useScreenSafeArea);
parcelHelpers.export(exports, "useScriptTag", ()=>useScriptTag);
parcelHelpers.export(exports, "useScroll", ()=>useScroll);
parcelHelpers.export(exports, "useScrollLock", ()=>useScrollLock);
parcelHelpers.export(exports, "useSessionStorage", ()=>useSessionStorage);
parcelHelpers.export(exports, "useShare", ()=>useShare);
parcelHelpers.export(exports, "useSorted", ()=>useSorted);
parcelHelpers.export(exports, "useSpeechRecognition", ()=>useSpeechRecognition);
parcelHelpers.export(exports, "useSpeechSynthesis", ()=>useSpeechSynthesis);
parcelHelpers.export(exports, "useStepper", ()=>useStepper);
parcelHelpers.export(exports, "useStorage", ()=>useStorage);
parcelHelpers.export(exports, "useStorageAsync", ()=>useStorageAsync);
parcelHelpers.export(exports, "useStyleTag", ()=>useStyleTag);
parcelHelpers.export(exports, "useSupported", ()=>useSupported);
parcelHelpers.export(exports, "useSwipe", ()=>useSwipe);
parcelHelpers.export(exports, "useTemplateRefsList", ()=>useTemplateRefsList);
parcelHelpers.export(exports, "useTextDirection", ()=>useTextDirection);
parcelHelpers.export(exports, "useTextSelection", ()=>useTextSelection);
parcelHelpers.export(exports, "useTextareaAutosize", ()=>useTextareaAutosize);
parcelHelpers.export(exports, "useThrottledRefHistory", ()=>useThrottledRefHistory);
parcelHelpers.export(exports, "useTimeAgo", ()=>useTimeAgo);
parcelHelpers.export(exports, "useTimeoutPoll", ()=>useTimeoutPoll);
parcelHelpers.export(exports, "useTimestamp", ()=>useTimestamp);
parcelHelpers.export(exports, "useTitle", ()=>useTitle);
parcelHelpers.export(exports, "useTransition", ()=>useTransition);
parcelHelpers.export(exports, "useUrlSearchParams", ()=>useUrlSearchParams);
parcelHelpers.export(exports, "useUserMedia", ()=>useUserMedia);
parcelHelpers.export(exports, "useVModel", ()=>useVModel);
parcelHelpers.export(exports, "useVModels", ()=>useVModels);
parcelHelpers.export(exports, "useVibrate", ()=>useVibrate);
parcelHelpers.export(exports, "useVirtualList", ()=>useVirtualList);
parcelHelpers.export(exports, "useWakeLock", ()=>useWakeLock);
parcelHelpers.export(exports, "useWebNotification", ()=>useWebNotification);
parcelHelpers.export(exports, "useWebSocket", ()=>useWebSocket);
parcelHelpers.export(exports, "useWebWorker", ()=>useWebWorker);
parcelHelpers.export(exports, "useWebWorkerFn", ()=>useWebWorkerFn);
parcelHelpers.export(exports, "useWindowFocus", ()=>useWindowFocus);
parcelHelpers.export(exports, "useWindowScroll", ()=>useWindowScroll);
parcelHelpers.export(exports, "useWindowSize", ()=>useWindowSize);
var _shared = require("@vueuse/shared");
parcelHelpers.exportAll(_shared, exports);
var _vueDemi = require("vue-demi");
var global = arguments[3];
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
    let options;
    if ((0, _vueDemi.isRef)(optionsOrRef)) options = {
        evaluating: optionsOrRef
    };
    else options = optionsOrRef || {};
    const { lazy = false, evaluating, shallow = true, onError = (0, _shared.noop) } = options;
    const started = (0, _vueDemi.ref)(!lazy);
    const current = shallow ? (0, _vueDemi.shallowRef)(initialState) : (0, _vueDemi.ref)(initialState);
    let counter = 0;
    (0, _vueDemi.watchEffect)(async (onInvalidate)=>{
        if (!started.value) return;
        counter++;
        const counterAtBeginning = counter;
        let hasFinished = false;
        if (evaluating) Promise.resolve().then(()=>{
            evaluating.value = true;
        });
        try {
            const result = await evaluationCallback((cancelCallback)=>{
                onInvalidate(()=>{
                    if (evaluating) evaluating.value = false;
                    if (!hasFinished) cancelCallback();
                });
            });
            if (counterAtBeginning === counter) current.value = result;
        } catch (e) {
            onError(e);
        } finally{
            if (evaluating && counterAtBeginning === counter) evaluating.value = false;
            hasFinished = true;
        }
    });
    if (lazy) return (0, _vueDemi.computed)(()=>{
        started.value = true;
        return current.value;
    });
    else return current;
}
function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
    let source = (0, _vueDemi.inject)(key);
    if (defaultSource) source = (0, _vueDemi.inject)(key, defaultSource);
    if (treatDefaultAsFactory) source = (0, _vueDemi.inject)(key, defaultSource, treatDefaultAsFactory);
    if (typeof options === "function") return (0, _vueDemi.computed)((ctx)=>options(source, ctx));
    else return (0, _vueDemi.computed)({
        get: (ctx)=>options.get(source, ctx),
        set: options.set
    });
}
function createReusableTemplate(options = {}) {
    if (!(0, _vueDemi.isVue3) && !(0, _vueDemi.version).startsWith("2.7.")) throw new Error("[VueUse] createReusableTemplate only works in Vue 2.7 or above.");
    const { inheritAttrs = true } = options;
    const render = (0, _vueDemi.shallowRef)();
    const define = /* #__PURE__ */ (0, _vueDemi.defineComponent)({
        setup (_, { slots }) {
            return ()=>{
                render.value = slots.default;
            };
        }
    });
    const reuse = /* #__PURE__ */ (0, _vueDemi.defineComponent)({
        inheritAttrs,
        setup (_, { attrs, slots }) {
            return ()=>{
                var _a;
                if (!render.value && true) throw new Error("[VueUse] Failed to find the definition of reusable template");
                const vnode = (_a = render.value) == null ? void 0 : _a.call(render, {
                    ...keysToCamelKebabCase(attrs),
                    $slots: slots
                });
                return inheritAttrs && (vnode == null ? void 0 : vnode.length) === 1 ? vnode[0] : vnode;
            };
        }
    });
    return (0, _shared.makeDestructurable)({
        define,
        reuse
    }, [
        define,
        reuse
    ]);
}
function keysToCamelKebabCase(obj) {
    const newObj = {};
    for(const key in obj)newObj[(0, _shared.camelize)(key)] = obj[key];
    return newObj;
}
function createTemplatePromise(options = {}) {
    if (!(0, _vueDemi.isVue3)) throw new Error("[VueUse] createTemplatePromise only works in Vue 3 or above.");
    let index = 0;
    const instances = (0, _vueDemi.ref)([]);
    function create(...args) {
        const props = (0, _vueDemi.shallowReactive)({
            key: index++,
            args,
            promise: void 0,
            resolve: ()=>{},
            reject: ()=>{},
            isResolving: false,
            options
        });
        instances.value.push(props);
        props.promise = new Promise((_resolve, _reject)=>{
            props.resolve = (v)=>{
                props.isResolving = true;
                return _resolve(v);
            };
            props.reject = _reject;
        }).finally(()=>{
            props.promise = void 0;
            const index2 = instances.value.indexOf(props);
            if (index2 !== -1) instances.value.splice(index2, 1);
        });
        return props.promise;
    }
    function start(...args) {
        if (options.singleton && instances.value.length > 0) return instances.value[0].promise;
        return create(...args);
    }
    const component = /* #__PURE__ */ (0, _vueDemi.defineComponent)((_, { slots })=>{
        const renderList = ()=>instances.value.map((props)=>{
                var _a;
                return (0, _vueDemi.h)((0, _vueDemi.Fragment), {
                    key: props.key
                }, (_a = slots.default) == null ? void 0 : _a.call(slots, props));
            });
        if (options.transition) return ()=>(0, _vueDemi.h)((0, _vueDemi.TransitionGroup), options.transition, renderList);
        return renderList;
    });
    component.start = start;
    return component;
}
function createUnrefFn(fn) {
    return function(...args) {
        return fn.apply(this, args.map((i)=>(0, _shared.toValue)(i)));
    };
}
function unrefElement(elRef) {
    var _a;
    const plain = (0, _shared.toValue)(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = (0, _shared.isClient) ? window : void 0;
const defaultDocument = (0, _shared.isClient) ? window.document : void 0;
const defaultNavigator = (0, _shared.isClient) ? window.navigator : void 0;
const defaultLocation = (0, _shared.isClient) ? window.location : void 0;
function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
    } else [target, events, listeners, options] = args;
    if (!target) return 0, _shared.noop;
    if (!Array.isArray(events)) events = [
        events
    ];
    if (!Array.isArray(listeners)) listeners = [
        listeners
    ];
    const cleanups = [];
    const cleanup = ()=>{
        cleanups.forEach((fn)=>fn());
        cleanups.length = 0;
    };
    const register = (el, event, listener, options2)=>{
        el.addEventListener(event, listener, options2);
        return ()=>el.removeEventListener(event, listener, options2);
    };
    const stopWatch = (0, _vueDemi.watch)(()=>[
            unrefElement(target),
            (0, _shared.toValue)(options)
        ], ([el, options2])=>{
        cleanup();
        if (!el) return;
        const optionsClone = (0, _shared.isObject)(options2) ? {
            ...options2
        } : options2;
        cleanups.push(...events.flatMap((event)=>{
            return listeners.map((listener)=>register(el, event, listener, optionsClone));
        }));
    }, {
        immediate: true,
        flush: "post"
    });
    const stop = ()=>{
        stopWatch();
        cleanup();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
    const { window: window1 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window1) return;
    if ((0, _shared.isIOS) && !_iOSWorkaround) {
        _iOSWorkaround = true;
        Array.from(window1.document.body.children).forEach((el)=>el.addEventListener("click", (0, _shared.noop)));
        window1.document.documentElement.addEventListener("click", (0, _shared.noop));
    }
    let shouldListen = true;
    const shouldIgnore = (event)=>{
        return ignore.some((target2)=>{
            if (typeof target2 === "string") return Array.from(window1.document.querySelectorAll(target2)).some((el)=>el === event.target || event.composedPath().includes(el));
            else {
                const el = unrefElement(target2);
                return el && (event.target === el || event.composedPath().includes(el));
            }
        });
    };
    const listener = (event)=>{
        const el = unrefElement(target);
        if (!el || el === event.target || event.composedPath().includes(el)) return;
        if (event.detail === 0) shouldListen = !shouldIgnore(event);
        if (!shouldListen) {
            shouldListen = true;
            return;
        }
        handler(event);
    };
    const cleanup = [
        useEventListener(window1, "click", listener, {
            passive: true,
            capture
        }),
        useEventListener(window1, "pointerdown", (e)=>{
            const el = unrefElement(target);
            if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
        }, {
            passive: true
        }),
        detectIframe && useEventListener(window1, "blur", (event)=>{
            setTimeout(()=>{
                var _a;
                const el = unrefElement(target);
                if (((_a = window1.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window1.document.activeElement))) handler(event);
            }, 0);
        })
    ].filter(Boolean);
    const stop = ()=>cleanup.forEach((fn)=>fn());
    return stop;
}
function createKeyPredicate(keyFilter) {
    if (typeof keyFilter === "function") return keyFilter;
    else if (typeof keyFilter === "string") return (event)=>event.key === keyFilter;
    else if (Array.isArray(keyFilter)) return (event)=>keyFilter.includes(event.key);
    return ()=>true;
}
function onKeyStroke(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
        key = args[0];
        handler = args[1];
        options = args[2];
    } else if (args.length === 2) {
        if (typeof args[1] === "object") {
            key = true;
            handler = args[0];
            options = args[1];
        } else {
            key = args[0];
            handler = args[1];
        }
    } else {
        key = true;
        handler = args[0];
    }
    const { target = defaultWindow, eventName = "keydown", passive = false, dedupe = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e)=>{
        if (e.repeat && (0, _shared.toValue)(dedupe)) return;
        if (predicate(e)) handler(e);
    };
    return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
    return onKeyStroke(key, handler, {
        ...options,
        eventName: "keydown"
    });
}
function onKeyPressed(key, handler, options = {}) {
    return onKeyStroke(key, handler, {
        ...options,
        eventName: "keypress"
    });
}
function onKeyUp(key, handler, options = {}) {
    return onKeyStroke(key, handler, {
        ...options,
        eventName: "keyup"
    });
}
const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
    var _a, _b;
    const elementRef = (0, _vueDemi.computed)(()=>unrefElement(target));
    let timeout;
    function clear() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
        }
    }
    function onDown(ev) {
        var _a2, _b2, _c, _d;
        if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value) return;
        clear();
        if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent) ev.preventDefault();
        if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop) ev.stopPropagation();
        timeout = setTimeout(()=>handler(ev), (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY);
    }
    const listenerOptions = {
        capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
        once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
    };
    useEventListener(elementRef, "pointerdown", onDown, listenerOptions);
    useEventListener(elementRef, [
        "pointerup",
        "pointerleave"
    ], clear, listenerOptions);
}
function isFocusedElementEditable() {
    const { activeElement, body } = document;
    if (!activeElement) return false;
    if (activeElement === body) return false;
    switch(activeElement.tagName){
        case "INPUT":
        case "TEXTAREA":
            return true;
    }
    return activeElement.hasAttribute("contenteditable");
}
function isTypedCharValid({ keyCode, metaKey, ctrlKey, altKey }) {
    if (metaKey || ctrlKey || altKey) return false;
    if (keyCode >= 48 && keyCode <= 57) return true;
    if (keyCode >= 65 && keyCode <= 90) return true;
    if (keyCode >= 97 && keyCode <= 122) return true;
    return false;
}
function onStartTyping(callback, options = {}) {
    const { document: document2 = defaultDocument } = options;
    const keydown = (event)=>{
        !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
    };
    if (document2) useEventListener(document2, "keydown", keydown, {
        passive: true
    });
}
function templateRef(key, initialValue = null) {
    const instance = (0, _vueDemi.getCurrentInstance)();
    let _trigger = ()=>{};
    const element = (0, _vueDemi.customRef)((track, trigger)=>{
        _trigger = trigger;
        return {
            get () {
                var _a, _b;
                track();
                return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
            },
            set () {}
        };
    });
    (0, _shared.tryOnMounted)(_trigger);
    (0, _vueDemi.onUpdated)(_trigger);
    return element;
}
function useActiveElement(options = {}) {
    var _a;
    const { window: window1 = defaultWindow, deep = true } = options;
    const document1 = (_a = options.document) != null ? _a : window1 == null ? void 0 : window1.document;
    const getDeepActiveElement = ()=>{
        var _a2;
        let element = document1 == null ? void 0 : document1.activeElement;
        if (deep) while(element == null ? void 0 : element.shadowRoot)element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
        return element;
    };
    const activeElement = (0, _shared.computedWithControl)(()=>null, ()=>getDeepActiveElement());
    if (window1) {
        useEventListener(window1, "blur", (event)=>{
            if (event.relatedTarget !== null) return;
            activeElement.trigger();
        }, true);
        useEventListener(window1, "focus", activeElement.trigger, true);
    }
    return activeElement;
}
function useMounted() {
    const isMounted = (0, _vueDemi.ref)(false);
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onMounted)(()=>{
        isMounted.value = true;
    });
    return isMounted;
}
function useSupported(callback) {
    const isMounted = useMounted();
    return (0, _vueDemi.computed)(()=>{
        isMounted.value;
        return Boolean(callback());
    });
}
function useRafFn(fn, options = {}) {
    const { immediate = true, window: window1 = defaultWindow } = options;
    const isActive = (0, _vueDemi.ref)(false);
    let previousFrameTimestamp = 0;
    let rafId = null;
    function loop(timestamp) {
        if (!isActive.value || !window1) return;
        const delta = timestamp - (previousFrameTimestamp || timestamp);
        fn({
            delta,
            timestamp
        });
        previousFrameTimestamp = timestamp;
        rafId = window1.requestAnimationFrame(loop);
    }
    function resume() {
        if (!isActive.value && window1) {
            isActive.value = true;
            rafId = window1.requestAnimationFrame(loop);
        }
    }
    function pause() {
        isActive.value = false;
        if (rafId != null && window1) {
            window1.cancelAnimationFrame(rafId);
            rafId = null;
        }
    }
    if (immediate) resume();
    (0, _shared.tryOnScopeDispose)(pause);
    return {
        isActive: (0, _vueDemi.readonly)(isActive),
        pause,
        resume
    };
}
function useAnimate(target, keyframes, options) {
    let config;
    let animateOptions;
    if ((0, _shared.isObject)(options)) {
        config = options;
        animateOptions = (0, _shared.objectOmit)(options, [
            "window",
            "immediate",
            "commitStyles",
            "persist",
            "onReady",
            "onError"
        ]);
    } else {
        config = {
            duration: options
        };
        animateOptions = options;
    }
    const { window: window1 = defaultWindow, immediate = true, commitStyles, persist, playbackRate: _playbackRate = 1, onReady, onError = (e)=>{
        console.error(e);
    } } = config;
    const isSupported = useSupported(()=>window1 && HTMLElement && "animate" in HTMLElement.prototype);
    const animate = (0, _vueDemi.shallowRef)(void 0);
    const store = (0, _vueDemi.shallowReactive)({
        startTime: null,
        currentTime: null,
        timeline: null,
        playbackRate: _playbackRate,
        pending: false,
        playState: immediate ? "idle" : "paused",
        replaceState: "active"
    });
    const pending = (0, _vueDemi.computed)(()=>store.pending);
    const playState = (0, _vueDemi.computed)(()=>store.playState);
    const replaceState = (0, _vueDemi.computed)(()=>store.replaceState);
    const startTime = (0, _vueDemi.computed)({
        get () {
            return store.startTime;
        },
        set (value) {
            store.startTime = value;
            if (animate.value) animate.value.startTime = value;
        }
    });
    const currentTime = (0, _vueDemi.computed)({
        get () {
            return store.currentTime;
        },
        set (value) {
            store.currentTime = value;
            if (animate.value) {
                animate.value.currentTime = value;
                syncResume();
            }
        }
    });
    const timeline = (0, _vueDemi.computed)({
        get () {
            return store.timeline;
        },
        set (value) {
            store.timeline = value;
            if (animate.value) animate.value.timeline = value;
        }
    });
    const playbackRate = (0, _vueDemi.computed)({
        get () {
            return store.playbackRate;
        },
        set (value) {
            store.playbackRate = value;
            if (animate.value) animate.value.playbackRate = value;
        }
    });
    const play = ()=>{
        if (animate.value) try {
            animate.value.play();
            syncResume();
        } catch (e) {
            syncPause();
            onError(e);
        }
        else update();
    };
    const pause = ()=>{
        var _a;
        try {
            (_a = animate.value) == null || _a.pause();
            syncPause();
        } catch (e) {
            onError(e);
        }
    };
    const reverse = ()=>{
        var _a;
        !animate.value && update();
        try {
            (_a = animate.value) == null || _a.reverse();
            syncResume();
        } catch (e) {
            syncPause();
            onError(e);
        }
    };
    const finish = ()=>{
        var _a;
        try {
            (_a = animate.value) == null || _a.finish();
            syncPause();
        } catch (e) {
            onError(e);
        }
    };
    const cancel = ()=>{
        var _a;
        try {
            (_a = animate.value) == null || _a.cancel();
            syncPause();
        } catch (e) {
            onError(e);
        }
    };
    (0, _vueDemi.watch)(()=>unrefElement(target), (el)=>{
        el && update();
    });
    (0, _vueDemi.watch)(()=>keyframes, (value)=>{
        !animate.value && update();
        if (!unrefElement(target) && animate.value) animate.value.effect = new KeyframeEffect(unrefElement(target), (0, _shared.toValue)(value), animateOptions);
    }, {
        deep: true
    });
    (0, _shared.tryOnMounted)(()=>{
        (0, _vueDemi.nextTick)(()=>update(true));
    });
    (0, _shared.tryOnScopeDispose)(cancel);
    function update(init) {
        const el = unrefElement(target);
        if (!isSupported.value || !el) return;
        animate.value = el.animate((0, _shared.toValue)(keyframes), animateOptions);
        if (commitStyles) animate.value.commitStyles();
        if (persist) animate.value.persist();
        if (_playbackRate !== 1) animate.value.playbackRate = _playbackRate;
        if (init && !immediate) animate.value.pause();
        else syncResume();
        onReady == null || onReady(animate.value);
    }
    useEventListener(animate, [
        "cancel",
        "finish",
        "remove"
    ], syncPause);
    const { resume: resumeRef, pause: pauseRef } = useRafFn(()=>{
        if (!animate.value) return;
        store.pending = animate.value.pending;
        store.playState = animate.value.playState;
        store.replaceState = animate.value.replaceState;
        store.startTime = animate.value.startTime;
        store.currentTime = animate.value.currentTime;
        store.timeline = animate.value.timeline;
        store.playbackRate = animate.value.playbackRate;
    }, {
        immediate: false
    });
    function syncResume() {
        if (isSupported.value) resumeRef();
    }
    function syncPause() {
        if (isSupported.value && window1) window1.requestAnimationFrame(pauseRef);
    }
    return {
        isSupported,
        animate,
        // actions
        play,
        pause,
        reverse,
        finish,
        cancel,
        // state
        pending,
        playState,
        replaceState,
        startTime,
        currentTime,
        timeline,
        playbackRate
    };
}
function useAsyncQueue(tasks, options) {
    const { interrupt = true, onError = (0, _shared.noop), onFinished = (0, _shared.noop), signal } = options || {};
    const promiseState = {
        aborted: "aborted",
        fulfilled: "fulfilled",
        pending: "pending",
        rejected: "rejected"
    };
    const initialResult = Array.from(Array.from({
        length: tasks.length
    }), ()=>({
            state: promiseState.pending,
            data: null
        }));
    const result = (0, _vueDemi.reactive)(initialResult);
    const activeIndex = (0, _vueDemi.ref)(-1);
    if (!tasks || tasks.length === 0) {
        onFinished();
        return {
            activeIndex,
            result
        };
    }
    function updateResult(state, res) {
        activeIndex.value++;
        result[activeIndex.value].data = res;
        result[activeIndex.value].state = state;
    }
    tasks.reduce((prev, curr)=>{
        return prev.then((prevRes)=>{
            var _a;
            if (signal == null ? void 0 : signal.aborted) {
                updateResult(promiseState.aborted, new Error("aborted"));
                return;
            }
            if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
                onFinished();
                return;
            }
            const done = curr(prevRes).then((currentRes)=>{
                updateResult(promiseState.fulfilled, currentRes);
                activeIndex.value === tasks.length - 1 && onFinished();
                return currentRes;
            });
            if (!signal) return done;
            return Promise.race([
                done,
                whenAborted(signal)
            ]);
        }).catch((e)=>{
            if (signal == null ? void 0 : signal.aborted) {
                updateResult(promiseState.aborted, e);
                return e;
            }
            updateResult(promiseState.rejected, e);
            onError();
            return e;
        });
    }, Promise.resolve());
    return {
        activeIndex,
        result
    };
}
function whenAborted(signal) {
    return new Promise((resolve, reject)=>{
        const error = new Error("aborted");
        if (signal.aborted) reject(error);
        else signal.addEventListener("abort", ()=>reject(error), {
            once: true
        });
    });
}
function useAsyncState(promise, initialState, options) {
    const { immediate = true, delay = 0, onError = (0, _shared.noop), onSuccess = (0, _shared.noop), resetOnExecute = true, shallow = true, throwError } = options != null ? options : {};
    const state = shallow ? (0, _vueDemi.shallowRef)(initialState) : (0, _vueDemi.ref)(initialState);
    const isReady = (0, _vueDemi.ref)(false);
    const isLoading = (0, _vueDemi.ref)(false);
    const error = (0, _vueDemi.shallowRef)(void 0);
    async function execute(delay2 = 0, ...args) {
        if (resetOnExecute) state.value = initialState;
        error.value = void 0;
        isReady.value = false;
        isLoading.value = true;
        if (delay2 > 0) await (0, _shared.promiseTimeout)(delay2);
        const _promise = typeof promise === "function" ? promise(...args) : promise;
        try {
            const data = await _promise;
            state.value = data;
            isReady.value = true;
            onSuccess(data);
        } catch (e) {
            error.value = e;
            onError(e);
            if (throwError) throw e;
        } finally{
            isLoading.value = false;
        }
        return state.value;
    }
    if (immediate) execute(delay);
    const shell = {
        state,
        isReady,
        isLoading,
        error,
        execute
    };
    function waitUntilIsLoaded() {
        return new Promise((resolve, reject)=>{
            (0, _shared.until)(isLoading).toBe(false).then(()=>resolve(shell)).catch(reject);
        });
    }
    return {
        ...shell,
        then (onFulfilled, onRejected) {
            return waitUntilIsLoaded().then(onFulfilled, onRejected);
        }
    };
}
const defaults = {
    array: (v)=>JSON.stringify(v),
    object: (v)=>JSON.stringify(v),
    set: (v)=>JSON.stringify(Array.from(v)),
    map: (v)=>JSON.stringify(Object.fromEntries(v)),
    null: ()=>""
};
function getDefaultSerialization(target) {
    if (!target) return defaults.null;
    if (target instanceof Map) return defaults.map;
    else if (target instanceof Set) return defaults.set;
    else if (Array.isArray(target)) return defaults.array;
    else return defaults.object;
}
function useBase64(target, options) {
    const base64 = (0, _vueDemi.ref)("");
    const promise = (0, _vueDemi.ref)();
    function execute() {
        if (!(0, _shared.isClient)) return;
        promise.value = new Promise((resolve, reject)=>{
            try {
                const _target = (0, _shared.toValue)(target);
                if (_target == null) resolve("");
                else if (typeof _target === "string") resolve(blobToBase64(new Blob([
                    _target
                ], {
                    type: "text/plain"
                })));
                else if (_target instanceof Blob) resolve(blobToBase64(_target));
                else if (_target instanceof ArrayBuffer) resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
                else if (_target instanceof HTMLCanvasElement) resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
                else if (_target instanceof HTMLImageElement) {
                    const img = _target.cloneNode(false);
                    img.crossOrigin = "Anonymous";
                    imgLoaded(img).then(()=>{
                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
                    }).catch(reject);
                } else if (typeof _target === "object") {
                    const _serializeFn = (options == null ? void 0 : options.serializer) || getDefaultSerialization(_target);
                    const serialized = _serializeFn(_target);
                    return resolve(blobToBase64(new Blob([
                        serialized
                    ], {
                        type: "application/json"
                    })));
                } else reject(new Error("target is unsupported types"));
            } catch (error) {
                reject(error);
            }
        });
        promise.value.then((res)=>base64.value = res);
        return promise.value;
    }
    if ((0, _vueDemi.isRef)(target) || typeof target === "function") (0, _vueDemi.watch)(target, execute, {
        immediate: true
    });
    else execute();
    return {
        base64,
        promise,
        execute
    };
}
function imgLoaded(img) {
    return new Promise((resolve, reject)=>{
        if (!img.complete) {
            img.onload = ()=>{
                resolve();
            };
            img.onerror = reject;
        } else resolve();
    });
}
function blobToBase64(blob) {
    return new Promise((resolve, reject)=>{
        const fr = new FileReader();
        fr.onload = (e)=>{
            resolve(e.target.result);
        };
        fr.onerror = reject;
        fr.readAsDataURL(blob);
    });
}
function useBattery({ navigator = defaultNavigator } = {}) {
    const events = [
        "chargingchange",
        "chargingtimechange",
        "dischargingtimechange",
        "levelchange"
    ];
    const isSupported = useSupported(()=>navigator && "getBattery" in navigator);
    const charging = (0, _vueDemi.ref)(false);
    const chargingTime = (0, _vueDemi.ref)(0);
    const dischargingTime = (0, _vueDemi.ref)(0);
    const level = (0, _vueDemi.ref)(1);
    let battery;
    function updateBatteryInfo() {
        charging.value = this.charging;
        chargingTime.value = this.chargingTime || 0;
        dischargingTime.value = this.dischargingTime || 0;
        level.value = this.level;
    }
    if (isSupported.value) navigator.getBattery().then((_battery)=>{
        battery = _battery;
        updateBatteryInfo.call(battery);
        useEventListener(battery, events, updateBatteryInfo, {
            passive: true
        });
    });
    return {
        isSupported,
        charging,
        chargingTime,
        dischargingTime,
        level
    };
}
function useBluetooth(options) {
    let { acceptAllDevices = false } = options || {};
    const { filters, optionalServices, navigator = defaultNavigator } = options || {};
    const isSupported = useSupported(()=>navigator && "bluetooth" in navigator);
    const device = (0, _vueDemi.shallowRef)(void 0);
    const error = (0, _vueDemi.shallowRef)(null);
    (0, _vueDemi.watch)(device, ()=>{
        connectToBluetoothGATTServer();
    });
    async function requestDevice() {
        if (!isSupported.value) return;
        error.value = null;
        if (filters && filters.length > 0) acceptAllDevices = false;
        try {
            device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
                acceptAllDevices,
                filters,
                optionalServices
            }));
        } catch (err) {
            error.value = err;
        }
    }
    const server = (0, _vueDemi.ref)();
    const isConnected = (0, _vueDemi.computed)(()=>{
        var _a;
        return ((_a = server.value) == null ? void 0 : _a.connected) || false;
    });
    async function connectToBluetoothGATTServer() {
        error.value = null;
        if (device.value && device.value.gatt) {
            device.value.addEventListener("gattserverdisconnected", ()=>{});
            try {
                server.value = await device.value.gatt.connect();
            } catch (err) {
                error.value = err;
            }
        }
    }
    (0, _shared.tryOnMounted)(()=>{
        var _a;
        if (device.value) (_a = device.value.gatt) == null || _a.connect();
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        var _a;
        if (device.value) (_a = device.value.gatt) == null || _a.disconnect();
    });
    return {
        isSupported,
        isConnected,
        // Device:
        device,
        requestDevice,
        // Server:
        server,
        // Errors:
        error
    };
}
function useMediaQuery(query, options = {}) {
    const { window: window1 = defaultWindow } = options;
    const isSupported = useSupported(()=>window1 && "matchMedia" in window1 && typeof window1.matchMedia === "function");
    let mediaQuery;
    const matches = (0, _vueDemi.ref)(false);
    const handler = (event)=>{
        matches.value = event.matches;
    };
    const cleanup = ()=>{
        if (!mediaQuery) return;
        if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);
        else mediaQuery.removeListener(handler);
    };
    const stopWatch = (0, _vueDemi.watchEffect)(()=>{
        if (!isSupported.value) return;
        cleanup();
        mediaQuery = window1.matchMedia((0, _shared.toValue)(query));
        if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);
        else mediaQuery.addListener(handler);
        matches.value = mediaQuery.matches;
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        stopWatch();
        cleanup();
        mediaQuery = void 0;
    });
    return matches;
}
const breakpointsTailwind = {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536
};
const breakpointsBootstrapV5 = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};
const breakpointsVuetify = {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904
};
const breakpointsAntDesign = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
};
const breakpointsQuasar = {
    xs: 600,
    sm: 1024,
    md: 1440,
    lg: 1920
};
const breakpointsSematic = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop4K: 2560
};
const breakpointsMasterCss = {
    "3xs": 360,
    "2xs": 480,
    "xs": 600,
    "sm": 768,
    "md": 1024,
    "lg": 1280,
    "xl": 1440,
    "2xl": 1600,
    "3xl": 1920,
    "4xl": 2560
};
const breakpointsPrimeFlex = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
};
function useBreakpoints(breakpoints, options = {}) {
    function getValue(k, delta) {
        let v = breakpoints[k];
        if (delta != null) v = (0, _shared.increaseWithUnit)(v, delta);
        if (typeof v === "number") v = `${v}px`;
        return v;
    }
    const { window: window1 = defaultWindow } = options;
    function match(query) {
        if (!window1) return false;
        return window1.matchMedia(query).matches;
    }
    const greaterOrEqual = (k)=>{
        return useMediaQuery(`(min-width: ${getValue(k)})`, options);
    };
    const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k)=>{
        Object.defineProperty(shortcuts, k, {
            get: ()=>greaterOrEqual(k),
            enumerable: true,
            configurable: true
        });
        return shortcuts;
    }, {});
    return Object.assign(shortcutMethods, {
        greater (k) {
            return useMediaQuery(`(min-width: ${getValue(k, 0.1)})`, options);
        },
        greaterOrEqual,
        smaller (k) {
            return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
        },
        smallerOrEqual (k) {
            return useMediaQuery(`(max-width: ${getValue(k)})`, options);
        },
        between (a, b) {
            return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
        },
        isGreater (k) {
            return match(`(min-width: ${getValue(k, 0.1)})`);
        },
        isGreaterOrEqual (k) {
            return match(`(min-width: ${getValue(k)})`);
        },
        isSmaller (k) {
            return match(`(max-width: ${getValue(k, -0.1)})`);
        },
        isSmallerOrEqual (k) {
            return match(`(max-width: ${getValue(k)})`);
        },
        isInBetween (a, b) {
            return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
        },
        current () {
            const points = Object.keys(breakpoints).map((i)=>[
                    i,
                    greaterOrEqual(i)
                ]);
            return (0, _vueDemi.computed)(()=>points.filter(([, v])=>v.value).map(([k])=>k));
        }
    });
}
function useBroadcastChannel(options) {
    const { name, window: window1 = defaultWindow } = options;
    const isSupported = useSupported(()=>window1 && "BroadcastChannel" in window1);
    const isClosed = (0, _vueDemi.ref)(false);
    const channel = (0, _vueDemi.ref)();
    const data = (0, _vueDemi.ref)();
    const error = (0, _vueDemi.shallowRef)(null);
    const post = (data2)=>{
        if (channel.value) channel.value.postMessage(data2);
    };
    const close = ()=>{
        if (channel.value) channel.value.close();
        isClosed.value = true;
    };
    if (isSupported.value) (0, _shared.tryOnMounted)(()=>{
        error.value = null;
        channel.value = new BroadcastChannel(name);
        channel.value.addEventListener("message", (e)=>{
            data.value = e.data;
        }, {
            passive: true
        });
        channel.value.addEventListener("messageerror", (e)=>{
            error.value = e;
        }, {
            passive: true
        });
        channel.value.addEventListener("close", ()=>{
            isClosed.value = true;
        });
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        close();
    });
    return {
        isSupported,
        channel,
        data,
        post,
        close,
        error,
        isClosed
    };
}
const WRITABLE_PROPERTIES = [
    "hash",
    "host",
    "hostname",
    "href",
    "pathname",
    "port",
    "protocol",
    "search"
];
function useBrowserLocation({ window: window1 = defaultWindow } = {}) {
    const refs = Object.fromEntries(WRITABLE_PROPERTIES.map((key)=>[
            key,
            (0, _vueDemi.ref)()
        ]));
    for (const [key, ref2] of (0, _shared.objectEntries)(refs))(0, _vueDemi.watch)(ref2, (value)=>{
        if (!(window1 == null ? void 0 : window1.location) || window1.location[key] === value) return;
        window1.location[key] = value;
    });
    const buildState = (trigger)=>{
        var _a;
        const { state: state2, length } = (window1 == null ? void 0 : window1.history) || {};
        const { origin } = (window1 == null ? void 0 : window1.location) || {};
        for (const key of WRITABLE_PROPERTIES)refs[key].value = (_a = window1 == null ? void 0 : window1.location) == null ? void 0 : _a[key];
        return (0, _vueDemi.reactive)({
            trigger,
            state: state2,
            length,
            origin,
            ...refs
        });
    };
    const state = (0, _vueDemi.ref)(buildState("load"));
    if (window1) {
        useEventListener(window1, "popstate", ()=>state.value = buildState("popstate"), {
            passive: true
        });
        useEventListener(window1, "hashchange", ()=>state.value = buildState("hashchange"), {
            passive: true
        });
    }
    return state;
}
function useCached(refValue, comparator = (a, b)=>a === b, watchOptions) {
    const cachedValue = (0, _vueDemi.ref)(refValue.value);
    (0, _vueDemi.watch)(()=>refValue.value, (value)=>{
        if (!comparator(value, cachedValue.value)) cachedValue.value = value;
    }, watchOptions);
    return cachedValue;
}
function useClipboard(options = {}) {
    const { navigator = defaultNavigator, read = false, source, copiedDuring = 1500, legacy = false } = options;
    const isClipboardApiSupported = useSupported(()=>navigator && "clipboard" in navigator);
    const isSupported = (0, _vueDemi.computed)(()=>isClipboardApiSupported.value || legacy);
    const text = (0, _vueDemi.ref)("");
    const copied = (0, _vueDemi.ref)(false);
    const timeout = (0, _shared.useTimeoutFn)(()=>copied.value = false, copiedDuring);
    function updateText() {
        if (isClipboardApiSupported.value) navigator.clipboard.readText().then((value)=>{
            text.value = value;
        });
        else text.value = legacyRead();
    }
    if (isSupported.value && read) useEventListener([
        "copy",
        "cut"
    ], updateText);
    async function copy(value = (0, _shared.toValue)(source)) {
        if (isSupported.value && value != null) {
            if (isClipboardApiSupported.value) await navigator.clipboard.writeText(value);
            else legacyCopy(value);
            text.value = value;
            copied.value = true;
            timeout.start();
        }
    }
    function legacyCopy(value) {
        const ta = document.createElement("textarea");
        ta.value = value != null ? value : "";
        ta.style.position = "absolute";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
    }
    function legacyRead() {
        var _a, _b, _c;
        return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
    }
    return {
        isSupported,
        text,
        copied,
        copy
    };
}
function cloneFnJSON(source) {
    return JSON.parse(JSON.stringify(source));
}
function useCloned(source, options = {}) {
    const cloned = (0, _vueDemi.ref)({});
    const { manual, clone = cloneFnJSON, // watch options
    deep = true, immediate = true } = options;
    function sync() {
        cloned.value = clone((0, _shared.toValue)(source));
    }
    if (!manual && ((0, _vueDemi.isRef)(source) || typeof source === "function")) (0, _vueDemi.watch)(source, sync, {
        ...options,
        deep,
        immediate
    });
    else sync();
    return {
        cloned,
        sync
    };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
    if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
    return _global[globalKey];
}
function getSSRHandler(key, fallback) {
    return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
    handlers[key] = fn;
}
function guessSerializerType(rawInit) {
    return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
    boolean: {
        read: (v)=>v === "true",
        write: (v)=>String(v)
    },
    object: {
        read: (v)=>JSON.parse(v),
        write: (v)=>JSON.stringify(v)
    },
    number: {
        read: (v)=>Number.parseFloat(v),
        write: (v)=>String(v)
    },
    any: {
        read: (v)=>v,
        write: (v)=>String(v)
    },
    string: {
        read: (v)=>v,
        write: (v)=>String(v)
    },
    map: {
        read: (v)=>new Map(JSON.parse(v)),
        write: (v)=>JSON.stringify(Array.from(v.entries()))
    },
    set: {
        read: (v)=>new Set(JSON.parse(v)),
        write: (v)=>JSON.stringify(Array.from(v))
    },
    date: {
        read: (v)=>new Date(v),
        write: (v)=>v.toISOString()
    }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
    var _a;
    const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window1 = defaultWindow, eventFilter, onError = (e)=>{
        console.error(e);
    } } = options;
    const data = (shallow ? (0, _vueDemi.shallowRef) : (0, _vueDemi.ref))(defaults);
    if (!storage) try {
        storage = getSSRHandler("getDefaultStorage", ()=>{
            var _a2;
            return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
    } catch (e) {
        onError(e);
    }
    if (!storage) return data;
    const rawInit = (0, _shared.toValue)(defaults);
    const type = guessSerializerType(rawInit);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    const { pause: pauseWatch, resume: resumeWatch } = (0, _shared.pausableWatch)(data, ()=>write(data.value), {
        flush,
        deep,
        eventFilter
    });
    if (window1 && listenToStorageChanges) {
        useEventListener(window1, "storage", update);
        useEventListener(window1, customStorageEventName, updateFromCustomEvent);
    }
    update();
    return data;
    function write(v) {
        try {
            if (v == null) storage.removeItem(key);
            else {
                const serialized = serializer.write(v);
                const oldValue = storage.getItem(key);
                if (oldValue !== serialized) {
                    storage.setItem(key, serialized);
                    if (window1) window1.dispatchEvent(new CustomEvent(customStorageEventName, {
                        detail: {
                            key,
                            oldValue,
                            newValue: serialized,
                            storageArea: storage
                        }
                    }));
                }
            }
        } catch (e) {
            onError(e);
        }
    }
    function read(event) {
        const rawValue = event ? event.newValue : storage.getItem(key);
        if (rawValue == null) {
            if (writeDefaults && rawInit !== null) storage.setItem(key, serializer.write(rawInit));
            return rawInit;
        } else if (!event && mergeDefaults) {
            const value = serializer.read(rawValue);
            if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
            else if (type === "object" && !Array.isArray(value)) return {
                ...rawInit,
                ...value
            };
            return value;
        } else if (typeof rawValue !== "string") return rawValue;
        else return serializer.read(rawValue);
    }
    function updateFromCustomEvent(event) {
        update(event.detail);
    }
    function update(event) {
        if (event && event.storageArea !== storage) return;
        if (event && event.key == null) {
            data.value = rawInit;
            return;
        }
        if (event && event.key !== key) return;
        pauseWatch();
        try {
            if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
        } catch (e) {
            onError(e);
        } finally{
            if (event) (0, _vueDemi.nextTick)(resumeWatch);
            else resumeWatch();
        }
    }
}
function usePreferredDark(options) {
    return useMediaQuery("(prefers-color-scheme: dark)", options);
}
function useColorMode(options = {}) {
    const { selector = "html", attribute = "class", initialValue = "auto", window: window1 = defaultWindow, storage, storageKey = "vueuse-color-scheme", listenToStorageChanges = true, storageRef, emitAuto, disableTransition = true } = options;
    const modes = {
        auto: "",
        light: "light",
        dark: "dark",
        ...options.modes || {}
    };
    const preferredDark = usePreferredDark({
        window: window1
    });
    const system = (0, _vueDemi.computed)(()=>preferredDark.value ? "dark" : "light");
    const store = storageRef || (storageKey == null ? (0, _shared.toRef)(initialValue) : useStorage(storageKey, initialValue, storage, {
        window: window1,
        listenToStorageChanges
    }));
    const state = (0, _vueDemi.computed)(()=>store.value === "auto" ? system.value : store.value);
    const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value)=>{
        const el = typeof selector2 === "string" ? window1 == null ? void 0 : window1.document.querySelector(selector2) : unrefElement(selector2);
        if (!el) return;
        let style;
        if (disableTransition) {
            style = window1.document.createElement("style");
            const styleString = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
            style.appendChild(document.createTextNode(styleString));
            window1.document.head.appendChild(style);
        }
        if (attribute2 === "class") {
            const current = value.split(/\s/g);
            Object.values(modes).flatMap((i)=>(i || "").split(/\s/g)).filter(Boolean).forEach((v)=>{
                if (current.includes(v)) el.classList.add(v);
                else el.classList.remove(v);
            });
        } else el.setAttribute(attribute2, value);
        if (disableTransition) {
            window1.getComputedStyle(style).opacity;
            document.head.removeChild(style);
        }
    });
    function defaultOnChanged(mode) {
        var _a;
        updateHTMLAttrs(selector, attribute, (_a = modes[mode]) != null ? _a : mode);
    }
    function onChanged(mode) {
        if (options.onChanged) options.onChanged(mode, defaultOnChanged);
        else defaultOnChanged(mode);
    }
    (0, _vueDemi.watch)(state, onChanged, {
        flush: "post",
        immediate: true
    });
    (0, _shared.tryOnMounted)(()=>onChanged(state.value));
    const auto = (0, _vueDemi.computed)({
        get () {
            return emitAuto ? store.value : state.value;
        },
        set (v) {
            store.value = v;
        }
    });
    try {
        return Object.assign(auto, {
            store,
            system,
            state
        });
    } catch (e) {
        return auto;
    }
}
function useConfirmDialog(revealed = (0, _vueDemi.ref)(false)) {
    const confirmHook = (0, _shared.createEventHook)();
    const cancelHook = (0, _shared.createEventHook)();
    const revealHook = (0, _shared.createEventHook)();
    let _resolve = (0, _shared.noop);
    const reveal = (data)=>{
        revealHook.trigger(data);
        revealed.value = true;
        return new Promise((resolve)=>{
            _resolve = resolve;
        });
    };
    const confirm = (data)=>{
        revealed.value = false;
        confirmHook.trigger(data);
        _resolve({
            data,
            isCanceled: false
        });
    };
    const cancel = (data)=>{
        revealed.value = false;
        cancelHook.trigger(data);
        _resolve({
            data,
            isCanceled: true
        });
    };
    return {
        isRevealed: (0, _vueDemi.computed)(()=>revealed.value),
        reveal,
        confirm,
        cancel,
        onReveal: revealHook.on,
        onConfirm: confirmHook.on,
        onCancel: cancelHook.on
    };
}
function useMutationObserver(target, callback, options = {}) {
    const { window: window1 = defaultWindow, ...mutationOptions } = options;
    let observer;
    const isSupported = useSupported(()=>window1 && "MutationObserver" in window1);
    const cleanup = ()=>{
        if (observer) {
            observer.disconnect();
            observer = void 0;
        }
    };
    const stopWatch = (0, _vueDemi.watch)(()=>unrefElement(target), (el)=>{
        cleanup();
        if (isSupported.value && window1 && el) {
            observer = new MutationObserver(callback);
            observer.observe(el, mutationOptions);
        }
    }, {
        immediate: true
    });
    const stop = ()=>{
        cleanup();
        stopWatch();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        stop
    };
}
function useCssVar(prop, target, options = {}) {
    const { window: window1 = defaultWindow, initialValue = "", observe = false } = options;
    const variable = (0, _vueDemi.ref)(initialValue);
    const elRef = (0, _vueDemi.computed)(()=>{
        var _a;
        return unrefElement(target) || ((_a = window1 == null ? void 0 : window1.document) == null ? void 0 : _a.documentElement);
    });
    function updateCssVar() {
        var _a;
        const key = (0, _shared.toValue)(prop);
        const el = (0, _shared.toValue)(elRef);
        if (el && window1) {
            const value = (_a = window1.getComputedStyle(el).getPropertyValue(key)) == null ? void 0 : _a.trim();
            variable.value = value || initialValue;
        }
    }
    if (observe) useMutationObserver(elRef, updateCssVar, {
        attributeFilter: [
            "style",
            "class"
        ],
        window: window1
    });
    (0, _vueDemi.watch)([
        elRef,
        ()=>(0, _shared.toValue)(prop)
    ], updateCssVar, {
        immediate: true
    });
    (0, _vueDemi.watch)(variable, (val)=>{
        var _a;
        if ((_a = elRef.value) == null ? void 0 : _a.style) elRef.value.style.setProperty((0, _shared.toValue)(prop), val);
    });
    return variable;
}
function useCurrentElement() {
    const vm = (0, _vueDemi.getCurrentInstance)();
    const currentElement = (0, _shared.computedWithControl)(()=>null, ()=>vm.proxy.$el);
    (0, _vueDemi.onUpdated)(currentElement.trigger);
    (0, _vueDemi.onMounted)(currentElement.trigger);
    return currentElement;
}
function useCycleList(list, options) {
    const state = (0, _vueDemi.shallowRef)(getInitialValue());
    const listRef = (0, _shared.toRef)(list);
    const index = (0, _vueDemi.computed)({
        get () {
            var _a;
            const targetList = listRef.value;
            let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, targetList) : targetList.indexOf(state.value);
            if (index2 < 0) index2 = (_a = options == null ? void 0 : options.fallbackIndex) != null ? _a : 0;
            return index2;
        },
        set (v) {
            set(v);
        }
    });
    function set(i) {
        const targetList = listRef.value;
        const length = targetList.length;
        const index2 = (i % length + length) % length;
        const value = targetList[index2];
        state.value = value;
        return value;
    }
    function shift(delta = 1) {
        return set(index.value + delta);
    }
    function next(n = 1) {
        return shift(n);
    }
    function prev(n = 1) {
        return shift(-n);
    }
    function getInitialValue() {
        var _a, _b;
        return (_b = (0, _shared.toValue)((_a = options == null ? void 0 : options.initialValue) != null ? _a : (0, _shared.toValue)(list)[0])) != null ? _b : void 0;
    }
    (0, _vueDemi.watch)(listRef, ()=>set(index.value));
    return {
        state,
        index,
        next,
        prev
    };
}
function useDark(options = {}) {
    const { valueDark = "dark", valueLight = "" } = options;
    const mode = useColorMode({
        ...options,
        onChanged: (mode2, defaultHandler)=>{
            var _a;
            if (options.onChanged) (_a = options.onChanged) == null || _a.call(options, mode2 === "dark", defaultHandler, mode2);
            else defaultHandler(mode2);
        },
        modes: {
            dark: valueDark,
            light: valueLight
        }
    });
    const isDark = (0, _vueDemi.computed)({
        get () {
            return mode.value === "dark";
        },
        set (v) {
            const modeVal = v ? "dark" : "light";
            if (mode.system.value === modeVal) mode.value = "auto";
            else mode.value = modeVal;
        }
    });
    return isDark;
}
function fnBypass(v) {
    return v;
}
function fnSetSource(source, value) {
    return source.value = value;
}
function defaultDump(clone) {
    return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function defaultParse(clone) {
    return clone ? typeof clone === "function" ? clone : cloneFnJSON : fnBypass;
}
function useManualRefHistory(source, options = {}) {
    const { clone = false, dump = defaultDump(clone), parse = defaultParse(clone), setSource = fnSetSource } = options;
    function _createHistoryRecord() {
        return (0, _vueDemi.markRaw)({
            snapshot: dump(source.value),
            timestamp: (0, _shared.timestamp)()
        });
    }
    const last = (0, _vueDemi.ref)(_createHistoryRecord());
    const undoStack = (0, _vueDemi.ref)([]);
    const redoStack = (0, _vueDemi.ref)([]);
    const _setSource = (record)=>{
        setSource(source, parse(record.snapshot));
        last.value = record;
    };
    const commit = ()=>{
        undoStack.value.unshift(last.value);
        last.value = _createHistoryRecord();
        if (options.capacity && undoStack.value.length > options.capacity) undoStack.value.splice(options.capacity, Number.POSITIVE_INFINITY);
        if (redoStack.value.length) redoStack.value.splice(0, redoStack.value.length);
    };
    const clear = ()=>{
        undoStack.value.splice(0, undoStack.value.length);
        redoStack.value.splice(0, redoStack.value.length);
    };
    const undo = ()=>{
        const state = undoStack.value.shift();
        if (state) {
            redoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const redo = ()=>{
        const state = redoStack.value.shift();
        if (state) {
            undoStack.value.unshift(last.value);
            _setSource(state);
        }
    };
    const reset = ()=>{
        _setSource(last.value);
    };
    const history = (0, _vueDemi.computed)(()=>[
            last.value,
            ...undoStack.value
        ]);
    const canUndo = (0, _vueDemi.computed)(()=>undoStack.value.length > 0);
    const canRedo = (0, _vueDemi.computed)(()=>redoStack.value.length > 0);
    return {
        source,
        undoStack,
        redoStack,
        last,
        history,
        canUndo,
        canRedo,
        clear,
        commit,
        reset,
        undo,
        redo
    };
}
function useRefHistory(source, options = {}) {
    const { deep = false, flush = "pre", eventFilter } = options;
    const { eventFilter: composedFilter, pause, resume: resumeTracking, isActive: isTracking } = (0, _shared.pausableFilter)(eventFilter);
    const { ignoreUpdates, ignorePrevAsyncUpdates, stop } = (0, _shared.watchIgnorable)(source, commit, {
        deep,
        flush,
        eventFilter: composedFilter
    });
    function setSource(source2, value) {
        ignorePrevAsyncUpdates();
        ignoreUpdates(()=>{
            source2.value = value;
        });
    }
    const manualHistory = useManualRefHistory(source, {
        ...options,
        clone: options.clone || deep,
        setSource
    });
    const { clear, commit: manualCommit } = manualHistory;
    function commit() {
        ignorePrevAsyncUpdates();
        manualCommit();
    }
    function resume(commitNow) {
        resumeTracking();
        if (commitNow) commit();
    }
    function batch(fn) {
        let canceled = false;
        const cancel = ()=>canceled = true;
        ignoreUpdates(()=>{
            fn(cancel);
        });
        if (!canceled) commit();
    }
    function dispose() {
        stop();
        clear();
    }
    return {
        ...manualHistory,
        isTracking,
        pause,
        resume,
        commit,
        batch,
        dispose
    };
}
function useDebouncedRefHistory(source, options = {}) {
    const filter = options.debounce ? (0, _shared.debounceFilter)(options.debounce) : void 0;
    const history = useRefHistory(source, {
        ...options,
        eventFilter: filter
    });
    return {
        ...history
    };
}
function useDeviceMotion(options = {}) {
    const { window: window1 = defaultWindow, eventFilter = (0, _shared.bypassFilter) } = options;
    const acceleration = (0, _vueDemi.ref)({
        x: null,
        y: null,
        z: null
    });
    const rotationRate = (0, _vueDemi.ref)({
        alpha: null,
        beta: null,
        gamma: null
    });
    const interval = (0, _vueDemi.ref)(0);
    const accelerationIncludingGravity = (0, _vueDemi.ref)({
        x: null,
        y: null,
        z: null
    });
    if (window1) {
        const onDeviceMotion = (0, _shared.createFilterWrapper)(eventFilter, (event)=>{
            acceleration.value = event.acceleration;
            accelerationIncludingGravity.value = event.accelerationIncludingGravity;
            rotationRate.value = event.rotationRate;
            interval.value = event.interval;
        });
        useEventListener(window1, "devicemotion", onDeviceMotion);
    }
    return {
        acceleration,
        accelerationIncludingGravity,
        rotationRate,
        interval
    };
}
function useDeviceOrientation(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const isSupported = useSupported(()=>window1 && "DeviceOrientationEvent" in window1);
    const isAbsolute = (0, _vueDemi.ref)(false);
    const alpha = (0, _vueDemi.ref)(null);
    const beta = (0, _vueDemi.ref)(null);
    const gamma = (0, _vueDemi.ref)(null);
    if (window1 && isSupported.value) useEventListener(window1, "deviceorientation", (event)=>{
        isAbsolute.value = event.absolute;
        alpha.value = event.alpha;
        beta.value = event.beta;
        gamma.value = event.gamma;
    });
    return {
        isSupported,
        isAbsolute,
        alpha,
        beta,
        gamma
    };
}
function useDevicePixelRatio({ window: window1 = defaultWindow } = {}) {
    const pixelRatio = (0, _vueDemi.ref)(1);
    if (window1) {
        let observe = function() {
            pixelRatio.value = window1.devicePixelRatio;
            cleanup();
            media = window1.matchMedia(`(resolution: ${pixelRatio.value}dppx)`);
            media.addEventListener("change", observe, {
                once: true
            });
        }, cleanup = function() {
            media == null || media.removeEventListener("change", observe);
        };
        let media;
        observe();
        (0, _shared.tryOnScopeDispose)(cleanup);
    }
    return {
        pixelRatio
    };
}
function usePermission(permissionDesc, options = {}) {
    const { controls = false, navigator = defaultNavigator } = options;
    const isSupported = useSupported(()=>navigator && "permissions" in navigator);
    let permissionStatus;
    const desc = typeof permissionDesc === "string" ? {
        name: permissionDesc
    } : permissionDesc;
    const state = (0, _vueDemi.ref)();
    const onChange = ()=>{
        if (permissionStatus) state.value = permissionStatus.state;
    };
    const query = (0, _shared.createSingletonPromise)(async ()=>{
        if (!isSupported.value) return;
        if (!permissionStatus) try {
            permissionStatus = await navigator.permissions.query(desc);
            useEventListener(permissionStatus, "change", onChange);
            onChange();
        } catch (e) {
            state.value = "prompt";
        }
        return permissionStatus;
    });
    query();
    if (controls) return {
        state,
        isSupported,
        query
    };
    else return state;
}
function useDevicesList(options = {}) {
    const { navigator = defaultNavigator, requestPermissions = false, constraints = {
        audio: true,
        video: true
    }, onUpdated } = options;
    const devices = (0, _vueDemi.ref)([]);
    const videoInputs = (0, _vueDemi.computed)(()=>devices.value.filter((i)=>i.kind === "videoinput"));
    const audioInputs = (0, _vueDemi.computed)(()=>devices.value.filter((i)=>i.kind === "audioinput"));
    const audioOutputs = (0, _vueDemi.computed)(()=>devices.value.filter((i)=>i.kind === "audiooutput"));
    const isSupported = useSupported(()=>navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    const permissionGranted = (0, _vueDemi.ref)(false);
    let stream;
    async function update() {
        if (!isSupported.value) return;
        devices.value = await navigator.mediaDevices.enumerateDevices();
        onUpdated == null || onUpdated(devices.value);
        if (stream) {
            stream.getTracks().forEach((t)=>t.stop());
            stream = null;
        }
    }
    async function ensurePermissions() {
        if (!isSupported.value) return false;
        if (permissionGranted.value) return true;
        const { state, query } = usePermission("camera", {
            controls: true
        });
        await query();
        if (state.value !== "granted") {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            update();
            permissionGranted.value = true;
        } else permissionGranted.value = true;
        return permissionGranted.value;
    }
    if (isSupported.value) {
        if (requestPermissions) ensurePermissions();
        useEventListener(navigator.mediaDevices, "devicechange", update);
        update();
    }
    return {
        devices,
        ensurePermissions,
        permissionGranted,
        videoInputs,
        audioInputs,
        audioOutputs,
        isSupported
    };
}
function useDisplayMedia(options = {}) {
    var _a;
    const enabled = (0, _vueDemi.ref)((_a = options.enabled) != null ? _a : false);
    const video = options.video;
    const audio = options.audio;
    const { navigator = defaultNavigator } = options;
    const isSupported = useSupported(()=>{
        var _a2;
        return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getDisplayMedia;
    });
    const constraint = {
        audio,
        video
    };
    const stream = (0, _vueDemi.shallowRef)();
    async function _start() {
        if (!isSupported.value || stream.value) return;
        stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
        return stream.value;
    }
    async function _stop() {
        var _a2;
        (_a2 = stream.value) == null || _a2.getTracks().forEach((t)=>t.stop());
        stream.value = void 0;
    }
    function stop() {
        _stop();
        enabled.value = false;
    }
    async function start() {
        await _start();
        if (stream.value) enabled.value = true;
        return stream.value;
    }
    (0, _vueDemi.watch)(enabled, (v)=>{
        if (v) _start();
        else _stop();
    }, {
        immediate: true
    });
    return {
        isSupported,
        stream,
        start,
        stop,
        enabled
    };
}
function useDocumentVisibility({ document: document1 = defaultDocument } = {}) {
    if (!document1) return (0, _vueDemi.ref)("visible");
    const visibility = (0, _vueDemi.ref)(document1.visibilityState);
    useEventListener(document1, "visibilitychange", ()=>{
        visibility.value = document1.visibilityState;
    });
    return visibility;
}
function useDraggable(target, options = {}) {
    var _a, _b;
    const { pointerTypes, preventDefault, stopPropagation, exact, onMove, onEnd, onStart, initialValue, axis = "both", draggingElement = defaultWindow, containerElement, handle: draggingHandle = target } = options;
    const position = (0, _vueDemi.ref)((_a = (0, _shared.toValue)(initialValue)) != null ? _a : {
        x: 0,
        y: 0
    });
    const pressedDelta = (0, _vueDemi.ref)();
    const filterEvent = (e)=>{
        if (pointerTypes) return pointerTypes.includes(e.pointerType);
        return true;
    };
    const handleEvent = (e)=>{
        if ((0, _shared.toValue)(preventDefault)) e.preventDefault();
        if ((0, _shared.toValue)(stopPropagation)) e.stopPropagation();
    };
    const start = (e)=>{
        var _a2;
        if (!filterEvent(e)) return;
        if ((0, _shared.toValue)(exact) && e.target !== (0, _shared.toValue)(target)) return;
        const container = (_a2 = (0, _shared.toValue)(containerElement)) != null ? _a2 : (0, _shared.toValue)(target);
        const rect = container.getBoundingClientRect();
        const pos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        if ((onStart == null ? void 0 : onStart(pos, e)) === false) return;
        pressedDelta.value = pos;
        handleEvent(e);
    };
    const move = (e)=>{
        if (!filterEvent(e)) return;
        if (!pressedDelta.value) return;
        let { x, y } = position.value;
        if (axis === "x" || axis === "both") x = e.clientX - pressedDelta.value.x;
        if (axis === "y" || axis === "both") y = e.clientY - pressedDelta.value.y;
        position.value = {
            x,
            y
        };
        onMove == null || onMove(position.value, e);
        handleEvent(e);
    };
    const end = (e)=>{
        if (!filterEvent(e)) return;
        if (!pressedDelta.value) return;
        pressedDelta.value = void 0;
        onEnd == null || onEnd(position.value, e);
        handleEvent(e);
    };
    if (0, _shared.isClient) {
        const config = {
            capture: (_b = options.capture) != null ? _b : true
        };
        useEventListener(draggingHandle, "pointerdown", start, config);
        useEventListener(draggingElement, "pointermove", move, config);
        useEventListener(draggingElement, "pointerup", end, config);
    }
    return {
        ...(0, _shared.toRefs)(position),
        position,
        isDragging: (0, _vueDemi.computed)(()=>!!pressedDelta.value),
        style: (0, _vueDemi.computed)(()=>`left:${position.value.x}px;top:${position.value.y}px;`)
    };
}
function useDropZone(target, options = {}) {
    const isOverDropZone = (0, _vueDemi.ref)(false);
    const files = (0, _vueDemi.shallowRef)(null);
    let counter = 0;
    if (0, _shared.isClient) {
        const _options = typeof options === "function" ? {
            onDrop: options
        } : options;
        const getFiles = (event)=>{
            var _a, _b;
            const list = Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []);
            return files.value = list.length === 0 ? null : list;
        };
        useEventListener(target, "dragenter", (event)=>{
            var _a;
            event.preventDefault();
            counter += 1;
            isOverDropZone.value = true;
            (_a = _options.onEnter) == null || _a.call(_options, getFiles(event), event);
        });
        useEventListener(target, "dragover", (event)=>{
            var _a;
            event.preventDefault();
            (_a = _options.onOver) == null || _a.call(_options, getFiles(event), event);
        });
        useEventListener(target, "dragleave", (event)=>{
            var _a;
            event.preventDefault();
            counter -= 1;
            if (counter === 0) isOverDropZone.value = false;
            (_a = _options.onLeave) == null || _a.call(_options, getFiles(event), event);
        });
        useEventListener(target, "drop", (event)=>{
            var _a;
            event.preventDefault();
            counter = 0;
            isOverDropZone.value = false;
            (_a = _options.onDrop) == null || _a.call(_options, getFiles(event), event);
        });
    }
    return {
        files,
        isOverDropZone
    };
}
function useResizeObserver(target, callback, options = {}) {
    const { window: window1 = defaultWindow, ...observerOptions } = options;
    let observer;
    const isSupported = useSupported(()=>window1 && "ResizeObserver" in window1);
    const cleanup = ()=>{
        if (observer) {
            observer.disconnect();
            observer = void 0;
        }
    };
    const targets = (0, _vueDemi.computed)(()=>Array.isArray(target) ? target.map((el)=>unrefElement(el)) : [
            unrefElement(target)
        ]);
    const stopWatch = (0, _vueDemi.watch)(targets, (els)=>{
        cleanup();
        if (isSupported.value && window1) {
            observer = new ResizeObserver(callback);
            for (const _el of els)_el && observer.observe(_el, observerOptions);
        }
    }, {
        immediate: true,
        flush: "post",
        deep: true
    });
    const stop = ()=>{
        cleanup();
        stopWatch();
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        stop
    };
}
function useElementBounding(target, options = {}) {
    const { reset = true, windowResize = true, windowScroll = true, immediate = true } = options;
    const height = (0, _vueDemi.ref)(0);
    const bottom = (0, _vueDemi.ref)(0);
    const left = (0, _vueDemi.ref)(0);
    const right = (0, _vueDemi.ref)(0);
    const top = (0, _vueDemi.ref)(0);
    const width = (0, _vueDemi.ref)(0);
    const x = (0, _vueDemi.ref)(0);
    const y = (0, _vueDemi.ref)(0);
    function update() {
        const el = unrefElement(target);
        if (!el) {
            if (reset) {
                height.value = 0;
                bottom.value = 0;
                left.value = 0;
                right.value = 0;
                top.value = 0;
                width.value = 0;
                x.value = 0;
                y.value = 0;
            }
            return;
        }
        const rect = el.getBoundingClientRect();
        height.value = rect.height;
        bottom.value = rect.bottom;
        left.value = rect.left;
        right.value = rect.right;
        top.value = rect.top;
        width.value = rect.width;
        x.value = rect.x;
        y.value = rect.y;
    }
    useResizeObserver(target, update);
    (0, _vueDemi.watch)(()=>unrefElement(target), (ele)=>!ele && update());
    if (windowScroll) useEventListener("scroll", update, {
        capture: true,
        passive: true
    });
    if (windowResize) useEventListener("resize", update, {
        passive: true
    });
    (0, _shared.tryOnMounted)(()=>{
        if (immediate) update();
    });
    return {
        height,
        bottom,
        left,
        right,
        top,
        width,
        x,
        y,
        update
    };
}
function useElementByPoint(options) {
    const { x, y, document: document1 = defaultDocument, multiple, interval = "requestAnimationFrame", immediate = true } = options;
    const isSupported = useSupported(()=>{
        if ((0, _shared.toValue)(multiple)) return document1 && "elementsFromPoint" in document1;
        return document1 && "elementFromPoint" in document1;
    });
    const element = (0, _vueDemi.ref)(null);
    const cb = ()=>{
        var _a, _b;
        element.value = (0, _shared.toValue)(multiple) ? (_a = document1 == null ? void 0 : document1.elementsFromPoint((0, _shared.toValue)(x), (0, _shared.toValue)(y))) != null ? _a : [] : (_b = document1 == null ? void 0 : document1.elementFromPoint((0, _shared.toValue)(x), (0, _shared.toValue)(y))) != null ? _b : null;
    };
    const controls = interval === "requestAnimationFrame" ? useRafFn(cb, {
        immediate
    }) : (0, _shared.useIntervalFn)(cb, interval, {
        immediate
    });
    return {
        isSupported,
        element,
        ...controls
    };
}
function useElementHover(el, options = {}) {
    const { delayEnter = 0, delayLeave = 0, window: window1 = defaultWindow } = options;
    const isHovered = (0, _vueDemi.ref)(false);
    let timer;
    const toggle = (entering)=>{
        const delay = entering ? delayEnter : delayLeave;
        if (timer) {
            clearTimeout(timer);
            timer = void 0;
        }
        if (delay) timer = setTimeout(()=>isHovered.value = entering, delay);
        else isHovered.value = entering;
    };
    if (!window1) return isHovered;
    useEventListener(el, "mouseenter", ()=>toggle(true), {
        passive: true
    });
    useEventListener(el, "mouseleave", ()=>toggle(false), {
        passive: true
    });
    return isHovered;
}
function useElementSize(target, initialSize = {
    width: 0,
    height: 0
}, options = {}) {
    const { window: window1 = defaultWindow, box = "content-box" } = options;
    const isSVG = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
    });
    const width = (0, _vueDemi.ref)(initialSize.width);
    const height = (0, _vueDemi.ref)(initialSize.height);
    useResizeObserver(target, ([entry])=>{
        const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
        if (window1 && isSVG.value) {
            const $elem = unrefElement(target);
            if ($elem) {
                const styles = window1.getComputedStyle($elem);
                width.value = Number.parseFloat(styles.width);
                height.value = Number.parseFloat(styles.height);
            }
        } else if (boxSize) {
            const formatBoxSize = Array.isArray(boxSize) ? boxSize : [
                boxSize
            ];
            width.value = formatBoxSize.reduce((acc, { inlineSize })=>acc + inlineSize, 0);
            height.value = formatBoxSize.reduce((acc, { blockSize })=>acc + blockSize, 0);
        } else {
            width.value = entry.contentRect.width;
            height.value = entry.contentRect.height;
        }
    }, options);
    (0, _vueDemi.watch)(()=>unrefElement(target), (ele)=>{
        width.value = ele ? initialSize.width : 0;
        height.value = ele ? initialSize.height : 0;
    });
    return {
        width,
        height
    };
}
function useIntersectionObserver(target, callback, options = {}) {
    const { root, rootMargin = "0px", threshold = 0.1, window: window1 = defaultWindow, immediate = true } = options;
    const isSupported = useSupported(()=>window1 && "IntersectionObserver" in window1);
    const targets = (0, _vueDemi.computed)(()=>{
        const _target = (0, _shared.toValue)(target);
        return (Array.isArray(_target) ? _target : [
            _target
        ]).map(unrefElement).filter((0, _shared.notNullish));
    });
    let cleanup = (0, _shared.noop);
    const isActive = (0, _vueDemi.ref)(immediate);
    const stopWatch = isSupported.value ? (0, _vueDemi.watch)(()=>[
            targets.value,
            unrefElement(root),
            isActive.value
        ], ([targets2, root2])=>{
        cleanup();
        if (!isActive.value) return;
        if (!targets2.length) return;
        const observer = new IntersectionObserver(callback, {
            root: unrefElement(root2),
            rootMargin,
            threshold
        });
        targets2.forEach((el)=>el && observer.observe(el));
        cleanup = ()=>{
            observer.disconnect();
            cleanup = (0, _shared.noop);
        };
    }, {
        immediate,
        flush: "post"
    }) : (0, _shared.noop);
    const stop = ()=>{
        cleanup();
        stopWatch();
        isActive.value = false;
    };
    (0, _shared.tryOnScopeDispose)(stop);
    return {
        isSupported,
        isActive,
        pause () {
            cleanup();
            isActive.value = false;
        },
        resume () {
            isActive.value = true;
        },
        stop
    };
}
function useElementVisibility(element, { window: window1 = defaultWindow, scrollTarget } = {}) {
    const elementIsVisible = (0, _vueDemi.ref)(false);
    useIntersectionObserver(element, ([{ isIntersecting }])=>{
        elementIsVisible.value = isIntersecting;
    }, {
        root: scrollTarget,
        window: window1,
        threshold: 0
    });
    return elementIsVisible;
}
const events = /* @__PURE__ */ new Map();
function useEventBus(key) {
    const scope = (0, _vueDemi.getCurrentScope)();
    function on(listener) {
        var _a;
        const listeners = events.get(key) || /* @__PURE__ */ new Set();
        listeners.add(listener);
        events.set(key, listeners);
        const _off = ()=>off(listener);
        (_a = scope == null ? void 0 : scope.cleanups) == null || _a.push(_off);
        return _off;
    }
    function once(listener) {
        function _listener(...args) {
            off(_listener);
            listener(...args);
        }
        return on(_listener);
    }
    function off(listener) {
        const listeners = events.get(key);
        if (!listeners) return;
        listeners.delete(listener);
        if (!listeners.size) reset();
    }
    function reset() {
        events.delete(key);
    }
    function emit(event, payload) {
        var _a;
        (_a = events.get(key)) == null || _a.forEach((v)=>v(event, payload));
    }
    return {
        on,
        once,
        off,
        emit,
        reset
    };
}
function useEventSource(url, events = [], options = {}) {
    const event = (0, _vueDemi.ref)(null);
    const data = (0, _vueDemi.ref)(null);
    const status = (0, _vueDemi.ref)("CONNECTING");
    const eventSource = (0, _vueDemi.ref)(null);
    const error = (0, _vueDemi.shallowRef)(null);
    const { withCredentials = false } = options;
    const close = ()=>{
        if (eventSource.value) {
            eventSource.value.close();
            eventSource.value = null;
            status.value = "CLOSED";
        }
    };
    const es = new EventSource(url, {
        withCredentials
    });
    eventSource.value = es;
    es.onopen = ()=>{
        status.value = "OPEN";
        error.value = null;
    };
    es.onerror = (e)=>{
        status.value = "CLOSED";
        error.value = e;
    };
    es.onmessage = (e)=>{
        event.value = null;
        data.value = e.data;
    };
    for (const event_name of events)useEventListener(es, event_name, (e)=>{
        event.value = event_name;
        data.value = e.data || null;
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        close();
    });
    return {
        eventSource,
        event,
        data,
        status,
        error,
        close
    };
}
function useEyeDropper(options = {}) {
    const { initialValue = "" } = options;
    const isSupported = useSupported(()=>typeof window !== "undefined" && "EyeDropper" in window);
    const sRGBHex = (0, _vueDemi.ref)(initialValue);
    async function open(openOptions) {
        if (!isSupported.value) return;
        const eyeDropper = new window.EyeDropper();
        const result = await eyeDropper.open(openOptions);
        sRGBHex.value = result.sRGBHex;
        return result;
    }
    return {
        isSupported,
        sRGBHex,
        open
    };
}
function useFavicon(newIcon = null, options = {}) {
    const { baseUrl = "", rel = "icon", document: document1 = defaultDocument } = options;
    const favicon = (0, _shared.toRef)(newIcon);
    const applyIcon = (icon)=>{
        document1 == null || document1.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el)=>el.href = `${baseUrl}${icon}`);
    };
    (0, _vueDemi.watch)(favicon, (i, o)=>{
        if (typeof i === "string" && i !== o) applyIcon(i);
    }, {
        immediate: true
    });
    return favicon;
}
const payloadMapping = {
    json: "application/json",
    text: "text/plain"
};
function isFetchOptions(obj) {
    return obj && (0, _shared.containsProp)(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function headersToObject(headers) {
    if (typeof Headers !== "undefined" && headers instanceof Headers) return Object.fromEntries([
        ...headers.entries()
    ]);
    return headers;
}
function combineCallbacks(combination, ...callbacks) {
    if (combination === "overwrite") return async (ctx)=>{
        const callback = callbacks[callbacks.length - 1];
        if (callback) return {
            ...ctx,
            ...await callback(ctx)
        };
        return ctx;
    };
    else return async (ctx)=>{
        for (const callback of callbacks)if (callback) ctx = {
            ...ctx,
            ...await callback(ctx)
        };
        return ctx;
    };
}
function createFetch(config = {}) {
    const _combination = config.combination || "chain";
    const _options = config.options || {};
    const _fetchOptions = config.fetchOptions || {};
    function useFactoryFetch(url, ...args) {
        const computedUrl = (0, _vueDemi.computed)(()=>{
            const baseUrl = (0, _shared.toValue)(config.baseUrl);
            const targetUrl = (0, _shared.toValue)(url);
            return baseUrl && !isAbsoluteURL(targetUrl) ? joinPaths(baseUrl, targetUrl) : targetUrl;
        });
        let options = _options;
        let fetchOptions = _fetchOptions;
        if (args.length > 0) {
            if (isFetchOptions(args[0])) options = {
                ...options,
                ...args[0],
                beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[0].beforeFetch),
                afterFetch: combineCallbacks(_combination, _options.afterFetch, args[0].afterFetch),
                onFetchError: combineCallbacks(_combination, _options.onFetchError, args[0].onFetchError)
            };
            else fetchOptions = {
                ...fetchOptions,
                ...args[0],
                headers: {
                    ...headersToObject(fetchOptions.headers) || {},
                    ...headersToObject(args[0].headers) || {}
                }
            };
        }
        if (args.length > 1 && isFetchOptions(args[1])) options = {
            ...options,
            ...args[1],
            beforeFetch: combineCallbacks(_combination, _options.beforeFetch, args[1].beforeFetch),
            afterFetch: combineCallbacks(_combination, _options.afterFetch, args[1].afterFetch),
            onFetchError: combineCallbacks(_combination, _options.onFetchError, args[1].onFetchError)
        };
        return useFetch(computedUrl, fetchOptions, options);
    }
    return useFactoryFetch;
}
function useFetch(url, ...args) {
    var _a;
    const supportsAbort = typeof AbortController === "function";
    let fetchOptions = {};
    let options = {
        immediate: true,
        refetch: false,
        timeout: 0,
        updateDataOnError: false
    };
    const config = {
        method: "GET",
        type: "text",
        payload: void 0
    };
    if (args.length > 0) {
        if (isFetchOptions(args[0])) options = {
            ...options,
            ...args[0]
        };
        else fetchOptions = args[0];
    }
    if (args.length > 1) {
        if (isFetchOptions(args[1])) options = {
            ...options,
            ...args[1]
        };
    }
    const { fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch, initialData, timeout } = options;
    const responseEvent = (0, _shared.createEventHook)();
    const errorEvent = (0, _shared.createEventHook)();
    const finallyEvent = (0, _shared.createEventHook)();
    const isFinished = (0, _vueDemi.ref)(false);
    const isFetching = (0, _vueDemi.ref)(false);
    const aborted = (0, _vueDemi.ref)(false);
    const statusCode = (0, _vueDemi.ref)(null);
    const response = (0, _vueDemi.shallowRef)(null);
    const error = (0, _vueDemi.shallowRef)(null);
    const data = (0, _vueDemi.shallowRef)(initialData || null);
    const canAbort = (0, _vueDemi.computed)(()=>supportsAbort && isFetching.value);
    let controller;
    let timer;
    const abort = ()=>{
        if (supportsAbort) {
            controller == null || controller.abort();
            controller = new AbortController();
            controller.signal.onabort = ()=>aborted.value = true;
            fetchOptions = {
                ...fetchOptions,
                signal: controller.signal
            };
        }
    };
    const loading = (isLoading)=>{
        isFetching.value = isLoading;
        isFinished.value = !isLoading;
    };
    if (timeout) timer = (0, _shared.useTimeoutFn)(abort, timeout, {
        immediate: false
    });
    const execute = async (throwOnFailed = false)=>{
        var _a2;
        abort();
        loading(true);
        error.value = null;
        statusCode.value = null;
        aborted.value = false;
        const defaultFetchOptions = {
            method: config.method,
            headers: {}
        };
        if (config.payload) {
            const headers = headersToObject(defaultFetchOptions.headers);
            const payload = (0, _shared.toValue)(config.payload);
            if (!config.payloadType && payload && Object.getPrototypeOf(payload) === Object.prototype && !(payload instanceof FormData)) config.payloadType = "json";
            if (config.payloadType) headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
            defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(payload) : payload;
        }
        let isCanceled = false;
        const context = {
            url: (0, _shared.toValue)(url),
            options: {
                ...defaultFetchOptions,
                ...fetchOptions
            },
            cancel: ()=>{
                isCanceled = true;
            }
        };
        if (options.beforeFetch) Object.assign(context, await options.beforeFetch(context));
        if (isCanceled || !fetch) {
            loading(false);
            return Promise.resolve(null);
        }
        let responseData = null;
        if (timer) timer.start();
        return new Promise((resolve, reject)=>{
            var _a3;
            fetch(context.url, {
                ...defaultFetchOptions,
                ...context.options,
                headers: {
                    ...headersToObject(defaultFetchOptions.headers),
                    ...headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers)
                }
            }).then(async (fetchResponse)=>{
                response.value = fetchResponse;
                statusCode.value = fetchResponse.status;
                responseData = await fetchResponse[config.type]();
                if (!fetchResponse.ok) {
                    data.value = initialData || null;
                    throw new Error(fetchResponse.statusText);
                }
                if (options.afterFetch) ({ data: responseData } = await options.afterFetch({
                    data: responseData,
                    response: fetchResponse
                }));
                data.value = responseData;
                responseEvent.trigger(fetchResponse);
                return resolve(fetchResponse);
            }).catch(async (fetchError)=>{
                let errorData = fetchError.message || fetchError.name;
                if (options.onFetchError) ({ error: errorData, data: responseData } = await options.onFetchError({
                    data: responseData,
                    error: fetchError,
                    response: response.value
                }));
                error.value = errorData;
                if (options.updateDataOnError) data.value = responseData;
                errorEvent.trigger(fetchError);
                if (throwOnFailed) return reject(fetchError);
                return resolve(null);
            }).finally(()=>{
                loading(false);
                if (timer) timer.stop();
                finallyEvent.trigger(null);
            });
        });
    };
    const refetch = (0, _shared.toRef)(options.refetch);
    (0, _vueDemi.watch)([
        refetch,
        (0, _shared.toRef)(url)
    ], ([refetch2])=>refetch2 && execute(), {
        deep: true
    });
    const shell = {
        isFinished,
        statusCode,
        response,
        error,
        data,
        isFetching,
        canAbort,
        aborted,
        abort,
        execute,
        onFetchResponse: responseEvent.on,
        onFetchError: errorEvent.on,
        onFetchFinally: finallyEvent.on,
        // method
        get: setMethod("GET"),
        put: setMethod("PUT"),
        post: setMethod("POST"),
        delete: setMethod("DELETE"),
        patch: setMethod("PATCH"),
        head: setMethod("HEAD"),
        options: setMethod("OPTIONS"),
        // type
        json: setType("json"),
        text: setType("text"),
        blob: setType("blob"),
        arrayBuffer: setType("arrayBuffer"),
        formData: setType("formData")
    };
    function setMethod(method) {
        return (payload, payloadType)=>{
            if (!isFetching.value) {
                config.method = method;
                config.payload = payload;
                config.payloadType = payloadType;
                if ((0, _vueDemi.isRef)(config.payload)) (0, _vueDemi.watch)([
                    refetch,
                    (0, _shared.toRef)(config.payload)
                ], ([refetch2])=>refetch2 && execute(), {
                    deep: true
                });
                return {
                    ...shell,
                    then (onFulfilled, onRejected) {
                        return waitUntilFinished().then(onFulfilled, onRejected);
                    }
                };
            }
            return void 0;
        };
    }
    function waitUntilFinished() {
        return new Promise((resolve, reject)=>{
            (0, _shared.until)(isFinished).toBe(true).then(()=>resolve(shell)).catch((error2)=>reject(error2));
        });
    }
    function setType(type) {
        return ()=>{
            if (!isFetching.value) {
                config.type = type;
                return {
                    ...shell,
                    then (onFulfilled, onRejected) {
                        return waitUntilFinished().then(onFulfilled, onRejected);
                    }
                };
            }
            return void 0;
        };
    }
    if (options.immediate) Promise.resolve().then(()=>execute());
    return {
        ...shell,
        then (onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
        }
    };
}
function joinPaths(start, end) {
    if (!start.endsWith("/") && !end.startsWith("/")) return `${start}/${end}`;
    return `${start}${end}`;
}
const DEFAULT_OPTIONS = {
    multiple: true,
    accept: "*",
    reset: false
};
function useFileDialog(options = {}) {
    const { document: document1 = defaultDocument } = options;
    const files = (0, _vueDemi.ref)(null);
    const { on: onChange, trigger } = (0, _shared.createEventHook)();
    let input;
    if (document1) {
        input = document1.createElement("input");
        input.type = "file";
        input.onchange = (event)=>{
            const result = event.target;
            files.value = result.files;
            trigger(files.value);
        };
    }
    const reset = ()=>{
        files.value = null;
        if (input) input.value = "";
    };
    const open = (localOptions)=>{
        if (!input) return;
        const _options = {
            ...DEFAULT_OPTIONS,
            ...options,
            ...localOptions
        };
        input.multiple = _options.multiple;
        input.accept = _options.accept;
        if ((0, _shared.hasOwn)(_options, "capture")) input.capture = _options.capture;
        if (_options.reset) reset();
        input.click();
    };
    return {
        files: (0, _vueDemi.readonly)(files),
        open,
        reset,
        onChange
    };
}
function useFileSystemAccess(options = {}) {
    const { window: _window = defaultWindow, dataType = "Text" } = options;
    const window1 = _window;
    const isSupported = useSupported(()=>window1 && "showSaveFilePicker" in window1 && "showOpenFilePicker" in window1);
    const fileHandle = (0, _vueDemi.ref)();
    const data = (0, _vueDemi.ref)();
    const file = (0, _vueDemi.ref)();
    const fileName = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
    });
    const fileMIME = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
    });
    const fileSize = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
    });
    const fileLastModified = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
    });
    async function open(_options = {}) {
        if (!isSupported.value) return;
        const [handle] = await window1.showOpenFilePicker({
            ...(0, _shared.toValue)(options),
            ..._options
        });
        fileHandle.value = handle;
        await updateFile();
        await updateData();
    }
    async function create(_options = {}) {
        if (!isSupported.value) return;
        fileHandle.value = await window1.showSaveFilePicker({
            ...options,
            ..._options
        });
        data.value = void 0;
        await updateFile();
        await updateData();
    }
    async function save(_options = {}) {
        if (!isSupported.value) return;
        if (!fileHandle.value) return saveAs(_options);
        if (data.value) {
            const writableStream = await fileHandle.value.createWritable();
            await writableStream.write(data.value);
            await writableStream.close();
        }
        await updateFile();
    }
    async function saveAs(_options = {}) {
        if (!isSupported.value) return;
        fileHandle.value = await window1.showSaveFilePicker({
            ...options,
            ..._options
        });
        if (data.value) {
            const writableStream = await fileHandle.value.createWritable();
            await writableStream.write(data.value);
            await writableStream.close();
        }
        await updateFile();
    }
    async function updateFile() {
        var _a;
        file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
    }
    async function updateData() {
        var _a, _b;
        const type = (0, _shared.toValue)(dataType);
        if (type === "Text") data.value = await ((_a = file.value) == null ? void 0 : _a.text());
        else if (type === "ArrayBuffer") data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
        else if (type === "Blob") data.value = file.value;
    }
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(dataType), updateData);
    return {
        isSupported,
        data,
        file,
        fileName,
        fileMIME,
        fileSize,
        fileLastModified,
        open,
        create,
        save,
        saveAs,
        updateData
    };
}
function useFocus(target, options = {}) {
    const { initialValue = false, focusVisible = false } = options;
    const innerFocused = (0, _vueDemi.ref)(false);
    const targetElement = (0, _vueDemi.computed)(()=>unrefElement(target));
    useEventListener(targetElement, "focus", (event)=>{
        var _a, _b;
        if (!focusVisible || ((_b = (_a = event.target).matches) == null ? void 0 : _b.call(_a, ":focus-visible"))) innerFocused.value = true;
    });
    useEventListener(targetElement, "blur", ()=>innerFocused.value = false);
    const focused = (0, _vueDemi.computed)({
        get: ()=>innerFocused.value,
        set (value) {
            var _a, _b;
            if (!value && innerFocused.value) (_a = targetElement.value) == null || _a.blur();
            else if (value && !innerFocused.value) (_b = targetElement.value) == null || _b.focus();
        }
    });
    (0, _vueDemi.watch)(targetElement, ()=>{
        focused.value = initialValue;
    }, {
        immediate: true,
        flush: "post"
    });
    return {
        focused
    };
}
function useFocusWithin(target, options = {}) {
    const activeElement = useActiveElement(options);
    const targetElement = (0, _vueDemi.computed)(()=>unrefElement(target));
    const focused = (0, _vueDemi.computed)(()=>targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
    return {
        focused
    };
}
function useFps(options) {
    var _a;
    const fps = (0, _vueDemi.ref)(0);
    if (typeof performance === "undefined") return fps;
    const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
    let last = performance.now();
    let ticks = 0;
    useRafFn(()=>{
        ticks += 1;
        if (ticks >= every) {
            const now = performance.now();
            const diff = now - last;
            fps.value = Math.round(1e3 / (diff / ticks));
            last = now;
            ticks = 0;
        }
    });
    return fps;
}
const eventHandlers = [
    "fullscreenchange",
    "webkitfullscreenchange",
    "webkitendfullscreen",
    "mozfullscreenchange",
    "MSFullscreenChange"
];
function useFullscreen(target, options = {}) {
    const { document: document1 = defaultDocument, autoExit = false } = options;
    const targetRef = (0, _vueDemi.computed)(()=>{
        var _a;
        return (_a = unrefElement(target)) != null ? _a : document1 == null ? void 0 : document1.querySelector("html");
    });
    const isFullscreen = (0, _vueDemi.ref)(false);
    const requestMethod = (0, _vueDemi.computed)(()=>{
        return [
            "requestFullscreen",
            "webkitRequestFullscreen",
            "webkitEnterFullscreen",
            "webkitEnterFullScreen",
            "webkitRequestFullScreen",
            "mozRequestFullScreen",
            "msRequestFullscreen"
        ].find((m)=>document1 && m in document1 || targetRef.value && m in targetRef.value);
    });
    const exitMethod = (0, _vueDemi.computed)(()=>{
        return [
            "exitFullscreen",
            "webkitExitFullscreen",
            "webkitExitFullScreen",
            "webkitCancelFullScreen",
            "mozCancelFullScreen",
            "msExitFullscreen"
        ].find((m)=>document1 && m in document1 || targetRef.value && m in targetRef.value);
    });
    const fullscreenEnabled = (0, _vueDemi.computed)(()=>{
        return [
            "fullScreen",
            "webkitIsFullScreen",
            "webkitDisplayingFullscreen",
            "mozFullScreen",
            "msFullscreenElement"
        ].find((m)=>document1 && m in document1 || targetRef.value && m in targetRef.value);
    });
    const fullscreenElementMethod = [
        "fullscreenElement",
        "webkitFullscreenElement",
        "mozFullScreenElement",
        "msFullscreenElement"
    ].find((m)=>document1 && m in document1);
    const isSupported = useSupported(()=>targetRef.value && document1 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
    const isCurrentElementFullScreen = ()=>{
        if (fullscreenElementMethod) return (document1 == null ? void 0 : document1[fullscreenElementMethod]) === targetRef.value;
        return false;
    };
    const isElementFullScreen = ()=>{
        if (fullscreenEnabled.value) {
            if (document1 && document1[fullscreenEnabled.value] != null) return document1[fullscreenEnabled.value];
            else {
                const target2 = targetRef.value;
                if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) return Boolean(target2[fullscreenEnabled.value]);
            }
        }
        return false;
    };
    async function exit() {
        if (!isSupported.value || !isFullscreen.value) return;
        if (exitMethod.value) {
            if ((document1 == null ? void 0 : document1[exitMethod.value]) != null) await document1[exitMethod.value]();
            else {
                const target2 = targetRef.value;
                if ((target2 == null ? void 0 : target2[exitMethod.value]) != null) await target2[exitMethod.value]();
            }
        }
        isFullscreen.value = false;
    }
    async function enter() {
        if (!isSupported.value || isFullscreen.value) return;
        if (isElementFullScreen()) await exit();
        const target2 = targetRef.value;
        if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
            await target2[requestMethod.value]();
            isFullscreen.value = true;
        }
    }
    async function toggle() {
        await (isFullscreen.value ? exit() : enter());
    }
    const handlerCallback = ()=>{
        const isElementFullScreenValue = isElementFullScreen();
        if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
    };
    useEventListener(document1, eventHandlers, handlerCallback, false);
    useEventListener(()=>unrefElement(targetRef), eventHandlers, handlerCallback, false);
    if (autoExit) (0, _shared.tryOnScopeDispose)(exit);
    return {
        isSupported,
        isFullscreen,
        enter,
        exit,
        toggle
    };
}
function mapGamepadToXbox360Controller(gamepad) {
    return (0, _vueDemi.computed)(()=>{
        if (gamepad.value) return {
            buttons: {
                a: gamepad.value.buttons[0],
                b: gamepad.value.buttons[1],
                x: gamepad.value.buttons[2],
                y: gamepad.value.buttons[3]
            },
            bumper: {
                left: gamepad.value.buttons[4],
                right: gamepad.value.buttons[5]
            },
            triggers: {
                left: gamepad.value.buttons[6],
                right: gamepad.value.buttons[7]
            },
            stick: {
                left: {
                    horizontal: gamepad.value.axes[0],
                    vertical: gamepad.value.axes[1],
                    button: gamepad.value.buttons[10]
                },
                right: {
                    horizontal: gamepad.value.axes[2],
                    vertical: gamepad.value.axes[3],
                    button: gamepad.value.buttons[11]
                }
            },
            dpad: {
                up: gamepad.value.buttons[12],
                down: gamepad.value.buttons[13],
                left: gamepad.value.buttons[14],
                right: gamepad.value.buttons[15]
            },
            back: gamepad.value.buttons[8],
            start: gamepad.value.buttons[9]
        };
        return null;
    });
}
function useGamepad(options = {}) {
    const { navigator = defaultNavigator } = options;
    const isSupported = useSupported(()=>navigator && "getGamepads" in navigator);
    const gamepads = (0, _vueDemi.ref)([]);
    const onConnectedHook = (0, _shared.createEventHook)();
    const onDisconnectedHook = (0, _shared.createEventHook)();
    const stateFromGamepad = (gamepad)=>{
        const hapticActuators = [];
        const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
        if (vibrationActuator) hapticActuators.push(vibrationActuator);
        if (gamepad.hapticActuators) hapticActuators.push(...gamepad.hapticActuators);
        return {
            ...gamepad,
            id: gamepad.id,
            hapticActuators,
            axes: gamepad.axes.map((axes)=>axes),
            buttons: gamepad.buttons.map((button)=>({
                    pressed: button.pressed,
                    touched: button.touched,
                    value: button.value
                }))
        };
    };
    const updateGamepadState = ()=>{
        const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
        for(let i = 0; i < _gamepads.length; ++i){
            const gamepad = _gamepads[i];
            if (gamepad) {
                const index = gamepads.value.findIndex(({ index: index2 })=>index2 === gamepad.index);
                if (index > -1) gamepads.value[index] = stateFromGamepad(gamepad);
            }
        }
    };
    const { isActive, pause, resume } = useRafFn(updateGamepadState);
    const onGamepadConnected = (gamepad)=>{
        if (!gamepads.value.some(({ index })=>index === gamepad.index)) {
            gamepads.value.push(stateFromGamepad(gamepad));
            onConnectedHook.trigger(gamepad.index);
        }
        resume();
    };
    const onGamepadDisconnected = (gamepad)=>{
        gamepads.value = gamepads.value.filter((x)=>x.index !== gamepad.index);
        onDisconnectedHook.trigger(gamepad.index);
    };
    useEventListener("gamepadconnected", (e)=>onGamepadConnected(e.gamepad));
    useEventListener("gamepaddisconnected", (e)=>onGamepadDisconnected(e.gamepad));
    (0, _shared.tryOnMounted)(()=>{
        const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
        if (_gamepads) for(let i = 0; i < _gamepads.length; ++i){
            const gamepad = _gamepads[i];
            if (gamepad) onGamepadConnected(gamepad);
        }
    });
    pause();
    return {
        isSupported,
        onConnected: onConnectedHook.on,
        onDisconnected: onDisconnectedHook.on,
        gamepads,
        pause,
        resume,
        isActive
    };
}
function useGeolocation(options = {}) {
    const { enableHighAccuracy = true, maximumAge = 3e4, timeout = 27e3, navigator = defaultNavigator, immediate = true } = options;
    const isSupported = useSupported(()=>navigator && "geolocation" in navigator);
    const locatedAt = (0, _vueDemi.ref)(null);
    const error = (0, _vueDemi.shallowRef)(null);
    const coords = (0, _vueDemi.ref)({
        accuracy: 0,
        latitude: Number.POSITIVE_INFINITY,
        longitude: Number.POSITIVE_INFINITY,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
    });
    function updatePosition(position) {
        locatedAt.value = position.timestamp;
        coords.value = position.coords;
        error.value = null;
    }
    let watcher;
    function resume() {
        if (isSupported.value) watcher = navigator.geolocation.watchPosition(updatePosition, (err)=>error.value = err, {
            enableHighAccuracy,
            maximumAge,
            timeout
        });
    }
    if (immediate) resume();
    function pause() {
        if (watcher && navigator) navigator.geolocation.clearWatch(watcher);
    }
    (0, _shared.tryOnScopeDispose)(()=>{
        pause();
    });
    return {
        isSupported,
        coords,
        locatedAt,
        error,
        resume,
        pause
    };
}
const defaultEvents$1 = [
    "mousemove",
    "mousedown",
    "resize",
    "keydown",
    "touchstart",
    "wheel"
];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
    const { initialState = false, listenForVisibilityChange = true, events = defaultEvents$1, window: window1 = defaultWindow, eventFilter = (0, _shared.throttleFilter)(50) } = options;
    const idle = (0, _vueDemi.ref)(initialState);
    const lastActive = (0, _vueDemi.ref)((0, _shared.timestamp)());
    let timer;
    const reset = ()=>{
        idle.value = false;
        clearTimeout(timer);
        timer = setTimeout(()=>idle.value = true, timeout);
    };
    const onEvent = (0, _shared.createFilterWrapper)(eventFilter, ()=>{
        lastActive.value = (0, _shared.timestamp)();
        reset();
    });
    if (window1) {
        const document1 = window1.document;
        for (const event of events)useEventListener(window1, event, onEvent, {
            passive: true
        });
        if (listenForVisibilityChange) useEventListener(document1, "visibilitychange", ()=>{
            if (!document1.hidden) onEvent();
        });
        reset();
    }
    return {
        idle,
        lastActive,
        reset
    };
}
async function loadImage(options) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const { src, srcset, sizes, class: clazz, loading, crossorigin, referrerPolicy } = options;
        img.src = src;
        if (srcset) img.srcset = srcset;
        if (sizes) img.sizes = sizes;
        if (clazz) img.className = clazz;
        if (loading) img.loading = loading;
        if (crossorigin) img.crossOrigin = crossorigin;
        if (referrerPolicy) img.referrerPolicy = referrerPolicy;
        img.onload = ()=>resolve(img);
        img.onerror = reject;
    });
}
function useImage(options, asyncStateOptions = {}) {
    const state = useAsyncState(()=>loadImage((0, _shared.toValue)(options)), void 0, {
        resetOnExecute: true,
        ...asyncStateOptions
    });
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(options), ()=>state.execute(asyncStateOptions.delay), {
        deep: true
    });
    return state;
}
const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
    const { throttle = 0, idle = 200, onStop = (0, _shared.noop), onScroll = (0, _shared.noop), offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, eventListenerOptions = {
        capture: false,
        passive: true
    }, behavior = "auto", window: window1 = defaultWindow } = options;
    const internalX = (0, _vueDemi.ref)(0);
    const internalY = (0, _vueDemi.ref)(0);
    const x = (0, _vueDemi.computed)({
        get () {
            return internalX.value;
        },
        set (x2) {
            scrollTo(x2, void 0);
        }
    });
    const y = (0, _vueDemi.computed)({
        get () {
            return internalY.value;
        },
        set (y2) {
            scrollTo(void 0, y2);
        }
    });
    function scrollTo(_x, _y) {
        var _a, _b, _c;
        if (!window1) return;
        const _element = (0, _shared.toValue)(element);
        if (!_element) return;
        (_c = _element instanceof Document ? window1.document.body : _element) == null || _c.scrollTo({
            top: (_a = (0, _shared.toValue)(_y)) != null ? _a : y.value,
            left: (_b = (0, _shared.toValue)(_x)) != null ? _b : x.value,
            behavior: (0, _shared.toValue)(behavior)
        });
    }
    const isScrolling = (0, _vueDemi.ref)(false);
    const arrivedState = (0, _vueDemi.reactive)({
        left: true,
        right: false,
        top: true,
        bottom: false
    });
    const directions = (0, _vueDemi.reactive)({
        left: false,
        right: false,
        top: false,
        bottom: false
    });
    const onScrollEnd = (e)=>{
        if (!isScrolling.value) return;
        isScrolling.value = false;
        directions.left = false;
        directions.right = false;
        directions.top = false;
        directions.bottom = false;
        onStop(e);
    };
    const onScrollEndDebounced = (0, _shared.useDebounceFn)(onScrollEnd, throttle + idle);
    const setArrivedState = (target)=>{
        var _a;
        if (!window1) return;
        const el = target.document ? target.document.documentElement : (_a = target.documentElement) != null ? _a : target;
        const { display, flexDirection } = getComputedStyle(el);
        const scrollLeft = el.scrollLeft;
        directions.left = scrollLeft < internalX.value;
        directions.right = scrollLeft > internalX.value;
        const left = Math.abs(scrollLeft) <= 0 + (offset.left || 0);
        const right = Math.abs(scrollLeft) + el.clientWidth >= el.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "row-reverse") {
            arrivedState.left = right;
            arrivedState.right = left;
        } else {
            arrivedState.left = left;
            arrivedState.right = right;
        }
        internalX.value = scrollLeft;
        let scrollTop = el.scrollTop;
        if (target === window1.document && !scrollTop) scrollTop = window1.document.body.scrollTop;
        directions.top = scrollTop < internalY.value;
        directions.bottom = scrollTop > internalY.value;
        const top = Math.abs(scrollTop) <= 0 + (offset.top || 0);
        const bottom = Math.abs(scrollTop) + el.clientHeight >= el.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
        if (display === "flex" && flexDirection === "column-reverse") {
            arrivedState.top = bottom;
            arrivedState.bottom = top;
        } else {
            arrivedState.top = top;
            arrivedState.bottom = bottom;
        }
        internalY.value = scrollTop;
    };
    const onScrollHandler = (e)=>{
        var _a;
        if (!window1) return;
        const eventTarget = (_a = e.target.documentElement) != null ? _a : e.target;
        setArrivedState(eventTarget);
        isScrolling.value = true;
        onScrollEndDebounced(e);
        onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? (0, _shared.useThrottleFn)(onScrollHandler, throttle, true, false) : onScrollHandler, eventListenerOptions);
    useEventListener(element, "scrollend", onScrollEnd, eventListenerOptions);
    return {
        x,
        y,
        isScrolling,
        arrivedState,
        directions,
        measure () {
            const _element = (0, _shared.toValue)(element);
            if (window1 && _element) setArrivedState(_element);
        }
    };
}
function resolveElement(el) {
    if (typeof Window !== "undefined" && el instanceof Window) return el.document.documentElement;
    if (typeof Document !== "undefined" && el instanceof Document) return el.documentElement;
    return el;
}
function useInfiniteScroll(element, onLoadMore, options = {}) {
    var _a;
    const { direction = "bottom", interval = 100 } = options;
    const state = (0, _vueDemi.reactive)(useScroll(element, {
        ...options,
        offset: {
            [direction]: (_a = options.distance) != null ? _a : 0,
            ...options.offset
        }
    }));
    const promise = (0, _vueDemi.ref)();
    const isLoading = (0, _vueDemi.computed)(()=>!!promise.value);
    const observedElement = (0, _vueDemi.computed)(()=>{
        return resolveElement((0, _shared.toValue)(element));
    });
    const isElementVisible = useElementVisibility(observedElement);
    function checkAndLoad() {
        state.measure();
        if (!observedElement.value || !isElementVisible.value) return;
        const { scrollHeight, clientHeight, scrollWidth, clientWidth } = observedElement.value;
        const isNarrower = direction === "bottom" || direction === "top" ? scrollHeight <= clientHeight : scrollWidth <= clientWidth;
        if (state.arrivedState[direction] || isNarrower) {
            if (!promise.value) promise.value = Promise.all([
                onLoadMore(state),
                new Promise((resolve)=>setTimeout(resolve, interval))
            ]).finally(()=>{
                promise.value = null;
                (0, _vueDemi.nextTick)(()=>checkAndLoad());
            });
        }
    }
    (0, _vueDemi.watch)(()=>[
            state.arrivedState[direction],
            isElementVisible.value
        ], checkAndLoad, {
        immediate: true
    });
    return {
        isLoading
    };
}
const defaultEvents = [
    "mousedown",
    "mouseup",
    "keydown",
    "keyup"
];
function useKeyModifier(modifier, options = {}) {
    const { events = defaultEvents, document: document1 = defaultDocument, initial = null } = options;
    const state = (0, _vueDemi.ref)(initial);
    if (document1) events.forEach((listenerEvent)=>{
        useEventListener(document1, listenerEvent, (evt)=>{
            if (typeof evt.getModifierState === "function") state.value = evt.getModifierState(modifier);
        });
    });
    return state;
}
function useLocalStorage(key, initialValue, options = {}) {
    const { window: window1 = defaultWindow } = options;
    return useStorage(key, initialValue, window1 == null ? void 0 : window1.localStorage, options);
}
const DefaultMagicKeysAliasMap = {
    ctrl: "control",
    command: "meta",
    cmd: "meta",
    option: "alt",
    up: "arrowup",
    down: "arrowdown",
    left: "arrowleft",
    right: "arrowright"
};
function useMagicKeys(options = {}) {
    const { reactive: useReactive = false, target = defaultWindow, aliasMap = DefaultMagicKeysAliasMap, passive = true, onEventFired = (0, _shared.noop) } = options;
    const current = (0, _vueDemi.reactive)(/* @__PURE__ */ new Set());
    const obj = {
        toJSON () {
            return {};
        },
        current
    };
    const refs = useReactive ? (0, _vueDemi.reactive)(obj) : obj;
    const metaDeps = /* @__PURE__ */ new Set();
    const usedKeys = /* @__PURE__ */ new Set();
    function setRefs(key, value) {
        if (key in refs) {
            if (useReactive) refs[key] = value;
            else refs[key].value = value;
        }
    }
    function reset() {
        current.clear();
        for (const key of usedKeys)setRefs(key, false);
    }
    function updateRefs(e, value) {
        var _a, _b;
        const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
        const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
        const values = [
            code,
            key
        ].filter(Boolean);
        if (key) {
            if (value) current.add(key);
            else current.delete(key);
        }
        for (const key2 of values){
            usedKeys.add(key2);
            setRefs(key2, value);
        }
        if (key === "meta" && !value) {
            metaDeps.forEach((key2)=>{
                current.delete(key2);
                setRefs(key2, false);
            });
            metaDeps.clear();
        } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) [
            ...current,
            ...values
        ].forEach((key2)=>metaDeps.add(key2));
    }
    useEventListener(target, "keydown", (e)=>{
        updateRefs(e, true);
        return onEventFired(e);
    }, {
        passive
    });
    useEventListener(target, "keyup", (e)=>{
        updateRefs(e, false);
        return onEventFired(e);
    }, {
        passive
    });
    useEventListener("blur", reset, {
        passive: true
    });
    useEventListener("focus", reset, {
        passive: true
    });
    const proxy = new Proxy(refs, {
        get (target2, prop, rec) {
            if (typeof prop !== "string") return Reflect.get(target2, prop, rec);
            prop = prop.toLowerCase();
            if (prop in aliasMap) prop = aliasMap[prop];
            if (!(prop in refs)) {
                if (/[+_-]/.test(prop)) {
                    const keys = prop.split(/[+_-]/g).map((i)=>i.trim());
                    refs[prop] = (0, _vueDemi.computed)(()=>keys.every((key)=>(0, _shared.toValue)(proxy[key])));
                } else refs[prop] = (0, _vueDemi.ref)(false);
            }
            const r = Reflect.get(target2, prop, rec);
            return useReactive ? (0, _shared.toValue)(r) : r;
        }
    });
    return proxy;
}
function usingElRef(source, cb) {
    if ((0, _shared.toValue)(source)) cb((0, _shared.toValue)(source));
}
function timeRangeToArray(timeRanges) {
    let ranges = [];
    for(let i = 0; i < timeRanges.length; ++i)ranges = [
        ...ranges,
        [
            timeRanges.start(i),
            timeRanges.end(i)
        ]
    ];
    return ranges;
}
function tracksToArray(tracks) {
    return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id)=>({
            id,
            label,
            kind,
            language,
            mode,
            activeCues,
            cues,
            inBandMetadataTrackDispatchType
        }));
}
const defaultOptions = {
    src: "",
    tracks: []
};
function useMediaControls(target, options = {}) {
    options = {
        ...defaultOptions,
        ...options
    };
    const { document: document1 = defaultDocument } = options;
    const currentTime = (0, _vueDemi.ref)(0);
    const duration = (0, _vueDemi.ref)(0);
    const seeking = (0, _vueDemi.ref)(false);
    const volume = (0, _vueDemi.ref)(1);
    const waiting = (0, _vueDemi.ref)(false);
    const ended = (0, _vueDemi.ref)(false);
    const playing = (0, _vueDemi.ref)(false);
    const rate = (0, _vueDemi.ref)(1);
    const stalled = (0, _vueDemi.ref)(false);
    const buffered = (0, _vueDemi.ref)([]);
    const tracks = (0, _vueDemi.ref)([]);
    const selectedTrack = (0, _vueDemi.ref)(-1);
    const isPictureInPicture = (0, _vueDemi.ref)(false);
    const muted = (0, _vueDemi.ref)(false);
    const supportsPictureInPicture = document1 && "pictureInPictureEnabled" in document1;
    const sourceErrorEvent = (0, _shared.createEventHook)();
    const disableTrack = (track)=>{
        usingElRef(target, (el)=>{
            if (track) {
                const id = typeof track === "number" ? track : track.id;
                el.textTracks[id].mode = "disabled";
            } else for(let i = 0; i < el.textTracks.length; ++i)el.textTracks[i].mode = "disabled";
            selectedTrack.value = -1;
        });
    };
    const enableTrack = (track, disableTracks = true)=>{
        usingElRef(target, (el)=>{
            const id = typeof track === "number" ? track : track.id;
            if (disableTracks) disableTrack();
            el.textTracks[id].mode = "showing";
            selectedTrack.value = id;
        });
    };
    const togglePictureInPicture = ()=>{
        return new Promise((resolve, reject)=>{
            usingElRef(target, async (el)=>{
                if (supportsPictureInPicture) {
                    if (!isPictureInPicture.value) el.requestPictureInPicture().then(resolve).catch(reject);
                    else document1.exitPictureInPicture().then(resolve).catch(reject);
                }
            });
        });
    };
    (0, _vueDemi.watchEffect)(()=>{
        if (!document1) return;
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        const src = (0, _shared.toValue)(options.src);
        let sources = [];
        if (!src) return;
        if (typeof src === "string") sources = [
            {
                src
            }
        ];
        else if (Array.isArray(src)) sources = src;
        else if ((0, _shared.isObject)(src)) sources = [
            src
        ];
        el.querySelectorAll("source").forEach((e)=>{
            e.removeEventListener("error", sourceErrorEvent.trigger);
            e.remove();
        });
        sources.forEach(({ src: src2, type })=>{
            const source = document1.createElement("source");
            source.setAttribute("src", src2);
            source.setAttribute("type", type || "");
            source.addEventListener("error", sourceErrorEvent.trigger);
            el.appendChild(source);
        });
        el.load();
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        el.querySelectorAll("source").forEach((e)=>e.removeEventListener("error", sourceErrorEvent.trigger));
    });
    (0, _vueDemi.watch)([
        target,
        volume
    ], ()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        el.volume = volume.value;
    });
    (0, _vueDemi.watch)([
        target,
        muted
    ], ()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        el.muted = muted.value;
    });
    (0, _vueDemi.watch)([
        target,
        rate
    ], ()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        el.playbackRate = rate.value;
    });
    (0, _vueDemi.watchEffect)(()=>{
        if (!document1) return;
        const textTracks = (0, _shared.toValue)(options.tracks);
        const el = (0, _shared.toValue)(target);
        if (!textTracks || !textTracks.length || !el) return;
        el.querySelectorAll("track").forEach((e)=>e.remove());
        textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i)=>{
            const track = document1.createElement("track");
            track.default = isDefault || false;
            track.kind = kind;
            track.label = label;
            track.src = src;
            track.srclang = srcLang;
            if (track.default) selectedTrack.value = i;
            el.appendChild(track);
        });
    });
    const { ignoreUpdates: ignoreCurrentTimeUpdates } = (0, _shared.watchIgnorable)(currentTime, (time)=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        el.currentTime = time;
    });
    const { ignoreUpdates: ignorePlayingUpdates } = (0, _shared.watchIgnorable)(playing, (isPlaying)=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        isPlaying ? el.play() : el.pause();
    });
    useEventListener(target, "timeupdate", ()=>ignoreCurrentTimeUpdates(()=>currentTime.value = (0, _shared.toValue)(target).currentTime));
    useEventListener(target, "durationchange", ()=>duration.value = (0, _shared.toValue)(target).duration);
    useEventListener(target, "progress", ()=>buffered.value = timeRangeToArray((0, _shared.toValue)(target).buffered));
    useEventListener(target, "seeking", ()=>seeking.value = true);
    useEventListener(target, "seeked", ()=>seeking.value = false);
    useEventListener(target, [
        "waiting",
        "loadstart"
    ], ()=>{
        waiting.value = true;
        ignorePlayingUpdates(()=>playing.value = false);
    });
    useEventListener(target, "loadeddata", ()=>waiting.value = false);
    useEventListener(target, "playing", ()=>{
        waiting.value = false;
        ended.value = false;
        ignorePlayingUpdates(()=>playing.value = true);
    });
    useEventListener(target, "ratechange", ()=>rate.value = (0, _shared.toValue)(target).playbackRate);
    useEventListener(target, "stalled", ()=>stalled.value = true);
    useEventListener(target, "ended", ()=>ended.value = true);
    useEventListener(target, "pause", ()=>ignorePlayingUpdates(()=>playing.value = false));
    useEventListener(target, "play", ()=>ignorePlayingUpdates(()=>playing.value = true));
    useEventListener(target, "enterpictureinpicture", ()=>isPictureInPicture.value = true);
    useEventListener(target, "leavepictureinpicture", ()=>isPictureInPicture.value = false);
    useEventListener(target, "volumechange", ()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        volume.value = el.volume;
        muted.value = el.muted;
    });
    const listeners = [];
    const stop = (0, _vueDemi.watch)([
        target
    ], ()=>{
        const el = (0, _shared.toValue)(target);
        if (!el) return;
        stop();
        listeners[0] = useEventListener(el.textTracks, "addtrack", ()=>tracks.value = tracksToArray(el.textTracks));
        listeners[1] = useEventListener(el.textTracks, "removetrack", ()=>tracks.value = tracksToArray(el.textTracks));
        listeners[2] = useEventListener(el.textTracks, "change", ()=>tracks.value = tracksToArray(el.textTracks));
    });
    (0, _shared.tryOnScopeDispose)(()=>listeners.forEach((listener)=>listener()));
    return {
        currentTime,
        duration,
        waiting,
        seeking,
        ended,
        stalled,
        buffered,
        playing,
        rate,
        // Volume
        volume,
        muted,
        // Tracks
        tracks,
        selectedTrack,
        enableTrack,
        disableTrack,
        // Picture in Picture
        supportsPictureInPicture,
        togglePictureInPicture,
        isPictureInPicture,
        // Events
        onSourceError: sourceErrorEvent.on
    };
}
function getMapVue2Compat() {
    const data = (0, _vueDemi.reactive)({});
    return {
        get: (key)=>data[key],
        set: (key, value)=>(0, _vueDemi.set)(data, key, value),
        has: (key)=>(0, _shared.hasOwn)(data, key),
        delete: (key)=>(0, _vueDemi.del)(data, key),
        clear: ()=>{
            Object.keys(data).forEach((key)=>{
                (0, _vueDemi.del)(data, key);
            });
        }
    };
}
function useMemoize(resolver, options) {
    const initCache = ()=>{
        if (options == null ? void 0 : options.cache) return (0, _vueDemi.reactive)(options.cache);
        if (0, _vueDemi.isVue2) return getMapVue2Compat();
        return (0, _vueDemi.reactive)(/* @__PURE__ */ new Map());
    };
    const cache = initCache();
    const generateKey = (...args)=>(options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
    const _loadData = (key, ...args)=>{
        cache.set(key, resolver(...args));
        return cache.get(key);
    };
    const loadData = (...args)=>_loadData(generateKey(...args), ...args);
    const deleteData = (...args)=>{
        cache.delete(generateKey(...args));
    };
    const clearData = ()=>{
        cache.clear();
    };
    const memoized = (...args)=>{
        const key = generateKey(...args);
        if (cache.has(key)) return cache.get(key);
        return _loadData(key, ...args);
    };
    memoized.load = loadData;
    memoized.delete = deleteData;
    memoized.clear = clearData;
    memoized.generateKey = generateKey;
    memoized.cache = cache;
    return memoized;
}
function useMemory(options = {}) {
    const memory = (0, _vueDemi.ref)();
    const isSupported = useSupported(()=>typeof performance !== "undefined" && "memory" in performance);
    if (isSupported.value) {
        const { interval = 1e3 } = options;
        (0, _shared.useIntervalFn)(()=>{
            memory.value = performance.memory;
        }, interval, {
            immediate: options.immediate,
            immediateCallback: options.immediateCallback
        });
    }
    return {
        isSupported,
        memory
    };
}
const UseMouseBuiltinExtractors = {
    page: (event)=>[
            event.pageX,
            event.pageY
        ],
    client: (event)=>[
            event.clientX,
            event.clientY
        ],
    screen: (event)=>[
            event.screenX,
            event.screenY
        ],
    movement: (event)=>event instanceof Touch ? null : [
            event.movementX,
            event.movementY
        ]
};
function useMouse(options = {}) {
    const { type = "page", touch = true, resetOnTouchEnds = false, initialValue = {
        x: 0,
        y: 0
    }, window: window1 = defaultWindow, target = window1, scroll = true, eventFilter } = options;
    let _prevMouseEvent = null;
    const x = (0, _vueDemi.ref)(initialValue.x);
    const y = (0, _vueDemi.ref)(initialValue.y);
    const sourceType = (0, _vueDemi.ref)(null);
    const extractor = typeof type === "function" ? type : UseMouseBuiltinExtractors[type];
    const mouseHandler = (event)=>{
        const result = extractor(event);
        _prevMouseEvent = event;
        if (result) {
            [x.value, y.value] = result;
            sourceType.value = "mouse";
        }
    };
    const touchHandler = (event)=>{
        if (event.touches.length > 0) {
            const result = extractor(event.touches[0]);
            if (result) {
                [x.value, y.value] = result;
                sourceType.value = "touch";
            }
        }
    };
    const scrollHandler = ()=>{
        if (!_prevMouseEvent || !window1) return;
        const pos = extractor(_prevMouseEvent);
        if (_prevMouseEvent instanceof MouseEvent && pos) {
            x.value = pos[0] + window1.scrollX;
            y.value = pos[1] + window1.scrollY;
        }
    };
    const reset = ()=>{
        x.value = initialValue.x;
        y.value = initialValue.y;
    };
    const mouseHandlerWrapper = eventFilter ? (event)=>eventFilter(()=>mouseHandler(event), {}) : (event)=>mouseHandler(event);
    const touchHandlerWrapper = eventFilter ? (event)=>eventFilter(()=>touchHandler(event), {}) : (event)=>touchHandler(event);
    const scrollHandlerWrapper = eventFilter ? ()=>eventFilter(()=>scrollHandler(), {}) : ()=>scrollHandler();
    if (target) {
        const listenerOptions = {
            passive: true
        };
        useEventListener(target, [
            "mousemove",
            "dragover"
        ], mouseHandlerWrapper, listenerOptions);
        if (touch && type !== "movement") {
            useEventListener(target, [
                "touchstart",
                "touchmove"
            ], touchHandlerWrapper, listenerOptions);
            if (resetOnTouchEnds) useEventListener(target, "touchend", reset, listenerOptions);
        }
        if (scroll && type === "page") useEventListener(window1, "scroll", scrollHandlerWrapper, {
            passive: true
        });
    }
    return {
        x,
        y,
        sourceType
    };
}
function useMouseInElement(target, options = {}) {
    const { handleOutside = true, window: window1 = defaultWindow } = options;
    const { x, y, sourceType } = useMouse(options);
    const targetRef = (0, _vueDemi.ref)(target != null ? target : window1 == null ? void 0 : window1.document.body);
    const elementX = (0, _vueDemi.ref)(0);
    const elementY = (0, _vueDemi.ref)(0);
    const elementPositionX = (0, _vueDemi.ref)(0);
    const elementPositionY = (0, _vueDemi.ref)(0);
    const elementHeight = (0, _vueDemi.ref)(0);
    const elementWidth = (0, _vueDemi.ref)(0);
    const isOutside = (0, _vueDemi.ref)(true);
    let stop = ()=>{};
    if (window1) {
        stop = (0, _vueDemi.watch)([
            targetRef,
            x,
            y
        ], ()=>{
            const el = unrefElement(targetRef);
            if (!el) return;
            const { left, top, width, height } = el.getBoundingClientRect();
            elementPositionX.value = left + window1.pageXOffset;
            elementPositionY.value = top + window1.pageYOffset;
            elementHeight.value = height;
            elementWidth.value = width;
            const elX = x.value - elementPositionX.value;
            const elY = y.value - elementPositionY.value;
            isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
            if (handleOutside || !isOutside.value) {
                elementX.value = elX;
                elementY.value = elY;
            }
        }, {
            immediate: true
        });
        useEventListener(document, "mouseleave", ()=>{
            isOutside.value = true;
        });
    }
    return {
        x,
        y,
        sourceType,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
        elementHeight,
        elementWidth,
        isOutside,
        stop
    };
}
function useMousePressed(options = {}) {
    const { touch = true, drag = true, initialValue = false, window: window1 = defaultWindow } = options;
    const pressed = (0, _vueDemi.ref)(initialValue);
    const sourceType = (0, _vueDemi.ref)(null);
    if (!window1) return {
        pressed,
        sourceType
    };
    const onPressed = (srcType)=>()=>{
            pressed.value = true;
            sourceType.value = srcType;
        };
    const onReleased = ()=>{
        pressed.value = false;
        sourceType.value = null;
    };
    const target = (0, _vueDemi.computed)(()=>unrefElement(options.target) || window1);
    useEventListener(target, "mousedown", onPressed("mouse"), {
        passive: true
    });
    useEventListener(window1, "mouseleave", onReleased, {
        passive: true
    });
    useEventListener(window1, "mouseup", onReleased, {
        passive: true
    });
    if (drag) {
        useEventListener(target, "dragstart", onPressed("mouse"), {
            passive: true
        });
        useEventListener(window1, "drop", onReleased, {
            passive: true
        });
        useEventListener(window1, "dragend", onReleased, {
            passive: true
        });
    }
    if (touch) {
        useEventListener(target, "touchstart", onPressed("touch"), {
            passive: true
        });
        useEventListener(window1, "touchend", onReleased, {
            passive: true
        });
        useEventListener(window1, "touchcancel", onReleased, {
            passive: true
        });
    }
    return {
        pressed,
        sourceType
    };
}
function useNavigatorLanguage(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const navigator = window1 == null ? void 0 : window1.navigator;
    const isSupported = useSupported(()=>navigator && "language" in navigator);
    const language = (0, _vueDemi.ref)(navigator == null ? void 0 : navigator.language);
    useEventListener(window1, "languagechange", ()=>{
        if (navigator) language.value = navigator.language;
    });
    return {
        isSupported,
        language
    };
}
function useNetwork(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const navigator = window1 == null ? void 0 : window1.navigator;
    const isSupported = useSupported(()=>navigator && "connection" in navigator);
    const isOnline = (0, _vueDemi.ref)(true);
    const saveData = (0, _vueDemi.ref)(false);
    const offlineAt = (0, _vueDemi.ref)(void 0);
    const onlineAt = (0, _vueDemi.ref)(void 0);
    const downlink = (0, _vueDemi.ref)(void 0);
    const downlinkMax = (0, _vueDemi.ref)(void 0);
    const rtt = (0, _vueDemi.ref)(void 0);
    const effectiveType = (0, _vueDemi.ref)(void 0);
    const type = (0, _vueDemi.ref)("unknown");
    const connection = isSupported.value && navigator.connection;
    function updateNetworkInformation() {
        if (!navigator) return;
        isOnline.value = navigator.onLine;
        offlineAt.value = isOnline.value ? void 0 : Date.now();
        onlineAt.value = isOnline.value ? Date.now() : void 0;
        if (connection) {
            downlink.value = connection.downlink;
            downlinkMax.value = connection.downlinkMax;
            effectiveType.value = connection.effectiveType;
            rtt.value = connection.rtt;
            saveData.value = connection.saveData;
            type.value = connection.type;
        }
    }
    if (window1) {
        useEventListener(window1, "offline", ()=>{
            isOnline.value = false;
            offlineAt.value = Date.now();
        });
        useEventListener(window1, "online", ()=>{
            isOnline.value = true;
            onlineAt.value = Date.now();
        });
    }
    if (connection) useEventListener(connection, "change", updateNetworkInformation, false);
    updateNetworkInformation();
    return {
        isSupported,
        isOnline,
        saveData,
        offlineAt,
        onlineAt,
        downlink,
        downlinkMax,
        effectiveType,
        rtt,
        type
    };
}
function useNow(options = {}) {
    const { controls: exposeControls = false, interval = "requestAnimationFrame" } = options;
    const now = (0, _vueDemi.ref)(/* @__PURE__ */ new Date());
    const update = ()=>now.value = /* @__PURE__ */ new Date();
    const controls = interval === "requestAnimationFrame" ? useRafFn(update, {
        immediate: true
    }) : (0, _shared.useIntervalFn)(update, interval, {
        immediate: true
    });
    if (exposeControls) return {
        now,
        ...controls
    };
    else return now;
}
function useObjectUrl(object) {
    const url = (0, _vueDemi.ref)();
    const release = ()=>{
        if (url.value) URL.revokeObjectURL(url.value);
        url.value = void 0;
    };
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(object), (newObject)=>{
        release();
        if (newObject) url.value = URL.createObjectURL(newObject);
    }, {
        immediate: true
    });
    (0, _shared.tryOnScopeDispose)(release);
    return (0, _vueDemi.readonly)(url);
}
function useClamp(value, min, max) {
    if (typeof value === "function" || (0, _vueDemi.isReadonly)(value)) return (0, _vueDemi.computed)(()=>(0, _shared.clamp)((0, _shared.toValue)(value), (0, _shared.toValue)(min), (0, _shared.toValue)(max)));
    const _value = (0, _vueDemi.ref)(value);
    return (0, _vueDemi.computed)({
        get () {
            return _value.value = (0, _shared.clamp)(_value.value, (0, _shared.toValue)(min), (0, _shared.toValue)(max));
        },
        set (value2) {
            _value.value = (0, _shared.clamp)(value2, (0, _shared.toValue)(min), (0, _shared.toValue)(max));
        }
    });
}
function useOffsetPagination(options) {
    const { total = Number.POSITIVE_INFINITY, pageSize = 10, page = 1, onPageChange = (0, _shared.noop), onPageSizeChange = (0, _shared.noop), onPageCountChange = (0, _shared.noop) } = options;
    const currentPageSize = useClamp(pageSize, 1, Number.POSITIVE_INFINITY);
    const pageCount = (0, _vueDemi.computed)(()=>Math.max(1, Math.ceil((0, _shared.toValue)(total) / (0, _shared.toValue)(currentPageSize))));
    const currentPage = useClamp(page, 1, pageCount);
    const isFirstPage = (0, _vueDemi.computed)(()=>currentPage.value === 1);
    const isLastPage = (0, _vueDemi.computed)(()=>currentPage.value === pageCount.value);
    if ((0, _vueDemi.isRef)(page)) (0, _shared.syncRef)(page, currentPage);
    if ((0, _vueDemi.isRef)(pageSize)) (0, _shared.syncRef)(pageSize, currentPageSize);
    function prev() {
        currentPage.value--;
    }
    function next() {
        currentPage.value++;
    }
    const returnValue = {
        currentPage,
        currentPageSize,
        pageCount,
        isFirstPage,
        isLastPage,
        prev,
        next
    };
    (0, _vueDemi.watch)(currentPage, ()=>{
        onPageChange((0, _vueDemi.reactive)(returnValue));
    });
    (0, _vueDemi.watch)(currentPageSize, ()=>{
        onPageSizeChange((0, _vueDemi.reactive)(returnValue));
    });
    (0, _vueDemi.watch)(pageCount, ()=>{
        onPageCountChange((0, _vueDemi.reactive)(returnValue));
    });
    return returnValue;
}
function useOnline(options = {}) {
    const { isOnline } = useNetwork(options);
    return isOnline;
}
function usePageLeave(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const isLeft = (0, _vueDemi.ref)(false);
    const handler = (event)=>{
        if (!window1) return;
        event = event || window1.event;
        const from = event.relatedTarget || event.toElement;
        isLeft.value = !from;
    };
    if (window1) {
        useEventListener(window1, "mouseout", handler, {
            passive: true
        });
        useEventListener(window1.document, "mouseleave", handler, {
            passive: true
        });
        useEventListener(window1.document, "mouseenter", handler, {
            passive: true
        });
    }
    return isLeft;
}
function useParallax(target, options = {}) {
    const { deviceOrientationTiltAdjust = (i)=>i, deviceOrientationRollAdjust = (i)=>i, mouseTiltAdjust = (i)=>i, mouseRollAdjust = (i)=>i, window: window1 = defaultWindow } = options;
    const orientation = (0, _vueDemi.reactive)(useDeviceOrientation({
        window: window1
    }));
    const { elementX: x, elementY: y, elementWidth: width, elementHeight: height } = useMouseInElement(target, {
        handleOutside: false,
        window: window1
    });
    const source = (0, _vueDemi.computed)(()=>{
        if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0)) return "deviceOrientation";
        return "mouse";
    });
    const roll = (0, _vueDemi.computed)(()=>{
        if (source.value === "deviceOrientation") {
            const value = -orientation.beta / 90;
            return deviceOrientationRollAdjust(value);
        } else {
            const value = -(y.value - height.value / 2) / height.value;
            return mouseRollAdjust(value);
        }
    });
    const tilt = (0, _vueDemi.computed)(()=>{
        if (source.value === "deviceOrientation") {
            const value = orientation.gamma / 90;
            return deviceOrientationTiltAdjust(value);
        } else {
            const value = (x.value - width.value / 2) / width.value;
            return mouseTiltAdjust(value);
        }
    });
    return {
        roll,
        tilt,
        source
    };
}
function useParentElement(element = useCurrentElement()) {
    const parentElement = (0, _vueDemi.shallowRef)();
    const update = ()=>{
        const el = unrefElement(element);
        if (el) parentElement.value = el.parentElement;
    };
    (0, _shared.tryOnMounted)(update);
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(element), update);
    return parentElement;
}
function usePerformanceObserver(options, callback) {
    const { window: window1 = defaultWindow, immediate = true, ...performanceOptions } = options;
    const isSupported = useSupported(()=>window1 && "PerformanceObserver" in window1);
    let observer;
    const stop = ()=>{
        observer == null || observer.disconnect();
    };
    const start = ()=>{
        if (isSupported.value) {
            stop();
            observer = new PerformanceObserver(callback);
            observer.observe(performanceOptions);
        }
    };
    (0, _shared.tryOnScopeDispose)(stop);
    if (immediate) start();
    return {
        isSupported,
        start,
        stop
    };
}
const defaultState = {
    x: 0,
    y: 0,
    pointerId: 0,
    pressure: 0,
    tiltX: 0,
    tiltY: 0,
    width: 0,
    height: 0,
    twist: 0,
    pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
    const { target = defaultWindow } = options;
    const isInside = (0, _vueDemi.ref)(false);
    const state = (0, _vueDemi.ref)(options.initialValue || {});
    Object.assign(state.value, defaultState, state.value);
    const handler = (event)=>{
        isInside.value = true;
        if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType)) return;
        state.value = (0, _shared.objectPick)(event, keys, false);
    };
    if (target) {
        const listenerOptions = {
            passive: true
        };
        useEventListener(target, [
            "pointerdown",
            "pointermove",
            "pointerup"
        ], handler, listenerOptions);
        useEventListener(target, "pointerleave", ()=>isInside.value = false, listenerOptions);
    }
    return {
        ...(0, _shared.toRefs)(state),
        isInside
    };
}
function usePointerLock(target, options = {}) {
    const { document: document1 = defaultDocument, pointerLockOptions } = options;
    const isSupported = useSupported(()=>document1 && "pointerLockElement" in document1);
    const element = (0, _vueDemi.ref)();
    const triggerElement = (0, _vueDemi.ref)();
    let targetElement;
    if (isSupported.value) {
        useEventListener(document1, "pointerlockchange", ()=>{
            var _a;
            const currentElement = (_a = document1.pointerLockElement) != null ? _a : element.value;
            if (targetElement && currentElement === targetElement) {
                element.value = document1.pointerLockElement;
                if (!element.value) targetElement = triggerElement.value = null;
            }
        });
        useEventListener(document1, "pointerlockerror", ()=>{
            var _a;
            const currentElement = (_a = document1.pointerLockElement) != null ? _a : element.value;
            if (targetElement && currentElement === targetElement) {
                const action = document1.pointerLockElement ? "release" : "acquire";
                throw new Error(`Failed to ${action} pointer lock.`);
            }
        });
    }
    async function lock(e, options2) {
        var _a;
        if (!isSupported.value) throw new Error("Pointer Lock API is not supported by your browser.");
        triggerElement.value = e instanceof Event ? e.currentTarget : null;
        targetElement = e instanceof Event ? (_a = unrefElement(target)) != null ? _a : triggerElement.value : unrefElement(e);
        if (!targetElement) throw new Error("Target element undefined.");
        targetElement.requestPointerLock(options2 != null ? options2 : pointerLockOptions);
        return await (0, _shared.until)(element).toBe(targetElement);
    }
    async function unlock() {
        if (!element.value) return false;
        document1.exitPointerLock();
        await (0, _shared.until)(element).toBeNull();
        return true;
    }
    return {
        isSupported,
        element,
        triggerElement,
        lock,
        unlock
    };
}
function usePointerSwipe(target, options = {}) {
    const targetRef = (0, _shared.toRef)(target);
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart } = options;
    const posStart = (0, _vueDemi.reactive)({
        x: 0,
        y: 0
    });
    const updatePosStart = (x, y)=>{
        posStart.x = x;
        posStart.y = y;
    };
    const posEnd = (0, _vueDemi.reactive)({
        x: 0,
        y: 0
    });
    const updatePosEnd = (x, y)=>{
        posEnd.x = x;
        posEnd.y = y;
    };
    const distanceX = (0, _vueDemi.computed)(()=>posStart.x - posEnd.x);
    const distanceY = (0, _vueDemi.computed)(()=>posStart.y - posEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = (0, _vueDemi.computed)(()=>max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
    const isSwiping = (0, _vueDemi.ref)(false);
    const isPointerDown = (0, _vueDemi.ref)(false);
    const direction = (0, _vueDemi.computed)(()=>{
        if (!isThresholdExceeded.value) return "none";
        if (abs(distanceX.value) > abs(distanceY.value)) return distanceX.value > 0 ? "left" : "right";
        else return distanceY.value > 0 ? "up" : "down";
    });
    const eventIsAllowed = (e)=>{
        var _a, _b, _c;
        const isReleasingButton = e.buttons === 0;
        const isPrimaryButton = e.buttons === 1;
        return (_c = (_b = (_a = options.pointerTypes) == null ? void 0 : _a.includes(e.pointerType)) != null ? _b : isReleasingButton || isPrimaryButton) != null ? _c : true;
    };
    const stops = [
        useEventListener(target, "pointerdown", (e)=>{
            var _a, _b;
            if (!eventIsAllowed(e)) return;
            isPointerDown.value = true;
            (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null || _b.setProperty("touch-action", "none");
            const eventTarget = e.target;
            eventTarget == null || eventTarget.setPointerCapture(e.pointerId);
            const { clientX: x, clientY: y } = e;
            updatePosStart(x, y);
            updatePosEnd(x, y);
            onSwipeStart == null || onSwipeStart(e);
        }),
        useEventListener(target, "pointermove", (e)=>{
            if (!eventIsAllowed(e)) return;
            if (!isPointerDown.value) return;
            const { clientX: x, clientY: y } = e;
            updatePosEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
            if (isSwiping.value) onSwipe == null || onSwipe(e);
        }),
        useEventListener(target, "pointerup", (e)=>{
            var _a, _b;
            if (!eventIsAllowed(e)) return;
            if (isSwiping.value) onSwipeEnd == null || onSwipeEnd(e, direction.value);
            isPointerDown.value = false;
            isSwiping.value = false;
            (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null || _b.setProperty("touch-action", "initial");
        })
    ];
    const stop = ()=>stops.forEach((s)=>s());
    return {
        isSwiping: (0, _vueDemi.readonly)(isSwiping),
        direction: (0, _vueDemi.readonly)(direction),
        posStart: (0, _vueDemi.readonly)(posStart),
        posEnd: (0, _vueDemi.readonly)(posEnd),
        distanceX,
        distanceY,
        stop
    };
}
function usePreferredColorScheme(options) {
    const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
    const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
    return (0, _vueDemi.computed)(()=>{
        if (isDark.value) return "dark";
        if (isLight.value) return "light";
        return "no-preference";
    });
}
function usePreferredContrast(options) {
    const isMore = useMediaQuery("(prefers-contrast: more)", options);
    const isLess = useMediaQuery("(prefers-contrast: less)", options);
    const isCustom = useMediaQuery("(prefers-contrast: custom)", options);
    return (0, _vueDemi.computed)(()=>{
        if (isMore.value) return "more";
        if (isLess.value) return "less";
        if (isCustom.value) return "custom";
        return "no-preference";
    });
}
function usePreferredLanguages(options = {}) {
    const { window: window1 = defaultWindow } = options;
    if (!window1) return (0, _vueDemi.ref)([
        "en"
    ]);
    const navigator = window1.navigator;
    const value = (0, _vueDemi.ref)(navigator.languages);
    useEventListener(window1, "languagechange", ()=>{
        value.value = navigator.languages;
    });
    return value;
}
function usePreferredReducedMotion(options) {
    const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
    return (0, _vueDemi.computed)(()=>{
        if (isReduced.value) return "reduce";
        return "no-preference";
    });
}
function usePrevious(value, initialValue) {
    const previous = (0, _vueDemi.shallowRef)(initialValue);
    (0, _vueDemi.watch)((0, _shared.toRef)(value), (_, oldValue)=>{
        previous.value = oldValue;
    }, {
        flush: "sync"
    });
    return (0, _vueDemi.readonly)(previous);
}
function useScreenOrientation(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const isSupported = useSupported(()=>window1 && "screen" in window1 && "orientation" in window1.screen);
    const screenOrientation = isSupported.value ? window1.screen.orientation : {};
    const orientation = (0, _vueDemi.ref)(screenOrientation.type);
    const angle = (0, _vueDemi.ref)(screenOrientation.angle || 0);
    if (isSupported.value) useEventListener(window1, "orientationchange", ()=>{
        orientation.value = screenOrientation.type;
        angle.value = screenOrientation.angle;
    });
    const lockOrientation = (type)=>{
        if (!isSupported.value) return Promise.reject(new Error("Not supported"));
        return screenOrientation.lock(type);
    };
    const unlockOrientation = ()=>{
        if (isSupported.value) screenOrientation.unlock();
    };
    return {
        isSupported,
        orientation,
        angle,
        lockOrientation,
        unlockOrientation
    };
}
const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
    const top = (0, _vueDemi.ref)("");
    const right = (0, _vueDemi.ref)("");
    const bottom = (0, _vueDemi.ref)("");
    const left = (0, _vueDemi.ref)("");
    if (0, _shared.isClient) {
        const topCssVar = useCssVar(topVarName);
        const rightCssVar = useCssVar(rightVarName);
        const bottomCssVar = useCssVar(bottomVarName);
        const leftCssVar = useCssVar(leftVarName);
        topCssVar.value = "env(safe-area-inset-top, 0px)";
        rightCssVar.value = "env(safe-area-inset-right, 0px)";
        bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
        leftCssVar.value = "env(safe-area-inset-left, 0px)";
        update();
        useEventListener("resize", (0, _shared.useDebounceFn)(update));
    }
    function update() {
        top.value = getValue(topVarName);
        right.value = getValue(rightVarName);
        bottom.value = getValue(bottomVarName);
        left.value = getValue(leftVarName);
    }
    return {
        top,
        right,
        bottom,
        left,
        update
    };
}
function getValue(position) {
    return getComputedStyle(document.documentElement).getPropertyValue(position);
}
function useScriptTag(src, onLoaded = (0, _shared.noop), options = {}) {
    const { immediate = true, manual = false, type = "text/javascript", async = true, crossOrigin, referrerPolicy, noModule, defer, document: document1 = defaultDocument, attrs = {} } = options;
    const scriptTag = (0, _vueDemi.ref)(null);
    let _promise = null;
    const loadScript = (waitForScriptLoad)=>new Promise((resolve, reject)=>{
            const resolveWithElement = (el2)=>{
                scriptTag.value = el2;
                resolve(el2);
                return el2;
            };
            if (!document1) {
                resolve(false);
                return;
            }
            let shouldAppend = false;
            let el = document1.querySelector(`script[src="${(0, _shared.toValue)(src)}"]`);
            if (!el) {
                el = document1.createElement("script");
                el.type = type;
                el.async = async;
                el.src = (0, _shared.toValue)(src);
                if (defer) el.defer = defer;
                if (crossOrigin) el.crossOrigin = crossOrigin;
                if (noModule) el.noModule = noModule;
                if (referrerPolicy) el.referrerPolicy = referrerPolicy;
                Object.entries(attrs).forEach(([name, value])=>el == null ? void 0 : el.setAttribute(name, value));
                shouldAppend = true;
            } else if (el.hasAttribute("data-loaded")) resolveWithElement(el);
            el.addEventListener("error", (event)=>reject(event));
            el.addEventListener("abort", (event)=>reject(event));
            el.addEventListener("load", ()=>{
                el.setAttribute("data-loaded", "true");
                onLoaded(el);
                resolveWithElement(el);
            });
            if (shouldAppend) el = document1.head.appendChild(el);
            if (!waitForScriptLoad) resolveWithElement(el);
        });
    const load = (waitForScriptLoad = true)=>{
        if (!_promise) _promise = loadScript(waitForScriptLoad);
        return _promise;
    };
    const unload = ()=>{
        if (!document1) return;
        _promise = null;
        if (scriptTag.value) scriptTag.value = null;
        const el = document1.querySelector(`script[src="${(0, _shared.toValue)(src)}"]`);
        if (el) document1.head.removeChild(el);
    };
    if (immediate && !manual) (0, _shared.tryOnMounted)(load);
    if (!manual) (0, _shared.tryOnUnmounted)(unload);
    return {
        scriptTag,
        load,
        unload
    };
}
function checkOverflowScroll(ele) {
    const style = window.getComputedStyle(ele);
    if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
    else {
        const parent = ele.parentNode;
        if (!parent || parent.tagName === "BODY") return false;
        return checkOverflowScroll(parent);
    }
}
function preventDefault(rawEvent) {
    const e = rawEvent || window.event;
    const _target = e.target;
    if (checkOverflowScroll(_target)) return false;
    if (e.touches.length > 1) return true;
    if (e.preventDefault) e.preventDefault();
    return false;
}
function useScrollLock(element, initialState = false) {
    const isLocked = (0, _vueDemi.ref)(initialState);
    let stopTouchMoveListener = null;
    let initialOverflow;
    (0, _vueDemi.watch)((0, _shared.toRef)(element), (el)=>{
        const target = resolveElement((0, _shared.toValue)(el));
        if (target) {
            const ele = target;
            initialOverflow = ele.style.overflow;
            if (isLocked.value) ele.style.overflow = "hidden";
        }
    }, {
        immediate: true
    });
    const lock = ()=>{
        const el = resolveElement((0, _shared.toValue)(element));
        if (!el || isLocked.value) return;
        if (0, _shared.isIOS) stopTouchMoveListener = useEventListener(el, "touchmove", (e)=>{
            preventDefault(e);
        }, {
            passive: false
        });
        el.style.overflow = "hidden";
        isLocked.value = true;
    };
    const unlock = ()=>{
        const el = resolveElement((0, _shared.toValue)(element));
        if (!el || !isLocked.value) return;
        (0, _shared.isIOS) && (stopTouchMoveListener == null || stopTouchMoveListener());
        el.style.overflow = initialOverflow;
        isLocked.value = false;
    };
    (0, _shared.tryOnScopeDispose)(unlock);
    return (0, _vueDemi.computed)({
        get () {
            return isLocked.value;
        },
        set (v) {
            if (v) lock();
            else unlock();
        }
    });
}
function useSessionStorage(key, initialValue, options = {}) {
    const { window: window1 = defaultWindow } = options;
    return useStorage(key, initialValue, window1 == null ? void 0 : window1.sessionStorage, options);
}
function useShare(shareOptions = {}, options = {}) {
    const { navigator = defaultNavigator } = options;
    const _navigator = navigator;
    const isSupported = useSupported(()=>_navigator && "canShare" in _navigator);
    const share = async (overrideOptions = {})=>{
        if (isSupported.value) {
            const data = {
                ...(0, _shared.toValue)(shareOptions),
                ...(0, _shared.toValue)(overrideOptions)
            };
            let granted = true;
            if (data.files && _navigator.canShare) granted = _navigator.canShare({
                files: data.files
            });
            if (granted) return _navigator.share(data);
        }
    };
    return {
        isSupported,
        share
    };
}
const defaultSortFn = (source, compareFn)=>source.sort(compareFn);
const defaultCompare = (a, b)=>a - b;
function useSorted(...args) {
    var _a, _b, _c, _d;
    const [source] = args;
    let compareFn = defaultCompare;
    let options = {};
    if (args.length === 2) {
        if (typeof args[1] === "object") {
            options = args[1];
            compareFn = (_a = options.compareFn) != null ? _a : defaultCompare;
        } else compareFn = (_b = args[1]) != null ? _b : defaultCompare;
    } else if (args.length > 2) {
        compareFn = (_c = args[1]) != null ? _c : defaultCompare;
        options = (_d = args[2]) != null ? _d : {};
    }
    const { dirty = false, sortFn = defaultSortFn } = options;
    if (!dirty) return (0, _vueDemi.computed)(()=>sortFn([
            ...(0, _shared.toValue)(source)
        ], compareFn));
    (0, _vueDemi.watchEffect)(()=>{
        const result = sortFn((0, _shared.toValue)(source), compareFn);
        if ((0, _vueDemi.isRef)(source)) source.value = result;
        else source.splice(0, source.length, ...result);
    });
    return source;
}
function useSpeechRecognition(options = {}) {
    const { interimResults = true, continuous = true, window: window1 = defaultWindow } = options;
    const lang = (0, _shared.toRef)(options.lang || "en-US");
    const isListening = (0, _vueDemi.ref)(false);
    const isFinal = (0, _vueDemi.ref)(false);
    const result = (0, _vueDemi.ref)("");
    const error = (0, _vueDemi.shallowRef)(void 0);
    const toggle = (value = !isListening.value)=>{
        isListening.value = value;
    };
    const start = ()=>{
        isListening.value = true;
    };
    const stop = ()=>{
        isListening.value = false;
    };
    const SpeechRecognition = window1 && (window1.SpeechRecognition || window1.webkitSpeechRecognition);
    const isSupported = useSupported(()=>SpeechRecognition);
    let recognition;
    if (isSupported.value) {
        recognition = new SpeechRecognition();
        recognition.continuous = continuous;
        recognition.interimResults = interimResults;
        recognition.lang = (0, _shared.toValue)(lang);
        recognition.onstart = ()=>{
            isFinal.value = false;
        };
        (0, _vueDemi.watch)(lang, (lang2)=>{
            if (recognition && !isListening.value) recognition.lang = lang2;
        });
        recognition.onresult = (event)=>{
            const transcript = Array.from(event.results).map((result2)=>{
                isFinal.value = result2.isFinal;
                return result2[0];
            }).map((result2)=>result2.transcript).join("");
            result.value = transcript;
            error.value = void 0;
        };
        recognition.onerror = (event)=>{
            error.value = event;
        };
        recognition.onend = ()=>{
            isListening.value = false;
            recognition.lang = (0, _shared.toValue)(lang);
        };
        (0, _vueDemi.watch)(isListening, ()=>{
            if (isListening.value) recognition.start();
            else recognition.stop();
        });
    }
    (0, _shared.tryOnScopeDispose)(()=>{
        isListening.value = false;
    });
    return {
        isSupported,
        isListening,
        isFinal,
        recognition,
        result,
        error,
        toggle,
        start,
        stop
    };
}
function useSpeechSynthesis(text, options = {}) {
    const { pitch = 1, rate = 1, volume = 1, window: window1 = defaultWindow } = options;
    const synth = window1 && window1.speechSynthesis;
    const isSupported = useSupported(()=>synth);
    const isPlaying = (0, _vueDemi.ref)(false);
    const status = (0, _vueDemi.ref)("init");
    const spokenText = (0, _shared.toRef)(text || "");
    const lang = (0, _shared.toRef)(options.lang || "en-US");
    const error = (0, _vueDemi.shallowRef)(void 0);
    const toggle = (value = !isPlaying.value)=>{
        isPlaying.value = value;
    };
    const bindEventsForUtterance = (utterance2)=>{
        utterance2.lang = (0, _shared.toValue)(lang);
        utterance2.voice = (0, _shared.toValue)(options.voice) || null;
        utterance2.pitch = (0, _shared.toValue)(pitch);
        utterance2.rate = (0, _shared.toValue)(rate);
        utterance2.volume = volume;
        utterance2.onstart = ()=>{
            isPlaying.value = true;
            status.value = "play";
        };
        utterance2.onpause = ()=>{
            isPlaying.value = false;
            status.value = "pause";
        };
        utterance2.onresume = ()=>{
            isPlaying.value = true;
            status.value = "play";
        };
        utterance2.onend = ()=>{
            isPlaying.value = false;
            status.value = "end";
        };
        utterance2.onerror = (event)=>{
            error.value = event;
        };
    };
    const utterance = (0, _vueDemi.computed)(()=>{
        isPlaying.value = false;
        status.value = "init";
        const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
        bindEventsForUtterance(newUtterance);
        return newUtterance;
    });
    const speak = ()=>{
        synth.cancel();
        utterance && synth.speak(utterance.value);
    };
    const stop = ()=>{
        synth.cancel();
        isPlaying.value = false;
    };
    if (isSupported.value) {
        bindEventsForUtterance(utterance.value);
        (0, _vueDemi.watch)(lang, (lang2)=>{
            if (utterance.value && !isPlaying.value) utterance.value.lang = lang2;
        });
        if (options.voice) (0, _vueDemi.watch)(options.voice, ()=>{
            synth.cancel();
        });
        (0, _vueDemi.watch)(isPlaying, ()=>{
            if (isPlaying.value) synth.resume();
            else synth.pause();
        });
    }
    (0, _shared.tryOnScopeDispose)(()=>{
        isPlaying.value = false;
    });
    return {
        isSupported,
        isPlaying,
        status,
        utterance,
        error,
        stop,
        toggle,
        speak
    };
}
function useStepper(steps, initialStep) {
    const stepsRef = (0, _vueDemi.ref)(steps);
    const stepNames = (0, _vueDemi.computed)(()=>Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
    const index = (0, _vueDemi.ref)(stepNames.value.indexOf(initialStep != null ? initialStep : stepNames.value[0]));
    const current = (0, _vueDemi.computed)(()=>at(index.value));
    const isFirst = (0, _vueDemi.computed)(()=>index.value === 0);
    const isLast = (0, _vueDemi.computed)(()=>index.value === stepNames.value.length - 1);
    const next = (0, _vueDemi.computed)(()=>stepNames.value[index.value + 1]);
    const previous = (0, _vueDemi.computed)(()=>stepNames.value[index.value - 1]);
    function at(index2) {
        if (Array.isArray(stepsRef.value)) return stepsRef.value[index2];
        return stepsRef.value[stepNames.value[index2]];
    }
    function get(step) {
        if (!stepNames.value.includes(step)) return;
        return at(stepNames.value.indexOf(step));
    }
    function goTo(step) {
        if (stepNames.value.includes(step)) index.value = stepNames.value.indexOf(step);
    }
    function goToNext() {
        if (isLast.value) return;
        index.value++;
    }
    function goToPrevious() {
        if (isFirst.value) return;
        index.value--;
    }
    function goBackTo(step) {
        if (isAfter(step)) goTo(step);
    }
    function isNext(step) {
        return stepNames.value.indexOf(step) === index.value + 1;
    }
    function isPrevious(step) {
        return stepNames.value.indexOf(step) === index.value - 1;
    }
    function isCurrent(step) {
        return stepNames.value.indexOf(step) === index.value;
    }
    function isBefore(step) {
        return index.value < stepNames.value.indexOf(step);
    }
    function isAfter(step) {
        return index.value > stepNames.value.indexOf(step);
    }
    return {
        steps: stepsRef,
        stepNames,
        index,
        current,
        next,
        previous,
        isFirst,
        isLast,
        at,
        get,
        goTo,
        goToNext,
        goToPrevious,
        goBackTo,
        isNext,
        isPrevious,
        isCurrent,
        isBefore,
        isAfter
    };
}
function useStorageAsync(key, initialValue, storage, options = {}) {
    var _a;
    const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window1 = defaultWindow, eventFilter, onError = (e)=>{
        console.error(e);
    } } = options;
    const rawInit = (0, _shared.toValue)(initialValue);
    const type = guessSerializerType(rawInit);
    const data = (shallow ? (0, _vueDemi.shallowRef) : (0, _vueDemi.ref))(initialValue);
    const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
    if (!storage) try {
        storage = getSSRHandler("getDefaultStorage", ()=>{
            var _a2;
            return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
        })();
    } catch (e) {
        onError(e);
    }
    async function read(event) {
        if (!storage || event && event.key !== key) return;
        try {
            const rawValue = event ? event.newValue : await storage.getItem(key);
            if (rawValue == null) {
                data.value = rawInit;
                if (writeDefaults && rawInit !== null) await storage.setItem(key, await serializer.write(rawInit));
            } else if (mergeDefaults) {
                const value = await serializer.read(rawValue);
                if (typeof mergeDefaults === "function") data.value = mergeDefaults(value, rawInit);
                else if (type === "object" && !Array.isArray(value)) data.value = {
                    ...rawInit,
                    ...value
                };
                else data.value = value;
            } else data.value = await serializer.read(rawValue);
        } catch (e) {
            onError(e);
        }
    }
    read();
    if (window1 && listenToStorageChanges) useEventListener(window1, "storage", (e)=>Promise.resolve().then(()=>read(e)));
    if (storage) (0, _shared.watchWithFilter)(data, async ()=>{
        try {
            if (data.value == null) await storage.removeItem(key);
            else await storage.setItem(key, await serializer.write(data.value));
        } catch (e) {
            onError(e);
        }
    }, {
        flush,
        deep,
        eventFilter
    });
    return data;
}
let _id = 0;
function useStyleTag(css, options = {}) {
    const isLoaded = (0, _vueDemi.ref)(false);
    const { document: document1 = defaultDocument, immediate = true, manual = false, id = `vueuse_styletag_${++_id}` } = options;
    const cssRef = (0, _vueDemi.ref)(css);
    let stop = ()=>{};
    const load = ()=>{
        if (!document1) return;
        const el = document1.getElementById(id) || document1.createElement("style");
        if (!el.isConnected) {
            el.id = id;
            if (options.media) el.media = options.media;
            document1.head.appendChild(el);
        }
        if (isLoaded.value) return;
        stop = (0, _vueDemi.watch)(cssRef, (value)=>{
            el.textContent = value;
        }, {
            immediate: true
        });
        isLoaded.value = true;
    };
    const unload = ()=>{
        if (!document1 || !isLoaded.value) return;
        stop();
        document1.head.removeChild(document1.getElementById(id));
        isLoaded.value = false;
    };
    if (immediate && !manual) (0, _shared.tryOnMounted)(load);
    if (!manual) (0, _shared.tryOnScopeDispose)(unload);
    return {
        id,
        css: cssRef,
        unload,
        load,
        isLoaded: (0, _vueDemi.readonly)(isLoaded)
    };
}
function useSwipe(target, options = {}) {
    const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart, passive = true, window: window1 = defaultWindow } = options;
    const coordsStart = (0, _vueDemi.reactive)({
        x: 0,
        y: 0
    });
    const coordsEnd = (0, _vueDemi.reactive)({
        x: 0,
        y: 0
    });
    const diffX = (0, _vueDemi.computed)(()=>coordsStart.x - coordsEnd.x);
    const diffY = (0, _vueDemi.computed)(()=>coordsStart.y - coordsEnd.y);
    const { max, abs } = Math;
    const isThresholdExceeded = (0, _vueDemi.computed)(()=>max(abs(diffX.value), abs(diffY.value)) >= threshold);
    const isSwiping = (0, _vueDemi.ref)(false);
    const direction = (0, _vueDemi.computed)(()=>{
        if (!isThresholdExceeded.value) return "none";
        if (abs(diffX.value) > abs(diffY.value)) return diffX.value > 0 ? "left" : "right";
        else return diffY.value > 0 ? "up" : "down";
    });
    const getTouchEventCoords = (e)=>[
            e.touches[0].clientX,
            e.touches[0].clientY
        ];
    const updateCoordsStart = (x, y)=>{
        coordsStart.x = x;
        coordsStart.y = y;
    };
    const updateCoordsEnd = (x, y)=>{
        coordsEnd.x = x;
        coordsEnd.y = y;
    };
    let listenerOptions;
    const isPassiveEventSupported = checkPassiveEventSupport(window1 == null ? void 0 : window1.document);
    if (!passive) listenerOptions = isPassiveEventSupported ? {
        passive: false,
        capture: true
    } : {
        capture: true
    };
    else listenerOptions = isPassiveEventSupported ? {
        passive: true
    } : {
        capture: false
    };
    const onTouchEnd = (e)=>{
        if (isSwiping.value) onSwipeEnd == null || onSwipeEnd(e, direction.value);
        isSwiping.value = false;
    };
    const stops = [
        useEventListener(target, "touchstart", (e)=>{
            if (e.touches.length !== 1) return;
            if (listenerOptions.capture && !listenerOptions.passive) e.preventDefault();
            const [x, y] = getTouchEventCoords(e);
            updateCoordsStart(x, y);
            updateCoordsEnd(x, y);
            onSwipeStart == null || onSwipeStart(e);
        }, listenerOptions),
        useEventListener(target, "touchmove", (e)=>{
            if (e.touches.length !== 1) return;
            const [x, y] = getTouchEventCoords(e);
            updateCoordsEnd(x, y);
            if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
            if (isSwiping.value) onSwipe == null || onSwipe(e);
        }, listenerOptions),
        useEventListener(target, [
            "touchend",
            "touchcancel"
        ], onTouchEnd, listenerOptions)
    ];
    const stop = ()=>stops.forEach((s)=>s());
    return {
        isPassiveEventSupported,
        isSwiping,
        direction,
        coordsStart,
        coordsEnd,
        lengthX: diffX,
        lengthY: diffY,
        stop
    };
}
function checkPassiveEventSupport(document1) {
    if (!document1) return false;
    let supportsPassive = false;
    const optionsBlock = {
        get passive () {
            supportsPassive = true;
            return false;
        }
    };
    document1.addEventListener("x", (0, _shared.noop), optionsBlock);
    document1.removeEventListener("x", (0, _shared.noop));
    return supportsPassive;
}
function useTemplateRefsList() {
    const refs = (0, _vueDemi.ref)([]);
    refs.value.set = (el)=>{
        if (el) refs.value.push(el);
    };
    (0, _vueDemi.onBeforeUpdate)(()=>{
        refs.value.length = 0;
    });
    return refs;
}
function useTextDirection(options = {}) {
    const { document: document1 = defaultDocument, selector = "html", observe = false, initialValue = "ltr" } = options;
    function getValue() {
        var _a, _b;
        return (_b = (_a = document1 == null ? void 0 : document1.querySelector(selector)) == null ? void 0 : _a.getAttribute("dir")) != null ? _b : initialValue;
    }
    const dir = (0, _vueDemi.ref)(getValue());
    (0, _shared.tryOnMounted)(()=>dir.value = getValue());
    if (observe && document1) useMutationObserver(document1.querySelector(selector), ()=>dir.value = getValue(), {
        attributes: true
    });
    return (0, _vueDemi.computed)({
        get () {
            return dir.value;
        },
        set (v) {
            var _a, _b;
            dir.value = v;
            if (!document1) return;
            if (dir.value) (_a = document1.querySelector(selector)) == null || _a.setAttribute("dir", dir.value);
            else (_b = document1.querySelector(selector)) == null || _b.removeAttribute("dir");
        }
    });
}
function getRangesFromSelection(selection) {
    var _a;
    const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
    return Array.from({
        length: rangeCount
    }, (_, i)=>selection.getRangeAt(i));
}
function useTextSelection(options = {}) {
    const { window: window1 = defaultWindow } = options;
    const selection = (0, _vueDemi.ref)(null);
    const text = (0, _vueDemi.computed)(()=>{
        var _a, _b;
        return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
    });
    const ranges = (0, _vueDemi.computed)(()=>selection.value ? getRangesFromSelection(selection.value) : []);
    const rects = (0, _vueDemi.computed)(()=>ranges.value.map((range)=>range.getBoundingClientRect()));
    function onSelectionChange() {
        selection.value = null;
        if (window1) selection.value = window1.getSelection();
    }
    if (window1) useEventListener(window1.document, "selectionchange", onSelectionChange);
    return {
        text,
        rects,
        ranges,
        selection
    };
}
function useTextareaAutosize(options) {
    const textarea = (0, _vueDemi.ref)(options == null ? void 0 : options.element);
    const input = (0, _vueDemi.ref)(options == null ? void 0 : options.input);
    const textareaScrollHeight = (0, _vueDemi.ref)(1);
    function triggerResize() {
        var _a, _b;
        if (!textarea.value) return;
        let height = "";
        textarea.value.style.height = "1px";
        textareaScrollHeight.value = (_a = textarea.value) == null ? void 0 : _a.scrollHeight;
        if (options == null ? void 0 : options.styleTarget) (0, _shared.toValue)(options.styleTarget).style.height = `${textareaScrollHeight.value}px`;
        else height = `${textareaScrollHeight.value}px`;
        textarea.value.style.height = height;
        (_b = options == null ? void 0 : options.onResize) == null || _b.call(options);
    }
    (0, _vueDemi.watch)([
        input,
        textarea
    ], ()=>(0, _vueDemi.nextTick)(triggerResize), {
        immediate: true
    });
    useResizeObserver(textarea, ()=>triggerResize());
    if (options == null ? void 0 : options.watch) (0, _vueDemi.watch)(options.watch, triggerResize, {
        immediate: true,
        deep: true
    });
    return {
        textarea,
        input,
        triggerResize
    };
}
function useThrottledRefHistory(source, options = {}) {
    const { throttle = 200, trailing = true } = options;
    const filter = (0, _shared.throttleFilter)(throttle, trailing);
    const history = useRefHistory(source, {
        ...options,
        eventFilter: filter
    });
    return {
        ...history
    };
}
const DEFAULT_UNITS = [
    {
        max: 6e4,
        value: 1e3,
        name: "second"
    },
    {
        max: 276e4,
        value: 6e4,
        name: "minute"
    },
    {
        max: 72e6,
        value: 36e5,
        name: "hour"
    },
    {
        max: 5184e5,
        value: 864e5,
        name: "day"
    },
    {
        max: 24192e5,
        value: 6048e5,
        name: "week"
    },
    {
        max: 28512e6,
        value: 2592e6,
        name: "month"
    },
    {
        max: Number.POSITIVE_INFINITY,
        value: 31536e6,
        name: "year"
    }
];
const DEFAULT_MESSAGES = {
    justNow: "just now",
    past: (n)=>n.match(/\d/) ? `${n} ago` : n,
    future: (n)=>n.match(/\d/) ? `in ${n}` : n,
    month: (n, past)=>n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
    year: (n, past)=>n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
    day: (n, past)=>n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
    week: (n, past)=>n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
    hour: (n)=>`${n} hour${n > 1 ? "s" : ""}`,
    minute: (n)=>`${n} minute${n > 1 ? "s" : ""}`,
    second: (n)=>`${n} second${n > 1 ? "s" : ""}`,
    invalid: ""
};
function DEFAULT_FORMATTER(date) {
    return date.toISOString().slice(0, 10);
}
function useTimeAgo(time, options = {}) {
    const { controls: exposeControls = false, updateInterval = 3e4 } = options;
    const { now, ...controls } = useNow({
        interval: updateInterval,
        controls: true
    });
    const timeAgo = (0, _vueDemi.computed)(()=>formatTimeAgo(new Date((0, _shared.toValue)(time)), options, (0, _shared.toValue)(now)));
    if (exposeControls) return {
        timeAgo,
        ...controls
    };
    else return timeAgo;
}
function formatTimeAgo(from, options = {}, now = Date.now()) {
    var _a;
    const { max, messages = DEFAULT_MESSAGES, fullDateFormatter = DEFAULT_FORMATTER, units = DEFAULT_UNITS, showSecond = false, rounding = "round" } = options;
    const roundFn = typeof rounding === "number" ? (n)=>+n.toFixed(rounding) : Math[rounding];
    const diff = +now - +from;
    const absDiff = Math.abs(diff);
    function getValue(diff2, unit) {
        return roundFn(Math.abs(diff2) / unit.value);
    }
    function format(diff2, unit) {
        const val = getValue(diff2, unit);
        const past = diff2 > 0;
        const str = applyFormat(unit.name, val, past);
        return applyFormat(past ? "past" : "future", str, past);
    }
    function applyFormat(name, val, isPast) {
        const formatter = messages[name];
        if (typeof formatter === "function") return formatter(val, isPast);
        return formatter.replace("{0}", val.toString());
    }
    if (absDiff < 6e4 && !showSecond) return messages.justNow;
    if (typeof max === "number" && absDiff > max) return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
        const unitMax = (_a = units.find((i)=>i.name === max)) == null ? void 0 : _a.max;
        if (unitMax && absDiff > unitMax) return fullDateFormatter(new Date(from));
    }
    for (const [idx, unit] of units.entries()){
        const val = getValue(diff, unit);
        if (val <= 0 && units[idx - 1]) return format(diff, units[idx - 1]);
        if (absDiff < unit.max) return format(diff, unit);
    }
    return messages.invalid;
}
function useTimeoutPoll(fn, interval, timeoutPollOptions) {
    const { start } = (0, _shared.useTimeoutFn)(loop, interval, {
        immediate: false
    });
    const isActive = (0, _vueDemi.ref)(false);
    async function loop() {
        if (!isActive.value) return;
        await fn();
        start();
    }
    function resume() {
        if (!isActive.value) {
            isActive.value = true;
            loop();
        }
    }
    function pause() {
        isActive.value = false;
    }
    if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate) resume();
    (0, _shared.tryOnScopeDispose)(pause);
    return {
        isActive,
        pause,
        resume
    };
}
function useTimestamp(options = {}) {
    const { controls: exposeControls = false, offset = 0, immediate = true, interval = "requestAnimationFrame", callback } = options;
    const ts = (0, _vueDemi.ref)((0, _shared.timestamp)() + offset);
    const update = ()=>ts.value = (0, _shared.timestamp)() + offset;
    const cb = callback ? ()=>{
        update();
        callback(ts.value);
    } : update;
    const controls = interval === "requestAnimationFrame" ? useRafFn(cb, {
        immediate
    }) : (0, _shared.useIntervalFn)(cb, interval, {
        immediate
    });
    if (exposeControls) return {
        timestamp: ts,
        ...controls
    };
    else return ts;
}
function useTitle(newTitle = null, options = {}) {
    var _a, _b;
    const { document: document1 = defaultDocument } = options;
    const title = (0, _shared.toRef)((_a = newTitle != null ? newTitle : document1 == null ? void 0 : document1.title) != null ? _a : null);
    const isReadonly = newTitle && typeof newTitle === "function";
    function format(t) {
        if (!("titleTemplate" in options)) return t;
        const template = options.titleTemplate || "%s";
        return typeof template === "function" ? template(t) : (0, _shared.toValue)(template).replace(/%s/g, t);
    }
    (0, _vueDemi.watch)(title, (t, o)=>{
        if (t !== o && document1) document1.title = format(typeof t === "string" ? t : "");
    }, {
        immediate: true
    });
    if (options.observe && !options.titleTemplate && document1 && !isReadonly) useMutationObserver((_b = document1.head) == null ? void 0 : _b.querySelector("title"), ()=>{
        if (document1 && document1.title !== title.value) title.value = format(document1.title);
    }, {
        childList: true
    });
    return title;
}
const _TransitionPresets = {
    easeInSine: [
        0.12,
        0,
        0.39,
        0
    ],
    easeOutSine: [
        0.61,
        1,
        0.88,
        1
    ],
    easeInOutSine: [
        0.37,
        0,
        0.63,
        1
    ],
    easeInQuad: [
        0.11,
        0,
        0.5,
        0
    ],
    easeOutQuad: [
        0.5,
        1,
        0.89,
        1
    ],
    easeInOutQuad: [
        0.45,
        0,
        0.55,
        1
    ],
    easeInCubic: [
        0.32,
        0,
        0.67,
        0
    ],
    easeOutCubic: [
        0.33,
        1,
        0.68,
        1
    ],
    easeInOutCubic: [
        0.65,
        0,
        0.35,
        1
    ],
    easeInQuart: [
        0.5,
        0,
        0.75,
        0
    ],
    easeOutQuart: [
        0.25,
        1,
        0.5,
        1
    ],
    easeInOutQuart: [
        0.76,
        0,
        0.24,
        1
    ],
    easeInQuint: [
        0.64,
        0,
        0.78,
        0
    ],
    easeOutQuint: [
        0.22,
        1,
        0.36,
        1
    ],
    easeInOutQuint: [
        0.83,
        0,
        0.17,
        1
    ],
    easeInExpo: [
        0.7,
        0,
        0.84,
        0
    ],
    easeOutExpo: [
        0.16,
        1,
        0.3,
        1
    ],
    easeInOutExpo: [
        0.87,
        0,
        0.13,
        1
    ],
    easeInCirc: [
        0.55,
        0,
        1,
        0.45
    ],
    easeOutCirc: [
        0,
        0.55,
        0.45,
        1
    ],
    easeInOutCirc: [
        0.85,
        0,
        0.15,
        1
    ],
    easeInBack: [
        0.36,
        0,
        0.66,
        -0.56
    ],
    easeOutBack: [
        0.34,
        1.56,
        0.64,
        1
    ],
    easeInOutBack: [
        0.68,
        -0.6,
        0.32,
        1.6
    ]
};
const TransitionPresets = /* @__PURE__ */ Object.assign({}, {
    linear: (0, _shared.identity)
}, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
    const a = (a1, a2)=>1 - 3 * a2 + 3 * a1;
    const b = (a1, a2)=>3 * a2 - 6 * a1;
    const c = (a1)=>3 * a1;
    const calcBezier = (t, a1, a2)=>((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    const getSlope = (t, a1, a2)=>3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
    const getTforX = (x)=>{
        let aGuessT = x;
        for(let i = 0; i < 4; ++i){
            const currentSlope = getSlope(aGuessT, p0, p2);
            if (currentSlope === 0) return aGuessT;
            const currentX = calcBezier(aGuessT, p0, p2) - x;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    return (x)=>p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function lerp(a, b, alpha) {
    return a + alpha * (b - a);
}
function toVec(t) {
    return (typeof t === "number" ? [
        t
    ] : t) || [];
}
function executeTransition(source, from, to, options = {}) {
    var _a, _b;
    const fromVal = (0, _shared.toValue)(from);
    const toVal = (0, _shared.toValue)(to);
    const v1 = toVec(fromVal);
    const v2 = toVec(toVal);
    const duration = (_a = (0, _shared.toValue)(options.duration)) != null ? _a : 1e3;
    const startedAt = Date.now();
    const endAt = Date.now() + duration;
    const trans = typeof options.transition === "function" ? options.transition : (_b = (0, _shared.toValue)(options.transition)) != null ? _b : (0, _shared.identity);
    const ease = typeof trans === "function" ? trans : createEasingFunction(trans);
    return new Promise((resolve)=>{
        source.value = fromVal;
        const tick = ()=>{
            var _a2;
            if ((_a2 = options.abort) == null ? void 0 : _a2.call(options)) {
                resolve();
                return;
            }
            const now = Date.now();
            const alpha = ease((now - startedAt) / duration);
            const arr = toVec(source.value).map((n, i)=>lerp(v1[i], v2[i], alpha));
            if (Array.isArray(source.value)) source.value = arr.map((n, i)=>{
                var _a3, _b2;
                return lerp((_a3 = v1[i]) != null ? _a3 : 0, (_b2 = v2[i]) != null ? _b2 : 0, alpha);
            });
            else if (typeof source.value === "number") source.value = arr[0];
            if (now < endAt) requestAnimationFrame(tick);
            else {
                source.value = toVal;
                resolve();
            }
        };
        tick();
    });
}
function useTransition(source, options = {}) {
    let currentId = 0;
    const sourceVal = ()=>{
        const v = (0, _shared.toValue)(source);
        return typeof v === "number" ? v : v.map((0, _shared.toValue));
    };
    const outputRef = (0, _vueDemi.ref)(sourceVal());
    (0, _vueDemi.watch)(sourceVal, async (to)=>{
        var _a, _b;
        if ((0, _shared.toValue)(options.disabled)) return;
        const id = ++currentId;
        if (options.delay) await (0, _shared.promiseTimeout)((0, _shared.toValue)(options.delay));
        if (id !== currentId) return;
        const toVal = Array.isArray(to) ? to.map((0, _shared.toValue)) : (0, _shared.toValue)(to);
        (_a = options.onStarted) == null || _a.call(options);
        await executeTransition(outputRef, outputRef.value, toVal, {
            ...options,
            abort: ()=>{
                var _a2;
                return id !== currentId || ((_a2 = options.abort) == null ? void 0 : _a2.call(options));
            }
        });
        (_b = options.onFinished) == null || _b.call(options);
    }, {
        deep: true
    });
    (0, _vueDemi.watch)(()=>(0, _shared.toValue)(options.disabled), (disabled)=>{
        if (disabled) {
            currentId++;
            outputRef.value = sourceVal();
        }
    });
    (0, _shared.tryOnScopeDispose)(()=>{
        currentId++;
    });
    return (0, _vueDemi.computed)(()=>(0, _shared.toValue)(options.disabled) ? sourceVal() : outputRef.value);
}
function useUrlSearchParams(mode = "history", options = {}) {
    const { initialValue = {}, removeNullishValues = true, removeFalsyValues = false, write: enableWrite = true, window: window1 = defaultWindow } = options;
    if (!window1) return (0, _vueDemi.reactive)(initialValue);
    const state = (0, _vueDemi.reactive)({});
    function getRawParams() {
        if (mode === "history") return window1.location.search || "";
        else if (mode === "hash") {
            const hash = window1.location.hash || "";
            const index = hash.indexOf("?");
            return index > 0 ? hash.slice(index) : "";
        } else return (window1.location.hash || "").replace(/^#/, "");
    }
    function constructQuery(params) {
        const stringified = params.toString();
        if (mode === "history") return `${stringified ? `?${stringified}` : ""}${window1.location.hash || ""}`;
        if (mode === "hash-params") return `${window1.location.search || ""}${stringified ? `#${stringified}` : ""}`;
        const hash = window1.location.hash || "#";
        const index = hash.indexOf("?");
        if (index > 0) return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
        return `${hash}${stringified ? `?${stringified}` : ""}`;
    }
    function read() {
        return new URLSearchParams(getRawParams());
    }
    function updateState(params) {
        const unusedKeys = new Set(Object.keys(state));
        for (const key of params.keys()){
            const paramsForKey = params.getAll(key);
            state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
            unusedKeys.delete(key);
        }
        Array.from(unusedKeys).forEach((key)=>delete state[key]);
    }
    const { pause, resume } = (0, _shared.pausableWatch)(state, ()=>{
        const params = new URLSearchParams("");
        Object.keys(state).forEach((key)=>{
            const mapEntry = state[key];
            if (Array.isArray(mapEntry)) mapEntry.forEach((value)=>params.append(key, value));
            else if (removeNullishValues && mapEntry == null) params.delete(key);
            else if (removeFalsyValues && !mapEntry) params.delete(key);
            else params.set(key, mapEntry);
        });
        write(params);
    }, {
        deep: true
    });
    function write(params, shouldUpdate) {
        pause();
        if (shouldUpdate) updateState(params);
        window1.history.replaceState(window1.history.state, window1.document.title, window1.location.pathname + constructQuery(params));
        resume();
    }
    function onChanged() {
        if (!enableWrite) return;
        write(read(), true);
    }
    useEventListener(window1, "popstate", onChanged, false);
    if (mode !== "history") useEventListener(window1, "hashchange", onChanged, false);
    const initial = read();
    if (initial.keys().next().value) updateState(initial);
    else Object.assign(state, initialValue);
    return state;
}
function useUserMedia(options = {}) {
    var _a, _b;
    const enabled = (0, _vueDemi.ref)((_a = options.enabled) != null ? _a : false);
    const autoSwitch = (0, _vueDemi.ref)((_b = options.autoSwitch) != null ? _b : true);
    const constraints = (0, _vueDemi.ref)(options.constraints);
    const { navigator = defaultNavigator } = options;
    const isSupported = useSupported(()=>{
        var _a2;
        return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getUserMedia;
    });
    const stream = (0, _vueDemi.shallowRef)();
    function getDeviceOptions(type) {
        switch(type){
            case "video":
                if (constraints.value) return constraints.value.video || false;
                break;
            case "audio":
                if (constraints.value) return constraints.value.audio || false;
                break;
        }
    }
    async function _start() {
        if (!isSupported.value || stream.value) return;
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: getDeviceOptions("video"),
            audio: getDeviceOptions("audio")
        });
        return stream.value;
    }
    function _stop() {
        var _a2;
        (_a2 = stream.value) == null || _a2.getTracks().forEach((t)=>t.stop());
        stream.value = void 0;
    }
    function stop() {
        _stop();
        enabled.value = false;
    }
    async function start() {
        await _start();
        if (stream.value) enabled.value = true;
        return stream.value;
    }
    async function restart() {
        _stop();
        return await start();
    }
    (0, _vueDemi.watch)(enabled, (v)=>{
        if (v) _start();
        else _stop();
    }, {
        immediate: true
    });
    (0, _vueDemi.watch)(constraints, ()=>{
        if (autoSwitch.value && stream.value) restart();
    }, {
        immediate: true
    });
    return {
        isSupported,
        stream,
        start,
        stop,
        restart,
        constraints,
        enabled,
        autoSwitch
    };
}
function useVModel(props, key, emit, options = {}) {
    var _a, _b, _c, _d, _e;
    const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
    const vm = (0, _vueDemi.getCurrentInstance)();
    const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
    let event = eventName;
    if (!key) {
        if (0, _vueDemi.isVue2) {
            const modelOptions = (_e = (_d = vm == null ? void 0 : vm.proxy) == null ? void 0 : _d.$options) == null ? void 0 : _e.model;
            key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
            if (!eventName) event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
        } else key = "modelValue";
    }
    event = event || `update:${key.toString()}`;
    const cloneFn = (val)=>!clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
    const getValue = ()=>(0, _shared.isDef)(props[key]) ? cloneFn(props[key]) : defaultValue;
    const triggerEmit = (value)=>{
        if (shouldEmit) {
            if (shouldEmit(value)) _emit(event, value);
        } else _emit(event, value);
    };
    if (passive) {
        const initialValue = getValue();
        const proxy = (0, _vueDemi.ref)(initialValue);
        let isUpdating = false;
        (0, _vueDemi.watch)(()=>props[key], (v)=>{
            if (!isUpdating) {
                isUpdating = true;
                proxy.value = cloneFn(v);
                (0, _vueDemi.nextTick)(()=>isUpdating = false);
            }
        });
        (0, _vueDemi.watch)(proxy, (v)=>{
            if (!isUpdating && (v !== props[key] || deep)) triggerEmit(v);
        }, {
            deep
        });
        return proxy;
    } else return (0, _vueDemi.computed)({
        get () {
            return getValue();
        },
        set (value) {
            triggerEmit(value);
        }
    });
}
function useVModels(props, emit, options = {}) {
    const ret = {};
    for(const key in props)ret[key] = useVModel(props, key, emit, options);
    return ret;
}
function useVibrate(options) {
    const { pattern = [], interval = 0, navigator = defaultNavigator } = options || {};
    const isSupported = useSupported(()=>typeof navigator !== "undefined" && "vibrate" in navigator);
    const patternRef = (0, _shared.toRef)(pattern);
    let intervalControls;
    const vibrate = (pattern2 = patternRef.value)=>{
        if (isSupported.value) navigator.vibrate(pattern2);
    };
    const stop = ()=>{
        if (isSupported.value) navigator.vibrate(0);
        intervalControls == null || intervalControls.pause();
    };
    if (interval > 0) intervalControls = (0, _shared.useIntervalFn)(vibrate, interval, {
        immediate: false,
        immediateCallback: false
    });
    return {
        isSupported,
        pattern,
        intervalControls,
        vibrate,
        stop
    };
}
function useVirtualList(list, options) {
    const { containerStyle, wrapperProps, scrollTo, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
    return {
        list: currentList,
        scrollTo,
        containerProps: {
            ref: containerRef,
            onScroll: ()=>{
                calculateRange();
            },
            style: containerStyle
        },
        wrapperProps
    };
}
function useVirtualListResources(list) {
    const containerRef = (0, _vueDemi.ref)(null);
    const size = useElementSize(containerRef);
    const currentList = (0, _vueDemi.ref)([]);
    const source = (0, _vueDemi.shallowRef)(list);
    const state = (0, _vueDemi.ref)({
        start: 0,
        end: 10
    });
    return {
        state,
        source,
        currentList,
        size,
        containerRef
    };
}
function createGetViewCapacity(state, source, itemSize) {
    return (containerSize)=>{
        if (typeof itemSize === "number") return Math.ceil(containerSize / itemSize);
        const { start = 0 } = state.value;
        let sum = 0;
        let capacity = 0;
        for(let i = start; i < source.value.length; i++){
            const size = itemSize(i);
            sum += size;
            capacity = i;
            if (sum > containerSize) break;
        }
        return capacity - start;
    };
}
function createGetOffset(source, itemSize) {
    return (scrollDirection)=>{
        if (typeof itemSize === "number") return Math.floor(scrollDirection / itemSize) + 1;
        let sum = 0;
        let offset = 0;
        for(let i = 0; i < source.value.length; i++){
            const size = itemSize(i);
            sum += size;
            if (sum >= scrollDirection) {
                offset = i;
                break;
            }
        }
        return offset + 1;
    };
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
    return ()=>{
        const element = containerRef.value;
        if (element) {
            const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
            const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
            const from = offset - overscan;
            const to = offset + viewCapacity + overscan;
            state.value = {
                start: from < 0 ? 0 : from,
                end: to > source.value.length ? source.value.length : to
            };
            currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index)=>({
                    data: ele,
                    index: index + state.value.start
                }));
        }
    };
}
function createGetDistance(itemSize, source) {
    return (index)=>{
        if (typeof itemSize === "number") {
            const size2 = index * itemSize;
            return size2;
        }
        const size = source.value.slice(0, index).reduce((sum, _, i)=>sum + itemSize(i), 0);
        return size;
    };
}
function useWatchForSizes(size, list, calculateRange) {
    (0, _vueDemi.watch)([
        size.width,
        size.height,
        list
    ], ()=>{
        calculateRange();
    });
}
function createComputedTotalSize(itemSize, source) {
    return (0, _vueDemi.computed)(()=>{
        if (typeof itemSize === "number") return source.value.length * itemSize;
        return source.value.reduce((sum, _, index)=>sum + itemSize(index), 0);
    });
}
const scrollToDictionaryForElementScrollKey = {
    horizontal: "scrollLeft",
    vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
    return (index)=>{
        if (containerRef.value) {
            containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
            calculateRange();
        }
    };
}
function useHorizontalVirtualList(options, list) {
    const resources = useVirtualListResources(list);
    const { state, source, currentList, size, containerRef } = resources;
    const containerStyle = {
        overflowX: "auto"
    };
    const { itemWidth, overscan = 5 } = options;
    const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
    const getOffset = createGetOffset(source, itemWidth);
    const calculateRange = createCalculateRange("horizontal", overscan, getOffset, getViewCapacity, resources);
    const getDistanceLeft = createGetDistance(itemWidth, source);
    const offsetLeft = (0, _vueDemi.computed)(()=>getDistanceLeft(state.value.start));
    const totalWidth = createComputedTotalSize(itemWidth, source);
    useWatchForSizes(size, list, calculateRange);
    const scrollTo = createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef);
    const wrapperProps = (0, _vueDemi.computed)(()=>{
        return {
            style: {
                height: "100%",
                width: `${totalWidth.value - offsetLeft.value}px`,
                marginLeft: `${offsetLeft.value}px`,
                display: "flex"
            }
        };
    });
    return {
        scrollTo,
        calculateRange,
        wrapperProps,
        containerStyle,
        currentList,
        containerRef
    };
}
function useVerticalVirtualList(options, list) {
    const resources = useVirtualListResources(list);
    const { state, source, currentList, size, containerRef } = resources;
    const containerStyle = {
        overflowY: "auto"
    };
    const { itemHeight, overscan = 5 } = options;
    const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
    const getOffset = createGetOffset(source, itemHeight);
    const calculateRange = createCalculateRange("vertical", overscan, getOffset, getViewCapacity, resources);
    const getDistanceTop = createGetDistance(itemHeight, source);
    const offsetTop = (0, _vueDemi.computed)(()=>getDistanceTop(state.value.start));
    const totalHeight = createComputedTotalSize(itemHeight, source);
    useWatchForSizes(size, list, calculateRange);
    const scrollTo = createScrollTo("vertical", calculateRange, getDistanceTop, containerRef);
    const wrapperProps = (0, _vueDemi.computed)(()=>{
        return {
            style: {
                width: "100%",
                height: `${totalHeight.value - offsetTop.value}px`,
                marginTop: `${offsetTop.value}px`
            }
        };
    });
    return {
        calculateRange,
        scrollTo,
        containerStyle,
        wrapperProps,
        currentList,
        containerRef
    };
}
function useWakeLock(options = {}) {
    const { navigator = defaultNavigator, document: document1 = defaultDocument } = options;
    let wakeLock;
    const isSupported = useSupported(()=>navigator && "wakeLock" in navigator);
    const isActive = (0, _vueDemi.ref)(false);
    async function onVisibilityChange() {
        if (!isSupported.value || !wakeLock) return;
        if (document1 && document1.visibilityState === "visible") wakeLock = await navigator.wakeLock.request("screen");
        isActive.value = !wakeLock.released;
    }
    if (document1) useEventListener(document1, "visibilitychange", onVisibilityChange, {
        passive: true
    });
    async function request(type) {
        if (!isSupported.value) return;
        wakeLock = await navigator.wakeLock.request(type);
        isActive.value = !wakeLock.released;
    }
    async function release() {
        if (!isSupported.value || !wakeLock) return;
        await wakeLock.release();
        isActive.value = !wakeLock.released;
        wakeLock = null;
    }
    return {
        isSupported,
        isActive,
        request,
        release
    };
}
function useWebNotification(options = {}) {
    const { window: window1 = defaultWindow, requestPermissions: _requestForPermissions = true } = options;
    const defaultWebNotificationOptions = options;
    const isSupported = useSupported(()=>!!window1 && "Notification" in window1);
    const permissionGranted = (0, _vueDemi.ref)(isSupported.value && "permission" in Notification && Notification.permission === "granted");
    const notification = (0, _vueDemi.ref)(null);
    const ensurePermissions = async ()=>{
        if (!isSupported.value) return;
        if (!permissionGranted.value && Notification.permission !== "denied") {
            const result = await Notification.requestPermission();
            if (result === "granted") permissionGranted.value = true;
        }
        return permissionGranted.value;
    };
    const { on: onClick, trigger: clickTrigger } = (0, _shared.createEventHook)();
    const { on: onShow, trigger: showTrigger } = (0, _shared.createEventHook)();
    const { on: onError, trigger: errorTrigger } = (0, _shared.createEventHook)();
    const { on: onClose, trigger: closeTrigger } = (0, _shared.createEventHook)();
    const show = async (overrides)=>{
        if (!isSupported.value && !permissionGranted.value) return;
        const options2 = Object.assign({}, defaultWebNotificationOptions, overrides);
        notification.value = new Notification(options2.title || "", options2);
        notification.value.onclick = clickTrigger;
        notification.value.onshow = showTrigger;
        notification.value.onerror = errorTrigger;
        notification.value.onclose = closeTrigger;
        return notification.value;
    };
    const close = ()=>{
        if (notification.value) notification.value.close();
        notification.value = null;
    };
    if (_requestForPermissions) (0, _shared.tryOnMounted)(ensurePermissions);
    (0, _shared.tryOnScopeDispose)(close);
    if (isSupported.value && window1) {
        const document1 = window1.document;
        useEventListener(document1, "visibilitychange", (e)=>{
            e.preventDefault();
            if (document1.visibilityState === "visible") close();
        });
    }
    return {
        isSupported,
        notification,
        ensurePermissions,
        permissionGranted,
        show,
        close,
        onClick,
        onShow,
        onError,
        onClose
    };
}
const DEFAULT_PING_MESSAGE = "ping";
function resolveNestedOptions(options) {
    if (options === true) return {};
    return options;
}
function useWebSocket(url, options = {}) {
    const { onConnected, onDisconnected, onError, onMessage, immediate = true, autoClose = true, protocols = [] } = options;
    const data = (0, _vueDemi.ref)(null);
    const status = (0, _vueDemi.ref)("CLOSED");
    const wsRef = (0, _vueDemi.ref)();
    const urlRef = (0, _shared.toRef)(url);
    let heartbeatPause;
    let heartbeatResume;
    let explicitlyClosed = false;
    let retried = 0;
    let bufferedData = [];
    let pongTimeoutWait;
    const _sendBuffer = ()=>{
        if (bufferedData.length && wsRef.value && status.value === "OPEN") {
            for (const buffer of bufferedData)wsRef.value.send(buffer);
            bufferedData = [];
        }
    };
    const resetHeartbeat = ()=>{
        clearTimeout(pongTimeoutWait);
        pongTimeoutWait = void 0;
    };
    const close = (code = 1e3, reason)=>{
        if (!wsRef.value) return;
        explicitlyClosed = true;
        resetHeartbeat();
        heartbeatPause == null || heartbeatPause();
        wsRef.value.close(code, reason);
    };
    const send = (data2, useBuffer = true)=>{
        if (!wsRef.value || status.value !== "OPEN") {
            if (useBuffer) bufferedData.push(data2);
            return false;
        }
        _sendBuffer();
        wsRef.value.send(data2);
        return true;
    };
    const _init = ()=>{
        if (explicitlyClosed || typeof urlRef.value === "undefined") return;
        const ws = new WebSocket(urlRef.value, protocols);
        wsRef.value = ws;
        status.value = "CONNECTING";
        ws.onopen = ()=>{
            status.value = "OPEN";
            onConnected == null || onConnected(ws);
            heartbeatResume == null || heartbeatResume();
            _sendBuffer();
        };
        ws.onclose = (ev)=>{
            status.value = "CLOSED";
            wsRef.value = void 0;
            onDisconnected == null || onDisconnected(ws, ev);
            if (!explicitlyClosed && options.autoReconnect) {
                const { retries = -1, delay = 1e3, onFailed } = resolveNestedOptions(options.autoReconnect);
                retried += 1;
                if (typeof retries === "number" && (retries < 0 || retried < retries)) setTimeout(_init, delay);
                else if (typeof retries === "function" && retries()) setTimeout(_init, delay);
                else onFailed == null || onFailed();
            }
        };
        ws.onerror = (e)=>{
            onError == null || onError(ws, e);
        };
        ws.onmessage = (e)=>{
            if (options.heartbeat) {
                resetHeartbeat();
                const { message = DEFAULT_PING_MESSAGE } = resolveNestedOptions(options.heartbeat);
                if (e.data === message) return;
            }
            data.value = e.data;
            onMessage == null || onMessage(ws, e);
        };
    };
    if (options.heartbeat) {
        const { message = DEFAULT_PING_MESSAGE, interval = 1e3, pongTimeout = 1e3 } = resolveNestedOptions(options.heartbeat);
        const { pause, resume } = (0, _shared.useIntervalFn)(()=>{
            send(message, false);
            if (pongTimeoutWait != null) return;
            pongTimeoutWait = setTimeout(()=>{
                close();
                explicitlyClosed = false;
            }, pongTimeout);
        }, interval, {
            immediate: false
        });
        heartbeatPause = pause;
        heartbeatResume = resume;
    }
    if (autoClose) {
        useEventListener(window, "beforeunload", ()=>close());
        (0, _shared.tryOnScopeDispose)(close);
    }
    const open = ()=>{
        close();
        explicitlyClosed = false;
        retried = 0;
        _init();
    };
    if (immediate) (0, _vueDemi.watch)(urlRef, open, {
        immediate: true
    });
    return {
        data,
        status,
        close,
        send,
        open,
        ws: wsRef
    };
}
function useWebWorker(arg0, workerOptions, options) {
    const { window: window1 = defaultWindow } = options != null ? options : {};
    const data = (0, _vueDemi.ref)(null);
    const worker = (0, _vueDemi.shallowRef)();
    const post = (...args)=>{
        if (!worker.value) return;
        worker.value.postMessage(...args);
    };
    const terminate = function terminate2() {
        if (!worker.value) return;
        worker.value.terminate();
    };
    if (window1) {
        if (typeof arg0 === "string") worker.value = new Worker(arg0, workerOptions);
        else if (typeof arg0 === "function") worker.value = arg0();
        else worker.value = arg0;
        worker.value.onmessage = (e)=>{
            data.value = e.data;
        };
        (0, _shared.tryOnScopeDispose)(()=>{
            if (worker.value) worker.value.terminate();
        });
    }
    return {
        data,
        post,
        terminate,
        worker
    };
}
function jobRunner(userFunc) {
    return (e)=>{
        const userFuncArgs = e.data[0];
        return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result)=>{
            postMessage([
                "SUCCESS",
                result
            ]);
        }).catch((error)=>{
            postMessage([
                "ERROR",
                error
            ]);
        });
    };
}
function depsParser(deps) {
    if (deps.length === 0) return "";
    const depsString = deps.map((dep)=>`'${dep}'`).toString();
    return `importScripts(${depsString})`;
}
function createWorkerBlobUrl(fn, deps) {
    const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
    const blob = new Blob([
        blobCode
    ], {
        type: "text/javascript"
    });
    const url = URL.createObjectURL(blob);
    return url;
}
function useWebWorkerFn(fn, options = {}) {
    const { dependencies = [], timeout, window: window1 = defaultWindow } = options;
    const worker = (0, _vueDemi.ref)();
    const workerStatus = (0, _vueDemi.ref)("PENDING");
    const promise = (0, _vueDemi.ref)({});
    const timeoutId = (0, _vueDemi.ref)();
    const workerTerminate = (status = "PENDING")=>{
        if (worker.value && worker.value._url && window1) {
            worker.value.terminate();
            URL.revokeObjectURL(worker.value._url);
            promise.value = {};
            worker.value = void 0;
            window1.clearTimeout(timeoutId.value);
            workerStatus.value = status;
        }
    };
    workerTerminate();
    (0, _shared.tryOnScopeDispose)(workerTerminate);
    const generateWorker = ()=>{
        const blobUrl = createWorkerBlobUrl(fn, dependencies);
        const newWorker = new Worker(blobUrl);
        newWorker._url = blobUrl;
        newWorker.onmessage = (e)=>{
            const { resolve = ()=>{}, reject = ()=>{} } = promise.value;
            const [status, result] = e.data;
            switch(status){
                case "SUCCESS":
                    resolve(result);
                    workerTerminate(status);
                    break;
                default:
                    reject(result);
                    workerTerminate("ERROR");
                    break;
            }
        };
        newWorker.onerror = (e)=>{
            const { reject = ()=>{} } = promise.value;
            e.preventDefault();
            reject(e);
            workerTerminate("ERROR");
        };
        if (timeout) timeoutId.value = setTimeout(()=>workerTerminate("TIMEOUT_EXPIRED"), timeout);
        return newWorker;
    };
    const callWorker = (...fnArgs)=>new Promise((resolve, reject)=>{
            promise.value = {
                resolve,
                reject
            };
            worker.value && worker.value.postMessage([
                [
                    ...fnArgs
                ]
            ]);
            workerStatus.value = "RUNNING";
        });
    const workerFn = (...fnArgs)=>{
        if (workerStatus.value === "RUNNING") {
            console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
            return Promise.reject();
        }
        worker.value = generateWorker();
        return callWorker(...fnArgs);
    };
    return {
        workerFn,
        workerStatus,
        workerTerminate
    };
}
function useWindowFocus({ window: window1 = defaultWindow } = {}) {
    if (!window1) return (0, _vueDemi.ref)(false);
    const focused = (0, _vueDemi.ref)(window1.document.hasFocus());
    useEventListener(window1, "blur", ()=>{
        focused.value = false;
    });
    useEventListener(window1, "focus", ()=>{
        focused.value = true;
    });
    return focused;
}
function useWindowScroll({ window: window1 = defaultWindow } = {}) {
    if (!window1) return {
        x: (0, _vueDemi.ref)(0),
        y: (0, _vueDemi.ref)(0)
    };
    const x = (0, _vueDemi.ref)(window1.scrollX);
    const y = (0, _vueDemi.ref)(window1.scrollY);
    useEventListener(window1, "scroll", ()=>{
        x.value = window1.scrollX;
        y.value = window1.scrollY;
    }, {
        capture: false,
        passive: true
    });
    return {
        x,
        y
    };
}
function useWindowSize(options = {}) {
    const { window: window1 = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true } = options;
    const width = (0, _vueDemi.ref)(initialWidth);
    const height = (0, _vueDemi.ref)(initialHeight);
    const update = ()=>{
        if (window1) {
            if (includeScrollbar) {
                width.value = window1.innerWidth;
                height.value = window1.innerHeight;
            } else {
                width.value = window1.document.documentElement.clientWidth;
                height.value = window1.document.documentElement.clientHeight;
            }
        }
    };
    update();
    (0, _shared.tryOnMounted)(update);
    useEventListener("resize", update, {
        passive: true
    });
    if (listenOrientation) {
        const matches = useMediaQuery("(orientation: portrait)");
        (0, _vueDemi.watch)(matches, ()=>update());
    }
    return {
        width,
        height
    };
}

},{"@vueuse/shared":"7Qlyi","vue-demi":"fRyDa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Qlyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assert", ()=>assert);
parcelHelpers.export(exports, "autoResetRef", ()=>refAutoReset);
parcelHelpers.export(exports, "bypassFilter", ()=>bypassFilter);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "computedEager", ()=>computedEager);
parcelHelpers.export(exports, "computedWithControl", ()=>computedWithControl);
parcelHelpers.export(exports, "containsProp", ()=>containsProp);
parcelHelpers.export(exports, "controlledComputed", ()=>computedWithControl);
parcelHelpers.export(exports, "controlledRef", ()=>controlledRef);
parcelHelpers.export(exports, "createEventHook", ()=>createEventHook);
parcelHelpers.export(exports, "createFilterWrapper", ()=>createFilterWrapper);
parcelHelpers.export(exports, "createGlobalState", ()=>createGlobalState);
parcelHelpers.export(exports, "createInjectionState", ()=>createInjectionState);
parcelHelpers.export(exports, "createReactiveFn", ()=>reactify);
parcelHelpers.export(exports, "createSharedComposable", ()=>createSharedComposable);
parcelHelpers.export(exports, "createSingletonPromise", ()=>createSingletonPromise);
parcelHelpers.export(exports, "debounceFilter", ()=>debounceFilter);
parcelHelpers.export(exports, "debouncedRef", ()=>refDebounced);
parcelHelpers.export(exports, "debouncedWatch", ()=>watchDebounced);
parcelHelpers.export(exports, "directiveHooks", ()=>directiveHooks);
parcelHelpers.export(exports, "eagerComputed", ()=>computedEager);
parcelHelpers.export(exports, "extendRef", ()=>extendRef);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "ignorableWatch", ()=>watchIgnorable);
parcelHelpers.export(exports, "increaseWithUnit", ()=>increaseWithUnit);
parcelHelpers.export(exports, "invoke", ()=>invoke);
parcelHelpers.export(exports, "isClient", ()=>isClient);
parcelHelpers.export(exports, "isDef", ()=>isDef);
parcelHelpers.export(exports, "isDefined", ()=>isDefined);
parcelHelpers.export(exports, "isIOS", ()=>isIOS);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "makeDestructurable", ()=>makeDestructurable);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "normalizeDate", ()=>normalizeDate);
parcelHelpers.export(exports, "notNullish", ()=>notNullish);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "objectEntries", ()=>objectEntries);
parcelHelpers.export(exports, "objectOmit", ()=>objectOmit);
parcelHelpers.export(exports, "objectPick", ()=>objectPick);
parcelHelpers.export(exports, "pausableFilter", ()=>pausableFilter);
parcelHelpers.export(exports, "pausableWatch", ()=>watchPausable);
parcelHelpers.export(exports, "promiseTimeout", ()=>promiseTimeout);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "reactify", ()=>reactify);
parcelHelpers.export(exports, "reactifyObject", ()=>reactifyObject);
parcelHelpers.export(exports, "reactiveComputed", ()=>reactiveComputed);
parcelHelpers.export(exports, "reactiveOmit", ()=>reactiveOmit);
parcelHelpers.export(exports, "reactivePick", ()=>reactivePick);
parcelHelpers.export(exports, "refAutoReset", ()=>refAutoReset);
parcelHelpers.export(exports, "refDebounced", ()=>refDebounced);
parcelHelpers.export(exports, "refDefault", ()=>refDefault);
parcelHelpers.export(exports, "refThrottled", ()=>refThrottled);
parcelHelpers.export(exports, "refWithControl", ()=>refWithControl);
parcelHelpers.export(exports, "resolveRef", ()=>resolveRef);
parcelHelpers.export(exports, "resolveUnref", ()=>resolveUnref);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "syncRef", ()=>syncRef);
parcelHelpers.export(exports, "syncRefs", ()=>syncRefs);
parcelHelpers.export(exports, "throttleFilter", ()=>throttleFilter);
parcelHelpers.export(exports, "throttledRef", ()=>refThrottled);
parcelHelpers.export(exports, "throttledWatch", ()=>watchThrottled);
parcelHelpers.export(exports, "timestamp", ()=>timestamp);
parcelHelpers.export(exports, "toReactive", ()=>toReactive);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "tryOnBeforeMount", ()=>tryOnBeforeMount);
parcelHelpers.export(exports, "tryOnBeforeUnmount", ()=>tryOnBeforeUnmount);
parcelHelpers.export(exports, "tryOnMounted", ()=>tryOnMounted);
parcelHelpers.export(exports, "tryOnScopeDispose", ()=>tryOnScopeDispose);
parcelHelpers.export(exports, "tryOnUnmounted", ()=>tryOnUnmounted);
parcelHelpers.export(exports, "until", ()=>until);
parcelHelpers.export(exports, "useArrayDifference", ()=>useArrayDifference);
parcelHelpers.export(exports, "useArrayEvery", ()=>useArrayEvery);
parcelHelpers.export(exports, "useArrayFilter", ()=>useArrayFilter);
parcelHelpers.export(exports, "useArrayFind", ()=>useArrayFind);
parcelHelpers.export(exports, "useArrayFindIndex", ()=>useArrayFindIndex);
parcelHelpers.export(exports, "useArrayFindLast", ()=>useArrayFindLast);
parcelHelpers.export(exports, "useArrayIncludes", ()=>useArrayIncludes);
parcelHelpers.export(exports, "useArrayJoin", ()=>useArrayJoin);
parcelHelpers.export(exports, "useArrayMap", ()=>useArrayMap);
parcelHelpers.export(exports, "useArrayReduce", ()=>useArrayReduce);
parcelHelpers.export(exports, "useArraySome", ()=>useArraySome);
parcelHelpers.export(exports, "useArrayUnique", ()=>useArrayUnique);
parcelHelpers.export(exports, "useCounter", ()=>useCounter);
parcelHelpers.export(exports, "useDateFormat", ()=>useDateFormat);
parcelHelpers.export(exports, "useDebounce", ()=>refDebounced);
parcelHelpers.export(exports, "useDebounceFn", ()=>useDebounceFn);
parcelHelpers.export(exports, "useInterval", ()=>useInterval);
parcelHelpers.export(exports, "useIntervalFn", ()=>useIntervalFn);
parcelHelpers.export(exports, "useLastChanged", ()=>useLastChanged);
parcelHelpers.export(exports, "useThrottle", ()=>refThrottled);
parcelHelpers.export(exports, "useThrottleFn", ()=>useThrottleFn);
parcelHelpers.export(exports, "useTimeout", ()=>useTimeout);
parcelHelpers.export(exports, "useTimeoutFn", ()=>useTimeoutFn);
parcelHelpers.export(exports, "useToNumber", ()=>useToNumber);
parcelHelpers.export(exports, "useToString", ()=>useToString);
parcelHelpers.export(exports, "useToggle", ()=>useToggle);
parcelHelpers.export(exports, "watchArray", ()=>watchArray);
parcelHelpers.export(exports, "watchAtMost", ()=>watchAtMost);
parcelHelpers.export(exports, "watchDebounced", ()=>watchDebounced);
parcelHelpers.export(exports, "watchDeep", ()=>watchDeep);
parcelHelpers.export(exports, "watchIgnorable", ()=>watchIgnorable);
parcelHelpers.export(exports, "watchImmediate", ()=>watchImmediate);
parcelHelpers.export(exports, "watchOnce", ()=>watchOnce);
parcelHelpers.export(exports, "watchPausable", ()=>watchPausable);
parcelHelpers.export(exports, "watchThrottled", ()=>watchThrottled);
parcelHelpers.export(exports, "watchTriggerable", ()=>watchTriggerable);
parcelHelpers.export(exports, "watchWithFilter", ()=>watchWithFilter);
parcelHelpers.export(exports, "whenever", ()=>whenever);
var _vueDemi = require("vue-demi");
function computedEager(fn, options) {
    var _a;
    const result = (0, _vueDemi.shallowRef)();
    (0, _vueDemi.watchEffect)(()=>{
        result.value = fn();
    }, {
        ...options,
        flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
    });
    return (0, _vueDemi.readonly)(result);
}
function computedWithControl(source, fn) {
    let v = void 0;
    let track;
    let trigger;
    const dirty = (0, _vueDemi.ref)(true);
    const update = ()=>{
        dirty.value = true;
        trigger();
    };
    (0, _vueDemi.watch)(source, update, {
        flush: "sync"
    });
    const get = typeof fn === "function" ? fn : fn.get;
    const set = typeof fn === "function" ? void 0 : fn.set;
    const result = (0, _vueDemi.customRef)((_track, _trigger)=>{
        track = _track;
        trigger = _trigger;
        return {
            get () {
                if (dirty.value) {
                    v = get();
                    dirty.value = false;
                }
                track();
                return v;
            },
            set (v2) {
                set == null || set(v2);
            }
        };
    });
    if (Object.isExtensible(result)) result.trigger = update;
    return result;
}
function tryOnScopeDispose(fn) {
    if ((0, _vueDemi.getCurrentScope)()) {
        (0, _vueDemi.onScopeDispose)(fn);
        return true;
    }
    return false;
}
function createEventHook() {
    const fns = /* @__PURE__ */ new Set();
    const off = (fn)=>{
        fns.delete(fn);
    };
    const on = (fn)=>{
        fns.add(fn);
        const offFn = ()=>off(fn);
        tryOnScopeDispose(offFn);
        return {
            off: offFn
        };
    };
    const trigger = (param)=>{
        return Promise.all(Array.from(fns).map((fn)=>fn(param)));
    };
    return {
        on,
        off,
        trigger
    };
}
function createGlobalState(stateFactory) {
    let initialized = false;
    let state;
    const scope = (0, _vueDemi.effectScope)(true);
    return (...args)=>{
        if (!initialized) {
            state = scope.run(()=>stateFactory(...args));
            initialized = true;
        }
        return state;
    };
}
function createInjectionState(composable) {
    const key = Symbol("InjectionState");
    const useProvidingState = (...args)=>{
        const state = composable(...args);
        (0, _vueDemi.provide)(key, state);
        return state;
    };
    const useInjectedState = ()=>(0, _vueDemi.inject)(key);
    return [
        useProvidingState,
        useInjectedState
    ];
}
function createSharedComposable(composable) {
    let subscribers = 0;
    let state;
    let scope;
    const dispose = ()=>{
        subscribers -= 1;
        if (scope && subscribers <= 0) {
            scope.stop();
            state = void 0;
            scope = void 0;
        }
    };
    return (...args)=>{
        subscribers += 1;
        if (!state) {
            scope = (0, _vueDemi.effectScope)(true);
            state = scope.run(()=>composable(...args));
        }
        tryOnScopeDispose(dispose);
        return state;
    };
}
function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
    if (!(0, _vueDemi.isVue3) && !(0, _vueDemi.version).startsWith("2.7.")) throw new Error("[VueUse] extendRef only works in Vue 2.7 or above.");
    for (const [key, value] of Object.entries(extend)){
        if (key === "value") continue;
        if ((0, _vueDemi.isRef)(value) && unwrap) Object.defineProperty(ref, key, {
            get () {
                return value.value;
            },
            set (v) {
                value.value = v;
            },
            enumerable
        });
        else Object.defineProperty(ref, key, {
            value,
            enumerable
        });
    }
    return ref;
}
function get(obj, key) {
    if (key == null) return (0, _vueDemi.unref)(obj);
    return (0, _vueDemi.unref)(obj)[key];
}
function isDefined(v) {
    return (0, _vueDemi.unref)(v) != null;
}
function makeDestructurable(obj, arr) {
    if (typeof Symbol !== "undefined") {
        const clone = {
            ...obj
        };
        Object.defineProperty(clone, Symbol.iterator, {
            enumerable: false,
            value () {
                let index = 0;
                return {
                    next: ()=>({
                            value: arr[index++],
                            done: index > arr.length
                        })
                };
            }
        });
        return clone;
    } else return Object.assign([
        ...arr
    ], obj);
}
function toValue(r) {
    return typeof r === "function" ? r() : (0, _vueDemi.unref)(r);
}
const resolveUnref = toValue;
function reactify(fn, options) {
    const unrefFn = (options == null ? void 0 : options.computedGetter) === false ? (0, _vueDemi.unref) : toValue;
    return function(...args) {
        return (0, _vueDemi.computed)(()=>fn.apply(this, args.map((i)=>unrefFn(i))));
    };
}
function reactifyObject(obj, optionsOrKeys = {}) {
    let keys = [];
    let options;
    if (Array.isArray(optionsOrKeys)) keys = optionsOrKeys;
    else {
        options = optionsOrKeys;
        const { includeOwnProperties = true } = optionsOrKeys;
        keys.push(...Object.keys(obj));
        if (includeOwnProperties) keys.push(...Object.getOwnPropertyNames(obj));
    }
    return Object.fromEntries(keys.map((key)=>{
        const value = obj[key];
        return [
            key,
            typeof value === "function" ? reactify(value.bind(obj), options) : value
        ];
    }));
}
function toReactive(objectRef) {
    if (!(0, _vueDemi.isRef)(objectRef)) return (0, _vueDemi.reactive)(objectRef);
    const proxy = new Proxy({}, {
        get (_, p, receiver) {
            return (0, _vueDemi.unref)(Reflect.get(objectRef.value, p, receiver));
        },
        set (_, p, value) {
            if ((0, _vueDemi.isRef)(objectRef.value[p]) && !(0, _vueDemi.isRef)(value)) objectRef.value[p].value = value;
            else objectRef.value[p] = value;
            return true;
        },
        deleteProperty (_, p) {
            return Reflect.deleteProperty(objectRef.value, p);
        },
        has (_, p) {
            return Reflect.has(objectRef.value, p);
        },
        ownKeys () {
            return Object.keys(objectRef.value);
        },
        getOwnPropertyDescriptor () {
            return {
                enumerable: true,
                configurable: true
            };
        }
    });
    return (0, _vueDemi.reactive)(proxy);
}
function reactiveComputed(fn) {
    return toReactive((0, _vueDemi.computed)(fn));
}
function reactiveOmit(obj, ...keys) {
    const flatKeys = keys.flat();
    const predicate = flatKeys[0];
    return reactiveComputed(()=>typeof predicate === "function" ? Object.fromEntries(Object.entries((0, _vueDemi.toRefs)(obj)).filter(([k, v])=>!predicate(toValue(v), k))) : Object.fromEntries(Object.entries((0, _vueDemi.toRefs)(obj)).filter((e)=>!flatKeys.includes(e[0]))));
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
const isDef = (val)=>typeof val !== "undefined";
const notNullish = (val)=>val != null;
const assert = (condition, ...infos)=>{
    if (!condition) console.warn(...infos);
};
const toString = Object.prototype.toString;
const isObject = (val)=>toString.call(val) === "[object Object]";
const now = ()=>Date.now();
const timestamp = ()=>+Date.now();
const clamp = (n, min, max)=>Math.min(max, Math.max(min, n));
const noop = ()=>{};
const rand = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const hasOwn = (val, key)=>Object.prototype.hasOwnProperty.call(val, key);
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
    var _a;
    return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
        return new Promise((resolve, reject)=>{
            Promise.resolve(filter(()=>fn.apply(this, args), {
                fn,
                thisArg: this,
                args
            })).then(resolve).catch(reject);
        });
    }
    return wrapper;
}
const bypassFilter = (invoke)=>{
    return invoke();
};
function debounceFilter(ms, options = {}) {
    let timer;
    let maxTimer;
    let lastRejector = noop;
    const _clearTimeout = (timer2)=>{
        clearTimeout(timer2);
        lastRejector();
        lastRejector = noop;
    };
    const filter = (invoke)=>{
        const duration = toValue(ms);
        const maxDuration = toValue(options.maxWait);
        if (timer) _clearTimeout(timer);
        if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
            if (maxTimer) {
                _clearTimeout(maxTimer);
                maxTimer = null;
            }
            return Promise.resolve(invoke());
        }
        return new Promise((resolve, reject)=>{
            lastRejector = options.rejectOnCancel ? reject : resolve;
            if (maxDuration && !maxTimer) maxTimer = setTimeout(()=>{
                if (timer) _clearTimeout(timer);
                maxTimer = null;
                resolve(invoke());
            }, maxDuration);
            timer = setTimeout(()=>{
                if (maxTimer) _clearTimeout(maxTimer);
                maxTimer = null;
                resolve(invoke());
            }, duration);
        });
    };
    return filter;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
    let lastExec = 0;
    let timer;
    let isLeading = true;
    let lastRejector = noop;
    let lastValue;
    const clear = ()=>{
        if (timer) {
            clearTimeout(timer);
            timer = void 0;
            lastRejector();
            lastRejector = noop;
        }
    };
    const filter = (_invoke)=>{
        const duration = toValue(ms);
        const elapsed = Date.now() - lastExec;
        const invoke = ()=>{
            return lastValue = _invoke();
        };
        clear();
        if (duration <= 0) {
            lastExec = Date.now();
            return invoke();
        }
        if (elapsed > duration && (leading || !isLeading)) {
            lastExec = Date.now();
            invoke();
        } else if (trailing) lastValue = new Promise((resolve, reject)=>{
            lastRejector = rejectOnCancel ? reject : resolve;
            timer = setTimeout(()=>{
                lastExec = Date.now();
                isLeading = true;
                resolve(invoke());
                clear();
            }, Math.max(0, duration - elapsed));
        });
        if (!leading && !timer) timer = setTimeout(()=>isLeading = true, duration);
        isLeading = false;
        return lastValue;
    };
    return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
    const isActive = (0, _vueDemi.ref)(true);
    function pause() {
        isActive.value = false;
    }
    function resume() {
        isActive.value = true;
    }
    const eventFilter = (...args)=>{
        if (isActive.value) extendFilter(...args);
    };
    return {
        isActive: (0, _vueDemi.readonly)(isActive),
        pause,
        resume,
        eventFilter
    };
}
const directiveHooks = {
    mounted: (0, _vueDemi.isVue3) ? "mounted" : "inserted",
    updated: (0, _vueDemi.isVue3) ? "updated" : "componentUpdated",
    unmounted: (0, _vueDemi.isVue3) ? "unmounted" : "unbind"
};
function cacheStringFunction(fn) {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
}
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
    return new Promise((resolve, reject)=>{
        if (throwOnTimeout) setTimeout(()=>reject(reason), ms);
        else setTimeout(resolve, ms);
    });
}
function identity(arg) {
    return arg;
}
function createSingletonPromise(fn) {
    let _promise;
    function wrapper() {
        if (!_promise) _promise = fn();
        return _promise;
    }
    wrapper.reset = async ()=>{
        const _prev = _promise;
        _promise = void 0;
        if (_prev) await _prev;
    };
    return wrapper;
}
function invoke(fn) {
    return fn();
}
function containsProp(obj, ...props) {
    return props.some((k)=>k in obj);
}
function increaseWithUnit(target, delta) {
    var _a;
    if (typeof target === "number") return target + delta;
    const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
    const unit = target.slice(value.length);
    const result = Number.parseFloat(value) + delta;
    if (Number.isNaN(result)) return target;
    return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
    return keys.reduce((n, k)=>{
        if (k in obj) {
            if (!omitUndefined || obj[k] !== void 0) n[k] = obj[k];
        }
        return n;
    }, {});
}
function objectOmit(obj, keys, omitUndefined = false) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value])=>{
        return (!omitUndefined || value !== void 0) && !keys.includes(key);
    }));
}
function objectEntries(obj) {
    return Object.entries(obj);
}
function toRef(...args) {
    if (args.length !== 1) return (0, _vueDemi.toRef)(...args);
    const r = args[0];
    return typeof r === "function" ? (0, _vueDemi.readonly)((0, _vueDemi.customRef)(()=>({
            get: r,
            set: noop
        }))) : (0, _vueDemi.ref)(r);
}
const resolveRef = toRef;
function reactivePick(obj, ...keys) {
    const flatKeys = keys.flat();
    const predicate = flatKeys[0];
    return reactiveComputed(()=>typeof predicate === "function" ? Object.fromEntries(Object.entries((0, _vueDemi.toRefs)(obj)).filter(([k, v])=>predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k)=>[
                k,
                toRef(obj, k)
            ])));
}
function refAutoReset(defaultValue, afterMs = 1e4) {
    return (0, _vueDemi.customRef)((track, trigger)=>{
        let value = toValue(defaultValue);
        let timer;
        const resetAfter = ()=>setTimeout(()=>{
                value = toValue(defaultValue);
                trigger();
            }, toValue(afterMs));
        tryOnScopeDispose(()=>{
            clearTimeout(timer);
        });
        return {
            get () {
                track();
                return value;
            },
            set (newValue) {
                value = newValue;
                trigger();
                clearTimeout(timer);
                timer = resetAfter();
            }
        };
    });
}
function useDebounceFn(fn, ms = 200, options = {}) {
    return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
    const debounced = (0, _vueDemi.ref)(value.value);
    const updater = useDebounceFn(()=>{
        debounced.value = value.value;
    }, ms, options);
    (0, _vueDemi.watch)(value, ()=>updater());
    return debounced;
}
function refDefault(source, defaultValue) {
    return (0, _vueDemi.computed)({
        get () {
            var _a;
            return (_a = source.value) != null ? _a : defaultValue;
        },
        set (value) {
            source.value = value;
        }
    });
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
    return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function refThrottled(value, delay = 200, trailing = true, leading = true) {
    if (delay <= 0) return value;
    const throttled = (0, _vueDemi.ref)(value.value);
    const updater = useThrottleFn(()=>{
        throttled.value = value.value;
    }, delay, trailing, leading);
    (0, _vueDemi.watch)(value, ()=>updater());
    return throttled;
}
function refWithControl(initial, options = {}) {
    let source = initial;
    let track;
    let trigger;
    const ref = (0, _vueDemi.customRef)((_track, _trigger)=>{
        track = _track;
        trigger = _trigger;
        return {
            get () {
                return get();
            },
            set (v) {
                set(v);
            }
        };
    });
    function get(tracking = true) {
        if (tracking) track();
        return source;
    }
    function set(value, triggering = true) {
        var _a, _b;
        if (value === source) return;
        const old = source;
        if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false) return;
        source = value;
        (_b = options.onChanged) == null || _b.call(options, value, old);
        if (triggering) trigger();
    }
    const untrackedGet = ()=>get(false);
    const silentSet = (v)=>set(v, false);
    const peek = ()=>get(false);
    const lay = (v)=>set(v, false);
    return extendRef(ref, {
        get,
        set,
        untrackedGet,
        silentSet,
        peek,
        lay
    }, {
        enumerable: true
    });
}
const controlledRef = refWithControl;
function set(...args) {
    if (args.length === 2) {
        const [ref, value] = args;
        ref.value = value;
    }
    if (args.length === 3) {
        if (0, _vueDemi.isVue2) (0, _vueDemi.set)(...args);
        else {
            const [target, key, value] = args;
            target[key] = value;
        }
    }
}
function watchWithFilter(source, cb, options = {}) {
    const { eventFilter = bypassFilter, ...watchOptions } = options;
    return (0, _vueDemi.watch)(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
    const { eventFilter: filter, ...watchOptions } = options;
    const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
    const stop = watchWithFilter(source, cb, {
        ...watchOptions,
        eventFilter
    });
    return {
        stop,
        pause,
        resume,
        isActive
    };
}
function syncRef(left, right, options = {}) {
    var _a, _b;
    const { flush = "sync", deep = false, immediate = true, direction = "both", transform = {} } = options;
    const watchers = [];
    const transformLTR = (_a = transform.ltr) != null ? _a : (v)=>v;
    const transformRTL = (_b = transform.rtl) != null ? _b : (v)=>v;
    if (direction === "both" || direction === "ltr") watchers.push(watchPausable(left, (newValue)=>{
        watchers.forEach((w)=>w.pause());
        right.value = transformLTR(newValue);
        watchers.forEach((w)=>w.resume());
    }, {
        flush,
        deep,
        immediate
    }));
    if (direction === "both" || direction === "rtl") watchers.push(watchPausable(right, (newValue)=>{
        watchers.forEach((w)=>w.pause());
        left.value = transformRTL(newValue);
        watchers.forEach((w)=>w.resume());
    }, {
        flush,
        deep,
        immediate
    }));
    const stop = ()=>{
        watchers.forEach((w)=>w.stop());
    };
    return stop;
}
function syncRefs(source, targets, options = {}) {
    const { flush = "sync", deep = false, immediate = true } = options;
    if (!Array.isArray(targets)) targets = [
        targets
    ];
    return (0, _vueDemi.watch)(source, (newValue)=>targets.forEach((target)=>target.value = newValue), {
        flush,
        deep,
        immediate
    });
}
function toRefs(objectRef, options = {}) {
    if (!(0, _vueDemi.isRef)(objectRef)) return (0, _vueDemi.toRefs)(objectRef);
    const result = Array.isArray(objectRef.value) ? Array.from({
        length: objectRef.value.length
    }) : {};
    for(const key in objectRef.value)result[key] = (0, _vueDemi.customRef)(()=>({
            get () {
                return objectRef.value[key];
            },
            set (v) {
                var _a;
                const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
                if (replaceRef) {
                    if (Array.isArray(objectRef.value)) {
                        const copy = [
                            ...objectRef.value
                        ];
                        copy[key] = v;
                        objectRef.value = copy;
                    } else {
                        const newObject = {
                            ...objectRef.value,
                            [key]: v
                        };
                        Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
                        objectRef.value = newObject;
                    }
                } else objectRef.value[key] = v;
            }
        }));
    return result;
}
function tryOnBeforeMount(fn, sync = true) {
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onBeforeMount)(fn);
    else if (sync) fn();
    else (0, _vueDemi.nextTick)(fn);
}
function tryOnBeforeUnmount(fn) {
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onBeforeUnmount)(fn);
}
function tryOnMounted(fn, sync = true) {
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onMounted)(fn);
    else if (sync) fn();
    else (0, _vueDemi.nextTick)(fn);
}
function tryOnUnmounted(fn) {
    if ((0, _vueDemi.getCurrentInstance)()) (0, _vueDemi.onUnmounted)(fn);
}
function createUntil(r, isNot = false) {
    function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
        let stop = null;
        const watcher = new Promise((resolve)=>{
            stop = (0, _vueDemi.watch)(r, (v)=>{
                if (condition(v) !== isNot) {
                    stop == null || stop();
                    resolve(v);
                }
            }, {
                flush,
                deep,
                immediate: true
            });
        });
        const promises = [
            watcher
        ];
        if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(()=>toValue(r)).finally(()=>stop == null ? void 0 : stop()));
        return Promise.race(promises);
    }
    function toBe(value, options) {
        if (!(0, _vueDemi.isRef)(value)) return toMatch((v)=>v === value, options);
        const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
        let stop = null;
        const watcher = new Promise((resolve)=>{
            stop = (0, _vueDemi.watch)([
                r,
                value
            ], ([v1, v2])=>{
                if (isNot !== (v1 === v2)) {
                    stop == null || stop();
                    resolve(v1);
                }
            }, {
                flush,
                deep,
                immediate: true
            });
        });
        const promises = [
            watcher
        ];
        if (timeout != null) promises.push(promiseTimeout(timeout, throwOnTimeout).then(()=>toValue(r)).finally(()=>{
            stop == null || stop();
            return toValue(r);
        }));
        return Promise.race(promises);
    }
    function toBeTruthy(options) {
        return toMatch((v)=>Boolean(v), options);
    }
    function toBeNull(options) {
        return toBe(null, options);
    }
    function toBeUndefined(options) {
        return toBe(void 0, options);
    }
    function toBeNaN(options) {
        return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
        return toMatch((v)=>{
            const array = Array.from(v);
            return array.includes(value) || array.includes(toValue(value));
        }, options);
    }
    function changed(options) {
        return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
        let count = -1;
        return toMatch(()=>{
            count += 1;
            return count >= n;
        }, options);
    }
    if (Array.isArray(toValue(r))) {
        const instance = {
            toMatch,
            toContains,
            changed,
            changedTimes,
            get not () {
                return createUntil(r, !isNot);
            }
        };
        return instance;
    } else {
        const instance = {
            toMatch,
            toBe,
            toBeTruthy,
            toBeNull,
            toBeNaN,
            toBeUndefined,
            changed,
            changedTimes,
            get not () {
                return createUntil(r, !isNot);
            }
        };
        return instance;
    }
}
function until(r) {
    return createUntil(r);
}
function defaultComparator(value, othVal) {
    return value === othVal;
}
function useArrayDifference(...args) {
    var _a;
    const list = args[0];
    const values = args[1];
    let compareFn = (_a = args[2]) != null ? _a : defaultComparator;
    if (typeof compareFn === "string") {
        const key = compareFn;
        compareFn = (value, othVal)=>value[key] === othVal[key];
    }
    return (0, _vueDemi.computed)(()=>toValue(list).filter((x)=>toValue(values).findIndex((y)=>compareFn(x, y)) === -1));
}
function useArrayEvery(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(list).every((element, index, array)=>fn(toValue(element), index, array)));
}
function useArrayFilter(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(list).map((i)=>toValue(i)).filter(fn));
}
function useArrayFind(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(toValue(list).find((element, index, array)=>fn(toValue(element), index, array))));
}
function useArrayFindIndex(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(list).findIndex((element, index, array)=>fn(toValue(element), index, array)));
}
function findLast(arr, cb) {
    let index = arr.length;
    while(index-- > 0){
        if (cb(arr[index], index, arr)) return arr[index];
    }
    return void 0;
}
function useArrayFindLast(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(!Array.prototype.findLast ? findLast(toValue(list), (element, index, array)=>fn(toValue(element), index, array)) : toValue(list).findLast((element, index, array)=>fn(toValue(element), index, array))));
}
function isArrayIncludesOptions(obj) {
    return isObject(obj) && containsProp(obj, "formIndex", "comparator");
}
function useArrayIncludes(...args) {
    var _a;
    const list = args[0];
    const value = args[1];
    let comparator = args[2];
    let formIndex = 0;
    if (isArrayIncludesOptions(comparator)) {
        formIndex = (_a = comparator.fromIndex) != null ? _a : 0;
        comparator = comparator.comparator;
    }
    if (typeof comparator === "string") {
        const key = comparator;
        comparator = (element, value2)=>element[key] === toValue(value2);
    }
    comparator = comparator != null ? comparator : (element, value2)=>element === toValue(value2);
    return (0, _vueDemi.computed)(()=>toValue(list).slice(formIndex).some((element, index, array)=>comparator(toValue(element), toValue(value), index, toValue(array))));
}
function useArrayJoin(list, separator) {
    return (0, _vueDemi.computed)(()=>toValue(list).map((i)=>toValue(i)).join(toValue(separator)));
}
function useArrayMap(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(list).map((i)=>toValue(i)).map(fn));
}
function useArrayReduce(list, reducer, ...args) {
    const reduceCallback = (sum, value, index)=>reducer(toValue(sum), toValue(value), index);
    return (0, _vueDemi.computed)(()=>{
        const resolved = toValue(list);
        return args.length ? resolved.reduce(reduceCallback, toValue(args[0])) : resolved.reduce(reduceCallback);
    });
}
function useArraySome(list, fn) {
    return (0, _vueDemi.computed)(()=>toValue(list).some((element, index, array)=>fn(toValue(element), index, array)));
}
function uniq(array) {
    return Array.from(new Set(array));
}
function uniqueElementsBy(array, fn) {
    return array.reduce((acc, v)=>{
        if (!acc.some((x)=>fn(v, x, array))) acc.push(v);
        return acc;
    }, []);
}
function useArrayUnique(list, compareFn) {
    return (0, _vueDemi.computed)(()=>{
        const resolvedList = toValue(list).map((element)=>toValue(element));
        return compareFn ? uniqueElementsBy(resolvedList, compareFn) : uniq(resolvedList);
    });
}
function useCounter(initialValue = 0, options = {}) {
    let _initialValue = (0, _vueDemi.unref)(initialValue);
    const count = (0, _vueDemi.ref)(initialValue);
    const { max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY } = options;
    const inc = (delta = 1)=>count.value = Math.min(max, count.value + delta);
    const dec = (delta = 1)=>count.value = Math.max(min, count.value - delta);
    const get = ()=>count.value;
    const set = (val)=>count.value = Math.max(min, Math.min(max, val));
    const reset = (val = _initialValue)=>{
        _initialValue = val;
        return set(val);
    };
    return {
        count,
        inc,
        dec,
        get,
        set,
        reset
    };
}
const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
function defaultMeridiem(hours, minutes, isLowercase, hasPeriod) {
    let m = hours < 12 ? "AM" : "PM";
    if (hasPeriod) m = m.split("").reduce((acc, curr)=>acc += `${curr}.`, "");
    return isLowercase ? m.toLowerCase() : m;
}
function formatDate(date, formatStr, options = {}) {
    var _a;
    const years = date.getFullYear();
    const month = date.getMonth();
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const day = date.getDay();
    const meridiem = (_a = options.customMeridiem) != null ? _a : defaultMeridiem;
    const matches = {
        YY: ()=>String(years).slice(-2),
        YYYY: ()=>years,
        M: ()=>month + 1,
        MM: ()=>`${month + 1}`.padStart(2, "0"),
        MMM: ()=>date.toLocaleDateString(options.locales, {
                month: "short"
            }),
        MMMM: ()=>date.toLocaleDateString(options.locales, {
                month: "long"
            }),
        D: ()=>String(days),
        DD: ()=>`${days}`.padStart(2, "0"),
        H: ()=>String(hours),
        HH: ()=>`${hours}`.padStart(2, "0"),
        h: ()=>`${hours % 12 || 12}`.padStart(1, "0"),
        hh: ()=>`${hours % 12 || 12}`.padStart(2, "0"),
        m: ()=>String(minutes),
        mm: ()=>`${minutes}`.padStart(2, "0"),
        s: ()=>String(seconds),
        ss: ()=>`${seconds}`.padStart(2, "0"),
        SSS: ()=>`${milliseconds}`.padStart(3, "0"),
        d: ()=>day,
        dd: ()=>date.toLocaleDateString(options.locales, {
                weekday: "narrow"
            }),
        ddd: ()=>date.toLocaleDateString(options.locales, {
                weekday: "short"
            }),
        dddd: ()=>date.toLocaleDateString(options.locales, {
                weekday: "long"
            }),
        A: ()=>meridiem(hours, minutes),
        AA: ()=>meridiem(hours, minutes, false, true),
        a: ()=>meridiem(hours, minutes, true),
        aa: ()=>meridiem(hours, minutes, true, true)
    };
    return formatStr.replace(REGEX_FORMAT, (match, $1)=>{
        var _a2, _b;
        return (_b = $1 != null ? $1 : (_a2 = matches[match]) == null ? void 0 : _a2.call(matches)) != null ? _b : match;
    });
}
function normalizeDate(date) {
    if (date === null) return new Date(Number.NaN);
    if (date === void 0) return /* @__PURE__ */ new Date();
    if (date instanceof Date) return new Date(date);
    if (typeof date === "string" && !/Z$/i.test(date)) {
        const d = date.match(REGEX_PARSE);
        if (d) {
            const m = d[2] - 1 || 0;
            const ms = (d[7] || "0").substring(0, 3);
            return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
        }
    }
    return new Date(date);
}
function useDateFormat(date, formatStr = "HH:mm:ss", options = {}) {
    return (0, _vueDemi.computed)(()=>formatDate(normalizeDate(toValue(date)), toValue(formatStr), options));
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
    const { immediate = true, immediateCallback = false } = options;
    let timer = null;
    const isActive = (0, _vueDemi.ref)(false);
    function clean() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function pause() {
        isActive.value = false;
        clean();
    }
    function resume() {
        const intervalValue = toValue(interval);
        if (intervalValue <= 0) return;
        isActive.value = true;
        if (immediateCallback) cb();
        clean();
        timer = setInterval(cb, intervalValue);
    }
    if (immediate && isClient) resume();
    if ((0, _vueDemi.isRef)(interval) || typeof interval === "function") {
        const stopWatch = (0, _vueDemi.watch)(interval, ()=>{
            if (isActive.value && isClient) resume();
        });
        tryOnScopeDispose(stopWatch);
    }
    tryOnScopeDispose(pause);
    return {
        isActive,
        pause,
        resume
    };
}
function useInterval(interval = 1e3, options = {}) {
    const { controls: exposeControls = false, immediate = true, callback } = options;
    const counter = (0, _vueDemi.ref)(0);
    const update = ()=>counter.value += 1;
    const reset = ()=>{
        counter.value = 0;
    };
    const controls = useIntervalFn(callback ? ()=>{
        update();
        callback(counter.value);
    } : update, interval, {
        immediate
    });
    if (exposeControls) return {
        counter,
        reset,
        ...controls
    };
    else return counter;
}
function useLastChanged(source, options = {}) {
    var _a;
    const ms = (0, _vueDemi.ref)((_a = options.initialValue) != null ? _a : null);
    (0, _vueDemi.watch)(source, ()=>ms.value = timestamp(), options);
    return ms;
}
function useTimeoutFn(cb, interval, options = {}) {
    const { immediate = true } = options;
    const isPending = (0, _vueDemi.ref)(false);
    let timer = null;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function stop() {
        isPending.value = false;
        clear();
    }
    function start(...args) {
        clear();
        isPending.value = true;
        timer = setTimeout(()=>{
            isPending.value = false;
            timer = null;
            cb(...args);
        }, toValue(interval));
    }
    if (immediate) {
        isPending.value = true;
        if (isClient) start();
    }
    tryOnScopeDispose(stop);
    return {
        isPending: (0, _vueDemi.readonly)(isPending),
        start,
        stop
    };
}
function useTimeout(interval = 1e3, options = {}) {
    const { controls: exposeControls = false, callback } = options;
    const controls = useTimeoutFn(callback != null ? callback : noop, interval, options);
    const ready = (0, _vueDemi.computed)(()=>!controls.isPending.value);
    if (exposeControls) return {
        ready,
        ...controls
    };
    else return ready;
}
function useToNumber(value, options = {}) {
    const { method = "parseFloat", radix, nanToZero } = options;
    return (0, _vueDemi.computed)(()=>{
        let resolved = toValue(value);
        if (typeof resolved === "string") resolved = Number[method](resolved, radix);
        if (nanToZero && Number.isNaN(resolved)) resolved = 0;
        return resolved;
    });
}
function useToString(value) {
    return (0, _vueDemi.computed)(()=>`${toValue(value)}`);
}
function useToggle(initialValue = false, options = {}) {
    const { truthyValue = true, falsyValue = false } = options;
    const valueIsRef = (0, _vueDemi.isRef)(initialValue);
    const _value = (0, _vueDemi.ref)(initialValue);
    function toggle(value) {
        if (arguments.length) {
            _value.value = value;
            return _value.value;
        } else {
            const truthy = toValue(truthyValue);
            _value.value = _value.value === truthy ? toValue(falsyValue) : truthy;
            return _value.value;
        }
    }
    if (valueIsRef) return toggle;
    else return [
        _value,
        toggle
    ];
}
function watchArray(source, cb, options) {
    let oldList = (options == null ? void 0 : options.immediate) ? [] : [
        ...source instanceof Function ? source() : Array.isArray(source) ? source : toValue(source)
    ];
    return (0, _vueDemi.watch)(source, (newList, _, onCleanup)=>{
        const oldListRemains = Array.from({
            length: oldList.length
        });
        const added = [];
        for (const obj of newList){
            let found = false;
            for(let i = 0; i < oldList.length; i++)if (!oldListRemains[i] && obj === oldList[i]) {
                oldListRemains[i] = true;
                found = true;
                break;
            }
            if (!found) added.push(obj);
        }
        const removed = oldList.filter((_2, i)=>!oldListRemains[i]);
        cb(newList, oldList, added, removed, onCleanup);
        oldList = [
            ...newList
        ];
    }, options);
}
function watchAtMost(source, cb, options) {
    const { count, ...watchOptions } = options;
    const current = (0, _vueDemi.ref)(0);
    const stop = watchWithFilter(source, (...args)=>{
        current.value += 1;
        if (current.value >= toValue(count)) (0, _vueDemi.nextTick)(()=>stop());
        cb(...args);
    }, watchOptions);
    return {
        count: current,
        stop
    };
}
function watchDebounced(source, cb, options = {}) {
    const { debounce = 0, maxWait, ...watchOptions } = options;
    return watchWithFilter(source, cb, {
        ...watchOptions,
        eventFilter: debounceFilter(debounce, {
            maxWait
        })
    });
}
function watchDeep(source, cb, options) {
    return (0, _vueDemi.watch)(source, cb, {
        ...options,
        deep: true
    });
}
function watchIgnorable(source, cb, options = {}) {
    const { eventFilter = bypassFilter, ...watchOptions } = options;
    const filteredCb = createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === "sync") {
        const ignore = (0, _vueDemi.ref)(false);
        ignorePrevAsyncUpdates = ()=>{};
        ignoreUpdates = (updater)=>{
            ignore.value = true;
            updater();
            ignore.value = false;
        };
        stop = (0, _vueDemi.watch)(source, (...args)=>{
            if (!ignore.value) filteredCb(...args);
        }, watchOptions);
    } else {
        const disposables = [];
        const ignoreCounter = (0, _vueDemi.ref)(0);
        const syncCounter = (0, _vueDemi.ref)(0);
        ignorePrevAsyncUpdates = ()=>{
            ignoreCounter.value = syncCounter.value;
        };
        disposables.push((0, _vueDemi.watch)(source, ()=>{
            syncCounter.value++;
        }, {
            ...watchOptions,
            flush: "sync"
        }));
        ignoreUpdates = (updater)=>{
            const syncCounterPrev = syncCounter.value;
            updater();
            ignoreCounter.value += syncCounter.value - syncCounterPrev;
        };
        disposables.push((0, _vueDemi.watch)(source, (...args)=>{
            const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
            ignoreCounter.value = 0;
            syncCounter.value = 0;
            if (ignore) return;
            filteredCb(...args);
        }, watchOptions));
        stop = ()=>{
            disposables.forEach((fn)=>fn());
        };
    }
    return {
        stop,
        ignoreUpdates,
        ignorePrevAsyncUpdates
    };
}
function watchImmediate(source, cb, options) {
    return (0, _vueDemi.watch)(source, cb, {
        ...options,
        immediate: true
    });
}
function watchOnce(source, cb, options) {
    const stop = (0, _vueDemi.watch)(source, (...args)=>{
        (0, _vueDemi.nextTick)(()=>stop());
        return cb(...args);
    }, options);
}
function watchThrottled(source, cb, options = {}) {
    const { throttle = 0, trailing = true, leading = true, ...watchOptions } = options;
    return watchWithFilter(source, cb, {
        ...watchOptions,
        eventFilter: throttleFilter(throttle, trailing, leading)
    });
}
function watchTriggerable(source, cb, options = {}) {
    let cleanupFn;
    function onEffect() {
        if (!cleanupFn) return;
        const fn = cleanupFn;
        cleanupFn = void 0;
        fn();
    }
    function onCleanup(callback) {
        cleanupFn = callback;
    }
    const _cb = (value, oldValue)=>{
        onEffect();
        return cb(value, oldValue, onCleanup);
    };
    const res = watchIgnorable(source, _cb, options);
    const { ignoreUpdates } = res;
    const trigger = ()=>{
        let res2;
        ignoreUpdates(()=>{
            res2 = _cb(getWatchSources(source), getOldValue(source));
        });
        return res2;
    };
    return {
        ...res,
        trigger
    };
}
function getWatchSources(sources) {
    if ((0, _vueDemi.isReactive)(sources)) return sources;
    if (Array.isArray(sources)) return sources.map((item)=>toValue(item));
    return toValue(sources);
}
function getOldValue(source) {
    return Array.isArray(source) ? source.map(()=>void 0) : void 0;
}
function whenever(source, cb, options) {
    return (0, _vueDemi.watch)(source, (v, ov, onInvalidate)=>{
        if (v) cb(v, ov, onInvalidate);
    }, options);
}

},{"vue-demi":"fRyDa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDJG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
var _9F81225480307363D8046Ea484DJpg = require("../assets/images/9f812254803073.63d8046ea484d.jpg");
var _9F81225480307363D8046Ea484DJpgDefault = parcelHelpers.interopDefault(_9F81225480307363D8046Ea484DJpg);
const _hoisted_1 = {
    class: "main-banner min-h-[100vh] flex items-center justify-center pt-[120px] py-12 md:py-3"
};
const _hoisted_2 = {
    class: "blur-[2px] h-full w-full absolute flex items-center justify-center"
};
const _hoisted_3 = {
    class: "text-[6rem] font-ops opacity-50"
};
const _hoisted_4 = {
    class: "max-w-[1200px] w-full z-10 mx-auto flex flex-wrap items-center p-3 md:p-0"
};
const _hoisted_5 = {
    class: "w-full"
};
const _hoisted_6 = {
    class: "text-4xl font-ops"
};
const _hoisted_7 = {
    class: "block"
};
const _hoisted_8 = /*#__PURE__*/ (0, _vue.createElementVNode)("span", {
    class: "text-xl"
}, "A full-stack web and Android developer.", -1 /* HOISTED */ );
const _hoisted_9 = /*#__PURE__*/ (0, _vue.createElementVNode)("article", {
    class: "md:flex-1 order-3 md:order-2 w-full py-10 gap-4 md:p-5 md:ps-0 max-w-lg"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("p", null, "I specialize in creating seamless digital experiences by combining cutting-edge technologies with elegant design. With a keen eye for detail and a love for coding, I bring your ideas to life.")
], -1 /* HOISTED */ );
const _hoisted_10 = /*#__PURE__*/ (0, _vue.createElementVNode)("figure", {
    class: "md:flex-1 order-2 md:order-last w-full mt-5 text-right"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("img", {
        class: "w-36 h-36 inline-block rounded-full",
        src: (0, _9F81225480307363D8046Ea484DJpgDefault.default),
        alt: "Profile Picture"
    }),
    /*#__PURE__*/ (0, _vue.createElementVNode)("figcaption", {
        class: "font-ops"
    }, "ilham b")
], -1 /* HOISTED */ );
const _hoisted_11 = {
    class: "w-full max-w-[1200px] min-h-[100vh] mx-auto px-3 md:p-0",
    ref: "target"
};
const _hoisted_12 = {
    class: "mb-5"
};
const _hoisted_13 = /*#__PURE__*/ (0, _vue.createElementVNode)("h2", {
    class: "text-2xl font-bold"
}, "What I Do?", -1 /* HOISTED */ );
const _hoisted_14 = [
    _hoisted_13
];
const _hoisted_15 = /*#__PURE__*/ (0, _vue.createStaticVNode)('<article><h3 class="text-xl">Web Development</h3><p class="mb-5 p-3">Crafting responsive and user-friendly websites is my forte. From sleek landing pages to complex web applications, I thrive on turning your concepts into reality. My expertise includes HTML, CSS, JavaScript, and a range of modern web frameworks.</p><h3 class="text-xl">Android Development</h3><p class="mb-5 p-3">As an Android enthusiast, I build native Android applications that stand out in the crowded app marketplace. Whether it&#39;s a utility app, e-commerce platform, or a unique idea, I develop intuitive and high-performance Android apps.</p><h3 class="text-xl">Technologies I Work With</h3><p>\uD83D\uDEE0️ My toolkit includes a wide array of technologies, such as:</p><table class="border-collapse border border-slate-500"><tbody><tr><th class="border border-slate-500">Front-End</th><td class="border border-slate-500">HTML5, CSS3, JavaScript, React, Angular, Vue.js</td></tr><tr><th class="border border-slate-500">Back-End</th><td class="border border-slate-500">Node.js, Python, Ruby on Rails, PHP</td></tr><tr><th class="border border-slate-500">Databases</th><td class="border border-slate-500">MySQL, MongoDB, PostgreSQL</td></tr><tr><th class="border border-slate-500">Mobile Development</th><td class="border border-slate-500">Java, Kotlin, Android Studio</td></tr><tr><th class="border border-slate-500">Version Control</th><td class="border border-slate-500">Git, GitHub, Bitbucket</td></tr><tr><th class="border border-slate-500">Deployment</th><td class="border border-slate-500">AWS, Heroku, Firebase</td></tr><tr><th class="border border-slate-500">Responsive Design</th><td class="border border-slate-500">Bootstrap, Material-UI, Tailwind</td></tr></tbody></table></article>', 1);
const _hoisted_16 = /*#__PURE__*/ (0, _vue.createStaticVNode)('<section><header><h2 class="text-2xl font-bold">My Approach</h2></header><article><p>\uD83D\uDD28 I believe in crafting code that is not just functional but also maintainable and scalable. My development process is collaborative, focusing on clear communication with clients to ensure that your vision is realized to perfection.</p></article></section><section><header><h2 class="text-2xl font-bold">Portfolio Highlights</h2></header><article><p>Explore some of my recent projects to get a taste of what I can create:</p></article></section><section><header><h2>Let&#39;s Collaborate</h2></header><article><p> I&#39;m always excited to take on new challenges and work with clients who are as passionate about their ideas as I am about coding. If you have a project in mind or just want to chat, feel free to reach out. Together, we can build something amazing! </p></article></section>', 3);
const _hoisted_19 = /*#__PURE__*/ (0, _vue.createElementVNode)("h3", null, "Get in Touch", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createElementVNode)("section", _hoisted_1, [
            (0, _vue.createElementVNode)("div", _hoisted_2, [
                (0, _vue.createElementVNode)("span", _hoisted_3, (0, _vue.toDisplayString)(_ctx.define.siteName), 1 /* TEXT */ )
            ]),
            (0, _vue.createElementVNode)("div", _hoisted_4, [
                (0, _vue.createElementVNode)("header", _hoisted_5, [
                    (0, _vue.createElementVNode)("h2", _hoisted_6, [
                        (0, _vue.createElementVNode)("span", _hoisted_7, "Hello, i'am " + (0, _vue.toDisplayString)(_ctx.define.name), 1 /* TEXT */ ),
                        (0, _vue.createTextVNode)(),
                        _hoisted_8
                    ])
                ]),
                _hoisted_9,
                _hoisted_10
            ])
        ]),
        (0, _vue.createElementVNode)("section", _hoisted_11, [
            (0, _vue.withDirectives)(((0, _vue.openBlock)(), (0, _vue.createElementBlock)("header", _hoisted_12, _hoisted_14)), [
                [
                    $setup["vElementVisibility"],
                    [
                        $setup.onElementVisibility,
                        {
                            scrollTarget: $setup.target
                        }
                    ]
                ]
            ]),
            _hoisted_15
        ], 512 /* NEED_PATCH */ ),
        _hoisted_16,
        (0, _vue.createElementVNode)("footer", null, [
            _hoisted_19,
            (0, _vue.createElementVNode)("p", null, " \uD83D\uDCE7 Email: " + (0, _vue.toDisplayString)(_ctx.define.contact.email) + " \uD83D\uDCF1 LinkedIn: " + (0, _vue.toDisplayString)(_ctx.define.contact.linkedin) + " \uD83D\uDC26 GitHub: " + (0, _vue.toDisplayString)(_ctx.define.contact.github) + " \uD83D\uDCF7 Instagram: [Your Instagram Handle]", 1 /* TEXT */ )
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("e5ec61-hmr", render);
});

},{"vue":"gzxs9","../assets/images/9f812254803073.63d8046ea484d.jpg":"hO9jJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hO9jJ":[function(require,module,exports) {
module.exports = require("58eeb6a66837cf3d").getBundleURL("6o2dz") + "9f812254803073.63d8046ea484d.7913740b.jpg" + "?" + Date.now();

},{"58eeb6a66837cf3d":"lgJ39"}],"8UkwH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bcbhH"], null, "parcelRequire8714")

//# sourceMappingURL=Home.09cfde9d.js.map
