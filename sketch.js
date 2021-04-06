const engine=Matter.Engine
const world=Matter.World
const bodies=Matter.Bodies

var en,w
var u,d=[]

function preload(){
    
}

function setup(){
    en=engine.create()
    w=en.world
    createCanvas(1500,800)


    u=new um()
}

function draw(){
    engine.update(en)
    background(0)
    u.display()
    
    if(frameCount%20===0){
        dro=new dr(random(0,1500),0) 
        d.push(dro)
    }
    for(var i=0;i<d.length;i++){
        d[i].display()
    }
}   

