function setup()
{
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide()
    canvas.center()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pHGayKcva/model.json", modelLoaded)
}

function draw()
{
    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResult);
}
function modelLoaded()
{
    console.log("Model is Loaded!");
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}


