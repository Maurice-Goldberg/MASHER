const processInstClick = (i) => {
    let instrumentalList = document.querySelector("#instrumentals-ul").children;
    for (let j = 0; j < instrumentalList.length; j++) {
        let child = instrumentalList[j];
        if (i === j) {
            child.classList.add('selected');
        } else {
            child.classList.remove('selected');
        }
    }
}

const processVocalsClick = (i) => {
    let vocalList = document.querySelector("#vocals-ul").children;
    for (let j = 0; j < vocalList.length; j++) {
        let child = vocalList[j];
        if (i === j) {
            child.classList.add('selected');
        } else {
            child.classList.remove('selected');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let instrumentalList = document.querySelector("#instrumentals-ul").children;
    for (let i = 0; i < instrumentalList.length; i++) {
        let child = instrumentalList[i];
        child.addEventListener('click', () => processInstClick(i));
    }
    
    let vocalList = document.querySelector("#vocals-ul").children;
    for (let i = 0; i < vocalList.length; i++) {
        let child = vocalList[i];
        child.onclick = () => processVocalsClick(i);
    }
});
