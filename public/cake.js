


(function (window) {

	function Cake (){
		this.container = document.createElement("div");
		this.cake = document.createElement("div");
		this.icing = document.createElement("div");
		
		this.container.appendChild(this.icing);
		this.container.appendChild(this.cake);
		
	}
	Cake.prototype.mix = function(flavor, sugar, oil, egg, flour){
		console.log(this.container)
		if(egg && flour){
			console.log("mixing " + flavor + ', ' + sugar + ' sugar, ' + egg + ' egg, ' + flour + ' flour, ' +  oil  + ' oil');
			this.cake.className = 'cake-' + flavor; 
			this.container.className = 'mixing'; 
			setTimeout(function(){this.container.className = 'baking'; }.bind(this), 2000); 
			setTimeout(function(){this.container.className = 'cooling';}.bind(this), 4000); 
			setTimeout(function(){this.container.className = 'iced';}.bind(this), 6000); 
		}
		else if(!egg && !flour){
			console.log("mixing " + flavor + ', ' + sugar + ' powdered sugar, ' + oil + ' butter ');
			this.icing.className = 'icing-' + flavor;  
		}
		else{
			console.log('missing ingredients')
		}
	};
		
	Cake.prototype.cool = function(time){
		
	}
	Cake.prototype.icedCake = function(){
		return this.container;
	}
	window.Cake = Cake;
})(window);