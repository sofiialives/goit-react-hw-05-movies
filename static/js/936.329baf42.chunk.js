"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{784:function(e,r,n){n.d(r,{j:function(){return a}});var t=n(184),a=function(e){var r=e.message;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:r})})}},321:function(e,r,n){n.d(r,{a:function(){return s}});n(791);var t=n(920),a=n(184),s=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},936:function(e,r,n){n.r(r),n.d(r,{Home:function(){return b}});var t=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),u=n(87),o=n(252),l="Home_title__L087v",f="Home_container__w+u63",d="Home_movies__F2dIL",p="Home_moviesList__cVzy4",h=n(321),m=n(784),v=n(184),b=function(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),n=r[0],s=r[1],b=(0,i.useState)(!1),x=(0,a.Z)(b,2),_=x[0],w=x[1],j=(0,i.useState)(null),k=(0,a.Z)(j,2),g=k[0],y=k[1];(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,o.d)();case 4:r=e.sent,s(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.message);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var H=Array.isArray(n)&&n.length;return(0,v.jsxs)("div",{className:f,children:[_&&(0,v.jsx)(h.a,{}),g&&(0,v.jsx)(m.j,{message:g}),(0,v.jsx)("h1",{className:l,children:"Trending today"}),(0,v.jsx)("ul",{className:p,children:H&&n.map((function(e){return(0,v.jsx)("li",{className:d,children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})]})}},252:function(e,r,n){n.d(r,{d:function(){return c}});var t=n(861),a=n(757),s=n.n(a),c=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=b6e6c21ac077893d8efa67c324fb45b8");case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("some troubles...");case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.329baf42.chunk.js.map