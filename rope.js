class Rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;
		var options = {
			bodyA: body1,
			bodyB: body2,
			pointB: {
				x: this.pointA,
			y:this.pointB}
			
		}
	//create rope constraint here
		this.rope = Constraint.create(options)
		World.add(world,this.rope);
	}


    //create display() here 
	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		strokeWeight(2)
		var pAx = pointA.x;
		var pAy = pointA.y;
		var pBx = pointB.x + this.pointA;
		var pBy = pointB.y + this.pointB;
		
		line(pAx,pAy,pBx,pBy)
	}
}
