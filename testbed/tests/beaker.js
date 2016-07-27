//Constants
var world = null;
var boxWorld = null;
var body = null;
var beaker2 = null;
var timeStep = 1.0 / 60.0;
var velocityIterations = 8;
var positionIterations = 3;
var DEGTORAD = 0.01745329251994329576923690;
var keyAng = 0;
var rotationSpeed = 1;

//Frame timing variables
var prevTime;
var curTime;
var framerate;
var targetFramerate = 30;
var optimizationCoefficient = 0.0;

var position;
var translateSpeed = 0.1;

$(function () {
    resizeWindow();
});

function render() {
    setTimeout(function() {
        curTime = Date.now();
        framerate = 1.0/((curTime-prevTime)/1000.0);
        if(framerate < targetFramerate){
            if(optimizationCoefficient <= 0.98){
                optimizationCoefficient += 0.01;
            }
        }
        else if (framerate > targetFramerate){
            if(optimizationCoefficient >= 0.01){
                optimizationCoefficient -= 0.01;
            }
        }
        
        // bring objects into world
        if (boxWorld.Step !== undefined) {
            boxWorld.Step();
        }
        prevTime = curTime;
        requestAnimationFrame(render);
    }, 1000/60);
};

function initWorld() {
    boxWorld = new TestWaveMachine();
    prevTime = Date.now();
    curTime = Date.now();
    render();
}

function TestWaveMachine() {
    var gravity = new b2Vec2(0, -100);
    world = new b2World(gravity);

    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    bd.type = b2_kinematicBody;
    bd.allowSleep = false;
    bd.position.Set(0, 1);
    body = world.CreateBody(bd);
    bd.position.Set(7.5, -11.5);
    body2 = world.CreateBody(bd);

    //Beaker 1
    //Bottom
    var b1 = new b2PolygonShape();
    b1.SetAsBoxXYCenterAngle(2, 0.50, new b2Vec2(0, -1.25), 0);
    body.CreateFixtureFromShape(b1, 5);
    
    //Right
    var b2 = new b2PolygonShape();
    b2.SetAsBoxXYCenterAngle(0.50, 0.75, new b2Vec2(2.65, -.89), -60*DEGTORAD);
    body.CreateFixtureFromShape(b2, 5);
    
    var b3 = new b2PolygonShape();
    b3.SetAsBoxXYCenterAngle(0.50, 0.5, new b2Vec2(3.2, -.45), -35*DEGTORAD);
    body.CreateFixtureFromShape(b3, 5);
    
    var b4 = new b2PolygonShape();
    b4.SetAsBoxXYCenterAngle(0.50, 0.5, new b2Vec2(3.45, .50), 0*DEGTORAD);
    body.CreateFixtureFromShape(b4, 5);
    
    var b8 = new b2PolygonShape();
    b8.SetAsBoxXYCenterAngle(0.50, 2.0, new b2Vec2(2.3, 2.55), 35*DEGTORAD);
    body.CreateFixtureFromShape(b8, 5);
    
    var b10 = new b2PolygonShape();
    b10.SetAsBoxXYCenterAngle(0.50, 0.6, new b2Vec2(1.099, 5.425), 0*DEGTORAD);
    body.CreateFixtureFromShape(b10, 5);

    var b12 = new b2PolygonShape();
    b12.SetAsBoxXYCenterAngle(0.50, 0.47, new b2Vec2(1.165, 4.44), 9*DEGTORAD);
    body.CreateFixtureFromShape(b12, 5);
    
    //Left
    var b5 = new b2PolygonShape();
    b5.SetAsBoxXYCenterAngle(0.50, 0.75, new b2Vec2(-2.65, -.89), 60*DEGTORAD);
    body.CreateFixtureFromShape(b5, 5);
    
    var b6 = new b2PolygonShape();
    b6.SetAsBoxXYCenterAngle(0.50, 0.5, new b2Vec2(-3.2, -.45), 35*DEGTORAD);
    body.CreateFixtureFromShape(b6, 5);
    
    var b7 = new b2PolygonShape();
    b7.SetAsBoxXYCenterAngle(0.50, 0.5, new b2Vec2(-3.45, .50), 0*DEGTORAD);
    body.CreateFixtureFromShape(b7, 5);
    
    var b9 = new b2PolygonShape();
    b9.SetAsBoxXYCenterAngle(0.50, 2.0, new b2Vec2(-2.3, 2.55), -35*DEGTORAD);
    body.CreateFixtureFromShape(b9, 5);
    
    var b11 = new b2PolygonShape();
    b11.SetAsBoxXYCenterAngle(0.50, 0.6, new b2Vec2(-1.099, 5.425), 0*DEGTORAD);
    body.CreateFixtureFromShape(b11, 5);
    
    var b13 = new b2PolygonShape();
    b13.SetAsBoxXYCenterAngle(0.50, 0.47, new b2Vec2(-1.165, 4.44), -9*DEGTORAD);
    body.CreateFixtureFromShape(b13, 5);
    
    //Beaker 2
    //Bottom
    var bb1 = new b2PolygonShape();
    bb1.SetAsBoxXYCenterAngle(2, 0.25, new b2Vec2(0, -1), 0);
    body2.CreateFixtureFromShape(bb1, 5);
    
    //Right
    var bb2 = new b2PolygonShape();
    bb2.SetAsBoxXYCenterAngle(0.25, 0.75, new b2Vec2(2.5, -.8), -75*DEGTORAD);
    body2.CreateFixtureFromShape(bb2, 5);
    
    var bb3 = new b2PolygonShape();
    bb3.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(3.1, -.25), -15*DEGTORAD);
    body2.CreateFixtureFromShape(bb3, 5);
    
    var bb4 = new b2PolygonShape();
    bb4.SetAsBoxXYCenterAngle(0.25, 3.3, new b2Vec2(3.20, 3.1), 0*DEGTORAD);
    body2.CreateFixtureFromShape(bb4, 5);
    
    var bb8 = new b2PolygonShape();
    bb8.SetAsBoxXYCenterAngle(0.10, 0.45, new b2Vec2(3.315, 6.679), -40*DEGTORAD);
    body2.CreateFixtureFromShape(bb8, 5);
    
    //Left
    var bb5 = new b2PolygonShape();
    bb5.SetAsBoxXYCenterAngle(0.25, 0.75, new b2Vec2(-2.5, -.865), 80*DEGTORAD);
    body2.CreateFixtureFromShape(bb5, 5);
    
    var bb6 = new b2PolygonShape();
    bb6.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(-3.1, -.25), 15*DEGTORAD);
    body2.CreateFixtureFromShape(bb6, 5);
    
    var bb7 = new b2PolygonShape();
    bb7.SetAsBoxXYCenterAngle(0.25, 3.3, new b2Vec2(-3.20, 3.1), 0*DEGTORAD);
    body2.CreateFixtureFromShape(bb7, 5);
    
    var bb9 = new b2PolygonShape();
    bb9.SetAsBoxXYCenterAngle(0.10, 0.45, new b2Vec2(-3.315, 6.679), 40*DEGTORAD);
    body2.CreateFixtureFromShape(bb9, 5);
    

    //body2.SetTransform((new b2Vec2(1.0, -1.0), 0));
    
//    var jd = new b2RevoluteJointDef();
//    //jd.motorSpeed = 0.05 * Math.PI;
//    jd.maxMotorTorque = 1000000;
//    jd.enableMotor = true;
//    jd.enableLimit = true;
//    jd.lowerAngle = -180 * DEGTORAD;
//    jd.upperAngle = 180 * DEGTORAD;
//    this.joint = jd.InitializeAndCreate(ground, body, new b2Vec2(0, 1));
//    jd.InitializeAndCreate(ground, body2, new b2Vec2(0, 1));
//    this.time = 0;

    // setup particles
    var psd = new b2ParticleSystemDef();
    psd.radius = 0.1; //0.100
    psd.dampingStrength = 0;
    //psd.flags = b2_viscousParticle;
    // psd.strength = 1;
    //psd.maxCount=100;
    //psd.density = 1;
    var particleSystem = world.CreateParticleSystem(psd);
    var box = new b2PolygonShape();
    var box2 = new b2PolygonShape();
    var boxHeight = 14;
    box.SetAsBoxXYCenterAngle(0.5, boxHeight, new b2Vec2(0, boxHeight), 0);
//  box2.SetAsBoxXYCenterAngle(0.6, boxHeight*3, new b2Vec2(body2.GetPosition().x,
//  boxHeight*3), 0);

    var particleGroupDef = new b2ParticleGroupDef();
    particleGroupDef.shape = box;
    var particleGroup = particleSystem.CreateParticleGroup(particleGroupDef);
    particleGroupDef.shape = box2;
    var particleGroup = particleSystem.CreateParticleGroup(particleGroupDef);
    
    var counter = world.particleSystems.length;
    while (counter--) {
        var particlePositions = world.particleSystems[counter].GetPositionBuffer();
        //console.log(particlePositions)
        for (i = 0; i < particlePositions.length; i = i + 2) {
        //console.log(particlePositions[i])
        if(parseFloat(particlePositions[i])>0){
           color=1; 
        } 
        else{ 
            color=2;
//            console.log("f");
        }
            var child = $('<div class="particle color1"  id="part' + i + '"></div>')
          //  var child = $('<div class="particle color1'+color+'"  id="part' + i + '"></div>')
            $('#particleHolder').append($(child))
        }
    }
}

$(document).keydown(function (e) {
    e.preventDefault(); // prevent the default action (scroll / move caret)
    
    switch (e.which) {
        case 37: // left
            optimizationCoefficient = 0.0;
            position = body.GetPosition();
            position.x -= translateSpeed;
            body.SetTransform(position, body.GetAngle());
            break;

        case 38: // up
            optimizationCoefficient = 0.0;
            position = body.GetPosition();
            position.y += translateSpeed;
            body.SetTransform(position, body.GetAngle());
            break;

        case 39: // right
            optimizationCoefficient = 0.0;
            position = body.GetPosition();
            position.x += translateSpeed;
            body.SetTransform(position, body.GetAngle());
            break;

        case 40: // down
            optimizationCoefficient = 0.0;
            position = body.GetPosition();
            position.y -= translateSpeed;
            body.SetTransform(position, body.GetAngle());
            break;

        case 65: // a
            keyAng += rotationSpeed;
            body.SetTransform(body.GetPosition(), keyAng * DEGTORAD);
            break;

        case 68: // d
            keyAng -= rotationSpeed;
            body.SetTransform(body.GetPosition(), keyAng * DEGTORAD);
            break;

        default:
            return; // exit this handler for other keys
    } 
});

TestWaveMachine.prototype.Step = function () {
    world.Step(timeStep, velocityIterations, positionIterations);
    this.time += timeStep;
    
//    body.SetTransform(body.GetPosition(), keyAng * DEGTORAD);
    //body2.SetTransform(body2.GetPosition(), 0);
    
    if (world !== null) {
        //        var counter = world.joints.length;
        //        while (counter--) {
        //
        //        }
        //        var counter = world.bodies.length;
        //        while (counter--) {
        //            //console.log(counter,world.bodies[counter])
        //        }
        var counter = world.particleSystems.length;
        while (counter--) {
            var particlePositions = world.particleSystems[counter].GetPositionBuffer();
            var scale = 16.25;
            var left;
            var top;
       
            var topScale=  -3/4 * scale;
            var i=particlePositions.length/2;
                  //  while (i-=2) {
            for (i = 0, len=particlePositions.length; i < len; i = i + 2) {
                if(Math.random() > optimizationCoefficient){
                    left = particlePositions[i] *scale + 48.5;
                    top = particlePositions[i+1] *topScale + 95;
                    $("#part" + i).css({
                        //"left": particlePositions[i] * 49.5 + 166,
                        //"top": particlePositions[i + 1] * -49.5 + 375
                        "left": left + "%",
                        "top": top + "%"
                    });
                }
            }
        }
    }
    $("#beakerImage").css("transform", "rotate(" + (-1 * keyAng) + "deg)");
    if(position){
        console.log(position, ((-position.y)+1)+"%");
        $("#beakerImage").css("left", (5 + position.x*4.875)+"%");
        $("#beakerImage").css("top", ((-position.y*6.1)+6.1)+"%");
    }
}

// Fix aspect ratio of the stage
$(window).resize(function () {
    resizeWindow();
});

// Resize the window
function resizeWindow() {
    // Get window width and height
    var w = $(window).width();
    var h = $(window).height();
    // If the aspect ratio is greater than or equal to 4:3, fix height and set width based on height
    if ((w / h) >= 4 / 3) {
        stageHeight = h;
        stageWidth = (4 / 3) * h;
        stageLeft = (w - stageWidth) / 2;
        stageTop = 0;
        coverTop = 0;
        coverBottom = 0;
        coverLeft = stageLeft;
        coverRight = stageLeft;
    }
    // If the aspect ratio is less than 4:3, fix width and set height based on width
    else {
        stageWidth = w;
        stageHeight = (3 / 4) * w;
        stageTop = (h - stageHeight) / 2;
        stageLeft = 0;
        coverTop = stageTop;
        coverBottom = stageTop;
        coverLeft = 0;
        coverRight = 0;
    }

    // Set "screen" object width and height to stageWidth and stageHeight, and center screen
    $(".screen").css({
        width: stageWidth + "px",
        height: stageHeight + "px",
        left: stageLeft + "px",
        top: stageTop + "px"
    });

    // Set "cover" object properties based on properties set above
    $("#coverTop").css({
        'width': w,
        'height': coverTop,
        'top': 0,
        'left': 0,
    });
    $("#coverBottom").css({
        'width': w,
        'height': coverBottom,
        'top': h - coverBottom,
        'left': 0,
    });
    $("#coverLeft").css({
        'width': coverLeft,
        'height': h,
        'top': 0,
        'left': 0,
    });
    $("#coverRight").css({
        'width': coverRight,
        'height': h,
        'top': 0,
        'left': w - coverRight,
    });

    // Resize text based on stage height
    // To give a class a certain font size, assign it the class "fs-X" where X is an integer between 1 and 1000. 1000 is the height of the screen.
    // New font resize loop
    for (var i = 1; i <= 1000; i++) {
        var s = stageHeight * (i / 1000);
        var c = ".fs-" + i;
        $(c).css({
            'font-size': s + "px"
        });
    }
}

//Old box
//    var b1 = new b2PolygonShape();
//    b1.SetAsBoxXYCenterAngle(0.25, 1, new b2Vec2(2, 0), 0);
//    body.CreateFixtureFromShape(b1, 5);
//
//    var b2 = new b2PolygonShape();
//    b2.SetAsBoxXYCenterAngle(0.25, 1, new b2Vec2(-2, 0), 0);
//    body.CreateFixtureFromShape(b2, 5);
//
//    top
//    var b3 = new b2PolygonShape();
//    b3.SetAsBoxXYCenterAngle(2, 0.25, new b2Vec2(0, 1), 0);
//    body.CreateFixtureFromShape(b3, 5);
//
//    var b4 = new b2PolygonShape();
//    b4.SetAsBoxXYCenterAngle(2, 0.25, new b2Vec2(0, -1), 0);
//    body.CreateFixtureFromShape(b4, 5);

//Old rotation
//    console.log(this.joint.GetJointAngle())
//    this.joint.lowerAngle=keyAng* DEGTORAD;
//    this.joint.upperAngle=keyAng* DEGTORAD;
//    
//    if(this.joint.GetJointAngle()>keyAng*DEGTORAD){
//        this.joint.SetMotorSpeed(keyAng*DEGTORAD);
//    } 
//    else if(this.joint.GetJointAngle()<keyAng*DEGTORAD){
//        this.joint.SetMotorSpeed(keyAng*DEGTORAD);
//    } else  this.joint.SetMotorSpeed(0);
