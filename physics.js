(function(app){
	app.graphics = app.graphics || {};

	var particle = new function(p, v, a){
		this.position = p || new vec2();
		this.old_position = p || new vec2();
		this.velocity = v || new vec2()
		this.acceleration = a || new vec2()
		this.force = new vec2();
	}

	particle.prototype.addForce = function(f){
		this.force.plus(f);
	}

}(window));