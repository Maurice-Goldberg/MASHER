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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/buffer */ "./src/scripts/buffer.js");
/* harmony import */ var _scripts_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/selection */ "./src/scripts/selection.js");



document.addEventListener('DOMContentLoaded', function () {
  window.newBuffer = new _scripts_buffer__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var selection = new _scripts_selection__WEBPACK_IMPORTED_MODULE_2__["default"](window.newBuffer);
  selection.addModalClickListeners();
  window.newBuffer.addFirstPlayClickListener();
  setTimeout(function () {
    document.querySelector("#loading-bg").setAttribute("id", "hidden-loading-bg");
  }, 2000);
});

/***/ }),

/***/ "./src/scripts/buffer-loader.js":
/*!**************************************!*\
  !*** ./src/scripts/buffer-loader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BufferLoader =
/*#__PURE__*/
function () {
  function BufferLoader(context, urlList, callback) {
    _classCallCheck(this, BufferLoader);

    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }

  _createClass(BufferLoader, [{
    key: "loadBuffer",
    value: function loadBuffer(url, index) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.responseType = "arraybuffer";
      var loader = this;

      request.onload = function () {
        loader.context.decodeAudioData(request.response, function (buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
          }

          loader.bufferList[index] = buffer;

          if (++loader.loadCount == loader.urlList.length) {
            loader.onload(loader.bufferList);
          }
        });
      };

      request.onerror = function () {
        alert('BufferLoader: XHR error');
      };

      request.send();
    }
  }, {
    key: "load",
    value: function load() {
      for (var i = 0; i < this.urlList.length; ++i) {
        this.loadBuffer(this.urlList[i], i);
      }
    }
  }]);

  return BufferLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (BufferLoader);

/***/ }),

/***/ "./src/scripts/buffer.js":
/*!*******************************!*\
  !*** ./src/scripts/buffer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer-loader.js */ "./src/scripts/buffer-loader.js");
/* harmony import */ var _image_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-timer.js */ "./src/scripts/image-timer.js");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection */ "./src/scripts/selection.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Buffer =
/*#__PURE__*/
function () {
  function Buffer() {
    _classCallCheck(this, Buffer);

    this.imageTimer = new _image_timer_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.init = this.init.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.addFirstPlayClickListener = this.addFirstPlayClickListener.bind(this);
    this.numPlayClicks = 0;
  }

  _createClass(Buffer, [{
    key: "addFirstPlayClickListener",
    value: function addFirstPlayClickListener() {
      var _this = this;

      var playPause = document.querySelector('#play-pause');
      debugger;

      playPause.onclick = function () {
        if (_this.numPlayClicks === 0) {
          playPause.firstElementChild.setAttribute("id", "loading-img");
          playPause.firstElementChild.setAttribute("src", "./dist/images/loading.svg");

          _this.init();

          _this.numPlayClicks++;
        }
      };
    }
  }, {
    key: "init",
    value: function init() {
      this.context = new AudioContext();
      debugger;
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.finalMasterGainNode = this.context.createGain();
      this.finalMasterGainNode.connect(this.context.destination);
      this.instMasterGainNode = this.context.createGain();
      this.instMasterGainNode.connect(this.finalMasterGainNode);
      this.voxMasterGainNode = this.context.createGain();
      this.voxMasterGainNode.connect(this.finalMasterGainNode);
      this.instrumentals = [];
      this.vocals = [];
      this.instGainNodes = [];
      this.voxGainNodes = [];
      this.bufferLoader = new _buffer_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, ['./dist/stems/instrumentals/ariana_inst.wav', './dist/stems/instrumentals/grimes_inst.wav', './dist/stems/instrumentals/lizzo_inst.wav', './dist/stems/instrumentals/taylor_inst.wav', './dist/stems/instrumentals/kim_inst.wav', './dist/stems/instrumentals/justin_inst.wav', './dist/stems/instrumentals/charli_inst.wav', './dist/stems/instrumentals/katy_inst.wav', './dist/stems/vocals/ariana_vox.wav', './dist/stems/vocals/grimes_vox.wav', './dist/stems/vocals/lizzo_vox.wav', './dist/stems/vocals/taylor_vox.wav', './dist/stems/vocals/kim_vox.wav', './dist/stems/vocals/justin_vox.wav', './dist/stems/vocals/charli_vox.wav', './dist/stems/vocals/katy_vox.wav'], this.onLoad);
      this.bufferLoader.load();
    }
  }, {
    key: "onLoad",
    value: function onLoad(bufferList) {
      var _this2 = this;

      debugger;

      for (var i = 0; i < 8; i++) {
        this.instrumentals.push(this.context.createBufferSource());
        this.instrumentals[i].buffer = bufferList[i];
        this.instGainNodes[i] = this.context.createGain();
        this.instrumentals[i].connect(this.instGainNodes[i]);
        this.instGainNodes[i].connect(this.instMasterGainNode);
        this.instGainNodes[i].gain.value = 0;
        this.instrumentals[i].loop = true;
        this.instrumentals[i].start(0);
      }

      for (var _i = 0; _i < 8; _i++) {
        this.vocals.push(this.context.createBufferSource());
        this.vocals[_i].buffer = bufferList[_i + 8];
        this.voxGainNodes[_i] = this.context.createGain();

        this.vocals[_i].connect(this.voxGainNodes[_i]);

        this.voxGainNodes[_i].connect(this.voxMasterGainNode);

        this.voxGainNodes[_i].gain.value = 0;
        this.vocals[_i].loop = true;

        this.vocals[_i].start(0);
      }

      this.finalMasterGainNode.gain.value = 0.8; //turn icon to sound on once audio is playing

      var playPause = document.querySelector('#play-pause');
      playPause.setAttribute("playStatus", "playing");
      playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
      playPause.firstElementChild.setAttribute("id", "play-pause-img");
      document.querySelector("#full-black-bg").setAttribute("class", "hidden"); //trigger image changer for ALL 16 img tags

      debugger;
      var instImgs = Array.from(document.querySelector("#left-img-wrapper").children).slice(2);
      instImgs.forEach(function (imgTag, i) {
        debugger;

        _this2.imageTimer.triggerImageChanges(_this2.imageTimer.firstNames[i], imgTag);
      });
      var voxImgs = Array.from(document.querySelector("#right-img-wrapper").children).slice(2);
      voxImgs.forEach(function (imgTag, i) {
        _this2.imageTimer.triggerImageChanges(_this2.imageTimer.firstNames[i], imgTag);
      });
      var selection = new _selection__WEBPACK_IMPORTED_MODULE_2__["default"](window.newBuffer);
      selection.addSelectionClickListeners();
      var buttonImg = document.querySelector(".button-img"); //click listener for all clicks after first click

      playPause.onclick = function () {
        if (_this2.numPlayClicks !== 0 && buttonImg.id !== "loading-img") {
          if (playPause.getAttribute("playStatus") === "paused") {
            playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
            playPause.setAttribute("playStatus", "playing"); //get rid of black bg

            document.querySelector("#full-black-bg").setAttribute("class", "hidden");
            _this2.finalMasterGainNode.gain.value = 0.8;
          } else {
            _this2.finalMasterGainNode.gain.value = 0;
            playPause.firstElementChild.setAttribute("src", "./dist/images/mute.png");
            playPause.setAttribute("playStatus", "paused"); //cover with black bg

            document.querySelector("#full-black-bg").setAttribute("class", "showing");
          }
        }
      };

      var instSoloBtn = document.querySelector("#inst-solo-btn");
      var voxSoloBtn = document.querySelector("#vox-solo-btn");
      var allBtn = document.querySelector('#all-btn');

      instSoloBtn.onclick = function (event) {
        event.stopPropagation(); //if it isn't already solod

        if (!instSoloBtn.classList.contains("solod")) {
          //show it's been selected
          instSoloBtn.setAttribute("class", "solod");
          voxSoloBtn.setAttribute("class", "muted");
          allBtn.setAttribute("class", "muted"); //mute vox channel

          _this2.voxMasterGainNode.gain.value = 0;
          _this2.instMasterGainNode.gain.value = 0.8;
          document.querySelector("#black-bg-right").setAttribute("class", "showing");
          document.querySelector("#black-bg-left").setAttribute("class", "hidden");
        }
      };

      voxSoloBtn.onclick = function (event) {
        event.stopPropagation(); //if it isn't already solod

        if (!voxSoloBtn.classList.contains("solod")) {
          //show it's been selected
          voxSoloBtn.setAttribute("class", "solod");
          instSoloBtn.setAttribute("class", "muted");
          allBtn.setAttribute("class", "muted"); //mute inst channel

          _this2.voxMasterGainNode.gain.value = 0.8;
          _this2.instMasterGainNode.gain.value = 0;
          document.querySelector("#black-bg-left").setAttribute("class", "showing");
          document.querySelector("#black-bg-right").setAttribute("class", "hidden");
        }
      };

      allBtn.onclick = function (event) {
        event.stopPropagation();

        if (!allBtn.classList.contains("solod")) {
          //show it's been selected
          allBtn.setAttribute("class", "solod");
          voxSoloBtn.setAttribute("class", "muted");
          instSoloBtn.setAttribute("class", "muted"); //unmute both channels

          _this2.voxMasterGainNode.gain.value = 0.8;
          _this2.instMasterGainNode.gain.value = 0.8;
          document.querySelector("#black-bg-right").setAttribute("class", "hidden");
          document.querySelector("#black-bg-left").setAttribute("class", "hidden");
        }
      };
    }
  }]);

  return Buffer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Buffer);

/***/ }),

/***/ "./src/scripts/image-timer.js":
/*!************************************!*\
  !*** ./src/scripts/image-timer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageTimer =
/*#__PURE__*/
function () {
  function ImageTimer() {
    _classCallCheck(this, ImageTimer);

    this.eleList = document.querySelector("#instrumentals-ul").children;
    this.numArtists = this.eleList.length;
    this.firstNames = [];
    this.gatherImageStrings = this.gatherImageStrings.bind(this);
    this.imageStringsObj = this.gatherImageStrings();
    this.changeImage = this.changeImage.bind(this);
  }

  _createClass(ImageTimer, [{
    key: "gatherImageStrings",
    value: function gatherImageStrings() {
      var imageStringsObj = {};
      var imagesLoaded = 0;

      for (var i = 0; i < this.numArtists; i++) {
        var artistPics = [];
        var fullName = this.eleList[i].innerHTML.split(" -")[0];
        var firstName = fullName.split(" ")[0].toLowerCase();
        this.firstNames.push(firstName);

        for (var j = imagesLoaded; j < imagesLoaded + 4; j++) {
          artistPics.push("./dist/images/artist-pictures/".concat(firstName, "/").concat(j + 1, ".jpg"));
        }

        imageStringsObj[firstName] = artistPics;
        imagesLoaded += 4;
      }

      return imageStringsObj;
    }
  }, {
    key: "changeImage",
    value: function changeImage(firstName, imgTag, i) {
      imgTag.src = this.imageStringsObj[firstName][i];
    }
  }, {
    key: "triggerImageChanges",
    value: function triggerImageChanges(firstName, imgTag) {
      var _this = this;

      var i = 0;
      setInterval(function () {
        i++;
        i = i % 4;

        _this.changeImage(firstName, imgTag, i);
      }, 508.47457627118644067796610);
    }
  }]);

  return ImageTimer;
}();

/* harmony default export */ __webpack_exports__["default"] = (ImageTimer);

/***/ }),

/***/ "./src/scripts/selection.js":
/*!**********************************!*\
  !*** ./src/scripts/selection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Selection =
/*#__PURE__*/
function () {
  function Selection(buffer) {
    _classCallCheck(this, Selection);

    this.instrumentalList = document.querySelector("#instrumentals-ul").children;
    this.vocalList = document.querySelector("#vocals-ul").children;
    this.modalBg = document.querySelector('.modal-background');
    this.modal = document.querySelector('.modal-child');
    this.startBtn = document.querySelector('.start-btn');
    this.questionBtn = document.querySelector('#question-btn');
    this.processInstTrackClick = this.processInstTrackClick.bind(this);
    this.processVocalsTrackClick = this.processVocalsTrackClick.bind(this);
    this.addSelectionClickListeners = this.addSelectionClickListeners.bind(this);
    this.addModalClickListeners = this.addModalClickListeners.bind(this);
    this.buffer = buffer;
  }

  _createClass(Selection, [{
    key: "processInstTrackClick",
    value: function processInstTrackClick(i) {
      for (var j = 0; j < this.instrumentalList.length; j++) {
        var child = this.instrumentalList[j];
        var firstName = child.innerHTML.split(" -")[0].split(" ")[0].toLowerCase();
        var img = document.querySelector("#".concat(firstName, "-left-img"));

        if (i === j) {
          if (child.classList.contains("selected")) {
            child.classList.remove('selected');
            this.buffer.instGainNodes[j].gain.value = 0;
            img.setAttribute("class", "hidden");
            document.querySelector("#black-bg-left").setAttribute("class", "showing");
          } else {
            child.classList.add('selected');
            this.buffer.instGainNodes[j].gain.value = 1;
            img.setAttribute("class", "showing");
            document.querySelector("#black-bg-left").setAttribute("class", "hidden");
          }
        } else {
          child.classList.remove('selected');
          this.buffer.instGainNodes[j].gain.value = 0;
          img.setAttribute("class", "hidden");
        }
      }
    }
  }, {
    key: "processVocalsTrackClick",
    value: function processVocalsTrackClick(i) {
      for (var j = 0; j < this.vocalList.length; j++) {
        var child = this.vocalList[j];
        var firstName = child.innerHTML.split(" -")[0].split(" ")[0].toLowerCase();
        var img = document.querySelector("#".concat(firstName, "-right-img"));

        if (i === j) {
          if (child.classList.contains("selected")) {
            child.classList.remove('selected');
            this.buffer.voxGainNodes[j].gain.value = 0;
            img.setAttribute("class", "hidden");
            document.querySelector("#black-bg-right").setAttribute("class", "showing");
          } else {
            child.classList.add('selected');
            this.buffer.voxGainNodes[j].gain.value = 1;
            img.setAttribute("class", "showing");
            document.querySelector("#black-bg-right").setAttribute("class", "hidden");
          }
        } else {
          child.classList.remove('selected');
          this.buffer.voxGainNodes[j].gain.value = 0;
          img.setAttribute("class", "hidden");
        }
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.modalBg.setAttribute("class", "modal-background");
      this.modal.setAttribute("class", "modal-child");
      this.startBtn.setAttribute("class", "start-btn");
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modalBg.setAttribute("class", "modal-background-fade-out");
      this.modal.setAttribute("class", "modal-child-fade-out");
      this.startBtn.setAttribute("class", "modal-child-fade-out");
    }
  }, {
    key: "addSelectionClickListeners",
    value: function addSelectionClickListeners() {
      var _this = this;

      var _loop = function _loop(i) {
        var child = _this.instrumentalList[i];
        child.addEventListener('click', function () {
          return _this.processInstTrackClick(i);
        });
      };

      for (var i = 0; i < this.instrumentalList.length; i++) {
        _loop(i);
      }

      var _loop2 = function _loop2(_i) {
        var child = _this.vocalList[_i];

        child.onclick = function () {
          return _this.processVocalsTrackClick(_i);
        };
      };

      for (var _i = 0; _i < this.vocalList.length; _i++) {
        _loop2(_i);
      }
    }
  }, {
    key: "addModalClickListeners",
    value: function addModalClickListeners() {
      var _this2 = this;

      this.modalBg.onclick = function () {
        _this2.closeModal();
      };

      this.startBtn.onclick = function (event) {
        _this2.closeModal();

        event.stopPropagation();
      };

      this.modal.onclick = function (event) {
        event.stopPropagation();
      };

      this.questionBtn.onclick = function () {
        _this2.openModal();
      };
    }
  }]);

  return Selection;
}();

/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibmV3QnVmZmVyIiwiQnVmZmVyIiwic2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwiYWRkTW9kYWxDbGlja0xpc3RlbmVycyIsImFkZEZpcnN0UGxheUNsaWNrTGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIkJ1ZmZlckxvYWRlciIsImNvbnRleHQiLCJ1cmxMaXN0IiwiY2FsbGJhY2siLCJvbmxvYWQiLCJidWZmZXJMaXN0IiwiQXJyYXkiLCJsb2FkQ291bnQiLCJ1cmwiLCJpbmRleCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJsb2FkZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsImJ1ZmZlciIsImFsZXJ0IiwibGVuZ3RoIiwib25lcnJvciIsInNlbmQiLCJpIiwibG9hZEJ1ZmZlciIsImltYWdlVGltZXIiLCJJbWFnZVRpbWVyIiwiaW5pdCIsImJpbmQiLCJvbkxvYWQiLCJudW1QbGF5Q2xpY2tzIiwicGxheVBhdXNlIiwib25jbGljayIsImZpcnN0RWxlbWVudENoaWxkIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiZmluYWxNYXN0ZXJHYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJpbnN0TWFzdGVyR2Fpbk5vZGUiLCJ2b3hNYXN0ZXJHYWluTm9kZSIsImluc3RydW1lbnRhbHMiLCJ2b2NhbHMiLCJpbnN0R2Fpbk5vZGVzIiwidm94R2Fpbk5vZGVzIiwiYnVmZmVyTG9hZGVyIiwibG9hZCIsInB1c2giLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJnYWluIiwidmFsdWUiLCJsb29wIiwic3RhcnQiLCJpbnN0SW1ncyIsImZyb20iLCJjaGlsZHJlbiIsInNsaWNlIiwiZm9yRWFjaCIsImltZ1RhZyIsInRyaWdnZXJJbWFnZUNoYW5nZXMiLCJmaXJzdE5hbWVzIiwidm94SW1ncyIsImFkZFNlbGVjdGlvbkNsaWNrTGlzdGVuZXJzIiwiYnV0dG9uSW1nIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJpbnN0U29sb0J0biIsInZveFNvbG9CdG4iLCJhbGxCdG4iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZWxlTGlzdCIsIm51bUFydGlzdHMiLCJnYXRoZXJJbWFnZVN0cmluZ3MiLCJpbWFnZVN0cmluZ3NPYmoiLCJjaGFuZ2VJbWFnZSIsImltYWdlc0xvYWRlZCIsImFydGlzdFBpY3MiLCJmdWxsTmFtZSIsImlubmVySFRNTCIsInNwbGl0IiwiZmlyc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJqIiwic3JjIiwic2V0SW50ZXJ2YWwiLCJpbnN0cnVtZW50YWxMaXN0Iiwidm9jYWxMaXN0IiwibW9kYWxCZyIsIm1vZGFsIiwic3RhcnRCdG4iLCJxdWVzdGlvbkJ0biIsInByb2Nlc3NJbnN0VHJhY2tDbGljayIsInByb2Nlc3NWb2NhbHNUcmFja0NsaWNrIiwiY2hpbGQiLCJpbWciLCJyZW1vdmUiLCJhZGQiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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LFNBQUw7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQUdVM0csd0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2SEEsdUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgQnVmZmVyIGZyb20gJy4vc2NyaXB0cy9idWZmZXInO1xuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuL3NjcmlwdHMvc2VsZWN0aW9uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB3aW5kb3cubmV3QnVmZmVyID0gbmV3IEJ1ZmZlcigpO1xuICAgIGxldCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHdpbmRvdy5uZXdCdWZmZXIpO1xuICAgIHNlbGVjdGlvbi5hZGRNb2RhbENsaWNrTGlzdGVuZXJzKCk7XG4gICAgd2luZG93Lm5ld0J1ZmZlci5hZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nLWJnXCIpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZGVuLWxvYWRpbmctYmdcIik7XG4gICAgfSwgMjAwMCk7XG59KTsiLCJjbGFzcyBCdWZmZXJMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybExpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudXJsTGlzdCA9IHVybExpc3Q7XG4gICAgICAgIHRoaXMub25sb2FkID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYnVmZmVyTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgbG9hZEJ1ZmZlcih1cmwsIGluZGV4KSB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcblxuICAgICAgICBsZXQgbG9hZGVyID0gdGhpcztcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRlci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdlcnJvciBkZWNvZGluZyBmaWxlIGRhdGE6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5idWZmZXJMaXN0W2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCsrbG9hZGVyLmxvYWRDb3VudCA9PSBsb2FkZXIudXJsTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5vbmxvYWQobG9hZGVyLmJ1ZmZlckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdCdWZmZXJMb2FkZXI6IFhIUiBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVybExpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlcih0aGlzLnVybExpc3RbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJMb2FkZXI7IiwiaW1wb3J0IEJ1ZmZlckxvYWRlciBmcm9tICcuL2J1ZmZlci1sb2FkZXIuanMnO1xuaW1wb3J0IEltYWdlVGltZXIgZnJvbSAnLi9pbWFnZS10aW1lci5qcyc7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vc2VsZWN0aW9uJztcblxuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVRpbWVyID0gbmV3IEltYWdlVGltZXIoKTtcbiAgICAgICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyID0gdGhpcy5hZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubnVtUGxheUNsaWNrcyA9IDA7XG4gICAgfVxuXG4gICAgYWRkRmlyc3RQbGF5Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHBsYXlQYXVzZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubnVtUGxheUNsaWNrcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvYWRpbmctaW1nXCIpO1xuICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL2xvYWRpbmcuc3ZnXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubnVtUGxheUNsaWNrcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUpO1xuXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFscyA9IFtdO1xuICAgICAgICB0aGlzLnZvY2FscyA9IFtdO1xuICAgICAgICB0aGlzLmluc3RHYWluTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy52b3hHYWluTm9kZXMgPSBbXTtcblxuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2FyaWFuYV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2dyaW1lc19pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2xpenpvX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvdGF5bG9yX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2ltX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvanVzdGluX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvY2hhcmxpX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2F0eV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvYXJpYW5hX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2dyaW1lc192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9saXp6b192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy90YXlsb3Jfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMva2ltX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2p1c3Rpbl92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9jaGFybGlfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMva2F0eV92b3gud2F2J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRoaXMub25Mb2FkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgb25Mb2FkKGJ1ZmZlckxpc3QpIHtcbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzLnB1c2godGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2ldO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RHYWluTm9kZXNbaV0gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmNvbm5lY3QodGhpcy5pbnN0R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5jb25uZWN0KHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy52b2NhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0uYnVmZmVyID0gYnVmZmVyTGlzdFtpKzhdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5jb25uZWN0KHRoaXMudm94R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy52b3hNYXN0ZXJHYWluTm9kZSk7XG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5zdGFydCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgIC8vdHVybiBpY29uIHRvIHNvdW5kIG9uIG9uY2UgYXVkaW8gaXMgcGxheWluZ1xuICAgICAgICBsZXQgcGxheVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktcGF1c2UnKTtcblxuICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBsYXlpbmdcIik7XG4gICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL3NvdW5kb24ucG5nXCIpO1xuICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5LXBhdXNlLWltZ1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdWxsLWJsYWNrLWJnXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIC8vdHJpZ2dlciBpbWFnZSBjaGFuZ2VyIGZvciBBTEwgMTYgaW1nIHRhZ3NcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgbGV0IGluc3RJbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtaW1nLXdyYXBwZXJcIikuY2hpbGRyZW4pLnNsaWNlKDIpO1xuICAgICAgICBpbnN0SW1ncy5mb3JFYWNoKChpbWdUYWcsIGkpID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmltYWdlVGltZXIudHJpZ2dlckltYWdlQ2hhbmdlcyh0aGlzLmltYWdlVGltZXIuZmlyc3ROYW1lc1tpXSwgaW1nVGFnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZveEltZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtaW1nLXdyYXBwZXJcIikuY2hpbGRyZW4pLnNsaWNlKDIpO1xuICAgICAgICB2b3hJbWdzLmZvckVhY2goKGltZ1RhZywgaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVRpbWVyLnRyaWdnZXJJbWFnZUNoYW5nZXModGhpcy5pbWFnZVRpbWVyLmZpcnN0TmFtZXNbaV0sIGltZ1RhZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24od2luZG93Lm5ld0J1ZmZlcik7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycygpO1xuICAgIFxuICAgICAgICBsZXQgYnV0dG9uSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24taW1nXCIpO1xuXG4gICAgICAgIC8vY2xpY2sgbGlzdGVuZXIgZm9yIGFsbCBjbGlja3MgYWZ0ZXIgZmlyc3QgY2xpY2tcbiAgICAgICAgcGxheVBhdXNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLm51bVBsYXlDbGlja3MgIT09IDAgJiYgYnV0dG9uSW1nLmlkICE9PSBcImxvYWRpbmctaW1nXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheVBhdXNlLmdldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIikgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvc291bmRvbi5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5zZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIsIFwicGxheWluZ1wiKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgcmlkIG9mIGJsYWNrIGJnXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvbXV0ZS5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5zZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIsIFwicGF1c2VkXCIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2NvdmVyIHdpdGggYmxhY2sgYmdcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdWxsLWJsYWNrLWJnXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5zdFNvbG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3Qtc29sby1idG5cIik7XG4gICAgICAgIGxldCB2b3hTb2xvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b3gtc29sby1idG5cIik7XG4gICAgICAgIGxldCBhbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLWJ0bicpO1xuICAgICAgICBpbnN0U29sb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vaWYgaXQgaXNuJ3QgYWxyZWFkeSBzb2xvZFxuICAgICAgICAgICAgaWYoIWluc3RTb2xvQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9tdXRlIHZveCBjaGFubmVsXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm94U29sb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vaWYgaXQgaXNuJ3QgYWxyZWFkeSBzb2xvZFxuICAgICAgICAgICAgaWYgKCF2b3hTb2xvQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzb2xvZFwiKTtcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9tdXRlIGluc3QgY2hhbm5lbFxuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWxsQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKCFhbGxCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic29sb2RcIikpIHtcbiAgICAgICAgICAgICAgICAvL3Nob3cgaXQncyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgYWxsQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAvL3VubXV0ZSBib3RoIGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVmZmVyOyIsImNsYXNzIEltYWdlVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3RydW1lbnRhbHMtdWxcIikuY2hpbGRyZW47XG4gICAgICAgIHRoaXMubnVtQXJ0aXN0cyA9IHRoaXMuZWxlTGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLmdhdGhlckltYWdlU3RyaW5ncyA9IHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW1hZ2VTdHJpbmdzT2JqID0gdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZSA9IHRoaXMuY2hhbmdlSW1hZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnYXRoZXJJbWFnZVN0cmluZ3MoKSB7XG4gICAgICAgIGxldCBpbWFnZVN0cmluZ3NPYmogPSB7fTtcbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1BcnRpc3RzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhcnRpc3RQaWNzID0gW107XG4gICAgICAgICAgICBsZXQgZnVsbE5hbWUgPSB0aGlzLmVsZUxpc3RbaV0uaW5uZXJIVE1MLnNwbGl0KFwiIC1cIilbMF07XG4gICAgICAgICAgICBsZXQgZmlyc3ROYW1lID0gZnVsbE5hbWUuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0TmFtZXMucHVzaChmaXJzdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gaW1hZ2VzTG9hZGVkOyBqIDwgaW1hZ2VzTG9hZGVkICsgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJ0aXN0UGljcy5wdXNoKGAuL2Rpc3QvaW1hZ2VzL2FydGlzdC1waWN0dXJlcy8ke2ZpcnN0TmFtZX0vJHtqKzF9LmpwZ2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VTdHJpbmdzT2JqW2ZpcnN0TmFtZV0gPSBhcnRpc3RQaWNzO1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlU3RyaW5nc09iajtcbiAgICB9XG5cbiAgICBjaGFuZ2VJbWFnZShmaXJzdE5hbWUsIGltZ1RhZywgaSkge1xuICAgICAgICBpbWdUYWcuc3JjID0gdGhpcy5pbWFnZVN0cmluZ3NPYmpbZmlyc3ROYW1lXVtpXTtcbiAgICB9XG5cbiAgICB0cmlnZ2VySW1hZ2VDaGFuZ2VzKGZpcnN0TmFtZSwgaW1nVGFnKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGkgPSBpICUgNDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUltYWdlKGZpcnN0TmFtZSwgaW1nVGFnLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgNTA4LjQ3NDU3NjI3MTE4NjQ0MDY3Nzk2NjEwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVGltZXI7IiwiY2xhc3MgU2VsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihidWZmZXIpIHtcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0cnVtZW50YWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLnZvY2FsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9jYWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLm1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2dyb3VuZCcpO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNoaWxkJyk7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlc3Rpb24tYnRuJyk7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2sgPSB0aGlzLnByb2Nlc3NJbnN0VHJhY2tDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrID0gdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGlvbkNsaWNrTGlzdGVuZXJzID0gdGhpcy5hZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMgPSB0aGlzLmFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LWxlZnQtaW1nYCk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2soaSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LXJpZ2h0LWltZ2ApO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhcnQtYnRuXCIpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWJhY2tncm91bmQtZmFkZS1vdXRcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZC1mYWRlLW91dFwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkLWZhZGUtb3V0XCIpO1xuICAgIH1cbiAgICBcbiAgICBhZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2soaSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrKGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkTW9kYWxDbGlja0xpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJnLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWwub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==