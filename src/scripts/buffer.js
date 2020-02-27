import BufferLoader from './buffer-loader.js';
import ImageTimer from './image-timer.js';
import Selection from './selection';

class Buffer {
    constructor() {
        this.imageTimer = new ImageTimer();
        this.init = this.init.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.addFirstPlayClickListener = this.addFirstPlayClickListener.bind(this);
        // this.numPlayClicks = 0;
    }

    addFirstPlayClickListener() {
        // let playPause = document.querySelector('#play-pause');
        debugger
        // playPause.onclick = () => {
        //     if (this.numPlayClicks === 0) {
        //         playPause.firstElementChild.setAttribute("id", "loading-img");
        //         playPause.firstElementChild.setAttribute("src", "./dist/images/loading.svg");
        //         this.init();
        //         this.numPlayClicks++;
        //     }
        // }
    }
    
    init() {
        let AudioContext = window.AudioContext || window.webkitAudioContext || false;

        if (AudioContext) {
            this.context = new AudioContext;
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

        this.bufferLoader = new BufferLoader(
            this.context,
            [
                './dist/stems/instrumentals/ariana_inst.wav',
                './dist/stems/instrumentals/grimes_inst.wav',
                './dist/stems/instrumentals/lizzo_inst.wav',
                './dist/stems/instrumentals/taylor_inst.wav',
                './dist/stems/instrumentals/kim_inst.wav',
                './dist/stems/instrumentals/justin_inst.wav',
                './dist/stems/instrumentals/charli_inst.wav',
                './dist/stems/instrumentals/katy_inst.wav',
                './dist/stems/vocals/ariana_vox.wav',
                './dist/stems/vocals/grimes_vox.wav',
                './dist/stems/vocals/lizzo_vox.wav',
                './dist/stems/vocals/taylor_vox.wav',
                './dist/stems/vocals/kim_vox.wav',
                './dist/stems/vocals/justin_vox.wav',
                './dist/stems/vocals/charli_vox.wav',
                './dist/stems/vocals/katy_vox.wav'
            ],
            this.onLoad
        );
        this.bufferLoader.load();
    }
    
    onLoad(bufferList) {

        for (let i = 0; i < 8; i++) {
            this.instrumentals.push(this.context.createBufferSource());
            this.instrumentals[i].buffer = bufferList[i];

            this.instGainNodes[i] = this.context.createGain();
            this.instrumentals[i].connect(this.instGainNodes[i]);
            this.instGainNodes[i].connect(this.instMasterGainNode);
            this.instGainNodes[i].gain.value = 0;

            this.instrumentals[i].loop = true;
            this.instrumentals[i].start(0);
        }
        
        for (let i = 0; i < 8; i++) {
            this.vocals.push(this.context.createBufferSource());
            this.vocals[i].buffer = bufferList[i+8];
            
            this.voxGainNodes[i] = this.context.createGain();
            this.vocals[i].connect(this.voxGainNodes[i]);
            this.voxGainNodes[i].connect(this.voxMasterGainNode);
            this.voxGainNodes[i].gain.value = 0;
            
            this.vocals[i].loop = true;
            this.vocals[i].start(0);
        }

        this.finalMasterGainNode.gain.value = 0.8;

        //turn icon to sound on once loaded
        let playPause = document.querySelector('#play-pause');

        playPause.setAttribute("playStatus", "playing");
        playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
        playPause.firstElementChild.setAttribute("id", "play-pause-img");
        document.querySelector("#full-black-bg").setAttribute("class", "hidden");
        let instPrompt = document.querySelector('#inst-prompt')
        instPrompt.innerHTML = "Choose an instrumental! Ariana's a good start.";
        instPrompt.setAttribute("style", "margin-top: -26px; margin-bottom: 10px; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;");

        //trigger image changer for ALL 16 img tags
        let instImgs = Array.from(document.querySelector("#left-img-wrapper").children).slice(2);
        instImgs.forEach((imgTag, i) => {
            debugger
            this.imageTimer.triggerImageChanges(this.imageTimer.firstNames[i], imgTag);
        });

        let voxImgs = Array.from(document.querySelector("#right-img-wrapper").children).slice(2);
        voxImgs.forEach((imgTag, i) => {
            this.imageTimer.triggerImageChanges(this.imageTimer.firstNames[i], imgTag);
        });

        const selection = new Selection(window.newBuffer);
        selection.addSelectionClickListeners();
    
        let buttonImg = document.querySelector(".button-img");

        //click listener for all play button clicks
        playPause.onclick = () => {
            if(buttonImg.id !== "loading-img") {
                if (playPause.getAttribute("playStatus") === "paused") {
                    playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
                    playPause.setAttribute("playStatus", "playing");
    
                    //get rid of black bg
                    document.querySelector("#full-black-bg").setAttribute("class", "hidden");
                    this.finalMasterGainNode.gain.value = 0.8;
                } else {
                    this.finalMasterGainNode.gain.value = 0;
                    
                    playPause.firstElementChild.setAttribute("src", "./dist/images/mute.png");
                    playPause.setAttribute("playStatus", "paused");
    
                    //cover with black bg
                    document.querySelector("#full-black-bg").setAttribute("class", "showing");
                }
            }
        }

        let instSoloBtn = document.querySelector("#inst-solo-btn");
        let voxSoloBtn = document.querySelector("#vox-solo-btn");
        let allBtn = document.querySelector('#all-btn');
        instSoloBtn.onclick = (event) => {
            event.stopPropagation();
            //if it isn't already solod
            if(!instSoloBtn.classList.contains("solod")) {
                //show it's been selected
                instSoloBtn.setAttribute("class", "solod");
                voxSoloBtn.setAttribute("class", "muted");
                allBtn.setAttribute("class", "muted");

                //mute vox channel
                this.voxMasterGainNode.gain.value = 0;
                this.instMasterGainNode.gain.value = 0.8;

                document.querySelector("#black-bg-right").setAttribute("class", "showing");
                document.querySelector("#black-bg-left").setAttribute("class", "hidden");
            }
        }

        voxSoloBtn.onclick = (event) => {
            event.stopPropagation();
            //if it isn't already solod
            if (!voxSoloBtn.classList.contains("solod")) {
                //show it's been selected
                voxSoloBtn.setAttribute("class", "solod");
                instSoloBtn.setAttribute("class", "muted");
                allBtn.setAttribute("class", "muted");

                //mute inst channel
                this.voxMasterGainNode.gain.value = 0.8;
                this.instMasterGainNode.gain.value = 0;

                document.querySelector("#black-bg-left").setAttribute("class", "showing");
                document.querySelector("#black-bg-right").setAttribute("class", "hidden");

            }
        }

        allBtn.onclick = (event) => {
            event.stopPropagation();
            if (!allBtn.classList.contains("solod")) {
                //show it's been selected
                allBtn.setAttribute("class", "solod");
                voxSoloBtn.setAttribute("class", "muted");
                instSoloBtn.setAttribute("class", "muted");

                //unmute both channels
                this.voxMasterGainNode.gain.value = 0.8;
                this.instMasterGainNode.gain.value = 0.8;

                document.querySelector("#black-bg-right").setAttribute("class", "hidden");
                document.querySelector("#black-bg-left").setAttribute("class", "hidden");
            }
        }
    }
}

export default Buffer;