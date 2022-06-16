class Pipe {
	constructor() {
		this.gap = 150;
		this.speedX = 5;
	}
	drawPipe() {
		const container = document.querySelector(".container");
		this.pipeTop = document.createElement("div");
		this.pipeTop.style.position = "absolute";
		this.pipeTop.style.backgroundImage = `url("./assets/images/sprites/pipe-green.png")`;
		let ranHeight = randomNumberGenerator(150, 250);

		this.pipeTop.style.top = `0`;
		this.pipeTop.style.left = "499px";
		this.pipeTop.style.height = `${ranHeight}px`;
		this.pipeTop.style.width = "52px";
		this.pipeTop.style.transform = "rotate(180deg)";
		this.pipeTop.style.backgroundRepeat = "no-repeat";
		container.appendChild(this.pipeTop);

		this.pipeDown = document.createElement("div");
		this.pipeDown.style.position = "absolute";
		this.pipeDown.style.backgroundImage = `url("./assets/images/sprites/pipe-green.png")`;
		this.pipeDown.style.height = 450 - ranHeight - this.gap + "px";
		this.pipeDown.style.bottom = `0px`;
		this.pipeDown.style.left = "499px";
		this.pipeDown.style.width = "52px";

		this.pipeDown.style.backgroundRepeat = "no-repeat";
		container.appendChild(this.pipeDown);
	}

	checkCollision() {
		if (
			bird.posX + bird.width >= parseInt(this.pipeTop.style.left) &&
			bird.posX <=
				parseInt(this.pipeTop.style.left) +
					parseInt(this.pipeTop.style.width) &&
			bird.posY <= parseInt(this.pipeTop.style.height)
		) {
			collision = true;
		}

		if (
			bird.posX + bird.width >= parseInt(this.pipeTop.style.left) &&
			bird.posX <=
				parseInt(this.pipeTop.style.left) +
					parseInt(this.pipeTop.style.width) &&
			bird.posY + bird.height >=
				CONTAINER_HEIGHT - parseInt(this.pipeDown.style.height)
		) {
			collision = true;
		}
	}

	pipeMove() {
		this.checkCollision();
		const left = parseInt(this.pipeTop.style.left) - this.speedX;

		if (left < -parseInt(this.pipeDown.style.width)) {
			if (!collision) {
				score += 1;
			}
			gameScore.innerHTML = `Score:${score}`;
			this.pipeTop.style.left = "5000px";
			this.pipeDown.style.left = "5000px";
			this.pipeTop.style.display = "none";
			this.pipeDown.style.display = "none";
		} else {
			this.pipeTop.style.left = `${left}px`;
			this.pipeDown.style.left = `${left}px`;
		}
	}
}

const start = document.querySelector(".start-container");

start.addEventListener("click", () => {
	start.style.display = "none";
	// container.style.opacity = "0";
	game();
});

function gameOver() {
	const over = document.querySelector(".gameOver");
	over.style.display = "block";

	over.addEventListener("click", () => {
		window.location.reload();
		over.style.display = "none";
	});
}

function game() {
	START = true;
	if (START) {
		bird = new Player();

		document.addEventListener("keydown", (e) => {
			if (e.key == " ") {
				if (!collision) {
					bird.birdJump();
				}
			}
		});
		var pipeConstruct = setInterval(() => {
			let pipe = new Pipe();
			pipe.drawPipe();

			var pMove = setInterval(() => {
				pipe.pipeMove();
			}, 1000 / 30);

			if (collision) {
				clearInterval(pipeConstruct);
				clearInterval(pMove);
				gameOver();
			}
		}, 2000);
	}
}
