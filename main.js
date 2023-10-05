/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./luxuriousscript-regular-webfont.woff2 */ "./src/luxuriousscript-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./luxuriousscript-regular-webfont.woff */ "./src/luxuriousscript-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./tangerine-regular-webfont.woff2 */ "./src/tangerine-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./tangerine-regular-webfont.woff */ "./src/tangerine-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "luxurious";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "tangerine";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: normal;
  font-style: normal;
}

h1,
p {
  margin: 0;
  padding: 0;
}

body {
  --pink: #e33e38;
  font-family: "tangerine", Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8d7d7;
}

.content {
  margin: 20px auto;
  padding: 20px;
  border-radius: 25px;
  border: 10px solid lightcoral;
  max-width: 800px;
  text-align: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

.navBar {
  display: flex;
  position: relative;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
  height: 40px;
}

.navButton {
  width: 100px;
  height: 35px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: lightcoral;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 0 2px black;
  transition: all 0.1s ease-in-out;
}

.navButton:hover {
  font-size: 16px;
  border: 3px solid white;
  box-shadow: 0 0 15px red;
  width: 105px;
  height: 40px;
}

.selected {
  position: relative;
  color: black;
  background-color: white;
}

.tea-pot {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-25deg);
}

.title {
  font-size: 70px;
  margin: 25px 0;
  color: var(--pink);
  font-weight: bolder;
  -webkit-text-stroke: 1px rgb(56, 43, 43);
  letter-spacing: 2.5px;
  transition: text-shadow 0.3s ease;
}

.title:hover {
  -webkit-text-stroke: 1px white;
  text-shadow: 0 0 5px red;
}

.sub-hero {
  color: var(--pink);
  font-size: 40px;
  -webkit-text-stroke: 0.3px rgb(32, 31, 31);
  transition: text-shadow 0.3s ease;
}

.intro-container {
  font-size: 34px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "tangerine";
  font-weight: 500;
  border-radius: 15px;
  background-color: rgba(255, 182, 193, 0.645);
}
/* menu-container>menuItem*3>img+title */
.menu-container {
  font-size: 34px;
  padding: 30px 10px;
  display: flex;
  gap: 20px;
  font-family: "tangerine";
  font-weight: 500;
  border-radius: 15px;
  background-color: rgba(255, 182, 193, 0.645);
}

.menu-item {
  display: flex;
  position: relative;
  width: min-content;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px inset var(--pink);
  background-color: rgba(255, 255, 255, 0.631);
  transition: all 0.2s ease-in-out;
}

.menu-item:hover {
  background-color: white;
  /* box-shadow: 0 0 20px lightcoral; */
  transform: translateY(-10px);
}

.menu-item:hover > * {
  -webkit-text-stroke: 1px black;
  box-shadow: 0 0 5px red;
}

.menu-item:hover p {
  box-shadow: none;
}

.menu-item-img {
  border-radius: 13px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 170px;
  height: 120px;
}

.menu-item-title {
  color: var(--pink);
  font-weight: bolder;
  letter-spacing: 2.5px;
  font-size: 30px;
  -webkit-text-stroke: 1px black;
  transition: text-shadow 0.3s ease;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.menu-item:hover .menu-item-title {
  -webkit-text-stroke: 0.5px white;
}

.menu-item-price {
  color: rgba(255, 255, 255, 0.752);
  -webkit-text-stroke: 0.5px black;
  padding: 0 5px;
  font-weight: bolder;
  transition: text-shadow 0.3s ease;
  position: absolute;
  top: 97px;
  right: -13%;
  background-color: rgba(240, 128, 128, 0.54);
  border-radius: 15px;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.menu-item-caffeine {
  position: absolute;
  height: 70px;
  display: flex;
  flex-direction: column-reverse;
  top: 75px;
  left: 15%;
  /* background-color: rgba(240, 128, 128, 0.54); */
  border-radius: 15px;
  transform: translate(-50%, -50%);
}

.menu-item:hover .menu-item-caffeine {
  box-shadow: none;
}

.menu-item-caffeine-cup {
  --size: 40px;
  max-width: var(--size);
  max-height: var(--size);
  transition: all 0.2s ease;
}

.menu-item:hover .menu-item-caffeine-cup {
  --size: 42px;
  max-width: var(--size);
  max-height: var(--size);
}

.menu-item-info {
  display: flex;
  font-size: 15px;
  height: 200px;
  align-items: center;
  text-align: center;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 25px;
}

.menu-item:hover > .menu-item-info {
  -webkit-text-stroke: 0;
  box-shadow: 0 0 5px red;
}

.menu-item-ingredients {
  align-self: center;
  margin-top: auto;
  height: 30px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: lightcoral;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.menu-item-ingredients:hover {
  font-size: 16px;
  transform: translateY(-5px);
  box-shadow: 0 0 5px red;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"luxurious\";\n  src: url(\"./luxuriousscript-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./luxuriousscript-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"tangerine\";\n  src: url(\"./tangerine-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./tangerine-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1,\np {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --pink: #e33e38;\n  font-family: \"tangerine\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f8d7d7;\n}\n\n.content {\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 25px;\n  border: 10px solid lightcoral;\n  max-width: 800px;\n  text-align: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.navBar {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 20px;\n  height: 40px;\n}\n\n.navButton {\n  width: 100px;\n  height: 35px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  box-shadow: 0 0 2px black;\n  transition: all 0.1s ease-in-out;\n}\n\n.navButton:hover {\n  font-size: 16px;\n  border: 3px solid white;\n  box-shadow: 0 0 15px red;\n  width: 105px;\n  height: 40px;\n}\n\n.selected {\n  position: relative;\n  color: black;\n  background-color: white;\n}\n\n.tea-pot {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-25deg);\n}\n\n.title {\n  font-size: 70px;\n  margin: 25px 0;\n  color: var(--pink);\n  font-weight: bolder;\n  -webkit-text-stroke: 1px rgb(56, 43, 43);\n  letter-spacing: 2.5px;\n  transition: text-shadow 0.3s ease;\n}\n\n.title:hover {\n  -webkit-text-stroke: 1px white;\n  text-shadow: 0 0 5px red;\n}\n\n.sub-hero {\n  color: var(--pink);\n  font-size: 40px;\n  -webkit-text-stroke: 0.3px rgb(32, 31, 31);\n  transition: text-shadow 0.3s ease;\n}\n\n.intro-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n/* menu-container>menuItem*3>img+title */\n.menu-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n\n.menu-item {\n  display: flex;\n  position: relative;\n  width: min-content;\n  border-radius: 15px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n  transition: all 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  background-color: white;\n  /* box-shadow: 0 0 20px lightcoral; */\n  transform: translateY(-10px);\n}\n\n.menu-item:hover > * {\n  -webkit-text-stroke: 1px black;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item:hover p {\n  box-shadow: none;\n}\n\n.menu-item-img {\n  border-radius: 13px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 170px;\n  height: 120px;\n}\n\n.menu-item-title {\n  color: var(--pink);\n  font-weight: bolder;\n  letter-spacing: 2.5px;\n  font-size: 30px;\n  -webkit-text-stroke: 1px black;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n.menu-item:hover .menu-item-title {\n  -webkit-text-stroke: 0.5px white;\n}\n\n.menu-item-price {\n  color: rgba(255, 255, 255, 0.752);\n  -webkit-text-stroke: 0.5px black;\n  padding: 0 5px;\n  font-weight: bolder;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 97px;\n  right: -13%;\n  background-color: rgba(240, 128, 128, 0.54);\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n.menu-item-caffeine {\n  position: absolute;\n  height: 70px;\n  display: flex;\n  flex-direction: column-reverse;\n  top: 75px;\n  left: 15%;\n  /* background-color: rgba(240, 128, 128, 0.54); */\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n}\n\n.menu-item:hover .menu-item-caffeine {\n  box-shadow: none;\n}\n\n.menu-item-caffeine-cup {\n  --size: 40px;\n  max-width: var(--size);\n  max-height: var(--size);\n  transition: all 0.2s ease;\n}\n\n.menu-item:hover .menu-item-caffeine-cup {\n  --size: 42px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.menu-item-info {\n  display: flex;\n  font-size: 15px;\n  height: 200px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-size: 25px;\n}\n\n.menu-item:hover > .menu-item-info {\n  -webkit-text-stroke: 0;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item-ingredients {\n  align-self: center;\n  margin-top: auto;\n  height: 30px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n\n.menu-item-ingredients:hover {\n  font-size: 16px;\n  transform: translateY(-5px);\n  box-shadow: 0 0 5px red;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactPage)
/* harmony export */ });
function loadContactPage(contentDiv) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const Items = [];
  srcImages = ["./black_tea.jpeg", "./green_tea.jpeg", "./herbal_tea.jpeg"];

  for (let i = 0; i < 3; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-img");
    menuImg.src = srcImages[i];
    menuImg.alt = srcImages[i];

    const fileName = srcImages[i].split("/").pop(); // Get the file name with extension
    const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join("."); // Remove the extension

    const menuTitle = document.createElement("p");
    menuTitle.innerText = fileNameWithoutExtension;
    menuTitle.classList.add("menu-title");

    menuItems[i] = document.createElement("div");
    menuItems[i].classList.add("menu-item");

    menuItems[i].appendChild(img);
    menuItems[i].appendChild(menuTitle);
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuContainer.append(menuItems[i]);
  }
  contentDiv.appendChild(menuContainer);
}


/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadHomePage(contentDiv) {
  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const restaurantIntro = [];
  for (let i = 0; i < 3; i++) {
    restaurantIntro[i] = document.createElement("p");
  }
  restaurantIntro[0].classList.add("sub-hero");
  restaurantIntro[0].innerText =
    "Bosphorus Brews: Where Cultures Unite in a Cup of Tea";
  restaurantIntro[1].innerText =
    "At Bosphorus Brews, our passion for tea knows no borders. We believe that tea is not just a beverage; it's a journey that transcends cultures and brings people together. Our teahouse is a place where tea enthusiasts from all corners of the world can come to savor the rich tapestry of flavors and traditions that tea has to offer.";
  restaurantIntro[2].innerText =
    "Our commitment to serving teas from all cultures has made us a beloved destination for tea lovers and travelers alike. With a carefully curated selection of teas sourced from various regions, we invite you to embark on a global tea-tasting adventure without ever leaving your seat.";

  for (let i = 0; i < 3; i++) {
    introContainer.append(restaurantIntro[i]);
  }
  contentDiv.appendChild(introContainer);
}


/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _black_tea_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./black_tea.jpeg */ "./src/black_tea.jpeg");
/* harmony import */ var _green_tea_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./green_tea.jpeg */ "./src/green_tea.jpeg");
/* harmony import */ var _herbal_tea_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./herbal_tea.jpeg */ "./src/herbal_tea.jpeg");
/* harmony import */ var _teacup_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacup.png */ "./src/teacup.png");





function loadMenuPage(contentDiv) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  //teaType, Origin, Description, Ingredients, caffeine level, Price
  const menuItems = [];
  const teaOptions = [
    {
      src: _black_tea_jpeg__WEBPACK_IMPORTED_MODULE_0__,
      title: "Black Tea",
      price: "$5.99",
      origin: "Assam, India",
      description: "A rich and bold black tea with a robust flavor.",
      ingredients: "100% Black Tea Leaves",
      caffeine_level: 3,
    },
    {
      src: _green_tea_jpeg__WEBPACK_IMPORTED_MODULE_1__,
      title: "Green Tea",
      price: "$4.99",
      origin: "China",
      description: "A refreshing and mild green tea with a natural aroma.",
      ingredients: "100% Green Tea Leaves",
      caffeine_level: 1,
    },
    {
      src: _herbal_tea_jpeg__WEBPACK_IMPORTED_MODULE_2__,
      title: "Herbal Tea",
      price: "$6.49",
      origin: "Asia",
      description: "A soothing herbal blend with floral and herbal notes.",
      ingredients: "Chamomile, lavender, rose petals",
      caffeine_level: 0,
    },
  ];

  for (let i = 0; i < 3; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-item-img");
    menuImg.src = teaOptions[i].src;
    menuImg.alt = teaOptions[i].title;

    const fileName = teaOptions[i].title;

    const menuTitle = document.createElement("p");
    menuTitle.innerText = fileName;
    menuTitle.classList.add("menu-item-title");

    //price, caffeine level, Origin, Description, Ingredients
    const menuPrice = document.createElement("p");
    menuPrice.innerText = teaOptions[i].price;
    menuPrice.classList.add("menu-item-price");
    //need to solve this psuedo class selector not working in JS anomaly!
    const caffeineLevelContainer = document.createElement("div");
    caffeineLevelContainer.classList.add("menu-item-caffeine");
    for (let j = 0; j < teaOptions[i].caffeine_level; j++) {
      const teaCup = document.createElement("img");
      teaCup.src = _teacup_png__WEBPACK_IMPORTED_MODULE_3__;
      teaCup.classList.add("menu-item-caffeine-cup");
      caffeineLevelContainer.appendChild(teaCup);
    }

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-item-info");

    const menuOrigin = document.createElement("p");
    menuOrigin.innerText = teaOptions[i].origin;
    const menuDescription = document.createElement("p");
    menuDescription.innerText = teaOptions[i].description;
    const menuIngredients = document.createElement("button");
    menuIngredients.innerText = `Ingredients`;
    menuIngredients.classList.add("menu-item-ingredients"); //need to add ingredients modal

    menuInfo.appendChild(menuOrigin);
    menuInfo.appendChild(menuDescription);
    menuInfo.appendChild(menuIngredients);

    menuItems[i] = document.createElement("div");
    menuItems[i].classList.add("menu-item");

    menuItems[i].appendChild(menuImg);
    menuItems[i].appendChild(menuTitle);
    menuItems[i].appendChild(menuPrice);
    menuItems[i].appendChild(caffeineLevelContainer);
    menuItems[i].appendChild(menuInfo);
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuContainer.append(menuItems[i]);
  }
  contentDiv.appendChild(menuContainer);
  createModal(contentDiv, teaOptions);
}

function createModal(teaOptions) {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  body.appendChild(modal);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modal.appendChild(modalContent);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  modalContent.appendChild(closeBtn);

  const modalTitle = document.createElement("h2");
  modalTitle.innerText = "Modal Title";
  modalContent.appendChild(modalTitle);

  const modalText = document.createElement("p");
  modalText.innerText = "This is a simple modal example.";
  modalContent.appendChild(modalText);

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  const btns = document.querySelectorAll(".menu-item-ingredients");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      openModal();
      closeBtn.addEventListener("click", closeModal);

      modalText.innerText = teaOptions[index].ingredients;
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    });
  });
}


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializePage: () => (/* binding */ initializePage)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _restaurantBg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantBg.jpg */ "./src/restaurantBg.jpg");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _teapot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teapot.png */ "./src/teapot.png");





function initializePage() {
  const body = document.querySelector("body");
  const contentDiv = document.getElementById("content");
  addStyles(body, contentDiv);

  loadTitle(contentDiv);
  initializeNavbar(contentDiv);
  navigation(contentDiv);
  (0,_homePage__WEBPACK_IMPORTED_MODULE_0__["default"])(contentDiv);
  return { body, contentDiv };
}

function addStyles(body, contentDiv) {
  body.classList.add("body");
  contentDiv.classList.add("content");
  contentDiv.style.backgroundImage = `url(${_restaurantBg_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
}

function loadTitle(contentDiv) {
  const restaurantName = document.createElement("h1");
  restaurantName.innerText = "Bosphorous Brews";
  restaurantName.classList.add("title");
  contentDiv.appendChild(restaurantName);
}

function initializeNavbar(contentDiv) {
  const navBar = document.createElement("div");
  navBar.classList.add("navBar");

  const navButtons = [];
  for (let i = 0; i < 3; i++) {
    navButtons[i] = document.createElement("button");
    navButtons[i].classList.add("navButton");
  }
  navButtons[0].innerHTML = "Home";
  navButtons[1].innerHTML = "Menu";
  navButtons[2].innerHTML = "Contact";

  for (let i = 0; i < 3; i++) {
    navBar.appendChild(navButtons[i]);
  }

  contentDiv.appendChild(navBar);
}

function navigation(contentDiv) {
  const btns = document.querySelectorAll(".navButton");
  const navBar = document.querySelector(".navBar");
  const teaPotImage = document.createElement("img");

  teaPotImage.src = _teapot_png__WEBPACK_IMPORTED_MODULE_3__;
  teaPotImage.alt = "Teapot";
  teaPotImage.className = "tea-pot";

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((otherBtn) => otherBtn.classList.remove("selected"));
      btn.classList.add("selected");

      //teapot positioning logic
      const btnRect = btn.getBoundingClientRect();
      const containerRect = navBar.getBoundingClientRect();
      const leftPosition = btnRect.right - containerRect.left - 30;
      const topPosition = btnRect.top - containerRect.top - 40;
      teaPotImage.style.left = leftPosition + "px";
      teaPotImage.style.top = topPosition + "px";

      navBar.appendChild(teaPotImage);
    });
  });
}


/***/ }),

/***/ "./src/black_tea.jpeg":
/*!****************************!*\
  !*** ./src/black_tea.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edf00c114b1c0a23fca0.jpeg";

/***/ }),

/***/ "./src/green_tea.jpeg":
/*!****************************!*\
  !*** ./src/green_tea.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c4cb3d491e22d193269.jpeg";

/***/ }),

/***/ "./src/herbal_tea.jpeg":
/*!*****************************!*\
  !*** ./src/herbal_tea.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62a9dec5f6513c5ded9c.jpeg";

/***/ }),

/***/ "./src/luxuriousscript-regular-webfont.woff":
/*!**************************************************!*\
  !*** ./src/luxuriousscript-regular-webfont.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6c87a8539a6b417e690.woff";

/***/ }),

/***/ "./src/luxuriousscript-regular-webfont.woff2":
/*!***************************************************!*\
  !*** ./src/luxuriousscript-regular-webfont.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef6acd5966e3ffd48117.woff2";

/***/ }),

/***/ "./src/restaurantBg.jpg":
/*!******************************!*\
  !*** ./src/restaurantBg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e4ae21c7bf6d6250327.jpg";

/***/ }),

/***/ "./src/tangerine-regular-webfont.woff":
/*!********************************************!*\
  !*** ./src/tangerine-regular-webfont.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff32815c60703c7ff8af.woff";

/***/ }),

/***/ "./src/tangerine-regular-webfont.woff2":
/*!*********************************************!*\
  !*** ./src/tangerine-regular-webfont.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d100043c1cb503581b3c.woff2";

/***/ }),

/***/ "./src/teacup.png":
/*!************************!*\
  !*** ./src/teacup.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b25bb643ea08c2d0ea5.png";

/***/ }),

/***/ "./src/teapot.png":
/*!************************!*\
  !*** ./src/teapot.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efb18601c2176e624630.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");





document.addEventListener("DOMContentLoaded", () => {
  const { body, contentDiv } = (0,_pageLoad__WEBPACK_IMPORTED_MODULE_3__.initializePage)();
  const btns = document.querySelectorAll(".navButton");
  const navBar = document.querySelector(".navBar");
  navigation(contentDiv, navBar, btns);
});

function navigation(contentDiv, navBar, btns) {
  const activationFunctions = [_homePage__WEBPACK_IMPORTED_MODULE_1__["default"], _menuPage__WEBPACK_IMPORTED_MODULE_2__["default"], _contactPage__WEBPACK_IMPORTED_MODULE_0__["default"]];

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      loadRefresher(contentDiv);
      activationFunctions[index](contentDiv);
    });
  });
  btns[1].click();
}

function loadRefresher(contentDiv) {
  const pageContent = contentDiv.lastChild;

  const regex = new RegExp("-container", "i");
  const hasMatchingClass = Array.from(pageContent.classList).some((className) =>
    regex.test(className)
  );

  if (pageContent && pageContent.tagName === "DIV" && hasMatchingClass) {
    contentDiv.removeChild(pageContent);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxL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VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ047QUFDQTtBQUNNOztBQUU1QztBQUNBLFVBQVUsbUJBQW1CLEVBQUUseURBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLCtCQUErQixpREFBWSxFQUFFLGlEQUFZLEVBQUUsb0RBQWU7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImx1eHVyaW91c1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRhbmdlcmluZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5oMSxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAtLXBpbms6ICNlMzNlMzg7XG4gIGZvbnQtZmFtaWx5OiBcInRhbmdlcmluZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2Q3O1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDEwcHggc29saWQgbGlnaHRjb3JhbDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5uYXZCYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5hdkJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdkJ1dHRvbjpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJlZDtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRlYS1wb3Qge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBtYXJnaW46IDI1cHggMDtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDU2LCA0MywgNDMpO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLnRpdGxlOmhvdmVyIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZWQ7XG59XG5cbi5zdWItaGVybyB7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweCByZ2IoMzIsIDMxLCAzMSk7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLmludHJvLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInRhbmdlcmluZVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcbn1cbi8qIG1lbnUtY29udGFpbmVyPm1lbnVJdGVtKjM+aW1nK3RpdGxlICovXG4ubWVudS1jb250YWluZXIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJ0YW5nZXJpbmVcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4MiwgMTkzLCAwLjY0NSk7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogYm94LXNoYWRvdzogMCAwIDIwcHggbGlnaHRjb3JhbDsgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciA+ICoge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHAge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudS1pdGVtLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLXRpdGxlIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggd2hpdGU7XG59XG5cbi5tZW51LWl0ZW0tcHJpY2Uge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Mik7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IGJsYWNrO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTdweDtcbiAgcmlnaHQ6IC0xMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWVudS1pdGVtLWNhZmZlaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgdG9wOiA3NXB4O1xuICBsZWZ0OiAxNSU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NCk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0tY2FmZmVpbmUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudS1pdGVtLWNhZmZlaW5lLWN1cCB7XG4gIC0tc2l6ZTogNDBweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZS1jdXAge1xuICAtLXNpemU6IDQycHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubWVudS1pdGVtLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciA+IC5tZW51LWl0ZW0taW5mbyB7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogMTUlIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCOzBEQUM4RDtFQUM5RCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEI7MERBQ3dE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QUNULGlEQUFpRDtFQUNqRCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJsdXh1cmlvdXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vbHV4dXJpb3Vzc2NyaXB0LXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2x1eHVyaW91c3NjcmlwdC1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInRhbmdlcmluZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi90YW5nZXJpbmUtcmVndWxhci13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXFxcIi4vdGFuZ2VyaW5lLXJlZ3VsYXItd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgLS1waW5rOiAjZTMzZTM4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2Q3O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm5hdkJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXZCdXR0b246aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZWQ7XFxuICB3aWR0aDogMTA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRlYS1wb3Qge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIG1hcmdpbjogMjVweCAwO1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCByZ2IoNTYsIDQzLCA0Myk7XFxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGVhc2U7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZWQ7XFxufVxcblxcbi5zdWItaGVybyB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweCByZ2IoMzIsIDMxLCAzMSk7XFxuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGVhc2U7XFxufVxcblxcbi5pbnRyby1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcInRhbmdlcmluZVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xcbn1cXG4vKiBtZW51LWNvbnRhaW5lcj5tZW51SXRlbSozPmltZyt0aXRsZSAqL1xcbi5tZW51LWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBpbnNldCB2YXIoLS1waW5rKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MzEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAvKiBib3gtc2hhZG93OiAwIDAgMjBweCBsaWdodGNvcmFsOyAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciA+ICoge1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZWQ7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgcCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS10aXRsZSB7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1wcmljZSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Mik7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCBibGFjaztcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOTdweDtcXG4gIHJpZ2h0OiAtMTMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tZW51LWl0ZW0tY2FmZmVpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHRvcDogNzVweDtcXG4gIGxlZnQ6IDE1JTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NCk7ICovXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNhZmZlaW5lLWN1cCB7XFxuICAtLXNpemU6IDQwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0tY2FmZmVpbmUtY3VwIHtcXG4gIC0tc2l6ZTogNDJweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyID4gLm1lbnUtaXRlbS1pbmZvIHtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDA7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbmdyZWRpZW50cyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNTAlO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZShjb250ZW50RGl2KSB7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBJdGVtcyA9IFtdO1xuICBzcmNJbWFnZXMgPSBbXCIuL2JsYWNrX3RlYS5qcGVnXCIsIFwiLi9ncmVlbl90ZWEuanBlZ1wiLCBcIi4vaGVyYmFsX3RlYS5qcGVnXCJdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIik7XG4gICAgbWVudUltZy5zcmMgPSBzcmNJbWFnZXNbaV07XG4gICAgbWVudUltZy5hbHQgPSBzcmNJbWFnZXNbaV07XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IHNyY0ltYWdlc1tpXS5zcGxpdChcIi9cIikucG9wKCk7IC8vIEdldCB0aGUgZmlsZSBuYW1lIHdpdGggZXh0ZW5zaW9uXG4gICAgY29uc3QgZmlsZU5hbWVXaXRob3V0RXh0ZW5zaW9uID0gZmlsZU5hbWUuc3BsaXQoXCIuXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiLlwiKTsgLy8gUmVtb3ZlIHRoZSBleHRlbnNpb25cblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSBmaWxlTmFtZVdpdGhvdXRFeHRlbnNpb247XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xuXG4gICAgbWVudUl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIG1lbnVJdGVtc1tpXS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIG1lbnVJdGVtc1tpXS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbXNbaV0pO1xuICB9XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudEludHJvID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgcmVzdGF1cmFudEludHJvW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIH1cbiAgcmVzdGF1cmFudEludHJvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdWItaGVyb1wiKTtcbiAgcmVzdGF1cmFudEludHJvWzBdLmlubmVyVGV4dCA9XG4gICAgXCJCb3NwaG9ydXMgQnJld3M6IFdoZXJlIEN1bHR1cmVzIFVuaXRlIGluIGEgQ3VwIG9mIFRlYVwiO1xuICByZXN0YXVyYW50SW50cm9bMV0uaW5uZXJUZXh0ID1cbiAgICBcIkF0IEJvc3Bob3J1cyBCcmV3cywgb3VyIHBhc3Npb24gZm9yIHRlYSBrbm93cyBubyBib3JkZXJzLiBXZSBiZWxpZXZlIHRoYXQgdGVhIGlzIG5vdCBqdXN0IGEgYmV2ZXJhZ2U7IGl0J3MgYSBqb3VybmV5IHRoYXQgdHJhbnNjZW5kcyBjdWx0dXJlcyBhbmQgYnJpbmdzIHBlb3BsZSB0b2dldGhlci4gT3VyIHRlYWhvdXNlIGlzIGEgcGxhY2Ugd2hlcmUgdGVhIGVudGh1c2lhc3RzIGZyb20gYWxsIGNvcm5lcnMgb2YgdGhlIHdvcmxkIGNhbiBjb21lIHRvIHNhdm9yIHRoZSByaWNoIHRhcGVzdHJ5IG9mIGZsYXZvcnMgYW5kIHRyYWRpdGlvbnMgdGhhdCB0ZWEgaGFzIHRvIG9mZmVyLlwiO1xuICByZXN0YXVyYW50SW50cm9bMl0uaW5uZXJUZXh0ID1cbiAgICBcIk91ciBjb21taXRtZW50IHRvIHNlcnZpbmcgdGVhcyBmcm9tIGFsbCBjdWx0dXJlcyBoYXMgbWFkZSB1cyBhIGJlbG92ZWQgZGVzdGluYXRpb24gZm9yIHRlYSBsb3ZlcnMgYW5kIHRyYXZlbGVycyBhbGlrZS4gV2l0aCBhIGNhcmVmdWxseSBjdXJhdGVkIHNlbGVjdGlvbiBvZiB0ZWFzIHNvdXJjZWQgZnJvbSB2YXJpb3VzIHJlZ2lvbnMsIHdlIGludml0ZSB5b3UgdG8gZW1iYXJrIG9uIGEgZ2xvYmFsIHRlYS10YXN0aW5nIGFkdmVudHVyZSB3aXRob3V0IGV2ZXIgbGVhdmluZyB5b3VyIHNlYXQuXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmQocmVzdGF1cmFudEludHJvW2ldKTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCBibGFja1RlYUltYWdlIGZyb20gXCIuL2JsYWNrX3RlYS5qcGVnXCI7XG5pbXBvcnQgZ3JlZW5UZWFJbWFnZSBmcm9tIFwiLi9ncmVlbl90ZWEuanBlZ1wiO1xuaW1wb3J0IGhlcmJhbFRlYUltYWdlIGZyb20gXCIuL2hlcmJhbF90ZWEuanBlZ1wiO1xuaW1wb3J0IHRlYWN1cCBmcm9tIFwiLi90ZWFjdXAucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51UGFnZShjb250ZW50RGl2KSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICAvL3RlYVR5cGUsIE9yaWdpbiwgRGVzY3JpcHRpb24sIEluZ3JlZGllbnRzLCBjYWZmZWluZSBsZXZlbCwgUHJpY2VcbiAgY29uc3QgbWVudUl0ZW1zID0gW107XG4gIGNvbnN0IHRlYU9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgc3JjOiBibGFja1RlYUltYWdlLFxuICAgICAgdGl0bGU6IFwiQmxhY2sgVGVhXCIsXG4gICAgICBwcmljZTogXCIkNS45OVwiLFxuICAgICAgb3JpZ2luOiBcIkFzc2FtLCBJbmRpYVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSByaWNoIGFuZCBib2xkIGJsYWNrIHRlYSB3aXRoIGEgcm9idXN0IGZsYXZvci5cIixcbiAgICAgIGluZ3JlZGllbnRzOiBcIjEwMCUgQmxhY2sgVGVhIExlYXZlc1wiLFxuICAgICAgY2FmZmVpbmVfbGV2ZWw6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IGdyZWVuVGVhSW1hZ2UsXG4gICAgICB0aXRsZTogXCJHcmVlbiBUZWFcIixcbiAgICAgIHByaWNlOiBcIiQ0Ljk5XCIsXG4gICAgICBvcmlnaW46IFwiQ2hpbmFcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcmVmcmVzaGluZyBhbmQgbWlsZCBncmVlbiB0ZWEgd2l0aCBhIG5hdHVyYWwgYXJvbWEuXCIsXG4gICAgICBpbmdyZWRpZW50czogXCIxMDAlIEdyZWVuIFRlYSBMZWF2ZXNcIixcbiAgICAgIGNhZmZlaW5lX2xldmVsOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBoZXJiYWxUZWFJbWFnZSxcbiAgICAgIHRpdGxlOiBcIkhlcmJhbCBUZWFcIixcbiAgICAgIHByaWNlOiBcIiQ2LjQ5XCIsXG4gICAgICBvcmlnaW46IFwiQXNpYVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBzb290aGluZyBoZXJiYWwgYmxlbmQgd2l0aCBmbG9yYWwgYW5kIGhlcmJhbCBub3Rlcy5cIixcbiAgICAgIGluZ3JlZGllbnRzOiBcIkNoYW1vbWlsZSwgbGF2ZW5kZXIsIHJvc2UgcGV0YWxzXCIsXG4gICAgICBjYWZmZWluZV9sZXZlbDogMCxcbiAgICB9LFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltZ1wiKTtcbiAgICBtZW51SW1nLnNyYyA9IHRlYU9wdGlvbnNbaV0uc3JjO1xuICAgIG1lbnVJbWcuYWx0ID0gdGVhT3B0aW9uc1tpXS50aXRsZTtcblxuICAgIGNvbnN0IGZpbGVOYW1lID0gdGVhT3B0aW9uc1tpXS50aXRsZTtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSBmaWxlTmFtZTtcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS10aXRsZVwiKTtcblxuICAgIC8vcHJpY2UsIGNhZmZlaW5lIGxldmVsLCBPcmlnaW4sIERlc2NyaXB0aW9uLCBJbmdyZWRpZW50c1xuICAgIGNvbnN0IG1lbnVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVQcmljZS5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2ldLnByaWNlO1xuICAgIG1lbnVQcmljZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXByaWNlXCIpO1xuICAgIC8vbmVlZCB0byBzb2x2ZSB0aGlzIHBzdWVkbyBjbGFzcyBzZWxlY3RvciBub3Qgd29ya2luZyBpbiBKUyBhbm9tYWx5IVxuICAgIGNvbnN0IGNhZmZlaW5lTGV2ZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhZmZlaW5lTGV2ZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jYWZmZWluZVwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRlYU9wdGlvbnNbaV0uY2FmZmVpbmVfbGV2ZWw7IGorKykge1xuICAgICAgY29uc3QgdGVhQ3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHRlYUN1cC5zcmMgPSB0ZWFjdXA7XG4gICAgICB0ZWFDdXAuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jYWZmZWluZS1jdXBcIik7XG4gICAgICBjYWZmZWluZUxldmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlYUN1cCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWVudUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJbmZvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0taW5mb1wiKTtcblxuICAgIGNvbnN0IG1lbnVPcmlnaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51T3JpZ2luLmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaV0ub3JpZ2luO1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2ldLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IG1lbnVJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUluZ3JlZGllbnRzLmlubmVyVGV4dCA9IGBJbmdyZWRpZW50c2A7XG4gICAgbWVudUluZ3JlZGllbnRzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0taW5ncmVkaWVudHNcIik7IC8vbmVlZCB0byBhZGQgaW5ncmVkaWVudHMgbW9kYWxcblxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVPcmlnaW4pO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudUluZ3JlZGllbnRzKTtcblxuICAgIG1lbnVJdGVtc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gICAgbWVudUl0ZW1zW2ldLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gICAgbWVudUl0ZW1zW2ldLmFwcGVuZENoaWxkKG1lbnVQcmljZSk7XG4gICAgbWVudUl0ZW1zW2ldLmFwcGVuZENoaWxkKGNhZmZlaW5lTGV2ZWxDb250YWluZXIpO1xuICAgIG1lbnVJdGVtc1tpXS5hcHBlbmRDaGlsZChtZW51SW5mbyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtc1tpXSk7XG4gIH1cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgY3JlYXRlTW9kYWwoY29udGVudERpdiwgdGVhT3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRlYU9wdGlvbnMpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIk1vZGFsIFRpdGxlXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcblxuICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9kYWxUZXh0LmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHNpbXBsZSBtb2RhbCBleGFtcGxlLlwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taW5ncmVkaWVudHNcIik7XG5cbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuTW9kYWwoKTtcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgICAgbW9kYWxUZXh0LmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaW5kZXhdLmluZ3JlZGllbnRzO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCByZXN0YXVyYW50QmcgZnJvbSBcIi4vcmVzdGF1cmFudEJnLmpwZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdGVhUG90SW1hZ2VTcmMgZnJvbSBcIi4vdGVhcG90LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgYWRkU3R5bGVzKGJvZHksIGNvbnRlbnREaXYpO1xuXG4gIGxvYWRUaXRsZShjb250ZW50RGl2KTtcbiAgaW5pdGlhbGl6ZU5hdmJhcihjb250ZW50RGl2KTtcbiAgbmF2aWdhdGlvbihjb250ZW50RGl2KTtcbiAgbG9hZEhvbWVQYWdlKGNvbnRlbnREaXYpO1xuICByZXR1cm4geyBib2R5LCBjb250ZW50RGl2IH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlcyhib2R5LCBjb250ZW50RGl2KSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlcIik7XG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3RhdXJhbnRCZ30pYDtcbn1cblxuZnVuY3Rpb24gbG9hZFRpdGxlKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IFwiQm9zcGhvcm91cyBCcmV3c1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTmF2YmFyKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgbmF2QnV0dG9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIG5hdkJ1dHRvbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5hdkJ1dHRvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcbiAgfVxuICBuYXZCdXR0b25zWzBdLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICBuYXZCdXR0b25zWzFdLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICBuYXZCdXR0b25zWzJdLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbaV0pO1xuICB9XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcbiAgY29uc3QgdGVhUG90SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHRlYVBvdEltYWdlLnNyYyA9IHRlYVBvdEltYWdlU3JjO1xuICB0ZWFQb3RJbWFnZS5hbHQgPSBcIlRlYXBvdFwiO1xuICB0ZWFQb3RJbWFnZS5jbGFzc05hbWUgPSBcInRlYS1wb3RcIjtcblxuICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChvdGhlckJ0bikgPT4gb3RoZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgIC8vdGVhcG90IHBvc2l0aW9uaW5nIGxvZ2ljXG4gICAgICBjb25zdCBidG5SZWN0ID0gYnRuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IG5hdkJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGxlZnRQb3NpdGlvbiA9IGJ0blJlY3QucmlnaHQgLSBjb250YWluZXJSZWN0LmxlZnQgLSAzMDtcbiAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gYnRuUmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCAtIDQwO1xuICAgICAgdGVhUG90SW1hZ2Uuc3R5bGUubGVmdCA9IGxlZnRQb3NpdGlvbiArIFwicHhcIjtcbiAgICAgIHRlYVBvdEltYWdlLnN0eWxlLnRvcCA9IHRvcFBvc2l0aW9uICsgXCJweFwiO1xuXG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGVhUG90SW1hZ2UpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSwgY29udGVudERpdiB9ID0gaW5pdGlhbGl6ZVBhZ2UoKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcbiAgbmF2aWdhdGlvbihjb250ZW50RGl2LCBuYXZCYXIsIGJ0bnMpO1xufSk7XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb24oY29udGVudERpdiwgbmF2QmFyLCBidG5zKSB7XG4gIGNvbnN0IGFjdGl2YXRpb25GdW5jdGlvbnMgPSBbbG9hZEhvbWVQYWdlLCBsb2FkTWVudVBhZ2UsIGxvYWRDb250YWN0UGFnZV07XG5cbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2FkUmVmcmVzaGVyKGNvbnRlbnREaXYpO1xuICAgICAgYWN0aXZhdGlvbkZ1bmN0aW9uc1tpbmRleF0oY29udGVudERpdik7XG4gICAgfSk7XG4gIH0pO1xuICBidG5zWzFdLmNsaWNrKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZWZyZXNoZXIoY29udGVudERpdikge1xuICBjb25zdCBwYWdlQ29udGVudCA9IGNvbnRlbnREaXYubGFzdENoaWxkO1xuXG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIi1jb250YWluZXJcIiwgXCJpXCIpO1xuICBjb25zdCBoYXNNYXRjaGluZ0NsYXNzID0gQXJyYXkuZnJvbShwYWdlQ29udGVudC5jbGFzc0xpc3QpLnNvbWUoKGNsYXNzTmFtZSkgPT5cbiAgICByZWdleC50ZXN0KGNsYXNzTmFtZSlcbiAgKTtcblxuICBpZiAocGFnZUNvbnRlbnQgJiYgcGFnZUNvbnRlbnQudGFnTmFtZSA9PT0gXCJESVZcIiAmJiBoYXNNYXRjaGluZ0NsYXNzKSB7XG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChwYWdlQ29udGVudCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==