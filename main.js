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
.menu-container {
  font-size: 34px;
  padding: 30px 10px;
  display: flex;
  flex-wrap: wrap;
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
  height: 70px;
  width: 70%;
  letter-spacing: 2.5px;
  font-size: 27px;
  -webkit-text-stroke: 1px black;
  transition: text-shadow 0.3s ease;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.menu-item-info * {
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.259);
  transition: all 0.3s ease-in-out;
}

.menu-item:hover .menu-item-info * {
  border-bottom: 1px solid rgba(0, 0, 0, 0.397);
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
  left: 35%;
  top: 25%;
  border-radius: 15px;
  width: 25%;
  height: auto;
  background-color: rgba(240, 128, 128, 0.597);
}

.modal-content {
  background-color: #fefefe;
  font-size: 25px;
  border-radius: 15px;
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

/* contactPage styling  starts here*/
.contact-container {
  font-size: 34px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: "tangerine";
  font-weight: 500;
  border-radius: 15px;
  background-color: rgba(255, 182, 193, 0.645);
}

.contact-item {
  display: flex;
  width: 80%;
  height: 250px;
  border-radius: 15px;
  gap: 50px;
  padding: 20px;
  align-items: center;
  border: 2px inset var(--pink);
  background-color: rgba(255, 255, 255, 0.631);
}

/* .profile {
} */

.details {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
}

.contact-img {
  --size: 140px;
  border-radius: 50%;
  border: 3px solid lightcoral;
  width: var(--size);
  height: var(--size);
}

.contact-name {
  color: var(--pink);
  font-size: 40px;
  font-weight: bolder;
  letter-spacing: 2.5px;
  -webkit-text-stroke: 1px black;
}

.contact-details {
  background-image: linear-gradient(to right, transparent 30%, lightcoral 70%);
  background-position: 0 bottom;
  background-size: 100% 2px;
  background-repeat: no-repeat;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"luxurious\";\n  src: url(\"./luxuriousscript-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./luxuriousscript-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"tangerine\";\n  src: url(\"./tangerine-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./tangerine-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1,\np {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --pink: #e33e38;\n  font-family: \"tangerine\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #f8d7d7;\n}\n\n.content {\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 25px;\n  border: 10px solid lightcoral;\n  max-width: 800px;\n  text-align: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.navBar {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 20px;\n  height: 40px;\n}\n\n.navButton {\n  width: 100px;\n  height: 35px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  box-shadow: 0 0 2px black;\n  transition: all 0.1s ease-in-out;\n}\n\n.navButton:hover {\n  font-size: 16px;\n  border: 3px solid white;\n  box-shadow: 0 0 15px red;\n  width: 105px;\n  height: 40px;\n}\n\n.selected {\n  position: relative;\n  color: black;\n  background-color: white;\n}\n\n.tea-pot {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-25deg);\n}\n\n.title {\n  font-size: 70px;\n  margin: 25px 0;\n  color: var(--pink);\n  font-weight: bolder;\n  -webkit-text-stroke: 1px rgb(56, 43, 43);\n  letter-spacing: 2.5px;\n  transition: text-shadow 0.3s ease;\n}\n\n.title:hover {\n  -webkit-text-stroke: 1px white;\n  text-shadow: 0 0 5px red;\n}\n\n.sub-hero {\n  color: var(--pink);\n  font-size: 40px;\n  -webkit-text-stroke: 0.3px rgb(32, 31, 31);\n  transition: text-shadow 0.3s ease;\n}\n\n.intro-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n.menu-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n\n.menu-item {\n  display: flex;\n  position: relative;\n  width: min-content;\n  border-radius: 15px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n  transition: all 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  background-color: white;\n  /* box-shadow: 0 0 20px lightcoral; */\n  transform: translateY(-10px);\n}\n\n.menu-item:hover > * {\n  -webkit-text-stroke: 1px black;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item:hover p {\n  box-shadow: none;\n}\n\n.menu-item-img {\n  border-radius: 13px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 170px;\n  height: 120px;\n}\n\n.menu-item-title {\n  color: var(--pink);\n  font-weight: bolder;\n  height: 70px;\n  width: 70%;\n  letter-spacing: 2.5px;\n  font-size: 27px;\n  -webkit-text-stroke: 1px black;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 12%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.menu-item:hover .menu-item-title {\n  -webkit-text-stroke: 0.5px white;\n}\n\n.menu-item-price {\n  color: rgba(255, 255, 255, 0.752);\n  -webkit-text-stroke: 0.5px black;\n  padding: 0 5px;\n  font-weight: bolder;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 97px;\n  right: -13%;\n  background-color: rgba(240, 128, 128, 0.54);\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n.menu-item-caffeine {\n  position: absolute;\n  height: 70px;\n  display: flex;\n  flex-direction: column-reverse;\n  top: 75px;\n  left: 15%;\n  /* background-color: rgba(240, 128, 128, 0.54); */\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n}\n\n.menu-item:hover .menu-item-caffeine {\n  box-shadow: none;\n}\n\n.menu-item-caffeine-cup {\n  --size: 40px;\n  max-width: var(--size);\n  max-height: var(--size);\n  transition: all 0.2s ease;\n}\n\n.menu-item:hover .menu-item-caffeine-cup {\n  --size: 42px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.menu-item-info {\n  display: flex;\n  font-size: 15px;\n  height: 200px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-size: 25px;\n}\n\n.menu-item:hover > .menu-item-info {\n  -webkit-text-stroke: 0;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item-info * {\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.259);\n  transition: all 0.3s ease-in-out;\n}\n\n.menu-item:hover .menu-item-info * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.397);\n}\n\n.menu-item-ingredients {\n  align-self: center;\n  margin-top: auto;\n  height: 30px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n\n.menu-item-ingredients:hover {\n  font-size: 16px;\n  transform: translateY(-5px);\n  box-shadow: 0 0 5px red;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 35%;\n  top: 25%;\n  border-radius: 15px;\n  width: 25%;\n  height: auto;\n  background-color: rgba(240, 128, 128, 0.597);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  font-size: 25px;\n  border-radius: 15px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: black;\n}\n\n/* contactPage styling  starts here*/\n.contact-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n\n.contact-item {\n  display: flex;\n  width: 80%;\n  height: 250px;\n  border-radius: 15px;\n  gap: 50px;\n  padding: 20px;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n}\n\n/* .profile {\n} */\n\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 20px;\n}\n\n.contact-img {\n  --size: 140px;\n  border-radius: 50%;\n  border: 3px solid lightcoral;\n  width: var(--size);\n  height: var(--size);\n}\n\n.contact-name {\n  color: var(--pink);\n  font-size: 40px;\n  font-weight: bolder;\n  letter-spacing: 2.5px;\n  -webkit-text-stroke: 1px black;\n}\n\n.contact-details {\n  background-image: linear-gradient(to right, transparent 30%, lightcoral 70%);\n  background-position: 0 bottom;\n  background-size: 100% 2px;\n  background-repeat: no-repeat;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _teaProfile1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teaProfile1.jpeg */ "./src/teaProfile1.jpeg");
/* harmony import */ var _teaProfile2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teaProfile2.jpeg */ "./src/teaProfile2.jpeg");
/* harmony import */ var _teaProfile3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teaProfile3.jpeg */ "./src/teaProfile3.jpeg");




const contacts = [
  {
    name: "Ahmet Yilmaz",
    position: "Owner",
    number: "+90 123 456 7890",
    email: "ahmet@example.com",
    profile: _teaProfile1_jpeg__WEBPACK_IMPORTED_MODULE_0__,
  },
  {
    name: "Chehangir Demir",
    position: "Tea Specialist",
    number: "+90 234 567 8901",
    email: "chehangir@example.com",
    profile: _teaProfile2_jpeg__WEBPACK_IMPORTED_MODULE_1__,
  },
  {
    name: "Mehmet Arslan",
    position: "Manager",
    number: "+90 345 678 9012",
    email: "mehmet@example.com",
    profile: _teaProfile3_jpeg__WEBPACK_IMPORTED_MODULE_2__,
  },
];

const teaShopDetails = {
  name: "Bosphorous Brews",
  address: "123 Tea Street",
  location: "Istanbul, Turkey",
  landline: "+90 123 456 7890",
  hoursOfOperation: {
    Monday: "9:00 AM - 6:00 PM",
    Tuesday: "9:00 AM - 6:00 PM",
    Wednesday: "9:00 AM - 6:00 PM",
    Thursday: "9:00 AM - 6:00 PM",
    Friday: "9:00 AM - 6:00 PM",
    Saturday: "10:00 AM - 4:00 PM",
    Sunday: "Closed",
  },
};

function loadContactPage(contentDiv) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactItems = [];
  //div.contact-container>div.shopInfo+div.contact-items*n>--
  //-- (img.profile+p.name+p.position)+(p.number+p.email)
  //profile, name, position, number , email
  for (let i = 0; i < contacts.length; i++) {
    const profile = document.createElement("div");
    profile.classList.add("profile");

    const contactImg = document.createElement("img");
    contactImg.classList.add("contact-img");
    contactImg.src = contacts[i].profile;
    contactImg.alt = `Picture of ${contacts[i].position}`;

    const contactName = document.createElement("p");
    contactName.innerText = contacts[i].name;
    contactName.classList.add("contact-name");

    profile.appendChild(contactImg);
    profile.appendChild(contactName);

    const details = document.createElement("div");
    details.classList.add("details");

    const contactPosition = document.createElement("p");
    contactPosition.innerText = `Position: ${contacts[i].position}`;
    contactPosition.classList.add("contact-details");

    const contactNumber = document.createElement("p");
    contactNumber.innerText = `Number: ${contacts[i].number}`;
    contactNumber.classList.add("contact-details");

    const contactEmail = document.createElement("p");
    contactEmail.innerText = `Email: ${contacts[i].email}`;
    contactEmail.classList.add("contact-details");

    details.appendChild(contactPosition);
    details.appendChild(contactNumber);
    details.appendChild(contactEmail);

    contactItems[i] = document.createElement("div");
    contactItems[i].classList.add("contact-item");

    contactItems[i].appendChild(profile);
    contactItems[i].appendChild(details);
  }

  const shopInfo = document.createElement("div");
  shopInfo.classList.add("contact-item");

  //name,address, location, landline, hours
  for (const detail in teaShopDetails) {
    if (detail === "hoursOfOperation") continue;
    const shopDetails = document.createElement("p");
    shopDetails.innerText = `${detail}: ${teaShopDetails[detail]}`;
    shopDetails.classList.add("contact-details");
    shopInfo.appendChild(shopDetails);
  }
  const shopSchedule = document.createElement("div");
  shopSchedule.classList.add("menu-item");
  const hoursOfOperation = teaShopDetails[4];
  for (const day in hoursOfOperation) {
    const dayTimings = hoursOfOperation[day];
    const dayText = document.createElement("p");
    dayText.innerText = `${day}: ${dayTimings}`;
    dayText.classList.add("contact-details");
    shopSchedule.appendChild(dayText);
  }
  shopInfo.appendChild(shopSchedule);

  for (let i = 0; i < contactItems.length; i++) {
    contactContainer.append(contactItems[i]);
  }
  contactContainer.appendChild(shopInfo);
  contentDiv.appendChild(contactContainer);
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
/* harmony import */ var _chaiTea_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chaiTea.jpeg */ "./src/chaiTea.jpeg");
/* harmony import */ var _darjeelingTea_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darjeelingTea.jpeg */ "./src/darjeelingTea.jpeg");
/* harmony import */ var _earlGreyTea_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earlGreyTea.jpeg */ "./src/earlGreyTea.jpeg");
/* harmony import */ var _hibiscusHerbalTea_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hibiscusHerbalTea.jpeg */ "./src/hibiscusHerbalTea.jpeg");
/* harmony import */ var _jasminePearlTea_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jasminePearlTea.jpeg */ "./src/jasminePearlTea.jpeg");
/* harmony import */ var _matchaGreenTea_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchaGreenTea.jpeg */ "./src/matchaGreenTea.jpeg");
/* harmony import */ var _oolongTea_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oolongTea.jpeg */ "./src/oolongTea.jpeg");
/* harmony import */ var _pu_erhTea_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pu-erhTea.jpeg */ "./src/pu-erhTea.jpeg");
/* harmony import */ var _rooibosTea_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rooibosTea.jpeg */ "./src/rooibosTea.jpeg");
/* harmony import */ var _teacup_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacup.png */ "./src/teacup.png");
/* harmony import */ var _whitePeonyTea_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./whitePeonyTea.jpeg */ "./src/whitePeonyTea.jpeg");












const teaOptions = [
  {
    src: _darjeelingTea_jpeg__WEBPACK_IMPORTED_MODULE_1__,
    title: "Darjeeling Tea",
    price: "$7.99",
    origin: "Darjeeling, India",
    description:
      "Known as the 'Champagne of Teas', with a delicate and fruity flavor.",
    ingredients: "100% Darjeeling Tea Leaves",
    caffeine_level: 2,
  },
  {
    src: _matchaGreenTea_jpeg__WEBPACK_IMPORTED_MODULE_5__,
    title: "Matcha Green Tea",
    price: "$9.99",
    origin: "Japan",
    description:
      "A vibrant green tea powder with a rich, umami flavor and high antioxidants.",
    ingredients: "100% Matcha Green Tea Powder",
    caffeine_level: 4,
  },
  {
    src: _oolongTea_jpeg__WEBPACK_IMPORTED_MODULE_6__,
    title: "Oolong Tea",
    price: "$6.49",
    origin: "Taiwan",
    description:
      "A semi-fermented tea with a smooth, floral taste and unique aroma.",
    ingredients: "100% Oolong Tea Leaves",
    caffeine_level: 3,
  },
  {
    src: _rooibosTea_jpeg__WEBPACK_IMPORTED_MODULE_8__,
    title: "Rooibos Tea",
    price: "$5.99",
    origin: "South Africa",
    description: "A caffeine-free herbal tea with a sweet and nutty flavor.",
    ingredients: "100% Rooibos Tea Leaves",
    caffeine_level: 0,
  },
  {
    src: _earlGreyTea_jpeg__WEBPACK_IMPORTED_MODULE_2__,
    title: "Earl Grey Tea",
    price: "$6.99",
    origin: "United Kingdom",
    description:
      "A classic black tea infused with bergamot oil for a citrusy aroma.",
    ingredients: "Black Tea Leaves, Bergamot Oil",
    caffeine_level: 3,
  },
  {
    src: _jasminePearlTea_jpeg__WEBPACK_IMPORTED_MODULE_4__,
    title: "Jasmine Pearl Tea",
    price: "$8.99",
    origin: "China",
    description:
      "Green tea leaves rolled into pearls, scented with jasmine flowers.",
    ingredients: "Green Tea Leaves, Jasmine Flowers",
    caffeine_level: 2,
  },
  {
    src: _chaiTea_jpeg__WEBPACK_IMPORTED_MODULE_0__,
    title: "Chai Tea",
    price: "$6.49",
    origin: "India",
    description:
      "A spiced black tea with notes of cinnamon, cardamom, and cloves.",
    ingredients: "Black Tea Leaves, Spices",
    caffeine_level: 3,
  },
  {
    src: _pu_erhTea_jpeg__WEBPACK_IMPORTED_MODULE_7__,
    title: "Pu-erh Tea",
    price: "$10.99",
    origin: "Yunnan, China",
    description:
      "A fermented tea with a deep, earthy flavor and complex aroma.",
    ingredients: "100% Pu-erh Tea Leaves",
    caffeine_level: 4,
  },
  {
    src: _whitePeonyTea_jpeg__WEBPACK_IMPORTED_MODULE_10__,
    title: "White Peony Tea",
    price: "$7.49",
    origin: "Fujian, China",
    description: "A delicate white tea with a sweet and floral character.",
    ingredients: "100% White Peony Tea Leaves",
    caffeine_level: 1,
  },
  {
    src: _hibiscusHerbalTea_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    title: "Hibiscus Herbal Tea",
    price: "$5.99",
    origin: "Egypt",
    description: "A vibrant red herbal tea with a tart and fruity taste.",
    ingredients: "Dried Hibiscus Flowers",
    caffeine_level: 0,
  },
];

function loadMenuPage(contentDiv) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuItems = [];

  for (let i = 0; i < teaOptions.length; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-item-img");
    menuImg.src = teaOptions[i].src;
    menuImg.alt = teaOptions[i].title;

    const menuTitle = document.createElement("p");
    menuTitle.innerText = teaOptions[i].title;
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
      teaCup.src = _teacup_png__WEBPACK_IMPORTED_MODULE_9__;
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
  createModal();
}

function createModal() {
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

      modalTitle.innerText = teaOptions[index].title;
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

/***/ "./src/chaiTea.jpeg":
/*!**************************!*\
  !*** ./src/chaiTea.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afda55cf5588473a2b01.jpeg";

/***/ }),

/***/ "./src/darjeelingTea.jpeg":
/*!********************************!*\
  !*** ./src/darjeelingTea.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "886e9b52d2a839ee1879.jpeg";

/***/ }),

/***/ "./src/earlGreyTea.jpeg":
/*!******************************!*\
  !*** ./src/earlGreyTea.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98af671e40bf7acac87e.jpeg";

/***/ }),

/***/ "./src/hibiscusHerbalTea.jpeg":
/*!************************************!*\
  !*** ./src/hibiscusHerbalTea.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c8ed730411b07fc180f.jpeg";

/***/ }),

/***/ "./src/jasminePearlTea.jpeg":
/*!**********************************!*\
  !*** ./src/jasminePearlTea.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95c8ac09262947e84f80.jpeg";

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

/***/ "./src/matchaGreenTea.jpeg":
/*!*********************************!*\
  !*** ./src/matchaGreenTea.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2078bd9339845d40343a.jpeg";

/***/ }),

/***/ "./src/oolongTea.jpeg":
/*!****************************!*\
  !*** ./src/oolongTea.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6c7e179c065ccc17e02.jpeg";

/***/ }),

/***/ "./src/pu-erhTea.jpeg":
/*!****************************!*\
  !*** ./src/pu-erhTea.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05aeda9517b6e7bf2839.jpeg";

/***/ }),

/***/ "./src/restaurantBg.jpg":
/*!******************************!*\
  !*** ./src/restaurantBg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e4ae21c7bf6d6250327.jpg";

/***/ }),

/***/ "./src/rooibosTea.jpeg":
/*!*****************************!*\
  !*** ./src/rooibosTea.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "affb7f002852c7b60b01.jpeg";

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

/***/ "./src/teaProfile1.jpeg":
/*!******************************!*\
  !*** ./src/teaProfile1.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bf48e96838b350a4269.jpeg";

/***/ }),

/***/ "./src/teaProfile2.jpeg":
/*!******************************!*\
  !*** ./src/teaProfile2.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "972d544c99cc4b5b43a6.jpeg";

/***/ }),

/***/ "./src/teaProfile3.jpeg":
/*!******************************!*\
  !*** ./src/teaProfile3.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df2a345d142e0ebbe88d.jpeg";

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

/***/ }),

/***/ "./src/whitePeonyTea.jpeg":
/*!********************************!*\
  !*** ./src/whitePeonyTea.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6331314e07f5921486e1.jpeg";

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
  btns[2].click();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFVB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NEM7QUFDTjtBQUNBO0FBQ007O0FBRTVDO0FBQ0EsVUFBVSxtQkFBbUIsRUFBRSx5REFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsK0JBQStCLGlEQUFZLEVBQUUsaURBQVksRUFBRSxvREFBZTs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2x1eHVyaW91c3NjcmlwdC1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2x1eHVyaW91c3NjcmlwdC1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vdGFuZ2VyaW5lLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vdGFuZ2VyaW5lLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibHV4dXJpb3VzXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwidGFuZ2VyaW5lXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLFxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIC0tcGluazogI2UzM2UzODtcbiAgZm9udC1mYW1pbHk6IFwidGFuZ2VyaW5lXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZDc7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCBsaWdodGNvcmFsO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm5hdkJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubmF2QnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmF2QnV0dG9uOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmVkO1xuICB3aWR0aDogMTA1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGVhLXBvdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDcwcHg7XG4gIG1hcmdpbjogMjVweCAwO1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCByZ2IoNTYsIDQzLCA0Myk7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuXG4udGl0bGU6aG92ZXIge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJlZDtcbn1cblxuLnN1Yi1oZXJvIHtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXNpemU6IDQwcHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuM3B4IHJnYigzMiwgMzEsIDMxKTtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuXG4uaW50cm8tY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwidGFuZ2VyaW5lXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xufVxuLm1lbnUtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJ0YW5nZXJpbmVcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4MiwgMTkzLCAwLjY0NSk7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogYm94LXNoYWRvdzogMCAwIDIwcHggbGlnaHRjb3JhbDsgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciA+ICoge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHAge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudS1pdGVtLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB3aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5tZW51LWl0ZW0tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBmb250LXNpemU6IDI3cHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0tdGl0bGUge1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCB3aGl0ZTtcbn1cblxuLm1lbnUtaXRlbS1wcmljZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUyKTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggYmxhY2s7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5N3B4O1xuICByaWdodDogLTEzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU0KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZW51LWl0ZW0tY2FmZmVpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB0b3A6IDc1cHg7XG4gIGxlZnQ6IDE1JTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU0KTsgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tZW51LWl0ZW0tY2FmZmVpbmUtY3VwIHtcbiAgLS1zaXplOiA0MHB4O1xuICBtYXgtd2lkdGg6IHZhcigtLXNpemUpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLWNhZmZlaW5lLWN1cCB7XG4gIC0tc2l6ZTogNDJweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XG59XG5cbi5tZW51LWl0ZW0taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ubWVudS1pdGVtOmhvdmVyID4gLm1lbnUtaXRlbS1pbmZvIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZWQ7XG59XG5cbi5tZW51LWl0ZW0taW5mbyAqIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1OSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0taW5mbyAqIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xufVxuXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDM1JTtcbiAgdG9wOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU5Nyk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDE1JSBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICB3aWR0aDogNTAlO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBjb250YWN0UGFnZSBzdHlsaW5nICBzdGFydHMgaGVyZSovXG4uY29udGFjdC1jb250YWluZXIge1xuICBmb250LXNpemU6IDM0cHg7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJ0YW5nZXJpbmVcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE4MiwgMTkzLCAwLjY0NSk7XG59XG5cbi5jb250YWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBnYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKTtcbn1cblxuLyogLnByb2ZpbGUge1xufSAqL1xuXG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY29udGFjdC1pbWcge1xuICAtLXNpemU6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Y29yYWw7XG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcbn1cblxuLmNvbnRhY3QtbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbn1cblxuLmNvbnRhY3QtZGV0YWlscyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMzAlLCBsaWdodGNvcmFsIDcwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3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LDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNENBQTRDO0FBQzlDOztBQUVBO0dBQ0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRFQUE0RTtFQUM1RSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibHV4dXJpb3VzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2x1eHVyaW91c3NjcmlwdC1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vdGFuZ2VyaW5lLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC0tcGluazogI2UzM2UzODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGFuZ2VyaW5lXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkNztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5uYXZCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2QnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmVkO1xcbiAgd2lkdGg6IDEwNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZWEtcG90IHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDU2LCA0MywgNDMpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4uc3ViLWhlcm8ge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHggcmdiKDMyLCAzMSwgMzEpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaW50cm8tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcXG59XFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcInRhbmdlcmluZVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAyMHB4IGxpZ2h0Y29yYWw7ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyID4gKiB7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciBwIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICB3aWR0aDogMTcwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMiU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLXRpdGxlIHtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG5cXG4ubWVudS1pdGVtLXByaWNlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IGJsYWNrO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5N3B4O1xcbiAgcmlnaHQ6IC0xMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jYWZmZWluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgdG9wOiA3NXB4O1xcbiAgbGVmdDogMTUlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU0KTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLWNhZmZlaW5lIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0tY2FmZmVpbmUtY3VwIHtcXG4gIC0tc2l6ZTogNDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZS1jdXAge1xcbiAgLS1zaXplOiA0MnB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgPiAubWVudS1pdGVtLWluZm8ge1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZm8gKiB7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjU5KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0taW5mbyAqIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbmdyZWRpZW50cyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAzNSU7XFxuICB0b3A6IDI1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU5Nyk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIGNvbnRhY3RQYWdlIHN0eWxpbmcgIHN0YXJ0cyBoZXJlKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBpbnNldCB2YXIoLS1waW5rKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MzEpO1xcbn1cXG5cXG4vKiAucHJvZmlsZSB7XFxufSAqL1xcblxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbWcge1xcbiAgLS1zaXplOiAxNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Y29yYWw7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAzMCUsIGxpZ2h0Y29yYWwgNzAlKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvZmlsZVBpYzEgZnJvbSBcIi4vdGVhUHJvZmlsZTEuanBlZ1wiO1xuaW1wb3J0IHByb2ZpbGVQaWMyIGZyb20gXCIuL3RlYVByb2ZpbGUyLmpwZWdcIjtcbmltcG9ydCBwcm9maWxlUGljMyBmcm9tIFwiLi90ZWFQcm9maWxlMy5qcGVnXCI7XG5cbmNvbnN0IGNvbnRhY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJBaG1ldCBZaWxtYXpcIixcbiAgICBwb3NpdGlvbjogXCJPd25lclwiLFxuICAgIG51bWJlcjogXCIrOTAgMTIzIDQ1NiA3ODkwXCIsXG4gICAgZW1haWw6IFwiYWhtZXRAZXhhbXBsZS5jb21cIixcbiAgICBwcm9maWxlOiBwcm9maWxlUGljMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2hlaGFuZ2lyIERlbWlyXCIsXG4gICAgcG9zaXRpb246IFwiVGVhIFNwZWNpYWxpc3RcIixcbiAgICBudW1iZXI6IFwiKzkwIDIzNCA1NjcgODkwMVwiLFxuICAgIGVtYWlsOiBcImNoZWhhbmdpckBleGFtcGxlLmNvbVwiLFxuICAgIHByb2ZpbGU6IHByb2ZpbGVQaWMyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNZWhtZXQgQXJzbGFuXCIsXG4gICAgcG9zaXRpb246IFwiTWFuYWdlclwiLFxuICAgIG51bWJlcjogXCIrOTAgMzQ1IDY3OCA5MDEyXCIsXG4gICAgZW1haWw6IFwibWVobWV0QGV4YW1wbGUuY29tXCIsXG4gICAgcHJvZmlsZTogcHJvZmlsZVBpYzMsXG4gIH0sXG5dO1xuXG5jb25zdCB0ZWFTaG9wRGV0YWlscyA9IHtcbiAgbmFtZTogXCJCb3NwaG9yb3VzIEJyZXdzXCIsXG4gIGFkZHJlc3M6IFwiMTIzIFRlYSBTdHJlZXRcIixcbiAgbG9jYXRpb246IFwiSXN0YW5idWwsIFR1cmtleVwiLFxuICBsYW5kbGluZTogXCIrOTAgMTIzIDQ1NiA3ODkwXCIsXG4gIGhvdXJzT2ZPcGVyYXRpb246IHtcbiAgICBNb25kYXk6IFwiOTowMCBBTSAtIDY6MDAgUE1cIixcbiAgICBUdWVzZGF5OiBcIjk6MDAgQU0gLSA2OjAwIFBNXCIsXG4gICAgV2VkbmVzZGF5OiBcIjk6MDAgQU0gLSA2OjAwIFBNXCIsXG4gICAgVGh1cnNkYXk6IFwiOTowMCBBTSAtIDY6MDAgUE1cIixcbiAgICBGcmlkYXk6IFwiOTowMCBBTSAtIDY6MDAgUE1cIixcbiAgICBTYXR1cmRheTogXCIxMDowMCBBTSAtIDQ6MDAgUE1cIixcbiAgICBTdW5kYXk6IFwiQ2xvc2VkXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY29udGFjdEl0ZW1zID0gW107XG4gIC8vZGl2LmNvbnRhY3QtY29udGFpbmVyPmRpdi5zaG9wSW5mbytkaXYuY29udGFjdC1pdGVtcypuPi0tXG4gIC8vLS0gKGltZy5wcm9maWxlK3AubmFtZStwLnBvc2l0aW9uKSsocC5udW1iZXIrcC5lbWFpbClcbiAgLy9wcm9maWxlLCBuYW1lLCBwb3NpdGlvbiwgbnVtYmVyICwgZW1haWxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ZpbGUuY2xhc3NMaXN0LmFkZChcInByb2ZpbGVcIik7XG5cbiAgICBjb25zdCBjb250YWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb250YWN0SW1nLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltZ1wiKTtcbiAgICBjb250YWN0SW1nLnNyYyA9IGNvbnRhY3RzW2ldLnByb2ZpbGU7XG4gICAgY29udGFjdEltZy5hbHQgPSBgUGljdHVyZSBvZiAke2NvbnRhY3RzW2ldLnBvc2l0aW9ufWA7XG5cbiAgICBjb25zdCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3ROYW1lLmlubmVyVGV4dCA9IGNvbnRhY3RzW2ldLm5hbWU7XG4gICAgY29udGFjdE5hbWUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbmFtZVwiKTtcblxuICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQoY29udGFjdEltZyk7XG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgY29udGFjdFBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdFBvc2l0aW9uLmlubmVyVGV4dCA9IGBQb3NpdGlvbjogJHtjb250YWN0c1tpXS5wb3NpdGlvbn1gO1xuICAgIGNvbnRhY3RQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3ROdW1iZXIuaW5uZXJUZXh0ID0gYE51bWJlcjogJHtjb250YWN0c1tpXS5udW1iZXJ9YDtcbiAgICBjb250YWN0TnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRldGFpbHNcIik7XG5cbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0RW1haWwuaW5uZXJUZXh0ID0gYEVtYWlsOiAke2NvbnRhY3RzW2ldLmVtYWlsfWA7XG4gICAgY29udGFjdEVtYWlsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRldGFpbHNcIik7XG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RQb3NpdGlvbik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG5cbiAgICBjb250YWN0SXRlbXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pdGVtXCIpO1xuXG4gICAgY29udGFjdEl0ZW1zW2ldLmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICAgIGNvbnRhY3RJdGVtc1tpXS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgfVxuXG4gIGNvbnN0IHNob3BJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hvcEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcblxuICAvL25hbWUsYWRkcmVzcywgbG9jYXRpb24sIGxhbmRsaW5lLCBob3Vyc1xuICBmb3IgKGNvbnN0IGRldGFpbCBpbiB0ZWFTaG9wRGV0YWlscykge1xuICAgIGlmIChkZXRhaWwgPT09IFwiaG91cnNPZk9wZXJhdGlvblwiKSBjb250aW51ZTtcbiAgICBjb25zdCBzaG9wRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNob3BEZXRhaWxzLmlubmVyVGV4dCA9IGAke2RldGFpbH06ICR7dGVhU2hvcERldGFpbHNbZGV0YWlsXX1gO1xuICAgIHNob3BEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRldGFpbHNcIik7XG4gICAgc2hvcEluZm8uYXBwZW5kQ2hpbGQoc2hvcERldGFpbHMpO1xuICB9XG4gIGNvbnN0IHNob3BTY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNob3BTY2hlZHVsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICBjb25zdCBob3Vyc09mT3BlcmF0aW9uID0gdGVhU2hvcERldGFpbHNbNF07XG4gIGZvciAoY29uc3QgZGF5IGluIGhvdXJzT2ZPcGVyYXRpb24pIHtcbiAgICBjb25zdCBkYXlUaW1pbmdzID0gaG91cnNPZk9wZXJhdGlvbltkYXldO1xuICAgIGNvbnN0IGRheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXlUZXh0LmlubmVyVGV4dCA9IGAke2RheX06ICR7ZGF5VGltaW5nc31gO1xuICAgIGRheVRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGV0YWlsc1wiKTtcbiAgICBzaG9wU2NoZWR1bGUuYXBwZW5kQ2hpbGQoZGF5VGV4dCk7XG4gIH1cbiAgc2hvcEluZm8uYXBwZW5kQ2hpbGQoc2hvcFNjaGVkdWxlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RJdGVtc1tpXSk7XG4gIH1cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzaG9wSW5mbyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudEludHJvID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgcmVzdGF1cmFudEludHJvW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIH1cbiAgcmVzdGF1cmFudEludHJvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdWItaGVyb1wiKTtcbiAgcmVzdGF1cmFudEludHJvWzBdLmlubmVyVGV4dCA9XG4gICAgXCJCb3NwaG9ydXMgQnJld3M6IFdoZXJlIEN1bHR1cmVzIFVuaXRlIGluIGEgQ3VwIG9mIFRlYVwiO1xuICByZXN0YXVyYW50SW50cm9bMV0uaW5uZXJUZXh0ID1cbiAgICBcIkF0IEJvc3Bob3J1cyBCcmV3cywgb3VyIHBhc3Npb24gZm9yIHRlYSBrbm93cyBubyBib3JkZXJzLiBXZSBiZWxpZXZlIHRoYXQgdGVhIGlzIG5vdCBqdXN0IGEgYmV2ZXJhZ2U7IGl0J3MgYSBqb3VybmV5IHRoYXQgdHJhbnNjZW5kcyBjdWx0dXJlcyBhbmQgYnJpbmdzIHBlb3BsZSB0b2dldGhlci4gT3VyIHRlYWhvdXNlIGlzIGEgcGxhY2Ugd2hlcmUgdGVhIGVudGh1c2lhc3RzIGZyb20gYWxsIGNvcm5lcnMgb2YgdGhlIHdvcmxkIGNhbiBjb21lIHRvIHNhdm9yIHRoZSByaWNoIHRhcGVzdHJ5IG9mIGZsYXZvcnMgYW5kIHRyYWRpdGlvbnMgdGhhdCB0ZWEgaGFzIHRvIG9mZmVyLlwiO1xuICByZXN0YXVyYW50SW50cm9bMl0uaW5uZXJUZXh0ID1cbiAgICBcIk91ciBjb21taXRtZW50IHRvIHNlcnZpbmcgdGVhcyBmcm9tIGFsbCBjdWx0dXJlcyBoYXMgbWFkZSB1cyBhIGJlbG92ZWQgZGVzdGluYXRpb24gZm9yIHRlYSBsb3ZlcnMgYW5kIHRyYXZlbGVycyBhbGlrZS4gV2l0aCBhIGNhcmVmdWxseSBjdXJhdGVkIHNlbGVjdGlvbiBvZiB0ZWFzIHNvdXJjZWQgZnJvbSB2YXJpb3VzIHJlZ2lvbnMsIHdlIGludml0ZSB5b3UgdG8gZW1iYXJrIG9uIGEgZ2xvYmFsIHRlYS10YXN0aW5nIGFkdmVudHVyZSB3aXRob3V0IGV2ZXIgbGVhdmluZyB5b3VyIHNlYXQuXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmQocmVzdGF1cmFudEludHJvW2ldKTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCB0ZWFJbWFnZTcgZnJvbSBcIi4vY2hhaVRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UxIGZyb20gXCIuL2RhcmplZWxpbmdUZWEuanBlZ1wiO1xuaW1wb3J0IHRlYUltYWdlNSBmcm9tIFwiLi9lYXJsR3JleVRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UxMCBmcm9tIFwiLi9oaWJpc2N1c0hlcmJhbFRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2U2IGZyb20gXCIuL2phc21pbmVQZWFybFRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UyIGZyb20gXCIuL21hdGNoYUdyZWVuVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTMgZnJvbSBcIi4vb29sb25nVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTggZnJvbSBcIi4vcHUtZXJoVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTQgZnJvbSBcIi4vcm9vaWJvc1RlYS5qcGVnXCI7XG5pbXBvcnQgdGVhY3VwIGZyb20gXCIuL3RlYWN1cC5wbmdcIjtcbmltcG9ydCB0ZWFJbWFnZTkgZnJvbSBcIi4vd2hpdGVQZW9ueVRlYS5qcGVnXCI7XG5cbmNvbnN0IHRlYU9wdGlvbnMgPSBbXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlMSxcbiAgICB0aXRsZTogXCJEYXJqZWVsaW5nIFRlYVwiLFxuICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgb3JpZ2luOiBcIkRhcmplZWxpbmcsIEluZGlhXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIktub3duIGFzIHRoZSAnQ2hhbXBhZ25lIG9mIFRlYXMnLCB3aXRoIGEgZGVsaWNhdGUgYW5kIGZydWl0eSBmbGF2b3IuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBEYXJqZWVsaW5nIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMixcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2UyLFxuICAgIHRpdGxlOiBcIk1hdGNoYSBHcmVlbiBUZWFcIixcbiAgICBwcmljZTogXCIkOS45OVwiLFxuICAgIG9yaWdpbjogXCJKYXBhblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHZpYnJhbnQgZ3JlZW4gdGVhIHBvd2RlciB3aXRoIGEgcmljaCwgdW1hbWkgZmxhdm9yIGFuZCBoaWdoIGFudGlveGlkYW50cy5cIixcbiAgICBpbmdyZWRpZW50czogXCIxMDAlIE1hdGNoYSBHcmVlbiBUZWEgUG93ZGVyXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDQsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlMyxcbiAgICB0aXRsZTogXCJPb2xvbmcgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDYuNDlcIixcbiAgICBvcmlnaW46IFwiVGFpd2FuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2VtaS1mZXJtZW50ZWQgdGVhIHdpdGggYSBzbW9vdGgsIGZsb3JhbCB0YXN0ZSBhbmQgdW5pcXVlIGFyb21hLlwiLFxuICAgIGluZ3JlZGllbnRzOiBcIjEwMCUgT29sb25nIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U0LFxuICAgIHRpdGxlOiBcIlJvb2lib3MgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDUuOTlcIixcbiAgICBvcmlnaW46IFwiU291dGggQWZyaWNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBjYWZmZWluZS1mcmVlIGhlcmJhbCB0ZWEgd2l0aCBhIHN3ZWV0IGFuZCBudXR0eSBmbGF2b3IuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBSb29pYm9zIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMCxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U1LFxuICAgIHRpdGxlOiBcIkVhcmwgR3JleSBUZWFcIixcbiAgICBwcmljZTogXCIkNi45OVwiLFxuICAgIG9yaWdpbjogXCJVbml0ZWQgS2luZ2RvbVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNsYXNzaWMgYmxhY2sgdGVhIGluZnVzZWQgd2l0aCBiZXJnYW1vdCBvaWwgZm9yIGEgY2l0cnVzeSBhcm9tYS5cIixcbiAgICBpbmdyZWRpZW50czogXCJCbGFjayBUZWEgTGVhdmVzLCBCZXJnYW1vdCBPaWxcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U2LFxuICAgIHRpdGxlOiBcIkphc21pbmUgUGVhcmwgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDguOTlcIixcbiAgICBvcmlnaW46IFwiQ2hpbmFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR3JlZW4gdGVhIGxlYXZlcyByb2xsZWQgaW50byBwZWFybHMsIHNjZW50ZWQgd2l0aCBqYXNtaW5lIGZsb3dlcnMuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiR3JlZW4gVGVhIExlYXZlcywgSmFzbWluZSBGbG93ZXJzXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDIsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlNyxcbiAgICB0aXRsZTogXCJDaGFpIFRlYVwiLFxuICAgIHByaWNlOiBcIiQ2LjQ5XCIsXG4gICAgb3JpZ2luOiBcIkluZGlhXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc3BpY2VkIGJsYWNrIHRlYSB3aXRoIG5vdGVzIG9mIGNpbm5hbW9uLCBjYXJkYW1vbSwgYW5kIGNsb3Zlcy5cIixcbiAgICBpbmdyZWRpZW50czogXCJCbGFjayBUZWEgTGVhdmVzLCBTcGljZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U4LFxuICAgIHRpdGxlOiBcIlB1LWVyaCBUZWFcIixcbiAgICBwcmljZTogXCIkMTAuOTlcIixcbiAgICBvcmlnaW46IFwiWXVubmFuLCBDaGluYVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGZlcm1lbnRlZCB0ZWEgd2l0aCBhIGRlZXAsIGVhcnRoeSBmbGF2b3IgYW5kIGNvbXBsZXggYXJvbWEuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBQdS1lcmggVGVhIExlYXZlc1wiLFxuICAgIGNhZmZlaW5lX2xldmVsOiA0LFxuICB9LFxuICB7XG4gICAgc3JjOiB0ZWFJbWFnZTksXG4gICAgdGl0bGU6IFwiV2hpdGUgUGVvbnkgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDcuNDlcIixcbiAgICBvcmlnaW46IFwiRnVqaWFuLCBDaGluYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZGVsaWNhdGUgd2hpdGUgdGVhIHdpdGggYSBzd2VldCBhbmQgZmxvcmFsIGNoYXJhY3Rlci5cIixcbiAgICBpbmdyZWRpZW50czogXCIxMDAlIFdoaXRlIFBlb255IFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2UxMCxcbiAgICB0aXRsZTogXCJIaWJpc2N1cyBIZXJiYWwgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDUuOTlcIixcbiAgICBvcmlnaW46IFwiRWd5cHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZpYnJhbnQgcmVkIGhlcmJhbCB0ZWEgd2l0aCBhIHRhcnQgYW5kIGZydWl0eSB0YXN0ZS5cIixcbiAgICBpbmdyZWRpZW50czogXCJEcmllZCBIaWJpc2N1cyBGbG93ZXJzXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltZ1wiKTtcbiAgICBtZW51SW1nLnNyYyA9IHRlYU9wdGlvbnNbaV0uc3JjO1xuICAgIG1lbnVJbWcuYWx0ID0gdGVhT3B0aW9uc1tpXS50aXRsZTtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2ldLnRpdGxlO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXRpdGxlXCIpO1xuXG4gICAgLy9wcmljZSwgY2FmZmVpbmUgbGV2ZWwsIE9yaWdpbiwgRGVzY3JpcHRpb24sIEluZ3JlZGllbnRzXG4gICAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudVByaWNlLmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaV0ucHJpY2U7XG4gICAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tcHJpY2VcIik7XG4gICAgLy9uZWVkIHRvIHNvbHZlIHRoaXMgcHN1ZWRvIGNsYXNzIHNlbGVjdG9yIG5vdCB3b3JraW5nIGluIEpTIGFub21hbHkhXG4gICAgY29uc3QgY2FmZmVpbmVMZXZlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FmZmVpbmVMZXZlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNhZmZlaW5lXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVhT3B0aW9uc1tpXS5jYWZmZWluZV9sZXZlbDsgaisrKSB7XG4gICAgICBjb25zdCB0ZWFDdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgdGVhQ3VwLnNyYyA9IHRlYWN1cDtcbiAgICAgIHRlYUN1cC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNhZmZlaW5lLWN1cFwiKTtcbiAgICAgIGNhZmZlaW5lTGV2ZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGVhQ3VwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmZvXCIpO1xuXG4gICAgY29uc3QgbWVudU9yaWdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVPcmlnaW4uaW5uZXJUZXh0ID0gdGVhT3B0aW9uc1tpXS5vcmlnaW47XG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaV0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgbWVudUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51SW5ncmVkaWVudHMuaW5uZXJUZXh0ID0gYEluZ3JlZGllbnRzYDtcbiAgICBtZW51SW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmdyZWRpZW50c1wiKTsgLy9uZWVkIHRvIGFkZCBpbmdyZWRpZW50cyBtb2RhbFxuXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudU9yaWdpbik7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChtZW51SW5ncmVkaWVudHMpO1xuXG4gICAgbWVudUl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIG1lbnVJdGVtc1tpXS5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQobWVudVByaWNlKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQoY2FmZmVpbmVMZXZlbENvbnRhaW5lcik7XG4gICAgbWVudUl0ZW1zW2ldLmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW1zW2ldKTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICBjcmVhdGVNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIk1vZGFsIFRpdGxlXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcblxuICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9kYWxUZXh0LmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHNpbXBsZSBtb2RhbCBleGFtcGxlLlwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taW5ncmVkaWVudHNcIik7XG5cbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuTW9kYWwoKTtcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgICAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2luZGV4XS50aXRsZTtcbiAgICAgIG1vZGFsVGV4dC5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2luZGV4XS5pbmdyZWRpZW50cztcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCByZXN0YXVyYW50QmcgZnJvbSBcIi4vcmVzdGF1cmFudEJnLmpwZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdGVhUG90SW1hZ2VTcmMgZnJvbSBcIi4vdGVhcG90LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgYWRkU3R5bGVzKGJvZHksIGNvbnRlbnREaXYpO1xuXG4gIGxvYWRUaXRsZShjb250ZW50RGl2KTtcbiAgaW5pdGlhbGl6ZU5hdmJhcihjb250ZW50RGl2KTtcbiAgbmF2aWdhdGlvbihjb250ZW50RGl2KTtcbiAgbG9hZEhvbWVQYWdlKGNvbnRlbnREaXYpO1xuICByZXR1cm4geyBib2R5LCBjb250ZW50RGl2IH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlcyhib2R5LCBjb250ZW50RGl2KSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlcIik7XG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3RhdXJhbnRCZ30pYDtcbn1cblxuZnVuY3Rpb24gbG9hZFRpdGxlKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IFwiQm9zcGhvcm91cyBCcmV3c1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTmF2YmFyKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgbmF2QnV0dG9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIG5hdkJ1dHRvbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5hdkJ1dHRvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcbiAgfVxuICBuYXZCdXR0b25zWzBdLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICBuYXZCdXR0b25zWzFdLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICBuYXZCdXR0b25zWzJdLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbaV0pO1xuICB9XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcbiAgY29uc3QgdGVhUG90SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHRlYVBvdEltYWdlLnNyYyA9IHRlYVBvdEltYWdlU3JjO1xuICB0ZWFQb3RJbWFnZS5hbHQgPSBcIlRlYXBvdFwiO1xuICB0ZWFQb3RJbWFnZS5jbGFzc05hbWUgPSBcInRlYS1wb3RcIjtcblxuICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChvdGhlckJ0bikgPT4gb3RoZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgIC8vdGVhcG90IHBvc2l0aW9uaW5nIGxvZ2ljXG4gICAgICBjb25zdCBidG5SZWN0ID0gYnRuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IG5hdkJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGxlZnRQb3NpdGlvbiA9IGJ0blJlY3QucmlnaHQgLSBjb250YWluZXJSZWN0LmxlZnQgLSAzMDtcbiAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gYnRuUmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCAtIDQwO1xuICAgICAgdGVhUG90SW1hZ2Uuc3R5bGUubGVmdCA9IGxlZnRQb3NpdGlvbiArIFwicHhcIjtcbiAgICAgIHRlYVBvdEltYWdlLnN0eWxlLnRvcCA9IHRvcFBvc2l0aW9uICsgXCJweFwiO1xuXG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGVhUG90SW1hZ2UpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSwgY29udGVudERpdiB9ID0gaW5pdGlhbGl6ZVBhZ2UoKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcbiAgbmF2aWdhdGlvbihjb250ZW50RGl2LCBuYXZCYXIsIGJ0bnMpO1xufSk7XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb24oY29udGVudERpdiwgbmF2QmFyLCBidG5zKSB7XG4gIGNvbnN0IGFjdGl2YXRpb25GdW5jdGlvbnMgPSBbbG9hZEhvbWVQYWdlLCBsb2FkTWVudVBhZ2UsIGxvYWRDb250YWN0UGFnZV07XG5cbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2FkUmVmcmVzaGVyKGNvbnRlbnREaXYpO1xuICAgICAgYWN0aXZhdGlvbkZ1bmN0aW9uc1tpbmRleF0oY29udGVudERpdik7XG4gICAgfSk7XG4gIH0pO1xuICBidG5zWzJdLmNsaWNrKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZWZyZXNoZXIoY29udGVudERpdikge1xuICBjb25zdCBwYWdlQ29udGVudCA9IGNvbnRlbnREaXYubGFzdENoaWxkO1xuXG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIi1jb250YWluZXJcIiwgXCJpXCIpO1xuICBjb25zdCBoYXNNYXRjaGluZ0NsYXNzID0gQXJyYXkuZnJvbShwYWdlQ29udGVudC5jbGFzc0xpc3QpLnNvbWUoKGNsYXNzTmFtZSkgPT5cbiAgICByZWdleC50ZXN0KGNsYXNzTmFtZSlcbiAgKTtcblxuICBpZiAocGFnZUNvbnRlbnQgJiYgcGFnZUNvbnRlbnQudGFnTmFtZSA9PT0gXCJESVZcIiAmJiBoYXNNYXRjaGluZ0NsYXNzKSB7XG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChwYWdlQ29udGVudCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==