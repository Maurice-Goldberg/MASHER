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
  newBuffer.init();
  newBuffer.onLoad(newBuffer.bufferLoader.bufferList);
  var selection = new _scripts_selection__WEBPACK_IMPORTED_MODULE_2__["default"](newBuffer);
  selection.addClickListeners();
  setTimeout(function () {
    document.querySelector("#loading-bg").setAttribute("id", "hidden-loading-bg");
  }, 4000);
  var playPause = document.querySelector('#play-pause');
  setTimeout(function () {
    playPause.firstElementChild.setAttribute("id", "play-pause-img");
    playPause.firstElementChild.setAttribute("src", "./dist/images/play.png");
  }, 8000);
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
    this.context = new AudioContext();
    this.instGainNodes = [];
    this.voxGainNodes = [];
    this.finalMasterGainNode = this.context.createGain();
    this.finalMasterGainNode.connect(this.context.destination);
    this.instMasterGainNode = this.context.createGain();
    this.instMasterGainNode.connect(this.finalMasterGainNode);
    this.voxMasterGainNode = this.context.createGain();
    this.voxMasterGainNode.connect(this.finalMasterGainNode);
    this.numPlayClicks = 0;
  }

  _createClass(Buffer, [{
    key: "init",
    value: function init() {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.bufferLoader = new _buffer_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, ['./dist/stems/instrumentals/ariana_inst.wav', './dist/stems/instrumentals/grimes_inst.wav', './dist/stems/instrumentals/lizzo_inst.wav', './dist/stems/instrumentals/robyn_inst.wav', './dist/stems/instrumentals/kim_inst.wav', './dist/stems/instrumentals/justin_inst.wav', './dist/stems/instrumentals/charli_inst.wav', './dist/stems/instrumentals/katy_inst.wav', './dist/stems/vocals/ariana_vox.wav', './dist/stems/vocals/grimes_vox.wav', './dist/stems/vocals/lizzo_vox.wav', './dist/stems/vocals/robyn_vox.wav', './dist/stems/vocals/kim_vox.wav', './dist/stems/vocals/justin_vox.wav', './dist/stems/vocals/charli_vox.wav', './dist/stems/vocals/katy_vox.wav'], this.onLoad);
      this.bufferLoader.load();
    }
  }, {
    key: "onLoad",
    value: function onLoad(bufferList) {
      var _this = this;

      this.instrumentals = [];
      this.vocals = [];

      for (var i = 0; i < 8; i++) {
        this.instrumentals.push(this.context.createBufferSource());
        this.instrumentals[i].buffer = bufferList[i];
        this.instGainNodes[i] = this.context.createGain();
        this.instrumentals[i].connect(this.instGainNodes[i]);
        this.instGainNodes[i].connect(this.instMasterGainNode);
        this.instGainNodes[i].gain.value = 0;
        this.instrumentals[i].loop = true;
      }

      for (var _i = 0; _i < 8; _i++) {
        this.vocals.push(this.context.createBufferSource());
        this.vocals[_i].buffer = bufferList[_i + 8];
        this.voxGainNodes[_i] = this.context.createGain();

        this.vocals[_i].connect(this.voxGainNodes[_i]);

        this.voxGainNodes[_i].connect(this.voxMasterGainNode);

        this.voxGainNodes[_i].gain.value = 0;
        this.vocals[_i].loop = true;
      }

      var playPause = document.querySelector('#play-pause');
      var buttonImg = document.querySelector(".button-img");

      playPause.onclick = function () {
        if (buttonImg.id !== "loading-img") {
          if (playPause.getAttribute("playStatus") === "paused") {
            playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
            playPause.setAttribute("playStatus", "playing"); //get rid of black bg

            document.querySelector("#full-black-bg").setAttribute("class", "hidden");

            if (_this.numPlayClicks === 0) {
              for (var _i2 = 0; _i2 < 8; _i2++) {
                _this.finalMasterGainNode.gain.value = 0.8;

                _this.instrumentals[_i2].start(0);

                _this.vocals[_i2].start(0);
              }

              _this.numPlayClicks++; //trigger image changer for ALL 16 img tags

              var instImgs = Array.from(document.querySelector("#left-img-wrapper").children).slice(2);

              for (var _i3 = 0; _i3 < instImgs.length; _i3++) {
                var imgTag = instImgs[_i3];

                _this.imageTimer.triggerImageChanges(_this.imageTimer.firstNames[_i3], imgTag);
              }

              var voxImgs = Array.from(document.querySelector("#right-img-wrapper").children).slice(2);

              for (var _i4 = 0; _i4 < voxImgs.length; _i4++) {
                var _imgTag = voxImgs[_i4];

                _this.imageTimer.triggerImageChanges(_this.imageTimer.firstNames[_i4], _imgTag);
              }
            } else {
              _this.finalMasterGainNode.gain.value = 0.8;
            }
          } else {
            _this.finalMasterGainNode.gain.value = 0;
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

          _this.voxMasterGainNode.gain.value = 0;
          _this.instMasterGainNode.gain.value = 0.8;
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

          _this.voxMasterGainNode.gain.value = 0.8;
          _this.instMasterGainNode.gain.value = 0;
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

          _this.voxMasterGainNode.gain.value = 0.8;
          _this.instMasterGainNode.gain.value = 0.8;
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
    key: "addClickListeners",
    value: function addClickListeners() {
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

      this.modalBg.onclick = function () {
        _this.closeModal();
      };

      this.startBtn.onclick = function (event) {
        _this.closeModal();

        event.stopPropagation();
      };

      this.modal.onclick = function (event) {
        event.stopPropagation();
      };

      this.questionBtn.onclick = function () {
        _this.openModal();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJuZXdCdWZmZXIiLCJCdWZmZXIiLCJpbml0Iiwib25Mb2FkIiwiYnVmZmVyTG9hZGVyIiwiYnVmZmVyTGlzdCIsInNlbGVjdGlvbiIsIlNlbGVjdGlvbiIsImFkZENsaWNrTGlzdGVuZXJzIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5UGF1c2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIkJ1ZmZlckxvYWRlciIsImNvbnRleHQiLCJ1cmxMaXN0IiwiY2FsbGJhY2siLCJvbmxvYWQiLCJBcnJheSIsImxvYWRDb3VudCIsInVybCIsImluZGV4IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsImxvYWRlciIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwiYnVmZmVyIiwiYWxlcnQiLCJsZW5ndGgiLCJvbmVycm9yIiwic2VuZCIsImkiLCJsb2FkQnVmZmVyIiwiaW1hZ2VUaW1lciIsIkltYWdlVGltZXIiLCJiaW5kIiwiQXVkaW9Db250ZXh0IiwiaW5zdEdhaW5Ob2RlcyIsInZveEdhaW5Ob2RlcyIsImZpbmFsTWFzdGVyR2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiaW5zdE1hc3RlckdhaW5Ob2RlIiwidm94TWFzdGVyR2Fpbk5vZGUiLCJudW1QbGF5Q2xpY2tzIiwid2Via2l0QXVkaW9Db250ZXh0IiwibG9hZCIsImluc3RydW1lbnRhbHMiLCJ2b2NhbHMiLCJwdXNoIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsInZhbHVlIiwibG9vcCIsImJ1dHRvbkltZyIsIm9uY2xpY2siLCJpZCIsImdldEF0dHJpYnV0ZSIsInN0YXJ0IiwiaW5zdEltZ3MiLCJmcm9tIiwiY2hpbGRyZW4iLCJzbGljZSIsImltZ1RhZyIsInRyaWdnZXJJbWFnZUNoYW5nZXMiLCJmaXJzdE5hbWVzIiwidm94SW1ncyIsImluc3RTb2xvQnRuIiwidm94U29sb0J0biIsImFsbEJ0biIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbGVMaXN0IiwibnVtQXJ0aXN0cyIsImdhdGhlckltYWdlU3RyaW5ncyIsImltYWdlU3RyaW5nc09iaiIsImNoYW5nZUltYWdlIiwiaW1hZ2VzTG9hZGVkIiwiYXJ0aXN0UGljcyIsImZ1bGxOYW1lIiwiaW5uZXJIVE1MIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImoiLCJzcmMiLCJzZXRJbnRlcnZhbCIsImluc3RydW1lbnRhbExpc3QiLCJ2b2NhbExpc3QiLCJtb2RhbEJnIiwibW9kYWwiLCJzdGFydEJ0biIsInF1ZXN0aW9uQnRuIiwicHJvY2Vzc0luc3RUcmFja0NsaWNrIiwicHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2siLCJjaGlsZCIsImltZyIsInJlbW92ZSIsImFkZCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hEQyxRQUFNLENBQUNDLFNBQVAsR0FBbUIsSUFBSUMsdURBQUosRUFBbkI7QUFDQUQsV0FBUyxDQUFDRSxJQUFWO0FBQ0FGLFdBQVMsQ0FBQ0csTUFBVixDQUFpQkgsU0FBUyxDQUFDSSxZQUFWLENBQXVCQyxVQUF4QztBQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQywwREFBSixDQUFjUCxTQUFkLENBQWxCO0FBQ0FNLFdBQVMsQ0FBQ0UsaUJBQVY7QUFFQUMsWUFBVSxDQUFDLFlBQU07QUFDYlosWUFBUSxDQUFDYSxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxZQUF0QyxDQUFtRCxJQUFuRCxFQUF5RCxtQkFBekQ7QUFDSCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUEsTUFBSUMsU0FBUyxHQUFHZixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7QUFDQUQsWUFBVSxDQUFDLFlBQU07QUFDYkcsYUFBUyxDQUFDQyxpQkFBVixDQUE0QkYsWUFBNUIsQ0FBeUMsSUFBekMsRUFBK0MsZ0JBQS9DO0FBQ0FDLGFBQVMsQ0FBQ0MsaUJBQVYsQ0FBNEJGLFlBQTVCLENBQXlDLEtBQXpDLEVBQWdELHdCQUFoRDtBQUNILEdBSFMsRUFHUCxJQUhPLENBQVY7QUFJSCxDQWpCRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1HLFk7OztBQUNGLHdCQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFBQTs7QUFDcEMsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsTUFBTCxHQUFjRCxRQUFkO0FBQ0EsU0FBS1osVUFBTCxHQUFrQixJQUFJYyxLQUFKLEVBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNIOzs7OytCQUVVQyxHLEVBQUtDLEssRUFBTztBQUNuQixVQUFJQyxPQUFPLEdBQUcsSUFBSUMsY0FBSixFQUFkO0FBQ0FELGFBQU8sQ0FBQ0UsSUFBUixDQUFhLEtBQWIsRUFBb0JKLEdBQXBCLEVBQXlCLElBQXpCO0FBQ0FFLGFBQU8sQ0FBQ0csWUFBUixHQUF1QixhQUF2QjtBQUVBLFVBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBSixhQUFPLENBQUNMLE1BQVIsR0FBaUIsWUFBWTtBQUN6QlMsY0FBTSxDQUFDWixPQUFQLENBQWVhLGVBQWYsQ0FDSUwsT0FBTyxDQUFDTSxRQURaLEVBRUksVUFBVUMsTUFBVixFQUFrQjtBQUNkLGNBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1RDLGlCQUFLLENBQUMsK0JBQStCVixHQUFoQyxDQUFMO0FBQ0E7QUFDSDs7QUFDRE0sZ0JBQU0sQ0FBQ3RCLFVBQVAsQ0FBa0JpQixLQUFsQixJQUEyQlEsTUFBM0I7O0FBQ0EsY0FBSSxFQUFFSCxNQUFNLENBQUNQLFNBQVQsSUFBc0JPLE1BQU0sQ0FBQ1gsT0FBUCxDQUFlZ0IsTUFBekMsRUFBaUQ7QUFDN0NMLGtCQUFNLENBQUNULE1BQVAsQ0FBY1MsTUFBTSxDQUFDdEIsVUFBckI7QUFDSDtBQUNKLFNBWEw7QUFhSCxPQWREOztBQWdCQWtCLGFBQU8sQ0FBQ1UsT0FBUixHQUFrQixZQUFZO0FBQzFCRixhQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNILE9BRkQ7O0FBSUFSLGFBQU8sQ0FBQ1csSUFBUjtBQUNIOzs7MkJBRU07QUFDSCxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS25CLE9BQUwsQ0FBYWdCLE1BQWpDLEVBQXlDLEVBQUVHLENBQTNDLEVBQThDO0FBQzFDLGFBQUtDLFVBQUwsQ0FBZ0IsS0FBS3BCLE9BQUwsQ0FBYW1CLENBQWIsQ0FBaEIsRUFBaUNBLENBQWpDO0FBQ0g7QUFDSjs7Ozs7O0FBR1VyQiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTs7SUFFTWIsTTs7O0FBQ0Ysb0JBQWM7QUFBQTs7QUFDVixTQUFLb0MsVUFBTCxHQUFrQixJQUFJQyx1REFBSixFQUFsQjtBQUNBLFNBQUtwQyxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVcUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtwQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZb0MsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsU0FBS3hCLE9BQUwsR0FBZSxJQUFJeUIsWUFBSixFQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFFQSxTQUFLQyxtQkFBTCxHQUEyQixLQUFLNUIsT0FBTCxDQUFhNkIsVUFBYixFQUEzQjtBQUNBLFNBQUtELG1CQUFMLENBQXlCRSxPQUF6QixDQUFpQyxLQUFLOUIsT0FBTCxDQUFhK0IsV0FBOUM7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixLQUFLaEMsT0FBTCxDQUFhNkIsVUFBYixFQUExQjtBQUNBLFNBQUtHLGtCQUFMLENBQXdCRixPQUF4QixDQUFnQyxLQUFLRixtQkFBckM7QUFDQSxTQUFLSyxpQkFBTCxHQUF5QixLQUFLakMsT0FBTCxDQUFhNkIsVUFBYixFQUF6QjtBQUNBLFNBQUtJLGlCQUFMLENBQXVCSCxPQUF2QixDQUErQixLQUFLRixtQkFBcEM7QUFDQSxTQUFLTSxhQUFMLEdBQXFCLENBQXJCO0FBQ0g7Ozs7MkJBRU07QUFDSGxELFlBQU0sQ0FBQ3lDLFlBQVAsR0FBc0J6QyxNQUFNLENBQUN5QyxZQUFQLElBQXVCekMsTUFBTSxDQUFDbUQsa0JBQXBEO0FBQ0EsV0FBSzlDLFlBQUwsR0FBb0IsSUFBSVUseURBQUosQ0FDaEIsS0FBS0MsT0FEVyxFQUVoQixDQUNJLDRDQURKLEVBRUksNENBRkosRUFHSSwyQ0FISixFQUlJLDJDQUpKLEVBS0kseUNBTEosRUFNSSw0Q0FOSixFQU9JLDRDQVBKLEVBUUksMENBUkosRUFTSSxvQ0FUSixFQVVJLG9DQVZKLEVBV0ksbUNBWEosRUFZSSxtQ0FaSixFQWFJLGlDQWJKLEVBY0ksb0NBZEosRUFlSSxvQ0FmSixFQWdCSSxrQ0FoQkosQ0FGZ0IsRUFvQmhCLEtBQUtaLE1BcEJXLENBQXBCO0FBc0JBLFdBQUtDLFlBQUwsQ0FBa0IrQyxJQUFsQjtBQUNIOzs7MkJBRU05QyxVLEVBQVk7QUFBQTs7QUFDZixXQUFLK0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxFQUFkOztBQUVBLFdBQUssSUFBSWxCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsYUFBS2lCLGFBQUwsQ0FBbUJFLElBQW5CLENBQXdCLEtBQUt2QyxPQUFMLENBQWF3QyxrQkFBYixFQUF4QjtBQUNBLGFBQUtILGFBQUwsQ0FBbUJqQixDQUFuQixFQUFzQkwsTUFBdEIsR0FBK0J6QixVQUFVLENBQUM4QixDQUFELENBQXpDO0FBRUEsYUFBS00sYUFBTCxDQUFtQk4sQ0FBbkIsSUFBd0IsS0FBS3BCLE9BQUwsQ0FBYTZCLFVBQWIsRUFBeEI7QUFDQSxhQUFLUSxhQUFMLENBQW1CakIsQ0FBbkIsRUFBc0JVLE9BQXRCLENBQThCLEtBQUtKLGFBQUwsQ0FBbUJOLENBQW5CLENBQTlCO0FBQ0EsYUFBS00sYUFBTCxDQUFtQk4sQ0FBbkIsRUFBc0JVLE9BQXRCLENBQThCLEtBQUtFLGtCQUFuQztBQUNBLGFBQUtOLGFBQUwsQ0FBbUJOLENBQW5CLEVBQXNCcUIsSUFBdEIsQ0FBMkJDLEtBQTNCLEdBQW1DLENBQW5DO0FBRUEsYUFBS0wsYUFBTCxDQUFtQmpCLENBQW5CLEVBQXNCdUIsSUFBdEIsR0FBNkIsSUFBN0I7QUFDSDs7QUFFRCxXQUFLLElBQUl2QixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLENBQXBCLEVBQXVCQSxFQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLGFBQUtrQixNQUFMLENBQVlDLElBQVosQ0FBaUIsS0FBS3ZDLE9BQUwsQ0FBYXdDLGtCQUFiLEVBQWpCO0FBQ0EsYUFBS0YsTUFBTCxDQUFZbEIsRUFBWixFQUFlTCxNQUFmLEdBQXdCekIsVUFBVSxDQUFDOEIsRUFBQyxHQUFDLENBQUgsQ0FBbEM7QUFFQSxhQUFLTyxZQUFMLENBQWtCUCxFQUFsQixJQUF1QixLQUFLcEIsT0FBTCxDQUFhNkIsVUFBYixFQUF2Qjs7QUFDQSxhQUFLUyxNQUFMLENBQVlsQixFQUFaLEVBQWVVLE9BQWYsQ0FBdUIsS0FBS0gsWUFBTCxDQUFrQlAsRUFBbEIsQ0FBdkI7O0FBQ0EsYUFBS08sWUFBTCxDQUFrQlAsRUFBbEIsRUFBcUJVLE9BQXJCLENBQTZCLEtBQUtHLGlCQUFsQzs7QUFDQSxhQUFLTixZQUFMLENBQWtCUCxFQUFsQixFQUFxQnFCLElBQXJCLENBQTBCQyxLQUExQixHQUFrQyxDQUFsQztBQUVBLGFBQUtKLE1BQUwsQ0FBWWxCLEVBQVosRUFBZXVCLElBQWYsR0FBc0IsSUFBdEI7QUFDSDs7QUFFRCxVQUFJOUMsU0FBUyxHQUFHZixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7QUFDQSxVQUFJaUQsU0FBUyxHQUFHOUQsUUFBUSxDQUFDYSxhQUFULENBQXVCLGFBQXZCLENBQWhCOztBQUNBRSxlQUFTLENBQUNnRCxPQUFWLEdBQW9CLFlBQU07QUFDdEIsWUFBR0QsU0FBUyxDQUFDRSxFQUFWLEtBQWlCLGFBQXBCLEVBQW1DO0FBQy9CLGNBQUlqRCxTQUFTLENBQUNrRCxZQUFWLENBQXVCLFlBQXZCLE1BQXlDLFFBQTdDLEVBQXVEO0FBQ25EbEQscUJBQVMsQ0FBQ0MsaUJBQVYsQ0FBNEJGLFlBQTVCLENBQXlDLEtBQXpDLEVBQWdELDJCQUFoRDtBQUNBQyxxQkFBUyxDQUFDRCxZQUFWLENBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLEVBRm1ELENBSW5EOztBQUNBZCxvQkFBUSxDQUFDYSxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0MsWUFBekMsQ0FBc0QsT0FBdEQsRUFBK0QsUUFBL0Q7O0FBRUEsZ0JBQUcsS0FBSSxDQUFDc0MsYUFBTCxLQUF1QixDQUExQixFQUE2QjtBQUN6QixtQkFBSyxJQUFJZCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHLENBQXBCLEVBQXVCQSxHQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLHFCQUFJLENBQUNRLG1CQUFMLENBQXlCYSxJQUF6QixDQUE4QkMsS0FBOUIsR0FBc0MsR0FBdEM7O0FBQ0EscUJBQUksQ0FBQ0wsYUFBTCxDQUFtQmpCLEdBQW5CLEVBQXNCNEIsS0FBdEIsQ0FBNEIsQ0FBNUI7O0FBQ0EscUJBQUksQ0FBQ1YsTUFBTCxDQUFZbEIsR0FBWixFQUFlNEIsS0FBZixDQUFxQixDQUFyQjtBQUNIOztBQUNELG1CQUFJLENBQUNkLGFBQUwsR0FOeUIsQ0FRekI7O0FBQ0Esa0JBQUllLFFBQVEsR0FBRzdDLEtBQUssQ0FBQzhDLElBQU4sQ0FBV3BFLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixtQkFBdkIsRUFBNEN3RCxRQUF2RCxFQUFpRUMsS0FBakUsQ0FBdUUsQ0FBdkUsQ0FBZjs7QUFDQSxtQkFBSyxJQUFJaEMsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzZCLFFBQVEsQ0FBQ2hDLE1BQTdCLEVBQXFDRyxHQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLG9CQUFNaUMsTUFBTSxHQUFHSixRQUFRLENBQUM3QixHQUFELENBQXZCOztBQUNBLHFCQUFJLENBQUNFLFVBQUwsQ0FBZ0JnQyxtQkFBaEIsQ0FBb0MsS0FBSSxDQUFDaEMsVUFBTCxDQUFnQmlDLFVBQWhCLENBQTJCbkMsR0FBM0IsQ0FBcEMsRUFBbUVpQyxNQUFuRTtBQUNIOztBQUVELGtCQUFJRyxPQUFPLEdBQUdwRCxLQUFLLENBQUM4QyxJQUFOLENBQVdwRSxRQUFRLENBQUNhLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDd0QsUUFBeEQsRUFBa0VDLEtBQWxFLENBQXdFLENBQXhFLENBQWQ7O0FBQ0EsbUJBQUssSUFBSWhDLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdvQyxPQUFPLENBQUN2QyxNQUE1QixFQUFvQ0csR0FBQyxFQUFyQyxFQUF5QztBQUNyQyxvQkFBTWlDLE9BQU0sR0FBR0csT0FBTyxDQUFDcEMsR0FBRCxDQUF0Qjs7QUFDQSxxQkFBSSxDQUFDRSxVQUFMLENBQWdCZ0MsbUJBQWhCLENBQW9DLEtBQUksQ0FBQ2hDLFVBQUwsQ0FBZ0JpQyxVQUFoQixDQUEyQm5DLEdBQTNCLENBQXBDLEVBQW1FaUMsT0FBbkU7QUFDSDtBQUNKLGFBcEJELE1Bb0JPO0FBQ0gsbUJBQUksQ0FBQ3pCLG1CQUFMLENBQXlCYSxJQUF6QixDQUE4QkMsS0FBOUIsR0FBc0MsR0FBdEM7QUFDSDtBQUNKLFdBOUJELE1BOEJPO0FBQ0gsaUJBQUksQ0FBQ2QsbUJBQUwsQ0FBeUJhLElBQXpCLENBQThCQyxLQUE5QixHQUFzQyxDQUF0QztBQUVBN0MscUJBQVMsQ0FBQ0MsaUJBQVYsQ0FBNEJGLFlBQTVCLENBQXlDLEtBQXpDLEVBQWdELHdCQUFoRDtBQUNBQyxxQkFBUyxDQUFDRCxZQUFWLENBQXVCLFlBQXZCLEVBQXFDLFFBQXJDLEVBSkcsQ0FNSDs7QUFDQWQsb0JBQVEsQ0FBQ2EsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNDLFlBQXpDLENBQXNELE9BQXRELEVBQStELFNBQS9EO0FBQ0g7QUFDSjtBQUNKLE9BMUNEOztBQTRDQSxVQUFJNkQsV0FBVyxHQUFHM0UsUUFBUSxDQUFDYSxhQUFULENBQXVCLGdCQUF2QixDQUFsQjtBQUNBLFVBQUkrRCxVQUFVLEdBQUc1RSxRQUFRLENBQUNhLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBakI7QUFDQSxVQUFJZ0UsTUFBTSxHQUFHN0UsUUFBUSxDQUFDYSxhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0E4RCxpQkFBVyxDQUFDWixPQUFaLEdBQXNCLFVBQUNlLEtBQUQsRUFBVztBQUM3QkEsYUFBSyxDQUFDQyxlQUFOLEdBRDZCLENBRTdCOztBQUNBLFlBQUcsQ0FBQ0osV0FBVyxDQUFDSyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixPQUEvQixDQUFKLEVBQTZDO0FBQ3pDO0FBQ0FOLHFCQUFXLENBQUM3RCxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDO0FBQ0E4RCxvQkFBVSxDQUFDOUQsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNBK0QsZ0JBQU0sQ0FBQy9ELFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFKeUMsQ0FNekM7O0FBQ0EsZUFBSSxDQUFDcUMsaUJBQUwsQ0FBdUJRLElBQXZCLENBQTRCQyxLQUE1QixHQUFvQyxDQUFwQztBQUNBLGVBQUksQ0FBQ1Ysa0JBQUwsQ0FBd0JTLElBQXhCLENBQTZCQyxLQUE3QixHQUFxQyxHQUFyQztBQUVBNUQsa0JBQVEsQ0FBQ2EsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLFlBQTFDLENBQXVELE9BQXZELEVBQWdFLFNBQWhFO0FBQ0FkLGtCQUFRLENBQUNhLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxRQUEvRDtBQUNIO0FBQ0osT0FoQkQ7O0FBa0JBOEQsZ0JBQVUsQ0FBQ2IsT0FBWCxHQUFxQixVQUFDZSxLQUFELEVBQVc7QUFDNUJBLGFBQUssQ0FBQ0MsZUFBTixHQUQ0QixDQUU1Qjs7QUFDQSxZQUFJLENBQUNILFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQkMsUUFBckIsQ0FBOEIsT0FBOUIsQ0FBTCxFQUE2QztBQUN6QztBQUNBTCxvQkFBVSxDQUFDOUQsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNBNkQscUJBQVcsQ0FBQzdELFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsT0FBbEM7QUFDQStELGdCQUFNLENBQUMvRCxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLEVBSnlDLENBTXpDOztBQUNBLGVBQUksQ0FBQ3FDLGlCQUFMLENBQXVCUSxJQUF2QixDQUE0QkMsS0FBNUIsR0FBb0MsR0FBcEM7QUFDQSxlQUFJLENBQUNWLGtCQUFMLENBQXdCUyxJQUF4QixDQUE2QkMsS0FBN0IsR0FBcUMsQ0FBckM7QUFFQTVELGtCQUFRLENBQUNhLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxTQUEvRDtBQUNBZCxrQkFBUSxDQUFDYSxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsWUFBMUMsQ0FBdUQsT0FBdkQsRUFBZ0UsUUFBaEU7QUFFSDtBQUNKLE9BakJEOztBQW1CQStELFlBQU0sQ0FBQ2QsT0FBUCxHQUFpQixVQUFDZSxLQUFELEVBQVc7QUFDeEJBLGFBQUssQ0FBQ0MsZUFBTjs7QUFDQSxZQUFJLENBQUNGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEIsT0FBMUIsQ0FBTCxFQUF5QztBQUNyQztBQUNBSixnQkFBTSxDQUFDL0QsWUFBUCxDQUFvQixPQUFwQixFQUE2QixPQUE3QjtBQUNBOEQsb0JBQVUsQ0FBQzlELFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBakM7QUFDQTZELHFCQUFXLENBQUM3RCxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBSnFDLENBTXJDOztBQUNBLGVBQUksQ0FBQ3FDLGlCQUFMLENBQXVCUSxJQUF2QixDQUE0QkMsS0FBNUIsR0FBb0MsR0FBcEM7QUFDQSxlQUFJLENBQUNWLGtCQUFMLENBQXdCUyxJQUF4QixDQUE2QkMsS0FBN0IsR0FBcUMsR0FBckM7QUFFQTVELGtCQUFRLENBQUNhLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxRQUFoRTtBQUNBZCxrQkFBUSxDQUFDYSxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0MsWUFBekMsQ0FBc0QsT0FBdEQsRUFBK0QsUUFBL0Q7QUFDSDtBQUNKLE9BZkQ7QUFnQkg7Ozs7OztBQUdVVixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDckxNcUMsVTs7O0FBQ0Ysd0JBQWM7QUFBQTs7QUFDVixTQUFLeUMsT0FBTCxHQUFlbEYsUUFBUSxDQUFDYSxhQUFULENBQXVCLG1CQUF2QixFQUE0Q3dELFFBQTNEO0FBQ0EsU0FBS2MsVUFBTCxHQUFrQixLQUFLRCxPQUFMLENBQWEvQyxNQUEvQjtBQUNBLFNBQUtzQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS1csa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0IxQyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNBLFNBQUsyQyxlQUFMLEdBQXVCLEtBQUtELGtCQUFMLEVBQXZCO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCNUMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDSDs7Ozt5Q0FFb0I7QUFDakIsVUFBSTJDLGVBQWUsR0FBRyxFQUF0QjtBQUNBLFVBQUlFLFlBQVksR0FBRyxDQUFuQjs7QUFDQSxXQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs2QyxVQUF6QixFQUFxQzdDLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSWtELFVBQVUsR0FBRyxFQUFqQjtBQUNBLFlBQUlDLFFBQVEsR0FBRyxLQUFLUCxPQUFMLENBQWE1QyxDQUFiLEVBQWdCb0QsU0FBaEIsQ0FBMEJDLEtBQTFCLENBQWdDLElBQWhDLEVBQXNDLENBQXRDLENBQWY7QUFDQSxZQUFJQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0UsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJFLFdBQXZCLEVBQWhCO0FBQ0EsYUFBS3BCLFVBQUwsQ0FBZ0JoQixJQUFoQixDQUFxQm1DLFNBQXJCOztBQUNBLGFBQUksSUFBSUUsQ0FBQyxHQUFHUCxZQUFaLEVBQTBCTyxDQUFDLEdBQUdQLFlBQVksR0FBRyxDQUE3QyxFQUFnRE8sQ0FBQyxFQUFqRCxFQUFxRDtBQUNqRE4sb0JBQVUsQ0FBQy9CLElBQVgseUNBQWlEbUMsU0FBakQsY0FBOERFLENBQUMsR0FBQyxDQUFoRTtBQUNIOztBQUNEVCx1QkFBZSxDQUFDTyxTQUFELENBQWYsR0FBNkJKLFVBQTdCO0FBQ0FELG9CQUFZLElBQUksQ0FBaEI7QUFDSDs7QUFDRCxhQUFPRixlQUFQO0FBQ0g7OztnQ0FFV08sUyxFQUFXckIsTSxFQUFRakMsQyxFQUFHO0FBQzlCaUMsWUFBTSxDQUFDd0IsR0FBUCxHQUFhLEtBQUtWLGVBQUwsQ0FBcUJPLFNBQXJCLEVBQWdDdEQsQ0FBaEMsQ0FBYjtBQUNIOzs7d0NBRW1Cc0QsUyxFQUFXckIsTSxFQUFRO0FBQUE7O0FBQ25DLFVBQUlqQyxDQUFDLEdBQUcsQ0FBUjtBQUNBMEQsaUJBQVcsQ0FDUCxZQUFNO0FBQ0YxRCxTQUFDO0FBQ0RBLFNBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsYUFBSSxDQUFDZ0QsV0FBTCxDQUFpQk0sU0FBakIsRUFBNEJyQixNQUE1QixFQUFvQ2pDLENBQXBDO0FBQ0gsT0FMTSxFQU1MLDJCQU5LLENBQVg7QUFPSDs7Ozs7O0FBR1VHLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQ00vQixTOzs7QUFDRixxQkFBWXVCLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS2dFLGdCQUFMLEdBQXdCakcsUUFBUSxDQUFDYSxhQUFULENBQXVCLG1CQUF2QixFQUE0Q3dELFFBQXBFO0FBQ0EsU0FBSzZCLFNBQUwsR0FBaUJsRyxRQUFRLENBQUNhLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUN3RCxRQUF0RDtBQUNBLFNBQUs4QixPQUFMLEdBQWVuRyxRQUFRLENBQUNhLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWY7QUFDQSxTQUFLdUYsS0FBTCxHQUFhcEcsUUFBUSxDQUFDYSxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxTQUFLd0YsUUFBTCxHQUFnQnJHLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBLFNBQUt5RixXQUFMLEdBQW1CdEcsUUFBUSxDQUFDYSxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBRUEsU0FBSzBGLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCN0QsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBN0I7QUFDQSxTQUFLOEQsdUJBQUwsR0FBK0IsS0FBS0EsdUJBQUwsQ0FBNkI5RCxJQUE3QixDQUFrQyxJQUFsQyxDQUEvQjtBQUNBLFNBQUtULE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7OzBDQUVxQkssQyxFQUFHO0FBQ3JCLFdBQUssSUFBSXdELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csZ0JBQUwsQ0FBc0I5RCxNQUExQyxFQUFrRDJELENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsWUFBSVcsS0FBSyxHQUFHLEtBQUtSLGdCQUFMLENBQXNCSCxDQUF0QixDQUFaO0FBQ0EsWUFBSUYsU0FBUyxHQUFHYSxLQUFLLENBQUNmLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCLENBQTVCLEVBQStCQSxLQUEvQixDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxFQUE2Q0UsV0FBN0MsRUFBaEI7QUFDQSxZQUFJYSxHQUFHLEdBQUcxRyxRQUFRLENBQUNhLGFBQVQsWUFBMkIrRSxTQUEzQixlQUFWOztBQUVBLFlBQUl0RCxDQUFDLEtBQUt3RCxDQUFWLEVBQWE7QUFDVCxjQUFHVyxLQUFLLENBQUN6QixTQUFOLENBQWdCQyxRQUFoQixDQUF5QixVQUF6QixDQUFILEVBQXlDO0FBQ3JDd0IsaUJBQUssQ0FBQ3pCLFNBQU4sQ0FBZ0IyQixNQUFoQixDQUF1QixVQUF2QjtBQUNBLGlCQUFLMUUsTUFBTCxDQUFZVyxhQUFaLENBQTBCa0QsQ0FBMUIsRUFBNkJuQyxJQUE3QixDQUFrQ0MsS0FBbEMsR0FBMEMsQ0FBMUM7QUFFQThDLGVBQUcsQ0FBQzVGLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsUUFBMUI7QUFDQWQsb0JBQVEsQ0FBQ2EsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNDLFlBQXpDLENBQXNELE9BQXRELEVBQStELFNBQS9EO0FBQ0gsV0FORCxNQU1PO0FBQ0gyRixpQkFBSyxDQUFDekIsU0FBTixDQUFnQjRCLEdBQWhCLENBQW9CLFVBQXBCO0FBQ0EsaUJBQUszRSxNQUFMLENBQVlXLGFBQVosQ0FBMEJrRCxDQUExQixFQUE2Qm5DLElBQTdCLENBQWtDQyxLQUFsQyxHQUEwQyxDQUExQztBQUVBOEMsZUFBRyxDQUFDNUYsWUFBSixDQUFpQixPQUFqQixFQUEwQixTQUExQjtBQUNBZCxvQkFBUSxDQUFDYSxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0MsWUFBekMsQ0FBc0QsT0FBdEQsRUFBK0QsUUFBL0Q7QUFDSDtBQUNKLFNBZEQsTUFjTztBQUNIMkYsZUFBSyxDQUFDekIsU0FBTixDQUFnQjJCLE1BQWhCLENBQXVCLFVBQXZCO0FBQ0EsZUFBSzFFLE1BQUwsQ0FBWVcsYUFBWixDQUEwQmtELENBQTFCLEVBQTZCbkMsSUFBN0IsQ0FBa0NDLEtBQWxDLEdBQTBDLENBQTFDO0FBRUE4QyxhQUFHLENBQUM1RixZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFFBQTFCO0FBQ0g7QUFDSjtBQUNKOzs7NENBRXVCd0IsQyxFQUFHO0FBQ3ZCLFdBQUssSUFBSXdELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0ksU0FBTCxDQUFlL0QsTUFBbkMsRUFBMkMyRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLFlBQUlXLEtBQUssR0FBRyxLQUFLUCxTQUFMLENBQWVKLENBQWYsQ0FBWjtBQUNBLFlBQUlGLFNBQVMsR0FBR2EsS0FBSyxDQUFDZixTQUFOLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUE0QixDQUE1QixFQUErQkEsS0FBL0IsQ0FBcUMsR0FBckMsRUFBMEMsQ0FBMUMsRUFBNkNFLFdBQTdDLEVBQWhCO0FBQ0EsWUFBSWEsR0FBRyxHQUFHMUcsUUFBUSxDQUFDYSxhQUFULFlBQTJCK0UsU0FBM0IsZ0JBQVY7O0FBRUEsWUFBSXRELENBQUMsS0FBS3dELENBQVYsRUFBYTtBQUVULGNBQUdXLEtBQUssQ0FBQ3pCLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLFVBQXpCLENBQUgsRUFBeUM7QUFDckN3QixpQkFBSyxDQUFDekIsU0FBTixDQUFnQjJCLE1BQWhCLENBQXVCLFVBQXZCO0FBQ0EsaUJBQUsxRSxNQUFMLENBQVlZLFlBQVosQ0FBeUJpRCxDQUF6QixFQUE0Qm5DLElBQTVCLENBQWlDQyxLQUFqQyxHQUF5QyxDQUF6QztBQUVBOEMsZUFBRyxDQUFDNUYsWUFBSixDQUFpQixPQUFqQixFQUEwQixRQUExQjtBQUNBZCxvQkFBUSxDQUFDYSxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsWUFBMUMsQ0FBdUQsT0FBdkQsRUFBZ0UsU0FBaEU7QUFDSCxXQU5ELE1BTU87QUFDSDJGLGlCQUFLLENBQUN6QixTQUFOLENBQWdCNEIsR0FBaEIsQ0FBb0IsVUFBcEI7QUFDQSxpQkFBSzNFLE1BQUwsQ0FBWVksWUFBWixDQUF5QmlELENBQXpCLEVBQTRCbkMsSUFBNUIsQ0FBaUNDLEtBQWpDLEdBQXlDLENBQXpDO0FBRUE4QyxlQUFHLENBQUM1RixZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0FkLG9CQUFRLENBQUNhLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxRQUFoRTtBQUNIO0FBQ0osU0FmRCxNQWVPO0FBQ0gyRixlQUFLLENBQUN6QixTQUFOLENBQWdCMkIsTUFBaEIsQ0FBdUIsVUFBdkI7QUFDQSxlQUFLMUUsTUFBTCxDQUFZWSxZQUFaLENBQXlCaUQsQ0FBekIsRUFBNEJuQyxJQUE1QixDQUFpQ0MsS0FBakMsR0FBeUMsQ0FBekM7QUFFQThDLGFBQUcsQ0FBQzVGLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsUUFBMUI7QUFDSDtBQUNKO0FBQ0o7OztnQ0FFVztBQUNSLFdBQUtxRixPQUFMLENBQWFyRixZQUFiLENBQTBCLE9BQTFCLEVBQW1DLGtCQUFuQztBQUNBLFdBQUtzRixLQUFMLENBQVd0RixZQUFYLENBQXdCLE9BQXhCLEVBQWlDLGFBQWpDO0FBQ0EsV0FBS3VGLFFBQUwsQ0FBY3ZGLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0MsV0FBcEM7QUFDSDs7O2lDQUVZO0FBQ1QsV0FBS3FGLE9BQUwsQ0FBYXJGLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsMkJBQW5DO0FBQ0EsV0FBS3NGLEtBQUwsQ0FBV3RGLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsc0JBQWpDO0FBQ0EsV0FBS3VGLFFBQUwsQ0FBY3ZGLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0Msc0JBQXBDO0FBQ0g7Ozt3Q0FFbUI7QUFBQTs7QUFBQSxpQ0FDUHdCLENBRE87QUFFWixZQUFJbUUsS0FBSyxHQUFHLEtBQUksQ0FBQ1IsZ0JBQUwsQ0FBc0IzRCxDQUF0QixDQUFaO0FBQ0FtRSxhQUFLLENBQUN4RyxnQkFBTixDQUF1QixPQUF2QixFQUFnQztBQUFBLGlCQUFNLEtBQUksQ0FBQ3NHLHFCQUFMLENBQTJCakUsQ0FBM0IsQ0FBTjtBQUFBLFNBQWhDO0FBSFk7O0FBQ2hCLFdBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMkQsZ0JBQUwsQ0FBc0I5RCxNQUExQyxFQUFrREcsQ0FBQyxFQUFuRCxFQUF1RDtBQUFBLGNBQTlDQSxDQUE4QztBQUd0RDs7QUFKZSxtQ0FNUEEsRUFOTztBQU9aLFlBQUltRSxLQUFLLEdBQUcsS0FBSSxDQUFDUCxTQUFMLENBQWU1RCxFQUFmLENBQVo7O0FBQ0FtRSxhQUFLLENBQUMxQyxPQUFOLEdBQWdCO0FBQUEsaUJBQU0sS0FBSSxDQUFDeUMsdUJBQUwsQ0FBNkJsRSxFQUE3QixDQUFOO0FBQUEsU0FBaEI7QUFSWTs7QUFNaEIsV0FBSyxJQUFJQSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEtBQUs0RCxTQUFMLENBQWUvRCxNQUFuQyxFQUEyQ0csRUFBQyxFQUE1QyxFQUFnRDtBQUFBLGVBQXZDQSxFQUF1QztBQUcvQzs7QUFFRCxXQUFLNkQsT0FBTCxDQUFhcEMsT0FBYixHQUF1QixZQUFNO0FBQ3pCLGFBQUksQ0FBQzhDLFVBQUw7QUFDSCxPQUZEOztBQUlBLFdBQUtSLFFBQUwsQ0FBY3RDLE9BQWQsR0FBd0IsVUFBQ2UsS0FBRCxFQUFXO0FBQy9CLGFBQUksQ0FBQytCLFVBQUw7O0FBQ0EvQixhQUFLLENBQUNDLGVBQU47QUFDSCxPQUhEOztBQUtBLFdBQUtxQixLQUFMLENBQVdyQyxPQUFYLEdBQXFCLFVBQUNlLEtBQUQsRUFBVztBQUM1QkEsYUFBSyxDQUFDQyxlQUFOO0FBQ0gsT0FGRDs7QUFJQSxXQUFLdUIsV0FBTCxDQUFpQnZDLE9BQWpCLEdBQTJCLFlBQU07QUFDN0IsYUFBSSxDQUFDK0MsU0FBTDtBQUNILE9BRkQ7QUFHSDs7Ozs7O0FBR1VwRyx3RUFBZixFOzs7Ozs7Ozs7OztBQ25IQSx1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi9zY3JpcHRzL2J1ZmZlcic7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vc2NyaXB0cy9zZWxlY3Rpb24nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5uZXdCdWZmZXIgPSBuZXcgQnVmZmVyKCk7XG4gICAgbmV3QnVmZmVyLmluaXQoKTtcbiAgICBuZXdCdWZmZXIub25Mb2FkKG5ld0J1ZmZlci5idWZmZXJMb2FkZXIuYnVmZmVyTGlzdCk7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihuZXdCdWZmZXIpO1xuICAgIHNlbGVjdGlvbi5hZGRDbGlja0xpc3RlbmVycygpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGRlbi1sb2FkaW5nLWJnXCIpO1xuICAgIH0sIDQwMDApO1xuXG4gICAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXktcGF1c2UtaW1nXCIpO1xuICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9wbGF5LnBuZ1wiKTtcbiAgICB9LCA4MDAwKTtcbn0pOyIsImNsYXNzIEJ1ZmZlckxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdXJsTGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy51cmxMaXN0ID0gdXJsTGlzdDtcbiAgICAgICAgdGhpcy5vbmxvYWQgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5idWZmZXJMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubG9hZENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBsb2FkQnVmZmVyKHVybCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgICAgIGxldCBsb2FkZXIgPSB0aGlzO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKFxuICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGRlY29kaW5nIGZpbGUgZGF0YTogJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmJ1ZmZlckxpc3RbaW5kZXhdID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKytsb2FkZXIubG9hZENvdW50ID09IGxvYWRlci51cmxMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLm9ubG9hZChsb2FkZXIuYnVmZmVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoJ0J1ZmZlckxvYWRlcjogWEhSIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXJsTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkQnVmZmVyKHRoaXMudXJsTGlzdFtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlckxvYWRlcjsiLCJpbXBvcnQgQnVmZmVyTG9hZGVyIGZyb20gJy4vYnVmZmVyLWxvYWRlci5qcyc7XG5pbXBvcnQgSW1hZ2VUaW1lciBmcm9tICcuL2ltYWdlLXRpbWVyLmpzJztcblxuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVRpbWVyID0gbmV3IEltYWdlVGltZXIoKTtcbiAgICAgICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmluc3RHYWluTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy52b3hHYWluTm9kZXMgPSBbXTtcblxuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICB0aGlzLm51bVBsYXlDbGlja3MgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCkge1xuICAgICAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2FyaWFuYV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2dyaW1lc19pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2xpenpvX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvcm9ieW5faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9raW1faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9qdXN0aW5faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9jaGFybGlfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9rYXR5X2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9hcmlhbmFfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvZ3JpbWVzX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2xpenpvX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL3JvYnluX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2tpbV92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9qdXN0aW5fdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvY2hhcmxpX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2thdHlfdm94LndhdidcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlci5sb2FkKCk7XG4gICAgfVxuICAgIFxuICAgIG9uTG9hZChidWZmZXJMaXN0KSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFscyA9IFtdO1xuICAgICAgICB0aGlzLnZvY2FscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbaV07XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0uY29ubmVjdCh0aGlzLmluc3RHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnZvY2Fscy5wdXNoKHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2krOF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLmNvbm5lY3QodGhpcy52b3hHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy52b3hHYWluTm9kZXNbaV0uY29ubmVjdCh0aGlzLnZveE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgcGxheVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktcGF1c2UnKTtcbiAgICAgICAgbGV0IGJ1dHRvbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWltZ1wiKVxuICAgICAgICBwbGF5UGF1c2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKGJ1dHRvbkltZy5pZCAhPT0gXCJsb2FkaW5nLWltZ1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlQYXVzZS5nZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIpID09PSBcInBhdXNlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL3NvdW5kb24ucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBsYXlpbmdcIik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vZ2V0IHJpZCBvZiBibGFjayBiZ1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGwtYmxhY2stYmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubnVtUGxheUNsaWNrcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0uc3RhcnQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0uc3RhcnQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bVBsYXlDbGlja3MrKztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdHJpZ2dlciBpbWFnZSBjaGFuZ2VyIGZvciBBTEwgMTYgaW1nIHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0SW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LWltZy13cmFwcGVyXCIpLmNoaWxkcmVuKS5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdEltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSBpbnN0SW1nc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGltZXIudHJpZ2dlckltYWdlQ2hhbmdlcyh0aGlzLmltYWdlVGltZXIuZmlyc3ROYW1lc1tpXSwgaW1nVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2b3hJbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWltZy13cmFwcGVyXCIpLmNoaWxkcmVuKS5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdm94SW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IHZveEltZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRpbWVyLnRyaWdnZXJJbWFnZUNoYW5nZXModGhpcy5pbWFnZVRpbWVyLmZpcnN0TmFtZXNbaV0sIGltZ1RhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL211dGUucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBhdXNlZFwiKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9jb3ZlciB3aXRoIGJsYWNrIGJnXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluc3RTb2xvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0LXNvbG8tYnRuXCIpO1xuICAgICAgICBsZXQgdm94U29sb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm94LXNvbG8tYnRuXCIpO1xuICAgICAgICBsZXQgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1idG4nKTtcbiAgICAgICAgaW5zdFNvbG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvL2lmIGl0IGlzbid0IGFscmVhZHkgc29sb2RcbiAgICAgICAgICAgIGlmKCFpbnN0U29sb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNvbG9kXCIpO1xuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vbXV0ZSB2b3ggY2hhbm5lbFxuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZveFNvbG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvL2lmIGl0IGlzbid0IGFscmVhZHkgc29sb2RcbiAgICAgICAgICAgIGlmICghdm94U29sb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vbXV0ZSBpbnN0IGNoYW5uZWxcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFsbEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICghYWxsQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNvbG9kXCIpO1xuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy91bm11dGUgYm90aCBjaGFubmVsc1xuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcjsiLCJjbGFzcyBJbWFnZVRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0cnVtZW50YWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLm51bUFydGlzdHMgPSB0aGlzLmVsZUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MgPSB0aGlzLmdhdGhlckltYWdlU3RyaW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmltYWdlU3RyaW5nc09iaiA9IHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1hZ2UgPSB0aGlzLmNoYW5nZUltYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2F0aGVySW1hZ2VTdHJpbmdzKCkge1xuICAgICAgICBsZXQgaW1hZ2VTdHJpbmdzT2JqID0ge307XG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQXJ0aXN0czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJ0aXN0UGljcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGZ1bGxOYW1lID0gdGhpcy5lbGVMaXN0W2ldLmlubmVySFRNTC5zcGxpdChcIiAtXCIpWzBdO1xuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWVzLnB1c2goZmlyc3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGltYWdlc0xvYWRlZDsgaiA8IGltYWdlc0xvYWRlZCArIDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGFydGlzdFBpY3MucHVzaChgLi9kaXN0L2ltYWdlcy9hcnRpc3QtcGljdHVyZXMvJHtmaXJzdE5hbWV9LyR7aisxfS5qcGdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlU3RyaW5nc09ialtmaXJzdE5hbWVdID0gYXJ0aXN0UGljcztcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZVN0cmluZ3NPYmo7XG4gICAgfVxuXG4gICAgY2hhbmdlSW1hZ2UoZmlyc3ROYW1lLCBpbWdUYWcsIGkpIHtcbiAgICAgICAgaW1nVGFnLnNyYyA9IHRoaXMuaW1hZ2VTdHJpbmdzT2JqW2ZpcnN0TmFtZV1baV07XG4gICAgfVxuXG4gICAgdHJpZ2dlckltYWdlQ2hhbmdlcyhmaXJzdE5hbWUsIGltZ1RhZykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHNldEludGVydmFsKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpID0gaSAlIDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZShmaXJzdE5hbWUsIGltZ1RhZywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIDUwOC40NzQ1NzYyNzExODY0NDA2Nzc5NjYxMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpbWVyOyIsImNsYXNzIFNlbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zdHJ1bWVudGFscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy52b2NhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZvY2Fscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5tb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGlsZCcpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1ZXN0aW9uLWJ0bicpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrID0gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljayA9IHRoaXMucHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LWxlZnQtaW1nYCk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2soaSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LXJpZ2h0LWltZ2ApO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhcnQtYnRuXCIpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWJhY2tncm91bmQtZmFkZS1vdXRcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZC1mYWRlLW91dFwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkLWZhZGUtb3V0XCIpO1xuICAgIH1cbiAgICBcbiAgICBhZGRDbGlja0xpc3RlbmVycygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2soaSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbEJnLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVlc3Rpb25CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9