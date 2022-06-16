var score = 0;
randomNumberGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
const CONTAINER_HEIGHT = 450;

birdAnimate = [
	"yellowbird-upflap.png",
	"yellowbird-midflap.png",
	"yellowbird-downflap.png",
];

checkDistance = (p1, p2, obj_p1, obj_p2) => {
	return Math.sqrt(
		(p1 - obj_p1) * (p1 - obj_p1) + (p2 - obj_p2) * (p2 - obj_p2)
	);
};

var START = false;
var collision = false;

const gameScore = document.querySelector(".score");
gameScore.innerHTML = `Score:0`;
