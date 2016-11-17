(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 2048,
	height: 1084,
	fps: 30,
	color: "#CCCCCC",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Ayuda Visual PLEGRIDY ipad 7_atlas_.png", id:"Ayuda Visual PLEGRIDY ipad 7_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Ayuda Visual PLEGRIDY ipad 7_atlas_", frames: [[0,0,837,1379],[839,0,169,257],[0,1640,1358,274],[0,1381,1516,257]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 7_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 7_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-200.8,-330.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.8,-330.9,401.8,661.9);


// stage content:
(lib.AyudaVisualPLEGRIDYipad7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_162 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(162).call(this.frame_162).wait(1));

	// texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYCSQgOgWAAgkIAAgFQAAgkAOgWQAOgUAVAAQAWAAAOAUQAOAWAAAkIAAAFQAAAkgOAWQgOAUgWAAQgVAAgOgUgAAoAqQgHAPAAAaIAAAFQAAAaAHAPQAHAOAMAAQAMAAAHgOQAIgPAAgaIAAgFQAAgagIgPQgHgOgMAAQgMAAgHAOgAhTCjICSlGIAWAAIiTFGgAhdgYQgPgWAAgkIAAgFQAAgkAPgWQANgUAWAAQAVAAAOAUQAOAWAAAkIAAAFQAAAkgOAWQgOAUgVAAQgWAAgNgUgAhNiAQgHAPAAAaIAAAFQAAAaAHAPQAHANAMAAQAMAAAHgNQAHgPAAgaIAAgFQAAgagHgPQgHgOgMAAQgMAAgHAOg");
	this.shape.setTransform(1441,257.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhxEMIAAhfQAhARAgAAQAiAAARgbQASgaAAgtIAAgFQAAhRg0AAQgTAAgTAIIgwgdIAPkMIDHAAIAABeIh+AAIgHBwQARgEATAAQAyAAAfAmQAlArAABWIAAAHQAABagsAzQgrAyhFAAQgpAAgigQg");
	this.shape_1.setTransform(1415,272.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYCSQgOgWAAgkIAAgFQAAgkAOgWQAOgUAVAAQAWAAANAUQAPAWAAAkIAAAFQAAAkgPAWQgNAUgWAAQgVAAgOgUgAAoAqQgHAPAAAaIAAAFQAAAaAHAPQAHAOAMAAQAMAAAHgOQAIgPAAgaIAAgFQAAgagIgPQgHgOgMAAQgMAAgHAOgAhUCjICTlGIAWAAIiTFGgAhdgYQgPgWAAgkIAAgFQAAgkAPgWQANgUAWAAQAVAAAOAUQAOAWAAAkIAAAFQAAAkgOAWQgOAUgVAAQgWAAgNgUgAhNiAQgHAPAAAaIAAAFQAAAaAHAPQAHANAMAAQAMAAAHgNQAHgPAAgaIAAgFQAAgagHgPQgHgOgMAAQgMAAgHAOg");
	this.shape_2.setTransform(909.4,257.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhxEbIAAhTIBejXQAUgwAJgcQAJgcAAgTQAAgWgOgNQgMgOgXAAQgiAAgmAYIAAhgQAugXAwAAQA1AAAiAgQAjAhAAA9IAAADQAAAfgKAhQgJAfgaA6IhOC5IB4AAIAABig");
	this.shape_3.setTransform(883.9,272.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHEaIAAhoIiXAAIAAhLICTmAIBgAAIAAF3IAuAAIAABUIguAAIAABogAhABeIBHAAIAAjMg");
	this.shape_4.setTransform(854.5,272.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZCSQgOgWgBgkIAAgFQABgkAOgWQANgUAWAAQAVAAAOAUQAOAWgBAkIAAAFQABAkgOAWQgOAUgVAAQgWAAgNgUgAApAqQgIAPAAAaIAAAFQAAAaAIAPQAGAOANAAQALAAAIgOQAGgPABgaIAAgFQgBgagGgPQgIgOgLAAQgNAAgGAOgAhTCjICSlGIAWAAIiTFGgAhdgYQgOgWAAgkIAAgFQAAgkAOgWQANgUAWAAQAVAAANAUQAPAWAAAkIAAAFQAAAkgPAWQgNAUgVAAQgWAAgNgUgAhNiAQgIAPAAAaIAAAFQAAAaAIAPQAHANAMAAQAMAAAHgNQAHgPAAgaIAAgFQAAgagHgPQgHgOgMAAQgMAAgHAOg");
	this.shape_5.setTransform(179.1,257.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah1EMIAAhdQATAIAOAEQARAEAUAAQAfAAASgVQATgXAAgkIAAgGQAAhRhggGIAAg/IBaiOIh9AAIAAhgIDhAAIAABYIhfCSQAvAPAYAhQAbAjAAA/IAAAJQAABRgsAxQgqAwhBAAQgwAAgkgQg");
	this.shape_6.setTransform(152.7,272.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhxEMIAAhfQAhARAgAAQAiAAARgbQASgaAAgtIAAgFQAAhRg0AAQgTAAgTAIIgwgdIAQkMIDGAAIAABeIh+AAIgHBwQARgEATAAQAyAAAfAmQAlArAABWIAAAHQAABagsAzQgrAyhFAAQgpAAgigQg");
	this.shape_7.setTransform(126,272.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgpBPIAAgVQAVALARgBQAJAAAHgFQAHgGAAgKIAAgBQAAgPgagYQgTgPgIgMQgIgMAAgNIAAgBQAAgSAOgLQAMgLASAAQARAAAOAFIAAAVQgPgHgQAAQgJAAgGAGQgHAFABAJIAAABQgBAIAGAIQAGAIAOAOQAUAPAHAMQAIAMAAAOIAAABQAAATgOALQgNALgSAAQgSAAgUgIg");
	this.shape_8.setTransform(1454.8,431.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgYQAPgVAUAAQAXAAANAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAOAAATgLIACAUQgTAKgTAAQgYAAgRgVgAgSg1QgJARgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_9.setTransform(1443.1,431.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgJBVIgsipIAWAAIAfCHIAgiHIAWAAIgsCpg");
	this.shape_10.setTransform(1431,431.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AglBIQgLgOAAgXIAAgDQAAgZAMgNQANgOAWAAQAMgBAQAHIAAgTQAAgigfAAQgSAAgQAHIAAgTQAQgHAVAAQAWAAAOANQAOANAAAZIAAB4IgWAAIAAgYQgMAagWAAQgSAAgMgPgAgTAFQgHAJAAARIAAADQAAARAGAJQAHAKAMAAQALAAAJgLQAIgLAAgOIAAgiQgNgDgNAAQgMAAgIAIg");
	this.shape_11.setTransform(1418.4,431.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgeBWIAAipIAWAAIAAAYQALgcAcACIAAAXIgBAAQgSAAgKAKQgKALAAAVIAABqg");
	this.shape_12.setTransform(1409.1,431.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgsBlIAAgTQAVAHATAAQAiAAAAggIAAgiQgNAggWAAQgUAAgNgTQgOgWAAglIAAgDQAAgmAOgXQANgUAUABQAWgBANAhIAAgeIAXAAIAAChQAAAyg4ABQgUgBgVgGgAgVhIQgJARAAAeIAAABQAAAbAJASQAJAQAMAAQAMAAAJgQQAKgSAAgaIAAgCQAAgdgKgRQgJgRgMAAQgMAAgJAQg");
	this.shape_13.setTransform(1396.9,433.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgpBPIAAgUQAWAJAQABQAJgBAHgFQAHgGAAgLIAAAAQAAgQgagXQgTgPgIgLQgIgNAAgNIAAgBQAAgSAOgMQAMgKASAAQARAAAOAGIAAAUQgPgIgQAAQgJAAgGAGQgHAGABAJIAAABQgBAHAGAIQAFAIAPAPQAUAPAHAMQAIANAAANIAAAAQAAATgOAMQgNALgSAAQgSAAgUgIg");
	this.shape_14.setTransform(1454.8,392.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgXQAPgXAUAAQAXAAANAXQAOAWAAAoIAAAKIhPAAQABAeAMAPQAMAQAPAAQAOAAATgMIACAUQgTALgTAAQgYAAgRgWgAgSg1QgJARgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_15.setTransform(1443.1,392.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_16.setTransform(1433.6,389.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AglBJQgLgPAAgXIAAgDQAAgZAMgNQANgPAWAAQAMABAQAGIAAgSQAAgjgfAAQgSAAgQAIIAAgTQAQgIAUAAQAXAAAOANQAOAOAAAZIAAB2IgWAAIAAgXQgMAagWAAQgSAAgMgOgAgTAEQgHAKAAAQIAAAEQAAAQAGAJQAHAKAMAAQALAAAJgLQAIgKAAgPIAAggQgOgFgMABQgMgBgIAIg");
	this.shape_17.setTransform(1423.8,392.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("Ag0BrIAAjSIAWAAIAAAdQAOggAWAAQAUAAANAUQAOAYAAAoIAAAIQAAAngOAWQgNAVgUAAQgWAAgOggIAABHgAgVhGQgKASAAAeIAAAIQAAAcAKASQAKASALgBQANABAIgSQAJgSAAgcIAAgIQAAgegJgSQgIgSgNABQgLgBgKASg");
	this.shape_18.setTransform(1411.2,394.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgKBxIAAioIAVAAIAACogAgKhWIAAgaIAVAAIAAAag");
	this.shape_19.setTransform(1400.8,389.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgeBWIAAioIAXAAIAAAXQAJgbAcACIAAAXIAAAAQgSAAgKAKQgJALAAAUIAABqg");
	this.shape_20.setTransform(1393.8,392.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgsBlIAAgUQAXAIARAAQAiAAAAggIAAgiQgNAhgXgBQgTABgNgVQgOgVAAgmIAAgCQAAgmAOgXQANgUATAAQAXAAANAhIAAgdIAXAAIAACgQAAAyg4AAQgUAAgVgGgAgVhIQgJASAAAcIAAACQAAAcAJARQAJAPAMAAQALAAAKgPQAKgSAAgbIAAgCQAAgcgKgSQgKgQgLAAQgMAAgJAQg");
	this.shape_21.setTransform(1381.6,394.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWgBQAXABAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXABQgWgBgPgWgAgWgyQgJASAAAfIAAADQAAAfAJASQAJASANAAQANAAAJgSQAKgSAAgfIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_22.setTransform(1368.3,392.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgmBeQgOgXAAgoIAAgIQAAgnAOgWQANgVATAAQAXAAANAgIAAhXIAXAAIAADiIgXAAIAAgeQgNAhgXAAQgTAAgNgVgAgVgYQgJASAAAdIAAAHQAAAfAJASQAIARANAAQAMAAAJgRQAKgSAAgeIAAgJQAAgcgKgSQgJgRgMAAQgNAAgIARg");
	this.shape_23.setTransform(1354.4,389.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgmBJQgLgOAAgYIAAh4IAWAAIAAB0QAAAlAbAAQAKAAAJgKQAIgLAAgSIAAhyIAXAAIAACoIgXAAIAAgYQgMAbgXAAQgTAAgLgNg");
	this.shape_24.setTransform(1340.9,392.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgpAQgXQAOgXAVAAQAWAAAOAXQAOAWAAAoIAAAKIhPAAQABAeAMAPQAMAQAPAAQAOAAATgMIACAUQgTALgTAAQgYAAgQgWgAgTg1QgJARAAAeIA6AAQAAgcgIgRQgIgRgNAAQgMAAgIAPg");
	this.shape_25.setTransform(1327.7,392.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgoBPIAAgUQAVAJAQABQAIgBAIgFQAGgGABgLIAAAAQAAgQgZgXQgUgPgIgLQgIgNAAgNIAAgBQAAgSANgMQANgKASAAQARAAANAGIAAAUQgPgIgPAAQgJAAgGAGQgHAGAAAJIAAABQAAAHAGAIQAFAIAPAPQATAQAIALQAIANAAANIAAAAQAAATgOAMQgNALgSAAQgTAAgSgIg");
	this.shape_26.setTransform(1316.2,392.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("Ag0BrIAAjSIAWAAIAAAdQAOggAWAAQAUAAANAUQAOAYAAAoIAAAIQAAAngOAWQgNAVgUAAQgWAAgOggIAABHgAgUhGQgKASAAAeIAAAIQAAAcAKASQAJASALgBQANABAJgSQAIgSAAgcIAAgIQAAgegIgSQgJgSgNABQgLgBgJASg");
	this.shape_27.setTransform(1304.4,394.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgpBPIAAgVQAWALAQgBQAJABAHgHQAHgGAAgJIAAgBQAAgPgZgYQgUgPgIgMQgIgMAAgOIAAAAQAAgSANgLQANgLARAAQASAAANAFIAAAVQgPgHgQAAQgIgBgHAGQgGAGAAAJIAAAAQAAAJAGAIQAGAHAOAPQATAPAIAMQAIANAAANIAAABQAAASgOAMQgOALgRAAQgTAAgTgIg");
	this.shape_28.setTransform(1457.7,356.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AglBIQgLgOAAgXIAAgDQAAgaAMgMQANgOAWAAQAOgBAOAHIAAgTQAAgigfAAQgSAAgQAHIAAgTQARgHATAAQAXAAAOANQAOANAAAZIAAB3IgWAAIAAgXQgMAagWAAQgSAAgMgPgAgTAFQgIAJAAAQIAAAEQAAAQAHAKQAHAJAMABQALgBAJgKQAIgLAAgPIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_29.setTransform(1445.8,356.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("ABBBWIAAh1QAAglgZAAQgNAAgIALQgJALAAARIAABzIgUAAIAAh1QAAglgZAAQgNAAgIALQgIALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQAZAAAJAaQAOgaAZAAQATAAALANQAMANAAAZIAAB4g");
	this.shape_30.setTransform(1429.3,356.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAXgXgBQgWABgPgXgAgWgyQgJASAAAfIAAADQAAAeAJATQAJASANAAQANAAAJgSQAKgTAAgeIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_31.setTransform(1412,356.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgSIAQAAIAAguIAUAAIAAAuIAdAAIAAASIgdAAIAAB2QABAQARAAQAGAAAFgCIAAASQgIADgIAAQghAAAAgfg");
	this.shape_32.setTransform(1401.2,354.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AAbBWIAAh1QAAglgaAAQgLAAgIALQgJALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQATAAALAOQALANAAAYIAAB4g");
	this.shape_33.setTransform(1390.3,356.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgXB2IAAipIAXAAIAACpgAgXhHIAZguIAWAKIggAkg");
	this.shape_34.setTransform(1381.5,353.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgvBoIAAgXQAZAOARAAQANAAAIgIQAJgIAAgNIAAgBQAAgMgGgLQgHgMgRgXQgZgbgIgNQgJgPAAgQIAAgBQAAgWAPgOQAPgNAUAAQAVAAARAJIAAAXQgUgMgQAAQgLAAgJAIQgJAHAAANIAAABQAAALAHALQAGAKASAWQAYAZAIAQQAJAQAAASIAAABQAAAWgPAOQgPAOgWAAQgUAAgXgLg");
	this.shape_35.setTransform(1371.1,353.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgpBPIAAgUQAVAJARABQAJgBAHgGQAHgFAAgLIAAAAQAAgPgagYQgTgPgIgLQgIgNAAgNIAAgBQAAgSAOgMQAMgKASAAQARAAAOAGIAAAUQgPgHgQAAQgJAAgGAFQgHAGAAAJIAAABQAAAIAGAHQAGAIAOAPQAUAQAHALQAIANAAANIAAAAQAAATgOAMQgNALgSAAQgSAAgUgIg");
	this.shape_36.setTransform(1015.1,395.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgWgyQgJASAAAfIAAADQAAAeAJATQAJASANAAQANAAAJgSQAKgSAAgfIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_37.setTransform(1003.3,395.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgmBeQgOgWAAgpIAAgIQAAgnAOgWQANgVAUAAQAWAAANAgIAAhXIAXAAIAADiIgXAAIAAgeQgNAhgWAAQgUAAgNgVgAgVgYQgJASAAAdIAAAHQAAAfAJASQAJARAMAAQAMAAAJgRQAKgSAAgeIAAgJQAAgbgKgTQgJgRgMAAQgMAAgJARg");
	this.shape_38.setTransform(989.4,392.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AglBJQgLgPAAgXIAAgDQAAgZAMgNQANgPAWAAQAMABAQAGIAAgSQAAgjgfAAQgRAAgRAIIAAgTQARgIAUAAQAXAAANANQAOAOAAAZIAAB2IgWAAIAAgXQgMAagWAAQgSAAgMgOgAgTAEQgHAKAAARIAAADQAAAQAHAKQAGAKAMAAQALAAAJgLQAIgLAAgPIAAggQgNgFgNAAQgMAAgIAIg");
	this.shape_39.setTransform(976,395.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgeBWIAAipIAWAAIAAAYQALgcAcACIAAAXIgBAAQgSAAgKAKQgKALAAAVIAABqg");
	this.shape_40.setTransform(966.8,395.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgpAQgYQAPgVAUAAQAXAAANAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAOAAATgLIACAUQgTAKgTAAQgYAAgQgVgAgTg1QgIARgBAeIA6AAQAAgcgJgRQgIgRgMAAQgLAAgJAPg");
	this.shape_41.setTransform(955.4,395.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgmBeQgOgWAAgpIAAgIQAAgnAOgWQANgVAUAAQAWAAANAgIAAhXIAXAAIAADiIgXAAIAAgeQgNAhgWAAQgUAAgNgVgAgVgYQgJASAAAdIAAAHQAAAfAJASQAJARAMAAQAMAAAJgRQAKgSAAgeIAAgJQAAgbgKgTQgJgRgMAAQgMAAgJARg");
	this.shape_42.setTransform(941.8,392.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgWgyQgJASAAAfIAAADQAAAfAJASQAKASAMAAQAOAAAIgSQAKgTAAgeIAAgDQAAgfgKgSQgIgSgOAAQgMAAgKASg");
	this.shape_43.setTransform(928.5,395.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("ABBBWIAAh1QAAglgZAAQgNAAgIALQgIALAAARIAABzIgUAAIAAh1QAAgSgHgJQgHgKgMAAQgMAAgIALQgJALAAARIAABzIgWAAIAAioIAWAAIAAAXQANgaAXAAQAYAAAKAaQAOgaAaAAQASAAALANQAMANAAAZIAAB4g");
	this.shape_44.setTransform(911.2,395.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgkAJIAAgSIBJAAIAAASg");
	this.shape_45.setTransform(889.2,394.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgoBPIAAgUQATAJASABQAJgBAHgGQAHgFAAgLIAAAAQAAgPgZgYQgUgPgIgLQgIgNAAgNIAAgBQAAgSANgMQANgKASAAQARAAANAGIAAAUQgOgHgQAAQgJAAgGAFQgHAGAAAJIAAABQAAAIAGAHQAGAIAOAPQATAQAIALQAIANAAANIAAAAQAAATgOAMQgOALgRAAQgTAAgSgIg");
	this.shape_46.setTransform(872.6,395.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgYQAOgVAVAAQAWAAAOAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAOAAATgLIACAUQgTAKgTAAQgYAAgRgVgAgSg1QgJARgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_47.setTransform(861,395.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgJBVIgsipIAWAAIAfCHIAgiHIAWAAIgsCpg");
	this.shape_48.setTransform(848.8,395.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgYQAOgVAVAAQAWAAAOAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAOAAATgLIACAUQgTAKgTAAQgYAAgRgVgAgSg1QgJARgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_49.setTransform(836.5,395.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_50.setTransform(827,392.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgoBPIAAgVQAVALAQgBQAIABAHgHQAIgGAAgJIAAgBQAAgPgZgYQgUgPgIgMQgIgMAAgOIAAAAQAAgSANgLQANgLASAAQARAAANAFIAAAVQgPgHgPAAQgJgBgHAGQgGAGAAAJIAAAAQAAAJAGAIQAGAHAOAPQATAPAIAMQAIANAAANIAAABQAAASgOAMQgOALgRAAQgTAAgSgIg");
	this.shape_51.setTransform(1085.5,356.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgXQAOgWAVAAQAWAAAOAWQAOAWAAAoIAAALIhPAAQABAdAMAQQALAOAQAAQAPAAASgKIACATQgSAKgUAAQgYAAgRgVgAgTg0QgJAQAAAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgJAQg");
	this.shape_52.setTransform(1073.9,356.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgKByIAAjiIAVAAIAADig");
	this.shape_53.setTransform(1064.3,353.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AglBIQgLgOAAgXIAAgDQAAgZAMgNQANgOAWAAQAOgBAOAHIAAgTQAAgigfAAQgSAAgQAHIAAgTQARgHAUAAQAWAAAOANQAOANAAAZIAAB3IgWAAIAAgXQgMAagWAAQgSAAgMgPgAgTAFQgHAJAAAQIAAAEQAAAQAGAKQAHAJAMABQALgBAJgKQAIgLAAgPIAAghQgNgDgNgBQgMAAgIAJg");
	this.shape_54.setTransform(1054.5,356.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("Ag0BrIAAjTIAWAAIAAAfQAOghAWAAQAUAAANAUQAOAXAAAoIAAAJQAAAmgOAXQgNAVgUAAQgWAAgOggIAABHgAgUhHQgKASAAAeIAAAJQAAAcAKATQAJARALAAQANAAAJgRQAIgTAAgdIAAgGQAAgggIgSQgJgQgNgBQgLABgJAQg");
	this.shape_55.setTransform(1041.9,358.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AgJByIAAipIAUAAIAACpgAgKhWIAAgaIAVAAIAAAag");
	this.shape_56.setTransform(1031.5,353.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgeBWIAAipIAWAAIAAAYQALgbAcACIAAAWIgBAAQgSAAgKALQgKALAAAUIAABqg");
	this.shape_57.setTransform(1024.5,356.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgsBlIAAgUQAWAIASAAQAiAAAAghIAAghQgNAggWABQgUgBgNgTQgOgWAAglIAAgDQAAgnAOgVQANgVAUABQAWAAANAfIAAgdIAXAAIAAChQAAAyg4ABQgUAAgVgHgAgVhIQgJASAAAdIAAACQAAAbAJARQAJAPAMABQAMgBAJgPQAKgSAAgaIAAgCQAAgdgKgRQgJgRgMAAQgMAAgJAQg");
	this.shape_58.setTransform(1012.3,358.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAXgXgBQgWABgPgXgAgWgyQgJASAAAfIAAADQAAAeAJATQAKASAMAAQANAAAKgSQAJgTAAgeIAAgDQAAgfgJgSQgKgSgNAAQgMAAgKASg");
	this.shape_59.setTransform(999,356.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgmBeQgOgWAAgpIAAgJQAAgmAOgWQANgVAUAAQAVAAAPAgIAAhXIAWAAIAADiIgWAAIAAgeQgPAhgVAAQgUAAgNgVgAgVgYQgJASAAAeIAAAGQAAAfAJATQAIARANAAQAMAAAJgRQAKgTAAgeIAAgJQAAgcgKgSQgJgQgMgBQgNABgIAQg");
	this.shape_60.setTransform(985.1,353.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgmBJQgLgOAAgYIAAh4IAWAAIAAB0QAAASAHAKQAHAKANAAQALAAAIgLQAJgLAAgRIAAhzIAWAAIAACoIgWAAIAAgXQgNAagXAAQgTAAgLgNg");
	this.shape_61.setTransform(971.5,356.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgXQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAQQALAOAQAAQAPAAASgKIACATQgSAKgUAAQgYAAgRgVgAgSg0QgJAQgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAQg");
	this.shape_62.setTransform(958.4,356.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgpBPIAAgVQAXALAPgBQAJABAHgHQAHgGAAgJIAAgBQAAgPgagYQgTgPgIgMQgIgMAAgOIAAAAQAAgSAOgLQAMgLASAAQARAAAOAFIAAAVQgQgHgPAAQgJgBgGAGQgHAGAAAJIAAAAQAAAJAGAIQAFAHAPAPQATAPAIAMQAIANAAANIAAABQAAASgOAMQgNALgSAAQgSAAgUgIg");
	this.shape_63.setTransform(946.9,356.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("Ag0BrIAAjTIAWAAIAAAfQAOghAWAAQAUAAANAUQAOAXAAAoIAAAJQAAAmgOAXQgNAVgUAAQgWAAgOggIAABHgAgVhHQgKATAAAdIAAAJQAAAcAKATQAKARALAAQANAAAJgRQAIgTAAgdIAAgGQAAgggIgSQgJgQgNgBQgLABgKAQg");
	this.shape_64.setTransform(935.1,358.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgpBPIAAgVQAXALAPgBQAJABAHgHQAHgGAAgJIAAgBQAAgPgagYQgTgPgIgMQgIgMAAgOIAAAAQAAgSAOgLQAMgLASAAQARAAAOAFIAAAVQgQgHgPAAQgJgBgGAGQgHAGAAAJIAAAAQAAAJAGAIQAGAHAOAPQATAPAIAMQAIANAAANIAAABQAAASgOAMQgNALgSAAQgSAAgUgIg");
	this.shape_65.setTransform(916.6,356.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AglBIQgLgOAAgXIAAgDQAAgZAMgNQANgOAWAAQAOgBAOAHIAAgTQAAgigfAAQgSAAgQAHIAAgTQARgHAUAAQAWAAAOANQAOANAAAZIAAB3IgWAAIAAgXQgMAagWAAQgSAAgMgPgAgTAFQgHAJAAAQIAAAEQAAAQAGAKQAHAJAMABQALgBAJgKQAIgLAAgPIAAghQgNgDgNgBQgMAAgIAJg");
	this.shape_66.setTransform(904.7,356.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("ABBBWIAAh1QAAglgZAAQgNAAgIALQgIALAAARIAABzIgUAAIAAh1QAAgSgHgJQgHgKgMAAQgMAAgIALQgJALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQAZAAAJAaQAOgaAaAAQASAAAMANQALANAAAZIAAB4g");
	this.shape_67.setTransform(888.1,356.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAXgXgBQgWABgPgXgAgWgyQgJASAAAfIAAADQAAAeAJATQAJASANAAQANAAAJgSQAKgTAAgeIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_68.setTransform(870.8,356.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgSIAQAAIAAguIAUAAIAAAuIAcAAIAAASIgcAAIAAB2QAAAQASAAIALgCIAAASQgJADgHAAQghAAAAgfg");
	this.shape_69.setTransform(860.1,354.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AAcBWIAAh1QAAglgbAAQgKAAgJALQgJALAAARIAABzIgWAAIAAipIAWAAIAAAYQAOgaAWAAQATAAALAOQALANAAAYIAAB4g");
	this.shape_70.setTransform(849.2,356.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgXB2IAAipIAXAAIAACpgAgXhHIAZguIAWAKIggAkg");
	this.shape_71.setTransform(840.4,353.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgvBoIAAgXQAZAOARAAQAMAAAJgIQAJgIAAgNIAAgBQAAgMgGgLQgHgMgRgXQgZgbgIgNQgJgPAAgQIAAgBQAAgWAPgOQAPgNAUAAQAVAAARAJIAAAXQgUgMgRAAQgLAAgIAIQgIAIAAAMIAAABQAAALAGALQAHAKARAWQAYAZAIAQQAJAQAAASIAAABQAAAWgQAOQgOAOgWAAQgUAAgXgLg");
	this.shape_72.setTransform(830,353.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AgoBPIAAgUQAUAJARABQAJgBAHgGQAHgFAAgLIAAAAQAAgPgagYQgTgPgIgLQgIgNAAgNIAAgBQAAgSAOgMQANgKARAAQARAAAOAGIAAAUQgPgHgQAAQgIAAgHAFQgGAGgBAJIAAABQABAIAFAHQAGAIAOAPQATAQAIALQAIANAAANIAAAAQAAATgOAMQgNALgRAAQgUAAgSgIg");
	this.shape_73.setTransform(252.7,395.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgpAQgYQAOgVAVAAQAXAAANAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAPAAASgLIACAUQgTAKgTAAQgYAAgQgVgAgTg1QgJARAAAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgJAPg");
	this.shape_74.setTransform(241.1,395.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_75.setTransform(231.5,392.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AglBJQgLgPAAgXIAAgDQAAgZAMgNQANgPAWAAQAMABAQAGIAAgSQAAgjgfAAQgSAAgQAIIAAgTQAQgIAVAAQAWAAAOANQAOAOAAAZIAAB2IgWAAIAAgXQgMAagWAAQgSAAgMgOgAgTAEQgHAKAAARIAAADQAAAQAGAKQAHAKAMAAQALAAAJgLQAIgLAAgPIAAggQgOgFgMAAQgMAAgIAIg");
	this.shape_76.setTransform(221.7,395.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("Ag0BrIAAjSIAWAAIAAAdQAOggAWAAQAUAAANAUQAOAXAAApIAAAIQAAAmgOAXQgNAVgUAAQgWAAgOggIAABHgAgVhHQgKATAAAdIAAAJQAAAcAKASQAKARALAAQANAAAJgRQAIgSAAgdIAAgHQAAgfgIgSQgJgRgNAAQgLAAgKARg");
	this.shape_77.setTransform(209.1,397.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AgKBxIAAioIAVAAIAACogAgKhWIAAgaIAVAAIAAAag");
	this.shape_78.setTransform(198.7,392.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AgdBWIAAipIAWAAIAAAYQAJgcAcACIAAAXIAAAAQgRAAgLAKQgKALABAVIAABqg");
	this.shape_79.setTransform(191.7,395.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AgsBlIAAgUQAVAIATAAQAiAAAAggIAAgiQgNAhgXgBQgTABgNgVQgOgVAAgmIAAgCQAAgmAOgXQANgTATgBQAXAAANAhIAAgdIAXAAIAACgQAAAzg4gBQgUAAgVgGgAgVhIQgJASAAAcIAAACQAAAcAJARQAJAPAMAAQAMAAAJgPQAKgSAAgbIAAgCQAAgcgKgSQgJgQgMAAQgMAAgJAQg");
	this.shape_80.setTransform(179.5,397.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgWgyQgJASAAAfIAAADQAAAeAJATQAJASANAAQANAAAJgSQAKgSAAgfIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_81.setTransform(166.2,395.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgmBeQgOgWAAgpIAAgIQAAgnAOgWQANgVAUAAQAWAAANAgIAAhXIAXAAIAADiIgXAAIAAgeQgNAhgWAAQgUAAgNgVgAgVgYQgJASAAAdIAAAHQAAAfAJASQAJARAMAAQAMAAAJgRQAKgSAAgeIAAgJQAAgbgKgTQgJgRgMAAQgMAAgJARg");
	this.shape_82.setTransform(152.3,392.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgmBJQgLgOAAgYIAAh4IAWAAIAAB0QAAAlAbAAQAKAAAJgKQAJgLAAgRIAAhzIAWAAIAACoIgWAAIAAgYQgNAbgXAAQgTAAgLgNg");
	this.shape_83.setTransform(138.7,395.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgYQAPgVAUAAQAXAAANAVQAOAXAAAnIAAALIhPAAQABAeAMAQQALAOAQAAQAOAAATgLIACAUQgTAKgTAAQgYAAgRgVgAgSg1QgJARgBAeIA6AAQAAgcgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_84.setTransform(125.5,395.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgoBPIAAgUQATAJASABQAJgBAHgGQAHgFAAgLIAAAAQAAgPgagYQgTgPgIgLQgIgNAAgNIAAgBQAAgSAOgMQANgKARAAQARAAAOAGIAAAUQgPgHgQAAQgIAAgHAFQgGAGgBAJIAAABQABAIAFAHQAGAIAOAPQATAQAIALQAIANAAANIAAAAQAAATgOAMQgNALgRAAQgUAAgSgIg");
	this.shape_85.setTransform(114.1,395.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("Ag0BrIAAjSIAXAAIAAAdQANggAWAAQAUAAANAUQAOAXAAApIAAAIQAAAmgOAXQgNAVgUAAQgWAAgNggIAABHgAgUhHQgKASAAAeIAAAJQAAAcAKASQAIARAMAAQAOAAAIgRQAIgSABgdIAAgHQgBgfgIgSQgIgRgOAAQgMAAgIARg");
	this.shape_86.setTransform(102.3,397.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AgoBPIAAgVQAVALAQgBQAJABAHgHQAHgGAAgJIAAgBQAAgPgZgYQgUgPgIgMQgIgMAAgOIAAAAQAAgSANgLQANgLASAAQASAAANAFIAAAVQgPgHgQAAQgJgBgGAGQgHAFAAAKIAAAAQAAAJAGAIQAGAHAOAPQATAPAIAMQAIANAAANIAAABQAAASgOAMQgNALgSAAQgTAAgSgIg");
	this.shape_87.setTransform(224.3,356.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AglBIQgLgOAAgXIAAgDQAAgaAMgMQANgOAWAAQAOgBAOAHIAAgTQAAgiggAAQgRAAgQAHIAAgTQARgHATAAQAXAAAOANQAOANAAAZIAAB3IgWAAIAAgXQgMAagWAAQgSAAgMgPgAgTAFQgIAJAAAQIAAAEQAAAQAHAKQAHAJAMABQALgBAJgKQAIgLAAgPIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_88.setTransform(212.4,356.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("ABBBWIAAh1QAAglgZAAQgNAAgIALQgJALAAARIAABzIgUAAIAAh1QAAglgZAAQgNAAgIALQgIALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQAZAAAJAaQANgaAaAAQATAAALANQAMANAAAZIAAB4g");
	this.shape_89.setTransform(195.9,356.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAXgXgBQgWABgPgXgAgWgyQgJASAAAfIAAADQAAAeAJATQAJASANAAQANAAAJgSQAKgTAAgeIAAgDQAAgfgKgSQgJgSgNAAQgNAAgJASg");
	this.shape_90.setTransform(178.5,356.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgSIAQAAIAAguIAUAAIAAAuIAdAAIAAASIgdAAIAAB2QABAQARAAQAGAAAFgCIAAASQgIADgIAAQghAAAAgfg");
	this.shape_91.setTransform(167.8,354.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AAcBWIAAh1QAAgRgHgKQgHgKgNAAQgLAAgIALQgJALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQATAAALAOQALANAAAYIAAB4g");
	this.shape_92.setTransform(156.9,356.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgXB2IAAipIAXAAIAACpgAgXhHIAaguIAVAKIghAkg");
	this.shape_93.setTransform(148.1,353.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AgpBPIAAgVQAWALAQgBQAJABAHgHQAHgGAAgJIAAgBQAAgPgagYQgTgPgIgMQgIgMAAgOIAAAAQAAgSAOgLQAMgLASAAQARAAAOAFIAAAVQgQgHgPAAQgJgBgGAGQgHAGABAJIAAAAQgBAJAGAIQAFAHAPAPQAUAPAHAMQAIANAAANIAAABQAAASgOAMQgNALgSAAQgSAAgUgIg");
	this.shape_94.setTransform(138.5,356.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AAbBWIAAh1QAAgRgHgKQgGgKgNAAQgLAAgIALQgJALAAARIAABzIgWAAIAAipIAWAAIAAAYQANgaAXAAQATAAALAOQALANAAAYIAAB4g");
	this.shape_95.setTransform(120.4,356.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AgKByIAAipIAVAAIAACpgAgKhWIAAgaIAVAAIAAAag");
	this.shape_96.setTransform(110.3,353.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AgvBoIAAgXQAZAOARAAQANAAAIgIQAJgIAAgNIAAgBQAAgMgGgLQgGgMgSgXQgZgbgIgNQgJgPAAgQIAAgBQAAgVAQgPQAOgNAUAAQAVAAASAJIAAAXQgUgMgRAAQgLAAgJAIQgIAHAAANIAAABQAAALAGALQAGAKASAWQAYAZAIAQQAJAQAAASIAAABQAAAWgPAOQgPAOgWAAQgUAAgXgLg");
	this.shape_97.setTransform(101.1,353.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AgGAnIAEggIgXARIgHgLIAagNIgagLIAHgNIAXASIgEggIAMAAIgDAgIAXgSIAHANIgaALIAaANIgHALIgXgRIADAgg");
	this.shape_98.setTransform(890.3,141.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("AgNAVQAQgGgBgRIgJAAIAAgbIAVAAIAAAYQABANgHAJQgFAIgNAFg");
	this.shape_99.setTransform(884.1,157.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AgYBiIApixIgzAAIAAgSIBFAAIAAAOIgpC1g");
	this.shape_100.setTransform(877.6,147.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AhBCdIAAgjQAjAVAXAAQASAAALgMQAMgLAAgUIAAgCQAAgSgIgSQgJgQgYgiQgjgrgKgTQgMgWAAgZIAAgBQAAghAUgVQAVgUAcgBQAbABAZAOIAAAiQgcgSgWAAQgQAAgMAMQgMALAAATIAAABQAAARAJAQQAJAQAZAhQAgAmAMAYQAMAZAAAbIAAABQAAAhgVAWQgVAUgdABQgbgBghgQg");
	this.shape_101.setTransform(865.4,156.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("Ag7CpIAAlRIB2AAIAAAeIhWAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAeg");
	this.shape_102.setTransform(851,156.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("Ag2CpIAAlRIAgAAIAAEzIBNAAIAAAeg");
	this.shape_103.setTransform(837.5,156.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("AA4CqIgShYIhNAAIgRBYIgfAAIBHlTIAgAAIBIFTgAgiA2IBDAAIghipg");
	this.shape_104.setTransform(820.6,156.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#58595B").s().p("AhHCpIAAlRIAtAAQAsAAAbAcQAbAdAAAzIAAABQAAAzgaAbQgbAdgtABIgOAAIAAB4gAgoAVIAPAAQAegBASgUQASgUAAgmIAAgBQAAgmgTgWQgRgUgeAAIgPAAg");
	this.shape_105.setTransform(805.9,156.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58595B").s().p("AgOCpIAAlRIAdAAIAAFRg");
	this.shape_106.setTransform(792.8,156.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#58595B").s().p("AAoCpIg1iEIgOABIgQAAIAACDIggAAIAAlRIAvAAQArAAAbAaQAbAbAAAxIAAABQAAAjgOAZQgOAVgZALIA8COgAgrAJIAPAAQAeAAASgRQASgUAAgkIAAgCQAAglgTgSQgSgSgeAAIgOAAg");
	this.shape_107.setTransform(780.8,156.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#58595B").s().p("AgtCDQgegtAAhSIAAgHQAAhQAfguQAdgqAsAAQAXAAATAKIAAAiQgXgNgTAAQgeAAgUAhQgWAlAABCIAAAJQAABFAWAlQATAgAfAAQAIAAAKgDIAAh5IgtAAIAAgbIBKAAIAACoQgYAMgZAAQgrAAgdgpg");
	this.shape_108.setTransform(761.7,156.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#58595B").s().p("Ag6CDQgYgsABhSIAAgJQgBhRAYgtQAWgrAkAAQAlAAAWArQAYAtgBBRIAAAJQABBSgYAsQgWAqglABQgkgBgWgqgAgjhuQgPAlAABFIAAAJQAABFAPAlQANAhAWABQAXgBANghQAPglAAhFIAAgJQAAhEgPgmQgNghgXgBQgWABgNAhg");
	this.shape_109.setTransform(743.4,156.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58595B").s().p("AhMCpIAAlRIAsAAQAxAAAdApQAfAsAABQIAAAHQAABQgfAsQgdApgxAAgAgtCMIAPAAQAhABAUgiQAWgjAAhEIAAgHQAAhDgWglQgVggghAAIgOAAg");
	this.shape_110.setTransform(725.1,156.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#58595B").s().p("Ag2CTQgVgaAAgsIAAj3IAfAAIAAD4QAAAfAMARQAMAQAUAAQAUAAAMgQQAMgRAAgfIAAj4IAgAAIAAD3QAAAsgVAaQgVAYgiAAQgiAAgUgYg");
	this.shape_111.setTransform(705.9,156.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#58595B").s().p("Ag7CpIAAlRIB1AAIAAAeIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAeg");
	this.shape_112.setTransform(689.5,156.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#58595B").s().p("AhACdIAAgjQAiAVAXAAQASAAALgMQAMgLAAgUIAAgCQAAgSgIgSQgJgQgYgiQgjgrgKgTQgMgWAAgZIAAgBQAAghAVgVQAUgUAbgBQAbABAZAOIAAAiQgbgSgWAAQgRAAgLAMQgMALAAATIAAABQAAARAJAQQAJAQAZAhQAgAmAMAYQAMAZgBAbIAAABQAAAhgUAWQgVAUgeABQgagBgggQg");
	this.shape_113.setTransform(674,156.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AhHCpIAAlRIAtAAQAsAAAbAcQAbAdAAAzIAAABQAAAzgaAbQgbAdgtABIgOAAIAAB4gAgoAVIAPAAQAegBASgUQASgUAAgmIAAgBQAAgmgTgWQgRgUgeAAIgPAAg");
	this.shape_114.setTransform(658.7,156.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#58595B").s().p("AhBCdIAAgjQAiAVAYAAQASAAALgMQAMgLAAgUIAAgCQAAgSgJgSQgIgQgYgiQgjgrgKgTQgMgWAAgZIAAgBQAAghAVgVQAUgUAbgBQAbABAaAOIAAAiQgcgSgXAAQgQAAgLAMQgLALAAATIAAABQgBARAKAQQAIAQAZAhQAgAmAMAYQALAZABAbIAAABQgBAhgUAWQgVAUgdABQgcgBgggQg");
	this.shape_115.setTransform(635,156.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#58595B").s().p("AA4CqIgShYIhMAAIgSBYIgfAAIBHlTIAgAAIBIFTgAgiA2IBDAAIghipg");
	this.shape_116.setTransform(618.1,156.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#58595B").s().p("AA9CpIAAkLIg9CxIAAAAIg8ixIAAELIgfAAIAAlRIAjAAIA4CqIA5iqIAjAAIAAFRg");
	this.shape_117.setTransform(597.6,156.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#58595B").s().p("Ag5CDQgZgsAAhSIAAgJQAAhRAZgtQAWgrAjAAQAlAAAWArQAYAtAABRIAAAJQAABSgYAsQgWAqglABQgjgBgWgqgAgjhuQgPAmABBEIAAAJQgBBFAPAlQAOAhAVABQAXgBAOghQAOglAAhFIAAgJQAAhFgOglQgOghgXgBQgVABgOAhg");
	this.shape_118.setTransform(576.9,156.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("AgPCpIAAkzIgzAAIAAgeICFAAIAAAeIg0AAIAAEzg");
	this.shape_119.setTransform(561.5,156.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#58595B").s().p("AAwCpIhekEIAAEEIgeAAIAAlRIAfAAIBcD9IAAj9IAeAAIAAFRg");
	this.shape_120.setTransform(544.9,156.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#58595B").s().p("AggDWIAAlRIAgAAIAAFRgAggiPIAjhGIAeAPIgtA3g");
	this.shape_121.setTransform(533,151.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#58595B").s().p("AhBCdIAAgjQAjAVAXAAQASAAALgMQAMgLAAgUIAAgCQAAgSgJgSQgIgQgYgiQgjgrgKgTQgMgWAAgZIAAgBQAAghAUgVQAVgUAcgBQAaABAZAOIAAAiQgbgSgWAAQgQAAgMAMQgMALAAATIAAABQAAARAJAQQAJAQAYAhQAhAmAMAYQAMAZAAAbIAAABQAAAhgVAWQgVAUgeABQgagBghgQg");
	this.shape_122.setTransform(520,156.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#58595B").s().p("AhBCdIAAgjQAjAVAXAAQASAAALgMQAMgLAAgUIAAgCQAAgSgJgSQgIgQgYgiQgjgrgKgTQgMgWAAgZIAAgBQAAghAUgVQAVgUAcgBQAbABAZAOIAAAiQgcgSgWAAQgQAAgMAMQgMALAAATIAAABQAAARAJAQQAJAQAYAhQAhAmAMAYQAMAZAAAbIAAABQAAAhgVAWQgVAUgdABQgbgBghgQg");
	this.shape_123.setTransform(497.9,156.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#58595B").s().p("Ag6CDQgYgsAAhSIAAgJQAAhRAYgtQAWgrAkAAQAlAAAWArQAYAtAABRIAAAJQAABSgYAsQgWAqglABQgkgBgWgqgAgjhuQgPAmAABEIAAAJQAABFAPAlQAOAhAVABQAXgBANghQAPglAAhFIAAgJQAAhEgPgmQgNghgXgBQgVABgOAhg");
	this.shape_124.setTransform(481.1,156.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#58595B").s().p("Ag2CpIAAlRIAgAAIAAEzIBNAAIAAAeg");
	this.shape_125.setTransform(467.3,156.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#58595B").s().p("Ag7CpIAAlRIB2AAIAAAeIhWAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAeg");
	this.shape_126.setTransform(446,156.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#58595B").s().p("AhMCpIAAlRIAsAAQAxAAAdApQAfAsAABQIAAAHQAABQgfAsQgdApgxAAgAgtCMIAPAAQAhABAUgiQAWgjAAhEIAAgHQAAhDgWglQgVggghAAIgOAAg");
	this.shape_127.setTransform(429,156.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#58595B").s().p("AhNCpIAAlRIAtAAQAxAAAdApQAfAsAABQIAAAHQAABQgfAsQgdApgxAAgAgtCMIAPAAQAhABAUgiQAXgjAAhEIAAgHQAAhDgXglQgVggghAAIgOAAg");
	this.shape_128.setTransform(403.5,156.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58595B").s().p("AA4CqIgShYIhMAAIgSBYIgfAAIBHlTIAhAAIBHFTgAgiA2IBEAAIgiipg");
	this.shape_129.setTransform(384.3,156.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#58595B").s().p("AhMCpIAAlRIAsAAQAxAAAdApQAfAsAABQIAAAHQAABQgfAsQgdApgxAAgAgtCMIAPAAQAhABAUgiQAWgjAAhEIAAgHQAAhDgWglQgVggghAAIgOAAg");
	this.shape_130.setTransform(367.3,156.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58595B").s().p("Ag7CpIAAlRIB2AAIAAAeIhWAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAeg");
	this.shape_131.setTransform(350.6,156.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#58595B").s().p("AgPCqIhElTIAhAAIAyEWIA0kWIAgAAIhFFTg");
	this.shape_132.setTransform(333.7,156.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#58595B").s().p("AA4CqIgShYIhMAAIgSBYIgfAAIBHlTIAgAAIBIFTgAgiA2IBDAAIghipg");
	this.shape_133.setTransform(317.1,156.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#58595B").s().p("AAoCpIg1iEIgOABIgQAAIAACDIggAAIAAlRIAvAAQAsAAAbAaQAbAbAAAxIAAABQAAAjgPAZQgNAVgZALIA7COgAgrAJIAQAAQAdAAARgRQATgUAAgkIAAgCQAAglgTgSQgSgSgdAAIgPAAg");
	this.shape_134.setTransform(300.1,156.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#58595B").s().p("AgtCDQgegtAAhSIAAgHQAAhQAfguQAdgqArAAQAXAAAUAKIAAAiQgXgNgTAAQgeAAgUAhQgWAlAABCIAAAJQAABFAWAlQATAgAeAAQAJAAAKgDIAAh5IgtAAIAAgbIBKAAIAACoQgZAMgZAAQgqAAgdgpg");
	this.shape_135.setTransform(281,156.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#58595B").s().p("AgOCpIAAiPIhFjCIAiAAIAxCcIA0icIAgAAIhFDCIAACPg");
	this.shape_136.setTransform(257,156.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#58595B").s().p("AA4CqIgShYIhNAAIgRBYIgfAAIBIlTIAgAAIBHFTgAghA2IBDAAIgiipg");
	this.shape_137.setTransform(232.5,156.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#58595B").s().p("AgOCpIAAlRIAdAAIAAFRg");
	this.shape_138.setTransform(219.2,156.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#58595B").s().p("AgkCCQgbgsAAhSIAAgHQAAhSAcgsQAZgpAmAAQATAAAQAHIAAAiQgTgKgOAAQgbAAgQAgQgSAlAABDIAAAHQAABEASAkQAQAgAbAAQAQAAASgKIAAAfQgRAKgUAAQgmAAgZgpg");
	this.shape_139.setTransform(207.9,156.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#58595B").s().p("AAwCpIhfkEIAAEEIgdAAIAAlRIAfAAIBcD9IAAj9IAeAAIAAFRg");
	this.shape_140.setTransform(190.7,156.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#58595B").s().p("Ag7CpIAAlRIB1AAIAAAeIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAeg");
	this.shape_141.setTransform(174,156.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#58595B").s().p("AhMCpIAAlRIAsAAQAxAAAdApQAfAsAABQIAAAHQAABQgfAsQgdApgxAAgAgtCMIAPAAQAhABAUgiQAWgjAAhEIAAgHQAAhDgWglQgVggghAAIgOAAg");
	this.shape_142.setTransform(157.1,156.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#58595B").s().p("AgOCpIAAlRIAdAAIAAFRg");
	this.shape_143.setTransform(143.5,156.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#58595B").s().p("AgkCCQgbgsAAhSIAAgHQAAhSAcgsQAZgpAmAAQASAAARAHIAAAiQgSgKgPAAQgcAAgPAgQgSAlAABDIAAAHQAABEASAkQAPAgAcAAQAPAAATgKIAAAfQgSAKgTAAQgnAAgYgpg");
	this.shape_144.setTransform(132.2,156.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58595B").s().p("AAwCpIhekEIAAEEIgeAAIAAlRIAfAAIBcD9IAAj9IAeAAIAAFRg");
	this.shape_145.setTransform(114.9,156.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#58595B").s().p("AgOCpIAAlRIAdAAIAAFRg");
	this.shape_146.setTransform(101.3,156.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#67A289").s().p("EhqvAAbIAAg0MDVfAAAIAAA0g");
	this.shape_147.setTransform(780.3,198.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#54B5E6").s().p("AgVBLQgLgCgHgHQgIgEgFgJQgEgJAAgJQAAgNAJgLQAIgJAOgDIgKgGQgEgDgEgEQgEgFgCgFQgCgIAAgFQAAgIAEgIQAFgIAHgFQAGgFAKgEQALgDAIAAQAKAAAKADQAKAEAGAFQAIAGAEAHQAEAIAAAIQAAAIgCAFIgGAKIgIAHIgLAGQAPADAJAJQAIAKAAAOQAAAJgEAJQgFAJgHAEQgIAHgKACQgLADgMABQgLgBgKgDgAgOAHQgJACgEAEQgFAEgEAFQgDAGAAAHQAAAGADAFQADAFAFAEQAFADAHADQAJACAHABQAIgBAIgCQAIgDAFgDQAFgEADgFQADgGAAgFQAAgHgEgGQgDgEgFgFQgEgEgJgCIgPgCQgFAAgJACgAgMg8QgHABgEAFQgGAEgCAEQgDAFAAAGQAAAFADAGQADAGAFADQAGAEAFACQAHACAFAAQAGAAAIgCQAGgCAEgEQAFgDADgGQADgFAAgGQAAgHgDgEQgCgEgFgEQgGgFgFgBQgHgCgHAAQgGAAgGACg");
	this.shape_148.setTransform(750.9,596.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#54B5E6").s().p("Ag/B7QASgNAOgOQAOgNAJgPQAIgPADgRQAEgQABgUQgBgSgEgRQgDgQgIgQQgJgPgOgNQgNgNgTgOIAZgmQAyAdAaAnQAaAmAAA2QAAA2gaAoQgaAngyAcg");
	this.shape_149.setTransform(735.3,605.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#54B5E6").s().p("AgeBJQgOgGgLgLQgKgKgHgQQgGgOAAgQQAAgOAGgPQAHgPAKgKQALgLAOgGQAQgHAOAAQAQAAAPAHQAOAGALAKQALALAGAOQAGAPAAAPQAAAQgGAOQgGAOgLAMQgKAKgQAHQgOAGgQAAQgPAAgPgGgAgag/QgOAFgJAKQgJAKgFANQgGANAAAMQAAAOAGAOQAEAMAKAKQAKAKANAFQANAGANAAQAOAAANgGQAOgGAIgKQALgJAEgNQAGgOAAgNQAAgNgGgNQgEgNgLgKQgIgJgOgFQgNgGgOAAQgNAAgNAGgAASAnIgSgbIgNAAIAAAbIgSAAIAAhSIAjAAQAQAAAIAIQAKAHgBANQAAALgEAEQgGAHgIADIAVAdgAgNgCIARAAQAHAAAEgDQADgDABgGQgBgHgDgDQgEgCgIAAIgQAAg");
	this.shape_150.setTransform(718.1,596.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#54B5E6").s().p("AAoBlIgog/IgoA/Ig8AAIBHhlIhEhkIA9AAIAkA8IAmg8IA8AAIhEBjIBHBmg");
	this.shape_151.setTransform(698,606.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#54B5E6").s().p("AgiBhQgUgHgOgPQgOgOgIgSQgIgTAAgYIAAAAQAAgUAIgTQAHgUANgOQANgOATgJQARgIAVAAQAaAAASAJQASAJANAPQAMARAGASQAGAVAAATIAAABIgBAOIiLAAQAEATANALQANAJASABQAPgBAKgFQALgDANgMIAgAdQgPASgTAKQgUAJgcABQgVAAgTgIgAgbguQgLAMgEATIBVAAQgDgTgLgMQgLgMgSAAQgQAAgLAMg");
	this.shape_152.setTransform(676.5,606.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#54B5E6").s().p("AAjBmIAAhuQAAgUgJgLQgJgKgRAAQgOAAgKAKQgKAKAAAVIAABuIg5AAIAAjIIA5AAIAAAdQAEgGAHgGQAGgGAHgFQAIgFAGgCQAHgCANAAQAhAAARAUQASATAAAkIAACAg");
	this.shape_153.setTransform(653.3,606.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#54B5E6").s().p("AgqBhQgTgJgQgOQgOgOgIgTQgJgUAAgVIAAAAQAAgUAJgTQAIgTAPgPQAOgOAUgJQAUgIAWAAQAYAAATAIQAVAJAOAOQAPAPAIASQAIASAAAWIAAAAQAAAVgIAUQgIARgPAPQgPAPgUAJQgTAHgYABQgXgBgTgHgAgVgyQgJAFgHAHQgHAIgEAKQgDALAAAJIAAAAQAAAKAEAKQAEALAHAHQAHAIAJAFQAKAEAKAAQAOAAAIgEQAKgFAGgHQAHgIAEgKQADgIAAgNIAAAAQAAgKgDgKQgEgJgHgIQgJgJgIgEQgKgEgLAAQgLAAgKAEg");
	this.shape_154.setTransform(629,606.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#54B5E6").s().p("AgZBlIhPjJIA9AAIArCFIAtiFIA8AAIhQDJg");
	this.shape_155.setTransform(606.3,606.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#54B5E6").s().p("ABPCEIgZg7IhtAAIgYA7Ig7AAIBxkHIAzAAIBxEHgAgiAWIBEAAIgihUg");
	this.shape_156.setTransform(582.7,603.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#54B5E6").s().p("AgkAkQAmgEgCggIgWAAIAAg7IA7AAIAAAyQAAAkgSAQQgSARggAAg");
	this.shape_157.setTransform(550.4,616.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#54B5E6").s().p("AgOA+IAGguIglAcIgQgbIArgRIgrgQIAQgbIAlAbIgGgtIAdAAIgGAtIAkgbIAQAbIgqAQIAqARIgQAbIgkgcIAGAug");
	this.shape_158.setTransform(537.6,596.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#54B5E6").s().p("AgOA+IAGguIgkAcIgQgbIAqgRIgqgQIAQgbIAkAbIgGgtIAdAAIgGAtIAlgbIAPAbIgqAQIAqARIgPAbIglgcIAGAug");
	this.shape_159.setTransform(521.4,596.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#54B5E6").s().p("AgOA+IAGguIgkAcIgQgbIAqgRIgqgQIAQgbIAkAbIgGgtIAdAAIgGAtIAlgbIAPAbIgqAQIAqARIgPAbIglgcIAGAug");
	this.shape_160.setTransform(505.2,596.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#54B5E6").s().p("AgeBJQgOgGgLgLQgLgKgGgQQgGgOAAgQQAAgOAGgPQAGgPALgKQAKgKAPgHQAQgHAOAAQAPAAAPAHQAOAFAMALQALALAFAOQAHAPAAAPQAAARgHANQgFAPgLALQgKAKgQAHQgOAGgQAAQgQAAgOgGgAgag/QgNAFgKAKQgKALgEAMQgGANAAAMQAAAOAGAOQAFANAJAJQAKAKANAFQANAGANAAQAOAAANgGQANgGAKgKQAIgJAGgNQAGgMAAgPQAAgOgGgMQgGgOgIgJQgKgJgNgFQgNgGgOAAQgNAAgNAGgAASAnIgSgbIgNAAIAAAbIgTAAIAAhSIAkAAQAQAAAIAIQAKAHgBANQAAAKgEAFQgHAHgHADIAVAdgAgNgCIARAAQAHAAAEgDQADgDAAgGQAAgHgDgDQgEgCgIAAIgQAAg");
	this.shape_161.setTransform(487.4,596.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#54B5E6").s().p("AAjBmIAAhuQAAgUgJgLQgJgKgRAAQgOAAgKAKQgKAKAAAVIAABuIg5AAIAAjIIA5AAIAAAdIALgMQAGgGAHgFQAIgFAGgCQAIgCAMAAQAgAAASAUQASAUAAAjIAACAg");
	this.shape_162.setTransform(467.1,606.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#54B5E6").s().p("AgqCLQgUgIgOgOQgPgOgIgTQgJgUAAgVIAAgBQAAgVAJgUQAIgQAPgPQANgOAVgJQAUgIAWAAQAYAAATAIQAVAJAOANQAPAOAIASQAIASAAAWIAAABQAAAWgIATQgJATgOAOQgPAPgUAIQgTAIgYAAQgXAAgTgIgAgVgHQgJAEgHAGQgHAIgDAJQgEALAAAKIAAABQAAALAEAKQAEALAHAHQAHAIAJAEQAKAFAKAAQAOAAAIgEQAJgEAIgIQAFgHAFgLQADgJAAgMIAAgBQAAgLgDgKQgEgLgHgHQgJgGgIgEQgKgFgLAAQgLAAgKAFgAgUhPIAohDIAyAVIgwAug");
	this.shape_163.setTransform(442.8,602.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#54B5E6").s().p("Ag7BmIAAjIIA5AAIAAApQAGgUAQgNQAPgNAZACIAAA7IgCAAQgdAAgQASQgPARAAAjIAABKg");
	this.shape_164.setTransform(423.8,606.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#54B5E6").s().p("AgiBhQgVgIgNgOQgOgOgIgSQgIgTAAgYIAAAAQABgWAGgRQAIgSANgQQAOgOASgJQARgIAVAAQAZAAATAJQATAKAMAOQANASAFARQAFAVAAATIAAAIIgBAHIiKAAQAEAUAOAKQALAJASABQAQgBAKgFQALgDANgMIAgAdQgOARgVALQgTAJgcABQgVAAgTgIgAgbguQgLAMgDATIBTAAQgBgTgMgMQgLgMgSAAQgQAAgLAMg");
	this.shape_165.setTransform(403.5,606.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#54B5E6").s().p("AgmCKIAAiXIgYAAIAAgvIAYAAIAAgNQAAghAQgQQAQgPAcAAIAYABIARAEIAAAwIgNgEQgFgBgIAAQgUAAAAAWIAAAIIAuAAIAAAuIguAAIAACXg");
	this.shape_166.setTransform(385.5,602.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#54B5E6").s().p("AgxBkQgOgGgIgHQgKgHgFgMQgFgLAAgQIAAAAQAAgRAGgMQAGgLAKgHQAMgIAOgDQANgFAUAAQAPAAAKACIAWAGIAAgDQAAgSgLgKQgKgIgUAAQgPAAgOACQgNADgOAFIgOgrQARgIASgEQASgEAXgBQAwAAAVAYQAVAWAAAqIAABzIg3AAIAAgXQgLANgOAGQgOAHgUAAQgOAAgNgDgAgZASQgLAHAAANIAAABQAAAMAJAGQAJAHANAAQASAAANgKQAMgJAAgQIAAgLIgRgGQgMgBgHAAQgRAAgKAHg");
	this.shape_167.setTransform(366.3,606.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#54B5E6").s().p("AgEB9QgKgCgIgIQgIgGgEgMQgFgLAAgTIAAhdIgYAAIAAgyIAYAAIAAgzIA3AAIAAAzIAwAAIAAAyIgwAAIAABUQAAATATAAQAOAAAOgGIAAAuQgHAEgNAEQgLADgOAAQgNAAgJgDg");
	this.shape_168.setTransform(347.5,604.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#54B5E6").s().p("AgiBhQgUgIgOgOQgOgOgIgSQgIgVAAgWIAAAAQAAgUAIgTQAHgSANgQQAOgOASgJQASgIAUAAQAaAAASAJQATAKAMAOQAMARAGASQAGAVAAATIAAABIgBAOIiLAAQAFAUANAKQAMAJASABQAPgBAKgFQALgDANgMIAhAdQgQASgTAKQgUAJgcABQgVAAgTgIgAgbguQgLAMgDATIBUAAQgCgTgMgMQgKgMgTAAQgQAAgLAMg");
	this.shape_169.setTransform(328.4,606.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#54B5E6").s().p("AhuCDIAAkFIB3AAQApAAAYASQAWASAAAgIAAAAQAAALgCAJQgDAIgFAIIgKAMQgHAGgHADQAXAHANAPQAOAPAAAaIAAABQAAASgIAOQgHAOgMAIQgOAKgSAEQgSAEgWAAgAg2BQIBDAAQAUAAAKgHQALgGAAgPIAAgBQAAgNgKgIQgLgIgWAAIhBAAgAg2gYIA1AAQARAAAMgGQAMgHAAgPIAAAAQgBgNgJgIQgLgHgRAAIg4AAg");
	this.shape_170.setTransform(304.1,603.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#54B5E6").s().p("AgkAkQAmgEgCggIgWAAIAAg7IA7AAIAAAyQAAAkgSAQQgSARggAAg");
	this.shape_171.setTransform(272.3,616.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#54B5E6").s().p("AgOA+IAGguIglAcIgQgbIArgRIgrgQIAQgbIAlAbIgGgtIAdAAIgGAtIAkgbIAQAbIgqAQIAqARIgQAbIgkgcIAGAug");
	this.shape_172.setTransform(259.5,596.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#54B5E6").s().p("AgOA+IAGguIgkAcIgQgbIAqgRIgqgQIAQgbIAkAbIgGgtIAdAAIgGAtIAlgbIAPAbIgqAQIAqARIgPAbIglgcIAGAug");
	this.shape_173.setTransform(243.3,596.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#54B5E6").s().p("AgeBJQgOgGgLgLQgLgKgGgQQgGgOAAgQQAAgOAGgPQAGgPALgKQAJgLARgGQAPgHAOAAQAPAAAQAHQAOAGALAKQALALAFAOQAHAPAAAPQAAARgHANQgFAPgLALQgKAKgQAHQgOAGgQAAQgQAAgOgGgAgag/QgOAGgJAJQgJAKgFANQgGANAAAMQAAAOAGAOQAFANAJAJQAKAKANAFQANAGANAAQAOAAANgGQANgGAKgKQAIgJAGgNQAGgMAAgPQAAgOgGgMQgGgOgIgJQgKgJgNgFQgNgGgOAAQgNAAgNAGgAASAnIgSgbIgNAAIAAAbIgTAAIAAhSIAkAAQAQAAAIAIQAKAHgBANQAAAKgEAFQgHAHgHADIAVAdgAgNgCIARAAQAHAAAEgDQADgDAAgGQAAgHgDgDQgEgCgIAAIgQAAg");
	this.shape_174.setTransform(225.5,596.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#54B5E6").s().p("AgmCKIAAiXIgYAAIAAgvIAYAAIAAgNQAAghAQgQQAPgPAeAAIAWABQAMACAGACIAAAwIgMgEQgHgBgHAAQgVAAABAWIAAAIIAtAAIAAAuIgtAAIAACXg");
	this.shape_175.setTransform(208.4,602.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhVIAAgzIA7AAIAAAzg");
	this.shape_176.setTransform(195.2,602.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#54B5E6").s().p("AgXCCQgOgIgLgNIAAAaIg5AAIAAkRIA5AAIAABmQAMgPAOgJQAPgJAUAAQATAAAQAHQAPAGAOAOQANANAIAUQAHARABAaIAAAAQgBAagHATQgIAUgMANQgMANgSAHQgRAHgSAAQgUAAgQgJgAgSgRQgKAEgGAIQgFAFgFAKQgEAKAAAOIAAAAQAAANAEALQAEAKAGAIQAHAHAJAEQAHADALAAQAKAAAIgDQAIgEAIgHQAGgIAEgKQAEgJAAgPIAAAAQAAgOgEgKQgEgKgGgFQgIgIgIgEQgJgDgJAAQgJAAgJADg");
	this.shape_177.setTransform(177.2,603);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#54B5E6").s().p("AgiBhQgUgHgNgPQgPgOgIgSQgHgTgBgYIAAAAQAAgUAIgTQAGgSAOgQQANgOATgJQASgIAUAAQAZAAATAJQASAKANAOQAMAQAGATQAGAWgBASIAAAPIiKAAQADATAOALQALAJASABQAQgBAKgFQALgDANgMIAgAdQgPASgTAKQgUAJgcABQgVAAgTgIgAgbguQgLAMgDATIBUAAQgDgTgKgMQgMgMgSAAQgQAAgLAMg");
	this.shape_178.setTransform(152.4,606.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#54B5E6").s().p("AAuCDIg3hUIguAAIAABUIg5AAIAAkFIB2AAQAwAAAZAXQAbAWAAAqIAAAAQAAAggQATQgQAUgYAJIA/BegAg3gCIA6AAQAWAAAKgLQAMgKAAgRIAAAAQAAgTgMgKQgNgJgUAAIg5AAg");
	this.shape_179.setTransform(128.6,603.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#54B5E6").s().p("AglBeQgbgoAAg2QAAg1AbgnQAZgnA0gdIAYAmQgSAOgOANQgOANgJAPQgIAOgDASQgEASAAARQAAATAEARQADATAIANQAJAPAOANQAPAPARAMIgYAmQg0gcgZgng");
	this.shape_180.setTransform(106,605.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#54B5E6").s().p("AAjBnIAAhvQAAgVgJgJQgJgLgRAAQgOAAgKALQgJAJAAAVIAABvIg6AAIAAjJIA6AAIAAAdQADgFAHgHQAFgGAIgEQAJgGAFgCQAIgCALAAQAhgBASAVQASAUAAAjIAACBg");
	this.shape_181.setTransform(1453.8,561.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#54B5E6").s().p("AgqCLQgUgIgPgOQgOgOgJgTQgIgTAAgWIAAgBQAAgXAIgSQAIgQAPgPQAPgOAUgJQAVgIAVAAQAWAAAVAIQAUAIAPAOQAOAPAIAQQAJAUAAAVIAAABQAAAVgJAUQgIATgPAOQgNAOgVAJQgVAIgWAAQgVAAgVgIgAgVgHQgJAEgHAFQgGAGgFAMQgDAKAAALIAAABQAAAMADAJQAEALAHAHQAIAIAJAEQAJAFALAAQAMAAAKgFQAJgDAHgIQAHgIAEgKQADgMAAgJIAAgBQAAgLgEgKQgEgKgHgIQgGgFgLgFQgJgFgLAAQgLAAgKAFgAgVhQIAphCIAxAVIgwAtg");
	this.shape_182.setTransform(1430.1,557);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#54B5E6").s().p("Ag7BnIAAjIIA5AAIAAAoQAHgVAPgMQAOgMAaABIAAA8IgDAAQgcAAgRARQgOASAAAiIAABLg");
	this.shape_183.setTransform(1411.2,561);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#54B5E6").s().p("AgiBhQgTgHgPgOQgOgOgIgTQgHgUgBgXIAAAAQAAgTAIgUQAHgTANgPQANgOATgIQATgJATAAQAZAAATAJQASAJAMAQQANAPAGAUQAFATAAAUIAAAPIiLAAQAEAUANAKQAOAKAQAAQAQAAAKgFQAMgGALgKIAhAdQgNARgWALQgVAKgaAAQgVAAgTgIgAgbguQgLAMgEATIBVAAQgDgTgLgMQgLgMgSAAQgQAAgLAMg");
	this.shape_184.setTransform(1391.6,561.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#54B5E6").s().p("AgmCLIAAiXIgYAAIAAgwIAYAAIAAgMQAAgjAQgPQAQgPAcAAIAYABQAIABAJADIAAAwIgNgEIgNgBQgUAAgBAVIAAAIIAuAAIAAAwIgtAAIAACXg");
	this.shape_185.setTransform(1373.9,557.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#54B5E6").s().p("Ag7BnIAAjIIA5AAIAAAoQAIgWAOgLQAOgMAaABIAAA8IgCAAQgdAAgQARQgPASAAAiIAABLg");
	this.shape_186.setTransform(1360,561);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#54B5E6").s().p("AgiBhQgTgHgPgOQgNgOgJgTQgIgVAAgWIAAAAQAAgUAIgTQAHgTANgPQAOgOASgIQASgJAUAAQAaAAASAJQASAJANAQQAMAOAGAVQAGATAAAUIAAABIgBAOIiLAAQAFAUAMAKQAOAKARAAQAPAAAKgFQANgGALgKIAhAdQgPARgUALQgVAKgbAAQgVAAgTgIgAgbguQgLAMgDATIBUAAQgCgTgMgMQgKgMgTAAQgPAAgMAMg");
	this.shape_187.setTransform(1340.4,561.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#54B5E6").s().p("AgEB9QgJgCgKgIQgHgIgEgLQgFgKAAgTIAAhdIgYAAIAAgyIAYAAIAAgzIA4AAIAAAzIAvAAIAAAyIgvAAIAABTQAAAVASgBQAPABAOgIIAAAuQgKAFgKAEQgOADgMAAQgNAAgJgDg");
	this.shape_188.setTransform(1321.5,558.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#54B5E6").s().p("AAiBnIAAhvQABgVgKgJQgJgLgQAAQgPAAgJALQgKAJAAAVIAABvIg5AAIAAjJIA5AAIAAAdIALgMIANgKQAHgFAHgDQAIgCAMAAQAfgBATAVQASAUAAAjIAACBg");
	this.shape_189.setTransform(1303,561.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#54B5E6").s().p("AgcCEIAAkHIA5AAIAAEHg");
	this.shape_190.setTransform(1285.5,558.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#54B5E6").s().p("AgqBhQgUgIgPgPQgOgOgIgTQgJgUAAgVIAAAAQAAgUAJgTQAIgUAPgOQAOgOAUgIQAVgJAVAAQAWAAAVAIQAVAJAOAOQAPAPAIASQAIATAAAVIAAAAQAAAWgIASQgIASgPAQQgPAOgUAIQgUAJgXAAQgVAAgVgIgAgVgyQgJAEgHAIQgHAHgEAKQgDANAAAIIAAAAQAAAKAEALQAEAKAHAHQAGAIAKAFQAKAEAKAAQANAAAJgEQAJgEAHgIQAHgHAEgKQADgKAAgMIAAAAQAAgLgDgJQgEgIgHgKQgIgHgJgFQgKgEgLAAQgLAAgKAEg");
	this.shape_191.setTransform(1256.7,561.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#54B5E6").s().p("Ag7BnIAAjIIA5AAIAAAoQAGgVAQgMQAOgMAaABIAAA8IgDAAQgdAAgQARQgOASAAAiIAABLg");
	this.shape_192.setTransform(1237.8,561);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#54B5E6").s().p("AgEB9QgKgDgIgHQgIgIgFgLQgEgNAAgQIAAhdIgYAAIAAgyIAYAAIAAgzIA3AAIAAAzIAwAAIAAAyIgwAAIAABTQAAAVATgBQAPABANgIIAAAuQgJAFgLAEQgNADgMAAQgNAAgJgDg");
	this.shape_193.setTransform(1221.7,558.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#54B5E6").s().p("AgqBhQgUgIgPgPQgOgOgJgTQgIgTAAgWIAAAAQAAgVAIgSQAJgUAOgOQAPgOAUgIQAVgJAVAAQAWAAAVAIQAUAJAOAOQAPAOAIATQAJAUAAAUIAAAAQAAAVgJATQgIAUgPAOQgNANgVAJQgVAJgWAAQgVAAgVgIgAgVgyQgKAEgHAIQgHAIgDAJQgDAKAAALIAAAAQAAAMADAJQAEAKAHAHQAGAHALAGQAKAEAKAAQAMAAAKgEQAJgEAHgIQAHgIADgJQAEgLAAgLIAAAAQAAgJgEgLQgEgKgHgIQgGgHgLgFQgJgEgLAAQgLAAgKAEg");
	this.shape_194.setTransform(1202.3,561.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#54B5E6").s().p("AgiBhQgTgHgPgOQgOgPgIgSQgIgUAAgXIAAAAQAAgVAHgSQAIgTANgPQAOgOARgIQAUgJATAAQAaAAASAJQASAJANAQQAMAQAGATQAFATABAUIAAAIIgCAHIiKAAQAFAUANAKQANAKAQAAQAPAAALgFQANgGALgKIAgAdQgNAQgVAMQgVAKgbAAQgVAAgTgIgAgbguQgMAMgCATIBTAAQgCgTgLgMQgLgMgSAAQgPAAgMAMg");
	this.shape_195.setTransform(1168.3,561.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#54B5E6").s().p("AgvCEQgPgGgPgOQgLgMgJgVQgHgTgBgZIAAgBQABgZAHgSQAIgUAMgNQANgNAQgHQATgHAQAAQAVAAAQAJQAOAKAKALIAAhjIA6AAIAAERIg6AAIAAgdQgLAPgOAJQgPAJgVAAQgSAAgQgHgAgRgQQgHADgJAIQgGAFgEALQgFAKAAANIAAABQAAALAFALQAEALAGAHQAIAIAIAEQAKAEAHAAQAKAAAJgEQAIgEAIgIQAGgHAEgLQAEgJAAgNIAAgBQAAgOgEgJQgEgLgGgFQgJgIgHgDQgIgEgLAAQgJAAgIAEg");
	this.shape_196.setTransform(1144.3,557.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#54B5E6").s().p("AgmBhQgVgHgVgRIAYglQAQAMARAGQAQAGANAAQAMAAAGgEQAGgFAAgGIAAgBQAAgFgEgDQgDgDgGgDIgwgRQgMgFgIgGQgJgGgFgJQgFgKAAgPIAAgBQAAgPAGgMQAFgLAKgJQALgIANgFQAMgEAPAAQATAAAUAGQASAGASALIgWAoQgNgIgQgGQgOgFgMAAQgIAAgFAEQgGAEAAAGIAAABQAAAEAEADQADADAGADIAaALQANAEAJAEQAKAFAJAHQAKAFAFAJQAFAJAAAPIAAABQAAASgFALQgGAMgLAIQgKAIgOAEQgNAEgSAAQgSAAgYgHg");
	this.shape_197.setTransform(1122.9,561.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#54B5E6").s().p("AgiBhQgSgHgQgOQgNgOgJgTQgIgTAAgYIAAAAQAAgUAIgTQAHgUANgOQAOgPASgHQASgJAUAAQAaAAASAJQARAJAOAQQAMAOAGAVQAGATAAAUIAAABIgBAOIiLAAQAEAUANAKQAOAKARAAQAPAAAKgFQANgGALgKIAgAdQgNARgVALQgVAKgbAAQgVAAgTgIgAgbguQgLAMgEATIBVAAQgCgSgMgNQgLgMgSAAQgQAAgLAMg");
	this.shape_198.setTransform(1102.8,561.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#54B5E6").s().p("AgvCEQgQgGgNgOQgNgNgIgUQgIgVAAgXIAAgBQAAgYAIgTQAIgTANgOQALgNASgHQARgHARAAQAVAAAPAJQAQAKAJALIAAhjIA6AAIAAERIg6AAIAAgdQgLAPgOAJQgOAJgWAAQgSAAgQgHgAgRgQQgIADgIAIQgGAFgEALQgEAKAAANIAAABQAAALAEALQAEALAGAHQAHAIAJAEQAKAEAHAAQAKAAAJgEQAJgEAHgIQAHgHADgLQAEgLAAgLIAAgBQAAgMgEgLQgDgLgHgFQgIgIgIgDQgIgEgLAAQgJAAgIAEg");
	this.shape_199.setTransform(1078.8,557.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#54B5E6").s().p("AgeBJQgQgHgJgKQgKgLgHgOQgGgOAAgRQAAgQAGgNQAHgOAKgMQAMgLANgGQAPgGAPAAQARAAAOAGQAPAGAKALQALALAGAOQAGAPAAAPQAAAQgGAOQgGAPgLALQgLALgOAGQgPAGgQAAQgPAAgPgGgAgahAQgMAGgLAJQgJALgFAMQgGALABAPQAAAPAEANQAGAMAJAJQAJAKANAGQAMAFAPAAQAQAAAMgFQANgGAJgKQAJgKAGgMQAFgNAAgOQAAgMgFgPQgGgMgJgKQgKgKgMgFQgOgGgOABQgNAAgNAFgAATAnIgSgbIgOAAIAAAbIgSAAIAAhSIAjAAQAPAAAKAHQAIAHABAOQAAALgGAEQgEAGgIADIAUAegAgNgCIARAAQAIAAADgDQAEgEAAgFQAAgGgEgDQgFgEgGAAIgRAAg");
	this.shape_200.setTransform(1047.2,551.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#54B5E6").s().p("AgbCEIAAhoIhmifIBEAAIA9BqIBAhqIBCAAIhmCdIAABqg");
	this.shape_201.setTransform(1025.3,558.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#54B5E6").s().p("Ah4CEIAAkHIBnAAQAbABAcAJQAZALATARQATASAJAYQALAYAAAbIAAAAQAAAcgLAYQgJAXgTASQgTATgZAJQgbALgcAAgAg+BPIAtAAQARAAANgGQAOgFALgLQAKgKAHgOQAFgQAAgRIAAAAQAAgQgFgPQgHgOgKgLQgLgLgOgFQgNgGgRAAIgtAAg");
	this.shape_202.setTransform(998.4,558.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#54B5E6").s().p("AgcCEIAAkHIA5AAIAAEHg");
	this.shape_203.setTransform(977.4,558.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#54B5E6").s().p("AAuCEIg3hVIgtAAIAABVIg6AAIAAkHIB2AAQAvAAAaAYQAbAXAAApIAAAAQAAAggQATQgPATgaAKIBABfgAg2gDIA5AAQAWAAALgKQALgKAAgRIAAgBQAAgSgMgKQgMgJgVAAIg4AAg");
	this.shape_204.setTransform(959,558.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#54B5E6").s().p("AgqB+QgZgLgTgRQgSgTgKgYQgKgaAAgdIAAAAQAAgaAKgaQAKgYATgTQASgTAagKQAYgLAdAAQAQAAAQADQAOABANAGQAPAFAJAGQAKAGALAJIgkAtIgQgMIgQgJQgKgEgHAAQgJgCgMAAQgMgBgPAHQgOAHgLALQgKALgGAPQgFAPAAAQIAAAAQAAASAFAPQAGAPALAMQAJAKAQAIQAPAFAQAAQAgABAWgRIAAgmIg7AAIAAgvIBzAAIAABwQgVASgbAMQgcAMglAAQgcAAgagKg");
	this.shape_205.setTransform(930.2,558.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#54B5E6").s().p("AhjCEIAAkHIDFAAIAAA0IiMAAIAAA2IB7AAIAAAyIh7AAIAAA3ICOAAIAAA0g");
	this.shape_206.setTransform(904.2,558.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#54B5E6").s().p("AhdCEIAAkHIA6AAIAADSICBAAIAAA1g");
	this.shape_207.setTransform(881,558.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#54B5E6").s().p("AhnCEIAAkHIBqAAQAWAAAUAHQASAHAOAMQANAMAHAQQAHAQAAAWIAAAAQAAAYgIAPQgIARgPAMQgPALgTAGQgSAGgWAAIgsAAIAABQgAgtAAIAtAAQAWAAALgJQAMgLAAgRIAAgBQAAgTgMgLQgNgKgUAAIgtAAg");
	this.shape_208.setTransform(857.5,558.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgJgIgGgLQgGgNABgOIAAgBQAAgQAGgNQAHgMAJgGQALgIAPgDQAQgFARAAQAMAAANADIAWAGIAAgDQAAgSgLgKQgJgJgVAAQgQAAgNACQgPAEgMAFIgOgsQARgHASgFQASgFAXAAQAvAAAWAYQAVAXAAAoIAAB0Ig3AAIAAgWQgKALgPAIQgMAGgWAAQgPAAgMgEgAgaASQgKAIAAANIAAAAQAAANAJAFQAIAHAOAAQAUAAALgKQAMgLAAgPIAAgJQgGgDgKgDQgJgCgMAAQgPAAgMAHg");
	this.shape_209.setTransform(822.3,561.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgchWIAAgyIA6AAIAAAyg");
	this.shape_210.setTransform(806.6,557.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#54B5E6").s().p("AgdBgQgUgJgOgNQgNgOgIgTQgJgSAAgXIAAAAQAAgUAJgTQAIgUANgOQANgNAVgJQATgJAWAAQAcAAATAJQASAJAPAQIgjAmQgKgLgKgFQgLgGgPAAQgLAAgGAEQgIAEgIAIQgGAHgEAKQgEANAAAIIAAAAQAAAKAEALQAEALAGAHQAHAIAKAEQAGAEANAAQAOAAALgGQAJgEALgLIAjAiQgPAQgUAKQgSALgeAAQgVAAgTgJg");
	this.shape_211.setTransform(791.1,561.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgJgIgGgLQgFgNgBgOIAAgBQAAgQAHgNQAGgMALgGQAKgIAPgDQAQgFARAAQAMAAANADIAXAGIAAgDQgBgSgKgKQgLgJgUAAQgQAAgNACQgPAEgMAFIgOgsQARgHASgFQARgFAYAAQAvAAAWAYQAWAYAAAnIAAB0Ig4AAIAAgWQgKALgPAIQgMAGgWAAQgQAAgLgEgAgZASQgLAIAAANIAAAAQAAANAIAFQAJAHAOAAQATAAAMgKQAMgKAAgQIAAgJIgRgGQgIgCgLAAQgRAAgKAHg");
	this.shape_212.setTransform(769.1,561.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#54B5E6").s().p("AAjCJIAAhwQAAgVgJgIQgJgLgRAAQgOAAgKALQgKAHAAAWIAABwIg5AAIAAkRIA5AAIAABmQAEgGAHgHQAGgFAHgFQAIgFAGgCQAJgDALAAQAgAAASAUQASAUAAAhIAACDg");
	this.shape_213.setTransform(747.5,557.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#54B5E6").s().p("Ag7BnIAAjIIA5AAIAAAoQAGgVAQgMQAOgMAaABIAAA8IgCAAQgdAAgQARQgPASAAAiIAABLg");
	this.shape_214.setTransform(718.6,561);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgJgIgGgLQgGgNABgOIAAgBQAAgQAFgNQAHgLAKgHQALgIAPgDQAQgFARAAQAMAAANADIAWAGIAAgDQAAgSgLgKQgKgJgUAAQgQAAgNACQgPAEgMAFIgOgsQAQgHATgFQATgFAWAAQAvAAAWAYQAVAXAAAoIAAB0Ig3AAIAAgWQgKALgPAIQgMAGgWAAQgPAAgMgEgAgaASQgKAIAAANIAAAAQAAANAJAFQAIAHAOAAQAUAAALgKQAMgKAAgQIAAgJIgQgGQgJgCgMAAQgPAAgMAHg");
	this.shape_215.setTransform(699,561.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgchWIAAgyIA6AAIAAAyg");
	this.shape_216.setTransform(683.3,557.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#54B5E6").s().p("AgWCCQgQgKgJgLIAAAaIg6AAIAAkRIA6AAIAABmQAKgOAPgJQAPgKAVAAQARAAARAHQARAHAMANQANAOAIATQAIATAAAYIAAABQAAAXgIAVQgIAUgNANQgMANgRAHQgQAHgSAAQgVAAgPgJgAgSgQQgIADgIAIQgGAFgEALQgEALAAAMIAAABQAAALAEALQAEALAGAHQAIAIAIAEQAJAEAJAAQAJAAAJgEQAJgEAHgIQAGgHAEgKQAEgLAAgMIAAgBQAAgMgEgLQgDgLgHgFQgIgIgIgDQgIgEgKAAQgKAAgIAEg");
	this.shape_217.setTransform(666,557.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#54B5E6").s().p("ABgBnIAAhvQAAgVgIgJQgJgLgQAAQgRAAgIALQgKAKAAAUIAABvIg3AAIAAhvQAAgVgJgJQgIgLgRAAQgQAAgJALQgKAKABAUIAABvIg6AAIAAjJIA6AAIAAAdIALgMIAMgKQAHgGAJgCQAJgCALAAQAUgBAOAJQANAJAIAPQAOgQAQgIQAQgJAVABQAfgBASAUQATATgBAkIAACCg");
	this.shape_218.setTransform(635.7,561.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgKgIgFgLQgGgNAAgOIAAgBQABgQAFgNQAHgMALgGQAKgIAPgDQAQgFARAAQAMAAANADIAXAGIAAgDQgBgSgKgKQgMgJgTAAQgRAAgMACQgPAEgMAFIgOgsQARgHARgFQASgFAYAAQAvAAAWAYQAWAYgBAnIAAB0Ig3AAIAAgWQgKALgPAIQgMAGgWAAQgQAAgLgEgAgZASQgLAIAAANIAAAAQAAANAIAFQAJAHAOAAQASAAANgKQAMgKAAgQIAAgJIgRgGQgIgCgLAAQgRAAgKAHg");
	this.shape_219.setTransform(606.8,561.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#54B5E6").s().p("AgdBgQgTgIgPgOQgOgPgHgSQgIgSAAgXIAAAAQAAgUAIgTQAHgSAOgQQAPgOATgIQAUgJAVAAQAdAAASAJQATAJAOAQIgjAmQgJgKgLgGQgKgGgQAAQgLAAgHAEQgIAEgHAIQgHAIgDAJQgEAKAAALIAAAAQAAAMAEAJQAEALAGAHQAHAIAJAEQAIAEALAAQAPAAALgGQAJgEAMgLIAhAiQgNAPgUALQgTALgeAAQgUAAgUgJg");
	this.shape_220.setTransform(586.2,561.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#54B5E6").s().p("AgbCJIAAkRIA3AAIAAERg");
	this.shape_221.setTransform(559.6,557.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgKgIgFgLQgGgNAAgOIAAgBQABgQAFgNQAHgMALgGQAKgIAPgDQAQgFARAAQALAAAOADIAWAGIAAgDQABgSgLgKQgMgJgTAAQgRAAgMACQgPAEgMAFIgOgsQARgHARgFQATgFAXAAQAvAAAWAYQAWAYgBAnIAAB0Ig3AAIAAgWQgKALgQAIQgLAGgWAAQgQAAgLgEgAgZASQgLAIAAANIAAAAQAAANAJAFQAIAHAOAAQASAAANgKQAMgKAAgQIAAgJIgRgGQgIgCgMAAQgPAAgLAHg");
	this.shape_222.setTransform(543,561.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#54B5E6").s().p("AgvCEQgQgGgNgOQgNgNgIgUQgIgVAAgXIAAgBQAAgYAIgTQAIgTANgOQALgNASgHQARgHARAAQAVAAAPAJQAQAKAJALIAAhjIA6AAIAAERIg6AAIAAgdQgLAPgOAJQgOAJgWAAQgSAAgQgHgAgRgQQgIADgIAIQgGAFgEALQgEAKAAANIAAABQAAALAEALQAEALAGAHQAHAIAJAEQAKAEAHAAQAKAAAJgEQAJgEAHgIQAHgJADgJQAEgLAAgLIAAgBQAAgMgEgLQgDgJgHgHQgIgIgIgDQgIgEgLAAQgJAAgIAEg");
	this.shape_223.setTransform(509.2,557.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgKgJgFgKQgFgMAAgPIAAgBQAAgQAGgNQAGgMAKgGQAMgIAOgDQAPgFASAAQAMAAANADIAWAGIAAgDQAAgSgLgKQgKgJgUAAQgQAAgNACQgNAEgOAFIgOgsQARgHASgFQASgFAXAAQAvAAAWAYQAVAXAAAoIAAB0Ig3AAIAAgWQgLAMgOAHQgMAGgWAAQgQAAgLgEgAgZASQgLAIAAANIAAAAQAAANAJAFQAIAHAOAAQATAAAMgKQAMgKAAgQIAAgJQgGgDgLgDQgIgCgLAAQgQAAgLAHg");
	this.shape_224.setTransform(485.9,561.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#54B5E6").s().p("AgvCEQgQgGgNgOQgOgNgHgUQgIgTAAgZIAAgBQAAgZAIgSQAHgTAOgOQAMgNARgHQAQgHATAAQAUAAAPAJQAPAKAKALIAAhjIA5AAIAAERIg5AAIAAgdQgLAPgOAJQgPAJgUAAQgTAAgQgHgAgRgQQgIADgIAIQgHAGgEAKQgDAKAAANIAAABQAAALADALQAEAKAHAIQAIAIAIAEQAJAEAIAAQAJAAAKgEQAJgEAGgIQAIgHADgLQAEgLAAgLIAAgBQAAgMgEgLQgDgLgIgFQgHgIgIgDQgIgEgLAAQgJAAgIAEg");
	this.shape_225.setTransform(462.8,557.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhWIAAgyIA7AAIAAAyg");
	this.shape_226.setTransform(445.5,557.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#54B5E6").s().p("AglBhQgXgIgVgQIAZglQAQAMARAGQAQAGANAAQAMAAAGgEQAGgFAAgGIAAgBQAAgFgEgDQgCgDgHgDIgwgRQgMgFgIgGQgIgFgFgKQgGgJAAgQIAAgBQAAgQAGgLQAFgLALgJQAIgIAPgFQAMgEAOAAQAUAAAUAGQASAGASALIgWAoQgOgIgPgGQgPgFgLAAQgIAAgGAEQgEAEAAAGIAAABQAAAEADADQADADAGADIAaALQAMADAKAFQAKAFAJAHQAJAEAGAKQAGAKgBAOIAAABQAAARgFAMQgFALgLAJQgMAIgNAEQgNAEgRAAQgTAAgXgHg");
	this.shape_227.setTransform(430.8,561.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#54B5E6").s().p("AAiBnIAAhvQABgVgKgJQgJgLgQAAQgOAAgKALQgKAJAAAVIAABvIg5AAIAAjJIA5AAIAAAdQAFgFAGgHIANgKQAJgGAFgCQAJgCALAAQAggBASAVQASAUAAAjIAACBg");
	this.shape_228.setTransform(410.6,561.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#54B5E6").s().p("AgiBhQgSgHgPgOQgPgPgIgSQgHgTgBgYIAAAAQAAgUAIgTQAGgTAPgPQANgOASgIQASgJAVAAQAYAAATAJQARAJAOAQQAMAOAGAVQAGAUgBATIAAAPIiKAAQADAUAOAKQANAKAQAAQAQAAAKgFQANgGALgKIAgAdQgNARgVALQgVAKgbAAQgVAAgTgIgAgbguQgLALgDAUIBUAAQgDgTgKgMQgMgMgRAAQgRAAgLAMg");
	this.shape_229.setTransform(387.9,561.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#54B5E6").s().p("AgEB9QgLgDgHgHQgIgIgFgLQgEgLAAgSIAAhdIgYAAIAAgyIAYAAIAAgzIA3AAIAAAzIAwAAIAAAyIgwAAIAABTQABAVASgBQAPABANgIIAAAuQgKAGgKADQgMADgNAAQgOAAgIgDg");
	this.shape_230.setTransform(369,558.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#54B5E6").s().p("AAjBnIAAhvQAAgVgJgJQgJgLgRAAQgOAAgKALQgKAJAAAVIAABvIg5AAIAAjJIA5AAIAAAdIALgMQAGgGAHgEQAIgGAGgCQAJgCAKAAQAhgBATAVQARAUAAAjIAACBg");
	this.shape_231.setTransform(350.4,561.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhWIAAgyIA7AAIAAAyg");
	this.shape_232.setTransform(333.6,557.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#54B5E6").s().p("Ag8BnIAAjIIA6AAIAAAoQAHgVAOgMQAPgMAbABIAAA8IgEAAQgcAAgRARQgOASAAAiIAABLg");
	this.shape_233.setTransform(310.9,561);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#54B5E6").s().p("AgqBhQgUgIgPgPQgPgPgIgSQgIgTAAgWIAAAAQAAgVAIgSQAIgSAPgQQAPgOAUgIQAUgJAWAAQAWAAAVAIQAUAJAPAOQAOAOAIATQAJAUAAAUIAAAAQAAAVgJATQgIAUgPAOQgOAOgUAIQgVAJgWAAQgVAAgVgIgAgVgyQgJAEgHAIQgHAHgEAKQgDAKAAALIAAAAQAAAMADAJQAEAJAHAIQAIAIAJAFQAKAEAKAAQAMAAAKgEQAJgEAHgIQAHgHAEgKQADgMAAgKIAAAAQAAgJgEgLQgEgKgHgIQgGgHgKgFQgLgEgKAAQgLAAgKAEg");
	this.shape_234.setTransform(290.4,561.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#54B5E6").s().p("AhCB/QgJgDgNgHIATgpIAMAFQAHADAGAAQAHAAAEgDQAFgEAEgHIhQjIIA9AAIAsCHIAsiHIA8AAIhODNQgGAQgGAKQgHAMgIAFQgGAHgJADQgJADgNAAQgQAAgNgEg");
	this.shape_235.setTransform(267.2,564.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#54B5E6").s().p("AgxBjQgMgDgKgIQgKgIgFgLQgGgNAAgOIAAgBQABgQAGgNQAGgMALgGQAKgIAPgDQAQgFARAAQAMAAANADQAMACAKAEIAAgDQAAgSgKgKQgMgJgTAAQgRAAgMACQgPAEgMAFIgOgsQARgHARgFQATgFAXAAQAvAAAWAYQAWAYAAAnIAAB0Ig4AAIAAgWQgKALgQAIQgLAGgWAAQgQAAgLgEgAgZASQgLAIAAANIAAAAQAAANAIAFQAJAHAOAAQATAAAMgKQAMgKAAgQIAAgJQgGgDgLgDQgIgCgLAAQgRAAgKAHg");
	this.shape_236.setTransform(245,561.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#54B5E6").s().p("ABhBnIAAhvQgBgVgIgJQgIgLgRAAQgQAAgKALQgJAJAAAVIAABvIg3AAIAAhvQAAgVgJgJQgIgLgQAAQgRAAgJALQgJAJgBAVIAABvIg4AAIAAjJIA4AAIAAAdIALgMQAGgGAIgEQAHgGAIgCQAJgCALAAQAUgBAOAJQAOAJAHAPQAOgRAPgHQARgJAUABQAhgBASAUQARATABAkIAACCg");
	this.shape_237.setTransform(217.2,561.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#54B5E6").s().p("AgiBhQgSgHgQgOQgOgPgIgSQgIgTAAgYIAAAAQAAgUAIgTQAHgUANgOQANgOATgIQASgJAUAAQAaAAASAJQARAJAOAQQAMAOAGAVQAGATAAAUIAAABIgBAOIiLAAQAEAUANAKQAOAKARAAQAPAAAKgFQANgGALgKIAgAdQgNARgVALQgVAKgbAAQgVAAgTgIgAgbguQgLAMgEATIBVAAQgDgTgLgMQgLgMgSAAQgQAAgLAMg");
	this.shape_238.setTransform(177.6,561.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#54B5E6").s().p("AgvCEQgQgGgNgOQgNgNgIgUQgIgVAAgXIAAgBQAAgYAIgTQAIgTANgOQALgNASgHQARgHARAAQAVAAAPAJQAQAKAJALIAAhjIA6AAIAAERIg6AAIAAgdQgLAPgOAJQgPAJgVAAQgSAAgQgHgAgRgQQgIADgIAIQgGAFgEALQgEAKAAANIAAABQAAALAEALQAEALAGAHQAHAIAJAEQAJAEAIAAQAKAAAJgEQAJgEAHgIQAHgJADgJQAEgLAAgLIAAgBQAAgMgEgLQgDgJgHgHQgIgIgIgDQgIgEgLAAQgJAAgIAEg");
	this.shape_239.setTransform(153.6,557.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhWIAAgyIA7AAIAAAyg");
	this.shape_240.setTransform(125.7,557.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#54B5E6").s().p("AAjBnIAAhvQgBgVgIgJQgKgLgQAAQgOAAgKALQgJAJAAAVIAABvIg6AAIAAjJIA6AAIAAAdQAEgFAGgHIANgKQAJgGAFgCQAJgCAKAAQAhgBASAVQASAUAAAjIAACBg");
	this.shape_241.setTransform(109.1,561.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#54B5E6").s().p("AglBhQgXgIgUgQIAYgmQAQANARAGQAQAGANAAQANAAAFgFQAGgDAAgHIAAgBQAAgFgDgDQgEgDgGgDIgwgQQgKgFgKgHQgHgEgGgLQgGgKAAgPIAAgBQAAgPAGgMQAFgLAKgKQAKgHAOgFQAOgEAMAAQAUAAAUAGQAUAHAQAKIgWAoQgTgKgKgEQgPgFgLAAQgIAAgFAEQgGAEABAGIAAABQgBAEAEAEQADACAGAEIAwASQAMAGAIAGQAHADAHALQAFALAAANIAAAAQAAASgFAMQgHANgJAHQgLAIgOAEQgPAEgQAAQgTAAgWgHg");
	this.shape_242.setTransform(1454,516.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#54B5E6").s().p("AgqBhQgVgJgOgOQgOgOgIgTQgJgTAAgWIAAAAQAAgTAJgUQAIgUAPgNQAOgPAUgJQAUgHAWgBQAYABATAHQAUAJAPAOQAPAPAIASQAIASAAAWIAAAAQAAAVgIAUQgIARgPAQQgPAOgUAJQgTAHgYABQgXgBgTgHgAgVgyQgJAFgHAHQgHAIgEAKQgDAIAAAMIAAAAQAAAKAEALQAEAKAGAHQAJAJAIAEQAKAFAKgBQANABAJgFQAKgEAGgIQAHgIAEgJQADgKAAgMIAAAAQAAgKgDgKQgEgJgHgIQgIgIgJgFQgKgEgLAAQgMAAgJAEg");
	this.shape_243.setTransform(1432.9,516.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#54B5E6").s().p("AgYBlIhQjJIA9AAIArCFIAuiFIA7AAIhPDJg");
	this.shape_244.setTransform(1409.7,516.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#54B5E6").s().p("AgiBhQgUgHgOgOQgOgOgHgTQgJgTAAgYIAAAAQABgUAHgTQAHgSANgPQANgPATgJQARgHAVgBQAaABASAIQASAJANAPQAMAQAGAUQAFAVABASIgBAPIiLAAQAEATANALQAMAJATABQAOAAAMgFQALgGALgKIAiAdQgPARgUALQgUAJgcABQgUAAgUgIgAgbguQgKAMgFATIBVAAQgDgTgLgMQgLgMgSABQgPgBgMAMg");
	this.shape_245.setTransform(1387.4,516.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#54B5E6").s().p("AhJBSQgSgUAAgiIAAiCIA6AAIAABvQgBAVAKAJQAJALAPAAQAPAAAKgLQAKgKAAgUIAAhvIA5AAIAADJIg5AAIAAgdIgLAMQgHAHgGADQgIAFgGADQgJADgLgBQggAAgSgUg");
	this.shape_246.setTransform(1364.7,516.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#54B5E6").s().p("AAiBmIAAhuQAAgUgJgLQgIgKgRAAQgPAAgJAKQgKALAAAUIAABuIg5AAIAAjIIA5AAIAAAdIALgMQAGgGAHgEQAEgEAJgEQALgCAJAAQAhAAASAUQASATAAAkIAACAg");
	this.shape_247.setTransform(1342,515.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#54B5E6").s().p("AgmBhQgWgIgUgQIAYgmQAQANARAGQAQAGANAAQANAAAFgFQAGgDAAgHIAAgBQAAgFgEgDQgDgDgGgDIgwgQQgKgFgKgHQgIgFgGgKQgFgLAAgOIAAgBQAAgPAGgMQAEgLALgKQALgIANgEQANgEAOAAQATAAAUAGQAUAHAQAKIgWAoQgSgKgLgEQgPgFgLAAQgIAAgFAEQgGAFAAAFIAAABQAAAEAEAEIAJAGIAwASQAMAGAHAGQAKAEAFAKQAFAKAAAOIAAAAQAAATgFALQgHANgKAHQgKAIgOAEQgPAEgQAAQgTAAgXgHg");
	this.shape_248.setTransform(1310.3,516.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#54B5E6").s().p("AgiBhQgVgIgMgNQgPgOgIgTQgHgTgBgYIAAAAQABgTAGgUQAIgSANgPQANgPASgJQASgHAVgBQAZABATAIQATAKAMAOQAMAQAGAUQAFATAAAUIAAAPIiKAAQAEAUANAKQAMAJARABQAPAAALgFQAMgGAMgKIAgAdQgNASgWAKQgTAJgcABQgVAAgTgIgAgbguQgLAMgDATIBUAAQgDgTgLgMQgLgMgSABQgPgBgMAMg");
	this.shape_249.setTransform(1290.1,516.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#54B5E6").s().p("AgbCJIAAkRIA3AAIAAERg");
	this.shape_250.setTransform(1273.5,512.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#54B5E6").s().p("AgxBkQgMgEgKgJQgJgHgGgMQgGgMAAgPIAAAAQAAgRAHgMQAGgLAKgHQALgIAPgDQAOgFATAAQAPAAAKACIAWAGIAAgCQABgTgLgJQgLgKgUABQgPAAgOACIgbAJIgOgsQASgIAQgEQATgEAXgBQAwAAAVAYQAWAWgBAqIAABzIg3AAIAAgWQgLAMgOAGQgOAIgUgBQgNAAgOgDgAgZASQgLAHAAANIAAABQAAAMAJAGQAJAHANAAQASAAANgKQAMgKAAgPIAAgKQgIgFgJgBQgJgDgLABQgQAAgKAHg");
	this.shape_251.setTransform(1256.8,516.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#54B5E6").s().p("AhpCEIAAkEIA6AAIAAAdQAMgQANgIQAPgIAVgBQASAAAQAHQAQAHAOANQAMANAIAUQAHAUABAZIAAAAQgBAagHARQgIAUgMANQgNANgRAHQgRAHgRAAQgWAAgOgJQgPgJgKgMIAABWgAgShQQgJAFgHAHQgGAIgEAKQgEALAAAMIAAAAQAAANAEALQAEAIAGAIQAHAHAJAEQAIADAKAAQAKAAAIgDQAJgEAHgHQAGgIAEgIQAEgLAAgNIAAAAQAAgMgEgLQgEgLgGgHQgHgHgJgFQgKgDgIAAQgJAAgJADg");
	this.shape_252.setTransform(1234.5,518.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhVIAAgzIA7AAIAAAzg");
	this.shape_253.setTransform(1216.2,512.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#54B5E6").s().p("Ag7BmIAAjIIA5AAIAAApQAGgUAQgNQAQgNAYACIAAA8IgDAAQgcAAgRARQgOARAAAjIAABKg");
	this.shape_254.setTransform(1204,515.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#54B5E6").s().p("Ag1B/QgWgFgUgKIAUgrQAQAJAQAEQAPAFAVAAQAcAAAOgOQAOgOAAgbIAAgJQgNAOgPAKQgPAIgVAAQgSAAgQgGQgRgHgMgLQgMgMgIgSQgGgOgBgYIAAgBQAAgWAIgSQAIgSAMgLQALgMASgHQAPgGASAAQAVAAAQAJQAPAJALAMIAAgaIA6AAIAACaQAAAcgIAVQgGAVgOAMQgOANgWAGQgVAGgaAAQgbAAgVgGgAgShRQgJAEgHAGQgGAGgEAJQgDAJAAAJIAAABQgBAVAOANQAPALATAAQAKAAAJgEQAIgDAIgEQAHgHADgIQAEgJAAgKIAAgBQAAgJgEgJQgDgJgHgGQgGgGgKgEQgJgDgKAAQgKAAgIADg");
	this.shape_255.setTransform(1182.8,518.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#54B5E6").s().p("AgqBhQgVgJgOgOQgPgPgIgSQgIgSAAgXIAAAAQAAgVAIgSQAIgTAPgOQAPgPAUgJQATgHAXgBQAYABATAHQATAJAQAOQAOAOAIATQAJATAAAVIAAAAQAAAVgJAUQgIASgPAPQgOAOgUAJQgUAHgXABQgXgBgTgHgAgVgyQgKAFgGAHQgHAIgEAKQgDAIAAAMIAAAAQAAALADAKQAEAJAHAIQAJAJAIAEQAKAFAKgBQAMABAKgFQAKgEAGgIQAHgIAEgJQADgMAAgKIAAAAQAAgJgEgLQgEgLgHgGQgHgIgKgFQgJgEgLAAQgNAAgIAEg");
	this.shape_256.setTransform(1158.6,516.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#54B5E6").s().p("AgvCEQgRgHgNgNQgNgOgHgTQgIgTAAgaIAAAAQAAgZAIgSQAHgSANgPQAOgOAQgGQAQgHASAAQAVABAPAIQAPAKAKAMIAAhkIA6AAIAAERIg6AAIAAgdQgKAOgQAKQgOAJgVAAQgRAAgRgHgAgRgRQgJAFgHAHQgGAFgFAKQgDAMAAAMIAAAAQAAANADALQAFAKAGAIQAHAHAJAEQAIADAJAAQALAAAIgDQAJgEAHgHQAGgIAEgKQAEgLAAgNIAAAAQAAgMgEgLQgEgKgGgGQgHgHgJgFQgKgDgJAAQgHAAgKADg");
	this.shape_257.setTransform(1133.6,512.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#54B5E6").s().p("AhJBSQgSgUAAgiIAAiCIA5AAIAABvQAAAVAJAJQAKALAPAAQAQAAAJgLQAKgKAAgUIAAhvIA5AAIAADJIg5AAIAAgdIgLAMQgGAHgHADQgGAEgIAEQgJADgLgBQggAAgSgUg");
	this.shape_258.setTransform(1110.1,516.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#54B5E6").s().p("AgiBhQgVgIgMgNQgPgOgIgTQgIgTAAgYIAAAAQAAgWAHgRQAHgSAOgPQANgPATgJQARgHAVgBQAZABATAIQATAKAMAOQANASAEASQAHATgBAUIAAAPIiLAAQAEAUANAKQANAJARABQAPAAALgFQANgGAKgKIAhAdQgNARgWALQgTAJgcABQgVAAgTgIgAgbguQgLANgEASIBUAAQgBgTgMgMQgLgMgSABQgQgBgLAMg");
	this.shape_259.setTransform(1087.4,516.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#54B5E6").s().p("AgmBhQgXgJgTgPIAYgmQAQANARAGQARAGAMAAQAMAAAGgFQAGgDAAgHIAAgBQAAgFgDgDIgJgGIgxgQQgKgFgKgHQgIgEgGgLQgFgKAAgPIAAgBQAAgQAFgLQAGgLAKgKQAKgHAOgFQANgEANAAQAUAAATAGQAVAHAQAKIgWAoQgSgKgLgEQgPgFgKAAQgJAAgGAEQgEAFAAAFIAAABQAAAEADAEQADACAGAEIAwASQAMAGAIAGQAHADAHALQAFALABANIAAAAQAAASgHAMQgFANgLAHQgKAIgOAEQgQAEgPAAQgTAAgXgHg");
	this.shape_260.setTransform(1066.8,516.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#54B5E6").s().p("AhpCEIAAkEIA6AAIAAAdQALgPAOgJQAPgIAVgBQASAAAQAHQAQAHANANQAOAPAHASQAIAVAAAYIAAAAQAAAZgIASQgIATgNAOQgLANgSAHQgRAHgRAAQgVAAgPgJQgQgJgJgMIAABWgAgShQQgKAFgGAHQgHAJgDAJQgEALAAAMIAAAAQAAANAEALQADAGAHAKQAHAHAJAEQAIADAKAAQAKAAAIgDQAKgEAGgHQAHgIADgIQAEgLAAgNIAAAAQAAgMgEgLQgDgKgHgIQgGgGgKgGQgJgDgJAAQgJAAgJADg");
	this.shape_261.setTransform(1045.9,518.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#54B5E6").s().p("AgmBhQgXgJgUgPIAZgmQAQANARAGQAQAGANAAQAMAAAGgFQAGgDAAgHIAAgBQAAgFgEgDIgJgGIgwgQQgKgFgJgHQgIgEgHgLQgFgKAAgPIAAgBQAAgQAFgLQAGgLALgKQAJgHAOgFQANgEAOAAQAUAAASAGQAVAHAQAKIgWAoQgSgKgLgEQgQgFgJAAQgJAAgFAEQgGAFAAAFIAAABQABAEADAEQADACAGAEIAwASQANAGAGAGQAJADAGALQAGALAAANIAAAAQgBASgFAMQgGANgLAHQgKAIgPAEQgPAEgOAAQgUAAgXgHg");
	this.shape_262.setTransform(1012.9,516.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#54B5E6").s().p("AgxBkQgNgFgJgIQgKgHgFgMQgFgLAAgQIAAAAQAAgQAGgNQAGgLAKgHQAMgIAOgDQANgFAUAAQAPAAAKACIAWAGIAAgCQAAgTgLgJQgKgKgUABQgPAAgOACQgKACgRAHIgOgsQARgIASgEQASgEAXgBQAwAAAVAYQAVAWAAAqIAABzIg3AAIAAgWQgMANgNAFQgOAIgUgBQgOAAgNgDgAgZASQgLAHAAANIAAABQAAAMAJAGQAJAHANAAQASAAANgKQAMgJAAgQIAAgKQgIgFgJgBQgKgDgJABQgRAAgKAHg");
	this.shape_263.setTransform(992.7,516.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#54B5E6").s().p("ABhBmIAAhuQgBgUgIgLQgJgKgQAAQgRAAgJAKQgJALAAAUIAABuIg3AAIAAhuQAAgUgJgLQgIgKgRAAQgRAAgIAKQgKALAAAUIAABuIg4AAIAAjIIA4AAIAAAdIALgMIAOgKQAEgEAMgEQAJgCAKAAQAVAAAOAIQAMAJAIAPQAOgQAPgIQARgIAVAAQAgAAARASQASAUAAAkIAACBg");
	this.shape_264.setTransform(964.8,515.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#54B5E6").s().p("AgqBhQgVgJgOgOQgPgPgIgSQgIgSAAgXIAAAAQAAgVAIgSQAIgTAPgOQAPgPAUgJQATgHAXgBQAYABATAHQATAJAQAOQAOAOAIATQAJATAAAVIAAAAQAAAVgJAUQgIASgPAPQgOAOgUAJQgUAHgXABQgXgBgTgHgAgVgyQgJAFgHAHQgHAIgEAKQgDAIAAAMIAAAAQAAALADAKQAEAJAHAIQAJAJAIAEQAKAFAKgBQAMABAKgFQAKgEAGgIQAHgIAEgJQADgKAAgMIAAAAQAAgJgEgLQgEgKgGgHQgIgIgJgFQgKgEgLAAQgNAAgIAEg");
	this.shape_265.setTransform(934.9,516.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#54B5E6").s().p("AgEB9QgKgCgIgIQgIgGgEgMQgFgKAAgUIAAhdIgYAAIAAgyIAYAAIAAgzIA3AAIAAAzIAwAAIAAAyIgwAAIAABUQABATASABQAPgBAOgGIAAAuIgVAIQgKADgPAAQgNAAgJgDg");
	this.shape_266.setTransform(914.9,513.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#54B5E6").s().p("AAjBmIAAhuQAAgUgJgLQgIgKgSAAQgPAAgJAKQgJAKgBAVIAABuIg5AAIAAjIIA5AAIAAAdQAEgGAHgGIANgKQAGgEAIgEQAJgCALAAQAhAAARAUQASAUAAAjIAACAg");
	this.shape_267.setTransform(896.3,515.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#54B5E6").s().p("AgvCRIAAjIIA4AAIAADIgAgqhNIAqhDIAvAVIgvAug");
	this.shape_268.setTransform(881.4,511.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#54B5E6").s().p("AgmBhQgXgIgTgQIAYgmQAQANARAGQARAGALAAQANAAAGgFQAFgEAAgGIAAgBQAAgEgCgEIgKgGIgxgQQgJgFgKgHQgIgFgGgKQgGgLABgOIAAgBQAAgPAFgMQAHgMAJgJQALgIANgEQANgEAOAAQATAAATAGQAVAHAQAKIgWAoQgSgKgLgEQgQgFgJAAQgJAAgGAEQgFAFAAAFIAAABQAAADAEAFIAJAGIAvASQANAGAIAGQAIAFAFAJQAHALAAANIAAAAQAAASgHAMQgGANgKAHQgKAIgOAEQgQAEgPAAQgUAAgWgHg");
	this.shape_269.setTransform(864.6,516.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#54B5E6").s().p("AgrCLQgUgJgNgNQgPgOgJgTQgIgUAAgVIAAgBQAAgVAIgUQAJgRAPgOQANgOAVgJQATgIAXAAQAYAAATAIQAUAIAOAOQAPAOAJASQAIATAAAWIAAAAQAAAVgIAUQgJATgPAPQgPAOgTAIQgUAIgXAAQgXAAgUgIgAgVgHQgKAEgHAGQgHAIgCAJQgEALgBALIAAAAQABALAEALQAEAKAGAHQAIAIAJAFQAKAEAKAAQANAAAJgEQAKgFAHgHQAHgIADgKQADgJAAgMIAAgBQAAgLgDgKQgFgLgGgHQgHgFgKgFQgKgEgLAAQgMAAgJAEgAgUhPIAohDIAxAVIgvAug");
	this.shape_270.setTransform(832.8,511.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#54B5E6").s().p("AgEB9QgLgCgIgIQgHgGgFgMQgEgLAAgTIAAhdIgYAAIAAgyIAYAAIAAgzIA4AAIAAAzIAvAAIAAAyIgvAAIAABUQgBATATABQAPgBANgGIAAAuQgIAEgMAEQgKADgPAAQgNAAgJgDg");
	this.shape_271.setTransform(812.8,513.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#54B5E6").s().p("AAiBmIAAhuQAAgUgJgLQgIgKgRAAQgPAAgJAKQgKALAAAUIAABuIg5AAIAAjIIA5AAIAAAdIALgMIANgKQAEgEAKgEQAJgCAKAAQAhAAASAUQASATAAAkIAACAg");
	this.shape_272.setTransform(794.2,515.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#54B5E6").s().p("AgiBhQgUgHgOgOQgNgNgJgUQgIgTAAgYIAAAAQAAgUAIgTQAHgUANgNQANgPATgJQARgHAVgBQAaABASAIQASAJANAPQAMAQAGAUQAGATAAAUIAAABIgBAOIiLAAQAFAUAMAKQANAJASABQAOAAALgFQANgGALgKIAgAdQgOARgUALQgUAJgcABQgVAAgTgIgAgbguQgLANgEASIBVAAQgCgTgMgMQgLgMgSABQgQgBgLAMg");
	this.shape_273.setTransform(771.4,516.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#54B5E6").s().p("ABgBmIAAhuQAAgUgJgLQgIgKgQAAQgRAAgIAKQgKALAAAUIAABuIg3AAIAAhuQAAgUgJgLQgIgKgQAAQgSAAgIAKQgJALAAAUIAABuIg5AAIAAjIIA5AAIAAAdIAKgMIAOgKQAFgEAKgEQAKgCAKAAQAUAAAOAIQANAJAIAPQAOgQAPgIQARgIAUAAQAhAAASASQARAUABAkIAACBg");
	this.shape_274.setTransform(742.7,515.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhVIAAgzIA7AAIAAAzg");
	this.shape_275.setTransform(719.6,512.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#54B5E6").s().p("Ag8BmIAAjIIA6AAIAAApQAGgUAPgNQAQgNAaACIAAA8IgEAAQgcAAgRARQgOARAAAjIAABKg");
	this.shape_276.setTransform(707.4,515.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#54B5E6").s().p("AgiBhQgUgIgOgNQgOgOgHgTQgIgTAAgYIAAAAQAAgTAGgUQAIgTAOgOQAMgPASgJQATgHAUgBQAaABASAIQASAKANAOQANAQAEAUQAGATABAUIgBAPIiLAAQAEATAOALQAMAJARABQAOAAAMgFQAMgGAMgKIAhAdQgOASgVAKQgUAJgcABQgUAAgUgIgAgbguQgLAMgDATIBUAAQgDgTgLgMQgKgMgTABQgPgBgMAMg");
	this.shape_277.setTransform(687.8,516.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#54B5E6").s().p("AhoCEIAAkEIA5AAIAAAdQAKgPAPgJQAPgIAUgBQATAAAQAHQAPAGAOAOQAMANAJAUQAHAUAAAZIAAAAQAAAagHARQgJAUgMANQgMANgRAHQgRAHgSAAQgVAAgOgJQgOgIgLgNIAABWgAgShQQgKAFgFAHQgHAIgEAKQgEAKAAANIAAAAQAAAOAEAKQAEAIAHAIQAGAHAJAEQAHADALAAQAKAAAIgDQAJgEAGgHQAHgIAEgIQAEgKAAgOIAAAAQAAgNgEgKQgEgLgHgHQgFgHgKgFQgJgDgJAAQgJAAgJADg");
	this.shape_278.setTransform(664.6,518.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#54B5E6").s().p("AAnBlIgng/IgoA/Ig8AAIBHhlIhEhkIA9AAIAkA8IAmg8IA8AAIhEBjIBHBmg");
	this.shape_279.setTransform(641,516);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#54B5E6").s().p("AgiBhQgTgHgPgOQgOgOgHgTQgJgTABgYIAAAAQAAgUAHgTQAIgUANgNQAMgPATgJQARgHAWgBQAZABASAIQASAJANAPQAMAQAGAUQAFASABAVIgBAPIiLAAQAEATANALQANAJASABQAPAAAKgFQAMgGAMgKIAhAdQgOARgVALQgTAJgdABQgVAAgTgIgAgbguQgLANgDASIBUAAQgDgTgLgMQgLgMgRABQgRgBgLAMg");
	this.shape_280.setTransform(619,516.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#54B5E6").s().p("AgqBhQgVgJgOgOQgOgNgJgUQgIgSAAgXIAAAAQAAgVAIgSQAIgTAPgOQAPgPAUgJQATgHAXgBQAYABATAHQATAJAQAOQAOAOAIATQAJATAAAVIAAAAQAAAVgJAUQgIASgPAPQgNANgVAKQgUAHgXABQgXgBgTgHgAgVgyQgKAFgGAHQgGAGgFAMQgDAIAAAMIAAAAQAAALADAKQAEALAHAGQAJAJAIAEQAJAFALgBQAMABAKgFQAKgEAGgIQAHgIAEgJQADgMAAgKIAAAAQAAgJgEgLQgEgLgHgGQgGgHgLgGQgJgEgLAAQgNAAgIAEg");
	this.shape_281.setTransform(584.9,516.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#54B5E6").s().p("AAiBmIAAhuQABgUgKgLQgIgKgRAAQgPAAgKAKQgJALAAAUIAABuIg5AAIAAjIIA5AAIAAAdIALgMIANgKQAFgEAJgEQAJgCALAAQAgAAASAUQASATAAAkIAACAg");
	this.shape_282.setTransform(561.4,515.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#54B5E6").s().p("AgmBhQgWgIgVgQIAZgmQAQANARAGQARAGALAAQANAAAGgFQAFgEABgGIAAgBQAAgEgDgEIgKgGIgwgQQgKgFgKgHQgIgFgGgKQgGgLABgOIAAgBQAAgPAFgMQAHgMAJgJQALgIANgEQANgEAOAAQATAAATAGQAUAHARAKIgWAoQgSgKgMgEQgPgFgJAAQgJAAgFAEQgGAFAAAFIAAABQAAADAEAFIAJAGIAvASQANAGAHAGQAKAFAEAJQAGALABANIAAAAQgBASgGAMQgGANgKAHQgLAIgOAEQgPAEgPAAQgUAAgWgHg");
	this.shape_283.setTransform(529.7,516.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#54B5E6").s().p("AgiBhQgUgHgOgOQgOgOgIgTQgIgTAAgYIAAAAQABgUAHgTQAHgSANgPQANgPATgJQASgHAUgBQAZABATAIQATAKALAOQANAQAGAUQAFAVAAASIAAAPIiLAAQAEATANALQAMAJATABQAOAAAMgFQALgGALgKIAhAdQgOARgUALQgUAJgcABQgUAAgUgIgAgbguQgKAMgFATIBVAAQgDgTgLgMQgLgMgSABQgPgBgMAMg");
	this.shape_284.setTransform(509.5,516.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#54B5E6").s().p("AgEB9QgKgCgJgIQgHgGgFgMQgDgKAAgUIAAhdIgZAAIAAgyIAZAAIAAgzIA3AAIAAAzIAvAAIAAAyIgvAAIAABUQAAATASABQAPgBANgGIAAAuIgTAIQgLADgPAAQgMAAgKgDg");
	this.shape_285.setTransform(490.5,513.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#54B5E6").s().p("AAjBmIAAhuQAAgUgJgLQgJgKgRAAQgOAAgKAKQgKAKAAAVIAABuIg5AAIAAjIIA5AAIAAAdQAFgGAGgGIANgKQAGgEAIgEQAJgCAKAAQAiAAARAUQASATAAAkIAACAg");
	this.shape_286.setTransform(471.9,515.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#54B5E6").s().p("AgiBhQgVgIgNgNQgOgOgIgTQgHgTgBgYIAAAAQAAgTAIgUQAGgSAOgPQANgPATgJQARgHAVgBQAZABATAIQATAKALAOQANAQAFAUQAHATgBAUIAAAPIiLAAQAEAUANAKQAMAJATABQAOAAALgFQAMgGALgKIAiAdQgOASgWAKQgTAJgcABQgUAAgUgIgAgbguQgMANgDASIBVAAQgDgTgLgMQgLgMgSABQgQgBgLAMg");
	this.shape_287.setTransform(449.1,516.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#54B5E6").s().p("AgbCJIAAjIIA3AAIAADIgAgdhVIAAgzIA7AAIAAAzg");
	this.shape_288.setTransform(432.5,512.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#54B5E6").s().p("AgdBhQgTgJgPgOQgOgPgHgSQgIgTAAgWIAAAAQAAgVAIgSQAHgSAOgPQAOgPAUgJQATgHAWgBQAcABATAIQATAKAOAPIgjAmQgIgJgMgHQgKgGgQAAQgLAAgHAEQgIAFgHAHQgHAIgDAKQgEAIAAAMIAAAAQAAAMAEAKQAEAJAGAIQAHAIAJAEQAIAFALgBQAPAAAKgFQAMgHAKgJIAhAiQgOAQgTALQgTAJgeABQgVgBgTgHg");
	this.shape_289.setTransform(416.9,516.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#54B5E6").s().p("AgxBkQgNgFgJgIQgKgHgFgMQgFgMAAgPIAAAAQgBgQAHgNQAGgMAKgGQAMgIAOgDQAOgFATAAQAPAAAKACIAWAGIAAgCQAAgTgLgJQgLgKgTABQgPAAgOACQgLACgQAHIgOgsQASgIARgEQASgEAYgBQAuAAAWAYQAVAWABAqIAABzIg4AAIAAgWQgLAMgOAGQgOAIgUgBQgOAAgNgDgAgaASQgKAHAAANIAAABQAAAMAIAGQALAHAMAAQASAAANgKQAMgJAAgQIAAgKQgIgFgIgBQgLgDgKABQgQAAgLAHg");
	this.shape_290.setTransform(394.9,516.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#54B5E6").s().p("AhoCEIAAkEIA4AAIAAAdQAMgPAOgJQAPgIAUgBQASAAARAHQAPAGAOAOQAOAPAGASQAJATgBAaIAAAAQABAbgJAQQgHAUgNANQgLANgSAHQgRAHgSAAQgVAAgOgJQgOgIgMgNIAABWgAgShQQgLAGgEAGQgHAIgEAKQgEAKAAANIAAAAQAAAOAEAKQAEAIAHAIQAFAHAKAEQAHADALAAQAKAAAIgDQAKgFAFgGQAIgIADgIQAEgJAAgPIAAAAQAAgNgEgKQgDgKgIgIQgFgGgKgGQgJgDgJAAQgJAAgJADg");
	this.shape_291.setTransform(372.6,518.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#54B5E6").s().p("AgmBhQgWgIgUgQIAYgmQAQANARAGQAQAGANAAQAMAAAGgFQAGgEAAgGIAAgBQAAgFgEgDQgDgDgGgDIgwgQQgKgFgKgHQgIgFgGgKQgFgLAAgOIAAgBQAAgPAGgMQAEgLALgKQALgIANgEQANgEAOAAQATAAAUAGQAUAHAQAKIgWAoQgSgKgLgEQgPgFgLAAQgIAAgFAEQgGAFAAAFIAAABQAAAEAEAEIAJAGIAwASQAMAGAIAGQAJAFAFAJQAFAKAAAOIAAAAQAAATgFALQgHANgKAHQgKAIgOAEQgPAEgQAAQgTAAgXgHg");
	this.shape_292.setTransform(339.5,516.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#54B5E6").s().p("AgqBhQgVgJgOgOQgOgOgIgTQgJgTAAgWIAAAAQAAgTAJgUQAIgUAPgNQANgOAVgKQAUgHAWgBQAYABATAHQAUAJAPAOQAPAOAIATQAIASAAAWIAAAAQAAAVgIAUQgIARgPAQQgPAOgUAJQgTAHgYABQgXgBgTgHgAgVgyQgJAFgHAHQgHAIgEAKQgDALAAAJIAAAAQAAAKAEALQAEALAHAGQAHAJAJAEQAKAFAKgBQANABAJgFQAJgEAHgIQAGgGAFgLQADgKAAgMIAAAAQAAgKgDgKQgEgLgHgGQgIgIgJgFQgKgEgLAAQgMAAgJAEg");
	this.shape_293.setTransform(318.4,516.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#54B5E6").s().p("AgbCJIAAkRIA3AAIAAERg");
	this.shape_294.setTransform(300.9,512.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#54B5E6").s().p("AgiBhQgVgIgMgNQgPgOgIgTQgHgTgBgYIAAAAQABgTAGgUQAIgSANgPQANgPATgJQARgHAVgBQAZABATAIQASAKANAOQAMAQAGAUQAFATAAAUIAAAPIiKAAQAEAUANAKQALAJASABQAOAAAMgFQANgGALgKIAgAdQgNASgWAKQgTAJgcABQgVAAgTgIgAgbguQgLAMgDATIBUAAQgDgTgLgMQgLgMgSABQgPgBgMAMg");
	this.shape_295.setTransform(273.5,516.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#54B5E6").s().p("AgvCEQgSgHgMgNQgNgOgHgTQgIgTAAgaIAAAAQAAgZAIgSQAHgSANgPQAOgOAQgGQAQgHASAAQAVABAPAIQAPAKAKAMIAAhkIA6AAIAAERIg6AAIAAgdQgKAOgPAKQgOAJgWAAQgRAAgRgHgAgRgRQgJAFgHAHQgHAFgEAKQgDAMAAAMIAAAAQAAANADALQAEAKAHAIQAHAHAJAEQAIADAJAAQALAAAIgDQAJgEAGgHQAHgIAEgKQAEgLAAgNIAAAAQAAgMgEgLQgEgKgHgGQgGgHgJgFQgKgDgJAAQgIAAgJADg");
	this.shape_296.setTransform(249.4,512.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#54B5E6").s().p("AA2CBQgKgEgKgKQgJgKgEgLQgFgNAAgOQAAgOAFgMQAFgNAIgJQAJgJAMgFQALgFAPAAQAPAAALAFQALAFAJAJQAIAIAFANQAFAOAAANQAAAMgFAOQgEALgJALQgKAKgLAEQgLAFgPAAQgPAAgLgFgAA+AsQgGAKAAANQAAAMAHALQAHAKALAAQAMAAAGgKQAGgJAAgOQAAgOgHgJQgHgKgLAAQgMAAgGAKgAh1CDIC+kFIAtAAIi+EFgAhqgEQgKgEgKgKQgJgKgEgLQgFgNAAgOQAAgOAFgMQAEgLAJgLQAJgJAMgFQAKgFAQAAQAOAAAMAFQALAFAJAJQAIAIAFANQAEANAAAOQAAAOgEAMQgFANgIAJQgKAKgLAEQgMAEgOAAQgOAAgMgEgAhihZQgGAKAAANQAAANAHAKQAHAKALAAQAMAAAGgKQAGgJAAgOQAAgNgHgKQgHgKgLAAQgMAAgGAKg");
	this.shape_297.setTransform(210.8,512.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#54B5E6").s().p("AgvB+QgVgLgQgSQgQgUgIgXQgIgYAAgeQAAgcAJgYQAIgZAQgSQAOgSAXgLQAWgLAYAAQAZAAAXAKQAWALAPASQAPAUAIAYQAJAZAAAbQAAAbgJAaQgJAZgPASQgPASgWALQgVALgaAAQgZAAgWgKgAgXhMQgKAGgIALQgIALgDAQQgEAQAAAQQAAAQAEARQAFARAHAJQAHAMALAGQALAHALAAQAMAAALgHQALgGAIgLQAGgKAFgRQAEgQAAgRQAAgQgEgQQgEgPgIgLQgHgMgLgGQgMgHgLAAQgLAAgMAHg");
	this.shape_298.setTransform(181.5,512.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#54B5E6").s().p("Ag7B/QgUgIgRgOIAegsQAOALAOAGQAOAGAQAAQAXAAANgRQAMgRAEgbQgKAJgOAEQgNAFgPAAQgVAAgSgGQgSgFgLgLQgOgMgFgNQgIgRAAgTQABgUAHgRQAHgRANgNQAOgMATgHQARgHAXAAQALAAALACQAJABALAEQAIADAJAGQAHAEAJAJIAMAQQAHAKADALQAEALADARQABANAAAWQAAAegHAbQgIAbgOASQgOASgWALQgVALgbAAQgeAAgTgJgAghhKQgMALAAASQAAASANALQAMALAUAAQAUAAAMgLQANgLAAgRQAAgSgNgMQgMgLgUAAQgVAAgMALg");
	this.shape_299.setTransform(155.9,512.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#54B5E6").s().p("AgbCJIAAkRIA3AAIAAERg");
	this.shape_300.setTransform(127.6,512.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#54B5E6").s().p("AhjCDIAAkFIDFAAIAAAzIiLAAIAAA2IB6AAIAAAxIh6AAIAAA4ICNAAIAAAzg");
	this.shape_301.setTransform(110.4,512.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#58595B").s().p("AgeBbQgMgQAAgaIAAgBQAAgTAIgOQAHgOAMgEQgXgNAAgjIAAgCQAAgYAMgPQALgOAPABQARgBALAOQAMAPAAAYIAAACQAAAigXAOQALAEAHAOQAIAOAAATIAAABQAAAagMAQQgMAPgTAAQgSAAgMgPgAgQAQQgHAMAAAUIAAABQAAASAHAMQAGALAKAAQALAAAGgLQAHgMAAgSIAAgBQAAgUgHgMQgHgMgKAAQgJAAgHAMgAgOhQQgGALAAARIAAACQAAAQAGAMQAGALAIAAQAJAAAGgLQAGgMAAgQIAAgCQAAgRgGgLQgGgJgJgBQgIABgGAJg");
	this.shape_302.setTransform(1238.3,738.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#58595B").s().p("Ag9CKQgZgvAAhWIAAgJQAAhWAZgvQAXgtAmAAQAnAAAYAtQAYAvAABWIAAAJQAABWgYAvQgXAtgoAAQgmAAgXgtgAglhzQgPAmAABJIAAAJQAABJAPAnQAOAjAXABQAYgBAPgjQAPgoAAhIIAAgJQAAhIgPgnQgPglgYABQgXgBgOAlg");
	this.shape_303.setTransform(1222.7,747.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#58595B").s().p("AgPCzIAAlFIg3AAIAAgfICNAAIAAAfIg3AAIAAFFg");
	this.shape_304.setTransform(1205.5,747.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#58595B").s().p("AAyCzIhjkSIAAESIgfAAIAAlkIAgAAIBhEKIAAkKIAhAAIAAFkg");
	this.shape_305.setTransform(1186.9,747.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_306.setTransform(1168.4,747.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#58595B").s().p("AgPCzIAAlkIAfAAIAAFkg");
	this.shape_307.setTransform(1154.9,747.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIg/i6IAAEaIghAAIAAlkIAlAAIA7CzIA8izIAlAAIAAFkg");
	this.shape_308.setTransform(1138.1,747.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_309.setTransform(1115.4,747.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#58595B").s().p("AgPCzIAAlFIg3AAIAAgfICNAAIAAAfIg3AAIAAFFg");
	this.shape_310.setTransform(1099.2,747.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBLllIAiAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_311.setTransform(1083.1,747.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#58595B").s().p("AArCzIg4iNIgQABIgRAAIAACMIghAAIAAlkIAyAAQAugBAbAcQAdAcABA1IAAABQAAAkgPAaQgPAXgbAMIA/CWgAguAKIARAAQAfAAATgSQATgVAAgnIAAgBQAAgngUgUQgTgTgfAAIgQAAg");
	this.shape_312.setTransform(1064.1,747.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#58595B").s().p("AgPCzIAAlFIg3AAIAAgfICNAAIAAAfIg3AAIAAFFg");
	this.shape_313.setTransform(1045.7,747.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_314.setTransform(1021.9,747.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#58595B").s().p("AhRCzIAAlkIAvAAQA0gBAfAtQAhAtAABUIAAAIQAABUghAvQgfAsg0AAgAgwCUIAQAAQAjABAWgkQAXglAAhIIAAgIQAAhGgYgmQgWgjgiAAIgQAAg");
	this.shape_315.setTransform(1003,747.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#58595B").s().p("AhEClIAAgkQAjAWAaAAQASAAANgMQAMgNAAgVIAAgBQAAgTgJgTQgJgRgaglQgkgtgLgUQgNgYAAgZIAAgBQAAgiAWgXQAVgWAeAAQAdAAAaAPIAAAkQgegTgXAAQgRAAgMAMQgNANAAAUIAAABQAAARAKASQAJAQAaAkQAjAoAMAYQAMAbAAAcIAAABQAAAkgWAXQgWAVgfAAQgdAAghgSg");
	this.shape_316.setTransform(975.4,747.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_317.setTransform(956.5,747.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#58595B").s().p("AAyCzIhjkSIAAESIggAAIAAlkIAiAAIBgEKIAAkKIAhAAIAAFkg");
	this.shape_318.setTransform(935.3,747.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBLllIAiAAIBMFlgAgkA5IBHAAIgjiyg");
	this.shape_319.setTransform(914.1,747.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIg/i6IAAEaIghAAIAAlkIAlAAIA7CzIA8izIAlAAIAAFkg");
	this.shape_320.setTransform(891.5,747.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_321.setTransform(871.5,747.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#58595B").s().p("AhEClIAAgkQAjAWAZAAQATAAAMgMQANgNAAgVIAAgBQAAgUgJgSQgJgRgaglQglgsgKgVQgNgYAAgZIAAgBQAAgiAWgXQAVgWAeAAQAeAAAYAPIAAAkQgdgTgXAAQgRAAgMAMQgNANAAAUIAAABQAAARAKASQAJAQAaAkQAiAoAMAYQANAbAAAcIAAABQAAAkgWAXQgWAVgfAAQgdAAghgSg");
	this.shape_322.setTransform(854.1,747.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#58595B").s().p("Ag0CcQgVgbAAgsIAAgDQAAgfANgZQANgYATgIQgngXAAg7IAAgEQAAgpAUgZQATgYAcAAQAdAAATAYQAUAZAAApIAAAEQAAA7gnAXQAUAIAMAYQANAZAAAfIAAADQAAAsgUAbQgWAbggAAQgfAAgVgbgAgdAcQgMAUABAiIAAACQAAAhALATQAMATARAAQATAAALgTQAMgTAAghIAAgCQAAgigMgUQgMgVgSAAQgRAAgMAVgAgZiJQgLARAAAfIAAACQAAAdALATQAKAUAPAAQAQAAALgUQAJgTABgdIAAgCQgBgfgJgRQgKgRgRAAQgQAAgJARg");
	this.shape_323.setTransform(828.5,747.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#58595B").s().p("AhEClIAAgkQAjAWAaAAQASAAANgMQAMgNAAgVIAAgBQAAgTgJgTQgJgRgaglQgkgtgLgUQgNgYAAgZIAAgBQAAgiAWgXQAVgWAeAAQAdAAAaAPIAAAkQgegTgXAAQgRAAgMAMQgNANAAAUIAAABQAAARAKASQAJAQAaAkQAiAoAMAYQANAbAAAcIAAABQAAAkgWAXQgWAVgfAAQgdAAghgSg");
	this.shape_324.setTransform(803.1,747.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_325.setTransform(784.2,747.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#58595B").s().p("AArCzIg5iNIgOABIgSAAIAACMIghAAIAAlkIAyAAQAugBAbAcQAdAcAAA1IAAABQAAAkgPAaQgOAXgbAMIA/CWgAguAKIARAAQAfAAATgSQATgVAAgnIAAgBQAAgngUgUQgTgTgfAAIgQAAg");
	this.shape_326.setTransform(765.2,747.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_327.setTransform(746.8,747.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIhAi6IAAEaIggAAIAAlkIAmAAIA6CzIA8izIAkAAIAAFkg");
	this.shape_328.setTransform(725.6,747.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#58595B").s().p("AgPCzIAAlkIAfAAIAAFkg");
	this.shape_329.setTransform(708.7,747.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58595B").s().p("AArCzIg5iNIgfABIAACMIgiAAIAAlkIAxAAQAvgBAcAcQAdAcAAA1IAAABQgBAkgPAaQgPAXgaAMIA/CWgAgtAKIAQAAQAfAAATgSQATgVAAgnIAAgBQAAgngUgUQgSgTghAAIgOAAg");
	this.shape_330.setTransform(695.1,747.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#58595B").s().p("AhLCzIAAlkIAvAAQAwAAAcAdQAcAeAAA2IAAACQAAA1gcAdQgbAfgxABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgoIAAgBQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_331.setTransform(675.8,747.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#58595B").s().p("AhEClIAAgkQAjAWAaAAQASAAANgMQAMgNAAgVIAAgBQAAgTgJgTQgJgRgaglQgkgtgLgUQgNgYAAgZIAAgBQAAgiAWgXQAVgWAeAAQAdAAAaAPIAAAkQgegTgXAAQgRAAgMAMQgNANAAAUIAAABQAAARAKASQAJAQAaAkQAiAoAMAYQANAbAAAcIAAABQAAAkgWAXQgWAVgfAAQgdAAghgSg");
	this.shape_332.setTransform(648.7,747.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_333.setTransform(629.8,747.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#58595B").s().p("Ag5CzIAAlkIAhAAIAAFEIBSAAIAAAgg");
	this.shape_334.setTransform(613.4,747.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_335.setTransform(588.9,747.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#58595B").s().p("AgQCzIAAlFIg2AAIAAgfICMAAIAAAfIg2AAIAAFFg");
	this.shape_336.setTransform(572.2,747.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#58595B").s().p("AAzCzIhkkSIAAESIggAAIAAlkIAiAAIBhEKIAAkKIAfAAIAAFkg");
	this.shape_337.setTransform(553.6,747.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBLllIAiAAIBMFlgAgkA5IBHAAIgjiyg");
	this.shape_338.setTransform(532.4,747.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#58595B").s().p("AAqCzIg3iNIgQABIgRAAIAACMIghAAIAAlkIAxAAQAvgBAbAcQAeAcAAA1IAAABQAAAkgQAaQgOAXgbAMIA/CWgAguAKIARAAQAfAAATgSQATgVAAgnIAAgBQAAgngUgUQgTgTgfAAIgQAAg");
	this.shape_339.setTransform(513.4,747.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#58595B").s().p("Ag5CbQgWgbAAgvIAAkFIAhAAIAAEHQAAAhANARQAMARAVAAQAVAAANgRQANgSAAggIAAkHIAhAAIAAEFQAAAvgWAbQgWAagkAAQgkAAgVgag");
	this.shape_340.setTransform(492.3,747.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#58595B").s().p("AhRCzIAAlkIAvAAQA0gBAfAtQAhAtAABUIAAAIQAABUghAvQgfAsg0AAgAgvCUIAPAAQAjABAWgkQAXglAAhIIAAgIQAAhGgYgmQgWgjgjAAIgOAAg");
	this.shape_341.setTransform(471.8,747.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#58595B").s().p("AhRCzIAAlkIAvAAQA0gBAfAtQAhAtAABUIAAAIQAABUghAvQgfAsg0AAgAgvCUIAPAAQAjABAWgkQAXglAAhIIAAgIQAAhGgYgmQgWgjgjAAIgOAAg");
	this.shape_342.setTransform(442.8,747.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA5IBGAAIgjiyg");
	this.shape_343.setTransform(421.6,747.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#58595B").s().p("AhRCzIAAlkIAvAAQA0gBAfAtQAhAtAABUIAAAIQAABUghAvQgfAsg0AAgAgvCUIAPAAQAjABAWgkQAXglAAhIIAAgIQAAhGgYgmQgWgjgjAAIgOAAg");
	this.shape_344.setTransform(402.5,747.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#58595B").s().p("AgPCzIAAlkIAfAAIAAFkg");
	this.shape_345.setTransform(387.1,747.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#58595B").s().p("AhEClIAAgkQAjAWAaAAQASAAANgMQAMgNAAgVIAAgBQAAgUgJgSQgJgRgaglQgkgtgLgUQgNgYAAgZIAAgBQAAgiAWgXQAWgWAdAAQAdAAAaAPIAAAkQgegTgXAAQgRAAgMAMQgMANAAAUIAAABQAAARAJASQAJAQAaAkQAjAoAMAYQAMAbAAAcIAAABQAAAkgWAXQgWAVgfAAQgdAAghgSg");
	this.shape_346.setTransform(374.2,747.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#58595B").s().p("AAzCzIhkkSIAAESIggAAIAAlkIAiAAIBhEKIAAkKIAfAAIAAFkg");
	this.shape_347.setTransform(354.9,747.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#58595B").s().p("Ag+CzIAAlkIB8AAIAAAfIhbAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_348.setTransform(336.4,747.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#58595B").s().p("AgPCzIAAlFIg2AAIAAgfICMAAIAAAfIg3AAIAAFFg");
	this.shape_349.setTransform(319.7,747.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#58595B").s().p("AAyCzIhjkSIAAESIggAAIAAlkIAhAAIBhEKIAAkKIAhAAIAAFkg");
	this.shape_350.setTransform(301.1,747.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#58595B").s().p("AgPCzIAAlkIAfAAIAAFkg");
	this.shape_351.setTransform(285.7,747.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#58595B").s().p("AArCzIg5iNIgOABIgSAAIAACMIghAAIAAlkIAyAAQAugBAbAcQAdAcAAA1IAAABQAAAkgPAaQgOAXgbAMIA/CWgAguAKIARAAQAfAAATgSQATgWAAgmIAAgBQAAgngUgUQgTgTggAAIgPAAg");
	this.shape_352.setTransform(263.7,747.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#58595B").s().p("Ag9CKQgZgvAAhWIAAgJQAAhWAZgvQAXgtAmAAQAnAAAXAtQAZAvAABWIAAAJQAABXgZAuQgXAtgnAAQgmAAgXgtgAglhzQgQAmAABJIAAAJQAABIAQAoQAOAjAXABQAYgBAOgjQAQgnAAhJIAAgJQAAhIgQgnQgOglgYABQgXgBgOAlg");
	this.shape_353.setTransform(242.6,747.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#58595B").s().p("AgPCzIAAiXIhJjNIAkAAIA0CkIA3ikIAhAAIhIDNIAACXg");
	this.shape_354.setTransform(223.9,747.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#58595B").s().p("AA7CzIgThcIhQAAIgTBcIghAAIBLllIAiAAIBMFlgAgkA5IBHAAIgjiyg");
	this.shape_355.setTransform(206.9,747.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIhAi6IAAEaIgfAAIAAlkIAkAAIA7CzIA7izIAlAAIAAFkg");
	this.shape_356.setTransform(184.2,747.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#58595B").s().p("Ag+CzIAAlkIB7AAIAAAfIhaAAIAACDIBSAAIAAAdIhSAAIAACFIBcAAIAAAgg");
	this.shape_357.setTransform(155.9,747.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#58595B").s().p("AhRCzIAAlkIAvAAQA0gBAfAtQAhAtgBBUIAAAIQABBUghAvQgfAsg0AAgAgvCUIAPAAQAjABAWgkQAXglAAhIIAAgIQAAhGgYgmQgWgjgjAAIgOAAg");
	this.shape_358.setTransform(137,747.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#58595B").s().p("Ag9CKQgZgvAAhWIAAgJQAAhWAZgvQAXgtAmAAQAnAAAXAtQAZAvAABWIAAAJQAABWgZAvQgXAtgnAAQgmAAgXgtgAglhzQgPAmAABJIAAAJQAABIAPAoQAPAjAWABQAYgBAOgjQAQgoAAhIIAAgJQAAhIgQgnQgOglgYABQgWgBgPAlg");
	this.shape_359.setTransform(107.3,747.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#58595B").s().p("AhEClIAAgkQAjAVAZABQATgBAMgMQANgMAAgVIAAgCQAAgTgJgSQgJgSgagkQglgtgKgUQgNgXAAgbIAAgBQAAgiAWgWQAVgWAeAAQAdAAAZAOIAAAlQgcgTgYAAQgRAAgMANQgNAMAAATIAAABQAAASAKASQAJAQAaAkQAiAnAMAZQANAaAAAdIAAABQAAAkgWAWQgWAWgfAAQgdAAghgSg");
	this.shape_360.setTransform(1350.6,686.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#58595B").s().p("Ag9CKQgZgwAAhVIAAgJQAAhWAZgvQAXgtAmAAQAnAAAYAtQAYAuAABXIAAAJQAABWgYAvQgYAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAPAlAWgBQAYABAPglQAPgnAAhIIAAgJQAAhJgPgnQgPgkgYAAQgWAAgPAkg");
	this.shape_361.setTransform(1331.7,686.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#58595B").s().p("AgQCzIhHlmIAiAAIA1EmIA3kmIAhAAIhIFmg");
	this.shape_362.setTransform(1312.6,686.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_363.setTransform(1295,686.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#58595B").s().p("Ag5CbQgWgbAAgvIAAkFIAgAAIAAEHQAAAgAOASQAMARAVAAQAVAAAMgRQANgSABggIAAkHIAhAAIAAEFQAAAvgXAbQgVAagkAAQgkAAgVgag");
	this.shape_364.setTransform(1275.6,686.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#58595B").s().p("AAyCzIhjkTIAAETIggAAIAAllIAhAAIBhELIAAkLIAhAAIAAFlg");
	this.shape_365.setTransform(1254.2,686.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#58595B").s().p("AhEClIAAgkQAjAVAaABQASgBANgMQAMgMAAgVIAAgCQAAgTgJgSQgJgSgagkQgkgtgLgUQgNgXAAgbIAAgBQAAgiAWgWQAWgWAdAAQAdAAAaAOIAAAlQgdgTgYAAQgRAAgMANQgMAMAAATIAAABQAAATAJARQAJAQAaAkQAiAnANAZQAMAaAAAdIAAABQAAAkgWAWQgWAWgfAAQgdAAghgSg");
	this.shape_366.setTransform(1226.6,686.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_367.setTransform(1210.4,686.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#58595B").s().p("Ag5CzIAAllIAhAAIAAFFIBSAAIAAAgg");
	this.shape_368.setTransform(1195.2,686.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBLllIAiAAIBMFlgAgkA4IBHAAIgjiyg");
	this.shape_369.setTransform(1176.3,686);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#58595B").s().p("AhLCzIAAllIAvAAQAvAAAcAeQAdAfAAA2IAAABQAAA1gcAdQgcAfgwABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_370.setTransform(1159.8,686.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#58595B").s().p("AgPCzIAAllIAfAAIAAFlg");
	this.shape_371.setTransform(1144.9,686.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#58595B").s().p("AArCzIg4iNQgFABgLAAIgRAAIAACMIghAAIAAllIAyAAQAuABAbAbQAeAcAAA0IAAACQAAAkgPAaQgPAWgbAMIA/CXgAguAJIARAAQAfAAATgRQATgVAAgnIAAgBQAAgogUgTQgTgTgfAAIgQAAg");
	this.shape_372.setTransform(1131.3,686.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#58595B").s().p("AgvCKQgggwAAhVIAAgJQAAhUAhgwQAegsAuAAQAZgBAUALIAAAkQgXgPgVAAQggABgVAjQgYAnAABGIAAAJQAABIAXAoQAVAjAgAAQAIAAALgFIAAh/IgvAAIAAgcIBOAAIAACxQgZANgbgBQgtAAgegrg");
	this.shape_373.setTransform(1110.1,686.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#58595B").s().p("Ag9CKQgZgwAAhVIAAgJQAAhWAZgvQAXgtAmAAQAnAAAXAtQAZAvAABWIAAAJQAABWgZAvQgXAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAPAlAWgBQAYABAPglQAPgnAAhIIAAgJQAAhJgPgnQgPgkgYAAQgWAAgPAkg");
	this.shape_374.setTransform(1089.8,686.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#58595B").s().p("AhRCzIAAllIAvAAQA0ABAfArQAhAuAABUIAAAJQAABTghAuQgfAsg0ABgAgvCUIAPAAQAjAAAWgjQAXgmAAhGIAAgJQAAhHgYgmQgWgigigBIgPAAg");
	this.shape_375.setTransform(1069.5,686.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#58595B").s().p("Ag5CbQgWgbAAgvIAAkFIAgAAIAAEHQAAAgAOASQAMARAVAAQAVAAANgRQANgSAAggIAAkHIAhAAIAAEFQAAAvgWAbQgWAagkAAQgkAAgVgag");
	this.shape_376.setTransform(1048.2,686.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_377.setTransform(1030,686.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#58595B").s().p("AhEClIAAgkQAjAVAZABQATgBAMgMQANgMAAgVIAAgCQAAgTgJgSQgJgSgagkQglgtgKgUQgNgXAAgbIAAgBQAAgiAWgWQAVgWAeAAQAdAAAZAOIAAAlQgcgTgYAAQgRAAgMANQgNAMAAATIAAABQAAATAKARQAJAQAaAkQAiAnAMAZQANAaAAAdIAAABQAAAkgWAWQgWAWgfAAQgeAAgggSg");
	this.shape_378.setTransform(1012.6,686.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#58595B").s().p("AhLCzIAAllIAwAAQAuAAAcAeQAdAfAAA2IAAABQAAA1gcAdQgcAfgvABIgPAAIAAB/gAgqAVIAQAAQAgAAATgVQASgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_379.setTransform(995.4,686.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#58595B").s().p("AhEClIAAgkQAjAVAZABQATgBANgMQAMgLAAgWIAAgCQAAgTgJgSQgJgSgagkQglgtgKgUQgNgXAAgbIAAgBQAAgiAWgWQAVgWAeAAQAdAAAaAOIAAAlQgdgTgYAAQgRAAgMANQgNAMAAATIAAABQAAASAKASQAJAQAaAkQAiAnAMAZQANAaAAAdIAAABQAAAkgWAWQgWAWgfAAQgdAAghgSg");
	this.shape_380.setTransform(968.4,686.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#58595B").s().p("AA7CzIgThcIhQAAIgTBcIghAAIBLllIAiAAIBMFlgAgkA4IBHAAIgjiyg");
	this.shape_381.setTransform(949.5,686);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIhAi6IAAEaIggAAIAAllIAlAAIA7C0IA7i0IAmAAIAAFlg");
	this.shape_382.setTransform(926.8,686.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#58595B").s().p("Ag9CKQgZgwAAhVIAAgJQAAhWAZgvQAXgtAmAAQAnAAAXAtQAZAvAABWIAAAJQAABWgZAvQgXAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAPAlAWgBQAYABAOglQAQgnAAhIIAAgJQAAhJgQgnQgOgkgYAAQgWAAgPAkg");
	this.shape_383.setTransform(904,686.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#58595B").s().p("AgPCzIAAlFIg3AAIAAggICNAAIAAAgIg3AAIAAFFg");
	this.shape_384.setTransform(886.7,686.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#58595B").s().p("AAyCzIhjkTIAAETIggAAIAAllIAiAAIBgELIAAkLIAhAAIAAFlg");
	this.shape_385.setTransform(868.2,686.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#58595B").s().p("AgiDiIAAlkIAiAAIAAFkgAgiiXIAmhKIAfAQIgwA6g");
	this.shape_386.setTransform(854.6,681.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#58595B").s().p("AhEClIAAgkQAjAVAaABQASgBAMgMQANgMAAgVIAAgCQAAgTgJgSQgJgSgagkQglgtgLgUQgMgXAAgbIAAgBQAAgiAWgWQAVgWAeAAQAcAAAaAOIAAAlQgcgTgYAAQgRAAgMANQgMAMAAATIAAABQgBATAKARQAJAQAaAkQAjAnALAZQANAaAAAdIAAABQAAAkgWAWQgVAWggAAQgeAAgggSg");
	this.shape_387.setTransform(839.9,686.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#58595B").s().p("AAyCzIhjkTIAAETIggAAIAAllIAiAAIBgELIAAkLIAhAAIAAFlg");
	this.shape_388.setTransform(812.2,686.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#58595B").s().p("Ag9CKQgZgvAAhWIAAgJQAAhWAZgvQAXgtAmAAQAnAAAYAtQAYAvAABWIAAAJQAABWgYAvQgYAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAOAlAXgBQAYABAOglQAQgnAAhIIAAgJQAAhJgQgnQgOgkgYAAQgXAAgOAkg");
	this.shape_389.setTransform(790.9,686.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#58595B").s().p("AArCzIg5iNQgEABgKAAIgRAAIAACMIgiAAIAAllIAyAAQAuABAbAbQAdAcAAA0IAAACQABAkgPAaQgPAWgbAMIA/CXgAgtAJIAQAAQAfAAATgRQATgWABgmIAAgBQgBgogUgTQgTgTggAAIgOAAg");
	this.shape_390.setTransform(771.3,686.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBLllIAiAAIBMFlgAgkA4IBHAAIgjiyg");
	this.shape_391.setTransform(750.3,686);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#58595B").s().p("AgQCzIAAlFIg2AAIAAggICMAAIAAAgIg2AAIAAFFg");
	this.shape_392.setTransform(734.2,686.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#58595B").s().p("AAyCzIhjkTIAAETIggAAIAAllIAiAAIBgELIAAkLIAhAAIAAFlg");
	this.shape_393.setTransform(715.6,686.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#58595B").s().p("Ag+CzIAAllIB7AAIAAAgIhaAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_394.setTransform(697.1,686.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#58595B").s().p("ABACzIAAkaIhAC6IAAAAIhAi6IAAEaIgfAAIAAllIAkAAIA7C0IA8i0IAkAAIAAFlg");
	this.shape_395.setTransform(675.9,686.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#58595B").s().p("AgPCzIAAllIAfAAIAAFlg");
	this.shape_396.setTransform(659,686.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#58595B").s().p("AAqCzIg3iNQgFABgLAAIgRAAIAACMIghAAIAAllIAxAAQAvABAcAbQAdAcAAA0IAAACQgBAkgPAaQgOAWgbAMIA/CXgAguAJIARAAQAfAAATgRQATgVAAgnIAAgBQAAgogUgTQgTgTggAAIgPAAg");
	this.shape_397.setTransform(645.4,686.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_398.setTransform(627,686.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#58595B").s().p("AhLCzIAAllIAvAAQAvAAAcAeQAdAfAAA2IAAABQAAA1gcAdQgcAfgwABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_399.setTransform(609.4,686.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#58595B").s().p("AAyCzIgyiYIgyCYIgiAAIBCi6Ig8irIAjAAIArCGIAtiGIAhAAIg6CqIBAC7g");
	this.shape_400.setTransform(589.8,686.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_401.setTransform(572.7,686.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_402.setTransform(547.7,686.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#58595B").s().p("Ag5CbQgWgbAAgvIAAkFIAgAAIAAEHQABAgANASQAMARAVAAQAVAAAMgRQAOgSAAggIAAkHIAhAAIAAEFQAAAvgWAbQgWAagkAAQgkAAgVgag");
	this.shape_403.setTransform(528.3,686.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#58595B").s().p("AAtCaQgUAbgaAAQgoAAgYgtQgZgwAAhWIAAgIQAAhWAZgwQAYgtAnAAQAmAAAXAtQAZAwAABWIAAAIQAABRgYAxIAfAiIgUATgAgph2QgPAnAABJIAAAIQAABLAQAnQAOAiAZABQAQAAAMgRIghgpIARgTIAbAiQAMgmAAhEIAAgIQAAhJgPgnQgPgkgWAAQgYAAgPAkg");
	this.shape_404.setTransform(507.4,686.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#58595B").s().p("AhEClIAAgkQAkAVAZABQASgBAMgMQANgMAAgVIAAgCQAAgTgJgSQgJgSgagkQglgtgLgUQgMgXAAgbIAAgBQAAgiAWgWQAVgWAeAAQAcAAAaAOIAAAlQgcgTgYAAQgRAAgMANQgMAMAAATIAAABQAAATAJARQAJAQAaAkQAjAnALAZQANAaAAAdIAAABQAAAkgWAWQgVAWggAAQgeAAgggSg");
	this.shape_405.setTransform(479.9,686.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_406.setTransform(463.6,686.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#58595B").s().p("AgPCzIAAlFIg2AAIAAggICLAAIAAAgIg2AAIAAFFg");
	this.shape_407.setTransform(446.9,686.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#58595B").s().p("AAyCzIhjkTIAAETIggAAIAAllIAhAAIBiELIAAkLIAgAAIAAFlg");
	this.shape_408.setTransform(428.4,686.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#58595B").s().p("Ag+CzIAAllIB8AAIAAAgIhbAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_409.setTransform(409.8,686.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#58595B").s().p("AgPCzIAAllIAfAAIAAFlg");
	this.shape_410.setTransform(396.3,686.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#58595B").s().p("AgnCJQgcguAAhWIAAgJQAAhWAeguQAbgsAoABQAUgBAQAJIAAAjQgSgMgQAAQgdABgQAiQgUAnAABGIAAAJQAABGAUAnQAQAiAdAAQARAAASgLIAAAhQgQAKgXAAQgpAAgagrg");
	this.shape_411.setTransform(383.3,686.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#58595B").s().p("AA7CzIgThcIhRAAIgSBcIghAAIBMllIAhAAIBMFlgAgjA4IBGAAIgjiyg");
	this.shape_412.setTransform(365.7,686);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#58595B").s().p("AhLCzIAAllIAvAAQAvAAAcAeQAdAfAAA2IAAABQAAA1gcAdQgcAfgwABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_413.setTransform(349.2,686.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#58595B").s().p("Ag+CzIAAllIB7AAIAAAgIhaAAIAACCIBSAAIAAAdIhSAAIAACGIBcAAIAAAgg");
	this.shape_414.setTransform(322.9,686.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#58595B").s().p("AhRCzIAAllIAvAAQA0ABAfArQAhAuAABUIAAAJQAABTghAuQgfAsg0ABgAgvCUIAPAAQAjAAAWgjQAXgmAAhGIAAgJQAAhHgYgmQgWgigjgBIgOAAg");
	this.shape_415.setTransform(304,686.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#58595B").s().p("AAzCzIhkkTIAAETIgfAAIAAllIAhAAIBhELIAAkLIAfAAIAAFlg");
	this.shape_416.setTransform(274.1,686.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#58595B").s().p("Ag9C4QgZgwAAhWIAAgLQAAhUAZgvQAXgtAmAAQAnAAAXAtQAZAvAABUIAAALQAABWgZAwQgXAsgnAAQgmAAgXgsgAglhGQgPAnAABGIAAALQAABJAPAnQAPAkAWAAQAYAAAOgkQAQgnAAhJIAAgLQAAhGgQgnQgOgkgYAAQgWAAgPAkgAgNiZIAmhKIAfAQIgyA6g");
	this.shape_417.setTransform(252.7,681.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#58595B").s().p("AgPCzIAAllIAfAAIAAFlg");
	this.shape_418.setTransform(237.7,686.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#58595B").s().p("AgmCJQgcguAAhWIAAgJQAAhWAdguQAagsApABQATgBARAJIAAAjQgSgMgQAAQgeABgPAiQgUAnAABGIAAAJQAABGAUAnQAPAiAeAAQAQAAAUgLIAAAhQgRAKgXAAQgpAAgZgrg");
	this.shape_419.setTransform(224.8,686.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#58595B").s().p("AArCzIg5iNQgEABgKAAIgRAAIAACMIgiAAIAAllIAyAAQAuABAbAbQAdAcAAA0IAAACQAAAkgOAaQgPAWgbAMIA/CXgAgtAJIAQAAQAfAAASgRQAUgVAAgnIAAgBQAAgogUgTQgTgTgfAAIgPAAg");
	this.shape_420.setTransform(207.1,686.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#58595B").s().p("Ag9CKQgZgwAAhVIAAgJQAAhWAZgvQAXgtAmAAQAnAAAXAtQAZAvAABWIAAAJQAABWgZAvQgXAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAPAlAWgBQAYABAPglQAPgnAAhIIAAgJQAAhJgPgnQgPgkgYAAQgWAAgPAkg");
	this.shape_421.setTransform(185.9,686.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#58595B").s().p("AhLCzIAAllIAvAAQAvAAAcAeQAdAfAAA2IAAABQAAA1gcAdQgcAfgwABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_422.setTransform(166.8,686.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#58595B").s().p("Ag9CKQgZgwAAhVIAAgJQAAhWAZgvQAXgtAmAAQAnAAAYAtQAYAuAABXIAAAJQAABWgYAvQgYAtgnAAQgmAAgXgtgAglh0QgPAnAABJIAAAJQAABIAPAnQAPAlAWgBQAYABAPglQAPgnAAhIIAAgJQAAhJgPgnQgPgkgYAAQgWAAgPAkg");
	this.shape_423.setTransform(146,686.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#58595B").s().p("AArCzIg5iNQgEABgKAAIgRAAIAACMIgiAAIAAllIAyAAQAuABAbAbQAdAcAAA0IAAACQABAkgPAaQgPAWgbAMIA/CXgAgtAJIAQAAQAfAAASgRQAUgVAAgnIAAgBQAAgogUgTQgTgTggAAIgOAAg");
	this.shape_424.setTransform(126.5,686.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#58595B").s().p("AhLCzIAAllIAvAAQAwAAAcAeQAcAfAAA2IAAABQAAA1gcAdQgcAfgwABIgOAAIAAB/gAgqAVIAQAAQAgAAASgVQATgVAAgpIAAAAQAAgpgTgWQgTgWgfAAIgQAAg");
	this.shape_425.setTransform(107.2,686.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#67A289").s().p("EhqwAA3IAAhsMDVhAAAIAABsg");
	this.shape_426.setTransform(780.3,796.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#67A289").s().p("EhqwAA2IAAhrMDVhAAAIAABrg");
	this.shape_427.setTransform(780.3,468.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#58595B").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_428.setTransform(994.6,939.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#58595B").s().p("AgbBQQgSgbAAgyIAAgFQAAgwATgcQARgaAaAAQAOAAAMAHIAAAUQgOgIgMAAQgRAAgMAVQgOAXAAAnIAAAFQAAAqAOAWQAMAUARAAQAGAAAFgCIAAhKIgbAAIAAgPIAtAAIAABmQgOAHgQAAQgaAAgRgZg");
	this.shape_429.setTransform(986.1,930.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#58595B").s().p("AAiBoIgLg2IguAAIgKA2IgUAAIAsjPIATAAIArDPgAgUAgIAoAAIgUhmg");
	this.shape_430.setTransform(975.1,930.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAPAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAGAJAKAAQAIAAAIgKQAHgKAAgOIAAgdQgNgEgJAAQgKAAgGAHg");
	this.shape_431.setTransform(958.8,932.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#58595B").s().p("AA2BPIAAhrQAAgigVAAQgLAAgGAKQgHAKAAAQIAABpIgRAAIAAhrQAAgigVAAQgKAAgHAKQgHAKAAAQIAABpIgSAAIAAiaIASAAIAAAVQALgYATAAQAVAAAHAYQALgYAWAAQAPAAAKAMQAJANAAAWIAABug");
	this.shape_432.setTransform(945.4,932.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAXABIAAAVIAAAAQgPAAgIAKQgIAKAAATIAABhg");
	this.shape_433.setTransform(933.6,932.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAOAGIAAgRQAAgfgZAAQgOAAgPAGIAAgRQAPgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgdQgMgEgJAAQgKAAgGAHg");
	this.shape_434.setTransform(924.2,932.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#58595B").s().p("AAXBoIAAhrQAAgigWAAQgJAAgGAKQgIAKAAAQIAABpIgSAAIAAjPIASAAIAABLQAKgZATAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_435.setTransform(913.9,930);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#58595B").s().p("AgrBnIAAjNIAcAAQAaAAARARQAQASAAAfIAAAAQAAAfgQAQQgQASgbABIgIAAIAABJgAgXAMIAJAAQARAAALgMQALgMgBgXIAAgBQAAgXgLgNQgLgNgQAAIgJAAg");
	this.shape_436.setTransform(903.3,930.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#58595B").s().p("AgZBPIAAibIATAAIAAAWQAIgZAXABIAAAVIgBAAQgOAAgIAKQgIAKAAATIAABhg");
	this.shape_437.setTransform(889.5,932.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAgmAOgVQAMgUAQAAQAUAAALAUQALAUABAlIAAAKIhCAAQAAAaALAPQAJANANAAQAMAAAPgJIACASQgPAJgRAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQgBgZgGgPQgHgQgLAAQgJAAgGAOg");
	this.shape_438.setTransform(880.3,932.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#58595B").s().p("AgRBhIAKgpIgliYIATAAIAZB4IAbh4IASAAIgtDBg");
	this.shape_439.setTransform(870.6,934.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOASAAQAJAAAOAGIAAgRQAAgfgaAAQgNAAgPAGIAAgRQAPgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgNgEgIAAQgKAAgGAHg");
	this.shape_440.setTransform(860.4,932.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#58595B").s().p("AgrBnIAAjNIAcAAQAYAAAQANQAQAPAAAYIAAABQAAAlgjAMQAmAJAAAmIAAABQAAAagSAPQgSAOgbAAgAgYBVIAGAAQATAAAMgJQAMgKAAgTIAAgBQAAgSgMgLQgLgKgSAAIgIAAgAgYgIIAHAAQASAAALgLQAKgKAAgSIAAgBQAAgRgKgKQgLgKgPAAIgKAAg");
	this.shape_441.setTransform(850,930.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#58595B").s().p("AgbA9QgPgVAAglIAAgDQAAgmAOgVQAMgUAQAAQAUAAALAUQAMAUgBAlIAAAKIhBAAQAAAaALAPQAJANANAAQAMAAAPgJIACASQgPAJgRAAQgUAAgOgTgAgPgwQgIAPAAAbIAvAAQAAgZgGgPQgHgQgLAAQgIAAgHAOg");
	this.shape_442.setTransform(834.1,932.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#58595B").s().p("AgfBXQgMgWAAglIAAgHQAAgjAMgWQAKgSARgBQASAAALAeIAAhQIATAAIAADQIgTAAIAAgbQgLAegSgBQgRAAgKgSgAgRgVQgHAQAAAbIAAAGQAAAcAHAQQAHAQAKAAQAKAAAIgPQAIgRAAgcIAAgHQAAgagIgQQgIgQgKAAQgKAAgHAQg");
	this.shape_443.setTransform(823.1,930.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAOAGIAAgRQAAgfgZAAQgOAAgPAGIAAgRQAPgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgdQgMgEgJAAQgKAAgGAHg");
	this.shape_444.setTransform(807.5,932.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#58595B").s().p("AgfBXQgMgWAAglIAAgHQAAgjAMgWQAKgSARgBQASAAALAeIAAhQIATAAIAADQIgTAAIAAgbQgLAegSgBQgRAAgKgSgAgRgVQgIAQAAAbIAAAGQAAAcAIAQQAHAQAKAAQAKAAAIgPQAIgRAAgcIAAgHQAAgagIgQQgIgQgKAAQgKAAgHAQg");
	this.shape_445.setTransform(796.8,930.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAPAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgJAYgTAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAGAJAKAAQAIAAAIgKQAHgKAAgOIAAgdQgNgEgJAAQgKAAgGAHg");
	this.shape_446.setTransform(786,932.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAJgZAWABIAAAVIAAAAQgPAAgJAKQgHAKAAATIAABhg");
	this.shape_447.setTransform(778.6,932.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAIADAEQAEADAHAAQAGAAADgCIAAAQQgGADgHAAQgbAAAAgcg");
	this.shape_448.setTransform(771.1,930.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#58595B").s().p("AgiBIIAAgTQASAKAOAAQAHAAAFgGQAGgFAAgJIAAgBQAAgOgVgWQgQgNgGgLQgHgLAAgNIAAAAQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgNgHgNAAQgGAAgGAFQgFAFAAAJIAAAAQAAAIAFAHQAEAHAMANQAQAOAGALQAHAMAAAMIAAABQAAARgMALQgLAKgOAAQgPAAgRgIg");
	this.shape_449.setTransform(763.8,932.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#58595B").s().p("AgIBoIAAiaIARAAIAACagAgIhPIAAgYIARAAIAAAYg");
	this.shape_450.setTransform(757.2,930);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#58595B").s().p("AgkBdIAAgSQASAHAPAAQAcAAAAgeIAAgfQgLAegSAAQgQAAgLgSQgMgVAAghIAAgCQAAgkAMgUQALgTAQAAQASAAALAeIAAgbIATAAIAACTQAAAvguAAQgSAAgQgGgAgRhCQgHAQAAAbIAAACQAAAYAHAQQAHAPAKAAQAKAAAHgPQAJgQAAgYIAAgCQAAgagJgQQgHgPgKAAQgKAAgHAOg");
	this.shape_451.setTransform(748.9,934.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#58595B").s().p("AgaA9QgPgVAAglIAAgDQAAgmANgVQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQABAaAKAPQAJANANAAQAMAAAPgJIACASQgPAJgRAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgPQgHgQgKAAQgJAAgHAOg");
	this.shape_452.setTransform(738.3,932.7);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAYABIAAAVIgBAAQgPAAgJAKQgHAKAAATIAABhg");
	this.shape_453.setTransform(730.6,932.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOASAAQAJAAAOAGIAAgRQAAgfgZAAQgOAAgPAGIAAgRQAPgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgMgEgJAAQgKAAgGAHg");
	this.shape_454.setTransform(716.4,932.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQAOgTASAAQAMAAAHAFIAAAUQgJgHgJAAQgMAAgHAOQgJAQAAAeIAAAEQAAAeAJAPQAHAOANAAQAJAAAIgHIAAATQgIAGgLAAQgTAAgNgTg");
	this.shape_455.setTransform(707.4,932.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAXABIAAAVIAAAAQgPAAgIAKQgIAKAAATIAABhg");
	this.shape_456.setTransform(700.7,932.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAPAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgJAYgTAAQgOAAgKgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAGAJAKAAQAIAAAIgKQAHgKAAgOIAAgdQgNgEgJAAQgKAAgGAHg");
	this.shape_457.setTransform(691.3,932.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#58595B").s().p("AA2BPIAAhrQAAgigVAAQgLAAgGAKQgHAKAAAQIAABpIgRAAIAAhrQAAgigVAAQgKAAgHAKQgHAKAAAQIAABpIgSAAIAAiaIASAAIAAAVQALgYATAAQAVAAAHAYQALgYAWAAQAPAAAKAMQAJANAAAWIAABug");
	this.shape_458.setTransform(677.8,932.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgJAYgTAAQgOAAgKgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgNgEgJAAQgKAAgGAHg");
	this.shape_459.setTransform(658.9,932.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#58595B").s().p("AAXBPIAAhrQAAgigWAAQgJAAgHAKQgHAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_460.setTransform(648.6,932.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#58595B").s().p("AgfBCQgJgMAAgWIAAhuIASAAIAABrQAAAhAWABQAJAAAHgKQAHgKAAgQIAAhpIASAAIAACaIgSAAIAAgVQgLAYgSAAQgQAAgJgNg");
	this.shape_461.setTransform(637.4,932.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#58595B").s().p("AgiBIIAAgTQASAKAOAAQAHAAAFgGQAGgFAAgJIAAgBQAAgOgVgWQgQgNgGgLQgHgLAAgNIAAAAQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgNgHgNAAQgHAAgFAFQgGAFAAAJIAAAAQAAAIAFAHQAFAHAMANQAQAOAGALQAHAMAAAMIAAABQAAARgMALQgLAKgOAAQgPAAgRgIg");
	this.shape_462.setTransform(623,932.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAgmANgVQANgUARAAQASAAALAUQANAUAAAlIAAAKIhCAAQABAaAKAPQAJANANAAQAMAAAPgJIACASQgQAJgPAAQgUAAgOgTgAgPgwQgHAPgBAbIAwAAQAAgZgHgPQgGgQgLAAQgJAAgHAOg");
	this.shape_463.setTransform(613.6,932.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#58595B").s().p("AgdAtQgLgRAAgaIAAgEQAAgZALgRQAMgRARAAQASAAALARQAMARgBAZIAAAEQABAagMARQgLARgSAAQgRAAgMgRgAgZgoQgKAPABAXIAAAEQgBAYAKAPQAKAQAPAAQAQAAAKgQQAKgPAAgYIAAgEQAAgXgKgPQgKgQgQAAQgPAAgKAQgAAKAgIgKgaIgBABIgEAAIAAAZIgHAAIAAhBIALAAQAHAAAFAGQAFAFAAAJIAAABQAAAMgKAEIAMAcgAgFAAIAEAAQAKAAAAgMIAAAAQAAgNgLAAIgDAAg");
	this.shape_464.setTransform(599.1,924.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#58595B").s().p("AAXBPIAAhrQAAgigWAAQgJAAgHAKQgHAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_465.setTransform(589.1,932.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#58595B").s().p("AgeBZQgOgWAAgkIAAgEQAAgiAOgWQAMgVASAAQATAAAMAVQAOAWAAAiIAAAEQAAAkgOAWQgMAVgTAAQgSAAgMgVgAgSgQQgIAQAAAaIAAAFQAAAcAIARQAIARAKAAQALAAAHgRQAIgRAAgcIAAgFQAAgagIgQQgHgRgLAAQgKAAgIARgAgGhCIAUgrIASAKIgdAhg");
	this.shape_466.setTransform(578.1,929.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAXABIAAAVIAAAAQgPAAgIAKQgIAKAAATIAABhg");
	this.shape_467.setTransform(569.7,932.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#58595B").s().p("AgaA9QgPgVgBglIAAgDQAAgmAOgVQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQAAAaALAPQAKANAMAAQANAAAOgJIACASQgQAJgQAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgPQgGgQgLAAQgJAAgHAOg");
	this.shape_468.setTransform(560.5,932.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#58595B").s().p("AgNBoIAAiKIgOAAIAAgQIAOAAIAAgRQAAglAfABQAGgBAEACIAAARIgIgBQgRAAAAAVIAAAPIAYAAIAAAQIgYAAIAACKg");
	this.shape_469.setTransform(552.6,930);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#58595B").s().p("AgfBDQgJgOAAgVIAAgCQAAgYAKgLQALgOASAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgNAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgJAYgTAAQgOAAgLgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAJAAQAKAAAGgKQAIgKgBgOIAAgdQgNgEgIAAQgKAAgGAHg");
	this.shape_470.setTransform(543.8,932.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAIADAEQAEADAHAAQAGAAADgCIAAAQQgGADgHAAQgbAAAAgcg");
	this.shape_471.setTransform(535.4,930.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAgmAOgVQAMgUAQAAQAUAAALAUQALAUABAlIAAAKIhDAAQABAaALAPQAJANAMAAQANAAAPgJIABASQgOAJgRAAQgTAAgOgTgAgQgwQgHAPgBAbIAxAAQgBgZgGgPQgHgQgLAAQgJAAgHAOg");
	this.shape_472.setTransform(527.1,932.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#58595B").s().p("AgrBnIAAjNIAcAAQAYAAAQANQAQAPAAAYIAAABQAAAmgjALQAmAJAAAmIAAABQAAAagSAPQgRAOgcAAgAgYBVIAGAAQATAAAMgJQAMgKAAgTIAAgBQAAgSgMgLQgLgKgSAAIgIAAgAgYgIIAHAAQASAAALgLQAKgKAAgSIAAgBQAAgRgKgKQgLgKgPAAIgKAAg");
	this.shape_473.setTransform(516.6,930.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#58595B").s().p("AgcBvQAmghAAhOQAAhOgmggIAAgPQAcAPANAhQAQAhAAAsQAAAtgQAhQgNAhgcAPg");
	this.shape_474.setTransform(501.8,931.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#58595B").s().p("AgmBjIAAgTQANAGAMgBQANAAAKgNQAKgOAAgWIAAgBQAAgngcgBQgIABgLADIgLgHIAFhfIBAAAIAAASIgxAAIgDBBQAJgDAIAAQARAAAMAOQAOAOAAAeIAAABQgBAfgPASQgOATgVAAQgPAAgLgFg");
	this.shape_475.setTransform(493.6,930.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#58595B").s().p("AABBnIAAi3IgUALIAAgUIAXgOIAQAAIAADOg");
	this.shape_476.setTransform(484.8,930.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#58595B").s().p("AgsADIAAgFQAAhnAsAAQAtAAAABnIAAAEQAABogtAAQgsAAAAhngAgZgCIAAAEQAABWAZAAQAaAAAAhVIAAgFQAAhVgaAAQgZAAAABVg");
	this.shape_477.setTransform(476.9,930.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#58595B").s().p("AgnBoIAAgPIAsheQAPgfAAgTQAAgNgHgIQgIgIgJAAQgPAAgPAJIAAgTQAPgJARAAQARAAAMAMQAMANAAAUIAAACQAAAWgRAiIgnBVIA5AAIAAATg");
	this.shape_478.setTransform(466.3,930.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#58595B").s().p("AgnCAIA/j/IAQAAIg/D/g");
	this.shape_479.setTransform(457.4,930.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#58595B").s().p("AgnBoIAAgPIAsheQAPgfAAgTQAAgNgHgIQgIgIgKAAQgOAAgPAJIAAgTQAOgJASAAQARAAAMAMQAMANAAAUIAAACQAAAWgRAiIgnBVIA5AAIAAATg");
	this.shape_480.setTransform(448.6,930.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#58595B").s().p("AABBnIAAi3IgUALIAAgUIAXgOIAQAAIAADOg");
	this.shape_481.setTransform(440,930.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgPAGIAAgRQAOgHARAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgQAEQgGAJAAAPIAAADQAAAPAFAJQAHAJAKAAQAIAAAIgKQAGgKABgOIAAgdQgOgEgIAAQgKAAgHAHg");
	this.shape_482.setTransform(427.2,932.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#58595B").s().p("AgfBXQgMgWAAglIAAgHQAAgjAMgWQAKgSARgBQASAAALAeIAAhQIATAAIAADQIgTAAIAAgbQgLAegSgBQgRAAgKgSgAgRgVQgHAQAAAbIAAAGQAAAcAHAQQAHAQAKAAQAKAAAIgPQAIgRAAgcIAAgHQAAgagIgQQgIgQgKAAQgKAAgHAQg");
	this.shape_483.setTransform(416.5,930.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOASAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHARAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgNgEgIAAQgKAAgGAHg");
	this.shape_484.setTransform(405.7,932.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAIADAEQAEADAHAAQAGAAADgCIAAAQQgGADgHAAQgbAAAAgcg");
	this.shape_485.setTransform(397.4,930.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#58595B").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_486.setTransform(391.6,930);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#58595B").s().p("AgfBCQgJgMAAgWIAAhuIASAAIAABrQAAAhAWABQAIAAAIgKQAHgKAAgQIAAhpIASAAIAACaIgSAAIAAgVQgLAYgSAAQgQAAgJgNg");
	this.shape_487.setTransform(383.5,932.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#58595B").s().p("AghBIIAAgTQAQAKAPAAQAHAAAFgGQAGgFAAgJIAAgBQAAgPgUgVQgRgOgGgKQgHgLAAgNIAAAAQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgNgHgNAAQgGAAgGAFQgFAFAAAJIAAAAQAAAIAFAHQAEAHAMANQAQAOAGALQAHAMAAAMIAAABQAAARgMALQgLAKgOAAQgPAAgQgIg");
	this.shape_488.setTransform(373.9,932.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#58595B").s().p("AAXBPIAAhrQAAgigWAAQgJAAgHAKQgHAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_489.setTransform(364.3,932.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#58595B").s().p("AgeA8QgOgWAAgkIAAgDQAAgkAOgWQAMgUASAAQATAAAMAUQAOAWAAAkIAAADQAAAkgOAWQgMAUgTAAQgSAAgMgUgAgSguQgIARAAAcIAAADQAAAcAIARQAIAQAKAAQALAAAHgQQAIgRAAgcIAAgDQAAgcgIgRQgHgQgLAAQgKAAgIAQg");
	this.shape_490.setTransform(353.3,932.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQAOgTASAAQAMAAAHAFIAAAUQgJgHgJAAQgMAAgHAOQgJAQAAAeIAAAEQAAAeAJAPQAHAOANAAQAJAAAIgHIAAATQgIAGgLAAQgTAAgNgTg");
	this.shape_491.setTransform(344,932.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#58595B").s().p("AgMBOQgQghAAgtQAAgsAQghQANghAcgPIAAAPQgnAgAABOQAABOAnAhIAAAPQgcgPgNghg");
	this.shape_492.setTransform(336.7,931.9);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#58595B").s().p("AgcAtQgLgRAAgaIAAgEQAAgZALgRQALgRARAAQASAAALARQALARAAAZIAAAEQAAAagLARQgLARgSAAQgRAAgLgRgAgZgoQgJAPAAAXIAAAEQAAAYAJAPQAKAQAPAAQAQAAAKgQQAJgPAAgYIAAgEQAAgXgJgPQgKgQgQAAQgPAAgKAQgAAKAgIgKgaIgBABIgEAAIAAAZIgHAAIAAhBIALAAQAHAAAFAGQAFAFAAAJIAAABQAAAMgKAEIAMAcgAgFAAIAEAAQAKAAAAgMIAAAAQAAgNgLAAIgDAAg");
	this.shape_493.setTransform(323.3,924.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#58595B").s().p("AAXBPIAAhrQAAgigWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_494.setTransform(313.3,932.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#58595B").s().p("AgfBZQgNgWAAgkIAAgEQAAgiANgWQANgVASAAQASAAANAVQAOAWAAAiIAAAEQAAAkgOAWQgMAVgTAAQgSAAgNgVgAgSgQQgHAQAAAaIAAAFQAAAcAHARQAHARALAAQALAAAHgRQAIgRAAgcIAAgFQAAgagIgQQgHgRgLAAQgLAAgHARgAgHhCIAWgrIARAKIgdAhg");
	this.shape_495.setTransform(302.3,929.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAJgZAWABIAAAVIAAAAQgPAAgJAKQgHAKAAATIAABhg");
	this.shape_496.setTransform(293.8,932.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#58595B").s().p("AgaA9QgPgVAAglIAAgDQAAgmANgVQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQABAaAKAPQAJANANAAQAMAAAPgJIACASQgPAJgRAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgPQgHgQgKAAQgJAAgHAOg");
	this.shape_497.setTransform(284.6,932.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#58595B").s().p("AgNBoIAAiKIgOAAIAAgQIAOAAIAAgRQAAglAfABQAHgBADACIAAARIgHgBQgRAAAAAVIAAAPIAXAAIAAAQIgXAAIAACKg");
	this.shape_498.setTransform(276.7,930);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAIAAAOAGIAAgRQAAgfgZAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgdQgMgEgJAAQgKAAgGAHg");
	this.shape_499.setTransform(267.9,932.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIAQAAIAAArIAYAAIAAAQIgYAAIAABsQAAAPAPAAQAFAAAFgCIAAAQQgHADgHAAQgbAAAAgcg");
	this.shape_500.setTransform(259.6,930.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#58595B").s().p("AgbA9QgPgVAAglIAAgDQAAgmAOgVQAMgUAQAAQAUAAALAUQALAUABAlIAAAKIhCAAQAAAaALAPQAJANANAAQAMAAAPgJIACASQgPAJgRAAQgTAAgPgTgAgPgwQgIAPAAAbIAwAAQgBgZgGgPQgHgQgLAAQgJAAgGAOg");
	this.shape_501.setTransform(251.2,932.7);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#58595B").s().p("AgrBnIAAjNIAcAAQAYAAAPANQASAPgBAYIAAABQABAlglAMQAnAJAAAmIAAABQAAAagSAPQgRAOgcAAgAgYBVIAGAAQATAAALgJQAMgKAAgTIAAgBQAAgSgLgLQgLgKgSAAIgIAAgAgYgIIAHAAQASAAALgLQAKgKAAgSIAAgBQAAgRgKgKQgLgKgPAAIgKAAg");
	this.shape_502.setTransform(240.8,930.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOATAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHAQAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgJAYgTAAQgOAAgKgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgNgEgJAAQgKAAgGAHg");
	this.shape_503.setTransform(224.6,932.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAgmAOgVQANgTATAAQAMAAAHAFIAAAUQgJgHgKAAQgMAAgGAOQgKAQAAAeIAAAEQAAAeAKAPQAGAOAOAAQAIAAAJgHIAAATQgIAGgMAAQgSAAgNgTg");
	this.shape_504.setTransform(215.7,932.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#58595B").s().p("AgIBoIAAiaIARAAIAACagAgIhPIAAgYIARAAIAAAYg");
	this.shape_505.setTransform(208.9,930);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#58595B").s().p("AAXBPIAAhrQAAgigWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_506.setTransform(201,932.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQAOgTASAAQAMAAAHAFIAAAUQgJgHgJAAQgMAAgHAOQgJAQAAAeIAAAEQAAAeAJAPQAHAOANAAQAJAAAIgHIAAATQgIAGgLAAQgTAAgNgTg");
	this.shape_507.setTransform(191.3,932.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#58595B").s().p("AgaBaQgPgVAAgkIAAgFQgBgkANgVQANgVARAAQASAAALAVQAMAUAAAiIAAAMIhBAAQAAAbALAOQAJAOANAAQALAAAQgKIACASQgQAKgQgBQgTAAgOgTgAgPgTQgHAPgBAaIAvAAQABgXgHgQQgHgQgKAAQgJAAgHAOgAgGhBIAVgsIARAKIgcAig");
	this.shape_508.setTransform(181.9,929.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#58595B").s().p("AgNBIIAAhwIgOAAIAAgQIAOAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAQAFAAAFgCIAAAQQgHADgHAAQgbAAAAgcg");
	this.shape_509.setTransform(173.2,930.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgCQAAgYALgLQAKgOASAAQAJAAAOAGIAAgRQAAgfgaAAQgOAAgOAGIAAgRQAOgHARAAQATAAALAMQAMAMAAAYIAABsIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAIAAAQIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgdQgNgEgIAAQgKAAgGAHg");
	this.shape_510.setTransform(159.7,932.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#58595B").s().p("AAXBoIAAhrQAAgigWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAjPIASAAIAABLQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_511.setTransform(149.3,930);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAgmAOgVQANgTATAAQAMAAAHAFIAAAUQgKgHgJAAQgMAAgGAOQgKAQAAAeIAAAEQAAAeAKAPQAGAOAOAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_512.setTransform(139.7,932.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#58595B").s().p("AgIBoIAAiaIARAAIAACagAgIhPIAAgYIARAAIAAAYg");
	this.shape_513.setTransform(132.9,930);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#58595B").s().p("AgiBnIAAjNIBFAAIAAASIgxAAIAABOIArAAIAAAQIgrAAIAABdg");
	this.shape_514.setTransform(126.4,930.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#58595B").s().p("AgFApIADgjIgZATIgHgLIAcgOIgcgMIAHgNIAZATIgDgiIALAAIgCAiIAXgTIAHANIgbAMIAbAOIgHALIgXgTIACAjg");
	this.shape_515.setTransform(112.4,923.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#58595B").s().p("AgGApIAEgjIgYATIgIgLIAcgOIgcgMIAIgNIAYATIgEgiIANAAIgEAiIAYgTIAIANIgcAMIAcAOIgIALIgYgTIAEAjg");
	this.shape_516.setTransform(104,923.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#58595B").s().p("AgGApIAEgjIgZATIgHgLIAcgOIgcgMIAHgNIAZATIgEgiIAMAAIgCAiIAXgTIAHANIgbAMIAbAOIgHALIgXgTIACAjg");
	this.shape_517.setTransform(95.6,923.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#58595B").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_518.setTransform(993.7,903.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#58595B").s().p("AgfBWQgMgVAAglIAAgHQAAgjAMgVQAKgTARAAQASAAALAdIAAhPIATAAIAADPIgTAAIAAgcQgLAegSAAQgRAAgKgTgAgRgWQgIARAAAaIAAAHQAAAcAIARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_519.setTransform(985.4,894.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#58595B").s().p("AgNBIIAAhwIgOAAIAAgQIAOAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAIAJgCIAAAQIgNADQgbAAAAgcg");
	this.shape_520.setTransform(976.7,895.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#58595B").s().p("AggBnIAAjNIATAAIAAC7IAuAAIAAASg");
	this.shape_521.setTransform(970,894.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAglAOgWQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQAAAbALAOQAKAOAMAAQANAAAOgKIACASQgRAJgPAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgGgPgLAAQgJAAgHAOg");
	this.shape_522.setTransform(955.1,897.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#58595B").s().p("AgrBiIAAjBIASAAIAAAcQAMgeASAAQARAAAKATQAMAVAAAlIAAAHQAAAjgMAVQgLATgQAAQgSAAgMgdIAABBgAgRhBQgIARAAAbIAAAJQAAAZAIARQAIAPAJAAQALAAAHgPQAHgRAAgaIAAgHQAAgcgHgRQgHgPgLAAQgJAAgIAPg");
	this.shape_523.setTransform(944.6,898.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#58595B").s().p("AgfA8QgNgWAAgkIAAgDQAAgkANgWQAOgUARAAQATAAAMAUQAOAWAAAkIAAADQAAAkgOAWQgMAUgTAAQgSAAgNgUgAgSguQgHARAAAcIAAADQAAAcAHARQAIAQAKAAQALAAAIgQQAHgRABgcIAAgDQgBgcgHgRQgIgQgLAAQgKAAgIAQg");
	this.shape_524.setTransform(933.4,897.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAJgZAWACIAAAVIAAAAQgPAAgJAJQgHAKAAATIAABhg");
	this.shape_525.setTransform(925.4,897);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#58595B").s().p("AgfBCQgJgMAAgWIAAhuIASAAIAABrQAAAiAWAAQAIAAAIgKQAHgKAAgPIAAhqIASAAIAACaIgSAAIAAgVQgLAYgSAAQgQAAgJgNg");
	this.shape_526.setTransform(915.8,897.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#58595B").s().p("AgjBnIAAjNIBHAAIAAASIg0AAIAABMIAvAAIAAAQIgvAAIAABNIA0AAIAAASg");
	this.shape_527.setTransform(905.9,894.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#58595B").s().p("AgfA8QgNgWAAgkIAAgDQAAgkANgWQANgUASAAQATAAAMAUQAOAWAAAkIAAADQAAAkgOAWQgMAUgTAAQgSAAgNgUgAgRguQgJARABAcIAAADQgBAcAJARQAHAQAKAAQALAAAHgQQAJgRAAgcIAAgDQAAgcgJgRQgHgQgLAAQgKAAgHAQg");
	this.shape_528.setTransform(890.5,897.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAibIASAAIAAAXQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_529.setTransform(879.5,897);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#58595B").s().p("AgfA8QgNgWAAgkIAAgDQAAgkANgWQANgUASAAQASAAANAUQAOAWAAAkIAAADQAAAkgOAWQgNAUgSAAQgSAAgNgUgAgSguQgIARABAcIAAADQgBAcAIARQAHAQALAAQALAAAIgQQAHgRABgcIAAgDQgBgcgHgRQgIgQgLAAQgLAAgHAQg");
	this.shape_530.setTransform(868.6,897.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#58595B").s().p("AgZBPIAAibIATAAIAAAWQAIgZAXACIAAAVIAAAAQgPAAgJAJQgHAKAAATIAABhg");
	this.shape_531.setTransform(860.6,897);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#58595B").s().p("AgaA9QgPgVAAglIAAgDQAAglANgWQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQABAbAKAOQAJAOANAAQAMAAAPgKIACASQgQAJgQAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgHgPgKAAQgJAAgHAOg");
	this.shape_532.setTransform(851.4,897.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#58595B").s().p("AgnBgIAAgWQAUANAPAAQALAAAGgHQAIgHgBgMIAAgBQAAgLgEgLQgGgKgOgVQgVgZgHgMQgGgOgBgPIAAAAQAAgUANgNQAMgNAQAAQARAAAQAJIAAAVQgSgLgNAAQgJAAgHAHQgIAHABAMIAAAAQgBALAGAKQAFAJAPAVQATAWAIAOQAHAPAAARIAAABQAAAUgNANQgNANgRAAQgRAAgTgKg");
	this.shape_533.setTransform(841.4,894.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#58595B").s().p("AATBoIgZhLIgOAaIAAAxIgSAAIAAjPIASAAIAACCIAlhOIAUAAIggA9IAiBeg");
	this.shape_534.setTransform(827.1,894.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAgmAOgVQANgTATAAQALAAAIAFIAAATQgJgGgKAAQgMAAgGAOQgKAQAAAdIAAAFQAAAdAKAQQAGAOAOAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_535.setTransform(817.6,897.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAJgZAWACIAAAVIAAAAQgPAAgJAJQgHAKAAATIAABhg");
	this.shape_536.setTransform(810.9,897);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#58595B").s().p("AgaA9QgPgVAAglIAAgDQAAglANgWQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQABAbAKAOQAJAOANAAQAMAAAPgKIACASQgQAJgQAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgHgPgKAAQgJAAgHAOg");
	this.shape_537.setTransform(801.7,897.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#58595B").s().p("AAlBnIAAiiIglBrIAAAAIglhrIAACiIgSAAIAAjNIAWAAIAhBnIAihnIAWAAIAADNg");
	this.shape_538.setTransform(789.5,894.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAglAOgWQAMgUARAAQASAAAMAUQAMAVAAAkIAAAKIhCAAQAAAbALAOQAKAOAMAAQANAAAOgKIACASQgRAJgPAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgGgPgLAAQgJAAgHAOg");
	this.shape_539.setTransform(772.3,897.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#58595B").s().p("AgfBWQgMgVAAglIAAgHQAAgjAMgVQAKgTARAAQASAAALAdIAAhPIATAAIAADPIgTAAIAAgcQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_540.setTransform(761.3,894.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOATAAQAKAAANAGIAAgRQAAgfgaAAQgQAAgMAHIAAgSQANgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgJAYgTAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAKAAQAIAAAIgKQAHgKAAgOIAAgeQgNgDgJAAQgKAAgGAHg");
	this.shape_541.setTransform(745.7,897.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#58595B").s().p("AgfBWQgMgVAAglIAAgHQAAgjAMgVQAKgTARAAQASAAALAdIAAhPIATAAIAADPIgTAAIAAgcQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_542.setTransform(735.1,894.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#58595B").s().p("AgfBDQgJgOAAgVIAAgDQAAgXAKgLQALgOATAAQAKAAAMAGIAAgRQAAgfgaAAQgPAAgNAHIAAgSQAOgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgJAYgTAAQgPAAgKgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAIgKQAGgKAAgOIAAgeQgNgDgIAAQgKAAgGAHg");
	this.shape_543.setTransform(724.3,897.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAXACIAAAVIAAAAQgPAAgIAJQgIAKAAATIAABhg");
	this.shape_544.setTransform(716.9,897);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAIAJgCIAAAQQgIADgFAAQgbAAAAgcg");
	this.shape_545.setTransform(709.4,895.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#58595B").s().p("AghBIIAAgSQASAJANAAQAHAAAFgGQAGgFAAgJIAAgBQAAgPgUgVQgQgNgHgLQgHgLAAgMIAAgBQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgOgHgMAAQgGAAgGAFQgFAGAAAIIAAABQAAAHAFAHQAEAHAMAOQAQAOAGALQAHALAAAMIAAABQAAARgMALQgLAKgOAAQgQAAgPgIg");
	this.shape_546.setTransform(702.1,897.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#58595B").s().p("AgIBoIAAibIARAAIAACbgAgIhPIAAgYIARAAIAAAYg");
	this.shape_547.setTransform(695.4,894.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#58595B").s().p("AgkBdIAAgSQATAGAOABQAcAAAAgeIAAgeQgMAdgRAAQgQAAgLgSQgMgVAAghIAAgCQAAgkAMgUQALgSAQAAQASAAALAdIAAgbIATAAIAACTQAAAuguAAQgSAAgQgFgAgRhCQgHAQAAAbIAAACQAAAYAHAQQAHAOAKAAQAKAAAHgOQAJgQAAgYIAAgCQAAgbgJgQQgHgPgKAAQgKAAgHAPg");
	this.shape_548.setTransform(687.1,899);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#58595B").s().p("AgaA9QgPgVgBglIAAgDQAAglANgWQANgUARAAQASAAALAUQANAVAAAkIAAAKIhCAAQAAAbAKAOQAKAOANAAQAMAAAPgKIABASQgQAJgPAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgHgPgKAAQgKAAgGAOg");
	this.shape_549.setTransform(676.6,897.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAJgZAWACIAAAVIAAAAQgPAAgJAJQgHAKAAATIAABhg");
	this.shape_550.setTransform(668.9,897);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOATAAQAKAAAMAGIAAgRQAAgfgZAAQgQAAgMAHIAAgSQANgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgeQgMgDgJAAQgKAAgGAHg");
	this.shape_551.setTransform(654.6,897.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQANgTASAAQALAAAJAFIAAATQgJgGgKAAQgMAAgGAOQgKAQAAAdIAAAFQAAAdAKAQQAGAOAOAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_552.setTransform(645.7,897.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#58595B").s().p("AgYBPIAAibIASAAIAAAWQAIgZAXACIAAAVIAAAAQgPAAgJAJQgHAKAAATIAABhg");
	this.shape_553.setTransform(639,897);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#58595B").s().p("AgfBDQgJgOAAgVIAAgDQAAgXALgLQAKgOATAAQALAAAMAGIAAgRQAAgfgbAAQgPAAgNAHIAAgSQANgHASAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgOAAgLgNgAgQAEQgGAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAIgKQAGgKABgOIAAgeQgOgDgIAAQgKAAgHAHg");
	this.shape_554.setTransform(629.6,897.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#58595B").s().p("AA2BPIAAhrQAAgigVAAQgKAAgIAKQgGAKAAAQIAABpIgRAAIAAhrQAAgigVAAQgLAAgGAKQgHAKAAAQIAABpIgTAAIAAibIATAAIAAAWQALgYATAAQAUAAAIAYQAMgYAVAAQAPAAAKAMQAJAMABAXIAABug");
	this.shape_555.setTransform(616.1,897);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOASAAQALAAAMAGIAAgRQAAgfgaAAQgPAAgNAHIAAgSQANgHASAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgeQgNgDgIAAQgKAAgGAHg");
	this.shape_556.setTransform(597.2,897.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAibIASAAIAAAXQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_557.setTransform(586.8,897);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#58595B").s().p("AgfBCQgJgMAAgWIAAhuIASAAIAABrQAAAiAWAAQAJAAAHgKQAHgKAAgPIAAhqIASAAIAACaIgSAAIAAgVQgLAYgSAAQgQAAgJgNg");
	this.shape_558.setTransform(575.6,897.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#58595B").s().p("AghBIIAAgSQASAJANAAQAHAAAFgGQAGgFAAgJIAAgBQAAgPgUgVQgQgNgHgLQgHgLAAgMIAAgBQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgOgHgMAAQgGAAgGAFQgFAGAAAIIAAABQAAAHAFAHQAEAHAMAOQAQAOAGALQAHALAAAMIAAABQAAARgMALQgLAKgOAAQgQAAgPgIg");
	this.shape_559.setTransform(561.2,897.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#58595B").s().p("AgaA9QgPgVAAglIAAgDQAAglANgWQAMgUARAAQASAAAMAUQALAVAAAkIAAAKIhBAAQABAbAKAOQAJAOANAAQAMAAAPgKIACASQgQAJgQAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgHgPgKAAQgJAAgHAOg");
	this.shape_560.setTransform(551.9,897.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#58595B").s().p("AgcAtQgLgRAAgZIAAgEQAAgaALgRQALgRARAAQASAAALARQALARAAAaIAAAEQAAAZgLARQgLARgSAAQgRAAgLgRgAgZgoQgJAPAAAYIAAAEQAAAXAJAPQAKAQAPAAQAQAAAKgQQAJgPAAgXIAAgEQAAgYgJgPQgKgQgQAAQgPAAgKAQgAAKAgIgKgZIgFAAIAAAZIgHAAIAAhBIALAAQARAAAAAVIAAAAQAAAMgKAEIAMAcgAgFAAIAEAAQAKAAAAgMIAAAAQAAgNgLAAIgDAAg");
	this.shape_561.setTransform(537.4,889);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#58595B").s().p("AgNBoIAAiKIgOAAIAAgQIAOAAIAAgQQAAglAfAAIAKABIAAAQIgIgBQgQAAAAAWIAAAPIAXAAIAAAQIgXAAIAACKg");
	this.shape_562.setTransform(529.8,894.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#58595B").s().p("AgIBoIAAibIARAAIAACbgAgIhPIAAgYIARAAIAAAYg");
	this.shape_563.setTransform(523.9,894.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#58595B").s().p("AgYBMIAAAbIgTAAIAAjPIATAAIAABQQAKgeATAAQARAAAKATQAMAVAAAjIAAAHQAAAlgMAVQgLATgQAAQgTAAgKgdgAgRgWQgIARAAAZIAAAJQAAAbAIARQAIAPAJAAQALAAAHgPQAHgRAAgcIAAgHQAAgagHgRQgHgPgLAAQgJAAgIAPg");
	this.shape_564.setTransform(516.1,894.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#58595B").s().p("AgbA9QgPgVAAglIAAgDQAAglAOgWQAMgUAQAAQAUAAALAUQAMAVgBAkIAAAKIhBAAQAAAbALAOQAJAOANAAQAMAAAPgKIACASQgRAJgPAAQgUAAgOgTgAgQgwQgGAPgBAbIAwAAQgBgZgGgQQgHgPgLAAQgIAAgIAOg");
	this.shape_565.setTransform(505.1,897.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#58595B").s().p("AAYBnIgfhRIgJABIgKAAIAABQIgTAAIAAjNIAcAAQAbAAAPAQQASAQgBAeIAAABQAAAqggANIAkBXgAgaAFIAKAAQARAAALgJQALgMAAgWIAAgBQAAgtgoAAIgJAAg");
	this.shape_566.setTransform(495,894.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#58595B").s().p("AgcBvQAmggAAhPQAAhPgmgfIAAgPQAcAPANAgQAQAiAAAsQAAAtgQAhQgNAhgcAPg");
	this.shape_567.setTransform(479.9,896.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#58595B").s().p("AglBjIAAgTQANAGALAAQANAAAKgNQAJgPAAgVIAAgCQAAgogbAAQgJAAgJAEIgLgHIAEhfIBAAAIAAATIgxAAIgCBAQAIgDAJAAQARABALAOQANANAAAeIAAACQAAAegOASQgPATgVAAQgOAAgLgFg");
	this.shape_568.setTransform(471.7,894.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#58595B").s().p("AABBnIAAi3IgUALIAAgVIAYgMIAPAAIAADNg");
	this.shape_569.setTransform(462.9,894.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#58595B").s().p("AgsADIAAgEQAAhoAsAAQAtAAAABnIAAAEQAABogtAAQgsAAAAhngAgZgCIAAAEQAABWAZAAQAaAAAAhVIAAgEQAAhWgaAAQgZAAAABVg");
	this.shape_570.setTransform(455,894.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#58595B").s().p("AgnBoIAAgPIAsheQAPgdAAgVQgBgNgGgIQgIgIgJAAQgPAAgPAJIAAgTQAOgJASAAQASAAALANQAMAMAAAVIAAABQAAAWgRAiIgnBVIA5AAIAAATg");
	this.shape_571.setTransform(444.5,894.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#58595B").s().p("AgnCAIA/j/IAQAAIg/D/g");
	this.shape_572.setTransform(435.5,895);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#58595B").s().p("AgnBoIAAgPIAsheQAPgdAAgVQAAgNgHgIQgIgIgJAAQgQAAgOAJIAAgTQAPgJARAAQASAAALANQAMAMAAAVIAAABQAAAWgRAiIgnBVIA5AAIAAATg");
	this.shape_573.setTransform(426.7,894.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#58595B").s().p("AABBnIAAi3IgUALIAAgVIAYgMIAPAAIAADNg");
	this.shape_574.setTransform(418.1,894.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOASAAQALAAAMAGIAAgRQAAgfgaAAQgOAAgOAHIAAgSQAOgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgeQgMgDgJAAQgKAAgGAHg");
	this.shape_575.setTransform(405.3,897.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#58595B").s().p("AgfBWQgMgVAAglIAAgHQAAgjAMgVQAKgTARAAQARAAAMAdIAAhPIATAAIAADPIgTAAIAAgcQgLAegSAAQgRAAgKgTgAgRgWQgIARAAAaIAAAHQAAAcAIARQAHAPAKAAQAKAAAHgPQAIgRAAgbIAAgJQAAgZgIgRQgHgPgKAAQgKAAgHAPg");
	this.shape_576.setTransform(394.6,894.6);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOATAAQAKAAAMAGIAAgRQAAgfgZAAQgPAAgOAHIAAgSQAOgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgeQgMgDgJAAQgKAAgGAHg");
	this.shape_577.setTransform(383.8,897.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAIAJgCIAAAQQgIADgFAAQgbAAAAgcg");
	this.shape_578.setTransform(375.5,895.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#58595B").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_579.setTransform(369.7,894.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#58595B").s().p("AgfBCQgJgMAAgWIAAhuIASAAIAABrQAAAiAWAAQAJAAAHgKQAHgKAAgPIAAhqIASAAIAACaIgSAAIAAgVQgLAYgSAAQgQAAgJgNg");
	this.shape_580.setTransform(361.6,897.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#58595B").s().p("AghBIIAAgSQASAJANAAQAHAAAGgGQAGgFAAgJIAAgBQAAgOgVgWQgQgNgHgLQgHgLAAgMIAAgBQAAgRAMgKQAKgKAOAAQAOAAAMAFIAAATQgOgHgMAAQgGAAgGAFQgFAGAAAIIAAABQAAAHAFAHQAEAHAMAOQAQAOAGALQAHALAAAMIAAABQAAARgMALQgLAKgOAAQgQAAgPgIg");
	this.shape_581.setTransform(352,897.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAibIASAAIAAAXQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_582.setTransform(342.4,897);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#58595B").s().p("AgeA8QgOgWAAgkIAAgDQAAgkAOgWQAMgUASAAQATAAANAUQANAWAAAkIAAADQAAAkgNAWQgOAUgSAAQgSAAgMgUgAgSguQgIARAAAcIAAADQAAAcAIARQAHAQALAAQALAAAHgQQAIgRAAgcIAAgDQAAgcgIgRQgHgQgLAAQgLAAgHAQg");
	this.shape_583.setTransform(331.4,897.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAgmAOgVQANgTATAAQALAAAIAFIAAATQgJgGgJAAQgMAAgHAOQgKAQAAAdIAAAFQAAAdAKAQQAGAOAOAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_584.setTransform(322.2,897.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#58595B").s().p("AgMBOQgQghABgtQgBgsAQgiQANggAbgPIAAAPQgmAhAABNQAABOAmAhIAAAPQgbgPgNghg");
	this.shape_585.setTransform(314.8,896.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#58595B").s().p("AgcAtQgMgRAAgZIAAgEQAAgaAMgRQALgRARAAQARAAAMARQAMARgBAaIAAAEQABAZgMARQgMARgRAAQgRAAgLgRgAgZgoQgJAPAAAYIAAAEQAAAXAJAPQAKAQAPAAQAQAAAKgQQAJgPAAgXIAAgEQAAgYgJgPQgKgQgQAAQgPAAgKAQgAAJAgIgJgZIgFAAIAAAZIgHAAIAAhBIALAAQARAAAAAVIAAAAQAAAMgJAEIALAcgAgFAAIAEAAQAKAAAAgMIAAAAQgBgNgJAAIgEAAg");
	this.shape_586.setTransform(301.4,889);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#58595B").s().p("AgNBoIAAiKIgOAAIAAgQIAOAAIAAgQQAAglAfAAQAIAAACABIAAAQIgHgBQgRAAAAAWIAAAPIAXAAIAAAQIgXAAIAACKg");
	this.shape_587.setTransform(293.8,894.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#58595B").s().p("AgIBoIAAibIARAAIAACbgAgIhPIAAgYIARAAIAAAYg");
	this.shape_588.setTransform(288,894.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#58595B").s().p("AgYBMIAAAbIgTAAIAAjPIATAAIAABQQALgeASAAQARAAAKATQAMAVAAAjIAAAHQAAAlgMAVQgKATgRAAQgSAAgLgdgAgQgWQgJARAAAZIAAAJQAAAbAJARQAHAPAJAAQALAAAHgPQAHgRAAgcIAAgHQAAgagHgRQgHgPgLAAQgJAAgHAPg");
	this.shape_589.setTransform(280.1,894.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#58595B").s().p("AgaA9QgQgVAAglIAAgDQAAglAOgWQAMgUARAAQASAAAMAUQAMAVAAAkIAAAKIhCAAQAAAbALAOQAKAOAMAAQANAAAOgKIACASQgRAJgOAAQgUAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgHgPgKAAQgJAAgHAOg");
	this.shape_590.setTransform(269.1,897.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#58595B").s().p("AAYBnIgfhRIgJABIgKAAIAABQIgTAAIAAjNIAdAAQAZAAARAQQAQAQAAAeIAAABQAAApggAOIAkBXgAgaAFIAKAAQARAAALgJQALgMAAgWIAAgBQAAgtgoAAIgJAAg");
	this.shape_591.setTransform(259,894.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#58595B").s().p("AgaA9QgPgVgBglIAAgDQAAglANgWQANgUARAAQASAAALAUQANAVAAAkIAAAKIhCAAQAAAbAKAOQAKAOANAAQAMAAAPgKIACASQgRAJgPAAQgTAAgOgTgAgPgwQgIAPAAAbIAwAAQAAgZgHgQQgGgPgLAAQgKAAgGAOg");
	this.shape_592.setTransform(242.8,897.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#58595B").s().p("AgfBWQgMgVAAglIAAgHQAAgjAMgVQAKgTARAAQASAAALAdIAAhPIATAAIAADPIgTAAIAAgcQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_593.setTransform(231.8,894.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOASAAQALAAAMAGIAAgRQAAgfgaAAQgOAAgOAHIAAgSQAOgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgOIAAgeQgMgDgJAAQgKAAgGAHg");
	this.shape_594.setTransform(216.2,897.2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQAOgTASAAQALAAAIAFIAAATQgJgGgJAAQgMAAgHAOQgKAQAAAdIAAAFQAAAdAKAQQAHAOANAAQAJAAAIgHIAAATQgJAGgKAAQgTAAgNgTg");
	this.shape_595.setTransform(207.3,897.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#58595B").s().p("AgIBoIAAibIARAAIAACbgAgIhPIAAgYIARAAIAAAYg");
	this.shape_596.setTransform(200.6,894.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWAAQgIAAgHAKQgIAKAAAQIAABpIgSAAIAAibIASAAIAAAXQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_597.setTransform(192.6,897);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAgmAOgVQANgTATAAQALAAAIAFIAAATQgJgGgJAAQgMAAgHAOQgKAQAAAdIAAAFQAAAdAKAQQAGAOAOAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_598.setTransform(182.9,897.2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#58595B").s().p("AgaBaQgPgVAAglIAAgEQAAgkANgWQAMgUARAAQASAAAMAUQALAVAAAiIAAAMIhBAAQABAbAKAOQAJAOANAAQAMAAAPgKIACASQgQAJgQAAQgTABgOgUgAgPgTQgIAPAAAZIAwAAQAAgXgHgPQgHgQgKAAQgJAAgHAOgAgGhCIAVgrIASAJIgdAig");
	this.shape_599.setTransform(173.5,894.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAIAJgCIAAAQQgIADgFAAQgbAAAAgcg");
	this.shape_600.setTransform(164.8,895.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#58595B").s().p("AgeBDQgKgOAAgVIAAgDQAAgXALgLQAKgOATAAQAKAAAMAGIAAgRQAAgfgZAAQgQAAgMAHIAAgSQANgHARAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgNgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgOIAAgeQgMgDgJAAQgKAAgGAHg");
	this.shape_601.setTransform(151.3,897.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#58595B").s().p("AAXBoIAAhqQAAgjgWAAQgJAAgHAKQgHAKAAAQIAABpIgSAAIAAjPIASAAIAABLQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_602.setTransform(141,894.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgWQAOgTASAAQALAAAIAFIAAATQgJgGgJAAQgMAAgHAOQgKAQAAAdIAAAFQAAAdAKAQQAHAOANAAQAIAAAJgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_603.setTransform(131.3,897.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#58595B").s().p("AgIBoIAAibIARAAIAACbgAgIhPIAAgYIARAAIAAAYg");
	this.shape_604.setTransform(124.6,894.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#58595B").s().p("AgiBnIAAjNIBFAAIAAASIgyAAIAABOIAsAAIAAAQIgsAAIAABdg");
	this.shape_605.setTransform(118,894.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#58595B").s().p("AgGApIAEgiIgYASIgIgMIAcgNIgcgMIAIgNIAYATIgEgiIANAAIgEAiIAYgTIAIANIgcAMIAcANIgIAMIgYgSIAEAig");
	this.shape_606.setTransform(104,888.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#58595B").s().p("AgGApIAEgiIgZASIgHgMIAcgNIgcgMIAHgNIAZATIgEgiIAMAAIgCAiIAXgTIAHANIgbAMIAbANIgHAMIgXgSIACAig");
	this.shape_607.setTransform(95.6,888.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#58595B").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_608.setTransform(470,868);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXALgMQAKgNATAAQAJAAAOAGIAAgRQAAgfgagBQgOAAgOAIIAAgSQAOgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgJAYgTAAQgOAAgKgOgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAKAAQAJAAAHgKQAHgKAAgNIAAgfQgLgDgLAAQgKAAgGAHg");
	this.shape_609.setTransform(462.1,861.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#58595B").s().p("AgIBoIAAiaIARAAIAACagAgIhPIAAgYIARAAIAAAYg");
	this.shape_610.setTransform(454.8,859);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgVQANgUATAAQALAAAIAFIAAAUQgIgHgKAAQgMAAgHAOQgKAQAAAeIAAAEQAAAeAKAQQAGANAOAAQAJAAAIgHIAAATQgJAGgLAAQgSAAgNgTg");
	this.shape_611.setTransform(448.3,861.6);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWABQgIAAgHAJQgIAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_612.setTransform(438.5,861.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#58595B").s().p("AgaA8QgQgUAAglIAAgDQAAglANgWQANgUARAAQASAAALAUQANAVAAAkIAAAJIhCAAQABAbAKAPQAJAOANAAQALAAAQgKIACARQgQAKgQAAQgTAAgOgUgAgPgwQgHAPgBAcIAwAAQAAgagHgQQgGgPgLAAQgJAAgHAOg");
	this.shape_613.setTransform(427.8,861.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#58595B").s().p("AgZBPIAAiaIATAAIAAAVQAIgZAXACIAAAVIgBAAQgOAAgJAJQgHAKAAATIAABhg");
	this.shape_614.setTransform(420.1,861.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#58595B").s().p("AgaA8QgPgUgBglIAAgDQABglANgWQAMgUAQAAQAUAAAKAUQAMAVABAkIAAAJIhCAAQAAAbALAPQAJAOANAAQALAAAQgKIACARQgPAKgRAAQgTAAgOgUgAgPgwQgIAPAAAcIAwAAQgBgagGgQQgHgPgLAAQgJAAgGAOg");
	this.shape_615.setTransform(410.9,861.6);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#58595B").s().p("AgNBoIAAiKIgOAAIAAgQIAOAAIAAgQQAAglAfAAIAKABIAAAQIgIAAQgQAAAAAWIAAAOIAXAAIAAAQIgXAAIAACKg");
	this.shape_616.setTransform(402.9,858.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#58595B").s().p("AgaA8QgPgUAAglIAAgDQAAglANgWQAMgUARAAQASAAAMAUQALAVAAAkIAAAJIhBAAQABAbAKAPQAJAOANAAQAMAAAPgKIACARQgPAKgRAAQgTAAgOgUgAgPgwQgIAPAAAcIAwAAQAAgagHgQQgHgPgKAAQgJAAgHAOg");
	this.shape_617.setTransform(394.3,861.6);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#58595B").s().p("AgYBPIAAiaIASAAIAAAVQAIgZAXACIAAAVIAAAAQgPAAgIAJQgIAKAAATIAABhg");
	this.shape_618.setTransform(386.6,861.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXALgMQAKgNATAAQAIAAAOAGIAAgRQAAgfgZgBQgOAAgPAIIAAgSQAPgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgOgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgNIAAgfQgKgDgLAAQgKAAgGAHg");
	this.shape_619.setTransform(372.4,861.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#58595B").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_620.setTransform(365.1,859);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#58595B").s().p("AAXBPIAAhqQAAgjgWABQgIAAgHAJQgIAKAAAQIAABpIgSAAIAAiaIASAAIAAAWQALgZASAAQAQAAAJAMQAJANAAAWIAABug");
	this.shape_621.setTransform(352.3,861.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#58595B").s().p("AgaA8QgPgUAAglIAAgDQAAglAMgWQANgUARAAQASAAAMAUQAMAVgBAkIAAAJIhBAAQABAbAKAPQAJAOANAAQANAAAOgKIACARQgQAKgQAAQgTAAgOgUgAgPgwQgHAPgBAcIAvAAQAAgagGgQQgHgPgKAAQgJAAgHAOg");
	this.shape_622.setTransform(341.5,861.6);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#58595B").s().p("AgiBJIAAgTQASAJANAAQAHAAAGgFQAGgGAAgJIAAgBQAAgNgVgXQgQgNgGgLQgHgLAAgMIAAgBQAAgRALgKQALgKAOAAQAOAAAMAFIAAATQgNgGgNAAQgHAAgFAFQgGAFAAAIIAAABQAAAHAFAHQAFAIAMANQAQAOAGALQAHALAAAMIAAABQAAARgMALQgLAKgOAAQgQAAgQgHg");
	this.shape_623.setTransform(327.4,861.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#58595B").s().p("AgeA7QgOgWAAgjIAAgDQAAgkAOgWQAMgUASAAQATAAAMAUQAOAWAAAkIAAADQAAAkgOAVQgMAVgTAAQgSAAgMgVgAgSguQgIARAAAcIAAADQAAAcAIARQAIAQAKAAQALAAAHgQQAIgRAAgcIAAgDQAAgcgIgRQgHgQgLAAQgKAAgIAQg");
	this.shape_624.setTransform(317.8,861.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#58595B").s().p("AgNBIIAAhwIgOAAIAAgQIAOAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQgBAPAPAAQAFAAAFgCIAAAQQgHADgHAAQgbAAAAgcg");
	this.shape_625.setTransform(309.2,859.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXALgMQAKgNATAAQAIAAAOAGIAAgRQAAgfgZgBQgOAAgPAIIAAgSQAPgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgOgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJALAAQAIAAAHgKQAHgKAAgNIAAgfQgKgDgLAAQgKAAgGAHg");
	this.shape_626.setTransform(300.6,861.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#58595B").s().p("AgfBWQgMgUAAglIAAgJQAAgjAMgUQAKgUARABQARAAAMAdIAAhPIATAAIAADOIgTAAIAAgbQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_627.setTransform(290,859.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#58595B").s().p("AgbA8QgPgUAAglIAAgDQAAglAOgWQAMgUAQAAQAUAAALAUQALAVABAkIAAAJIhCAAQABAbAKAPQAJAOAMAAQANAAAPgKIABARQgOAKgRAAQgTAAgPgUgAgQgwQgGAPgBAcIAwAAQgBgagGgQQgHgPgLAAQgJAAgHAOg");
	this.shape_628.setTransform(274.6,861.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#58595B").s().p("AgfBWQgMgUAAglIAAgJQAAgjAMgUQAKgUARABQARAAAMAdIAAhPIATAAIAADOIgTAAIAAgbQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_629.setTransform(263.6,859.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#58595B").s().p("AgYBPIAAiaIASAAIAAAVQAIgZAXACIAAAVIAAAAQgPAAgIAJQgIAKAAATIAABhg");
	this.shape_630.setTransform(250.4,861.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#58595B").s().p("AgIBoIAAiaIARAAIAACagAgIhPIAAgYIARAAIAAAYg");
	this.shape_631.setTransform(243.9,859);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#58595B").s().p("AgNBIIAAhwIgNAAIAAgQIANAAIAAgrIARAAIAAArIAXAAIAAAQIgXAAIAABsQAAAPAOAAQAGAAADgCIAAAQQgGADgHAAQgbAAAAgcg");
	this.shape_632.setTransform(237.9,859.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#58595B").s().p("AgYBPIAAiaIASAAIAAAVQAIgZAXACIAAAVIAAAAQgPAAgIAJQgIAKAAATIAABhg");
	this.shape_633.setTransform(231.6,861.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXALgMQAKgNASAAQAJAAAOAGIAAgRQAAgfgZgBQgOAAgPAIIAAgSQAPgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgSAAQgPAAgJgOgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAFAJAKAAQAJAAAHgKQAHgKAAgNIAAgfQgKgDgLAAQgKAAgGAHg");
	this.shape_634.setTransform(222.2,861.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#58595B").s().p("AgrBiIAAjAIATAAIAAAbQALgeASAAQARAAAKATQAMAVAAAlIAAAIQAAAjgMAVQgKATgRAAQgSAAgLgeIAABBgAgQhAQgJAQAAAcIAAAIQAAAZAJARQAHAPAJAAQALAAAHgPQAHgRAAgaIAAgHQAAgcgHgQQgHgQgLAAQgJAAgHAQg");
	this.shape_635.setTransform(212,863.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXAKgMQALgNASAAQAJAAAOAGIAAgRQAAgfgagBQgOAAgOAIIAAgSQAPgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgKAYgRAAQgQAAgJgOgAgPAEQgGAJgBAPIAAADQABAPAFAJQAGAJAJAAQAKAAAGgKQAIgKgBgNIAAgfQgLgDgKAAQgKAAgGAHg");
	this.shape_636.setTransform(195.9,861.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#58595B").s().p("AgeA7QgOgWAAgjIAAgDQAAgkAOgWQAMgUASAAQATAAANAUQANAWAAAkIAAADQAAAjgNAWQgOAVgSAAQgSAAgMgVgAgSguQgIARAAAcIAAADQAAAcAIARQAHAQALAAQALAAAIgQQAHgRAAgcIAAgDQAAgcgHgRQgIgQgLAAQgLAAgHAQg");
	this.shape_637.setTransform(180.9,861.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#58595B").s().p("AgfBWQgMgUAAglIAAgJQAAgjAMgUQAKgUARABQARAAAMAdIAAhPIATAAIAADOIgTAAIAAgbQgLAegSAAQgRAAgKgTgAgRgWQgHARAAAaIAAAHQAAAcAHARQAHAPAKAAQAKAAAIgPQAIgRAAgbIAAgJQAAgZgIgRQgIgPgKAAQgKAAgHAPg");
	this.shape_638.setTransform(169.6,859.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXAKgMQALgNASAAQAKAAANAGIAAgRQAAgfgZgBQgOAAgOAIIAAgSQANgHARAAQASAAAMAMQAMANAAAWIAABtIgTAAIAAgVQgJAYgSAAQgPAAgKgOgAgPAEQgGAJAAAPIAAADQAAAPAFAJQAFAJAKAAQAKAAAGgKQAIgKgBgNIAAgfQgLgDgKAAQgKAAgGAHg");
	this.shape_639.setTransform(158.8,861.7);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#58595B").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_640.setTransform(151.5,859);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#58595B").s().p("AgfBDQgJgNAAgWIAAhuIASAAIAABqQAAAiAWAAQAIAAAIgJQAHgKAAgQIAAhpIASAAIAACaIgSAAIAAgWQgLAZgSAAQgQAAgJgMg");
	this.shape_641.setTransform(143.4,861.8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#58595B").s().p("AgSA9QgOgVAAgmIAAgDQAAglAOgVQANgUATAAQALAAAIAFIAAAUQgJgHgKAAQgMAAgGAOQgKAQAAAeIAAAEQAAAeAKAQQAGANAOAAQAJAAAIgHIAAATQgKAGgKAAQgSAAgNgTg");
	this.shape_642.setTransform(133.9,861.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#58595B").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_643.setTransform(127.1,859);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#58595B").s().p("AgeBCQgKgNAAgVIAAgDQAAgXALgMQAKgNATAAQAJAAAOAGIAAgRQAAgfgagBQgOAAgOAIIAAgSQAOgHAQAAQATAAALAMQAMANAAAWIAABtIgTAAIAAgVQgJAYgTAAQgOAAgKgOgAgPAEQgHAJAAAPIAAADQAAAPAGAJQAGAJAKAAQAJAAAHgKQAHgKAAgNIAAgfQgLgDgLAAQgKAAgGAHg");
	this.shape_644.setTransform(119.2,861.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#58595B").s().p("AgWBPQgQgbAAgyIAAgDQAAgyARgcQAPgZAXABQALAAAKAEIAAAVQgLgHgJABQgRgBgIAVQgLAVAAAqIAAADQAAAqALAWQAIATARABQAKgBALgGIAAATQgLAHgMAAQgXAAgPgag");
	this.shape_645.setTransform(109.5,859.1);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#58595B").s().p("AgGApIAEgiIgZATIgHgNIAcgNIgcgMIAHgNIAZATIgEgiIAMAAIgCAiIAXgTIAHANIgbAMIAbANIgHANIgXgTIACAig");
	this.shape_646.setTransform(95.6,852.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#54B5E6").s().p("AgiBJIBAiCIhOAAIAAgPIBhAAIAAANIhACEg");
	this.shape_647.setTransform(795.5,63.1);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#54B5E6").s().p("AgoBcQgTgIgOgNQgNgNgJgTQgIgUAAgTIAAAAQAAgTAIgTQAJgTANgMQAOgOATgIQATgIAVAAQAXAAASAIQASAGAPAPQAPAPAHARQAIARAAAVIAAAAQAAAVgIARQgIASgOAOQgOAOgTAIQgSAIgXAAQgVAAgTgIgAgUgwQgKAGgFAGQgGAFgEALQgEAJAAALIAAAAQAAAIAEAMQADAJAHAIQAHAHAJAEQAJAFAKAAQAMAAAJgFQAIgDAIgIQAGgIAEgJQADgJAAgLIAAAAQAAgKgEgJQgEgKgGgHQgIgIgIgDQgJgFgLAAQgKAAgKAEg");
	this.shape_648.setTransform(777.1,72.4);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#54B5E6").s().p("AgEB3QgJgCgIgHQgIgHgEgLQgEgKAAgSIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQAAATARAAQAPAAAMgHIAAAsQgHAEgMAEQgKADgOAAQgMAAgJgDg");
	this.shape_649.setTransform(758,70.1);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#54B5E6").s().p("AAhBhIAAhpQAAgUgJgJQgIgKgQAAQgOAAgJAKQgJAKAAATIAABpIg3AAIAAi+IA3AAIAAAbIAKgLQAHgHAFgDQAIgFAGgCQAHgCALAAQAggBARAUQARATAAAhIAAB6g");
	this.shape_650.setTransform(739.7,72.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#54B5E6").s().p("AghBcQgRgGgOgOQgOgNgIgSQgHgTAAgWIAAAAQAAgUAHgRQAGgTAOgNQALgOATgIQAQgIAUAAQAZAAARAJQAQAHANAQQALAOAGATQAGATAAATIAAAAIgBAOIiEAAQADASANAKQAMAKARAAQAOAAALgFQAIgDAOgMIAfAcQgOARgTAJQgUAKgZAAQgUAAgTgIgAgagsQgKAMgDASIBQAAQgDgSgLgMQgKgLgRAAQgQAAgKALg");
	this.shape_651.setTransform(717.4,72.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_652.setTransform(701,68.9);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#54B5E6").s().p("ABcBhIAAhpQAAgUgIgJQgJgKgPAAQgQAAgIAKQgJAKAAATIAABpIg1AAIAAhpQABgTgJgKQgIgKgPAAQgQAAgJAKQgJAJAAAUIAABpIg3AAIAAi+IA3AAIAAAbIAKgLIANgKQAHgFAIgCQAHgCAMAAQATAAAOAHQAMAIAIAPQALgOARgJQAOgIAVABQAfgBARATQAQARABAjIAAB7g");
	this.shape_653.setTransform(678.6,72.2);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#54B5E6").s().p("AgvBfQgLgEgJgHQgKgIgFgLQgFgKAAgPIAAgBQAAgPAFgMQAGgMAKgGQAKgGAPgFQAPgDAQAAQAKAAAOACQAKABAMAFIAAgEQAAgRgLgJQgJgJgUAAQgOAAgNADQgPADgLAFIgNgqQANgHATgEQAQgFAYAAQAuABATAVQAVAWAAAnIAABuIg0AAIAAgVQgLALgOAHQgLAGgVAAQgPABgLgEgAgYARQgKAGAAAOIAAAAQAAAMAIAGQAJAGANAAQARAAALgKQANgJAAgPIAAgKIgQgFIgTgCQgRAAgJAHg");
	this.shape_654.setTransform(650.3,72.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#54B5E6").s().p("AgEB3QgJgCgIgHQgIgHgEgLQgEgKAAgSIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQAAATARAAQAPAAAMgHIAAAsQgHAEgMAEQgKADgOAAQgMAAgJgDg");
	this.shape_655.setTransform(632.4,70.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#54B5E6").s().p("AgvBfQgMgEgJgHQgJgIgFgLQgFgKAAgPIAAgBQAAgRAFgKQAHgMAJgGQAKgGAPgFQAPgDAQAAQAKAAAOACQAKABAMAFIAAgEQAAgRgLgJQgKgJgTAAQgOAAgNADQgPADgLAFIgNgqQANgHATgEQAQgFAYAAQAuABATAVQAVAXAAAmIAABuIg1AAIAAgVQgKALgOAHQgLAGgVAAQgPABgLgEgAgYARQgKAHAAANIAAAAQgBAMAJAGQAJAGANAAQARAAALgKQANgJAAgPIAAgKIgQgFIgTgCQgRAAgJAHg");
	this.shape_656.setTransform(614.3,72.5);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#54B5E6").s().p("Ag4BiIAAi/IA2AAIAAAnQAGgTAPgNQAOgMAZACIAAA5IgDAAQgbAAgQAQQgOARAAAhIAABHg");
	this.shape_657.setTransform(598.3,72.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#54B5E6").s().p("AgEB3QgKgCgIgHQgGgGgFgMQgEgMAAgQIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQAAATARAAQAOAAANgHIAAAsQgGAEgNAEQgLADgNAAQgMAAgJgDg");
	this.shape_658.setTransform(582.3,70.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#54B5E6").s().p("AghBcQgRgGgOgOQgOgNgHgSQgIgTAAgWIAAAAQAAgTAHgSQAGgTAOgNQAMgOASgIQAQgIAUAAQAZAAARAJQASAIALAPQANAPAEASQAGAUAAASIAAAOIiEAAQADASANAKQAMAKARAAQANAAALgFQAKgEAMgLIAgAcQgPARgSAJQgVAKgZAAQgUAAgTgIgAgagsQgLAMgCASIBQAAQgDgTgKgLQgLgLgRAAQgPAAgLALg");
	this.shape_659.setTransform(553.3,72.4);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#54B5E6").s().p("AgtB+QgOgFgOgOQgMgNgHgSQgIgTAAgYIAAgBQAAgYAIgQQAHgTAMgMQANgOAPgFQAPgHASAAQAVAAANAJQAOAIAKALIAAheIA3AAIAAEEIg3AAIAAgbQgKANgOAJQgOAIgUAAQgSAAgPgGgAgQgPQgIADgHAIQgGAEgEALQgEAIAAANIAAABQAAANAEAJQAEAKAGAHQAHAIAIADQAIADAIAAQALAAAHgDQAIgDAHgIQAGgHAEgKQAEgJAAgNIAAgBQAAgNgEgIQgEgLgGgEQgHgIgIgDQgHgEgLAAQgIAAgIAEg");
	this.shape_660.setTransform(529.7,69.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#54B5E6").s().p("AgoBcQgTgIgOgNQgPgPgHgRQgIgSAAgVIAAAAQAAgUAIgSQAIgRAOgOQANgOAUgIQASgIAWAAQAWAAATAIQASAHAPAOQAPAPAHARQAIARAAAVIAAAAQAAAVgIARQgIATgOANQgNANgUAJQgSAIgXAAQgVAAgTgIgAgUgwQgKAFgGAHQgGAHgDAJQgEAJAAALIAAAAQAAALAEAJQADAJAHAIQAHAHAJAEQAJAFAKAAQAMAAAJgFQAIgDAIgIQAHgIACgJQAEgIAAgMIAAAAQAAgKgEgJQgDgJgHgIQgHgHgJgEQgKgFgKAAQgKAAgKAEg");
	this.shape_661.setTransform(495.3,72.4);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#54B5E6").s().p("AAhCIIAAhrQAAgUgJgJQgIgIgQAAQgOAAgJAIQgJAJAAAUIAABrIg3AAIAAi/IA3AAIAAAcIAKgMQAHgHAGgDQAHgFAGgCQAHgCALAAQAgAAARATQARATAAAfIAAB9gAhIhRIAHgVQAEgKAFgFQAFgGAIgEQAGgEAKAAQAJAAAHACIAZAKQAGACAFAAQAIAAAEgEQAFgGADgIIAdAJQgFAXgLAOQgJANgTAAQgIAAgIgCIgZgKQgHgCgEAAQgIAAgEAEQgEAEgFAKg");
	this.shape_662.setTransform(472.3,68.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#54B5E6").s().p("AgvBfQgLgEgKgHQgJgIgFgLQgFgLAAgOIAAgBQAAgQAGgLQAGgMAKgGQAKgGAOgFQAPgDARAAQAJAAAOACQALABALAFIAAgEQAAgRgLgJQgKgJgTAAQgOAAgNADQgNACgNAGIgNgqQANgHAUgEQAPgFAYAAQAuABAUAVQAUAXAAAmIAABuIg1AAIAAgVQgJALgPAHQgLAGgVAAQgPABgLgEgAgYARQgKAHAAANIAAAAQAAAMAIAGQAJAGANAAQARAAAMgKQALgIAAgQIAAgKQgHgDgJgCIgSgCQgQAAgKAHg");
	this.shape_663.setTransform(449.9,72.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#54B5E6").s().p("AAAB+IAAjDIgqALIgMgtIBGgWIAmAAIAAD7g");
	this.shape_664.setTransform(420.2,69.3);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#54B5E6").s().p("AgvBfQgLgEgKgHQgJgIgFgLQgFgLAAgOIAAgBQAAgQAGgLQAGgMAKgGQAKgGAOgFQAPgDARAAQAJAAAOACQALABALAFIAAgEQAAgRgLgJQgKgJgTAAQgOAAgOADQgMACgNAGIgNgqQANgHAUgEQAPgFAYAAQAuABAUAVQAUAXAAAmIAABuIg1AAIAAgVQgJALgPAHQgLAGgVAAQgPABgLgEgAgYARQgKAHAAANIAAAAQAAAMAIAGQAJAGANAAQARAAAMgKQALgJAAgPIAAgKQgHgDgJgCIgSgCQgQAAgKAHg");
	this.shape_665.setTransform(391.9,72.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#54B5E6").s().p("AgkBcQgVgHgUgPIAYgkQAOALARAGQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgDIgJgGIgagJIgUgIQgKgDgIgHQgIgEgGgLQgFgKAAgNIAAgBQAAgOAFgMQAHgMAJgHQAJgIANgEQANgEAMAAQASAAAUAGQATAGAPAKIgVAmQgPgIgNgFQgNgFgLAAQgHAAgGAEQgFADAAAHIAAAAQAAAEADADIAJAGIAuASQAKAEAIAHQAJAEAFAJQAGALAAANIAAAAQAAAQgGAMQgGAMgKAHQgKAIgNADQgNAEgQAAQgUAAgUgHg");
	this.shape_666.setTransform(361.7,72.4);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#54B5E6").s().p("AggBcQgTgGgOgOQgNgNgHgSQgIgTAAgWIAAAAQAAgUAHgRQAHgTANgNQAMgOARgIQARgIAUAAQAZAAARAJQARAIAMAPQAMAOAFATQAGAUAAASIAAAAIgBAOIiEAAQAFATAMAJQAMAKAQAAQAOAAALgFQAJgEANgLIAfAcQgOARgTAJQgVAKgZAAQgTAAgSgIgAgagsQgLALgCATIBQAAQgCgSgLgMQgLgLgRAAQgPAAgLALg");
	this.shape_667.setTransform(341.9,72.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_668.setTransform(325.5,68.9);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#54B5E6").s().p("AguBfQgMgEgJgHQgKgIgFgLQgFgKAAgPIAAgBQAAgPAGgMQAFgMALgGQAKgGAOgFQAPgDAQAAQAKAAAPACIAUAGIAAgEQAAgRgKgJQgKgJgSAAQgPAAgNADQgPADgLAFIgOgqQAOgHAUgEQAPgFAYAAQAtABAVAVQAUAWAAAnIAABuIg1AAIAAgVQgKALgOAHQgLAGgVAAQgOABgLgEgAgYARQgKAGAAAOIAAAAQAAAMAIAGQAIAGAOAAQARAAALgKQAMgJAAgPIAAgKIgPgFIgUgCQgPAAgKAHg");
	this.shape_669.setTransform(308.9,72.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#54B5E6").s().p("AhkB+IAAj4IA3AAIAAAcQAJgNAQgKQAOgIATAAQARAAAQAGQAPAGANANQAMANAIATQAGASABAYIAAABQgBAYgGAQQgIATgMANQgMANgQAGQgPAGgSAAQgUAAgOgIQgPgJgJgLIAABSgAgRhMQgHADgIAIQgGAHgEAKQgDAJgBANIAAABQABANADAJQAEAIAGAHQAIAIAHADQAHADAKAAQAJAAAIgDQAJgEAGgHQAGgHAEgIQAEgJAAgNIAAgBQAAgNgEgJQgEgKgGgHQgGgHgJgEQgIgDgJAAQgKAAgHADg");
	this.shape_670.setTransform(287.1,75.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_671.setTransform(269.1,68.9);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#54B5E6").s().p("Ag5BiIAAi/IA4AAIAAAnQAFgUAPgMQAPgMAXACIAAA5IgCAAQgbAAgQAQQgNARAAAhIAABHg");
	this.shape_672.setTransform(256.9,72.2);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#54B5E6").s().p("AgyB5QgVgFgTgKIATgpQAQAJAOAEQAPAFAUAAQAaAAANgNQAOgOAAgZIAAgKQgNAPgOAIQgPAJgTAAQgRAAgQgGQgQgHgLgLQgNgNgGgPQgHgPAAgVIAAgBQAAgVAHgRQAIgQALgNQAMgLAQgGQAQgGAQAAQAUAAAOAIQAOAIAMANIAAgZIA3AAIAACTQAAAbgHATQgHAUgNAMQgOAMgUAGQgUAGgZAAQgWAAgXgGgAgRhNQgJADgGAGQgGAGgEAIQgDAJAAAJIAAABQAAAUANAMQANAKATAAQAJAAAJgDQAJgEAGgDQAHgHADgHQAEgKAAgIIAAgBQAAgJgEgJQgDgIgHgGQgGgGgJgDQgIgEgKAAQgJAAgIAEg");
	this.shape_673.setTransform(236.1,75.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#54B5E6").s().p("AgoBcQgTgIgOgNQgNgNgJgTQgIgSAAgVIAAAAQAAgUAIgSQAJgTANgMQAOgOATgIQASgIAWAAQAXAAASAIQASAHAPAOQAPAPAHARQAIARAAAVIAAAAQAAAVgIARQgIATgOANQgNANgUAJQgSAIgXAAQgVAAgTgIgAgUgwQgKAGgFAGQgHAHgDAJQgEAJAAALIAAAAQAAALAEAJQADAJAHAIQAHAHAJAEQAJAFAKAAQAMAAAJgFQAIgDAIgIQAHgIACgJQAEgIAAgMIAAAAQAAgKgEgJQgDgJgHgIQgHgHgJgEQgKgFgKAAQgKAAgKAEg");
	this.shape_674.setTransform(212.4,72.4);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#54B5E6").s().p("AgtB+QgOgFgOgOQgMgNgHgSQgIgRAAgaIAAgBQAAgZAIgPQAHgTAMgMQAMgOAQgFQAPgHASAAQAUAAAOAJQANAIALALIAAheIA3AAIAAEEIg3AAIAAgbQgLANgNAJQgOAIgUAAQgRAAgQgGgAgQgPQgIADgHAIQgGAEgEALQgEAIAAANIAAABQAAANAEAJQAEAKAGAHQAHAIAIADQAHADAJAAQAKAAAIgDQAHgDAIgIQAGgHAEgKQAEgJAAgNIAAgBQAAgNgEgIQgEgLgGgEQgIgIgHgDQgIgEgKAAQgJAAgHAEg");
	this.shape_675.setTransform(188,69.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#54B5E6").s().p("AhGBOQgRgSAAgiIAAh7IA3AAIAABpQAAAUAJAKQAIAKAPAAQAPAAAJgKQAJgKAAgUIAAhpIA3AAIAAC/Ig3AAIAAgbIgKALQgGAHgHADQgIAFgFACQgHADgLgBQggABgRgUg");
	this.shape_676.setTransform(165,72.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#54B5E6").s().p("AggBcQgSgGgPgOQgNgNgIgSQgHgTAAgWIAAAAQAAgUAHgRQAHgTAMgNQANgOARgIQARgIAUAAQAZAAARAJQARAIAMAPQALAOAHATQAFAUAAASIAAAAIgBAOIiEAAQAEATAMAJQAMAKARAAQAOAAAKgFQAJgDAOgMIAfAcQgOARgTAJQgVAKgZAAQgTAAgSgIgAgagsQgLAMgDASIBQAAQgBgSgLgMQgKgLgSAAQgOAAgMALg");
	this.shape_677.setTransform(142.8,72.4);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#54B5E6").s().p("AgkBcQgVgHgUgPIAYgkQAOALARAGQARAGALAAQAMAAAFgEQAGgEAAgGIAAgBQAAgEgEgDQgDgDgFgDIgagJIgVgIQgKgDgIgHQgIgEgGgLQgFgJAAgOIAAgBQAAgOAGgMQAFgMAKgHQAKgIAMgEQAOgEAMAAQASAAATAGQATAGAPAKIgUAmQgPgIgNgFQgOgFgKAAQgIAAgGAEQgFAEAAAGIAAAAQAAAEAEADIAIAGIALAFIAPAFIAUAIQAMAGAHAFQAIADAFAKQAGALAAANIAAAAQAAAPgGANQgGAMgJAHQgMAIgMADQgMAEgRAAQgUAAgUgHg");
	this.shape_678.setTransform(122.5,72.4);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#54B5E6").s().p("AhkB+IAAj4IA3AAIAAAcQAKgOAOgJQAPgIATAAQASAAAPAGQAQAGAMANQANAOAGASQAIASAAAYIAAABQAAAYgIAQQgGATgNANQgNANgPAGQgPAGgSAAQgVAAgNgIQgOgJgKgLIAABSgAgRhMQgIAEgHAHQgGAHgEAKQgEALAAALIAAABQAAALAEALQAEAIAGAHQAHAHAIAEQAIADAJAAQAKAAAHgDQAIgEAHgHQAGgHAEgIQAEgLAAgLIAAgBQAAgLgEgLQgEgKgGgHQgHgHgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_679.setTransform(102.1,75.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#54B5E6").s().p("AgkBcQgUgHgVgPIAYgkQARAMAOAFQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgDQgDgEgFgDIgagJIgVgHQgKgDgJgIQgHgDgGgLQgFgJAAgOIAAgBQAAgOAGgMQAFgLAKgJQAKgHAMgEQALgEAOAAQATAAASAGQAUAFAPALIgUAmQgOgIgOgFQgOgFgLAAQgIAAgFAEQgEADAAAGIAAABQAAAEACADQAEADAFACIAuASQAIAEAKAIQAJAFAFAIQAGAJAAAOIAAABQAAARgGAKQgFAMgLAIQgKAHgNAEQgOAEgPAAQgSAAgWgHg");
	this.shape_680.setTransform(1386.4,29.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#54B5E6").s().p("AgvBfQgMgEgJgHQgIgHgGgMQgFgMAAgNIAAgBQAAgQAGgLQAFgMALgFQAKgIAOgEQAOgDASAAQANAAAKACIAWAFIAAgDQAAgRgLgJQgKgJgTAAQgSAAgKADIgZAHIgOgpQASgIAPgDQASgFAWAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgJAMgPAGQgNAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAABQAAALAIAGQAJAGANAAQARAAAMgJQALgKAAgPIAAgKQgFgCgLgDQgIgCgLAAQgOAAgLAHg");
	this.shape_681.setTransform(1366.5,29.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#54B5E6").s().p("ABcBiIAAhqQAAgTgIgKQgJgKgPAAQgQAAgIAKQgJAKAAATIAABqIg1AAIAAhqQAAgTgIgKQgJgKgPAAQgPAAgJAKQgJAKAAATIAABqIg2AAIAAi/IA2AAIAAAcQAEgGAGgGIANgKQAFgEAKgDQAJgDAKAAQASAAAPAIQAMAIAHAPQAOgQAOgHQAQgIATAAQAfAAARASQARASAAAjIAAB8g");
	this.shape_682.setTransform(1339.3,29.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#54B5E6").s().p("AgoBcQgSgHgPgOQgNgNgJgTQgIgSABgVIAAAAQgBgTAIgSQAJgTANgNQAOgNATgJQAVgIATAAQAXAAASAIQAUAIANANQANANAJATQAHATABATIAAAAQgBAVgHASQgJATgNAMQgOAOgTAIQgTAIgWAAQgVAAgTgIgAgUgvQgHADgJAIQgGAGgEALQgDAKAAAJIAAAAQAAAKAEAKQADAJAHAIQAIAIAIAEQAKAEAJAAQAMAAAJgEQAKgFAFgHQAHgGADgKQAEgMAAgJIAAAAQAAgIgEgLQgDgJgHgIQgHgHgJgEQgJgFgLAAQgLAAgJAFg");
	this.shape_683.setTransform(1310.3,29.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#54B5E6").s().p("AgEB3QgLgCgHgHQgGgGgFgMQgEgJAAgTIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQAAATARAAQAOAAANgHIAAAsQgHAEgMAEQgLADgNAAQgLAAgKgDg");
	this.shape_684.setTransform(1291.2,27);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#54B5E6").s().p("AAhBiIAAhqQAAgTgJgKQgIgKgQAAQgOAAgJAKQgJAKAAATIAABqIg3AAIAAi/IA3AAIAAAcQAEgHAGgFIANgKQAFgEAIgDQAJgDAJAAQAfAAASATQARATAAAiIAAB7g");
	this.shape_685.setTransform(1272.8,29.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#54B5E6").s().p("AgsCKIAAi/IA0AAIAAC/gAgohKIAog/IAtAUIgtArg");
	this.shape_686.setTransform(1258,25);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#54B5E6").s().p("AgkBcQgVgHgUgPIAYgkQARAMAOAFQAPAGAMAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgDQgDgEgGgDIgagJIgUgHQgJgCgJgJQgIgDgGgLQgFgKAAgNIAAgBQAAgOAGgMQAFgLAKgJQAJgHANgEQALgEAOAAQASAAAUAGQASAFAQALIgVAmQgNgIgPgFQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEADADQAFAEAEABIAZALIAVAHQAHAEAMAIQAIAFAFAIQAGAKAAANIAAABQAAARgGAKQgGANgKAHQgJAHgOAEQgPAEgOAAQgSAAgWgHg");
	this.shape_687.setTransform(1241.4,29.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#54B5E6").s().p("AgvBfQgMgEgJgHQgJgIgFgLQgFgMAAgNIAAgBQAAgQAGgLQAGgMAKgFQAKgIAOgEQANgDATAAQAOAAAJACIAWAFIAAgDQgBgRgJgJQgLgJgTAAQgRAAgLADIgZAHIgNgpQARgIAPgDQASgFAWAAQAtAAAUAWQAVAVAAAoIAABuIg0AAIAAgVQgLAMgOAGQgNAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAABQAAALAIAGQAJAGAMAAQASAAAMgJQAMgKAAgPIAAgKIgRgFQgIgCgLAAQgPAAgKAHg");
	this.shape_688.setTransform(1210.8,29.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgOgNgIgTQgIgSAAgVIAAAAQAAgTAIgSQAJgUANgMQAOgNATgJQAVgIATAAQAXAAASAIQATAIAOANQAOANAIATQAIATgBATIAAAAQABAVgIASQgIARgOAOQgOAOgTAIQgTAIgWAAQgVAAgTgIgAgUgvQgIADgHAIQgGAGgFALQgDAKAAAJIAAAAQAAAKAEAKQADAJAHAIQAGAHAKAFQALAEAIAAQAKAAALgEQAJgFAHgHQAFgGAEgKQAEgMAAgJIAAAAQAAgIgEgLQgCgJgIgIQgJgIgHgDQgKgFgKAAQgLAAgJAFg");
	this.shape_689.setTransform(1177.9,29.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#54B5E6").s().p("AgtB+QgQgHgMgNQgNgNgGgSQgIgSAAgYIAAgBQAAgXAIgSQAGgRANgNQAMgNAQgHQARgGAQgBQATAAAPAJQAOAJAKALIAAheIA3AAIAAEEIg3AAIAAgbQgKAOgOAHQgOAJgUAAQgRABgQgHgAgQgPQgJADgGAIQgGAEgEAKQgEALAAALIAAABQAAALAEALQAEALAGAGQAHAHAIAEQAJADAHAAQAJAAAKgDQAIgFAGgGQAGgJAEgIQAEgLAAgLIAAgBQAAgLgEgKQgEgKgGgFQgGgIgIgDQgKgFgJAAQgHAAgJAFg");
	this.shape_690.setTransform(1153.4,26);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_691.setTransform(1136.3,25.8);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#54B5E6").s().p("AgVB8QgPgKgJgKIAAAZIg3AAIAAkEIA3AAIAABhQALgPANgIQAPgJATAAQAPABASAGQAPAHANANQAMANAHARQAIASAAAXIAAABQAAAYgIASQgHASgMANQgMANgQAHQgPAHgSgBQgUABgOgJgAgRgPQgJADgGAIQgHAFgDAKQgEAIAAANIAAABQAAAMAEAKQADAIAHAJQAHAHAIAEQAJADAIAAQAIAAAJgDQAJgEAGgHQAHgHADgKQAEgJAAgNIAAgBQAAgNgEgIQgDgLgHgEQgGgIgJgDQgJgFgIAAQgIAAgJAFg");
	this.shape_692.setTransform(1119.2,26);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgIgSQgHgSAAgXIAAAAQAAgUAHgRQAHgTAMgNQANgNASgJQASgIASAAQAYAAARAJQATAJALAOQALANAHAVQAFATAAASIAAABIgBANIiEAAQAEATAMAKQANAJAQAAQAOAAAKgFQAKgEANgLIAfAcQgOARgTAJQgTAKgbAAQgUAAgRgHgAgagsQgLAMgDASIBQAAQgBgSgLgLQgKgMgSAAQgPAAgLALg");
	this.shape_693.setTransform(1095.6,29.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#54B5E6").s().p("AgtB+QgQgHgMgNQgNgOgGgRQgIgSAAgYIAAgBQAAgXAIgSQAGgRANgNQAMgNAQgHQARgGAQgBQAUAAAOAJQAOAJAKALIAAheIA3AAIAAEEIg3AAIAAgbQgKAOgOAHQgOAJgUAAQgSABgPgHgAgQgPQgJADgGAIQgHAFgDAJQgEALAAALIAAABQAAALAEALQADAIAHAJQAHAHAIAEQAJADAHAAQAJAAAJgDQAJgFAGgGQAGgJAEgIQAEgLAAgLIAAgBQAAgLgEgKQgEgKgGgFQgGgIgJgDQgJgFgJAAQgHAAgJAFg");
	this.shape_694.setTransform(1072,26);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#54B5E6").s().p("AgcBFQgPgGgJgKQgKgJgGgPQgGgOAAgPQAAgNAGgPQAGgOAKgKQAKgKAOgGQAOgGAOAAQAQAAAOAGQANAGALAKQAKALAGANQAFANAAAPQAAAQgFANQgGANgLALQgJAKgPAGQgOAGgPAAQgPAAgNgGgAgZg9QgNAHgIAIQgJAJgFAMQgFAMAAANQAAAOAFAMQAEALAKAKQAIAJANAGQANAFAMAAQANAAANgFQAMgFAJgKQAJgJAGgMQAFgOAAgMQAAgLgFgOQgFgLgJgKQgKgKgMgFQgLgFgPAAQgNAAgMAFgAARAmIgRgaIgMAAIAAAaIgSAAIAAhPIAiAAQAQAAAHAHQAJAHAAANQAAAKgFAEQgFAGgIADIAUAdgAgMgCIAQAAQAHAAADgDQAEgDAAgFQAAgGgEgDQgDgDgHAAIgQAAg");
	this.shape_695.setTransform(1040.8,19.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#54B5E6").s().p("AgaB9IAAhjIhhiWIBBAAIA6BlIA9hlIA/AAIhhCVIAABkg");
	this.shape_696.setTransform(1019.3,26.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#54B5E6").s().p("AhzB9IAAj5IBjAAQAcAAAYAJQAYAJASARQATATAJAVQAJAYAAAZIAAAAQAAAZgJAYQgKAXgSARQgRAQgZAKQgaAKgaAAgAg7BLIArAAQAQAAANgFQAOgGAJgKQALgKAFgNQAFgPABgQIAAAAQgBgOgFgPQgFgOgLgKQgJgKgOgGQgNgGgQAAIgrAAg");
	this.shape_697.setTransform(995.3,26.3);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#54B5E6").s().p("AgaB9IAAj5IA1AAIAAD5g");
	this.shape_698.setTransform(974.6,26.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#54B5E6").s().p("AAsB9Ig0hQIgsAAIAABQIg3AAIAAj5IBxAAQAtAAAZAVQAZAXAAAnIAAAAQAAAfgPARQgQATgXAJIA9BagAg0gCIA2AAQAUAAAMgKQALgKAAgQIAAgBQAAgSgMgJQgMgJgUAAIg1AAg");
	this.shape_699.setTransform(956.5,26.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#54B5E6").s().p("AgoB4QgZgKgRgRQgRgRgKgYQgKgYAAgbIAAgBQAAgZAKgYQAKgXASgTQATgSAXgKQAZgKAaAAQAPABAPACQAPADALADQAMAFALAGIAUAPIgjAqIgPgLIgOgIQgIgDgJgBQgJgCgLAAQgOgBgNAHQgNAGgJAKQgKAMgGANQgGAQABAOIAAAAQgBARAGAOQAHARAJAJQALAMANAFQAOAGAPgBQAfAAAVgOIAAgkIg4AAIAAgvIBuAAIAABsQgTAPgcANQgZAMgkAAQgcAAgYgKg");
	this.shape_700.setTransform(928.3,26.3);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#54B5E6").s().p("AheB9IAAj5IC8AAIAAAxIiFAAIAAAzIB1AAIAAAvIh1AAIAAA1ICGAAIAAAxg");
	this.shape_701.setTransform(902.9,26.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#54B5E6").s().p("AhZB9IAAj5IA4AAIAADHIB7AAIAAAyg");
	this.shape_702.setTransform(880.2,26.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#54B5E6").s().p("AhiB9IAAj5IBlAAQAWAAATAGQASAHAMALQAMAMAGAPQAHAPAAAUIAAABQAAAXgIAOQgHAPgOAMQgNALgUAGQgTAGgSAAIgqAAIAABLgAgqAAIAqAAQAUAAALgJQAMgKAAgRIAAAAQAAgTgMgKQgMgKgTAAIgqAAg");
	this.shape_703.setTransform(857.1,26.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#54B5E6").s().p("AgoCFQgSgHgPgPQgPgOgHgRQgIgSAAgVIAAgBQAAgVAIgSQAIgQAOgOQANgNAUgIQAUgIAUAAQAWAAATAIQATAHAOAOQAPAOAHAPQAIASAAAVIAAABQAAAWgIARQgIASgOAOQgNAOgUAHQgSAIgXAAQgVAAgTgHgAgUgHQgIAEgIAFQgHAJgCAIQgEAJAAALIAAABQAAAMAEAIQADAKAHAHQAHAIAJAEQAKAEAJAAQALAAAKgEQAJgEAHgHQAHgIACgJQAEgJAAgLIAAgBQAAgLgEgJQgDgKgHgHQgHgFgJgFQgKgEgKAAQgLAAgJAEgAgThMIAmg/IAvAUIguArg");
	this.shape_704.setTransform(821.4,25.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#54B5E6").s().p("AAhBiIAAhqQAAgTgJgKQgIgKgQAAQgOAAgJAKQgJAKAAATIAABqIg3AAIAAi/IA3AAIAAAcQAEgHAGgFIANgKQAFgEAIgDQAJgDAJAAQAfAAASATQARATAAAiIAAB7g");
	this.shape_705.setTransform(798.3,29.1);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#54B5E6").s().p("AgoBcQgSgHgPgOQgPgPgHgRQgIgRAAgWIAAAAQAAgUAIgRQAIgTAOgNQANgNAUgJQAUgIAUAAQAWAAATAIQATAIAOANQAPAPAHARQAIASAAAUIAAAAQAAAVgIASQgIARgOAOQgNAOgUAIQgSAIgXAAQgVAAgTgIgAgUgvQgIADgIAIQgHAIgCAJQgEAIAAALIAAAAQAAALAEAJQADAJAHAIQAHAHAJAFQAKAEAJAAQALAAAKgEQAJgFAHgHQAHgHACgJQAEgJAAgMIAAAAQAAgKgEgJQgDgJgHgIQgHgHgJgEQgKgFgKAAQgLAAgJAFg");
	this.shape_706.setTransform(775.1,29.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#54B5E6").s().p("AgtB+QgPgGgNgOQgMgNgHgSQgIgSAAgYIAAgBQAAgXAIgSQAHgRAMgNQAMgNAQgHQARgGAQgBQAUAAAOAJQAPAJAJALIAAheIA3AAIAAEEIg3AAIAAgbQgLAOgNAHQgOAJgUAAQgSABgPgHgAgQgPQgJADgGAIQgGAFgEAJQgEAJAAANIAAABQAAAMAEAKQADAKAHAHQAGAGAJAFQAJADAHAAQAJAAAJgDQAJgEAGgHQAHgJADgIQAEgKAAgMIAAgBQAAgNgEgIQgDgKgHgFQgGgIgJgDQgJgFgJAAQgHAAgJAFg");
	this.shape_707.setTransform(750.6,26);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#54B5E6").s().p("AAhBiIAAhqQAAgTgJgKQgIgKgQAAQgNAAgKAKQgJAKAAATIAABqIg3AAIAAi/IA3AAIAAAcQAEgHAGgFQAGgGAGgEQAFgDAJgEQAJgDAJAAQAfAAASATQARAUAAAhIAAB7g");
	this.shape_708.setTransform(727.8,29.1);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#54B5E6").s().p("AgvBfQgMgEgJgHQgIgHgGgMQgFgMAAgNIAAgBQAAgQAGgLQAGgMAKgFQALgIANgEQAOgDASAAQANAAAKACIAWAFIAAgDQAAgRgLgJQgKgJgTAAQgSAAgKADIgZAHIgOgpQAUgIAOgDQARgFAWAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgJAMgPAGQgNAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAABQAAALAIAGQAJAGANAAQARAAAMgJQALgKAAgPIAAgKQgFgCgLgDQgIgCgLAAQgOAAgLAHg");
	this.shape_709.setTransform(705.4,29.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#54B5E6").s().p("AgVB8QgPgKgJgKIAAAZIg3AAIAAkEIA3AAIAABhQALgPANgIQAPgJATAAQAQABARAGQAQAHAMANQAMANAHARQAIASAAAXIAAABQAAAYgIASQgHASgMANQgMAOgQAGQgPAHgSgBQgUABgOgJgAgRgPQgJADgGAIQgGAEgEALQgEAKAAALIAAABQAAALAEALQAEALAGAGQAGAGAJAFQAJADAIAAQAIAAAJgDQAJgEAGgHQAHgJADgIQAEgLAAgLIAAgBQAAgLgEgKQgDgKgHgFQgGgIgJgDQgJgFgIAAQgIAAgJAFg");
	this.shape_710.setTransform(683.6,26);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#54B5E6").s().p("AguBfQgNgEgIgHQgJgIgGgLQgFgKAAgPIAAgBQAAgPAFgMQAGgMALgFQALgIANgEQAOgDARAAQAPAAAJACIAVAFIAAgDQAAgRgKgJQgKgJgTAAQgSAAgJADIgaAHIgOgpQATgIAPgDQARgFAWAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgKAMgOAGQgMAHgUAAQgNAAgMgEgAgYARQgLAHAAANIAAABQAAALAJAGQAIAGAOAAQARAAALgJQAMgKAAgPIAAgKIgPgFQgJgCgLAAQgPAAgKAHg");
	this.shape_711.setTransform(659.9,29.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#54B5E6").s().p("AgkBcQgVgHgUgPIAYgkQARAMAOAFQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgDQgDgEgGgDIgZgJIgVgHQgJgCgJgJQgIgDgGgLQgFgJAAgOIAAgBQAAgPAGgLQAFgLAKgJQAKgHAMgEQALgEAOAAQATAAATAGQASAFAQALIgVAmQgPgJgNgEQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEADADIAJAFIAZALIAVAHQAJAFAKAHQAIAFAFAIQAGAKAAANIAAABQAAAQgGALQgGANgKAHQgJAHgOAEQgPAEgOAAQgSAAgWgHg");
	this.shape_712.setTransform(629.7,29.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#54B5E6").s().p("AghBdQgSgIgNgNQgOgNgIgSQgHgSAAgXIAAAAQAAgSAHgTQAHgTANgNQAMgNASgJQASgIASAAQAYAAASAJQATAKAKANQAMAPAGATQAFATAAASIAAAOIiEAAQADATAMAKQAOAJAQAAQANAAALgFQALgEALgLIAgAcQgPARgSAJQgUAKgaAAQgVAAgSgHgAgagsQgLAMgCASIBQAAQgDgTgKgKQgKgMgSAAQgPAAgLALg");
	this.shape_713.setTransform(609.9,29.3);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#54B5E6").s().p("AgDB3QgMgCgGgHQgIgHgEgLQgEgLAAgRIAAhZIgXAAIAAgvIAXAAIAAgxIA0AAIAAAxIAuAAIAAAvIguAAIAABQQABATARAAQAOAAANgHIAAAsQgIAFgLADQgKADgOAAQgLAAgJgDg");
	this.shape_714.setTransform(591.7,27);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#54B5E6").s().p("AAhBiIAAhqQAAgTgIgKQgJgKgQAAQgOAAgJAKQgJAKAAATIAABqIg3AAIAAi/IA3AAIAAAcQAEgGAGgGIANgKQAFgEAIgDQAJgDAKAAQAeAAASATQARATAAAiIAAB7g");
	this.shape_715.setTransform(573.4,29.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#54B5E6").s().p("AghBdQgTgIgNgNQgNgNgIgSQgHgSAAgXIAAAAQAAgSAHgTQAIgTALgNQANgNASgJQASgIATAAQAXAAASAJQASAJAMAOQALAPAGATQAFARAAAUIgBAOIiEAAQAEATAMAKQAOAJAQAAQAOAAAKgFQALgEALgLIAfAcQgOARgSAJQgUAKgbAAQgUAAgSgHgAgZgsQgKALgFATIBRAAQgCgSgLgLQgKgMgRAAQgQAAgKALg");
	this.shape_716.setTransform(551.1,29.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_717.setTransform(534.7,25.8);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#54B5E6").s().p("AgcBcQgSgIgOgNQgOgOgGgSQgIgSAAgVIAAAAQAAgSAIgTQAHgTANgNQAOgNASgJQAUgIATAAQAaAAATAJQARAJAPAPIghAkQgKgJgKgHQgJgGgQAAQgKAAgHAFQgIADgGAIQgGAGgEALQgDAJAAAKIAAAAQAAALADAJQAEAKAGAHQAGAHAJAFQAIAEAKAAQANAAALgGQAKgEALgLIAgAhQgPAPgRAKQgSAKgdAAQgUAAgSgIg");
	this.shape_718.setTransform(519.2,29.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#54B5E6").s().p("AguBfQgNgEgJgHQgIgIgGgLQgFgKAAgPIAAgBQAAgPAGgMQAGgMAJgFQAMgIANgEQANgDATAAQAOAAAKACIAVAFIAAgDQAAgRgLgJQgJgJgUAAQgRAAgLADIgZAHIgNgpQARgIAQgDQARgFAWAAQAtAAAUAWQAVAVAAAoIAABuIg0AAIAAgVQgLAMgOAGQgNAHgTAAQgNAAgMgEgAgYARQgKAHAAANIAAABQAAALAIAGQAIAGANAAQATAAALgJQAMgKgBgPIAAgKIgQgFQgHgCgMAAQgPAAgKAHg");
	this.shape_719.setTransform(497.6,29.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#54B5E6").s().p("AhjB+IAAj4IA2AAIAAAcQAKgOAPgJQANgJAUAAQAPABARAGQAPAGAOAOQAMANAIARQAGASAAAZIAAABQAAAZgGAPQgIASgMANQgMANgQAHQgPAHgSgBQgUABgOgJQgPgKgJgKIAABSgAgRhLQgIADgHAIQgHAHgDAKQgEAIABANIAAABQgBAMAEAKQADAGAHAJQAHAIAIADQAJADAIAAQAIAAAJgDQAJgEAGgHQAHgHAEgIQADgJAAgNIAAgBQAAgNgDgIQgEgLgHgGQgGgIgJgDQgJgFgIAAQgIAAgJAFg");
	this.shape_720.setTransform(475.8,32);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#54B5E6").s().p("AgkBcQgVgHgUgPIAYgkQARAMAOAFQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgDQgDgEgGgDIgZgJIgVgHQgJgCgJgJQgIgDgGgLQgFgJAAgOIAAgBQAAgPAGgLQAFgLAKgJQAKgHAMgEQALgEAOAAQATAAATAGQASAFAQALIgUAmQgRgJgMgEQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEAEADQADADAFACIAZALIAVAHQAJAFAKAHQAIAFAFAIQAGAKAAANIAAABQAAAQgGALQgGANgKAHQgJAHgOAEQgPAEgOAAQgSAAgWgHg");
	this.shape_721.setTransform(443.1,29.3);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgNgNgJgTQgIgTAAgUIAAAAQAAgSAIgTQAJgUANgMQAOgNATgJQAVgIATAAQAXAAASAIQAUAIANANQAPAPAHARQAIASAAAUIAAAAQAAAVgIASQgHARgPAOQgOAOgTAIQgTAIgWAAQgVAAgTgIgAgUgvQgJAEgGAHQgGAGgEALQgEAKAAAJIAAAAQAAAJAEALQADAJAHAIQAHAHAJAFQAKAEAJAAQALAAAKgEQAKgFAGgHQAGgGAEgKQADgKAAgLIAAAAQAAgKgEgJQgDgJgHgIQgIgHgIgEQgJgFgLAAQgLAAgJAFg");
	this.shape_722.setTransform(422.4,29.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_723.setTransform(405.1,25.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#54B5E6").s().p("AghBdQgTgIgNgNQgNgNgIgSQgHgSAAgXIAAAAQAAgSAHgTQAIgTALgNQANgNASgJQASgIATAAQAXAAASAJQASAJAMAOQALAPAGATQAFARAAAUIgBAOIiEAAQAEATAMAKQAOAJAQAAQAOAAAKgFQALgEALgLIAfAcQgOARgSAJQgUAKgbAAQgUAAgSgHgAgZgsQgKALgFATIBRAAQgDgTgKgKQgKgMgRAAQgQAAgKALg");
	this.shape_724.setTransform(377.8,29.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#54B5E6").s().p("AgtB+QgPgGgNgOQgMgNgHgSQgIgSAAgYIAAgBQAAgXAIgSQAHgRAMgNQAMgNAQgHQARgGAQgBQAUAAAOAJQAPAJAJALIAAheIA3AAIAAEEIg3AAIAAgbQgLAOgNAHQgOAJgUAAQgRABgQgHgAgQgPQgJADgGAIQgGAFgEAJQgEAJAAANIAAABQAAAMAEAKQADAKAHAHQAGAHAJAEQAJADAHAAQAJAAAJgDQAJgEAGgHQAHgJADgIQAEgKAAgMIAAgBQAAgNgEgIQgDgKgHgFQgGgIgJgDQgJgFgJAAQgHAAgJAFg");
	this.shape_725.setTransform(354.3,26);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#54B5E6").s().p("AA0B7QgMgFgHgIQgIgIgFgNQgEgKAAgOQAAgOAEgMQAEgKAJgKQAHgJAMgGQALgEAOAAQAOAAALAEQAMAGAHAJQAJAIAEAMQAEAMAAANQAAANgEAMQgGAMgHAJQgKAJgKAEQgKAFgOAAQgPAAgKgFgAA8ApQgHALAAAMQABANAGAJQAHAJAKAAQALAAAHgJQAFgIAAgNQAAgPgHgIQgGgKgKAAQgMAAgFAJgAhwB9IC2j5IArAAIi2D5gAhlgDQgKgFgJgJQgIgJgFgMQgEgLAAgOQAAgNAEgLQAFgNAJgIQAGgIANgGQALgFANAAQAPAAAKAFQAMAGAHAHQAJAKAEALQAFAMgBANQABAOgFALQgEALgJAJQgHAJgMAGQgLADgOAAQgOAAgLgDgAhehVQgFAKAAAMQAAANAHAKQAHAJAJAAQALAAAHgJQAFgJAAgOQAAgNgGgJQgHgJgKAAQgLAAgHAJg");
	this.shape_726.setTransform(316.4,26.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#54B5E6").s().p("AAAB+IAAjDIgqALIgMguIBHgVIAmAAIAAD7g");
	this.shape_727.setTransform(292.1,26.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_728.setTransform(269.5,25.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#54B5E6").s().p("AggBdQgUgIgNgNQgNgNgIgSQgHgSAAgXIAAAAQAAgUAHgRQAHgTAMgNQANgNARgJQATgIASAAQAYAAASAJQASAKALANQALANAHAVQAFATAAASIAAABIgBANIiEAAQAEAUAMAJQAOAJAPAAQAOAAAKgFQAMgEALgLIAfAcQgOARgTAJQgTAKgbAAQgUAAgRgHgAgZgsQgMALgDATIBQAAQgCgRgKgMQgKgMgSAAQgPAAgKALg");
	this.shape_729.setTransform(253.1,29.3);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#54B5E6").s().p("AgtB+QgQgHgMgNQgMgNgHgSQgIgSAAgYIAAgBQAAgXAIgSQAHgRAMgNQAMgNAQgHQARgGAQgBQAUAAAOAJQAPAJAJALIAAheIA3AAIAAEEIg3AAIAAgbQgKAOgOAHQgOAJgUAAQgSABgPgHgAgQgPQgJADgGAIQgHAFgDAJQgEALAAALIAAABQAAALAEALQADAIAHAJQAHAHAIAEQAJADAHAAQAJAAAJgDQAJgFAGgGQAGgGAEgLQAEgLAAgLIAAgBQAAgLgEgKQgEgLgGgEQgGgIgJgDQgJgFgJAAQgHAAgJAFg");
	this.shape_730.setTransform(229.5,26);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#54B5E6").s().p("AgkBcQgVgHgTgPIAWgkQATANANAEQAQAGAMAAQALAAAGgEQAGgEgBgGIAAgBQAAgEgDgDQgDgEgGgDIgagJIgTgHQgKgCgJgJQgJgDgFgLQgFgKAAgNIAAgBQAAgOAFgMQAHgLAJgJQAKgHAMgEQAMgEANAAQATAAATAGQASAFAQALIgVAmQgNgIgOgFQgOgFgLAAQgIAAgEAEQgGADAAAGIAAABQAAAEADADQAEADAFACIAuASQAIAEALAIQAIAFAFAIQAGAJAAAOIAAABQgBARgFAKQgFAMgKAIQgJAHgPAEQgPAEgOAAQgSAAgWgHg");
	this.shape_731.setTransform(197.8,29.3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#54B5E6").s().p("AgoBcQgSgHgPgOQgPgPgHgRQgIgRAAgWIAAAAQAAgUAIgRQAIgTAOgNQANgNAUgJQAUgIAUAAQAWAAATAIQATAIAOANQAPAPAHARQAIASAAAUIAAAAQAAAVgIASQgIARgOAOQgNAOgUAIQgSAIgXAAQgVAAgTgIgAgUgvQgIADgIAIQgHAIgCAJQgEAIAAALIAAAAQAAALAEAJQADAJAHAIQAHAHAJAFQAKAEAJAAQALAAAKgEQAKgFAFgHQAHgHADgJQAEgJAAgMIAAAAQAAgKgEgJQgDgJgHgIQgHgHgJgEQgKgFgKAAQgLAAgJAFg");
	this.shape_732.setTransform(177.1,29.3);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#54B5E6").s().p("AAhBiIAAhqQAAgTgJgKQgIgKgQAAQgNAAgKAKQgJAKAAATIAABqIg3AAIAAi/IA3AAIAAAcQAEgHAGgFQAGgGAGgEIAOgHQAJgDAJAAQAfAAASATQARAUAAAhIAAB7g");
	this.shape_733.setTransform(154,29.1);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#54B5E6").s().p("AggBdQgUgIgNgNQgNgNgHgSQgIgSAAgXIAAAAQAAgUAHgRQAHgTANgNQAMgNARgJQATgIASAAQAYAAARAJQASAJAMAOQALANAGAVQAGATAAASIAAABIgBANIiEAAQAEATANAKQAMAJAQAAQAPAAAKgFQAKgEAMgLIAfAcQgOARgTAJQgTAKgaAAQgWAAgQgHgAgagsQgLAMgCASIBQAAQgCgSgMgLQgJgMgSAAQgPAAgLALg");
	this.shape_734.setTransform(131.7,29.3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#54B5E6").s().p("ABHB9IAAiiIhHBpIAAAAIhGhoIAAChIg2AAIAAj5IA7AAIBBBqIBChqIA7AAIAAD5g");
	this.shape_735.setTransform(105.1,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(163));

	// mask 53 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ACvZ4IAA2sIE2AAIAAWsg");
	var mask_graphics_1 = new cjs.Graphics().p("AjXLWIAA2rIGvAAIAAWrg");
	var mask_graphics_2 = new cjs.Graphics().p("AkULWIAA2rIIqAAIAAWrg");
	var mask_graphics_3 = new cjs.Graphics().p("AlSLWIAA2rIKlAAIAAWrg");
	var mask_graphics_4 = new cjs.Graphics().p("AmQLWIAA2rIMhAAIAAWrg");
	var mask_graphics_5 = new cjs.Graphics().p("AnNLWIAA2rIOcAAIAAWrg");
	var mask_graphics_6 = new cjs.Graphics().p("AoLLWIAA2rIQXAAIAAWrg");
	var mask_graphics_7 = new cjs.Graphics().p("ApJLWIAA2rISTAAIAAWrg");
	var mask_graphics_8 = new cjs.Graphics().p("AqGLWIAA2rIUOAAIAAWrg");
	var mask_graphics_9 = new cjs.Graphics().p("ArELWIAA2rIWJAAIAAWrg");
	var mask_graphics_10 = new cjs.Graphics().p("AsCLWIAA2rIYFAAIAAWrg");
	var mask_graphics_11 = new cjs.Graphics().p("As/LWIAA2rIZ/AAIAAWrg");
	var mask_graphics_12 = new cjs.Graphics().p("At9LWIAA2rIb7AAIAAWrg");
	var mask_graphics_13 = new cjs.Graphics().p("Au7LWIAA2rId3AAIAAWrg");
	var mask_graphics_14 = new cjs.Graphics().p("Av4LWIAA2rIfxAAIAAWrg");
	var mask_graphics_15 = new cjs.Graphics().p("Aw2LWIAA2rMAhtAAAIAAWrg");
	var mask_graphics_16 = new cjs.Graphics().p("Ax0LWIAA2rMAjpAAAIAAWrg");
	var mask_graphics_17 = new cjs.Graphics().p("AyxLWIAA2rMAljAAAIAAWrg");
	var mask_graphics_18 = new cjs.Graphics().p("AzvLWIAA2rMAnfAAAIAAWrg");
	var mask_graphics_19 = new cjs.Graphics().p("A0tLWIAA2rMApbAAAIAAWrg");
	var mask_graphics_20 = new cjs.Graphics().p("A1qLWIAA2rMArVAAAIAAWrg");
	var mask_graphics_21 = new cjs.Graphics().p("A2oLWIAA2rMAtRAAAIAAWrg");
	var mask_graphics_22 = new cjs.Graphics().p("A3mLWIAA2rMAvNAAAIAAWrg");
	var mask_graphics_23 = new cjs.Graphics().p("A4jLWIAA2rMAxHAAAIAAWrg");
	var mask_graphics_24 = new cjs.Graphics().p("A5hLWIAA2rMAzDAAAIAAWrg");
	var mask_graphics_25 = new cjs.Graphics().p("A6fLWIAA2rMA0/AAAIAAWrg");
	var mask_graphics_26 = new cjs.Graphics().p("A7cLWIAA2rMA26AAAIAAWrg");
	var mask_graphics_27 = new cjs.Graphics().p("A8aLWIAA2rMA41AAAIAAWrg");
	var mask_graphics_28 = new cjs.Graphics().p("A9YLWIAA2rMA6xAAAIAAWrg");
	var mask_graphics_29 = new cjs.Graphics().p("A+VLWIAA2rMA8sAAAIAAWrg");
	var mask_graphics_30 = new cjs.Graphics().p("A/TLWIAA2rMA+nAAAIAAWrg");
	var mask_graphics_31 = new cjs.Graphics().p("EggRALWIAA2rMBAjAAAIAAWrg");
	var mask_graphics_32 = new cjs.Graphics().p("EghOALWIAA2rMBCeAAAIAAWrg");
	var mask_graphics_33 = new cjs.Graphics().p("EgiMALWIAA2rMBEZAAAIAAWrg");
	var mask_graphics_34 = new cjs.Graphics().p("EgjKALWIAA2rMBGVAAAIAAWrg");
	var mask_graphics_35 = new cjs.Graphics().p("EgkHALWIAA2rMBIQAAAIAAWrg");
	var mask_graphics_36 = new cjs.Graphics().p("EglFALWIAA2rMBKLAAAIAAWrg");
	var mask_graphics_37 = new cjs.Graphics().p("EgmDALWIAA2rMBMHAAAIAAWrg");
	var mask_graphics_38 = new cjs.Graphics().p("EgnAALWIAA2rMBOBAAAIAAWrg");
	var mask_graphics_39 = new cjs.Graphics().p("Egn+ALWIAA2rMBP9AAAIAAWrg");
	var mask_graphics_40 = new cjs.Graphics().p("Ego8ALWIAA2rMBR5AAAIAAWrg");
	var mask_graphics_41 = new cjs.Graphics().p("Egp5ALWIAA2rMBTzAAAIAAWrg");
	var mask_graphics_42 = new cjs.Graphics().p("Egq3ALWIAA2rMBVvAAAIAAWrg");
	var mask_graphics_43 = new cjs.Graphics().p("Egr1ALWIAA2rMBXrAAAIAAWrg");
	var mask_graphics_44 = new cjs.Graphics().p("EgsyALWIAA2rMBZlAAAIAAWrg");
	var mask_graphics_45 = new cjs.Graphics().p("EgtwALWIAA2rMBbhAAAIAAWrg");
	var mask_graphics_46 = new cjs.Graphics().p("EguuALWIAA2rMBddAAAIAAWrg");
	var mask_graphics_47 = new cjs.Graphics().p("EgvrALWIAA2rMBfXAAAIAAWrg");
	var mask_graphics_48 = new cjs.Graphics().p("EgwpALWIAA2rMBhTAAAIAAWrg");
	var mask_graphics_49 = new cjs.Graphics().p("EgxnALWIAA2rMBjPAAAIAAWrg");
	var mask_graphics_50 = new cjs.Graphics().p("EgykALWIAA2rMBlJAAAIAAWrg");
	var mask_graphics_51 = new cjs.Graphics().p("EgziALWIAA2rMBnFAAAIAAWrg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg0gALWIAA2rMBpBAAAIAAWrg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg1dALWIAA2rMBq8AAAIAAWrg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg2bALWIAA2rMBs3AAAIAAWrg");
	var mask_graphics_55 = new cjs.Graphics().p("Eg3ZALWIAA2rMBuzAAAIAAWrg");
	var mask_graphics_56 = new cjs.Graphics().p("Eg4WALWIAA2rMBwuAAAIAAWrg");
	var mask_graphics_57 = new cjs.Graphics().p("Eg5UALWIAA2rMBypAAAIAAWrg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg6SALWIAA2rMB0lAAAIAAWrg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg2FAZ4IAA2sMB2gAAAIAAWsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:48.5,y:165.7}).wait(1).to({graphics:mask_graphics_1,x:87.7,y:258.8}).wait(1).to({graphics:mask_graphics_2,x:93.9,y:258.8}).wait(1).to({graphics:mask_graphics_3,x:100,y:258.8}).wait(1).to({graphics:mask_graphics_4,x:106.2,y:258.8}).wait(1).to({graphics:mask_graphics_5,x:112.4,y:258.8}).wait(1).to({graphics:mask_graphics_6,x:118.5,y:258.8}).wait(1).to({graphics:mask_graphics_7,x:124.7,y:258.8}).wait(1).to({graphics:mask_graphics_8,x:130.9,y:258.8}).wait(1).to({graphics:mask_graphics_9,x:137,y:258.8}).wait(1).to({graphics:mask_graphics_10,x:143.2,y:258.8}).wait(1).to({graphics:mask_graphics_11,x:149.4,y:258.8}).wait(1).to({graphics:mask_graphics_12,x:155.5,y:258.8}).wait(1).to({graphics:mask_graphics_13,x:161.7,y:258.8}).wait(1).to({graphics:mask_graphics_14,x:167.9,y:258.8}).wait(1).to({graphics:mask_graphics_15,x:174,y:258.8}).wait(1).to({graphics:mask_graphics_16,x:180.2,y:258.8}).wait(1).to({graphics:mask_graphics_17,x:186.4,y:258.8}).wait(1).to({graphics:mask_graphics_18,x:192.5,y:258.8}).wait(1).to({graphics:mask_graphics_19,x:198.7,y:258.8}).wait(1).to({graphics:mask_graphics_20,x:204.9,y:258.8}).wait(1).to({graphics:mask_graphics_21,x:211,y:258.8}).wait(1).to({graphics:mask_graphics_22,x:217.2,y:258.8}).wait(1).to({graphics:mask_graphics_23,x:223.4,y:258.8}).wait(1).to({graphics:mask_graphics_24,x:229.5,y:258.8}).wait(1).to({graphics:mask_graphics_25,x:235.7,y:258.8}).wait(1).to({graphics:mask_graphics_26,x:241.9,y:258.8}).wait(1).to({graphics:mask_graphics_27,x:248,y:258.8}).wait(1).to({graphics:mask_graphics_28,x:254.2,y:258.8}).wait(1).to({graphics:mask_graphics_29,x:260.4,y:258.8}).wait(1).to({graphics:mask_graphics_30,x:266.5,y:258.8}).wait(1).to({graphics:mask_graphics_31,x:272.7,y:258.8}).wait(1).to({graphics:mask_graphics_32,x:278.9,y:258.8}).wait(1).to({graphics:mask_graphics_33,x:285,y:258.8}).wait(1).to({graphics:mask_graphics_34,x:291.2,y:258.8}).wait(1).to({graphics:mask_graphics_35,x:297.4,y:258.8}).wait(1).to({graphics:mask_graphics_36,x:303.5,y:258.8}).wait(1).to({graphics:mask_graphics_37,x:309.7,y:258.8}).wait(1).to({graphics:mask_graphics_38,x:315.9,y:258.8}).wait(1).to({graphics:mask_graphics_39,x:322,y:258.8}).wait(1).to({graphics:mask_graphics_40,x:328.2,y:258.8}).wait(1).to({graphics:mask_graphics_41,x:334.4,y:258.8}).wait(1).to({graphics:mask_graphics_42,x:340.5,y:258.8}).wait(1).to({graphics:mask_graphics_43,x:346.7,y:258.8}).wait(1).to({graphics:mask_graphics_44,x:352.9,y:258.8}).wait(1).to({graphics:mask_graphics_45,x:359,y:258.8}).wait(1).to({graphics:mask_graphics_46,x:365.2,y:258.8}).wait(1).to({graphics:mask_graphics_47,x:371.4,y:258.8}).wait(1).to({graphics:mask_graphics_48,x:377.5,y:258.8}).wait(1).to({graphics:mask_graphics_49,x:383.7,y:258.8}).wait(1).to({graphics:mask_graphics_50,x:389.9,y:258.8}).wait(1).to({graphics:mask_graphics_51,x:396,y:258.8}).wait(1).to({graphics:mask_graphics_52,x:402.2,y:258.8}).wait(1).to({graphics:mask_graphics_53,x:408.4,y:258.8}).wait(1).to({graphics:mask_graphics_54,x:414.5,y:258.8}).wait(1).to({graphics:mask_graphics_55,x:420.7,y:258.8}).wait(1).to({graphics:mask_graphics_56,x:426.9,y:258.8}).wait(1).to({graphics:mask_graphics_57,x:433,y:258.8}).wait(1).to({graphics:mask_graphics_58,x:439.2,y:258.8}).wait(1).to({graphics:mask_graphics_59,x:412.3,y:165.7}).wait(104));

	// 53
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(97,202,0.48,0.48);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163));

	// mask 42 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_29 = new cjs.Graphics().p("EA87AaDIAAzfIDTAAIAATfg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AilJvIAAzdIFLAAIAATdg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjiJvIAAzdIHFAAIAATdg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkfJvIAAzdII/AAIAATdg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlcJvIAAzdIK5AAIAATdg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AmZJvIAAzdIMzAAIAATdg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AnWJvIAAzdIOtAAIAATdg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AoTJvIAAzdIQnAAIAATdg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ApQJvIAAzdIShAAIAATdg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AqNJvIAAzdIUbAAIAATdg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ArKJvIAAzdIWUAAIAATdg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AsHJvIAAzdIYPAAIAATdg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AtEJvIAAzdIaIAAIAATdg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AuBJvIAAzdIcCAAIAATdg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Au+JvIAAzdId9AAIAATdg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Av7JvIAAzdIf2AAIAATdg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Aw4JvIAAzdMAhxAAAIAATdg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Ax0JvIAAzdMAjpAAAIAATdg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AyxJvIAAzdMAljAAAIAATdg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AzuJvIAAzdMAndAAAIAATdg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A0rJvIAAzdMApXAAAIAATdg");
	var mask_1_graphics_50 = new cjs.Graphics().p("A1oJvIAAzdMArRAAAIAATdg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A2lJvIAAzdMAtLAAAIAATdg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A3iJvIAAzdMAvFAAAIAATdg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A4fJvIAAzdMAw/AAAIAATdg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A5cJvIAAzdMAy5AAAIAATdg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A6ZJvIAAzdMA0zAAAIAATdg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A7WJvIAAzdMA2tAAAIAATdg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A8TJvIAAzdMA4nAAAIAATdg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A9QJvIAAzdMA6hAAAIAATdg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A+NJvIAAzdMA8bAAAIAATdg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A/KJvIAAzdMA+VAAAIAATdg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EggHAJvIAAzdMBAPAAAIAATdg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EghEAJvIAAzdMBCJAAAIAATdg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgiBAJvIAAzdMBEDAAAIAATdg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Egi+AJvIAAzdMBF9AAAIAATdg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Egj7AJvIAAzdMBH3AAAIAATdg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Egk4AJvIAAzdMBJwAAAIAATdg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Egl1AJvIAAzdMBLrAAAIAATdg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgmyAJvIAAzdMBNkAAAIAATdg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgnvAJvIAAzdMBPfAAAIAATdg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgosAJvIAAzdMBRYAAAIAATdg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgppAJvIAAzdMBTTAAAIAATdg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgqlAJvIAAzdMBVLAAAIAATdg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgriAJvIAAzdMBXFAAAIAATdg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgsfAJvIAAzdMBY/AAAIAATdg");
	var mask_1_graphics_75 = new cjs.Graphics().p("ARGaDIAAzfMBa8AAAIAATfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_1_graphics_29,x:411,y:166.8}).wait(1).to({graphics:mask_1_graphics_30,x:817.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_31,x:823.7,y:271.2}).wait(1).to({graphics:mask_1_graphics_32,x:829.8,y:271.2}).wait(1).to({graphics:mask_1_graphics_33,x:835.9,y:271.2}).wait(1).to({graphics:mask_1_graphics_34,x:842,y:271.2}).wait(1).to({graphics:mask_1_graphics_35,x:848.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_36,x:854.2,y:271.2}).wait(1).to({graphics:mask_1_graphics_37,x:860.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_38,x:866.4,y:271.2}).wait(1).to({graphics:mask_1_graphics_39,x:872.5,y:271.2}).wait(1).to({graphics:mask_1_graphics_40,x:878.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_41,x:884.7,y:271.2}).wait(1).to({graphics:mask_1_graphics_42,x:890.8,y:271.2}).wait(1).to({graphics:mask_1_graphics_43,x:896.9,y:271.2}).wait(1).to({graphics:mask_1_graphics_44,x:903,y:271.2}).wait(1).to({graphics:mask_1_graphics_45,x:909.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_46,x:915.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_47,x:921.2,y:271.2}).wait(1).to({graphics:mask_1_graphics_48,x:927.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_49,x:933.4,y:271.2}).wait(1).to({graphics:mask_1_graphics_50,x:939.5,y:271.2}).wait(1).to({graphics:mask_1_graphics_51,x:945.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_52,x:951.7,y:271.2}).wait(1).to({graphics:mask_1_graphics_53,x:957.8,y:271.2}).wait(1).to({graphics:mask_1_graphics_54,x:963.9,y:271.2}).wait(1).to({graphics:mask_1_graphics_55,x:970,y:271.2}).wait(1).to({graphics:mask_1_graphics_56,x:976.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_57,x:982.2,y:271.2}).wait(1).to({graphics:mask_1_graphics_58,x:988.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_59,x:994.4,y:271.2}).wait(1).to({graphics:mask_1_graphics_60,x:1000.5,y:271.2}).wait(1).to({graphics:mask_1_graphics_61,x:1006.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_62,x:1012.7,y:271.2}).wait(1).to({graphics:mask_1_graphics_63,x:1018.8,y:271.2}).wait(1).to({graphics:mask_1_graphics_64,x:1024.9,y:271.2}).wait(1).to({graphics:mask_1_graphics_65,x:1031,y:271.2}).wait(1).to({graphics:mask_1_graphics_66,x:1037.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_67,x:1043.2,y:271.2}).wait(1).to({graphics:mask_1_graphics_68,x:1049.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_69,x:1055.4,y:271.2}).wait(1).to({graphics:mask_1_graphics_70,x:1061.5,y:271.2}).wait(1).to({graphics:mask_1_graphics_71,x:1067.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_72,x:1073.6,y:271.2}).wait(1).to({graphics:mask_1_graphics_73,x:1079.7,y:271.2}).wait(1).to({graphics:mask_1_graphics_74,x:1085.8,y:271.2}).wait(1).to({graphics:mask_1_graphics_75,x:691.5,y:166.8}).wait(88));

	// 42
	this.instance_1 = new lib.Image_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(820,202,0.48,0.48);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(134));

	// mask 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_59 = new cjs.Graphics().p("EBo0AaDIAA0jIDPAAIAAUjg");
	var mask_2_graphics_60 = new cjs.Graphics().p("Ah3KRIAA0hIDvAAIAAUhg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AiIKRIAA0hIERAAIAAUhg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AiZKRIAA0hIEyAAIAAUhg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AipKRIAA0hIFTAAIAAUhg");
	var mask_2_graphics_64 = new cjs.Graphics().p("Ai6KRIAA0hIF1AAIAAUhg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AjLKRIAA0hIGXAAIAAUhg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AjcKRIAA0hIG5AAIAAUhg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AjtKRIAA0hIHbAAIAAUhg");
	var mask_2_graphics_68 = new cjs.Graphics().p("Aj+KRIAA0hIH9AAIAAUhg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AkPKRIAA0hIIfAAIAAUhg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AkgKRIAA0hIJAAAIAAUhg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AkxKRIAA0hIJiAAIAAUhg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AlCKRIAA0hIKEAAIAAUhg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AlSKRIAA0hIKlAAIAAUhg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AljKRIAA0hILHAAIAAUhg");
	var mask_2_graphics_75 = new cjs.Graphics().p("Al0KRIAA0hILpAAIAAUhg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AmFKRIAA0hIMLAAIAAUhg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AmWKRIAA0hIMtAAIAAUhg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AmnKRIAA0hINPAAIAAUhg");
	var mask_2_graphics_79 = new cjs.Graphics().p("Am4KRIAA0hINxAAIAAUhg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AnJKRIAA0hIOSAAIAAUhg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AnaKRIAA0hIO1AAIAAUhg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AnqKRIAA0hIPVAAIAAUhg");
	var mask_2_graphics_83 = new cjs.Graphics().p("EBieAaDIAA0jIP6AAIAAUjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_2_graphics_59,x:691.5,y:166.8}).wait(1).to({graphics:mask_2_graphics_60,x:1374.4,y:267.8}).wait(1).to({graphics:mask_2_graphics_61,x:1376.1,y:267.8}).wait(1).to({graphics:mask_2_graphics_62,x:1377.8,y:267.8}).wait(1).to({graphics:mask_2_graphics_63,x:1379.4,y:267.8}).wait(1).to({graphics:mask_2_graphics_64,x:1381.1,y:267.8}).wait(1).to({graphics:mask_2_graphics_65,x:1382.8,y:267.8}).wait(1).to({graphics:mask_2_graphics_66,x:1384.5,y:267.8}).wait(1).to({graphics:mask_2_graphics_67,x:1386.2,y:267.8}).wait(1).to({graphics:mask_2_graphics_68,x:1387.9,y:267.8}).wait(1).to({graphics:mask_2_graphics_69,x:1389.6,y:267.8}).wait(1).to({graphics:mask_2_graphics_70,x:1391.3,y:267.8}).wait(1).to({graphics:mask_2_graphics_71,x:1393,y:267.8}).wait(1).to({graphics:mask_2_graphics_72,x:1394.7,y:267.8}).wait(1).to({graphics:mask_2_graphics_73,x:1396.3,y:267.8}).wait(1).to({graphics:mask_2_graphics_74,x:1398,y:267.8}).wait(1).to({graphics:mask_2_graphics_75,x:1399.7,y:267.8}).wait(1).to({graphics:mask_2_graphics_76,x:1401.4,y:267.8}).wait(1).to({graphics:mask_2_graphics_77,x:1403.1,y:267.8}).wait(1).to({graphics:mask_2_graphics_78,x:1404.8,y:267.8}).wait(1).to({graphics:mask_2_graphics_79,x:1406.5,y:267.8}).wait(1).to({graphics:mask_2_graphics_80,x:1408.2,y:267.8}).wait(1).to({graphics:mask_2_graphics_81,x:1409.9,y:267.8}).wait(1).to({graphics:mask_2_graphics_82,x:1411.5,y:267.8}).wait(1).to({graphics:mask_2_graphics_83,x:732.1,y:166.8}).wait(80));

	// 5
	this.instance_2 = new lib.Image_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1383,202,0.48,0.48);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(104));

	// animaciones
	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#918F90").s().p("Ehq0AIJIAAwQMDVpAAAIAAQQg");
	this.shape_736.setTransform(780.3,272.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_736).wait(163));

	// pop ups
	this.instance_3 = new lib._90("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2248.9,352.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({x:1683.1},39).to({x:1751.1},19).to({x:1705.1},8).to({x:1723.1},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1116,553.2,1372.1,933.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;