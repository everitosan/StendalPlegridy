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
	height: 1157,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Ayuda Visual PLEGRIDY ipad 8_atlas_.png", id:"Ayuda Visual PLEGRIDY ipad 8_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Ayuda Visual PLEGRIDY ipad 8_atlas_", frames: [[0,0,1713,3088],[1715,513,300,511],[0,3090,3487,513],[1715,0,1908,511]]}
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
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 8_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 8_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 8_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["Ayuda Visual PLEGRIDY ipad 8_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pleca7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AglACIAAgDQAAhXAlAAQAmAAAABWIAAAEQAABXgmAAQglAAAAhXgAgVgBIAAADQAABIAVAAQAWAAAAhIIAAgDQAAhIgWAAQgVAAAABIg");
	this.shape.setTransform(-297.6,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AABBXIAAiaIgQAJIAAgRIATgLIAMAAIAACtg");
	this.shape_1.setTransform(-305.5,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("Ag8CLIAAg2QAdAQASAAQAMAAAGgGQAIgGAAgNIAAgBQAAgLgFgKQgGgLgQgVQgdgfgKgQQgLgVAAgZIAAgBQAAgkAVgVQAUgVAeAAQAaAAAUAJIAAA2QgYgNgQAAQgLAAgGAHQgIAHAAALIAAABQAAAKAFAJQAFAHARAWQAfAiAKATQAJATAAAaIAAABQAAAjgVAWQgVAVgeAAQgcAAgZgMg");
	this.shape_2.setTransform(-314.6,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgQArIAeAAIgOhhg");
	this.shape_3.setTransform(-331.2,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AgqDDIAAkqIAyAAIAAEqgAgjh4IAnhKIAnAUIgwA2g");
	this.shape_4.setTransform(-343.3,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AhLCVIAAkpIAxAAQAwAAAbAkQAbAlAABHIAAAJQAABHgbAlQgbAkgwAAgAgXBlIACAAQAsAAAAhgIAAgJQAAhggsAAIgCAAg");
	this.shape_5.setTransform(-359,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("Ag+COIAAgxQASAIAUAAQAQAAAJgLQAKgMAAgTIAAgEQAAgqgygEIAAggIAvhMIhCAAIAAgzIB3AAIAAAvIgzBNQA1ARAAA8IAAAFQAAArgYAaQgWAagiAAQgZAAgUgJg");
	this.shape_6.setTransform(-384.3,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ag4CVIAAkpIBwAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABNIA+AAIAAAxg");
	this.shape_7.setTransform(-406.8,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AhLCVIAAkpIAxAAQAwAAAbAkQAbAlAABHIAAAJQAABHgbAlQgbAkgwAAgAgXBlIACAAQAsAAAAhgIAAgJQAAhggsAAIgCAAg");
	this.shape_8.setTransform(-424,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AAUCVIgghoIgKAAIAABoIg0AAIAAkpIA2AAQAoAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIADAAQAlAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_9.setTransform(-450,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ag4B2QgWgmAAhJIAAgNQAAhIAWgnQAUgjAkgBQAkABAVAjQAWAnAABIIAAANQAABJgWAmQgVAjgkABQgkgBgUgjgAgZgGIAAANQAAA3AIAXQAGAVALgBQANAAAGgUQAHgXAAg3IAAgNQAAg3gHgXQgGgVgNABQgZAAAABig");
	this.shape_10.setTransform(-469.1,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgZCVIAAh2Ig3izIA2AAIAaBwIAchwIA1AAIg3CzIAAB2g");
	this.shape_11.setTransform(-486.4,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgQArIAeAAIgOhhg");
	this.shape_12.setTransform(-502.5,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AAmCVIAAizIgmBwIAAAAIglhwIAACzIgyAAIAAkpIA0AAIAjBtIAkhtIA0AAIAAEpg");
	this.shape_13.setTransform(-522.5,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AATCVIgfhoIgKAAIAABoIg0AAIAAkpIA2AAQAoAAAYAWQAaAZAAAwIAAAEQAAAzgjAaIAoB5gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_14.setTransform(-549.7,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABNIA9AAIAAAxg");
	this.shape_15.setTransform(-566.6,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("Ag8CLIAAg2QAdAQASAAQAMAAAGgGQAIgGAAgNIAAgBQAAgLgGgKQgGgLgPgVQgdgfgKgQQgLgVAAgZIAAgBQAAgkAUgVQAVgVAdAAQAcAAASAJIAAA2QgWgNgRAAQgMAAgFAHQgIAHAAALIAAABQAAAKAFAJQAEAHASAWQAfAiAKATQAJATAAAaIAAABQAAAjgWAWQgUAVgeAAQgcAAgZgMg");
	this.shape_16.setTransform(-581.9,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("Ag4CVIAAkpIBwAAIAAAxIg9AAIAABLIA2AAIAAAvIg2AAIAABMIA/AAIAAAyg");
	this.shape_17.setTransform(647.9,-24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("Ag0CVIAAkpIA0AAIAAD3IA1AAIAAAyg");
	this.shape_18.setTransform(633.5,-24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA9AAIAAAyg");
	this.shape_19.setTransform(618.8,-24.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgzCBQgWgYAAgtIAAjSIA0AAIAADXQAAAmAVAAQAWAAAAgmIAAjXIA0AAIAADSQAAAtgVAYQgTAWgiAAQggAAgTgWg");
	this.shape_20.setTransform(601.5,-24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("Ag8CLIAAg2QAdAQASABQAMAAAGgHQAIgGAAgOIAAAAQAAgLgFgKQgGgLgQgVQgdgegKgQQgLgWAAgZIAAgBQAAgkAVgVQAUgVAeAAQAbAAATAJIAAA3QgYgPgQAAQgLAAgGAHQgIAHAAAMIAAABQAAAKAFAJQAFAHARAWQAfAiAKATQAJAUAAAaIAAAAQAAAjgVAWQgVAVgeAAQgaAAgbgMg");
	this.shape_21.setTransform(584.6,-24.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAdCVIg1idIAACdIgyAAIAAkpIAwAAIAzCVIAAiVIAzAAIAAEpg");
	this.shape_22.setTransform(559.6,-24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("Ag4ChQgWgnAAhHIAAgQQAAhGAWgmQAUgkAkAAQAkAAAVAkQAWAmAABGIAAAQQAABHgWAnQgVAkgkAAQgkAAgUgkgAgZAjIAAAQQAABiAZAAQANAAAGgUQAHgYAAg2IAAgQQAAg0gHgYQgGgUgNAAQgZAAAABggAgXh6IAnhKIAmAUIgyA2g");
	this.shape_23.setTransform(540.4,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgZCVIAAkpIAzAAIAAEpg");
	this.shape_24.setTransform(526.1,-24.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgkB1QgYgmAAhLIAAgIQAAhLAZgmQAXghAmAAQASAAAQAGIAAA2QgQgJgNgBQgTABgJATQgJAXAAA1IAAAJQAAA3AJAXQAJARAUABQAOAAAPgKIAAAzQgPAJgYAAQgkABgWgjg");
	this.shape_25.setTransform(513.6,-24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgPArIAeAAIgPhhg");
	this.shape_26.setTransform(497.3,-24.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AAUCVIgghoIgKAAIAABoIg0AAIAAkpIA1AAQApAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_27.setTransform(479.9,-24.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("Ag0CBQgVgYAAgtIAAjSIA0AAIAADXQAAAmAVAAQAWAAAAgmIAAjXIA0AAIAADSQAAAtgVAYQgUAWghAAQggAAgUgWg");
	this.shape_28.setTransform(460.8,-24.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AhLCVIAAkpIAwAAQAxAAAbAkQAbAlAABHIAAAIQAABIgbAlQgbAkgxAAgAgXBlIACAAQAsAAAAhhIAAgIQAAhhgsAAIgCAAg");
	this.shape_29.setTransform(442.1,-24.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("Ag0CBQgVgYAAgtIAAjSIA0AAIAADXQAAAmAVAAQAWAAAAgmIAAjXIA0AAIAADSQAAAtgVAYQgUAWghAAQggAAgUgWg");
	this.shape_30.setTransform(415.1,-24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("Ag8CLIAAg2QAcAQATABQAMAAAFgHQAJgGAAgOIAAAAQAAgLgFgKQgGgLgQgVQgdgegJgQQgMgWAAgZIAAgBQAAgkAVgVQAUgVAeAAQAbAAATAJIAAA3QgYgPgQAAQgMAAgFAHQgIAHAAAMIAAABQAAAKAFAJIAWAdQAeAiAKATQAKAUAAAaIAAAAQAAAjgVAWQgVAVgeAAQgaAAgbgMg");
	this.shape_31.setTransform(398.3,-24.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgZCVIAAh2Ig3izIA2AAIAaBwIAchwIA1AAIg4CzIAAB2g");
	this.shape_32.setTransform(374.1,-24.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AAeCVIg1idIAACdIgzAAIAAkpIAwAAIAyCVIAAiVIA0AAIAAEpg");
	this.shape_33.setTransform(347.9,-24.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("Ag4ChQgWgnAAhHIAAgQQAAhGAWgmQAUgkAkAAQAkAAAVAkQAWAmAABGIAAAQQAABHgWAnQgVAkgkAAQgkAAgUgkgAgRgpQgIAYAAA0IAAAQQAAA2AIAYQAFAUAMAAQAMAAAHgUQAHgYAAg2IAAgQQAAg0gHgYQgHgUgMAAQgMAAgFAUgAgYh6IAohKIAmAUIgxA2g");
	this.shape_34.setTransform(328.7,-29.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgZCVIAAkpIAzAAIAAEpg");
	this.shape_35.setTransform(314.4,-24.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AgjB1QgZgmAAhLIAAgIQAAhLAagmQAWghAmAAQATAAAPAGIAAA2QgQgJgNgBQgTABgKATQgJAXAAA1IAAAJQAAA3AJAXQAKARAUABQANAAAQgKIAAAzQgPAJgYAAQgkABgVgjg");
	this.shape_36.setTransform(302,-24.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgkB1QgYgmAAhLIAAgIQAAhLAZgmQAXghAlAAQATAAAQAGIAAA2QgRgJgMgBQgTABgKATQgJAXAAA1IAAAJQAAA3AKAXQAIARAVABQANAAAQgKIAAAzQgPAJgXAAQglABgWgjg");
	this.shape_37.setTransform(287.6,-24.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("Ag4CVIAAkpIBxAAIAAAxIg9AAIAABLIA1AAIAAAvIg1AAIAABMIA+AAIAAAyg");
	this.shape_38.setTransform(273,-24.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgYCVIAAh2Ig4izIA2AAIAaBwIAdhwIA0AAIg3CzIAAB2g");
	this.shape_39.setTransform(256.4,-24.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AAdCVIg1idIAACdIgzAAIAAkpIAxAAIAzCVIAAiVIAyAAIAAEpg");
	this.shape_40.setTransform(238.1,-24.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgZCVIAAkpIAzAAIAAEpg");
	this.shape_41.setTransform(223.7,-24.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("Ag2AZIAAgxIBtAAIAAAxg");
	this.shape_42.setTransform(211.2,-23.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgYCVIAAj4IglAAIAAgxIB8AAIAAAxIglAAIAAD4g");
	this.shape_43.setTransform(197.9,-24.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("Ag8CLIAAg2QAdAQASABQAMAAAGgHQAIgGAAgOIAAAAQAAgLgFgKQgGgLgQgVQgdgegKgQQgLgWAAgZIAAgBQAAgkAVgVQAUgVAeAAQAbAAATAJIAAA3QgYgPgQAAQgLAAgGAHQgIAHAAAMIAAABQAAAKAFAJQAFAHARAWQAfAiAKATQAJAUAAAaIAAAAQAAAjgVAWQgVAVgeAAQgaAAgbgMg");
	this.shape_44.setTransform(183.7,-24.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("Ag4B2QgWgnAAhIIAAgNQAAhIAWgnQAUgjAkgBQAlABAUAjQAWAnAABIIAAANQAABIgWAnQgUAjglABQgkgBgUgjgAgZgGIAAANQAABiAZAAQANAAAGgUQAHgXAAg3IAAgNQAAg3gHgXQgGgUgNAAQgZAAAABig");
	this.shape_45.setTransform(166.9,-24.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AhGCVIAAkpIAuAAQAsAAAYAYQAbAaAAAzIAAAAQAAAvgaAbQgXAZgnADIgBAAIAABegAgSAHIABAAQARgBAIgLQALgOAAgaIAAgBQAAg2gjAAIgCAAg");
	this.shape_46.setTransform(149.1,-24.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("Ag8CLIAAg2QAdAQASABQAMAAAGgHQAIgGAAgOIAAAAQAAgLgFgKQgGgLgQgVQgdgegKgQQgLgWAAgZIAAgBQAAgkAVgVQAUgVAeAAQAbAAATAJIAAA3QgYgPgQAAQgLAAgGAHQgIAHAAAMIAAABQAAAKAFAJQAFAHARAWQAfAiAKATQAJAUAAAaIAAAAQAAAjgVAWQgVAVgeAAQgaAAgbgMg");
	this.shape_47.setTransform(124.6,-24.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgQArIAeAAIgOhhg");
	this.shape_48.setTransform(108,-24.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AAUCVIgghoIgKAAIAABoIg0AAIAAkpIA2AAQAoAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIADAAQAlAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_49.setTransform(90.5,-24.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("Ag4B2QgWgnAAhIIAAgNQAAhIAWgnQAUgjAkgBQAkABAVAjQAWAnAABIIAAANQAABIgWAnQgVAjgkABQgkgBgUgjgAgZgGIAAANQAABiAZAAQAMAAAHgUQAHgXAAg3IAAgNQAAg3gHgXQgHgUgMAAQgZAAAABig");
	this.shape_50.setTransform(71.4,-24.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AAWCVIAAh+IgrAAIAAB+Ig0AAIAAkpIA0AAIAAB8IArAAIAAh8IA0AAIAAEpg");
	this.shape_51.setTransform(52.4,-24.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AAECWIAAg4IhQAAIAAgnIBNjMIAzAAIAADGIAYAAIAAAtIgYAAIAAA4gAghAxIAlAAIAAhrg");
	this.shape_52.setTransform(26.3,-24.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("Ag7CWIAAgsIAyhyQASgtABgUQAAgLgIgIQgFgHgMAAQgTAAgTANIAAgzQAYgMAZAAQAcgBASASQASASAAAfIAAACQAAARgEARQgFARgOAeIgpBiIA/AAIAAA0g");
	this.shape_53.setTransform(10.6,-24.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AATCVIgfhoIgKAAIAABoIg0AAIAAkpIA2AAQAoAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIADAAQAlAAAAgxIAAgDQAAgwgmAAIgCAAg");
	this.shape_54.setTransform(-13.2,-24.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg9AAIAABLIA2AAIAAAvIg2AAIAABMIA+AAIAAAyg");
	this.shape_55.setTransform(-30.1,-24.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AgkB1QgYgmAAhLIAAgIQAAhLAagmQAXghAkAAQAUAAAPAGIAAA2QgRgJgMgBQgTABgKATQgJAXAAA1IAAAJQAAA3AKAXQAJARATABQAOAAAQgKIAAAzQgPAJgYAAQgkABgWgjg");
	this.shape_56.setTransform(-45.7,-24.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("Ag4CVIAAkpIBxAAIAAAxIg9AAIAABLIA1AAIAAAvIg1AAIAABMIA+AAIAAAyg");
	this.shape_57.setTransform(-60.3,-24.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AAUCVIgghoIgKAAIAABoIg0AAIAAkpIA2AAQAoAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIADAAQAlAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_58.setTransform(-76.7,-24.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AAgCWIgKg8IguAAIgJA8IgyAAIA5krIA1AAIA5ErgAgQArIAfAAIgPhhg");
	this.shape_59.setTransform(-95.3,-24.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AhGCVIAAkpIAuAAQArAAAZAYQAbAaAAAzIAAAAQAAAvgZAbQgYAZgoADIAAAAIAABegAgSAHIAAAAQASgBAIgLQALgOAAgaIAAgBQAAg2gjAAIgCAAg");
	this.shape_60.setTransform(-111.2,-24.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgQArIAfAAIgPhhg");
	this.shape_61.setTransform(-129.4,-24.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("Ag4CVIAAkpIBwAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA+AAIAAAyg");
	this.shape_62.setTransform(-153.6,-24.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("Ag0CVIAAkpIA0AAIAAD3IA1AAIAAAyg");
	this.shape_63.setTransform(-167.9,-24.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("Ag4CVIAAkpIBwAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA9AAIAAAyg");
	this.shape_64.setTransform(-182.7,-24.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("Ag0CBQgVgYAAgtIAAjSIA0AAIAADXQAAAmAVAAQAWAAAAgmIAAjXIA0AAIAADSQAAAtgVAYQgUAWghAAQggAAgUgWg");
	this.shape_65.setTransform(-200,-24.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("Ag8CLIAAg2QAcAQATABQAMAAAGgHQAIgGAAgOIAAAAQAAgLgFgKQgGgLgQgVQgdgegKgQQgLgWAAgZIAAgBQAAgkAUgVQAVgVAeAAQAbAAATAJIAAA3QgYgPgQAAQgMAAgFAHQgIAHAAAMIAAABQAAAKAFAJIAWAdQAeAiAKATQAKAUAAAaIAAAAQAAAjgVAWQgWAVgdAAQgaAAgbgMg");
	this.shape_66.setTransform(-216.8,-24.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AgpBCQgRgXAAgnIAAgHQAAgnARgXQAQgXAZAAQAaAAAQAXQAQAXAAAnIAAAHQAAAngQAXQgQAXgaAAQgZAAgQgXgAgjg6QgNAUAAAjIAAAHQAAAjANAUQAOAVAVAAQAWAAAOgVQANgUAAgjIAAgHQAAgjgNgUQgOgVgWAAQgVAAgOAVgAAIAuIgJgiIgDAAIAAAiIgRAAIAAheIARAAQAcAAAAAeIAAACQAAAQgLAHIANAngAgEgBIABAAQAKAAAAgPIAAgBQAAgPgLAAIAAAAg");
	this.shape_67.setTransform(-238.8,-32.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AgZCVIAAh2Ig3izIA2AAIAaBwIAdhwIA0AAIg3CzIAAB2g");
	this.shape_68.setTransform(-254.5,-24.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AhLCVIAAkpIAxAAQAwAAAbAkQAbAlAABHIAAAIQAABIgbAlQgbAkgwAAgAgXBlIACAAQAsAAAAhhIAAgIQAAhhgsAAIgCAAg");
	this.shape_69.setTransform(-271.6,-24.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AgZCVIAAkpIAzAAIAAEpg");
	this.shape_70.setTransform(-286.1,-24.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AATCVIgfhoIgKAAIAABoIg0AAIAAkpIA1AAQApAAAYAWQAaAZAAAwIAAAEQAAAzgjAaIAoB5gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_71.setTransform(-299.3,-24.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgtB1QgcgmAAhLIAAgIQAAhGAcgnQAaglAsAAQAVgBASAJIAAA3QgVgOgRAAQgXAAgKAYQgNAYAAAwIAAAMQAABgAqAAIAFgBIAAhMIgaAAIAAgtIBJAAIAACeQgfAMgXAAQgoABgZgjg");
	this.shape_72.setTransform(-318.3,-24.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA9AAIAAAyg");
	this.shape_73.setTransform(-334.2,-24.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("Ag0CVIAAkpIA0AAIAAD3IA1AAIAAAyg");
	this.shape_74.setTransform(-348.5,-24.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AhGCVIAAkpIAvAAQAqAAAZAYQAbAaAAAzIAAAAQAAAvgZAbQgYAZgnADIgBAAIAABegAgSAHIABAAQARgBAIgLQALgOAAgaIAAgBQAAg2gjAAIgCAAg");
	this.shape_75.setTransform(-364.3,-24.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AAeCVIg2idIAACdIgzAAIAAkpIAxAAIAyCVIAAiVIA0AAIAAEpg");
	this.shape_76.setTransform(-391,-24.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("Ag4B2QgWgnAAhIIAAgNQAAhIAWgnQAUgjAkgBQAkABAVAjQAWAnAABIIAAANQAABIgWAnQgVAjgkABQgkgBgUgjgAgRhUQgIAXAAA3IAAANQAAA3AIAXQAGAUALAAQAaAAAAhiIAAgNQAAhigaAAQgLAAgGAUg");
	this.shape_77.setTransform(-410.1,-24.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AgjB1QgZgmAAhLIAAgIQAAhLAagmQAWghAmAAQASAAAQAGIAAA2QgQgJgNgBQgTABgKATQgJAXAAA1IAAAJQAAA3AJAXQAKARAUABQANAAAQgKIAAAzQgPAJgYAAQgkABgVgjg");
	this.shape_78.setTransform(-426.3,-24.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AAgCWIgKg8IgtAAIgKA8IgyAAIA5krIA1AAIA5ErgAgQArIAfAAIgPhhg");
	this.shape_79.setTransform(-450.9,-24.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AAmCVIAAizIgmBvIAAAAIglhvIAACzIgyAAIAAkpIA0AAIAjBtIAlhtIAzAAIAAEpg");
	this.shape_80.setTransform(-470.9,-24.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA+AAIAAAyg");
	this.shape_81.setTransform(-489.1,-24.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgZCVIAAj4IgkAAIAAgxIB8AAIAAAxIglAAIAAD4g");
	this.shape_82.setTransform(-504.4,-24.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgZCVIAAkpIAzAAIAAEpg");
	this.shape_83.setTransform(-516.7,-24.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AAUCVIgghoIgKAAIAABoIg0AAIAAkpIA1AAQApAAAYAWQAaAZAAAwIAAAEQAAAygjAbIAoB5gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_84.setTransform(-529.8,-24.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("Ag4CVIAAkpIBwAAIAAAxIg8AAIAABLIA1AAIAAAvIg1AAIAABMIA+AAIAAAyg");
	this.shape_85.setTransform(-546.8,-24.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("Ag0CVIAAkpIA0AAIAAD3IA1AAIAAAyg");
	this.shape_86.setTransform(-567.9,-24.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("Ag5CVIAAkpIBxAAIAAAxIg9AAIAABLIA2AAIAAAvIg2AAIAABMIA+AAIAAAyg");
	this.shape_87.setTransform(-581.6,-24.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F89F5E").s().p("AryL8IAA33IShAAIAACMQAWCbBGCSQBHCTB4CDIApAsIgoAsQhfBqhEB7QgfA5gWA1QgyB6gSB6IAACJg");
	this.shape_88.setTransform(-699.7,-0.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F89F5E").s().p("Eh5VAMLIAA4VMDyrAAAIAAYVgEh45ALvMDxzAAAIAA3dMjxzAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776.6,-77.9,1553.2,156);


(lib.grafica7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-223.4,-402.7,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.4,-402.7,446.8,805.5);


// stage content:
(lib.AyudaVisualPLEGRIDYipad8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYCRQgOgWABgkIAAgFQgBgkAOgVQAOgUAVAAQAVAAAOAUQAOAVAAAkIAAAFQAAAkgOAWQgOAUgVAAQgVAAgOgUgAAoAqQgHAOAAAaIAAAFQAAAaAHAPQAIAOALAAQAMAAAHgOQAHgPAAgaIAAgFQAAgagHgOQgHgOgMAAQgLAAgIAOgAhTCiICSlEIAVAAIiRFEgAhdgYQgOgWAAgjIAAgGQAAgjAOgWQAOgUAVAAQAWAAANAUQAOAWAAAjIAAAGQAAAjgOAWQgOAUgVAAQgVAAgOgUgAhMh/QgIAOAAAaIAAAGQAAAaAIAOQAGAOAMAAQAMAAAHgOQAIgOAAgaIAAgGQAAgagIgOQgHgOgMAAQgMAAgGAOg");
	this.shape.setTransform(1432,345.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah0EKIAAhcQATAIANADQARAEAVAAQAeAAARgVQAUgWAAgkIAAgGQAAhQhfgHIAAg9IBZiOIh8AAIAAhfIDfAAIAABXIheCRQAuAPAYAgQAbAkAAA+IAAAJQAABRgrAwQgqAwhBAAQguAAglgQg");
	this.shape_1.setTransform(1405.8,360.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZCRQgPgWAAgkIAAgFQAAgkAPgVQANgUAVAAQAWAAANAUQAOAVAAAkIAAAFQAAAkgOAWQgNAUgWAAQgVAAgNgUgAApAqQgIAOAAAaIAAAFQAAAaAIAPQAGAOAMAAQAMAAAHgOQAHgPAAgaIAAgFQAAgagHgOQgHgOgMAAQgMAAgGAOgAhSCiICRlEIAWAAIiSFEgAhcgYQgPgWAAgjIAAgGQAAgjAPgWQANgUAWAAQAUAAAOAUQAOAWAAAjIAAAGQAAAjgOAWQgOAUgUAAQgWAAgNgUgAhMh/QgIAOABAaIAAAGQgBAaAIAOQAGAOANAAQALAAAIgOQAGgOABgaIAAgGQgBgagGgOQgIgOgLAAQgNAAgGAOg");
	this.shape_2.setTransform(636.5,345.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0EKIAAhcQAkAPAiAAQAeAAARgVQAUgWAAgkIAAgGQAAhQhfgHIAAg9IBZiOIh8AAIAAhfIDfAAIAABXIheCRQAuAPAYAgQAbAkAAA+IAAAJQAABRgrAwQgqAwhBAAQguAAglgQg");
	this.shape_3.setTransform(610.4,360.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfDgQgig/AAiJIAAgRQAAigAthHQAmg8BIAAQAlAAAfANIAABcQgdgRgcAAQgkAAgPAeQgVAhgBBMQAOgMAMgFQANgHAWAAQAsAAAbAjQAiAqAABUIAAAPQAABVglA1QgjA0g5AAQhBAAgfg9gAgjAMIAABDQAAB3AkAAQAmAAAAhjIAAgQQAAhTgoAAQgSAAgQAMg");
	this.shape_4.setTransform(582.3,360.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYCRQgOgWAAgkIAAgFQAAgkAOgVQAOgUAVAAQAWAAANAUQAOAVAAAkIAAAFQAAAkgOAWQgNAUgWAAQgVAAgOgUgAAoAqQgHAOAAAaIAAAFQAAAaAHAPQAHAOAMAAQAMAAAHgOQAHgPAAgaIAAgFQAAgagHgOQgHgOgMAAQgMAAgHAOgAhTCiICSlEIAVAAIiRFEgAhcgYQgPgWAAgjIAAgGQAAgjAPgWQANgUAVAAQAVAAAOAUQAOAWAAAjIAAAGQAAAjgOAWQgOAUgVAAQgVAAgNgUgAhMh/QgIAPAAAZIAAAGQAAAZAIAPQAHAOALAAQAMAAAHgOQAIgPAAgZIAAgGQAAgZgIgPQgHgOgMAAQgLAAgHAOg");
	this.shape_5.setTransform(180.3,345.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHEXIAAhmIiWAAIAAhKICRl+IBgAAIAAF0IAtAAIAABUIgtAAIAABmgAg/BdIBGAAIAAjKg");
	this.shape_6.setTransform(152.2,360.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah0EKIAAhcQATAIAOADQARAEAUAAQAeAAARgVQAVgWAAgkIAAgGQAAhQhggHIAAg9IBZiOIh8AAIAAhfIDfAAIAABXIheCRQAuAPAXAgQAcAkAAA+IAAAJQAABRgrAwQgqAwhBAAQguAAglgQg");
	this.shape_7.setTransform(122.6,360.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgagXQgTgPgIgLQgIgMAAgOIAAgBQAAgSAOgLQAMgKASAAQARAAANAFIAAAUQgOgHgQAAQgJAAgGAGQgHAFAAAJIAAABQAAAIAGAIQAGAHAOAPQATAPAIAMQAIAMAAAOIAAAAQAAATgOALQgNALgSAAQgSAAgTgIg");
	this.shape_8.setTransform(1442.9,482);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQANAAAPAGIAAgSQAAgjgfABQgSAAgQAIIAAgUQAQgIAUABQAXAAAOAMQAOAOAAAZIAAB2IgWAAIAAgXQgMAZgWABQgSAAgLgPgAgTAFQgHAJAAARIAAADQAAAQAGAKQAHAKAMgBQALABAJgLQAIgLAAgPIAAggQgPgFgLABQgMAAgIAIg");
	this.shape_9.setTransform(1431.1,482.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgagXQgTgPgIgLQgIgMAAgOIAAgBQAAgSAOgLQAMgKASAAQARAAANAFIAAAUQgOgHgQAAQgJAAgGAGQgHAFAAAJIAAABQAAAIAGAIQAGAHAOAPQATAQAIALQAIAMAAAOIAAAAQAAATgOALQgOALgRAAQgSAAgTgIg");
	this.shape_10.setTransform(1420.1,482);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AAcBWIAAh0QAAglgaAAQgLAAgJALQgJAKABASIAAByIgXAAIAAioIAXAAIAAAYQAMgbAXAAQATAAAKAOQAMANgBAYIAAB4g");
	this.shape_11.setTransform(1408.2,481.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAAKIhPAAQABAdAMAQQALAPAQAAQAPAAARgLIADATQgTALgTAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_12.setTransform(1395,482);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgQBOIAAh5IgQAAIAAgSIAQAAIAAguIAVAAIAAAuIAcAAIAAASIgcAAIAAB0QAAARARAAQAFAAAGgCIAAARQgIADgIAAQghAAAAgeg");
	this.shape_13.setTransform(1384.6,479.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AAbBWIAAh0QAAglgaAAQgKAAgJALQgJALAAARIAAByIgVAAIAAioIAVAAIAAAYQANgbAXAAQASAAALAOQALANAAAYIAAB4g");
	this.shape_14.setTransform(1373.8,481.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AgKBxIAAioIAVAAIAACogAgKhVIAAgbIAVAAIAAAbg");
	this.shape_15.setTransform(1363.8,479.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AAbBWIAAh0QAAglgaAAQgKAAgJALQgIAKgBASIAAByIgWAAIAAioIAWAAIAAAYQAMgbAXAAQAUAAAKAOQAMANAAAYIAAB4g");
	this.shape_16.setTransform(1347.9,481.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AglBgQgQgXAAgnIAAgFQAAglAQgYQAQgWAVAAQAXAAAPAWQAQAYAAAlIAAAFQAAAngQAXQgPAXgXAAQgVAAgQgXgAgVgSQgKASAAAdIAAAFQAAAeAKATQAIARANABQANgBAJgRQAKgTAAgeIAAgFQAAgdgKgSQgJgRgNAAQgNAAgIARgAgIhHIAZgvIAWALIgjAkg");
	this.shape_17.setTransform(1334.4,478.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgKBxIAAioIAUAAIAACogAgKhVIAAgbIAVAAIAAAbg");
	this.shape_18.setTransform(1324.6,479.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgWBCQgRgXAAgpIAAgDQAAgpASgXQAQgUAWAAQANgBAKAGIAAAVQgLgIgLABQgPAAgIAPQgLARAAAhIAAAEQAAAgALARQAIAPAQAAQALAAAKgHIAAATQgKAIgOAAQgXAAgPgVg");
	this.shape_19.setTransform(1316.4,482.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgWBCQgRgXAAgpIAAgDQAAgpASgXQAQgUAWAAQANgBAKAGIAAAVQgLgIgLABQgPAAgIAPQgLARAAAhIAAAEQAAAgALARQAIAPAQAAQALAAAKgHIAAATQgKAIgOAAQgWAAgQgVg");
	this.shape_20.setTransform(1306.6,482.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAXAAANAWQAOAXAAAnIAAAKIhPAAQABAdAMAQQAMAPAPAAQAPAAARgLIADATQgUALgTAAQgXAAgQgVgAgTg0QgJAQAAAeIA6AAQgBgbgHgRQgJgRgMAAQgLAAgJAPg");
	this.shape_21.setTransform(1295,482);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AgVBpIAMgsIgsilIAXAAIAeCCIAgiCIAWAAIg2DRg");
	this.shape_22.setTransform(1282.9,484.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AAcBWIAAh0QAAgSgHgJQgHgKgNAAQgKAAgJALQgIAKAAASIAAByIgWAAIAAioIAWAAIAAAYQAMgbAXAAQATAAAKAOQALANAAAYIAAB4g");
	this.shape_23.setTransform(1270.2,481.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgKBxIAAioIAUAAIAACogAgKhVIAAgbIAVAAIAAAbg");
	this.shape_24.setTransform(1260.2,479.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQANAAAPAGIAAgSQAAgjgfABQgSAAgQAIIAAgUQARgIAUABQAWAAAOAMQAOAOAAAZIAAB2IgWAAIAAgXQgMAZgWABQgSAAgLgPgAgTAFQgHAJAAARIAAADQAAAQAGAKQAHAKAMgBQALABAJgLQAIgLAAgPIAAggQgQgFgKABQgMAAgIAIg");
	this.shape_25.setTransform(1244.3,482.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_26.setTransform(1235.2,479.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAWAAAOAWQAOAXAAAnIAAAKIhPAAQABAdAMAQQALAPAQAAQAPAAASgLIACATQgUALgSAAQgYAAgRgVgAgTg0QgIAQgBAeIA6AAQAAgbgJgRQgIgRgMAAQgLAAgJAPg");
	this.shape_27.setTransform(1219.7,482);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AglBdQgPgWAAgoIAAgJQAAglAPgXQAMgVATAAQAWAAAOAhIAAhXIAWAAIAADgIgWAAIAAgdQgNAggXAAQgTAAgMgVgAgVgXQgIARAAAdIAAAHQAAAfAIARQAIASANgBQALAAAKgQQAJgSABgeIAAgJQgBgcgJgRQgKgRgLAAQgNAAgIARg");
	this.shape_28.setTransform(1206.2,479.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAQgWAVAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgVAAgQgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgDQAAgfgKgSQgJgRgNAAQgNAAgIARg");
	this.shape_29.setTransform(1441.4,443.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_30.setTransform(1431.6,440.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgQIAQAAIAAgvIAVAAIAAAvIAcAAIAAAQIgcAAIAAB1QAAAQARAAIALgBIAAARQgHADgJAAQghAAAAgeg");
	this.shape_31.setTransform(1424.1,441.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgKBxIAAinIAUAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_32.setTransform(1416.9,440.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgpBOIAAgUQAXAKAPAAQAIAAAIgGQAGgGAAgKIAAAAQAAgRgZgWQgSgPgJgMQgIgMAAgNIAAgBQAAgRAOgMQAMgKARAAQASgBAOAGIAAAUQgRgHgPAAQgHAAgHAFQgGAGAAAJIAAABQAAAIAFAIQAGAHAOAPQATAPAIAMQAHAMABANIAAABQgBASgOANQgNALgQgBQgTAAgUgIg");
	this.shape_33.setTransform(1408.6,443.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_34.setTransform(1394.2,440.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_35.setTransform(1384.7,443.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("AAcBVIAAhzQgBglgaAAQgKAAgJAKQgJAMABARIAABxIgXAAIAAimIAXAAIAAAXQAMgaAXgBQASAAALAOQALANAAAZIAAB2g");
	this.shape_36.setTransform(1365.6,443.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgTAAQgXAAgQgVgAgTg0QgIAQgBAeIA6AAQAAgbgJgRQgIgRgMAAQgLAAgJAPg");
	this.shape_37.setTransform(1352.3,443.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AgpBOIAAgUQAWAKAQAAQAJAAAGgGQAHgGAAgKIAAAAQAAgQgZgXQgTgOgIgNQgHgMgBgNIAAgBQAAgRAOgMQAMgKARAAQASgBAOAGIAAAUQgRgHgPAAQgIAAgGAFQgHAGAAAJIAAABQAAAIAGAIQAFAHAPAPQATAPAIAMQAHAMABANIAAABQgBASgOANQgMALgSgBQgTAAgTgIg");
	this.shape_38.setTransform(1334.8,443.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_39.setTransform(1323.3,443.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AAcBVIAAhzQAAgSgHgKQgHgJgNAAQgKAAgJAKQgIAMAAARIAABxIgWAAIAAimIAWAAIAAAXQAMgaAXgBQATAAAKAOQALANAAAZIAAB2g");
	this.shape_40.setTransform(1310.2,443.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAWAAAQAWQAQAYAAAnIAAADQAAAngQAYQgQAWgWAAQgWAAgPgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAJgTAAgeIAAgDQAAgfgJgSQgJgRgNAAQgNAAgIARg");
	this.shape_41.setTransform(1296.8,443.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_42.setTransform(1287,440.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgLgHgMAAQgOAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgMAGgMAAQgXABgPgVg");
	this.shape_43.setTransform(1278.8,443.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_44.setTransform(1269,443.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAMgBAQAHIAAgTQAAghgggBQgQAAgRAIIAAgUQARgGATgBQAXAAAOAOQAOANAAAZIAAB1IgWAAIAAgWQgMAagWAAQgSAAgLgPgAgTAFQgHAJAAAQIAAAEQAAAPAGAKQAHAKAMAAQALAAAJgLQAIgLAAgOIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_45.setTransform(1257.1,443.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIADAUQgUAKgSAAQgYAAgRgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_46.setTransform(1244.8,443.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AgeBVIAAinIAWAAIAAAYQAKgcAdACIAAAXIgBAAQgRAAgLAKQgKALAAAUIAABpg");
	this.shape_47.setTransform(1235.2,443.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgKAAgJAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQAOgaAWgBQASAAALAOQALANAAAZIAAB2g");
	this.shape_48.setTransform(1217.4,443.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAJgTAAgeIAAgDQAAgfgJgSQgJgRgNAAQgNAAgIARg");
	this.shape_49.setTransform(1203.9,443.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgaBWQgUgeABg2IAAgEQAAg2AUgdQATgbAaAAQAOAAAMAFIAAAWQgPgHgKAAQgUAAgKAWQgOAYAAAsIAAAEQAAAtAOAYQAKAVAUAAQANABAMgIIAAAWQgNAGgOAAQgcAAgRgbg");
	this.shape_50.setTransform(1191.6,440.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgZgXQgUgPgIgLQgIgMAAgOIAAgBQAAgSAOgLQANgKARAAQARAAAOAFIAAAUQgPgHgQAAQgJAAgGAGQgHAFAAAJIAAABQAAAIAGAIQAGAIAOAOQAUAPAHAMQAIAMAAAOIAAAAQAAATgOALQgNALgSAAQgSAAgTgIg");
	this.shape_51.setTransform(676.7,482);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgXQAPgXAWAAQAXAAAPAXQAQAXAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgVgyQgKATAAAeIAAADQAAAeAKATQAIASANAAQANAAAJgSQAJgTAAgeIAAgDQAAgegJgTQgJgRgNAAQgNAAgIARg");
	this.shape_52.setTransform(665,482);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AglBdQgOgWAAgoIAAgJQAAglAOgXQAMgVAUAAQAWAAANAhIAAhXIAWAAIAADgIgWAAIAAgdQgNAggWAAQgUAAgMgVgAgVgXQgIARAAAdIAAAHQAAAfAIARQAJASAMgBQAMAAAJgQQAKgSAAgeIAAgJQAAgcgKgRQgJgRgMAAQgMAAgJARg");
	this.shape_53.setTransform(651.2,479.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAOAAAOAGIAAgSQAAgjgfABQgSAAgQAIIAAgUQARgIAUABQAWAAAOAMQAOAOAAAZIAAB2IgWAAIAAgXQgMAZgWABQgSAAgLgPgAgTAFQgHAJAAARIAAADQAAAQAHAKQAGAKAMgBQALABAJgLQAIgLAAgPIAAggQgQgFgKABQgMAAgIAIg");
	this.shape_54.setTransform(637.9,482.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgdBVIAAinIAVAAIAAAYQAKgcAdACIAAAXIgCAAQgRAAgKAKQgKALAAAUIAABpg");
	this.shape_55.setTransform(628.8,481.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAWAAAOAWQAOAXAAAnIAAAKIhPAAQABAdAMAQQALAPAQAAQAPAAARgLIACATQgTALgTAAQgXAAgRgVgAgSg0QgKAQAAAeIA5AAQAAgbgIgRQgHgRgNAAQgLAAgIAPg");
	this.shape_56.setTransform(617.4,482);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AglBdQgOgWAAgoIAAgJQAAglAOgXQAMgVAUAAQAWAAANAhIAAhXIAWAAIAADgIgWAAIAAgdQgNAggWAAQgUAAgMgVgAgVgXQgIARAAAdIAAAHQAAAfAIARQAJASAMgBQAMAAAJgQQAKgSAAgeIAAgJQAAgcgKgRQgJgRgMAAQgMAAgJARg");
	this.shape_57.setTransform(603.9,479.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgXQAQgXAVAAQAXAAAPAXQAQAXAAAnIAAADQAAAngQAYQgPAWgXAAQgVAAgQgWgAgVgyQgKATAAAeIAAADQAAAeAKATQAIASANAAQANAAAJgSQAKgTAAgeIAAgDQAAgegKgTQgJgRgNAAQgNAAgIARg");
	this.shape_58.setTransform(590.7,482);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("ABBBWIAAh1QAAgkgZAAQgNAAgIALQgJAKABARIAABzIgVAAIAAh1QAAgkgZAAQgMAAgIALQgJAKAAARIAABzIgVAAIAAioIAVAAIAAAYQAOgbAWAAQAZAAAJAbQAOgbAZAAQASAAAMANQALAOAAAYIAAB4g");
	this.shape_59.setTransform(573.6,481.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgjAJIAAgRIBHAAIAAARg");
	this.shape_60.setTransform(551.7,480.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgagXQgSgPgJgMQgHgMgBgNIAAgBQAAgRAOgMQAMgKASAAQARgBAOAGIAAAUQgQgHgPAAQgJAAgGAFQgHAGABAJIAAABQgBAIAGAIQAGAHAOAPQATAPAIAMQAHAMABANIAAABQAAASgPANQgMALgSgBQgTAAgSgIg");
	this.shape_61.setTransform(1024.6,443.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIADAUQgUAKgSAAQgYAAgRgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_62.setTransform(1013,443.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgIBUIgtinIAXAAIAeCGIAgiGIAWAAIgsCng");
	this.shape_63.setTransform(1000.9,443.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIACAUQgTAKgTAAQgXAAgRgVgAgSg0QgKAQAAAeIA5AAQAAgbgHgRQgIgRgNAAQgLAAgIAPg");
	this.shape_64.setTransform(988.8,443.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_65.setTransform(979.3,440.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgKAAgJAKQgIAMAAARIAABxIgXAAIAAimIAXAAIAAAXQAMgaAXgBQASAAALAOQALANAAAZIAAB2g");
	this.shape_66.setTransform(963.4,443.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AglBgQgQgXAAgnIAAgFQAAglAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAlIAAAFQAAAngQAXQgPAXgXAAQgWAAgPgXgAgVgSQgKASAAAdIAAAFQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgFQAAgdgKgSQgJgSgNAAQgNAAgIASgAgIhHIAZgvIAWAKIgjAlg");
	this.shape_67.setTransform(949.9,440.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_68.setTransform(940.1,440.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_69.setTransform(931.9,443.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_70.setTransform(922.1,443.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_71.setTransform(910.5,443.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgVBpIAMgtIgrikIAVAAIAfCCIAfiCIAXAAIg2DRg");
	this.shape_72.setTransform(898.5,445.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgKAAgJAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQAOgaAWgBQATAAAKAOQAMANAAAZIAAB2g");
	this.shape_73.setTransform(885.7,443.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgJBxIAAinIAUAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_74.setTransform(875.7,440.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAMgBAQAHIAAgTQAAghgfgBQgSAAgQAIIAAgUQARgGATgBQAXAAAOAOQAOANAAAZIAAB1IgXAAIAAgWQgLAagWAAQgSAAgLgPgAgTAFQgHAJAAAQIAAAEQAAAPAGAKQAHAKAMAAQALAAAJgLQAIgLAAgOIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_75.setTransform(859.9,443.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_76.setTransform(850.8,440.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAXAAANAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIADAUQgUAKgTAAQgXAAgQgVgAgTg0QgIAQgBAeIA6AAQgBgbgHgRQgJgRgMAAQgLAAgJAPg");
	this.shape_77.setTransform(835.2,443.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AglBeQgOgXgBgoIAAgJQABglAOgXQAMgVATAAQAXAAANAgIAAhWIAXAAIAADgIgXAAIAAgdQgNAggXAAQgTAAgMgUgAgVgXQgJASABAcIAAAHQgBAfAJASQAJARAMAAQAMAAAIgRQAKgSAAgeIAAgJQAAgbgKgTQgIgQgMAAQgMAAgJARg");
	this.shape_78.setTransform(821.7,440.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgDQAAgfgKgSQgJgRgNAAQgNAAgIARg");
	this.shape_79.setTransform(802.3,443.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AgKBxIAAinIAUAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_80.setTransform(792.6,440.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgQIAQAAIAAgvIAVAAIAAAvIAcAAIAAAQIgcAAIAAB1QAAAQARAAQAGAAAFgBIAAARQgGADgKAAQghAAAAgeg");
	this.shape_81.setTransform(785,441.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_82.setTransform(777.8,440.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgoBOIAAgUQAWAKAPAAQAIAAAHgGQAHgGABgKIAAAAQAAgRgZgWQgUgPgHgMQgJgMABgNIAAgBQAAgRANgMQAMgKASAAQARgBANAGIAAAUQgQgHgOAAQgJAAgGAFQgHAGAAAJIAAABQAAAIAGAIQAGAHAOAPQATAPAHAMQAJAMgBANIAAABQABASgOANQgNALgSgBQgSAAgTgIg");
	this.shape_83.setTransform(769.6,443.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_84.setTransform(755.1,440.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIADAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_85.setTransform(745.6,443.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgLAAgIAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQANgaAWgBQAUAAALAOQAKANABAZIAAB2g");
	this.shape_86.setTransform(726.5,443.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_87.setTransform(713.3,443.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgagXQgTgPgIgMQgIgMAAgNIAAgBQAAgRAOgMQAMgKASAAQARgBANAGIAAAUQgPgHgPAAQgJAAgGAFQgHAGAAAJIAAABQAAAIAGAIQAGAHAOAPQATAPAIAMQAIAMAAANIAAABQAAASgOANQgOALgRgBQgTAAgSgIg");
	this.shape_88.setTransform(695.8,443.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_89.setTransform(684.2,443.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AAcBVIAAhzQAAglgbAAQgKAAgIAKQgJAMAAARIAABxIgXAAIAAimIAXAAIAAAXQANgaAWgBQATAAAKAOQALANAAAZIAAB2g");
	this.shape_90.setTransform(671.2,443.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAWAAAQAWQAQAYAAAnIAAADQAAAngQAYQgQAWgWAAQgWAAgPgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAJgTAAgeIAAgDQAAgfgJgSQgJgRgNAAQgNAAgIARg");
	this.shape_91.setTransform(657.7,443.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AgJBxIAAinIAUAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_92.setTransform(647.9,440.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_93.setTransform(639.7,443.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_94.setTransform(629.9,443.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAMgBAQAHIAAgTQAAghgfgBQgSAAgQAIIAAgUQARgGATgBQAXAAAOAOQAOANAAAZIAAB1IgXAAIAAgWQgLAagWAAQgSAAgLgPgAgTAFQgHAJAAAQIAAAEQAAAPAGAKQAHAKAMAAQALAAAJgLQAIgLAAgOIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_95.setTransform(618,443.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_96.setTransform(605.7,443.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AgdBVIAAinIAVAAIAAAYQALgcAcACIAAAXIgBAAQgRAAgLAKQgKALAAAUIAABpg");
	this.shape_97.setTransform(596.1,443.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AAcBVIAAhzQAAgSgHgKQgHgJgNAAQgKAAgJAKQgIAMAAARIAABxIgWAAIAAimIAWAAIAAAXQAMgaAXgBQATAAAKAOQALANAAAZIAAB2g");
	this.shape_98.setTransform(578.3,443.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAQgWAVAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgVAAgQgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgDQAAgfgKgSQgJgRgNAAQgNAAgIARg");
	this.shape_99.setTransform(564.8,443.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AgaBWQgTgeAAg2IAAgEQAAg2AUgdQATgbAaAAQAOAAAMAFIAAAWQgPgHgJAAQgUAAgKAWQgOAYAAAsIAAAEQAAAtAOAYQAJAVAVAAQAMABAMgIIAAAWQgMAGgPAAQgbAAgSgbg");
	this.shape_100.setTransform(552.5,440.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AAcBVIAAhzQAAglgbAAQgKAAgJAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQANgaAXgBQASAAAMAOQALANgBAZIAAB2g");
	this.shape_101.setTransform(501.4,443.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AglBgQgQgXAAgnIAAgFQAAglAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAlIAAAFQAAAngQAXQgPAXgXAAQgWAAgPgXgAgVgSQgKASAAAdIAAAFQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgFQAAgdgKgSQgJgSgNAAQgNAAgIASgAgIhHIAZgvIAWAKIgjAlg");
	this.shape_102.setTransform(487.9,440.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_103.setTransform(478.1,440.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAXAAQANgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgLARAAAfIAAAFQAAAhALAQQAIAPAQAAQAKABALgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_104.setTransform(469.9,443.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoARgYQAQgUAXAAQAOgBAJAGIAAAVQgLgHgLAAQgPAAgIAQQgLARAAAfIAAAFQAAAhALAQQAIAPAQAAQAKABALgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_105.setTransform(460.1,443.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAPgWAUAAQAXAAANAWQAOAWAAAoIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_106.setTransform(448.4,443.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#58595B").s().p("AgVBpIAMgtIgsikIAXAAIAeCCIAgiCIAWAAIg2DRg");
	this.shape_107.setTransform(436.4,445.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgKAAgJAKQgIAMAAARIAABxIgWAAIAAimIAWAAIAAAXQAMgaAXgBQASAAALAOQALANAAAZIAAB2g");
	this.shape_108.setTransform(423.7,443.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_109.setTransform(413.7,440.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAMgBAQAHIAAgTQAAghgggBQgRAAgQAIIAAgUQARgGAUgBQAWAAAOAOQAOANAAAZIAAB1IgXAAIAAgWQgLAagXAAQgRAAgLgPgAgTAFQgHAJAAAQIAAAEQgBAPAIAKQAGAKAMAAQALAAAJgLQAIgLAAgOIAAghQgPgDgLgBQgMAAgIAJg");
	this.shape_110.setTransform(397.8,443.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#58595B").s().p("AgJBxIAAjhIATAAIAADhg");
	this.shape_111.setTransform(388.7,440.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgpAQgXQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIACAUQgTAKgSAAQgYAAgRgVgAgSg0QgJAQgBAeIA5AAQAAgbgIgRQgIgRgMAAQgLAAgIAPg");
	this.shape_112.setTransform(373.1,443.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#58595B").s().p("AglBeQgOgXgBgoIAAgJQABglAOgXQAMgVATAAQAWAAAOAgIAAhWIAWAAIAADgIgWAAIAAgdQgOAggWAAQgTAAgMgUgAgVgXQgJASABAcIAAAHQgBAfAJASQAJARAMAAQALAAAKgRQAKgSAAgeIAAgJQAAgbgKgTQgKgQgLAAQgMAAgJARg");
	this.shape_113.setTransform(359.7,440.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgVgyQgKASAAAfIAAADQAAAeAKATQAIARANAAQANAAAJgRQAKgTAAgeIAAgDQAAgfgKgSQgJgRgNAAQgNAAgIARg");
	this.shape_114.setTransform(340.3,443.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_115.setTransform(330.5,440.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#58595B").s().p("AgQBOIAAh6IgQAAIAAgQIAQAAIAAgvIAVAAIAAAvIAcAAIAAAQIgcAAIAAB1QAAAJAEAEQAEADAJAAQAGAAAFgBIAAARQgGADgKAAQghAAAAgeg");
	this.shape_116.setTransform(323,441.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#58595B").s().p("AgKBxIAAinIAVAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_117.setTransform(315.8,440.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#58595B").s().p("AgoBOIAAgUQAWAKAPAAQAIAAAIgGQAGgGAAgKIAAAAQAAgQgZgXQgTgOgIgNQgHgMAAgNIAAgBQAAgRANgMQAMgKASAAQARgBANAGIAAAUQgQgHgOAAQgJAAgGAFQgHAGAAAJIAAABQAAAHAGAJQAGAHAOAPQATAPAHAMQAJAMAAANIAAABQgBASgOANQgMALgSgBQgTAAgSgIg");
	this.shape_118.setTransform(307.6,443.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("AgKBxIAAjhIAVAAIAADhg");
	this.shape_119.setTransform(293.1,440.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIADAUQgUAKgSAAQgYAAgRgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_120.setTransform(283.6,443.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgKAAgIAKQgKAMABARIAABxIgXAAIAAimIAXAAIAAAXQANgaAWgBQATAAAKAOQALANAAAZIAAB2g");
	this.shape_121.setTransform(264.5,443.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAASgLIACAUQgUAKgSAAQgYAAgQgVgAgSg0QgJAQgBAeIA6AAQAAgbgIgRQgIgRgNAAQgLAAgIAPg");
	this.shape_122.setTransform(251.3,443.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#58595B").s().p("AgoBOIAAgUQAVAKAQAAQAJAAAHgGQAHgGAAgKIAAAAQAAgQgagXQgTgPgIgMQgIgMAAgNIAAgBQAAgRAOgMQAMgKASAAQARgBANAGIAAAUQgPgHgPAAQgJAAgGAFQgHAGAAAJIAAABQAAAIAGAIQAGAHAOAPQATAPAIAMQAIAMAAANIAAABQAAASgOANQgOALgRgBQgTAAgSgIg");
	this.shape_123.setTransform(233.8,443.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#58595B").s().p("AggBCQgSgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAWAAAOAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIACAUQgSAKgTAAQgYAAgRgVgAgSg0QgJAQgBAeIA5AAQAAgbgIgRQgIgRgMAAQgLAAgIAPg");
	this.shape_124.setTransform(222.3,443.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#58595B").s().p("AAcBVIAAhzQAAglgaAAQgMAAgIAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQAOgaAWgBQASAAAMAOQALANgBAZIAAB2g");
	this.shape_125.setTransform(209.2,443.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#58595B").s().p("AglBBQgQgYAAgnIAAgDQAAgnAQgYQAPgWAWAAQAXAAAPAWQAQAYAAAnIAAADQAAAngQAYQgPAWgXAAQgWAAgPgWgAgWgyQgJASAAAfIAAADQAAAeAJATQAKARAMAAQANAAAKgRQAIgTABgeIAAgDQgBgfgIgSQgKgRgNAAQgMAAgKARg");
	this.shape_126.setTransform(195.8,443.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#58595B").s().p("AgJBxIAAinIATAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_127.setTransform(186,440.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAQgUAWAAQANgBAKAGIAAAVQgKgHgMAAQgPAAgIAQQgLARAAAfIAAAFQAAAhALAQQAIAPAQAAQAKABALgJIAAAVQgLAGgNAAQgXABgPgVg");
	this.shape_128.setTransform(177.8,443.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58595B").s().p("AgWBCQgRgWAAgpIAAgEQAAgoASgYQAPgUAWAAQAOgBAKAGIAAAVQgLgHgMAAQgOAAgIAQQgMARAAAfIAAAFQAAAhAMAQQAIAPAQAAQAJABAMgJIAAAVQgMAGgMAAQgWABgQgVg");
	this.shape_129.setTransform(168,443.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#58595B").s().p("AgkBIQgMgPAAgWIAAgDQAAgZANgNQAMgOAWAAQAMgBAQAHIAAgTQAAghgggBQgRAAgQAIIAAgUQARgGAUgBQAWAAAOAOQAOANAAAZIAAB1IgWAAIAAgWQgNAagVAAQgSAAgLgPgAgTAFQgHAJAAAQIAAAEQgBAPAIAKQAGAKAMAAQALAAAJgLQAIgLAAgOIAAghQgOgDgMgBQgMAAgIAJg");
	this.shape_130.setTransform(156.1,443.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58595B").s().p("AgfBCQgTgXAAgoIAAgDQAAgoAQgYQAOgWAVAAQAXAAANAWQAOAXAAAnIAAALIhPAAQABAdAMAPQALAPAQAAQAPAAARgLIACAUQgTAKgTAAQgXAAgQgVgAgTg0QgJAQAAAeIA6AAQgBgbgHgRQgJgRgMAAQgLAAgJAPg");
	this.shape_131.setTransform(143.8,443.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#58595B").s().p("AgdBVIAAinIAWAAIAAAYQAKgcAbACIAAAXIAAAAQgSAAgKAKQgJALAAAUIAABpg");
	this.shape_132.setTransform(134.2,443.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#58595B").s().p("AAbBVIAAhzQAAglgaAAQgLAAgIAKQgJAMAAARIAABxIgVAAIAAimIAVAAIAAAXQANgaAWgBQAUAAALAOQAKANABAZIAAB2g");
	this.shape_133.setTransform(116.4,443.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#58595B").s().p("AgKBxIAAinIAUAAIAACngAgKhVIAAgbIAVAAIAAAbg");
	this.shape_134.setTransform(106.4,440.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#58595B").s().p("AgvBnIAAgWQAZANARAAQANAAAIgHQAJgIAAgOIAAgBQAAgMgHgKQgGgMgRgWQgZgcgIgNQgJgPAAgPIAAgBQAAgWAQgOQAOgOAUAAQAUAAASAJIAAAYQgUgNgQAAQgLAAgJAIQgIAIAAAMIAAABQAAALAGALQAGAKASAXQAXAYAJAPQAJAQAAATIAAAAQAAAXgQAOQgPAOgVAAQgTAAgYgMg");
	this.shape_135.setTransform(97.3,440.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#58595B").s().p("AgaBFQgKgEgHgFQgHgGgFgHQgEgIAAgLQAAgLAEgJQAFgIAHgDQAIgGALgDQALgDANAAQAMAAAJACQAKABAKADIAAgFQAAgSgLgKQgLgKgTAAQgKAAgLADIgUAHIgGgQQAIgEAQgFQALgDAOAAQAbAAAQAOQAPAOAAAbIAABTIgTAAIAAgUQgIAIgMAIQgMAHgQAAQgJAAgKgCgAgcAGQgKAIAAANQAAAGADAGIAHAJQAFACAHADQAIACAFAAQAIAAAIgDQAJgDAFgFQAGgEAEgHQAEgHAAgJIAAgNIgSgEQgOAAgJAAQgSAAgKAGg");
	this.shape_136.setTransform(1250.7,727.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#58595B").s().p("AgbBeQgMgGgJgIQgKgKgFgNQgFgMAAgSQAAgTAFgKQAFgNAKgJQAJgJAMgGQAMgEANAAQAGgBAJADQAIACAHAFQAGADAFAGIAJALIAAhTIAVAAIAADAIgVAAIAAgbQgDAFgGAHQgFAFgHAFQgFAEgJACQgHADgIAAQgNAAgMgFgAgSgVQgJAEgGAGQgHAIgDAHQgEAIAAAPQAAANAEAIQADAKAHAHQAHAHAJAEQAJAEAIAAQAIAAAKgEQAJgEAHgHQAHgHAEgKQAEgKAAgLQAAgMgEgLQgFgIgGgGQgIgIgIgDQgJgEgJABQgJgBgJAEg");
	this.shape_137.setTransform(1235,725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#58595B").s().p("AgaBFQgKgEgHgFQgHgGgFgHQgEgIAAgLQAAgLAEgJQAFgIAHgDQAIgGALgDQALgDANAAQAMAAAJACQAKABAKADIAAgFQAAgSgLgKQgLgKgTAAQgKAAgLADIgUAHIgGgQIAXgJQAMgDANAAQAcAAAQAOQAPAOAAAbIAABTIgTAAIAAgUQgIAIgMAIQgMAHgQAAQgJAAgKgCgAgcAGQgKAIAAANQAAAGADAGIAHAJQAFACAHADQAIACAFAAQAIAAAIgDQAJgDAFgFQAHgFADgGQAEgHAAgJIAAgNIgSgEQgOAAgJAAQgSAAgKAGg");
	this.shape_138.setTransform(1219.3,727.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#58595B").s().p("AglBGIAAiIIAVAAIAAAkQADgIAGgIQAGgHAFgFQAFgFALgDQAHgDALAAIAAAXIgBAAQgNAAgJAEQgJADgGAJQgHAHgFAMQgFALABAPIAAA3g");
	this.shape_139.setTransform(1208.9,727.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#58595B").s().p("AgVBCQgNgFgJgJQgJgJgGgOQgGgOAAgPQAAgOAFgNQAFgNAJgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAIAJAFAOQAEAMAAAPIAAAGIhsAAQACANAEAHQAEAJAHAGQAHAGAIADQAIADAHAAQAOAAALgGQAKgFAJgJIAMAMQgKALgNAIQgOAHgUAAQgLAAgNgGgAgPgyQgIAEgFAGQgGAGgEAJQgDAIgCALIBXAAQgBgLgDgHQgEgJgFgGQgFgGgIgEQgHgEgLAAQgIAAgHADg");
	this.shape_140.setTransform(1195.8,727.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#58595B").s().p("AgaBeQgNgGgIgIQgKgKgFgNQgGgMAAgSQAAgSAGgLQAFgNAKgJQAIgJANgGQAKgEAOAAQAHgBAJADQAIACAGAFQAHADAFAGIAJALIAAhTIAUAAIAADAIgUAAIAAgbQgEAFgGAHQgFAFgGAFQgHAEgIACQgGADgJAAQgNAAgLgFgAgRgVQgKAEgGAGQgFAGgFAJQgEAJAAAOQAAAMAEAJQAEAJAGAIQAHAHAJAEQAJAEAIAAQAJAAAJgEQAKgEAGgHQAHgHAFgKQAEgKAAgLQAAgMgEgLQgFgIgHgGQgHgIgJgDQgIgEgKABQgJgBgIAEg");
	this.shape_141.setTransform(1179.4,725);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#58595B").s().p("AgcBCQgMgFgKgLQgJgIgHgOQgFgNAAgPQAAgNAFgNQAIgPAIgIQAKgLAMgFQAOgGAOAAQAPAAAOAGQAMAFAKALQAKAKAFAMQAGAOAAANQAAANgGAOQgGAOgJAJQgKALgNAFQgOAGgOAAQgPAAgNgGgAgUgwQgIADgIAIQgGAHgEAKQgEAJABALQAAAKADAKQAEAKAHAHQAFAHALAFQAIAEALAAQAMAAAIgEQAIgEAIgIQAHgGAEgKQADgLAAgKQAAgJgDgKQgDgJgIgJQgGgGgKgFQgKgFgKAAQgLAAgJAFg");
	this.shape_142.setTransform(1163.3,727.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#58595B").s().p("ABUBGIAAhOQAAgUgKgMQgJgKgRAAQgJAAgGADQgIADgEAFQgFAFgDAIQgDAIAAALIAABNIgTAAIAAhPQAAgTgJgMQgKgKgQAAQgIAAgIADQgGADgGAGQgFAFgDAJQgDAHAAAKIAABNIgUAAIAAiIIAUAAIAAAXIAIgJIAJgJIAMgGQAJgCAHAAQARAAALAIQAKAHAEAMIAJgKQAEgFAGgEQAHgEAGgCQAKgCAHAAQAYAAAOAPQANAPAAAZIAABUg");
	this.shape_143.setTransform(1142.9,727.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#58595B").s().p("AgbBCQgMgFgLgLQgKgJgFgNQgGgOAAgOQAAgMAGgOQAFgOAKgJQALgLAMgFQANgGAOAAQAPAAANAGQANAFALALQAJAKAGAMQAEANAAAOQAAAPgFAMQgFAOgKAJQgKALgNAFQgNAGgPAAQgOAAgNgGgAgTgwQgKAEgGAHQgHAHgEAKQgDAJAAALQAAALADAJQAEAJAHAIQAGAHAKAFQAJAEAKAAQAMAAAJgEQAIgEAHgIQAIgGADgKQADgJABgMQAAgLgFgIQgDgKgHgIQgGgGgLgFQgIgFgLAAQgKAAgJAFg");
	this.shape_144.setTransform(1115.3,727.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58595B").s().p("AgWBCQgNgGgIgIQgKgLgFgMQgGgOAAgPQAAgMAFgPQAGgNAIgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAJAKADANQAFANAAAOIAAACIAAAEIhrAAQAAAKAEAKQAFAJAGAGQAHAGAIADQAJADAHAAQAPAAAKgGQALgFAIgJIAMAMQgJALgOAIQgPAHgTAAQgLAAgOgGgAgPgyQgJAEgFAGQgFAHgEAIQgEAJAAAKIBWAAQAAgIgEgKQgDgIgGgHQgFgHgIgDQgGgEgMAAQgIAAgHADg");
	this.shape_145.setTransform(1092.7,727.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#58595B").s().p("AgIBFIg8iJIAXAAIAtBwIAuhwIAWAAIg7CJg");
	this.shape_146.setTransform(1078.6,727.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#58595B").s().p("AgVBCQgNgFgJgJQgJgJgGgOQgGgOAAgPQAAgOAFgNQAFgNAJgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAIAJAFAOQAEAMAAAPIAAAGIhsAAQACANAEAHQAEAJAHAGQAHAGAIADQAIADAHAAQAOAAALgGQAKgFAJgJIAMAMQgKALgNAIQgOAHgUAAQgLAAgNgGgAgPgyQgIAEgFAGQgGAGgEAJQgDAIgCALIBXAAQgBgLgDgHQgEgJgFgGQgFgGgIgEQgHgEgLAAQgIAAgHADg");
	this.shape_147.setTransform(1064.4,727.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#58595B").s().p("AgJBhIAAjBIATAAIAADBg");
	this.shape_148.setTransform(1053.9,724.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#58595B").s().p("AgbBeQgMgGgJgIQgIgIgHgPQgFgOAAgQQAAgRAFgMQAHgOAIgIQAJgJAMgGQAMgEANAAQAGgBAJADQAIACAHAFQAGADAFAGIAKALIAAhTIAUAAIAADAIgUAAIAAgbIgKAMQgEAEgIAGQgFAEgJACQgHADgIAAQgNAAgMgFgAgSgVQgKAEgFAGQgHAHgDAIQgEAKAAANQAAALAEAKQADAKAHAHQAHAHAJAEQAJAEAIAAQAIAAAKgEQAJgEAHgHQAHgHAEgKQAEgKAAgLQAAgMgEgLQgFgIgGgGQgIgIgIgDQgJgEgJABQgJgBgJAEg");
	this.shape_149.setTransform(1034.9,725);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#58595B").s().p("AgaBFQgLgEgGgFQgHgGgFgHQgEgIAAgLQAAgLAEgJQAEgHAIgEQAIgGALgDQALgDANAAQAMAAAJACQAKABAJADIAAgFQAAgTgKgJQgLgKgTAAQgKAAgLADIgUAHIgGgQIAXgJQAMgDANAAQAcAAAQAOQAPAOAAAbIAABTIgUAAIAAgUQgGAIgNAIQgNAHgQAAQgIAAgKgCgAgcAGQgKAIAAANQAAAHADAFIAHAJQAEACAHADIAOACQAIAAAIgDQAJgDAFgFQAHgFADgGQAEgJAAgHIAAgNIgSgEQgNAAgKAAQgSAAgKAGg");
	this.shape_150.setTransform(1019.2,727.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#58595B").s().p("AgaBeQgMgGgKgIQgJgLgFgMQgGgMAAgSQAAgSAGgLQAFgMAJgKQAKgJAMgGQAKgEAOAAQAHgBAJADQAIACAGAFQAHADAFAGIAJALIAAhTIAUAAIAADAIgUAAIAAgbIgKAMQgFAFgGAFQgHAEgIACQgGADgJAAQgNAAgLgFgAgRgVQgKAEgGAGQgHAHgDAIQgEAJAAAOQAAAMAEAJQADAIAHAJQAHAHAJAEQAJAEAIAAQAJAAAJgEQAKgEAGgHQAIgIADgJQAFgJAAgMQAAgMgFgLQgDgGgIgIQgHgIgJgDQgIgEgKABQgJgBgIAEg");
	this.shape_151.setTransform(1003.5,725);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#58595B").s().p("AgJBfIAAiIIATAAIAACIgAgKhHIAAgXIAVAAIAAAXg");
	this.shape_152.setTransform(992.4,725.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#58595B").s().p("AgZBCQgRgHgKgIIALgPQAMAJALAEQAMAFALAAQAMAAAIgGQAIgHAAgJIAAgBQAAgFgDgEIgHgGIgLgFIgcgJIgOgFQgHgFgEgGQgEgGAAgKIAAgBQAAgHADgJQAEgHAGgFQAGgFAJgDQAJgDAIAAQAMAAAOAEQAPAFAJAGIgKAQQgIgGgMgEQgKgEgKAAQgKAAgIAGQgHAGAAAIIAAABQAAAFADADQADAEAFADIAmAOQAJADAFACQAGAEAFAHQAEAHAAAJIAAABQAAAJgEAIQgEAIgHAFQgGAFgJADQgJADgLAAQgMAAgQgFg");
	this.shape_153.setTransform(983,727.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#58595B").s().p("AAnBGIAAhOQAAgUgKgLQgJgLgTAAQgHAAgHADQgHACgGAHQgGAGgDAHQgDAJAAAJIAABNIgVAAIAAiIIAVAAIAAAYQAHgMALgHQALgIAQAAQAMAAAKAEQALAFAGAHQAHAHADAKQAEAJAAANIAABUg");
	this.shape_154.setTransform(969.3,727.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#58595B").s().p("AgVBCQgNgFgJgJQgJgKgGgNQgGgOAAgPQAAgOAFgNQAGgNAIgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAIAJAFAOQAEAMAAAPIAAAGIhsAAQACANAEAHQAEAJAHAGQAHAGAIADQAIADAHAAQAOAAALgGQAKgFAJgJIAMAMQgKALgNAIQgOAHgTAAQgMAAgNgGgAgPgyQgIAEgFAGQgGAGgEAJQgDAIgCALIBXAAQgBgKgDgIQgEgKgEgFQgHgHgHgDQgGgEgMAAQgIAAgHADg");
	this.shape_155.setTransform(954,727.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#58595B").s().p("AAABZQgEgDgGgFQgFgEgDgHQgDgIAAgKIAAhSIgUAAIAAgSIAUAAIAAgpIAVAAIAAApIAqAAIAAASIgqAAIAABPQgBANAFAFQAHAFAJAAIALgBIAKgEIAAARQgGAEgGABQgFABgIAAQgJAAgHgBg");
	this.shape_156.setTransform(941.9,725.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#58595B").s().p("AAoBGIAAhOQAAgUgLgLQgJgLgTAAQgGAAgJADQgHADgGAGQgFAFgDAIQgEAKABAIIAABNIgVAAIAAiIIAVAAIAAAYQAHgMALgHQALgIAQAAQAMAAAKAEQALAFAGAHQAHAHADAKQAEAJAAANIAABUg");
	this.shape_157.setTransform(929.4,727.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#58595B").s().p("AgJBfIAAiIIATAAIAACIgAgKhHIAAgXIAVAAIAAAXg");
	this.shape_158.setTransform(918.4,725.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#58595B").s().p("AgVBCQgOgGgJgIQgJgLgFgMQgGgOAAgPQAAgMAFgPQAGgNAIgKQAIgJANgGQAMgGANAAQAPAAAMAGQALAFAJALQAJAKADANQAFANAAAOIAAACIAAAEIhrAAQAAAKAEAKQAFAJAGAGQAHAGAIADQAJADAHAAQAOAAALgGQALgFAIgJIAMAMQgJALgOAIQgPAHgSAAQgMAAgNgGgAgPgyQgJAEgFAGQgFAHgEAIQgEAJAAAKIBWAAQAAgIgEgKQgDgIgGgHQgFgHgIgDQgHgEgLAAQgHAAgIADg");
	this.shape_159.setTransform(900.9,727.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#58595B").s().p("AgbBeQgMgGgJgIQgIgIgHgPQgFgOAAgQQAAgRAFgMQAHgOAIgIQAJgJAMgGQAMgEANAAQAGgBAJADQAIACAHAFQAGADAFAGIAKALIAAhTIAUAAIAADAIgUAAIAAgbIgKAMQgEAEgIAGQgFAEgJACQgHADgIAAQgNAAgMgFgAgSgVQgKAEgFAGQgHAHgDAIQgEAKAAANQAAALAEAKQADAKAHAHQAHAHAJAEQAJAEAIAAQAIAAAKgEQAJgEAHgHQAHgHAEgKQAEgKAAgLQAAgMgEgLQgFgIgGgGQgIgIgIgDQgJgEgJABQgJgBgJAEg");
	this.shape_160.setTransform(884.5,725);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#58595B").s().p("AAnBGIAAhOQAAgUgKgLQgJgLgTAAQgHAAgIADQgHADgFAGQgHAFgCAIQgDAJAAAJIAABNIgVAAIAAiIIAVAAIAAAYQAHgMALgHQALgIAQAAQALAAALAEQALAFAGAHQAHAHADAKQAEAKAAAMIAABUg");
	this.shape_161.setTransform(861.8,727.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#58595B").s().p("AgcBCQgNgFgJgLQgJgJgGgNQgGgNABgPQgBgOAGgMQAGgOAJgJQAJgKANgGQAOgGAOAAQAPAAAOAGQAMAGAKAKQAKAKAFAMQAGAOAAANQAAANgGAOQgFAOgKAJQgLALgMAFQgOAGgOAAQgPAAgNgGgAgUgwQgIAEgHAHQgGAGgFALQgDALgBAJQABAKADAKQAEAKAHAHQAGAHAKAFQAJAEAKAAQAMAAAIgEQAKgEAGgIQAHgGAEgKQADgLAAgKQAAgJgDgKQgEgKgHgIQgGgGgKgFQgKgFgKAAQgLAAgJAFg");
	this.shape_162.setTransform(845.7,727.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#58595B").s().p("AglBGIAAiIIAVAAIAAAkQAEgKAFgGQAGgHAFgFQAHgFAIgDQAIgDALAAIAAAXIgCAAQgMAAgIAEQgKADgGAJQgHAHgFAMQgEALAAAPIAAA3g");
	this.shape_163.setTransform(833.9,727.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#58595B").s().p("AgbBFQgJgEgHgFQgHgEgFgJQgEgIAAgLQAAgKAEgKQAFgIAHgDQAHgGAMgDQALgDANAAQALAAAKACIATAEIAAgFQAAgTgLgJQgKgKgTAAQgKAAgLADIgUAHIgGgQIAXgJQAMgDANAAQAcAAAQAOQAPAOAAAbIAABTIgUAAIAAgUQgHAIgMAIQgNAHgQAAQgIAAgLgCgAgcAGQgKAIAAANQAAAHADAFQACAFAFAEQADACAIADQAIACAFAAQAIAAAIgDQAJgDAGgFQAHgGADgFQAEgIAAgIIAAgNIgSgEQgNAAgKAAQgSAAgKAGg");
	this.shape_164.setTransform(820.5,727.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#58595B").s().p("AAABZQgFgDgFgFQgFgFgDgGQgDgIAAgKIAAhSIgTAAIAAgSIATAAIAAgpIAVAAIAAApIApAAIAAASIgpAAIAABPQAAANAEAFQAHAFAKAAIAKgBIAKgEIAAARQgFAEgHABQgGABgHAAQgJAAgHgBg");
	this.shape_165.setTransform(808.6,725.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#58595B").s().p("AglBGIAAiIIAVAAIAAAkQAEgKAFgGQAFgGAFgGQAIgFAIgDQAIgDALAAIAAAXIgCAAQgMAAgJAEQgKAEgFAIQgHAHgGAMQgDALAAAPIAAA3g");
	this.shape_166.setTransform(799.6,727.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#58595B").s().p("AgcBCQgMgFgKgLQgKgJgFgNQgGgOAAgOQAAgMAGgOQAFgOAKgJQAKgLANgFQANgGAOAAQAQAAAMAGQANAFAKALQAKAKAFAMQAGAOAAANQAAANgGAOQgGAOgJAJQgKAKgNAGQgNAGgPAAQgOAAgOgGgAgTgwQgKAEgGAHQgHAHgEAKQgDAJAAALQAAALADAJQAFAKAGAHQAGAHAKAFQAJAEAKAAQAMAAAIgEQAJgEAHgIQAHgGAEgKQADgJAAgMQAAgKgDgJQgFgKgGgIQgGgGgLgFQgJgFgKAAQgKAAgJAFg");
	this.shape_167.setTransform(785.7,727.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#58595B").s().p("AhEBbIAAizIAUAAIAAAcIAKgLQAGgHAFgDQAGgEAJgDQAIgDAHABQANAAALAEQALAFALAKQAJAIAGAOQAFAOAAARQAAAQgFAMQgGAOgJAJQgKAJgLAEQgMAGgNAAQgJAAgGgDQgJgDgGgDIgMgJQgFgGgEgGIAABFgAgRhEQgHADgJAIQgIAIgDAIQgFALAAAMQAAAMAFAHQADAJAIAIQAIAHAIAEQAJAEAIAAQAIAAAKgEQAJgDAHgHQAHgHADgKQAEgIAAgMQAAgMgEgLQgDgJgHgHQgGgHgKgEQgIgEgKABQgJgBgIAEg");
	this.shape_168.setTransform(769.5,729.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#58595B").s().p("AgVBCQgOgGgJgIQgJgLgFgMQgGgOAAgPQAAgMAFgPQAGgNAIgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAJAKADANQAFANAAAOIAAACIAAAEIhrAAQAAAKAEAKQAFAJAGAGQAHAGAJADQAIADAHAAQAPAAAKgGQALgFAIgJIAMAMQgJALgOAIQgPAHgSAAQgMAAgNgGgAgPgyQgJAEgFAGQgFAHgEAIQgEAJAAAKIBWAAQAAgIgEgKQgDgIgFgHQgGgHgIgDQgGgEgMAAQgHAAgIADg");
	this.shape_169.setTransform(753.3,727.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#58595B").s().p("AglBGIAAiIIAVAAIAAAkQAEgKAFgGQAEgGAHgGQAFgFALgDQAHgDALAAIAAAXIgBAAQgNAAgJAEQgKAEgGAIQgHAHgEAMQgFALABAPIAAA3g");
	this.shape_170.setTransform(742.1,727.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#58595B").s().p("AgVBCQgNgFgJgJQgJgJgGgOQgGgOAAgPQAAgOAFgNQAFgNAJgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAIAJAFAOQAEAMAAAPIAAAGIhsAAQACANAEAHQAEAJAHAGQAHAGAIADQAIADAHAAQAOAAALgGQAKgFAJgJIAMAMQgKALgNAIQgOAHgUAAQgLAAgNgGgAgPgyQgIAEgFAGQgGAGgEAJQgDAIgCALIBXAAQgBgLgDgHQgEgJgFgGQgFgGgIgEQgHgEgLAAQgIAAgHADg");
	this.shape_171.setTransform(721.9,727.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#58595B").s().p("AgZBCQgRgHgKgIIALgPQALAJAMAEQAMAFALAAQAMAAAIgGQAIgGAAgKIAAgBQAAgFgDgEQgCgDgFgDIgLgFIgbgJQgKgCgFgDQgIgGgDgFQgEgGAAgKIAAgBQAAgJAEgHQACgGAHgGQAGgFAJgDQAJgDAIAAQAMAAAOAEQAPAFAJAGIgKAQQgHgGgNgEQgKgEgKAAQgLAAgHAGQgHAGAAAIIAAABQAAAFADADQADAEAFADIAmAOQAHACAIADQAGAFAEAGQAEAHAAAJIAAABQAAAJgEAIQgEAIgHAFQgFAFgKADQgJADgKAAQgMAAgRgFg");
	this.shape_172.setTransform(708,727.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#58595B").s().p("AgbBFQgJgEgHgFQgHgEgFgJQgEgIAAgLQAAgKAEgKQAFgIAHgDQAHgGAMgDQALgDANAAIAVACIATAEIAAgFQAAgTgLgJQgKgKgTAAQgKAAgLADIgUAHIgGgQIAXgJQAMgDANAAQAcAAAQAOQAPAOAAAbIAABTIgUAAIAAgUQgHAIgMAIQgNAHgQAAQgIAAgLgCgAgcAGQgKAIAAANQAAAHADAFQACAFAFAEQADACAIADQAIACAFAAQAIAAAIgDQAJgDAGgFQAHgGADgFQAEgIAAgIIAAgNIgSgEQgNAAgKAAQgSAAgKAGg");
	this.shape_173.setTransform(687.2,727.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#58595B").s().p("AgXBiIAAiIIAVAAIAACIgAgVg7IAXgmIAWAKIgdAcg");
	this.shape_174.setTransform(678.7,724.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#58595B").s().p("AglBGIAAiIIAUAAIAAAkQAFgKAFgGQAFgGAGgGQAGgFAKgDQAGgDAMAAIAAAXIgBAAQgNAAgJAEQgKAEgGAIQgHAHgEAMQgFALAAAPIAAA3g");
	this.shape_175.setTransform(670,727.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#58595B").s().p("AgcBCQgMgFgKgLQgJgJgHgNQgEgNAAgPQAAgNAEgNQAHgOAJgJQAKgLAMgFQAOgGAOAAQAPAAAOAGQAMAFAKALQAKAKAFAMQAGAOAAANQAAANgGAOQgGAOgJAJQgLALgMAFQgOAGgOAAQgPAAgNgGgAgUgwQgIADgIAIQgFAFgFAMQgDAMAAAIQAAAKADAKQAEAKAHAHQAGAHAKAFQAJAEAKAAQAMAAAIgEQAJgEAHgIQAHgGAEgKQADgLAAgKQAAgJgDgKQgEgKgHgIQgGgGgKgFQgKgFgKAAQgKAAgKAFg");
	this.shape_176.setTransform(656.2,727.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#58595B").s().p("AgwBZQgGgBgIgEIAHgRIAKAEIALABQAJAAAHgFQAHgHAGgOIg/iHIAXAAIAwBxIAshxIAWAAIg6CMQgJAWgIAJQgLAIgQAAQgIAAgHgBg");
	this.shape_177.setTransform(641.3,729.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#58595B").s().p("AgbBFQgJgEgHgFQgHgEgFgJQgEgIAAgLQAAgKAEgKQAFgIAHgDQAHgGAMgDQALgDANAAIAVACIAUAEIAAgFQgBgTgKgJQgKgKgUAAQgKAAgLADIgTAHIgHgQIAYgJQALgDAOAAQAcAAAPAOQAPAOAAAbIAABTIgTAAIAAgUQgIAIgMAIQgMAHgRAAQgHAAgMgCgAgcAGQgKAIAAANQAAAHADAFQADAFAEAEQAEACAHADQAIACAGAAQAIAAAIgDQAIgDAGgFQAGgFAEgGQADgHABgJIAAgNIgSgEQgNAAgKAAQgSAAgKAGg");
	this.shape_178.setTransform(626.7,727.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#58595B").s().p("ABTBGIAAhOQAAgVgJgLQgJgKgRAAQgJAAgGADQgIADgEAFQgFAFgDAIQgEAHAAAMIAABNIgSAAIAAhPQAAgTgJgMQgKgKgQAAQgJAAgHADQgGADgGAGQgGAHgCAHQgDAHAAAKIAABNIgUAAIAAiIIAUAAIAAAXQAEgGAEgDQACgEAHgFIAMgGQAJgCAHAAQARAAALAIQAKAHAEAMIAJgKQAEgFAGgEQAFgEAIgCQAKgCAHAAQAYAAANAPQAOAPAAAZIAABUg");
	this.shape_179.setTransform(607.7,727.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#58595B").s().p("AgbBFQgJgEgHgFQgIgGgEgHQgEgIAAgLQAAgKAEgKQAFgIAIgDQAGgGAMgDQALgDANAAIAVACIATAEIAAgFQABgTgLgJQgLgKgTAAQgKAAgLADQgKADgJAEIgHgQIAYgJQALgDAOAAQAcAAAPAOQAPAOAAAbIAABTIgUAAIAAgUQgHAIgMAIQgMAHgQAAQgKAAgKgCgAgcAGQgKAIAAANQAAAGACAGQAEAFAEAEQAEACAIADQAIACAEAAQAIAAAIgDQAKgDAFgFQAGgEAEgHQADgHAAgJIAAgNIgRgEQgNAAgKAAQgRAAgLAGg");
	this.shape_180.setTransform(580.6,727.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#58595B").s().p("AgJBhIAAjBIATAAIAADBg");
	this.shape_181.setTransform(570.6,724.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#58595B").s().p("AgWBCQgMgFgJgJQgKgKgFgNQgGgOAAgPQAAgOAFgNQAGgNAIgKQAIgJANgGQANgGAMAAQAPAAAMAGQALAFAJALQAIAJAEAOQAFANAAAOIAAACIAAAEIhsAAQACANADAHQAFAJAGAGQAHAGAIADQAJADAHAAQAOAAALgGQAKgFAJgJIAMAMQgJALgOAIQgPAHgSAAQgMAAgOgGgAgPgyQgIAEgGAGQgFAGgEAJQgEAIgBALIBWAAQAAgKgDgIQgDgIgGgHQgGgHgHgDQgGgEgMAAQgIAAgHADg");
	this.shape_182.setTransform(553.1,727.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#58595B").s().p("AgcBCQgJgDgIgIQgGgHgEgLQgEgLAAgLIAAhUIAVAAIAABOQAAAUAJALQALALASAAQAHAAAHgCQAIgDAGgGQAFgHAEgHQADgIAAgKIAAhNIAUAAIAACIIgUAAIAAgYQgIALgKAIQgMAIgQAAQgOAAgIgEg");
	this.shape_183.setTransform(537.7,727.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#58595B").s().p("AAxBbIAAhGIgKAMIgLAKQgHAEgIACQgGADgJAAQgNAAgMgFQgMgGgJgIQgJgKgGgNQgFgMAAgQQAAgRAFgOQAGgNAJgJQAJgJAMgGQAMgEANAAQAHgBAIADQAJACAGAFQAFACAGAHIAKALIAAgbIAUAAIAACzgAgRhEQgKAEgGAGQgHAHgDAKQgEAKAAANQAAALAEAIQADAKAHAHQAHAHAJAEQAJAEAIAAQAJAAAJgEQAIgEAIgHQAIgIADgJQAEgGAAgNQAAgOgEgJQgDgIgIgIQgJgIgHgDQgIgEgKABQgKgBgHAEg");
	this.shape_184.setTransform(521.2,729.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#58595B").s().p("AAnBGIAAhOQAAgUgJgLQgLgLgSAAQgHAAgHADQgIADgGAGQgFAFgEAIQgCAJAAAJIAABNIgVAAIAAiIIAVAAIAAAYQAGgMAMgHQALgIAQAAQALAAALAEQAKAEAHAIQAHAHADAKQAEAKAAAMIAABUg");
	this.shape_185.setTransform(505.6,727.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#58595B").s().p("AgcBCQgJgDgIgIQgGgIgEgKQgEgMAAgKIAAhUIAVAAIAABOQAAATAKAMQAKALASAAQAHAAAIgCQAGgDAHgGQAFgHADgHQAEgKAAgIIAAhNIAUAAIAACIIgUAAIAAgYQgIAMgLAHQgLAIgQAAQgOAAgIgEg");
	this.shape_186.setTransform(489.8,727.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#58595B").s().p("AgaBFQgLgEgGgFQgHgGgFgHQgEgIAAgLQAAgLAEgJQAEgHAIgEQAIgGALgDQALgDANAAQAMAAAJACQAKABAJADIAAgFQAAgTgKgJQgLgKgTAAQgKAAgLADIgUAHIgGgQIAXgJQAMgDANAAQAcAAAQAOQAPAOAAAbIAABTIgUAAIAAgUQgGAIgNAIQgNAHgQAAQgIAAgKgCgAgcAGQgKAIAAANQAAAHADAFIAHAJQAEACAHADIAOACQAHAAAJgDQAJgDAFgFQAHgFADgGQAEgJAAgHIAAgNIgSgEQgNAAgKAAQgSAAgKAGg");
	this.shape_187.setTransform(474.4,727.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#58595B").s().p("AgPAUQAKgDAEgGQADgFgBgHIgHAAIAAgcIAWAAIAAAYQAAAOgHAJQgHAIgOAEg");
	this.shape_188.setTransform(457.3,734.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#58595B").s().p("AAlBbQgIgEgFgGQgFgIgDgHQgDgJgBgKQABgJADgJQACgIAGgHQAGgHAHgEQAJgDAJAAQAJAAAIADQAIAEAGAHQAFAHADAIQADAIAAAKQAAAIgEAKQgDAKgFAGQgFAGgIAEQgJAEgJAAQgIAAgJgEgAAsARIgIAHQgCADgCAHQgCAGAAAHQAAAIACAFQABAFAEAGQADAEAFADQAFACAFAAQAFAAAFgCQAFgEACgDQADgEADgHQABgGAAgHQAAgHgBgGIgGgKIgIgHQgFgDgFAAQgFAAgFADgAhNBdICIi5IATAAIiIC5gAhHgCQgIgFgGgGQgGgHgCgIQgDgIAAgKQAAgKADgIQACgIAGgIQAHgGAHgEQAJgEAJAAQAIAAAJAEQAIAEAFAGQAFAHADAIQADAJABAJQgBAKgDAJQgDAJgFAGQgGAGgHAFQgIACgKAAQgKAAgHgCgAhAhNQgEACgDAFQgEAGgCAFQgBAGAAAGQAAAIABAGQADAHADADQAFAFADACQAEACAGAAQAGAAADgCQAEgCAFgFQACgDACgHQACgGAAgHQAAgIgCgFQgCgHgDgEQgDgFgFgCQgFgCgFAAQgFAAgFACg");
	this.shape_189.setTransform(444.2,725.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#58595B").s().p("AhABeIAAgQIBUhNQAHgFAFgIQAFgHACgGIACgOQAAgHgDgIQgEgHgEgEQgFgEgHgDQgIgDgHAAQgOAAgLAJQgLAHgMAQIgPgLQAFgIAIgJQAHgHAHgFQAJgFAJgDQALgCAJAAQAMAAALAEQAJADAKAIQAHAHAFAKQAEAKAAALQAAAKgDAJQgDAIgGAJQgFAGgJAJIhFBAIBhAAIAAATg");
	this.shape_190.setTransform(425.7,725.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#58595B").s().p("AgYBbQgMgFgJgJIgKgMQgFgHgDgIQgDgJgBgLQgCgLAAgPQAAgSAGgTQAEgSALgPQAKgOAOgHQAOgIARAAQAQAAAOAFQAOAHALAJIgLAQQgLgJgKgEQgKgFgNAAQgMAAgKAGQgKAHgHAKQgIAMgDAOQgDAOAAARIAIgIQAFgFAGgEQAHgEAJgDQAIgCAIAAQAMAAANAEQAMAEAIAIQAIAGAGAKQAFALAAANQAAANgFAMQgGALgIAIQgIAJgOAEQgLAFgPAAQgMAAgOgFgAgPAAQgJABgGAGQgGAGgDAHQgEAJAAAGQAAAIAEAJQAEAJAGAEQAGAGAIADQAJADAJAAQAKAAAIgDQAJgEAFgFQAHgGACgIQADgHABgKQgBgIgDgIQgDgHgGgFQgFgFgJgCQgIgDgLAAQgKAAgHAEg");
	this.shape_191.setTransform(410.2,725.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#58595B").s().p("AgJBhIAAjBIATAAIAADBg");
	this.shape_192.setTransform(391.8,724.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#58595B").s().p("AgVBCQgOgFgIgJQgKgKgFgNQgGgNAAgQQAAgNAFgOQAFgNAJgKQAIgJANgGQAMgGAMAAQAQAAAMAGQALAFAJALQAJAKADANQAFANAAAOIAAACIgBAEIhrAAQABAKAEAKQAFAJAGAGQAHAGAIADQAJADAHAAQAOAAAKgGQAMgFAHgJIANAMQgJALgPAIQgOAHgTAAQgMAAgMgGgAgPgyQgIAEgGAGQgGAHgDAIQgEAJgBAKIBXAAQgBgIgDgKQgDgIgGgHQgFgHgIgDQgHgEgLAAQgIAAgHADg");
	this.shape_193.setTransform(381.4,727.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#58595B").s().p("AgbBeQgMgGgJgIQgJgKgGgNQgFgOAAgQQAAgRAFgMQAGgNAJgJQAJgJAMgGQAMgEANAAQAGgBAJADQAJACAGAFQAFACAGAHIAKALIAAhTIAUAAIAADAIgUAAIAAgbIgKAMQgEAEgIAGQgFAEgJACQgHADgIAAQgNAAgMgFgAgSgVQgKAEgFAGQgHAHgDAIQgEAKAAANQAAALAEAKQADAKAHAHQAHAHAJAEQAJAEAIAAQAJAAAJgEQAJgEAHgHQAHgHAEgKQAEgIAAgNQAAgOgEgJQgEgIgHgGQgIgIgIgDQgIgEgKABQgJgBgJAEg");
	this.shape_194.setTransform(365,725);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#58595B").s().p("AgVBCQgNgFgJgJQgKgKgFgNQgGgOAAgPQAAgOAFgNQAEgLAKgMQAIgJANgGQANgGALAAQAQAAAMAGQALAFAJALQAIAJAFAOQAEAOAAANIAAAGIhsAAQACANAEAHQAEAJAHAGQAHAGAIADQAIADAHAAQAOAAALgGQAKgFAJgJIAMAMQgJAKgOAJQgOAHgUAAQgLAAgNgGgAgPgyQgIAEgFAGQgGAGgEAJQgDAIgCALIBXAAQgBgIgDgKQgEgJgFgGQgFgGgIgEQgHgEgLAAQgIAAgHADg");
	this.shape_195.setTransform(342.5,727.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#58595B").s().p("AgcBCQgJgDgIgIQgGgIgEgKQgEgJAAgNIAAhUIAVAAIAABOQAAAUAKALQAKALASAAQAHAAAHgCQAIgDAFgGQAFgFAEgJQADgIAAgKIAAhNIAVAAIAACIIgVAAIAAgYQgHALgLAIQgLAIgQAAQgOAAgIgEg");
	this.shape_196.setTransform(327.1,727.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#58595B").s().p("AgWBhIAAh2IgSAAIAAgRIASAAIAAgMQAAgWAMgMQAKgMASAAIANABIAKACIAAASIgKgCIgKgBQgWAAAAAdIAAALIAqAAIAAARIgpAAIAAB2g");
	this.shape_197.setTransform(315.5,724.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#58595B").s().p("AgbBFQgJgEgHgFQgHgGgFgHQgEgJAAgKQAAgMAEgIQAFgIAHgDQAHgGAMgDQALgDANAAIAVACQAKABAKADIAAgFQAAgTgMgJQgJgKgUAAQgKAAgLADQgLADgJAEIgGgQIAXgJQAMgDANAAQAbAAARAOQAPAOAAAbIAABTIgTAAIAAgUQgIAIgMAIQgNAHgQAAQgJAAgKgCgAgbAGQgLAIAAANQAAAGACAGQAEAFAFAEQADACAHADQAIACAGAAQAHAAAJgDQAIgDAGgFQAGgEAEgHQAEgHAAgJIAAgNIgSgEQgNAAgKAAQgSAAgJAGg");
	this.shape_198.setTransform(295.8,727.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#58595B").s().p("AgJBfIAAiIIATAAIAACIgAgKhHIAAgXIAVAAIAAAXg");
	this.shape_199.setTransform(285.8,725.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#58595B").s().p("AgTBCQgNgFgKgLQgJgKgGgMQgFgOAAgOQAAgMAFgOQAGgNAJgKQAKgLANgFQANgGANAAQALAAAHACQAGABAIAEQAIAEAFAEIAKAKIgOAOQgIgJgKgFQgKgHgNAAQgJAAgJAFQgKAEgFAHQgHAHgEAKQgEALAAAJQAAAKAEAKQADAKAIAHQAGAIAKAEQAIAEAKAAQANAAAKgGQAKgFAJgKIANANQgJAKgPAJQgNAIgTAAQgNAAgNgGg");
	this.shape_200.setTransform(275.8,727.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#58595B").s().p("AAnBGIAAhOQAAgUgKgLQgJgLgTAAQgHAAgHADQgHACgHAHQgGAGgCAHQgDAJAAAJIAABNIgVAAIAAiIIAVAAIAAAYQAHgMALgHQALgIAQAAQAMAAAKAEQALAFAGAHQAHAHADAKQAEAJAAANIAABUg");
	this.shape_201.setTransform(260.8,727.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#58595B").s().p("AgVBCQgOgFgIgJQgKgKgFgNQgGgNAAgQQAAgOAFgNQAFgNAJgKQAIgJANgGQAMgGAMAAQAQAAAMAGQALAFAJALQAJAKADANQAFANAAAOIAAAGIhsAAQABALAFAJQADAIAIAHQAGAGAIADQAJADAHAAQAOAAALgGQALgGAHgIIANAMQgJALgPAIQgNAHgUAAQgMAAgMgGgAgPgyQgJAEgEAGQgHAHgDAIQgEALgBAIIBXAAQgBgIgDgKQgDgIgGgHQgFgGgIgEQgHgEgLAAQgIAAgHADg");
	this.shape_202.setTransform(245.5,727.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#58595B").s().p("AgbBeQgMgGgJgIQgJgKgGgNQgFgOAAgQQAAgRAFgMQAGgNAJgJQAJgJAMgGQAMgEANAAQAHgBAIADQAJACAGAFQAHADAEAGIAKALIAAhTIAUAAIAADAIgUAAIAAgbIgKAMIgLAKQgHAEgIACQgGADgJAAQgNAAgMgFgAgRgVQgKAEgGAGQgHAHgDAIQgEAKAAANQAAALAEAKQADAKAHAHQAHAHAJAEQAJAEAIAAQAJAAAJgEQAIgEAIgHQAIgIADgJQAFgJAAgMQAAgMgFgLQgDgGgIgIQgJgIgHgDQgIgEgKABQgKgBgHAEg");
	this.shape_203.setTransform(229.2,725);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#58595B").s().p("AgJBfIAAiIIATAAIAACIgAgKhHIAAgXIAVAAIAAAXg");
	this.shape_204.setTransform(218.1,725.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#58595B").s().p("AgUBCQgMgFgKgLQgJgJgGgNQgFgNAAgPQAAgNAFgNQAGgOAJgJQAKgLAMgFQANgGANAAQALAAAHACQAIACAHADIAMAIIALAKIgOAOQgJgJgJgFQgKgHgOAAQgIAAgJAFQgJAEgHAHQgGAHgFAKQgDAJAAALQAAAMAEAIQADAKAIAHQAHAIAIAEQAJAEAKAAQAMAAALgGQALgGAIgJIANANQgIAKgQAJQgNAIgUAAQgNAAgNgGg");
	this.shape_205.setTransform(208.1,727.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#58595B").s().p("AAnBGIAAhOQAAgUgKgLQgJgLgTAAQgHAAgIADQgHADgFAGQgHAFgCAIQgDAJAAAJIAABNIgVAAIAAiIIAVAAIAAAYQAHgMALgHQALgIAQAAQAMAAAKAEQALAFAGAHQAHAHADAKQAEALAAALIAABUg");
	this.shape_206.setTransform(193.1,727.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#58595B").s().p("AgJBfIAAiIIATAAIAACIgAgKhHIAAgXIAVAAIAAAXg");
	this.shape_207.setTransform(182.1,725.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#58595B").s().p("AgaBFQgKgEgHgFQgHgGgFgHQgEgIAAgLQAAgLAEgJQAFgIAHgDQAIgGALgDQALgDANAAQAMAAAJACQAKABAKADIAAgFQAAgSgLgKQgLgKgTAAQgKAAgLADIgUAHIgGgQIAYgJQALgDANAAQAcAAAQAOQAPAOAAAbIAABTIgTAAIAAgUQgIAIgMAIQgMAHgQAAQgJAAgKgCgAgcAGQgKAIAAANQAAAGADAGIAHAJQAFACAHADQAIACAFAAQAIAAAIgDQAJgDAFgFQAGgEAEgHQAEgHAAgJIAAgNIgSgEQgOAAgJAAQgSAAgKAGg");
	this.shape_208.setTransform(164.2,727.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#58595B").s().p("Ag+BdIAAi5IAWAAIAACmIBmAAIAAATg");
	this.shape_209.setTransform(150.3,725.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F89F5E").s().p("AgkAKIAAgTIBJAAIAAATg");
	this.shape_210.setTransform(127.8,726.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#54B5E6").s().p("AgfBJQgKgFgLgIIAKgOQAJAJAKAEQAJAEAKAAQAGAAAKgFQAKgGAFgIQAGgJADgMQADgNAAgMQgGAIgLAHQgLAIgNgBQgLABgLgEQgJgDgIgHQgGgFgEgIQgFgKAAgKQAAgKAFgJQAEgKAHgIQAGgFALgFQALgFALAAQALAAALAFQAJAEAIAHIAIAKIAFANIAFAQIAAAVQAAAQgEAPQgEAPgJALQgJAMgLAFQgLAHgNAAQgOgBgMgFgAgQg7QgIADgEAEQgFAHgCAFQgDAFAAAJQAAAIADAGQADAFAEAFQAGADAHACQAHACAIABQAHAAAGgEQAIgCAFgDQAFgFACgHQADgEAAgIQAAgJgDgFQgDgHgFgEQgFgEgIgEQgHgCgGAAQgJAAgGADg");
	this.shape_211.setTransform(918.6,653);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#54B5E6").s().p("AgMARQAJgDADgFQACgEgBgFIgGAAIAAgXIASAAIAAATQAAAMgGAHQgGAGgKADg");
	this.shape_212.setTransform(908.5,660.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#54B5E6").s().p("AgjBMIBDiHIhSAAIAAgQIBlAAIAAANIhDCKg");
	this.shape_213.setTransform(899.9,653);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#54B5E6").s().p("AgxBjQgMgEgKgIQgJgIgFgLQgGgLAAgQIAAAAQAAgRAGgMQAGgLALgHQAKgHAPgFQAOgDATAAQAPAAAKACIAWAGIAAgEQAAgRgLgKQgLgJgTAAQgQAAgNADQgLACgPAGIgPgsQAOgGAVgFQASgFAXAAQAvAAAVAXQAWAXAAApIAAByIg3AAIAAgWQgLAMgOAHQgOAHgUAAQgNAAgOgEgAgZASQgLAHAAANIAAABQAAALAJAHQAJAGANAAQASAAANgJQAMgKAAgQIAAgKIgRgFQgIgCgMAAQgQAAgKAHg");
	this.shape_214.setTransform(881.6,662.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#54B5E6").s().p("ABfBlIAAhtQABgVgJgJQgJgKgPAAQgRAAgJAKQgJAKAAAUIAABtIg3AAIAAhtQAAgUgIgKQgKgKgPAAQgQAAgKAKQgJAKABAUIAABtIg5AAIAAjGIA5AAIAAAdQADgGAHgHIANgKQAFgDALgEQAJgDALABQATgBAOAJQANAHAIAQQAMgPARgIQAQgJAVABQAgAAASASQASATAAAkIAACAg");
	this.shape_215.setTransform(853.4,662.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgOgOgIgTQgIgSAAgYIAAAAQAAgTAHgUQAHgSAOgPQAOgPARgIQASgIAUAAQAZAAATAJQATAKALAOQAMAPAGAUQAGASAAAVIgBAPIiJAAQADATAOAKQANAKARAAQAPAAAKgFQAKgEANgLIAhAcQgOASgVAKQgTAKgcAAQgUAAgUgIgAgbguQgKAMgEATIBUAAQgDgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_216.setTransform(824,662.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#54B5E6").s().p("AgEB8QgLgCgHgIQgIgHgEgLQgFgLAAgSIAAhdIgYAAIAAgxIAYAAIAAgzIA3AAIAAAzIAwAAIAAAxIgwAAIAABTQAAAUASAAQAQAAANgHIAAAuQgIAEgNAEQgKADgOAAQgNAAgJgDg");
	this.shape_217.setTransform(805.1,660.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgdhVIAAgyIA7AAIAAAyg");
	this.shape_218.setTransform(792,659);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAGgUAQgNQAPgNAZACIAAA7IgDAAQgdAAgPARQgPASAAAiIAABKg");
	this.shape_219.setTransform(779.3,662.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#54B5E6").s().p("AgiBgQgUgHgNgOQgOgOgIgTQgIgSAAgYIAAAAQAAgUAIgTQAGgSANgPQAOgOASgJQARgIAVAAQAZAAATAJQASAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAFAUAMAJQANAKASAAQAOAAALgFQAKgEANgLIAhAcQgPASgUAKQgTAKgcAAQgUAAgUgIgAgbguQgLANgDASIBUAAQgDgTgLgLQgLgMgSAAQgQAAgLALg");
	this.shape_220.setTransform(759.2,662.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#54B5E6").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_221.setTransform(730.9,659);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgPgHgSQgIgSAAgYIAAAAQAAgTAHgUQAHgSAOgPQANgOASgJQASgIAUAAQAaAAASAJQATAKALAOQAMAPAGAUQAGASAAAVIgBAPIiJAAQADATAOAKQANAKARAAQAPAAAKgFQAKgEANgLIAhAcQgOASgVAKQgTAKgcAAQgUAAgUgIgAgbguQgKAMgEATIBUAAQgDgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_222.setTransform(713.7,662.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#54B5E6").s().p("AglBgQgXgIgUgPIAYgmQARAMAQAGQARAGAMAAQAMAAAGgEQAGgDAAgIIAAAAQAAgEgEgEIgJgGIgbgKIgVgHQgMgFgHgGQgJgFgFgKQgGgKAAgPIAAgBQAAgPAGgMQAFgLALgJQAJgHAOgFQAOgEANAAQATAAATAGQAUAGAQALIgVAnQgPgIgPgFQgNgFgMAAQgJAAgEAEQgGAEAAAFIAAABQAAADAEAFIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAKAAAOIAAAAQAAARgGAMQgGANgKAHQgLAJgOADQgPAEgPAAQgTAAgWgHg");
	this.shape_223.setTransform(681.4,662.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgOgHgTQgIgSAAgYIAAAAQAAgUAIgTQAGgSAOgPQANgOASgJQASgIAUAAQAZAAATAJQASAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAEATAOAKQANAKAQAAQAQAAAKgFQAKgEANgLIAgAcQgOASgTAKQgUAKgcAAQgUAAgUgIgAgbguQgLANgDASIBTAAQgDgTgKgLQgLgMgSAAQgPAAgMALg");
	this.shape_224.setTransform(660.8,662.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#54B5E6").s().p("AglBgQgXgIgUgPIAZgmQAPAMARAGQARAGAMAAQANAAAFgEQAGgDAAgIIAAAAQAAgFgEgDQgDgDgGgDIgbgKIgVgHQgMgFgHgGQgJgFgFgKQgGgKAAgPIAAgBQAAgPAGgMQAFgLALgJQAJgHAOgFQAOgEANAAQATAAATAGQAUAGAQALIgVAnQgQgIgNgFQgOgFgLAAQgKAAgEAEQgFADAAAGIAAABQAAAEADAEIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAJAAAPIAAAAQAAASgGALQgGANgKAHQgLAJgOADQgOAEgQAAQgTAAgWgHg");
	this.shape_225.setTransform(628.4,662.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#54B5E6").s().p("AgqBgQgVgJgNgNQgPgPgIgSQgIgSAAgXIAAAAQAAgUAIgTQAIgSAPgPQAPgPAUgIQASgIAXAAQAXAAAUAIQAVAJANANQAPAPAIASQAIASAAAWIAAAAQAAAWgIASQgIASgPAPQgPAPgUAIQgSAIgYAAQgXAAgTgIgAgVgyQgJAFgHAHQgHAIgDAKQgEALAAAJIAAAAQAAAKAEALQAEAKAGAHQAIAIAJAEQAKAFAKAAQAMAAAKgEQAKgFAGgHQAHgIAEgKQADgLAAgKIAAAAQAAgJgEgLQgEgKgGgHQgIgIgJgEQgKgFgLAAQgKAAgLAEg");
	this.shape_226.setTransform(606.9,662.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#54B5E6").s().p("AgiBgQgUgIgNgNQgPgOgHgTQgIgSAAgYIAAAAQAAgUAHgTQAIgUANgNQANgOASgJQASgIAUAAQAaAAARAJQATAJAMAPQANAPAFAUQAGAUAAATIAAAIIgBAHIiJAAQAEAUAMAJQAOAKAQAAQAQAAAKgFQAKgEANgLIAhAcQgOASgVAKQgTAKgcAAQgVAAgTgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgKgMgTAAQgQAAgLALg");
	this.shape_227.setTransform(583,662.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#54B5E6").s().p("AAiBlIAAhtQAAgUgJgKQgJgKgQAAQgOAAgKAKQgKAKAAAUIAABtIg4AAIAAjGIA4AAIAAAdIALgNQAFgEAIgGIAOgHQAJgDAKABQAhAAARATQASAVAAAiIAAB/g");
	this.shape_228.setTransform(560,662.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#54B5E6").s().p("AgxCOQgMgEgKgIQgIgIgHgLQgFgLAAgQIAAAAQAAgRAGgMQAGgLALgJQAKgHAPgFQAOgDATAAQAPAAAKACQAMACAKAEIAAgEQAAgSgLgHQgLgJgTAAQgQAAgNADQgKACgRAFIgOgrQAOgGAVgFQASgFAXAAQAvAAAVAXQAWAYAAAmIAAB0Ig3AAIAAgWQgMAMgOAHQgNAHgUAAQgNAAgOgEgAgZA9QgLAHAAANIAAABQAAAMAJAGQAIAGAOAAQATAAALgJQANgKAAgQIAAgKQgGgDgLgCQgIgCgMAAQgQAAgKAHgAgThPIAohCIAxAVIgwAtg");
	this.shape_229.setTransform(536.7,658.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#54B5E6").s().p("AgEB8QgKgCgJgIQgHgHgFgLQgDgNAAgQIAAhdIgZAAIAAgxIAZAAIAAgzIA2AAIAAAzIAvAAIAAAxIgvAAIAABTQAAAUASAAQAPAAANgHIAAAuQgGAEgNAEQgLADgOAAQgNAAgJgDg");
	this.shape_230.setTransform(518.1,660.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#54B5E6").s().p("AhJBSQgRgUAAgjIAAiAIA5AAIAABuQAAAVAJAJQAJALAPAAQAQAAAJgLQAKgKAAgUIAAhuIA4AAIAADHIg4AAIAAgdIgLAMQgFAGgIAFQgGAEgIADQgJADgKAAQghAAgSgUg");
	this.shape_231.setTransform(498.8,662.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#54B5E6").s().p("AgdBgQgTgIgOgPQgPgOgHgTQgIgSAAgWIAAAAQAAgVAIgSQAHgSAPgPQAOgOATgJQATgIAVAAQAdAAATAJQATAJAOAQIgjAlQgJgJgLgHQgLgGgPAAQgKAAgIAEQgJAFgGAHQgHAIgDAKQgEAKAAAKIAAAAQAAAKAEALQADAKAHAIQAHAHAJAFQAJAEAKAAQAOAAALgGQALgGAKgJIAiAhQgQARgSAKQgTAKgdAAQgVAAgTgIg");
	this.shape_232.setTransform(476.8,662.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#54B5E6").s().p("AgWCBQgOgJgLgMIAAAaIg5AAIAAkPIA5AAIAABlQALgPAOgIQAPgJAUAAQASAAAQAGQAQAHAOANQAMAOAIATQAIARAAAaIAAABQAAAZgIATQgIAUgMAMQgNAOgQAGQgRAHgSAAQgUAAgPgJgAgSgRQgKAFgFAHQgHAFgEAKQgEAKAAAOIAAABQAAAMAEAKQAEAKAHAIQAGAHAJAEQAJAEAJAAQAIAAAKgEQAHgDAIgIQAHgIAEgKQAEgKAAgMIAAgBQAAgMgEgMQgEgKgHgFQgGgHgJgFQgJgDgJAAQgKAAgIADg");
	this.shape_233.setTransform(453.7,659.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#54B5E6").s().p("AhJBSQgSgUAAgjIAAiAIA6AAIAABuQAAAVAJAJQAIALAQAAQAPAAAKgLQAKgJgBgVIAAhuIA6AAIAADHIg6AAIAAgdIgKAMQgGAGgHAFQgIAFgGACQgJADgKAAQggAAgTgUg");
	this.shape_234.setTransform(428.9,662.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#54B5E6").s().p("AgmBgQgWgIgUgPIAYgmQAQAMARAGQAQAGAMAAQANAAAGgEQAFgEABgHIAAAAQAAgEgEgEIgJgGIgbgKIgVgHQgMgFgHgGQgIgFgHgKQgFgKAAgPIAAgBQAAgPAGgMQAGgMAKgIQAKgIANgEQAPgEAMAAQATAAAUAGQATAGARALIgWAnQgQgIgOgFQgNgFgLAAQgKAAgEAEQgGADAAAGIAAABQABAEADAEQADADAGADIAvASQALAFAJAHQAIAEAHAKQAFAKAAAOIAAAAQAAARgGAMQgGANgKAHQgKAIgPAEQgOAEgQAAQgTAAgXgHg");
	this.shape_235.setTransform(407.7,662.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#54B5E6").s().p("AglBgQgXgIgUgPIAZgmQARANAPAFQARAGAMAAQANAAAFgEQAFgDAAgIIAAAAQAAgFgDgDQgDgDgGgDIgbgKIgVgHQgLgFgJgGQgJgGgEgJQgGgKAAgPIAAgBQAAgPAGgMQAGgMAKgIQAKgIANgEQAOgEAMAAQAUAAATAGQAUAGARALIgXAnQgPgIgNgFQgOgFgMAAQgJAAgFAEQgEADAAAGIAAABQAAAEADAEQADADAGADIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAKAAAOIAAAAQAAARgGAMQgGANgKAHQgLAJgOADQgPAEgPAAQgTAAgWgHg");
	this.shape_236.setTransform(377.7,662.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#54B5E6").s().p("AgiBgQgSgHgPgOQgNgNgJgUQgIgUAAgWIAAAAQAAgUAIgTQAHgUANgNQAMgOATgJQARgIAWAAQAYAAATAJQASAJAMAPQANAPAFAUQAGAUAAATIAAAIIgBAHIiKAAQAFAUANAJQAOAKAPAAQAQAAAKgFQALgEANgLIAgAcQgOASgUAKQgUAKgcAAQgUAAgUgIgAgaguQgMANgDASIBTAAQgCgTgLgLQgKgMgSAAQgRAAgKALg");
	this.shape_237.setTransform(357,662.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#54B5E6").s().p("AAiBlIAAhtQAAgUgJgKQgJgKgQAAQgOAAgKAKQgKAKAAAUIAABtIg4AAIAAjGIA4AAIAAAdIALgNQAFgFAIgFQAGgDAIgEQAJgDAKABQAhAAASATQARAVAAAiIAAB/g");
	this.shape_238.setTransform(334,662.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#54B5E6").s().p("AgqBgQgVgJgNgNQgOgOgIgTQgJgUAAgVIAAAAQAAgTAJgUQAIgTAOgOQAPgOATgJQAUgIAWAAQAYAAATAIQAUAIAOAOQAPAPAIASQAIASAAAWIAAAAQAAAWgIASQgIATgPAOQgOAPgUAIQgTAIgYAAQgXAAgTgIgAgVgyQgJAFgHAHQgHAIgDAKQgDAJgBALIAAAAQABAMADAJQAEAKAHAHQAHAIAJAEQAKAFAKAAQALAAALgEQAJgEAHgIQAHgIADgKQAEgJAAgMIAAAAQAAgLgEgJQgDgJgIgIQgHgIgKgEQgJgFgLAAQgKAAgLAEg");
	this.shape_239.setTransform(309.9,662.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAGgUAPgNQAQgNAZACIAAA7IgDAAQgdAAgQARQgOASAAAiIAABKg");
	this.shape_240.setTransform(291,662.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgOgHgTQgIgSAAgYIAAAAQAAgUAHgTQAHgSAOgPQANgOASgJQARgIAVAAQAaAAARAJQATAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiJAAQAEAUANAJQANAKAQAAQAPAAALgFQAKgEANgLIAgAcQgNASgVAKQgTAKgcAAQgVAAgTgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_241.setTransform(270.9,662.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#54B5E6").s().p("AgmCJIAAiVIgXAAIAAgvIAXAAIAAgNQAAghAQgQQAQgPAcAAIAXABIASAEIAAAvIgNgDIgNgBQgVAAAAAVIAAAIIAuAAIAAAvIgtAAIAACVg");
	this.shape_242.setTransform(253,658.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAHgUAPgNQAPgNAZACIAAA7IgDAAQgcAAgRARQgOASAAAiIAABKg");
	this.shape_243.setTransform(238.4,662.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgOgNgIgUQgIgSAAgYIAAAAQAAgVAHgSQAIgUANgNQAMgOATgJQASgIAUAAQAZAAATAJQARAJANAPQAMAPAGAUQAGAVAAASIgBAPIiJAAQAEAUANAJQANAKARAAQAOAAALgFQAKgEANgLIAhAcQgOASgVAKQgTAKgcAAQgVAAgTgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_244.setTransform(218.3,662.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#54B5E6").s().p("AgEB8QgKgCgIgIQgIgHgEgLQgFgMAAgRIAAhdIgXAAIAAgxIAXAAIAAgzIA3AAIAAAzIAvAAIAAAxIgvAAIAABTQAAAUATAAQAOAAAOgHIAAAuQgIAEgMAEQgLADgOAAQgNAAgJgDg");
	this.shape_245.setTransform(199.4,660.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#54B5E6").s().p("AAiBlIAAhtQAAgUgJgKQgJgKgQAAQgOAAgKAKQgKAKAAAUIAABtIg4AAIAAjGIA4AAIAAAdIALgNQAFgEAIgGIAOgHQAJgDAKABQAhAAARATQASAVAAAiIAAB/g");
	this.shape_246.setTransform(180.4,662.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgchVIAAgyIA5AAIAAAyg");
	this.shape_247.setTransform(163,659);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#54B5E6").s().p("AglBgQgXgIgUgPIAZgmQARANAPAFQARAGAMAAQANAAAFgEQAGgDAAgIIAAAAQAAgFgEgDQgDgDgGgDIgbgKIgVgHQgLgEgIgHQgKgGgEgJQgGgKAAgPIAAgBQAAgPAGgMQAFgLALgJQAJgHAOgFQAOgEANAAQATAAATAGQAWAHAOAKIgVAnQgQgIgNgFQgOgFgLAAQgKAAgEAEQgFADAAAGIAAABQAAAEADAEIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAJAAAPIAAAAQAAASgGALQgGANgKAHQgLAJgOADQgOAEgQAAQgTAAgWgHg");
	this.shape_248.setTransform(136.4,662.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#54B5E6").s().p("AgqBgQgVgJgNgNQgOgOgIgTQgJgUAAgVIAAAAQAAgTAJgUQAIgTAOgOQAPgOAUgJQASgIAXAAQAYAAATAIQAVAJANANQAPAOAIATQAIASAAAWIAAAAQAAAWgIASQgIASgPAPQgPAPgUAIQgSAIgYAAQgXAAgTgIgAgVgyQgJAFgHAHQgGAIgFAKQgDALAAAJIAAAAQAAAKAEALQAEAKAHAHQAHAIAJAEQAKAFAKAAQALAAALgEQAJgFAHgHQAHgIADgKQAEgLAAgKIAAAAQAAgJgEgLQgEgKgGgHQgIgIgKgEQgJgFgLAAQgLAAgKAEg");
	this.shape_249.setTransform(114.9,662.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#54B5E6").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_250.setTransform(96.9,659);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgPgHgSQgIgSAAgYIAAAAQAAgUAHgTQAHgSANgPQAOgOASgJQASgIAUAAQAaAAARAJQATAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAEATANAKQANAKARAAQAPAAALgFQAKgEANgLIAgAdQgNAQgVALQgTAKgcAAQgUAAgUgIgAgbguQgLANgEASIBUAAQgCgTgLgLQgLgMgSAAQgQAAgLALg");
	this.shape_251.setTransform(1392.1,617.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAGgUAQgNQAPgNAZACIAAA7IgDAAQgdAAgQARQgOASAAAiIAABKg");
	this.shape_252.setTransform(1374.2,617.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#54B5E6").s().p("AgEB8QgKgCgIgHQgIgIgEgLQgEgMAAgRIAAhdIgZAAIAAgxIAZAAIAAgzIA2AAIAAAzIAvAAIAAAxIgvAAIAABTQAAAUATAAQAOAAAOgHIAAAuQgKAFgKADQgLADgOAAQgNAAgJgDg");
	this.shape_253.setTransform(1357.5,615.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#54B5E6").s().p("AAiBmIAAhuQAAgUgIgKQgKgKgQAAQgOAAgKAKQgJAKAAAUIAABuIg6AAIAAjHIA6AAIAAAdIAKgNQAFgFAIgFIAOgHQAJgDAKABQAhgBASAUQARAUABAjIAACAg");
	this.shape_254.setTransform(1338.5,617.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#54B5E6").s().p("AgiBgQgUgHgNgOQgPgOgHgTQgIgSAAgYIAAAAQAAgUAHgTQAHgSANgPQAOgOASgJQASgIAUAAQAaAAARAJQATAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiJAAQAEAUAMAJQANAKARAAQAQAAAKgFQAKgEANgLIAgAdQgNARgVAKQgTAKgcAAQgVAAgTgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_255.setTransform(1315.2,617.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#54B5E6").s().p("AglBgQgVgHgWgQIAZgmQARANAPAFQARAGAMAAQANAAAFgEQAGgDAAgIIAAAAQAAgFgEgDQgDgEgGgCIgbgKIgVgHQgLgEgIgHQgKgGgEgJQgGgKAAgPIAAAAQAAgQAGgMQAGgLAKgJQAJgIAOgEQANgEAOAAQATAAATAGQAUAGAQALIgVAnQgQgIgNgFQgOgFgLAAQgKAAgEAEQgFADAAAHIAAAAQAAAEADAEIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAJAAAPIAAAAQAAASgGALQgGANgKAHQgLAJgOADQgOAEgQAAQgTAAgWgHg");
	this.shape_256.setTransform(1282.9,617.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#54B5E6").s().p("AgiBgQgUgIgNgNQgOgOgIgTQgIgSAAgYIAAAAQAAgUAIgTQAHgUANgNQANgOASgJQARgIAVAAQAZAAATAJQASAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAFAUAMAJQANAKASAAQAOAAALgFQAKgEANgLIAhAdQgOARgUAKQgUAKgcAAQgUAAgUgIgAgbguQgLANgDASIBUAAQgDgTgLgLQgLgMgSAAQgQAAgLALg");
	this.shape_257.setTransform(1262.3,617.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#54B5E6").s().p("AgEB8QgKgCgIgHQgJgIgDgLQgFgMAAgRIAAhdIgXAAIAAgxIAXAAIAAgzIA4AAIAAAzIAuAAIAAAxIguAAIAABTQAAAUASAAQAOAAAOgHIAAAuQgJAFgLADQgLADgOAAQgMAAgKgDg");
	this.shape_258.setTransform(1243.4,615.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#54B5E6").s().p("AAiBmIAAhuQABgUgKgKQgIgKgRAAQgOAAgKAKQgKAKAAAUIAABuIg5AAIAAjHIA5AAIAAAdIALgNQAFgFAIgFIAOgHQAKgDAJABQAhgBARAUQATAUAAAjIAACAg");
	this.shape_259.setTransform(1224.3,617.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#54B5E6").s().p("AgiBgQgUgHgNgOQgOgOgIgTQgIgSAAgYIAAAAQAAgUAIgTQAGgSANgPQAOgOASgJQARgIAVAAQAaAAASAJQASAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAFAUAMAJQANAKASAAQAOAAALgFQAKgEANgLIAhAdQgPARgUAKQgTAKgcAAQgVAAgTgIgAgbguQgLANgDASIBUAAQgEgTgKgLQgLgMgSAAQgQAAgLALg");
	this.shape_260.setTransform(1201.1,617.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#54B5E6").s().p("AhIBSQgTgUAAgjIAAiAIA6AAIAABuQgBAVAKAJQAJALAPAAQAPAAAKgLQAKgJAAgVIAAhuIA4AAIAADHIg4AAIAAgdIgLANIgNAKQgIAFgGACQgJADgKAAQghAAgRgUg");
	this.shape_261.setTransform(1177.9,617.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#54B5E6").s().p("AgdBgQgUgIgNgPQgNgMgJgUQgIgUAAgVIAAAAQAAgUAIgTQAIgUAOgNQANgOAUgJQATgIAVAAQAdAAASAJQAUAJANAQIgjAlQgKgKgJgGQgKgGgQAAQgKAAgHAEQgJAFgHAHQgGAHgEALQgEAJABALIAAAAQgBAMAEAJQAEAKAGAIQAHAHAKAFQAHAEALAAQAOAAALgGQAMgGAJgJIAhAhQgOARgTAKQgTAKgeAAQgUAAgTgIg");
	this.shape_262.setTransform(1155.9,617.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgPgHgSQgIgSAAgYIAAAAQAAgTAHgUQAHgSAOgPQANgOASgJQASgIAUAAQAaAAASAJQATAKALAOQAMAPAGAUQAGASAAAVIgBAPIiJAAQAEATANAKQANAKARAAQAPAAAKgFQAKgEANgLIAhAdQgOARgVAKQgTAKgcAAQgUAAgUgIgAgbguQgKAMgEATIBUAAQgDgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_263.setTransform(1133.4,617.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAGgUAQgNQAPgNAZACIAAA7IgDAAQgcAAgRARQgOARAAAjIAABKg");
	this.shape_264.setTransform(1115.5,617.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#54B5E6").s().p("AgmCJIAAiVIgYAAIAAgvIAYAAIAAgNQAAghAQgQQAPgPAeAAQANAAAJABIARAEIAAAvIgMgDIgNgBQgVAAAAAVIAAAIIAuAAIAAAvIgtAAIAACVg");
	this.shape_265.setTransform(1100.1,613.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#54B5E6").s().p("AgmBgQgVgHgVgQIAYgmQAQAMARAGQAQAGAMAAQANAAAGgEQAGgDAAgIIAAAAQAAgEgEgEQgEgEgFgCQgEgCgJgDIgOgFIgVgHQgMgFgHgGQgJgFgFgKQgFgKgBgPIAAAAQAAgRAGgLQAHgNAJgHQAKgIANgEQANgEANAAQAUAAAUAGQATAGARALIgXAnQgNgHgQgGQgNgFgMAAQgJAAgEAEQgFAEgBAGIAAAAQABAEADAEQADADAGADIAbAKIAUAIQALAFAJAHQAIAEAHAKQAFAKAAAOIAAAAQAAARgGAMQgFAMgLAIQgKAIgPAEQgPAEgPAAQgTAAgXgHg");
	this.shape_266.setTransform(1071.8,617.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#54B5E6").s().p("AgxCOQgMgEgKgIQgJgIgFgLQgGgLAAgQIAAAAQAAgRAGgMQAGgLALgJQALgIAOgDQAOgEATAAQAPAAAKACIAWAGIAAgEQAAgRgLgIQgLgJgTAAQgQAAgNADQgLACgPAFIgPgrQASgHARgEQASgFAXAAQAvAAAVAXQAWAXAAAnIAAB0Ig3AAIAAgWQgLAMgOAHQgOAHgUAAQgNAAgOgEgAgZA9QgLAHAAANIAAABQAAALAJAHQAJAGANAAQASAAANgJQAMgKAAgQIAAgKIgRgFQgIgCgMAAQgPAAgLAHgAgThPIAohCIAxAVIgwAtg");
	this.shape_267.setTransform(1051.1,613.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#54B5E6").s().p("ABfBmIAAhuQAAgUgIgKQgIgKgRAAQgQAAgJAKQgJAKAAAUIAABuIg3AAIAAhuQAAgTgJgLQgIgKgQAAQgRAAgIAKQgKAKABAUIAABuIg6AAIAAjHIA6AAIAAAdQAEgGAGgHIANgKQAFgEALgDQAJgDAKABQAVgBANAJQAMAHAJAQQAMgPARgIQAQgJAVABQAgAAARASQATATgBAkIAACBg");
	this.shape_268.setTransform(1022.8,617.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#54B5E6").s().p("AAjBmIAAhuQgBgUgIgKQgJgKgRAAQgOAAgKAKQgJAKAAAUIAABuIg5AAIAAjHIA5AAIAAAdIAKgNQAFgFAIgFIAOgHQAJgDAKABQAhgBARAUQASAUAAAjIAACAg");
	this.shape_269.setTransform(982.2,617.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#54B5E6").s().p("AgqCKQgTgIgPgOQgPgOgIgTQgIgSAAgWIAAgBQAAgWAIgTQAIgQAPgPQAPgPAUgHQASgJAXABQAXgBAUAJQAVAIANANQAPAQAIAQQAIATAAAVIAAABQAAAUgIAUQgIATgPAPQgPAOgUAIQgSAIgYAAQgWAAgUgIgAgVgHQgJAEgHAFQgHAIgEAKQgDALAAAKIAAABQAAALAEAKQAEAKAGAIQAIAHAJAEQAKAFAKAAQAMAAAKgEQAKgFAGgHQAHgIAEgJQADgMAAgJIAAgBQAAgLgEgLQgEgKgGgHQgIgFgJgFQgKgFgLAAQgLAAgKAFgAgUhPIAohCIAxAVIgwAtg");
	this.shape_270.setTransform(958,613.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgchVIAAgyIA5AAIAAAyg");
	this.shape_271.setTransform(939.9,614.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#54B5E6").s().p("AgdBgQgUgIgNgPQgNgMgJgUQgHgUgBgVIAAAAQABgUAHgTQAJgUANgNQANgOAUgJQATgIAWAAQAcAAATAJQASAJAPAQIgjAlQgKgKgKgGQgKgGgQAAQgKAAgHAEQgJAFgHAHQgHAIgDAKQgEAJAAALIAAAAQAAAMAEAJQAEAKAHAIQAGAIAKAEQAHAEAMAAQANAAAMgGQALgGAJgJIAiAhQgPARgTAKQgSAKgeAAQgVAAgTgIg");
	this.shape_272.setTransform(923.8,617.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#54B5E6").s().p("AgdBgQgTgIgOgPQgNgMgJgUQgHgUAAgVIAAAAQAAgUAHgTQAJgUANgNQAOgOATgJQATgIAWAAQAcAAATAJQASAJAPAQIgjAlQgKgJgLgHQgJgGgQAAQgKAAgIAEQgIAFgHAHQgGAHgEALQgDAJgBALIAAAAQABAMADAJQAEAKAHAIQAGAIAKAEQAHAEAMAAQANAAALgGQALgGALgJIAhAhQgPARgSAKQgTAKgeAAQgVAAgTgIg");
	this.shape_273.setTransform(903,617.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgPgPgHgSQgIgSAAgYIAAAAQAAgUAHgTQAHgSAOgPQANgOASgJQARgIAVAAQAaAAARAJQAUAKALAOQAMAPAGAUQAGAUAAATIAAABIgBAOIiJAAQADATAOAKQANAKAQAAQAPAAALgFQAKgEANgLIAgAdQgNAQgVALQgTAKgdAAQgUAAgTgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_274.setTransform(880.6,617.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#54B5E6").s().p("AhBB/QgMgEgKgGIATgqIAMAGQAFACAHAAQAIAAAEgDQADgCAFgIIhPjHIA9AAIArCGIAsiGIA7AAIhNDLQgFAPgHALQgHAMgHAGQgGAGgJADQgKADgNAAQgRAAgLgDg");
	this.shape_275.setTransform(859,620.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#54B5E6").s().p("AAjBmIAAhuQgBgUgIgKQgJgKgRAAQgOAAgKAKQgJAKAAAUIAABuIg5AAIAAjHIA5AAIAAAdIAKgNQAFgFAIgFIAOgHQAJgDAKABQAhgBASAUQARAUABAjIAACAg");
	this.shape_276.setTransform(836.8,617.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgchVIAAgyIA5AAIAAAyg");
	this.shape_277.setTransform(819.4,614.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#54B5E6").s().p("AgxBjQgMgEgKgIQgJgIgFgLQgGgLAAgQIAAAAQAAgRAGgMQAGgLALgHQALgIAOgDQAOgEATAAQAPAAAKACIAWAGIAAgEQAAgRgLgKQgLgJgTAAQgQAAgNADQgLACgPAGIgPgsQASgHARgEQASgFAXAAQAvAAAVAXQAWAXAAApIAAByIg3AAIAAgWQgLAMgOAHQgOAHgUAAQgNAAgOgEgAgZASQgLAHAAANIAAABQAAALAJAHQAJAGANAAQASAAANgJQAMgKAAgQIAAgKIgRgFQgIgCgMAAQgPAAgLAHg");
	this.shape_278.setTransform(791,617.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#54B5E6").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_279.setTransform(774.8,614.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#54B5E6").s().p("AgiBgQgUgIgNgNQgOgOgIgTQgIgSAAgYIAAAAQAAgUAIgTQAGgSAOgPQANgOASgJQASgIAUAAQAZAAATAJQASAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiKAAQAFAUAMAJQANAKASAAQAPAAAKgFQALgEAMgLIAhAdQgOARgUAKQgUAKgcAAQgVAAgTgIgAgbguQgLANgDASIBUAAQgDgTgLgLQgKgMgTAAQgPAAgMALg");
	this.shape_280.setTransform(746.4,617.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#54B5E6").s().p("AgvCDQgQgGgNgOQgNgNgHgTQgIgTAAgZIAAgBQAAgZAIgSQAHgSANgPQAOgNAPgHQAQgGASAAQAWAAAOAJQAQAKAJALIAAhjIA5AAIAAEPIg5AAIAAgcQgLAOgOAJQgPAJgVAAQgRAAgRgHgAgRgRQgKAFgGAHQgGAGgEAJQgEALAAANIAAABQAAALAEALQAEAKAGAIQAIAIAIADQAJAEAIAAQAJAAAKgEQAHgDAIgIQAHgIAEgKQAEgLAAgLIAAgBQAAgMgEgLQgEgLgHgFQgGgHgJgFQgJgDgKAAQgJAAgIADg");
	this.shape_281.setTransform(721.9,614.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#54B5E6").s().p("AgqBgQgTgHgQgPQgNgOgJgTQgIgSAAgXIAAAAQAAgUAIgTQAJgTAOgOQAPgOAUgJQASgIAXAAQAYAAATAIQAVAJANANQAOAPAJASQAIAUAAAUIAAAAQAAAVgIATQgJATgOAOQgPAPgTAIQgUAIgXAAQgXAAgTgIgAgVgyQgJAEgHAIQgHAIgEAKQgDAJAAALIAAAAQAAAMADAJQAEAJAIAIQAHAIAJAEQAKAFAKAAQAMAAAJgEQAKgFAHgHQAHgIADgKQAEgJAAgMIAAAAQAAgKgEgKQgEgKgHgHQgGgIgLgEQgJgFgLAAQgKAAgLAEg");
	this.shape_282.setTransform(686.1,617.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgdhVIAAgyIA7AAIAAAyg");
	this.shape_283.setTransform(668,614.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#54B5E6").s().p("AgEB8QgKgCgIgHQgIgIgEgLQgFgMAAgRIAAhdIgXAAIAAgxIAXAAIAAgzIA3AAIAAAzIAvAAIAAAxIgvAAIAABTQAAAUATAAQAOAAAOgHIAAAuQgKAFgKADQgLADgOAAQgNAAgJgDg");
	this.shape_284.setTransform(654.3,615.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgchVIAAgyIA5AAIAAAyg");
	this.shape_285.setTransform(641.2,614.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#54B5E6").s().p("AglBgQgVgHgWgQIAYgmQARAMAQAGQAQAGANAAQAMAAAGgEQAGgDAAgIIAAAAQAAgEgEgEIgJgGQgEgCgJgDIgOgFIgVgHQgMgFgHgGQgJgFgFgKQgGgJAAgQIAAAAQAAgPAGgNQAGgMAKgIQAJgIAOgEQANgEAOAAQATAAATAGQAUAGAQALIgVAnQgPgIgPgFQgNgFgMAAQgJAAgEAEQgGAEAAAGIAAAAQAAADAEAFIAJAGIAaAKIAWAIQAKAFAJAHQAIAEAGAKQAGAKAAAOIAAAAQAAARgGAMQgGANgKAHQgLAJgOADQgPAEgPAAQgTAAgWgHg");
	this.shape_286.setTransform(625.8,617.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#54B5E6").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_287.setTransform(599.9,614.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#54B5E6").s().p("AgiBgQgSgHgPgOQgNgNgJgUQgIgUAAgWIAAAAQAAgUAIgTQAHgUANgNQAMgOATgJQARgIAWAAQAZAAASAJQASAJAMAPQANAQAFATQAGAUAAATIAAAPIiLAAQAFAUAMAJQAOAKARAAQAOAAALgFQALgEAMgLIAhAdQgOARgUAKQgUAKgcAAQgVAAgTgIgAgaguQgMANgDASIBUAAQgDgTgLgLQgLgMgRAAQgRAAgKALg");
	this.shape_288.setTransform(582.7,617.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#54B5E6").s().p("AAjBmIAAhuQgBgUgIgKQgJgKgRAAQgOAAgKAKQgKAKABAUIAABuIg5AAIAAjHIA5AAIAAAdIAKgNQAGgFAHgFIAOgHQAJgDAKABQAggBASAUQASAUAAAjIAACAg");
	this.shape_289.setTransform(548.5,617.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgOgOgIgTQgIgSAAgYIAAAAQAAgUAHgTQAHgSAOgPQANgOASgJQARgIAVAAQAaAAARAJQATAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiJAAQAEAUANAJQANAKAQAAQAPAAALgFQAKgEANgLIAgAdQgOARgTAKQgUAKgcAAQgUAAgUgIgAgbguQgLANgDASIBTAAQgDgTgKgLQgKgMgTAAQgPAAgMALg");
	this.shape_290.setTransform(525.2,617.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#54B5E6").s().p("AglBgQgVgHgWgQIAZgmQARANAPAFQARAGAMAAQANAAAFgEQAGgDAAgIIAAAAQAAgFgEgDQgDgEgGgCIgbgKIgVgHQgLgEgIgHQgKgGgEgJQgGgKAAgPIAAAAQAAgQAGgMQAGgLAKgJQAJgIAOgEQANgEAOAAQATAAATAGQAUAGAQALIgVAnQgQgIgNgFQgOgFgLAAQgKAAgEAEQgFADAAAHIAAAAQAAAEADAEIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAJAAAPIAAAAQAAASgGALQgGANgKAHQgLAJgOADQgOAEgQAAQgTAAgWgHg");
	this.shape_291.setTransform(492.9,617.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#54B5E6").s().p("AgiBgQgUgIgNgNQgPgOgHgTQgIgSAAgYIAAAAQAAgUAHgTQAIgUANgNQANgOASgJQASgIAUAAQAaAAARAJQATAJAMAPQAMAPAGAUQAGAUAAATIAAABIgBAOIiJAAQAEAUAMAJQAOAKAQAAQAQAAAKgFQAKgEANgLIAhAdQgOARgVAKQgTAKgcAAQgUAAgUgIgAgbguQgLANgDASIBTAAQgCgTgLgLQgLgMgSAAQgQAAgLALg");
	this.shape_292.setTransform(472.3,617.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#54B5E6").s().p("AAjBmIAAhuQgBgUgIgKQgKgKgQAAQgOAAgKAKQgJALAAATIAABuIg6AAIAAjHIA6AAIAAAdIALgNQAEgEAIgGIAOgHQAJgDAKABQAigBARAUQARAUABAjIAACAg");
	this.shape_293.setTransform(449.3,617.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#54B5E6").s().p("AgqBgQgTgIgPgOQgOgOgJgTQgIgUAAgVIAAAAQAAgTAIgUQAJgTAOgOQAPgOAUgJQATgIAWAAQAYAAATAIQAVAJANANQAPAOAIATQAIASAAAWIAAAAQAAAWgIASQgIATgPAOQgOAPgVAIQgSAIgYAAQgXAAgTgIgAgUgyQgKAFgHAHQgHAIgDAKQgEAKAAAKIAAAAQAAAKAEALQAEAKAHAHQAHAIAJAEQALAFAJAAQAMAAAKgEQAKgFAGgHQAHgIAEgKQADgJAAgMIAAAAQAAgJgEgLQgEgKgGgHQgIgIgJgEQgKgFgLAAQgLAAgJAEg");
	this.shape_294.setTransform(425.1,617.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#54B5E6").s().p("AgbCIIAAjGIA3AAIAADGgAgdhVIAAgyIA6AAIAAAyg");
	this.shape_295.setTransform(407.1,614.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#54B5E6").s().p("AgdBgQgUgJgNgOQgOgOgIgSQgIgTAAgWIAAAAQAAgVAIgSQAHgSAPgPQANgOAUgJQATgIAVAAQAdAAASAJQATAJAOAQIgiAlQgKgJgKgHQgLgGgPAAQgKAAgIAEQgIAFgHAHQgHAIgDAKQgEALAAAJIAAAAQAAAKAEALQAEAKAGAIQAHAHAJAFQAIAEALAAQANAAAMgGQALgGAKgJIAiAhQgQARgSAKQgTAKgdAAQgVAAgTgIg");
	this.shape_296.setTransform(390.9,617.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#54B5E6").s().p("AgdBgQgTgIgOgPQgOgOgIgSQgIgTAAgWIAAAAQAAgVAIgSQAHgSAPgPQAOgOATgJQATgIAVAAQAdAAATAJQATAJAOAQIgjAlQgLgKgJgGQgLgGgPAAQgKAAgIAEQgJAFgGAHQgHAIgDAKQgEAKAAAKIAAAAQAAALAEAKQADAKAHAIQAHAHAJAFQAJAEAKAAQAOAAALgGQALgGAKgJIAiAhQgQARgSAKQgTAKgdAAQgVAAgTgIg");
	this.shape_297.setTransform(370.1,617.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#54B5E6").s().p("AgxBjQgMgEgKgIQgJgIgFgLQgGgLAAgQIAAAAQAAgRAGgMQAGgLALgHQALgIAOgDQAOgEATAAQAPAAAKACIAWAGIAAgEQAAgSgLgJQgLgJgTAAQgQAAgNADQgLACgPAGIgPgsQASgHARgEQASgFAXAAQAvAAAVAXQAWAYAAAoIAAByIg3AAIAAgWQgMAMgOAHQgNAHgUAAQgNAAgOgEgAgZASQgLAHAAANIAAABQAAAMAJAGQAIAGAOAAQATAAALgJQANgKAAgQIAAgKQgGgDgLgCQgIgCgMAAQgPAAgLAHg");
	this.shape_298.setTransform(347.6,617.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#54B5E6").s().p("AghBgQgUgHgOgOQgNgNgJgUQgIgUAAgWIAAAAQAAgUAIgTQAHgUANgNQAMgOATgJQARgIAWAAQAZAAASAJQARAJAOAPQAMAQAFATQAGAUAAATIAAAPIiLAAQAFAUANAJQAOAKAPAAQAQAAAKgFQALgEANgLIAgAdQgOARgUAKQgUAKgcAAQgVAAgSgIgAgaguQgMANgDASIBTAAQgCgTgLgLQgKgMgSAAQgRAAgKALg");
	this.shape_299.setTransform(325.5,617.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#54B5E6").s().p("Ag7BmIAAjHIA5AAIAAApQAIgVAOgMQAPgNAZACIAAA7IgDAAQgdAAgQARQgOASAAAiIAABKg");
	this.shape_300.setTransform(307.6,617.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#54B5E6").s().p("AglBgQgVgHgWgQIAYgmQARAMAQAGQARAGAMAAQAMAAAGgEQAGgDAAgIIAAAAQAAgFgEgDQgDgDgGgDIgbgKIgVgHQgMgFgHgGQgJgFgFgKQgGgKAAgPIAAAAQAAgQAGgMQAGgLAKgJQAJgIAOgEQANgEAOAAQATAAATAGQAUAGAQALIgVAnQgOgHgPgGQgOgFgMAAQgJAAgEAEQgFADAAAHIAAAAQAAAEADAEIAJAGIAaAKIAWAIQAJAEAKAIQAJAFAFAJQAGAJAAAPIAAAAQAAARgGAMQgGANgKAHQgLAJgOADQgPAEgPAAQgTAAgWgHg");
	this.shape_301.setTransform(278.1,617.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#54B5E6").s().p("AgxBjQgMgEgJgIQgKgIgFgLQgGgMAAgPIAAAAQAAgRAGgMQAGgMALgGQALgIAOgDQAOgEATAAQAPAAAKACQAKACAMAEIAAgEQAAgSgLgJQgKgJgUAAQgQAAgNADQgJABgRAHIgOgsQASgHAQgEQASgFAXAAQAvAAAWAXQAVAXAAApIAAByIg3AAIAAgWQgMANgNAGQgNAHgVAAQgNAAgOgEgAgZASQgLAHAAANIAAABQAAALAJAHQAJAGANAAQATAAAMgJQAMgKAAgQIAAgKIgRgFQgIgCgLAAQgQAAgLAHg");
	this.shape_302.setTransform(257.4,617.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#54B5E6").s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_303.setTransform(241.2,614.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#54B5E6").s().p("AgiBgQgTgHgOgOQgOgNgIgUQgIgSAAgYIAAAAQAAgVAHgSQAIgUANgNQAMgOATgJQASgIAUAAQAZAAATAJQARAJANAPQAMAPAGAUQAGAVAAASIgBAPIiJAAQAEAUANAJQANAKARAAQAPAAAKgFQALgEAMgLIAhAdQgOARgVAKQgTAKgcAAQgVAAgTgIgAgbguQgKAMgEATIBTAAQgCgTgLgLQgLgMgSAAQgPAAgMALg");
	this.shape_304.setTransform(212.8,617.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#54B5E6").s().p("AgvCDQgRgHgMgNQgLgMgJgUQgIgTAAgZIAAgBQAAgZAIgSQAJgUALgNQANgMAQgIQAQgGATAAQAUAAAPAJQAQAKAJALIAAhjIA5AAIAAEPIg5AAIAAgcQgLAOgOAJQgPAJgUAAQgSAAgRgHgAgRgRQgJAFgGAHQgHAGgEAJQgEAKAAAOIAAABQAAAMAEAKQAEAKAHAIQAIAIAHADQAKAEAHAAQAKAAAJgEQAIgDAHgIQAHgIAEgKQAEgLAAgLIAAgBQAAgMgEgLQgEgLgHgFQgGgHgJgFQgIgDgLAAQgIAAgJADg");
	this.shape_305.setTransform(188.3,614.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#54B5E6").s().p("AgwBjQgNgEgJgIQgIgHgHgMQgGgMAAgPIAAAAQAAgRAGgMQAGgLALgHQALgIAPgDQAMgEAUAAQAPAAAKACIAWAGIAAgEQAAgSgLgJQgKgJgUAAQgQAAgNADQgJABgRAHIgOgsQASgHAQgEQASgFAYAAQAuAAAWAXQAVAXAAApIAAByIg3AAIAAgWQgMANgNAGQgNAHgVAAQgNAAgNgEgAgZASQgLAHAAANIAAABQAAAMAJAGQAJAGAOAAQASAAAMgJQAMgKAAgQIAAgKQgGgDgLgCQgIgCgLAAQgQAAgLAHg");
	this.shape_306.setTransform(153.3,617.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#54B5E6").s().p("AAjBmIAAhuQgBgUgIgKQgJgKgRAAQgOAAgKAKQgJAKAAAUIAABuIg5AAIAAjHIA5AAIAAAdIAKgNQAFgFAIgFIAOgHQAJgDAKABQAhgBARAUQASAUAAAjIAACAg");
	this.shape_307.setTransform(131.2,617.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#54B5E6").s().p("AhSBnQgfgdAAg6IAAiUIA6AAIAACSQAAAgAPARQAPAQAZAAQAbAAAOgPQAPgQAAgfIAAiVIA6AAIAACSQAAAdgIAXQgIAWgPAPQgPAPgWAHQgVAIgZAAQg0AAgegeg");
	this.shape_308.setTransform(105.3,614.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#67A289").s().p("Ehp/AA2IAAhrMDT/AAAIAABrg");
	this.shape_309.setTransform(769.8,548.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#67A289").s().p("Ehp+AAaIAAgzMDT8AAAIAAAzg");
	this.shape_310.setTransform(769.7,286.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#58595B").s().p("AgFAnIADghIgXASIgHgLIAbgNIgbgLIAHgMIAXARIgDggIAMAAIgEAgIAXgRIAHAMIgaALIAaANIgHALIgXgSIAEAhg");
	this.shape_311.setTransform(1068.8,229.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#58595B").s().p("AgNAVQAQgGgCgQIgIAAIAAgcIAVAAIAAAXQAAAOgGAJQgGAIgMAFg");
	this.shape_312.setTransform(1062.7,245.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#58595B").s().p("AgYBiIApixIgyAAIAAgSIBEAAIAAAPIgpC0g");
	this.shape_313.setTransform(1056.3,235.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#58595B").s().p("AAvCoIhdkCIAAECIgeAAIAAlPIAfAAIBbD7IAAj7IAfAAIAAFPg");
	this.shape_314.setTransform(1041.9,244.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#58595B").s().p("Ag6CtQgXgtAAhRIAAgKQAAhPAXgtQAWgqAkAAQAlAAAVAqQAYAtAABPIAAAKQAABRgYAtQgVAqglAAQgkAAgWgqgAgjhCQgPAkAABDIAAAKQAABFAPAkQANAiAWAAQAXAAANgiQAOgkABhFIAAgKQgBhDgOgkQgNgigXAAQgWAAgNAigAgMiQIAjhGIAdAQIguA2g");
	this.shape_315.setTransform(1022.3,240.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_316.setTransform(1008.6,244.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#58595B").s().p("AgkCBQgbgsABhRIAAgHQgBhRAcgsQAZgpAmAAQASAAAQAIIAAAhQgRgKgPAAQgcAAgOAhQgSAjAABDIAAAHQAABDASAkQAOAhAcAAQAQAAARgLIAAAfQgQAKgVAAQgmAAgYgpg");
	this.shape_317.setTransform(996.9,244.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#58595B").s().p("AgkCBQgagsAAhRIAAgHQAAhRAbgsQAZgpAmAAQASAAARAIIAAAhQgRgKgQAAQgbAAgPAhQgTAjAABDIAAAHQAABDATAkQAPAhAbAAQAQAAASgLIAAAfQgRAKgUAAQgnAAgYgpg");
	this.shape_318.setTransform(982.6,244.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#58595B").s().p("Ag7CoIAAlPIB1AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAdg");
	this.shape_319.setTransform(968.3,244.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#58595B").s().p("AgOCoIAAiOIhEjBIAhAAIAxCbIA0ibIAfAAIhDDBIAACOg");
	this.shape_320.setTransform(951.6,244.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#58595B").s().p("AAwCoIhekCIAAECIgeAAIAAlPIAgAAIBbD7IAAj7IAeAAIAAFPg");
	this.shape_321.setTransform(933.3,244.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_322.setTransform(919.3,244.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#58595B").s().p("AA4CoIgShWIhMAAIgSBWIgeAAIBGlPIAgAAIBHFPgAghA1IBCAAIghing");
	this.shape_323.setTransform(898.3,244.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#58595B").s().p("Ag1CoIAAlPIAfAAIAAEyIBNAAIAAAdg");
	this.shape_324.setTransform(883.3,244.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhWAAIAAB8IBOAAIAAAbIhOAAIAAB+IBXAAIAAAdg");
	this.shape_325.setTransform(861.2,244.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#58595B").s().p("AhMCoIAAlPIAsAAQAxAAAdAqQAfArAABPIAAAHQAABPgfAsQgdApgxAAgAgsCMIAOAAQAhAAAUghQAWgkAAhDIAAgHQAAhDgWgjQgVghghAAIgNAAg");
	this.shape_326.setTransform(843.8,244.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#58595B").s().p("Ag6CCQgXgsAAhRIAAgJQAAhRAXgsQAWgqAkAAQAlAAAWAqQAXAsAABRIAAAJQAABRgXAsQgWAqglAAQgkAAgWgqgAgihtQgPAlAABEIAAAJQAABEAPAlQANAhAVAAQAXAAAOghQAOglAAhEIAAgJQAAhEgOglQgOghgXAAQgVAAgNAhg");
	this.shape_327.setTransform(817.4,244.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_328.setTransform(804.2,244.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#58595B").s().p("AgOCoIAAkyIgzAAIAAgdICDAAIAAAdIgzAAIAAEyg");
	this.shape_329.setTransform(793.6,244.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_330.setTransform(782.9,244.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#58595B").s().p("AhACbIAAgiQAhAVAYAAQARAAAMgLQAMgMAAgUIAAgBQAAgTgJgRQgIgQgZgiQgigrgKgTQgMgWAAgYIAAgBQAAggAVgWQAUgUAbAAQAcAAAYAOIAAAiQgagSgYAAQgQAAgLAMQgMALAAATIAAABQAAARAJAQQAJAPAYAiQAhAlALAYQAMAYAAAbIAAABQAAAigVAVQgUAUgeAAQgcAAgegRg");
	this.shape_331.setTransform(771.7,244.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#58595B").s().p("Ag1CoIAAlPIAfAAIAAEyIBMAAIAAAdg");
	this.shape_332.setTransform(750.9,244.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBWAAIAAAdg");
	this.shape_333.setTransform(736.1,244.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#58595B").s().p("AAvCoIhdkCIAAECIgeAAIAAlPIAgAAIBaD7IAAj7IAfAAIAAFPg");
	this.shape_334.setTransform(710.6,244.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#58595B").s().p("Ag7CoIAAlPIB1AAIAAAdIhVAAIAAB8IBMAAIAAAbIhMAAIAAB+IBWAAIAAAdg");
	this.shape_335.setTransform(693.6,244.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#58595B").s().p("AhACbIAAgiQAhAVAYAAQARAAAMgLQAMgMAAgUIAAgBQAAgTgJgRQgIgQgZgiQgigrgKgTQgMgWAAgYIAAgBQAAggAVgWQAUgUAbAAQAcAAAYAOIAAAiQgagSgYAAQgQAAgLAMQgMALAAATIAAABQAAARAJAQQAJAPAYAiQAhAlALAYQAMAYAAAbIAAABQAAAigVAVQgUAUgeAAQgcAAgegRg");
	this.shape_336.setTransform(670.3,244.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAdg");
	this.shape_337.setTransform(655.5,244.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#58595B").s().p("AAvCoIhdkCIAAECIgeAAIAAlPIAfAAIBbD7IAAj7IAfAAIAAFPg");
	this.shape_338.setTransform(637.4,244.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#58595B").s().p("Ag6CCQgXgtAAhQIAAgJQAAhQAXgtQAXgqAjAAQAlAAAVAqQAYAtAABQIAAAJQAABQgYAtQgVAqglAAQgjAAgXgqgAgjhtQgPAlAABEIAAAJQAABEAPAlQANAhAWAAQAXAAANghQAPglAAhEIAAgJQgBhEgOglQgNghgXAAQgWAAgNAhg");
	this.shape_339.setTransform(617.8,244.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_340.setTransform(604,244.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#58595B").s().p("AgkCBQgbgsAAhRIAAgHQAAhRAcgsQAZgpAmAAQASAAARAIIAAAhQgSgKgPAAQgcAAgOAhQgTAjAABDIAAAHQAABDATAkQAOAhAcAAQAQAAASgLIAAAfQgRAKgUAAQgnAAgYgpg");
	this.shape_341.setTransform(592.3,244.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#58595B").s().p("AgkCBQgagsgBhRIAAgHQABhRAbgsQAagpAlAAQASAAARAIIAAAhQgSgKgPAAQgcAAgOAhQgSAjAABDIAAAHQAABDASAkQAOAhAcAAQAQAAARgLIAAAfQgQAKgVAAQgmAAgYgpg");
	this.shape_342.setTransform(578,244.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#58595B").s().p("AA4CoIgShWIhMAAIgRBWIgfAAIBGlPIAgAAIBHFPgAghA1IBCAAIghing");
	this.shape_343.setTransform(561.9,244.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhWAAIAAB8IBNAAIAAAbIhNAAIAAB+IBXAAIAAAdg");
	this.shape_344.setTransform(545.4,244.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#58595B").s().p("AAoCoIg1iEIgNABIgRAAIAACDIgfAAIAAlPIAvAAQArAAAaAaQAbAbAAAxIAAABQAAAigOAZQgOAVgZALIA7CNgAgrAJIAQAAQAdAAASgRQASgTAAgkIAAgCQAAglgTgTQgSgRgdAAIgPAAg");
	this.shape_345.setTransform(528.7,244.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#58595B").s().p("AhACbIAAgiQAhAVAYAAQASAAALgLQAMgMAAgUIAAgBQAAgTgJgRQgIgQgYgiQgjgrgKgTQgMgWAAgYIAAgBQAAggAVgWQAUgUAcAAQAaAAAZAOIAAAiQgbgSgXAAQgQAAgLAMQgLALAAATIAAABQAAARAJAQQAIAPAYAiQAhAlALAYQAMAYAAAbIAAABQAAAigVAVQgUAUgeAAQgbAAgfgRg");
	this.shape_346.setTransform(503.9,244.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#58595B").s().p("AA4CoIgShWIhMAAIgSBWIgeAAIBHlPIAfAAIBHFPgAghA1IBCAAIghing");
	this.shape_347.setTransform(486.5,244.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#58595B").s().p("Ag1CoIAAlPIAfAAIAAEyIBMAAIAAAdg");
	this.shape_348.setTransform(471.5,244.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBWAAIAAAdg");
	this.shape_349.setTransform(449.4,244.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#58595B").s().p("AhMCoIAAlPIAsAAQAxAAAdAqQAfArAABPIAAAHQAABPgfAsQgdApgxAAgAgtCMIAPAAQAhAAAUghQAWgkAAhDIAAgHQAAhDgWgjQgVghghAAIgOAAg");
	this.shape_350.setTransform(432.1,244.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#58595B").s().p("AhMCoIAAlPIAsAAQAxAAAdAqQAfArAABPIAAAHQAABPgfAsQgdApgxAAgAgsCMIAOAAQAhAAAUghQAWgkAAhDIAAgHQAAhDgWgjQgVghggAAIgOAAg");
	this.shape_351.setTransform(405.6,244.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#58595B").s().p("AA3CoIgRhWIhMAAIgSBWIgeAAIBGlPIAgAAIBHFPgAgiA1IBDAAIghing");
	this.shape_352.setTransform(386.2,244.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#58595B").s().p("AhLCoIAAlPIArAAQAxAAAdAqQAeArABBPIAAAHQgBBPgeAsQgdApgxAAgAgtCMIAPAAQAhAAAUghQAWgkAAhDIAAgHQAAhDgWgjQgVghggAAIgPAAg");
	this.shape_353.setTransform(368.8,244.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBWAAIAAAdg");
	this.shape_354.setTransform(351.8,244.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#58595B").s().p("AgPCpIhDlRIAgAAIAyEUIA0kUIAfAAIhEFRg");
	this.shape_355.setTransform(334.5,244.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#58595B").s().p("AA4CoIgShWIhMAAIgSBWIgeAAIBGlPIAgAAIBHFPgAghA1IBCAAIghing");
	this.shape_356.setTransform(317.5,244.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#58595B").s().p("AAoCoIg1iEIgOABIgQAAIAACDIgfAAIAAlPIAuAAQAsAAAaAaQAbAbAAAxIAAABQAAAigOAZQgOAVgZALIA7CNgAgrAJIAQAAQAdAAARgRQATgTAAgkIAAgCQAAglgTgTQgSgRgeAAIgOAAg");
	this.shape_357.setTransform(300.1,244.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#58595B").s().p("AgsCCQgfgtAAhRIAAgHQABhPAfguQAcgqArAAQAXAAAUALIAAAhQgWgNgUAAQgeAAgUAhQgWAlAABBIAAAJQAABEAWAkQATAhAeAAQAJAAAJgDIAAh4IgsAAIAAgbIBJAAIAACnQgYAMgYAAQgrAAgcgpg");
	this.shape_358.setTransform(280.7,244.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#58595B").s().p("AgOCoIAAiOIhEjBIAhAAIAxCbIAzibIAgAAIhEDBIAACOg");
	this.shape_359.setTransform(255.9,244.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#58595B").s().p("AA3CoIgRhWIhMAAIgRBWIggAAIBHlPIAgAAIBIFPgAgiA1IBDAAIghing");
	this.shape_360.setTransform(230.5,244.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_361.setTransform(216.8,244.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#58595B").s().p("AgkCBQgagsAAhRIAAgHQgBhRAcgsQAZgpAlAAQATAAARAIIAAAhQgSgKgQAAQgbAAgPAhQgSAjAABDIAAAHQAABDASAkQAPAhAbAAQAQAAATgLIAAAfQgSAKgUAAQgmAAgYgpg");
	this.shape_362.setTransform(205.1,244.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#58595B").s().p("AAwCoIhekCIAAECIgdAAIAAlPIAeAAIBbD7IAAj7IAfAAIAAFPg");
	this.shape_363.setTransform(187.4,244.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#58595B").s().p("Ag6CoIAAlPIB0AAIAAAdIhVAAIAAB8IBNAAIAAAbIhNAAIAAB+IBWAAIAAAdg");
	this.shape_364.setTransform(170.4,244.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#58595B").s().p("AhMCoIAAlPIAsAAQAxAAAdAqQAfArAABPIAAAHQAABPgfAsQgdApgxAAgAgsCMIAOAAQAhAAAUghQAWgkAAhDIAAgHQAAhDgWgjQgVghggAAIgOAAg");
	this.shape_365.setTransform(153.1,244.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_366.setTransform(139.1,244.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#58595B").s().p("AgkCBQgbgsABhRIAAgHQgBhRAcgsQAZgpAmAAQASAAAQAIIAAAhQgRgKgQAAQgbAAgPAhQgSAjAABDIAAAHQAABDASAkQAPAhAbAAQARAAARgLIAAAfQgQAKgUAAQgnAAgYgpg");
	this.shape_367.setTransform(127.4,244.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#58595B").s().p("AAvCoIhdkCIAAECIgeAAIAAlPIAfAAIBbD7IAAj7IAfAAIAAFPg");
	this.shape_368.setTransform(109.7,244.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#58595B").s().p("AgOCoIAAlPIAdAAIAAFPg");
	this.shape_369.setTransform(95.6,244.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#54B5E6").s().p("AgiBJIBAiCIhOAAIAAgPIBhAAIAAAMIhACFg");
	this.shape_370.setTransform(1300,135.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#54B5E6").s().p("AgvBfQgLgDgKgIQgIgHgGgMQgFgMAAgNIAAgBQAAgQAGgLQAFgMALgFQAKgIAOgEQAOgDASAAQANAAAKACQAMACAKAEIAAgEQAAgRgLgJQgKgJgTAAQgOAAgOADQgOADgLAFIgOgqQAPgGASgFQASgFAWAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgJALgPAHQgLAHgVAAQgPAAgLgEgAgYARQgKAHAAANIAAABQAAALAIAGQAIAGAOAAQAQAAANgJQALgKAAgPIAAgJQgGgDgKgDIgTgCQgPAAgKAHg");
	this.shape_371.setTransform(1282.5,145.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#54B5E6").s().p("AgtB+QgPgGgNgNQgMgMgHgTQgHgTAAgYIAAAAQAAgZAHgRQAHgSAMgMQAMgNAQgHQARgHAQABQAUAAAOAJQAOAIAKAMIAAhgIA2AAIAAEFIg2AAIAAgcQgKAOgOAJQgOAJgUAAQgSgBgPgGgAgQgQQgIAEgHAHQgGAFgEAKQgEALAAAMIAAAAQAAALAEALQAEALAGAGQAHAHAIADQAHAFAJAAQALAAAHgFQAJgEAGgGQAGgJAEgIQAEgLAAgLIAAAAQAAgMgEgLQgEgJgGgGQgFgHgKgEQgJgDgJAAQgHAAgJADg");
	this.shape_372.setTransform(1259.8,141.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#54B5E6").s().p("AgvBfQgMgDgJgIQgIgHgGgMQgFgKAAgPIAAgBQAAgRAGgKQAGgMAJgFQAMgIANgEQANgDATAAQANAAAKACQALACALAEIAAgEQAAgRgLgJQgLgJgSAAQgOAAgOADQgOADgLAFIgNgqQAOgGATgFQARgFAWAAQAtAAAUAWQAVAWAAAnIAABuIg1AAIAAgVQgJAMgPAGQgMAHgUAAQgPAAgLgEgAgZARQgKAHABANIAAABQAAALAIAGQAIAGANAAQASAAAMgJQALgKAAgPIAAgJIgQgGQgLgCgIAAQgOAAgMAHg");
	this.shape_373.setTransform(1237,145.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#54B5E6").s().p("Ag5BiIAAi/IA3AAIAAAnQAGgUAPgMQAOgMAYABIAAA6IgCAAQgcAAgPAQQgOARAAAhIAABHg");
	this.shape_374.setTransform(1220.9,144.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgOgIgRQgHgSAAgXIAAAAQAAgSAHgTQAGgSAOgPQAMgNASgIQASgIASAAQAYAAASAJQASAIALAPQALANAHAUQAFAUAAASIAAAIIgBAGIiEAAQAFATALAKQAOAJAQAAQAOAAAJgFQAMgFALgKIAfAcQgOARgTAJQgTAKgaAAQgTAAgUgHgAgagsQgLALgCATIBQAAQgDgTgKgLQgLgLgRAAQgPAAgLALg");
	this.shape_375.setTransform(1201.6,145.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#54B5E6").s().p("AgtB+QgQgGgMgNQgMgMgHgTQgIgTAAgYIAAAAQAAgZAIgRQAHgSAMgMQAMgOAQgGQARgHAQABQAUAAAOAJQAPAIAJAMIAAhgIA3AAIAAEFIg3AAIAAgcQgKAOgOAJQgPAJgTAAQgSgBgPgGgAgQgQQgJAEgGAHQgHAGgDAJQgEALAAAMIAAAAQAAALAEALQADAIAHAJQAHAHAIADQAHAFAJAAQALAAAHgFQAJgEAGgGQAGgGAEgLQAEgLAAgLIAAAAQAAgMgEgLQgFgKgFgFQgGgHgJgEQgJgDgJAAQgHAAgJADg");
	this.shape_376.setTransform(1178.1,141.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgNgNgJgTQgIgTAAgUIAAAAQAAgTAIgSQAJgTANgOQAOgNATgIQAVgIATAAQAVAAAUAIQAUAHANAOQAOAOAIASQAIASAAAUIAAAAQAAAUgIATQgIAQgOAPQgNANgUAJQgVAIgUAAQgUAAgUgIgAgUgvQgJADgGAIQgGAGgEALQgEALAAAIIAAAAQAAAIAEAMQAEALAGAFQAHAIAJAFQAKADAJAAQANAAAIgDQAJgEAHgIQAGgGAEgKQADgMAAgJIAAAAQAAgIgEgLQgDgKgHgHQgHgHgJgEQgIgEgMgBQgMABgIAEg");
	this.shape_377.setTransform(1154.4,145.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#54B5E6").s().p("ABcBiIAAhpQAAgVgIgJQgJgKgPAAQgPAAgJAKQgJAKAAAUIAABpIg0AAIAAhpQAAgUgJgKQgJgKgPAAQgPAAgJAKQgJAJAAAVIAABpIg3AAIAAi/IA3AAIAAAcIAKgMIANgKQAGgEAJgDQAJgDAKAAQASAAAPAIQAMAJAIAOQAMgPAQgIQAPgIAUAAQAfAAARASQAQASABAjIAAB8g");
	this.shape_378.setTransform(1125.5,144.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#54B5E6").s().p("AgoBcQgSgHgPgOQgPgOgHgSQgIgSAAgVIAAAAQAAgUAIgRQAHgRAPgQQAOgNATgIQAUgIAUAAQAUAAAVAIQATAHAOAOQANANAJATQAIATAAATIAAAAQAAATgIAUQgJASgNANQgOANgTAJQgVAIgUAAQgUAAgUgIgAgUgvQgIADgIAIQgGAHgEAKQgDAKAAAJIAAAAQAAALAEAJQAEALAGAFQAHAIAJAFQAKADAJAAQANAAAIgDQAJgFAGgHQAGgGAEgKQAEgJAAgMIAAAAQAAgIgEgLQgEgKgGgHQgHgHgKgEQgIgEgLgBQgMABgIAEg");
	this.shape_379.setTransform(1085.7,145.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#54B5E6").s().p("AghBdQgRgHgPgOQgNgOgIgRQgHgSAAgXIAAAAQAAgUAHgRQAGgSANgPQAMgNASgIQATgIASAAQAYAAARAJQARAHANAQQAMANAFAUQAGAUAAASIAAABIgBANIiEAAQAEATAMAKQANAJAQAAQAOAAAKgFQALgFAMgKIAfAcQgOARgTAJQgUAKgaAAQgUAAgSgHgAgagsQgLAMgDASIBQAAQgBgSgLgMQgLgLgRAAQgPAAgLALg");
	this.shape_380.setTransform(1051.9,145.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#54B5E6").s().p("AgXBhIhMjBIA6AAIApB/IArh/IA5AAIhMDBg");
	this.shape_381.setTransform(1031.2,145.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgOgIgRQgHgSAAgXIAAAAQAAgUAHgRQAGgSANgPQAMgNATgIQASgIASAAQAYAAASAJQAQAHANAQQAMANAFAUQAGAUAAASIAAABIgBANIiEAAQAEATAMAKQANAJAQAAQAPAAAJgFQALgFAMgKIAfAcQgOARgTAJQgUAKgZAAQgUAAgTgHgAgagsQgKAMgEASIBRAAQgDgSgLgMQgKgLgRAAQgPAAgLALg");
	this.shape_382.setTransform(1010.3,145.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_383.setTransform(993.8,141.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#54B5E6").s().p("AgtB+QgQgGgMgNQgMgMgHgTQgIgTAAgYIAAAAQAAgZAIgRQAHgSAMgMQAMgOAQgGQARgHAQABQAUAAAOAJQAPAIAJAMIAAhgIA3AAIAAEFIg3AAIAAgcQgKAOgOAJQgPAJgTAAQgSgBgPgGgAgQgQQgJAEgGAHQgHAGgDAJQgEALAAAMIAAAAQAAALAEALQADAIAHAJQAHAHAIADQAIAFAIAAQALAAAHgFQAJgEAGgGQAGgGAEgLQAEgLAAgLIAAAAQAAgMgEgLQgFgKgFgFQgGgHgJgEQgJgDgJAAQgHAAgJADg");
	this.shape_384.setTransform(965.1,141.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#54B5E6").s().p("AgvBfQgLgDgJgIQgKgIgFgLQgFgKAAgPIAAgBQAAgPAFgMQAHgMAJgFQAMgIANgEQANgDASAAQAOAAAKACIAVAGIAAgEQABgRgLgJQgKgJgSAAQgPAAgNADQgOADgMAFIgOgqQAPgGASgFQASgFAWAAQAtAAAUAWQAVAVAAAoIAABuIg1AAIAAgVQgKAMgOAGQgLAHgVAAQgPAAgLgEgAgYARQgKAHAAANIAAABQAAALAIAGQAIAGAOAAQAQAAAMgJQANgKAAgPIAAgJIgQgGIgTgCQgQAAgKAHg");
	this.shape_385.setTransform(942.3,145.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#54B5E6").s().p("AgtB+QgPgGgNgNQgMgMgHgTQgIgSABgZIAAAAQgBgaAIgQQAHgSAMgMQAMgNAQgHQARgHAQABQAUAAAOAJQAOAIAKAMIAAhgIA2AAIAAEFIg2AAIAAgcQgKAOgOAJQgPAJgTAAQgRgBgQgGgAgQgQQgJAEgGAHQgGAGgFAJQgDAJAAAOIAAAAQAAANADAJQAEAJAHAIQAGAHAJADQAHAFAJAAQALAAAHgFQAIgDAHgHQAGgJAEgIQADgJAAgNIAAAAQAAgNgDgKQgEgJgGgGQgHgHgIgEQgJgDgJAAQgHAAgJADg");
	this.shape_386.setTransform(919.6,141.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_387.setTransform(902.4,141.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#54B5E6").s().p("AgkBcQgVgGgTgQIAWgkQATAMANAFQAQAGALAAQAMAAAGgEQAGgEAAgHIAAAAQAAgFgEgDQgCgDgHgCIgMgFIgOgEIgTgHQgKgEgJgHQgJgFgFgJQgFgKAAgOIAAgBQAAgOAFgMQAHgMAIgHQALgIAMgEQAOgEAMAAQASAAATAGQARAFASALIgWAmQgPgJgNgEQgNgFgLAAQgIAAgEAEQgGADAAAGIAAABQAAAEAEADIAIAGIAuASQAIADALAHQAHAFAGAKQAGAIgBAOIAAABQAAARgFALQgFALgKAIQgKAIgOAEQgMADgRAAQgSAAgWgHg");
	this.shape_388.setTransform(887.7,145.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgKgQAAQgOAAgJAKQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAcIAKgMQAFgFAIgFQAGgEAHgDQAIgDAKAAQAgAAARAUQARASAAAiIAAB7g");
	this.shape_389.setTransform(867.8,144.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#54B5E6").s().p("AggBdQgTgHgOgOQgNgOgHgRQgIgSAAgXIAAAAQAAgSAHgTQAHgSANgPQAMgNARgIQATgIASAAQAYAAASAJQARAIAMAPQALANAGAUQAGAUAAASIAAAIIgBAGIiEAAQAFATAMAKQANAJAPAAQAOAAALgFQALgFALgKIAgAcQgPARgTAJQgTAKgbAAQgSAAgTgHgAgagsQgKALgDATIBQAAQgDgTgKgLQgLgLgRAAQgOAAgMALg");
	this.shape_390.setTransform(845.5,145.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#54B5E6").s().p("AgEB4QgKgEgIgGQgGgGgFgMQgEgLAAgRIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQgBATATAAQAPAAALgHIAAAsQgIAEgLAEQgLADgNAAQgOAAgHgCg");
	this.shape_391.setTransform(827.4,142.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgKgQAAQgOAAgJAKQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAcIAKgMQAFgFAIgFQAGgEAHgDQAIgDAKAAQAgAAARAUQARASAAAiIAAB7g");
	this.shape_392.setTransform(809,144.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_393.setTransform(792.3,141.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#54B5E6").s().p("AggBdQgUgIgMgNQgNgNgIgSQgIgSAAgXIAAAAQAAgSAHgTQAIgTAMgOQALgNATgIQASgIATAAQAYAAARAJQARAHANAQQALAPAFASQAGASAAAUIAAAOIiFAAQAEATANAKQAMAJAQAAQAPAAAKgFQAKgFANgKIAeAcQgNARgUAJQgTAKgaAAQgUAAgSgHgAgZgsQgLALgDATIBQAAQgCgSgLgMQgLgLgQAAQgQAAgKALg");
	this.shape_394.setTransform(765.1,145.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#54B5E6").s().p("AgtB+QgQgGgMgNQgMgMgIgTQgHgUAAgXIAAAAQAAgYAHgSQAIgSAMgMQAMgNAQgHQARgHAQABQAUAAAOAJQAOAIAKAMIAAhgIA3AAIAAEFIg3AAIAAgcQgJANgPAKQgPAJgTAAQgSgBgPgGgAgQgQQgIAEgHAHQgGAGgEAJQgEAJAAAOIAAAAQAAANAEAJQADAJAHAIQAHAHAIADQAIAFAIAAQAKAAAIgFQAIgDAHgHQAHgJADgIQAEgJAAgNIAAAAQAAgNgEgKQgEgJgGgGQgHgHgIgEQgJgDgJAAQgHAAgJADg");
	this.shape_395.setTransform(741.6,141.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgNgNgJgTQgIgTAAgUIAAAAQAAgTAIgSQAJgTANgOQAOgNATgIQAUgIAUAAQAVAAAUAIQATAHAOAOQAPAOAHASQAIASAAAUIAAAAQAAAVgIASQgHAQgPAPQgOAOgTAIQgUAIgVAAQgTAAgVgIgAgUgvQgJADgGAIQgHAHgDAKQgEAJAAAKIAAAAQAAAIAEAMQAEALAGAFQAHAIAJAFQAKADAJAAQANAAAIgDQAJgEAHgIQAGgHAEgJQADgKAAgLIAAAAQAAgKgEgJQgEgKgGgHQgHgHgJgEQgIgEgMgBQgMABgIAEg");
	this.shape_396.setTransform(707.1,145.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#54B5E6").s().p("ABcBiIAAhpQAAgUgIgKQgJgKgPAAQgQAAgIAKQgJAKAAAUIAABpIg0AAIAAhpQAAgUgJgKQgJgKgPAAQgPAAgJAKQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAcIAKgMQAGgFAHgFQAGgEAJgDQAJgDAKAAQASAAAPAIQALAIAJAPQAMgPAQgIQAPgIAUAAQAfAAARASQAQASABAjIAAB8g");
	this.shape_397.setTransform(678.2,144.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgNgNgJgTQgIgTAAgUIAAAAQAAgTAIgSQAJgTANgOQAOgNATgIQAUgIAUAAQAVAAAUAIQATAHAOAOQAPAOAHASQAIASAAAUIAAAAQAAAVgIASQgHAQgPAPQgNANgUAJQgUAIgVAAQgTAAgVgIgAgUgvQgJADgGAIQgHAHgDAKQgEAJAAAKIAAAAQAAALAEAJQAEALAGAFQAHAIAJAFQAKADAJAAQANAAAIgDQAJgEAHgIQAHgIACgIQAEgJAAgMIAAAAQAAgKgEgJQgEgKgGgHQgHgHgJgEQgIgEgMgBQgMABgIAEg");
	this.shape_398.setTransform(649.1,145.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#54B5E6").s().p("AgcBcQgTgIgNgOQgNgNgIgSQgHgTAAgUIAAAAQAAgTAHgSQAIgRANgQQANgNATgIQAUgIATAAQAbAAASAJQARAIAOAQIggAkQgJgKgLgGQgJgGgPAAQgLABgGAEQgJADgGAIQgGAGgEALQgEALAAAIIAAAAQAAAJAEAMQAEAKAGAGQAHAIAJAEQAFADANAAQAOABAKgGQAJgEALgLIAgAhQgOAPgSAKQgTAKgcAAQgSAAgUgIg");
	this.shape_399.setTransform(627.7,145.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgJgKQgIgKgQAAQgOAAgJAKQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAcIAKgMQAGgGAGgEQAHgEAHgDQAIgDAKAAQAgAAARAUQARATAAAhIAAB7g");
	this.shape_400.setTransform(595.3,144.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#54B5E6").s().p("AgoBcQgTgHgOgOQgPgOgHgSQgIgSAAgVIAAAAQAAgUAIgRQAHgRAPgQQANgNAUgIQAUgIAUAAQAUAAAVAIQATAHAOAOQAPAOAHASQAIASAAAUIAAAAQAAAVgIASQgHAQgPAPQgNANgUAJQgUAIgVAAQgUAAgUgIgAgUgvQgIADgIAIQgGAHgDAKQgEAJAAAKIAAAAQAAALAEAJQAEALAGAFQAHAIAJAFQAKADAJAAQANAAAIgDQAJgFAGgHQAHgHADgJQAEgJAAgMIAAAAQAAgKgEgJQgEgKgGgHQgHgHgJgEQgJgEgLgBQgMABgIAEg");
	this.shape_401.setTransform(572.1,145.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#54B5E6").s().p("Ag4BiIAAi/IA2AAIAAAnQAHgUAOgMQAOgMAYABIAAA6IgCAAQgcAAgPAQQgOARAAAhIAABHg");
	this.shape_402.setTransform(554,144.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#54B5E6").s().p("AggBdQgTgHgOgOQgNgOgHgRQgIgSAAgXIAAAAQAAgUAHgRQAHgSAMgPQANgNARgIQATgIASAAQAYAAASAJQARAIAMAPQALANAGAUQAGAUAAASIAAAIIgBAGIiEAAQAEATANAKQANAJAPAAQAOAAAKgFQAMgFALgKIAfAcQgOARgTAJQgUAKgaAAQgSAAgTgHgAgZgsQgMALgDATIBQAAQgBgRgLgNQgLgLgRAAQgPAAgKALg");
	this.shape_403.setTransform(534.7,145.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_404.setTransform(518.3,141.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#54B5E6").s().p("AgVB8QgOgIgKgMIAAAZIg3AAIAAkFIA3AAIAABiQAJgNAPgJQAPgJATAAQAQgBARAHQAQAHAMANQAMAMAHASQAIARAAAZIAAAAQAAAYgIATQgHATgMAMQgNANgPAGQgPAGgSABQgUAAgOgJgAgRgQQgJAEgGAHQgFAFgFAKQgEALAAAMIAAAAQAAALAEALQAEALAGAGQAGAGAJAEQAHAFAKAAQAKAAAHgFQAJgDAGgHQAHgJADgIQAEgLAAgLIAAAAQAAgMgEgLQgEgJgGgGQgGgHgJgEQgJgDgIAAQgIAAgJADg");
	this.shape_405.setTransform(501.1,141.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_406.setTransform(483.1,141.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#54B5E6").s().p("Ag5BiIAAi/IA3AAIAAAnQAGgUAPgMQAOgLAYAAIAAA6IgCAAQgcAAgQAQQgNARAAAhIAABHg");
	this.shape_407.setTransform(471,144.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#54B5E6").s().p("AgcBcQgTgJgMgNQgOgNgIgSQgHgTAAgUIAAAAQAAgTAHgSQAIgSAOgPQAMgNATgIQAUgIATAAQAbAAASAJQARAIAPAQIghAkQgJgKgLgGQgJgGgPAAQgLABgGAEQgJADgGAIQgGAGgEALQgDAKAAAJIAAAAQAAALADAKQAEAJAGAHQAHAIAJAEQAFADANAAQAOABAKgGQAJgEALgLIAgAhQgOAPgSAKQgTAKgcAAQgSAAgUgIg");
	this.shape_408.setTransform(452.7,145.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#54B5E6").s().p("AgkBcQgVgGgUgQIAYgkQARAMAOAFQAQAGAMAAQALAAAGgEQAGgDAAgIIAAAAQAAgEgEgEQgCgDgGgCIgNgFIgNgEIgVgHQgKgFgIgGQgIgFgGgJQgFgKAAgOIAAgBQAAgOAGgMQAFgMAKgHQAKgIAMgEQAOgEAMAAQASAAATAGQASAFAQALIgUAmQgPgJgNgEQgOgFgKAAQgJAAgFAEQgFAEAAAFIAAABQAAAEAEADIAIAGIAuASQAIADALAHQAIAFAFAKQAGAJAAANIAAABQAAAQgGAMQgGAMgJAHQgMAIgMAEQgMADgRAAQgSAAgWgHg");
	this.shape_409.setTransform(432.9,145.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgOgHgRQgIgSAAgXIAAAAQAAgSAHgTQAIgTAMgOQALgNATgIQASgIATAAQAYAAARAJQAQAHANAQQAMAPAFASQAGASAAAUIAAAOIiFAAQAEATANAKQANAJAPAAQAPAAAKgFQALgFALgKIAgAcQgOARgUAJQgTAKgaAAQgUAAgSgHgAgagsQgJALgEATIBQAAQgCgSgLgMQgLgLgQAAQgQAAgLALg");
	this.shape_410.setTransform(413.1,145.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#54B5E6").s().p("AgtB+QgPgGgNgNQgMgMgHgTQgIgUAAgXIAAAAQAAgYAIgSQAHgSAMgMQAMgNAQgHQARgHAQABQAUAAAOAJQAOAIAKAMIAAhgIA3AAIAAEFIg3AAIAAgcQgKAOgOAJQgOAJgUAAQgSgBgPgGgAgQgQQgIAEgHAHQgGAGgEAJQgEAJAAAOIAAAAQAAANAEAJQADAJAHAIQAHAHAIADQAHAFAJAAQAKAAAIgFQAHgDAIgHQAGgJAEgIQAEgJAAgNIAAAAQAAgNgEgKQgEgJgGgGQgHgHgIgEQgJgDgJAAQgHAAgJADg");
	this.shape_411.setTransform(389.6,141.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#54B5E6").s().p("AgkBcQgVgGgUgQIAYgkQARAMAOAFQAQAGALAAQAMAAAGgEQAFgDAAgIIAAAAQAAgFgDgDQgCgDgHgCQgFgDgHgCIgNgEIgVgHQgKgEgIgHQgIgFgGgJQgFgKAAgOIAAgBQAAgQAGgKQAFgMAKgHQAKgIAMgEQAOgEAMAAQASAAATAGQASAFAQALIgUAmQgRgJgMgEQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEAEADIAIAGIALAFIAOAFIAVAIQAJAEAKAGQAIAFAFAKQAGAJAAANIAAABQAAAQgGAMQgGAMgKAHQgKAIgNAEQgNADgQAAQgSAAgWgHg");
	this.shape_412.setTransform(357.8,145.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#54B5E6").s().p("AgvBfQgLgDgJgIQgKgIgFgLQgFgKAAgPIAAgBQAAgPAFgMQAHgMAJgFQAMgIANgEQAOgDARAAQAOAAAKACIAVAGIAAgEQABgRgLgJQgKgJgSAAQgPAAgNADQgOADgMAFIgOgqQAPgGASgFQASgFAWAAQAtAAAUAWQAVAVAAAoIAABuIg1AAIAAgVQgKAMgOAGQgLAHgVAAQgPAAgLgEgAgYARQgKAHAAANIAAABQAAALAIAGQAIAGAOAAQAQAAAMgJQANgKAAgPIAAgJIgQgGIgTgCQgQAAgKAHg");
	this.shape_413.setTransform(337.9,145.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_414.setTransform(322.3,141.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgKgQAAQgOAAgJAKQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAcIAKgMIANgKQAGgEAHgDQAIgDALAAQAfAAARAUQARASAAAiIAAB7g");
	this.shape_415.setTransform(295,144.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#54B5E6").s().p("AgoCEQgUgHgNgNQgOgNgIgUQgIgSAAgUIAAgBQAAgVAIgSQAIgPAOgPQAOgNATgIQAVgIATAAQAVAAAUAIQAUAHANAOQAOANAIAQQAIATAAAVIAAAAQAAAVgIASQgIARgOAPQgNANgUAIQgVAJgUgBQgUABgUgJgAgUgHQgIADgHAHQgHAFgDALQgEALAAAKIAAAAQAAAKAEAKQAEALAGAGQAHAHAJAFQALAEAIAAQANAAAIgEQAJgEAGgIQAHgGADgKQAEgLAAgJIAAgBQAAgKgEgKQgDgKgHgHQgIgGgJgEQgHgEgMAAQgMAAgIAEgAgThMIAmg/IAvAUIguArg");
	this.shape_416.setTransform(271.8,141.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_417.setTransform(254.4,141.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#54B5E6").s().p("AgcBcQgSgJgOgNQgNgNgHgSQgIgTAAgUIAAAAQAAgTAIgSQAHgSANgPQAOgNASgIQAUgIATAAQAcAAARAJQASAIAOAQIgiAkQgHgKgLgGQgKgGgQAAQgKABgGAEQgHACgIAJQgGAHgEAKQgDAJAAAKIAAAAQAAALADAKQAEAJAHAHQAGAIAIAEQAHADAMAAQAOABAJgGQALgFAKgKIAgAhQgPAPgRAKQgSAKgdAAQgSAAgUgIg");
	this.shape_418.setTransform(239,145.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#54B5E6").s().p("AgbBcQgTgIgOgOQgMgNgIgSQgIgSAAgVIAAAAQAAgUAIgRQAHgRANgQQAOgNATgIQATgIATAAQAcAAARAJQASAIAOAQIghAkQgJgKgKgGQgKgGgPAAQgLABgGAEQgIADgHAIQgFAGgFALQgDALAAAIIAAAAQAAAJADAMQAFAKAFAGQAIAIAIAEQAGADAMAAQAPABAJgGQALgGAJgJIAgAhQgNAPgTAKQgTAKgbAAQgSAAgUgIg");
	this.shape_419.setTransform(219,145.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgOgIgRQgHgSAAgXIAAAAQAAgSAHgTQAGgSANgPQANgNASgIQASgIASAAQAYAAASAJQARAIAMAPQALANAHAUQAFAUAAASIAAAIIgBAGIiEAAQAEATAMAKQAOAJAQAAQAOAAAJgFQAMgFALgKIAfAcQgPARgSAJQgTAKgaAAQgTAAgUgHgAgZgsQgLAMgEASIBRAAQgDgTgKgLQgKgLgSAAQgOAAgLALg");
	this.shape_420.setTransform(197.5,145.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#54B5E6").s().p("Ag+B5QgOgEgIgFIASgoIAMAFQAGACAGAAQAIAAADgCQAEgDAEgHIhMi/IA6AAIAqCBIAqiBIA5AAIhKDDQgFAOgHALQgFAKgIAHQgGAGgJADQgJADgNAAQgQAAgKgEg");
	this.shape_421.setTransform(176.7,148);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgKgQAAQgOAAgJAKQgJALAAATIAABpIg3AAIAAi/IA3AAIAAAcIAKgMQAFgFAIgFQAGgEAHgDQAIgDAKAAQAgAAARAUQARASAAAiIAAB7g");
	this.shape_422.setTransform(155.4,144.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_423.setTransform(138.7,141.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#54B5E6").s().p("AguBfQgMgDgJgIQgJgIgGgLQgFgMAAgNIAAgBQAAgQAGgLQAGgMAKgFQAKgIAOgEQAOgDASAAQANAAALACQAMACAIAEIAAgEQABgRgLgJQgKgJgSAAQgPAAgNADQgOADgMAFIgOgqQAPgGATgFQARgFAXAAQAsAAAVAWQAUAVAAAoIAABuIg1AAIAAgVQgKAMgNAGQgMAHgVAAQgOAAgLgEgAgYARQgKAHAAANIAAABQAAALAIAGQAIAGAOAAQARAAAMgJQALgKAAgPIAAgJQgGgDgJgDIgUgCQgPAAgKAHg");
	this.shape_424.setTransform(111.4,145.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_425.setTransform(95.8,141.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgNgIgSQgHgSAAgXIAAAAQAAgUAHgRQAGgTANgNQAOgPARgHQAQgIAUAAQAXAAATAJQASAJALAOQALAOAGATQAGAVAAARIAAABIgBANIiEAAQAEATAMAJQAMAKARAAQAOAAALgFQAJgEANgLIAfAcQgNAQgUAKQgTAKgaAAQgUAAgTgHgAgagsQgKAMgDASIBQAAQgCgSgMgMQgJgLgSAAQgPAAgLALg");
	this.shape_426.setTransform(1340.7,102);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#54B5E6").s().p("AgtB+QgQgHgMgNQgNgOgGgQQgIgTAAgYIAAgBQAAgXAIgSQAGgSANgNQAMgMAQgHQAPgHASABQAUAAAOAIQAPAKAJAKIAAhfIA3AAIAAEFIg3AAIAAgbQgJAMgPAJQgOAKgUgBQgQAAgRgGgAgQgQQgIAFgHAGQgHAHgDAIQgEAKAAAMIAAABQAAALAEAKQADAKAHAHQAGAIAJADQAJAFAHAAQAJAAAJgFQAJgDAGgIQAGgHAEgKQAEgKAAgLIAAgBQAAgLgEgLQgEgIgGgHQgGgGgJgFQgJgDgJAAQgHAAgJADg");
	this.shape_427.setTransform(1317.1,98.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#54B5E6").s().p("AgoBcQgUgIgNgNQgNgNgJgTQgIgSABgVIAAAAQgBgTAIgSQAIgSAOgOQAPgPASgHQATgIAVAAQAWAAATAIQAUAIANANQAOANAIATQAIASAAAUIAAAAQAAAUgIASQgIATgOANQgPAPgSAHQgTAIgWAAQgVAAgTgIgAgUgwQgJAFgHAHQgGAGgDAKQgEAMAAAIIAAAAQAAAJAEALQADAJAHAIQAIAIAIADQAKAFAJAAQALAAAKgEQAKgFAFgHQAHgGADgKQAEgMAAgJIAAAAQAAgIgEgLQgDgJgHgIQgGgGgLgFQgJgFgKAAQgKAAgKAEg");
	this.shape_428.setTransform(1282.7,102);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_429.setTransform(1265.3,98.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#54B5E6").s().p("AgEB3QgLgDgGgGQgHgHgFgLQgEgMAAgQIAAhZIgXAAIAAgvIAXAAIAAgxIA0AAIAAAxIAuAAIAAAvIguAAIAABQQAAATASAAQAPAAAMgHIAAAsQgKAGgJACQgKADgOAAQgMAAgJgDg");
	this.shape_430.setTransform(1252.2,99.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_431.setTransform(1239.6,98.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#54B5E6").s().p("AgkBcQgXgIgSgOIAYgkQAPALAQAGQAPAGAMAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgEQgFgEgEgBIgugQQgKgFgIgGQgIgFgGgKQgFgJAAgOIAAgBQAAgOAGgMQAFgLAKgIQAJgIANgEQANgEAMAAQATAAATAGQATAGAPAKIgVAmQgLgHgRgGQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEADADIAJAGIAZAKIAVAIQAKAEAJAHQAIAFAFAJQAGAJAAANIAAABQAAAQgGAMQgFALgLAIQgKAIgNADQgPAEgOAAQgSAAgWgHg");
	this.shape_432.setTransform(1224.9,102);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_433.setTransform(1199.9,98.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#54B5E6").s().p("AghBdQgSgIgNgNQgOgNgIgSQgHgSAAgXIAAAAQAAgTAHgSQAHgTAMgNQAOgPARgHQARgIATAAQAYAAASAJQASAJAMAOQALAPAGASQAFASAAAUIgBAOIiEAAQAFATALAJQANAKARAAQANAAALgFQALgEALgLIAfAcQgNAQgTAKQgUAKgaAAQgTAAgUgHgAgZgsQgKALgFATIBRAAQgCgSgLgMQgLgLgRAAQgPAAgKALg");
	this.shape_434.setTransform(1183.4,102);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgJgQgBQgPABgIAJQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAbIAKgLQAFgFAIgFQAHgFAFgCQAKgDAJABQAggBARAUQARASAAAiIAAB7g");
	this.shape_435.setTransform(1150.6,101.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAIgTAMgNQANgPAQgHQASgIAUAAQAXAAASAJQASAJAMAOQALAPAFASQAGASAAAUIgBAOIiEAAQAEATANAJQAMAKAQAAQAOAAALgFQALgEALgLIAfAcQgMAQgVAKQgTAKgbAAQgSAAgTgHgAgZgsQgLALgEATIBRAAQgCgSgLgMQgLgLgQAAQgQAAgKALg");
	this.shape_436.setTransform(1128.2,102);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#54B5E6").s().p("AgkBcQgXgIgSgOIAYgkQAPALAQAGQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgEQgDgDgGgCIgugQQgKgFgIgGQgIgFgGgKQgFgIAAgPIAAgBQAAgPAGgLQAFgLAKgIQAKgIAMgEQAOgEAMAAQASAAATAGQATAGAPAKIgUAmQgNgHgPgGQgOgFgLAAQgIAAgFAEQgFAEAAAFIAAABQAAAEAEADIAIAGIALAFIAOAFQALADAKAFQALAFAIAGQAIAFAFAJQAGAJAAANIAAABQAAAPgGANQgFALgKAIQgLAIgNADQgPAEgOAAQgSAAgWgHg");
	this.shape_437.setTransform(1097.2,102);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAIgTALgNQAOgPAQgHQASgIAUAAQAXAAASAJQASAJAMAOQALAPAFASQAGASAAAUIAAAOIiFAAQAEATANAJQAMAKAQAAQAOAAALgFQALgEALgLIAfAcQgMAQgVAKQgTAKgbAAQgSAAgTgHgAgZgsQgLALgDATIBQAAQgCgSgLgMQgLgLgQAAQgQAAgKALg");
	this.shape_438.setTransform(1077.4,102);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgJgQgBQgOABgJAJQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAbIAKgLQAEgEAJgGQAHgFAGgCQAJgDAJABQAfgBASAUQARASAAAiIAAB7g");
	this.shape_439.setTransform(1055.3,101.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#54B5E6").s().p("AgoBcQgTgIgOgNQgNgNgJgTQgIgRAAgWIAAAAQAAgUAIgRQAJgTANgNQAPgPASgHQASgIAWAAQAXAAASAIQAUAIANANQAPAPAHARQAIARAAAVIAAAAQAAAVgIARQgHASgPAOQgPAPgSAHQgSAIgXAAQgVAAgTgIgAgUgwQgKAGgFAGQgHAIgDAIQgEAJAAALIAAAAQAAALAEAJQADAJAHAIQAHAHAJAEQAJAFAKAAQALAAAKgEQAJgFAHgHQAHgIACgIQAEgJAAgMIAAAAQAAgKgEgJQgDgJgHgIQgGgGgKgFQgKgFgKAAQgKAAgKAEg");
	this.shape_440.setTransform(1032.1,102);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_441.setTransform(1014.7,98.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#54B5E6").s().p("AgcBcQgSgHgOgPQgNgNgHgSQgIgSAAgVIAAAAQAAgTAIgSQAHgTANgNQAOgPASgHQASgIAVAAQAbAAASAJQASAJAOAPIghAkQgLgLgJgFQgJgGgQAAQgJAAgHAEQgKAFgFAHQgGAGgEAKQgDAKAAAKIAAAAQAAALADAJQADAJAHAIQAGAHAJAFQAIAEAKAAQANAAAMgGQAJgFALgKIAgAhQgPAQgRAJQgSAKgdAAQgUAAgSgIg");
	this.shape_442.setTransform(999.3,102);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#54B5E6").s().p("AgcBcQgRgHgOgPQgOgNgIgSQgHgSAAgVIAAAAQAAgTAHgSQAIgTAOgNQAOgPARgHQASgIAVAAQAbAAATAJQARAJAOAPIghAkQgKgLgJgFQgLgGgOAAQgKAAgHAEQgIAEgHAIQgHAIgDAIQgDAJAAALIAAAAQAAALADAJQAEAJAGAIQAGAHAKAFQAHAEALAAQAOAAAKgGQAKgGAKgJIAgAhQgPAQgRAJQgSAKgcAAQgVAAgSgIg");
	this.shape_443.setTransform(979.3,102);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#54B5E6").s().p("AgvBfQgLgEgKgIQgJgHgFgLQgFgLAAgOIAAgBQAAgQAGgLQAFgLALgGQAKgIAOgEQAPgEARAAQALAAAMADIAWAFIAAgDQAAgRgLgJQgKgJgTAAQgQAAgMADQgMACgNAFIgOgpQASgIAPgEQATgEAVAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgJALgPAHQgNAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAAAQAAAMAIAGQAJAGANAAQARAAAMgKQALgJAAgPIAAgKQgIgDgIgCQgIgCgLAAQgQAAgJAHg");
	this.shape_444.setTransform(957.7,102);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgNgIgSQgHgSAAgXIAAAAQAAgTAHgSQAGgTANgNQAOgPARgHQAQgIAUAAQAXAAATAJQATAKAKANQALAOAHATQAFAVAAARIgBAOIiDAAQADATAMAJQANAKARAAQANAAALgFQALgEALgLIAfAcQgNAQgTAKQgUAKgaAAQgTAAgUgHgAgagsQgKAMgEASIBRAAQgDgTgKgLQgKgLgSAAQgPAAgLALg");
	this.shape_445.setTransform(936.5,102);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#54B5E6").s().p("Ag5BiIAAi/IA3AAIAAAnQAGgUAPgLQAOgMAYABIAAA5IgCAAQgcAAgPAQQgOARAAAhIAABHg");
	this.shape_446.setTransform(919.3,101.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgVgJgJQgIgJgQgBQgPABgIAJQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAbIAKgLQAFgFAHgFQAIgFAFgCQAJgDAKABQAggBAQAUQASASAAAiIAAB7g");
	this.shape_447.setTransform(889.1,101.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#54B5E6").s().p("AgoBcQgTgIgOgNQgPgPgHgRQgIgRAAgWIAAAAQAAgUAIgRQAHgSAPgOQAPgPASgHQASgIAWAAQAWAAATAIQAUAIANANQANANAJATQAIATAAATIAAAAQAAATgIATQgJATgNANQgPAPgSAHQgTAIgWAAQgVAAgTgIgAgUgwQgKAFgGAHQgGAIgEAIQgDAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAIAIAIADQAJAFAKAAQALAAAKgEQAKgFAFgHQAGgGAEgKQAEgJAAgMIAAAAQAAgHgEgMQgDgJgHgIQgGgGgLgFQgJgFgKAAQgKAAgKAEg");
	this.shape_448.setTransform(865.9,102);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#54B5E6").s().p("Ag4BiIAAi/IA2AAIAAAnQAHgUAOgLQAOgMAZABIAAA5IgDAAQgbAAgQAQQgOARAAAhIAABHg");
	this.shape_449.setTransform(847.8,101.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#54B5E6").s().p("AgvBfQgLgEgKgIQgJgHgFgLQgFgLAAgOIAAgBQAAgQAGgLQAGgMAKgFQALgIANgEQAPgEARAAQALAAAMADIAWAFIAAgDQAAgRgLgJQgKgJgTAAQgQAAgMADQgMACgNAFIgOgpQATgIAPgEQASgEAVAAQAtAAAVAWQAUAWAAAnIAABuIg1AAIAAgVQgJALgPAHQgNAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAAAQAAAMAIAGQAJAGANAAQARAAAMgKQALgJAAgPIAAgKQgIgDgIgCQgIgCgLAAQgPAAgKAHg");
	this.shape_450.setTransform(828.4,102);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#54B5E6").s().p("AgEB3QgKgDgHgGQgHgIgFgKQgEgMAAgQIAAhZIgXAAIAAgvIAXAAIAAgxIA0AAIAAAxIAuAAIAAAvIguAAIAABQQAAATASAAQAOAAANgHIAAAsQgKAGgJACQgLADgNAAQgMAAgJgDg");
	this.shape_451.setTransform(810.5,99.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgJgQgBQgOABgJAJQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAbIAKgLQAFgFAIgFQAHgFAGgCQAJgDAJABQAfgBASAUQARASAAAiIAAB7g");
	this.shape_452.setTransform(792.2,101.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgNgIgSQgHgSAAgXIAAAAQAAgTAHgSQAGgTANgNQAOgPARgHQAQgIAVAAQAXAAASAJQASAJAMAOQALAPAGASQAFAVAAARIgBAOIiEAAQAFATALAJQANAKARAAQANAAALgFQALgEALgLIAfAcQgNAQgTAKQgUAKgaAAQgTAAgUgHgAgZgsQgLAMgEASIBRAAQgDgTgKgLQgLgLgQAAQgQAAgKALg");
	this.shape_453.setTransform(769.9,102);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#54B5E6").s().p("ABcBiIAAhpQAAgUgIgKQgJgJgPgBQgQABgJAJQgIAJAAAVIAABpIg1AAIAAhpQAAgUgIgKQgIgJgQgBQgQABgIAJQgJAKAAAUIAABpIg2AAIAAi/IA2AAIAAAbIAKgLQAFgFAIgFQAIgFAHgCQAJgDAKABQATgBAOAJQALAIAIAOQANgPAPgHQAPgJAUABQAfgBARATQARASABAjIAAB7g");
	this.shape_454.setTransform(741.9,101.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_455.setTransform(719.3,98.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#54B5E6").s().p("Ag4BiIAAi/IA2AAIAAAnQAGgUAOgLQAOgMAaABIAAA5IgEAAQgbAAgPAQQgOARAAAhIAABHg");
	this.shape_456.setTransform(707.2,101.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#54B5E6").s().p("AghBdQgSgIgNgNQgOgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAIgTAMgNQANgPARgHQARgIATAAQAYAAASAJQASAJALAOQANAPAEASQAGASAAAUIAAAOIiEAAQAEATAMAJQAMAKARAAQANAAALgFQALgEALgLIAgAcQgOAQgTAKQgTAKgbAAQgTAAgUgHgAgagsQgKALgDATIBQAAQgCgSgLgMQgKgLgSAAQgPAAgLALg");
	this.shape_457.setTransform(687.8,102);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#54B5E6").s().p("AhkB+IAAj4IA3AAIAAAcQAKgNAOgKQAOgIAUAAQASAAAPAGQAPAHANAMQAMANAHATQAHATABAXIAAABQgBAXgHASQgHASgMANQgMAMgQAHQgRAHgQAAQgTAAgPgJQgOgIgKgMIAABSgAgRhLQgIADgHAHQgHAJgDAIQgEAKAAAMIAAABQAAANAEAJQADAHAHAIQAHAHAIAEQAJAEAIAAQAIAAAJgEQAJgEAGgHQAHgHADgIQAEgJAAgNIAAgBQAAgMgEgKQgDgJgHgIQgGgGgJgEQgJgEgIAAQgIAAgJAEg");
	this.shape_458.setTransform(665.2,104.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#54B5E6").s().p("AAmBgIgmg8IgmA8Ig5AAIBDhgIhAhfIA6AAIAiA4IAkg4IA6AAIhBBeIBDBhg");
	this.shape_459.setTransform(642.1,101.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgIgSQgHgSAAgXIAAAAQAAgTAHgSQAHgTAMgNQAOgPARgHQAQgIAVAAQAXAAASAJQASAJAMAOQAMAPAFASQAFASAAAUIgBAOIiEAAQAEATANAJQALAKARAAQAOAAALgFQALgEALgLIAfAcQgMAQgVAKQgSAKgbAAQgTAAgTgHgAgZgsQgLALgEATIBRAAQgCgSgLgMQgKgLgRAAQgQAAgKALg");
	this.shape_460.setTransform(621.6,102);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#54B5E6").s().p("AghBdQgRgHgOgOQgOgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAGgTAOgNQANgPARgHQAQgIAUAAQAYAAASAJQATAJAKAOQANAPAEASQAGAVAAARIAAAOIiEAAQAEATAMAJQAMAKARAAQANAAALgFQALgEALgLIAgAcQgOAQgTAKQgTAKgbAAQgTAAgUgHgAgagsQgLAMgCASIBQAAQgDgTgKgLQgKgLgSAAQgPAAgLALg");
	this.shape_461.setTransform(588.8,102);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#54B5E6").s().p("AhGBPQgRgTAAgiIAAh7IA3AAIAABqQAAATAJAKQAIAKAPAAQAPAAAJgKQAJgKAAgTIAAhqIA3AAIAAC/Ig3AAIAAgcIgKAMQgGAHgHADQgFAEgIADQgJADgJAAQgfAAgSgTg");
	this.shape_462.setTransform(566.6,102.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#54B5E6").s().p("AAuB+IAAhUQgJAMgPAKQgOAJgUAAQgQAAgRgHQgPgGgMgNQgNgMgHgTQgIgSAAgXIAAgBQAAgXAIgTQAHgTAMgNQALgLARgIQAPgGASAAQAUAAAOAIQAOAKAKAKIAAgZIA2AAIAAD4gAgQhLQgHADgIAHQgHAIgEAJQgDAJAAANIAAABQAAANADAJQAEAIAHAHQAHAHAIAEQAJAEAHAAQAJAAAJgEQAIgEAHgHQAGgIAEgHQADgJAAgNIAAgBQAAgMgDgKQgEgIgGgJQgIgHgHgDQgJgEgJAAQgHAAgJAEg");
	this.shape_463.setTransform(542.9,104.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#54B5E6").s().p("AgkBcQgXgIgSgOIAYgkQAPALAQAGQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgEQgDgDgGgCIgugQQgKgFgIgGQgIgFgGgKQgFgIAAgPIAAgBQAAgPAGgLQAFgLAKgIQAKgIAMgEQANgEANAAQASAAATAGQATAGAPAKIgUAmQgOgIgPgFQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEAEADIAIAGIALAFIAOAFIAVAIQALAFAIAGQAIAFAFAJQAGAJAAANIAAABQAAAPgGANQgGAMgKAHQgKAIgNADQgPAEgOAAQgSAAgWgHg");
	this.shape_464.setTransform(511.1,102);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#54B5E6").s().p("AghBdQgSgIgNgNQgOgNgIgSQgHgSAAgXIAAAAQAAgTAHgSQAGgRANgPQAOgPARgHQARgIATAAQAYAAASAJQASAJAMAOQALAPAGASQAFAVAAARIgBAOIiEAAQAFATALAJQANAKARAAQANAAALgFQALgEALgLIAfAcQgNAQgTAKQgUAKgaAAQgTAAgUgHgAgZgsQgKALgFATIBRAAQgDgTgKgLQgLgLgRAAQgPAAgKALg");
	this.shape_465.setTransform(491.3,102);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#54B5E6").s().p("AgDB3QgLgDgHgGQgHgIgFgKQgEgLAAgRIAAhZIgXAAIAAgvIAXAAIAAgxIA1AAIAAAxIAtAAIAAAvIgtAAIAABQQAAATARAAQAOAAAOgHIAAAsQgMAGgHACQgLADgOAAQgNAAgHgDg");
	this.shape_466.setTransform(473.2,99.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#54B5E6").s().p("AAhBiIAAhpQAAgUgIgKQgJgJgQgBQgPABgIAJQgJAKAAAUIAABpIg3AAIAAi/IA3AAIAAAbIAKgLQAFgFAIgFQAHgFAFgCQAKgDAJABQAggBARAUQARASAAAiIAAB7g");
	this.shape_467.setTransform(454.9,101.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAIgTALgNQAOgPAQgHQASgIAUAAQAXAAASAJQASAJAMAOQALAPAFASQAGASAAAUIgBAOIiEAAQAFATAMAJQALAKARAAQAOAAALgFQALgEALgLIAgAcQgNAQgVAKQgSAKgbAAQgTAAgTgHgAgZgsQgLALgEATIBRAAQgCgSgLgMQgLgLgQAAQgQAAgKALg");
	this.shape_468.setTransform(432.5,102);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#54B5E6").s().p("AgaCDIAAi/IA1AAIAAC/gAgbhRIAAgxIA3AAIAAAxg");
	this.shape_469.setTransform(416.1,98.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#54B5E6").s().p("AgcBcQgSgIgNgOQgOgNgHgSQgIgSAAgVIAAAAQAAgTAIgSQAHgTAOgNQANgOASgIQASgIAVAAQAaAAATAJQASAJAOAPIghAkQgLgLgJgFQgKgGgOAAQgKAAgHAEQgKAFgFAHQgGAGgEAKQgDAKAAAKIAAAAQAAALADAJQADAJAHAIQAGAHAKAFQAHAEAKAAQAOAAALgGQAIgFAMgKIAgAhQgPAQgRAJQgTAKgcAAQgUAAgSgIg");
	this.shape_470.setTransform(400.7,102);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#54B5E6").s().p("AgvBfQgLgEgKgIQgJgIgFgKQgFgKAAgPIAAgBQAAgQAGgLQAEgLALgGQALgIAOgEQAPgEAQAAQAMAAAMADIAWAFIAAgDQgBgRgJgJQgLgJgTAAQgPAAgMADQgMACgOAFIgNgpQARgIAPgEQATgEAWAAQAtAAATAWQAVAVAAAoIAABuIg0AAIAAgVQgKALgOAHQgOAHgTAAQgNAAgNgEgAgYARQgKAHAAANIAAAAQAAAMAIAGQAJAGAMAAQATAAAKgKQAMgJABgPIAAgKQgLgEgGgBQgIgCgKAAQgQAAgKAHg");
	this.shape_471.setTransform(379.1,102);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#54B5E6").s().p("AhkB+IAAj4IA3AAIAAAcQALgOANgJQAPgIATAAQARAAAQAGQAQAHAMAMQAMANAHATQAIATAAAXIAAABQAAAYgIARQgHASgMANQgMAMgQAHQgRAHgQAAQgUAAgOgJQgOgIgKgMIAABSgAgRhLQgIAEgHAGQgHAJgDAIQgEAKAAAMIAAABQAAANAEAJQADAHAHAIQAGAHAJAEQAJAEAIAAQAIAAAJgEQAJgEAGgHQAHgHADgIQAEgJAAgNIAAgBQAAgMgEgKQgDgJgHgIQgGgGgJgEQgJgEgIAAQgIAAgJAEg");
	this.shape_472.setTransform(357.2,104.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#54B5E6").s().p("AgkBcQgXgIgSgOIAYgkQAPALAQAGQAQAGALAAQAMAAAGgEQAFgEAAgGIAAgBQAAgEgDgEQgDgDgGgCIgugQQgKgFgIgGQgIgFgGgKQgFgIAAgPIAAgBQAAgPAGgLQAFgLAKgIQAKgIAMgEQAOgEAMAAQASAAATAGQATAGAPAKIgUAmQgOgIgPgFQgNgFgLAAQgIAAgFAEQgFADAAAGIAAABQAAAEAEADIAIAGIALAFIAOAFIAVAIQALAFAIAGQAIAFAFAJQAGAJAAANIAAABQAAAPgGANQgGAMgKAHQgKAIgNADQgPAEgOAAQgSAAgWgHg");
	this.shape_473.setTransform(324.6,102);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#54B5E6").s().p("AgoBcQgUgIgNgNQgNgNgJgTQgIgTAAgUIAAAAQAAgSAIgTQAJgTANgNQAPgPASgHQATgIAVAAQAXAAASAIQAUAIANANQAOAOAIASQAIASAAAUIAAAAQAAAUgIASQgIASgOAOQgPAPgSAHQgTAIgWAAQgVAAgTgIgAgUgwQgJAFgGAHQgGAGgEAKQgEAMAAAIIAAAAQAAAIAEAMQADAJAHAIQAHAHAJAEQAKAFAJAAQALAAAKgEQAKgFAGgHQAGgGAEgKQADgMAAgJIAAAAQAAgIgEgLQgDgJgHgIQgHgHgJgEQgJgFgLAAQgKAAgKAEg");
	this.shape_474.setTransform(303.9,102);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_475.setTransform(286.5,98.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#54B5E6").s().p("AggBdQgTgIgOgNQgNgNgHgSQgIgSAAgXIAAAAQAAgTAHgSQAIgTALgNQAOgPAQgHQASgIAUAAQAXAAASAJQASAJAMAOQALAPAFASQAGASAAAUIgBAOIiEAAQAEATANAJQAMAKAQAAQAOAAALgFQALgEALgLIAgAcQgNAQgVAKQgSAKgcAAQgSAAgTgHgAgZgsQgLALgEATIBRAAQgCgSgLgMQgLgLgQAAQgQAAgKALg");
	this.shape_476.setTransform(259.3,102);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#54B5E6").s().p("AgtB+QgPgHgNgNQgMgMgIgSQgHgSAAgZIAAgBQAAgZAHgQQAIgSAMgNQALgLARgIQAPgHASABQATAAAPAIQAPAKAJAKIAAhfIA3AAIAAEFIg3AAIAAgbQgKANgOAIQgOAKgUgBQgPAAgSgGgAgQgQQgJAFgGAGQgHAGgDAJQgEAJAAANIAAABQAAANAEAIQADALAHAGQAGAIAJADQAJAFAHAAQAJAAAJgFQAJgDAGgIQAHgHADgKQAEgIAAgNIAAgBQAAgMgEgKQgDgIgHgHQgGgGgJgFQgJgDgJAAQgHAAgJADg");
	this.shape_477.setTransform(235.8,98.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#54B5E6").s().p("AA0B7QgLgFgJgJQgHgJgFgLQgEgKAAgPQAAgNAEgMQAEgLAJgKQAHgIAMgFQAMgFANAAQAOAAALAFQAMAFAHAIQAJAKAEAKQAEAMAAANQAAAOgEALQgGANgHAIQgIAIgMAGQgKAFgPAAQgOAAgKgFgAA7AqQgGAJABAMQAAAOAGAJQAHAKAKAAQAMAAAFgKQAGgIAAgOQAAgMgGgKQgHgKgLAAQgKAAgHAKgAhwB9IC2j6IArAAIi2D6gAhlgDQgLgGgIgIQgIgIgEgMQgFgMAAgNQAAgOAFgMQAEgLAIgJQAJgKAKgEQALgFAOAAQAPAAAKAFQAMAEAHAKQAIAHAFANQAEALAAAOQAAAOgEALQgDAKgKALQgHAIgMAGQgKADgPAAQgOAAgLgDgAhehVQgFAKAAAMQAAANAGAJQAHAKAKgBQAMAAAGgJQAFgIABgNQgBgNgGgKQgGgKgLAAQgLAAgHAKg");
	this.shape_478.setTransform(197.8,99);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#54B5E6").s().p("Ag1B1QgUgIgUgTIAhgoQAOANAPAHQAPAIAQAAQARAAAMgJQALgKAAgRQAAgRgMgJQgMgIgSgBQgLABgMACQgNAEgHADIgfgTIAGh9ICaAAIAAAxIhqAAIgDArIAPgDIAQAAQATAAAQAEQAQAEAMALQALAJAIAOQAGAOABAWQgBAVgGAQQgIARgLAKQgOAMgRAGQgRAFgVABQgdAAgYgLg");
	this.shape_479.setTransform(170.8,99.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#54B5E6").s().p("Ag5B6QgQgIgTgOIAdgqQAPAMALAEQANAGAQAAQAWgBAMgQQANgQACgZQgIAIgNAFQgNAEgPABQgVgBgQgFQgQgGgMgKQgMgLgHgNQgFgPgBgUQABgTAGgPQAHgQANgNQAMgLATgHQAQgHAWABIAVABQALACAIADQAHACAJAGIAPANQAGAFAGAKQAGALAEAJQADANACAOQACANAAAUQAAAegGAYQgIAagOARQgMASgWAKQgVALgZAAQgcgBgTgHgAgghHQgLALAAARQAAARAMALQALALAUgBQAUAAALgLQALgKAAgRQABgRgMgLQgNgKgSAAQgVAAgLAKg");
	this.shape_480.setTransform(148,99);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#54B5E6").s().p("AgaCDIAAkFIA1AAIAAEFg");
	this.shape_481.setTransform(119.9,98.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#54B5E6").s().p("AheB9IAAj5IC7AAIAAAxIiFAAIAAAzIB1AAIAAAvIh1AAIAAA1ICHAAIAAAxg");
	this.shape_482.setTransform(103,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// 3 mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_80 = new cjs.Graphics().p("EBotAgPIAAzLIDLAAIAATLg");
	var mask_graphics_81 = new cjs.Graphics().p("Ah2JlIAAzJIDtAAIAATJg");
	var mask_graphics_82 = new cjs.Graphics().p("AiIJlIAAzJIERAAIAATJg");
	var mask_graphics_83 = new cjs.Graphics().p("AiaJlIAAzJIE1AAIAATJg");
	var mask_graphics_84 = new cjs.Graphics().p("AisJlIAAzJIFZAAIAATJg");
	var mask_graphics_85 = new cjs.Graphics().p("Ai+JlIAAzJIF9AAIAATJg");
	var mask_graphics_86 = new cjs.Graphics().p("AjQJlIAAzJIGhAAIAATJg");
	var mask_graphics_87 = new cjs.Graphics().p("AjiJlIAAzJIHFAAIAATJg");
	var mask_graphics_88 = new cjs.Graphics().p("Aj0JlIAAzJIHpAAIAATJg");
	var mask_graphics_89 = new cjs.Graphics().p("AkGJlIAAzJIINAAIAATJg");
	var mask_graphics_90 = new cjs.Graphics().p("AkYJlIAAzJIIxAAIAATJg");
	var mask_graphics_91 = new cjs.Graphics().p("AkqJlIAAzJIJVAAIAATJg");
	var mask_graphics_92 = new cjs.Graphics().p("Ak8JlIAAzJIJ5AAIAATJg");
	var mask_graphics_93 = new cjs.Graphics().p("AlOJlIAAzJIKdAAIAATJg");
	var mask_graphics_94 = new cjs.Graphics().p("AlgJlIAAzJILBAAIAATJg");
	var mask_graphics_95 = new cjs.Graphics().p("AlyJlIAAzJILlAAIAATJg");
	var mask_graphics_96 = new cjs.Graphics().p("AmEJlIAAzJIMJAAIAATJg");
	var mask_graphics_97 = new cjs.Graphics().p("AmWJlIAAzJIMtAAIAATJg");
	var mask_graphics_98 = new cjs.Graphics().p("AmoJlIAAzJINRAAIAATJg");
	var mask_graphics_99 = new cjs.Graphics().p("Am6JlIAAzJIN1AAIAATJg");
	var mask_graphics_100 = new cjs.Graphics().p("EBjFAgPIAAzLIOcAAIAATLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_graphics_80,x:690.5,y:206.3}).wait(1).to({graphics:mask_graphics_81,x:1372.6,y:351.3}).wait(1).to({graphics:mask_graphics_82,x:1374.4,y:351.3}).wait(1).to({graphics:mask_graphics_83,x:1376.2,y:351.3}).wait(1).to({graphics:mask_graphics_84,x:1378,y:351.3}).wait(1).to({graphics:mask_graphics_85,x:1379.8,y:351.3}).wait(1).to({graphics:mask_graphics_86,x:1381.6,y:351.3}).wait(1).to({graphics:mask_graphics_87,x:1383.4,y:351.3}).wait(1).to({graphics:mask_graphics_88,x:1385.2,y:351.3}).wait(1).to({graphics:mask_graphics_89,x:1387,y:351.3}).wait(1).to({graphics:mask_graphics_90,x:1388.9,y:351.3}).wait(1).to({graphics:mask_graphics_91,x:1390.7,y:351.3}).wait(1).to({graphics:mask_graphics_92,x:1392.5,y:351.3}).wait(1).to({graphics:mask_graphics_93,x:1394.3,y:351.3}).wait(1).to({graphics:mask_graphics_94,x:1396.1,y:351.3}).wait(1).to({graphics:mask_graphics_95,x:1397.9,y:351.3}).wait(1).to({graphics:mask_graphics_96,x:1399.7,y:351.3}).wait(1).to({graphics:mask_graphics_97,x:1401.5,y:351.3}).wait(1).to({graphics:mask_graphics_98,x:1403.3,y:351.3}).wait(1).to({graphics:mask_graphics_99,x:1405.1,y:351.3}).wait(1).to({graphics:mask_graphics_100,x:726.5,y:206.3}).wait(80));

	// 3
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(1381,290,0.24,0.24);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).wait(100));

	// 63 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_30 = new cjs.Graphics().p("EAmLAgPIAAzLIEkAAIAATLg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjWJlIAAzJIGsAAIAATJg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkbJlIAAzJII3AAIAATJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlhJlIAAzJILCAAIAATJg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AmmJlIAAzJINNAAIAATJg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AnsJlIAAzJIPYAAIAATJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AoxJlIAAzJIRjAAIAATJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ap2JlIAAzJITtAAIAATJg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Aq8JlIAAzJIV5AAIAATJg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AsBJlIAAzJIYDAAIAATJg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AtHJlIAAzJIaPAAIAATJg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AuMJlIAAzJIcZAAIAATJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AvSJlIAAzJIelAAIAATJg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AwXJlIAAzJMAgvAAAIAATJg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AxdJlIAAzJMAi7AAAIAATJg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AyiJlIAAzJMAlGAAAIAATJg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AzoJlIAAzJMAnRAAAIAATJg");
	var mask_1_graphics_47 = new cjs.Graphics().p("A0tJlIAAzJMApbAAAIAATJg");
	var mask_1_graphics_48 = new cjs.Graphics().p("A1zJlIAAzJMArnAAAIAATJg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A24JlIAAzJMAtxAAAIAATJg");
	var mask_1_graphics_50 = new cjs.Graphics().p("A3+JlIAAzJMAv9AAAIAATJg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A5DJlIAAzJMAyHAAAIAATJg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A6JJlIAAzJMA0TAAAIAATJg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A7OJlIAAzJMA2dAAAIAATJg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A8UJlIAAzJMA4pAAAIAATJg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A9aJlIAAzJMA61AAAIAATJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A+fJlIAAzJMA8/AAAIAATJg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A/lJlIAAzJMA/KAAAIAATJg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EggqAJlIAAzJMBBVAAAIAATJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EghwAJlIAAzJMBDgAAAIAATJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Egi1AJlIAAzJMBFrAAAIAATJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Egj7AJlIAAzJMBH2AAAIAATJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EglAAJlIAAzJMBKBAAAIAATJg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgmGAJlIAAzJMBMMAAAIAATJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgnLAJlIAAzJMBOXAAAIAATJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgoRAJlIAAzJMBQjAAAIAATJg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgpWAJlIAAzJMBStAAAIAATJg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgqbAJlIAAzJMBU3AAAIAATJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgrhAJlIAAzJMBXDAAAIAATJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgsmAJlIAAzJMBZNAAAIAATJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgtsAJlIAAzJMBbZAAAIAATJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EguxAJlIAAzJMBdjAAAIAATJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Egv3AJlIAAzJMBfvAAAIAATJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Egw8AJlIAAzJMBh5AAAIAATJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgyCAJlIAAzJMBkFAAAIAATJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgzIAJlIAAzJMBmRAAAIAATJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Eg0NAJlIAAzJMBobAAAIAATJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg1TAJlIAAzJMBqmAAAIAATJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg2YAJlIAAzJMBsxAAAIAATJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg3eAJlIAAzJMBu8AAAIAATJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg4jAJlIAAzJMBxHAAAIAATJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg5pAJlIAAzJMBzSAAAIAATJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg6uAJlIAAzJMB1dAAAIAATJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg70AJlIAAzJMB3oAAAIAATJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg85AJlIAAzJMB5zAAAIAATJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg9+AJlIAAzJMB7+AAAIAATJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg/EAJlIAAzJMB+JAAAIAATJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EhAJAJlIAAzJMCATAAAIAATJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EhBPAJlIAAzJMCCfAAAIAATJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EhCUAJlIAAzJMCEpAAAIAATJg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Ega7AgPIAAzLMCG1AAAIAATLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_1_graphics_30,x:273.5,y:206.3}).wait(1).to({graphics:mask_1_graphics_31,x:539.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_32,x:546.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_33,x:553.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_34,x:560.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_35,x:567.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_36,x:574.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_37,x:581.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_38,x:588.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_39,x:595.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_40,x:602,y:351.3}).wait(1).to({graphics:mask_1_graphics_41,x:609,y:351.3}).wait(1).to({graphics:mask_1_graphics_42,x:615.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_43,x:622.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_44,x:629.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_45,x:636.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_46,x:643.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_47,x:650.7,y:351.3}).wait(1).to({graphics:mask_1_graphics_48,x:657.7,y:351.3}).wait(1).to({graphics:mask_1_graphics_49,x:664.6,y:351.3}).wait(1).to({graphics:mask_1_graphics_50,x:671.6,y:351.3}).wait(1).to({graphics:mask_1_graphics_51,x:678.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_52,x:685.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_53,x:692.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_54,x:699.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_55,x:706.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_56,x:713.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_57,x:720.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_58,x:727.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_59,x:734.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_60,x:741.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_61,x:748.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_62,x:755,y:351.3}).wait(1).to({graphics:mask_1_graphics_63,x:762,y:351.3}).wait(1).to({graphics:mask_1_graphics_64,x:768.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_65,x:775.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_66,x:782.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_67,x:789.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_68,x:796.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_69,x:803.7,y:351.3}).wait(1).to({graphics:mask_1_graphics_70,x:810.7,y:351.3}).wait(1).to({graphics:mask_1_graphics_71,x:817.6,y:351.3}).wait(1).to({graphics:mask_1_graphics_72,x:824.6,y:351.3}).wait(1).to({graphics:mask_1_graphics_73,x:831.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_74,x:838.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_75,x:845.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_76,x:852.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_77,x:859.4,y:351.3}).wait(1).to({graphics:mask_1_graphics_78,x:866.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_79,x:873.3,y:351.3}).wait(1).to({graphics:mask_1_graphics_80,x:880.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_81,x:887.2,y:351.3}).wait(1).to({graphics:mask_1_graphics_82,x:894.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_83,x:901.1,y:351.3}).wait(1).to({graphics:mask_1_graphics_84,x:908,y:351.3}).wait(1).to({graphics:mask_1_graphics_85,x:915,y:351.3}).wait(1).to({graphics:mask_1_graphics_86,x:922,y:351.3}).wait(1).to({graphics:mask_1_graphics_87,x:928.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_88,x:935.9,y:351.3}).wait(1).to({graphics:mask_1_graphics_89,x:942.8,y:351.3}).wait(1).to({graphics:mask_1_graphics_90,x:690.7,y:206.3}).wait(90));

	// 63
	this.instance_1 = new lib.Image_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(547,290,0.24,0.24);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(150));

	// 34 mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EADKAgvIAA1JID+AAIAAVJg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AivKkIAA1HIFeAAIAAVHg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AjfKkIAA1HIG/AAIAAVHg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AkQKkIAA1HIIhAAIAAVHg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AlBKkIAA1HIKDAAIAAVHg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AlyKkIAA1HILlAAIAAVHg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AmiKkIAA1HINFAAIAAVHg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AnTKkIAA1HIOoAAIAAVHg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AoEKkIAA1HIQJAAIAAVHg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Ao1KkIAA1HIRrAAIAAVHg");
	var mask_2_graphics_10 = new cjs.Graphics().p("ApmKkIAA1HITNAAIAAVHg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AqXKkIAA1HIUvAAIAAVHg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ArHKkIAA1HIWPAAIAAVHg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Ar4KkIAA1HIXxAAIAAVHg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AspKkIAA1HIZTAAIAAVHg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AtaKkIAA1HIa1AAIAAVHg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AuLKkIAA1HIcXAAIAAVHg");
	var mask_2_graphics_17 = new cjs.Graphics().p("Au8KkIAA1HId5AAIAAVHg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AvsKkIAA1HIfZAAIAAVHg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AwdKkIAA1HMAg7AAAIAAVHg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AxOKkIAA1HMAidAAAIAAVHg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Ax/KkIAA1HMAj/AAAIAAVHg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AywKkIAA1HMAlhAAAIAAVHg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AzgKkIAA1HMAnBAAAIAAVHg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A0RKkIAA1HMAojAAAIAAVHg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A1CKkIAA1HMAqFAAAIAAVHg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A1yKkIAA1HMArmAAAIAAVHg");
	var mask_2_graphics_27 = new cjs.Graphics().p("A2jKkIAA1HMAtIAAAIAAVHg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A3UKkIAA1HMAupAAAIAAVHg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A4FKkIAA1HMAwLAAAIAAVHg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A42KkIAA1HMAxtAAAIAAVHg");
	var mask_2_graphics_31 = new cjs.Graphics().p("A5nKkIAA1HMAzPAAAIAAVHg");
	var mask_2_graphics_32 = new cjs.Graphics().p("A6XKkIAA1HMA0wAAAIAAVHg");
	var mask_2_graphics_33 = new cjs.Graphics().p("A7IKkIAA1HMA2RAAAIAAVHg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A75KkIAA1HMA3zAAAIAAVHg");
	var mask_2_graphics_35 = new cjs.Graphics().p("A8qKkIAA1HMA5VAAAIAAVHg");
	var mask_2_graphics_36 = new cjs.Graphics().p("A9bKkIAA1HMA63AAAIAAVHg");
	var mask_2_graphics_37 = new cjs.Graphics().p("A+MKkIAA1HMA8ZAAAIAAVHg");
	var mask_2_graphics_38 = new cjs.Graphics().p("A+8KkIAA1HMA95AAAIAAVHg");
	var mask_2_graphics_39 = new cjs.Graphics().p("A/tKkIAA1HMA/bAAAIAAVHg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EggeAKkIAA1HMBA9AAAIAAVHg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EghPAKkIAA1HMBCfAAAIAAVHg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgiAAKkIAA1HMBEAAAAIAAVHg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgixAKkIAA1HMBFjAAAIAAVHg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgjhAKkIAA1HMBHDAAAIAAVHg");
	var mask_2_graphics_45 = new cjs.Graphics().p("Egd3AgvIAA1JMBImAAAIAAVJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:45.7,y:209.5}).wait(1).to({graphics:mask_2_graphics_1,x:83.9,y:351.4}).wait(1).to({graphics:mask_2_graphics_2,x:89.1,y:351.4}).wait(1).to({graphics:mask_2_graphics_3,x:94.4,y:351.4}).wait(1).to({graphics:mask_2_graphics_4,x:99.6,y:351.4}).wait(1).to({graphics:mask_2_graphics_5,x:104.9,y:351.4}).wait(1).to({graphics:mask_2_graphics_6,x:110.1,y:351.4}).wait(1).to({graphics:mask_2_graphics_7,x:115.4,y:351.4}).wait(1).to({graphics:mask_2_graphics_8,x:120.6,y:351.4}).wait(1).to({graphics:mask_2_graphics_9,x:125.9,y:351.4}).wait(1).to({graphics:mask_2_graphics_10,x:131.1,y:351.4}).wait(1).to({graphics:mask_2_graphics_11,x:136.3,y:351.4}).wait(1).to({graphics:mask_2_graphics_12,x:141.6,y:351.4}).wait(1).to({graphics:mask_2_graphics_13,x:146.8,y:351.4}).wait(1).to({graphics:mask_2_graphics_14,x:152.1,y:351.4}).wait(1).to({graphics:mask_2_graphics_15,x:157.3,y:351.4}).wait(1).to({graphics:mask_2_graphics_16,x:162.6,y:351.4}).wait(1).to({graphics:mask_2_graphics_17,x:167.8,y:351.4}).wait(1).to({graphics:mask_2_graphics_18,x:173,y:351.4}).wait(1).to({graphics:mask_2_graphics_19,x:178.3,y:351.4}).wait(1).to({graphics:mask_2_graphics_20,x:183.5,y:351.4}).wait(1).to({graphics:mask_2_graphics_21,x:188.8,y:351.4}).wait(1).to({graphics:mask_2_graphics_22,x:194,y:351.4}).wait(1).to({graphics:mask_2_graphics_23,x:199.3,y:351.4}).wait(1).to({graphics:mask_2_graphics_24,x:204.5,y:351.4}).wait(1).to({graphics:mask_2_graphics_25,x:209.8,y:351.4}).wait(1).to({graphics:mask_2_graphics_26,x:215,y:351.4}).wait(1).to({graphics:mask_2_graphics_27,x:220.3,y:351.4}).wait(1).to({graphics:mask_2_graphics_28,x:225.5,y:351.4}).wait(1).to({graphics:mask_2_graphics_29,x:230.7,y:351.4}).wait(1).to({graphics:mask_2_graphics_30,x:236,y:351.4}).wait(1).to({graphics:mask_2_graphics_31,x:241.2,y:351.4}).wait(1).to({graphics:mask_2_graphics_32,x:246.5,y:351.4}).wait(1).to({graphics:mask_2_graphics_33,x:251.7,y:351.4}).wait(1).to({graphics:mask_2_graphics_34,x:257,y:351.4}).wait(1).to({graphics:mask_2_graphics_35,x:262.2,y:351.4}).wait(1).to({graphics:mask_2_graphics_36,x:267.4,y:351.4}).wait(1).to({graphics:mask_2_graphics_37,x:272.7,y:351.4}).wait(1).to({graphics:mask_2_graphics_38,x:277.9,y:351.4}).wait(1).to({graphics:mask_2_graphics_39,x:283.2,y:351.4}).wait(1).to({graphics:mask_2_graphics_40,x:288.4,y:351.4}).wait(1).to({graphics:mask_2_graphics_41,x:293.7,y:351.4}).wait(1).to({graphics:mask_2_graphics_42,x:298.9,y:351.4}).wait(1).to({graphics:mask_2_graphics_43,x:304.2,y:351.4}).wait(1).to({graphics:mask_2_graphics_44,x:309.4,y:351.4}).wait(1).to({graphics:mask_2_graphics_45,x:273.5,y:209.5}).wait(135));

	// 34
	this.instance_2 = new lib.Image_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91,290,0.24,0.24);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// animaciones
	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#918F90").s().p("Ehp/AIJIAAwRMDT/AAAIAAQRg");
	this.shape_483.setTransform(768.7,360.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_483).wait(180));

	// pop ups
	this.instance_3 = new lib.grafica7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2271.4,406.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125).to({_off:false},0).to({x:1684.9,y:414.8},33).to({x:1736.6},11).to({x:1715.4},5).wait(6));

	// pleca
	this.instance_4 = new lib.pleca7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-784.1,918.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({x:821.5},45).to({x:750.7},13).to({x:776.6},5).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1114.3,663.9,1357.9,653.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;