let shipX; 
let shipY;
let hp;
let y_speed = 10; 
let bulletX;
let bulletY;
let bulletSpeed = 0;
const number_of_boxes_in_row = 20;
const number_of_boxes_in_column = 20; 
let box_width, box_height;
let color = "white"; 
let color2 = "black";
let enemiesX;
let enemiesY;


//  function preload(){
//     ship = loadImage('player.png');
//     // img = loadImage("alien1.png");
//     // img = loadImage("alien2.png");
//     // img = loadImage("alien3.png");
//   }


 function setup(){
    createCanvas(600, 600);
    background(100);
    shipX = width/2;
    shipY = height-50;
    bulletX = shipX;
    bulletY = shipY;
    enemiesX = width/2;
    enemiesY = height/2;
    box_height = (height-300)/number_of_boxes_in_column; 
    box_width = width/ number_of_boxes_in_row;
    console.log(bulletX, shipX)
}



function draw(){
  background("grey");
    
  if (keyIsDown(LEFT_ARROW)){
      shipX -= 5;
      bulletX -=5; 
  }

  if (keyIsDown(RIGHT_ARROW)){
    shipX += 5; 
    bulletX +=5; 
  }
  
  bulletY -= bulletSpeed; 


  fill ("black"); 
  ellipse(shipX,shipY,30,50);
  // bulletY = shipY;


  fill("black");
  rect(bulletX, bulletY-15, 10, 20);
      
    
  if (bulletY <= 0) {
    bulletY = shipY;
    bulletSpeed = 0;
    bulletX = shipX; 
  }
  for(let i = 0; i < number_of_boxes_in_row; i++){
    const x = i*box_width;
  for (let j = 0; j < number_of_boxes_in_column; j++){
    const y = j* box_height;
    rect(x,y-2,box_width,box_height);
      fill("grey"); }
    }
   }
    // rect(enemiesX, enemiesY, 30, 40);
    // fill(color2); } }  
 
function keyPressed() {
  if(keyCode === 32){ 
    bulletSpeed = 25;
         }
    console.log("here", bulletX, bulletY)
  }

  
//   }
// }

// function draw(){
  // background(100);
  // rect(bulletX, bulletY, 5, 20);
  
  // // ellipse(bulletX, bulletY, 5, 5);
  // bulletY -= bulletSpeed;

  // if (bulletY <= 0) {
  //     bulletY = shipY;
  //     bulletSpeed = 0;
  // }

// }





    // function keyIsDown(){
    
    // }