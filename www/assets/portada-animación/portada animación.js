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
	height: 1036,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/portada animación_atlas_.png", id:"portada animación_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"portada animación_atlas_", frames: [[1252,0,343,240],[875,0,375,303],[1106,498,189,241],[1252,242,211,254],[875,305,229,208],[555,0,318,572],[875,515,187,210],[731,727,166,172],[555,574,174,168],[0,1044,1439,144],[0,0,553,1042]]}
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



(lib.globo1 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.globo2 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.globo3 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.globo4 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.globo5 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.globo6 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.globo7 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.globo8 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.globo9 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.modeloPLEGRIDY = function() {
	this.spriteSheet = ss["portada animación_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.modeloPLEGRIDY();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.2,573.1);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.7,132);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.3,166.7);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,132.6);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.1,139.7);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,114.4);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.9,314.6);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.3,94.6);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.9,115.5);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.globo9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,92.4);


(lib.PLAY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15).p("AN2AAI81QqMAAAghTg");
	this.shape.setTransform(20.9,-4,1,1,0,0,0,-5.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(15).p("A63AAQAAFeCHE/QCDE0DvDvQDuDtE0CEQE/CHFdAAQFeAAE/iHQE0iEDujtQDvjvCDk0QCHk/AAleQAAldiHk/QiDk0jvjvQjujuk0iDQk/iHleAAQldAAk/CHQk0CDjuDuQjvDviDE0QiHE/AAFdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDE4EC").s().p("AqcYxQk0iDjujuQjvjviDk0QiHk/AAleQAAlcCHlAQCDk1DvjtQDujvE0iCQFAiHFcAAQFdAAFACHQE0CCDuDvQDvDtCCE1QCHFAAAFcQAAFeiHE/QiCE0jvDvQjuDuk0CDQlACHldAAQlcAAlAiHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:0,y:0}},{t:this.shape_1,p:{x:0,y:0}},{t:this.shape,p:{x:20.9,y:-4}}]}).to({state:[{t:this.shape_2,p:{x:6,y:4}},{t:this.shape_1,p:{x:6,y:4}},{t:this.shape,p:{x:26.9,y:0}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.5,-194.5,374.1,374.4);


(lib._2semanas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(-719.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-719.5,-72,1439,144);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.4,57.8,1,1,0,0,0,51.4,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.9,115.5);


(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		/* Detener un clip de película
		Detiene el clip de película especificado en el escenario.
		
		Instrucciones:
		1. Utilice este código para clips de película actualmente en reproducción.
		*/
		
		this.movieClip_1.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(20));

	// Capa 1
	this.semanas = new lib._2semanas();
	this.semanas.parent = this;
	this.semanas.setTransform(-21.5,368.1,1.361,1.361);
	this.semanas.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.semanas).to({scaleX:1,scaleY:1,x:0.5,y:0,alpha:1},30).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1001.1,270.1,1959.2,196.1);


(lib.globos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		/* Detener un clip de película
		Detiene el clip de película especificado en el escenario.
		
		Instrucciones:
		1. Utilice este código para clips de película actualmente en reproducción.
		*/
		
		this.movieClip_1.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// globo 9
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(362,508.3,1.528,1.528,0,0,0,47.9,46.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,x:361.9,y:508.2,alpha:1},18).wait(46));

	// globo 8
	this.instance_1 = new lib.Símbolo3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(487.8,462.5,1.563,1.563,0,0,0,45.7,47.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({regX:45.6,regY:47.3,scaleX:1,scaleY:1,x:487.6,y:462.3,alpha:1},17).wait(41));

	// globo 7
	this.instance_2 = new lib.Símbolo4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(499.4,348.9,1.662,1.662,0,0,0,51.4,57.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({scaleX:1,scaleY:1,y:348.8,alpha:1},17).wait(32));

	// globo 6
	this.instance_3 = new lib.Símbolo5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(646.6,280.3,1.355,1.355,0,0,0,87.5,157.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:646.5,alpha:1},30).wait(24));

	// globo 5
	this.instance_4 = new lib.Símbolo6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(908.1,436.2,1.49,1.49,0,0,0,63,57.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:908,alpha:1},16).wait(20));

	// globo 4
	this.instance_5 = new lib.Símbolo7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(849.2,225,1.484,1.484,0,0,0,58.1,69.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).to({regX:58,scaleX:1,scaleY:1,x:849,y:224.9,alpha:1},17).wait(12));

	// globo 3
	this.instance_6 = new lib.Símbolo8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(950.1,72.2,1.543,1.543,0,0,0,52,66.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).to({scaleX:1,scaleY:1,x:950,alpha:1},18).wait(24));

	// globo 2
	this.instance_7 = new lib.Símbolo9("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1071.3,204.3,1.447,1.447,0,0,0,103.2,83.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({_off:false},0).to({regX:103.1,scaleX:1,scaleY:1,x:1071.1,alpha:1},26).wait(2));

	// globo 1
	this.instance_8 = new lib.Símbolo10("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1288.3,92.1,1.319,1.319,0,0,0,94.3,66);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).to({scaleX:1,scaleY:1,y:92,alpha:1},15).wait(2));

	// modelo PLEGRIDY
	this.instance_9 = new lib.Símbolo11("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,856.2,0.605,0.605,0,0,0,0,573.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,y:856.1,alpha:1},24).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,509.2,184.2,347);


// stage content:



(lib.portadaanimación = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		/* Detener un clip de película
		Detiene el clip de película especificado en el escenario.
		
		Instrucciones:
		1. Utilice este código para clips de película actualmente en reproducción.
		*/
		
		this.globos.stop();
	}
	this.frame_92 = function() {
		/* Detener un clip de película
		Detiene el clip de película especificado en el escenario.
		
		Instrucciones:
		1. Utilice este código para clips de película actualmente en reproducción.
		*/
		
		this.Intro.stop();
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("pegilaci%c3%b3n.html");
		}
	}
	this.frame_119 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(12).call(this.frame_92).wait(27).call(this.frame_119).wait(1));

	// Capa 1
	this.instance = new lib.PLAY();
	this.instance.parent = this;
	this.instance.setTransform(1694.5,354.6,1,1,0,0,0,-7.5,-7.4);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({alpha:1},32).wait(28));

	// globos
	this.globos = new lib.globos();
	this.globos.parent = this;
	this.globos.setTransform(707,448,1,1,0,0,0,706,428);

	this.timeline.addTween(cjs.Tween.get(this.globos).wait(120));

	// texto inicial
	this.Intro = new lib.Intro();
	this.Intro.parent = this;
	this.Intro.setTransform(1233.8,714.7);
	this.Intro._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Intro).wait(60).to({_off:false},0).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1025,1047.2,184.2,347);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;