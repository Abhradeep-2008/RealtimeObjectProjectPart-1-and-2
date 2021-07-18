status = "";

function preload(){

}

function setup(){
 canvas = createCanvas(400, 400);
 canvas.center()

 video = createCapture(VIDEO);
 video.hide();
}

function draw(){
 image(video, 0, 0, 400, 400);
}

function start(){

    object = document.getElementById("object_name").value;
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    objectDetection.detect(gotResults);

    if(object == ""){
        document.getElementById("status").innerHTML = "Error 101: Text Input is empty!"
    }
    else{
        document.getElementById("status").innerHTML = "Status: Detecting object......";
    }

}

function modelLoaded(){
  console.log("cocossd is initialized!");
  status = 'True';

}

function gotResults(){
    
}