!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){e.exports=a(3)},,,function(e,t,a){"use strict";a.r(t);var n=function(){$("body").toggleClass("body-lock")},o=function(){$(".menu-trigger").on("click",(function(){$(".site-header-menu").fadeToggle("fast").css("display","flex"),n()}))},r=function(){$(".modal-trigger").on("click",(function(){n(),$(".modal").fadeIn()})),$(".modal-close").on("click",(function(){n(),$(".modal").fadeOut()}))},i=function(e,t,a){var n;return function(){var o=this,r=arguments,i=function(){n=null,a||e.apply(o,r)},l=a&&!n;clearTimeout(n),n=setTimeout(i,t),l&&e.apply(o,r)}},l=(new ScrollMagic.Controller,function(){$(document).ready((function(){var e,t=1,a=1,o=$(".gallery-item").length;$(".gallery-item").each((function(){var e=t;$(this).attr("id",e),++t})),$(".gallery-item-modal").each((function(){var e="modal-"+a;$(this).attr("id",e),++a})),$(".gallery-item").click((function(){var t=$(this).attr("id");e=t,$("#modal-"+t).fadeIn(),n()})),$(".gallery-modal-close").on("click",(function(){n(),$(".gallery-item-modal").fadeOut(),$(".gallery-item-modal").removeClass("active")})),$(".gallery-next").click((function(){var t=parseInt(e,10)+parseInt(1,10);t>o?($("#modal-"+e).fadeOut(),$("#modal-1").fadeIn(),e=1):($("#modal-"+e).fadeOut(),$("#modal-"+t).fadeIn(),++e)})),$(".gallery-prev").click((function(){var t=parseInt(e,10)-parseInt(1,10);t<1?($("#modal-"+e).fadeOut(),$("#modal-"+o).fadeIn(),e=o):($("#modal-"+e).fadeOut(),$("#modal-"+t).fadeIn(),--e)}))}))}),c=function(){$(document).ready((function(){$(".parallax").each((function(e){var t=$(this).data("image-src"),a=$(this).data("height");$(this).css("background-image","url("+t+")"),$(this).css("height",a)}))}))},s=(new ScrollMagic.Controller,function(){$(window).on("resize load",i((function(){$(".page-banner").each((function(){$(this).hasClass("image")&&$(this).data("mobile-url")&&$(window).width()<992?$(this).css("background-image","url("+$(this).data("mobile-url")+")"):$(this).css("background-image","url("+$(this).data("desktop-url")+")"),$(this).hasClass("video-autoplay")&&$(this).data("mobile-url")&&$(window).width()<768&&$(this).css("background-image","url("+$(this).data("mobile-url")+")")}))}),50))}),u=(new ScrollMagic.Controller,function(){$(window).on("resize load",i((function(){$(".project-image").each((function(){$(this).data("mobile-url")&&$(window).width()<992?$(this).children().attr("src",$(this).data("mobile-url")):$(this).children().attr("src",$(this).data("desktop-url"))}))}),50))}),d=new ScrollMagic.Controller;(o(),c(),r(),l(),$(".children-reveal")[0]&&$(".children-reveal").each((function(){var e=this;new ScrollMagic.Scene({triggerElement:e,triggerHook:.75,offset:0,duration:0,reverse:!1}).addTo(d).on("start",(function(){TweenMax.staggerFromTo($(e).find(".children-reveal-child"),2,{y:75,opacity:0},{y:0,opacity:1,ease:Expo.easeOut},.1)}))})),$(".single-reveal")[0]&&$(".single-reveal").each((function(){var e=this;new ScrollMagic.Scene({triggerElement:e,triggerHook:.75,offset:0,duration:0,reverse:!1}).addTo(d).on("start",(function(){TweenMax.fromTo($(e),2,{y:75,opacity:0},{y:0,opacity:1,ease:Expo.easeOut})}))})),$(".fade-reveal")[0]&&$(".fade-reveal").each((function(){var e=this;new ScrollMagic.Scene({triggerElement:e,triggerHook:.75,offset:0,duration:0,reverse:!1}).addTo(d).on("start",(function(){TweenMax.fromTo($(e),2,{opacity:0},{opacity:1,ease:Expo.easeOut})}))})),$(".parallax-mirror")&&$(".parallax-mirror").each((function(){var e=this;new ScrollMagic.Scene({triggerElement:e,triggerHook:.75,offset:0,duration:0,reverse:!1}).addTo(d).on("start",(function(){TweenMax.fromTo($(e),2,{opacity:0},{opacity:1,ease:Expo.easeOut})}))})),$(".page-banner")[0]&&s(),$(".project-image")[0]&&u(),$("img.svg").each((function(){var e=jQuery(this),t=e.prop("attributes"),a=e.attr("src");$.get(a,(function(a){var n=$(a).find("svg");n=n.removeAttr("xmlns:a"),$.each(t,(function(){n.attr(this.name,this.value)})),e.replaceWith(n)}))})),$("a").hasClass("external"))||$("a").on("click",(function(e){if($(window)&&""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top+10,easing:"easeInOutQuart"},500,(function(){window.location.hash=t}))}}))}]);