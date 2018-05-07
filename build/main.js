webpackJsonp([2],{135:function(a,n,t){"use strict";t.d(n,"a",function(){return r});t(1),t(110);var e=t(13),o=(t.n(e),t(163)),i=(t.n(o),t(261)),l=(t.n(i),t(358)),r=(t.n(l),function(){function a(a,n){this.http=a,this.storage=n,this.holdings=[],this.pricesUnavailable=!1}return a.prototype.addHolding=function(a){this.holdings.push(a),this.fetchPrices(),this.saveHoldings()},a.prototype.removeHolding=function(a){this.holdings.splice(this.holdings.indexOf(a),1),this.fetchPrices(),this.saveHoldings()},a.prototype.saveHoldings=function(){this.storage.set("cryptoHoldings",this.holdings)},a.prototype.loadHoldings=function(){var a=this;this.storage.get("cryptoHoldings").then(function(n){null!==n&&(a.holdings=n,a.fetchPrices())})},a.prototype.verifyHolding=function(a){return this.http.get("https://api.cryptonator.com/api/ticker/"+a.crypto+"-"+a.currency).pipe(Object(i.timeoutWith)(5e3,e.Observable.throw(new Error("Failed to verify holding."))))},a.prototype.fetchPrices=function(a){var n=this;this.pricesUnavailable=!1;for(var t=[],l=0,r=this.holdings;l<r.length;l++){var c=r[l],u=this.http.get("https://api.cryptonator.com/api/ticker/"+c.crypto+"-"+c.currency);t.push(u)}Object(o.forkJoin)(t).pipe(Object(i.timeoutWith)(5e3,e.Observable.throw(new Error("Failed to fetch prices.")))).subscribe(function(t){t.forEach(function(a,t){n.holdings[t].value=a.ticker.price}),void 0!==a&&a.complete(),n.saveHoldings()},function(t){n.pricesUnavailable=!0,void 0!==a&&a.complete()})},a}())},153:function(a,n){function t(a){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+a+"'.")})}t.keys=function(){return[]},t.resolve=t,a.exports=t,t.id=153},189:function(a,n,t){var e={"../pages/add-holding/add-holding.module.ngfactory":[364,1],"../pages/home/home.module.ngfactory":[365,0]};function o(a){var n=e[a];return n?t.e(n[1]).then(function(){return t(n[0])}):Promise.reject(new Error("Cannot find module '"+a+"'."))}o.keys=function(){return Object.keys(e)},o.id=189,a.exports=o},246:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(40),o=t(0),i=(t(1),t(134),t(110)),l=t(107),r=t(232),c=t(234),u=function(){return function(a){this.rootPage="HomePage",a.ready().then(function(){})}}(),s=t(135),_=function(){return function(){}}(),d=t(55),h=t(235),f=t(236),p=t(237),g=t(238),b=t(240),m=t(241),y=t(242),v=t(243),k=t(245),H=t(363),j=t(45),P=t(59),w=t(6),O=t(28),E=t(11),F=t(2),M=t(5),C=t(10),N=t(37),X=t(17),q=t(12),x=o.X({encapsulation:2,styles:[],data:{}});function S(a){return o._19(0,[(a()(),o.Z(0,0,null,null,2,"ion-nav",[],null,null,null,H.b,H.a)),o._15(6144,null,j.a,null,[P.a]),o.Y(2,4374528,null,0,P.a,[[2,w.a],[2,O.a],E.a,F.a,M.a,o.j,o.u,o.z,o.i,C.l,N.a,[2,X.a],q.a,o.k],{root:[0,"root"]},null),(a()(),o._18(-1,null,["\n"]))],function(a,n){a(n,2,0,n.component.rootPage)},null)}var T=o.V("ng-component",u,function(a){return o._19(0,[(a()(),o.Z(0,0,null,null,1,"ng-component",[],null,null,null,S,x)),o.Y(1,49152,null,0,u,[M.a],null,null)],null,null)},{},{},[]),U=t(18),W=t(115),A=t(21),G=t(99),J=t(101),K=t(114),R=t(19),Y=t(39),Z=t(46),z=t(105),B=t(141),D=t(57),V=t(47),I=t(119),L=t(71),Q=t(123),$=t(117),aa=t(130),na=t(191),ta=t(231),ea=t(116),oa=t(35),ia=t(106),la=t(118),ra=o.W(_,[d.b],function(a){return o._10([o._11(512,o.i,o.S,[[8,[h.a,f.a,p.a,g.a,b.a,m.a,y.a,v.a,k.a,T]],[3,o.i],o.s]),o._11(5120,o.r,o._9,[[3,o.r]]),o._11(4608,U.k,U.j,[o.r,[2,U.s]]),o._11(5120,o.b,o._0,[]),o._11(5120,o.p,o._6,[]),o._11(5120,o.q,o._7,[]),o._11(4608,e.c,e.q,[U.c]),o._11(6144,o.D,null,[e.c]),o._11(4608,e.f,W.a,[]),o._11(5120,e.d,function(a,n,t,o,i){return[new e.k(a,n),new e.o(t),new e.n(o,i)]},[U.c,o.u,U.c,U.c,e.f]),o._11(4608,e.e,e.e,[e.d,o.u]),o._11(135680,e.m,e.m,[U.c]),o._11(4608,e.l,e.l,[e.e,e.m]),o._11(6144,o.B,null,[e.l]),o._11(6144,e.p,null,[e.m]),o._11(4608,o.G,o.G,[o.u]),o._11(4608,e.h,e.h,[U.c]),o._11(4608,e.i,e.i,[U.c]),o._11(4608,A.k,A.k,[]),o._11(4608,A.c,A.c,[]),o._11(4608,l.h,l.m,[U.c,o.w,l.k]),o._11(4608,l.n,l.n,[l.h,l.l]),o._11(5120,l.a,function(a){return[a]},[l.n]),o._11(4608,l.j,l.j,[]),o._11(6144,l.i,null,[l.j]),o._11(4608,l.g,l.g,[l.i]),o._11(6144,l.b,null,[l.g]),o._11(5120,l.f,l.o,[l.b,[2,l.a]]),o._11(4608,l.c,l.c,[l.f]),o._11(4608,G.a,G.a,[E.a,F.a]),o._11(4608,J.a,J.a,[E.a,F.a]),o._11(4608,K.a,K.a,[]),o._11(4608,R.a,R.a,[]),o._11(4608,Y.a,Y.a,[M.a]),o._11(4608,Z.a,Z.a,[F.a,M.a,o.u,q.a]),o._11(4608,z.a,z.a,[E.a,F.a]),o._11(5120,U.f,B.c,[U.q,[2,U.a],F.a]),o._11(4608,U.e,U.e,[U.f]),o._11(5120,D.b,D.d,[E.a,D.a]),o._11(5120,X.a,X.b,[E.a,D.b,U.e,V.b,o.i]),o._11(4608,I.a,I.a,[E.a,F.a,X.a]),o._11(4608,L.a,L.a,[E.a,F.a]),o._11(4608,Q.a,Q.a,[E.a,F.a,X.a]),o._11(4608,$.a,$.a,[F.a,M.a,q.a,E.a,C.l]),o._11(4608,aa.a,aa.a,[E.a,F.a]),o._11(4608,N.a,N.a,[M.a,F.a]),o._11(5120,na.a,na.c,[na.b]),o._11(4608,c.a,c.a,[]),o._11(4608,r.a,r.a,[]),o._11(4608,s.a,s.a,[l.c,na.a]),o._11(512,U.b,U.b,[]),o._11(512,o.k,ta.a,[]),o._11(256,F.b,{preloadModules:!0},[]),o._11(1024,ea.a,ea.b,[]),o._11(1024,M.a,M.b,[e.b,ea.a,o.u]),o._11(1024,F.a,F.c,[F.b,M.a]),o._11(512,q.a,q.a,[M.a]),o._11(512,oa.a,oa.a,[]),o._11(512,E.a,E.a,[F.a,M.a,[2,oa.a]]),o._11(512,C.l,C.l,[E.a]),o._11(256,D.a,{links:[{loadChildren:"../pages/add-holding/add-holding.module.ngfactory#AddHoldingPageModuleNgFactory",name:"AddHoldingPage",segment:"add-holding",priority:"low",defaultHistory:["HomePage"]},{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]}]},[]),o._11(512,o.h,o.h,[]),o._11(512,ia.a,ia.a,[o.h]),o._11(1024,V.b,V.c,[ia.a,o.o]),o._11(1024,o.c,function(a,n,t,o,i,l,r,c,u,s,_,d,h){return[e.s(a),la.a(n),K.b(t,o),$.b(i,l,r,c,u),V.d(s,_,d,h)]},[[2,o.t],F.a,M.a,q.a,F.a,M.a,q.a,E.a,C.l,F.a,D.a,V.b,o.u]),o._11(512,o.d,o.d,[[2,o.c]]),o._11(131584,o.f,o.f,[o.u,o.T,o.o,o.k,o.i,o.d]),o._11(512,o.e,o.e,[o.f]),o._11(512,e.a,e.a,[[3,e.a]]),o._11(512,A.j,A.j,[]),o._11(512,A.d,A.d,[]),o._11(512,A.i,A.i,[]),o._11(512,B.a,B.a,[]),o._11(512,i.a,i.a,[]),o._11(512,l.e,l.e,[]),o._11(512,l.d,l.d,[]),o._11(512,_,_,[]),o._11(256,l.k,"XSRF-TOKEN",[]),o._11(256,l.l,"X-XSRF-TOKEN",[]),o._11(256,d.a,u,[]),o._11(256,U.a,"/",[]),o._11(256,na.b,null,[])])});Object(o.M)(),Object(e.j)().bootstrapModuleFactory(ra)}},[246]);