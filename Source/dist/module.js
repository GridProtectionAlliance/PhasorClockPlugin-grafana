define(["@grafana/data","@grafana/ui","emotion","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./PhasorClockDataPanel.tsx":
/*!**********************************!*\
  !*** ./PhasorClockDataPanel.tsx ***!
  \**********************************/
/*! exports provided: PhasorClockPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhasorClockPanel", function() { return PhasorClockPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);





var PhasorClockPanel = function PhasorClockPanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height,
      fieldConfig = _a.fieldConfig; //const theme = useTheme();

  var styles = getStyles();

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([0, 1]), 2),
      domain = _b[0],
      setDomain = _b[1];

  var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2),
      circleRadius = _c[0],
      setCircleRadius = _c[1];

  var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2),
      lineAngle = _d[0],
      setLineAngle = _d[1];

  var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2),
      phasors = _e[0],
      setPhasors = _e[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var radii = [];

    for (var r = options.MagStart; r < domain[1]; r = r + options.MagStep) {
      radii.push(r);
    }

    setCircleRadius(radii);
  }, [options.MagStart, options.MagStep, domain]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var angles = [];
    var step = 360.0 / options.AngleSegments;

    for (var r = 0; r < 360.0; r = r + step) {
      angles.push(r);
    }

    setLineAngle(angles);
  }, [options.AngleSegments]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var m = 0;
    phasors.forEach(function (p) {
      if (p.Mag > m) m = p.Mag;
    });
    setDomain([0, Math.max(options.Nominal, m)]);
  }, [phasors, options.Nominal]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (data.state != 'Done') return;
    console.log(fieldConfig);
    console.log(data);
    var magnitudes = [];
    var phases = [];
    var PhasorStyle = [];

    if (options.magRef == "All") {
      magnitudes = data.series.map(function (d) {
        var valueField = d.fields.find(function (field) {
          return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
        });
        if (valueField == undefined) return 0;
        return valueField === null || valueField === void 0 ? void 0 : valueField.values.get(0);
      });
    } else {
      magnitudes = data.series.filter(function (f) {
        return f.refId == options.magRef;
      }).map(function (d) {
        var valueField = d.fields.find(function (field) {
          return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
        });
        return valueField === null || valueField === void 0 ? void 0 : valueField.values.get(0);
      });
    }

    if (options.stylingRef == 'mag' && options.magRef == "All") PhasorStyle = data.series.map(function (d) {
      var _a, _b;

      var valueField = d.fields.find(function (field) {
        return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
      });
      if (valueField == undefined) return {
        Size: 0,
        Color: "#ffffff"
      };
      var display = (_a = valueField === null || valueField === void 0 ? void 0 : valueField.display) !== null && _a !== void 0 ? _a : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
        field: valueField
      });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: (_b = display(valueField.values.get(0)).color) !== null && _b !== void 0 ? _b : "#ffffff"
      };
    });else if (options.stylingRef == 'mag') PhasorStyle = data.series.filter(function (f) {
      return f.refId == options.magRef;
    }).map(function (d) {
      var _a, _b;

      var valueField = d.fields.find(function (field) {
        return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
      });
      if (valueField == undefined) return {
        Size: 0,
        Color: "#ffffff"
      };
      var display = (_a = valueField === null || valueField === void 0 ? void 0 : valueField.display) !== null && _a !== void 0 ? _a : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
        field: valueField
      });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: (_b = display(valueField.values.get(0)).color) !== null && _b !== void 0 ? _b : "#ffffff"
      };
    });

    if (options.phasorRef == "All") {
      phases = data.series.map(function (d) {
        var valueField = d.fields.find(function (field) {
          return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
        });
        return valueField === null || valueField === void 0 ? void 0 : valueField.values.get(0);
      });
    } else {
      phases = data.series.filter(function (f) {
        return f.refId == options.phasorRef;
      }).map(function (d) {
        var valueField = d.fields.find(function (field) {
          return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
        });
        return valueField === null || valueField === void 0 ? void 0 : valueField.values.get(0);
      });
    }

    if (options.stylingRef == 'phase' && options.phasorRef == "All") PhasorStyle = data.series.map(function (d) {
      var _a, _b;

      var valueField = d.fields.find(function (field) {
        return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
      });
      if (valueField == undefined) return {
        Size: 0,
        Color: "#ffffff"
      };
      var display = (_a = valueField === null || valueField === void 0 ? void 0 : valueField.display) !== null && _a !== void 0 ? _a : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
        field: valueField
      });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: (_b = display(valueField.values.get(0)).color) !== null && _b !== void 0 ? _b : "#ffffff"
      };
    });else if (options.stylingRef == 'phase') PhasorStyle = data.series.filter(function (f) {
      return f.refId == options.phasorRef;
    }).map(function (d) {
      var _a, _b;

      var valueField = d.fields.find(function (field) {
        return field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number;
      });
      if (valueField == undefined) return {
        Size: 0,
        Color: "#ffffff"
      };
      var display = (_a = valueField === null || valueField === void 0 ? void 0 : valueField.display) !== null && _a !== void 0 ? _a : Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
        field: valueField
      });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: (_b = display(valueField.values.get(0)).color) !== null && _b !== void 0 ? _b : "#ffffff"
      };
    });
    if (options.magRef == "All") phases = magnitudes.map(function (m) {
      return 180;
    });
    if (options.phasorRef == "All") magnitudes = phases.map(function (m) {
      return options.Nominal;
    });
    if (magnitudes.length < phasors.length) setPhasors(magnitudes.map(function (m, i) {
      return {
        Mag: m,
        Ang: phases[i],
        Style: i < PhasorStyle.length - 1 ? PhasorStyle[i] : PhasorStyle[0]
      };
    }));else setPhasors(phases.map(function (p, i) {
      return {
        Mag: magnitudes[i],
        Ang: p,
        Style: PhasorStyle[i]
      };
    }));
  }, [data, options.magRef, options.phasorRef]);
  var centerX = width / 2;
  var centerY = height / 2;
  var scale = 0.5 * (Math.min(width, height) / domain[1]);
  var radius = 0.5 * Math.min(width, height);

  function generateArrow(v) {
    var arrowLength = Math.min(v.Style.Size * 10, radius * 0.1);
    var arrowHeight = 0.7 * arrowLength * 0.5;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      transform: "rotate(-" + v.Ang + ", " + centerX + " " + centerY + ")"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
      x1: centerX,
      y1: centerY,
      x2: centerX + scale * v.Mag,
      y2: centerY,
      strokeWidth: v.Style.Size,
      stroke: v.Style.Color
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("polygon", {
      points: centerX + scale * v.Mag + " " + centerY + ", " + (centerX + scale * v.Mag - arrowLength) + " " + (centerY - arrowHeight) + ", " + (centerX + scale * v.Mag - arrowLength) + " " + (centerY + arrowHeight),
      fill: v.Style.Color
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: width,
    height: height
  }, circleRadius.map(function (r, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
      cx: centerX,
      cy: centerY,
      strokeWidth: 1,
      stroke: options.backgroundColor,
      r: scale * r,
      fill: 'none'
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    cx: centerX,
    cy: centerY,
    strokeWidth: 2,
    stroke: options.backgroundColor,
    r: scale * options.Nominal,
    fill: 'none'
  }), lineAngle.map(function (a, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      transform: "rotate(-" + a + ", " + centerX + " " + centerY + ")"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
      x1: centerX,
      y1: centerY,
      x2: centerX + radius,
      y2: centerY,
      strokeWidth: 1,
      stroke: options.backgroundColor
    }));
  }), phasors.map(function (v, i) {
    return generateArrow(v);
  })));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "])))
  };
});
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./ReferenceSelector.tsx":
/*!*******************************!*\
  !*** ./ReferenceSelector.tsx ***!
  \*******************************/
/*! exports provided: ReferenceSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceSelector", function() { return ReferenceSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ReferenceSelector = function ReferenceSelector(_a) {
  var item = _a.item,
      value = _a.value,
      _onChange = _a.onChange,
      context = _a.context;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]), 2),
      options = _b[0],
      setOptions = _b[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var refs = [];

    if (context.data == undefined) {
      setOptions([{
        value: "All",
        label: "All"
      }]);
      return;
    }

    refs = context.data.filter(function (item) {
      return item.refId != undefined;
    }).map(function (item) {
      return item.refId == undefined ? "" : item.refId;
    });
    refs = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.uniq(refs);
    refs.push('All');
    setOptions(refs.map(function (d) {
      return {
        value: d,
        label: d
      };
    }));
  }, [context.data]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    options: options,
    value: value,
    onChange: function onChange(selectableValue) {
      return _onChange(selectableValue.value);
    }
  });
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PhasorClockDataPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhasorClockDataPanel */ "./PhasorClockDataPanel.tsx");
/* harmony import */ var _ReferenceSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReferenceSelector */ "./ReferenceSelector.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_PhasorClockDataPanel__WEBPACK_IMPORTED_MODULE_1__["PhasorClockPanel"]).useFieldConfig({
  disableStandardOptions: [_grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Min, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Max, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Unit, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Decimals, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].DisplayName, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].NoValue, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Mappings],
  useCustomConfig: function useCustomConfig(builder) {
    return builder.addNumberInput({
      path: 'ThicknessLines',
      name: 'Arrow Size',
      description: 'Size of the Phasor Arrows',
      defaultValue: 1,
      settings: {
        min: 1,
        max: 20
      }
    });
  }
}).setPanelOptions(function (builder) {
  return builder.addNumberInput({
    path: 'Nominal',
    name: 'Nominal Voltage',
    description: 'Nominal Voltage to show on the clock',
    defaultValue: 1.0,
    settings: {
      min: 0
    }
  }).addNumberInput({
    path: 'AngleSegments',
    name: 'Angle Segments',
    description: 'Number of Angle Segements shown',
    defaultValue: 8,
    settings: {
      min: 0
    }
  }).addNumberInput({
    path: 'MagStep',
    name: 'Step Magnitudes',
    description: 'Steps between Magnitude Lines',
    defaultValue: 0.1,
    settings: {
      min: 0,
      max: 1
    }
  }).addNumberInput({
    path: 'MagStart',
    name: 'Start Magnitude Lines',
    description: 'First Magnitude Line',
    defaultValue: 0.5,
    settings: {
      min: 0,
      max: 1
    }
  }).addColorPicker({
    path: 'backgroundColor',
    name: 'Background',
    description: 'Color of the helper circles and lines',
    defaultValue: '#ffffff'
  }).addCustomEditor({
    id: 'PhasorRef',
    path: 'phasorRef',
    name: 'Phasor Query',
    editor: _ReferenceSelector__WEBPACK_IMPORTED_MODULE_2__["ReferenceSelector"]
  }).addCustomEditor({
    id: 'magRef',
    path: 'magRef',
    name: 'Magnitude Query',
    editor: _ReferenceSelector__WEBPACK_IMPORTED_MODULE_2__["ReferenceSelector"]
  }).addSelect({
    path: 'stylingRef',
    name: 'Styling Based on',
    description: "Element used to determine style of the Arrows",
    defaultValue: 'phase',
    settings: {
      options: [{
        value: 'phase',
        label: 'Phase'
      }, {
        value: 'mag',
        label: 'Magnitude'
      }]
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map