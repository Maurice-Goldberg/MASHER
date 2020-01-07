window.onload = init;
let context;
let bufferLoader;

function init() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context,
        [
            '/src/assets/stems/TestInstrumental.wav',
            '/src/assets/stems/TestVocal.wav'
        ],
        onLoad
    );
    bufferLoader.load();
}

function onLoad(bufferList) {
    // Create two sources and play them both together
    let source1 = context.createBufferSource();
    let source2 = context.createBufferSource();

    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];

    source1.connect(context.destination);
    source2.connect(context.destination);

    //set up loop functionality
    source1.loop = true;
    source2.loop = true;


    //play and pause buttons
    let playPause = document.querySelector('#play-pause');

    playPause.onclick = () => {
        if (playPause.getAttribute("playStatus") === "paused") {
            source1.start(0);
            source2.start(0);
            playPause.firstElementChild.setAttribute("src", "/src/assets/images/pause.png");
            playPause.setAttribute("playStatus", "playing");
        } else {
            init();
            //how do i have it resume from where it gets paused?

            source1.stop(0);
            source2.stop(0);
            playPause.firstElementChild.setAttribute("src", "/src/assets/images/play.png");
            playPause.setAttribute("playStatus", "paused");
        } 
    }
}

