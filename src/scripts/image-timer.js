class ImageTimer {
    constructor() {
        this.eleList = document.querySelector("#instrumentals-ul").children;
        this.numArtists = this.eleList.length;
        this.firstNames = [];
        this.gatherImageStrings = this.gatherImageStrings.bind(this);
        this.imageStringsObj = this.gatherImageStrings();
        this.changeImage = this.changeImage.bind(this);
    }

    gatherImageStrings() {
        let imageStringsObj = {};
        let imagesLoaded = 0;
        for (let i = 0; i < this.numArtists; i++) {
            let artistPics = [];
            let fullName = this.eleList[i].innerHTML.split(" -")[0];
            let firstName = fullName.split(" ")[0].toLowerCase();
            this.firstNames.push(firstName);
            for(j = imagesLoaded; j < imagesLoaded + 4; j++) {
                artistPics.push(`/src/assets/images/artist-pictures/${firstName}/${j+1}.jpg`);
            }
            imageStringsObj[firstName] = artistPics;
            imagesLoaded += 4;
        }
        return imageStringsObj;
    }

    changeImage(firstName, imgTag, i) {
        imgTag.src = this.imageStringsObj[firstName][i];
    }

    triggerImageChanges(firstName, imgTag) {
        let i = 0;
        setInterval(
            () => {
                i++;
                i = i % 4;
                this.changeImage(firstName, imgTag, i);
            }
            , 508.4745762711864406779661016949152542372881355932203389830508474576271186440677966101694915254237288135593220338983050847457627118644067796610169491525423728813559322033898305084745762711864406779661);
    }
}

module.exports = ImageTimer;