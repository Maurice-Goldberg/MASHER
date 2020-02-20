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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2J1ZmZlci1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ltYWdlLXRpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJuZXdCdWZmZXIiLCJCdWZmZXIiLCJzZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJhZGRNb2RhbENsaWNrTGlzdGVuZXJzIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJMb2FkZXIiLCJjb250ZXh0IiwidXJsTGlzdCIsImNhbGxiYWNrIiwib25sb2FkIiwiYnVmZmVyTGlzdCIsIkFycmF5IiwibG9hZENvdW50IiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwibG9hZGVyIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJidWZmZXIiLCJhbGVydCIsImxlbmd0aCIsIm9uZXJyb3IiLCJzZW5kIiwiaSIsImxvYWRCdWZmZXIiLCJpbWFnZVRpbWVyIiwiSW1hZ2VUaW1lciIsImluaXQiLCJiaW5kIiwib25Mb2FkIiwiYWRkRmlyc3RQbGF5Q2xpY2tMaXN0ZW5lciIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImZpbmFsTWFzdGVyR2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiaW5zdE1hc3RlckdhaW5Ob2RlIiwidm94TWFzdGVyR2Fpbk5vZGUiLCJpbnN0cnVtZW50YWxzIiwidm9jYWxzIiwiaW5zdEdhaW5Ob2RlcyIsInZveEdhaW5Ob2RlcyIsImJ1ZmZlckxvYWRlciIsImxvYWQiLCJwdXNoIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiZ2FpbiIsInZhbHVlIiwibG9vcCIsInN0YXJ0IiwicGxheVBhdXNlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnN0UHJvbXB0IiwiaW5uZXJIVE1MIiwiaW5zdEltZ3MiLCJmcm9tIiwiY2hpbGRyZW4iLCJzbGljZSIsImZvckVhY2giLCJpbWdUYWciLCJ0cmlnZ2VySW1hZ2VDaGFuZ2VzIiwiZmlyc3ROYW1lcyIsInZveEltZ3MiLCJhZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycyIsImJ1dHRvbkltZyIsIm9uY2xpY2siLCJpZCIsImdldEF0dHJpYnV0ZSIsImluc3RTb2xvQnRuIiwidm94U29sb0J0biIsImFsbEJ0biIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlbGVMaXN0IiwibnVtQXJ0aXN0cyIsImdhdGhlckltYWdlU3RyaW5ncyIsImltYWdlU3RyaW5nc09iaiIsImNoYW5nZUltYWdlIiwiaW1hZ2VzTG9hZGVkIiwiYXJ0aXN0UGljcyIsImZ1bGxOYW1lIiwic3BsaXQiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImoiLCJzcmMiLCJzZXRJbnRlcnZhbCIsImluc3RydW1lbnRhbExpc3QiLCJ2b2NhbExpc3QiLCJtb2RhbEJnIiwibW9kYWwiLCJzdGFydEJ0biIsInF1ZXN0aW9uQnRuIiwicHJvY2Vzc0luc3RUcmFja0NsaWNrIiwicHJvY2Vzc1ZvY2Fsc1RyYWNrQ2xpY2siLCJ0aW1lVG9Mb2FkVHJhY2tzIiwiaW5zdHJ1bWVudGFsQ2xpY2tlZCIsInZvY2FsQ2xpY2tlZCIsInZvY2FsUHJvbXB0IiwiZmluYWxQcm9tcHQiLCJjaGlsZCIsImltZyIsInJlbW92ZSIsImFkZCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiXSwi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QSxXQUFLZCxLQUFMLENBQVczQixPQUFYLEdBQXFCLFVBQUNNLEtBQUQsRUFBVztBQUM1QkEsYUFBSyxDQUFDQyxlQUFOO0FBQ0gsT0FGRDs7QUFJQSxXQUFLc0IsV0FBTCxDQUFpQjdCLE9BQWpCLEdBQTJCLFlBQU07QUFDN0IsY0FBSSxDQUFDMEMsU0FBTDtBQUNILE9BRkQ7QUFHSDs7Ozs7O0FBR1VoSCx3RUFBZixFOzs7Ozs7Ozs7OztBQy9KQSx1QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBCdWZmZXIgZnJvbSAnLi9zY3JpcHRzL2J1ZmZlcic7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vc2NyaXB0cy9zZWxlY3Rpb24nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5uZXdCdWZmZXIgPSBuZXcgQnVmZmVyKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb24od2luZG93Lm5ld0J1ZmZlcik7XG4gICAgc2VsZWN0aW9uLmFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmctYmdcIikuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRkZW4tbG9hZGluZy1iZ1wiKTtcbiAgICB9LCAxNTAwKTtcbn0pOyIsImNsYXNzIEJ1ZmZlckxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgdXJsTGlzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy51cmxMaXN0ID0gdXJsTGlzdDtcbiAgICAgICAgdGhpcy5vbmxvYWQgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5idWZmZXJMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMubG9hZENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBsb2FkQnVmZmVyKHVybCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgICAgIGxldCBsb2FkZXIgPSB0aGlzO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9hZGVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKFxuICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGRlY29kaW5nIGZpbGUgZGF0YTogJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLmJ1ZmZlckxpc3RbaW5kZXhdID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKytsb2FkZXIubG9hZENvdW50ID09IGxvYWRlci51cmxMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLm9ubG9hZChsb2FkZXIuYnVmZmVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoJ0J1ZmZlckxvYWRlcjogWEhSIGVycm9yJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXJsTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkQnVmZmVyKHRoaXMudXJsTGlzdFtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlckxvYWRlcjsiLCJpbXBvcnQgQnVmZmVyTG9hZGVyIGZyb20gJy4vYnVmZmVyLWxvYWRlci5qcyc7XG5pbXBvcnQgSW1hZ2VUaW1lciBmcm9tICcuL2ltYWdlLXRpbWVyLmpzJztcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi9zZWxlY3Rpb24nO1xuXG5jbGFzcyBCdWZmZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlVGltZXIgPSBuZXcgSW1hZ2VUaW1lcigpO1xuICAgICAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEZpcnN0UGxheUNsaWNrTGlzdGVuZXIgPSB0aGlzLmFkZEZpcnN0UGxheUNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5udW1QbGF5Q2xpY2tzID0gMDtcbiAgICB9XG5cbiAgICBhZGRGaXJzdFBsYXlDbGlja0xpc3RlbmVyKCkge1xuICAgICAgICAvLyBsZXQgcGxheVBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktcGF1c2UnKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgLy8gcGxheVBhdXNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5udW1QbGF5Q2xpY2tzID09PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9hZGluZy1pbWdcIik7XG4gICAgICAgIC8vICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvbG9hZGluZy5zdmdcIik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5udW1QbGF5Q2xpY2tzKys7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXG4gICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUuY29ubmVjdCh0aGlzLmZpbmFsTWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICB0aGlzLnZveE1hc3RlckdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5jb25uZWN0KHRoaXMuZmluYWxNYXN0ZXJHYWluTm9kZSk7XG5cbiAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzID0gW107XG4gICAgICAgIHRoaXMudm9jYWxzID0gW107XG4gICAgICAgIHRoaXMuaW5zdEdhaW5Ob2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnZveEdhaW5Ob2RlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuYnVmZmVyTG9hZGVyID0gbmV3IEJ1ZmZlckxvYWRlcihcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvYXJpYW5hX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvZ3JpbWVzX2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL2luc3RydW1lbnRhbHMvbGl6em9faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy90YXlsb3JfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9raW1faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9qdXN0aW5faW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9jaGFybGlfaW5zdC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvaW5zdHJ1bWVudGFscy9rYXR5X2luc3Qud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9hcmlhbmFfdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvZ3JpbWVzX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2xpenpvX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL3RheWxvcl92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9raW1fdm94LndhdicsXG4gICAgICAgICAgICAgICAgJy4vZGlzdC9zdGVtcy92b2NhbHMvanVzdGluX3ZveC53YXYnLFxuICAgICAgICAgICAgICAgICcuL2Rpc3Qvc3RlbXMvdm9jYWxzL2NoYXJsaV92b3gud2F2JyxcbiAgICAgICAgICAgICAgICAnLi9kaXN0L3N0ZW1zL3ZvY2Fscy9rYXR5X3ZveC53YXYnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGhpcy5vbkxvYWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5idWZmZXJMb2FkZXIubG9hZCgpO1xuICAgIH1cbiAgICBcbiAgICBvbkxvYWQoYnVmZmVyTGlzdCkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHMucHVzaCh0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxzW2ldLmJ1ZmZlciA9IGJ1ZmZlckxpc3RbaV07XG5cbiAgICAgICAgICAgIHRoaXMuaW5zdEdhaW5Ob2Rlc1tpXSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0uY29ubmVjdCh0aGlzLmluc3RHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmNvbm5lY3QodGhpcy5pbnN0TWFzdGVyR2Fpbk5vZGUpO1xuICAgICAgICAgICAgdGhpcy5pbnN0R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmluc3RydW1lbnRhbHNbaV0uc3RhcnQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnZvY2Fscy5wdXNoKHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSk7XG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5idWZmZXIgPSBidWZmZXJMaXN0W2krOF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLmNvbm5lY3QodGhpcy52b3hHYWluTm9kZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy52b3hHYWluTm9kZXNbaV0uY29ubmVjdCh0aGlzLnZveE1hc3RlckdhaW5Ob2RlKTtcbiAgICAgICAgICAgIHRoaXMudm94R2Fpbk5vZGVzW2ldLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnZvY2Fsc1tpXS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudm9jYWxzW2ldLnN0YXJ0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG5cbiAgICAgICAgLy90dXJuIGljb24gdG8gc291bmQgb24gb25jZSBsb2FkZWRcbiAgICAgICAgbGV0IHBsYXlQYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5LXBhdXNlJyk7XG5cbiAgICAgICAgcGxheVBhdXNlLnNldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIiwgXCJwbGF5aW5nXCIpO1xuICAgICAgICBwbGF5UGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9kaXN0L2ltYWdlcy9zb3VuZG9uLnBuZ1wiKTtcbiAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheS1wYXVzZS1pbWdcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgbGV0IGluc3RQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zdC1wcm9tcHQnKVxuICAgICAgICBpbnN0UHJvbXB0LmlubmVySFRNTCA9IFwiQ2hvb3NlIGFuIGluc3RydW1lbnRhbCEgQXJpYW5hJ3MgYSBnb29kIHN0YXJ0LlwiO1xuICAgICAgICBpbnN0UHJvbXB0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luLXRvcDogLTI2cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IC13ZWJraXQtYW5pbWF0aW9uOiBmbGFzaCBsaW5lYXIgMXMgaW5maW5pdGU7IGFuaW1hdGlvbjogZmxhc2ggbGluZWFyIDFzIGluZmluaXRlO1wiKTtcblxuICAgICAgICAvL3RyaWdnZXIgaW1hZ2UgY2hhbmdlciBmb3IgQUxMIDE2IGltZyB0YWdzXG4gICAgICAgIGxldCBpbnN0SW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LWltZy13cmFwcGVyXCIpLmNoaWxkcmVuKS5zbGljZSgyKTtcbiAgICAgICAgaW5zdEltZ3MuZm9yRWFjaCgoaW1nVGFnLCBpKSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5pbWFnZVRpbWVyLnRyaWdnZXJJbWFnZUNoYW5nZXModGhpcy5pbWFnZVRpbWVyLmZpcnN0TmFtZXNbaV0sIGltZ1RhZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2b3hJbWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWltZy13cmFwcGVyXCIpLmNoaWxkcmVuKS5zbGljZSgyKTtcbiAgICAgICAgdm94SW1ncy5mb3JFYWNoKChpbWdUYWcsIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VUaW1lci50cmlnZ2VySW1hZ2VDaGFuZ2VzKHRoaXMuaW1hZ2VUaW1lci5maXJzdE5hbWVzW2ldLCBpbWdUYWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHdpbmRvdy5uZXdCdWZmZXIpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkU2VsZWN0aW9uQ2xpY2tMaXN0ZW5lcnMoKTtcbiAgICBcbiAgICAgICAgbGV0IGJ1dHRvbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWltZ1wiKTtcblxuICAgICAgICAvL2NsaWNrIGxpc3RlbmVyIGZvciBhbGwgcGxheSBidXR0b24gY2xpY2tzXG4gICAgICAgIHBsYXlQYXVzZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoYnV0dG9uSW1nLmlkICE9PSBcImxvYWRpbmctaW1nXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheVBhdXNlLmdldEF0dHJpYnV0ZShcInBsYXlTdGF0dXNcIikgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvc291bmRvbi5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5zZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIsIFwicGxheWluZ1wiKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9nZXQgcmlkIG9mIGJsYWNrIGJnXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnVsbC1ibGFjay1iZ1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcGxheVBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vZGlzdC9pbWFnZXMvbXV0ZS5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlQYXVzZS5zZXRBdHRyaWJ1dGUoXCJwbGF5U3RhdHVzXCIsIFwicGF1c2VkXCIpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2NvdmVyIHdpdGggYmxhY2sgYmdcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdWxsLWJsYWNrLWJnXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5zdFNvbG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3Qtc29sby1idG5cIik7XG4gICAgICAgIGxldCB2b3hTb2xvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2b3gtc29sby1idG5cIik7XG4gICAgICAgIGxldCBhbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLWJ0bicpO1xuICAgICAgICBpbnN0U29sb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vaWYgaXQgaXNuJ3QgYWxyZWFkeSBzb2xvZFxuICAgICAgICAgICAgaWYoIWluc3RTb2xvQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9tdXRlIHZveCBjaGFubmVsXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm94U29sb0J0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vaWYgaXQgaXNuJ3QgYWxyZWFkeSBzb2xvZFxuICAgICAgICAgICAgaWYgKCF2b3hTb2xvQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNvbG9kXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9zaG93IGl0J3MgYmVlbiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHZveFNvbG9CdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzb2xvZFwiKTtcbiAgICAgICAgICAgICAgICBpbnN0U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGFsbEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy9tdXRlIGluc3QgY2hhbm5lbFxuICAgICAgICAgICAgICAgIHRoaXMudm94TWFzdGVyR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWxsQnRuLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKCFhbGxCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic29sb2RcIikpIHtcbiAgICAgICAgICAgICAgICAvL3Nob3cgaXQncyBiZWVuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgYWxsQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic29sb2RcIik7XG4gICAgICAgICAgICAgICAgdm94U29sb0J0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm11dGVkXCIpO1xuICAgICAgICAgICAgICAgIGluc3RTb2xvQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibXV0ZWRcIik7XG5cbiAgICAgICAgICAgICAgICAvL3VubXV0ZSBib3RoIGNoYW5uZWxzXG4gICAgICAgICAgICAgICAgdGhpcy52b3hNYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gMC44O1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdE1hc3RlckdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjg7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLXJpZ2h0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctbGVmdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVmZmVyOyIsImNsYXNzIEltYWdlVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3RydW1lbnRhbHMtdWxcIikuY2hpbGRyZW47XG4gICAgICAgIHRoaXMubnVtQXJ0aXN0cyA9IHRoaXMuZWxlTGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lcyA9IFtdO1xuICAgICAgICB0aGlzLmdhdGhlckltYWdlU3RyaW5ncyA9IHRoaXMuZ2F0aGVySW1hZ2VTdHJpbmdzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW1hZ2VTdHJpbmdzT2JqID0gdGhpcy5nYXRoZXJJbWFnZVN0cmluZ3MoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWFnZSA9IHRoaXMuY2hhbmdlSW1hZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnYXRoZXJJbWFnZVN0cmluZ3MoKSB7XG4gICAgICAgIGxldCBpbWFnZVN0cmluZ3NPYmogPSB7fTtcbiAgICAgICAgbGV0IGltYWdlc0xvYWRlZCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1BcnRpc3RzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhcnRpc3RQaWNzID0gW107XG4gICAgICAgICAgICBsZXQgZnVsbE5hbWUgPSB0aGlzLmVsZUxpc3RbaV0uaW5uZXJIVE1MLnNwbGl0KFwiIC1cIilbMF07XG4gICAgICAgICAgICBsZXQgZmlyc3ROYW1lID0gZnVsbE5hbWUuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmZpcnN0TmFtZXMucHVzaChmaXJzdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gaW1hZ2VzTG9hZGVkOyBqIDwgaW1hZ2VzTG9hZGVkICsgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJ0aXN0UGljcy5wdXNoKGAuL2Rpc3QvaW1hZ2VzL2FydGlzdC1waWN0dXJlcy8ke2ZpcnN0TmFtZX0vJHtqKzF9LmpwZ2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VTdHJpbmdzT2JqW2ZpcnN0TmFtZV0gPSBhcnRpc3RQaWNzO1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlU3RyaW5nc09iajtcbiAgICB9XG5cbiAgICBjaGFuZ2VJbWFnZShmaXJzdE5hbWUsIGltZ1RhZywgaSkge1xuICAgICAgICBpbWdUYWcuc3JjID0gdGhpcy5pbWFnZVN0cmluZ3NPYmpbZmlyc3ROYW1lXVtpXTtcbiAgICB9XG5cbiAgICB0cmlnZ2VySW1hZ2VDaGFuZ2VzKGZpcnN0TmFtZSwgaW1nVGFnKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGkgPSBpICUgNDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUltYWdlKGZpcnN0TmFtZSwgaW1nVGFnLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgNTA4LjQ3NDU3NjI3MTE4NjQ0MDY3Nzk2NjEwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVGltZXI7IiwiY2xhc3MgU2VsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihidWZmZXIpIHtcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnN0cnVtZW50YWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLnZvY2FsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9jYWxzLXVsXCIpLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLm1vZGFsQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2dyb3VuZCcpO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNoaWxkJyk7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlc3Rpb24tYnRuJyk7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzSW5zdFRyYWNrQ2xpY2sgPSB0aGlzLnByb2Nlc3NJbnN0VHJhY2tDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2Nlc3NWb2NhbHNUcmFja0NsaWNrID0gdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGlvbkNsaWNrTGlzdGVuZXJzID0gdGhpcy5hZGRTZWxlY3Rpb25DbGlja0xpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMgPSB0aGlzLmFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG5cbiAgICAgICAgdGhpcy50aW1lVG9Mb2FkVHJhY2tzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudm9jYWxDbGlja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zdHJ1bWVudGFsQ2xpY2tlZCkge1xuICAgICAgICAgICAgbGV0IGluc3RQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zdC1wcm9tcHQnKVxuICAgICAgICAgICAgaW5zdFByb21wdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVtZW50YWxDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHZvY2FsUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZvY2FsLXByb21wdCcpO1xuICAgICAgICAgICAgdm9jYWxQcm9tcHQuaW5uZXJIVE1MID0gXCJOb3cgY2hvb3NlIGEgdm9jYWwhIEp1c3RpbidzIGEgZ3JlYXQgY29tYm8uXCI7XG4gICAgICAgICAgICB2b2NhbFByb21wdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm1hcmdpbi10b3A6IC0yNnB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyAtd2Via2l0LWFuaW1hdGlvbjogZmxhc2ggbGluZWFyIDFzIGluZmluaXRlOyBhbmltYXRpb246IGZsYXNoIGxpbmVhciAxcyBpbmZpbml0ZTtcIik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYodGhpcy52b2NhbENsaWNrZWQpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbC1wcm9tcHQnKVxuICAgICAgICAgICAgZmluYWxQcm9tcHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbnN0cnVtZW50YWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmluc3RydW1lbnRhbExpc3Rbal07XG4gICAgICAgICAgICBsZXQgZmlyc3ROYW1lID0gY2hpbGQuaW5uZXJIVE1MLnNwbGl0KFwiIC1cIilbMF0uc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zmlyc3ROYW1lfS1sZWZ0LWltZ2ApO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JsYWNrLWJnLWxlZnRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluc3RHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1sZWZ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5pbnN0R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NWb2NhbHNUcmFja0NsaWNrKGkpIHtcbiAgICAgICAgaWYodGhpcy5pbnN0cnVtZW50YWxDbGlja2VkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudm9jYWxDbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZvY2FsUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZvY2FsLXByb21wdCcpXG4gICAgICAgICAgICAgICAgdm9jYWxQcm9tcHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZvY2FsQ2xpY2tlZCA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGZpbmFsUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmFsLXByb21wdCcpO1xuICAgICAgICAgICAgICAgIGZpbmFsUHJvbXB0LmlubmVySFRNTCA9IFwiTm93IG1peCBhbmQgbWF0Y2ghXCI7XG4gICAgICAgICAgICAgICAgZmluYWxQcm9tcHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogMzQwcHg7IGZvbnQtc2l6ZTogMzBweDsgbWFyZ2luOiAtMzcuNXB4IDBweCA4cHggMjNweDsgdGV4dC1hbGlnbjogY2VudGVyOyAtd2Via2l0LWFuaW1hdGlvbjogZmxhc2ggbGluZWFyIDFzIGluZmluaXRlOyBhbmltYXRpb246IGZsYXNoIGxpbmVhciAxcyBpbmZpbml0ZTtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5hbC1wcm9tcHQnKVxuICAgICAgICAgICAgICAgIGZpbmFsUHJvbXB0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudm9jYWxMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy52b2NhbExpc3Rbal07XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGNoaWxkLmlubmVySFRNTC5zcGxpdChcIiAtXCIpWzBdLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaXJzdE5hbWV9LXJpZ2h0LWltZ2ApO1xuICAgIFxuICAgICAgICAgICAgICAgIGlmIChpID09PSBqKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAwO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibGFjay1iZy1yaWdodFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIudm94R2Fpbk5vZGVzW2pdLmdhaW4udmFsdWUgPSAxO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2hvd2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxhY2stYmctcmlnaHRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci52b3hHYWluTm9kZXNbal0uZ2Fpbi52YWx1ZSA9IDA7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vZGFsLWJhY2tncm91bmRcIik7XG4gICAgICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZFwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJ0LWJ0blwiKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLm1vZGFsQmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1iYWNrZ3JvdW5kLWZhZGUtb3V0XCIpO1xuICAgICAgICB0aGlzLm1vZGFsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibW9kYWwtY2hpbGQtZmFkZS1vdXRcIik7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb2RhbC1jaGlsZC1mYWRlLW91dFwiKTtcbiAgICB9XG4gICAgXG4gICAgYWRkU2VsZWN0aW9uQ2xpY2tMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnN0cnVtZW50YWxMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmluc3RydW1lbnRhbExpc3RbaV07XG4gICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucHJvY2Vzc0luc3RUcmFja0NsaWNrKGkpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZvY2FsTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy52b2NhbExpc3RbaV07XG4gICAgICAgICAgICBjaGlsZC5vbmNsaWNrID0gKCkgPT4gdGhpcy5wcm9jZXNzVm9jYWxzVHJhY2tDbGljayhpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE1vZGFsQ2xpY2tMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubW9kYWxCZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoIXRoaXMudGltZVRvTG9hZFRyYWNrcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFydEJ0bi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmKHRoaXMudGltZVRvTG9hZFRyYWNrcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVUb0xvYWRUcmFja3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RhbC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucXVlc3Rpb25CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9