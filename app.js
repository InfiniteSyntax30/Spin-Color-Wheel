
let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let popup = document.getElementById('popup');
let popupText = document.getElementById('popup-text');
let closeBtn = document.getElementById('close-btn');
let resultText = document.getElementById('result');
let currentRotation = 0;
let usedColors = new Set();

const colors = [
	{ name: "Red", min: 0, max: 72 },      //
    { name: "Green", min: 72, max: 144 },   // 
    { name: "Purple", min: 144, max: 216 }, // 
    { name: "Orange", min: 216, max: 288 },    // 
    { name: "Blue", min: 288, max: 360 }  // 
];

function getColor(degrees) {
    let normalizedDegrees = degrees % 360;
    if (normalizedDegrees < 0) normalizedDegrees += 360; // Convert negatives

    for (let color of colors) {
        if (normalizedDegrees >= color.min && normalizedDegrees < color.max) {
            return color.name;
        }
    }
    return "Unknown";
}

// Spin button click event

btn.onclick = function () {
	let spinAmount = Math.ceil(Math.random() * 1800) + 2520; // Ensures at least 5 full spins
    currentRotation += spinAmount;

    container.style.transition = "transform 3s ease-out"; // Smooth rotation
    container.style.transform = `rotate(${currentRotation}deg)`;



	setTimeout(() => {
        let landedColor = getColor(currentRotation % 360);
		popupText.textContent = `Yay! You got ${landedColor}! 🎉🎉🎉`;
        popup.style.display = "block";

		grayOutColor(landedColor); // Gray out the landed color
    }, 3000);
}

// Close pop-up
closeBtn.onclick = function () {
    popup.style.display = "none";
};
