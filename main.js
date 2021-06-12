function preload(){

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
     }
  
  function modelLoaded() {
      console.log('Model is Loaded!');
  }

  function draw(){
     image (video,0, 0, 300,300)
  }
  
  
  
  function got_result(error,results){

    if (error){

    console.log(error)
  }

  else{
      console.log(results);
  }
  }

  function take_png(){    
    save('camera.png');
  }

  
  function take_jpeg(){    
    save('camera.jpeg');
  }