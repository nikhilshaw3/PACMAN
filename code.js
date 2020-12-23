var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["33880deb-16fa-4c28-add5-bc07fe6a29f8","6706baae-ad2b-4e02-a457-33c550d7f0e1","a1d2c3c2-64e4-4401-9665-d104d01b1c21","7f8cef40-bb31-49f4-b322-598f6e2ddb6f","de103945-e172-4889-9eb5-8f718d3e2122","7c96f94c-0004-4d7f-b049-adb30cbcd8b3","c5d70461-f167-45ba-a9a3-bbc332a3d630","14817aed-8e63-4403-bf34-a0db84c37c66","93a7a4ce-2cc4-42e7-ac07-f2b14bf17a1c"],"propsByKey":{"33880deb-16fa-4c28-add5-bc07fe6a29f8":{"name":"1.png_1","sourceUrl":null,"frameSize":{"x":271,"y":271},"frameCount":7,"looping":true,"frameDelay":4,"version":"2hnMWZEhmKLoWhP6rOcgQAmosaCHimOp","loadedFromSource":true,"saved":true,"sourceSize":{"x":813,"y":813},"rootRelativePath":"assets/33880deb-16fa-4c28-add5-bc07fe6a29f8.png"},"6706baae-ad2b-4e02-a457-33c550d7f0e1":{"name":"oie_BifUEek9IcRo.png_1","sourceUrl":null,"frameSize":{"x":740,"y":760},"frameCount":1,"looping":true,"frameDelay":12,"version":"nHhrW2kw4iQ74BDPhS5Bdy6NAoDIc_VC","loadedFromSource":true,"saved":true,"sourceSize":{"x":740,"y":760},"rootRelativePath":"assets/6706baae-ad2b-4e02-a457-33c550d7f0e1.png"},"a1d2c3c2-64e4-4401-9665-d104d01b1c21":{"name":"setting","sourceUrl":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/a1d2c3c2-64e4-4401-9665-d104d01b1c21.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":4,"version":"exk_FTFHLONpOeBHKanfDaVLwFx2A0cF","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/a1d2c3c2-64e4-4401-9665-d104d01b1c21.png"},"7f8cef40-bb31-49f4-b322-598f6e2ddb6f":{"name":"22122617bM7Iof4s.png_1","sourceUrl":null,"frameSize":{"x":623,"y":253},"frameCount":1,"looping":true,"frameDelay":12,"version":"LZ_g4fGJ87vLjV6VzFuuMWu9g98CRQ6r","loadedFromSource":true,"saved":true,"sourceSize":{"x":623,"y":253},"rootRelativePath":"assets/7f8cef40-bb31-49f4-b322-598f6e2ddb6f.png"},"de103945-e172-4889-9eb5-8f718d3e2122":{"name":"PLAY.png_1","sourceUrl":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/de103945-e172-4889-9eb5-8f718d3e2122.png","frameSize":{"x":450,"y":250},"frameCount":1,"looping":true,"frameDelay":4,"version":"1eh8W8cPdVH6M9A.U_jIPTQL0c1AUFBo","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":250},"rootRelativePath":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/de103945-e172-4889-9eb5-8f718d3e2122.png"},"7c96f94c-0004-4d7f-b049-adb30cbcd8b3":{"name":"maxresdefault.jpg_1","sourceUrl":null,"frameSize":{"x":1920,"y":1200},"frameCount":1,"looping":true,"frameDelay":12,"version":"7MdvPScykEocVFub8zJpI3WXwU2BsBxV","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1200},"rootRelativePath":"assets/7c96f94c-0004-4d7f-b049-adb30cbcd8b3.png"},"c5d70461-f167-45ba-a9a3-bbc332a3d630":{"name":"UrB8j1pCsqfX.png_1","sourceUrl":null,"frameSize":{"x":400,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ok85qM5xWTcWSh.qDbes06d7eKA4NEVC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":100},"rootRelativePath":"assets/c5d70461-f167-45ba-a9a3-bbc332a3d630.png"},"14817aed-8e63-4403-bf34-a0db84c37c66":{"name":"B6f0qxAwwnZB.png_1","sourceUrl":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/14817aed-8e63-4403-bf34-a0db84c37c66.png","frameSize":{"x":882,"y":932},"frameCount":1,"looping":true,"frameDelay":4,"version":"5BrU0xv.KQEEGzgG23TtAMfIzzBvKKS9","loadedFromSource":true,"saved":true,"sourceSize":{"x":882,"y":932},"rootRelativePath":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/14817aed-8e63-4403-bf34-a0db84c37c66.png"},"93a7a4ce-2cc4-42e7-ac07-f2b14bf17a1c":{"name":"Tyeh5pJ40IsL.png_1","sourceUrl":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/93a7a4ce-2cc4-42e7-ac07-f2b14bf17a1c.png","frameSize":{"x":630,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":".ck5jpD7Y0hIBB_HxirUQ65OTtJQt8F4","loadedFromSource":true,"saved":true,"sourceSize":{"x":630,"y":360},"rootRelativePath":"assets/v3/animations/7s3OoGP9lVHsHwZpi9AHtfmwArGw1VOWgitdCmFsf7s/93a7a4ce-2cc4-42e7-ac07-f2b14bf17a1c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//GAMESTATES
var START = 1;
var PLAY = 2;
var END = 3;
var STORY = 4;

//poster
var poster = createSprite(200,200,400,400);
poster.setAnimation("oie_BifUEek9IcRo.png_1");
poster.width = 400;
poster.height = 400;

//setting
var setting = createSprite(60,350);
setting.setAnimation("setting");
setting.scale = 0.5;
setting.rotationSpeed = 10;

//pac
var pac = createSprite(200,270);
pac.setAnimation("maxresdefault.jpg_1");
pac.width = 300;
pac.height = 230;

//PLAY BUTTON
var playButton = createSprite(200,170);
playButton.setAnimation("PLAY.png_1");
playButton.scale = 0.4;

var name = createSprite(245,360);
name.setAnimation("UrB8j1pCsqfX.png_1");
name.scale = 0.7;

var story = createSprite(200,200);
story.setAnimation("B6f0qxAwwnZB.png_1");
story.width = 400;
story.height = 400;
story.visible = false;

var back = createSprite(270,350);
back.setAnimation("Tyeh5pJ40IsL.png_1");
back.scale = 0.23;
back.height = 300;
back.visible = false;

var gameState = START;

function draw() {
background("yellow");

if(gameState === START && mousePressedOver(setting)){
gameState = STORY;
}

if(gameState === STORY){
poster.visible = false;
pac.visible = false;
back.visible = true;
name.visible = false;
playButton.visible = false;
setting.visible = false;
background("black");
story.visible = true;
}

drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
