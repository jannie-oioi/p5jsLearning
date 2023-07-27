var catImg, moneyImg

function preload() {
	catImg = loadImage("nyancat.png")
	moneyImg = loadImage("money.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

var x = 0,
	y = 0,
	vx = 1,
	vy = 1

function draw() {
	background("#b2fffc")
	imageMode(CENTER)
	let sizeW = 100
	for (var o = 0; o < height + sizeW; o += sizeW) {
		for (var i = 0; i < width + sizeW; i += sizeW) {
			push()
			translate(i, o)
			translate(0, sin(frameCount / 100 + i + o) * 100)
			image(moneyImg, 0, 0, sizeW, sizeW)
			pop()
		}
	}
	image(catImg, x, y, 250, 160)
	x += vx
	y += vy
	vy += 0.2

	if (y > height - 60) {
		vy = -vy * 0.95
	}
	if (x > width || x < 0) {
		vx = -vx
	}

}