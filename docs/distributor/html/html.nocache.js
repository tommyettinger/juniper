function html(){var N='bootstrap',O='begin',P='gwt.codesvr.html=',Q='gwt.codesvr=',R='html',S='startup',T='DUMMY',U=0,V=1,W='iframe',X='position:absolute; width:0; height:0; border:none; left: -1000px;',Y=' top: -1000px;',Z='Chrome',$='CSS1Compat',_='<!doctype html>',ab='',bb='<html><head><\/head><body><\/body><\/html>',cb='undefined',db='readystatechange',eb=10,fb='script',gb='moduleStartup',hb='moduleRequested',ib='Failed to load ',jb='head',kb='javascript',lb='meta',mb='name',nb='html::',ob='::',pb='gwt:property',qb='content',rb='=',sb='gwt:onPropertyErrorFn',tb='Bad handler "',ub='" for "gwt:onPropertyErrorFn"',vb='gwt:onLoadErrorFn',wb='" for "gwt:onLoadErrorFn"',xb='#',yb='?',zb='/',Ab='img',Bb='clear.cache.gif',Cb='baseUrl',Db='html.nocache.js',Eb='base',Fb='//',Gb='user.agent',Hb='webkit',Ib='safari',Jb='gecko',Kb=11,Lb='gecko1_8',Mb='selectingPermutation',Nb='html.devmode.js',Ob='55216BA079498A6D96A1AEA10B23E397',Pb=':1',Qb=':',Rb='.cache.js',Sb='link',Tb='rel',Ub='stylesheet',Vb='href',Wb='loadExternalRefs',Xb='gwt/chrome/chrome.css',Yb='end',Zb='http:',$b='file:',_b='_gwt_dummy_',ac='__gwtDevModeHook:html',bc='Ignoring non-whitelisted Dev Mode URL: ',cc=':moduleBase';var n=window;var o=document;q(N,O);function p(){var a=n.location.search;return a.indexOf(P)!=-1||a.indexOf(Q)!=-1}
function q(a,b){if(n.__gwtStatsEvent){n.__gwtStatsEvent({moduleName:R,sessionId:n.__gwtStatsSessionId,subSystem:S,evtGroup:a,millis:(new Date).getTime(),type:b})}}
html.__sendStats=q;html.__moduleName=R;html.__errFn=null;html.__moduleBase=T;html.__softPermutationId=U;html.__computePropValue=null;html.__getPropMap=null;html.__installRunAsyncCode=function(){};html.__gwtStartLoadingFragment=function(){return null};html.__gwt_isKnownPropertyValue=function(){return false};html.__gwt_getMetaProperty=function(){return null};var r=null;var s=n.__gwt_activeModules=n.__gwt_activeModules||{};s[R]={moduleName:R};html.__moduleStartupDone=function(e){var f=s[R].bindings;s[R].bindings=function(){var a=f?f():{};var b=e[html.__softPermutationId];for(var c=U;c<b.length;c++){var d=b[c];a[d[U]]=d[V]}return a}};var t;function u(){v();return t}
function v(){if(t){return}var a=o.createElement(W);a.id=R;a.style.cssText=X+Y;a.tabIndex=-1;o.body.appendChild(a);t=a.contentWindow.document;if(navigator.userAgent.indexOf(Z)==-1){t.open();var b=document.compatMode==$?_:ab;t.write(b+bb);t.close()}}
function w(i){function j(a){function b(){if(typeof o.readyState==cb){return typeof o.body!=cb&&o.body!=null}return /loaded|complete/.test(o.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(o.removeEventListener){o.removeEventListener(db,d,false)}if(e){clearInterval(e)}}}
if(o.addEventListener){o.addEventListener(db,d,false)}var e=setInterval(function(){d()},eb)}
function k(c){function d(a,b){a.removeChild(b)}
var e=u();var f=e.body;var g;if(navigator.userAgent.indexOf(Z)>-1){g=e.createElement(fb);g.text=c.join(ab);f.appendChild(g);d(f,g)}else{for(var h=U;h<c.length;h++){g=e.createElement(fb);g.text=c[h];f.appendChild(g);d(f,g)}}}
html.onScriptDownloaded=function(a){j(function(){k(a)})};q(gb,hb);var l=o.createElement(fb);l.src=i;if(html.__errFn){l.onerror=function(){html.__errFn(R,new Error(ib+code))}}o.getElementsByTagName(jb)[U].appendChild(l)}
html.__startLoadingFragment=function(a){return C(a)};html.__installRunAsyncCode=function(a){var b=u();var c=b.body;var d=b.createElement(fb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function A(){var c={};var d;var e;var f=o.getElementsByTagName(lb);for(var g=U,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(mb),k;if(j){j=j.replace(nb,ab);if(j.indexOf(ob)>=U){continue}if(j==pb){k=i.getAttribute(qb);if(k){var l,m=k.indexOf(rb);if(m>=U){j=k.substring(U,m);l=k.substring(m+V)}else{j=k;l=ab}c[j]=l}}else if(j==sb){k=i.getAttribute(qb);if(k){try{d=eval(k)}catch(a){alert(tb+k+ub)}}}else if(j==vb){k=i.getAttribute(qb);if(k){try{e=eval(k)}catch(a){alert(tb+k+wb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};r=d;html.__errFn=e}
function B(){function e(a){var b=a.lastIndexOf(xb);if(b==-1){b=a.length}var c=a.indexOf(yb);if(c==-1){c=a.length}var d=a.lastIndexOf(zb,Math.min(c,b));return d>=U?a.substring(U,d+V):ab}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=o.createElement(Ab);b.src=a+Bb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Cb);if(a!=null){return a}return ab}
function h(){var a=o.getElementsByTagName(fb);for(var b=U;b<a.length;++b){if(a[b].src.indexOf(Db)!=-1){return e(a[b].src)}}return ab}
function i(){var a=o.getElementsByTagName(Eb);if(a.length>U){return a[a.length-V].href}return ab}
function j(){var a=o.location;return a.href==a.protocol+Fb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==ab){k=h()}if(k==ab){k=i()}if(k==ab&&j()){k=e(o.location.href)}k=f(k);return k}
function C(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return html.__moduleBase+a}
function D(){var f=[];var g=U;function h(a,b){var c=f;for(var d=U,e=a.length-V;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(r){r(a,d,b)}throw null}
j[Gb]=function(){var a=navigator.userAgent.toLowerCase();var b=o.documentMode;if(function(){return a.indexOf(Hb)!=-1}())return Ib;if(function(){return a.indexOf(Jb)!=-1||b>=Kb}())return Lb;return ab};i[Gb]={'gecko1_8':U,'safari':V};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};html.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};html.__computePropValue=k;n.__gwt_activeModules[R].bindings=html.__getPropMap;q(N,Mb);if(p()){return C(Nb)}var l;try{h([Lb],Ob);h([Ib],Ob+Pb);l=f[k(Gb)];var m=l.indexOf(Qb);if(m!=-1){g=parseInt(l.substring(m+V),eb);l=l.substring(U,m)}}catch(a){}html.__softPermutationId=g;return C(l+Rb)}
function F(){if(!n.__gwt_stylesLoaded){n.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=o.createElement(Sb);b.setAttribute(Tb,Ub);b.setAttribute(Vb,C(a));o.getElementsByTagName(jb)[U].appendChild(b);__gwt_stylesLoaded[a]=true}}
q(Wb,O);c(Xb);q(Wb,Yb)}
A();html.__moduleBase=B();s[R].moduleBase=html.__moduleBase;var G=D();if(n){var H=!!(n.location.protocol==Zb||n.location.protocol==$b);n.__gwt_activeModules[R].canRedirect=H;function I(){var b=_b;try{n.sessionStorage.setItem(b,b);n.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(H&&I()){var J=ac;var K=n.sessionStorage[J];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(K)){if(K&&(window.console&&console.log)){console.log(bc+K)}K=ab}if(K&&!n[J]){n[J]=true;n[J+cc]=B();var L=o.createElement(fb);L.src=K;var M=o.getElementsByTagName(jb)[U];M.insertBefore(L,M.firstElementChild||M.children[U]);return false}}}F();q(N,Yb);w(G);return true}
html.succeeded=html();