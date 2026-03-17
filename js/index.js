// genres and subjects
var genre = [
  "western",
  "film noir",
  "neo noir",
  "coming-of-age film",
  "thriller",
  "psychological thriller",
  "soap opera",
  "horror",
  "children’s film",
  "animal journey",
  "courtroom drama",
  "docudrama",
  "fly-on-the-wall documentary",
  "musical",
  "magical realism",
  "procedural drama",
  "mockumentary",
  "slapstick",
  "cooking show",
  "educational video",
  "game show",
  "infomercial",
  "advertisement",
  "corporate training film",
  "propaganda film",
  "news bulletin",
  "news segment",
  "magazine show",
  "stand up comedy",
  "talk show",
  "kung fu film",
  "epic saga",
  "road movie",
  "music video",
  "low-budget horror",
  "heist",
  "slasher",
  "hybrid-reality",
  "neo-realism",
  "action",
  "science fiction",
  "surrealism",
  "psychological horror",
  "animation",
  "historical",
  "historical fantasy",
  "fantasy",
  "biography",
  "true crime",
  "cyberpunk",
  "murder mystery",
  "indie",
  "space opera",
  "drama",
  "adventure",
  "body horror",
  "sitcom",
  "period drama",
  "adult",
  "romance",
  "anime"
];

var subject = [
  "love story",
  "dream sequence",
  "overcoming the monster",
  "rags to riches",
  "quest",
  "voyage and return",
  "comedy",
  "argument",
  "rebirth",
  "tragedy",
  "adventure",
  "rescue",
  "escape",
  "riddle",
  "rivalry",
  "underdog",
  "sacrifice",
  "forbidden love",
  "metamorphosis",
  "pursuit",
  "disaster",
  "revolt",
  "vengeance",
  "madness",
  "loss",
  "traveller's tale",
  "creation myth",
  "fable",
  "farce",
  "joke",
  "urban legend",
  "misunderstanding",
  "helplessness",
  "slice of life",
  "coming-of-age",
  "high school"
];

function newGenre() {
  var randomGenre = genre[Math.floor(Math.random() * genre.length)];
  document.getElementById('genre').innerHTML = randomGenre;
  var newColor = randomColor({hue:'orange'});
  document.getElementById('genre').style.color = newColor;
  document.getElementById('na').style.background = newColor;
  newBg();
}

function newSubject(){
  var randomSubject = subject[Math.floor(Math.random() * subject.length)];
  document.getElementById('subject').innerHTML = randomSubject;
  var newColor = randomColor({hue:'orange'});
  document.getElementById('subject').style.color = newColor;
  document.getElementById('nn').style.background = newColor;
  newBg();
}

function newPhrase () {
  newGenre();
  newSubject();
  var newColor = randomColor({hue:'blue',luminosity:'dark'});
  document.getElementById('bgd').style.background = newColor;
  document.getElementById('na').style.color = newColor;
  document.getElementById('nn').style.color = newColor;
  document.getElementById('np').style.color = newColor;
}

function newBg () {
  var newColor = randomColor({hue:'blue',luminosity:'dark'});
  document.getElementById('bgd').style.background = newColor;
  newColor = randomColor({hue:'blue',luminosity:'light'});
  newColor = randomColor({hue:'yellow',luminosity:'bright'})
  document.getElementById('np').style.background = newColor;
}

// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/
!function(r,e){if("object"==typeof exports){var n=e();"object"==typeof module&&module&&module.exports&&(exports=module.exports=n),exports.randomColor=n}else"function"==typeof define&&define.amd?define([],e):r.randomColor=e()}(this,function(){function r(r){var e=o(r.hue),n=i(e);return n<0&&(n=360+n),n}function e(r,e){if("monochrome"===e.hue)return 0;if("random"===e.luminosity)return i([0,100]);var n=u(r),t=n[0],a=n[1];switch(e.luminosity){case"bright":t=55;break;case"dark":t=a-10;break;case"light":a=55}return i([t,a])}function n(r,e,n){var t=a(r,e),o=100;switch(n.luminosity){case"dark":o=t+20;break;case"light":t=(o+t)/2;break;case"random":t=0,o=100}return i([t,o])}function t(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return d(r);case"hsl":var n=d(r);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var t=d(r),a=e.alpha||Math.random();return"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+a+")";case"rgbArray":return f(r);case"rgb":return"rgb("+f(r).join(", ")+")";case"rgba":var o=f(r),a=e.alpha||Math.random();return"rgba("+o.join(", ")+", "+a+")";default:return c(r)}}function a(r,e){for(var n=s(r).lowerBounds,t=0;t<n.length-1;t++){var a=n[t][0],o=n[t][1],u=n[t+1][0],i=n[t+1][1];if(e>=a&&e<=u){var c=(i-o)/(u-a);return c*e+(o-c*a)}}return 0}function o(r){if("number"==typeof parseInt(r)){var e=parseInt(r);if(e<360&&e>0)return[e,e]}if("string"==typeof r)if(m[r]){var n=m[r];if(n.hueRange)return n.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){const t=h(r)[0];return[t,t]}return[0,360]}function u(r){return s(r).saturationRange}function s(r){r>=334&&r<=360&&(r-=360);for(var e in m){var n=m[e];if(n.hueRange&&r>=n.hueRange[0]&&r<=n.hueRange[1])return m[e]}return"Color not found"}function i(r){if(null===v)return Math.floor(r[0]+Math.random()*(r[1]+1-r[0]));var e=r[1]||1,n=r[0]||0;v=(9301*v+49297)%233280;var t=v/233280;return Math.floor(n+t*(e-n))}function c(r){function e(r){var e=r.toString(16);return 1==e.length?"0"+e:e}var n=f(r);return"#"+e(n[0])+e(n[1])+e(n[2])}function l(r,e,n){var t=n[0][0],a=n[n.length-1][0],o=n[n.length-1][1],u=n[0][1];m[r]={hueRange:e,lowerBounds:n,saturationRange:[t,a],brightnessRange:[o,u]}}function f(r){var e=r[0];0===e&&(e=1),360===e&&(e=359),e/=360;var n=r[1]/100,t=r[2]/100,a=Math.floor(6*e),o=6*e-a,u=t*(1-n),s=t*(1-o*n),i=t*(1-(1-o)*n),c=256,l=256,f=256;switch(a){case 0:c=t,l=i,f=u;break;case 1:c=s,l=t,f=u;break;case 2:c=u,l=t,f=i;break;case 3:c=u,l=s,f=t;break;case 4:c=i,l=u,f=t;break;case
