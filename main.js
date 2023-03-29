function preload() {
    nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

nose_x=""
nose_y=""

function setup() {
    canvas = createCanvas(350, 320)
    canvas.center()

    camera = createCapture(VIDEO)
    camera.size(350, 320)
    camera.hide()

    posenet = ml5.poseNet(camera, modelLoaded)
    posenet.on('pose', gotResults)
}
//restults is an array which stores all the 17 body parts
function gotResults(results) {
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
    }
}

function modelLoaded() {
    console.log("poseNet is initiallised")
}

function draw() {
    image(camera, 0, 0, 350, 320)
    fill("red")
    //circle(nose_x,nose_y,30)
    image(nose, nose_x, nose_y, 30, 30)
}

function take_snapshot() {
    save("clown_nose.png")
}