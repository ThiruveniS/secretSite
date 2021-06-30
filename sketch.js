
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  var title = createElement('h2')
    title.html("My secret website");
    title.position(130, 0);
    
    var input = createInput("Secret code");
    var button = createButton('Check');
    
    input.position(130, 160);
    button.position(250, 200);
button.mousePressed(()=>{
console.log("hello")
var code=input.value();
if(code==="harsh"){
 input.hide();
 button.hide();
 var msg=createElement('h2');
 msg.html("welcome to secret page");
 msg.position(130,100)
}
})
  
}

function draw(){

}
