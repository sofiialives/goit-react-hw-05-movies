"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[962],{784:function(e,r,n){n.d(r,{j:function(){return a}});var t=n(184),a=function(e){var r=e.message;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:r})})}},321:function(e,r,n){n.d(r,{a:function(){return s}});n(791);var t=n(920),a=n(184),s=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},962:function(e,r,n){n.r(r),n.d(r,{Reviews:function(){return p},default:function(){return v}});var t=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),i=n(689),o=n(321),f=n(784),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=b6e6c21ac077893d8efa67c324fb45b8"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("some troubles...");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=n(184),p=function(){var e=(0,i.UO)().moviesId,r=(0,u.useState)(!1),n=(0,a.Z)(r,2),s=n[0],p=n[1],v=(0,u.useState)(null),d=(0,a.Z)(v,2),b=d[0],x=d[1],w=(0,u.useState)(null),m=(0,a.Z)(w,2),j=m[0],k=m[1];(0,u.useEffect)((function(){var r=function(){var r=(0,t.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,p(!0),r.next=4,l(e);case 4:n=r.sent,x(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),k(r.t0.message);case 11:return r.prev=11,p(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]);var g=b&&Object.keys(b).length>0;return(0,h.jsxs)(h.Fragment,{children:[s&&(0,h.jsx)(o.a,{}),j&&(0,h.jsx)(f.j,{}),g?(0,h.jsx)("ul",{children:b.results.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))}):"We dont have any reviews for this movie"]})},v=p}}]);
//# sourceMappingURL=962.c850586f.chunk.js.map