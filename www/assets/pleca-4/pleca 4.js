(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1591,
	height: 165,
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



(lib.pleca4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgjAMIAAgHQgBhdAsAAQAKAAAIAEIAAAQQgKgEgIAAQgLgBgIARQgIAQAAAfQALgMAKAAQAPAAAJAMQAKAMAAAaIAAADQABAZgLAQQgLAQgPAAQgkAAABhNgAgTACIAAAQQgBA4AUAAQAJAAAHgMQAFgLAAgTIAAgCQAAgTgGgLQgGgGgJgBQgJABgKAIg");
	this.shape.setTransform(-135.4,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAkQAcAmAABHIAAAJQAABIgcAlQgbAkgxAAgAgXBmIACAAQAsAAAAhhIAAgJQAAhhgsAAIgCAAg");
	this.shape_1.setTransform(-148.8,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AAgCXIgKg9IgtAAIgKA9IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_2.setTransform(-167.7,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAkQAcAmAABHIAAAJQAABIgcAlQgbAkgxAAgAgXBmIACAAQAsAAAAhhIAAgJQAAhhgsAAIgCAAg");
	this.shape_3.setTransform(-185.6,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AgZCWIAAkrIAzAAIAAErg");
	this.shape_4.setTransform(-200.2,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgkB2QgYgmAAhLIAAgJQAAhLAZgmQAXgiAmAAQAUAAAOAHIAAA2QgRgKgMAAQgmAAAABgIAAAJQAAA4AJAWQAKASAUAAQANAAAQgJIAAAzQgPAJgYAAQgkAAgWgig");
	this.shape_5.setTransform(-212.7,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AAgCXIgKg9IgtAAIgKA9IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_6.setTransform(-229.2,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("AhHCWIAAkrIAvAAQAsAAAZAYQAaAaAAAzIAAABQABAvgaAcQgYAZgnADIgBAAIAABegAgSAHIABAAQARgBAIgLQALgOAAgaIAAgBQAAg2gkAAIgBAAg");
	this.shape_7.setTransform(-245.1,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AAgCXIgKg9IguAAIgJA9IgzAAIA5ktIA2AAIA6EtgAgQAsIAeAAIgOhig");
	this.shape_8.setTransform(-263.5,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("AgkB2QgYgmAAhLIAAgJQAAhLAZgmQAXgiAmAAQAUAAAOAHIAAA2QgRgKgMAAQgmAAAABgIAAAJQAAA4AJAWQAKASAUAAQANAAAQgJIAAAzQgPAJgYAAQgkAAgWgig");
	this.shape_9.setTransform(-280.3,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ag8CMIAAg3QAdARASAAQAMAAAFgGQAJgHAAgNIAAgBQAAgKgFgKQgHgMgQgUQgcgfgKgRQgMgVAAgaIAAAAQAAgkAWgWQATgVAfAAQAbAAATAJIAAA3QgYgOgQAAQgMAAgFAHQgIAHAAAMIAAABQAAAKAFAIQAFAIARAWQAfAiAKATQAJAUAAAaIAAABQABAigWAXQgVAVgeAAQgcAAgZgMg");
	this.shape_10.setTransform(-295.3,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AgZCWIAAkrIAzAAIAAErg");
	this.shape_11.setTransform(-307.7,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAkQAcAmAABHIAAAJQAABIgcAlQgbAkgxAAgAgXBmIACAAQAsAAAAhhIAAgJQAAhhgsAAIgCAAg");
	this.shape_12.setTransform(-321.8,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AAgCXIgKg9IgtAAIgKA9IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_13.setTransform(-348.6,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("Ag0CWIAAkrIA0AAIAAD5IA1AAIAAAyg");
	this.shape_14.setTransform(-363.9,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAyIg9AAIAABLIA1AAIAAAwIg1AAIAABMIA+AAIAAAyg");
	this.shape_15.setTransform(-386.7,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAkQAcAmAABHIAAAJQAABIgcAlQgbAkgxAAgAgXBmIACAAQAsAAAAhhIAAgJQAAhhgsAAIgCAAg");
	this.shape_16.setTransform(-403.9,28.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AAdCWIg1idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_17.setTransform(-431.3,28.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("Ag5CiQgWgnAAhIIAAgQQAAhGAWgnQAVgkAkAAQAkAAAWAkQAWAnAABGIAAAQQAABIgWAnQgWAkgkAAQgkAAgVgkgAgZAjIAAAQQAABjAZAAQAMAAAHgVQAHgXAAg3IAAgQQAAg1gHgXQgHgVgMAAQgZAAAABhgAgXh7IAnhKIAmAUIgxA2g");
	this.shape_18.setTransform(-450.6,24.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgZCWIAAkrIAzAAIAAErg");
	this.shape_19.setTransform(-465,28.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("Ag8CMIAAg3QAeARARAAQAMAAAGgGQAIgHAAgNIAAgBQAAgLgFgJQgGgMgQgUQgdgfgKgRQgMgVABgaIAAAAQAAgkAUgWQAVgVAeAAQAbAAATAJIAAA3QgXgOgRAAQgLAAgGAHQgIAHAAAMIAAABQAAAKAFAIQAFAHASAXQAeAiAKATQAKAUgBAaIAAABQAAAigVAXQgWAVgdAAQgcAAgZgMg");
	this.shape_20.setTransform(-477.2,28.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAyIg9AAIAABLIA1AAIAAAwIg1AAIAABMIA+AAIAAAyg");
	this.shape_21.setTransform(-492.2,28.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAUCWIgghpIgKAAIAABpIg1AAIAAkrIA3AAQAoAAAYAWQAaAZAAAxIAAAEQAAAygjAbIApB6gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_22.setTransform(-508.6,28.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AgtB2QgdgnAAhKIAAgJQAAhHAcgnQAbglAsAAQAWAAASAIIAAA3QgVgNgRAAQgYAAgKAXQgOAZAAAvIAAANQAABhArAAIAFgBIAAhNIgaAAIAAgtIBKAAIAACeQgdANgaAAQgoAAgZgig");
	this.shape_23.setTransform(-527.7,28.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("Ag4B2QgXgnAAhIIAAgNQAAhJAXgnQAVgjAjgBQAkABAWAjQAVAnAABJIAAANQAABIgVAnQgWAlgkAAQgjAAgVglgAgShVQgIAXAAA4IAAANQAAA3AIAXQAGAVAMAAQANAAAGgVQAHgXAAg3IAAgNQAAg3gHgYQgGgUgNAAQgMAAgGAUg");
	this.shape_24.setTransform(-546.3,28.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AAUCWIgghpIgKAAIAABpIg1AAIAAkrIA2AAQApAAAYAWQAaAZAAAxIAAAEQAAAygjAbIApB6gAgWAAIACAAQAmAAAAgxIAAgDQAAgwgnAAIgBAAg");
	this.shape_25.setTransform(-564.4,28.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AhGCWIAAkrIAvAAQAqAAAaAYQAbAaAAAzIAAABQAAAvgaAcQgXAZgoADIgBAAIAABegAgSAHIABAAQARgBAIgLQALgOAAgaIAAgBQAAg2gjAAIgCAAg");
	this.shape_26.setTransform(-582.5,28.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AAdCWIg1idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_27.setTransform(684.8,-23);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("Ag5B2QgVgngBhIIAAgNQABhJAVgmQAVglAkAAQAlAAAUAlQAXAmAABJIAAANQAABIgXAnQgUAlglAAQgkAAgVglgAgShVQgHAYgBA3IAAANQABA3AHAXQAHAVALAAQAMAAAGgVQAIgYAAg2IAAgNQAAhkgaABQgLAAgHAUg");
	this.shape_28.setTransform(665.7,-23);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AAUCWIgghpIgKAAIAABpIg1AAIAAkrIA3AAQAoAAAYAWQAbAZAAAxIAAAEQAAAygkAbIApB6gAgWgBIACAAQAmAAAAgwIAAgDQAAgwgnAAIgBAAg");
	this.shape_29.setTransform(647.8,-23);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AAgCXIgKg8IgtAAIgKA8IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_30.setTransform(629.2,-23);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AAUCWIghhpIgJAAIAABpIg1AAIAAkrIA2AAQApAAAZAWQAaAZAAAxIAAAEQgBAygiAbIAnB6gAgWgBIACAAQAmAAAAgwIAAgDQAAgwgnAAIgBAAg");
	this.shape_31.setTransform(611.8,-23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgZCWIAAj6IglAAIAAgxIB9AAIAAAxIglAAIAAD6g");
	this.shape_32.setTransform(594.8,-23);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("Ag8CMIAAg3QAcARATAAQAaAAAAgaIAAgBQAAgLgFgJQgGgMgQgVQgegfgJgQQgMgVAAgaIAAgBQAAgjAVgWQAVgVAeAAQAbgBATAKIAAA3QgYgOgQAAQgMAAgFAHQgIAHAAAMIAAAAQAAALAFAIQAEAHASAXQAfAiAKATQAKATAAAbIAAABQAAAigWAXQgVAVgeAAQgaAAgbgMg");
	this.shape_33.setTransform(580.1,-23);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("Ag5B2QgWgnABhIIAAgNQgBhJAWgmQAWglAjAAQAkAAAVAlQAWAmAABJIAAANQAABIgWAnQgVAlgkAAQgjAAgWglgAgShVQgIAYABA3IAAANQgBA3AIAXQAHAVALAAQAMAAAHgVQAHgXAAg3IAAgNQAAg3gHgYQgHgUgMAAQgLAAgHAUg");
	this.shape_34.setTransform(563.1,-23);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AAmCWIAAi0IgmBwIAAAAIgmhwIAAC0IgyAAIAAkrIA0AAIAkBuIAlhuIAzAAIAAErg");
	this.shape_35.setTransform(542.8,-23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("Ag5B2QgVgnAAhIIAAgNQAAhJAVgmQAWglAjAAQAlAAAUAlQAXAmAABJIAAANQAABIgXAnQgUAlglAAQgjAAgWglgAgShVQgIAYABA3IAAANQgBA3AIAXQAHAVALAAQANAAAGgVQAHgXAAg3IAAgNQAAg3gHgYQgGgUgNAAQgLAAgHAUg");
	this.shape_36.setTransform(514.7,-23);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AAeCWIg2idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_37.setTransform(495.6,-23);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("Ag9CMIAAg3QAeARASAAQAMAAAGgGQAIgHAAgNIAAgBQAAgLgFgJQgGgMgQgVQgdgfgKgQQgMgVABgaIAAgBQgBgjAVgWQAVgVAeAAQAbgBATAKIAAA3QgXgOgRAAQgMAAgFAHQgIAHAAAMIAAAAQAAALAFAIIAWAeQAfAiAKATQAKATgBAbIAAABQAAAigVAXQgVAVgeAAQgaAAgcgMg");
	this.shape_38.setTransform(470.9,-23);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AAgCXIgKg8IguAAIgJA8IgzAAIA6ktIA2AAIA4EtgAgPAsIAdAAIgOhig");
	this.shape_39.setTransform(454.4,-23);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AAeCWIg2idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_40.setTransform(435.8,-23);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AAgCXIgKg8IgtAAIgKA8IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_41.setTransform(417.1,-23);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AAmCWIAAi0IgmBwIAAAAIglhwIAAC0IgyAAIAAkrIA0AAIAjBuIAlhuIA0AAIAAErg");
	this.shape_42.setTransform(397.3,-23);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAxIg9AAIAABMIA1AAIAAAvIg1AAIAABNIA+AAIAAAyg");
	this.shape_43.setTransform(379.1,-23);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("Ag8CMIAAg3QAcARATAAQAMAAAGgGQAIgHAAgNIAAgBQAAgLgFgJQgGgMgQgVQgegfgJgQQgMgVAAgaIAAgBQAAgjAVgWQAVgVAeAAQAbgBATAKIAAA3QgYgOgQAAQgLAAgGAHQgIAHAAAMIAAAAQAAALAFAIQAEAHASAXQAfAiAKATQAKATAAAbIAAABQAAAigWAXQgVAVgeAAQgaAAgbgMg");
	this.shape_44.setTransform(364,-23);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("Ag8CXIAAgsIAzhyQASgvAAgTQAAgMgGgHQgGgHgMAAQgTAAgUAMIAAgzQAagMAZAAQAbAAASARQATASAAAgIAAACQAAARgFARQgFARgOAeIgpBjIA/AAIAAA0g");
	this.shape_45.setTransform(341.6,-23.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AAgCXIgKg8IgtAAIgKA8IgzAAIA6ktIA2AAIA5EtgAgQAsIAfAAIgPhig");
	this.shape_46.setTransform(317.4,-23);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAlQAcAlAABHIAAAIQAABIgcAlQgbAlgxAAgAgXBmIACAAQAsAAAAhiIAAgIQAAhhgsAAIgCAAg");
	this.shape_47.setTransform(299.3,-23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AAgCXIgKg8IguAAIgJA8IgzAAIA5ktIA2AAIA6EtgAgQAsIAeAAIgOhig");
	this.shape_48.setTransform(280.6,-23);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgkB2QgYgmAAhMIAAgIQAAhLAagmQAXgjAlABQATAAAQAGIAAA3QgRgKgNAAQgTAAgJATQgKAYAAA1IAAAJQAAA4AKAWQAJASAUAAQAOAAAPgJIAAAzQgQAJgWAAQglAAgWgig");
	this.shape_49.setTransform(263.9,-23);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgpBCQgRgXAAgnIAAgHQAAgnARgYQAQgXAZAAQAaAAAQAXQARAYAAAnIAAAHQAAAngRAXQgQAYgaAAQgZAAgQgYgAgjg7QgNAVAAAjIAAAHQAAAjANAVQANAVAWAAQAXAAANgVQANgVAAgjIAAgHQAAgjgNgVQgNgVgXAAQgWAAgNAVgAAIAuIgJgiIgDAAIAAAiIgRAAIAAhfIARAAQAcAAAAAfIAAACQAAAQgLAHIANAngAgEgBIABAAQAKAAAAgPIAAgBQAAgQgLAAIAAAAg");
	this.shape_50.setTransform(241.9,-31);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgZCWIAAh3Ig4i0IA2AAIAbBwIAdhwIA1AAIg4C0IAAB3g");
	this.shape_51.setTransform(226.3,-23);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAlQAcAlAABHIAAAIQAABIgcAlQgbAlgxAAgAgXBmIACAAQAsAAAAhiIAAgIQAAhhgsAAIgCAAg");
	this.shape_52.setTransform(208.5,-23);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgZCWIAAkrIAzAAIAAErg");
	this.shape_53.setTransform(194.1,-23);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AAUCWIgghpIgKAAIAABpIg1AAIAAkrIA3AAQApAAAYAWQAaAZAAAxIAAAEQAAAygkAbIApB6gAgWgBIADAAQAlAAAAgwIAAgDQAAgwgnAAIgBAAg");
	this.shape_54.setTransform(181,-23);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgtB2QgdgnAAhLIAAgIQAAhHAcgnQAbgmAsABQAVgBATAJIAAA3QgVgNgSAAQgXAAgKAXQgNAZAAAvIAAANQgBBgAsAAIAEAAIAAhNIgaAAIAAgtIBKAAIAACeQgfANgYAAQgoAAgZgig");
	this.shape_55.setTransform(162.1,-23);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("Ag5CWIAAkrIBxAAIAAAxIg8AAIAABMIA1AAIAAAvIg1AAIAABNIA+AAIAAAyg");
	this.shape_56.setTransform(145.9,-23);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("Ag0CWIAAkrIA0AAIAAD5IA2AAIAAAyg");
	this.shape_57.setTransform(131.7,-23);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AhHCWIAAkrIAvAAQArAAAZAYQAbAaAAAzIAAABQAAAvgZAcQgYAYgoAEIAAAAIAABegAgSAHIAAAAQASgBAIgLQALgOAAgaIAAgBQAAg3gkAAIgBAAg");
	this.shape_58.setTransform(116.1,-23);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AAeCWIg2idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_59.setTransform(89.5,-23);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("Ag4B2QgXgnAAhIIAAgNQAAhJAXgmQAUglAkAAQAkAAAWAlQAVAmABBJIAAANQgBBIgVAnQgWAlgkAAQgkAAgUglgAgShVQgHAYAAA3IAAANQAAA3AHAXQAGAVAMAAQAMAAAHgVQAHgXAAg3IAAgNQAAg3gHgYQgHgUgMAAQgMAAgGAUg");
	this.shape_60.setTransform(70.4,-23);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgkB2QgYgmAAhMIAAgIQAAhLAZgmQAXgjAmABQATAAAPAGIAAA3QgQgKgNAAQgTAAgKATQgJAYAAA1IAAAJQAAA4AKAWQAJASAUAAQANAAAQgJIAAAzQgQAJgXAAQgkAAgWgig");
	this.shape_61.setTransform(53.3,-23);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("Ag9CMIAAg3QAdARATAAQAMAAAFgGQAJgHAAgNIAAgBQAAgLgFgJQgHgMgQgVQgdgfgJgQQgMgVABgaIAAgBQgBgjAWgWQATgVAfAAQAbgBATAKIAAA3QgYgOgQAAQgMAAgFAHQgIAHAAAMIAAAAQAAALAFAIQAFAIARAWQAfAiAKATQAJATAAAbIAAABQABAigWAXQgVAVgeAAQgbAAgbgMg");
	this.shape_62.setTransform(30.6,-23);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("Ag4B2QgXgnAAhIIAAgNQAAhJAXgmQAUglAkAAQAlAAAUAlQAXAmAABJIAAANQAABIgXAnQgUAlglAAQgkAAgUglgAgRhVQgIAYAAA3IAAANQAAA3AIAXQAFAVAMAAQAMAAAHgVQAHgXAAg3IAAgNQAAg3gHgYQgHgUgMAAQgMAAgFAUg");
	this.shape_63.setTransform(13.6,-23);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAlQAcAlAABHIAAAIQAABIgcAlQgbAlgxAAgAgXBmIACAAQAsAAAAhiIAAgIQAAhhgsAAIgCAAg");
	this.shape_64.setTransform(-5,-23);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AAgCXIgKg8IguAAIgJA8IgzAAIA5ktIA2AAIA6EtgAgQAsIAeAAIgOhig");
	this.shape_65.setTransform(-23.7,-23);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AgZCWIAAj6IglAAIAAgxIB9AAIAAAxIglAAIAAD6g");
	this.shape_66.setTransform(-40.1,-23);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AAgCXIgKg8IgtAAIgKA8IgzAAIA6ktIA1AAIA6EtgAgQAsIAfAAIgPhig");
	this.shape_67.setTransform(-56.5,-23);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AAUCWIgghpIgKAAIAABpIg1AAIAAkrIA3AAQApAAAYAWQAaAZAAAxIAAAEQAAAygkAbIApB6gAgWgBIADAAQAlAAAAgwIAAgDQAAgwgnAAIgBAAg");
	this.shape_68.setTransform(-73.9,-23);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AgZCWIAAj6IglAAIAAgxIB9AAIAAAxIglAAIAAD6g");
	this.shape_69.setTransform(-90.9,-23);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("Ag8CMIAAg3QAcARATAAQAMAAAGgGQAIgHAAgNIAAgBQAAgLgFgJQgGgMgQgVQgdgfgKgQQgLgVgBgaIAAgBQABgjAUgWQAVgVAdAAQAcgBATAKIAAA3QgXgOgRAAQgLAAgGAHQgIAHAAAMIAAAAQAAALAGAIQAEAHARAXQAfAiAKATQAKATAAAbIAAABQgBAigVAXQgWAVgdAAQgaAAgbgMg");
	this.shape_70.setTransform(-113.3,-23);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAxIg9AAIAABMIA1AAIAAAvIg1AAIAABNIA+AAIAAAyg");
	this.shape_71.setTransform(-128.1,-23);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgZCWIAAj6IglAAIAAgxIB9AAIAAAxIglAAIAAD6g");
	this.shape_72.setTransform(-143.3,-23);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AAeCWIg2idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_73.setTransform(-160.3,-23);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAxIg9AAIAABMIA1AAIAAAvIg1AAIAABNIA+AAIAAAyg");
	this.shape_74.setTransform(-177.2,-23);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AgZCWIAAkrIAzAAIAAErg");
	this.shape_75.setTransform(-189.7,-23);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgkB2QgYgmAAhMIAAgIQAAhLAagmQAXgjAlABQATAAAQAGIAAA3QgRgKgNAAQgTAAgJATQgKAYAAA1IAAAJQAAA4AKAWQAJASAUAAQAOAAAPgJIAAAzQgQAJgWAAQglAAgWgig");
	this.shape_76.setTransform(-202.1,-23);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AAgCXIgKg8IguAAIgJA8IgzAAIA5ktIA2AAIA6EtgAgQAsIAeAAIgOhig");
	this.shape_77.setTransform(-218.7,-23);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AhHCWIAAkrIAvAAQArAAAaAYQAbAaAAAzIAAABQAAAvgaAcQgYAYgoAEIAAAAIAABegAgSAHIAAAAQASgBAIgLQALgOAAgaIAAgBQAAg3gjAAIgCAAg");
	this.shape_78.setTransform(-236,-23);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("Ag8CMIAAg3QAcARATAAQAMAAAFgGQAJgHAAgNIAAgBQAAgLgFgJQgHgMgQgVQgdgfgJgQQgMgVAAgaIAAgBQAAgjAWgWQAUgVAeAAQAbgBATAKIAAA3QgOgIgHgCQgJgEgKAAQgMAAgFAHQgIAHAAAMIAAAAQAAALAFAIQAFAIARAWQAfAiAKATQAJATAAAbIAAABQABAigWAXQgVAVgeAAQgbAAgagMg");
	this.shape_79.setTransform(-260.2,-23);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("Ag5B2QgWgnAAhIIAAgNQAAhJAWgmQAVglAkAAQAkAAAWAlQAWAmAABJIAAANQAABIgWAnQgWAlgkAAQgkAAgVglgAgZgGIAAANQAABjAZAAQAMAAAHgVQAHgXAAg3IAAgNQAAg3gHgYQgHgUgMAAQgZgBAABkg");
	this.shape_80.setTransform(-277.2,-23);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("Ag0CWIAAkrIA0AAIAAD5IA2AAIAAAyg");
	this.shape_81.setTransform(-293,-23);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("Ag5CWIAAkrIByAAIAAAxIg9AAIAABMIA1AAIAAAvIg1AAIAABNIA+AAIAAAyg");
	this.shape_82.setTransform(-315.4,-23);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AhMCWIAAkrIAxAAQAxAAAbAlQAcAlAABHIAAAIQAABIgcAlQgbAlgxAAgAgXBmIACAAQAtAAAAhiIAAgIQAAhhgtAAIgCAAg");
	this.shape_83.setTransform(-332.4,-23);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AAcCFQgNgVAAgjIAAgJQAAgjANgVQANgSAWAAQAWAAAOASQANAVgBAjIAAAJQABAjgNAVQgNAUgXAAQgWAAgNgUgAAyBEIAAAJQAAApANAAQAHAAADgIQADgKAAgXIAAgJQAAgXgDgJQgDgJgHAAQgNAAAAApgAhUCWICLkrIAeAAIiKErgAhhgLQgNgUgBgjIAAgKQABgjANgUQANgVAWAAQAVAAAOAVQANAUAAAjIAAAKQAAAjgNAUQgNASgWAAQgWAAgNgSgAhLhLIAAAIQAAAqANAAQAGAAADgJQADgKAAgXIAAgIQAAgXgDgKQgDgJgGAAQgNAAAAAqg");
	this.shape_84.setTransform(-362.4,-23);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("Ag2B4QgTgjAAhOIAAgNQAAhOATgjQASgjAkAAQBKAAAACUIAAANQAACThKABQgkAAgSgjgAgOhYQgIAXAAA7IAAANQAAA7AIAWQAEASAKAAQAKAAAFgSQAHgWAAg7IAAgNQAAg7gHgXQgFgRgKAAQgKAAgEARg");
	this.shape_85.setTransform(-384,-23);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("Ag2CRIAAgyQAVALAOAAQATAAAIgPQALgSABgnQgPANgRABQgZgBgOgTQgRgYAAgtIAAgHQAAgwATgdQATgcAeAAQAjABARAgQARAiAABKIAAAJQAABWgYAmQgTAggnAAQgUAAgVgIgAgUgxIAAAGQAAAvAVAAQAKAAAJgGIAAgnQAAhAgUAAQgTAAgBA4g");
	this.shape_86.setTransform(-401.4,-23.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AAeCWIg2idIAACdIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErg");
	this.shape_87.setTransform(-427,-23);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("Ag0CCQgVgYAAguIAAjTIA0AAIAADYQAAAmAVAAQAWAAAAgmIAAjYIA0AAIAADTQAAAugVAYQgTAWgiAAQggAAgUgWg");
	this.shape_88.setTransform(-446,-22.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AghArQAWgFAJgPQAFgMgCgPIgZAAIAAg7IA6AAIAAAxQAAAggRAVQgQAVgdAEg");
	this.shape_89.setTransform(-468.7,-7.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("Ag+CPIAAgxQAUAHASABQAQAAAIgMQALgMAAgTIAAgEQAAgqgygEIAAghIAvhMIhCAAIAAgzIB4AAIAAAvIg0BOQA1ASAAA8IAAAFQAAArgYAaQgWAagigBQgZABgUgJg");
	this.shape_90.setTransform(-480.9,-22.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("Ag4B2QgXgnAAhIIAAgNQAAhJAXgmQAUglAkAAQAkAAAWAlQAVAmAABJIAAANQAABIgVAnQgWAlgkAAQgkAAgUglgAgShVQgHAYAAA3IAAANQAAA3AHAXQAHAVALAAQAMAAAHgVQAHgXAAg3IAAgNQAAg3gHgYQgHgUgMAAQgLAAgHAUg");
	this.shape_91.setTransform(-505.5,-23);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AAdC5Ig1igIAACgIgzAAIAAkrIAxAAIAzCWIAAiWIAzAAIAAErgAg6iHQACgYAMgMQAKgLANAAQANAAAOALQAMAIAIAAQAFAAADgFQACgEADgMIAbAIQgBAYgMAMQgLALgNAAQgOAAgOgKQgLgJgHAAQgGAAgCAFIgGAQg");
	this.shape_92.setTransform(-524.6,-26.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AAgCXIgKg8IgtAAIgKA8IgzAAIA6ktIA1AAIA6EtgAgQAsIAfAAIgPhig");
	this.shape_93.setTransform(-543.2,-23);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("Ag0CWIAAkrIA0AAIAAD5IA2AAIAAAyg");
	this.shape_94.setTransform(-566.3,-23);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AAgCXIgKg8IguAAIgJA8IgzAAIA5ktIA2AAIA6EtgAgQAsIAfAAIgPhig");
	this.shape_95.setTransform(-582.7,-23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F89F5E").s().p("AryL8IAA33IShAAIAACMQAWCbBGCSQBHCTB4CDIApAsIgoAsQhfBqhEB7QgfA5gWA1QgyB6gSB6IAACJg");
	this.shape_96.setTransform(-699.7,-0.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F89F5E").s().p("Eh5VAMLIAA4VMDyrAAAIAAYVgEh45ALvMDxzAAAIAA3dMjxzAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776.6,-77.9,1553.2,156);


// stage content:
(lib.pleca4 = function(mode,startPosition,loop) {
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
	this.instance = new lib.pleca4_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-777.7,83.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({x:810.7},34).to({x:740.6},12).to({x:776.6},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;