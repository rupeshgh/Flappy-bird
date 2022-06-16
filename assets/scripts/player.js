const container = document.querySelector(".container");

class Player {
	constructor() {
		this.height = 24;
		this.width = 34;
		this.posX = 24;
		this.posY = 150;
		this.gravityY = 5;
		this.velocity = 50;
		this.createPlayer();
		this.animate();
	}
	animate() {
		let animIndex = 0;
		setInterval(() => {
			let image = `url('./assets/images/sprites/${birdAnimate[animIndex]}')`;
			this.player.style.backgroundImage = image;
			animIndex += 1;
			if (animIndex === 3) {
				animIndex = 0;
			}
		}, 1000 / 30);
	}

	createPlayer() {
		this.player = document.createElement("div");
		this.player.style.position = "absolute";
		this.player.style.width = `${this.width}px`;
		this.player.style.height = `${this.height}px`;
		this.player.style.top = `${this.posY}px`;
		this.player.style.left = `${this.posX}px`;
		container.appendChild(this.player);

		this.playerDown = setInterval(() => {
			this.moveDown();
		}, 1000 / 30);
	}
	moveDown() {
		if (this.posY < 430) {
			this.player.style.top = `${this.posY + this.gravityY}px`;
			this.posY = parseInt(this.player.style.top);
		} else {
			collision = true;
			clearInterval(this.playerDown);
		}
	}

	birdJump() {
		const angle = -30;
		const move = 15;
		let totalMove = 0;
		let mov = setInterval(() => {
			totalMove += 15;
			const top = this.posY - move;
			this.player.style.top = `${top}px`;
			this.posY = top;
			this.player.style.transform = `rotate(-30deg)`;
			if (totalMove >= 150) {
				clearInterval(mov);
				this.player.style.transform = `rotate(30deg)`;
				this.moveDown();
			}
		}, 1000 / 30);
		const top = this.posY - this.velocity;
	}
}
