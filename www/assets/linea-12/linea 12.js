(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1433,
	height: 449,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/linea 12_atlas_.png", id:"linea 12_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"linea 12_atlas_", frames: [[335,0,332,532],[0,0,333,532],[669,0,332,532]]}
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
	this.spriteSheet = ss["linea 12_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["linea 12_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["linea 12_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.punto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgmAnQgRgQAAgXQAAgWARgRQAQgQAWAAQAXAAARAQQAQARAAAWQAAAXgQAQQgRARgXAAQgWAAgQgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.4);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghlALoIAA3PMBDLAAAIAAXPg");
	mask.setTransform(215,74.5);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("EggqAKxIAA1hMBBVAAAIAAVhg");
	this.shape.setTransform(218.3,71.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.1,2.6,418.4,137.9);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5aP3IAA/tMAy1AAAIAAftg");
	mask.setTransform(162.7,101.5);

	// Capa 3
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,203.1,0.612,0.612,-90);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.4,203.1);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+6LKIAA2TMA91AAAIAAWTg");
	mask.setTransform(198,71.5);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F09E53").s().p("A+hKxIAA1hMA9DAAAIAAVhg");
	this.shape.setTransform(198,71.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,2.6,390.8,137.9);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5aP4IAA/vMAy1AAAIAAfvg");
	mask.setTransform(162.7,101.7);

	// Capa 3
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,203.4,0.611,0.612,-90);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,325.4,203.4);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+6LKIAA2TMA91AAAIAAWTg");
	mask.setTransform(198,71.5);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6AB1E1").s().p("A+hKxIAA1hMA9DAAAIAAVhg");
	this.shape.setTransform(198,71.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,2.6,390.8,137.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5aP3IAA/tMAy1AAAIAAftg");
	mask.setTransform(162.7,101.5);

	// Capa 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,203.1,0.612,0.612,-90);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.4,203.1);


(lib.resalte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.punto("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:862.5},80).to({y:427.2},40).to({x:0},80).to({y:0},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.4);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(198,71.5,1,1,0,0,0,198,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,395.9,143);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(198,71.5,1,1,0,0,0,198,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396,143);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(215,74.5,1,1,0,0,0,215,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,430,148.9);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5APdIAA+5MAyBAAAIAAe5g");
	mask.setTransform(162.7,101.5);

	// Capa 3
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(162.7,101.5,1,1,0,0,0,162.7,101.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,2.6,320.3,197.9);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/PdIAA+5MAyAAAAIAAe5g");
	mask.setTransform(162.7,101.5);

	// Capa 3
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(162.7,101.5,1,1,0,0,0,162.7,101.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,2.6,320.2,197.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5APdIAA+5MAyAAAAIAAe5g");
	mask.setTransform(162.8,101.8);

	// Capa 3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(162.7,101.7,1,1,0,0,0,162.7,101.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,2.9,320.2,197.9);


// stage content:
(lib.linea12 = function(mode,startPosition,loop) {
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

	// punto
	this.punto = new lib.resalte();
	this.punto.parent = this;
	this.punto.setTransform(118.8,10.3);

	this.timeline.addTween(cjs.Tween.get(this.punto).wait(480));

	// linea4 mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_100 = new cjs.Graphics().p("EAIPAiHIAAg6IBZAAIAAA6g");
	var mask_graphics_101 = new cjs.Graphics().p("AgrCHIAAkNIBXAAIAAENg");
	var mask_graphics_102 = new cjs.Graphics().p("AgrDxIAAnhIBXAAIAAHhg");
	var mask_graphics_103 = new cjs.Graphics().p("AgrFbIAAq1IBXAAIAAK1g");
	var mask_graphics_104 = new cjs.Graphics().p("AgrHFIAAuJIBXAAIAAOJg");
	var mask_graphics_105 = new cjs.Graphics().p("AgrIvIAAxdIBXAAIAARdg");
	var mask_graphics_106 = new cjs.Graphics().p("AgrKZIAA0xIBXAAIAAUxg");
	var mask_graphics_107 = new cjs.Graphics().p("AgrMDIAA4FIBXAAIAAYFg");
	var mask_graphics_108 = new cjs.Graphics().p("AgrNtIAA7ZIBXAAIAAbZg");
	var mask_graphics_109 = new cjs.Graphics().p("AgrPXIAA+tIBXAAIAAetg");
	var mask_graphics_110 = new cjs.Graphics().p("AgrRBMAAAgiBIBXAAMAAAAiBg");
	var mask_graphics_111 = new cjs.Graphics().p("AgrSrMAAAglVIBXAAMAAAAlVg");
	var mask_graphics_112 = new cjs.Graphics().p("AgrUVMAAAgopIBXAAMAAAAopg");
	var mask_graphics_113 = new cjs.Graphics().p("AgrV/MAAAgr9IBXAAMAAAAr9g");
	var mask_graphics_114 = new cjs.Graphics().p("AgrXpMAAAgvRIBXAAMAAAAvRg");
	var mask_graphics_115 = new cjs.Graphics().p("AgrZTMAAAgylIBXAAMAAAAylg");
	var mask_graphics_116 = new cjs.Graphics().p("Agra9MAAAg15IBXAAMAAAA15g");
	var mask_graphics_117 = new cjs.Graphics().p("AgrcnMAAAg5OIBXAAMAAAA5Og");
	var mask_graphics_118 = new cjs.Graphics().p("AgreRMAAAg8hIBXAAMAAAA8hg");
	var mask_graphics_119 = new cjs.Graphics().p("Agrf8MAAAg/2IBXAAMAAAA/2g");
	var mask_graphics_120 = new cjs.Graphics().p("EAIPAiKMAAAhDLIBZAAMAAABDLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_graphics_100,x:61.7,y:218.4}).wait(1).to({graphics:mask_graphics_101,x:118.9,y:423.3}).wait(1).to({graphics:mask_graphics_102,x:118.9,y:412.7}).wait(1).to({graphics:mask_graphics_103,x:118.9,y:402.1}).wait(1).to({graphics:mask_graphics_104,x:118.9,y:391.6}).wait(1).to({graphics:mask_graphics_105,x:118.9,y:381}).wait(1).to({graphics:mask_graphics_106,x:118.9,y:370.4}).wait(1).to({graphics:mask_graphics_107,x:118.9,y:359.8}).wait(1).to({graphics:mask_graphics_108,x:118.9,y:349.2}).wait(1).to({graphics:mask_graphics_109,x:118.9,y:338.6}).wait(1).to({graphics:mask_graphics_110,x:118.9,y:328.1}).wait(1).to({graphics:mask_graphics_111,x:118.9,y:317.5}).wait(1).to({graphics:mask_graphics_112,x:118.9,y:306.9}).wait(1).to({graphics:mask_graphics_113,x:118.9,y:296.3}).wait(1).to({graphics:mask_graphics_114,x:118.9,y:285.7}).wait(1).to({graphics:mask_graphics_115,x:118.9,y:275.1}).wait(1).to({graphics:mask_graphics_116,x:118.9,y:264.5}).wait(1).to({graphics:mask_graphics_117,x:118.9,y:254}).wait(1).to({graphics:mask_graphics_118,x:118.9,y:243.4}).wait(1).to({graphics:mask_graphics_119,x:118.9,y:232.8}).wait(1).to({graphics:mask_graphics_120,x:61.7,y:218.6}).wait(360));

	// linea4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgMf5QgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMeFQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMcRQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMadQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMYpQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMW1QgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMVCQgGgGABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMTOQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMRaQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMPmQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMNyQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgML+QgGgFABgIQgBgJAGgFQAFgGAHAAQAHAAAGAGQAFAFABAJQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMKKQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMIWQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMGiQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMEvQgGgGABgIQgBgIAGgFQAFgFAHgBQAHABAGAFQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMC7QgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMBHQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMgrQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMifQgGgFABgIQgBgIAGgGQAFgGAHAAQAHAAAGAGQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMkTQgGgFABgIQgBgIAGgGQAFgGAHABQAHgBAGAGQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMmHQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMn7QgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMpuQgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMriQgGgGABgIQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAIgFAGQgGAGgHgBQgHABgFgGgAgMtWQgGgGABgIQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAIgFAGQgGAGgHgBQgHABgFgGgAgMvKQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMw+QgGgGABgHQgBgJAGgFQAFgGAHAAQAHAAAGAGQAFAFABAJQgBAHgFAGQgGAGgHAAQgHAAgFgGgAgMyyQgGgGABgHQgBgJAGgFQAFgGAHABQAHgBAGAGQAFAFABAJQgBAHgFAGQgGAFgHABQgHgBgFgFgAgM0mQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgM2aQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgM4NQgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgM6BQgGgGABgIQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAIgFAGQgGAGgHgBQgHABgFgGgAgM71QgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgM9pQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgM/dQgGgGABgHQgBgJAGgFQAFgGAHAAQAHAAAGAGQAFAFABAJQgBAHgFAGQgGAGgHAAQgHAAgFgGg");
	this.shape.setTransform(118.6,224.3);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100).to({_off:false},0).wait(380));

	// Linea3 mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_60 = new cjs.Graphics().p("AgcAsIAAhXIA5AAIAABXg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AiIAsIAAhXIERAAIAABXg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Aj1AsIAAhXIHrAAIAABXg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AliAsIAAhXILFAAIAABXg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AnPAsIAAhXIOfAAIAABXg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Ao7AsIAAhXIR3AAIAABXg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AqoAsIAAhXIVRAAIAABXg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AsVAsIAAhXIYrAAIAABXg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AuBAsIAAhXIcDAAIAABXg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AvuAsIAAhXIfdAAIAABXg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AxbAsIAAhXMAi3AAAIAABXg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AzIAsIAAhXMAmQAAAIAABXg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A00AsIAAhXMAppAAAIAABXg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A2hAsIAAhXMAtDAAAIAABXg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A4NAsIAAhXMAwbAAAIAABXg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A56AsIAAhXMAz1AAAIAABXg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A7nAsIAAhXMA3PAAAIAABXg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A9UAsIAAhXMA6pAAAIAABXg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A/BAsIAAhXMA+DAAAIAABXg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EggtAAsIAAhXMBBbAAAIAABXg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgiaAAsIAAhXMBE1AAAIAABXg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgkGAAsIAAhXMBINAAAIAABXg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EglzAAsIAAhXMBLnAAAIAABXg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgngAAsIAAhXMBPBAAAIAABXg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgpNAAsIAAhXMBSaAAAIAABXg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Egq5AAsIAAhXMBVzAAAIAABXg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgsmAAsIAAhXMBZNAAAIAABXg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EguTAAsIAAhXMBcnAAAIAABXg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Egv/AAsIAAhXMBf/AAAIAABXg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgxsAAsIAAhXMBjZAAAIAABXg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgzZAAsIAAhXMBmzAAAIAABXg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Eg1GAAsIAAhXMBqNAAAIAABXg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Eg2yAAsIAAhXMBtlAAAIAABXg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Eg4fAAsIAAhXMBw/AAAIAABXg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Eg6MAAsIAAhXMB0ZAAAIAABXg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Eg74AAsIAAhXMB3xAAAIAABXg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eg9lAAsIAAhXMB7LAAAIAABXg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Eg/SAAsIAAhXMB+lAAAIAABXg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EhA+AAsIAAhXMCB9AAAIAABXg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EhCrAAsIAAhXMCFXAAAIAABXg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EhEYAAsIAAhXMCIxAAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_1_graphics_60,x:986,y:439.2}).wait(1).to({graphics:mask_1_graphics_61,x:975.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_62,x:964.3,y:439.2}).wait(1).to({graphics:mask_1_graphics_63,x:953.5,y:439.2}).wait(1).to({graphics:mask_1_graphics_64,x:942.7,y:439.2}).wait(1).to({graphics:mask_1_graphics_65,x:931.8,y:439.2}).wait(1).to({graphics:mask_1_graphics_66,x:921,y:439.2}).wait(1).to({graphics:mask_1_graphics_67,x:910.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_68,x:899.4,y:439.2}).wait(1).to({graphics:mask_1_graphics_69,x:888.6,y:439.2}).wait(1).to({graphics:mask_1_graphics_70,x:877.7,y:439.2}).wait(1).to({graphics:mask_1_graphics_71,x:866.9,y:439.2}).wait(1).to({graphics:mask_1_graphics_72,x:856.1,y:439.2}).wait(1).to({graphics:mask_1_graphics_73,x:845.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_74,x:834.4,y:439.2}).wait(1).to({graphics:mask_1_graphics_75,x:823.6,y:439.2}).wait(1).to({graphics:mask_1_graphics_76,x:812.8,y:439.2}).wait(1).to({graphics:mask_1_graphics_77,x:801.9,y:439.2}).wait(1).to({graphics:mask_1_graphics_78,x:791.1,y:439.2}).wait(1).to({graphics:mask_1_graphics_79,x:780.3,y:439.2}).wait(1).to({graphics:mask_1_graphics_80,x:769.5,y:439.2}).wait(1).to({graphics:mask_1_graphics_81,x:758.6,y:439.2}).wait(1).to({graphics:mask_1_graphics_82,x:747.8,y:439.2}).wait(1).to({graphics:mask_1_graphics_83,x:737,y:439.2}).wait(1).to({graphics:mask_1_graphics_84,x:726.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_85,x:715.3,y:439.2}).wait(1).to({graphics:mask_1_graphics_86,x:704.5,y:439.2}).wait(1).to({graphics:mask_1_graphics_87,x:693.7,y:439.2}).wait(1).to({graphics:mask_1_graphics_88,x:682.8,y:439.2}).wait(1).to({graphics:mask_1_graphics_89,x:672,y:439.2}).wait(1).to({graphics:mask_1_graphics_90,x:661.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_91,x:650.4,y:439.2}).wait(1).to({graphics:mask_1_graphics_92,x:639.5,y:439.2}).wait(1).to({graphics:mask_1_graphics_93,x:628.7,y:439.2}).wait(1).to({graphics:mask_1_graphics_94,x:617.9,y:439.2}).wait(1).to({graphics:mask_1_graphics_95,x:607.1,y:439.2}).wait(1).to({graphics:mask_1_graphics_96,x:596.2,y:439.2}).wait(1).to({graphics:mask_1_graphics_97,x:585.4,y:439.2}).wait(1).to({graphics:mask_1_graphics_98,x:574.6,y:439.2}).wait(1).to({graphics:mask_1_graphics_99,x:563.8,y:439.2}).wait(1).to({graphics:mask_1_graphics_100,x:552.9,y:439.2}).wait(380));

	// linea3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("EBDKAANQgFgFAAgIQAAgGAFgGQAHgGAIAAQAHAAAGAGQAFAGABAGQgBAHgFAGQgGAGgHAAQgIAAgHgGgEBBXAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAHgGAGQgGAGgHAAQgJAAgFgGgEA/kAANQgFgGAAgHQAAgGAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAGQAAAHgFAGQgFAGgJAAQgIAAgFgGgEA9xAANQgFgGgBgHQABgGAFgGQAGgGAHAAQAJAAAFAGQAGAGgBAGQABAHgGAGQgFAGgJAAQgHAAgGgGgEA7+AANQgGgGAAgHQAAgGAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgJAAQgHAAgGgGgEA6LAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAHgGAGQgGAGgHAAQgJAAgFgGgEA4YAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAHgGAGQgGAGgHAAQgJAAgFgGgEA2lAANQgFgFgBgIQABgGAFgGQAGgGAIAAQAHAAAHAGQAFAGAAAGQAAAHgFAGQgHAGgHAAQgIAAgGgGgEA0yAANQgGgFAAgIQAAgGAGgGQAGgGAIAAQAIAAAFAGQAGAGgBAGQABAIgGAFQgFAGgIAAQgIAAgGgGgEAy/AANQgGgGAAgHQAAgGAGgGQAFgGAJAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgEAxMAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgEAvZAANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAHAAAHAGQAFAGAAAGQAAAHgFAGQgHAGgHAAQgIAAgGgGgEAtmAANQgFgFgBgIQABgGAFgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgEArzAANQgGgFAAgIQAAgGAGgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgIAAgGgGgEAqAAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgEAoNAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAHgGAGQgGAGgHAAQgJAAgFgGgEAmaAANQgFgFgBgIQABgGAFgGQAGgGAIAAQAHAAAHAGQAFAGAAAGQAAAHgFAGQgHAGgHAAQgIAAgGgGgEAknAANQgGgFAAgIQAAgGAGgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgEAi0AANQgGgGAAgHQAAgGAGgGQAFgGAJAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgEAhBAANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgAfPANQgHgGABgHQgBgGAHgGQAFgGAHAAQAJAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgJAAQgHAAgFgGgAdbANQgFgFgBgIQABgGAFgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgAboANQgGgFAAgIQAAgGAGgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgAZ1ANQgGgGABgHQgBgGAGgGQAFgGAJAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgJAAgFgGgAYCANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgIAAgGgGgAWQANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAHAAAHAGQAFAGAAAGQAAAHgFAGQgHAGgHAAQgIAAgFgGgAUcANQgGgFAAgIQAAgGAGgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgASpANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAQ2ANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAPEANQgHgGABgHQgBgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgANRANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgALdANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgAJqANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAH3ANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgIAAgGgGgAGFANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAESANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgACeANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAArANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAhFANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAi4ANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAksANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgGgGgAmfANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAoSANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAqEANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAr3ANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAtrANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAveANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgAxQANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgAzDANQgHgGAAgHQAAgGAHgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgA03ANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgA2qANQgFgFAAgIQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgA4dANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgA6PANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgA8CANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgA92ANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgA/pANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEghbAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgjOAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEglCAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEgm1AANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEgooAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEgqaAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgsNAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEguBAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEgv0AANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEgxmAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgzZAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg1NAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGABAGQgBAHgGAGQgFAGgIAAQgIAAgGgGgEg3AAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAHAGAAAGQAAAHgHAGQgFAGgIAAQgIAAgGgGgEg4zAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEg6lAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg8YAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg+MAANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAHAGAAAGQAAAHgHAGQgFAGgIAAQgIAAgGgGgEg//AANQgFgGAAgHQAAgGAFgGQAGgGAIAAQAIAAAFAGQAGAGAAAGQAAAHgGAGQgFAGgIAAQgIAAgGgGgEhBxAANQgGgGAAgHQAAgGAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAGQAAAHgFAGQgGAGgIAAQgIAAgFgGgEhDlAANQgFgGgBgHQABgGAFgGQAGgGAHAAQAJAAAFAGQAGAGgBAGQABAHgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_1.setTransform(549.9,438.7);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60).to({_off:false},0).wait(420));

	// linea2 mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_40 = new cjs.Graphics().p("EBLlABZIAAg7IBZAAIAAA7g");
	var mask_2_graphics_41 = new cjs.Graphics().p("AAkCFIAAgBIhPh+IAAiKIAHAAIBQB+IAACLg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AAhDuIAAgCIhMj7IAAjeIAMAAIBLD7IAADgg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AAcFWIAAgCIgBgGIhGl0IAAkvIAQAAIBHF4IAAEzg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AAYG+IAAgCIhDn4IAAmBIAUAAIBDH2IAAGFg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AATInIAAgEIg+p2IAAnTIAYAAIA/J0IAAHZg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AAPKPIAAgEIg6r1IAAokIAdAAIA6LyIAAIrg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AALL4IAAgFIg2tzIAAp3IAhAAIA2NxIAAJ+g");
	var mask_2_graphics_48 = new cjs.Graphics().p("AAHNgIgyv3IAArIIAlAAIAyPuIAALRg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AADPJIgux3IAAsaIAqAAIAtRtIAAMkg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AAAQxIgrz2IAAtrIAsAAIArTqIAAN3g");
	var mask_2_graphics_51 = new cjs.Graphics().p("AgESZIgn11IAAu8IAxAAIAmVoIAAPJg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AgJUCIgi31IAAwOIA0AAIAjXmIAAQdg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AgNVrIge50IAAxhIA5AAIAeZlIAARwg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AgRXTIga7zIAAyyIA9AAIAabjIAATCg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AgVY8IgW9yIAA0FIBCAAIAVdhIAAUWg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AgaakIgR/xIAA1WIBGAAIARffIAAVog");
	var mask_2_graphics_57 = new cjs.Graphics().p("AgecMMgANghwIAA2nIBKAAMAANAhcIAAW7g");
	var mask_2_graphics_58 = new cjs.Graphics().p("Agjd1MgAIgjwIAA35IBOAAMAAJAjbIAAYOg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AgmfdMgAFg+5IBTAAMAAEA+5g");
	var mask_2_graphics_60 = new cjs.Graphics().p("EBLlAilIAAgOIAAglMAAAhBXIBZAAMAAABBXIAAAlIAAAOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_2_graphics_40,x:492.6,y:8.9}).wait(1).to({graphics:mask_2_graphics_41,x:980.8,y:25.7}).wait(1).to({graphics:mask_2_graphics_42,x:980.8,y:36.5}).wait(1).to({graphics:mask_2_graphics_43,x:980.8,y:47.3}).wait(1).to({graphics:mask_2_graphics_44,x:980.8,y:58.1}).wait(1).to({graphics:mask_2_graphics_45,x:980.8,y:68.9}).wait(1).to({graphics:mask_2_graphics_46,x:980.8,y:79.7}).wait(1).to({graphics:mask_2_graphics_47,x:980.8,y:90.5}).wait(1).to({graphics:mask_2_graphics_48,x:980.8,y:101.3}).wait(1).to({graphics:mask_2_graphics_49,x:980.8,y:112.1}).wait(1).to({graphics:mask_2_graphics_50,x:980.8,y:122.9}).wait(1).to({graphics:mask_2_graphics_51,x:980.8,y:133.7}).wait(1).to({graphics:mask_2_graphics_52,x:980.8,y:144.5}).wait(1).to({graphics:mask_2_graphics_53,x:980.8,y:155.3}).wait(1).to({graphics:mask_2_graphics_54,x:980.8,y:166.1}).wait(1).to({graphics:mask_2_graphics_55,x:980.8,y:176.9}).wait(1).to({graphics:mask_2_graphics_56,x:980.8,y:187.7}).wait(1).to({graphics:mask_2_graphics_57,x:980.8,y:198.5}).wait(1).to({graphics:mask_2_graphics_58,x:980.8,y:209.3}).wait(1).to({graphics:mask_2_graphics_59,x:980.8,y:220.1}).wait(1).to({graphics:mask_2_graphics_60,x:492.6,y:221.4}).wait(420));

	// linea2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AgMf5QgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMeFQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMcRQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMaeQgGgGABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAGQgGAFgHAAQgHAAgFgFgAgMYpQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMW1QgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMVBQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMTOQgGgGABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMRaQgGgFABgJQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAJgFAFQgGAFgHAAQgHAAgFgFgAgMPmQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMNyQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgML+QgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMKKQgGgFABgIQgBgIAGgGQAFgGAHAAQAHAAAGAGQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMIWQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMGiQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMEuQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMC7QgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMBHQgGgGABgIQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAIgFAGQgGAGgHgBQgHABgFgGgAgMgrQgGgFABgJQgBgHAGgGQAFgFAHgBQAHABAGAFQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMifQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMkTQgGgGABgHQgBgJAGgFQAFgGAHAAQAHAAAGAGQAFAFABAJQgBAHgFAGQgGAGgHAAQgHAAgFgGgAgMmHQgGgFABgIQgBgIAGgGQAFgGAHABQAHgBAGAGQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMn7QgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMpvQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgMriQgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgMtWQgGgGABgIQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAIgFAGQgGAGgHgBQgHABgFgGgAgMvKQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHgBQgHABgFgGgAgMw+QgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGgAgMyyQgGgGABgHQgBgJAGgFQAFgGAHAAQAHAAAGAGQAFAFABAJQgBAHgFAGQgGAGgHAAQgHAAgFgGgAgM0mQgGgGABgHQgBgJAGgFQAFgGAHABQAHgBAGAGQAFAFABAJQgBAHgFAGQgGAGgHAAQgHAAgFgGgAgM2aQgGgFABgIQgBgIAGgGQAFgGAHABQAHgBAGAGQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgM4OQgGgFABgIQgBgIAGgGQAFgFAHAAQAHAAAGAFQAFAGABAIQgBAIgFAFQgGAGgHAAQgHAAgFgGgAgM6BQgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgM71QgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAFgHAAQgHAAgFgFgAgM9pQgGgGABgIQgBgIAGgFQAFgGAHAAQAHAAAGAGQAFAFABAIQgBAIgFAGQgGAGgHgBQgHABgFgGgAgM/dQgGgFABgJQgBgHAGgGQAFgGAHAAQAHAAAGAGQAFAGABAHQgBAJgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_2.setTransform(981.2,224.4);
	this.shape_2._off = true;

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(40).to({_off:false},0).wait(440));

	// linea1 mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AICBDIAAhXIA6AAIAABXg");
	var mask_3_graphics_1 = new cjs.Graphics().p("AiIAsIAAhXIERAAIAABXg");
	var mask_3_graphics_2 = new cjs.Graphics().p("Aj0AsIAAhXIHpAAIAABXg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AlgAsIAAhXILBAAIAABXg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AnMAsIAAhXIOZAAIAABXg");
	var mask_3_graphics_5 = new cjs.Graphics().p("Ao4AsIAAhXIRxAAIAABXg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AqkAsIAAhXIVJAAIAABXg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AsQAsIAAhXIYhAAIAABXg");
	var mask_3_graphics_8 = new cjs.Graphics().p("At8AsIAAhXIb5AAIAABXg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AvoAsIAAhXIfRAAIAABXg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AxUAsIAAhXMAiqAAAIAABXg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AzBAsIAAhXMAmDAAAIAABXg");
	var mask_3_graphics_12 = new cjs.Graphics().p("A0tAsIAAhXMApaAAAIAABXg");
	var mask_3_graphics_13 = new cjs.Graphics().p("A2ZAsIAAhXMAszAAAIAABXg");
	var mask_3_graphics_14 = new cjs.Graphics().p("A4FAsIAAhXMAwLAAAIAABXg");
	var mask_3_graphics_15 = new cjs.Graphics().p("A5xAsIAAhXMAzjAAAIAABXg");
	var mask_3_graphics_16 = new cjs.Graphics().p("A7cAsIAAhXMA25AAAIAABXg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A9JAsIAAhXMA6TAAAIAABXg");
	var mask_3_graphics_18 = new cjs.Graphics().p("A+1AsIAAhXMA9rAAAIAABXg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EgghAAsIAAhXMBBDAAAIAABXg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EgiNAAsIAAhXMBEbAAAIAABXg");
	var mask_3_graphics_21 = new cjs.Graphics().p("Egj5AAsIAAhXMBHzAAAIAABXg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EgllAAsIAAhXMBLLAAAIAABXg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EgnRAAsIAAhXMBOjAAAIAABXg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Ego9AAsIAAhXMBR8AAAIAABXg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EgqpAAsIAAhXMBVTAAAIAABXg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EgsVAAsIAAhXMBYrAAAIAABXg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EguBAAsIAAhXMBcDAAAIAABXg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EgvuAAsIAAhXMBfdAAAIAABXg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EgxaAAsIAAhXMBi0AAAIAABXg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EgzFAAsIAAhXMBmLAAAIAABXg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Eg0yAAsIAAhXMBplAAAIAABXg");
	var mask_3_graphics_32 = new cjs.Graphics().p("Eg2eAAsIAAhXMBs9AAAIAABXg");
	var mask_3_graphics_33 = new cjs.Graphics().p("Eg4KAAsIAAhXMBwVAAAIAABXg");
	var mask_3_graphics_34 = new cjs.Graphics().p("Eg52AAsIAAhXMBztAAAIAABXg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Eg7iAAsIAAhXMB3FAAAIAABXg");
	var mask_3_graphics_36 = new cjs.Graphics().p("Eg9OAAsIAAhXMB6dAAAIAABXg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Eg+6AAsIAAhXMB91AAAIAABXg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EhAmAAsIAAhXMCBNAAAIAABXg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EhCSAAsIAAhXMCElAAAIAABXg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Eg65ABDIAAhXMCH9AAAIAABXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:57.3,y:6.8}).wait(1).to({graphics:mask_3_graphics_1,x:122.7,y:9.1}).wait(1).to({graphics:mask_3_graphics_2,x:133.7,y:9.1}).wait(1).to({graphics:mask_3_graphics_3,x:144.7,y:9.1}).wait(1).to({graphics:mask_3_graphics_4,x:155.7,y:9.1}).wait(1).to({graphics:mask_3_graphics_5,x:166.7,y:9.1}).wait(1).to({graphics:mask_3_graphics_6,x:177.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_7,x:188.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_8,x:199.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_9,x:210.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_10,x:221.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_11,x:232.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_12,x:243.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_13,x:254.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_14,x:265.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_15,x:276.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_16,x:287.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_17,x:298.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_18,x:309.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_19,x:320.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_20,x:331.6,y:9.1}).wait(1).to({graphics:mask_3_graphics_21,x:342.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_22,x:353.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_23,x:364.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_24,x:375.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_25,x:386.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_26,x:397.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_27,x:408.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_28,x:419.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_29,x:430.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_30,x:441.5,y:9.1}).wait(1).to({graphics:mask_3_graphics_31,x:452.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_32,x:463.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_33,x:474.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_34,x:485.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_35,x:496.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_36,x:507.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_37,x:518.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_38,x:529.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_39,x:540.4,y:9.1}).wait(1).to({graphics:mask_3_graphics_40,x:493.3,y:6.8}).wait(440));

	// linea1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("EBDLAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEBBXAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA/kAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA9xAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA7+AANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA6LAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA4YAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA2lAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEA0yAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAy/AANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAxMAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAvZAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAtmAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEArzAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAqAAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAoNAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAmaAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAknAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAi0AANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgEAhBAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAfOANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAdbANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAboANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAZ1ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAYCANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAWPANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAUcANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgASpANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAQ2ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAPDANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgANQANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgALdANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAJqANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAH3ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAGEANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAERANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgACeANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAArANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAhGANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAi5ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAFAGQAGAFAAAHQAAAHgGAGQgFAGgIAAQgIAAgGgGgAksANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAmfANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAoSANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAqFANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAr4ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAtrANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAvdANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgAxRANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgAzEANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgA03ANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgA2pANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgA4cANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgA6QANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgA8CANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgA91ANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgA/oANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEghbAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgjPAANQgFgGAAgHQAAgHAFgFQAGgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgGgGgEglBAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgm0AANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgonAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgqaAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgsNAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEguAAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgvzAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgxmAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEgzZAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg1MAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg2/AANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg4yAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg6lAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg8YAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg+LAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEg/+AANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEhBxAANQgGgGAAgHQAAgHAGgFQAFgGAIAAQAIAAAGAGQAFAFAAAHQAAAHgFAGQgGAGgIAAQgIAAgFgGgEhDlAANQgFgGAAgHQAAgHAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAHQAAAHgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_3.setTransform(549.9,9.9);

	this.shape_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(480));

	// pop ups
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBpQAjgfAAhKQAAhJgjgfIAAgOQAaAOANAfQAOAfAAAqQAAArgOAfQgNAfgaAOg");
	this.shape_4.setTransform(1252.2,259.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBaIAAgUQAVAMAMAAQAKAAAGgGQAIgHgBgMIAAAAQABgLgGgKQgFgKgNgUQgTgXgHgLQgGgNAAgPIAAAAQAAgTAMgMQAMgMAOAAQAPAAAQAIIAAAUQgQgLgOAAQgHAAgIAHQgGAHAAALIAAAAQAAAKAFAKQAFAJANATQATAVAHAOQAHAOAAAQIAAAAQAAAUgMAMQgMAMgRAAQgPAAgTgKg");
	this.shape_5.setTransform(1244.6,258.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBiIAAjDIBCAAIAAARIgwAAIAABIIAsAAIAAAPIgsAAIAABJIAxAAIAAASg");
	this.shape_6.setTransform(1235.7,258.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBLQgQgaAAgvIAAgDQAAgvAQgaQAPgYAVAAQALAAAJAFIAAATQgLgGgIAAQgQAAgIATQgKAVAAAnIAAADQAAAnAKAVQAIATAQAAQAKAAAKgGIAAASQgKAGgMAAQgVAAgOgYg");
	this.shape_7.setTransform(1226.2,258.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBiIg2iWIAACWIgRAAIAAjDIASAAIA0CRIAAiRIASAAIAADDg");
	this.shape_8.setTransform(1215.6,258.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghBMQgOgaAAgwIAAgEQAAgvAOgaQANgYAUAAQAVAAANAYQAOAaAAAvIAAAEQAAAvgOAbQgNAYgVAAQgUAAgNgYgAgUg/QgIAWAAAnIAAAEQAAAoAIAWQAIATAMAAQANAAAIgTQAIgWAAgoIAAgEQAAgngIgWQgIgTgNAAQgMAAgIATg");
	this.shape_9.setTransform(1203.9,258.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBiIAAiyIgfAAIAAgRIBMAAIAAARIgdAAIAACyg");
	this.shape_10.setTransform(1194.5,258.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbBiIg1iWIAACWIgRAAIAAjDIASAAIA0CRIAAiRIASAAIAADDg");
	this.shape_11.setTransform(1184.3,258.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBiIAAjDIBEAAIAAARIgxAAIAABIIAsAAIAAAPIgsAAIAABJIAyAAIAAASg");
	this.shape_12.setTransform(1174.2,258.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBiIAAjDIBEAAIAAARIgxAAIAABIIAsAAIAAAPIgsAAIAABJIAyAAIAAASg");
	this.shape_13.setTransform(1160.5,258.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBiIAAjDIAZAAQAbAAASAYQARAaABAuIAAADQgBAugRAZQgSAZgbAAgAgZBRIAIAAQASAAAMgTQANgVAAgnIAAgDQAAgngNgVQgMgTgSAAIgIAAg");
	this.shape_14.setTransform(1150.1,258.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXBiIgehNIgIAAIgJAAIAABNIgTAAIAAjDIAcAAQAYAAAPAPQAQAQAAAdIAAAAQAAAngfAOIAjBSgAgYAFIAJAAQAQAAAKgJQALgLAAgVIAAgBQAAgrgmAAIgIAAg");
	this.shape_15.setTransform(1364.5,227.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIBiIAAjDIARAAIAADDg");
	this.shape_16.setTransform(1356.2,227.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIBiIAAixIgdAAIAAgSIBLAAIAAASIgdAAIAACxg");
	this.shape_17.setTransform(1349.5,227.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXBiIgehNIgIAAIgJAAIAABNIgTAAIAAjDIAbAAQAZAAAPAPQAQAQAAAdIAAAAQAAAngfAOIAjBSgAgYAFIAJAAQAQAAAKgJQALgLAAgVIAAgBQAAgWgLgLQgLgKgQAAIgIAAg");
	this.shape_18.setTransform(1340.4,227.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgsAAIgKAzIgSAAIAqjDIARAAIAqDDgAgTAfIAmAAIgThhg");
	this.shape_19.setTransform(1328.9,227.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBiIAAjDIAaAAQAZAAAQARQAQAQAAAeIAAAAQAAAegQAPQgPARgaAAIgIAAIAABGgAgXAMIAJAAQARgBAKgLQAKgLAAgWIAAgBQAAgWgLgMQgJgMgRAAIgJAAg");
	this.shape_20.setTransform(1319.9,227.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgsAAIgKAzIgSAAIAqjDIARAAIAqDDgAgTAfIAmAAIgThhg");
	this.shape_21.setTransform(1303.9,227.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglBaIAAgUQAUANAOAAQAJAAAHgHQAHgHAAgMIAAAAQAAgLgFgKQgFgKgOgTQgUgYgGgLQgGgNAAgOIAAgBQAAgTAMgMQALgMAQAAQAPAAAPAIIAAAUQgQgKgNAAQgJAAgGAGQgHAHAAALIAAAAQAAAKAFAKQAFAJANATQATAVAHAOQAHAOAAAQIAAAAQAAAUgMAMQgMAMgQAAQgRAAgSgKg");
	this.shape_22.setTransform(1289,227.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgsAAIgKAzIgSAAIApjDIASAAIAqDDgAgTAfIAmAAIgThhg");
	this.shape_23.setTransform(1278.7,227.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBiIg1iWIAACWIgSAAIAAjDIATAAIA0CSIAAiSIARAAIAADDg");
	this.shape_24.setTransform(1267.1,227.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgsAAIgKAzIgSAAIAqjDIARAAIAqDDgAgTAfIAmAAIgThhg");
	this.shape_25.setTransform(1255.4,227.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAjBiIAAiaIgjBmIAAAAIgihmIAACaIgSAAIAAjDIAUAAIAgBiIAhhiIATAAIAADDg");
	this.shape_26.setTransform(1243,227.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghBiIAAjDIBCAAIAAASIgwAAIAABHIAsAAIAAAPIgsAAIAABKIAxAAIAAARg");
	this.shape_27.setTransform(1232.1,227.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglBaIAAgUQATANAOAAQAKAAAGgHQAHgHAAgMIAAAAQAAgLgFgKQgFgKgNgTQgUgYgGgLQgHgNAAgOIAAgBQAAgTAMgMQAMgMAPAAQAQAAAOAIIAAAUQgPgKgOAAQgIAAgHAGQgGAHAAALIAAAAQAAAKAFAKQAFAJANATQATAVAHAOQAHAOAAAQIAAAAQAAAUgMAMQgMAMgRAAQgQAAgSgKg");
	this.shape_28.setTransform(1222.5,227.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkBiIAAgOIAphZQANgcABgSQAAgNgIgIQgGgHgJAAQgOAAgOAIIAAgSQAOgIAQAAQAQAAAMAMQALALgBAUIAAABQAAAWgQAfIgkBQIA1AAIAAASg");
	this.shape_29.setTransform(1208.6,227.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgsAAIgKAzIgSAAIAqjDIARAAIAqDDgAgTAfIAmAAIgThhg");
	this.shape_30.setTransform(1193.8,227.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgrBiIAAjDIAZAAQAbAAASAYQARAaABAuIAAADQgBAugRAaQgSAYgbAAgAgZBRIAIAAQATAAALgTQANgVAAgnIAAgDQAAgngNgVQgNgTgRAAIgIAAg");
	this.shape_31.setTransform(1183.4,227.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAgBiIgKgzIgrAAIgLAzIgRAAIAojDIASAAIApDDgAgTAfIAmAAIgThhg");
	this.shape_32.setTransform(1171.8,227.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUBLQgQgaAAgvIAAgDQAAgvAQgaQAPgYAVAAQALAAAJAFIAAATQgLgGgIAAQgQAAgIATQgKAVAAAnIAAADQAAAoAKAUQAIATAQAAQAKAAAKgGIAAASQgKAGgMAAQgVAAgOgYg");
	this.shape_33.setTransform(1161.4,227.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHBiIAAhTIgohwIATAAIAcBaIAehaIASAAIgnBwIAABTg");
	this.shape_34.setTransform(1147.1,227.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMBKQgOgfAAgrQAAgqAOgfQANgeAagPIAAAOQgkAfAABJQAABKAkAfIAAAOQgagOgNgfg");
	this.shape_35.setTransform(1138.9,229.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4CUQgXgcAAgtIAAgDQAAgfANgXQAKgSARgLQgjgWAAgyIAAgDQAAgnAWgYQAWgYAeAAQAgAAAUAYQAXAYAAAnIAAADQAAAygiAWQAQALAKASQANAXAAAfIAAADQAAAtgXAcQgWAagjAAQgiAAgWgagAgXBFIAAADQAAA3AXAAQAXAAAAg3IAAgDQAAg2gXAAQgXAAAAA2gAgUhQIAAADQAAAwAUAAQAUAAAAgwIAAgDQAAgugUAAQgUAAAAAug");
	this.shape_36.setTransform(1113.5,240.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhECqIAAgxIA5iCQAWg0AAgVQAAgNgIgJQgGgIgOAAQgWAAgVAOIAAg5QAagOAeAAQAgAAATATQAVAUAAAlIAAACQAAATgFATQgGAUgPAhIgvBvIBIAAIAAA7g");
	this.shape_37.setTransform(1096.9,240.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAkCpIgLhDIg0AAIgKBDIg5AAIBAlRIA9AAIBBFRgAgSAxIAiAAIgQhug");
	this.shape_38.setTransform(1071.7,240.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgvDdIAAlRIA5AAIAAFRgAgniIIAshTIAsAWIg2A9g");
	this.shape_39.setTransform(1059.2,235.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhVCpIAAlRIA3AAQA3AAAeApQAfAqAABRIAAAJQAABRgfAqQgeApg3AAgAgaBzIACAAQAyAAAAhuIAAgJQAAhugyAAIgCAAg");
	this.shape_40.setTransform(1042.6,240.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AgXA0IAthcIg4AAIAAgLIBFAAIAAAJIgtBeg");
	this.shape_41.setTransform(1312.6,359);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AgpBYQANgIALgLQAKgKAHgKQAEgKADgNQAEgMAAgOQAAgagLgWQgOgVgbgSIAOgVQAgATATAbQASAbAAAjQAAAkgSAbQgSAaghAUg");
	this.shape_42.setTransform(1302.3,365.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("Ag9BJIALgXQALAHALADQALAEAPAAQATAAALgKQAKgLAAgUIAAgLQgIALgLAHQgLAHgPAAQgNAAgKgEQgLgFgIgIQgJgIgFgLQgFgLAAgOQAAgPAFgMQAFgLAJgJQAIgIALgEQAMgFALAAQAPAAALAHQAKAGAJAKIAAgUIAfAAIAABpQAAAkgTAQQgSARghAAQgjAAgZgQgAgOg7QgGADgGAFQgFAEgDAHQgDAHAAAJQAAAHADAIQAEAHAEACQAFAFAHADQAIADAGAAQAHAAAHgDQAIgDAFgFQAEgBAFgIQADgHAAgIQAAgIgDgIQgFgIgEgDQgGgGgHgCQgFgCgJAAQgIAAgGACg");
	this.shape_43.setTransform(1288,367.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("Ag7BbIAAi1IAjAAIAAA8QAAAaAFAHQAHAMAMAAQAGAAAGgEQAGgFADgGQADgIAAgWIAAg8IAkAAIAACCIghAAIAAgQIgHALQgDAEgGACQgFACgGAAQgGAAgHgEQgEgEgHgLIAABDg");
	this.shape_44.setTransform(1272.5,368.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgkBTQgPgIgNgMIATgWQALAKALAFQALAGAMAAQAPAAAKgIQAJgKAAgNQAAgOgKgIQgKgIgPAAQgJAAgJACIgPAGIgSgLIAFhXIBoAAIAAAcIhNAAIgDApIANgDQAHgCAGAAQAOAAALAEQALADAIAHQAIAGAGAKQAEAKAAAPQAAAOgEALQgFAKgJAJQgKAIgLAEQgMAEgOAAQgTAAgRgHg");
	this.shape_45.setTransform(1249.4,363.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("Ag/BaIAAgZIA9g0IAOgNQAGgFAEgFQAFgIABgDQACgFAAgHQAAgNgJgIQgHgGgNgBQgKAAgKAHQgJAHgKANIgWgSIAMgPQAIgIAHgEQAFgEAMgEQALgCAIAAQANAAAMAEQALAEAHAHQAIAHAEAKQAEAKABALQAAAMgEAHQgCAIgGAJQgIAIgGAGIg4AwIBTAAIAAAcg");
	this.shape_46.setTransform(1233.7,363.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AADBZIAAiSIgeAJIgGgZIAtgPIAWAAIAACxg");
	this.shape_47.setTransform(1220.1,363.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgXA/QgSgbAAgkQAAgjASgbQATgbAggTIAOAVQgPAKgJAJQgKAKgHAKQgFAMgCALQgEAOAAALQAAAcALAVQAOAWAbARIgOAVQghgUgSgag");
	this.shape_48.setTransform(1210.5,365.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AhNA+IAcghQAcAWAcAAQAVAAgBgMIAAgBQABgGgHgDQgGgEgPgEQgigIgPgKQgTgLAAgZIAAgBQAAgZASgQQAUgQAeAAQAsAAAcAYIgYAjQgZgSgXAAQgSAAAAAMIAAAAQAAAGAGAEQAGAEARAEQAhAHAQALQASAMAAAXIAAABQAAAbgVAPQgTAQggAAQgxAAgigeg");
	this.shape_49.setTransform(1188.5,363.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgXBZIAAixIAvAAIAACxg");
	this.shape_50.setTransform(1176.3,363.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("AAYBZIgig2IgVAAIAAA2IgyAAIAAixIBTAAQAnAAATAUQAQAPAAAaIAAABQAAAlglAQIAqA+gAgfgCIAfAAQAaAAAAgVIAAgBQAAgVgaAAIgfAAg");
	this.shape_51.setTransform(1163.6,363.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("Ag6BDQgcgaAAgpIAAAAQAAglAcgbQAbgbAnAAQAqAAAfAaIgdAjQgVgRgWAAQgSAAgNAOQgNAOAAATIAAAAQAAAWAOAOQANAOATAAQASAAALgIIAAgVIgjAAIAAgiIBSAAIAABOQgiAbgsAAQgoAAgbgZg");
	this.shape_52.setTransform(1143.9,363.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AgpBYQANgJALgKQAJgJAIgLQAEgKADgNQAEgLAAgPQAAgbgMgVQgMgUgcgTIAOgUQAhATASAbQASAbAAAiQAAAjgSAcQgSAaghAUg");
	this.shape_53.setTransform(1370.3,334.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgIQgHgJgNAAQgMAAgJAJQgIAIAAARIAABJIgfAAIAAiEIAfAAIAAAVIAHgJQAFgFAEgDIAMgFIAMgCQAXAAAMAOQANAOAAAYIAABTg");
	this.shape_54.setTransform(1357,335.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgWBBQgNgGgIgIQgJgJgHgNQgEgNAAgQQgBgMAFgNQAGgNAIgKQAIgJANgGQALgGANAAQAQAAAMAGQAMAGAIAKQAIAKAFANQADAMAAAOIAAAJIhhAAQADARALAIQAKAJANAAQAKAAAKgEQAJgFAHgHIASAQQgJALgNAHQgNAHgUAAQgNAAgMgFgAgWghQgIAJgDAQIBDAAQgBgIgDgGQgCgFgEgGQgEgFgHgCQgFgDgIAAQgNAAgJAKg");
	this.shape_55.setTransform(1341.4,335.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AhEBZIAAixIBFAAQAPAAANAFQALADAKAJQAKAIAEALQAFALAAANQAAAQgGALQgFAJgKAIQgIAGgPAGQgOAEgMAAIgkAAIAAA5gAglADIAlAAQAQAAAKgHQALgIAAgPQAAgQgLgIQgKgIgQAAIglAAg");
	this.shape_56.setTransform(1325.9,333.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AgXA/QgSgbAAgkQAAgjASgaQATgcAggSIAOAUQgPAKgJAJQgJAJgIALQgEALgDAMQgEAOAAALQAAAbALAWQAOAVAbASIgOAVQgggTgTgbg");
	this.shape_57.setTransform(1311.3,334.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgeBCQgIgCgHgFQgGgFgFgIQgEgJAAgJIAAgBQAAgLAFgIQADgHAIgFQAHgFAKgDQALgCALAAIATABIAQAEIAAgDQAAgOgIgHQgJgIgOAAQgKAAgKADIgSAGIgJgZIAXgIQAMgDAOAAQAfAAAOAPQAPAPAAAbIAABNIgfAAIAAgQQgGAHgMAHQgLAFgNAAQgJAAgJgDgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAHAFALAAQAGAAAGgCQAGgCAGgEQAEgDADgGQADgGAAgFIAAgJQgIgDgGgBIgRgBQgMAAgJAGg");
	this.shape_58.setTransform(1290,335.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AgdBZQgKgEgKgJQgJgLgFgMQgFgNAAgQQAAgRAFgLQAGgOAIgIQAJgJALgEQANgGAKAAQAPABALAHQALAHAHAKIAAhJIAfAAIAAC4IgfAAIAAgWQgHAJgLAJQgLAHgPAAQgLAAgMgFgAgNgPQgHAEgGAFQgFAFgDAHQgDAIAAAKQAAAKADAIQADAIAFAFQAHAHAGACQAHADAGAAQAIAAAGgDQAHgCAGgHQAGgGACgHQAEgJAAgJQAAgIgEgKQgDgGgFgGQgGgFgHgEQgGgCgIgBQgGABgHACg");
	this.shape_59.setTransform(1274,333);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgeBCQgJgCgGgFQgGgGgFgHQgDgIAAgKIAAgBQAAgMADgHQAEgHAIgFQAGgEALgEQAMgCAKAAIASABIARAEIAAgDQAAgOgJgHQgHgIgPAAQgLAAgKADIgSAGIgIgZIAXgIQAMgDAOAAQAeAAAPAPQAPAPgBAbIAABNIgeAAIAAgQQgIAIgKAGQgLAFgNAAQgKAAgIgDgAgVAKQgIAFAAALIAAAAQAAAKAHAFQAIAFALAAQAGAAAGgCQAGgBAFgFQAFgDADgGQADgGgBgFIAAgJQgHgDgGgBIgRgBQgNAAgIAGg");
	this.shape_60.setTransform(1258,335.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgIQgHgJgOAAQgLAAgJAJQgIAJAAAQIAABJIgfAAIAAiEIAfAAIAAAVIAHgJQAFgFAEgDQAFgDAHgCQAGgCAGAAQAWAAANAOQANAOAAAYIAABTg");
	this.shape_61.setTransform(1243.1,335.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AgWBBQgMgFgKgJQgKgLgEgLQgGgOAAgPQAAgLAFgOQAEgLAKgMQAJgJAMgGQAMgGAMAAQAQAAAMAGQANAHAHAJQAIAJAFAOQAEAPAAALIgBAJIhhAAQADAQAKAJQALAJANAAQALAAAJgEQAIgFAIgHIATAQQgJAKgPAIQgMAHgUAAQgNAAgMgFgAgWghQgJAKgCAPIBDAAIgDgOQgCgGgFgFQgFgFgFgCQgGgDgIAAQgMAAgKAKg");
	this.shape_62.setTransform(1227.4,335.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_63.setTransform(1216.1,332.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_64.setTransform(1208.8,332.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("AgVBBQgOgGgJgIQgIgJgGgNQgGgNAAgQQAAgNAGgMQAEgNAJgKQAIgJANgGQALgGANAAQAQAAANAGQAKAGAKAKQAHAKAEANQAFAMAAAOIgBAJIhhAAQADARAKAIQALAJANAAQALAAAJgEQAIgFAIgHIASAQQgJALgOAHQgNAHgSAAQgNAAgMgFgAgVghQgKAJgCAQIBDAAQgBgIgCgGQgCgGgFgFQgFgFgGgCQgGgDgHAAQgNAAgIAKg");
	this.shape_65.setTransform(1197.4,335.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#58595B").s().p("AgmBEIAAiEIAfAAIAAAeQAGgPAKgJQANgJARAAIAAAhIgCAAQgLAAgIADQgIADgGAHQgEAIgDAJQgEAIAAANIAAAzg");
	this.shape_66.setTransform(1185.1,335.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAIgLAKgHQAMgIAOAAQAKAAAMAFQALAFAKAJQAIAIAFAOQAGANAAARQAAAQgGALQgFANgIAJQgJAKgMAEQgKAFgNAAQgOAAgLgHQgMgIgGgJIAAA+gAgOg6QgGADgGAGQgGAGgDAIQgDAHAAALQAAAKADAHQADAGAGAGQAGAGAGADQAHADAHAAQAHAAAIgDQAGgDAFgGQAEgEAFgIQADgHAAgKQAAgLgDgHQgEgJgFgFQgFgGgGgDQgIgDgHAAQgHAAgHADg");
	this.shape_67.setTransform(1171,337.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#58595B").s().p("AgeBCQgIgCgHgFQgGgFgEgIQgFgJAAgJIAAgBQAAgKAFgJQAFgIAGgEQAHgFALgDQALgCAKAAIATABIAQAEIAAgDQABgOgJgHQgJgIgOAAQgLAAgJADIgTAGIgIgZQANgGAKgCQAMgDAOAAQAfAAAOAPQAPAOAAAcIAABNIgfAAIAAgQQgGAHgMAHQgKAFgNAAQgKAAgJgDgAgUAKQgJAFAAALIAAAAQAAAKAHAFQAIAFALAAQAHAAAFgCQAHgCAEgEQAGgDACgGQADgFAAgGIAAgJQgIgDgGgBQgIgBgJAAQgNAAgHAGg");
	this.shape_68.setTransform(1146.6,335.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#58595B").s().p("ABHBEIAAhKQAAgQgHgIQgIgJgMAAQgMAAgJAJQgIAJAAAQIAABJIgdAAIAAhKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAKAAAPIAABJIgfAAIAAiEIAfAAIAAAUIAHgIIAJgIQAFgDAGgCQAJgCAFAAQAOAAALAHQAHAGAGALQAJgMAKgFQAMgHAPAAQAWAAAMANQANAOAAAYIAABUg");
	this.shape_69.setTransform(1127.5,335.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#58595B").s().p("AguA2QgNgOAAgYIAAhTIAfAAIAABKQAAAQAIAIQAGAJAOAAQAMAAAJgJQAIgJAAgPIAAhKIAfAAIAACEIgfAAIAAgVQgGAJgKAIQgLAHgNAAQgWAAgNgOg");
	this.shape_70.setTransform(1107.3,335.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_71.setTransform(1095.9,332.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAHgLALgHQALgIAOAAQALAAANAFQALAFAJAJQAIAIAGAOQAFALAAATQAAARgFAKQgFAMgJAKQgKAKgKAEQgMAFgMAAQgOAAgLgHQgLgIgIgJIABA+gAgNg6QgIADgFAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAGAGAGQAGAGAHADQAGADAHAAQAHAAAHgDQAHgDAFgGQAGgGADgGQADgHAAgKQAAgLgDgHQgCgIgHgGQgFgGgHgDQgHgDgHAAQgHAAgGADg");
	this.shape_72.setTransform(1084,337.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#58595B").s().p("AgPBDIAAgjIAfAAIAAAjgAgPgfIAAgjIAfAAIAAAjg");
	this.shape_73.setTransform(1387.6,304.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#58595B").s().p("AgeBDQgJgDgGgFQgGgFgFgIQgEgIAAgKIAAgBQAAgKAFgJQADgHAIgEQAIgGAJgCQAKgDAMAAIATABIAQAFIAAgEQAAgOgIgHQgIgIgPAAQgKAAgKADIgSAGIgJgZQAJgEAOgEQAMgDAOAAQAeAAAPAPQAPAPAAAbIAABOIgfAAIAAgRQgHAIgLAGQgLAFgNAAQgJAAgJgCgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAIAFAKAAIAMgCQAGgCAGgEQAEgDADgGQADgGAAgFIAAgJIgOgDIgRgCQgNAAgIAGg");
	this.shape_74.setTransform(1376.2,304.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#58595B").s().p("AAABUQgIgCgFgEQgFgFgDgIQgCgGAAgMIAAhFIgSAAIAAgbIASAAIAAgkIAdAAIAAAkIAkAAIAAAbIgkAAIAABAQAAAJAEAEQAFAEAHAAQAKAAAJgFIAAAZQgEADgIADQgHABgIAAQgKAAgEgCg");
	this.shape_75.setTransform(1363.7,303.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#58595B").s().p("AgWBAQgLgEgLgKQgJgJgFgNQgGgNAAgPQAAgOAFgMQAFgMAJgKQAKgLALgEQAMgGAMAAQAQAAAMAGQAMAGAIAKQAIAJAFAOQAEAOAAAMIgBAEIAAAEIhhAAQADARAKAJQALAIANAAQALAAAJgEQAIgDAIgJIASAQQgIALgPAIQgOAHgSAAQgLAAgOgGgAgWgiQgJAKgCAQIBDAAIgDgOQgEgIgDgDQgFgFgGgDQgGgDgHAAQgNAAgJAKg");
	this.shape_76.setTransform(1351,304.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_77.setTransform(1339.7,302.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#58595B").s().p("AhEBYIAAitIAfAAIAAAWQAIgKAKgIQALgGAOAAQAMgBAMAFQAKAEAKAKQAIAIAFANQAGAOAAAQQAAAPgFAOQgFAMgJAJQgJAJgLAFQgMAEgMAAQgOABgLgIQgKgGgIgKIAAA9gAgNg6QgJAEgEAFQgFAHgEAGQgDAIAAAKQAAALADAHQAEAGAFAGQAEAFAJAEQAHADAGAAQAHAAAHgDQAJgEADgFQAGgFADgHQADgHAAgLQAAgJgDgJQgDgHgGgGQgDgEgJgFQgHgDgHAAQgGAAgHADg");
	this.shape_78.setTransform(1327.8,306.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#58595B").s().p("ABHBEIAAhKQAAgQgHgJQgHgIgNAAQgNAAgIAIQgIAKAAAPIAABKIgdAAIAAhLQAAgQgHgIQgHgIgNAAQgMAAgJAJQgIAJABAQIAABJIggAAIAAiFIAgAAIAAAVIAGgJIAJgHQAGgEAGgBQAFgCAIAAQAPAAAKAGQAIAHAGALQAGgKANgIQAKgGAQAAQAXAAALANQANANAAAZIAABUg");
	this.shape_79.setTransform(1306.9,304.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#58595B").s().p("AgbBAQgNgGgKgJQgJgJgGgNQgFgMAAgPQAAgOAFgMQAGgMAJgKQALgLAMgEQAOgGANAAQAQAAAMAGQANAFAKAKQAKAKAFAMQAFANAAANQAAANgFAOQgGALgJALQgKAKgNAFQgOAGgOAAQgOAAgNgGgAgQgmQgHADgFAGQgGAGgDAIQgCAIAAAHQAAAIADAIQACAIAGAGQAHAHAGACQAHAEAIAAQAJAAAHgEQAHgCAGgHQAFgFADgJQADgHAAgJQAAgGgDgJQgEgJgFgFQgGgHgGgCQgHgEgJAAQgJAAgHAEg");
	this.shape_80.setTransform(1286.3,304.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#58595B").s().p("AgTBAQgLgFgLgKQgKgKgFgMQgFgOAAgNQAAgMAFgOQAFgLAKgLQAKgKAMgFQAOgGAMAAQAUAAAMAHQAMAFAKALIgTAVIgPgMQgIgFgMAAQgHAAgGAEQgIADgFAGQgGAHgCAHQgCAIgBAHQABAIACAIQADAIAFAGQAHAGAGADQAGAEAIAAQAMAAAIgFQAIgEAHgIIATASQgKALgMAIQgOAHgTAAQgMAAgOgGg");
	this.shape_81.setTransform(1271.2,304.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#58595B").s().p("AgYBAQgQgFgMgKIAOgVQAOAKAIACQAMAFAIAAQAKAAAFgEQAGgEAAgHIAAAAQAAgEgDgDIgGgFIgigMQgIgDgGgDQgGgFgEgGQgDgFAAgLIAAAAQAAgKADgHQAEgIAGgFQAIgGAIgDQAKgCAHAAQAMAAANAEQAMADAMAIIgMAWQgKgGgKgDQgKgEgIAAQgHAAgFAEQgFAEAAAGIAAAAQAAAEACACIAHAFIAiANQAHADAGADQAHAFADAGQAEAGAAAJIAAABQAAAKgEAIQgDAIgHAFQgIAGgIACQgJADgLAAQgMAAgPgFg");
	this.shape_82.setTransform(1249.6,304.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_83.setTransform(1239.8,302.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#58595B").s().p("AgYBAQgPgFgNgKIANgVQAOAJAJADQALAFAIAAQALAAAFgEQAFgEAAgHIAAAAQAAgFgCgCIgHgFIgigMQgHgDgGgDQgGgEgDgHQgFgGAAgKIAAAAQAAgIAEgJQAEgIAGgFQAGgFAKgEQAJgCAIAAQAMAAANAEQALADANAIIgMAWQgKgGgKgDQgJgEgJAAQgIAAgEAEQgFADAAAHIAAAAQAAAEADACIAGAFIAIAEIAaAJQAIADAFADQAGAEAEAHQAEAGAAAJIAAABQAAAKgEAIQgEAIgHAFQgHAGgJACQgJADgKAAQgMAAgPgFg");
	this.shape_84.setTransform(1229.6,304.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#58595B").s().p("AgbBAQgOgGgJgJQgJgJgGgNQgFgOAAgNQAAgMAFgOQAGgMAJgKQALgLAMgEQAOgGANAAQARAAALAGQAOAFAJAKQAKAKAFAMQAFANAAANQAAANgFAOQgFAMgKAKQgKAKgNAFQgNAGgPAAQgOAAgNgGgAgPgmQgIADgFAGQgGAHgCAHQgDAHAAAIQAAAIADAIQACAIAGAGQAHAHAGACQAHAEAIAAQAJAAAHgEQAHgCAGgHQAGgHACgHQADgHAAgJQAAgHgDgIQgDgHgFgHQgHgHgGgCQgHgEgJAAQgIAAgHAEg");
	this.shape_85.setTransform(1215,304.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#58595B").s().p("AgdBZQgLgEgJgJQgJgKgFgMQgFgNAAgRQAAgRAFgLQAGgOAIgIQAJgJALgEQALgFAMAAQAOAAAMAHQAKAHAIAKIAAhJIAfAAIAAC4IgfAAIAAgWQgIAKgKAIQgMAHgOAAQgMAAgLgFgAgNgPQgHAEgGAFQgFAGgDAGQgDAIAAAKQAAAKADAIQADAJAFAEQAFAFAIAEQAHAEAGAAQAIAAAGgEQAIgDAEgGQAGgGADgHQAEgHAAgLQAAgKgEgIQgDgGgGgGQgEgEgIgFQgGgDgIABQgGgBgHADg");
	this.shape_86.setTransform(1197.8,302.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgOAAQgLAAgIAJQgJAIABAQIAABKIggAAIAAiFIAgAAIAAAWIAGgKIAKgHQAGgEAFgBQADgCAJAAQAXAAAMAOQANAOAAAXIAABUg");
	this.shape_87.setTransform(1174.1,304.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#58595B").s().p("AgbBcQgNgGgKgJQgKgJgFgNQgFgMAAgPQAAgQAFgMQAGgKAJgKQAKgKANgFQANgGAOAAQAQAAAMAGQANAFAKAKQAKAKAFAKQAFANAAAOQAAAOgFAOQgGALgJALQgKAKgNAFQgOAGgOAAQgOAAgNgGgAgQgKQgHADgFAGQgGAEgDAIQgCAIAAAIQAAAJADAIQACAIAGAGQAHAHAGACQAHAEAIAAQAJAAAHgEQAHgCAGgHQAFgFADgJQADgGAAgKQAAgJgDgIQgEgJgFgDQgFgGgHgDQgHgEgJAAQgJAAgHAEgAgLg3IAZgqIAcANIgfAdg");
	this.shape_88.setTransform(1157.7,302);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_89.setTransform(1145.7,302.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#58595B").s().p("AgTBAQgNgGgJgJQgJgJgGgNQgFgMAAgPQAAgOAFgMQAFgMAKgKQAKgKAMgFQAOgGAMAAQAUAAAMAHQAMAGAKAKIgUAVQgGgHgIgFQgJgFgMAAQgGAAgHAEQgGADgGAGQgFAFgDAJQgDAHAAAIQAAAJADAHQADAJAFAFQAGAHAHACQAGAEAIAAQALAAAJgFQAHgEAIgIIATASQgLALgMAIQgNAHgUAAQgMAAgNgGg");
	this.shape_90.setTransform(1135,304.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#58595B").s().p("AgTBAQgNgGgJgJQgKgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAKgKQAJgKANgFQAOgGAMAAQAUAAALAHQANAGAKAKIgUAVQgGgHgIgFQgJgFgMAAQgGAAgHAEQgHADgFAGQgFAFgDAJQgDAHAAAIQAAAJADAHQADAJAFAFQAIAHAFACQAGAEAJAAQAKAAAJgFQAJgGAGgGIATASQgLALgMAIQgNAHgUAAQgMAAgNgGg");
	this.shape_91.setTransform(1120.8,304.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#58595B").s().p("AgVBAQgNgEgKgKQgIgJgGgNQgGgNAAgPQAAgOAGgMQAEgMAJgKQALgLAKgEQAMgGAMAAQAQAAANAGQAKAFAKALQAHAJAEAOQAEAMABAOIgBAIIhgAAQABARALAJQALAIANAAQALAAAJgEQAIgDAIgJIATAQQgKAMgOAHQgOAHgRAAQgMAAgNgGgAgVgiQgKAJgCARIBDAAQAAgHgDgHQgEgIgDgDQgFgFgFgDQgHgDgHAAQgMAAgJAKg");
	this.shape_92.setTransform(1105.6,304.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#58595B").s().p("AgsBVIgPgGIAKgXIAJAEQAFABAEAAQAHAAAEgDQAGgFACgHIg4iFIAhAAIAkBiIAkhiIAfAAIg1CJQgDAKgFAHQgFAIgDAEQgGAFgGACQgIACgGAAQgJAAgIgDg");
	this.shape_93.setTransform(1091.1,306.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgOAAQgLAAgIAJQgJAJAAAPIAABKIgfAAIAAiFIAfAAIAAAWQADgFAFgFIAJgHQAHgEAEgBQAEgCAIAAQAXAAANAOQAMAOAAAXIAABUg");
	this.shape_94.setTransform(1076,304.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#58595B").s().p("AgOBZIAAixIAdAAIAACxg");
	this.shape_95.setTransform(1064,302.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#58595B").s().p("EggqAFAIAAp/MBBVAAAIAAJ/g");
	this.shape_96.setTransform(1218.8,240);

	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(1215.6,344.1,1,1,0,0,0,215,74.5);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1218.8,116.7,1,1,0,0,0,162.7,101.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag9CHQgVgoAAhWIAAgRQAAhWAVgoQAUgnApAAQApAAAVAnQAVApAABVIAAARQAABVgVApQgVAngpAAQgpAAgUgngAgRhjQgHAaAABCIAAAPQAABCAHAaQAGAUALAAQALAAAGgUQAIgaAAhCIAAgPQAAhCgIgaQgGgUgLAAQgLAAgGAUg");
	this.shape_97.setTransform(374.1,240.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAkCpIgLhDIg0AAIgKBDIg5AAIBAlRIA9AAIBBFRgAgSAxIAiAAIgQhug");
	this.shape_98.setTransform(347.3,240.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgvDdIAAlRIA5AAIAAFRgAgniIIAshTIAsAWIg2A9g");
	this.shape_99.setTransform(334.8,235.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AhWCpIAAlRIA4AAQA3AAAeApQAgAqAABRIAAAJQAABRggAqQgeApg3AAgAgaBzIACAAQAzAAAAhuIAAgJQAAhugzAAIgCAAg");
	this.shape_100.setTransform(318.2,240.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#58595B").s().p("AgXA0IAthcIg4AAIAAgLIBFAAIAAAJIgtBeg");
	this.shape_101.setTransform(453.6,359);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#58595B").s().p("AgpBYQANgIALgLQAKgKAHgKQAEgKADgNQAEgMAAgOQAAgagLgWQgOgVgbgSIAOgVQAgATATAbQASAbAAAjQAAAkgSAbQgSAaghAUg");
	this.shape_102.setTransform(443.3,365.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#58595B").s().p("Ag9BJIALgXQALAHALADQALAEAPAAQATAAALgKQAKgLAAgUIAAgLQgIALgLAHQgLAHgPAAQgNAAgKgEQgLgFgIgIQgJgIgFgLQgFgLAAgOQAAgPAFgMQAFgLAJgJQAIgIALgEQAMgFALAAQAPAAALAHQAKAGAJAKIAAgUIAfAAIAABpQAAAkgTAQQgSARghAAQgjAAgZgQgAgOg7QgGADgGAFQgFAEgDAHQgDAHAAAJQAAAHADAIQAEAHAEACQAFAFAHADQAIADAGAAQAHAAAHgDQAIgDAFgFQAEgBAFgIQADgHAAgIQAAgIgDgIQgFgIgEgDQgGgGgHgCQgFgCgJAAQgIAAgGACg");
	this.shape_103.setTransform(429,367.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#58595B").s().p("Ag7BbIAAi1IAjAAIAAA8QAAAaAFAHQAHAMAMAAQAGAAAGgEQAGgFADgGQADgIAAgWIAAg8IAkAAIAACCIghAAIAAgQIgHALQgDAEgGACQgFACgGAAQgGAAgHgEQgEgEgHgLIAABDg");
	this.shape_104.setTransform(413.5,368.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#58595B").s().p("AgkBRQgRgIgLgOIAWgUQAJALAMAGQALAGANAAQANAAAJgHQAJgIAAgMQAAgOgLgHQgLgHgRAAIgPAAIgFgSIAugzIhLAAIAAgbIB0AAIAAAXIgyAzIAUAFQALAEAGAFQAIAFADAIQAFAJAAANQAAANgFAJQgEAKgJAIQgHAHgMAFQgNAEgNAAQgVAAgRgJg");
	this.shape_105.setTransform(390.3,363.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#58595B").s().p("AgZBXQgMgFgJgJQgFgFgEgGQgDgFgEgKIgEgSQgBgLAAgNQAAgUAFgRQAEgQAKgPQAKgNAOgHQAPgIAQAAQASAAAMAFQAMAFANAKIgRAYQgKgIgIgDQgIgEgNAAQgIAAgIAEQgIAFgFAHQgFAIgDAKQgDAJgBANIAIgGIAJgGIAMgEQAGgCAGAAQAMAAAMAEQAMAEAIAHQAJAIAFAIQAEAKAAAOQAAAOgFALQgFALgJAIQgIAIgNAEQgMAFgOAAQgPAAgMgFgAgMADQgIAEgEADQgEAEgDAGQgDAHAAAFQAAAOAKAKQALAJAOAAQARAAAKgKQAJgJAAgOQAAgOgKgIQgJgJgRAAQgGAAgHACg");
	this.shape_106.setTransform(374.5,363.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#58595B").s().p("AgXA/QgRgbgBgkQABgjARgbQATgaAggUIAOAVQgNAJgLAKQgKAKgHAKQgDAKgFANQgCAMAAANQAAAcAKAVQAOAVAbASIgOAVQghgUgSgag");
	this.shape_107.setTransform(360.8,365.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#58595B").s().p("AAvBZIgOggIhCAAIgNAgIg0AAIBLixIAuAAIBMCxgAgTATIAmAAIgTgxg");
	this.shape_108.setTransform(337.2,363.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#58595B").s().p("Ag/A8IAggeQANARAPAAQASAAAAgZIAAhvIAxAAIAABvQAAAhgRARQgSASgeAAQgoAAgWgeg");
	this.shape_109.setTransform(319.9,363.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#58595B").s().p("AAoBZIhKhgIAABgIgxAAIAAixIAuAAIBIBdIAAhdIAxAAIAACxg");
	this.shape_110.setTransform(303.3,363.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#58595B").s().p("AAuBZIgNggIhCAAIgNAgIg0AAIBMixIAuAAIBLCxgAgTATIAmAAIgTgxg");
	this.shape_111.setTransform(283.2,363.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#58595B").s().p("AAZBZIgig2IgWAAIAAA2IgxAAIAAixIBSAAQAmAAAUAUQAQAPAAAaIAAABQAAAlglAQIArA+gAgfgCIAfAAQAaAAAAgVIAAgBQAAgVgaAAIgfAAg");
	this.shape_112.setTransform(264.9,363.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#58595B").s().p("AAuBZIgNggIhCAAIgNAgIg0AAIBMixIAtAAIBMCxgAgTATIAmAAIgTgxg");
	this.shape_113.setTransform(244.9,363.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AAoBZIhKhgIAABgIgxAAIAAixIAuAAIBIBdIAAhdIAxAAIAACxg");
	this.shape_114.setTransform(224.8,363.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#58595B").s().p("AgpBYQANgJALgKQALgKAFgKQAFgLADgMQADgMAAgOQAAgcgLgUQgMgUgcgTIAOgUQAgASASAcQATAaAAAjQAAAkgTAbQgSAbggATg");
	this.shape_115.setTransform(481.1,334.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgIQgHgJgNAAQgMAAgJAJQgIAJAAAQIAABJIgfAAIAAiEIAfAAIAAAVIAHgJQAFgFAEgDIAMgFQAGgCAGAAQAWAAANAOQANAOAAAYIAABTg");
	this.shape_116.setTransform(467.8,335.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#58595B").s().p("AgWBBQgNgGgIgIQgKgKgFgMQgGgOAAgPQAAgLAFgOQAGgNAIgKQAJgJAMgGQAMgGAMAAQAQAAAMAGQAMAGAJAKQAHAKAFANQAEAPAAALIgBAJIhhAAQADARALAIQAKAJANAAQALAAAJgEQAIgEAJgIIASAQQgJAKgOAIQgNAHgTAAQgOAAgMgFgAgWghQgJAKgCAPIBDAAQgBgIgCgGQgCgGgFgFQgEgFgGgCQgGgDgIAAQgMAAgKAKg");
	this.shape_117.setTransform(452.1,335.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#58595B").s().p("AhDBZIAAixIBEAAQAPAAANAFQALADALAJQAJAIAEALQAEAKABAOQgBAPgFAMQgFAIgKAJQgIAHgPAFQgPAEgLAAIgkAAIAAA5gAglADIAlAAQAQAAAKgHQALgIAAgPQAAgQgLgIQgKgIgQAAIglAAg");
	this.shape_118.setTransform(436.7,333.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#58595B").s().p("AgXA/QgSgbAAgkQAAgjASgaQATgcAggSIAOAUQgPAKgJAJQgJAJgIALQgEAJgDAOQgEALAAAOQAAAbALAWQANAVAcASIgOAVQgggTgTgbg");
	this.shape_119.setTransform(422.1,334.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#58595B").s().p("AgeBCQgIgCgHgFQgHgFgDgIQgEgJAAgJIAAgBQAAgKAEgJQAEgIAHgEQAHgFAKgDQALgCALAAIATABIARAEIAAgDQAAgOgJgHQgJgIgOAAQgLAAgJADIgSAGIgIgZIAWgIQAMgDAPAAQAeAAAOAPQAOAOAAAcIAABNIgeAAIAAgQQgGAHgLAHQgMAFgMAAQgKAAgJgDgAgUAKQgJAFAAALIAAAAQAAAKAIAFQAGAFAMAAQAHAAAFgCQAHgCAFgEQAFgDACgGQADgFAAgGIAAgJQgIgDgGgBIgRgBQgNAAgHAGg");
	this.shape_120.setTransform(400.8,335.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#58595B").s().p("AgdBZQgLgEgJgJQgJgKgFgNQgFgNAAgQQAAgRAFgLQAGgNAIgJQAJgJALgEQAMgGALAAQAPABALAHQAKAHAIAKIAAhJIAfAAIAAC4IgfAAIAAgWQgIAKgLAIQgKAHgPAAQgMAAgLgFgAgNgPQgJAEgEAFQgEAEgEAIQgDAIAAAKQAAAKADAIQAEAJAEAEQAGAGAHADQAHADAGAAQAIAAAGgDQAHgCAGgHQAGgGACgHQADgIAAgKQAAgJgDgJQgDgGgFgGQgGgFgHgEQgGgCgIgBQgGABgHACg");
	this.shape_121.setTransform(384.8,333);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#58595B").s().p("AgeBCQgIgCgHgFQgGgFgFgIQgEgJAAgJIAAgBQAAgLAFgIQADgHAIgFQAHgFAKgDQALgCALAAIATABIAQAEIAAgDQAAgOgIgHQgJgIgOAAQgKAAgKADIgSAGIgJgZIAXgIQAMgDAOAAQAfAAAOAPQAPAPAAAbIAABNIgfAAIAAgQQgGAHgMAHQgLAFgNAAQgJAAgJgDgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAHAFALAAQAGAAAGgCQAGgCAGgEQAEgDADgGQADgGAAgFIAAgJQgIgDgGgBIgRgBQgMAAgJAGg");
	this.shape_122.setTransform(368.8,335.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgIQgHgJgOAAQgLAAgIAJQgJAIAAARIAABJIgfAAIAAiEIAfAAIAAAVIAHgJQAFgFAFgDQAEgDAHgCQAGgCAGAAQAXAAAMAOQANAOAAAYIAABTg");
	this.shape_123.setTransform(353.8,335.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#58595B").s().p("AgWBBQgNgGgJgIQgKgLgEgLQgGgOAAgPQAAgNAFgMQAFgNAJgKQAJgJAMgGQALgGANAAQAQAAAMAGQALAGAJAKQAIAKAEANQAFAOAAAMIgBAJIhhAAQADAQAKAJQALAJANAAQALAAAJgEQAIgFAIgHIASAQQgJALgOAHQgNAHgTAAQgNAAgMgFgAgWghQgJAJgCAQIBDAAQgBgHgCgHQgDgHgEgEQgFgFgGgCQgGgDgHAAQgNAAgJAKg");
	this.shape_124.setTransform(338.2,335.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_125.setTransform(326.9,332.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_126.setTransform(319.6,332.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#58595B").s().p("AgWBBQgOgGgIgIQgJgKgFgMQgGgNAAgQQABgMAEgNQAGgNAIgKQAIgJANgGQALgGANAAQAQAAAMAGQALAGAKAKQAGAKAFANQAEAPABALIgBAJIhhAAQADARAKAIQALAJANAAQAKAAAJgEQAJgEAIgIIATAQQgKALgOAHQgNAHgSAAQgOAAgMgFgAgWghQgJAKgCAPIBDAAQgBgIgCgGQgDgGgFgFQgDgFgGgCQgGgDgIAAQgMAAgKAKg");
	this.shape_127.setTransform(308.2,335.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#58595B").s().p("AgmBEIAAiEIAfAAIAAAeQAHgPAJgJQANgJARAAIAAAhIgCAAQgLAAgHADQgIADgHAHQgEAHgDAKQgEAIAAANIAAAzg");
	this.shape_128.setTransform(295.8,335.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAGgKAMgIQAMgIAOAAQAKAAANAFQALAFAJAJQAJAKAFAMQAFANAAARQAAAQgFALQgFANgJAJQgKAKgKAEQgLAFgNAAQgOAAgLgHQgNgJgFgIIAAA+gAgOg6QgGADgGAGQgFAFgEAJQgDAIAAAKQAAAKADAHQAEAHAFAFQAHAGAFADQAIADAGAAQAIAAAGgDQAHgDAGgGQAFgFADgHQADgHAAgKQAAgLgDgHQgDgJgFgFQgGgGgHgDQgGgDgIAAQgGAAgIADg");
	this.shape_129.setTransform(281.8,337.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#58595B").s().p("AgeBCQgJgCgGgFQgGgFgEgIQgFgIAAgKIAAgBQAAgKAFgJQADgHAIgFQAGgEALgEQALgCALAAIATABIAQAEIAAgDQAAgOgJgHQgIgIgOAAQgLAAgKADIgSAGIgIgZIAXgIQAMgDAOAAQAfAAAOAPQAPAPAAAbIAABNIgfAAIAAgQQgGAHgMAHQgLAFgMAAQgKAAgJgDgAgVAKQgIAFAAALIAAAAQAAAKAHAFQAIAFALAAQAHAAAFgCQAGgBAFgFQAFgDADgGQACgEAAgHIAAgJIgNgEIgRgBQgNAAgIAGg");
	this.shape_130.setTransform(257.4,335.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#58595B").s().p("ABHBEIAAhKQAAgQgIgIQgGgJgOAAQgMAAgIAJQgIAIAAARIAABJIgdAAIAAhKQAAgQgHgIQgHgJgOAAQgNAAgHAJQgIAJAAAQIAABJIgfAAIAAiEIAfAAIAAAUIAHgIQAEgFAFgDQAEgDAHgCIAOgCQAOAAALAHQAHAFAGAMQAJgMAKgFQALgHAPAAQAXAAAMANQANAOAAAYIAABUg");
	this.shape_131.setTransform(238.3,335.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#58595B").s().p("AguA2QgNgOAAgYIAAhTIAfAAIAABKQAAAQAIAIQAHAJANAAQALAAAKgJQAIgIAAgQIAAhKIAfAAIAACEIgfAAIAAgVQgHAJgKAIQgKAHgNAAQgXAAgMgOg");
	this.shape_132.setTransform(218.1,335.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_133.setTransform(206.7,332.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAHgLALgHQAMgIANAAQALAAANAFQAKAFAKAJQAIAIAGAOQAFANAAARQAAAQgFALQgFANgJAJQgJAKgLAEQgLAFgNAAQgOAAgMgHQgKgIgIgJIABA+gAgNg6QgIADgFAGQgGAGgDAIQgDAHAAALQAAAKADAHQADAGAGAGQAGAGAHADQAGADAHAAQAHAAAHgDQAHgDAFgGQAFgEAEgIQADgHAAgKQAAgLgDgHQgEgJgFgFQgFgGgHgDQgHgDgHAAQgHAAgGADg");
	this.shape_134.setTransform(194.8,337.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#58595B").s().p("AgPBDIAAgjIAfAAIAAAjgAgPgfIAAgjIAfAAIAAAjg");
	this.shape_135.setTransform(450.4,304.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgOAAQgLAAgIAJQgJAIAAAQIAABKIgfAAIAAiFIAfAAIAAAWIAHgKIAKgHIALgFQAEgCAIAAQAXAAAMAOQANAOAAAXIAABUg");
	this.shape_136.setTransform(439,304.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#58595B").s().p("AgbBcQgNgGgKgJQgKgKgFgMQgFgOAAgNQAAgOAFgOQAGgKAJgKQALgLAMgEQAOgGANAAQARAAALAGQAOAFAJAKQAKAKAFAKQAFANAAAOQAAAOgFAOQgFAMgKAKQgKAKgNAFQgNAGgPAAQgOAAgNgGgAgQgKQgHADgFAGQgGAFgCAHQgDAHAAAJQAAAJADAIQACAIAGAGQAHAHAGACQAHAEAIAAQAJAAAHgEQAHgCAGgHQAFgFADgJQADgHAAgJQAAgJgDgIQgDgHgFgFQgHgHgGgCQgHgEgJAAQgJAAgHAEgAgLg3IAZgqIAcANIgfAdg");
	this.shape_137.setTransform(422.7,302);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_138.setTransform(410.7,302.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#58595B").s().p("AgTBAQgNgGgJgJQgJgJgGgNQgFgOAAgNQAAgMAFgOQAGgMAJgKQAKgKAMgFQAOgGAMAAQATAAANAHQAMAFAKALIgTAVQgIgIgIgEQgHgFgMAAQgHAAgHAEQgGADgGAGQgFAFgDAJQgDAHAAAIQAAAJADAHQADAIAFAGQAHAHAGACQAGAEAIAAQAMAAAHgFIAQgMIATASQgJAKgNAJQgOAHgTAAQgMAAgOgGg");
	this.shape_139.setTransform(399.9,304.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#58595B").s().p("AgTBAQgMgFgKgKQgJgJgGgNQgFgOAAgNQAAgMAFgOQAGgMAJgKQALgLALgEQAOgGAMAAQAUAAAMAHQAMAFAKALIgTAVQgIgIgHgEQgIgFgMAAQgHAAgGAEQgIADgFAGQgFAFgDAJQgDAHAAAIQAAAJADAHQADAIAFAGQAHAHAGACQAGAEAJAAQAKAAAJgFIAPgMIATASQgKALgNAIQgNAHgTAAQgMAAgOgGg");
	this.shape_140.setTransform(385.7,304.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#58595B").s().p("AgWBAQgLgEgLgKQgJgJgFgNQgGgNAAgPQAAgMAFgOQAEgLAKgLQAKgLALgEQAMgGAMAAQAQAAAMAGQAMAGAIAKQAIAJAFAOQAEAOAAAMIgBAIIhhAAQADAQAKAKQALAIANAAQALAAAJgEQAIgDAIgJIATAQQgJAMgPAHQgNAHgTAAQgLAAgOgGgAgWgiQgJAKgCAQIBDAAIgDgOQgDgHgEgEQgFgFgFgDQgGgDgIAAQgMAAgKAKg");
	this.shape_141.setTransform(370.6,304.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#58595B").s().p("AgtBVIgOgGIAKgXIAJAEQAFABAEAAQAHAAAEgDQAFgDADgJIg3iFIAhAAIAkBiIAjhiIAfAAIg1CJQgDAIgFAJQgEAHgEAFIgLAHIgPACQgJAAgJgDg");
	this.shape_142.setTransform(356,306.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgNAAQgMAAgIAJQgJAJAAAPIAABKIgfAAIAAiFIAfAAIAAAWIAHgKIAJgHQAHgEAFgBQAEgCAIAAQAXAAAMAOQANAPAAAWIAABUg");
	this.shape_143.setTransform(341,304.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_144.setTransform(329.4,302.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#58595B").s().p("AgeBDQgJgDgGgFQgHgFgDgIQgEgIgBgKIAAgBQABgKAEgJQAEgIAHgDQAHgGAKgCQAKgDAMAAIATABIAQAFIAAgEQAAgOgIgHQgIgIgPAAQgLAAgJADIgSAGIgJgZIAXgIQAMgDAOAAQAfAAAOAPQAPAPAAAbIAABOIgfAAIAAgRQgGAHgLAHQgMAFgMAAQgJAAgKgCgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAIAFAKAAQAEAAAIgCQAHgCAFgEQAEgDADgGQADgEAAgHIAAgJIgOgDQgIgCgJAAQgNAAgIAGg");
	this.shape_145.setTransform(310.3,304.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#58595B").s().p("AgmBEIAAiFIAfAAIAAAfQAHgQAJgJQANgJARABIAAAhIgCAAQgKAAgIADQgKAEgFAGQgEAHgDAJQgEAIAAAOIAAAzg");
	this.shape_146.setTransform(299.1,304.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#58595B").s().p("AgWBAQgLgEgLgKQgJgJgFgNQgGgNAAgPQAAgMAFgOQAEgLAKgLQAKgLALgEQAMgGAMAAQAQAAAMAGQAMAGAIAKQAIAJAFAOQAEAOAAAMIgBAIIhhAAQADARALAJQAKAIANAAQALAAAJgEQAJgEAHgIIATAQQgJAMgPAHQgNAHgTAAQgLAAgOgGgAgWgiQgJAKgCAQIBDAAIgDgOQgDgHgEgEQgFgFgFgDQgGgDgIAAQgMAAgKAKg");
	this.shape_147.setTransform(285.5,304.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#58595B").s().p("ABHBEIAAhKQAAgQgIgJQgGgIgOAAQgMAAgIAIQgIAJAAAQIAABKIgdAAIAAhLQAAgPgHgJQgHgIgNAAQgOAAgHAJQgIAIAAARIAABJIgfAAIAAiFIAfAAIAAAVIAHgJIAJgHIALgFQAGgCAIAAQAPAAAKAGQAIAHAFALQAHgLANgHQAJgGAQAAQAXAAAMANQANAOAAAYIAABUg");
	this.shape_148.setTransform(265.8,304.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_149.setTransform(250,302.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#58595B").s().p("AgmBEIAAiFIAfAAIAAAfQAHgQAJgJQANgJARABIAAAhIgCAAQgKAAgJADQgJAEgFAGQgEAGgEAKQgDAJAAANIAAAzg");
	this.shape_150.setTransform(241.7,304.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#58595B").s().p("AhEBZIAAixIBFAAQAOAAAOAEQAMAFAJAHQAKAJAEAKQAFANAAAMQAAAPgGAMQgGAJgJAIQgKAHgNAEQgOAEgMAAIgkAAIAAA6gAglADIAlAAQAPAAALgHQALgJAAgOQAAgQgLgJQgLgIgPAAIglAAg");
	this.shape_151.setTransform(228,302.6);

	this.instance_2 = new lib.Group_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(340.7,341.1,1,1,0,0,0,198,71.5);
	this.instance_2.alpha = 0.25;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F09E53").s().p("A+hFAIAAp/MA9DAAAIAAJ/g");
	this.shape_152.setTransform(340.6,240);

	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(329.5,116.7,1,1,0,0,0,162.7,101.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAECpIAAg+IhaAAIAAgtIBXjmIA7AAIAADgIAbAAIAAAzIgbAAIAAA+gAgmA4IAqAAIAAh6g");
	this.shape_153.setTransform(801.4,240.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgLCqIAAkTIgjAMIAAg8IAzgQIAqAAIAAFTg");
	this.shape_154.setTransform(785.1,240.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAlCpIgMhDIg0AAIgKBDIg5AAIBAlRIA9AAIBAFRgAgSAxIAiAAIgQhug");
	this.shape_155.setTransform(762.4,240.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgwDdIAAlRIA6AAIAAFRgAgniIIAshTIArAWIg1A9g");
	this.shape_156.setTransform(749.9,235.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhVCpIAAlRIA3AAQA3AAAeApQAfAqAABRIAAAJQAABRgfAqQgeApg3AAgAgaBzIACAAQAyAAAAhuIAAgJQAAhugyAAIgCAAg");
	this.shape_157.setTransform(733.3,240.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#58595B").s().p("AgXA0IAshcIg3AAIAAgLIBFAAIAAAJIgtBeg");
	this.shape_158.setTransform(844.7,359);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#58595B").s().p("AgpBYQANgIALgLQAKgKAHgKQAFgMACgLQAEgPAAgLQAAgbgMgVQgMgUgcgTIAOgVQAgATATAbQASAbAAAjQAAAkgSAbQgTAaggAUg");
	this.shape_159.setTransform(834.4,365.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#58595B").s().p("Ag9BJIALgXQAMAHAKADQAMAEAOAAQATAAALgKQALgLAAgUIAAgLQgJALgLAHQgLAHgPAAQgNAAgKgEQgLgFgIgIQgJgIgFgLQgFgKAAgPQAAgQAFgLQAFgLAJgJQAIgIALgEQAMgFALAAQAPAAAMAHQAKAHAJAJIAAgUIAeAAIAABpQAAAkgTAQQgTARggAAQgjAAgZgQgAgOg7QgGACgGAGQgFAEgDAHQgDAHAAAJQAAAIADAHQADAHAGACQADAFAIADQAIADAGAAQAGAAAIgDQAIgDAFgFQAFgCAEgHQADgHAAgIQAAgJgDgHQgEgHgFgEQgFgGgIgCQgGgCgIAAQgIAAgGACg");
	this.shape_160.setTransform(820.1,367.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#58595B").s().p("Ag6BbIAAi1IAiAAIAAA8QAAAZAFAIQAIAMALAAQAGAAAGgEQAHgFADgGQACgIAAgWIAAg8IAjAAIAACCIggAAIAAgQIgHALQgDAEgGACQgFACgFAAQgHAAgHgEQgEgEgHgLIAABDg");
	this.shape_161.setTransform(804.6,368.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#58595B").s().p("AATBZIAAgoIhYAAIgFgWIBhhzIAaAAIAABvIAaAAIAAAaIgaAAIAAAogAglAXIA4AAIAAhEg");
	this.shape_162.setTransform(780.7,363.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#58595B").s().p("AgmBWQgOgGgLgJIARgYQAMAJAIADQAIAEANAAQAJAAAGgEQAIgDAGgIQAFgIADgKQADgKABgNQgHAJgKAFQgKAFgNAAQgPAAgLgEQgMgEgIgHQgIgIgFgIQgEgLAAgNQAAgOAFgKQAFgMAIgIQAIgIANgFQAMgFAPAAQAPAAAMAFQAMAFAJAJQAKAKAGAQQAFARAAAZQAAAVgFARQgFASgKANQgJAMgPAIQgPAHgPAAQgTAAgNgGgAgbg2QgJAJAAAPQAAAOAKAJQAKAHAQAAQAGAAAIgBQAFgCAGgFQAFgFACgFQADgHAAgGQAAgGgDgHQgDgGgEgEQgGgFgGgCQgIgDgGAAQgRAAgJAKg");
	this.shape_163.setTransform(763.8,363.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#58595B").s().p("AgXA/QgSgbAAgkQAAgjASgbQATgbAggTIAOAVQgPAKgJAJQgLAKgGAKQgEAKgEANQgDAMAAANQAAAcALAVQANAWAcARIgOAVQghgUgSgag");
	this.shape_164.setTransform(750.1,365.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#58595B").s().p("AhDBZIAAixIAyAAIAACFIBUAAIAAAsg");
	this.shape_165.setTransform(729.3,363.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#58595B").s().p("Ag7BHQgXgVAAgpIAAhiIAzAAIAABhQAAAmAfAAQAgAAAAglIAAhiIAzAAIAABhQAAAqgXAVQgWATgmAAQgmAAgVgTg");
	this.shape_166.setTransform(711.2,363.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#58595B").s().p("AhNBZIAAgkIBXhjIhUAAIAAgqICYAAIAAAkIhXBjIBXAAIAAAqg");
	this.shape_167.setTransform(692.7,363.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#58595B").s().p("AAuBZIgNggIhCAAIgNAgIg0AAIBMixIAuAAIBLCxgAgTATIAmAAIgTgxg");
	this.shape_168.setTransform(673.6,363.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#58595B").s().p("AgoBYQAIgFAPgOQAKgJAGgLQAGgLACgMQAEgMAAgOQgBgbgLgVQgNgVgagSIANgUQAgASASAcQATAbgBAiQABAjgTAcQgSAbggATg");
	this.shape_169.setTransform(901,334.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgIQgHgJgOAAQgLAAgIAJQgJAJAAAQIAABJIgfAAIAAiEIAfAAIAAAVIAIgJQAEgFAFgDQAEgDAHgCQAGgCAGAAQAXAAANAOQAMAOAAAYIAABTg");
	this.shape_170.setTransform(887.7,335.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#58595B").s().p("AgWBBQgMgFgKgJQgKgLgEgLQgGgOAAgPQAAgNAFgMQAFgNAJgKQAJgJAMgGQAMgGAMAAQAQAAAMAGQANAHAHAJQAIAJAFAOQAEAPAAALIgBAEIAAAFIhhAAQADARAKAIQALAJANAAQALAAAJgEQAIgFAIgHIASAQQgIAKgPAIQgNAHgTAAQgNAAgMgFgAgWghQgJAKgCAPIBDAAIgDgOQgCgGgFgFQgFgFgGgCQgGgDgHAAQgNAAgJAKg");
	this.shape_171.setTransform(872,335.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#58595B").s().p("AhEBZIAAixIBFAAQAQAAAMAFQALADAKAJQAKAIAEALQAFAKgBAOQABAQgGALQgFAJgKAIQgIAGgPAGQgOAEgMAAIgjAAIAAA5gAgkADIAkAAQAQAAALgHQAKgIAAgPQAAgQgKgIQgLgIgQAAIgkAAg");
	this.shape_172.setTransform(856.6,333.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#58595B").s().p("AgXA/QgSgbAAgkQAAgjASgaQATgcAggSIAOAUQgPAKgJAJQgJAJgIALQgEALgDAMQgEALAAAOQAAAbALAWQAOAVAbASIgOAVQgggTgTgbg");
	this.shape_173.setTransform(842,334.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#58595B").s().p("AgeBCQgIgCgHgFQgHgFgEgIQgEgJAAgJIAAgBQAAgKAEgJQAEgHAIgFQAHgFAKgDQALgCALAAIATABIAQAEIAAgDQAAgOgIgHQgJgIgOAAQgKAAgKADIgSAGIgJgZIAXgIQAMgDAOAAQAfAAAOAPQAPAPAAAbIAABNIgfAAIAAgQQgGAHgMAHQgLAFgNAAQgJAAgJgDgAgVAKQgIAFAAALIAAAAQAAAJAIAGQAHAFALAAQAGAAAGgCQAHgCAEgEQAGgDACgGQADgFAAgGIAAgJQgIgDgGgBIgRgBQgMAAgJAGg");
	this.shape_174.setTransform(820.7,335.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#58595B").s().p("AgdBZQgKgEgKgJQgJgLgFgMQgFgNAAgQQAAgRAFgLQAGgOAIgIQAJgJALgEQANgGAKAAQAPABALAHQALAIAHAJIAAhJIAfAAIAAC4IgfAAIAAgWQgHAJgLAJQgLAHgPAAQgLAAgMgFgAgNgPQgHAEgGAFQgFAFgDAHQgDAIAAAKQAAAKADAIQADAIAFAFQAHAHAGACQAHADAGAAQAIAAAGgDQAHgCAGgHQAGgGACgHQAEgJAAgJQAAgIgEgKQgDgGgFgGQgGgFgHgEQgGgCgIgBQgGABgHACg");
	this.shape_175.setTransform(804.7,333);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#58595B").s().p("AgeBCQgIgCgIgFQgFgFgFgIQgDgIAAgKIAAgBQAAgMADgHQAEgHAHgFQAHgEALgEQALgCALAAIATABIAQAEIAAgDQAAgOgIgHQgJgIgOAAQgLAAgJADIgSAGIgJgZIAXgIQAMgDAOAAQAeAAAPAPQAOAPAAAbIAABNIgeAAIAAgQQgHAIgLAGQgLAFgNAAQgJAAgJgDgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAGAFAMAAQAGAAAGgCQAFgBAHgFQAEgDADgGQACgGABgFIAAgJQgIgDgHgBQgHgBgJAAQgNAAgIAGg");
	this.shape_176.setTransform(788.7,335.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#58595B").s().p("AAcBEIAAhKQABgQgIgIQgHgJgOAAQgLAAgIAJQgJAJAAAQIAABJIgfAAIAAiEIAfAAIAAAVIAIgJQADgFAGgDQAEgDAHgCQAGgCAGAAQAXAAANAOQAMAOAAAYIAABTg");
	this.shape_177.setTransform(773.8,335.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#58595B").s().p("AgWBBQgMgFgKgJQgKgLgEgLQgGgOAAgPQAAgNAFgMQAFgNAJgKQAJgJAMgGQAMgGAMAAQAQAAAMAGQANAHAHAJQAIAJAFAOQAEAPAAALIgBAEIAAAFIhhAAQADARAKAIQALAJANAAQALAAAJgEQAIgFAIgHIASAQQgIAKgPAIQgMAHgUAAQgNAAgMgFgAgWghQgJAKgCAPIBDAAIgDgOQgCgGgFgFQgFgFgFgCQgGgDgIAAQgNAAgJAKg");
	this.shape_178.setTransform(758.1,335.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_179.setTransform(746.8,332.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_180.setTransform(739.5,332.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#58595B").s().p("AgWBBQgNgGgJgIQgJgJgGgNQgEgNAAgQQgBgMAFgNQAGgNAIgKQAIgJAMgGQAMgGANAAQAQAAAMAGQAMAGAIAKQAIAKAFANQADAMAAAOIAAAJIhhAAQADARALAIQAKAJANAAQALAAAJgEQAJgFAIgHIASAQQgKALgNAHQgNAHgUAAQgNAAgMgFgAgWghQgIAJgDAQIBDAAQgBgIgDgGQgBgFgFgGQgFgFgFgCQgHgDgHAAQgNAAgJAKg");
	this.shape_181.setTransform(728.1,335.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#58595B").s().p("AgmBEIAAiEIAfAAIAAAeQAGgPAKgJQAMgJASAAIAAAhIgCAAQgLAAgHADQgJADgGAHQgFAIgDAJQgDAIAAANIAAAzg");
	this.shape_182.setTransform(715.8,335.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAHgLALgHQAMgIANAAQALAAANAFQALAFAIAJQAJAIAGAOQAFANAAARQAAAQgFALQgGANgJAJQgIAKgLAEQgMAFgMAAQgOAAgMgHQgLgIgHgJIABA+gAgNg6QgIADgFAGQgFAFgDAJQgEAHAAALQAAAKAEAHQADAHAFAFQAGAGAHADQAHADAGAAQAHAAAHgDQAGgDAHgGQAEgEAEgIQADgHAAgKQAAgLgDgHQgEgJgEgFQgHgGgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_183.setTransform(701.7,337.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#58595B").s().p("AgeBCQgKgCgFgFQgHgFgEgIQgDgJAAgJIAAgBQAAgKADgJQAFgIAHgEQAIgFAJgDQAMgCAKAAIATABIAQAEIAAgDQABgOgJgHQgJgIgOAAQgLAAgJADIgSAGIgJgZQANgGAKgCQAMgDAPAAQAeAAAOAPQAOAOAAAcIAABNIgeAAIAAgQQgGAHgMAHQgLAFgNAAQgJAAgJgDgAgVAKQgIAFAAALIAAAAQAAAKAIAFQAHAFALAAQAHAAAFgCQAGgCAGgEQAFgDACgGQADgFAAgGIAAgJIgOgEIgRgBQgNAAgIAGg");
	this.shape_184.setTransform(677.3,335.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#58595B").s().p("ABHBEIAAhKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAIAAARIAABJIgdAAIAAhKQAAgQgHgIQgIgJgMAAQgMAAgJAJQgIAKAAAPIAABJIgfAAIAAiEIAfAAIAAAUIAIgIIAIgIQAEgDAIgCQAHgCAGAAQAOAAALAHQAHAGAGALQAJgMAKgFQAMgHAPAAQAWAAANANQAMAOAAAYIAABUg");
	this.shape_185.setTransform(658.2,335.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#58595B").s().p("AguA2QgNgOAAgYIAAhTIAfAAIAABKQAAAQAHAIQAIAJANAAQAMAAAIgJQAJgIgBgQIAAhKIAgAAIAACEIggAAIAAgVQgFAKgLAHQgKAHgNAAQgXAAgMgOg");
	this.shape_186.setTransform(638,335.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#58595B").s().p("AgOBdIAAi5IAdAAIAAC5g");
	this.shape_187.setTransform(626.6,332.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#58595B").s().p("AhEBZIAAiuIAfAAIAAAXQAIgLALgHQAKgIAPAAQAKAAAMAFQAMAFAJAJQAIAIAFAOQAGALAAATQAAARgFAKQgFAMgJAKQgKAKgLAEQgKAFgMAAQgPAAgLgHQgLgIgHgJIAAA+gAgOg6QgGADgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAGAGAGQAGAGAGADQAHADAHAAQAHAAAIgDQAGgDAFgGQAGgGADgGQADgHAAgKQAAgLgDgHQgDgIgGgGQgFgGgGgDQgIgDgHAAQgHAAgHADg");
	this.shape_188.setTransform(614.7,337.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#58595B").s().p("AgPBDIAAgjIAgAAIAAAjgAgPgfIAAgjIAgAAIAAAjg");
	this.shape_189.setTransform(876.9,304.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgOAAQgLAAgIAJQgJAIAAAQIAABKIgfAAIAAiFIAfAAIAAAWIAHgKIAKgHQAHgEAEgBQAEgCAIAAQAXAAAMAOQANAOAAAXIAABUg");
	this.shape_190.setTransform(865.5,304.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#58595B").s().p("AgbBcQgNgGgKgJQgKgKgFgMQgFgOAAgNQAAgOAFgOQAGgKAJgKQALgLAMgEQAOgGANAAQARAAALAGQAOAFAJAKQAKAKAFAKQAFANAAAOQAAAOgFAOQgFAMgKAKQgKAKgNAFQgNAGgPAAQgOAAgNgGgAgPgKQgIADgFAGQgGAFgCAHQgDAHAAAJQAAAJADAIQACAIAGAGQAHAHAGACQAHAEAIAAQAJAAAHgEQAHgCAGgHQAFgFADgJQADgHAAgJQAAgJgDgIQgDgHgFgFQgHgHgGgCQgHgEgJAAQgJAAgGAEgAgLg3IAZgqIAcANIgfAdg");
	this.shape_191.setTransform(849.1,302);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_192.setTransform(837.1,302.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#58595B").s().p("AgTBAQgNgGgJgJQgJgJgGgNQgFgOAAgNQAAgMAFgOQAGgMAJgKQAJgKANgFQAOgGAMAAQATAAANAHQAMAFAKALIgTAVQgIgIgHgEQgIgFgMAAQgHAAgGAEQgIADgFAGQgFAFgDAJQgDAHAAAIQAAAJADAHQACAIAGAGQAHAHAGACQAGAEAJAAQAKAAAJgFIAQgMIASASQgKALgNAIQgNAHgTAAQgMAAgOgGg");
	this.shape_193.setTransform(826.4,304.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#58595B").s().p("AgTBAQgMgGgKgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgLAKgLQAKgKAMgFQAOgGAMAAQATAAANAHQANAGAJAKIgTAVQgHgHgIgFQgIgFgMAAQgHAAgHAEQgGADgGAGQgFAFgDAJQgDAHAAAIQAAAJADAHQADAJAFAFQAHAHAGACQAGAEAIAAQAMAAAIgFQAHgEAIgIIATASQgKALgNAIQgNAHgTAAQgMAAgOgGg");
	this.shape_194.setTransform(812.2,304.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#58595B").s().p("AgVBAQgNgEgKgKQgJgIgFgOQgFgLAAgRQAAgOAEgMQAFgMAJgKQAJgKALgFQANgGAMAAQAQAAAMAGQALAFAKALQAIAJAEAOQADAMAAAOIAAAIIhhAAQADARALAJQALAIAMAAQALAAAJgEQAIgDAJgJIASAQQgKAMgOAHQgOAHgRAAQgNAAgMgGgAgVgiQgKAJgCARIBDAAQgBgIgCgGQgDgHgEgEQgFgFgFgDQgHgDgHAAQgNAAgIAKg");
	this.shape_195.setTransform(797.1,304.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#58595B").s().p("AgsBVIgPgGIAKgXIAJAEIAJABQAHAAAFgDQAEgDADgJIg4iFIAiAAIAjBiIAjhiIAhAAIg2CJQgDAIgFAJQgEAHgEAFIgMAHQgIACgGAAQgJAAgIgDg");
	this.shape_196.setTransform(782.5,306.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgHgJQgIgIgOAAQgLAAgIAJQgJAJAAAPIAABKIgfAAIAAiFIAfAAIAAAWIAIgKIAJgHQAGgEAFgBQADgCAJAAQAXAAANAOQAMAOAAAXIAABUg");
	this.shape_197.setTransform(767.5,304.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#58595B").s().p("AgOBcIAAiFIAdAAIAACFgAgPg9IAAgeIAfAAIAAAeg");
	this.shape_198.setTransform(755.8,302.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#58595B").s().p("AgeBDQgKgDgFgFQgHgFgEgIQgDgIAAgKIAAgBQAAgKADgJQAGgIAGgDQAIgGAJgCQAKgDAMAAIATABIAQAFIAAgEQAAgOgJgHQgIgIgOAAQgKAAgLADIgSAGIgIgZIAXgIQAMgDAPAAQAeAAAOAPQAOAPAAAbIAABOIgeAAIAAgRQgGAHgMAHQgMAFgMAAQgIAAgKgCgAgVAKQgIAFAAALIAAAAQAAAKAHAFQAJAFAKAAQAEAAAIgCQAHgCAFgEQAFgEACgFQACgEAAgHIAAgJIgNgDQgIgCgJAAQgOAAgHAGg");
	this.shape_199.setTransform(736.7,304.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#58595B").s().p("AgdBZQgLgEgJgJQgIgJgFgNQgGgOAAgQQAAgRAFgLQAFgMAJgKQAJgJALgEQAMgFALAAQAOAAAMAHQAKAIAIAJIAAhJIAfAAIAAC4IgfAAIAAgWQgIALgKAHQgMAHgOAAQgLAAgMgFgAgNgPQgHADgFAGQgHAGgCAGQgDAIAAAKQAAAKADAIQADAIAGAFQAEAGAIADQAHAEAGAAQAHAAAHgEQAKgEADgFQAGgGADgHQACgIAAgKQAAgJgCgJQgDgGgGgGQgDgDgKgGQgHgDgHABQgGgBgHADg");
	this.shape_200.setTransform(720.7,302.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#58595B").s().p("AAdBEIAAhKQAAgQgIgJQgHgIgOAAQgLAAgIAJQgJAIAAAQIAABKIgfAAIAAiFIAfAAIAAAWIAHgKIAKgHQAHgEAEgBQAEgCAIAAQAXAAAMAOQANAOAAAXIAABUg");
	this.shape_201.setTransform(704.7,304.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#58595B").s().p("AguA2QgNgOAAgXIAAhUIAfAAIAABKQAAAQAIAJQAHAIANAAQAMAAAIgJQAJgIAAgQIAAhKIAfAAIAACFIgfAAIAAgWQgIALgJAGQgKAHgNAAQgXAAgMgOg");
	this.shape_202.setTransform(688.7,304.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#58595B").s().p("Ag9BJIALgXIAWAKQALAEAPAAQATAAALgLQALgLAAgUIAAgKQgJALgLAHQgLAHgPAAQgMAAgLgEQgLgFgIgIQgJgIgFgMQgFgKAAgOQAAgPAFgMQAFgMAJgIQAJgJAKgEQAMgEALAAQAPAAALAHQAMAHAHAJIAAgUIAfAAIAABpQAAAkgTAQQgSARghAAQgiAAgagQgAgOg7QgGADgGAFQgFAEgDAHQgDAIAAAHQAAAIADAIQAEAHAEACQAGAGAGACQAIADAGAAQAIAAAGgDQAHgCAGgGQAEgBAFgIQADgHAAgIQAAgJgDgHQgFgIgEgDQgGgGgHgCQgGgDgIAAQgHAAgHADg");
	this.shape_203.setTransform(672,306.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#58595B").s().p("AgWBAQgMgEgJgKQgKgJgFgNQgGgNAAgPQAAgMAFgOQAGgMAIgKQAKgLALgEQAMgGAMAAQAQAAAMAGQAMAFAJALQAHAJAFAOQAEAOAAAMIgBAIIhhAAQADARALAJQALAIAMAAQALAAAJgEQAIgDAJgJIASAQQgJALgOAIQgOAHgSAAQgMAAgOgGgAgWgiQgJALgCAPIBDAAQgBgIgCgGQgDgHgEgEQgEgFgGgDQgGgDgIAAQgMAAgKAKg");
	this.shape_204.setTransform(656.1,304.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#58595B").s().p("AggBUQgUgHgPgOIASgXQAOALANAGQANAGAPAAQAPAAAIgGQAIgFAAgLQAAgFgBgEQgBgDgFgEIgNgGIgrgNQgNgFgGgDQgHgGgFgJQgEgKAAgLQAAgLAFgLQAFgKAIgGQAHgHAMgEQAKgDAOAAQAUAAANAFQARAHANAKIgRAYQgNgJgLgFQgMgFgKAAQgPAAgHAHQgHAGAAAJQAAAFABAEIAHAHIANAGIATAGQAKACAPAGQALAEAHAFQAHAFAEAJQADAIAAAMQAAANgEAJQgEAJgJAIQgJAHgLADQgNAEgNAAQgSAAgTgHg");
	this.shape_205.setTransform(640.1,302.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#54B5E6").s().p("A+hFAIAAp/MA9CAAAIAAJ/g");
	this.shape_206.setTransform(759.7,240);

	this.instance_4 = new lib.Group_9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(759.8,341.1,1,1,0,0,0,198,71.5);
	this.instance_4.alpha = 0.25;

	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(764.3,116.7,1,1,0,0,0,162.7,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.instance_3},{t:this.shape_152},{t:this.instance_2},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_1},{t:this.instance},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(480));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(829.6,229.1,1317.5,413.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;