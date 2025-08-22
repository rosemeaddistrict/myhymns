const lyris = "csvContent";
async function loadCsvData(filename) {
    const csvUrl = filename; // Replace with your CSV file URL
    try {
        const response = await fetch(csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        document.getElementById(lyris).innerText = csvText;
        // Further process the CSV text here (e.g., parse it into an array of objects)
    } catch (error) {
        console.error('Error fetching CSV:', error);
        document.getElementById(lyris).innerText = 'Error loading CSV data.';
    }
}

function playAudio(audio, t1, t2){
    console.log("Play audio...");
    document.getElementById("player").src = `${audio}#t=${t1},${t2}`;
    document.getElementById("player").play();
}

function playYoutube(youtube, videoW, videoH, t1, t2){
    console.log("Play youtube...");
    const videoSetting = `${youtube};start=${t1}&end=${t2}`;
    document.getElementById("youtube").innerHTML = `<iframe width=\"${videoW}\" height=\"${videoH}\" src=\"${videoSetting}\"" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

var scoreSRC = "";
function showScore(src) {
    const score = document.getElementById("score").checked;
    const obj = document.getElementById("images");
    score ? addScore(src) : removeScore();
}

function addScore(src) {
    scoreSRC = src;
    const images = document.getElementById("images");
    const newImg = document.createElement("img");
    newImg.setAttribute('src', src);
    newImg.setAttribute('width', 500);
    newImg.setAttribute('id', "img");
    images.append(newImg);
}

function removeScore() {
    // Get a reference to the image element you want to remove
    const parentDiv = document.getElementById('images'); 
    const imageToRemove = document.getElementById('img'); 
    parentDiv.removeChild(imageToRemove); 
    // Remove the image directly
    imageToRemove.remove(); 
}