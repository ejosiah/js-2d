(function(app){

	app.graphics = window.graphics || {}

	var radians = Math.PI/180;
	var cos = Math.cos;
	var sin = Math.sin;

	window.toRadians = function(angle){
		return angle * radians;
	}

	var vec2 = function(x, y){
		this.x = x || 0;
		this.y = y || 0;
	}

	vec2.prototype.plus = function(v){
		this.x += v.x;
		this.y += v.y;
	}

	vec2.prototype.minus = function(v){
		this.x -= v.x;
		this.y -= v.y;
	}

	vec2.prototype.clear = function(){
		this.x = 0;
		this.y = 0;
	}

	vec2.prototype.constructor = vec2;

	vec2.prototype.length = function(){
		return Math.sqrt( this.x * this.x + this.y * this.y );
	}

	vec2.prototype.normalize = function(){
		var l = this.length();
		this.x = this.x/l;
		this.y = this.y/l
	}

	window.dot = function(a, b){
		return a.x * b.x + a.y * b.y;
	}

	var mat3 = function(x, y, z){
		x = x || [1, 0, 0];
		y = y || [0, 1, 0];
		z = z || [0, 0, 1];
		this.delegate = math.matrix([x, y, z]);
	}

	mat3.prototype.translate = function(d){
		this.delegate._data[0][2] = d[0];
		this.delegate._data[1][2] = d[1];
	}

	mat3.prototype.rotate = function(theta){
		var t = toRadians(theta);
		this.delegate._data[0][0] = cos(t);
		this.delegate._data[0][1] = -sin(t);
		this.delegate._data[1][0] = sin(t);
		this.delegate._data[1][1] = cos(t);
	}

	mat3.prototype.scala = function(s){
		this.delegate._data[0][0] *= s;
		this.delegate._data[1][1] *= s;
	}

	mat3.prototype.mutiply = function(other){
		if(!(other instanceof mat3) && !(other instanceof vec2)) throw "only mat3 and vec2s allowed"

		var data;
		if(other instanceof vec2)	{
			data = [other.x, other.y, 1];
		}else{
			data = other.delegate;
		}

		var res = math.multiply(this.delegate, data);


		if (other instanceof vec2){
		 	return new vec2(res._data[0], res._data[1])
		 }else{
			return new mat3(res._data[0], res._data[1], res._data[2]);
		}
	}

	mat3.prototype.toString = function(){
		return "" 
			+ this.delegate._data[0] + "\n"
			+ this.delegate._data[1] + "\n"
			+ this.delegate._data[2] + "\n";
	}

	app.vec2 = vec2;
	app.mat3 = mat3;

}(window));