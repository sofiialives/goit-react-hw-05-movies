"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{784:function(e,r,n){n.d(r,{j:function(){return s}});var t=n(184),s=function(e){var r=e.message;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:r})})}},321:function(e,r,n){n.d(r,{a:function(){return i}});n(791);var t=n(920),s=n(184),i=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},506:function(e,r,n){n.r(r),n.d(r,{MovieDetails:function(){return m}});var t=n(861),s=n(439),i=n(757),a=n.n(i),c=n(689),o=n(87),l=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=b6e6c21ac077893d8efa67c324fb45b8"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("some troubles...");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=n(791),d=n(321),h=n(784),v="MovieDetails_commonDiv__PXdod",f="MovieDetails_infoDiv__+4f2S",p="MovieDetails_addDiv__EOoI6",x="MovieDetails_button__uXZxd",j=n(184),m=function(){var e,r,n=(0,c.TH)(),i=(0,u.useRef)(null!==(e=null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),m=(0,c.UO)().moviesId,b=(0,u.useState)(!1),_=(0,s.Z)(b,2),w=_[0],k=_[1],g=(0,u.useState)(null),D=(0,s.Z)(g,2),S=D[0],Z=D[1],y=(0,u.useState)(null),M=(0,s.Z)(y,2),N=M[0],U=M[1];(0,u.useEffect)((function(){if(m){var e=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,l(m);case 4:r=e.sent,Z(r),console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),U(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]);var C=S&&Object.keys(S).length>0;return(0,j.jsxs)("div",{children:[w&&(0,j.jsx)(d.a,{}),N&&(0,j.jsx)(h.j,{message:N}),C&&(0,j.jsxs)("div",{className:v,children:[(0,j.jsx)(o.rU,{to:i.current,className:x,children:"\u2190 Go Back"}),(0,j.jsx)("img",{src:S.backdrop_path,alt:S.title||S.name}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsxs)("h1",{children:[S.title||S.name," (",S.release_date,")"]}),(0,j.jsxs)("p",{children:["User Score: ",S.vote_average,"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:S.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:S.genres&&S.genres.map((function(e){return e.name})).join(", ")})]}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)("h4",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"reviews",children:"Review"})})]})]}),(0,j.jsx)(c.j3,{})]},m)]})}}}]);
//# sourceMappingURL=250.5fe86a0a.chunk.js.map