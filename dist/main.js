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
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./teaBg2.jpg */ "./src/teaBg2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
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

.shop-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  border-radius: 15px;
  gap: 50px;
  padding: 20px;
  align-items: center;
  border: 2px inset var(--pink);
  background-color: rgba(255, 255, 255, 0.631);
}

.shop-details {
  color: var(--pink);
  font-size: 34px;
  font-weight: bolder;
  -webkit-text-stroke: 1px black;
  background-image: linear-gradient(to right, transparent 30%, lightcoral 70%);
  background-position: 0 bottom;
  background-size: 100% 2px;
  background-repeat: no-repeat;
}

.shop-schedule {
  display: flex;
  grid-column: span 2;
  flex-direction: column;
  align-items: start;
  border-radius: 15px;
  gap: 50px;
  padding: 20px;
  align-items: center;
  border: 2px inset var(--pink);
}

.schedule-title {
  font-size: 50px;
  border-bottom: 0.5px solid black;
}

.time-details {
  width: 500px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"luxurious\";\n  src: url(\"./luxuriousscript-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./luxuriousscript-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"tangerine\";\n  src: url(\"./tangerine-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"./tangerine-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nh1,\np {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  --pink: #e33e38;\n  font-family: \"tangerine\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-image: url(\"./teaBg2.jpg\");\n}\n\n.content {\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 25px;\n  border: 10px solid lightcoral;\n  max-width: 800px;\n  text-align: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.navBar {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 20px;\n  height: 40px;\n}\n\n.navButton {\n  width: 100px;\n  height: 35px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  box-shadow: 0 0 2px black;\n  transition: all 0.1s ease-in-out;\n}\n\n.navButton:hover {\n  font-size: 16px;\n  border: 3px solid white;\n  box-shadow: 0 0 15px red;\n  width: 105px;\n  height: 40px;\n}\n\n.selected {\n  position: relative;\n  color: black;\n  background-color: white;\n}\n\n.tea-pot {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-25deg);\n}\n\n.title {\n  font-size: 70px;\n  margin: 25px 0;\n  color: var(--pink);\n  font-weight: bolder;\n  -webkit-text-stroke: 1px rgb(56, 43, 43);\n  letter-spacing: 2.5px;\n  transition: text-shadow 0.3s ease;\n}\n\n.title:hover {\n  -webkit-text-stroke: 1px white;\n  text-shadow: 0 0 5px red;\n}\n\n.sub-hero {\n  color: var(--pink);\n  font-size: 40px;\n  -webkit-text-stroke: 0.3px rgb(32, 31, 31);\n  transition: text-shadow 0.3s ease;\n}\n\n.intro-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n.menu-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n\n.menu-item {\n  display: flex;\n  position: relative;\n  width: min-content;\n  border-radius: 15px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n  transition: all 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  background-color: white;\n  /* box-shadow: 0 0 20px lightcoral; */\n  transform: translateY(-10px);\n}\n\n.menu-item:hover > * {\n  -webkit-text-stroke: 1px black;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item:hover p {\n  box-shadow: none;\n}\n\n.menu-item-img {\n  border-radius: 13px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  width: 170px;\n  height: 120px;\n}\n\n.menu-item-title {\n  color: var(--pink);\n  font-weight: bolder;\n  height: 70px;\n  width: 70%;\n  letter-spacing: 2.5px;\n  font-size: 27px;\n  -webkit-text-stroke: 1px black;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 12%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.menu-item:hover .menu-item-title {\n  -webkit-text-stroke: 0.5px white;\n}\n\n.menu-item-price {\n  color: rgba(255, 255, 255, 0.752);\n  -webkit-text-stroke: 0.5px black;\n  padding: 0 5px;\n  font-weight: bolder;\n  transition: text-shadow 0.3s ease;\n  position: absolute;\n  top: 97px;\n  right: -13%;\n  background-color: rgba(240, 128, 128, 0.54);\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n  white-space: nowrap;\n}\n\n.menu-item-caffeine {\n  position: absolute;\n  height: 70px;\n  display: flex;\n  flex-direction: column-reverse;\n  top: 75px;\n  left: 15%;\n  /* background-color: rgba(240, 128, 128, 0.54); */\n  border-radius: 15px;\n  transform: translate(-50%, -50%);\n}\n\n.menu-item:hover .menu-item-caffeine {\n  box-shadow: none;\n}\n\n.menu-item-caffeine-cup {\n  --size: 40px;\n  max-width: var(--size);\n  max-height: var(--size);\n  transition: all 0.2s ease;\n}\n\n.menu-item:hover .menu-item-caffeine-cup {\n  --size: 42px;\n  max-width: var(--size);\n  max-height: var(--size);\n}\n\n.menu-item-info {\n  display: flex;\n  font-size: 15px;\n  height: 200px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 15px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-size: 25px;\n}\n\n.menu-item:hover > .menu-item-info {\n  -webkit-text-stroke: 0;\n  box-shadow: 0 0 5px red;\n}\n\n.menu-item-info * {\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.259);\n  transition: all 0.3s ease-in-out;\n}\n\n.menu-item:hover .menu-item-info * {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.397);\n}\n\n.menu-item-ingredients {\n  align-self: center;\n  margin-top: auto;\n  height: 30px;\n  border-radius: 10px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: lightcoral;\n  font-size: 15px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n\n.menu-item-ingredients:hover {\n  font-size: 16px;\n  transform: translateY(-5px);\n  box-shadow: 0 0 5px red;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 35%;\n  top: 25%;\n  border-radius: 15px;\n  width: 25%;\n  height: auto;\n  background-color: rgba(240, 128, 128, 0.597);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  font-size: 25px;\n  border-radius: 15px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: black;\n}\n\n/* contactPage styling  starts here*/\n.contact-container {\n  font-size: 34px;\n  padding: 30px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-family: \"tangerine\";\n  font-weight: 500;\n  border-radius: 15px;\n  background-color: rgba(255, 182, 193, 0.645);\n}\n\n.contact-item {\n  display: flex;\n  width: 80%;\n  height: 250px;\n  border-radius: 15px;\n  gap: 50px;\n  padding: 20px;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n}\n\n/* .profile {\n} */\n\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 20px;\n}\n\n.contact-img {\n  --size: 140px;\n  border-radius: 50%;\n  border: 3px solid lightcoral;\n  width: var(--size);\n  height: var(--size);\n}\n\n.contact-name {\n  color: var(--pink);\n  font-size: 40px;\n  font-weight: bolder;\n  letter-spacing: 2.5px;\n  -webkit-text-stroke: 1px black;\n}\n\n.contact-details {\n  background-image: linear-gradient(to right, transparent 30%, lightcoral 70%);\n  background-position: 0 bottom;\n  background-size: 100% 2px;\n  background-repeat: no-repeat;\n}\n\n.shop-info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  width: 80%;\n  border-radius: 15px;\n  gap: 50px;\n  padding: 20px;\n  align-items: center;\n  border: 2px inset var(--pink);\n  background-color: rgba(255, 255, 255, 0.631);\n}\n\n.shop-details {\n  color: var(--pink);\n  font-size: 34px;\n  font-weight: bolder;\n  -webkit-text-stroke: 1px black;\n  background-image: linear-gradient(to right, transparent 30%, lightcoral 70%);\n  background-position: 0 bottom;\n  background-size: 100% 2px;\n  background-repeat: no-repeat;\n}\n\n.shop-schedule {\n  display: flex;\n  grid-column: span 2;\n  flex-direction: column;\n  align-items: start;\n  border-radius: 15px;\n  gap: 50px;\n  padding: 20px;\n  align-items: center;\n  border: 2px inset var(--pink);\n}\n\n.schedule-title {\n  font-size: 50px;\n  border-bottom: 0.5px solid black;\n}\n\n.time-details {\n  width: 500px;\n}\n"],"sourceRoot":""}]);
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
  shopInfo.classList.add("shop-info");

  //name,address, location, landline, hours
  for (const detail in teaShopDetails) {
    if (detail === "hoursOfOperation") continue;
    const shopDetails = document.createElement("p");
    shopDetails.innerText = `${detail}: ${teaShopDetails[detail]}`;
    shopDetails.classList.add("shop-details");
    shopInfo.appendChild(shopDetails);
  }
  const shopSchedule = document.createElement("div");
  shopSchedule.classList.add("shop-schedule");

  const shopScheduleTitle = document.createElement("p");
  shopScheduleTitle.innerText = "Timings";
  shopScheduleTitle.classList.add("schedule-title");
  shopSchedule.appendChild(shopScheduleTitle);

  const hoursOfOperation = teaShopDetails["hoursOfOperation"];
  for (const day in hoursOfOperation) {
    const dayTimings = hoursOfOperation[day];
    const dayText = document.createElement("p");
    dayText.innerText = `${day}:------------${dayTimings}`;
    dayText.classList.add("time-details");
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

/***/ "./src/teaBg2.jpg":
/*!************************!*\
  !*** ./src/teaBg2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebd70fa6edeb19bd621a.jpg";

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





document.addEventListener("DOMContentLoaded" || 0, () => {
  const { contentDiv } = (0,_pageLoad__WEBPACK_IMPORTED_MODULE_3__.initializePage)();
  const btns = document.querySelectorAll(".navButton");
  navigation(contentDiv, btns);
});

function navigation(contentDiv, btns) {
  const activationFunctions = [_homePage__WEBPACK_IMPORTED_MODULE_1__["default"], _menuPage__WEBPACK_IMPORTED_MODULE_2__["default"], _contactPage__WEBPACK_IMPORTED_MODULE_0__["default"]];

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      loadRefresher(contentDiv);
      activationFunctions[index](contentDiv);
    });
  });
  btns[0].click();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJKQUEwRDtBQUN0Ryw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMscUdBQStCO0FBQzNFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdB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SztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3QvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0Ly4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vdGVhQmcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJsdXh1cmlvdXNcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJ0YW5nZXJpbmVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEsXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgLS1waW5rOiAjZTMzZTM4O1xuICBmb250LWZhbWlseTogXCJ0YW5nZXJpbmVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDEwcHggc29saWQgbGlnaHRjb3JhbDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5uYXZCYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm5hdkJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLm5hdkJ1dHRvbjpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJlZDtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRlYS1wb3Qge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBtYXJnaW46IDI1cHggMDtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDU2LCA0MywgNDMpO1xuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLnRpdGxlOmhvdmVyIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZWQ7XG59XG5cbi5zdWItaGVybyB7XG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjNweCByZ2IoMzIsIDMxLCAzMSk7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLmludHJvLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInRhbmdlcmluZVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcbn1cbi5tZW51LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwidGFuZ2VyaW5lXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBpbnNldCB2YXIoLS1waW5rKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGJveC1zaGFkb3c6IDAgMCAyMHB4IGxpZ2h0Y29yYWw7ICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIgPiAqIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciBwIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1lbnUtaXRlbS1pbWcge1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4ubWVudS1pdGVtLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLXRpdGxlIHtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggd2hpdGU7XG59XG5cbi5tZW51LWl0ZW0tcHJpY2Uge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1Mik7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IGJsYWNrO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTdweDtcbiAgcmlnaHQ6IC0xMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ubWVudS1pdGVtLWNhZmZlaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgdG9wOiA3NXB4O1xuICBsZWZ0OiAxNSU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NCk7ICovXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0tY2FmZmVpbmUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWVudS1pdGVtLWNhZmZlaW5lLWN1cCB7XG4gIC0tc2l6ZTogNDBweDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcbiAgbWF4LWhlaWdodDogdmFyKC0tc2l6ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZS1jdXAge1xuICAtLXNpemU6IDQycHg7XG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xufVxuXG4ubWVudS1pdGVtLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciA+IC5tZW51LWl0ZW0taW5mbyB7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xufVxuXG4ubWVudS1pdGVtLWluZm8gKiB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNTkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLWluZm8gKiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcbn1cblxuLm1lbnUtaXRlbS1pbmdyZWRpZW50cyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtaXRlbS1pbmdyZWRpZW50czpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAzNSU7XG4gIHRvcDogMjUlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41OTcpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAxNSUgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2xvc2Uge1xuICBjb2xvcjogI2FhYTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogY29udGFjdFBhZ2Ugc3R5bGluZyAgc3RhcnRzIGhlcmUqL1xuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwidGFuZ2VyaW5lXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xufVxuXG4uY29udGFjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZ2FwOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCBpbnNldCB2YXIoLS1waW5rKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzMSk7XG59XG5cbi8qIC5wcm9maWxlIHtcbn0gKi9cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGdhcDogMjBweDtcbn1cblxuLmNvbnRhY3QtaW1nIHtcbiAgLS1zaXplOiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBsaWdodGNvcmFsO1xuICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XG59XG5cbi5jb250YWN0LW5hbWUge1xuICBjb2xvcjogdmFyKC0tcGluayk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG59XG5cbi5jb250YWN0LWRldGFpbHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDMwJSwgbGlnaHRjb3JhbCA3MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNob3AtaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGdhcDogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggaW5zZXQgdmFyKC0tcGluayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MzEpO1xufVxuXG4uc2hvcC1kZXRhaWxzIHtcbiAgY29sb3I6IHZhcigtLXBpbmspO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAzMCUsIGxpZ2h0Y29yYWwgNzAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zaG9wLXNjaGVkdWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBnYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xufVxuXG4uc2NoZWR1bGUtdGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGltZS1kZXRhaWxzIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpb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QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibHV4dXJpb3VzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2x1eHVyaW91c3NjcmlwdC1yZWd1bGFyLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi9sdXh1cmlvdXNzY3JpcHQtcmVndWxhci13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vdGFuZ2VyaW5lLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuL3RhbmdlcmluZS1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaDEsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC0tcGluazogI2UzM2UzODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwidGFuZ2VyaW5lXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3RlYUJnMi5qcGdcXFwiKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJvcmRlcjogMTBweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5uYXZCYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCBibGFjaztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2QnV0dG9uOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmVkO1xcbiAgd2lkdGg6IDEwNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZWEtcG90IHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDcwcHg7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmdiKDU2LCA0MywgNDMpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbn1cXG5cXG4udGl0bGU6aG92ZXIge1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4uc3ViLWhlcm8ge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHggcmdiKDMyLCAzMSwgMzEpO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaW50cm8tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcXG59XFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcInRhbmdlcmluZVxcXCI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxODIsIDE5MywgMC42NDUpO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAyMHB4IGxpZ2h0Y29yYWw7ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyID4gKiB7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJlZDtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciBwIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICB3aWR0aDogMTcwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogNzAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMiU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLXRpdGxlIHtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IHdoaXRlO1xcbn1cXG5cXG4ubWVudS1pdGVtLXByaWNlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUyKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4IGJsYWNrO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5N3B4O1xcbiAgcmlnaHQ6IC0xMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTI4LCAxMjgsIDAuNTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLm1lbnUtaXRlbS1jYWZmZWluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgdG9wOiA3NXB4O1xcbiAgbGVmdDogMTUlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU0KTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciAubWVudS1pdGVtLWNhZmZlaW5lIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0tY2FmZmVpbmUtY3VwIHtcXG4gIC0tc2l6ZTogNDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBtYXgtaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgLm1lbnUtaXRlbS1jYWZmZWluZS1jdXAge1xcbiAgLS1zaXplOiA0MnB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaXplKTtcXG4gIG1heC1oZWlnaHQ6IHZhcigtLXNpemUpO1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIgPiAubWVudS1pdGVtLWluZm8ge1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZm8gKiB7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjU5KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIC5tZW51LWl0ZW0taW5mbyAqIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzk3KTtcXG59XFxuXFxuLm1lbnUtaXRlbS1pbmdyZWRpZW50cyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtLWluZ3JlZGllbnRzOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmVkO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAzNSU7XFxuICB0b3A6IDI1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDEyOCwgMTI4LCAwLjU5Nyk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIGNvbnRhY3RQYWdlIHN0eWxpbmcgIHN0YXJ0cyBoZXJlKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ0YW5nZXJpbmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTgyLCAxOTMsIDAuNjQ1KTtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBpbnNldCB2YXIoLS1waW5rKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MzEpO1xcbn1cXG5cXG4vKiAucHJvZmlsZSB7XFxufSAqL1xcblxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbWcge1xcbiAgLS1zaXplOiAxNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Y29yYWw7XFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMi41cHg7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAzMCUsIGxpZ2h0Y29yYWwgNzAlKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5zaG9wLWluZm8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggaW5zZXQgdmFyKC0tcGluayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKTtcXG59XFxuXFxuLnNob3AtZGV0YWlscyB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAzMCUsIGxpZ2h0Y29yYWwgNzAlKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5zaG9wLXNjaGVkdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IGluc2V0IHZhcigtLXBpbmspO1xcbn1cXG5cXG4uc2NoZWR1bGUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aW1lLWRldGFpbHMge1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2ZpbGVQaWMxIGZyb20gXCIuL3RlYVByb2ZpbGUxLmpwZWdcIjtcbmltcG9ydCBwcm9maWxlUGljMiBmcm9tIFwiLi90ZWFQcm9maWxlMi5qcGVnXCI7XG5pbXBvcnQgcHJvZmlsZVBpYzMgZnJvbSBcIi4vdGVhUHJvZmlsZTMuanBlZ1wiO1xuXG5jb25zdCBjb250YWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWhtZXQgWWlsbWF6XCIsXG4gICAgcG9zaXRpb246IFwiT3duZXJcIixcbiAgICBudW1iZXI6IFwiKzkwIDEyMyA0NTYgNzg5MFwiLFxuICAgIGVtYWlsOiBcImFobWV0QGV4YW1wbGUuY29tXCIsXG4gICAgcHJvZmlsZTogcHJvZmlsZVBpYzEsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNoZWhhbmdpciBEZW1pclwiLFxuICAgIHBvc2l0aW9uOiBcIlRlYSBTcGVjaWFsaXN0XCIsXG4gICAgbnVtYmVyOiBcIis5MCAyMzQgNTY3IDg5MDFcIixcbiAgICBlbWFpbDogXCJjaGVoYW5naXJAZXhhbXBsZS5jb21cIixcbiAgICBwcm9maWxlOiBwcm9maWxlUGljMixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVobWV0IEFyc2xhblwiLFxuICAgIHBvc2l0aW9uOiBcIk1hbmFnZXJcIixcbiAgICBudW1iZXI6IFwiKzkwIDM0NSA2NzggOTAxMlwiLFxuICAgIGVtYWlsOiBcIm1laG1ldEBleGFtcGxlLmNvbVwiLFxuICAgIHByb2ZpbGU6IHByb2ZpbGVQaWMzLFxuICB9LFxuXTtcblxuY29uc3QgdGVhU2hvcERldGFpbHMgPSB7XG4gIG5hbWU6IFwiQm9zcGhvcm91cyBCcmV3c1wiLFxuICBhZGRyZXNzOiBcIjEyMyBUZWEgU3RyZWV0XCIsXG4gIGxvY2F0aW9uOiBcIklzdGFuYnVsLCBUdXJrZXlcIixcbiAgbGFuZGxpbmU6IFwiKzkwIDEyMyA0NTYgNzg5MFwiLFxuICBob3Vyc09mT3BlcmF0aW9uOiB7XG4gICAgTW9uZGF5OiBcIjk6MDAgQU0gLSA2OjAwIFBNXCIsXG4gICAgVHVlc2RheTogXCI5OjAwIEFNIC0gNjowMCBQTVwiLFxuICAgIFdlZG5lc2RheTogXCI5OjAwIEFNIC0gNjowMCBQTVwiLFxuICAgIFRodXJzZGF5OiBcIjk6MDAgQU0gLSA2OjAwIFBNXCIsXG4gICAgRnJpZGF5OiBcIjk6MDAgQU0gLSA2OjAwIFBNXCIsXG4gICAgU2F0dXJkYXk6IFwiMTA6MDAgQU0gLSA0OjAwIFBNXCIsXG4gICAgU3VuZGF5OiBcIkNsb3NlZFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RJdGVtcyA9IFtdO1xuICAvL2Rpdi5jb250YWN0LWNvbnRhaW5lcj5kaXYuc2hvcEluZm8rZGl2LmNvbnRhY3QtaXRlbXMqbj4tLVxuICAvLy0tIChpbWcucHJvZmlsZStwLm5hbWUrcC5wb3NpdGlvbikrKHAubnVtYmVyK3AuZW1haWwpXG4gIC8vcHJvZmlsZSwgbmFtZSwgcG9zaXRpb24sIG51bWJlciAsIGVtYWlsXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9maWxlLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlXCIpO1xuXG4gICAgY29uc3QgY29udGFjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29udGFjdEltZy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWdcIik7XG4gICAgY29udGFjdEltZy5zcmMgPSBjb250YWN0c1tpXS5wcm9maWxlO1xuICAgIGNvbnRhY3RJbWcuYWx0ID0gYFBpY3R1cmUgb2YgJHtjb250YWN0c1tpXS5wb3NpdGlvbn1gO1xuXG4gICAgY29uc3QgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0TmFtZS5pbm5lclRleHQgPSBjb250YWN0c1tpXS5uYW1lO1xuICAgIGNvbnRhY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LW5hbWVcIik7XG5cbiAgICBwcm9maWxlLmFwcGVuZENoaWxkKGNvbnRhY3RJbWcpO1xuICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RQb3NpdGlvbi5pbm5lclRleHQgPSBgUG9zaXRpb246ICR7Y29udGFjdHNbaV0ucG9zaXRpb259YDtcbiAgICBjb250YWN0UG9zaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0TnVtYmVyLmlubmVyVGV4dCA9IGBOdW1iZXI6ICR7Y29udGFjdHNbaV0ubnVtYmVyfWA7XG4gICAgY29udGFjdE51bWJlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdEVtYWlsLmlubmVyVGV4dCA9IGBFbWFpbDogJHtjb250YWN0c1tpXS5lbWFpbH1gO1xuICAgIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kZXRhaWxzXCIpO1xuXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0UG9zaXRpb24pO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlcik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuXG4gICAgY29udGFjdEl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaXRlbVwiKTtcblxuICAgIGNvbnRhY3RJdGVtc1tpXS5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgICBjb250YWN0SXRlbXNbaV0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gIH1cblxuICBjb25zdCBzaG9wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNob3BJbmZvLmNsYXNzTGlzdC5hZGQoXCJzaG9wLWluZm9cIik7XG5cbiAgLy9uYW1lLGFkZHJlc3MsIGxvY2F0aW9uLCBsYW5kbGluZSwgaG91cnNcbiAgZm9yIChjb25zdCBkZXRhaWwgaW4gdGVhU2hvcERldGFpbHMpIHtcbiAgICBpZiAoZGV0YWlsID09PSBcImhvdXJzT2ZPcGVyYXRpb25cIikgY29udGludWU7XG4gICAgY29uc3Qgc2hvcERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzaG9wRGV0YWlscy5pbm5lclRleHQgPSBgJHtkZXRhaWx9OiAke3RlYVNob3BEZXRhaWxzW2RldGFpbF19YDtcbiAgICBzaG9wRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwic2hvcC1kZXRhaWxzXCIpO1xuICAgIHNob3BJbmZvLmFwcGVuZENoaWxkKHNob3BEZXRhaWxzKTtcbiAgfVxuICBjb25zdCBzaG9wU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaG9wU2NoZWR1bGUuY2xhc3NMaXN0LmFkZChcInNob3Atc2NoZWR1bGVcIik7XG5cbiAgY29uc3Qgc2hvcFNjaGVkdWxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2hvcFNjaGVkdWxlVGl0bGUuaW5uZXJUZXh0ID0gXCJUaW1pbmdzXCI7XG4gIHNob3BTY2hlZHVsZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzY2hlZHVsZS10aXRsZVwiKTtcbiAgc2hvcFNjaGVkdWxlLmFwcGVuZENoaWxkKHNob3BTY2hlZHVsZVRpdGxlKTtcblxuICBjb25zdCBob3Vyc09mT3BlcmF0aW9uID0gdGVhU2hvcERldGFpbHNbXCJob3Vyc09mT3BlcmF0aW9uXCJdO1xuICBmb3IgKGNvbnN0IGRheSBpbiBob3Vyc09mT3BlcmF0aW9uKSB7XG4gICAgY29uc3QgZGF5VGltaW5ncyA9IGhvdXJzT2ZPcGVyYXRpb25bZGF5XTtcbiAgICBjb25zdCBkYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF5VGV4dC5pbm5lclRleHQgPSBgJHtkYXl9Oi0tLS0tLS0tLS0tLSR7ZGF5VGltaW5nc31gO1xuICAgIGRheVRleHQuY2xhc3NMaXN0LmFkZChcInRpbWUtZGV0YWlsc1wiKTtcbiAgICBzaG9wU2NoZWR1bGUuYXBwZW5kQ2hpbGQoZGF5VGV4dCk7XG4gIH1cbiAgc2hvcEluZm8uYXBwZW5kQ2hpbGQoc2hvcFNjaGVkdWxlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhY3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RJdGVtc1tpXSk7XG4gIH1cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzaG9wSW5mbyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1jb250YWluZXJcIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudEludHJvID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgcmVzdGF1cmFudEludHJvW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIH1cbiAgcmVzdGF1cmFudEludHJvWzBdLmNsYXNzTGlzdC5hZGQoXCJzdWItaGVyb1wiKTtcbiAgcmVzdGF1cmFudEludHJvWzBdLmlubmVyVGV4dCA9XG4gICAgXCJCb3NwaG9ydXMgQnJld3M6IFdoZXJlIEN1bHR1cmVzIFVuaXRlIGluIGEgQ3VwIG9mIFRlYVwiO1xuICByZXN0YXVyYW50SW50cm9bMV0uaW5uZXJUZXh0ID1cbiAgICBcIkF0IEJvc3Bob3J1cyBCcmV3cywgb3VyIHBhc3Npb24gZm9yIHRlYSBrbm93cyBubyBib3JkZXJzLiBXZSBiZWxpZXZlIHRoYXQgdGVhIGlzIG5vdCBqdXN0IGEgYmV2ZXJhZ2U7IGl0J3MgYSBqb3VybmV5IHRoYXQgdHJhbnNjZW5kcyBjdWx0dXJlcyBhbmQgYnJpbmdzIHBlb3BsZSB0b2dldGhlci4gT3VyIHRlYWhvdXNlIGlzIGEgcGxhY2Ugd2hlcmUgdGVhIGVudGh1c2lhc3RzIGZyb20gYWxsIGNvcm5lcnMgb2YgdGhlIHdvcmxkIGNhbiBjb21lIHRvIHNhdm9yIHRoZSByaWNoIHRhcGVzdHJ5IG9mIGZsYXZvcnMgYW5kIHRyYWRpdGlvbnMgdGhhdCB0ZWEgaGFzIHRvIG9mZmVyLlwiO1xuICByZXN0YXVyYW50SW50cm9bMl0uaW5uZXJUZXh0ID1cbiAgICBcIk91ciBjb21taXRtZW50IHRvIHNlcnZpbmcgdGVhcyBmcm9tIGFsbCBjdWx0dXJlcyBoYXMgbWFkZSB1cyBhIGJlbG92ZWQgZGVzdGluYXRpb24gZm9yIHRlYSBsb3ZlcnMgYW5kIHRyYXZlbGVycyBhbGlrZS4gV2l0aCBhIGNhcmVmdWxseSBjdXJhdGVkIHNlbGVjdGlvbiBvZiB0ZWFzIHNvdXJjZWQgZnJvbSB2YXJpb3VzIHJlZ2lvbnMsIHdlIGludml0ZSB5b3UgdG8gZW1iYXJrIG9uIGEgZ2xvYmFsIHRlYS10YXN0aW5nIGFkdmVudHVyZSB3aXRob3V0IGV2ZXIgbGVhdmluZyB5b3VyIHNlYXQuXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBpbnRyb0NvbnRhaW5lci5hcHBlbmQocmVzdGF1cmFudEludHJvW2ldKTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCB0ZWFJbWFnZTcgZnJvbSBcIi4vY2hhaVRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UxIGZyb20gXCIuL2RhcmplZWxpbmdUZWEuanBlZ1wiO1xuaW1wb3J0IHRlYUltYWdlNSBmcm9tIFwiLi9lYXJsR3JleVRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UxMCBmcm9tIFwiLi9oaWJpc2N1c0hlcmJhbFRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2U2IGZyb20gXCIuL2phc21pbmVQZWFybFRlYS5qcGVnXCI7XG5pbXBvcnQgdGVhSW1hZ2UyIGZyb20gXCIuL21hdGNoYUdyZWVuVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTMgZnJvbSBcIi4vb29sb25nVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTggZnJvbSBcIi4vcHUtZXJoVGVhLmpwZWdcIjtcbmltcG9ydCB0ZWFJbWFnZTQgZnJvbSBcIi4vcm9vaWJvc1RlYS5qcGVnXCI7XG5pbXBvcnQgdGVhY3VwIGZyb20gXCIuL3RlYWN1cC5wbmdcIjtcbmltcG9ydCB0ZWFJbWFnZTkgZnJvbSBcIi4vd2hpdGVQZW9ueVRlYS5qcGVnXCI7XG5cbmNvbnN0IHRlYU9wdGlvbnMgPSBbXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlMSxcbiAgICB0aXRsZTogXCJEYXJqZWVsaW5nIFRlYVwiLFxuICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgb3JpZ2luOiBcIkRhcmplZWxpbmcsIEluZGlhXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIktub3duIGFzIHRoZSAnQ2hhbXBhZ25lIG9mIFRlYXMnLCB3aXRoIGEgZGVsaWNhdGUgYW5kIGZydWl0eSBmbGF2b3IuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBEYXJqZWVsaW5nIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMixcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2UyLFxuICAgIHRpdGxlOiBcIk1hdGNoYSBHcmVlbiBUZWFcIixcbiAgICBwcmljZTogXCIkOS45OVwiLFxuICAgIG9yaWdpbjogXCJKYXBhblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHZpYnJhbnQgZ3JlZW4gdGVhIHBvd2RlciB3aXRoIGEgcmljaCwgdW1hbWkgZmxhdm9yIGFuZCBoaWdoIGFudGlveGlkYW50cy5cIixcbiAgICBpbmdyZWRpZW50czogXCIxMDAlIE1hdGNoYSBHcmVlbiBUZWEgUG93ZGVyXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDQsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlMyxcbiAgICB0aXRsZTogXCJPb2xvbmcgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDYuNDlcIixcbiAgICBvcmlnaW46IFwiVGFpd2FuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2VtaS1mZXJtZW50ZWQgdGVhIHdpdGggYSBzbW9vdGgsIGZsb3JhbCB0YXN0ZSBhbmQgdW5pcXVlIGFyb21hLlwiLFxuICAgIGluZ3JlZGllbnRzOiBcIjEwMCUgT29sb25nIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U0LFxuICAgIHRpdGxlOiBcIlJvb2lib3MgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDUuOTlcIixcbiAgICBvcmlnaW46IFwiU291dGggQWZyaWNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBjYWZmZWluZS1mcmVlIGhlcmJhbCB0ZWEgd2l0aCBhIHN3ZWV0IGFuZCBudXR0eSBmbGF2b3IuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBSb29pYm9zIFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMCxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U1LFxuICAgIHRpdGxlOiBcIkVhcmwgR3JleSBUZWFcIixcbiAgICBwcmljZTogXCIkNi45OVwiLFxuICAgIG9yaWdpbjogXCJVbml0ZWQgS2luZ2RvbVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNsYXNzaWMgYmxhY2sgdGVhIGluZnVzZWQgd2l0aCBiZXJnYW1vdCBvaWwgZm9yIGEgY2l0cnVzeSBhcm9tYS5cIixcbiAgICBpbmdyZWRpZW50czogXCJCbGFjayBUZWEgTGVhdmVzLCBCZXJnYW1vdCBPaWxcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U2LFxuICAgIHRpdGxlOiBcIkphc21pbmUgUGVhcmwgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDguOTlcIixcbiAgICBvcmlnaW46IFwiQ2hpbmFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR3JlZW4gdGVhIGxlYXZlcyByb2xsZWQgaW50byBwZWFybHMsIHNjZW50ZWQgd2l0aCBqYXNtaW5lIGZsb3dlcnMuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiR3JlZW4gVGVhIExlYXZlcywgSmFzbWluZSBGbG93ZXJzXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDIsXG4gIH0sXG4gIHtcbiAgICBzcmM6IHRlYUltYWdlNyxcbiAgICB0aXRsZTogXCJDaGFpIFRlYVwiLFxuICAgIHByaWNlOiBcIiQ2LjQ5XCIsXG4gICAgb3JpZ2luOiBcIkluZGlhXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc3BpY2VkIGJsYWNrIHRlYSB3aXRoIG5vdGVzIG9mIGNpbm5hbW9uLCBjYXJkYW1vbSwgYW5kIGNsb3Zlcy5cIixcbiAgICBpbmdyZWRpZW50czogXCJCbGFjayBUZWEgTGVhdmVzLCBTcGljZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMyxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2U4LFxuICAgIHRpdGxlOiBcIlB1LWVyaCBUZWFcIixcbiAgICBwcmljZTogXCIkMTAuOTlcIixcbiAgICBvcmlnaW46IFwiWXVubmFuLCBDaGluYVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGZlcm1lbnRlZCB0ZWEgd2l0aCBhIGRlZXAsIGVhcnRoeSBmbGF2b3IgYW5kIGNvbXBsZXggYXJvbWEuXCIsXG4gICAgaW5ncmVkaWVudHM6IFwiMTAwJSBQdS1lcmggVGVhIExlYXZlc1wiLFxuICAgIGNhZmZlaW5lX2xldmVsOiA0LFxuICB9LFxuICB7XG4gICAgc3JjOiB0ZWFJbWFnZTksXG4gICAgdGl0bGU6IFwiV2hpdGUgUGVvbnkgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDcuNDlcIixcbiAgICBvcmlnaW46IFwiRnVqaWFuLCBDaGluYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZGVsaWNhdGUgd2hpdGUgdGVhIHdpdGggYSBzd2VldCBhbmQgZmxvcmFsIGNoYXJhY3Rlci5cIixcbiAgICBpbmdyZWRpZW50czogXCIxMDAlIFdoaXRlIFBlb255IFRlYSBMZWF2ZXNcIixcbiAgICBjYWZmZWluZV9sZXZlbDogMSxcbiAgfSxcbiAge1xuICAgIHNyYzogdGVhSW1hZ2UxMCxcbiAgICB0aXRsZTogXCJIaWJpc2N1cyBIZXJiYWwgVGVhXCIsXG4gICAgcHJpY2U6IFwiJDUuOTlcIixcbiAgICBvcmlnaW46IFwiRWd5cHRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZpYnJhbnQgcmVkIGhlcmJhbCB0ZWEgd2l0aCBhIHRhcnQgYW5kIGZydWl0eSB0YXN0ZS5cIixcbiAgICBpbmdyZWRpZW50czogXCJEcmllZCBIaWJpc2N1cyBGbG93ZXJzXCIsXG4gICAgY2FmZmVpbmVfbGV2ZWw6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UoY29udGVudERpdikge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWFPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWltZ1wiKTtcbiAgICBtZW51SW1nLnNyYyA9IHRlYU9wdGlvbnNbaV0uc3JjO1xuICAgIG1lbnVJbWcuYWx0ID0gdGVhT3B0aW9uc1tpXS50aXRsZTtcblxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2ldLnRpdGxlO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLXRpdGxlXCIpO1xuXG4gICAgLy9wcmljZSwgY2FmZmVpbmUgbGV2ZWwsIE9yaWdpbiwgRGVzY3JpcHRpb24sIEluZ3JlZGllbnRzXG4gICAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudVByaWNlLmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaV0ucHJpY2U7XG4gICAgbWVudVByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tcHJpY2VcIik7XG4gICAgLy9uZWVkIHRvIHNvbHZlIHRoaXMgcHN1ZWRvIGNsYXNzIHNlbGVjdG9yIG5vdCB3b3JraW5nIGluIEpTIGFub21hbHkhXG4gICAgY29uc3QgY2FmZmVpbmVMZXZlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FmZmVpbmVMZXZlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNhZmZlaW5lXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVhT3B0aW9uc1tpXS5jYWZmZWluZV9sZXZlbDsgaisrKSB7XG4gICAgICBjb25zdCB0ZWFDdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgdGVhQ3VwLnNyYyA9IHRlYWN1cDtcbiAgICAgIHRlYUN1cC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNhZmZlaW5lLWN1cFwiKTtcbiAgICAgIGNhZmZlaW5lTGV2ZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGVhQ3VwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmZvXCIpO1xuXG4gICAgY29uc3QgbWVudU9yaWdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVPcmlnaW4uaW5uZXJUZXh0ID0gdGVhT3B0aW9uc1tpXS5vcmlnaW47XG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRlYU9wdGlvbnNbaV0uZGVzY3JpcHRpb247XG4gICAgY29uc3QgbWVudUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51SW5ncmVkaWVudHMuaW5uZXJUZXh0ID0gYEluZ3JlZGllbnRzYDtcbiAgICBtZW51SW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmdyZWRpZW50c1wiKTsgLy9uZWVkIHRvIGFkZCBpbmdyZWRpZW50cyBtb2RhbFxuXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudU9yaWdpbik7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChtZW51SW5ncmVkaWVudHMpO1xuXG4gICAgbWVudUl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIG1lbnVJdGVtc1tpXS5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQobWVudVByaWNlKTtcbiAgICBtZW51SXRlbXNbaV0uYXBwZW5kQ2hpbGQoY2FmZmVpbmVMZXZlbENvbnRhaW5lcik7XG4gICAgbWVudUl0ZW1zW2ldLmFwcGVuZENoaWxkKG1lbnVJbmZvKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW1zW2ldKTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICBjcmVhdGVNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIk1vZGFsIFRpdGxlXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcblxuICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9kYWxUZXh0LmlubmVyVGV4dCA9IFwiVGhpcyBpcyBhIHNpbXBsZSBtb2RhbCBleGFtcGxlLlwiO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taW5ncmVkaWVudHNcIik7XG5cbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuTW9kYWwoKTtcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgICAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2luZGV4XS50aXRsZTtcbiAgICAgIG1vZGFsVGV4dC5pbm5lclRleHQgPSB0ZWFPcHRpb25zW2luZGV4XS5pbmdyZWRpZW50cztcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCByZXN0YXVyYW50QmcgZnJvbSBcIi4vcmVzdGF1cmFudEJnLmpwZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgdGVhUG90SW1hZ2VTcmMgZnJvbSBcIi4vdGVhcG90LnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgYWRkU3R5bGVzKGJvZHksIGNvbnRlbnREaXYpO1xuXG4gIGxvYWRUaXRsZShjb250ZW50RGl2KTtcbiAgaW5pdGlhbGl6ZU5hdmJhcihjb250ZW50RGl2KTtcbiAgbmF2aWdhdGlvbihjb250ZW50RGl2KTtcbiAgbG9hZEhvbWVQYWdlKGNvbnRlbnREaXYpO1xuICByZXR1cm4geyBib2R5LCBjb250ZW50RGl2IH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlcyhib2R5LCBjb250ZW50RGl2KSB7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHlcIik7XG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnREaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3RhdXJhbnRCZ30pYDtcbn1cblxuZnVuY3Rpb24gbG9hZFRpdGxlKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IFwiQm9zcGhvcm91cyBCcmV3c1wiO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTmF2YmFyKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG5cbiAgY29uc3QgbmF2QnV0dG9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIG5hdkJ1dHRvbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5hdkJ1dHRvbnNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcbiAgfVxuICBuYXZCdXR0b25zWzBdLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICBuYXZCdXR0b25zWzFdLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICBuYXZCdXR0b25zWzJdLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbnNbaV0pO1xuICB9XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdkJhclwiKTtcbiAgY29uc3QgdGVhUG90SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHRlYVBvdEltYWdlLnNyYyA9IHRlYVBvdEltYWdlU3JjO1xuICB0ZWFQb3RJbWFnZS5hbHQgPSBcIlRlYXBvdFwiO1xuICB0ZWFQb3RJbWFnZS5jbGFzc05hbWUgPSBcInRlYS1wb3RcIjtcblxuICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChvdGhlckJ0bikgPT4gb3RoZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgIC8vdGVhcG90IHBvc2l0aW9uaW5nIGxvZ2ljXG4gICAgICBjb25zdCBidG5SZWN0ID0gYnRuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IG5hdkJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGxlZnRQb3NpdGlvbiA9IGJ0blJlY3QucmlnaHQgLSBjb250YWluZXJSZWN0LmxlZnQgLSAzMDtcbiAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gYnRuUmVjdC50b3AgLSBjb250YWluZXJSZWN0LnRvcCAtIDQwO1xuICAgICAgdGVhUG90SW1hZ2Uuc3R5bGUubGVmdCA9IGxlZnRQb3NpdGlvbiArIFwicHhcIjtcbiAgICAgIHRlYVBvdEltYWdlLnN0eWxlLnRvcCA9IHRvcFBvc2l0aW9uICsgXCJweFwiO1xuXG4gICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGVhUG90SW1hZ2UpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51UGFnZSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVBhZ2UgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiIHx8IFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHsgY29udGVudERpdiB9ID0gaW5pdGlhbGl6ZVBhZ2UoKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xuICBuYXZpZ2F0aW9uKGNvbnRlbnREaXYsIGJ0bnMpO1xufSk7XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb24oY29udGVudERpdiwgYnRucykge1xuICBjb25zdCBhY3RpdmF0aW9uRnVuY3Rpb25zID0gW2xvYWRIb21lUGFnZSwgbG9hZE1lbnVQYWdlLCBsb2FkQ29udGFjdFBhZ2VdO1xuXG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9hZFJlZnJlc2hlcihjb250ZW50RGl2KTtcbiAgICAgIGFjdGl2YXRpb25GdW5jdGlvbnNbaW5kZXhdKGNvbnRlbnREaXYpO1xuICAgIH0pO1xuICB9KTtcbiAgYnRuc1swXS5jbGljaygpO1xufVxuXG5mdW5jdGlvbiBsb2FkUmVmcmVzaGVyKGNvbnRlbnREaXYpIHtcbiAgY29uc3QgcGFnZUNvbnRlbnQgPSBjb250ZW50RGl2Lmxhc3RDaGlsZDtcblxuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCItY29udGFpbmVyXCIsIFwiaVwiKTtcbiAgY29uc3QgaGFzTWF0Y2hpbmdDbGFzcyA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnQuY2xhc3NMaXN0KS5zb21lKChjbGFzc05hbWUpID0+XG4gICAgcmVnZXgudGVzdChjbGFzc05hbWUpXG4gICk7XG5cbiAgaWYgKHBhZ2VDb250ZW50ICYmIHBhZ2VDb250ZW50LnRhZ05hbWUgPT09IFwiRElWXCIgJiYgaGFzTWF0Y2hpbmdDbGFzcykge1xuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQocGFnZUNvbnRlbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=