import './styles/index.scss';
const Buffer = require('./scripts/buffer');
const Selection = require('./scripts/selection');

document.addEventListener('DOMContentLoaded', () => {
    window.newBuffer = new Buffer();
    newBuffer.init();
    newBuffer.onLoad(newBuffer.bufferLoader.bufferList);
    
    const selection = new Selection(newBuffer);
    selection.addClickListeners();

    let playPause = document.querySelector('#play-pause');
    setTimeout(() => {
        playPause.firstElementChild.setAttribute("id", "play-pause-img");
        playPause.firstElementChild.setAttribute("src", "/src/assets/images/play.png");
    }, 4000);
});