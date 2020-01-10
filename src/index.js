import './styles/index.scss';
import Buffer from './scripts/buffer';
import Selection from './scripts/selection';

document.addEventListener('DOMContentLoaded', () => {
    window.newBuffer = new Buffer();
    newBuffer.init();
    newBuffer.onLoad(newBuffer.bufferLoader.bufferList);
    
    const selection = new Selection(newBuffer);
    selection.addClickListeners();

    setTimeout(() => {
        document.querySelector("#loading-bg").setAttribute("id", "hidden-loading-bg");
    }, 2000);

    let playPause = document.querySelector('#play-pause');
    setTimeout(() => {
        playPause.firstElementChild.setAttribute("id", "play-pause-img");
        playPause.firstElementChild.setAttribute("src", "/src/assets/images/play.png");
    }, 4500);
});