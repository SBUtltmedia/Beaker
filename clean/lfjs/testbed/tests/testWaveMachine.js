var  DEGTORAD =0.01745329251994329576923690;

function TestWaveMachine() {
    camera.position.y = 1;
    camera.position.z = 2.5;

    var bd = new b2BodyDef();
    var ground = world.CreateBody(bd);

    bd.type = b2_dynamicBody;
    bd.allowSleep = false;
    bd.position.Set(0, -0);
    var body2 = world.CreateBody(bd);
    
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
    
//    //Bottom
//    var b1 = new b2PolygonShape();
//    b1.SetAsBoxXYCenterAngle(2, 0.25, new b2Vec2(0, -1), 0);
//    body.CreateFixtureFromShape(b1, 5);
//    
//    //Right
//    var b2 = new b2PolygonShape();
//    b2.SetAsBoxXYCenterAngle(0.25, 0.75, new b2Vec2(2.5, -.74), -60*DEGTORAD);
//    body.CreateFixtureFromShape(b2, 5);
//    
//    var b3 = new b2PolygonShape();
//    b3.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(3, -.25), -35*DEGTORAD);
//    body.CreateFixtureFromShape(b3, 5);
//    
//    var b4 = new b2PolygonShape();
//    b4.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(3.20, .50), 0*DEGTORAD);
//    body.CreateFixtureFromShape(b4, 5);
//    
//    var b8 = new b2PolygonShape();
//    b8.SetAsBoxXYCenterAngle(0.25, 2.27, new b2Vec2(2.20, 2.5), 35*DEGTORAD);
//    body.CreateFixtureFromShape(b8, 5);
//    
//    var b10 = new b2PolygonShape();
//    b10.SetAsBoxXYCenterAngle(0.25, 1.25, new b2Vec2(0.947, 5.46), 0*DEGTORAD);
//    body.CreateFixtureFromShape(b10, 5);
//
//    //Left
//    var b5 = new b2PolygonShape();
//    b5.SetAsBoxXYCenterAngle(0.25, 0.75, new b2Vec2(-2.5, -.74), 60*DEGTORAD);
//    body.CreateFixtureFromShape(b5, 5);
//    
//    var b6 = new b2PolygonShape();
//    b6.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(-3, -.25), 35*DEGTORAD);
//    body.CreateFixtureFromShape(b6, 5);
//    
//    var b7 = new b2PolygonShape();
//    b7.SetAsBoxXYCenterAngle(0.25, 0.5, new b2Vec2(-3.20, .50), 0*DEGTORAD);
//    body.CreateFixtureFromShape(b7, 5);
//    
//    var b9 = new b2PolygonShape();
//    b9.SetAsBoxXYCenterAngle(0.25, 2.27, new b2Vec2(-2.20, 2.5), -35*DEGTORAD);
//    body.CreateFixtureFromShape(b9, 5);
//    
//    var b11 = new b2PolygonShape();
//    b11.SetAsBoxXYCenterAngle(0.25, 1.25, new b2Vec2(-0.947, 5.46), 0*DEGTORAD);
//    body.CreateFixtureFromShape(b11, 5);
    
    var jd = new b2RevoluteJointDef();
    jd.motorSpeed = 0.05 * Math.PI;
    jd.maxMotorTorque = 1e7;
    jd.enableMotor = true;
    this.joint = jd.InitializeAndCreate(ground, body2, new b2Vec2(0, 1));
    this.time = 0;

    // setup particles
    var psd = new b2ParticleSystemDef();
    psd.radius = 0.025;
    psd.dampingStrength = 0.2;

    var particleSystem = world.CreateParticleSystem(psd);
    var box = new b2PolygonShape();
    box.SetAsBoxXYCenterAngle(0.9, 0.9, new b2Vec2(0, 1.0), 0);

    var particleGroupDef = new b2ParticleGroupDef();
    particleGroupDef.shape = box;
    var particleGroup = particleSystem.CreateParticleGroup(particleGroupDef);
}

TestWaveMachine.prototype.Step = function() {
  world.Step(timeStep, velocityIterations, positionIterations);
  this.time += 1 / 60;
  this.joint.SetMotorSpeed(0.05 * Math.cos(this.time) * Math.PI);
}