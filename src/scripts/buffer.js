import BufferLoader from './buffer-loader.js';
import ImageTimer from './image-timer.js';

class Buffer {
    constructor() {
        this.imageTimer = new ImageTimer();
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
    
    init() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.bufferLoader = new BufferLoader(
            this.context,
            [
                './dist/stems/instrumentals/ariana_inst.wav',
                './dist/stems/instrumentals/grimes_inst.wav',
                './dist/stems/instrumentals/lizzo_inst.wav',
                './dist/stems/instrumentals/robyn_inst.wav',
                './dist/stems/instrumentals/kim_inst.wav',
                './dist/stems/instrumentals/justin_inst.wav',
                './dist/stems/instrumentals/charli_inst.wav',
                './dist/stems/instrumentals/katy_inst.wav',
                './dist/stems/vocals/ariana_vox.wav',
                './dist/stems/vocals/grimes_vox.wav',
                './dist/stems/vocals/lizzo_vox.wav',
                './dist/stems/vocals/robyn_vox.wav',
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
        this.instrumentals = [];
        this.vocals = [];

        for (let i = 0; i < 8; i++) {
            this.instrumentals.push(this.context.createBufferSource());
            this.instrumentals[i].buffer = bufferList[i];

            this.instGainNodes[i] = this.context.createGain();
            this.instrumentals[i].connect(this.instGainNodes[i]);
            this.instGainNodes[i].connect(this.instMasterGainNode);
            this.instGainNodes[i].gain.value = 0;

            this.instrumentals[i].loop = true;
        }
        
        for (let i = 0; i < 8; i++) {
            this.vocals.push(this.context.createBufferSource());
            this.vocals[i].buffer = bufferList[i+8];
            
            this.voxGainNodes[i] = this.context.createGain();
            this.vocals[i].connect(this.voxGainNodes[i]);
            this.voxGainNodes[i].connect(this.voxMasterGainNode);
            this.voxGainNodes[i].gain.value = 0;
            
            this.vocals[i].loop = true;
        }
    
        let playPause = document.querySelector('#play-pause');
        let buttonImg = document.querySelector(".button-img")
        playPause.onclick = () => {
            if(buttonImg.id !== "loading-img") {
                if (playPause.getAttribute("playStatus") === "paused") {
                    playPause.firstElementChild.setAttribute("src", "./dist/images/soundon.png");
                    playPause.setAttribute("playStatus", "playing");
    
                    //get rid of black bg
                    document.querySelector("#full-black-bg").setAttribute("class", "hidden");
    
                    if(this.numPlayClicks === 0) {
                        for (let i = 0; i < 8; i++) {
                            this.finalMasterGainNode.gain.value = 0.8;
                            this.instrumentals[i].start(0);
                            this.vocals[i].start(0);
                        }
                        this.numPlayClicks++;
    
                        //trigger image changer for ALL 16 img tags
                        let instImgs = Array.from(document.querySelector("#left-img-wrapper").children).slice(2);
                        for (let i = 0; i < instImgs.length; i++) {
                            const imgTag = instImgs[i];
                            this.imageTimer.triggerImageChanges(this.imageTimer.firstNames[i], imgTag);
                        }
    
                        let voxImgs = Array.from(document.querySelector("#right-img-wrapper").children).slice(2);
                        for (let i = 0; i < voxImgs.length; i++) {
                            const imgTag = voxImgs[i];
                            this.imageTimer.triggerImageChanges(this.imageTimer.firstNames[i], imgTag);
                        }
                    } else {
                        this.finalMasterGainNode.gain.value = 0.8;
                    }
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