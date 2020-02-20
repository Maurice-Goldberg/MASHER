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
  setTimeout(function () {
    document.querySelector("#loading-bg").setAttribute("id", "hidden-loading-bg");
  }, 1500);
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
    this.addFirstPlayClickListener = this.addFirstPlayClickListener.bind(this); // this.numPlayClicks = 0;
  }

  _createClass(Buffer, [{
    key: "addFirstPlayClickListener",
    value: function addFirstPlayClickListener() {
      // let playPause = document.querySelector('#play-pause');
      debugger; // playPause.onclick = () => {
      //     if (this.numPlayClicks === 0) {
      //         playPause.firstElementChild.setAttribute("id", "loading-img");
      //         playPause.firstElementChild.setAttribute("src", "./dist/images/loading.svg");
      //         this.init();
      //         this.numPlayClicks++;
      //     }
      // }
    }
  }, {
    key: "init",
    value: function init() {
      var AudioContext = window.AudioContext || window.webkitAudioContext || false;

      if (AudioContext) {
        this.context = new AudioContext();
      } else {
        // Web Audio API is not supported
        // Alert the user
        alert("Sorry, but your browser does not support the Web Audio API, which is necessary for MASHER to work! Please, upgrade to the latest version of your browser or download Google Chrome or Mozilla Firefox.");
      }

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
      var _this = this;

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

      this.finalMasterGainNode.gain.value = 0.8; //turn icon to sound on once loaded

      var playPause = document.querySelector('#play-pause');
      playPause.setAttribute("playStatus", "playing");
      playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
      playPause.firstElementChild.setAttribute("id", "play-pause-img");
      document.querySelector("#full-black-bg").setAttribute("class", "hidden");
      var instPrompt = document.querySelector('#inst-prompt');
      instPrompt.innerHTML = "Choose an instrumental! Ariana's a good start.";
      instPrompt.setAttribute("style", "margin-top: -26px; margin-bottom: 10px; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;"); //trigger image changer for ALL 16 img tags

      var instImgs = Array.from(document.querySelector("#left-img-wrapper").children).slice(2);
      instImgs.forEach(function (imgTag, i) {
        debugger;

        _this.imageTimer.triggerImageChanges(_this.imageTimer.firstNames[i], imgTag);
      });
      var voxImgs = Array.from(document.querySelector("#right-img-wrapper").children).slice(2);
      voxImgs.forEach(function (imgTag, i) {
        _this.imageTimer.triggerImageChanges(_this.imageTimer.firstNames[i], imgTag);
      });
      var selection = new _selection__WEBPACK_IMPORTED_MODULE_2__["default"](window.newBuffer);
      selection.addSelectionClickListeners();
      var buttonImg = document.querySelector(".button-img"); //click listener for all play button clicks

      playPause.onclick = function () {
        if (buttonImg.id !== "loading-img") {
          if (playPause.getAttribute("playStatus") === "paused") {
            playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
            playPause.setAttribute("playStatus", "playing"); //get rid of black bg

            document.querySelector("#full-black-bg").setAttribute("class", "hidden");
            _this.finalMasterGainNode.gain.value = 0.8;
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
    this.addSelectionClickListeners = this.addSelectionClickListeners.bind(this);
    this.addModalClickListeners = this.addModalClickListeners.bind(this);
    this.buffer = buffer;
    this.timeToLoadTracks = true;
    this.instrumentalClicked = false;
    this.vocalClicked = false;
  }

  _createClass(Selection, [{
    key: "processInstTrackClick",
    value: function processInstTrackClick(i) {
      if (!this.instrumentalClicked) {
        var instPrompt = document.querySelector('#inst-prompt');
        instPrompt.setAttribute("style", "display: none;");
        this.instrumentalClicked = true;
        var vocalPrompt = document.querySelector('#vocal-prompt');
        vocalPrompt.innerHTML = "Now choose a vocal! Justin's a great combo.";
        vocalPrompt.setAttribute("style", "margin-top: -26px; margin-bottom: 10px; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;");
      }

      if (this.vocalClicked) {
        var finalPrompt = document.querySelector('#final-prompt');
        finalPrompt.setAttribute("style", "display: none;");
      }

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
      if (this.instrumentalClicked) {
        if (!this.vocalClicked) {
          var vocalPrompt = document.querySelector('#vocal-prompt');
          vocalPrompt.setAttribute("style", "display: none;");
          this.vocalClicked = true;
          var finalPrompt = document.querySelector('#final-prompt');
          finalPrompt.innerHTML = "Now mix and match!";
          finalPrompt.setAttribute("style", "width: 340px; font-size: 30px; margin: -37.5px 0px 8px 23px; text-align: center; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;");
        } else {
          var _finalPrompt = document.querySelector('#final-prompt');

          _finalPrompt.setAttribute("style", "display: none;");
        }

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
        if (!_this2.timeToLoadTracks) {
          _this2.closeModal();
        }
      };

      this.startBtn.onclick = function (event) {
        event.stopPropagation();

        if (_this2.timeToLoadTracks) {
          _this2.buffer.init();

          _this2.timeToLoadTracks = false;
        }

        _this2.closeModal();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJuZXdCdWZmZXIiLCJCdWZmZXIiLCJzZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJhZGRNb2RhbENsaWNrTGlzdGVuZXJzIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJMb2FkZXIiLCJjb250ZXh0IiwidXJsTGlzdCIsImNhbGxiYWNrIiwib25sb2FkIiwiYnVmZmVyTGlzdCIsIkFycmF5IiwibG9hZENvdW50IiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwibG9hZGVyIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJidWZmZXIiLCJhbGVydCIsImxlbmd0aCIsIm9uZXJyb3IiLCJzZW5kIiwiaSIsImxvYWRCdWZmZXIiLCJpbWFnZVRpbWVyIiwiSW1hZ2VUaW1lciIsImluaXQiLCJiaW5kIiwib25Mb2FkIiwiYWRkRmlyc3RQbGF5Q2xpY2tMaXN0ZW5lciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImZpbmFsTWFzdGVyR2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiaW5zdE1hc3RlckdhaW5Ob2RlIiwidm94TWFzdGVyR2Fpbk5vZGUiLCJpbnN0cnVtZW50YWxzIiwidm9jYWxzIiwiaW5zdEdhaW5Ob2RlcyIsInZveEdhaW5Ob2RlcyIsImJ1ZmZlckxvYWRlciIsImxvYWQiLCJwdXNoIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsInZhbHVlIiwibG9vcCIsInN0YXJ0IiwicGxheVBhdXNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnN0UHJvbXB0IiwiaW5uZXJIVE1MIiwiaW5zdEltZ3MiLCJmcm9tIiwiY2hpbGRyZW4iLCJzbGljZSIsImZvckVhY2giLCJpbWdUYWciLCJ0cmlnZ2VySW1hZ2VDaGFuZ2VzIiwiZmlyc3ROYW1lcyIsInZveEltZ3MiLCJhZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycyIsImJ1dHRvbkltZyIsIm9uY2xpY2siLCJpZCIsImdldEF0dHJpYnV0ZSIsImluc3RTb2xvQnRuIiwidm94U29sb0J0biIsImFsbEJ0biIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbGVMaXN0IiwibnVtQXJ0aXN0cyIsImdhdGhlckltYWdlU3RyaW5ncyIsImltYWdlU3RyaW5nc09iaiIsImNoYW5nZUltYWdlIiwiaW1hZ2VzTG9hZGVkIiwiYXJ0aXN0UGljcyIsImZ1bGxOYW1lIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImoiLCJzcmMiLCJzZXRJbnRlcnZhbCIsImluc3RydW1lbnRhbExpc3QiLCJ2b2NhbExpc3QiLCJtb2RhbEJnIiwibW9kYWwiLCJzdGFydEJ0biIsInF1ZXN0aW9uQnRuIiwicHJvY2Vzc0luc3RUcmFja0NsaWNrIiwicHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2siLCJ0aW1lVG9Mb2FkVHJhY2tzIiwiaW5zdHJ1bWVudGFsQ2xpY2tlZCIsInZvY2FsQ2xpY2tlZCIsInZvY2FsUHJvbXB0IiwiZmluYWxQcm9tcHQiLCJjaGlsZCIsImltZyIsInJlbW92ZSIsImFkZCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hEQyxRQUFNLENBQUNDLFNBQVAsR0FBbUIsSUFBSUMsdURBQUosRUFBbkI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBSUMsMERBQUosQ0FBY0osTUFBTSxDQUFDQyxTQUFyQixDQUFoQjtBQUNBRSxXQUFTLENBQUNFLHNCQUFWO0FBRUFDLFlBQVUsQ0FBQyxZQUFNO0FBQ2JSLFlBQVEsQ0FBQ1MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsWUFBdEMsQ0FBbUQsSUFBbkQsRUFBeUQsbUJBQXpEO0FBQ0gsR0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILENBUkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0pNQyxZOzs7QUFDRix3QkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLE1BQUwsR0FBY0QsUUFBZDtBQUNBLFNBQUtFLFVBQUwsR0FBa0IsSUFBSUMsS0FBSixFQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OzsrQkFFVUMsRyxFQUFLQyxLLEVBQU87QUFDbkIsVUFBSUMsT0FBTyxHQUFHLElBQUlDLGNBQUosRUFBZDtBQUNBRCxhQUFPLENBQUNFLElBQVIsQ0FBYSxLQUFiLEVBQW9CSixHQUFwQixFQUF5QixJQUF6QjtBQUNBRSxhQUFPLENBQUNHLFlBQVIsR0FBdUIsYUFBdkI7QUFFQSxVQUFJQyxNQUFNLEdBQUcsSUFBYjs7QUFFQUosYUFBTyxDQUFDTixNQUFSLEdBQWlCLFlBQVk7QUFDekJVLGNBQU0sQ0FBQ2IsT0FBUCxDQUFlYyxlQUFmLENBQ0lMLE9BQU8sQ0FBQ00sUUFEWixFQUVJLFVBQVVDLE1BQVYsRUFBa0I7QUFDZCxjQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNUQyxpQkFBSyxDQUFDLCtCQUErQlYsR0FBaEMsQ0FBTDtBQUNBO0FBQ0g7O0FBQ0RNLGdCQUFNLENBQUNULFVBQVAsQ0FBa0JJLEtBQWxCLElBQTJCUSxNQUEzQjs7QUFDQSxjQUFJLEVBQUVILE1BQU0sQ0FBQ1AsU0FBVCxJQUFzQk8sTUFBTSxDQUFDWixPQUFQLENBQWVpQixNQUF6QyxFQUFpRDtBQUM3Q0wsa0JBQU0sQ0FBQ1YsTUFBUCxDQUFjVSxNQUFNLENBQUNULFVBQXJCO0FBQ0g7QUFDSixTQVhMO0FBYUgsT0FkRDs7QUFnQkFLLGFBQU8sQ0FBQ1UsT0FBUixHQUFrQixZQUFZO0FBQzFCRixhQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNILE9BRkQ7O0FBSUFSLGFBQU8sQ0FBQ1csSUFBUjtBQUNIOzs7MkJBRU07QUFDSCxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3BCLE9BQUwsQ0FBYWlCLE1BQWpDLEVBQXlDLEVBQUVHLENBQTNDLEVBQThDO0FBQzFDLGFBQUtDLFVBQUwsQ0FBZ0IsS0FBS3JCLE9BQUwsQ0FBYW9CLENBQWIsQ0FBaEIsRUFBaUNBLENBQWpDO0FBQ0g7QUFDSjs7Ozs7O0FBR1V0QiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTs7SUFFTVAsTTs7O0FBQ0Ysb0JBQWM7QUFBQTs7QUFDVixTQUFLK0IsVUFBTCxHQUFrQixJQUFJQyx1REFBSixFQUFsQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDQSxTQUFLRSx5QkFBTCxHQUFpQyxLQUFLQSx5QkFBTCxDQUErQkYsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FBakMsQ0FKVSxDQUtWO0FBQ0g7Ozs7Z0RBRTJCO0FBQ3hCO0FBQ0EsZUFGd0IsQ0FHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7MkJBRU07QUFDSCxVQUFJRyxZQUFZLEdBQUd2QyxNQUFNLENBQUN1QyxZQUFQLElBQXVCdkMsTUFBTSxDQUFDd0Msa0JBQTlCLElBQW9ELEtBQXZFOztBQUVBLFVBQUlELFlBQUosRUFBa0I7QUFDZCxhQUFLN0IsT0FBTCxHQUFlLElBQUk2QixZQUFKLEVBQWY7QUFDSCxPQUZELE1BRU87QUFDSDtBQUNBO0FBQ0FaLGFBQUssQ0FBQyx3TUFBRCxDQUFMO0FBQ0g7O0FBRUQsV0FBS2MsbUJBQUwsR0FBMkIsS0FBSy9CLE9BQUwsQ0FBYWdDLFVBQWIsRUFBM0I7QUFDQSxXQUFLRCxtQkFBTCxDQUF5QkUsT0FBekIsQ0FBaUMsS0FBS2pDLE9BQUwsQ0FBYWtDLFdBQTlDO0FBQ0EsV0FBS0Msa0JBQUwsR0FBMEIsS0FBS25DLE9BQUwsQ0FBYWdDLFVBQWIsRUFBMUI7QUFDQSxXQUFLRyxrQkFBTCxDQUF3QkYsT0FBeEIsQ0FBZ0MsS0FBS0YsbUJBQXJDO0FBQ0EsV0FBS0ssaUJBQUwsR0FBeUIsS0FBS3BDLE9BQUwsQ0FBYWdDLFVBQWIsRUFBekI7QUFDQSxXQUFLSSxpQkFBTCxDQUF1QkgsT0FBdkIsQ0FBK0IsS0FBS0YsbUJBQXBDO0FBRUEsV0FBS00sYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFFQSxXQUFLQyxZQUFMLEdBQW9CLElBQUkxQyx5REFBSixDQUNoQixLQUFLQyxPQURXLEVBRWhCLENBQ0ksNENBREosRUFFSSw0Q0FGSixFQUdJLDJDQUhKLEVBSUksNENBSkosRUFLSSx5Q0FMSixFQU1JLDRDQU5KLEVBT0ksNENBUEosRUFRSSwwQ0FSSixFQVNJLG9DQVRKLEVBVUksb0NBVkosRUFXSSxtQ0FYSixFQVlJLG9DQVpKLEVBYUksaUNBYkosRUFjSSxvQ0FkSixFQWVJLG9DQWZKLEVBZ0JJLGtDQWhCSixDQUZnQixFQW9CaEIsS0FBSzJCLE1BcEJXLENBQXBCO0FBc0JBLFdBQUtjLFlBQUwsQ0FBa0JDLElBQWxCO0FBQ0g7OzsyQkFFTXRDLFUsRUFBWTtBQUFBOztBQUVmLFdBQUssSUFBSWlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsYUFBS2dCLGFBQUwsQ0FBbUJNLElBQW5CLENBQXdCLEtBQUszQyxPQUFMLENBQWE0QyxrQkFBYixFQUF4QjtBQUNBLGFBQUtQLGFBQUwsQ0FBbUJoQixDQUFuQixFQUFzQkwsTUFBdEIsR0FBK0JaLFVBQVUsQ0FBQ2lCLENBQUQsQ0FBekM7QUFFQSxhQUFLa0IsYUFBTCxDQUFtQmxCLENBQW5CLElBQXdCLEtBQUtyQixPQUFMLENBQWFnQyxVQUFiLEVBQXhCO0FBQ0EsYUFBS0ssYUFBTCxDQUFtQmhCLENBQW5CLEVBQXNCWSxPQUF0QixDQUE4QixLQUFLTSxhQUFMLENBQW1CbEIsQ0FBbkIsQ0FBOUI7QUFDQSxhQUFLa0IsYUFBTCxDQUFtQmxCLENBQW5CLEVBQXNCWSxPQUF0QixDQUE4QixLQUFLRSxrQkFBbkM7QUFDQSxhQUFLSSxhQUFMLENBQW1CbEIsQ0FBbkIsRUFBc0J3QixJQUF0QixDQUEyQkMsS0FBM0IsR0FBbUMsQ0FBbkM7QUFFQSxhQUFLVCxhQUFMLENBQW1CaEIsQ0FBbkIsRUFBc0IwQixJQUF0QixHQUE2QixJQUE3QjtBQUNBLGFBQUtWLGFBQUwsQ0FBbUJoQixDQUFuQixFQUFzQjJCLEtBQXRCLENBQTRCLENBQTVCO0FBQ0g7O0FBRUQsV0FBSyxJQUFJM0IsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxDQUFwQixFQUF1QkEsRUFBQyxFQUF4QixFQUE0QjtBQUN4QixhQUFLaUIsTUFBTCxDQUFZSyxJQUFaLENBQWlCLEtBQUszQyxPQUFMLENBQWE0QyxrQkFBYixFQUFqQjtBQUNBLGFBQUtOLE1BQUwsQ0FBWWpCLEVBQVosRUFBZUwsTUFBZixHQUF3QlosVUFBVSxDQUFDaUIsRUFBQyxHQUFDLENBQUgsQ0FBbEM7QUFFQSxhQUFLbUIsWUFBTCxDQUFrQm5CLEVBQWxCLElBQXVCLEtBQUtyQixPQUFMLENBQWFnQyxVQUFiLEVBQXZCOztBQUNBLGFBQUtNLE1BQUwsQ0FBWWpCLEVBQVosRUFBZVksT0FBZixDQUF1QixLQUFLTyxZQUFMLENBQWtCbkIsRUFBbEIsQ0FBdkI7O0FBQ0EsYUFBS21CLFlBQUwsQ0FBa0JuQixFQUFsQixFQUFxQlksT0FBckIsQ0FBNkIsS0FBS0csaUJBQWxDOztBQUNBLGFBQUtJLFlBQUwsQ0FBa0JuQixFQUFsQixFQUFxQndCLElBQXJCLENBQTBCQyxLQUExQixHQUFrQyxDQUFsQztBQUVBLGFBQUtSLE1BQUwsQ0FBWWpCLEVBQVosRUFBZTBCLElBQWYsR0FBc0IsSUFBdEI7O0FBQ0EsYUFBS1QsTUFBTCxDQUFZakIsRUFBWixFQUFlMkIsS0FBZixDQUFxQixDQUFyQjtBQUNIOztBQUVELFdBQUtqQixtQkFBTCxDQUF5QmMsSUFBekIsQ0FBOEJDLEtBQTlCLEdBQXNDLEdBQXRDLENBNUJlLENBOEJmOztBQUNBLFVBQUlHLFNBQVMsR0FBRzdELFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixhQUF2QixDQUFoQjtBQUVBb0QsZUFBUyxDQUFDbkQsWUFBVixDQUF1QixZQUF2QixFQUFxQyxTQUFyQztBQUNBbUQsZUFBUyxDQUFDQyxpQkFBVixDQUE0QnBELFlBQTVCLENBQXlDLEtBQXpDLEVBQWdELDJCQUFoRDtBQUNBbUQsZUFBUyxDQUFDQyxpQkFBVixDQUE0QnBELFlBQTVCLENBQXlDLElBQXpDLEVBQStDLGdCQUEvQztBQUNBVixjQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxRQUEvRDtBQUNBLFVBQUlxRCxVQUFVLEdBQUcvRCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQXNELGdCQUFVLENBQUNDLFNBQVgsR0FBdUIsZ0RBQXZCO0FBQ0FELGdCQUFVLENBQUNyRCxZQUFYLENBQXdCLE9BQXhCLEVBQWlDLDJIQUFqQyxFQXZDZSxDQXlDZjs7QUFDQSxVQUFJdUQsUUFBUSxHQUFHaEQsS0FBSyxDQUFDaUQsSUFBTixDQUFXbEUsUUFBUSxDQUFDUyxhQUFULENBQXVCLG1CQUF2QixFQUE0QzBELFFBQXZELEVBQWlFQyxLQUFqRSxDQUF1RSxDQUF2RSxDQUFmO0FBQ0FILGNBQVEsQ0FBQ0ksT0FBVCxDQUFpQixVQUFDQyxNQUFELEVBQVNyQyxDQUFULEVBQWU7QUFDNUI7O0FBQ0EsYUFBSSxDQUFDRSxVQUFMLENBQWdCb0MsbUJBQWhCLENBQW9DLEtBQUksQ0FBQ3BDLFVBQUwsQ0FBZ0JxQyxVQUFoQixDQUEyQnZDLENBQTNCLENBQXBDLEVBQW1FcUMsTUFBbkU7QUFDSCxPQUhEO0FBS0EsVUFBSUcsT0FBTyxHQUFHeEQsS0FBSyxDQUFDaUQsSUFBTixDQUFXbEUsUUFBUSxDQUFDUyxhQUFULENBQXVCLG9CQUF2QixFQUE2QzBELFFBQXhELEVBQWtFQyxLQUFsRSxDQUF3RSxDQUF4RSxDQUFkO0FBQ0FLLGFBQU8sQ0FBQ0osT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVNyQyxDQUFULEVBQWU7QUFDM0IsYUFBSSxDQUFDRSxVQUFMLENBQWdCb0MsbUJBQWhCLENBQW9DLEtBQUksQ0FBQ3BDLFVBQUwsQ0FBZ0JxQyxVQUFoQixDQUEyQnZDLENBQTNCLENBQXBDLEVBQW1FcUMsTUFBbkU7QUFDSCxPQUZEO0FBSUEsVUFBTWpFLFNBQVMsR0FBRyxJQUFJQyxrREFBSixDQUFjSixNQUFNLENBQUNDLFNBQXJCLENBQWxCO0FBQ0FFLGVBQVMsQ0FBQ3FFLDBCQUFWO0FBRUEsVUFBSUMsU0FBUyxHQUFHM0UsUUFBUSxDQUFDUyxhQUFULENBQXVCLGFBQXZCLENBQWhCLENBeERlLENBMERmOztBQUNBb0QsZUFBUyxDQUFDZSxPQUFWLEdBQW9CLFlBQU07QUFDdEIsWUFBR0QsU0FBUyxDQUFDRSxFQUFWLEtBQWlCLGFBQXBCLEVBQW1DO0FBQy9CLGNBQUloQixTQUFTLENBQUNpQixZQUFWLENBQXVCLFlBQXZCLE1BQXlDLFFBQTdDLEVBQXVEO0FBQ25EakIscUJBQVMsQ0FBQ0MsaUJBQVYsQ0FBNEJwRCxZQUE1QixDQUF5QyxLQUF6QyxFQUFnRCwyQkFBaEQ7QUFDQW1ELHFCQUFTLENBQUNuRCxZQUFWLENBQXVCLFlBQXZCLEVBQXFDLFNBQXJDLEVBRm1ELENBSW5EOztBQUNBVixvQkFBUSxDQUFDUyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0MsWUFBekMsQ0FBc0QsT0FBdEQsRUFBK0QsUUFBL0Q7QUFDQSxpQkFBSSxDQUFDaUMsbUJBQUwsQ0FBeUJjLElBQXpCLENBQThCQyxLQUE5QixHQUFzQyxHQUF0QztBQUNILFdBUEQsTUFPTztBQUNILGlCQUFJLENBQUNmLG1CQUFMLENBQXlCYyxJQUF6QixDQUE4QkMsS0FBOUIsR0FBc0MsQ0FBdEM7QUFFQUcscUJBQVMsQ0FBQ0MsaUJBQVYsQ0FBNEJwRCxZQUE1QixDQUF5QyxLQUF6QyxFQUFnRCx3QkFBaEQ7QUFDQW1ELHFCQUFTLENBQUNuRCxZQUFWLENBQXVCLFlBQXZCLEVBQXFDLFFBQXJDLEVBSkcsQ0FNSDs7QUFDQVYsb0JBQVEsQ0FBQ1MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNDLFlBQXpDLENBQXNELE9BQXRELEVBQStELFNBQS9EO0FBQ0g7QUFDSjtBQUNKLE9BbkJEOztBQXFCQSxVQUFJcUUsV0FBVyxHQUFHL0UsUUFBUSxDQUFDUyxhQUFULENBQXVCLGdCQUF2QixDQUFsQjtBQUNBLFVBQUl1RSxVQUFVLEdBQUdoRixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBakI7QUFDQSxVQUFJd0UsTUFBTSxHQUFHakYsUUFBUSxDQUFDUyxhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0FzRSxpQkFBVyxDQUFDSCxPQUFaLEdBQXNCLFVBQUNNLEtBQUQsRUFBVztBQUM3QkEsYUFBSyxDQUFDQyxlQUFOLEdBRDZCLENBRTdCOztBQUNBLFlBQUcsQ0FBQ0osV0FBVyxDQUFDSyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixPQUEvQixDQUFKLEVBQTZDO0FBQ3pDO0FBQ0FOLHFCQUFXLENBQUNyRSxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDO0FBQ0FzRSxvQkFBVSxDQUFDdEUsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNBdUUsZ0JBQU0sQ0FBQ3ZFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFKeUMsQ0FNekM7O0FBQ0EsZUFBSSxDQUFDc0MsaUJBQUwsQ0FBdUJTLElBQXZCLENBQTRCQyxLQUE1QixHQUFvQyxDQUFwQztBQUNBLGVBQUksQ0FBQ1gsa0JBQUwsQ0FBd0JVLElBQXhCLENBQTZCQyxLQUE3QixHQUFxQyxHQUFyQztBQUVBMUQsa0JBQVEsQ0FBQ1MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLFlBQTFDLENBQXVELE9BQXZELEVBQWdFLFNBQWhFO0FBQ0FWLGtCQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxRQUEvRDtBQUNIO0FBQ0osT0FoQkQ7O0FBa0JBc0UsZ0JBQVUsQ0FBQ0osT0FBWCxHQUFxQixVQUFDTSxLQUFELEVBQVc7QUFDNUJBLGFBQUssQ0FBQ0MsZUFBTixHQUQ0QixDQUU1Qjs7QUFDQSxZQUFJLENBQUNILFVBQVUsQ0FBQ0ksU0FBWCxDQUFxQkMsUUFBckIsQ0FBOEIsT0FBOUIsQ0FBTCxFQUE2QztBQUN6QztBQUNBTCxvQkFBVSxDQUFDdEUsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQztBQUNBcUUscUJBQVcsQ0FBQ3JFLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsT0FBbEM7QUFDQXVFLGdCQUFNLENBQUN2RSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLEVBSnlDLENBTXpDOztBQUNBLGVBQUksQ0FBQ3NDLGlCQUFMLENBQXVCUyxJQUF2QixDQUE0QkMsS0FBNUIsR0FBb0MsR0FBcEM7QUFDQSxlQUFJLENBQUNYLGtCQUFMLENBQXdCVSxJQUF4QixDQUE2QkMsS0FBN0IsR0FBcUMsQ0FBckM7QUFFQTFELGtCQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxTQUEvRDtBQUNBVixrQkFBUSxDQUFDUyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsWUFBMUMsQ0FBdUQsT0FBdkQsRUFBZ0UsUUFBaEU7QUFFSDtBQUNKLE9BakJEOztBQW1CQXVFLFlBQU0sQ0FBQ0wsT0FBUCxHQUFpQixVQUFDTSxLQUFELEVBQVc7QUFDeEJBLGFBQUssQ0FBQ0MsZUFBTjs7QUFDQSxZQUFJLENBQUNGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEIsT0FBMUIsQ0FBTCxFQUF5QztBQUNyQztBQUNBSixnQkFBTSxDQUFDdkUsWUFBUCxDQUFvQixPQUFwQixFQUE2QixPQUE3QjtBQUNBc0Usb0JBQVUsQ0FBQ3RFLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBakM7QUFDQXFFLHFCQUFXLENBQUNyRSxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBSnFDLENBTXJDOztBQUNBLGVBQUksQ0FBQ3NDLGlCQUFMLENBQXVCUyxJQUF2QixDQUE0QkMsS0FBNUIsR0FBb0MsR0FBcEM7QUFDQSxlQUFJLENBQUNYLGtCQUFMLENBQXdCVSxJQUF4QixDQUE2QkMsS0FBN0IsR0FBcUMsR0FBckM7QUFFQTFELGtCQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxZQUExQyxDQUF1RCxPQUF2RCxFQUFnRSxRQUFoRTtBQUNBVixrQkFBUSxDQUFDUyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q0MsWUFBekMsQ0FBc0QsT0FBdEQsRUFBK0QsUUFBL0Q7QUFDSDtBQUNKLE9BZkQ7QUFnQkg7Ozs7OztBQUdVTixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDck5NZ0MsVTs7O0FBQ0Ysd0JBQWM7QUFBQTs7QUFDVixTQUFLa0QsT0FBTCxHQUFldEYsUUFBUSxDQUFDUyxhQUFULENBQXVCLG1CQUF2QixFQUE0QzBELFFBQTNEO0FBQ0EsU0FBS29CLFVBQUwsR0FBa0IsS0FBS0QsT0FBTCxDQUFheEQsTUFBL0I7QUFDQSxTQUFLMEMsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtnQixrQkFBTCxHQUEwQixLQUFLQSxrQkFBTCxDQUF3QmxELElBQXhCLENBQTZCLElBQTdCLENBQTFCO0FBQ0EsU0FBS21ELGVBQUwsR0FBdUIsS0FBS0Qsa0JBQUwsRUFBdkI7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJwRCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNIOzs7O3lDQUVvQjtBQUNqQixVQUFJbUQsZUFBZSxHQUFHLEVBQXRCO0FBQ0EsVUFBSUUsWUFBWSxHQUFHLENBQW5COztBQUNBLFdBQUssSUFBSTFELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3NELFVBQXpCLEVBQXFDdEQsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJMkQsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEtBQUtQLE9BQUwsQ0FBYXJELENBQWIsRUFBZ0IrQixTQUFoQixDQUEwQjhCLEtBQTFCLENBQWdDLElBQWhDLEVBQXNDLENBQXRDLENBQWY7QUFDQSxZQUFJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsRUFBdUJFLFdBQXZCLEVBQWhCO0FBQ0EsYUFBS3hCLFVBQUwsQ0FBZ0JqQixJQUFoQixDQUFxQndDLFNBQXJCOztBQUNBLGFBQUksSUFBSUUsQ0FBQyxHQUFHTixZQUFaLEVBQTBCTSxDQUFDLEdBQUdOLFlBQVksR0FBRyxDQUE3QyxFQUFnRE0sQ0FBQyxFQUFqRCxFQUFxRDtBQUNqREwsb0JBQVUsQ0FBQ3JDLElBQVgseUNBQWlEd0MsU0FBakQsY0FBOERFLENBQUMsR0FBQyxDQUFoRTtBQUNIOztBQUNEUix1QkFBZSxDQUFDTSxTQUFELENBQWYsR0FBNkJILFVBQTdCO0FBQ0FELG9CQUFZLElBQUksQ0FBaEI7QUFDSDs7QUFDRCxhQUFPRixlQUFQO0FBQ0g7OztnQ0FFV00sUyxFQUFXekIsTSxFQUFRckMsQyxFQUFHO0FBQzlCcUMsWUFBTSxDQUFDNEIsR0FBUCxHQUFhLEtBQUtULGVBQUwsQ0FBcUJNLFNBQXJCLEVBQWdDOUQsQ0FBaEMsQ0FBYjtBQUNIOzs7d0NBRW1COEQsUyxFQUFXekIsTSxFQUFRO0FBQUE7O0FBQ25DLFVBQUlyQyxDQUFDLEdBQUcsQ0FBUjtBQUNBa0UsaUJBQVcsQ0FDUCxZQUFNO0FBQ0ZsRSxTQUFDO0FBQ0RBLFNBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsYUFBSSxDQUFDeUQsV0FBTCxDQUFpQkssU0FBakIsRUFBNEJ6QixNQUE1QixFQUFvQ3JDLENBQXBDO0FBQ0gsT0FMTSxFQU1MLDJCQU5LLENBQVg7QUFPSDs7Ozs7O0FBR1VHLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQ005QixTOzs7QUFDRixxQkFBWXNCLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS3dFLGdCQUFMLEdBQXdCcEcsUUFBUSxDQUFDUyxhQUFULENBQXVCLG1CQUF2QixFQUE0QzBELFFBQXBFO0FBQ0EsU0FBS2tDLFNBQUwsR0FBaUJyRyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMwRCxRQUF0RDtBQUNBLFNBQUttQyxPQUFMLEdBQWV0RyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWY7QUFDQSxTQUFLOEYsS0FBTCxHQUFhdkcsUUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxTQUFLK0YsUUFBTCxHQUFnQnhHLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixZQUF2QixDQUFoQjtBQUNBLFNBQUtnRyxXQUFMLEdBQW1CekcsUUFBUSxDQUFDUyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBRUEsU0FBS2lHLHFCQUFMLEdBQTZCLEtBQUtBLHFCQUFMLENBQTJCcEUsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBN0I7QUFDQSxTQUFLcUUsdUJBQUwsR0FBK0IsS0FBS0EsdUJBQUwsQ0FBNkJyRSxJQUE3QixDQUFrQyxJQUFsQyxDQUEvQjtBQUNBLFNBQUtvQywwQkFBTCxHQUFrQyxLQUFLQSwwQkFBTCxDQUFnQ3BDLElBQWhDLENBQXFDLElBQXJDLENBQWxDO0FBQ0EsU0FBSy9CLHNCQUFMLEdBQThCLEtBQUtBLHNCQUFMLENBQTRCK0IsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBOUI7QUFDQSxTQUFLVixNQUFMLEdBQWNBLE1BQWQ7QUFFQSxTQUFLZ0YsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDSDs7OzswQ0FFcUI3RSxDLEVBQUc7QUFDckIsVUFBRyxDQUFDLEtBQUs0RSxtQkFBVCxFQUE4QjtBQUMxQixZQUFJOUMsVUFBVSxHQUFHL0QsUUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLENBQWpCO0FBQ0FzRCxrQkFBVSxDQUFDckQsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxnQkFBakM7QUFDQSxhQUFLbUcsbUJBQUwsR0FBMkIsSUFBM0I7QUFFQSxZQUFJRSxXQUFXLEdBQUcvRyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQXNHLG1CQUFXLENBQUMvQyxTQUFaLEdBQXdCLDZDQUF4QjtBQUNBK0MsbUJBQVcsQ0FBQ3JHLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsMkhBQWxDO0FBQ0g7O0FBRUQsVUFBRyxLQUFLb0csWUFBUixFQUFzQjtBQUNsQixZQUFJRSxXQUFXLEdBQUdoSCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQXVHLG1CQUFXLENBQUN0RyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLGdCQUFsQztBQUNIOztBQUVELFdBQUssSUFBSXVGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csZ0JBQUwsQ0FBc0J0RSxNQUExQyxFQUFrRG1FLENBQUMsRUFBbkQsRUFBdUQ7QUFDbkQsWUFBSWdCLEtBQUssR0FBRyxLQUFLYixnQkFBTCxDQUFzQkgsQ0FBdEIsQ0FBWjtBQUNBLFlBQUlGLFNBQVMsR0FBR2tCLEtBQUssQ0FBQ2pELFNBQU4sQ0FBZ0I4QixLQUFoQixDQUFzQixJQUF0QixFQUE0QixDQUE1QixFQUErQkEsS0FBL0IsQ0FBcUMsR0FBckMsRUFBMEMsQ0FBMUMsRUFBNkNFLFdBQTdDLEVBQWhCO0FBQ0EsWUFBSWtCLEdBQUcsR0FBR2xILFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQnNGLFNBQTNCLGVBQVY7O0FBRUEsWUFBSTlELENBQUMsS0FBS2dFLENBQVYsRUFBYTtBQUNULGNBQUdnQixLQUFLLENBQUM3QixTQUFOLENBQWdCQyxRQUFoQixDQUF5QixVQUF6QixDQUFILEVBQXlDO0FBQ3JDNEIsaUJBQUssQ0FBQzdCLFNBQU4sQ0FBZ0IrQixNQUFoQixDQUF1QixVQUF2QjtBQUNBLGlCQUFLdkYsTUFBTCxDQUFZdUIsYUFBWixDQUEwQjhDLENBQTFCLEVBQTZCeEMsSUFBN0IsQ0FBa0NDLEtBQWxDLEdBQTBDLENBQTFDO0FBRUF3RCxlQUFHLENBQUN4RyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFFBQTFCO0FBQ0FWLG9CQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxTQUEvRDtBQUNILFdBTkQsTUFNTztBQUNIdUcsaUJBQUssQ0FBQzdCLFNBQU4sQ0FBZ0JnQyxHQUFoQixDQUFvQixVQUFwQjtBQUNBLGlCQUFLeEYsTUFBTCxDQUFZdUIsYUFBWixDQUEwQjhDLENBQTFCLEVBQTZCeEMsSUFBN0IsQ0FBa0NDLEtBQWxDLEdBQTBDLENBQTFDO0FBRUF3RCxlQUFHLENBQUN4RyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFNBQTFCO0FBQ0FWLG9CQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxZQUF6QyxDQUFzRCxPQUF0RCxFQUErRCxRQUEvRDtBQUNIO0FBQ0osU0FkRCxNQWNPO0FBQ0h1RyxlQUFLLENBQUM3QixTQUFOLENBQWdCK0IsTUFBaEIsQ0FBdUIsVUFBdkI7QUFDQSxlQUFLdkYsTUFBTCxDQUFZdUIsYUFBWixDQUEwQjhDLENBQTFCLEVBQTZCeEMsSUFBN0IsQ0FBa0NDLEtBQWxDLEdBQTBDLENBQTFDO0FBRUF3RCxhQUFHLENBQUN4RyxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLFFBQTFCO0FBQ0g7QUFDSjtBQUNKOzs7NENBRXVCdUIsQyxFQUFHO0FBQ3ZCLFVBQUcsS0FBSzRFLG1CQUFSLEVBQTZCO0FBQ3pCLFlBQUksQ0FBQyxLQUFLQyxZQUFWLEVBQXdCO0FBQ3BCLGNBQUlDLFdBQVcsR0FBRy9HLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixlQUF2QixDQUFsQjtBQUNBc0cscUJBQVcsQ0FBQ3JHLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsZ0JBQWxDO0FBQ0EsZUFBS29HLFlBQUwsR0FBb0IsSUFBcEI7QUFFQSxjQUFJRSxXQUFXLEdBQUdoSCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQXVHLHFCQUFXLENBQUNoRCxTQUFaLEdBQXdCLG9CQUF4QjtBQUNBZ0QscUJBQVcsQ0FBQ3RHLFlBQVosQ0FBeUIsT0FBekIsRUFBa0Msb0tBQWxDO0FBQ0gsU0FSRCxNQVFPO0FBQ0gsY0FBSXNHLFlBQVcsR0FBR2hILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixlQUF2QixDQUFsQjs7QUFDQXVHLHNCQUFXLENBQUN0RyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLGdCQUFsQztBQUNIOztBQUVELGFBQUssSUFBSXVGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0ksU0FBTCxDQUFldkUsTUFBbkMsRUFBMkNtRSxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGNBQUlnQixLQUFLLEdBQUcsS0FBS1osU0FBTCxDQUFlSixDQUFmLENBQVo7QUFDQSxjQUFJRixTQUFTLEdBQUdrQixLQUFLLENBQUNqRCxTQUFOLENBQWdCOEIsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsRUFBK0JBLEtBQS9CLENBQXFDLEdBQXJDLEVBQTBDLENBQTFDLEVBQTZDRSxXQUE3QyxFQUFoQjtBQUNBLGNBQUlrQixHQUFHLEdBQUdsSCxRQUFRLENBQUNTLGFBQVQsWUFBMkJzRixTQUEzQixnQkFBVjs7QUFFQSxjQUFJOUQsQ0FBQyxLQUFLZ0UsQ0FBVixFQUFhO0FBRVQsZ0JBQUdnQixLQUFLLENBQUM3QixTQUFOLENBQWdCQyxRQUFoQixDQUF5QixVQUF6QixDQUFILEVBQXlDO0FBQ3JDNEIsbUJBQUssQ0FBQzdCLFNBQU4sQ0FBZ0IrQixNQUFoQixDQUF1QixVQUF2QjtBQUNBLG1CQUFLdkYsTUFBTCxDQUFZd0IsWUFBWixDQUF5QjZDLENBQXpCLEVBQTRCeEMsSUFBNUIsQ0FBaUNDLEtBQWpDLEdBQXlDLENBQXpDO0FBRUF3RCxpQkFBRyxDQUFDeEcsWUFBSixDQUFpQixPQUFqQixFQUEwQixRQUExQjtBQUNBVixzQkFBUSxDQUFDUyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsWUFBMUMsQ0FBdUQsT0FBdkQsRUFBZ0UsU0FBaEU7QUFDSCxhQU5ELE1BTU87QUFDSHVHLG1CQUFLLENBQUM3QixTQUFOLENBQWdCZ0MsR0FBaEIsQ0FBb0IsVUFBcEI7QUFDQSxtQkFBS3hGLE1BQUwsQ0FBWXdCLFlBQVosQ0FBeUI2QyxDQUF6QixFQUE0QnhDLElBQTVCLENBQWlDQyxLQUFqQyxHQUF5QyxDQUF6QztBQUVBd0QsaUJBQUcsQ0FBQ3hHLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsU0FBMUI7QUFDQVYsc0JBQVEsQ0FBQ1MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLFlBQTFDLENBQXVELE9BQXZELEVBQWdFLFFBQWhFO0FBQ0g7QUFDSixXQWZELE1BZU87QUFDSHVHLGlCQUFLLENBQUM3QixTQUFOLENBQWdCK0IsTUFBaEIsQ0FBdUIsVUFBdkI7QUFDQSxpQkFBS3ZGLE1BQUwsQ0FBWXdCLFlBQVosQ0FBeUI2QyxDQUF6QixFQUE0QnhDLElBQTVCLENBQWlDQyxLQUFqQyxHQUF5QyxDQUF6QztBQUVBd0QsZUFBRyxDQUFDeEcsWUFBSixDQUFpQixPQUFqQixFQUEwQixRQUExQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7Z0NBRVc7QUFDUixXQUFLNEYsT0FBTCxDQUFhNUYsWUFBYixDQUEwQixPQUExQixFQUFtQyxrQkFBbkM7QUFDQSxXQUFLNkYsS0FBTCxDQUFXN0YsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxhQUFqQztBQUNBLFdBQUs4RixRQUFMLENBQWM5RixZQUFkLENBQTJCLE9BQTNCLEVBQW9DLFdBQXBDO0FBQ0g7OztpQ0FFWTtBQUNULFdBQUs0RixPQUFMLENBQWE1RixZQUFiLENBQTBCLE9BQTFCLEVBQW1DLDJCQUFuQztBQUNBLFdBQUs2RixLQUFMLENBQVc3RixZQUFYLENBQXdCLE9BQXhCLEVBQWlDLHNCQUFqQztBQUNBLFdBQUs4RixRQUFMLENBQWM5RixZQUFkLENBQTJCLE9BQTNCLEVBQW9DLHNCQUFwQztBQUNIOzs7aURBRTRCO0FBQUE7O0FBQUEsaUNBQ2hCdUIsQ0FEZ0I7QUFFckIsWUFBSWdGLEtBQUssR0FBRyxLQUFJLENBQUNiLGdCQUFMLENBQXNCbkUsQ0FBdEIsQ0FBWjtBQUNBZ0YsYUFBSyxDQUFDaEgsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0M7QUFBQSxpQkFBTSxLQUFJLENBQUN5RyxxQkFBTCxDQUEyQnpFLENBQTNCLENBQU47QUFBQSxTQUFoQztBQUhxQjs7QUFDekIsV0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUttRSxnQkFBTCxDQUFzQnRFLE1BQTFDLEVBQWtERyxDQUFDLEVBQW5ELEVBQXVEO0FBQUEsY0FBOUNBLENBQThDO0FBR3REOztBQUp3QixtQ0FNaEJBLEVBTmdCO0FBT3JCLFlBQUlnRixLQUFLLEdBQUcsS0FBSSxDQUFDWixTQUFMLENBQWVwRSxFQUFmLENBQVo7O0FBQ0FnRixhQUFLLENBQUNyQyxPQUFOLEdBQWdCO0FBQUEsaUJBQU0sS0FBSSxDQUFDK0IsdUJBQUwsQ0FBNkIxRSxFQUE3QixDQUFOO0FBQUEsU0FBaEI7QUFScUI7O0FBTXpCLFdBQUssSUFBSUEsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxLQUFLb0UsU0FBTCxDQUFldkUsTUFBbkMsRUFBMkNHLEVBQUMsRUFBNUMsRUFBZ0Q7QUFBQSxlQUF2Q0EsRUFBdUM7QUFHL0M7QUFDSjs7OzZDQUV3QjtBQUFBOztBQUNyQixXQUFLcUUsT0FBTCxDQUFhMUIsT0FBYixHQUF1QixZQUFNO0FBQ3pCLFlBQUcsQ0FBQyxNQUFJLENBQUNnQyxnQkFBVCxFQUEyQjtBQUN2QixnQkFBSSxDQUFDUyxVQUFMO0FBQ0g7QUFDSixPQUpEOztBQU1BLFdBQUtiLFFBQUwsQ0FBYzVCLE9BQWQsR0FBd0IsVUFBQ00sS0FBRCxFQUFXO0FBQy9CQSxhQUFLLENBQUNDLGVBQU47O0FBQ0EsWUFBRyxNQUFJLENBQUN5QixnQkFBUixFQUEwQjtBQUN0QixnQkFBSSxDQUFDaEYsTUFBTCxDQUFZUyxJQUFaOztBQUNBLGdCQUFJLENBQUN1RSxnQkFBTCxHQUF3QixLQUF4QjtBQUNIOztBQUNELGNBQUksQ0FBQ1MsVUFBTDtBQUNILE9BUEQ7O0FBU0EsV0FBS2QsS0FBTCxDQUFXM0IsT0FBWCxHQUFxQixVQUFDTSxLQUFELEVBQVc7QUFDNUJBLGFBQUssQ0FBQ0MsZUFBTjtBQUNILE9BRkQ7O0FBSUEsV0FBS3NCLFdBQUwsQ0FBaUI3QixPQUFqQixHQUEyQixZQUFNO0FBQzdCLGNBQUksQ0FBQzBDLFNBQUw7QUFDSCxPQUZEO0FBR0g7Ozs7OztBQUdVaEgsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUMvSkEsdUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgQnVmZmVyIGZyb20gJy4vc2NyaXB0cy9idWZmZXInO1xuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuL3NjcmlwdHMvc2VsZWN0aW9uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB3aW5kb3cubmV3QnVmZmVyID0gbmV3IEJ1ZmZlcigpO1xuICAgIGxldCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHdpbmRvdy5uZXdCdWZmZXIpO1xuICAgIHNlbGVjdGlvbi5hZGRNb2RhbENsaWNrTGlzdGVuZXJzKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nLWJnXCIpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZGVuLWxvYWRpbmctYmdcIik7XG4gICAgfSwgMTUwMCk7XG59KTsiLCJjbGFzcyBCdWZmZXJMb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybExpc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudXJsTGlzdCA9IHVybExpc3Q7XG4gICAgICAgIHRoaXMub25sb2FkID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYnVmZmVyTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmxvYWRDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgbG9hZEJ1ZmZlcih1cmwsIGluZGV4KSB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcblxuICAgICAgICBsZXQgbG9hZGVyID0gdGhpcztcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvYWRlci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdlcnJvciBkZWNvZGluZyBmaWxlIGRhdGE6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5idWZmZXJMaXN0W2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCsrbG9hZGVyLmxvYWRDb3VudCA9PSBsb2FkZXIudXJsTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlci5vbmxvYWQobG9hZGVyLmJ1ZmZlckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdCdWZmZXJMb2FkZXI6IFhIUiBlcnJvcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVybExpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEJ1ZmZlcih0aGlzLnVybExpc3RbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWZmZXJMb2FkZXI7IiwiaW1wb3J0IEJ1ZmZlckxvYWRlciBmcm9tICcuL2J1ZmZlci1sb2FkZXIuanMnO1xuaW1wb3J0IEltYWdlVGltZXIgZnJvbSAnLi9pbWFnZS10aW1lci5qcyc7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vc2VsZWN0aW9uJztcblxuY2xhc3MgQnVmZmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVRpbWVyID0gbmV3IEltYWdlVGltZXIoKTtcbiAgICAgICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyID0gdGhpcy5hZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMubnVtUGxheUNsaWNrcyA9IDA7XG4gICAgfVxuXG4gICAgYWRkRmlyc3RQbGF5Q2xpY2tMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8gbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIHBsYXlQYXVzZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMubnVtUGxheUNsaWNrcyA9PT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvYWRpbmctaW1nXCIpO1xuICAgICAgICAvLyAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL2xvYWRpbmcuc3ZnXCIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubnVtUGxheUNsaWNrcysrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIFxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHwgZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAoQXVkaW9Db250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2ViIEF1ZGlvIEFQSSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAvLyBBbGVydCB0aGUgdXNlclxuICAgICAgICAgICAgYWxlcnQoXCJTb3JyeSwgYnV0IHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBXZWIgQXVkaW8gQVBJLCB3aGljaCBpcyBuZWNlc3NhcnkgZm9yIE1BU0hFUiB0byB3b3JrISBQbGVhc2UsIHVwZ3JhZGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHlvdXIgYnJvd3NlciBvciBkb3dubG9hZCBHb29nbGUgQ2hyb21lIG9yIE1vemlsbGEgRmlyZWZveC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmNvbm5lY3QodGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUpO1xuXG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFscyA9IFtdO1xuICAgICAgICB0aGlzLnZvY2FscyA9IFtdO1xuICAgICAgICB0aGlzLmluc3RHYWluTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy52b3hHYWluTm9kZXMgPSBbXTtcblxuICAgICAgICB0aGlzLmJ1ZmZlckxvYWRlciA9IG5ldyBCdWZmZXJMb2FkZXIoXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2FyaWFuYV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2dyaW1lc19pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy9pbnN0cnVtZW50YWxzL2xpenpvX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvdGF5bG9yX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2ltX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvanVzdGluX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvY2hhcmxpX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMva2F0eV9pbnN0LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvYXJpYW5hX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2dyaW1lc192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9saXp6b192b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy90YXlsb3Jfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMva2ltX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2p1c3Rpbl92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9jaGFybGlfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMva2F0eV92b3gud2F2J1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRoaXMub25Mb2FkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYnVmZmVyTG9hZGVyLmxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgb25Mb2FkKGJ1ZmZlckxpc3QpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzLnB1c2godGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2ldO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RHYWluTm9kZXNbaV0gPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmNvbm5lY3QodGhpcy5pbnN0R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5jb25uZWN0KHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy52b2NhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0uYnVmZmVyID0gYnVmZmVyTGlzdFtpKzhdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5jb25uZWN0KHRoaXMudm94R2Fpbk5vZGVzW2ldKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy52b3hNYXN0ZXJHYWluTm9kZSk7XG4gICAgICAgICAgICB0aGlzLnZveEdhaW5Ob2Rlc1tpXS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy52b2NhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5zdGFydCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgIC8vdHVybiBpY29uIHRvIHNvdW5kIG9uIG9uY2UgbG9hZGVkXG4gICAgICAgIGxldCBwbGF5UGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1wYXVzZScpO1xuXG4gICAgICAgIHBsYXlQYXVzZS5zZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIsIFwicGxheWluZ1wiKTtcbiAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvc291bmRvbi5wbmdcIik7XG4gICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXktcGF1c2UtaW1nXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGwtYmxhY2stYmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIGxldCBpbnN0UHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3QtcHJvbXB0JylcbiAgICAgICAgaW5zdFByb21wdC5pbm5lckhUTUwgPSBcIkNob29zZSBhbiBpbnN0cnVtZW50YWwhIEFyaWFuYSdzIGEgZ29vZCBzdGFydC5cIjtcbiAgICAgICAgaW5zdFByb21wdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm1hcmdpbi10b3A6IC0yNnB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyAtd2Via2l0LWFuaW1hdGlvbjogZmxhc2ggbGluZWFyIDFzIGluZmluaXRlOyBhbmltYXRpb246IGZsYXNoIGxpbmVhciAxcyBpbmZpbml0ZTtcIik7XG5cbiAgICAgICAgLy90cmlnZ2VyIGltYWdlIGNoYW5nZXIgZm9yIEFMTCAxNiBpbWcgdGFnc1xuICAgICAgICBsZXQgaW5zdEltZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVmdC1pbWctd3JhcHBlclwiKS5jaGlsZHJlbikuc2xpY2UoMik7XG4gICAgICAgIGluc3RJbWdzLmZvckVhY2goKGltZ1RhZywgaSkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VUaW1lci50cmlnZ2VySW1hZ2VDaGFuZ2VzKHRoaXMuaW1hZ2VUaW1lci5maXJzdE5hbWVzW2ldLCBpbWdUYWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdm94SW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1pbWctd3JhcHBlclwiKS5jaGlsZHJlbikuc2xpY2UoMik7XG4gICAgICAgIHZveEltZ3MuZm9yRWFjaCgoaW1nVGFnLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlVGltZXIudHJpZ2dlckltYWdlQ2hhbmdlcyh0aGlzLmltYWdlVGltZXIuZmlyc3ROYW1lc1tpXSwgaW1nVGFnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbih3aW5kb3cubmV3QnVmZmVyKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFNlbGVjdGlvbkNsaWNrTGlzdGVuZXJzKCk7XG4gICAgXG4gICAgICAgIGxldCBidXR0b25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1pbWdcIik7XG5cbiAgICAgICAgLy9jbGljayBsaXN0ZW5lciBmb3IgYWxsIHBsYXkgYnV0dG9uIGNsaWNrc1xuICAgICAgICBwbGF5UGF1c2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKGJ1dHRvbkltZy5pZCAhPT0gXCJsb2FkaW5nLWltZ1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlQYXVzZS5nZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIpID09PSBcInBhdXNlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL3NvdW5kb24ucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBsYXlpbmdcIik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vZ2V0IHJpZCBvZiBibGFjayBiZ1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1bGwtYmxhY2stYmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Rpc3QvaW1hZ2VzL211dGUucG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5UGF1c2Uuc2V0QXR0cmlidXRlKFwicGxheVN0YXR1c1wiLCBcInBhdXNlZFwiKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9jb3ZlciB3aXRoIGJsYWNrIGJnXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluc3RTb2xvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0LXNvbG8tYnRuXCIpO1xuICAgICAgICBsZXQgdm94U29sb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm94LXNvbG8tYnRuXCIpO1xuICAgICAgICBsZXQgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1idG4nKTtcbiAgICAgICAgaW5zdFNvbG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvL2lmIGl0IGlzbid0IGFscmVhZHkgc29sb2RcbiAgICAgICAgICAgIGlmKCFpbnN0U29sb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNvbG9kXCIpO1xuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vbXV0ZSB2b3ggY2hhbm5lbFxuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZveFNvbG9CdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvL2lmIGl0IGlzbid0IGFscmVhZHkgc29sb2RcbiAgICAgICAgICAgIGlmICghdm94U29sb0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2xvZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vc2hvdyBpdCdzIGJlZW4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB2b3hTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgaW5zdFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBhbGxCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcblxuICAgICAgICAgICAgICAgIC8vbXV0ZSBpbnN0IGNoYW5uZWxcbiAgICAgICAgICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFsbEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICghYWxsQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNvbG9kXCIpO1xuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtdXRlZFwiKTtcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy91bm11dGUgYm90aCBjaGFubmVsc1xuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcjsiLCJjbGFzcyBJbWFnZVRpbWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0cnVtZW50YWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLm51bUFydGlzdHMgPSB0aGlzLmVsZUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MgPSB0aGlzLmdhdGhlckltYWdlU3RyaW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmltYWdlU3RyaW5nc09iaiA9IHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1hZ2UgPSB0aGlzLmNoYW5nZUltYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2F0aGVySW1hZ2VTdHJpbmdzKCkge1xuICAgICAgICBsZXQgaW1hZ2VTdHJpbmdzT2JqID0ge307XG4gICAgICAgIGxldCBpbWFnZXNMb2FkZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQXJ0aXN0czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJ0aXN0UGljcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGZ1bGxOYW1lID0gdGhpcy5lbGVMaXN0W2ldLmlubmVySFRNTC5zcGxpdChcIiAtXCIpWzBdO1xuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWVzLnB1c2goZmlyc3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGltYWdlc0xvYWRlZDsgaiA8IGltYWdlc0xvYWRlZCArIDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGFydGlzdFBpY3MucHVzaChgLi9kaXN0L2ltYWdlcy9hcnRpc3QtcGljdHVyZXMvJHtmaXJzdE5hbWV9LyR7aisxfS5qcGdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltYWdlU3RyaW5nc09ialtmaXJzdE5hbWVdID0gYXJ0aXN0UGljcztcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbWFnZVN0cmluZ3NPYmo7XG4gICAgfVxuXG4gICAgY2hhbmdlSW1hZ2UoZmlyc3ROYW1lLCBpbWdUYWcsIGkpIHtcbiAgICAgICAgaW1nVGFnLnNyYyA9IHRoaXMuaW1hZ2VTdHJpbmdzT2JqW2ZpcnN0TmFtZV1baV07XG4gICAgfVxuXG4gICAgdHJpZ2dlckltYWdlQ2hhbmdlcyhmaXJzdE5hbWUsIGltZ1RhZykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHNldEludGVydmFsKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBpID0gaSAlIDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZShmaXJzdE5hbWUsIGltZ1RhZywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIDUwOC40NzQ1NzYyNzExODY0NDA2Nzc5NjYxMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpbWVyOyIsImNsYXNzIFNlbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zdHJ1bWVudGFscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy52b2NhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZvY2Fscy11bFwiKS5jaGlsZHJlbjtcbiAgICAgICAgdGhpcy5tb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jaGlsZCcpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1ZXN0aW9uLWJ0bicpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrID0gdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljayA9IHRoaXMucHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycyA9IHRoaXMuYWRkU2VsZWN0aW9uQ2xpY2tMaXN0ZW5lcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZGRNb2RhbENsaWNrTGlzdGVuZXJzID0gdGhpcy5hZGRNb2RhbENsaWNrTGlzdGVuZXJzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgICAgIHRoaXMudGltZVRvTG9hZFRyYWNrcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZvY2FsQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2Nlc3NJbnN0VHJhY2tDbGljayhpKSB7XG4gICAgICAgIGlmKCF0aGlzLmluc3RydW1lbnRhbENsaWNrZWQpIHtcbiAgICAgICAgICAgIGxldCBpbnN0UHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3QtcHJvbXB0JylcbiAgICAgICAgICAgIGluc3RQcm9tcHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdHJ1bWVudGFsQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB2b2NhbFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2b2NhbC1wcm9tcHQnKTtcbiAgICAgICAgICAgIHZvY2FsUHJvbXB0LmlubmVySFRNTCA9IFwiTm93IGNob29zZSBhIHZvY2FsISBKdXN0aW4ncyBhIGdyZWF0IGNvbWJvLlwiO1xuICAgICAgICAgICAgdm9jYWxQcm9tcHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJtYXJnaW4tdG9wOiAtMjZweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgLXdlYmtpdC1hbmltYXRpb246IGZsYXNoIGxpbmVhciAxcyBpbmZpbml0ZTsgYW5pbWF0aW9uOiBmbGFzaCBsaW5lYXIgMXMgaW5maW5pdGU7XCIpO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmKHRoaXMudm9jYWxDbGlja2VkKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYWwtcHJvbXB0JylcbiAgICAgICAgICAgIGZpbmFsUHJvbXB0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5zdHJ1bWVudGFsTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5pbnN0cnVtZW50YWxMaXN0W2pdO1xuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGNoaWxkLmlubmVySFRNTC5zcGxpdChcIiAtXCIpWzBdLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2ZpcnN0TmFtZX0tbGVmdC1pbWdgKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICAgICAgICBpZihjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5pbnN0R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5pbnN0R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuaW5zdEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcm9jZXNzVm9jYWxzVHJhY2tDbGljayhpKSB7XG4gICAgICAgIGlmKHRoaXMuaW5zdHJ1bWVudGFsQ2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZvY2FsQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIGxldCB2b2NhbFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2b2NhbC1wcm9tcHQnKVxuICAgICAgICAgICAgICAgIHZvY2FsUHJvbXB0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gICAgICAgICAgICAgICAgdGhpcy52b2NhbENsaWNrZWQgPSB0cnVlO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBmaW5hbFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbC1wcm9tcHQnKTtcbiAgICAgICAgICAgICAgICBmaW5hbFByb21wdC5pbm5lckhUTUwgPSBcIk5vdyBtaXggYW5kIG1hdGNoIVwiO1xuICAgICAgICAgICAgICAgIGZpbmFsUHJvbXB0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6IDM0MHB4OyBmb250LXNpemU6IDMwcHg7IG1hcmdpbjogLTM3LjVweCAwcHggOHB4IDIzcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgLXdlYmtpdC1hbmltYXRpb246IGZsYXNoIGxpbmVhciAxcyBpbmZpbml0ZTsgYW5pbWF0aW9uOiBmbGFzaCBsaW5lYXIgMXMgaW5maW5pdGU7XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluYWwtcHJvbXB0JylcbiAgICAgICAgICAgICAgICBmaW5hbFByb21wdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnZvY2FsTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMudm9jYWxMaXN0W2pdO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBjaGlsZC5pbm5lckhUTUwuc3BsaXQoXCIgLVwiKVswXS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zmlyc3ROYW1lfS1yaWdodC1pbWdgKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnZveEdhaW5Ob2Rlc1tqXS5nYWluLnZhbHVlID0gMTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICB0aGlzLm1vZGFsQmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtY2hpbGRcIik7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGFydC1idG5cIik7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5tb2RhbEJnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtYmFja2dyb3VuZC1mYWRlLW91dFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWNoaWxkLWZhZGUtb3V0XCIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtY2hpbGQtZmFkZS1vdXRcIik7XG4gICAgfVxuICAgIFxuICAgIGFkZFNlbGVjdGlvbkNsaWNrTGlzdGVuZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5zdHJ1bWVudGFsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5pbnN0cnVtZW50YWxMaXN0W2ldO1xuICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnByb2Nlc3NJbnN0VHJhY2tDbGljayhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52b2NhbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMudm9jYWxMaXN0W2ldO1xuICAgICAgICAgICAgY2hpbGQub25jbGljayA9ICgpID0+IHRoaXMucHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2soaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRNb2RhbENsaWNrTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1vZGFsQmcub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnRpbWVUb0xvYWRUcmFja3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRCdG4ub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZih0aGlzLnRpbWVUb0xvYWRUcmFja3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5pbml0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lVG9Mb2FkVHJhY2tzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWwub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXN0aW9uQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==