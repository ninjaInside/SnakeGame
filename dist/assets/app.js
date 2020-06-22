/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SnakeGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SnakeGenerator */ "./components/SnakeGenerator.js");


class SnakeGame {
  constructor(fColor, sColor) {
    this.canvas = document.querySelector('.canvas');
    this.ctx = this.canvas.getContext('2d');
    this.fieldColor = typeof fColor === 'string' ? fColor : '#000';
    this.fieldWidth = 500;
    this.fieldHeight = 500;
    this.renderCycle = null;
    this.framerate = 100;
    this.snakeGenerator = new _components_SnakeGenerator__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, sColor);
  }

  render() {
    this.renderCycle = setInterval(() => {
      this.ctx.fillStyle = this.fieldColor;
      this.ctx.fillRect(0, 0, this.fieldWidth, this.fieldHeight);
      this.snakeGenerator.render();
    }, this.framerate);
  }

  renderStop() {}

  init() {
    this.canvas.width = this.fieldWidth;
    this.canvas.height = this.fieldHeight;
    this.render();
  }

}

let snake = new SnakeGame('#000', 'green');
snake.init();

/***/ }),

/***/ "./components/EatGenerator.js":
/*!************************************!*\
  !*** ./components/EatGenerator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EatUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EatUnit */ "./components/EatUnit.js");
/* harmony import */ var _modules_randomPos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/randomPos */ "./modules/randomPos.js");



class EatGenerator {
  constructor(ctx) {
    this.eatUnit = new _EatUnit__WEBPACK_IMPORTED_MODULE_0__["default"](Object(_modules_randomPos__WEBPACK_IMPORTED_MODULE_1__["default"])(1000), Object(_modules_randomPos__WEBPACK_IMPORTED_MODULE_1__["default"])(1000));
    this.ctx = ctx;
  }

  render(isRerender) {
    this.ctx.fillStyle = 1;

    if (isRerender) {
      this.eatUnit.xPos = Object(_modules_randomPos__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
      this.eatUnit.yPos = Object(_modules_randomPos__WEBPACK_IMPORTED_MODULE_1__["default"])(500);
    }

    this.ctx.fillStyle = this.eatUnit.color;
    this.ctx.fillRect(this.eatUnit.xPos, this.eatUnit.yPos, this.eatUnit.width, this.eatUnit.height);
    return this.eatUnit;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EatGenerator);

/***/ }),

/***/ "./components/EatUnit.js":
/*!*******************************!*\
  !*** ./components/EatUnit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class EatUnit {
  constructor(xPos, yPos, width, height, color) {
    this.xPos = xPos || 0;
    this.yPos = yPos || 0;
    this.width = width || 10;
    this.height = height || 10;
    this.color = color || 'red';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EatUnit);

/***/ }),

/***/ "./components/SnakeGenerator.js":
/*!**************************************!*\
  !*** ./components/SnakeGenerator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SnakeUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SnakeUnit */ "./components/SnakeUnit.js");
/* harmony import */ var _EatGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EatGenerator */ "./components/EatGenerator.js");



class SnakeGenerator {
  constructor(ctx, unitColor) {
    this.ctx = ctx;
    this.unitColor = unitColor;
    this.snakeChain = [new _SnakeUnit__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 10, 10, this.unitColor), new _SnakeUnit__WEBPACK_IMPORTED_MODULE_0__["default"](10, 0, 10, 10, this.unitColor)];
    this.moveDirection = 'ArrowRight';
    this.maxWidth = 500;
    this.maxHeight = 500;
    this.eatGenerator = new _EatGenerator__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
    this.eatUnit = null;
    document.addEventListener('keydown', e => {
      if (!e.key.includes('Arrow')) return;
      this.moveDirection = e.key;
    });
  }

  render() {
    this.eatUnit = this.eatGenerator.render();
    this.snakeChain.map(unit => {
      this.ctx.fillStyle = unit.color;
      this.ctx.fillRect(unit.xPos, unit.yPos, unit.width, unit.height);
      if (unit.xPos > this.maxWidth) unit.xPos = 0;else if (unit.xPos < 0) unit.xPos = this.maxWidth - 1;
      if (unit.yPos > this.maxHeight) unit.yPos = 0;else if (unit.yPos < 0) unit.yPos = this.maxHeight - 1;
    });
    let moveUnit = this.snakeChain[0];

    if (moveUnit.xPos === this.eatUnit.xPos && moveUnit.yPos === this.eatUnit.yPos) {
      this.eatUnit = this.eatGenerator.render(true);
    } else {
      this.snakeChain.pop();
    }

    if (this.moveDirection === 'ArrowLeft') moveUnit.xPos -= 10;
    if (this.moveDirection === 'ArrowRight') moveUnit.xPos += 10;
    if (this.moveDirection === 'ArrowUp') moveUnit.yPos -= 10;
    if (this.moveDirection === 'ArrowDown') moveUnit.yPos += 10;
    let s = {
      xPos: moveUnit.xPos,
      yPos: moveUnit.yPos,
      width: moveUnit.width,
      height: moveUnit.height,
      color: moveUnit.color
    };
    this.snakeChain.unshift(s);
    console.log(this.snakeChain.length);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SnakeGenerator);

/***/ }),

/***/ "./components/SnakeUnit.js":
/*!*********************************!*\
  !*** ./components/SnakeUnit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SnakeUnit {
  constructor(xPos, yPos, width, height, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = color;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SnakeUnit);

/***/ }),

/***/ "./modules/randomPos.js":
/*!******************************!*\
  !*** ./modules/randomPos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function randomNumber(max, min) {
  console.log(Math.floor(Math.random() * 500 / 10) * 10);
  return Math.floor(Math.random() * 500 / 10) * 10;
}

/* harmony default export */ __webpack_exports__["default"] = (randomNumber);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map