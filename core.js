(function(app){
	app.graphics = app.graphics || {};

	app.graphics.world = {};

	app.graphics.world.bounds = {
		min : {x : -2, y : -2},
		max : {x : 2, y : 2}
	};

	app.graphics.world.setBounds = function(bounds){
		this.world.bounds = bounds;
	}

	function translate(min, max, a, b, x){
		return ((b - a) * (x - min))/(max - min) + a;
	}

	app.graphics.toScreenSpace = function(v){
		var canvas = this.canvas
		if(!canvas) throw "Illegal state: canvas not yet set";
		var w = canvas.width;
		var h = canvas.height;
		var minX = this.world.bounds.min.x;
		var maxX = this.world.bounds.max.x;
		var minY = this.world.bounds.min.y;
		var maxY = this.world.bounds.max.y;
		var sv = {};

		sv.x = translate(minX, maxX, 0, w, v.x);
		sv.y = translate(minY, maxY, 0, h, v.y);

		return sv;
	}

}(window));