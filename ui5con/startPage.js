!function(e){function i(p){if(t[p])return t[p].exports;var l=t[p]={i:p,l:!1,exports:{}};return e[p].call(l.exports,l,l.exports,i),l.l=!0,l.exports}var t={};i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,p){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:p})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=17)}({17:function(e,i,t){var p=(t(9),0);$(document).ready(function(){}),window.fillSlideShow=function(e){var i=$("#slide-container"),t=$("#slide-template").html(),p=$("#video-template").html(),l=$("#dots-container"),r=$("#dot-template").html(),d=$("#galleryElement"),n=$("#gallery-item-template").html();i.append(p),l.append(r.replace("{{index}}",e.length));var c=n.replace("{{index}}",e.length+1).replace("{{src}}","UI5con_video_img.png");d.append(c),e.forEach(function(e,p){i.append(t.replace("{{src}}",e)),p++,l.append(r.replace("{{index}}",p));var c=n.replace("{{index}}",p).replace("{{src}}",e);d.append(c),p++})},window.showPrevSlide=function(){showSlide(p-1)},window.showNextSlide=function(){showSlide(p+1)},window.showSlide=function(e){var i=$(".b-slide"),t=$(".b-slideshow__dot"),l=$(".b-topic.mod_gallery");p=e,p>=i.length&&(p=0),p<0&&(p=i.length-1),i.css({display:"none"}),t.removeClass("mod_selected"),l.removeClass("mod_selected"),$(i[p]).css({display:"block"}),$(t[p]).addClass("mod_selected"),$(l[p]).addClass("mod_selected")}},9:function(e,i){e.exports=[{slide:"picture1.jpg"},{slide:"picture2.jpg"},{slide:"picture3.jpg"},{slide:"picture4.jpg"},{slide:"picture5.jpg"},{slide:"picture6.jpg"},{slide:"picture7.jpg"},{slide:"picture8.jpg"},{slide:"picture9.jpg"},{slide:"picture10.jpg"},{slide:"picture11.jpg"},{slide:"picture12.jpg"},{slide:"picture13.jpg"},{slide:"picture14.jpg"},{slide:"picture15.jpg"},{slide:"picture16.jpg"},{slide:"picture17.jpg"},{slide:"picture18.jpg"},{slide:"picture19.jpg"},{slide:"picture20.jpg"},{slide:"picture21.jpg"},{slide:"picture22.jpg"},{slide:"picture23.jpg"}]}});