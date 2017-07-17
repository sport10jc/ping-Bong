var bottom
var top
var right
var left
var net
var paddle1
var paddle2
var paddleY1=400
var paddleY2=400
var ballX= 100
var ballY=100
var ballSpeedX=10
var ballSpeedY=10
var paddleX1 = 100
var paddleX2=1300
var player1=0
var player2=0
function setup(){
    createCanvas(1440,800)
}


function draw(){
    clear()
    background(99,99,99)
    
    noStroke()
    fill(209,209,209)
    background
   net= rect(700,20,20,775)
    fill(153,227,211)
top=rect(1,1,1400,30)
 bottom=    rect(10,785,1400,30)
 fill(178,250,156)
    left = rect(1400,1,30,815)
    right = rect(1,1,30,815)
    fill("black")
    fill(207,150,240)
    paddle1= rect(paddleX1,paddleY1,40,155,100)
    paddle2= rect(paddleX2,paddleY2,40,155,100)
   
    if (keyIsDown(UP_ARROW)){
     if(paddleY2>35){
            console.log("hit border")
            paddleY2+=0
        }
        else{
        paddleY2+=20;
        }
        
    paddleY2-=20;
    }
    else{ paddleY2+=0;
    }
    

    
    if (keyIsDown(DOWN_ARROW)){
    if (paddleY2>620){
            console.log("hit border")
        paddleY2+=0
        }
        else{
        paddleY2+=20;
        }
    }
    else{ paddleY2+=0;
    }
    if (keyIsDown(87)){
        if(paddleY1>35){
            console.log("hit border")
            paddleY1+=0
        }
        else{
        paddleY1+=20;
        }
        
    paddleY1-=20;
    }
    else{ paddleY1+=0;
    }
    
    if (keyIsDown(83)){
        if (paddleY1>620){
            console.log("hit border")
        paddleY1+=0
        }
        else{
        paddleY1+=20;
        }
    }
    else{ paddleY1+=0;
    }
  fill("purple")
  ellipse(ballX,ballY, 30, 30)
  ballX=ballX+ballSpeedX
  
 
  //player 1 point
  if(ballX>1390){
    ballSpeedX=ballSpeedX*-1
    player1=player1+1
    console.log(player1)
    
  }
  //player 2 point
  if (ballX<35){
    ballSpeedX=ballSpeedX*-1
    player2=player2+1
  }
  
  ballY=ballY+ballSpeedY
  if(ballY>770){
    ballSpeedY=ballSpeedY*-1
  }
  if (ballY<35){
    ballSpeedY=ballSpeedY*-1
  }  


if(ballX< paddleX1 +40 && ballY < paddleY1+120 && ballY>paddleY1){
    ballSpeedX = ballSpeedX*-1
}

if(ballX> paddleX2 && ballY <paddleY2+120 && ballY>paddleY2)

ballSpeedX = ballSpeedX*-1
textSize(32)
text("Player 1 Score",250,75)
text(player1,350,150)
text("Player 2 Score", 950,75)
text(player2,1050,150)
text("PLAYER 1",350,750)
text("PLAYER 2",950,750)
}
    
    
    
