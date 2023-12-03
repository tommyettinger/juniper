"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(A5r){let A5s=2463534242;let Fb=()=>{let x=A5s;x^=x<<13;x^=x>>>17;x^=x<<5;A5s=x;return x;};let BS=(a,b)=>a>b?1:a<b? -1:a===b?0:1;let E5=(obj,cls)=>obj instanceof Hp()&&!!obj.constructor.$meta&&A5t(obj.constructor,cls);let A5t=(from,
to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&A5t(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(A5t(supertypes[i],to)){return true;}}return false;};let A5u=(obj,cls)=>{if(obj!==null&&!E5(obj,cls)){A5v();}return obj;};let A5w=(obj,cls)=>{if(obj!==null&&!(obj instanceof cls)){A5v();}return obj;};let Bo=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (LN(cls))(data);};let N=(cls,init)=>A5x(cls,
init);let A5x=(cls,data)=>new (LN(cls))(data);let A5y=(cls,sz)=>new (LN(cls))(new Array(sz));let Dy;let Wc;if(typeof BigInt64Array!=='function'){Dy=sz=>{let data=new Array(sz);let arr=new AY1(data);data.fill(Q);return arr;};Wc=init=>new AY1(init);}else {Dy=sz=>new AY1(new BigInt64Array(sz));Wc=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AY1(buffer);};}let H=sz=>new A2_(new Uint16Array(sz));let Qg=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new A2_(buffer);};let BI
=sz=>new AZB(new Int8Array(sz));let A5z=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new AZB(buffer);};let Lo=sz=>new A1X(new Int16Array(sz));let A5d=data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new A1X(buffer);};let R=sz=>new AZG(new Int32Array(sz));let EB=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AZG(buffer);};let Nl=sz=>new A3v(new Int8Array(sz));let A5A=data=>{let buffer=new Int8Array(data.length);buffer.set(data);return new A3v(buffer);};let Cq
=sz=>new A0n(new Float32Array(sz));let A5B=data=>{let buffer=new Float32Array(data.length);buffer.set(data);return new A0n(buffer);};let AAg=sz=>new AYN(new Float64Array(sz));let A5C=data=>{let buffer=new Float64Array(data.length);buffer.set(data);return new AYN(buffer);};let LN=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(Hp()).call(this);this.data=data;}JavaArray.prototype=Object.create((Hp()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};A5D(JavaArray.prototype,function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (LN(this.type))(dataCopy);});let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[Hp()],primitive:false,superclass:Hp(),name:name,
binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let A5E=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};};let A5F=(name,binaryName)=>{let cls=A5E();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass
=null;return cls;};let Jt=A5F("boolean","Z");let AIa=A5F("char","C");let A3L=A5F("byte","B");let A5G=A5F("short","S");let D5=A5F("int","I");let AQt=A5F("long","J");let E3=A5F("float","F");let ALi=A5F("double","D");let Cc=A5F("void","V");let D=ex=>{throw AU9(ex);};let A5H=Symbol("javaException");let AU9=ex=>{let err=ex.$jsException;if(!err){let javaCause=A5I(ex);let jsCause=javaCause!==null?javaCause.$jsException:void 0;let cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new A5J("Java exception thrown",
cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[A5H]=ex;ex.$jsException=err;A5K(err,ex);}return err;};let A5K=(err,ex)=>{if(typeof A5L==="function"&&err.stack){let stack=A5L(err.stack);let javaStack=Bo(A5M(),stack.length);let elem;let noStack=false;for(let i=0;i<stack.length;++i){let element=stack[i];elem=A5N(Bk(element.className),Bk(element.methodName),Bk(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){A5O(ex,
javaStack);}}};let A5P=(cls,dimensions)=>{let first=0;for(let i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(let i=0;i<first;i=i+1|0){cls=LN(cls);}if(first===dimensions.length -1){return Bo(cls,dimensions[first]);}}let arrays=new Array(A5Q(dimensions,first));let firstDim=dimensions[first]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Bo(cls,firstDim);}return A5R(cls,arrays,dimensions,first);};let A3l=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length
===0){return A5P(A3L,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=BI(firstDim);}return A5R(A3L,arrays,dimensions);};let A3n=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(AIa,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=H(firstDim);}return A5R(AIa,arrays,dimensions,0);};let A5S=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(Jt,dimensions);}let firstDim
=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Nl(firstDim);}return A5R(Jt,arrays,dimensions,0);};let AY3=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(A5G,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Lo(firstDim);}return A5R(A5G,arrays,dimensions,0);};let ZR=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(D5,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i
=i+1|0){arrays[i]=R(firstDim);}return A5R(D5,arrays,dimensions,0);};let A3r=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(AQt,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Dy(firstDim);}return A5R(AQt,arrays,dimensions,0);};let A1s=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(E3,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=Cq(firstDim);}return A5R(E3,
arrays,dimensions,0);};let AZx=dimensions=>{let arrays=new Array(A5Q(dimensions,0));if(arrays.length===0){return A5P(ALi,dimensions);}let firstDim=dimensions[0]|0;for(let i=0;i<arrays.length;i=i+1|0){arrays[i]=AAg(firstDim);}return A5R(ALi,arrays,dimensions,0);};let A5Q=(dimensions,start)=>{let val=dimensions[start+1]|0;for(let i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;};let A5R=(cls,arrays,dimensions,start)=>{let limit=arrays.length;for(let i=start+1|
0;i<dimensions.length;i=i+1|0){cls=LN(cls);let dim=dimensions[i];let index=0;let packedIndex=0;while(index<limit){let arr=A5y(cls,dim);for(let j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];};let A5T=value=>{if(typeof value==='number'&&A5U(value)){throw "NaN";}return value;};let A5V=printFunction=>{let buffer="";let utf8Buffer=0;let utf8Remaining=0;let putCodePoint=ch=>{if(ch===0xA){printFunction(buffer);buffer
="";}else if(ch<0x10000){buffer+=A5W.fromCharCode(ch);}else {ch=ch -0x10000|0;let hi=(ch>>10)+0xD800;let lo=(ch&0x3FF)+0xDC00;buffer+=A5W.fromCharCode(hi,lo);}};return ch=>{if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch
&0x07;utf8Buffer=3;}};};let A2T=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof A5X==="object"?A5V(function(msg){A5X.info(msg);}):function(){};let A0N=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof A5X==="object"?A5V(function(msg){A5X.error(msg);}):function(){};let A5Y=null;let A5Z=data=>{let i=0;let packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++];let prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}A5Y
=packages;};let A50=data=>{let packages=A5Y;let i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta;let className=data[i++];m.name=className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype
={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName
=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j];let func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};let A51=f=>function(){return f(this);};let A52=f=>function(p1){return f(this,p1);};let A53=f=>function(p1,p2){return f(this,p1,p2);};let A54=f=>
function(p1,p2,p3){return f(this,p1,p2,p3,p3);};let A55=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};let A3m=f=>function(){let args=Array.prototype.slice.apply(arguments);A56(function(){f.apply(this,args);});};let A57=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=Bo(Hp(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=Bk(args[i]);}A56(()=>{f.call(null,javaArgs);},callback);};let A58;let A59=strings=>{A5$();A58=new Array(strings.length);for(let i=0;i<strings.length;++i){A58[i]=A5_(Bk(strings[i]));}};let B
=index=>A58[index];let Ba=target=>target.$clinit=()=>{};let A6a=new ArrayBuffer(16);let A6b=new DataView(A6a);let A6c=new Float32Array(A6a);let A6d=new Float64Array(A6a);let A6e=new Int32Array(A6a);let AXO;let A6f;if(typeof BigInt!=='function'){AXO=n=>{A6b.setFloat64(0,n,true);return new A6g(A6b.getInt32(0,true),A6b.getInt32(4,true));};A6f=n=>{A6b.setInt32(0,n.lo,true);A6b.setInt32(4,n.hi,true);return A6b.getFloat64(0,true);};}else if(typeof BigInt64Array!=='function'){AXO=n=>{A6b.setFloat64(0,n,true);let lo
=A6b.getInt32(0,true);let hi=A6b.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};A6f=n=>{A6b.setFloat64(0,n,true);let lo=A6b.getInt32(0,true);let hi=A6b.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let $rt_numberConversionLongArray=new BigInt64Array(A6a);AXO=n=>{A6d[0]=n;return $rt_numberConversionLongArray[0];};A6f=n=>{$rt_numberConversionLongArray[0]=n;return A6d[0];};}let H7=n=>{A6c[0]=n;return A6e[0];};let H5
=n=>{A6e[0]=n;return A6c[0];};let A6h=(a,b)=>{if(a!==a){return b!==b;}A6d[0]=a;A6d[1]=b;return A6e[0]===A6e[2]&&A6e[1]===A6e[3];};let A5J;if(typeof A6i==='object'){let defaultMessage=Symbol("defaultMessage");A5J=function A5J(message,cause){let self=Reflect.construct(Error,[void 0,cause],A5J);Object.setPrototypeOf(self,A5J.prototype);self[defaultMessage]=message;return self;};A5J.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable:true,value:A5J},message:{get:()=>{try {let javaException
=this[A5H];if(typeof javaException==='object'){let javaMessage=A6j(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[defaultMessage];}catch(A6k){return "Exception occurred trying to extract Java exception message: "+A6k;}}}});}else {A5J=Error;}let A6l=e=>e instanceof Error&&typeof e[A5H]==='object'?e[A5H]:null;let A6m=e=>typeof e.$jsException==='object'?e.$jsException:null;let BG=err=>{let ex=err[A5H];if(!ex){ex=A6n(Bk("(JavaScript) "+err.toString()));err[A5H]
=ex;ex.$jsException=err;A5K(err,ex);}return ex;};let A6o=obj=>{let cls=obj.constructor;let arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName="";if(cls===Jt){clsName="boolean";}else if(cls===A3L){clsName="byte";}else if(cls===A5G){clsName="short";}else if(cls===AIa){clsName="char";}else if(cls===D5){clsName="int";}else if(cls===A6p){clsName="long";}else if(cls===E3){clsName="float";}else if(cls===ALi){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name
:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;};function A6g(lo,hi){this.lo=lo|0;this.hi=hi|0;}A6g.prototype.__teavm_class__=()=>{return "long";};let A6q=a=>(a.hi&0x80000000)===0;let A6r=a=>(a.hi&0x80000000)!==0;let A6s=1<<18;let Q;let E;let J;let Bb;let BV;let Gm;let T;if(typeof BigInt!=="function"){A6g.prototype.toString=function(){let result=[];let n=this;let positive=A6q(n);if(!positive){n=Hk(n);}let radix=new A6g(10,0);do {let divRem=A6t(n,radix);result.push(String.fromCharCode(48
+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};A6g.prototype.valueOf=function(){return BV(this);};Q=new A6g(0,0);J=val=>new A6g(val, -(val<0)|0);Bb=val=>val>=0?new A6g(val|0,val/0x100000000|0):Hk(new A6g( -val|0, -val/0x100000000|0));E=(lo,hi)=>new A6g(lo,hi);BV=val=>0x100000000*val.hi+(val.lo>>>0);Gm=val=>val.hi;T=val=>val.lo;}else {Q=BigInt(0);E=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)
<<BigInt(32)));J=val=>BigInt.asIntN(64,BigInt(val|0));Bb=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));BV=val=>Number(val);Gm=val=>Number(BigInt.asIntN(64,val>>BigInt(32)))|0;T=val=>Number(BigInt.asIntN(32,val))|0;}let Cu=Math.imul||function(a,b){let ah=a>>>16&0xFFFF;let al=a&0xFFFF;let bh=b>>>16&0xFFFF;let bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};let Ei=(a,b)=>(a>>>0)/(b>>>0)>>>0;let A12=(a,b)=>(a>>>0)%(b>>>0)>>>0;let Gd=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};let A6u
=(index,array)=>{if(index<0||index>=array.length){A6v();}return index;};let A6w=(index,array)=>{if(index>=array.length){A6v();}return index;};let A6x=index=>{if(index<0){A6v();}return index;};let F=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=Hp();}return function(){superclass.call(this);};};let O=(array,offset,count)=>{let result="";let limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;};let A6y=array=>O(array,0,array.length);let AZJ=(string,begin,dst,dstBegin,count)=>{for(let i=0;i<count;i=i+1|0){dst[dstBegin+i]=string.charCodeAt(begin+i);}};let AZo=string=>{let array=new Uint16Array(string.length);for(let i=0;i<array.length;++i){array[i]=string.charCodeAt(i);}return new A2_(array);};let A6z=(string,start,end)=>{if(start===0&&end===string.length){return string;}let result=start.substring(start,end -1)+start.substring(end -1,end);A6A=A6A+result.charCodeAt(result.length -
1)|0;};let A6A=0;let A5D=(target,method)=>target.s=method;let Bw=cls=>A2M(cls);let Bk=str=>str===null?null:ABZ(str);let B0=str=>str===null?null:str.m9;let A6B=val=>{if(val===null){D(A6C());}return val;};let A5$=()=>P();let Hp=()=>C;let A6n=message=>A6D(message);let A6j=t=>ATR(t);let A5I=t=>ATX(t);let A5M=()=>Hp();let A6v=()=>D(A6n(Bk("")));let A5v=()=>D(A6E());let AF_=()=>{{return AFM();}};let Nt=t=>{{return ACc(t);}};let A5N=(className,methodName,fileName,lineNumber)=>{{return null;}};let A5O=(e,stack)=>{};let A5_;{A5_
=str=>str;}var A=Object.create(null);
function C(){this.pa=null;this.$id$=0;}
let A6F=()=>{let a=new C();CU(a);return a;}
let FB=b=>{let c;if(b.pa===null){c=new Jf;CV();c.o7=B6;b.pa=c;}b=b.pa;c=b.o7;if(c===null){CV();b.o7=B6;}else{CV();if(c!==B6){c=new BT;c.m$=1;c.m_=1;c.na=B(0);D(c);}}b.pF=b.pF+1|0;}
let DR=b=>{let c,d,e;if(!HX(b)){c=b.pa;d=c.o7;CV();if(d===B6){e=c.pF-1|0;c.pF=e;if(!e)c.o7=null;HX(b);return;}}b=new Jq;b.m$=1;b.m_=1;D(b);}
let A2W=b=>{Yk(b,1);}
let Yk=(b,c)=>{let d,e,$p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.pa===null){d=new Jf;CV();d.o7=B6;b.pa=d;}d=b.pa;if(d.o7===null){CV();d.o7=B6;}e=d.o7;CV();if(e===B6){d.pF=d.pF+c|0;return;}$p=1;case 1:U2(b,c);if(G_()){break _;}return;default:DB();}}BY().s(b,c,d,e,$p);}
let AO4=(b,c,d)=>{let e,f,g;CV();e=B6;f=b.pa;if(f===null){f=new Jf;f.o7=e;b.pa=f;if(e!==e)B6=e;B6.rR=FE();b=b.pa;b.pF=b.pF+c|0;b=null;d.tk.e(b);return;}if(f.o7===null){f.o7=e;if(e!==e)B6=e;B6.rR=FE();b=b.pa;b.pF=b.pF+c|0;b=null;d.tk.e(b);return;}if(f.rF===null)f.rF=AOx();f=f.rF;g=new Rg;g.A7=e;g.A8=b;g.A5=c;g.A6=d;d=g;f.push(d);}
let A26=b=>{AGD(b,1);}
let AGD=(b,c)=>{let d,e;if(!HX(b)){d=b.pa;e=d.o7;CV();if(e===B6){c=d.pF-c|0;d.pF=c;if(c>0)return;d.o7=null;d=d.rF;if(d!==null&&!(d.length?0:1)){d=new T8;d.Bs=b;SV(d,0);}else HX(b);return;}}b=new Jq;b.m$=1;b.m_=1;D(b);}
let AUu=b=>{let c,d,e;if(!HX(b)){c=b.pa;if(c.o7===null){b=c.rF;if(b!==null&&!(b.length?0:1)){b=c.rF.shift();BE();if(b!==null&&!(b instanceof Hp()))b=CA(b);d=b;c.rF=null;b=d.A7;c=d.A8;e=d.A5;d=d.A6;CV();if(B6!==b)B6=b;B6.rR=FE();c=c.pa;c.o7=b;c.pF=c.pF+e|0;b=null;d.tk.e(b);}return;}}}
let HX=a=>{let b,c;b=a.pa;if(b===null)return 1;a:{if(b.o7===null){c=b.rF;if(!(c!==null&&!(c.length?0:1))){b=b.zx;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.pa=null;return 1;}
let CU=a=>{return;}
let AR$=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ce;c.nA=b;d=c;b.classObject=d;}}return c;}
let AKx=a=>{let b,c;b=a;if(!b.$id$){c=Fb();b.$id$=c;}return a.$id$;}
let AQc=(a,b)=>{return a!==b?0:1;}
let AI7=a=>{let b,c,d,e;b=a;if(!b.$id$){c=Fb();b.$id$=c;}d=Bq(a.$id$,4);b=new I;b.m8=H(16);G(b,b.m7,B(1));e=b.m7;if(d===null)d=B(2);G(b,e,d);return W(b);}
let Uu=a=>{let b,c;b=a;if(!b.$id$){c=Fb();b.$id$=c;}return a.$id$;}
let AO0=a=>{let b,c,d;if(!E5(a,F6)&&a.constructor.$meta.item===null){b=new SO;b.m$=1;b.m_=1;D(b);}b=AGo(a);c=b;d=Fb();c.$id$=d;return b;}
let M$=a=>{let b,c,d;b:{b=a.pa;if(b!==null){c=b.o7;CV();if(c===B6){d=1;break b;}}d=0;}if(!d){b=new Jq;b.m$=1;b.m_=1;D(b);}b=b.zx;if(b===null)return;while(!(b.length?0:1)){c=b.shift();BE();if(c!==null&&!(c instanceof Hp()))c=CA(c);c=c;if(!c.n())SV(c,0);}a.pa.zx=null;}
let U2=(b,c)=>{let thread=BY();let javaThread=AF_();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Nt(javaThread);thread.resume();};callback.iq=e=>{thread.attribute=AU9(e);Nt(javaThread);thread.resume();};callback=Z7(callback);thread.suspend(()=>{try {AO4(b,c,callback);;}catch(Uf){callback.iq(Uf);}});return null;}
let ADV=F();
let A2K=b=>{let c;c=new BC;c.tt=1.0;c.ts=0.0;AHq=c;c=new BC;c.tt=0.0;c.ts=1.0;AHp=c;c=new BC;c.tt=0.0;c.ts=0.0;AM3=c;ALY=new BC;AQQ=new BC;ASJ=new BC;ASV=new BC;APo=new BC;APH=new BC;ALe=new E2;ARl=new E2;AU$=0.10000000149011612;AFa();AME=Bw(E3);AIS=Bo(Ir,111);ASl=new BC;ASE=new BC;ALy=new C;Zg();AGA=Bw(D5);Xp();AJJ=Bw(AQt);AGz=Bw(AIa);ASS=Bo(D8,128);U4();AA6();S=1;AMk=new BC;AMm=new BC;AMo=new BC;AQY=0.4000000059604645;AGx=0.10000000149011612;AUp=new BC;ANV=new BC;AOZ=new BC;AX6=new BC;AX$=new BC;AX9=new BC;W2();ACu();M3
=0.0;ANB=Cq(3);DO=1;AYe=new KO;AL4=new KN;c=new JZ;c.xf=BI(1);DF=c;c=new JG;c.xf=BI(1);Jo=c;AYr=Bw(ALi);Ym();AFh();c=new Cm;c.nZ=0;c.oa=0;DE=c;c=new Cm;c.nZ=1;c.oa=0;Dq=c;AVh=BI(0);ACh();V1=1;LD=null;Wh();ACF();c=new FW;c.vT=1;APb=c;c=new FW;c.vT=0;AQs=c;ALT=Bw(Jt);c=A5a(B(3));c.wl=512;c.tw=520;WS(new LI,new Rj,c);}
let GX=F();
let A0V=0;let A0X=0;let AY7=0;let A5b=0;let A0e=0;let A6G=()=>{A6G=Ba(GX);AN3();}
let AN3=()=>{A0V=Dn(Bk(navigator.platform),B(4));A0X=Dn(Bk(navigator.platform),B(5));AY7=Dn(Bk(navigator.platform),B(6));A5b=!Dn(Bk(navigator.platform),B(7))&&!Dn(Bk(navigator.platform),B(8))?0:1;A0e=!Dn(Bk(navigator.platform),B(9))&&!Dn(Bk(navigator.platform),B(10))&&!Dn(Bk(navigator.platform),B(11))?0:1;}
let Nx=F(0);
let L$=F();
let DM=F(0);
let ADG=F(L$);
let DT=F(0);
let GC=F();
let DA=F(0);
let B8=F(0);
function BH(){let a=this;C.call(a);a.ni=null;a.nf=0;}
let ADx=a=>{return a.nf;}
let AM1=a=>{return a.ni;}
let Ff=F(BH);
let A4x=null;let A47=null;let A08=null;let AYO=null;let A0K=()=>{A0K=Ba(Ff);AUe();}
let AUe=()=>{let b,c,d;b=new Ff;A0K();b.ni=B(12);b.nf=0;A4x=b;c=new Ff;c.ni=B(13);c.nf=1;A47=c;d=new Ff;d.ni=B(14);d.nf=2;A08=d;AYO=N(Ff,[b,c,d]);}
let GJ=F();
let Mc=F(0);
let Jr=F(GJ);
let ALY=null;let ANU=()=>{ALY=new BC;}
let Hf=F(0);
let Es=F(0);
let HE=F();
let Hq=F(0);
let B4=F();
let AQQ=null;let AWF=()=>{AQQ=new BC;}
let H1=F(B4);
let ABT=F(H1);
let GL=F(BH);
let AQu=null;let AWP=null;let AUm=null;let AWn=()=>{AWn=Ba(GL);AHt();}
let AHt=()=>{let b,c;b=new GL;AWn();b.ni=B(15);b.nf=0;AQu=b;c=new GL;c.ni=B(16);c.nf=1;AWP=c;AUm=N(GL,[b,c]);}
let MW=F(0);
let JB=F(0);
let Hn=F(0);
let D3=F();
let ADq=F(D3);
let MG=F(HE);
let IA=F();
let ASJ=null;let ASV=null;let AL2=()=>{ASJ=new BC;ASV=new BC;}
let W9=F();
let UD=F();
let TZ=F(0);
let LE=F();
let ABA=F(LE);
let Y7=F(GC);
let Qa=F();
let AYX=null;let A6H=()=>{A6H=Ba(Qa);APD();}
let APD=()=>{let b,c;AWn();b=R((AUm.s()).data.length);c=b.data;AYX=b;c[AQu.nf]=1;c[AWP.nf]=2;}
let AAt=F();
let RN=F();
let AYz=null;let A6I=()=>{A6I=Ba(RN);AJL();}
let AJL=()=>{let b,c;AAS();b=R((Wz.s()).data.length);c=b.data;AYz=b;c[WX.nf]=1;c[Vs.nf]=2;c[Yf.nf]=3;}
let ADp=F(D3);
let F_=F();
let RK=F(F_);
let Hx=F();
let A3X=0;let A42=0;let A2d=0;let A44=0;let A1e=0;let A6J=()=>{A6J=Ba(Hx);AWX();}
let AWX=()=>{A3X=Dn(Bk(navigator.platform),B(4));A42=Dn(Bk(navigator.platform),B(5));A2d=Dn(Bk(navigator.platform),B(6));A44=!Dn(Bk(navigator.platform),B(7))&&!Dn(Bk(navigator.platform),B(8))?0:1;A1e=!Dn(Bk(navigator.platform),B(9))&&!Dn(Bk(navigator.platform),B(10))&&!Dn(Bk(navigator.platform),B(11))?0:1;}
let LV=F();
let TU=F(H1);
let APo=null;let AOT=()=>{APo=new BC;}
let PQ=F();
let APH=null;let AXB=()=>{APH=new BC;}
let Ke=F();
let A0d=null;let AY5=null;let A49=null;let A6K=()=>{A6K=Ba(Ke);ATZ();}
let ATZ=()=>{let b;b=new Cf;b.og=1;b.np=Bo(C,16);A0d=b;b=new Bg;B3();AY5=b;A49=new E2;}
let ML=F();
let Jj=F(F_);
let TV=F(F_);
let Ek=F(B4);
let AU$=0.0;let AVH=()=>{AU$=0.10000000149011612;}
let TJ=F(Jj);
let Ws=F(GC);
let K0=F(0);
let Z$=F(GC);
let Yq=F();
let Nq=F();
let AZH=null;let A6L=()=>{A6L=Ba(Nq);AVY();}
let AVY=()=>{let b,c;AAS();b=R((Wz.s()).data.length);c=b.data;AZH=b;c[AIs.nf]=1;c[AP3.nf]=2;c[AVi.nf]=3;c[WX.nf]=4;c[Vs.nf]=5;c[Yf.nf]=6;c[AKk.nf]=7;c[AL6.nf]=8;c[AT1.nf]=9;c[AMI.nf]=10;}
let CB=F(BH);
let WX=null;let Vs=null;let Yf=null;let AKk=null;let AT1=null;let AMI=null;let AL6=null;let AIs=null;let AP3=null;let AVi=null;let Wz=null;let AAS=()=>{AAS=Ba(CB);AJD();}
let AJD=()=>{let b,c,d,e,f,g,h,i,j,k;b=new CB;AAS();b.ni=B(17);b.nf=0;WX=b;c=new CB;c.ni=B(18);c.nf=1;Vs=c;d=new CB;d.ni=B(19);d.nf=2;Yf=d;e=new CB;e.ni=B(20);e.nf=3;AKk=e;f=new CB;f.ni=B(21);f.nf=4;AT1=f;g=new CB;g.ni=B(22);g.nf=5;AMI=g;h=new CB;h.ni=B(23);h.nf=6;AL6=h;i=new CB;i.ni=B(24);i.nf=7;AIs=i;j=new CB;j.ni=B(25);j.nf=8;AP3=j;k=new CB;k.ni=B(26);k.nf=9;AVi=k;Wz=N(CB,[b,c,d,e,f,g,h,i,j,k]);}
let Cl=F();
let FM=F(Cl);
let YT=F(FM);
let ABn=F(FM);
let C9=F(Cl);
let Fz=F(C9);
let UO=F(Fz);
let VU=F();
let Nc=F(Cl);
let WA=F(Nc);
let XJ=F(Cl);
let Z4=F(Cl);
let ACy=F(Cl);
let ACY=F();
let LO=F(Cl);
let ZL=F(LO);
let WV=F(C9);
let ADk=F(C9);
let ADH=F(Fz);
let ABP=F(Cl);
let ABY=F(Fz);
let AEz=F(C9);
let AEa=F(C9);
let X2=F(Cl);
let ZA=F(C9);
let ZF=F(Cl);
let Yh=F(Cl);
let ZM=F(FM);
let Vk=F(C9);
let AEC=F(Cl);
let ABv=F(Fz);
let X7=F(FM);
let AA5=F(Cl);
let VV=F(C9);
let Ze=F(C9);
let OX=F();
let A1C=null;let AFa=()=>{A1C=N(Ce,[Bw(Fj),Bw(Br),Bw(Q7),Bw(RK),Bw(TV),Bw(Jj),Bw(TJ),Bw(Hg),Bw(Qz),Bw(S1),Bw(Sv),Bw(Qb),Bw(Tv),Bw(Ku),Bw(TH),Bw(RL),Bw(N_),Bw(Tp),Bw(Ht),Bw(Q0),Bw(SW),Bw(QV),Bw(Ql),Bw(Oq)]);}
let Dw=F(Jr);
let DG=F(Dw);
let AZg=null;let A1F=null;let A3H=null;let A5e=null;let A2J=null;let AYC=null;let A0I=null;let A2x=null;let A6M=()=>{A6M=Ba(DG);AUn();}
let AUn=()=>{let b,c;b=new Br;Fc();b.ox=0.0;b.ow=0.0;b.ov=1.0;b.ou=1.0;DX(b);AZg=b;b=new Br;b.ox=1.0;b.ow=0.0;b.ov=0.0;b.ou=1.0;DX(b);A1F=b;b=new Br;b.ox=0.0;b.ow=1.0;b.ov=0.0;b.ou=1.0;DX(b);A3H=b;b=new TO;c=new Cf;c.og=0;c.np=Bo(C,16);b.pJ=c;b.rV=2147483647;A5e=b;b=new TN;AGg();A2J=b;AYC=new TM;A0I=new TL;A2x=new TK;}
let GT=F(DG);
let Lz=F(GT);
let WR=F(Lz);
let ADn=F(B4);
let Mm=F(Dw);
let QF=F(0);
let Fq=F();
let XU=F(Fq);
let DN=F(GJ);
let Vu=F(DN);
let ADl=F(B4);
let BU=F();
let A4p=null;let A3t=null;let A32=null;let A0h=null;let A1N=null;let A1u=null;let A3o=null;let AGg=()=>{AGg=Ba(BU);AIc();}
let AIc=()=>{let b;b=new Ir;AGg();b.Et=0.0;A4p=b;A3t=new RT;A32=new RQ;A0h=new RP;A1N=new RS;A1u=new RR;A3o=new RO;}
let RS=F(BU);
let ABC=F(BU);
let KU=F(Ek);
let ZI=F(KU);
let TM=F(BU);
let AEp=F(B4);
let Iq=F(DG);
let ASl=null;let ASE=null;let AJH=()=>{ASl=new BC;ASE=new BC;}
let ABD=F(BU);
let He=F(0);
let E2=F();
let ALe=null;let ARl=null;let AT9=()=>{ALe=new E2;ARl=new E2;}
let EE=F(E2);
let AYw=null;let AXz=()=>{AXz=Ba(EE);U$();}
let A6N=()=>{let a=new EE();Rw(a);return a;}
let Rw=a=>{AXz();}
let U$=()=>{let b,c,d,e,$$je;PN();b=GY;c=CR(b,Bw(EE));b=c<0?null:b.o_.data[c];if(b===null){b=new Je;d=new Cf;d.og=0;d.np=Bo(C,4);b.pJ=d;b.rV=100;c:{try{d=Ru(Bw(EE),null);break c;}catch($$e){$$je=BG($$e);if($$je instanceof CL){}else{throw $$e;}}try{d=Px(Bw(EE),null);MA(d,1);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Ec){}else{throw $$e;}}d=null;}b.q2=d;if(d===null){b=new BL;d=new I;d.m8=H(16);G(d,d.m7,B(27));if(Bw(EE).nP===null)Bw(EE).nP=Bk(Bw(EE).nA.$meta.name);e=Bw(EE).nP;G(d,d.m7,e);e=W(d);b.m$=1;b.m_
=1;b.na=e;D(b);}BN(GY,Bw(EE),b);}AYw=b;}
let XX=F(Fq);
let F5=F(DN);
let AMk=null;let AMm=null;let AMo=null;let AQY=0.0;let AGx=0.0;let AXk=()=>{AMk=new BC;AMm=new BC;AMo=new BC;AQY=0.4000000059604645;AGx=0.10000000149011612;}
let W0=F(F5);
let Zj=F(B4);
let Ps=F(0);
let ACA=F();
let Hg=F();
let Ht=F(Hg);
let Sv=F(Ht);
let MC=F(DN);
let YA=F(MC);
let AFl=F(Mm);
let K1=F(Dw);
let AFH=F(GT);
let MX=F(DN);
let TK=F(BU);
let SW=F();
let Yd=F();
let ZJ=F(B4);
let AAz=F(D3);
let YU=F();
let ACi=F(B4);
let AE8=F(Ek);
let Zh=F(IA);
let RO=F(BU);
let RR=F(BU);
let Rk=F(0);
let Ku=F();
let N_=F(Ku);
let XV=F(Fq);
let ADj=F(LV);
let ADo=F(ML);
let AEq=F(B4);
let AEr=F(Ek);
let TL=F(BU);
let EU=F();
let A0_=null;let A2G=null;let A09=null;let A2E=null;let AYA=null;let AZI=null;let A2t=null;let AYK=null;let A3e=null;let A6O=()=>{A6O=Ba(EU);AJY();}
let AJY=()=>{let b;b=new Kq;b.xZ=0.0;A0_=b;b=new Kq;b.xZ=1.0;A2G=b;FN();A09=FX.data[128];FN();b=FX.data[129];A2E=b;AYA=b;FN();AZI=FX.data[130];FN();A2t=FX.data[132];FN();AYK=FX.data[136];FN();A3e=FX.data[144];}
let Qz=F(Ht);
let Zt=F(B4);
let VE=F(D3);
let RT=F(BU);
let W_=F(Dw);
let Zi=F(B4);
let QV=F();
function Ir(){BU.call(this);this.Et=0.0;}
let AIS=null;let AV0=()=>{AIS=Bo(Ir,111);}
let Ye=F(K1);
let RP=F(BU);
let QP=F(DN);
let AUp=null;let AWi=()=>{AUp=new BC;}
let Zq=F(MG);
let Tp=F();
let K9=F(DN);
let AZb=null;let A0u=null;let A6P=()=>{A6P=Ba(K9);AHl();}
let AHl=()=>{let b,c;b=new Br;Fc();AZb=b;b=new DZ;EI();c=new Cf;c.og=1;c.np=Bo(C,1);b.o$=c;c=new D7;c.pX=1;c.oi=R(2);b.oB=c;A0u=b;}
let Oq=F();
let ABE=F(BU);
let TN=F(BU);
let AC4=F(Iq);
let RQ=F(BU);
let Qb=F();
let AE5=F();
let D2=F(BH);
let A1d=null;let AZe=null;let A2Z=null;let AYR=null;let AZz=null;let A3x=null;let A4q=()=>{A4q=Ba(D2);ASq();}
let ASq=()=>{let b,c,d,e,f;b=new D2;A4q();b.ni=B(28);b.nf=0;A1d=b;c=new D2;c.ni=B(29);c.nf=1;AZe=c;d=new D2;d.ni=B(30);d.nf=2;A2Z=d;e=new D2;e.ni=B(31);e.nf=3;AYR=e;f=new D2;f.ni=B(32);f.nf=4;AZz=f;A3x=N(D2,[b,c,d,e,f]);}
let AFc=F(BU);
let Y8=F(D3);
function DL(){let a=this;C.call(a);a.rV=0;a.t3=0;a.pJ=null;}
let Jg=(a,b)=>{let c,d,e;if(b===null){b=new Bc;b.m$=1;b.m_=1;b.na=B(33);D(b);}c=a.pJ;if(c.ng<a.rV){CT(c,b);d=a.t3;e=a.pJ.ng;if(d>e)e=d;a.t3=e;if(E5(b,DT))b.B();}else if(E5(b,DT))b.B();}
let AE0=(a,b)=>{let c,d,e,f,g;if(b===null){b=new Bc;b.m$=1;b.m_=1;b.na=B(34);D(b);}c=a.pJ;d=a.rV;e=0;f=b.ng;while(e<f){if(e>=b.ng){g=new L;c=new I;c.m8=H(16);G(c,c.m7,B(35));K(c,c.m7,e,10);G(c,c.m7,B(36));d=b.ng;K(c,c.m7,d,10);b=W(c);g.m$=1;g.m_=1;g.na=b;D(g);}g=b.np.data[e];if(g!==null){if(c.ng<d){CT(c,g);if(E5(g,DT))g.B();}else if(E5(g,DT))g.B();}e=e+1|0;}d=a.t3;e=c.ng;if(d>e)e=d;a.t3=e;}
let TO=F(DL);
let Vx=F();
let Tv=F();
let Q7=F();
let RL=F();
let Kg=F(B4);
let ANV=null;let AHh=()=>{ANV=new BC;}
let VD=F(D3);
let AEs=F(MX);
let VA=F(0);
let Zu=F(B4);
let AFz=F(Dw);
let ABm=F(Dw);
let Zr=F(Ek);
let MJ=F();
let XT=F(MJ);
let AEf=F(GJ);
let Va=F(B4);
let AC$=F(GT);
let AAQ=F(B4);
let AEW=F(Ek);
let S1=F(Hg);
let ABq=F(Dw);
let Q0=F();
let Ql=F();
let AAC=F(DN);
let AE9=F(HE);
let Vb=F(B4);
let R_=F(Dw);
let AOZ=null;let APg=()=>{AOZ=new BC;}
let AFk=F(Kg);
let Vc=F(DG);
let XW=F(Fq);
let Ul=F();
let TH=F();
let Eu=F();
let AZv=null;let AY9=null;let AZM=null;let A4O=null;let A4Q=null;let A4P=null;let A0i=null;let A0R=null;let A41=null;let AY4=null;let A4U=null;let A6Q=()=>{A6Q=Ba(Eu);APY();}
let APY=()=>{let b;AZv=Cq(16);b=new E8;SA();b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=1.0;AY9=b;b=new E8;b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=1.0;AZM=b;b=new Bg;B3();A4O=b;A4Q=new Bg;A4P=new Bg;A0i=new Bg;A0R=FK();A41=new Bg;AY4=new Bg;A4U=new Bg;}
let Bp=F();
let AZl=null;let A3C=null;let A0g=null;let A3F=null;let AZ7=null;let A0E=null;let A1J=null;let AYQ=null;let A1S=null;let AZ6=null;let A2l=null;let A0r=null;let A0D=null;let AY8=null;let AYI=null;let A3k=null;let A1c=null;let A0G=null;let AZ8=null;let A3c=null;let A0F=null;let A4v=null;let A0J=null;let A10=null;let A4o=null;let A19=null;let AYy=null;let AYP=null;let A3B=null;let A0T=null;let A5f=null;let A22=null;let A4G=null;let A1D=null;let A3h=null;let A5m=null;let A1l=null;let A1w=null;let AYT=null;let A3O
=null;let A5h=null;let A4N=null;let A27=null;let A5j=null;let Et=()=>{Et=Ba(Bp);AIz();}
let AIz=()=>{let b,c;b=new Sp;Et();AZl=b;A3C=new Sg;A0g=new Sf;b=new Si;A3F=b;AZ7=b;b=new Fs;b.p6=2;A0E=b;b=new ID;b.p6=2;A1J=b;AYQ=b;b=new Iw;b.p6=2;A1S=b;AZ6=b;A2l=new Sh;A0r=new Sk;b=new Fs;b.p6=3;A0D=b;b=new ID;b.p6=3;AY8=b;b=new Iw;b.p6=3;AYI=b;A3k=new Sj;A1c=new Sm;b=new Fs;b.p6=4;A0G=b;b=new ID;b.p6=4;AZ8=b;b=new Iw;b.p6=4;A3c=b;b=new Fs;b.p6=5;A0F=b;b=new ID;b.p6=5;A4v=b;b=new Iw;b.p6=5;A0J=b;A10=new Sl;A4o=new RD;A19=new RF;b=new Hr;b.uZ=2.0;b.vq=10.0;c=JQ(2.0,(-10.0));b.vZ=c;b.vs=1.0/(1.0-c);AYy=b;b
=new QS;b.uZ=2.0;b.vq=10.0;c=JQ(2.0,(-10.0));b.vZ=c;b.vs=1.0/(1.0-c);AYP=b;b=new T6;ABy(b,2.0,10.0);A3B=b;A0T=AZ0(2.0,5.0);A5f=A0A(2.0,5.0);A22=A2H(2.0,5.0);A4G=A1k();A1D=A0O();A3h=A3P();A5m=A3G(2.0,10.0,7,1.0);A1l=A0k(2.0,10.0,6,1.0);A1w=A20(2.0,10.0,7,1.0);AYT=A06(1.5);A3O=A4Y(2.0);A5h=A2I(2.0);A4N=A1x(4);A27=A2u(4);A5j=A0a(4);}
function V6(){Bp.call(this);this.Fc=0.0;}
let A4Y=a=>{let b=new V6();ALK(b,a);return b;}
let ALK=(a,b)=>{Et();a.Fc=b;}
let Y$=F();
let Sj=F(Bp);
let AEJ=F();
function Fs(){Bp.call(this);this.p6=0;}
let ID=F(Fs);
let Iw=F(Fs);
let J6=F(0);
let WD=F();
let Sm=F(Bp);
let ADw=F();
let Si=F(Bp);
function Iy(){let a=this;Bp.call(a);a.z$=0.0;a.yg=0.0;a.yo=0.0;a.yW=0.0;}
let A3G=(a,b,c,d)=>{let e=new Iy();AOr(e,a,b,c,d);return e;}
let AOr=(a,b,c,d,e)=>{Et();a.z$=b;a.yg=c;a.yo=e;a.yW=d*3.1415927410125732*(d%2|0?(-1):1);}
let Sh=F(Bp);
let Sg=F(Bp);
let JW=F();
let AX6=null;let AX$=null;let AX9=null;let AKs=()=>{AX6=new BC;AX$=new BC;AX9=new BC;}
let UC=F(DL);
let JJ=F(0);
function BC(){let a=this;C.call(a);a.tt=0.0;a.ts=0.0;}
let AHq=null;let AHp=null;let AM3=null;let AJU=()=>{let b;b=new BC;b.tt=1.0;b.ts=0.0;AHq=b;b=new BC;b.tt=0.0;b.ts=1.0;AHp=b;b=new BC;b.tt=0.0;b.ts=0.0;AM3=b;}
let ABe=F(Bp);
let A0O=()=>{let a=new ABe();ARe(a);return a;}
let ARe=a=>{Et();}
function Hr(){let a=this;Bp.call(a);a.uZ=0.0;a.vq=0.0;a.vZ=0.0;a.vs=0.0;}
let AZ0=(a,b)=>{let c=new Hr();ABy(c,a,b);return c;}
let ABy=(a,b,c)=>{Et();a.uZ=b;a.vq=c;c=JQ(b, -c);a.vZ=c;a.vs=1.0/(1.0-c);}
let AAA=F();
let Sp=F(Bp);
let T6=F(Hr);
let A2H=(a,b)=>{let c=new T6();ANs(c,a,b);return c;}
let ANs=(a,b,c)=>{Et();a.uZ=b;a.vq=c;c=JQ(b, -c);a.vZ=c;a.vs=1.0/(1.0-c);}
let X$=F();
let Fk=F(BH);
let A0b=null;let A1f=null;let A3W=null;let A2r=null;let A3E=()=>{A3E=Ba(Fk);AWl();}
let AWl=()=>{let b,c,d;b=new Fk;A3E();b.ni=B(37);b.nf=0;A0b=b;c=new Fk;c.ni=B(38);c.nf=1;A1f=c;d=new Fk;d.ni=B(39);d.nf=2;A3W=d;A2r=N(Fk,[b,c,d]);}
let Q5=F();
let A4R=null;let A6R=()=>{A6R=Ba(Q5);AOJ();}
let AOJ=()=>{let b;b=new Bg;B3();A4R=b;}
function IX(){let a=this;Bp.call(a);a.Ed=null;a.DL=null;}
let A0a=a=>{let b=new IX();PY(b,a);return b;}
let PY=(a,b)=>{let c,d,e,f,g;Et();if(b>=2&&b<=5){d:{c=Cq(b);a.Ed=c;d=Cq(b);e=d.data;a.DL=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break d;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break d;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break d;default:break d;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bc;g=new I;g.m8=H(16);G(g,g.m7,B(40));K(g,g.m7,b,10);g=W(g);f.m$=1;f.m_=1;f.na=g;D(f);}
let Zm=F(IX);
let A2u=a=>{let b=new Zm();AOC(b,a);return b;}
let AOC=(a,b)=>{PY(a,b);}
let RD=F(Bp);
let AA1=F();
let Sf=F(Bp);
function EA(){let a=this;C.call(a);a.uU=0.0;a.uT=0.0;a.uV=0.0;a.uS=0.0;}
let A4d=null;let A4a=null;let A4b=null;let A4c=null;let AZ1=null;let A24=()=>{A24=Ba(EA);AXE();}
let AXE=()=>{let b;b=new EA;A24();b.uU=1.0;b.uT=0.0;b.uV=0.0;b.uS=0.0;A4d=b;b=new EA;b.uU=0.0;b.uT=1.0;b.uV=0.0;b.uS=0.0;A4a=b;b=new EA;b.uU=0.0;b.uT=0.0;b.uV=1.0;b.uS=0.0;A4b=b;b=new EA;b.uU=0.0;b.uT=0.0;b.uV=0.0;b.uS=1.0;A4c=b;b=new EA;b.uU=0.0;b.uT=0.0;b.uV=0.0;b.uS=0.0;AZ1=b;}
let Vz=F(Iy);
let A0k=(a,b,c,d)=>{let e=new Vz();AHg(e,a,b,c,d);return e;}
let AHg=(a,b,c,d,e)=>{Et();a.z$=b;a.yg=c;a.yo=e;a.yW=d*3.1415927410125732*(d%2|0?(-1):1);}
function YO(){Bp.call(this);this.DV=0.0;}
let A06=a=>{let b=new YO();AIm(b,a);return b;}
let AIm=(a,b)=>{Et();a.DV=b*2.0;}
let Wt=F();
let AFt=F();
let Sk=F(Bp);
function AEl(){Bp.call(this);this.Ep=0.0;}
let A2I=a=>{let b=new AEl();AO7(b,a);return b;}
let AO7=(a,b)=>{Et();a.Ep=b;}
let ABf=F(Bp);
let A3P=()=>{let a=new ABf();APr(a);return a;}
let APr=a=>{Et();}
let YJ=F(Iy);
let A20=(a,b,c,d)=>{let e=new YJ();AKe(e,a,b,c,d);return e;}
let AKe=(a,b,c,d,e)=>{Et();a.z$=b;a.yg=c;a.yo=e;a.yW=d*3.1415927410125732*(d%2|0?(-1):1);}
let KB=F();
let A0H=null;let AY2=null;let A43=null;let A6S=()=>{A6S=Ba(KB);AGQ();}
let AGQ=()=>{let b,c,d,e,f,g;A0H=Bo(Bg,15);b=Bo(Bg,8);AY2=b;c=Bo(Bg,9);d=c.data;A43=c;e=0;f=d.length;while(e<f){g=new Bg;B3();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bg;B3();b[e]=g;e=e+1|0;}}
function KZ(){let a=this;C.call(a);a.B1=null;a.B$=null;a.BG=null;a.B_=null;}
let A0w=null;let A5o=()=>{A5o=Ba(KZ);AT4();}
let ABH=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.B1;e=b.nk;f=c.nk;if(e<f)f=e;e=b.nm;g=c.nm;if(e<g)g=e;e=b.nl;h=c.nl;if(e<h)h=e;d.nk=f;d.nm=g;d.nl=h;i=a.B$;e=b.nk;g=c.nk;if(e>g)g=e;e=b.nm;h=c.nm;if(e>h)h=e;e=b.nl;f=c.nl;if(e>f)f=e;i.nk=g;i.nm=h;i.nl=f;b=a.BG;h=d.nk;j=d.nm;k=d.nl;b.nk=h;b.nm=j;b.nl=k;e=i.nk;f=i.nm;g=i.nl;h=h+e;j=j+f;k=k+g;b.nk=h;b.nm=j;b.nl=k;f=h*0.5;g=j*0.5;e=k*0.5;b.nk=f;b.nm=g;b.nl=e;b=a.B_;g=i.nk;h=i.nm;j=i.nl;b.nk=g;b.nm=h;b.nl=j;e=d.nk;f=d.nm;k=d.nl;g=g-e;e=h-f;f=j-k;b.nk=g;b.nm=e;b.nl=f;return a;}
let AT4=()=>{let b;b=new Bg;B3();A0w=b;}
function LR(){let a=this;C.call(a);a.DP=null;a.ES=null;}
let AYW=null;let A2B=()=>{A2B=Ba(LR);AUj();}
let AUj=()=>{let b;b=new Bg;B3();AYW=b;}
let WF=F();
let UX=F();
let ACd=F();
let YM=F();
let R2=F();
let A1t=null;let A2S=()=>{A2S=Ba(R2);AOg();}
let Lt=b=>{let c;A2S();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let AOg=()=>{let b,c,d,e;b=new Rt;c=G$(Cz(J(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),J(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(CZ(c,Q))c=E(0, 2147483648);d=V(By(c,Y(c,33)),E(3981806797, 4283543511));d=V(By(d,Y(d,33)),E(444984403, 3301882366));e=By(d,Y(d,33));d=V(By(e,Y(e,33)),E(3981806797, 4283543511));d=V(By(d,Y(d,33)),E(444984403, 3301882366));d=By(d,Y(d,33));b.Dr=e;b.Ds=d;A1t=b;}
let Cw=F();
let AYF=null;let AYG=null;let AYH=null;let AZ4=null;let A36=null;let A11=null;let AZc=null;let AZd=null;let A1R=null;let A1P=null;let A01=null;let A02=null;let A03=null;let A04=null;let A1T=null;let A1Q=null;let A16=null;let A1j=null;let A3s=null;let A1h=null;let A4u=null;let A4t=null;let A4s=null;let A1A=null;let A6T=()=>{A6T=Ba(Cw);AKq();}
let AKq=()=>{let b,c;b=new Bg;B3();AYF=b;AYG=new Bg;AYH=new Bg;b=new Kc;b.xJ=1;b.or=Cq(16);AZ4=b;b=new Kc;b.xJ=1;b.or=Cq(16);A36=b;A11=new BC;AZc=new BC;AZd=new BC;A1R=new BC;A1P=new BC;A01=new BC;A02=new BC;A03=new BC;A04=new BC;b=new Kk;c=new Bg;b.rx=c;b.sx=0.0;c.nk=0.0;c.nm=0.0;c.nl=0.0;b.sx=0.0;A1T=b;A1Q=new Bg;A16=new Bg;A1j=new Bg;A3s=new Bg;A1h=new Bg;A4u=new Bg;A4t=new Bg;A4s=new Bg;A1A=new Bg;}
let VH=F();
let XY=F(IX);
let A1x=a=>{let b=new XY();AQD(b,a);return b;}
let AQD=(a,b)=>{PY(a,b);}
function Eg(){C.call(this);this.oZ=null;}
let AHs=null;let A2b=null;let A4j=null;let Qu=null;let LQ=null;let Zf=null;let AV8=null;let AJk=null;let A2O=null;let A5n=null;let A2Q=null;let Hj=()=>{Hj=Ba(Eg);AHe();}
let FK=()=>{let a=new Eg();ACI(a);return a;}
let ACI=a=>{let b,c;Hj();b=Cq(16);c=b.data;a.oZ=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;}
let G3=(a,b)=>{let c;c=b.data;b=a.oZ.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;}
let Ri=(a,b)=>{let c,d,e,f,g;Hj();c=AHs;d=c.data;e=a.oZ.data;f=e[0];g=b.oZ.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]
*g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return G3(a,c);}
let Ln=a=>{let b;b=a.oZ.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;}
let AAK=(a,b,c,d,e)=>{Rs(a,b,b+d,c,c+e,0.0,1.0);return a;}
let Rs=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Ln(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.oZ.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;}
let Xo=(a,b,c)=>{let d,e,f,g,h,i;Hj();d=Qu;e=b.nk;f=b.nm;g=b.nl;d.nk=e;d.nm=f;d.nl=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Hy(f);f=d.nk*e;g=d.nm*e;e=d.nl*e;d.nk=f;d.nm=g;d.nl=e;}d=LQ;e=b.nk;f=b.nm;g=b.nl;d.nk=e;d.nm=f;d.nl=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Hy(f);f=d.nk*e;g=d.nm*e;e=d.nl*e;d.nk=f;d.nm=g;d.nl=e;}b=Pf(LQ,c);e=b.nk;e=e*e;f=b.nm;e=e+f*f;f=b.nl;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Hy(e);h=b.nk*g;e=b.nm*g;f=b.nl*g;b.nk=h;b.nm=e;b.nl=f;}b=Zf;c=LQ;e=c.nk;f=c.nm;g=c.nl;b.nk=e;b.nm=f;b.nl=g;b
=Pf(b,Qu);e=b.nk;e=e*e;f=b.nm;e=e+f*f;f=b.nl;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Hy(f);f=b.nk*e;g=b.nm*e;e=b.nl*e;b.nk=f;b.nm=g;b.nl=e;}Ln(a);i=a.oZ.data;b=LQ;i[0]=b.nk;i[4]=b.nm;i[8]=b.nl;b=Zf;i[1]=b.nk;i[5]=b.nm;i[9]=b.nl;b=Qu;i[2]= -b.nk;i[6]= -b.nm;i[10]= -b.nl;return a;}
let UL=(b,c)=>{let d,e,f;Hj();d=b.data;c=c.data;e=Cq(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]
*c[5]+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Ci(e,0,b,0,16);}
let AEn=b=>{Hj();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]
*b[10]*b[15]+b[0]*b[5]*b[10]*b[15];}
let XF=b=>{let c,d,e;Hj();c=Cq(16);d=AEn(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]
*b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]
*b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;}
let YY=(b,c,d)=>{let e,f,g,h,i,j,k,l;Hj();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;}
let AHe=()=>{let b;AHs=Cq(16);b=new E8;SA();b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=1.0;A2b=b;b=new E8;b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=1.0;A4j=b;b=new Bg;B3();Qu=b;LQ=new Bg;Zf=new Bg;AV8=new Bg;AJk=FK();A2O=new Bg;A5n=new Bg;A2Q=new Bg;}
let ON=F(0);
let Iv=F();
function Rt(){let a=this;Iv.call(a);a.Dr=Q;a.Ds=Q;}
let ABd=F(Bp);
let A1k=()=>{let a=new ABd();AWo(a);return a;}
let AWo=a=>{Et();}
let Sl=F(Bp);
function J8(){let a=this;C.call(a);a.tg=null;a.rw=null;a.xB=null;}
let A5l=null;let AVT=null;let A2D=null;let AN6=()=>{AN6=Ba(J8);AOP();}
let A3a=()=>{let a=new J8();U0(a);return a;}
let U0=a=>{let b,c,d,e,f,g;AN6();b=Bo(Kk,6);c=b.data;a.tg=b;b=Bo(Bg,8);d=b.data;e=new Bg;B3();d[0]=e;d[1]=new Bg;d[2]=new Bg;d[3]=new Bg;d[4]=new Bg;d[5]=new Bg;d[6]=new Bg;d[7]=new Bg;a.rw=b;a.xB=Cq(24);f=0;while(f<6){e=new Kk;g=new Bg;e.rx=g;e.sx=0.0;g.nk=0.0;g.nm=0.0;g.nl=0.0;e.sx=0.0;c[f]=e;f=f+1|0;}}
let ABw=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;AN6();c=AVT;d=c.data;Ci(c,0,a.xB,0,d.length);c=b.oZ;e=a.xB;f=0;Hj();g=0;while(g<8){YY(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.rw.data[f];c=a.xB.data;j=h+1|0;i.nk=c[h];g=j+1|0;i.nm=c[j];h=g+1|0;i.nl=c[g];f=f+1|0;}b=a.tg.data[0];c=a.rw.data;i=c[1];k=c[0];l=c[2];m=b.rx;n=i.nk;o=i.nm;p=i.nl;m.nk=n;m.nm=o;m.nl=p;q=k.nk;r=k.nm;s=k.nl;q=n-q;o=o-r;n=p-s;m.nk=q;m.nm=o;m.nl=n;p=k.nk-l.nk;r=k.nm-l.nm;s=k.nl-l.nl;t=o*s-n*r;s=n*p-q*s;q=q*r-o*p;m.nk=t;m.nm=s;m.nl
=q;p=t*t+s*s+q*q;if(p!==0.0&&p!==1.0){o=1.0/Hy(p);p=m.nk*o;q=m.nm*o;o=m.nl*o;m.nk=p;m.nm=q;m.nl=o;}k=b.rx;b.sx= -(i.nk*k.nk+i.nm*k.nm+i.nl*k.nl);b=a.tg.data[1];c=a.rw.data;i=c[4];k=c[5];l=c[7];m=b.rx;r=i.nk;s=i.nm;n=i.nl;m.nk=r;m.nm=s;m.nl=n;o=k.nk;p=k.nm;q=k.nl;o=r-o;p=s-p;q=n-q;m.nk=o;m.nm=p;m.nl=q;AFI(AAw(m,k.nk-l.nk,k.nm-l.nm,k.nl-l.nl));b.sx= -AD9(i,b.rx);b=a.tg.data[2];c=a.rw.data;JK(b,c[0],c[4],c[3]);b=a.tg.data[3];c=a.rw.data;JK(b,c[5],c[1],c[6]);b=a.tg.data[4];c=a.rw.data;JK(b,c[2],c[3],c[6]);b=a.tg.data[5];c
=a.rw.data;JK(b,c[4],c[0],c[1]);}
let AOP=()=>{let b,c,d,e,f,g,h,i,j;b=Bo(Bg,8);c=b.data;d=new Bg;B3();d.nk=(-1.0);d.nm=(-1.0);d.nl=(-1.0);c[0]=d;d=new Bg;d.nk=1.0;d.nm=(-1.0);d.nl=(-1.0);c[1]=d;d=new Bg;d.nk=1.0;d.nm=1.0;d.nl=(-1.0);c[2]=d;d=new Bg;d.nk=(-1.0);d.nm=1.0;d.nl=(-1.0);c[3]=d;d=new Bg;d.nk=(-1.0);d.nm=(-1.0);d.nl=1.0;c[4]=d;d=new Bg;d.nk=1.0;d.nm=(-1.0);d.nl=1.0;c[5]=d;d=new Bg;d.nk=1.0;d.nm=1.0;d.nl=1.0;c[6]=d;d=new Bg;d.nk=(-1.0);d.nm=1.0;d.nl=1.0;c[7]=d;A5l=b;b=Cq(24);e=b.data;AVT=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1
|0;e[f]=d.nk;j=i+1|0;e[i]=d.nm;f=j+1|0;e[j]=d.nl;h=h+1|0;}A2D=new Bg;}
function E8(){let a=this;C.call(a);a.s5=0.0;a.s2=0.0;a.s3=0.0;a.s4=0.0;}
let A1n=null;let A1m=null;let SA=()=>{SA=Ba(E8);ANo();}
let ANo=()=>{let b;b=new E8;SA();b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=0.0;A1n=b;b=new E8;b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=0.0;A1m=b;}
let Uy=F();
let ABj=F();
function Bg(){let a=this;C.call(a);a.nk=0.0;a.nm=0.0;a.nl=0.0;}
let AZV=null;let AZW=null;let AZU=null;let A2n=null;let A4Z=null;let B3=()=>{B3=Ba(Bg);AHP();}
let AFI=a=>{let b,c,d;b=a.nk;b=b*b;c=a.nm;b=b+c*c;c=a.nl;c=b+c*c;if(c!==0.0&&c!==1.0){b=1.0/Hy(c);c=a.nk*b;d=a.nm*b;b=a.nl*b;a.nk=c;a.nm=d;a.nl=b;return a;}return a;}
let AD9=(a,b)=>{return a.nk*b.nk+a.nm*b.nm+a.nl*b.nl;}
let Pf=(a,b)=>{let c,d,e,f,g,h,i;c=a.nm;d=b.nl;e=c*d;f=a.nl;g=b.nm;h=e-f*g;e=b.nk;f=f*e;i=a.nk;d=f-i*d;c=i*g-c*e;a.nk=h;a.nm=d;a.nl=c;return a;}
let AAw=(a,b,c,d)=>{let e,f,g,h;e=a.nm;f=e*d;g=a.nl;h=f-g*c;g=g*b;f=a.nk;d=g-f*d;b=f*c-e*b;a.nk=h;a.nm=d;a.nl=b;return a;}
let AHP=()=>{let b;b=new Bg;B3();b.nk=1.0;b.nm=0.0;b.nl=0.0;AZV=b;b=new Bg;b.nk=0.0;b.nm=1.0;b.nl=0.0;AZW=b;b=new Bg;b.nk=0.0;b.nm=0.0;b.nl=1.0;AZU=b;b=new Bg;b.nk=0.0;b.nm=0.0;b.nl=0.0;A2n=b;A4Z=FK();}
let Yc=F();
let Xb=F(DL);
let QS=F(Hr);
let A0A=(a,b)=>{let c=new QS();AQM(c,a,b);return c;}
let AQM=(a,b,c)=>{Et();a.uZ=b;a.vq=c;c=JQ(b, -c);a.vZ=c;a.vs=1.0/(1.0-c);}
let ABF=F();
let VR=F();
let ADJ=F();
function Kk(){let a=this;C.call(a);a.rx=null;a.sx=0.0;}
let JK=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=a.rx;f=b.nk;g=b.nm;h=b.nl;e.nk=f;e.nm=g;e.nl=h;i=c.nk;j=c.nm;k=c.nl;f=f-i;g=g-j;k=h-k;e.nk=f;e.nm=g;e.nl=k;h=c.nk-d.nk;j=c.nm-d.nm;l=c.nl-d.nl;i=g*l-k*j;k=k*h-f*l;f=f*j-g*h;e.nk=i;e.nm=k;e.nl=f;f=i*i+k*k+f*f;if(f!==0.0&&f!==1.0){k=1.0/Hy(f);f=e.nk*k;g=e.nm*k;k=e.nl*k;e.nk=f;e.nm=g;e.nl=k;}c=a.rx;a.sx= -(b.nk*c.nk+b.nm*c.nm+b.nl*c.nl);}
let RF=F(Bp);
let ADL=F();
let VT=F();
let AB$=F();
let ADI=F();
let AAW=F(0);
let Yj=F();
let Sw=F();
let V4=null;let W2=()=>{let b,c;V4=Cq(16384);b=0;while(b<16384){V4.data[b]=AVe((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=V4.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);}
function DZ(){let a=this;C.call(a);a.o$=null;a.oB=null;a.ps=0;a.zF=0.0;a.w3=0.0;}
let Gf=null;let IU=null;let EI=()=>{EI=Ba(DZ);WO();}
let A6U=()=>{let a=new DZ();TQ(a);return a;}
let A6V=(a,b)=>{let c=new DZ();Or(c,a,b);return c;}
let A6W=(a,b,c,d,e,f)=>{let g=new DZ();Sn(g,a,b,c,d,e,f);return g;}
let A6X=(a,b,c,d,e,f,g,h,i)=>{let j=new DZ();SI(j,a,b,c,d,e,f,g,h,i);return j;}
let TQ=a=>{let b;EI();b=new Cf;b.og=1;b.np=Bo(C,1);a.o$=b;b=new D7;b.pX=1;b.oi=R(2);a.oB=b;}
let Or=(a,b,c)=>{let d;EI();d=new Cf;d.og=1;d.np=Bo(C,1);a.o$=d;d=new D7;d.pX=1;d.oi=R(2);a.oB=d;HW(a,b,c,0,c.X(),b.Y(),0.0,8,0,null);}
let Sn=(a,b,c,d,e,f,g)=>{let h;EI();h=new Cf;h.og=1;h.np=Bo(C,1);a.o$=h;h=new D7;h.pX=1;h.oi=R(2);a.oB=h;HW(a,b,c,0,c.X(),d,e,f,g,null);}
let SI=(a,b,c,d,e,f,g,h,i,j)=>{let k;EI();k=new Cf;k.og=1;k.np=Bo(C,1);a.o$=k;k=new D7;k.pX=1;k.oi=R(2);a.oB=k;HW(a,b,c,d,e,f,g,h,i,j);}
let HW=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;Th(a);k=b.wm;if(d==e){a.w3=k.rb;return;}if(i)g=Kp(g,k.Ad*3.0);l=!i&&j===null?0:1;m=Kz(f);AEw(a.oB,0,m);n=k.vg;if(n)FU(IU,m);o=0;p=0.0;q=k.wo;r=null;s=null;t=m;u=d;e:{f:{g:while(true){h:{v=0;if(d==e){if(u==e)break e;o=1;w=e;}else{i=d+1|0;if(d<0)break f;if(d>=c.m9.length)break f;i:{switch(c.m9.charCodeAt(d)){case 10:w=i-1|0;v=1;d=i;break h;case 91:if(!n){d=i;break i;}x=R4(a,c,i,e);if(x>=0){w=i-1|0;d=i+(x+1|0)|0;if(d==e){o=1;break h;}m
=QM(IU);break h;}if(x!=(-2)){d=i;break i;}d=i+1|0;break i;default:}d=i;}continue g;}}b=Gf;f=b.pJ;i=f.ng;if(!i)b=Qk(b);else{if(!i){b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}i=i-1|0;f.ng=i;y=f.np.data;b=y[i];y[i]=null;}z=b;z.qJ=0.0;z.w6=p;OS(k,z,c,u,w,s);a.ps=a.ps+z.of.ng|0;if(m!=t){b=a.oB;i=GK(b,b.nR-2|0);ba=a.ps;if(i!=ba){FU(a.oB,ba);FU(a.oB,m);}else{b=a.oB;JT(b,b.nR-1|0,m);}t=m;}j:{if(!z.of.ng){Jg(Gf,z);if(r===null)break j;}else if(r!==null){NZ(r,z);Jg(Gf,z);}else{CT(a.o$,z);r=z;}if(!v&&!o){b=r.of;ba=b.ng;if
(!ba)break g;s=b.np.data[ba-1|0];}else{MI(a,k,r);s=null;}if(l&&r.of.ng&&!(!v&&!o)){bb=PD(r.os)+O4(r.os,1);bc=2;while(bc<r.os.oc){b=r.of;i=bc-1|0;if(bb+Le(a,AEE(b,i),k)-9.999999747378752E-5<=g)bb=bb+r.os.or.data[bc];else{if(j!==null){Od(a,k,r,g,j);break e;}ba=Uv(k,r.of,bc);if(!(!ba&&r.qJ===0.0)&&ba<r.of.ng)i=ba;r=ST(a,k,r,i);if(r===null)break j;CT(a.o$,r);p=p+q;r.qJ=0.0;r.w6=p;bb=PD(r.os)+O4(r.os,1);bc=1;}bc=bc+1|0;}}}if(v){r=null;s=null;p=w!=u?p+q:p+q*k.Bo;}u=d;}b=new BT;AEA(b,B(41));D(b);}b=new U;b.m$=1;b.m_
=1;D(b);}a.w3=k.rb+K3(p);Pq(a,k);Ro(a,g,h);if(n)IU.nR=0;}
let Pq=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;c=0.0;d=a.o$;e=d.np;f=0;g=d.ng;while(f<g){d=e.data[f];h=d.os.or.data;i=d.qJ+h[0];j=0.0;k=d.of;l=k.np;m=0;n=k.ng;while(m<n){k=l.data[m];j=Kp(j,i+(k.pr+k.pY|0)*b.sf-b.sO);m=m+1|0;i=i+h[m];}i=Kp(i,j);j=d.qJ;i=i-j;d.xN=i;c=Kp(c,j+i);f=f+1|0;}a.zF=c;}
let Ro=(a,b,c)=>{let d,e,f,g,h;b:{if(!(c&8)){d=!(c&1)?0:1;e=a.o$;f=e.np;g=0;h=e.ng;while(true){if(g>=h)break b;e=f.data[g];e.qJ=e.qJ+(!d?b-e.xN:0.5*(b-e.xN));g=g+1|0;}}}}
let Od=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,$$je;f=c.of.ng;EI();g=Gf;h=g.pJ;i=h.ng;if(i){if(!i){b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}i=i-1|0;h.ng=i;j=h.np.data;h=j[i];j[i]=null;}else k:{try{h=Nm(g.q2,null);break k;}catch($$e){$$je=BG($$e);if($$je instanceof CL){c=$$je;}else{throw $$e;}}e=new X;b=new I;b.m8=H(16);G(b,b.m7,B(42));g=g.q2.qN.qE;if(g.nP===null)g.nP=Bk(g.nA.$meta.name);h=g.nP;G(b,b.m7,h);b=W(b);e.m$=1;e.m_=1;e.na=b;e.oY=c;D(e);}k=h;OS(b,k,e,0,e.X(),null);l=0.0;g=k.os;m=g.oc;if(m>0){h=
k.of;n=h.ng;if(!n){b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}h=h.np.data[n-1|0];if(!h.vW)g.or.data[m-1|0]=(h.pr+h.pY|0)*b.sf-b.sO;j=g.or;o=1;while(o<m){l=l+j.data[o];o=o+1|0;}}d=d-l;n=0;p=c.qJ;q=c.os;j=q.or;l:{while(true){if(n>=q.oc)break l;p=p+j.data[n];if(p>d)break;n=n+1|0;}}if(n<=1){r=c.of;j=r.np;i=0;n=r.ng;h=null;if(i>n){b=new Bc;b.m$=1;b.m_=1;D(b);}while(i<n){s=j.data;o=i+1|0;s[i]=h;i=o;}r.ng=0;q.oc=0;KR(q,g.or,0,g.oc);}else{NV(c.of,n-1|0);h=c.os;if(h.oc>n)h.oc=n;h=AE3(c.of);if(!h.vW){g=c.os;g.or.data[g.oc
-1|0]=Le(a,h,b);}h=k.os;i=h.oc;if(i>0)S$(c.os,h,1,i-1|0);}m:{i=f-c.of.ng|0;if(i>0){a.ps=a.ps-i|0;if(b.vg)while(true){b=a.oB;i=b.nR;if(i<=2)break m;if(GK(b,i-2|0)<a.ps)break m;b=a.oB;b.nR=b.nR-2|0;}}}Yx(c.of,k.of);a.ps=a.ps+e.X()|0;Jg(Gf,k);}
let ST=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.of;f=e.ng;g=c.os;h=d;b:{while(true){if(h<=0)break b;i=h-1|0;if(i>=f)break;n:{switch(e.np.data[i].rA&65535){case 9:case 10:case 13:case 32:break;default:i=0;break n;}i=1;}if(!i)break b;h=h+(-1)|0;}c=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,i,10);G(b,b.m7,B(36));d=e.ng;K(b,b.m7,d,10);b=W(b);c.m$=1;c.m_=1;c.na=b;D(c);}o:{while(true){j=BS(d,f);if(j>=0)break o;if(j>=0)break;l:{switch(e.np.data[d].rA&65535){case 9:case 10:case 13:case 32:break;default:i
=0;break l;}i=1;}if(!i)break o;d=d+1|0;}c=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,d,10);G(b,b.m7,B(36));d=e.ng;K(b,b.m7,d,10);b=W(b);c.m$=1;c.m_=1;c.na=b;D(c);}k=null;if(j>=0){NV(e,h);j=h+1|0;if(g.oc>j)g.oc=j;l=d-h|0;if(l>0){a.ps=a.ps-l|0;if(b.vg){m=a.oB;if(GK(m,m.nR-2|0)>a.ps){n=QM(a.oB);while(true){m=a.oB;d=GK(m,m.nR-2|0);i=a.ps;if(d<=i)break;m=a.oB;m.nR=m.nR-2|0;}m=a.oB;JT(m,m.nR-2|0,i);m=a.oB;JT(m,m.nR-1|0,n);}}}}else{EI();o=Gf;m=o.pJ;i=m.ng;if(!i)m=Qk(o);else{if(!i){b=new BT;b.m$=1;b.m_=1;b.na
=B(41);D(b);}i=i-1|0;m.ng=i;p=m.np.data;m=p[i];p[i]=null;}p:{k=m;m=k.of;UQ(m,e,0,h);WZ(e,0,d-1|0);c.of=m;k.of=e;o=k.os;S$(o,g,0,h+1|0);UF(g,1,d);g.or.data[0]=Tq(a,e,b);c.os=o;k.os=g;i=c.of.ng;j=k.of.ng;l=(f-i|0)-j|0;d=a.ps-l|0;a.ps=d;if(b.vg&&l>0){q=d-j|0;r=a.oB.nR-2|0;while(true){if(r<2)break p;s=GK(a.oB,r);if(s<=q)break;JT(a.oB,r,s-l|0);r=r+(-2)|0;}}}}if(h)MI(a,b,c);else{EI();Jg(Gf,c);U1(a.o$);}return k;}
let MI=(a,b,c)=>{let d,e;d=c.of;e=d.ng;if(!e){b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}d=d.np.data[e-1|0];if(!d.vW){c=c.os;c.or.data[c.oc-1|0]=(d.pr+d.pY|0)*b.sf-b.sO;}}
let Le=(a,b,c)=>{return (b.pr+b.pY|0)*c.sf-c.sO;}
let Tq=(a,b,c)=>{if(b.ng)return ( -b.np.data[0].pY|0)*c.sf-c.xt;c=new BT;c.m$=1;c.m_=1;c.na=B(41);D(c);}
let R4=(a,b,c,d)=>{let e,f,g,h;if(c==d)return (-1);if(c>=0&&c<b.m9.length){switch(b.m9.charCodeAt(c)){case 35:e=0;f=c+1|0;q:{while(true){if(f>=d)break q;if(f<0)break;if(f>=b.m9.length)break;g=b.m9.charCodeAt(f);if(g==93){if(f<(c+2|0))break q;if(f<=(c+9|0)){c=f-c|0;if(c<8)e=e<<((9-c|0)<<2)|255;EI();b=IU;d=((e&(-16711936))>>>8|0)|(e&16711935)<<8;FU(b,(d>>>16|0)+(d<<16)|0);return c;}break q;}e=(e<<4)+g|0;if(g>=48&&g<=57)e=e+(-48)|0;else if(g>=65&&g<=70)e=e+(-55)|0;else{if(g<97)break q;if(g>102)break q;e=e+(-87)
|0;}f=f+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}return (-1);case 91:break;case 93:EI();b=IU;c=b.nR;if(c>1)b.nR=c-1|0;return 0;default:f=c+1|0;r:{while(f<d){if(f<0)break r;if(f>=b.m9.length)break r;if(b.m9.charCodeAt(f)==93){b=B1(b,c,f);ALE();h=B5;d=CR(h,b);h=d<0?null:h.o_.data[d];if(h===null)return (-1);EI();FU(IU,Kz(h));return f-c|0;}f=f+1|0;}return (-1);}b=new U;b.m$=1;b.m_=1;D(b);}return (-2);}b=new U;b.m$=1;b.m_=1;D(b);}
let Th=a=>{let b,c,d,e,f,g,h;EI();AE0(Gf,a.o$);b=a.o$;c=b.np;d=0;e=b.ng;f=null;if(d>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.ng=0;a.oB.nR=0;a.ps=0;a.zF=0.0;a.w3=0.0;}
let ABu=a=>{let b,c,d,e,f,g,h;if(!a.o$.ng)return B(43);b=new I;b.m8=H(128);c=a.zF;El(b,b.m7,c);d=b.m7;Bh(b,d,d+1|0);b.m8.data[d]=120;c=a.w3;El(b,b.m7,c);d=b.m7;Bh(b,d,d+1|0);b.m8.data[d]=10;e=0;d=a.o$.ng;while(e<d){f=a.o$;if(e>=f.ng){g=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,e,10);G(b,b.m7,B(36));e=f.ng;K(b,b.m7,e,10);b=W(b);g.m$=1;g.m_=1;g.na=b;D(g);}f=N8(f.np.data[e]);G(b,b.m7,f);h=b.m7;Bh(b,h,h+1|0);b.m8.data[h]=10;e=e+1|0;}b.m7=b.m7-1|0;return W(b);}
let WO=()=>{let b,c,d,e,$$je;PN();b=GY;c=CR(b,Bw(DK));b=c<0?null:b.o_.data[c];if(b===null){b=new Je;d=new Cf;d.og=0;d.np=Bo(C,4);b.pJ=d;b.rV=100;c:{try{d=Ru(Bw(DK),null);break c;}catch($$e){$$je=BG($$e);if($$je instanceof CL){}else{throw $$e;}}try{d=Px(Bw(DK),null);MA(d,1);break c;}catch($$e){$$je=BG($$e);if($$je instanceof Ec){}else{throw $$e;}}d=null;}b.q2=d;if(d===null){b=new BL;d=new I;d.m8=H(16);G(d,d.m7,B(27));if(Bw(DK).nP===null)Bw(DK).nP=Bk(Bw(DK).nA.$meta.name);e=Bw(DK).nP;G(d,d.m7,e);e=W(d);b.m$=1;b.m_
=1;b.na=e;D(b);}BN(GY,Bw(DK),b);}Gf=b;e=new D7;e.pX=1;e.oi=R(4);IU=e;}
function Hu(){let a=this;C.call(a);a.vH=null;a.C3=0.0;a.C5=0.0;a.Fb=0.0;a.Fa=0.0;a.xw=0;a.x9=0;}
let ADh=(a,b,c,d,e)=>{let f,g,h;f=a.vH.sJ;g=1.0/f.rK;h=1.0/f.rz;VS(a,b*g,c*h,(b+d|0)*g,(c+e|0)*h);if(d<0)d= -d|0;a.xw=d;if(e<0)e= -e|0;a.x9=e;}
let VS=(a,b,c,d,e)=>{let f,g,h,i,j,k,l;f=a.vH.sJ;g=f.rK;h=f.rz;i=K3(d-b);j=g;i=i*j;a.xw=i+Fy(i)*0.5|0;k=K3(e-c);i=h;k=k*i;l=k+Fy(k)*0.5|0;a.x9=l;if(a.xw==1&&l==1){k=0.25/j;b=b+k;d=d-k;i=0.25/i;c=c+i;e=e-i;}a.C3=b;a.C5=c;a.Fb=d;a.Fa=e;}
let ABa=F(Hu);
function Fj(){let a=this;C.call(a);a.wm=null;a.r0=null;a.um=null;a.DM=0;a.Di=0;a.CF=0;}
let A6Y=(a,b,c)=>{let d=new Fj();Yg(d,a,b,c);return d;}
let Yg=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n;a.DM=b.yV;a.wm=b;a.Di=d;if(c!==null&&c.ng){a.r0=c;a.CF=0;}else{e=b.uf;if(e===null){b=new Bc;b.m$=1;b.m_=1;b.na=B(44);D(b);}f=e.data.length;c=new Cf;c.og=1;c.np=Bo(C,f);a.r0=c;g=0;while(g<f){h=b.Cw;if(h!==null){i=QI;c=b.uf.data[g];j=h.uH;k=ASO(i.xz,c,j);}else{c=QI;h=b.uf.data[g];k=new Kf;i=c.xz;Md();Lw(k,i,h,TT);}c=a.r0;h=new Hu;l=new MK;m=null;j=A1I(k,AS7(k),m,0);i=Cn;m=i.nd.createTexture();n=i.uJ;i.uJ=n+1|0;Ct(i.tx,n,CA(m));AJX();k=APE;l.wz=k;l.xP=k;AF3();k=ATI;l.v9
=k;l.wF=k;l.z8=1.0;l.ry=3553;l.y1=n;AEi(l,j);k=ED;i=AFp;if(k===null){i=i.pj.data[0];while(i!==null&&i.pG!==null){i=i.pP;}}else{d=Uu(k);e=i.pj.data;i=e[d&(e.length-1|0)];while(i!==null&&!(i.rW==d&&AHS(k,i.pG))){i=i.pP;}}i=i===null?null:i.qg;if(i===null){i=new Cf;i.og=1;i.np=Bo(C,16);}CT(i,l);Ki(AFp,k,i);h.vH=l;k=l.sJ;ADh(h,0,0,k.rK,k.rz);CT(c,h);g=g+1|0;}a.CF=1;}a.um=A37(a,a.Di);AFu(a,b);}
let AFu=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.sN.data;d=c.length;e=0;a:while(true){if(e>=d){f=b.yz;if(f!==null){g=a.r0;d=f.t9;if(d>=g.ng){f=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,d,10);G(b,b.m7,B(36));d=g.ng;K(b,b.m7,d,10);b=W(b);f.m$=1;f.m_=1;f.na=b;D(f);}N1(b,f,g.np.data[d]);}return;}k:{h=c[e];if(h!==null){h=h.data;i=h.length;j=0;while(true){if(j>=i)break k;g=h[j];if(g!==null){f=a.r0;k=g.t9;if(k>=f.ng)break a;N1(b,g,f.np.data[k]);}j=j+1|0;}}}e=e+1|0;}g=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,
k,10);G(b,b.m7,B(36));d=f.ng;K(b,b.m7,d,10);b=W(b);g.m$=1;g.m_=1;g.na=b;D(g);}
let Db=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,$$je;ABx(a.um);i=a.um;j=c.m9.length;k=null;PN();l=GY;m=CR(l,Bw(DZ));n=m<0?null:l.o_.data[m];if(n===null){n=new Je;l=new Cf;CU(l);l.og=0;l.np=Bo(C,4);n.pJ=l;n.rV=100;n:{try{l=Ru(Bw(DZ),null);break n;}catch($$e){$$je=BG($$e);if($$je instanceof CL){}else{throw $$e;}}try{l=Px(Bw(DZ),null);MA(l,1);break n;}catch($$e){$$je=BG($$e);if($$je instanceof Ec){}else{throw $$e;}}l=null;}n.q2=l;if(l===null){b=new BL;c=new I;KS(c,16);Dm(c,c.m7,B(27));if(Bw(DZ).nP===null)Bw(DZ).nP
=Bk(Bw(DZ).nA.$meta.name);l=Bw(DZ).nP;Dm(c,c.m7,l);c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}BN(GY,Bw(DZ),n);}l:{l=n.pJ;o=l.ng;if(o){if(!o){b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}o=o-1|0;l.ng=o;p=l.np.data;l=p[o];p[o]=null;}else try{l=Nm(n.q2,null);break l;}catch($$e){$$je=BG($$e);if($$je instanceof CL){c=$$je;l=new X;b=new I;CU(b);b.m8=H(16);G(b,b.m7,B(42));i=n.q2.qN.qE;if(i.nP===null)i.nP=Bk(i.nA.$meta.name);q=i.nP;G(b,b.m7,q);ZW(l,W(b),c);D(l);}else{throw $$e;}}}l=l;CT(i.wN,l);HW(l,i.ud,c,0,j,i.z3,f,g,h,k);AAI(i,
l,d,e+i.ud.wm.wO);Xa(a.um,b);return l;}
let R6=F();
let AZq=null;let A6Z=()=>{A6Z=Ba(R6);AWs();}
let AWs=()=>{let b;b=new Br;Fc();AZq=b;}
function Br(){let a=this;C.call(a);a.ox=0.0;a.ow=0.0;a.ov=0.0;a.ou=0.0;}
let Xw=null;let AM_=null;let ARa=null;let AXZ=null;let YW=null;let ABr=0.0;let AHj=null;let AWE=null;let AGt=null;let AVx=null;let AWf=null;let ARX=null;let AUT=null;let AMp=null;let AL3=null;let ATa=null;let AWU=null;let AVp=null;let AYi=null;let AHd=null;let ANG=null;let AYd=null;let AQb=null;let AW7=null;let AV4=null;let AUM=null;let AP$=null;let AGK=null;let APQ=null;let AMf=null;let ANe=null;let ALM=null;let APK=null;let ASC=null;let ATp=null;let Fc=()=>{Fc=Ba(Br);AF$();}
let DX=a=>{let b,c;b=a.ox;if(b<0.0)a.ox=0.0;else if(b>1.0)a.ox=1.0;c=a.ow;if(c<0.0)a.ow=0.0;else if(c>1.0)a.ow=1.0;c=a.ov;if(c<0.0)a.ov=0.0;else if(c>1.0)a.ov=1.0;c=a.ou;if(c<0.0)a.ou=0.0;else if(c>1.0)a.ou=1.0;return a;}
let AK7=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b!==null){c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ce;d.nA=c;e=d;c.classObject=e;}}e=b.constructor;if(e===null)c=null;else{c=e.classObject;if(c===null){c=new Ce;c.nA=e;f=c;e.classObject=f;}}if(d===c){c=b;return Kz(a)!=Kz(c)?0:1;}}return 0;}
let APp=a=>{let b,c,d;b=a.ox;c=31*(b===0.0?0:(isNaN(b)?1:0)?2143289344:H7(b))|0;b=a.ow;c=31*(c+(b===0.0?0:(isNaN(b)?1:0)?2143289344:H7(b))|0)|0;d=a.ov;c=31*(c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H7(d))|0)|0;d=a.ou;return c+(d===0.0?0:(isNaN(d)?1:0)?2143289344:H7(d))|0;}
let AEb=a=>{return H5(((255.0*a.ou|0)<<24|(255.0*a.ov|0)<<16|(255.0*a.ow|0)<<8|255.0*a.ox|0)&(-16777217));}
let Kz=a=>{return (255.0*a.ou|0)<<24|(255.0*a.ov|0)<<16|(255.0*a.ow|0)<<8|255.0*a.ox|0;}
let AKt=a=>{let b,c;b=Bq((255.0*a.ox|0)<<24|(255.0*a.ow|0)<<16|(255.0*a.ov|0)<<8|255.0*a.ou|0,4);while(b.m9.length<8){c=new I;c.m8=H(16);G(c,c.m7,B(45));G(c,c.m7,b);b=W(c);}return b;}
let Co=(b,c)=>{Fc();b.ox=((c&(-16777216))>>>24|0)/255.0;b.ow=((c&16711680)>>>16|0)/255.0;b.ov=((c&65280)>>>8|0)/255.0;b.ou=(c&255)/255.0;}
let AF$=()=>{let b;b=new Br;Fc();b.ox=1.0;b.ow=1.0;b.ov=1.0;b.ou=1.0;DX(b);Xw=b;b=new Br;Co(b,(-1077952513));AM_=b;b=new Br;Co(b,2139062271);ARa=b;b=new Br;Co(b,1061109759);AXZ=b;b=new Br;b.ox=0.0;b.ow=0.0;b.ov=0.0;b.ou=1.0;DX(b);YW=b;ABr=AEb(Xw);b=new Br;b.ox=0.0;b.ow=0.0;b.ov=0.0;b.ou=0.0;DX(b);AHj=b;b=new Br;b.ox=0.0;b.ow=0.0;b.ov=1.0;b.ou=1.0;DX(b);AWE=b;b=new Br;b.ox=0.0;b.ow=0.0;b.ov=0.5;b.ou=1.0;DX(b);AGt=b;b=new Br;Co(b,1097458175);AVx=b;b=new Br;Co(b,1887473919);AWf=b;b=new Br;Co(b,(-2016482305));ARX
=b;b=new Br;b.ox=0.0;b.ow=1.0;b.ov=1.0;b.ou=1.0;DX(b);AUT=b;b=new Br;b.ox=0.0;b.ow=0.5;b.ov=0.5;b.ou=1.0;DX(b);AMp=b;b=new Br;Co(b,16711935);AL3=b;b=new Br;Co(b,2147418367);ATa=b;b=new Br;Co(b,852308735);AWU=b;b=new Br;Co(b,579543807);AVp=b;b=new Br;Co(b,1804477439);AYi=b;b=new Br;Co(b,(-65281));AHd=b;b=new Br;Co(b,(-2686721));ANG=b;b=new Br;Co(b,(-626712321));AYd=b;b=new Br;Co(b,(-5963521));AQb=b;b=new Br;Co(b,(-1958407169));AW7=b;b=new Br;Co(b,(-759919361));AV4=b;b=new Br;Co(b,(-1306385665));AUM=b;b=new Br;Co(b,
(-16776961));AP$=b;b=new Br;Co(b,(-13361921));AGK=b;b=new Br;Co(b,(-8433409));APQ=b;b=new Br;Co(b,(-92245249));AMf=b;b=new Br;Co(b,(-9849601));ANe=b;b=new Br;b.ox=1.0;b.ow=0.0;b.ov=1.0;b.ou=1.0;DX(b);ALM=b;b=new Br;Co(b,(-1608453889));APK=b;b=new Br;Co(b,(-293409025));ASC=b;b=new Br;Co(b,(-1339006721));ATp=b;}
function KC(){let a=this;C.call(a);a.ry=0;a.y1=0;a.wz=null;a.xP=null;a.v9=null;a.wF=null;a.z8=0.0;}
let M3=0.0;let AB4=(a,b,c,d)=>{if(b!==null&&!(!d&&a.v9===b)){Cn.b4(a.ry,10242,b.v2);a.v9=b;}if(c!==null&&!(!d&&a.wF===c)){Cn.b4(a.ry,10243,c.v2);a.wF=c;}}
let UB=(a,b,c,d)=>{if(b!==null&&!(!d&&a.wz===b)){Cn.b4(a.ry,10241,b.rd);a.wz=b;}if(c!==null&&!(!d&&a.xP===c)){Cn.b4(a.ry,10240,c.rd);a.xP=c;}}
let X8=()=>{let b,c,d,e,f;b=M3;if(b>0.0)return b;if(!(Bi.ty.getExtension("GL_EXT_texture_filter_anisotropic")===null?0:1)){M3=1.0;return 1.0;}if(!DO){c=Cq(16);d=c.data.length;e=new IL;f=0+d|0;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=f;e.ue=0;e.u9=0;e.tO=c;}else{e=new Cx;c=BI(64);e.no=(-1);e.nt=64;e.nb=64;Cd();e.nT=Ch;e.n3=0;e.nQ=c;e.nc=0;e.nb=64;e.oz=1;e.n9=0;e.nT=DD();e=F3(e);}B7(e,0);CQ(e,e.nt);Bm.b9(34047,e);b=Qw(e,0);M3=b;return b;}
let AES=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;if(c===null)return;if(!c.sX)O2(c);AGR();if(AHQ===AUD){c=new X;c.m$=1;c.m_=1;c.na=B(46);D(c);}if(!c.sX){e=new X;e.m$=1;e.m_=1;e.na=B(47);D(e);}c.sX=0;f=c.ul;c.ul=null;g=1;h=c.tC;e=f.od;if(e===null){HU();e=Ie;}else e=IT(e.oC);if(h===e)e=f;else{e=new Is;h=f.od;Kj(e,h===null?f.pn:h.pd,h===null?f.pq:h.pb,c.tC);Kh();h=QU;e.u7=h;i=e.od;if(i===null){F4(e);h=e.oN;HK();i=B0(HD.ni);h.globalCompositeOperation=i;}else{j=h!==h?1:0;R0(i.oW,j);}i=f.od;k=i===null?f.pn:i.pd;l=i===
null?f.pq:i.pb;h=e.od;if(h===null){F4(f);KE(e,f.ri,0,0,k,l,0,0,k,l);}else{g=i.oW;m=h.oW;M2(g,m,0,0,k,l,0,0,k,l);}if(f.tN){e=new X;e.m$=1;e.m_=1;e.na=B(48);D(e);}J1();IQ(J$,f.uM);h=f.od;if(h!==null)MV(h.oW);f.tN=1;g=1;}Cn.ch(3317,1);if(c.BT)ACM(b,e,LB(e),L6(e));else{h=Cn;c=e.od;if(c===null)n=6408;else s:{j=c.oC;switch(j){case 1:n=6406;break s;case 2:n=6410;break s;case 3:case 5:n=6407;break s;case 4:case 6:n=6408;break s;default:}c=new X;e=new I;e.m8=H(16);Dm(e,e.m7,Dp(B(49)));K(e,e.m7,j,10);e=W(e);c.m$=1;c.m_
=1;c.na=e;D(c);}o=c===null?e.pn:c.pd;p=c===null?e.pq:c.pb;if(c===null)k=6408;else t:{k=c.oC;switch(k){case 1:k=6406;break t;case 2:k=6410;break t;case 3:case 5:k=6407;break t;case 4:case 6:k=6408;break t;default:}c=new X;e=new I;Gj(e);LL(e,B(49));EJ(e,k);Pz(c,CD(e));D(c);}h.cn(b,d,n,o,p,0,k,SP(e),SH(e));}if(g)OP(e);}
let ANd=()=>{M3=0.0;}
function MK(){KC.call(this);this.sJ=null;}
let AFp=null;let AEi=(a,b)=>{let c,d;a.sJ=b;if(!b.sX)O2(b);Cn.cr(a.ry,a.y1);AES(3553,b,0);UB(a,a.wz,a.xP,1);AB4(a,a.v9,a.wF,1);c=a.z8;d=X8();if(d!==1.0){c=ACS(c,d);Bm.cx(3553,34046,c);a.z8=c;}Cn.cr(a.ry,0);}
let AQO=a=>{let b,c,d,e;b=a.sJ;if(!(b instanceof Lh)){b=a;if(!b.$id$){c=Fb();b.$id$=c;}d=Bq(a.$id$,4);b=new I;b.m8=H(16);G(b,b.m7,B(1));e=b.m7;if(d===null)d=B(2);G(b,e,d);return W(b);}c=b;if(!c.$id$){d=Fb();c.$id$=d;}d=Bq(b.$id$,4);b=new I;b.m8=H(16);G(b,b.m7,B(1));e=b.m7;if(d===null)d=B(2);G(b,e,d);return W(b);}
let ACu=()=>{let b,c,d,e;b=new JE;c=Ko(16);b.rv=0;d=Bo(F2,c);e=d.data;b.pj=d;b.v5=0.75;b.sM=e.length*0.75|0;AFp=b;}
function Cf(){let a=this;C.call(a);a.np=null;a.ng=0;a.og=0;a.x$=null;}
let A4X=()=>{let a=new Cf();AI0(a);return a;}
let AI0=a=>{a.og=1;a.np=Bo(C,16);}
let CT=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.np;d=c.data;e=a.ng;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ce;i.nA=h;f=i;h.classObject=f;}}f=Ej(i);if(f===null){b=new C0;b.m$=1;b.m_=1;D(b);}if(f===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;D(b);}if(g<0){b=new DS;b.m$=1;b.m_=1;D(b);}f=Ex(f.nA,g);j=f.data;k=a.ng;l=j.length;if(k<l)l=k;EZ(c,0,f,0,l);a.np=f;}f=f.data;g=a.ng;a.ng=g+1|0;f[g]=b;}
let Yx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=b.np;d=b.ng;e=a.np;f=e.data;g=a.ng;h=g+d|0;if(h<=f.length)i=e;else{j=8;if(j<=h)j=h;g=g*1.75|0;if(j>g)g=j;i=e.constructor;if(i===null)b=null;else{b=i.classObject;if(b===null){b=new Ce;b.nA=i;k=b;i.classObject=k;}}b=Ej(b);if(b===null){b=new C0;b.m$=1;b.m_=1;Bj(b);D(b);}if(b===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;Bj(b);D(b);}if(g<0){b=new DS;b.m$=1;b.m_=1;Bj(b);D(b);}i=Ex(b.nA,g);b=i.data;j=a.ng;l=b.length;if(j<l)l=j;EZ(e,0,i,0,l);a.np=i;}EZ(c,0,i,a.ng,d);a.ng=h;}
let UQ=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if((c+d|0)>b.ng){e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(50));K(f,f.m7,c,10);G(f,f.m7,B(51));K(f,f.m7,d,10);G(f,f.m7,B(52));c=b.ng;K(f,f.m7,c,10);b=W(f);e.m$=1;e.m_=1;e.na=b;D(e);}g=b.np;h=a.np;i=h.data;j=a.ng;k=j+d|0;if(k<=i.length)b=h;else{l=8;if(l<=k)l=k;j=j*1.75|0;if(l>j)j=l;e=h.constructor;if(e===null)b=null;else{b=e.classObject;if(b===null){b=new Ce;b.nA=e;f=b;e.classObject=f;}}b=Ej(b);if(b===null){b=new C0;b.m$=1;b.m_=1;Bj(b);D(b);}if(b===Bw(Cc)){b=new Bc;b.m$=
1;b.m_=1;Bj(b);D(b);}if(j<0){b=new DS;b.m$=1;b.m_=1;Bj(b);D(b);}b=Ex(b.nA,j);e=b.data;l=a.ng;m=e.length;if(l<m)m=l;EZ(h,0,b,0,m);a.np=b;}EZ(g,c,b,a.ng,d);a.ng=k;}
let AEE=(a,b)=>{let c,d;if(b<a.ng)return a.np.data[b];c=new L;d=new I;d.m8=H(16);G(d,d.m7,B(35));K(d,d.m7,b,10);G(d,d.m7,B(36));b=a.ng;K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}
let WK=(a,b,c)=>{let d,e,f,g;a:{d=a.np;if(!(!c&&b!==null)){e=0;f=a.ng;while(e<f){if(d.data[e]===b){Sa(a,e);return 1;}e=e+1|0;}}else{e=0;f=a.ng;while(true){if(e>=f)break a;g=d.data[e];if(b===g)c=1;else if(!(g instanceof M))c=0;else{g=g;c=b.m9!==g.m9?0:1;}if(c){Sa(a,e);return 1;}e=e+1|0;}}}return 0;}
let Sa=(a,b)=>{let c,d,e,f,g;c=a.ng;if(b<c){d=a.np;e=d.data;f=e[b];c=c-1|0;a.ng=c;if(!a.og)e[b]=e[c];else Ci(d,b+1|0,d,b,c-b|0);e[a.ng]=null;return f;}f=new L;g=new I;g.m8=H(16);G(g,g.m7,B(35));K(g,g.m7,b,10);G(g,g.m7,B(36));b=a.ng;K(g,g.m7,b,10);g=W(g);f.m$=1;f.m_=1;f.na=g;D(f);}
let WZ=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.ng;if(c>=d){e=new L;f=new I;f.m8=H(16);G(f,f.m7,B(53));K(f,f.m7,c,10);G(f,f.m7,B(36));b=a.ng;K(f,f.m7,b,10);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}if(b>c){e=new L;f=new I;f.m8=H(16);G(f,f.m7,B(54));K(f,f.m7,b,10);G(f,f.m7,B(55));K(f,f.m7,c,10);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}g=a.np;h=(c-b|0)+1|0;i=d-h|0;if(a.og){j=b+h|0;Ci(g,j,g,b,d-j|0);}else{j=c+1|0;if(i>j)j=i;Ci(g,j,g,b,d-j|0);}j=i;while(j<d){g.data[j]=null;j=j+1|0;}a.ng=i;}
let U1=a=>{let b,c,d,e;b=a.ng;if(b){c=b-1|0;a.ng=c;d=a.np.data;e=d[c];d[c]=null;return e;}e=new BT;e.m$=1;e.m_=1;e.na=B(41);D(e);}
let AE3=a=>{let b,c;b=a.ng;if(b)return a.np.data[b-1|0];c=new BT;c.m$=1;c.m_=1;c.na=B(41);D(c);}
let Xm=a=>{let b,c,d,e,f,g;b=a.np;c=0;d=a.ng;e=null;if(c>d){e=new Bc;e.m$=1;e.m_=1;D(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.ng=0;}
let ADY=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.m8=H(16);G(d,d.m7,B(56));K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}e=a.ng;f=e+b|0;g=a.np;if(f>g.data.length){if(8>f)f=8;b=e*1.75|0;if(f>b)b=f;d=g.constructor;if(d===null)c=null;else{c=d.classObject;if(c===null){c=new Ce;c.nA=d;h=c;d.classObject=h;}}c=Ej(c);if(c===null){c=new C0;c.m$=1;c.m_=1;D(c);}if(c===Bw(Cc)){c=new Bc;c.m$=1;c.m_=1;D(c);}if(b<0){c=new DS;c.m$=1;c.m_=1;D(c);}d=Ex(c.nA,b);c=d.data;f=a.ng;i=c.length;if(f<i)i=f;EZ(g,0,d,0,i);a.np
=d;}return a.np;}
let Qp=a=>{let b;if(AGM){b=new H2;b.qb=1;b.ua=a;b.w$=1;return b;}if(a.x$===null){b=new Oo;b.y2=a;b.zY=1;a.x$=b;}return YL(a.x$);}
let NV=(a,b)=>{let c,d,e,f;if(b>=0){c=a.ng;if(c<=b)return;d=b;while(d<c){a.np.data[d]=null;d=d+1|0;}a.ng=b;return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(57));K(f,f.m7,b,10);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}
let AH_=a=>{let b,c,d,e,f,g,h;if(a.og){b=a.np;c=1;d=0;e=a.ng;while(d<e){f=b.data;c=c*31|0;g=f[d];if(g!==null)c=c+g.cF()|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Fb();g.$id$=h;}return a.$id$;}
let AOW=(a,b)=>{let c,d,e,f,g,h,i,j;if(b===a)return 1;if(!a.og)return 0;if(!(b instanceof Cf))return 0;c=b;if(!c.og)return 0;d=a.ng;if(d!=c.ng)return 0;e=a.np;f=c.np;g=0;c:{while(g<d){e:{h=f.data;i=e.data[g];j=h[g];if(i!==null){if(i.cG(j))break e;else break c;}if(j!==null)break c;}g=g+1|0;}return 1;}return 0;}
let AVC=a=>{let b,c,d,e,f,g,h,i,j,k;if(!a.ng)return B(58);b=a.np;c=new JF;d=H(32);e=d.data;c.n4=d;f=c.nL;if(f==e.length)Dr(c,f+1|0);b=b.data;e=c.n4.data;g=c.nL;c.nL=g+1|0;e[g]=91;h=b[0];if(h===null)Kd(c);else{h=h.l();if(h===null)Kd(c);else{i=h.m9.length;j=c.nL+i|0;if(j>c.n4.data.length)Dr(c,j);H4(h,0,i,c.n4,c.nL);c.nL=j;}}i=1;while(i<a.ng){g=B(59).m9.length;k=c.nL+g|0;if(k>c.n4.data.length)Dr(c,k);H4(B(59),0,g,c.n4,c.nL);c.nL=k;h=b[i];if(h===null)Kd(c);else{h=h.l();if(h===null)Kd(c);else{k=h.m9.length;j=c.nL
+k|0;if(j>c.n4.data.length)Dr(c,j);H4(h,0,k,c.n4,c.nL);c.nL=j;}}i=i+1|0;}f=c.nL;if(f==c.n4.data.length)Dr(c,f+1|0);u:{b=c.n4;e=b.data;g=c.nL;f=g+1|0;c.nL=f;e[g]=93;if(!f)c=B(43);else{c=new M;P();g=e.length;if(f<0)break u;if(f>(g-0|0))break u;c.m9=O(b.data,0,f);}return c;}c=new L;c.m$=1;c.m_=1;D(c);}
function KA(){let a=this;C.call(a);a.sW=0;a.q3=null;a.o_=null;a.BB=0.0;a.Ai=0;a.vK=0;a.vE=0;}
let ALy=null;let FL=(a,b)=>{let c=new KA();AAE(c,a,b);return c;}
let AAE=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.BB=c;d=MQ(b,c);a.Ai=d*c|0;b=d-1|0;a.vE=b;a.vK=Ft(J(b));a.q3=Bo(C,d);a.o_=Bo(C,d);return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(60));El(f,f.m7,c);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}
let CR=(a,b)=>{let c,d,e;if(b===null){c=new Bc;c.m$=1;c.m_=1;c.na=B(61);D(c);}d=a.q3;e=T(Y(V(J(b.cF()),E(2135587861, 2654435769)),a.vK));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.cG(b))break;e=(e+1|0)&a.vE;}return e;}
let BN=(a,b,c)=>{let d,e,f;d=CR(a,b);if(d>=0){e=a.o_.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.q3.data;e[d]=b;a.o_.data[d]=c;d=a.sW+1|0;a.sW=d;if(d>=a.Ai)Wq(a,e.length<<1);return null;}
let VP=(a,b)=>{let c;c=CR(a,b);return c<0?null:a.o_.data[c];}
let AAa=(a,b)=>{let c,d,e,f,g,h,i,j;c=CR(a,b);if(c<0)return null;d=a.q3;e=a.o_.data;f=e[c];g=a.vE;h=(c+1|0)&g;while(true){i=d.data;b=i[h];if(b===null)break;j=T(Y(V(J(b.cF()),E(2135587861, 2654435769)),a.vK));if(((h-j|0)&g)>((c-j|0)&g)){i[c]=b;e[c]=e[h];c=h;}h=(h+1|0)&g;}i[c]=null;e[c]=null;a.sW=a.sW-1|0;return f;}
let Wq=(a,b)=>{let c,d,e,f,g,h,i,j;b:{c=a.q3.data.length;a.Ai=b*a.BB|0;d=b-1|0;a.vE=d;a.vK=Ft(J(d));e=a.q3;f=a.o_;a.q3=Bo(C,b);a.o_=Bo(C,b);if(a.sW>0){d=0;while(true){if(d>=c)break b;g=e.data[d];if(g!==null){h=f.data[d];i=a.q3;b=T(Y(V(J(g.cF()),E(2135587861, 2654435769)),a.vK));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.vE;}j[b]=g;a.o_.data[b]=h;}d=d+1|0;}}}}
let AK8=()=>{ALy=new C;}
let Yu=F(KA);
let AE4=F();
function Eq(){let a=this;C.call(a);a.qK=0;a.pf=0;a.pE=0;a.pA=0;a.q6=0;a.pv=null;a.qU=0;a.r3=0;}
let AQX=(a,b)=>{if(!(b instanceof Eq))return 0;return Yl(a,b);}
let Yl=(a,b)=>{let c,d,e;b:{if(b!==null&&a.qK==b.qK&&a.pf==b.pf&&a.pA==b.pA&&a.pE==b.pE){c=a.pv;d=b.pv;if(c===d)e=1;else if(!(d instanceof M))e=0;else{d=d;e=c.m9!==d.m9?0:1;}if(e&&a.qU==b.qU){e=1;break b;}}e=0;}return e;}
let AKF=a=>{let b,c,d;b:{b=541*((541*((a.r3<<8)+(a.qU&255)|0)|0)+a.pf|0)|0;c=a.pv;if(!c.n_){d=0;while(true){if(d>=c.m9.length)break b;c.n_=(31*c.n_|0)+c.m9.charCodeAt(d)|0;d=d+1|0;}}}return b+c.n_|0;}
let AFb=F();
let ZC=F();
let ABc=F();
let AAj=F();
let Qn=F();
let AYM=null;let A60=()=>{A60=Ba(Qn);AOw();}
let AOw=()=>{let b,c,d;b=new KZ;A5o();c=new Bg;B3();b.B1=c;d=new Bg;b.B$=d;b.BG=new Bg;b.B_=new Bg;c.nk=0.0;c.nm=0.0;c.nl=0.0;d.nk=0.0;d.nm=0.0;d.nl=0.0;ABH(b,c,d);AYM=b;}
let U7=F();
let AAG=F();
let Z5=F();
let AAp=F();
let ADu=F();
let Yi=F();
let AEj=F();
let Zn=F();
let VX=F();
let Wx=F();
let GO=F(BH);
let A5g=null;let A4C=null;let A0Z=null;let A2h=()=>{A2h=Ba(GO);ANc();}
let ANc=()=>{let b,c;b=new GO;A2h();b.ni=B(62);b.nf=0;A5g=b;c=new GO;c.ni=B(63);c.nf=1;A4C=c;A0Z=N(GO,[b,c]);}
let AAL=F();
let R9=F(0);
let D0=F();
let Vf=F(D0);
let Ve=F(D0);
let ZO=F(D0);
let W$=F(D0);
let ACf=F(D0);
let LX=F(D0);
let W4=F(LX);
let In=F(0);
let XA=F();
let F9=F(0);
let AB9=F();
let AEg=F();
let Wj=F();
let FA=F();
let ABK=F(FA);
let Ii=F(FA);
let Ee=F(Ii);
let A0P=null;let A61=()=>{A61=Ba(Ee);AHK();}
let AHK=()=>{let b;b=new Bg;B3();A0P=b;}
let AB2=F();
let ADt=F(Ee);
let Zx=F(Ee);
let TR=F(FA);
let ANB=null;let ALV=()=>{ANB=Cq(3);}
let Lu=F(FA);
let U3=F(Lu);
let W3=F(Ee);
let HI=F(Ii);
let AAe=F(HI);
let Zv=F(Ee);
let AAs=F(Ee);
let AAd=F(HI);
let Fl=F(BH);
let A14=null;let A2U=null;let A0Q=null;let AZ2=null;let A0W=()=>{A0W=Ba(Fl);ARi();}
let ARi=()=>{let b,c,d;b=new Fl;A0W();b.ni=B(64);b.nf=0;A14=b;c=new Fl;c.ni=B(65);c.nf=1;A2U=c;d=new Fl;d.ni=B(66);d.nf=2;A0Q=d;AZ2=N(Fl,[b,c,d]);}
let GR=F();
let Mz=F(GR);
let Un=F(Mz);
let Fr=F(BH);
let A4A=null;let A4S=null;let AYv=null;let A4W=null;let A1K=()=>{A1K=Ba(Fr);ANX();}
let ANX=()=>{let b,c,d;b=new Fr;A1K();b.ni=B(67);b.nf=0;A4A=b;c=new Fr;c.ni=B(68);c.nf=1;A4S=c;d=new Fr;d.ni=B(69);d.nf=2;AYv=d;A4W=N(Fr,[b,c,d]);}
let C7=F(GR);
let IS=F(C7);
let Wd=F();
let FC=F(C7);
let A39=null;let A38=null;let A3$=null;let A4F=null;let A62=()=>{A62=Ba(FC);AO1();}
let AO1=()=>{let b;b=new Bg;B3();A39=b;A38=new Bg;A3$=new Bg;b=new E8;SA();b.s5=0.0;b.s2=0.0;b.s3=0.0;b.s4=1.0;A4F=b;}
let Fd=F(FC);
let GU=F(Fd);
let Xz=F(GU);
let Iu=F(C7);
let AFv=F(Iu);
let ADs=F(C7);
let Gs=F(C7);
let U_=F(Gs);
let H0=F(C7);
let Xu=F(Fd);
let YH=F(Fd);
let La=F(C7);
let ABL=F(La);
let VN=F(Gs);
let ZB=F(GU);
let ABG=F(C7);
let AAy=F(Gs);
let ABO=F(C7);
let ACB=F(FC);
let YN=F(DL);
let V5=F(DL);
let Wb=F(Fd);
let ABX=F(H0);
let AEI=F(IS);
let AA4=F(IS);
let ACr=F(H0);
let Z0=F(GU);
let AEY=F(Iu);
let Fw=F(GR);
let AAh=F(Fw);
let Gz=F();
let AB7=F(Gz);
let ACP=F(Fw);
let ADr=F(Fw);
let ADZ=F(Gz);
let Xl=F(Fw);
let ADv=F(Gz);
let KP=F(0);
let Nv=F(0);
function Ce(){let a=this;C.call(a);a.nP=null;a.nA=null;a.tS=null;}
let AUh=0;let A63=a=>{let b=new Ce();AUP(b,a);return b;}
let AUP=(a,b)=>{let c;a.nA=b;c=a;b.classObject=c;}
let A2M=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ce;c.nA=b;d=c;b.classObject=d;}return c;}
let APv=a=>{let b,c,d;b=a;if(!b.$id$){c=Fb();b.$id$=c;}d=a.$id$;b=new I;b.m8=H(16);G(b,b.m7,B(70));K(b,b.m7,d,10);return W(b);}
let Ej=a=>{let b,c,d;b=a.nA.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ce;c.nA=b;d=c;b.classObject=d;}}return c;}
let AOI=()=>{EE.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cc,callable:function(obj,args){Rw(obj);return null;}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Cc,callable:function(obj,args){AXz();U$();return null;}}];DK.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cc,callable:function(obj,args){X1(obj);return null;}},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[DK],returnType:Cc,callable
:function(obj,args){NZ(obj,args[0]);return null;}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cc,callable:function(obj,args){ZG(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return N8(obj);}}];DZ.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cc,callable:function(obj,args){TQ(obj);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey],returnType:
Cc,callable:function(obj,args){Or(obj,args[0],args[1]);return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey,Br,E3,D5,Jt],returnType:Cc,callable:function(obj,args){Sn(obj,args[0],args[1],args[2],Hs(args[3]),DI(args[4]),Js(args[5]));return null;}},{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey,D5,D5,Br,E3,D5,Jt,M],returnType:Cc,callable:function(obj,args){SI(obj,args[0],args[1],DI(args[2]),DI(args[3]),args[4],Hs(args[5]),DI(args[6]),Js(args[7]),args[8]);return null;}},
{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey],returnType:Cc,callable:function(obj,args){A3Q(obj,args[0],args[1]);return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey,Br,E3,D5,Jt],returnType:Cc,callable:function(obj,args){A2c(obj,args[0],args[1],args[2],Hs(args[3]),DI(args[4]),Js(args[5]));return null;}},{name:"setText",modifiers:0,accessLevel:3,parameterTypes:[Fj,Ey,D5,D5,Br,E3,D5,Jt,M],returnType:Cc,callable:function(obj,args){HW(obj,args[0],args[1],DI(args[2]),
DI(args[3]),args[4],Hs(args[5]),DI(args[6]),Js(args[7]),args[8]);return null;}},{name:"calculateWidths",modifiers:0,accessLevel:1,parameterTypes:[Gv],returnType:Cc,callable:function(obj,args){Pq(obj,args[0]);return null;}},{name:"alignRuns",modifiers:0,accessLevel:1,parameterTypes:[E3,D5],returnType:Cc,callable:function(obj,args){Ro(obj,Hs(args[0]),DI(args[1]));return null;}},{name:"truncate",modifiers:0,accessLevel:1,parameterTypes:[Gv,DK,E3,M],returnType:Cc,callable:function(obj,args){Od(obj,args[0],args[1],
Hs(args[2]),args[3]);return null;}},{name:"wrap",modifiers:0,accessLevel:1,parameterTypes:[Gv,DK,D5],returnType:DK,callable:function(obj,args){return ST(obj,args[0],args[1],DI(args[2]));}},{name:"setLastGlyphXAdvance",modifiers:0,accessLevel:1,parameterTypes:[Gv,DK],returnType:Cc,callable:function(obj,args){MI(obj,args[0],args[1]);return null;}},{name:"getGlyphWidth",modifiers:0,accessLevel:1,parameterTypes:[Ks,Gv],returnType:E3,callable:function(obj,args){return Le(obj,args[0],args[1]);}},{name:"getLineOffset",modifiers
:0,accessLevel:1,parameterTypes:[Cf,Gv],returnType:E3,callable:function(obj,args){return Tq(obj,args[0],args[1]);}},{name:"parseColorMarkup",modifiers:0,accessLevel:1,parameterTypes:[Ey,D5,D5],returnType:D5,callable:function(obj,args){return R4(obj,args[0],DI(args[1]),DI(args[2]));}},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:Cc,callable:function(obj,args){Th(obj);return null;}},{name:"toString",modifiers:0,accessLevel:3,parameterTypes:[],returnType:M,callable:function(obj,args){return ABu(obj
);}},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:Cc,callable:function(obj,args){EI();WO();return null;}}];}
let Ng=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.nA.$meta.primitive?1:0)&&!(a.nA.$meta.item===null?0:1)){if(a.tS===null){if(!AUh){AUh=1;AOI();}b=a.nA.$meta.methods;a.tS=Bo(Im,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof Hp())?e:e.nJ;g=Bk(f.name);if(g===B(71))h=1;else if(!(B(71) instanceof M))h=0;else{e=B(71);h=g.m9!==e.m9?0:1;}if(h){g=f.parameterTypes;i=Bo(Ce,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new Ce;e.nA=l;m
=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.tS.data;h=c+1|0;e=new Im;g=Bk(f.name);k=f.modifiers;n=f.accessLevel;f=D6(f.callable,"call");e.qE=a;e.Ec=g;e.vo=k;e.wU=n;e.rU=i;e.zR=f;j[c]=e;c=h;}d=d+1|0;}i=a.tS;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new Ce;e.nA=b;f=e;b.classObject=f;}}b=Ej(e);if(b===null){e=new C0;e.m$=1;e.m_=1;D(e);}if(b===Bw(Cc)){e=new Bc;e.m$=1;e.m_=1;D(e);}if(c<0){e=new DS;e.m$=1;e.m_=1;D(e);}i=i.data;f=Ex(b.nA,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]=i[c];c
=c+1|0;}a.tS=f;}return a.tS.s();}return Bo(Im,0);}
let AEO=a=>{let b,c,d,e,f,g,h,i,j,k;b=(Ng(a)).data;c=b.length;d=Bo(Im,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Pw(h.vo,h.wU)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=BS(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new Ce;h.nA=j;k=h;j.classObject=k;}}j=Ej(h);if(j===null){h=new C0;h.m$=1;h.m_=1;D(h);}if(j===Bw(Cc)){h=new Bc;h.m$=1;h.m_=1;D(h);}if(f<0){h=new DS;h.m$=1;h.m_=1;D(h);}k=Ex(j.nA,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;}
let ADf=(a,b)=>{let c,d,e,f;c=(Ng(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new H$;f.m$=1;f.m_=1;D(f);}f=c[e];if(ADe(f.rU.s(),b))break;e=e+1|0;}return f;}
let ADc=(a,b)=>{let c,d,e,f,g;c=(Ng(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new H$;f.m$=1;f.m_=1;D(f);}f=c[e];g=!(Pw(f.vo,f.wU)&1)?0:1;if(g&&ADe(f.rU.s(),b))break;e=e+1|0;}return f;}
let WB=F();
let ASB=b=>{let c,d,e,f,g;if(b===null)return null;c=BI(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?null:!(g instanceof Hp())?g:g.nJ;e=e+1|0;}return c;}
let B$=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();}
let D6=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;}
let V$=F();
let AGo=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;}
let RI=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(RI(d[e],c))return 1;e=e+1|0;}return 0;}
let GH=b=>{setTimeout(()=>{A3m(VC)(b);},0);}
let VC=b=>{b.cV();}
let SV=(b,c)=>{setTimeout(()=>{VC(b);},c);}
let AOx=()=>{return [];}
function DV(){let a=this;C.call(a);a.na=null;a.oY=null;a.m$=0;a.m_=0;a.D2=null;}
let A64=()=>{let a=new DV();Bd(a);return a;}
let A65=a=>{let b=new DV();Kr(b,a);return b;}
let A66=(a,b)=>{let c=new DV();ZW(c,a,b);return c;}
let Bd=a=>{a.m$=1;a.m_=1;}
let Kr=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let ZW=(a,b,c)=>{a.m$=1;a.m_=1;a.na=b;a.oY=c;}
let Bj=a=>{return a;}
let ATR=a=>{return a.na;}
let AMA=a=>{return a.cW();}
let ATX=a=>{let b;b=a.oY;if(b===a)b=null;return b;}
let ANj=a=>{let b,c;if(ES===null){b=new CP;b.oK=Jo;c=new I;c.m8=H(16);b.nV=c;b.oI=H(32);b.oQ=0;CO();b.oO=CW;ES=b;}Kw(a,ES);}
let Kw=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ce;d.nA=c;e=d;c.classObject=e;}}if(d.nP===null)d.nP=Bk(d.nA.$meta.name);e=d.nP;c=b.nV;G(c,c.m7,e);CY(b);f=a.cW();if(f!==null){c=new I;c.m8=H(16);G(c,c.m7,B(72));G(c,c.m7,f);e=W(c);c=b.nV;G(c,c.m7,e);CY(b);}o:{g=b.oI;g.data[0]=10;Ol(b,g,0,1);g=a.D2;if(g!==null){g=g.data;h=g.length;i=0;while(true){if(i>=h)break o;d=g[i];c=b.nV;G(c,c.m7,B(73));CY(b);e=b.nV;G(e,e.m7,d===null?B(2):d.l());j=e.m7;Bh(e,j,j+
1|0);e.m8.data[j]=10;CY(b);i=i+1|0;}}}c=a.oY;if(c!==null&&c!==a){e=b.nV;G(e,e.m7,B(74));CY(b);Kw(a.oY,b);}}
let CL=F(DV);
let A67=()=>{let a=new CL();Cg(a);return a;}
let Cg=a=>{a.m$=1;a.m_=1;}
let BL=F(CL);
let A68=()=>{let a=new BL();KQ(a);return a;}
let A6D=a=>{let b=new BL();AEA(b,a);return b;}
let KQ=a=>{a.m$=1;a.m_=1;}
let AEA=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let Zs=F(BL);
let Ey=F(0);
function M(){C.call(this);this.n_=0;}
let A4M=null;let AQq=null;let AYJ=null;let P=()=>{P=Ba(M);AVQ();}
let A69=a=>{let b=new M();U6(b,a);return b;}
let ABZ=a=>{let b=new M();X_(b,a);return b;}
let Wg=(a,b,c)=>{let d=new M();Uj(d,a,b,c);return d;}
let U6=(a,b)=>{P();a.m9=O(b.data,0,b.data.length);}
let X_=(a,b)=>{a.m9=b;}
let Uj=(a,b,c,d)=>{let e,f;P();e=b.data.length;if(c>=0&&d>=0&&d<=(e-c|0)){a.m9=O(b.data,c,d);return;}f=new L;f.m$=1;f.m_=1;D(f);}
let Dc=(a,b)=>{let c;if(b>=0&&b<a.m9.length)return a.m9.charCodeAt(b);c=new U;c.m$=1;c.m_=1;D(c);}
let Fi=a=>{return a.m9.length;}
let H4=(a,b,c,d,e)=>{let f,g,h;if(b>=0&&b<=c&&c<=a.m9.length&&e>=0){f=d.data;g=c-b|0;if((e+g|0)<=f.length){AZJ(a.m9,b,d.data,e,g);return;}}h=new L;h.m$=1;h.m_=1;D(h);}
let J4=(a,b,c)=>{let d,e,f;if((c+b.m9.length|0)>a.m9.length)return 0;d=0;a:{d:{while(d<b.m9.length){if(d<0)break a;if(d>=b.m9.length)break a;e=b.m9.charCodeAt(d);f=c+1|0;if(c<0)break d;if(c>=a.m9.length)break d;if(e!=a.m9.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let FV=(a,b)=>{if(a===b)return 1;return J4(a,b,0);}
let PE=(a,b)=>{let c,d,e,f;if(a===b)return 1;if(b.m9.length>a.m9.length)return 0;c=0;d=a.m9.length-b.m9.length|0;d:{k:{while(d<a.m9.length){if(d<0)break d;if(d>=a.m9.length)break d;e=a.m9.charCodeAt(d);f=c+1|0;if(c<0)break k;if(c>=b.m9.length)break k;if(e!=b.m9.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let EL=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.m9.length)return (-1);if(a.m9.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.m9.length-1|0))return (-1);if(a.m9.charCodeAt(c)==e&&a.m9.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;}
let Xi=(a,b)=>{return EL(a,b,0);}
let Gh=(a,b,c)=>{let d,e,f,g;d=a.m9.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.m9.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.m9.charCodeAt(d)==g){b=d-1|0;if(a.m9.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;}
let Lk=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.m9.length-b.m9.length|0;d:{k:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.m9.length)break c;f=c+e|0;if(f<0)break d;if(f>=a.m9.length)break d;g=a.m9.charCodeAt(f);if(e<0)break k;if(e>=b.m9.length)break k;if(g!=b.m9.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let ABN=(a,b)=>{return Lk(a,b,0);}
let Py=(a,b,c)=>{let d,e,f;d=a.m9.length-b.m9.length|0;if(c<d)d=c;d:{k:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.m9.length)break c;f=d+e|0;if(f<0)break d;if(f>=a.m9.length)break d;f=a.m9.charCodeAt(f);if(e<0)break k;if(e>=b.m9.length)break k;if(f!=b.m9.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let B1=(a,b,c)=>{let d,e,f;d=a.m9.length;e=BS(b,c);if(!e)return AQq;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return ABZ(a.m9.substring(b,c));f=new U;f.m$=1;f.m_=1;D(f);}
let Jy=(a,b)=>{return B1(a,b,a.m9.length);}
let PI=(a,b,c)=>{return B1(a,b,c);}
let Dn=(a,b)=>{let c,d,e,f;c=a.m9.length-b.m9.length|0;d=0;b:{a:{while(d<=c){e=0;while(true){if(e>=b.m9.length)return 1;f=d+e|0;if(f<0)break b;if(f>=a.m9.length)break b;f=a.m9.charCodeAt(f);if(e<0)break a;if(e>=b.m9.length)break a;if(f!=b.m9.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let MD=(a,b,c)=>{let d,e,f,g,h,i;d=new I;d.m8=H(16);e=a.m9.length-b.m9.length|0;f=0;a:{d:{k:while(true){if(f>e){b=B1(a,f,a.m9.length);g=d.m7;if(b===null)b=B(2);G(d,g,b);return W(d);}g=0;c:{while(g<b.m9.length){h=f+g|0;if(h<0)break d;if(h>=a.m9.length)break d;i=a.m9.charCodeAt(h);if(g<0)break k;if(g>=b.m9.length)break k;if(i!=b.m9.charCodeAt(g)){if(f<0)break a;if(f>=a.m9.length)break a;i=a.m9.charCodeAt(f);h=d.m7;Bh(d,h,h+1|0);d.m8.data[h]=i;break c;}g=g+1|0;}G(d,d.m7,c===null?B(2):c);f=f+(b.m9.length-1|0)|0;}f
=f+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let ZN=a=>{let b,c,d;b=0;c=a.m9.length-1|0;b:{while(true){if(b>c)break b;if(b<0)break;if(b>=a.m9.length)break;if(a.m9.charCodeAt(b)>32)break b;b=b+1|0;}d=new U;d.m$=1;d.m_=1;D(d);}c:{while(b<=c){if(c<0)break c;if(c>=a.m9.length)break c;if(a.m9.charCodeAt(c)>32)break;c=c+(-1)|0;}return B1(a,b,c+1|0);}d=new U;d.m$=1;d.m_=1;D(d);}
let Dp=a=>{return a;}
let WN=b=>{P();return b===null?B(2):b.l();}
let ABk=b=>{let c;P();c=new I;c.m8=H(16);K(c,c.m7,b,10);return W(c);}
let F7=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof M))return 0;c=b;return a.m9!==c.m9?0:1;}
let AAY=(a,b)=>{let c,$$je;b:{try{c=ABo(a,AGF(Dp(b)));}catch($$e){$$je=BG($$e);if($$je instanceof LM){break b;}else if($$je instanceof IF){break b;}else{throw $$e;}}return c;}b=new Lp;b.m$=1;b.m_=1;D(b);}
let ABo=(a,b)=>{let c,d,e,f,g,h,$$je;c=AZo(a.m9);d=c.data.length;e=new Jw;f=0+d|0;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=f;e.s$=0;e.ui=0;e.sS=c;b:{try{g=b.c6();Ev();e=Pv(TP(QW(g,E9),E9),e);break b;}catch($$e){$$je=BG($$e);if($$je instanceof GQ){e=$$je;}else{throw $$e;}}g=new M4;g.m$=1;g.m_=1;g.na=B(75);g.oY=e;D(g);}h=e.nc;if(!h&&e.nb==e.nt)return e.nQ;c=BI(e.nb-h|0);Pa(e,c,0,c.data.length);return c;}
let ARy=a=>{let b;b:{if(!a.n_){b=0;while(true){if(b>=a.m9.length)break b;a.n_=(31*a.n_|0)+a.m9.charCodeAt(b)|0;b=b+1|0;}}}return a.n_;}
let ZZ=(a,b)=>{return I7(G8(b,0),a,0);}
let Tw=(a,b,c)=>{return I7(G8(b,0),a,c);}
let Xs=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;b=PM(G8(b,0),a);d=new K_;d.m8=H(16);b.tF=0;e=b.rN.m9.length;b.wJ=e;f=b.pK;g=b.rN;h=b.tF;f.pN=0;f.t7=2;i=f.oj.data;j=0;k=i.length;if(j>k){b=new Bc;Bd(b);D(b);}while(j<k){l=j+1|0;i[j]=(-1);j=l;}i=f.n$.data;m=0;j=i.length;if(m>j){b=new Bc;Bd(b);D(b);}while(m<j){k=m+1|0;i[m]=(-1);m=k;}if(g!==null)f.rf=g;if(h>=0){f.pp=h;f.nN=e;}f.qV=f.pp;b.wQ=0;b.yl=null;f.t$=(-1);while(true){if(!H9(b)){c=b.rN;b=B1(c,b.wQ,c.m9.length);l=b.m9.length;Q$(d,d.m7,b,0,l);return W(d);}b.yD=ABW(b,
c);f=b.rN;j=b.wQ;g=b.pK;if(!g.pN){b=new BT;Cg(b);D(b);}if(0>=g.qD){b=new L;c=new I;Gj(c);K$(c,0);c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}f=B1(f,j,g.oj.data[0]);h=f.m9.length;Q$(d,d.m7,f,0,h);f=b.yD;G(d,d.m7,f);f=b.pK;if(!f.pN)break;if(0>=f.qD){b=new L;c=new I;Gj(c);K$(c,0);c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}b.wQ=f.oj.data[1];}b=new BT;Cg(b);D(b);}
let AVQ=()=>{let b;A4M=H(0);b=new M;P();b.m9="";AQq=b;AYJ=new Rm;}
let Gx=F(DV);
let I2=F(Gx);
let Yz=F(I2);
let EC=F();
function Fe(){EC.call(this);this.qy=0;}
let AGA=null;let FX=null;let Pb=(b,c)=>{let d;if(!(c>=2&&c<=36))c=10;d=new Bn;d.m8=H(20);return (K(d,d.m7,b,c)).l();}
let K4=(b,c)=>{if(b!==null)return TD(b,0,b.m9.length,c);b=new Cj;b.m$=1;b.m_=1;b.na=B(76);D(b);}
let TD=(b,c,d,e)=>{let f,g,h,i,j,k,l,m;if(c==d){b=new Cj;b.m$=1;b.m_=1;b.na=B(77);D(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.m9.length){c:{switch(b.m9.charCodeAt(c)){case 43:g=c+1|0;break c;case 45:f=1;g=c+1|0;break c;default:}g=c;}h=0;if(g==d){b=new Cj;b.m$=1;b.m_=1;D(b);}g:{while(g<d){i=g+1|0;if(g<0)break g;if(g>=b.m9.length)break g;j=Jd(b.m9.charCodeAt(g));if(j<0){k=new Cj;b=B1(b,c,d);if(b===null)b=B(2);l=new I;l.m8=H(16);G(l,l.m7,B(78));G(l,l.m7,b);b=W(l);k.m$=1;k.m_=1;k.na=b;D(k);}if(j>=e){k=new Cj;m=B1(b,
c,d);if(m===null)m=B(2);b=new I;b.m8=H(16);G(b,b.m7,B(79));K(b,b.m7,e,10);G(b,b.m7,B(72));G(b,b.m7,m);b=W(b);k.m$=1;k.m_=1;k.na=b;D(k);}h=Cu(e,h)+j|0;if(h<0){if(i==d&&h==(-2147483648)&&f)return (-2147483648);k=new Cj;m=B1(b,c,d);if(m===null)m=B(2);b=new I;b.m8=H(16);Ed(b,b.m7,B(80));F1(b,m);LY(k,CD(b));D(k);}g=i;}if(f)h= -h|0;return h;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new Cj;k=new I;k.m8=H(16);G(k,k.m7,B(81));K(k,k.m7,e,10);k=W(k);b.m$=1;b.m_=1;b.na=k;D(b);}
let CE=b=>{if(b!==null)return TD(b,0,b.m9.length,10);b=new Cj;b.m$=1;b.m_=1;b.na=B(76);D(b);}
let C2=b=>{let c;if(b>=(-128)&&b<=127){FN();return FX.data[b+128|0];}c=new Fe;c.qy=b;return c;}
let FN=()=>{let b,c,d,e,f;b:{if(FX===null){b=Bo(Fe,256);c=b.data;FX=b;d=0;e=c.length;while(true){if(d>=e)break b;f=new Fe;f.qy=d-128|0;c[d]=f;d=d+1|0;}}}}
let DI=a=>{return a.qy;}
let Hd=a=>{return J(a.qy);}
let KK=a=>{return a.qy;}
let AWv=a=>{let b,c;b=a.qy;c=new Bn;c.m8=H(20);return (K(c,c.m7,b,10)).l();}
let G2=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
let EM=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
let AUB=()=>{AGA=Bw(D5);}
function Bn(){let a=this;C.call(a);a.m8=null;a.m7=0;}
let A6$=()=>{let a=new Bn();Gj(a);return a;}
let A6_=a=>{let b=new Bn();KS(b,a);return b;}
let Gj=a=>{a.m8=H(16);}
let KS=(a,b)=>{a.m8=H(b);}
let LL=(a,b)=>{G(a,a.m7,b===null?B(2):b.l());return a;}
let Mk=(a,b)=>{return a.k(a.m7,b);}
let G=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.m7){if(c===null)c=B(2);else if(c.m9.length?0:1)return a;a.dk(a.m7+c.m9.length|0);d=a.m7-1|0;while(d>=b){a.m8.data[d+c.m9.length|0]=a.m8.data[d];d=d+(-1)|0;}a.m7=a.m7+c.m9.length|0;e=0;r:{while(e<c.m9.length){f=a.m8;d=b+1|0;if(e<0)break r;if(e>=c.m9.length)break r;f.data[b]=c.m9.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let K$=(a,b)=>{return K(a,a.m7,b,10);}
let K=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}d:{if(Gd(c,d)<0){if(e)Bh(a,b,b+1|0);else{Bh(a,b,b+2|0);f=a.m8.data;g=b+1|0;f[b]=45;b=g;}a.m8.data[b]=IZ(c,d);}else{h=1;i=1;j=Ei((-1),d);o:{while(true){k=Cu(h,d);if(Gd(k,c)>0){k=h;break o;}i=i+1|0;if(Gd(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bh(a,b,b+i|0);if(e)e=b;else{f=a.m8.data;e=b+1|0;f[b]=45;}while(true){if(!k)break d;f=a.m8.data;b=e+1|0;f[e]=IZ(Ei(c,k),d);c=A12(c,k);k=Ei(k,d);e=b;}}}return a;}
let AEy=(a,b)=>{Rb(a,a.m7,b,10);return a;}
let Rb=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=1;if(Go(c,Q)){e=0;c=Hk(c);}d:{f=J(d);if(EK(c,f)<0){if(e)Bh(a,b,b+1|0);else{Bh(a,b,b+2|0);g=a.m8.data;h=b+1|0;g[b]=45;b=h;}a.m8.data[b]=IZ(T(c),d);}else{i=1;j=J(1);k=Er(J(-1),f);o:{while(true){l=V(j,f);if(EK(l,c)>0){l=j;break o;}i=i+1|0;if(EK(l,k)>0)break;j=l;}}if(!e)i=i+1|0;Bh(a,b,b+i|0);if(e)e=b;else{g=a.m8.data;e=b+1|0;g[b]=45;}while(true){if(CZ(l,Q))break d;g=a.m8.data;b=e+1|0;g[e]=IZ(T((Er(c,l))),d);c=Vl(c,l);l=Er(l,f);e=b;}}}return a;}
let El=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BS(c,0.0);if(!d){if(1.0/c===Infinity){Bh(a,b,b+3|0);e=a.m8.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bh(a,b,b+4|0);e=a.m8.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bh(a,b,b+3|0);e=a.m8.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bh(a,b,b+8|0);d=b;}else{Bh(a,b,b+9|0);e=a.m8.data;d=b+1|0;e[b]=45;}e=a.m8.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AMU;AAT(c,f);d=f.yR;g=f.yA;h=f.AM;i=1;j=1;if(h)j=2;k=9;l=AU6(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Jz(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bh(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.m8.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.m8.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;p
=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.m8.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.m8.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
let Pk=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BS(c,0.0);if(!d){if(1.0/c===Infinity){Bh(a,b,b+3|0);e=a.m8.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bh(a,b,b+4|0);e=a.m8.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bh(a,b,b+3|0);e=a.m8.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bh(a,b,b+8|0);d=b;}else{Bh(a,b,b+9|0);e=a.m8.data;d=b+1|0;e[b]=45;}e=a.m8.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+
1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=ALd;Y6(c,f);g=f.zg;h=f.yh;i=f.AA;j=1;k=1;if(i)k=2;l=18;m=ASA(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Jz(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bh(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.m8.data;k=b+1|0;e[b]=45;}p=E(1569325056, 23283064);if(o){e=a.m8.data;b=k+1|0;e[k]=48;k=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(Gp(p,Q))d=0;else{d=T(CF(g,p));g=CX(g,p);}e=a.m8.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=CF(p,J(10));q=q+1|0;}if(h){e=a.m8.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
let AU6=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
let ASA=b=>{let c,d,e,f,g;c=J(1);d=0;e=16;f=AF6.data;g=f.length-1|0;while(g>=0){if(CZ(CX(b,V(c,f[g])),Q)){d=d|e;c=V(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
let Qy=(a,b)=>{return a.dw(a.m7,b);}
let Ed=(a,b,c)=>{G(a,b,c===null?B(2):c.l());return a;}
let Oj=(a,b)=>{let c,d,e,f,g,h;c=a.m8.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=H(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.m8=g;}
let W=a=>{let b,c,d,e,f;b=new M;c=a.m8;d=c.data;e=a.m7;P();f=d.length;if(e>=0&&e<=(f-0|0)){b.m9=O(c.data,0,e);return b;}b=new L;b.m$=1;b.m_=1;D(b);}
let Yo=a=>{return a.m7;}
let UP=(a,b)=>{let c;if(b>=0&&b<a.m7)return a.m8.data[b];c=new L;c.m$=1;c.m_=1;D(c);}
let AAR=(a,b,c,d,e)=>{let f,g;if(d<=e&&e<=c.m9.length&&d>=0){Bh(a,b,(b+e|0)-d|0);d:{while(d<e){f=a.m8;g=b+1|0;if(d<0)break d;if(d>=c.m9.length)break d;f.data[b]=c.m9.charCodeAt(d);d=d+1|0;b=g;}return a;}c=new U;c.m$=1;c.m_=1;D(c);}c=new L;c.m$=1;c.m_=1;D(c);}
let KM=(a,b,c,d,e)=>{let f,g,h,i;Bh(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.m8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let Tn=(a,b)=>{let c,d,e,f;if(b>=0){c=a.m7;if(b<c){c=c-1|0;a.m7=c;while(b<c){d=a.m8.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new U;f.m$=1;f.m_=1;D(f);}
let AEx=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BS(b,c);if(d<=0){e=a.m7;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.m7=e-(c-b|0)|0;g=0;while(g<f){h=a.m8.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new U;i.m$=1;i.m_=1;D(i);}
let Bh=(a,b,c)=>{let d,e,f,g;d=a.m7;e=d-b|0;a.dk((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.m8.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.m7=a.m7+(c-b|0)|0;}
let Ia=F(0);
let I=F(Bn);
let E6=()=>{let a=new I();AW6(a);return a;}
let AW6=a=>{a.m8=H(16);}
let F1=(a,b)=>{G(a,a.m7,b===null?B(2):b.l());return a;}
let BO=(a,b)=>{G(a,a.m7,b);return a;}
let EJ=(a,b)=>{K(a,a.m7,b,10);return a;}
let Eb=(a,b)=>{let c;c=a.m7;Bh(a,c,c+1|0);a.m8.data[c]=b;return a;}
let AE6=(a,b,c)=>{G(a,b,c===null?B(2):c.l());return a;}
let Iz=(a,b,c)=>{Bh(a,b,b+1|0);a.m8.data[b]=c;return a;}
let AEv=(a,b,c)=>{AEx(a,b,c);return a;}
let Gy=(a,b,c)=>{G(a,b,c);return a;}
let Io=(a,b)=>{a.m7=b;}
let ACG=(a,b,c)=>{let d,e,f,g;if(b<=c&&b>=0&&c<=a.m7){d=new M;e=a.m8;f=e.data;c=c-b|0;P();g=f.length;if(b>=0&&c>=0&&c<=(g-b|0)){d.m9=O(e.data,b,c);return d;}d=new L;Bd(d);D(d);}d=new L;d.m$=1;d.m_=1;D(d);}
let AOG=(a,b,c,d,e)=>{let f,g,h,i;Bh(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.m8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AKW=(a,b,c,d)=>{let e,f,g,h,i;e=a.m7;Bh(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.m8.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let CM=a=>{return a.m7;}
let CD=a=>{return W(a);}
let AOU=(a,b)=>{Oj(a,b);}
let APL=(a,b,c)=>{Bh(a,b,b+1|0);a.m8.data[b]=c;return a;}
let Dm=(a,b,c)=>{G(a,b,c);return a;}
let IJ=F(I2);
let ABz=F(IJ);
let A7a=a=>{let b=new ABz();AJe(b,a);return b;}
let AJe=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let X5=F(IJ);
let A7b=a=>{let b=new X5();AJK(b,a);return b;}
let AJK=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
function Ys(){let a=this;C.call(a);a.Ac=0;a.C9=0;a.zC=0;a.AX=null;a.C2=0;a.C_=null;a.Aq=0;a.Dj=null;a.wl=0;a.tw=0;a.yB=0;a.Ah=0;a.Bx=0;a.Bb=0;a.Cx=0;a.BY=0;a.B7=0;a.z1=0;a.xh=0;}
let A5a=a=>{let b=new Ys();AHE(b,a);return b;}
let ACE=a=>{return !a.wl&&!a.tw?1:0;}
let AHE=(a,b)=>{a.Ac=0;a.C9=1;a.zC=0;a.C2=1;a.C_=B(43);a.Aq=0;a.wl=(-1);a.tw=(-1);a.yB=0;a.Ah=0;a.Bx=0;a.Bb=0;a.Cx=0;a.BY=0;a.B7=0;a.z1=0;a.xh=1;a.Dj=b;}
let O6=F(0);
function LI(){let a=this;C.call(a);a.sd=null;a.u$=null;a.Bv=null;a.B2=null;a.Er=null;a.qi=null;a.ww=null;a.wG=null;a.wb=null;a.rX=null;a.uc=null;a.x6=0;a.z2=0;a.DG=null;a.t0=0;a.wf=null;a.DZ=null;a.DJ=null;a.vB=null;a.Ak=null;a.sk=null;}
let KD=null;let A7c=(a,b)=>{let c=new LI();WS(c,a,b);return c;}
let WS=(a,b,c)=>{let d;d=new Cf;d.og=1;d.np=Bo(C,4);a.wb=d;Jp();a.uc=AEF;a.x6=(-1);a.z2=1;a.t0=1;a.DZ=FL(51,0.800000011920929);d=new Cf;d.og=1;d.np=Bo(C,16);a.vB=d;d=new Cf;d.og=1;d.np=Bo(C,16);a.Ak=d;Ju();a.rX=Jc;a.qi=c;a.ww=b;AC2(a);}
let AC2=a=>{let b,c,d,e,f,g,h,i;KD=AQL();Lq();En(JY,B(82),B(43));b=Bk(KD.userAgent);Lq();En(JY,B(83),b);if(KD.windows?1:0){Lq();En(JY,B(84),B(85));}else if(KD.macOS?1:0)Sb(B(84),B(86));else if(!(KD.linux?1:0))Sb(B(84),B(87));else Sb(B(84),B(7));c=new Of;d=a.qi.Aq;c.CB=0;c.Dg=0;c.pL=1;c.pL=d;JN=c;Ju();b=Bk(Jc.qj.location.href);a.sk=b;if(Dn(b,B(88))){c=MD(a.sk,B(89),B(43));a.sk=c;a.sk=MD(c,B(90),B(43));}e=EL(a.sk,63,0);if(e>=0)a.sk=B1(a.sk,0,e);c=a.qi;JI=c.C9;b=A3f(c);a.sd=b;c=A2v(a.sk,b.nI,a);a.wf=c;d=a.qi.C2;f
=JN;g=c.wK;h=new I;h.m8=H(16);i=h.m7;if(g===null)g=B(2);G(h,i,g);G(h,h.m7,B(91));h=W(h);g=new I;g.m8=H(16);i=g.m7;if(h===null)h=B(2);G(g,i,h);G(g,g.m7,B(92));h=W(g);g=new PT;g.un=c;g.AW=B(92);g.AS=d;U5(f,1,h,g);a.u$=AZu(a.sd.nI);c=new SC;c.xz=a.wf;a.Bv=c;c=new R5;c.Em=A3D(16,0.75);a.B2=c;a.DG=new P8;a.DJ=A2y();if(a.qi.zC)AAi(a);ED=a;c=a.sd;Bi=c;b=c.tV;Cn=b;Bm=b;GE=c.B3;Bx=a.u$;QI=a.Bv;A3i=a.B2;c=A48();a.Er=c;A15=c;c=Yw(a.rX);g=A3M(a);c.addEventListener("visibilitychange",B$(g,"handleEvent"));ADy(a.rX,a);if(ACE(a.qi))Ww(a.rX,
B(93),AZS(a));}
let Y0=a=>{let b,c,d,e,f,g,h,$$je;b=a.uc;b:{try{a:{A2R();switch(ASY.data[ADx(b)]){case 1:c=Y9(AGf());if(!c){Jp();a.uc=QX;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break a;}e=a.wf.y8;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=E6();Eb(EJ(g,f),37);h=CD(g);d.setProperty("width",B0(h));}}break a;case 2:break;default:break a;}if(a.ww!==null){b=a.wG;if(b!==null){AAH(b);ABM(a.wG);}Xh(a.u$,null);Qo(a.u$);Xm(a.vB);a.wG
=a.ww;a.ww=null;Jp();a.uc=UM;a.sd.xC=Q;}Vh(a,a.wG);}}catch($$e){$$je=BG($$e);if($$je instanceof DV){h=$$je;break b;}else{throw $$e;}}b=a.rX;b.wp=a;requestAnimationFrame(B$(b,"onAnimationFrame"));return;}if(ES===null){d=new CP;d.oK=Jo;b=new I;b.m8=H(16);d.nV=b;d.oI=H(32);d.oQ=0;CO();d.oO=CW;ES=d;}Kw(h,ES);D(h);}
let Vh=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;WH(a.sd);c=Bi.nI.width;d=Bi.nI.height;e=0;f=a.uc;Jp();if(f===UM){a.uc=QX;AD1(b);e=1;}if(!(c==a.x6&&d==a.z2&&!e)){a.x6=c;a.z2=d;Cn.dY(0,0,c,d);g=b.nx;if(g!==null)g.dZ(c,d);}g=a.Ak;f=a.vB;h=f.np;d=f.ng;i=g.np;j=i.data;k=g.ng;c=k+d|0;if(c<=j.length)l=i;else{m=8;if(m<=c)m=c;k=k*1.75|0;if(m>k)k=m;l=i.constructor;if(l===null)f=null;else{f=l.classObject;if(f===null){f=new Ce;f.nA=l;n=f;l.classObject=n;}}l=f.nA.$meta.item;if(l===null)n=null;else{n=l.classObject;if(n===
null){n=new Ce;n.nA=l;o=n;l.classObject=o;}}if(n===null){b=new C0;Bd(b);D(b);}if(n===Bw(Cc)){b=new Bc;Bd(b);D(b);}if(k<0){b=new DS;Bd(b);D(b);}l=Ex(n.nA,k);f=l.data;e=g.ng;k=f.length;if(e<k)k=e;EZ(i,0,l,0,k);g.np=l;}EZ(h,0,l,g.ng,d);g.ng=c;g=a.vB;h=g.np;e=0;p=g.ng;f=null;if(e>p){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<p){i=h.data;d=e+1|0;i[e]=f;e=d;}g.ng=0;p=0;while(true){g=a.Ak;e=g.ng;d=BS(p,e);if(d>=0){h=g.np;p=0;f=null;if(p>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(p<e){i=h.data;d=p+1|0;i[p]=f;p=d;}g.ng=0;g=a.sd;q
=Z(g.xC,J(1));g.xC=q;if(W1(q,J(60)))Zb(b);Qo(a.u$);return;}if(d>=0)break;g.np.data[p].cV();p=p+1|0;}f=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,p,10);G(b,b.m7,B(36));K$(b,g.ng);Jx(f,W(b));D(f);}
let AAi=a=>{let b,c,d,e,f;b=a.wf;c=new NK;c.Dv=a;d=JN;b=b.wK;e=new I;e.m8=H(16);f=e.m7;if(b===null)b=B(2);G(e,f,b);G(e,e.m7,B(91));b=W(e);e=new I;e.m8=H(16);f=e.m7;if(b===null)b=B(2);G(e,f,b);G(e,e.m7,B(94));Nf(d,1,W(e),c);}
let TB=F(0);
function Mg(){C.call(this);this.nx=null;}
let ABM=a=>{return;}
let AAH=a=>{return;}
let Zb=a=>{let b;b=a.nx;if(b!==null)b.d2(Bi.ze);}
let AED=(a,b)=>{a.nx=b;if(b!==null){b.d3();a.nx.dZ(Bi.nI.width,Bi.nI.height);}}
function Rj(){let a=this;Mg.call(a);a.n2=null;a.ny=0;a.oX=null;a.oU=null;}
let AD1=a=>{let b,c,d,e,f,g,h;ED.t0=1;b=new Fj;c=QI;d=new Kf;e=c.xz;Md();Lw(d,e,B(95),TT);Yg(b,AZa(d,0),null,1);a.oX=b;Fc();c=YW;f=b.um.z3;f.ox=c.ox;f.ow=c.ow;f.ov=c.ov;f.ou=c.ou;c=new MP;ADd();OT(c,1000,null);a.oU=c;g=Bo(LJ,18);h=g.data;c=new P9;c.tb=Dy(512);c.sj=Q;c.uL=a;h[0]=c;c=new QO;c.sK=Dy(512);c.rC=Q;c.vX=a;h[1]=c;c=new PB;c.sP=Dy(512);c.sc=Q;c.u3=a;h[2]=c;c=new Uc;c.te=Dy(512);c.rB=Q;c.us=a;h[3]=c;c=new Nr;c.so=Dy(512);c.rn=Q;c.u_=a;h[4]=c;c=new Sq;c.sn=Dy(512);c.sh=Q;c.vb=a;h[5]=c;c=new PJ;c.sv=Dy(512);c.r4
=Q;c.u1=a;h[6]=c;c=new OK;c.tl=Dy(512);c.sg=Q;c.uu=a;h[7]=c;c=new Ss;c.sD=Dy(512);c.r8=Q;c.vY=a;h[8]=c;c=new QZ;c.ss=Dy(512);c.sa=Q;c.vl=a;h[9]=c;c=new PC;c.s0=Dy(512);c.rL=Q;c.vy=a;h[10]=c;c=new TE;c.sz=Dy(512);c.rt=Q;c.uB=a;h[11]=c;c=new SU;c.su=Dy(512);c.rG=Q;c.u2=a;h[12]=c;h[13]=A2s(a);h[14]=AZi(a);h[15]=A1o(a);h[16]=A3K(a);h[17]=A0v(a);a.n2=g;a.ny=0;AED(a,h[0]);}
let ACX=F();
let Bq=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return B(45);d=1<<c;e=d-1|0;f=(((32-G2(b)|0)+c|0)-1|0)/c|0;g=H(f);h=g.data;i=Cu(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=IZ((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new M;P();l.m9=O(g.data,0,h.length);return l;}
let FH=F(BH);
let AEF=null;let UM=null;let QX=null;let AUH=null;let Jp=()=>{Jp=Ba(FH);APt();}
let APt=()=>{let b,c,d;b=new FH;Jp();b.ni=B(96);b.nf=0;AEF=b;c=new FH;c.ni=B(97);c.nf=1;UM=c;d=new FH;d.ni=B(98);d.nf=2;QX=d;AUH=N(FH,[b,c,d]);}
let NO=F(0);
let Cp=F(0);
let Qm=F(0);
function Me(){let a=this;C.call(a);a.qj=null;a.wp=null;}
let Jc=null;let Ju=()=>{Ju=Ba(Me);AMH();}
let Yw=a=>{return a.qj.document;}
let ADy=(a,b)=>{a.wp=b;requestAnimationFrame(B$(a,"onAnimationFrame"));}
let Ww=(a,b,c)=>{let d;d=D6(c,"handleEvent");a.qj.addEventListener(B0(b),B$(d,"handleEvent"));}
let AMH=()=>{let b;b=new Me;Ju();b.qj=window;Jc=b;}
let ASe=(a,b)=>{let c;b;c=a.wp;a.wp=null;Y0(c);}
let ABQ=F();
let P2=F();
let GY=null;let PN=()=>{PN=Ba(P2);ARg();}
let AA$=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;PN();if(b===null){d=new Bc;d.m$=1;d.m_=1;d.na=B(34);D(d);}d=null;e=0;f=b.ng;while(e<f){if(e>=b.ng){g=new L;d=new I;d.m8=H(16);G(d,d.m7,B(35));K(d,d.m7,e,10);G(d,d.m7,B(36));c=b.ng;K(d,d.m7,c,10);b=W(d);g.m$=1;g.m_=1;g.na=b;D(g);}k:{h=b.np.data[e];if(h!==null){if(d===null){g=GY;i=h.constructor;if(i===null)j=null;else{j=i.classObject;if(j===null){j=new Ce;j.nA=i;k=j;i.classObject=k;}}l=CR(g,j);d=l<0?null:g.o_.data[l];if(d===null)break k;}g=d.pJ;if(g.ng<d.rV){CT(g,h);l=d.t3;m
=d.pJ.ng;if(l>m)m=l;d.t3=m;if(E5(h,DT))h.B();}else if(E5(h,DT))h.B();if(!c)d=null;}}e=e+1|0;}}
let ARg=()=>{GY=FL(51,0.800000011920929);}
function Kq(){EC.call(this);this.xZ=0.0;}
let AME=null;let Hs=a=>{return a.xZ;}
let GF=b=>{let c,d,e,f,g,h,i,j,k,l,m;if(b.m9.length?0:1){b=new Cj;b.m$=1;b.m_=1;D(b);}c=0;d=b.m9.length;while(c>=0&&c<b.m9.length){if(b.m9.charCodeAt(c)>32){while(true){e=d-1|0;if(e<0)break;if(e>=b.m9.length)break;if(b.m9.charCodeAt(e)>32){f=0;if(c>=0&&c<b.m9.length){if(b.m9.charCodeAt(c)==45){c=c+1|0;f=1;}else if(Dc(b,c)==43)c=c+1|0;if(c==d){b=new Cj;Bd(b);D(b);}q:{e=Dc(b,c);g=0;h=(-1);i=100000000;j=0;if(e!=46){j=1;if(e>=48&&e<=57){v:{while(c<d){if(Dc(b,c)!=48)break v;c=c+1|0;}}while(c<d){k=Dc(b,c);if(k<48)break q;if
(k>57)break q;if(i>0){g=g+Cu(i,k-48|0)|0;i=Ei(i,10);}h=h+1|0;c=c+1|0;}}else{b=new Cj;Bd(b);D(b);}}}if(c<d&&Dc(b,c)==46){c=c+1|0;j:{while(true){if(c>=d)break j;e=Dc(b,c);k=BS(e,48);if(k<0)break j;if(e>57)break;if(!g&&!k)h=h+(-1)|0;else if(i>0){g=g+Cu(i,e-48|0)|0;i=Ei(i,10);}c=c+1|0;j=1;}}if(!j)D(Ud());}if(c<d){k=Dc(b,c);if(k!=101&&k!=69)D(Ud());k=c+1|0;l=0;if(k==d)D(Ud());if(Dc(b,k)==45){k=k+1|0;l=1;}else if(Dc(b,k)==43)k=k+1|0;m=0;c=0;w:{while(true){if(k>=d)break w;e=Dc(b,k);if(e<48)break w;if(e>57)break;m=
(10*m|0)+(e-48|0)|0;c=1;k=k+1|0;}}if(!c)D(Ud());if(l)m= -m|0;h=h+m|0;}return AEU(g,h,f);}b=new U;b.m$=1;b.m_=1;D(b);}d=d+(-1)|0;}b=new U;b.m$=1;b.m_=1;D(b);}c=c+1|0;if(c==d){b=new Cj;b.m$=1;b.m_=1;D(b);}}b=new U;b.m$=1;b.m_=1;D(b);}
let ASw=()=>{AME=Bw(E3);}
function Kc(){let a=this;C.call(a);a.or=null;a.oc=0;a.xJ=0;}
let OR=(a,b)=>{let c,d,e,f,g;c=a.or;d=c.data;e=a.oc;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=Cq(f);g=d.data.length;if(e<g)g=e;Ci(c,0,d,0,g);a.or=d;}c=d.data;f=a.oc;a.oc=f+1|0;c[f]=b;}
let S$=(a,b,c,d)=>{let e,f;if((c+d|0)<=b.oc){KR(a,b.or,c,d);return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(99));K(f,f.m7,c,10);G(f,f.m7,B(51));K(f,f.m7,d,10);G(f,f.m7,B(52));c=b.oc;K(f,f.m7,c,10);b=W(f);e.m$=1;e.m_=1;e.na=b;D(e);}
let KR=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.or;f=e.data;g=a.oc;h=g+d|0;if(h<=f.length)f=e;else{if(8>h)h=8;i=g*1.75|0;if(h>i)i=h;f=Cq(i);j=f.data.length;if(g<j)j=g;Ci(e,0,f,0,j);a.or=f;}Ci(b,c,f,a.oc,d);a.oc=a.oc+d|0;}
let O4=(a,b)=>{let c,d;if(b<a.oc)return a.or.data[b];c=new L;d=new I;d.m8=H(16);G(d,d.m7,B(35));K(d,d.m7,b,10);G(d,d.m7,B(36));b=a.oc;K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}
let UF=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.oc;if(c>=d){e=new L;f=new I;f.m8=H(16);G(f,f.m7,B(53));K(f,f.m7,c,10);G(f,f.m7,B(36));b=a.oc;K(f,f.m7,b,10);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}if(b<=c){g=(c-b|0)+1|0;h=d-g|0;if(a.xJ){i=a.or;c=b+g|0;Ci(i,c,i,b,d-c|0);}else{j=c+1|0;if(h>j)j=h;i=a.or;Ci(i,j,i,b,d-j|0);}a.oc=h;return;}e=new L;f=new I;f.m8=H(16);G(f,f.m7,B(54));K(f,f.m7,b,10);G(f,f.m7,B(55));K(f,f.m7,c,10);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}
let PD=a=>{let b;if(a.oc)return a.or.data[0];b=new BT;b.m$=1;b.m_=1;b.na=B(41);D(b);}
let ACT=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.m8=H(16);G(d,d.m7,B(56));K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}e=a.oc;f=e+b|0;g=a.or;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=Cq(h);b=i.data.length;if(e<b)b=e;Ci(g,0,i,0,b);a.or=i;}return a.or;}
let YS=F();
let AVe=b=>{return Math.sin(b);}
let I$=b=>{return Math.log(b);}
let Hy=b=>{return Math.sqrt(b);}
let Jk=b=>{return Math.ceil(b);}
let P7=b=>{return Math.floor(b);}
let JQ=(b,c)=>{return Math.pow(b,c);}
let Bf=()=>{return Math.random();}
let Jz=(b,c)=>{if(b>c)c=b;return c;}
let ACS=(b,c)=>{return Math.min(b,c);}
let AVo=(b,c)=>{return ACS(b,c);}
let Kp=(b,c)=>{return Math.max(b,c);}
let AI3=(b,c)=>{return Kp(b,c);}
let K3=b=>{return Math.abs(b);}
let Fy=b=>{return Math.sign(b);}
function DK(){let a=this;C.call(a);a.of=null;a.os=null;a.qJ=0.0;a.w6=0.0;a.xN=0.0;}
let A7d=()=>{let a=new DK();X1(a);return a;}
let X1=a=>{let b;b=new Cf;b.og=1;b.np=Bo(C,16);a.of=b;b=new Kc;b.xJ=1;b.or=Cq(16);a.os=b;}
let NZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.of;d=b.of;e=d.np;f=d.ng;g=c.np;h=g.data;i=c.ng;j=i+f|0;if(j<=h.length)d=g;else{k=8;if(k<=j)k=j;i=i*1.75|0;if(k>i)i=k;l=g.constructor;if(l===null)d=null;else{d=l.classObject;if(d===null){d=new Ce;d.nA=l;m=d;l.classObject=m;}}l=Ej(d);if(l===null){b=new C0;Bd(b);D(b);}if(l===Bw(Cc)){b=new Bc;Bd(b);D(b);}if(i<0){b=new DS;Bd(b);D(b);}d=Ex(l.nA,i);l=d.data;k=c.ng;n=l.length;if(k<n)n=k;EZ(g,0,d,0,n);c.np=d;}EZ(e,0,d,c.ng,f);c.ng=j;c=a.os;o=c.oc;if(o<=0?0:1)c.oc=o-1|
0;b=b.os;KR(c,b.or,0,b.oc);}
let ZG=a=>{let b,c,d,e,f,g,h;b=a.of;c=b.np;d=0;e=b.ng;f=null;if(d>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.ng=0;a.os.oc=0;}
let N8=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;c=a.of;d=c.ng;b.m8=H(d+32|0);e=0;while(true){if(e>=d){G(b,b.m7,B(59));f=a.qJ;El(b,b.m7,f);G(b,b.m7,B(59));f=a.w6;El(b,b.m7,f);G(b,b.m7,B(59));f=a.xN;El(b,b.m7,f);c=new M;g=b.m8;h=g.data;d=b.m7;P();i=h.length;if(d>=0&&d<=(i-0|0)){c.m9=O(g.data,0,d);return c;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}if(e>=c.ng)break;i=c.np.data[e].rA&65535;j=b.m7;Bh(b,j,j+1|0);b.m8.data[j]=i;e=e+1|0;}k=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,e,10);G(b,b.m7,B(36));e=c.ng;K(b,b.m7,e,
10);c=new M;g=b.m8;h=g.data;d=b.m7;P();i=h.length;if(d>=0&&d<=(i-0|0)){c.m9=O(g.data,0,d);k.m$=1;k.m_=1;k.na=c;D(k);}b=new L;Bd(b);D(b);}
function D7(){let a=this;C.call(a);a.oi=null;a.nR=0;a.pX=0;}
let FU=(a,b)=>{let c,d,e,f,g;c=a.oi;d=c.data;e=a.nR;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=R(f);g=d.data.length;if(e<g)g=e;Ci(c,0,d,0,g);a.oi=d;}c=d.data;f=a.nR;a.nR=f+1|0;c[f]=b;}
let AEw=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.oi;e=d.data;f=a.nR;if((f+1|0)<e.length)g=d;else{h=f*1.75|0;if(8>h)h=8;g=R(h);i=g.data.length;if(f<i)i=f;Ci(d,0,g,0,i);a.oi=g;}e=g.data;j=a.nR;e[j]=b;e[j+1|0]=c;a.nR=j+2|0;}
let GK=(a,b)=>{let c,d;if(b<a.nR)return a.oi.data[b];c=new L;d=new I;d.m8=H(16);G(d,d.m7,B(35));K(d,d.m7,b,10);G(d,d.m7,B(36));b=a.nR;K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}
let JT=(a,b,c)=>{let d,e;if(b<a.nR){a.oi.data[b]=c;return;}d=new L;e=new I;e.m8=H(16);G(e,e.m7,B(35));K(e,e.m7,b,10);G(e,e.m7,B(36));b=a.nR;K(e,e.m7,b,10);e=W(e);d.m$=1;d.m_=1;d.na=e;D(d);}
let QM=a=>{return a.oi.data[a.nR-1|0];}
let ABg=(a,b)=>{let c,d,e,f,g,h,i;if(b<0){c=new Bc;d=new I;d.m8=H(16);G(d,d.m7,B(56));K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}e=a.nR;f=e+b|0;g=a.oi;if(f>g.data.length){if(8>f)f=8;h=e*1.75|0;if(f>h)h=f;i=R(h);b=i.data.length;if(e<b)b=e;Ci(g,0,i,0,b);a.oi=i;}return a.oi;}
let APs=a=>{let b,c,d,e,f,g,h;if(a.pX){b=a.oi;c=1;d=0;e=a.nR;while(d<e){f=b.data;c=(c*31|0)+f[d]|0;d=d+1|0;}return c;}g=a;if(!g.$id$){h=Fb();g.$id$=h;}return a.$id$;}
let AWc=(a,b)=>{let c,d,e,f,g,h;if(b===a)return 1;if(!a.pX)return 0;if(!(b instanceof D7))return 0;c=b;if(!c.pX)return 0;d=a.nR;if(d!=c.nR)return 0;e=a.oi;f=c.oi;g=0;while(g<d){h=f.data;if(e.data[g]!=h[g])return 0;g=g+1|0;}return 1;}
let AO5=a=>{let b,c,d,e,f,g,h,i;if(!a.nR)return B(58);b=a.oi;c=new JF;d=H(32);e=d.data;c.n4=d;f=c.nL;if(f==e.length)Dr(c,f+1|0);b=b.data;e=c.n4.data;g=c.nL;c.nL=g+1|0;e[g]=91;N4(c,b[0],0,48);h=1;while(h<a.nR){i=B(59).m9.length;f=c.nL+i|0;if(f>c.n4.data.length)Dr(c,f);H4(B(59),0,i,c.n4,c.nL);c.nL=f;N4(c,b[h],0,48);h=h+1|0;}f=c.nL;if(f==c.n4.data.length)Dr(c,f+1|0);c:{b=c.n4;e=b.data;g=c.nL;f=g+1|0;c.nL=f;e[g]=93;if(!f)c=B(43);else{c=new M;P();g=e.length;if(f<0)break c;if(f>(g-0|0))break c;c.m9=O(b.data,0,f);}return c;}c
=new L;c.m$=1;c.m_=1;D(c);}
let L8=F(0);
let Lc=F();
let F6=F(0);
function JE(){let a=this;Lc.call(a);a.rv=0;a.pj=null;a.xL=0;a.v5=0.0;a.sM=0;}
let A3D=(a,b)=>{let c=new JE();AWS(c,a,b);return c;}
let Ko=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
let AWS=(a,b,c)=>{let d,e,f;if(b>=0&&c>0.0){b=Ko(b);a.rv=0;d=Bo(F2,b);e=d.data;a.pj=d;a.v5=c;a.sM=e.length*c|0;return;}f=new Bc;f.m$=1;f.m_=1;D(f);}
let XK=(a,b,c,d)=>{let e,f;e=a.pj.data[c];while(e!==null){if(e.rW==d){f=e.pG;if(b!==f&&!b.cG(f)?0:1)break;}e=e.pP;}return e;}
let Ki=(a,b,c)=>{let d,e,f,g,h,i;if(b===null){d=a.pj.data;e=d[0];while(e!==null&&e.pG!==null){e=e.pP;}if(e===null){a.xL=a.xL+1|0;f=null;e=new F2;b=null;e.pG=f;e.qg=b;e.rW=0;e.pP=d[0];d[0]=e;g=a.rv+1|0;a.rv=g;if(g>a.sM)PZ(a,d.length);}}else{h=b.cF();d=a.pj.data;i=h&(d.length-1|0);e=d[i];while(e!==null){if(e.rW==h){f=e.pG;if(b!==f&&!b.cG(f)?0:1)break;}e=e.pP;}if(e===null){a.xL=a.xL+1|0;e=new F2;f=null;e.pG=b;e.qg=f;e.rW=h;d=a.pj.data;e.pP=d[i];d[i]=e;g=a.rv+1|0;a.rv=g;if(g>a.sM)PZ(a,d.length);}}f=e.qg;e.qg=c;return f;}
let PZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Ko(!b?1:b<<1);d=Bo(F2,c);e=d.data;f=0;c=c-1|0;while(true){g=a.pj.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.rW&c;j=h.pP;h.pP=e[i];e[i]=h;h=j;}f=f+1|0;}a.pj=d;a.sM=e.length*a.v5|0;}
let AHS=(b,c)=>{return b!==c&&!b.cG(c)?0:1;}
let TY=F(0);
let Rm=F();
let D8=F();
let AGz=null;let Xy=null;let B9=null;let B2=null;let AB0=null;let ASS=null;let BK=null;let BQ=null;let SY=null;let SZ=null;let AEu=b=>{let c,d,e;c=new M;d=H(1);e=d.data;e[0]=b;P();c.m9=O(d.data,0,e.length);return c;}
let V7=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new L;e.m$=1;e.m_=1;D(e);}
let Z6=b=>{return (55296|(b-65536|0)>>10&1023)&65535;}
let AD$=b=>{return (56320|b&1023)&65535;}
let Qq=()=>{if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}return B2;}
let NW=()=>{if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}return B9;}
let Cs=(b,c)=>{let d,e;d=b.BX.data;if(c<d.length)return c+d[c]|0;d=b.BM;e=ADz(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;}
let ADz=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=BS(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;}
let Jd=b=>{let c,d,e,f,g,h;if(Xy===null){if(SY===null)SY=YC();Xy=AW_((SY.value!==null?Bk(SY.value):null));}c=Xy.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=BS(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);}
let IZ=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
let FT=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bc;c.m$=1;c.m_=1;D(c);}if(b<65536){d=H(1);d.data[0]=b&65535;return d;}return Qg([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);}
let CS=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(AB0===null){if(SZ===null)SZ=AFo();AB0=AYn((SZ.value!==null?Bk(SZ.value):null));}e=AB0.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.zh)c=f+1|0;else{d=g.yO;if(b>=d)return g.yS.data[b-d|0];d=f-1|0;}}return 0;}
let Ic=b=>{b:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break b;if(b>159)break b;}return 1;}return CS(b)!=16?0:1;}
let AHn=()=>{AGz=Bw(AIa);ASS=Bo(D8,128);}
let Eo=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
let EO=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
let YC=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
let AFo=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
let WW=F();
let AQL=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};}
let J0=F();
let BJ=null;let ES=null;let JY=null;let EZ=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ms(b)&&(e+f|0)<=Ms(d)){c:{o:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ce;h.nA=g;i=h;g.classObject=i;}}j=Ej(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ce;h.nA=g;i=h;g.classObject=i;}}i=Ej(h);if(j!==null&&i!==null){if(j===i)break o;if(!(j.nA.$meta.primitive?1:0)&&!(i.nA.$meta.primitive?1:0)){k=b;l=0;m
=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p=i.nA;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&RI(g.constructor,p)?1:0)){LW(b,c,d,e,l);b=new Kl;b.m$=1;b.m_=1;D(b);}l=l+1|0;m=o;}LW(b,c,d,e,f);return;}if(!(j.nA.$meta.primitive?1:0))break c;if(i.nA.$meta.primitive?1:0)break o;else break c;}b=new Kl;b.m$=1;b.m_=1;D(b);}}LW(b,c,d,e,f);return;}b=new Kl;b.m$=1;b.m_=1;D(b);}b=new L;b.m$=1;b.m_=1;D(b);}d=new C0;d.m$=1;d.m_=1;d.na=B(100);D(d);}
let Ci=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ms(b)&&(e+f|0)<=Ms(d)){LW(b,c,d,e,f);return;}b=new L;b.m$=1;b.m_=1;D(b);}
let LW=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}}
let FE=()=>{return Bb((new Date()).getTime());}
let Lq=()=>{let b,c;if(JY===null){b=new Mw;Lb(b,11);En(b,B(101),B(102));En(b,B(84),B(103));En(b,B(104),B(105));En(b,B(106),B(107));En(b,B(108),B(109));En(b,B(110),B(111));En(b,B(112),B(102));En(b,B(113),B(105));c=new Mw;Lb(c,11);c.EK=b;JY=c;}}
let Sb=(b,c)=>{Lq();return En(JY,b,c);}
let Np=F(0);
function Of(){let a=this;C.call(a);a.n6=0;a.CB=0;a.Dg=0;a.pL=0;}
let Y9=a=>{return a.n6;}
let Wm=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;b:{A33();switch(AT_.data[d.nf]){case 1:if(a.pL){if(BJ===null){e=new CP;e.oK=DF;d=new I;d.m8=H(16);e.nV=d;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}e=BJ;g=new I;g.m8=H(16);G(g,g.m7,B(114));G(g,g.m7,c===null?B(2):c);d=new M;h=g.m8;i=h.data;j=g.m7;P();k=i.length;if(j>=0&&j<=(k-0|0)){d.m9=O(h.data,0,j);g=e.nV;G(g,g.m7,d);j=g.m7;Bh(g,j,j+1|0);g.m8.data[j]=10;CY(e);}else{c=new L;Bd(c);D(c);}}a.n6=a.n6+1|0;d=new HG;d.qM=a;d.sq=b;d.qF=c;d.q0=f;CV();c=null;e=null;d.pW=new C;d.pV=1;d.q7
=e;d.rm=c;k=Dt;Dt=k+1|0;d.rj=J(k);c=new FD;c.q9=d;GH(c);break b;case 2:d=null;g=new NQ;g.wd=a;g.ux=f;g.Bk=d;g.C8=e;if(a.pL){if(BJ===null){e=new CP;e.oK=DF;d=new I;CU(d);d.m8=H(16);e.nV=d;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}f=BJ;d=new I;d.m8=H(16);Dm(d,d.m7,Dp(B(114)));Dm(d,d.m7,c===null?B(2):Dp(c));e=new M;h=d.m8;i=h.data;l=d.m7;Kx(0,l,i.length);e.m9=O(h.data,0,l);Ld(f,e);}a.n6=a.n6+1|0;d=new HH;d.qG=a;d.r6=b;d.qC=c;d.re=g;CV();c=null;e=null;d.pW=new C;d.pV=1;d.q7=e;d.rm=c;k=Dt;Dt=k+1|0;d.rj=J(k);c=new FD;c.q9
=d;GH(c);break b;case 3:break;case 4:O5(a,b,c,AZK(a,f));break b;case 5:AAo(f,c,null);break b;default:c=new X;e=new I;Gj(e);F1(F1(e,B(115)),d);Pz(c,CD(e));D(c);}O5(a,b,c,f);}}
let U5=(a,b,c,d)=>{let e,f,g,h,i;if(a.pL){if(BJ===null){e=new CP;e.oK=DF;f=new I;f.m8=H(16);e.nV=f;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}e=BJ;f=new I;f.m8=H(16);G(f,f.m7,B(114));G(f,f.m7,c===null?B(2):c);g=W(f);f=e.nV;G(f,f.m7,g);h=f.m7;Bh(f,h,h+1|0);f.m8.data[h]=10;CY(e);}a.n6=a.n6+1|0;f=new HG;f.qM=a;f.sq=b;f.qF=c;f.q0=d;CV();c=null;d=null;f.pW=new C;f.pV=1;f.q7=d;f.rm=c;i=Dt;Dt=i+1|0;f.rj=J(i);c=new FD;c.q9=f;GH(c);}
let Nf=(a,b,c,d)=>{let e,f,g,h;if(a.pL){if(BJ===null){e=new CP;e.oK=DF;f=new I;f.m8=H(16);e.nV=f;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}e=BJ;f=new I;f.m8=H(16);G(f,f.m7,B(116));G(f,f.m7,c===null?B(2):c);g=W(f);f=e.nV;G(f,f.m7,g);h=f.m7;Bh(f,h,h+1|0);f.m8.data[h]=10;CY(e);}a.n6=a.n6+1|0;e=new XMLHttpRequest();f=new NP;f.t6=a;f.sL=e;f.y4=b;f.w2=c;f.zO=d;f=B$(f,"handleEvent");e.onreadystatechange=f;f=new I4;f.zX=a;f.ws=d;d=B$(f,"handleEvent");e.onprogress=d;e.open("GET",B0(c),!!b);e.setRequestHeader("Content-Type",
"text/plain; charset=utf-8");e.send();}
let O5=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.pL){if(BJ===null){e=new CP;e.oK=DF;f=new I;f.m8=H(16);e.nV=f;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}e=BJ;f=new I;f.m8=H(16);G(f,f.m7,B(114));G(f,f.m7,c===null?B(2):c);g=new M;h=f.m8;i=h.data;j=f.m7;P();k=i.length;if(j>=0&&j<=(k-0|0)){g.m9=O(h.data,0,j);f=e.nV;G(f,f.m7,g);k=f.m7;Bh(f,k,k+1|0);f.m8.data[k]=10;CY(e);}else{c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}}a.n6=a.n6+1|0;f=new HH;f.qG=a;f.r6=b;f.qC=c;f.re=d;CV();c=null;d=null;f.pW=new C;f.pV=1;f.q7=d;f.rm=c;l=Dt;Dt=l+1|
0;f.rj=J(l);c=new FD;c.q9=f;GH(c);}
let O9=F();
let JN=null;let AGf=()=>{return JN;}
let Ly=F();
let DO=0;let JI=0;let ANl=()=>{DO=1;}
let RW=F(0);
function K2(){let a=this;C.call(a);a.ty=null;a.nI=null;a.CM=null;a.tV=null;a.B3=null;a.DR=null;a.Aj=0.0;a.xU=Q;a.xC=Q;a.ze=0.0;a.xv=0.0;a.Ab=0;}
let AEB=0;let J$=null;let J1=()=>{J1=Ba(K2);AIb();}
let A3f=a=>{let b=new K2();AAc(b,a);return b;}
let AAc=(a,b)=>{let c,d,e,f,g,h,i,j,k;J1();a.Aj=0.0;a.xU=FE();a.xC=J(-1);a.ze=0.0;a.xv=0.0;a.CM=b;Ju();c=window.document;d=b.Dj;a.nI=c.getElementById(B0(d));e=AK1();d=!!b.Cx;e.alpha=d;d=!!b.Bb;e.antialias=d;d=!!b.Bx;e.stencil=d;d=!!b.BY;e.premultipliedAlpha=d;d=!!b.B7;e.preserveDrawingBuffer=d;f=a.nI;if(b.Ac)a.ty=f.getContext("webgl2",e);a:{if(b.Ac){d=a.ty;if(d!==null){if(!b.z1)f=A4J(d);else{f=new Og;Uo(f,d);}a.B3=f;a.tV=f;break a;}}f=f.getContext("webgl",e);a.ty=f;if(!b.z1)d=A4h(f);else{d=new Tz;Rx(d,f);}a.tV
=d;}d=a.tV.ex(7938);c=a.tV.ex(7936);g=a.tV.ex(7937);f=new PF;Ny();ZU(f,Qd,d,c,g);a.DR=f;h=b.wl;if(!(h<0&&b.tw<0)){if(h&&b.tw?1:0)KI(a,h,b.tw);else{i=Jc;h=i.qj.document.documentElement.clientWidth-b.yB|0;j=i.qj.document.documentElement.clientHeight-b.Ah|0;k=!b.xh?1.0:devicePixelRatio||1;KI(a,k*h|0,k*j|0);}}b=a.nI;d=new RY;d.DA=a;UZ(b,B$(d,"fullscreenChanged"));}
let WH=a=>{let b,c,d;b=FE();c=BV(Cb(b,a.xU))/1000.0;a.ze=c;a.xU=b;c=a.xv+c;a.xv=c;d=a.Ab+1|0;a.Ab=d;if(c>1.0){a.Aj=d;a.xv=0.0;a.Ab=0;}}
let C$=a=>{return a.nI.width;}
let C_=a=>{return a.nI.height;}
let Dj=a=>{return a.Aj|0;}
let KI=(a,b,c)=>{let d,e,f,g,h,i;d=a.nI;e=b;d.width=e;d=a.nI;e=c;d.height=e;if(a.CM.xh){f=devicePixelRatio||1;e=a.nI.style;g=b/f;AJs();h=new I;h.m8=H(16);Pk(h,h.m7,g);G(h,h.m7,B(117));i=W(h);e.setProperty("width",B0(i));f=c/f;h=new I;h.m8=H(16);Pk(h,h.m7,f);G(h,h.m7,B(117));d=W(h);e.setProperty("height",B0(d));}}
let AIb=()=>{AEB=0;J$=DY(51,0.800000011920929);}
let UZ=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}}
function UI(){let a=this;C.call(a);a.zt=null;a.u8=null;a.xd=null;a.vv=null;a.vC=null;a.Bl=null;a.wA=null;a.y8=0;a.wK=null;}
let A2v=(a,b,c)=>{let d=new UI();AOD(d,a,b,c);return d;}
let AOD=(a,b,c,d)=>{let e;a.zt=FL(51,0.800000011920929);a.u8=FL(51,0.800000011920929);a.xd=FL(51,0.800000011920929);a.vv=FL(51,0.800000011920929);a.vC=FL(51,0.800000011920929);a.Bl=FL(51,0.800000011920929);e=new Cf;e.og=1;e.np=Bo(C,16);a.wA=e;a.y8=(-1);a.wK=b;AC9(a,c,d);}
let AC9=(a,b,c)=>{let d,e,f;d=c.qi;if(d.AX!==null){e=b.ownerDocument;f=new PV;f.EB=a;e.addEventListener("dragenter",B$(f,"handleEvent"),!!0);f=new PW;f.E3=a;e.addEventListener("dragover",B$(f,"handleEvent"),!!0);f=new PS;f.A1=a;f.AH=c;f.At=d;e.addEventListener("drop",B$(f,"handleEvent"));}}
let YK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(YV(a,b.yX)){b.wP=b.CT;b.vr=1;b.tI=0;b.qL=0;return 0;}if(b.qL)return 0;b.tI=0;b.vr=0;b.qL=1;c=b.yX;d=b.A9;e=b.AY;f=new PU;f.Ff=a;f.qd=b;b=JN;g=a.wK;h=new I;h.m8=H(16);i=h.m7;if(g===null)g=B(2);Gy(h,i,g);Gy(h,h.m7,B(91));g=new M;j=h.m8;k=j.data;l=h.m7;P();m=k.length;if(l>=0&&l<=(m-0|0)){g.m9=O(j.data,0,l);h=new I;h.m8=H(16);G(h,h.m7,g);G(h,h.m7,c===null?B(2):c);g=new M;k=h.m8;j=k.data;m=h.m7;i=j.length;if(m>=0&&m<=(i-0|0)){g.m9=O(k.data,0,m);h=new PR;h.xk=a;h.qw=f;h.xx
=d;h.wY=c;Wm(b,1,g,d,e,h);return 1;}b=new L;Bd(b);D(b);}b=new L;Cg(b);D(b);}
let I3=(a,b,c,d)=>{b:{A4E();switch(AHz.data[b.nf]){case 1:break;case 2:BN(a.u8,c,d);break b;case 3:BN(a.vC,c,d);break b;case 4:BN(a.xd,c,d);break b;case 5:BN(a.zt,c,null);break b;default:break b;}BN(a.vv,c,d);}}
let V8=(a,b)=>{let c,d,e,f,$$je;if(CR(a.vv,b)<0?0:1){k:{try{c=AKu(AAY(VP(a.vv,b),B(118)));}catch($$e){$$je=BG($$e);if($$je instanceof Lp){break k;}else{throw $$e;}}return c;}return null;}if(CR(a.u8,b)<0?0:1){b=new MM;d=BI(1);e=d.data.length;b.uK=d;b.r5=0;b.y6=0;b.uG=0+e|0;return b;}if(CR(a.vC,b)<0?0:1){c=a.vC;f=CR(c,b);b=f<0?null:c.o_.data[f];c=new T2;c.zA=b;return c;}if(!(CR(a.xd,b)<0?0:1))return null;b=new MM;d=BI(1);e=d.data.length;b.uK=d;b.r5=0;b.y6=0;b.uG=0+e|0;return b;}
let YV=(a,b)=>{let c;c=CR(a.vv,b)<0?0:1;return !c&&!(CR(a.u8,b)<0?0:1)&&!(CR(a.vC,b)<0?0:1)&&!(CR(a.xd,b)<0?0:1)&&!(CR(a.zt,b)<0?0:1)?0:1;}
let D$=F();
let AQg=(a,b)=>{return;}
let RG=F(0);
let E$=F(0);
function AAN(){let a=this;C.call(a);a.ok=null;a.uv=0;a.rH=null;a.ra=null;a.oH=null;a.oG=null;a.wC=null;a.wD=null;a.xp=null;a.tG=0;a.wj=null;a.xl=0;a.oM=null;a.z6=null;a.y9=null;a.pD=null;a.r7=Q;a.t2=0;}
let AZu=a=>{let b=new AAN();ASt(b,a);return b;}
let AXA=b=>{let c,d,e,f;c=KD;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(K3(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;}
let ASt=(a,b)=>{a.uv=0;a.rH=DY(20,0.800000011920929);a.ra=Nl(20);a.oH=R(20);a.oG=R(20);a.wC=R(20);a.wD=R(20);a.xp=AHL(51,0.800000011920929);a.tG=0;a.wj=Nl(256);a.xl=0;a.oM=Nl(256);a.z6=Nl(5);a.y9=AHL(51,0.800000011920929);a.t2=1;a.ok=b;AAF(a);}
let AAF=a=>{let b;b=a.ok.ownerDocument;b.addEventListener("mousedown",B$(a,"handleEvent"),!!0);b.addEventListener("mouseup",B$(a,"handleEvent"),!!0);b.addEventListener("mousemove",B$(a,"handleEvent"),!!0);b.addEventListener("wheel",B$(a,"handleEvent"),!!0);b.addEventListener("keydown",B$(a,"handleEvent"),!!0);b.addEventListener("keyup",B$(a,"handleEvent"),!!0);b.addEventListener("keypress",B$(a,"handleEvent"),!!0);a.ok.addEventListener("touchstart",B$(a,"handleEvent"),!!1);a.ok.addEventListener("touchmove",
B$(a,"handleEvent"),!!1);a.ok.addEventListener("touchcancel",B$(a,"handleEvent"),!!1);a.ok.addEventListener("touchend",B$(a,"handleEvent"),!!1);}
let AAV=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b:{c=Bk(b.type);if(F7(c,B(119))){window.focus();d=b.target;e=a.ok;if(d!==e?0:1){f=a.ra.data;if(!f[0]){a.t2=1;a.uv=1;f[0]=1;g=MN(b.button);WI(a.xp,g);a.z6.data[g]=1;a.wC.data[0]=0;a.wD.data[0]=0;if(!Mf(a)){h=Ip(a,b,a.ok);i=IH(a,b,a.ok);a.oH.data[0]=h;a.oG.data[0]=i;}else{f=a.oH.data;f[0]=f[0]+b.movementX|0;f=a.oG.data;f[0]=f[0]+b.movementY|0;}a.r7=Gk();j=a.pD;if(j!==null)j.eQ(a.oH.data[0],a.oG.data[0],0,MN(b.button));b.preventDefault();b.stopPropagation();break b;}}k
=Ip(a,b,e);l=IH(a,b,a.ok);if(!(k>=0.0&&k<=C$(Bi)&&l>=0.0&&l<=C_(Bi)))a.t2=0;return;}if(F7(c,B(120))){if(!a.ra.data[0])return;AEd(a.xp,MN(b.button));f=a.ra;f.data[0]=a.xp.qB<=0?0:1;if(!Mf(a)){Gw(a,0,Ip(a,b,a.ok)-a.oH.data[0]|0,IH(a,b,a.ok)-a.oG.data[0]|0);a.oH.data[0]=Ip(a,b,a.ok);a.oG.data[0]=IH(a,b,a.ok);}else{Gw(a,0,b.movementX|0,b.movementY|0);f=a.oH.data;f[0]=f[0]+b.movementX|0;f=a.oG.data;f[0]=f[0]+b.movementY|0;}a.r7=Gk();a.ra.data[0]=0;j=a.pD;if(j!==null)j.eT(a.oH.data[0],a.oG.data[0],0,MN(b.button));}
else if(!F7(c,B(121))){if(F7(c,B(122))){if(a.pD!==null){m=AXA(b);a.pD.eV(0.0,m|0);}a.r7=Gk();}else if(F7(c,B(123))){a.uv=1;n=b.changedTouches;o=0;p=n.length;while(o<p){j=n.item(o);q=j.identifier;e=a.rH;r=AD6(a);Ct(e,q,C2(r));a.ra.data[r]=1;a.oH.data[r]=H_(a,j,a.ok);a.oG.data[r]=IE(a,j,a.ok);a.wC.data[r]=0;a.wD.data[r]=0;j=a.pD;if(j!==null)j.eQ(a.oH.data[r],a.oG.data[r],r,0);o=o+1|0;}a.r7=Gk();b.preventDefault();}}else{if(!Mf(a)){h=Ip(a,b,a.ok);i=IH(a,b,a.ok);Gw(a,0,h-a.oH.data[0]|0,i-a.oG.data[0]|0);a.oH.data[0]
=h;a.oG.data[0]=i;}else{Gw(a,0,b.movementX|0,b.movementY|0);f=a.oH.data;f[0]=f[0]+b.movementX|0;f=a.oG.data;f[0]=f[0]+b.movementY|0;}a.r7=Gk();j=a.pD;if(j!==null){if(!a.ra.data[0])j.e0(a.oH.data[0],a.oG.data[0]);else j.e1(a.oH.data[0],a.oG.data[0],0);}}}if(F7(c,B(124))){n=b.changedTouches;o=0;p=n.length;while(o<p){s=n.item(o);q=s.identifier;t=DI(Nh(a.rH,q));Gw(a,t,H_(a,s,a.ok)-a.oH.data[t]|0,IE(a,s,a.ok)-a.oG.data[t]|0);a.oH.data[t]=H_(a,s,a.ok);a.oG.data[t]=IE(a,s,a.ok);j=a.pD;if(j!==null)j.e1(a.oH.data[t],
a.oG.data[t],t);o=o+1|0;}a.r7=Gk();b.preventDefault();}if(F7(c,B(125))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=DI(Nh(a.rH,q));IQ(a.rH,q);a.ra.data[t]=0;h=H_(a,s,a.ok);i=IE(a,s,a.ok);Gw(a,t,h-a.oH.data[t]|0,i-a.oG.data[t]|0);f=a.oH.data;f[t]=h;v=a.oG.data;v[t]=i;j=a.pD;if(j!==null)j.eT(f[t],v[t],t,0);o=o+1|0;}a.r7=Gk();b.preventDefault();}if(F7(c,B(126))){n=b.changedTouches;o=0;u=n.length;while(o<u){s=n.item(o);q=s.identifier;t=DI(Nh(a.rH,q));IQ(a.rH,q);a.ra.data[t]=0;h=H_(a,
s,a.ok);i=IE(a,s,a.ok);Gw(a,t,h-a.oH.data[t]|0,i-a.oG.data[t]|0);f=a.oH.data;f[t]=h;v=a.oG.data;v[t]=i;j=a.pD;if(j!==null)j.eT(f[t],v[t],t,0);o=o+1|0;}a.r7=Gk();b.preventDefault();}}
let UH=(a,b)=>{let c,d,e,f,g,h,i;c=Bk(b.type);if(c===B(127))d=1;else if(!(B(127) instanceof M))d=0;else{e=B(127);d=c.m9!==e.m9?0:1;}if(d&&a.t2){e:{f=ZV(b.keyCode);g=0;switch(f){case 67:g=8;break e;case 112:g=127;break e;default:}}e=a.y9;if(!f)d=e.tX;else{h=e.rT;d=T(Y(V(J(f),E(2135587861, 2654435769)),e.tD));g:{while(true){i=h.data[d];if(!i){d= -(d+1|0)|0;break g;}if(i==f)break;d=(d+1|0)&e.rE;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112)){b.preventDefault();e=a.pD;if(e!==null){e.e4(f);a.pD.e5(g);}}
else{h=a.wj.data;if(!h[f]){a.tG=a.tG+1|0;h[f]=1;a.xl=1;a.oM.data[f]=1;e=a.pD;if(e!==null)e.e4(f);}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===B(128))d=1;else if(!(B(128) instanceof M))d=0;else{e=B(128);d=c.m9!==e.m9?0:1;}if(d&&a.t2){d=b.charCode&65535;e=a.pD;if(e!==null)e.e5(d);if(d==9){b.preventDefault();b.stopPropagation();}}else{if(c===B(129))d=1;else if(!(B(129) instanceof M))d=0;else{e=B(129);d=c.m9!==e.m9?0:1;}if(d&&a.t2){f=ZV(b.keyCode);e=a.y9;if(!f)d=e.tX;else{h=e.rT;d=T(Y(V(J(f),
E(2135587861, 2654435769)),e.tD));x:{while(true){g=h.data[d];if(!g){d= -(d+1|0)|0;break x;}if(g==f)break;d=(d+1|0)&e.rE;}}d=d<0?0:1;}if(d)b.preventDefault();h=a.wj.data;if(h[f]){a.tG=a.tG-1|0;h[f]=0;}e=a.pD;if(e!==null)e.e6(f);if(f==61){b.preventDefault();b.stopPropagation();}}}}}
let AD6=a=>{let b,c,d;b=0;while(true){if(b>=20)return (-1);c=a.rH;if(b>=(-128)&&b<=127){FN();d=FX.data[b+128|0];}else{d=new Fe;d.qy=b;}if(!AE$(c,d,0))break;b=b+1|0;}return b;}
let Qo=a=>{let b,c,d;b:{if(a.uv){a.uv=0;b=0;while(true){c=a.z6.data;if(b>=c.length)break b;c[b]=0;b=b+1|0;}}}d:{if(a.xl){a.xl=0;d=0;while(true){c=a.oM.data;if(d>=c.length)break d;c[d]=0;d=d+1|0;}}}}
let Gw=(a,b,c,d)=>{a.wC.data[b]=c;a.wD.data[b]=d;}
let Ip=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(N5(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bk(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.m9!==c.m9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Fy(d)*0.5|0;}
let IH=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(R1(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bk(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.m9!==c.m9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Fy(d)*0.5|0;}
let H_=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(N5(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=Bk(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.m9!==c.m9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+Fy(d)*0.5|0;}
let IE=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(R1(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=Bk(b.compatMode);if(f===B(130))g=1;else if(!(B(130) instanceof M))g=0;else{c=B(130);g=f.m9!==c.m9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+Fy(d)*0.5|0;}
let R1=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;}
let N5=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;}
let BB=(a,b)=>{if(b==(-1))return a.tG<=0?0:1;if(b>=0&&b<=255)return a.wj.data[b];return 0;}
let Xh=(a,b)=>{a.pD=b;}
let Mf=a=>{return AVs(a.ok)?1:0;}
let AVs=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;}
let AHb=(a,b)=>{AAV(a,b);UH(a,b);}
let Q2=F(0);
function SC(){C.call(this);this.xz=null;}
function R5(){C.call(this);this.Em=null;}
let RX=F(0);
let P8=F();
let OJ=F(0);
function ABV(){let a=this;C.call(a);a.Eo=0;a.w0=0;a.DQ=null;a.zf=null;}
let A2y=()=>{let a=new ABV();AK9(a);return a;}
let AK9=a=>{let b;a.Eo=0;a.w0=1;b=new Q9;b.wE=a;a.DQ=b;a.zf=B(43);}
let AC6=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}}
let E1=F();
let ED=null;let Bi=null;let A15=null;let Bx=null;let QI=null;let A3i=null;let Cn=null;let Bm=null;let GE=null;let SG=F(0);
let R7=F(0);
function XD(){C.call(this);this.Cu=null;}
let A48=()=>{let a=new XD();AIl(a);return a;}
let AIl=a=>{a.Cu=null;a.Cu=A4y();}
function UJ(){C.call(this);this.xR=null;}
let A3M=a=>{let b=new UJ();AJy(b,a);return b;}
let AJy=(a,b)=>{a.xR=b;}
let Xn=(a,b)=>{let c,d,$$je;c=Bk(a.xR.rX.qj.document.visibilityState);if(B(131)===c)d=1;else if(!(c instanceof M))d=0;else{c=c;d=B(131).m9!==c.m9?0:1;}if(!d){b=a.xR.wb;FB(b);e:{try{c=Qp(b);while(Qx(c)){AA0(O0(c));}DR(b);break e;}catch($$e){$$je=BG($$e);c=$$je;}DR(b);D(c);}}else{b=a.xR.wb;FB(b);f:{try{c=Qp(b);while(Qx(c)){ADa(O0(c));}DR(b);break f;}catch($$e){$$je=BG($$e);c=$$je;}DR(b);D(c);}}}
let AS2=(a,b)=>{Xn(a,b);}
function UK(){C.call(this);this.uO=null;}
let AZS=a=>{let b=new UK();AH9(b,a);return b;}
let AH9=(a,b)=>{a.uO=b;}
let AFq=(a,b)=>{let c,d,e,f,g;c=a.uO.rX.qj.document.documentElement.clientWidth;b=a.uO;d=c-b.qi.yB|0;e=b.rX.qj.document.documentElement.clientHeight;b=a.uO;f=b.qi;c=e-f.Ah|0;if(d>0&&c>0){if(b.sd!==null){if(f.xh){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}KI(a.uO.sd,d,c);}return;}}
let AWY=(a,b)=>{AFq(a,b);}
let Bc=F(BL);
let APM=a=>{let b=new Bc();AFB(b,a);return b;}
let AFB=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let ADR=F();
let Kx=(b,c,d)=>{let e;if(b>=0&&c>=0&&c<=(d-b|0))return b;e=new L;e.m$=1;e.m_=1;D(e);}
let VO=F();
let MQ=(b,c)=>{let d,e,f,g;if(b<0){d=new Bc;e=new I;e.m8=H(16);G(e,e.m7,B(132));K(e,e.m7,b,10);e=W(e);d.m$=1;d.m_=1;d.na=e;D(d);}f=Jk(b/c)|0;if(2>f)f=2;g=Lt(f);if(g<=1073741824)return g;d=new Bc;e=new I;e.m8=H(16);G(e,e.m7,B(133));K(e,e.m7,b,10);e=W(e);d.m$=1;d.m_=1;d.na=e;D(d);}
let QL=F(EC);
let AJJ=null;let ADO=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new Cj;b.m$=1;b.m_=1;b.na=B(77);D(b);}f=0;if(c>=0&&c<b.m9.length){e:{switch(b.m9.charCodeAt(c)){case 43:g=c+1|0;break e;case 45:f=1;g=c+1|0;break e;default:}g=c;}h=Q;i=J(e);h:{while(g<d){j=g+1|0;if(g<0)break h;if(g>=b.m9.length)break h;k=Jd(b.m9.charCodeAt(g));if(k<0){l=new Cj;b=B1(b,c,d);if(b===null)b=B(2);m=new I;m.m8=H(16);G(m,m.m7,B(78));G(m,m.m7,b);b=new M;n=m.m8;o=n.data;d=m.m7;e=o.length;if(d>=0&&d<=(e-0|0)){b.m9=O(n.data,
0,d);l.m$=1;l.m_=1;l.na=b;D(l);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}if(k>=e){l=new Cj;p=B1(b,c,d);if(p===null)p=B(2);b=new I;KS(b,16);LL(b,B(79));F1(F1(EJ(b,e),B(72)),p);LY(l,CD(b));D(l);}h=Z(V(i,h),J(k));if(Go(h,Q)){if(j==d&&CZ(h,E(0, 2147483648))&&f)return E(0, 2147483648);l=new Cj;b=WN(PI(b,c,d));m=E6();F1(F1(m,B(80)),b);LY(l,CD(m));D(l);}g=j;}if(f)h=Hk(h);return h;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new Cj;l=new I;l.m8=H(16);G(l,l.m7,B(81));K(l,l.m7,e,10);m=new M;n=l.m8;o=n.data;d=l.m7;P();e
=o.length;if(d>=0&&d<=(e-0|0)){m.m9=O(n.data,0,d);b.m$=1;b.m_=1;b.na=m;D(b);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let Ft=b=>{let c,d;if(CZ(b,Q))return 64;c=0;d=Y(b,32);if(EF(d,Q))c=32;else d=b;b=Y(d,16);if(CZ(b,Q))b=d;else c=c|16;d=Y(b,8);if(CZ(d,Q))d=b;else c=c|8;b=Y(d,4);if(CZ(b,Q))b=d;else c=c|4;d=Y(b,2);if(CZ(d,Q))d=b;else c=c|2;if(EF(Y(d,1),Q))c=c|1;return (64-c|0)-1|0;}
let Er=(b,c)=>{return A2C(b,c);}
let Vl=(b,c)=>{return AZY(b,c);}
let EK=(b,c)=>{return A2A(b,c);}
let AM0=()=>{AJJ=Bw(AQt);}
let ZK=F();
let AK1=()=>{return {};}
let L4=F(0);
function I0(){let a=this;C.call(a);a.nd=null;a.sF=0;a.st=0;a.px=0;a.DW=0;a.D3=0;a.uJ=0;a.sU=0;a.op=null;a.pg=null;a.p$=null;a.ED=null;a.D$=null;a.tx=null;a.pI=null;a.qc=0;a.vL=null;a.sI=null;a.uy=null;a.v3=null;a.DE=null;}
let A4h=a=>{let b=new I0();Rx(b,a);return b;}
let Rx=(a,b)=>{a.sF=1;a.st=1;a.px=1;a.DW=1;a.D3=1;a.uJ=1;a.sU=1;a.op=DY(51,0.800000011920929);a.pg=DY(51,0.800000011920929);a.p$=DY(51,0.800000011920929);a.ED=DY(51,0.800000011920929);a.D$=DY(51,0.800000011920929);a.tx=DY(51,0.800000011920929);a.pI=DY(51,0.800000011920929);a.qc=0;a.vL=new Float32Array(40000);a.sI=new Int32Array(12000);a.uy=new Int16Array(12000);a.v3=new Int8Array(12000);a.DE=new Uint8Array(240000);a.nd=b;b.pixelStorei(37441,0);}
let Nd=(a,b)=>{let c,d,e,f,g;if(JI){c=(!E5(b,EY)?null:b.se.nQ.data).buffer;d=b.nc;e=b.nb-d|0;return new Float32Array(c,d,e);}if((b.nb-b.nc|0)>a.vL.length)a.vL=new Float32Array(b.nb-b.nc|0);e=b.nc;d=0;while(true){f=b.nb;if(e>=f)break;c=a.vL;g=Qw(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.vL;e=f-b.nc|0;return c.subarray(0,e);}
let QR=(a,b)=>{let c,d,e,f,g;if(JI){c=(!E5(b,EY)?null:b.r9.nQ.data).buffer;d=b.nc;e=b.nb-d|0;return new Int16Array(c,d,e);}if((b.nb-b.nc|0)>a.uy.length)a.uy=new Int16Array(b.nb-b.nc|0);e=b.nc;d=0;while(true){f=b.nb;if(e>=f)break;c=a.uy;g=ACx(b,e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.uy;e=f-b.nc|0;return c.subarray(0,e);}
let TA=(a,b)=>{let c,d,e,f,g;if(JI){c=(!E5(b,EY)?null:b.fk()).buffer;d=b.nc;e=b.nb-d|0;return new Int32Array(c,d,e);}if((b.nb-b.nc|0)>a.sI.length)a.sI=new Int32Array(b.nb-b.nc|0);e=b.nc;d=0;while(true){f=b.nb;if(e>=f)break;c=a.sI;g=b.bh(e);d;c[d]=g;e=e+1|0;d=d+1|0;}c=a.sI;e=f-b.nc|0;return c.subarray(0,e);}
let Mb=(a,b)=>{let c,d,e,f,g;if(JI)return !E5(b,EY)?null:b.nQ.data;if((b.nb-b.nc|0)>a.v3.length)a.v3=new Int8Array(b.nb-b.nc|0);c=b.nc;d=0;while(true){e=b.nb;if(c>=e)break;f=a.v3;g=Up(b,c);d;f[d]=g;c=c+1|0;d=d+1|0;}f=a.v3;c=e-b.nc|0;return f.subarray(0,c);}
let AWj=(a,b)=>{if((b.nb-b.nc|0)>a.sI.length)a.sI=new Int32Array(b.nb-b.nc|0);}
let AF4=(a,b)=>{let c,d,e,f,g;c=a.pI;d=a.qc;if(!d)c=!c.nF?null:c.nD;else{e=c.nB;f=T(Y(V(J(d),E(2135587861, 2654435769)),c.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==d)break;f=(f+1|0)&c.nE;}}c=f<0?null:c.nC.data[f];}c=c;if(!b)c=!c.nF?null:c.nD;else{e=c.nB;d=T(Y(V(J(b),E(2135587861, 2654435769)),c.nG));q:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break q;}if(f==b)break;d=(d+1|0)&c.nE;}}c=d<0?null:c.nC.data[d];}BE();return c===null?null:c.nJ;}
let AMQ=(a,b,c)=>{let d,e,f,g,h,i;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;d=a.pg;if(!c)d=!d.nF?null:d.nD;else{e=d.nB;b=T(Y(V(J(c),E(2135587861, 2654435769)),d.nG));i:{while(true){g=e.data[b];if(!g){b= -(b+1|0)|0;break i;}if(g==c)break;b=(b+1|0)&d.nE;}}d=b<0?null:d.nC.data[b];}i=d===null?null:d.nJ;a.nd.attachShader(h,i);}
let AWQ=(a,b,c)=>{let d,e,f,g,h;d=a.nd;e=a.p$;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindBuffer(b,e);}
let AJp=(a,b,c)=>{let d,e,f,g,h;d=a.nd;e=a.tx;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindTexture(b,e);}
let AMg=(a,b,c,d,e)=>{a.nd.blendFuncSeparate(b,c,d,e);}
let PL=(a,b,c,d,e)=>{let f,g;if(d instanceof E4){f=a.nd;d=Nd(a,d);f.bufferData(b,d,e);}else if(d instanceof HP){f=a.nd;d=TA(a,d);f.bufferData(b,d,e);}else if(d instanceof HT){f=a.nd;d=QR(a,d);f.bufferData(b,d,e);}else if(d instanceof FQ){f=a.nd;g=Mb(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new X;f.m$=1;f.m_=1;f.na=B(134);D(f);}a.nd.bufferData(b,c,e);}}
let PK=(a,b,c,d,e)=>{let f,g;if(e instanceof E4){f=a.nd;e=Nd(a,e);f.bufferSubData(b,c,e);}else if(e instanceof HP){f=a.nd;g=TA(a,e);f.bufferSubData(b,c,g);}else if(e instanceof HT){f=a.nd;e=QR(a,e);f.bufferSubData(b,c,e);}else{if(!(e instanceof FQ)){f=new X;f.m$=1;f.m_=1;f.na=B(134);D(f);}f=a.nd;e=Mb(a,e);f.bufferSubData(b,c,e);}}
let AUX=(a,b)=>{a.nd.clear(b);}
let AJB=(a,b,c,d,e)=>{a.nd.clearColor(b,c,d,e);}
let ANL=(a,b)=>{let c,d,e,f;c=a.pg;if(!b)c=!c.nF?null:c.nD;else{d=c.nB;e=T(Y(V(J(b),E(2135587861, 2654435769)),c.nG));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nE;}}c=e<0?null:c.nC.data[e];}BE();c=c===null?null:c.nJ;a.nd.compileShader(c);}
let AXy=a=>{let b,c;b=a.nd.createProgram();c=a.sF;a.sF=c+1|0;Ct(a.op,c,CA(b));return c;}
let ASf=(a,b)=>{let c,d;c=a.nd.createShader(b);d=a.st;a.st=d+1|0;Ct(a.pg,d,CA(c));return d;}
let AUY=(a,b)=>{a.nd.depthMask(!!b);}
let AR2=(a,b)=>{a.nd.disable(b);}
let AQS=(a,b)=>{a.nd.disableVertexAttribArray(b);}
let AKd=(a,b,c,d)=>{a.nd.drawArrays(b,c,d);}
let AOm=(a,b,c,d,e)=>{let f,g;f=a.nd;g=e.nc;f.drawElements(b,c,d,g);}
let AQo=(a,b,c,d,e)=>{a.nd.drawElements(b,c,d,e);}
let AWu=(a,b)=>{a.nd.enable(b);}
let AVz=(a,b)=>{a.nd.enableVertexAttribArray(b);}
let Y5=a=>{let b,c;b=a.nd.createBuffer();c=a.px;a.px=c+1|0;Ct(a.p$,c,CA(b));return c;}
let AF2=(a,b)=>{a.nd.generateMipmap(b);}
let AWL=a=>{let b,c;b=a.nd.createTexture();c=a.uJ;a.uJ=c+1|0;Ct(a.tx,c,CA(b));return c;}
let N7=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.nd;g=a.op;if(!b)g=!g.nF?null:g.nD;else{h=g.nB;i=T(Y(V(J(b),E(2135587861, 2654435769)),g.nG));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.nE;}}g=i<0?null:g.nC.data[i];}BE();g=g===null?null:g.nJ;g=f.getActiveAttrib(g,c);E0(d,g.size);E0(e,g.type);d.nc=0;d.nb=d.nt;d.no=(-1);e.nc=0;e.nb=e.nt;e.no=(-1);return Bk(g.name);}
let QC=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.nd;g=a.op;if(!b)g=!g.nF?null:g.nD;else{h=g.nB;i=T(Y(V(J(b),E(2135587861, 2654435769)),g.nG));n:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break n;}if(j==b)break;i=(i+1|0)&g.nE;}}g=i<0?null:g.nC.data[i];}BE();g=g===null?null:g.nJ;g=f.getActiveUniform(g,c);E0(d,g.size);E0(e,g.type);d.nc=0;d.nb=d.nt;d.no=(-1);e.nc=0;e.nb=e.nt;e.no=(-1);return Bk(g.name);}
let ALh=(a,b,c)=>{let d,e,f,g,h;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;return a.nd.getAttribLocation(h,B0(c));}
let L9=(a,b,c)=>{if(b!=2931&&b!=2849&&b!=32824&&b!=10752&&b!=32938){c=new X;c.m$=1;c.m_=1;c.na=B(135);D(c);}M_(c,0,a.nd.getParameter(b));c.nc=0;c.nb=c.nt;c.no=(-1);}
let AXq=(a,b)=>{let c,d,e,f,g;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;return Bk(c.getProgramInfoLog(d));}
let Rq=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.nd;f=a.op;if(!b)f=!f.nF?null:f.nD;else{g=f.nB;h=T(Y(V(J(b),E(2135587861, 2654435769)),f.nG));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.nE;}}f=h<0?null:f.nC.data[h];}BE();f=f===null?null:f.nJ;E0(d,e.getProgramParameter(f,c));}else{f=a.nd;e=a.op;if(!b)e=!e.nF?null:e.nD;else{g=e.nB;i=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));v:{while(true){h=g.data[i];if(!h){i= -(i+1|0)|0;break v;}if(h==b)break;i=(i
+1|0)&e.nE;}}e=i<0?null:e.nC.data[i];}BE();e=e===null?null:e.nJ;E0(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.nc=0;d.nb=d.nt;d.no=(-1);}
let AOQ=(a,b)=>{let c,d,e,f,g;c=a.nd;d=a.pg;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;return Bk(c.getShaderInfoLog(d));}
let O3=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.nd;f=a.pg;if(!b)f=!f.nF?null:f.nD;else{g=f.nB;h=T(Y(V(J(b),E(2135587861, 2654435769)),f.nG));o:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break o;}if(i==b)break;h=(h+1|0)&f.nE;}}f=h<0?null:f.nC.data[h];}BE();f=f===null?null:f.nJ;E0(d,e.getShaderParameter(f,c));}else{f=a.nd;e=a.pg;if(!b)e=!e.nF?null:e.nD;else{g=e.nB;h=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));v:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break v;}if(i==b)break;h=(h+1|0)&e.nE;}}e
=h<0?null:e.nC.data[h];}BE();e=e===null?null:e.nJ;E0(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.nc=0;d.nb=d.nt;d.no=(-1);}
let AL1=(a,b)=>{return Bk(a.nd.getParameter(b));}
let ALW=(a,b,c)=>{let d,e,f,g,h,i;d=a.nd;e=a.op;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d=d.getUniformLocation(e,B0(c));if(d===null)return (-1);c=a.pI;if(!b)c=!c.nF?null:c.nD;else{i=c.nB;h=T(Y(V(J(b),E(2135587861, 2654435769)),c.nG));y:{while(true){g=i.data[h];if(!g){h= -(h+1|0)|0;break y;}if(g==b)break;h=(h+1|0)&c.nE;}}c=h<0?null
:c.nC.data[h];}c=c;if(c===null){c=DY(51,0.800000011920929);Ct(a.pI,b,c);}h=a.sU;a.sU=h+1|0;Ct(c,h,CA(d));return h;}
let AH0=(a,b)=>{let c,d,e,f,g;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.linkProgram(d);}
let AKc=(a,b,c)=>{a.nd.pixelStorei(b,c);}
let AF1=(a,b,c)=>{let d,e,f,g,h;d=a.nd;e=a.pg;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.shaderSource(e,B0(c));}
let RJ=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s;if(j===null){j=a.nd;k=null;j.texImage2D(b,c,d,e,f,g,h,i,k);}else if(j.nb>4){if(!JI)l=!(j instanceof E4)?Uint8Array.from(Mb(a,j)):Nd(a,j);else{m=!E5(j,EY)?null:j.nQ.data;if(!(j instanceof E4)){n=j.nb-j.nc|0;o=m.byteOffset+j.nc|0;l=new Uint8Array(m.buffer,o,n);}else{n=j.nb-j.nc|0;o=m.byteOffset+j.nc|0;l=new Float32Array(m.buffer,o,n);}}a.nd.texImage2D(b,c,d,e,f,g,h,i,l);}else{p=ADC(j,0);J1();j=J$;if(!p)j=!j.nF?null:j.nD;else{q=j.nB;n=T(Y(V(J(p),E(2135587861, 2654435769)),
j.nG));q:{while(true){o=q.data[n];if(!o){n= -(n+1|0)|0;break q;}if(o==p)break;n=(n+1|0)&j.nE;}}j=n<0?null:j.nC.data[n];}k=j;r=k.ri;if(r===null&&k.od!==null?1:0){j=a.nd;s=k.od.vQ;j.texImage2D(b,c,d,e,f,g,h,i,s);}else if(r===null&&k.tB!==null?1:0){j=a.nd;s=k.tB;j.texImage2D(b,c,d,h,i,s);}else if(r===null&&k.uE!==null?1:0){j=a.nd;s=k.uE;j.texImage2D(b,c,d,h,i,s);}else{j=a.nd;F4(k);s=k.ri;j.texImage2D(b,c,d,h,i,s);}}}
let API=(a,b,c,d)=>{a.nd.texParameterf(b,c,d);}
let ARF=(a,b,c,d)=>{let e,f;e=a.nd;f=d;e.texParameterf(b,c,f);}
let AR1=(a,b,c)=>{let d,e,f,g,h,i;d=a.pI;e=a.qc;if(!e)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(e),E(2135587861, 2654435769)),d.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nE;}}d=g<0?null:d.nC.data[g];}d=d;if(!b)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));q:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break q;}if(h==b)break;g=(g+1|0)&d.nE;}}d=g<0?null:d.nC.data[g];}BE();i=d===null?null:d.nJ;a.nd.uniform1i(i,c);}
let AL0=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.pI;f=a.qc;if(!f)g=!g.nF?null:g.nD;else{h=g.nB;i=T(Y(V(J(f),E(2135587861, 2654435769)),g.nG));n:{while(true){c=h.data[i];if(!c){i= -(i+1|0)|0;break n;}if(c==f)break;i=(i+1|0)&g.nE;}}g=i<0?null:g.nC.data[i];}g=g;if(!b)g=!g.nF?null:g.nD;else{h=g.nB;c=T(Y(V(J(b),E(2135587861, 2654435769)),g.nG));q:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break q;}if(f==b)break;c=(c+1|0)&g.nE;}}g=c<0?null:g.nC.data[c];}BE();j=g===null?null:g.nJ;g=a.nd;k="uniformMatrix4fv";l=!!d;if
(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];c;m[c]=n;c=c+1|0;}}g[k](j,l,m);}
let AH3=(a,b)=>{let c,d,e,f,g;a.qc=b;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.useProgram(d);}
let APe=(a,b,c,d,e,f,g)=>{a.nd.vertexAttribPointer(b,c,d,!!e,f,g);}
let AGp=(a,b,c,d,e)=>{a.nd.viewport(b,c,d,e);}
let Q1=F(0);
function Nb(){let a=this;I0.call(a);a.nO=null;a.E8=null;a.EQ=0;a.DK=null;a.D1=0;a.Ei=null;a.Dp=0;a.vz=null;a.vh=0;a.EI=null;}
let A4J=a=>{let b=new Nb();Uo(b,a);return b;}
let Uo=(a,b)=>{Rx(a,b);a.E8=DY(51,0.800000011920929);a.EQ=1;a.DK=DY(51,0.800000011920929);a.D1=1;a.Ei=DY(51,0.800000011920929);a.Dp=1;a.vz=DY(51,0.800000011920929);a.vh=1;a.EI=new Uint32Array(12000);a.nO=b;}
let AMt=(a,b)=>{let c,d,e,f,g;c=a.nO;d=a.vz;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.bindVertexArray(d);}
let AQG=(a,b,c,d,e)=>{a.nO.drawArraysInstanced(b,c,d,e);}
let AX0=(a,b,c,d,e,f)=>{a.nO.drawElementsInstanced(b,c,d,e,f);}
let ARh=(a,b,c)=>{let d,e,f,g;d=c.nc;e=0;while(e<b){f=a.nO.createVertexArray();g=a.vh;a.vh=g+1|0;Ct(a.vz,g,CA(f));E0(c,g);e=e+1|0;}B7(c,d);}
let AOt=(a,b,c)=>{if(b!=34045)L9(a,b,c);else{M_(c,0,a.nO.getParameter(b));c.nc=0;c.nb=c.nt;c.no=(-1);}}
let Og=F(Nb);
let ALo=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nO;d=a.vz;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.bindVertexArray(d);b=a.nO.getError();if(!b)return;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.m9
=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AII=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nO.drawArraysInstanced(b,c,d,e);b=a.nO.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AWJ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.nO.drawElementsInstanced(b,c,d,e,f);b=a.nO.getError();if(!b)return;g=new X;h=Bq(b,4);i=new I;i.m8=H(16);G(i,i.m7,B(136));K(i,i.m7,b,10);G(i,i.m7,B(59));b=i.m7;if(h===null)h=B(2);G(i,b,h);j=new M;k=i.m8;l=k.data;c=i.m7;P();d=l.length;if(c>=0&&c<=(d-0|0)){j.m9=O(k.data,0,c);g.m$=1;g.m_=1;g.na=j;D(g);}g=new L;Bd(g);D(g);}
let AHR=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.nc;e=0;while(e<b){f=a.nO.createVertexArray();g=a.vh;a.vh=g+1|0;Ct(a.vz,g,CA(f));E0(c,g);e=e+1|0;}B7(c,d);b=a.nO.getError();if(!b)return;c=new X;h=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.m8;k=j.data;e=f.m7;P();l=k.length;if(e>=0&&e<=(l-0|0)){i.m9=O(j.data,0,e);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AID=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.nd;e=a.tx;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindTexture(b,e);b=a.nO.getError();if(!b)return;d=new X;i=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.m8;k=f.data;c=e.m7;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.m9
=O(f.data,0,c);d.m$=1;d.m_=1;d.na=j;D(d);}d=new L;Bd(d);D(d);}
let AU1=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.clear(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let APN=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.nd.clearColor(b,c,d,e);f=a.nO.getError();if(!f)return;g=new X;h=Bq(f,4);i=new I;i.m8=H(16);G(i,i.m7,B(136));K(i,i.m7,f,10);G(i,i.m7,B(59));f=i.m7;if(h===null)h=B(2);G(i,f,h);j=new M;k=i.m8;l=k.data;m=i.m7;P();n=l.length;if(m>=0&&m<=(n-0|0)){j.m9=O(k.data,0,m);g.m$=1;g.m_=1;g.na=j;D(g);}g=new L;Bd(g);D(g);}
let AHN=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.depthMask(!!b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AVE=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.disable(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AKS=(a,b,c,d)=>{let e,f,g,h,i,j;a.nd.drawArrays(b,c,d);b=a.nO.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let ASr=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.nd;g=e.nc;f.drawElements(b,c,d,g);b=a.nO.getError();if(!b)return;e=new X;h=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.m8;k=j.data;c=f.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);e.m$=1;e.m_=1;e.na=i;D(e);}e=new L;Bd(e);D(e);}
let ATL=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.enable(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AFQ=(a,b)=>{return Bk(a.nd.getParameter(b));}
let AGT=(a,b,c)=>{let d,e,f,g,h,i,j;a.nd.pixelStorei(b,c);b=a.nO.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let AQe=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;RJ(a,b,c,d,e,f,g,h,i,j);b=a.nO.getError();if(!b)return;j=new X;k=Bq(b,4);l=new I;l.m8=H(16);G(l,l.m7,B(136));K(l,l.m7,b,10);G(l,l.m7,B(59));b=l.m7;if(k===null)k=B(2);G(l,b,k);m=new M;n=l.m8;o=n.data;c=l.m7;P();d=o.length;if(c>=0&&c<=(d-0|0)){m.m9=O(n.data,0,c);j.m$=1;j.m_=1;j.na=m;D(j);}j=new L;Bd(j);D(j);}
let AKG=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.nd.texParameterf(b,c,d);b=a.nO.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();k=j.length;if(c>=0&&c<=(k-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let AMj=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.viewport(b,c,d,e);b=a.nO.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AOV=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;d=a.pg;if(!c)d=!d.nF?null:d.nD;else{e=d.nB;b=T(Y(V(J(c),E(2135587861, 2654435769)),d.nG));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.nE;}}d=b<0?null:d.nC.data[b];}i=d===null?null:d.nJ;a.nd.attachShader(h,i);b
=a.nO.getError();if(!b)return;d=new X;j=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(j===null)j=B(2);G(h,b,j);i=new M;e=h.m8;k=e.data;c=h.m7;P();f=k.length;if(c>=0&&c<=(f-0|0)){i.m9=O(e.data,0,c);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;Bd(d);D(d);}
let AWe=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.nd;e=a.p$;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindBuffer(b,e);b=a.nO.getError();if(!b)return;d=new X;i=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.m8;k=f.data;c=e.m7;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.m9
=O(f.data,0,c);d.m$=1;d.m_=1;d.na=j;D(d);}d=new L;Bd(d);D(d);}
let ALp=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.blendFuncSeparate(b,c,d,e);b=a.nO.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AP4=(a,b,c,d,e)=>{let f,g,h,i,j;PL(a,b,c,d,e);b=a.nO.getError();if(!b)return;d=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();e=j.length;if(c>=0&&c<=(e-0|0)){h.m9=O(i.data,0,c);d.m$=1;d.m_=1;d.na=h;D(d);}d=new L;Bd(d);D(d);}
let AV_=(a,b,c,d,e)=>{let f,g,h,i,j;PK(a,b,c,d,e);b=a.nO.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let AQ8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.pg;if(!b)c=!c.nF?null:c.nD;else{d=c.nB;e=T(Y(V(J(b),E(2135587861, 2654435769)),c.nG));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nE;}}c=e<0?null:c.nC.data[e];}BE();g=c===null?null:c.nJ;a.nd.compileShader(g);b=a.nO.getError();if(!b)return;c=new X;h=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(h===null)h=B(2);G(g,b,h);i=new M;d=g.m8;j=d.data;e=g.m7;P();f=j.length;if(e>=0&&e<=(f-0|0)){i.m9=O(d.data,
0,e);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AXx=a=>{let b,c,d,e,f,g,h,i,j;b=a.nd.createProgram();c=a.sF;a.sF=c+1|0;Ct(a.op,c,CA(b));d=a.nO.getError();if(!d)return c;b=new X;e=Bq(d,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,d,10);G(f,f.m7,B(59));d=f.m7;if(e===null)e=B(2);G(f,d,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;Bd(b);D(b);}
let ASN=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd.createShader(b);d=a.st;a.st=d+1|0;Ct(a.pg,d,CA(c));b=a.nO.getError();if(!b)return d;c=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;d=f.m7;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.m9=O(h.data,0,d);c.m$=1;c.m_=1;c.na=g;D(c);}c=new L;Bd(c);D(c);}
let AXm=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.disableVertexAttribArray(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AId=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.drawElements(b,c,d,e);b=a.nO.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let ASR=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.enableVertexAttribArray(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AU4=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.generateMipmap(b);b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let ANC=(a,b,c,d,e)=>{let f,g,h,i,j;f=N7(a,b,c,d,e);b=a.nO.getError();if(!b)return f;d=new X;g=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.m8;i=h.data;c=e.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=f;D(d);}d=new L;Bd(d);D(d);}
let AUZ=(a,b,c,d,e)=>{let f,g,h,i,j;f=QC(a,b,c,d,e);b=a.nO.getError();if(!b)return f;d=new X;g=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.m8;i=h.data;c=e.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=f;D(d);}d=new L;Bd(d);D(d);}
let AQv=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;b=a.nd.getAttribLocation(h,B0(c));f=a.nO.getError();if(!f)return b;c=new X;i=Bq(f,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,f,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);h=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g
-0|0)){h.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;Bd(c);D(c);}
let ALv=(a,b,c)=>{let d,e,f,g,h,i,j;if(b!=34045)L9(a,b,c);else{M_(c,0,a.nO.getParameter(b));c.nc=0;c.nb=c.nt;c.no=(-1);}b=a.nO.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AJF=(a,b,c,d)=>{let e,f,g,h,i,j;Rq(a,b,c,d);b=a.nO.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let AGS=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c=Bk(c.getProgramInfoLog(d));b=a.nO.getError();if(!b)return c;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=
(g-0|0)){i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AXv=(a,b,c,d)=>{let e,f,g,h,i,j;O3(a,b,c,d);b=a.nO.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let AHv=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.pg;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c=Bk(c.getShaderInfoLog(d));b=a.nO.getError();if(!b)return c;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g
-0|0)){i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AGU=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nd;e=a.op;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;c=d.getUniformLocation(e,B0(c));if(c===null)g=(-1);else{d=a.pI;if(!b)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));v:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break v;}if(h==b)break;g=(g+1|0)&d.nE;}}d=g<0?
null:d.nC.data[g];}d=d;if(d===null){d=DY(51,0.800000011920929);Ct(a.pI,b,d);}g=a.sU;a.sU=g+1|0;Ct(d,g,CA(c));}b=a.nO.getError();if(!b)return g;c=new X;i=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.m8;j=f.data;g=d.m7;P();h=j.length;if(g>=0&&g<=(h-0|0)){e.m9=O(f.data,0,g);c.m$=1;c.m_=1;c.na=e;D(c);}c=new L;Bd(c);D(c);}
let AWy=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.linkProgram(d);b=a.nO.getError();if(!b)return;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.m9=
O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AGP=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nd;e=a.pg;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.shaderSource(e,B0(c));b=a.nO.getError();if(!b)return;c=new X;i=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.m8;j=f.data;g=d.m7;P();h=j.length;if(g>=0&&g<=(h-0|0))
{e.m9=O(f.data,0,g);c.m$=1;c.m_=1;c.na=e;D(c);}c=new L;Bd(c);D(c);}
let AHZ=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.nd;f=d;e.texParameterf(b,c,f);b=a.nO.getError();if(!b)return;e=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);e.m$=1;e.m_=1;e.na=i;D(e);}e=new L;Bd(e);D(e);}
let AIY=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.pI;e=a.qc;if(!e)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(e),E(2135587861, 2654435769)),d.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nE;}}d=g<0?null:d.nC.data[g];}d=d;if(!b)d=!d.nF?null:d.nD;else{f=d.nB;e=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.nE;}}d=e<0?null:d.nC.data[e];}BE();i=d===null?null:d.nJ;a.nd.uniform1i(i,c);b=a.nO.getError();if
(!b)return;d=new X;i=Bq(b,4);j=new I;j.m8=H(16);G(j,j.m7,B(136));K(j,j.m7,b,10);G(j,j.m7,B(59));b=j.m7;if(i===null)i=B(2);G(j,b,i);k=new M;f=j.m8;l=f.data;c=j.m7;P();e=l.length;if(c>=0&&c<=(e-0|0)){k.m9=O(f.data,0,c);d.m$=1;d.m_=1;d.na=k;D(d);}d=new L;Bd(d);D(d);}
let AX8=(a,b)=>{let c,d,e,f,g,h,i,j;a.qc=b;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.useProgram(d);b=a.nO.getError();if(!b)return;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g-0|0))
{i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let ATm=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.nd.vertexAttribPointer(b,c,d,!!e,f,g);b=a.nO.getError();if(!b)return;h=new X;i=Bq(b,4);j=new I;j.m8=H(16);G(j,j.m7,B(136));K(j,j.m7,b,10);G(j,j.m7,B(59));b=j.m7;if(i===null)i=B(2);G(j,b,i);k=new M;l=j.m8;m=l.data;c=j.m7;P();d=m.length;if(c>=0&&c<=(d-0|0)){k.m9=O(l.data,0,c);h.m$=1;h.m_=1;h.na=k;D(h);}h=new L;Bd(h);D(h);}
function PF(){let a=this;C.call(a);a.Af=0;a.zw=0;a.zH=0;a.Dx=null;a.Ej=null;a.sm=null;a.Dm=B(137);}
let A7e=(a,b,c,d)=>{let e=new PF();ZU(e,a,b,c,d);return e;}
let ZU=(a,b,c,d,e)=>{a.Dm=B(137);Ny();if(b===AEX){GZ();a.sm=R$;}else if(b===ACD){GZ();a.sm=R$;}else if(b===ATV){GZ();a.sm=Ts;}else if(b===ASv){GZ();a.sm=Ts;}else if(b!==Qd){GZ();a.sm=APx;}else{GZ();a.sm=Yy;}b=a.sm;GZ();if(b===R$)Lx(a,B(138),c);else if(b===Yy)Lx(a,B(139),c);else if(b===Ts)Lx(a,B(140),c);else{a.Af=(-1);a.zw=(-1);a.zH=(-1);d=B(43);e=B(43);}a.Dx=d;a.Ej=e;}
let Lx=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=PM(G8(b,0),c);if(H9(d)){b=d.pK;e=b.pN;if(!e){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}f=BS(1,b.qD);if(f>=0){b=new L;P();c=new I;CU(c);c.m8=H(16);K(c,c.m7,1,10);c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}g=b.oj.data;if(g[2]<0)h=null;else{b=b.rf;if(!e){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}if(f>=0){b=new L;P();c=new I;CU(c);c.m8=H(16);K(c,c.m7,1,10);c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}i=g[2];if(!e)D(A23());if(f>=0)D(A3S(ABk(1)));h=PI(b,i,g[3]);}g=(ZZ(h,B(141))).data;a.Af=Lr(a,g[0],2);j=g.length;a.zw
=j<2?0:Lr(a,g[1],0);a.zH=j<3?0:Lr(a,g[2],0);}else{h=ED;b=new I;b.m8=H(16);G(b,b.m7,B(142));G(b,b.m7,c);k=W(b);if(h.t0>=2){if(BJ===null){c=new CP;c.oK=DF;b=new I;b.m8=H(16);c.nV=b;c.oI=H(32);c.oQ=0;CO();c.oO=CW;BJ=c;}h=BJ;b=new I;b.m8=H(16);G(b,b.m7,B(137));G(b,b.m7,B(72));j=b.m7;if(k===null)k=B(2);G(b,j,k);c=W(b);b=h.nV;G(b,b.m7,c);i=b.m7;Bh(b,i,i+1|0);b.m8.data[i]=10;CY(h);}a.Af=2;a.zw=0;a.zH=0;}}
let Lr=(a,b,c)=>{let d,e,f,g,h,$$je;b:{try{d=CE(b);}catch($$e){$$je=BG($$e);if($$je instanceof Cj){break b;}else{throw $$e;}}return d;}e=ED;f=new I;f.m8=H(16);G(f,f.m7,B(143));G(f,f.m7,b);G(f,f.m7,B(144));K(f,f.m7,c,10);b=W(f);if(e.t0>=1){if(ES===null){e=new CP;e.oK=Jo;f=new I;f.m8=H(16);e.nV=f;e.oI=H(32);e.oQ=0;CO();e.oO=CW;ES=e;}e=ES;f=new I;f.m8=H(16);G(f,f.m7,B(145));G(f,f.m7,B(72));d=f.m7;if(b===null)b=B(2);G(f,d,b);g=W(f);b=e.nV;G(b,b.m7,g);h=b.m7;Bh(b,h,h+1|0);b.m8.data[h]=10;CY(e);}return c;}
let DJ=F(BH);
let AEX=null;let ATV=null;let AZQ=null;let ASv=null;let Qd=null;let ACD=null;let A00=null;let Ny=()=>{Ny=Ba(DJ);AJ4();}
let AJ4=()=>{let b,c,d,e,f,g;b=new DJ;Ny();b.ni=B(4);b.nf=0;AEX=b;c=new DJ;c.ni=B(146);c.nf=1;ATV=c;d=new DJ;d.ni=B(147);d.nf=2;AZQ=d;e=new DJ;e.ni=B(148);e.nf=3;ASv=e;f=new DJ;f.ni=B(149);f.nf=4;Qd=f;g=new DJ;g.ni=B(150);g.nf=5;ACD=g;A00=N(DJ,[b,c,d,e,f,g]);}
let Sc=F(0);
function RY(){C.call(this);this.DA=null;}
let AKK=a=>{return;}
let Tz=F(I0);
let AW4=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.nd;e=a.tx;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindTexture(b,e);b=a.nd.getError();if(!b)return;d=new X;i=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.m8;k=f.data;c=e.m7;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.m9
=O(f.data,0,c);d.m$=1;d.m_=1;d.na=j;D(d);}d=new L;Bd(d);D(d);}
let AJN=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.clear(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AKC=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.nd.clearColor(b,c,d,e);f=a.nd.getError();if(!f)return;g=new X;h=Bq(f,4);i=new I;i.m8=H(16);G(i,i.m7,B(136));K(i,i.m7,f,10);G(i,i.m7,B(59));f=i.m7;if(h===null)h=B(2);G(i,f,h);j=new M;k=i.m8;l=k.data;m=i.m7;P();n=l.length;if(m>=0&&m<=(n-0|0)){j.m9=O(k.data,0,m);g.m$=1;g.m_=1;g.na=j;D(g);}g=new L;Bd(g);D(g);}
let AP2=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.depthMask(!!b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AXH=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.disable(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let ANK=(a,b,c,d)=>{let e,f,g,h,i,j;a.nd.drawArrays(b,c,d);b=a.nd.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let AXd=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.nd;g=e.nc;f.drawElements(b,c,d,g);b=a.nd.getError();if(!b)return;e=new X;h=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(h===null)h=B(2);G(f,b,h);i=new M;j=f.m8;k=j.data;c=f.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);e.m$=1;e.m_=1;e.na=i;D(e);}e=new L;Bd(e);D(e);}
let AIh=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.enable(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AOK=(a,b)=>{return Bk(a.nd.getParameter(b));}
let ARc=(a,b,c)=>{let d,e,f,g,h,i,j;a.nd.pixelStorei(b,c);b=a.nd.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let ALx=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o;RJ(a,b,c,d,e,f,g,h,i,j);b=a.nd.getError();if(!b)return;j=new X;k=Bq(b,4);l=new I;l.m8=H(16);G(l,l.m7,B(136));K(l,l.m7,b,10);G(l,l.m7,B(59));b=l.m7;if(k===null)k=B(2);G(l,b,k);m=new M;n=l.m8;o=n.data;c=l.m7;P();d=o.length;if(c>=0&&c<=(d-0|0)){m.m9=O(n.data,0,c);j.m$=1;j.m_=1;j.na=m;D(j);}j=new L;Bd(j);D(j);}
let AK0=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.nd.texParameterf(b,c,d);b=a.nd.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();k=j.length;if(c>=0&&c<=(k-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let AXr=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.viewport(b,c,d,e);b=a.nd.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AGL=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;d=a.pg;if(!c)d=!d.nF?null:d.nD;else{e=d.nB;b=T(Y(V(J(c),E(2135587861, 2654435769)),d.nG));i:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break i;}if(f==c)break;b=(b+1|0)&d.nE;}}d=b<0?null:d.nC.data[b];}i=d===null?null:d.nJ;a.nd.attachShader(h,i);b
=a.nd.getError();if(!b)return;d=new X;j=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(j===null)j=B(2);G(h,b,j);i=new M;e=h.m8;k=e.data;c=h.m7;P();f=k.length;if(c>=0&&c<=(f-0|0)){i.m9=O(e.data,0,c);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;Bd(d);D(d);}
let AFP=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.nd;e=a.p$;if(!c)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(c),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==c)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.bindBuffer(b,e);b=a.nd.getError();if(!b)return;d=new X;i=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(i===null)i=B(2);G(e,b,i);j=new M;f=e.m8;k=f.data;c=e.m7;P();g=k.length;if(c>=0&&c<=(g-0|0)){j.m9
=O(f.data,0,c);d.m$=1;d.m_=1;d.na=j;D(d);}d=new L;Bd(d);D(d);}
let AFL=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.blendFuncSeparate(b,c,d,e);b=a.nd.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AOj=(a,b,c,d,e)=>{let f,g,h,i,j;PL(a,b,c,d,e);b=a.nd.getError();if(!b)return;d=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();e=j.length;if(c>=0&&c<=(e-0|0)){h.m9=O(i.data,0,c);d.m$=1;d.m_=1;d.na=h;D(d);}d=new L;Bd(d);D(d);}
let AMu=(a,b,c,d,e)=>{let f,g,h,i,j;PK(a,b,c,d,e);b=a.nd.getError();if(!b)return;e=new X;f=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(f===null)f=B(2);G(g,b,f);h=new M;i=g.m8;j=i.data;c=g.m7;P();d=j.length;if(c>=0&&c<=(d-0|0)){h.m9=O(i.data,0,c);e.m$=1;e.m_=1;e.na=h;D(e);}e=new L;Bd(e);D(e);}
let AXR=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.pg;if(!b)c=!c.nF?null:c.nD;else{d=c.nB;e=T(Y(V(J(b),E(2135587861, 2654435769)),c.nG));n:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break n;}if(f==b)break;e=(e+1|0)&c.nE;}}c=e<0?null:c.nC.data[e];}BE();g=c===null?null:c.nJ;a.nd.compileShader(g);b=a.nd.getError();if(!b)return;c=new X;h=Bq(b,4);g=new I;g.m8=H(16);G(g,g.m7,B(136));K(g,g.m7,b,10);G(g,g.m7,B(59));b=g.m7;if(h===null)h=B(2);G(g,b,h);i=new M;d=g.m8;j=d.data;e=g.m7;P();f=j.length;if(e>=0&&e<=(f-0|0)){i.m9=O(d.data,
0,e);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let ARA=a=>{let b,c,d,e,f,g,h,i,j;b=a.nd.createProgram();c=a.sF;a.sF=c+1|0;Ct(a.op,c,CA(b));d=a.nd.getError();if(!d)return c;b=new X;e=Bq(d,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,d,10);G(f,f.m7,B(59));d=f.m7;if(e===null)e=B(2);G(f,d,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;Bd(b);D(b);}
let AXC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd.createShader(b);d=a.st;a.st=d+1|0;Ct(a.pg,d,CA(c));b=a.nd.getError();if(!b)return d;c=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;d=f.m7;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.m9=O(h.data,0,d);c.m$=1;c.m_=1;c.na=g;D(c);}c=new L;Bd(c);D(c);}
let ARx=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.disableVertexAttribArray(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AMJ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.nd.drawElements(b,c,d,e);b=a.nd.getError();if(!b)return;f=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Bd(f);D(f);}
let AXI=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.enableVertexAttribArray(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AQE=(a,b)=>{let c,d,e,f,g,h,i,j;a.nd.generateMipmap(b);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let AOn=(a,b,c,d,e)=>{let f,g,h,i,j;f=N7(a,b,c,d,e);b=a.nd.getError();if(!b)return f;d=new X;g=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.m8;i=h.data;c=e.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=f;D(d);}d=new L;Bd(d);D(d);}
let AIG=(a,b,c,d,e)=>{let f,g,h,i,j;f=QC(a,b,c,d,e);b=a.nd.getError();if(!b)return f;d=new X;g=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(g===null)g=B(2);G(e,b,g);f=new M;h=e.m8;i=h.data;c=e.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){f.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=f;D(d);}d=new L;Bd(d);D(d);}
let AMR=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();h=d===null?null:d.nJ;b=a.nd.getAttribLocation(h,B0(c));f=a.nd.getError();if(!f)return b;c=new X;i=Bq(f,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,f,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);h=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g
-0|0)){h.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;Bd(c);D(c);}
let AGs=(a,b,c)=>{let d,e,f,g,h,i,j;L9(a,b,c);b=a.nd.getError();if(!b)return;c=new X;d=Bq(b,4);e=new I;e.m8=H(16);G(e,e.m7,B(136));K(e,e.m7,b,10);G(e,e.m7,B(59));b=e.m7;if(d===null)d=B(2);G(e,b,d);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
let ALC=(a,b,c,d)=>{let e,f,g,h,i,j;Rq(a,b,c,d);b=a.nd.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let ALI=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c=Bk(c.getProgramInfoLog(d));b=a.nd.getError();if(!b)return c;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=
(g-0|0)){i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AG2=(a,b,c,d)=>{let e,f,g,h,i,j;O3(a,b,c,d);b=a.nd.getError();if(!b)return;d=new X;e=Bq(b,4);f=new I;f.m8=H(16);G(f,f.m7,B(136));K(f,f.m7,b,10);G(f,f.m7,B(59));b=f.m7;if(e===null)e=B(2);G(f,b,e);g=new M;h=f.m8;i=h.data;c=f.m7;P();j=i.length;if(c>=0&&c<=(j-0|0)){g.m9=O(h.data,0,c);d.m$=1;d.m_=1;d.na=g;D(d);}d=new L;Bd(d);D(d);}
let ATr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.pg;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c=Bk(c.getShaderInfoLog(d));b=a.nd.getError();if(!b)return c;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g
-0|0)){i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AVk=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nd;e=a.op;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;c=d.getUniformLocation(e,B0(c));if(c===null)g=(-1);else{d=a.pI;if(!b)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));v:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break v;}if(h==b)break;g=(g+1|0)&d.nE;}}d=g<0?
null:d.nC.data[g];}d=d;if(d===null){d=DY(51,0.800000011920929);Ct(a.pI,b,d);}g=a.sU;a.sU=g+1|0;Ct(d,g,CA(c));}b=a.nd.getError();if(!b)return g;c=new X;i=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.m8;j=f.data;g=d.m7;P();h=j.length;if(g>=0&&g<=(h-0|0)){e.m9=O(f.data,0,g);c.m$=1;c.m_=1;c.na=e;D(c);}c=new L;Bd(c);D(c);}
let APk=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.linkProgram(d);b=a.nd.getError();if(!b)return;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g-0|0)){i.m9=
O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AXa=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.nd;e=a.pg;if(!b)e=!e.nF?null:e.nD;else{f=e.nB;g=T(Y(V(J(b),E(2135587861, 2654435769)),e.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==b)break;g=(g+1|0)&e.nE;}}e=g<0?null:e.nC.data[g];}BE();e=e===null?null:e.nJ;d.shaderSource(e,B0(c));b=a.nd.getError();if(!b)return;c=new X;i=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(i===null)i=B(2);G(d,b,i);e=new M;f=d.m8;j=f.data;g=d.m7;P();h=j.length;if(g>=0&&g<=(h-0|0))
{e.m9=O(f.data,0,g);c.m$=1;c.m_=1;c.na=e;D(c);}c=new L;Bd(c);D(c);}
let AVa=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=a.nd;f=d;e.texParameterf(b,c,f);b=a.nd.getError();if(!b)return;e=new X;g=Bq(b,4);h=new I;h.m8=H(16);G(h,h.m7,B(136));K(h,h.m7,b,10);G(h,h.m7,B(59));b=h.m7;if(g===null)g=B(2);G(h,b,g);i=new M;j=h.m8;k=j.data;c=h.m7;P();d=k.length;if(c>=0&&c<=(d-0|0)){i.m9=O(j.data,0,c);e.m$=1;e.m_=1;e.na=i;D(e);}e=new L;Bd(e);D(e);}
let AXw=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.pI;e=a.qc;if(!e)d=!d.nF?null:d.nD;else{f=d.nB;g=T(Y(V(J(e),E(2135587861, 2654435769)),d.nG));n:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break n;}if(h==e)break;g=(g+1|0)&d.nE;}}d=g<0?null:d.nC.data[g];}d=d;if(!b)d=!d.nF?null:d.nD;else{f=d.nB;e=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));q:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break q;}if(g==b)break;e=(e+1|0)&d.nE;}}d=e<0?null:d.nC.data[e];}BE();i=d===null?null:d.nJ;a.nd.uniform1i(i,c);b=a.nd.getError();if
(!b)return;d=new X;i=Bq(b,4);j=new I;j.m8=H(16);G(j,j.m7,B(136));K(j,j.m7,b,10);G(j,j.m7,B(59));b=j.m7;if(i===null)i=B(2);G(j,b,i);k=new M;f=j.m8;l=f.data;c=j.m7;P();e=l.length;if(c>=0&&c<=(e-0|0)){k.m9=O(f.data,0,c);d.m$=1;d.m_=1;d.na=k;D(d);}d=new L;Bd(d);D(d);}
let AG3=(a,b)=>{let c,d,e,f,g,h,i,j;a.qc=b;c=a.nd;d=a.op;if(!b)d=!d.nF?null:d.nD;else{e=d.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),d.nG));n:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break n;}if(g==b)break;f=(f+1|0)&d.nE;}}d=f<0?null:d.nC.data[f];}BE();d=d===null?null:d.nJ;c.useProgram(d);b=a.nd.getError();if(!b)return;c=new X;h=Bq(b,4);d=new I;d.m8=H(16);G(d,d.m7,B(136));K(d,d.m7,b,10);G(d,d.m7,B(59));b=d.m7;if(h===null)h=B(2);G(d,b,h);i=new M;e=d.m8;j=e.data;f=d.m7;P();g=j.length;if(f>=0&&f<=(g-0|0))
{i.m9=O(e.data,0,f);c.m$=1;c.m_=1;c.na=i;D(c);}c=new L;Bd(c);D(c);}
let AJu=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.nd.vertexAttribPointer(b,c,d,!!e,f,g);b=a.nd.getError();if(!b)return;h=new X;i=Bq(b,4);j=new I;j.m8=H(16);G(j,j.m7,B(136));K(j,j.m7,b,10);G(j,j.m7,B(59));b=j.m7;if(i===null)i=B(2);G(j,b,i);k=new M;l=j.m8;m=l.data;c=j.m7;P();d=m.length;if(c>=0&&c<=(d-0|0)){k.m9=O(l.data,0,c);h.m$=1;h.m_=1;h.na=k;D(h);}h=new L;Bd(h);D(h);}
function ACl(){let a=this;C.call(a);a.rg=0;a.nB=null;a.nC=null;a.nD=null;a.nF=0;a.Bm=0.0;a.xY=0;a.nG=0;a.nE=0;}
let DY=(a,b)=>{let c=new ACl();AMs(c,a,b);return c;}
let AMs=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.Bm=c;d=MQ(b,c);a.xY=d*c|0;b=d-1|0;a.nE=b;a.nG=Ft(J(b));a.nB=R(d);a.nC=Bo(C,d);return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(60));El(f,f.m7,c);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}
let Ct=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.nD;a.nD=c;if(!a.nF){a.nF=1;a.rg=a.rg+1|0;}return d;}e=a.nB;f=T(Y(V(J(b),E(2135587861, 2654435769)),a.nG));d:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.nE;}}if(f>=0){e=a.nC.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.nC.data[f]=c;b=a.rg+1|0;a.rg=b;if(b>=a.xY)ADg(a,g.length<<1);return null;}
let Nh=(a,b)=>{let c,d,e;if(!b)return !a.nF?null:a.nD;c=a.nB;d=T(Y(V(J(b),E(2135587861, 2654435769)),a.nG));k:{while(true){e=c.data[d];if(!e){d= -(d+1|0)|0;break k;}if(e==b)break;d=(d+1|0)&a.nE;}}return d<0?null:a.nC.data[d];}
let IQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.nF)return null;a.nF=0;c=a.nD;a.nD=null;a.rg=a.rg-1|0;return c;}d=a.nB;e=V(J(b),E(2135587861, 2654435769));f=a.nG;g=T(Y(e,f));d:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break d;}if(i==b)break;g=(g+1|0)&a.nE;}}if(g<0)return null;j=a.nC.data;k=j[g];l=a.nE;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=T(Y(V(J(n),E(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.rg=a.rg-1|0;return k;}
let AE$=(a,b,c)=>{let d,e,f,g;a:{d=a.nC;if(b===null){if(a.nF&&a.nD===null)return 1;d=d.data;e=a.nB;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.nD)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.nF){g=a.nD;if(b===g?1:g instanceof Fe&&g.qy==b.qy?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Fe&&g.qy==b.qy?1:0)return 1;f=f+(-1)|0;}}return 0;}
let ADg=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.nB.data.length;a.xY=b*a.Bm|0;d=b-1|0;a.nE=d;d=Ft(J(d));a.nG=d;e=a.nB;f=a.nC;g=R(b);a.nB=g;h=Bo(C,b);a.nC=h;if(a.rg>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break b;k=e.data[j];if(k){l=f.data[j];b=T(Y(V(J(k),E(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.nE;}h[b]=k;i[b]=l;}j=j+1|0;}}}}
function ZQ(){let a=this;C.call(a);a.qB=0;a.rT=null;a.tX=0;a.Dc=0.0;a.yj=0;a.tD=0;a.rE=0;}
let AHL=(a,b)=>{let c=new ZQ();AK3(c,a,b);return c;}
let AK3=(a,b,c)=>{let d,e,f;if(c>0.0&&c<1.0){a.Dc=c;d=MQ(b,c);a.yj=d*c|0;b=d-1|0;a.rE=b;a.tD=Ft(J(b));a.rT=R(d);return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(60));El(f,f.m7,c);f=W(f);e.m$=1;e.m_=1;e.na=f;D(e);}
let WI=(a,b)=>{let c,d,e,f;if(!b){if(a.tX)return 0;a.tX=1;a.qB=a.qB+1|0;return 1;}c=a.rT;d=T(Y(V(J(b),E(2135587861, 2654435769)),a.tD));d:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break d;}if(f==b)break;d=(d+1|0)&a.rE;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.qB+1|0;a.qB=b;if(b>=a.yj)WP(a,e.length<<1);return 1;}
let AEd=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.tX)return 0;a.tX=0;a.qB=a.qB-1|0;return 1;}c=a.rT;d=V(J(b),E(2135587861, 2654435769));e=a.tD;f=T(Y(d,e));d:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break d;}if(h==b)break;f=(f+1|0)&a.rE;}}if(f<0)return 0;h=a.rE;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=T(Y(V(J(b),E(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.qB=a.qB-1|0;return 1;}
let WP=(a,b)=>{let c,d,e,f,g,h,i;b:{c=a.rT.data.length;a.yj=b*a.Dc|0;d=b-1|0;a.rE=d;d=Ft(J(d));a.tD=d;e=a.rT;f=R(b);a.rT=f;if(a.qB>0){f=f.data;g=0;while(true){if(g>=c)break b;h=e.data[g];if(h){i=T(Y(V(J(h),E(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.rE;}f[i]=h;}g=g+1|0;}}}}
let SR=F(0);
function Q9(){C.call(this);this.wE=null;}
let AGG=a=>{let b;b=a.wE;b.w0=1;AC6(B0(b.zf));}
let AKm=a=>{let b;b=a.wE;b.w0=1;AC6(B0(b.zf));}
let AGn=a=>{a.wE.w0=0;}
let TX=F(0);
function T5(){let a=this;C.call(a);a.t4=null;a.zU=null;a.ET=null;}
let Ry=0;let A4y=()=>{let a=new T5();AVP(a);return a;}
let AVP=a=>{let b,c,d,e,f,$$je;b=AI$();a.t4=b;c=ARu(b);a.zU=c;b=new QQ;d=a.t4;e=new Cf;e.og=0;e.np=Bo(C,16);b.pJ=e;b.rV=2147483647;b.DU=d;b.D5=c;a.ET=b;b=ED.wb;FB(b);b:{try{CT(b,a);DR(b);break b;}catch($$e){$$je=BG($$e);d=$$je;}DR(b);D(d);}if(a.t4.state!=='running'?1:0){b=new N0;b.ER=a;AJr(a.t4,B$(b,"unlockFunction"));}else{if(!Ry&&ED.t0>=2){if(BJ===null){e=new CP;e.oK=DF;c=new I;CU(c);c.m8=H(16);e.nV=c;e.oI=H(32);e.oQ=0;CO();e.oO=CW;BJ=e;}e=BJ;c=new I;c.m8=H(16);Dm(c,c.m7,Dp(B(151)));Dm(c,c.m7,Dp(B(72)));Dm(c,
c.m7,Dp(B(152)));d=W(c);b=e.nV;G(b,b.m7,d);f=b.m7;Bh(b,f,f+1|0);b.m8.data[f]=10;CY(e);}Ry=1;}}
let ADa=a=>{a.zU.disconnect(a.t4.destination);}
let AA0=a=>{a.zU.connect(a.t4.destination);}
let AJr=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});}
let AI$=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;}
let ARu=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;}
function NK(){D$.call(this);this.Dv=null;}
let SO=F(CL);
function Je(){DL.call(this);this.q2=null;}
let Qk=a=>{let b,c,d,e,f,$$je;b:{try{b=Nm(a.q2,null);}catch($$e){$$je=BG($$e);if($$je instanceof CL){c=$$je;break b;}else{throw $$e;}}return b;}d=new X;b=new I;b.m8=H(16);G(b,b.m7,B(42));e=a.q2.qN.qE;if(e.nP===null)e.nP=Bk(e.nA.$meta.name);f=e.nP;G(b,b.m7,f);b=W(b);d.m$=1;d.m_=1;d.na=b;d.oY=c;D(d);}
let L=F(BL);
let AHJ=()=>{let a=new L();AJh(a);return a;}
let A3S=a=>{let b=new L();Jx(b,a);return b;}
let AJh=a=>{a.m$=1;a.m_=1;}
let Jx=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let F0=F(0);
let Pd=F(0);
let Qr=F(0);
let Qi=F(0);
let RE=F(0);
let TS=F(0);
let So=F(0);
let OM=F(0);
let Lf=F(0);
let Vm=F();
let ART=(a,b)=>{b=a.bp(b);BE();return b===null?null:b instanceof Hp()&&b instanceof D9?b.nJ:b;}
let AUE=(a,b,c)=>{a.fI(Bk(b),D6(c,"handleEvent"));}
let AT2=(a,b,c)=>{a.fJ(Bk(b),D6(c,"handleEvent"));}
let ARL=(a,b,c,d)=>{a.fK(Bk(b),D6(c,"handleEvent"),d?1:0);}
let AWp=(a,b)=>{return !!a.fL(b);}
let AJw=a=>{return a.fM();}
let AGm=(a,b,c,d)=>{a.fN(Bk(b),D6(c,"handleEvent"),d?1:0);}
let LG=F();
function IP(){let a=this;LG.call(a);a.x5=0;a.sC=null;a.BR=0.0;a.yn=0;a.v1=0;a.va=0;a.Df=0;}
let AYe=null;let AL4=null;let A7f=a=>{let b=new IP();Lb(b,a);return b;}
let Lb=(a,b)=>{let c,d,e;a.va=(-1);if(b<0){c=new Bc;c.m$=1;c.m_=1;D(c);}a.x5=0;if(!b)b=1;d=Bo(Jl,b);e=d.data;a.sC=d;b=e.length;a.v1=b;a.BR=0.75;a.yn=b*0.75|0;}
let En=(a,b,c)=>{let d,e,f,g,h,i,j;FB(a);try{if(b!==null&&c!==null){d:{if(!b.n_){d=0;while(true){if(d>=b.m9.length)break d;b.n_=(31*b.n_|0)+b.m9.charCodeAt(d)|0;d=d+1|0;}}}e=b.n_&2147483647;f=a.sC.data;g=e%f.length|0;h=f[g];while(h!==null){c:{d=h.Ca;if(!b.n_){i=0;while(true){if(i>=b.m9.length)break c;b.n_=(31*b.n_|0)+b.m9.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.n_&&h.pG.cG(b)?1:0)break;h=h.xm;}if(h!==null){j=h.qg;h.qg=c;return j;}a.Df=a.Df+1|0;d=a.x5+1|0;a.x5=d;if(d>a.yn){AAl(a);g=e%a.sC.data.length|0;}if(g<a.v1)a.v1
=g;if(g>a.va)a.va=g;u:{j=new Jl;j.pG=b;j.qg=c;if(!b.n_){d=0;while(true){if(d>=b.m9.length)break u;b.n_=(31*b.n_|0)+b.m9.charCodeAt(d)|0;d=d+1|0;}}}j.Ca=b.n_;f=a.sC.data;j.xm=f[g];f[g]=j;return null;}b=new C0;b.m$=1;b.m_=1;D(b);}finally{DR(a);}}
let AAl=a=>{let b,c,d,e,f,g,h,i,j;b=(a.sC.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=Bo(Jl,b);e=d.data;f=a.va+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.v1)break;h=a.sC.data[f];while(h!==null){i=(h.pG.cF()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.xm;h.xm=e[i];e[i]=h;h=j;}}a.v1=g;a.va=c;a.sC=d;a.yn=e.length*a.BR|0;}
let AXD=()=>{AYe=new KO;AL4=new KN;}
function Mw(){IP.call(this);this.EK=null;}
let Yp=F();
let EN=F(BH);
let Ts=null;let R$=null;let Yy=null;let APx=null;let A3j=null;let GZ=()=>{GZ=Ba(EN);AP9();}
let AP9=()=>{let b,c,d,e;b=new EN;GZ();b.ni=B(153);b.nf=0;Ts=b;c=new EN;c.ni=B(154);c.nf=1;R$=c;d=new EN;d.ni=B(149);d.nf=2;Yy=d;e=new EN;e.ni=B(155);e.nf=3;APx=e;A3j=N(EN,[b,c,d,e]);}
let D_=F();
let W6=F(D_);
let WG=F(D_);
let ZE=F(D_);
let AA8=F(D_);
let YE=F(D_);
function PV(){C.call(this);this.EB=null;}
let AN4=(a,b)=>{b.preventDefault();}
function PW(){C.call(this);this.E3=null;}
let AXf=(a,b)=>{b.preventDefault();}
function PS(){let a=this;C.call(a);a.AH=null;a.At=null;a.A1=null;}
let AAP=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Cf;e.og=1;e.np=Bo(C,16);f=0;while(true){if(f>=d)break b;g=c[f];h=Bk(g.name);i=Gh(h,46,h.m9.length-1|0);b=i==(-1)?B(43):B1(h,i+1|0,h.m9.length);j=b.m9.toLowerCase();if(j!==b.m9)b=ABZ(j);if(AIJ(b)){FO();j=Ih;}else{if(b===B(156))k=1;else if(!(B(156) instanceof M))k=0;else{j=B(156);k=b.m9!==j.m9?0:1;}h:{if(!k){if(b===B(157))k=1;else if(!(B(157) instanceof M))k=0;else{j=B(157);k=b.m9!==j.m9?0:1;}if(!k){if
(b===B(158))k=1;else if(!(B(158) instanceof M))k=0;else{j=B(158);k=b.m9!==j.m9?0:1;}if(!k){k=0;break h;}}}k=1;}if(k){FO();j=HB;}else if(!ANF(b)){FO();j=HQ;}else{FO();j=It;}}l=new FileReader();b=new RU;b.xr=a;b.yM=j;b.Ag=h;b.wq=e;b.Al=d;l.addEventListener("load",B$(b,"handleEvent"));FO();if(j!==HQ&&j!==HB){if(j===Ih)l.readAsDataURL(g);else if(j===It)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}}
let ASD=(a,b)=>{AAP(a,b);}
function QQ(){let a=this;DL.call(a);a.DU=null;a.D5=null;}
let SX=F(0);
function N0(){C.call(this);this.ER=null;}
let ALc=a=>{let b,c,d,e,f,g,h,i;if(!Ry&&ED.t0>=2){if(BJ===null){b=new CP;c=DF;CU(b);b.oK=c;c=new I;KS(c,16);b.nV=c;b.oI=H(32);b.oQ=0;CO();b.oO=CW;BJ=b;}b=BJ;c=new I;c.m8=H(16);Ed(c,c.m7,B(151));Ed(c,c.m7,B(72));Ed(c,c.m7,B(152));d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);i=b.nV;Gy(i,i.m7,d);Iz(i,i.m7,10);CY(b);}else D(AHJ());}Ry=1;}
let Wy=F(D_);
function Qf(){let a=this;C.call(a);a.nz=null;a.pk=0;a.yv=null;a.AC=0;a.tY=0;a.rY=0;a.oD=0;a.BV=null;}
let P0=(a,b)=>{return PM(a,b);}
let I7=(a,b,c)=>{let d,e,f,g,h,i,j;d=new I_;d.oy=Bo(C,10);e=PM(a,b);f=0;g=0;if(!b.m9.length){h=Bo(M,1);h.data[0]=B(43);return h;}a:{while(true){if(!H9(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.pK;if(!j.pN){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}if(0>=j.qD){b=new L;d=new I;CU(d);d.m8=H(16);K(d,d.m7,0,10);d=W(d);b.m$=1;b.m_=1;b.na=d;D(b);}j=B1(b,g,j.oj.data[0]);I9(d,d.n0+1|0);h=d.oy.data;g=d.n0;d.n0=g+1|0;h[g]=j;d.pQ=d.pQ+1|0;j=e.pK;if(!j.pN)break;if(0>=j.qD){b=new L;d=new I;CU(d);d.m8=H(16);K(d,d.m7,0,10);d=W(d);b.m$
=1;b.m_=1;b.na=d;D(b);}g=j.oj.data[1];f=i;}b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}r:{b=B1(b,g,b.m9.length);I9(d,d.n0+1|0);h=d.oy.data;g=d.n0;d.n0=g+1|0;h[g]=b;d.pQ=d.pQ+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break r;if(f<0)break;if(f>=d.n0)break;if(d.oy.data[f].m9.length)break r;SF(d,f);}b=new L;b.m$=1;b.m_=1;D(b);}}if(f<0)f=0;return Xj(d,Bo(M,f));}
let Pg=a=>{return a.nz.ph;}
let G8=(b,c)=>{let d;if(b===null){b=new C0;b.m$=1;b.m_=1;b.na=B(159);D(b);}if(c&&(c|255)!=255){b=new Bc;b.m$=1;b.m_=1;b.na=B(43);D(b);}S=1;d=new Qf;d.yv=Bo(DW,10);d.tY=(-1);d.rY=(-1);d.oD=(-1);return XH(d,b,c);}
let XH=(a,b,c)=>{let d,e,f;a.nz=A0B(b,c);a.pk=c;b=Ub(a,(-1),c,null);a.BV=b;d=a.nz;if(!d.ot&&!d.nv&&d.nw==d.pB&&!(d.on===null?0:1)?1:0){if(a.AC)b.fX();return a;}b=new DQ;e=d.ph;f=d.tm;b.m$=1;b.m_=1;b.ob=(-1);b.pt=B(43);b.pi=e;b.ob=f;D(b);}
let AEK=(a,b)=>{let c,d,e,f,g,h;c=new CI;d=a.pk;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;BA();g=new Bt;g.nn=R(64);c.nr=g;g=new Bt;g.nn=R(2);c.nu=g;c.xc=e;c.x7=f;while(true){h=a.nz;d=h.ot;if(!d&&!h.nv&&h.nw==h.pB&&!(h.on===null?0:1)?1:0)break;f=!d&&!h.nv&&h.nw==h.pB&&!(h.on===null?0:1)?1:0;if(!(!f&&!(h.on===null?0:1)&&(d<0?0:1)?1:0))break;f=h.nv;if(f&&f!=(-536870788)&&f!=(-536870871))break;CC(h);Da(c,h.rD);g=a.nz;if(g.ot!=(-536870788))continue;CC(g);}g=LZ(a,c);g.f1(b);return g;}
let Ub=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;e=new I_;e.oy=Bo(C,10);f=a.pk;g=0;if(c!=f)a.pk=c;a:{switch(b){case -1073741784:h=new QA;c=a.oD+1|0;a.oD=c;F$();i=S;S=i+1|0;d=new Bn;d.m8=H(20);h.nq=(K(d,d.m7,i,10)).l();h.oL=c;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Pu;j=a.oD+1|0;a.oD=j;F$();c=S;S=c+1|0;d=new Bn;d.m8=H(20);h.nq=(K(d,d.m7,c,10)).l();h.oL=j;break a;case -33554392:h=new Rc;k=a.oD+1|0;a.oD=k;F$();c=S;S=c+1|0;d=new Bn;d.m8=H(20);h.nq=(K(d,d.m7,c,10)).l();h.oL=k;break a;default:c
=a.tY+1|0;a.tY=c;if(d===null){h=A1r();g=1;}else{h=new DW;F$();J_(h);h.oL=c;}i=a.tY;if(i<=(-1))break a;if(i>=10)break a;a.yv.data[i]=h;break a;}h=new T7;F$();i=S;S=i+1|0;d=new Bn;d.m8=H(20);h.nq=(K(d,d.m7,i,10)).l();h.oL=(-1);}while(true){if(T0(a.nz)&&G1(a.nz)==(-536870788))l=AEK(a,h);else if(a.nz.ot==(-536870788)){l=J3(h);BX(a.nz);}else{l=OY(a,h);if(GA(a.nz)==(-536870788))BX(a.nz);}if(l!==null)IR(e,l);if(LF(a.nz))break;if(GA(a.nz)==(-536870871))break;}if(Xv(a.nz)==(-536870788))IR(e,J3(h));if(a.pk!=f&&!g){a.pk
=f;V3(a.nz,f);}switch(b){case -1073741784:break;case -536870872:return A0f(e,h);case -268435416:return AYE(e,h);case -134217688:return AZ9(e,h);case -67108824:return A0S(e,h);case -33554392:return AY_(e,h);default:switch(ABR(e)){case 0:break;case 1:return A21(ACH(e,0),h);default:return A1O(e,h);}return J3(h);}return A40(e,h);}
let ACR=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K_;b.m8=H(16);while(true){c=a.nz;d=c.ot;if(!d&&!c.nv&&c.nw==c.pB&&!(c.on===null?0:1)?1:0)break;e=!d&&!c.nv&&c.nw==c.pB&&!(c.on===null?0:1)?1:0;if(!(!e&&!(c.on===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.q_;e=f===null?0:1;if(!(!e&&!c.nv)){e=f===null?0:1;if(!(!e&&(c.nv<0?0:1))){g=c.nv;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}CC(c);d=c.rD;if(!(d>=65536&&d<=1114111
?1:0)){e=d&65535;d=b.m7;Bh(b,d,d+1|0);b.m8.data[d]=e;}else{h=(FT(d)).data;e=0;d=h.length;g=b.m7;Bh(b,g,g+d|0);i=d+e|0;while(e<i){j=b.m8.data;k=g+1|0;d=e+1|0;j[g]=h[e];g=k;e=d;}}}d=a.pk;if(!((d&2)!=2?0:1))return A1B(b);if(!((d&64)!=64?0:1))return A5q(b);c=new Nw;e=S;S=e+1|0;f=new Bn;f.m8=H(20);c.nq=(K(f,f.m7,e,10)).l();c.nX=1;f=new I;f.m8=H(16);e=0;while(e<Yo(b)){d=UP(b,e);d=Cs(NW(),d)&65535;Qy(f,Cs(Qq(),d)&65535);e=e+1|0;}c.vd=W(f);c.nX=f.m7;return c;}
let AC1=a=>{let b,c,d,e,f,g,h,i,j;b=R(4);c=(-1);d=(-1);e=a.nz;f=e.ot;if(!(!f&&!e.nv&&e.nw==e.pB&&!(e.on===null?0:1)?1:0)){g=!f&&!e.nv&&e.nw==e.pB&&!(e.on===null?0:1)?1:0;if(!g&&!(e.on===null?0:1)&&(f<0?0:1)?1:0){h=b.data;CC(e);c=e.rD;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=H(3);b=h.data;b[0]=c&65535;e=a.nz;i=e.ot;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;CC(e);e=a.nz;i=e.ot;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;CC(e);e=new Jb;c=S;S=c+1|0;j=new Bn;j.m8=H(20);e.nq=(K(j,j.m7,c,10)).l();e.ro=h;e.vA=3;return e;}j=new Jb;i
=S;S=i+1|0;e=new Bn;e.m8=H(20);j.nq=(K(e,e.m7,i,10)).l();j.ro=h;j.vA=2;return j;}c=a.pk;if(!((c&2)!=2?0:1)){e=new Fx;i=b[0];c=S;S=c+1|0;e.nq=Pb(c,10);e.nX=1;e.py=i;return e;}if((c&64)!=64?0:1)return A3p(b[0]);return AZO(b[0]);}h=b.data;c=1;while(c<4&&!LF(a.nz)&&T0(a.nz)){i=c+1|0;e=a.nz;CC(e);h[c]=e.rD;c=i;}if(c==1&&!APw(h[0]))return T4(a,h[0]);if(!E7(a,2))return A5k(b,c);if(E7(a,64))return A4D(b,c);return A1W(b,c);}
let OY=(a,b)=>{let c,d,e,f,g,h;c=a.nz;d=c.ot;e=!d&&!c.nv&&c.nw==c.pB&&!(c.on===null?0:1)?1:0;e=!e&&!(c.on===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.q_===null?0:1)&&(c.nv<0?0:1)){if(!((a.pk&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!ACK(c)?ACR(a):M9(a,b,TW(a,b));}else{f=AC1(a);g=a.nz;d=g.ot;if(!(!d&&!g.nv&&g.nw==g.pB&&!(g.on===null?0:1)?1:0)&&!(d==(-536870871)&&!(b instanceof Ix))&&d!=(-536870788)){e=!d&&!g.nv&&g.nw==g.pB&&!(g.on===null?0:1)?1:0;if(!(!e&&!(g.on===null?0:1)&&(d<0?0:1)?1:0))f=M9(a,b,f);}}}else if
(d!=(-536870871))f=M9(a,b,TW(a,b));else{if(b instanceof Ix)D(EX(B(43),EW(c),Gi(a.nz)));f=new S3;U8(f,b);f.nX=0;}c=a.nz;e=c.ot;h=!e&&!c.nv&&c.nw==c.pB&&!(c.on===null?0:1)?1:0;if(!h&&!(e==(-536870871)&&!(b instanceof Ix))&&e!=(-536870788)){g=OY(a,b);if(f instanceof Eh&&!(f instanceof G0)&&!(f instanceof Em)&&!(f instanceof GW)){c=f;if(!g.gw(c.nM))f=AZX(c);}if((g.gy()&65535)!=43)f.f1(g);else f.f1(g.nM);}else{if(f===null)return null;f.f1(b);}if((f.gy()&65535)!=43)return f;return f.nM;}
let M9=(a,b,c)=>{let d,e,f,g,h,i;d=a.nz;e=d.ot;if(c!==null&&!(c instanceof Cy)){switch(e){case -2147483606:CC(d);d=new Uk;f=S;S=f+1|0;g=new Bn;g.m8=H(20);d.nq=(K(g,g.m7,f,10)).l();d.ne=b;d.nM=c;d.om=e;F$();c.f1(MS);return d;case -2147483605:CC(d);d=new Pr;e=S;S=e+1|0;g=new Bn;g.m8=H(20);d.nq=(K(g,g.m7,e,10)).l();d.ne=b;d.nM=c;d.om=(-2147483606);F$();c.f1(MS);return d;case -2147483585:CC(d);d=new O_;e=S;S=e+1|0;g=new Bn;CU(g);g.m8=H(20);d.nq=(K(g,g.m7,e,10)).l();d.ne=b;d.nM=c;d.om=(-536870849);F$();c.f1(MS);return d;case -2147483525:g
=new NU;h=d.on;CC(d);d=h;f=a.rY+1|0;a.rY=f;i=S;S=i+1|0;g.nq=Pb(i,10);g.ne=b;g.nM=c;g.om=(-536870849);g.q8=d;g.p5=f;F$();c.f1(MS);return g;case -1073741782:case -1073741781:CC(d);d=new Qv;VK(d,c,b,e);c.f1(d);return d;case -1073741761:CC(d);d=A0x(c,b,(-536870849));c.f1(b);return d;case -1073741701:h=new Sr;d=HS(d);e=a.rY+1|0;a.rY=e;AA9(h,d,c,b,(-536870849),e);c.f1(h);return h;case -536870870:case -536870869:BX(d);d=c.gy()!=(-2147483602)?AZT(c,b,e):E7(a,32)?A0Y(c,b,e):AZw(c,b,e,Pc(a.pk));c.f1(d);return d;case -536870849:BX(d);d
=A46(c,b,(-536870849));c.f1(b);return d;case -536870789:h=new G7;d=HS(d);e=a.rY+1|0;a.rY=e;UE(h,d,c,b,(-536870849),e);c.f1(h);return h;default:}return c;}g=null;if(c!==null)g=c;switch(e){case -2147483606:case -2147483605:BX(d);d=A3J(g,b,e);M0(g,d);return d;case -2147483585:BX(d);return AY0(g,b,(-2147483585));case -2147483525:return A4z(HS(d),g,b,(-2147483525));case -1073741782:case -1073741781:BX(d);d=A4k(g,b,e);M0(g,d);return d;case -1073741761:BX(d);return A3Y(g,b,(-1073741761));case -1073741701:return A1v(HS(d),
g,b,(-1073741701));case -536870870:case -536870869:BX(d);d=A3d(g,b,e);M0(g,d);return d;case -536870849:BX(d);return A2k(g,b,(-536870849));case -536870789:return A0p(HS(d),g,b,(-536870789));default:}return c;}
let TW=(a,b)=>{let c,d,e,f,g,h,i,j;c=null;d=b instanceof Ix;while(true){o:{e=a.nz;f=e.ot;if((f&(-2147418113))==(-2147483608)){CC(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.pk=g;else{if(f!=(-1073741784))g=a.pk;c=Ub(a,f,g,b);e=a.nz;if(e.ot!=(-536870871)){b=new DQ;h=e.ph;i=e.tm;b.m$=1;b.m_=1;b.ob=(-1);b.pt=B(43);b.pi=h;b.ob=i;D(b);}CC(e);}}else{g:{h:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break h;case -2147483583:BX(e);c
=new Qh;J_(c);break o;case -2147483582:BX(e);c=AVt(0);break o;case -2147483577:break;case -2147483558:BX(e);c=new TF;j=a.oD+1|0;a.oD=j;ADB(c,j);break o;case -2147483550:BX(e);c=AVt(1);break o;case -2147483526:BX(e);c=A3_();break o;case -536870876:BX(e);a.oD=a.oD+1|0;if(E7(a,8)){if(E7(a,1)){c=A1p(a.oD);break o;}c=AYY(a.oD);break o;}if(E7(a,1)){c=A17(a.oD);break o;}c=A3U(a.oD);break o;case -536870866:BX(e);if(E7(a,32)){c=A4V();break o;}c=A3y(Pc(a.pk));break o;case -536870821:BX(e);i=0;if(GA(a.nz)==(-536870818))
{i=1;BX(a.nz);}c=AA_(a,i,b);if(GA(a.nz)!=(-536870819))D(EX(B(43),EW(a.nz),Gi(a.nz)));OO(a.nz,1);BX(a.nz);break o;case -536870818:BX(e);a.oD=a.oD+1|0;if(!E7(a,8)){c=A4m();break o;}c=A4e(Pc(a.pk));break o;case 0:e=Ph(e);if(e!==null)c=LZ(a,e);else{if(LF(a.nz)){c=J3(b);break o;}c=AKM(f&65535);}BX(a.nz);break o;default:break g;}BX(e);c=A0q();break o;}j=(f&2147483647)-48|0;if(a.tY<j)D(EX(B(43),EW(e),Gi(a.nz)));BX(e);a.oD=a.oD+1|0;c=!E7(a,2)?AY$(j,a.oD):E7(a,64)?A1q(j,a.oD):A4$(j,a.oD);a.yv.data[j].yq=1;a.AC=1;break o;}if
(f>=0&&!J5(e)){c=T4(a,f);BX(a.nz);}else if(f==(-536870788))c=J3(b);else{if(f!=(-536870871))D(EX(!J5(a.nz)?AEu(f&65535):(Ph(a.nz)).l(),EW(a.nz),Gi(a.nz)));if(d)D(EX(B(43),EW(a.nz),Gi(a.nz)));c=J3(b);}}}if(f!=(-16777176))break;}return c;}
let AA_=(a,b,c)=>{let d;d=LZ(a,HL(a,b));d.f1(c);return d;}
let HL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new CI;d=a.pk;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;BA();f=new Bt;f.nn=R(64);c.nr=f;f=new Bt;f.nn=R(2);c.nu=f;c.xc=e;c.x7=d;FI(c,b);g=(-1);h=0;i=0;j=1;n:{e:{r:while(true){f=a.nz;if(!f.ot&&!f.nv&&f.nw==f.pB&&!J5(f)?1:0)break n;f=a.nz;b=f.ot;i=b==(-536870819)&&!j?0:1;if(!i)break n;i:{switch(b){case -536870874:if(g>=0)Da(c,g);g=BX(a.nz);if(GA(a.nz)!=(-536870874)){g=38;break i;}if(G1(a.nz)==(-536870821)){BX(a.nz);h=1;g=(-1);break i;}BX(a.nz);if(j){c=HL(a,0);break i;}if(GA(a.nz)
==(-536870819))break i;Tt(c,HL(a,0));break i;case -536870867:if(!j&&G1(f)!=(-536870819)&&G1(a.nz)!=(-536870821)&&g>=0){BX(a.nz);d=GA(a.nz);if(J5(a.nz))break r;if(d<0&&G1(a.nz)!=(-536870819)&&G1(a.nz)!=(-536870821)&&g>=0)break r;z:{try{if(AM9(d))break z;d=d&65535;break z;}catch($$e){$$je=BG($$e);if($$je instanceof CL){break e;}else{throw $$e;}}}try{BR(c,g,d);}catch($$e){$$je=BG($$e);if($$je instanceof CL){break e;}else{throw $$e;}}BX(a.nz);g=(-1);break i;}if(g>=0)Da(c,g);g=45;BX(a.nz);break i;case -536870821:if
(g>=0){Da(c,g);g=(-1);}BX(a.nz);e=0;f=a.nz;if(f.ot==(-536870818)){BX(f);e=1;}if(!h)Us(c,HL(a,e));else Tt(c,HL(a,e));h=0;BX(a.nz);break i;case -536870819:break;case -536870818:if(g>=0)Da(c,g);g=94;BX(a.nz);break i;case 0:if(g>=0)Da(c,g);f=a.nz.on;if(f===null)g=0;else{AFy(c,f);g=(-1);}CC(a.nz);break i;default:if(g>=0)Da(c,g);f=a.nz;CC(f);g=f.rD;break i;}if(g>=0)Da(c,g);g=93;BX(a.nz);}j=0;}D(EX(B(43),Pg(a),Gi(a.nz)));}D(EX(B(43),Pg(a),Gi(a.nz)));}if(!i){if(g>=0)Da(c,g);return c;}c=new DQ;k=a.nz;l=k.ph;b=k.tm-1
|0;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=l;c.ob=b;D(c);}
let T4=(a,b)=>{let c,d,e,f,g;c=b>=65536&&b<=1114111?1:0;d=a.pk;if((d&2)!=2?0:1){e:{if(!(b>=97&&b<=122)){if(b<65)break e;if(b>90)break e;}e=new NB;b=b&65535;f=S;S=f+1|0;g=new Bn;g.m8=H(20);e.nq=(K(g,g.m7,f,10)).l();e.nX=1;e.xG=b;e.x_=HR(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Nu;f=S;S=f+1|0;g=new Bn;g.m8=H(20);e.nq=(K(g,g.m7,f,10)).l();e.nX=1;e.nX=2;if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b);if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==
null?Bk(BK.value):null)));}e.y7=Cs(B2,b);return e;}if(b<=57343&&b>=56320?1:0){e=new JP;b=b&65535;f=S;S=f+1|0;g=new Bn;g.m8=H(20);e.nq=(K(g,g.m7,f,10)).l();e.r1=b;return e;}if(b<=56319&&b>=55296?1:0)return ANR(b&65535);e=new TI;b=b&65535;f=S;S=f+1|0;g=new Bn;g.m8=H(20);e.nq=(K(g,g.m7,f,10)).l();e.nX=1;b=Cs(NW(),b)&65535;e.v$=Cs(Qq(),b)&65535;return e;}}if(c)return AZn(b);if(AJG(b))return A2P(b&65535);if(!APF(b))return AKM(b&65535);return ANR(b&65535);}
let LZ=(a,b)=>{let c,d,e,f,g,h;if(!AAv(b)){if(!b.n7){if(b.g0())return A1i(b);return A4f(b);}if(b.g0())return A2F(b);return A1G(b);}c=Vv(b);d=new NF;e=S;S=e+1|0;f=new Bn;f.m8=H(20);d.nq=(K(f,f.m7,e,10)).l();d.wM=c;d.xW=c.nK;if(!b.n7){if(!b.g0()){c=new H8;f=new Fg;b=Ja(b);J_(f);f.nX=1;f.qe=b;f.zs=b.nK;We(c);c.s8=f;c.sY=d;return c;}c=new H8;f=new OL;b=Ja(b);e=S;S=e+1|0;g=new Bn;g.m8=H(20);f.nq=(K(g,g.m7,e,10)).l();f.nX=1;f.wT=b;f.yY=b.nK;e=S;S=e+1|0;b=new Bn;b.m8=H(20);c.nq=(K(b,b.m7,e,10)).l();c.s8=f;c.sY=d;return c;}if
(!b.g0()){c=new H8;f=new EG;b=Ja(b);e=S;S=e+1|0;g=new Bn;g.m8=H(20);f.nq=(K(g,g.m7,e,10)).l();f.pz=b;f.tR=b.nK;e=S;S=e+1|0;b=new Bn;b.m8=H(20);c.nq=(K(b,b.m7,e,10)).l();c.s8=f;c.sY=d;return c;}c=new H8;f=new NG;g=Ja(b);h=S;S=h+1|0;b=new Bn;b.m8=H(20);f.nq=(K(b,b.m7,h,10)).l();f.pz=g;f.tR=g.nK;e=S;S=e+1|0;b=new Bn;b.m8=H(20);c.nq=(K(b,b.m7,e,10)).l();c.s8=f;c.sY=d;return c;}
let WQ=b=>{return G8(b,0);}
let HR=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
let E7=(a,b)=>{return (a.pk&b)!=b?0:1;}
let VW=F();
let Ru=(b,c)=>{let d,e,f,g,$$je;if(c!==null&&c.data.length){n:{c:{try{d=AIW(ADc(b,c));}catch($$e){$$je=BG($$e);if($$je instanceof K8){d=$$je;break n;}else if($$je instanceof H$){d=$$je;break c;}else{throw $$e;}}return d;}e=new Ec;if(b.nP===null)b.nP=Bk(b.nA.$meta.name);f=b.nP;b=new I;b.m8=H(16);G(b,b.m7,B(160));g=b.m7;if(f===null)f=B(2);G(b,g,f);b=W(b);e.m$=1;e.m_=1;e.na=b;e.oY=d;D(e);}e=new Ec;if(b.nP===null)b.nP=Bk(b.nA.$meta.name);f=b.nP;b=new I;b.m8=H(16);G(b,b.m7,B(161));g=b.m7;if(f===null)f=B(2);G(b,g,
f);G(b,b.m7,B(162));b=W(b);e.m$=1;e.m_=1;e.na=b;e.oY=d;D(e);}c=(AEO(b)).data;if(c.length<=0)b=null;else{b=new OQ;b.qN=c[0];}return b;}
let Px=(b,c)=>{let d,e,f,g,h,$$je;a:{try{d=AIW(ADf(b,c));}catch($$e){$$je=BG($$e);if($$je instanceof K8){d=$$je;break a;}else if($$je instanceof H$){d=$$je;e=new Ec;if(b.nP===null)b.nP=Bk(b.nA.$meta.name);b=b.nP;f=new I;f.m8=H(16);G(f,f.m7,B(160));g=f.m7;if(b===null)b=B(2);G(f,g,b);b=W(f);e.m$=1;e.m_=1;e.na=b;e.oY=d;D(e);}else{throw $$e;}}return d;}e=new Ec;if(b.nP===null)b.nP=Bk(b.nA.$meta.name);h=b.nP;b=new I;b.m8=H(16);G(b,b.m7,B(163));g=b.m7;if(h===null)h=B(2);G(b,g,h);b=W(b);e.m$=1;e.m_=1;e.na=b;e.oY=d;D(e);}
let Ec=F(CL);
function D9(){C.call(this);this.nJ=null;}
let A2$=null;let St=null;let Lj=null;let Nk=null;let AWx=null;let AJd=null;let BE=()=>{BE=Ba(D9);AJI();}
let CA=b=>{let c,d,e,f,g,h,i;BE();if(b===null)return null;d:{c=b;if(St!==null){d=Bk(typeof c);if(d===B(164))e=1;else if(!(B(164) instanceof M))e=0;else{b=B(164);e=d.m9!==b.m9?0:1;}if(!e){if(d===B(165))e=1;else if(!(B(165) instanceof M))e=0;else{b=B(165);e=d.m9!==b.m9?0:1;}if(!e){if(d===B(166))e=1;else if(!(B(166) instanceof M))e=0;else{b=B(166);e=d.m9!==b.m9?0:1;}if(e){f=Lj.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new D9;h.nJ=c;i=h;Lj.set(c,new WeakRef(i));Oa(AWx,
i,c);return h;}if(d===B(167))e=1;else if(!(B(167) instanceof M))e=0;else{b=B(167);e=d.m9!==b.m9?0:1;}if(!e)break d;else{f=Nk.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new D9;h.nJ=c;i=h;Nk.set(c,new WeakRef(i));Oa(AJd,i,c);return h;}}}f=St.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new D9;h.nJ=c;St.set(c,new WeakRef(h));return h;}}b=new D9;b.nJ=c;return b;}
let AJI=()=>{A2$=new WeakMap();St=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Lj=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();Nk=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();AWx=Lj===null?null:new FinalizationRegistry(B$(new OU,"accept"));AJd=Nk===null?null:new FinalizationRegistry(B$(new OV,"accept"));}
let Oa=(b,c,d)=>{return b.register(c,d);}
let LA=F(0);
let KO=F();
let J9=F(0);
let KN=F();
let MZ=F(0);
function AAf(){let a=this;C.call(a);a.DY=null;a.CL=null;a.rN=null;a.pK=null;a.tF=0;a.wJ=0;a.wQ=0;a.yl=null;a.yD=null;a.rZ=null;}
let PM=(a,b)=>{let c=new AAf();AFS(c,a,b);return c;}
let ABW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;c=a.yl;if(c!==null){if(c===b)d=1;else if(!(b instanceof M))d=0;else{e=b;d=c.m9!==e.m9?0:1;}if(d){if(a.rZ===null)return a.yD;f=new I;f.m8=H(16);g=0;e:{while(true){b=a.rZ;d=BS(g,b.n0);if(d>=0)break;if(g<0)break e;if(d>=0)break e;b=b.oy.data[g];G(f,f.m7,b===null?B(2):b.l());g=g+1|0;}return W(f);}b=new L;b.m$=1;b.m_=1;D(b);}}a.yl=b;h=H(b.m9.length);i=h.data;j=0;k=i.length;while(true){if(j>=k){c=new I;c.m8=H(16);a.rZ=null;j=0;l=0;m=0;u:{i:while(true){if(j>=k){ba:
{e=a.rZ;if(e!==null){j=c.m7;d=BS(l,j);if(d){if(d<=0&&l>=0&&j<=j){b=new M;n=c.m8;h=n.data;d=j-l|0;j=h.length;if(l>=0&&d>=0&&d<=(j-l|0)){b.m9=O(n.data,l,d);IR(e,b);break ba;}b=new L;Cg(b);D(b);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}}}return W(c);}if(i[j]==92&&!m){m=1;j=j+1|0;}bb:{if(m){if(j>=k)break i;d=i[j];g=c.m7;Bh(c,g,g+1|0);c.m8.data[g]=d;m=0;}else if(i[j]!=36){o=i[j];d=c.m7;Bh(c,d,d+1|0);c.m8.data[d]=o;}else{if(a.rZ===null){b=new I_;b.oy=Bo(C,10);a.rZ=b;}bc:{try{b=new M;j=j+1|0;Uj(b,h,j,1);d=CE(b);if(l==CM(c))break bc;IR(a.rZ,
ACG(c,l,CM(c)));l=CM(c);break bc;}catch($$e){$$je=BG($$e);if($$je instanceof CL){break u;}else{throw $$e;}}}try{IR(a.rZ,A18(a,d));e=L_(a,d);l=l+Fi(e)|0;BO(c,e);break bb;}catch($$e){$$je=BG($$e);if($$je instanceof CL){break u;}else{throw $$e;}}}}j=j+1|0;}b=new L;b.m$=1;b.m_=1;D(b);}b=new Bc;b.m$=1;b.m_=1;b.na=B(43);D(b);}if(j<0)break;if(j>=b.m9.length)break;i[j]=b.m9.charCodeAt(j);j=j+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}
let L_=(a,b)=>{let c,d,e,f,g,h,i;c=a.pK;d=c.pN;if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}if(b>=0){e=BS(b,c.qD);if(e<0){k:{f=c.oj.data;g=b*2|0;if(f[g]<0)c=null;else{c=c.rf;if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}if(b>=0&&e<0){h=f[g];if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}if(b<0)break k;if(e>=0)break k;c=B1(c,h,f[g+1|0]);}else{c=new L;P();i=new I;i.m8=H(16);K(i,i.m7,b,10);i=W(i);c.m$=1;c.m_=1;c.na=i;D(c);}}return c;}c=new L;P();i=new I;i.m8=H(16);K(i,i.m7,b,10);i=W(i);c.m$=1;c.m_=1;c.na=i;D(c);}}c=new L;P();i=new I;i.m8=H(16);K(i,
i.m7,b,10);i=W(i);c.m$=1;c.m_=1;c.na=i;D(c);}
let NA=(a,b)=>{let c,d,e,f,g,h,i;c=a.rN.m9.length;if(b>=0&&b<=c){d=a.pK;d.pN=0;d.t7=2;e=d.oj.data;f=0;g=e.length;if(f>g){d=new Bc;Bd(d);D(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.n$.data;f=0;g=e.length;if(f>g){d=new Bc;Bd(d);D(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.qV=d.pp;d.t7=1;d.qV=b;c=d.t$;if(c<0)c=b;d.t$=c;b=a.CL.hb(b,a.rN,d);if(b==(-1))a.pK.pC=1;if(b>=0){d=a.pK;b=d.pN;if(b){e=d.oj.data;if(e[0]==(-1)){f=d.qV;e[0]=f;e[1]=f;}if(!b){d=new BT;d.m$=1;d.m_=1;Bj(d);D(d);}if(0<d.qD){d.t$=e[1];return 1;}d=new L;i
=new I;CU(i);i.m8=H(16);K(i,i.m7,0,10);i=W(i);d.m$=1;d.m_=1;d.na=i;D(d);}}a.pK.qV=(-1);return 0;}d=new L;i=new I;i.m8=H(16);K(i,i.m7,b,10);i=W(i);d.m$=1;d.m_=1;d.na=i;D(d);}
let H9=a=>{let b,c,d,e,f,g,h,i,j;b=a.rN.m9.length;c=a.pK;if(!c.w9)b=a.wJ;if(c.qV>=0&&c.t7==1){d=c.pN;if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}e=BS(0,c.qD);if(e>=0){c=new L;f=new I;f.m8=H(16);K(f,f.m7,0,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}g=c.oj.data;h=g[1];c.qV=h;if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}if(e>=0){c=new L;f=new I;f.m8=H(16);K(f,f.m7,0,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}i=g[1];if(!d){c=new BT;c.m$=1;c.m_=1;D(c);}if(e>=0){c=new L;f=new I;f.m8=H(16);K(f,f.m7,0,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}if
(i==g[0])c.qV=h+1|0;j=c.qV;return j<=b&&NA(a,j)?1:0;}return NA(a,a.tF);}
let AFS=(a,b,c)=>{let d,e;a.tF=(-1);a.wJ=(-1);a.DY=b;a.CL=b.BV;a.rN=c;a.tF=0;d=c.m9.length;a.wJ=d;e=A4i(c,a.tF,d,b.tY,b.rY+1|0,b.oD+1|0);a.pK=e;e.sT=1;}
let Cj=F(Bc);
let Ud=()=>{let a=new Cj();AHI(a);return a;}
let A7g=a=>{let b=new Cj();LY(b,a);return b;}
let AHI=a=>{a.m$=1;a.m_=1;}
let LY=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
function OQ(){C.call(this);this.qN=null;}
let AIW=a=>{let b=new OQ();AV1(b,a);return b;}
let AV1=(a,b)=>{a.qN=b;}
let MA=(a,b)=>{return;}
let Nm=(a,b)=>{let c,d,e,f,g,$$je;if(b===null)b=Bo(C,0);d:{k:{c:{try{c=ADi(a.qN,b);}catch($$e){$$je=BG($$e);if($$je instanceof Bc){c=$$je;break c;}else if($$je instanceof Mh){c=$$je;break d;}else if($$je instanceof KF){c=$$je;break k;}else if($$je instanceof N2){c=$$je;d=new Ec;e=a.qN.qE;if(e.nP===null)e.nP=Bk(e.nA.$meta.name);e=e.nP;f=new I;f.m8=H(16);G(f,f.m7,B(168));g=f.m7;if(e===null)e=B(2);G(f,g,e);f=W(f);d.m$=1;d.m_=1;d.na=f;d.oY=c;D(d);}else{throw $$e;}}return c;}d=new Ec;e=a.qN.qE;if(e.nP===null)e.nP
=Bk(e.nA.$meta.name);e=e.nP;f=new I;f.m8=H(16);G(f,f.m7,B(169));g=f.m7;if(e===null)e=B(2);G(f,g,e);f=W(f);d.m$=1;d.m_=1;d.na=f;d.oY=c;D(d);}d=new Ec;e=a.qN.qE;if(e.nP===null)e.nP=Bk(e.nA.$meta.name);e=e.nP;f=new I;f.m8=H(16);G(f,f.m7,B(170));g=f.m7;if(e===null)e=B(2);G(f,g,e);f=W(f);d.m$=1;d.m_=1;d.na=f;d.oY=c;D(d);}d=new Ec;e=a.qN.qE;if(e.nP===null)e.nP=Bk(e.nA.$meta.name);e=e.nP;f=new I;f.m8=H(16);G(f,f.m7,B(170));g=f.m7;if(e===null)e=B(2);G(f,g,e);f=W(f);d.m$=1;d.m_=1;d.na=f;d.oY=c;D(d);}
let K8=F(BL);
let Fn=F(CL);
let H$=F(Fn);
let C0=F(BL);
function B_(){let a=this;C.call(a);a.ne=null;a.po=0;a.nq=null;a.om=0;}
let S=0;let J_=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let AKI=(a,b,c,d)=>{let e;e=d.nN;while(true){if(b>e)return (-1);if(a.he(b,c,d)>=0)break;b=b+1|0;}return b;}
let AMK=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.he(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
let AJ6=(a,b)=>{a.om=b;}
let AIX=a=>{return a.om;}
let AQA=a=>{let b,c,d,e,f,g,h,i;b=a.nq;c=a.hf();d=new I;d.m8=H(16);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=60;f=d.m7;if(b===null)b=B(2);G(d,f,b);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=58;f=d.m7;if(c===null)c=B(2);G(d,f,c);e=d.m7;Bh(d,e,e+1|0);g=d.m8;h=g.data;h[e]=62;b=new M;e=d.m7;P();i=h.length;if(e>=0&&e<=(i-0|0)){b.m9=O(g.data,0,e);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ATA=a=>{let b,c,d,e,f,g,h,i;b=a.nq;c=a.hf();d=new I;d.m8=H(16);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=60;f=d.m7;if(b===null)b=B(2);G(d,f,b);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=58;f=d.m7;if(c===null)c=B(2);G(d,f,c);e=d.m7;Bh(d,e,e+1|0);g=d.m8;h=g.data;h[e]=62;b=new M;e=d.m7;P();i=h.length;if(e>=0&&e<=(i-0|0)){b.m9=O(g.data,0,e);return b;}b=new L;Bd(b);D(b);}
let AUt=a=>{return a.ne;}
let M0=(a,b)=>{a.ne=b;}
let AVO=(a,b)=>{return 1;}
let AW5=a=>{return null;}
let KG=a=>{let b;a.po=1;b=a.ne;if(b!==null){if(!b.po){b=b.hg();if(b!==null){a.ne.po=1;a.ne=b;}a.ne.fX();}else if(b instanceof Ik&&b.pw.yq)a.ne=b.ne;}}
let AXL=()=>{S=1;}
let AEP=F();
let XP=F();
let AFA=F();
let Lg=F(0);
let OU=F();
let AJn=(a,b)=>{let c;BE();b=b===null?null:b instanceof Hp()?b:CA(b);c=Lj;b=b===null?null:b.nJ;c.delete(b);}
let Yv=F();
let OV=F();
let AGr=(a,b)=>{let c;BE();b=b===null?null:b instanceof Hp()?b:CA(b);c=Nk;b=b===null?null:b.nJ;c.delete(b);}
let Ns=F(0);
function Ij(){let a=this;C.call(a);a.pG=null;a.qg=null;}
function Jl(){let a=this;Ij.call(a);a.xm=null;a.Ca=0;}
function DW(){let a=this;B_.call(a);a.yq=0;a.oL=0;}
let MS=null;let F$=()=>{F$=Ba(DW);ALt();}
let AHY=(a,b,c,d)=>{let e,f,g;e=a.oL;f=d.oj.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.ne.he(b,c,d);if(g<0){b=a.oL;d.oj.data[(b*2|0)+1|0]=e;}return g;}
let AQd=a=>{return a.oL;}
let ANk=a=>{return B(171);}
let AIE=(a,b)=>{return 0;}
let ALt=()=>{let b,c,d;b=new Op;c=S;S=c+1|0;d=new Bn;d.m8=H(20);b.nq=(K(d,d.m7,c,10)).l();MS=b;}
function JV(){let a=this;C.call(a);a.ol=null;a.oP=0;a.rQ=0;a.CQ=0;a.rD=0;a.ot=0;a.nv=0;a.pB=0;a.on=null;a.q_=null;a.nw=0;a.oE=0;a.tm=0;a.u6=0;a.ph=null;}
let ALu=null;let AZr=null;let A3N=0;let A0B=(a,b)=>{let c=new JV();AVS(c,a,b);return c;}
let AVS=(a,b,c)=>{let d,e,f,g,h,i,j;a.rQ=1;a.ph=b;if((c&16)>0){d=new I;d.m8=H(16);G(d,d.m7,B(172));e=0;while(true){f=Lk(b,B(173),e);if(f<0)break;g=f+2|0;h=B1(b,e,g);G(d,d.m7,h);G(d,d.m7,B(174));e=g;}b=B1(b,e,b.m9.length);G(d,d.m7,b);G(d,d.m7,B(173));b=W(d);}a.ol=H(b.m9.length+2|0);i=H(b.m9.length);j=i.data;f=0;g=j.length;while(true){if(f>=g){Ci(i,0,a.ol,0,b.m9.length);i=a.ol.data;g=i.length;i[g-1|0]=0;i[g-2|0]=0;a.pB=g;a.oP=c;CC(a);CC(a);return;}if(f<0)break;if(f>=b.m9.length)break;j[f]=b.m9.charCodeAt(f);f
=f+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}
let GA=a=>{return a.ot;}
let OO=(a,b)=>{if(b>0&&b<3)a.rQ=b;if(b==1){a.nv=a.ot;a.q_=a.on;a.nw=a.u6;a.u6=a.tm;CC(a);}}
let V3=(a,b)=>{let c;a.oP=b;a.nv=a.ot;a.q_=a.on;c=a.tm;a.nw=c+1|0;a.u6=c;CC(a);}
let Ph=a=>{return a.on;}
let J5=a=>{return a.on===null?0:1;}
let BX=a=>{CC(a);return a.rD;}
let HS=a=>{let b;b=a.on;CC(a);return b;}
let G1=a=>{return a.nv;}
let Xv=a=>{return a.rD;}
let CC=a=>{let b,c,d,e,f,g,h,$$je;a.rD=a.ot;a.ot=a.nv;a.on=a.q_;a.tm=a.u6;a.u6=a.nw;while(true){b=0;c=a.nw>=a.ol.data.length?0:MH(a);a.nv=c;a.q_=null;if(a.rQ==4){if(c!=92)return;c=a.nw;d=a.ol.data;c=c>=d.length?0:d[ER(a)];a.nv=c;switch(c){case 69:break;default:a.nv=92;a.nw=a.oE;return;}a.rQ=a.CQ;a.nv=a.nw>(a.ol.data.length-2|0)?0:MH(a);}u:{c=a.nv;if(c!=92){e=a.rQ;if(e==1)switch(c){case 36:a.nv=(-536870876);break u;case 40:if(a.ol.data[a.nw]!=63){a.nv=(-2147483608);break u;}ER(a);c=a.ol.data[a.nw];e=0;while(true)
{bd:{if(e){e=0;switch(c){case 33:break;case 61:a.nv=(-134217688);ER(a);break bd;default:D(EX(B(43),EW(a),a.nw));}a.nv=(-67108824);ER(a);}else{switch(c){case 33:break;case 60:ER(a);c=a.ol.data[a.nw];e=1;break bd;case 61:a.nv=(-536870872);ER(a);break bd;case 62:a.nv=(-33554392);ER(a);break bd;default:f=AFj(a);a.nv=f;if(f<256){a.oP=f;f=f<<16;a.nv=f;a.nv=(-1073741784)|f;break bd;}f=f&255;a.nv=f;a.oP=f;f=f<<16;a.nv=f;a.nv=(-16777176)|f;break bd;}a.nv=(-268435416);ER(a);}}if(!e)break;}break u;case 41:a.nv=(-536870871);break u;case 42:case 43:case 63:e
=a.nw;d=a.ol.data;switch(e>=d.length?42:d[e]){case 43:a.nv=c|(-2147483648);ER(a);break u;case 63:a.nv=c|(-1073741824);ER(a);break u;default:}a.nv=c|(-536870912);break u;case 46:a.nv=(-536870866);break u;case 91:a.nv=(-536870821);OO(a,2);break u;case 93:if(e!=2)break u;a.nv=(-536870819);break u;case 94:a.nv=(-536870818);break u;case 123:a.q_=AEh(a,c);break u;case 124:a.nv=(-536870788);break u;default:}else if(e==2)switch(c){case 38:a.nv=(-536870874);break u;case 45:a.nv=(-536870867);break u;case 91:a.nv=(-536870821);break u;case 93:a.nv
=(-536870819);break u;case 94:a.nv=(-536870818);break u;default:}}else{c=a.nw>=(a.ol.data.length-2|0)?(-1):MH(a);be:{a.nv=c;switch(c){case -1:D(EX(B(43),EW(a),a.nw));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.nv
=ABs(a);break u;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.rQ!=1)break u;a.nv=(-2147483648)|c;break u;case 65:a.nv=(-2147483583);break u;case 66:a.nv=(-2147483582);break u;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:D(EX(B(43),EW(a),a.nw));case 68:case 83:case 87:case 100:case 115:case 119:a.q_=
QK(Wg(a.ol,a.oE,1),0);a.nv=0;break u;case 71:a.nv=(-2147483577);break u;case 80:case 112:break be;case 81:a.CQ=a.rQ;a.rQ=4;b=1;break u;case 90:a.nv=(-2147483558);break u;case 97:a.nv=7;break u;case 98:a.nv=(-2147483550);break u;case 99:c=a.nw;d=a.ol.data;if(c>=(d.length-2|0))D(EX(B(43),EW(a),a.nw));a.nv=d[ER(a)]&31;break u;case 101:a.nv=27;break u;case 102:a.nv=12;break u;case 110:a.nv=10;break u;case 114:a.nv=13;break u;case 116:a.nv=9;break u;case 117:a.nv=Pt(a,4);break u;case 120:a.nv=Pt(a,2);break u;case 122:a.nv
=(-2147483526);break u;default:}break u;}g=AA2(a);h=0;if(a.nv==80)h=1;try{a.q_=QK(g,h);}catch($$e){$$je=BG($$e);if($$je instanceof KL){D(EX(B(43),EW(a),a.nw));}else{throw $$e;}}a.nv=0;}}if(b)continue;else break;}}
let AA2=a=>{let b,c,d,e,f,g,h,i;b=new I;b.m8=H(10);c=a.nw;d=a.ol;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new M;a.oE=c;if(a.oP&4)DH(a);else a.nw=c+1|0;g=a.oE;P();if(g>=0&&1<=(f-g|0)){b.m9=O(d.data,g,1);h=new I;h.m8=H(16);G(h,h.m7,B(175));G(h,h.m7,b);return W(h);}b=new L;b.m$=1;b.m_=1;D(b);}a.oE=c;if(a.oP&4)DH(a);else a.nw=c+1|0;c=0;r:{while(true){f=a.nw;d=a.ol.data;if(f>=(d.length-2|0))break;a.oE=f;if(a.oP&4)DH(a);else a.nw=f+1|0;c=d[a.oE];if(c==125)break r;f=b.m7;Bh(b,f,f+1|0);b.m8.data[f]=c;}}if(c
!=125){b=new DQ;i=a.ph;f=a.nw;b.m$=1;b.m_=1;b.ob=(-1);b.pt=B(43);b.pi=i;b.ob=f;D(b);}}if(!b.m7){b=new DQ;i=a.ph;c=a.nw;b.m$=1;b.m_=1;b.ob=(-1);b.pt=B(43);b.pi=i;b.ob=c;D(b);}h=W(b);if(h.m9.length==1){b=new I;b.m8=H(16);G(b,b.m7,B(175));G(b,b.m7,h);return W(b);}u:{i:{if(h.m9.length>3){if(h===B(175)?1:J4(h,B(175),0))break i;if(h===B(176)?1:J4(h,B(176),0))break i;}break u;}h=B1(h,2,h.m9.length);}return h;}
let AEh=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new I;c.m8=H(4);d=(-1);e=2147483647;b:{while(true){f=a.nw;g=a.ol.data;if(f>=g.length)break b;a.oE=f;if(a.oP&4)DH(a);else a.nw=f+1|0;b=g[a.oE];if(b==125)break b;if(b==44&&d<0)try{d=K4(CD(c),10);AEv(c,0,CM(c));continue;}catch($$e){$$je=BG($$e);if($$je instanceof Cj){break;}else{throw $$e;}}h=b&65535;f=c.m7;Bh(c,f,f+1|0);c.m8.data[f]=h;}c=new DQ;i=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=i;c.ob=b;D(c);}if(b!=125){c=new DQ;i=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt
=B(43);c.pi=i;c.ob=b;D(c);}if(c.m7>0)h:{try{e=K4(CD(c),10);if(d>=0)break h;d=e;break h;}catch($$e){$$je=BG($$e);if($$je instanceof Cj){}else{throw $$e;}}c=new DQ;i=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=i;c.ob=b;D(c);}else if(d<0){c=new DQ;i=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=i;c.ob=b;D(c);}if((d|e|(e-d|0))<0){c=new DQ;i=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=i;c.ob=b;D(c);}f=a.nw;g=a.ol.data;h=f>=g.length?42:g[f];m:{switch(h){case 43:a.nv=(-2147483525);a.oE=f;if(a.oP
&4)DH(a);else a.nw=f+1|0;break m;case 63:a.nv=(-1073741701);a.oE=f;if(a.oP&4)DH(a);else a.nw=f+1|0;break m;default:}a.nv=(-536870789);}c=new NS;c.rO=d;c.rM=e;return c;}
let EW=a=>{return a.ph;}
let LF=a=>{return !a.ot&&!a.nv&&a.nw==a.pB&&!(a.on===null?0:1)?1:0;}
let AM9=b=>{return b<0?0:1;}
let T0=a=>{let b,c;b=a.ot;c=!b&&!a.nv&&a.nw==a.pB&&!(a.on===null?0:1)?1:0;return !c&&!(a.on===null?0:1)&&(b<0?0:1)?1:0;}
let ACK=a=>{let b;b=a.ot;return b<=57343&&b>=56320?1:0;}
let APF=b=>{return b<=56319&&b>=55296?1:0;}
let AJG=b=>{return b<=57343&&b>=56320?1:0;}
let Pt=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new I;c.m8=H(b);d=a.ol.data.length-2|0;e=0;while(true){f=BS(e,b);if(f>=0)break;g=a.nw;if(g>=d)break;h=a.ol;a.oE=g;if(a.oP&4)DH(a);else a.nw=g+1|0;g=h.data[a.oE];i=c.m7;Bh(c,i,i+1|0);c.m8.data[i]=g;e=e+1|0;}if(!f)n:{try{b=K4(CD(c),16);}catch($$e){$$je=BG($$e);if($$je instanceof Cj){break n;}else{throw $$e;}}return b;}c=new DQ;j=a.ph;b=a.nw;c.m$=1;c.m_=1;c.ob=(-1);c.pt=B(43);c.pi=j;c.ob=b;D(c);}
let ABs=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.ol.data;e=d.length-2|0;f=Jd(d[a.nw]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.nw;a.oE=g;if(a.oP&4)DH(a);else a.nw=g+1|0;e:{while(true){if(c>=b)break e;h=a.nw;if(h>=e)break e;i=Jd(a.ol.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.nw;a.oE=g;if(a.oP&4)DH(a);else a.nw=g+1|0;c=c+1|0;}}return f;}j=new DQ;k=a.ph;b=a.nw;j.m$=1;j.m_=1;j.ob=(-1);j.pt=B(43);j.pi=k;j.ob=b;D(j);}
let AFj=a=>{let b,c,d,e,f,g,h;b=1;c=a.oP;k:while(true){d=a.nw;e=a.ol.data;if(d>=e.length){f=new DQ;g=a.ph;f.m$=1;f.m_=1;f.ob=(-1);f.pt=B(43);f.pi=g;f.ob=d;D(f);}c:{f:{switch(e[d]){case 41:a.oE=d;if(a.oP&4)DH(a);else a.nw=d+1|0;return c|256;case 45:if(!b){h=new DQ;g=a.ph;h.m$=1;h.m_=1;h.ob=(-1);h.pt=B(43);h.pi=g;h.ob=d;D(h);}b=0;break c;case 58:break k;case 100:break f;case 105:c=b?c|2:(c^2)&c;break c;case 109:c=b?c|8:(c^8)&c;break c;case 115:c=b?c|32:(c^32)&c;break c;case 117:c=b?c|64:(c^64)&c;break c;case 120:c
=b?c|4:(c^4)&c;break c;default:}break c;}c=b?c|1:(c^1)&c;}a.oE=d;if(a.oP&4)DH(a);else a.nw=d+1|0;}a.oE=d;if(a.oP&4)DH(a);else a.nw=d+1|0;return c;}
let ER=a=>{let b;b=a.nw;a.oE=b;if(a.oP&4)DH(a);else a.nw=b+1|0;return a.oE;}
let DH=a=>{let b,c,d,e;b=a.ol.data.length-2|0;a.nw=a.nw+1|0;b:while(true){c=a.nw;if(c<b){d:{c=a.ol.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break d;default:c:{switch(CS(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break d;}c=1;}if(c){a.nw=a.nw+1|0;continue;}}c=a.nw;if(c>=b)break;d=a.ol.data;if(d[c]!=35)break;a.nw=c+1|0;while(true){e=a.nw;if(e>=b)continue b;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue b;a.nw
=e+1|0;}}return c;}
let AKE=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?EB([d,e]):EB([d,e,4519+f|0]);}return null;}
let APw=b=>{return AZr.bh(b)==A3N?0:1;}
let ASk=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);}
let MH=a=>{let b,c,d,e,f;b=a.ol;c=a.nw;a.oE=c;if(a.oP&4)DH(a);else a.nw=c+1|0;b=b.data;d=a.oE;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.ol.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.nw;a.oE=d;if(a.oP&4)DH(a);else a.nw=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;}
let Gi=a=>{return a.tm;}
function DQ(){let a=this;Bc.call(a);a.pt=null;a.pi=null;a.ob=0;}
let EX=(a,b,c)=>{let d=new DQ();AHm(d,a,b,c);return d;}
let AHm=(a,b,c,d)=>{a.m$=1;a.m_=1;a.ob=(-1);a.pt=b;a.pi=c;a.ob=d;}
let AW0=a=>{let b,c,d,e,f,g,h,i,j,k;b=B(43);c=a.ob;if(c>=1){d=H(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new M;P();b.m9=O(d.data,0,f);}n:{h=a.pt;i=a.pi;if(i!==null&&i.m9.length){j=a.ob;i=a.pi;k=new I;k.m8=H(16);K(k,k.m7,j,10);G(k,k.m7,B(59));j=k.m7;if(i===null)i=B(2);G(k,j,i);G(k,k.m7,B(59));G(k,k.m7,b);b=new M;d=k.m8;e=d.data;c=k.m7;f=e.length;if(c>=0&&c<=(f-0|0)){b.m9=O(d.data,0,c);break n;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}b=B(43);}i=new I;i.m8=H(16);j
=i.m7;if(h===null)h=B(2);G(i,j,h);G(i,i.m7,b);b=new M;d=i.m8;e=d.data;c=i.m7;P();f=e.length;if(c>=0&&c<=(f-0|0)){b.m9=O(d.data,0,c);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let K7=F(0);
let L3=F();
let Xj=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.n0;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new Ce;b.nA=f;c=b;f.classObject=c;}}b=Ej(b);if(b===null){b=new C0;b.m$=1;b.m_=1;D(b);}if(b===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;D(b);}if(d<0){b=new DS;b.m$=1;b.m_=1;D(b);}b=Ex(b.nA,d);}e=0;g=0;h=a.pQ;i=a.n0;d=BS(h,h);f:{while(true){j=BS(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new MY;b.m$=1;b.m_=1;D(b);}k=g+1|0;if(g<0)break f;if(j>=0)break f;b.data[e]
=a.oy.data[g];e=h;g=k;}return b;}b=new L;b.m$=1;b.m_=1;D(b);}
let QE=F(0);
let NI=F(0);
function HM(){L3.call(this);this.pQ=0;}
let Mo=F(0);
function I_(){let a=this;HM.call(a);a.oy=null;a.n0=0;}
let I9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.oy;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ce;i.nA=h;j=i;h.classObject=j;}}h=Ej(i);if(h===null){i=new C0;i.m$=1;i.m_=1;D(i);}if(h===Bw(Cc)){i=new Bc;i.m$=1;i.m_=1;D(i);}if(f<0){i=new DS;i.m$=1;i.m_=1;D(i);}j=Ex(h.nA,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.oy=j;}}
let ACH=(a,b)=>{let c;if(b>=0&&b<a.n0)return a.oy.data[b];c=new L;c.m$=1;c.m_=1;D(c);}
let ABR=a=>{return a.n0;}
let IR=(a,b)=>{let c,d;I9(a,a.n0+1|0);c=a.oy.data;d=a.n0;a.n0=d+1|0;c[d]=b;a.pQ=a.pQ+1|0;return 1;}
let Zc=(a,b,c)=>{let d,e,f;if(b>=0){d=a.n0;if(b<=d){I9(a,d+1|0);d=a.n0;e=d;while(e>b){f=a.oy.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.oy.data[b]=c;a.n0=d+1|0;a.pQ=a.pQ+1|0;return;}}c=new L;c.m$=1;c.m_=1;D(c);}
let SF=(a,b)=>{let c,d,e,f;if(b>=0){c=a.n0;if(b<c){d=a.oy.data;e=d[b];c=c-1|0;a.n0=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.pQ=a.pQ+1|0;return e;}}e=new L;e.m$=1;e.m_=1;D(e);}
let QA=F(DW);
let AG0=(a,b,c,d)=>{let e,f;e=a.oL;f=d.n$.data;f[e]=b-f[e]|0;return a.ne.he(b,c,d);}
let AKn=a=>{return B(177);}
let ATW=(a,b)=>{return 0;}
let T7=F(DW);
let AJ3=(a,b,c,d)=>{return b;}
let AOc=a=>{return B(178);}
let Pu=F(DW);
let AIU=(a,b,c,d)=>{let e;e=a.oL;if(d.n$.data[e]!=b)b=(-1);return b;}
let AVI=a=>{return B(179);}
function Rc(){DW.call(this);this.Aw=0;}
let AHf=(a,b,c,d)=>{let e,f;e=a.oL;f=d.n$.data;f[e]=b-f[e]|0;a.Aw=b;return b;}
let AUv=a=>{return B(180);}
let ASg=(a,b)=>{return 0;}
let Ix=F(DW);
let A1r=()=>{let a=new Ix();AVB(a);return a;}
let AVB=a=>{let b,c;F$();b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();a.oL=0;}
let AWa=(a,b,c,d)=>{if(d.t7!=1&&b!=d.nN)return (-1);d.pN=1;d.oj.data[1]=b;return b;}
let AJc=a=>{return B(181);}
function Cy(){B_.call(this);this.nX=0;}
let U8=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.ne=b;a.nX=1;a.om=1;}
let AXS=(a,b,c,d)=>{let e;if((b+a.hr()|0)>d.nN){d.pC=1;return (-1);}e=a.hs(b,c);if(e<0)return (-1);return a.ne.he(b+e|0,c,d);}
let AU2=a=>{return a.nX;}
let AN7=(a,b)=>{return 1;}
let S3=F(Cy);
let J3=a=>{let b=new S3();AQn(b,a);return b;}
let AQn=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.ne=b;a.nX=1;a.om=1;a.nX=0;}
let AUl=(a,b,c)=>{return 0;}
let ALG=(a,b,c,d)=>{let e,f,g;e=d.nN;f=d.pp;b:{a:{while(true){g=BS(b,e);if(g>0)return (-1);if(g<0){if(b<0)break a;if(b>=c.m9.length)break a;if(((c.m9.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break b;if(g>=c.m9.length)break b;if((c.m9.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.ne.he(b,c,d)>=0)break;b=b+1|0;}return b;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let AJM=(a,b,c,d,e)=>{let f,g,h;f=e.nN;g=e.pp;b:{a:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break a;if(c>=d.m9.length)break a;if(((d.m9.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break b;if(h>=d.m9.length)break b;if((d.m9.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.ne.he(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new U;d.m$=1;d.m_=1;D(d);}d=new U;d.m$=1;d.m_=1;D(d);}
let ANm=a=>{return B(182);}
let AHa=(a,b)=>{return 0;}
function Cv(){let a=this;B_.call(a);a.oo=null;a.pw=null;a.oh=0;}
let A7h=()=>{let a=new Cv();We(a);return a;}
let A1O=(a,b)=>{let c=new Cv();ARH(c,a,b);return c;}
let We=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let ARH=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AMM=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oo;if(e===null)return (-1);f=a.oh;g=d.oj.data;h=f*2|0;i=g[h];g[h]=b;f=e.n0;j=0;a:{while(true){if(j>=f){b=a.oh;d.oj.data[b*2|0]=i;return (-1);}e=a.oo;if(j<0)break a;if(j>=e.n0)break a;h=e.oy.data[j].he(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new L;c.m$=1;c.m_=1;D(c);}
let ASa=(a,b)=>{a.pw.ne=b;}
let AOh=a=>{return B(183);}
let APj=(a,b)=>{let c,d,e,f,g;a:{d:{c=a.oo;if(c!==null){d=0;e=c.pQ;f=c.n0;while(true){if(!(d>=f?0:1))break d;if(e<c.pQ){b=new MY;b.m$=1;b.m_=1;D(b);}g=d+1|0;if(d<0)break a;if(d>=c.n0)break a;if(c.oy.data[d].gw(b))break;d=g;}return 1;}}return 0;}b=new L;b.m$=1;b.m_=1;D(b);}
let AS6=(a,b)=>{let c,d,e;c=a.oh;d=b.oj.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;}
let AJC=a=>{let b,c,d,e;a.po=1;b=a.pw;if(b!==null&&!b.po)KG(b);a:{d:{b=a.oo;if(b!==null){c=b.n0;d=0;while(true){if(d>=c)break d;b=a.oo;if(d<0)break a;if(d>=b.n0)break a;b=b.oy.data[d];e=b.hg();if(e===null)e=b;else{b.po=1;SF(a.oo,d);Zc(a.oo,d,e);}if(!e.po)e.fX();d=d+1|0;}}}if(a.ne!==null)KG(a);return;}b=new L;b.m$=1;b.m_=1;D(b);}
let Na=F(Cv);
let A40=(a,b)=>{let c=new Na();AHA(c,a,b);return c;}
let AHA=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let ARP=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oh;f=d.n$.data;g=f[e];f[e]=b;h=a.oo.n0;e=0;b:{while(true){if(e>=h){b=a.oh;d.n$.data[b]=g;return (-1);}i=a.oo;if(e<0)break b;if(e>=i.n0)break b;j=i.oy.data[e].he(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new L;c.m$=1;c.m_=1;D(c);}
let APC=a=>{return B(184);}
let ATu=(a,b)=>{let c;c=a.oh;return !b.n$.data[c]?0:1;}
let FJ=F(Na);
let AY_=(a,b)=>{let c=new FJ();ANQ(c,a,b);return c;}
let ANQ=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AKL=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.oh;f=d.n$.data;g=f[e];f[e]=b;h=a.oo.n0;i=0;b:{while(i<h){j=a.oo;if(i<0)break b;if(i>=j.n0)break b;if(j.oy.data[i].he(b,c,d)>=0)return a.ne.he(a.pw.Aw,c,d);i=i+1|0;}b=a.oh;d.n$.data[b]=g;return (-1);}c=new L;c.m$=1;c.m_=1;D(c);}
let ATb=(a,b)=>{a.ne=b;}
let AG8=a=>{return B(184);}
let Ux=F(FJ);
let A0f=(a,b)=>{let c=new Ux();AMz(c,a,b);return c;}
let AMz=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AR4=(a,b,c,d)=>{let e,f,g;e=a.oo.n0;f=0;b:{while(f<e){g=a.oo;if(f<0)break b;if(f>=g.n0)break b;if(g.oy.data[f].he(b,c,d)>=0)return a.ne.he(b,c,d);f=f+1|0;}return (-1);}c=new L;c.m$=1;c.m_=1;D(c);}
let AVU=(a,b)=>{return 0;}
let AW3=a=>{return B(185);}
let ADF=F(FJ);
let AYE=(a,b)=>{let c=new ADF();ALF(c,a,b);return c;}
let ALF=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AIr=(a,b,c,d)=>{let e,f,g;e=a.oo.n0;f=0;b:{while(true){if(f>=e)return a.ne.he(b,c,d);g=a.oo;if(f<0)break b;if(f>=g.n0)break b;if(g.oy.data[f].he(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new L;c.m$=1;c.m_=1;D(c);}
let AVg=(a,b)=>{return 0;}
let AMx=a=>{return B(186);}
let YP=F(FJ);
let AZ9=(a,b)=>{let c=new YP();AU7(c,a,b);return c;}
let AU7=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AJx=(a,b,c,d)=>{let e,f,g,h,i;e=a.oo.n0;f=d.w9?0:d.pp;d:{n:{g=a.ne.he(b,c,d);if(g>=0){h=a.oh;d.n$.data[h]=b;h=0;while(true){if(h>=e)break n;i=a.oo;if(h<0)break d;if(h>=i.n0)break d;if(i.oy.data[h].hu(f,b,c,d)>=0){b=a.oh;d.n$.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new L;c.m$=1;c.m_=1;D(c);}
let AYm=(a,b)=>{return 0;}
let ARw=a=>{return B(187);}
let ABb=F(FJ);
let A0S=(a,b)=>{let c=new ABb();AGW(c,a,b);return c;}
let AGW=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.oo=b;a.pw=c;a.oh=c.oL;}
let AGh=(a,b,c,d)=>{let e,f,g;e=a.oo.n0;f=a.oh;d.n$.data[f]=b;f=0;b:{while(true){if(f>=e)return a.ne.he(b,c,d);g=a.oo;if(f<0)break b;if(f>=g.n0)break b;if(g.oy.data[f].hu(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new L;c.m$=1;c.m_=1;D(c);}
let ATM=(a,b)=>{return 0;}
let AIV=a=>{return B(188);}
function Ik(){Cv.call(this);this.pM=null;}
let A21=(a,b)=>{let c=new Ik();AKl(c,a,b);return c;}
let AKl=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.pM=b;a.pw=c;a.oh=c.oL;}
let AGH=(a,b,c,d)=>{let e,f,g;e=a.oh;f=d.oj.data;e=e*2|0;g=f[e];f[e]=b;e=a.pM.he(b,c,d);if(e>=0)return e;e=a.oh;d.oj.data[e*2|0]=g;return (-1);}
let APP=(a,b,c,d)=>{let e;e=a.pM.hb(b,c,d);if(e>=0){b=a.oh;d.oj.data[b*2|0]=e;}return e;}
let AT3=(a,b,c,d,e)=>{let f;f=a.pM.hu(b,c,d,e);if(f>=0){b=a.oh;e.oj.data[b*2|0]=f;}return f;}
let AO_=(a,b)=>{return a.pM.gw(b);}
let ASc=a=>{let b,c,d,e,f;b=new NT;c=a.pM;d=a.pw;e=S;S=e+1|0;f=new Bn;f.m8=H(20);b.nq=(K(f,f.m7,e,10)).l();b.pM=c;b.pw=d;b.oh=d.oL;a.ne=b;return b;}
let AXb=a=>{let b;a.po=1;b=a.pw;if(b!==null&&!b.po)KG(b);b=a.pM;if(b!==null&&!b.po){b=b.hg();if(b!==null){a.pM.po=1;a.pM=b;}a.pM.fX();}}
let AA3=F();
let Ms=b=>{if(b===null||b.constructor.$meta.item==='undefined'){D(AZD());}return b.data.length;}
let A3g=(b,c)=>{if(b===null){b=new C0;b.m$=1;b.m_=1;D(b);}if(b===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;D(b);}if(c>=0)return Ex(b.nA,c);b=new DS;b.m$=1;b.m_=1;D(b);}
let Ex=(b,c)=>{if(b.$meta.primitive){switch(b){case A3v:return Nl(c);case AZB:return BI(c);case A1X:return Lo(c);case A2_:return H(c);case AZG:return R(c);case AY1:return Dy(c);case A0n:return Cq(c);case AYN:return AAg(c);}}return Bo(b,c);}
let Kl=F(BL);
let IB=F();
function Bs(){let a=this;IB.call(a);a.nK=0;a.pl=0;a.nr=null;a.xF=null;a.yd=null;a.n7=0;}
let AK2=null;let BA=()=>{BA=Ba(Bs);AKr();}
let LC=a=>{let b;BA();b=new Bt;b.nn=R(64);a.nr=b;}
let AIw=a=>{return null;}
let AHu=a=>{return a.nr;}
let AAv=a=>{return !a.pl?(IY(a.nr,0)>=2048?0:1):AB6(a.nr,0)>=2048?0:1;}
let AM7=a=>{return a.n7;}
let AUR=a=>{return a;}
let Vv=a=>{let b,c;if(a.yd===null){b=a.hx();c=new Tj;c.E0=a;c.AJ=b;b=new Bt;b.nn=R(64);c.nr=b;a.yd=c;FI(c,a.pl);}return a.yd;}
let Ja=a=>{let b,c;if(a.xF===null){b=a.hx();c=new Ti;c.EO=a;c.CD=b;c.CU=a;b=new Bt;b.nn=R(64);c.nr=b;a.xF=c;FI(c,a.nK);a.xF.n7=a.n7;}return a.xF;}
let AW2=a=>{return 0;}
let FI=(a,b)=>{let c;c=a.nK;if(c^b){a.nK=c?0:1;a.pl=a.pl?0:1;}if(!a.n7)a.n7=1;return a;}
let ALL=a=>{return a.nK;}
let QK=(b,c)=>{BA();b=AEt(AK2,b);if(!c&&b.t1===null)b.t1=b.hz();else if(c&&b.tJ===null)b.tJ=FI(b.hz(),1);return c?b.tJ:b.t1;}
let AKr=()=>{let b;b=new IM;ATK();AK2=b;}
function CI(){let a=this;Bs.call(a);a.xc=0;a.x7=0;a.tZ=0;a.y3=0;a.qT=0;a.pZ=0;a.nu=null;a.n8=null;}
let Da=(a,b)=>{let c;b:{if(a.xc){d:{if(!(b>=97&&b<=122)){if(b<65)break d;if(b>90)break d;}if(a.qT){Nn(a.nu,HR(b&65535));break b;}Mv(a.nu,HR(b&65535));break b;}if(a.x7&&b>128){a.tZ=1;if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b);if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}b=Cs(B2,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.y3)Nn(a.nr,b-55296|0);else Mv(a.nr,b-55296|0);}if(a.qT)Nn(a.nu,b);else Mv(a.nu,
b);if(!a.n7&&(b>=65536&&b<=1114111?1:0))a.n7=1;return a;}
let AFy=(a,b)=>{let c,d,e;if(!a.n7&&b.n7)a.n7=1;if(a.y3){if(!b.pl)Hz(a.nr,b.hx());else Ew(a.nr,b.hx());}else if(!b.pl)Hv(a.nr,b.hx());else{Hh(a.nr,b.hx());Ew(a.nr,b.hx());a.pl=a.pl?0:1;a.y3=1;}if(!a.pZ&&b.hG()!==null){if(a.qT){if(!b.nK)Hz(a.nu,b.hG());else Ew(a.nu,b.hG());}else if(!b.nK)Hv(a.nu,b.hG());else{Hh(a.nu,b.hG());Ew(a.nu,b.hG());a.nK=a.nK?0:1;a.qT=1;}}else{c=a.nK;d=a.n8;if(d!==null){if(!c){e=new OF;e.DO=a;e.C7=c;e.CN=d;e.CH=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}else{e=new OG;e.Fi=a;e.BI=c;e.BD
=d;e.Bq=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}}else{if(c&&!a.qT&&(a.nu.oq?0:1)){d=new OC;d.Ez=a;d.BF=b;BA();b=new Bt;b.nn=R(64);d.nr=b;a.n8=d;}else if(!c){d=new OA;d.yU=a;d.xT=c;d.AZ=b;BA();b=new Bt;b.nn=R(64);d.nr=b;a.n8=d;}else{d=new OB;d.zy=a;d.x1=c;d.CK=b;BA();b=new Bt;b.nn=R(64);d.nr=b;a.n8=d;}a.pZ=1;}}return a;}
let BR=(a,b,c)=>{let d;if(b>c){d=new Bc;d.m$=1;d.m_=1;D(d);}a:{d:{if(!a.xc){if(c<55296)break d;if(b>57343)break d;}c=c+1|0;while(true){if(b>=c)break a;Da(a,b);b=b+1|0;}}if(a.qT)UU(a.nu,b,c+1|0);else Jv(a.nu,b,c+1|0);}return a;}
let Us=(a,b)=>{let c,d,e,f;if(!a.n7&&b.n7)a.n7=1;if(b.tZ)a.tZ=1;c=a.pl;if(!(c^b.pl)){if(!c)Hv(a.nr,b.nr);else Ew(a.nr,b.nr);}else if(c)Hz(a.nr,b.nr);else{Hh(a.nr,b.nr);Ew(a.nr,b.nr);a.pl=1;}o:{if(!a.pZ){d=b.pZ;if((!d?b.nu:null)!==null){c=a.nK;if(!(c^b.nK)){if(!c){Hv(a.nu,!d?b.nu:null);break o;}Ew(a.nu,!d?b.nu:null);break o;}if(c){Hz(a.nu,!d?b.nu:null);break o;}Hh(a.nu,!d?b.nu:null);Ew(a.nu,!b.pZ?b.nu:null);a.nK=1;break o;}}c=a.nK;e=a.n8;if(e!==null){if(c){f=new O1;f.D0=a;f.CW=c;f.Ar=e;f.Ay=b;LC(f);a.n8=f;}else
{f=new Ov;f.Dy=a;f.Co=c;f.CJ=e;f.CY=b;BA();f.nr=ATe(2048);a.n8=f;}}else{if(!a.qT&&(a.nu.oq?0:1)){if(!c){e=new OD;e.Fn=a;e.Bn=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}else{e=new OE;e.D4=a;e.CS=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}}else if(!c){e=new OH;e.Cq=a;e.BS=b;e.BE=c;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}else{e=new OI;e.B0=a;e.B8=b;e.Cc=c;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}a.pZ=1;}}}
let Tt=(a,b)=>{let c,d,e,f;if(!a.n7&&b.n7)a.n7=1;if(b.tZ)a.tZ=1;c=a.pl;if(!(c^b.pl)){if(!c)Ew(a.nr,b.nr);else Hv(a.nr,b.nr);}else if(!c)Hz(a.nr,b.nr);else{Hh(a.nr,b.nr);Ew(a.nr,b.nr);a.pl=0;}o:{if(!a.pZ){d=b.pZ;if((!d?b.nu:null)!==null){c=a.nK;if(!(c^b.nK)){if(!c){Ew(a.nu,!d?b.nu:null);break o;}Hv(a.nu,!d?b.nu:null);break o;}if(!c){Hz(a.nu,!d?b.nu:null);break o;}Hh(a.nu,!d?b.nu:null);Ew(a.nu,!b.pZ?b.nu:null);a.nK=0;break o;}}c=a.nK;e=a.n8;if(e!==null){if(c){f=new Oy;f.Ea=a;f.Cf=c;f.Ao=e;f.Cn=b;LC(f);a.n8=f;}
else{f=new Ox;f.DN=a;f.Ct=c;f.AI=e;f.BH=b;BA();f.nr=ATe(2048);a.n8=f;}}else{if(!a.qT&&(a.nu.oq?0:1)){if(!c){e=new Ot;e.D6=a;e.Be=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}else{e=new Ou;e.Fg=a;e.Bf=b;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}}else if(!c){e=new Oz;e.Dk=a;e.C6=b;e.B5=c;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}else{e=new Os;e.B4=a;e.Ci=b;e.BJ=c;BA();b=new Bt;b.nn=R(64);e.nr=b;a.n8=e;}a.pZ=1;}}}
let AJS=(a,b)=>{let c;c=a.n8;if(c!==null)return a.nK^c.hI(b);return a.nK^CH(a.nu,b);}
let AYk=a=>{if(!a.pZ)return a.nu;return null;}
let ALs=a=>{return a.nr;}
let AVG=a=>{let b,c;if(a.n8!==null)return a;b=!a.pZ?a.nu:null;c=new Ow;c.Du=a;c.wI=b;BA();b=new Bt;b.nn=R(64);c.nr=b;return FI(c,a.nK);}
let AQ4=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;b.m8=H(16);c=IY(a.nu,0);while(c>=0){d=(FT(c)).data;e=0;f=d.length;g=b.m7;Bh(b,g,g+f|0);f=f+e|0;while(e<f){h=b.m8.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.m7;Bh(b,g,g+1|0);b.m8.data[g]=124;c=IY(a.nu,c+1|0);}e=b.m7;if(e>0)Tn(b,e-1|0);k=new M;d=b.m8;h=d.data;e=b.m7;P();g=h.length;if(e>=0&&e<=(g-0|0)){k.m9=O(d.data,0,e);return k;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ALO=a=>{return a.tZ;}
function KL(){let a=this;BL.call(a);a.Fd=null;a.E4=null;}
function Fu(){B_.call(this);this.nM=null;}
let VK=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;}
let AX2=a=>{return a.nM;}
let AT6=(a,b)=>{return !a.nM.gw(b)&&!a.ne.gw(b)?0:1;}
let AV6=(a,b)=>{return 1;}
let AQl=a=>{let b;a.po=1;b=a.ne;if(b!==null&&!b.po){b=b.hg();if(b!==null){a.ne.po=1;a.ne=b;}a.ne.fX();}b=a.nM;if(b!==null){if(!b.po){b=b.hg();if(b!==null){a.nM.po=1;a.nM=b;}a.nM.fX();}else if(b instanceof Ik&&b.pw.yq)a.nM=b.ne;}}
function Eh(){Fu.call(this);this.n1=null;}
let A3d=(a,b,c)=>{let d=new Eh();ARU(d,a,b,c);return d;}
let ARU=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AGj=(a,b,c,d)=>{let e,f;e=0;b:{while((b+a.n1.hr()|0)<=d.nN){f=a.n1.hs(b,c);if(f<=0)break b;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.ne.he(b,c,d);if(f>=0)break;b=b-a.n1.hr()|0;e=e+(-1)|0;}return f;}
let AJz=a=>{return B(189);}
function G0(){Eh.call(this);this.s7=null;}
let A0p=(a,b,c,d)=>{let e=new G0();AO3(e,a,b,c,d);return e;}
let AO3=(a,b,c,d,e)=>{let f,g;f=S;S=f+1|0;g=new Bn;g.m8=H(20);a.nq=(K(g,g.m7,f,10)).l();a.ne=d;a.nM=c;a.om=e;a.n1=c;a.s7=b;}
let AH2=(a,b,c,d)=>{let e,f,g,h,i;e=a.s7;f=e.rO;g=e.rM;h=0;while(true){if(h>=f){n:{while(h<g){if((b+a.n1.hr()|0)>d.nN)break n;i=a.n1.hs(b,c);if(i<1)break n;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.ne.he(b,c,d);if(i>=0)break;b=b-a.n1.hr()|0;h=h+(-1)|0;}return i;}if((b+a.n1.hr()|0)>d.nN){d.pC=1;return (-1);}i=a.n1.hs(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let AIC=a=>{return Rz(a.s7);}
let Em=F(Fu);
let AZT=(a,b,c)=>{let d=new Em();AUI(d,a,b,c);return d;}
let AUI=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;}
let AGE=(a,b,c,d)=>{let e;if(!a.nM.hL(d))return a.ne.he(b,c,d);e=a.nM.he(b,c,d);if(e>=0)return e;return a.ne.he(b,c,d);}
let ANH=a=>{return B(190);}
let GW=F(Eh);
let A2k=(a,b,c)=>{let d=new GW();APR(d,a,b,c);return d;}
let APR=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AP1=(a,b,c,d)=>{let e;e=a.nM.he(b,c,d);if(e<0)e=a.ne.he(b,c,d);return e;}
let AYp=(a,b)=>{a.ne=b;a.nM.f1(b);}
let ADX=F(Eh);
let AZX=a=>{let b=new ADX();AN1(b,a);return b;}
let AN1=(a,b)=>{let c,d,e,f;c=b.nM;d=b.ne;e=b.om;f=S;S=f+1|0;b=new Bn;b.m8=H(20);a.nq=(K(b,b.m7,f,10)).l();a.ne=d;a.nM=c;a.om=e;a.n1=c;c.f1(a);}
let AXF=(a,b,c,d)=>{while((b+a.n1.hr()|0)<=d.nN&&a.n1.hs(b,c)>0){b=b+a.n1.hr()|0;}return a.ne.he(b,c,d);}
let AQV=(a,b,c,d)=>{let e,f,g;e=a.ne.hb(b,c,d);if(e<0)return (-1);f=e-a.n1.hr()|0;while(f>=b&&a.n1.hs(f,c)>0){g=f-a.n1.hr()|0;e=f;f=g;}return e;}
function Bz(){let a=this;C.call(a);a.t1=null;a.tJ=null;}
let ATB=(a,b)=>{if(!b&&a.t1===null)a.t1=a.hz();else if(b&&a.tJ===null)a.tJ=FI(a.hz(),1);if(b)return a.tJ;return a.t1;}
function NS(){let a=this;IB.call(a);a.rO=0;a.rM=0;}
let Rz=a=>{let b,c,d,e,f,g,h;b=a.rO;c=a.rM;if(c==2147483647)d=B(43);else{d=new Bn;d.m8=H(20);d=(K(d,d.m7,c,10)).l();}e=new I;e.m8=H(16);c=e.m7;Bh(e,c,c+1|0);e.m8.data[c]=123;K(e,e.m7,b,10);b=e.m7;Bh(e,b,b+1|0);e.m8.data[b]=44;f=e.m7;if(d===null)d=B(2);G(e,f,d);b=e.m7;Bh(e,b,b+1|0);g=e.m8;h=g.data;h[b]=125;d=new M;b=e.m7;P();c=h.length;if(b>=0&&b<=(c-0|0)){d.m9=O(g.data,0,b);return d;}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}
let Op=F(B_);
let AOB=(a,b,c,d)=>{return b;}
let AR0=a=>{return B(191);}
let AR_=(a,b)=>{return 0;}
function Bt(){let a=this;C.call(a);a.nn=null;a.oq=0;}
let ATe=a=>{let b=new Bt();AGI(b,a);return b;}
let AGI=(a,b)=>{let c;if(b>=0){a.nn=R(((b+32|0)-1|0)/32|0);return;}c=new DS;c.m$=1;c.m_=1;D(c);}
let Mv=(a,b)=>{let c,d,e;if(b<0){c=new L;c.m$=1;c.m_=1;D(c);}d=b/32|0;if(b>=a.oq){J2(a,d+1|0);a.oq=b+1|0;}e=a.nn.data;e[d]=e[d]|1<<(b%32|0);}
let Jv=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=BS(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.oq){J2(a,e+1|0);a.oq=c;}if(d==e){f=a.nn.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.nn.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new L;i.m$=1;i.m_=1;D(i);}
let Nn=(a,b)=>{let c,d,e,f,g;if(b<0){c=new L;c.m$=1;c.m_=1;D(c);}d=b/32|0;e=a.nn.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.oq-1|0))IO(a);}}
let UU=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.oq;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.nn.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.nn.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}IO(a);return;}i=new L;i.m$=1;i.m_=1;D(i);}
let CH=(a,b)=>{let c,d,e;if(b<0){c=new L;c.m$=1;c.m_=1;D(c);}d=b/32|0;e=a.nn.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;}
let IY=(a,b)=>{let c,d,e,f,g;if(b<0){c=new L;c.m$=1;c.m_=1;D(c);}d=a.oq;if(b>=d)return (-1);e=b/32|0;f=a.nn.data;g=f[e]>>>(b%32|0)|0;if(g)return EM(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+EM(f[g])|0;g=g+1|0;}return (-1);}
let AB6=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new L;c.m$=1;c.m_=1;D(c);}d=a.oq;if(b>=d)return b;e=b/32|0;f=a.nn.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return EM(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+EM(f[h]^(-1))|0;h=h+1|0;}return d;}
let J2=(a,b)=>{let c,d,e,f,g,h;c=a.nn.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=R(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.nn=g;}
let IO=a=>{let b,c,d;b=(a.oq+31|0)/32|0;a.oq=b*32|0;c=b-1|0;b:{while(true){if(c<0)break b;d=G2(a.nn.data[c]);if(d<32)break;c=c+(-1)|0;a.oq=a.oq-32|0;}a.oq=a.oq-d|0;}}
let JX=(a,b)=>{let c,d,e,f,g;c=a.nn.data;d=c.length;e=b.nn.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;}
let Ew=(a,b)=>{let c,d,e,f,g,h,i;c=a.nn.data;d=c.length;e=b.nn.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.oq;i=b.oq;if(h<i)i=h;a.oq=i;IO(a);}
let Hz=(a,b)=>{let c,d,e,f,g;c=a.nn.data;d=c.length;e=b.nn.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}IO(a);}
let Hv=(a,b)=>{let c,d,e,f,g;c=a.oq;d=b.oq;if(c>d)d=c;a.oq=d;J2(a,(d+31|0)/32|0);e=a.nn.data;c=e.length;f=b.nn.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}}
let Hh=(a,b)=>{let c,d,e,f,g;c=a.oq;d=b.oq;if(c>d)d=c;a.oq=d;J2(a,(d+31|0)/32|0);e=a.nn.data;c=e.length;f=b.nn.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}IO(a);}
function NF(){let a=this;Cv.call(a);a.wM=null;a.xW=0;}
let YI=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.pp;f=d.nN;g=b+1|0;f=BS(g,f);if(f>0){d.pC=1;return (-1);}if(b>=0&&b<c.m9.length){h=c.m9.charCodeAt(b);if(!a.wM.hI(h))return (-1);i=h&64512;j=i!=55296?0:1;o:{if(j){if(f>=0)break o;if(g>=0&&g<c.m9.length){if((c.m9.charCodeAt(g)&64512)!=56320?0:1)return (-1);break o;}c=new U;c.m$=1;c.m_=1;D(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.m9.length){if(!((c.m9.charCodeAt(j)&64512)!=55296?0:1))break o;return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}}return a.ne.he(g,c,d);}c=new U;c.m$
=1;c.m_=1;D(c);}
let ASm=a=>{let b,c,d,e,f,g,h,i;b=!a.xW?B(192):B(193);c=a.wM.l();d=new I;d.m8=H(16);G(d,d.m7,B(194));G(d,d.m7,b);e=d.m7;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function H8(){let a=this;Cv.call(a);a.s8=null;a.sY=null;}
let AHT=(a,b,c,d)=>{let e;e=a.s8.he(b,c,d);if(e<0)e=YI(a.sY,b,c,d);if(e>=0)return e;return (-1);}
let ARN=(a,b)=>{a.ne=b;a.sY.ne=b;a.s8.f1(b);}
let ASL=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.s8;P();if(b===null)b=B(2);else{c=b.nq;b=b.hf();d=new I;d.m8=H(16);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=60;Dm(d,d.m7,c===null?B(2):Dp(c));e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=58;Dm(d,d.m7,b===null?B(2):Dp(b));e=d.m7;Bh(d,e,e+1|0);f=d.m8;g=f.data;g[e]=62;b=new M;e=d.m7;h=g.length;if(e>=0&&e<=(h-0|0))b.m9=O(f.data,0,e);else{b=new L;KQ(b);D(b);}}r:{c=a.sY;if(c===null)i=B(2);else{d=c.nq;i=!c.xW?B(192):B(193);j=c.wM.l();c=new I;c.m8=H(16);Ed(c,c.m7,B(194));Ed(c,c.m7,i);Ed(c,c.m7,
j);i=new M;f=c.m8;g=f.data;e=c.m7;h=g.length;if(e>=0&&e<=(h-0|0)){i.m9=O(f.data,0,e);c=new I;c.m8=H(16);k=c.m7;Bh(c,k,k+1|0);c.m8.data[k]=60;Dm(c,c.m7,d===null?B(2):Dp(d));h=c.m7;Bh(c,h,h+1|0);c.m8.data[h]=58;Dm(c,c.m7,Dp(i));h=c.m7;Bh(c,h,h+1|0);f=c.m8;g=f.data;g[h]=62;i=new M;e=c.m7;h=g.length;if(e>=0&&e<=(h-0|0)){i.m9=O(f.data,0,e);break r;}b=new L;KQ(b);D(b);}D(AHJ());}}c=new I;c.m8=H(16);G(c,c.m7,B(195));G(c,c.m7,b);G(c,c.m7,B(196));G(c,c.m7,i);b=new M;f=c.m8;g=f.data;e=c.m7;h=g.length;if(e>=0&&e<=(h-0
|0)){b.m9=O(f.data,0,e);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let AI2=(a,b)=>{return 1;}
let AIv=(a,b)=>{return 1;}
function EG(){let a=this;Cv.call(a);a.pz=null;a.tR=0;}
let A1G=a=>{let b=new EG();ASF(b,a);return b;}
let ASF=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.pz=b.hO();a.tR=b.nK;}
let ALj=(a,b,c,d)=>{let e,f,g,h;a:{e=d.nN;if(b<e){f=b+1|0;if(b>=0&&b<c.m9.length){g=c.m9.charCodeAt(b);if(a.hI(g)){h=a.ne.he(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.m9.length){f=c.m9.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.hI(((g&1023)<<10|f&1023)+65536|0))break a;else return a.ne.he(e,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}}return (-1);}
let AWR=a=>{let b,c,d,e,f,g,h,i;b=!a.tR?B(192):B(193);c=a.pz.l();d=new I;d.m8=H(16);G(d,d.m7,B(194));G(d,d.m7,b);e=d.m7;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let AL7=(a,b)=>{return a.pz.hI(b);}
let AHH=(a,b)=>{let c,d,e;if(b instanceof FP){c=a.pz;d=b.tv;BA();return c.hI(d);}if(b instanceof Fx){c=a.pz;d=b.py;BA();return c.hI(d);}if(b instanceof EG){c=a.pz;b=b.pz;BA();return c.hG()!==null&&b.hG()!==null?JX(c.hG(),b.hG()):1;}if(!(b instanceof Fg))return 1;c=a.pz;e=b.qe;BA();return c.hG()!==null&&e.hG()!==null?JX(c.hG(),e.hG()):1;}
let AOp=a=>{return a.pz;}
let AUK=(a,b)=>{a.ne=b;}
let ALz=(a,b)=>{return 1;}
let NG=F(EG);
let A2F=a=>{let b=new NG();AKB(b,a);return b;}
let AKB=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.pz=b.hO();a.tR=b.nK;}
let AN8=(a,b)=>{let c;c=a.pz;if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b);if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}return c.hI(Cs(B2,b));}
let AXj=a=>{let b,c,d,e,f,g,h,i;b=!a.tR?B(192):B(193);c=a.pz.l();d=new I;d.m8=H(16);G(d,d.m7,B(197));G(d,d.m7,b);e=d.m7;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function OL(){let a=this;Cy.call(a);a.wT=null;a.yY=0;}
let A1i=a=>{let b=new OL();ARm(b,a);return b;}
let ARm=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.wT=b.hO();a.yY=b.nK;}
let AOE=(a,b,c)=>{let d;d=a.wT;if(b>=0&&b<c.m9.length){b=c.m9.charCodeAt(b);if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}return !d.hI(Cs(B2,b)&65535)?(-1):1;}c=new U;c.m$=1;c.m_=1;D(c);}
let AIK=a=>{let b,c,d,e,f,g,h,i;b=!a.yY?B(192):B(193);c=a.wT.l();d=new I;d.m8=H(16);G(d,d.m7,B(197));G(d,d.m7,b);e=d.m7;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function Fg(){let a=this;Cy.call(a);a.qe=null;a.zs=0;}
let A4f=a=>{let b=new Fg();ASP(b,a);return b;}
let ASP=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.qe=b.hO();a.zs=b.nK;}
let AFO=(a,b,c)=>{let d;d=a.qe;if(b>=0&&b<c.m9.length)return !d.hI(c.m9.charCodeAt(b))?(-1):1;c=new U;c.m$=1;c.m_=1;D(c);}
let AON=a=>{let b,c,d,e,f,g,h,i;b=!a.zs?B(192):B(193);c=a.qe.l();d=new I;d.m8=H(16);G(d,d.m7,B(194));G(d,d.m7,b);e=d.m7;if(c===null)c=B(2);G(d,e,c);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ASb=(a,b)=>{let c,d,e;if(b instanceof Fx){c=a.qe;d=b.py;BA();return c.hI(d);}if(b instanceof Fg){c=a.qe;b=b.qe;BA();return c.hG()!==null&&b.hG()!==null?JX(c.hG(),b.hG()):1;}if(!(b instanceof EG)){if(!(b instanceof FP))return 1;return 0;}c=a.qe;e=b.pz;BA();return c.hG()!==null&&e.hG()!==null?JX(c.hG(),e.hG()):1;}
function Jb(){let a=this;Cv.call(a);a.ro=null;a.rh=null;a.vA=0;}
let APZ=(a,b)=>{a.ne=b;}
let ATN=a=>{let b,c,d,e,f,g,h,i;if(a.rh===null){b=new M;c=a.ro;d=c.data;P();b.m9=O(c.data,0,d.length);a.rh=b;}e=a.rh;b=new I;b.m8=H(16);G(b,b.m7,B(198));f=b.m7;if(e===null)e=B(2);G(b,f,e);g=new M;c=b.m8;d=c.data;h=b.m7;P();i=d.length;if(h>=0&&h<=(i-0|0)){g.m9=O(c.data,0,h);return g;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let AF5=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.nN;f=R(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.m9.length){j=c.m9.charCodeAt(b);k=AKE(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.vA;if(b!=m)return (-1);while(true){if(l>=m)return a.ne.he(i,c,d);if(f[l]!=a.ro.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.m9.length){j=c.m9.charCodeAt(i);g=j-4449|0;}else{c=new U;c.m$=1;c.m_=1;D(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.m9.length){j
=c.m9.charCodeAt(b);h=j-4519|0;}else{c=new U;c.m$=1;c.m_=1;D(c);}}if(h>=0&&h<28){bc:{b=b+1|0;k[2]=j;if(a.vA==3){m=k[0];f=a.ro.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.ne.he(b,c,d);break bc;}}b=(-1);}return b;}p:{if(a.vA==2){m=k[0];f=a.ro.data;if(m==f[0]&&k[1]==f[1]){b=a.ne.he(b,c,d);break p;}}b=(-1);}return b;}return (-1);}return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}
let AIP=(a,b)=>{let c,d,e,f;b:{if(b instanceof Jb){b=b;if(b.rh===null){c=new M;d=b.ro;e=d.data;P();c.m9=O(d.data,0,e.length);b.rh=c;}c=b.rh;if(a.rh===null){b=new M;d=a.ro;e=d.data;P();b.m9=O(d.data,0,e.length);a.rh=b;}b=a.rh;if(c===b)f=1;else if(!(b instanceof M))f=0;else{b=b;f=c.m9!==b.m9?0:1;}if(!f){f=0;break b;}}f=1;}return f;}
let AVK=(a,b)=>{return 1;}
function Fx(){Cy.call(this);this.py=0;}
let AKM=a=>{let b=new Fx();AST(b,a);return b;}
let AST=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.py=b;}
let AOi=a=>{return 1;}
let AM4=(a,b,c)=>{let d;d=a.py;if(b>=0&&b<c.m9.length)return d!=c.m9.charCodeAt(b)?(-1):1;c=new U;c.m$=1;c.m_=1;D(c);}
let ALg=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof M){e=d.nN;while(true){if(b>=e)return (-1);f=EL(c,a.py,b);if(f<0)return (-1);g=a.ne;b=f+1|0;if(g.he(b,c,d)>=0)break;}return f;}h=d.nN;c:{o:{while(true){if(b>h){b=(-1);break o;}i=b+1|0;if(i>d.nN){d.pC=1;e=(-1);}else{e=a.py;if(b<0)break c;if(b>=c.m9.length)break c;e=e!=c.m9.charCodeAt(b)?(-1):1;e=e<0?(-1):a.ne.he(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new U;Bd(c);D(c);}
let AOs=(a,b,c,d,e)=>{let f;if(d instanceof M){a:{while(true){if(c<b)return (-1);c=Gh(d,a.py,c);if(c<0)break a;if(c<b)break a;if(a.ne.he(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}c:{o:{while(true){if(c<b){c=(-1);break o;}if((c+1|0)>e.nN){e.pC=1;f=(-1);}else{f=a.py;if(c<0)break c;if(c>=d.m9.length)break c;f=f!=d.m9.charCodeAt(c)?(-1):1;f=f<0?(-1):a.ne.he(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new U;Bd(d);D(d);}
let AVZ=a=>{let b,c,d,e,f,g,h;b=a.py;c=new I;c.m8=H(16);d=c.m7;Bh(c,d,d+1|0);e=c.m8;f=e.data;f[d]=b;g=new M;d=c.m7;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.m9=O(e.data,0,d);return g;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AVA=(a,b)=>{let c,d,e,f;if(b instanceof Fx)return b.py!=a.py?0:1;if(!(b instanceof Fg)){if(b instanceof EG)return b.hI(a.py);if(!(b instanceof FP))return 1;return 0;}b=b;c=a.py;d=new M;e=H(1);f=e.data;f[0]=c;P();d.m9=O(e.data,0,f.length);b=b.qe;if(0>=d.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}return (!b.hI(d.m9.charCodeAt(0))?(-1):1)<=0?0:1;}
function TI(){Cy.call(this);this.v$=0;}
let A3p=a=>{let b=new TI();AQR(b,a);return b;}
let AQR=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}a.v$=Cs(B2,b)&65535;}
let AFT=(a,b,c)=>{let d;d=a.v$;if(b>=0&&b<c.m9.length){b=c.m9.charCodeAt(b);if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}b=Cs(B9,b)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}return d!=(Cs(B2,b)&65535)?(-1):1;}c=new U;c.m$=1;c.m_=1;D(c);}
let ARM=a=>{let b,c,d,e,f,g,h;b=a.v$;c=new I;c.m8=H(16);G(c,c.m7,B(199));d=c.m7;Bh(c,d,d+1|0);e=c.m8;f=e.data;f[d]=b;g=new M;d=c.m7;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.m9=O(e.data,0,d);return g;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
function NB(){let a=this;Cy.call(a);a.xG=0;a.x_=0;}
let AZO=a=>{let b=new NB();ATD(b,a);return b;}
let ATD=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.xG=b;a.x_=HR(b);}
let AGy=(a,b,c)=>{let d;d=a.xG;if(b>=0&&b<c.m9.length){d:{k:{if(d!=c.m9.charCodeAt(b)){d=a.x_;if(b<0)break d;if(b>=c.m9.length)break d;if(d!=c.m9.charCodeAt(b)){b=(-1);break k;}}b=1;}return b;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let ANt=a=>{let b,c,d,e,f,g,h;b=a.xG;c=new I;c.m8=H(16);G(c,c.m7,B(200));d=c.m7;Bh(c,d,d+1|0);e=c.m8;f=e.data;f[d]=b;g=new M;d=c.m7;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.m9=O(e.data,0,d);return g;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
function G9(){let a=this;Cv.call(a);a.sV=0;a.q4=null;a.sr=null;a.sl=0;}
let A5k=(a,b)=>{let c=new G9();AIg(c,a,b);return c;}
let AIg=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.sV=1;a.sr=b;a.sl=c;}
let AW9=(a,b)=>{a.ne=b;}
let ARO=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=R(4);f=d.nN;if(b>=f)return (-1);g=LP(a,b,c,f);h=b+a.sV|0;i=ALu.hS(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Ci(i,0,e,0,b);b=0+b|0;}k:{if(h<f){i=e.data;g=LP(a,h,c,f);while(b<4){if(!ASk(g)){k=b+1|0;i[b]=g;}else{j=(ALu.hS(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.sV|0;if(h>=f){b=k;break k;}g=LP(a,h,c,f);b=k;}}}if(b!=a.sl)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.ne.he(h,c,d);if(j[g]!=a.sr.data[g])break;g
=g+1|0;}return (-1);}
let ARB=a=>{let b,c,d,e,f,g,h,i;if(a.q4===null){b=new I;b.m8=H(16);c=0;while(c<a.sl){d=FT(a.sr.data[c]);e=d.data.length;KM(b,b.m7,d,0,e);c=c+1|0;}f=new M;d=b.m8;g=d.data;h=b.m7;P();e=g.length;if(h>=0&&h<=(e-0|0)){f.m9=O(d.data,0,h);a.q4=f;}else{b=new L;Bd(b);D(b);}}i=a.q4;b=new I;b.m8=H(16);G(b,b.m7,B(201));c=b.m7;if(i===null)i=B(2);G(b,c,i);f=new M;d=b.m8;g=d.data;h=b.m7;P();e=g.length;if(h>=0&&h<=(e-0|0)){f.m9=O(d.data,0,h);return f;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let LP=(a,b,c,d)=>{let e,f,g,h;b:{a.sV=1;if(b>=(d-1|0)){if(b>=0&&b<c.m9.length){e=c.m9.charCodeAt(b);break b;}c=new U;c.m$=1;c.m_=1;D(c);}d=b+1|0;if(b>=0&&b<c.m9.length){e=c.m9.charCodeAt(b);if(d>=0&&d<c.m9.length){f=c.m9.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=H(2);h=g.data;h[0]=e;h[1]=f;e=V7(g,0,h.length);a.sV=2;}break b;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}return e;}
let AOF=(a,b)=>{let c,d,e,f,g,h,i;b:{if(b instanceof G9){b=b;if(b.q4===null){c=new I;c.m8=H(16);d=0;while(d<b.sl){e=FT(b.sr.data[d]);f=e.data.length;KM(c,c.m7,e,0,f);d=d+1|0;}g=new M;e=c.m8;h=e.data;i=c.m7;P();f=h.length;if(i>=0&&i<=(f-0|0)){g.m9=O(e.data,0,i);b.q4=g;}else{b=new L;Bd(b);D(b);}}g=b.q4;if(a.q4===null){b=new I;b.m8=H(16);d=0;while(d<a.sl){e=FT(a.sr.data[d]);f=e.data.length;KM(b,b.m7,e,0,f);d=d+1|0;}c=new M;e=b.m8;h=e.data;f=b.m7;P();i=h.length;if(f>=0&&f<=(i-0|0)){c.m9=O(e.data,0,f);a.q4=c;}else
{b=new L;Bd(b);D(b);}}b=a.q4;if(g===b)d=1;else if(!(b instanceof M))d=0;else{b=b;d=g.m9!==b.m9?0:1;}if(!d){d=0;break b;}}d=1;}return d;}
let ATf=(a,b)=>{return 1;}
let AEQ=F(G9);
let A4D=(a,b)=>{let c=new AEQ();ANA(c,a,b);return c;}
let ANA=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.sV=1;a.sr=b;a.sl=c;}
let ABJ=F(G9);
let A1W=(a,b)=>{let c=new ABJ();AIZ(c,a,b);return c;}
let AIZ=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.sV=1;a.sr=b;a.sl=c;}
let Uk=F(Em);
let AJ_=(a,b,c,d)=>{let e;while(true){e=a.nM.he(b,c,d);if(e<=0)break;b=e;}return a.ne.he(b,c,d);}
let Pr=F(Em);
let AQF=(a,b,c,d)=>{let e;e=a.nM.he(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.nM.he(e,c,d);if(b<=e)break;e=b;}b=e;}return a.ne.he(b,c,d);}
let IW=F(Em);
let A46=(a,b,c)=>{let d=new IW();AGq(d,a,b,c);return d;}
let AGq=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;}
let AUC=(a,b,c,d)=>{let e;if(!a.nM.hL(d))return a.ne.he(b,c,d);e=a.nM.he(b,c,d);if(e>=0)return e;return a.ne.he(b,c,d);}
let AWg=(a,b)=>{a.ne=b;a.nM.f1(b);}
let O_=F(IW);
let AOo=(a,b,c,d)=>{let e;e=a.nM.he(b,c,d);if(e<=0)e=b;return a.ne.he(e,c,d);}
let ARd=(a,b)=>{a.ne=b;}
function G7(){let a=this;Em.call(a);a.q8=null;a.p5=0;}
let A7i=(a,b,c,d,e)=>{let f=new G7();UE(f,a,b,c,d,e);return f;}
let UE=(a,b,c,d,e,f)=>{let g,h;g=S;S=g+1|0;h=new Bn;h.m8=H(20);a.nq=(K(h,h.m7,g,10)).l();a.ne=d;a.nM=c;a.om=e;a.q8=b;a.p5=f;}
let AYg=(a,b,c,d)=>{let e,f,g,h;e=a.p5;e=d.qI.data[e];if(!a.nM.hL(d))return a.ne.he(b,c,d);if(e>=a.q8.rM)return a.ne.he(b,c,d);f=a.p5;e=e+1|0;d.qI.data[f]=e;g=a.nM.he(b,c,d);if(g>=0){b=a.p5;d.qI.data[b]=0;return g;}g=a.p5;e=e+(-1)|0;h=d.qI.data;h[g]=e;if(e>=a.q8.rO)return a.ne.he(b,c,d);h[g]=0;return (-1);}
let AWm=a=>{return Rz(a.q8);}
let NU=F(G7);
let ANI=(a,b,c,d)=>{let e,f,g;e=0;f=a.q8.rM;b:{while(true){g=a.nM.he(b,c,d);if(g<=b)break b;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.q8.rO)return (-1);return a.ne.he(b,c,d);}
let Qv=F(Em);
let AXp=(a,b,c,d)=>{let e;if(!a.nM.hL(d))return a.ne.he(b,c,d);e=a.ne.he(b,c,d);if(e>=0)return e;return a.nM.he(b,c,d);}
let X9=F(IW);
let A0x=(a,b,c)=>{let d=new X9();ASo(d,a,b,c);return d;}
let ASo=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;}
let AI4=(a,b,c,d)=>{let e;if(!a.nM.hL(d))return a.ne.he(b,c,d);e=a.ne.he(b,c,d);if(e<0)e=a.nM.he(b,c,d);return e;}
let Sr=F(G7);
let A7j=(a,b,c,d,e)=>{let f=new Sr();AA9(f,a,b,c,d,e);return f;}
let AA9=(a,b,c,d,e,f)=>{let g,h;g=S;S=g+1|0;h=new Bn;h.m8=H(20);a.nq=(K(h,h.m7,g,10)).l();a.ne=d;a.nM=c;a.om=e;a.q8=b;a.p5=f;}
let AHk=(a,b,c,d)=>{let e,f,g;e=a.p5;f=d.qI.data[e];if(!a.nM.hL(d))return a.ne.he(b,c,d);g=a.q8;if(f>=g.rM){e=a.p5;d.qI.data[e]=0;return a.ne.he(b,c,d);}if(f<g.rO){e=a.p5;d.qI.data[e]=f+1|0;e=a.nM.he(b,c,d);}else{e=a.ne.he(b,c,d);if(e>=0){b=a.p5;d.qI.data[b]=0;return e;}e=a.p5;d.qI.data[e]=f+1|0;e=a.nM.he(b,c,d);}return e;}
let Zl=F(Fu);
let A0Y=(a,b,c)=>{let d=new Zl();AHB(d,a,b,c);return d;}
let AHB=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;}
let AXX=(a,b,c,d)=>{let e;e=d.nN;if(e>b)return a.ne.hu(b,e,c,d);return a.ne.he(b,c,d);}
let AUV=(a,b,c,d)=>{let e;e=d.nN;if(a.ne.hu(b,e,c,d)>=0)return b;return (-1);}
let ASQ=a=>{return B(202);}
function V2(){Fu.call(this);this.wL=null;}
let AZw=(a,b,c,d)=>{let e=new V2();ASG(e,a,b,c,d);return e;}
let ASG=(a,b,c,d,e)=>{let f,g;f=S;S=f+1|0;g=new Bn;g.m8=H(20);a.nq=(K(g,g.m7,f,10)).l();a.ne=c;a.nM=b;a.om=d;a.wL=e;}
let ASd=(a,b,c,d)=>{let e,f,g;e=d.nN;f=b;b:{while(true){if(f>=e){f=(-1);break b;}g=a.wL;if(f<0)break;if(f>=c.m9.length)break;if(g.hW(c.m9.charCodeAt(f)))break b;f=f+1|0;}c=new U;c.m$=1;c.m_=1;D(c);}if(f>=0)e=f;if(e>b)return a.ne.hu(b,e,c,d);return a.ne.he(b,c,d);}
let AGd=(a,b,c,d)=>{let e,f,g,h,i;e=d.nN;f=a.ne.hb(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.wL;if(g<0)break;if(g>=c.m9.length)break;if(h.hW(c.m9.charCodeAt(g)))break a;g=g+1|0;}c=new U;c.m$=1;c.m_=1;D(c);}if(g>=0)e=g;g=a.ne.hu(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;h:{while(true){if(i<b){i=(-1);break h;}d=a.wL;if(i<0)break;if(i>=c.m9.length)break;if(d.hW(c.m9.charCodeAt(i)))break h;i=i+(-1)|0;}c=new U;c.m$=1;c.m_=1;D(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;}
let ATT=a=>{return B(203);}
let GB=F();
let AOy=null;let AJ2=null;let Pc=b=>{let c;if(!(b&1)){c=AJ2;if(c!==null)return c;c=new SE;AJ2=c;return c;}c=AOy;if(c!==null)return c;c=new SD;AOy=c;return c;}
let AFG=F(Eh);
let A3J=(a,b,c)=>{let d=new AFG();ATg(d,a,b,c);return d;}
let ATg=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AHo=(a,b,c,d)=>{let e;b:{while(true){if((b+a.n1.hr()|0)>d.nN)break b;e=a.n1.hs(b,c);if(e<1)break;b=b+e|0;}}return a.ne.he(b,c,d);}
let ADT=F(GW);
let AY0=(a,b,c)=>{let d=new ADT();AXl(d,a,b,c);return d;}
let AXl=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AQz=(a,b,c,d)=>{let e;if((b+a.n1.hr()|0)<=d.nN){e=a.n1.hs(b,c);if(e>=1)b=b+e|0;}return a.ne.he(b,c,d);}
let Wp=F(G0);
let A4z=(a,b,c,d)=>{let e=new Wp();AQw(e,a,b,c,d);return e;}
let AQw=(a,b,c,d,e)=>{let f,g;f=S;S=f+1|0;g=new Bn;g.m8=H(20);a.nq=(K(g,g.m7,f,10)).l();a.ne=d;a.nM=c;a.om=e;a.n1=c;a.s7=b;}
let AT$=(a,b,c,d)=>{let e,f,g,h,i;e=a.s7;f=e.rO;g=e.rM;h=0;while(true){if(h>=f){n:{while(true){if(h>=g)break n;if((b+a.n1.hr()|0)>d.nN)break n;i=a.n1.hs(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.ne.he(b,c,d);}if((b+a.n1.hr()|0)>d.nN){d.pC=1;return (-1);}i=a.n1.hs(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
let X0=F(Eh);
let A4k=(a,b,c)=>{let d=new X0();AYs(d,a,b,c);return d;}
let AYs=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AR6=(a,b,c,d)=>{let e;while(true){e=a.ne.he(b,c,d);if(e>=0)break;if((b+a.n1.hr()|0)<=d.nN){e=a.n1.hs(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
let ABU=F(GW);
let A3Y=(a,b,c)=>{let d=new ABU();ALP(d,a,b,c);return d;}
let ALP=(a,b,c,d)=>{let e,f;e=S;S=e+1|0;f=new Bn;f.m8=H(20);a.nq=(K(f,f.m7,e,10)).l();a.ne=c;a.nM=b;a.om=d;a.n1=b;}
let AHy=(a,b,c,d)=>{let e;e=a.ne.he(b,c,d);if(e>=0)return e;return a.nM.he(b,c,d);}
let YR=F(G0);
let A1v=(a,b,c,d)=>{let e=new YR();ASu(e,a,b,c,d);return e;}
let ASu=(a,b,c,d,e)=>{let f,g;f=S;S=f+1|0;g=new Bn;g.m8=H(20);a.nq=(K(g,g.m7,f,10)).l();a.ne=d;a.nM=c;a.om=e;a.n1=c;a.s7=b;}
let AUo=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.s7;f=e.rO;g=e.rM;h=0;while(true){if(h>=f){n:{while(true){i=a.ne.he(b,c,d);if(i>=0)break;if((b+a.n1.hr()|0)<=d.nN){i=a.n1.hs(b,c);b=b+i|0;h=h+1|0;}if(i<1)break n;if(h>g)break n;}return i;}return (-1);}if((b+a.n1.hr()|0)>d.nN){d.pC=1;return (-1);}j=a.n1.hs(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
let Qh=F(B_);
let A4m=()=>{let a=new Qh();AKO(a);return a;}
let AKO=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let APc=(a,b,c,d)=>{if(b&&!(d.sT&&b==d.pp))return (-1);return a.ne.he(b,c,d);}
let ANY=(a,b)=>{return 0;}
let AQB=a=>{return B(204);}
function W8(){B_.call(this);this.CO=0;}
let AVt=a=>{let b=new W8();AOb(b,a);return b;}
let AOb=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.CO=b;}
let AIq=(a,b,c,d)=>{let e,f,g;if(b>=d.nN)e=32;else if(b>=0&&b<c.m9.length)e=c.m9.charCodeAt(b);else{c=new U;c.m$=1;c.m_=1;D(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.m9.length)f=c.m9.charCodeAt(f);else{c=new U;c.m$=1;c.m_=1;D(c);}}g=d.w9?0:d.pp;return (e!=32&&!P1(a,e,b,g,c)?0:1)^(f!=32&&!P1(a,f,b-1|0,g,c)?0:1)^a.CO?(-1):a.ne.he(b,c,d);}
let AIN=(a,b)=>{return 0;}
let AYc=a=>{return B(205);}
let P1=(a,b,c,d,e)=>{let f;b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}f=1;break b;}f=0;}if(!f&&b!=95){n:{e:{if(CS(b)==6)while(true){c=c+(-1)|0;if(c<d)break e;if(c<0)break n;if(c>=e.m9.length)break n;bf:{l:{f=e.m9.charCodeAt(c);switch(CS(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break l;default:break l;}b=1;break bf;}b=0;}if(b)return 0;if(CS(f)!=6)return 1;}}return 1;}e=new U;e.m$=1;e.m_=1;D(e);}return 0;}
let VZ=F(B_);
let A0q=()=>{let a=new VZ();AUN(a);return a;}
let AUN=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let AOa=(a,b,c,d)=>{if(b!=d.t$)return (-1);return a.ne.he(b,c,d);}
let AYa=(a,b)=>{return 0;}
let AH7=a=>{return B(206);}
function TF(){B_.call(this);this.u0=0;}
let A3U=a=>{let b=new TF();ADB(b,a);return b;}
let ADB=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.u0=b;}
let ASW=(a,b,c,d)=>{let e,f,g;e=!d.sT?c.m9.length:d.nN;if(b>=e){f=a.u0;d.n$.data[f]=0;return a.ne.he(b,c,d);}k:{e=e-b|0;if(e==2){if(b>=0&&b<c.m9.length){if(c.m9.charCodeAt(b)!=13)break k;g=b+1|0;if(g>=0&&g<c.m9.length){if(c.m9.charCodeAt(g)!=10)break k;f=a.u0;d.n$.data[f]=0;return a.ne.he(b,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}}r:{bf:{if(e==1){if(b>=0&&b<c.m9.length){f=c.m9.charCodeAt(b);if(f==10)break r;if(f==13)break r;if(f==133)break r;if((f|1)!=8233)break bf;else break r;}c=new U;c.m$
=1;c.m_=1;D(c);}}return (-1);}e=a.u0;d.n$.data[e]=0;return a.ne.he(b,c,d);}
let AJW=(a,b)=>{let c,d,e;c=a.u0;d=b.n$.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AP8=a=>{return B(207);}
let AD_=F(B_);
let A3_=()=>{let a=new AD_();AN0(a);return a;}
let AN0=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let ARK=(a,b,c,d)=>{if(b<(!d.w9?d.nN:c.m9.length))return (-1);d.pC=1;d.EV=1;return a.ne.he(b,c,d);}
let AFR=(a,b)=>{return 0;}
let AML=a=>{return B(208);}
function Vg(){B_.call(this);this.BO=null;}
let A4e=a=>{let b=new Vg();ASZ(b,a);return b;}
let ASZ=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.BO=b;}
let AJA=(a,b,c,d)=>{let e,f;b:{a:{d:{if(b!=d.nN){if(!b)break a;if(d.sT&&b==d.pp)break a;e=a.BO;f=b-1|0;if(f>=0&&f<c.m9.length){f=c.m9.charCodeAt(f);if(b<0)break b;if(b>=c.m9.length)break b;if(!e.hY(f,c.m9.charCodeAt(b)))break d;else break a;}c=new U;c.m$=1;c.m_=1;D(c);}}return (-1);}return a.ne.he(b,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let AMn=(a,b)=>{return 0;}
let AHM=a=>{return B(209);}
let AD5=F(Cv);
let A4V=()=>{let a=new AD5();ARr(a);return a;}
let ARr=a=>{let b,c;b=S;S=b+1|0;c=new Bn;c.m8=H(20);a.nq=(K(c,c.m7,b,10)).l();}
let AXu=(a,b,c,d)=>{let e,f,g,h,i;e=d.nN;f=b+1|0;if(f>e){d.pC=1;return (-1);}if(b>=0&&b<c.m9.length){g=BS(c.m9.charCodeAt(b)&64512,55296);h=g?0:1;o:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.m9.length){h=c.m9.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break o;else return a.ne.he(i,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}}}return a.ne.he(f,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let AKU=a=>{return B(210);}
let AIR=(a,b)=>{a.ne=b;}
let ARo=a=>{return (-2147483602);}
let AIQ=(a,b)=>{return 1;}
function Wi(){Cv.call(this);this.za=null;}
let A3y=a=>{let b=new Wi();AJT(b,a);return b;}
let AJT=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.za=b;}
let ARC=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.nN;f=b+1|0;if(f>e){d.pC=1;return (-1);}if(b>=0&&b<c.m9.length){g=c.m9.charCodeAt(b);h=BS(g&64512,55296);i=h?0:1;o:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.m9.length){i=c.m9.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break o;else return a.za.hW(((g&1023)<<10|i&1023)+65536|0)?(-1):a.ne.he(j,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}}}return a.za.hW(g)?(-1):a.ne.he(f,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let AJ9=a=>{return B(211);}
let ATS=(a,b)=>{a.ne=b;}
let AFJ=a=>{return (-2147483602);}
let AXQ=(a,b)=>{return 1;}
function ADU(){B_.call(this);this.w4=0;}
let A17=a=>{let b=new ADU();AMe(b,a);return b;}
let AMe=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.w4=b;}
let AOL=(a,b,c,d)=>{let e,f;e=!d.sT?c.m9.length:d.nN;if(b>=e){e=a.w4;d.n$.data[e]=0;return a.ne.he(b,c,d);}n:{if((e-b|0)==1){if(b>=0&&b<c.m9.length){if(c.m9.charCodeAt(b)!=10)break n;else{f=a.w4;d.n$.data[f]=1;return a.ne.he(b+1|0,c,d);}}c=new U;c.m$=1;c.m_=1;D(c);}}return (-1);}
let AMb=(a,b)=>{let c,d,e;c=a.w4;d=b.n$.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let APu=a=>{return B(207);}
function AAJ(){B_.call(this);this.xg=0;}
let A1p=a=>{let b=new AAJ();AM8(b,a);return b;}
let AM8=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.xg=b;}
let ARI=(a,b,c,d)=>{let e;if((!d.sT?c.m9.length-b|0:d.nN-b|0)<=0){e=a.xg;d.n$.data[e]=0;return a.ne.he(b,c,d);}if(b>=0&&b<c.m9.length){if(c.m9.charCodeAt(b)!=10)return (-1);e=a.xg;d.n$.data[e]=1;return a.ne.he(b+1|0,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let ALZ=(a,b)=>{let c,d,e;c=a.xg;d=b.n$.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AG4=a=>{return B(212);}
function Ur(){B_.call(this);this.ub=0;}
let AYY=a=>{let b=new Ur();AYj(b,a);return b;}
let AYj=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.ub=b;}
let ANN=(a,b,c,d)=>{let e,f,g;e=!d.sT?c.m9.length-b|0:d.nN-b|0;if(!e){e=a.ub;d.n$.data[e]=0;return a.ne.he(b,c,d);}k:{if(e<2){if(b>=0&&b<c.m9.length){f=c.m9.charCodeAt(b);g=97;break k;}c=new U;c.m$=1;c.m_=1;D(c);}if(b>=0&&b<c.m9.length){f=c.m9.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.m9.length){g=c.m9.charCodeAt(e);break k;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.ub;d.n$.data[e]=0;return a.ne.he(b,c,d);case 13:if(g!=10){e=a.ub;d.n$.data[e]=0;return a.ne.he(b,
c,d);}e=a.ub;d.n$.data[e]=0;return a.ne.he(b,c,d);default:}return (-1);}
let AJ0=(a,b)=>{let c,d,e;c=a.ub;d=b.n$.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AMq=a=>{return B(213);}
function IN(){let a=this;Cv.call(a);a.uw=0;a.td=0;}
let A4$=(a,b)=>{let c=new IN();AJE(c,a,b);return c;}
let AJE=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.uw=b;a.td=c;}
let AHr=(a,b,c,d)=>{let e,f,g,h,i;e=Ji(a,d);if(e!==null&&(b+e.m9.length|0)<=d.nN){f=0;k:{n:{c:{o:{while(true){if(f>=e.m9.length){g=a.td;d.n$.data[g]=e.m9.length;return a.ne.he(b+e.m9.length|0,c,d);}if(f<0)break c;if(f>=e.m9.length)break c;h=e.m9.charCodeAt(f);i=b+f|0;if(i<0)break o;if(i>=c.m9.length)break o;if(h!=c.m9.charCodeAt(i)){if(f<0)break k;if(f>=e.m9.length)break k;g=HR(e.m9.charCodeAt(f));if(i<0)break n;if(i>=c.m9.length)break n;if(g!=c.m9.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new U;c.m$=1;c.m_
=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}return (-1);}
let AS_=(a,b)=>{a.ne=b;}
let Ji=(a,b)=>{let c,d,e,f,g;c=a.uw;d=b.oj.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.rf.m9.length?B1(b.rf,f,g):null;}
let AG$=a=>{let b,c,d,e,f,g,h;b=a.oh;c=new I;c.m8=H(16);G(c,c.m7,B(214));K(c,c.m7,b,10);d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let ATv=(a,b)=>{let c,d,e;c=a.td;d=b.n$.data;e=!d[c]?0:1;d[c]=(-1);return e;}
let AD0=F(IN);
let AY$=(a,b)=>{let c=new AD0();AV7(c,a,b);return c;}
let AV7=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.uw=b;a.td=c;}
let AJ$=(a,b,c,d)=>{let e,f,g;e=Ji(a,d);if(e!==null&&(b+e.m9.length|0)<=d.nN){f=!J4(c,e,b)?(-1):e.m9.length;if(f<0)return (-1);g=a.td;d.n$.data[g]=f;return a.ne.he(b+f|0,c,d);}return (-1);}
let AVR=(a,b,c,d)=>{let e,f,g;e=Ji(a,d);f=d.pp;if(e!==null&&(b+e.m9.length|0)<=f){while(true){if(b>f)return (-1);g=Lk(c,e,b);if(g<0)return (-1);if(a.ne.he(g+e.m9.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);}
let AG5=(a,b,c,d,e)=>{let f,g;f=Ji(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Py(d,f,c);if(g<0)break a;if(g<b)break a;if(a.ne.he(g+f.m9.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
let AQr=(a,b)=>{return 1;}
let AWd=a=>{let b,c,d,e,f,g,h;b=a.oh;c=new I;c.m8=H(16);G(c,c.m7,B(215));K(c,c.m7,b,10);d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
function YB(){IN.call(this);this.DF=0;}
let A1q=(a,b)=>{let c=new YB();AMa(c,a,b);return c;}
let AMa=(a,b,c)=>{let d,e;d=S;S=d+1|0;e=new Bn;e.m8=H(20);a.nq=(K(e,e.m7,d,10)).l();a.uw=b;a.td=c;}
let APG=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.uw;f=d.oj.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.rf.m9.length?B1(d.rf,h,i):null;if(j!==null&&(b+j.m9.length|0)<=d.nN){i=0;o:{e:{while(true){if(i>=j.m9.length){e=a.td;d.n$.data[e]=j.m9.length;return a.ne.he(b+j.m9.length|0,c,d);}if(i<0)break o;if(i>=j.m9.length)break o;e=j.m9.charCodeAt(i);if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}e=Cs(B9,e)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value)
:null)));}g=Cs(B2,e)&65535;h=b+i|0;if(h<0)break e;if(h>=c.m9.length)break e;e=c.m9.charCodeAt(h);if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}e=Cs(B9,e)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}if(g!=(Cs(B2,e)&65535))break;i=i+1|0;}return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}return (-1);}
let AIO=a=>{let b,c,d,e,f,g,h;b=a.DF;c=new I;c.m8=H(16);G(c,c.m7,B(216));K(c,c.m7,b,10);d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let K_=F(Bn);
let Q$=(a,b,c,d,e)=>{AAR(a,b,c,d,e);return a;}
let ALQ=(a,b,c,d,e)=>{let f,g,h,i;Bh(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.m8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
let AIB=(a,b,c,d)=>{let e,f,g,h,i;e=a.m7;Bh(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.m8.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;}
let AJb=(a,b)=>{Oj(a,b);}
let AU0=(a,b,c)=>{Bh(a,b,b+1|0);a.m8.data[b]=c;return a;}
let AGu=(a,b,c)=>{G(a,b,c);return a;}
function Zw(){let a=this;Cy.call(a);a.o6=null;a.yH=null;a.zk=null;}
let A1B=a=>{let b=new Zw();AKA(b,a);return b;}
let AKA=(a,b)=>{let c,d,e;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.o6=W(b);c=b.m7;a.nX=c;a.yH=ARn(c);a.zk=ARn(a.nX);c=0;b:{a:{while(c<(a.nX-1|0)){b=a.yH;d=a.o6;if(c<0)break b;if(c>=d.m9.length)break b;Qj(b,d.m9.charCodeAt(c),(a.nX-c|0)-1|0);b=a.zk;d=a.o6;e=(a.nX-c|0)-1|0;if(e<0)break a;if(e>=d.m9.length)break a;Qj(b,d.m9.charCodeAt(e),(a.nX-c|0)-1|0);c=c+1|0;}return;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let AKH=(a,b,c)=>{let d,e,f,g;d=0;b:{a:{d:{while(d<a.nX){e=d+b|0;if(e<0)break b;if(e>=c.m9.length)break b;f=c.m9.charCodeAt(e);g=a.o6;if(d<0)break a;if(d>=g.m9.length)break a;if(f!=g.m9.charCodeAt(d)){b=0;break d;}d=d+1|0;}b=1;}return !b?(-1):a.nX;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let AIi=(a,b,c,d)=>{let e,f;e=d.nN;while(true){if(b>e)return (-1);f=AEc(a,c,b,e);if(f<0)return (-1);if(a.ne.he(f+a.nX|0,c,d)>=0)break;b=f+1|0;}return f;}
let AMi=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=ADA(a,d,b,c);if(c<0)return (-1);if(a.ne.he(c+a.nX|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
let ARW=a=>{let b,c,d,e,f,g,h;b=a.o6;c=new I;c.m8=H(16);G(c,c.m7,B(217));d=c.m7;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.m9=O(e.data,0,g);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ANh=(a,b)=>{let c,d,e;if(b instanceof Fx){c=b.py;b=a.o6;if(0<b.m9.length)return c!=b.m9.charCodeAt(0)?0:1;b=new U;b.m$=1;b.m_=1;D(b);}if(b instanceof Fg){b=b;d=B1(a.o6,0,1);b=b.qe;if(0>=d.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}return (!b.hI(d.m9.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof EG)){if(!(b instanceof FP))return 1;g:{if(a.o6.m9.length>1){e=b.tv;b=a.o6;if(0>=b.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}c=b.m9.charCodeAt(0);b=a.o6;if(1>=b.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}if(e==(((c&1023)<<
10|b.m9.charCodeAt(1)&1023)+65536|0)){c=1;break g;}}c=0;}return c;}b=b;d=a.o6;if(0>=d.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}v:{m:{if(!b.hI(d.m9.charCodeAt(0))){if(a.o6.m9.length<=1)break m;d=a.o6;if(0>=d.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}c=d.m9.charCodeAt(0);d=a.o6;if(1>=d.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}if(!b.hI(((c&1023)<<10|d.m9.charCodeAt(1)&1023)+65536|0))break m;}c=1;break v;}c=0;}return c;}
let AEc=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.o6;f=a.nX-1|0;if(f>=0&&f<e.m9.length){g=e.m9.charCodeAt(f);d:{k:{n:{while(true){f=a.nX;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break n;if(f>=b.m9.length)break n;h=b.m9.charCodeAt(f);if(h==g){f=0;bf:{while(f<a.nX){i=f+c|0;if(i<0)break d;if(i>=b.m9.length)break d;j=b.m9.charCodeAt(i);e=a.o6;if(f<0)break k;if(f>=e.m9.length)break k;if(j!=e.m9.charCodeAt(f)){f=0;break bf;}f=f+1|0;}f=1;}if(f)break;}c=c+Q8(a.yH,h)|0;}return c;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=
1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let ADA=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.o6;if(0>=e.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}f=e.m9.charCodeAt(0);g=(b.m9.length-d|0)-a.nX|0;if(g<=0)d=d+g|0;k:{n:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.m9.length)break c;h=b.m9.charCodeAt(d);if(h==f){g=0;l:{while(g<a.nX){i=g+d|0;if(i<0)break k;if(i>=b.m9.length)break k;j=b.m9.charCodeAt(i);e=a.o6;if(g<0)break n;if(g>=e.m9.length)break n;if(j!=e.m9.charCodeAt(g)){g=0;break l;}g=g+1|0;}g=1;}if(g)break;}d=d-Q8(a.zk,h)|0;}return d;}b=new U;b.m$=1;b.m_
=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
function Nw(){Cy.call(this);this.vd=null;}
let APT=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{while(true){if(d>=a.vd.m9.length)return a.vd.m9.length;e=a.vd;if(d<0)break b;if(d>=e.m9.length)break b;f=e.m9.charCodeAt(d);g=b+d|0;if(g<0)break a;if(g>=c.m9.length)break a;h=c.m9.charCodeAt(g);if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}h=Cs(B9,h)&65535;if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}if(f!=(Cs(B2,h)&65535))break;d=d+1|0;}return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_
=1;D(c);}
let ANv=a=>{let b,c,d,e,f,g,h;b=a.vd;c=new I;c.m8=H(16);G(c,c.m7,B(218));d=c.m7;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.m9=O(e.data,0,g);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function U9(){Cy.call(this);this.tQ=null;}
let A5q=a=>{let b=new U9();AM6(b,a);return b;}
let AM6=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.tQ=W(b);a.nX=b.m7;}
let AUc=(a,b,c)=>{let d,e,f,g,h;d=0;b:{a:{d:{k:{while(true){if(d>=a.tQ.m9.length)return a.tQ.m9.length;e=a.tQ;if(d<0)break d;if(d>=e.m9.length)break d;f=e.m9.charCodeAt(d);g=b+d|0;if(g<0)break k;if(g>=c.m9.length)break k;if(f!=c.m9.charCodeAt(g)){e=a.tQ;if(d<0)break b;if(d>=e.m9.length)break b;h=HR(e.m9.charCodeAt(d));if(g<0)break a;if(g>=c.m9.length)break a;if(h!=c.m9.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=
1;c.m_=1;D(c);}
let AVF=a=>{let b,c,d,e,f,g,h;b=a.tQ;c=new I;c.m8=H(16);G(c,c.m7,B(219));d=c.m7;if(b===null)b=B(2);G(c,d,b);b=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){b.m9=O(e.data,0,g);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let AFD=F();
let IM=F();
let UY=null;let Za=null;let ASz=null;let ATK=()=>{ATK=Ba(IM);AK4();}
let AEt=(a,b)=>{let c,d,e,f,g;c=0;while(true){ATK();d=ASz.data;if(c>=d.length){e=new KL;e.m$=1;e.m_=1;e.na=B(43);e.Fd=B(43);e.E4=b;D(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof M))g=0;else{f=f;g=b.m9!==f.m9?0:1;}if(g)break;c=c+1|0;}return d[1];}
let AK4=()=>{UY=A35();Za=A1L();ASz=N(LN(C),[N(C,[B(220),A4_()]),N(C,[B(221),AYL()]),N(C,[B(222),A34()]),N(C,[B(223),A4B()]),N(C,[B(224),Za]),N(C,[B(225),A2a()]),N(C,[B(226),A1E()]),N(C,[B(227),AZf()]),N(C,[B(228),AY6()]),N(C,[B(229),AZp()]),N(C,[B(230),A0y()]),N(C,[B(231),AZj()]),N(C,[B(232),A3b()]),N(C,[B(233),AYD()]),N(C,[B(234),A4n()]),N(C,[B(235),A0t()]),N(C,[B(236),A1$()]),N(C,[B(237),A0o()]),N(C,[B(238),A1_()]),N(C,[B(239),AZA()]),N(C,[B(240),A4T()]),N(C,[B(241),AZ3()]),N(C,[B(242),A2q()]),N(C,[B(243),
A30()]),N(C,[B(244),A3V()]),N(C,[B(245),A4I()]),N(C,[B(246),AZy()]),N(C,[B(247),A3q()]),N(C,[B(248),UY]),N(C,[B(249),A2L()]),N(C,[B(250),AZh()]),N(C,[B(251),UY]),N(C,[B(252),AYx()]),N(C,[B(253),Za]),N(C,[B(254),A07()]),N(C,[B(255),Be(0,127)]),N(C,[B(256),Be(128,255)]),N(C,[B(257),Be(256,383)]),N(C,[B(258),Be(384,591)]),N(C,[B(259),Be(592,687)]),N(C,[B(260),Be(688,767)]),N(C,[B(261),Be(768,879)]),N(C,[B(262),Be(880,1023)]),N(C,[B(263),Be(1024,1279)]),N(C,[B(264),Be(1280,1327)]),N(C,[B(265),Be(1328,1423)]),N(C,
[B(266),Be(1424,1535)]),N(C,[B(267),Be(1536,1791)]),N(C,[B(268),Be(1792,1871)]),N(C,[B(269),Be(1872,1919)]),N(C,[B(270),Be(1920,1983)]),N(C,[B(271),Be(2304,2431)]),N(C,[B(272),Be(2432,2559)]),N(C,[B(273),Be(2560,2687)]),N(C,[B(274),Be(2688,2815)]),N(C,[B(275),Be(2816,2943)]),N(C,[B(276),Be(2944,3071)]),N(C,[B(277),Be(3072,3199)]),N(C,[B(278),Be(3200,3327)]),N(C,[B(279),Be(3328,3455)]),N(C,[B(280),Be(3456,3583)]),N(C,[B(281),Be(3584,3711)]),N(C,[B(282),Be(3712,3839)]),N(C,[B(283),Be(3840,4095)]),N(C,[B(284),
Be(4096,4255)]),N(C,[B(285),Be(4256,4351)]),N(C,[B(286),Be(4352,4607)]),N(C,[B(287),Be(4608,4991)]),N(C,[B(288),Be(4992,5023)]),N(C,[B(289),Be(5024,5119)]),N(C,[B(290),Be(5120,5759)]),N(C,[B(291),Be(5760,5791)]),N(C,[B(292),Be(5792,5887)]),N(C,[B(293),Be(5888,5919)]),N(C,[B(294),Be(5920,5951)]),N(C,[B(295),Be(5952,5983)]),N(C,[B(296),Be(5984,6015)]),N(C,[B(297),Be(6016,6143)]),N(C,[B(298),Be(6144,6319)]),N(C,[B(299),Be(6400,6479)]),N(C,[B(300),Be(6480,6527)]),N(C,[B(301),Be(6528,6623)]),N(C,[B(302),Be(6624,
6655)]),N(C,[B(303),Be(6656,6687)]),N(C,[B(304),Be(7424,7551)]),N(C,[B(305),Be(7552,7615)]),N(C,[B(306),Be(7616,7679)]),N(C,[B(307),Be(7680,7935)]),N(C,[B(308),Be(7936,8191)]),N(C,[B(309),Be(8192,8303)]),N(C,[B(310),Be(8304,8351)]),N(C,[B(311),Be(8352,8399)]),N(C,[B(312),Be(8400,8447)]),N(C,[B(313),Be(8448,8527)]),N(C,[B(314),Be(8528,8591)]),N(C,[B(315),Be(8592,8703)]),N(C,[B(316),Be(8704,8959)]),N(C,[B(317),Be(8960,9215)]),N(C,[B(318),Be(9216,9279)]),N(C,[B(319),Be(9280,9311)]),N(C,[B(320),Be(9312,9471)]),
N(C,[B(321),Be(9472,9599)]),N(C,[B(322),Be(9600,9631)]),N(C,[B(323),Be(9632,9727)]),N(C,[B(324),Be(9728,9983)]),N(C,[B(325),Be(9984,10175)]),N(C,[B(326),Be(10176,10223)]),N(C,[B(327),Be(10224,10239)]),N(C,[B(328),Be(10240,10495)]),N(C,[B(329),Be(10496,10623)]),N(C,[B(330),Be(10624,10751)]),N(C,[B(331),Be(10752,11007)]),N(C,[B(332),Be(11008,11263)]),N(C,[B(333),Be(11264,11359)]),N(C,[B(334),Be(11392,11519)]),N(C,[B(335),Be(11520,11567)]),N(C,[B(336),Be(11568,11647)]),N(C,[B(337),Be(11648,11743)]),N(C,[B(338),
Be(11776,11903)]),N(C,[B(339),Be(11904,12031)]),N(C,[B(340),Be(12032,12255)]),N(C,[B(341),Be(12272,12287)]),N(C,[B(342),Be(12288,12351)]),N(C,[B(343),Be(12352,12447)]),N(C,[B(344),Be(12448,12543)]),N(C,[B(345),Be(12544,12591)]),N(C,[B(346),Be(12592,12687)]),N(C,[B(347),Be(12688,12703)]),N(C,[B(348),Be(12704,12735)]),N(C,[B(349),Be(12736,12783)]),N(C,[B(350),Be(12784,12799)]),N(C,[B(351),Be(12800,13055)]),N(C,[B(352),Be(13056,13311)]),N(C,[B(353),Be(13312,19893)]),N(C,[B(354),Be(19904,19967)]),N(C,[B(355),Be(19968,
40959)]),N(C,[B(356),Be(40960,42127)]),N(C,[B(357),Be(42128,42191)]),N(C,[B(358),Be(42752,42783)]),N(C,[B(359),Be(43008,43055)]),N(C,[B(360),Be(44032,55203)]),N(C,[B(361),Be(55296,56191)]),N(C,[B(362),Be(56192,56319)]),N(C,[B(363),Be(56320,57343)]),N(C,[B(364),Be(57344,63743)]),N(C,[B(365),Be(63744,64255)]),N(C,[B(366),Be(64256,64335)]),N(C,[B(367),Be(64336,65023)]),N(C,[B(368),Be(65024,65039)]),N(C,[B(369),Be(65040,65055)]),N(C,[B(370),Be(65056,65071)]),N(C,[B(371),Be(65072,65103)]),N(C,[B(372),Be(65104,65135)]),
N(C,[B(373),Be(65136,65279)]),N(C,[B(374),Be(65280,65519)]),N(C,[B(29),Be(0,1114111)]),N(C,[B(375),AZk()]),N(C,[B(376),Ck(0,1)]),N(C,[B(377),Kn(62,1)]),N(C,[B(378),Ck(1,1)]),N(C,[B(379),Ck(2,1)]),N(C,[B(380),Ck(3,0)]),N(C,[B(381),Ck(4,0)]),N(C,[B(382),Ck(5,1)]),N(C,[B(383),Kn(448,1)]),N(C,[B(384),Ck(6,1)]),N(C,[B(385),Ck(7,0)]),N(C,[B(386),Ck(8,1)]),N(C,[B(387),Kn(3584,1)]),N(C,[B(388),Ck(9,1)]),N(C,[B(389),Ck(10,1)]),N(C,[B(390),Ck(11,1)]),N(C,[B(391),Kn(28672,0)]),N(C,[B(392),Ck(12,0)]),N(C,[B(393),Ck(13,
0)]),N(C,[B(394),Ck(14,0)]),N(C,[B(395),A1z(983040,1,1)]),N(C,[B(396),Ck(15,0)]),N(C,[B(397),Ck(16,1)]),N(C,[B(398),Ck(18,1)]),N(C,[B(399),A13(19,0,1)]),N(C,[B(400),Kn(1643118592,1)]),N(C,[B(401),Ck(20,0)]),N(C,[B(402),Ck(21,0)]),N(C,[B(403),Ck(22,0)]),N(C,[B(404),Ck(23,0)]),N(C,[B(405),Ck(24,1)]),N(C,[B(406),Kn(2113929216,1)]),N(C,[B(407),Ck(25,1)]),N(C,[B(408),Ck(26,0)]),N(C,[B(409),Ck(27,0)]),N(C,[B(410),Ck(28,1)]),N(C,[B(411),Ck(29,0)]),N(C,[B(412),Ck(30,0)])]);}
function Nu(){Cy.call(this);this.y7=0;}
let AUg=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.m9.length){e=c.m9.charCodeAt(b);if(d>=0&&d<c.m9.length){d=c.m9.charCodeAt(d);b=a.y7;d=((e&1023)<<10|d&1023)+65536|0;if(B9===null){if(BQ===null)BQ=EO();B9=CG(CK((BQ.value!==null?Bk(BQ.value):null)));}d=Cs(B9,d);if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}return b!=Cs(B2,d)?(-1):2;}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let AYb=a=>{let b,c,d,e,f,g;b=new M;c=FT(a.y7);d=c.data;P();b.m9=O(c.data,0,d.length);e=new I;e.m8=H(16);G(e,e.m7,B(199));G(e,e.m7,b);b=new M;c=e.m8;d=c.data;f=e.m7;g=d.length;if(f>=0&&f<=(g-0|0)){b.m9=O(c.data,0,f);return b;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function JP(){Cv.call(this);this.r1=0;}
let A2P=a=>{let b=new JP();AI8(b,a);return b;}
let AI8=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.r1=b;}
let AR3=(a,b)=>{a.ne=b;}
let OZ=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.nN){d.pC=1;return (-1);}if(b>=0&&b<c.m9.length){k:{f=c.m9.charCodeAt(b);if(b>d.pp){b=b-1|0;if(b>=0&&b<c.m9.length){if(!((c.m9.charCodeAt(b)&64512)!=55296?0:1))break k;return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}}if(a.r1!=f)return (-1);return a.ne.he(e,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let ANb=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof M)){e=d.nN;a:{while(true){if(b>e){b=(-1);break a;}if(OZ(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.pp;g=d.nN;c:{while(true){if(b>=g)return (-1);h=EL(c,a.r1,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break c;if(b>=c.m9.length)break c;if((c.m9.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.ne;b=h+1|0;if(i.he(b,c,d)>=0)break;}return h;}c=new U;c.m$=1;c.m_=1;D(c);}
let AKR=(a,b,c,d,e)=>{let f,g;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(OZ(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.pp;c:{o:{while(true){if(c<b)return (-1);g=Gh(d,a.r1,c);if(g<0)break o;if(g<b)break o;if(g>f){c=g-1|0;if(c<0)break c;if(c>=d.m9.length)break c;if((d.m9.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.ne.he(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new U;d.m$=1;d.m_=1;D(d);}
let AU8=a=>{let b,c,d,e,f,g,h;b=a.r1;c=new I;c.m8=H(16);d=c.m7;Bh(c,d,d+1|0);e=c.m8;f=e.data;f[d]=b;g=new M;d=c.m7;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.m9=O(e.data,0,d);return g;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AGY=(a,b)=>{if(b instanceof Fx)return 0;if(b instanceof Fg)return 0;if(b instanceof EG)return 0;if(b instanceof FP)return 0;if(b instanceof Mi)return 0;if(!(b instanceof JP))return 1;return b.r1!=a.r1?0:1;}
let AVl=(a,b)=>{return 1;}
function Mi(){Cv.call(this);this.sB=0;}
let ANR=a=>{let b=new Mi();ARD(b,a);return b;}
let ARD=(a,b)=>{let c,d;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.sB=b;}
let AI_=(a,b)=>{a.ne=b;}
let NE=(a,b,c,d)=>{let e,f,g;e=d.nN;f=b+1|0;e=BS(f,e);if(e>0){d.pC=1;return (-1);}if(b>=0&&b<c.m9.length){k:{g=c.m9.charCodeAt(b);if(e<0){if(f>=0&&f<c.m9.length){if(!((c.m9.charCodeAt(f)&64512)!=56320?0:1))break k;return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}}if(a.sB!=g)return (-1);return a.ne.he(f,c,d);}c=new U;c.m$=1;c.m_=1;D(c);}
let ASx=(a,b,c,d)=>{let e,f;if(!(c instanceof M)){e=d.nN;a:{while(true){if(b>e){b=(-1);break a;}if(NE(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.nN;c:{while(true){if(b>=e)return (-1);f=EL(c,a.sB,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break c;if(b>=c.m9.length)break c;if((c.m9.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.ne.he(b,c,d)>=0)break;}return f;}c=new U;c.m$=1;c.m_=1;D(c);}
let AUa=(a,b,c,d,e)=>{let f,g;if(!(d instanceof M)){a:{while(true){if(c<b){c=(-1);break a;}if(NE(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.nN;c:{o:{while(true){if(c<b)return (-1);g=Gh(d,a.sB,c);if(g<0)break o;if(g<b)break o;c=g+1|0;if(c<f){if(c<0)break c;if(c>=d.m9.length)break c;if((d.m9.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.ne.he(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new U;d.m$=1;d.m_=1;D(d);}
let AXs=a=>{let b,c,d,e,f,g,h;b=a.sB;c=new I;c.m8=H(16);d=c.m7;Bh(c,d,d+1|0);e=c.m8;f=e.data;f[d]=b;g=new M;d=c.m7;P();h=f.length;if(d>=0&&d<=(h-0|0)){g.m9=O(e.data,0,d);return g;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AKJ=(a,b)=>{if(b instanceof Fx)return 0;if(b instanceof Fg)return 0;if(b instanceof EG)return 0;if(b instanceof FP)return 0;if(b instanceof JP)return 0;if(!(b instanceof Mi))return 1;return b.sB!=a.sB?0:1;}
let ASM=(a,b)=>{return 1;}
function FP(){let a=this;Cy.call(a);a.tj=0;a.sH=0;a.tv=0;}
let AZn=a=>{let b=new FP();AXN(b,a);return b;}
let AXN=(a,b)=>{let c,d,e;c=S;S=c+1|0;d=new Bn;d.m8=H(20);a.nq=(K(d,d.m7,c,10)).l();a.nX=1;a.nX=2;a.tv=b;e=(FT(b)).data;a.tj=e[0];a.sH=e[1];}
let ATw=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.m9.length){e=c.m9.charCodeAt(b);if(d>=0&&d<c.m9.length){d=c.m9.charCodeAt(d);return a.tj==e&&a.sH==d?2:(-1);}c=new U;c.m$=1;c.m_=1;D(c);}c=new U;c.m$=1;c.m_=1;D(c);}
let AQ7=(a,b,c,d)=>{let e,f,g,h;if(c instanceof M){e=d.nN;a:{while(b<e){b=EL(c,a.tj,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.m9.length)break a;f=c.m9.charCodeAt(b);if(a.sH==f&&a.ne.he(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new U;c.m$=1;c.m_=1;D(c);}g=d.nN;e:{r:{bf:{while(true){if(b>g){b=(-1);break bf;}if((b+a.nX|0)>d.nN){d.pC=1;h=(-1);}else{h=b+1|0;if(b<0)break e;if(b>=c.m9.length)break e;e=c.m9.charCodeAt(b);if(h<0)break r;if(h>=c.m9.length)break r;f=c.m9.charCodeAt(h);h
=a.tj==e&&a.sH==f?2:(-1);h=h<0?(-1):a.ne.he(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new U;Bd(c);D(c);}c=new U;Bd(c);D(c);}
let AI9=(a,b,c,d,e)=>{let f,g,h;if(d instanceof M){a:{d:{while(true){if(c<b)return (-1);c=Gh(d,a.sH,c)+(-1)|0;if(c<0)break d;if(c<b)break d;f=a.tj;if(c<0)break a;if(c>=d.m9.length)break a;if(f==d.m9.charCodeAt(c)&&a.ne.he(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new U;d.m$=1;d.m_=1;D(d);}e:{r:{bf:{while(true){if(c<b){c=(-1);break bf;}if((c+a.nX|0)>e.nN){e.pC=1;f=(-1);}else{g=c+1|0;if(c<0)break e;if(c>=d.m9.length)break e;h=d.m9.charCodeAt(c);if(g<0)break r;if(g>=d.m9.length)break r;g=d.m9.charCodeAt(g);f
=a.tj==h&&a.sH==g?2:(-1);f=f<0?(-1):a.ne.he(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new U;Bd(d);D(d);}d=new U;Bd(d);D(d);}
let AWh=a=>{let b,c,d,e,f,g,h;b=a.tj;c=a.sH;d=new I;d.m8=H(16);e=d.m7;Bh(d,e,e+1|0);d.m8.data[e]=b;b=d.m7;Bh(d,b,b+1|0);f=d.m8;g=f.data;g[b]=c;h=new M;c=d.m7;P();e=g.length;if(c>=0&&c<=(e-0|0)){h.m9=O(f.data,0,c);return h;}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}
let ATi=(a,b)=>{if(b instanceof FP)return b.tv!=a.tv?0:1;if(b instanceof EG)return b.hI(a.tv);if(b instanceof Fx)return 0;if(!(b instanceof Fg))return 1;return 0;}
let SD=F(GB);
let AJl=(a,b)=>{return b!=10?0:1;}
let ATo=(a,b,c)=>{return b!=10?0:1;}
let SE=F(GB);
let AUq=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
let AWV=(a,b,c)=>{b:{a:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break a;if(c==10)break a;}b=1;break b;}b=0;}return b;}
function ACo(){let a=this;C.call(a);a.Aa=null;a.x0=null;a.uD=0;a.Dd=0;}
let ARn=a=>{let b=new ACo();AN9(b,a);return b;}
let AN9=(a,b)=>{let c,d;while(true){c=a.uD;if(b<c)break;a.uD=c<<1|1;}d=c<<1|1;a.uD=d;d=d+1|0;a.Aa=R(d);a.x0=R(d);a.Dd=b;}
let Qj=(a,b,c)=>{let d,e,f,g;d=0;e=a.uD;f=b&e;while(true){g=a.Aa.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.x0.data[f]=c;}
let Q8=(a,b)=>{let c,d,e,f;c=a.uD;d=b&c;e=0;while(true){f=a.Aa.data[d];if(!f)break;if(f==b)return a.x0.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.Dd;}
let WT=F();
let V9=F();
let AW_=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new ME;d=H(b.m9.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.yr=d;f=HO(c);d=R(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=HO(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=HO(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.m9.length)break;e[f]=b.m9.charCodeAt(f);f=f+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}
let CK=b=>{let c,d,e,f,g,h,i,j,k,l;c=new ME;d=H(b.m9.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.yr=d;f=HO(c);d=R(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+HO(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=HO(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.m9.length)break;e[f]=b.m9.charCodeAt(f);f=f+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}
let CG=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=R(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bc;l.m$=1;l.m_=1;D(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new SS;l.BM=b;l.BX=c;return l;}
let LT=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
let AYn=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=Bo(I8,16384);d=c.data;e=BI(16384).data;f=0;g=0;h=0;i=0;a:{d:{k:{while(true){if(i>=b.m9.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new Ce;b.nA=j;k=b;j.classObject=k;}}b=Ej(b);if(b===null){b=new C0;b.m$=1;b.m_=1;D(b);}if(b===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;D(b);}if(g<0){b=new DS;b.m$=1;b.m_=1;D(b);}k=Ex(b.nA,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break k;if(i>=b.m9.length)break k;l
=LT(b.m9.charCodeAt(i));if(l==64){i=i+1|0;if(i<0)break d;if(i>=b.m9.length)break d;l=LT(b.m9.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.m9.length)break a;m=m|Cu(n,LT(b.m9.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.m9.length)break;m=LT(b.m9.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new I8;l=h+f|0;q=BI(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.yO=h;j.zh=l;j.yS=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f
=0;}else{n=f+m|0;o=e.length;if(n<o)s=g;else{s=g+1|0;j=new I8;t=h+f|0;q=BI(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.yO=h;j.zh=t;j.yS=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let DS=F(BL);
let Vd=F();
function ME(){let a=this;C.call(a);a.yr=null;a.BA=0;}
let Yn=F();
let HO=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.yr.data;f=b.BA;b.BA=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Cu(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
let L5=F(Bz);
let A35=()=>{let a=new L5();ANJ(a);return a;}
let ANJ=a=>{return;}
let AND=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return Da(BR(b,9,13),32);}
let Li=F(Bz);
let A1L=()=>{let a=new Li();AU_(a);return a;}
let AU_=a=>{return;}
let APJ=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(b,48,57);}
let ACj=F(Bz);
let A4_=()=>{let a=new ACj();AMN(a);return a;}
let AMN=a=>{return;}
let ATU=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(b,97,122);}
let AC5=F(Bz);
let AYL=()=>{let a=new AC5();AOe(a);return a;}
let AOe=a=>{return;}
let AVm=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(b,65,90);}
let AC7=F(Bz);
let A34=()=>{let a=new AC7();AIj(a);return a;}
let AIj=a=>{return;}
let ALk=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(b,0,127);}
let L1=F(Bz);
let A4B=()=>{let a=new L1();AKb(a);return a;}
let AKb=a=>{return;}
let AJQ=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(b,97,122),65,90);}
let Mu=F(L1);
let A2a=()=>{let a=new Mu();ANW(a);return a;}
let ANW=a=>{return;}
let AL8=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(BR(b,97,122),65,90),48,57);}
let AFx=F(Bz);
let A1E=()=>{let a=new AFx();AQH(a);return a;}
let AQH=a=>{return;}
let ANa=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(BR(b,33,64),91,96),123,126);}
let No=F(Mu);
let AZf=()=>{let a=new No();AS4(a);return a;}
let AS4=a=>{return;}
let AFX=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(BR(BR(BR(BR(b,97,122),65,90),48,57),33,64),91,96),123,126);}
let Zo=F(No);
let AY6=()=>{let a=new Zo();AUQ(a);return a;}
let AUQ=a=>{return;}
let AQm=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return Da(BR(BR(BR(BR(BR(BR(b,97,122),65,90),48,57),33,64),91,96),123,126),32);}
let Z8=F(Bz);
let AZp=()=>{let a=new Z8();AUd(a);return a;}
let AUd=a=>{return;}
let AKz=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return Da(Da(b,32),9);}
let WY=F(Bz);
let A0y=()=>{let a=new WY();AWH(a);return a;}
let AWH=a=>{return;}
let AQi=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return Da(BR(b,0,31),127);}
let WE=F(Bz);
let AZj=()=>{let a=new WE();AIL(a);return a;}
let AIL=a=>{return;}
let AW1=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(BR(b,48,57),97,102),65,70);}
let AC_=F(Bz);
let A3b=()=>{let a=new AC_();AH1(a);return a;}
let AH1=a=>{return;}
let ARj=a=>{let b,c;b=new Rh;b.Eu=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let AFF=F(Bz);
let AYD=()=>{let a=new AFF();ATl(a);return a;}
let ATl=a=>{return;}
let AF8=a=>{let b,c;b=new ND;b.EA=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let ACp=F(Bz);
let A4n=()=>{let a=new ACp();AIo(a);return a;}
let AIo=a=>{return;}
let ANT=a=>{let b,c;b=new QH;b.Ee=a;BA();c=new Bt;c.nn=R(64);b.nr=c;return b;}
let AB5=F(Bz);
let A0t=()=>{let a=new AB5();AQk(a);return a;}
let AQk=a=>{return;}
let ATz=a=>{let b,c;b=new QG;b.D8=a;BA();c=new Bt;c.nn=R(64);b.nr=c;return b;}
let ADD=F(Bz);
let A1$=()=>{let a=new ADD();AJ7(a);return a;}
let AJ7=a=>{return;}
let AKw=a=>{let b,c;b=new Tu;b.EY=a;BA();c=new Bt;c.nn=R(64);b.nr=c;Jv(c,0,2048);b.n7=1;return b;}
let VB=F(Bz);
let A0o=()=>{let a=new VB();AJg(a);return a;}
let AJg=a=>{return;}
let AKX=a=>{let b,c;b=new OW;b.EH=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let UR=F(Bz);
let A1_=()=>{let a=new UR();APO(a);return a;}
let APO=a=>{return;}
let AWO=a=>{let b,c;b=new Om;b.Fe=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let ACC=F(Bz);
let AZA=()=>{let a=new ACC();AQI(a);return a;}
let AQI=a=>{return;}
let AFU=a=>{let b,c;b=new P5;b.Ew=a;BA();c=new Bt;c.nn=R(64);b.nr=c;return b;}
let ACU=F(Bz);
let A4T=()=>{let a=new ACU();ANu(a);return a;}
let ANu=a=>{return;}
let AOR=a=>{let b,c;b=new Nz;b.Dn=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let Xr=F(Bz);
let AZ3=()=>{let a=new Xr();AG_(a);return a;}
let AG_=a=>{return;}
let AK5=a=>{let b,c;b=new NC;b.EJ=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let AAb=F(Bz);
let A2q=()=>{let a=new AAb();AJv(a);return a;}
let AJv=a=>{return;}
let AMr=a=>{let b,c;b=new Oh;b.EX=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let AET=F(Bz);
let A30=()=>{let a=new AET();AO6(a);return a;}
let AO6=a=>{return;}
let AOX=a=>{let b,c;b=new Pe;b.E6=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let ACQ=F(Bz);
let A3V=()=>{let a=new ACQ();AQ_(a);return a;}
let AQ_=a=>{return;}
let AVM=a=>{let b,c;b=new Pj;b.Eg=a;BA();c=new Bt;c.nn=R(64);b.nr=c;return b;}
let Yt=F(Bz);
let A4I=()=>{let a=new Yt();AJi(a);return a;}
let AJi=a=>{return;}
let ASU=a=>{let b,c;b=new RM;b.EM=a;BA();c=new Bt;c.nn=R(64);b.nr=c;return b;}
let Xq=F(Bz);
let AZy=()=>{let a=new Xq();ATC(a);return a;}
let ATC=a=>{return;}
let AQ9=a=>{let b,c;b=new Q3;b.Dq=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let AFC=F(Bz);
let A3q=()=>{let a=new AFC();ANq(a);return a;}
let ANq=a=>{return;}
let ATO=a=>{let b,c;b=new NL;b.Fo=a;BA();c=new Bt;c.nn=R(64);b.nr=c;b.n7=1;return b;}
let KW=F(Bz);
let A2L=()=>{let a=new KW();ALb(a);return a;}
let ALb=a=>{return;}
let APi=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return Da(BR(BR(BR(b,97,122),65,90),48,57),95);}
let ADP=F(KW);
let AZh=()=>{let a=new ADP();ANz(a);return a;}
let ANz=a=>{return;}
let AQN=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;b=FI(Da(BR(BR(BR(b,97,122),65,90),48,57),95),1);b.n7=1;return b;}
let Zz=F(L5);
let AYx=()=>{let a=new Zz();AWk(a);return a;}
let AWk=a=>{return;}
let AIe=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;b=FI(Da(BR(b,9,13),32),1);b.n7=1;return b;}
let Xk=F(Li);
let A07=()=>{let a=new Xk();AOA(a);return a;}
let AOA=a=>{return;}
let AMZ=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;b=FI(BR(b,48,57),1);b.n7=1;return b;}
function WL(){let a=this;Bz.call(a);a.By=0;a.BK=0;}
let Be=(a,b)=>{let c=new WL();AWK(c,a,b);return c;}
let AWK=(a,b,c)=>{a.By=b;a.BK=c;}
let APm=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(b,a.By,a.BK);}
let Xf=F(Bz);
let AZk=()=>{let a=new Xf();AXc(a);return a;}
let AXc=a=>{return;}
let AWz=a=>{let b,c;b=new CI;BA();c=new Bt;c.nn=R(64);b.nr=c;c=new Bt;c.nn=R(2);b.nu=c;return BR(BR(b,65279,65279),65520,65533);}
function Y1(){let a=this;Bz.call(a);a.zP=0;a.xS=0;a.A4=0;}
let Ck=(a,b)=>{let c=new Y1();AJZ(c,a,b);return c;}
let A13=(a,b,c)=>{let d=new Y1();AWM(d,a,b,c);return d;}
let AJZ=(a,b,c)=>{a.xS=c;a.zP=b;}
let AWM=(a,b,c,d)=>{a.A4=d;a.xS=c;a.zP=b;}
let ALU=a=>{let b,c,d;b=new Kt;c=a.zP;BA();d=new Bt;d.nn=R(64);b.nr=d;b.xi=c;if(a.A4)Jv(d,0,2048);b.n7=a.xS;return b;}
function Zp(){let a=this;Bz.call(a);a.zN=0;a.x3=0;a.Ax=0;}
let Kn=(a,b)=>{let c=new Zp();AK6(c,a,b);return c;}
let A1z=(a,b,c)=>{let d=new Zp();AFW(d,a,b,c);return d;}
let AK6=(a,b,c)=>{a.x3=c;a.zN=b;}
let AFW=(a,b,c,d)=>{a.Ax=d;a.x3=c;a.zN=b;}
let AFV=a=>{let b,c,d;b=new QB;c=a.zN;BA();d=new Bt;d.nn=R(64);b.nr=d;b.xi=c;if(a.Ax)Jv(d,0,2048);b.n7=a.x3;return b;}
function SS(){let a=this;C.call(a);a.BM=null;a.BX=null;}
function I8(){let a=this;C.call(a);a.yO=0;a.zh=0;a.yS=null;}
let VF=F();
let BD=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=b.length;if(d<=e){while(d<e){f=d+1|0;b[d]=c;d=f;}return;}g=new Bc;g.m$=1;g.m_=1;D(g);}
let AR8=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bc;f.m$=1;f.m_=1;D(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;}
let ATt=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bc;f.m$=1;f.m_=1;D(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=BS(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;}
let ADe=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;k:{while(true){if(e>=d){e=(-1);break k;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
let AC0=F();
function PT(){let a=this;D$.call(a);a.AW=null;a.AS=0;a.un=null;}
let AUW=(a,b)=>{return;}
let AK_=(a,b)=>{let c,d,e,f,g,h,i,j;if(BJ===null){c=new CP;c.oK=DF;b=new I;b.m8=H(16);c.nV=b;c.oI=H(32);c.oQ=0;CO();c.oO=CW;BJ=c;}b=BJ;c=a.AW;d=new I;d.m8=H(16);G(d,d.m7,B(413));e=d.m7;if(c===null)c=B(2);G(d,e,c);f=new M;g=d.m8;h=g.data;i=d.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);c=b.nV;G(c,c.m7,f);i=c.m7;Bh(c,i,i+1|0);c.m8.data[i]=10;CY(b);return;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let Vj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(I7(G8(B(109),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){bg:{b=a.un;b.y8=b.wA.ng;if(a.AS){e=0;while(true){b=a.un;c=b.wA;f=BS(e,c.ng);if(f>=0)break bg;if(f>=0){g=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,e,10);G(b,b.m7,B(36));e=c.ng;K(b,b.m7,e,10);c=new M;d=b.m8;h=d.data;f=b.m7;P();i=h.length;if(f>=0&&f<=(i-0|0)){c.m9=O(d.data,0,f);g.m$=1;g.m_=1;g.na=c;D(g);}b=new L;Bd(b);D(b);}YK(b,c.np.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(I7(G8(B(107),0),j,0)).data;if
(h.length!=4)break;k=h[0];l=ZN(h[1]);b=h[2];if(b===null){b=new Cj;b.m$=1;b.m_=1;b.na=B(76);D(b);}m=ADO(b,0,b.m9.length,10);n=h[3];FO();o=It;if(k===B(414))i=1;else if(!(B(414) instanceof M))i=0;else{b=B(414);i=k.m9!==b.m9?0:1;}if(i)o=Ih;if(k===B(415))i=1;else if(!(B(415) instanceof M))i=0;else{b=B(415);i=k.m9!==b.m9?0:1;}if(i)o=HQ;if(k===B(416))i=1;else if(!(B(416) instanceof M))i=0;else{b=B(416);i=k.m9!==b.m9?0:1;}if(i)o=HB;if(k===B(253))i=1;else if(!(B(253) instanceof M))i=0;else{b=B(253);i=k.m9!==b.m9?0:1;}if
(i)o=TG;if(o===HB&&!JN.CB)m=Q;g=new Q6;g.yX=l;g.A9=o;g.CT=m;g.AY=n;BN(a.un.Bl,l,l);CT(a.un.wA,g);f=f+1|0;}b=new X;b.m$=1;b.m_=1;b.na=B(417);D(b);}
let AQZ=(a,b,c)=>{return Vj(a,b,c);}
let Ca=F(BH);
let AZP=null;let A2N=null;let AZ_=null;let AZ$=null;let AZR=null;let AZF=null;let AZt=null;let AZ5=null;let AZm=null;let A1H=null;let AJs=()=>{AJs=Ba(Ca);AHc();}
let AHc=()=>{let b,c,d,e,f,g,h,i,j;b=new S8;AJs();b.ni=B(418);b.nf=0;AZP=b;c=new S9;c.ni=B(419);c.nf=1;A2N=c;d=new Tb;d.ni=B(420);d.nf=2;AZ_=d;e=new Tc;e.ni=B(421);e.nf=3;AZ$=e;f=new S_;f.ni=B(422);f.nf=4;AZR=f;g=new Ta;g.ni=B(423);g.nf=5;AZF=g;h=new S5;h.ni=B(424);h.nf=6;AZt=h;i=new S6;i.ni=B(425);i.nf=7;AZ5=i;j=new S4;j.ni=B(426);j.nf=8;AZm=j;A1H=N(Ca,[b,c,d,e,f,g,h,i,j]);}
function F2(){let a=this;Ij.call(a);a.rW=0;a.pP=null;}
let AFf=F(0);
let AIJ=b=>{let c,d;if(b===B(427))c=1;else if(!(B(427) instanceof M))c=0;else{d=B(427);c=b.m9!==d.m9?0:1;}c:{if(!c){if(b===B(428))c=1;else if(!(B(428) instanceof M))c=0;else{d=B(428);c=b.m9!==d.m9?0:1;}if(!c){if(b===B(429))c=1;else if(!(B(429) instanceof M))c=0;else{d=B(429);c=b.m9!==d.m9?0:1;}if(!c){if(b===B(430))c=1;else if(!(B(430) instanceof M))c=0;else{d=B(430);c=b.m9!==d.m9?0:1;}if(!c){if(b===B(431))c=1;else if(!(B(431) instanceof M))c=0;else{d=B(431);c=b.m9!==d.m9?0:1;}if(!c){c=0;break c;}}}}}c=1;}return c;}
let ANF=b=>{let c,d;if(b===B(432))c=1;else if(!(B(432) instanceof M))c=0;else{d=B(432);c=b.m9!==d.m9?0:1;}c:{e:{if(c)break e;if(b===B(433))c=1;else if(!(B(433) instanceof M))c=0;else{d=B(433);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(434))c=1;else if(!(B(434) instanceof M))c=0;else{d=B(434);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(435))c=1;else if(!(B(435) instanceof M))c=0;else{d=B(435);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(436))c=1;else if(!(B(436) instanceof M))c=0;else{d=B(436);c=b.m9!==d.m9?0:1;}if(c)break e;if
(b===B(437))c=1;else if(!(B(437) instanceof M))c=0;else{d=B(437);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(438))c=1;else if(!(B(438) instanceof M))c=0;else{d=B(438);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(439))c=1;else if(!(B(439) instanceof M))c=0;else{d=B(439);c=b.m9!==d.m9?0:1;}if(c)break e;if(b===B(440))c=1;else if(!(B(440) instanceof M))c=0;else{d=B(440);c=b.m9!==d.m9?0:1;}if(!c){c=0;break c;}}c=1;}return c;}
let Se=F(0);
let Xc=F();
let AWG=(a,b,c)=>{a.ib(Bk(b),D6(c,"handleEvent"));}
let ARs=(a,b)=>{return !!a.ic(b);}
let AJa=(a,b,c)=>{a.dO(Bk(b),D6(c,"handleEvent"));}
let AOu=(a,b,c,d)=>{a.id(Bk(b),D6(c,"handleEvent"),d?1:0);}
let AUA=(a,b,c,d)=>{a.ie(Bk(b),D6(c,"handleEvent"),d?1:0);}
function RU(){let a=this;C.call(a);a.yM=null;a.Ag=null;a.wq=null;a.Al=0;a.xr=null;}
let ABt=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.yM;FO();if(e!==HQ&&e!==HB){if(e===Ih){b=window.document.createElement("img");d=B0(Bk(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new I6;d.pO=c;d.zr=e;d.zD=b;}else if(e===It)d=Bk(c.result);}else{e=c.result;b=new Int8Array(e);d=new I6;d.pO=b;d.zr=e;}if(d!==null){I3(a.xr.A1,a.yM,a.Ag,d);CT(a.wq,a.Ag);if(a.wq.ng==a.Al){b=a.xr.AH;d=new NN;d.zd=a;CT(b.vB,d);}}}
let AP7=(a,b)=>{ABt(a,b);}
function D1(){BH.call(this);this.vu=null;}
let Ih=null;let HB=null;let It=null;let HQ=null;let TG=null;let AE2=null;let FO=()=>{FO=Ba(D1);ARJ();}
let ARJ=()=>{let b,c,d,e,f;b=new D1;FO();b.ni=B(441);b.nf=0;b.vu=B(414);Ih=b;c=new D1;c.ni=B(442);c.nf=1;c.vu=B(416);HB=c;d=new D1;d.ni=B(443);d.nf=2;d.vu=B(444);It=d;e=new D1;e.ni=B(445);e.nf=3;e.vu=B(415);HQ=e;f=new D1;f.ni=B(446);f.nf=4;f.vu=B(253);TG=f;AE2=N(D1,[b,c,d,e,f]);}
let LK=F();
let Xd=null;let AIA=null;let ADE=b=>{let c,d,e,f,g,h,i,j,k,l;c=new I;c.m8=H(16);d=ACV();e=0;f=AIA.data;g=f.length;h=0;while(h<g){if(b&f[h]){i=c.m7;if(i>0){Bh(c,i,i+1|0);c.m8.data[i]=32;}j=d.data[e];G(c,c.m7,j);}e=e+1|0;h=h+1|0;}j=new M;d=c.m8;k=d.data;e=c.m7;P();l=k.length;if(e>=0&&e<=(l-0|0)){j.m9=O(d.data,0,e);return j;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let ACV=()=>{if(Xd===null)Xd=N(M,[B(447),B(448),B(449),B(450),B(451),B(452),B(453),B(454),B(455),B(456),B(457),B(458)]);return Xd;}
let U4=()=>{AIA=EB([1,4,2,1024,8,16,128,64,32,256,2048,512]);}
let Mt=F();
let Qt=F(0);
function Im(){let a=this;Mt.call(a);a.qE=null;a.Ec=null;a.vo=0;a.wU=0;a.rU=null;a.zR=null;}
let AHV=a=>{let b,c,d,e,f,g,h;b=new I;b.m8=H(16);c=ADE(Pw(a.vo,a.wU));G(b,b.m7,c);d=b.m7;if(d>0){Bh(b,d,d+1|0);b.m8.data[d]=32;}c=a.qE;if(c.nP===null)c.nP=Bk(c.nA.$meta.name);c=c.nP;G(b,b.m7,c);d=b.m7;Bh(b,d,d+1|0);b.m8.data[d]=40;e=a.rU.s();f=0;while(true){g=e.data;if(f>=g.length)break;if(f>0){h=b.m7;Bh(b,h,h+1|0);b.m8.data[h]=44;}c=g[f];if(c.nP===null)c.nP=Bk(c.nA.$meta.name);c=c.nP;G(b,b.m7,c);f=f+1|0;}d=b.m7;Bh(b,d,d+1|0);g=b.m8;e=g.data;e[d]=41;c=new M;d=b.m7;P();h=e.length;if(d>=0&&d<=(h-0|0)){c.m9=O(g.data,
0,d);return c;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ADi=(a,b)=>{let c,d,e,f,g;if(a.vo&1){c=new Mh;c.m$=1;c.m_=1;D(c);}if(a.zR===null){c=new KF;c.m$=1;c.m_=1;D(c);}d=b.data;e=d.length;if(e!=a.rU.data.length){c=new Bc;c.m$=1;c.m_=1;D(c);}f=0;while(f<e){if(!(a.rU.data[f].nA.$meta.primitive?1:0)&&d[f]!==null){c=a.rU.data[f];g=d[f];c=c.nA;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&RI(g.constructor,c)?1:0)){c=new Bc;c.m$=1;c.m_=1;D(c);}}if((a.rU.data[f].nA.$meta.primitive?1:0)&&d[f]===null){c=new Bc;c.m$=1;c.m_=1;D(c);}f=f+1|0;}c=b.data;g=
new(a.qE.nA);a.zR.call(g,c);return g;}
let U=F(L);
function Tj(){let a=this;Bs.call(a);a.AJ=null;a.E0=null;}
let ALq=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.pl^CH(a.AJ,c):0;}
function Ti(){let a=this;Bs.call(a);a.CD=null;a.CU=null;a.EO=null;}
let AGC=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.pl^CH(a.CD,c):0;return a.CU.hI(b)&&!d?1:0;}
function Ow(){let a=this;Bs.call(a);a.wI=null;a.Du=null;}
let AO9=(a,b)=>{return a.nK^CH(a.wI,b);}
let AMC=a=>{let b,c,d,e,f,g,h,i,j,k;b=new I;b.m8=H(16);c=IY(a.wI,0);while(c>=0){d=(FT(c)).data;e=0;f=d.length;g=b.m7;Bh(b,g,g+f|0);f=f+e|0;while(e<f){h=b.m8.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.m7;Bh(b,g,g+1|0);b.m8.data[g]=124;c=IY(a.wI,c+1|0);}e=b.m7;if(e>0)Tn(b,e-1|0);k=new M;d=b.m8;h=d.data;e=b.m7;P();g=h.length;if(e>=0&&e<=(g-0|0)){k.m9=O(d.data,0,e);return k;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function OC(){let a=this;Bs.call(a);a.BF=null;a.Ez=null;}
let ATy=(a,b)=>{return a.BF.hI(b);}
function OA(){let a=this;Bs.call(a);a.xT=0;a.AZ=null;a.yU=null;}
let AUf=(a,b)=>{return !(a.xT^CH(a.yU.nu,b))&&!(a.xT^a.yU.qT^a.AZ.hI(b))?0:1;}
function OB(){let a=this;Bs.call(a);a.x1=0;a.CK=null;a.zy=null;}
let APS=(a,b)=>{return !(a.x1^CH(a.zy.nu,b))&&!(a.x1^a.zy.qT^a.CK.hI(b))?1:0;}
function OF(){let a=this;Bs.call(a);a.C7=0;a.CN=null;a.CH=null;a.DO=null;}
let AKZ=(a,b)=>{return a.C7^(!a.CN.hI(b)&&!a.CH.hI(b)?0:1);}
function OG(){let a=this;Bs.call(a);a.BI=0;a.BD=null;a.Bq=null;a.Fi=null;}
let AFK=(a,b)=>{return a.BI^(!a.BD.hI(b)&&!a.Bq.hI(b)?0:1)?0:1;}
function OD(){let a=this;Bs.call(a);a.Bn=null;a.Fn=null;}
let AMO=(a,b)=>{let c,d;c=a.Bn;d=c.n8;return d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);}
function OE(){let a=this;Bs.call(a);a.CS=null;a.D4=null;}
let APW=(a,b)=>{let c,d;c=a.CS;d=c.n8;return (d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b))?0:1;}
function OH(){let a=this;Bs.call(a);a.BS=null;a.BE=0;a.Cq=null;}
let AVV=(a,b)=>{let c,d,e;c=a.BS;d=c.n8;e=d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);return !e&&!(a.BE^CH(a.Cq.nu,b))?0:1;}
function OI(){let a=this;Bs.call(a);a.B8=null;a.Cc=0;a.B0=null;}
let AKi=(a,b)=>{let c,d,e;c=a.B8;d=c.n8;e=d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);return !e&&!(a.Cc^CH(a.B0.nu,b))?1:0;}
function Ov(){let a=this;Bs.call(a);a.Co=0;a.CJ=null;a.CY=null;a.Dy=null;}
let AYu=(a,b)=>{let c,d;b:{if(!(a.Co^a.CJ.hI(b))){c=a.CY;d=c.n8;if(!(d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b))){b=0;break b;}}b=1;}return b;}
function O1(){let a=this;Bs.call(a);a.CW=0;a.Ar=null;a.Ay=null;a.D0=null;}
let AMT=(a,b)=>{let c,d;b:{if(!(a.CW^a.Ar.hI(b))){c=a.Ay;d=c.n8;if(!(d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b))){b=1;break b;}}b=0;}return b;}
function Ot(){let a=this;Bs.call(a);a.Be=null;a.D6=null;}
let AKf=(a,b)=>{let c,d;c=a.Be;d=c.n8;return d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);}
function Ou(){let a=this;Bs.call(a);a.Bf=null;a.Fg=null;}
let AL_=(a,b)=>{let c,d;c=a.Bf;d=c.n8;return (d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b))?0:1;}
function Oz(){let a=this;Bs.call(a);a.C6=null;a.B5=0;a.Dk=null;}
let AOd=(a,b)=>{let c,d,e;c=a.C6;d=c.n8;e=d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);return e&&a.B5^CH(a.Dk.nu,b)?1:0;}
function Os(){let a=this;Bs.call(a);a.Ci=null;a.BJ=0;a.B4=null;}
let AVu=(a,b)=>{let c,d,e;c=a.Ci;d=c.n8;e=d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b);return e&&a.BJ^CH(a.B4.nu,b)?0:1;}
function Ox(){let a=this;Bs.call(a);a.Ct=0;a.AI=null;a.BH=null;a.DN=null;}
let AIF=(a,b)=>{let c,d;b:{if(a.Ct^a.AI.hI(b)){c=a.BH;d=c.n8;if(d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b)){b=1;break b;}}b=0;}return b;}
function Oy(){let a=this;Bs.call(a);a.Cf=0;a.Ao=null;a.Cn=null;a.Ea=null;}
let ASH=(a,b)=>{let c,d;b:{if(a.Cf^a.Ao.hI(b)){c=a.Cn;d=c.n8;if(d!==null?c.nK^d.hI(b):c.nK^CH(c.nu,b)){b=0;break b;}}b=1;}return b;}
function Jf(){let a=this;C.call(a);a.rF=null;a.zx=null;a.o7=null;a.pF=0;}
function EH(){let a=this;C.call(a);a.Fk=null;a.rj=Q;a.rR=Q;a.pW=null;a.A$=null;a.q7=null;a.pV=0;a.rm=null;}
let QN=null;let B6=null;let Dt=0;let Ga=0;let ANZ=null;let CV=()=>{CV=Ba(EH);AH$();}
let Z1=a=>{let b,c,$$je;b:{a:{d:{k:{try{CV();Ga=Ga+1|0;ACc(a);a.cV();}catch($$e){$$je=BG($$e);if($$je instanceof DV){b=$$je;break k;}else{b=$$je;break d;}}b=a.pW;FB(b);n:{try{M$(b);DR(b);break n;}catch($$e){$$je=BG($$e);c=$$je;}DR(b);D(c);}a.pV=0;Ga=Ga-1|0;b=QN;if(B6!==b)B6=b;B6.rR=FE();break b;}try{Vp(Yr(a),a,b);break a;}catch($$e){$$je=BG($$e);b=$$je;}}c=a.pW;FB(c);o:{try{M$(c);DR(c);break o;}catch($$e){$$je=BG($$e);b=$$je;}DR(c);D(b);}a.pV=0;Ga=Ga-1|0;c=QN;if(B6!==c)B6=c;B6.rR=FE();D(b);}b=a.pW;FB(b);r:{try
{M$(b);DR(b);break r;}catch($$e){$$je=BG($$e);c=$$je;}DR(b);D(c);}a.pV=0;Ga=Ga-1|0;b=QN;if(B6!==b)B6=b;B6.rR=FE();}}
let ACc=b=>{CV();if(B6!==b)B6=b;B6.rR=FE();}
let AFM=()=>{CV();return B6;}
let Jm=b=>{let $p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:CV();$p=1;case 1:To(b);if(G_()){break _;}return;default:DB();}}BY().s(b,$p);}
let W5=(b,c)=>{let d,e;CV();d=B6;e=new On;e.Dl=d;e.CG=c;e.E1=SV(e,CN(b,J(2147483647))?2147483647:T(b));d.A$=e;}
let Yr=a=>{let b;b=a.Fk;if(b!==null)return b;CV();return ANZ;}
let AH$=()=>{let b,c,d;b=new EH;CV();c=null;b.pW=new C;b.pV=1;b.q7=B(459);b.rm=c;d=Dt;Dt=d+1|0;b.rj=J(d);QN=b;B6=b;Dt=1;Ga=1;ANZ=new QJ;}
let To=b=>{let thread=BY();let javaThread=AF_();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Nt(javaThread);thread.resume();};callback.iq=e=>{thread.attribute=AU9(e);Nt(javaThread);thread.resume();};callback=Z7(callback);thread.suspend(()=>{try {W5(b,callback);;}catch(Uf){callback.iq(Uf);}});return null;}
let BT=F(BL);
let A23=()=>{let a=new BT();AUz(a);return a;}
let A1a=a=>{let b=new BT();AR7(b,a);return b;}
let AUz=a=>{a.m$=1;a.m_=1;}
let AR7=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let Jq=F(BL);
function ACJ(){let a=this;C.call(a);a.oj=null;a.n$=null;a.qI=null;a.rf=null;a.qD=0;a.pN=0;a.pp=0;a.nN=0;a.qV=0;a.w9=0;a.sT=0;a.pC=0;a.EV=0;a.t$=0;a.t7=0;}
let A4i=(a,b,c,d,e,f)=>{let g=new ACJ();AQ1(g,a,b,c,d,e,f);return g;}
let AQ1=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.t$=(-1);h=e+1|0;a.qD=h;i=R(h*2|0);a.oj=i;j=R(g);k=j.data;a.n$=j;e=0;g=k.length;l=BS(e,g);if(l>0){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.qI=R(f);i=i.data;h=0;m=i.length;e=BS(h,m);if(e>0){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.pN=0;a.t7=2;f=0;if(e>0){b=new Bc;b.m$=1;b.m_=1;D(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.rf=b;if(c
>=0){a.pp=c;a.nN=d;}a.qV=a.pp;}
let ACN=F();
let ZV=b=>{bh:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break bh;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break bh;}return 67;}return 0;}
let MN=b=>{if(!b)return 0;if(b==2)return 1;if(b!=1)return 0;return 2;}
let XQ=F();
let Gk=()=>{return Bb(performance.now()*1000000.0);}
let UT=F();
let G4=F(0);
function T8(){C.call(this);this.Bs=null;}
let AVX=a=>{AUu(a.Bs);}
let S8=F(Ca);
let S9=F(Ca);
let Tb=F(Ca);
let Tc=F(Ca);
let S_=F(Ca);
let Ta=F(Ca);
let S5=F(Ca);
let S6=F(Ca);
let S4=F(Ca);
let NY=F(0);
let QJ=F();
let Vp=(a,b,c)=>{let d;if(ES===null){d=new CP;d.oK=Jo;b=new I;b.m8=H(16);d.nV=b;d.oI=H(32);d.oQ=0;CO();d.oO=CW;ES=d;}Kw(c,ES);}
let X3=F();
let Qs=F(0);
function Qe(){C.call(this);this.tk=null;}
let Z7=b=>{let c;c=new Qe;c.tk=b;return c;}
let AOz=(a,b)=>{a.tk.e(b);}
let AXi=(a,b)=>{a.tk.iq(b);}
function Rg(){let a=this;C.call(a);a.A7=null;a.A8=null;a.A5=0;a.A6=null;}
let NT=F(Ik);
let ALX=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.nN;b:{while(true){if(b>f){b=e;break b;}g=a.oh;h=d.oj.data;i=g*2|0;j=h[i];h[i]=b;e=a.pM.he(b,c,d);if(e>=0)break;i=a.oh;d.oj.data[i*2|0]=j;b=b+1|0;}}return b;}
let AYf=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;b:{while(true){if(c<b){c=f;break b;}g=a.oh;h=e.oj.data;i=g*2|0;j=h[i];h[i]=c;f=a.pM.he(c,d,e);if(f>=0)break;i=a.oh;e.oj.data[i*2|0]=j;c=c+(-1)|0;}}return c;}
let AJV=a=>{return null;}
function Vq(){let a=this;C.call(a);a.Np=0;a.Nu=0;a.IP=0;a.KI=0;a.Gy=null;}
function HG(){let a=this;EH.call(a);a.sq=0;a.qF=null;a.q0=null;a.qM=null;}
let AR9=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Sz;c.rJ=a;c.tW=b;c=B$(c,"handleEvent");b.onreadystatechange=c;c=a.qM;d=a.q0;e=new I4;e.zX=c;e.ws=d;c=B$(e,"handleEvent");b.onprogress=c;d=a.qF;f=a.sq;b.open("GET",B0(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();}
let NM=F();
let ASY=null;let A2R=()=>{A2R=Ba(NM);AT7();}
let AT7=()=>{let b,c;Jp();b=R((AUH.s()).data.length);c=b.data;ASY=b;c[AEF.nf]=1;c[QX.nf]=2;}
let ADQ=F();
let APf=(a,b,c)=>{a.fI(Bk(b),D6(c,"handleEvent"));}
let AQh=(a,b,c)=>{a.fJ(Bk(b),D6(c,"handleEvent"));}
let AGl=(a,b,c,d)=>{a.fK(Bk(b),D6(c,"handleEvent"),d?1:0);}
let AGw=(a,b)=>{return !!a.fL(b);}
let AMP=(a,b,c,d)=>{a.fN(Bk(b),D6(c,"handleEvent"),d?1:0);}
let HJ=F(0);
function NP(){let a=this;C.call(a);a.sL=null;a.y4=0;a.w2=null;a.zO=null;a.t6=null;}
let T3=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.sL.readyState==4){if(a.sL.status==200){if(a.t6.pL){if(BJ===null){c=new CP;c.oK=DF;b=new I;b.m8=H(16);c.nV=b;c.oI=H(32);c.oQ=0;CO();c.oO=CW;BJ=c;}d=BJ;b=a.w2;c=new I;c.m8=H(16);G(c,c.m7,B(460));e=c.m7;if(b===null)b=B(2);G(c,e,b);f=new M;g=c.m8;h=g.data;i=c.m7;P();j=h.length;if(i>=0&&i<=(j-0|
0)){f.m9=O(g.data,0,i);b=d.nV;G(b,b.m7,f);i=b.m7;Bh(b,i,i+1|0);b.m8.data[i]=10;CY(d);}else{b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}}c=a.sL.response;Ju();d=Jc.qj.document;f=d.createElement("script");b=d.createTextNode(c);f.appendChild(b);d.body.appendChild(f);Bk(a.sL.responseText);}else if(a.sL.status!=404&&a.sL.status!=403){try{k=J(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}Nf(a.t6,a.y4,a.w2,a.zO);}b=a.t6;b.n6=b.n6-1|0;}return;case 1:b:{try{Jm(k);if(G_()){break _;}break b;}
catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}}Nf(a.t6,a.y4,a.w2,a.zO);b=a.t6;b.n6=b.n6-1|0;return;default:DB();}}BY().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
let Zk=(a,b)=>{let $p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:T3(a,b);if(G_()){break _;}return;default:DB();}}BY().s(a,b,$p);}
let Rl=F();
let AGM=0;function H2(){let a=this;C.call(a);a.ua=null;a.w$=0;a.uz=0;a.qb=0;}
let Qx=a=>{let b;if(a.qb)return a.uz>=a.ua.ng?0:1;b=new X;b.m$=1;b.m_=1;b.na=B(461);D(b);}
let O0=a=>{let b,c,d,e,f,g,h;b=a.uz;c=a.ua;if(b<c.ng){if(a.qb){d=c.np.data;a.uz=b+1|0;return d[b];}c=new X;c.m$=1;c.m_=1;c.na=B(461);D(c);}c=new Ni;P();e=new I;e.m8=H(16);K(e,e.m7,b,10);f=new M;d=e.m8;g=d.data;b=e.m7;h=g.length;if(b>=0&&b<=(h-0|0)){f.m9=O(d.data,0,b);c.m$=1;c.m_=1;c.na=f;D(c);}c=new L;Bd(c);D(c);}
function Oo(){let a=this;C.call(a);a.y2=null;a.zY=0;a.zp=null;a.zq=null;}
let YL=a=>{let b,c,d;if(AGM){b=new H2;c=a.y2;d=a.zY;b.qb=1;b.ua=c;b.w$=d;return b;}if(a.zp===null){b=new H2;c=a.y2;d=a.zY;b.qb=1;b.ua=c;b.w$=d;a.zp=b;b=new H2;b.qb=1;b.ua=c;b.w$=d;a.zq=b;}b=a.zp;if(b.qb){c=a.zq;c.uz=0;c.qb=1;b.qb=0;return c;}b.uz=0;b.qb=1;a.zq.qb=0;return b;}
function I6(){let a=this;C.call(a);a.zr=null;a.pO=null;a.zD=null;}
let ACL=a=>{let b,c,d,e,f,g,h,i,j;b=a.pO.length;c=new I;c.m8=H(((b*4|0)/3|0)+2|0);d=0;a:{d:{k:{n:{c:{while(true){if(d>=b){e=new M;f=c.m8;g=f.data;h=c.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){e.m9=O(f.data,0,h);return e;}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}j=b-d|0;if(j<3){if(j>=2){j=((a.pO[d]&255)<<16)+((a.pO[d+1|0]&255)<<8)|0;Eb(c,Dc(B(462),j>>18&63));Eb(c,Dc(B(462),j>>12&63));Eb(c,Dc(B(462),j>>6&63));BO(c,B(463));}else{i=(a.pO[d]&255)<<16;h=i>>18&63;if(h<0)break a;if(h>=B(462).m9.length)break a;h=B(462).m9.charCodeAt(h);j
=c.m7;Bh(c,j,j+1|0);c.m8.data[j]=h;h=i>>12&63;if(h<0)break;if(h>=B(462).m9.length)break;Qy(c,B(462).m9.charCodeAt(h));Mk(c,B(464));}}else{j=(((a.pO[d]&255)<<16)+((a.pO[d+1|0]&255)<<8)|0)+(a.pO[d+2|0]&255)|0;h=j>>18&63;if(h<0)break d;if(h>=B(462).m9.length)break d;i=B(462).m9.charCodeAt(h);h=c.m7;Bh(c,h,h+1|0);c.m8.data[h]=i;h=j>>12&63;if(h<0)break k;if(h>=B(462).m9.length)break k;i=B(462).m9.charCodeAt(h);h=c.m7;Bh(c,h,h+1|0);c.m8.data[h]=i;h=j>>6&63;if(h<0)break n;if(h>=B(462).m9.length)break n;i=B(462).m9.charCodeAt(h);h
=c.m7;Bh(c,h,h+1|0);c.m8.data[h]=i;j=j&63;if(j<0)break c;if(j>=B(462).m9.length)break c;h=B(462).m9.charCodeAt(j);j=c.m7;Bh(c,j,j+1|0);c.m8.data[j]=h;}d=d+3|0;}e=new U;Bd(e);D(e);}e=new U;e.m$=1;e.m_=1;D(e);}e=new U;e.m$=1;e.m_=1;D(e);}e=new U;e.m$=1;e.m_=1;D(e);}e=new U;e.m$=1;e.m_=1;D(e);}e=new U;e.m$=1;e.m_=1;D(e);}
function NN(){C.call(this);this.zd=null;}
let AGe=a=>{let b,c,d,e,f,g,h;b=a.zd.wq;c=b.np.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ce;d.nA=c;e=d;c.classObject=e;}}f=d.nA.$meta.item;if(f===null)c=null;else{c=f.classObject;if(c===null){c=new Ce;c.nA=f;d=c;f.classObject=d;}}g=b.ng;if(c===null){b=new C0;b.m$=1;b.m_=1;Bj(b);D(b);}if(c===Bw(Cc)){b=new Bc;b.m$=1;b.m_=1;Bj(b);D(b);}if(g<0){b=new DS;b.m$=1;b.m_=1;Bj(b);D(b);}d=Ex(c.nA,g);EZ(b.np,0,d,0,b.ng);h=d;a.zd.xr.At.AX.it(h);}
let T$=F(0);
let JS=F(0);
let Sd=F(0);
let If=F();
function KX(){If.call(this);this.oK=null;}
function CP(){let a=this;KX.call(a);a.oQ=0;a.tP=0;a.nV=null;a.oI=null;a.oO=null;}
let Ol=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,$$je;e=b.data;d=d-c|0;f=new Jw;g=e.length;h=c+d|0;f.no=(-1);f.nt=g;f.nb=g;f.nc=c;f.nb=h;f.s$=0;f.ui=0;f.sS=b;i=1024;if(d<i)i=d;if(16>i)i=16;e=BI(i);d=e.data.length;if(d>=0&&d<=(d-0|0)){j=new Cx;h=0+d|0;j.no=(-1);j.nt=d;j.nb=d;Cd();j.nT=Ch;j.n3=0;j.nQ=e;j.nc=0;j.nb=h;j.oz=0;j.n9=0;k=AEN(a.oO);Ev();l=E9;if(l===null){l=new Bc;l.m$=1;l.m_=1;l.na=B(465);D(l);}k.s6=l;k.sQ=l;while(true){g=(K5(k,f,j,1)).nZ!=1?0:1;i=j.nc;l=a.oK;if(l===null)a.tP=1;if(a.tP?0:1)u:{try{l.iv(e,0,i);break u;}
catch($$e){$$je=BG($$e);if($$je instanceof Fv){}else{throw $$e;}}a.tP=1;}j.nc=0;j.nb=j.nt;j.no=(-1);if(!g)break;}while(true){g=(NH(k,j)).nZ!=1?0:1;i=j.nc;l=a.oK;if(l===null)a.tP=1;if(a.tP?0:1)bi:{try{l.iv(e,0,i);break bi;}catch($$e){$$je=BG($$e);if($$je instanceof Fv){}else{throw $$e;}}a.tP=1;}j.nc=0;j.nb=j.nt;j.no=(-1);if(!g)break;}return;}k=new L;k.m$=1;k.m_=1;D(k);}
let Ld=(a,b)=>{let c,d;c=a.nV;G(c,c.m7,b);d=c.m7;Bh(c,d,d+1|0);c.m8.data[d]=10;CY(a);}
let CY=a=>{let b,c,d,e,f,g,h,i,j;b=a.nV;c=b.m7;d=a.oI;if(c>d.data.length)d=H(c);e=0;f=0;if(e>c){b=new L;b.m$=1;b.m_=1;b.na=B(466);D(b);}while(e<c){g=d.data;h=f+1|0;i=b.m8.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Ol(a,d,0,c);a.nV.m7=0;}
function HZ(){If.call(this);this.xf=null;}
let JZ=F(HZ);
let DF=null;let AOk=(a,b,c,d)=>{let e;e=0;while(e<d){A2T(b.data[e+c|0]&255);e=e+1|0;}}
let AS1=()=>{let b;b=new JZ;b.xf=BI(1);DF=b;}
function I4(){let a=this;C.call(a);a.ws=null;a.zX=null;}
let ARv=(a,b)=>{a.ws.ix(b.loaded);}
function ET(){let a=this;C.call(a);a.rs=null;a.tH=null;}
let Ep=b=>{let c,d,e;if(b.m9.length?0:1){c=new IF;c.m$=1;c.m_=1;c.yf=b;D(c);}if(0>=b.m9.length){b=new U;b.m$=1;b.m_=1;D(b);}if(!ACO(b.m9.charCodeAt(0))){c=new IF;c.m$=1;c.m_=1;c.yf=b;D(c);}d=1;o:{while(d<b.m9.length){if(d<0)break o;if(d>=b.m9.length)break o;r:{e=b.m9.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(ACO(e))break r;else{c=new IF;c.m$=1;c.m_=1;c.yf=b;D(c);}}}d=d+1|0;}return;}b=new U;b.m$=1;b.m_=1;D(b);}
let ACO=b=>{b:{a:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}b=1;break b;}b=0;}return b;}
let AGF=b=>{let c,d,e,f,g,h,i;if(b===null){b=new Bc;b.m$=1;b.m_=1;b.na=B(467);D(b);}Ep(b);A1M();c=AFg;d=b.m9.toUpperCase();e=d===b.m9?b:ABZ(d);k:{if(!e.n_){f=0;while(true){if(f>=e.m9.length)break k;e.n_=(31*e.n_|0)+e.m9.charCodeAt(f)|0;f=f+1|0;}}}g=e.n_;h=c.pj.data;c=h[g&(h.length-1|0)];while(c!==null){if(c.rW==g){e:{d=c.pG;if(e!==d){if(e===d)i=1;else if(!(d instanceof M))i=0;else{d=d;i=e.m9!==d.m9?0:1;}if(!i){i=0;break e;}}i=1;}if(i)break;}c=c.pP;}c=c===null?null:c.qg;if(c!==null)return c;c=new LM;c.m$=1;c.m_
=1;c.Ev=b;D(c);}
let ARp=a=>{return a.rs;}
let AWW=(a,b)=>{let c,d,$$je;b:{try{c=a.c6();Ev();b=Pv(TP(QW(c,E9),E9),b);}catch($$e){$$je=BG($$e);if($$je instanceof GQ){d=$$je;break b;}else{throw $$e;}}return b;}c=new M4;c.m$=1;c.m_=1;c.na=B(75);c.oY=d;D(c);}
let Ne=F(ET);
let CW=null;let CO=()=>{CO=Ba(Ne);ALm();}
let AEN=a=>{let b,c,d,e,f;b=new Pi;c=BI(1);d=c.data;d[0]=63;Ev();e=Ge;b.s6=e;b.sQ=e;f=d.length;if(f&&f>=b.rp){b.wi=a;b.uY=c.s();b.vp=2.0;b.rp=4.0;b.uP=H(512);b.uC=BI(512);return b;}e=new Bc;Kr(e,B(468));D(e);}
let ALm=()=>{let b,c,d,e,f;b=new Ne;CO();c=Bo(M,0);d=c.data;Ep(B(118));e=d.length;f=0;while(f<e){Ep(d[f]);f=f+1|0;}b.rs=B(118);b.tH=c.s();CW=b;}
function IF(){Bc.call(this);this.yf=null;}
let O8=F(0);
function MP(){let a=this;C.call(a);a.z5=null;a.uR=null;a.qv=0;a.v6=null;a.De=0.0;a.AB=0.0;a.rq=0;a.Cy=null;a.xq=null;a.xA=null;a.zI=0;a.Cl=0;a.A_=0;a.Bg=0;a.Am=0;a.tq=null;a.uo=null;a.DC=0;a.EC=null;a.E2=0.0;a.wH=0;a.yT=0;a.zZ=0;}
let AXt=null;let ADd=()=>{ADd=Ba(MP);AQx();}
let A7k=(a,b)=>{let c=new MP();OT(c,a,b);return c;}
let OT=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;ADd();a.qv=0;a.v6=null;a.De=0.0;a.AB=0.0;a.rq=0;a.Cy=FK();a.xq=FK();a.xA=FK();a.zI=0;a.Cl=770;a.A_=771;a.Bg=770;a.Am=771;a.uo=null;d=new Br;Fc();d.ox=1.0;d.ow=1.0;d.ov=1.0;d.ou=1.0;DX(d);a.EC=d;a.E2=ABr;a.wH=0;a.yT=0;a.zZ=0;if(b>8191){c=new Bc;d=new I;d.m8=H(16);G(d,d.m7,B(469));K(d,d.m7,b,10);e=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){e.m9=O(f.data,0,h);c.m$=1;c.m_=1;c.na=e;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}if(GE===null)j=AXt;else{P3();j
=Y4;}k=new JO;l=b*4|0;m=b*6|0;g=Bo(Eq,3);f=g.data;d=new Eq;d.qK=1;d.pf=2;d.pA=5126;d.pE=0;d.pv=B(470);d.qU=0;d.r3=EM(1);f[0]=d;d=new Eq;d.qK=4;d.pf=4;d.pA=5121;d.pE=1;d.pv=B(471);d.qU=0;d.r3=EM(4);f[1]=d;d=new Eq;d.qK=16;d.pf=2;d.pA=5126;d.pE=0;d.pv=B(472);d.qU=0;d.r3=EM(16);f[2]=d;TC(k,j,0,l,m,AMV(g));a.z5=k;AAK(a.xq,0.0,0.0,Bi.nI.width,Bi.nI.height);a.uR=Cq(b*20|0);f=Lo(m);g=f.data;i=0;n=0;while(n<m){g[n]=i;g[n+1|0]=(i+1|0)<<16>>16;b=n+2|0;h=(i+2|0)<<16>>16;g[b]=h;g[n+3|0]=h;g[n+4|0]=(i+3|0)<<16>>16;g[n+5
|0]=i;n=n+6|0;i=(i+4|0)<<16>>16;}Wn(a.z5,f);if(c!==null)a.tq=c;else{a.tq=ACa();a.DC=1;}}
let ACa=()=>{let b,c,d,e,f,g,h,i;ADd();b=Ds(B(473),B(474));if(b.nU)return b;c=new Bc;d=new I;d.m8=H(16);G(d,d.m7,B(475));if(!b.nU)e=b.nS;else{e=Bm.iG(b.oe);b.nS=e;}G(d,d.m7,e);b=new M;f=d.m8;g=f.data;h=d.m7;P();i=g.length;if(h>=0&&h<=(i-0|0)){b.m9=O(f.data,0,h);c.m$=1;c.m_=1;c.na=b;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let Dh=a=>{let b,c;if(a.rq){b=new BT;b.m$=1;b.m_=1;b.na=B(476);D(b);}a.wH=0;Cn.iH(0);c=a.uo;if(c!==null)c.iI();else{c=a.tq;b=Bm;if(c.nW){CJ(c,c.oF,c.oJ);c.nW=0;}b.iK(c.oe);}Po(a);a.rq=1;}
let Dl=a=>{let b,c;if(!a.rq){b=new BT;b.m$=1;b.m_=1;b.na=B(477);D(b);}if(a.qv>0)Ig(a);a.v6=null;a.rq=0;c=Cn;c.iH(1);if(a.zI?0:1)c.iN(3042);}
let Zy=(a,b,c,d,e)=>{let f,g;if(!a.rq){b=new BT;b.m$=1;b.m_=1;b.na=B(478);D(b);}f=a.uR.data.length;if(b!==a.v6){Ig(a);a.v6=b;b=b.sJ;a.De=1.0/b.rK;a.AB=1.0/b.rz;g=f;}else{g=f-a.qv|0;if(!g){Ig(a);g=f;}}if(g>=e)g=e;Ci(c,d,a.uR,a.qv,g);a.qv=a.qv+g|0;e=e-g|0;while(e>0){d=d+g|0;Ig(a);g=f>=e?e:f;Ci(c,d,a.uR,0,g);a.qv=a.qv+g|0;e=e-g|0;}}
let Ig=a=>{let b,c,d,e,f,g;b=a.qv;if(!b)return;a.wH=a.wH+1|0;a.yT=a.yT+1|0;c=b/20|0;if(c>a.zZ)a.zZ=c;b=c*6|0;d=a.v6;Cn.cr(d.ry,d.y1);d=a.z5;e=a.uR;f=a.qv;d.pR.iO(e,0,f);g=d.o9.iP(1);B7(g,0);CQ(g,b);if(a.zI)Cn.iN(3042);else{Cn.iQ(3042);c=a.Cl;if(c!=(-1))Cn.iR(c,a.A_,a.Bg,a.Am);}g=a.uo;if(g===null)g=a.tq;Re(d,g,4,0,b,d.wv);a.qv=0;}
let Dg=(a,b)=>{if(a.rq)Ig(a);G3(a.xq,b.oZ);if(a.rq)Po(a);}
let Po=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Ri(G3(a.xA,a.xq.oZ),a.Cy);b=a.uo;if(b!==null){b.iU(B(479),a.xA);a.uo.iV(B(480),0);}else{b=a.tq;c=a.xA;T_();d=JL(b,B(479),Mj);e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}f=c.oZ;b=e.pI;g=e.qc;if(!g)b=!b.nF?null:b.nD;else{h=b.nB;i=T(Y(V(J(g),E(2135587861, 2654435769)),b.nG));e:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break e;}if(j==g)break;i=(i+1|0)&b.nE;}}b=i<0?null:b.nC.data[i];}b=b;if(!d)b=!b.nF?null:b.nD;else{h=b.nB;j=T(Y(V(J(d),E(2135587861, 2654435769)),b.nG));y:{while
(true){i=h.data[j];if(!i){j= -(j+1|0)|0;break y;}if(i==d)break;j=(j+1|0)&b.nE;}}b=j<0?null:b.nC.data[j];}BE();k=b===null?null:b.nJ;b=e.nd;e="uniformMatrix4fv";c=!!0;if(f===null)l=null;else{f=f.data;m=f.length;l=new Array(m);j=0;while(j<m){n=f[j];j;l[j]=n;j=j+1|0;}}b[e](k,c,l);b=a.tq;c=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}c.iX(JL(b,B(480),Mj),0);}}
let AQx=()=>{P3();AXt=X6;}
let LJ=F(0);
let BW=F();
let AMv=a=>{return;}
let ALN=a=>{return;}
let AMy=a=>{return;}
function P9(){let a=this;BW.call(a);a.yk=null;a.uQ=null;a.qh=null;a.tb=null;a.sj=Q;a.Az=null;a.wx=null;a.uL=null;}
let AXW=a=>{let b,c,d,e,f,g,h,i,j,k;a.Az=a.uL.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.yk=b;a.uQ=a.uL.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.wx=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.qh=b;g=a.tb.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.sj=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let AVf=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.uL;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.uL;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.wx);Df(d);if(BB(Bx,29)){BD(a.tb,Q);a.sj=Q;}if(BB(Bx,30)){BD(a.tb,Q);a.sj=Q;}if(BB(Bx,31)){BD(a.tb,Q);a.sj=Q;}a.sj=Z(a.sj,J(1));e=0;while(e<524288)
{h=KY(a.yk)*512.0|0;if(h>=0&&h<512){c=a.tb.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qh,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qh,i);g=a.qh;b=f;Bv(g,b,0.0,0.0);Bu(a.qh,i);Bv(a.qh,b,0.0625*BV(a.tb.data[f])/BV(a.sj),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qh,(-6.221923240859403E37));g=a.qh;i=j;Bv(g,0.0,i,0.0);Bu(a.qh,(-6.221923240859403E37));Bv(a.qh,10.0,i,0.0);j=j+32|0;}Dd(a.qh);Dg(a.uQ,d.nY);Dh(a.uQ);Db(a.Az,a.uQ,Dv(B(481),N(C,[Hw(a.yk),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.uQ);}
let AQP=(a,b,c)=>{let d,e,f;d=a.wx;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.wx,1);}
function QO(){let a=this;BW.call(a);a.y_=null;a.uA=null;a.qu=null;a.sK=null;a.rC=Q;a.Dh=null;a.xI=null;a.vX=null;}
let AVL=a=>{let b,c,d,e,f,g,h,i,j,k;a.Dh=a.vX.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.y_=b;a.uA=a.vX.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.xI=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.qu=b;j=a.sK.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.rC=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let AGN=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vX;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vX;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xI);Df(d);if(BB(Bx,29)){BD(a.sK,Q);a.rC=Q;}if(BB(Bx,30)){BD(a.sK,Q);a.rC=Q;}if(BB(Bx,31)){BD(a.sK,Q);a.rC=Q;}a.rC=Z(a.rC,J(1));e=0;while(e<524288)
{h=KY(a.y_)*512.0|0;if(h>=0&&h<512){c=a.sK.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qu,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qu,i);g=a.qu;b=f;Bv(g,b,0.0,0.0);Bu(a.qu,i);Bv(a.qu,b,0.0625*BV(a.sK.data[f])/BV(a.rC),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qu,(-6.221923240859403E37));g=a.qu;i=j;Bv(g,0.0,i,0.0);Bu(a.qu,(-6.221923240859403E37));Bv(a.qu,10.0,i,0.0);j=j+32|0;}Dd(a.qu);Dg(a.uA,d.nY);Dh(a.uA);Db(a.Dh,a.uA,Dv(B(481),N(C,[GV(a.y_),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.uA);}
let AI6=(a,b,c)=>{let d,e,f;d=a.xI;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xI,1);}
function PB(){let a=this;BW.call(a);a.z_=null;a.uq=null;a.qn=null;a.sP=null;a.sc=Q;a.Au=null;a.xj=null;a.u3=null;}
let AHw=a=>{let b,c,d,e,f,g,h,i,j;a.Au=a.u3.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.z_=b;a.uq=a.u3.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.xj=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qn=b;f=a.sP.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.sc=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let ARQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.u3;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.u3;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xj);Df(d);if(BB(Bx,29)){BD(a.sP,Q);a.sc=Q;}if(BB(Bx,30)){BD(a.sP,Q);a.sc=Q;}if(BB(Bx,31)){BD(a.sP,Q);a.sc=Q;}a.sc=Z(a.sc,J(1));e=0;while(e<524288)
{h=KY(a.z_)*512.0|0;if(h>=0&&h<512){c=a.sP.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qn,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qn,i);g=a.qn;b=f;Bv(g,b,0.0,0.0);Bu(a.qn,i);Bv(a.qn,b,0.0625*BV(a.sP.data[f])/BV(a.sc),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qn,(-6.221923240859403E37));g=a.qn;i=j;Bv(g,0.0,i,0.0);Bu(a.qn,(-6.221923240859403E37));Bv(a.qn,10.0,i,0.0);j=j+32|0;}Dd(a.qn);Dg(a.uq,d.nY);Dh(a.uq);Db(a.Au,a.uq,Dv(B(481),N(C,[G5(a.z_),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.uq);}
let AKo=(a,b,c)=>{let d,e,f;d=a.xj;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xj,1);}
function Uc(){let a=this;BW.call(a);a.yx=null;a.vJ=null;a.p_=null;a.te=null;a.rB=Q;a.CP=null;a.xa=null;a.us=null;}
let ASn=a=>{let b,c,d,e,f,g,h,i,j,k;a.CP=a.us.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.yx=b;a.vJ=a.us.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.xa=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.p_=b;g=a.te.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.rB=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let ATH=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.us;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.us;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xa);Df(d);if(BB(Bx,29)){BD(a.te,Q);a.rB=Q;}if(BB(Bx,30)){BD(a.te,Q);a.rB=Q;}if(BB(Bx,31)){BD(a.te,Q);a.rB=Q;}a.rB=Z(a.rB,J(1));e=0;while(e<524288)
{h=AAu(a.yx)*512.0|0;if(h>=0&&h<512){c=a.te.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.p_,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.p_,i);g=a.p_;b=f;Bv(g,b,0.0,0.0);Bu(a.p_,i);Bv(a.p_,b,0.0625*BV(a.te.data[f])/BV(a.rB),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.p_,(-6.221923240859403E37));g=a.p_;i=j;Bv(g,0.0,i,0.0);Bu(a.p_,(-6.221923240859403E37));Bv(a.p_,10.0,i,0.0);j=j+32|0;}Dd(a.p_);Dg(a.vJ,d.nY);Dh(a.vJ);Db(a.CP,a.vJ,Dv(B(482),N(C,[Hw(a.yx),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vJ);}
let ALl=(a,b,c)=>{let d,e,f;d=a.xa;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xa,1);}
function Nr(){let a=this;BW.call(a);a.zB=null;a.vw=null;a.qp=null;a.so=null;a.rn=Q;a.A2=null;a.v7=null;a.u_=null;}
let ALH=a=>{let b,c,d,e,f,g,h,i,j,k;a.A2=a.u_.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.zB=b;a.vw=a.u_.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.v7=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.qp=b;j=a.so.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.rn=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let APd=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.u_;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.u_;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.v7);Df(d);if(BB(Bx,29)){BD(a.so,Q);a.rn=Q;}if(BB(Bx,30)){BD(a.so,Q);a.rn=Q;}if(BB(Bx,31)){BD(a.so,Q);a.rn=Q;}a.rn=Z(a.rn,J(1));e=0;while(e<524288)
{h=Ut(a.zB)*512.0|0;if(h>=0&&h<512){c=a.so.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qp,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qp,i);g=a.qp;b=f;Bv(g,b,0.0,0.0);Bu(a.qp,i);Bv(a.qp,b,0.0625*BV(a.so.data[f])/BV(a.rn),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qp,(-6.221923240859403E37));g=a.qp;i=j;Bv(g,0.0,i,0.0);Bu(a.qp,(-6.221923240859403E37));Bv(a.qp,10.0,i,0.0);j=j+32|0;}Dd(a.qp);Dg(a.vw,d.nY);Dh(a.vw);Db(a.A2,a.vw,Dv(B(482),N(C,[GV(a.zB),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vw);}
let AXe=(a,b,c)=>{let d,e,f;d=a.v7;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.v7,1);}
function Sq(){let a=this;BW.call(a);a.x8=null;a.vD=null;a.qx=null;a.sn=null;a.sh=Q;a.Cm=null;a.wh=null;a.vb=null;}
let AOf=a=>{let b,c,d,e,f,g,h,i,j;a.Cm=a.vb.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.x8=b;a.vD=a.vb.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.wh=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qx=b;f=a.sn.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.sh=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let AVD=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vb;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vb;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.wh);Df(d);if(BB(Bx,29)){BD(a.sn,Q);a.sh=Q;}if(BB(Bx,30)){BD(a.sn,Q);a.sh=Q;}if(BB(Bx,31)){BD(a.sn,Q);a.sh=Q;}a.sh=Z(a.sh,J(1));e=0;while(e<524288)
{h=Z_(a.x8)*512.0|0;if(h>=0&&h<512){c=a.sn.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qx,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qx,i);g=a.qx;b=f;Bv(g,b,0.0,0.0);Bu(a.qx,i);Bv(a.qx,b,0.0625*BV(a.sn.data[f])/BV(a.sh),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qx,(-6.221923240859403E37));g=a.qx;i=j;Bv(g,0.0,i,0.0);Bu(a.qx,(-6.221923240859403E37));Bv(a.qx,10.0,i,0.0);j=j+32|0;}Dd(a.qx);Dg(a.vD,d.nY);Dh(a.vD);Db(a.Cm,a.vD,Dv(B(482),N(C,[G5(a.x8),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vD);}
let AUy=(a,b,c)=>{let d,e,f;d=a.wh;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.wh,1);}
function PJ(){let a=this;BW.call(a);a.z0=null;a.vI=null;a.p9=null;a.sv=null;a.r4=Q;a.AE=null;a.wW=null;a.u1=null;}
let AIx=a=>{let b,c,d,e,f,g,h,i,j,k;a.AE=a.u1.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.z0=b;a.vI=a.u1.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.wW=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.p9=b;g=a.sv.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.r4=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let AUS=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.u1;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.u1;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.wW);Df(d);if(BB(Bx,29)){BD(a.sv,Q);a.r4=Q;}if(BB(Bx,30)){BD(a.sv,Q);a.r4=Q;}if(BB(Bx,31)){BD(a.sv,Q);a.r4=Q;}a.r4=Z(a.r4,J(1));e=0;while(e<524288)
{h=AAB(a.z0)*512.0|0;if(h>=0&&h<512){c=a.sv.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.p9,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.p9,i);g=a.p9;b=f;Bv(g,b,0.0,0.0);Bu(a.p9,i);Bv(a.p9,b,0.0625*BV(a.sv.data[f])/BV(a.r4),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.p9,(-6.221923240859403E37));g=a.p9;i=j;Bv(g,0.0,i,0.0);Bu(a.p9,(-6.221923240859403E37));Bv(a.p9,10.0,i,0.0);j=j+32|0;}Dd(a.p9);Dg(a.vI,d.nY);Dh(a.vI);Db(a.AE,a.vI,Dv(B(483),N(C,[Hw(a.z0),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vI);}
let AV5=(a,b,c)=>{let d,e,f;d=a.wW;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.wW,1);}
function OK(){let a=this;BW.call(a);a.zJ=null;a.vk=null;a.qm=null;a.tl=null;a.sg=Q;a.Cr=null;a.xe=null;a.uu=null;}
let ANn=a=>{let b,c,d,e,f,g,h,i,j,k;a.Cr=a.uu.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.zJ=b;a.vk=a.uu.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.xe=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.qm=b;j=a.tl.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.sg=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let ATh=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.uu;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.uu;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xe);Df(d);if(BB(Bx,29)){BD(a.tl,Q);a.sg=Q;}if(BB(Bx,30)){BD(a.tl,Q);a.sg=Q;}if(BB(Bx,31)){BD(a.tl,Q);a.sg=Q;}a.sg=Z(a.sg,J(1));e=0;while(e<524288)
{h=Rn(a.zJ)*512.0|0;if(h>=0&&h<512){c=a.tl.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qm,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qm,i);g=a.qm;b=f;Bv(g,b,0.0,0.0);Bu(a.qm,i);Bv(a.qm,b,0.0625*BV(a.tl.data[f])/BV(a.sg),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qm,(-6.221923240859403E37));g=a.qm;i=j;Bv(g,0.0,i,0.0);Bu(a.qm,(-6.221923240859403E37));Bv(a.qm,10.0,i,0.0);j=j+32|0;}Dd(a.qm);Dg(a.vk,d.nY);Dh(a.vk);Db(a.Cr,a.vk,Dv(B(483),N(C,[GV(a.zJ),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vk);}
let ATd=(a,b,c)=>{let d,e,f;d=a.xe;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xe,1);}
function Ss(){let a=this;BW.call(a);a.yu=null;a.vG=null;a.qo=null;a.sD=null;a.r8=Q;a.AU=null;a.xO=null;a.vY=null;}
let AN$=a=>{let b,c,d,e,f,g,h,i,j;a.AU=a.vY.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.yu=b;a.vG=a.vY.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.xO=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qo=b;f=a.sD.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.r8=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let AXG=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vY;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vY;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xO);Df(d);if(BB(Bx,29)){BD(a.sD,Q);a.r8=Q;}if(BB(Bx,30)){BD(a.sD,Q);a.r8=Q;}if(BB(Bx,31)){BD(a.sD,Q);a.r8=Q;}a.r8=Z(a.r8,J(1));e=0;while(e<524288)
{h=Rn(a.yu)*512.0|0;if(h>=0&&h<512){c=a.sD.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qo,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qo,i);g=a.qo;b=f;Bv(g,b,0.0,0.0);Bu(a.qo,i);Bv(a.qo,b,0.0625*BV(a.sD.data[f])/BV(a.r8),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qo,(-6.221923240859403E37));g=a.qo;i=j;Bv(g,0.0,i,0.0);Bu(a.qo,(-6.221923240859403E37));Bv(a.qo,10.0,i,0.0);j=j+32|0;}Dd(a.qo);Dg(a.vG,d.nY);Dh(a.vG);Db(a.AU,a.vG,Dv(B(483),N(C,[G5(a.yu),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vG);}
let AYq=(a,b,c)=>{let d,e,f;d=a.xO;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xO,1);}
function QZ(){let a=this;BW.call(a);a.xX=null;a.vm=null;a.qq=null;a.ss=null;a.sa=Q;a.BC=null;a.we=null;a.vl=null;}
let AUG=a=>{let b,c,d,e,f,g,h,i,j,k;a.BC=a.vl.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.xX=b;a.vm=a.vl.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.we=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.qq=b;g=a.ss.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.sa=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let AH4=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vl;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vl;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;Te(1.0,1.0,1.0,1.0,0);d=DP(a.we);Df(d);if(BB(Bx,29)){BD(a.ss,Q);a.sa=Q;}if(BB(Bx,30)){BD(a.ss,Q);a.sa=Q;}if(BB(Bx,31)){BD(a.ss,Q);a.sa=Q;}a.sa=Z(a.sa,J(1));e=0;while(e
<524288){h=W7(a.xX,512);if(h>=0&&h<512){c=a.ss.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qq,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qq,i);g=a.qq;b=f;Bv(g,b,0.0,0.0);Bu(a.qq,i);Bv(a.qq,b,0.0625*BV(a.ss.data[f])/BV(a.sa),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qq,(-6.221923240859403E37));g=a.qq;i=j;Bv(g,0.0,i,0.0);Bu(a.qq,(-6.221923240859403E37));Bv(a.qq,10.0,i,0.0);j=j+32|0;}Dd(a.qq);Dg(a.vm,d.nY);Dh(a.vm);Db(a.BC,a.vm,Dv(B(484),N(C,[Hw(a.xX),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vm);}
let AMD=(a,b,c)=>{let d,e,f;d=a.we;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.we,1);}
function PC(){let a=this;BW.call(a);a.zu=null;a.u5=null;a.qs=null;a.s0=null;a.rL=Q;a.BQ=null;a.wu=null;a.vy=null;}
let AV$=a=>{let b,c,d,e,f,g,h,i,j,k;a.BQ=a.vy.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.zu=b;a.u5=a.vy.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.wu=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.qs=b;j=a.s0.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.rL=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let AUJ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vy;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vy;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;Te(1.0,1.0,1.0,1.0,0);d=DP(a.wu);Df(d);if(BB(Bx,29)){BD(a.s0,Q);a.rL=Q;}if(BB(Bx,30)){BD(a.s0,Q);a.rL=Q;}if(BB(Bx,31)){BD(a.s0,Q);a.rL=Q;}a.rL=Z(a.rL,J(1));e=0;while(e
<524288){h=AFi(a.zu,512);if(h>=0&&h<512){c=a.s0.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qs,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qs,i);g=a.qs;b=f;Bv(g,b,0.0,0.0);Bu(a.qs,i);Bv(a.qs,b,0.0625*BV(a.s0.data[f])/BV(a.rL),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qs,(-6.221923240859403E37));g=a.qs;i=j;Bv(g,0.0,i,0.0);Bu(a.qs,(-6.221923240859403E37));Bv(a.qs,10.0,i,0.0);j=j+32|0;}Dd(a.qs);Dg(a.u5,d.nY);Dh(a.u5);Db(a.BQ,a.u5,Dv(B(484),N(C,[GV(a.zu),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.u5);}
let AWB=(a,b,c)=>{let d,e,f;d=a.wu;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.wu,1);}
function TE(){let a=this;BW.call(a);a.yt=null;a.vR=null;a.qr=null;a.sz=null;a.rt=Q;a.Ba=null;a.xn=null;a.uB=null;}
let AXP=a=>{let b,c,d,e,f,g,h,i,j;a.Ba=a.uB.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.yt=b;a.vR=a.uB.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.xn=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qr=b;f=a.sz.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.rt=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let AS3=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.uB;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.uB;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;Te(1.0,1.0,1.0,1.0,0);d=DP(a.xn);Df(d);if(BB(Bx,29)){BD(a.sz,Q);a.rt=Q;}if(BB(Bx,30)){BD(a.sz,Q);a.rt=Q;}if(BB(Bx,31)){BD(a.sz,Q);a.rt=Q;}a.rt=Z(a.rt,J(1));e=0;while(e
<524288){h=ACq(a.yt,512);if(h>=0&&h<512){c=a.sz.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qr,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qr,i);g=a.qr;b=f;Bv(g,b,0.0,0.0);Bu(a.qr,i);Bv(a.qr,b,0.0625*BV(a.sz.data[f])/BV(a.rt),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qr,(-6.221923240859403E37));g=a.qr;i=j;Bv(g,0.0,i,0.0);Bu(a.qr,(-6.221923240859403E37));Bv(a.qr,10.0,i,0.0);j=j+32|0;}Dd(a.qr);Dg(a.vR,d.nY);Dh(a.vR);Db(a.Ba,a.vR,Dv(B(484),N(C,[G5(a.yt),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vR);}
let AOl=(a,b,c)=>{let d,e,f;d=a.xn;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xn,1);}
function SU(){let a=this;BW.call(a);a.yc=null;a.ur=null;a.qf=null;a.su=null;a.rG=Q;a.Db=null;a.w1=null;a.u2=null;}
let AWN=a=>{let b,c,d,e,f,g,h,i,j,k;a.Db=a.u2.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.yc=b;a.ur=a.u2.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.w1=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.qf=b;g=a.su.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.rG=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let AOq=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bx.oM.data;if(c[71]){d=a.u2;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.u2;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);h=a.w1.oA;Df(h);if(BB(Bx,29)){BD(a.su,Q);a.rG=Q;}if(BB(Bx,30)){BD(a.su,Q);a.rG=Q;}if(BB(Bx,31)){BD(a.su,Q);a.rG=Q;}a.rG=Z(a.rG,J(1));e=0;while(e<
524288){i=T((M5(a.yc,J(512))));if(i>=0&&i<512){c=a.su.data;c[i]=Z(c[i],J(1));}e=e+1|0;}De(a.qf,h.nY,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qf,j);d=a.qf;b=f;Bv(d,b,0.0,0.0);Bu(a.qf,j);Bv(a.qf,b,0.0625*BV(a.su.data[f])/BV(a.rG),0.0);f=f+1|0;}k=8;while(k<520){Bu(a.qf,(-6.221923240859403E37));d=a.qf;j=k;Bv(d,0.0,j,0.0);Bu(a.qf,(-6.221923240859403E37));Bv(a.qf,10.0,j,0.0);k=k+32|0;}Dd(a.qf);Dg(a.ur,h.nY);Dh(a.ur);Db(a.Db,a.ur,Dv(B(485),N(C,[Hw(a.yc),C2(Dj(Bi))])),64.0,522.0,
384.0,1,1);Dl(a.ur);}
let ARq=(a,b,c)=>{let d,e,f;d=a.w1;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.w1,1);}
function AE1(){let a=this;BW.call(a);a.zn=null;a.vV=null;a.qz=null;a.sR=null;a.r_=Q;a.A3=null;a.xK=null;a.v0=null;}
let A2s=a=>{let b=new AE1();ASh(b,a);return b;}
let AXn=a=>{let b,c,d,e,f,g,h,i,j,k;a.A3=a.v0.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.zn=b;a.vV=a.v0.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.xK=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.qz=b;j=a.sR.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.r_=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let ASh=(a,b)=>{a.sR=Dy(512);a.r_=Q;a.v0=b;}
let AVc=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bx.oM.data;if(c[71]){d=a.v0;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.v0;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);h=a.xK.oA;Df(h);if(BB(Bx,29)){BD(a.sR,Q);a.r_=Q;}if(BB(Bx,30)){BD(a.sR,Q);a.r_=Q;}if(BB(Bx,31)){BD(a.sR,Q);a.r_=Q;}a.r_=Z(a.r_,J(1));e=0;while(e<
524288){i=T((M5(a.zn,J(512))));if(i>=0&&i<512){c=a.sR.data;c[i]=Z(c[i],J(1));}e=e+1|0;}De(a.qz,h.nY,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qz,j);d=a.qz;b=f;Bv(d,b,0.0,0.0);Bu(a.qz,j);Bv(a.qz,b,0.0625*BV(a.sR.data[f])/BV(a.r_),0.0);f=f+1|0;}k=8;while(k<520){Bu(a.qz,(-6.221923240859403E37));d=a.qz;j=k;Bv(d,0.0,j,0.0);Bu(a.qz,(-6.221923240859403E37));Bv(a.qz,10.0,j,0.0);k=k+32|0;}Dd(a.qz);Dg(a.vV,h.nY);Dh(a.vV);Db(a.A3,a.vV,Dv(B(485),N(C,[GV(a.zn),C2(Dj(Bi))])),64.0,522.0,
384.0,1,1);Dl(a.vV);}
let AYh=(a,b,c)=>{let d,e,f;d=a.xK;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xK,1);}
function Wr(){let a=this;BW.call(a);a.zo=null;a.uX=null;a.qk=null;a.s_=null;a.sb=Q;a.Br=null;a.w7=null;a.uI=null;}
let AZi=a=>{let b=new Wr();AWZ(b,a);return b;}
let AHi=a=>{let b,c,d,e,f,g,h,i,j;a.Br=a.uI.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.zo=b;a.uX=a.uI.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.w7=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qk=b;f=a.s_.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.sb=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let AWZ=(a,b)=>{a.s_=Dy(512);a.sb=Q;a.uI=b;}
let AQJ=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=Bx.oM.data;if(c[71]){d=a.uI;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.uI;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);h=a.w7.oA;Df(h);if(BB(Bx,29)){BD(a.s_,Q);a.sb=Q;}if(BB(Bx,30)){BD(a.s_,Q);a.sb=Q;}if(BB(Bx,31)){BD(a.s_,Q);a.sb=Q;}a.sb=Z(a.sb,J(1));e=0;while(e<
524288){i=T((M5(a.zo,J(512))));if(i>=0&&i<512){c=a.s_.data;c[i]=Z(c[i],J(1));}e=e+1|0;}De(a.qk,h.nY,1);f=0;while(f<512){j=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qk,j);d=a.qk;b=f;Bv(d,b,0.0,0.0);Bu(a.qk,j);Bv(a.qk,b,0.0625*BV(a.s_.data[f])/BV(a.sb),0.0);f=f+1|0;}k=8;while(k<520){Bu(a.qk,(-6.221923240859403E37));d=a.qk;j=k;Bv(d,0.0,j,0.0);Bu(a.qk,(-6.221923240859403E37));Bv(a.qk,10.0,j,0.0);k=k+32|0;}Dd(a.qk);Dg(a.uX,h.nY);Dh(a.uX);Db(a.Br,a.uX,Dv(B(485),N(C,[G5(a.zo),C2(Dj(Bi))])),64.0,522.0,
384.0,1,1);Dl(a.uX);}
let AHC=(a,b,c)=>{let d,e,f;d=a.w7;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.w7,1);}
function Xg(){let a=this;BW.call(a);a.yp=null;a.v4=null;a.ql=null;a.tf=null;a.r2=Q;a.A0=null;a.wk=null;a.vc=null;}
let A1o=a=>{let b=new Xg();ANO(b,a);return b;}
let AW$=a=>{let b,c,d,e,f,g,h,i,j,k;a.A0=a.vc.oX;b=new Gc;c=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));d=new EV;d.th=0;Ef(d,J(1234567890));b.qY=d;Ef(d,c);a.yp=b;a.v4=a.vc.oU;b=new C6;d=new C4;Dk(d);d.oV=1.0;e=new Bg;B3();d.o1=e;d.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=d;a.wk=b;b=new C5;f=Ds(Do(0,1,0),Du(0,1,0));if(f.nU){Di(b,1536,0,1,0,f);b.pe=1;a.ql=b;g=a.tf.data;h=0;i=g.length;if(h>i){b=new Bc;b.m$=1;b.m_=1;D(b);}while(h<i){j=h+1|0;g[h]=Q;h=j;}a.r2=Q;return;}b=new X;d=new I;d.m8
=H(16);G(d,d.m7,B(475));if(!f.nU)e=f.nS;else{e=Bm.iG(f.oe);f.nS=e;}G(d,d.m7,e);e=new M;g=d.m8;k=g.data;i=d.m7;P();j=k.length;if(i>=0&&i<=(j-0|0)){e.m9=O(g.data,0,i);b.m$=1;b.m_=1;b.na=e;D(b);}b=new L;Cg(b);D(b);}
let ANO=(a,b)=>{a.tf=Dy(512);a.r2=Q;a.vc=b;}
let ANE=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vc;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vc;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.wk);Df(d);if(BB(Bx,29)){BD(a.tf,Q);a.r2=Q;}if(BB(Bx,30)){BD(a.tf,Q);a.r2=Q;}if(BB(Bx,31)){BD(a.tf,Q);a.r2=Q;}a.r2=Z(a.r2,J(1));e=0;while(e<524288)
{h=T(Y(AB3(a.yp),55));if(h>=0&&h<512){c=a.tf.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.ql,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.ql,i);g=a.ql;b=f;Bv(g,b,0.0,0.0);Bu(a.ql,i);Bv(a.ql,b,0.0625*BV(a.tf.data[f])/BV(a.r2),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.ql,(-6.221923240859403E37));g=a.ql;i=j;Bv(g,0.0,i,0.0);Bu(a.ql,(-6.221923240859403E37));Bv(a.ql,10.0,i,0.0);j=j+32|0;}Dd(a.ql);Dg(a.v4,d.nY);Dh(a.v4);Db(a.A0,a.v4,Dv(B(486),N(C,[Hw(a.yp),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.v4);}
let AQC=(a,b,c)=>{let d,e,f;d=a.wk;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.wk,1);}
function Xx(){let a=this;BW.call(a);a.zv=null;a.vj=null;a.p7=null;a.ta=null;a.rS=Q;a.As=null;a.xQ=null;a.vS=null;}
let A3K=a=>{let b=new Xx();AIT(b,a);return b;}
let AQK=a=>{let b,c,d,e,f,g,h,i,j,k;a.As=a.vS.oX;b=new GS;c=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));d=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));e=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));f=T(By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19)));b.qO=c;b.qP=d;b.qQ=e;b.qR=f;a.zv=b;a.vj=a.vS.oU;b=new C6;g=new C4;Dk(g);g.oV=1.0;h=new Bg;B3();g.o1=h;g.oR=0.0;b.o8=new Bg;b.n5
=1.0;b.oA=g;a.xQ=b;b=new C5;i=Ds(Do(0,1,0),Du(0,1,0));if(i.nU){Di(b,1536,0,1,0,i);b.pe=1;a.p7=b;j=a.ta.data;c=0;d=j.length;if(c>d){b=new Bc;b.m$=1;b.m_=1;D(b);}while(c<d){e=c+1|0;j[c]=Q;c=e;}a.rS=Q;return;}b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(475));if(!i.nU)h=i.nS;else{h=Bm.iG(i.oe);i.nS=h;}G(g,g.m7,h);h=new M;j=g.m8;k=j.data;d=g.m7;P();e=k.length;if(d>=0&&d<=(e-0|0)){h.m9=O(j.data,0,d);b.m$=1;b.m_=1;b.na=h;D(b);}b=new L;Cg(b);D(b);}
let AIT=(a,b)=>{a.ta=Dy(512);a.rS=Q;a.vS=b;}
let AT5=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vS;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vS;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xQ);Df(d);if(BB(Bx,29)){BD(a.ta,Q);a.rS=Q;}if(BB(Bx,30)){BD(a.ta,Q);a.rS=Q;}if(BB(Bx,31)){BD(a.ta,Q);a.rS=Q;}a.rS=Z(a.rS,J(1));e=0;while(e<524288)
{h=T(Y(VY(a.zv),55));if(h>=0&&h<512){c=a.ta.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.p7,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.p7,i);g=a.p7;b=f;Bv(g,b,0.0,0.0);Bu(a.p7,i);Bv(a.p7,b,0.0625*BV(a.ta.data[f])/BV(a.rS),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.p7,(-6.221923240859403E37));g=a.p7;i=j;Bv(g,0.0,i,0.0);Bu(a.p7,(-6.221923240859403E37));Bv(a.p7,10.0,i,0.0);j=j+32|0;}Dd(a.p7);Dg(a.vj,d.nY);Dh(a.vj);Db(a.As,a.vj,Dv(B(486),N(C,[GV(a.zv),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vj);}
let AGB=(a,b,c)=>{let d,e,f;d=a.xQ;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xQ,1);}
function XE(){let a=this;BW.call(a);a.zM=null;a.vP=null;a.qt=null;a.sy=null;a.rP=Q;a.AF=null;a.xy=null;a.vN=null;}
let A0v=a=>{let b=new XE();AW8(b,a);return b;}
let AUr=a=>{let b,c,d,e,f,g,h,i,j;a.AF=a.vN.oX;b=new Gq;b.p4=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p1=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p0=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p3=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));b.p2=By(Bb((Bf()-0.5)*4.503599627370496E15),Bb((Bf()-0.5)*1.8446744073709552E19));a.zM=b;a.vP=a.vN.oU;b=new C6;c=new C4;Dk(c);c.oV
=1.0;d=new Bg;B3();c.o1=d;c.oR=0.0;b.o8=new Bg;b.n5=1.0;b.oA=c;a.xy=b;b=new C5;e=Ds(Do(0,1,0),Du(0,1,0));if(e.nU){Di(b,1536,0,1,0,e);b.pe=1;a.qt=b;f=a.sy.data;g=0;h=f.length;if(g>h){b=new Bc;b.m$=1;b.m_=1;D(b);}while(g<h){i=g+1|0;f[g]=Q;g=i;}a.rP=Q;return;}b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(475));if(!e.nU)d=e.nS;else{d=Bm.iG(e.oe);e.nS=d;}G(c,c.m7,d);d=new M;f=c.m8;j=f.data;h=c.m7;P();i=j.length;if(h>=0&&h<=(i-0|0)){d.m9=O(f.data,0,h);b.m$=1;b.m_=1;b.na=d;D(b);}b=new L;Cg(b);D(b);}
let AW8=(a,b)=>{a.sy=Dy(512);a.rP=Q;a.vN=b;}
let AJq=(a,b)=>{let c,d,e,f,g,h,i,j;c=Bx.oM.data;if(c[71]){d=a.vN;e=d.ny;c=d.n2.data;f=c.length;e=((e+f|0)-1|0)%f|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(Bi.nI.width,Bi.nI.height);}return;}if(c[72]){d=a.vN;e=d.ny+1|0;c=d.n2.data;e=e%c.length|0;d.ny=e;g=c[e];d.nx=g;if(g!==null){g.d3();d.nx.dZ(C$(Bi),C_(Bi));}return;}if(c[111])return;DU(1.0,1.0,1.0,1.0);d=DP(a.xy);Df(d);if(BB(Bx,29)){BD(a.sy,Q);a.rP=Q;}if(BB(Bx,30)){BD(a.sy,Q);a.rP=Q;}if(BB(Bx,31)){BD(a.sy,Q);a.rP=Q;}a.rP=Z(a.rP,J(1));e=0;while(e<524288)
{h=T(Y(XM(a.zM),55));if(h>=0&&h<512){c=a.sy.data;c[h]=Z(c[h],J(1));}e=e+1|0;}De(a.qt,d.nY,1);f=0;while(f<512){i=f&63?(-1.5436749266448052E38):(-1.5203096921934465E38);Bu(a.qt,i);g=a.qt;b=f;Bv(g,b,0.0,0.0);Bu(a.qt,i);Bv(a.qt,b,0.0625*BV(a.sy.data[f])/BV(a.rP),0.0);f=f+1|0;}j=8;while(j<520){Bu(a.qt,(-6.221923240859403E37));g=a.qt;i=j;Bv(g,0.0,i,0.0);Bu(a.qt,(-6.221923240859403E37));Bv(a.qt,10.0,i,0.0);j=j+32|0;}Dd(a.qt);Dg(a.vP,d.nY);Dh(a.vP);Db(a.AF,a.vP,Dv(B(486),N(C,[G5(a.zM),C2(Dj(Bi))])),64.0,522.0,384.0,
1,1);Dl(a.vP);}
let AV2=(a,b,c)=>{let d,e,f;d=a.xy;d.oS=0;d.oT=0;d.o0=b;d.o2=c;e=b;f=d.n5;e=e*f;f=c*f;d.o3=e;d.o4=f;BZ(d,1);BZ(a.xy,1);}
let Ni=F(BL);
let X=F(BL);
let AP5=(a,b)=>{let c=new X();AG9(c,a,b);return c;}
let Gg=a=>{let b=new X();Pz(b,a);return b;}
let AG9=(a,b,c)=>{a.m$=1;a.m_=1;a.na=b;a.oY=c;}
let Pz=(a,b)=>{a.m$=1;a.m_=1;a.na=b;}
let WU=F();
let Pw=(b,c)=>{let d;b:{d=0;switch(c){case 1:d=2;break b;case 2:d=4;break b;case 3:d=1;break b;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;}
function Rh(){Bs.call(this);this.Eu=null;}
let AV9=(a,b)=>{return CS(b)!=2?0:1;}
function ND(){Bs.call(this);this.EA=null;}
let AH8=(a,b)=>{return CS(b)!=1?0:1;}
function QH(){Bs.call(this);this.Ee=null;}
let AHx=(a,b)=>{b:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break b;default:k:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break k;}b=1;}break b;}b=1;}return b;}
function QG(){Bs.call(this);this.D8=null;}
let ALS=(a,b)=>{return 0;}
function Tu(){Bs.call(this);this.EY=null;}
let AN2=(a,b)=>{return !CS(b)?0:1;}
function OW(){Bs.call(this);this.EH=null;}
let AWb=(a,b)=>{return CS(b)!=9?0:1;}
function Om(){Bs.call(this);this.Fe=null;}
let ARV=(a,b)=>{return Ic(b);}
function P5(){Bs.call(this);this.Ew=null;}
let ATJ=(a,b)=>{b:{a:{if(!(b>=0&&b<=31)){if(b<127)break a;if(b>159)break a;}b=1;break b;}b=0;}return b;}
function Nz(){Bs.call(this);this.Dn=null;}
let AXJ=(a,b)=>{b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=Ic(b);}return b;}
function NC(){Bs.call(this);this.EJ=null;}
let AKN=(a,b)=>{b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break a;default:break a;}b=1;break b;}b=Ic(b);}return b;}
function Oh(){Bs.call(this);this.EX=null;}
let AWt=(a,b)=>{b:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break b;}b=1;}return b;}
function Pe(){Bs.call(this);this.E6=null;}
let AQf=(a,b)=>{b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}b=1;break b;}b=0;}return b;}
function Pj(){Bs.call(this);this.Eg=null;}
let AS8=(a,b)=>{b:{switch(CS(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}return b;}
function RM(){Bs.call(this);this.EM=null;}
let AVW=(a,b)=>{return CS(b)!=3?0:1;}
function Q3(){Bs.call(this);this.Dq=null;}
let AXg=(a,b)=>{b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break a;default:break a;}b=1;break b;}b=Ic(b);}return b;}
function NL(){Bs.call(this);this.Fo=null;}
let AKy=(a,b)=>{b:{a:{switch(CS(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break a;default:break a;}b=1;break b;}b=Ic(b);}return b;}
function Kt(){Bs.call(this);this.xi=0;}
let ARY=(a,b)=>{return a.nK^(a.xi!=CS(b&65535)?0:1);}
let QB=F(Kt);
let AUL=(a,b)=>{return a.nK^(!(a.xi>>CS(b&65535)&1)?0:1);}
function FD(){C.call(this);this.q9=null;}
let AHO=a=>{Z1(a.q9);}
let Xt=F();
let T1=F();
let AHz=null;let A4E=()=>{A4E=Ba(T1);AUx();}
let AUx=()=>{let b,c;FO();b=R((AE2.s()).data.length);c=b.data;AHz=b;c[It.nf]=1;c[Ih.nf]=2;c[HQ.nf]=3;c[HB.nf]=4;c[TG.nf]=5;}
let MY=F(BL);
let JG=F(HZ);
let Jo=null;let ALD=(a,b,c,d)=>{let e;e=0;while(e<d){A0N(b.data[e+c|0]&255);e=e+1|0;}}
let AYt=()=>{let b;b=new JG;b.xf=BI(1);Jo=b;}
let Pm=F(EC);
let AYr=null;let AJR=()=>{AYr=Bw(ALi);}
let Ho=F();
let AYU=null;let AYZ=null;let AF6=null;let ALd=null;let AMU=null;let Zg=()=>{AYU=EB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AYZ=Wc([J(1),J(10),J(100),J(1000),J(10000),J(100000),J(1000000),J(10000000),J(100000000),J(1000000000),E(1410065408, 2),E(1215752192, 23),E(3567587328, 232),E(1316134912, 2328),E(276447232, 23283),E(2764472320, 232830),E(1874919424, 2328306),E(1569325056, 23283064),E(2808348672, 232830643)]);AF6=Wc([J(1),J(10),J(100),J(10000),J(100000000),E(1874919424, 2328306)]);ALd
=new RZ;AMU=new SK;}
let J7=F();
let Wf=Q;let L7=null;let NJ=null;let Y6=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AXO(b):E(0, 2146959360);c.AA=CZ(Bl(d,E(0, 2147483648)),Q)?0:1;e=Bl(d,E(4294967295, 1048575));f=T(Fm(d,52))&2047;if(CZ(e,Q)&&!f){c.zg=Q;c.yh=0;return;}if(f)e=G$(e,E(0, 1048576));else{e=Cz(e,1);while(CZ(Bl(e,E(0, 1048576)),Q)){e=Cz(e,1);f=f+(-1)|0;}}g=NJ;h=ATt(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=NJ.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=JC(e,L7.data[i],j);if(Gp(k,Wf)){while(EK(k,Wf)<=0){h=h+(-1)|0;k=Z(V(k,J(10)),
J(9));}g=NJ.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=JC(e,L7.data[i],j);}e=Cz(e,1);d=Z(e,J(1));g=L7.data;i=h+1|0;l=g[i];f=j-1|0;m=JC(d,l,f);l=JC(Cb(e,J(1)),L7.data[i],f);n=J(1);while(true){o=V(n,J(10));if(EK(Er(k,o),Er(l,o))<=0)break;n=o;}p=J(1);while(true){q=V(p,J(10));if(EK(Er(k,q),Er(m,q))>=0)break;p=q;}i=EK(n,p);e=i>0?V(Er(k,n),n):i<0?Z(V(Er(k,p),p),p):V(Er(Z(k,CF(p,J(2))),p),p);if(EK(e,E(2808348672, 232830643))>=0)while(true){h=h+1|0;e=Er(e,J(10));if(EK(e,E(2808348672, 232830643))<0)break;}else if(EK(e,E(1569325056, 23283064))
<0){h=h+(-1)|0;e=V(e,J(10));}c.zg=e;c.yh=h-330|0;}
let JC=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Bl(b,J(65535));f=Bl(Y(b,16),J(65535));g=Bl(Y(b,32),J(65535));h=Bl(Y(b,48),J(65535));i=Bl(c,J(65535));j=Bl(Y(c,16),J(65535));k=Bl(Y(c,32),J(65535));l=Bl(Y(c,48),J(65535));return Z(Z(Z(Cz(V(l,h),32+d|0),Cz(Z(V(l,g),V(k,h)),16+d|0)),Cz(Z(Z(V(l,f),V(k,g)),V(j,h)),d)),Y(Z(Z(Z(V(k,e),V(j,f)),V(i,g)),Cz(Z(Z(Z(V(l,e),V(k,f)),V(j,g)),V(i,h)),16)),32-d|0));}
let Ym=()=>{Wf=Er(J(-1),J(10));L7=Wc([E(3251292512, 2194092222),E(1766094183, 3510547556),E(553881887, 2808438045),E(443105509, 2246750436),E(3285949193, 3594800697),E(910772436, 2875840558),E(2446604867, 2300672446),E(2196580869, 3681075914),E(2616258154, 2944860731),E(1234013064, 2355888585),E(1974420903, 3769421736),E(720543263, 3015537389),E(1435428070, 2412429911),E(578697993, 3859887858),E(2180945313, 3087910286),E(885762791, 2470328229),E(3135207384, 3952525166),E(1649172448, 3162020133),E(3037324877, 2529616106),
E(3141732885, 4047385770),E(2513386308, 3237908616),E(1151715587, 2590326893),E(983751480, 4144523029),E(1645994643, 3315618423),E(3034782633, 2652494738),E(3996658754, 4243991581),E(2338333544, 3395193265),E(1870666835, 2716154612),E(4073513845, 2172923689),E(3940641775, 3476677903),E(575533043, 2781342323),E(2178413352, 2225073858),E(2626467905, 3560118173),E(3819161242, 2848094538),E(478348616, 2278475631),E(3342338164, 3645561009),E(3532863990, 2916448807),E(1108304273, 2333159046),E(55299919, 3733054474),
E(903233395, 2986443579),E(1581580175, 2389154863),E(1671534821, 3822647781),E(478234397, 3058118225),E(382587518, 2446494580),E(612140029, 3914391328),E(2207698941, 3131513062),E(48172235, 2505210450),E(77075576, 4008336720),E(61660460, 3206669376),E(3485302205, 2565335500),E(1281516232, 4104536801),E(166219527, 3283629441),E(3568949458, 2626903552),E(2274345296, 4203045684),E(2678469696, 3362436547),E(424788838, 2689949238),E(2057817989, 2151959390),E(3292508783, 3443135024),E(3493000485, 2754508019),E(3653393847, 2203606415),
E(1550462860, 3525770265),E(1240370288, 2820616212),E(3569276608, 2256492969),E(3133862195, 3610388751),E(1648096297, 2888311001),E(459483578, 2310648801),E(3312154103, 3697038081),E(1790729823, 2957630465),E(1432583858, 2366104372),E(3151127633, 3785766995),E(2520902106, 3028613596),E(1157728226, 2422890877),E(2711358621, 3876625403),E(3887073815, 3101300322),E(1391672133, 2481040258),E(1367681954, 3969664413),E(2812132482, 3175731530),E(2249705985, 2540585224),E(1022549199, 4064936359),E(1677032818, 3251949087),
E(3918606632, 2601559269),E(3692790234, 4162494831),E(2095238728, 3329995865),E(1676190982, 2663996692),E(3540899031, 4262394707),E(1114732307, 3409915766),E(32792386, 2727932613),E(1744220827, 2182346090),E(2790753324, 3491753744),E(3091596118, 2793402995),E(2473276894, 2234722396),E(2239256113, 3575555834),E(2650398349, 2860444667),E(402331761, 2288355734),E(2361717736, 3661369174),E(2748367648, 2929095339),E(3057687578, 2343276271),E(3174313206, 3749242034),E(3398444024, 2999393627),E(1000768301, 2399514902),
E(2460222741, 3839223843),E(3686165111, 3071379074),E(3807925548, 2457103259),E(3515700499, 3931365215),E(2812560399, 3145092172),E(532061401, 2516073738),E(4287272078, 4025717980),E(3429817663, 3220574384),E(3602847589, 2576459507),E(2328582306, 4122335212),E(144878926, 3297868170),E(115903141, 2638294536),E(2762425404, 4221271257),E(491953404, 3377017006),E(3829536560, 2701613604),E(3922622707, 2161290883),E(1122235577, 3458065414),E(1756781920, 2766452331),E(546432077, 2213161865),E(874291324, 3541058984),
E(1558426518, 2832847187),E(3823721592, 2266277749),E(3540974170, 3626044399),E(3691772795, 2900835519),E(3812411695, 2320668415),E(1804891416, 3713069465),E(1443913133, 2970455572),E(3732110884, 2376364457),E(2535403578, 3802183132),E(310335944, 3041746506),E(3684242592, 2433397204),E(3317807769, 3893435527),E(936259297, 3114748422),E(3325987815, 2491798737),E(1885606668, 3986877980),E(1508485334, 3189502384),E(2065781726, 2551601907),E(4164244222, 4082563051),E(2472401918, 3266050441),E(1118928075, 2612840353),
E(931291461, 4180544565),E(745033169, 3344435652),E(3173006913, 2675548521),E(3358824142, 4280877634),E(3546052773, 3424702107),E(1118855300, 2739761686),E(36090780, 2191809349),E(1775732167, 3506894958),E(3138572652, 2805515966),E(1651864662, 2244412773),E(1783990001, 3591060437),E(4004172378, 2872848349),E(4062331362, 2298278679),E(3922749802, 3677245887),E(1420212923, 2941796710),E(1136170338, 2353437368),E(958879082, 3765499789),E(1626096725, 3012399831),E(441883920, 2409919865),E(707014273, 3855871784),
E(1424604878, 3084697427),E(3716664280, 2467757941),E(4228675929, 3948412706),E(2523947284, 3158730165),E(2019157827, 2526984132),E(4089645983, 4043174611),E(2412723327, 3234539689),E(2789172121, 2587631751),E(2744688475, 4140210802),E(477763862, 3312168642),E(2959191467, 2649734913),E(3875712888, 4239575861),E(2241576851, 3391660689),E(2652254940, 2713328551),E(1262810493, 2170662841),E(302509870, 3473060546),E(3677981733, 2778448436),E(2083391927, 2222758749),E(756446706, 3556413999),E(1464150824, 2845131199),
E(2030314118, 2276104959),E(671522212, 3641767935),E(537217769, 2913414348),E(2147761134, 2330731478),E(2577424355, 3729170365),E(2061939484, 2983336292),E(4226531965, 2386669033),E(1608490388, 3818670454),E(2145785770, 3054936363),E(3434615534, 2443949090),E(1200417559, 3910318545),E(960334047, 3128254836),E(4204241074, 2502603868),E(1572824964, 4004166190),E(1258259971, 3203332952),E(3583588354, 2562666361),E(4015754449, 4100266178),E(635623181, 3280212943),E(2226485463, 2624170354),E(985396364, 4198672567),
E(3365297469, 3358938053),E(115257597, 2687150443),E(1810192996, 2149720354),E(319328417, 3439552567),E(2832443111, 2751642053),E(3983941407, 2201313642),E(2938332415, 3522101828),E(4068652850, 2817681462),E(1536935362, 2254145170),E(2459096579, 3606632272),E(249290345, 2885305818),E(1917419194, 2308244654),E(490890333, 3693191447),E(2969692644, 2954553157),E(657767197, 2363642526),E(3629407892, 3781828041),E(2044532855, 3025462433),E(3353613202, 2420369946),E(3647794205, 3872591914),E(3777228823, 3098073531),
E(2162789599, 2478458825),E(3460463359, 3965534120),E(2768370687, 3172427296),E(1355703090, 2537941837),E(3028118404, 4060706939),E(3281488183, 3248565551),E(1766197087, 2598852441),E(1107928421, 4158163906),E(27349277, 3326531125),E(21879422, 2661224900),E(35007075, 4257959840),E(28005660, 3406367872),E(2599384905, 2725094297),E(361521006, 2180075438),E(4014407446, 3488120700),E(3211525957, 2790496560),E(2569220766, 2232397248),E(3251759766, 3571835597),E(883420894, 2857468478),E(2424723634, 2285974782),E(443583977, 3657559652),
E(2931847559, 2926047721),E(1486484588, 2340838177),E(3237368801, 3745341083),E(12914663, 2996272867),E(2587312108, 2397018293),E(3280705914, 3835229269),E(3483558190, 3068183415),E(2786846552, 2454546732),E(1022980646, 3927274772),E(3395364895, 3141819817),E(998304997, 2513455854),E(3315274914, 4021529366),E(1793226472, 3217223493),E(3152568096, 2573778794),E(2467128576, 4118046071),E(1114709402, 3294436857),E(3468747899, 2635549485),E(1255029343, 4216879177),E(3581003852, 3373503341),E(2005809622, 2698802673),
E(3322634616, 2159042138),E(162254630, 3454467422),E(2706784082, 2763573937),E(447440347, 2210859150),E(715904555, 3537374640),E(572723644, 2829899712),E(3035159293, 2263919769),E(2279274491, 3622271631),E(964426134, 2897817305),E(771540907, 2318253844),E(2952452370, 3709206150),E(2361961896, 2967364920),E(1889569516, 2373891936),E(1305324308, 3798227098),E(2762246365, 3038581678),E(3927784010, 2430865342),E(2848480580, 3889384548),E(3996771382, 3111507638),E(620436728, 2489206111),E(3569679143, 3982729777),
E(1137756396, 3186183822),E(3487185494, 2548947057),E(2143522954, 4078315292),E(4291798741, 3262652233),E(856458615, 2610121787),E(2229327243, 4176194859),E(2642455254, 3340955887),E(395977285, 2672764710),E(633563656, 4276423536),E(3942824761, 3421138828),E(577279431, 2736911063),E(2179810463, 2189528850),E(3487696741, 3503246160),E(2790157393, 2802596928),E(3950112833, 2242077542),E(2884206696, 3587324068),E(4025352275, 2869859254),E(4079275279, 2295887403),E(1372879692, 3673419846),E(239310294, 2938735877),
E(2768428613, 2350988701),E(2711498862, 3761581922),E(451212171, 3009265538),E(2078956655, 2407412430),E(3326330649, 3851859888),E(84084141, 3081487911),E(3503241150, 2465190328),E(451225085, 3944304526),E(3796953905, 3155443620),E(3037563124, 2524354896),E(3142114080, 4038967834),E(3372684723, 3231174267),E(980160860, 2584939414),E(3286244294, 4135903062),E(911008517, 3308722450),E(728806813, 2646977960),E(1166090902, 4235164736),E(73879262, 3388131789),E(918096869, 2710505431),E(4170451332, 2168404344),E(4095741754, 3469446951),
E(2417599944, 2775557561),E(1075086496, 2220446049),E(3438125312, 3552713678),E(173519872, 2842170943),E(1856802816, 2273736754),E(393904128, 3637978807),E(2892103680, 2910383045),E(2313682944, 2328306436),E(1983905792, 3725290298),E(3305111552, 2980232238),E(67108864, 2384185791),E(2684354560, 3814697265),E(2147483648, 3051757812),E(0, 2441406250),E(0, 3906250000),E(0, 3125000000),E(0, 2500000000),E(0, 4000000000),E(0, 3200000000),E(0, 2560000000),E(0, 4096000000),E(0, 3276800000),E(0, 2621440000),E(0, 4194304000),
E(0, 3355443200),E(0, 2684354560),E(0, 2147483648),E(3435973836, 3435973836),E(1889785610, 2748779069),E(2370821947, 2199023255),E(3793315115, 3518437208),E(457671715, 2814749767),E(2943117749, 2251799813),E(3849994940, 3602879701),E(2221002492, 2882303761),E(917808535, 2305843009),E(3186480574, 3689348814),E(3408177918, 2951479051),E(1867548875, 2361183241),E(1270091283, 3777893186),E(157079567, 3022314549),E(984657113, 2417851639),E(3293438299, 3868562622),E(916763721, 3094850098),E(2451397895, 2475880078),
E(3063243173, 3961408125),E(2450594538, 3169126500),E(1960475630, 2535301200),E(3136761009, 4056481920),E(2509408807, 3245185536),E(1148533586, 2596148429),E(3555640657, 4153837486),E(1985519066, 3323069989),E(2447408712, 2658455991),E(2197867021, 4253529586),E(899300158, 3402823669),E(1578433585, 2722258935),E(1262746868, 2177807148),E(1161401530, 3484491437),E(3506101601, 2787593149),E(3663874740, 2230074519),E(3285219207, 3568119231),E(1769181906, 2854495385),E(1415345525, 2283596308),E(1405559381, 3653754093),
E(2842434423, 2923003274),E(3132940998, 2338402619),E(2435725219, 3741444191),E(1089586716, 2993155353),E(2589656291, 2394524282),E(707476229, 3831238852),E(3142961361, 3064991081),E(1655375629, 2451992865),E(2648601007, 3923188584),E(2977874265, 3138550867),E(664312493, 2510840694),E(2780886908, 4017345110),E(2224709526, 3213876088),E(3497754539, 2571100870),E(1301439967, 4113761393),E(2759138892, 3291009114),E(3066304573, 2632807291),E(3188100398, 4212491666),E(1691486859, 3369993333),E(3071176406, 2695994666),
E(1597947665, 2156795733),E(1697722806, 3450873173),E(3076165163, 2760698538),E(4178919049, 2208558830),E(2391303182, 3533694129),E(2772036005, 2826955303),E(3935615722, 2261564242),E(2861011319, 3618502788),E(4006795973, 2894802230),E(3205436779, 2315841784),E(2551718468, 3705346855),E(2041374775, 2964277484),E(2492093279, 2371421987),E(551375410, 3794275180),E(441100328, 3035420144),E(1211873721, 2428336115),E(1938997954, 3885337784),E(2410191822, 3108270227),E(210166539, 2486616182),E(1195259923, 3978585891),
E(97214479, 3182868713),E(1795758501, 2546294970),E(2873213602, 4074071952),E(580583963, 3259257562),E(3041447548, 2607406049),E(2289335700, 4171849679),E(2690462019, 3337479743),E(3870356534, 2669983794),E(3615590076, 4271974071),E(2033478602, 3417579257),E(4203763259, 2734063405),E(3363010607, 2187250724),E(2803836594, 3499601159),E(3102062734, 2799680927),E(763663269, 2239744742),E(2080854690, 3583591587),E(4241664129, 2866873269),E(4252324763, 2293498615),E(2508752324, 3669597785),E(2007001859, 2935678228),
E(3323588406, 2348542582),E(1881767613, 3757668132),E(4082394468, 3006134505),E(3265915574, 2404907604),E(2648484541, 3847852167),E(400800715, 3078281734),E(1179634031, 2462625387),E(2746407909, 3940200619),E(3056119786, 3152160495),E(2444895829, 2521728396),E(2193846408, 4034765434),E(2614070585, 3227812347),E(373269550, 2582249878),E(4033205117, 4131599804),E(4085557553, 3305279843),E(691465664, 2644223875),E(1106345063, 4230758200),E(885076050, 3384606560),E(708060840, 2707685248),E(2284435591, 2166148198),
E(2796103486, 3465837117),E(518895870, 2772669694),E(1274110155, 2218135755),E(2038576249, 3549017208),E(3348847917, 2839213766),E(1820084875, 2271371013),E(2053142340, 3634193621),E(783520413, 2907354897),E(3203796708, 2325883917),E(1690100896, 3721414268),E(3070067635, 2977131414),E(3315047567, 2381705131),E(3586089190, 3810728210),E(2868871352, 3048582568),E(4013084000, 2438866054),E(3843954022, 3902185687),E(1357176299, 3121748550),E(1085741039, 2497398840),E(1737185663, 3995838144),E(2248741989, 3196670515),
E(1798993591, 2557336412),E(3737383206, 4091738259),E(3848900024, 3273390607),E(1361133101, 2618712486),E(459826043, 4189939978),E(2085847752, 3351951982),E(4245658579, 2681561585),E(2498086431, 4290498537),E(280482227, 3432398830),E(224385781, 2745919064),E(1038502084, 2196735251),E(4238583712, 3514776401),E(2531873511, 2811821121),E(1166505349, 2249456897),E(2725402018, 3599131035),E(2180321615, 2879304828),E(3462244210, 2303443862),E(2103616899, 3685510180),E(1682893519, 2948408144),E(2205308275, 2358726515),
E(3528493240, 3773962424),E(3681788051, 3019169939),E(3804423900, 2415335951),E(74124026, 3864537523),E(1777286139, 3091630018),E(3139815829, 2473304014),E(2446724950, 3957286423),E(3675366878, 3165829138),E(363313125, 2532663311),E(3158281377, 4052261297),E(808638183, 3241809038),E(2364897465, 2593447230),E(3783835944, 4149515568),E(450088378, 3319612455),E(360070702, 2655689964),E(2294100042, 4249103942),E(117293115, 3399283154),E(952827951, 2719426523),E(2480249279, 2175541218),E(3109405388, 3480865949),
E(3346517769, 2784692759),E(3536207675, 2227754207),E(2221958443, 3564406732),E(59579836, 2851525386),E(3483637705, 2281220308),E(419859574, 3649952494),E(1194881118, 2919961995),E(955904894, 2335969596),E(4106428209, 3737551353),E(708162189, 2990041083),E(2284516670, 2392032866),E(1937239754, 3827252586),E(690798344, 3061802069),E(1411632134, 2449441655),E(2258611415, 3919106648),E(3524876050, 3135285318),E(242920462, 2508228255),E(388672740, 4013165208),E(2028925110, 3210532166),E(764146629, 2568425733),E(363641147, 4109481173),
E(2008899836, 3287584938),E(3325106787, 2630067950),E(1025203564, 4208108721),E(4256136688, 3366486976),E(2545915891, 2693189581),E(1177739254, 2154551665),E(1884382806, 3447282664),E(2366499704, 2757826131),E(1034206304, 2206260905),E(1654730086, 3530017448),E(3041770987, 2824013958),E(4151403708, 2259211166),E(629291719, 3614737867),E(3080413753, 2891790293),E(4182317920, 2313432234),E(4114728295, 3701491575),E(3291782636, 2961193260),E(2633426109, 2368954608),E(3354488315, 3790327373),E(106610275, 3032261899),
E(944281679, 2425809519),E(3228837605, 3881295230),E(2583070084, 3105036184),E(2925449526, 2484028947),E(1244745405, 3974446316),E(136802865, 3179557053),E(1827429210, 2543645642),E(3782880196, 4069833027),E(1308317238, 3255866422),E(3623634168, 2604693137),E(2361840832, 4167509020),E(1889472666, 3334007216),E(652584673, 2667205773),E(185142018, 4267529237),E(2725093992, 3414023389),E(3039068653, 2731218711),E(1572261463, 2184974969),E(4233605259, 3495959950),E(3386884207, 2796767960),E(2709507366, 2237414368),
E(3476218326, 3579862989),E(3639968120, 2863890391),E(2052981037, 2291112313),E(2425776200, 3665779701),E(1081627501, 2932623761),E(6308541, 2346099009),E(1728080585, 3753758414),E(2241457927, 3003006731),E(934172882, 2402405385),E(1494676612, 3843848616),E(336747830, 3075078893),E(1987385183, 2460063114),E(602835915, 3936100983),E(2200255650, 3148880786),E(901211061, 2519104629),E(3159924616, 4030567406),E(1668946233, 3224453925),E(1335156987, 2579563140),E(2136251179, 4127301024),E(2567994402, 3301840819),
E(2913388981, 2641472655),E(366455074, 4226356249),E(1152157518, 3381084999),E(1780719474, 2704867999),E(2283569038, 2163894399),E(1076730083, 3462231039),E(1720377526, 2769784831),E(517308561, 2215827865),E(827693699, 3545324584),E(1521148418, 2836259667),E(3793899112, 2269007733),E(916277824, 3630412374),E(1592015718, 2904329899),E(2132606034, 2323463919),E(835189277, 3717542271),E(4104125258, 2974033816),E(2424306747, 2379227053),E(3019897337, 3806763285),E(2415917869, 3045410628),E(3650721214, 2436328502),
E(2405180105, 3898125604),E(2783137543, 3118500483),E(3944496953, 2494800386),E(298240911, 3991680619),E(1097586188, 3193344495),E(878068950, 2554675596),E(3981890698, 4087480953),E(608532181, 3269984763),E(2204812663, 2615987810),E(3527700261, 4185580496),E(1963166749, 3348464397),E(4147513777, 2678771517),E(3200048207, 4286034428),E(4278025484, 3428827542),E(1704433468, 2743062034),E(2222540234, 2194449627),E(120090538, 3511119404),E(955065889, 2808895523),E(2482039630, 2247116418),E(3112269949, 3595386269),
E(3348809418, 2876309015),E(2679047534, 2301047212),E(850502218, 3681675540),E(680401775, 2945340432),E(3121301797, 2356272345),E(699115580, 3770035753),E(2277279382, 3016028602),E(103836587, 2412822882),E(1025131999, 3860516611),E(4256079436, 3088413288),E(827883168, 2470730631),E(3901593088, 3953169009)]);NJ=A5d([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function RZ(){let a=this;C.call(a);a.zg=Q;a.yh=0;a.AA=0;}
function Gv(){let a=this;C.call(a);a.EG=null;a.uf=null;a.Cw=null;a.yV=0;a.CV=0.0;a.sO=0.0;a.yw=0.0;a.xt=0.0;a.zE=0.0;a.rb=0.0;a.wO=0.0;a.tE=0.0;a.wo=0.0;a.Bo=0.0;a.sf=0.0;a.Da=0.0;a.vg=0;a.sN=null;a.yz=null;a.Ad=0.0;a.yN=0.0;a.EF=null;a.AV=null;a.Bt=null;}
let AZa=(a,b)=>{let c=new Gv();AQW(c,a,b);return c;}
let AQW=(a,b,c)=>{a.rb=1.0;a.Bo=1.0;a.sf=1.0;a.Da=1.0;a.sN=Bo(LN(Ks),128);a.yN=1.0;a.AV=Qg([120,101,97,111,110,115,114,99,117,109,118,119,122]);a.Bt=Qg([77,78,66,68,67,69,70,75,65,71,72,73,74,76,79,80,81,82,83,84,85,86,87,88,89,90]);a.Cw=b;a.yV=c;Wo(a,b,c);}
let Wo=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,$$je;if(a.uf!==null)D(A1a(B(487)));a.EG=AER(b);d=A2V(AZC(ABl(b)),512);a:{d:{try{e=I1(d);if(e===null)D(Gg(B(488)));e=Jy(e,ABN(e,B(489))+8|0);f=(Tw(B1(e,0,Xi(e,32)),B(490),4)).data;if(f.length!=4)D(Gg(B(491)));a.CV=CE(f[0]);a.sO=CE(f[1]);a.yw=CE(f[2]);a.xt=CE(f[3]);g=a.CV+a.yw;e=I1(d);if(e===null)D(Gg(B(492)));f=(Tw(e,B(192),9)).data;h=f.length;if(h<3)D(Gg(B(493)));if(!FV(f[1],B(494)))D(Gg(B(495)));a.zE=CE(Jy(f[1],11));if
(!FV(f[2],B(496)))D(Gg(B(497)));bf:{i=CE(Jy(f[2],5));j=1;if(h<6)k=j;else if(f[5]===null)k=j;else if(!FV(f[5],B(498)))k=j;else{try{k=Jz(1,CE(Jy(f[5],6)));j=k;break bf;}catch($$e){$$je=BG($$e);if($$je instanceof Cj){}else{throw $$e;}}k=j;}}a.uf=Bo(M,k);h=0;q:{u:{i:{while(true){if(h>=k)break q;e=I1(d);if(e===null)D(Gg(B(499)));m:{l=P0(WQ(B(500)),e);if(H9(l)){m=L_(l,1);try{if(CE(m)!=h)break i;break m;}catch($$e){$$je=BG($$e);if($$je instanceof Cj){n=$$je;break u;}else{throw $$e;}}}}e=P0(WQ(B(501)),e);if(!H9(e))break;o
=L_(e,1);a.uf.data[h]=Xs(Uz(Uw(UG(b),o)),B(502),B(105));h=h+1|0;}D(Gg(B(503)));}try{D(Gg(CD(BO(BO(E6(),B(504)),m))));}catch($$e){$$je=BG($$e);if($$je instanceof Cj){n=$$je;}else{throw $$e;}}}D(AP5(CD(BO(BO(E6(),B(505)),m)),n));}a.tE=0.0;bb:{while(true){e=I1(d);if(e===null)break;if(FV(e,B(506)))break bb;if(FV(e,B(507)))break bb;if(!FV(e,B(508)))continue;p=AIM();q=AD2(e,B(509));BP(q);BP(q);k=CE(BP(q));if(k<=0)a.yz=p;else{if(k>65535)continue;T9(a,k,p);}p.rA=k;BP(q);p.AK=CE(BP(q));BP(q);p.AL=CE(BP(q));BP(q);p.pr
=CE(BP(q));BP(q);p.pU=CE(BP(q));BP(q);p.pY=CE(BP(q));BP(q);if(c)p.uj=CE(BP(q));else p.uj= -(p.pU+CE(BP(q))|0)|0;BP(q);p.sG=CE(BP(q));if(Ug(q))BP(q);bj:{if(Ug(q))try{p.t9=CE(BP(q));break bj;}catch($$e){$$je=BG($$e);if($$je instanceof Cj){}else{throw $$e;}}}if(p.pr>0&&p.pU>0)a.tE=AVo(i+p.uj,a.tE);}}a.tE=a.tE+a.yw;bk:{while(true){e=I1(d);if(e===null)break;if(!FV(e,B(510)))break bk;q=AD2(e,B(509));BP(q);BP(q);r=CE(BP(q));BP(q);s=CE(BP(q));if(r<0)continue;if(r>65535)continue;if(s<0)continue;if(s>65535)continue;p
=HV(a,r&65535);BP(q);t=CE(BP(q));if(p!==null)AB_(p,s,t);}}u=0;v=0.0;w=0.0;x=0.0;y=0.0;z=0.0;ba=0.0;bb=0.0;if(e!==null&&FV(e,B(507))){u=1;q=AD2(e,B(509));BP(q);BP(q);v=GF(BP(q));BP(q);w=GF(BP(q));BP(q);x=GF(BP(q));BP(q);y=GF(BP(q));BP(q);z=GF(BP(q));BP(q);ba=GF(BP(q));BP(q);bb=GF(BP(q));}bc=HV(a,32);if(bc===null){bc=AIM();bc.rA=32;bd=HV(a,108);if(bd===null)bd=Ra(a);bc.sG=bd.sG;T9(a,32,bc);}if(!bc.pr){be=a.xt;bc.pr=be+bc.sG+a.sO|0;bc.pY= -be|0;}a.Ad=bc.sG;bf=null;f=a.AV.data;k=f.length;h=0;bl:{while(h<k){bf=HV(a,
f[h]);if(bf!==null)break bl;h=h+1|0;}}if(bf===null)bf=Ra(a);a.yN=bf.pU-g;bg=null;f=a.Bt.data;k=f.length;h=0;be:{while(h<k){bg=HV(a,f[h]);if(bg!==null)break be;h=h+1|0;}}if(bg!==null)a.rb=bg.pU;else{bh=a.sN.data;j=bh.length;k=0;while(k<j){bm:{bi=bh[k];if(bi!==null){f=bi.data;h=f.length;r=0;while(true){if(r>=h)break bm;p=f[r];if(p!==null){s=p.pU;if(s&&p.pr)a.rb=AI3(a.rb,s);}r=r+1|0;}}}k=k+1|0;}}g=a.rb-g;a.rb=g;i=i-g;a.wO=i;g= -a.zE;a.wo=g;if(c){a.wO= -i;a.wo= -g;}if(u){a.wO=v;a.tE=w;a.wo=x;a.rb=y;a.zE=z;a.Ad=
ba;a.yN=bb;}}catch($$e){$$je=BG($$e);if($$je instanceof CL){n=$$je;break d;}else{b=$$je;break a;}}Ua(d);return;}try{D(AP5(CD(F1(BO(E6(),B(511)),b)),n));}catch($$e){$$je=BG($$e);b=$$je;}}Ua(d);D(b);}
let N1=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;d=c.vH.sJ;e=1.0/d.rK;f=1.0/d.rz;g=0.0;h=0.0;i=c.C3;j=c.C5;k=c.xw;l=c.x9;if(c instanceof PX){m=c;g=m.Ey;h=(m.D_-m.EL|0)-m.Ex;}n=b.AK;o=n;p=b.pr;q=n+p|0;n=b.AL;r=n;s=b.pU;t=n+s|0;if(g<=0.0)k=q;else{o=o-g;if(o<0.0){b.pr=p+o|0;b.pY=b.pY-o|0;o=0.0;}g=q-g;if(g<=k)k=g;else b.pr=b.pr-(g-k)|0;}if(h<=0.0)l=t;else{r=r-h;if(r<0.0){n=s+r|0;b.pU=n;if(n<0)b.pU=0;r=0.0;}g=t-h;if(g<=l)l=g;else{u=g-l;b.pU=b.pU-u|0;b.uj=b.uj+u|0;}}b.An=i+o*e;b.AR=i+k*e;if(!a.yV){b.ys=j+
r*f;b.xV=j+l*f;}else{b.xV=j+r*f;b.ys=j+l*f;}}
let T9=(a,b,c)=>{let d,e,f;d=a.sN.data;e=b/512|0;f=d[e];if(f===null){f=Bo(Ks,512);d[e]=f;}f.data[b&511]=c;}
let Ra=a=>{let b,c,d,e,f,g,h,i;b=a.sN.data;c=b.length;d=0;a:while(true){if(d>=c){e=new X;e.m$=1;e.m_=1;e.na=B(512);D(e);}k:{f=b[d];if(f!==null){f=f.data;g=f.length;h=0;while(true){if(h>=g)break k;i=f[h];if(i!==null&&i.pU&&i.pr)break a;h=h+1|0;}}}d=d+1|0;}return i;}
let HV=(a,b)=>{let c;c=a.sN.data[b/512|0];if(c===null)return null;return c.data[b&511];}
let OS=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;g=e-d|0;if(!g)return;h=a.vg;i=a.sf;j=b.of;k=b.os;ADY(j,g);ACT(b.os,g+1|0);d:{while(true){g=d+1|0;if(d<0)break;if(d>=c.m9.length)break;n:{l=c.m9.charCodeAt(d);if(l!=13){m=a.sN.data[l/512|0];n=m===null?null:m.data[l&511];if(n===null){n=a.yz;if(n===null)break n;}CT(j,n);if(f===null)o=n.vW?0.0:( -n.pY|0)*i-a.xt;else{q:{d=f.sG;m=f.wR;if(m!==null){m=m.data[l>>>9|0];if(m!==null){p=m.data[l&511];break q;}}p=0;}o=(d+p|0)*i;}OR(k,o);if(!h)f=n;else if(l!=91)f=n;else if(g>=
e)f=n;else{if(g<0)break d;if(g>=c.m9.length)break d;if(c.m9.charCodeAt(g)!=91)f=n;else{g=g+1|0;f=n;}}}}if(g>=e){if(f!==null)OR(k,f.vW?f.sG*i:(f.pr+f.pY|0)*i-a.sO);return;}d=g;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let Uv=(a,b,c)=>{let d,e,f,g,h,i;b:{d=c-1|0;e=b.np.data;f=e[d].rA&65535;switch(f){case 9:case 10:case 13:case 32:break;default:c=0;break b;}c=1;}if(c)return d;k:{g=a.EF;if(g===null)c=0;else{h=g.data;c=h.length;i=0;while(i<c){if(f==h[i]){c=1;break k;}i=i+1|0;}c=0;}}if(c)d=d+(-1)|0;bf:{while(d>0){f:{c=e[d].rA&65535;switch(c){case 9:case 10:case 13:case 32:break;default:f=0;break f;}f=1;}if(f)break bf;h:{if(g===null)c=0;else{h=g.data;f=h.length;i=0;while(i<f){if(c==h[i]){c=1;break h;}i=i+1|0;}c=0;}}if(c)break bf;d
=d+(-1)|0;}return 0;}return d+1|0;}
let EQ=F(BH);
let X6=null;let AHD=null;let APU=null;let Y4=null;let AUs=null;let P3=()=>{P3=Ba(EQ);AWw();}
let AWw=()=>{let b,c,d,e;b=new EQ;P3();b.ni=B(513);b.nf=0;X6=b;c=new EQ;c.ni=B(514);c.nf=1;AHD=c;d=new EQ;d.ni=B(515);d.nf=2;APU=d;e=new EQ;e.ni=B(516);e.nf=3;Y4=e;AUs=N(EQ,[b,c,d,e]);}
function JO(){let a=this;C.call(a);a.pR=null;a.o9=null;a.wv=0;a.t5=0;a.u4=null;a.vO=0;a.Cj=null;}
let MO=null;let A7l=(a,b,c,d,e)=>{let f=new JO();TC(f,a,b,c,d,e);return f;}
let TC=(a,b,c,d,e,f)=>{let g,h,i,j,k;b:{d:{a.wv=1;a.vO=0;g=new Bg;B3();a.Cj=g;A2Y();switch(AQT.data[b.nf]){case 1:a.pR=APy(c,d,f);b=new Il;b.rl=1;b.tL=0;b.yK=1;if(!DO){h=Lo(e);e=h.data.length;f=new Km;i=0+e|0;CU(f);f.no=(-1);f.nt=e;f.nb=e;f.nc=0;f.nb=i;f.vx=0;f.v_=0;f.uW=h;}else{d=e*2|0;if(d<0){b=new Bc;f=new I;f.m8=H(16);Dm(f,f.m7,Dp(B(517)));K(f,f.m7,d,10);g=new M;h=f.m8;j=h.data;d=f.m7;e=j.length;if(d>=0&&d<=(e-0|0)){g.m9=O(h.data,0,d);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;KQ(b);D(b);}f=new Cx;h=BI(d);f.no=
(-1);f.nt=d;f.nb=d;Cd();f.nT=Ch;f.n3=0;f.nQ=h;f.nc=0;f.nb=d;f.oz=1;f.n9=0;f.nT=DD();f=Ky(f);}b.q1=f;f.nb=f.nc;f.nc=0;f.no=(-1);f=Bm;g=f.nd.createBuffer();e=f.px;f.px=e+1|0;Ct(f.p$,e,CA(g));b.wr=e;b.vf=!c?35048:35044;a.o9=b;a.t5=0;break b;case 2:break;case 3:a.pR=AOM(c,d,f);a.o9=AXM(c,e);a.t5=0;break b;case 4:break d;default:break d;}a.pR=A4L(c,d,f);a.o9=AXM(c,e);a.t5=0;break b;}b=new Ok;AA7(b,0,d,f);a.pR=b;b=new Pn;b.rl=1;b.tL=0;b.yK=1;if(!DO){h=Lo(e);d=h.data.length;f=new Km;k=0+d|0;S2(f,d);f.nc=0;f.nb=k;f.vx
=0;f.v_=0;f.uW=h;}else{c=e*2|0;if(c<0){b=new Bc;f=new I;Gj(f);LL(f,B(517));EJ(f,c);AFB(b,CD(f));D(b);}g=new Cx;h=BI(c);CU(g);g.no=(-1);g.nt=c;g.nb=c;Cd();g.nT=Ch;g.n3=0;g.nQ=h;g.nc=0;g.nb=c;g.oz=1;g.n9=0;SJ(g,DD());f=Ky(g);}b.q1=f;AEo(f);b.wr=Y5(Bm);b.vf=35044;a.o9=b;a.t5=1;}ZD(ED,a);}
let Wn=(a,b)=>{let c;c=b.data;a.o9.j2(b,0,c.length);return a;}
let Re=(a,b,c,d,e,f)=>{let g,h,i,j;if(!e)return;if(f){g=null;h=null;a.pR.j3(b,g);g=a.u4;if(g!==null&&g.j4()>0)a.u4.j3(b,h);if(a.o9.j5()>0)a.o9.iI();}if(a.t5){if(a.o9.j5()<=0)Bm.j6(c,d,e);else{g=a.o9.iP(0);i=g.nc;B7(g,d);Bm.j7(c,e,5123,g);B7(g,i);}}else{j=0;if(a.vO)j=a.u4.j4();if(a.o9.j5()<=0){if(a.vO&&j>0)GE.j8(c,d,e,j);else Bm.j6(c,d,e);}else{if((e+d|0)>a.o9.j9()){b=new X;g=new I;g.m8=H(16);G(g,g.m7,B(518));K(g,g.m7,e,10);G(g,g.m7,B(519));K(g,g.m7,d,10);G(g,g.m7,B(520));c=a.o9.j9();K(g,g.m7,c,10);G(g,g.m7,
B(521));g=W(g);b.m$=1;b.m_=1;b.na=g;D(b);}if(a.vO&&j>0)GE.j$(c,e,5123,d*2|0,j);else Bm.j_(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.pR.ka(b,g);g=a.u4;if(g!==null&&g.j4()>0)a.u4.ka(b,h);if(a.o9.j5()>0)a.o9.kb();}}
let Hm=(a,b)=>{let c,d,e;c=(a.pR.kc()).pm.data;d=c.length;e=0;while(e<d){if(c[e].qK==b)return c[e];e=e+1|0;}return null;}
let WC=a=>{return a.pR.kc();}
let ZD=(b,c)=>{let d,e,f,g,h;d=MO;if(b===null){d=d.pj.data[0];while(d!==null&&d.pG!==null){d=d.pP;}}else{e=b;if(!e.$id$){f=Fb();e.$id$=f;}g=b.$id$;h=d.pj.data;d=h[g&(h.length-1|0)];while(d!==null){if(d.rW==g){f=d.pG;if(b!==f&&!(b!==f?0:1)?0:1)break;}d=d.pP;}}d=d===null?null:d.qg;if(d===null){d=new Cf;d.og=1;d.np=Bo(C,16);}CT(d,c);Ki(MO,b,d);}
let AFh=()=>{let b,c,d,e;b=new JE;c=Ko(16);b.rv=0;d=Bo(F2,c);e=d.data;b.pj=d;b.v5=0.75;b.sM=e.length*0.75|0;MO=b;}
function EP(){let a=this;C.call(a);a.nt=0;a.nc=0;a.nb=0;a.no=0;}
let S2=(a,b)=>{a.no=(-1);a.nt=b;a.nb=b;}
let ALa=a=>{return a.nt;}
let ARG=a=>{return a.nc;}
let B7=(a,b)=>{let c,d,e;if(b>=0&&b<=a.nb){a.nc=b;if(b<a.no)a.no=0;return a;}c=new Bc;d=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(522));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);e.m8.data[d]=93;e=W(e);c.m$=1;c.m_=1;c.na=e;D(c);}
let AVn=a=>{return a.nb;}
let CQ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.nt){if(a.no>b)a.no=(-1);a.nb=b;if(a.nc>b)a.nc=b;return a;}c=new Bc;d=a.nt;e=new I;e.m8=H(16);G(e,e.m7,B(524));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);f=e.m8;g=f.data;g[d]=93;h=new M;d=e.m7;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.m9=O(f.data,0,d);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AVv=a=>{return a.nb-a.nc|0;}
let L0=F(0);
let Ma=F(EP);
let N$=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new L;i=new I;i.m8=H(16);G(i,i.m7,B(525));K(i,i.m7,g,10);G(i,i.m7,B(526));K(i,i.m7,f,10);i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}f=a.nb;j=a.nc;if((f-j|0)<d){h=new II;h.m$=1;h.m_=1;D(h);}if(d>=0){g=0;k=j;while(g<d){l=c+1|0;f=k+1|0;e[c]=a.sS.data[k+a.s$|0];g=g+1|0;c=l;k=f;}a.nc=j+d|0;return a;}h=new L;i=new I;i.m8=H(16);G(i,i.m7,B(527));K(i,i.m7,d,10);G(i,i.m7,B(528));i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}}b=b.data;h=new L;d=
b.length;i=new I;i.m8=H(16);G(i,i.m7,B(529));K(i,i.m7,c,10);G(i,i.m7,B(523));K(i,i.m7,d,10);d=i.m7;Bh(i,d,d+1|0);i.m8.data[d]=41;i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}
let AFs=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.ui){e=new Ez;e.m$=1;e.m_=1;D(e);}f=a.nb;g=a.nc;if((f-g|0)<d){e=new Gu;e.m$=1;e.m_=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new L;j=new I;j.m8=H(16);G(j,j.m7,B(530));K(j,j.m7,i,10);G(j,j.m7,B(526));K(j,j.m7,f,10);j=W(j);e.m$=1;e.m_=1;e.na=j;D(e);}if(d>=0){i=0;k=g;while(i<d){l=k+1|0;f=c+1|0;a.sS.data[k+a.s$|0]=h[c];i=i+1|0;k=l;c=f;}a.nc=g+d|0;return a;}e=new L;j=new I;j.m8=H(16);G(j,j.m7,B(527));K(j,j.m7,d,10);G(j,j.m7,B(528));j=W(j);e.m$=1;e.m_
=1;e.na=j;D(e);}}b=b.data;e=new L;d=b.length;j=new I;j.m8=H(16);G(j,j.m7,B(529));K(j,j.m7,c,10);G(j,j.m7,B(523));K(j,j.m7,d,10);d=j.m7;Bh(j,d,d+1|0);j.m8.data[d]=41;j=W(j);e.m$=1;e.m_=1;e.na=j;D(e);}
let K6=(a,b,c,d)=>{let e,f,g,h,i;if(a.ui){b=new Ez;b.m$=1;b.m_=1;D(b);}e=d-c|0;if((a.nb-a.nc|0)<e){b=new Gu;b.m$=1;b.m_=1;D(b);}if(c>=0&&c<=b.m9.length){if(d>b.m9.length){f=new L;g=b.m9.length;b=new I;b.m8=H(16);G(b,b.m7,B(530));K(b,b.m7,d,10);G(b,b.m7,B(531));K(b,b.m7,g,10);b=W(b);f.m$=1;f.m_=1;f.na=b;D(f);}if(c<=d){h=a.nc;o:{while(c<d){i=h+1|0;g=c+1|0;if(c<0)break o;if(c>=b.m9.length)break o;a.sS.data[h+a.s$|0]=b.m9.charCodeAt(c);h=i;c=g;}a.nc=a.nc+e|0;return a;}b=new U;b.m$=1;b.m_=1;D(b);}b=new L;f=new I;f.m8
=H(16);G(f,f.m7,B(532));K(f,f.m7,c,10);G(f,f.m7,B(533));K(f,f.m7,d,10);f=W(f);b.m$=1;b.m_=1;b.na=f;D(b);}f=new L;e=b.m9.length;b=new I;b.m8=H(16);G(b,b.m7,B(532));K(b,b.m7,c,10);G(b,b.m7,B(523));K(b,b.m7,e,10);d=b.m7;Bh(b,d,d+1|0);b.m8.data[d]=41;b=W(b);f.m$=1;f.m_=1;f.na=b;D(f);}
function FQ(){let a=this;EP.call(a);a.n3=0;a.nQ=null;a.nT=null;}
let Pa=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new L;i=new I;i.m8=H(16);G(i,i.m7,B(534));K(i,i.m7,g,10);G(i,i.m7,B(526));K(i,i.m7,f,10);i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}f=a.nb;j=a.nc;if((f-j|0)<d){h=new II;h.m$=1;h.m_=1;D(h);}if(d>=0){g=j+a.n3|0;k=0;while(k<d){l=c+1|0;b=a.nQ.data;f=g+1|0;e[c]=b[g];k=k+1|0;c=l;g=f;}a.nc=j+d|0;return a;}h=new L;i=new I;i.m8=H(16);G(i,i.m7,B(527));K(i,i.m7,d,10);G(i,i.m7,B(528));i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}}b=b.data;h=new L;g
=b.length;i=new I;i.m8=H(16);G(i,i.m7,B(529));K(i,i.m7,c,10);G(i,i.m7,B(523));K(i,i.m7,g,10);f=i.m7;Bh(i,f,f+1|0);i.m8.data[f]=41;i=W(i);h.m$=1;h.m_=1;h.na=i;D(h);}
let Ty=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.n9){e=new Ez;e.m$=1;e.m_=1;D(e);}f=a.nb;g=a.nc;if((f-g|0)<d){e=new Gu;e.m$=1;e.m_=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=g+a.n3|0;j=0;while(j<d){b=a.nQ.data;k=i+1|0;f=c+1|0;b[i]=h[c];j=j+1|0;i=k;c=f;}a.nc=g+d|0;return a;}e=new L;l=new I;l.m8=H(16);G(l,l.m7,B(527));K(l,l.m7,d,10);Ed(l,l.m7,B(528));Jx(e,W(l));D(e);}e=new L;l=new I;l.m8=H(16);G(l,l.m7,B(535));K(l,l.m7,i,10);G(l,l.m7,B(526));K(l,l.m7,f,10);m=new M;b=
l.m8;h=b.data;d=l.m7;P();f=h.length;if(d>=0&&d<=(f-0|0)){m.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=m;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}}b=b.data;e=new L;d=b.length;l=new I;l.m8=H(16);G(l,l.m7,B(529));K(l,l.m7,c,10);G(l,l.m7,B(523));K(l,l.m7,d,10);d=l.m7;Bh(l,d,d+1|0);b=l.m8;h=b.data;h[d]=41;m=new M;d=l.m7;P();f=h.length;if(d>=0&&d<=(f-0|0)){m.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=m;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
let SJ=(a,b)=>{a.nT=b;return a;}
let ADW=a=>{a.nb=a.nc;a.nc=0;a.no=(-1);return a;}
let ASp=(a,b)=>{CQ(a,b);return a;}
let AG6=(a,b)=>{B7(a,b);return a;}
function Gn(){C.call(this);this.zV=null;}
let AVb=null;let E9=null;let Ge=null;let Ev=()=>{Ev=Ba(Gn);AP_();}
let AP_=()=>{let b;b=new Gn;Ev();b.zV=B(536);AVb=b;b=new Gn;b.zV=B(537);E9=b;b=new Gn;b.zV=B(538);Ge=b;}
let MT=F(0);
let Tk=F(0);
function On(){let a=this;C.call(a);a.Dl=null;a.CG=null;a.Es=0;a.E1=0;}
let AS0=a=>{let b,c;if(!a.Es){b=a.Dl;b.A$=null;CV();if(B6!==b)B6=b;B6.rR=FE();c=a.CG;b=null;c.tk.e(b);}}
function Ks(){let a=this;C.call(a);a.rA=0;a.AK=0;a.AL=0;a.pr=0;a.pU=0;a.An=0.0;a.xV=0.0;a.AR=0.0;a.ys=0.0;a.pY=0;a.uj=0;a.sG=0;a.wR=null;a.vW=0;a.t9=0;}
let AIM=()=>{let a=new Ks();AUF(a);return a;}
let AUF=a=>{a.t9=0;}
let AB_=(a,b,c)=>{let d,e,f;if(a.wR===null)a.wR=Bo(LN(A3L),128);d=a.wR.data;e=b>>>9|0;f=d[e];if(f===null){f=BI(512);d[e]=f;}f.data[b&511]=c<<24>>24;}
let AMY=a=>{let b,c,d,e;b=a.rA&65535;c=new M;d=H(1);e=d.data;e[0]=b;P();c.m9=O(d.data,0,e.length);return c;}
function V0(){let a=this;C.call(a);a.pm=null;a.pH=0;a.DH=Q;a.Eq=0;a.EP=0;}
let AMV=a=>{let b=new V0();AQj(b,a);return b;}
let AQj=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.DH=J(-1);a.Eq=(-1);a.EP=(-1);c=b.length;if(!c){d=new Bc;d.m$=1;d.m_=1;d.na=B(539);D(d);}e=Bo(Eq,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.pm=e;c=0;h=0;while(h<f.length){k:{o:{d=f[h];d.q6=c;switch(d.pA){case 5120:case 5121:break;case 5122:case 5123:g=2*d.pf|0;break k;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break o;case 5126:case 5132:g=4*d.pf|0;break k;default:break o;}g=d.pf;break k;}g=0;}c=c+g|0;h=h+1|0;}a.pH=c;}
function Hi(){let a=this;C.call(a);a.nS=null;a.nU=0;a.v8=null;a.Bw=null;a.Ch=null;a.BN=null;a.qW=null;a.BL=null;a.Cv=null;a.Bd=null;a.oe=0;a.yL=0;a.Ap=0;a.E$=null;a.oF=null;a.oJ=null;a.nW=0;a.EZ=0;a.p8=null;a.ut=null;}
let Mj=0;let AEm=null;let Z3=null;let ADN=null;let A3R=null;let T_=()=>{T_=Ba(Hi);ATj();}
let Ds=(a,b)=>{let c=new Hi();AFe(c,a,b);return c;}
let AFe=(a,b,c)=>{let d,e,f,g,h;T_();a.nS=B(43);a.v8=JD(51,0.800000011920929);a.Bw=JD(51,0.800000011920929);a.Ch=JD(51,0.800000011920929);a.qW=JD(51,0.800000011920929);a.BL=JD(51,0.800000011920929);a.Cv=JD(51,0.800000011920929);a.EZ=0;if(!DO){d=R(1);e=d.data.length;f=new Hb;g=0+e|0;f.no=(-1);f.nt=e;f.nb=e;f.nc=0;f.nb=g;f.s1=0;f.ug=0;f.sA=d;}else{h=new Cx;d=BI(4);h.no=(-1);h.nt=4;h.nb=4;Cd();h.nT=Ch;h.n3=0;h.nQ=d;h.nc=0;h.nb=4;h.oz=1;h.n9=0;h.nT=DD();f=HA(h);}a.p8=f;if(!DO){d=R(1);e=d.data.length;f=new Hb;g=
0+e|0;f.no=(-1);f.nt=e;f.nb=e;f.nc=0;f.nb=g;f.s1=0;f.ug=0;f.sA=d;}else{h=new Cx;d=BI(4);h.no=(-1);h.nt=4;h.nb=4;Cd();h.nT=Ch;h.n3=0;h.nQ=d;h.nc=0;h.nb=4;h.oz=1;h.n9=0;SJ(h,DD());f=HA(h);}a.ut=f;if(b===null)D(APM(B(540)));if(c===null)D(APM(B(541)));f=AEm;if(f!==null&&Fi(f)>0)b=CD(BO(BO(E6(),AEm),b));f=Z3;if(f!==null&&Fi(f)>0)c=CD(BO(BO(E6(),Z3),c));a.oF=b;a.oJ=c;a.E$=AQ6(16);CJ(a,b,c);if(AEk(a)){XG(a);AAx(a);ABS(a,ED,a);}}
let CJ=(a,b,c)=>{let d;a.yL=Ui(a,35633,b);d=Ui(a,35632,c);a.Ap=d;if(a.yL!=(-1)&&d!=(-1)){d=Bm.kk();if(!d)d=(-1);d=ADK(a,d);a.oe=d;if(d!=(-1)){a.nU=1;return;}a.nU=0;return;}a.nU=0;}
let Ui=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bm;if(!DO){e=R(1);f=e.data.length;g=new Hb;h=0+f|0;g.no=(-1);g.nt=f;g.nb=f;g.nc=0;g.nb=h;g.s1=0;g.ug=0;g.sA=e;}else{g=new Cx;e=BI(4);g.no=(-1);g.nt=4;g.nb=4;Cd();g.nT=Ch;g.n3=0;g.nQ=e;g.nc=0;g.nb=4;g.oz=1;g.n9=0;g.nT=DD();g=HA(g);}i=d.km(b);if(!i)return (-1);d.kn(i,c);d.ko(i);d.fy(i,35713,g);if(FZ(g,0))return i;j=d.kp(i);c=new I;c.m8=H(16);d=a.nS;G(c,c.m7,d);d=b!=35633?B(542):B(543);G(c,c.m7,d);d=new M;e=c.m8;k=e.data;i=c.m7;P();l=k.length;if(i>=0&&i<=(l-0|0)){d.m9=O(e.data,
0,i);a.nS=d;c=new I;c.m8=H(16);G(c,c.m7,d);G(c,c.m7,j);d=new M;e=c.m8;k=e.data;i=c.m7;l=k.length;if(i>=0&&i<=(l-0|0)){d.m9=O(e.data,0,i);a.nS=d;return (-1);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let ADK=(a,b)=>{let c,d,e,f;c=Bm;if(b==(-1))return (-1);c.kq(b,a.yL);c.kq(b,a.Ap);c.kr(b);d=new Cx;e=BI(4);d.no=(-1);d.nt=4;d.nb=4;Cd();d.nT=Ch;d.n3=0;d.nQ=e;d.nc=0;d.nb=4;d.oz=1;d.n9=0;d.nT=DD();f=HA(d);c.fx(b,35714,f);if(FZ(f,0))return b;a.nS=Bm.iG(b);return (-1);}
let AEk=a=>{return a.nU;}
let JL=(a,b,c)=>{let d,e,f,g,h,i;d=a.v8;e=(-2);f=FR(d,b);if(f>=0)e=d.pS.data[f];if(e==(-2)){e=Bm.ks(a.oe,b);if(e==(-1)&&c){if(a.nU){d=new Bc;g=new I;g.m8=H(16);G(g,g.m7,B(544));G(g,g.m7,b);G(g,g.m7,B(545));b=new M;h=g.m8;i=h.data;e=g.m7;P();f=i.length;if(e>=0&&e<=(f-0|0)){b.m9=O(h.data,0,e);d.m$=1;d.m_=1;d.na=b;D(d);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}b=new BT;d=new I;d.m8=H(16);G(d,d.m7,B(546));if(!a.nU)g=a.nS;else{g=Bm.iG(a.oe);a.nS=g;}G(d,d.m7,g);g=new M;h=d.m8;i=h.data;e=d.m7;P();f=i.length;if(e>=0&&e<=(f
-0|0)){g.m9=O(h.data,0,e);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}FF(a.v8,b,e);}return e;}
let AE7=(a,b,c,d,e,f,g)=>{let h;h=Bm;if(a.nW){CJ(a,a.oF,a.oJ);a.nW=0;}h.ku(b,c,d,e,f,g);}
let AB8=(a,b)=>{let c;c=Bm;if(a.nW){CJ(a,a.oF,a.oJ);a.nW=0;}c.kv(b);}
let ABS=(a,b,c)=>{let d,e;T_();d=ADN;e=CR(d,b);d=e<0?null:d.o_.data[e];if(d===null){d=new Cf;d.og=1;d.np=Bo(C,16);}CT(d,c);BN(ADN,b,d);}
let AAx=a=>{let b,c,d,e,f;b=a.p8;b.nc=0;b.nb=b.nt;b.no=(-1);Bm.fx(a.oe,35718,b);c=FZ(a.p8,0);a.BN=Bo(M,c);d=0;while(d<c){b=a.p8;b.nc=0;b.nb=b.nt;b.no=(-1);Tm(b,0,1);b=a.ut;b.nc=0;b.nb=b.nt;b.no=(-1);e=Bm.fw(a.oe,d,a.p8,b);f=Bm.ks(a.oe,e);FF(a.v8,e,f);FF(a.Bw,e,FZ(a.ut,0));FF(a.Ch,e,FZ(a.p8,0));a.BN.data[d]=e;d=d+1|0;}}
let XG=a=>{let b,c,d,e,f;b=a.p8;b.nc=0;b.nb=b.nt;b.no=(-1);Bm.fx(a.oe,35721,b);c=FZ(a.p8,0);a.Bd=Bo(M,c);d=0;while(d<c){b=a.p8;b.nc=0;b.nb=b.nt;b.no=(-1);Tm(b,0,1);b=a.ut;b.nc=0;b.nb=b.nt;b.no=(-1);e=Bm.fv(a.oe,d,a.p8,b);f=Bm.kx(a.oe,e);FF(a.qW,e,f);FF(a.BL,e,FZ(a.ut,0));FF(a.Cv,e,FZ(a.p8,0));a.Bd.data[d]=e;d=d+1|0;}}
let ATj=()=>{let b,c,d,e;Mj=1;AEm=B(43);Z3=B(43);ADN=FL(51,0.800000011920929);if(!DO){b=R(1);c=b.data.length;d=new Hb;e=0+c|0;d.no=(-1);d.nt=c;d.nb=c;d.nc=0;d.nb=e;d.s1=0;d.ug=0;d.sA=b;}else{d=new Cx;b=BI(4);d.no=(-1);d.nt=4;d.nb=4;Cd();d.nT=Ch;d.n3=0;d.nQ=b;d.nc=0;d.nb=4;d.oz=1;d.n9=0;d.nT=DD();d=HA(d);}A3R=d;}
let Ll=F(Ma);
let Vo=a=>{let b,c,d,e,f,g,h,i;if(a.ui){b=new Ez;b.m$=1;b.m_=1;D(b);}a:{c=a.nb;d=a.nc;e=c-d|0;if(d>0){f=0;while(true){if(f>=e)break a;c=d+1|0;g=a.sS.data;h=a.s$;i=g[d+h|0];g[f+h|0]=i;f=f+1|0;d=c;}}}a.nc=e;a.nb=a.nt;a.no=(-1);return a;}
function Jw(){let a=this;Ll.call(a);a.ui=0;a.s$=0;a.sS=null;}
function L2(){let a=this;C.call(a);a.wi=null;a.uY=null;a.vp=0.0;a.rp=0.0;a.s6=null;a.sQ=null;a.tK=0;}
let QW=(a,b)=>{let c;if(b!==null){a.s6=b;return a;}c=new Bc;c.m$=1;c.m_=1;c.na=B(465);D(c);}
let AXo=(a,b)=>{return;}
let TP=(a,b)=>{let c;if(b!==null){a.sQ=b;return a;}c=new Bc;c.m$=1;c.m_=1;c.na=B(465);D(c);}
let ANM=(a,b)=>{return;}
let K5=(a,b,c,d)=>{let e,f,g,h,i,j,k,$$je;b:{e=a.tK;if(e!=3){if(d)break b;if(e!=2)break b;}b=new BT;b.m$=1;b.m_=1;D(b);}a.tK=!d?1:2;while(true){try{f=VG(a,b,c);}catch($$e){$$je=BG($$e);if($$je instanceof BL){g=$$je;b=new Ml;b.m$=1;b.m_=1;b.oY=g;D(b);}else{throw $$e;}}e=f.nZ;if(e?0:1){if(!d)return f;e=b.nb-b.nc|0;if(e<=0)return f;f=new Cm;f.nZ=2;f.oa=e;}else if(e!=1?0:1)break;h=!(f.nZ!=3?0:1)?a.s6:a.sQ;p:{Ev();if(h!==E9){if(h===AVb)break p;else return f;}i=c.nb-c.nc|0;j=a.uY;e=j.data.length;if(i<e)return Dq;Ty(c,
j,0,e);}k=b.nc;e=f.nZ;i=e!=2?0:1;if(!(!i&&!(e!=3?0:1)?0:1)){b=new Ha;b.m$=1;b.m_=1;D(b);}B7(b,k+f.oa|0);}return f;}
let Pv=(a,b)=>{let c,d,e,f,g,h,i;c=b.nb-b.nc|0;if(!c){b=new Cx;d=BI(0);b.no=(-1);b.nt=0;b.nb=0;Cd();b.nT=Ch;b.n3=0;b.nQ=d;b.nc=0;b.nb=0;b.oz=0;b.n9=0;return b;}a.tK=0;e=c*a.vp|0;if(e<0){b=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(517));K(f,f.m7,e,10);g=new M;d=f.m8;h=d.data;c=f.m7;P();i=h.length;if(c>=0&&c<=(i-0|0)){g.m9=O(d.data,0,c);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;Bd(b);D(b);}f=new Cx;d=BI(e);f.no=(-1);f.nt=e;f.nb=e;Cd();f.nT=Ch;f.n3=0;f.nQ=d;f.nc=0;f.nb=e;f.oz=0;f.n9=0;while(true){g=K5(a,b,f,0);if(g===DE)break;if
(g===Dq){f=Ob(a,f);continue;}if(!ZT(g))continue;AC3(g);}b=K5(a,b,f,1);c=b.nZ;e=c!=2?0:1;e=!e&&!(c!=3?0:1)?0:1;q:{if(e){switch(c){case 0:b=new Lv;b.m$=1;b.m_=1;D(b);case 1:b=new M7;b.m$=1;b.m_=1;D(b);case 2:f=new MF;e=b.oa;Bd(f);f.z9=e;D(f);case 3:break;default:break q;}f=new Ls;e=b.oa;Cg(f);f.z4=e;D(f);}}while(true){b=NH(a,f);if(b.nZ?0:1)break;if(!AEe(b))continue;f=Ob(a,f);}ADW(f);return f;}
let Ob=(a,b)=>{let c,d,e,f,g,h,i;c=b.nQ.data;d=c.length;e=d*2|0;f=BI(e);if(e<d)d=e;g=f.data;e=0;while(e<d){g[e]=c[e];e=e+1|0;}d=g.length;if(d>=0&&d<=(d-0|0)){h=new Cx;i=0+d|0;h.no=(-1);h.nt=d;h.nb=d;Cd();h.nT=Ch;h.n3=0;h.nQ=f;h.nc=0;h.nb=i;h.oz=0;h.n9=0;B7(h,b.nc);return h;}b=new L;b.m$=1;b.m_=1;D(b);}
let NH=(a,b)=>{let c,d;c=a.tK;if(c!=2&&c!=4){b=new BT;b.m$=1;b.m_=1;D(b);}d=DE;if(d===d)a.tK=3;return d;}
let AQa=(a,b)=>{return DE;}
let AGv=a=>{a.tK=0;return a;}
let ARR=a=>{return;}
function Cm(){let a=this;C.call(a);a.nZ=0;a.oa=0;}
let DE=null;let Dq=null;let AZs=(a,b)=>{let c=new Cm();WJ(c,a,b);return c;}
let WJ=(a,b,c)=>{a.nZ=b;a.oa=c;}
let AEe=a=>{return a.nZ!=1?0:1;}
let ZT=a=>{let b,c;b=a.nZ;c=b!=2?0:1;return !c&&!(b!=3?0:1)?0:1;}
let ABI=b=>{let c;c=new Cm;c.nZ=2;c.oa=b;return c;}
let AC3=a=>{let b,c;switch(a.nZ){case 0:b=new Lv;b.m$=1;b.m_=1;D(b);case 1:b=new M7;b.m$=1;b.m_=1;D(b);case 2:b=new MF;c=a.oa;b.m$=1;b.m_=1;b.z9=c;D(b);case 3:b=new Ls;c=a.oa;b.m$=1;b.m_=1;b.z4=c;D(b);default:}}
let ALf=()=>{let b;b=new Cm;b.nZ=0;b.oa=0;DE=b;b=new Cm;b.nZ=1;b.oa=0;Dq=b;}
function SK(){let a=this;C.call(a);a.yR=0;a.yA=0;a.AM=0;}
let Uh=F();
let AQT=null;let A2Y=()=>{A2Y=Ba(Uh);ATQ();}
let ATQ=()=>{let b,c;P3();b=R((AUs.s()).data.length);c=b.data;AQT=b;c[AHD.nf]=1;c[APU.nf]=2;c[Y4.nf]=3;c[X6.nf]=4;}
let JU=F(0);
function LS(){let a=this;C.call(a);a.qZ=null;a.tc=null;a.BW=0;a.E5=0;a.y0=0;a.vF=0;a.wg=0;}
let APy=(a,b,c)=>{let d=new LS();AA7(d,a,b,c);return d;}
let AA7=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.vF=0;a.wg=0;a.E5=b;a.qZ=d;c=Cu(d.pH/4|0,c);if(!DO){e=Cq(c);f=e.data.length;d=new IL;g=0+f|0;d.no=(-1);d.nt=f;d.nb=f;d.nc=0;d.nb=g;d.ue=0;d.u9=0;d.tO=e;}else{c=c*4|0;if(c<0){d=new Bc;h=new I;h.m8=H(16);Gy(h,h.m7,B(517));K(h,h.m7,c,10);i=new M;e=h.m8;j=e.data;c=h.m7;P();k=j.length;if(c>=0&&c<=(k-0|0)){i.m9=O(e.data,0,c);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;Cg(d);D(d);}h=new Cx;e=BI(c);h.no=(-1);h.nt=c;h.nb=c;Cd();h.nT=Ch;h.n3=0;h.nQ=e;h.nc=0;h.nb=c;h.oz=1;h.n9=0;h.nT=DD();d
=F3(h);}a.tc=d;d.nb=d.nc;d.nc=0;d.no=(-1);d=Bm;h=d.nd.createBuffer();k=d.px;d.px=k+1|0;Ct(d.p$,k,CA(h));a.BW=k;a.y0=!b?35048:35044;}
let AMl=a=>{return a.qZ;}
let ATq=a=>{return a.tc.nb/(a.qZ.pH/4|0)|0;}
let ARz=(a,b,c,d)=>{let e,f,g;a.vF=1;e=a.tc;f=null;g=e instanceof FQ;if(g)f=F3(e);else if(e instanceof E4)f=e;if(f===null){f=new X;f.m$=1;f.m_=1;f.na=B(547);D(f);}f.nc=0;f.nb=f.nt;f.no=(-1);B7(e,0);JR(f,b,c,d);B7(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);B7(a.tc,0);CQ(a.tc,d);if(a.wg){e=Bm;f=a.tc;e.ft(34962,f.nb,f,a.y0);a.vF=0;}}
let ALA=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bm;d.kG(34962,a.BW);if(a.vF){e=a.tc;d.ft(34962,e.nb,e,a.y0);a.vF=0;}a:{f=a.qZ.pm.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.qZ.pm.data[g];j=h[g];if(j>=0){e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.kv(j);k=i.pf;l=i.pA;m=i.pE;n=a.qZ.pH;o=i.q6;e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.ku(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.qZ.pm.data[g];d=i.pv;e=b.qW;p=(-1);j=FR(e,d);if(j>=0)p=e.pS.data[j];if(p>=0){e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW
=0;}e.kv(p);j=i.pf;k=i.pA;l=i.pE;m=a.qZ.pH;n=i.q6;e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.ku(p,j,k,l,m,n);}g=g+1|0;}}a.wg=1;}
let AHW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bm;e=a.qZ.pm.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}h.kH(g);}f=f+1|0;}}i=0;while(i<e){j=a.qZ.pm.data[i].pv;k=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}l=Bm;h=b.qW;g=(-2);f=FR(h,j);if(f>=0)g=h.pS.data[f];if(g==(-2)){g=l.kx(b.oe,j);FF(b.qW,j,g);}if(g!=(-1))k.kH(g);i=i+1|0;}}d.kG(34962,0);a.wg=0;}
let KT=F(0);
function Il(){let a=this;C.call(a);a.q1=null;a.wr=0;a.yK=0;a.rl=0;a.tL=0;a.vf=0;}
let ANr=a=>{return a.q1.nb;}
let AGX=a=>{return a.q1.nt;}
let ARb=(a,b,c,d)=>{let e;a.rl=1;e=a.q1;e.nc=0;e.nb=e.nt;e.no=(-1);Tg(e,b,c,d);e=a.q1;c=e.nc;e.nb=c;e.nc=0;e.no=(-1);if(a.tL){Bm.ft(34963,c,e,a.vf);a.rl=0;}}
let AHF=(a,b)=>{a.rl=a.rl|b;return a.q1;}
let AWr=a=>{let b,c,d;b=a.wr;if(!b){c=new X;c.m$=1;c.m_=1;c.na=B(548);D(c);}Bm.kG(34963,b);if(a.rl){c=Bm;d=a.q1;c.ft(34963,d.nb,d,a.vf);a.rl=0;}a.tL=1;}
let ATG=a=>{Bm.kG(34963,0);a.tL=0;}
function Wk(){let a=this;C.call(a);a.qS=null;a.q5=null;a.rk=null;a.Av=0;a.AN=0;a.DB=0;a.ye=0;a.vi=0;a.wy=0;}
let A4L=(a,b,c)=>{let d=new Wk();AQp(d,a,b,c);return d;}
let AQp=(a,b,c,d)=>{let e,f,g,h,i,j,k;b:{a.vi=0;a.wy=0;a.DB=b;a.qS=d;c=Cu(d.pH,c);if(!DO){e=BI(c);f=e.data.length;if(f>=0&&f<=(f-0|0)){d=new Cx;g=0+f|0;d.no=(-1);d.nt=f;d.nb=f;Cd();d.nT=Ch;d.n3=0;d.nQ=e;d.nc=0;d.nb=g;d.oz=0;d.n9=0;break b;}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}if(c<0){d=new Bc;h=new I;h.m8=H(16);Gy(h,h.m7,B(517));K(h,h.m7,c,10);i=new M;e=h.m8;j=e.data;c=h.m7;P();k=j.length;if(c>=0&&c<=(k-0|0)){i.m9=O(e.data,0,c);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;Cg(d);D(d);}d=new Cx;e=BI(c);d.no=(-1);d.nt=c;d.nb
=c;Cd();d.nT=Ch;d.n3=0;d.nQ=e;d.nc=0;d.nb=c;d.oz=1;d.n9=0;d.nT=DD();}a.rk=d;a.AN=1;a.ye=!b?35048:35044;a.q5=F3(d);d=Bm;h=d.nd.createBuffer();f=d.px;d.px=f+1|0;Ct(d.p$,f,CA(h));Bm.kG(34962,f);Bm.ft(34962,a.rk.nt,null,a.ye);Bm.kG(34962,0);a.Av=f;d=a.q5;d.nb=d.nc;d.nc=0;d.no=(-1);d=a.rk;d.nb=d.nc;d.nc=0;d.no=(-1);}
let AJm=a=>{return a.qS;}
let AKp=a=>{return (a.q5.nb*4|0)/a.qS.pH|0;}
let AIp=(a,b,c,d)=>{let e,f,g;a.vi=1;if(!a.AN){e=a.q5;e.nc=0;e.nb=e.nt;e.no=(-1);JR(e,b,c,d);e=a.q5;e.nb=e.nc;e.nc=0;e.no=(-1);B7(a.rk,0);CQ(a.rk,a.q5.nb<<2);}else{e=a.rk;f=null;g=e instanceof FQ;if(g)f=F3(e);else if(e instanceof E4)f=e;if(f===null){f=new X;f.m$=1;f.m_=1;f.na=B(547);D(f);}f.nc=0;f.nb=f.nt;f.no=(-1);B7(e,0);JR(f,b,c,d);B7(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);B7(a.q5,0);CQ(a.q5,d);}if(a.wy){e=Bm;f=a.rk;e.fu(34962,0,f.nb,f);a.vi=0;}}
let AQ0=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Bm;d.kG(34962,a.Av);if(a.vi){CQ(a.rk,a.q5.nb*4|0);e=a.rk;d.ft(34962,e.nb,e,a.ye);a.vi=0;}a:{f=a.qS.pm.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.qS.pm.data[g];j=h[g];if(j>=0){e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.kv(j);k=i.pf;l=i.pA;m=i.pE;n=a.qS.pH;o=i.q6;e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.ku(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.qS.pm.data[g];p=i.pv;e=b.qW;q=(-1);j=FR(e,p);if(j>=0)q=e.pS.data[j];if(q>=0){e=Bm;if(b.nW)
{CJ(b,b.oF,b.oJ);b.nW=0;}e.kv(q);j=i.pf;k=i.pA;l=i.pE;m=a.qS.pH;n=i.q6;e=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}e.ku(q,j,k,l,m,n);}g=g+1|0;}}a.wy=1;}
let ALB=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;b:{d=Bm;e=a.qS.pm.data.length;if(c!==null){f=0;while(true){if(f>=e)break b;g=c.data[f];if(g>=0){h=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}h.kH(g);}f=f+1|0;}}i=0;while(i<e){j=a.qS.pm.data[i].pv;k=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}l=Bm;h=b.qW;g=(-2);f=FR(h,j);if(f>=0)g=h.pS.data[f];if(g==(-2)){g=l.kx(b.oe,j);FF(b.qW,j,g);}if(g!=(-1))k.kH(g);i=i+1|0;}}d.kG(34962,0);a.wy=0;}
function ZP(){let a=this;C.call(a);a.s9=null;a.ru=null;a.BZ=0;a.El=0;a.ti=0;a.wB=0;a.Ck=0;}
let AXM=(a,b)=>{let c=new ZP();AK$(c,a,b);return c;}
let AK$=(a,b,c)=>{let d,e,f,g,h,i,j,k;b:{a.ti=1;a.wB=0;c=c*2|0;if(!DO){d=BI(c);e=d.data.length;if(e>=0&&e<=(e-0|0)){f=new Cx;g=0+e|0;f.no=(-1);f.nt=e;f.nb=e;Cd();f.nT=Ch;f.n3=0;f.nQ=d;f.nc=0;f.nb=g;f.oz=0;f.n9=0;break b;}f=new L;f.m$=1;f.m_=1;Bj(f);D(f);}if(c<0){f=new Bc;h=new I;h.m8=H(16);Gy(h,h.m7,B(517));K(h,h.m7,c,10);i=new M;d=h.m8;j=d.data;c=h.m7;P();g=j.length;if(c>=0&&c<=(g-0|0)){i.m9=O(d.data,0,c);f.m$=1;f.m_=1;f.na=i;D(f);}f=new L;Cg(f);D(f);}f=new Cx;d=BI(c);f.no=(-1);f.nt=c;f.nb=c;Cd();f.nT=Ch;f.n3
=0;f.nQ=d;f.nc=0;f.nb=c;f.oz=1;f.n9=0;f.nT=DD();}a.ru=f;a.El=1;a.Ck=!b?35048:35044;f=Ky(f);a.s9=f;f.nb=f.nc;f.nc=0;f.no=(-1);f=a.ru;f.nb=f.nc;f.nc=0;f.no=(-1);f=Bm;h=f.nd.createBuffer();k=f.px;f.px=k+1|0;Ct(f.p$,k,CA(h));Bm.kG(34963,k);Bm.ft(34963,a.ru.nt,null,a.Ck);Bm.kG(34963,0);a.BZ=k;}
let AS5=a=>{return a.s9.nb;}
let AGa=a=>{return a.s9.nt;}
let ANS=(a,b,c,d)=>{let e,f;a.ti=1;e=a.s9;e.nc=0;e.nb=e.nt;e.no=(-1);Tg(e,b,c,d);e=a.s9;e.nb=e.nc;e.nc=0;e.no=(-1);B7(a.ru,0);CQ(a.ru,d<<1);if(a.wB){e=Bm;f=a.ru;e.fu(34963,0,f.nb,f);a.ti=0;}}
let AVq=(a,b)=>{a.ti=a.ti|b;return a.s9;}
let AOv=a=>{let b,c,d;b=a.BZ;if(!b){c=new X;c.m$=1;c.m_=1;c.na=B(549);D(c);}Bm.kG(34963,b);if(a.ti){CQ(a.ru,a.s9.nb*2|0);c=Bm;d=a.ru;c.fu(34963,0,d.nb,d);a.ti=0;}a.wB=1;}
let AI1=a=>{Bm.kG(34963,0);a.wB=0;}
function PO(){let a=this;C.call(a);a.rr=null;a.r$=null;a.zz=0;a.E9=0;a.zl=0;a.vt=0;a.xM=0;a.yF=0;a.qH=null;}
let ABh=null;let A0U=()=>{A0U=Ba(PO);AX3();}
let AOM=(a,b,c)=>{let d=new PO();WM(d,a,b,c);return d;}
let WM=(a,b,c,d)=>{let e,f,g,h,i,j;A0U();a.vt=0;a.xM=0;a.yF=(-1);e=new D7;e.pX=1;e.oi=R(16);a.qH=e;a.E9=b;a.rr=d;c=Cu(d.pH/4|0,c);if(!DO){f=Cq(c);g=f.data.length;d=new IL;h=0+g|0;d.no=(-1);d.nt=g;d.nb=g;d.nc=0;d.nb=h;d.ue=0;d.u9=0;d.tO=f;}else{c=c*4|0;if(c<0){d=new Bc;e=new I;e.m8=H(16);Gy(e,e.m7,B(517));K(e,e.m7,c,10);i=new M;f=e.m8;j=f.data;c=e.m7;P();g=j.length;if(c>=0&&c<=(g-0|0)){i.m9=O(f.data,0,c);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;Cg(d);D(d);}e=new Cx;f=BI(c);e.no=(-1);e.nt=c;e.nb=c;Cd();e.nT=Ch;e.n3
=0;e.nQ=f;e.nc=0;e.nb=c;e.oz=1;e.n9=0;e.nT=DD();d=F3(e);}a.r$=d;d.nb=d.nc;d.nc=0;d.no=(-1);d=Bm;e=d.nd.createBuffer();g=d.px;d.px=g+1|0;Ct(d.p$,g,CA(e));a.zz=g;a.zl=!b?35048:35044;d=ABh;d.nc=0;d.nb=d.nt;d.no=(-1);GE.kJ(1,d);d=ABh;c=d.nc;if(c<d.nb){d.nc=c+1|0;a.yF=d.kK(c);return;}d=new II;d.m$=1;d.m_=1;D(d);}
let AH6=a=>{return a.rr;}
let AQ5=a=>{return (a.r$.nb*4|0)/a.rr.pH|0;}
let AIk=(a,b,c,d)=>{let e,f,g;a.vt=1;e=a.r$;f=null;g=e instanceof FQ;if(g)f=F3(e);else if(e instanceof E4)f=e;if(f===null){f=new X;f.m$=1;f.m_=1;f.na=B(547);D(f);}f.nc=0;f.nb=f.nt;f.no=(-1);B7(e,0);JR(f,b,c,d);B7(e,0);if(!g)CQ(e,d);else CQ(e,d<<2);B7(a.r$,0);CQ(a.r$,d);if(a.xM){e=Bm;f=a.r$;e.ft(34962,f.nb,f,a.zl);a.vt=0;}}
let AU5=(a,b,c)=>{let d;d=GE;d.kL(a.yF);ADb(a,b,c);if(a.vt){d.kG(34962,a.zz);b=a.r$;CQ(b,b.nb);b=a.r$;d.ft(34962,b.nb,b,a.zl);a.vt=0;}a.xM=1;}
let ADb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.qH.nR;e=!d?0:1;d:{f=a.rr.pm.data.length;if(e){if(c===null){d=0;c:{while(true){if(!e)break c;if(d>=f)break c;g=a.rr.pm.data[d].pv;h=b.qW;i=(-1);e=FR(h,g);if(e>=0)i=h.pS.data[e];g=a.qH;if(d>=g.nR)break;e=i!=g.oi.data[d]?0:1;d=d+1|0;}h=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,d,10);G(b,b.m7,B(36));d=g.nR;K(b,b.m7,d,10);g=new M;c=b.m8;j=c.data;e=b.m7;P();f=j.length;if(e>=0&&e<=(f-0|0)){g.m9=O(c.data,0,e);h.m$=1;h.m_=1;h.na=g;D(h);}b=new L;Bd(b);D(b);}}else{j=
c.data;e=j.length!=d?0:1;i=0;while(e){if(i>=f)break d;e=j[i]!=GK(a.qH,i)?0:1;i=i+1|0;}}}}bb:{if(!e){Cn.kG(34962,a.zz);if(a.qH.nR){k=a.rr.pm.data.length;d=0;while(d<k){g=a.qH;if(d>=g.nR){h=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,d,10);G(b,b.m7,B(36));d=g.nR;K(b,b.m7,d,10);g=new M;c=b.m8;j=c.data;e=b.m7;P();f=j.length;if(e>=0&&e<=(f-0|0)){g.m9=O(c.data,0,e);h.m$=1;h.m_=1;h.na=g;D(h);}b=new L;Cg(b);D(b);}i=g.oi.data[d];if(i>=0){g=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}g.kH(i);}d=d+1|0;}}a.qH.nR=0;d=0;while
(true){if(d>=f)break bb;l=a.rr.pm.data[d];if(c!==null){j=c.data;FU(a.qH,j[d]);}else{g=a.qH;h=l.pv;FU(g,V_(b.qW,h,(-1)));}k=GK(a.qH,d);if(k>=0){AB8(b,k);AE7(b,k,l.pf,l.pA,l.pE,a.rr.pH,l.q6);}d=d+1|0;}}}}
let AKY=(a,b,c)=>{GE.kL(0);a.xM=0;}
let AX3=()=>{let b,c,d,e;if(!DO){b=R(1);c=b.data.length;d=new Hb;e=0+c|0;d.no=(-1);d.nt=c;d.nb=c;d.nc=0;d.nb=e;d.s1=0;d.ug=0;d.sA=b;}else{d=new Cx;b=BI(4);d.no=(-1);d.nt=4;d.nb=4;Cd();d.nT=Ch;d.n3=0;d.nQ=b;d.nc=0;d.nb=4;d.oz=1;d.n9=0;d.nT=DD();d=HA(d);}ABh=d;}
let Ok=F(LS);
let Pn=F(Il);
function ACz(){let a=this;C.call(a);a.ya=0;a.sp=null;a.pS=null;a.Bc=0.0;a.yy=0;a.xD=0;a.xu=0;}
let JD=(a,b)=>{let c=new ACz();AM5(c,a,b);return c;}
let AM5=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.Bc=c;d=MQ(b,c);a.yy=d*c|0;b=d-1|0;a.xu=b;a.xD=Ft(J(b));a.sp=Bo(C,d);a.pS=R(d);return;}e=new Bc;f=new I;f.m8=H(16);G(f,f.m7,B(60));El(f,f.m7,c);g=new M;h=f.m8;i=h.data;d=f.m7;P();j=i.length;if(d>=0&&d<=(j-0|0)){g.m9=O(h.data,0,d);e.m$=1;e.m_=1;e.na=g;D(e);}f=new L;f.m$=1;f.m_=1;Bj(f);D(f);}
let FR=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bc;c.m$=1;c.m_=1;c.na=B(61);D(c);}a:{d=a.sp;if(!b.n_){e=0;while(true){if(e>=b.m9.length)break a;b.n_=(31*b.n_|0)+b.m9.charCodeAt(e)|0;e=e+1|0;}}}f=T(Y(V(J(b.n_),E(2135587861, 2654435769)),a.xD));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof M))g=0;else{h=b;g=c.m9!==h.m9?0:1;}if(g)break;f=(f+1|0)&a.xu;}return f;}
let FF=(a,b,c)=>{let d,e;d=FR(a,b);if(d>=0){a.pS.data[d]=c;return;}d= -(d+1|0)|0;e=a.sp.data;e[d]=b;a.pS.data[d]=c;c=a.ya+1|0;a.ya=c;if(c>=a.yy)ADM(a,e.length<<1);}
let V_=(a,b,c)=>{let d;d=FR(a,b);if(d>=0)c=a.pS.data[d];return c;}
let ADM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;b:{c=a.sp.data.length;a.yy=b*a.Bc|0;d=b-1|0;a.xu=d;a.xD=Ft(J(d));e=a.sp;f=a.pS;a.sp=Bo(C,b);a.pS=R(b);if(a.ya>0){g=0;while(true){if(g>=c)break b;h=e.data[g];if(h!==null){k:{i=f.data[g];j=a.sp;if(!h.n_){k=0;while(true){if(k>=h.m9.length)break k;h.n_=(31*h.n_|0)+h.m9.charCodeAt(k)|0;k=k+1|0;}}}b=T(Y(V(J(h.n_),E(2135587861, 2654435769)),a.xD));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.xu;}l[b]=h;a.pS.data[b]=i;}g=g+1|0;}}}}
let ACw=F();
let AQ6=b=>{let c,d,e,f,g;if(!DO){c=Cq(b);d=c.data.length;e=new IL;f=0+d|0;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=f;e.ue=0;e.u9=0;e.tO=c;return e;}b=b*4|0;if(b>=0){e=new Cx;c=BI(b);e.no=(-1);e.nt=b;e.nb=b;Cd();e.nT=Ch;e.n3=0;e.nQ=c;e.nc=0;e.nb=b;e.oz=1;e.n9=0;e.nT=DD();return F3(e);}e=new Bc;g=new I;g.m8=H(16);G(g,g.m7,B(517));K(g,g.m7,b,10);g=W(g);e.m$=1;e.m_=1;e.na=g;D(e);}
let EY=F(0);
function Cx(){let a=this;FQ.call(a);a.oz=0;a.n9=0;}
let Up=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.nb)return a.nQ.data[a.n3+b|0];c=new L;d=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(550));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);f=e.m8;g=f.data;g[d]=41;h=new M;d=e.m7;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.m9=O(f.data,0,d);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AAq=a=>{let b,c,d,e,f,g,h,i,j;if(a.n9){b=new Ez;b.m$=1;b.m_=1;D(b);}a:{c=a.nb;d=a.nc;e=c-d|0;if(d>0){c=a.n3;f=c+d|0;g=0;while(true){if(g>=e)break a;h=a.nQ.data;i=c+1|0;j=f+1|0;h[c]=h[f];g=g+1|0;c=i;f=j;}}}a.nc=e;a.nb=a.nt;a.no=(-1);return a;}
let Ky=a=>{let b,c,d,e,f,g;b=a.nb;c=a.nc;d=(b-c|0)/2|0;e=a.nT;Cd();if(e!==Ch){e=new NX;f=a.n3+c|0;c=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.tT=f;e.r9=a;e.yE=c;return e;}e=new PA;b=a.n3+c|0;g=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.tT=b;e.r9=a;e.yE=g;return e;}
let ADC=(a,b)=>{let c,d,e,f,g,h,i,j,k;if(b>=0&&(b+3|0)<a.nb){c=a.nQ.data;b=a.n3+b|0;d=c[b]&255;e=c[b+1|0]&255;f=c[b+2|0]&255;g=c[b+3|0]&255;h=a.nT;Cd();if(h!==Ch)return g<<24|f<<16|e<<8|d;return d<<24|e<<16|f<<8|g;}h=new L;d=a.nb-3|0;i=new I;i.m8=H(16);G(i,i.m7,B(550));K(i,i.m7,b,10);G(i,i.m7,B(523));K(i,i.m7,d,10);d=i.m7;Bh(i,d,d+1|0);c=i.m8;j=c.data;j[d]=41;k=new M;d=i.m7;P();e=j.length;if(d>=0&&d<=(e-0|0)){k.m9=O(c.data,0,d);h.m$=1;h.m_=1;h.na=k;D(h);}h=new L;h.m$=1;h.m_=1;Bj(h);D(h);}
let XZ=(a,b,c)=>{let d,e,f;if(a.n9){d=new Ez;d.m$=1;d.m_=1;D(d);}if(b>=0&&(b+3|0)<a.nb){d=a.nT;Cd();if(d!==Ch){e=a.nQ.data;b=a.n3+b|0;e[b]=c<<24>>24;e[b+1|0]=c>>8<<24>>24;e[b+2|0]=c>>16<<24>>24;e[b+3|0]=c>>24<<24>>24;}else{e=a.nQ.data;b=a.n3+b|0;e[b]=c>>24<<24>>24;e[b+1|0]=c>>16<<24>>24;e[b+2|0]=c>>8<<24>>24;e[b+3|0]=c<<24>>24;}return a;}d=new L;c=a.nb-3|0;f=new I;f.m8=H(16);G(f,f.m7,B(550));K(f,f.m7,b,10);G(f,f.m7,B(523));K(f,f.m7,c,10);c=f.m7;Bh(f,c,c+1|0);f.m8.data[c]=41;f=W(f);d.m$=1;d.m_=1;d.na=f;D(d);}
let HA=a=>{let b,c,d,e,f,g;b=a.nb;c=a.nc;d=(b-c|0)/4|0;e=a.nT;Cd();if(e!==Ch){e=new Oi;f=a.n3+c|0;c=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.tA=f;e.tz=a;e.zb=c;return e;}e=new Rp;b=a.n3+c|0;g=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.tA=b;e.tz=a;e.zb=g;return e;}
let F3=a=>{let b,c,d,e,f,g;b=a.nb;c=a.nc;d=(b-c|0)/4|0;e=a.nT;Cd();if(e!==AE_){e=new N9;f=a.n3+c|0;c=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.to=f;e.se=a;e.z7=c;return e;}e=new P$;b=a.n3+c|0;g=a.n9;e.no=(-1);e.nt=d;e.nb=d;e.nc=0;e.nb=d;e.to=b;e.se=a;e.z7=g;return e;}
let AYo=a=>{return a.nQ.data;}
let KV=F();
let HP=F(EP);
let ATY=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
let AF9=(a,b)=>{B7(a,b);return a;}
let AQU=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
function Hc(){C.call(this);this.Cd=null;}
let Ch=null;let AE_=null;let AAn=null;let Cd=()=>{Cd=Ba(Hc);AX4();}
let DD=()=>{let b,c;Cd();if(AAn===null){b=new ArrayBuffer(2);c=new Int16Array(b);0;c[0]=1;AAn=(new Int8Array(b))[0]?AE_:Ch;}return AAn;}
let AX4=()=>{let b;b=new Hc;Cd();b.Cd=B(551);Ch=b;b=new Hc;b.Cd=B(552);AE_=b;}
let E4=F(EP);
let JR=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.kQ()){e=new Ez;e.m$=1;e.m_=1;D(e);}f=a.nb;g=a.nc;if((f-g|0)<d){e=new Gu;e.m$=1;e.m_=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.kR(g,h[c]);i=i+1|0;g=j;c=f;}a.nc=a.nc+d|0;return a;}e=new L;k=new I;k.m8=H(16);G(k,k.m7,B(527));K(k,k.m7,d,10);G(k,k.m7,B(528));Jx(e,W(k));D(e);}e=new L;k=new I;k.m8=H(16);G(k,k.m7,B(553));K(k,k.m7,i,10);G(k,k.m7,B(526));K(k,k.m7,f,10);l=new M;b=k.m8;h=b.data;d=k.m7;P();f=h.length;if
(d>=0&&d<=(f-0|0)){l.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=l;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}}b=b.data;e=new L;d=b.length;k=new I;k.m8=H(16);G(k,k.m7,B(529));K(k,k.m7,c,10);G(k,k.m7,B(523));K(k,k.m7,d,10);d=k.m7;Bh(k,d,d+1|0);b=k.m8;h=b.data;h[d]=41;l=new M;d=k.m7;P();f=h.length;if(d>=0&&d<=(f-0|0)){l.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=l;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
let APX=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
let AIu=a=>{a.nb=a.nc;a.nc=0;a.no=(-1);return a;}
let AMB=(a,b)=>{CQ(a,b);return a;}
let ARf=(a,b)=>{B7(a,b);return a;}
let AMX=a=>{a.nb=a.nc;a.nc=0;a.no=(-1);return a;}
let AX7=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
let ASs=(a,b)=>{CQ(a,b);return a;}
let AWT=(a,b)=>{B7(a,b);return a;}
let YX=F();
let HT=F(EP);
let Tg=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.kQ()){e=new Ez;e.m$=1;e.m_=1;D(e);}f=a.nb;g=a.nc;if((f-g|0)<d){e=new Gu;e.m$=1;e.m_=1;D(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i<=f){if(d>=0){i=0;while(i<d){j=g+1|0;f=c+1|0;a.kS(g,h[c]);i=i+1|0;g=j;c=f;}a.nc=a.nc+d|0;return a;}e=new L;k=new I;k.m8=H(16);G(k,k.m7,B(527));K(k,k.m7,d,10);G(k,k.m7,B(528));Jx(e,CD(k));D(e);}e=new L;k=new I;k.m8=H(16);G(k,k.m7,B(554));K(k,k.m7,i,10);G(k,k.m7,B(526));K(k,k.m7,f,10);l=new M;b=k.m8;h=b.data;d=k.m7;P();f=h.length;if
(d>=0&&d<=(f-0|0)){l.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=l;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}}b=b.data;e=new L;d=b.length;k=new I;k.m8=H(16);G(k,k.m7,B(529));K(k,k.m7,c,10);G(k,k.m7,B(523));K(k,k.m7,d,10);d=k.m7;Bh(k,d,d+1|0);b=k.m8;h=b.data;h[d]=41;l=new M;d=k.m7;P();f=h.length;if(d>=0&&d<=(f-0|0)){l.m9=O(b.data,0,d);e.m$=1;e.m_=1;e.na=l;D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
let AWq=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
let AEo=a=>{a.nb=a.nc;a.nc=0;a.no=(-1);return a;}
let ATs=(a,b)=>{CQ(a,b);return a;}
let AT8=(a,b)=>{B7(a,b);return a;}
let AVr=a=>{a.nb=a.nc;a.nc=0;a.no=(-1);return a;}
let AXK=a=>{a.nc=0;a.nb=a.nt;a.no=(-1);return a;}
let AP6=(a,b)=>{CQ(a,b);return a;}
let AG1=(a,b)=>{B7(a,b);return a;}
let AAO=F();
let RA=F(0);
function Lh(){let a=this;C.call(a);a.Bi=null;a.rK=0;a.rz=0;a.tC=null;a.ul=null;a.BT=0;a.sX=0;}
let A4w=0;let A1I=(a,b,c,d)=>{let e=new Lh();AJ1(e,a,b,c,d);return e;}
let AJ1=(a,b,c,d,e)=>{a.rK=0;a.rz=0;a.sX=0;a.Bi=b;a.ul=c;a.tC=d;a.BT=e;if(c!==null){b=SQ(a,c);a.ul=b;c=b.od;a.rK=c===null?b.pn:c.pd;a.rz=c===null?b.pq:c.pb;if(d===null){if(c===null){HU();b=Ie;}else b=IT(c.oC);a.tC=b;}}}
let O2=a=>{let b,c;if(a.sX){b=new X;b.m$=1;b.m_=1;b.na=B(555);D(b);}if(a.ul===null){b=SQ(a,AS7(a.Bi));a.ul=b;c=b.od;a.rK=c===null?b.pn:c.pd;a.rz=c===null?b.pq:c.pb;if(a.tC===null){if(c===null){HU();b=Ie;}else b=IT(c.oC);a.tC=b;}}a.sX=1;}
let SQ=(a,b)=>{let c,d,e,f,g,h,i,j;b:{if(Bm===null&&A4w){c=b.od;d=c===null?b.pn:c.pd;e=c===null?b.pq:c.pb;f=Lt(d);g=Lt(e);if(d!=f)break b;if(e!=g)break b;}return b;}h=new Is;c=b.od;if(c===null){HU();c=Ie;}else c=IT(c.oC);Kj(h,f,g,c);c=h.od;if(c===null){F4(b);KE(h,b.ri,0,0,d,e,0,0,d,e);}else{i=b.od.oW;j=c.oW;M2(i,j,0,0,d,e,0,0,d,e);}if(b.tN){c=new X;c.m$=1;c.m_=1;c.na=B(48);D(c);}J1();IQ(J$,b.uM);c=b.od;if(c!==null)MV(c.oW);b.tN=1;return h;}
function Is(){let a=this;C.call(a);a.pn=0;a.pq=0;a.ri=null;a.oN=null;a.uM=0;a.vM=null;a.CX=0;a.CZ=0;a.C1=0;a.C0=0.0;a.wZ=null;a.u7=null;a.CI=null;a.EW=null;a.tB=null;a.uE=null;a.AP=0;a.od=null;a.tN=0;}
let Ya=null;let Rf=()=>{Rf=Ba(Is);AOO();}
let AS7=a=>{let b=new Is();UV(b,a);return b;}
let A7m=(a,b,c)=>{let d=new Is();Kj(d,a,b,c);return d;}
let UV=(a,b)=>{let c,d,e,f,g;Rf();a.CX=255;a.CZ=255;a.C1=255;a.wZ=Mr(255,255,255,a.C0);Kh();a.u7=Vr;AB1();a.CI=ACk;a.AP=0;c=b.pc;d=b.up.u8;e=CR(d,c);d=e<0?null:d.o_.data[e];if(ED.qi.zC){f=ASB(d.pO);a.od=A2m(f,0,f.data.length,0);KJ(a,(-1),(-1),null,null);}else{KJ(a,(-1),(-1),d.zD,null);if(a.tB===null){d=new X;g=b.pc;b=new I;b.m8=H(16);G(b,b.m7,B(556));e=b.m7;if(g===null)g=B(2);G(b,e,g);G(b,b.m7,B(557));b=W(b);d.m$=1;d.m_=1;d.na=b;D(d);}}}
let Kj=(a,b,c,d)=>{Rf();a.CX=255;a.CZ=255;a.C1=255;a.wZ=Mr(255,255,255,a.C0);Kh();a.u7=Vr;AB1();a.CI=ACk;a.AP=0;KJ(a,b,c,null,null);}
let KJ=(a,b,c,d,e)=>{let f,g;if(e!==null){a.uE=e;a.pn=e.getWidth();a.pq=e.getHeight();}else if(d===null){a.pn=b;a.pq=c;}else{a.tB=d;a.pn=d.width;a.pq=d.height;}if(DO){d=new Cx;f=BI(4);d.no=(-1);d.nt=4;d.nb=4;Cd();d.nT=Ch;d.n3=0;d.nQ=f;d.nc=0;d.nb=4;d.oz=1;d.n9=0;d.nT=DD();}else{f=BI(4);c=f.data.length;if(c>=0&&c<=(c-0|0)){d=new Cx;g=0+c|0;d.no=(-1);d.nt=c;d.nb=c;Cd();d.nT=Ch;d.n3=0;d.nQ=f;d.nc=0;d.nb=g;d.oz=0;d.n9=0;}else{d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}}a.vM=d;J1();c=AEB;AEB=c+1|0;a.uM=c;XZ(d,0,c);Ct(J$,
a.uM,a);}
let Y3=a=>{let b,c;Ju();b=Jc.qj.document.createElement("canvas");a.ri=b;c=a.pn;b.width=c;b=a.ri;c=a.pq;b.height=c;b=a.ri.getContext("2d");a.oN=b;Rf();HK();c=B0(HD.ni);b.globalCompositeOperation=c;}
let Mr=(b,c,d,e)=>{let f;Rf();f=new I;f.m8=H(16);G(f,f.m7,B(558));K(f,f.m7,b,10);b=f.m7;Bh(f,b,b+1|0);f.m8.data[b]=44;K(f,f.m7,c,10);b=f.m7;Bh(f,b,b+1|0);f.m8.data[b]=44;K(f,f.m7,d,10);c=f.m7;Bh(f,c,c+1|0);f.m8.data[c]=44;El(f,f.m7,e);d=f.m7;Bh(f,d,d+1|0);f.m8.data[d]=41;return W(f);}
let F4=a=>{let b,c;if(a.ri===null){Y3(a);if(a.tB!==null){b=a.oN;HK();c=B0(YF.pu);b.globalCompositeOperation=c;b=a.oN;c=a.tB;b.drawImage(c,0.0,0.0);b=a.oN;c=B0(HD.pu);b.globalCompositeOperation=c;}if(a.uE!==null){c=a.oN;HK();b=B0(YF.pu);c.globalCompositeOperation=b;b=a.oN;c=a.uE;b.drawImage(c,0.0,0.0);b=a.oN;c=B0(HD.pu);b.globalCompositeOperation=c;}}}
let ACg=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m;k=a.od;if(k===null){F4(b);KE(a,b.ri,c,d,e,f,g,h,i,j);}else{l=b.od.oW;m=k.oW;M2(l,m,c,d,e,f,g,h,i,j);}}
let LB=a=>{let b;b=a.od;if(b===null)return a.pn;return b.pd;}
let L6=a=>{let b;b=a.od;if(b===null)return a.pq;return b.pb;}
let OP=a=>{let b,c;if(a.tN){b=new X;b.m$=1;b.m_=1;b.na=B(48);D(b);}J1();IQ(J$,a.uM);c=a.od;if(c!==null)MV(c.oW);a.tN=1;}
let AAX=a=>{let b,c,d;b=a.od;if(b===null)return 6408;d:{c=b.oC;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new X;d=new I;d.m8=H(16);Dm(d,d.m7,Dp(B(49)));K(d,d.m7,c,10);d=W(d);b.m$=1;b.m_=1;b.na=d;D(b);}c=6406;}return c;}
let Zd=a=>{let b,c,d;b=a.od;if(b===null)return 6408;d:{c=b.oC;switch(c){case 1:break;case 2:c=6410;break d;case 3:case 5:c=6407;break d;case 4:case 6:c=6408;break d;default:b=new X;d=new I;d.m8=H(16);G(d,d.m7,B(49));K(d,d.m7,c,10);d=W(d);b.m$=1;b.m_=1;b.na=d;D(b);}c=6406;}return c;}
let SP=a=>{let b,c,d;b=a.od;if(b===null)return 5121;d:{c=b.oC;switch(c){case 1:case 2:case 3:case 4:break;case 5:c=33635;break d;case 6:c=32819;break d;default:b=new X;d=new I;d.m8=H(16);G(d,d.m7,B(49));K(d,d.m7,c,10);d=W(d);b.m$=1;b.m_=1;b.na=d;D(b);}c=5121;}return c;}
let SH=a=>{return a.vM;}
let KE=(a,b,c,d,e,f,g,h,i,j)=>{let k,l,m,n,o,p,q,r,s,t,u,v;F4(a);k=a.u7;Kh();if(k===QU){a:{l=a.oN;k=B0(Ya);l.fillStyle=k;l=a.oN;k=B0(Ya);l.strokeStyle=k;l=a.oN;k="destination-out";l.globalCompositeOperation=k;a.oN.beginPath();m=a.oN;n=g;o=h;p=i;q=j;m.rect(n,o,p,q);Y_();l=X4;F4(a);A1b();switch(AFN.data[l.nf]){case 1:break;case 2:a.oN.stroke();break a;default:break a;}a.oN.fill();}a.oN.closePath();r=a.oN;l=B0(a.wZ);r.fillStyle=l;r=a.oN;k=B0(a.wZ);r.strokeStyle=k;r=a.oN;HK();l=B0(HD.pu);r.globalCompositeOperation
=l;}if(e&&f&&i&&j){l=a.oN;n=c;o=d;p=e;q=f;s=g;t=h;u=i;v=j;l.drawImage(b,n,o,p,q,s,t,u,v);}a.EW=null;}
let AOO=()=>{Ya=Mr(255,255,255,1.0);}
let Id=F(HP);
let AVw=a=>{let b,c;b=a.nc;if(b<a.nb){a.nc=b+1|0;return a.kK(b);}c=new II;c.m$=1;c.m_=1;D(c);}
let E0=(a,b)=>{let c,d;if(a.kQ()){c=new Ez;c.m$=1;c.m_=1;D(c);}d=a.nc;if(d<a.nb){a.nc=d+1|0;a.kZ(d,b);return a;}c=new Gu;c.m$=1;c.m_=1;D(c);}
let FZ=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.nb)return a.kK(b);c=new L;d=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(550));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);f=e.m8;g=f.data;g[d]=41;h=new M;d=e.m7;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.m9=O(f.data,0,d);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let Tm=(a,b,c)=>{let d,e,f,g,h,i;if(a.kQ()){d=new Ez;d.m$=1;d.m_=1;D(d);}if(b>=0&&b<a.nb){a.kZ(b,c);return a;}d=new L;c=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(550));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,c,10);c=e.m7;Bh(e,c,c+1|0);f=e.m8;g=f.data;g[c]=41;h=new M;c=e.m7;P();i=g.length;if(c>=0&&c<=(i-0|0)){h.m9=O(f.data,0,c);d.m$=1;d.m_=1;d.na=h;D(d);}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}
let APl=a=>{return a.kQ();}
function Hb(){let a=this;Id.call(a);a.ug=0;a.s1=0;a.sA=null;}
let ARt=(a,b)=>{return a.sA.data[b+a.s1|0];}
let APB=(a,b,c)=>{a.sA.data[b+a.s1|0]=c;}
let AFZ=a=>{return a.ug;}
let H3=F(E4);
let Qw=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.nb)return a.k0(b);c=new L;d=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(550));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);f=e.m8;g=f.data;g[d]=41;h=new M;d=e.m7;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.m9=O(f.data,0,d);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let M_=(a,b,c)=>{let d,e,f,g,h,i,j;if(a.kQ()){d=new Ez;d.m$=1;d.m_=1;D(d);}if(b>=0&&b<a.nb){a.kR(b,c);return a;}d=new L;e=a.nb;f=new I;f.m8=H(16);G(f,f.m7,B(550));K(f,f.m7,b,10);G(f,f.m7,B(523));K(f,f.m7,e,10);e=f.m7;Bh(f,e,e+1|0);g=f.m8;h=g.data;h[e]=41;i=new M;e=f.m7;P();j=h.length;if(e>=0&&e<=(j-0|0)){i.m9=O(g.data,0,e);d.m$=1;d.m_=1;d.na=i;D(d);}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}
let AKD=a=>{return a.kQ();}
function IL(){let a=this;H3.call(a);a.u9=0;a.ue=0;a.tO=null;}
let ASI=(a,b)=>{return a.tO.data[b+a.ue|0];}
let ARE=(a,b,c)=>{a.tO.data[b+a.ue|0]=c;}
let ARS=a=>{return a.u9;}
let GM=F(BH);
let QU=null;let Vr=null;let A2o=null;let Kh=()=>{Kh=Ba(GM);AMG();}
let AMG=()=>{let b,c;b=new GM;Kh();b.ni=B(559);b.nf=0;QU=b;c=new GM;c.ni=B(560);c.nf=1;Vr=c;A2o=N(GM,[b,c]);}
let Gb=F(BH);
let AYV=null;let ACk=null;let A3Z=null;let AB1=()=>{AB1=Ba(Gb);AUk();}
let AUk=()=>{let b,c;b=new Gb;AB1();b.ni=B(561);b.nf=0;AYV=b;c=new Gb;c.ni=B(562);c.nf=1;ACk=c;A3Z=N(Gb,[b,c]);}
function Kf(){let a=this;KV.call(a);a.up=null;a.pc=null;a.uH=null;}
let ASO=(a,b,c)=>{let d=new Kf();Lw(d,a,b,c);return d;}
let Lw=(a,b,c,d)=>{Md();if(d!==TT&&d!==AMd&&d!==ABp){b=new X;c=new I;c.m8=H(16);G(c,c.m7,B(563));G(c,c.m7,d===null?B(2):d.ni);G(c,c.m7,B(564));c=W(c);b.m$=1;b.m_=1;b.na=c;D(b);}a.up=b;b=MD(c,B(565),B(105));if(PE(b,B(105)))b=B1(b,0,b.m9.length-1|0);a.pc=b;a.uH=d;}
let Uz=a=>{return a.pc;}
let AER=a=>{let b,c,d;b=a.pc;c=Gh(b,47,b.m9.length-1|0);if(c<0)b=a.pc;else{b=a.pc;b=B1(b,c+1|0,b.m9.length);}d=Gh(b,46,b.m9.length-1|0);if(d==(-1))return b;return B1(b,0,d);}
let ABl=a=>{let b,c,d,e,f;b=a.uH;Md();if(b===ABp){if(LD===null){c=new N6;b=new Ka;d=new P_;e=ED.qi.C_;d.yC=window.localStorage;d.yi=e;A2i();b.tM=d;c.Bu=b;b=new Ka;d=new RC;e=new Cf;e.og=1;e.np=Bo(C,16);d.Bz=e;d.zS=FL(16,0.800000011920929);b.tM=d;c.yG=b;LD=c;}b=LD;return !ADS(b.yG,a)?Tr(b.Bu,a):Tr(b.yG,a);}c=V8(a.up,a.pc);if(c!==null)return c;c=new X;b=a.pc;d=new I;d.m8=H(16);f=d.m7;if(b===null)b=B(2);G(d,f,b);G(d,d.m7,B(566));b=W(d);c.m$=1;c.m_=1;c.na=b;D(c);}
let Uw=(a,b)=>{let c,d,e,f,g,h;c=new Kf;d=a.up;if(a.pc.m9.length?0:1)e=B(43);else{e=a.pc;f=!PE(e,B(105))?B(105):B(43);g=new I;g.m8=H(16);G(g,g.m7,e);G(g,g.m7,f);e=W(g);}g=new I;g.m8=H(16);h=g.m7;if(e===null)e=B(2);G(g,h,e);h=g.m7;if(b===null)b=B(2);G(g,h,b);Lw(c,d,W(g),a.uH);return c;}
let UG=a=>{let b,c,d;b=a.pc;c=Py(b,B(105),b.m9.length);d=B(43);if(c>0)d=B1(a.pc,0,c);return ASO(a.up,d,a.uH);}
let AX5=a=>{return a.pc;}
function ZX(){let a=this;C.call(a);a.oW=0;a.pd=0;a.pb=0;a.oC=0;a.t_=null;a.vQ=null;}
let A2m=(a,b,c,d)=>{let e=new ZX();AJ5(e,a,b,c,d);return e;}
let A0M=(a,b,c)=>{let d=new ZX();AX_(d,a,b,c);return d;}
let AJ5=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=R(4);a.t_=f;g=f.data;if(b===null)h=null;else{b=b.data;i=b.length;h=new Array(i);j=0;while(j<i){k=b[j];j;h[j]=k;j=j+1|0;}}a.vQ=AVj(g,h,c,d);b=a.t_.data;a.oW=b[0];a.pd=b[1];a.pb=b[2];c=b[3];a.oC=c;if(e&&e!=c)Wl(a,e);}
let AX_=(a,b,c,d)=>{let e;e=R(4);a.t_=e;a.vQ=ATx(e.data,b,c,d);e=a.t_.data;a.oW=e[0];a.pd=e[1];a.pb=e[2];a.oC=e[3];}
let Wl=(a,b)=>{let c,d,e,f,g;c=A0M(a.pd,a.pb,b);R0(c.oW,0);d=a.pd;e=a.pb;f=a.oW;g=c.oW;M2(f,g,0,0,d,e,0,0,d,e);MV(a.oW);a.oW=c.oW;a.oC=c.oC;a.pb=c.pb;a.t_=c.t_;a.vQ=c.vQ;a.pd=c.pd;}
let AVj=(b,c,d,e)=>{var cBufferSize=c.length*Uint8Array.BYTES_PER_ELEMENT;var cBuffer=Gdx._malloc(cBufferSize);Gdx.writeArrayToMemory(c,cBuffer);var pixmap=Gdx.Gdx.prototype.g2d_load(cBuffer,d,e);Gdx._free(cBuffer);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var format=pixmap.get_format();var width=pixmap.get_width();var height=pixmap.get_height();b[0]=pixmapAddr;b[1]=width;b[2]=height;b[3]=format;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(format);var bytesSize
=width*height*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let ATx=(b,c,d,e)=>{var pixmap=Gdx.Gdx.prototype.g2d_new(c,d,e);var pixels=Gdx.Gdx.prototype.g2d_get_pixels(pixmap);var pixmapAddr=Gdx.getPointer(pixmap);var e=pixmap.get_format();var c=pixmap.get_width();var d=pixmap.get_height();b[0]=pixmapAddr;b[1]=c;b[2]=d;b[3]=e;var bytesPerPixel=Gdx.Gdx.prototype.g2d_bytes_per_pixel(e);var bytesSize=c*d*bytesPerPixel;var startIndex=pixels;var endIndex=startIndex+bytesSize;var newArray=Gdx.HEAPU8.slice(startIndex,endIndex);return newArray;}
let MV=b=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_free(nativeObject);}
let M2=(b,c,d,e,f,g,h,i,j,k)=>{var nativeObjectSrc=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);var nativeObjectDst=Gdx.wrapPointer(c,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_draw_pixmap(nativeObjectSrc,nativeObjectDst,d,e,f,g,h,i,j,k);}
let R0=(b,c)=>{var nativeObject=Gdx.wrapPointer(b,Gdx.gdx2d_pixmap);Gdx.Gdx.prototype.g2d_set_blend(nativeObject,c);}
let IK=F(HT);
let ACx=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.nb)return a.k9(b);c=new L;d=a.nb;e=new I;e.m8=H(16);G(e,e.m7,B(550));K(e,e.m7,b,10);G(e,e.m7,B(523));K(e,e.m7,d,10);d=e.m7;Bh(e,d,d+1|0);f=e.m8;g=f.data;g[d]=41;h=new M;d=e.m7;P();i=g.length;if(d>=0&&d<=(i-0|0)){h.m9=O(f.data,0,d);c.m$=1;c.m_=1;c.na=h;D(c);}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let AOH=a=>{return a.kQ();}
function Km(){let a=this;IK.call(a);a.v_=0;a.vx=0;a.uW=null;}
let AMc=(a,b)=>{return a.uW.data[b+a.vx|0];}
let AN_=(a,b,c)=>{a.uW.data[b+a.vx|0]=c;}
let AKv=a=>{return a.v_;}
let ABi=F();
function Dx(){BH.call(this);this.rd=0;}
let APE=null;let A2j=null;let A25=null;let A1Z=null;let A2X=null;let A4K=null;let A0$=null;let A1g=null;let AJX=()=>{AJX=Ba(Dx);AIH();}
let AIH=()=>{let b,c,d,e,f,g,h;b=new Dx;AJX();b.ni=B(567);b.nf=0;b.rd=9728;APE=b;c=new Dx;c.ni=B(568);c.nf=1;c.rd=9729;A2j=c;d=new Dx;d.ni=B(569);d.nf=2;d.rd=9987;A25=d;e=new Dx;e.ni=B(570);e.nf=3;e.rd=9984;A1Z=e;f=new Dx;f.ni=B(571);f.nf=4;f.rd=9985;A2X=f;g=new Dx;g.ni=B(572);g.nf=5;g.rd=9986;A4K=g;h=new Dx;h.ni=B(573);h.nf=6;h.rd=9987;A0$=h;A1g=N(Dx,[b,c,d,e,f,g,h]);}
function FG(){BH.call(this);this.v2=0;}
let A4g=null;let ATI=null;let A2p=null;let A4r=null;let AF3=()=>{AF3=Ba(FG);ANw();}
let ANw=()=>{let b,c,d;b=new FG;AF3();b.ni=B(574);b.nf=0;b.v2=33648;A4g=b;c=new FG;c.ni=B(575);c.nf=1;c.v2=33071;ATI=c;d=new FG;d.ni=B(576);d.nf=2;d.v2=10497;A2p=d;A4r=N(FG,[b,c,d]);}
let XN=F();
let AXU=(a,b)=>{b=a.bp(b);BE();return b===null?null:b instanceof Hp()&&b instanceof D9?b.nJ:b;}
let AJt=a=>{return a.fM();}
function H6(){let a=this;H3.call(a);a.se=null;a.z7=0;a.to=0;}
let AR5=a=>{return a.z7;}
let ATc=a=>{return a.se.nQ.data;}
let N9=F(H6);
let AO$=(a,b)=>{let c;c=a.se.nQ.data;b=a.to+(b*4|0)|0;return H5((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);}
let AS9=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H7(c);e=a.se.nQ.data;b=a.to+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;}
let P$=F(H6);
let AGb=(a,b)=>{let c;c=a.se.nQ.data;b=a.to+(b*4|0)|0;return H5(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);}
let AOY=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:H7(c);e=a.se.nQ.data;b=a.to+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;}
function HN(){let a=this;IK.call(a);a.r9=null;a.yE=0;a.tT=0;}
let ANf=a=>{return a.yE;}
let ATF=a=>{return a.r9.nQ.data;}
let NX=F(HN);
let AKg=(a,b)=>{let c;c=a.r9.nQ.data;b=a.tT+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;}
let AJo=(a,b,c)=>{let d;d=a.r9.nQ.data;b=a.tT+(b*2|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;}
let PA=F(HN);
let ARk=(a,b)=>{let c;c=a.r9.nQ.data;b=a.tT+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;}
let AKj=(a,b,c)=>{let d;d=a.r9.nQ.data;b=a.tT+(b*2|0)|0;d[b]=c>>8<<24>>24;d[b+1|0]=c<<24>>24;}
let Ha=F(BL);
let Ez=F(Ha);
function IG(){let a=this;Id.call(a);a.tz=null;a.zb=0;a.tA=0;}
let AO2=a=>{return a.zb;}
let Oi=F(IG);
let AL$=(a,b)=>{let c;c=a.tz.nQ.data;b=a.tA+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;}
let AFY=(a,b,c)=>{let d;d=a.tz.nQ.data;b=a.tA+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;}
let Rp=F(IG);
let AU3=(a,b)=>{let c;c=a.tz.nQ.data;b=a.tA+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;}
let AHX=(a,b,c)=>{let d;d=a.tz.nQ.data;b=a.tA+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;}
let II=F(BL);
let Ea=F(BH);
let AMd=null;let TT=null;let A2e=null;let A0L=null;let ABp=null;let A3w=null;let Md=()=>{Md=Ba(Ea);ALn();}
let ALn=()=>{let b,c,d,e,f;b=new Ea;Md();b.ni=B(577);b.nf=0;AMd=b;c=new Ea;c.ni=B(578);c.nf=1;TT=c;d=new Ea;d.ni=B(579);d.nf=2;A2e=d;e=new Ea;e.ni=B(580);e.nf=3;A0L=e;f=new Ea;f.ni=B(581);f.nf=4;ABp=f;A3w=N(Ea,[b,c,d,e,f]);}
function Fp(){let a=this;L2.call(a);a.uP=null;a.uC=null;}
let VG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=a.uP;e=0;f=0;g=a.uC;b:{while(true){if((e+32|0)>f){h=b.nc;i=b.nb;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;N$(b,d,j,f-j|0);e=0;}}j=c.nc;m=c.nb;if(!(j>=m?0:1)){j=b.nc>=b.nb?0:1;n=!j&&e>=f?DE:Dq;break b;}k=g.data;h=m-j|0;m=k.length;if(h<m)m=h;o=new Oc;o.tr=b;o.q$=c;n=a.k_(d,e,f,g,0,m,o);e=o.t8;l=o.uh;if(n===null){j=b.nc>=b.nb?0:1;if(!j&&e>=f)n=DE;else if(!(c.nc>=c.nb?0:1)&&e>=f)n=Dq;}Ty(c,g,0,l);if
(n!==null)break;}}B7(b,b.nc-(f-e|0)|0);return n;}
let Pi=F(Fp);
let AOS=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;n=h.q$;if((n.nb-n.nc|0)<2?0:1)break b;i=Dq;break b;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{o=l&64512;m=BS(o,55296);c=m?0:1;if(!(!c&&!(o!=56320?0:1)?0:1)){if((f+3|0)>g){j=j+(-1)|0;n=h.q$;if((n.nb-n.nc|0)<3?0:1)break b;i=Dq;break b;}k=e.data;c=f+1|0;k[f]=(224|l>>12)<<24>>24;f
=c+1|0;k[c]=(128|l>>6&63)<<24>>24;m=f+1|0;k[f]=(128|l&63)<<24>>24;}else{if(!(m?0:1)){i=new Cm;i.nZ=2;i.oa=1;break b;}if(j>=d){n=h.tr;if(n.nc>=n.nb?0:1)break b;i=DE;break b;}p=j+1|0;m=k[j];if(!((m&64512)!=56320?0:1)){j=p+(-2)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}if((f+4|0)>g){j=p+(-2)|0;n=h.q$;if((n.nb-n.nc|0)<4?0:1)break b;i=Dq;break b;}k=e.data;o=((l&1023)<<10|m&1023)+65536|0;m=f+1|0;k[f]=(240|o>>18)<<24>>24;c=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=c+1|0;k[c]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j
=p;}}c=j;f=m;}j=c;}h.t8=j;h.uh=f;return i;}
let Fv=F(CL);
function HY(){C.call(this);this.Bh=null;}
function AAZ(){let a=this;HY.call(a);a.vU=null;a.wV=null;a.tn=0;a.wt=0;a.zm=0;a.Cz=0;}
let A2V=(a,b)=>{let c=new AAZ();AKV(c,a,b);return c;}
let AKV=(a,b,c)=>{a.Bh=new C;a.Cz=(-1);if(c<0){b=new Bc;b.m$=1;b.m_=1;D(b);}a.vU=b;if(64>c)c=64;a.wV=H(c);}
let ZY=a=>{let b;b=a.vU;if(b!==null){b.zG.la();a.vU=null;return;}b=new Fv;b.m$=1;b.m_=1;D(b);}
let I1=a=>{let b,c,d,e;if(a.vU===null){b=new Fv;b.m$=1;b.m_=1;D(b);}if(a.zm&&a.tn>=a.wt)return null;b=new I;b.m8=H(16);d:{while(true){if(a.tn>=a.wt&&!Rd(a,0))break d;c=a.wV.data;d=a.tn;e=d+1|0;a.tn=e;d=c[d];if(d==10)break;if(d==13){if(e>=a.wt&&!Rd(a,0))break d;c=a.wV.data;e=a.tn;if(c[e]!=10)break d;a.tn=e+1|0;break d;}e=b.m7;Bh(b,e,e+1|0);b.m8.data[e]=d;}}return W(b);}
let Rd=(a,b)=>{let c,d;if(a.zm)return 0;a:{while(true){c=a.wV;d=c.data.length;if(b>=d)break a;d=YQ(a.vU,c,b,d-b|0);if(d==(-1)){a.zm=1;break a;}if(!d)break;b=b+d|0;}}a.wt=b;a.tn=0;a.Cz=(-1);return 1;}
function VI(){let a=this;HY.call(a);a.zG=null;a.zW=null;a.Fm=null;a.rc=null;a.D9=null;a.sZ=null;a.xE=0;a.zT=0;}
let AZC=a=>{let b=new VI();AGk(b,a);return b;}
let A7n=(a,b)=>{let c=new VI();ACv(c,a,b);return c;}
let AGk=(a,b)=>{let c,d;CO();c=CW;d=new RB;AFn(d,c,0.3333333432674408,0.5);d.AO=BI(512);d.Ce=H(512);Ev();c=E9;if(c!==null){d.uF=c;d.zL=c;ACv(a,b,d);return;}c=new Bc;c.m$=1;c.m_=1;c.na=B(582);D(c);}
let ACv=(a,b,c)=>{let d,e,f,g,h,i;a.Bh=new C;d=BI(8192);e=d.data;a.Fm=d;f=e.length;if(f>=0&&f<=(f-0|0)){g=new Cx;h=0+f|0;g.no=(-1);g.nt=f;g.nb=f;Cd();g.nT=Ch;g.n3=0;g.nQ=d;g.nc=0;g.nb=h;g.oz=0;g.n9=0;a.rc=g;e=H(1024);d=e.data;a.D9=e;h=d.length;g=new Jw;i=0+h|0;g.no=(-1);g.nt=h;g.nb=h;g.nc=0;g.nb=i;g.s$=0;g.ui=0;g.sS=e;a.sZ=g;a.zG=b;a.zW=c;B7(g,i);b=a.rc;B7(b,b.nb);return;}b=new L;b.m$=1;b.m_=1;D(b);}
let YQ=(a,b,c,d)=>{let e,f,g,h;if(a.zT){e=a.sZ;if(!(e.nc>=e.nb?0:1))return (-1);}f=0;k:{while(d>0){e=a.sZ;g=e.nb-e.nc|0;if(d<g)g=d;N$(e,b,c+f|0,g);d=d-g|0;f=f+g|0;e=a.sZ;h=e.nc>=e.nb?0:1;if(!h&&!AEG(a))break k;}}return f;}
let AEG=a=>{let b,c,d;if(a.zT)return 0;Vo(a.sZ);a:{while(true){b=a.rc;c=b.nc>=b.nb?0:1;if(!c&&!Su(a))break a;d=(XB(a.zW,a.rc,a.sZ,a.xE)).nZ;if(d!=1?0:1)break;if(d?0:1)Su(a);}}b=a.rc;c=b.nc>=b.nb?0:1;if(!c&&a.xE){b=a.zW;d=b.wS;if(d!=3&&d!=2){b=new BT;b.m$=1;b.m_=1;D(b);}b.wS=3;if(DE.nZ?0:1)a.zT=1;}b=a.sZ;b.nb=b.nc;b.nc=0;b.no=(-1);return 1;}
let Su=a=>{let b,c,d;if(a.xE)return 0;AAq(a.rc);a:{while(true){b=a.rc;c=b.nc;d=b.nb;if(!(c>=d?0:1))break a;c=a.zG.lk(b.nQ,c,d-c|0);if(c==(-1)){a.xE=1;break a;}b=a.rc;B7(b,b.nc+c|0);if(!c)break;}}b=a.rc;b.nb=b.nc;b.nc=0;b.no=(-1);return 1;}
function Um(){let a=this;C.call(a);a.pT=null;a.rI=null;a.zQ=0;a.o5=0;}
let AD2=(a,b)=>{let c=new Um();AV3(c,a,b);return c;}
let AV3=(a,b,c)=>{if(b!==null){a.pT=b;a.rI=c;a.zQ=0;a.o5=0;return;}b=new C0;b.m$=1;b.m_=1;D(b);}
let Ug=a=>{let b,c,d,e;if(a.rI===null){b=new C0;b.m$=1;b.m_=1;D(b);}a:{k:{c=a.pT.m9.length;d=a.o5;if(d<c){if(a.zQ)return 1;while(true){if(d>=c)break k;b=a.rI;e=a.pT;if(d<0)break a;if(d>=e.m9.length)break a;if(EL(b,e.m9.charCodeAt(d),0)==(-1))return 1;d=d+1|0;}}}return 0;}b=new U;b.m$=1;b.m_=1;D(b);}
let BP=a=>{let b,c,d,e,f,g,h;if(a.rI===null){b=new C0;b.m$=1;b.m_=1;D(b);}c=a.o5;d=a.pT.m9.length;if(c<d){if(a.zQ){b=a.rI;e=a.pT;f=a.o5;if(f>=0&&f<e.m9.length){if(EL(b,e.m9.charCodeAt(f),0)>=0){b=a.pT;c=a.o5;a.o5=c+1|0;if(c>=0&&c<b.m9.length){c=b.m9.charCodeAt(c);b=new M;g=H(1);h=g.data;h[0]=c;b.m9=O(g.data,0,h.length);return b;}b=new U;b.m$=1;b.m_=1;D(b);}a.o5=a.o5+1|0;bf:{while(true){f=a.o5;if(f>=d){b=a.pT;return B1(b,c,b.m9.length);}b=a.rI;e=a.pT;if(f<0)break bf;if(f>=e.m9.length)break bf;if(EL(b,e.m9.charCodeAt(f),
0)>=0)break;a.o5=a.o5+1|0;}return B1(a.pT,c,a.o5);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}h:{while(true){f=BS(c,d);if(f>=0)break h;b=a.rI;e=a.pT;if(c<0)break;if(c>=e.m9.length)break;if(EL(b,e.m9.charCodeAt(c),0)<0)break h;c=c+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}a.o5=c;if(f<0){a.o5=c+1|0;i:{while(true){f=a.o5;if(f>=d){b=a.pT;return B1(b,c,b.m9.length);}b=a.rI;e=a.pT;if(f<0)break i;if(f>=e.m9.length)break i;if(EL(b,e.m9.charCodeAt(f),0)>=0)break;a.o5=a.o5+1|0;}return B1(a.pT,c,a.o5);}b=new U;b.m$
=1;b.m_=1;D(b);}}b=new Ni;b.m$=1;b.m_=1;D(b);}
let P4=F();
let AVh=null;let Ua=b=>{let $$je;b:{if(b!==null)try{ZY(b);break b;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}}}
let AUi=()=>{AVh=BI(0);}
function SM(){let a=this;C.call(a);a.ud=null;a.Bj=0;a.Ae=null;a.wN=null;a.C4=0;a.DT=0.0;a.DS=0.0;a.z3=null;a.D7=0.0;a.qA=null;a.sw=null;a.uk=null;a.x4=null;}
let A5p=null;let A2g=()=>{A2g=Ba(SM);APz();}
let A37=(a,b)=>{let c=new SM();AEH(c,a,b);return c;}
let AEH=(a,b,c)=>{let d,e,f,g,h,i;A2g();d=new Cf;d.og=1;d.np=Bo(C,16);a.Ae=d;d=new Cf;d.og=1;d.np=Bo(C,16);a.wN=d;d=new Br;Fc();d.ox=1.0;d.ow=1.0;d.ov=1.0;d.ou=1.0;DX(d);a.z3=d;a.ud=b;a.Bj=c;e=b.r0.ng;if(!e){b=new Bc;b.m$=1;b.m_=1;b.na=B(583);D(b);}a:{a.qA=Bo(LN(E3),e);a.sw=R(e);if(e>1){f=Bo(D7,e);g=f.data;a.uk=f;h=0;i=g.length;while(true){if(h>=i)break a;b=new D7;b.pX=1;b.oi=R(16);g[h]=b;h=h+1|0;}}}a.x4=R(e);}
let Xa=(a,b)=>{let c,d,e,f,g,h,i;c=a.ud.r0;d=0;e=a.qA.data.length;while(d<e){f=a.sw.data;if(f[d]>0){g=a.qA.data[d];if(d>=c.ng){h=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,d,10);G(b,b.m7,B(36));i=c.ng;K(b,b.m7,i,10);b=W(b);h.m$=1;h.m_=1;h.na=b;D(h);}Zy(b,c.np.data[d].vH,g,0,f[d]);}d=d+1|0;}}
let ABx=a=>{let b,c,d,e,f,g,h;a.DT=0.0;a.DS=0.0;AA$(a.wN,1);b=a.wN;c=b.np;d=0;e=b.ng;f=null;if(d>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.ng=0;b=a.Ae;c=b.np;d=0;e=b.ng;f=null;if(d>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(d<e){g=c.data;h=d+1|0;g[d]=f;d=h;}b.ng=0;e=0;c=a.sw.data;h=c.length;while(e<h){g=a.uk;if(g!==null)g.data[e].nR=0;c[e]=0;e=e+1|0;}}
let Vt=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{if(a.qA.data.length==1)Sy(a,0,b.ps);else{c=a.x4.data;d=0;e=c.length;if(d>e){b=new Bc;b.m$=1;b.m_=1;D(b);}while(d<e){f=d+1|0;c[d]=0;d=f;}g=0;b=b.o$;d=b.ng;while(true){f=BS(g,d);if(f>=0)break;if(f>=0){h=new L;i=new I;i.m8=H(16);G(i,i.m7,B(35));K(i,i.m7,g,10);G(i,i.m7,B(36));g=b.ng;K(i,i.m7,g,10);b=W(i);h.m$=1;h.m_=1;h.na=b;D(h);}i=b.np.data[g].of;j=i.np;k=0;l=i.ng;while(k<l){f=j.data[k].t9;c[f]=c[f]+1|0;k=k+1|0;}g=g+1|0;}g=0;while(true){if(g>=e)break a;Sy(a,g,c[g]);g=
g+1|0;}}}}
let Sy=(a,b,c)=>{let d,e,f,g;d=a.uk;if(d!==null){e=d.data;if(c>e[b].oi.data.length)ABg(e[b],c-e[b].nR|0);}d=a.sw.data;f=d[b]+(c*20|0)|0;e=a.qA.data;g=e[b];if(g===null)e[b]=Cq(f);else if(g.data.length<f){e=Cq(f);Ci(g,0,e,0,d[b]);a.qA.data[b]=e;}}
let Wu=(a,b)=>{let c,d,e,f,g;c=Bo(LN(E3),b);d=a.qA;Ci(d,0,c,0,d.data.length);a.qA=c;e=R(b);c=a.sw;Ci(c,0,e,0,c.data.length);a.sw=e;d=Bo(D7,b);f=0;e=a.uk;if(e!==null){f=e.data.length;Ci(e,0,d,0,f);}e=d.data;while(f<b){g=new D7;g.pX=1;g.oi=R(16);e[f]=g;f=f+1|0;}a.uk=d;a.x4=R(b);}
let AAI=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;e=b.o$.ng;if(!e)return;f=a.qA.data.length;g=a.ud.r0.ng;if(f<g)Wu(a,g);CT(a.Ae,b);Vt(a,b);h=b.oB;i=0;j=0;g=0;k=0.0;l=0;while(l<e){m=b.o$;if(l>=m.ng){n=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,l,10);G(b,b.m7,B(36));f=m.ng;K(b,b.m7,f,10);b=W(b);n.m$=1;n.m_=1;n.na=b;D(n);}m=m.np.data[l];n=m.of;o=n.np;p=m.os.or;q=c+m.qJ;r=d+m.w6;s=0;t=n.ng;while(s<t){u=g+1|0;if(g==j){f=i+1|0;if(f>=h.nR){m=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,f,10);G(b,
b.m7,B(36));f=h.nR;K(b,b.m7,f,10);b=W(b);m.m$=1;m.m_=1;m.na=b;D(m);}k=H5(h.oi.data[f]&(-16777217));i=f+1|0;f=BS(i,h.nR);if(f>=0)j=(-1);else{if(f>=0){m=new L;b=new I;b.m8=H(16);G(b,b.m7,B(35));K(b,b.m7,i,10);G(b,b.m7,B(36));f=h.nR;K(b,b.m7,f,10);b=W(b);m.m$=1;m.m_=1;m.na=b;D(m);}j=h.oi.data[i];}}v=p.data;w=o.data;q=q+v[s];ACW(a,w[s],q,r,k);s=s+1|0;g=u;}l=l+1|0;}Fc();a.D7=ABr;}
let ACW=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;f=a.ud.wm;g=f.sf;h=f.Da;i=c+b.pY*g;j=d+b.uj*h;k=b.pr*g;l=b.pU*h;m=b.An;n=b.AR;o=b.xV;p=b.ys;if(a.Bj){i=i+Fy(i)*0.5|0;j=j+Fy(j)*0.5|0;k=k+Fy(k)*0.5|0;l=l+Fy(l)*0.5|0;}q=i+k;r=j+l;s=b.t9;t=a.sw.data;u=t[s];t[s]=t[s]+20|0;t=a.uk;if(t!==null){b=t.data[s];v=a.C4;a.C4=v+1|0;FU(b,v);}t=a.qA.data[s].data;v=u+1|0;t[u]=i;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=o;w=v+1|0;t[v]=i;s=w+1|0;t[w]=r;v=s+1|0;t[s]=e;w=v+1|0;t[v]=m;v=w+1|0;t[w]=p;w=
v+1|0;t[v]=q;v=w+1|0;t[w]=r;w=v+1|0;t[v]=e;v=w+1|0;t[w]=n;w=v+1|0;t[v]=p;v=w+1|0;t[w]=q;w=v+1|0;t[v]=j;v=w+1|0;t[w]=e;w=v+1|0;t[v]=n;t[w]=o;}
let APz=()=>{let b;b=new Br;Fc();b.ox=1.0;b.ow=1.0;b.ov=1.0;b.ou=1.0;DX(b);A5p=b;}
let Dz=F(BH);
let ANP=null;let A3I=null;let ANg=null;let ATk=null;let APh=null;let AMF=null;let Ie=null;let A29=null;let HU=()=>{HU=Ba(Dz);AF0();}
let IT=b=>{let c,d;HU();if(b==1)return ANP;if(b==2)return ANg;if(b==5)return ATk;if(b==6)return APh;if(b==3)return AMF;if(b==4)return Ie;c=new X;d=new I;d.m8=H(16);G(d,d.m7,B(584));K(d,d.m7,b,10);d=W(d);c.m$=1;c.m_=1;c.na=d;D(c);}
let AF0=()=>{let b,c,d,e,f,g,h;b=new Dz;HU();b.ni=B(223);b.nf=0;ANP=b;c=new Dz;c.ni=B(585);c.nf=1;A3I=c;d=new Dz;d.ni=B(586);d.nf=2;ANg=d;e=new Dz;e.ni=B(587);e.nf=3;ATk=e;f=new Dz;f.ni=B(588);f.nf=4;APh=f;g=new Dz;g.ni=B(589);g.nf=5;AMF=g;h=new Dz;h.ni=B(590);h.nf=6;Ie=h;A29=N(Dz,[b,c,d,e,f,g,h]);}
let Jn=F();
let ZH=0;let QY=null;let QT=null;let AAT=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:H7(b);c.AM=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.yR=0;c.yA=0;return;}if(f)d=e|8388608;else{d=e<<1;while(CZ(Bl(J(d),J(8388608)),Q)){d=d<<1;f=f+(-1)|0;}}g=QT;h=AR8(g,0,g.data.length,f);if(h<0)h= -h|0;g=QT.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=QY.data[e];j=Bl(J(d),E(4294967295, 0));k=T(Y(V(j,Bl(J(e),E(4294967295, 0))),32-i|0));if(k<ZH){while(Gd(k,ZH)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=
QT.data;e=h+1|0;i=9+(f-g[e]|0)|0;k=T(Y(V(j,Bl(J(QY.data[e]),E(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=QY.data;f=h+1|0;e=g[f];m=i-1|0;n=V(Bl(J(l),E(4294967295, 0)),Bl(J(e),E(4294967295, 0)));e=32-m|0;o=T(Y(n,e));p=T(Y(V(Bl(J(d-1|0),E(4294967295, 0)),Bl(J(g[f]),E(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(Gd(Ei(k,r),Ei(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(Gd(Ei(k,l),Ei(o,l))>=0)break;m=l;}s=Gd(q,m);d=s>0?Cu(Ei(k,q),q):s<0?Cu(Ei(k,m),m)+m|0:Cu(Ei((k+(m/2|0)|0),m),m);if(EK(J(d),J(1000000000))
>=0)while(true){h=h+1|0;d=Ei(d,10);if(Gd(d,1000000000)<0)break;}else if(Gd(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.yR=d;c.yA=h-50|0;}
let Xp=()=>{ZH=Ei((-1),10);QY=EB([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);QT=EB([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
let KH=F();
let AGJ=null;let ANx=null;let AEU=(b,c,d)=>{let e,f,g,h,i,j;e=50+c|0;if(b){f=AGJ.data;if(e<=f.length&&e>=0){g=Gm(V(Bl(J(b),E(4294967295, 0)),Bl(J(f[e]),E(4294967295, 0))));h=ANx.data[e]-1|0;i=(32-G2(g)|0)-30|0;b=i>=0?g>>>i|0:g<<( -i|0);c=h+i|0;if(c>=255)return !d?Infinity:(-Infinity);b=b+32|0;if(b&(-1073741824)){b=b>>>1|0;c=c+1|0;}if(c<=0){c=( -c|0)+1|0;e=32;if(c<e)e=c;b=b>>e;c=0;}j=(b>>>6|0)&8388607|c<<23;if(d)j=j^(-2147483648);return H5(j);}}return H5(!d?0:(-2147483648));}
let ACh=()=>{AGJ=EB([(-1598972629),(-924973963),(-82475629),(-1662160004),(-1003958181),(-181205903),(-1723866425),(-1081091207),(-277622185),(-1784126602),(-1156416428),(-371778711),(-1842974431),(-1229976214),(-463728444),(-1900443013),(-1301811943),(-553523104),(-1956564676),(-1371964021),(-641213203),(-2011370988),(-1440471911),(-726848064),(-2064892776),(-1507374146),(-810475859),(-2117160148),(-1572708361),(-892143627),(-41437709),(-1636511304),(-971897307),(-141129809),(-1698818867),(-1049781759),(-238485375),
(-1759666096),(-1125840795),(-333559170),(-1819087217),(-1200117198),(-426404673),(-1877115657),(-1272652747),(-517074110),(-1933784055),(-1343488244),(-605618481),(-1989124287),(-1412663534),(-692087594),(-2043167482),(-1480217529),(-776530087),(-2095944040),(-1546188227),(-858993459),(-2147483648),(-1610612736),(-939524096),(-100663296),(-1673527296),(-1018167296),(-198967296),(-1734967296),(-1094967296),(-294967296),(-1794967296),(-1169967296),(-388717296),(-1853561046),(-1243209483),(-480270030),(-1910781505),
(-1314735057),(-569676998),(-1966660859),(-1384584250),(-656988489),(-2021230542),(-1452796353),(-742253617),(-2074521247),(-1519409734),(-825520344),(-2126562951),(-1584461865),(-906835507),(-59802560),(-1647989336),(-986244846),(-159064233),(-1710027882),(-1063793028),(-255999461),(-1770612399),(-1139523675),(-350662770),(-1829776967)]);ANx=EB([(-35),(-32),(-29),(-25),(-22),(-19),(-15),(-12),(-9),(-5),(-2),1,5,8,11,15,18,21,25,28,31,35,38,41,45,48,51,55,58,61,64,68,71,74,78,81,84,88,91,94,98,101,104,108,111,
114,118,121,124,128,131,134,138,141,144,148,151,154,158,161,164,167,171,174,177,181,184,187,191,194,197,201,204,207,211,214,217,221,224,227,231,234,237,241,244,247,251,254,257,260,264,267,270,274,277,280,284,287,290,294]);}
let GD=F(BH);
let X4=null;let AI5=null;let AUU=null;let Y_=()=>{Y_=Ba(GD);AX1();}
let AX1=()=>{let b,c;b=new GD;Y_();b.ni=B(591);b.nf=0;X4=b;c=new GD;c.ni=B(592);c.nf=1;AI5=c;AUU=N(GD,[b,c]);}
function Cr(){BH.call(this);this.pu=null;}
let YF=null;let AZE=null;let AZZ=null;let AYS=null;let A31=null;let A5i=null;let AZN=null;let A1y=null;let A1Y=null;let HD=null;let A3u=null;let A3A=null;let HK=()=>{HK=Ba(Cr);AMw();}
let AMw=()=>{let b,c,d,e,f,g,h,i,j,k,l;b=new Cr;HK();b.ni=B(593);b.nf=0;b.pu=B(594);YF=b;c=new Cr;c.ni=B(595);c.nf=1;c.pu=B(596);AZE=c;d=new Cr;d.ni=B(597);d.nf=2;d.pu=B(598);AZZ=d;e=new Cr;e.ni=B(599);e.nf=3;e.pu=B(600);AYS=e;f=new Cr;f.ni=B(601);f.nf=4;f.pu=B(602);A31=f;g=new Cr;g.ni=B(603);g.nf=5;g.pu=B(604);A5i=g;h=new Cr;h.ni=B(605);h.nf=6;h.pu=B(606);AZN=h;i=new Cr;i.ni=B(607);i.nf=7;i.pu=B(608);A1y=i;j=new Cr;j.ni=B(609);j.nf=8;j.pu=B(610);A1Y=j;k=new Cr;k.ni=B(611);k.nf=9;k.pu=B(612);HD=k;l=new Cr;l.ni
=B(613);l.nf=10;l.pu=B(614);A3u=l;A3A=N(Cr,[b,c,d,e,f,g,h,i,j,k,l]);}
let Gl=F(BH);
let AHQ=null;let AUD=null;let A0m=null;let AGR=()=>{AGR=Ba(Gl);AJP();}
let AJP=()=>{let b,c;b=new Gl;AGR();b.ni=B(615);b.nf=0;AHQ=b;c=new Gl;c.ni=B(616);c.nf=1;AUD=c;A0m=N(Gl,[b,c]);}
let RV=F();
let V1=0;let ACM=(b,c,d,e)=>{let f,g,h,i,j,k,l;if(!V1){Pp(b,c,d,e);return;}Ny();f=Qd;if(f!==AEX&&f!==f&&f!==ACD)ACn(b,c,d,e);else{g=Cn;f=c.od;if(f===null)h=6408;else o:{e=f.oC;switch(e){case 1:h=6406;break o;case 2:h=6410;break o;case 3:case 5:h=6407;break o;case 4:case 6:h=6408;break o;default:}c=new X;g=new I;g.m8=H(16);Ed(g,g.m7,B(49));K(g,g.m7,e,10);g=W(g);c.m$=1;c.m_=1;c.na=g;D(c);}i=f===null?c.pn:f.pd;j=f===null?c.pq:f.pb;if(f===null)k=6408;else y:{k=f.oC;switch(k){case 1:k=6406;break y;case 2:k=6410;break y;case 3:case 5:k
=6407;break y;case 4:case 6:k=6408;break y;default:}c=new X;g=new I;CU(g);g.m8=H(16);AE6(g,g.m7,B(49));K(g,g.m7,k,10);g=W(g);c.m$=1;c.m_=1;c.na=g;D(c);}if(f===null)l=5121;else bn:{l=f.oC;switch(l){case 1:case 2:case 3:case 4:break;case 5:l=33635;break bn;case 6:l=32819;break bn;default:c=new X;g=new I;g.m8=H(16);Ed(g,g.m7,B(49));K(g,g.m7,l,10);g=W(g);c.m$=1;c.m_=1;c.na=g;D(c);}l=5121;}g.cn(b,0,h,i,j,0,k,l,c.vM);Bm.lw(b);}}
let ACn=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=Bi.ty.getExtension("GL_ARB_framebuffer_object")===null?0:1;k:{if(!f&&!(Bi.ty.getExtension("GL_EXT_framebuffer_object")===null?0:1)){g=Bm.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ce;h.nA=g;i=h;g.classObject=i;}}if(h.nP===null)h.nP=Bk(h.nA.$meta.name);h=h.nP;if(h===B(617))f=1;else if(!(B(617) instanceof M))f=0;else{j=B(617);f=h.m9!==j.m9?0:1;}if(!f&&GE===null){Pp(b,c,d,e);break k;}}j=Cn;h=c.od;if(h===null)f=6408;else m:{e=h.oC;switch(e)
{case 1:f=6406;break m;case 2:f=6410;break m;case 3:case 5:f=6407;break m;case 4:case 6:f=6408;break m;default:}c=new X;j=new I;j.m8=H(16);Dm(j,j.m7,Dp(B(49)));K(j,j.m7,e,10);j=W(j);c.m$=1;c.m_=1;c.na=j;D(c);}k=h===null?c.pn:h.pd;l=h===null?c.pq:h.pb;if(h===null)m=6408;else bo:{m=h.oC;switch(m){case 1:m=6406;break bo;case 2:m=6410;break bo;case 3:case 5:m=6407;break bo;case 4:case 6:m=6408;break bo;default:}c=new X;j=new I;j.m8=H(16);Ed(j,j.m7,B(49));K(j,j.m7,m,10);j=W(j);c.m$=1;c.m_=1;c.na=j;D(c);}if(h===null)n
=5121;else bp:{n=h.oC;switch(n){case 1:case 2:case 3:case 4:break;case 5:n=33635;break bp;case 6:n=32819;break bp;default:c=new X;j=new I;j.m8=H(16);Dm(j,j.m7,Dp(B(49)));K(j,j.m7,n,10);j=W(j);c.m$=1;c.m_=1;c.na=j;D(c);}n=5121;}j.cn(b,0,f,k,l,0,m,n,c.vM);Bm.lw(b);}}
let Pp=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;f=Cn;g=c.od;if(g===null)h=6408;else d:{i=g.oC;switch(i){case 1:h=6406;break d;case 2:h=6410;break d;case 3:case 5:h=6407;break d;case 4:case 6:h=6408;break d;default:}c=new X;f=new I;f.m8=H(16);Dm(f,f.m7,Dp(B(49)));K(f,f.m7,i,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}j=g===null?c.pn:g.pd;k=g===null?c.pq:g.pb;if(g===null)l=6408;else h:{l=g.oC;switch(l){case 1:l=6406;break h;case 2:l=6410;break h;case 3:case 5:l=6407;break h;case 4:case 6:l=6408;break h;default:}c=new X;f
=new I;f.m8=H(16);Ed(f,f.m7,B(49));K(f,f.m7,l,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}if(g===null)m=5121;else bq:{m=g.oC;switch(m){case 1:case 2:case 3:case 4:m=5121;break bq;case 5:m=33635;break bq;case 6:m=32819;break bq;default:}c=new X;f=new I;f.m8=H(16);Dm(f,f.m7,Dp(B(49)));K(f,f.m7,m,10);f=W(f);c.m$=1;c.m_=1;c.na=f;D(c);}f.cn(b,0,h,j,k,0,l,m,c.vM);if(Bm===null&&d!=e){c=new X;c.m$=1;c.m_=1;c.na=B(618);D(c);}f=c.od;n=(f===null?c.pn:f.pd)/2|0;i=(f===null?c.pq:f.pb)/2|0;h=1;while(n>0&&i>0){o=new Is;f=c.od;if
(f===null){HU();f=Ie;}else f=IT(f.oC);Kj(o,n,i,f);Kh();f=QU;o.u7=f;g=o.od;if(g===null){F4(o);g=o.oN;HK();p=B0(HD.ni);g.globalCompositeOperation=p;}else{e=f!==f?1:0;R0(g.oW,e);}f=c.od;ACg(o,c,0,0,f===null?c.pn:f.pd,f===null?c.pq:f.pb,0,0,n,i);if(h>1)OP(c);Cn.cn(b,h,Zd(o),LB(o),L6(o),0,AAX(o),SP(o),SH(o));n=LB(o)/2|0;i=L6(o)/2|0;h=h+1|0;c=o;}}
let AO8=()=>{V1=1;}
let RH=F();
let AFN=null;let A1b=()=>{A1b=Ba(RH);AXY();}
let AXY=()=>{let b,c;Y_();b=R((AUU.s()).data.length);c=b.data;AFN=b;c[X4.nf]=1;c[AI5.nf]=2;}
function M1(){let a=this;C.call(a);a.Eb=null;a.Do=0.0;a.Ek=0.0;a.sE=null;a.uF=null;a.zL=null;a.wS=0;}
let AFn=(a,b,c,d)=>{let e;a.sE=B(619);Ev();e=Ge;a.uF=e;a.zL=e;if(c<=0.0){b=new Bc;e=new I;e.m8=H(16);G(e,e.m7,B(620));El(e,e.m7,c);e=W(e);b.m$=1;b.m_=1;b.na=e;D(b);}if(d>0.0){a.Eb=b;a.Do=c;a.Ek=d;return;}b=new Bc;e=new I;e.m8=H(16);G(e,e.m7,B(621));El(e,e.m7,d);e=W(e);b.m$=1;b.m_=1;b.na=e;D(b);}
let XB=(a,b,c,d)=>{let e,f,g,h,i,$$je;e=a.wS;if(!(e==2&&!d)&&e!=3){a.wS=d?2:1;while(true){try{f=AD8(a,b,c);}catch($$e){$$je=BG($$e);if($$je instanceof BL){g=$$je;b=new Ml;b.m$=1;b.m_=1;b.oY=g;D(b);}else{throw $$e;}}e=f.nZ;if(e!=1?0:1)break;if(e?0:1){if(d){d=b.nc;h=b.nb;if(d>=h?0:1){g=a.uF;Ev();if(g===Ge){h=h-d|0;b=new Cm;b.nZ=2;b.oa=h;return b;}if((c.nb-c.nc|0)<=a.sE.m9.length)return Dq;h=b.nc;B7(b,h+(b.nb-h|0)|0);if(a.uF===E9){b=a.sE;K6(c,b,0,b.m9.length);}}}return f;}if(e!=2?0:1){g=a.uF;Ev();if(g===Ge)return f;if
(g===E9){if((c.nb-c.nc|0)<a.sE.m9.length)return Dq;g=a.sE;K6(c,g,0,g.m9.length);}i=b.nc;e=f.nZ;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Ha;b.m$=1;b.m_=1;D(b);}B7(b,i+f.oa|0);}else if(e!=3?0:1){g=a.zL;Ev();if(g===Ge)return f;if(g===E9){if((c.nb-c.nc|0)<a.sE.m9.length)return Dq;g=a.sE;K6(c,g,0,g.m9.length);}i=b.nc;e=f.nZ;h=e!=2?0:1;if(!(!h&&!(e!=3?0:1)?0:1)){b=new Ha;b.m$=1;b.m_=1;D(b);}B7(b,i+f.oa|0);}}return f;}b=new BT;b.m$=1;b.m_=1;D(b);}
let Gu=F(BL);
let Hl=F();
let LD=null;let AIf=()=>{LD=null;}
let UA=F();
let DU=(b,c,d,e)=>{Cn.lC(b,c,d,e);Cn.lD(16384);}
let Te=(b,c,d,e,f)=>{let g;Cn.lC(b,c,d,e);g=16384;if(f)g=16640;Cn.lD(g);}
function M6(){let a=this;C.call(a);a.zi=null;a.BP=null;a.Cg=null;a.yP=null;a.zK=null;a.nY=null;a.wX=null;a.oR=0.0;a.Cb=0.0;a.yI=0.0;a.zj=0.0;a.B9=null;a.DX=null;a.DD=null;}
let Dk=a=>{let b,c,d;b=new Bg;B3();a.zi=b;b=new Bg;b.nk=0.0;b.nm=0.0;b.nl=(-1.0);a.BP=b;b=new Bg;b.nk=0.0;b.nm=1.0;b.nl=0.0;a.Cg=b;a.yP=FK();a.zK=FK();a.nY=FK();a.wX=FK();a.oR=1.0;a.Cb=100.0;a.yI=0.0;a.zj=0.0;a.B9=A3a();a.DX=new Bg;b=new LR;A2B();c=new Bg;b.DP=c;d=new Bg;b.ES=d;c.nk=0.0;c.nm=0.0;c.nl=0.0;d.nk=0.0;d.nm=0.0;d.nl=0.0;a.DD=b;}
let AFE=F();
let AQ$=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=b.m9.length;e=0;f=new I;f.m8=H(d);g=0;b:{a:{while(g<d){if(g<0)break b;if(g>=b.m9.length)break b;k:{h=b.m9.charCodeAt(g);if(h!=37){i=f.m7;Bh(f,i,i+1|0);f.m8.data[i]=h;break k;}g=g+1|0;if(g<0)break a;if(g>=b.m9.length)break a;j=b.m9.charCodeAt(g);if(j==37){j=f.m7;Bh(f,j,j+1|0);f.m8.data[j]=37;break k;}if(j==115){k=c.data;i=e+1|0;Mk(f,k[e].l());e=i;break k;}if(j==100){k=c.data;i=e+1|0;AEy(f,Hd(k[e]));e=i;break k;}if(j==102){k=c.data;i=e+1|0;l=KK(k[e]);IV();BO(f,Ib(R3(F8,
l),0,l>=0.0?5:6));e=i;break k;}if(j==48){g=g+1|0;if(Dc(b,g)==88){k=c.data;IV();m=M8;i=e+1|0;AFm(m,f,Hd(k[e]));e=i;break k;}IV();i=LU(F8,b,g,d);while(true){g=g+1|0;h=Dc(b,g);if(h<48)break;if(h>57)break;}if(h==88){k=c.data;m=M8;j=e+1|0;BO(f,Ib(P6(m,Hd(k[e])),16-i|0,16));}else if(h!=100)j=e;else{k=c.data;m=F8;j=e+1|0;m=P6(m,Hd(k[e]));BO(f,Ib(m,Fi(m)-i|0,Fi(m)));}e=j;break k;}if(j==46){g=g+1|0;if(Dc(b,g)==102){k=c.data;IV();m=F8;i=e+1|0;XI(m,f,KK(k[e]));e=i;break k;}IV();j=LU(F8,b,g,d)+2|0;while(true){g=g+1|0;i
=Dc(b,g);if(i<48)break;if(i>57)break;}if(i==102){k=c.data;i=e+1|0;n=KK(k[e]);m=R3(F8,n);if(n<0.0)j=j+1|0;BO(f,Ib(m,0,j));e=i;}break k;}if(j<49)break k;if(j>57)break k;IV();i=LU(F8,b,g,d);while(true){g=g+1|0;j=Dc(b,g);if(j<48)break;if(j>57)break;}if(j==88){k=c.data;m=M8;j=e+1|0;m=SL(m,Hd(k[e]));BO(f,Ib(m,Fi(m)-i|0,Fi(m)));}else if(j!=100)j=e;else{k=c.data;m=F8;j=e+1|0;m=SL(m,Hd(k[e]));BO(f,Ib(m,Fi(m)-i|0,Fi(m)));}e=j;}g=g+1|0;}return f;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let Dv=(b,c)=>{let d,e,f,g;b=AQ$(b,c);d=new M;c=b.m8;e=c.data;f=b.m7;P();g=e.length;if(f>=0&&f<=(g-0|0)){d.m9=O(c.data,0,f);return d;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let GP=F(Iv);
let ACq=(a,b)=>{let c,d,e,f,g,h;c=J(b);d=a.p4;e=a.p1;f=a.p0;g=a.p3;h=a.p2;a.p4=Z(d,E(2135587861, 2654435769));a.p1=By(d,h);a.p0=Z(e,g);a.p3=G$(Cz(f,52),Y(f,12));d=Cb(e,f);a.p2=d;return Gm(V(c,Bl(d,E(4294967295, 0))))&(b>>31^(-1));}
let M5=(a,b)=>{return a.lP(Q,b);}
let AUO=(a,b,c)=>{let d,e,f,g,h,i;d=a.jm();if(CN(b,c))return b;e=Cb(c,b);f=Bl(d,E(4294967295, 0));g=Bl(e,E(4294967295, 0));h=Y(d,32);i=Y(e,32);return Z(Z(Z(b,Y(V(h,g),32)),Y(V(f,i),32)),V(h,i));}
let Z_=a=>{let b,c,d,e,f,g;b=a.p4;c=a.p1;d=a.p0;e=a.p3;f=a.p2;a.p4=Z(b,E(2135587861, 2654435769));a.p1=By(b,f);a.p0=Z(c,e);a.p3=G$(Cz(d,52),Y(d,12));g=Cb(c,d);a.p2=g;return BV(Y(g,40))*5.9604644775390625E-8;}
let Rn=a=>{return BV(Y(a.jm(),11))*1.1102230246251565E-16;}
let KY=a=>{let b;b=a.jm();return H5((126-Ft(b)|0)<<23|T(b)&8388607);}
function Gc(){GP.call(this);this.qY=null;}
let Hw=a=>{return B(622);}
let AB3=a=>{let b;b=a.qY;return Z(Cz(Bb(Gr(b,32)),32),Bb(Gr(b,32)));}
let W7=(a,b)=>{return AAr(a.qY,b);}
let AAu=a=>{return Gr(a.qY,24)*5.9604644775390625E-8;}
let AAB=a=>{let b;b=a.qY;return Gr(b,26)*1.4901161193847656E-8+Gr(b,27)*1.1102230246251565E-16;}
function Nj(){let a=this;C.call(a);a.oA=null;a.o3=0.0;a.o4=0.0;a.oS=0;a.oT=0;a.o0=0;a.o2=0;a.o8=null;}
let BZ=(a,b)=>{let c,d,e,f;Z2(a.oS,a.oT,a.o0,a.o2);c=a.oA;d=a.o3;c.yI=d;e=a.o4;c.zj=e;if(b){f=c.zi;d=d/2.0;e=e/2.0;f.nk=d;f.nm=e;f.nl=0.0;}Ue(c,1);}
let DP=a=>{return a.oA;}
function C6(){Nj.call(this);this.n5=0.0;}
let O7=F(0);
function C5(){let a=this;C.call(a);a.B6=0;a.uN=0;a.CA=0;a.DI=0;a.wn=0;a.qX=null;a.ve=null;a.pe=0;a.CR=0;a.Bp=0;a.EN=0;a.Cp=0;a.Dw=0;a.zc=null;a.w5=null;a.y5=null;}
let A7o=(a,b,c,d,e)=>{let f=new C5();Di(f,a,b,c,d,e);return f;}
let Di=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m;a.zc=FK();a.DI=b;a.CR=e;a.ve=f;g=VL(a,c,d,e);h=new JO;h.wv=1;h.vO=0;f=new Bg;B3();h.Cj=f;f=AMV(g);h.pR=GE===null?APy(0,b,f):AOM(0,b,f);f=new Il;f.rl=1;f.tL=0;f.yK=1;if(!DO){g=Lo(0);d=g.data.length;i=new Km;j=0+d|0;S2(i,d);i.nc=0;i.nb=j;i.vx=0;i.v_=0;i.uW=g;}else{k=new Cx;g=BI(0);CU(k);k.no=(-1);k.nt=0;k.nb=0;Cd();k.nT=Ch;k.n3=0;k.nQ=g;k.nc=0;k.nb=0;k.oz=1;k.n9=0;k.nT=DD();i=Ky(k);}f.q1=i;i.nb=i.nc;i.nc=0;i.no=(-1);i=Bm;k=i.nd.createBuffer();d=i.px;i.px=d+1|0;Ct(i.p$,
d,CA(k));f.wr=d;f.vf=35048;h.o9=f;h.t5=0;f=ED;i=MO;if(f===null){i=i.pj.data[0];while(i!==null&&i.pG!==null){i=i.pP;}}else{k=f;if(!k.$id$){l=Fb();k.$id$=l;}m=f.$id$;i=XK(i,f,m&(i.pj.data.length-1|0),m);}i=i===null?null:i.qg;if(i===null)i=A4X();CT(i,h);Ki(MO,f,i);a.qX=h;a.w5=Cq(Cu(b,(h.pR.kc()).pH/4|0));a.Bp=(WC(a.qX)).pH/4|0;a.EN=Hm(a.qX,8)===null?0:(Hm(a.qX,8)).q6/4|0;a.Cp=Hm(a.qX,4)===null?0:(Hm(a.qX,4)).q6/4|0;a.Dw=Hm(a.qX,16)===null?0:(Hm(a.qX,16)).q6/4|0;a.y5=Bo(M,e);m=0;while(m<e){a.y5.data[m]=CD(EJ(BO(E6(),
B(623)),m));m=m+1|0;}}
let VL=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new Cf;e.og=1;e.np=Bo(C,16);f=new Eq;f.qK=1;f.pf=3;f.pA=5126;f.pE=0;f.pv=B(470);f.qU=0;f.r3=EM(1);CT(e,f);if(b){g=new Eq;g.qK=8;g.pf=3;g.pA=5126;g.pE=0;g.pv=B(624);g.qU=0;g.r3=EM(8);CT(e,g);}if(c){g=new Eq;g.qK=4;g.pf=4;g.pA=5121;g.pE=1;g.pv=B(471);g.qU=0;g.r3=EM(4);CT(e,g);}h=0;while(true){if(h>=d){b=e.ng;i=Bo(Eq,b);j=i.data;h=0;while(true){c=BS(h,b);if(c>=0)break;if(c>=0){f=new L;g=new I;g.m8=H(16);G(g,g.m7,B(35));K(g,g.m7,h,10);G(g,g.m7,B(36));b=e.ng;K(g,g.m7,b,
10);e=new M;i=g.m8;j=i.data;c=g.m7;P();d=j.length;if(c>=0&&c<=(d-0|0)){e.m9=O(i.data,0,c);f.m$=1;f.m_=1;f.na=e;D(f);}e=new L;Bd(e);D(e);}j[h]=e.np.data[h];h=h+1|0;}return i;}g=new Eq;f=new I;f.m8=H(16);G(f,f.m7,B(625));K(f,f.m7,h,10);k=new M;i=f.m8;j=i.data;l=f.m7;P();m=j.length;if(l<0)break;if(l>(m-0|0))break;k.m9=O(i.data,0,l);g.qK=16;g.pf=2;g.pA=5126;g.pE=0;g.pv=k;g.qU=0;g.r3=EM(16);CT(e,g);h=h+1|0;}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
let De=(a,b,c)=>{G3(a.zc,b.oZ);a.B6=c;}
let Bu=(a,b)=>{a.w5.data[a.uN+a.Cp|0]=b;}
let Bv=(a,b,c,d)=>{let e,f;e=a.uN;f=a.w5.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.CA=0;a.uN=e+a.Bp|0;a.wn=a.wn+1|0;}
let AD4=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!a.wn)return;b=a.ve;c=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}c.iK(b.oe);c=a.ve;d=a.zc;T_();e=JL(c,B(626),Mj);f=Bm;if(c.nW){CJ(c,c.oF,c.oJ);c.nW=0;}g=d.oZ;b=f.pI;h=f.qc;if(!h)b=!b.nF?null:b.nD;else{i=b.nB;j=T(Y(V(J(h),E(2135587861, 2654435769)),b.nG));e:{while(true){k=i.data[j];if(!k){j= -(j+1|0)|0;break e;}if(k==h)break;j=(j+1|0)&b.nE;}}b=j<0?null:b.nC.data[j];}b=b;if(!e)b=!b.nF?null:b.nD;else{i=b.nB;h=T(Y(V(J(e),E(2135587861, 2654435769)),b.nG));y:{while(true){j=i.data[h];if
(!j){h= -(h+1|0)|0;break y;}if(j==e)break;h=(h+1|0)&b.nE;}}b=h<0?null:b.nC.data[h];}BE();b=b===null?null:b.nJ;c=f.nd;d="uniformMatrix4fv";l=!!0;if(g===null)f=null;else{g=g.data;m=g.length;f=new Array(m);h=0;while(h<m){n=g[h];h;f[h]=n;h=h+1|0;}}c[d](b,l,f);m=0;while(m<a.CR){b=a.ve;c=a.y5.data[m];d=Bm;if(b.nW){CJ(b,b.oF,b.oJ);b.nW=0;}d.iX(JL(b,c,Mj),m);m=m+1|0;}b=a.qX;g=a.w5;h=a.uN;b.pR.iO(g,0,h);b=a.qX;Re(b,a.ve,a.B6,0,b.o9.j9()<=0?b.pR.lW():b.o9.j5(),b.wv);a.CA=0;a.uN=0;a.wn=0;}
let Dd=a=>{AD4(a);}
let Do=(b,c,d)=>{let e,f,g,h,i,j,k;e=new I;e.m8=H(16);G(e,e.m7,B(627));f=!b?B(43):B(628);G(e,e.m7,f);f=!c?B(43):B(629);G(e,e.m7,f);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);i=0;while(true){if(i>=d){e=new I;e.m8=H(16);G(e,e.m7,f);G(e,e.m7,B(630));f=!c?B(43):B(631);G(e,e.m7,f);f=new M;g=e.m8;h=g.data;i=e.m7;j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);i=0;while(i<d){e=new I;e.m8=H(16);G(e,e.m7,f);G(e,e.m7,B(632));K(e,e.m7,i,10);G(e,e.m7,B(633));f=W(e);i=i+1|0;}e
=new I;e.m8=H(16);G(e,e.m7,f);G(e,e.m7,B(634));f=new M;g=e.m8;h=g.data;i=e.m7;j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);if(c){e=new I;Gj(e);f=CD(BO(BO(e,f),B(635)));}i=0;while(i<d){f=CD(BO(EJ(BO(BO(EJ(BO(BO(E6(),f),B(636)),i),B(637)),B(625)),i),B(633)));i=i+1|0;}return CD(BO(BO(E6(),f),B(638)));}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}e=new I;e.m8=H(16);G(e,e.m7,f);G(e,e.m7,B(639));K(e,e.m7,i,10);G(e,e.m7,B(633));f=new M;g=e.m8;h=g.data;j=e.m7;k=h.length;if(j<0)break;if(j
>(k-0|0))break;f.m9=O(g.data,0,j);i=i+1|0;}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
let Du=(b,c,d)=>{let e,f,g,h,i,j,k;e=B(640);if(c){f=new I;f.m8=H(16);G(f,f.m7,e);G(f,f.m7,B(631));e=new M;g=f.m8;h=g.data;i=f.m7;P();j=h.length;if(i>=0&&i<=(j-0|0))e.m9=O(g.data,0,i);else{e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}}i=0;c:{while(true){if(i>=d){f=new I;f.m8=H(16);G(f,f.m7,e);G(f,f.m7,B(641));e=!c?B(642):B(643);G(f,f.m7,e);e=new M;g=f.m8;h=g.data;c=f.m7;P();i=h.length;if(c>=0&&c<=(i-0|0)){e.m9=O(g.data,0,c);if(d>0){f=new I;f.m8=H(16);G(f,f.m7,e);G(f,f.m7,B(644));e=Wg(f.m8,0,f.m7);}i=0;c=d-1|0;while(i<d)
{e=i!=c?CD(BO(EJ(BO(EJ(BO(BO(E6(),e),B(645)),i),B(646)),i),B(647))):CD(BO(EJ(BO(EJ(BO(BO(E6(),e),B(645)),i),B(646)),i),B(521)));i=i+1|0;}f=new I;Gj(f);Mk(f,e);return CD(BO(f,B(648)));}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}f=new I;f.m8=H(16);G(f,f.m7,e);G(f,f.m7,B(632));K(f,f.m7,i,10);G(f,f.m7,B(633));e=new M;g=f.m8;h=g.data;j=f.m7;P();k=h.length;if(j<0)break c;if(j>(k-0|0))break c;e.m9=O(g.data,0,j);f=new I;f.m8=H(16);G(f,f.m7,e);G(f,f.m7,B(649));K(f,f.m7,i,10);G(f,f.m7,B(633));e=new M;g=f.m8;h=g.data;j=f.m7;k=
h.length;if(j<0)break;if(j>(k-0|0))break;e.m9=O(g.data,0,j);i=i+1|0;}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}e=new L;e.m$=1;e.m_=1;Bj(e);D(e);}
function GS(){let a=this;GP.call(a);a.qO=0;a.qP=0;a.qQ=0;a.qR=0;}
let GV=a=>{return B(650);}
let VY=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.qO;c=a.qP;d=a.qQ;e=a.qR;f=c^d;f=f<<26|(f>>>6|0);g=d^e;g=g<<11|(g>>>21|0);h=b^(c+d|0);i=e+(-1380601499)|0;j=g^h;a.qO=j<<26|(j>>>6|0);k=h^i;a.qP=k<<11|(k>>>21|0);a.qQ=f^(g+h|0);a.qR=i+(-1380601499)|0;return By(Cz(J(d),32),J(h));}
let I5=a=>{let b,c,d,e,f,g;b=a.qO;c=a.qP;d=a.qQ;e=a.qR;f=c^d;a.qO=f<<26|(f>>>6|0);g=d^e;a.qP=g<<11|(g>>>21|0);a.qQ=b^(c+d|0);a.qR=e+(-1380601499)|0;return d;}
let AFi=(a,b)=>{return Gm(V(J(b),Bl(J(I5(a)),E(4294967295, 0))))&(b>>31^(-1));}
let AKQ=(a,b,c)=>{let d,e,f,g,h;d=Bl(J(I5(a)),E(4294967295, 0));e=Bl(J(I5(a)),E(4294967295, 0));if(CN(b,c))return b;f=Cb(c,b);g=Bl(f,E(4294967295, 0));h=Y(f,32);return Z(Z(Z(b,Y(V(e,g),32)),Y(V(d,h),32)),V(e,h));}
let Ut=a=>{return (I5(a)>>>8|0)*5.9604644775390625E-8;}
function Gq(){let a=this;GP.call(a);a.p4=Q;a.p1=Q;a.p0=Q;a.p3=Q;a.p2=Q;}
let G5=a=>{return B(651);}
let XM=a=>{let b,c,d,e,f,g;b=a.p4;c=a.p1;d=a.p0;e=a.p3;f=a.p2;a.p4=Z(b,E(2135587861, 2654435769));a.p1=By(b,f);a.p0=Z(c,e);a.p3=G$(Cz(d,52),Y(d,12));g=Cb(c,d);a.p2=g;return g;}
let XC=F();
function PX(){let a=this;Hu.call(a);a.Ey=0.0;a.Ex=0.0;a.EL=0;a.D_=0;}
let Xe=F();
function Sz(){let a=this;C.call(a);a.tW=null;a.rJ=null;}
let Tl=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.tW.readyState==4){if(a.tW.status==200){b=a.rJ;if(b.qM.pL){if(BJ===null){c=new CP;c.oK=DF;d=new I;d.m8=H(16);c.nV=d;c.oI=H(32);c.oQ=0;CO();c.oO=CW;BJ=c;}e=BJ;b=b.qF;d=new I;d.m8=H(16);G(d,d.m7,B(652));f=d.m7;if(b===null)b=B(2);G(d,f,b);b=new M;g=d.m8;h=g.data;i
=d.m7;P();Kx(0,i,h.length);b.m9=O(g.data,0,i);Ld(e,b);}b=a.rJ;b.q0.et(b.qF,Bk(a.tW.responseText));}else if(a.tW.status!=404&&a.tW.status!=403){try{j=J(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}b=a.rJ;d=b.qM;f=b.sq;c=b.qF;e=b.q0;if(d.pL){if(BJ===null){k=new CP;k.oK=DF;b=new I;b.m8=H(16);k.nV=b;k.oI=H(32);k.oQ=0;CO();k.oO=CW;BJ=k;}k=BJ;b=new I;b.m8=H(16);G(b,b.m7,B(114));G(b,b.m7,c===null?B(2):c);l=new M;g=b.m8;h=g.data;m=b.m7;P();n=h.length;if(m>=0&&m<=(n-0|0)){l.m9
=O(g.data,0,m);b=k.nV;G(b,b.m7,l);n=b.m7;Bh(b,n,n+1|0);b.m8.data[n]=10;CY(k);}else{b=new L;Bd(b);D(b);}}d.n6=d.n6+1|0;b=new HG;b.qM=d;b.sq=f;b.qF=c;b.q0=e;d=null;c=null;b.pW=new C;b.pV=1;b.q7=c;b.rm=d;i=Dt;Dt=i+1|0;b.rj=J(i);d=new FD;d.q9=b;GH(d);}else{b=a.rJ;b.q0.lY(b.qF);}b=a.rJ.qM;b.n6=b.n6-1|0;}return;case 1:b:{try{Jm(j);if(G_()){break _;}break b;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}}b=a.rJ;d=b.qM;f=b.sq;c=b.qF;e=b.q0;if(d.pL){if(BJ===null){k=new CP;k.oK=DF;b=new I;b.m8=H(16);k.nV
=b;k.oI=H(32);k.oQ=0;CO();k.oO=CW;BJ=k;}k=BJ;b=new I;b.m8=H(16);G(b,b.m7,B(114));G(b,b.m7,c===null?B(2):c);l=new M;g=b.m8;h=g.data;m=b.m7;P();n=h.length;if(m>=0&&m<=(n-0|0)){l.m9=O(g.data,0,m);b=k.nV;G(b,b.m7,l);n=b.m7;Bh(b,n,n+1|0);b.m8.data[n]=10;CY(k);}else{b=new L;Bd(b);D(b);}}d.n6=d.n6+1|0;b=new HG;b.qM=d;b.sq=f;b.qF=c;b.q0=e;d=null;c=null;b.pW=new C;b.pV=1;b.q7=c;b.rm=d;i=Dt;Dt=i+1|0;b.rj=J(i);d=new FD;d.q9=b;GH(d);b=a.rJ.qM;b.n6=b.n6-1|0;return;default:DB();}}BY().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let YG=(a,b)=>{let $p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Tl(a,b);if(G_()){break _;}return;default:DB();}}BY().s(a,b,$p);}
let ACe=F(0);
function LH(){let a=this;M1.call(a);a.AO=null;a.Ce=null;}
let AD8=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.AO;e=0;f=0;g=a.Ce;b:{while(true){if((e+32|0)>f){h=b.nc;i=b.nb;if(h>=i?0:1){j=e;while(j<f){k=d.data;k[j-e|0]=k[j];j=j+1|0;}k=d.data;j=f-e|0;l=(i-h|0)+j|0;f=k.length;if(l<f)f=l;Pa(b,d,j,f-j|0);e=0;}}j=c.nc;l=c.nb;if(!(j>=l?0:1)){j=b.nc>=b.nb?0:1;m=!j&&e>=f?DE:Dq;break b;}k=g.data;l=l-j|0;h=k.length;if(l<h)h=l;n=new Sx;n.w_=b;n.CE=c;m=AEM(a,d,e,f,g,0,h,n);e=n.C$;if(m===null&&0==n.ym)m=DE;AFs(c,g,0,n.ym);if(m!==null)break;}}B7(b,b.nc-(f-e|0)|0);return m;}
let RB=F(LH);
let AEM=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n,o,p,q,r,s;i=null;b:{o:{bf:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;n=h.w_;if((n.nb-n.nc|0)<2?0:1)break b;i=DE;break b;}o=k+1|0;k=j[k];if(!((k&192)!=128?0:1)){c=o+(-2)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=o;}else if((l&240)!=224){if((l&248)!=240){c=k+(-1)|0;i=AZs(2,1);break b;}if((k+3|0)>d){c=k+(-1)|0;if(YZ(h,4))break b;i=
DE;break b;}if((f+2|0)>g){c=k+(-1)|0;if(VQ(h,2))break b;i=Dq;break b;}o=k+1|0;m=j[k];c=o+1|0;o=j[o];k=c+1|0;p=j[c];if(!MU(a,m))break bf;if(!MU(a,o))break bf;if(!MU(a,p))break bf;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|p&63;c=f+1|0;j[f]=Z6(q);m=c+1|0;j[c]=AD$(q);}else{if((k+2|0)>d){c=k+(-1)|0;n=h.w_;if((n.nb-n.nc|0)<3?0:1)break b;i=DE;break b;}c=k+1|0;r=j[k];k=c+1|0;o=j[c];if(!((r&192)!=128?0:1))break o;if(!((o&192)!=128?0:1))break o;s=((l&15)<<12|(r&63)<<6|o&63)&65535;m=s&64512;c=m!=55296?0:1;if(!c&&!(m!=
56320?0:1)?0:1){c=k+(-3)|0;i=new Cm;i.nZ=2;i.oa=3;break b;}j=e.data;m=f+1|0;j[f]=s;}c=k;f=m;}break b;}c=k+(-3)|0;i=ABI(1);break b;}c=k+(-3)|0;i=new Cm;i.nZ=2;i.oa=1;}h.C$=c;h.ym=f;return i;}
let MU=(a,b)=>{return (b&192)!=128?0:1;}
function N6(){let a=this;Hl.call(a);a.Bu=null;a.yG=null;}
function C4(){let a=this;M6.call(a);a.oV=0.0;a.o1=null;}
let Df=a=>{Ue(a,1);}
let Ue=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.yP;d=a.oV;e=a.yI;f=d* -e/2.0;e=d*e/2.0;g=a.zj;Rs(c,f,e,d* -(g/2.0),d*g/2.0,a.oR,a.Cb);c=a.zK;h=a.zi;i=a.o1;d=h.nk;j=h.nm;f=h.nl;i.nk=d;i.nm=j;i.nl=f;k=a.BP;l=k.nk;e=k.nm;g=k.nl;d=d+l;j=j+e;f=f+g;i.nk=d;i.nm=j;i.nl=f;i=a.Cg;k=AV8;k.nk=d;k.nm=j;k.nl=f;l=h.nk;e=h.nm;g=h.nl;l=d-l;e=j-e;g=f-g;k.nk=l;k.nm=e;k.nl=g;Xo(c,k,i);i=AJk;l= -h.nk;e= -h.nm;g= -h.nl;Ln(i);m=i.oZ.data;m[12]=l;m[13]=e;m[14]=g;Ri(c,i);G3(a.nY,a.yP.oZ);UL(a.nY.oZ,a.zK.oZ);if(b){G3(a.wX,a.nY.oZ);XF(a.wX.oZ);ABw(a.B9,
a.wX);}}
function Ka(){Hl.call(this);this.tM=null;}
let A0c=0;let A2i=()=>{A2i=Ba(Ka);AL9();}
let Tr=(a,b)=>{let c,d,e,f,$$je;c=a.tM;d=b.pc;e=new I;e.m8=H(16);G(e,e.m7,B(653));f=e.m7;if(d===null)d=B(2);G(e,f,d);c=c.ma(W(e));d:{try{e=AKu(Y2(c));}catch($$e){$$je=BG($$e);if($$je instanceof BL){e=$$je;break d;}else{throw $$e;}}return e;}c=a.tM;d=b.pc;b=new I;b.m8=H(16);G(b,b.m7,B(653));f=b.m7;if(d===null)d=B(2);G(b,f,d);c.mc(W(b));D(e);}
let ADS=(a,b)=>{let c,d,e,f,g;c=a.tM;d=b.pc;e=new I;e.m8=H(16);G(e,e.m7,B(654));f=e.m7;if(d===null)d=B(2);d:{G(e,f,d);if(c.ma(W(e))===null){c=a.tM;g=b.pc;b=new I;b.m8=H(16);G(b,b.m7,B(653));f=b.m7;if(g===null)g=B(2);G(b,f,g);if(c.ma(W(b))===null){f=0;break d;}}f=1;}return f;}
let AL9=()=>{A0c=B(653).m9.length;}
let Mn=F(0);
function P_(){let a=this;C.call(a);a.yC=null;a.yi=null;}
let AJ8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.yC;d=a.yi;e=new I;e.m8=H(16);f=e.m7;if(d===null)d=B(2);G(e,f,d);f=e.m7;if(b===null)b=B(2);G(e,f,b);d=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){d.m9=O(g.data,0,i);return Bk(c.getItem(B0(d)));}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let ASj=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.yC;d=a.yi;e=new I;e.m8=H(16);f=e.m7;if(d===null)d=B(2);G(e,f,d);f=e.m7;if(b===null)b=B(2);G(e,f,b);d=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){d.m9=O(g.data,0,i);c.removeItem(B0(d));return;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
function RC(){let a=this;C.call(a);a.Bz=null;a.zS=null;}
let ASK=(a,b)=>{let c,d;c=a.zS;d=CR(c,b);return d<0?null:c.o_.data[d];}
let AVd=(a,b)=>{WK(a.Bz,b,0);AAa(a.zS,b);}
function C8(){let a=this;C.call(a);a.vn=null;a.wa=null;a.Dt=0;a.AG=0;a.yJ=0;a.Dz=0;a.tu=0;a.EE=0;a.Ef=0;a.xH=0;a.xb=0;a.tU=null;}
let AXT=null;let AXV=null;let F8=null;let M8=null;let AWA=null;let AWD=null;let AKh=null;let AWI=null;let A4H=null;let A5c=null;let A2w=null;let A2z=null;let A0l=null;let A05=null;let AYB=null;let A0z=null;let A0C=null;let IV=()=>{IV=Ba(C8);ARZ();}
let Gt=(a,b,c,d,e)=>{let f=new C8();XO(f,a,b,c,d,e);return f;}
let XO=(a,b,c,d,e,f)=>{let g,h,i,j,k;IV();a.Dt=d;a.Dz=c;a.AG=e;a.yJ=f;g=H(b.m9.length);h=g.data;d=0;e=h.length;while(true){if(d>=e){a.vn=g;a.tu=e;g=R(128);h=g.data;a.wa=g;e=0;f=h.length;if(e>f){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<f){i=e+1|0;h[e]=(-1);e=i;}i=0;while(true){d=a.tu;if(i>=d)break;j=a.vn.data[i];g=a.wa.data;g[j&127]=i;if(c){if(B2===null){if(BK===null)BK=Eo();B2=CG(CK((BK.value!==null?Bk(BK.value):null)));}g[Cs(B2,j)&65535&127]=i;}i=i+1|0;}k=1.0/I$(d);a.EE=Jk(I$(256.0)*k)|0;a.Ef=Jk(I$(65536.0)*k)
|0;a.xH=Jk(I$(4.294967296E9)*k)|0;c=Jk(I$(1.8446744073709552E19)*k)|0;a.xb=c;c=c+1|0;d=32;if(c>d)d=c;a.tU=H(d);return;}if(d<0)break;if(d>=b.m9.length)break;h[d]=b.m9.charCodeAt(d);d=d+1|0;}b=new U;b.m$=1;b.m_=1;D(b);}
let P6=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.xb;d=c-1|0;e=a.tu;f=e>>>1|0;g=0;h=J(f);i=J(e);while(g<=d){j=CF(Y(b,1),h);a.tU.data[d-g|0]=a.vn.data[T(Cb(b,V(j,i)))];g=g+1|0;b=j;}k=a.tU;l=k.data;P();m=new M;f=l.length;if(c>=0&&c<=(f-0|0)){m.m9=O(k.data,0,c);return m;}m=new L;m.m$=1;m.m_=1;D(m);}
let AFm=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;d=a.xb;e=d-1|0;f=a.tu;g=f>>>1|0;h=0;i=J(g);j=J(f);while(h<=e){k=CF(Y(c,1),i);a.tU.data[e-h|0]=a.vn.data[T(Cb(c,V(k,j)))];h=h+1|0;c=k;}l=a.tU;f=0;g=b.m7;Bh(b,g,g+d|0);h=d+f|0;while(f<h){m=l.data;n=b.m8.data;e=g+1|0;d=f+1|0;n[g]=m[f];g=e;f=d;}return b;}
let SL=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.xb;d=Fm(b,(-1));b=Hk(By(Z(b,d),d));e=c;while(true){f=a.tU;g=f.data;h=a.vn.data;i=J(a.tu);g[e]=h[T(Hk(CX(b,i)))];b=CF(b,i);if(CZ(b,Q))break;e=e+(-1)|0;}if(EF(d,Q)){e=e+(-1)|0;g[e]=a.yJ;}j=(c+1|0)-e|0;P();k=new M;c=g.length;if(e>=0&&j>=0&&j<=(c-e|0)){k.m9=O(f.data,e,j);return k;}k=new L;k.m$=1;k.m_=1;D(k);}
let LU=(a,b,c,d)=>{let e,f,g,h,i,j;if(c>=0&&d>0&&(d-c|0)>0){e=b.m9.length;if((e-c|0)>0&&d<=e){if(c>=0&&c<b.m9.length){e=b.m9.charCodeAt(c);if(e==a.yJ){f=(-1);g=0;h=a.xH+1|0;}else if(e==a.AG){f=1;g=0;h=a.xH+1|0;}else{g=a.wa.data[e&127];if(g<0)return 0;f=1;h=a.xH;}i=c+1|0;r:{while(i<d&&i<(c+h|0)){j=a.wa;if(i<0)break r;if(i>=b.m9.length)break r;e=j.data[b.m9.charCodeAt(i)&127];if(e<0)return Cu(g,f);g=Cu(g,a.tu)+e|0;i=i+1|0;}return Cu(g,f);}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}}return 0;}
let R3=(a,b)=>{let c,d,e,f,g,h;FY();c=new I;c.m8=H(16);c=PH(c,b,(-10000));d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;Bd(c);D(c);}
let XI=(a,b,c)=>{FY();return PH(b,c,(-10000));}
let ARZ=()=>{let b,c;AXT=Gt(B(655),1,36,43,45);AXV=Gt(B(656),1,36,43,45);F8=Gt(B(657),1,36,43,45);M8=Gt(B(658),1,112,43,45);AWA=Gt(B(659),1,36,43,45);AWD=Gt(B(462),0,61,42,45);AKh=Gt(B(660),0,36,42,33);AWI=Gt(B(661),0,36,43,45);b=Gt(B(662),0,92,43,45);A4H=b;c=N(C8,[AXT,AXV,F8,M8,AWA,AWD,AKh,AWI,b]);b=new N3;b.En=c;A5c=b;A2w=A3r([0,0]);A2z=ZR([0,0]);A0l=AY3([0,0]);A05=A3l([0,0]);AYB=A3n([0,0]);A0z=AZx([0,0]);A0C=A1s([0,0]);}
let AD7=F();
let Ib=(b,c,d)=>{if(b!==null&&!(b.m9.length?0:1)){if(c<0)c=0;if(!(d>=0&&d<=b.m9.length))d=b.m9.length;if(c<d)return B1(b,c,d);return B(43);}return B(43);}
function EV(){let a=this;C.call(a);a.th=0;a.x2=0.0;a.yb=0.0;}
let ALR=null;let AL5=null;let A1U=0;let AAr=(a,b)=>{let c,d;if((b&( -b|0))==b)return b*Gr(a,31)*4.6566128730773926E-10|0;while(true){c=Gr(a,31);d=c%b;if(c-d+(b-1|0)<0.0)continue;else break;}return d|0;}
let Ef=(a,b)=>{FB(a);try{ACs(a,T(Fm(b,24))&16777215^1502,T(Bl(b,J(16777215)))^15525485);}finally{DR(a);}}
let Gr=(a,b)=>{let c,d,e,f;FB(a);try{c=a.x2*1.5525485E7;d=a.yb;e=c+d*1502.0;c=d*1.5525485E7+11.0;d=P7(c*5.9604644775390625E-8);e=e+d;c=c-d*1.6777216E7;e=e%1.6777216E7;a.x2=e;a.yb=c;if(b<=24)return P7(e*ALR.data[b]);f=e*(1<<(b-24|0))+P7(c*AL5.data[b]);if(f>=2.147483648E9)f=f-4.294967296E9;return f;}finally{DR(a);}}
let ACs=(a,b,c)=>{FB(a);try{a.x2=b^1502;a.yb=c^15525485;a.th=0;}finally{DR(a);}}
let Wh=()=>{let b,c,d,e,f,g;b=AAg(25);ALR=b;c=AAg(33);d=c.data;AL5=c;A1U=0;e=1.52587890625E-5;f=32;while(f>=0){d[f]=e;e=e*0.5;f=f+(-1)|0;}b=b.data;g=1.0;f=24;while(f>=0){b[f]=g;g=g*0.5;f=f+(-1)|0;}}
let VM=F();
let AAm=F();
function N3(){HM.call(this);this.En=null;}
let XL=F();
let ASy=b=>{return !(isNaN(b)?1:0)?AXO(b):E(0, 2146959360);}
let SN=F();
let AM2=null;let A45=()=>{A45=Ba(SN);AG7();}
let Z2=(b,c,d,e)=>{let f;A45();b:{a:{f=AM2;Z9();if(f===ACb){if(Bi.nI.width!=Bi.nI.width)break a;if(Bi.nI.height!=Bi.nI.height)break a;}Cn.dY(b,c,d,e);break b;}Cn.dY(Cu(b,Bi.nI.width)/Bi.nI.width|0,Cu(c,Bi.nI.height)/Bi.nI.height|0,Cu(d,Bi.nI.width)/Bi.nI.width|0,Cu(e,Bi.nI.height)/Bi.nI.height|0);}}
let AG7=()=>{Z9();AM2=ACb;}
let Kb=F();
let Vn=null;let Lm=null;let A4l=null;let FY=()=>{FY=Ba(Kb);AGZ();}
let PH=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;FY();if(isNaN(c)?1:0){a:{e=CM(b);BO(b,B(663));if(d!=(-10000)){if(Go(Z(J(e),J(d)),J(CM(b))))Io(b,e+d|0);else{e=e+d|0;while(true){if(CM(b)>=e)break a;Eb(b,32);}}}}return b;}if(c!==Infinity&&c!==(-Infinity)){f=ASy(c);e=A1V(f,Q);if(!e){g:{e=CM(b);BO(b,B(664));if(d!=(-10000)){if(Go(Z(J(e),J(d)),J(CM(b))))Io(b,e+d|0);else{e=e+d|0;while(true){if(CM(b)>=e)break g;Eb(b,48);}}}}return b;}if(CZ(f,E(0, 2147483648))){i:{e=CM(b);BO(b,B(665));if
(d!=(-10000)){if(Go(Z(J(e),J(d)),J(CM(b))))Io(b,e+d|0);else{e=e+d|0;while(true){if(CM(b)>=e)break i;Eb(b,48);}}}}return b;}g=T(Bl(Y(f,52),J(2047)));h=Bl(f,E(4294967295, 1048575));if(!g)i=(-1074);else{i=(g-1023|0)-52|0;h=G$(h,E(0, 1048576));}j=e>=0?0:1;k=EF(Bl(h,J(1)),Q)?0:1;l=V(J(4),h);m=Z(l,J(2));n=CZ(h,E(0, 1048576))&&g!=1?0:1;o=Cb(Cb(l,J(1)),J(n));e=i+(-2)|0;p=0;q=0;if(e>=0){r=Jz(0,((e*78913|0)>>>18|0)-1|0);s=(( -e|0)+r|0)+((122+Rr(r)|0)-1|0)|0;t=MB(l,r,s);u=MB(m,r,s);v=MB(o,r,s);if(r<=21){if(CZ(CX(l,J(5)),
Q))q=Mq(l,r);else if(k)p=Mq(o,r);else if(Mq(m,r))u=Cb(u,J(1));}}else{w= -e|0;x=Jz(0,(Cu(w,732923)>>>20|0)-1|0);s=w-x|0;y=x-(Rr(s)-121|0)|0;t=Mp(l,s,y);u=Mp(m,s,y);v=Mp(o,s,y);r=x+e|0;if(x<=1){q=1;if(!k)u=Cb(u,J(1));else p=n!=1?0:1;}else if(x<63)q=EF(Bl(l,Cb(Cz(J(1),x-1|0),J(1))),Q)?0:1;}z=YD(u);w=(r+z|0)-1|0;ba=0;bb=0;if(!p&&!q){while(true){u=CF(u,J(10));bc=CF(v,J(10));if(Gp(u,bc))break;bb=T(CX(t,J(10)));t=CF(t,J(10));ba=ba+1|0;v=bc;}bc=Z(t,J(EF(t,v)&&bb<5?0:1));}else{while(true){u=CF(u,J(10));h=CF(v,J(10));if
(Gp(u,h))break;p=p&(EF(CX(v,J(10)),Q)?0:1);q=q&(bb?0:1);bb=T(CX(t,J(10)));t=CF(t,J(10));ba=ba+1|0;v=h;}if(p)while(CZ(CX(v,J(10)),Q)){q=q&(bb?0:1);bb=T(CX(t,J(10)));t=CF(t,J(10));v=CF(v,J(10));ba=ba+1|0;}if(q&&bb==5&&CZ(Bl(t,J(1)),Q))bb=4;bc=Z(t,J(!(CZ(t,v)&&!p)&&bb<5?0:1));}s=z-ba|0;bd=CM(b);if(j)Eb(b,45);br:{if(w<0){BO(b,B(666));be=(-1);while(be>w){Eb(b,48);be=be+(-1)|0;}bf=CM(b);be=0;while(be<s){Iz(b,bf,T(Z(J(48),CX(bc,J(10))))&65535);bc=CF(bc,J(10));be=be+1|0;}}else{e=w+1|0;if(e>=s){j=CM(b);be=0;while(be
<s){Iz(b,j,T(Z(J(48),CX(bc,J(10))))&65535);bc=CF(bc,J(10));be=be+1|0;}while(s<e){Eb(b,48);s=s+1|0;}BO(b,B(667));}else{bf=CM(b);be=0;while(true){if(be>=s)break br;if(((s-be|0)-1|0)==w)Iz(b,bf,46);Iz(b,bf,T(Z(J(48),CX(bc,J(10))))&65535);bc=CF(bc,J(10));be=be+1|0;}}}}if(d!=(-10000)){while(ba>=(-1)){Eb(b,48);ba=ba+(-1)|0;}if(Go(Z(J(bd),J(d)),J(CM(b))))Io(b,bd+d|0);}return b;}e=CM(b);if(c!==(-Infinity))BO(b,B(668));else BO(b,B(669));r:{if(d!=(-10000)){if(Go(Z(J(e),J(d)),J(CM(b))))Io(b,e+d|0);else{e=e+d|0;while(true)
{if(CM(b)>=e)break r;Eb(b,32);}}}}return b;}
let Rr=b=>{FY();return (Cu(b,1217359)>>>19|0)+1|0;}
let YD=b=>{FY();if(CN(b,E(2808348672, 232830643)))return 19;if(CN(b,E(1569325056, 23283064)))return 18;if(CN(b,E(1874919424, 2328306)))return 17;if(CN(b,E(2764472320, 232830)))return 16;if(CN(b,E(276447232, 23283)))return 15;if(CN(b,E(1316134912, 2328)))return 14;if(CN(b,E(3567587328, 232)))return 13;if(CN(b,E(1215752192, 23)))return 12;if(CN(b,E(1410065408, 2)))return 11;if(CN(b,J(1000000000)))return 10;if(CN(b,J(100000000)))return 9;if(CN(b,J(10000000)))return 8;if(CN(b,J(1000000)))return 7;if(CN(b,J(100000)))return 6;if
(CN(b,J(10000)))return 5;if(CN(b,J(1000)))return 4;if(CN(b,J(100)))return 3;if(Go(b,J(10)))return 1;return 2;}
let Mq=(b,c)=>{FY();return AAk(b)<c?0:1;}
let AAk=b=>{let c,d,e,f,g,h,i,j;FY();if(EF(CX(b,J(5)),Q))return 0;if(EF(CX(b,J(25)),Q))return 1;if(EF(CX(b,J(125)),Q))return 2;if(EF(CX(b,J(625)),Q))return 3;c=4;b=CF(b,J(625));while(true){if(Gp(b,Q)){d=new Bc;e=new I;e.m8=H(16);G(e,e.m7,B(43));Rb(e,e.m7,b,10);f=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if(i>=0&&i<=(j-0|0)){f.m9=O(g.data,0,i);d.m$=1;d.m_=1;d.na=f;D(d);}d=new L;d.m$=1;d.m_=1;Bj(d);D(d);}if(EF(CX(b,J(5)),Q))break;b=CF(b,J(5));c=c+1|0;}return c;}
let Mp=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FY();e=Y(b,31);f=Bl(b,J(2147483647));g=Vn.data;h=V(e,J(g[c].data[0]));i=V(f,J(g[c].data[0]));j=V(e,J(g[c].data[1]));k=V(f,J(g[c].data[1]));l=V(e,J(g[c].data[2]));m=V(f,J(g[c].data[2]));n=V(e,J(g[c].data[3]));o=V(f,J(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Y(Z(Y(Z(Z(Y(Z(Z(Y(Z(Z(Y(o,31),m),n),31),k),l),31),i),j),21),Cz(h,10)),p);q=new Bc;r=new I;r.m8=H(16);G(r,r.m7,B(43));K(r,r.m7,p,10);s=new M;g=r.m8;t=g.data;d=r.m7;P();p=t.length;if(d>=0&&d<=(p-0|0))
{s.m9=O(g.data,0,d);q.m$=1;q.m_=1;q.na=s;D(q);}q=new L;q.m$=1;q.m_=1;Bj(q);D(q);}
let MB=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;FY();e=Y(b,31);f=Bl(b,J(2147483647));g=Lm.data;h=V(e,J(g[c].data[0]));i=V(f,J(g[c].data[0]));j=V(e,J(g[c].data[1]));k=V(f,J(g[c].data[1]));l=V(e,J(g[c].data[2]));m=V(f,J(g[c].data[2]));n=V(e,J(g[c].data[3]));o=V(f,J(g[c].data[3]));p=(d-93|0)-21|0;if(p>=0)return Y(Z(Y(Z(Z(Y(Z(Z(Y(Z(Z(Y(o,31),m),n),31),k),l),31),i),j),21),Cz(h,10)),p);q=new Bc;r=new I;r.m8=H(16);G(r,r.m7,B(43));K(r,r.m7,p,10);s=new M;g=r.m8;t=g.data;d=r.m7;P();p=t.length;if(d>=0&&d<=(p-0|0))
{s.m9=O(g.data,0,d);q.m$=1;q.m_=1;q.na=s;D(q);}q=new L;q.m$=1;q.m_=1;Bj(q);D(q);}
let AGZ=()=>{let b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;Vn=ZR([4,326]);Lm=ZR([4,291]);A4l=H(32);BM();b=E_;if(b.nj){c=(b.ns+0|0)+1|0;d=R(c);D4(d,b.nh,0,31);e=new BF;f=b.nj;e.nH=(-2);e.nj=f;e.ns=c;e.nh=d;C1(e);b=e;}g=HF(b,E_);e=E_;if(e.nj){c=(e.ns+0|0)+1|0;d=R(c);D4(d,e.nh,0,31);b=new BF;f=e.nj;b.nH=(-2);b.nj=f;b.ns=c;b.nh=d;C1(b);e=b;}e=HF(e,E_);h=0;while(h<326){i=Rv(GG(J(5)),h);j=APn(i);FY();f=(Cu(h,1217359)>>>19|0)+1|0;if(f!=j){b=new BT;e=new I;e.m8=H(16);K(e,e.m7,j,10);G(e,e.m7,B(670));K(e,e.m7,f,10);g=new M;d=e.m8;k
=d.data;h=e.m7;P();c=k.length;if(h>=0&&h<=(c-0|0)){g.m9=O(d.data,0,h);b.m$=1;b.m_=1;b.na=g;D(b);}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}l=0;m=j-121|0;while(l<4){n=Vn.data[h];f=m+((3-l|0)*31|0)|0;if(f&&i.nj){if(f>0)b=Fa(i,f);else{c= -f|0;o=c>>5;f=c&31;c=(i.ns+o|0)+(f?1:0)|0;d=R(c);D4(d,i.nh,o,f);b=new BF;f=i.nj;b.nH=(-2);b.nj=f;b.ns=c;b.nh=d;C1(b);}}else b=i;d=n.data;b=ZS(b,g);d[l]=Cu(b.nj,b.nh.data[0]);l=l+1|0;}q:{if(h<Lm.data.length){p=(j-1|0)+122|0;b=ACm(AD3(Uq(E_,p),i),E_);c=0;while(true){if(c>=4)break q;if(!c)Lm.data[h].data[c]
=Q_(S0(b,(3-c|0)*31|0));else Lm.data[h].data[c]=Q_(Vi(S0(b,(3-c|0)*31|0),e));c=c+1|0;}}}h=h+1|0;}}
let IC=F();
let AVJ=(a,b,c,d)=>{let e,f,g,h;e=0;while(e<d){f=a.mF();if(f<0){if(!e)e=(-1);return e;}g=b.data;h=c+1|0;g[c]=f<<24>>24;e=e+1|0;c=h;}if(d<=0)d=(-1);return d;}
let AM$=a=>{return;}
function MM(){let a=this;IC.call(a);a.uK=null;a.r5=0;a.y6=0;a.uG=0;}
let AKu=a=>{let b=new MM();AIy(b,a);return b;}
let AIy=(a,b)=>{let c;c=b.data.length;a.uK=b;a.r5=0;a.y6=0;a.uG=0+c|0;}
let AJO=a=>{let b,c,d;b=a.r5;if(b>=a.uG)c=(-1);else{d=a.uK.data;a.r5=b+1|0;c=d[b]&255;}return c;}
let AXh=(a,b,c,d)=>{let e,f,g,h,i;e=a.uG-a.r5|0;if(d<e)e=d;f=0;while(f<e){g=b.data;d=c+1|0;h=a.uK.data;i=a.r5;a.r5=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
let ANp=a=>{return;}
let Lp=F(Fv);
let GI=F(BH);
let ACb=null;let A2f=null;let A0j=null;let Z9=()=>{Z9=Ba(GI);AIt();}
let AIt=()=>{let b,c;b=new GI;Z9();b.ni=B(671);b.nf=0;ACb=b;c=new GI;c.ni=B(672);c.nf=1;A2f=c;A0j=N(GI,[b,c]);}
function BF(){let a=this;EC.call(a);a.nh=null;a.ns=0;a.nj=0;a.nH=0;}
let C3=null;let E_=null;let APV=null;let Kv=null;let AS$=null;let ABB=null;let BM=()=>{BM=Ba(BF);AYl();}
let AN5=(a,b)=>{let c=new BF();AAM(c,a,b);return c;}
let A3T=(a,b)=>{let c=new BF();AFw(c,a,b);return c;}
let AAM=(a,b,c)=>{let d;BM();a.nH=(-2);a.nj=b;if(CZ(Bl(c,E(0, 4294967295)),Q)){a.ns=1;d=R(1);d.data[0]=T(c);a.nh=d;}else{a.ns=2;a.nh=EB([T(c),Gm(c)]);}}
let AFw=(a,b,c)=>{let d,e;BM();d=c.data;a.nH=(-2);e=d.length;if(e){a.nj=b;a.ns=e;a.nh=c;C1(a);}else{a.nj=0;a.ns=1;c=R(1);c.data[0]=0;a.nh=c;}}
let GG=b=>{BM();if(Go(b,Q)){if(CZ(b,J(-1)))return Kv;return AN5((-1),Hk(b));}if(W1(b,J(10)))return AN5(1,b);return AS$.data[T(b)];}
let ACm=(a,b)=>{return JA(a,b);}
let S0=(a,b)=>{let c,d,e,f;if(b&&a.nj){if(b>0)c=Fa(a,b);else{b= -b|0;d=b>>5;b=b&31;e=(a.ns+d|0)+(b?1:0)|0;f=R(e);D4(f,a.nh,d,b);c=new BF;b=a.nj;BM();c.nH=(-2);c.nj=b;c.ns=e;c.nh=f;C1(c);}return c;}return a;}
let Uq=(a,b)=>{let c,d,e,f;if(b&&a.nj){if(b<=0)c=Fa(a, -b|0);else{d=b>>5;b=b&31;e=(a.ns+d|0)+(b?1:0)|0;f=R(e);D4(f,a.nh,d,b);c=new BF;b=a.nj;BM();c.nH=(-2);c.nj=b;c.ns=e;c.nh=f;C1(c);}return c;}return a;}
let SB=(a,b)=>{let c,d,e,f,g,h;if(!b)return !(a.nh.data[0]&1)?0:1;if(b<0){c=new JM;c.m$=1;c.m_=1;c.na=B(673);D(c);}d=b>>5;if(d>=a.ns)return a.nj>=0?0:1;e=a.nh.data;f=e[d];b=1<<(b&31);g=a.nj;if(g<0){if(a.nH==(-2)){if(!g)g=(-1);else{g=0;while(!e[g]){g=g+1|0;}}a.nH=g;}h=a.nH;if(d<h)return 0;f=h==d? -f|0:f^(-1);}return !(f&b)?0:1;}
let Vi=(a,b)=>{return ZS(a,b);}
let Q_=a=>{return Cu(a.nj,a.nh.data[0]);}
let Jh=(a,b)=>{let c,d,e;if(a===b)return 1;if(!(b instanceof BF))return 0;d:{if(a.nj==b.nj){c=a.ns;if(c==b.ns){d=b.nh;c=c-1|0;while(c>=0){e=d.data;if(a.nh.data[c]!=e[c])break;c=c+(-1)|0;}if(c>=0?0:1){c=1;break d;}}}c=0;}return c;}
let Rv=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new JM;c.m$=1;c.m_=1;c.na=B(674);D(c);}if(!b){BM();return E_;}if(b!=1){BM();if(!Jh(a,E_)&&!Jh(a,C3)){if(SB(a,0))return XS(a,b);d=1;while(!SB(a,d)){d=d+1|0;}c=AFd(Cu(d,b));if(d&&a.nj){if(d>0)a=Fa(a,d);else{d= -d|0;e=d>>5;d=d&31;f=(a.ns+e|0)+(d?1:0)|0;g=R(f);D4(g,a.nh,e,d);h=new BF;d=a.nj;h.nH=(-2);h.nj=d;h.ns=f;h.nh=g;C1(h);a=h;}}h=Rv(a,b);if(!h.nj)c=C3;else if(!c.nj)c=C3;else{FS();c=Fo(c,h);}return c;}}return a;}
let AD3=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=b.nj;if(!c){b=new JM;b.m$=1;b.m_=1;b.na=B(675);D(b);}d=b.ns;e=BS(d,1);if(!e&&b.nh.data[0]==1?1:0){if(c<=0){c=a.nj;if(!c)b=a;else{b=new BF;c= -c|0;f=a.ns;g=a.nh;BM();b.nH=(-2);b.nj=c;b.ns=f;b.nh=g;}a=b;}return a;}f=a.nj;h=a.ns;if((h+d|0)==2){i=CF(Bl(J(a.nh.data[0]),E(4294967295, 0)),Bl(J(b.nh.data[0]),E(4294967295, 0)));if(f!=c)i=Hk(i);return GG(i);}j=BS(h,d);j=!j?PP(a.nh,b.nh,h):j<=0?(-1):1;if(!j){if(f!=c){BM();b=Kv;}else{BM();b=E_;}return b;}if(j==(-1)){BM();return C3;}k
=(h-d|0)+1|0;g=R(k);l=f!=c?(-1):1;if(e)APa(g,k,a.nh,h,b.nh,d);else AKa(g,a.nh,h,b.nh.data[0]);m=new BF;BM();m.nH=(-2);m.nj=l;m.ns=k;m.nh=g;C1(m);return m;}
let C1=a=>{let b,c,d;while(true){b=a.ns;if(b<=0)break;c=a.nh.data;b=b-1|0;a.ns=b;if(c[b])break;}c=a.nh.data;d=a.ns;a.ns=d+1|0;if(!c[d])a.nj=0;}
let AFd=b=>{let c,d,e,f,g;BM();c=ABB.data;if(b<c.length)return c[b];d=b>>5;e=b&31;f=d+1|0;c=R(f);c.data[d]=1<<e;g=new BF;g.nH=(-2);g.nj=1;g.ns=f;g.nh=c;return g;}
let AYl=()=>{let b,c,d,e,f,g,h,i;b=new BF;BM();b.nH=(-2);b.nj=0;b.ns=1;c=R(1);c.data[0]=0;b.nh=c;C3=b;d=new BF;d.nH=(-2);d.nj=1;d.ns=1;c=R(1);c.data[0]=1;d.nh=c;E_=d;e=new BF;e.nH=(-2);e.nj=1;e.ns=1;c=R(1);c.data[0]=10;e.nh=c;APV=e;f=new BF;f.nH=(-2);f.nj=(-1);f.ns=1;c=R(1);c.data[0]=1;f.nh=c;Kv=f;c=Bo(BF,11);g=c.data;g[0]=b;g[1]=d;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=2;b.nh=h;g[2]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=3;b.nh=h;g[3]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]
=4;b.nh=h;g[4]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=5;b.nh=h;g[5]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=6;b.nh=h;g[6]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=7;b.nh=h;g[7]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=8;b.nh=h;g[8]=b;b=new BF;b.nH=(-2);b.nj=1;b.ns=1;h=R(1);h.data[0]=9;b.nh=h;g[9]=b;g[10]=e;AS$=c;ABB=Bo(BF,32);i=0;while(true){c=ABB.data;if(i>=c.length)break;c[i]=GG(Cz(J(1),i));i=i+1|0;}}
let Ml=F(Gx);
let JM=F(BL);
let HC=F();
let AZL=null;let A3z=null;let S7=null;let Vw=null;let FS=()=>{FS=Ba(HC);AHG();}
let Fo=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;FS();if(c.ns<=b.ns){d=c;c=b;b=d;}if(b.ns<63)return Wa(c,b);e=c.ns;f=(e&(-2))<<4;if(f&&c.nj){if(f>0)d=Fa(c,f);else{g= -f|0;h=g>>5;g=g&31;e=(e+h|0)+(g?1:0)|0;i=R(e);D4(i,c.nh,h,g);d=new BF;h=c.nj;BM();d.nH=(-2);d.nj=h;d.ns=e;d.nh=i;C1(d);}}else d=c;if(f&&b.nj){if(f>0)j=Fa(b,f);else{e= -f|0;h=e>>5;e=e&31;g=(b.ns+h|0)+(e?1:0)|0;i=R(g);D4(i,b.nh,h,e);j=new BF;e=b.nj;BM();j.nH=(-2);j.nj=e;j.ns=g;j.nh=i;C1(j);}}else j=b;if(f&&d.nj){if(f<=0)k=Fa(d, -f|0);else{e=f>>5;h=f&31;g
=(d.ns+e|0)+(h?1:0)|0;i=R(g);D4(i,d.nh,e,h);k=new BF;e=d.nj;BM();k.nH=(-2);k.nj=e;k.ns=g;k.nh=i;C1(k);}}else k=d;l=HF(c,k);if(f&&j.nj){if(f<=0)c=Fa(j, -f|0);else{e=f>>5;h=f&31;g=(j.ns+e|0)+(h?1:0)|0;i=R(g);D4(i,j.nh,e,h);c=new BF;e=j.nj;BM();c.nH=(-2);c.nj=e;c.ns=g;c.nh=i;C1(c);}}else c=j;m=HF(b,c);k=Fo(d,j);n=Fo(l,m);b=JA(JA(Fo(HF(d,l),HF(m,j)),k),n);if(f&&b.nj){if(f<=0)b=Fa(b, -f|0);else{e=f>>5;h=f&31;g=(b.ns+e|0)+(h?1:0)|0;i=R(g);D4(i,b.nh,e,h);c=new BF;e=b.nj;BM();c.nH=(-2);c.nj=e;c.ns=g;c.nh=i;C1(c);b=
c;}}e=f<<1;if(e&&k.nj){if(e<=0)k=Fa(k, -e|0);else{f=e>>5;e=e&31;h=(k.ns+f|0)+(e?1:0)|0;i=R(h);D4(i,k.nh,f,e);c=new BF;e=k.nj;BM();c.nH=(-2);c.nj=e;c.ns=h;c.nh=i;C1(c);k=c;}}return JA(JA(k,b),n);}
let Wa=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n;FS();d=b.ns;e=c.ns;f=d+e|0;g=b.nj==c.nj?1:(-1);if(f!=2){h=b.nh;i=c.nh;j=R(f);ACZ(h,d,i,e,j);k=new BF;BM();k.nH=(-2);k.nj=g;k.ns=f;k.nh=j;C1(k);return k;}l=Z(Z(V(Bl(J(b.nh.data[0]),E(4294967295, 0)),Bl(J(c.nh.data[0]),E(4294967295, 0))),Q),Q);m=T(l);n=Gm(l);if(!n){b=new BF;BM();b.nH=(-2);b.nj=g;b.ns=1;h=R(1);h.data[0]=m;b.nh=h;}else{b=new BF;h=EB([m,n]);BM();b.nH=(-2);b.nj=g;b.ns=2;b.nh=h;}return b;}
let ACZ=(b,c,d,e,f)=>{let g,h,i,j,k;FS();if(c&&e){if(c==1){g=b.data[0];h=Q;c=0;i=Bl(J(g),E(4294967295, 0));while(c<e){b=d.data;j=f.data;h=Z(Z(V(Bl(J(b[c]),E(4294967295, 0)),i),Bl(J(T(h)),E(4294967295, 0))),Q);j[c]=T(h);h=Y(h,32);c=c+1|0;}f.data[e]=T(h);}else if(e!=1)UW(b,d,f,c,e);else{e=d.data[0];k=Q;g=0;h=Bl(J(e),E(4294967295, 0));while(g<c){d=b.data;j=f.data;k=Z(Z(V(Bl(J(d[g]),E(4294967295, 0)),h),Bl(J(T(k)),E(4294967295, 0))),Q);j[g]=T(k);k=Y(k,32);g=g+1|0;}f.data[c]=T(k);}return;}}
let UW=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;FS();if(b===c&&e==f){Qc(b,e,d);return;}g=0;while(g<e){h=b.data;i=Q;j=h[g];k=0;l=Bl(J(j),E(4294967295, 0));while(k<f){h=c.data;m=d.data;j=h[k];n=g+k|0;o=m[n];p=T(i);i=Z(Z(V(l,Bl(J(j),E(4294967295, 0))),Bl(J(o),E(4294967295, 0))),Bl(J(p),E(4294967295, 0)));m[n]=T(i);i=Y(i,32);k=k+1|0;}d.data[g+f|0]=T(i);g=g+1|0;}}
let XS=(b,c)=>{let d,e,f,g;FS();BM();d=E_;while(c>1){if(c&1)d=!b.nj?C3:!d.nj?C3:Fo(d,b);e=b.ns;if(e!=1)f=A3T(1,Qc(b.nh,e,R(e<<1)));else{g=b.nj;f=!g?C3:!g?C3:Fo(b,b);}c=c>>1;b=f;}return !b.nj?C3:!d.nj?C3:Fo(d,b);}
let Qc=(b,c,d)=>{let e,f,g,h,i,j,k,l,m,n,o,p;FS();e=0;while(e<c){f=Q;g=e+1|0;h=g;while(h<c){i=b.data;j=d.data;k=i[e];l=i[h];m=e+h|0;n=j[m];o=T(f);f=Z(Z(V(Bl(J(k),E(4294967295, 0)),Bl(J(l),E(4294967295, 0))),Bl(J(n),E(4294967295, 0))),Bl(J(o),E(4294967295, 0)));j[m]=T(f);f=Y(f,32);h=h+1|0;}d.data[e+c|0]=T(f);e=g;}e=c<<1;k=0;h=0;while(h<e){i=d.data;l=i[h];i[h]=l<<1|k;k=l>>>31|0;h=h+1|0;}if(k)d.data[e]=k;f=Q;e=0;k=0;while(e<c){i=b.data;j=d.data;g=i[e];h=i[e];m=j[k];l=T(f);f=Z(Z(V(Bl(J(g),E(4294967295, 0)),Bl(J(h),
E(4294967295, 0))),Bl(J(m),E(4294967295, 0))),Bl(J(l),E(4294967295, 0)));j[k]=T(f);p=Y(f,32);k=k+1|0;f=Z(p,Bl(J(j[k]),E(4294967295, 0)));j[k]=T(f);f=Y(f,32);e=e+1|0;k=k+1|0;}return d;}
let AHG=()=>{let b,c,d,e,f,g;AZL=EB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A3z=EB([1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);S7=Bo(BF,32);Vw=Bo(BF,32);b=J(1);c=0;while(c<=18){Vw.data[c]=GG(b);S7.data[c]=GG(Cz(b,c));b=V(b,J(5));c=c+1|0;}while(c<S7.data.length){d=Vw.data;e=c-1|0;f=d[e];g=d[1];if(!g.nj){BM();f=C3;}else if(!f.nj){BM();f=C3;}else{FS();f=Fo(f,g);}d[c]=f;d=S7.data;f=d[e];BM();g=APV;if(!g.nj)f=C3;else if(!f.nj)f=C3;else{FS();f
=Fo(f,g);}d[c]=f;c=c+1|0;}}
let Wv=F();
let APn=b=>{let c,d,e,f,g,h;c=b.nj;if(!c)return 0;d=b.ns;e=d<<5;f=b.nh.data;g=d-1|0;h=f[g];if(c<0){if(b.nH==(-2)){if(!c)c=(-1);else{c=0;while(!f[c]){c=c+1|0;}}b.nH=c;}if(b.nH==g)h=h+(-1)|0;}return e-G2(h)|0;}
let D4=(b,c,d,e)=>{let f,g,h,i,j,k;b:{if(!e)Ci(c,0,b,d,b.data.length-d|0);else{f=b.data;g=32-e|0;h=f.length-1|0;f[h]=0;while(true){if(h<=d)break b;i=c.data;j=f[h];k=(h-d|0)-1|0;f[h]=j|(i[k]>>>g|0);f[h-1|0]=i[k]<<e;h=h+(-1)|0;}}}j=0;while(j<d){b.data[j]=0;j=j+1|0;}}
let Fa=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;d=c>>5;c=c&31;e=b.ns;if(d>=e){if(b.nj>=0){BM();b=C3;}else{BM();b=Kv;}return b;}k:{e=e-d|0;f=e+1|0;g=R(f);AEL(g,e,b.nh,d,c);h=b.nj;if(h>=0)f=e;else{i=0;while(true){j=BS(i,d);if(j>=0)break;if(b.nh.data[i])break;i=i+1|0;}if(j>=0){if(c<=0){f=e;break k;}if(!(b.nh.data[i]<<(32-c|0))){f=e;break k;}}k=g.data;l=0;while(true){i=BS(l,e);if(i>=0)break;if(k[l]!=(-1))break;k[l]=0;l=l+1|0;}if(i)f=e;k[l]=k[l]+1|0;}}m=new BF;BM();m.nH=(-2);m.nj=h;m.ns=f;m.nh=g;C1(m);return m;}
let AEL=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=1;h=0;while(h<e){g=g&(d.data[h]?0:1);h=h+1|0;}if(!f)Ci(d,e,b,0,c);else{i=d.data;j=32-f|0;g=g&(i[h]<<j?0:1);k=0;l=c-1|0;while(k<l){d=b.data;c=k+e|0;d[k]=(i[c]>>>f|0)|i[c+1|0]<<j;k=k+1|0;}b.data[k]=i[k+e|0]>>>f|0;}return g;}
let MR=F();
let A28=null;let ANy=null;let Y2=b=>{let c,d,e,f,g,h,i,j;c=BI(b.m9.length/2|0);d=c.data;e=0;f=d.length;b:{a:{while(e<f){g=e*2|0;if(g<0)break b;if(g>=b.m9.length)break b;h=b.m9.charCodeAt(g);g=g+1|0;if(g<0)break a;if(g>=b.m9.length)break a;i=b.m9.charCodeAt(g);j=ANy.data;d[e]=((j[h]<<4)+j[i]|0)<<24>>24;e=e+1|0;}return c;}b=new U;b.m$=1;b.m_=1;D(b);}b=new U;b.m$=1;b.m_=1;D(b);}
let ACF=()=>{let b,c,d,e;b=H(16);c=b.data;c[0]=48;c[1]=49;c[2]=50;c[3]=51;c[4]=52;c[5]=53;c[6]=54;c[7]=55;c[8]=56;c[9]=57;c[10]=65;c[11]=66;c[12]=67;c[13]=68;c[14]=69;c[15]=70;A28=b;b=R(128);d=b.data;ANy=b;e=0;while(e<c.length){d[c[e]]=e;if(c[e]>=65)d[(c[e]-65|0)+97|0]=e;e=e+1|0;}}
function LM(){Bc.call(this);this.Ev=null;}
function T2(){let a=this;IC.call(a);a.yZ=0;a.zA=null;}
let AP0=a=>{let b,c;if(a.yZ==a.zA.pO.length)return (-1);b=a.zA;c=a.yZ;a.yZ=c+1|0;return b.pO[c]&255;}
let Tx=F();
let AFg=null;let A1M=()=>{A1M=Ba(Tx);AUb();}
let AUb=()=>{let b,c,d,e,f;b=new JE;c=Ko(16);b.rv=0;d=Bo(F2,c);e=d.data;b.pj=d;b.v5=0.75;b.sM=e.length*0.75|0;AFg=b;e=Bo(ET,6).data;A0s();e[0]=ANi;e[1]=AVy;e[2]=ASX;e[3]=ASi;e[4]=ATn;e[5]=ATP;c=e.length;f=0;while(f<c){b=e[f];Ki(AFg,b.rs,b);f=f+1|0;}}
let GN=F();
let ANi=null;let AVy=null;let ASX=null;let ASi=null;let ATn=null;let ATP=null;let A0s=()=>{A0s=Ba(GN);AQ3();}
let AQ3=()=>{let b,c,d,e,f,g,h,i;CO();ANi=CW;b=new QD;c=Bo(M,0);d=c.data;Ep(B(676));e=d.length;f=0;while(f<e){Ep(d[f]);f=f+1|0;}b.rs=B(676);b.tH=c.s();AVy=b;b=new PG;c=Bo(M,0);d=c.data;Ep(B(677));e=d.length;f=0;while(f<e){Ep(d[f]);f=f+1|0;}b.rs=B(677);b.tH=c.s();ASX=b;g=new JH;c=Bo(M,0);d=c.data;Ep(B(678));h=d.length;i=0;while(i<h){Ep(d[i]);i=i+1|0;}g.rs=B(678);g.tH=c.s();g.xo=1;g.wc=0;ASi=g;b=new JH;c=Bo(M,0);d=c.data;Ep(B(679));h=d.length;i=0;while(i<h){Ep(d[i]);i=i+1|0;}b.rs=B(679);b.tH=c.s();b.xo=0;b.wc
=0;ATn=b;b=new JH;c=Bo(M,0);d=c.data;Ep(B(680));h=d.length;i=0;while(i<h){Ep(d[i]);i=i+1|0;}b.rs=B(680);b.tH=c.s();b.xo=0;b.wc=1;ATP=b;}
let QD=F(ET);
let AF7=a=>{let b,c,d,e,f;b=new R8;c=BI(1);d=c.data;d[0]=63;Ev();e=Ge;b.s6=e;b.sQ=e;f=d.length;if(f&&f>=b.rp){b.wi=a;b.uY=c.s();b.vp=1.0;b.rp=1.0;b.uP=H(512);b.uC=BI(512);return b;}e=new Bc;Kr(e,B(468));D(e);}
let PG=F(ET);
let AUw=a=>{let b,c,d,e,f;b=new Tf;c=BI(1);d=c.data;d[0]=63;Ev();e=Ge;b.s6=e;b.sQ=e;f=d.length;if(f&&f>=b.rp){b.wi=a;b.uY=c.s();b.vp=1.0;b.rp=1.0;b.uP=H(512);b.uC=BI(512);return b;}e=new Bc;Kr(e,B(468));D(e);}
function JH(){let a=this;ET.call(a);a.xo=0;a.wc=0;}
let AGV=a=>{let b,c,d,e,f,g,h;b=new O$;c=a.xo;d=a.wc;e=BI(1);f=e.data;f[0]=63;Ev();g=Ge;b.s6=g;b.sQ=g;h=f.length;if(h&&h>=b.rp){b.wi=a;b.uY=e.s();b.vp=2.0;b.rp=4.0;b.uP=H(512);b.uC=BI(512);b.yQ=c;b.y$=d;return b;}g=new Bc;Kr(g,B(468));D(g);}
let AC8=F();
let PP=(b,c,d)=>{let e,f;e=d-1|0;while(e>=0){f=c.data;if(b.data[e]!=f[e])break;e=e+(-1)|0;}if(e<0)d=0;else{c=c.data;d=CN(Bl(J(b.data[e]),E(4294967295, 0)),Bl(J(c[e]),E(4294967295, 0)))?1:(-1);}return d;}
let JA=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=b.nj;e=c.nj;if(!d)return c;if(!e)return b;f=b.ns;g=c.ns;if((f+g|0)==2){h=Bl(J(b.nh.data[0]),E(4294967295, 0));i=Bl(J(c.nh.data[0]),E(4294967295, 0));if(d!=e)return GG(d>=0?Cb(h,i):Cb(i,h));j=Z(h,i);k=T(j);l=Gm(j);if(!l){b=new BF;BM();b.nH=(-2);b.nj=d;b.ns=1;m=R(1);m.data[0]=k;b.nh=m;}else{b=new BF;m=EB([k,l]);BM();b.nH=(-2);b.nj=d;b.ns=2;b.nh=m;}return b;}if(d==e){if(f<g){m=c.nh;n=b.nh;o=R(g+1|0);My(o,m,g,n,f);}else{n=b.nh;m=c.nh;o=R(f+1|0);My(o,n,f,m,g);}}else
{p=BS(f,g);p=!p?PP(b.nh,c.nh,f):p<=0?(-1):1;if(!p){BM();return C3;}if(p!=1){m=c.nh;n=b.nh;o=R(g);Mx(o,m,g,n,f);d=e;}else{m=b.nh;n=c.nh;o=R(f);Mx(o,m,f,n,g);}}m=o.data;q=new BF;e=m.length;BM();q.nH=(-2);q.nj=d;q.ns=e;q.nh=o;C1(q);return q;}
let My=(b,c,d,e,f)=>{let g,h,i,j;g=b.data;b=e.data;c=c.data;h=Z(Bl(J(c[0]),E(4294967295, 0)),Bl(J(b[0]),E(4294967295, 0)));g[0]=T(h);i=Fm(h,32);if(d<f){j=1;while(j<d){h=Z(i,Z(Bl(J(c[j]),E(4294967295, 0)),Bl(J(b[j]),E(4294967295, 0))));g[j]=T(h);i=Fm(h,32);j=j+1|0;}while(j<f){h=Z(i,Bl(J(b[j]),E(4294967295, 0)));g[j]=T(h);i=Fm(h,32);j=j+1|0;}}else{j=1;while(j<f){h=Z(i,Z(Bl(J(c[j]),E(4294967295, 0)),Bl(J(b[j]),E(4294967295, 0))));g[j]=T(h);i=Fm(h,32);j=j+1|0;}while(j<d){h=Z(i,Bl(J(c[j]),E(4294967295, 0)));g[j]
=T(h);i=Fm(h,32);j=j+1|0;}}if(EF(i,Q))g[j]=T(i);}
let HF=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=b.nj;e=c.nj;if(!e)return b;if(!d){if(!e)b=c;else{b=new BF;d= -e|0;e=c.ns;f=c.nh;BM();b.nH=(-2);b.nj=d;b.ns=e;b.nh=f;}return b;}g=b.ns;h=c.ns;if((g+h|0)==2){i=Bl(J(b.nh.data[0]),E(4294967295, 0));j=Bl(J(c.nh.data[0]),E(4294967295, 0));if(d<0)i=Hk(i);if(e<0)j=Hk(j);return GG(Cb(i,j));}k=BS(g,h);l=!k?PP(b.nh,c.nh,g):k<=0?(-1):1;if(l==(-1)){k= -e|0;if(d==e){f=c.nh;m=b.nh;n=R(h);Mx(n,f,h,m,g);}else{f=c.nh;m=b.nh;n=R(h+1|0);My(n,f,h,m,g);}}else if(d!=e){f=b.nh;m=c.nh;n
=R(g+1|0);My(n,f,g,m,h);k=d;}else{if(!l){BM();return C3;}f=b.nh;m=c.nh;n=R(g);Mx(n,f,g,m,h);k=d;}f=n.data;o=new BF;d=f.length;BM();o.nH=(-2);o.nj=k;o.ns=d;o.nh=n;C1(o);return o;}
let Mx=(b,c,d,e,f)=>{let g,h,i,j,k,l;g=Q;h=0;while(h<f){i=b.data;j=e.data;k=Z(g,Cb(Bl(J(c.data[h]),E(4294967295, 0)),Bl(J(j[h]),E(4294967295, 0))));i[h]=T(k);g=Fm(k,32);h=h+1|0;}while(h<d){l=b.data;k=Z(g,Bl(J(c.data[h]),E(4294967295, 0)));l[h]=T(k);g=Fm(k,32);h=h+1|0;}}
let AAD=F();
let APa=(b,c,d,e,f,g)=>{let h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=f.data;i=R(e+1|0);j=R(g+1|0);k=g-1|0;l=G2(h[k]);if(l){D4(j,f,0,l);D4(i,d,0,l);}else{Ci(d,0,i,0,e);Ci(f,0,j,0,g);}h=j.data;f=i.data;m=h[k];n=c-1|0;o=g-2|0;p=Bl(J(m),E(4294967295, 0));while(n>=0){k:{if(f[e]==m)q=(-1);else{r=ALJ(Z(Cz(Bl(J(f[e]),E(4294967295, 0)),32),Bl(J(f[e-1|0]),E(4294967295, 0))),m);q=T(r);s=Gm(r);if(q){t=0;q=q+1|0;while(true){q=q+(-1)|0;if(t)break;u=V(Bl(J(q),E(4294967295, 0)),Bl(J(h[o]),E(4294967295, 0)));v=J(s);r=Z(Cz(v,32),
Bl(J(f[e-2|0]),E(4294967295, 0)));w=Z(Bl(v,E(4294967295, 0)),p);if(G2(Gm(w))>=32)s=T(w);else t=1;if(Gp(By(u,E(0, 2147483648)),By(r,E(0, 2147483648))))break k;}}}}if(q){c=e-g|0;if(AQ2(i,c,j,g,q)){q=q+(-1)|0;v=Q;x=0;while(x<g){k=c+x|0;v=Z(v,Z(Bl(J(f[k]),E(4294967295, 0)),Bl(J(h[x]),E(4294967295, 0))));f[k]=T(v);v=Y(v,32);x=x+1|0;}}}if(b!==null)b.data[n]=q;e=e+(-1)|0;n=n+(-1)|0;}if(l){AEL(j,g,i,0,l);return j;}Ci(i,0,j,0,g);return i;}
let AKa=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;f=Q;g=Bl(J(e),E(4294967295, 0));h=d-1|0;i=J(e>>>1|0);e=e&1;j=Cz(g,1);while(h>=0){k=c.data;l=G$(Cz(f,32),Bl(J(k[h]),E(4294967295, 0)));if(CN(l,Q)){m=CF(l,g);f=CX(l,g);}else{n=Y(l,1);m=CF(n,i);f=Z(Cz(CX(n,i),1),Bl(l,J(1)));if(e){if(Gp(m,f))f=Cb(f,m);else if(W1(Cb(m,f),g)){f=Z(f,Cb(j,m));m=Cb(m,J(2));}else{f=Z(f,Cb(g,m));m=Cb(m,J(1));}}}b.data[h]=T(Bl(m,E(4294967295, 0)));h=h+(-1)|0;}return T(f);}
let ALJ=(b,c)=>{let d,e,f,g,h;d=Bl(J(c),E(4294967295, 0));if(CN(b,Q)){e=CF(b,d);f=CX(b,d);}else{g=Y(b,1);h=J(c>>>1|0);e=CF(g,h);f=Z(Cz(CX(g,h),1),Bl(b,J(1)));if(c&1){if(Gp(e,f))f=Cb(f,e);else if(Gp(Cb(e,f),d)){f=Z(f,Cb(d,e));e=Cb(e,J(1));}else{f=Z(f,Cb(Cz(d,1),e));e=Cb(e,J(2));}}}return G$(Cz(f,32),Bl(e,E(4294967295, 0)));}
let AQ2=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=Q;h=Q;i=0;j=Bl(J(f),E(4294967295, 0));while(i<e){k=d.data;l=b.data;f=k[i];m=T(g);FS();g=Z(Z(V(Bl(J(f),E(4294967295, 0)),j),Bl(J(m),E(4294967295, 0))),Q);m=c+i|0;n=Z(Cb(Bl(J(l[m]),E(4294967295, 0)),Bl(g,E(4294967295, 0))),h);l[m]=T(n);h=Fm(n,32);g=Y(g,32);i=i+1|0;}b=b.data;c=c+e|0;j=Z(Cb(Bl(J(b[c]),E(4294967295, 0)),g),h);b[c]=T(j);return Gm(j);}
function Oc(){let a=this;C.call(a);a.tr=null;a.q$=null;a.t8=0;a.uh=0;}
function Q6(){let a=this;C.call(a);a.vr=0;a.tI=0;a.qL=0;a.wP=Q;a.yX=null;a.A9=null;a.CT=Q;a.AY=null;}
let AFr=F();
let ZS=(b,c)=>{if(c.nj&&b.nj){BM();if(Jh(c,Kv))return b;if(Jh(b,Kv))return c;if(b.nj>0){if(c.nj<=0)return ADm(b,c);return AWC(b,c);}if(c.nj>0)return ADm(c,b);if(b.ns<=c.ns)return ACt(c,b);return ACt(b,c);}BM();return C3;}
let AWC=(b,c)=>{let d,e,f,g,h,i,j;d=b.ns;e=c.ns;if(d<e)e=d;if(b.nH==(-2)){if(!b.nj)d=(-1);else{d=0;while(!b.nh.data[d]){d=d+1|0;}}b.nH=d;}f=b.nH;if(c.nH==(-2)){if(!c.nj)d=(-1);else{d=0;while(!c.nh.data[d]){d=d+1|0;}}c.nH=d;}g=c.nH;if(f>g)g=f;if(g>=e){BM();return C3;}h=R(e);i=h.data;while(g<e){i[g]=b.nh.data[g]&c.nh.data[g];g=g+1|0;}j=new BF;BM();j.nH=(-2);j.nj=1;j.ns=e;j.nh=h;C1(j);return j;}
let ADm=(b,c)=>{let d,e,f,g,h,i,j;if(b.nH==(-2)){if(!b.nj)d=(-1);else{d=0;while(!b.nh.data[d]){d=d+1|0;}}b.nH=d;}e=b.nH;if(c.nH==(-2)){if(!c.nj)d=(-1);else{d=0;while(!c.nh.data[d]){d=d+1|0;}}c.nH=d;}f=c.nH;d=b.ns;if(f>=d){BM();return C3;}g=R(d);if(e<=f)e=f;if(e==f){g.data[e]=( -c.nh.data[e]|0)&b.nh.data[e];e=e+1|0;}f=c.ns;h=f>=d?d:f;i=g.data;while(e<h){i[e]=(c.nh.data[e]^(-1))&b.nh.data[e];e=e+1|0;}i:{if(e>=f)while(true){if(e>=d)break i;i[e]=b.nh.data[e];e=e+1|0;}}j=new BF;BM();j.nH=(-2);j.nj=1;j.ns=d;j.nh=
g;C1(j);return j;}
let ACt=(b,c)=>{let d,e,f,g,h,i,j,k,l,m;if(b.nH==(-2)){if(!b.nj)d=(-1);else{d=0;while(!b.nh.data[d]){d=d+1|0;}}b.nH=d;}e=b.nH;if(c.nH==(-2)){if(!c.nj)d=(-1);else{d=0;while(!c.nh.data[d]){d=d+1|0;}}c.nH=d;}f=c.nH;d=c.ns;if(e>=d)return b;g=BS(f,e);if(g>0)e=f;h=g>0?( -c.nh.data[e]|0)&(b.nh.data[e]^(-1)):g>=0?( -c.nh.data[e]|0)&( -b.nh.data[e]|0):(c.nh.data[e]^(-1))&( -b.nh.data[e]|0);if(!h){e=e+1|0;i:{while(e<d){h=(b.nh.data[e]|c.nh.data[e])^(-1);if(h)break i;e=e+1|0;}}if(!h){bq:{while(true){g=b.ns;if(e>=g)break;h
=b.nh.data[e]^(-1);if(h)break bq;e=e+1|0;}}if(!h){d=g+1|0;i=R(d);i.data[d-1|0]=1;j=new BF;BM();j.nH=(-2);j.nj=(-1);j.ns=d;j.nh=i;return j;}}}k=b.ns;l=R(k);m=l.data;m[e]= -h|0;h=e+1|0;while(h<d){m[h]=b.nh.data[h]|c.nh.data[h];h=h+1|0;}while(h<k){m[h]=b.nh.data[h];h=h+1|0;}j=new BF;BM();j.nH=(-2);j.nj=(-1);j.ns=k;j.nh=l;return j;}
function Sx(){let a=this;C.call(a);a.w_=null;a.CE=null;a.C$=0;a.ym=0;}
let YZ=(a,b)=>{let c;c=a.w_;return (c.nb-c.nc|0)<b?0:1;}
let VQ=(a,b)=>{let c;c=a.CE;return (c.nb-c.nc|0)<b?0:1;}
let GQ=F(Fv);
let M4=F(Gx);
function PU(){let a=this;D$.call(a);a.qd=null;a.Ff=null;}
function AAU(){let a=this;C.call(a);a.AT=0;a.E7=0;a.Cs=null;}
let A18=(a,b)=>{let c=new AAU();AKT(c,a,b);return c;}
let AKT=(a,b,c)=>{a.Cs=b;a.E7=c;a.AT=c;}
let APq=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.Cs;c=a.AT;b=b.pK;d=b.pN;if(!d){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}if(c>=0){e=BS(c,b.qD);if(e<0){k:{f=b.oj.data;g=c*2|0;if(f[g]<0)b=null;else{b=b.rf;if(!d){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}if(c>=0&&e<0){h=f[g];if(!d){b=new BT;b.m$=1;b.m_=1;Bj(b);D(b);}if(c<0)break k;if(e>=0)break k;b=B1(b,h,f[g+1|0]);}else{b=new L;P();i=new I;CU(i);i.m8=H(16);K(i,i.m7,c,10);j=new M;f=i.m8;k=f.data;h=i.m7;CU(j);Kx(0,h,k.length);j.m9=O(f.data,0,h);b.m$=1;b.m_=1;Bj(b);b.na=j;D(b);}}return b;}b
=new L;P();i=new I;CU(i);i.m8=H(16);K(i,i.m7,c,10);j=new M;f=i.m8;k=f.data;h=i.m7;CU(j);Kx(0,h,k.length);j.m9=O(f.data,0,h);b.m$=1;b.m_=1;Bj(b);b.na=j;D(b);}}b=new L;P();i=new I;CU(i);i.m8=H(16);K(i,i.m7,c,10);j=new M;f=i.m8;k=f.data;h=i.m7;CU(j);Kx(0,h,k.length);j.m9=O(f.data,0,h);b.m$=1;b.m_=1;Bj(b);b.na=j;D(b);}
let R8=F(Fp);
let AMW=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j>=d){n=h.tr;if(!((n.nb-n.nc|0)<2?0:1)){i=DE;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new Cm;i.nZ=2;i.oa=1;break b;}j=j+(-1)|0;i=new Cm;i.nZ=3;i.oa=2;break b;}if(m!=56320?0:1){i=new Cm;i.nZ=2;i.oa=1;}if(l>=128){i=new Cm;i.nZ=3;i.oa=1;j=j+(-1)|0;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.t8=j;h.uh=f;return i;}
let Tf=F(Fp);
let AT0=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g){j=c;break b;}k=b.data;j=c+1|0;l=k[c];m=l&64512;if(m!=55296?0:1){if(j==d){n=h.tr;if(!((n.nb-n.nc|0)<2?0:1)){i=DE;break b;}j=j+(-1)|0;break b;}if(!((k[j]&64512)!=56320?0:1)){i=new Cm;i.nZ=2;i.oa=1;break b;}j=j+(-1)|0;i=new Cm;i.nZ=3;i.oa=2;break b;}if(m!=56320?0:1){i=new Cm;i.nZ=2;i.oa=1;}if(l>=256){j=j+(-1)|0;i=new Cm;i.nZ=3;i.oa=1;break b;}k=e.data;m=f+1|0;k[f]=l<<24>>24;c=j;f=m;}j=c;}h.t8=j;h.uh=f;return i;}
function O$(){let a=this;Fp.call(a);a.yQ=0;a.y$=0;}
let ATE=(a,b,c,d,e,f,g,h)=>{let i,j;if(a.yQ){if((f+2|0)>g){h=h.q$;return !(h.nc>=h.nb?0:1)?Dq:null;}a.yQ=0;if(!a.y$){i=e.data;j=f+1|0;i[f]=(-2);f=j+1|0;i[j]=(-1);}else{i=e.data;j=f+1|0;i[f]=(-1);f=j+1|0;i[j]=(-2);}}return !a.y$?VJ(a,b,c,d,e,f,g,h):Vy(a,b,c,d,e,f,g,h);}
let Vy=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.q$;if((m.nb-m.nc|0)<2?0:1)break b;i=Dq;break b;}j=e.data;c=f+1|0;j[f]=(l&255)<<24>>24;f=c+1|0;j[c]=l>>8<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.tr;if((m.nb-m.nc|0)<2?0:1)break b;i=DE;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.q$;if((m.nb-m.nc|0)<4?0:1)break b;i=Dq;break b;}j=e.data;k=f+1|0;j[f]=(l&255)<<24>>24;f=k+1|0;j[k]=l>>8<<24>>24;k=f+1|0;j[f]=(n&255)<<24>>24;f=k+1|0;j[k]=n>>8<<24>>24;}}}h.t8=c;h.uh=f;return i;}
let VJ=(a,b,c,d,e,f,g,h)=>{let i,j,k,l,m,n;i=null;b:{while(c<d){if(f>=g)break b;j=b.data;k=c+1|0;l=j[c];c=l&64512;if(!(c!=55296?0:1)){if(c!=56320?0:1){c=k+(-1)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}if((f+2|0)>g){c=k+(-1)|0;m=h.q$;if((m.nb-m.nc|0)<2?0:1)break b;i=Dq;break b;}j=e.data;c=f+1|0;j[f]=l>>8<<24>>24;f=c+1|0;j[c]=(l&255)<<24>>24;c=k;}else{if(k==d){c=k+(-1)|0;m=h.tr;if((m.nb-m.nc|0)<2?0:1)break b;i=DE;break b;}c=k+1|0;n=j[k];if(!((n&64512)!=56320?0:1)){c=c+(-2)|0;i=new Cm;i.nZ=2;i.oa=1;break b;}if((f+4|0)
>g){c=c+(-2)|0;m=h.q$;if((m.nb-m.nc|0)<4?0:1)break b;i=Dq;break b;}j=e.data;k=f+1|0;j[f]=l>>8<<24>>24;f=k+1|0;j[k]=(l&255)<<24>>24;k=f+1|0;j[f]=n>>8<<24>>24;f=k+1|0;j[k]=(n&255)<<24>>24;}}}h.t8=c;h.uh=f;return i;}
function PR(){let a=this;D$.call(a);a.qw=null;a.xx=null;a.wY=null;a.xk=null;}
let AH5=(a,b)=>{a.qw.qd.wP=Bb(b);}
let AGi=(a,b)=>{b=a.qw.qd;b.tI=1;b.qL=0;}
let AAo=(a,b,c)=>{I3(a.xk,a.xx,a.wY,c);b=a.qw.qd;b.vr=1;b.qL=0;return 0;}
function JF(){let a=this;C.call(a);a.n4=null;a.nL=0;}
let Fh=null;let Dr=(a,b)=>{let c,d,e,f;c=a.n4;d=c.data.length;e=((d>>1)+d|0)+2|0;if(b>e)e=b;f=H(e);Ci(c,0,f,0,a.nL);a.n4=f;}
let Kd=a=>{let b,c,d;b=a.nL+4|0;if(b>a.n4.data.length)Dr(a,b);c=a.n4.data;d=a.nL;b=d+1|0;a.nL=b;c[d]=110;d=b+1|0;a.nL=d;c[b]=117;b=d+1|0;a.nL=b;c[d]=108;a.nL=b+1|0;c[b]=108;}
let G6=(a,b)=>{let c,d,e;c=a.nL;if(c==a.n4.data.length)Dr(a,c+1|0);d=a.n4.data;e=a.nL;a.nL=e+1|0;d[e]=b;}
let N4=(a,b,c,d)=>{let e,f,g,h;if(b==(-2147483648)){e=B(681).m9.length;b=a.nL+e|0;if(b>a.n4.data.length)Dr(a,b);H4(B(681),0,e,a.n4,a.nL);a.nL=b;return a;}if(b<0){f=a.nL;if(f==a.n4.data.length)Dr(a,f+1|0);g=a.n4.data;f=a.nL;a.nL=f+1|0;g[f]=45;b= -b|0;}c:{if(c>1){h=b>=0?1:2;f=b;while(true){f=f/10|0;if(!f)break;h=h+1|0;}e=c-h|0;while(true){if(e<=0)break c;c=a.nL;if(c==a.n4.data.length)Dr(a,c+1|0);g=a.n4.data;h=a.nL;a.nL=h+1|0;g[h]=d;e=e+(-1)|0;}}}if(b>=10000){if(b>=1000000000){c=Fh.data[T(CF(CX(J(b),E(1410065408, 2)),
J(1000000000)))];d=a.nL;if(d==a.n4.data.length)Dr(a,d+1|0);g=a.n4.data;e=a.nL;a.nL=e+1|0;g[e]=c;}if(b>=100000000){c=Fh.data[(b%1000000000|0)/100000000|0];d=a.nL;if(d==a.n4.data.length)Dr(a,d+1|0);g=a.n4.data;e=a.nL;a.nL=e+1|0;g[e]=c;}if(b>=10000000){c=Fh.data[(b%100000000|0)/10000000|0];d=a.nL;if(d==a.n4.data.length)Dr(a,d+1|0);g=a.n4.data;e=a.nL;a.nL=e+1|0;g[e]=c;}if(b>=1000000){c=Fh.data[(b%10000000|0)/1000000|0];d=a.nL;if(d==a.n4.data.length)Dr(a,d+1|0);g=a.n4.data;e=a.nL;a.nL=e+1|0;g[e]=c;}if(b>=100000)G6(a,
Fh.data[(b%1000000|0)/100000|0]);G6(a,Fh.data[(b%100000|0)/10000|0]);}if(b>=1000)G6(a,Fh.data[(b%10000|0)/1000|0]);if(b>=100)G6(a,Fh.data[(b%1000|0)/100|0]);if(b>=10)G6(a,Fh.data[(b%100|0)/10|0]);G6(a,Fh.data[b%10|0]);return a;}
let AA6=()=>{Fh=Qg([48,49,50,51,52,53,54,55,56,57]);}
let Lv=F(BL);
let M7=F(BL);
function MF(){GQ.call(this);this.z9=0;}
let ALw=a=>{let b,c,d,e,f,g,h;b=a.z9;c=new I;c.m8=H(16);G(c,c.m7,B(682));K(c,c.m7,b,10);d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
function Ls(){GQ.call(this);this.z4=0;}
let AKP=a=>{let b,c,d,e,f,g,h;b=a.z4;c=new I;c.m8=H(16);G(c,c.m7,B(683));K(c,c.m7,b,10);d=new M;e=c.m8;f=e.data;g=c.m7;P();h=f.length;if(g>=0&&g<=(h-0|0)){d.m9=O(e.data,0,g);return d;}c=new L;c.m$=1;c.m_=1;Bj(c);D(c);}
let NR=F();
let AT_=null;let A33=()=>{A33=Ba(NR);APA();}
let APA=()=>{let b,c;FO();b=R((AE2.s()).data.length);c=b.data;AT_=b;c[It.nf]=1;c[Ih.nf]=2;c[HQ.nf]=3;c[HB.nf]=4;c[TG.nf]=5;}
let Mh=F(Fn);
let KF=F(Fn);
let N2=F(Fn);
function HH(){let a=this;EH.call(a);a.r6=0;a.qC=null;a.re=null;a.qG=null;}
let AJf=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Oe;c.si=a;c.tp=b;c=B$(c,"handleEvent");b.onreadystatechange=c;c=a.qG;d=a.re;e=new I4;e.zX=c;e.ws=d;c=B$(e,"handleEvent");b.onprogress=c;d=a.qC;f=a.r6;b.open("GET",B0(d),!!f);if(a.r6){d="arraybuffer";b.responseType=d;}b.send();}
function UN(){let a=this;D$.call(a);a.w8=null;a.EU=null;}
let AZK=(a,b)=>{let c=new UN();AVN(c,a,b);return c;}
let AVN=(a,b,c)=>{a.EU=b;a.w8=c;}
let AJj=(a,b)=>{a.w8.qw.qd.wP=Bb(b);}
let AQy=(a,b)=>{b=a.w8.qw.qd;b.tI=1;b.qL=0;}
let AHU=(a,b,c)=>{c=a.w8;b=null;I3(c.xk,c.xx,c.wY,b);b=c.qw.qd;b.vr=1;b.qL=0;return 0;}
let XR=F();
function FW(){C.call(this);this.vT=0;}
let APb=null;let AQs=null;let ALT=null;let Js=a=>{return a.vT;}
let AIn=()=>{let b;b=new FW;b.vT=1;APb=b;b=new FW;b.vT=0;AQs=b;ALT=Bw(Jt);}
let Td=F();
let B5=null;let ALE=()=>{ALE=Ba(Td);AGc();}
let AEZ=()=>{let b,c,d,e,f,g;ALE();b=B5;if(b.sW){b.sW=0;c=b.q3.data;d=null;e=0;f=c.length;if(e>f){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}c=b.o_.data;d=null;e=0;f=c.length;if(e>f){b=new Bc;b.m$=1;b.m_=1;D(b);}while(e<f){g=e+1|0;c[e]=d;e=g;}}Fc();BN(b,B(684),AHj);BN(B5,B(685),YW);BN(B5,B(686),Xw);BN(B5,B(687),AM_);BN(B5,B(688),ARa);BN(B5,B(689),AXZ);BN(B5,B(690),AWE);BN(B5,B(691),AGt);BN(B5,B(692),AVx);BN(B5,B(693),AWf);BN(B5,B(694),ARX);BN(B5,B(695),AUT);BN(B5,B(696),AMp);BN(B5,B(697),AL3);BN(B5,
B(698),ATa);BN(B5,B(699),AWU);BN(B5,B(700),AVp);BN(B5,B(701),AYi);BN(B5,B(702),AHd);BN(B5,B(703),ANG);BN(B5,B(704),AYd);BN(B5,B(705),AQb);BN(B5,B(706),AW7);BN(B5,B(707),AV4);BN(B5,B(708),AUM);BN(B5,B(709),AP$);BN(B5,B(710),AGK);BN(B5,B(711),APQ);BN(B5,B(712),AMf);BN(B5,B(713),ANe);BN(B5,B(714),ALM);BN(B5,B(715),APK);BN(B5,B(716),ASC);BN(B5,B(717),ATp);}
let AGc=()=>{B5=FL(51,0.800000011920929);AEZ();}
function NQ(){let a=this;D$.call(a);a.ux=null;a.Bk=null;a.C8=null;a.wd=null;}
let AMh=(a,b)=>{a.ux.qw.qd.wP=Bb(b);}
let AGO=(a,b)=>{b=a.ux.qw.qd;b.tI=1;b.qL=0;}
let US=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.Bk;if(e!==null)d.setAttribute("crossOrigin",B0(e));a:{e=a.wd;e.n6=e.n6+1|0;e=new Pl;e.xs=a;e.Fh=b;e.CC=c;e.AD=d;d.addEventListener("load",B$(e,"handleEvent"),!!0);d.addEventListener("error",B$(e,"handleEvent"),!!0);if(!a.wd.Dg){b=B0(b);d.src=b;}else{b=a.C8;c=ACL(c);e=new I;e.m8=H(16);G(e,e.m7,B(718));f=e.m7;if(b===null)b=B(2);G(e,f,b);G(e,e.m7,B(719));f=e.m7;if(c===null)c=B(2);G(e,f,c);b=new M;g=e.m8;h=g.data;i=e.m7;P();j=h.length;if
(i<0)break a;if(i>(j-0|0))break a;b.m9=O(g.data,0,i);b=B0(b);d.src=b;}return 0;}b=new L;b.m$=1;b.m_=1;Bj(b);D(b);}
let AMS=(a,b,c)=>{return US(a,b,c);}
function Oe(){let a=this;C.call(a);a.tp=null;a.si=null;}
let Q4=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,$$je,$p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.tp.readyState==4){if(a.tp.status==200){b=a.si;if(b.qG.pL){if(BJ===null){c=new CP;c.oK=DF;d=new I;d.m8=H(16);c.nV=d;c.oI=H(32);c.oQ=0;CO();c.oO=CW;BJ=c;}e=BJ;b=b.qC;d=new I;d.m8=H(16);G(d,d.m7,B(652));f=d.m7;if(b===null)b=B(2);G(d,f,b);Ld(e,Wg(d.m8,0,d.m7));}e
=a.tp.response;g=new Int8Array(e);b=a.si;d=b.re;c=b.qC;b=new I6;b.pO=g;b.zr=e;d.et(c,b);}else if(a.tp.status!=404&&a.tp.status!=403){try{h=J(100);$p=1;continue _;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}b=a.si;d=b.qG;f=b.r6;c=b.qC;e=b.re;if(d.pL){if(BJ===null){g=new CP;g.oK=DF;b=new I;b.m8=H(16);g.nV=b;g.oI=H(32);g.oQ=0;CO();g.oO=CW;BJ=g;}g=BJ;b=new I;b.m8=H(16);G(b,b.m7,B(114));G(b,b.m7,c===null?B(2):c);i=new M;j=b.m8;k=j.data;l=b.m7;P();m=k.length;if(l>=0&&l<=(m-0|0)){i.m9=O(j.data,
0,l);b=g.nV;G(b,b.m7,i);m=b.m7;Bh(b,m,m+1|0);b.m8.data[m]=10;CY(g);}else{b=new L;Bd(b);D(b);}}d.n6=d.n6+1|0;b=new HH;b.qG=d;b.r6=f;b.qC=c;b.re=e;d=null;c=null;b.pW=new C;b.pV=1;b.q7=c;b.rm=d;n=Dt;Dt=n+1|0;b.rj=J(n);d=new FD;d.q9=b;GH(d);}else{b=a.si;b.re.lY(b.qC);}b=a.si.qG;b.n6=b.n6-1|0;}return;case 1:b:{try{Jm(h);if(G_()){break _;}break b;}catch($$e){$$je=BG($$e);if($$je instanceof DV){}else{throw $$e;}}}b=a.si;d=b.qG;f=b.r6;c=b.qC;e=b.re;if(d.pL){if(BJ===null){g=new CP;g.oK=DF;b=new I;b.m8=H(16);g.nV=b;g.oI
=H(32);g.oQ=0;CO();g.oO=CW;BJ=g;}g=BJ;b=new I;b.m8=H(16);G(b,b.m7,B(114));G(b,b.m7,c===null?B(2):c);i=new M;j=b.m8;k=j.data;l=b.m7;P();m=k.length;if(l>=0&&l<=(m-0|0)){i.m9=O(j.data,0,l);b=g.nV;G(b,b.m7,i);m=b.m7;Bh(b,m,m+1|0);b.m8.data[m]=10;CY(g);}else{b=new L;Bd(b);D(b);}}d.n6=d.n6+1|0;b=new HH;b.qG=d;b.r6=f;b.qC=c;b.re=e;d=null;c=null;b.pW=new C;b.pV=1;b.q7=c;b.rm=d;n=Dt;Dt=n+1|0;b.rj=J(n);d=new FD;d.q9=b;GH(d);b=a.si.qG;b.n6=b.n6-1|0;return;default:DB();}}BY().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
let AEV=(a,b)=>{let $p,$z;$p=0;if(DC()){let $T=BY();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:Q4(a,b);if(G_()){break _;}return;default:DB();}}BY().s(a,b,$p);}
function Pl(){let a=this;C.call(a);a.Fh=null;a.CC=null;a.AD=null;a.xs=null;}
let Yb=(a,b)=>{let c,d;c=Bk(b.type);if(c===B(720))d=1;else if(!(B(720) instanceof M))d=0;else{b=B(720);d=c.m9!==b.m9?0:1;}if(d){b=a.xs.ux.qw.qd;b.tI=1;b.qL=0;}else{b=a.CC;b.zD=a.AD;c=a.xs.ux;I3(c.xk,c.xx,c.wY,b);b=c.qw.qd;b.vr=1;b.qL=0;}b=a.xs.wd;b.n6=b.n6-1|0;}
let ALr=(a,b)=>{Yb(a,b);}
A5Z([-1,"com",0,"github",1,"xpenatan",2,"gdx",3,"backends",4,"teavm",0,"badlogic",6,"gdx",7,"utils",8,"reflect",7,"scenes",10,"scene2d",11,"ui",7,"graphics",13,"g2d",-1,"java",15,"util",16,"regex",15,"nio",18,"charset",15,"io",15,"lang"]);
A50([C,0,0,[],0,3,0,0,["cF",A51(AKx),"cG",A52(AQc),"l",A51(AI7)],ADV,0,C,[],0,3,0,0,0,GX,0,C,[],0,3,0,A6G,0,Nx,0,C,[],3,3,0,0,0,L$,0,C,[Nx],0,3,0,0,0,DM,0,C,[],3,3,0,0,0,ADG,0,L$,[DM],0,3,0,0,0,DT,0,C,[],3,3,0,0,0,GC,0,C,[DT],0,3,0,0,0,DA,0,C,[],3,3,0,0,0,B8,0,C,[],3,3,0,0,0,BH,0,C,[DA,B8],1,3,0,0,["l",A51(AM1)],Ff,0,BH,[],12,3,0,A0K,0,GJ,0,C,[],0,3,0,0,0,Mc,0,C,[],3,3,0,0,0,Jr,0,GJ,[Mc],0,3,0,0,0,Hf,0,C,[],3,3,0,0,0,Es,0,C,[],3,3,0,0,0,HE,0,C,[Hf,Es],0,3,0,0,0,Hq,0,C,[],3,3,0,0,0,B4,0,C,[Hq],0,3,0,0,0,H1,0,
B4,[],0,3,0,0,0,ABT,0,H1,[],0,0,0,0,0,GL,0,BH,[],12,3,0,AWn,0,MW,0,C,[],3,3,0,0,0,JB,0,C,[MW],3,3,0,0,0,Hn,0,C,[],3,3,0,0,0,D3,0,C,[Hn],1,3,0,0,0,ADq,0,D3,[],0,0,0,0,0,MG,0,HE,[],0,3,0,0,0,IA,0,C,[Hq],0,3,0,0,0,W9,0,C,[],1,3,0,0,0,UD,0,C,[],0,3,0,0,0,TZ,0,C,[],3,3,0,0,0,LE,0,C,[TZ],0,3,0,0,0,ABA,0,LE,[],0,0,0,0,0,Y7,0,GC,[],0,3,0,0,0,Qa,0,C,[],32,0,0,A6H,0,AAt,0,C,[],1,3,0,0,0,RN,0,C,[],32,0,0,A6I,0,ADp,0,D3,[],0,0,0,0,0,F_,0,C,[MW],0,3,0,0,0,RK,0,F_,[JB],0,3,0,0,0,Hx,0,C,[],4,3,0,A6J,0,LV,0,C,[Hq],1,3,0,0,
0,TU,0,H1,[],0,3,0,0,0,PQ,0,C,[],0,3,0,0,0,Ke,0,C,[],0,3,0,A6K,0,ML,0,C,[Hq],1,3,0,0,0,Jj,0,F_,[JB],0,3,0,0,0]);
A50([TV,0,F_,[JB],0,3,0,0,0,Ek,0,B4,[],0,3,0,0,0,TJ,0,Jj,[],0,3,0,0,0,Ws,0,GC,[],0,3,0,0,0,K0,0,C,[],3,3,0,0,0,Z$,0,GC,[],0,3,0,0,0,Yq,0,C,[DT],4,3,0,0,0,Nq,0,C,[],32,0,0,A6L,0,CB,0,BH,[],12,3,0,AAS,0,Cl,0,C,[DT],1,3,0,0,0,FM,0,Cl,[],1,3,0,0,0,YT,0,FM,[],0,3,0,0,0,ABn,0,FM,[],0,3,0,0,0,C9,0,Cl,[],1,3,0,0,0,Fz,0,C9,[],1,3,0,0,0,UO,0,Fz,[],0,3,0,0,0,VU,0,C,[Hq],0,0,0,0,0,Nc,0,Cl,[],0,3,0,0,0,WA,0,Nc,[],0,3,0,0,0,XJ,0,Cl,[],0,3,0,0,0,Z4,0,Cl,[],0,3,0,0,0,ACy,0,Cl,[],0,3,0,0,0,ACY,0,C,[],0,3,0,0,0,LO,0,Cl,[],1,
3,0,0,0,ZL,0,LO,[],0,3,0,0,0,WV,0,C9,[],0,3,0,0,0,ADk,0,C9,[],0,3,0,0,0,ADH,0,Fz,[],0,3,0,0,0,ABP,0,Cl,[],0,3,0,0,0,ABY,0,Fz,[],0,3,0,0,0,AEz,0,C9,[],0,3,0,0,0,AEa,0,C9,[],0,3,0,0,0,X2,0,Cl,[],0,3,0,0,0,ZA,0,C9,[],0,3,0,0,0,ZF,0,Cl,[],0,3,0,0,0,Yh,0,Cl,[],0,3,0,0,0,ZM,0,FM,[],0,3,0,0,0,Vk,0,C9,[],0,3,0,0,0,AEC,0,Cl,[],0,3,0,0,0,ABv,0,Fz,[],0,3,0,0,0,X7,0,FM,[],0,3,0,0,0,AA5,0,Cl,[],0,3,0,0,0,VV,0,C9,[],0,3,0,0,0,Ze,0,C9,[],0,3,0,0,0,OX,0,C,[DM],0,3,0,0,0,Dw,0,Jr,[K0],0,3,0,0,0,DG,0,Dw,[],0,3,0,A6M,0,GT,0,DG,
[Hf],0,3,0,0,0,Lz,0,GT,[],0,3,0,0,0,WR,0,Lz,[],0,3,0,0,0]);
A50([ADn,0,B4,[],0,0,0,0,0,Mm,0,Dw,[],0,3,0,0,0,QF,0,C,[],3,3,0,0,0,Fq,0,C,[QF],1,3,0,0,0,XU,0,Fq,[],0,0,0,0,0,DN,0,GJ,[K0],0,3,0,0,0,Vu,0,DN,[],0,3,0,0,0,ADl,0,B4,[],0,0,0,0,0,BU,0,C,[],1,3,0,AGg,0,RS,0,BU,[],0,0,0,0,0,ABC,0,BU,[],0,0,0,0,0,KU,0,Ek,[],0,3,0,0,0,ZI,0,KU,[],0,3,0,0,0,TM,0,BU,[],0,0,0,0,0,AEp,0,B4,[],0,0,0,0,0,Iq,0,DG,[],0,3,0,0,0,ABD,0,BU,[],0,0,0,0,0,He,0,C,[],3,3,0,0,0,E2,0,C,[B8,He],0,3,0,0,0,EE,"Table$DebugRect",12,E2,[],0,3,0,AXz,0,XX,0,Fq,[],0,0,0,0,0,F5,0,DN,[Hf],0,3,0,0,0,W0,0,F5,[],
0,3,0,0,0,Zj,0,B4,[],0,0,0,0,0,Ps,0,C,[],3,3,0,0,0,ACA,0,C,[Ps],0,3,0,0,0,Hg,0,C,[],0,3,0,0,0,Ht,0,Hg,[],0,3,0,0,0,Sv,0,Ht,[],0,3,0,0,0,MC,0,DN,[Hf],0,3,0,0,0,YA,0,MC,[],0,3,0,0,0,AFl,0,Mm,[],0,0,0,0,0,K1,0,Dw,[],0,3,0,0,0,AFH,0,GT,[],0,3,0,0,0,MX,0,DN,[Mc],0,3,0,0,0,TK,0,BU,[],0,0,0,0,0,SW,0,C,[],0,3,0,0,0,Yd,0,C,[Hn],0,0,0,0,0,ZJ,0,B4,[],0,0,0,0,0,AAz,0,D3,[],0,0,0,0,0,YU,0,C,[],0,3,0,0,0,ACi,0,B4,[],0,0,0,0,0,AE8,0,Ek,[],0,0,0,0,0,Zh,0,IA,[],0,0,0,0,0,RO,0,BU,[],0,0,0,0,0,RR,0,BU,[],0,0,0,0,0,Rk,0,C,[],3,
3,0,0,0,Ku,0,C,[],0,3,0,0,0,N_,0,Ku,[],0,3,0,0,0,XV,0,Fq,[],0,0,0,0,0]);
A50([ADj,0,LV,[],0,0,0,0,0,ADo,0,ML,[],0,0,0,0,0,AEq,0,B4,[],0,0,0,0,0,AEr,0,Ek,[],0,0,0,0,0,TL,0,BU,[],0,0,0,0,0,EU,0,C,[DT],0,3,0,A6O,0,Qz,0,Ht,[],0,3,0,0,0,Zt,0,B4,[],0,0,0,0,0,VE,0,D3,[],0,0,0,0,0,RT,0,BU,[],0,0,0,0,0,W_,0,Dw,[],0,3,0,0,0,Zi,0,B4,[],0,0,0,0,0,QV,0,C,[],0,3,0,0,0,Ir,0,BU,[],0,3,0,0,0,Ye,0,K1,[],0,3,0,0,0,RP,0,BU,[],0,0,0,0,0,QP,0,DN,[Hf],0,3,0,0,0,Zq,0,MG,[],0,0,0,0,0,Tp,0,C,[],0,3,0,0,0,K9,0,DN,[],0,3,0,A6P,0,Oq,0,C,[],0,3,0,0,0,ABE,0,BU,[],0,0,0,0,0,TN,0,BU,[],0,0,0,0,0,AC4,0,Iq,[],0,3,
0,0,0,RQ,0,BU,[],0,0,0,0,0,Qb,0,C,[],0,3,0,0,0,AE5,0,C,[],0,3,0,0,0,D2,0,BH,[],12,3,0,A4q,0,AFc,0,BU,[],0,0,0,0,0,Y8,0,D3,[],0,0,0,0,0,DL,0,C,[],1,3,0,0,0,TO,0,DL,[],0,0,0,0,0,Vx,0,C,[Rk],0,3,0,0,0,Tv,0,C,[],0,3,0,0,0,Q7,0,C,[],0,3,0,0,0,RL,0,C,[],0,3,0,0,0,Kg,0,B4,[],0,3,0,0,0,VD,0,D3,[],0,0,0,0,0,AEs,0,MX,[],0,0,0,0,0,VA,0,C,[],3,3,0,0,0,Zu,0,B4,[],0,0,0,0,0,AFz,0,Dw,[],0,3,0,0,0,ABm,0,Dw,[],0,3,0,0,0,Zr,0,Ek,[],0,0,0,0,0,MJ,0,C,[],0,3,0,0,0,XT,0,MJ,[],0,0,0,0,0,AEf,0,GJ,[DM],0,3,0,0,0,Va,0,B4,[],0,0,0,0,
0,AC$,0,GT,[],0,3,0,0,0,AAQ,0,B4,[],0,0,0,0,0]);
A50([AEW,0,Ek,[],0,0,0,0,0,S1,0,Hg,[],0,3,0,0,0,ABq,0,Dw,[],0,3,0,0,0,Q0,0,C,[],0,3,0,0,0,Ql,0,C,[],0,3,0,0,0,AAC,0,DN,[],0,3,0,0,0,AE9,0,HE,[],0,0,0,0,0,Vb,0,B4,[],0,0,0,0,0,R_,0,Dw,[],0,3,0,0,0,AFk,0,Kg,[],0,3,0,0,0,Vc,0,DG,[],0,0,0,0,0,XW,0,Fq,[],0,0,0,0,0,Ul,0,C,[],1,3,0,0,0,TH,0,C,[],0,3,0,0,0,Eu,0,C,[B8],0,3,0,A6Q,0,Bp,0,C,[],1,3,0,Et,0,V6,0,Bp,[],0,3,0,0,0,Y$,0,C,[],0,3,0,0,0,Sj,0,Bp,[],0,0,0,0,0,AEJ,0,C,[],0,3,0,0,0,Fs,0,Bp,[],0,3,0,0,0,ID,0,Fs,[],0,3,0,0,0,Iw,0,Fs,[],0,3,0,0,0,J6,0,C,[],3,3,0,0,0,WD,
0,C,[J6],0,3,0,0,0,Sm,0,Bp,[],0,0,0,0,0,ADw,0,C,[He],0,3,0,0,0,Si,0,Bp,[],0,0,0,0,0,Iy,0,Bp,[],0,3,0,0,0,Sh,0,Bp,[],0,0,0,0,0,Sg,0,Bp,[],0,0,0,0,0,JW,0,C,[],4,3,0,0,0,UC,0,DL,[],0,0,0,0,0,JJ,0,C,[],3,3,0,0,0,BC,0,C,[B8,JJ],0,3,0,0,0,ABe,0,Bp,[],0,0,0,0,0,Hr,0,Bp,[],0,3,0,0,0,AAA,0,C,[],0,3,0,0,0,Sp,0,Bp,[],0,0,0,0,0,T6,0,Hr,[],0,3,0,0,0,X$,0,C,[DT],0,3,0,0,0,Fk,0,BH,[],12,3,0,A3E,0,Q5,0,C,[],0,3,0,A6R,0,IX,0,Bp,[],0,3,0,0,0,Zm,0,IX,[],0,3,0,0,0,RD,0,Bp,[],0,0,0,0,0,AA1,0,C,[B8],4,3,0,0,0,Sf,0,Bp,[],0,0,0,0,
0,EA,0,C,[B8,JJ],0,3,0,A24,0,Vz,0,Iy,[],0,3,0,0,0]);
A50([YO,0,Bp,[],0,3,0,0,0,Wt,0,C,[],0,3,0,0,0,AFt,0,C,[He],0,3,0,0,0,Sk,0,Bp,[],0,0,0,0,0,AEl,0,Bp,[],0,3,0,0,0,ABf,0,Bp,[],0,0,0,0,0,YJ,0,Iy,[],0,3,0,0,0,KB,0,C,[B8],0,3,0,A6S,0,KZ,0,C,[B8],0,3,0,A5o,0,LR,0,C,[B8],0,3,0,A2B,0,WF,0,C,[B8],0,3,0,0,0,UX,0,C,[B8],0,3,0,0,0,ACd,0,C,[B8,He],0,3,0,0,0,YM,0,C,[J6],0,3,0,0,0,R2,0,C,[],4,3,0,A2S,0,Cw,0,C,[],4,3,0,A6T,0,VH,0,C,[],4,3,0,0,0,XY,0,IX,[],0,3,0,0,0,Eg,0,C,[B8],0,3,0,Hj,0,ON,0,C,[],3,3,0,0,0,Iv,0,C,[ON,B8],0,3,0,0,0,Rt,0,Iv,[],0,3,0,0,0,ABd,0,Bp,[],0,0,0,0,
0,Sl,0,Bp,[],0,0,0,0,0,J8,0,C,[],0,3,0,AN6,0,E8,0,C,[B8],0,3,0,SA,0,Uy,0,C,[],0,3,0,0,0,ABj,0,C,[],0,3,0,0,0,Bg,0,C,[B8,JJ],0,3,0,B3,0,Yc,0,C,[B8,He],0,3,0,0,0,Xb,0,DL,[],0,0,0,0,0,QS,0,Hr,[],0,3,0,0,0,ABF,0,C,[J6],0,3,0,0,0,VR,0,C,[],0,3,0,0,0,ADJ,0,C,[B8],0,3,0,0,0,Kk,0,C,[B8],0,3,0,0,0,RF,0,Bp,[],0,0,0,0,0,ADL,0,C,[],0,3,0,0,0,VT,0,C,[],0,3,0,0,0,AB$,0,C,[],0,3,0,0,0,ADI,0,C,[B8],0,3,0,0,0,AAW,0,C,[],3,3,0,0,0,Yj,0,C,[B8],0,3,0,0,0,Sw,0,C,[],0,0,0,0,0,DZ,"GlyphLayout",14,C,[DT],0,3,0,EI,["B",A51(Th),"l",
A51(ABu)],Hu,0,C,[],0,3,0,0,0,ABa,0,Hu,[],0,3,0,0,0,Fj,"BitmapFont",14,C,[DM],0,3,0,0,0,R6,0,C,[],0,3,0,A6Z,0,Br,"Color",13,C,[],0,3,0,Fc,["cG",A52(AK7),"cF",A51(APp),"l",A51(AKt)]]);
A50([KC,0,C,[DM],1,3,0,0,0,MK,0,KC,[],0,3,0,0,["l",A51(AQO)],Cf,"Array",8,C,[Es],0,3,0,0,["cF",A51(AH_),"cG",A52(AOW),"l",A51(AVC)],KA,0,C,[Es],0,3,0,0,0,Yu,0,KA,[],0,3,0,0,0,AE4,0,C,[Es],0,3,0,0,0,Eq,0,C,[],4,3,0,0,["cG",A52(AQX),"cF",A51(AKF)],AFb,0,C,[],0,3,0,0,0,ZC,0,C,[],0,3,0,0,0,ABc,0,C,[],0,3,0,0,0,AAj,0,C,[],0,3,0,0,0,Qn,0,C,[],0,3,0,A60,0,U7,0,C,[],0,3,0,0,0,AAG,0,C,[],0,3,0,0,0,Z5,0,C,[],0,3,0,0,0,AAp,0,C,[],0,3,0,0,0,ADu,0,C,[],0,3,0,0,0,Yi,0,C,[],0,3,0,0,0,AEj,0,C,[],0,3,0,0,0,Zn,0,C,[],0,3,0,0,
0,VX,0,C,[],0,3,0,0,0,Wx,0,C,[],0,3,0,0,0,GO,0,BH,[],12,3,0,A2h,0,AAL,0,C,[],0,3,0,0,0,R9,0,C,[],3,3,0,0,0,D0,0,C,[],0,3,0,0,0,Vf,0,D0,[],0,3,0,0,0,Ve,0,D0,[],0,3,0,0,0,ZO,0,D0,[],0,3,0,0,0,W$,0,D0,[],0,3,0,0,0,ACf,0,D0,[],0,3,0,0,0,LX,0,D0,[],0,3,0,0,0,W4,0,LX,[],0,3,0,0,0,In,0,C,[],3,3,0,0,0,XA,0,C,[DM,In],0,3,0,0,0,F9,0,C,[],3,3,0,0,0,AB9,0,C,[F9,In],0,3,0,0,0,AEg,0,C,[F9],0,3,0,0,0,Wj,0,C,[],0,3,0,0,0,FA,0,C,[F9],0,3,0,0,0,ABK,0,FA,[],0,3,0,0,0,Ii,0,FA,[In,F9],1,3,0,0,0,Ee,0,Ii,[],1,3,0,A61,0,AB2,0,C,[],
0,3,0,0,0,ADt,0,Ee,[],4,3,0,0,0,Zx,0,Ee,[],4,3,0,0,0,TR,0,FA,[],0,3,0,0,0,Lu,0,FA,[],0,3,0,0,0,U3,0,Lu,[],0,3,0,0,0,W3,0,Ee,[],4,3,0,0,0]);
A50([HI,0,Ii,[],1,3,0,0,0,AAe,0,HI,[],4,3,0,0,0,Zv,0,Ee,[],4,3,0,0,0,AAs,0,Ee,[],4,3,0,0,0,AAd,0,HI,[],4,3,0,0,0,Fl,0,BH,[],12,3,0,A0W,0,GR,0,C,[DM,F9,In],1,3,0,0,0,Mz,0,GR,[F9],1,3,0,0,0,Un,0,Mz,[F9],0,3,0,0,0,Fr,0,BH,[],12,3,0,A1K,0,C7,0,GR,[],1,3,0,0,0,IS,0,C7,[],1,3,0,0,0,Wd,0,C,[],0,3,0,0,0,FC,0,C7,[],1,3,0,A62,0,Fd,0,FC,[],1,3,0,0,0,GU,0,Fd,[],1,3,0,0,0,Xz,0,GU,[],0,3,0,0,0,Iu,0,C7,[],1,3,0,0,0,AFv,0,Iu,[],0,3,0,0,0,ADs,0,C7,[],0,3,0,0,0,Gs,0,C7,[],1,3,0,0,0,U_,0,Gs,[],0,3,0,0,0,H0,0,C7,[],1,3,0,0,0,Xu,
0,Fd,[],0,3,0,0,0,YH,0,Fd,[],0,3,0,0,0,La,0,C7,[],1,3,0,0,0,ABL,0,La,[],0,3,0,0,0,VN,0,Gs,[],0,3,0,0,0,ZB,0,GU,[],0,3,0,0,0,ABG,0,C7,[],0,3,0,0,0,AAy,0,Gs,[],0,3,0,0,0,ABO,0,C7,[],0,3,0,0,0,ACB,0,FC,[],0,3,0,0,0,YN,0,DL,[],0,0,0,0,0,V5,0,DL,[],0,0,0,0,0,Wb,0,Fd,[],0,3,0,0,0,ABX,0,H0,[],0,3,0,0,0,AEI,0,IS,[],0,3,0,0,0,AA4,0,IS,[],0,3,0,0,0,ACr,0,H0,[],0,3,0,0,0,Z0,0,GU,[],0,3,0,0,0,AEY,0,Iu,[],0,3,0,0,0,Fw,0,GR,[],1,3,0,0,0,AAh,0,Fw,[],0,3,0,0,0,Gz,0,C,[],1,3,0,0,0,AB7,0,Gz,[],0,3,0,0,0,ACP,0,Fw,[],0,3,0,0,0,ADr,
0,Fw,[],0,3,0,0,0,ADZ,0,Gz,[],0,3,0,0,0,Xl,0,Fw,[],0,3,0,0,0]);
A50([ADv,0,Gz,[],0,3,0,0,0,KP,0,C,[],3,3,0,0,0,Nv,0,C,[],3,3,0,0,0,Ce,0,C,[KP,Nv],0,3,0,0,["l",A51(APv)],WB,0,C,[],4,0,0,0,0,V$,0,C,[],4,3,0,0,0,DV,0,C,[],0,3,0,0,["cW",A51(ATR)],CL,0,DV,[],0,3,0,0,0,BL,"RuntimeException",21,CL,[],0,3,0,0,0,Zs,"ClassCastException",21,BL,[],0,3,0,0,0,Ey,"CharSequence",21,C,[],3,3,0,0,0,M,"String",21,C,[B8,DA,Ey],0,3,0,P,["l",A51(Dp),"cG",A52(F7),"cF",A51(ARy)],Gx,0,DV,[],0,3,0,0,0,I2,0,Gx,[],0,3,0,0,0,Yz,0,I2,[],0,3,0,0,0,EC,0,C,[B8],1,3,0,0,0,Fe,0,EC,[DA],0,3,0,0,["l",A51(AWv)],Bn,
0,C,[B8,Ey],0,0,0,0,["dk",A52(Oj),"l",A51(W)],Ia,0,C,[],3,3,0,0,0,I,0,Bn,[Ia],0,3,0,0,["hU",A55(AOG),"Eh",A54(AKW),"l",A51(CD),"dk",A52(AOU),"dw",A53(APL),"k",A53(Dm)],IJ,0,I2,[],0,3,0,0,0,ABz,0,IJ,[],0,3,0,0,0,X5,0,IJ,[],0,3,0,0,0,Ys,0,C,[],0,3,0,0,0,O6,0,C,[],3,3,0,0,0,LI,0,C,[O6,Hn],0,3,0,0,["cV",A51(Y0)],TB,0,C,[],3,3,0,0,0,Mg,0,C,[TB],1,3,0,0,0,Rj,0,Mg,[],0,3,0,0,0,ACX,0,C,[],4,3,0,0,0,FH,0,BH,[],12,3,0,Jp,0,NO,0,C,[],3,3,0,0,0,Cp,0,C,[],3,3,0,0,0,Qm,0,C,[Cp],3,3,0,0,0,Me,0,C,[NO,Qm],0,3,0,Ju,["Ku",A52(ASe)],ABQ,
0,C,[],0,3,0,0,0,P2,0,C,[],0,3,0,PN,0,Kq,0,EC,[DA],0,3,0,0,0,Kc,0,C,[],0,3,0,0,0,YS,0,C,[],4,3,0,0,0,DK,"GlyphLayout$GlyphRun",14,C,[DT],0,3,0,0,["B",A51(ZG),"l",A51(N8)],D7,0,C,[],0,3,0,0,["cF",A51(APs),"cG",A52(AWc),"l",A51(AO5)],L8,0,C,[],3,3,0,0,0,Lc,0,C,[L8],1,3,0,0,0,F6,0,C,[],3,3,0,0,0,JE,0,Lc,[F6,B8],0,3,0,0,0,TY,0,C,[],3,3,0,0,0,Rm,0,C,[TY],0,3,0,0,0,D8,0,C,[DA],0,3,0,0,0,WW,0,C,[],0,3,0,0,0]);
A50([J0,0,C,[],4,3,0,0,0,Np,0,C,[],3,3,0,0,0,Of,0,C,[Np],0,3,0,0,0,O9,0,C,[],0,3,0,0,0,Ly,0,C,[],0,3,0,0,0,RW,0,C,[],3,3,0,0,0,K2,0,C,[RW],0,3,0,J1,0,UI,0,C,[],0,3,0,0,0,D$,0,C,[],0,3,0,0,["ix",A52(AQg)],RG,0,C,[],3,3,0,0,0,E$,0,C,[Cp],3,3,0,0,0,AAN,0,C,[RG,E$],0,3,0,0,["qa",A52(AHb)],Q2,0,C,[],3,3,0,0,0,SC,0,C,[Q2],0,3,0,0,0,R5,0,C,[R9],0,3,0,0,0,RX,0,C,[],3,3,0,0,0,P8,0,C,[RX],0,3,0,0,0,OJ,0,C,[],3,3,0,0,0,ABV,0,C,[OJ],0,3,0,0,0,E1,0,C,[],0,3,0,0,0,SG,0,C,[],3,3,0,0,0,R7,0,C,[SG],3,3,0,0,0,XD,0,C,[R7],0,3,
0,0,0,UJ,0,C,[E$],0,0,0,0,["qa",A52(AS2)],UK,0,C,[E$],0,0,0,0,["qa",A52(AWY)],Bc,"IllegalArgumentException",21,BL,[],0,3,0,0,0,ADR,0,C,[],4,3,0,0,0,VO,0,C,[Es],0,3,0,0,0,QL,0,EC,[DA],0,3,0,0,0,ZK,0,C,[Cp],1,3,0,0,0,L4,0,C,[],3,3,0,0,0,I0,"TeaGL20",5,C,[L4],0,3,0,0,["kq",A53(AMQ),"kG",A53(AWQ),"cr",A53(AJp),"iR",A55(AMg),"ft",A55(PL),"fu",A55(PK),"lD",A52(AUX),"lC",A55(AJB),"ko",A52(ANL),"kk",A51(AXy),"km",A52(ASf),"iH",A52(AUY),"iN",A52(AR2),"kH",A52(AQS),"j6",A54(AKd),"j7",A55(AOm),"j_",A55(AQo),"iQ",A52(AWu),
"kv",A52(AVz),"lw",A52(AF2),"fv",A55(N7),"fw",A55(QC),"kx",A53(ALh),"b9",A53(L9),"iG",A52(AXq),"fx",A54(Rq),"kp",A52(AOQ),"fy",A54(O3),"ex",A52(AL1),"ks",A53(ALW),"kr",A52(AH0),"ch",A53(AKc),"kn",A53(AF1),"cn",function(b,c,d,e,f,g,h,i,j){RJ(this,b,c,d,e,f,g,h,i,j);},"cx",A54(API),"b4",A54(ARF),"iX",A53(AR1),"iK",A52(AH3),"ku",function(b,c,d,e,f,g){APe(this,b,c,d,e,f,g);},"dY",A55(AGp)],Q1,0,C,[L4],3,3,0,0,0,Nb,"TeaGL30",5,I0,[Q1],0,3,0,0,["kL",A52(AMt),"j8",A55(AQG),"j$",function(b,c,d,e,f){AX0(this,b,c,d,e,
f);},"kJ",A53(ARh),"b9",A53(AOt)],Og,"TeaGL30Debug",5,Nb,[],0,3,0,0,["kL",A52(ALo),"j8",A55(AII),"j$",function(b,c,d,e,f){AWJ(this,b,c,d,e,f);},"kJ",A53(AHR),"cr",A53(AID),"lD",A52(AU1),"lC",A55(APN),"iH",A52(AHN),"iN",A52(AVE),"j6",A54(AKS),"j7",A55(ASr),"iQ",A52(ATL),"ex",A52(AFQ),"ch",A53(AGT),"cn",function(b,c,d,e,f,g,h,i,j){AQe(this,b,c,d,e,f,g,h,i,j);},"cx",A54(AKG),"dY",A55(AMj),"kq",A53(AOV),"kG",A53(AWe),"iR",A55(ALp),"ft",A55(AP4),"fu",A55(AV_),"ko",A52(AQ8),"kk",A51(AXx),"km",A52(ASN),"kH",A52(AXm),
"j_",A55(AId),"kv",A52(ASR),"lw",A52(AU4),"fv",A55(ANC),"fw",A55(AUZ),"kx",A53(AQv),"b9",A53(ALv),"fx",A54(AJF),"iG",A52(AGS),"fy",A54(AXv),"kp",A52(AHv),"ks",A53(AGU),"kr",A52(AWy),"kn",A53(AGP),"b4",A54(AHZ),"iX",A53(AIY),"iK",A52(AX8),"ku",function(b,c,d,e,f,g){ATm(this,b,c,d,e,f,g);}],PF,0,C,[],0,3,0,0,0,DJ,0,BH,[],12,3,0,Ny,0,Sc,0,C,[Cp],3,3,0,0,0,RY,0,C,[Sc],0,0,0,0,["MQ",A51(AKK)],Tz,"TeaGL20Debug",5,I0,[],0,3,0,0,["cr",A53(AW4),"lD",A52(AJN),"lC",A55(AKC),"iH",A52(AP2),"iN",A52(AXH),"j6",A54(ANK),"j7",
A55(AXd),"iQ",A52(AIh),"ex",A52(AOK),"ch",A53(ARc),"cn",function(b,c,d,e,f,g,h,i,j){ALx(this,b,c,d,e,f,g,h,i,j);},"cx",A54(AK0),"dY",A55(AXr),"kq",A53(AGL),"kG",A53(AFP),"iR",A55(AFL),"ft",A55(AOj),"fu",A55(AMu),"ko",A52(AXR),"kk",A51(ARA),"km",A52(AXC),"kH",A52(ARx),"j_",A55(AMJ),"kv",A52(AXI),"lw",A52(AQE),"fv",A55(AOn),"fw",A55(AIG),"kx",A53(AMR),"b9",A53(AGs),"fx",A54(ALC),"iG",A52(ALI),"fy",A54(AG2),"kp",A52(ATr),"ks",A53(AVk),"kr",A52(APk),"kn",A53(AXa),"b4",A54(AVa),"iX",A53(AXw),"iK",A52(AG3),"ku",function(b,
c,d,e,f,g){AJu(this,b,c,d,e,f,g);}],ACl,0,C,[Es],0,3,0,0,0,ZQ,0,C,[],0,3,0,0,0,SR,0,C,[Cp],3,3,0,0,0,Q9,0,C,[SR],0,0,0,0,["FR",A51(AGG),"I8",A51(AKm),"Oh",A51(AGn)],TX,0,C,[],3,3,0,0,0,T5,0,C,[TX],0,3,0,0,0,NK,0,D$,[],0,0,0,0,0,SO,"CloneNotSupportedException",21,CL,[],0,3,0,0,0,Je,0,DL,[],0,3,0,0,0,L,"IndexOutOfBoundsException",21,BL,[],0,3,0,0,0]);
A50([F0,0,C,[Cp],3,3,0,0,0,Pd,0,C,[F0],3,3,0,0,0,Qr,0,C,[F0],3,3,0,0,0,Qi,0,C,[F0],3,3,0,0,0,RE,0,C,[F0],3,3,0,0,0,TS,0,C,[F0],3,3,0,0,0,So,0,C,[F0,Pd,Qr,Qi,RE,TS],3,3,0,0,0,OM,0,C,[],3,3,0,0,0,Lf,0,C,[Cp],3,3,0,0,0,Vm,0,C,[Cp,So,OM,Lf],1,3,0,0,["E_",A52(ART),"Hh",A53(AUE),"NA",A53(AT2),"Kq",A54(ARL),"IA",A52(AWp),"IL",A51(AJw),"GM",A54(AGm)],LG,0,C,[],1,3,0,0,0,IP,0,LG,[L8,F6,B8],0,3,0,0,0,Mw,0,IP,[],0,3,0,0,0,Yp,0,C,[],0,3,0,0,0,EN,0,BH,[],12,3,0,GZ,0,D_,0,C,[Cp],1,3,0,0,0,W6,0,D_,[],1,3,0,0,0,WG,0,D_,[],
1,3,0,0,0,ZE,0,D_,[],1,3,0,0,0,AA8,0,D_,[],1,3,0,0,0,YE,0,D_,[],1,3,0,0,0,PV,0,C,[E$],0,0,0,0,["qa",A52(AN4)],PW,0,C,[E$],0,0,0,0,["qa",A52(AXf)],PS,0,C,[E$],0,0,0,0,["qa",A52(ASD)],QQ,0,DL,[],0,3,0,0,0,SX,0,C,[Cp],3,3,0,0,0,N0,0,C,[SX],0,0,0,0,["Gx",A51(ALc)],Wy,0,D_,[],1,3,0,0,0,Qf,0,C,[B8],4,3,0,0,0,VW,0,C,[],4,3,0,0,0,Ec,"ReflectionException",9,CL,[],0,3,0,0,0,D9,0,C,[],4,3,0,BE,0,LA,0,C,[],3,3,0,0,0,KO,0,C,[LA],0,0,0,0,0,J9,0,C,[],3,3,0,0,0,KN,0,C,[J9],0,0,0,0,0,MZ,0,C,[],3,3,0,0,0,AAf,0,C,[MZ],4,3,0,0,
0,Cj,"NumberFormatException",21,Bc,[],0,3,0,0,0,OQ,0,C,[],4,3,0,0,0,K8,0,BL,[],0,3,0,0,0,Fn,0,CL,[],0,3,0,0,0,H$,"NoSuchMethodException",21,Fn,[],0,3,0,0,0,C0,"NullPointerException",21,BL,[],0,3,0,0,0,B_,0,C,[],1,0,0,0,["hb",A54(AKI),"hu",A55(AMK),"gy",A51(AIX),"l",A51(ATA),"f1",A52(M0),"gw",A52(AVO),"hg",A51(AW5),"fX",A51(KG)],AEP,0,C,[Cp],1,3,0,0,0,XP,0,C,[Cp],1,3,0,0,0,AFA,0,C,[Cp],1,3,0,0,0,Lg,0,C,[Cp],3,3,0,0,0,OU,0,C,[Lg],0,3,0,0,["Fj",A52(AJn)]]);
A50([Yv,0,C,[Cp],1,3,0,0,0,OV,0,C,[Lg],0,3,0,0,["Fj",A52(AGr)],Ns,0,C,[],3,3,0,0,0,Ij,0,C,[Ns,F6],0,0,0,0,0,Jl,0,Ij,[],0,0,0,0,0,DW,0,B_,[],0,0,0,F$,["he",A54(AHY),"hf",A51(ANk),"hL",A52(AIE)],JV,0,C,[],0,0,0,0,0,DQ,"PatternSyntaxException",17,Bc,[],0,3,0,0,["cW",A51(AW0)],K7,0,C,[Es],3,3,0,0,0,L3,0,C,[K7],1,3,0,0,0,QE,0,C,[K7],3,3,0,0,0,NI,0,C,[QE],3,3,0,0,0,HM,0,L3,[NI],1,3,0,0,0,Mo,0,C,[],3,3,0,0,0,I_,0,HM,[F6,B8,Mo],0,3,0,0,0,QA,0,DW,[],0,0,0,0,["he",A54(AG0),"hf",A51(AKn),"hL",A52(ATW)],T7,0,DW,[],0,0,
0,0,["he",A54(AJ3),"hf",A51(AOc)],Pu,0,DW,[],0,0,0,0,["he",A54(AIU),"hf",A51(AVI)],Rc,0,DW,[],0,0,0,0,["he",A54(AHf),"hf",A51(AUv),"hL",A52(ASg)],Ix,0,DW,[],0,0,0,0,["he",A54(AWa),"hf",A51(AJc)],Cy,0,B_,[],1,0,0,0,["he",A54(AXS),"hr",A51(AU2),"hL",A52(AN7)],S3,0,Cy,[],0,0,0,0,["hs",A53(AUl),"hb",A54(ALG),"hu",A55(AJM),"hf",A51(ANm),"hL",A52(AHa)],Cv,0,B_,[],0,0,0,0,["he",A54(AMM),"f1",A52(ASa),"hf",A51(AOh),"gw",A52(APj),"hL",A52(AS6),"fX",A51(AJC)],Na,0,Cv,[],0,0,0,0,["he",A54(ARP),"hf",A51(APC),"hL",A52(ATu)],FJ,
0,Na,[],0,0,0,0,["he",A54(AKL),"f1",A52(ATb),"hf",A51(AG8)],Ux,0,FJ,[],0,0,0,0,["he",A54(AR4),"hL",A52(AVU),"hf",A51(AW3)],ADF,0,FJ,[],0,0,0,0,["he",A54(AIr),"hL",A52(AVg),"hf",A51(AMx)],YP,0,FJ,[],0,0,0,0,["he",A54(AJx),"hL",A52(AYm),"hf",A51(ARw)],ABb,0,FJ,[],0,0,0,0,["he",A54(AGh),"hL",A52(ATM),"hf",A51(AIV)],Ik,0,Cv,[],0,0,0,0,["he",A54(AGH),"hb",A54(APP),"hu",A55(AT3),"gw",A52(AO_),"hg",A51(ASc),"fX",A51(AXb)],AA3,0,C,[],4,3,0,0,0,Kl,"ArrayStoreException",21,BL,[],0,3,0,0,0,IB,0,C,[],1,0,0,0,0,Bs,0,IB,
[],1,0,0,BA,["hG",A51(AIw),"hx",A51(AHu),"hO",A51(AUR),"g0",A51(AW2)],CI,0,Bs,[],0,0,0,0,["hI",A52(AJS),"hG",A51(AYk),"hx",A51(ALs),"hO",A51(AVG),"l",A51(AQ4),"g0",A51(ALO)],KL,"MissingResourceException",16,BL,[],0,3,0,0,0,Fu,0,B_,[],1,0,0,0,["gw",A52(AT6),"hL",A52(AV6),"fX",A51(AQl)],Eh,0,Fu,[],0,0,0,0,["he",A54(AGj),"hf",A51(AJz)],G0,0,Eh,[],0,0,0,0,["he",A54(AH2),"hf",A51(AIC)],Em,0,Fu,[],0,0,0,0,["he",A54(AGE),"hf",A51(ANH)],GW,0,Eh,[],0,0,0,0,["he",A54(AP1),"f1",A52(AYp)],ADX,0,Eh,[],0,0,0,0,["he",A54(AXF),
"hb",A54(AQV)],Bz,0,C,[],1,0,0,0,0,NS,0,IB,[F6],0,0,0,0,["l",A51(Rz)],Op,0,B_,[],0,0,0,0,["he",A54(AOB),"hf",A51(AR0),"hL",A52(AR_)],Bt,0,C,[F6,B8],0,3,0,0,0,NF,0,Cv,[],0,0,0,0,["hf",A51(ASm)],H8,0,Cv,[],0,0,0,0,["he",A54(AHT),"f1",A52(ARN),"hf",A51(ASL),"hL",A52(AI2),"gw",A52(AIv)],EG,0,Cv,[],0,0,0,0,["he",A54(ALj),"hf",A51(AWR),"hI",A52(AL7),"gw",A52(AHH),"f1",A52(AUK),"hL",A52(ALz)],NG,0,EG,[],0,0,0,0,["hI",A52(AN8),"hf",A51(AXj)]]);
A50([OL,0,Cy,[],0,0,0,0,["hs",A53(AOE),"hf",A51(AIK)],Fg,0,Cy,[],0,0,0,0,["hs",A53(AFO),"hf",A51(AON),"gw",A52(ASb)],Jb,0,Cv,[],0,0,0,0,["f1",A52(APZ),"hf",A51(ATN),"he",A54(AF5),"gw",A52(AIP),"hL",A52(AVK)],Fx,0,Cy,[],0,0,0,0,["hr",A51(AOi),"hs",A53(AM4),"hb",A54(ALg),"hu",A55(AOs),"hf",A51(AVZ),"gw",A52(AVA)],TI,0,Cy,[],0,0,0,0,["hs",A53(AFT),"hf",A51(ARM)],NB,0,Cy,[],0,0,0,0,["hs",A53(AGy),"hf",A51(ANt)],G9,0,Cv,[],0,0,0,0,["f1",A52(AW9),"he",A54(ARO),"hf",A51(ARB),"gw",A52(AOF),"hL",A52(ATf)],AEQ,0,G9,[],
0,0,0,0,0,ABJ,0,G9,[],0,0,0,0,0,Uk,0,Em,[],0,0,0,0,["he",A54(AJ_)],Pr,0,Em,[],0,0,0,0,["he",A54(AQF)],IW,0,Em,[],0,0,0,0,["he",A54(AUC),"f1",A52(AWg)],O_,0,IW,[],0,0,0,0,["he",A54(AOo),"f1",A52(ARd)],G7,0,Em,[],0,0,0,0,["he",A54(AYg),"hf",A51(AWm)],NU,0,G7,[],0,0,0,0,["he",A54(ANI)],Qv,0,Em,[],0,0,0,0,["he",A54(AXp)],X9,0,IW,[],0,0,0,0,["he",A54(AI4)],Sr,0,G7,[],0,0,0,0,["he",A54(AHk)],Zl,0,Fu,[],0,0,0,0,["he",A54(AXX),"hb",A54(AUV),"hf",A51(ASQ)],V2,0,Fu,[],0,0,0,0,["he",A54(ASd),"hb",A54(AGd),"hf",A51(ATT)],GB,
0,C,[],1,0,0,0,0,AFG,0,Eh,[],0,0,0,0,["he",A54(AHo)],ADT,0,GW,[],0,0,0,0,["he",A54(AQz)],Wp,0,G0,[],0,0,0,0,["he",A54(AT$)],X0,0,Eh,[],0,0,0,0,["he",A54(AR6)],ABU,0,GW,[],0,0,0,0,["he",A54(AHy)],YR,0,G0,[],0,0,0,0,["he",A54(AUo)],Qh,0,B_,[],4,0,0,0,["he",A54(APc),"hL",A52(ANY),"hf",A51(AQB)],W8,0,B_,[],0,0,0,0,["he",A54(AIq),"hL",A52(AIN),"hf",A51(AYc)],VZ,0,B_,[],0,0,0,0,["he",A54(AOa),"hL",A52(AYa),"hf",A51(AH7)],TF,0,B_,[],4,0,0,0,["he",A54(ASW),"hL",A52(AJW),"hf",A51(AP8)],AD_,0,B_,[],0,0,0,0,["he",A54(ARK),
"hL",A52(AFR),"hf",A51(AML)],Vg,0,B_,[],0,0,0,0,["he",A54(AJA),"hL",A52(AMn),"hf",A51(AHM)],AD5,0,Cv,[],0,0,0,0,["he",A54(AXu),"hf",A51(AKU),"f1",A52(AIR),"gy",A51(ARo),"hL",A52(AIQ)],Wi,0,Cv,[],4,0,0,0,["he",A54(ARC),"hf",A51(AJ9),"f1",A52(ATS),"gy",A51(AFJ),"hL",A52(AXQ)],ADU,0,B_,[],4,0,0,0,["he",A54(AOL),"hL",A52(AMb),"hf",A51(APu)],AAJ,0,B_,[],0,0,0,0,["he",A54(ARI),"hL",A52(ALZ),"hf",A51(AG4)],Ur,0,B_,[],0,0,0,0,["he",A54(ANN),"hL",A52(AJ0),"hf",A51(AMq)],IN,0,Cv,[],0,0,0,0,["he",A54(AHr),"f1",A52(AS_),
"hf",A51(AG$),"hL",A52(ATv)],AD0,0,IN,[],0,0,0,0,["he",A54(AJ$),"hb",A54(AVR),"hu",A55(AG5),"gw",A52(AQr),"hf",A51(AWd)],YB,0,IN,[],0,0,0,0,["he",A54(APG),"hf",A51(AIO)],K_,0,Bn,[Ia],0,3,0,0,["hU",A55(ALQ),"Eh",A54(AIB),"dk",A52(AJb),"dw",A53(AU0),"k",A53(AGu)],Zw,0,Cy,[],0,0,0,0,["hs",A53(AKH),"hb",A54(AIi),"hu",A55(AMi),"hf",A51(ARW),"gw",A52(ANh)],Nw,0,Cy,[],0,0,0,0,["hs",A53(APT),"hf",A51(ANv)],U9,0,Cy,[],0,0,0,0,["hs",A53(AUc),"hf",A51(AVF)],AFD,0,C,[],4,3,0,0,0,IM,0,C,[],4,0,0,ATK,0,Nu,0,Cy,[],0,0,0,0,
["hs",A53(AUg),"hf",A51(AYb)],JP,0,Cv,[],0,0,0,0,["f1",A52(AR3),"he",A54(OZ),"hb",A54(ANb),"hu",A55(AKR),"hf",A51(AU8),"gw",A52(AGY),"hL",A52(AVl)],Mi,0,Cv,[],0,0,0,0,["f1",A52(AI_),"he",A54(NE),"hb",A54(ASx),"hu",A55(AUa),"hf",A51(AXs),"gw",A52(AKJ),"hL",A52(ASM)]]);
A50([FP,0,Cy,[],0,0,0,0,["hs",A53(ATw),"hb",A54(AQ7),"hu",A55(AI9),"hf",A51(AWh),"gw",A52(ATi)],SD,0,GB,[],0,0,0,0,["hW",A52(AJl),"hY",A53(ATo)],SE,0,GB,[],0,0,0,0,["hW",A52(AUq),"hY",A53(AWV)],ACo,0,C,[],0,0,0,0,0,WT,0,C,[],4,0,0,0,0,V9,0,C,[],4,3,0,0,0,DS,"NegativeArraySizeException",21,BL,[],0,3,0,0,0,Vd,0,C,[],0,0,0,0,0,ME,0,C,[],0,3,0,0,0,Yn,0,C,[],4,3,0,0,0,L5,0,Bz,[],0,0,0,0,["hz",A51(AND)],Li,0,Bz,[],0,0,0,0,["hz",A51(APJ)],ACj,0,Bz,[],0,0,0,0,["hz",A51(ATU)],AC5,0,Bz,[],0,0,0,0,["hz",A51(AVm)],AC7,
0,Bz,[],0,0,0,0,["hz",A51(ALk)],L1,0,Bz,[],0,0,0,0,["hz",A51(AJQ)],Mu,0,L1,[],0,0,0,0,["hz",A51(AL8)],AFx,0,Bz,[],0,0,0,0,["hz",A51(ANa)],No,0,Mu,[],0,0,0,0,["hz",A51(AFX)],Zo,0,No,[],0,0,0,0,["hz",A51(AQm)],Z8,0,Bz,[],0,0,0,0,["hz",A51(AKz)],WY,0,Bz,[],0,0,0,0,["hz",A51(AQi)],WE,0,Bz,[],0,0,0,0,["hz",A51(AW1)],AC_,0,Bz,[],0,0,0,0,["hz",A51(ARj)],AFF,0,Bz,[],0,0,0,0,["hz",A51(AF8)],ACp,0,Bz,[],0,0,0,0,["hz",A51(ANT)],AB5,0,Bz,[],0,0,0,0,["hz",A51(ATz)],ADD,0,Bz,[],0,0,0,0,["hz",A51(AKw)],VB,0,Bz,[],0,0,0,0,
["hz",A51(AKX)],UR,0,Bz,[],0,0,0,0,["hz",A51(AWO)],ACC,0,Bz,[],0,0,0,0,["hz",A51(AFU)],ACU,0,Bz,[],0,0,0,0,["hz",A51(AOR)],Xr,0,Bz,[],0,0,0,0,["hz",A51(AK5)],AAb,0,Bz,[],0,0,0,0,["hz",A51(AMr)],AET,0,Bz,[],0,0,0,0,["hz",A51(AOX)],ACQ,0,Bz,[],0,0,0,0,["hz",A51(AVM)],Yt,0,Bz,[],0,0,0,0,["hz",A51(ASU)],Xq,0,Bz,[],0,0,0,0,["hz",A51(AQ9)],AFC,0,Bz,[],0,0,0,0,["hz",A51(ATO)],KW,0,Bz,[],0,0,0,0,["hz",A51(APi)],ADP,0,KW,[],0,0,0,0,["hz",A51(AQN)],Zz,0,L5,[],0,0,0,0,["hz",A51(AIe)],Xk,0,Li,[],0,0,0,0,["hz",A51(AMZ)],WL,
0,Bz,[],0,0,0,0,["hz",A51(APm)],Xf,0,Bz,[],0,0,0,0,["hz",A51(AWz)],Y1,0,Bz,[],0,0,0,0,["hz",A51(ALU)],Zp,0,Bz,[],0,0,0,0,["hz",A51(AFV)],SS,0,C,[],0,3,0,0,0,I8,0,C,[],0,3,0,0,0,VF,0,C,[],0,3,0,0,0]);
A50([AC0,0,C,[],4,3,0,0,0,PT,0,D$,[],0,0,0,0,["ix",A52(AUW),"lY",A52(AK_),"et",A53(AQZ)],Ca,0,BH,[],9,3,0,AJs,0,F2,0,Ij,[],0,0,0,0,0,AFf,0,C,[],3,3,0,0,0,Se,0,C,[Cp],3,3,0,0,0,Xc,0,C,[Se,Cp],1,3,0,0,["FT",A53(AWG),"Hd",A52(ARs),"GJ",A53(AJa),"KQ",A54(AOu),"Nd",A54(AUA)],RU,0,C,[E$],0,0,0,0,["qa",A52(AP7)],D1,0,BH,[],12,3,0,FO,0,LK,0,C,[],0,3,0,0,0,Mt,0,C,[KP],0,3,0,0,0,Qt,0,C,[],3,3,0,0,0,Im,0,Mt,[Qt],0,3,0,0,["l",A51(AHV)],U,"StringIndexOutOfBoundsException",21,L,[],0,3,0,0,0,Tj,0,Bs,[],0,0,0,0,["hI",A52(ALq)],Ti,
0,Bs,[],0,0,0,0,["hI",A52(AGC)],Ow,0,Bs,[],0,0,0,0,["hI",A52(AO9),"l",A51(AMC)],OC,0,Bs,[],0,0,0,0,["hI",A52(ATy)],OA,0,Bs,[],0,0,0,0,["hI",A52(AUf)],OB,0,Bs,[],0,0,0,0,["hI",A52(APS)],OF,0,Bs,[],0,0,0,0,["hI",A52(AKZ)],OG,0,Bs,[],0,0,0,0,["hI",A52(AFK)],OD,0,Bs,[],0,0,0,0,["hI",A52(AMO)],OE,0,Bs,[],0,0,0,0,["hI",A52(APW)],OH,0,Bs,[],0,0,0,0,["hI",A52(AVV)],OI,0,Bs,[],0,0,0,0,["hI",A52(AKi)],Ov,0,Bs,[],0,0,0,0,["hI",A52(AYu)],O1,0,Bs,[],0,0,0,0,["hI",A52(AMT)],Ot,0,Bs,[],0,0,0,0,["hI",A52(AKf)],Ou,0,Bs,[],0,
0,0,0,["hI",A52(AL_)],Oz,0,Bs,[],0,0,0,0,["hI",A52(AOd)],Os,0,Bs,[],0,0,0,0,["hI",A52(AVu)],Ox,0,Bs,[],0,0,0,0,["hI",A52(AIF)],Oy,0,Bs,[],0,0,0,0,["hI",A52(ASH)],Jf,0,C,[],0,0,0,0,0,EH,0,C,[Hn],0,3,0,CV,0,BT,"IllegalStateException",21,BL,[],0,3,0,0,0,Jq,"IllegalMonitorStateException",21,BL,[],0,3,0,0,0,ACJ,0,C,[MZ],0,0,0,0,0,ACN,0,C,[],0,3,0,0,0,XQ,0,C,[],4,3,0,0,0,UT,0,C,[Cp],1,3,0,0,0,G4,0,C,[],3,3,0,0,0,T8,0,C,[G4],0,3,0,0,["cV",A51(AVX)],S8,0,Ca,[],12,0,0,0,0,S9,0,Ca,[],12,0,0,0,0,Tb,0,Ca,[],12,0,0,0,0,Tc,
0,Ca,[],12,0,0,0,0,S_,0,Ca,[],12,0,0,0,0,Ta,0,Ca,[],12,0,0,0,0]);
A50([S5,0,Ca,[],12,0,0,0,0,S6,0,Ca,[],12,0,0,0,0,S4,0,Ca,[],12,0,0,0,0,NY,0,C,[],3,3,0,0,0,QJ,0,C,[NY],0,3,0,0,0,X3,0,C,[Cp],4,3,0,0,0,Qs,0,C,[],3,3,0,0,0,Qe,0,C,[Qs],0,0,0,0,["e",A52(AOz),"iq",A52(AXi)],Rg,0,C,[G4],0,3,0,0,0,NT,0,Ik,[],0,0,0,0,["hb",A54(ALX),"hu",A55(AYf),"hg",A51(AJV)],Vq,0,C,[J9],0,0,0,0,0,HG,0,EH,[],0,0,0,0,["cV",A51(AR9)],NM,0,C,[],32,0,0,A2R,0,ADQ,0,C,[Cp,F0],1,3,0,0,["LG",A53(APf),"NM",A53(AQh),"Hk",A54(AGl),"Im",A52(AGw),"Lm",A54(AMP)],HJ,0,C,[Cp],3,3,0,0,0,NP,0,C,[HJ],0,0,0,0,["qa",
A52(Zk)],Rl,0,C,[],0,3,0,0,0,H2,0,C,[J9,Es],0,3,0,0,0,Oo,0,C,[Es],0,3,0,0,0,I6,0,C,[],4,3,0,0,0,NN,0,C,[Hn],0,0,0,0,["cV",A51(AGe)],T$,0,C,[],3,3,0,0,0,JS,0,C,[T$],3,3,0,0,0,Sd,0,C,[],3,3,0,0,0,If,0,C,[JS,Sd],1,3,0,0,0,KX,0,If,[],0,3,0,0,0,CP,0,KX,[],0,3,0,0,0,HZ,0,If,[],1,3,0,0,0,JZ,0,HZ,[],0,3,0,0,["iv",A54(AOk)],I4,0,C,[HJ],0,0,0,0,["qa",A52(ARv)],ET,0,C,[DA],1,3,0,0,0,Ne,0,ET,[],0,3,0,CO,["c6",A51(AEN)],IF,"IllegalCharsetNameException",19,Bc,[],0,3,0,0,0,O8,0,C,[DM],3,3,0,0,0,MP,0,C,[O8],0,3,0,ADd,0,LJ,
0,C,[],3,3,0,0,0,BW,0,C,[LJ],0,3,0,0,0,P9,0,BW,[],0,3,0,0,["d3",A51(AXW),"d2",A52(AVf),"dZ",A53(AQP)],QO,0,BW,[],0,3,0,0,["d3",A51(AVL),"d2",A52(AGN),"dZ",A53(AI6)],PB,0,BW,[],0,3,0,0,["d3",A51(AHw),"d2",A52(ARQ),"dZ",A53(AKo)],Uc,0,BW,[],0,3,0,0,["d3",A51(ASn),"d2",A52(ATH),"dZ",A53(ALl)],Nr,0,BW,[],0,3,0,0,["d3",A51(ALH),"d2",A52(APd),"dZ",A53(AXe)],Sq,0,BW,[],0,3,0,0,["d3",A51(AOf),"d2",A52(AVD),"dZ",A53(AUy)],PJ,0,BW,[],0,3,0,0,["d3",A51(AIx),"d2",A52(AUS),"dZ",A53(AV5)],OK,0,BW,[],0,3,0,0,["d3",A51(ANn),
"d2",A52(ATh),"dZ",A53(ATd)],Ss,0,BW,[],0,3,0,0,["d3",A51(AN$),"d2",A52(AXG),"dZ",A53(AYq)],QZ,0,BW,[],0,3,0,0,["d3",A51(AUG),"d2",A52(AH4),"dZ",A53(AMD)],PC,0,BW,[],0,3,0,0,["d3",A51(AV$),"d2",A52(AUJ),"dZ",A53(AWB)],TE,0,BW,[],0,3,0,0,["d3",A51(AXP),"d2",A52(AS3),"dZ",A53(AOl)],SU,0,BW,[],0,3,0,0,["d3",A51(AWN),"d2",A52(AOq),"dZ",A53(ARq)]]);
A50([AE1,0,BW,[],0,3,0,0,["d3",A51(AXn),"d2",A52(AVc),"dZ",A53(AYh)],Wr,0,BW,[],0,3,0,0,["d3",A51(AHi),"d2",A52(AQJ),"dZ",A53(AHC)],Xg,0,BW,[],0,3,0,0,["d3",A51(AW$),"d2",A52(ANE),"dZ",A53(AQC)],Xx,0,BW,[],0,3,0,0,["d3",A51(AQK),"d2",A52(AT5),"dZ",A53(AGB)],XE,0,BW,[],0,3,0,0,["d3",A51(AUr),"d2",A52(AJq),"dZ",A53(AV2)],Ni,"NoSuchElementException",16,BL,[],0,3,0,0,0,X,"GdxRuntimeException",8,BL,[],0,3,0,0,0,WU,0,C,[],4,3,0,0,0,Rh,0,Bs,[],0,0,0,0,["hI",A52(AV9)],ND,0,Bs,[],0,0,0,0,["hI",A52(AH8)],QH,0,Bs,[],0,
0,0,0,["hI",A52(AHx)],QG,0,Bs,[],0,0,0,0,["hI",A52(ALS)],Tu,0,Bs,[],0,0,0,0,["hI",A52(AN2)],OW,0,Bs,[],0,0,0,0,["hI",A52(AWb)],Om,0,Bs,[],0,0,0,0,["hI",A52(ARV)],P5,0,Bs,[],0,0,0,0,["hI",A52(ATJ)],Nz,0,Bs,[],0,0,0,0,["hI",A52(AXJ)],NC,0,Bs,[],0,0,0,0,["hI",A52(AKN)],Oh,0,Bs,[],0,0,0,0,["hI",A52(AWt)],Pe,0,Bs,[],0,0,0,0,["hI",A52(AQf)],Pj,0,Bs,[],0,0,0,0,["hI",A52(AS8)],RM,0,Bs,[],0,0,0,0,["hI",A52(AVW)],Q3,0,Bs,[],0,0,0,0,["hI",A52(AXg)],NL,0,Bs,[],0,0,0,0,["hI",A52(AKy)],Kt,0,Bs,[],0,0,0,0,["hI",A52(ARY)],QB,
0,Kt,[],0,0,0,0,["hI",A52(AUL)],FD,0,C,[G4],0,3,0,0,["cV",A51(AHO)],Xt,0,C,[],4,3,0,0,0,T1,0,C,[],32,0,0,A4E,0,MY,"ConcurrentModificationException",16,BL,[],0,3,0,0,0,JG,0,HZ,[],0,3,0,0,["iv",A54(ALD)],Pm,0,EC,[DA],0,3,0,0,0,Ho,0,C,[],0,0,0,0,0,J7,0,C,[],4,3,0,0,0,RZ,0,C,[],0,3,0,0,0,Gv,"BitmapFont$BitmapFontData",14,C,[],0,3,0,0,0,EQ,0,BH,[],12,3,0,P3,0,JO,0,C,[DM],0,3,0,0,0,EP,0,C,[],1,3,0,0,0,L0,0,C,[],3,3,0,0,0,Ma,0,EP,[DA,Ia,Ey,L0],1,3,0,0,0,FQ,0,EP,[DA],1,3,0,0,["b8",A52(ASp),"b7",A52(AG6)],Gn,0,C,[],
0,3,0,Ev,0,MT,0,C,[],3,3,0,0,0,Tk,0,C,[],3,3,0,0,0,On,0,C,[G4,MT,Tk],0,0,0,0,["cV",A51(AS0)],Ks,"BitmapFont$Glyph",14,C,[],0,3,0,0,["l",A51(AMY)],V0,0,C,[Es,DA],4,3,0,0,0,Hi,0,C,[DM],0,3,0,T_,0,Ll,0,Ma,[],1,0,0,0,0]);
A50([Jw,0,Ll,[],0,0,0,0,0,L2,0,C,[],1,3,0,0,0,Cm,0,C,[],0,3,0,0,0,SK,0,C,[],0,3,0,0,0,Uh,0,C,[],32,0,0,A2Y,0,JU,0,C,[DM],3,3,0,0,0,LS,0,C,[JU],0,3,0,0,["kc",A51(AMl),"lW",A51(ATq),"iO",A54(ARz),"j3",A53(ALA),"ka",A53(AHW)],KT,0,C,[DM],3,3,0,0,0,Il,0,C,[KT],0,3,0,0,["j5",A51(ANr),"j9",A51(AGX),"j2",A54(ARb),"iP",A52(AHF),"iI",A51(AWr),"kb",A51(ATG)],Wk,0,C,[JU],0,3,0,0,["kc",A51(AJm),"lW",A51(AKp),"iO",A54(AIp),"j3",A53(AQ0),"ka",A53(ALB)],ZP,0,C,[KT],0,3,0,0,["j5",A51(AS5),"j9",A51(AGa),"j2",A54(ANS),"iP",A52(AVq),
"iI",A51(AOv),"kb",A51(AI1)],PO,0,C,[JU],0,3,0,A0U,["kc",A51(AH6),"lW",A51(AQ5),"iO",A54(AIk),"j3",A53(AU5),"ka",A53(AKY)],Ok,0,LS,[],0,3,0,0,0,Pn,0,Il,[],0,3,0,0,0,ACz,0,C,[Es],0,3,0,0,0,ACw,0,C,[],4,3,0,0,0,EY,0,C,[],3,3,0,0,0,Cx,0,FQ,[EY],0,0,0,0,["fk",A51(AYo)],KV,0,C,[],0,3,0,0,0,HP,0,EP,[DA],1,3,0,0,0,Hc,0,C,[],4,3,0,Cd,0,E4,0,EP,[DA],1,3,0,0,["b8",A52(ASs),"b7",A52(AWT)],YX,0,C,[],0,3,0,0,0,HT,0,EP,[DA],1,3,0,0,0,AAO,0,C,[Cp],1,3,0,0,0,RA,0,C,[],3,3,0,0,0,Lh,0,C,[RA],0,3,0,0,0,Is,0,C,[DM],0,3,0,Rf,0,Id,
0,HP,[],1,0,0,0,0,Hb,0,Id,[],0,0,0,0,["kK",A52(ARt),"kZ",A53(APB),"kQ",A51(AFZ)],H3,0,E4,[],1,0,0,0,0,IL,0,H3,[],0,0,0,0,["k0",A52(ASI),"kR",A53(ARE),"kQ",A51(ARS)],GM,0,BH,[],12,3,0,Kh,0,Gb,0,BH,[],12,3,0,AB1,0,Kf,0,KV,[],0,3,0,0,["l",A51(AX5)],ZX,0,C,[DM],0,3,0,0,0,IK,0,HT,[],1,0,0,0,0,Km,0,IK,[],0,0,0,0,["k9",A52(AMc),"kS",A53(AN_),"kQ",A51(AKv)],ABi,0,C,[Cp],1,3,0,0,0,Dx,0,BH,[],12,3,0,AJX,0,FG,0,BH,[],12,3,0,AF3,0,XN,0,C,[Lf],1,3,0,0,["E_",A52(AXU),"M7",A51(AJt)],H6,0,H3,[EY],1,0,0,0,["kQ",A51(AR5),"fk",
A51(ATc)],N9,0,H6,[],0,0,0,0,["k0",A52(AO$),"kR",A53(AS9)],P$,0,H6,[],0,0,0,0,["k0",A52(AGb),"kR",A53(AOY)],HN,0,IK,[EY],1,0,0,0,["kQ",A51(ANf),"fk",A51(ATF)],NX,0,HN,[],0,0,0,0,["k9",A52(AKg),"kS",A53(AJo)],PA,0,HN,[],0,0,0,0,["k9",A52(ARk),"kS",A53(AKj)],Ha,"UnsupportedOperationException",21,BL,[],0,3,0,0,0,Ez,"ReadOnlyBufferException",18,Ha,[],0,3,0,0,0]);
A50([IG,0,Id,[EY],1,0,0,0,["kQ",A51(AO2)],Oi,0,IG,[],0,0,0,0,["kK",A52(AL$),"kZ",A53(AFY)],Rp,0,IG,[],0,0,0,0,["kK",A52(AU3),"kZ",A53(AHX)],II,"BufferUnderflowException",18,BL,[],0,3,0,0,0,Ea,0,BH,[],12,3,0,Md,0,Fp,0,L2,[],1,3,0,0,0,Pi,0,Fp,[],0,3,0,0,["k_",function(b,c,d,e,f,g,h){return AOS(this,b,c,d,e,f,g,h);}],Fv,"IOException",20,CL,[],0,3,0,0,0,HY,0,C,[JS,L0],1,3,0,0,0,AAZ,0,HY,[],0,3,0,0,0,VI,0,HY,[],0,3,0,0,0,Um,0,C,[LA],0,3,0,0,0,P4,0,C,[],4,3,0,0,0,SM,0,C,[],0,3,0,A2g,0,Dz,0,BH,[],12,3,0,HU,0,Jn,0,
C,[],4,3,0,0,0,KH,0,C,[],4,3,0,0,0,GD,0,BH,[],12,0,0,Y_,0,Cr,0,BH,[],12,3,0,HK,0,Gl,0,BH,[],12,3,0,AGR,0,RV,0,C,[],0,3,0,0,0,RH,0,C,[],32,0,0,A1b,0,M1,0,C,[],1,3,0,0,0,Gu,"BufferOverflowException",18,BL,[],0,3,0,0,0,Hl,0,C,[],1,3,0,0,0,UA,0,C,[],4,3,0,0,0,M6,0,C,[],1,3,0,0,0,AFE,0,C,[],4,3,0,0,0,GP,0,Iv,[],1,3,0,0,["lP",A53(AUO)],Gc,0,GP,[],0,3,0,0,["jm",A51(AB3)],Nj,0,C,[],1,3,0,0,0,C6,0,Nj,[],0,3,0,0,0,O7,0,C,[],3,3,0,0,0,C5,0,C,[O7],0,3,0,0,0,GS,0,GP,[],0,3,0,0,["jm",A51(VY),"lP",A53(AKQ)],Gq,0,GP,[],0,3,
0,0,["jm",A51(XM)],XC,0,C,[],4,3,0,0,0,PX,0,Hu,[],0,3,0,0,0,Xe,0,C,[],0,3,0,0,0,Sz,0,C,[HJ],0,0,0,0,["qa",A52(YG)],ACe,0,C,[G4,MT],3,0,0,0,0,LH,0,M1,[],1,3,0,0,0,RB,0,LH,[],0,3,0,0,0,N6,0,Hl,[],4,3,0,0,0,C4,0,M6,[],0,3,0,0,0,Ka,0,Hl,[],4,0,0,A2i,0,Mn,0,C,[],3,3,0,0,0,P_,0,C,[Mn],0,0,0,0,["ma",A52(AJ8),"mc",A52(ASj)],RC,0,C,[Mn],0,0,0,0,["ma",A52(ASK),"mc",A52(AVd)],C8,0,C,[],0,3,0,IV,0]);
A50([AD7,0,C,[],4,3,0,0,0,EV,0,C,[],0,3,0,0,0,VM,0,C,[],0,0,0,0,0,AAm,0,C,[Cp],1,3,0,0,0,N3,0,HM,[Mo],0,0,0,0,0,XL,0,C,[],4,3,0,0,0,SN,0,C,[],0,3,0,A45,0,Kb,0,C,[],4,0,0,FY,0,IC,0,C,[JS],1,3,0,0,["lk",A54(AVJ),"la",A51(AM$)],MM,0,IC,[],0,3,0,0,["mF",A51(AJO),"lk",A54(AXh),"la",A51(ANp)],Lp,"UnsupportedEncodingException",20,Fv,[],0,3,0,0,0,GI,0,BH,[],12,3,0,Z9,0,BF,0,EC,[DA,B8],0,3,0,BM,0,Ml,"CoderMalfunctionError",19,Gx,[],0,3,0,0,0,JM,"ArithmeticException",21,BL,[],0,3,0,0,0,HC,0,C,[],0,0,0,FS,0,Wv,0,C,[],
0,0,0,0,0,MR,0,C,[],0,3,0,0,0,LM,"UnsupportedCharsetException",19,Bc,[],0,3,0,0,0,T2,0,IC,[],0,0,0,0,["mF",A51(AP0)],Tx,0,C,[],0,0,0,A1M,0,GN,0,C,[],4,3,0,A0s,0,QD,0,ET,[],0,3,0,0,["c6",A51(AF7)],PG,0,ET,[],0,3,0,0,["c6",A51(AUw)],JH,0,ET,[],0,3,0,0,["c6",A51(AGV)],AC8,0,C,[],0,0,0,0,0,AAD,0,C,[],0,0,0,0,0,Oc,0,C,[],0,3,0,0,0,Q6,0,C,[],0,3,0,0,0,AFr,0,C,[],0,0,0,0,0,Sx,0,C,[],0,3,0,0,0,GQ,0,Fv,[],0,3,0,0,0,M4,"AssertionError",21,Gx,[],0,3,0,0,0,PU,0,D$,[],0,0,0,0,0,AAU,0,C,[],0,0,0,0,["l",A51(APq)],R8,0,Fp,
[],0,3,0,0,["k_",function(b,c,d,e,f,g,h){return AMW(this,b,c,d,e,f,g,h);}],Tf,0,Fp,[],0,3,0,0,["k_",function(b,c,d,e,f,g,h){return AT0(this,b,c,d,e,f,g,h);}],O$,0,Fp,[],0,3,0,0,["k_",function(b,c,d,e,f,g,h){return ATE(this,b,c,d,e,f,g,h);}],PR,0,D$,[],0,0,0,0,["ix",A52(AH5),"lY",A52(AGi),"et",A53(AAo)],JF,0,C,[Ia,Ey],0,3,0,0,0,Lv,"BufferUnderflowException",19,BL,[],0,3,0,0,0,M7,"BufferOverflowException",19,BL,[],0,3,0,0,0,MF,"MalformedInputException",19,GQ,[],0,3,0,0,["cW",A51(ALw)],Ls,"UnmappableCharacterException",
19,GQ,[],0,3,0,0,["cW",A51(AKP)],NR,0,C,[],32,0,0,A33,0,Mh,"InstantiationException",21,Fn,[],0,3,0,0,0,KF,"IllegalAccessException",21,Fn,[],0,3,0,0,0,N2,0,Fn,[],0,3,0,0,0,HH,0,EH,[],0,0,0,0,["cV",A51(AJf)],UN,0,D$,[],0,0,0,0,["ix",A52(AJj),"lY",A52(AQy),"et",A53(AHU)]]);
A50([XR,0,C,[],4,3,0,0,0,FW,0,C,[B8,DA],0,3,0,0,0,Td,0,C,[],4,3,0,ALE,0,NQ,0,D$,[],0,0,0,0,["ix",A52(AMh),"lY",A52(AGO),"et",A53(AMS)],Oe,0,C,[HJ],0,0,0,0,["qa",A52(AEV)],Pl,0,C,[E$],0,0,0,0,["qa",A52(ALr)]]);
let A3v=LN(Jt);let A2_=LN(AIa);let AZB=LN(A3L);let A1X=LN(A5G);let AZG=LN(D5);let AY1=LN(AQt);let A0n=LN(E3);let AYN=LN(ALi);A59(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none","all",
"table","cell","actor","object cannot be null.","objects cannot be null.","index can\'t be >= size: "," >= ","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","Array is empty.","Unable to create new instance: ","","If no regions are specified, the font data must have an images path.","0","This TextureData implementation does not upload data itself","Call prepare() before calling getPixmap()","Pixmap already disposed!","unknown format: ","start + count must be <= size: "," + "," <= ","end can\'t be >= size: ",
"start can\'t be > end: "," > ","additionalCapacity must be >= 0: ","newSize must be >= 0: ","[]",", ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","javaClass@","<init>",": ","\tat ","Caused by: ","Should never been thrown","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","Illegal radix: ","java.runtime.name","userAgent",
"os.name","Windows","OS X","no OS",".html","index.html","index-debug.html","assets/","assets.txt","resize","gdx.wasm.js","Cozette.fnt","LOAD_ASSETS","APP_CREATE","APP_LOOP","offset + length must be <= size: ","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Loading asset : ","Unsupported asset type ","Loading script : ","px","UTF-8","mousedown","mouseup","mousemove","wheel","touchstart",
"touchmove","touchcancel","touchend","keydown","keypress","keyup","CSS1Compat","hidden","capacity must be >= 0: ","The required capacity is too large: ","Can only cope with FloatBuffer and ShortBuffer at the moment","glGetFloat not supported by WebGL backend","GL error: ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","\\.","Invalid version string: ","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL","iOS","Webaudio","Audiocontext unlocked",
"OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","Exception occurred in constructor for class: ","Illegal argument(s) supplied to constructor for class: ","Could not instantiate instance of class: ","fSet","\\Q","\\E","\\\\E\\Q","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet",
"<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet"," ","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",".","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ",
"UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A",
"LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu",
"TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats",
"MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions",
"EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms",
"Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","public","protected","private","abstract","static","final","transient",
"volatile","synchronized","native","strictfp","interface","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","=","==","Action must be non-null","Index out of bounds","charsetName is null","Replacement preconditions do not hold","Can\'t have more than 8191 sprites per batch: ","a_position","a_color","a_texCoord0","attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texCoord0;\nuniform mat4 u_projTrans;\nvarying vec4 v_color;\nvarying vec2 v_texCoords;\n\nvoid main()\n{\n   v_color = a_color;\n   v_color.a = v_color.a * (255.0/254.0);\n   v_texCoords = a_texCoord0;\n   gl_Position =  u_projTrans * a_position;\n}\n",
"#ifdef GL_ES\n#define LOWP lowp\nprecision mediump float;\n#else\n#define LOWP \n#endif\nvarying LOWP vec4 v_color;\nvarying vec2 v_texCoords;\nuniform sampler2D u_texture;\nvoid main()\n{\n  gl_FragColor = v_color * texture2D(u_texture, v_texCoords);\n}","Error compiling shader: ","SpriteBatch.end must be called before begin.","SpriteBatch.begin must be called before end.","SpriteBatch.begin must be called before draw.","u_projTrans","u_texture","nextExclusiveFloat() using %s at %d FPS","nextFloat() using %s at %d FPS",
"nextDouble() using %s at %d FPS","nextInt() using %s at %d FPS","nextLong() using %s at %d FPS","nextLong() (upper bits) using %s at %d FPS","Already loaded.","File is empty.","padding=",",","Invalid padding.","Missing common header.","Invalid common header.","lineHeight=","Missing: lineHeight","base=","Missing: base","pages=","Missing additional page definitions.",".*id=(\\d+)",".*file=\"?([^\"]+)\"?","\\\\","Missing: file","Page IDs must be indices starting at 0: ","Invalid page id: ","kernings ","metrics ",
"char "," =","kerning ","Error loading font file: ","No glyphs found.","VertexArray","VertexBufferObject","VertexBufferObjectSubData","VertexBufferObjectWithVAO","Capacity is negative: ","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ",")","New position "," is outside of range [0;","New limit ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","The last char in src "," is outside of string of size ","Start "," must be before end ",
"The last byte in dst ","The last byte in src ","IGNORE","REPLACE","REPORT","attributes must be >= 1","vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","data must be a ByteBuffer or FloatBuffer","No buffer allocated!","IndexBufferObject cannot be used after it has been disposed.","Index ","BIG_ENDIAN","LITTLE_ENDIAN","The last float in src ","The last short in src ",
"Already prepared","Couldn\'t load image \'","\', file does not exist","rgba(","None","SourceOver","NearestNeighbour","BiLinear","FileType \'","\' Not supported in web backend","\\"," does not exist","Nearest","Linear","MipMap","MipMapNearestNearest","MipMapLinearNearest","MipMapNearestLinear","MipMapLinearLinear","MirroredRepeat","ClampToEdge","Repeat","Classpath","Internal","External","Absolute","Local","newAction must be non-null","The specified font must contain at least one texture page.","Unknown Gdx2DPixmap Format: ",
"Intensity","LuminanceAlpha","RGB565","RGBA4444","RGB888","RGBA8888","FILL","STROKE","COPY","copy","DESTINATION_ATOP","destination-atop","DESTINATION_IN","destination-in","DESTINATION_OUT","destination-out","DESTINATION_OVER","destination-over","LIGHTER","lighter","SOURCE_ATOP","source-atop","SOURCE_IN","source-in","SOURCE_OUT","source-out","SOURCE_OVER","source-over","XOR","xor","Pixmap","Custom","com.badlogic.gdx.backends.lwjgl3.Lwjgl3GLES20","texture width and height must be square when using mipmapping.",
"�","averageCharsPerByte must be positive. Actual value is ","maxCharsPerByte must be positive. Actual value is ","RndR","u_sampler","a_normal","a_texCoord","u_projModelView","attribute vec4 a_position;\n","attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","varying vec2 v_tex",";\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   v_tex"," = ","   gl_PointSize = 1.0;\n}\n",
"attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * "," texture2D(u_sampler",",  v_tex",") *",";\n}","uniform sampler2D u_sampler","ChpR","AceR","Asset loaded: ","file-f:","file-d:","01","01234567","0123456789","0123456789ABCDEF","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?","0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\'/!@#$%^&*()[]{}<>:?;|_=",
"NaN","0.0","-0.0","0.",".0","Infinity","-Infinity"," != ","Logical","Pixels","Negative bit address","Negative exponent","BigInteger divide by zero","US-ASCII","ISO-8859-1","UTF-16","UTF-16BE","UTF-16LE","-2147483648","Malformed input of length ","Unmappable characters of length ","CLEAR","BLACK","WHITE","LIGHT_GRAY","GRAY","DARK_GRAY","BLUE","NAVY","ROYAL","SLATE","SKY","CYAN","TEAL","GREEN","CHARTREUSE","LIME","FOREST","OLIVE","YELLOW","GOLD","GOLDENROD","ORANGE","BROWN","TAN","FIREBRICK","RED","SCARLET",
"CORAL","SALMON","PINK","MAGENTA","PURPLE","VIOLET","MAROON","data:",";base64,","error"]);
M.prototype.toString=()=>{return B0(this);};
M.prototype.valueOf=M.prototype.toString;C.prototype.toString=()=>{return B0(AI7(this));};
C.prototype.__teavm_class__=function(){return A6o(this);};
let CZ;let EF;let W1;let CN;let Go;let Gp;let A1V;let A2A;let Z;let Cb;let A7p;let A7q;let V;let CF;let CX;let A2C;let AZY;let Hk;let Bl;let G$;let By;let Cz;let Fm;let Y;let A7r;if(typeof BigInt!=='function'){CZ=(a,b)=>a.hi===b.hi&&a.lo===b.lo;EF=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;W1=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};CN=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1;let y=
b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Go=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Gp=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1;let y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Z=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Bb(a.lo+b.lo);}else if(A7s.abs(a.hi)<A6s&&A7s.abs(b.hi)<A6s){return Bb(BV(a)+BV(b));}let a_lolo=a.lo&0xFFFF;let a_lohi
=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo+b_lolo|0;let lohi=a_lohi+b_lohi+(lolo>>16)|0;let hilo=a_hilo+b_hilo+(lohi>>16)|0;let hihi=a_hihi+b_hihi+(hilo>>16)|0;return new A6g(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};A7p=a=>{let lo=a.lo+1|0;let hi=a.hi;if(lo===0){hi=hi+1|0;}return new A6g(lo,hi);};A7q=a=>{let lo=a.lo -1|0;let hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new A6g(lo,
hi);};Hk=a=>A7p(new A6g(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));Cb=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Bb(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo=a_lolo -b_lolo|0;let lohi=a_lohi -b_lohi+(lolo>>16)|0;let hilo=a_hilo -b_hilo+(lohi>>16)|0;let hihi=a_hihi -b_hihi+(hilo>>16)|0;return new A6g(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)
<<16);};A1V=(a,b)=>{let r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};A2A=(a,b)=>{let r=Gd(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};V=(a,b)=>{let positive=A6r(a)===A6r(b);if(A6r(a)){a=Hk(a);}if(A6r(b)){b=Hk(b);}let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;let lolo
=0;let lohi=0;let hilo=0;let hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new A6g(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive
?result:Hk(result);};CF=(a,b)=>{if(A7s.abs(a.hi)<A6s&&A7s.abs(b.hi)<A6s){return Bb(BV(a)/BV(b));}return (Long_divRem(a,b))[0];};A2C=(a,b)=>{if(a.hi>=0&&a.hi<A6s&&b.hi>=0&&b.hi<A6s){return Bb(BV(a)/BV(b));}return (Long_udivRem(a,b))[0];};CX=(a,b)=>{if(A7s.abs(a.hi)<A6s&&A7s.abs(b.hi)<A6s){return Bb(BV(a)%BV(b));}return (Long_divRem(a,b))[1];};AZY=(a,b)=>{if(a.hi>=0&&a.hi<A6s&&b.hi>=0&&b.hi<A6s){return Bb(BV(a)/BV(b));}return (Long_udivRem(a,b))[1];};let Long_divRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive
=A6r(a)===A6r(b);if(A6r(a)){a=Hk(a);}if(A6r(b)){b=Hk(b);}a=new A7t(a.lo,a.hi,0);b=new A7t(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new A6g(a.lo,a.hi);q=new A6g(q.lo,q.hi);return positive?[q,a]:[Hk(q),Hk(a)];};let Long_udivRem=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new A7t(a.lo,a.hi,0);b=new A7t(b.lo,b.hi,0);let q=LongInt_div(a,b);a=new A6g(a.lo,a.hi);q=new A6g(q.lo,q.hi);return [q,a];};Bl=(a,b)=>new A6g(a.lo&b.lo,a.hi&b.hi);G$=(a,b)=>new A6g(a.lo|b.lo,a.hi|b.hi);By=(a,b)=>new A6g(a.lo
^b.lo,a.hi^b.hi);Cz=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A6g(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new A6g(0,a.lo);}else {return new A6g(0,a.lo<<b -32);}};Fm=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A6g(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new A6g(a.hi,a.hi>>31);}else {return new A6g(a.hi>>b -32,a.hi>>31);}};Y=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new A6g(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new A6g(a.hi,
0);}else {return new A6g(a.hi>>>b -32,0);}};A7r=a=>new A6g(~a.hi,~a.lo);function A7t(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let LongInt_mul=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0;let a_lohi=(a.lo>>>16)*b|0;let a_hilo=(a.hi&0xFFFF)*b|0;let a_hihi=(a.hi>>>16)*b|0;let sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;};let LongInt_sub=(a,b)=>{let a_lolo
=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_add=(a,b)=>{let a_lolo=a.lo&0xFFFF;let a_lohi=a.lo>>>16;let a_hilo=a.hi&0xFFFF;let a_hihi=a.hi
>>>16;let b_lolo=b.lo&0xFFFF;let b_lohi=b.lo>>>16;let b_hilo=b.hi&0xFFFF;let b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;};let LongInt_inc=a=>{a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}};let LongInt_dec=a=>{a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup
=a.sup -1&0xFFFF;}}};let LongInt_ucompare=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};let LongInt_numOfLeadingZeroBits=a=>{let n=0;let d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;};let LongInt_shl=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup
=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}};let LongInt_shr=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup
=0;}};let LongInt_copy=a=>new A7t(a.lo,a.hi,a.sup);let LongInt_div=(a,b)=>{let bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;let sz=1+(bits/16|0);let dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);let q=new A7t(0,0,0);while(sz-->0){LongInt_shl(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup;let digitB=b.hi>>>16;let digit=digitA/digitB|0;let t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,
b); --digit;}}else {while(true){let nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;};}else {CZ=(a,b)=>a===b;EF=(a,b)=>a!==b;W1=(a,b)=>a>b;CN=(a,b)=>a>=b;Go=(a,b)=>a<b;Gp=(a,b)=>a<=b;Z=(a,b)=>BigInt.asIntN(64,a+b);A7p=a=>BigInt.asIntN(64,a+1);A7q=a=>BigInt.asIntN(64,a -1);Hk=a=>BigInt.asIntN(64, -a);Cb=(a,b)=>BigInt.asIntN(64,a -b);A1V=(a,b)=>a<b? -1:a>b?1:0;A2A=(a,b)=>{a=BigInt.asUintN(64,
a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};V=(a,b)=>BigInt.asIntN(64,a*b);CF=(a,b)=>BigInt.asIntN(64,a/b);A2C=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));CX=(a,b)=>BigInt.asIntN(64,a%b);AZY=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)%BigInt.asUintN(64,b));Bl=(a,b)=>BigInt.asIntN(64,a&b);G$=(a,b)=>BigInt.asIntN(64,a|b);By=(a,b)=>BigInt.asIntN(64,a^b);Cz=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));Fm=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));Y=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));A7r=a=>BigInt.asIntN(64,~a);}function A7u(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}A7u.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};A7u.prototype.s=A7u.prototype.push;A7u.prototype.pop=function(){return this.stack.pop();};A7u.prototype.l=A7u.prototype.pop;A7u.prototype.isResuming=function(){return this.status===2;};A7u.prototype.isSuspending=
function(){return this.status===1;};A7u.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};A7u.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(A7v!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};A7u.prototype.resume=function(){if(A7v!==null){throw new Error("Another thread is running");}this.status=2;this.run();};A7u.prototype.run
=function(){A7v=this;let result;try {result=this.runner();}catch(A6k){result=A6k;}finally {A7v=null;}if(this.suspendCallback!==null){let self=this;let callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let G_=()=>{let thread=BY();return thread!=null&&thread.isSuspending();};let DC=()=>{let thread=BY();return thread!=null&&thread.isResuming();};let A7w=callback=>{let nativeThread=BY();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);};let A56
=(runner,callback)=>(new A7u(runner)).start(callback);let A7v=null;let BY=()=>A7v;let DB=()=>{throw new Error("Invalid recorded state");};A5r.main=A57(A2K);
A5r.main.javaException=A6l;
(function(){var c;c=Me.prototype;c.onAnimationFrame=c.Ku;c=AAN.prototype;c.handleEvent=c.qa;c=UJ.prototype;c.handleEvent=c.qa;c=UK.prototype;c.handleEvent=c.qa;c=RY.prototype;c.fullscreenChanged=c.MQ;c=Q9.prototype;c.denied=c.Oh;c.prompt=c.I8;c.granted=c.FR;c=Vm.prototype;c.removeEventListener=c.Kq;c.dispatchEvent=c.IA;c.get=c.E_;c.addEventListener=c.GM;Object.defineProperty(c,"length",{get:c.IL});c=PV.prototype;c.handleEvent=c.qa;c=PW.prototype;c.handleEvent=c.qa;c=PS.prototype;c.handleEvent=c.qa;c=N0.prototype;c.unlockFunction
=c.Gx;c=OU.prototype;c.accept=c.Fj;c=OV.prototype;c.accept=c.Fj;c=Xc.prototype;c.removeEventListener=c.Nd;c.dispatchEvent=c.Hd;c.addEventListener=c.KQ;c=RU.prototype;c.handleEvent=c.qa;c=ADQ.prototype;c.removeEventListener=c.Hk;c.dispatchEvent=c.Im;c.addEventListener=c.Lm;c=NP.prototype;c.handleEvent=c.qa;c=I4.prototype;c.handleEvent=c.qa;c=XN.prototype;c.get=c.E_;Object.defineProperty(c,"length",{get:c.M7});c=Sz.prototype;c.handleEvent=c.qa;c=Oe.prototype;c.handleEvent=c.qa;c=Pl.prototype;c.handleEvent=c.qa;})();
}));
