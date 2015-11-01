/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);


/**** school begins ***/

$('.hour, .minute, .second').data('plus-deg', 0)
calcTime();
$('#clock').addClass('aminate');
var int = setInterval(calcTime, 1000);
function calcTime () {
  var d = new Date();
  var h = d.getHours();
  rotate($('.hour'),  ((h > 12 ? h - 12 : h)*30)-90);
  rotate($('.minute'), (d.getMinutes()/*0-59*/*6)-90);
  rotate($('.second'), (d.getSeconds()/*0-59*/*6)-90);
}
function rotate ($object, deg) {
  var original_deg = deg;
  if(deg != $object.data('deg')){
    if(deg == -90) {
      $object.data('plus-deg', $object.data('plus-deg')+360);
    }
    deg += $object.data('plus-deg');
    $object.css({
      '-webkit-transform' : 'rotate('+deg+'deg)',
      '-moz-transform' : 'rotate('+deg+'deg)',  
      '-ms-transform' : 'rotate('+deg+'deg)',  
      '-o-transform' : 'rotate('+deg+'deg)',  
      'transform' : 'rotate('+deg+'deg)',  
      'zoom' : 1
    });
    $object.data('deg', original_deg);
  }
}
/* ================================================ /*
/*                                                  /* 
/*                   Clock Source                   /*
/*    http://codepen.io/martingrand/details/aAldc   /*
/*                                                  /*
/* ================================================ */

/*** school ends ***/

  /****music begin*****/

var bars = document.querySelectorAll('span');

setInterval(function(){
  for(var i=0; i < bars.length; i++){
    var bar = bars[i];
    var height = Math.floor(Math.random()*100);
    bar.style.height = height+'%';
    
  }
}, 150);

  /****music end *****/

	// Original code from Marcel Freinbichler
// https://github.com/freinbichler/3d-touch

var gift = document.getElementsByClassName('gift')[0];
var giftText = document.getElementsByClassName('gift-text')[0];
var giftTop = document.getElementsByClassName('gift-top')[0];
var touch = null;

addForceTouchToElement(gift);

function onTouchStart (e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchMove (e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchEnd (e) {
  e.preventDefault();
  touch = null;
}

function checkForce (e) {
  touch = e.touches[0];
  setTimeout(refreshForceValue.bind(touch), 10);
}

function refreshForceValue () {
  var touchEvent = this;
  var forceValue = 0;
  if (touchEvent) {
    forceValue = touchEvent.force || 0;
    setTimeout(refreshForceValue.bind(touch), 10);
  } else {
    forceValue = 0;
  }

  renderElement(forceValue);
}

function renderElement (forceValue) {
  giftTop.style.webkitTransform = 'translate3d(-5%, -'+ (forceValue * 1000) +'%, 0) rotate(-' + (forceValue * 100) + 'deg)';
  giftText.style.webkitTransform = 'translate3d(-50%, -'+ (50 + forceValue * 300) +'%, 0) scale(' + (.5 + forceValue * 1.5) + ')';
}

function addForceTouchToElement (elem) {
  elem.addEventListener('touchstart', onTouchStart, false);
  elem.addEventListener('touchmove', onTouchMove, false);
  elem.addEventListener('touchend', onTouchEnd, false);
}
	
});



/* ================================================ /*
/*                                                  /* 
/*                   Clock Source                   /*
/*    http://codepen.io/martingrand/details/aAldc   /*
/*                                                  /*
/* ================================================ */