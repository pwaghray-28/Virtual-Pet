//Create variables here
var food
function preload()
{
  dogimage = loadImage("images/dogImg.png")
  dog1image = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200,200,10,10)
  dog.addImage(dogimage)
  dog.scale = 0.6
 database = firebase.database()
 writeStock(20)
 foodStock = database.ref('Food');
 foodStock.on("value",readStock); 
}



function draw() {  
background(46,139.87)
  drawSprites();
  //add styles here
if(keyDown(UP_ARROW)){
  if(food>0){
  food--
  }
  writeStock(food)
  dog.addImage(dog1image)
  dog.scale = 0.6
}
textSize(20)
fill("blue")
text(food,50,50)
}
function readStock(data){
food = data.val()
}
function writeStock(count){
  database.ref('/').update({
    Food:count
  })
}



