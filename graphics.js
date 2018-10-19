(function(app, context){

	console.log("Intializing graphics context");

	app.graphics = app.graphics || {};

	app.graphics.clearColor = "white";
	app.graphics.readyFunc = [];

	app.graphics.onReady = function(f){
		this.readyFunc.push(f);
	}

	app.graphics.setClearColor = function(color){
		this.clearColor = color;
	}

	app.graphics.clear = function(){
		var ctx = this.context;
		ctx.fillStyle = this.clearColor;
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		ctx.fill();
	}

	var cos = Math.cos;
	var sin = Math.sin;

	app.graphics.PI = Math.PI;

	app.onload = function(e){
		var canvas = context.getElementById("canvas")
		var ctx = canvas.getContext('2d');
		var readyFuncs = app.graphics.readyFunc

		app.graphics.context = ctx;
		app.graphics.canvas = canvas;
		app.graphics.canvas.center = {x : canvas.width * 0.5, y : canvas.height * 0.5};

		for(var i = 0; i < readyFuncs.length; i++){
			readyFuncs[i]();
		}

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

	app.graphics.drawCircle = function(radius, center, fill, color){
		color = color || "black";
		fill = fill || true;
		center = center || {x : 0, y : 0};
		var two_pi = 2 * this.PI;
		var ctx = this.context;

		center = this.toScreenSpace(center);

		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.arc(center.x, center.y, radius, 0, two_pi);
		if(fill){
			ctx.fill();
		}else{
			ctx.stroke();
		}
	}

	app.graphics.drawLines = function(points, color){
		color = color || "Black";
		var ctx = this.context;
		ctx.strokeStyle = color;
		ctx.beginPath();
		for(var i = 0; i < points.length; i++){
			var p = this.toScreenSpace(points[i]);
			if(i%2 == 0){
				ctx.moveTo(p.x, p.y);
			}else{
				ctx.lineTo(p.x, p.y);
				ctx.stroke();
			}

		}
	}


}(window, document));