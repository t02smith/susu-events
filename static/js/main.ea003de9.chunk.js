(this["webpackJsonpsusu-events"]=this["webpackJsonpsusu-events"]||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},158:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);t.default=[{title:"Hackathon",img:"https://www.susu.org/images/calendar/ecss-presents---communityhackpng",startDate:"11:00 13th Nov",endDate:"13:30 14th Nov",location:"New Zepler Southampton",soc:"a"},{title:"ECSS Pub Crawl",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lw7VEeH5oI_YpzNRl6LZSwAAAA%26pid%3DApi&f=1",startDate:"20:00 15th Nov",endDate:"00:00 16th Nov",location:"The Hobbit Southampton",soc:"b"}]},171:function(e,t,n){},172:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},182:function(e,t){},184:function(e,t){},195:function(e,t){},197:function(e,t){},224:function(e,t){},226:function(e,t){},227:function(e,t){},232:function(e,t){},234:function(e,t){},240:function(e,t){},242:function(e,t){},261:function(e,t){},273:function(e,t){},276:function(e,t){},279:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(46),r=n.n(s),i=n(20),o=n(15),u=(n(154),n(155),n(5)),l=n.n(u),j=n(12),b=n(9),d=(n(156),n(2));var f=function(e){var t=e.type,n=e.placeholder,a=e.value,c=e.onChange,s=e.icon;return Object(d.jsxs)("div",{className:"login-field",children:[Object(d.jsx)("i",{className:s}),Object(d.jsx)("input",{type:t,value:a,onChange:c,placeholder:n})]})};var O=function(e){var t=e.login,n=Object(a.useState)(""),c=Object(b.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),o=Object(b.a)(i,2),u=o[0],O=o[1],p=Object(a.useState)(!0),v=Object(b.a)(p,2),x=v[0],m=v[1],h=function(){var e=Object(j.a)(l.a.mark((function e(n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=s.trim(),c=u.trim(),a&&c){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t(a,c,x);case 7:e.sent&&r(""),O("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"login",onSubmit:h,children:[Object(d.jsx)(f,{type:"text",value:s,onChange:function(e){return r(e.target.value)},placeholder:"USERNAME",icon:"fas fa-user"}),Object(d.jsx)(f,{type:"password",value:u,onChange:function(e){return O(e.target.value)},placeholder:"PASSWORD",icon:"fas fa-lock"}),Object(d.jsx)("button",{type:"submit",children:"Login"}),Object(d.jsxs)("div",{className:"stay-logged-in",children:[Object(d.jsx)("div",{className:"tickbox ".concat(x&&"tickbox-checked"),onClick:function(){return m(!x)},children:Object(d.jsx)("i",{className:"fas fa-check"})}),"Stay logged in?"]})]})};var p=function(e){var t=e.login;return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("img",{src:"/susu-events/img/logo.png",alt:""}),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{login:t}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Not a current user?"}),Object(d.jsx)("p",{children:"Register Now"})]})]})]})};n(158);var v=function(e){var t=e.title,n=e.img,a=e.startDate,c=e.endDate,s=e.location,r=e.id;return Object(d.jsxs)(i.b,{className:"event",to:"/susu-events/events/".concat(r),children:[Object(d.jsx)("img",{alt:"logo",src:n}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:t}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"far fa-clock"})," ",a," - ",c]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fas fa-compass"})," ",s]})]})]})};n(166);var x=function(e){var t=e.avSocs,n=e.adminOf,c=e.getSocEvents,s=Object(a.useState)(),r=Object(b.a)(s,2),o=r[0],u=r[1],f=function(){var e=Object(j.a)(l.a.mark((function e(){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],e.t0=l.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,c(t[a]);case 6:s=e.sent,n=n.concat(s),e.next=2;break;case 10:u(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),Object(d.jsxs)("div",{className:"events",children:[n.length>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Your Events"}),Object(d.jsxs)(i.b,{to:"/susu-events/create-event",children:[Object(d.jsx)("b",{children:"["})," Create Event ",Object(d.jsx)("b",{children:"]"})]})]}),Object(d.jsx)("div",{children:o&&o.map((function(e,t){return Object(d.jsx)(v,{title:e.name,img:e.img,startDate:e.startDate,endDate:e.endDate,location:e.location,id:t},t)}))})]})},m=n(48),h=n(47),g=n.n(h);var S=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(b.a)(s,2),i=r[0],o=r[1],u=Object(m.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"}).isLoaded;return g.a.setApiKey("AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"),Object(a.useEffect)((function(){g.a.fromAddress(n).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;o({lat:n,lng:a})}),(function(e){console.error(e)}))}),[n]),{isLoaded:u,address:n,addrLngLat:i,setAddress:c}},k={width:"100vw",height:"100vh"};function y(e){var t=e.match,n=Object(a.useState)(t.params.location),s=Object(b.a)(n,2),r=s[0],i=(s[1],Object(a.useState)(null)),o=Object(b.a)(i,2),u=o[0],l=o[1],j=Object(m.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"}).isLoaded;g.a.setApiKey("AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"),Object(a.useEffect)((function(){g.a.fromAddress(r).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;l({lat:n,lng:a})}),(function(e){console.error(e)}))}),[r]);var f=Object(a.useState)(null),O=Object(b.a)(f,2),p=(O[0],O[1]),v=c.a.useCallback((function(e){new window.google.maps.LatLngBounds;p(e)}),[]),x=c.a.useCallback((function(e){p(null)}),[]);return j&&u?Object(d.jsxs)(m.a,{mapContainerStyle:k,center:{lat:u.lat,lng:u.lng},zoom:18,onLoad:v,onUnmount:x,options:{fullscreenControl:!1,streetViewControl:!1},children:[Object(d.jsx)(m.b,{position:{lat:u.lat,lng:u.lng}}),Object(d.jsx)(d.Fragment,{})]}):Object(d.jsx)(d.Fragment,{})}var N=c.a.memo(y);n(167),n(168);var w=function(e){var t=e.open,n=e.close;return Object(d.jsx)("div",{onClick:n,className:"overlay ".concat(t&&"overlay-open")})};var E=function(e){var t=e.logout,n=Object(a.useState)(!1),c=Object(b.a)(n,2),s=c[0],r=c[1],o=function(){return r(!1)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{open:s,close:o}),Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("i",{onClick:function(){return r(!s)},className:"fas fa-bars"}),Object(d.jsxs)("div",{className:"navbar-main ".concat(s&&"navbar-open"),children:[Object(d.jsx)(i.b,{to:"/susu-events/",onClick:o,children:Object(d.jsx)("i",{className:"fas fa-user"})}),Object(d.jsx)(i.b,{to:"/susu-events/events",onClick:o,children:Object(d.jsx)("i",{className:"far fa-calendar"})}),Object(d.jsx)(i.b,{to:"/susu-events/",onClick:function(){o(),t()},children:Object(d.jsx)("i",{className:"fas fa-sign-out-alt"})})]})]})]})},D=(n(169),n(170).default);var C=function(e){var t=e.match,n=D[t.params.id];return Object(d.jsxs)("div",{className:"event-info",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"logo",src:n.img})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:n.title}),Object(d.jsxs)("div",{className:"date",children:[Object(d.jsx)("i",{className:"fas fa-calendar-day"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:Object(d.jsx)("strong",{children:n.startDate})}),Object(d.jsx)("h3",{children:Object(d.jsx)("strong",{children:n.endDate})})]})]}),Object(d.jsxs)(i.b,{className:"location",to:"/susu-events/tracker/".concat(n.location),children:[Object(d.jsx)("i",{className:"fas fa-compass"})," ",n.location]}),Object(d.jsx)("div",{className:"description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio. Tellus mauris a diam maecenas sed enim ut sem. Nec ultrices dui sapien eget mi proin sed. Dictum sit amet justo donec. Adipiscing elit pellentesque habitant morbi tristique. Feugiat sed lectus vestibulum mattis ullamcorper. Eget nunc scelerisque viverra mauris in. Pellentesque elit eget gravida cum sociis natoque penatibus. Gravida dictum fusce ut placerat orci nulla pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Est ante in nibh mauris cursus mattis. Cras sed felis eget velit aliquet. Sed vulputate mi sit amet. Facilisis magna etiam tempor orci eu lobortis elementum. Cursus risus at ultrices mi tempus imperdiet nulla. Egestas integer eget aliquet nibh. Sollicitudin nibh sit amet commodo."})]})]})},A=(n(171),n(149));n(172);var I=function(e){var t=e.data,n=e.select,a=e.open,c=e.close;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{open:a,close:c}),Object(d.jsx)("ul",{className:"list-popup ".concat(a&&"list-popup-open"),children:t&&t.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){n(e),c()},children:e},t)}))})]})};n(173);var L=function(e){var t=e.createEvent,n=e.avSocs,c=e.getSociety,s=Object(a.useState)(),r=Object(b.a)(s,2),i=r[0],o=r[1],u=Object(a.useState)(),O=Object(b.a)(u,2),p=O[0],v=O[1],x=Object(a.useState)(!1),m=Object(b.a)(x,2),h=m[0],g=m[1],S=Object(a.useState)(""),k=Object(b.a)(S,2),y=k[0],N=k[1],E=Object(a.useState)(""),D=Object(b.a)(E,2),C=D[0],L=D[1],F=Object(a.useState)(new Date),q=Object(b.a)(F,2),P=q[0],J=q[1],Z=Object(a.useState)(!1),T=Object(b.a)(Z,2),z=T[0],W=T[1],G=Object(a.useState)(new Date),H=Object(b.a)(G,2),K=H[0],M=H[1],U=Object(a.useState)(new Date),R=Object(b.a)(U,2),Y=R[0],X=R[1],B=Object(a.useState)(!0),V=Object(b.a)(B,2),_=V[0],Q=V[1],$=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=l.a.keys(n);case 1:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=5,c(n[a]);case 5:if((s=e.sent).name!==t){e.next=8;break}return e.abrupt("return",s);case 8:e.next=1;break;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i&&y&&C){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t(y,i.icon,C,i.id,K.toDateString(),Y.toDateString());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],e.t0=l.a.keys(n);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,c(n[a]);case 6:s=e.sent,t.push(s.name),e.next=2;break;case 10:v(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ne()}),[]),Object(a.useEffect)((function(){console.log(i)}),[i]),Object(a.useEffect)((function(){_?M(P):X(P)}),[P]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(w,{open:z,close:function(){return W(!1)}}),Object(d.jsx)(I,{data:p,select:function(e){return te(e)},open:h,close:function(){return g(!1)}}),Object(d.jsxs)("form",{className:"create-event",onSubmit:ee,children:[Object(d.jsx)("h1",{children:"Your event"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onClick:function(){return g(!0)},className:"soc-select",children:i?Object(d.jsx)("div",{className:"soc-logo",children:Object(d.jsx)("img",{src:i.icon,alt:""})}):Object(d.jsx)("p",{children:"Select Society"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{type:"text",value:y,onChange:function(e){return N(e.target.value)},placeholder:"EVENT NAME",icon:"fas fa-signature"}),Object(d.jsx)(f,{type:"text",value:C,onChange:function(e){return L(e.target.value)},placeholder:"LOCATION",icon:"fas fa-map-marker-alt"}),Object(d.jsxs)("div",{className:"calendars",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"open-calendar",onClick:function(){W(!0),Q(!0)},children:Object(d.jsx)("i",{className:"far fa-calendar"})}),Object(d.jsx)("p",{children:"START"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"open-calendar",onClick:function(){W(!0),Q(!1)},children:Object(d.jsx)("i",{className:"far fa-calendar-times"})}),Object(d.jsx)("p",{children:"FINISH"})]})]}),Object(d.jsx)(A.a,{onChange:J,value:_?K:Y,maxDate:new Date(2022,2,1),minDate:new Date(2021,10,13),className:"".concat(z&&"calendar-open")})]}),Object(d.jsx)("button",{type:"submit",children:"Create!"})]})]})]})};n(174),n(175);var F=function(e){e.title;var t=e.img,n=e.id;return Object(d.jsx)(i.b,{to:"/susu-events/societies/".concat(n),className:"society-card",children:Object(d.jsx)("img",{alt:"logo",src:t})})};var q=function(e){var t=e.name,n=e.societies,c=e.getSociety,s=Object(a.useState)(null),r=Object(b.a)(s,2),i=r[0],o=r[1],u=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],e.t0=l.a.keys(n);case 2:if((e.t1=e.t0()).done){e.next=10;break}return a=e.t1.value,e.next=6,c(n[a]);case 6:s=e.sent,t.push(s),e.next=2;break;case 10:o(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),Object(d.jsxs)("div",{className:"userInfo",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"/susu-events/img/userIcon.jpg",alt:""}),Object(d.jsx)("h1",{children:t})]}),Object(d.jsxs)("div",{className:"societyList",children:[Object(d.jsx)("h2",{children:"My Societies"}),Object(d.jsx)("div",{className:"soc-cards",children:i&&i.map((function(e,t){return Object(d.jsx)(F,{title:e.name,img:e.icon,id:n[t]},t)}))})]})]})};n(176);var P=function(e){var t=e.getSociety,n=e.getSocEvents,c=Object(o.e)().id,s=Object(a.useState)(null),r=Object(b.a)(s,2),i=r[0],u=r[1],l=Object(a.useState)(null),j=Object(b.a)(l,2),f=j[0],O=j[1];return Object(a.useEffect)((function(){t(c).then((function(e){return u(e)})),n(c).then((function(e){console.log(e),O(e)}))}),[]),Object(d.jsx)("div",{className:"society",children:i&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:i.icon,alt:""})}),Object(d.jsx)("h1",{children:i.name}),Object(d.jsxs)("div",{className:"socials",children:[i.socials.facebook&&Object(d.jsx)("a",{href:i.socials.facebook,children:Object(d.jsx)("i",{class:"fab fa-facebook"})}),i.socials.twitter&&Object(d.jsx)("a",{href:i.socials.twitter,children:Object(d.jsx)("i",{class:"fab fa-twitter"})}),i.socials.susu&&Object(d.jsx)("a",{href:i.socials.susu,children:Object(d.jsx)("i",{class:"fas fa-laptop"})})]}),Object(d.jsx)("h2",{children:"Upcoming Events"}),Object(d.jsx)("div",{className:"social-events",children:f&&f.map((function(e,t){return Object(d.jsx)(v,{title:e.title,img:e.img,startDate:e.startDate,endDate:e.endDate,location:e.location,id:t},t)}))})]})})},J=n(49),Z=n(18),T=n(148),z=Object(T.a)({apiKey:"AIzaSyAjvYU95Gq0WC9WTUsU92Y4bpa-KiCL57o",authDomain:"susu-events.firebaseapp.com",projectId:"susu-events",storageBucket:"susu-events.appspot.com",messagingSenderId:"1057902566332",appId:"1:1057902566332:web:a73d5f16053334c345e9b9"}),W=Object(Z.f)(z),G=n(177).createHash("sha256");var H=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(b.a)(s,2),i=r[0],o=r[1];Object(a.useEffect)((function(){var e=localStorage.getItem("username"),t=localStorage.getItem("token");if(e&&t){var n=function(){var n=Object(j.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(JSON.parse(e),JSON.parse(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[]),Object(a.useEffect)((function(){o(!!n)}),[n]);var u=function(){var e=Object(j.a)(l.a.mark((function e(t,n,a){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=G.update(n).digest("hex"),e.next=3,f(t);case 3:if(s=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:if(s.passwordHash!==c){e.next=11;break}return v(s),o(!0),a&&(localStorage.setItem("username",JSON.stringify(s.username)),localStorage.setItem("token",JSON.stringify(s.token))),e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:a=e.sent,n===a.token&&(v(a),o(!0));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,e.next=5,p(n);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Z.c)(W,"users","config"),e.next=3,Object(Z.d)(n);case 3:if(!(a=e.sent).exists()){e.next=13;break}c=a.data().usernameToId,e.t0=l.a.keys(c);case 7:if((e.t1=e.t0()).done){e.next=13;break}if(s=e.t1.value,c[s].username!==t){e.next=11;break}return e.abrupt("return",c[s].id);case 11:e.next=7;break;case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Z.c)(W,"users","".concat(t)),e.next=3,Object(Z.d)(n);case 3:if(!(a=e.sent).exists()){e.next=6;break}return e.abrupt("return",a.data());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){c(Object(J.a)(Object(J.a)({},e),{},{id:O(e.username)}))};return{user:n,loggedIn:i,logout:function(){o(!1),c(null),localStorage.clear()},login:u}},K=n(26);var M=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=function(e){for(var t in n)if(n[t].id===e)return n[t]},r=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=s(t))){e.next=4;break}return console.log("boom"),e.abrupt("return",a);case 4:return r=Object(Z.c)(W,"societies","".concat(t)),e.next=7,Object(Z.d)(r);case 7:if(!(i=e.sent).exists()){e.next=12;break}return o=i.data(),c([].concat(Object(K.a)(n),[Object(J.a)(Object(J.a)({},o),{},{id:t})])),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Z.b)(W,"events"),a=Object(Z.g)(n,Object(Z.h)("society","==",t)),e.next=4,Object(Z.e)(a);case 4:return c=e.sent,s=c.docs.map((function(e){return e.data()})),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getSociety:r,getSocEvents:i}};var U=function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(t,n,a,c,s,r){var i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={name:t,location:a,startDate:s,endDate:r,society:c,img:n},o=Object(Z.b)(W,"events"),e.next=4,Object(Z.a)(o,i);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c,s,r){return e.apply(this,arguments)}}();return{createEvent:e}};var R=function(){var e=S(),t=H(),n=U(),a=M();return Object(d.jsx)("div",{className:"app-container",children:Object(d.jsx)("div",{className:"app",children:t.loggedIn?Object(d.jsxs)(i.a,{children:[Object(d.jsx)(E,{logout:t.logout}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/events",children:Object(d.jsx)(x,{avSocs:t.user.societies,adminOf:t.user.adminOf,getSocEvents:a.getSocEvents})}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/tracker",children:Object(d.jsx)(N,{isLoaded:e.isLoaded,address:e.address,lngLat:e.addrLngLat})}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/events/:id",component:C}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/tracker/:location",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/create-event",children:Object(d.jsx)(L,{createEvent:n.createEvent,avSocs:t.user.adminOf,getSociety:a.getSociety})}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/",children:Object(d.jsx)(q,{name:t.user.username,societies:t.user.societies,getSociety:a.getSociety})}),Object(d.jsx)(o.a,{exact:!0,path:"/susu-events/societies/:id",component:P,children:Object(d.jsx)(P,{getSociety:a.getSociety,getSocEvents:a.getSocEvents})})]}):Object(d.jsx)(p,{login:t.login})})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.ea003de9.chunk.js.map