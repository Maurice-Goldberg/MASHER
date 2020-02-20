class Selection {
    constructor(buffer) {
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

    processInstTrackClick(i) {
        if(!this.instrumentalClicked) {
            let instPrompt = document.querySelector('#inst-prompt')
            instPrompt.setAttribute("style", "display: none;");
            this.instrumentalClicked = true;
            
            let vocalPrompt = document.querySelector('#vocal-prompt');
            vocalPrompt.innerHTML = "Now choose a vocal! Justin's a great combo.";
            vocalPrompt.setAttribute("style", "margin-top: -26px; margin-bottom: 10px; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;");
        } 

        if(this.vocalClicked) {
            let finalPrompt = document.querySelector('#final-prompt')
            finalPrompt.setAttribute("style", "display: none;");
        }

        for (let j = 0; j < this.instrumentalList.length; j++) {
            let child = this.instrumentalList[j];
            let firstName = child.innerHTML.split(" -")[0].split(" ")[0].toLowerCase();
            let img = document.querySelector(`#${firstName}-left-img`);

            if (i === j) {
                if(child.classList.contains("selected")) {
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
    
    processVocalsTrackClick(i) {
        if(this.instrumentalClicked) {
            if (!this.vocalClicked) {
                let vocalPrompt = document.querySelector('#vocal-prompt')
                vocalPrompt.setAttribute("style", "display: none;");
                this.vocalClicked = true;
    
                let finalPrompt = document.querySelector('#final-prompt');
                finalPrompt.innerHTML = "Now mix and match!";
                finalPrompt.setAttribute("style", "width: 340px; font-size: 30px; margin: -37.5px 0px 8px 23px; text-align: center; -webkit-animation: flash linear 1s infinite; animation: flash linear 1s infinite;");
            } else {
                let finalPrompt = document.querySelector('#final-prompt')
                finalPrompt.setAttribute("style", "display: none;");
            }
    
            for (let j = 0; j < this.vocalList.length; j++) {
                let child = this.vocalList[j];
                let firstName = child.innerHTML.split(" -")[0].split(" ")[0].toLowerCase();
                let img = document.querySelector(`#${firstName}-right-img`);
    
                if (i === j) {
    
                    if(child.classList.contains("selected")) {
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
    
    addSelectionClickListeners() {
        for (let i = 0; i < this.instrumentalList.length; i++) {
            let child = this.instrumentalList[i];
            child.addEventListener('click', () => this.processInstTrackClick(i));
        }
        
        for (let i = 0; i < this.vocalList.length; i++) {
            let child = this.vocalList[i];
            child.onclick = () => this.processVocalsTrackClick(i);
        }
    }

    addModalClickListeners() {
        this.modalBg.onclick = () => {
            if(!this.timeToLoadTracks) {
                this.closeModal();
            }
        }

        this.startBtn.onclick = (event) => {
            event.stopPropagation();
            if(this.timeToLoadTracks) {
                this.buffer.init();
                this.timeToLoadTracks = false;
            }
            this.closeModal();
        }

        this.modal.onclick = (event) => {
            event.stopPropagation();
        }

        this.questionBtn.onclick = () => {
            this.openModal();
        }
    }
}

export default Selection;