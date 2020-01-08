const Buffer = require('./buffer');

class Selection {
    constructor(buffer) {
        this.instrumentalList = document.querySelector("#instrumentals-ul").children;
        this.vocalList = document.querySelector("#vocals-ul").children;
        this.modalBg = document.querySelector('.modal-background');
        this.modal = document.querySelector('.modal-child');
        this.startBtn = document.querySelector('.start-btn');
        this.questionBtn = document.querySelector('#question-btn');

        this.processInstClick = this.processInstClick.bind(this);
        this.processVocalsClick = this.processVocalsClick.bind(this);
        this.buffer = buffer;
    }

    processInstClick(i) {
        for (let j = 0; j < this.instrumentalList.length; j++) {
            let child = this.instrumentalList[j];
            if (i === j) {
                child.classList.add('selected');
                this.buffer.instGainNodes[j].gain.value = 1;

            } else {
                child.classList.remove('selected');
                this.buffer.instGainNodes[j].gain.value = 0;
            }
        }
    }
    
    processVocalsClick(i) {
        for (let j = 0; j < this.vocalList.length; j++) {
            let child = this.vocalList[j];
            if (i === j) {
                child.classList.add('selected');
                this.buffer.voxGainNodes[j].gain.value = 1;
            } else {
                child.classList.remove('selected');
                this.buffer.voxGainNodes[j].gain.value = 0;
            }
        }
    }

    openModal() {
        this.modalBg.setAttribute("class", "modal-background");
        this.modal.setAttribute("class", "modal-child");
        this.startBtn.setAttribute("class", "start-btn");
    }

    closeModal() {
        this.modalBg.setAttribute("class", "modal-background-fade-out");
        this.modal.setAttribute("class", "modal-child-fade-out");
        this.startBtn.setAttribute("class", "modal-child-fade-out");
    }
    
    addClickListeners() {
        for (let i = 0; i < this.instrumentalList.length; i++) {
            let child = this.instrumentalList[i];
            child.addEventListener('click', () => this.processInstClick(i));
        }
        
        for (let i = 0; i < this.vocalList.length; i++) {
            let child = this.vocalList[i];
            child.onclick = () => this.processVocalsClick(i);
        }

        this.modalBg.onclick = () => {
            this.closeModal();
        }
        
        this.startBtn.onclick = (event) => {
            this.closeModal();
            event.stopPropagation();
        }

        this.modal.onclick = (event) => {
            event.stopPropagation();
        }

        this.questionBtn.onclick = () => {
            this.openModal();
        }
    }
}

module.exports = Selection;