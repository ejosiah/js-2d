(function(app, context){

	console.log("Intializing graphics context");

	app.graphics = app.graphics || {};

	var cos = Math.cos;
	var sin = Math.sin;

	app.graphics.PI = Math.PI;

	app.onload = function(e){
		var canvas = context.getElementById("canvas")
		var ctx = canvas.getContext('2d');

		app.graphics.context = ctx;
		app.graphics.canvas = canvas;
		app.graphics.canvas.center = {x : canvas.width * 0.5, y : canvas.height * 0.5};
		console.log("graphics context initialized");
	}

	app.graphics.drawPoint = function(p, size, color){
		color = color || "black";
		size = size || 2;
		var ctx = this.context;

		p = this.toScreenSpace(p);

		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.arc(p.x, p.y, size, 0, 2 * Math.PI);
		ctx.fill();
	}

	app.graphics.drawCircle = function(radius, center, color){
		color = color || "rgb(255, 0, 0)";
		var two_pi = 2 * this.PI;
		var ctx = this.context;
		var steps = 1000;
		var step = two_pi/steps;
		var r = radius;
		var c = this.canvas.center
/*
		ctx.beginPath();
		ctx.strokeStyle = color;*/

	/*	ctx.beginPath();
		ctx.arc(c.x, c.y, r, 0, 2 * Math.PI);
		ctx.stroke();*/
		/*
		for(var i = 0; i < steps; i += 2){
			var a = {x :  r * cos(step), y : r * sin(step)};
			step += step;
			var b = {x : r * cos(step), y : r * sin(step) };
			step += step;

			a = graphics.toScreenSpace(a);
			b = graphics.toScreenSpace(b);

			console.log({a : a, b : b});

			ctx.moveTo(a.x, a.y);
			ctx.lineTo(b.x, b.y);
			ctx.stroke();
		}*/

		ctx.beginPath();
		ctx.strokeStyle = color;

		for(var i = 0; i < steps; i += 1){
			var a = {x :  r * cos(step * i), y : r * sin(step * i)};

			console.log({a : a});

			a = this.toScreenSpace(a);

			if(i%2 == 0){
				ctx.moveTo(a.x, a.y);
			}else{
				ctx.lineTo(a.x, a.y);
				ctx.stroke();
			}

		//	this.drawPoint(a);
		}

	}



}(window, document));