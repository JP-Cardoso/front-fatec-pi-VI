import{a as D}from"./chunk-B4PJL7HP.js";import{f as E,g as N}from"./chunk-MO3LDRIS.js";import{b as R,c as F,d as O,f as x,g as I,h as S}from"./chunk-OHMRR6GS.js";import{Ba as C,Kb as c,Qa as v,Sa as A,U as f,Ua as M,W as g,Wa as P,Xa as b,aa as l,cc as w,fa as p,ia as y,nb as m,ob as h,pb as s}from"./chunk-557OJFIN.js";var T=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[c],decls:5,vars:0,consts:[[1,"container"],[1,"content"]],template:function(o,i){o&1&&(m(0,"div",0),s(1,"app-header"),h(),m(2,"div",1),s(3,"app-card")(4,"app-card-info"),h())},dependencies:[D,E,N],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.container[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:center;justify-content:space-around}.content[_ngcontent-%COMP%]   app-card[_ngcontent-%COMP%]{width:40%}.content[_ngcontent-%COMP%]   app-card-info[_ngcontent-%COMP%]{width:40%}"]});let r=e;return r})();var j=(r,e)=>{let t=localStorage.getItem("token"),n=l(I);return typeof t!="object"&&t!==null?!0:(n.navigate(["/"]),!1)};var k=[{path:"",component:T},{path:"home",redirectTo:""},{path:"create-account",loadComponent:()=>import("./chunk-24GIOPTL.js").then(r=>r.CreateAccountComponent)},{path:"login",loadComponent:()=>import("./chunk-OSUP4PZM.js").then(r=>r.LoginComponent)},{path:"about",loadComponent:()=>import("./chunk-SO4XQ653.js").then(r=>r.AboutComponent)},{path:"account",loadComponent:()=>import("./chunk-BBIIVPPY.js").then(r=>r.UserComponent),canActivate:[j]}];var z="@",G=(()=>{let e=class e{constructor(n,o,i,a,d){this.doc=n,this.delegate=o,this.zone=i,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=l(A,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-KIDESUOC.js")).catch(o=>{throw new f(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(n,o){let i=this.delegate.createRenderer(n,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new u(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let V=d.createRenderer(n,o);a.use(V)}).catch(d=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){v()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})(),u=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,o){this.delegate.insertBefore(e,t,n,o)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,o){this.delegate.setAttribute(e,t,n,o)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,o){this.delegate.setStyle(e,t,n,o)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(z)}};function B(r="animations"){return P("NgAsyncAnimations"),y([{provide:M,useFactory:(e,t,n)=>new G(e,t,n,r),deps:[w,F,b]},{provide:C,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var H={providers:[S(k),B(),R()]};var U=(()=>{let e=class e{constructor(){this.title="fatec-pi"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(o,i){o&1&&s(0,"router-outlet")},dependencies:[x]});let r=e;return r})();O(U,H).catch(r=>console.error(r));
