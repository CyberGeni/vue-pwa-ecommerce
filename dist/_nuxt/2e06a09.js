(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{231:function(t,e,n){var map={"./fruits.md":[232,6]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=231,t.exports=r},233:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(37),n(44),n(14),n(26),n(27),["fruits"]),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.route,r=c.map((function(t){return n(231)("./".concat(t,".md"))})),e.next=4,Promise.all(r);case 4:return e.t0=e.sent,e.abrupt("return",{guides:e.t0});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Vue PWA Organic Fruit Shop"}}},l=n(24),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-screen-2xl mx-auto px-10"},[n("main",[n("div",t._l(t.guides,(function(e,r){return n("section",{key:r,staticClass:"mb-10"},[n("div",{staticClass:"\n            grid grid-cols-2\n            sm:grid-cols-3\n            gap-6\n            mb-10\n            mx-auto\n            justify-center\n          "},t._l(e.attributes.products,(function(e,r){return n("article",{key:r,staticClass:"justify-center"},[n("img",{staticClass:"object-scale-down h-96 w-full",attrs:{src:e.image,alt:e.name}}),t._v(" "),n("p",{staticClass:"font-mono flex justify-center"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"flex justify-center gap-6 m-3"},[n("button",{staticClass:"\n                  buy-button\n                  snipcart-add-item\n                  text-white\n                  bg-blue-700\n                  hover:bg-blue-800\n                  focus:ring-4 focus:ring-blue-300\n                  font-medium\n                  rounded-full\n                  text-sm\n                  px-5\n                  py-2.5\n                  text-center\n                  mb-2\n                  dark:bg-blue-600\n                  dark:hover:bg-blue-700\n                  dark:focus:ring-blue-800\n                  justify-center\n                  place-self-stretch\n                ",attrs:{"data-item-id":e.sku,"data-item-name":e.name,"data-item-price":e.price,"data-item-image":e.image,"data-item-url":"https://vue-nuxt-ecommerce-fruit-shop.netlify.app"}},[t._v("\n                "+t._s("€"+e.price)+"\n              ")])])])})),0)])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);