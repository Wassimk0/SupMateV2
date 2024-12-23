var N;(function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"})(N||(N={}));var _;(function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"})(_||(_={}));function wt(r){return re(r)&&typeof r.from=="function"}function re(r){return typeof r=="object"&&typeof r.to=="function"}function Re(r){r.parentElement.removeChild(r)}function be(r){return r!=null}function je(r){r.preventDefault()}function Ct(r){return r.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Et(r,e){return Math.round(r/e)*e}function Pt(r,e){var s=r.getBoundingClientRect(),u=r.ownerDocument,f=u.documentElement,p=Ie(u);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(p.x=0),e?s.top+p.y-f.clientTop:s.left+p.x-f.clientLeft}function H(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function Fe(r,e,s){s>0&&(L(r,e),setTimeout(function(){te(r,e)},s))}function Be(r){return Math.max(Math.min(r,100),0)}function ie(r){return Array.isArray(r)?r:[r]}function At(r){r=String(r);var e=r.split(".");return e.length>1?e[1].length:0}function L(r,e){r.classList&&!/\s/.test(e)?r.classList.add(e):r.className+=" "+e}function te(r,e){r.classList&&!/\s/.test(e)?r.classList.remove(e):r.className=r.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function yt(r,e){return r.classList?r.classList.contains(e):new RegExp("\\b"+e+"\\b").test(r.className)}function Ie(r){var e=window.pageXOffset!==void 0,s=(r.compatMode||"")==="CSS1Compat",u=e?window.pageXOffset:s?r.documentElement.scrollLeft:r.body.scrollLeft,f=e?window.pageYOffset:s?r.documentElement.scrollTop:r.body.scrollTop;return{x:u,y:f}}function Vt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Dt(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch{}return r}function kt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function we(r,e){return 100/(e-r)}function xe(r,e,s){return e*100/(r[s+1]-r[s])}function Mt(r,e){return xe(r,r[0]<0?e+Math.abs(r[0]):e-r[0],0)}function Ut(r,e){return e*(r[1]-r[0])/100+r[0]}function W(r,e){for(var s=1;r>=e[s];)s+=1;return s}function Lt(r,e,s){if(s>=r.slice(-1)[0])return 100;var u=W(s,r),f=r[u-1],p=r[u],v=e[u-1],w=e[u];return v+Mt([f,p],s)/we(v,w)}function _t(r,e,s){if(s>=100)return r.slice(-1)[0];var u=W(s,e),f=r[u-1],p=r[u],v=e[u-1],w=e[u];return Ut([f,p],(s-v)*we(v,w))}function Ot(r,e,s,u){if(u===100)return u;var f=W(u,r),p=r[f-1],v=r[f];return s?u-p>(v-p)/2?v:p:e[f-1]?r[f-1]+Et(u-r[f-1],e[f-1]):u}var Ke=function(){function r(e,s,u){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=s;var f,p=[];for(Object.keys(e).forEach(function(v){p.push([ie(e[v]),v])}),p.sort(function(v,w){return v[0][0]-w[0][0]}),f=0;f<p.length;f++)this.handleEntryPoint(p[f][1],p[f][0]);for(this.xNumSteps=this.xSteps.slice(0),f=0;f<this.xNumSteps.length;f++)this.handleStepPoint(f,this.xNumSteps[f])}return r.prototype.getDistance=function(e){for(var s=[],u=0;u<this.xNumSteps.length-1;u++)s[u]=xe(this.xVal,e,u);return s},r.prototype.getAbsoluteDistance=function(e,s,u){var f=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[f+1];)f++;else e===this.xPct[this.xPct.length-1]&&(f=this.xPct.length-2);!u&&e===this.xPct[f+1]&&f++,s===null&&(s=[]);var p,v=1,w=s[f],d=0,m=0,D=0,M=0;for(u?p=(e-this.xPct[f])/(this.xPct[f+1]-this.xPct[f]):p=(this.xPct[f+1]-e)/(this.xPct[f+1]-this.xPct[f]);w>0;)d=this.xPct[f+1+M]-this.xPct[f+M],s[f+M]*v+100-p*100>100?(m=d*p,v=(w-100*p)/s[f+M],p=1):(m=s[f+M]*d/100*v,v=0),u?(D=D-m,this.xPct.length+M>=1&&M--):(D=D+m,this.xPct.length-M>=1&&M++),w=s[f+M]*v;return e+D},r.prototype.toStepping=function(e){return e=Lt(this.xVal,this.xPct,e),e},r.prototype.fromStepping=function(e){return _t(this.xVal,this.xPct,e)},r.prototype.getStep=function(e){return e=Ot(this.xPct,this.xSteps,this.snap,e),e},r.prototype.getDefaultStep=function(e,s,u){var f=W(e,this.xPct);return(e===100||s&&e===this.xPct[f-1])&&(f=Math.max(f-1,1)),(this.xVal[f]-this.xVal[f-1])/u},r.prototype.getNearbySteps=function(e){var s=W(e,this.xPct);return{stepBefore:{startValue:this.xVal[s-2],step:this.xNumSteps[s-2],highestStep:this.xHighestCompleteStep[s-2]},thisStep:{startValue:this.xVal[s-1],step:this.xNumSteps[s-1],highestStep:this.xHighestCompleteStep[s-1]},stepAfter:{startValue:this.xVal[s],step:this.xNumSteps[s],highestStep:this.xHighestCompleteStep[s]}}},r.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(At);return Math.max.apply(null,e)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(e){return this.getStep(this.toStepping(e))},r.prototype.handleEntryPoint=function(e,s){var u;if(e==="min"?u=0:e==="max"?u=100:u=parseFloat(e),!H(u)||!H(s[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(u),this.xVal.push(s[0]);var f=Number(s[1]);u?this.xSteps.push(isNaN(f)?!1:f):isNaN(f)||(this.xSteps[0]=f),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(e,s){if(s){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=xe([this.xVal[e],this.xVal[e+1]],s,0)/we(this.xPct[e],this.xPct[e+1]);var u=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],f=Math.ceil(Number(u.toFixed(3))-1),p=this.xVal[e]+this.xNumSteps[e]*f;this.xHighestCompleteStep[e]=p}},r}(),Ne={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},qe={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},B={tooltips:".__tooltips",aria:".__aria"};function Ht(r,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=e}function zt(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=e}function Rt(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=e}function jt(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=e}function Ft(r,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new Ke(e,r.snap||!1,r.singleStep)}function Bt(r,e){if(e=ie(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=e.length,r.start=e}function Nt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=e}function It(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=e}function Kt(r,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=e}function Te(r,e){var s=[!1],u;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(u=1;u<r.handles;u++)s.push(e);s.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");s=e}r.connect=s}function qt(r,e){switch(e){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Xe(r,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(r.margin=r.spectrum.getDistance(e))}function Tt(r,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(e),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Xt(r,e){var s;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),r.padding=[r.spectrum.getDistance(e[0]),r.spectrum.getDistance(e[1])],s=0;s<r.spectrum.xNumSteps.length-1;s++)if(r.padding[0][s]<0||r.padding[1][s]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var u=e[0]+e[1],f=r.spectrum.xVal[0],p=r.spectrum.xVal[r.spectrum.xVal.length-1];if(u/(p-f)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Yt(r,e){switch(e){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function $t(r,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var s=e.indexOf("tap")>=0,u=e.indexOf("drag")>=0,f=e.indexOf("fixed")>=0,p=e.indexOf("snap")>=0,v=e.indexOf("hover")>=0,w=e.indexOf("unconstrained")>=0,d=e.indexOf("invert-connects")>=0,m=e.indexOf("drag-all")>=0,D=e.indexOf("smooth-steps")>=0;if(f){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Xe(r,r.start[1]-r.start[0])}if(d&&r.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(w&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:s||p,drag:u,dragAll:m,smoothSteps:D,fixed:f,snap:p,hover:v,unconstrained:w,invertConnects:d}}function Wt(r,e){if(e!==!1)if(e===!0||re(e)){r.tooltips=[];for(var s=0;s<r.handles;s++)r.tooltips.push(e)}else{if(e=ie(e),e.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(u){if(typeof u!="boolean"&&!re(u))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=e}}function Gt(r,e){if(e.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=e}function Jt(r,e){if(!re(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=e}function Zt(r,e){if(!wt(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=e}function Qt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=e}function er(r,e){r.documentElement=e}function tr(r,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=e}function rr(r,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(e).forEach(function(s){r.cssClasses[s]=r.cssPrefix+e[s]})):r.cssClasses=e}function Ye(r){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Ne,format:Ne},s={step:{r:!1,t:Ht},keyboardPageMultiplier:{r:!1,t:zt},keyboardMultiplier:{r:!1,t:Rt},keyboardDefaultStep:{r:!1,t:jt},start:{r:!0,t:Bt},connect:{r:!0,t:Te},direction:{r:!0,t:Yt},snap:{r:!1,t:Nt},animate:{r:!1,t:It},animationDuration:{r:!1,t:Kt},range:{r:!0,t:Ft},orientation:{r:!1,t:qt},margin:{r:!1,t:Xe},limit:{r:!1,t:Tt},padding:{r:!1,t:Xt},behaviour:{r:!0,t:$t},ariaFormat:{r:!1,t:Jt},format:{r:!1,t:Zt},tooltips:{r:!1,t:Wt},keyboardSupport:{r:!0,t:Qt},documentElement:{r:!1,t:er},cssPrefix:{r:!0,t:tr},cssClasses:{r:!0,t:rr},handleAttributes:{r:!1,t:Gt}},u={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:qe,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(s).forEach(function(d){if(!be(r[d])&&u[d]===void 0){if(s[d].r)throw new Error("noUiSlider: '"+d+"' is required.");return}s[d].t(e,be(r[d])?r[d]:u[d])}),e.pips=r.pips;var f=document.createElement("div"),p=f.style.msTransform!==void 0,v=f.style.transform!==void 0;e.transformRule=v?"transform":p?"msTransform":"webkitTransform";var w=[["left","top"],["right","bottom"]];return e.style=w[e.dir][e.ort],e}function ir(r,e,s){var u=Vt(),f=kt(),p=f&&Dt(),v=r,w,d,m,D,M,F,g=e.spectrum,z=[],C=[],O=[],ne=0,R={},X=!1,T=r.ownerDocument,G=e.documentElement||T.documentElement,J=T.body,$e=T.dir==="rtl"||e.ort===1?0:100;function j(t,i){var n=T.createElement("div");return i&&L(n,i),t.appendChild(n),n}function We(t,i){var n=j(t,e.cssClasses.origin),a=j(n,e.cssClasses.handle);if(j(a,e.cssClasses.touchArea),a.setAttribute("data-handle",String(i)),e.keyboardSupport&&(a.setAttribute("tabindex","0"),a.addEventListener("keydown",function(l){return ct(l,i)})),e.handleAttributes!==void 0){var o=e.handleAttributes[i];Object.keys(o).forEach(function(l){a.setAttribute(l,o[l])})}return a.setAttribute("role","slider"),a.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?L(a,e.cssClasses.handleLower):i===e.handles-1&&L(a,e.cssClasses.handleUpper),n.handle=a,n}function ae(t,i){return i?j(t,e.cssClasses.connect):!1}function Ge(t,i){d=j(i,e.cssClasses.connects),m=[],D=[],D.push(ae(d,t[0]));for(var n=0;n<e.handles;n++)m.push(We(i,n)),O[n]=n,D.push(ae(d,t[n+1]))}function Je(t){L(t,e.cssClasses.target),e.dir===0?L(t,e.cssClasses.ltr):L(t,e.cssClasses.rtl),e.ort===0?L(t,e.cssClasses.horizontal):L(t,e.cssClasses.vertical);var i=getComputedStyle(t).direction;return i==="rtl"?L(t,e.cssClasses.textDirectionRtl):L(t,e.cssClasses.textDirectionLtr),j(t,e.cssClasses.base)}function Ze(t,i){return!e.tooltips||!e.tooltips[i]?!1:j(t.firstChild,e.cssClasses.tooltip)}function Ce(){return v.hasAttribute("disabled")}function se(t){var i=m[t];return i.hasAttribute("disabled")}function Qe(t){t!=null?(m[t].setAttribute("disabled",""),m[t].handle.removeAttribute("tabindex")):(v.setAttribute("disabled",""),m.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function et(t){t!=null?(m[t].removeAttribute("disabled"),m[t].handle.setAttribute("tabindex","0")):(v.removeAttribute("disabled"),m.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function oe(){F&&(Y("update"+B.tooltips),F.forEach(function(t){t&&Re(t)}),F=null)}function Ee(){oe(),F=m.map(Ze),he("update"+B.tooltips,function(t,i,n){if(!(!F||!e.tooltips)&&F[i]!==!1){var a=t[i];e.tooltips[i]!==!0&&(a=e.tooltips[i].to(n[i])),F[i].innerHTML=a}})}function tt(){Y("update"+B.aria),he("update"+B.aria,function(t,i,n,a,o){O.forEach(function(l){var h=m[l],c=Z(C,l,0,!0,!0,!0),b=Z(C,l,100,!0,!0,!0),x=o[l],E=String(e.ariaFormat.to(n[l]));c=g.fromStepping(c).toFixed(1),b=g.fromStepping(b).toFixed(1),x=g.fromStepping(x).toFixed(1),h.children[0].setAttribute("aria-valuemin",c),h.children[0].setAttribute("aria-valuemax",b),h.children[0].setAttribute("aria-valuenow",x),h.children[0].setAttribute("aria-valuetext",E)})})}function rt(t){if(t.mode===N.Range||t.mode===N.Steps)return g.xVal;if(t.mode===N.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=t.values-1,n=100/i,a=[];i--;)a[i]=i*n;return a.push(100),Pe(a,t.stepped)}return t.mode===N.Positions?Pe(t.values,t.stepped):t.mode===N.Values?t.stepped?t.values.map(function(o){return g.fromStepping(g.getStep(g.toStepping(o)))}):t.values:[]}function Pe(t,i){return t.map(function(n){return g.fromStepping(i?g.getStep(n):n)})}function it(t){function i(x,E){return Number((x+E).toFixed(7))}var n=rt(t),a={},o=g.xVal[0],l=g.xVal[g.xVal.length-1],h=!1,c=!1,b=0;return n=Ct(n.slice().sort(function(x,E){return x-E})),n[0]!==o&&(n.unshift(o),h=!0),n[n.length-1]!==l&&(n.push(l),c=!0),n.forEach(function(x,E){var P,S,y,U=x,V=n[E+1],k,pe,me,ge,Oe,Se,He,ze=t.mode===N.Steps;for(ze&&(P=g.xNumSteps[E]),P||(P=V-U),V===void 0&&(V=U),P=Math.max(P,1e-7),S=U;S<=V;S=i(S,P)){for(k=g.toStepping(S),pe=k-b,Oe=pe/(t.density||1),Se=Math.round(Oe),He=pe/Se,y=1;y<=Se;y+=1)me=b+y*He,a[me.toFixed(5)]=[g.fromStepping(me),0];ge=n.indexOf(S)>-1?_.LargeValue:ze?_.SmallValue:_.NoValue,!E&&h&&S!==V&&(ge=0),S===V&&c||(a[k.toFixed(5)]=[S,ge]),b=k}}),a}function nt(t,i,n){var a,o,l=T.createElement("div"),h=(a={},a[_.None]="",a[_.NoValue]=e.cssClasses.valueNormal,a[_.LargeValue]=e.cssClasses.valueLarge,a[_.SmallValue]=e.cssClasses.valueSub,a),c=(o={},o[_.None]="",o[_.NoValue]=e.cssClasses.markerNormal,o[_.LargeValue]=e.cssClasses.markerLarge,o[_.SmallValue]=e.cssClasses.markerSub,o),b=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],x=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];L(l,e.cssClasses.pips),L(l,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(S,y){var U=y===e.cssClasses.value,V=U?b:x,k=U?h:c;return y+" "+V[e.ort]+" "+k[S]}function P(S,y,U){if(U=i?i(y,U):U,U!==_.None){var V=j(l,!1);V.className=E(U,e.cssClasses.marker),V.style[e.style]=S+"%",U>_.NoValue&&(V=j(l,!1),V.className=E(U,e.cssClasses.value),V.setAttribute("data-value",String(y)),V.style[e.style]=S+"%",V.innerHTML=String(n.to(y)))}}return Object.keys(t).forEach(function(S){P(S,t[S][0],t[S][1])}),l}function le(){M&&(Re(M),M=null)}function ue(t){le();var i=it(t),n=t.filter,a=t.format||{to:function(o){return String(Math.round(o))}};return M=v.appendChild(nt(i,n,a)),M}function Ae(){var t=w.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?t.width||w[i]:t.height||w[i]}function I(t,i,n,a){var o=function(h){var c=at(h,a.pageOffset,a.target||i);if(!c||Ce()&&!a.doNotReject||yt(v,e.cssClasses.tap)&&!a.doNotReject||t===u.start&&c.buttons!==void 0&&c.buttons>1||a.hover&&c.buttons)return!1;p||c.preventDefault(),c.calcPoint=c.points[e.ort],n(c,a)},l=[];return t.split(" ").forEach(function(h){i.addEventListener(h,o,p?{passive:!0}:!1),l.push([h,o])}),l}function at(t,i,n){var a=t.type.indexOf("touch")===0,o=t.type.indexOf("mouse")===0,l=t.type.indexOf("pointer")===0,h=0,c=0;if(t.type.indexOf("MSPointer")===0&&(l=!0),t.type==="mousedown"&&!t.buttons&&!t.touches)return!1;if(a){var b=function(P){var S=P.target;return S===n||n.contains(S)||t.composed&&t.composedPath().shift()===n};if(t.type==="touchstart"){var x=Array.prototype.filter.call(t.touches,b);if(x.length>1)return!1;h=x[0].pageX,c=x[0].pageY}else{var E=Array.prototype.find.call(t.changedTouches,b);if(!E)return!1;h=E.pageX,c=E.pageY}}return i=i||Ie(T),(o||l)&&(h=t.clientX+i.x,c=t.clientY+i.y),t.pageOffset=i,t.points=[h,c],t.cursor=o||l,t}function ye(t){var i=t-Pt(w,e.ort),n=i*100/Ae();return n=Be(n),e.dir?100-n:n}function st(t){var i=100,n=!1;return m.forEach(function(a,o){if(!se(o)){var l=C[o],h=Math.abs(l-t),c=h===100&&i===100,b=h<i,x=h<=i&&t>l;(b||x||c)&&(n=o,i=h)}}),n}function ot(t,i){t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null&&fe(t,i)}function lt(t,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&i.buttonsProperty!==0)return fe(t,i);var n=(e.dir?-1:1)*(t.calcPoint-i.startCalcPoint),a=n*100/i.baseSize;De(n>0,a,i.locations,i.handleNumbers,i.connect)}function fe(t,i){i.handle&&(te(i.handle,e.cssClasses.active),ne-=1),i.listeners.forEach(function(n){G.removeEventListener(n[0],n[1])}),ne===0&&(te(v,e.cssClasses.drag),ve(),t.cursor&&(J.style.cursor="",J.removeEventListener("selectstart",je))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(n){K(n,C[n],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(n){A("update",n)})),i.handleNumbers.forEach(function(n){A("change",n),A("set",n),A("end",n)})}function ce(t,i){if(!i.handleNumbers.some(se)){var n;if(i.handleNumbers.length===1){var a=m[i.handleNumbers[0]];n=a.children[0],ne+=1,L(n,e.cssClasses.active)}t.stopPropagation();var o=[],l=I(u.move,G,lt,{target:t.target,handle:n,connect:i.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:Ae(),pageOffset:t.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:t.buttons,locations:C.slice()}),h=I(u.end,G,fe,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers}),c=I("mouseout",G,ot,{target:t.target,handle:n,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers});o.push.apply(o,l.concat(h,c)),t.cursor&&(J.style.cursor=getComputedStyle(t.target).cursor,m.length>1&&L(v,e.cssClasses.drag),J.addEventListener("selectstart",je,!1)),i.handleNumbers.forEach(function(b){A("start",b)})}}function ut(t){t.stopPropagation();var i=ye(t.calcPoint),n=st(i);n!==!1&&(e.events.snap||Fe(v,e.cssClasses.tap,e.animationDuration),K(n,i,!0,!0),ve(),A("slide",n,!0),A("update",n,!0),e.events.snap?ce(t,{handleNumbers:[n]}):(A("change",n,!0),A("set",n,!0)))}function ft(t){var i=ye(t.calcPoint),n=g.getStep(i),a=g.fromStepping(n);Object.keys(R).forEach(function(o){o.split(".")[0]==="hover"&&R[o].forEach(function(l){l.call(ee,a)})})}function ct(t,i){if(Ce()||se(i))return!1;var n=["Left","Right"],a=["Down","Up"],o=["PageDown","PageUp"],l=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(a.reverse(),o.reverse());var h=t.key.replace("Arrow",""),c=h===o[0],b=h===o[1],x=h===a[0]||h===n[0]||c,E=h===a[1]||h===n[1]||b,P=h===l[0],S=h===l[1];if(!x&&!E&&!P&&!S)return!0;t.preventDefault();var y;if(E||x){var U=x?0:1,V=Le(i),k=V[U];if(k===null)return!1;k===!1&&(k=g.getDefaultStep(C[i],x,e.keyboardDefaultStep)),b||c?k*=e.keyboardPageMultiplier:k*=e.keyboardMultiplier,k=Math.max(k,1e-7),k=(x?-1:1)*k,y=z[i]+k}else S?y=e.spectrum.xVal[e.spectrum.xVal.length-1]:y=e.spectrum.xVal[0];return K(i,g.toStepping(y),!0,!0),A("slide",i),A("update",i),A("change",i),A("set",i),!1}function Ve(t){t.fixed||m.forEach(function(i,n){I(u.start,i.children[0],ce,{handleNumbers:[n]})}),t.tap&&I(u.start,w,ut,{}),t.hover&&I(u.move,w,ft,{hover:!0}),t.drag&&D.forEach(function(i,n){if(!(i===!1||n===0||n===D.length-1)){var a=m[n-1],o=m[n],l=[i],h=[a,o],c=[n-1,n];L(i,e.cssClasses.draggable),t.fixed&&(l.push(a.children[0]),l.push(o.children[0])),t.dragAll&&(h=m,c=O),l.forEach(function(b){I(u.start,b,ce,{handles:h,handleNumbers:c,connect:i})})}})}function he(t,i){R[t]=R[t]||[],R[t].push(i),t.split(".")[0]==="update"&&m.forEach(function(n,a){A("update",a)})}function ht(t){return t===B.aria||t===B.tooltips}function Y(t){var i=t&&t.split(".")[0],n=i?t.substring(i.length):t;Object.keys(R).forEach(function(a){var o=a.split(".")[0],l=a.substring(o.length);(!i||i===o)&&(!n||n===l)&&(!ht(l)||n===l)&&delete R[a]})}function A(t,i,n){Object.keys(R).forEach(function(a){var o=a.split(".")[0];t===o&&R[a].forEach(function(l){l.call(ee,z.map(e.format.to),i,z.slice(),n||!1,C.slice(),ee)})})}function Z(t,i,n,a,o,l,h){var c;return m.length>1&&!e.events.unconstrained&&(a&&i>0&&(c=g.getAbsoluteDistance(t[i-1],e.margin,!1),n=Math.max(n,c)),o&&i<m.length-1&&(c=g.getAbsoluteDistance(t[i+1],e.margin,!0),n=Math.min(n,c))),m.length>1&&e.limit&&(a&&i>0&&(c=g.getAbsoluteDistance(t[i-1],e.limit,!1),n=Math.min(n,c)),o&&i<m.length-1&&(c=g.getAbsoluteDistance(t[i+1],e.limit,!0),n=Math.max(n,c))),e.padding&&(i===0&&(c=g.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,c)),i===m.length-1&&(c=g.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,c))),h||(n=g.getStep(n)),n=Be(n),n===t[i]&&!l?!1:n}function de(t,i){var n=e.ort;return(n?i:t)+", "+(n?t:i)}function De(t,i,n,a,o){var l=n.slice(),h=a[0],c=e.events.smoothSteps,b=[!t,t],x=[t,!t];a=a.slice(),t&&a.reverse(),a.length>1?a.forEach(function(P,S){var y=Z(l,P,l[P]+i,b[S],x[S],!1,c);y===!1?i=0:(i=y-l[P],l[P]=y)}):b=x=[!0];var E=!1;a.forEach(function(P,S){E=K(P,n[P]+i,b[S],x[S],!1,c)||E}),E&&(a.forEach(function(P){A("update",P),A("slide",P)}),o!=null&&A("drag",h))}function ke(t,i){return e.dir?100-t-i:t}function dt(t,i){C[t]=i,z[t]=g.fromStepping(i);var n=ke(i,0)-$e,a="translate("+de(n+"%","0")+")";if(m[t].style[e.transformRule]=a,e.events.invertConnects&&C.length>1){var o=C.every(function(l,h,c){return h===0||l>=c[h-1]});if(X!==!o){bt();return}}$(t),$(t+1),X&&($(t-1),$(t+2))}function ve(){O.forEach(function(t){var i=C[t]>50?-1:1,n=3+(m.length+i*t);m[t].style.zIndex=String(n)})}function K(t,i,n,a,o,l){return o||(i=Z(C,t,i,n,a,!1,l)),i===!1?!1:(dt(t,i),!0)}function $(t){if(D[t]){var i=C.slice();X&&i.sort(function(c,b){return c-b});var n=0,a=100;t!==0&&(n=i[t-1]),t!==D.length-1&&(a=i[t]);var o=a-n,l="translate("+de(ke(n,o)+"%","0")+")",h="scale("+de(o/100,"1")+")";D[t].style[e.transformRule]=l+" "+h}}function Me(t,i){return t===null||t===!1||t===void 0||(typeof t=="number"&&(t=String(t)),t=e.format.from(t),t!==!1&&(t=g.toStepping(t)),t===!1||isNaN(t))?C[i]:t}function Q(t,i,n){var a=ie(t),o=C[0]===void 0;i=i===void 0?!0:i,e.animate&&!o&&Fe(v,e.cssClasses.tap,e.animationDuration),O.forEach(function(c){K(c,Me(a[c],c),!0,!1,n)});var l=O.length===1?0:1;if(o&&g.hasNoSize()&&(n=!0,C[0]=0,O.length>1)){var h=100/(O.length-1);O.forEach(function(c){C[c]=c*h})}for(;l<O.length;++l)O.forEach(function(c){K(c,C[c],!0,!0,n)});ve(),O.forEach(function(c){A("update",c),a[c]!==null&&i&&A("set",c)})}function vt(t){Q(e.start,t)}function pt(t,i,n,a){if(t=Number(t),!(t>=0&&t<O.length))throw new Error("noUiSlider: invalid handle number, got: "+t);K(t,Me(i,t),!0,!0,a),A("update",t),n&&A("set",t)}function Ue(t){if(t===void 0&&(t=!1),t)return z.length===1?z[0]:z.slice(0);var i=z.map(e.format.to);return i.length===1?i[0]:i}function mt(){for(Y(B.aria),Y(B.tooltips),Object.keys(e.cssClasses).forEach(function(t){te(v,e.cssClasses[t])});v.firstChild;)v.removeChild(v.firstChild);delete v.noUiSlider}function Le(t){var i=C[t],n=g.getNearbySteps(i),a=z[t],o=n.thisStep.step,l=null;if(e.snap)return[a-n.stepBefore.startValue||null,n.stepAfter.startValue-a||null];o!==!1&&a+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-a),a>n.thisStep.startValue?l=n.thisStep.step:n.stepBefore.step===!1?l=!1:l=a-n.stepBefore.highestStep,i===100?o=null:i===0&&(l=null);var h=g.countStepDecimals();return o!==null&&o!==!1&&(o=Number(o.toFixed(h))),l!==null&&l!==!1&&(l=Number(l.toFixed(h))),[l,o]}function gt(){return O.map(Le)}function St(t,i){var n=Ue(),a=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];a.forEach(function(l){t[l]!==void 0&&(s[l]=t[l])});var o=Ye(s);a.forEach(function(l){t[l]!==void 0&&(e[l]=o[l])}),g=o.spectrum,e.margin=o.margin,e.limit=o.limit,e.padding=o.padding,e.pips?ue(e.pips):le(),e.tooltips?Ee():oe(),C=[],Q(be(t.start)?t.start:n,i),t.connect&&_e()}function _e(){for(;d.firstChild;)d.removeChild(d.firstChild);for(var t=0;t<=e.handles;t++)D[t]=ae(d,e.connect[t]),$(t);Ve({drag:e.events.drag,fixed:!0})}function bt(){X=!X,Te(e,e.connect.map(function(t){return!t})),_e()}function xt(){w=Je(v),Ge(e.connect,w),Ve(e.events),Q(e.start),e.pips&&ue(e.pips),e.tooltips&&Ee(),tt()}xt();var ee={destroy:mt,steps:gt,on:he,off:Y,get:Ue,set:Q,setHandle:pt,reset:vt,disable:Qe,enable:et,__moveHandles:function(t,i,n){De(t,i,C,n)},options:s,updateOptions:St,target:v,removePips:le,removeTooltips:oe,getPositions:function(){return C.slice()},getTooltips:function(){return F},getOrigins:function(){return m},pips:ue};return ee}function nr(r,e){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var s=Ye(e),u=ir(r,s,e);return r.noUiSlider=u,u}const q={__spectrum:Ke,cssClasses:qe,create:nr};document.addEventListener("DOMContentLoaded",function(){var r=document==null?void 0:document.getElementById("continuous");q.create(r,{connect:!1,behaviour:"tap",start:[0],range:{min:[0],max:[100]}});var e=document==null?void 0:document.getElementById("disabled");q.create(e,{connect:!1,behaviour:"tap",start:[30],range:{min:[3.5],max:[100]}});var s=document==null?void 0:document.getElementById("discrete");q.create(s,{connect:!1,behaviour:"tap",start:[0],step:10,range:{min:[0],max:[100]},tooltips:[!0],format:{to:function(d){return Math.round(d)},from:function(d){return Number(d)}},pips:{mode:"values",values:[10,20,30,40,50,60,70,80,90,100],density:100}});function u(){var d=document.querySelectorAll(".noUi-value");d.forEach(function(m){m.style.display="none"})}u();var f=document==null?void 0:document.getElementById("restrictedValues");q.create(f,{connect:!1,behaviour:"tap",start:[0],range:{min:[0],max:[100]},tooltips:[!0],format:{to:function(d){return d<=0?"0°C":d<=20?"20°C":d<=37?"37°C":d>=100?"100°C":Math.round(d)+"°C"},from:function(d){return d==="0°C"?0:d==="20°C"?20:d==="37°C"?37:d==="100°C"?100:Number(d.replace("°C",""))}},pips:{mode:"values",values:[0,20,37,100],format:{to:function(d){return d+"°C"},from:function(d){return Number(d.replace("°C",""))}},density:100}});var p=document==null?void 0:document.getElementById("range-primary");q.create(p,{connect:!0,behaviour:"tap",start:[0,999],range:{min:[0],max:[999]},tooltips:[!0,!0],format:{to:function(d){return`$${Math.round(d)}`},from:function(d){return Number(d.replace(/^\$/,""))}}});var v=document==null?void 0:document.getElementById("regularSizes");q.create(v,{connect:!1,behaviour:"tap",start:[0],range:{min:[0],max:[100]}});var w=document==null?void 0:document.getElementById("smallSizes");q.create(w,{connect:!1,behaviour:"tap",start:[0],range:{min:[0],max:[100]}})});