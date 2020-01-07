window.onload = init;
let context;
let bufferLoader;

function init() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context,
        [
            '/src/assets/stems/instrumentals/ariana_inst.wav',
            '/src/assets/stems/instrumentals/grimes_inst.wav',
            '/src/assets/stems/instrumentals/lizzo_inst.wav',
            '/src/assets/stems/instrumentals/robyn_inst.wav',
            '/src/assets/stems/vocals/ariana_vox.wav',
            '/src/assets/stems/vocals/grimes_vox.wav',
            '/src/assets/stems/vocals/lizzo_vox.wav',
            '/src/assets/stems/vocals/robyn_vox.wav',
        ],
        onLoad
    );
    bufferLoader.load();
}

function onLoad(bufferList) {
    let instrumentals = [];
    for (let i = 0; i < 4; i++) {
        instrumentals[i] = context.createBufferSource();
    }

    let vocals = [];
    for (let i = 0; i < 4; i++) {
        vocals[i] = context.createBufferSource();
    }

    for (let i = 0; i < 4; i++) {
        instrumentals[i] = bufferList[i];
    }

    for (let i = 4; i < 8; i++) {
        vocals[i] = bufferList[i];
    }

    for (let i = 0; i < 4; i++) {
        instrumentals[i].connect(context.destination);
        instrumentals[i].loop = true;

        vocals[i].connect(context.destination);
        vocals[i].loop = true;
    }

    //play and pause buttons
    let playPause = document.querySelector('#play-pause');

    playPause.onclick = () => {
        if (playPause.getAttribute("playStatus") === "paused") {
            for (let i = 0; i < 4; i++) {
                instrumentals[i].start(0);
                vocals[i].start(0);
            }

            playPause.firstElementChild.setAttribute("src", "/src/assets/images/pause.png");
            playPause.setAttribute("playStatus", "playing");
        } else {
            init();
            //how do i have it resume from where it gets paused?

            for (let i = 0; i < 4; i++) {
                instrumentals[i].stop(0);
                vocals[i].stop(0);
            }

            playPause.firstElementChild.setAttribute("src", "/src/assets/images/play.png");
            playPause.setAttribute("playStatus", "paused");
        }
    }
}

