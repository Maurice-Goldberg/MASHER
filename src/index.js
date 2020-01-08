import './styles/index.scss';
const Buffer = require('./scripts/buffer');
const Selection = require('./scripts/selection');

document.addEventListener('DOMContentLoaded', () => {
    window.newBuffer = new Buffer();
    newBuffer.init();
    newBuffer.onLoad(newBuffer.bufferLoader.bufferList);
    
    const selection = new Selection(newBuffer);
    selection.addClickListeners();
});