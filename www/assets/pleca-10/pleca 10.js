(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1645,
	height: 245,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



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



(lib.pleca10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F89F5E").s().p("A1pSoMAAAglPMAoEAAAIAADWQALC+AgC+QAOBVAUBWQAqC7A/CrIAZBFIgaBGQiaGZgbHuIAADag");
	this.shape.setTransform(-653.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F5E").s().p("Eh7QAS/MAAAgl9MD2hAAAMAAAAl9gEh62ASlMD1tAAAMAAAglKMj1tAAAg");
	this.shape_1.setTransform(2.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAOAAAPAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_2.setTransform(546.6,85.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcALgNQAMgOATABQAKAAANAGIAAgOQAAgggZABQgOgBgRAJIAAgfQASgHASAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAGAAAGgIQAFgIAAgKIAAghQgJgEgIAAQgRAAAAAdg");
	this.shape_3.setTransform(535.7,85.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AASBaIAAh7QABgcgTAAQgGAAgFAHQgGAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAKAOQAJANAAAXIAACBg");
	this.shape_4.setTransform(523.9,85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQAKgOAUABQALAAAMAGIAAgOQAAgggZABQgOgBgRAJIAAgfQARgHAUAAQAXAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgRAAQgRAAgKgPgAgRAfIAAAEQAAAeARAAQAGAAAGgIQAFgIAAgKIAAghQgKgEgHAAQgRAAAAAdg");
	this.shape_5.setTransform(511.5,85.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AA0BaIAAh7QAAgcgSAAQgIAAgFAHQgGAIAAANIAAB7IgdAAIAAh7QAAgcgSAAQgIAAgFAHQgGAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQANgaAUAAQATAAAKAXQAPgXAUAAQAQAAAKAMQAMAOAAAYIAACBg");
	this.shape_6.setTransform(496.2,85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHALANAAQAMAAATgMIACAdQgUAMgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_7.setTransform(480.7,85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAPAAAOAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_8.setTransform(470.2,85.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgtB2IAAgbIAthgQAOglAAgQQAAgMgHgHQgHgHgJAAQgPAAgQAKIAAggQAUgLASAAQAUAAAOAOQAOAOAAAYIAAADQAAANgEAPQgEAKgLAYIgkBVIA3AAIAAAhg");
	this.shape_9.setTransform(454.6,82.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgfBGQgTgZABgqIAAgEQAAgrAPgYQAOgWAVAAQAXAAANAWQANAYAAArIAAAPIhEAAQABAYAKANQAHALANAAQAMAAASgMIAEAdQgVAMgSAAQgYAAgPgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_10.setTransform(438.1,85.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgLAAQghAAAAggg");
	this.shape_11.setTransform(428.4,82.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgRAAQgHAAgGAHQgFAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAJAOQAKANAAAXIAACBg");
	this.shape_12.setTransform(418.4,85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcALgNQALgOAUABQAKAAANAGIAAgOQABgggaABQgOgBgRAJIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAHAAAFgIQAGgIgBgKIAAghQgKgEgHAAQgRAAAAAdg");
	this.shape_13.setTransform(405.9,85.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgeBaIAAiwIAeAAIAAAXQAJgbAWACIAAAlIAAAAQgfAAAAAoIAABlg");
	this.shape_14.setTransform(397.1,85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgoBMQgJgNAAgWIAAiCIAgAAIAAB7QgBAbASAAQAHAAAFgHQAGgHAAgOIAAh6IAgAAIAACwIggAAIAAgWQgMAZgTAAQgRAAgKgOg");
	this.shape_15.setTransform(386.3,85.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgOgSQgGAPAAAZIAAAKQAAAbAGAQQAFAOAJAAQAIAAAGgOQAHgQAAgbIAAgKQAAgZgHgQQgGgOgIAAQgJAAgFAPg");
	this.shape_16.setTransform(373.4,82.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAKAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgKAAQgIAAgGAPg");
	this.shape_17.setTransform(355.6,85.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgLAAQghAAAAggg");
	this.shape_18.setTransform(345.6,82.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgSAAQgGAAgGAHQgFAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAJAOQAKANAAAXIAACBg");
	this.shape_19.setTransform(335.5,85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AggBGQgRgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQABAYAKANQAHALAMAAQAIAAAIgDIAQgJIACAdQgUAMgSAAQgXAAgRgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_20.setTransform(323.4,85.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgOB2IAAiwIAdAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_21.setTransform(314.5,82.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AA0BaIAAh7QgBgcgRAAQgIAAgFAHQgFAIAAANIAAB7IgfAAIAAh7QAAgcgRAAQgJAAgEAHQgGAIAAANIAAB7IgfAAIAAiwIAfAAIAAAXQANgaAUAAQATAAAKAXQAOgXAUAAQAQAAALAMQAMAOgBAYIAACBg");
	this.shape_22.setTransform(301.9,85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQAKgOAUABQALAAAMAGIAAgOQAAgggZABQgOgBgRAJIAAgfQASgHASAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAGAAAGgIQAFgIAAgKIAAghQgKgEgHAAQgRAAAAAdg");
	this.shape_23.setTransform(286,85.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgTBRIAAh4IgNAAIAAgaIANAAIAAgvIAdAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgKAAQghAAAAggg");
	this.shape_24.setTransform(276.4,82.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQAKgOAUABQAKAAAOAGIAAgOQgBgggZABQgNgBgSAJIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgPAAgLgPgAgRAfIAAAEQAAAeARAAQAGAAAGgIQAFgIABgKIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_25.setTransform(266.6,85.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAJgbAXACIAAAlIgBAAQgfAAAAAoIAABlg");
	this.shape_26.setTransform(257.8,85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgLAAQghAAAAggg");
	this.shape_27.setTransform(249.2,82.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_28.setTransform(233.7,85.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAJgbAXACIAAAlIgBAAQgfAAAAAoIAABlg");
	this.shape_29.setTransform(224.3,85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgLAAQghAAAAggg");
	this.shape_30.setTransform(215.8,82.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_31.setTransform(205.6,85.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgPB2IAAjrIAfAAIAADrg");
	this.shape_32.setTransform(191.1,82.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgfBGQgTgZABgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQAOAYAAArIAAAPIhFAAQABAYAKANQAHALANAAQAMAAASgMIADAdQgTAMgTAAQgXAAgQgVgAgSgJIAnAAQgBg1gTAAQgSAAgBA1g");
	this.shape_33.setTransform(182.3,85.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgkBoQgQgYAAgpIAAgJQAAgnAQgYQAOgWAWAAQAXAAAOAWQAQAYAAAnIAAAJQAAApgQAYQgOAXgXgBQgWABgOgXgAgPgMQgFAOgBAcIAAAJQABAcAFAQQAGAPAJAAQAKAAAGgPQAFgQAAgcIAAgJQAAgcgFgOQgGgPgKAAQgJAAgGAPgAgLhIIAcg1IAaANIgkAog");
	this.shape_34.setTransform(164.8,81.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAJgbAXACIAAAlIgBAAQgfAAAAAoIAABlg");
	this.shape_35.setTransform(154.8,85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAEAAAGgCIAAAaQgJAFgLAAQghAAAAggg");
	this.shape_36.setTransform(146.3,82.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgoBTIAAggQAVALANAAQAGAAAFgEQAGgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAOAAAPAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_37.setTransform(137.9,85.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgOB2IAAiwIAdAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_38.setTransform(130.1,82.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgRAAQgHAAgGAHQgGAIAAANIAAB7IgfAAIAAiwIAfAAIAAAXQAOgaARAAQASAAAJAOQAKANAAAXIAACBg");
	this.shape_39.setTransform(120.9,85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgOB2IAAiwIAdAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_40.setTransform(111.6,82.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AA0BaIAAh7QAAgcgSAAQgIAAgFAHQgFAIAAANIAAB7IgfAAIAAh7QAAgcgRAAQgJAAgEAHQgGAIAAANIAAB7IgfAAIAAiwIAfAAIAAAXQANgaAUAAQATAAAKAXQAOgXAUAAQAQAAALAMQAMAOgBAYIAACBg");
	this.shape_41.setTransform(98.9,85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTATAAQARAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgRAAQgTAAgKgUgAgOgSQgGAPABAZIAAAKQgBAbAGAQQAGAOAIAAQAIAAAHgOQAGgQAAgbIAAgKQAAgZgGgQQgHgOgIAAQgIAAgGAPg");
	this.shape_42.setTransform(82.6,82.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcALgNQAMgOATABQAKAAANAGIAAgOQAAgggZABQgOgBgRAJIAAgfQARgHAUAAQAXAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgRAAQgQAAgLgPgAgRAfIAAAEQAAAeARAAQAGAAAGgIQAGgIgBgKIAAghQgJgEgIAAQgRAAAAAdg");
	this.shape_43.setTransform(70.3,85.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgoBTIAAggQAVALANAAQAGAAAFgEQAGgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAOAAAPAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_44.setTransform(54.7,85.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AggBGQgRgZgBgqIAAgEQABgrAQgYQAOgWAUAAQAWAAAOAWQANAYAAArIAAAPIhDAAQABAYAJANQAHALAMAAQANAAATgMIACAdQgUAMgRAAQgYAAgRgVgAgSgJIAmAAQABg1gUAAQgSAAgBA1g");
	this.shape_45.setTransform(44.2,85.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgOB2IAAjrIAdAAIAADrg");
	this.shape_46.setTransform(35.3,82.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgfBGQgTgZABgqIAAgEQAAgrAPgYQAOgWAVAAQAXAAANAWQAOAYAAArIAAAPIhFAAQABAYAKANQAHALANAAQAMAAASgMIADAdQgUAMgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgSAAgBA1g");
	this.shape_47.setTransform(21.2,85.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgoBTIAAggQAUALAOAAQAGAAAGgEQAEgFAAgIIAAgBQABgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgUAOgNQANgMATAAQAPAAAOAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAGAEAHQAFAGAMAPQASAOAHANQAGAMAAAPIAAABQAAAVgOANQgOANgSAAQgRAAgTgIg");
	this.shape_48.setTransform(10.6,85.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgVAeQAYgGgCgaIgPAAIAAgpIAlAAIAAAiQAAAtgpAIg");
	this.shape_49.setTransform(-3.2,94.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAFgEQAGgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgUANgNQANgMAUAAQAPAAAOAFIAAAfQgOgIgOAAQgGAAgFAFQgEAEgBAHIAAABQAAAHAFAGQAFAHALAOQARAOAIANQAGAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_50.setTransform(-10.8,85.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQALgOATABQALAAANAGIAAgOQAAgggaABQgOgBgRAJIAAgfQASgHASAAQA0AAAAA7IAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAHAAAFgIQAGgIAAgKIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_51.setTransform(-21.7,85.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgSAAQgGAAgGAHQgFAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQANgaASAAQARAAAKAOQAJANAAAXIAACBg");
	this.shape_52.setTransform(-33.5,85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQALgOATABQALAAANAGIAAgOQAAgggaABQgOgBgRAJIAAgfQASgHASAAQA0AAAAA7IAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAHAAAFgIQAGgIAAgKIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_53.setTransform(-46,85.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AA0BaIAAh7QAAgcgSAAQgIAAgFAHQgGAIAAANIAAB7IgdAAIAAh7QAAgcgSAAQgIAAgFAHQgGAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaAVAAQATAAAKAXQAPgXATAAQARAAAKAMQAMAOAAAYIAACBg");
	this.shape_54.setTransform(-61.2,85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AggBGQgRgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHALAMAAQANAAATgMIACAdQgUAMgSAAQgXAAgRgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_55.setTransform(-76.7,85.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAOAAAPAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_56.setTransform(-87.2,85.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgtB2IAAgbIAthgQAOglAAgQQAAgMgHgHQgHgHgJAAQgPAAgQAKIAAggQATgLATAAQAUAAAOAOQAOAOAAAYIAAADQAAANgEAPIgPAiIglBVIA4AAIAAAhg");
	this.shape_57.setTransform(-102.8,82.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhDAAQABAYAJANQAHALANAAQAMAAATgMIACAdQgTAMgTAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_58.setTransform(-119.4,85.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgTAWIAAAKQAAA5ATAAQAJAAAGgOQAGgQAAgbIAAgKQAAgZgGgQQgGgOgJAAQgTAAAAA3g");
	this.shape_59.setTransform(-131.8,82.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgHAQAAAcIAAAHQAAAcAHAQQAGAPAIAAQAKAAAFgPQAHgQAAgcIAAgHQAAgcgHgQQgFgPgKAAQgIAAgGAPg");
	this.shape_60.setTransform(-149.6,85.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQALgTASAAQARAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgRAAQgTAAgKgUgAgOgSQgFAPAAAZIAAAKQAAAbAFAQQAFAOAJAAQAIAAAHgOQAFgQABgbIAAgKQgBgZgFgQQgHgOgIAAQgJAAgFAPg");
	this.shape_61.setTransform(-162.4,82.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQALgOATABQALAAANAGIAAgOQAAgggaABQgOgBgRAJIAAgfQASgHASAAQA0AAAAA7IAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAHAAAFgIQAGgIAAgKIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_62.setTransform(-174.8,85.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgOBZIgnixIAfAAIAWB9IAXh9IAfAAIgnCxg");
	this.shape_63.setTransform(-185.9,85.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgmBMQgKgOAAgYIAAgFQAAgcAMgNQAKgOAUABQALAAAMAGIAAgOQAAgggZABQgOgBgRAJIAAgfQASgHASAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgPgAgRAfIAAAEQAAAeARAAQAHAAAFgIQAFgHAAgLIAAghQgKgEgHAAQgRAAAAAdg");
	this.shape_64.setTransform(-197.5,85.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgOB2IAAjrIAdAAIAADrg");
	this.shape_65.setTransform(-206,82.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHALAMAAQAIAAAIgDIAQgJIACAdQgUAMgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_66.setTransform(-220.1,85.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgOgSQgGAPAAAZIAAAKQAAAbAGAQQAFAOAJAAQAIAAAGgOQAHgQAAgbIAAgKQAAgZgHgQQgGgOgIAAQgJAAgFAPg");
	this.shape_67.setTransform(-232.6,82.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_68.setTransform(-250.4,85.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgTAWIAAAKQAAA5ATAAQAIAAAGgOQAHgQAAgbIAAgKQAAgZgHgQQgGgOgIAAQgTAAAAA3g");
	this.shape_69.setTransform(-263.2,82.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgWAWAAQAXAAAPAWQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_70.setTransform(-275.7,85.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgOB2IAAiwIAdAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_71.setTransform(-284.9,82.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAJgbAWACIAAAlIAAAAQgfAAAAAoIAABlg");
	this.shape_72.setTransform(-291.5,85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AggBGQgRgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQABAYAKANQAHALAMAAQAIAAAIgDIAQgJIACAdQgUAMgSAAQgXAAgRgVgAgSgJIAmAAQAAg1gTAAQgSAAgBA1g");
	this.shape_73.setTransform(-301.8,85.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgzBwIAAjcIAgAAIAAAaQAMgdATAAQASAAAKAUQAMAWAAAsIAAANQAAApgMAXQgKATgSAAQgTAAgMgcIAABFgAgNhCQgHAPAAAbIAAALQAAAYAHAQQAFAOAIAAQAJAAAGgOQAFgPAAgaIAAgKQAAgbgFgPQgGgPgJAAQgIAAgFAPg");
	this.shape_74.setTransform(-313.9,87.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AATBaIAAh7QgBgcgRAAQgHAAgGAHQgFAIAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAJAOQAKANAAAXIAACBg");
	this.shape_75.setTransform(-332.1,85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgoBMQgJgNAAgWIAAiCIAgAAIAAB7QAAAbARAAQAIAAAEgHQAGgHAAgOIAAh6IAgAAIAACwIggAAIAAgWQgMAZgTAAQgRAAgKgOg");
	this.shape_76.setTransform(-344.8,85.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHALANAAQAMAAATgMIACAdQgUAMgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_77.setTransform(-362.3,85.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AgnBjQgMgWAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgTAWIAAAKQAAA5ATAAQAIAAAGgOQAHgQAAgbIAAgKQAAgZgHgQQgGgOgIAAQgTAAAAA3g");
	this.shape_78.setTransform(-374.7,82.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AgoBTIAAggQAVALANAAQAGAAAFgEQAGgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAOAAAPAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_79.setTransform(-391,85.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AgfBpQgSgZAAgqIAAgGQgBgpARgYQAOgWAVAAQAWAAANAWQANAYAAApIAAARIhEAAQACAYAJANQAHALAMAAQANAAASgMIAEAdQgVAMgRAAQgYAAgQgVgAgSAYIAnAAQgBgzgSAAQgTAAgBAzgAgLhIIAcg1IAZANIgkAog");
	this.shape_80.setTransform(-401.5,81.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgnBMQgKgNAAgWIAAiCIAgAAIAAB7QAAAbARAAQAIAAAFgHQAGgIAAgNIAAh6IAfAAIAACwIgfAAIAAgWQgNAZgSAAQgSAAgJgOg");
	this.shape_81.setTransform(-413.8,85.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgzBwIAAjcIAfAAIAAAaQANgdATAAQASAAAKAUQAMAWAAAsIAAANQAAApgMAXQgKATgSAAQgTAAgNgcIAABFgAgOhCQgGAPAAAbIAAALQAAAYAGAQQAGAOAIAAQAJAAAGgOQAFgPAAgaIAAgKQAAgbgFgPQgGgPgJAAQgIAAgGAPg");
	this.shape_82.setTransform(-426.2,87.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAPAAAOAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAHAMAOQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_83.setTransform(-437.5,85.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgEQAAgrAPgYQAPgWAUAAQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHALAMAAQANAAATgMIACAdQgUAMgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_84.setTransform(-448,85.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("Ag4B1IAAjoIAjAAQAkgBAVAdQAVAeAAA3IAAAFQAAA4gVAdQgVAcgkABgAgWBWIAEAAQASABALgUQAMgUAAgsIAAgFQAAgrgMgWQgLgSgSgBIgEAAg");
	this.shape_85.setTransform(-460.6,82.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AgJAxIAEgmIgZAWIgMgTIAfgOIgfgMIAMgTIAZAVIgEgmIATAAIgEAmIAagVIALATIgfAMIAfAOIgLATIgagWIAEAmg");
	this.shape_86.setTransform(-478,75.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAAAQAAgHgFgHQgEgIgMgNQgQgOgHgLQgIgOAAgPIAAgBQAAgUAOgNQANgMATAAQAPAAAOAFIAAAfQgPgHgNAAQgQAAAAAPIAAABQAAAHAFAGQAEAHAMAOQASAOAGANQAHAMAAAPIAAABQAAAVgOAOQgNAMgTAAQgRAAgTgIg");
	this.shape_87.setTransform(-24.2,45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgNQALgOAUABQALAAAMAGIAAgOQAAgggZAAQgMAAgTAJIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAgIAAADQAAAeARgBQAGAAAGgHQAFgIAAgKIAAghQgJgEgIAAQgRAAAAAeg");
	this.shape_88.setTransform(-35.1,45.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AASBaIAAh7QABgbgTgBQgGAAgFAIQgGAHAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAKAOQAJAMAAAYIAACBg");
	this.shape_89.setTransform(-46.9,44.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgNQALgOAUABQALAAAMAGIAAgOQAAgggZAAQgMAAgTAJIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAgIAAADQAAAeARgBQAGAAAGgHQAFgIAAgKIAAghQgJgEgIAAQgRAAAAAeg");
	this.shape_90.setTransform(-59.3,45.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AA0BaIAAh7QAAgbgRgBQgJAAgFAIQgGAHABANIAAB7IgfAAIAAh7QAAgbgRgBQgJAAgEAIQgGAHAAANIAAB7IgfAAIAAiwIAfAAIAAAXQANgaAUAAQATAAAKAYQAPgYATAAQARAAAKAMQALAOAAAYIAACBg");
	this.shape_91.setTransform(-74.5,44.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AggBGQgRgZgBgqIAAgFQAAgqAQgYQAPgXAUAAQAWAAAOAXQANAYAAAqIAAAQIhDAAQABAYAJANQAHALAMAAQANAAATgMIADAeQgVALgSAAQgYAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_92.setTransform(-90,45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAAAQAAgHgFgHQgEgIgMgNQgQgOgHgLQgIgOAAgPIAAgBQAAgUAOgNQANgMATAAQAPAAAOAFIAAAfQgPgHgNAAQgQAAAAAPIAAABQAAAHAFAGQAEAHANAOQARAOAGANQAHAMAAAPIAAABQAAAVgOAOQgNAMgTAAQgRAAgTgIg");
	this.shape_93.setTransform(-100.6,45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AgtB1IAAgbIAthfQAOgkAAgSQAAgLgHgHQgHgHgJAAQgOAAgRAKIAAghQASgJAUAAQAVAAANANQAOAOAAAYIAAACQAAAOgEAOQgEANgLAWIgkBVIA3AAIAAAgg");
	this.shape_94.setTransform(-116.2,42.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgFQAAgqAPgYQAPgXAUAAQAXAAANAXQANAYAAAqIAAAQIhEAAQACAYAJANQAHALAMAAQANAAATgMIACAeQgUALgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_95.setTransform(-132.7,45);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AgnBjQgMgVAAgtIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgOgSQgGAPAAAZIAAAKQAAAbAGAQQAFAOAJAAQAIAAAGgOQAHgQAAgaIAAgLQAAgZgHgPQgGgPgIAAQgJAAgFAPg");
	this.shape_96.setTransform(-145.2,42.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgXAWAAQAXAAAPAXQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAKAAAFgPQAHgQAAgcIAAgHQAAgcgHgQQgGgPgJAAQgIAAgGAPg");
	this.shape_97.setTransform(-163,45);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AgnBjQgMgVAAgtIAAgMQAAgqAMgXQAKgTASAAQATAAAMAcIAAhTIAgAAIAADqIggAAIAAgaQgMAdgTAAQgSAAgKgUgAgTAWIAAAKQAAA5ATAAQAJAAAGgOQAGgQAAgaIAAgLQAAgZgGgPQgGgPgJAAQgTAAAAA3g");
	this.shape_98.setTransform(-175.8,42.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgXAWAAQAXAAAPAXQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_99.setTransform(-188.3,45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AgOB2IAAiwIAeAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_100.setTransform(-197.5,42.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAJgbAWACIAAAlIAAAAQgfAAAAApIAABkg");
	this.shape_101.setTransform(-204.1,44.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AggBGQgRgZAAgqIAAgFQAAgqAPgYQAPgXAUAAQAXAAANAXQANAYAAAqIAAAQIhEAAQABAYAKANQAHALAMAAQANAAASgMIADAeQgUALgSAAQgXAAgRgVgAgSgJIAmAAQAAg1gTAAQgSAAgBA1g");
	this.shape_102.setTransform(-214.4,45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("AgzBwIAAjcIAgAAIAAAaQANgdASAAQASAAAKAUQAMAWAAAsIAAANQAAApgMAXQgKATgSAAQgTAAgMgcIAABFgAgNhCQgHAPAAAbIAAALQAAAYAHAQQAFAOAIAAQAJAAAGgOQAFgPAAgaIAAgKQAAgbgFgPQgGgPgJAAQgIAAgFAPg");
	this.shape_103.setTransform(-226.5,47);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("AATBaIAAh7QgBgbgRgBQgHAAgGAIQgFAHAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAJAOQAKAMAAAYIAACBg");
	this.shape_104.setTransform(-244.7,44.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#58595B").s().p("AgoBNQgJgNAAgXIAAiCIAgAAIAAB7QAAAbARAAQAHABAFgIQAGgIAAgNIAAh6IAgAAIAACwIggAAIAAgWQgMAZgTAAQgRAAgKgNg");
	this.shape_105.setTransform(-257.4,45.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgFQAAgqAPgYQAPgXAUAAQAXAAANAXQANAYAAAqIAAAQIhEAAQACAYAJANQAHALANAAQAMAAATgMIACAeQgUALgSAAQgXAAgQgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_106.setTransform(-274.9,45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#58595B").s().p("AgTBRIAAh4IgNAAIAAgaIANAAIAAgvIAdAAIAAAvIAXAAIAAAaIgXAAIAABuQAAAOANgBQAEAAAGgCIAAAbQgJAEgKAAQghAAAAggg");
	this.shape_107.setTransform(-284.5,42.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#58595B").s().p("AASBaIAAh7QAAgbgRgBQgHAAgGAIQgFAHAAANIAAB7IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAKAOQAJANAAAXIAACBg");
	this.shape_108.setTransform(-294.6,44.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgNQALgOAUABQALAAAMAGIAAgOQAAgggZAAQgMAAgTAJIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAgIAAADQAAAeARgBQAGAAAGgHQAFgIAAgKIAAghQgJgEgIAAQgRAAAAAeg");
	this.shape_109.setTransform(-307,45.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58595B").s().p("AgfBaIAAiwIAfAAIAAAXQAKgbAVACIAAAlIAAAAQgfAAAAApIAABkg");
	this.shape_110.setTransform(-315.8,44.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#58595B").s().p("AgnBNQgKgNAAgXIAAiCIAfAAIAAB7QABAbARAAQAHABAGgIQAFgIAAgNIAAh6IAgAAIAACwIggAAIAAgWQgMAZgTAAQgRAAgJgNg");
	this.shape_111.setTransform(-326.7,45.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#58595B").s().p("AgnBjQgMgVAAgtIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgUgAgOgSQgGAPAAAZIAAAKQAAAbAGAQQAFAOAJAAQAIAAAGgOQAHgQAAgaIAAgLQAAgZgHgPQgGgPgIAAQgJAAgFAPg");
	this.shape_112.setTransform(-339.5,42.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#58595B").s().p("AgjB2QAogbAAhbQAAhagogbIAAgYQAjAOATAmQARAlAAA0QAAA1gRAlQgTAmgjAOg");
	this.shape_113.setTransform(-356.1,44.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AgaBEIAAgQIAag2QAIgWAAgJQAAgHgEgEQgEgFgFAAQgIAAgKAGIAAgTQALgFALAAQALAAAIAIQAJAIAAAOIAAABQAAANgMAXIgUAxIAfAAIAAATg");
	this.shape_114.setTransform(-363.6,36);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#58595B").s().p("AAIB1IAAguIhAAAIAAgaIA/ihIAfAAIAACfIATAAIAAAcIgTAAIAAAugAgdArIAlAAIAAhjg");
	this.shape_115.setTransform(-373,42.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#58595B").s().p("AAHB1IAAguIg/AAIAAgaIA+ihIAgAAIAACfIATAAIAAAcIgTAAIAAAugAgdArIAkAAIAAhjg");
	this.shape_116.setTransform(-385.4,42.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#58595B").s().p("AggAzQgNgSAAgeIAAgFQAAgeANgSQANgTATAAQAUAAANATQANASAAAeIAAAFQAAAegNASQgNATgUAAQgTAAgNgTgAgcgtQgKAQAAAbIAAAFQAAAbAKARQALARARAAQASAAALgRQAKgRAAgbIAAgFQAAgbgKgQQgLgRgSAAQgRAAgLARgAAIAkIgIgbIgEAAIAAAbIgLAAIAAhJIANAAQAIAAAGAGQAHAGAAAMIAAAAQAAANgKAFIALAfgAgEAAIACAAQAJAAAAgNIAAAAQAAgNgJAAIgCAAg");
	this.shape_117.setTransform(-402.2,35.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#58595B").s().p("AgUB2IAAiWIgNAAIAAgaIANAAIAAgPQAAgsAoAAIAOABIAAAcIgGgBQgRAAAAAUIAAALIAWAAIAAAaIgWAAIAACWg");
	this.shape_118.setTransform(-410.9,42.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("AgPB2IAAiwIAfAAIAACwgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_119.setTransform(-417.8,42.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#58595B").s().p("AgUBaIAAAaIgfAAIAAjqIAfAAIAABUQANgdATAAQASAAAKATQAMAWAAArIAAAMQAAAsgMAWQgKAUgSAAQgTAAgNgdgAgOgSQgFAPgBAZIAAALQABAaAFAQQAHAOAHAAQAKAAAFgOQAFgQAAgbIAAgKQAAgagFgOQgFgPgKAAQgHAAgHAPg");
	this.shape_120.setTransform(-427,42.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#58595B").s().p("AgfBGQgSgZAAgqIAAgFQAAgqAPgYQAPgXAUAAQAXAAANAXQANAYAAAqIAAAQIhEAAQACAYAJANQAHALAMAAQANAAASgMIAEAeQgVALgSAAQgYAAgPgVgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_121.setTransform(-439.3,45);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#58595B").s().p("AAUB1IgdhWIgFAAIgIAAIAABWIghAAIAAjoIAmAAQAfgBASATQAUASAAAlIAAACQAAAqggASIAkBhgAgWACIAFAAQARAAAIgJQALgLgBgWIAAgCQABgrgkAAIgFAAg");
	this.shape_122.setTransform(-451,42.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#58595B").s().p("AgRBaQgSglAAg1QAAg0ASglQARgmAjgOIAAAYQgnAbAABaQAABbAnAbIAAAYQgjgOgRgmg");
	this.shape_123.setTransform(-462.5,44.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#58595B").s().p("AgsBqIAAgeQAUAIAPAAQAdAAAAgeIAAgZQgNAdgSAAQgSAAgKgUQgMgWAAgpIAAgCQAAgrAMgWQAKgTASAAQATAAAMAcIAAgZIAgAAIAACkQAAA4g6AAQgRAAgVgGgAgOhDQgGAOAAAbIAAABQAAAZAGAOQAFAOAJAAQAIAAAGgOQAHgOAAgZIAAgBQAAgagHgPQgGgOgIAAQgIAAgGAOg");
	this.shape_124.setTransform(748.5,6.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#58595B").s().p("AgWBFQgQgXAAgqIAAgGQAAgqAQgZQAPgVAWgBQAOAAAKAFIAAAhQgMgGgIgBQgMAAgHAOQgGAOAAAdIAAAIQAAAcAGAOQAIANAMABQAJAAAKgJIAAAhQgNAGgLAAQgXABgOgXg");
	this.shape_125.setTransform(737.8,4.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#58595B").s().p("AAzBaIAAh7QAAgcgRAAQgIAAgFAIQgFAIgBANIAAB6IgdAAIAAh7QgBgcgRAAQgJAAgFAIQgFAIAAANIAAB6IggAAIAAiwIAgAAIAAAXQAMgaAVAAQASAAAMAXQAOgXATAAQARAAAKAMQAMAOAAAYIAACBg");
	this.shape_126.setTransform(723.3,4.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#58595B").s().p("AAHB1IAAguIg/AAIAAgaIA+ihIAgAAIAACeIATAAIAAAdIgTAAIAAAugAgdAqIAkAAIAAhig");
	this.shape_127.setTransform(702,2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#58595B").s().p("AAHB1IAAguIg/AAIAAgaIA+ihIAgAAIAACeIATAAIAAAdIgTAAIAAAugAgdAqIAkAAIAAhig");
	this.shape_128.setTransform(689.5,2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgMQAMgPATAAQAJAAAPAHIAAgOQAAgfgaAAQgNAAgSAIIAAgfQASgHASAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAfIAAAEQAAAdARAAQAHAAAFgHQAGgHAAgLIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_129.setTransform(671.7,4.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#58595B").s().p("AgDB1IAAjFIgYAKIAAgiIAfgMIAYAAIAADpg");
	this.shape_130.setTransform(661.6,2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58595B").s().p("AgmAPIAAgeIBNAAIAAAeg");
	this.shape_131.setTransform(654.4,3.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgMQAMgPATAAQAJAAAOAHIAAgOQAAgfgZAAQgMAAgTAIIAAgfQASgHATAAQAXAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgRAAQgQAAgLgOgAgRAfIAAAEQAAAdARAAQAGAAAGgHQAGgHgBgLIAAghQgLgEgGAAQgRAAAAAdg");
	this.shape_132.setTransform(642.8,4.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAGAAAEgCIAAAaQgIAFgLAAQgiAAAAggg");
	this.shape_133.setTransform(633.2,2.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#58595B").s().p("AgfBFQgSgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhDAAQABAYAJANQAHALANgBQAMABATgMIACAdQgTAMgTAAQgXABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_134.setTransform(623.7,4.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#58595B").s().p("AgUBbIAAAZIgfAAIAAjqIAfAAIAABUQAOgdARAAQASAAALATQAMAWAAAqIAAANQAAAsgMAWQgLAUgSAAQgRAAgOgcgAgOgTQgGAQAAAYIAAALQAAAbAGAPQAHAPAHAAQAKAAAFgPQAFgPAAgbIAAgKQAAgZgFgQQgFgOgKAAQgHAAgHAOg");
	this.shape_135.setTransform(611.6,2.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgRAAQgIAAgFAIQgGAIAAANIAAB6IgfAAIAAiwIAfAAIAAAXQANgaATAAQARAAAJANQAKANAAAXIAACCg");
	this.shape_136.setTransform(593.4,4.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#58595B").s().p("AglBoQgPgYAAgpIAAgIQAAgoAPgYQAPgWAWAAQAXAAAPAWQAPAYAAAoIAAAIQAAApgPAYQgPAXgXAAQgWAAgPgXgAgOgMQgHAOAAAcIAAAJQAAAcAHAQQAFAPAJAAQAJAAAGgPQAHgQgBgcIAAgJQABgcgHgOQgGgPgJAAQgJAAgFAPgAgLhIIAbg2IAaAOIgkAog");
	this.shape_137.setTransform(580.8,1.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#58595B").s().p("AgfBaIAAixIAfAAIAAAYQAJgbAXABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_138.setTransform(570.9,4.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#58595B").s().p("AgfBFQgSgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhEAAQACAYAJANQAHALANgBQAMABATgMIACAdQgUAMgSAAQgXABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_139.setTransform(560.6,4.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#58595B").s().p("AgUB2IAAiWIgNAAIAAgaIANAAIAAgQQAAgrAoAAQAJAAAFABIAAAbIgGAAQgRAAAAAUIAAALIAWAAIAAAaIgWAAIAACWg");
	this.shape_140.setTransform(551.4,2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#58595B").s().p("AgfBaIAAixIAfAAIAAAYQAJgbAXABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_141.setTransform(543.8,4.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#58595B").s().p("AgfBFQgSgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhDAAQABAYAJANQAHALANgBQAMABATgMIACAdQgTAMgTAAQgXABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_142.setTransform(533.5,4.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#58595B").s().p("AgUBRIAAh4IgNAAIAAgaIANAAIAAgvIAeAAIAAAvIAYAAIAAAaIgYAAIAABuQAAANANAAQAGAAAFgCIAAAaQgJAFgMAAQggAAgBggg");
	this.shape_143.setTransform(523.9,2.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgSAAQgGAAgGAIQgFAIAAANIAAB6IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAKANQAJANAAAXIAACCg");
	this.shape_144.setTransform(513.8,4.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58595B").s().p("AgOB2IAAixIAdAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_145.setTransform(504.5,2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#58595B").s().p("AgbBbQgSgeAAg6IAAgFQAAg6ATgeQASgbAbAAQAPAAALAFIAAAjQgNgIgJAAQgjAAABBSIAAAHQAABSAiAAQALAAAMgHIAAAgQgMAHgRAAQgbAAgRgbg");
	this.shape_146.setTransform(490.5,2.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#58595B").s().p("AguBsIAAgjQAYAOAPAAQAIAAAIgGQAGgGAAgMIAAgBQAAgKgEgJQgGgLgNgSQgXgagIgNQgIgQgBgTIAAgBQAAgZAQgQQAPgQAVAAQAUAAAQAIIAAAjQgTgLgOAAQgIAAgGAGQgIAHABALIAAAAQAAAKAEAIQAFAIAPAUQAXAaAHAPQAJAQgBAUIAAAAQABAagRAQQgPAQgWAAQgVAAgUgLg");
	this.shape_147.setTransform(479.7,2.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#58595B").s().p("AggBFQgSgYAAgpIAAgFQABgqAPgZQAOgXAVAAQAWABAOAXQAOAXAAArIAAAPIhFAAQABAYAKANQAHALANgBQAMABASgMIADAdQgTAMgTAAQgXABgRgXgAgSgKIAmAAQAAg0gTAAQgSAAgBA0g");
	this.shape_148.setTransform(463,4.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#58595B").s().p("AgnBkQgMgXAAgsIAAgNQAAgpAMgXQAKgTASAAQATAAAMAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAJAAAGgPQAGgPAAgbIAAgLQAAgYgGgQQgGgOgJAAQgTAAAAA3g");
	this.shape_149.setTransform(450.5,2.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAgBQAAgGgFgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATgBQAPAAAOAFIAAAgQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAGAMAPQASANAGAOQAHALAAAQIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_150.setTransform(434.2,4.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#58595B").s().p("AgPB2IAAixIAfAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_151.setTransform(426.5,2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#58595B").s().p("AgoBTIAAggQAUALAOAAQAGAAAGgEQAEgFAAgIIAAgBQAAgGgDgHQgGgIgKgNQgRgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQAMgMAUgBQAOAAAPAFIAAAgQgQgIgMAAQgGAAgFAFQgEAEAAAHIAAABQAAAHAEAGQAEAGAMAPQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_152.setTransform(418.9,4.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#58595B").s().p("AgkBFQgQgYAAgpIAAgGQAAgqAQgYQAOgXAWAAQAXAAAOAXQAQAYAAAqIAAAGQAAApgQAYQgOAWgXAAQgWAAgOgWgAgPgvQgGAPAAAdIAAAHQAAAcAGAQQAHAPAIAAQAJAAAHgPQAFgQAAgcIAAgHQAAgdgFgPQgHgPgJAAQgIAAgHAPg");
	this.shape_153.setTransform(407.9,4.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#58595B").s().p("AgnBkQgMgWAAgtIAAgNQAAgpAMgXQAKgTASAAQATAAAMAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAJAAAGgPQAGgPAAgbIAAgLQAAgYgGgQQgGgOgJAAQgTAAAAA3g");
	this.shape_154.setTransform(395,2.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#58595B").s().p("AglBfQgOgaAAg5IAAgIQAAh6A+AAQAMAAAOAFIAAAgQgMgHgMAAQgfAAgBBEQAOgMANABQASAAAMAPQAOAQAAAkIAAAEQAAAkgPAVQgPAWgWAAQgYAAgNgYgAgTAEIAAAZQAAA9ATAAQAKAAAGgNQAFgMAAgXIAAgFQAAgogVgBQgJAAgKAIg");
	this.shape_155.setTransform(377.5,2.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWAAQAXAAAOAXQAQAYAAAqIAAAGQAAApgQAYQgOAWgXAAQgWAAgPgWgAgOgvQgHAPABAdIAAAHQgBAcAHAQQAFAPAJAAQAKAAAFgPQAHgQAAgcIAAgHQAAgdgHgPQgFgPgKAAQgIAAgGAPg");
	this.shape_156.setTransform(359.7,4.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#58595B").s().p("AgjB2QAogaAAhcQAAhagogbIAAgYQAjAOASAmQASAlAAA0QAAA1gSAlQgSAngjANg");
	this.shape_157.setTransform(343.1,4.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#58595B").s().p("AggAzQgNgSAAgeIAAgFQAAgeANgSQANgTATAAQAUAAANATQANASAAAeIAAAFQAAAegNASQgNATgUAAQgTAAgNgTgAgcguQgKARAAAbIAAAFQAAAbAKAQQALARARAAQASAAALgRQAKgQAAgbIAAgFQAAgbgKgRQgLgRgSAAQgRAAgLARgAAIAkIgIgbIgEAAIAAAbIgLAAIAAhJIANAAQAVAAAAAXIAAABQAAANgKAFIALAfgAgEAAIACAAQAJAAAAgNIAAgBQAAgNgJAAIgCAAg");
	this.shape_158.setTransform(333.6,-4.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#58595B").s().p("AgPB1IAAhfIgtiKIAiAAIAaBgIAchgIAhAAIgtCKIAABfg");
	this.shape_159.setTransform(322.2,2.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#58595B").s().p("Ag4B1IAAjpIAjAAQAkAAAVAdQAVAdAAA4IAAAFQAAA4gVAdQgVAdgkAAgAgXBWIAFAAQASAAALgSQAMgWAAgrIAAgFQAAgrgMgWQgLgSgSAAIgFAAg");
	this.shape_160.setTransform(310,2.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#58595B").s().p("AgPB1IAAjpIAfAAIAADpg");
	this.shape_161.setTransform(299.7,2.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#58595B").s().p("AAVB1IgdhWIgFAAIgJAAIAABWIghAAIAAjpIAnAAQAeAAASASQAUATAAAkIAAADQAAApgfATIAjBhgAgWACIAGAAQAjAAAAgqIAAgCQAAgrgkAAIgFAAg");
	this.shape_162.setTransform(290.4,2.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#58595B").s().p("AghBbQgVgfgBg5IAAgFQABg4AVgfQAVgcAgAAQAQAAAOAGIAAAjQgRgKgMAAQgVAAgJAUQgMAWAAAoIAAAJQAAAsAMAVQAKASARAAIAHgBIAAhGIgYAAIAAgbIA3AAIAAB2QgWAKgSAAQgeAAgTgbg");
	this.shape_163.setTransform(276.5,2.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#58595B").s().p("AgqB1IAAjpIBUAAIAAAgIgzAAIAABFIAuAAIAAAdIguAAIAABHIA0AAIAAAgg");
	this.shape_164.setTransform(265.1,2.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#58595B").s().p("AgnB1IAAjpIAhAAIAADJIAuAAIAAAgg");
	this.shape_165.setTransform(254.9,2.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#58595B").s().p("Ag0B1IAAjpIAiAAQAgAAATAUQAUAUAAAmIAAAAQAAAlgTATQgTATgeACIgEAAIAABOgAgTAJIAEAAQAPgBAKgKQAKgMAAgXIAAAAQAAgwgiAAIgFAAg");
	this.shape_166.setTransform(243.5,2.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#58595B").s().p("AgRBaQgSglAAg1QAAg0ASglQARgmAkgOIAAAYQgoAbAABaQAABcAoAaIAAAYQgkgNgRgng");
	this.shape_167.setTransform(232.3,4.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#58595B").s().p("AgsBqIAAgeQAUAIAPAAQAdAAAAgeIAAgZQgNAdgSAAQgSAAgKgUQgMgWAAgpIAAgCQAAgrAMgWQAKgTASAAQATAAAMAcIAAgZIAgAAIAACkQAAA4g5AAQgSAAgVgGgAgOhDQgFAOAAAbIAAABQAAAZAFAOQAGAOAIAAQAIAAAGgOQAHgOAAgZIAAgBQAAgagHgPQgGgOgIAAQgIAAgGAOg");
	this.shape_168.setTransform(215.4,6.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#58595B").s().p("AgXBFQgPgXAAgqIAAgGQAAgqAQgZQAPgVAWgBQAOAAAKAFIAAAhQgMgGgIgBQgMAAgHAOQgGAOAAAdIAAAIQAAAcAGAOQAHANANABQAIAAALgJIAAAhQgNAGgLAAQgXABgPgXg");
	this.shape_169.setTransform(204.7,4.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#58595B").s().p("AA0BaIAAh7QAAgcgSAAQgIAAgFAIQgGAIAAANIAAB6IgdAAIAAh7QAAgcgSAAQgIAAgGAIQgFAIAAANIAAB6IggAAIAAiwIAgAAIAAAXQAMgaAVAAQASAAAMAXQANgXAVAAQAPAAALAMQAMAOAAAYIAACBg");
	this.shape_170.setTransform(190.2,4.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#58595B").s().p("AgsBwIAAghQANAHAOAAQAPAAAHgNQAJgMAAgWIAAgCQAAglgZAAQgJAAgJACIgQgJIAFhuIBNAAIAAAgIg0AAIgDA6QAIgDAJAAQATAAANAQQAPAQAAAjIAAADQAAAkgRAVQgSAVgaAAQgOAAgPgGg");
	this.shape_171.setTransform(169.7,2.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#58595B").s().p("AgtB1IAAgbIAthgQAOgjAAgSQAAgLgHgIQgHgGgJgBQgOAAgRALIAAghQAVgJARAAQAUAAAOANQAOAOAAAZIAAABQAAANgEAPQgEALgLAYIgkBUIA3AAIAAAhg");
	this.shape_172.setTransform(158.6,2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#58595B").s().p("AgDB1IAAjFIgYAKIAAgiIAfgMIAYAAIAADpg");
	this.shape_173.setTransform(148.7,2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcAMgMQALgPATAAQAKAAAOAHIAAgOQAAgfgaAAQgNAAgSAIIAAgfQASgHASAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgKAYgTAAQgQAAgKgOgAgRAfIAAAEQAAAdARAAQAHAAAFgHQAGgHAAgLIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_174.setTransform(133.7,4.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#58595B").s().p("AgDB1IAAjFIgYAKIAAgiIAfgMIAYAAIAADpg");
	this.shape_175.setTransform(123.7,2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#58595B").s().p("AgmAPIAAgeIBNAAIAAAeg");
	this.shape_176.setTransform(116.4,3.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgMQALgPAUAAQAKAAANAHIAAgOQAAgfgZAAQgNAAgSAIIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAfIAAAEQAAAdARAAQAGAAAGgHQAFgHAAgLIAAghQgLgEgGAAQgRAAAAAdg");
	this.shape_177.setTransform(104.9,4.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAGAAAEgCIAAAaQgIAFgLAAQgiAAAAggg");
	this.shape_178.setTransform(95.3,2.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#58595B").s().p("AggBFQgRgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhEAAQABAYAKANQAHALAMgBQAIAAAIgCIAQgJIACAdQgUAMgSAAQgXABgRgXgAgSgKIAmAAQAAg0gTAAQgSAAgBA0g");
	this.shape_179.setTransform(85.8,4.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#58595B").s().p("AgTBbIAAAZIggAAIAAjqIAgAAIAABUQANgdASAAQASAAAKATQAMAWAAAqIAAANQAAAsgMAWQgKAUgSAAQgTAAgMgcgAgNgTQgHAQAAAYIAAALQAAAbAHAPQAFAPAIAAQAJAAAGgPQAFgPAAgbIAAgKQAAgZgFgQQgGgOgJAAQgIAAgFAOg");
	this.shape_180.setTransform(73.7,2.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#58595B").s().p("AASBaIAAh7QABgcgTAAQgGAAgFAIQgGAHAAAOIAAB6IggAAIAAiwIAgAAIAAAXQAMgaATAAQARAAAKANQAJANAAAXIAACCg");
	this.shape_181.setTransform(55.5,4.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#58595B").s().p("AglBoQgPgYAAgpIAAgIQAAgoAPgYQAPgWAWAAQAXAAAPAWQAPAYAAAoIAAAIQAAApgPAYQgPAXgXAAQgWAAgPgXgAgOgMQgGAOAAAcIAAAJQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgJQAAgcgGgOQgGgPgJAAQgIAAgGAPgAgLhIIAcg2IAZAOIgkAog");
	this.shape_182.setTransform(42.9,1.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#58595B").s().p("AgeBaIAAixIAeAAIAAAYQAKgbAWABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_183.setTransform(33,4.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#58595B").s().p("AggBFQgRgYgBgpIAAgFQAAgqAQgZQAOgXAVAAQAWABAOAXQAOAXAAArIAAAPIhEAAQABAYAJANQAHALAMgBQANABATgMIACAdQgTAMgTAAQgYABgQgXgAgSgKIAmAAQAAgZgEgNQgGgOgJAAQgSAAgBA0g");
	this.shape_184.setTransform(22.7,4.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#58595B").s().p("AgUB2IAAiWIgNAAIAAgaIANAAIAAgQQAAgrAoAAQAJAAAFABIAAAbIgHAAQgRAAAAAUIAAALIAXAAIAAAaIgXAAIAACWg");
	this.shape_185.setTransform(13.5,2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#58595B").s().p("AgeBaIAAixIAeAAIAAAYQAJgbAXABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_186.setTransform(5.9,4.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#58595B").s().p("AggBFQgRgYgBgpIAAgFQABgqAQgZQAOgXAVAAQAWABANAXQANAXAAArIAAAPIhDAAQABAYAJANQAHALAMgBQANABATgMIADAdQgUAMgSAAQgYABgRgXgAgSgKIAmAAQAAg0gSAAQgSAAgCA0g");
	this.shape_187.setTransform(-4.4,4.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#58595B").s().p("AgUBRIAAh4IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAGAAAEgCIAAAaQgIAFgLAAQgiAAAAggg");
	this.shape_188.setTransform(-14.1,2.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#58595B").s().p("AATBaIAAh7QgBgcgRAAQgIAAgFAIQgFAHAAAOIAAB6IggAAIAAiwIAgAAIAAAXQALgaAUAAQARAAAJANQAKANAAAXIAACCg");
	this.shape_189.setTransform(-24.1,4.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#58595B").s().p("AgOB2IAAixIAeAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_190.setTransform(-33.5,2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#58595B").s().p("AgsBqIAAgeQAVAIAOAAQAdAAAAgeIAAgZQgMAdgTAAQgSAAgKgUQgMgWAAgpIAAgCQAAgrAMgWQAKgTASAAQATAAAMAcIAAgZIAgAAIAACkQAAA4g5AAQgRAAgWgGgAgOhDQgFAOAAAbIAAABQAAA1ATAAQAIAAAGgOQAHgOAAgZIAAgBQAAgagHgPQgGgOgIAAQgIAAgGAOg");
	this.shape_191.setTransform(-43,6.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#58595B").s().p("AgfBFQgSgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhDAAQABAYAJANQAHALANgBQAMABATgMIACAdQgTAMgTAAQgXABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_192.setTransform(-55,4.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#58595B").s().p("AgzBwIAAjcIAfAAIAAAaQANgdASAAQASAAALATQAMAXAAArIAAAOQAAApgMAWQgLAVgSgBQgRAAgOgcIAABFgAgOhCQgGAPAAAaIAAAMQAAAYAGAPQAGAPAIAAQAJAAAGgPQAFgPABgYIAAgKQgBgcgFgPQgGgPgJAAQgIAAgGAPg");
	this.shape_193.setTransform(-67.1,6.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#58595B").s().p("AgaBbQgTgeAAg6IAAgFQAAg6AUgeQARgbAcAAQAOAAAMAFIAAAjQgOgIgKAAQghAAgBBSIAAAHQAABSAjAAQALAAAMgHIAAAgQgMAHgQAAQgbAAgRgbg");
	this.shape_194.setTransform(-84.6,2.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#58595B").s().p("AguBsIAAgjQAXAOAQAAQAIAAAHgGQAHgGAAgMIAAgBQAAgKgEgJQgGgLgNgSQgYgagHgNQgJgQAAgTIAAgBQAAgZAQgQQAPgQAVAAQATAAARAIIAAAjQgTgLgNAAQgJAAgGAGQgIAHABALIAAAAQAAAKAEAIQAFAIAOAUQAYAaAHAPQAJAQgBAUIAAAAQABAagRAQQgPAQgVAAQgWAAgUgLg");
	this.shape_195.setTransform(-95.4,2.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#58595B").s().p("AgfBFQgSgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhEAAQADAvAcAAQAMABATgMIACAdQgUAMgSAAQgXABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_196.setTransform(-112.2,4.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#58595B").s().p("AgnBkQgMgWAAgtIAAgNQAAgpAMgXQAKgTASAAQATAAAMAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAIAAAGgPQAHgPAAgbIAAgLQAAgYgHgQQgGgOgIAAQgTAAAAA3g");
	this.shape_197.setTransform(-124.6,2.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgGAAgHIAAgBQAAgGgFgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATgBQAPAAAOAFIAAAgQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAGAMAPQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_198.setTransform(-140.9,4.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#58595B").s().p("AgOB2IAAixIAeAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_199.setTransform(-148.6,2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAgBQAAgGgFgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATgBQAPAAAOAFIAAAgQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAGAMAPQASANAGAOQAHALAAAQIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_200.setTransform(-156.3,4.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWAAQAXAAAPAXQAPAYAAAqIAAAGQAAApgPAYQgPAWgXAAQgWAAgPgWgAgOgvQgGAPAAAdIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgdgGgPQgGgPgJAAQgIAAgGAPg");
	this.shape_201.setTransform(-167.3,4.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#58595B").s().p("AgnBkQgMgWAAgtIAAgNQAAgpAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAIAAAGgPQAHgPAAgbIAAgLQAAgYgHgQQgGgOgIAAQgTAAAAA3g");
	this.shape_202.setTransform(-180.1,2.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#58595B").s().p("AgDB1IAAjFIgYAKIAAgiIAfgMIAYAAIAADpg");
	this.shape_203.setTransform(-196.2,2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#58595B").s().p("AASBaIAAh7QAAgcgRAAQgHAAgGAIQgGAIAAANIAAB6IgfAAIAAiwIAfAAIAAAXQANgaATAAQARAAAJANQAKANAAAXIAACCg");
	this.shape_204.setTransform(-211.3,4.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWAAQAXAAAPAXQAPAYAAAqIAAAGQAAApgPAYQgPAWgXAAQgWAAgPgWgAgPgvQgGAPAAAdIAAAHQAAAcAGAQQAGAPAJAAQAJAAAGgPQAGgQAAgcIAAgHQAAgdgGgPQgGgPgJAAQgJAAgGAPg");
	this.shape_205.setTransform(-223.9,4.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#58595B").s().p("AgfBaIAAixIAfAAIAAAYQAJgbAWABIAAAmIAAAAQgfAAAAAoIAABlg");
	this.shape_206.setTransform(-233.2,4.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#58595B").s().p("AggBFQgSgYAAgpIAAgFQAAgqAQgZQAPgXAUAAQAWABAOAXQAOAXAAArIAAAPIhFAAQABAYAKANQAHALANgBQAMABASgMIADAdQgTAMgTAAQgXABgRgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_207.setTransform(-243.5,4.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#58595B").s().p("AgPB2IAAixIAfAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_208.setTransform(-252.4,2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#58595B").s().p("AgUBbIAAAZIgfAAIAAjqIAfAAIAABUQANgdATAAQASAAAKATQAMAWAAAqIAAANQAAAsgMAWQgKAUgSAAQgSAAgOgcgAgOgTQgGAQAAAYIAAALQAAAbAGAPQAGAPAIAAQAJAAAGgPQAFgPAAgbIAAgKQAAgZgFgQQgGgOgJAAQgIAAgGAOg");
	this.shape_209.setTransform(-261.6,2.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#58595B").s().p("AgOB2IAAixIAdAAIAACxgAgPhSIAAgjIAfAAIAAAjg");
	this.shape_210.setTransform(-271.1,2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#58595B").s().p("AgXBFQgPgXAAgqIAAgGQAAgqAQgZQAPgVAWgBQAOAAAKAFIAAAhQgMgGgIgBQgMAAgHAOQgGAOAAAdIAAAIQAAAcAGAOQAHANANABQAIAAALgJIAAAhQgMAGgMAAQgXABgPgXg");
	this.shape_211.setTransform(-278.8,4.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#58595B").s().p("AggBFQgRgYgBgpIAAgFQABgqAQgZQAOgXAUAAQAWABAOAXQANAXAAArIAAAPIhDAAQABAYAJANQAHALAMgBQANABATgMIADAdQgVAMgSAAQgYABgQgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_212.setTransform(-289.4,4.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#58595B").s().p("AgfBaIAAixIAfAAIAAAYQAJgbAXABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_213.setTransform(-298.5,4.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAEgFABgIIAAgBQgBgGgEgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVANgMQANgMAUgBQAPAAAOAFIAAAgQgPgIgNAAQgGAAgEAFQgGAEAAAHIAAABQABAHAEAGQAEAGANAPQARAOAGANQAHAMAAAPIAAABQAAAVgOANQgNANgSAAQgRAAgUgIg");
	this.shape_214.setTransform(-313.1,4.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#58595B").s().p("AgkBFQgQgYAAgpIAAgGQAAgqAQgYQAOgXAWAAQAXAAAOAXQAQAYAAAqIAAAGQAAApgQAYQgOAWgXAAQgWAAgOgWgAgPgvQgFAPAAAdIAAAHQAAAcAFAQQAHAPAIAAQAJAAAHgPQAFgQABgcIAAgHQgBgdgFgPQgHgPgJAAQgIAAgHAPg");
	this.shape_215.setTransform(-324.1,4.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#58595B").s().p("AASBaIAAh7QABgcgTAAQgGAAgFAIQgGAHAAAOIAAB6IggAAIAAiwIAgAAIAAAXQALgaAUAAQARAAAKANQAJANAAAXIAACCg");
	this.shape_216.setTransform(-336.6,4.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcAMgMQAKgPAUAAQAJAAAPAHIAAgOQgBgfgZAAQgNAAgSAIIAAgfQARgHATAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgKAYgTAAQgPAAgLgOgAgRAfIAAAEQAAAdARAAQAGAAAGgHQAFgHABgLIAAghQgLgEgHAAQgRAAAAAdg");
	this.shape_217.setTransform(-349,4.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAFgEQAGgFAAgIIAAgBQAAgGgFgHQgFgIgLgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVANgMQAOgMASgBQAPAAAPAFIAAAgQgQgIgMAAQgGAAgEAFQgGAEAAAHIAAABQAAAHAFAGQAFAGAMAPQAQAOAIANQAGAMAAAPIAAABQAAAVgOANQgOANgSAAQgQAAgUgIg");
	this.shape_218.setTransform(-359.2,4.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAgBQAAgGgFgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATgBQAPAAAOAFIAAAgQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAGAMAPQASANAGAOQAHALAAAQIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_219.setTransform(-374.1,4.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWAAQAXAAAPAXQAPAYAAAqIAAAGQAAApgPAYQgPAWgXAAQgWAAgPgWgAgOgvQgGAPAAAdIAAAHQAAAcAGAQQAGAPAIAAQAJAAAGgPQAGgQAAgcIAAgHQAAgdgGgPQgGgPgJAAQgIAAgGAPg");
	this.shape_220.setTransform(-385.1,4.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#58595B").s().p("AgTBRIAAh4IgNAAIAAgaIANAAIAAgvIAdAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAGAAAEgCIAAAaQgIAFgLAAQghAAAAggg");
	this.shape_221.setTransform(-395.1,2.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#58595B").s().p("AggBFQgRgYAAgpIAAgFQAAgqAPgZQAPgXAUAAQAXABANAXQANAXAAArIAAAPIhEAAQABAYAKANQAHALAMgBQANABATgMIACAdQgUAMgSAAQgXABgRgXgAgSgKIAmAAQAAg0gTAAQgRAAgCA0g");
	this.shape_222.setTransform(-404.6,4.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#58595B").s().p("AgZCKIAAgZIAEAAQARAAAAgTIAAivIAeAAIAACyQAAArgmAAIgNgCgAgEhoIAAgjIAeAAIAAAjg");
	this.shape_223.setTransform(-414.5,4.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#58595B").s().p("AgnBNQgKgNAAgXIAAiCIAfAAIAAB7QABAcARAAQAHAAAGgIQAFgIAAgNIAAh6IAgAAIAACwIggAAIAAgXQgMAagTAAQgRAAgJgNg");
	this.shape_224.setTransform(-422.9,5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAGgEQAFgGAAgHIAAgBQAAgGgFgHQgEgIgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATgBQAOAAAPAFIAAAgQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAHAFAGQAEAGAMAPQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_225.setTransform(-433.8,4.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#58595B").s().p("Ag2AFIAAgJQAAhzA2AAQA3AAAABzIAAAJQAABzg3AAQg2AAAAhzgAgVgEIAAAJQAABUAVAAQAKAAAFgRQAHgUAAgvIAAgJQAAhUgWAAQgVAAAABUg");
	this.shape_226.setTransform(-450.4,2.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#58595B").s().p("AguBwIAAggQAOAGAPAAQAOAAAIgKQAJgLAAgTIAAgCQAAglgqgDIAAgUIAnhEIg3AAIAAghIBaAAIAAAdIgqBGQArANAAAvIAAADQAAAhgSAUQgRAUgZAAQgRAAgQgGg");
	this.shape_227.setTransform(-462.4,2.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#58595B").s().p("AgJAxIAEgmIgZAVIgMgTIAfgNIgfgNIAMgTIAZAWIgEgmIATAAIgEAmIAagWIALATIgfANIAfANIgLATIgagVIAEAmg");
	this.shape_228.setTransform(-478,-4.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#58595B").s().p("AgkBFQgQgYAAgpIAAgGQAAgqAQgYQAOgXAWABQAXgBAOAXQAQAYAAAqIAAAGQAAApgQAYQgOAWgXAAQgWAAgOgWgAgPgvQgFAQAAAcIAAAHQAAAcAFAQQAHAPAIAAQAJAAAHgPQAFgQAAgcIAAgHQAAgcgFgQQgHgPgJAAQgIAAgHAPg");
	this.shape_229.setTransform(-96.5,-35.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#58595B").s().p("AgnBkQgMgXAAgsIAAgMQAAgrAMgVQAKgVASAAQATAAAMAdIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAJAAAGgOQAGgQAAgbIAAgLQAAgYgGgQQgGgOgJAAQgTAAAAA3g");
	this.shape_230.setTransform(-109.3,-38);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcAMgMQALgPATAAQAKAAANAHIAAgOQAAgfgZAAQgOAAgRAIIAAgeQATgIARAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAfIAAAEQAAAdARAAQAHAAAFgHQAFgHAAgLIAAggQgKgFgHAAQgRAAAAAdg");
	this.shape_231.setTransform(-121.6,-35.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#58595B").s().p("AgpBZIAAgWIAyh/IgxAAIAAgcIBSAAIAAAXIgxB/IAxAAIAAAbg");
	this.shape_232.setTransform(-132,-35.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#58595B").s().p("AgnBNQgKgNAAgXIAAiCIAfAAIAAB7QABAcARAAQAHAAAGgIQAFgHAAgOIAAh6IAgAAIAACwIggAAIAAgXQgMAagTAAQgRAAgJgNg");
	this.shape_233.setTransform(-143.2,-35.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#58595B").s().p("AgfBaIAAixIAfAAIAAAYQAJgbAWABIAAAmIAAAAQgfAAAAAoIAABlg");
	this.shape_234.setTransform(-153.1,-35.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#58595B").s().p("AgXBFQgPgXAAgqIAAgHQAAgqAQgXQAPgWAWAAQAPAAAJAFIAAAgQgMgHgIAAQgMAAgHANQgGAPAAAdIAAAHQAAAdAGAOQAHANANAAQAJAAAKgIIAAAgQgMAHgMAAQgXAAgPgWg");
	this.shape_235.setTransform(-162.3,-35.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#58595B").s().p("AgZBuIALgwIgnirIAgAAIAVB1IAXh1IAfAAIgzDbg");
	this.shape_236.setTransform(-178.5,-33.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWABQAXgBAPAXQAPAYAAAqIAAAGQAAApgPAYQgPAWgXAAQgWAAgPgWgAgOgvQgHAQABAcIAAAHQgBAcAHAQQAGAPAIAAQAKAAAFgPQAHgQAAgcIAAgHQAAgcgHgQQgFgPgKAAQgIAAgGAPg");
	this.shape_237.setTransform(-196.1,-35.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#58595B").s().p("AgTBQIAAh3IgNAAIAAgaIANAAIAAgvIAdAAIAAAvIAXAAIAAAaIgXAAIAABtQAAAOANAAQAHAAADgCIAAAaQgJAFgKAAQghAAAAghg");
	this.shape_238.setTransform(-206.1,-37.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#58595B").s().p("AgeBaIAAixIAeAAIAAAYQAKgbAWABIAAAmIgBAAQgfAAAAAoIAABlg");
	this.shape_239.setTransform(-213.6,-35.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#58595B").s().p("AggBGQgRgZgBgpIAAgFQAAgqAQgZQAPgXAUABQAWAAAOAWQAOAYAAArIAAAPIhEAAQABAYAJANQAHAKAMAAQAOAAASgLIACAdQgTAMgTAAQgYABgQgWgAgSgJIAmAAQAAgZgEgOQgGgOgJAAQgSAAgBA1g");
	this.shape_240.setTransform(-223.9,-35.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#58595B").s().p("AgOB1IAAiwIAdAAIAACwgAgPhSIAAgiIAfAAIAAAig");
	this.shape_241.setTransform(-232.8,-38.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#58595B").s().p("AgUBbIAAAZIgfAAIAAjqIAfAAIAABUQANgeATAAQASABAKATQAMAXAAAqIAAAMQAAAsgMAXQgKATgSAAQgSAAgOgcgAgOgTQgGAQAAAYIAAALQAAAbAGAQQAGAOAIAAQAJAAAGgOQAFgPAAgcIAAgKQAAgagFgPQgGgOgJAAQgIAAgGAOg");
	this.shape_242.setTransform(-242,-38);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcAMgMQALgPATAAQAKAAANAHIAAgOQAAgfgZAAQgOAAgRAIIAAgeQATgIARAAQAYAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgSAAQgQAAgKgOgAgRAfIAAAEQAAAdARAAQAHAAAFgHQAFgHAAgLIAAggQgKgFgHAAQgRAAAAAdg");
	this.shape_243.setTransform(-254.7,-35.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#58595B").s().p("Ag4B0IAAjnIAjAAQAkgBAUAdQAWAdAAA3IAAAGQAAA3gWAeQgUAcgkAAgAgXBXIAFAAQASAAALgTQANgWAAgrIAAgGQAAgrgNgVQgLgTgSAAIgFAAg");
	this.shape_244.setTransform(-272.2,-38);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#58595B").s().p("Ag0B0IAAjnIAiAAQAfAAAUASQAUAVAAAlIAAABQAAAlgTATQgTAUgeABIgEAAIAABNgAgTAJIAEAAQAPgBAKgJQAKgNAAgXIAAAAQAAgwgiAAIgFAAg");
	this.shape_245.setTransform(-285.3,-38);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#58595B").s().p("AgwCQIBGkfIAbAAIhHEfg");
	this.shape_246.setTransform(-297.1,-37.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#58595B").s().p("AAVB0IgghfIgMAdIAABCIghAAIAAjnIAhAAIAABrIAohrIAmAAIgsBkIAuCDg");
	this.shape_247.setTransform(-313.3,-38);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#58595B").s().p("Ag0B0IAAjnIAiAAQAgAAATASQAUAVAAAlIAAABQAAAlgTATQgTAUgeABIgEAAIAABNgAgTAJIAEAAQAPgBAKgJQAKgNAAgXIAAAAQAAgwgiAAIgFAAg");
	this.shape_248.setTransform(-326.3,-38);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#58595B").s().p("AgPB0IAAjnIAfAAIAADng");
	this.shape_249.setTransform(-341.7,-38);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#58595B").s().p("AgfBGQgSgZAAgpIAAgFQAAgqAPgZQAPgXAUABQAXAAANAWQANAYAAArIAAAPIhEAAQACAYAJANQAHAKANAAQANAAASgLIACAdQgUAMgSAAQgXABgQgWgAgSgJIAmAAQAAg1gTAAQgRAAgCA1g");
	this.shape_250.setTransform(-356,-35.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAGAAAFgEQAFgFAAgIIAAgBQAAgHgFgHQgEgHgMgNQgQgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQAMgMAUAAQARAAAMAFIAAAfQgPgIgNAAQgGAAgFAFQgFAEAAAHIAAABQAAAGAFAHQAEAGAMAPQARAOAHANQAHAMAAAPIAAABQAAAVgOANQgNANgTAAQgQAAgUgIg");
	this.shape_251.setTransform(-366.6,-35.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#58595B").s().p("AgmBNQgKgPAAgYIAAgFQAAgcALgMQAMgPATAAQAJAAAOAHIAAgOQAAgfgZAAQgNAAgSAIIAAgeQATgIASAAQAXAAAOAPQAOAPAAAdIAAB3IggAAIAAgVQgLAYgRAAQgQAAgLgOgAgRAfIAAAEQAAAdARAAQAGAAAGgHQAGgHgBgLIAAggQgJgFgIAAQgRAAAAAdg");
	this.shape_252.setTransform(-377.4,-35.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#58595B").s().p("AgUB2IAAiWIgNAAIAAgaIANAAIAAgQQAAgrAoAAIAOABIAAAbIgGAAQgRAAAAAUIAAALIAWAAIAAAaIgWAAIAACWg");
	this.shape_253.setTransform(-386.4,-38.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgGQAAgqAPgYQAPgXAWABQAXgBAPAXQAPAYAAAqIAAAGQAAApgPAYQgPAWgXAAQgWAAgPgWgAgOgvQgGAQAAAcIAAAHQAAAcAGAQQAGAPAIAAQAKAAAGgPQAGgQAAgcIAAgHQAAgcgGgQQgGgPgKAAQgIAAgGAPg");
	this.shape_254.setTransform(-402,-35.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#58595B").s().p("AgOB1IAAiwIAeAAIAACwgAgPhSIAAgiIAfAAIAAAig");
	this.shape_255.setTransform(-411.2,-38.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#58595B").s().p("AgnBkQgMgXAAgsIAAgMQAAgrAMgVQAKgVASAAQATAAAMAdIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgTAWIAAAKQAAA5ATAAQAIAAAGgOQAHgQAAgbIAAgLQAAgYgHgQQgGgOgIAAQgTAAAAA3g");
	this.shape_256.setTransform(-420.7,-38);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#58595B").s().p("AgoBNQgJgNAAgXIAAiCIAgAAIAAB7QAAAcARAAQAHAAAGgIQAFgIABgNIAAh6IAfAAIAACwIgfAAIAAgXQgNAagTAAQgRAAgKgNg");
	this.shape_257.setTransform(-433.3,-35.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#58595B").s().p("AgUBQIAAh3IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABtQAAAOANAAQAGAAAEgCIAAAaQgJAFgLAAQghAAAAghg");
	this.shape_258.setTransform(-443.6,-37.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#58595B").s().p("AgoBTIAAggQAVALANAAQAGAAAGgEQAEgFAAgIIAAgBQAAgHgDgHQgGgHgKgNQgRgOgHgMQgIgNAAgPIAAgBQAAgVAOgMQANgMATAAQAQAAANAFIAAAfQgPgIgNAAQgGAAgFAFQgEAEAAAHIAAABQgBAGAFAHQAEAGAMAPQASAOAHANQAGAMAAAPIAAABQAAAVgOANQgNANgTAAQgRAAgTgIg");
	this.shape_259.setTransform(-452,-35.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#58595B").s().p("AgqB0IAAjnIBUAAIAAAeIgzAAIAABGIAuAAIAAAdIguAAIAABHIA0AAIAAAfg");
	this.shape_260.setTransform(-461.9,-38);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#58595B").s().p("AgJAxIAEgmIgZAVIgMgTIAfgNIgfgMIAMgTIAZAVIgEgmIATAAIgEAmIAagVIALATIgfAMIAfANIgLATIgagVIAEAmg");
	this.shape_261.setTransform(-478,-44.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#58595B").s().p("AgBBEIAAhyIgOAGIAAgUIARgHIAOAAIAACHg");
	this.shape_262.setTransform(-314.1,-84.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#58595B").s().p("AgqB1IAAjoIBUAAIAAAeIgzAAIAABGIAtAAIAAAdIgtAAIAABHIA0AAIAAAgg");
	this.shape_263.setTransform(-321.3,-78.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#58595B").s().p("AAUB1IgdhWIgFAAIgIAAIAABWIghAAIAAjoIAmAAQAfgBASATQAUASAAAkIAAACQAAAqggATIAkBhgAgWABIAGAAQAQAAAIgIQALgMAAgVIAAgCQAAgrgkAAIgFAAg");
	this.shape_264.setTransform(-333.2,-78.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#58595B").s().p("AAeB1IgJg0IgqAAIgKA0IgfAAIAujpIAhAAIAvDpgAgQAjIAgAAIgQhcg");
	this.shape_265.setTransform(-347,-78.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#58595B").s().p("Ag0B1IAAjoIAiAAQAgAAATATQAUAUAAAlIAAACQAAAkgTATQgSAUgfABIgEAAIAABOgAgTAJIAFAAQAPgBAJgJQAKgNAAgWIAAgBQAAgYgJgMQgKgMgPAAIgFAAg");
	this.shape_266.setTransform(-358.2,-78.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#58595B").s().p("AAjB1IAAieIgjBlIAAAAIgihlIAACeIggAAIAAjoIAiAAIAgBjIAghjIAiAAIAADog");
	this.shape_267.setTransform(-373.1,-78.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#58595B").s().p("AgqBbQgRgdAAg6IAAgIQAAg4ARgeQAQgdAaAAQAbAAAQAdQARAdAAA5IAAAIQAAA6gRAdQgQAcgbAAQgaAAgQgcgAgZgEIAAAIQAABWAZAAQAaAAAAhWIAAgIQAAhUgaAAQgZAAAABUg");
	this.shape_268.setTransform(-388.2,-78.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#58595B").s().p("AgbBbQgSgfAAg5IAAgFQAAg6ATgeQASgbAcAAQAOAAALAFIAAAiQgMgHgLAAQgiAAAABSIAAAGQAABTAiAAQAMAAAMgHIAAAgQgLAHgSAAQgaAAgSgbg");
	this.shape_269.setTransform(-399.8,-78.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#58595B").s().p("AglBFQgPgYAAgpIAAgHQAAgpAPgYQAPgXAWABQAXgBAPAXQAPAYAAApIAAAHQAAApgPAYQgPAXgXgBQgWABgPgXgAgOgvQgGAQAAAcIAAAIQAAAcAGAPQAGAPAIAAQAJAAAGgPQAGgPAAgcIAAgIQAAgcgGgQQgGgPgJAAQgIAAgGAPg");
	this.shape_270.setTransform(-417.1,-75.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#58595B").s().p("AgOB2IAAixIAdAAIAACxgAgPhSIAAgiIAfAAIAAAig");
	this.shape_271.setTransform(-426.3,-78.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#58595B").s().p("AgnBkQgMgXAAgsIAAgMQAAgqAMgXQAKgTASAAQASAAANAcIAAhTIAgAAIAADqIggAAIAAgaQgNAdgSAAQgSAAgKgTgAgOgSQgGAPAAAZIAAAKQAAAcAGAPQAFAOAJAAQAIAAAGgOQAHgPAAgcIAAgKQAAgZgHgQQgGgOgIAAQgJAAgFAPg");
	this.shape_272.setTransform(-435.8,-78.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#58595B").s().p("AgoBMQgJgNAAgWIAAiCIAgAAIAAB7QAAAbARAAQAIAAAEgHQAGgHAAgOIAAh6IAgAAIAACwIggAAIAAgWQgMAZgTAAQgRAAgKgOg");
	this.shape_273.setTransform(-448.4,-75.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#58595B").s().p("AgUBQIAAh3IgMAAIAAgaIAMAAIAAgvIAeAAIAAAvIAXAAIAAAaIgXAAIAABuQAAANANAAQAFAAAFgCIAAAaQgJAFgLAAQggAAgBghg");
	this.shape_274.setTransform(-458.7,-77.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#58595B").s().p("AgoBTIAAggQAVALAOAAQAFAAAFgEQAGgFAAgIIAAAAQAAgNgVgWQgQgOgHgMQgIgNAAgPIAAgBQAAgUANgNQAOgMASAAQAPAAAPAFIAAAfQgOgIgOAAQgGAAgFAFQgEAEgBAHIAAABQAAAHAFAGQAFAHALAOQARAOAIANQAGAMAAAPIAAABQAAAVgOANQgNANgTAAQgSAAgSgIg");
	this.shape_275.setTransform(-467.1,-75.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#58595B").s().p("AgrB1IAAjoIBWAAIAAAeIg0AAIAABGIAtAAIAAAdIgtAAIAABHIA0AAIAAAgg");
	this.shape_276.setTransform(-477.1,-78.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-791.7,-121.5,1583.6,243.2);


// stage content:
(lib.pleca10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// animaciones
	this.instance = new lib.pleca10_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-800.6,123.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:851.8},55).to({x:731.7},14).to({x:819.8},8).to({x:767.8},5).to({x:791.8},3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-769.9,124.6,1583.6,243.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;