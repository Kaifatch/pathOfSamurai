/*! For license information please see 5.8e485d60.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[5],{227:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return r}))},233:function(e,n,t){e.exports=t.p+"static/media/user.1389a444.png"},234:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(57);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},290:function(e,n,t){e.exports={pageButton:"Paginator_pageButton__rHZzO",paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},291:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&e.push(u)}else if("object"===a)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},292:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__17MJB"}},297:function(e,n,t){"use strict";t.r(n);var r=t(52),o=t(53),a=t(54),u=t(55),l=t(0),i=t.n(l),s=t(20),c=t(79),f=t(227),p=t(63),g=t(234),m=t(290),h=t.n(m),d=t(291),v=t.n(d),y=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.portionSize,u=void 0===a?10:a,s=Math.ceil(n/t),c=[],f=1;f<=s;f++)c.push(f);var m=Math.ceil(s/u),d=Object(l.useState)(1),y=Object(g.a)(d,2),P=y[0],b=y[1],w=(P-1)*u+1,E=P*u;return i.a.createElement("div",{className:h.a.paginator},P>1&&i.a.createElement("button",{onClick:function(){b(P-1)}},"Previous"),c.filter((function(e){return e>=w&&e<=E})).map((function(e){return i.a.createElement("span",{className:v()(Object(p.a)({},h.a.selectedPage,r===e),h.a.pageNumber),key:e,onClick:function(n){o(e)}},e)})),m>P&&i.a.createElement("button",{onClick:function(){b(P+1)}},"Next"))},P=t(292),b=t.n(P),w=t(233),E=t.n(w),O=t(13),C=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollow,o=e.follow;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("div",null,i.a.createElement(O.b,{to:"/profile/"+n.id},i.a.createElement("img",{src:null!=n.photos.small?n.photos.small:E.a,className:b.a.userPhoto,alt:""}))),i.a.createElement("div",null,n.followed?i.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Unfollow"):i.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)}},"Follow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,n.name),i.a.createElement("div",null,n.status)),i.a.createElement("span",null,i.a.createElement("div",null,"user.location.country"),i.a.createElement("div",null,"user.location.city"))))},j=function(e){var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,o=e.onPageChanged,a=e.users,u=Object(f.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return i.a.createElement("div",null,i.a.createElement(y,{currentPage:r,onPageChanged:o,totalItemsCount:n,pageSize:t}),i.a.createElement("div",null,a.map((function(e){return i.a.createElement(C,{key:e.id,user:e,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))))},S=t(30),_=t(14);function k(e,n){return e===n}function I(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function x(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var z=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=0,u=r.pop(),l=x(r),i=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(t)),s=e((function(){for(var e=[],n=l.length,t=0;t<n;t++)e.push(l[t].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=u,s.dependencies=l,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,t=null,r=null;return function(){return I(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var U=z((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),A=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.followingInProgress},B=function(e){Object(u.a)(t,e);var n=Object(a.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=n.call.apply(n,[this].concat(a))).onPageChanged=function(n){var t=e.props,r=t.pageSize;(0,t.requestUsers)(n,r)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;(0,e.requestUsers)(n,t)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(S.a,null):null,i.a.createElement(j,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress}))}}]),t}(i.a.Component);n.default=Object(_.d)(Object(s.b)((function(e){return{users:U(e),pageSize:A(e),totalUsersCount:F(e),currentPage:N(e),isFetching:M(e),followingInProgress:q(e)}}),{follow:c.b,unfollow:c.f,setCurrentPage:c.d,toggleFollowingProgress:c.e,requestUsers:c.c}))(B)}}]);
//# sourceMappingURL=5.8e485d60.chunk.js.map