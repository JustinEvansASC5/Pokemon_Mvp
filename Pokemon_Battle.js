var img1
var img2
var img
let HP = 100
let You = 100
function setup(){
    createCanvas(600,600)
    background(255)

 // img1 = loadImage('Enemy_Pokemon.png')
 //  img2 = loadImage('charmander.png')
   img1 = loadImage('https://vignette.wikia.nocookie.net/pokemon-reborn/images/6/6a/006_1.png/revision/latest?cb=20161031023319')
   img2 = loadImage('https://t5.rbxcdn.com/6e0b10b231a7b06ec4010bf1a3e2f73c')
   img3 = loadImage('https://pbs.twimg.com/media/DVMT-6OXcAE2rZY.jpg')
   Pixel_Font = loadFont('SHPinscher-Regular')
 //  img3.resize(width,height)
 //  background(img3)
   image(img3, -0550, -0200, 1280, 750)
}


let pokemon_1x = 700
let pokemon_2x = -400
let pokemon_1x_changer = -20
let pokemon_2x_changer = 20
let Remove = 'false'
let Subtraction = 0
let Supposed_to_be_value = 0
let crit = 0

function draw(){
  //  background(img3)
  //  noStroke()

//original background
   // fill(50)
   // rect(0,0,width,height)
//new image
    image(img3, -0550, -0200, 1280, 750)
//moving pokemon onto the screen
    if ( pokemon_2x < 300){
        pokemon_2x = pokemon_2x + 20

    }
    if ( pokemon_1x > -30){
        pokemon_1x = pokemon_1x - 20
    }
//defining pokemon
    image(img1, pokemon_2x, 100)
    image(img2, pokemon_1x, 200)
    //fill(255)
    stroke(25)
    fill(225)
//rectangles being defined
    strokeWeight(5)
    rect(25,450,550,140,10)
    stroke(50)
    fill(225)
    strokeWeight(5)
    rect(340,height/2,240,60, 5)
    rect(70, 100, 205, 50, 5)

//attack buttons
//litten attack box
    rect(95, 500, 60, 25, 5)
//flame attack box
    rect(215, 500, 65, 25, 5)
//roast attack box
    rect(95, 540, 65, 25, 5)
//flareblitz attack box
    rect(215, 540, 70, 25, 5)
//text
    fill(0)
    stroke(0)
    strokeWeight(0)
    textSize(30)
    //attacks
    text('~Attacks~', 120,480)
    textSize(20)
    text('Litten', 100, 520)
    text('Flame', 220, 520)
    text('Roast', 100, 560)
    textSize(15)
    text('Flareblitz', 220, 560)
    //pokemon names
    textSize(20)
    text('CHARIZARD', 75, 125)
    textSize(20)
    text('CHARMANDER', 345, 330)
    //pokemon levels
    textSize(20)
    text('LVL: 40', 200 , 125)
    textSize(20)
    text('LVL: 100', 495, 330)
    //hp removal script
    if(Remove == 'true'){
        //while(HP > Supposed_to_be_value){
//            crit = Math.floor(Math.random() * 101)
//            if(crit = 100){
//                Subtraction = Subtraction * 2
//            }
            HP--
        //}
        if(HP <= Supposed_to_be_value){
            HP = Supposed_to_be_value
        }
    }
    //pokemon health
    if(HP > 0){
        text("HP: " + HP, 200, 145)
    }
    if(HP <= 0){
        text("HP: " + 0, 200, 145)
    }
    if(You > 0){
        text("HP: " + You, 495, 350)
    }
    if(You <= 0){
        text("HP: " + 0, 495, 350)

    }
}
function mousePressed(){
    //Litten
    if(mouseX >= 95 && mouseX <= 155 && mouseY>=500 && mouseY <=525){
        //HP = HP - 100 <- Lined out and dated code
        //if(HP < 0){
          //  HP = HP + (100%HP)
        //}
        crit = Math.floor(Math.random() * 101)
        if(crit = 100){
            Subtraction = Subtraction * 2
        }
        Subtraction = 100
        Supposed_to_be_value = HP - Subtraction
        Remove = 'true'

    }
    //Flame
    if(mouseX >=215 && mouseX <= 270 && mouseY >= 500 && mouseY <= 525){
        //HP = HP - 1 <- Lined out and dated code
        crit = Math.floor(Math.random() * 101)
        if(crit = 100){
            Subtraction = Subtraction * 2
        }
        Subtraction = 1
        Supposed_to_be_value = HP - Subtraction
        Remove = 'true'

    }
    //Roast
    if(mouseX >= 95 && mouseX <=160 && mouseY >=540 && mouseY <= 565){
    //    RandomHpSubtractor = Math.floor(Math.random()*101)
    //    if(RandomHpSubtractor >50){
    //        RandomHpSubtractor = Math.floor(Math.random() * 101)
    //    }
    //    HP = HP - RandomHpSubtractor <- Lined out and dated code
    crit = Math.floor(Math.random() * 101)
    if(crit = 100){
        Subtraction = Subtraction * 2
    }

        Subtraction = Math.floor(Math.random()*101)
        if(Subtraction > 50){
            Subtraction = Math.floor(Math.random() * 101)
        }
        Supposed_to_be_value = HP - Subtraction
        Remove = 'true'

    }
    //Flareblitz
    if(mouseX >= 215 && mouseX <= 270 && mouseY >= 540 && mouseY <= 565){
     //   HP = HP - 5 <- Lined out and dated code
     crit = Math.floor(Math.random() * 101)
     if(crit = 100){
         Subtraction = Subtraction * 2
     }
     Subtraction = 5
     Supposed_to_be_value = HP - Subtraction
     Remove = 'true'
    }
}
