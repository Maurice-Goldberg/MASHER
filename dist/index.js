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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibmV3QnVmZmVyIiwiQnVmZmVyIiwiaW5pdCIsIm9uTG9hZCIsImJ1ZmZlckxvYWRlciIsImJ1ZmZlckxpc3QiLCJzZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJhZGRDbGlja0xpc3RlbmVycyIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwicGxheVBhdXNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJCdWZmZXJMb2FkZXIiLCJjb250ZXh0IiwidXJsTGlzdCIsImNhbGxiYWNrIiwib25sb2FkIiwiQXJyYXkiLCJsb2FkQ291bnQiLCJ1cmwiLCJpbmRleCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJsb2FkZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJyZXNwb25zZSIsImJ1ZmZlciIsImFsZXJ0IiwibGVuZ3RoIiwib25lcnJvciIsInNlbmQiLCJpIiwibG9hZEJ1ZmZlciIsImltYWdlVGltZXIiLCJJbWFnZVRpbWVyIiwiYmluZCIsIkF1ZGlvQ29udGV4dCIsImluc3RHYWluTm9kZXMiLCJ2b3hHYWluTm9kZXMiLCJmaW5hbE1hc3RlckdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImluc3RNYXN0ZXJHYWluTm9kZSIsInZveE1hc3RlckdhaW5Ob2RlIiwibnVtUGxheUNsaWNrcyIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImxvYWQiLCJpbnN0cnVtZW50YWxzIiwidm9jYWxzIiwicHVzaCIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImdhaW4iLCJ2YWx1ZSIsImxvb3AiLCJidXR0b25JbWciLCJvbmNsaWNrIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydCIsImluc3RJbWdzIiwiZnJvbSIsImNoaWxkcmVuIiwic2xpY2UiLCJpbWdUYWciLCJ0cmlnZ2VySW1hZ2VDaGFuZ2VzIiwiZmlyc3ROYW1lcyIsInZveEltZ3MiLCJpbnN0U29sb0J0biIsInZveFNvbG9CdG4iLCJhbGxCdG4iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZWxlTGlzdCIsIm51bUFydGlzdHMiLCJnYXRoZXJJbWFnZVN0cmluZ3MiLCJpbWFnZVN0cmluZ3NPYmoiLCJjaGFuZ2VJbWFnZSIsImltYWdlc0xvYWRlZCIsImFydGlzdFBpY3MiLCJmdWxsTmFtZSIsImlubmVySFRNTCIsInNwbGl0IiwiZmlyc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJqIiwic3JjIiwic2V0SW50ZXJ2YWwiLCJpbnN0cnVtZW50YWxMaXN0Iiwidm9jYWxMaXN0IiwibW9kYWxCZyIsIm1vZGFsIiwic3RhcnRCdG4iLCJxdWVzdGlvbkJ0biIsInByb2Nlc3NJbnN0VHJhY2tDbGljayIsInByb2Nlc3NWb2NhbHNUcmFja0NsaWNrIiwiY2hpbGQiLCJpbWciLCJyZW1vdmUiLCJhZGQiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLNEQsU0FBTCxDQUFlL0QsTUFBbkMsRUFBMkNHLEVBQUMsRUFBNUMsRUFBZ0Q7QUFBQSxlQUF2Q0EsRUFBdUM7QUFHL0M7O0FBRUQsV0FBSzZELE9BQUwsQ0FBYXBDLE9BQWIsR0FBdUIsWUFBTTtBQUN6QixhQUFJLENBQUM4QyxVQUFMO0FBQ0gsT0FGRDs7QUFJQSxXQUFLUixRQUFMLENBQWN0QyxPQUFkLEdBQXdCLFVBQUNlLEtBQUQsRUFBVztBQUMvQixhQUFJLENBQUMrQixVQUFMOztBQUNBL0IsYUFBSyxDQUFDQyxlQUFOO0FBQ0gsT0FIRDs7QUFLQSxXQUFLcUIsS0FBTCxDQUFXckMsT0FBWCxHQUFxQixVQUFDZSxLQUFELEVBQVc7QUFDNUJBLGFBQUssQ0FBQ0MsZUFBTjtBQUNILE9BRkQ7O0FBSUEsV0FBS3VCLFdBQUwsQ0FBaUJ2QyxPQUFqQixHQUEyQixZQUFNO0FBQzdCLGFBQUksQ0FBQytDLFNBQUw7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQUdVcEcsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuSEEsdUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgQnVmZmVyIGZyb20gJy4vc2NyaXB0cy9idWZmZXInO1xuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuL3NjcmlwdHMvc2VsZWN0aW9uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB3aW5kb3cubmV3QnVmZmVyID0gbmV3IEJ1ZmZlcigpO1xuICAgIG5ld0J1ZmZlci5pbml0KCk7XG4gICAgbmV3QnVmZmVyLm9uTG9hZChuZXdCdWZmZXIuYnVmZmVyTG9hZGVyLmJ1ZmZlckxpc3QpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24obmV3QnVmZmVyKTtcbiAgICBzZWxlY3Rpb24uYWRkQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmctYmdcIikuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRkZW4tbG9hZGluZy1iZ1wiKTtcbiAgICB9LCA0MDAwKTtcblxuICAgIGxldCBwbGF5UGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1wYXVzZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5LXBhdXNlLWltZ1wiKTtcbiAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvcGxheS5wbmdcIik7XG4gICAgfSwgODAwMCk7XG59KTsiLCJjbGFzcyBCdWZmZXJMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybExpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudXJsTGlzdCA9IHVybExpc3Q7XG4gICAgICAgIHRoaXMub25sb2FkID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYnVmZmVyTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgbG9hZEJ1ZmZlcih1cmwsIGluZGV4KSB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcblxuICAgICAgICBsZXQgbG9hZGVyID0gdGhpcztcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRlci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdlcnJvciBkZWNvZGluZyBmaWxlIGRhdGE6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5idWZmZXJMaXN0W2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCsrbG9hZGVyLmxvYWRDb3VudCA9PSBsb2FkZXIudXJsTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5vbmxvYWQobG9hZGVyLmJ1ZmZlckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdCdWZmZXJMb2FkZXI6IFhIUiBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVybExpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlcih0aGlzLnVybExpc3RbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJMb2FkZXI7IiwiaW1wb3J0IEJ1ZmZlckxvYWRlciBmcm9tICcuL2J1ZmZlci1sb2FkZXIuanMnO1xuaW1wb3J0IEltYWdlVGltZXIgZnJvbSAnLi9pbWFnZS10aW1lci5qcyc7XG5cbmNsYXNzIEJ1ZmZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VUaW1lciA9IG5ldyBJbWFnZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuaW5pdCA9IHRoaXMuaW5pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzID0gW107XG4gICAgICAgIHRoaXMudm94R2Fpbk5vZGVzID0gW107XG5cbiAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5jb25uZWN0KHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZSk7XG4gICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgdGhpcy5udW1QbGF5Q2xpY2tzID0gMDtcbiAgICB9XG4gICAgXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgICAgdGhpcy5idWZmZXJMb2FkZXIgPSBuZXcgQnVmZmVyTG9hZGVyKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9hcmlhbmFfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9ncmltZXNfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9saXp6b19pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL3JvYnluX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2ltX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvanVzdGluX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvY2hhcmxpX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2F0eV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvYXJpYW5hX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2dyaW1lc192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9saXp6b192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9yb2J5bl92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9raW1fdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvanVzdGluX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2NoYXJsaV92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9rYXR5X3ZveC53YXYnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGhpcy5vbkxvYWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5idWZmZXJMb2FkZXIubG9hZCgpO1xuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoYnVmZmVyTGlzdCkge1xuICAgICAgICB0aGlzLmluc3RydW1lbnRhbHMgPSBbXTtcbiAgICAgICAgdGhpcy52b2NhbHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzLnB1c2godGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2ldO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RHYWluTm9kZXNbaV0gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmNvbm5lY3QodGhpcy5pbnN0R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5jb25uZWN0KHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy52b2NhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0uYnVmZmVyID0gYnVmZmVyTGlzdFtpKzhdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5jb25uZWN0KHRoaXMudm94R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy52b3hNYXN0ZXJHYWluTm9kZSk7XG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG4gICAgICAgIGxldCBidXR0b25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1pbWdcIilcbiAgICAgICAgcGxheVBhdXNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZihidXR0b25JbWcuaWQgIT09IFwibG9hZGluZy1pbWdcIikge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5UGF1c2UuZ2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiKSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9zb3VuZG9uLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLnNldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIiwgXCJwbGF5aW5nXCIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2dldCByaWQgb2YgYmxhY2sgYmdcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdWxsLWJsYWNrLWJnXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm51bVBsYXlDbGlja3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1QbGF5Q2xpY2tzKys7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RyaWdnZXIgaW1hZ2UgY2hhbmdlciBmb3IgQUxMIDE2IGltZyB0YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdEltZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdC1pbWctd3JhcHBlclwiKS5jaGlsZHJlbikuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RJbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nVGFnID0gaW5zdEltZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRpbWVyLnRyaWdnZXJJbWFnZUNoYW5nZXModGhpcy5pbWFnZVRpbWVyLmZpcnN0TmFtZXNbaV0sIGltZ1RhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdm94SW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1pbWctd3JhcHBlclwiKS5jaGlsZHJlbikuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZveEltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdUYWcgPSB2b3hJbWdzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUaW1lci50cmlnZ2VySW1hZ2VDaGFuZ2VzKHRoaXMuaW1hZ2VUaW1lci5maXJzdE5hbWVzW2ldLCBpbWdUYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9tdXRlLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLnNldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIiwgXCJwYXVzZWRcIik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vY292ZXIgd2l0aCBibGFjayBiZ1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGwtYmxhY2stYmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnN0U29sb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zdC1zb2xvLWJ0blwiKTtcbiAgICAgICAgbGV0IHZveFNvbG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZveC1zb2xvLWJ0blwiKTtcbiAgICAgICAgbGV0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtYnRuJyk7XG4gICAgICAgIGluc3RTb2xvQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy9pZiBpdCBpc24ndCBhbHJlYWR5IHNvbG9kXG4gICAgICAgICAgICBpZighaW5zdFNvbG9CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic29sb2RcIikpIHtcbiAgICAgICAgICAgICAgICAvL3Nob3cgaXQncyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzb2xvZFwiKTtcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG4gICAgICAgICAgICAgICAgYWxsQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAvL211dGUgdm94IGNoYW5uZWxcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2b3hTb2xvQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy9pZiBpdCBpc24ndCBhbHJlYWR5IHNvbG9kXG4gICAgICAgICAgICBpZiAoIXZveFNvbG9CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic29sb2RcIikpIHtcbiAgICAgICAgICAgICAgICAvL3Nob3cgaXQncyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNvbG9kXCIpO1xuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG4gICAgICAgICAgICAgICAgYWxsQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAvL211dGUgaW5zdCBjaGFubmVsXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhbGxCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoIWFsbEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzb2xvZFwiKTtcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vdW5tdXRlIGJvdGggY2hhbm5lbHNcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXI7IiwiY2xhc3MgSW1hZ2VUaW1lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zdHJ1bWVudGFscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5udW1BcnRpc3RzID0gdGhpcy5lbGVMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5maXJzdE5hbWVzID0gW107XG4gICAgICAgIHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzID0gdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbWFnZVN0cmluZ3NPYmogPSB0aGlzLmdhdGhlckltYWdlU3RyaW5ncygpO1xuICAgICAgICB0aGlzLmNoYW5nZUltYWdlID0gdGhpcy5jaGFuZ2VJbWFnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdhdGhlckltYWdlU3RyaW5ncygpIHtcbiAgICAgICAgbGV0IGltYWdlU3RyaW5nc09iaiA9IHt9O1xuICAgICAgICBsZXQgaW1hZ2VzTG9hZGVkID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUFydGlzdHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFydGlzdFBpY3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBmdWxsTmFtZSA9IHRoaXMuZWxlTGlzdFtpXS5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBmdWxsTmFtZS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lcy5wdXNoKGZpcnN0TmFtZSk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSBpbWFnZXNMb2FkZWQ7IGogPCBpbWFnZXNMb2FkZWQgKyA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBhcnRpc3RQaWNzLnB1c2goYC4vZGlzdC9pbWFnZXMvYXJ0aXN0LXBpY3R1cmVzLyR7Zmlyc3ROYW1lfS8ke2orMX0uanBnYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWFnZVN0cmluZ3NPYmpbZmlyc3ROYW1lXSA9IGFydGlzdFBpY3M7XG4gICAgICAgICAgICBpbWFnZXNMb2FkZWQgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VTdHJpbmdzT2JqO1xuICAgIH1cblxuICAgIGNoYW5nZUltYWdlKGZpcnN0TmFtZSwgaW1nVGFnLCBpKSB7XG4gICAgICAgIGltZ1RhZy5zcmMgPSB0aGlzLmltYWdlU3RyaW5nc09ialtmaXJzdE5hbWVdW2ldO1xuICAgIH1cblxuICAgIHRyaWdnZXJJbWFnZUNoYW5nZXMoZmlyc3ROYW1lLCBpbWdUYWcpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaSA9IGkgJSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlSW1hZ2UoZmlyc3ROYW1lLCBpbWdUYWcsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLCA1MDguNDc0NTc2MjcxMTg2NDQwNjc3OTY2MTApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUaW1lcjsiLCJjbGFzcyBTZWxlY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKGJ1ZmZlcikge1xuICAgICAgICB0aGlzLmluc3RydW1lbnRhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3RydW1lbnRhbHMtdWxcIikuY2hpbGRyZW47XG4gICAgICAgIHRoaXMudm9jYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b2NhbHMtdWxcIikuY2hpbGRyZW47XG4gICAgICAgIHRoaXMubW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2hpbGQnKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbi1idG4nKTtcblxuICAgICAgICB0aGlzLnByb2Nlc3NJbnN0VHJhY2tDbGljayA9IHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2sgPSB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgIH1cblxuICAgIHByb2Nlc3NJbnN0VHJhY2tDbGljayhpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbnN0cnVtZW50YWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmluc3RydW1lbnRhbExpc3Rbal07XG4gICAgICAgICAgICBsZXQgZmlyc3ROYW1lID0gY2hpbGQuaW5uZXJIVE1MLnNwbGl0KFwiIC1cIilbMF0uc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zmlyc3ROYW1lfS1sZWZ0LWltZ2ApO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5pbnN0R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NWb2NhbHNUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnZvY2FsTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy52b2NhbExpc3Rbal07XG4gICAgICAgICAgICBsZXQgZmlyc3ROYW1lID0gY2hpbGQuaW5uZXJIVE1MLnNwbGl0KFwiIC1cIilbMF0uc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zmlyc3ROYW1lfS1yaWdodC1pbWdgKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IGopIHtcblxuICAgICAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci52b3hHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWJhY2tncm91bmRcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZFwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJ0LWJ0blwiKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLm1vZGFsQmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1iYWNrZ3JvdW5kLWZhZGUtb3V0XCIpO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtY2hpbGQtZmFkZS1vdXRcIik7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZC1mYWRlLW91dFwiKTtcbiAgICB9XG4gICAgXG4gICAgYWRkQ2xpY2tMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnN0cnVtZW50YWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmluc3RydW1lbnRhbExpc3RbaV07XG4gICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvY2FsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy52b2NhbExpc3RbaV07XG4gICAgICAgICAgICBjaGlsZC5vbmNsaWNrID0gKCkgPT4gdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljayhpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWxCZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnRCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWwub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==