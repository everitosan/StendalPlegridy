(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1596,
	height: 164,
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



(lib.pleca12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgrBEQgRgYAAgoIAAgHQAAgoARgYQARgYAaAAQAbAAARAYQARAYAAAoIAAAHQAAAogRAYQgRAYgbAAQgaAAgRgYgAgkg9QgOAWAAAkIAAAHQAAAkAOAVQAOAWAWAAQAXAAAOgWQAOgVAAgkIAAgHQAAgkgOgWQgOgVgXAAQgWAAgOAVgAAIAvIgJgiIgDAAIAAAiIgSAAIAAhhIASAAQAdAAAAAgIAAABQAAARgMAHIAOAogAgEgBIABAAQALAAAAgQIAAgBQAAgQgMAAIAAAAg");
	this.shape.setTransform(61.2,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgaCaIAAh6Ig5i5IA4AAIAbB0IAeh0IA2AAIg6C5IAAB6g");
	this.shape_1.setTransform(46,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAcAlQAcAmAABKIAAAJQAABKgcAmQgcAlgyAAgAgYBpIACAAQAuAAAAhkIAAgJQAAhkguAAIgCAAg");
	this.shape_2.setTransform(28.4,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgaCaIAAkzIA0AAIAAEzg");
	this.shape_3.setTransform(13.4,29.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_4.setTransform(-0.3,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgvB6QgdgoAAhNIAAgIQAAhKAdgoQAbgmAuAAQAUgBAVAKIAAA3QgYgMgPAAQgYgBgLAYQgOAZAAAxIAAANQAABjAsAAIAFAAIAAhPIgbAAIAAguIBMAAIAACiQgeAOgaAAQgqgBgagig");
	this.shape_5.setTransform(-19.9,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("Ag7CaIAAkzIB1AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBBAAIAAAzg");
	this.shape_6.setTransform(-36.3,29.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_7.setTransform(-51.1,29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AhJCaIAAkzIAxAAQAsAAAaAZQAcAbAAA0IAAABQAAAwgbAcQgYAagpADIgBAAIAABhgAgTAHIABAAQASgBAIgLQAMgOAAgbIAAgBQAAg4glAAIgCAAg");
	this.shape_8.setTransform(-67.4,29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIA/AAIAAAzg");
	this.shape_9.setTransform(-92.7,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ag+CQIAAg5QAdASAUAAQAMAAAGgGQAIgHAAgNIAAgBQAAgMgFgKQgHgLgQgVQgeghgKgRQgMgVABgaIAAgBQgBglAWgXQAVgVAeAAQAbgBAWALIAAA3QgagNgQAAQgLAAgGAGQgIAIAAAMIAAABQAAALAFAIQAEAHASAXQAhAjAKAUQAKAVgBAaIAAABQABAjgXAXQgWAXgeAAQgdAAgagNg");
	this.shape_10.setTransform(-108.4,29.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_11.setTransform(-125,29.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgJA+Ig1AAIA7k1IA4AAIA6E1gAgQAtIAfAAIgPhlg");
	this.shape_12.setTransform(-144.3,29.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_13.setTransform(-162.3,29.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgZCaIAAkAIgmAAIAAgzIB/AAIAAAzIglAAIAAEAg");
	this.shape_14.setTransform(-180,29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("Ag+CQIAAg5QAdASAUAAQAMAAAGgGQAIgHAAgNIAAgBQAAgMgFgKQgGgLgQgVQgfghgKgRQgMgVAAgaIAAgBQAAglAWgXQAVgVAfAAQAbgBAVALIAAA3QgagNgQAAQgMAAgFAGQgIAIgBAMIAAABQABALAFAIQAEAHASAXQAhAjAKAUQAKAVgBAaIAAABQABAjgXAXQgVAXgfAAQgdAAgagNg");
	this.shape_15.setTransform(-194.7,29.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AgZCaIAAkzIA0AAIAAEzg");
	this.shape_16.setTransform(-207.4,29.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AAfCaIg4iiIAACiIg0AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_17.setTransform(-222.3,29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgaCaIAAkzIA0AAIAAEzg");
	this.shape_18.setTransform(-237.3,29.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AAnCaIAAi5IgnBzIAAAAIgnhzIAAC5IgzAAIAAkzIA2AAIAkBxIAmhxIA1AAIAAEzg");
	this.shape_19.setTransform(-253.4,29.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAcAlQAcAmAABKIAAAJQAABKgcAmQgcAlgyAAgAgYBpIACAAQAuAAAAhkIAAgJQAAhkguAAIgCAAg");
	this.shape_20.setTransform(-274.3,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhlg");
	this.shape_21.setTransform(-293.7,29.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("Ag4AaIAAgzIBwAAIAAAzg");
	this.shape_22.setTransform(-310.1,31);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("Ag6B5QgXgnAAhLIAAgNQAAhLAXgnQAWgmAkAAQAmAAAVAmQAXAnAABLIAAANQAABLgXAnQgVAmgmAAQgkAAgWgmgAgShXQgIAYAAA5IAAANQAAA5AIAYQAGAVAMAAQANAAAHgVQAHgYAAg5IAAgNQAAg5gHgYQgHgVgNAAQgMAAgGAVg");
	this.shape_23.setTransform(-328,29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgaCaIAAkAIglAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_24.setTransform(-344.6,29.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("Ag1CGQgWgZAAgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA1AAIAADZQAAAvgWAZQgUAWgiAAQghAAgUgWg");
	this.shape_25.setTransform(-362.1,29.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhlg");
	this.shape_26.setTransform(-380.9,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA4AAIA6E1gAgQAtIAfAAIgPhlg");
	this.shape_27.setTransform(-407.7,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_28.setTransform(-425.8,29.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA4AAIA6E1gAgQAtIAfAAIgPhlg");
	this.shape_29.setTransform(-445.1,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AhICaIAAkzIAvAAQAtAAAZAZQAcAbAAA0IAAABQAAAwgaAcQgYAagpADIgBAAIAABhgAgTAHIABAAQARgBAJgLQALgOAAgbIAAgBQAAg4gkAAIgCAAg");
	this.shape_30.setTransform(-461.5,29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhlg");
	this.shape_31.setTransform(-488.5,29.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AglB6QgZgoAAhNIAAgIQAAhOAagnQAYgkAmABQAVAAAPAHIAAA4QgRgLgNABQgUgBgJAVQgKAYAAA2IAAAKQAAA5AKAXQAJASAVAAQAOAAAQgJIAAA1QgQAIgYABQglgBgXgig");
	this.shape_32.setTransform(-505.8,29.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AgaCaIAAkzIA0AAIAAEzg");
	this.shape_33.setTransform(-518.7,29.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzg");
	this.shape_34.setTransform(-533.6,29.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AglB6QgZgoAAhNIAAgIQAAhOAagnQAYgkAmABQAVAAAPAHIAAA4QgRgLgNABQgTgBgKAVQgKAYAAA2IAAAKQAAA5AKAXQAJASAVAAQAOAAAQgJIAAA1QgQAIgYABQgmgBgWgig");
	this.shape_35.setTransform(-551.6,29.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("Ag6DJIAAkzIB0AAIAAAzIg+AAIAABLIA3AAIAAA0Ig3AAIAABOIBAAAIAAAzgAgah8IAphNIAnAWIgyA3g");
	this.shape_36.setTransform(-567.1,24.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AgaCaIAAkAIglAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_37.setTransform(-583,29.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AAhCbIgKg+IgwAAIgJA+Ig0AAIA7k1IA3AAIA7E1gAgRAtIAgAAIgPhkg");
	this.shape_38.setTransform(644.5,-23.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgaCaIAAkAIgmAAIAAgzICBAAIAAAzIgnAAIAAEAg");
	this.shape_39.setTransform(628.7,-23.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAbgnQAXgjAmAAQAWAAAOAHIAAA3QgRgKgNAAQgTAAgLAUQgJAYAAA3IAAAJQAAA6AJAWQAKATAVAAQAOAAAQgKIAAA1QgQAJgYAAQglAAgXgjg");
	this.shape_40.setTransform(613,-23.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBAAAIAAAzg");
	this.shape_41.setTransform(597.9,-23.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAYAXQAbAZAAAyIAAAEQAAA0gkAcIAqB9gAgXAAIADAAQAmAAAAgyIAAgEQAAgxgoAAIgBAAg");
	this.shape_42.setTransform(581.1,-23.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQApAAAaAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQgBgxgoAAIgBAAg");
	this.shape_43.setTransform(562.4,-23.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("Ag6B5QgXgnAAhLIAAgNQAAhLAXgnQAWgmAkAAQAmAAAVAmQAXAnAABLIAAANQAABLgXAnQgVAmgmAAQgkAAgWgmgAgShXQgIAYAAA5IAAANQAAA5AIAYQAGAVAMAAQANAAAHgVQAHgYAAg5IAAgNQAAg5gHgYQgHgVgNAAQgMAAgGAVg");
	this.shape_44.setTransform(542.6,-23.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAbgnQAXgjAnAAQAVAAAOAHIAAA3QgRgKgNAAQgUAAgJAUQgKAYAAA3IAAAJQAAA5AKAXQAJATAVAAQAOAAAQgKIAAA1QgQAJgYAAQglAAgXgjg");
	this.shape_45.setTransform(525.9,-23.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_46.setTransform(500.4,-23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_47.setTransform(484.6,-23.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AAfCaIg3iiIAACiIg1AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzg");
	this.shape_48.setTransform(458.8,-23.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("Ag7CaIAAkzIB1AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBBAAIAAAzg");
	this.shape_49.setTransform(441.2,-23.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBBAAIAAAzg");
	this.shape_50.setTransform(417.5,-23.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AgaCaIAAkAIglAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_51.setTransform(401.6,-23.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_52.setTransform(383.9,-23.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA2AAIAAAxIg2AAIAABPIA/AAIAAAzg");
	this.shape_53.setTransform(366.4,-23.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgZCaIAAkzIA0AAIAAEzg");
	this.shape_54.setTransform(353.3,-23.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAagnQAYgjAnAAQAUAAAPAHIAAA3QgRgKgNAAQgUAAgJAUQgKAYAAA3IAAAJQAAA6AKAWQAJATAVAAQAOAAAQgKIAAA1QgQAJgYAAQgmAAgWgjg");
	this.shape_55.setTransform(340.4,-23.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_56.setTransform(323.5,-23.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AhICaIAAkzIAvAAQAtAAAZAZQAcAbAAA0IAAABQAAAwgaAcQgYAagpADIAAAAIAABhgAgSAHIAAAAQASgBAIgLQALgOAAgbIAAgBQAAg4gkAAIgBAAg");
	this.shape_57.setTransform(307.1,-23.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_58.setTransform(282.8,-23.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA6k1IA4AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_59.setTransform(265.8,-23.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_60.setTransform(239,-23.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgaCaIAAh6Ig5i5IA3AAIAcB0IAeh0IA2AAIg6C5IAAB6g");
	this.shape_61.setTransform(222.4,-23.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("Ag1CGQgXgZABgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA2AAIAADZQAAAvgXAZQgTAWgjAAQgiAAgTgWg");
	this.shape_62.setTransform(203.6,-23.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_63.setTransform(185.4,-23.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgaCaIAAkAIgmAAIAAgzICAAAIAAAzIgmAAIAAEAg");
	this.shape_64.setTransform(167.7,-23.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("Ag+CQIAAg4QAeARASAAQANAAAGgGQAJgHgBgOIAAgBQABgLgGgKQgGgLgRgWQgegggJgRQgNgVAAgbIAAgBQABgkAVgXQAVgVAfAAQAdAAASAJIAAA4QgYgOgRAAQgLAAgGAHQgJAHAAANIAAABQAAAKAGAJQAFAHASAXQAgAjAJAUQAKAUAAAbIAAABQAAAjgWAXQgVAWgfAAQgdAAgagMg");
	this.shape_65.setTransform(153,-23.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_66.setTransform(135.2,-23.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AgaCaIAAkzIA0AAIAAEzg");
	this.shape_67.setTransform(120.3,-23.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAmAABKIAAAJQAABKgdAmQgbAlgzAAgAgYBpIADAAQAtAAAAhkIAAgJQAAhkgtAAIgDAAg");
	this.shape_68.setTransform(97.7,-23.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("Ag1CGQgWgZAAgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA1AAIAADZQAAAvgVAZQgVAWgiAAQghAAgUgWg");
	this.shape_69.setTransform(77.9,-23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_70.setTransform(61.5,-23.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_71.setTransform(44.4,-23.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("Ag+CQIAAg4QAdARAUAAQAaAAAAgbIAAgBQAAgLgFgKQgGgLgRgWQgegggJgRQgMgVAAgbIAAgBQAAgkAVgXQAVgVAfAAQAcAAATAJIAAA4QgYgOgRAAQgLAAgGAHQgIAHAAANIAAABQAAAKAFAJQAFAIASAWQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_72.setTransform(27.4,-23.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_73.setTransform(2.1,-23.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_74.setTransform(-13.9,-23.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA2AAIAAAxIg2AAIAABPIA/AAIAAAzg");
	this.shape_75.setTransform(-37.3,-23.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAcAlQAcAmAABKIAAAJQAABKgcAmQgcAlgyAAgAgYBpIACAAQAuAAAAhkIAAgJQAAhkguAAIgCAAg");
	this.shape_76.setTransform(-55,-23.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_77.setTransform(-79.8,-23.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA3AAIA7E1gAgQAtIAfAAIgPhkg");
	this.shape_78.setTransform(-96.8,-23.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("AAfCaIg4iiIAACiIg0AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzg");
	this.shape_79.setTransform(-116.2,-23.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("Ag6B5QgXgnAAhLIAAgNQAAhLAXgnQAVgmAlAAQAmAAAVAmQAXAnAABLIAAANQAABLgXAnQgVAmgmAAQglAAgVgmgAgShXQgIAYAAA5IAAANQAAA5AIAYQAGAVAMAAQANAAAGgVQAIgYAAg5IAAgNQAAg5gIgYQgGgVgNAAQgMAAgGAVg");
	this.shape_80.setTransform(-136,-23.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgZCaIAAkzIA0AAIAAEzg");
	this.shape_81.setTransform(-150.7,-23.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("Ag+CQIAAg4QAeARATAAQAaAAAAgbIAAgBQAAgLgFgKQgGgMgRgVQgegggJgRQgMgVAAgbIAAgBQAAgkAVgXQAVgVAfAAQAcAAAUAJIAAA4QgZgOgRAAQgLAAgGAHQgIAHAAANIAAABQAAAKAFAJQAFAHASAXQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_82.setTransform(-163.3,-23.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIA/AAIAAAzg");
	this.shape_83.setTransform(-178.7,-23.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("Ag3CaIAAkzIBvAAIAAAzIg5AAIAABOIAxAAIAAAxIgxAAIAACBg");
	this.shape_84.setTransform(-193.8,-23.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("Ag6B5QgXgnAAhLIAAgNQAAhLAXgnQAVgmAlAAQAlAAAWAmQAXAnAABLIAAANQAABLgXAnQgWAmglAAQglAAgVgmgAgagGIAAANQAABmAaAAQANAAAGgVQAIgYAAg5IAAgNQAAg5gIgYQgGgVgNAAQgaAAAABmg");
	this.shape_85.setTransform(-211.4,-23.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AAUCaIgghsIgLAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_86.setTransform(-230,-23.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AhICaIAAkzIAwAAQArAAAbAZQAcAbgBA0IAAABQAAAwgaAcQgYAagpADIAAAAIAABhgAgSAHIAAAAQASgBAIgLQALgOAAgbIAAgBQAAg4gkAAIgBAAg");
	this.shape_87.setTransform(-248.5,-23.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AAeCaIg2iiIAACiIg1AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_88.setTransform(-276.1,-23.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("Ag2CGQgWgZABgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA2AAIAADZQAAAvgXAZQgTAWgjAAQghAAgVgWg");
	this.shape_89.setTransform(-295.9,-23.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_90.setTransform(-321.3,-23.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("Ag1CGQgWgZAAgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA1AAIAADZQAAAvgWAZQgUAWgiAAQghAAgUgWg");
	this.shape_91.setTransform(-339.2,-23.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AAnCKQgSAUgYAAQgnAAgVgmQgXgnAAhLIAAgOQAAhKAXgnQAVgmAmAAQAkAAAWAmQAWAnAABKIAAAOQAAA9gQAmIAbAaIgbAdgAgYhZQgHAZAAA4IAAAOQAAA9AIAXQAHATAQAAQAEAAAEgEIgZgaIAXgcIANAOQADgYAAgjIAAgOQAAhlgagBQgNABgHAUg");
	this.shape_92.setTransform(-358.6,-23.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AAhCbIgKg+IgvAAIgKA+Ig0AAIA7k1IA4AAIA6E1gAgQAtIAfAAIgPhkg");
	this.shape_93.setTransform(-386.4,-23.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAmAABKIAAAJQAABKgdAmQgbAlgzAAgAgYBpIACAAQAuAAAAhkIAAgJQAAhkguAAIgCAAg");
	this.shape_94.setTransform(-404.8,-23.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_95.setTransform(-424.9,-23.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_96.setTransform(-442.5,-23.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#58595B").s().p("AgZCaIAAkzIAzAAIAAEzg");
	this.shape_97.setTransform(-455.5,-23.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#58595B").s().p("AAoCaIAAi5IgoBzIAAAAIgmhzIAAC5Ig0AAIAAkzIA1AAIAlBxIAlhxIA2AAIAAEzg");
	this.shape_98.setTransform(-471.7,-23.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#58595B").s().p("Ag6B5QgXgnAAhLIAAgNQAAhLAXgnQAVgmAlAAQAmAAAVAmQAXAnAABLIAAANQAABLgXAnQgVAmgmAAQglAAgVgmgAgShXQgIAYAAA5IAAANQAAA5AIAYQAGAVAMAAQANAAAGgVQAIgYAAg5IAAgNQAAg5gIgYQgGgVgNAAQgMAAgGAVg");
	this.shape_99.setTransform(-492.8,-23.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAagnQAYgjAmAAQAWAAAOAHIAAA3QgRgKgNAAQgUAAgJAUQgKAYAAA3IAAAJQAAA6AKAWQAJATAVAAQAOAAAQgKIAAA1QgQAJgYAAQgmAAgWgjg");
	this.shape_100.setTransform(-509.5,-23.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("Ag6CaIAAkzIB1AAIAAAzIg/AAIAABNIA2AAIAAAxIg2AAIAABPIA/AAIAAAzg");
	this.shape_101.setTransform(-524.6,-23.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AAVCaIghhsIgLAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAZAAAyIAAAEQAAA0glAcIAqB9gAgXAAIADAAQAnAAAAgyIAAgEQAAgxgoAAIgCAAg");
	this.shape_102.setTransform(-541.5,-23.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("Ag7CaIAAkzIB1AAIAAAzIg/AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_103.setTransform(-567.1,-23.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("Ag+CQIAAg4QAdARAUAAQAMAAAGgGQAJgHAAgOIAAgBQgBgLgFgKQgGgLgRgWQgegggKgRQgLgVAAgbIAAgBQAAgkAVgXQAVgVAfAAQAdAAASAJIAAA4QgYgOgQAAQgMAAgGAHQgJAHABANIAAABQgBAKAGAJQAFAHASAXQAfAjALAUQAJAUABAbIAAABQgBAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_104.setTransform(-582.9,-23.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F89F5E").s().p("AryL8IAA33IShAAIAACMQAWCbBGCSQBHCUB4CCIApAsIgoAsQhfBrhEB7QgeA2gXA3QgyB6gSB6IAACJg");
	this.shape_105.setTransform(-699.7,-0.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F89F5E").s().p("Eh5VAMLIAA4VMDyrAAAIAAYVgEh45ALwMDxzAAAIAA3eMjxzAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776.6,-77.9,1553.2,155.9);


// stage content:
(lib.pleca12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_479 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(479).call(this.frame_479).wait(1));

	// pleca
	this.instance = new lib.pleca12_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-774.7,81.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({x:845.4},60).to({x:725.9},14).to({x:812.6,y:77.9},8).to({x:776.6},5).wait(273));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;