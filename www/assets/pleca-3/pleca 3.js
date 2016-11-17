(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1583,
	height: 166,
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



(lib.Pleca1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F89F5E").s().p("AryL8IAA33IShAAIAACMQAWCbBGCSQBHCUB4CCIApAsIgoAsQhhBthCB5QgeA2gXA3QgyB6gSB6IAACJg");
	this.shape.setTransform(-699.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F5E").s().p("Eh5VAMLIAA4VMDyrAAAIAAYVgEh45ALwMDxzAAAIAA3eMjxzAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AglAMIAAgHQAAhfAsAAQALAAAIAEIAAAQQgKgFgIAAQgaAAgCBBQAMgMALAAQAPAAAJANQALAMAAAbIAAACQgBAbgKAQQgLAQgQAAQglAAAAhPgAgUACIAAARQAAA6AUAAQAKAAAGgNQAFgMAAgTIAAgDQAAgTgGgLQgGgHgJAAQgIAAgMAJg");
	this.shape_2.setTransform(-178.5,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AAdCIQgOgVAAgkIAAgKQAAgjAOgWQANgTAXABQAWgBAOATQANAWAAAjIAAAKQAAAkgNAVQgOAVgWgBQgXABgNgVgAAzBFIAAAJQAAArAOAAQANAAAAgrIAAgJQAAgXgEgJQgDgKgGABQgOgBAAAqgAhWCaICOkzIAgAAIiPEzgAhkgLQgNgVAAgkIAAgKQAAgkANgVQAOgVAWAAQAXAAANAVQANAVAAAkIAAAKQAAAkgNAVQgNASgXABQgWgBgOgSgAhNhNIAAAJQAAAqANAAQANAAAAgqIAAgJQAAgrgNAAQgNAAAAArg");
	this.shape_3.setTransform(-195.8,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("Ag+CbIAAgtIA1h2QATgwAAgTQAAgMgHgHQgGgIgMAAQgUAAgUAMIAAgzQAYgNAcAAQAcAAASARQAUATgBAhIAAACQAAARgEASQgFARgOAfIgrBlIBBAAIAAA2g");
	this.shape_4.setTransform(-216.4,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("Ag9CbIAAgtIAzh2QAUgwAAgTQAAgMgHgHQgGgIgMAAQgUAAgVAMIAAgzQAZgNAbAAQAdAAASARQATATABAhIAAACQAAARgGASQgFAPgOAhIgqBlIBBAAIAAA2g");
	this.shape_5.setTransform(-231.6,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_6.setTransform(-254.2,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg/AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_7.setTransform(-269.4,28.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAmQAdAlAABKIAAAJQAABJgdAnQgbAlgzAAgAgYBoIADAAQAtAAAAhjIAAgJQAAhkgtAAIgDAAg");
	this.shape_8.setTransform(-287,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg/AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_9.setTransform(-312.7,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("Ag1CGQgWgZAAgvIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA1AAIAADZQAAAvgWAZQgUAWgiAAQghAAgUgWg");
	this.shape_10.setTransform(-330.6,29.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#58595B").s().p("Ag3CaIAAkzIBvAAIAAAzIg5AAIAABOIAxAAIAAAxIgxAAIAACBg");
	this.shape_11.setTransform(-347.3,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("Ag+CPIAAg4QAeARATAAQAaAAAAgaIAAgBQAAgLgFgKQgGgMgRgVQgegggJgRQgMgVAAgbIAAgBQAAgkAVgXQAVgVAfAAQAcAAATAJIAAA4QgYgOgRAAQgLAAgGAHQgIAHAAANIAAABQAAAKAFAJQAEAHATAXQAfAjAKAUQAKAUAAAaIAAABQAAAkgWAXQgWAWgeAAQgcAAgbgNg");
	this.shape_12.setTransform(-370.8,28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7kzIA4AAIA6EzgAgQAsIAfAAIgPhjg");
	this.shape_13.setTransform(-387.9,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AAeCaIg3ihIAAChIg0AAIAAkzIAyAAIA1CbIAAibIA0AAIAAEzg");
	this.shape_14.setTransform(-407.2,28.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA6kzIA4AAIA7EzgAgRAsIAgAAIgPhjg");
	this.shape_15.setTransform(-426.5,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("AAnCaIAAi5IgnBzIAAAAIgnhzIAAC5IgzAAIAAkzIA1AAIAlBxIAmhxIA1AAIAAEzg");
	this.shape_16.setTransform(-447.1,28.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("Ag7CaIAAkzIB1AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBBAAIAAAzg");
	this.shape_17.setTransform(-466,28.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("Ag+CPIAAg4QAeARATAAQAbAAAAgaIAAgBQAAgLgGgKQgGgMgQgVQgfgggJgRQgMgVAAgbIAAgBQAAgkAVgXQAVgVAfAAQAcAAAUAJIAAA4QgZgOgQAAQgMAAgGAHQgIAHAAANIAAABQAAAKAFAJQAEAGATAYQAfAjAKAUQAKAUAAAaIAAABQAAAkgWAXQgWAWgeAAQgcAAgbgNg");
	this.shape_18.setTransform(-481.7,28.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("Ag9CbIAAgtIAzh2QAUgwAAgTQAAgMgIgHQgFgIgMAAQgUAAgVAMIAAgzQAZgNAbAAQAdAAASARQATATABAhIAAACQAAARgGASQgEAPgPAhIgqBlIBBAAIAAA2g");
	this.shape_19.setTransform(-505.1,28.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7kzIA3AAIA7EzgAgQAsIAfAAIgPhjg");
	this.shape_20.setTransform(-530.3,28.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAcAmQAcAlAABKIAAAJQAABJgcAnQgcAlgyAAgAgYBoIACAAQAuAAAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_21.setTransform(-548.8,28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7kzIA3AAIA7EzgAgQAsIAfAAIgPhjg");
	this.shape_22.setTransform(-568.1,28.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAbgnQAXgjAnAAQAUAAAPAHIAAA3QgRgKgNAAQgTAAgLAUQgJAYAAA3IAAAJQAAA5AJAXQAKASAVAAQAOAAAQgJIAAA1QgRAJgXAAQglAAgXgjg");
	this.shape_23.setTransform(-585.4,28.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AgqBEQgSgYABgpIAAgGQgBgoASgZQAQgXAaAAQAbAAAQAXQASAZgBAoIAAAGQABApgSAYQgQAYgbAAQgaAAgQgYgAgkg8QgNAUAAAkIAAAIQAAAkANAVQAOAWAWAAQAXAAAOgWQANgVAAgkIAAgIQAAgkgNgUQgOgWgXAAQgWAAgOAWgAAIAvIgJgjIgDAAIAAAjIgRAAIAAhhIASAAQAbAAAAAgIAAABQAAARgLAHIANAogAgEgBIABAAQAKAAAAgQIAAgBQAAgPgLAAIAAAAg");
	this.shape_24.setTransform(616.6,-32.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgZCaIAAh6Ig6i5IA4AAIAbBzIAdhzIA3AAIg6C5IAAB6g");
	this.shape_25.setTransform(601.4,-24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAcAlQAcAmAABKIAAAJQAABJgcAmQgcAmgyAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_26.setTransform(583.8,-24.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgZCaIAAkzIA0AAIAAEzg");
	this.shape_27.setTransform(568.8,-24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQApAAAaAXQAbAaAAAxIAAAEQAAA0glAcIApB9gAgXgBIADAAQAnAAAAgxIAAgEQgBgxgoAAIgBAAg");
	this.shape_28.setTransform(555.2,-24.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AgvB5QgdgoAAhMIAAgJQAAhJAdgoQAbgmAuAAQAXAAARAJIAAA4QgWgOgRAAQgYAAgLAYQgNAZAAAxIAAANQAABjAsAAIAFAAIAAhPIgbAAIAAguIBMAAIAACiQgfANgaAAQgpAAgagjg");
	this.shape_29.setTransform(535.6,-24.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_30.setTransform(519.2,-24.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_31.setTransform(504.4,-24.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AhJCaIAAkzIAxAAQAsAAAaAZQAbAaABA1IAAABQAAAxgbAbQgYAagpADIAAAAIAABhgAgSAHIAAAAQASgBAJgLQALgOAAgcIAAAAQAAg4gkAAIgCAAg");
	this.shape_32.setTransform(488.2,-24.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AAeCaIg2iiIAACiIg1AAIAAkzIAyAAIA0CaIAAiaIA1AAIAAEzg");
	this.shape_33.setTransform(460.5,-24.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("Ag6B6QgWgogBhLIAAgOQABhKAWgnQAWgmAkABQAlgBAWAmQAWAnABBKIAAAOQgBBLgWAoQgWAlglAAQgkAAgWglgAgThXQgHAYAAA4IAAAOQAAA5AHAYQAHAVAMAAQANAAAHgVQAHgYAAg5IAAgOQAAg4gHgYQgHgVgNAAQgMAAgHAVg");
	this.shape_34.setTransform(440.7,-24.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAbgnQAXgjAmAAQAUAAAQAHIAAA4QgRgLgNAAQgTAAgLAVQgJAXAAA3IAAAJQAAA6AJAWQAKATAVAAQANAAARgKIAAA1QgQAJgYAAQglAAgXgjg");
	this.shape_35.setTransform(424,-24.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("Ag+CQIAAg5QAeASATAAQAaAAAAgbIAAgBQAAgLgFgKQgGgMgRgVQgegggJgQQgMgWAAgaIAAgBQAAglAVgWQAVgWAfAAQAdAAASAKIAAA4QgYgPgRAAQgLAAgGAHQgIAIAAAMIAAABQAAAKAFAJQAFAHASAXQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_36.setTransform(400.3,-24.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("Ag6B6QgXgoAAhLIAAgOQAAhKAXgnQAVgmAlABQAlgBAWAmQAXAnAABKIAAAOQAABLgXAoQgWAlglAAQglAAgVglgAgShXQgIAYAAA4IAAAOQAAA4AIAZQAGAVAMAAQANAAAGgVQAIgYAAg5IAAgOQAAg4gIgYQgGgVgNAAQgMAAgGAVg");
	this.shape_37.setTransform(382.9,-24.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAnAABJIAAAJQAABJgdAmQgbAmgzAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_38.setTransform(363.6,-24.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_39.setTransform(344.2,-24.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("AgaCaIAAkAIgmAAIAAgzICBAAIAAAzIgnAAIAAEAg");
	this.shape_40.setTransform(328.5,-24.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AAhCaIgKg9IgwAAIgJA9Ig0AAIA6k0IA4AAIA7E0gAgRAtIAgAAIgPhlg");
	this.shape_41.setTransform(312.7,-24.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAYAXQAbAaAAAxIAAAEQAAAzgkAdIAqB9gAgXgBIADAAQAmAAAAgxIAAgEQAAgxgnAAIgCAAg");
	this.shape_42.setTransform(294.7,-24.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("AgZCaIAAkAIgmAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_43.setTransform(277,-24.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("Ag+CQIAAg5QAeASATAAQANAAAFgGQAJgHAAgOIAAgBQAAgLgGgKQgGgLgRgWQgegggJgQQgNgWABgaIAAgBQAAglAVgWQAVgWAfAAQAdAAASAKIAAA4QgYgPgQAAQgMAAgGAHQgJAIABAMIAAABQgBAKAGAJQAEAHATAXQAfAjAKAUQALAUAAAbIAAABQgBAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_44.setTransform(253.6,-24.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA2AAIAAAxIg2AAIAABPIA/AAIAAAzg");
	this.shape_45.setTransform(238.2,-24.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("AgZCaIAAkAIgmAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_46.setTransform(222.4,-24.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzg");
	this.shape_47.setTransform(204.7,-24.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIA/AAIAAAzg");
	this.shape_48.setTransform(187.1,-24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AgZCaIAAkzIAzAAIAAEzg");
	this.shape_49.setTransform(174.1,-24.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAagnQAYgjAnAAQATAAAQAHIAAA4QgQgLgOAAQgTAAgKAVQgKAXAAA3IAAAJQAAA6AKAWQAJATAVAAQAOAAAQgKIAAA1QgQAJgYAAQgmAAgWgjg");
	this.shape_50.setTransform(161.3,-24.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_51.setTransform(144.4,-24.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AhICaIAAkzIAwAAQAsAAAZAZQAcAaAAA1IAAABQAAAxgaAbQgYAagpADIAAAAIAABhgAgSAHIAAAAQASgBAIgLQAMgOAAgcIAAAAQAAg4glAAIgBAAg");
	this.shape_52.setTransform(128,-24.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("Ag+CQIAAg5QAeASATAAQAaAAAAgbIAAgBQAAgLgFgKQgGgLgRgWQgegggJgQQgMgWAAgaIAAgBQAAglAVgWQAVgWAfAAQAdAAASAKIAAA4QgYgPgRAAQgLAAgGAHQgJAIAAAMIAAABQAAAKAGAJQAEAHATAXQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgeAAgZgMg");
	this.shape_53.setTransform(102.8,-24.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("Ag6B6QgWgoAAhLIAAgOQAAhKAWgnQAVgmAlABQAmgBAVAmQAXAnAABKIAAAOQAABLgXAoQgVAlgmAAQglAAgVglgAgShXQgIAYAAA4IAAAOQAAA5AIAYQAGAVAMAAQANAAAHgVQAHgYAAg5IAAgOQAAg4gHgYQgHgVgNAAQgMAAgGAVg");
	this.shape_54.setTransform(85.4,-24.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_55.setTransform(70,-24.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg/AAIAABNIA3AAIAAAxIg3AAIAABPIBAAAIAAAzg");
	this.shape_56.setTransform(46.7,-24.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAnAABJIAAAJQAABJgdAmQgbAmgzAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_57.setTransform(29.1,-24.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("Ag+CQIAAg5QAeASATAAQAaAAAAgbIAAgBQAAgLgFgKQgGgMgRgVQgegggJgQQgMgWAAgaIAAgBQAAglAVgWQAVgWAfAAQAcAAAUAKIAAA4QgOgIgIgDQgJgEgLAAQgLAAgGAHQgIAIAAAMIAAABQAAAKAFAJQAFAHASAXQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_58.setTransform(3.2,-24.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_59.setTransform(-13.9,-24.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAnAABJIAAAJQAABJgdAmQgbAmgzAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_60.setTransform(-32.8,-24.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgrDJIAAkzIA0AAIAAEzgAgjh8IAnhMIAoAVIgxA3g");
	this.shape_61.setTransform(-46,-28.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgJA9Ig1AAIA7k0IA4AAIA6E0gAgQAtIAfAAIgPhlg");
	this.shape_62.setTransform(-62,-24.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AglB5QgZgnAAhNIAAgJQAAhNAagnQAYgjAmAAQAUAAAQAHIAAA4QgRgLgNAAQgUAAgJAVQgKAXAAA3IAAAJQAAA6AKAWQAJATAVAAQANAAARgKIAAA1QgQAJgYAAQgmAAgWgjg");
	this.shape_63.setTransform(-79.3,-24.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("Ag7CaIAAkzIB1AAIAAAzIg/AAIAABNIA4AAIAAAxIg4AAIAABPIBBAAIAAAzg");
	this.shape_64.setTransform(-94.8,-24.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AAUCaIghhsIgKAAIAABsIg2AAIAAkzIA4AAQAqAAAZAXQAbAaAAAxIAAAEQAAA0glAcIApB9gAgXgBIADAAQAnAAAAgxIAAgEQgBgxgoAAIgBAAg");
	this.shape_65.setTransform(-111.7,-24.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("Ag6CaIAAkzIB0AAIAAAzIg+AAIAABNIA3AAIAAAxIg3AAIAABPIA/AAIAAAzg");
	this.shape_66.setTransform(-137.3,-24.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AhOCaIAAkzIAzAAQAyAAAbAlQAdAnAABJIAAAJQAABJgdAmQgbAmgyAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_67.setTransform(-154.9,-24.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA6k0IA4AAIA7E0gAgRAtIAgAAIgPhlg");
	this.shape_68.setTransform(-182.4,-24.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("AhOCaIAAkzIAyAAQAzAAAbAlQAdAnAABJIAAAJQAABJgdAmQgbAmgzAAgAgYBpIACAAQAugBAAhjIAAgJQAAhkguAAIgCAAg");
	this.shape_69.setTransform(-200.8,-24.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_70.setTransform(-220.2,-24.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AhACaIAAgrIBGjVIhDAAIAAgzIB+AAIAAArIhFDVIBFAAIAAAzg");
	this.shape_71.setTransform(-237.6,-24.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AgZCaIAAkzIAzAAIAAEzg");
	this.shape_72.setTransform(-250.5,-24.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_73.setTransform(-262.1,-24.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_74.setTransform(-279.1,-24.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("Ag1CFQgWgZAAguIAAjZIA1AAIAADeQAAAnAWAAQAXAAAAgnIAAjeIA1AAIAADZQAAAugVAZQgVAXgiAAQghAAgUgXg");
	this.shape_75.setTransform(-298,-23.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AAeCaIg3iiIAACiIg0AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzg");
	this.shape_76.setTransform(-317.7,-24.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA3AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_77.setTransform(-337,-24.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgJA9Ig1AAIA7k0IA4AAIA6E0gAgQAtIAfAAIgPhlg");
	this.shape_78.setTransform(-363.8,-24.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("Ag+CQIAAg5QAeASATAAQAaAAAAgbIAAgBQAAgLgFgKQgGgMgRgVQgegggJgQQgMgWAAgaIAAgBQAAglAVgWQAVgWAfAAQAcAAAUAKIAAA4QgOgIgIgDQgJgEgLAAQgLAAgGAHQgIAIAAAMIAAABQAAAKAFAJQAFAHASAXQAfAjAKAUQAKAUAAAbIAAABQAAAjgWAXQgWAWgeAAQgdAAgagMg");
	this.shape_79.setTransform(-380.7,-24.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AAhCaIgKg9IgwAAIgJA9Ig0AAIA6k0IA4AAIA7E0gAgRAtIAgAAIgPhlg");
	this.shape_80.setTransform(-397.8,-24.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgZCaIAAkAIgmAAIAAgzIB/AAIAAAzIgmAAIAAEAg");
	this.shape_81.setTransform(-413.6,-24.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA7k0IA4AAIA6E0gAgQAtIAfAAIgPhlg");
	this.shape_82.setTransform(-438.8,-24.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_83.setTransform(-454.6,-24.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AhACTIAAgzQAVAIASAAQARAAAJgMQALgMAAgTIAAgEQAAgsg0gEIAAghIAwhOIhEAAIAAg0IB7AAIAAAvIg0BRQA2ASAAA9IAAAFQAAAsgYAbQgYAagjAAQgaAAgUgIg");
	this.shape_84.setTransform(-478.2,-23.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("Ag6B6QgXgoABhLIAAgOQgBhKAXgnQAWgmAkABQAmgBAVAmQAXAngBBKIAAAOQABBLgXAoQgVAlgmAAQgkAAgWglgAgShXQgIAYAAA4IAAAOQAAA5AIAYQAGAVAMAAQANAAAGgVQAIgYAAg5IAAgOQAAg4gIgYQgGgVgNAAQgMAAgGAVg");
	this.shape_85.setTransform(-503.8,-24.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AAeC+Ig3ikIAACkIg0AAIAAkzIAyAAIA1CaIAAiaIA0AAIAAEzgAg8iKQADgZAMgNQAKgLANAAQAPAAANALQANAJAHAAQAGAAADgFQADgFADgMIAbAIQgCAZgMANQgLALgNAAQgOAAgPgLQgLgJgHAAQgGAAgDAFQgDAFgDAMg");
	this.shape_86.setTransform(-523.6,-27.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AAhCaIgLg9IguAAIgKA9Ig0AAIA6k0IA4AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_87.setTransform(-542.9,-24.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("Ag2CaIAAkzIA2AAIAAEAIA3AAIAAAzg");
	this.shape_88.setTransform(-567,-24.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AAhCaIgKg9IgvAAIgKA9Ig0AAIA6k0IA4AAIA7E0gAgQAtIAfAAIgPhlg");
	this.shape_89.setTransform(-584,-24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-776.6,-77.9,1553.2,155.9);


// stage content:
(lib.pleca3 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Pleca1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-779.7,82.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({x:802.6},30).to({x:734.8},14).to({x:776.6,loop:false},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;