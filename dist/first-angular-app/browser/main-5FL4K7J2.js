import{a as k,b as w,c as E,d as P,f as M}from"./chunk-VDOJ2KZL.js";import{d as S}from"./chunk-YWSLLDYO.js";import{$ as b,Ba as x,Da as D,Ja as p,Q as y,S as v,V as C,Y as u,Ya as i,Za as a,_a as m,db as d,ga as A,ha as F,ka as I,lb as _,sa as N,ua as R}from"./chunk-RB47XDAM.js";var H="@",B=(()=>{class o{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=u(A);loadingSchedulerFn=u(z,{optional:!0});_engine;constructor(t,n,r,s,l){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-OC2AJVLF.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new y(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let l=new s(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new g(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let j=l.createRenderer(t,n);s.use(j),this.scheduler??=this.injector.get(F,null,{optional:!0}),this.scheduler?.notify(11)}).catch(l=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(n){x()};static \u0275prov=v({token:o,factory:o.\u0275fac})}return o})(),g=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(H)}},z=new C("");function f(o="animations"){return R("NgAsyncAnimations"),b([{provide:D,useFactory:(e,t,n)=>new B(e,t,n,o),deps:[S,k,I]},{provide:N,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O=[{path:"home",loadComponent:()=>import("./chunk-53JYQSMG.js").then(o=>o.HomeComponent)},{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-WMTLMMWV.js").then(o=>o.LandingPageComponent)},{path:"gallery",loadComponent:()=>import("./chunk-OZXPBF44.js").then(o=>o.ImgGalleryComponent)},{path:"register",loadComponent:()=>import("./chunk-ZIZTWBCG.js").then(o=>o.FormComponent)},{path:"login",loadComponent:()=>import("./chunk-MCF467NR.js").then(o=>o.LoginFormComponent)},{path:"axios",loadComponent:()=>import("./chunk-7UIFJG5X.js").then(o=>o.AxiosDemoComponent)}];var T={providers:[_({eventCoalescing:!0}),M(O),f(),f()]};var c=class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=p({type:o,selectors:[["app-header"]],decls:23,vars:0,consts:[["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-dark"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","/home",1,"nav-link","active"],["aria-current","page","routerLink","/gallery",1,"nav-link","active"],["aria-current","page","routerLink","/axios",1,"nav-link","active"],["aria-current","page","routerLink","/register",1,"nav-link","active"],["aria-current","page","routerLink","/login",1,"nav-link","active"]],template:function(t,n){t&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),d(3,"Navbar"),a(),i(4,"button",3),m(5,"span",4),a(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),d(10,"Home"),a()(),i(11,"li",7)(12,"a",9),d(13,"Gallery"),a()(),i(14,"li",7)(15,"a",10),d(16,"Axios"),a()(),i(17,"li",7)(18,"a",11),d(19,"Register"),a()(),i(20,"li",7)(21,"a",12),d(22,"Login"),a()()()()()())},dependencies:[P],styles:["nav[_ngcontent-%COMP%]{position:sticky}"]})};var h=class o{title="first-angular-app";ngOnInit(){setTimeout(()=>{let e=document.getElementById("splash-screen");e&&e.classList.add("hidden")},1e3)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=p({type:o,selectors:[["app-root"]],decls:2,vars:0,consts:[["ng-cloak",""]],template:function(t,n){t&1&&m(0,"app-header")(1,"router-outlet",0)},dependencies:[c,E],encapsulation:2})};w(h,T).catch(o=>console.error(o));
