/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\nmain {\r\n    max-width: 1000px;\r\n    margin-inline: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    height: 100vh;\r\n    align-items: center;\r\n    padding-top: 50px;\r\n    \r\n\r\n    #ship-harbour {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        gap: 10px;\r\n        \r\n\r\n        #fleet {\r\n            display: flex;\r\n            gap: 10px;\r\n\r\n            button {\r\n                padding: 10px;\r\n                background-color: lightgray;\r\n                border: none;\r\n                cursor: pointer;\r\n            }\r\n\r\n        }\r\n        #rotate-btn {\r\n            padding: 10px;\r\n            cursor: pointer;\r\n            background-color: #74e7dc;\r\n            border: none;\r\n        }\r\n\r\n    }\r\n\r\n    .boards {\r\n        display: flex;\r\n        gap: 20px;\r\n    }\r\n\r\n    #human-board,\r\n    #computer-board {\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 40px);\r\n        grid-template-rows: repeat(10, 40px);\r\n\r\n        .cell {\r\n            background-color: lightblue;\r\n            border: 1px solid rgb(128, 149, 158);\r\n        }\r\n\r\n        .cell.ship {\r\n            background-color: #cccccc;\r\n        }\r\n        .cell.miss {\r\n            background-color: rgb(124, 243, 154);\r\n        }\r\n        .cell.hit {\r\n            background-color: rgb(245, 76, 76);\r\n        }\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contorller/controller.js"
/*!**************************************!*\
  !*** ./src/contorller/controller.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player.js */ \"./src/factories/player.js\");\n\r\n\r\nfunction startGame() {\r\n    const human = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_0__.player)(\"real\");\r\n    const computer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_0__.player)(\"computer\");\r\n\r\n    const shipsLength = [5, 4, 3, 3, 2];\r\n\r\n    shipsLength.forEach(length => {\r\n        let placed = false;\r\n        while (!placed) {\r\n            const randomX = Math.floor(Math.random() * 10);\r\n            const randomY = Math.floor(Math.random() * 10);\r\n            const randomAxis = Math.random() < 0.5 ? \"x\" : \"y\";\r\n\r\n            if (computer.gameboard.placeShip(\r\n                [randomX, randomY],\r\n                length,\r\n                randomAxis\r\n            )) {\r\n                placed = true;\r\n            }\r\n        }\r\n    })\r\n\r\n    return {\r\n        human,\r\n        computer\r\n    }\r\n}\n\n//# sourceURL=webpack://top-battleship/./src/contorller/controller.js?\n}");

/***/ },

/***/ "./src/factories/gameboard.js"
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/factories/ship.js\");\n\r\nfunction gameboard() {\r\n    const areArraysEqual = (arr1, arr2) => {\r\n        if (arr1.length !== arr2.length) {\r\n            return false;\r\n        }\r\n        for (let i = 0; i < arr1.length; i++) {\r\n            if (arr1[i] !== arr2[i]) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    let shipsWithPositions = [];\r\n    const placeShip = (coordinates, length, axis = \"x\") => {\r\n        const myShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\r\n        let allCoordinates = [];\r\n        for (let i = 0; i < length; i++) {\r\n            if (axis === \"x\") {\r\n                allCoordinates.push(\r\n                    [coordinates[0] + i, coordinates[1]]\r\n                )\r\n            } else if (axis === \"y\") {\r\n                allCoordinates.push(\r\n                    [coordinates[0], coordinates[1] + i]\r\n                )\r\n            }\r\n        }\r\n        for (let coordinate of allCoordinates) {\r\n            if (\r\n                coordinate[0] < 0 ||\r\n                coordinate[0] >= 10 ||\r\n                coordinate[1] < 0 ||\r\n                coordinate[1] >= 10\r\n            ) return false;\r\n\r\n            for (let ship of shipsWithPositions) {\r\n                for (let otherShipCoordinate of ship.shipCoordinates) {\r\n                    if (areArraysEqual(coordinate, otherShipCoordinate)) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        const newShipEntry = {\r\n            myShip,\r\n            shipLength: myShip.shipLength,\r\n            shipCoordinates: allCoordinates\r\n        };\r\n        shipsWithPositions.push(newShipEntry);\r\n        return true;\r\n    }\r\n    let missingShots = [];\r\n    let successfulShots = [];\r\n    const receiveAttack = (attackCoordinates) => {\r\n        for (let ship of shipsWithPositions) {\r\n            for (let coordinate of ship.shipCoordinates) {\r\n                if (areArraysEqual(coordinate, attackCoordinates)) {\r\n                    ship.myShip.hit();\r\n                    successfulShots.push(attackCoordinates);\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        missingShots.push(attackCoordinates);\r\n        return false;\r\n    }\r\n\r\n    const allShipsSunk = () => {\r\n        for (let ship of shipsWithPositions) {\r\n            if (!ship.myShip.isSunk()) {\r\n                return false\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    return {\r\n        placeShip,\r\n        receiveAttack,\r\n        shipsWithPositions,\r\n        successfulShots,\r\n        missingShots,\r\n        allShipsSunk,\r\n        areArraysEqual\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://top-battleship/./src/factories/gameboard.js?\n}");

/***/ },

/***/ "./src/factories/player.js"
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/factories/gameboard.js\");\n\r\n\r\nfunction player(playerType) {\r\n    const type = playerType;\r\n    return {\r\n        type,\r\n        gameboard: (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    }\r\n}\n\n//# sourceURL=webpack://top-battleship/./src/factories/player.js?\n}");

/***/ },

/***/ "./src/factories/ship.js"
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ship(length = 1) {\r\n    let shipHitTimes = 0;\r\n    const shipLength = () => length;\r\n    const timesHit = () => shipHitTimes;\r\n    const hit = () => shipHitTimes++;\r\n    const isSunk = () => shipHitTimes >= shipLength();\r\n\r\n    return {\r\n        shipLength,\r\n        timesHit,\r\n        hit,\r\n        isSunk\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://top-battleship/./src/factories/ship.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contorller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contorller/controller.js */ \"./src/contorller/controller.js\");\n/* harmony import */ var _ui_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dom.js */ \"./src/ui/dom.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    let players = (0,_contorller_controller_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\r\n    let XrandomNumber;\r\n    let YrandomNumber;\r\n    let isDuplicate = false;\r\n\r\n    let axis = \"x\";\r\n    let shipLengths = [4, 5, 3, 3, 2];\r\n    let currentShipIndex = 0;\r\n\r\n    let isPlacementPhase = true;\r\n\r\n    const popupDialog = document.querySelector(\"#winnerDialog\");\r\n    const announceWinner = document.querySelector(\"#announceWinner\");\r\n    const playAgainButton = document.querySelector(\"#playAgainButton\");\r\n\r\n    let rotateAxis = document.getElementById(\"rotate-btn\");\r\n\r\n    const renderUI = () => {\r\n        (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(\r\n            \"human-board\",\r\n            players.human.gameboard,\r\n            isPlacementPhase ? handlePlacement : null,\r\n        )\r\n        ;(0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(\r\n            \"computer-board\",\r\n            players.computer.gameboard,\r\n            handleAttack\r\n        )\r\n    }\r\n\r\n    const handleAttack = (coordinates) => {\r\n        players.computer.gameboard.receiveAttack(coordinates);\r\n        renderUI();\r\n        if (players.computer.gameboard.allShipsSunk()) {\r\n            \r\n            popupDialog.showModal();\r\n            announceWinner.textContent = \"Human wins!\";\r\n            return;\r\n        }\r\n\r\n        do {\r\n            XrandomNumber = Math.floor(Math.random() * 10);\r\n            YrandomNumber = Math.floor(Math.random() * 10);\r\n            let inMissingShots = players.human.gameboard.missingShots.some(missArray => {\r\n                let condition = players.human.gameboard.areArraysEqual(missArray, [XrandomNumber, YrandomNumber]);\r\n                return condition;\r\n            })\r\n            let inSuccessfulShots = players.human.gameboard.successfulShots.some(hitArray => {\r\n                let condition = players.human.gameboard.areArraysEqual(hitArray, [XrandomNumber, YrandomNumber]);\r\n                return condition;\r\n            })\r\n            isDuplicate = inMissingShots || inSuccessfulShots;\r\n        } while (isDuplicate);\r\n\r\n        players.human.gameboard.receiveAttack([XrandomNumber, YrandomNumber]);\r\n        renderUI();\r\n        if (players.human.gameboard.allShipsSunk()) {\r\n            \r\n            popupDialog.showModal();\r\n            announceWinner.textContent = \"Computer wins!\";\r\n            return;\r\n        }\r\n    }\r\n\r\n    playAgainButton.addEventListener(\"click\", () => {\r\n        players = (0,_contorller_controller_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\r\n        currentShipIndex = 0;\r\n        isPlacementPhase = true;\r\n        axis = \"x\";\r\n        rotateAxis.textContent = \"Rotate Axis X\";\r\n\r\n        let shipHarbour = document.getElementById(\"ship-harbour\");\r\n        shipHarbour.style.display = \"flex\";\r\n        let computerBoard = document.getElementById(\"computer-board\");\r\n        computerBoard.style.display = \"none\";\r\n\r\n        let fleetChildren = document.getElementById(\"fleet\").children;\r\n        for (let child of fleetChildren) child.classList.remove(\"active\");\r\n        fleetChildren[0].classList.add(\"active\");\r\n\r\n        popupDialog.close();\r\n        renderUI();\r\n    })\r\n\r\n    rotateAxis.addEventListener(\"click\", () => {\r\n        if (axis === \"x\") {\r\n            axis = \"y\";\r\n            rotateAxis.textContent = \"Rotate Axis Y\"\r\n        } else {\r\n            axis = \"x\";\r\n            rotateAxis.textContent = \"Rotate Axis X\";\r\n        }\r\n    })\r\n\r\n    const handlePlacement = (coordinates) => {\r\n        if (players.human.gameboard.placeShip(\r\n            coordinates,\r\n            shipLengths[currentShipIndex],\r\n            axis\r\n        )) {\r\n            let fleet = document.getElementById(\"fleet\");\r\n            let fleetChildren = fleet.children;\r\n            fleetChildren[currentShipIndex].classList.remove(\"active\");\r\n            currentShipIndex++;\r\n\r\n            if (currentShipIndex < 5) {\r\n                fleetChildren[currentShipIndex].classList.remove(\"active\");\r\n            }\r\n\r\n            if (currentShipIndex === 5) {\r\n                let shipHarbour = document.getElementById(\"ship-harbour\");\r\n                shipHarbour.style.display = \"none\";\r\n                let computerBoard = document.getElementById(\"computer-board\");\r\n                setTimeout(() => {\r\n                    computerBoard.style.display = \"grid\";\r\n                }, 2000);\r\n\r\n                isPlacementPhase = false;\r\n            }\r\n\r\n            renderUI();\r\n        }\r\n    }\r\n\r\n    renderUI();\r\n}\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?\n}");

/***/ },

/***/ "./src/ui/dom.js"
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction renderBoard(htmlId, gameboardObject, clickCallback) {\r\n    const container = document.getElementById(htmlId);\r\n    container.innerHTML = \"\";\r\n    for (let i = 0; i < 10; i++) {\r\n        for (let j = 0; j < 10; j++) {\r\n            const div = document.createElement(\"div\");\r\n            div.classList.add(\"cell\");\r\n            if (!htmlId.includes(\"computer\")) {\r\n                gameboardObject.shipsWithPositions.forEach(ship => {\r\n                    ship.shipCoordinates.forEach(coordinate => {\r\n                        if (gameboardObject.areArraysEqual(coordinate, [j, i])) {\r\n                            div.classList.add(\"ship\");\r\n                        }\r\n                    })\r\n                })\r\n            }\r\n            if (clickCallback) {\r\n                div.addEventListener(\"click\", function() {\r\n                    clickCallback([j, i])\r\n                })\r\n            }\r\n            gameboardObject.missingShots.forEach(miss => {\r\n                if (gameboardObject.areArraysEqual(miss, [j, i])) {\r\n                    div.classList.add(\"miss\");\r\n                }\r\n            })\r\n            gameboardObject.successfulShots.forEach(hit => {\r\n                if (gameboardObject.areArraysEqual(hit, [j, i])) {\r\n                    div.classList.add(\"hit\")\r\n                }\r\n            })\r\n            container.appendChild(div);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://top-battleship/./src/ui/dom.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;