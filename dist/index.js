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
  }, 2000);
  var playPause = document.querySelector('#play-pause');
  setTimeout(function () {
    playPause.firstElementChild.setAttribute("id", "play-pause-img");
    playPause.firstElementChild.setAttribute("src", "./dist/images/play.png");
  }, 4500);
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

      playPause.onclick = function () {
        if (playPause.getAttribute("playStatus") === "paused") {
          playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
          playPause.setAttribute("playStatus", "playing"); //get rid of black bg

          document.querySelector("#full-black-bg").setAttribute("class", "hidden");

          if (_this.numPlayClicks === 0) {
            for (var _i2 = 0; _i2 < 8; _i2++) {
              _this.finalMasterGainNode.gain.value = 1;

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
            _this.finalMasterGainNode.gain.value = 1;
          }
        } else {
          _this.finalMasterGainNode.gain.value = 0;
          playPause.firstElementChild.setAttribute("src", "./dist/images/mute.png");
          playPause.setAttribute("playStatus", "paused"); //cover with black bg

          document.querySelector("#full-black-bg").setAttribute("class", "showing");
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
          _this.instMasterGainNode.gain.value = 1;
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

          _this.voxMasterGainNode.gain.value = 1;
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

          _this.voxMasterGainNode.gain.value = 1;
          _this.instMasterGainNode.gain.value = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJuZXdCdWZmZXIiLCJCdWZmZXIiLCJpbml0Iiwib25Mb2FkIiwiYnVmZmVyTG9hZGVyIiwiYnVmZmVyTGlzdCIsInNlbGVjdGlvbiIsIlNlbGVjdGlvbiIsImFkZENsaWNrTGlzdGVuZXJzIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5UGF1c2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIkJ1ZmZlckxvYWRlciIsImNvbnRleHQiLCJ1cmxMaXN0IiwiY2FsbGJhY2siLCJvbmxvYWQiLCJBcnJheSIsImxvYWRDb3VudCIsInVybCIsImluZGV4IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsImxvYWRlciIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwiYnVmZmVyIiwiYWxlcnQiLCJsZW5ndGgiLCJvbmVycm9yIiwic2VuZCIsImkiLCJsb2FkQnVmZmVyIiwiaW1hZ2VUaW1lciIsIkltYWdlVGltZXIiLCJiaW5kIiwiQXVkaW9Db250ZXh0IiwiaW5zdEdhaW5Ob2RlcyIsInZveEdhaW5Ob2RlcyIsImZpbmFsTWFzdGVyR2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiaW5zdE1hc3RlckdhaW5Ob2RlIiwidm94TWFzdGVyR2Fpbk5vZGUiLCJudW1QbGF5Q2xpY2tzIiwid2Via2l0QXVkaW9Db250ZXh0IiwibG9hZCIsImluc3RydW1lbnRhbHMiLCJ2b2NhbHMiLCJwdXNoIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsInZhbHVlIiwibG9vcCIsIm9uY2xpY2siLCJnZXRBdHRyaWJ1dGUiLCJzdGFydCIsImluc3RJbWdzIiwiZnJvbSIsImNoaWxkcmVuIiwic2xpY2UiLCJpbWdUYWciLCJ0cmlnZ2VySW1hZ2VDaGFuZ2VzIiwiZmlyc3ROYW1lcyIsInZveEltZ3MiLCJpbnN0U29sb0J0biIsInZveFNvbG9CdG4iLCJhbGxCdG4iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZWxlTGlzdCIsIm51bUFydGlzdHMiLCJnYXRoZXJJbWFnZVN0cmluZ3MiLCJpbWFnZVN0cmluZ3NPYmoiLCJjaGFuZ2VJbWFnZSIsImltYWdlc0xvYWRlZCIsImFydGlzdFBpY3MiLCJmdWxsTmFtZSIsImlubmVySFRNTCIsInNwbGl0IiwiZmlyc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJqIiwic3JjIiwic2V0SW50ZXJ2YWwiLCJpbnN0cnVtZW50YWxMaXN0Iiwidm9jYWxMaXN0IiwibW9kYWxCZyIsIm1vZGFsIiwic3RhcnRCdG4iLCJxdWVzdGlvbkJ0biIsInByb2Nlc3NJbnN0VHJhY2tDbGljayIsInByb2Nlc3NWb2NhbHNUcmFja0NsaWNrIiwiY2hpbGQiLCJpbWciLCJyZW1vdmUiLCJhZGQiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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QUF1QixZQUFNO0FBQ3pCLGFBQUksQ0FBQzZDLFVBQUw7QUFDSCxPQUZEOztBQUlBLFdBQUtSLFFBQUwsQ0FBY3JDLE9BQWQsR0FBd0IsVUFBQ2MsS0FBRCxFQUFXO0FBQy9CLGFBQUksQ0FBQytCLFVBQUw7O0FBQ0EvQixhQUFLLENBQUNDLGVBQU47QUFDSCxPQUhEOztBQUtBLFdBQUtxQixLQUFMLENBQVdwQyxPQUFYLEdBQXFCLFVBQUNjLEtBQUQsRUFBVztBQUM1QkEsYUFBSyxDQUFDQyxlQUFOO0FBQ0gsT0FGRDs7QUFJQSxXQUFLdUIsV0FBTCxDQUFpQnRDLE9BQWpCLEdBQTJCLFlBQU07QUFDN0IsYUFBSSxDQUFDOEMsU0FBTDtBQUNILE9BRkQ7QUFHSDs7Ozs7O0FBR1VsRyx3RUFBZixFOzs7Ozs7Ozs7OztBQ25IQSx1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi9zY3JpcHRzL2J1ZmZlcic7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vc2NyaXB0cy9zZWxlY3Rpb24nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5uZXdCdWZmZXIgPSBuZXcgQnVmZmVyKCk7XG4gICAgbmV3QnVmZmVyLmluaXQoKTtcbiAgICBuZXdCdWZmZXIub25Mb2FkKG5ld0J1ZmZlci5idWZmZXJMb2FkZXIuYnVmZmVyTGlzdCk7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihuZXdCdWZmZXIpO1xuICAgIHNlbGVjdGlvbi5hZGRDbGlja0xpc3RlbmVycygpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhpZGRlbi1sb2FkaW5nLWJnXCIpO1xuICAgIH0sIDIwMDApO1xuXG4gICAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXktcGF1c2UtaW1nXCIpO1xuICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9wbGF5LnBuZ1wiKTtcbiAgICB9LCA0NTAwKTtcbn0pOyIsImNsYXNzIEJ1ZmZlckxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdXJsTGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy51cmxMaXN0ID0gdXJsTGlzdDtcbiAgICAgICAgdGhpcy5vbmxvYWQgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5idWZmZXJMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubG9hZENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBsb2FkQnVmZmVyKHVybCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgICAgIGxldCBsb2FkZXIgPSB0aGlzO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKFxuICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGRlY29kaW5nIGZpbGUgZGF0YTogJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmJ1ZmZlckxpc3RbaW5kZXhdID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKytsb2FkZXIubG9hZENvdW50ID09IGxvYWRlci51cmxMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLm9ubG9hZChsb2FkZXIuYnVmZmVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoJ0J1ZmZlckxvYWRlcjogWEhSIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXJsTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkQnVmZmVyKHRoaXMudXJsTGlzdFtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlckxvYWRlcjsiLCJpbXBvcnQgQnVmZmVyTG9hZGVyIGZyb20gJy4vYnVmZmVyLWxvYWRlci5qcyc7XG5pbXBvcnQgSW1hZ2VUaW1lciBmcm9tICcuL2ltYWdlLXRpbWVyLmpzJztcblxuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVRpbWVyID0gbmV3IEltYWdlVGltZXIoKTtcbiAgICAgICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmluc3RHYWluTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy52b3hHYWluTm9kZXMgPSBbXTtcblxuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICB0aGlzLm51bVBsYXlDbGlja3MgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpbml0KCkge1xuICAgICAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2FyaWFuYV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2dyaW1lc19pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2xpenpvX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvcm9ieW5faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9raW1faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9qdXN0aW5faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9jaGFybGlfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9rYXR5X2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9hcmlhbmFfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvZ3JpbWVzX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2xpenpvX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL3JvYnluX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2tpbV92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9qdXN0aW5fdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvY2hhcmxpX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2thdHlfdm94LndhdidcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0aGlzLm9uTG9hZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlci5sb2FkKCk7XG4gICAgfVxuICAgIFxuICAgIG9uTG9hZChidWZmZXJMaXN0KSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFscyA9IFtdO1xuICAgICAgICB0aGlzLnZvY2FscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbaV07XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0uY29ubmVjdCh0aGlzLmluc3RHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnZvY2Fscy5wdXNoKHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2krOF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLmNvbm5lY3QodGhpcy52b3hHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy52b3hHYWluTm9kZXNbaV0uY29ubmVjdCh0aGlzLnZveE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5sb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgcGxheVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktcGF1c2UnKTtcbiAgICAgICAgcGxheVBhdXNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxheVBhdXNlLmdldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIikgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9zb3VuZG9uLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBsYXlpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAvL2dldCByaWQgb2YgYmxhY2sgYmdcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGwtYmxhY2stYmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm51bVBsYXlDbGlja3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsc1tpXS5zdGFydCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtUGxheUNsaWNrcysrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vdHJpZ2dlciBpbWFnZSBjaGFuZ2VyIGZvciBBTEwgMTYgaW1nIHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3RJbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtaW1nLXdyYXBwZXJcIikuY2hpbGRyZW4pLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RJbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSBpbnN0SW1nc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUaW1lci50cmlnZ2VySW1hZ2VDaGFuZ2VzKHRoaXMuaW1hZ2VUaW1lci5maXJzdE5hbWVzW2ldLCBpbWdUYWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZveEltZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmlnaHQtaW1nLXdyYXBwZXJcIikuY2hpbGRyZW4pLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZveEltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ1RhZyA9IHZveEltZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGltZXIudHJpZ2dlckltYWdlQ2hhbmdlcyh0aGlzLmltYWdlVGltZXIuZmlyc3ROYW1lc1tpXSwgaW1nVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9tdXRlLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBhdXNlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vY292ZXIgd2l0aCBibGFjayBiZ1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5zdFNvbG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3Qtc29sby1idG5cIik7XG4gICAgICAgIGxldCB2b3hTb2xvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b3gtc29sby1idG5cIik7XG4gICAgICAgIGxldCBhbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLWJ0bicpO1xuICAgICAgICBpbnN0U29sb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vaWYgaXQgaXNuJ3QgYWxyZWFkeSBzb2xvZFxuICAgICAgICAgICAgaWYoIWluc3RTb2xvQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9tdXRlIHZveCBjaGFubmVsXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZveFNvbG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvL2lmIGl0IGlzbid0IGFscmVhZHkgc29sb2RcbiAgICAgICAgICAgIGlmICghdm94U29sb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vbXV0ZSBpbnN0IGNoYW5uZWxcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhbGxCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoIWFsbEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzb2xvZFwiKTtcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vdW5tdXRlIGJvdGggY2hhbm5lbHNcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcjsiLCJjbGFzcyBJbWFnZVRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0cnVtZW50YWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLm51bUFydGlzdHMgPSB0aGlzLmVsZUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MgPSB0aGlzLmdhdGhlckltYWdlU3RyaW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmltYWdlU3RyaW5nc09iaiA9IHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1hZ2UgPSB0aGlzLmNoYW5nZUltYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2F0aGVySW1hZ2VTdHJpbmdzKCkge1xuICAgICAgICBsZXQgaW1hZ2VTdHJpbmdzT2JqID0ge307XG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQXJ0aXN0czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJ0aXN0UGljcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGZ1bGxOYW1lID0gdGhpcy5lbGVMaXN0W2ldLmlubmVySFRNTC5zcGxpdChcIiAtXCIpWzBdO1xuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWVzLnB1c2goZmlyc3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGltYWdlc0xvYWRlZDsgaiA8IGltYWdlc0xvYWRlZCArIDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGFydGlzdFBpY3MucHVzaChgLi9kaXN0L2ltYWdlcy9hcnRpc3QtcGljdHVyZXMvJHtmaXJzdE5hbWV9LyR7aisxfS5qcGdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlU3RyaW5nc09ialtmaXJzdE5hbWVdID0gYXJ0aXN0UGljcztcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZVN0cmluZ3NPYmo7XG4gICAgfVxuXG4gICAgY2hhbmdlSW1hZ2UoZmlyc3ROYW1lLCBpbWdUYWcsIGkpIHtcbiAgICAgICAgaW1nVGFnLnNyYyA9IHRoaXMuaW1hZ2VTdHJpbmdzT2JqW2ZpcnN0TmFtZV1baV07XG4gICAgfVxuXG4gICAgdHJpZ2dlckltYWdlQ2hhbmdlcyhmaXJzdE5hbWUsIGltZ1RhZykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHNldEludGVydmFsKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpID0gaSAlIDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZShmaXJzdE5hbWUsIGltZ1RhZywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIDUwOC40NzQ1NzYyNzExODY0NDA2Nzc5NjYxMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpbWVyOyIsImNsYXNzIFNlbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zdHJ1bWVudGFscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy52b2NhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZvY2Fscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5tb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGlsZCcpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1ZXN0aW9uLWJ0bicpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrID0gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljayA9IHRoaXMucHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LWxlZnQtaW1nYCk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2soaSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtqXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LXJpZ2h0LWltZ2ApO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtYmFja2dyb3VuZFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3RhcnQtYnRuXCIpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWJhY2tncm91bmQtZmFkZS1vdXRcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZC1mYWRlLW91dFwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkLWZhZGUtb3V0XCIpO1xuICAgIH1cbiAgICBcbiAgICBhZGRDbGlja0xpc3RlbmVycygpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluc3RydW1lbnRhbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuaW5zdHJ1bWVudGFsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2soaSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLnZvY2FsTGlzdFtpXTtcbiAgICAgICAgICAgIGNoaWxkLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbEJnLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVlc3Rpb25CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9