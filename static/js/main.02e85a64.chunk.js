(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[1],{133:function(e,t,n){e.exports=n(222)},138:function(e,t,n){},139:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return h}));var r=n(3),a=n.n(r),u=n(8),o=n(4),i=n(6),c=n(38),s="samurai-network/auth/SET-USER-DATA",l="samurai-network/auth/SET-USER-PHOTO",f={userId:null,email:null,login:null,isAuth:!1,smallPhoto:null},d=function(e,t,n,r){return{type:s,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(e){return{type:l,smallPhoto:e}},m=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,u=r.id,o=r.email,c=r.login,t(d(u,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark((function r(u){var o,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?u(m()):(s=o.data.messages.length>0?o.data.messages[0]:"Some error",u(Object(c.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},h=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(o.a)({},e,{},t.payload);case l:return Object(o.a)({},e,{smallPhoto:t.smallPhoto});default:return e}}},18:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",friends:"Navbar_friends__3-QW_"}},222:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(37),o=n.n(u),i=(n(138),n(52)),c=n(53),s=n(54),l=n(55),f=n(5),d=n(13),p=(n(139),n(20)),m=n(14),g=n(4),h=n(16),E={initialized:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(g.a)({},e,{initialized:!0});default:return e}},v=n(46),O=n.n(v),w=function(e){var t=e.isAuth,n=e.login,r=e.logout;return a.a.createElement("header",{className:O.a.header},a.a.createElement("img",{src:"https://www.pinclipart.com/picdir/big/91-918525_react-logos-download-green-tree-logo-tree-logo.png",alt:""}),a.a.createElement("div",{className:O.a.loginBlock},t?a.a.createElement("div",null,n,a.a.createElement("button",{onClick:r},"Logout")):a.a.createElement(d.b,{to:"/login"},"Login")))},S=Object(p.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:h.d})((function(e){return a.a.createElement(w,e)})),y=n(30),j=n(18),T=n.n(j),P=function(){return a.a.createElement("nav",{className:T.a.nav},a.a.createElement("ul",null,a.a.createElement("li",{className:T.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:T.a.activeLink},"Profile")),a.a.createElement("li",{className:T.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:T.a.activeLink},"Users")),a.a.createElement("li",{className:T.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:T.a.activeLink},"Messages"))))},k=n(56),I=n(72),C=n(79),L=n(83),N=n(78),_=Object(m.c)({profilePage:k.b,dialogsPage:I.a,usersPage:C.a,auth:h.a,form:N.a,app:b}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,x=Object(m.e)(_,U(Object(m.a)(L.a))),A=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(y.a,null)},a.a.createElement(e,t))}},R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,296))})),G=a.a.lazy((function(){return n.e(5).then(n.bind(null,297))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,295))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,298))})),z=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(S,null),a.a.createElement(P,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(f.b,{path:"/dialogs",render:A(R)}),a.a.createElement(f.b,{path:"/profile/:userId?",render:A(F)}),a.a.createElement(f.b,{path:"/users",render:A(G)}),a.a.createElement(f.b,{path:"/login",render:A(D)}))):a.a.createElement(y.a,null)}}]),n}(a.a.Component),M=Object(m.d)(f.f,Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(h.b)()).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(z),W=function(e){return a.a.createElement(d.a,null,a.a.createElement(p.a,{store:x},a.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(82),o=n.n(u);t.a=function(){return a.a.createElement("img",{src:o.a,alt:""})}},46:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}));var r=n(3),a=n.n(r),u=n(8),o=n(23),i=n(4),c=n(6),s=n(16),l={profile:null,posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:23},{id:3,message:"blabla",likesCount:23},{id:4,message:"dada",likesCount:23}],status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"SET-USER-STATUS",status:e}},p=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data}),n(Object(s.e)(r.data.photos.small));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(o.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET-USER-STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE-POST":return Object(i.a)({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(81),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"9cdaa8ae-8bf4-4b8f-880d-088e8decc630"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){console.warn("Obsolete method. Please use profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(23),a=n(4),u={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},79:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return v}));var r=n(3),a=n.n(r),u=n(8),o=n(23),i=n(4),c=n(6),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},g=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),r(p(e)),n.next=4,c.c.getUsers(e,t);case 4:u=n.sent,r(m(!1)),r({type:"SET-USERS",users:u.items}),r({type:"SET-TOTAL-USERS-COUNT",totalCount:u.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(u(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,c.c.follow.bind(c.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,c.c.unfollow.bind(c.c),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(i.a)({},e,{users:t.users});case"SET-CURRENT-PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},82:function(e,t,n){e.exports=n.p+"static/media/loading.d520bb87.svg"}},[[133,2,3]]]);
//# sourceMappingURL=main.02e85a64.chunk.js.map