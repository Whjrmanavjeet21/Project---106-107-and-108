var lion = 0;
var elephant = 0;
var snake = 0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier(' https://teachablemachine.withgoogle.com/models/jWhk26R4e/nodel.json',modelLoaded);
}
function modelLoaded() {
    classifier.classify(gotResult);
}
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        console.log("Red"+random_number_r);
        console.log("Green"+random_number_g);
        console.log("Blue"+random_number_b);
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("dected").style.fontFamily = 'Corinthia';
        document.getElementById("voice").innerHTML= "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Corinthia';
        img = document.getElementById("image");
        if(results[0].label == "lion"){
            img.src = "Lion.png";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion + lion;"
        }else if(results[0].label == "elephant"){
            img.src = "Elephant.png";
            elephant = elephant+1;
            document.getElementById("detected").innerHTML = "Detected elephant + elephant;"
        }else if(results[0].label == "snake"){
            img.src = "Anaconda.png";
            snake = snake+1;
            document.getElementById("detected").innerHTML = "Detected snake + snake;"
        }else{
            img.src="Listining.gif";
        }
    }
}
