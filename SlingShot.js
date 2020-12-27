class SlingShot {
    constructor(bodyA, pointB){
        var options = {
        bodyA : bodyA,
        pointB : pointB,
        length : 10,
        stiffness : 0.05
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options)
    World.add(world, this.sling)
}    
    fly(){
        this.sling.bodyA = null;
    }

    display(){   
        if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position
    var B = this.pointB;
    strokeWeight(3)
    line (pointA.x, pointA.y, B.x, B.y)
    }
}
}