let mobilenet;
let penguin;
let dropzone;
let display = document.getElementById("data")
let display2 = document.getElementById("data2")
let display3 = document.getElementById("data3")
let visibility = document.getElementById("middleinfo")


function  modelReady(file){
   let img = createImg(file.data)

   console.log("Model is ready!")
   mobilenet.predict(img, gotResults)
} 

function gotResults(error, results){
   if (error) {
      console.error(error);
   } else {
      let text = Math.floor(results[0].confidence * 100) + "% confidence"
      console.log(results)
      console.log(results[0].label + " " + Math.floor(results[0].confidence * 100) + "%")
      console.log(results[0].label + " " + results[0].confidence + "%")
      display.innerHTML = results[0].label + " " + text.bold();
      display2.innerHTML = results[1].label + " " + Math.floor(results[1].confidence * 100) + "%"
      display3.innerHTML = results[2].label + " " + Math.floor(results[2].confidence * 100) + "%"
      textSize(36)
      visibility.style.visibility = "visible"

      
      
   }
}

function setup() {
   mobilenet = ml5.imageClassifier("MobileNet");
   dropzone = select('#dropzone')
   dropzone.dragOver(highlight)
   dropzone.dragLeave(unhighlight)
   dropzone.drop(modelReady, unhighlight)
}

function highlight() {
   dropzone.style('background-color', '#7395a0')
   
}

function unhighlight() {
   dropzone.style('background-color', '#9dccdb')

}




