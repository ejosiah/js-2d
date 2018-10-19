(function(app){

	var graphics = app.graphics;

	var self;

	var Engine = function(scene, fps){
		this.fps = fps || 30;
		this.scene = scene;
		this.timeStep = fps <= 0 ? 0 : 1000/fps;
		this.running = false
		self = this;
	}

	Engine.prototype.loop = function(){
		graphics.clear();
		self.scene.update(self.timeStep);
		self.scene.render();
		if(self.running) setTimeout(self.loop, self.timeStep);
	}

	Engine.prototype.run = function(){
		this.scene.init();
		this.running = true;
		this.loop();
	}

	Engine.prototype.stop = function(){
		setTimeout(() => { self.running = false}, 0);
	}

	app.Engine = Engine;

}(window));