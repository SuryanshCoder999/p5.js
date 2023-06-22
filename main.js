function preload() {}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 300, 300);
    fill("green");
    rect(25,0,250,10);
    rect(25,290,250,10);
    rect(0,20,10,250);
    rect(290,20,10,250);
    fill("red");
    circle(20,20,40);
    circle(280,20,40);
    circle(20,280,40);
    circle(280,280,40);
    
}

function take_snap()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet is Loaded...');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}